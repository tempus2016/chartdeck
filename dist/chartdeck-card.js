/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let o=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(n,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,_=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!s(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const r=n?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of n){const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const r=o.fromAttribute(e,t.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(t,e,i,n=!1,o){if(void 0!==t){const r=this.constructor;if(!1===n&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??v)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=t=>t,k=x.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+C,E=`<${S}>`,O=document,T=()=>O.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,U="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,j=/>/g,H=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,F=/"/g,R=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=B(1),V=B(2),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Z=new WeakMap,Y=O.createTreeWalker(O,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}class X{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[l,c]=((t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":3===e?"<math>":"",a=P;for(let s=0;s<i;s++){const e=t[s];let i,l,c=-1,d=0;for(;d<e.length&&(a.lastIndex=d,l=a.exec(e),null!==l);)d=a.lastIndex,a===P?"!--"===l[1]?a=z:void 0!==l[1]?a=j:void 0!==l[2]?(R.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=o??P,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,i=l[1],a=void 0===l[3]?H:'"'===l[3]?F:D):a===F||a===D?a=H:a===z||a===j?a=P:(a=H,o=void 0);const h=a===H&&t[s+1].startsWith("/>")?" ":"";r+=a===P?e+E:c>=0?(n.push(i),e.slice(0,c)+M+e.slice(c)+C+h):e+C+(-2===c?s:h)}return[G(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]})(t,e);if(this.el=X.createElement(l,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=Y.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(M)){const e=c[r++],i=n.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?et:"?"===a[1]?it:"@"===a[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(C)&&(s.push({type:6,index:o}),n.removeAttribute(t));if(R.test(n.tagName)){const t=n.textContent.split(C),e=t.length-1;if(e>0){n.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],T()),Y.nextNode(),s.push({type:2,index:++o});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===S)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(C,t+1));)s.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,n){if(e===W)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const r=L(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,n)),e}let K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??O).importNode(e,!0);Y.currentNode=n;let o=Y.nextNode(),r=0,a=0,s=i[0];for(;void 0!==s;){if(r===s.index){let e;2===s.type?e=new Q(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new ot(o,this,t)),this._$AV.push(e),s=i[++a]}r!==s?.index&&(o=Y.nextNode(),r++)}return Y.currentNode=O,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),L(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new K(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new X(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new Q(this.O(T()),this.O(T()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=J(this,t,e,0),r=!L(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=J(this,n[i+a],e,a),s===W&&(s=this._$AH[a]),r||=!L(s)||s!==this._$AH[a],s===q?t=q:t!==q&&(t+=(s??"")+o[a+1]),this._$AH[a]=s}r&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class nt extends tt{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??q)===W)return;const i=this._$AH,n=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt={I:Q},at=x.litHtmlPolyfillSupport;at?.(X,Q),(x.litHtmlVersions??=[]).push("3.3.3");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new Q(e.insertBefore(T(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,st.litElementHydrateSupport?.({LitElement:lt});const ct=st.litElementPolyfillSupport;ct?.({LitElement:lt}),(st.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=1,ht=2,ut=3,pt=4,mt=t=>(...e)=>({_$litDirective$:t,values:e});let ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:gt}=rt,_t=t=>t,yt=()=>document.createComment(""),vt=(t,e,i)=>{const n=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(yt(),o),r=n.insertBefore(yt(),o);i=new gt(e,r,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,a=r!==t;if(a){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==o||a){let t=i._$AA;for(;t!==e;){const e=_t(t).nextSibling;_t(n).insertBefore(t,o),t=e}}}return i},bt=(t,e,i=t)=>(t._$AI(e,i),t),$t={},xt=(t,e=$t)=>t._$AH=e,wt=t=>{t._$AR(),t._$AA.remove()},kt=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},At=mt(class extends ft{constructor(t){if(super(t),t.type!==ht)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],r=[];let a=0;for(const s of t)o[a]=n?n(s,a):a,r[a]=i(s,a),a++;return{values:r,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){const o=(t=>t._$AH)(t),{values:r,keys:a}=this.dt(e,i,n);if(!Array.isArray(o))return this.ut=a,r;const s=this.ut??=[],l=[];let c,d,h=0,u=o.length-1,p=0,m=r.length-1;for(;h<=u&&p<=m;)if(null===o[h])h++;else if(null===o[u])u--;else if(s[h]===a[p])l[p]=bt(o[h],r[p]),h++,p++;else if(s[u]===a[m])l[m]=bt(o[u],r[m]),u--,m--;else if(s[h]===a[m])l[m]=bt(o[h],r[m]),vt(t,l[m+1],o[h]),h++,m--;else if(s[u]===a[p])l[p]=bt(o[u],r[p]),vt(t,o[h],o[u]),u--,p++;else if(void 0===c&&(c=kt(a,p,m),d=kt(s,h,u)),c.has(s[h]))if(c.has(s[u])){const e=d.get(a[p]),i=void 0!==e?o[e]:null;if(null===i){const e=vt(t,o[h]);bt(e,r[p]),l[p]=e}else l[p]=bt(i,r[p]),vt(t,o[h],i),o[e]=null;p++}else wt(o[u]),u--;else wt(o[h]),h++;for(;p<=m;){const e=vt(t,l[m+1]);bt(e,r[p]),l[p++]=e}for(;h<=u;){const t=o[h++];null!==t&&wt(t)}return this.ut=a,xt(t,l),W}}),Mt=t=>!!t&&"none"!==t.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ct(t,e){let i,n,o=0,r=0,a=!1,s=!1;const l=i=>{const n=e(),o="tap"===i?n.tap_action:"hold"===i?n.hold_action:n.double_tap_action;Mt(o)&&t.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:n,action:i}}))},c=()=>{void 0!==i&&clearTimeout(i),i=void 0},d=t=>{const n=t;n.button>0||(a=!0,s=!1,o=n.clientX,r=n.clientY,c(),Mt(e().hold_action)&&(i=setTimeout(()=>{i=void 0,s=!0,l("hold")},500)))},h=t=>{if(!a)return;const e=t;Math.hypot(e.clientX-o,e.clientY-r)>10&&(c(),a=!1)},u=()=>{c(),a=!1},p=()=>{const t=a;c(),a=!1,t&&!s?Mt(e().double_tap_action)?void 0!==n?(clearTimeout(n),n=void 0,l("double_tap")):n=setTimeout(()=>{n=void 0,l("tap")},250):l("tap"):s=!1},m=t=>{const e=t;e.repeat||"Enter"!==e.key&&" "!==e.key||(" "===e.key&&e.preventDefault(),l("tap"))},f=t=>{Mt(e().hold_action)&&t.preventDefault()};return t.addEventListener("pointerdown",d),t.addEventListener("pointermove",h),t.addEventListener("pointerup",p),t.addEventListener("pointercancel",u),t.addEventListener("pointerleave",u),t.addEventListener("keydown",m),t.addEventListener("contextmenu",f),()=>{c(),void 0!==n&&clearTimeout(n),n=void 0,t.removeEventListener("pointerdown",d),t.removeEventListener("pointermove",h),t.removeEventListener("pointerup",p),t.removeEventListener("pointercancel",u),t.removeEventListener("pointerleave",u),t.removeEventListener("keydown",m),t.removeEventListener("contextmenu",f)}}const St={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function Et(t){if(Object.prototype.hasOwnProperty.call(St,t)){const{variable:e,fallback:i}=St[t];return`var(${e}, ${i})`}return t}const Ot=new Set(["amber"]);function Tt(t){if(Object.prototype.hasOwnProperty.call(St,t))return Ot.has(t)?"dark":"light";const e=function(t){const e=t.trim().toLowerCase(),i=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(e);if(i){const t=i[1].length<=4?[...i[1]].map(t=>t+t).join(""):i[1],[e,n,o]=[0,2,4].map(e=>parseInt(t.slice(e,e+2),16));return[e,n,o,8===t.length?parseInt(t.slice(6,8),16)/255:1]}const n=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(e);if(n){const[t,e,i]=[n[1],n[2],n[3]].map(t=>Math.min(255,Number(t))),o=void 0===n[4]?1:Number(n[4])/(n[5]?100:1);return[t,e,i,Math.min(1,o)]}}(t);return e?e[3]<.5?"theme":function([t,e,i]){const n=t=>{const e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4};return.2126*n(t)+.7152*n(e)+.0722*n(i)}([e[0],e[1],e[2]])>.4?"dark":"light":"light"}function Lt(t,e){let i=e[0];for(const n of e){if(!(n.from<=t))break;i=n}return i}const Nt={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},Ut=["label","area","floor","device_class","domain","entity"];function Pt(t,e){if(null==t)return;if("object"!=typeof t||Array.isArray(t))throw new Error(`"${e}" must list what to match, such as "area" or "device_class"`);const i="include"===e?Ut.filter(t=>"entity"!==t):Ut,n={};for(const[o,r]of Object.entries(t)){if(!i.includes(o))throw new Error(`"${e}" can't match on "${o}". Use: ${i.join(", ")}`);const t=(Array.isArray(r)?r:[r]).filter(t=>null!=t&&""!==t);if(t.some(t=>"string"!=typeof t))throw new Error(`"${e}.${o}" must be text or a list of text`);t.length&&(n[o]=t)}return Object.keys(n).length?n:void 0}function zt(t){const e=t.state;return"unavailable"===e||"unknown"===e||""!==e.trim()&&Number.isFinite(Number(e))}function jt(t,e){const i=t.entity_id,n=e.entities?.[i],o=n?.device_id?e.devices?.[n.device_id]:void 0,r=n?.area_id??o?.area_id??void 0,a=t.attributes?.device_class;return{label:[...n?.labels??[],...o?.labels??[]],area:r,floor:r?e.areas?.[r]?.floor_id??void 0:void 0,device_class:"string"==typeof a?a:void 0,domain:i.slice(0,i.indexOf(".")),entity:i}}function Ht(t,e,i){const n=t[e],o=i[e];return Array.isArray(o)?o.some(t=>n.includes(t)):void 0!==o&&n.includes(o)}function Dt(t,e){return Object.keys(t).every(i=>Ht(t,i,e))}function Ft(t,e){return!!t&&Object.keys(t).some(i=>Ht(t,i,e))}const Rt=new WeakMap;const Bt=["bar","thin","segmented","tank","ring","needle","arc","line"],It=[{from:-1/0,color:"primary"}],Vt=["none","ascending","descending"];function Wt(t){if("number"==typeof t)return Number.isFinite(t)?t:void 0;if("string"==typeof t&&""!==t.trim()){const e=Number(t);return Number.isFinite(e)?e:void 0}}function qt(t,e){if(null==t||""===t)return;const i=Wt(t);if(void 0!==i)return i;if("string"==typeof t)return t;throw new Error(`"${e}" must be a number or an entity id`)}function Zt(t,e,i,n=1/0){if(null==t||""===t)return;const o=Wt(t);if(void 0===o||!Number.isInteger(o)||o<i||o>n){throw new Error(`"${e}" must be a whole number ${n===1/0?`of at least ${i}`:`from ${i} to ${n}`}`)}return o}function Yt(t){if(null==t)return;if(!Array.isArray(t))throw new Error('"severity" must be a list of bands');if(0===t.length)return;const e=t.map((t,e)=>{let i;try{i=qt(t?.from,"from")}catch{i=void 0}if(void 0===i)throw new Error(`Severity band ${e+1}: "from" must be a number or an entity id`);if("string"!=typeof t.color||!t.color)throw new Error(`Severity band ${e+1}: "color" is required`);return{...t,from:i}});return e.every(t=>"number"==typeof t.from)?e.sort((t,e)=>t.from-e.from):e}function Gt(t,e,i){if(null==t)return{action:e};if("object"!=typeof t||"string"!=typeof t.action)throw new Error(`"${i}" must have an "action"`);return t}function Xt(t,e){return void 0!==t?t:e}function Jt(t,e,i){const n="string"==typeof t?{entity:t}:t;if(!n||"object"!=typeof n||"string"!=typeof n.entity||!n.entity)throw new Error(`Entity ${i+1} needs an "entity" id`);if(void 0!==n.attribute&&null!==n.attribute&&"string"!=typeof n.attribute)throw new Error(`Entity ${i+1}: "attribute" must be an attribute name`);const o=Xt(qt(n.min,"min"),qt(e.min,"min"))??0,r=Xt(qt(n.max,"max"),qt(e.max,"max"))??100;if("number"==typeof o&&"number"==typeof r&&o>=r)throw new Error(`"max" (${r}) must be greater than "min" (${o})`);const a={...n,entity:n.entity,min:o,max:r,severity:Yt(n.severity)??Yt(e.severity)??It,tap_action:Gt(Xt(n.tap_action,e.tap_action),"more-info","tap_action"),hold_action:Gt(Xt(n.hold_action,e.hold_action),"none","hold_action"),double_tap_action:Gt(Xt(n.double_tap_action,e.double_tap_action),"none","double_tap_action")},s=Xt(n.name,e.name),l=Xt(n.icon,e.icon),c=Xt(n.unit,e.unit),d=Xt(qt(n.target,"target"),qt(e.target,"target")),h=Xt(Zt(n.decimals,"decimals",0,20),Zt(e.decimals,"decimals",0,20));return void 0!==s&&(a.name=s),void 0!==l&&(a.icon=l),void 0!==c&&(a.unit=c),void 0!==d&&(a.target=d),void 0!==h&&(a.decimals=h),n.attribute||delete a.attribute,a}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt=mt(class extends ft{constructor(t){if(super(t),t.type!==ut&&t.type!==dt&&t.type!==pt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===W||e===q)return e;const i=t.element,n=t.name;if(t.type===ut){if(e===i[n])return W}else if(t.type===pt){if(!!e===i.hasAttribute(n))return W}else if(t.type===dt&&i.getAttribute(n)===e+"")return W;return xt(t),e}}),Qt={en:{entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours"}};function te(t,e){Qt[t]={...Qt[t],...e}}function ee(t){return(t?.locale?.language??t?.language??"en").split("-")[0]}function ie(t,e,i){const n=ee(t),o=Qt[n]?.[e]??Qt.en[e]??e;return i?o.replace(/\{(\w+)\}/g,(t,e)=>e in i?String(i[e]):t):o}function ne(t){return null==t||""===t}function oe(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function re(t,e,i){const[n,...o]=e,r=function(t,e){return Array.isArray(t)?[...t]:oe(t)?{...t}:"number"==typeof e?[]:{}}(t,n),a=r,s=o.length?re(a[n],o,i):i,l=o.length>0&&oe(s)&&0===Object.keys(s).length;return ne(s)?Array.isArray(r)&&"number"==typeof n?r.splice(n,1):delete a[n]:l&&oe(r)?delete a[n]:a[n]=s,r}function ae(t,e,i){return 0===e.length||ne(i)&&void 0===function(t,e){let i=t;for(const n of e){if("object"!=typeof i||null===i)return;i=i[n]}return i}(t,e)?t:re(t,e,i)}function se(t,e){const i=t;return{width:i.line_width??e.line_width??2.5,dots:i.dots??!0===e.dots,onTop:!0===i.on_top}}function le(t,e){if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<.5||t>12))throw new Error(`${e} must be a number from 0.5 to 12`)}function ce(t,e){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${e} must be true or false`)}const de=[{name:"title",path:["title"]}],he=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],ue=[{name:"color_icon",path:["color_icon"],default:!1}],pe=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],me=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],fe=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],ge=[{name:"attribute",path:["attribute"]}],_e=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],ye={number:{min:.5,max:12,step:.5,mode:"box",unit_of_measurement:"px"}},ve=new Map;const be=me.map(({name:t,path:e})=>({name:t,path:e})),$e=[{name:"title",selector:{text:{}}}],xe=me.map(({name:t})=>({name:t,selector:{ui_action:{}}})),we=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],ke=new Map;let Ae;function Me(t){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(e=>({value:e,label:ie(t,`editor_sort_${e}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const Ce={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function Se(t,e){const i=t=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:t}});switch(t){case"device_class":return i(e.deviceClasses);case"domain":return i(e.domains);case"entity":return{entity:{multiple:!0}};default:return{[t]:{multiple:!0}}}}const Ee=new Map;function Oe(t,e){const i=function(t){const e=new Set,i=new Set;for(const n of Object.values(t?.states??{})){const t=n.attributes?.device_class;"string"==typeof t&&t&&e.add(t),i.add(n.entity_id.slice(0,n.entity_id.indexOf(".")))}return{deviceClasses:[...e].sort(),domains:[...i].sort()}}(e),n=`${i.deviceClasses.join()}|${i.domains.join()}`,o=Ee.get(t);if(o?.key===n)return o.schema;const r=Ce[t].map(e=>({name:`${t}_${e}`,selector:Se(e,i)}));return Ee.set(t,{key:n,schema:r}),r}let Te;function Le(t,e){let i=t;for(const n of e){if("object"!=typeof i||null===i)return;i=i[n]}return i}function Ne(t,e){if(t===e)return!0;if("object"!=typeof t||"object"!=typeof e||null===t||null===e)return!1;if(Array.isArray(t)!==Array.isArray(e))return!1;const i=Object.keys(t),n=Object.keys(e);return i.length===n.length&&i.every(i=>Ne(t[i],e[i]))}function Ue(t,e){const i={};for(const n of e){const e=Le(t,n.path)??n.default;void 0!==e&&(i[n.name]=e)}return i}function Pe(t,e,i){const n=Ue(t,e);let o=t;for(const r of e){const t=i[r.name];Ne(n[r.name],t)||(o=ae(o,r.path,void 0!==r.default&&Ne(t,r.default)?void 0:t))}return o}const ze="var(--divider-color, rgba(127, 127, 127, 0.3))",je="var(--primary-color, #03a9f4)",He="var(--secondary-text-color, #727272)";function De(t,e,i,n){const o=(n-90)*Math.PI/180;return[(t+i*Math.cos(o)).toFixed(2),(e+i*Math.sin(o)).toFixed(2)]}function Fe(t,e,i,n){return De(t,e,i,n).join(" ")}function Re(t,e,i,n,o){const r=o-n>180?1:0;return`M ${Fe(t,e,i,n)} A ${i} ${i} 0 ${r} 1 ${Fe(t,e,i,o)}`}function Be(t){return I`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(t){switch(t){case"bar":return V`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${ze} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${je} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${ze} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${je} />`;case"thin":return V`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${He} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${ze} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${je} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${He} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${ze} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${je} />`;case"segmented":return V`${[0,1].map(t=>Array.from({length:8},(e,i)=>V`<rect x=${6+6.75*i} y=${0===t?9:23} width="5" height="9" rx="1.5"
            fill=${i<(0===t?6:3)?je:ze} />`))}`;case"tank":return V`${[14,36].map((t,e)=>V`
          <rect x=${t} y="5" width="14" height="30" rx="4" fill=${ze} />
          <rect x=${t} y=${0===e?13:23} width="14" height=${0===e?22:12} rx="4" fill=${je} />`)}`;case"ring":return V`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${ze} stroke-width="5" />
        <path d=${Re(32,20,14,0,250)} fill="none" stroke=${je} stroke-width="5" stroke-linecap="round" />`;case"arc":return V`
        <path d=${Re(32,21,14,-135,135)} fill="none" stroke=${ze} stroke-width="5" stroke-linecap="round" />
        <path d=${Re(32,21,14,-135,40)} fill="none" stroke=${je} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[t,e]=De(32,32,18,25);return V`
        <path d=${Re(32,32,22,-90,90)} fill="none" stroke=${ze} stroke-width="5" />
        <path d=${Re(32,32,22,-90,25)} fill="none" stroke=${je} stroke-width="5" />
        <line x1="32" y1="32" x2=${t} y2=${e} stroke=${He} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${He} />`}default:return V``}}(t)}
  </svg>`}function Ie(t,e,i){const{locale:n,grouping:o}=function(t){const e=t?.locale?.language??"en";switch(t?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:e,grouping:!0}}}(i),r=new Intl.NumberFormat(n,{minimumFractionDigits:e,maximumFractionDigits:e,useGrouping:o});let a=r.format(0===t?0:t);return 0===Number(t.toFixed(e))&&(a=r.format(0)),a}function Ve(t,e){return e?`${t} ${e}`:t}function We(t,e,i){return!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(i)||i<=e?0:Math.min(1,Math.max(0,(t-e)/(i-e)))}function qe(t,e,i){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(i)||i<=e)return[0,0];const n=We(t,e,i);if(e<0&&i>0){const t=We(0,e,i);return n<t?[n,t]:[t,n]}return[0,n]}const Ze=new Set;function Ye(t){return(t.available?t.band.icon:void 0)??t.config.icon??(t.stateObj?void 0:"mdi:help-circle-outline")}function Ge(t){return null==t||""===t}function Xe(t){if(void 0===t||""===t.trim())return null;const e=Number(t);return Number.isFinite(e)?e:null}function Je(t,e,i="limit"){if(Ge(t))return null;if("number"==typeof t)return Number.isFinite(t)?t:null;const n=String(t),o=Xe(e.states[n]?.state);if(null===o&&!Ze.has(n)){Ze.add(n);const t="limit"===i?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${i} entity "${n}" is missing or not numeric; ${t}.`)}return o}function Ke(t,e){if(t.every(t=>"number"==typeof t.from))return t;const i=[];for(const n of t){const t=e?Je(n.from,e,"band start"):null;null!==t&&i.push({...n,from:t})}return i.length?i.sort((t,e)=>t.from-e.from):It}function Qe(t,e){const i=t.entity,n=e.states[i],o=t.name??n?.attributes?.friendly_name??i,r=t.unit??(t.attribute?"":n?.attributes?.unit_of_measurement??""),a=function(t,e){if(e)return t.attribute?e.attributes?.[t.attribute]:e.state}(t,n),s=function(t){return"number"==typeof t?Number.isFinite(t)?t:null:"string"==typeof t?Xe(t):null}(a),l=null!==s;let c;c=Ge(t.decimals)?t.attribute?l?function(t){const e=String(t),i=e.indexOf(".");return-1===i||/e/i.test(e)?0:Math.min(2,e.length-i-1)}(a):0:function(t,e,i){const n=t?.entities?.[e]?.display_precision;return"number"==typeof n?n:"%"===i?0:1}(e,i,r):t.decimals;const d=Je(t.min,e)??0,h=Je(t.max,e)??100,u=Je(t.target,e),p=Ke(t.severity,e);let m,f="";return l?(f=Ie(s,c,e),m=Ve(f,r)):m=n?function(t,e,i,n){const o=t.attribute;return o&&"string"==typeof i&&""!==i.trim()?n.formatEntityAttributeValue?.(e,o)??i:n.formatEntityState?.(e)??ie(n,"unavailable")}(t,n,a,e):ie(e,"entity_not_found"),{entityId:i,config:t,stateObj:n,available:l,value:s,min:d,max:h,target:u,name:o,unit:r,decimals:c,position:l?We(s,d,h):0,span:l?qe(s,d,h):[0,0],targetPosition:null===u?null:We(u,d,h),band:Lt(l?s:-1/0,p),bands:p,valueText:f,display:m,label:`${o}, ${m}`}}function ti(t,e){if(!t.include)return[];const i=new Set(t.entities.map(t=>t.entity));return function(t,e,i){const n=Rt.get(t);if(n&&n.exclude===e&&n.states===i.states&&n.entities===i.entities&&n.devices===i.devices&&n.areas===i.areas)return n.ids;const o=[];for(const a of Object.values(i.states)){if(!zt(a)||i.entities?.[a.entity_id]?.hidden)continue;const n=jt(a,i);if(!Dt(t,n)||Ft(e,n))continue;const r=a.attributes?.friendly_name;o.push({id:a.entity_id,name:"string"==typeof r&&r?r:a.entity_id})}o.sort((t,e)=>t.name.localeCompare(e.name)||(t.id<e.id?-1:1));const r=o.map(t=>t.id);return Rt.set(t,{exclude:e,states:i.states,entities:i.entities,devices:i.devices,areas:i.areas,ids:r}),r}(t.include,t.exclude,e).filter(t=>!i.has(t))}const ei={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:r`
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
      background: var(--c-start);
      background-image: linear-gradient(90deg, var(--c-start), var(--c-end));
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
      color: var(--primary-text-color);
    }
    /* A white copy of the text, clipped to the fill so it reads on the colour and the track alike. */
    .style-bar .text.on-fill {
      color: #fff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      clip-path: inset(0 calc((1 - var(--end)) * 100%) 0 calc(var(--start) * 100%));
      transition: clip-path var(--cd-duration) var(--cd-easing);
    }
    /* Light fills (amber, pale custom colours) take dark text instead. */
    .style-bar .text.on-fill.dark {
      color: #1d1f24;
      text-shadow: none;
    }
    /* Mostly see-through fills show the card behind, so the text follows the theme. */
    .style-bar .text.on-fill.theme {
      color: var(--primary-text-color);
      text-shadow: none;
    }
    .style-bar .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .style-bar .value {
      flex: none;
      white-space: nowrap;
      margin-left: auto;
    }
  `,render(t,{show:e,hass:i}){const n=e.value||!t.available,o=I`${e.name?I`<span class="name">${t.name}</span>`:q}${n?I`<span class="value">${t.display}</span>`:q}`;return I`
      ${e.icon?I`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${Ye(t)}
            ></ha-state-icon>`:q}
      <div class="track">
        <div class="fill"></div>
        ${e.target&&null!==t.targetPosition&&t.available?I`<div class="target"></div>`:q}
        <div class="text">${o}</div>
        ${t.available?I`<div class="text on-fill ${Tt(t.band.color)}" aria-hidden="true">${o}</div>`:q}
      </div>
    `}};function ii(t,e){if(t.length<=e)return t;const i=[];let n=[];for(const r of t)null===r.v?(n.length&&i.push(n),i.push([r]),n=[]):n.push(r);n.length&&i.push(n);const o=t.length;return i.flatMap(t=>null===t[0].v?t:function(t,e){if(t.length<=e||e<3)return t;const i=[t[0]],n=(t.length-2)/(e-2);let o=0;for(let r=0;r<e-2;r++){const e=Math.floor(r*n)+1,a=Math.min(Math.floor((r+1)*n)+1,t.length-1),s=a,l=Math.min(Math.floor((r+2)*n)+1,t.length);let c=0,d=0;const h=Math.max(1,l-s);for(let i=s;i<l;i++)c+=t[i].t,d+=t[i].v;c/=h,d/=h;let u=e,p=-1;const m=t[o];for(let i=e;i<a;i++){const e=Math.abs((m.t-c)*(t[i].v-m.v)-(m.t-t[i].t)*(d-m.v));e>p&&(p=e,u=i)}i.push(t[u]),o=u}return i.push(t[t.length-1]),i}(t,Math.max(3,Math.round(t.length/o*e))))}function ni(t,e){const[i,n]=t,[o,r]=e,a=n===i?0:(r-o)/(n-i);return t=>o+(t-i)*a}const oi=["outside","inside"],ri=!0,ai=!0,si="outside",li=!0,ci=!1,di=t=>"number"==typeof t&&Number.isFinite(t);function hi(t){const e=t,i=e.gridlines??{};return{x:e.x_axis??ri,y:e.y_axis??ai,labels:e.axis_labels??si,horizontal:i.horizontal??li,vertical:i.vertical??ci,min:di(e.y_min)?e.y_min:void 0,max:di(e.y_max)?e.y_max:void 0}}function ui(t){return Math.max(0,-Math.floor(Math.log10(t)+1e-9))}const pi=t=>Number(t.toPrecision(12));function mi(t,e,i){let[n,o]=function([t,e],i=.08){if(t===e)return[t-1,e+1];const n=(e-t)*i;return[t-n,e+n]}(t??[0,1]);void 0!==e.min&&(n=e.min),void 0!==e.max&&(o=e.max),o<=n&&(void 0!==e.min?o=n+Math.max(1,.1*Math.abs(n)):n=o-Math.max(1,.1*Math.abs(o)));const r=function(t,e){if(!(t>0&&Number.isFinite(t)))return 1;const i=t/Math.max(1,e),n=10**Math.floor(Math.log10(i));for(const o of[1,2,5])if(o*n>=i*(1-1e-9))return o*n;return 10*n}(o-n,i);void 0===e.min&&(n=pi(Math.floor(n/r+1e-9)*r)),void 0===e.max&&(o=pi(Math.ceil(o/r-1e-9)*r));const a=[];for(let s=Math.ceil(n/r-1e-9);s*r<=o+1e-9*r;s++)a.push(pi(s*r));return{domain:[n,o],ticks:a,decimals:ui(r)}}const fi=6e4,gi=36e5,_i=864e5,yi=[...[1,5,10,15,30].map(t=>({unit:"minute",n:t,ms:t*fi})),...[1,2,3,6,12].map(t=>({unit:"hour",n:t,ms:t*gi})),...[1,2,7].map(t=>({unit:"day",n:t,ms:t*_i})),...[1,2,3,6].map(t=>({unit:"month",n:t,ms:30.44*t*_i})),...[1,2,5,10,20,50,100].map(t=>({unit:"year",n:t,ms:365.25*t*_i}))];const vi=t=>-new Date(t).getTimezoneOffset()*fi;function bi(t){if(!t)return vi;let e;try{e=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return vi}return t=>{const i={};for(const n of e.formatToParts(t))i[n.type]=Number(n.value);return Date.UTC(i.year,i.month-1,i.day,i.hour%24,i.minute,i.second)-1e3*Math.floor(t/1e3)}}function $i(t,e){return t-e(t-e(t))}function xi(t,e,i,n){const o=[],r=t.end+e(t.end);for(let a=i,s=0;a<=r&&s<1e3;a=n(a),s++){const i=$i(a,e);i>=t.start&&i<=t.end&&i!==o[o.length-1]&&o.push(i)}return o}function wi(t,e,i=vi){const{unit:n,n:o}=function(t,e){return yi.find(i=>t/i.ms<=Math.max(1,e))??yi[yi.length-1]}(t.end-t.start,e),r=t.start+i(t.start);if("minute"===n||"hour"===n||"day"===n&&7!==o){const e=o*("minute"===n?fi:"hour"===n?gi:_i);return{unit:n,ticks:xi(t,i,Math.ceil(r/e)*e,t=>t+e)}}if("day"===n){const e=Math.ceil(r/_i);return{unit:n,ticks:xi(t,i,(e+((4-e)%7+7)%7)*_i,t=>t+7*_i)}}const a=new Date(r);if("month"===n){let e=a.getUTCFullYear(),s=a.getUTCMonth();Date.UTC(e,s)<r&&(s+=1),s=Math.ceil(s/o)*o,e+=Math.floor(s/12),s%=12;const l=t=>{const e=new Date(t);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth()+o)};return{unit:n,ticks:xi(t,i,Date.UTC(e,s),l)}}let s=a.getUTCFullYear();return Date.UTC(s,0)<r&&(s+=1),s=Math.ceil(s/o)*o,{unit:n,ticks:xi(t,i,Date.UTC(s,0),t=>Date.UTC(new Date(t).getUTCFullYear()+o,0))}}function ki(t){return"server"===t?.locale?.time_zone?t.config?.time_zone:void 0}function Ai(t){const e=t?.locale?.time_format;return"12"===e||"24"!==e&&void 0}const Mi=new Map;function Ci(t,e,i){const n=`${t}|${e}|${JSON.stringify(i)}`;let o=Mi.get(n);if(!o){try{o=new Intl.DateTimeFormat(t,{...i,timeZone:e})}catch{o=new Intl.DateTimeFormat(void 0,i)}Mi.set(n,o)}return o}function Si(t,e,i,n,o){const r=n?.locale?.language??"en",a=ki(n),s=t+(o??bi(a))(t),l=new Date(s),c=s%_i===0;switch(e){case"minute":case"hour":return c?Ci(r,a,{weekday:"short"}).format(t):function(t,e,i=!1){return Ci(e?.locale?.language??"en",ki(e),{hour:"numeric",minute:"2-digit",...i?{second:"2-digit"}:{},hour12:Ai(e)}).format(t)}(t,n);case"day":return i<=7*_i?Ci(r,a,{weekday:"short"}).format(t):Ci(r,a,{day:"numeric",month:"short"}).format(t);case"month":return Ci(r,a,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(t);default:return Ci(r,a,{year:"numeric"}).format(t)}}const Ei=36e5,Oi=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ti=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],Li=new Map;function Ni(t){let e=Li.get(t);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),Li.set(t,e)),e}function Ui(t,e){const i={};for(const n of Ni(e).formatToParts(new Date(t)))i[n.type]=n.value;return{year:Number(i.year),month:Number(i.month),day:Number(i.day),hour:Number(i.hour)%24,minute:Number(i.minute),second:Number(i.second),weekday:Oi.indexOf(i.weekday)+1}}function Pi(t,e){const i=Ui(t,e);return Date.UTC(i.year,i.month-1,i.day,i.hour,i.minute,i.second)-1e3*Math.floor(t/1e3)}function zi(t,e,i,n=1,o=0,r=0,a=0){const s=Date.UTC(e,i-1,n,o,r,a),l=new Date(s),c=Pi(s-24*Ei,t),d=Pi(s+24*Ei,t),h=[s-c,s-d].filter(e=>{const i=Ui(e,t);return i.year===l.getUTCFullYear()&&i.month===l.getUTCMonth()+1&&i.day===l.getUTCDate()&&i.hour===l.getUTCHours()&&i.minute===l.getUTCMinutes()&&i.second===l.getUTCSeconds()});return h.length?Math.min(...h):function(t,e,i,n){for(;e-t>1e3;){const o=1e3*Math.floor((t+e)/2e3);Pi(o,n)===i?t=o:e=o}return e}(s-d,s-c,c,t)}function ji(t,e,i){const n=new Date(Date.UTC(t,e-1,i));return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate()}}function Hi(t,e,i){const n=Ui(e,i.timeZone);switch(t){case"hour":return e-e%1e3-1e3*(60*n.minute+n.second);case"day":return zi(i.timeZone,n.year,n.month,n.day);case"week":{const t=(n.weekday-i.firstDay+7)%7,e=ji(n.year,n.month,n.day-t);return zi(i.timeZone,e.year,e.month,e.day)}case"month":return zi(i.timeZone,n.year,n.month,1);case"year":return zi(i.timeZone,n.year,1,1)}}function Di(t,e,i,n){if("hour"===t)return e+i*Ei;const o=Ui(e,n.timeZone);let{year:r,month:a,day:s}=o;if("day"===t)({year:r,month:a,day:s}=ji(r,a,s+i));else if("week"===t)({year:r,month:a,day:s}=ji(r,a,s+7*i));else{const e=ji(r,a+("year"===t?12*i:i),1),n=ji(e.year,e.month+1,0).day;({year:r,month:a}=e),s=Math.min(s,n)}return zi(n.timeZone,r,a,s,o.hour,o.minute,o.second)}function Fi(t){try{const e=new Intl.Locale(t),i=e.getWeekInfo?.().firstDay??e.weekInfo?.firstDay;return"number"==typeof i&&i>=1&&i<=7?i:1}catch{return 1}}function Ri(t){const e=t?.locale,i=t?.config?.time_zone,n="server"===e?.time_zone&&function(t){if("string"!=typeof t||""===t)return!1;try{return Ni(t),!0}catch{return!1}}(i)?i:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",o=Ti.indexOf(String(e?.first_weekday??"language"))+1;return{timeZone:n,firstDay:o>0?o:Fi(e?.language??t?.language??"en")}}const Bi=["hour","day","week","month"],Ii=["day","week","month","year"],Vi=["now","end"],Wi={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},qi={hour:36e5,day:864e5,week:6048e5};function Zi(t,e,i){const n="string"==typeof t&&""!==t.trim()?Number(t):t;if("number"!=typeof n||!Number.isInteger(n)||n<e)throw new Error(i);return n}function Yi(t,e,i){if(!e.includes(t))throw new Error(`"${i}" must be one of: ${e.join(", ")}`);return t}function Gi(t){if(null==t)return Wi;if("object"!=typeof t||Array.isArray(t))throw new Error('"period" must have "last" and "unit"');const e=t,i={last:Zi(e.last??Wi.last,1,'"period.last" must be a whole number of 1 or more'),unit:Yi(e.unit??Wi.unit,Bi,"period.unit"),offset:Zi(e.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==e.navigate&&!0===e.navigate,until:Yi(e.until??"now",Vi,"period.until")};if(void 0!==e.navigate&&"boolean"!=typeof e.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==e.calendar&&(i.calendar=Yi(e.calendar,Ii,"period.calendar")),i}function Xi(t,e,i){if("month"===t.unit){if(i)return{start:Di("month",e,-t.last,i),end:e};const n=new Date(e);return n.setMonth(n.getMonth()-t.last),{start:n.getTime(),end:e}}return{start:e-t.last*qi[t.unit],end:e}}function Ji(t,e,i,n=0){const o=Math.max(0,t.offset+n);if(t.calendar){const n=t.calendar,r=Di(n,Hi(n,e,i),-o,i),a=Di(n,r,1,i);return{start:r,end:0===o&&"now"===t.until?e:a,live:0===o,back:o}}if("month"===t.unit){return{...Xi(t,0===o?e:Di("month",e,-o*t.last,i),i),live:0===o,back:o}}const r=t.last*qi[t.unit];return{start:e-(o+1)*r,end:e-o*r,live:0===o,back:o}}const Ki=new WeakMap;function Qi(t,e){const i=Ki.get(t);return i&&i.key===JSON.stringify(e)?i.steps:0}function tn(t,e,i){Ki.set(t,{key:JSON.stringify(e),steps:Math.max(-e.offset,i)})}function en(t){if("number"==typeof t)return Number.isFinite(t)?t:null;if("string"!=typeof t||""===t.trim())return null;const e=Number(t);return Number.isFinite(e)?e:null}function nn(t,e){const i=[];for(const n of t??[]){const t=n.lu??n.lc;if(void 0===t)continue;const o=e?n.a?.[e]:n.s;i.push({t:Math.round(1e3*t),v:en(o)})}return i}const on=t=>"number"==typeof t&&Number.isFinite(t)?t:null;function rn(t,e){return(t??[]).map(t=>{const i="number"==typeof t.start?t.start:Date.parse(t.start);let n;return n="change"===e?on(t.change):"state"===e?on(t.state)??on(t.mean):"min"===e||"max"===e?on(t[e])??on(t.mean)??on(t.state):on(t.mean)??on(t.state),{t:i,v:n,min:t.min??null,max:t.max??null}})}function an(t){const e=(t.end-t.start)/864e5;return e<=2?"5minute":e<=35?"hour":e<=400?"day":"month"}function sn(t){return{period:an(t),types:["mean","min","max","state"],value:"mean"}}function ln(t){return t.attribute?`${t.entity}|${t.attribute}`:t.entity}const cn=["hour","day","week","month"],dn=["mean","sum","min","max","first","last","change"];function hn(t){if(void 0!==t.aggregate&&!dn.includes(t.aggregate))throw new Error(`"aggregate" must be one of: ${dn.join(", ")}`);if(void 0!==t.group_by){if(!cn.includes(t.group_by))throw new Error(`"group_by" must be one of: ${cn.join(", ")}`);return{unit:t.group_by,aggregate:t.aggregate??"mean"}}}function un(t,e,i,n){const o="change"===i?function(t){let e=null;return t.map(t=>{if(null===t.v)return null;if(null===e)return e=t.v,0;if(t.v>=e){const i=t.v-e;return e=t.v,i}return e-t.v>.1*Math.abs(e)?(e=t.v,Math.max(0,t.v)):0})}(t):[],r=[];let a=0;for(let s=0;s+1<e.length;s++){const l=e[s],c=e[s+1],d=Math.min(c,n);for(;a<t.length&&t[a].t<l;)a++;const h={t:l,end:c,v:null};if(r.push(h),d<=l)continue;const u=[],p=t[a-1];let m=a;const f=m<t.length&&t[m].t<d?t[m].t:d;for(p&&f>l&&u.push({v:p.v,dt:f-l,reading:!1,carried:!0,up:0});m<t.length&&t[m].t<d;m++){const e=m+1<t.length&&t[m+1].t<d?t[m+1].t:d,i=t[m];u.push({v:i.v,dt:e-i.t,reading:!0,carried:!0===i.carried,up:o[m]??null})}const g=u.filter(t=>null!==t.v);if(0===g.length)continue;const _=g.map(t=>t.v);switch(i){case"mean":{const t=g.reduce((t,e)=>t+e.dt,0);h.v=t>0?g.reduce((t,e)=>t+e.v*e.dt,0)/t:_.reduce((t,e)=>t+e,0)/_.length;break}case"min":h.v=Math.min(..._);break;case"max":h.v=Math.max(..._);break;case"first":h.v=_[0];break;case"last":h.v=_[_.length-1];break;case"sum":{const t=g.filter(t=>t.reading&&!t.carried);h.v=t.length?t.reduce((t,e)=>t+e.v,0):null;break}case"change":h.v=g.reduce((t,e)=>t+(e.reading&&!e.carried?e.up??0:0),0)}}return r}const pn={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},mn={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};const fn={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class gn{constructor(t){this.onChange=t,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(t,e,i,n,o={}){const r=o.live??!0,a="statistics"===n?o.statistics??sn(i):void 0,s=`${n}|${e.map(ln).join(",")}|${a?JSON.stringify(a):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>yn,c=void 0!==this.pausedAt&&"statistics"===n&&r;this.pausedAt=void 0;const d=Math.max(6e4,(i.end-i.start)/100),h=i.start<this.loadedFrom||(r?this.loadedTo!==1/0:i.end>this.loadedTo+d);(s!==this.shape||h||l&&r||c)&&(this.shape=s,this.load(t,e,i,r,a)),"ready"===this.status&&"history"===n&&this.loadedTo===1/0&&this.appendLive(t,e);const u=new Map;for(const[p,m]of this.data)u.set(p,_n(m,i));return{status:this.status,data:u,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(t,e,i,n,o){const r=++this.generation;this.status="loading",this.loadedFrom=i.start,this.loadedTo=n?1/0:i.end,clearTimeout(this.timer);const a=o?async function(t,e,i,n=sn(i)){const o=new Map;if(!t.callWS||0===e.length)return o;const r=[...new Set(e.map(t=>t.entity))],a=await t.callWS({type:"recorder/statistics_during_period",start_time:new Date(i.start).toISOString(),end_time:new Date(i.end).toISOString(),statistic_ids:r,period:n.period,types:n.types});for(const s of e)o.set(ln(s),rn(a?.[s.entity],n.value));return o}(t,e,i,o):async function(t,e,i){const n=new Map;if(!t.callWS||0===e.length)return n;const o={type:"history/history_during_period",start_time:new Date(i.start).toISOString(),end_time:new Date(i.end).toISOString(),significant_changes_only:!1},r=[...new Set(e.filter(t=>!t.attribute).map(t=>t.entity))],a=[...new Set(e.filter(t=>t.attribute).map(t=>t.entity))],s=[];return r.length&&s.push(t.callWS({...o,entity_ids:r,minimal_response:!0,no_attributes:!0}).then(t=>{for(const e of r)n.set(ln({entity:e}),nn(t?.[e]))})),a.length&&s.push(t.callWS({...o,entity_ids:a,no_attributes:!1}).then(t=>{for(const i of e.filter(t=>t.attribute))n.set(ln(i),nn(t?.[i.entity],i.attribute))})),await Promise.all(s),n}(t,e,i);a.then(i=>{if(r===this.generation){this.data=i,this.status="ready",this.error=void 0,this.seen.clear();for(const i of e)this.seen.set(ln(i),t.states[i.entity]);o&&n&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},fn[o.period])),this.onChange()}},t=>{r===this.generation&&(this.status="error",this.error=t instanceof Error?t.message:String(t?.message??t),this.onChange())})}appendLive(t,e){for(const i of e){const e=ln(i),n=t.states[i.entity];if(!n||this.seen.get(e)===n)continue;this.seen.set(e,n);const o=Date.parse(n.last_updated??n.last_changed??"")||Date.now(),r=this.data.get(e)??[],a=r[r.length-1];a&&o<=a.t||(r.push({t:o,v:en(i.attribute?n.attributes?.[i.attribute]:n.state)}),this.data.set(e,r))}}}function _n(t,e){let i=0;for(;i<t.length&&t[i].t<e.start;)i++;const n=t.slice(i).filter(t=>t.t<=e.end),o=t[i-1];return o?[{...o,t:e.start,carried:!0},...n]:n}const yn=6e4,vn=new WeakMap;const bn=["smooth","straight","step"],$n=t=>(Math.round(100*t)/100).toString();function xn(t){return t.map(([t,e],i)=>`${i?"L":"M"}${$n(t)},${$n(e)}`).join("")}function wn(t,e){return 0===t.length?"":1===t.length?`M${$n(t[0][0])},${$n(t[0][1])}h0`:"smooth"===e?function(t){const e=t.length;if(e<3)return xn(t);const i=[],n=[];for(let a=0;a<e-1;a++)i.push(t[a+1][0]-t[a][0]),n.push(0===i[a]?0:(t[a+1][1]-t[a][1])/i[a]);const o=[n[0]];for(let a=1;a<e-1;a++)o.push(n[a-1]*n[a]<=0?0:(n[a-1]+n[a])/2);o.push(n[e-2]);for(let a=0;a<e-1;a++){if(0===n[a]){o[a]=0,o[a+1]=0;continue}const t=o[a]/n[a],e=o[a+1]/n[a],i=t*t+e*e;if(i>9){const r=3/Math.sqrt(i);o[a]=r*t*n[a],o[a+1]=r*e*n[a]}}let r=`M${$n(t[0][0])},${$n(t[0][1])}`;for(let a=0;a<e-1;a++){const e=i[a]/3;r+=`C${$n(t[a][0]+e)},${$n(t[a][1]+o[a]*e)},${$n(t[a+1][0]-e)},${$n(t[a+1][1]-o[a+1]*e)},${$n(t[a+1][0])},${$n(t[a+1][1])}`}return r}(t):"step"===e?function(t){let e=`M${$n(t[0][0])},${$n(t[0][1])}`;for(let i=1;i<t.length;i++)e+=`H${$n(t[i][0])}V${$n(t[i][1])}`;return e}(t):xn(t)}const kn=1e3,An=200,Mn=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],Cn=["history","statistics"];function Sn(t,e=Date.now()){const i=Gi(t.raw.period),n=t.raw.source??"history",o=Ri(t.hass),r=Ji(i,e,o,i.navigate?Qi(t.host,i):0),a=hn(t.raw),s={start:a?Hi(a.unit,r.start,o):r.start,end:r.end},l=t.items.map(t=>({entity:t.entityId,attribute:t.config.attribute})),c=function(t,e){let i=vn.get(t);return i||(i=new gn(e),vn.set(t,i)),i}(t.host,t.requestUpdate),d=a&&"statistics"===n?function(t,e,i){const n=e.timeZone===i&&("week"!==t.unit||1===e.firstDay);return{period:"hour"!==t.unit&&n?t.unit:"hour",...mn[t.aggregate]}}(a,o,t.hass.config?.time_zone):void 0,h=d?{start:s.start-pn[d.period],end:s.end}:s,u=c.get(t.hass,l,h,n,{live:r.live,statistics:d}),p=a?function(t,e,i,n,o=1e4){const r=[Hi(t,e,n)];let a=1;for(;r[r.length-1]<i&&r.length<=o;){const e="hour"===t?r[0]+a*Ei:Di(t,r[0],a,n);r.push(e>r[r.length-1]?e:r[r.length-1]+Ei),a++}return 1===r.length&&r.push(Di(t,r[0],1,n)),r}(a.unit,s.start,s.end,o):[],m=t.raw.curve??"smooth",f=Math.min(s.end,e),g=t.items.map((t,e)=>{const i=t.config;let o=u.data.get(ln(l[e]))??[];const r=o[o.length-1];return a?o="statistics"===n?function(t,e,i,n=1/0){const o=[];let r=0;for(let a=0;a+1<e.length;a++){const s=e[a],l=e[a+1];for(;r<t.length&&t[r].t<s;)r++;let c=r;const d=[];for(;c<t.length&&t[c].t<l;c++)null===t[c].v||t[c].carried||d.push(t[c].v);let h=null;if(d.length&&s<n)if("mean"===i)h=d.reduce((t,e)=>t+e,0)/d.length;else if("sum"===i||"change"===i)h=d.reduce((t,e)=>t+e,0);else if("min"===i)h=Math.min(...d);else if("max"===i)h=Math.max(...d);else if("last"===i)h=d[d.length-1];else{const e=t.slice(0,r).reverse().find(t=>null!==t.v),i=t.slice(r,c).find(t=>t.carried&&null!==t.v);h=(e??i)?.v??d[0]}o.push({t:s,end:l,v:h})}return o}(o,p,a.aggregate,f):un(o,p,a.aggregate,f):"history"===n&&r&&null!==r.v&&r.t<f&&(o=[...o,{t:f,v:r.v}]),{index:e,entity:t,points:o,color:Et(i.color??Mn[e%Mn.length]),curve:i.curve??m,dash:!0===i.dash}});return{status:u.status,error:u.error,range:s,period:i,source:n,series:g,live:r.live,back:r.back,zone:o,group:a}}te("en",{period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months"});const En=(t,e,i)=>1===t?e:i;function On(t,e,i,n,o){const r=(t,e)=>ie(o,t,e);if(t.calendar&&i<2)return r({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[t.calendar][i]);if(!t.calendar&&0===i){const e=t.last;return r({hour:En(e,"period_last_hour","period_last_hours"),day:En(e,"period_last_day","period_last_days"),week:En(e,"period_last_week_rolling","period_last_weeks"),month:En(e,"period_last_month_rolling","period_last_months")}[t.unit],{n:e})}const a={timeZone:n.timeZone},s=Ui(e.start,n.timeZone).year===Ui(Date.now(),n.timeZone).year;let l;"year"===t.calendar?a.year="numeric":"month"===t.calendar?Object.assign(a,{month:"long",year:"numeric"}):(Object.assign(a,{day:"numeric",month:"short"}),s||(a.year="numeric"),"day"===t.calendar&&(a.weekday="short"),t.calendar||"hour"!==t.unit&&"day"!==t.unit||Object.assign(a,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(o?.locale?.language??o?.language??"en",a)}catch{l=new Intl.DateTimeFormat("en",a)}const c=t.calendar?e.end-1:e.end;return"day"===t.calendar||"month"===t.calendar||"year"===t.calendar?l.format(e.start):l.formatRange(e.start,c)}const Tn=r`
  .period-nav {
    display: flex;
    align-items: center;
    gap: 4px;
    padding-bottom: 4px;
    min-width: 0;
  }
  .period-label {
    font-weight: 500;
    font-size: 0.875em;
    padding: 0 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }
  .period-nav button {
    font: inherit;
    color: var(--primary-text-color);
    background: none;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    flex: none;
  }
  .period-step {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
  }
  .period-step svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  .period-step:disabled {
    opacity: 0.35;
    cursor: default;
  }
  .period-nav button:not(:disabled):hover {
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
  .period-nav button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .period-nav .period-return {
    margin-left: auto;
    padding: 4px 12px;
    font-size: 0.8125em;
    color: var(--primary-color);
    border: 1px solid color-mix(in srgb, var(--primary-color) 40%, transparent);
    white-space: nowrap;
  }
`;function Ln(t){!function(t){vn.get(t)?.pause()}(t)}const Nn=r`
  ${Tn}
  .series-header {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
    padding: 4px 0 8px;
  }
  .series-item {
    display: flex;
    align-items: baseline;
    gap: 6px;
    min-width: 0;
    cursor: pointer;
    border-radius: 4px;
  }
  .series-item:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  .swatch {
    flex: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    align-self: center;
  }
  .series-name {
    color: var(--secondary-text-color);
    font-size: 0.875em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .series-value {
    font-weight: 500;
    white-space: nowrap;
  }
  .plot-wrap {
    position: relative;
    height: 180px;
  }
  .plot {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .plot path,
  .plot line {
    vector-effect: non-scaling-stroke;
  }
  .draw-in {
    transform-origin: 0 0;
    transform: scaleX(0);
    transition: transform var(--cd-duration) var(--cd-easing);
  }
  :host([ready]) .draw-in {
    transform: scaleX(1);
  }
  .chart-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    color: var(--secondary-text-color);
    font-size: 0.875em;
    text-align: center;
  }
  .chart-message.error {
    color: var(--error-color, #db4437);
  }
  .point-labels {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .point-label {
    position: absolute;
    transform: translate(-50%, calc(-100% - 6px));
    font-size: 10px;
    line-height: 1;
    padding: 2px 3px;
    border-radius: 3px;
    color: var(--primary-text-color);
    background: color-mix(in srgb, var(--card-background-color, #fff) 80%, transparent);
    white-space: nowrap;
  }
`,Un=new WeakMap;function Pn(t){let e=Un.get(t.host);if(!e){const i={width:t.host.clientWidth||400};e=i,Un.set(t.host,i),"undefined"!=typeof ResizeObserver&&(i.observer=new ResizeObserver(e=>{const n=Math.round(e[e.length-1].contentRect.width);Math.round(n/70)!==Math.round(i.width/70)&&(i.width=n,t.requestUpdate())}),i.observer.observe(t.host))}return e.width}function zn(t){const e=hi(t.raw);return Math.max(0,Pn(t)-32-(e.y&&"outside"===e.labels?40:0))}const jn=t=>Math.round(1e4*t)/100+"%";function Hn({axes:t,ctx:e,content:i,label:n,defs:o=q,overlay:r=q,hover:a}){const{options:s}=t,l="outside"===s.labels,c=s.y&&t.value.ticks.length>0,d=s.x&&t.times.length>0,h=c?function(t,e){const{scales:i,value:n}=t;return n.ticks.map(t=>{const o=i.y(t)/An;return I`<span class="axis-label ${o<.08?"top":o>.92?"bottom":""}" style="top:${jn(o)}"
      >${Ie(t,n.decimals,e.hass)}</span
    >`})}(t,e):[],u=c?I`<div class="y-axis">${h}</div>`:q,p=d?I`<div class="x-axis">${function(t,e){const{scales:i,range:n}=t,o=bi(ki(e.hass));return t.times.map(r=>{const a=i.x(r)/kn;return I`<span class="axis-label ${a<.05?"start":a>.95?"end":""}" style="left:${jn(a)}"
      >${Si(r,t.unit,n.end-n.start,e.hass,o)}</span
    >`})}(t,e)}</div>`:q,m=c?I`<span class="axis-sizer" aria-hidden="true"
        >${t.value.ticks.map(i=>Ie(i,t.value.decimals,e.hass)).reduce((t,e)=>e.length>t.length?e:t,"")}</span
      >`:q;return I`<div class="plot-wrap axes-${s.labels} ${c?"has-y":""} ${d?"has-x":""}">
    ${l&&c?I`<div class="y-axis">${m}${h}</div>`:q}
    <div
      class="plot-area ${a?"hoverable":""}"
      @pointerdown=${a?.move}
      @pointermove=${a?.move}
      @pointerleave=${a?.leave}
      @pointercancel=${a?.leave}
    >
      ${function(t,e,i=q,n=q){return I`<svg
    class="plot"
    viewBox="0 0 ${kn} ${An}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${e}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${kn} height=${204}></rect>
      </clipPath>
      ${i}
    </defs>
    ${n}
    <g clip-path="url(#cd-draw-in)">${t}</g>
  </svg>`}(i,n,o,function(t){const{options:e,scales:i}=t;return V`<g class="grid">
    ${e.horizontal?t.value.ticks.map(t=>V`<line x1="0" x2=${kn} y1=${i.y(t)} y2=${i.y(t)}></line>`):q}
    ${e.vertical?t.times.map(t=>V`<line x1=${i.x(t)} x2=${i.x(t)} y1="0" y2=${An}></line>`):q}
  </g>`}(t))} ${l?q:I`${u}${p}`} ${r}
    </div>
    ${l?p:q}
  </div>`}const Dn=r`
  .plot-wrap {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) auto;
  }
  .plot-area {
    position: relative;
    grid-column: 2;
    grid-row: 1;
    min-height: 0;
  }
  .plot .grid line {
    stroke: var(--divider-color, rgba(127, 127, 127, 0.25));
    stroke-width: 1;
  }
  .axis-label {
    position: absolute;
    font-size: 11px;
    line-height: 1;
    color: var(--secondary-text-color);
    white-space: nowrap;
    pointer-events: none;
    font-variant-numeric: tabular-nums;
  }
  /* Room for half of the top value label, which is centred on the plot's top edge. */
  .plot-wrap.axes-outside.has-y {
    padding-top: 6px;
    box-sizing: border-box;
  }
  .axes-outside .y-axis {
    position: relative;
    grid-column: 1;
    grid-row: 1;
    padding-right: 6px;
  }
  .axes-outside .y-axis .axis-label {
    right: 6px;
    transform: translateY(-50%);
  }
  .axis-sizer {
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .axes-outside .x-axis {
    position: relative;
    grid-column: 2;
    grid-row: 2;
    height: 18px;
  }
  .axes-outside .x-axis .axis-label {
    top: 5px;
  }
  .x-axis .axis-label {
    transform: translateX(-50%);
  }
  .x-axis .axis-label.start {
    transform: none;
  }
  .x-axis .axis-label.end {
    transform: translateX(-100%);
  }
  .axes-inside .y-axis,
  .axes-inside .x-axis {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .axes-inside .y-axis .axis-label {
    left: 2px;
    transform: translateY(calc(-100% - 2px));
    font-size: 10px;
  }
  /* Over the plot, the bottom value label would collide with the first time label. */
  .axes-inside.has-x .y-axis .axis-label.bottom {
    visibility: hidden;
  }
  .axes-inside .y-axis .axis-label.top {
    transform: translateY(3px);
  }
  .axes-inside .x-axis .axis-label {
    bottom: 3px;
    font-size: 10px;
  }
  .axes-inside .axis-label {
    padding: 0 2px;
    border-radius: 2px;
    background: color-mix(in srgb, var(--card-background-color, #fff) 70%, transparent);
  }
`,Fn=["above","over","hidden"];function Rn(t,e,i){return I`<div class="frame ${t.compact?"compact":""}">
    ${"above"===t.header?e:q}${i}
  </div>`}function Bn(t){return t===q?q:I`<div class="header-over" @pointerdown=${t=>t.stopPropagation()}>${t}</div>`}const In=r`
  .header-over {
    position: absolute;
    top: 2px;
    left: 4px;
    max-width: calc(100% - 8px);
    z-index: 2;
    padding: 0 6px;
    border-radius: 6px;
    background: color-mix(in srgb, var(--card-background-color, #fff) 75%, transparent);
  }
  /* While reading values, the tooltip takes the top corner: step the header out of its way. */
  .header-over {
    transition: opacity 0.15s ease;
  }
  .header-over:has(~ .hover-layer) {
    opacity: 0;
  }
  /* Labels over the plot: the top value label would sit under the header. */
  .plot-area:has(> .header-over) > .y-axis .axis-label.top {
    visibility: hidden;
  }
  .header-over .series-header {
    padding: 2px 0;
  }
  .header-over .series-value {
    font-size: 1.25em;
  }
  /* Compact: less padding round the card, a tighter header and a shorter plot. */
  .content:has(> .chart > .frame.compact) {
    padding: 4px 10px;
  }
  .frame.compact .series-header {
    gap: 2px 10px;
    padding: 0 0 2px;
    font-size: 0.9em;
  }
  .frame.compact .header-over .series-header {
    padding: 0;
  }
  .frame.compact .plot-wrap,
  .frame.compact .chart-message {
    height: 110px;
  }
  .frame.compact .axis-label {
    font-size: 10px;
  }
  .frame.compact .axes-outside .x-axis {
    height: 14px;
  }
  .frame.compact .axes-outside .x-axis .axis-label {
    top: 3px;
  }
`;function Vn(t,e){if(0===t.length)return-1;let i=0,n=t.length-1;for(;i<n;){const o=i+n>>1;t[o].t<e?i=o+1:n=o}return i>0&&e-t[i-1].t<=t[i].t-e?i-1:i}const Wn=new WeakMap;function qn(t,e,i){const n=function(t){let e=Wn.get(t);return e||(e={},Wn.set(t,e)),e}(t.host),o=e=>{e!==n.t&&(n.t=e,t.requestUpdate())},r=()=>{void 0!==n.timer&&clearTimeout(n.timer),n.timer=void 0};return{move(t){r();const n=t.currentTarget.getBoundingClientRect(),a=n.width>0?Math.min(1,Math.max(0,(t.clientX-n.left)/n.width)):0;o(function(t,e){let i;for(const n of t){const t=Vn(n,e);if(t<0)continue;const o=n[t].t;(void 0===i||Math.abs(o-e)<Math.abs(i-e))&&(i=o)}return i}(i,e.start+a*(e.end-e.start)))},leave(t){r(),"touch"===t.pointerType||"pen"===t.pointerType?n.timer=setTimeout(()=>{n.timer=void 0,o(void 0)},3e3):o(void 0)}}}const Zn=t=>Math.round(1e4*t)/100+"%";function Yn(t,e,i,n,o){if(void 0===n)return q;const r=i.x(n)/kn;if(!(r>=0&&r<=1))return q;const a=function(t,e){const i=t*e;return i+190<=e?"right":i>=190?"left":t>.5?"pin-left":"pin-right"}(r,o),s=e.map(t=>{const e=Vn(t.points,n);return{s:t,p:e<0?void 0:t.points[e]}});return I`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Zn(r)}"></div>
    ${s.map(({s:t,p:e})=>{if(!e||null===e.v)return q;const n=i.y(e.v)/An;return n>=0&&n<=1?I`<span
        class="hover-dot"
        style="left:${Zn(i.x(e.t)/kn)};top:${Zn(n)};background:${t.color}"
      ></span>`:q})}
    <div class="tooltip ${a}" style=${a.startsWith("pin")?"":`left:${Zn(r)}`}>
      <div class="tooltip-time">${function(t,e){return Ci(e?.locale?.language??"en",ki(e),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:Ai(e)}).format(t)}(n,t.hass)}</div>
      ${s.map(({s:e,p:i})=>I`<div class="tooltip-row">
            <span class="swatch" style="background:${e.color}"></span>
            <span class="tooltip-name">${e.entity.name}</span>
            <span class="tooltip-value">${function(t,e,i){return t&&null!==t.v?Ve(Ie(t.v,e.entity.decimals,i.hass),e.entity.unit):"—"}(i,e,t)}</span>
          </div>`)}
    </div>
  </div>`}const Gn=r`
  .plot-area.hoverable {
    /* A finger dragging sideways scrubs the chart; up and down still scrolls the page. */
    touch-action: pan-y;
    cursor: crosshair;
  }
  .hover-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }
  .crosshair {
    position: absolute;
    top: 0;
    bottom: 0;
    border-left: 1px solid var(--secondary-text-color);
    opacity: 0.6;
  }
  .hover-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid var(--card-background-color, #fff);
    transform: translate(-50%, -50%);
  }
  .tooltip {
    position: absolute;
    top: 0;
    min-width: 0;
    max-width: 220px;
    padding: 6px 8px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1.4;
    color: var(--primary-text-color);
    background: var(--card-background-color, #fff);
    border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  .tooltip.right {
    transform: translateX(10px);
  }
  .tooltip.left {
    transform: translateX(calc(-100% - 10px));
  }
  .tooltip.pin-left {
    left: 0;
  }
  .tooltip.pin-right {
    right: 0;
  }
  .tooltip-time {
    color: var(--secondary-text-color);
    margin-bottom: 2px;
    white-space: nowrap;
  }
  .tooltip-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .tooltip-row .swatch {
    width: 8px;
    height: 8px;
  }
  .tooltip-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--secondary-text-color);
  }
  .tooltip-value {
    font-weight: 500;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
`;function Xn(t,e,i){return{select:{mode:"dropdown",options:i.map(i=>({value:i,label:ie(t,`editor_${e}_${i}`)}))}}}te("en",{editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)"});function Jn(t){const e=t?.period;return`${e?.calendar?"calendar":"rolling"}${t?.group_by?"|grouped":""}`}function Kn(t,e){const[i,n]=Jn(e).split("|"),o="calendar"===i;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:Xn(t,"period_calendar",["rolling",...Ii])},...o?[{name:"period_until",selector:Xn(t,"period_until",Vi)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:Xn(t,"period_unit",Bi)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:Xn(t,"source",Cn)},{type:"grid",name:"",schema:[{name:"group_by",selector:Xn(t,"group_by",["none",...cn])},...n?[{name:"aggregate",selector:Xn(t,"aggregate",dn)}]:[]]}]}te("en",{editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden"});function Qn(t){return[{type:"grid",name:"",schema:[{name:"header",selector:Xn(t,"header",Fn)},{name:"compact",selector:{boolean:{}}}]}]}const to=[{name:"x_axis",path:["x_axis"],default:ri},{name:"y_axis",path:["y_axis"],default:ai},{name:"axis_labels",path:["axis_labels"],default:si},{name:"grid_horizontal",path:["gridlines","horizontal"],default:li},{name:"grid_vertical",path:["gridlines","vertical"],default:ci},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];const eo=new Map;const io=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"},{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"line_width",path:["line_width"],default:2.5},{name:"dots",path:["dots"],default:!1},...to,{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];const no=["series","bands"];function oo(t,e,i,n,o){const r=se(t.entity.config,o),a=ii(t.points,500),s=function(t){const e=[];let i=[];for(const n of t)null===n.v?(i.length&&e.push(i),i=[]):i.push(n);return i.length&&e.push(i),e}(a).map(i=>wn(i.map(t=>[e.x(t.t),e.y(t.v)]),t.curve)).join(""),l=r.dots?a.filter(t=>null!==t.v&&t.t!==n.start&&t.t!==n.end):[],c=l.length>0&&l.length<=200?V`<path
          class="dots"
          d=${h=l.map(t=>[e.x(t.t),e.y(t.v)]),h.map(([t,e])=>`M${Math.round(100*t)/100},${Math.round(100*e)/100}h0`).join("")}
          fill="none"
          stroke=${i}
          style="stroke-width:${d=r.width,Math.round(10*(d+3.5))/10}px"
        ></path>`:q;var d,h;return V`<g class="series" data-series=${t.index}>
    <path
      class="line ${t.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${i}
      style="stroke-width:${r.width}px"
    ></path>
    ${c}
  </g>`}function ro(t,e,i){return I`<div class="point-labels">
    ${t.series.flatMap(n=>{const o=n.points.filter(e=>null!==e.v&&(void 0!==t.group||e.t!==t.range.start&&e.t!==t.range.end));return o.length>40?[]:o.map(t=>I`<span
            class="point-label"
            style="left:${e.x(t.t)/kn*100}%;top:${e.y(t.v)/An*100}%"
            >${Ie(t.v,n.entity.decimals,i.hass)}</span
          >`)})}
  </div>`}te("en",{editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",chart_aria:"{style} chart of {names}"});const ao={layout:"chart",group:"history",height:240,styles:r`
    ${Nn}
    ${Dn}
    ${Gn}
    ${In}
    .style-line .line {
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .style-line .dots {
      stroke-linecap: round;
    }
    .style-line .line.dashed {
      stroke-dasharray: 6 5;
    }
  `,thumbnail:()=>V`
    <path d="M4 30 C14 28 16 14 26 16 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />
    <path d="M4 34 C16 33 22 26 32 28 S50 30 60 24" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(t){if(function(t){if(Gi(t.period),hn(t),void 0!==t.source&&!Cn.includes(t.source))throw new Error(`"source" must be one of: ${Cn.join(", ")}`);const e=[t.curve,...(t.entities??[]).map(t=>"object"==typeof t?t.curve:void 0)];for(const i of e)if(void 0!==i&&!bn.includes(i))throw new Error(`"curve" must be one of: ${bn.join(", ")}`)}(t),function(t){const e=t;for(const i of["x_axis","y_axis"])if(void 0!==e[i]&&"boolean"!=typeof e[i])throw new Error(`"${i}" must be true or false`);if(void 0!==e.axis_labels&&!oi.includes(e.axis_labels))throw new Error(`"axis_labels" must be one of: ${oi.join(", ")}`);if(void 0!==e.gridlines){const t=e.gridlines;if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const e of["horizontal","vertical"])if(void 0!==t[e]&&"boolean"!=typeof t[e])throw new Error(`"gridlines.${e}" must be true or false`)}for(const i of["y_min","y_max"])if(void 0!==e[i]&&!di(e[i]))throw new Error(`"${i}" must be a number`);if(di(e.y_min)&&di(e.y_max)&&e.y_min>=e.y_max)throw new Error('"y_min" must be below "y_max"')}(t),function(t){const e=t.tooltip;if(void 0!==e&&"boolean"!=typeof e)throw new Error('"tooltip" must be true or false')}(t),function(t){le(t.line_width,'"line_width"'),ce(t.dots,'"dots"');for(const e of t.entities??[])"object"==typeof e&&(le(e.line_width,`"line_width" of ${e.entity}`),ce(e.dots,`"dots" of ${e.entity}`),ce(e.on_top,`"on_top" of ${e.entity}`))}(t),function(t){if(void 0!==t.compact&&"boolean"!=typeof t.compact)throw new Error('"compact" must be true or false');if(void 0!==t.header&&!Fn.includes(t.header))throw new Error(`"header" must be one of: ${Fn.join(", ")}`)}(t),void 0!==t.color_by&&!no.includes(t.color_by))throw new Error(`"color_by" must be one of: ${no.join(", ")}`)},editor:function(t){const e=function(t,e,i){const n=`${t}|${ee(e)}`;let o=eo.get(n);return o||(o=i(),eo.set(n,o)),o}(`line|${Jn(t.config)}`,t.hass,()=>{return[...Kn(t.hass,t.config),{type:"grid",name:"",schema:[{name:"curve",selector:Xn(t.hass,"curve",bn)},{name:"color_by",selector:Xn(t.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:ye},{name:"dots",selector:{boolean:{}}}]},{name:"labels",selector:{boolean:{}}},...(e=t.hass,[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:Xn(e,"axis_labels",oi)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]),...Qn(t.hass)];var e});return function(t,e,i,n){return I`<ha-form
    data-section=${e}
    .hass=${t.hass}
    .data=${Ue(t.config,n)}
    .schema=${i}
    .computeLabel=${e=>ie(t.hass,`editor_${e.name}`)}
    @value-changed=${e=>{e.stopPropagation();const i=Pe(t.config,n,e.detail?.value??{});i!==t.config&&t.commit(i)}}
  ></ha-form>`}(t,"chart",e,io)},disconnect(t){Ln(t),function(t){Un.get(t)?.observer?.disconnect(),Un.delete(t)}(t),function(t){const e=Wn.get(t);void 0!==e?.timer&&clearTimeout(e.timer),Wn.delete(t)}(t)},render(t){const e=Sn(t),i=function(t,e,i=Date.now()){const{period:n}=t;if(!n.navigate)return q;const o=Qi(e.host,n),r=t=>i=>{i.stopPropagation(),tn(e.host,n,t),e.requestUpdate()},a=On(n,t.range,t.back,t.zone,e.hass);let s="";if(0!==o){const o=Ji(n,i,t.zone);s=On(n,o,o.back,t.zone,e.hass)}const l=t=>I`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${t}></path></svg>`;return I`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${ie(e.hass,"period_previous")} @click=${r(o+1)}>
      ${l("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")}
    </button>
    <span class="period-label" aria-live="polite">${a}</span>
    <button
      class="period-step period-next"
      aria-label=${ie(e.hass,"period_next")}
      ?disabled=${0===t.back}
      @click=${r(o-1)}
    >
      ${l("M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")}
    </button>
    ${0!==o?I`<button
            class="period-return"
            aria-label=${ie(e.hass,"period_return",{label:s})}
            @click=${r(0)}
          >
            ${s}
          </button>`:q}
  </div>`}(e,t),n=function(t,e){const{show:i}=e.config;return i.name||i.value?I`<div class="series-header">
    ${t.series.map(t=>I`<div class="entity series-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}>
          <span class="swatch" style="background:${t.color}"></span>
          ${i.name?I`<span class="series-name">${t.entity.name}</span>`:q}
          ${i.value?I`<span class="series-value">${t.entity.display}</span>`:q}
        </div>`)}
  </div>`:q}(e,t),o=i===q&&n===q?q:I`${i}${n}`,r=function(t,e){return"loading"===t.status?I`<div class="chart-message">${ie(e.hass,"chart_loading")}</div>`:"error"===t.status?I`<div class="chart-message error">
      ${ie(e.hass,"chart_error",{error:t.error??""})}
    </div>`:t.series.every(t=>t.points.every(t=>null===t.v))?I`<div class="chart-message">${ie(e.hass,"chart_no_data")}</div>`:void 0}(e,t),a={compact:!0===(s=t.raw).compact,header:s.header??"above"};var s;if(r)return Rn("over"===a.header?{...a,header:"above"}:a,o,r);const l=function(t,e,i){const n=hi(t.raw),o=mi(i,n,4),r=Math.max(2,Math.min(8,Math.round(Pn(t)/70))),{unit:a,ticks:s}=wi(e,r,bi(ki(t.hass)));return{options:n,value:o,times:s,unit:a,range:e,scales:{x:ni([e.start,e.end],[0,kn]),y:ni(o.domain,[An,0]),domain:o.domain}}}(t,e.range,function(t){let e=1/0,i=-1/0;for(const n of t)for(const t of n)for(const n of[t.v,t.min,t.max])"number"==typeof n&&(n<e&&(e=n),n>i&&(i=n));return e===1/0?void 0:[e,i]}(e.series.map(t=>t.points))),{scales:c}=l,d=function(t){return!1!==t.tooltip}(t.raw),h="bands"===t.raw.color_by,u=h?V`${e.series.map(t=>function(t,e,i){const[n,o]=i.domain,r=t=>Math.min(1,Math.max(0,(t-n)/(o-n))),a=[];return e.forEach((t,i)=>{const n=Number.isFinite(t.from)?r(t.from):0,o=i+1<e.length?r(e[i+1].from):1,s=Et(t.color);a.push(V`<stop offset=${n} stop-color=${s}></stop><stop offset=${o} stop-color=${s}></stop>`)}),V`<linearGradient id=${t} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${An} y2="0">
    ${a}
  </linearGradient>`}(`cd-bands-${t.index}`,t.entity.bands,c))}`:q,p=(m=e.series,f=e=>se(e.entity.config,t.raw).onTop,[...m.filter(t=>!f(t)),...m.filter(f)]);var m,f;const g=V`${p.map(i=>oo(i,c,h?`url(#cd-bands-${i.index})`:i.color,e.range,t.raw))}`,_=ie(t.hass,"chart_aria",{style:ie(t.hass,"editor_style_line"),names:e.series.map(t=>t.entity.name).join(", ")});return Rn(a,o,Hn({axes:l,ctx:t,content:g,label:_,defs:u,overlay:I`${"over"===a.header?Bn(o):q}
        ${!0===t.raw.labels?ro(e,c,t):q}
        ${d?Yn(t,e.series,c,(y=t.host,Wn.get(y)?.t),zn(t)):q}`,hover:d?qn(t,e.range,e.series.map(t=>t.points)):void 0}));var y}},so=t=>(Math.abs(t)<.005?0:t).toFixed(2);function lo(t,e,i,n){const o=n*Math.PI/180;return[t+i*Math.sin(o),e-i*Math.cos(o)]}function co(t,e,i,n,o){const r=String(Number(i.toFixed(2))),a=o-n,[s,l]=lo(t,e,i,n);if(a>=359.99){const[o,a]=lo(t,e,i,n+180);return`M${so(s)} ${so(l)} A${r} ${r} 0 1 1 ${so(o)} ${so(a)} A${r} ${r} 0 1 1 ${so(s)} ${so(l)}`}const[c,d]=lo(t,e,i,o),h=a>180?1:0;return`M${so(s)} ${so(l)} A${r} ${r} 0 ${h} 1 ${so(c)} ${so(d)}`}function ho(t,e){const i=t/2;return[-i+e[0]*t,-i+e[1]*t]}function uo(t){let e=0;for(const i of t)e+=i.codePointAt(0)>=11904?1/.58:1;return e}function po(t,e=76,i=12,n=8,o=11){const r=t.trim();let a=[r];if(uo(r)>o){let t=uo(r);for(let e=r.indexOf(" ");e>0;e=r.indexOf(" ",e+1)){const i=Math.max(uo(r.slice(0,e)),uo(r.slice(e+1)));i<t&&(t=i,a=[r.slice(0,e),r.slice(e+1)])}}const s=Math.max(...a.map(uo));return{lines:a,size:Math.max(n,Math.min(i,Math.floor(e/(.58*Math.max(1,s)))))}}const mo=65,fo=66,go=t=>String(Math.round(1e3*t)/1e3+0);function _o(t,e,i,n,o,r=11){const{lines:a,size:s}=po(t,e,i,n,r),l=o-1.2*(a.length-1)*s;return V`<text class="na" text-anchor="middle" style="font-size: ${s}px">${a.map((t,e)=>V`<tspan x=${mo} y=${go(l+1.2*e*s)}>${t}</tspan>`)}</text>`}const yo={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:r`
    /* A definite width that shrinks with a narrow tile (the svg inside is sized in %). */
    .needle-gauge {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      padding: 6px 0;
      width: 130px;
      max-width: 100%;
      margin: 0 auto;
    }
    /* 130 px wide, smaller only when the tile is narrower. */
    .needle-gauge svg {
      display: block;
      width: min(130px, 100%);
      height: auto;
      aspect-ratio: 130 / 104;
      overflow: visible;
    }
    .needle-gauge svg.compact {
      aspect-ratio: 130 / 82;
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
      transform-box: view-box;
      transform-origin: 65px 66px;
      transition: transform 0.9s cubic-bezier(0.22, 1.4, 0.36, 1);
    }
    :host(:not([ready])) .needle-gauge .needle {
      transform: rotate(-90deg) !important;
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
  `,render(t,{show:e,hass:i}){const n=function(t,e,i){const n=i-e,o=[];return n>0?(t.forEach((r,a)=>{const s=0===a?e:Math.max(r.from,e),l=Math.min(a+1<t.length?t[a+1].from:1/0,i);l>s&&o.push({from:(s-e)/n,to:(l-e)/n,color:r.color})}),o):o}(t.bands,t.min,t.max),o=n.map((t,e)=>{const i=180*t.from-90+(e>0?1:0),o=180*t.to-90-(e<n.length-1?1:0);return o>i?V`<path class="seg" d=${co(mo,fo,50,i,o)} stroke=${Et(t.color)}></path>`:q}),r=Array.from({length:11},(t,e)=>{const[i,n]=lo(mo,fo,36,18*e-90),[o,r]=lo(mo,fo,40,18*e-90);return V`<line class="tickmark" x1=${i.toFixed(2)} y1=${n.toFixed(2)} x2=${o.toFixed(2)} y2=${r.toFixed(2)}></line>`});let a=q;if(e.target&&null!==t.targetPosition&&t.available){const e=180*t.targetPosition-90,[i,n]=lo(mo,fo,57,e),[o,r]=lo(mo,fo,64,e-3),[s,l]=lo(mo,fo,64,e+3);a=V`<polygon class="target-mark" points="${i.toFixed(2)},${n.toFixed(2)} ${o.toFixed(2)},${r.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const s=!e.value;return I`<div class="needle-gauge">
      <svg class=${s?"compact":""} viewBox="0 0 130 ${s?82:104}" aria-hidden="true">
        ${o} ${r} ${a}
        ${t.available?V`<g class="needle" style="transform: rotate(${go(180*t.position-90)}deg)"><path d=${c=mo,d=fo,h=42,u=3,`M${so(c)} ${so(d-h)} L${so(c+u)} ${so(d)} L${so(c-u)} ${so(d)} Z`}></path></g>`:q}
        <circle class="hub" cx=${mo} cy=${fo} r="6"></circle>
        <circle class="hub-dot" cx=${mo} cy=${fo} r="2.5"></circle>
        ${t.available?e.value?V`<text class="value" x=${mo} y="94" text-anchor="middle">${t.display}</text>`:q:s?(l=t.display,_o(l,58,11,7,55)):function(t){return _o(t,126,12,8,94,18)}(t.display)}
      </svg>
      ${e.name||e.icon?I`<div class="name">
              ${e.icon?I`<ha-state-icon
                      class="icon"
                      .hass=${i}
                      .stateObj=${t.stateObj}
                      .icon=${Ye(t)}
                    ></ha-state-icon>`:q}
              ${e.name?I`<span class="name-text">${t.name}</span>`:q}
            </div>`:q}
    </div>`;var l,c,d,h,u}};let vo=0;const bo=new WeakMap;const $o=60,xo=60,wo=t=>String(Math.round(1e3*t)/1e3+0);function ko(t){const[e,i]=ho(t,[0,1]),n=co($o,xo,46,e,i),o=t<360;return{layout:"tiles",group:"gauges",height:o?135:155,minColumnWidth:128,styles:r`
      /* A definite width: the dial is a size container and can't size the tile itself. */
      .radial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 6px 0;
        width: 124px;
        max-width: 100%;
        margin: 0 auto;
      }
      /* The dial is 124 px wide, smaller only when its tile is narrower; positions inside it
         are in cqw (1 % of the dial's width) so they scale with it. */
      .radial .dial {
        position: relative;
        container-type: inline-size;
        width: min(124px, 100%);
        aspect-ratio: 124 / 120;
      }
      .radial svg {
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
      }
      .radial.cropped .dial {
        aspect-ratio: 124 / 100;
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
        transition:
          stroke-dasharray var(--cd-duration) var(--cd-easing),
          stroke-dashoffset var(--cd-duration) var(--cd-easing);
      }
      :host(:not([ready])) .radial .value-arc {
        stroke-dasharray: 0 100 !important;
        stroke-dashoffset: 0 !important;
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
        top: 25cqw;
        transform: translateX(-50%);
        color: var(--state-icon-color, var(--secondary-text-color));
        --mdc-icon-size: 14.52cqw;
      }
      /* With the value hidden, the icon is all that sits in the hollow, so it moves to the
         dial centre (y 60, also on the cropped arc) and grows to fill it. */
      .radial .icon.centre {
        top: 48.39cqw;
        transform: translate(-50%, -50%);
        --mdc-icon-size: 22.58cqw;
      }
      .radial .name {
        max-width: min(124px, 100%);
        font-size: 12px;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `,render(e,{show:i,hass:r}){const a=function(t){let e=bo.get(t);return e||(e="cd-g-"+ ++vo,bo.set(t,e)),e}(e.config),s=e.span[1]-e.span[0]<=0,l=`stroke-dasharray: ${wo(100*(e.span[1]-e.span[0]))} 100; stroke-dashoffset: ${wo(100*-e.span[0])}`,c=(d=e.band.color,Object.prototype.hasOwnProperty.call(St,d)?St[d].fallback:d);var d;const h=function(t){return!t.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",t))}(c)?`url(#${a}) ${c}`:`url(#${a})`,u=i.icon?6:0,p=(m=e.valueText,Math.min(22,Math.floor(124/Math.max(1,m.length))));var m;let f=q;if(i.target&&null!==e.targetPosition&&e.available){const i=ho(t,[e.targetPosition,e.targetPosition])[0],[n,o]=lo($o,xo,39.5,i),[r,a]=lo($o,xo,52.5,i);f=V`<line class="tick" x1=${n.toFixed(2)} y1=${o.toFixed(2)} x2=${r.toFixed(2)} y2=${a.toFixed(2)}></line>`}return I`<div class="radial ${o?"cropped":""}">
        <div class="dial">
          <svg viewBox="0 0 120 ${o?100:120}" aria-hidden="true">
            <defs>
              <linearGradient id=${a} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${$o} cy=${xo} r="34"></circle>
            <path class="track" d=${n}></path>
            ${e.available?V`<path
                  class="value-arc ${s?"empty":""}"
                  d=${n}
                  pathLength="100"
                  style=${l}
                  stroke=${h}
                ></path>`:q}
            ${f}
            ${e.available?V`${i.value?V`<text
                        class="value"
                        x=${$o}
                        y=${64+u}
                        text-anchor="middle"
                        style=${p<22?`font-size: ${p}px`:q}
                      >${e.valueText}</text>
                      <text class="unit" x=${$o} y=${80+u} text-anchor="middle">${e.unit}</text>`:q}`:function(t){const{lines:e,size:i}=po(t),n=64-1.2*(e.length-1)*i/2;return V`<text class="na" text-anchor="middle" style="font-size: ${i}px">${e.map((t,e)=>V`<tspan x=${$o} y=${wo(n+1.2*e*i)}>${t}</tspan>`)}</text>`}(e.display)}
          </svg>
          ${i.icon&&e.available?I`<ha-state-icon
                  class="icon ${i.value?"":"centre"}"
                  .hass=${r}
                  .stateObj=${e.stateObj}
                  .icon=${Ye(e)}
                ></ha-state-icon>`:q}
        </div>
        ${i.name?I`<span class="name">${e.name}</span>`:q}
      </div>`}}}const Ao=ko(360),Mo=ko(270);function Co(t){const[e,i]=t;return Array.from({length:10},(t,n)=>{const o=(n+.5)/10;return o>e&&o<=i})}const So={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:r`
    /* Each row is measured on its own, so a narrow column (columns: 2 or 3) switches layout
       even when the card as a whole is wide. A container can't restyle itself, hence .seg. */
    .style-segmented .entity {
      container-type: inline-size;
      padding: 6px 0;
    }
    .style-segmented .seg {
      display: flex;
      align-items: flex-end;
      gap: 12px;
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
      display: flex;
      gap: 8px;
      font-size: 14px;
      margin-bottom: 6px;
      white-space: nowrap;
      color: var(--primary-text-color);
    }
    .style-segmented .name .label {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .style-segmented .name .status {
      flex: none;
      margin-left: auto;
      color: var(--secondary-text-color);
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
      background: var(--c-start);
      background-image: linear-gradient(180deg, var(--c-start), var(--c-end));
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
    /* Every row reserves the card's longest value (--cd-value-ch), so the cell strips line up,
       but never more than about a third (35 %) of the row. */
    .style-segmented .value {
      flex: none;
      min-width: min(max(48px, calc(var(--cd-value-ch, 4) * 1ch + 4px)), 35%);
      white-space: nowrap;
      text-align: right;
      font-size: 14px;
      padding-bottom: 2px;
      color: var(--primary-text-color);
    }
    /* Narrow cards: the value joins the name line so the cells get the full width. */
    @container (max-width: 279px) {
      .style-segmented .seg {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        grid-template-areas:
          'icon name value'
          'icon cells cells';
        column-gap: 12px;
        align-items: end;
      }
      .style-segmented .body {
        display: contents;
      }
      .style-segmented .icon {
        grid-area: icon;
      }
      .style-segmented .name {
        grid-area: name;
      }
      .style-segmented .cells {
        grid-area: cells;
        gap: 2px;
      }
      .style-segmented .value {
        grid-area: value;
        min-width: 0;
        margin-bottom: 6px;
        padding-bottom: 0;
      }
    }
  `,render(t,{show:e,hass:i}){const n=t.available?Co(t.span):Co([0,0]),o=e.target&&t.available&&null!==t.targetPosition?Math.min(9,Math.max(0,Math.floor(10*t.targetPosition))):-1,r=!t.available;return I`<div class="seg">
      ${e.icon?I`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${Ye(t)}
            ></ha-state-icon>`:q}
      <div class="body">
        ${e.name||r?I`<div class="name">
                ${e.name?I`<span class="label">${t.name}</span>`:q}
                ${r?I`<span class="status">${t.display}</span>`:q}
              </div>`:q}
        <div class="cells">
          ${n.map((t,e)=>I`<i class="cell ${t?"on":""} ${e===o?"mark":""}" style="--i:${e}"></i>`)}
        </div>
      </div>
      ${e.value?I`<span class="value">${t.available?t.display:""}</span>`:q}
    </div>`}},Eo={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:r`
    .style-tank .entity {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      padding: 6px 0;
    }
    /* Equal-width tiles, so tubes are evenly spaced and wrapped rows line up. */
    .style-tank .layout-tiles {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      align-items: end;
    }
    .style-tank .icon {
      color: var(--state-icon-color, var(--secondary-text-color));
      --mdc-icon-size: 22px;
    }
    .style-tank .value {
      font-size: 13px;
      text-align: center;
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
      background: var(--c-start);
      background-image: linear-gradient(0deg, var(--c-start), var(--c-end));
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
      max-width: 100%;
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
              .icon=${Ye(t)}
            ></ha-state-icon>`:q}
      ${e.value||!t.available?I`<span class="value">${t.display}</span>`:q}
      <div class="tube">
        <div class="fill"></div>
        ${e.target&&null!==t.targetPosition&&t.available?I`<div class="target"></div>`:q}
      </div>
      ${e.name?I`<span class="name">${t.name}</span>`:q}
    `},Oo={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:r`
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
      white-space: nowrap;
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
      background: var(--c-start);
      background-image: linear-gradient(90deg, var(--c-start), var(--c-end));
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
  `,render(t,{show:e,hass:i}){const n=e.value||!t.available;return I`
      ${e.icon?I`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${Ye(t)}
            ></ha-state-icon>`:q}
      <div class="body">
        ${e.name||n?I`<div class="top">
                ${e.name?I`<span class="name">${t.name}</span>`:q}
                ${n?I`<span class="value">${t.display}</span>`:q}
              </div>`:q}
        <div class="track">
          <div class="fill"></div>
          ${e.target&&null!==t.targetPosition&&t.available?I`<div class="target"></div>`:q}
        </div>
      </div>
    `}},To=["bars","gauges","history","totals","compare","distribution"];function Lo(t){return"chart"===t.layout}const No={bar:ei,thin:Oo,segmented:So,tank:Eo,ring:Ao,needle:yo,arc:Mo,line:ao},Uo="important",Po=" !"+Uo,zo=mt(class extends ft{constructor(t){if(super(t),t.type!==dt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)null==e[n]&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in e){const t=e[n];if(null!=t){this.ft.add(n);const e="string"==typeof t&&t.endsWith(Po);n.includes("-")||e?i.setProperty(n,e?t.slice(0,-11):t,e?Uo:""):i[n]=t}}return W}}),jo=Object.keys(Nt),Ho=Object.keys(St),Do="custom",Fo={text:{}},Ro={entity:{domain:["sensor","input_number","number"]}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bo(t){return"string"==typeof t&&""!==t.trim()&&!Number.isFinite(Number(t))}const Io={icon:{}};function Vo(t){return void 0===t?"none":jo.find(e=>Nt[e]&&Ne(Nt[e],t))??"custom"}function Wo(t){return Ho.includes(t)}class qo extends lt{constructor(){super(),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(t){t.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(t){const e=this.hass?.states[t]?.state,i=void 0===e||""===e.trim()?NaN:Number(e);return Number.isFinite(i)?i:void 0}_t(t){return ie(this.hass,t)}_getSelectors(){const t=`${ee(this.hass)}|${this.unit??""}`;if(this._selectors?.key===t)return this._selectors;const e=jo.map(t=>({value:t,label:this._t(`editor_preset_${t}`)})),i=t=>({select:{mode:"dropdown",options:t}});return this._selectors={key:t,preset:i(e),presetCustom:i([...e,{value:Do,label:this._t("editor_preset_custom")}]),color:i([...Ho,Do].map(t=>({value:t,label:this._t(`editor_color_${t}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t&&t.length?t:void 0}}))}_presetChanged(t){t.stopPropagation();const e=t.detail?.value;if(!e||e===Do||!jo.includes(e))return;if(e===Vo(this.bands))return;const i=Nt[e];this._emit(i?structuredClone(i):void 0)}_updateBand(t,e,i){const n=[...this.bands??[]],o={...n[t]};null==i||""===i?delete o[e]:o[e]=i,n[t]=o,this._emit(n)}_fromChanged(t,e){e.stopPropagation();const i=Number(e.detail?.value);""!==e.detail?.value&&null!=e.detail?.value&&Number.isFinite(i)&&this._updateBand(t,"from",i)}_fromEntityChanged(t,e){e.stopPropagation();const i=e.detail?.value;"string"==typeof i&&""!==i&&this._updateBand(t,"from",i)}_toggleFromMode(t){const e=this.bands?.[t]?.from,i=new Set(this._entityOpen);Bo(e)?this._updateBand(t,"from",this._entityValue(e)??0):i.delete(t)||i.add(t),this._entityOpen=i}_colorChanged(t,e){e.stopPropagation();const i=e.detail?.value,n=this.bands?.[t]?.color??"primary";if(!i)return;const o=new Set(this._customOpen);i!==Do?(o.delete(t),this._customOpen=o,i!==n&&this._updateBand(t,"color",i)):Wo(n)&&(this._customOpen=o.add(t))}_customColorChanged(t,e){e.stopPropagation();const i="string"==typeof e.detail?.value?e.detail.value.trim():"";if(!i)return;const n=new Set(this._customOpen);n.delete(t),this._customOpen=n,this._updateBand(t,"color",i)}_iconChanged(t,e){e.stopPropagation(),this._updateBand(t,"icon",e.detail?.value)}_labelChanged(t,e){e.stopPropagation(),this._updateBand(t,"label",e.detail?.value)}_removeBand(t){const e=[...this.bands??[]];e.splice(t,1),this._emit(e)}_addBand(){const t=[...this.bands??[]],e=t[t.length-1]?.from,i="number"==typeof e?e:Bo(e)?this._entityValue(e)??NaN:"string"==typeof e&&""!==e.trim()?Number(e):NaN;t.push({from:Number.isFinite(i)?i+10:0,color:"primary"}),this._emit(t)}_renderBand(t,e,i){const n=!Wo(t.color)||this._customOpen.has(e),o=Bo(t.from)?t.from:void 0,r=void 0!==o||this._entityOpen.has(e);return I`<div class="band">
      <span class="swatch" style=${zo({"--swatch":Et(t.color)})}></span>
      <ha-selector
        .required=${!1}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${i.from}
        .value=${void 0!==o?this._entityValue(o):t.from}
        .disabled=${r}
        @value-changed=${t=>this._fromChanged(e,t)}
      ></ha-selector>
      <ha-selector
        .required=${!0}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${i.color}
        .value=${n?Do:t.color}
        @value-changed=${t=>this._colorChanged(e,t)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${Fo}
        .value=${t.label??""}
        @value-changed=${t=>this._labelChanged(e,t)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${Io}
        .value=${t.icon??""}
        @value-changed=${t=>this._iconChanged(e,t)}
      ></ha-selector>
      <ha-icon-button
        class="from-mode"
        .path=${r?"M4,17V9H2V7H6V17H4M22,15C22,16.11 21.1,17 20,17H16V15H20V13H18V11H20V9H16V7H20A2,2 0 0,1 22,9V10.5A1.5,1.5 0 0,1 20.5,12A1.5,1.5 0 0,1 22,13.5V15M14,15V17H8V13C8,11.89 8.9,11 10,11H12V9H8V7H12A2,2 0 0,1 14,9V11C14,12.11 13.1,13 12,13H10V15H14Z":"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"}
        .label=${this._t(r?"editor_band_from_number":"editor_band_from_entity")}
        aria-pressed=${r?"true":"false"}
        @click=${()=>this._toggleFromMode(e)}
      ></ha-icon-button>
      <ha-icon-button
        class="remove"
        .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
        .label=${this._t("editor_remove_band")}
        @click=${()=>this._removeBand(e)}
      ></ha-icon-button>
      ${r?I`<ha-selector
              .required=${!1}
              class="from-entity"
              data-role="from-entity"
              .hass=${this.hass}
              .label=${this._t("editor_band_from_entity_label")}
              .selector=${Ro}
              .value=${o??""}
              @value-changed=${t=>this._fromEntityChanged(e,t)}
            ></ha-selector>`:q}
      ${n?I`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${Fo}
              .value=${Wo(t.color)?Et(t.color):t.color}
              @value-changed=${t=>this._customColorChanged(e,t)}
            ></ha-selector>`:q}
    </div>`}render(){const t=this._getSelectors(),e=Vo(this.bands);return I`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${e===Do?t.presetCustom:t.preset}
        .value=${e}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((e,i)=>this._renderBand(e,i,t))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}qo.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},qo.styles=r`
    :host {
      display: block;
    }
    /* Two lines per band: where it starts and its colour, then its label and icon. */
    .band {
      display: grid;
      grid-template-columns: 20px minmax(0, 1fr) minmax(0, 1fr) auto auto;
      grid-template-areas:
        'swatch from color mode remove'
        '. label icon icon icon';
      gap: 8px;
      align-items: center;
      margin-top: 12px;
    }
    .band + .band {
      padding-top: 12px;
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .swatch {
      grid-area: swatch;
    }
    [data-role='from'] {
      grid-area: from;
    }
    [data-role='color'] {
      grid-area: color;
    }
    [data-role='label'] {
      grid-area: label;
    }
    [data-role='icon'] {
      grid-area: icon;
    }
    .from-mode {
      grid-area: mode;
    }
    .remove {
      grid-area: remove;
    }
    .swatch {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--swatch);
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      box-sizing: border-box;
    }
    /* Optional extra lines go below the two named ones, so a band without them has no gap. */
    .custom,
    .from-entity {
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",qo);const Zo={number:{mode:"box",step:"any"}},Yo={entity:{domain:["sensor","input_number","number"]}};function Go(t){return null==t||""===t?"default":"number"==typeof t||""!==t.trim()&&Number.isFinite(Number(t))?"number":"entity"}class Xo extends lt{willUpdate(t){t.has("value")&&"default"!==Go(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const t=(t,e)=>ie(this.hass,t,e),e=[{value:"default",label:t("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:t("editor_limit_number")},{value:"entity",label:t("editor_limit_entity")}],i=e.map(t=>t.label).join("|");return this._modeSelector?.key!==i&&(this._modeSelector={key:i,selector:{select:{mode:"dropdown",options:e}}}),this._modeSelector.selector}get _currentMode(){return this._mode??Go(this.value)}_emit(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t}}))}_modeChanged(t){t.stopPropagation();const e=t.detail?.value;e&&e!==this._currentMode&&(this._mode=e,void 0!==this.value&&this._emit(void 0))}_numberChanged(t){t.stopPropagation();const e=t.detail?.value,i="number"==typeof e?e:""===e||null==e?NaN:Number(e);this._mode="number",this._emit(Number.isFinite(i)?i:void 0)}_entityChanged(t){t.stopPropagation();const e=t.detail?.value;this._mode="entity",this._emit("string"==typeof e&&""!==e?e:void 0)}render(){const t=t=>ie(this.hass,t),e=this._currentMode;return I`<ha-selector
        .required=${!0}
        data-role="mode"
        .hass=${this.hass}
        .label=${this.label}
        .selector=${this._modeSelectorFor()}
        .value=${e}
        @value-changed=${this._modeChanged}
      ></ha-selector>
      ${"number"===e?I`<ha-selector
              .required=${!1}
              data-role="number"
              .hass=${this.hass}
              .label=${t("editor_limit_number")}
              .selector=${Zo}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===e?I`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${t("editor_limit_entity")}
                .selector=${Yo}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:q}`}}Xo.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},Xo.styles=r`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",Xo);const Jo=["min","max","target"];function Ko(t,e,i){const n=e&&!i?t?.states[e]?.attributes?.unit_of_measurement:void 0;return"string"==typeof n&&n?n:void 0}class Qo extends lt{constructor(){super(),this._computeLabel=t=>this._t(`editor_${t.name}`),this._expanded=new Set}_t(t,e){return ie(this.hass,t,e)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(t){t.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t.entities??[]}}))}_set(t,e,i){this._emit(function(t,e,i,n){if("entity"===i&&(ne(n)||"string"!=typeof n))return t;const o=[...t.entities??[]],r=o[e];if(void 0===r)return t;const a="string"==typeof r?{entity:r}:{...r};ne(n)?delete a[i]:a[i]=n;const s=Object.keys(a);return o[e]=1===s.length&&"entity"===s[0]&&"string"==typeof a.entity?a.entity:a,{...t,entities:o}}(this._asConfig,t,e,i))}_move(t,e){const i=new Set;for(const n of this._expanded)i.add(n===t?e:n===e?t:n);this._expanded=i,this._emit(function(t,e,i){const n=[...t.entities??[]];if(e<0||e>=n.length||e===i)return t;const[o]=n.splice(e,1);return n.splice(Math.max(0,Math.min(i,n.length)),0,o),{...t,entities:n}}(this._asConfig,t,e))}_remove(t){const e=new Set;for(const i of this._expanded)i!==t&&e.add(i>t?i-1:i);this._expanded=e,this._emit(function(t,e){const i=[...t.entities??[]];return e<0||e>=i.length?t:(i.splice(e,1),{...t,entities:i})}(this._asConfig,t))}_toggle(t){const e=new Set(this._expanded);e.delete(t)||e.add(t),this._expanded=e}_add(t){t.stopPropagation();const e=t.detail?.value;"string"==typeof e&&""!==e&&(t.target.value="",this._emit(function(t,e){return{...t,entities:[...t.entities??[],e]}}(this._asConfig,e)))}_formChanged(t,e,i){i.stopPropagation();const n=this.entities?.[t];if(void 0===n)return;const o="string"==typeof n?{entity:n}:n,r=Pe(o,e,i.detail?.value??{});if(r===o)return;const a=[...this.entities??[]],s=Object.keys(r);a[t]=1===s.length&&"entity"===s[0]?r.entity:r,this._emit({type:"",entities:a})}_rowLabel(t){const e=this.hass?.states[t];return e?{text:e.attributes.friendly_name||t,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:t}),missing:!0}:{text:t,missing:!1}}_form(t,e,i,n,o){return I`<ha-form
      data-section=${t}
      .hass=${this.hass}
      .data=${Ue(i,o)}
      .schema=${n}
      .computeLabel=${this._computeLabel}
      @value-changed=${t=>this._formChanged(e,o,t)}
    ></ha-form>`}_renderOverrides(t,e){const i=t=>e=>{e.stopPropagation(),t(e.detail?.value)};return I`<div class="overrides">
      ${this._form("entity-attribute",e,t,function(t){let e=ke.get(t);return e||(e=[{name:"attribute",selector:{attribute:{entity_id:t}}}],ke.set(t,e)),e}(t.entity),ge)}
      ${this._form("entity-text",e,t,we,fe)}
      ${this.chart?this._form("entity-series",e,t,function(t){const e=ee(t);if(Ae?.language!==e){const i=e=>ie(t,e);Ae={language:e,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(t=>({value:t,label:i(`editor_curve_${t}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:ye},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return Ae.schema}(this.hass),function(t){let e=ve.get(t);return e||(e=[..._e,{name:"dots",path:["dots"],default:t}],ve.set(t,e)),e}(!0===this.dots)):q}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${t.icon??""}
        @value-changed=${i(t=>this._set(e,"icon",t))}
      ></ha-icon-picker>
      ${Jo.map(n=>I`<cd-limit-field
            data-limit=${n}
            .hass=${this.hass}
            .label=${this._t(`editor_${n}`)}
            .value=${t[n]}
            .defaultLabel=${this._t("editor_card_setting")}
            @value-changed=${i(t=>this._set(e,n,t))}
          ></cd-limit-field>`)}
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${t.severity}
        .unit=${t.unit??this.unit??Ko(this.hass,t.entity,t.attribute)}
        @value-changed=${i(t=>this._set(e,"severity",t))}
      ></cd-bands-editor>
      ${this._form("entity-actions",e,t,xe,be)}
    </div>`}_renderRow(t,e,i){const n=function(t){return"string"==typeof t?t:t.entity}(t),o="string"==typeof t?{entity:t}:t,r=this._rowLabel(n),a=this._expanded.has(e);return I`<div class="entity">
      <span class="label ${r.missing?"missing":""}">${r.text}</span>
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${Kt(n)}
          allow-custom-entity
          @value-changed=${t=>{t.stopPropagation(),this._set(e,"entity",t.detail?.value),this.requestUpdate()}}
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
          .label=${this._t(a?"editor_hide_options":"editor_show_options")}
          aria-expanded=${a?"true":"false"}
          @click=${()=>this._toggle(e)}
        ></ha-icon-button>
      </div>
      ${a?this._renderOverrides(o,e):q}
    </div>`}render(){const t=this.entities??[];return I`${t.map((e,i)=>this._renderRow(e,i,t.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}Qo.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chart:{attribute:!1},dots:{attribute:!1},_expanded:{state:!0}},Qo.styles=r`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",Qo);class tr extends lt{constructor(){super(...arguments),this._label=t=>ie(this.hass,t),this._computeLabel=t=>ie(this.hass,`editor_${t.name}`),this._computeRuleLabel=t=>ie(this.hass,`editor_rule_${t.name.slice(t.name.indexOf("_")+1)}`)}setConfig(t){this._config=t}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]}),i=e?.constructor;await(i?.getConfigElement?.())}catch{}}()}_commit(t){this._config=t,function(t,e){t.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:e}}))}(this,t)}_formChanged(t,e){if(e.stopPropagation(),!this._config)return;const i=e.detail?.value??{};this._commit(Pe(this._config,t,i))}_form(t,e,i){return I`<ha-form
      data-section=${t}
      .hass=${this.hass}
      .data=${Ue(this._config,i)}
      .schema=${e}
      .computeLabel=${this._computeLabel}
      @value-changed=${t=>this._formChanged(i,t)}
    ></ha-form>`}_panel(t,e){return I`<ha-expansion-panel .header=${this._label(`editor_section_${t}`)} outlined>
      <div class="panel section-${t}">${e}</div>
    </ha-expansion-panel>`}_subChanged(t,e){e.stopPropagation(),this._config&&this._commit(ae(this._config,t,e.detail?.value))}renderEntities(){return I`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .dots=${!0===this._config?.dots}
        .chart=${Lo(No[this._config?.style??"bar"]??No.bar)}
        @value-changed=${t=>this._subChanged(["entities"],t)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(t){const e=this._config?.[t],i={};if(!e||"object"!=typeof e)return i;for(const[n,o]of Object.entries(e))i[`${t}_${n}`]=Array.isArray(o)?o:[o];return i}_ruleChanged(t,e){if(e.stopPropagation(),!this._config)return;const i=e.detail?.value??{},n=this._ruleData(t);let o=this._config;for(const r of Ce[t]){const e=`${t}_${r}`,a=Array.isArray(i[e])?i[e]:[];Ne(n[e]??[],a)||(o=ae(o,[t,r],a.length?a:void 0))}o!==this._config&&this._commit(o)}_ruleForm(t){return I`<div class="rules-heading">${this._label(`editor_${t}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${t}_help`)}</p>
      <ha-form
        data-section=${t}
        .hass=${this.hass}
        .data=${this._ruleData(t)}
        .schema=${Oe(t,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${e=>this._ruleChanged(t,e)}
      ></ha-form>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([t,e])=>I`<cd-limit-field
          data-limit=${t}
          .hass=${this.hass}
          .label=${this._label(`editor_${t}`)}
          .value=${this._config?.[t]}
          .defaultLabel=${e}
          @value-changed=${e=>this._subChanged([t],e)}
        ></cd-limit-field>`)}renderColours(){return I`${this._toggles(ue)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${t=>this._subChanged(["severity"],t)}
      ></cd-bands-editor>`}_firstEntityUnit(){const t=this._config?.entities?.[0];return"string"==typeof t?Ko(this.hass,t):t?.unit??Ko(this.hass,t?.entity,t?.attribute)}_selectStyle(t){this._config&&this._commit(ae(this._config,["style"],"bar"===t?void 0:t))}renderStyle(){const t=this._config?.style??"bar";return I`${To.map(e=>{const i=Bt.filter(t=>No[t].group===e);return i.length?I`<div class="style-group">${this._label(`editor_group_${e}`)}</div>
        <div class="styles" data-group=${e}>
          ${i.map(e=>{const i=No[e],n=Lo(i)?I`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${i.thumbnail()}
                </svg>`:Be(e);return I`<button
              type="button"
              class="style"
              data-style=${e}
              aria-pressed=${t===e?"true":"false"}
              @click=${()=>this._selectStyle(e)}
            >
              ${n}<span>${this._label(`editor_style_${e}`)}</span>
            </button>`})}
        </div>`:q})}`}renderChart(){const t=No[this._config?.style??"bar"];return t&&Lo(t)&&t.editor&&this._config?this._panel("chart",t.editor({hass:this.hass,config:this._config,commit:t=>this._commit(t)})):q}renderDisplay(){return I`${this._toggles(he)}
    ${this._form("display",function(t){const e=ee(t);return Te?.language!==e&&(Te={language:e,schema:Me(t)}),Te.schema}(this.hass),pe)}`}_toggles(t){const e=Ue(this._config,t);return I`<div class="toggles">
      ${t.map(({name:i})=>{const n=this._label(`editor_${i}`),o=!0===e[i];return I`<div class="toggle">
          <span @click=${()=>this._toggle(t,i,!o)}>${n}</span
          ><ha-switch
            data-name=${i}
            aria-label=${n}
            .checked=${Kt(o)}
            @change=${e=>this._toggle(t,i,e.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(t,e,i){if(!this._config)return;const n=Ue(this._config,t);this._commit(Pe(this._config,t,{...n,[e]:i}))}renderActions(){return this._form("actions",xe,me)}render(){return this._config?I`<div class="title">${this._form("title",$e,de)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:q}}tr.properties={hass:{attribute:!1},_config:{state:!0}},tr.styles=r`
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
    .toggles {
      margin-bottom: 16px;
    }
    .toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      min-height: 48px;
    }
    .toggle span {
      flex: 1;
      cursor: pointer;
    }
    .rules-heading {
      margin: 16px 0 4px;
      font-weight: 500;
    }
    .rules-help {
      margin: 0 0 8px;
      color: var(--secondary-text-color);
      font-size: 0.875em;
    }
    .section-limits {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .style-group {
      margin: 12px 0 6px;
      font-size: 0.875em;
      font-weight: 500;
      color: var(--secondary-text-color);
    }
    .style-group:first-child {
      margin-top: 0;
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",tr);const er=r`
  :host {
    display: block;
    --cd-duration: 900ms;
    --cd-easing: cubic-bezier(0.22, 1, 0.36, 1);
    --cd-track: color-mix(in srgb, var(--primary-text-color, #212121) 8%, transparent);
  }
  /* Engines without color-mix() (older wall-tablet WebViews): a theme divider track and solid fills. */
  @supports not (color: color-mix(in srgb, red 50%, white)) {
    :host {
      --cd-track: var(--divider-color, rgba(127, 127, 127, 0.2));
    }
    .entity {
      --c-end: var(--c-start) !important;
    }
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
  /* color_icon: the icon takes the current band's colour (every style's icon has the .icon class). */
  .entity.icon-band .icon {
    color: var(--c-start);
  }
  /* Unavailable: every style draws an empty mark and greys the value text; the name keeps its colour. */
  .entity.unavailable .value {
    color: var(--secondary-text-color);
  }
  .content {
    padding: 8px 16px;
    box-sizing: border-box;
    /* Styles adapt to the card's width (narrow sections columns) with @container rules. */
    container-type: inline-size;
  }
  /* Whole-card styles (charts) draw into this; each chart style sizes its own contents. */
  .chart {
    position: relative;
    width: 100%;
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
`;console.info("%c CHARTDECK %c 1.2.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const ir={rows:16,tiles:8};function nr(t){const e=ir[t.layout];return Math.max(1,Math.floor((368+e)/((t.minColumnWidth??0)+e)))}class or extends lt{constructor(){super(...arguments),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(t){const e=Object.values(t?.states??{}).filter(t=>t.entity_id.startsWith("sensor.")&&""!==t.state.trim()&&Number.isFinite(Number(t.state))),i=t=>"battery"===t.attributes?.device_class;return e.sort((t,e)=>i(t)!==i(e)?i(t)?-1:1:t.entity_id<e.entity_id?-1:t.entity_id>e.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:e.slice(0,3).map(t=>t.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(t){const e=function(t){if(!t||"object"!=typeof t)throw new Error("Invalid configuration");const e=t.style??"bar";if(!Bt.includes(e))throw new Error(`Unknown style "${String(e)}". Use one of: ${Bt.join(", ")}`);const i=t.sort??"none";if(!Vt.includes(i))throw new Error(`Unknown sort "${String(i)}". Use one of: ${Vt.join(", ")}`);if(void 0!==t.entities&&!Array.isArray(t.entities))throw new Error('"entities" must be a list');const n=(t.entities??[]).map((e,i)=>Jt(e,t,i)),o={name:!0,value:!0,icon:!0,target:!0,legend:!1,...t.show},r=Zt(t.columns,"columns",1),a=Zt(t.limit,"limit",1),s=Pt(t.include,"include"),l=Pt(t.exclude,"exclude");s&&Jt("sensor.chartdeck_check",t,0);const c={style:e,entities:n,hideUnavailable:!0===t.hide_unavailable,cardOptions:t,show:o,sort:i,animate:!1!==t.animate,colorIcon:!0===t.color_icon,legendBands:Yt(t.severity)??It};return void 0!==t.title&&(c.title=t.title),void 0!==r&&(c.columns=r),void 0!==a&&(c.limit=a),s&&(c.include=s),l&&(c.exclude=l),c}(t),i=No[e.style];if(Lo(i)&&i.validate?.(t),this._watched=function(t){const e=new Set;for(const i of t.entities){e.add(i.entity);for(const t of[i.min,i.max,i.target,...i.severity.map(t=>t.from)])"string"==typeof t&&""!==t&&e.add(t)}for(const i of t.legendBands)"string"==typeof i.from&&e.add(i.from);return e}(e),Lo(i))for(const n of i.watch?.(t)??[])this._watched.add(n);this._config&&this._config.style!==e.style&&this._disconnectStyle(),this._config=e}get _styleName(){return this._config?.style??"bar"}get _style(){return No[this._styleName]}_legend(t){const e=this._config;if(!e?.show.legend||0===this._count())return[];const i=t?.decimals??1;return function(t,e,i){const n=i?` ${i}`:"",o=[];return t.forEach((i,r)=>{const a=t[r+1],s=Et(i.color);i.label?o.push({color:s,text:i.label}):Number.isFinite(i.from)?a?o.push({color:s,text:`${e(i.from)}–${e(a.from)}${n}`}):o.push({color:s,text:`${e(i.from)}${n}+`}):a&&o.push({color:s,text:`< ${e(a.from)}${n}`})}),o}(Ke(e.legendBands,this.hass),t=>Ie(t,i,this.hass),t?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const t=this._config;if(!t)return 0;const e=this._style,i=16+(t.title?73:0)+(this._legend().length>0?32:0);if(Lo(e))return i+e.height;const n=this._count(),o=void 0!==t.columns?Math.min(t.columns,nr(e)):"rows"===e.layout?1:Math.min(n,e.tilesPerRow??3,nr(e));return i+(0===n?0:Math.ceil(n/Math.max(1,o)))*e.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const t=this._count();if(Lo(this._style))return{columns:12,rows:"auto",min_columns:6,min_rows:2};const e="rows"===this._style.layout;return{columns:e||t<=1?6:12,rows:"auto",min_columns:e?6:3,min_rows:1}}shouldUpdate(t){if(0===t.size)return!0;if([...t.keys()].some(t=>"hass"!==t))return!0;if(!t.has("hass"))return!1;const e=t.get("hass"),i=this.hass;if(!e||!i)return!0;for(const n of this._watched)if(e.states[n]!==i.states[n])return!0;if(this._config?.include){const t=ti(this._config,i);if(t.length!==this._matched.length||t.some((t,e)=>t!==this._matched[e]))return!0;for(const n of t)if(e.states[n]!==i.states[n])return!0}return e.themes?.darkMode!==i.themes?.darkMode||e.themes?.theme!==i.themes?.theme||e.locale!==i.locale}willUpdate(){const t=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",t),(t||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const t=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const t=this._config?No[this._config.style]:void 0;t&&Lo(t)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const t=this._config?No[this._config.style]:void 0;t&&Lo(t)&&t.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle();for(const t of this._detachers.values())t();this._detachers.clear()}_syncActions(){const t=this.shadowRoot;if(!t)return;const e=new Set(t.querySelectorAll(".entity"));for(const[i,n]of this._detachers)e.has(i)||(n(),this._detachers.delete(i));for(const i of e)this._detachers.has(i)||this._detachers.set(i,Ct(i,()=>this._items[Number(i.dataset.index)].config))}_renderEntity(t,e,i,n){const o=this._config,r=(a=t.config,Mt(a.tap_action)||Mt(a.hold_action)||Mt(a.double_tap_action));var a;const s=function(t){const e=Et(t);return{start:e,end:`color-mix(in srgb, ${e} 80%, #fff)`}}(t.band.color),l=`--start:${t.span[0]};--end:${t.span[1]};--pos:${t.position};--target:${t.targetPosition??0};--c-start:${s.start};--c-end:${s.end}`;return I`<div
      class="entity ${r?"interactive":""} ${t.available?"":"unavailable"} ${o.colorIcon&&t.available?"icon-band":""}"
      data-index=${e}
      role="meter"
      aria-valuenow=${t.available?String(t.value):q}
      aria-valuemin=${t.min}
      aria-valuemax=${t.max}
      aria-label=${t.label}
      tabindex=${r?0:q}
      style=${l}
    >
      ${i.render(t,{show:o.show,hass:n})}
    </div>`}render(){const t=this._config;if(!t)return q;const e=this.hass,i=this._style;let n,o,r;const a=e?function(t,e){const i=ti(t,e).map((e,i)=>Jt(e,t.cardOptions,i)),n=[...t.entities,...i].map(t=>Qe(t,e));return t.hideUnavailable?n.filter(t=>t.available):n}(t,e):[];if(this._matched=e?ti(t,e):[],0!==t.entities.length||t.include)if(e)if(0===a.length)this._items=[],n=I`<div class="hint">${ie(e,t.include?"no_matches":"none_available")}</div>`;else{o=a[0];const s=new Map,l=new Set;a.forEach((t,e)=>{s.set(t,l.has(t.entityId)?`${t.entityId}#${e}`:t.entityId),l.add(t.entityId)}),this._items=function(t,e){if("none"===e)return[...t];const i="ascending"===e?1:-1;return t.map((t,e)=>({item:t,index:e})).sort((t,e)=>{if(t.item.available!==e.item.available)return t.item.available?-1:1;if(t.item.available){const n=(t.item.position-e.item.position)*i;if(0!==n)return n}return t.index-e.index}).map(t=>t.item)}(a,t.sort).slice(0,t.limit);const c=this._items.filter(t=>t.available).map(t=>t.display.length);if(r=c.length?Math.max(...c):void 0,Lo(i))n=I`<div class="chart">
          ${i.render({items:this._items,config:t,raw:t.cardOptions,hass:e,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const o="tiles"===i.layout,r=function(t,e){if(void 0===e)return"rows"===t.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const i=(e-1)*ir[t.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${t.minColumnWidth??0}px, 100%), calc((100% - ${i}px) / ${e} - 0.5px)), 1fr))`}(i,t.columns);n=I`<div
          class="entities layout-${i.layout} ${o&&void 0!==t.columns?"has-columns":""}"
          style=${r}
        >
          ${At(this._items,t=>s.get(t),(t,n)=>this._renderEntity(t,n,i,e))}
        </div>`}}else this._items=[],n=q;else this._items=[],n=I`<div class="hint">${ie(e,"no_entities")}</div>`;const s=this._legend(o);return I`<ha-card .header=${t.title}>
      <div
        class="content style-${this._styleName}"
        style=${void 0===r?q:`--cd-value-ch: ${r}`}
      >
        ${n}
      </div>
      ${s.length?I`<div class="legend">
              ${s.map(t=>I`<span class="legend-item"
                    ><span class="dot" style="background:${t.color}"></span>${t.text}</span
                  >`)}
            </div>`:q}
    </ha-card>`}}or.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},or.styles=[er,...Object.values(No).map(t=>t.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",or);const rr=window.customCards??=[];rr.some(t=>"chartdeck-card"===t.type)||rr.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{or as ChartdeckCard};
