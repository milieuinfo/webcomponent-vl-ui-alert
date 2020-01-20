let fs = require('fs');
let es = require('event-stream');
let config = require('./package.json');

let lineNr = 0;

let output = fs.createWriteStream(getFilename() + '.temp', { encoding: 'utf-8'});
let stream = fs.createReadStream(getFilename())
    .pipe(es.split())
    .pipe(es.mapSync((line) => {
        stream.pause();
        lineNr += 1;
        
        if(line.indexOf('@import "') >= 0) {
            console.log('Found import on line ' + lineNr + ": " + line.trim());
            let filePath = sanitizeFilepath(line);
            console.log('Reading file from ' + filePath);
            let style = fs.readFileSync(filePath);
            output.write(style + '\r\n');
        } else {
            output.write(line + '\r\n');
        }

        stream.resume();
    })
    .on('error', (err) => {
        console.log('Something went wrong.', err);
    })
    .on('end', () => {
        console.log('Exploded style successfully!');
        output.end();
        cleanup();
    })
);

function sanitizeFilepath(input) {
    return input.split("\"")[1].replace('../', '')
}

function getFilename() {
    return config.name.replace('-ui', '') + '.src.js'
}

function deleteSource() {
    fs.unlinkSync(getFilename(), (err) => {
        if(err) throw err
    });
}

function renameTempFile() {
    fs.renameSync(getFilename() + '.temp', getFilename(), () => {
        console.log('Rename done');
    });
}

function cleanup() {
    deleteSource();
    renameTempFile();
}
