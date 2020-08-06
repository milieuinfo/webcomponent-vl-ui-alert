const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlAlertPage = require('./pages/vl-alert.page');
const {VlButton} = require('vl-ui-button').Test;

describe('vl-alert', async () => {
  const vlAlertPage = new VlAlertPage(driver);

  before(() => {
    return vlAlertPage.load();
  });

  it('Als gebruiker kan ik de titel van een alert zien', async () => {
    const alert = await vlAlertPage.getAlert();
    await assert.eventually.isTrue(alert.hasTitle());
    await assert.eventually.equal(alert.getTitle(), 'Opgelet!');
  });

  it('Als gebruiker kan ik de tekst van een alert zien', async () => {
    const alert = await vlAlertPage.getAlert();
    const slots = await alert.getMessagesSlotElements();
    await assert.eventually.equal(slots[0].getText(), 'U heeft geen rechten om deze actie uit te voeren. Vraag rechten aan.');
  });

  it('Als gebruiker kan ik zien dat het icon wordt gerenderd', async () => {
    const alert = await vlAlertPage.getAlert();
    await assert.eventually.isTrue(alert.hasIcon());
    const icon = await alert.getIcon();
    await assert.eventually.equal(icon.getType(), 'warning');
  });


  it('Als gebruiker kan ik het verschil zien tussen een closable en gewone alert', async () => {
    const alert = await vlAlertPage.getAlert();
    const closableAlert = await vlAlertPage.getClosableAlert();
    assert.eventually.isFalse(alert.isClosable());
    assert.eventually.isTrue(closableAlert.isClosable());
  });

  it('Als gebruiker kan ik een alert niet meer zien nadat die gesloten is', async () => {
    const alert = await vlAlertPage.getClosableAlert();
    await assert.eventually.isTrue(alert.isDisplayed());
    await alert.close();
    try {
      await vlAlertPage.getClosableAlert();
      assert.fail('Alert zou niet meer mogen bestaan!');
    } catch (error) {
      assert.isOk('Alert betsaat niet meer!');
    }
  });

  it('Als gebruiker kan ik de actie button van een alert zien', async () => {
    const alert = await vlAlertPage.getAlertWithButton();
    const slots = await alert.getActionsSlotElements();
    const button = await new VlButton(driver, slots[0]);
    await assert.eventually.equal(button.getText(), 'Fout melden');
  });

  it('Als gebruiker kan ik zien dat een alert met small size, klein is', async () => {
    const alert = await vlAlertPage.getAlert();
    const smallAlert = await vlAlertPage.getSmallAlert();
    await assert.eventually.isFalse(alert.isSmall());
    await assert.eventually.isTrue(smallAlert.isSmall());
  });

  it('Als gebruiker kan ik een error alert herkennen aan de kleur', async () => {
    const alert = await vlAlertPage.getAlert();
    const errorAlert = await vlAlertPage.getAlertError();
    await assert.eventually.isFalse(alert.isError());
    await assert.eventually.isTrue(errorAlert.isError());
  });

  it('Als gebruiker kan ik een warning alert herkennen aan de kleur', async () => {
    const alert = await vlAlertPage.getAlert();
    const warningAlert = await vlAlertPage.getAlertWarning();
    await assert.eventually.isFalse(alert.isWarning());
    await assert.eventually.isTrue(warningAlert.isWarning());
  });

  it('Als gebruiker kan ik een success alert herkennen aan de kleur', async () => {
    const alert = await vlAlertPage.getAlert();
    const successAlert = await vlAlertPage.getSuccessAlert();
    await assert.eventually.isFalse(alert.isSuccess());
    await assert.eventually.isTrue(successAlert.isSuccess());
  });

  it('Als gebruiker kan ik een info alert herkennen aan de kleur', async () => {
    const alert = await vlAlertPage.getAlert();
    const infoAlert = await vlAlertPage.getAlertInfo();
    await assert.eventually.isFalse(alert.isInfo());
    await assert.eventually.isTrue(infoAlert.isInfo());
  });
});
