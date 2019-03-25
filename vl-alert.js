import{VlElement}from"https://cdn.milieuinfo.be/vl-ui-alert/1.0.0/node_modules/vl-ui-core/vl-core.js";export class VlAlert extends VlElement{constructor(){super(`
            <style>
                @import "https://cdn.milieuinfo.be/vl-ui-alert/1.0.0/style.css";
            </style>
            <div class="vl-alert" role="alert">
                <div class="vl-alert__content">
                    <p class="vl-alert__title"></p>
                    <div class="vl-alert__message">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `)}static get _observedAttributes(){return["icon","title","closable","type","size"]}get _titelElement(){return this._element.querySelector(".vl-alert__title")}get _iconElement(){return this._element.querySelector(".vl-alert__icon")}get _closeButtonElement(){return this._element.querySelector(".vl-alert__close")}_getIconTemplate(newValue){return this._template(`
            <div class="vl-alert__icon">
                <i class="vl-vi vl-vi-${newValue}" aria-hidden="true"></i>
                <vl-icon icon="calendar"></vl-icon>
            </div>
        `)}_getCloseButtonTemplate(){return this._template(`
            <button class="vl-alert__close" type="button">
                <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
                <span class="vl-u-visually-hidden">Melding sluiten</span>
            </button>
        `)}_iconChangedCallback(oldValue,newValue){if(this._iconElement){this._iconElement.remove()}if(newValue!=undefined){this._element.insertBefore(this._getIconTemplate(newValue),this._element.firstChild)}}_titleChangedCallback(oldValue,newValue){this._titelElement.textContent=newValue}_closableChangedCallback(oldValue,newValue){if(this._closeButtonElement){this._closeButtonElement.remove()}if(newValue!=undefined){const closeButtonTemplate=this._getCloseButtonTemplate();closeButtonTemplate.querySelector("button").addEventListener("click",()=>this.remove());this._element.appendChild(closeButtonTemplate)}}_typeChangedCallback(oldValue,newValue){this._changeClass(this._element,("vl-alert--",+oldValue),"vl-alert--"+newValue)}_sizeChangedCallback(oldValue,newValue){this._changeClass(this._element,"vl-alert--"+oldValue,"vl-alert--"+newValue)}};customElements.define("vl-alert",VlAlert);