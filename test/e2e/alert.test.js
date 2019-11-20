const { assert, driver } = require('vl-ui-core');
const VlButtonPage = require('./pages/vl-button.page');

describe('vl-button', async () => {
    const vlButtonPage = new VlButtonPage(driver);

    before(() => {
        return vlButtonPage.load();
    });

    it('als gebruiker wil ik dat mijn klik geregistreerd wordt wanneer ik op een knop klik', async () => {
        const button = await vlButtonPage.getPrimaryButton();
        await assert.eventually.equal(button.getText(), 'Gegevens opslaan');
        await button.click();
        await assert.eventually.equal(button.getText(), 'Klik geregistreerd');
    });
}
