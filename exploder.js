let fs = require('fs');
let es = require('event-stream');


let lineNr = 0;

let output = fs.createWriteStream('output.js', { flags: 'a', encoding: 'utf-8'});
let stream = fs.createReadStream('vl-alert.src.js')
    .pipe(es.split())
    .pipe(es.mapSync((line) => {
        stream.pause();
        
        lineNr += 1;
        
        if(line.indexOf('@import "') >= 0) {
            console.log('Found import on line ' + lineNr + ": " + line.trim());
            let filePath = line.split("\"")[1]
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
        console.log('All done!');
        output.end();
    })
);
