import"./node_modules/vl-ui-core/vl-core.src.js";customElements.define("vl-alert",class extends HTMLElement{constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._shadow.innerHTML=`
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
        `,this._el=this._shadow.querySelector(".vl-alert"),this._iconEl=this._shadow.querySelector(".vl-alert__icon"),this._titleEl=this._shadow.querySelector(".vl-alert__title")}static get observedAttributes(){return["icon","title","closable","type","size"]}attributeChangedCallback(e,t,i){switch(e){case"icon":this._iconChangedCallback(t,i);break;case"title":this._titleChangedCallback(i);break;case"closable":this._closableChangedCallback();case"type":this._typeChangedCallback(t,i);case"size":this._sizeChangedCallback(t,i)}}_iconChangedCallback(e,t){if(!this.hasAttribute("icon"))return void this._shadow.querySelector(".vl-alert__icon").remove();if(!this._shadow.querySelector(".vl-alert__icon")){const e=`
                <div class="vl-alert__icon">
                    <i class="vl-vi vl-vi-${t}" aria-hidden="true"></i>
                    <vl-icon icon="calendar"></vl-icon>
                </div>
            `,i=document.createElement("div");i.innerHTML=e.trim();const s=i.firstChild;return this._el.insertBefore(s,this._el.firstChild),void i.remove()}this._shadow.querySelector(".vl-alert__icon").classList.remove(".vl-vi-"+e),this._shadow.querySelector(".vl-alert__icon").classList.add(".vl-vi-"+t)}_titleChangedCallback(e){this._titleEl.textContent=e}_closableChangedCallback(){if(this.hasAttribute("closable")||this._shadow.querySelector(".vl-alert__close").remove(),this.hasAttribute("closable")){const e=`
                <button class="vl-alert__close" type="button">
                    <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
                    <span class="vl-u-visually-hidden">Melding sluiten</span>
                </button>
            `,t=document.createElement("div");t.innerHTML=e.trim();const i=t.firstChild;this._el.appendChild(i),i.addEventListener("click",e=>this.remove())}}_typeChangedCallback(e,t){const i=["success","warning","error"];i.indexOf(e)>=0&&this._el.classList.remove("vl-alert--"+e),i.indexOf(t)>=0&&this._el.classList.add("vl-alert--"+t)}_sizeChangedCallback(e,t){const i=["large","small"];i.indexOf(e)>=0&&this._el.classList.remove("vl-alert--"+e),i.indexOf(t)>=0&&this._el.classList.add("vl-alert--"+t)}});