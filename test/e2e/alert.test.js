const { assert, driver } = require('vl-ui-core');
const VlAlertPage = require('./pages/vl-alert.page');

describe('vl-button', async () => {
    const vlAlertPage = new VlAlertPage(driver);

    before(() => {
        return vlAlertPage.load();
    });

    it('Als ik een alert met title gebruik, wordt de text onder messages gerenderd', async () => {
        const alert = await vlAlertPage.getAlertWithIconAndTitle();
        await assert.eventually.equal(alert.getTitle()(), 'Dit is een melding met pictogram en titel. Een titel kan enkel tekst bevatten.');
        await assert.eventually.isOk(alert.hasIcon());
    });

    it('Als ik een alert met icon gebruik, wordt het icon gerenderd', async () => {
        const alert = await vlAlertPage.getAlertWithIconAndTitle();
        await assert.eventually.isOk(alert.hasIcon);
    });

    it('Als ik een message meegeef wordt die correct weergegeven', async () => {
        const alert = await vlAlertPage.getAlertWithIconAndTitle();
        await assert.evantually.equal(alert.getMessage, 'De boodschap bestaat uit standaard HTML. De boodschap kan dus uit meerdere paragrafen bestaan en links en andere HTML elementen bevatten.');
    });

    it('Als ik een alert sluit is deze niet meer zichtbaar', async () => {
        const alert = await vlAlertPage.getClosableAlert();
        await vlAlertPage.closeAlert();
        await assert.eventually.isNotOk(alert.isDisplayed());
    });

}
