const { VlElement } = require('vl-ui-core').Test;
const { VlIcon } = require('vl-ui-icon').Test;
const { By } = require('vl-ui-core').Test.Setup;

class VlAlert extends VlElement {
    async _exists(selector) {
        return await this.shadowRoot.findElement(By.css(selector)) != null;
    }

    async _innerText(selector) {
        const element = await this.shadowRoot.findElement(By.css(selector));
        return this.driver.executeScript('return arguments[0].innerText', element);
    }

    async _alertHasClass(clazz) {
        const classes =  await this.shadowRoot.getAttribute('class');
        return classes.indexOf(clazz) > 0;
    }

    async getCloseButton() {
        return await this.shadowRoot.findElement(By.css('#close'));
    }
    
    async isPresent() {
        return this.driver.findElements(By.css(this.selector)).size > 0;
    }
    
    async getTitle() {
        return this._innerText('#title');
    }

    async getMessagesInSlot() {
        const slot = await this.shadowRoot.findElement(By.css("#messages-slot"));
        return this.getAssignedElements(slot);
    }

    async getActions() {
      const slot = await this.shadowRoot.findElement(By.css("#actions-slot"));
      return this.getAssignedElements(slot);
    }

    async hasIcon() {
        return this._exists('.vl-alert__icon');
    }

    async getIcon() {
        const icon = await this.shadowRoot.findElement(By.css('.vl-alert__icon [is=vl-icon]'));
        return new VlIcon(this.driver, icon);
    }

    async hasTitle() {
        return this._exists('#title');
    }

    async isClosable() {
        return this._exists('.vl-alert__close');
    }
    
    async isSuccess() {
        return this._exists('[icon="check"]');
    }

    async isWarning() {
        return this._exists('[icon="alert-triangle"]');
    }

    async isError() {
        return this._exists('[icon="warning"]');
    }
    
    async isInfo() {
        return this._exists('[icon="info"]');
    }

    async isCta() {
        return this._alertHasClass('vl-alert--cta');
    }

    async isSmall() {
        return this._alertHasClass('vl-alert--small');
    }
    
    async isLarge() {
        return this._alertHasClass('vl-alert--large');
    }

    async close() {
        const button = await this.getCloseButton();
        return button.click();
    }
}

module.exports = VlAlert;
