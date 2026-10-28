/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,_=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??y)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[_("elementProperties")]=new Map,b[_("finalized")]=new Map,g?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=t=>t,A=x.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+C,P=`<${S}>`,M=document,L=()=>M.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,H="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,T=/>/g,z=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,F=/"/g,B=/^(?:script|style|textarea|title)$/i,D=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=D(1),V=D(2),q=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),Z=new WeakMap,G=M.createTreeWalker(M,129);function K(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=U;for(let a=0;a<i;a++){const e=t[a];let i,l,c=-1,d=0;for(;d<e.length&&(r.lastIndex=d,l=r.exec(e),null!==l);)d=r.lastIndex,r===U?"!--"===l[1]?r=j:void 0!==l[1]?r=T:void 0!==l[2]?(B.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=z):void 0!==l[3]&&(r=z):r===z?">"===l[0]?(r=n??U,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,i=l[1],r=void 0===l[3]?z:'"'===l[3]?F:R):r===F||r===R?r=z:r===j||r===T?r=U:(r=z,n=void 0);const h=r===z&&t[a+1].startsWith("/>")?" ":"";o+=r===U?e+P:c>=0?(s.push(i),e.slice(0,c)+E+e.slice(c)+C+h):e+C+(-2===c?a:h)}return[K(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=X(t,e);if(this.el=J.createElement(l,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=c[o++],i=s.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?it:"?"===r[1]?st:"@"===r[1]?nt:et}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],L()),G.nextNode(),a.push({type:2,index:++n});s.append(t[e],L())}}}else if(8===s.nodeType)if(s.data===S)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===q)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=N(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,s)),e}let Q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);G.currentNode=s;let n=G.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ot(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=G.nextNode(),o++)}return G.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),N(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new J(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new tt(this.O(L()),this.O(L()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Y(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Y(this,s[i+r],e,r),a===q&&(a=this._$AH[r]),o||=!N(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class nt extends et{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??W)===q)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(J,tt),(x.litHtmlVersions??=[]).push("3.3.3");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new tt(e.insertBefore(L(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");const dt=t=>!!t&&"none"!==t.action;function ht(t,e){let i,s,n=0,o=0,r=!1,a=!1;const l=i=>{const s=e(),n="tap"===i?s.tap_action:"hold"===i?s.hold_action:s.double_tap_action;dt(n)&&t.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:s,action:i}}))},c=()=>{void 0!==i&&clearTimeout(i),i=void 0},d=t=>{const s=t;s.button>0||(r=!0,a=!1,n=s.clientX,o=s.clientY,c(),dt(e().hold_action)&&(i=setTimeout(()=>{i=void 0,a=!0,l("hold")},500)))},h=t=>{if(!r)return;const e=t;Math.hypot(e.clientX-n,e.clientY-o)>10&&(c(),r=!1)},u=()=>{c(),r=!1},p=()=>{const t=r;c(),r=!1,t&&!a?dt(e().double_tap_action)?void 0!==s?(clearTimeout(s),s=void 0,l("double_tap")):s=setTimeout(()=>{s=void 0,l("tap")},250):l("tap"):a=!1},m=t=>{const e=t;e.repeat||"Enter"!==e.key&&" "!==e.key||(" "===e.key&&e.preventDefault(),l("tap"))},f=t=>{dt(e().hold_action)&&t.preventDefault()};return t.addEventListener("pointerdown",d),t.addEventListener("pointermove",h),t.addEventListener("pointerup",p),t.addEventListener("pointercancel",u),t.addEventListener("pointerleave",u),t.addEventListener("keydown",m),t.addEventListener("contextmenu",f),()=>{c(),void 0!==s&&clearTimeout(s),s=void 0,t.removeEventListener("pointerdown",d),t.removeEventListener("pointermove",h),t.removeEventListener("pointerup",p),t.removeEventListener("pointercancel",u),t.removeEventListener("pointerleave",u),t.removeEventListener("keydown",m),t.removeEventListener("contextmenu",f)}}const ut={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function pt(t){if(Object.prototype.hasOwnProperty.call(ut,t)){const{variable:e,fallback:i}=ut[t];return`var(${e}, ${i})`}return t}function mt(t,e){let i=e[0];for(const s of e){if(!(s.from<=t))break;i=s}return i}const ft={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},gt=["bar","thin","segmented","tank","ring","needle","arc"],_t=[{from:-1/0,color:"primary"}],vt=["none","ascending","descending"];function yt(t){if("number"==typeof t)return Number.isFinite(t)?t:void 0;if("string"==typeof t&&""!==t.trim()){const e=Number(t);return Number.isFinite(e)?e:void 0}}function $t(t,e){if(null==t||""===t)return;const i=yt(t);if(void 0!==i)return i;if("string"==typeof t)return t;throw new Error(`"${e}" must be a number or an entity id`)}function bt(t,e){if(null==t||""===t)return;const i=yt(t);if(void 0===i)throw new Error(`"${e}" must be a number`);return i}function xt(t){if(null==t)return;if(!Array.isArray(t))throw new Error('"severity" must be a list of bands');if(0===t.length)return;const e=t.map((t,e)=>{const i=yt(t?.from);if(void 0===i)throw new Error(`Severity band ${e+1}: "from" must be a number`);if("string"!=typeof t.color||!t.color)throw new Error(`Severity band ${e+1}: "color" is required`);return{...t,from:i}});return e.sort((t,e)=>t.from-e.from)}function wt(t,e,i){if(null==t)return{action:e};if("object"!=typeof t||"string"!=typeof t.action)throw new Error(`"${i}" must have an "action"`);return t}function At(t,e){return void 0!==t?t:e}function kt(t){if(!t||"object"!=typeof t)throw new Error("Invalid configuration");const e=t.style??"bar";if(!gt.includes(e))throw new Error(`Unknown style "${String(e)}". Use one of: ${gt.join(", ")}`);const i=t.sort??"none";if(!vt.includes(i))throw new Error(`Unknown sort "${String(i)}". Use one of: ${vt.join(", ")}`);if(void 0!==t.entities&&!Array.isArray(t.entities))throw new Error('"entities" must be a list');const s=(t.entities??[]).map((e,i)=>function(t,e,i){const s="string"==typeof t?{entity:t}:t;if(!s||"object"!=typeof s||"string"!=typeof s.entity||!s.entity)throw new Error(`Entity ${i+1} needs an "entity" id`);const n=At($t(s.min,"min"),$t(e.min,"min"))??0,o=At($t(s.max,"max"),$t(e.max,"max"))??100;if("number"==typeof n&&"number"==typeof o&&n>=o)throw new Error(`"max" (${o}) must be greater than "min" (${n})`);const r={...s,entity:s.entity,min:n,max:o,severity:xt(s.severity)??xt(e.severity)??_t,tap_action:wt(At(s.tap_action,e.tap_action),"more-info","tap_action"),hold_action:wt(At(s.hold_action,e.hold_action),"none","hold_action"),double_tap_action:wt(At(s.double_tap_action,e.double_tap_action),"none","double_tap_action")},a=At(s.name,e.name),l=At(s.icon,e.icon),c=At(s.unit,e.unit),d=At($t(s.target,"target"),$t(e.target,"target")),h=At(bt(s.decimals,"decimals"),bt(e.decimals,"decimals"));return void 0!==a&&(r.name=a),void 0!==l&&(r.icon=l),void 0!==c&&(r.unit=c),void 0!==d&&(r.target=d),void 0!==h&&(r.decimals=h),r}(e,t,i)),n={name:!0,value:!0,icon:!0,target:!0,legend:!1,...t.show},o=bt(t.columns,"columns"),r={style:e,entities:s,show:n,sort:i,animate:!1!==t.animate,legendBands:xt(t.severity)??_t};return void 0!==t.title&&(r.title=t.title),void 0!==o&&(r.columns=o),r}const Et={en:{entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours"}};function Ct(t){return(t?.locale?.language??t?.language??"en").split("-")[0]}function St(t,e,i){const s=Ct(t),n=Et[s]?.[e]??Et.en[e]??e;return i?n.replace(/\{(\w+)\}/g,(t,e)=>e in i?String(i[e]):t):n}function Pt(t){return null==t||""===t}function Mt(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function Lt(t,e,i){const[s,...n]=e,o=function(t,e){return Array.isArray(t)?[...t]:Mt(t)?{...t}:"number"==typeof e?[]:{}}(t,s),r=o,a=n.length?Lt(r[s],n,i):i,l=n.length>0&&Mt(a)&&0===Object.keys(a).length;return Pt(a)?Array.isArray(o)&&"number"==typeof s?o.splice(s,1):delete r[s]:l&&Mt(o)?delete r[s]:r[s]=a,o}function Nt(t,e,i){return 0===e.length||Pt(i)&&void 0===function(t,e){let i=t;for(const s of e){if("object"!=typeof i||null===i)return;i=i[s]}return i}(t,e)?t:Lt(t,e,i)}const Ot=[{name:"title",path:["title"]}],Ht=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]},{name:"animate",path:["animate"],default:!0}],Ut=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],jt=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],Tt=Ut.map(({name:t,path:e})=>({name:t,path:e})),zt=[{name:"title",selector:{text:{}}}],Rt=Ut.map(({name:t})=>({name:t,selector:{ui_action:{}}})),Ft=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:6,mode:"box"}}}]}];function Bt(t){const e=t=>({name:t,selector:{boolean:{}}});return[{type:"grid",name:"",schema:["show_name","show_value","show_icon","show_target","show_legend"].map(e)},{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(e=>({value:e,label:St(t,`editor_sort_${e}`)}))}}},{name:"decimals",selector:{number:{min:0,max:6,mode:"box"}}},{name:"unit",selector:{text:{}}}]},e("animate")]}let Dt;function It(t,e){let i=t;for(const s of e){if("object"!=typeof i||null===i)return;i=i[s]}return i}function Vt(t,e){if(t===e)return!0;if("object"!=typeof t||"object"!=typeof e||null===t||null===e)return!1;if(Array.isArray(t)!==Array.isArray(e))return!1;const i=Object.keys(t),s=Object.keys(e);return i.length===s.length&&i.every(i=>Vt(t[i],e[i]))}function qt(t,e){const i={};for(const s of e){const e=It(t,s.path)??s.default;void 0!==e&&(i[s.name]=e)}return i}function Wt(t,e,i){const s=qt(t,e);let n=t;for(const o of e){const t=i[o.name];Vt(s[o.name],t)||(n=Nt(n,o.path,void 0!==o.default&&Vt(t,o.default)?void 0:t))}return n}const Zt="var(--divider-color, rgba(127, 127, 127, 0.3))",Gt="var(--primary-color, #03a9f4)",Kt="var(--secondary-text-color, #727272)";function Xt(t,e,i,s){const n=(s-90)*Math.PI/180;return[(t+i*Math.cos(n)).toFixed(2),(e+i*Math.sin(n)).toFixed(2)]}function Jt(t,e,i,s){return Xt(t,e,i,s).join(" ")}function Yt(t,e,i,s,n){const o=n-s>180?1:0;return`M ${Jt(t,e,i,s)} A ${i} ${i} 0 ${o} 1 ${Jt(t,e,i,n)}`}function Qt(t){return I`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(t){switch(t){case"bar":return V`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${Zt} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${Gt} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${Zt} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${Gt} />`;case"thin":return V`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${Kt} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${Zt} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${Gt} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${Kt} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${Zt} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${Gt} />`;case"segmented":return V`${[0,1].map(t=>Array.from({length:8},(e,i)=>V`<rect x=${6+6.75*i} y=${0===t?9:23} width="5" height="9" rx="1.5"
            fill=${i<(0===t?6:3)?Gt:Zt} />`))}`;case"tank":return V`${[14,36].map((t,e)=>V`
          <rect x=${t} y="5" width="14" height="30" rx="4" fill=${Zt} />
          <rect x=${t} y=${0===e?13:23} width="14" height=${0===e?22:12} rx="4" fill=${Gt} />`)}`;case"ring":return V`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${Zt} stroke-width="5" />
        <path d=${Yt(32,20,14,0,250)} fill="none" stroke=${Gt} stroke-width="5" stroke-linecap="round" />`;case"arc":return V`
        <path d=${Yt(32,21,14,-135,135)} fill="none" stroke=${Zt} stroke-width="5" stroke-linecap="round" />
        <path d=${Yt(32,21,14,-135,40)} fill="none" stroke=${Gt} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[t,e]=Xt(32,32,18,25);return V`
        <path d=${Yt(32,32,22,-90,90)} fill="none" stroke=${Zt} stroke-width="5" />
        <path d=${Yt(32,32,22,-90,25)} fill="none" stroke=${Gt} stroke-width="5" />
        <line x1="32" y1="32" x2=${t} y2=${e} stroke=${Kt} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${Kt} />`}}}(t)}
  </svg>`}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=1;let ee=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie="important",se=" !"+ie,ne=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ee{constructor(t){if(super(t),t.type!==te||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)null==e[s]&&(this.ft.delete(s),s.includes("-")?i.removeProperty(s):i[s]=null);for(const s in e){const t=e[s];if(null!=t){this.ft.add(s);const e="string"==typeof t&&t.endsWith(se);s.includes("-")||e?i.setProperty(s,e?t.slice(0,-11):t,e?ie:""):i[s]=t}}return q}}),oe=Object.keys(ft),re=Object.keys(ut),ae="custom",le={text:{}};function ce(t){return void 0===t?"none":oe.find(e=>ft[e]&&Vt(ft[e],t))??"custom"}function de(t){return re.includes(t)}class he extends lt{_t(t){return St(this.hass,t)}_getSelectors(){const t=`${Ct(this.hass)}|${this.unit??""}`;if(this._selectors?.key===t)return this._selectors;const e=oe.map(t=>({value:t,label:this._t(`editor_preset_${t}`)})),i=t=>({select:{mode:"dropdown",options:t}});return this._selectors={key:t,preset:i(e),presetCustom:i([...e,{value:ae,label:this._t("editor_preset_custom")}]),color:i([...re,ae].map(t=>({value:t,label:this._t(`editor_color_${t}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t&&t.length?t:void 0}}))}_presetChanged(t){t.stopPropagation();const e=t.detail?.value;if(!e||e===ae||!oe.includes(e))return;if(e===ce(this.bands))return;const i=ft[e];this._emit(i?structuredClone(i):void 0)}_updateBand(t,e,i){const s=[...this.bands??[]],n={...s[t]};null==i||""===i?delete n[e]:n[e]=i,s[t]=n,this._emit(s)}_fromChanged(t,e){e.stopPropagation();const i=Number(e.detail?.value);""!==e.detail?.value&&null!=e.detail?.value&&Number.isFinite(i)&&this._updateBand(t,"from",i)}_colorChanged(t,e){e.stopPropagation();const i=e.detail?.value,s=this.bands?.[t]?.color??"primary";i&&(i!==ae?i!==s&&this._updateBand(t,"color",i):de(s)&&this._updateBand(t,"color",pt(s)))}_customColorChanged(t,e){e.stopPropagation();const i="string"==typeof e.detail?.value?e.detail.value.trim():"";i&&this._updateBand(t,"color",i)}_labelChanged(t,e){e.stopPropagation(),this._updateBand(t,"label",e.detail?.value)}_removeBand(t){const e=[...this.bands??[]];e.splice(t,1),this._emit(e)}_addBand(){const t=[...this.bands??[]],e=t[t.length-1]?.from;t.push({from:"number"==typeof e&&Number.isFinite(e)?e+10:0,color:"primary"}),this._emit(t)}_renderBand(t,e,i){const s=!de(t.color);return I`<div class="band">
      <span class="swatch" style=${ne({"--swatch":pt(t.color)})}></span>
      <ha-selector
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${i.from}
        .value=${t.from}
        @value-changed=${t=>this._fromChanged(e,t)}
      ></ha-selector>
      <ha-selector
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${i.color}
        .value=${s?ae:t.color}
        @value-changed=${t=>this._colorChanged(e,t)}
      ></ha-selector>
      <ha-selector
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${le}
        .value=${t.label??""}
        @value-changed=${t=>this._labelChanged(e,t)}
      ></ha-selector>
      <ha-icon-button
        class="remove"
        .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
        .label=${this._t("editor_remove_band")}
        @click=${()=>this._removeBand(e)}
      ></ha-icon-button>
      ${s?I`<ha-selector
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${le}
              .value=${t.color}
              @value-changed=${t=>this._customColorChanged(e,t)}
            ></ha-selector>`:W}
    </div>`}render(){const t=this._getSelectors(),e=ce(this.bands);return I`<ha-selector
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${e===ae?t.presetCustom:t.preset}
        .value=${e}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((e,i)=>this._renderBand(e,i,t))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}he.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1}},he.styles=o`
    :host {
      display: block;
    }
    .band {
      display: grid;
      grid-template-columns: 20px minmax(0, 1fr) minmax(0, 1.2fr) minmax(0, 1fr) auto;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
    .swatch {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--swatch);
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      box-sizing: border-box;
    }
    .custom {
      grid-column: 2 / -1;
    }
    .add-band {
      margin-top: 8px;
      padding: 6px 12px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      border-radius: 8px;
      background: none;
      color: var(--primary-color);
      font: inherit;
      cursor: pointer;
    }
    .add-band:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",he);const ue={number:{mode:"box",step:"any"}},pe={entity:{domain:["sensor","input_number","number"]}};function me(t){return null==t||""===t?"default":"number"==typeof t||""!==t.trim()&&Number.isFinite(Number(t))?"number":"entity"}class fe extends lt{willUpdate(t){t.has("value")&&"default"!==me(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const t=(t,e)=>St(this.hass,t,e),e=[{value:"default",label:t("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:t("editor_limit_number")},{value:"entity",label:t("editor_limit_entity")}],i=e.map(t=>t.label).join("|");return this._modeSelector?.key!==i&&(this._modeSelector={key:i,selector:{select:{mode:"dropdown",options:e}}}),this._modeSelector.selector}get _currentMode(){return this._mode??me(this.value)}_emit(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t}}))}_modeChanged(t){t.stopPropagation();const e=t.detail?.value;e&&e!==this._currentMode&&(this._mode=e,void 0!==this.value&&this._emit(void 0))}_numberChanged(t){t.stopPropagation();const e=t.detail?.value,i="number"==typeof e?e:""===e||null==e?NaN:Number(e);this._emit(Number.isFinite(i)?i:void 0)}_entityChanged(t){t.stopPropagation();const e=t.detail?.value;this._emit("string"==typeof e&&""!==e?e:void 0)}render(){const t=t=>St(this.hass,t),e=this._currentMode;return I`<ha-selector
        data-role="mode"
        .hass=${this.hass}
        .label=${this.label}
        .selector=${this._modeSelectorFor()}
        .value=${e}
        @value-changed=${this._modeChanged}
      ></ha-selector>
      ${"number"===e?I`<ha-selector
              data-role="number"
              .hass=${this.hass}
              .label=${t("editor_limit_number")}
              .selector=${ue}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===e?I`<ha-selector
                data-role="entity"
                .hass=${this.hass}
                .label=${t("editor_limit_entity")}
                .selector=${pe}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:W}`}}fe.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},fe.styles=o`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",fe);const ge=["min","max","target"];class _e extends lt{constructor(){super(),this._computeLabel=t=>this._t(`editor_${t.name}`),this._expanded=new Set}_t(t,e){return St(this.hass,t,e)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(t){t.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t.entities??[]}}))}_set(t,e,i){this._emit(function(t,e,i,s){if("entity"===i&&(Pt(s)||"string"!=typeof s))return t;const n=[...t.entities??[]],o=n[e];if(void 0===o)return t;const r="string"==typeof o?{entity:o}:{...o};Pt(s)?delete r[i]:r[i]=s;const a=Object.keys(r);return n[e]=1===a.length&&"entity"===a[0]&&"string"==typeof r.entity?r.entity:r,{...t,entities:n}}(this._asConfig,t,e,i))}_move(t,e){const i=new Set;for(const s of this._expanded)i.add(s===t?e:s===e?t:s);this._expanded=i,this._emit(function(t,e,i){const s=[...t.entities??[]];if(e<0||e>=s.length||e===i)return t;const[n]=s.splice(e,1);return s.splice(Math.max(0,Math.min(i,s.length)),0,n),{...t,entities:s}}(this._asConfig,t,e))}_remove(t){const e=new Set;for(const i of this._expanded)i!==t&&e.add(i>t?i-1:i);this._expanded=e,this._emit(function(t,e){const i=[...t.entities??[]];return e<0||e>=i.length?t:(i.splice(e,1),{...t,entities:i})}(this._asConfig,t))}_toggle(t){const e=new Set(this._expanded);e.delete(t)||e.add(t),this._expanded=e}_add(t){t.stopPropagation();const e=t.detail?.value;"string"==typeof e&&""!==e&&(t.target.value="",this._emit(function(t,e){return{...t,entities:[...t.entities??[],e]}}(this._asConfig,e)))}_formChanged(t,e,i){i.stopPropagation();const s=this.entities?.[t];if(void 0===s)return;const n="string"==typeof s?{entity:s}:s,o=Wt(n,e,i.detail?.value??{});if(o===n)return;const r=[...this.entities??[]],a=Object.keys(o);r[t]=1===a.length&&"entity"===a[0]?o.entity:o,this._emit({type:"",entities:r})}_rowLabel(t){const e=this.hass?.states[t];return e?{text:e.attributes.friendly_name||t,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:t}),missing:!0}:{text:t,missing:!1}}_form(t,e,i,s,n){return I`<ha-form
      data-section=${t}
      .hass=${this.hass}
      .data=${qt(i,n)}
      .schema=${s}
      .computeLabel=${this._computeLabel}
      @value-changed=${t=>this._formChanged(e,n,t)}
    ></ha-form>`}_renderOverrides(t,e){const i=t=>e=>{e.stopPropagation(),t(e.detail?.value)};return I`<div class="overrides">
      ${this._form("entity-text",e,t,Ft,jt)}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${t.icon??""}
        @value-changed=${i(t=>this._set(e,"icon",t))}
      ></ha-icon-picker>
      ${ge.map(s=>I`<cd-limit-field
            data-limit=${s}
            .hass=${this.hass}
            .label=${this._t(`editor_${s}`)}
            .value=${t[s]}
            .defaultLabel=${this._t("editor_card_setting")}
            @value-changed=${i(t=>this._set(e,s,t))}
          ></cd-limit-field>`)}
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${t.severity}
        .unit=${t.unit}
        @value-changed=${i(t=>this._set(e,"severity",t))}
      ></cd-bands-editor>
      ${this._form("entity-actions",e,t,Rt,Tt)}
    </div>`}_renderRow(t,e,i){const s=function(t){return"string"==typeof t?t:t.entity}(t),n="string"==typeof t?{entity:t}:t,o=this._rowLabel(s),r=this._expanded.has(e);return I`<div class="entity">
      <span class="label ${o.missing?"missing":""}">${o.text}</span>
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${s}
          allow-custom-entity
          @value-changed=${t=>{t.stopPropagation(),this._set(e,"entity",t.detail?.value)}}
        ></ha-entity-picker>
        <ha-icon-button
          class="up"
          .path=${"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
          .label=${this._t("editor_move_up")}
          .disabled=${0===e}
          @click=${()=>this._move(e,e-1)}
        ></ha-icon-button>
        <ha-icon-button
          class="down"
          .path=${"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
          .label=${this._t("editor_move_down")}
          .disabled=${e===i-1}
          @click=${()=>this._move(e,e+1)}
        ></ha-icon-button>
        <ha-icon-button
          class="remove"
          .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
          .label=${this._t("editor_remove_entity")}
          @click=${()=>this._remove(e)}
        ></ha-icon-button>
        <ha-icon-button
          class="expand"
          .path=${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
          .label=${this._t(r?"editor_hide_options":"editor_show_options")}
          aria-expanded=${r?"true":"false"}
          @click=${()=>this._toggle(e)}
        ></ha-icon-button>
      </div>
      ${r?this._renderOverrides(n,e):W}
    </div>`}render(){const t=this.entities??[];return I`${t.map((e,i)=>this._renderRow(e,i,t.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}_e.properties={hass:{attribute:!1},entities:{attribute:!1},_expanded:{state:!0}},_e.styles=o`
    :host {
      display: block;
    }
    .entity {
      border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      padding: 8px 0;
    }
    .label {
      display: block;
      font-size: 0.875em;
      color: var(--secondary-text-color);
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .label.missing {
      color: var(--error-color, #db4437);
    }
    .header {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .header ha-entity-picker {
      flex: 1;
      min-width: 0;
    }
    .expand {
      transition: transform 0.2s ease;
    }
    .expand[aria-expanded='true'] {
      transform: rotate(180deg);
    }
    @media (prefers-reduced-motion: reduce) {
      .expand {
        transition: none;
      }
    }
    .overrides {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0 8px 12px;
      border-left: 2px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      margin-top: 8px;
    }
    .add {
      display: block;
      margin-top: 8px;
    }
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",_e);class ve extends lt{constructor(){super(...arguments),this._label=t=>St(this.hass,t),this._computeLabel=t=>St(this.hass,`editor_${t.name}`)}setConfig(t){this._config=t}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]}),i=e?.constructor;await(i?.getConfigElement?.())}catch{}}()}_commit(t){this._config=t,function(t,e){t.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:e}}))}(this,t)}_formChanged(t,e){if(e.stopPropagation(),!this._config)return;const i=e.detail?.value??{};this._commit(Wt(this._config,t,i))}_form(t,e,i){return I`<ha-form
      data-section=${t}
      .hass=${this.hass}
      .data=${qt(this._config,i)}
      .schema=${e}
      .computeLabel=${this._computeLabel}
      @value-changed=${t=>this._formChanged(i,t)}
    ></ha-form>`}_panel(t,e){return I`<ha-expansion-panel .header=${this._label(`editor_section_${t}`)} outlined>
      <div class="panel section-${t}">${e}</div>
    </ha-expansion-panel>`}_subChanged(t,e){e.stopPropagation(),this._config&&this._commit(Nt(this._config,t,e.detail?.value))}renderEntities(){return I`<cd-entities-editor
      .hass=${this.hass}
      .entities=${this._config?.entities??[]}
      @value-changed=${t=>this._subChanged(["entities"],t)}
    ></cd-entities-editor>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([t,e])=>I`<cd-limit-field
          data-limit=${t}
          .hass=${this.hass}
          .label=${this._label(`editor_${t}`)}
          .value=${this._config?.[t]}
          .defaultLabel=${e}
          @value-changed=${e=>this._subChanged([t],e)}
        ></cd-limit-field>`)}renderColours(){return I`<cd-bands-editor
      .hass=${this.hass}
      .bands=${this._config?.severity}
      .unit=${this._config?.unit}
      @value-changed=${t=>this._subChanged(["severity"],t)}
    ></cd-bands-editor>`}_selectStyle(t){this._config&&this._commit(Nt(this._config,["style"],"bar"===t?void 0:t))}renderStyle(){const t=this._config?.style??"bar";return I`<div class="styles">
      ${gt.map(e=>I`<button
            type="button"
            class="style"
            data-style=${e}
            aria-pressed=${t===e?"true":"false"}
            @click=${()=>this._selectStyle(e)}
          >
            ${Qt(e)}<span>${this._label(`editor_style_${e}`)}</span>
          </button>`)}
    </div>`}renderDisplay(){return this._form("display",function(t){const e=Ct(t);return Dt?.language!==e&&(Dt={language:e,schema:Bt(t)}),Dt.schema}(this.hass),Ht)}renderActions(){return this._form("actions",Rt,Ut)}render(){return this._config?I`<div class="title">${this._form("title",zt,Ot)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this._panel("limits",this.renderLimits())} ${this._panel("colours",this.renderColours())}
      ${this._panel("display",this.renderDisplay())} ${this._panel("actions",this.renderActions())}`:W}}function ye(t,e,i){const{locale:s,grouping:n}=function(t){const e=t?.locale?.language??"en";switch(t?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:e,grouping:!0}}}(i),o=new Intl.NumberFormat(s,{minimumFractionDigits:e,maximumFractionDigits:e,useGrouping:n});let r=o.format(0===t?0:t);return 0===Number(t.toFixed(e))&&(r=o.format(0)),r}function $e(t,e,i){return!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(i)||i<=e?0:Math.min(1,Math.max(0,(t-e)/(i-e)))}function be(t,e,i){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(i)||i<=e)return[0,0];const s=$e(t,e,i);if(e<0&&i>0){const t=$e(0,e,i);return s<t?[s,t]:[t,s]}return[0,s]}ve.properties={hass:{attribute:!1},_config:{state:!0}},ve.styles=o`
    :host {
      display: block;
    }
    .title {
      display: block;
      margin-bottom: 16px;
    }
    ha-expansion-panel {
      display: block;
      margin-bottom: 8px;
    }
    .panel {
      padding: 8px 0;
    }
    .section-limits {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .styles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
      gap: 8px;
    }
    .style {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 8px 4px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      border-radius: 8px;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 0.875em;
      cursor: pointer;
    }
    .style:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
    .style[aria-pressed='true'] {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -1px;
      border-color: transparent;
    }
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",ve);const xe=new Set;function we(t){return null==t||""===t}function Ae(t){if(void 0===t||""===t.trim())return null;const e=Number(t);return Number.isFinite(e)?e:null}function ke(t,e){if(we(t))return null;if("number"==typeof t)return Number.isFinite(t)?t:null;const i=String(t),s=Ae(e.states[i]?.state);return null!==s||xe.has(i)||(xe.add(i),console.warn(`Chartdeck: limit entity "${i}" is missing or not numeric; using the default.`)),s}function Ee(t,e){return t.entities.map(t=>function(t,e){const i=t.entity,s=e.states[i],n=t.name??s?.attributes?.friendly_name??i,o=t.unit??s?.attributes?.unit_of_measurement??"",r=we(t.decimals)?function(t,e,i){const s=t?.entities?.[e]?.display_precision;return"number"==typeof s?s:"%"===i?0:1}(e,i,o):t.decimals,a=ke(t.min,e)??0,l=ke(t.max,e)??100,c=ke(t.target,e),d=Ae(s?.state),h=null!==d;let u,p="";return h?(p=ye(d,r,e),u=function(t,e){return e?`${t} ${e}`:t}(p,o)):u=s?e.formatEntityState?.(s)??St(e,"unavailable"):St(e,"entity_not_found"),{entityId:i,config:t,stateObj:s,available:h,value:d,min:a,max:l,target:c,name:n,unit:o,decimals:r,position:h?$e(d,a,l):0,span:h?be(d,a,l):[0,0],targetPosition:null===c?null:$e(c,a,l),band:mt(h?d:-1/0,t.severity),valueText:p,display:u,label:`${n}, ${u}`}}(t,e))}const Ce={layout:"rows",height:46,styles:o`
    .style-bar .entity {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 0;
    }
    .style-bar .icon {
      flex: none;
      color: var(--state-icon-color, var(--secondary-text-color));
      --mdc-icon-size: 22px;
    }
    .style-bar .track {
      position: relative;
      flex: 1;
      min-width: 0;
      height: 34px;
      border-radius: 8px;
      overflow: hidden;
      background: var(--cd-track);
    }
    .style-bar .fill {
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(var(--start) * 100%);
      width: calc((var(--end) - var(--start)) * 100%);
      border-radius: 8px;
      background: linear-gradient(90deg, var(--c-start), var(--c-end));
      transition:
        left var(--cd-duration) var(--cd-easing),
        width var(--cd-duration) var(--cd-easing);
    }
    .style-bar .target {
      position: absolute;
      top: 5px;
      bottom: 5px;
      width: 3px;
      border-radius: 2px;
      left: calc(var(--target) * (100% - 3px));
      background: rgba(255, 255, 255, 0.85);
      transition: left var(--cd-duration) var(--cd-easing);
    }
    .style-bar .text {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 12px;
      font-size: 14px;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    }
    .style-bar .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .style-bar .value {
      flex: none;
      margin-left: auto;
    }
    .style-bar .unavailable .text {
      color: var(--secondary-text-color);
      text-shadow: none;
    }
  `,render:(t,{show:e,hass:i})=>I`
      ${e.icon?I`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${t.config.icon}
            ></ha-state-icon>`:W}
      <div class="track">
        <div class="fill"></div>
        ${e.target&&null!==t.targetPosition&&t.available?I`<div class="target"></div>`:W}
        <div class="text">
          ${e.name?I`<span class="name">${t.name}</span>`:W}
          ${e.value?I`<span class="value">${t.display}</span>`:W}
        </div>
      </div>
    `},Se=t=>(Math.abs(t)<.005?0:t).toFixed(2);function Pe(t,e,i,s){const n=s*Math.PI/180;return[t+i*Math.sin(n),e-i*Math.cos(n)]}function Me(t,e,i,s,n){const o=String(Number(i.toFixed(2))),r=n-s,[a,l]=Pe(t,e,i,s);if(r>=359.99){const[n,r]=Pe(t,e,i,s+180);return`M${Se(a)} ${Se(l)} A${o} ${o} 0 1 1 ${Se(n)} ${Se(r)} A${o} ${o} 0 1 1 ${Se(a)} ${Se(l)}`}const[c,d]=Pe(t,e,i,n),h=r>180?1:0;return`M${Se(a)} ${Se(l)} A${o} ${o} 0 ${h} 1 ${Se(c)} ${Se(d)}`}function Le(t,e){const i=t/2;return[-i+e[0]*t,-i+e[1]*t]}const Ne=65,Oe=66;const He={layout:"tiles",height:130,styles:o`
    .needle-gauge {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      padding: 6px 0;
    }
    .needle-gauge svg {
      display: block;
      width: 130px;
      height: 104px;
      overflow: visible;
    }
    .needle-gauge .seg {
      fill: none;
      stroke-width: 12px;
      stroke-linecap: round;
    }
    .needle-gauge .tickmark {
      stroke: var(--secondary-text-color);
      stroke-width: 1.2px;
    }
    .needle-gauge .needle {
      fill: var(--primary-text-color);
      transform-origin: 65px 66px;
      transform: rotate(calc(-90deg + var(--pos) * 180deg));
      transition: transform 0.9s cubic-bezier(0.22, 1.4, 0.36, 1);
    }
    .needle-gauge .hub {
      fill: var(--primary-text-color);
    }
    .needle-gauge .hub-dot {
      fill: var(--card-background-color, var(--ha-card-background));
    }
    .needle-gauge .target-mark {
      fill: var(--primary-text-color);
    }
    .needle-gauge .value {
      font-size: 15px;
      font-weight: 500;
      fill: var(--primary-text-color);
    }
    .needle-gauge .na {
      font-size: 12px;
      fill: var(--secondary-text-color);
    }
    .needle-gauge .icon {
      color: var(--state-icon-color, var(--secondary-text-color));
      --mdc-icon-size: 18px;
    }
    .needle-gauge .name {
      display: flex;
      align-items: center;
      gap: 4px;
      max-width: 130px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .needle-gauge .name span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,render(t,{show:e,hass:i}){const s=function(t,e,i){const s=i-e,n=[];return s>0?(t.forEach((o,r)=>{const a=Math.max(o.from,e),l=Math.min(r+1<t.length?t[r+1].from:1/0,i);l>a&&n.push({from:(a-e)/s,to:(l-e)/s,color:o.color})}),n):n}(t.config.severity,t.min,t.max),n=s.map((t,e)=>{const i=180*t.from-90+(e>0?1:0),n=180*t.to-90-(e<s.length-1?1:0);return n>i?V`<path class="seg" d=${Me(Ne,Oe,50,i,n)} stroke=${pt(t.color)}></path>`:W}),o=Array.from({length:11},(t,e)=>{const[i,s]=Pe(Ne,Oe,36,18*e-90),[n,o]=Pe(Ne,Oe,40,18*e-90);return V`<line class="tickmark" x1=${i.toFixed(2)} y1=${s.toFixed(2)} x2=${n.toFixed(2)} y2=${o.toFixed(2)}></line>`});let r=W;if(e.target&&null!==t.targetPosition&&t.available){const e=180*t.targetPosition-90,[i,s]=Pe(Ne,Oe,57,e),[n,o]=Pe(Ne,Oe,64,e-3),[a,l]=Pe(Ne,Oe,64,e+3);r=V`<polygon class="target-mark" points="${i.toFixed(2)},${s.toFixed(2)} ${n.toFixed(2)},${o.toFixed(2)} ${a.toFixed(2)},${l.toFixed(2)}"></polygon>`}return I`<div class="needle-gauge">
      <svg viewBox="0 0 130 104" aria-hidden="true">
        ${n} ${o} ${r}
        ${t.available?V`<g class="needle"><path d=${a=Ne,l=Oe,c=42,d=3,`M${Se(a)} ${Se(l-c)} L${Se(a+d)} ${Se(l)} L${Se(a-d)} ${Se(l)} Z`}></path></g>`:W}
        <circle class="hub" cx=${Ne} cy=${Oe} r="6"></circle>
        <circle class="hub-dot" cx=${Ne} cy=${Oe} r="2.5"></circle>
        ${t.available?e.value?V`<text class="value" x=${Ne} y="94" text-anchor="middle">${t.display}</text>`:W:V`<text class="na" x=${Ne} y="94" text-anchor="middle">${t.display}</text>`}
      </svg>
      ${e.name||e.icon?I`<div class="name">
              ${e.icon?I`<ha-state-icon
                      class="icon"
                      .hass=${i}
                      .stateObj=${t.stateObj}
                      .icon=${t.config.icon}
                    ></ha-state-icon>`:W}
              ${e.name?I`<span class="name-text">${t.name}</span>`:W}
            </div>`:W}
    </div>`;var a,l,c,d}};let Ue=0;const je=new WeakMap;const Te=60,ze=60;function Re(t){const[e,i]=Le(t,[0,1]),s=Me(Te,ze,46,e,i);return{layout:"tiles",height:150,styles:o`
      .radial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 6px 0;
      }
      .radial .dial {
        position: relative;
        width: 124px;
        height: 120px;
      }
      .radial svg {
        display: block;
        width: 124px;
        height: 120px;
        overflow: visible;
      }
      .radial .track {
        fill: none;
        stroke: var(--cd-track);
        stroke-width: 11px;
        stroke-linecap: round;
      }
      .radial .disc {
        fill: var(--cd-track);
        opacity: 0.5;
      }
      .radial .value-arc {
        fill: none;
        stroke-width: 11px;
        stroke-linecap: round;
        stroke-dasharray: calc((var(--end) - var(--start)) * 100) 100;
        stroke-dashoffset: calc(var(--start) * -100);
        transition:
          stroke-dasharray var(--cd-duration) var(--cd-easing),
          stroke-dashoffset var(--cd-duration) var(--cd-easing);
      }
      .radial .value-arc.empty {
        opacity: 0;
      }
      .radial .stop-start {
        stop-color: var(--c-start);
      }
      .radial .stop-end {
        stop-color: var(--c-end);
      }
      .radial .tick {
        stroke: var(--primary-text-color);
        stroke-width: 2.5px;
      }
      .radial .value {
        font-size: 22px;
        font-weight: 500;
        fill: var(--primary-text-color);
      }
      .radial .unit {
        font-size: 11px;
        fill: var(--secondary-text-color);
      }
      .radial .na {
        font-size: 12px;
        fill: var(--secondary-text-color);
      }
      .radial .icon {
        position: absolute;
        left: 50%;
        top: 31px;
        transform: translateX(-50%);
        color: var(--state-icon-color, var(--secondary-text-color));
        --mdc-icon-size: 18px;
      }
      .radial .name {
        max-width: 124px;
        font-size: 12px;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `,render(e,{show:i,hass:n}){const o=function(t){let e=je.get(t);return e||(e="cd-g-"+ ++Ue,je.set(t,e)),e}(e.config),r=e.span[1]-e.span[0]<=0,a=i.icon?6:0;let l=W;if(i.target&&null!==e.targetPosition&&e.available){const i=Le(t,[e.targetPosition,e.targetPosition])[0],[s,n]=Pe(Te,ze,39.5,i),[o,r]=Pe(Te,ze,52.5,i);l=V`<line class="tick" x1=${s.toFixed(2)} y1=${n.toFixed(2)} x2=${o.toFixed(2)} y2=${r.toFixed(2)}></line>`}return I`<div class="radial">
        <div class="dial">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <linearGradient id=${o} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${Te} cy=${ze} r="34"></circle>
            <path class="track" d=${s}></path>
            ${e.available?V`<path
                  class="value-arc ${r?"empty":""}"
                  d=${s}
                  pathLength="100"
                  stroke="url(#${o})"
                ></path>`:W}
            ${l}
            ${e.available?V`${i.value?V`<text class="value" x=${Te} y=${64+a} text-anchor="middle">${e.valueText}</text>
                      <text class="unit" x=${Te} y=${80+a} text-anchor="middle">${e.unit}</text>`:W}`:V`<text class="na" x=${Te} y=${64} text-anchor="middle">${e.display}</text>`}
          </svg>
          ${i.icon&&e.available?I`<ha-state-icon
                  class="icon"
                  .hass=${n}
                  .stateObj=${e.stateObj}
                  .icon=${e.config.icon}
                ></ha-state-icon>`:W}
        </div>
        ${i.name?I`<span class="name">${e.name}</span>`:W}
      </div>`}}}const Fe=Re(360),Be=Re(270);function De(t){const[e,i]=t;return Array.from({length:10},(t,s)=>{const n=(s+.5)/10;return n>e&&n<=i})}const Ie={layout:"rows",height:50,styles:o`
    .style-segmented .entity {
      display: flex;
      align-items: flex-end;
      gap: 12px;
      padding: 6px 0;
    }
    .style-segmented .icon {
      flex: none;
      align-self: flex-end;
      color: var(--state-icon-color, var(--secondary-text-color));
      --mdc-icon-size: 22px;
    }
    .style-segmented .body {
      flex: 1;
      min-width: 0;
    }
    .style-segmented .name {
      font-size: 14px;
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--primary-text-color);
    }
    .style-segmented .cells {
      display: flex;
      gap: 4px;
      height: 20px;
    }
    .style-segmented .cell {
      position: relative;
      flex: 1;
      border-radius: 4px;
      background: var(--cd-track);
    }
    .style-segmented .cell::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 4px;
      background: linear-gradient(180deg, var(--c-start), var(--c-end));
      opacity: 0;
      transition: opacity calc(var(--cd-duration) / 3) var(--cd-easing);
    }
    .style-segmented .cell.on::before {
      opacity: 1;
      transition-delay: calc(var(--i) * 45ms);
    }
    :host(:not([ready])) .style-segmented .cell::before {
      opacity: 0;
      transition-delay: 0s;
    }
    .style-segmented .cell.mark {
      outline: 2px solid var(--primary-text-color);
      outline-offset: 0;
    }
    .style-segmented .value {
      flex: none;
      width: 48px;
      text-align: right;
      font-size: 14px;
      padding-bottom: 2px;
      color: var(--primary-text-color);
    }
  `,render(t,{show:e,hass:i}){const s=t.available?De(t.span):De([0,0]),n=e.target&&t.available&&null!==t.targetPosition?Math.min(9,Math.max(0,Math.floor(10*t.targetPosition))):-1;return I`
      ${e.icon?I`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${t.config.icon}
            ></ha-state-icon>`:W}
      <div class="body">
        ${e.name?I`<div class="name">${t.name}</div>`:W}
        <div class="cells">
          ${s.map((t,e)=>I`<i class="cell ${t?"on":""} ${e===n?"mark":""}" style="--i:${e}"></i>`)}
        </div>
      </div>
      ${e.value?I`<span class="value">${t.display}</span>`:W}
    `}},Ve={layout:"tiles",height:230,tilesPerRow:4,styles:o`
    .style-tank .entity {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      padding: 6px 0;
    }
    .style-tank .layout-tiles {
      justify-content: space-around;
      align-items: flex-end;
    }
    .style-tank .icon {
      color: var(--state-icon-color, var(--secondary-text-color));
      --mdc-icon-size: 22px;
    }
    .style-tank .value {
      font-size: 13px;
      color: var(--primary-text-color);
    }
    .style-tank .tube {
      position: relative;
      width: 40px;
      height: 140px;
      border-radius: 10px;
      overflow: hidden;
      background: var(--cd-track);
    }
    .style-tank .fill {
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(var(--start) * 100%);
      height: calc((var(--end) - var(--start)) * 100%);
      border-radius: 10px;
      background: linear-gradient(0deg, var(--c-start), var(--c-end));
      transition:
        bottom var(--cd-duration) var(--cd-easing),
        height var(--cd-duration) var(--cd-easing);
    }
    .style-tank .target {
      position: absolute;
      left: 0;
      right: 0;
      height: 3px;
      bottom: calc(var(--target) * (100% - 3px));
      background: var(--primary-text-color);
      transition: bottom var(--cd-duration) var(--cd-easing);
    }
    .style-tank .name {
      max-width: 72px;
      font-size: 12px;
      color: var(--secondary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,render:(t,{show:e,hass:i})=>I`
      ${e.icon?I`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${t.config.icon}
            ></ha-state-icon>`:W}
      ${e.value?I`<span class="value">${t.display}</span>`:W}
      <div class="tube">
        <div class="fill"></div>
        ${e.target&&null!==t.targetPosition&&t.available?I`<div class="target"></div>`:W}
      </div>
      ${e.name?I`<span class="name">${t.name}</span>`:W}
    `},qe={layout:"rows",height:44,styles:o`
    .style-thin .entity {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 0;
    }
    .style-thin .icon {
      flex: none;
      color: var(--state-icon-color, var(--secondary-text-color));
      --mdc-icon-size: 22px;
    }
    .style-thin .body {
      flex: 1;
      min-width: 0;
    }
    .style-thin .top {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      font-size: 14px;
      margin-bottom: 7px;
      color: var(--primary-text-color);
    }
    .style-thin .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .style-thin .value {
      flex: none;
      margin-left: auto;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .style-thin .track {
      position: relative;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--cd-track);
    }
    .style-thin .fill {
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(var(--start) * 100%);
      width: calc((var(--end) - var(--start)) * 100%);
      border-radius: 4px;
      background: linear-gradient(90deg, var(--c-start), var(--c-end));
      transition:
        left var(--cd-duration) var(--cd-easing),
        width var(--cd-duration) var(--cd-easing);
    }
    .style-thin .target {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      left: calc(var(--target) * (100% - 2px));
      background: var(--primary-text-color);
      transition: left var(--cd-duration) var(--cd-easing);
    }
  `,render:(t,{show:e,hass:i})=>I`
      ${e.icon?I`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${t.config.icon}
            ></ha-state-icon>`:W}
      <div class="body">
        ${e.name||e.value?I`<div class="top">
                ${e.name?I`<span class="name">${t.name}</span>`:W}
                ${e.value?I`<span class="value">${t.display}</span>`:W}
              </div>`:W}
        <div class="track">
          <div class="fill"></div>
          ${e.target&&null!==t.targetPosition&&t.available?I`<div class="target"></div>`:W}
        </div>
      </div>
    `},We={bar:Ce,thin:qe,segmented:Ie,tank:Ve,ring:Fe,needle:He,arc:Be},Ze=o`
  :host {
    display: block;
    --cd-duration: 900ms;
    --cd-easing: cubic-bezier(0.22, 1, 0.36, 1);
    --cd-track: color-mix(in srgb, var(--primary-text-color, #212121) 8%, transparent);
  }
  :host(:not([ready])) .entity {
    --start: 0 !important;
    --end: 0 !important;
    --pos: 0 !important;
  }
  :host([static]) .entity,
  :host([static]) .entity *,
  :host([static]) .entity *::before,
  :host([static]) .entity *::after {
    transition: none !important;
    animation: none !important;
  }
  .content {
    padding: 8px 16px;
    box-sizing: border-box;
  }
  .layout-rows {
    display: grid;
    column-gap: 16px;
  }
  .layout-tiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0 8px;
  }
  .layout-tiles.has-columns {
    display: grid;
  }
  .entity {
    min-width: 0;
    box-sizing: border-box;
    outline: none;
    border-radius: 8px;
  }
  .entity:focus-visible {
    box-shadow: 0 0 0 2px var(--primary-color, #03a9f4);
  }
  .entity.interactive {
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    -webkit-touch-callout: none;
  }
  .hint {
    padding: 8px 0;
    color: var(--secondary-text-color);
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4px 16px;
    min-height: 32px;
    padding: 0 16px 8px;
    box-sizing: border-box;
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .legend-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .legend .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex: none;
  }
`;console.info("%c CHARTDECK %c 0.0.0-development ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");class Ge extends lt{constructor(){super(...arguments),this._watched=new Set,this._items=[],this._detachers=new Map,this._readyScheduled=!1}static getStubConfig(t){const e=Object.values(t?.states??{}).filter(t=>t.entity_id.startsWith("sensor.")&&""!==t.state.trim()&&Number.isFinite(Number(t.state))),i=t=>"battery"===t.attributes?.device_class;return e.sort((t,e)=>i(t)!==i(e)?i(t)?-1:1:t.entity_id<e.entity_id?-1:t.entity_id>e.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:e.slice(0,3).map(t=>t.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(t){const e=kt(t);this._watched=function(t){const e=new Set;for(const i of t.entities){e.add(i.entity);for(const t of[i.min,i.max,i.target])"string"==typeof t&&""!==t&&e.add(t)}return e}(e),this._config=e}get _styleName(){return this._config?.style??"bar"}get _style(){return We[this._styleName]}_legend(t){const e=this._config;if(!e?.show.legend||0===e.entities.length)return[];const i=t?.decimals??1;return function(t,e,i){const s=i?` ${i}`:"",n=[];return t.forEach((i,o)=>{const r=t[o+1],a=pt(i.color);i.label?n.push({color:a,text:i.label}):Number.isFinite(i.from)?r?n.push({color:a,text:`${e(i.from)}–${e(r.from)}${s}`}):n.push({color:a,text:`${e(i.from)}${s}+`}):r&&n.push({color:a,text:`< ${e(r.from)}${s}`})}),n}(e.legendBands,t=>ye(t,i,this.hass),t?.unit??"")}_contentHeight(){const t=this._config;if(!t)return 0;const e=this._style,i=t.entities.length,s="rows"===e.layout?t.columns??1:t.columns??Math.min(i,e.tilesPerRow??3),n=0===i?0:Math.ceil(i/Math.max(1,s));return 16+(t.title?52:0)+n*e.height+(this._legend().length>0?32:0)}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const t=this._config?.entities.length??0;return{columns:"rows"===this._style.layout||t<=1?6:12,rows:Math.max(1,Math.ceil((this._contentHeight()+8)/64)),min_columns:3,min_rows:1}}shouldUpdate(t){if([...t.keys()].some(t=>"hass"!==t))return!0;if(!t.has("hass"))return!1;const e=t.get("hass"),i=this.hass;if(!e||!i)return!0;for(const s of this._watched)if(e.states[s]!==i.states[s])return!0;return e.themes?.darkMode!==i.themes?.darkMode||e.themes?.theme!==i.themes?.theme||e.locale!==i.locale}willUpdate(){const t=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",t),t&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const t=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready","")};"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this._syncActions()}disconnectedCallback(){super.disconnectedCallback();for(const t of this._detachers.values())t();this._detachers.clear()}_syncActions(){const t=this.shadowRoot;if(!t)return;const e=new Set(t.querySelectorAll(".entity"));for(const[i,s]of this._detachers)e.has(i)||(s(),this._detachers.delete(i));for(const i of e)this._detachers.has(i)||this._detachers.set(i,ht(i,()=>this._items[Number(i.dataset.index)].config))}_renderEntity(t,e,i,s){const n=this._config,o=(r=t.config,dt(r.tap_action)||dt(r.hold_action)||dt(r.double_tap_action));var r;const a=function(t){const e=pt(t);return{start:e,end:`color-mix(in srgb, ${e} 65%, #fff)`}}(t.band.color),l=`--start:${t.span[0]};--end:${t.span[1]};--pos:${t.position};--target:${t.targetPosition??0};--c-start:${a.start};--c-end:${a.end}`;return I`<div
      class="entity ${o?"interactive":""} ${t.available?"":"unavailable"}"
      data-index=${e}
      role="meter"
      aria-valuenow=${t.available?String(t.value):W}
      aria-valuemin=${t.min}
      aria-valuemax=${t.max}
      aria-label=${t.label}
      tabindex=${o?0:W}
      style=${l}
    >
      ${i.render(t,{show:n.show,hass:s})}
    </div>`}render(){const t=this._config;if(!t)return W;const e=this.hass,i=this._style;let s,n;if(0===t.entities.length)this._items=[],s=I`<div class="hint">${St(e,"no_entities")}</div>`;else if(e){const o=Ee(t,e);n=o[0],this._items=function(t,e){if("none"===e)return[...t];const i="ascending"===e?1:-1;return t.map((t,e)=>({item:t,index:e})).sort((t,e)=>{if(t.item.available!==e.item.available)return t.item.available?-1:1;if(t.item.available){const s=(t.item.position-e.item.position)*i;if(0!==s)return s}return t.index-e.index}).map(t=>t.item)}(o,t.sort);const r="tiles"===i.layout,a=r&&void 0===t.columns?"":`grid-template-columns: repeat(${t.columns??1}, minmax(0, 1fr))`;s=I`<div
        class="entities layout-${i.layout} ${r&&void 0!==t.columns?"has-columns":""}"
        style=${a}
      >
        ${this._items.map((t,s)=>this._renderEntity(t,s,i,e))}
      </div>`}else this._items=[],s=W;const o=this._legend(n);return I`<ha-card .header=${t.title}>
      <div class="content style-${this._styleName}">${s}</div>
      ${o.length?I`<div class="legend">
              ${o.map(t=>I`<span class="legend-item"
                    ><span class="dot" style="background:${t.color}"></span>${t.text}</span
                  >`)}
            </div>`:W}
    </ha-card>`}}Ge.properties={hass:{attribute:!1},_config:{state:!0}},Ge.styles=[Ze,...Object.values(We).map(t=>t.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",Ge);const Ke=window.customCards??=[];Ke.some(t=>"chartdeck-card"===t.type)||Ke.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{Ge as ChartdeckCard};
