const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlAlertPage = require('./pages/vl-alert.page');

describe('vl-alert', async () => {
  const vlAlertPage = new VlAlertPage(driver);

  before(() => {
    return vlAlertPage.load();
  });

  it('Als gebruiker kan ik de titel zien van een alert met titel', async () => {
    const alert = await vlAlertPage.getAlertWithIconInfoAndTitle();
    await assert.eventually.isTrue(alert.hasTitle());
    await assert.eventually.equal(alert.getTitle(), 'Dit is een melding met pictogram en titel. Een titel kan enkel tekst bevatten.');
  });

  it('Als gebruiker kan ik zien dat het icon wordt gerenderd met type info als ik een alert met icon gebruik.', async () => {
    const alert = await vlAlertPage.getAlertWithIconInfoAndTitle();
    await assert.eventually.isTrue(alert.hasIcon());
    const icon = await alert.getIcon();
    await assert.eventually.equal(icon.getType(), 'info');
    await assert.eventually.isTrue(alert.isInfo());
  });

  it('Als gebruiker kan ik een zelf gedefinieerde message zien', async () => {
    await assert.eventually.notStrictEqual(vlAlertPage.getMessageInAlert(),
        'De boodschap bestaat uit standaard HTML. De boodschap kan dus uit meerdere paragrafen bestaan en links en andere HTML elementen bevatten.');
  });

  it('Als gebruiker kan ik een alert niet meer zien nadat die gesloten is', async () => {
    const alert = await vlAlertPage.getClosableAlert();
    await alert.close();
    await assert.eventually.isFalse(alert.isPresent());
  });

  it('Als gebruiker kan ik een success alert herkennen aan het icon', async () => {
    const alert = await vlAlertPage.getSuccessAlert();
    await assert.eventually.isTrue(alert.isSuccess());
  });

  it('Als gebruiker kan ik een warning alert herkennen aan het icon', async () => {
    const alert = await vlAlertPage.getAlertWarning();
    await assert.eventually.isTrue(alert.isWarning());
  });

  it('Als gebruiker kan ik een error alert herkennen aan het icon', async () => {
    const alert = await vlAlertPage.getAlertError();
    await assert.eventually.isTrue(alert.isError());
  });

  it('Als gebruiker kan ik een cta alert herkennen aan de cta stijl', async () => {
    const alert = await vlAlertPage.getCtaAlert();
    await assert.eventually.isTrue(alert.isCta());
  });

  it('Als gebruiker kan ik zien dat een alert met small size, klein is', async () => {
    const alert = await vlAlertPage.getSmallAlert();
    await assert.eventually.isTrue(alert.isSmall());
  });

  it('Als gebruiker kan ik zien dat een alert met large size, groot is', async () => {
    const alert = await vlAlertPage.getLargeAlert();
    await assert.eventually.isTrue(alert.isLarge());
  });

  it('Als gebruiker kan ik de action button tekst van een alert met actions zien', async () => {
    const button = await vlAlertPage.getButtonInAlert();
    await assert.eventually.equal(button.getText(), 'Fout melden');
  });
});
