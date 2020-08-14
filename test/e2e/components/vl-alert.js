const {VlElement} = require('vl-ui-core').Test;
const {VlIcon} = require('vl-ui-icon').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlAlert extends VlElement {
  async getCloseButton() {
    return await this.shadowRoot.findElement(By.css('#close'));
  }

  async hasTitle() {
    return this._exists('#title');
  }

  async getTitle() {
    return this._innerText('#title');
  }

  async getMessagesSlotElements() {
    const slot = await this.shadowRoot.findElement(By.css('#messages-slot'));
    return this.getAssignedElements(slot);
  }

  async getActionsSlotElements() {
    const slot = await this.shadowRoot.findElement(By.css('#actions-slot'));
    return this.getAssignedElements(slot);
  }

  async hasIcon() {
    return this._exists('.vl-alert__icon');
  }

  async getIcon() {
    const icon = await this.shadowRoot.findElement(By.css('.vl-alert__icon [is=vl-icon]'));
    return new VlIcon(this.driver, icon);
  }

  async isClosable() {
    return this.hasAttribute('closable');
  }

  async isSuccess() {
    return this._isType('success');
  }

  async isWarning() {
    return this._isType('warning');
  }

  async isError() {
    return this._isType('error');
  }

  async isInfo() {
    return this._isType('info');
  }

  async isSmall() {
    return this._isSize('small');
  }

  async close() {
    const button = await this.getCloseButton();
    return button.click();
  }

  async _exists(selector) {
    return await this.shadowRoot.findElement(By.css(selector)) != null;
  }

  async _innerText(selector) {
    const element = await this.shadowRoot.findElement(By.css(selector));
    return this.driver.executeScript('return arguments[0].innerText', element);
  }

  async _isType(value) {
    const type = await this.getAttribute('type');
    return type == value;
  }

  async _isSize(value) {
    const size = await this.getAttribute('size');
    return size == value;
  }
}

module.exports = VlAlert;
