/**
 * vl-alert
 *
 * @demo demo/vl-alert.html
 */
import './node_modules/vl-ui-core/vl-core.src.js';


customElements.define('vl-alert', class extends HTMLElement {

    constructor() {

        // (always call super first)
        super();

        // Create shadow root
        this._shadow = this.attachShadow({mode: 'open'});
        this._shadow.innerHTML = `
            <style>
                @import "../style.css";
            </style>
            <div class="vl-alert" role="alert">
                <div class="vl-alert__content">
                    <p class="vl-alert__title"></p>
                    <div class="vl-alert__message">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
        this._el = this._shadow.querySelector(".vl-alert");
        this._iconEl = this._shadow.querySelector(".vl-alert__icon");
        this._titleEl = this._shadow.querySelector(".vl-alert__title");
    }



    //observed attributes
    static get observedAttributes() {return ['icon','title','closable','type','size']; }



    // Respond to attribute changes
    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case 'icon':
                this._iconChangedCallback(oldValue,newValue);
                break;
            case 'title':
                this._titleChangedCallback(newValue);
                break;
            case 'closable':
                this._closableChangedCallback();
            case 'type':
                this._typeChangedCallback(oldValue,newValue);
            case 'size':
                this._sizeChangedCallback(oldValue,newValue);
            default:
                break;
        }

    }


    _iconChangedCallback(oldValue,newValue) {

        // remove icon element if no icon attribute
        if(!this.hasAttribute("icon")){
            this._shadow.querySelector('.vl-alert__icon').remove();
            return;
        }

        // make icon element if it does not yet exists
        if(!this._shadow.querySelector('.vl-alert__icon')){

            const iconHtml=`
                <div class="vl-alert__icon">
                    <i class="vl-vi vl-vi-${newValue}" aria-hidden="true"></i>
                    <vl-icon icon="calendar"></vl-icon>
                </div>
            `;

            const div = document.createElement('div');
            div.innerHTML = iconHtml.trim();

            const iconEl = div.firstChild;
            this._el.insertBefore(iconEl,this._el.firstChild);

            div.remove();

            return;
        };

        // switch icon if both attribute and element exist
        this._shadow.querySelector('.vl-alert__icon').classList.remove(".vl-vi-"+oldValue);
        this._shadow.querySelector('.vl-alert__icon').classList.add(".vl-vi-"+newValue);

    };

    _titleChangedCallback(newValue) {

        this._titleEl.textContent = newValue;
    };

    _closableChangedCallback(){

        if (!this.hasAttribute("closable")){
            this._shadow.querySelector('.vl-alert__close').remove();
        }

        if (this.hasAttribute("closable")){

            const closeButtonHtml = `
                <button class="vl-alert__close" type="button">
                    <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
                    <span class="vl-u-visually-hidden">Melding sluiten</span>
                </button>
            `;

            const div = document.createElement('div');
            div.innerHTML = closeButtonHtml.trim();

            const closeButtonEl = div.firstChild;

            this._el.appendChild(closeButtonEl);

            closeButtonEl.addEventListener('click', e => this.remove());
        }
    }


    _typeChangedCallback(oldValue,newValue) {

        const options = ["success","warning","error"];

        if (options.indexOf(oldValue)>= 0){
            this._el.classList.remove('vl-alert--' + oldValue);
        }
        if (options.indexOf(newValue) >= 0){
            this._el.classList.add('vl-alert--' + newValue);
        }
    };

    _sizeChangedCallback(oldValue,newValue) {

        const options = ["large","small"];

        if (options.indexOf(oldValue)>= 0){
            this._el.classList.remove('vl-alert--' + oldValue);
        }
        if (options.indexOf(newValue)>= 0){
            this._el.classList.add('vl-alert--' + newValue);
        }
    };

});