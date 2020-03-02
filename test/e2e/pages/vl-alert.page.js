const VlAlert = require('../components/vl-alert');
const { VlButton } = require('vl-ui-button').Test;
const { Page, Config } = require('vl-ui-core').Test;

class VLAlertPage extends Page {
    async _getAlert(selector) {
        return new VlAlert(this.driver, selector);
    }

    async getAlertWithIconInfoAndTitle() {
        return this._getAlert('#alert-iconAndTitle');
    }

    async getAlertWithIconAndMessage() {
        return this._getAlert('#alert-iconAndMessage');
    }

    async getAlertWithIconTitleAndMessage() {
        return this._getAlert('#alert-iconTitleAndMessage');
    }

    async getMessageInAlert() {
        const alert = await this.getAlertWithIconAndMessage();
        const message = (await alert.getMessages())[0];
        return this.driver.executeScript('return arguments[0].innerText', message);
    }

    async getClosableAlert() {
        return this._getAlert('#alert-closable');
    }

    async getSuccessAlert() {
        return this._getAlert('#alert-success');
    }

    async getAlertWarning() {
        return this._getAlert('#alert-warning');
    }

    async getAlertError() {
        return this._getAlert('#alert-error');
    }

    async getCtaAlert() {
        return this._getAlert('#alert-cta');
    }

    async getButtonInAlert() {
      const alert = await this.getCtaAlert();
      const button = (await alert.getActions())[0];
      return new VlButton(this.driver, button);
    }

    async getSmallAlert() {
        return this._getAlert('#alert-smallNoTitle');
    }

    async getSmallAlertWithTitle() {
        return this._getAlert('#alert-smallTitle ');
    }

    async getSmallAlertWithTitleAndMessage() {
        return this._getAlert('#alert-smallTitleAndMessage');
    }

    async getLargeAlert() {
        return this._getAlert('#alert-large');
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-alert.html');
    }
}

module.exports = VLAlertPage;
