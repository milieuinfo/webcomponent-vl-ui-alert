const VlAlert = require('../components/vl-alert');
const {Page, Config} = require('vl-ui-core').Test;

class VLAlertPage extends Page {
  async getAlert() {
    return this._getAlert('#alert');
  }

  async getClosableAlert() {
    return this._getAlert('#alert-closable');
  }

  async getAlertWithButton() {
    return this._getAlert('#alert-with-button');
  }

  async getSmallAlert() {
    return this._getAlert('#alert-small');
  }

  async getAlertError() {
    return this._getAlert('#alert-error');
  }

  async getAlertWarning() {
    return this._getAlert('#alert-warning');
  }

  async getSuccessAlert() {
    return this._getAlert('#alert-success');
  }

  async getAlertInfo() {
    return this._getAlert('#alert-info');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-alert.html');
  }

  async _getAlert(selector) {
    return new VlAlert(this.driver, selector);
  }
}

module.exports = VLAlertPage;
