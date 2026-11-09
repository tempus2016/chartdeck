/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new a(n,e,o)},i=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},b=(e,t)=>!s(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const r=n?.call(this);a?.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const e=this._$Eu(t,o);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(i(e))}else void 0!==e&&t.push(i(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((o,n)=>{if(t)o.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of n){const n=document.createElement("style"),a=e.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=t.cssText,o.appendChild(n)}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const a=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=n;const r=a.fromAttribute(t,e.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(e,t,o,n=!1,a){if(void 0!==e){const r=this.constructor;if(!1===n&&(a=this[e]),o??=r.getPropertyOptions(e),!((o.hasChanged??b)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:n,wrapped:a},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==a||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,o,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[v("elementProperties")]=new Map,_[v("finalized")]=new Map,g?.({ReactiveElement:_}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=e=>e,k=w.trustedTypes,M=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+S,E=`<${A}>`,C=document,j=()=>C.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,T="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,P=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,H=/"/g,I=/^(?:script|style|textarea|title)$/i,R=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),B=R(1),q=R(2),V=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),W=new WeakMap,Y=C.createTreeWalker(C,129);function G(e,t){if(!N(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let a=0,r=0;const i=e.length-1,s=this.parts,[l,c]=((e,t)=>{const o=e.length-1,n=[];let a,r=2===t?"<svg>":3===t?"<math>":"",i=O;for(let s=0;s<o;s++){const t=e[s];let o,l,c=-1,d=0;for(;d<t.length&&(i.lastIndex=d,l=i.exec(t),null!==l);)d=i.lastIndex,i===O?"!--"===l[1]?i=F:void 0!==l[1]?i=P:void 0!==l[2]?(I.test(l[2])&&(a=RegExp("</"+l[2],"g")),i=D):void 0!==l[3]&&(i=D):i===D?">"===l[0]?(i=a??O,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,o=l[1],i=void 0===l[3]?D:'"'===l[3]?H:U):i===H||i===U?i=D:i===F||i===P?i=O:(i=D,a=void 0);const u=i===D&&e[s+1].startsWith("/>")?" ":"";r+=i===O?t+E:c>=0?(n.push(o),t.slice(0,c)+z+t.slice(c)+S+u):t+S+(-2===c?s:u)}return[G(e,r+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]})(e,t);if(this.el=X.createElement(l,o),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Y.nextNode())&&s.length<i;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(z)){const t=c[r++],o=n.getAttribute(e).split(S),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:i[2],strings:o,ctor:"."===i[1]?te:"?"===i[1]?oe:"@"===i[1]?ne:ee}),n.removeAttribute(e)}else e.startsWith(S)&&(s.push({type:6,index:a}),n.removeAttribute(e));if(I.test(n.tagName)){const e=n.textContent.split(S),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],j()),Y.nextNode(),s.push({type:2,index:++a});n.append(e[t],j())}}}else if(8===n.nodeType)if(n.data===A)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(S,e+1));)s.push({type:7,index:a}),e+=S.length-1}a++}}static createElement(e,t){const o=C.createElement("template");return o.innerHTML=e,o}}function J(e,t,o=e,n){if(t===V)return t;let a=void 0!==n?o._$Co?.[n]:o._$Cl;const r=L(t)?void 0:t._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),void 0===r?a=void 0:(a=new r(e),a._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=a:o._$Cl=a),void 0!==a&&(t=J(e,a._$AS(e,t.values),a,n)),t}let K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??C).importNode(t,!0);Y.currentNode=n;let a=Y.nextNode(),r=0,i=0,s=o[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new Q(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new ae(a,this,e)),this._$AV.push(t),s=o[++i]}r!==s?.index&&(a=Y.nextNode(),r++)}return Y.currentNode=C,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),L(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=X.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new K(n,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new X(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const a of e)n===t.length?t.push(o=new Q(this.O(j()),this.O(j()),this,this.options)):o=t[n],o._$AI(a),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Z}_$AI(e,t=this,o,n){const a=this.strings;let r=!1;if(void 0===a)e=J(this,e,t,0),r=!L(e)||e!==this._$AH&&e!==V,r&&(this._$AH=e);else{const n=e;let i,s;for(e=a[0],i=0;i<a.length-1;i++)s=J(this,n[o+i],t,i),s===V&&(s=this._$AH[i]),r||=!L(s)||s!==this._$AH[i],s===Z?e=Z:e!==Z&&(e+=(s??"")+a[i+1]),this._$AH[i]=s}r&&!n&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class ne extends ee{constructor(e,t,o,n,a){super(e,t,o,n,a),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??Z)===V)return;const o=this._$AH,n=e===Z&&o!==Z||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==Z&&(o===Z||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const re={I:Q},ie=w.litHtmlPolyfillSupport;ie?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let le=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let a=n._$litPart$;if(void 0===a){const e=o?.renderBefore??null;n._$litPart$=a=new Q(t.insertBefore(j(),e),e,void 0,o??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};le._$litElement$=!0,le.finalized=!0,se.litElementHydrateSupport?.({LitElement:le});const ce=se.litElementPolyfillSupport;ce?.({LitElement:le}),(se.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=1,ue=2,he=3,pe=4,me=e=>(...t)=>({_$litDirective$:e,values:t});let fe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ge}=re,ve=e=>e,ye=()=>document.createComment(""),be=(e,t,o)=>{const n=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=n.insertBefore(ye(),a),r=n.insertBefore(ye(),a);o=new ge(t,r,e,e.options)}else{const t=o._$AB.nextSibling,r=o._$AM,i=r!==e;if(i){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==a||i){let e=o._$AA;for(;e!==t;){const t=ve(e).nextSibling;ve(n).insertBefore(e,a),e=t}}}return o},xe=(e,t,o=e)=>(e._$AI(t,o),e),_e={},we=(e,t=_e)=>e._$AH=t,$e=e=>{e._$AR(),e._$AA.remove()},ke=(e,t,o)=>{const n=new Map;for(let a=t;a<=o;a++)n.set(e[a],a);return n},Me=me(class extends fe{constructor(e){if(super(e),e.type!==ue)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const a=[],r=[];let i=0;for(const s of e)a[i]=n?n(s,i):i,r[i]=o(s,i),i++;return{values:r,keys:a}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){const a=(e=>e._$AH)(e),{values:r,keys:i}=this.dt(t,o,n);if(!Array.isArray(a))return this.ut=i,r;const s=this.ut??=[],l=[];let c,d,u=0,h=a.length-1,p=0,m=r.length-1;for(;u<=h&&p<=m;)if(null===a[u])u++;else if(null===a[h])h--;else if(s[u]===i[p])l[p]=xe(a[u],r[p]),u++,p++;else if(s[h]===i[m])l[m]=xe(a[h],r[m]),h--,m--;else if(s[u]===i[m])l[m]=xe(a[u],r[m]),be(e,l[m+1],a[u]),u++,m--;else if(s[h]===i[p])l[p]=xe(a[h],r[p]),be(e,a[u],a[h]),h--,p++;else if(void 0===c&&(c=ke(i,p,m),d=ke(s,u,h)),c.has(s[u]))if(c.has(s[h])){const t=d.get(i[p]),o=void 0!==t?a[t]:null;if(null===o){const t=be(e,a[u]);xe(t,r[p]),l[p]=t}else l[p]=xe(o,r[p]),be(e,a[u],o),a[t]=null;p++}else $e(a[h]),h--;else $e(a[u]),u++;for(;p<=m;){const t=be(e,l[m+1]);xe(t,r[p]),l[p++]=t}for(;u<=h;){const e=a[u++];null!==e&&$e(e)}return this.ut=i,we(e,l),V}}),ze=e=>!!e&&"none"!==e.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Se(e){return ze(e.tap_action)||ze(e.hold_action)||ze(e.double_tap_action)}function Ae(e,t){let o,n,a=0,r=0,i=!1,s=!1;const l=o=>{const n=t(),a="tap"===o?n.tap_action:"hold"===o?n.hold_action:n.double_tap_action;ze(a)&&e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:n,action:o}}))},c=()=>{void 0!==o&&clearTimeout(o),o=void 0},d=e=>{const n=e;n.button>0||(i=!0,s=!1,a=n.clientX,r=n.clientY,c(),ze(t().hold_action)&&(o=setTimeout(()=>{o=void 0,s=!0,l("hold")},500)))},u=e=>{if(!i)return;const t=e;Math.hypot(t.clientX-a,t.clientY-r)>10&&(c(),i=!1)},h=()=>{c(),i=!1},p=()=>{const e=i;c(),i=!1,e&&!s?ze(t().double_tap_action)?void 0!==n?(clearTimeout(n),n=void 0,l("double_tap")):n=setTimeout(()=>{n=void 0,l("tap")},250):l("tap"):s=!1},m=e=>{const t=e;t.repeat||"Enter"!==t.key&&" "!==t.key||(" "===t.key&&t.preventDefault(),l("tap"))},f=e=>{ze(t().hold_action)&&e.preventDefault()};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",u),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",h),e.addEventListener("pointerleave",h),e.addEventListener("keydown",m),e.addEventListener("contextmenu",f),()=>{c(),void 0!==n&&clearTimeout(n),n=void 0,e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",h),e.removeEventListener("pointerleave",h),e.removeEventListener("keydown",m),e.removeEventListener("contextmenu",f)}}const Ee={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function Ce(e){if(Object.prototype.hasOwnProperty.call(Ee,e)){const{variable:t,fallback:o}=Ee[e];return`var(${t}, ${o})`}return e}function je(e){const t=Ce(e);return{start:t,end:`color-mix(in srgb, ${t} 80%, #fff)`}}const Le=new Set(["amber"]);function Ne(e){if(Object.prototype.hasOwnProperty.call(Ee,e))return Le.has(e)?"dark":"light";const t=function(e){const t=e.trim().toLowerCase(),o=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(o){const e=o[1].length<=4?[...o[1]].map(e=>e+e).join(""):o[1],[t,n,a]=[0,2,4].map(t=>parseInt(e.slice(t,t+2),16));return[t,n,a,8===e.length?parseInt(e.slice(6,8),16)/255:1]}const n=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(t);if(n){const[e,t,o]=[n[1],n[2],n[3]].map(e=>Math.min(255,Number(e))),a=void 0===n[4]?1:Number(n[4])/(n[5]?100:1);return[e,t,o,Math.min(1,a)]}}(e);return t?t[3]<.5?"theme":function([e,t,o]){const n=e=>{const t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return.2126*n(e)+.7152*n(t)+.0722*n(o)}([t[0],t[1],t[2]])>.4?"dark":"light":"light"}function Te(e,t){let o=t[0];for(const n of t){if(!(n.from<=e))break;o=n}return o}function Oe(e,t,o){const n=o?` ${o}`:"",a=[];return e.forEach((o,r)=>{const i=e[r+1],s=Ce(o.color);o.label?a.push({color:s,text:o.label}):Number.isFinite(o.from)?i?a.push({color:s,text:`${t(o.from)}–${t(i.from)}${n}`}):a.push({color:s,text:`${t(o.from)}${n}+`}):i&&a.push({color:s,text:`< ${t(i.from)}${n}`})}),a}const Fe={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0};var Pe={entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_gauge_help:"Angles are in degrees, clockwise from the top: -90 is the left, 90 the right. Leave them empty for the style's usual shape.",editor_start_angle:"Start angle",editor_end_angle:"End angle",editor_center:"In the middle",editor_center_mode_value:"The value",editor_center_mode_band:"The colour band's label",editor_center_mode_name:"The name",editor_center_mode_text:"My own text",editor_center_mode_none:"Nothing",editor_center_text:"Text",editor_tick_labels:"Numbers on the scale",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_export:"Export menu",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours",annotation_at:"{label} at {time}",editor_orientation:"Direction",editor_orientation_horizontal:"Across",editor_orientation_vertical:"Upright",editor_value_axis:"Value labels",editor_value_grid:"Lines at each value label",editor_value_min:"Lowest value shown",editor_value_max:"Highest value shown",dist_median:"Median",dist_middle:"Middle half",dist_range:"Lowest – highest",dist_count:"Readings",editor_drill_down:"Tap a group to show what makes it up",drill_into:"{label}. Show what makes it up",drill_back:"Back to {name}",drill_top:"All",extremes_high:"High",extremes_low:"Low",extremes_average:"Avg",editor_extremes_max:"Mark the highest reading",editor_extremes_min:"Mark the lowest reading",editor_extremes_average:"Average",editor_extremes_average_none:"Don't show",editor_extremes_average_line:"Line across the chart",editor_extremes_average_figure:"Figure only",editor_extremes:"Mark highest, lowest and average",period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months",editor_color_by_shades:"Shades of one colour",editor_shade_color:"Shade colour (palette name or CSS colour)",editor_show_percent:"Show each share as a percentage",editor_center_total:"Total",editor_center_average:"Average",editor_center_none:"Nothing",parts_total:"Total",parts_average:"Average",parts_aria:"{style} of {names}",editor_style_scatter:"Scatter",editor_style_bubble:"Bubble",editor_against:"Along the bottom",editor_against_entity:"The first entity",editor_against_time:"Time",editor_dot_size:"Dot size (px)",editor_jitter:"Jitter (px)",editor_min_size:"Smallest bubble (px)",editor_max_size:"Largest bubble (px)",editor_dot_color:"Dot colour",editor_xy_x_axis:"Labels along the bottom",scatter_needs_two:"Add a second entity. The first goes along the bottom, the others up the side.",bubble_needs_three:"Add three entities: one along the bottom, one up the side, and one for the size of each bubble.",scatter_role_x:"Across",bubble_role_size:"Size",chart_total:"Total",editor_x_min:"Lowest value across",editor_x_max:"Highest value across",zoom_reset:"Reset zoom",zoom_window:"Shown: {from} to {to}",zoom_window_label:"Part of the chart shown",editor_zoom:"Zoom and pan (pinch, Ctrl + scroll or drag)",editor_overview:"Overview strip below the chart",editor_annotations:"Annotations",editor_annotation_type:"Kind",editor_annotation_type_line:"Line at a value",editor_annotation_type_band:"Shaded band of values",editor_annotation_type_time:"Marks at set times",editor_annotation_type_state:"Marks when an entity changes",editor_annotation_type_point:"Label on a reading",editor_annotation_add_line:"Line",editor_annotation_add_band:"Band",editor_annotation_add_time:"Times",editor_annotation_add_state:"State changes",editor_annotation_add_point:"Point label",editor_annotation_add:"Add an annotation:",editor_annotation_value:"Value (a number or an entity)",editor_annotation_from:"From (a number or an entity; blank for the bottom)",editor_annotation_to:"To (a number or an entity; blank for the top)",editor_annotation_times:"Times: 07:00 for every day, or 2026-10-28 07:00 (commas between)",editor_annotation_entity:"Entity",editor_annotation_series:"Series (blank for the first)",editor_annotation_state:"State (blank for every change)",editor_annotation_shade:"Shade while in this state",editor_annotation_at:"Reading",editor_annotation_at_max:"Highest",editor_annotation_at_min:"Lowest",editor_annotation_at_last:"Latest",editor_annotation_at_first:"First",editor_annotation_label:"Label",editor_annotation_color:"Colour",editor_annotation_dash:"Dashed",editor_annotation_remove:"Remove annotation",editor_zones:"Shade the severity bands behind the chart",editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)",editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_y_scale:"Value scale",editor_y_scale_linear:"Even steps",editor_y_scale_log:"Logarithmic (powers of ten)",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden",editor_labels_show:"Which readings",editor_labels_show_all:"All (as many as fit)",editor_labels_show_last:"The latest",editor_labels_show_minmax:"Highest and lowest",editor_labels_show_ends:"First and latest",editor_labels_position:"Label position",editor_labels_position_auto:"Above peaks, below dips",editor_labels_position_above:"Above",editor_labels_position_below:"Below",editor_labels_position_center:"On the point",editor_labels_overlap:"Let labels overlap",editor_sync:"Sync group (charts with the same name share the pointer and period steps)",editor_multiples:"A small chart for each entity",editor_multiples_scale:"Value scale",editor_multiples_scale_auto:"The same when the units match",editor_multiples_scale_shared:"The same for every chart",editor_multiples_scale_independent:"Each chart its own",editor_multiples_columns:"Columns (empty fits the card)",editor_set_point:"Show the set point",editor_shading:"Shade while heating or cooling",editor_shade_fan:"Shade while only the fan runs",editor_current_color:"Temperature colour",editor_set_point_color:"Set point colour",editor_heating_color:"Heating colour",editor_cooling_color:"Cooling colour",editor_days:"Days (more than 1 shows the average day)",editor_day_clock_center_total:"Time on",editor_day_clock_center_now:"The time now",editor_day_clock_center_none:"Nothing",editor_bucket:"One bar for every",editor_bucket_15:"15 minutes",editor_bucket_30:"30 minutes",editor_bucket_60:"Hour",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_ring_color:"Colour",editor_active:"Counts as on (empty: on, open, heating, home…)",editor_entity_options_none:"Add an entity above first.",editor_hierarchy_group_by:"Group by",editor_group_by_floor:"Floor",editor_group_by_area:"Area",editor_group_by_device:"Device",editor_group_by_label:"Label",editor_entity_groups:'Own group (wins over "Group by"; "Ground floor / Kitchen" for two levels)',editor_bar_labels:"Text on the bars",editor_bar_labels_state:"State",editor_bar_labels_duration:"How long",editor_bar_labels_both:"State and how long",editor_bar_labels_none:"None",editor_timeline_legend:"Legend of states",editor_timeline_legend_above:"Above the chart",editor_timeline_legend_hidden:"Hidden",editor_state_colors:"State colours",editor_state_colors_help:"A palette name (amber, green, blue, red, purple, grey, primary) or any CSS colour.",editor_state_colors_state:"State",editor_state_colors_color:"Colour",editor_state_colors_add:"Add a state colour",editor_state_colors_remove:"Remove",editor_timeline_group:"Group (rows with the same group share a heading)",editor_points_per_hour:"Points per hour (0 draws every reading)",editor_graph:"Graph",editor_graph_line:"Line",editor_graph_bar:"Bars",editor_graph_none:"None (value only)",editor_fill:"Fill under the line",editor_fill_solid:"Solid",editor_fill_fade:"Fade",editor_fill_none:"None",editor_points:"Dots on the line",editor_points_hover:"On hover",editor_points_always:"Always",editor_points_never:"Never",editor_trend_labels:"Highest and lowest labels",editor_labels_hover:"On hover",editor_labels_always:"Always",editor_labels_never:"Never",editor_height:"Graph height (per 500 px of width)",editor_bar_spacing:"Space between bars (px)",editor_color_transition:"Band colours",editor_color_transition_smooth:"Blend",editor_color_transition_hard:"Change at each band",editor_extrema:"Show lowest and highest",editor_average:"Show average",editor_trend_legend:"Legend (two or more entities)",editor_trend_y_min:"Lowest value (~ for soft)",editor_trend_y_max:"Highest value (~ for soft)",editor_min_range:"Smallest range shown",editor_y_min_secondary:"Right axis lowest (~ for soft)",editor_y_max_secondary:"Right axis highest (~ for soft)",editor_min_range_secondary:"Right axis smallest range",editor_value_factor:"Scale by 10 to the power of",editor_align_header:"Name and icon",editor_align_header_default:"Spread out",editor_align_header_left:"Left",editor_align_header_right:"Right",editor_align_header_center:"Centre",editor_align_icon:"Icon",editor_align_icon_right:"Right of the name",editor_align_icon_left:"Left of the name",editor_align_icon_state:"Beside the value",editor_align_state:"Value",editor_align_state_left:"Left",editor_align_state_right:"Right",editor_align_state_center:"Centre",editor_font_size:"Value size (%)",editor_font_size_header:"Name size (px)",editor_color_name:"Colour the name",editor_color_value:"Colour the value",editor_trend_color_icon:"Colour the icon",editor_trend_group:"No background (inside another card)",editor_icon_image:"Image instead of the icon (URL)",editor_trend_tooltip:"Show the value under the pointer",editor_y_axis_side:"Axis",editor_y_axis_side_primary:"Left",editor_y_axis_side_secondary:"Right (its own scale)",editor_entity_aggregate:"Combine with",editor_fixed_value:"Draw the current value as a flat line",editor_show_state:"Show its value beside the main one",editor_show_indicator:"Colour dot by the value",editor_show_graph:"On the graph",editor_show_line:"Line",editor_show_fill:"Fill",editor_show_points:"Dots",editor_show_legend_entity:"In the legend",editor_show_legend_state:"Value in the legend",editor_sectors:"Directions",editor_sectors_4:"4 (N, E, S, W)",editor_sectors_8:"8 (N, NE, E…)",editor_sectors_16:"16 (N, NNE, NE…)",editor_calm:"Calm below (blank: 0.5 m/s, or the same in km/h, mph or knots)",editor_wind_roles:"The first entity is the wind direction, in degrees or compass points such as SW. The second is the wind speed: without one, the petals only show how often the wind came from each way.",editor_wind_now:"Direction: {direction}. Speed: {speed}.",editor_wind_none:"none",editor_wind_statistics:"Long-term statistics give each hour's average direction. That is only right across north when the sensor records direction as an angle (state class measurement_angle); otherwise an hour swinging between NNW and NNE averages to south. History is exact.",editor_style_area:"Area",editor_stack:"Stack",editor_stack_none:"Don't stack",editor_stack_normal:"On top of each other",editor_stack_percent:"To 100 %",editor_negative_color:"Colour below zero",editor_style_beeswarm:"Beeswarm",editor_place_by:"Place each dot by",editor_place_by_value:"Its value",editor_place_by_time_of_day:"The time of day it happened",editor_size_by_value:"Bigger dots for bigger values",swarm_readings:"{n} readings",swarm_events:"{n} times on",swarm_shown:"Dots shown",swarm_none:"No readings",swarm_earliest_latest:"Earliest – latest",swarm_lowest_highest:"Lowest – highest",editor_fill_color:"Colour",editor_style_box:"Box plot",box_aria:"Box plot of {names}",box_highest:"Highest",box_upper_quartile:"Upper quartile",box_median:"Median",box_lower_quartile:"Lower quartile",box_lowest:"Lowest",box_mean:"Average",box_count:"Readings",box_outliers:"Outliers",editor_whiskers:"Whiskers reach",editor_whiskers_tukey:"1.5 × box height (outliers as dots)",editor_whiskers_range:"The lowest and highest",editor_readings:"Show each reading as a dot",editor_box_color:"Box colour",editor_style_bullet:"Bullet",editor_ranges:"Ranges behind the bar",editor_ranges_shades:"Shades of grey",editor_ranges_colours:"Colour band colours",compare_target:"target {target}",chart_aria:"{style} chart of {names}",editor_style_candlestick:"Candlestick",editor_candle_by:"One candle per",editor_under_aggregate:"Entities underneath: combine readings with",editor_up_color:"Colour when it rose",editor_down_color:"Colour when it fell",editor_underneath:"Draw the other entities underneath as",editor_underneath_columns:"Columns",editor_underneath_line:"A line",candle_open:"Open",candle_high:"High",candle_low:"Low",candle_close:"Close",candle_week_of:"Week of {date}",editor_style_climate:"Climate",climate_set_point:"Set point",climate_range:"{low} – {high}",climate_not_thermostat:"{name} is not a thermostat. Pick a climate entity.",climate_action_heating:"Heating",climate_action_preheating:"Preheating",climate_action_cooling:"Cooling",climate_action_defrosting:"Defrosting",climate_action_drying:"Drying",climate_action_fan:"Fan",climate_action_idle:"Idle",climate_action_off:"Off",editor_style_column:"Column",editor_group_by_auto:"Automatic",editor_range:"Lowest to highest in each column",editor_rounded:"Rounded ends",editor_column_labels:"Show values on the columns",editor_column_color:"Colour",editor_style_combined:"Combined",editor_series_type:"Draw as",editor_series_type_line:"Line",editor_series_type_column:"Columns",editor_series_type_area:"Area",editor_series_axis:"Value axis",editor_series_axis_auto:"Automatic (by unit)",editor_series_axis_left:"Left",editor_series_axis_right:"Right",editor_series_aggregate:"Combine with",editor_series_aggregate_auto:"As the card",editor_series_aggregate_mean:"Average",editor_series_aggregate_sum:"Sum",editor_series_aggregate_min:"Lowest",editor_series_aggregate_max:"Highest",editor_series_aggregate_first:"First",editor_series_aggregate_last:"Last",editor_series_aggregate_change:"Change (meters that count up)",editor_style_day_clock:"24-hour clock",day_clock_times_one:"once",day_clock_times:"{n} times",day_clock_a_day:"{text} a day",day_clock_busiest:"{total} · busiest {time}",day_clock_peak:"peak {value} at {time}",day_clock_state:"{name} {state}",day_clock_per_day:"{label} per day",day_clock_no_data:"Nothing recorded",day_clock_now:"Now",day_clock_on:"on",day_clock_average:"Average day · last {n} days",day_clock_on_days:"on {on} of {of} days",day_clock_so_far:"{duration} so far",day_clock_range:"{from} – {to}",day_clock_average_value:"{value} on average",editor_style_dumbbell:"Dumbbell",editor_ends:"Compare",editor_ends_range:"Lowest and highest in the period",editor_ends_then:"Start of the period and now",editor_ends_target:"Target and now",editor_show_now:"Mark the current value",dumbbell_low:"Low",dumbbell_high:"High",dumbbell_now:"Now",dumbbell_target:"Target",dumbbell_ago_hour_one:"An hour ago",dumbbell_ago_hour:"{n} hours ago",dumbbell_ago_day_one:"A day ago",dumbbell_ago_day:"{n} days ago",dumbbell_ago_week_one:"A week ago",dumbbell_ago_week:"{n} weeks ago",dumbbell_ago_month_one:"A month ago",dumbbell_ago_month:"{n} months ago",dumbbell_no_value:"No value",editor_style_funnel:"Funnel",editor_funnel_shape:"Shape",editor_funnel_shape_funnel:"Funnel (first stage at the top)",editor_funnel_shape_pyramid:"Pyramid (first stage at the bottom)",editor_funnel_percent_of:"Percentages",editor_funnel_percent_of_first:"Share of the first stage",editor_funnel_percent_of_previous:"Share of the stage before",editor_funnel_percent_of_none:"Don't show",editor_funnel_color_by:"Colour",editor_funnel_color_by_series:"One colour per entity",editor_funnel_color_by_bands:"By colour band",funnel_aria:"{style} of {names}",editor_style_grouped_bars:"Grouped bars",editor_mode:"Bars",editor_mode_grouped:"Side by side",editor_mode_stacked:"Stacked",editor_mode_percent:"Stacked to 100 %",editor_bars_color_by:"Colour",editor_bars_color_by_series:"One colour per series",editor_bars_color_by_bands:"By colour band",editor_bar_group:"Row",editor_bar_series:"Series",editor_bar_color:"Bar colour",grouped_bars_aria:"Bar chart of {names}",editor_style_heatmap:"Heatmap",heatmap_aria:"Heatmap of {name}",heatmap_hours:"Days averaged",heatmap_empty:"No readings",editor_grid:"Layout",editor_grid_hours:"Hour by weekday",editor_grid_calendar:"Calendar (a day per cell)",editor_color_by_scale:"Smooth scale",editor_cell_shape:"Cells",editor_cell_shape_square:"Square",editor_cell_shape_rounded:"Rounded",editor_cell_shape_hexagon:"Hexagon",editor_color_min:"Lowest colour at",editor_color_max:"Highest colour at",editor_legend:"Legend",editor_style_histogram:"Histogram",editor_count:"Count",editor_count_time:"Time spent in each range",editor_count_readings:"Readings in each range",editor_show_as:"Show as",editor_show_as_percent:"Share of the whole (%)",editor_show_as_total:"Hours or readings",editor_bins:"Number of bins (empty: automatic)",editor_bin_width:"Bin width (wins over the number)",editor_bars:"Two or more entities",editor_bars_side:"Bars side by side",editor_bars_overlap:"Bars over each other",editor_hist_x_axis:"Value labels along the bottom",histogram_readings:"{n} readings",histogram_reading:"1 reading",editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",export_menu:"Export",export_png:"Save as PNG",export_png_hint:"picture, 2×",export_svg:"Save as SVG",export_svg_hint:"vector",export_csv:"Copy CSV",export_csv_hint:"plotted values",export_yaml:"Copy YAML",export_yaml_hint:"this card's config",export_copied:"Copied",export_saved:"Saved",export_saved_file:"Saved as a file: the clipboard isn't available here",export_failed:"Couldn't export from this browser",chart_log_nothing:"Nothing above zero to draw on a log scale.",editor_style_lollipop:"Lollipop",editor_style_pictograph:"Pictograph",editor_unit_icon:"Icon (each entity can have its own)",editor_per_icon:"Each icon stands for (empty: automatic)",editor_group_size:"Icons per group (0: no groups)",editor_partial:"Part-fill an icon for fractions",editor_style_pie:"Pie / donut",editor_shape:"Shape",editor_shape_donut:"Donut",editor_shape_pie:"Pie",editor_center_label:"Line under the total",editor_gap:"Space between slices",editor_gradient:"Gradient fills",editor_style_polar_area:"Polar area",editor_polar_scale:"Scale",editor_polar_scale_shared:"One scale for all, from 0 to the largest value",editor_polar_scale_limits:"Each slice from its entity's minimum to maximum",editor_polar_color_by:"Colour",editor_polar_color_by_series:"One colour per entity",editor_polar_color_by_shades:"Shades of one colour, darker for more",editor_polar_color_by_bands:"By colour band",editor_polar_color:"Colour for shades",polar_area_aria:"Polar area chart of {names}",editor_style_radar:"Radar",editor_radar_scale:"Scale",editor_radar_scale_limits:"Each axis from its entity's minimum to maximum",editor_radar_scale_shared:"One scale for all, from 0 to the largest value",editor_radar_fill:"Fill the shapes",editor_radar_axis:"Axis name (entities with the same axis name line up across groups)",radar_aria:"Radar chart of {names}",radar_other:"Other",editor_style_range_area:"Range area",editor_mean:"Draw the average as a line",editor_range_color:"Colour",editor_style_rings:"Rings",editor_rings_start_angle:"Start angle (0 is the top)",editor_rounded_ends:"Rounded ends",editor_style_sankey:"Sankey (flow)",editor_link_color:"Colour flows by",editor_link_color_auto:"Where they come from, or where they go after a middle node",editor_link_color_source:"Where they come from",editor_link_color_target:"Where they go",editor_from:"Flows from",editor_to:"Flows to",editor_flow_color:"Flow colour",sankey_aria:"Flow chart: {flows}",sankey_flow:"{from} to {to} {value}",sankey_no_flows:'Give each entity a "Flows from" and a "Flows to" in its options.',sankey_nothing:"Nothing is flowing right now.",editor_style_slope:"Slope",editor_measure:"Compare",editor_measure_value:"The reading then and now",editor_measure_change:"How much it rose in each period (meters)",editor_color_by_direction:"Up or down",editor_color_by_group:"By group",editor_increase:"A rise is",editor_increase_bad:"Bad (red)",editor_increase_good:"Good (green)",editor_group:"Group",slope_now:"Now",slope_ago:"{n} {unit} ago",slope_ago_one:"A {unit} ago",slope_previous:"Previous {n} {unit}",slope_previous_one:"Previous {unit}",slope_last:"Last {n} {unit}",slope_last_one:"Last {unit}",slope_unit_hour:"hour",slope_unit_hour_other:"hours",slope_unit_day:"day",slope_unit_day_other:"days",slope_unit_week:"week",slope_unit_week_other:"weeks",slope_unit_month:"month",slope_unit_month_other:"months",slope_entity_aria:"{name}, {from} to {to}",slope_no_reading:"no reading",editor_style_sparkline:"Sparklines",editor_spark:"Sparkline",editor_spark_line:"Line",editor_spark_area:"Area",editor_spark_column:"Columns",editor_spark_bar:"Bar under the name and value",editor_spark_color:"Colour",spark_aria:"Trend of {name}",editor_style_streamgraph:"Streamgraph",editor_baseline:"Shape",editor_baseline_wiggle:"Streamgraph (flowing)",editor_baseline_centre:"Centred",editor_baseline_share:"Share of the total (100 %)",editor_baseline_zero:"Stacked from zero",editor_stream_order:"Order",editor_stream_order_inside_out:"Biggest in the middle",editor_stream_order_listed:"As listed, first at the bottom",editor_stream_labels:"Names on the streams",editor_stream_curve:"Edges",stream_total:"Total",editor_style_sunburst:"Sunburst",editor_style_icicle:"Icicle",editor_sunburst_shape:"Shape",editor_sunburst_shape_full:"Full circle",editor_sunburst_shape_half:"Half circle",editor_hierarchy_color_by:"Colour",editor_hierarchy_color_by_group:"One colour per group",editor_hierarchy_color_by_bands:"By colour band",hierarchy_total:"Total",hierarchy_other:"Other",hierarchy_empty:"Nothing to show: no entity has a value above zero.",hierarchy_no_reading:"No reading:",sunburst_aria:"Sunburst of {names}",icicle_aria:"Icicle chart of {names}",editor_style_timeline:"State timeline",timeline_no_states:"No states recorded in this period.",timeline_for:"for {duration}",timeline_now:"Now",timeline_measurement:"Readings, not states: a line chart suits this one",editor_style_treemap:"Treemap",editor_treemap_color_by:"Colour",editor_treemap_color_by_group:"One colour per group",editor_treemap_color_by_bands:"By colour band",treemap_aria:"Treemap of {names}",treemap_total:"{value} in all",treemap_empty:"Nothing to show: no entity has a value above zero.",treemap_no_reading:"No reading:",treemap_other:"Other",editor_style_trend:"Trend",trend_min:"Low",trend_avg:"Average",trend_max:"High",editor_style_violin:"Violin",editor_shape_violin:"Violin",editor_shape_raincloud:"Raincloud (half violin, box and readings)",editor_box:"Box with the median and middle half",editor_bandwidth:"Smoothing (in the entity’s unit, empty for automatic)",editor_split_by:"One shape per",editor_split_by_none:"Entity",editor_split_by_day:"Entity and day",editor_split_by_week:"Entity and week",editor_split_by_month:"Entity and month",violin_median:"median {value}",violin_none:"No readings",violin_raincloud:"Raincloud",editor_style_waffle:"Waffle",editor_waffles:"Waffles",editor_waffles_one:"One, split between the entities",editor_waffles_each:"One per entity, side by side",editor_headline:"Show the first share in large type",editor_style_waterfall:"Waterfall",editor_steps:"Each step is",editor_steps_change:"How much it changed in the period",editor_steps_current:"Its current value",editor_start_from_first:"Start from the first entity's reading at the start of the period",editor_total:"Show the total at the end",editor_waterfall_invert:"Counts down (a rise in these is a drop in the total)",waterfall_start:"Start",waterfall_end:"End",waterfall_total:"Total",waterfall_no_readings:"No readings",waterfall_aria:"Waterfall chart: {bars}",editor_style_wind_rose:"Wind rose",wind_prevailing:"Prevailing",wind_mean_speed:"Mean speed",wind_strongest:"Strongest",wind_calm:"Calm",wind_speed:"Speed",wind_speed_unit:"Speed ({unit})",wind_share:"Of the time",wind_aria:"Wind rose, prevailing {direction} {share}",wind_aria_calm:"Wind rose, prevailing {direction} {share}, calm {calm}",wind_aria_still:"Wind rose, calm {calm}"};const De="en",Ue={[De]:Pe},He={de:()=>import("./chartdeck-card.de-ELOEfTIb.js"),es:()=>import("./chartdeck-card.es-ImB1vE_C.js"),fr:()=>import("./chartdeck-card.fr-smD_mVEh.js"),nl:()=>import("./chartdeck-card.nl-yuGu99Oo.js"),pt:()=>import("./chartdeck-card.pt-CS0UvZAd.js")},Ie=new Map,Re="chartdeck-language-loaded";function Be(e){const t=[e];return e.includes("-")&&t.push(e.split("-")[0]),t}function qe(e){const t=Be(e).find(e=>void 0!==He[e]);if(!t||Ue[t])return Promise.resolve();let o=Ie.get(t);return o||(o=He[t]().then(e=>{return o=t,n=e.default,Ue[o]=n,void("undefined"!=typeof window&&window.dispatchEvent(new Event(Re)));var o,n}).catch(()=>{Ie.delete(t)}),Ie.set(t,o)),o}function Ve(e){const t=function(e){return e?.locale?.language??e?.language??De}(e),o=Be(t).find(e=>void 0!==Ue[e]);return o||(qe(t),De)}function Ze(e,t,o){const n=Ue[Ve(e)][t]??Ue[De][t]??t;return o?n.replace(/\{(\w+)\}/g,(e,t)=>t in o?String(o[t]):e):n}Object.keys(He);{const e=function(){if("undefined"!=typeof document){const e=document.querySelector("home-assistant")?.hass,t=e?.locale?.language??e?.language;if(t)return t}try{const e=JSON.parse(globalThis.localStorage?.getItem("selectedLanguage")??"null");if("string"==typeof e&&e)return e}catch{}}();e&&qe(e)}const We=new Set(["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]);function Ye(e){const t=[];for(const o of e.matchAll(/\s*(?:"([^"]*)"|'([^']*)'|([^,]+))\s*(?:,|$)/g)){const e=(o[1]??o[2]??o[3]??"").trim();e&&t.push(e)}return t}function Ge(e){const t=Ye(e);if(t.some(e=>We.has(e.toLowerCase())))return e;const o=function(e){const t=Ye(e),o=t.find(e=>We.has(e.toLowerCase()));if(o)return o.toLowerCase();const n=t.join(" ").toLowerCase();return/mono|code|courier|consol/.test(n)?"monospace":/serif|times|georgia|garamond|slab/.test(n)&&!/sans/.test(n)?"serif":"sans-serif"}(e);return t.length?`${e}, ${o}`:o}const Xe=(e,t,o,n)=>[e.replace(/^["']|["']$/g,"").toLowerCase(),{normal:"400",bold:"700"}[t||"normal"]??t,o||"normal",(n||"U+0-10FFFF").toUpperCase().replace(/\s+/g,"")].join("|");function Je(e){const t=/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)\s]*))\s*\)(?:\s*format\(\s*["']?([^"')]*)["']?\s*\))?/.exec(e),o=t&&(t[1]??t[2]??t[3]);return o?{url:o,format:t[4]||void 0}:void 0}function Ke(e){try{return e.cssRules}catch{return}}function Qe(e,t,o,n,a){const r=new Set(Ye(e).filter(e=>!We.has(e.toLowerCase())).map(e=>e.toLowerCase())),i=new Set;for(const c of t){const e=c.family.replace(/^["']|["']$/g,"").toLowerCase();"loaded"===c.status&&r.has(e)&&i.add(Xe(c.family,c.weight,c.style,c.unicodeRange))}if(!i.size)return[];const s=[],l=new Set;for(const{rule:c,base:d}of function(e,t){const o=[],n=(e,t,a)=>{if(e&&!(a>4))for(const r of Array.from(e))r.styleSheet?n(Ke(r.styleSheet),r.styleSheet.href??t,a+1):r.cssRules?n(r.cssRules,t,a+1):r.style&&r.cssText?.trimStart().toLowerCase().startsWith("@font-face")&&o.push({rule:r,base:t})};for(const a of Array.from(e))n(Ke(a),a.href??t,0);return o}(o,a)){const e=c.style,t=e.getPropertyValue("font-family").trim().replace(/^["']|["']$/g,""),o=e.getPropertyValue("font-weight").trim(),a=e.getPropertyValue("font-style").trim(),r=e.getPropertyValue("unicode-range").trim(),u=Xe(t,o,a,r);if(!i.has(u)||l.has(u))continue;const h=Je(e.getPropertyValue("src"));if(!h)continue;let p;try{p=new URL(h.url,d)}catch{continue}"data:"!==p.protocol&&p.origin!==n||(l.add(u),s.push({family:t,weight:o||"normal",style:a||"normal",unicodeRange:r,url:p.href,format:h.format}))}return s}const et={woff2:"font/woff2",woff:"font/woff",truetype:"font/ttf",ttf:"font/ttf",opentype:"font/otf",otf:"font/otf"};async function tt(e,t){let o=e.url;if(!o.startsWith("data:")){const n=await fetch(e.url,{credentials:"same-origin"});if(!n.ok)return"";const a=new Uint8Array(await n.arrayBuffer());if(a.length>t.left)return"";t.left-=a.length;const r=/\.(\w+)(?:[?#]|$)/.exec(new URL(e.url).pathname)?.[1]?.toLowerCase()??"";o=`data:${et[e.format?.toLowerCase()??""]??et[r]??"font/woff2"};base64,${function(e){let t="";for(let o=0;o<e.length;o+=32768)t+=String.fromCharCode(...e.subarray(o,o+32768));return btoa(t)}(a)}`}const n=e.format?` format("${e.format}")`:"",a=e.unicodeRange?`;unicode-range:${e.unicodeRange}`:"";return`@font-face{font-family:"${e.family.replace(/["<>&]/g,"")}";font-weight:${e.weight};font-style:${e.style}${a};src:url("${o}")${n}}`}const ot=new WeakMap;function nt(e){const t=String(e);return/[",\r\n]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function at(e,t,o=Date.now()){const n=[["timestamp","entity","value","unit"]];if(e)for(const a of e)for(const e of a.points)null===e.v||e.carried||n.push([new Date(e.t).toISOString(),a.entity.entityId,e.v,a.entity.unit]);else{const e=new Date(o).toISOString();for(const o of t)null!==o.value&&n.push([e,o.entityId,o.value,o.unit])}return function(e){return e.map(e=>e.map(nt).join(",")).join("\r\n")+"\r\n"}(n)}const rt=/^[A-Za-z_][A-Za-z0-9_.\-/ ]*$/,it=/^(true|false|yes|no|on|off|null|~|y|n)$/i;function st(e){if(null==e)return"null";if("number"==typeof e)return Number.isFinite(e)?String(e):"null";if("boolean"==typeof e)return String(e);const t=String(e);return""===t||!rt.test(t)||it.test(t)||t.endsWith(" ")?JSON.stringify(t):t}function lt(e){return!rt.test(e)||it.test(e)||e.includes(" ")?JSON.stringify(e):e}const ct=e=>"object"==typeof e&&null!==e&&!Array.isArray(e);function dt(e,t=""){if(Array.isArray(e))return 0===e.length?`${t}[]\n`:e.map(e=>{if(ct(e)&&Object.keys(e).length>0){const o=dt(e,`${t}  `);return`${t}- ${o.slice(t.length+2)}`}return Array.isArray(e)&&e.length>0?`${t}-\n${dt(e,`${t}  `)}`:`${t}- ${ct(e)?"{}":Array.isArray(e)?"[]":st(e)}\n`}).join("");if(ct(e)){const o=Object.entries(e).filter(([,e])=>void 0!==e);return 0===o.length?`${t}{}\n`:o.map(([e,o])=>{if(ct(o)&&Object.keys(o).length>0||Array.isArray(o)&&o.length>0)return`${t}${lt(e)}:\n${dt(o,`${t}  `)}`;const n=ct(o)?"{}":Array.isArray(o)?"[]":st(o);return`${t}${lt(e)}: ${n}\n`}).join("")}return`${t}${st(e)}\n`}function ut(e,t,o=Date.now()){return`${(e??"").normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,60)||"chartdeck"}-${new Date(o).toISOString().slice(0,10)}.${t}`}const ht=["fill","fill-opacity","stroke","stroke-width","stroke-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stop-color","stop-opacity","opacity","visibility","display","transform","transform-origin","transform-box","vector-effect","font-family","font-size","font-weight","text-anchor","dominant-baseline"],pt=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),mt=e=>Math.round(100*e)/100;function ft(e){if(!e||"transparent"===e)return!1;const t=/^rgba?\(([^)]*)\)$/.exec(e.trim())?.[1].split(/[\s,/]+/).filter(Boolean);return!t||t.length<4||parseFloat(t[3])>0}function gt(e,t){const o=e.getBoundingClientRect(),n=t.title?44:0,a=Math.max(1,Math.ceil(o.width)),r=Math.max(1,Math.ceil(o.height+n)),i=[`<rect width="${a}" height="${r}" rx="12" fill="${pt(t.background)}"/>`];if(t.title){const o=Ge(getComputedStyle(e).fontFamily||"Roboto, Noto");i.push(`<text x="16" y="30" font-family="${pt(o)}" font-size="20" fill="${pt(t.color)}">${pt(t.title)}</text>`)}const s=e=>({x:e.left-o.left,y:e.top-o.top+n,w:e.width,h:e.height}),l=e=>{if(t.skip?.(e))return;const o=getComputedStyle(e);if("none"===o.display||"hidden"===o.visibility||0===Number(o.opacity))return;const n=s(e.getBoundingClientRect());if(e instanceof SVGSVGElement)return void(n.w>0&&n.h>0&&i.push(function(e,t,o,n,a){const r=e.cloneNode(!0),i=[e,...e.querySelectorAll("*")],s=[r,...r.querySelectorAll("*")];return i.forEach((e,t)=>{const o=getComputedStyle(e),n=ht.map(e=>[e,o.getPropertyValue(e)]).filter(([,e])=>""!==e),a=s[t];a.removeAttribute("class"),n.length&&a.setAttribute("style",n.map(([e,t])=>`${e}:${t}`).join(";"))}),r.setAttribute("x",String(mt(t))),r.setAttribute("y",String(mt(o))),r.setAttribute("width",String(mt(n))),r.setAttribute("height",String(mt(a))),r.removeAttribute("role"),(new XMLSerializer).serializeToString(r)}(e,n.x,n.y,n.w,n.h)));const a=Number(o.opacity),r=a<1?` opacity="${a}"`:"";if(n.w>0&&n.h>0&&ft(o.backgroundColor)){const e=Math.min(parseFloat(o.borderTopLeftRadius)||0,n.w/2,n.h/2);i.push(`<rect x="${mt(n.x)}" y="${mt(n.y)}" width="${mt(n.w)}" height="${mt(n.h)}" rx="${mt(e)}" fill="${pt(o.backgroundColor)}"${r}/>`)}const c=[["Top",n.x,n.y,n.x+n.w,n.y],["Bottom",n.x,n.y+n.h,n.x+n.w,n.y+n.h],["Left",n.x,n.y,n.x,n.y+n.h],["Right",n.x+n.w,n.y,n.x+n.w,n.y+n.h]];for(const[t,s,l,d,u]of c){const e=parseFloat(o.getPropertyValue(`border-${t.toLowerCase()}-width`))||0,n=o.getPropertyValue(`border-${t.toLowerCase()}-style`),a=o.getPropertyValue(`border-${t.toLowerCase()}-color`);if(e>0&&"none"!==n&&"hidden"!==n&&ft(a)){const t="dashed"===n?` stroke-dasharray="${3*e} ${2*e}"`:"dotted"===n?` stroke-dasharray="${e} ${e}"`:"";i.push(`<line x1="${mt(s)}" y1="${mt(l)}" x2="${mt(d)}" y2="${mt(u)}" stroke="${pt(a)}" stroke-width="${e}"${t}${r}/>`)}}for(const t of function(e){return[...e.childNodes].filter(e=>3===e.nodeType&&""!==(e.textContent??"").trim())}(e)){const n=document.createRange();n.selectNodeContents(t);const a=s("function"==typeof n.getBoundingClientRect?n.getBoundingClientRect():e.getBoundingClientRect()),l=parseFloat(o.fontSize)||14,c=o.textDecorationLine&&"none"!==o.textDecorationLine?` text-decoration="${pt(o.textDecorationLine)}"`:"";i.push(`<text x="${mt(a.x)}" y="${mt(a.y+(a.h+.7*l)/2)}" font-family="${pt(Ge(o.fontFamily))}" font-size="${l}" font-weight="${pt(o.fontWeight)}" fill="${pt(o.color)}"${c}${r}>${pt((t.textContent??"").replace(/\s+/g," ").trim())}</text>`)}for(const t of e.children)l(t)};for(const c of e.children)l(c);return{svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${r}" viewBox="0 0 ${a} ${r}">${i.join("")}</svg>`,width:a,height:r}}function vt(e,t){if("undefined"==typeof URL||"function"!=typeof URL.createObjectURL||"undefined"==typeof document)return!1;try{const o=URL.createObjectURL(e),n=document.createElement("a");return n.href=o,n.download=t,n.rel="noopener",n.style.display="none",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3),!0}catch{return!1}}const yt=["png","svg","csv","yaml"],bt=new WeakMap;function xt(e){let t=bt.get(e);return t||(t={open:!1},bt.set(e,t)),t}function _t(e,t){const o=xt(e.host);o.open!==t&&(o.open=t,o.outside&&(window.removeEventListener("pointerdown",o.outside,!0),o.outside=void 0),t&&(o.outside=t=>{t.composedPath().some(e=>e instanceof Element&&e.classList.contains("export"))||_t(e,!1)},window.addEventListener("pointerdown",o.outside,!0)),e.requestUpdate())}function wt(e,t,o){const n=xt(e.host);n.status=Ze(e.hass,t,o),void 0!==n.statusTimer&&clearTimeout(n.statusTimer),n.statusTimer=setTimeout(()=>{n.status=void 0,n.statusTimer=void 0,e.requestUpdate()},2500),e.requestUpdate()}async function $t(e,t,o,n){return await async function(e){try{const t=globalThis.navigator?.clipboard;return!(!t||"function"!=typeof t.writeText||(await t.writeText(e),0))}catch{return!1}}(t)?wt(e,"export_copied"):vt(new Blob([t],{type:o}),ut(e.raw.title,n))?wt(e,"export_saved_file"):void wt(e,"export_failed")}async function kt(e,t){try{if("csv"===t)return await $t(e,at(ot.get(e.host),e.items),"text/csv","csv");if("yaml"===t)return await $t(e,dt(e.raw),"text/yaml","yaml");const o=e.content();if(!o)return wt(e,"export_failed");const n=function(e){const t=getComputedStyle(e),o=e.shadowRoot?.querySelector("ha-card"),n=o?getComputedStyle(o).backgroundColor:"";return{background:ft(n)?n:t.getPropertyValue("--card-background-color").trim()||t.getPropertyValue("--ha-card-background").trim()||"#ffffff",color:t.color||t.getPropertyValue("--primary-text-color").trim()||"#212121"}}(e.host),a=gt(o,{title:e.raw.title,...n,skip:e=>e.classList.contains("export")}),r=await async function(e,t,o=document){try{const n=o.fonts;if(!n||"function"!=typeof fetch||"function"!=typeof btoa)return e;const a=o.location?.origin??"",r=Qe(t,n,o.styleSheets,a,o.baseURI);if(!r.length)return e;const i={left:2e6},s=(await Promise.all(r.map(e=>tt(e,i).catch(()=>"")))).filter(Boolean);if(!s.length)return e;const l=e.indexOf(">")+1;return`${e.slice(0,l)}<defs><style>${s.join("")}</style></defs>${e.slice(l)}`}catch{return e}}(a.svg,getComputedStyle(o).fontFamily);if("svg"===t){return wt(e,vt(new Blob([r],{type:"image/svg+xml"}),ut(e.raw.title,"svg"))?"export_saved":"export_failed")}const i=await async function(e,t,o,n=2){if("undefined"==typeof Image||"undefined"==typeof document)return null;const a=document.createElement("canvas");a.width=Math.round(t*n),a.height=Math.round(o*n);let r=null;try{r=a.getContext("2d")}catch{r=null}if(!r||"function"!=typeof a.toBlob)return null;const i=new Image;return i.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`,await("function"==typeof i.decode?i.decode():new Promise((e,t)=>{i.onload=()=>e(),i.onerror=()=>t(new Error("image"))})),r.scale(n,n),r.drawImage(i,0,0,t,o),new Promise(e=>{try{a.toBlob(t=>e(t),"image/png")}catch{e(null)}})}(r,a.width,a.height,2);wt(e,null!==i&&vt(i,ut(e.raw.title,"png"))?"export_saved":"export_failed")}catch{wt(e,"export_failed")}}function Mt(e){if(!0!==e.raw.export)return Z;const t=xt(e.host),o=t=>Ze(e.hass,t);return B`<div class="export ${e.raw.title?"titled":"inline"}" @keydown=${o=>{if("Escape"===o.key&&t.open)return o.stopPropagation(),_t(e,!1),void e.host.shadowRoot?.querySelector(".export-button")?.focus();if(!t.open||"ArrowDown"!==o.key&&"ArrowUp"!==o.key)return;o.preventDefault();const n=[...e.host.shadowRoot?.querySelectorAll(".export-item")??[]],a=n.indexOf(e.host.shadowRoot?.activeElement),r="ArrowDown"===o.key?(a+1)%n.length:(a-1+n.length)%n.length;n[r]?.focus()}}>
    ${t.status?B`<span class="export-status" role="status">${t.status}</span>`:Z}
    <button
      class="export-button"
      type="button"
      aria-label=${o("export_menu")}
      aria-haspopup="menu"
      aria-expanded=${t.open?"true":"false"}
      @click=${o=>{o.stopPropagation(),_t(e,!t.open)}}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}></path></svg>
    </button>
    ${t.open?B`<div class="export-menu" role="menu" aria-label=${o("export_menu")}>
            ${yt.map(t=>B`<button
                  class="export-item"
                  type="button"
                  role="menuitem"
                  data-action=${t}
                  @click=${(t=>o=>{o.stopPropagation(),_t(e,!1),kt(e,t)})(t)}
                >
                  <span>${o(`export_${t}`)}</span><span class="export-hint">${o(`export_${t}_hint`)}</span>
                </button>`)}
          </div>`:Z}
  </div>`}const zt=r`
  ha-card:has(> .export) {
    position: relative;
  }
  .export {
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  /* Titled: in the title row's right-hand end, clear of the chart. */
  .export.titled {
    position: absolute;
    top: 12px;
    right: 8px;
  }
  /* Untitled: a short row of its own, right-aligned; the chart starts just under it. */
  .export.inline {
    position: relative;
    justify-content: flex-end;
    padding: 4px 4px 0;
  }
  .export.inline + .content,
  .export.inline + .content:has(> .chart > .frame.compact) {
    padding-top: 0;
  }
  ha-card:has(.frame.compact) > .export.inline {
    padding: 2px 2px 0;
  }
  ha-card:has(.frame.compact) > .export .export-button {
    width: 28px;
    height: 28px;
  }
  .export-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 50%;
    color: var(--secondary-text-color);
    background: color-mix(in srgb, var(--card-background-color, #fff) 70%, transparent);
    cursor: pointer;
  }
  .export-button svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  .export-button:hover,
  .export-button[aria-expanded='true'] {
    background: color-mix(in srgb, var(--primary-text-color) 10%, var(--card-background-color, #fff));
  }
  .export-button:focus-visible,
  .export-item:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .export-menu {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    min-width: 200px;
    max-width: calc(100vw - 32px);
    padding: 4px;
    border-radius: 8px;
    background: var(--card-background-color, #fff);
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
  }
  .export-item {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    padding: 8px 10px;
    border: none;
    border-radius: 4px;
    font: inherit;
    font-size: 0.875em;
    text-align: start;
    color: var(--primary-text-color);
    background: none;
    cursor: pointer;
    white-space: nowrap;
  }
  .export-item:hover {
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
  .export-hint {
    font-size: 0.85em;
    color: var(--secondary-text-color);
  }
  .export-status {
    font-size: 0.75em;
    padding: 2px 8px;
    border-radius: 10px;
    color: var(--primary-text-color);
    background: color-mix(in srgb, var(--primary-text-color) 10%, var(--card-background-color, #fff));
    white-space: nowrap;
  }
`,St=["label","area","floor","device_class","domain","entity"];function At(e,t){if(null==e)return;if("object"!=typeof e||Array.isArray(e))throw new Error(`"${t}" must list what to match, such as "area" or "device_class"`);const o="include"===t?St.filter(e=>"entity"!==e):St,n={};for(const[a,r]of Object.entries(e)){if(!o.includes(a))throw new Error(`"${t}" can't match on "${a}". Use: ${o.join(", ")}`);const e=(Array.isArray(r)?r:[r]).filter(e=>null!=e&&""!==e);if(e.some(e=>"string"!=typeof e))throw new Error(`"${t}.${a}" must be text or a list of text`);e.length&&(n[a]=e)}return Object.keys(n).length?n:void 0}function Et(e){const t=e.state;return"unavailable"===t||"unknown"===t||""!==t.trim()&&Number.isFinite(Number(t))}function Ct(e,t){const o=e.entity_id,n=t.entities?.[o],a=n?.device_id?t.devices?.[n.device_id]:void 0,r=n?.area_id??a?.area_id??void 0,i=e.attributes?.device_class;return{label:[...n?.labels??[],...a?.labels??[]],area:r,floor:r?t.areas?.[r]?.floor_id??void 0:void 0,device_class:"string"==typeof i?i:void 0,domain:o.slice(0,o.indexOf(".")),entity:o}}function jt(e,t,o){const n=e[t],a=o[t];return Array.isArray(a)?a.some(e=>n.includes(e)):void 0!==a&&n.includes(a)}function Lt(e,t){return Object.keys(e).every(o=>jt(e,o,t))}function Nt(e,t){return!!e&&Object.keys(e).some(o=>jt(e,o,t))}const Tt=new WeakMap;const Ot=e=>(Math.abs(e)<.005?0:e).toFixed(2);function Ft(e,t,o,n){const a=n*Math.PI/180;return[e+o*Math.sin(a),t-o*Math.cos(a)]}function Pt(e,t,o,n,a){const r=String(Number(o.toFixed(2))),i=a-n,[s,l]=Ft(e,t,o,n);if(i>=359.99){const[a,i]=Ft(e,t,o,n+180);return`M${Ot(s)} ${Ot(l)} A${r} ${r} 0 1 1 ${Ot(a)} ${Ot(i)} A${r} ${r} 0 1 1 ${Ot(s)} ${Ot(l)}`}const[c,d]=Ft(e,t,o,a),u=i>180?1:0;return`M${Ot(s)} ${Ot(l)} A${r} ${r} 0 ${u} 1 ${Ot(c)} ${Ot(d)}`}const Dt=["value","band","name","text","none"],Ut={ring:[-180,180],arc:[-135,135],needle:[-90,90]};function Ht(e,t){if(null==e||""===e)return;const o="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof o||!Number.isFinite(o)||o<-360||o>360)throw new Error(`"${t}" must be a number of degrees from -360 to 360`);return o}function It(e,t){return[t?.startAngle??e[0],t?.endAngle??e[1]]}function Rt(e){return void 0!==e?.startAngle||void 0!==e?.endAngle}function Bt([e,t],o){return e+(t-e)*o}function qt(...e){return{x0:Math.min(...e.map(e=>e.x0)),y0:Math.min(...e.map(e=>e.y0)),x1:Math.max(...e.map(e=>e.x1)),y1:Math.max(...e.map(e=>e.y1))}}function Vt(e,t,o,n,a,r){const i=[n,a];for(let h=Math.ceil(n/90);90*h<=a;h++)i.push(90*h);const s=i.map(n=>Ft(e,t,o,n)),l=Math.min(...s.map(e=>e[0])),c=Math.min(...s.map(e=>e[1])),d=Math.max(...s.map(e=>e[0])),u=Math.max(...s.map(e=>e[1]));return{x0:l-r,y0:c-r,x1:d+r,y1:u+r}}function Zt(e,t=5){if(!Number.isFinite(e)||e<=0)return 1;const o=e/t,n=10**Math.floor(Math.log10(o)),a=o/n;return(a<=1?1:a<=2?2:a<=2.5?2.5:a<=5?5:10)*n}function Wt(e,t){const o=e=>{const t=String(Number(e.toPrecision(12)));return t.includes("e")?0:t.split(".")[1]?.length??0};return Math.min(3,Math.max(o(t),o(e)))}function Yt(e){const t=e*Math.PI/180,o=Math.sin(t),n=Math.cos(t);return{anchor:o>.3?"start":o<-.3?"end":"middle",dy:n>.3?0:n<-.3?.75:.35}}function Gt(e,t){switch(t?.center??"value"){case"band":return e.band.label?{kind:"text",text:e.band.label,band:!0}:{kind:"value"};case"name":return{kind:"text",text:e.name,band:!1};case"text":return t.centerText?{kind:"text",text:t.centerText,band:!1}:{kind:"none"};case"none":return{kind:"none"};default:return{kind:"value"}}}const Xt=["bar","thin","segmented","tank","ring","needle","arc","line","column","area","combined","pie","rings","pictograph","waffle","histogram","scatter","bubble","heatmap","box","funnel","radar","polar_area","treemap","sunburst","icicle","grouped_bars","bullet","lollipop","waterfall","slope","dumbbell","range_area","sparkline","streamgraph","candlestick","violin","beeswarm","sankey","timeline","climate","wind_rose","day_clock","trend"],Jt=[{from:-1/0,color:"primary"}],Kt=["none","ascending","descending"];function Qt(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"==typeof e&&""!==e.trim()){const t=Number(e);return Number.isFinite(t)?t:void 0}}function eo(e,t){if(null==e||""===e)return;const o=Qt(e);if(void 0!==o)return o;if("string"==typeof e)return e;throw new Error(`"${t}" must be a number or an entity id`)}function to(e,t,o,n=1/0){if(null==e||""===e)return;const a=Qt(e);if(void 0===a||!Number.isInteger(a)||a<o||a>n){throw new Error(`"${t}" must be a whole number ${n===1/0?`of at least ${o}`:`from ${o} to ${n}`}`)}return a}function oo(e){if(null==e)return;if(!Array.isArray(e))throw new Error('"severity" must be a list of bands');if(0===e.length)return;const t=e.map((e,t)=>{let o;try{o=eo(e?.from,"from")}catch{o=void 0}if(void 0===o)throw new Error(`Severity band ${t+1}: "from" must be a number or an entity id`);if("string"!=typeof e.color||!e.color)throw new Error(`Severity band ${t+1}: "color" is required`);return{...e,from:o}});return t.every(e=>"number"==typeof e.from)?t.sort((e,t)=>e.from-t.from):t}function no(e,t,o){if(null==e)return{action:t};if("object"!=typeof e||"string"!=typeof e.action)throw new Error(`"${o}" must have an "action"`);return e}function ao(e,t){return void 0!==e?e:t}function ro(e,t,o){const n="string"==typeof e?{entity:e}:e;if(!n||"object"!=typeof n||"string"!=typeof n.entity||!n.entity)throw new Error(`Entity ${o+1} needs an "entity" id`);if(void 0!==n.attribute&&null!==n.attribute&&"string"!=typeof n.attribute)throw new Error(`Entity ${o+1}: "attribute" must be an attribute name`);const a=ao(eo(n.min,"min"),eo(t.min,"min"))??0,r=ao(eo(n.max,"max"),eo(t.max,"max"))??100;if("number"==typeof a&&"number"==typeof r&&a>=r)throw new Error(`"max" (${r}) must be greater than "min" (${a})`);const i={...n,entity:n.entity,min:a,max:r,severity:oo(n.severity)??oo(t.severity)??Jt,tap_action:no(ao(n.tap_action,t.tap_action),"more-info","tap_action"),hold_action:no(ao(n.hold_action,t.hold_action),"none","hold_action"),double_tap_action:no(ao(n.double_tap_action,t.double_tap_action),"none","double_tap_action")},s=ao(n.name,t.name),l=ao(n.icon,t.icon),c=ao(n.unit,t.unit),d=ao(eo(n.target,"target"),eo(t.target,"target")),u=ao(to(n.decimals,"decimals",0,20),to(t.decimals,"decimals",0,20));return void 0!==s&&(i.name=s),void 0!==l&&(i.icon=l),void 0!==c&&(i.unit=c),void 0!==d&&(i.target=d),void 0!==u&&(i.decimals=u),n.attribute||delete i.attribute,Ut[t.style??"bar"]&&(i.gauge=function(e,t=e.style??"bar"){const o=Ht(e.start_angle,"start_angle"),n=Ht(e.end_angle,"end_angle"),a=Ut[t];if(a&&(void 0!==o||void 0!==n)){const[e,t]=[o??a[0],n??a[1]];if(!(t>e))throw new Error(`"end_angle" (${t}) must be greater than "start_angle" (${e})`);if(t-e>360)throw new Error('"end_angle" can be at most 360 degrees after "start_angle"')}const r=e.center??"value";if(!Dt.includes(r))throw new Error(`"center" must be one of: ${Dt.join(", ")}`);if(void 0!==e.center_text&&null!==e.center_text&&"string"!=typeof e.center_text)throw new Error('"center_text" must be text');if(void 0!==e.tick_labels&&"boolean"!=typeof e.tick_labels)throw new Error('"tick_labels" must be true or false');const i={center:r,centerText:e.center_text??"",tickLabels:!0===e.tick_labels};return void 0!==o&&(i.startAngle=o),void 0!==n&&(i.endAngle=n),i}(t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const io=me(class extends fe{constructor(e){if(super(e),e.type!==he&&e.type!==de&&e.type!==pe)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===V||t===Z)return t;const o=e.element,n=e.name;if(e.type===he){if(t===o[n])return V}else if(e.type===pe){if(!!t===o.hasAttribute(n))return V}else if(e.type===de&&o.getAttribute(n)===t+"")return V;return we(e),t}});function so(e){return null==e||""===e}function lo(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function co(e,t,o){const[n,...a]=t,r=function(e,t){return Array.isArray(e)?[...e]:lo(e)?{...e}:"number"==typeof t?[]:{}}(e,n),i=r,s=a.length?co(i[n],a,o):o,l=a.length>0&&lo(s)&&0===Object.keys(s).length;return so(s)?Array.isArray(r)&&"number"==typeof n?r.splice(n,1):delete i[n]:l&&lo(r)?delete i[n]:i[n]=s,r}function uo(e,t,o){return 0===t.length||so(o)&&void 0===function(e,t){let o=e;for(const n of t){if("object"!=typeof o||null===o)return;o=o[n]}return o}(e,t)?e:co(e,t,o)}function ho(e){return"string"==typeof e?e:e.entity}function po(e,t,o,n){if("entity"===o&&(so(n)||"string"!=typeof n))return e;const a=[...e.entities??[]],r=a[t];if(void 0===r)return e;const i="string"==typeof r?{entity:r}:{...r};so(n)?delete i[o]:i[o]=n;const s=Object.keys(i);return a[t]=1===s.length&&"entity"===s[0]&&"string"==typeof i.entity?i.entity:i,{...e,entities:a}}const mo=2.5,fo=.5,go=12;function vo(e,t){const o=e;return{width:o.line_width??t.line_width??mo,dots:o.dots??!0===t.dots,onTop:!0===o.on_top}}function yo(e,t){return[...e.filter(e=>!t(e)),...e.filter(t)]}function bo(e){return e.map(([e,t])=>`M${Math.round(100*e)/100},${Math.round(100*t)/100}h0`).join("")}function xo(e){return Math.round(10*(e+3.5))/10}function _o(e,t){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<fo||e>go))throw new Error(`${t} must be a number from 0.5 to 12`)}function wo(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`${t} must be true or false`)}function $o(e){_o(e.line_width,'"line_width"'),wo(e.dots,'"dots"');for(const t of e.entities??[])"object"==typeof t&&(_o(t.line_width,`"line_width" of ${t.entity}`),wo(t.dots,`"dots" of ${t.entity}`),wo(t.on_top,`"on_top" of ${t.entity}`))}const ko=[{name:"title",path:["title"]}],Mo=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],zo=[{name:"color_icon",path:["color_icon"],default:!1}],So=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],Ao=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],Eo=[{name:"start_angle",path:["start_angle"]},{name:"end_angle",path:["end_angle"]},{name:"center",path:["center"],default:"value"},{name:"center_text",path:["center_text"]},{name:"tick_labels",path:["tick_labels"],default:!1}],Co=new Map;const jo=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],Lo=[{name:"attribute",path:["attribute"]}],No=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],To={number:{min:fo,max:go,step:.5,mode:"box",unit_of_measurement:"px"}},Oo=new Map;function Fo(e){let t=Oo.get(e);return t||(t=[...No,{name:"dots",path:["dots"],default:e}],Oo.set(e,t)),t}const Po=Ao.map(({name:e,path:t})=>({name:e,path:t})),Do=[{name:"title",selector:{text:{}}}],Uo=Ao.map(({name:e})=>({name:e,selector:{ui_action:{}}})),Ho=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],Io=new Map;let Ro;function Bo(e){const t=Ve(e);if(Ro?.language!==t){const o=t=>Ze(e,t);Ro={language:t,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(e=>({value:e,label:o(`editor_curve_${e}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:To},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return Ro.schema}function qo(e){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(t=>({value:t,label:Ze(e,`editor_sort_${t}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const Vo={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function Zo(e,t){const o=e=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:e}});switch(e){case"device_class":return o(t.deviceClasses);case"domain":return o(t.domains);case"entity":return{entity:{multiple:!0}};default:return{[e]:{multiple:!0}}}}const Wo=new Map;function Yo(e,t){const o=function(e){const t=new Set,o=new Set;for(const n of Object.values(e?.states??{})){const e=n.attributes?.device_class;"string"==typeof e&&e&&t.add(e),o.add(n.entity_id.slice(0,n.entity_id.indexOf(".")))}return{deviceClasses:[...t].sort(),domains:[...o].sort()}}(t),n=`${o.deviceClasses.join()}|${o.domains.join()}`,a=Wo.get(e);if(a?.key===n)return a.schema;const r=Vo[e].map(t=>({name:`${e}_${t}`,selector:Zo(t,o)}));return Wo.set(e,{key:n,schema:r}),r}let Go;function Xo(e,t){let o=e;for(const n of t){if("object"!=typeof o||null===o)return;o=o[n]}return o}function Jo(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;const o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&o.every(o=>Jo(e[o],t[o]))}function Ko(e,t){const o={};for(const n of t){const t=Xo(e,n.path)??n.default;void 0!==t&&(o[n.name]=t)}return o}function Qo(e,t,o){const n=Ko(e,t);let a=e;for(const r of t){const e=o[r.name];Jo(n[r.name],e)||(a=uo(a,r.path,void 0!==r.default&&Jo(e,r.default)?void 0:e))}return a}const en="var(--divider-color, rgba(127, 127, 127, 0.3))",tn="var(--primary-color, #03a9f4)",on="var(--secondary-text-color, #727272)";function nn(e,t,o,n){const a=(n-90)*Math.PI/180;return[(e+o*Math.cos(a)).toFixed(2),(t+o*Math.sin(a)).toFixed(2)]}function an(e,t,o,n){return nn(e,t,o,n).join(" ")}function rn(e,t,o,n,a){const r=a-n>180?1:0;return`M ${an(e,t,o,n)} A ${o} ${o} 0 ${r} 1 ${an(e,t,o,a)}`}function sn(e){return B`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(e){switch(e){case"bar":return q`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${en} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${tn} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${en} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${tn} />`;case"thin":return q`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${on} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${en} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${tn} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${on} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${en} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${tn} />`;case"segmented":return q`${[0,1].map(e=>Array.from({length:8},(t,o)=>q`<rect x=${6+6.75*o} y=${0===e?9:23} width="5" height="9" rx="1.5"
            fill=${o<(0===e?6:3)?tn:en} />`))}`;case"tank":return q`${[14,36].map((e,t)=>q`
          <rect x=${e} y="5" width="14" height="30" rx="4" fill=${en} />
          <rect x=${e} y=${0===t?13:23} width="14" height=${0===t?22:12} rx="4" fill=${tn} />`)}`;case"ring":return q`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${en} stroke-width="5" />
        <path d=${rn(32,20,14,0,250)} fill="none" stroke=${tn} stroke-width="5" stroke-linecap="round" />`;case"arc":return q`
        <path d=${rn(32,21,14,-135,135)} fill="none" stroke=${en} stroke-width="5" stroke-linecap="round" />
        <path d=${rn(32,21,14,-135,40)} fill="none" stroke=${tn} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[e,t]=nn(32,32,18,25);return q`
        <path d=${rn(32,32,22,-90,90)} fill="none" stroke=${en} stroke-width="5" />
        <path d=${rn(32,32,22,-90,25)} fill="none" stroke=${tn} stroke-width="5" />
        <line x1="32" y1="32" x2=${e} y2=${t} stroke=${on} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${on} />`}default:return q``}}(e)}
  </svg>`}function ln(e){let t=1/0,o=-1/0;for(const n of e)for(const e of n)for(const n of[e.v,e.min,e.max])"number"==typeof n&&(n<t&&(t=n),n>o&&(o=n));return t===1/0?void 0:[t,o]}function cn([e,t],o=.08){if(e===t)return[e-1,t+1];const n=(t-e)*o;return[e-n,t+n]}function dn(e,t){const[o,n]=e,[a,r]=t,i=n===o?0:(r-a)/(n-o);return e=>a+(e-o)*i}const un=["linear","log"],hn=["outside","inside"],pn=!0,mn=!0,fn="outside",gn=!0,vn=!1,yn="linear",bn=e=>"number"==typeof e&&Number.isFinite(e);function xn(e){const t=e;for(const o of["x_axis","y_axis"])if(void 0!==t[o]&&"boolean"!=typeof t[o])throw new Error(`"${o}" must be true or false`);if(void 0!==t.axis_labels&&!hn.includes(t.axis_labels))throw new Error(`"axis_labels" must be one of: ${hn.join(", ")}`);if(void 0!==t.gridlines){const e=t.gridlines;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const t of["horizontal","vertical"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"gridlines.${t}" must be true or false`)}for(const o of["y_min","y_max"])if(void 0!==t[o]&&!bn(t[o]))throw new Error(`"${o}" must be a number`);if(bn(t.y_min)&&bn(t.y_max)&&t.y_min>=t.y_max)throw new Error('"y_min" must be below "y_max"');if(void 0!==t.y_scale&&!un.includes(t.y_scale))throw new Error(`"y_scale" must be one of: ${un.join(", ")}`);if("log"===t.y_scale)for(const o of["y_min","y_max"])if(bn(t[o])&&t[o]<=0)throw new Error(`"${o}" must be above 0 on a log scale`)}function _n(e){const t=e,o=t.gridlines??{};return{x:t.x_axis??pn,y:t.y_axis??mn,labels:t.axis_labels??fn,horizontal:o.horizontal??gn,vertical:o.vertical??vn,min:bn(t.y_min)?t.y_min:void 0,max:bn(t.y_max)?t.y_max:void 0,scale:t.y_scale??yn}}function wn(e,t){if(!(e>0&&Number.isFinite(e)))return 1;const o=e/Math.max(1,t),n=10**Math.floor(Math.log10(o));for(const a of[1,2,5])if(a*n>=o*(1-1e-9))return a*n;return 10*n}function $n(e){return Math.max(0,-Math.floor(Math.log10(e)+1e-9))}const kn=e=>Number(e.toPrecision(12));function Mn(e,t,o){let[n,a]=cn(e??[0,1]);void 0!==t.min&&(n=t.min),void 0!==t.max&&(a=t.max),a<=n&&(void 0!==t.min?a=n+Math.max(1,.1*Math.abs(n)):n=a-Math.max(1,.1*Math.abs(a)));const r=wn(a-n,o);void 0===t.min&&(n=kn(Math.floor(n/r+1e-9)*r)),void 0===t.max&&(a=kn(Math.ceil(a/r-1e-9)*r));const i=[];for(let s=Math.ceil(n/r-1e-9);s*r<=a+1e-9*r;s++)i.push(kn(s*r));return{domain:[n,a],ticks:i,decimals:$n(r)}}const zn=6e4,Sn=36e5,An=864e5,En=[...[1,5,10,15,30].map(e=>({unit:"minute",n:e,ms:e*zn})),...[1,2,3,6,12].map(e=>({unit:"hour",n:e,ms:e*Sn})),...[1,2,7].map(e=>({unit:"day",n:e,ms:e*An})),...[1,2,3,6].map(e=>({unit:"month",n:e,ms:30.44*e*An})),...[1,2,5,10,20,50,100].map(e=>({unit:"year",n:e,ms:365.25*e*An}))];const Cn=e=>-new Date(e).getTimezoneOffset()*zn;function jn(e){if(!e)return Cn;let t;try{t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return Cn}return e=>{const o={};for(const n of t.formatToParts(e))o[n.type]=Number(n.value);return Date.UTC(o.year,o.month-1,o.day,o.hour%24,o.minute,o.second)-1e3*Math.floor(e/1e3)}}function Ln(e,t){return e-t(e-t(e))}function Nn(e,t,o,n){const a=[],r=e.end+t(e.end);for(let i=o,s=0;i<=r&&s<1e3;i=n(i),s++){const o=Ln(i,t);o>=e.start&&o<=e.end&&o!==a[a.length-1]&&a.push(o)}return a}function Tn(e,t,o=Cn){const{unit:n,n:a}=function(e,t){return En.find(o=>e/o.ms<=Math.max(1,t))??En[En.length-1]}(e.end-e.start,t),r=e.start+o(e.start);if("minute"===n||"hour"===n||"day"===n&&7!==a){const t=a*("minute"===n?zn:"hour"===n?Sn:An);return{unit:n,ticks:Nn(e,o,Math.ceil(r/t)*t,e=>e+t)}}if("day"===n){const t=Math.ceil(r/An);return{unit:n,ticks:Nn(e,o,(t+((4-t)%7+7)%7)*An,e=>e+7*An)}}const i=new Date(r);if("month"===n){let t=i.getUTCFullYear(),s=i.getUTCMonth();Date.UTC(t,s)<r&&(s+=1),s=Math.ceil(s/a)*a,t+=Math.floor(s/12),s%=12;const l=e=>{const t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+a)};return{unit:n,ticks:Nn(e,o,Date.UTC(t,s),l)}}let s=i.getUTCFullYear();return Date.UTC(s,0)<r&&(s+=1),s=Math.ceil(s/a)*a,{unit:n,ticks:Nn(e,o,Date.UTC(s,0),e=>Date.UTC(new Date(e).getUTCFullYear()+a,0))}}function On(e){return"server"===e?.locale?.time_zone?e.config?.time_zone:void 0}function Fn(e){const t=e?.locale?.time_format;return"12"===t||"24"!==t&&void 0}const Pn=new Map;function Dn(e,t,o){const n=`${e}|${t}|${JSON.stringify(o)}`;let a=Pn.get(n);if(!a){try{a=new Intl.DateTimeFormat(e,{...o,timeZone:t})}catch{a=new Intl.DateTimeFormat(void 0,o)}Pn.set(n,a)}return a}function Un(e,t,o=!1){return Dn(t?.locale?.language??"en",On(t),{hour:"numeric",minute:"2-digit",...o?{second:"2-digit"}:{},hour12:Fn(t)}).format(e)}function Hn(e,t){return Dn(t?.locale?.language??"en",On(t),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:Fn(t)}).format(e)}function In(e,t,o,n,a){const r=n?.locale?.language??"en",i=On(n),s=e+(a??jn(i))(e),l=new Date(s),c=s%An===0;switch(t){case"minute":case"hour":return c?Dn(r,i,{weekday:"short"}).format(e):Un(e,n);case"day":return o<=7*An?Dn(r,i,{weekday:"short"}).format(e):Dn(r,i,{day:"numeric",month:"short"}).format(e);case"month":return Dn(r,i,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(e);default:return Dn(r,i,{year:"numeric"}).format(e)}}function Rn(e,t){if(e.length<=t)return e;const o=[];let n=[];for(const r of e)null===r.v?(n.length&&o.push(n),o.push([r]),n=[]):n.push(r);n.length&&o.push(n);const a=e.length;return o.flatMap(e=>null===e[0].v?e:function(e,t){if(e.length<=t||t<3)return e;const o=[e[0]],n=(e.length-2)/(t-2);let a=0;for(let r=0;r<t-2;r++){const t=Math.floor(r*n)+1,i=Math.min(Math.floor((r+1)*n)+1,e.length-1),s=i,l=Math.min(Math.floor((r+2)*n)+1,e.length);let c=0,d=0;const u=Math.max(1,l-s);for(let o=s;o<l;o++)c+=e[o].t,d+=e[o].v;c/=u,d/=u;let h=t,p=-1;const m=e[a];for(let o=t;o<i;o++){const t=Math.abs((m.t-c)*(e[o].v-m.v)-(m.t-e[o].t)*(d-m.v));t>p&&(p=t,h=o)}o.push(e[h]),a=h}return o.push(e[e.length-1]),o}(e,Math.max(3,Math.round(e.length/a*t))))}const Bn=36e5,qn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Vn=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],Zn=new Map;function Wn(e){let t=Zn.get(e);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),Zn.set(e,t)),t}function Yn(e,t){const o={};for(const n of Wn(t).formatToParts(new Date(e)))o[n.type]=n.value;return{year:Number(o.year),month:Number(o.month),day:Number(o.day),hour:Number(o.hour)%24,minute:Number(o.minute),second:Number(o.second),weekday:qn.indexOf(o.weekday)+1}}function Gn(e,t){const o=Yn(e,t);return Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute,o.second)-1e3*Math.floor(e/1e3)}function Xn(e,t,o,n=1,a=0,r=0,i=0){const s=Date.UTC(t,o-1,n,a,r,i),l=new Date(s),c=Gn(s-864e5,e),d=Gn(s+864e5,e),u=[s-c,s-d].filter(t=>{const o=Yn(t,e);return o.year===l.getUTCFullYear()&&o.month===l.getUTCMonth()+1&&o.day===l.getUTCDate()&&o.hour===l.getUTCHours()&&o.minute===l.getUTCMinutes()&&o.second===l.getUTCSeconds()});return u.length?Math.min(...u):function(e,t,o,n){for(;t-e>1e3;){const a=1e3*Math.floor((e+t)/2e3);Gn(a,n)===o?e=a:t=a}return t}(s-d,s-c,c,e)}function Jn(e,t,o){const n=new Date(Date.UTC(e,t-1,o));return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate()}}function Kn(e,t,o){const n=Yn(t,o.timeZone);switch(e){case"hour":return t-t%1e3-1e3*(60*n.minute+n.second);case"day":return Xn(o.timeZone,n.year,n.month,n.day);case"week":{const e=(n.weekday-o.firstDay+7)%7,t=Jn(n.year,n.month,n.day-e);return Xn(o.timeZone,t.year,t.month,t.day)}case"month":return Xn(o.timeZone,n.year,n.month,1);case"year":return Xn(o.timeZone,n.year,1,1)}}function Qn(e,t,o,n){if("hour"===e)return t+o*Bn;const a=Yn(t,n.timeZone);let{year:r,month:i,day:s}=a;if("day"===e)({year:r,month:i,day:s}=Jn(r,i,s+o));else if("week"===e)({year:r,month:i,day:s}=Jn(r,i,s+7*o));else{const t=Jn(r,i+("year"===e?12*o:o),1),n=Jn(t.year,t.month+1,0).day;({year:r,month:i}=t),s=Math.min(s,n)}return Xn(n.timeZone,r,i,s,a.hour,a.minute,a.second)}function ea(e,t,o,n,a=1e4){const r=[Kn(e,t,n)];let i=1;for(;r[r.length-1]<o&&r.length<=a;){const t="hour"===e?r[0]+i*Bn:Qn(e,r[0],i,n);r.push(t>r[r.length-1]?t:r[r.length-1]+Bn),i++}return 1===r.length&&r.push(Qn(e,r[0],1,n)),r}function ta(e){try{const t=new Intl.Locale(e),o=t.getWeekInfo?.().firstDay??t.weekInfo?.firstDay;return"number"==typeof o&&o>=1&&o<=7?o:1}catch{return 1}}function oa(e){const t=e?.locale,o=e?.config?.time_zone,n="server"===t?.time_zone&&function(e){if("string"!=typeof e||""===e)return!1;try{return Wn(e),!0}catch{return!1}}(o)?o:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",a=Vn.indexOf(String(t?.first_weekday??"language"))+1;return{timeZone:n,firstDay:a>0?a:ta(t?.language??e?.language??"en")}}const na=["hour","day","week","month"],aa=["day","week","month","year"],ra=["now","end"],ia={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},sa={hour:36e5,day:864e5,week:6048e5};function la(e,t,o){const n="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof n||!Number.isInteger(n)||n<t)throw new Error(o);return n}function ca(e,t,o){if(!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`);return e}function da(e){if(null==e)return ia;if("object"!=typeof e||Array.isArray(e))throw new Error('"period" must have "last" and "unit"');const t=e,o={last:la(t.last??ia.last,1,'"period.last" must be a whole number of 1 or more'),unit:ca(t.unit??ia.unit,na,"period.unit"),offset:la(t.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==t.navigate&&!0===t.navigate,until:ca(t.until??"now",ra,"period.until")};if(void 0!==t.navigate&&"boolean"!=typeof t.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==t.calendar&&(o.calendar=ca(t.calendar,aa,"period.calendar")),o}function ua(e,t,o){if("month"===e.unit){if(o)return{start:Qn("month",t,-e.last,o),end:t};const n=new Date(t);return n.setMonth(n.getMonth()-e.last),{start:n.getTime(),end:t}}return{start:t-e.last*sa[e.unit],end:t}}function ha(e,t,o,n=0){const a=Math.max(0,e.offset+n);if(e.calendar){const n=e.calendar,r=Qn(n,Kn(n,t,o),-a,o),i=Qn(n,r,1,o);return{start:r,end:0===a&&"now"===e.until?t:i,live:0===a,back:a}}if("month"===e.unit){return{...ua(e,0===a?t:Qn("month",t,-a*e.last,o),o),live:0===a,back:a}}const r=e.last*sa[e.unit];return{start:t-(a+1)*r,end:t-a*r,live:0===a,back:a}}const pa=new WeakMap;function ma(e,t){const o=pa.get(e);return o&&o.key===JSON.stringify(t)?o.steps:0}function fa(e,t,o){pa.set(e,{key:JSON.stringify(t),steps:Math.max(-t.offset,o)})}const ga=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],va=new Map(ga.map((e,t)=>[e,22.5*t])),ya=[[/north/g,"n"],[/south/g,"s"],[/east/g,"e"],[/west/g,"w"]];function ba(e){const t=(e%360+360)%360;return 360===t?0:t}function xa(e){if("number"==typeof e)return Number.isFinite(e)?ba(e):null;if("string"!=typeof e)return null;const t=e.trim().toLowerCase();if(""===t)return null;const o=Number(t.replace(/\s*°$/,""));if(Number.isFinite(o))return ba(o);let n=t.replace(/[\s_-]+/g,"");for(const[a,r]of ya)n=n.replace(a,r);return va.get(n.toUpperCase())??null}function _a(e){if("number"==typeof e)return Number.isFinite(e)?e:null;if("on"===e)return 1;if("off"===e)return 0;if("string"!=typeof e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function wa(e){return e.bearing?xa:_a}function $a(e){return"string"==typeof e?e:"number"==typeof e||"boolean"==typeof e?String(e):void 0}function ka(e,t,o=!1,n=_a){return o?{t:e,v:null,s:$a(t)}:{t:e,v:n(t)}}function Ma(e,t,o=!1,n=_a){const a=[];for(const r of e??[]){const e=r.lu??r.lc;if(void 0===e)continue;const i=t?r.a?.[t]:r.s;a.push(ka(Math.round(1e3*e),i,o,n))}return a}const za=e=>"number"==typeof e&&Number.isFinite(e)?e:null;function Sa(e,t){return(e??[]).map(e=>{const o="number"==typeof e.start?e.start:Date.parse(e.start);let n;return n="change"===t?za(e.change):"state"===t?za(e.state)??za(e.mean):"min"===t||"max"===t?za(e[t])??za(e.mean)??za(e.state):za(e.mean)??za(e.state),{t:o,v:n,min:e.min??null,max:e.max??null}})}function Aa(e){const t=(e.end-e.start)/864e5;return t<=2?"5minute":t<=35?"hour":t<=400?"day":"month"}function Ea(e){return{period:Aa(e),types:["mean","min","max","state"],value:"mean"}}function Ca(e){const t=e.attribute?`${e.entity}|${e.attribute}`:e.entity;return e.text?`${t}|text`:e.bearing?`${t}#bearing`:t}const ja=["hour","day","week","month"],La=["mean","sum","min","max","first","last","change"];function Na(e){if(void 0!==e.aggregate&&!La.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${La.join(", ")}`);if(void 0!==e.group_by){if(!ja.includes(e.group_by))throw new Error(`"group_by" must be one of: ${ja.join(", ")}`);return{unit:e.group_by,aggregate:e.aggregate??"mean"}}}function Ta(e,t,o,n,a=!1){const r="change"===o?function(e){let t=null;return e.map(e=>{if(null===e.v)return null;if(null===t)return t=e.v,0;if(e.v>=t){const o=e.v-t;return t=e.v,o}return t-e.v>.1*Math.abs(t)?(t=e.v,Math.max(0,e.v)):0})}(e):[],i=[];let s=0;for(let l=0;l+1<t.length;l++){const c=t[l],d=t[l+1],u=Math.min(d,n);for(;s<e.length&&e[s].t<c;)s++;const h={t:c,end:d,v:null};if(i.push(h),u<=c)continue;const p=[],m=e[s-1];let f=s;const g=f<e.length&&e[f].t<u?e[f].t:u;for(m&&g>c&&p.push({v:m.v,dt:g-c,reading:!1,carried:!0,up:0});f<e.length&&e[f].t<u;f++){const t=f+1<e.length&&e[f+1].t<u?e[f+1].t:u,o=e[f];p.push({v:o.v,dt:t-o.t,reading:!0,carried:!0===o.carried,up:r[f]??null})}const v=p.filter(e=>null!==e.v);if(0===v.length)continue;const y=v.map(e=>e.v);switch(a&&(h.min=Math.min(...y),h.max=Math.max(...y)),o){case"mean":{const e=v.reduce((e,t)=>e+t.dt,0);h.v=e>0?v.reduce((e,t)=>e+t.v*t.dt,0)/e:y.reduce((e,t)=>e+t,0)/y.length;break}case"min":h.v=Math.min(...y);break;case"max":h.v=Math.max(...y);break;case"first":h.v=y[0];break;case"last":h.v=y[y.length-1];break;case"sum":{const e=v.filter(e=>e.reading&&!e.carried);h.v=e.length?e.reduce((e,t)=>e+t.v,0):null;break}case"change":h.v=v.reduce((e,t)=>e+(t.reading&&!t.carried?t.up??0:0),0)}}return i}function Oa(e,t,o,n=1/0,a=!1){const r=[];let i=0;for(let s=0;s+1<t.length;s++){const l=t[s],c=t[s+1];for(;i<e.length&&e[i].t<l;)i++;let d=i;const u=[],h=[],p=[];for(;d<e.length&&e[d].t<c;d++){const t=e[d];null===t.v||t.carried||(u.push(t.v),h.push(t.min??t.v),p.push(t.max??t.v))}let m=null;if(u.length&&l<n)if("mean"===o)m=u.reduce((e,t)=>e+t,0)/u.length;else if("sum"===o||"change"===o)m=u.reduce((e,t)=>e+t,0);else if("min"===o)m=Math.min(...u);else if("max"===o)m=Math.max(...u);else if("last"===o)m=u[u.length-1];else{const t=e.slice(0,i).reverse().find(e=>null!==e.v),o=e.slice(i,d).find(e=>e.carried&&null!==e.v);m=(t??o)?.v??u[0]}const f={t:l,end:c,v:m};a&&null!==m&&(f.min=Math.min(...h),f.max=Math.max(...p)),r.push(f)}return r}const Fa={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},Pa={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};const Da={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class Ua{constructor(e){this.onChange=e,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(e,t,o,n,a={}){const r=a.live??!0,i="statistics"===n?a.statistics??Ea(o):void 0,s=`${n}|${t.map(Ca).join(",")}|${i?JSON.stringify(i):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>Ia,c=void 0!==this.pausedAt&&"statistics"===n&&r;this.pausedAt=void 0;const d=Math.max(6e4,(o.end-o.start)/100),u=o.start<this.loadedFrom||(r?this.loadedTo!==1/0:o.end>this.loadedTo+d);(s!==this.shape||u||l&&r||c)&&(this.shape=s,this.load(e,t,o,r,i)),"ready"===this.status&&"history"===n&&this.loadedTo===1/0&&this.appendLive(e,t);const h=new Map;for(const[p,m]of this.data)h.set(p,Ha(m,o));return{status:this.status,data:h,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(e,t,o,n,a){const r=++this.generation;this.status="loading",this.loadedFrom=o.start,this.loadedTo=n?1/0:o.end,clearTimeout(this.timer);const i=a?async function(e,t,o,n=Ea(o)){const a=new Map;if(!e.callWS||0===t.length)return a;const r=[...new Set(t.map(e=>e.entity))],i=await e.callWS({type:"recorder/statistics_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),statistic_ids:r,period:n.period,types:n.types});for(const s of t)a.set(Ca(s),Sa(i?.[s.entity],n.value));return a}(e,t,o,a):async function(e,t,o){const n=new Map;if(!e.callWS||0===t.length)return n;const a={type:"history/history_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),significant_changes_only:!1},r=[...new Set(t.filter(e=>!e.attribute).map(e=>e.entity))],i=[...new Set(t.filter(e=>e.attribute).map(e=>e.entity))],s=[];return r.length&&s.push(e.callWS({...a,entity_ids:r,minimal_response:!0,no_attributes:!0}).then(e=>{for(const o of t.filter(e=>!e.attribute))n.set(Ca(o),Ma(e?.[o.entity],void 0,o.text,wa(o)))})),i.length&&s.push(e.callWS({...a,entity_ids:i,no_attributes:!1}).then(e=>{for(const o of t.filter(e=>e.attribute))n.set(Ca(o),Ma(e?.[o.entity],o.attribute,o.text,wa(o)))})),await Promise.all(s),n}(e,t,o);i.then(o=>{if(r===this.generation){this.data=o,this.status="ready",this.error=void 0,this.seen.clear();for(const o of t)this.seen.set(Ca(o),e.states[o.entity]);a&&n&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},Da[a.period])),this.onChange()}},e=>{r===this.generation&&(this.status="error",this.error=e instanceof Error?e.message:String(e?.message??e),this.onChange())})}appendLive(e,t){for(const o of t){const t=Ca(o),n=e.states[o.entity];if(!n||this.seen.get(t)===n)continue;this.seen.set(t,n);const a=Date.parse(n.last_updated??n.last_changed??"")||Date.now(),r=this.data.get(t)??[],i=r[r.length-1];i&&a<=i.t||(r.push(ka(a,o.attribute?n.attributes?.[o.attribute]:n.state,o.text,wa(o))),this.data.set(t,r))}}}function Ha(e,t){let o=0;for(;o<e.length&&e[o].t<t.start;)o++;const n=e.slice(o).filter(e=>e.t<=t.end),a=e[o-1];return a?[{...a,t:t.start,carried:!0},...n]:n}const Ia=6e4,Ra=new WeakMap;function Ba(e,t){let o=Ra.get(e);return o||(o=new Ua(t),Ra.set(e,o)),o}const qa=["smooth","straight","step"],Va=e=>(Math.round(100*e)/100).toString();function Za(e){return e.map(([e,t],o)=>`${o?"L":"M"}${Va(e)},${Va(t)}`).join("")}function Wa(e,t){return 0===e.length?"":1===e.length?`M${Va(e[0][0])},${Va(e[0][1])}h0`:"smooth"===t?function(e){const t=e.length;if(t<3)return Za(e);const o=[],n=[];for(let i=0;i<t-1;i++)o.push(e[i+1][0]-e[i][0]),n.push(0===o[i]?0:(e[i+1][1]-e[i][1])/o[i]);const a=[n[0]];for(let i=1;i<t-1;i++)a.push(n[i-1]*n[i]<=0?0:(n[i-1]+n[i])/2);a.push(n[t-2]);for(let i=0;i<t-1;i++){if(0===n[i]){a[i]=0,a[i+1]=0;continue}const e=a[i]/n[i],t=a[i+1]/n[i],o=e*e+t*t;if(o>9){const r=3/Math.sqrt(o);a[i]=r*e*n[i],a[i+1]=r*t*n[i]}}let r=`M${Va(e[0][0])},${Va(e[0][1])}`;for(let i=0;i<t-1;i++){const t=o[i]/3;r+=`C${Va(e[i][0]+t)},${Va(e[i][1]+a[i]*t)},${Va(e[i+1][0]-t)},${Va(e[i+1][1]-a[i+1]*t)},${Va(e[i+1][0])},${Va(e[i+1][1])}`}return r}(e):"step"===t?function(e){let t=`M${Va(e[0][0])},${Va(e[0][1])}`;for(let o=1;o<e.length;o++)t+=`H${Va(e[o][0])}V${Va(e[o][1])}`;return t}(e):Za(e)}function Ya(e){const t=[];let o=[];for(const n of e)null===n.v?(o.length&&t.push(o),o=[]):o.push(n);return o.length&&t.push(o),t}const Ga=1e3,Xa=200,Ja=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],Ka=["history","statistics"];function Qa(e){if(da(e.period),Na(e),void 0!==e.source&&!Ka.includes(e.source))throw new Error(`"source" must be one of: ${Ka.join(", ")}`);const t=[e.curve,...(e.entities??[]).map(e=>"object"==typeof e?e.curve:void 0)];for(const o of t)if(void 0!==o&&!qa.includes(o))throw new Error(`"curve" must be one of: ${qa.join(", ")}`)}function er(e,t=Date.now(),o={}){const n=da(e.raw.period),a=e.raw.source??"history",r=oa(e.hass),i=ha(n,t,r,n.navigate?ma(e.host,n):0),s=Na(e.raw),l={start:s?Kn(s.unit,i.start,r):i.start,end:i.end},c=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute,...o.text?{text:!0}:{}})),d=Ba(e.host,e.requestUpdate),u=s&&"statistics"===a?function(e,t,o,n=!1){const a=t.timeZone===o&&("week"!==e.unit||1===t.firstDay),r="hour"!==e.unit&&a?e.unit:"hour",{types:i,value:s}=Pa[e.aggregate];return{period:r,types:n?[...new Set([...i,"min","max"])]:i,value:s}}(s,r,e.hass.config?.time_zone,!0===o.range):void 0,h=u?{start:l.start-Fa[u.period],end:l.end}:l,p=d.get(e.hass,c,h,a,{live:i.live,statistics:u}),m=s?ea(s.unit,l.start,l.end,r):[],f=e.raw.curve??"smooth",g=Math.min(l.end,t),v=e.items.map((e,t)=>{const n=e.config;let r=p.data.get(Ca(c[t]))??[];const i=r[r.length-1];return s?r="statistics"===a?Oa(r,m,s.aggregate,g,!0===o.range):Ta(r,m,o.aggregate?.(e)??s.aggregate,g,!0===o.range):"history"===a&&i&&null!==i.v&&i.t<g&&(r=[...r,{t:g,v:i.v}]),{index:t,entity:e,points:r,color:Ce(n.color??Ja[t%Ja.length]),curve:n.curve??f,dash:!0===n.dash}});return function(e,t){ot.set(e,t)}(e.host,v),{status:p.status,error:p.error,range:l,period:n,source:a,series:v,live:i.live,back:i.back,zone:r,group:s}}const tr=(e,t,o)=>1===e?t:o;function or(e,t,o,n,a){const r=(e,t)=>Ze(a,e,t);if(e.calendar&&o<2)return r({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[e.calendar][o]);if(!e.calendar&&0===o){const t=e.last;return r({hour:tr(t,"period_last_hour","period_last_hours"),day:tr(t,"period_last_day","period_last_days"),week:tr(t,"period_last_week_rolling","period_last_weeks"),month:tr(t,"period_last_month_rolling","period_last_months")}[e.unit],{n:t})}const i={timeZone:n.timeZone},s=Yn(t.start,n.timeZone).year===Yn(Date.now(),n.timeZone).year;let l;"year"===e.calendar?i.year="numeric":"month"===e.calendar?Object.assign(i,{month:"long",year:"numeric"}):(Object.assign(i,{day:"numeric",month:"short"}),s||(i.year="numeric"),"day"===e.calendar&&(i.weekday="short"),e.calendar||"hour"!==e.unit&&"day"!==e.unit||Object.assign(i,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(a?.locale?.language??a?.language??"en",i)}catch{l=new Intl.DateTimeFormat("en",i)}const c=e.calendar?t.end-1:t.end;return"day"===e.calendar||"month"===e.calendar||"year"===e.calendar?l.format(t.start):l.formatRange(t.start,c)}function nr(e,t,o=Date.now()){const{period:n}=e;if(!n.navigate)return Z;const a=ma(t.host,n),r=e=>o=>{o.stopPropagation(),fa(t.host,n,e),t.requestUpdate()},i=or(n,e.range,e.back,e.zone,t.hass);let s="";if(0!==a){const a=ha(n,o,e.zone);s=or(n,a,a.back,e.zone,t.hass)}const l=e=>B`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${e}></path></svg>`;return B`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${Ze(t.hass,"period_previous")} @click=${r(a+1)}>
      ${l("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")}
    </button>
    <span class="period-label" aria-live="polite">${i}</span>
    <button
      class="period-step period-next"
      aria-label=${Ze(t.hass,"period_next")}
      ?disabled=${0===e.back}
      @click=${r(a-1)}
    >
      ${l("M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")}
    </button>
    ${0!==a?B`<button
            class="period-return"
            aria-label=${Ze(t.hass,"period_return",{label:s})}
            @click=${r(0)}
          >
            ${s}
          </button>`:Z}
  </div>`}const ar=r`
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
`;function rr(e){!function(e){Ra.get(e)?.pause()}(e)}function ir(e,t){const{show:o}=t.config;return o.name||o.value?B`<div class="series-header">
    ${e.series.map(e=>B`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
          <span class="swatch" style="background:${e.color}"></span>
          ${o.name?B`<span class="series-name">${e.entity.name}</span>`:Z}
          ${o.value?B`<span class="series-value">${e.entity.display}</span>`:Z}
        </div>`)}
  </div>`:Z}function sr(e,t){return"loading"===e.status?B`<div class="chart-message">${Ze(t.hass,"chart_loading")}</div>`:"error"===e.status?B`<div class="chart-message error">
      ${Ze(t.hass,"chart_error",{error:e.error??""})}
    </div>`:e.series.every(e=>e.points.every(e=>null===e.v))?B`<div class="chart-message">${Ze(t.hass,"chart_no_data")}</div>`:void 0}function lr(e,t,o=Z,n=Z){return B`<svg
    class="plot"
    viewBox="0 0 ${Ga} ${Xa}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${t}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${Ga} height=${204}></rect>
      </clipPath>
      ${o}
    </defs>
    ${n}
    <g clip-path="url(#cd-draw-in)">${e}</g>
  </svg>`}const cr=r`
  ${ar}
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
`;function dr(e,t,o){const{locale:n,grouping:a}=function(e){const t=e?.locale?.language??"en";switch(e?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:t,grouping:!0}}}(o),r=new Intl.NumberFormat(n,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:a});let i=r.format(0===e?0:e);return 0===Number(e.toFixed(t))&&(i=r.format(0)),i}function ur(e,t){return t?`${e} ${t}`:e}const hr=[[1,2,3,4,5,6,7,8,9],[1,2,5],[1]],pr=[2,3,5,10,20,50,100],mr=e=>Number(e.toPrecision(12)),fr=e=>mr(10**e),gr=e=>Math.floor(Math.log10(e)+1e-9);function vr(e){return e.map(e=>{const t=e=>"number"==typeof e&&e<=0;return t(e.v)||t(e.min)||t(e.max)?{...e,v:t(e.v)?null:e.v,...void 0!==e.min?{min:t(e.min)?null:e.min}:{},...void 0!==e.max?{max:t(e.max)?null:e.max}:{}}:e})}function yr(e,t,o,n=1){const a=[];for(let r=gr(e);r<=gr(t)+n;r+=n)for(const n of o){const o=mr(n*10**r);o>=e*(1-1e-9)&&o<=t*(1+1e-9)&&a.push(o)}return a}function br(e,t,o){const n=gr(e),a=yr(fr(n-2),fr(n+2),t),r=o?a.filter(t=>t<=e*(1+1e-9)):a.filter(t=>t>=e*(1-1e-9));return o?r[r.length-1]:r[0]}function xr(e,t){const o=Math.log10(e[0]),n=Math.log10(e[1]),[a,r]=t,i=n===o?0:(r-a)/(n-o);return e=>e>0?a+(Math.log10(e)-o)*i:NaN}const _r=new WeakMap;function wr(e){let t=_r.get(e.host);if(!t){const o={width:e.host.clientWidth||400};t=o,_r.set(e.host,o),"undefined"!=typeof ResizeObserver&&(o.observer=new ResizeObserver(t=>{const n=Math.round(t[t.length-1].contentRect.width);Math.round(n/70)!==Math.round(o.width/70)&&(o.width=n,e.requestUpdate())}),o.observer.observe(e.host))}return t.width}function $r(e){_r.get(e)?.observer?.disconnect(),_r.delete(e)}function kr(e){const t=_n(e.raw);return Math.max(0,wr(e)-32-(t.y&&"outside"===t.labels?40:0))}function Mr(e,t,o,n,a=4){const r=_n(e.raw),i="log"===r.scale&&"line"===e.raw.style,s=i?function(e,t,o){let[n,a]=e??[1,100];void 0!==t.min&&t.min>0&&(n=t.min),void 0!==t.max&&t.max>0&&(a=t.max),a>0||(a=n>0?10*n:100),n>0||(n=a/1e3);const r=void 0!==t.min&&t.min===n,i=void 0!==t.max&&t.max===a;a<=n&&(r?a=10*n:i?n=a/10:(n/=Math.sqrt(10),a*=Math.sqrt(10)));const s=Math.max(2,o+1),l=[...hr.map(e=>({mantissas:e,every:1})),...pr.map(e=>({mantissas:[1],every:e}))];let c=l[l.length-1],d=[n,a],u=[];for(const f of l){const e=r?n:br(n,f.mantissas,!0),t=i?a:br(a,f.mantissas,!1),o=yr(e,t,f.mantissas,f.every);if(c=f,d=[e,t],u=o,o.length<=s)break}const h=c.every>1?[1]:hr[0],p=9===c.mantissas.length?[]:yr(d[0],d[1],h).filter(e=>!u.includes(e)).slice(0,200),m=u.map(e=>Math.max(0,-gr(e)));return{domain:d,ticks:u,decimals:Math.max(0,...m),minor:p,tickDecimals:m}}(o,r,a):Mn(o,r,a),l=Math.max(2,Math.min(8,Math.floor((n??kr(e))/70))),{unit:c,ticks:d}=Tn(t,l,jn(On(e.hass)));return{options:r,value:s,times:d,unit:c,range:t,scales:{x:dn([t.start,t.end],[0,Ga]),y:(i?xr:dn)(s.domain,[Xa,0]),domain:s.domain}}}const zr=e=>Math.round(1e4*e)/100+"%";function Sr(e,t,o){const n=e.ticks[t];return e.tickDecimals?function(e,t,o){if(Math.abs(e)<1e4)return dr(e,t,o);const n=o?.locale?.language??o?.language??"en";try{return new Intl.NumberFormat(n,{notation:"compact",maximumFractionDigits:1}).format(e)}catch{return new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}).format(e)}}(n,e.tickDecimals[t],o.hass):dr(n,e.decimals,o.hass)}function Ar({axes:e,ctx:t,content:o,label:n,defs:a=Z,overlay:r=Z,hover:i,right:s,xLabel:l,yLabel:c,gestures:d,classes:u="",below:h=Z}){const{options:p}=e,m="outside"===p.labels,f=p.y&&e.value.ticks.length>0,g=p.x&&e.times.length>0,v=f?function(e,t,o){const{scales:n,value:a}=e;return a.ticks.map((e,r)=>{const i=n.y(e)/Xa;return B`<span class="axis-label ${i<.08?"top":i>.92?"bottom":""}" style="top:${zr(i)}"
      >${o?o(e):Sr(a,r,t)}</span
    >`})}(e,t,c):[],y=f?B`<div class="y-axis">${v}</div>`:Z,b=g?B`<div class="x-axis">${function(e,t,o){const{scales:n,range:a}=e,r=jn(On(t.hass));return e.times.map(i=>{const s=n.x(i)/Ga;return B`<span class="axis-label ${s<.05?"start":s>.95?"end":""}" style="left:${zr(s)}"
      >${o?o(i):e.label?e.label(i):In(i,e.unit,a.end-a.start,t.hass,r)}</span
    >`})}(e,t,l)}</div>`:Z,x=f?B`<span class="axis-sizer" aria-hidden="true"
        >${e.value.ticks.map((o,n)=>c?c(o):Sr(e.value,n,t)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:Z,_=s&&p.y&&s.value.ticks.length>0?s:void 0,w=_?B`<span class="axis-sizer" aria-hidden="true"
        >${_.value.ticks.map(e=>dr(e,_.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:Z,$=_?B`<div class="y-axis right">${m?w:Z}${function(e,t){return e.value.ticks.map(o=>{const n=e.y(o)/Xa;return B`<span class="axis-label ${n<.08?"top":n>.92?"bottom":""}" style="top:${zr(n)}"
      >${dr(o,e.value.decimals,t.hass)}</span
    >`})}(_,t)}</div>`:Z,k=`plot-wrap axes-${p.labels} ${f?"has-y":""} ${g?"has-x":""} ${_?"has-right":""} ${h===Z?"":"has-overview"}`;return B`<div class=${k}>
    ${m&&f?B`<div class="y-axis">${x}${v}</div>`:Z}
    <div
      class="plot-area ${i?"hoverable":""} ${u}"
      @pointerdown=${d?.down??i?.move}
      @pointermove=${d?.move??i?.move}
      @pointerup=${d?.up}
      @pointerleave=${d?.leave??i?.leave}
      @pointercancel=${d?.cancel??i?.leave}
      @wheel=${d?.wheel}
      @dblclick=${d?.dblclick}
    >
      ${lr(o,n,a,function(e){const{options:t,scales:o}=e;return q`<g class="grid">
    ${t.horizontal?(e.value.minor??[]).map(e=>q`<line class="minor" x1="0" x2=${Ga} y1=${o.y(e)} y2=${o.y(e)}></line>`):Z}
    ${t.horizontal?e.value.ticks.map(e=>q`<line x1="0" x2=${Ga} y1=${o.y(e)} y2=${o.y(e)}></line>`):Z}
    ${t.vertical?e.times.map(e=>q`<line x1=${o.x(e)} x2=${o.x(e)} y1="0" y2=${Xa}></line>`):Z}
  </g>`}(e))} ${m?Z:B`${y}${$}${b}`}
      ${r}
    </div>
    ${m?B`${$}${b}`:Z} ${h}
  </div>`}const Er=r`
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
  .plot .grid line.minor {
    opacity: 0.45;
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
  .plot-wrap.has-right {
    grid-template-columns: auto minmax(0, 1fr) auto;
  }
  .axes-outside .y-axis.right {
    grid-column: 3;
    padding-right: 0;
    padding-left: 6px;
  }
  .axes-outside .y-axis.right .axis-label {
    right: auto;
    left: 6px;
  }
  .axes-inside .y-axis.right .axis-label {
    left: auto;
    right: 2px;
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
`,Cr=["above","over","hidden"];function jr(e){if(void 0!==e.compact&&"boolean"!=typeof e.compact)throw new Error('"compact" must be true or false');if(void 0!==e.header&&!Cr.includes(e.header))throw new Error(`"header" must be one of: ${Cr.join(", ")}`)}function Lr(e){return{compact:!0===e.compact,header:e.header??"above"}}function Nr(e,t,o){return B`<div class="frame ${e.compact?"compact":""}">
    ${"above"===e.header?t:Z}${o}
  </div>`}function Tr(e){return e===Z?Z:B`<div class="header-over" @pointerdown=${e=>e.stopPropagation()}>${e}</div>`}const Or=r`
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
`,Fr=["none","normal","percent"];function Pr(e){const t=e.stack;if(void 0!==t&&!Fr.includes(t))throw new Error(`"stack" must be one of: ${Fr.join(", ")}`)}function Dr(e,t){let o=0,n=e.length;for(;o<n;){const a=o+n>>1;e[a].t<=t?o=a+1:n=a}return 0===o?null:e[o-1].v}function Ur(e,t){const o=e[0]?.length??0,n=e.map(()=>[]);for(let a=0;a<o;a++){let o=1;if("percent"===t){const t=e.reduce((e,t)=>e+Math.abs(t[a]??0),0);o=t>0?100/t:0}let r=0,i=0;e.forEach((e,t)=>{const s=e[a];if(null==s)return void n[t].push(null);const l=s*o;l>=0?(n[t].push([r,r+l]),r+=l):(n[t].push([i,i+l]),i+=l)})}return n}function Hr(e){const t=e[0]?.length??0,o=[];for(let n=0;n<t;n++){let t=null;for(const o of e)null!==o[n]&&void 0!==o[n]&&(t=(t??0)+o[n]);o.push(t)}return o}function Ir(e){let t=0,o=0;for(const n of e)for(const e of n)e&&(t=Math.min(t,e[0],e[1]),o=Math.max(o,e[0],e[1]));return[t,o]}function Rr(e,t){const o=e*t;return o+190<=t?"right":o>=190?"left":e>.5?"pin-left":"pin-right"}const Br=3e3;function qr(e,t){if(0===e.length)return-1;let o=0,n=e.length-1;for(;o<n;){const a=o+n>>1;e[a].t<t?o=a+1:n=a}return o>0&&t-e[o-1].t<=e[o].t-t?o-1:o}const Vr=new WeakMap;function Zr(e){return Vr.get(e)?.t}function Wr(e){const t=Vr.get(e);void 0!==t?.timer&&clearTimeout(t.timer),Vr.delete(e)}function Yr(e){return!1!==e.tooltip}function Gr(e){const t=e.tooltip;if(void 0!==t&&"boolean"!=typeof t)throw new Error('"tooltip" must be true or false')}function Xr(e,t,o){const n=function(e){let t=Vr.get(e);return t||(t={},Vr.set(e,t)),t}(e.host),a=t=>{t!==n.t&&(n.t=t,e.requestUpdate())},r=()=>{void 0!==n.timer&&clearTimeout(n.timer),n.timer=void 0};return{move(e){r();const n=e.currentTarget.getBoundingClientRect(),i=n.width>0?Math.min(1,Math.max(0,(e.clientX-n.left)/n.width)):0;a(function(e,t){let o;for(const n of e){const e=qr(n,t);if(e<0)continue;const a=n[e].t;(void 0===o||Math.abs(a-t)<Math.abs(o-t))&&(o=a)}return o}(o,t.start+i*(t.end-t.start)))},leave(e){r(),"touch"===e.pointerType||"pen"===e.pointerType?n.timer=setTimeout(()=>{n.timer=void 0,a(void 0)},Br):a(void 0)}}}const Jr=e=>Math.round(1e4*e)/100+"%";function Kr(e){const t=new Set(e.map(e=>e.entity.unit));return 1===t.size?[...t][0]:""}function Qr(e,t,o,n){return B`<div class="tooltip-row tooltip-total">
    <span class="swatch"></span>
    <span class="tooltip-name">${Ze(e.hass,"chart_total")}</span>
    <span class="tooltip-value">${null===t?"—":ur(dr(t,n,e.hass),o)}</span>
  </div>`}function ei(e,t,o,n,a,r={}){if(void 0===n)return Z;const i=o.x(n)/Ga;if(!(i>=0&&i<=1))return Z;const s=Rr(i,a),l=t.map(e=>{const t=qr(e.points,n);return{s:e,p:t<0?void 0:e.points[t]}});return B`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Jr(i)}"></div>
    ${l.map(({s:e,p:t})=>{if(!t||null===t.v)return Z;const n=r.dotY?r.dotY(e,t):o.y(t.v);if(null===n)return Z;const a=n/Xa;return a>=0&&a<=1?B`<span
        class="hover-dot"
        style="left:${Jr(o.x(t.t)/Ga)};top:${Jr(a)};background:${e.color}"
      ></span>`:Z})}
    <div class="tooltip ${s}" style=${s.startsWith("pin")?"":`left:${Jr(i)}`}>
      <div class="tooltip-time">${r.heading?r.heading(n):Hn(n,e.hass)}</div>
      ${l.map(({s:t,p:o})=>B`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${r.text?r.text(t,o):function(e,t,o){return e&&null!==e.v?ur(dr(e.v,t.entity.decimals,o.hass),t.entity.unit):"—"}(o,t,e)}</span>
          </div>`)}
      ${r.footer?r.footer(l):Z}
    </div>
  </div>`}const ti=r`
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
  .tooltip-total {
    margin-top: 2px;
    padding-top: 2px;
    border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
  }
  .tooltip-total .swatch {
    background: none;
  }
`,oi=["all","last","minmax","ends"],ni=["auto","above","below","center"];function ai(e){const t=e;if(!0===t.labels)return{show:t.labels_show??"all",position:t.labels_position??"auto",hideOverlap:!0!==t.labels_overlap}}function ri(e,t){const o=e.map((e,t)=>null===e.v?-1:t).filter(e=>e>=0);if(0===o.length)return[];const n=o[o.length-1],a=o[0];let r=a,i=a;for(const l of o)e[l].v>e[r].v&&(r=l),e[l].v<e[i].v&&(i=l);const s="last"===t?[n]:"ends"===t?[n,a]:"minmax"===t?[r,i]:[n,r,i,...o];return[...new Set(s)]}function ii(e,t){const o=e[t].v,n=[e[t-1]?.v??null,e[t+1]?.v??null].filter(e=>null!==e);if(0===n.length)return"above";const a=n.reduce((e,t)=>e+t,0)/n.length;return o<a?"below":"above"}function si(e,t){const o=e.x-e.width/2,n="above"===t?e.y-6-14:"below"===t?e.y+6:e.y-7;return[o,n,o+e.width,n+14]}const li=(e,t)=>e[0]<t[2]&&t[0]<e[2]&&e[1]<t[3]&&t[1]<e[3];function ci(e){return Math.ceil(6*e.length)+6}const di=e=>Math.round(1e4*e)/100+"%";function ui(e,t,o,n){const a=[],r=[];for(const c of e){const e=o.skip?c.points.map(e=>o.skip(e)?{...e,v:null}:e):c.points;!t.hideOverlap&&"all"===t.show&&e.filter(e=>null!==e.v).length>40||ri(e,t.show).forEach((i,s)=>{const l=e[i],[d,u]=o.at(l);if(!(d>=0&&d<=1&&u>=0&&u<=1))return;const h=dr(l.v,c.decimals,n),p="auto"===t.position?ii(e,i):t.position,m="above"===p?"below":"above",f={x:d*o.width,y:u*o.height,width:ci(h),sides:"center"===p?["center"]:[p,m],text:h,color:c.color,fx:d,fy:u};(s<3&&"all"===t.show?a:"all"===t.show?r:a).push(f)})}const i=[...a,...r].slice(0,600),s=function(e,t,o){const n=[];return e.map(e=>{for(const a of e.sides){const r="auto"===a?"above":a,i=si(e,r);if(!o)return{side:r,box:i};if(!(i[1]<-2||i[3]>t+2||n.some(e=>li(e,i))))return n.push(i),{side:r,box:i}}})}(i,o.height,t.hideOverlap),l=i.map((e,t)=>({b:e,p:s[t]})).filter(e=>void 0!==e.p);return 0===l.length?Z:(l.sort((e,t)=>e.b.fx-t.b.fx),B`<div class="point-labels">
    ${l.map(({b:e,p:t})=>B`<span
          class="point-label ${t.side} ${function(e,t,o){return e-t/2<0?"start":e+t/2>o?"end":""}(e.fx*o.width,e.width,o.width)}"
          style="left:${di(e.fx)};top:${di(e.fy)};--cd-label:${e.color}"
          >${e.text}</span
        >`)}
  </div>`)}const hi=r`
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
    box-shadow: inset 0 -1.5px 0 color-mix(in srgb, var(--cd-label, transparent) 70%, transparent);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
  .point-label.below {
    transform: translate(-50%, 6px);
  }
  .point-label.center {
    transform: translate(-50%, -50%);
  }
  .point-label.start {
    --cd-label-x: -4px;
  }
  .point-label.end {
    --cd-label-x: calc(-100% + 4px);
  }
  .point-label.start,
  .point-label.end {
    transform: translate(var(--cd-label-x), calc(-100% - 6px));
  }
  .point-label.start.below,
  .point-label.end.below {
    transform: translate(var(--cd-label-x), 6px);
  }
  .point-label.start.center,
  .point-label.end.center {
    transform: translate(var(--cd-label-x), -50%);
  }
`,pi=["none","line","figure"],mi=!1,fi=!1,gi="none";function vi(e){const t=e.extremes??{};return{min:t.min??mi,max:t.max??fi,average:t.average??gi}}function yi(e){return e.min||e.max||"none"!==e.average}function bi(e,t,o,n=[]){const a=e.filter(e=>e.dot).map(e=>({l:e.x*t-6,r:e.x*t+6,t:e.y*o-6,b:e.y*o+6})),r=[...n,...a];return e.map(e=>{const n=(e=>Math.ceil(6.2*e.length)+12)(e.text),a=e.x*t,i=e.y*o,s=a-n/2<0?"start":a+n/2>t?"end":"center",l="start"===s?0:"end"===s?t-n:a-n/2,c=(e,t=0)=>{const o=8+20*t,a="above"===e?i-o-18:i+o;return{l:l,r:l+n,t:a,b:a+18}},d=e=>e.t>=0&&e.b<=o,u="above"===e.prefer?"below":"above",h=[{side:e.prefer,tier:0},{side:u,tier:0},{side:e.prefer,tier:1},{side:u,tier:1}],p=h.find(e=>(e=>d(e)&&!r.some(t=>((e,t)=>e.l<t.r&&t.l<e.r&&e.t<t.b&&t.t<e.b)(t,e)))(c(e.side,e.tier)))??h.find(e=>0===e.tier&&d(c(e.side)))??h[0];r.push(c(p.side,p.tier));return{side:p.side,align:s,tier:p.tier}})}function xi(e,t,o,n){if("day"===n?.unit||"week"===n?.unit||"month"===n?.unit){const t="month"===n.unit?{month:"short",year:"numeric"}:{weekday:"short",day:"numeric",month:"short"};try{return new Intl.DateTimeFormat(o?.locale?.language??"en",{...t,timeZone:On(o)}).format(e)}catch{return new Intl.DateTimeFormat("en",t).format(e)}}return t.end-t.start>864e5?Hn(e,o):Un(e,o)}const _i=e=>Math.round(1e4*e)/100+"%";function wi(e){const{ctx:t,scales:o,width:n,height:a}=e,r=vi(t.raw);if(!yi(r))return{lines:Z,overlay:Z};const i=e.series.filter(e=>!1!==e.entity.config.extremes).map(t=>{const{min:o,max:n}=function(e){let t,o;for(const n of e)null===n.v||n.carried||((!t||n.v<t.v)&&(t=n),(!o||n.v>o.v)&&(o=n));return{min:t,max:o}}(t.points),a="none"===r.average?void 0:function(e,t,o=1/0){const n=e.filter(e=>null!==e.v&&!(e.carried&&!t));if(0!==n.length){if(t){let t=0,n=0;for(let a=0;a<e.length;a++){const r=e[a];if(null===r.v)continue;const i=a+1<e.length?e[a+1].t:r.t,s=Math.max(0,Math.min(i,o)-r.t);t+=r.v*s,n+=s}if(n>0)return t/n}return n.reduce((e,t)=>e+t.v,0)/n.length}}(t.points,e.timeWeighted,e.until);return{s:t,min:r.min?o:void 0,max:r.max?n:void 0,average:a}}),s=(e,o)=>ur(dr(e,o.entity.decimals,t.hass),o.entity.unit),l=e=>Ze(t.hass,e),c=e=>e>=0&&e<=1,d=[];for(const f of i){for(const n of["max","min"]){const a=f[n];if(!a)continue;const r=o.y(a.v)/Xa;if(!c(r))continue;const i=l("max"===n?"extremes_high":"extremes_low");d.push({s:f.s,kind:n,spec:{x:o.x(a.t)/Ga,y:r,text:`${i} ${s(a.v,f.s)} · ${xi(a.t,e.range,t.hass,e.group)}`,prefer:"max"===n?"above":"below",dot:!0}})}if("line"===r.average&&void 0!==f.average){const e=o.y(f.average)/Xa;c(e)&&d.push({s:f.s,kind:"average",spec:{x:1,y:e,text:`${l("extremes_average")} ${s(f.average,f.s)}`,prefer:"above"}})}}const u=bi(d.map(e=>e.spec),n,a,e.obstacles),h="line"===r.average?q`<g class="average-lines">${i.map(e=>{if(void 0===e.average)return Z;const t=o.y(e.average);return q`<line class="average-line" x1="0" x2=${Ga} y1=${t} y2=${t} stroke=${e.s.color}></line>`})}</g>`:Z,p="figure"===r.average&&i.some(e=>void 0!==e.average)?B`<div class="extreme-figures">
          ${i.map(t=>void 0===t.average?Z:B`<div class="extreme-figure">
                  ${e.series.length>1?B`<span class="swatch" style="background:${t.s.color}"></span>`:Z}
                  <span>${l("extremes_average")} ${s(t.average,t.s)}</span>
                </div>`)}
        </div>`:Z,m=B`<div class="extremes-layer">
    ${d.map((e,t)=>{const{side:o,align:n,tier:a}=u[t],{x:r,y:i,text:s}=e.spec,l="start"===n?"left:0":"end"===n?"right:0":`left:${_i(r)}`;return B`<span
        class="extreme-label ${e.kind} ${o} ${n} ${a?"far":""}"
        style="${l};top:${_i(i)};--series:${e.s.color}"
        >${s}</span
      >`})}
    ${d.map(e=>e.spec.dot?B`<span
            class="extreme-dot ${e.kind}"
            style="left:${_i(e.spec.x)};top:${_i(e.spec.y)};border-color:${e.s.color}"
          ></span>`:Z)}
    ${p}
  </div>`;return{lines:h,overlay:m}}const $i=r`
  .plot .average-line {
    stroke-width: 1.5;
    stroke-dasharray: 6 5;
    opacity: 0.75;
  }
  .extremes-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--cd-duration) var(--cd-easing);
  }
  :host([ready]) .extremes-layer {
    opacity: 1;
  }
  .extreme-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2.5px solid;
    background: var(--card-background-color, #fff);
    transform: translate(-50%, -50%);
  }
  .extreme-label {
    position: absolute;
    height: ${18}px;
    box-sizing: border-box;
    padding: 0 6px;
    border-radius: 9px;
    font-size: 11px;
    line-height: ${18}px;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
    background: color-mix(in srgb, var(--series) 16%, var(--card-background-color, #fff));
  }
  .extreme-label.above {
    --dy: calc(-100% - ${8}px);
  }
  .extreme-label.below {
    --dy: ${8}px;
  }
  .extreme-label.above.far {
    --dy: calc(-200% - ${10}px);
  }
  .extreme-label.below.far {
    --dy: calc(100% + ${10}px);
  }
  .extreme-label {
    transform: translateY(var(--dy));
  }
  .extreme-label.center {
    transform: translate(-50%, var(--dy));
  }
  .extreme-label.average {
    color: var(--secondary-text-color);
    background: color-mix(in srgb, var(--card-background-color, #fff) 80%, transparent);
  }
  .extreme-figures {
    position: absolute;
    top: 2px;
    right: 4px;
    padding: 2px 6px;
    border-radius: 6px;
    font-size: 12px;
    color: var(--secondary-text-color);
    background: color-mix(in srgb, var(--card-background-color, #fff) 75%, transparent);
    font-variant-numeric: tabular-nums;
  }
  .extreme-figure {
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }
  .extreme-figure .swatch {
    width: 8px;
    height: 8px;
  }
`,ki=[{name:"extremes_max",path:["extremes","max"],default:fi},{name:"extremes_min",path:["extremes","min"],default:mi},{name:"extremes_average",path:["extremes","average"],default:gi}];const Mi={name:"extremes",path:["extremes"],default:!0},zi=new Map;function Si(e,t){const o=Ve(t);let n=zi.get(o);return n&&n[0]===e[0]||(n=[...e,{name:"extremes",selector:{boolean:{}}}],zi.set(o,n)),n}const Ai=new WeakMap;function Ei(e){let t=Ai.get(e);return t||(t=[...e,Mi],Ai.set(e,t)),t}const Ci=["auto","shared","independent"];function ji(e,t,o,n,a){const r=Math.max(0,wr(e)-32),i=function(e,t,o){const n=e=>Math.max(1,Math.floor((t+12)/(e+12))),a=void 0===o?n(150):Math.min(o,n(110));return Math.max(1,Math.min(e,a))}(t.series.length,r,o.columns),s=function(e,t){return Math.max(0,(e-12*(t-1))/t)}(r,i),l=new Set(t.series.map(e=>e.entity.unit).filter(e=>""!==e)),c="shared"===o.scale||"auto"===o.scale&&l.size<=1?ln(t.series.map(e=>e.points)):void 0,{show:d}=e.config;return B`<div class="multiples" style=${`grid-template-columns:repeat(${i}, minmax(0, 1fr))`}>
    ${t.series.map(o=>{const r=Mr(e,t.range,c??ln([o.points]),s,2),i=d.name||d.value?B`<div class="entity panel-title" data-index=${o.index} tabindex="0" aria-label=${o.entity.label}>
              <span class="swatch" style="background:${o.color}"></span>
              ${d.name?B`<span class="series-name">${o.entity.name}</span>`:Z}
              ${d.value?B`<span class="series-value">${function(e,t,o){if(void 0===t)return e.entity.display;const n=qr(e.points,t),a=n<0?void 0:e.points[n];return a&&null!==a.v?ur(dr(a.v,e.entity.decimals,o.hass),e.entity.unit):"—"}(o,n,e)}</span>`:Z}
            </div>`:Z,l=o.points.some(e=>null!==e.v)?a(o,r,s):B`<div class="chart-message">${Ze(e.hass,"chart_no_data")}</div>`;return B`<div class="panel">${i}${l}</div>`})}
  </div>`}const Li=r`
  .multiples {
    display: grid;
    gap: 8px ${12}px;
  }
  .panel {
    min-width: 0;
  }
  .panel-title {
    display: flex;
    align-items: baseline;
    gap: 6px;
    min-width: 0;
    padding-bottom: 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  .panel-title:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  .panel-title .series-name {
    flex: 0 1 auto;
  }
  .panel-title .series-value {
    margin-left: auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.9375em;
    font-variant-numeric: tabular-nums;
  }
  .multiples .plot-wrap,
  .multiples .chart-message {
    height: 100px;
  }
  .frame.compact .multiples .plot-wrap,
  .frame.compact .multiples .chart-message {
    height: 70px;
  }
  .multiples .chart-message {
    font-size: 0.8125em;
  }
  .frame.compact .multiples {
    gap: 4px 10px;
  }
  /* The guide shows on every small chart; the box only on the one being pointed at. */
  .panel:not(:hover) .tooltip {
    display: none;
  }
`,Ni=["line","band","time","state","point"],Ti=["max","min","last","first"],Oi={line:"red",band:"green",time:"grey",state:"amber",point:"primary"},Fi=e=>"number"==typeof e&&Number.isFinite(e),Pi=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim());function Di(e,t){if(!(void 0===e||Fi(e)||Pi(e)||"string"==typeof e&&""!==e.trim()&&Number.isFinite(Number(e))))throw new Error(`"${t}" must be a number or an entity id`)}const Ui=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/,Hi=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{1,2}):(\d{2})(?::(\d{2}))?$/;function Ii(e){return(Array.isArray(e)?e:"string"==typeof e?e.split(","):[]).map(e=>String(e).trim()).filter(e=>""!==e)}function Ri(e){const t=e.annotations;if(void 0!==e.zones&&"boolean"!=typeof e.zones)throw new Error('"zones" must be true or false');if(void 0!==t){if(!Array.isArray(t))throw new Error('"annotations" must be a list');t.forEach((e,t)=>{const o=e=>`annotations[${t}].${e}`;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`"annotations[${t}]" must have a "type"`);const n=e;if(!Ni.includes(n.type))throw new Error(`"${o("type")}" must be one of: ${Ni.join(", ")}`);for(const a of["label","color","state"])if(void 0!==n[a]&&"string"!=typeof n[a])throw new Error(`"${o(a)}" must be text`);for(const a of["dash","shade"])if(void 0!==n[a]&&"boolean"!=typeof n[a])throw new Error(`"${o(a)}" must be true or false`);if(Di(n.value,o("value")),Di(n.from,o("from")),Di(n.to,o("to")),void 0!==n.entity&&!Pi(n.entity))throw new Error(`"${o("entity")}" must be an entity id`);if("line"===n.type&&void 0===n.value)throw new Error(`"${o("value")}" is needed for a line`);if("band"===n.type&&void 0===n.from&&void 0===n.to)throw new Error(`"${o("from")}" or "${o("to")}" is needed for a band`);if("time"===n.type){if(void 0!==n.times&&"string"!=typeof n.times&&!Array.isArray(n.times))throw new Error(`"${o("times")}" must be a time or a list of times`);const e=Ii(n.times).find(e=>!function(e){const t=e.trim(),o=Ui.exec(t);return o?Number(o[1])<24&&Number(o[2])<60:Hi.test(t)||/\d{4}-\d{2}-\d{2}T.+(Z|[+-]\d{2}:?\d{2})$/.test(t)&&Number.isFinite(Date.parse(t))}(e));if(void 0!==e)throw new Error(`"${o("times")}" has "${e}": use 07:00 or 2026-10-28 07:00`)}if("state"===n.type&&void 0===n.entity)throw new Error(`"${o("entity")}" is needed for a state mark`);if(void 0!==n.at&&!Ti.includes(n.at))throw new Error(`"${o("at")}" must be one of: ${Ti.join(", ")}`)})}}function Bi(e){return Array.isArray(e.annotations)?e.annotations:[]}function qi(e,t){if(void 0===e)return;if(Fi(e))return e;const o=_a(e);if(null!==o)return o;return _a(t.states[e.trim()]?.state)??void 0}function Vi(e,t,o){const n=[],a=ea("day",t.start,t.end,o,800);for(const r of e){const e=Ui.exec(r);if(e){for(const t of a){const a=Yn(t,o.timeZone);n.push(Xn(o.timeZone,a.year,a.month,a.day,+e[1],+e[2],+(e[3]??0)))}continue}const t=Hi.exec(r),i=t?Xn(o.timeZone,+t[1],+t[2],+t[3],+t[4],+t[5],+(t[6]??0)):Date.parse(r);Number.isFinite(i)&&n.push(i)}return[...new Set(n.filter(e=>e>=t.start&&e<=t.end))].sort((e,t)=>e-t)}function Zi(e,t,o,n){const a=[],r=t?.trim().toLowerCase();for(let i=0;i<e.length;i++){const t=e[i];if(i>0&&e[i-1].s===t.s)continue;if(void 0!==r&&t.s.toLowerCase()!==r)continue;let s=i+1;for(;s<e.length&&e[s].s===t.s;)s++;const l=s<e.length?e[s].t:n,c=Math.max(t.t,o.start);l<=o.start||c>o.end||a.push({start:c,end:Math.min(l,o.end),s:t.s})}return a}function Wi(e){return Math.ceil(5.8*e.length)+10}const Yi=new WeakMap;const Gi=e=>Math.round(1e4*e)/100+"%";function Xi(e,t){return e.entity&&t.find(t=>t.entity.entityId===e.entity.trim())||t[0]}function Ji(e,t,o,n){const a=e.points.filter(e=>null!==e.v&&(n||!e.carried&&(e.t!==o.end||"last"===t)));if(0!==a.length)return"first"===t?a[0]:"last"===t?a[a.length-1]:a.reduce((e,o)=>("max"===t?o.v>e.v:o.v<e.v)?o:e)}function Ki(e,t,o,n){const a=Bi(e.raw),r=!0===e.raw.zones&&t.series[0]?function(e,t){const[o,n]=t.domain;return e.map((a,r)=>{const i=Math.max(o,Number.isFinite(a.from)?a.from:o),s=Math.min(n,r+1<e.length?e[r+1].from:n);if(!(s>i))return q``;const l=t.y(s),c=t.y(i);return q`<rect class="zone" x="0" width=${Ga} y=${l} height=${c-l} fill=${Ce(a.color)}></rect>`})}(t.series[0].entity.bands,o):[];if(0===a.length&&0===r.length)return{behind:Z,front:Z,overlay:Z};const i=[...r],s=[],l=[],{range:c}=t,d=e=>o.x(e),[u,h]=o.domain,p=function(e,t,o){const n=[...new Set(Bi(e.raw).filter(e=>"state"===e.type&&e.entity).map(e=>e.entity.trim()))];if(0===n.length)return new Map;const a=n.join(",");let r=Yi.get(e.host);if(!r||r.shape!==a||t.start<r.from||!o&&t.end>r.to+6e4||o&&r.to!==1/0){const i=(r?.generation??0)+1,s={shape:a,from:t.start,to:o?1/0:t.end,status:"loading",data:new Map,generation:i};r=s,Yi.set(e.host,s);const l=e.hass.callWS?.({type:"history/history_during_period",start_time:new Date(t.start).toISOString(),end_time:new Date(t.end).toISOString(),entity_ids:n,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});l&&l.then(t=>{if(Yi.get(e.host)===s&&s.generation===i){for(const e of n){const o=(t?.[e]??[]).map(e=>({t:Math.round(1e3*(e.lu??e.lc??0)),s:String(e.s??"")})).filter(e=>e.t>0);s.data.set(e,o.slice(-2e3))}s.status="ready",e.requestUpdate()}},()=>{Yi.get(e.host)===s&&(s.status="error")})}const i=r;if("ready"===i.status&&o)for(const s of n){const t=e.hass.states[s];if(!t)continue;const o=Date.parse(t.last_changed??t.last_updated??""),n=i.data.get(s)??[],a=n[n.length-1];Number.isFinite(o)&&(!a||o>a.t&&a.s!==t.state)&&(n.push({t:o,s:t.state}),i.data.set(s,n))}return i.data}(e,c,t.live),m=Math.min(c.end,Date.now()),f=[],g=(e,t,o,n)=>{const a=o.slice(0,2e3);if(s.push(q`${a.map(e=>q`<line class="mark-line ${n}" x1=${d(e)} x2=${d(e)} y1="0" y2=${Xa} stroke=${t}></line>`)}`),e.label&&a.length<=60)for(const r of a)f.push({t:r,label:e.label,color:t})};for(const y of a){const n=Ce(y.color??Oi[y.type]);if("line"===y.type){const t=qi(y.value,e.hass);if(void 0===t||t<u||t>h)continue;const a=o.y(t);if(s.push(q`<line class="threshold ${!1===y.dash?"":"dashed"}" x1="0" x2=${Ga} y1=${a} y2=${a} stroke=${n}></line>`),y.label){const e=a/Xa;l.push(B`<span
            class="annotation-label threshold ${e<.12?"below":""}"
            style="top:${Gi(e)};--cd-annotation:${n}"
            >${y.label}</span
          >`)}}else if("band"===y.type){const t=void 0===y.from?u:qi(y.from,e.hass),a=void 0===y.to?h:qi(y.to,e.hass);if(void 0===t||void 0===a)continue;const r=Math.max(u,Math.min(t,a)),s=Math.min(h,Math.max(t,a));if(!(s>r))continue;const c=o.y(s);i.push(q`<rect class="band" x="0" width=${Ga} y=${c} height=${o.y(r)-c} fill=${n}></rect>`),y.label&&l.push(B`<span class="annotation-label band" style="top:${Gi(c/Xa)};--cd-annotation:${n}"
            >${y.label}</span
          >`)}else if("time"===y.type)g(y,n,Vi(Ii(y.times),c,t.zone),"time");else if("state"===y.type){const e=Zi(p.get(y.entity.trim())??[],y.state,c,m);y.shade&&i.push(q`${e.map(e=>q`<rect class="state-shade" x=${d(e.start)} width=${Math.max(0,d(e.end)-d(e.start))} y="0" height=${Xa} fill=${n}></rect>`)}`),g(y,n,e.map(e=>e.start).filter(e=>e>c.start),"state")}else if("point"===y.type){const a=Xi(y,t.series),r=a&&Ji(a,y.at??"max",c,void 0!==t.group);if(!a||!r)continue;const i=d(r.t)/Ga,s=o.y(r.v)/Xa;if(!(i>=0&&i<=1&&s>=0&&s<=1))continue;const u=ur(dr(r.v,a.entity.decimals,e.hass),a.entity.unit),h=i<.1?"start":i>.9?"end":"";l.push(B`<span class="annotation-dot" style="left:${Gi(i)};top:${Gi(s)};background:${n}"></span>
          <span
            class="annotation-label point ${h} ${s<.2?"below":""}"
            style="left:${Gi(i)};top:${Gi(s)};--cd-annotation:${n}"
            >${y.label?B`<span class="point-name">${y.label}</span> `:Z}${u}</span
          >`)}}const v=function(e,t,o=2){const n=e.map((e,t)=>t).sort((t,o)=>e[t].x-e[o].x),a=Array.from({length:o},()=>-1/0),r=e.map(()=>{});for(const i of n){const{x:o,width:n}=e[i],s=o+2+n>t?o-2-n:o+2,l=a.findIndex(e=>s>=e+4);l<0||(a[l]=s+n,r[i]=l)}return r}(f.map(e=>({x:d(e.t)/Ga*n,width:Wi(e.label)})),n);return f.forEach((t,o)=>{const a=v[o];if(void 0===a)return;const r=d(t.t)/Ga,i=r*n+2+Wi(t.label)>n;l.push(B`<span
        class="annotation-label mark ${i?"end":""}"
        style="left:${Gi(r)};top:${15*a}px;--cd-annotation:${t.color}"
        title=${Ze(e.hass,"annotation_at",{label:t.label,time:Hn(t.t,e.hass)})}
        >${t.label}</span
      >`)}),{behind:i.length?q`<g class="annotations-behind">${i}</g>`:Z,front:s.length?q`<g class="annotations-front">${s}</g>`:Z,overlay:l.length?B`<div class="annotation-labels">${l}</div>`:Z}}const Qi=r`
  .plot .zone {
    opacity: 0.1;
  }
  .plot .band {
    opacity: 0.14;
  }
  .plot .state-shade {
    opacity: 0.12;
  }
  .plot .threshold {
    stroke-width: 1.5;
  }
  .plot .threshold.dashed {
    stroke-dasharray: 6 4;
  }
  .plot .mark-line {
    stroke-width: 1;
    stroke-dasharray: 3 3;
    opacity: 0.9;
  }
  .annotation-labels {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .annotation-label {
    position: absolute;
    font-size: 10px;
    line-height: 1.2;
    padding: 1px 4px;
    border-radius: 3px;
    white-space: nowrap;
    max-width: 45%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: color-mix(in srgb, var(--cd-annotation) 75%, var(--primary-text-color));
    background: color-mix(in srgb, var(--card-background-color, #fff) 82%, transparent);
  }
  .annotation-label.threshold {
    right: 2px;
    transform: translateY(calc(-100% - 1px));
  }
  .annotation-label.threshold.below {
    transform: translateY(1px);
  }
  .annotation-label.band {
    left: 2px;
    transform: translateY(1px);
  }
  .annotation-label.mark {
    transform: translateX(2px);
    max-width: none;
  }
  .annotation-label.mark.end {
    transform: translateX(calc(-100% - 2px));
  }
  .annotation-dot {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 2px solid var(--card-background-color, #fff);
    transform: translate(-50%, -50%);
  }
  .annotation-label.point {
    transform: translate(-50%, calc(-100% - 7px));
    font-weight: 500;
    color: var(--primary-text-color);
    border: 1px solid color-mix(in srgb, var(--cd-annotation) 60%, transparent);
    background: color-mix(in srgb, var(--card-background-color, #fff) 90%, transparent);
  }
  .annotation-label.point .point-name {
    color: var(--secondary-text-color);
    font-weight: 400;
  }
  .annotation-label.point.below {
    transform: translate(-50%, 7px);
  }
  .annotation-label.point.start {
    transform: translate(-6px, calc(-100% - 7px));
  }
  .annotation-label.point.end {
    transform: translate(calc(-100% + 6px), calc(-100% - 7px));
  }
  .annotation-label.point.start.below {
    transform: translate(-6px, 7px);
  }
  .annotation-label.point.end.below {
    transform: translate(calc(-100% + 6px), 7px);
  }
`,es={line:["value","dash"],band:["from","to"],time:["times"],state:["entity","state","shade"],point:["at","series"]},ts={dash:!0,shade:!1,at:"max"};function os(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:Ze(e,`editor_annotation_${t}_${o}`)}))}}}const ns=new Map;function as(e,t){const o={...e};return t.length?o.annotations=t:delete o.annotations,o}function rs(e,t){if("line"===e)return{type:e,value:0};if("band"===e)return{type:e,from:0,to:1};if("time"===e)return{type:e,times:["07:00"]};if("state"===e){const o=(t.entities??[])[0];return{type:e,entity:"string"==typeof o?o:o?.entity??"sensor.example",state:"on"}}return{type:e,at:"max"}}function is(e){const t=Array.isArray(e.config.annotations)?e.config.annotations:[],o=(e.config.entities??[]).map(e=>"string"==typeof e?e:e.entity),n=t=>Ze(e.hass,t),a=(o,n)=>{const a=[...t];n?a[o]=n:a.splice(o,1),e.commit(as(e.config,a))};return B`<style>
      .annotations-title {
        font-weight: 500;
        margin: 16px 0 4px;
      }
      .annotation {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 4px;
        align-items: start;
        padding: 8px 0;
        border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      }
      .annotation-add {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
        color: var(--secondary-text-color);
      }
      .annotation-add button {
        padding: 4px 10px;
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        border-radius: 8px;
        background: none;
        color: var(--primary-color);
        font: inherit;
        cursor: pointer;
      }
      .annotation-add button:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
    </style>
    <div class="annotations">
      <div class="annotations-title">${n("editor_annotations")}</div>
      ${t.map((t,r)=>B`<div class="annotation" data-index=${r}>
            <ha-form
              data-section="annotation"
              .hass=${e.hass}
              .data=${function(e){const t={type:e.type};for(const o of[...es[e.type],"label","color"]){let n=e["series"===o?"entity":o];"times"===o?n=Ii(e.times).join(", "):"value"!==o&&"from"!==o&&"to"!==o||void 0===n||(n=String(n)),t[o]=n??ts[o]}return t}(t)}
              .schema=${function(e,t,o){const n=`${e}|${Ve(t)}|${o.join(",")}`;let a=ns.get(n);if(a)return a;const r={value:{text:{}},from:{text:{}},to:{text:{}},times:{text:{}},entity:{entity:{}},series:{entity:{include_entities:o}},state:{text:{}},shade:{boolean:{}},dash:{boolean:{}},at:os(t,"at",Ti)};return a=[{name:"type",selector:os(t,"type",Ni)},...es[e].map(e=>({name:e,selector:r[e]})),{type:"grid",name:"",schema:[{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}}}]}],ns.set(n,a),a}(Ni.includes(t.type)?t.type:"line",e.hass,o)}
              .computeLabel=${e=>n(`editor_annotation_${e.name}`)}
              @value-changed=${e=>{e.stopPropagation(),a(r,function(e,t){const o=e.type??t.type,n={type:o},a=o===t.type?[...es[o],"label","color"]:["label","color"];for(const r of a){let t=e[r];"string"==typeof t&&(t=t.trim()),void 0!==t&&""!==t&&t!==ts[r]&&("value"!==r&&"from"!==r&&"to"!==r||!Number.isFinite(Number(t))||(t=Number(t)),"times"===r&&(t=Ii(t)),n["series"===r?"entity":r]=t)}return n}(e.detail?.value??{},t))}}
            ></ha-form>
            <ha-icon-button
              class="remove"
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              .label=${n("editor_annotation_remove")}
              @click=${()=>a(r)}
            ></ha-icon-button>
          </div>`)}
      <div class="annotation-add">
        <span>${n("editor_annotation_add")}</span>
        ${Ni.map(o=>B`<button
              type="button"
              data-type=${o}
              @click=${()=>e.commit(as(e.config,[...t,rs(o,e.config)]))}
            >
              + ${n(`editor_annotation_add_${o}`)}
            </button>`)}
      </div>
    </div>`}function ss(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:Ze(e,`editor_${t}_${o}`)}))}}}const ls=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"}];function cs(e){const t=e?.period;return`${t?.calendar?"calendar":"rolling"}${e?.group_by?"|grouped":""}`}function ds(e,t){const[o,n]=cs(t).split("|"),a="calendar"===o;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:ss(e,"period_calendar",["rolling",...aa])},...a?[{name:"period_until",selector:ss(e,"period_until",ra)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:ss(e,"period_unit",na)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:ss(e,"source",Ka)},{type:"grid",name:"",schema:[{name:"group_by",selector:ss(e,"group_by",["none",...ja])},...n?[{name:"aggregate",selector:ss(e,"aggregate",La)}]:[]]}]}const us=ls.filter(e=>["period_last","period_unit","source"].includes(e.name));function hs(e){return[{type:"grid",name:"",schema:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:ss(e,"period_unit",na)}]},{name:"source",selector:ss(e,"source",Ka)}]}const ps=[{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];function ms(e){return[{type:"grid",name:"",schema:[{name:"header",selector:ss(e,"header",Cr)},{name:"compact",selector:{boolean:{}}}]}]}const fs=[{name:"x_axis",path:["x_axis"],default:pn},{name:"y_axis",path:["y_axis"],default:mn},{name:"axis_labels",path:["axis_labels"],default:fn},{name:"grid_horizontal",path:["gridlines","horizontal"],default:gn},{name:"grid_vertical",path:["gridlines","vertical"],default:vn},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function gs(e){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:ss(e,"axis_labels",hn)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const vs=[{type:"grid",name:"",schema:[{name:"zoom",selector:{boolean:{}}},{name:"overview",selector:{boolean:{}}}]}],ys=[{name:"zones",selector:{boolean:{}}}];function bs(e,t){return[{name:"labels",selector:{boolean:{}}},...!0===t?.labels?[{type:"grid",name:"",schema:[{name:"labels_show",selector:ss(e,"labels_show",oi)},{name:"labels_position",selector:ss(e,"labels_position",ni)}]},{name:"labels_overlap",selector:{boolean:{}}}]:[]]}const xs=[{name:"sync",selector:{text:{}}}];function _s(e,t){return[{name:"multiples",selector:{boolean:{}}},...!0===t?.multiples?[{type:"grid",name:"",schema:[{name:"multiples_scale",selector:ss(e,"multiples_scale",Ci)},{name:"multiples_columns",selector:{number:{min:1,max:6,mode:"box"}}}]}]:[]]}const ws=new Map;function $s(e,t,o){const n=`${e}|${Ve(t)}`;let a=ws.get(n);return a||(a=o(),ws.set(n,a)),a}function ks(e,t,o,n,a={}){return B`<ha-form
    data-section=${t}
    .hass=${e.hass}
    .data=${Ko(e.config,n)}
    .schema=${o}
    .computeLabel=${t=>Ze(e.hass,a[t.name]??`editor_${t.name}`)}
    @value-changed=${t=>{t.stopPropagation();const o=Qo(e.config,n,t.detail?.value??{});o!==e.config&&e.commit(o)}}
  ></ha-form>`}const Ms=[...ls,{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"labels_show",path:["labels_show"],default:"all"},{name:"labels_position",path:["labels_position"],default:"auto"},{name:"labels_overlap",path:["labels_overlap"],default:!1},{name:"line_width",path:["line_width"],default:mo},{name:"dots",path:["dots"],default:!1},...fs,{name:"y_scale",path:["y_scale"],default:yn},{name:"zoom",path:["zoom"],default:!1},{name:"overview",path:["overview"],default:!1},{name:"zones",path:["zones"],default:!1},...ki,{name:"sync",path:["sync"]},...ps,{name:"multiples",path:["multiples"],default:!1},{name:"multiples_scale",path:["multiples_scale"],default:"auto"},{name:"multiples_columns",path:["multiples_columns"]}];function zs(e,t){if(!e)return t;const[o,n]=e,a={};return void 0===t.y_min&&o>=0&&o<=n/2&&(a.y_min=0),void 0===t.y_max&&n<=0&&n>=o/2&&(a.y_max=0),Object.keys(a).length?{...t,...a}:t}function Ss(e){const t=[];return e.forEach((o,n)=>{n>0&&t.push([o[0],e[n-1][1]]),t.push(o)}),t}function As(e,t,o){if(e.length<2)return"";const[n,a,r]="step"===o?[Ss(e),Ss(t),"straight"]:[e,t,o];return`${Wa(n,r)}${Wa([...a].reverse(),r).replace(/^M/,"L")}Z`}function Es(e,t){return"step"===t?Wa(Ss(e),"straight"):Wa(e,t)}function Cs(e,t,o,n,a={}){const r=vo(e.entity.config,n),i=e.entity.config.line_width??n.line_width,s=o.y(Math.min(Math.max(0,o.domain[0]),o.domain[1])),l=function(e){const t=e.entity.config.negative_color;return"string"==typeof t&&t.trim()?Ce(t.trim()):e.color}(e),c=`cd-area-${e.index}`,d=`cd-area-line-${e.index}`,u=l!==e.color,h=q`${function(e,t,o,n,a=.42,r=.05){const i=Math.min(1,Math.max(0,n/Xa));return q`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Xa}>
    <stop offset="0" stop-color=${t} stop-opacity=${a}></stop>
    <stop offset=${i} stop-color=${t} stop-opacity=${r}></stop>
    <stop offset=${i} stop-color=${o} stop-opacity=${r}></stop>
    <stop offset="1" stop-color=${o} stop-opacity=${a}></stop>
  </linearGradient>`}(c,e.color,l,s,a.stacked?.6:.42,a.stacked?.35:.05)}
    ${u?function(e,t,o,n){const a=Math.min(1,Math.max(0,n/Xa));return q`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Xa}>
    <stop offset=${a} stop-color=${t}></stop>
    <stop offset=${a} stop-color=${o}></stop>
  </linearGradient>`}(d,e.color,l,s):Z}`,p=[],m=[],f=[];if(a.layers){const n=a.layers;let r=[];const i=()=>{if(r.length){const a=r.map(e=>[o.x(t[e].t),o.y(n[e][1])]),i=r.map(e=>[o.x(t[e].t),o.y(n[e][0])]);p.push(As(a,i,e.curve)),m.push(Es(a,e.curve))}r=[]};for(let e=0;e<t.length;e++)n[e]?r.push(e):i();i()}else for(const y of Ya(t)){const t=y.map(e=>[o.x(e.t),o.y(e.v)]);p.push(As(t,t.map(([e])=>[e,s]),e.curve)),m.push(Es(t,e.curve))}if(r.dots){const e=a.range;t.forEach((t,n)=>{if(null===t.v||e&&(t.t===e.start||t.t===e.end))return;const r=a.layers?a.layers[n]?.[1]:t.v;void 0!==r&&f.push([o.x(t.t),o.y(r)])})}const g=i??2,v=u?`url(#${d})`:e.color;return{defs:h,body:q`<g class="series" data-series=${e.index}>
    <path class="fill" d=${p.join("")} fill="url(#${c})" stroke="none"></path>
    <path class="line ${e.dash?"dashed":""}" d=${m.join("")} fill="none" stroke=${v}
      style="stroke-width:${g}px"></path>
    ${f.length>0&&f.length<=200?q`<path class="dots" d=${bo(f)} fill="none" stroke=${v}
            style="stroke-width:${xo(g)}px"></path>`:Z}
  </g>`}}const js=[...ls,{name:"curve",path:["curve"],default:"smooth"},{name:"stack",path:["stack"],default:"none"},{name:"line_width",path:["line_width"],default:2},{name:"dots",path:["dots"],default:!1},...fs,...ps];const Ls={name:"negative_color",path:["negative_color"]},Ns=new Map;const Ts=r`
  .plot .fill {
    vector-effect: none;
  }
  .style-area .line,
  .plot .series .line {
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .plot .series .dots {
    stroke-linecap: round;
  }
  .plot .series .line.dashed {
    stroke-dasharray: 6 5;
  }
`,Os={layout:"chart",group:"history",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    ${Ts}
  `,thumbnail:()=>q`
    <defs>
      <linearGradient id="cd-thumb-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.5" />
        <stop offset="1" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10 V36 H4 Z" fill="url(#cd-thumb-area)" />
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){Qa(e),xn(e),Gr(e),$o(e),jr(e),Pr(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t.negative_color;if(void 0!==e&&"string"!=typeof e)throw new Error(`"negative_color" of ${t.entity} must be a colour`)}}(e)},editor:function(e){const t=$s(`area|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:ss(e.hass,"curve",qa)},{name:"stack",selector:ss(e.hass,"stack",Fr)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:To},{name:"dots",selector:{boolean:{}}}]},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",t,js)},entityFields:function(e,t){const o=!0===t.dots;let n=Ns.get(o);return n||(n=[...Fo(o),Ls],Ns.set(o,n)),{schema:$s("area-entity",e,()=>[...Bo(e),{name:"negative_color",selector:{text:{}}}]),fields:n}},disconnect(e){rr(e),$r(e),Wr(e)},render:function(e){const t=er(e),o=nr(t,e),n=ir(t,e),a=o===Z&&n===Z?Z:B`${o}${n}`,r=sr(t,e),i=Lr(e.raw);if(r)return Nr("over"===i.header?{...i,header:"above"}:i,a,r);const s=e.raw.stack??"none",l=t.series.map(e=>({...e,points:Rn(e.points,500)}));let c,d,u=l;const h={};if("none"===s){const o=ln(l.map(e=>e.points));d=Mr({...e,raw:zs(o,e.raw)},t.range,o);const n=d.scales,a=yo(l,t=>vo(t.entity.config,e.raw).onTop);c=a.map(o=>Cs(o,o.points,n,e.raw,{range:t.range}))}else{const o=function(e){const t=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t);return{times:t,values:e.map(e=>t.map(t=>Dr(e,t)))}}(l.map(e=>e.points)),n=Ur(o.values,s),a=Hr(o.values);u=l.map((e,t)=>({...e,points:o.times.map((e,n)=>({t:e,v:o.values[t][n]}))}));const r=Ir(n),i="percent"===s?{y_min:r[0]<0?-100:0,y_max:r[1]>0?100:0}:{};d=Mr({...e,raw:zs(r,{...i,...e.raw})},t.range,r);const p=d.scales;c=u.map((o,a)=>Cs(o,o.points,p,e.raw,{layers:n[a],stacked:!0,range:t.range})).reverse();const m=new Map;u.forEach(e=>e.points.forEach((e,t)=>m.set(e,t))),h.dotY=(e,t)=>{const o=n[e.index][m.get(t)??-1];return o?p.y(o[1]):null};const f=Kr(u),g=Math.max(...u.map(e=>e.entity.decimals));h.footer=t=>{const o=t.length?m.get(t[0].p):void 0;return Qr(e,void 0===o?null:a[o],f,g)},"percent"===s&&(h.text=(t,o)=>{const a=o?n[t.index][m.get(o)??-1]:null;if(!o||null===o.v||!a)return"—";const r=Math.round(Math.abs(a[1]-a[0]));return`${ur(dr(o.v,t.entity.decimals,e.hass),t.entity.unit)} · ${r} %`})}const p=Yr(e.raw),m=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_area"),names:t.series.map(e=>e.entity.name).join(", ")});return Nr(i,a,Ar({axes:d,ctx:e,content:q`${c.map(e=>e.body)}`,defs:q`${c.map(e=>e.defs)}`,label:m,overlay:B`${"over"===i.header?Tr(a):Z}
      ${p?ei(e,u,d.scales,Zr(e.host),kr(e),h):Z}`,hover:p?Xr(e,t.range,u.map(e=>e.points)):void 0}))}};function Fs(e,t,o){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t?0:Math.min(1,Math.max(0,(e-t)/(o-t)))}function Ps(e,t,o){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t)return[0,0];const n=Fs(e,t,o);if(t<0&&o>0){const e=Fs(0,t,o);return n<e?[n,e]:[e,n]}return[0,n]}const Ds=new Set;function Us(e){return(e.available?e.band.icon:void 0)??e.config.icon??(e.stateObj?void 0:"mdi:help-circle-outline")}function Hs(e){return null==e||""===e}function Is(e){if(void 0===e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function Rs(e,t,o="limit"){if(Hs(e))return null;if("number"==typeof e)return Number.isFinite(e)?e:null;const n=String(e),a=Is(t.states[n]?.state);if(null===a&&!Ds.has(n)){Ds.add(n);const e="limit"===o?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${o} entity "${n}" is missing or not numeric; ${e}.`)}return a}function Bs(e,t){if(e.every(e=>"number"==typeof e.from))return e;const o=[];for(const n of e){const e=t?Rs(n.from,t,"band start"):null;null!==e&&o.push({...n,from:e})}return o.length?o.sort((e,t)=>e.from-t.from):Jt}function qs(e,t){const o=e.entity,n=t.states[o],a=e.name??n?.attributes?.friendly_name??o,r=e.unit??(e.attribute?"":n?.attributes?.unit_of_measurement??""),i=function(e,t){if(t)return e.attribute?t.attributes?.[e.attribute]:t.state}(e,n),s=function(e){return"number"==typeof e?Number.isFinite(e)?e:null:"string"==typeof e?Is(e):null}(i),l=null!==s;let c;c=Hs(e.decimals)?e.attribute?l?function(e){const t=String(e),o=t.indexOf(".");return-1===o||/e/i.test(t)?0:Math.min(2,t.length-o-1)}(i):0:function(e,t,o){const n=e?.entities?.[t]?.display_precision;return"number"==typeof n?n:"%"===o?0:1}(t,o,r):e.decimals;const d=Rs(e.min,t)??0,u=Rs(e.max,t)??100,h=Rs(e.target,t),p=Bs(e.severity,t);let m,f="";return l?(f=dr(s,c,t),m=ur(f,r)):m=n?function(e,t,o,n){const a=e.attribute;return a&&"string"==typeof o&&""!==o.trim()?n.formatEntityAttributeValue?.(t,a)??o:n.formatEntityState?.(t)??Ze(n,"unavailable")}(e,n,i,t):Ze(t,"entity_not_found"),{entityId:o,config:e,stateObj:n,available:l,value:s,min:d,max:u,target:h,name:a,unit:r,decimals:c,position:l?Fs(s,d,u):0,span:l?Ps(s,d,u):[0,0],targetPosition:null===h?null:Fs(h,d,u),band:Te(l?s:-1/0,p),bands:p,valueText:f,display:m,label:`${a}, ${m}`}}function Vs(e,t){if(!e.include)return[];const o=new Set(e.entities.map(e=>e.entity));return function(e,t,o){const n=Tt.get(e);if(n&&n.exclude===t&&n.states===o.states&&n.entities===o.entities&&n.devices===o.devices&&n.areas===o.areas)return n.ids;const a=[];for(const i of Object.values(o.states)){if(!Et(i)||o.entities?.[i.entity_id]?.hidden)continue;const n=Ct(i,o);if(!Lt(e,n)||Nt(t,n))continue;const r=i.attributes?.friendly_name;a.push({id:i.entity_id,name:"string"==typeof r&&r?r:i.entity_id})}a.sort((e,t)=>e.name.localeCompare(t.name)||(e.id<t.id?-1:1));const r=a.map(e=>e.id);return Tt.set(e,{exclude:t,states:o.states,entities:o.entities,devices:o.devices,areas:o.areas,ids:r}),r}(e.include,e.exclude,t).filter(e=>!o.has(e))}const Zs={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:r`
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
  `,render(e,{show:t,hass:o}){const n=t.value||!e.available,a=B`${t.name?B`<span class="name">${e.name}</span>`:Z}${n?B`<span class="value">${e.display}</span>`:Z}`;return B`
      ${t.icon?B`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Us(e)}
            ></ha-state-icon>`:Z}
      <div class="track">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?B`<div class="target"></div>`:Z}
        <div class="text">${a}</div>
        ${e.available?B`<div class="text on-fill ${Ne(e.band.color)}" aria-hidden="true">${a}</div>`:Z}
      </div>
    `}};function Ws(e,t){const o=e.reduce((e,t)=>e+t.w,0);let n,a=0;for(const r of e){const e=(a+r.w/2)/o;if(a+=r.w,t<=e)return n?n.v+(r.v-n.v)*(t-n.at)/(e-n.at):r.v;n={at:e,v:r.v}}return e[e.length-1].v}const Ys=["tukey","range"];function Gs(e,t){if(e.length<=t)return[...e];const o=[];for(let n=0;n<t;n++)o.push(e[Math.floor(n*e.length/t)]);return o}const Xs=e=>"number"==typeof e&&Number.isFinite(e);function Js(e){for(const t of["x_min","x_max"])if(void 0!==e[t]&&!Xs(e[t]))throw new Error(`"${t}" must be a number`);if(Xs(e.x_min)&&Xs(e.x_max)&&e.x_min>=e.x_max)throw new Error('"x_min" must be below "x_max"')}const Ks=[{name:"x_min",path:["x_min"]},{name:"x_max",path:["x_max"]}],Qs=[{type:"grid",name:"",schema:[{name:"x_min",selector:{number:{mode:"box",step:"any"}}},{name:"x_max",selector:{number:{mode:"box",step:"any"}}}]}];function el(e){return{min:Xs(e.x_min)?e.x_min:void 0,max:Xs(e.x_max)?e.x_max:void 0}}function tl(e,t,o,n={}){const a=_n(e.raw),r=Math.max(2,Math.min(8,Math.round(wr(e)/70))),i=Mn(t,n.x??{},r),s=Mn(o,{min:a.min??n.yFloor,max:a.max},4);return{options:a,value:s,times:i.ticks,unit:"minute",range:{start:i.domain[0],end:i.domain[1]},scales:{x:dn(i.domain,[0,Ga]),y:dn(s.domain,[Xa,0]),domain:s.domain}}}function ol(e){const[t,o]=e.times;return void 0===t||void 0===o?0:Math.max(0,-Math.floor(Math.log10(Math.abs(o-t))+1e-9))}const nl=new WeakMap;function al(e){return nl.get(e)?.i}function rl(e){const t=nl.get(e);void 0!==t?.timer&&clearTimeout(t.timer),nl.delete(e)}function il(e,t){const o=function(e){let t=nl.get(e);return t||(t={},nl.set(e,t)),t}(e.host),n=t=>{t!==o.i&&(o.i=t,e.requestUpdate())},a=()=>{void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0};return{move(e){a();const o=e.currentTarget.getBoundingClientRect(),r=o.width>0?Math.min(1,Math.max(0,(e.clientX-o.left)/o.width)):0,i=o.height>0?Math.min(1,Math.max(0,(e.clientY-o.top)/o.height)):0;n(t(r,i,o.width,o.height))},leave(e){a(),"touch"===e.pointerType||"pen"===e.pointerType?o.timer=setTimeout(()=>{o.timer=void 0,n(void 0)},Br):n(void 0)}}}const sl=e=>Math.round(1e4*e)/100+"%";function ll(e){const{x:t,y:o,plotWidth:n,title:a,rows:r,dot:i,band:s}=e;if(!(t>=0&&t<=1))return Z;const l=Rr(t,n);return B`<div class="hover-layer" aria-hidden="true">
    ${s?B`<div class="pick-band" style="left:${sl(s[0])};width:${sl(s[1]-s[0])}"></div>`:Z}
    ${i&&o>=0&&o<=1?B`<span class="hover-dot" style="left:${sl(t)};top:${sl(o)};background:${i}"></span>`:Z}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${sl(t)}`}>
      <div class="tooltip-time">${a}</div>
      ${r.map(e=>B`<div class="tooltip-row">
            ${e.color?B`<span class="swatch" style="background:${e.color}"></span>`:Z}
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${e.value}</span>
          </div>`)}
    </div>
  </div>`}const cl=r`
  .pick-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
`,dl=["vertical","horizontal"],ul=.72;function hl(e,t){const o=e.bounds.length>1,n=o?e.bounds.slice(0,-1).map((t,o)=>[t,e.bounds[o+1]]):[[e.range.start,e.range.end]],a=[];return n.forEach(([n,r],i)=>{const s=Math.min(r,e.until);e.series.forEach((r,l)=>{let c,d;"statistics"===e.source?({samples:c,extremes:d}=function(e,t,o){const n=[];let a=1/0,r=-1/0;for(const i of e)i.t<t||i.t>=o||i.carried||null===i.v||(n.push({v:i.v,w:1}),a=Math.min(a,i.v,"number"==typeof i.min?i.min:i.v),r=Math.max(r,i.v,"number"==typeof i.max?i.max:i.v));return{samples:n,extremes:n.length?[a,r]:void 0}}(r.points,n,s)):c=function(e,t,o){const n=[];if(o<=t)return n;for(let a=0;a<e.length;a++){const r=e[a];if(r.t>=o)break;const i=a+1<e.length?e[a+1].t:1/0,s=Math.max(r.t,t),l=Math.min(i,o);l<=s||null===r.v||n.push({v:r.v,w:l-s})}return n}(r.points,n,s);const u=function(e,t,o){const n=e.filter(e=>e.w>0&&Number.isFinite(e.v)).sort((e,t)=>e.v-t.v);if(0===n.length)return;const a=Ws(n,.25),r=Ws(n,.5),i=Ws(n,.75),s=n.reduce((e,t)=>e+t.w,0),l=n.reduce((e,t)=>e+t.v*t.w,0)/s,c=Math.min(n[0].v,o?.[0]??1/0),d=Math.max(n[n.length-1].v,o?.[1]??-1/0),u={count:n.length,q1:a,median:r,q3:i,mean:l,min:c,max:d};if("range"===t)return{...u,low:c,high:d,outliers:[]};const h=1.5*(i-a),p=n.filter(e=>e.v>=a-h&&e.v<=i+h),m=Math.min(p[0]?.v??a,a),f=Math.max(p[p.length-1]?.v??i,i);let g=[...new Set(n.filter(e=>e.v<m||e.v>f).map(e=>e.v))];return g.length>60&&(g=g.map(e=>({v:e,d:e<m?m-e:e-f})).sort((e,t)=>t.d-e.d).slice(0,60).map(e=>e.v).sort((e,t)=>e-t)),{...u,low:m,high:f,outliers:g}}(c,t,d);u&&a.push({category:o?i:l,slot:o?l:0,series:r,stats:u,readings:Gs(c.map(e=>e.v),120)})})}),{boxes:a,categories:o?n.length:e.series.length,slots:o?e.series.length:1}}function pl(e,t){const o=Math.max(1,Math.ceil(e/Math.max(1,t))),n=[];for(let a=0;a<e;a+=o)n.push(a);return n}const ml=new Map;function fl(e,t,o){const n=ul/t;return{centre:e.category-.36+n*(e.slot+.5),half:Math.min(.4*n,o)}}function gl(e,t,o,n){const{stats:a,series:r}=e,{centre:i,half:s}=t,l=(e,t,o)=>q`<line class=${o} x1=${e[0]} y1=${e[1]} x2=${t[0]} y2=${t[1]}></line>`,[c,d]=o(i-s,a.q1),[u,h]=o(i+s,a.q3),p=n&&e.readings.length?q`<path class="readings" d=${bo(e.readings.map((e,t)=>o(i+function(e){const t=43758.5453*Math.sin(12.9898*(e+1));return 2*(t-Math.floor(t))-1}(t)*s*.8,e)))}></path>`:Z;return q`<g class="box" data-series=${r.index} style="--box-color:${r.color}">
    ${l(o(i,a.low),o(i,a.q1),"whisker")}
    ${l(o(i,a.q3),o(i,a.high),"whisker")}
    ${l(o(i-s/2,a.low),o(i+s/2,a.low),"cap")}
    ${l(o(i-s/2,a.high),o(i+s/2,a.high),"cap")}
    <rect
      class="body"
      x=${Math.min(c,u)}
      y=${Math.min(d,h)}
      width=${Math.abs(u-c)}
      height=${Math.abs(h-d)}
    ></rect>
    ${p}
    ${l(o(i-s,a.median),o(i+s,a.median),"median")}
    ${a.outliers.length?q`<path class="outliers" d=${bo(a.outliers.map(e=>o(i,e)))}></path>`:Z}
  </g>`}const vl=[...ls,{name:"orientation",path:["orientation"],default:"vertical"},{name:"whiskers",path:["whiskers"],default:"tukey"},{name:"readings",path:["readings"],default:!1},...fs,...ps];const yl=[{name:"box_color",selector:{text:{}}}],bl=[{name:"box_color",path:["color"]}],xl={layout:"chart",group:"distribution",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    ${cl}
    .style-box .box line {
      stroke: var(--box-color);
      stroke-width: 1.5;
    }
    .style-box .box .median {
      stroke-width: 3;
    }
    .style-box .box .body {
      fill: color-mix(in srgb, var(--box-color) 22%, transparent);
      stroke: var(--box-color);
      stroke-width: 1.5;
      vector-effect: non-scaling-stroke;
    }
    .style-box .box .outliers {
      fill: none;
      stroke: var(--box-color);
      stroke-width: 6px;
      stroke-linecap: round;
    }
    .style-box .box .readings {
      fill: none;
      stroke: var(--box-color);
      stroke-width: 4px;
      stroke-linecap: round;
      opacity: 0.45;
    }
  `,thumbnail:()=>q`
    <g stroke="var(--primary-color, #03a9f4)" stroke-width="2" fill="none" stroke-linecap="round">
      <line x1="16" y1="4" x2="16" y2="12" /><line x1="16" y1="28" x2="16" y2="36" />
      <rect x="9" y="12" width="14" height="16" rx="1.5"
        fill="color-mix(in srgb, var(--primary-color, #03a9f4) 25%, transparent)" />
      <line x1="9" y1="19" x2="23" y2="19" stroke-width="3" />
      <line x1="44" y1="8" x2="44" y2="16" /><line x1="44" y1="27" x2="44" y2="32" />
      <rect x="37" y="16" width="14" height="11" rx="1.5"
        fill="color-mix(in srgb, var(--primary-color, #03a9f4) 25%, transparent)" />
      <line x1="37" y1="22" x2="51" y2="22" stroke-width="3" />
      <circle cx="44" cy="4" r="1.6" fill="var(--primary-color, #03a9f4)" />
    </g>`,validate:function(e){Qa(e),xn(e),Gr(e),jr(e);const t=e;if(void 0!==t.orientation&&!dl.includes(t.orientation))throw new Error(`"orientation" must be one of: ${dl.join(", ")}`);if(void 0!==t.whiskers&&!Ys.includes(t.whiskers))throw new Error(`"whiskers" must be one of: ${Ys.join(", ")}`);if(void 0!==t.readings&&"boolean"!=typeof t.readings)throw new Error('"readings" must be true or false')},editor:function(e){const t={...e.config,group_by:void 0},o=$s(`box|${cs(t)}`,e.hass,()=>[...ds(e.hass,t),{type:"grid",name:"",schema:[{name:"orientation",selector:ss(e.hass,"orientation",dl)},{name:"whiskers",selector:ss(e.hass,"whiskers",Ys)}]},{name:"readings",selector:{boolean:{}}},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",o,vl)},entityFields:()=>({schema:yl,fields:bl}),disconnect(e){rr(e),$r(e),rl(e)},render(e){const t=function(e,t=Date.now()){const o=da(e.raw.period),n=e.raw.source??"history",a=oa(e.hass),r=ha(o,t,a,o.navigate?ma(e.host,o):0),i=Na(e.raw),s={start:i?Kn(i.unit,r.start,a):r.start,end:r.end},l=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),c="statistics"===n?{period:i?"hour"===i.unit?"5minute":"hour":Aa(s),types:["mean","min","max"],value:"mean"}:void 0,d=Ba(e.host,e.requestUpdate).get(e.hass,l,s,n,{live:r.live,statistics:c}),u=e.items.map((e,t)=>{const o=e.config;return{index:t,entity:e,points:d.data.get(Ca(l[t]))??[],color:Ce(o.color??Ja[t%Ja.length]),curve:"straight",dash:!1}});return{status:d.status,error:d.error,range:s,period:o,source:n,series:u,live:r.live,back:r.back,zone:a,bounds:i?ea(i.unit,s.start,s.end,a):[],unit:i?.unit,until:Math.min(s.end,t)}}(e),o=nr(t,e),n=ir(t,e),a=o===Z&&n===Z?Z:B`${o}${n}`,r=Lr(e.raw),i=sr(t,e);if(i)return Nr("over"===r.header?{...r,header:"above"}:r,a,i);const s=e.raw,l=s.orientation??"vertical",c=s.whiskers??"tukey",{boxes:d,categories:u,slots:h}=hl(t,c);let p=1/0,m=-1/0;for(const N of d)p=Math.min(p,N.stats.low,...N.stats.outliers,...!0===s.readings?N.readings:[]),m=Math.max(m,N.stats.high,...N.stats.outliers,...!0===s.readings?N.readings:[]);const f=t.bounds.length>1,g="vertical"===l,v=g?Math.max(4,Math.floor(kr(e)/Math.max(1,u)/6.5)):16,y=o=>f?function(e,t,o){const n=e.bounds[t],a=e.range.end-e.range.start;return"hour"===e.unit?In(n,"hour",a,o):"month"===e.unit?In(n,"month",a,o):In(n,"day","week"===e.unit?1/0:a,o)}(t,o,e.hass):((e,t=16)=>e.length>t?`${e.slice(0,t-1)}…`:e)(t.series[o]?.entity.name??"",v),b=Math.max(0,...Array.from({length:u},(e,t)=>y(t).length)),x=function(e,t,o,n,a,r=0){const i=_n(e.raw),s={min:i.min,max:i.max},l=[-.5,o-.5];if("vertical"===t){const t=kr(e),r=Mn(n,s,4);return{options:i,value:r,times:pl(o,Math.floor(t/a)),unit:"day",range:{start:l[0],end:l[1]},scales:{x:dn(l,[0,Ga]),y:dn(r.domain,[Xa,0]),domain:r.domain}}}const c=wr(e)-32-(i.y&&"outside"===i.labels?r:0),d=Mn(n,s,Math.max(2,Math.min(8,Math.round(c/70)))),u=!0===e.raw.compact?6:10;return{options:{...i,horizontal:i.vertical,vertical:i.horizontal},value:{domain:l,ticks:pl(o,u),decimals:0},times:d.ticks,unit:"day",range:{start:d.domain[0],end:d.domain[1]},scales:{x:dn(d.domain,[0,Ga]),y:dn(l,[0,Xa]),domain:l}}}(e,l,u,d.length?[p,m]:void 0,f?56:1,6*b+12),_=g?x.scales.x:x.scales.y,w=g?x.scales.y:x.scales.x,$=(e,t)=>g?[_(e),w(t)]:[w(t),_(e)],k=g?kr(e):r.compact?110:160,M=k>0?u/k*22:1/0,z=q`${d.map(e=>gl(e,fl(e,h,M),$,!0===s.readings))}`,S=Ze(e.hass,"box_aria",{names:t.series.map(e=>e.entity.name).join(", ")}),A=Yr(e.raw),E=A?al(e.host):void 0,C=(t,o)=>ur(dr(o,t.series.entity.decimals,e.hass),t.series.entity.unit);let j=Z;const L=void 0===E?void 0:d[E];if(L){const o=t=>Ze(e.hass,t),{stats:n}=L,a=[{name:o("box_highest"),value:C(L,n.max)},{name:o("box_upper_quartile"),value:C(L,n.q3)},{name:o("box_median"),value:C(L,n.median),color:L.series.color},{name:o("box_lower_quartile"),value:C(L,n.q1)},{name:o("box_lowest"),value:C(L,n.min)},{name:o("box_mean"),value:C(L,n.mean)},{name:o("box_count"),value:String(n.count)}];if(n.outliers.length){const e=n.outliers.length;a.push({name:o("box_outliers"),value:e>=60?`${e}+`:String(e)})}const r=fl(L,h,M),i=f?`${function(e,t,o){const n="month"===t?{month:"long",year:"numeric"}:"hour"===t?{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:Fn(o)}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short"},a=o?.locale?.language??"en",r=`${a}|${t}|${On(o)}|${n.hour12}`;let i=ml.get(r);if(!i){try{i=new Intl.DateTimeFormat(a,{...n,timeZone:On(o)})}catch{i=new Intl.DateTimeFormat("en",n)}ml.set(r,i)}return i.format(e)}(t.bounds[L.category],t.unit,e.hass)}${h>1?` · ${L.series.entity.name}`:""}`:L.series.entity.name;j=ll(g?{x:_(r.centre)/Ga,y:w(n.median)/Xa,plotWidth:kr(e),title:i,rows:a,band:[_(L.category-.5)/Ga,_(L.category+.5)/Ga]}:{x:w(n.high)/Ga,y:_(r.centre)/Xa,plotWidth:kr(e),title:i,rows:a})}return Nr(r,a,Ar({axes:x,ctx:e,content:z,label:S,overlay:B`${"over"===r.header?Tr(a):Z}${j}`,hover:A?il(e,(e,t)=>function(e,t,o,n){const a=n*t-.5,r=Math.min(t-1,Math.max(0,Math.round(a))),i=a-r+.36;if(o>1&&(i<0||i>=ul))return;const s=Math.min(o-1,Math.max(0,Math.floor(i/(ul/o)))),l=e.findIndex(e=>e.category===r&&e.slot===s);return l<0?void 0:l}(d,u,h,g?e:t)):void 0,...g?{xLabel:y}:{yLabel:y,xLabel:t=>dr(t,ol(x),e.hass)}}))}},_l=["entity","time"],wl=[2,80],$l=[2,30],kl=[0,20];function Ml(e,t){const o=new Set;for(const i of e)for(const e of i)e.t!==t&&o.add(e.t);const n=[...o].sort((e,t)=>e-t),a=e.map(()=>-1),r=[];for(const i of n){const t=[];let o=!0;e.forEach((e,n)=>{for(;a[n]+1<e.length&&e[a[n]+1].t<=i;)a[n]++;const r=e[a[n]];r&&null!==r.v?t.push(r.v):o=!1}),o&&r.push({t:i,v:t})}return r}function zl(e,t){if(e.length<=t)return e;const o=e.length/t,n=[];for(let a=0;a<t-1;a++)n.push(e[Math.floor(a*o)]);return n.push(e[e.length-1]),n}function Sl(e,t){let o=Math.floor(e/1e3)^Math.imul(t+1,2654435769)|0;return o=Math.imul(o^o>>>16,73244475),o=Math.imul(o^o>>>16,73244475),o^=o>>>16,(o>>>0)/4294967295*2-1}function Al(e,[t,o],n,a){const r=n*n+(a*a-n*n)*(o>t?Math.min(1,Math.max(0,(e-t)/(o-t))):.5);return Math.round(10*Math.sqrt(r))/10}const El=e=>"number"==typeof e&&Number.isFinite(e);function Cl(e,t,[o,n]){const a=e[t];if(void 0!==a&&(!El(a)||a<o||a>n))throw new Error(`"${t}" must be a number from ${o} to ${n}`)}function jl(e,t){return{against:"bubble"===t?"entity":e.against??"entity",dotSize:El(e.dot_size)?e.dot_size:6,jitter:El(e.jitter)?e.jitter:0,minSize:El(e.min_size)?e.min_size:6,maxSize:El(e.max_size)?e.max_size:32}}function Ll(e,t){if(Qa(e),xn(e),Gr(e),jr(e),Js(e),Cl(e,"jitter",kl),"scatter"===t){if(void 0!==e.against&&!_l.includes(e.against))throw new Error(`"against" must be one of: ${_l.join(", ")}`);Cl(e,"dot_size",$l)}else{Cl(e,"min_size",wl),Cl(e,"max_size",wl);const o=jl(e,t);if(o.minSize>o.maxSize)throw new Error('"min_size" must not be above "max_size"')}}function Nl(e,t){return Ce(e.entity.config.color??Ja[(e.index-t)%Ja.length])}const Tl=(e,t,o)=>ur(dr(e,t.entity.decimals,o),t.entity.unit);function Ol(e,t,o=Date.now()){const n=jl(e.raw,t),{against:a}=n,r=Lr(e.raw),i=er(e,o),s=nr(i,e),l="time"===a,c=l?0:1,d=i.series.map((e,o)=>l?e.color:"bubble"===t?1===o?Nl(e,1):void 0:0===o?void 0:Nl(e,c)),u=function(e,t,o,n){const{show:a}=o.config;return a.name||a.value?B`<div class="series-header">
    ${e.map((e,r)=>{const i=t[r],s=void 0!==i?B`<span class="swatch" style="background:${i}"></span>`:B`<span class="role"
              >${Ze(o.hass,"bubble"===n&&2===r?"bubble_role_size":"scatter_role_x")}</span
            >`;return B`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
        ${s} ${a.name?B`<span class="series-name">${e.entity.name}</span>`:Z}
        ${a.value?B`<span class="series-value">${e.entity.display}</span>`:Z}
      </div>`})}
  </div>`:Z}(i.series,d,e,t),h=s===Z&&u===Z?Z:B`${s}${u}`,p="over"===r.header?{...r,header:"above"}:r;if(i.series.length<function(e,t){return"bubble"===e?3:"entity"===t?2:1}(t,a))return Nr(p,h,B`<div class="chart-message">
        ${Ze(e.hass,"bubble"===t?"bubble_needs_three":"scatter_needs_two")}
      </div>`);const m=sr(i,e);if(m)return Nr(p,h,m);const f="history"!==i.source||i.group?void 0:Math.min(i.range.end,o),g=function(e,t,o,n){const{series:a}=e;if("time"===o)return a.map(e=>({s:e,samples:zl(e.points.filter(e=>null!==e.v&&e.t!==n&&!e.carried).map(e=>({t:e.t,v:[e.t,e.v]})),800)}));if("bubble"===t){const[e,t,o]=a;return[{s:t,samples:zl(Ml([e.points,t.points,o.points],n),400)}]}const[r,...i]=a;return i.map(e=>({s:e,samples:zl(Ml([r.points,e.points],n),800)}))}(i,t,a,f),v=g.flatMap(e=>e.samples);if(0===v.length)return Nr(p,h,B`<div class="chart-message">${Ze(e.hass,"chart_no_data")}</div>`);const y=v.map(e=>e.v[1]),b=[Math.min(...y),Math.max(...y)];let x,_;if(l)x=Mr(e,i.range,ln(i.series.map(e=>e.points)));else{const t=v.map(e=>e.v[0]);x=tl(e,[Math.min(...t),Math.max(...t)],b,{x:el(e.raw)});const o=ol(x);_=t=>dr(t,o,e.hass)}const{scales:w}=x,$=kr(e)||1,k=n.jitter*Ga/$,M=n.jitter*Xa/(r.compact?96:162);const z="bubble"===t?v.map(e=>e.v[2]):[],S=z.length?[Math.min(...z),Math.max(...z)]:[0,0],A=g.flatMap(({s:e,samples:o})=>{const a=l?e.color:Nl(e,c);return o.map(o=>({series:e,t:o.t,x:w.x(o.v[0])+(k?Sl(o.t,2*e.index)*k:0),y:w.y(o.v[1])+(M?Sl(o.t,2*e.index+1)*M:0),v:l?[o.v[1]]:o.v,color:a,d:"bubble"===t?Al(o.v[2],S,n.minSize,n.maxSize):void 0}))}),E="bubble"===t?q`${[...A].sort((e,t)=>(t.d??0)-(e.d??0)).map(e=>q`<path class="bubble" d=${bo([[e.x,e.y]])} stroke=${e.color} style="stroke-width:${e.d}px"></path>`)}`:q`${g.map(({s:e})=>{const t=A.filter(t=>t.series===e);return t.length?q`<path class="dots" data-series=${e.index} d=${bo(t.map(e=>[e.x,e.y]))}
                stroke=${t[0].color} style="stroke-width:${n.dotSize}px"></path>`:Z})}`,C=Yr(e.raw),j=C?al(e.host):void 0,L=void 0!==j?A[j]:void 0,N=Ze(e.hass,"chart_aria",{style:Ze(e.hass,`editor_style_${t}`),names:i.series.map(e=>e.entity.name).join(", ")}),T=Math.max(16,"bubble"===t?n.maxSize/2:n.dotSize);return Nr(r,h,B`${Ar({axes:x,ctx:e,content:E,label:N,xLabel:_,overlay:B`${"over"===r.header?Tr(h):Z}
      ${L?Fl(L,i,t,a,e,$):Z}`,hover:C?il(e,(e,t,o,n)=>function(e,t,o,n,a,r=24){let i,s=r*r;const l=t*n,c=o*a;return e.forEach(([e,t],o)=>{const r=e/Ga*n-l,d=t/Xa*a-c,u=r*r+d*d;u<=s&&(s=u,i=o)}),i}(A.map(e=>[e.x,e.y]),e,t,o,n,T)):void 0})}
    ${"bubble"===t?function(e,[t,o],n,a){const r=(t,o)=>B`<span class="size-item"
      ><span class="size-dot" style="width:${o}px;height:${o}px"></span>${Tl(t,e,a)}</span
    >`;return B`<div class="size-legend" aria-hidden="true">
    <span class="size-name">${e.entity.name}</span>
    ${r(t,Al(t,[t,o],n.minSize,n.maxSize))}
    ${o>t?r(o,Al(o,[t,o],n.minSize,n.maxSize)):Z}
  </div>`}(i.series[2],S,n,e.hass):Z}`)}function Fl(e,t,o,n,a,r){const i="time"===n?[e.series]:"bubble"===o?t.series.slice(0,3):[t.series[0],e.series];return ll({x:e.x/Ga,y:e.y/Xa,plotWidth:r,title:Hn(e.t,a.hass),dot:e.color,rows:i.map((t,o)=>({color:t===e.series?e.color:void 0,name:t.entity.name,value:Tl(e.v[o],t,a.hass)}))})}const Pl=r`
  ${cr}
  ${Er}
  ${ti}
  ${Or}
  ${cl}
  .plot .dots,
  .plot .bubble {
    fill: none;
    stroke-linecap: round;
  }
  .plot .dots {
    stroke-opacity: 0.8;
  }
  .plot .bubble {
    stroke-opacity: 0.55;
  }
  .role {
    flex: none;
    align-self: center;
    font-size: 0.6875em;
    line-height: 1;
    padding: 2px 5px;
    border-radius: 8px;
    color: var(--secondary-text-color);
    border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
  }
  .size-legend {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 12px;
    padding-top: 6px;
    font-size: 0.8125em;
    color: var(--secondary-text-color);
  }
  .size-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .size-dot {
    flex: none;
    border-radius: 50%;
    border: 1px solid var(--secondary-text-color);
    background: color-mix(in srgb, var(--secondary-text-color) 25%, transparent);
    box-sizing: border-box;
  }
  .frame.compact .size-legend {
    padding-top: 2px;
  }
`;function Dl(e){rr(e),$r(e),Wr(e),rl(e)}const Ul=fs.map(e=>"x_axis"===e.name?{...e,name:"xy_x_axis"}:e);const Hl=(e,t,o=1)=>({number:{min:e,max:t,step:o,mode:"box",unit_of_measurement:"px"}}),Il={scatter:[...ls,{name:"against",path:["against"],default:"entity"},{name:"dot_size",path:["dot_size"],default:6},{name:"jitter",path:["jitter"],default:0},...Ks,...Ul,...ps],bubble:[...ls,{name:"min_size",path:["min_size"],default:6},{name:"max_size",path:["max_size"],default:32},{name:"jitter",path:["jitter"],default:0},...Ks,...Ul,...ps]};function Rl(e){return t=>{const o="scatter"===e&&"time"===t.config.against,n=$s(`${e}|${cs(t.config)}|${o}`,t.hass,()=>{return[...ds(t.hass,t.config),..."scatter"===e?[{name:"against",selector:ss(t.hass,"against",_l)},{type:"grid",name:"",schema:[{name:"dot_size",selector:Hl($l[0],$l[1])},{name:"jitter",selector:Hl(kl[0],kl[1])}]}]:[{type:"grid",name:"",schema:[{name:"min_size",selector:Hl(wl[0],wl[1])},{name:"max_size",selector:Hl(wl[0],wl[1])}]},{name:"jitter",selector:Hl(kl[0],kl[1])}],...o?[]:Qs,...(n=t.hass,[{type:"grid",name:"",schema:[{name:"xy_x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:ss(n,"axis_labels",hn)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]),...ms(t.hass)];var n});return ks(t,"chart",n,Il[e])}}const Bl=[{name:"dot_color",path:["color"]}],ql=[{name:"dot_color",selector:{text:{}}}];function Vl(){return{schema:ql,fields:Bl}}const Zl={layout:"chart",group:"distribution",height:270,styles:Pl,thumbnail:()=>q`
    <g fill="var(--primary-color, #03a9f4)" fill-opacity="0.6">
      <circle cx="14" cy="28" r="4" /><circle cx="27" cy="20" r="7" /><circle cx="44" cy="24" r="5" />
      <circle cx="52" cy="11" r="8" /><circle cx="36" cy="33" r="3" />
    </g>`,validate:e=>Ll(e,"bubble"),editor:Rl("bubble"),entityFields:()=>Vl(),disconnect:Dl,render:e=>Ol(e,"bubble")},Wl=["auto","none","hour","day","week","month"],Yl=["auto","mean","sum","min","max","first","last","change"],Gl={last:7,unit:"day"},Xl={hour:1/24,day:1,week:7,month:30};function Jl(e){if(e.calendar)return{day:"hour",week:"day",month:"day",year:"month"}[e.calendar];const t=e.last*Xl[e.unit];return t<=2?"hour":t<=62?"day":t<=190?"week":"month"}function Kl(e){if(e.config.attribute)return!1;const t=e.stateObj?.attributes?.state_class;return"total_increasing"===t||"total"===t}function Ql(e,t){const o={...e,period:e.period??{...Gl}};return"none"===e.group_by?delete o.group_by:void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=Jl(da(o.period))),void 0!==e.aggregate&&"auto"!==e.aggregate||(o.aggregate=!0!==e.range&&t.length>0&&t.every(Kl)?"change":"mean"),o}function ec(e,t){const o=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t),n=e.map(e=>new Map(e.map(e=>[e.t,e]))),a=new Map;for(const i of e)for(const e of i)void 0!==e.end&&a.set(e.t,e.end);const r={times:[],ends:[],values:e.map(()=>[]),lows:e.map(()=>[]),highs:e.map(()=>[])};return o.forEach((i,s)=>{const l=Math.min(a.get(i)??o[s+1]??t,t);l>i&&(r.times.push(i),r.ends.push(l),e.forEach((e,t)=>{const o=n[t].get(i);r.values[t].push(o?o.v:Dr(e,i)),r.lows[t].push(o?.min??null),r.highs[t].push(o?.max??null)}))}),r}function tc(e,t,o,n){const a=t-e,r=.8*a/n,i=n>1?.12*r:0;return[e+.2*a/2+o*r+i/2,r-i]}function oc(e,t=!0){let o=t?0:1/0,n=t?0:-1/0;for(const a of e)null!==a&&Number.isFinite(a)&&(o=Math.min(o,a),n=Math.max(n,a));return o===1/0?void 0:[o,n]}const nc={hour:66,day:52,week:52,month:60};const ac={hour:"hour",day:"day",week:"day",month:"month"};function rc(e,t,o,n){if("hour"===o)return`${Hn(e,n)} – ${Un(t,n)}`;const a="day"===o?{weekday:"short",day:"numeric",month:"short"}:"week"===o?{day:"numeric",month:"short"}:{month:"long",year:"numeric"};let r;try{r=new Intl.DateTimeFormat(n?.locale?.language??"en",{...a,timeZone:On(n)})}catch{r=new Intl.DateTimeFormat("en",a)}return"week"===o?r.formatRange(e,t-1):r.format(e)}const ic=(e,t)=>Math.round(e/t*1e4)/100+"%",sc=e=>Math.min(Xa,Math.max(0,e));function lc(e,t,o,n,a,r,i,s){const l=sc(e.y(a)),c=sc(e.y(n));return B`<div
    class="col ${i?`cap-${i}`:""} ${a<=0&&"both"!==i?"down":""}"
    data-series=${s}
    style="left:${ic(t,Ga)};width:${ic(o,Ga)};top:${ic(l,Xa)};height:${ic(c-l,Xa)};background:${r}"
  ></div>`}function cc(e,t,o,n,a,r){return B`<span
    class="point-label col-label ${r?"below":""}"
    style="left:${ic(t,Ga)};top:${ic(sc(o),Xa)}"
    >${dr(n,a,e.hass)}</span
  >`}function dc(e,t,o,n){const a=e.y(n);return a<0||a>Xa?B``:B`<div
    class="target-mark"
    style="left:${ic(t-.1*o,Ga)};width:${ic(1.2*o,Ga)};top:${ic(a,Xa)}"
  ></div>`}const uc=ls.map(e=>"period_last"===e.name?{...e,default:Gl.last}:"period_unit"===e.name?{...e,default:Gl.unit}:"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),hc=[...uc,{name:"stack",path:["stack"],default:"none"},{name:"color_by",path:["color_by"],default:"series"},{name:"range",path:["range"],default:!1},{name:"column_labels",path:["labels"],default:!1},{name:"rounded",path:["rounded"],default:!0},...fs,...ps];const pc=[{name:"column_color",path:["color"]}],mc=r`
  .columns {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .col {
    position: absolute;
    box-sizing: border-box;
    transform-origin: 50% 100%;
    animation: cd-col-grow var(--cd-duration) var(--cd-easing);
  }
  .col.down {
    transform-origin: 50% 0;
  }
  .col.cap-top {
    border-radius: var(--r) var(--r) 0 0;
  }
  .col.cap-bottom {
    border-radius: 0 0 var(--r) var(--r);
  }
  .col.cap-both {
    border-radius: var(--r);
    opacity: 0.75;
  }
  .col-mark {
    position: absolute;
    height: 0;
    border-top: 2px solid var(--card-background-color, #fff);
    transform: translateY(-1px);
  }
  .target-mark {
    position: absolute;
    height: 0;
    border-top: 2px solid var(--primary-text-color);
    transform: translateY(-1px);
    border-radius: 1px;
  }
  .slot-hover {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--primary-text-color) 7%, transparent);
  }
  .point-label.col-label.below {
    transform: translate(-50%, 4px);
  }
  :host([static]) .col {
    animation: none;
  }
  @keyframes cd-col-grow {
    from {
      transform: scaleY(0);
    }
  }
  /* Labels over the plot stay readable above the columns. */
  .axes-inside .y-axis,
  .axes-inside .x-axis {
    z-index: 1;
  }
`,fc={layout:"chart",group:"history",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    ${mc}
  `,thumbnail:()=>q`
    <path d="M7 36 V22 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M19 36 V12 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M31 36 V18 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M43 36 V8 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M55 36 V26 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M4 36.5 H62" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(e){if(void 0!==e.group_by&&!(e=>Wl.includes(e))(e.group_by))throw new Error(`"group_by" must be one of: ${Wl.join(", ")}`);if(void 0!==e.aggregate&&!Yl.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Yl.join(", ")}`);const t={...e};"auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,Qa(t),xn(e),Gr(e),jr(e),Pr(e);for(const o of["range","rounded","labels"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);if(void 0!==e.color_by&&"series"!==e.color_by&&"bands"!==e.color_by)throw new Error('"color_by" must be one of: series, bands')},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},n=$s(`column|${cs(o)}|${t}`,e.hass,()=>[...ds(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:ss(e.hass,"group_by",Wl)},...t?[]:[{name:"aggregate",selector:ss(e.hass,"aggregate",Yl)}]]},{type:"grid",name:"",schema:[{name:"stack",selector:ss(e.hass,"stack",Fr)},{name:"color_by",selector:ss(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"range",selector:{boolean:{}}},{name:"column_labels",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...gs(e.hass),...ms(e.hass)]);return ks({...e,commit:t=>e.commit(function(e){const t=e.period;return t&&"object"==typeof t&&void 0===t.calendar?void 0!==t.last&&void 0!==t.unit?e:{...e,period:{last:Gl.last,unit:Gl.unit,...t}}:e}(t))},"chart",n,hc)},entityFields:e=>({schema:$s("column-entity",e,()=>[{name:"column_color",selector:{text:{}}}]),fields:pc}),disconnect(e){rr(e),$r(e),Wr(e)},render:function(e){const t={...e,raw:Ql(e.raw,e.items)},o=t.raw,n=!0===o.range,a=er(t,Date.now(),{range:n}),r=nr(a,t),i=ir(a,t),s=r===Z&&i===Z?Z:B`${r}${i}`,l=sr(a,t),c=Lr(o);if(l)return Nr("over"===c.header?{...c,header:"above"}:c,s,l);const d=n?"none":o.stack??"none",u=a.group,h=ec(a.series.map(e=>e.points),u?1/0:a.range.end),p=u&&h.ends.length?{...a.range,end:Math.max(a.range.end,...h.ends)}:a.range,m="none"===d?void 0:Ur(h.values,d),f=a.series.map(e=>e.entity.target).filter(e=>null!==e);let g;g=m?Ir(m):n?oc([...h.lows.flat(),...h.highs.flat(),...h.values.flat(),...f],!1):oc([...h.values.flat(),...t.config.show.target?f:[]]);let v=o;"percent"===d?v={y_min:g[0]<0?-100:0,y_max:g[1]>0?100:0,...o}:!n&&g&&(v=function(e,t){const o={...t};return void 0===t.y_min&&e[0]>=0&&(o.y_min=0),void 0===t.y_max&&e[1]<=0&&(o.y_max=0),o}(g,o));let y=Mr({...t,raw:v},p,g);const{scales:b}=y,x=h.times.map((e,t)=>(e+h.ends[t])/2),_=new Map(x.map((e,t)=>[e,t]));if(u&&x.length){const e=(w=x.length,$=kr(t)/nc[u.unit],Math.max(1,Math.ceil(w/Math.max(1,$)))),o=ac[u.unit],n="day"===u.unit&&x.length<=8?6048e5:a.range.end-a.range.start;y={...y,unit:o,times:x.filter((t,o)=>o%e===0),label:e=>In(h.times[_.get(e)],o,n,t.hass)}}var w,$;const k=function(e,t,o,n,a,r){const i=e.raw,s=t.series,l=s.length,c=!0===i.range,d="bands"===i.color_by,u=kr(e)/Ga,h=!0===i.labels&&"percent"!==a&&o.times.length*(r?1:l)<=60,p=e.config.show.target&&"percent"!==a,m=Math.min(Math.max(0,n.domain[0]),n.domain[1]),f=(e,t)=>d?Ce(Te(t,e.entity.bands).color):e.color,g={columns:[],labels:[],targets:[]},v=r?Hr(o.values):[];return o.times.forEach((t,a)=>{const i=n.x(t),d=n.x(o.ends[a]);if(r){const[t,l]=tc(i,d,0,1);let c=-1,m=-1;r.forEach((e,t)=>{const o=e[a];o&&o[1]>o[0]&&(c=t),o&&o[1]<o[0]&&(m=t)}),r.forEach((e,r)=>{const i=e[a];if(!i||i[0]===i[1])return;const d=o.values[r][a],u=r===c?"top":r===m?"bottom":"";g.columns.push(lc(n,t,l,Math.min(...i),Math.max(...i),f(s[r],d),u,r))});const y=v[a];if(h&&null!==y&&l*u>=24){const o=y>=0?Math.max(0,...r.map(e=>e[a]?.[1]??0)):Math.min(0,...r.map(e=>e[a]?.[1]??0)),i=Math.max(...s.map(e=>e.entity.decimals));g.labels.push(cc(e,t+l/2,n.y(o),y,i,y<0))}const b=s[0].entity.target;return void(p&&null!==b&&g.targets.push(dc(n,t,l,b)))}s.forEach((t,r)=>{const s=o.values[r][a];if(null===s)return;const[v,y]=tc(i,d,r,l);if(c){const e=o.lows[r][a]??s,i=o.highs[r][a]??s;g.columns.push(lc(n,v,y,e,i,f(t,s),"both",r)),g.columns.push(B`<div
            class="col-mark"
            style="left:${ic(v,Ga)};width:${ic(y,Ga)};top:${ic(sc(n.y(s)),Xa)}"
          ></div>`)}else g.columns.push(lc(n,v,y,Math.min(m,s),Math.max(m,s),f(t,s),s>=m?"top":"bottom",r)),h&&y*u>=24&&g.labels.push(cc(e,v+y/2,n.y(s),s,t.entity.decimals,s<m));p&&null!==t.entity.target&&g.targets.push(dc(n,v,y,t.entity.target))})}),g}(t,a,h,b,d,m),M=a.series.map((e,t)=>({...e,points:x.map((e,o)=>({t:e,v:h.values[t][o],min:h.lows[t][o],max:h.highs[t][o]}))})),z={dotY:()=>null,heading:e=>{const o=_.get(e);return void 0===o?Hn(e,t.hass):u?rc(h.times[o],h.ends[o],u.unit,t.hass):Hn(h.times[o],t.hass)}},S=(e,o)=>dr(e,o.entity.decimals,t.hass);if(n&&(z.text=(e,t)=>{if(!t||null===t.v)return"—";const o=t.min??t.v,n=t.max??t.v;return ur(`${S(o,e)} – ${S(n,e)}`,e.entity.unit)}),m){const e=Hr(h.values),o=Kr(M),n=Math.max(...M.map(e=>e.entity.decimals));z.footer=a=>Qr(t,e[_.get(a[0]?.p?.t??NaN)??-1]??null,o,n),"percent"===d&&(z.text=(e,t)=>{const o=t?m[e.index][_.get(t.t)??-1]:null;return t&&null!==t.v&&o?`${ur(S(t.v,e),e.entity.unit)} · ${Math.round(Math.abs(o[1]-o[0]))} %`:"—"})}const A=Yr(o),E=A?Zr(t.host):void 0,C=void 0===E?void 0:_.get(E),j=void 0===C?Z:B`<div
          class="slot-hover"
          style="left:${ic(b.x(h.times[C]),Ga)};width:${ic(b.x(h.ends[C])-b.x(h.times[C]),Ga)}"
        ></div>`,L=Ze(t.hass,"chart_aria",{style:Ze(t.hass,"editor_style_column"),names:a.series.map(e=>e.entity.name).join(", ")}),N=!1===o.rounded?0:4;return Nr(c,s,Ar({axes:y,ctx:t,content:q``,label:L,overlay:B`<div class="columns" style="--r:${N}px">${j}${k.columns}${k.targets}</div>
        <div class="point-labels">${k.labels}</div>
        ${"over"===c.header?Tr(s):Z}
        ${A?ei(t,M,b,E,kr(t),z):Z}`,hover:A?Xr(t,p,M.map(e=>e.points)):void 0}))}},gc={from:0,to:1};const vc=(e,t,o)=>Math.min(o,Math.max(t,e));function yc(e,t){const o=vc(t,0,1);let n=vc(e.to-e.from,o,1);Number.isFinite(n)||(n=1);const a=vc(Number.isFinite(e.from)?e.from:0,0,1-n);return{from:a,to:a+n}}function bc(e){return e.from>1e-9||e.to<1-1e-9}function xc(e,t,o,n){const a=e.to-e.from,r=e.from+vc(t,0,1)*a,i=vc(a/o,n,1),s=r-vc(t,0,1)*i;return yc({from:s,to:s+i},n)}function _c(e,t){const o=e.to-e.from,n=vc(e.from+t,0,1-o);return{from:n,to:n+o}}function wc(e,t,o,n){const a=e.to-e.from,r=e.from+vc(Math.min(t,o),0,1)*a,i=e.from+vc(Math.max(t,o),0,1)*a;if(i-r>=n)return{from:r,to:i};const s=(r+i)/2;return yc({from:s-n/2,to:s+n/2},n)}function $c(e,t){const o=e.end-e.start;return{start:e.start+t.from*o,end:e.start+t.to*o}}function kc(e,t){if(0===e.length)return e;let o=0,n=e.length;for(;o<n;){const a=o+n>>1;(e[a].end??e[a].t)<t.start?o=a+1:n=a}const a=Math.max(0,o-1);let r=o;for(;r<e.length&&e[r].t<=t.end;)r++;const i=e.slice(a,Math.min(e.length,r+1));return i.length===e.length?e:i}const Mc=new WeakMap;function zc(e,t){const o={zoom:!0===(n=e.raw).zoom,overview:!0===n.overview};var n;const a=t.range.end-t.range.start,r=a>0?Math.min(1,function(e){return e.group?2*{hour:36e5,day:864e5,week:6048e5,month:2592e6}[e.group.unit]:3e5}(t)/a):1,i=`${JSON.stringify(t.period)}|${t.back}|${t.group?.unit??""}|${t.source}`,s=function(e,t){let o=Mc.get(e);return o&&o.key===t||(o={key:t,window:gc,pointers:new Map},Mc.set(e,o)),o}(e.host,i);o.zoom||o.overview||(s.window=gc);const l=yc(s.window,r),c=t=>{const o=yc(t,r);o.from===s.window.from&&o.to===s.window.to||(s.window=o,e.requestUpdate())};return{options:o,window:l,zoomed:bc(l),range:$c(t.range,l),minSpan:r,current:()=>yc(s.window,r),set:c,reset:()=>c(gc)}}const Sc=e=>{const t=e.currentTarget.getBoundingClientRect();return{f:t.width>0?vc((e.clientX-t.left)/t.width,0,1):0,width:t.width}};function Ac(e){try{e.currentTarget.setPointerCapture?.(e.pointerId)}catch{}}const Ec=e=>e?.leave({pointerType:"mouse"});function Cc(e,t,o){const n=Mc.get(e.host),a=()=>{n.gesture=void 0,n.select&&(n.select=void 0,e.requestUpdate())};return{down(e){const{f:a,width:r}=Sc(e);if(n.pointers.set(e.pointerId,a),2===n.pointers.size){const[e,a]=[...n.pointers.values()];return n.gesture={kind:"pinch",w0:t.current(),start:e<=a?[e,a]:[a,e]},n.select=void 0,void Ec(o)}if(!(n.pointers.size>2)){if("mouse"===e.pointerType&&0===e.button){const o=t.current();n.gesture={kind:bc(o)?"pan":"select",x0:a,w0:o,moved:!1,px:r},Ac(e)}o?.move(e)}},move(a){if(!n.pointers.has(a.pointerId))return void o?.move(a);const{f:r}=Sc(a);n.pointers.set(a.pointerId,r);const i=n.gesture;if("pinch"===i?.kind){if(n.pointers.size<2)return;const[e,o]=[...n.pointers.values()];return void t.set(function(e,t,o,n){const a=e.to-e.from,r=e.from+t[0]*a,i=e.from+t[1]*a,s=o[1]-o[0];if(Math.abs(s)<.02||Math.abs(t[1]-t[0])<.02)return _c(e,-((o[0]+o[1])/2-(t[0]+t[1])/2)*a);const l=vc((i-r)/s,n,1),c=r-o[0]*l;return yc({from:c,to:c+l},n)}(i.w0,i.start,e<=o?[e,o]:[o,e],t.minSpan))}if(i&&("pan"===i.kind||"select"===i.kind))return!i.moved&&Math.abs(r-i.x0)*i.px<4?void o?.move(a):(i.moved||Ec(o),i.moved=!0,void("pan"===i.kind?t.set(_c(i.w0,-(r-i.x0)*(i.w0.to-i.w0.from))):(n.select=[i.x0,r],e.requestUpdate())));o?.move(a)},up(e){const{f:o,width:r}=Sc(e),i=n.gesture;if(n.pointers.delete(e.pointerId),"pinch"===i?.kind)return void(0===n.pointers.size&&(n.gesture=void 0));"select"===i?.kind&&i.moved&&t.set(wc(i.w0,i.x0,o,t.minSpan));const s=!i||!("moved"in i)||!i.moved;if(a(),"mouse"!==e.pointerType&&s){const a=e.timeStamp||Date.now(),i=n.lastTap;i&&a-i.at<300&&Math.abs(o-i.x)*r<30?(n.lastTap=void 0,t.reset()):n.lastTap={at:a,x:o}}},cancel(e){n.pointers.delete(e.pointerId),"pinch"===n.gesture?.kind&&n.pointers.size>=2||(a(),o?.leave(e))},leave(e){n.gesture&&"mouse"===e.pointerType||(n.pointers.delete(e.pointerId),o?.leave(e))},wheel(e){const{f:o}=Sc(e);if(e.ctrlKey||e.metaKey){e.preventDefault();const n=1===e.deltaMode?16*e.deltaY:e.deltaY;return void t.set(xc(t.current(),o,Math.exp(-vc(n,-100,100)/200),t.minSpan))}const n=e.shiftKey&&0===e.deltaX?e.deltaY:e.deltaX,a=t.current();if(bc(a)&&Math.abs(n)>Math.abs(e.shiftKey?0:e.deltaY)){e.preventDefault();const{width:o}=Sc(e);t.set(_c(a,n/Math.max(o,1)*(a.to-a.from)))}},dblclick(){t.reset()}}}function jc(e,t){const o=Mc.get(e.host),n=o?.select,a=n?B`<div
        class="zoom-select"
        style="left:${100*Math.min(...n)}%;width:${100*Math.abs(n[1]-n[0])}%"
      ></div>`:Z,r=t.zoomed?B`<button
        class="zoom-reset"
        title=${Ze(e.hass,"zoom_reset")}
        @pointerdown=${e=>e.stopPropagation()}
        @click=${e=>{e.stopPropagation(),t.reset()}}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${Lc}></path></svg>
        <span>${Ze(e.hass,"zoom_reset")}</span>
      </button>`:Z;return a===Z&&r===Z?Z:B`${a}${r}`}const Lc="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z";function Nc(e,t){const o=ln(e.map(e=>e.points));if(!o)return q``;const[n,a]=cn(o),r=dn([t.start,t.end],[0,Ga]),i=dn([n,a],[38,2]);return q`${e.map(e=>{const t=Ya(Rn(e.points,200)).map(e=>1===e.length?`M${r(e[0].t).toFixed(1)},${i(e[0].v).toFixed(1)}h0.5`:`M${e.map(e=>`${r(e.t).toFixed(1)},${i(e.v).toFixed(1)}`).join("L")}`).join("");return q`<path d=${t} fill="none" stroke=${e.color}></path>`})}`}function Tc(e,t,o,n){const a=Mc.get(e.host),r=t.window,i=e=>Sc(e),s=$c(o,r),l=Ze(e.hass,"zoom_window",{from:Hn(s.start,e.hass),to:Hn(s.end,e.hass)}),c=e=>Math.round(1e4*e)/100+"%";return B`<div
    class="overview ${t.zoomed?"zoomed":""}"
    @pointerdown=${e=>{if(e.button>0)return;e.stopPropagation();const{f:o,width:n}=i(e),r=t.current(),s=10/Math.max(n,1);let l="new";bc(r)&&(Math.abs(o-r.from)<=s?l="left":Math.abs(o-r.to)<=s?l="right":o>r.from&&o<r.to&&(l="move")),a.gesture={kind:l,f0:o,w0:r,moved:!1,px:n},Ac(e)}}
    @pointermove=${e=>{const o=a.gesture;if(!o||!("f0"in o))return;const{f:n}=i(e);if(!o.moved&&Math.abs(n-o.f0)*o.px<4)return;o.moved=!0;const{w0:r}=o;"move"===o.kind?t.set(_c(r,n-o.f0)):"left"===o.kind?t.set({from:Math.min(n,r.to-t.minSpan),to:r.to}):"right"===o.kind?t.set({from:r.from,to:Math.max(n,r.from+t.minSpan)}):t.set(wc(gc,o.f0,n,t.minSpan))}}
    @pointerup=${()=>{const e=a.gesture;if(e&&"f0"in e&&(a.gesture=void 0,!e.moved&&"new"===e.kind&&bc(e.w0))){const o=e.w0.to-e.w0.from;t.set({from:e.f0-o/2,to:e.f0+o/2})}}}
    @pointercancel=${()=>a.gesture=void 0}
    @dblclick=${e=>{e.stopPropagation(),t.reset()}}
  >
    <svg class="overview-lines" viewBox="0 0 ${Ga} ${40}" preserveAspectRatio="none" aria-hidden="true">
      ${n}
    </svg>
    <div class="overview-shade" style="left:0;width:${c(r.from)}"></div>
    <div class="overview-shade" style="left:${c(r.to)};right:0"></div>
    <div
      class="overview-window"
      style="left:${c(r.from)};width:${c(r.to-r.from)}"
      tabindex="0"
      role="slider"
      aria-label=${Ze(e.hass,"zoom_window_label")}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round((r.from+r.to)/2*100)}
      aria-valuetext=${l}
      @keydown=${e=>{const o=t.current(),n=o.to-o.from,a=.5,r={ArrowLeft:()=>_c(o,-n/4),ArrowRight:()=>_c(o,n/4),ArrowUp:()=>xc(o,a,1.5,t.minSpan),ArrowDown:()=>xc(o,a,1/1.5,t.minSpan),"+":()=>xc(o,a,1.5,t.minSpan),"=":()=>xc(o,a,1.5,t.minSpan),"-":()=>xc(o,a,1/1.5,t.minSpan),Home:()=>_c(o,-1),End:()=>_c(o,1),Escape:()=>gc}[e.key];r&&(e.preventDefault(),e.stopPropagation(),t.set(r()))}}
    >
      <span class="overview-handle left"></span><span class="overview-handle right"></span>
    </div>
  </div>`}const Oc=r`
  .plot-area.zoomable {
    touch-action: pan-y;
  }
  .plot-area.zoomable.zoomed {
    cursor: grab;
  }
  .plot-area.zoomable.zoomed:active {
    cursor: grabbing;
  }
  .zoom-select {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--primary-color) 15%, transparent);
    border-left: 1px solid var(--primary-color);
    border-right: 1px solid var(--primary-color);
    pointer-events: none;
    z-index: 1;
  }
  .zoom-reset {
    position: absolute;
    top: 2px;
    right: 2px;
    /* Under the tooltip: the box only covers it while the pointer is away from the corner. */
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px 2px 6px;
    font: inherit;
    font-size: 11px;
    line-height: 18px;
    color: var(--primary-color);
    background: color-mix(in srgb, var(--card-background-color, #fff) 85%, transparent);
    border: 1px solid color-mix(in srgb, var(--primary-color) 40%, transparent);
    border-radius: 12px;
    cursor: pointer;
  }
  .zoom-reset svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
  }
  .zoom-reset:hover {
    background: color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color, #fff));
  }
  .zoom-reset:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .frame.compact .zoom-reset span {
    display: none;
  }
  .frame.compact .zoom-reset {
    padding: 2px;
  }
  .overview {
    position: relative;
    grid-column: 2;
    grid-row: 3;
    height: 32px;
    margin-top: 6px;
    border-radius: 4px;
    background: color-mix(in srgb, var(--primary-text-color) 4%, transparent);
    touch-action: none;
    cursor: crosshair;
    user-select: none;
    -webkit-user-select: none;
  }
  .frame.compact .overview {
    height: 22px;
    margin-top: 4px;
  }
  .overview-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .overview-lines path {
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
    opacity: 0.8;
  }
  .overview-shade {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--card-background-color, #fff) 60%, transparent);
    pointer-events: none;
  }
  .overview-window {
    position: absolute;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    border: 1px solid color-mix(in srgb, var(--primary-color) 70%, transparent);
    border-radius: 4px;
    background: color-mix(in srgb, var(--primary-color) 8%, transparent);
    cursor: grab;
  }
  .overview:not(.zoomed) .overview-window {
    border-color: transparent;
    background: none;
    cursor: crosshair;
  }
  .overview-window:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .overview-handle {
    position: absolute;
    top: 50%;
    width: 4px;
    height: 14px;
    border-radius: 2px;
    background: var(--primary-color);
    transform: translate(-50%, -50%);
    cursor: ew-resize;
  }
  .overview-handle.left {
    left: 0;
  }
  .overview-handle.right {
    left: 100%;
  }
  .overview:not(.zoomed) .overview-handle {
    display: none;
  }
  .plot-wrap.has-overview {
    grid-template-rows: minmax(0, 1fr) auto auto;
    height: 220px;
  }
  .frame.compact .plot-wrap.has-overview {
    height: 140px;
  }
`,Fc="chartdeck-sync";const Pc=new WeakMap;function Dc(e,t){const o=Pc.get(e);o&&window.dispatchEvent(new CustomEvent(Fc,{detail:{group:o.group,source:e,message:t}}))}function Uc(e){const t=Pc.get(e);t&&window.removeEventListener(Fc,t.listener),Pc.delete(e)}function Hc(e,t,o){const n="string"==typeof(a=e.raw).sync&&""!==a.sync.trim()?a.sync.trim():void 0;var a;let r=Pc.get(e.host);if(!n)return void(r&&Uc(e.host));if(!r||r.group!==n){r&&Uc(e.host);const t={group:n,handlers:new Map,ctx:e,listener:()=>{}};t.listener=e=>function(e,t){if(!t||t.group!==e.group||t.source===e.ctx.host)return;const o=t.message;if("hover"===o.type){if(o.t===e.remote)return;e.remote=o.t,e.ctx.requestUpdate()}else if("period"===o.type){const t={period:JSON.parse(o.period)};if(o.period!==e.period||!t.period.navigate||ma(e.ctx.host,t.period)===o.steps)return;fa(e.ctx.host,t.period,o.steps),e.steps=o.steps,e.ctx.requestUpdate()}e.handlers.get(o.type)?.(o)}(t,e.detail),window.addEventListener(Fc,t.listener),Pc.set(e.host,t),r=t}r.ctx=e,o!==r.sent&&(r.sent=o,Dc(e.host,{type:"hover",t:o}));const i=(e=>JSON.stringify(e.period))(t),s=t.period.navigate?ma(e.host,t.period):0;return r.period===i&&r.steps!==s&&Dc(e.host,{type:"period",period:i,steps:s}),r.period=i,r.steps=s,void 0===o?r.remote:void 0}const Ic=["series","bands"];function Rc(e,t,o){const n=e=>{const t=(Xa-o.y(e))/Xa;return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0},a=[];return t.forEach((e,o)=>{const r=Number.isFinite(e.from)?n(e.from):0,i=o+1<t.length?n(t[o+1].from):1,s=Ce(e.color);a.push(q`<stop offset=${r} stop-color=${s}></stop><stop offset=${i} stop-color=${s}></stop>`)}),q`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${Xa} y2="0">
    ${a}
  </linearGradient>`}function Bc(e,t,o,n,a){const r=vo(e.entity.config,a),i=Rn(e.points,500),s=Ya(i).map(o=>Wa(o.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join(""),l=r.dots?i.filter(e=>null!==e.v&&e.t!==n.start&&e.t!==n.end):[],c=l.length>0&&l.length<=200?q`<path
          class="dots"
          d=${bo(l.map(e=>[t.x(e.t),t.y(e.v)]))}
          fill="none"
          stroke=${o}
          style="stroke-width:${xo(r.width)}px"
        ></path>`:Z;return q`<g class="series" data-series=${e.index}>
    <path
      class="line ${e.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${o}
      style="stroke-width:${r.width}px"
    ></path>
    ${c}
  </g>`}function qc(e,t,o,n,a,r,i){const{range:s}=e;return ui(t.map(e=>({points:e.points.filter(e=>e.t>=o.start&&e.t<=o.end),decimals:e.entity.decimals,color:e.color})),a,{at:e=>[n.x(e.t)/Ga,n.y(e.v)/Xa],width:kr(i),height:r?96:162,skip:t=>void 0===e.group&&(t.t===s.start||t.t===s.end)},i.hass)}function Vc(e,t){const o="outside"===t.labels;return(e?110:180)-(o&&t.x?e?14:18:0)-(o&&t.y?6:0)}function Zc(e,t,o){const n=e.series.reduce((e,t)=>e+t.entity.name.length+t.entity.display.length+6,0);return{l:0,t:0,r:Math.min(o,8*n),b:t?24:34}}const Wc={layout:"chart",group:"history",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    ${Oc}
    ${Qi}
    ${hi}
    ${$i}
    ${Li}
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
  `,thumbnail:()=>q`
    <path d="M4 30 C14 28 16 14 26 16 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />
    <path d="M4 34 C16 33 22 26 32 28 S50 30 60 24" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(e){if(Qa(e),xn(e),Gr(e),$o(e),jr(e),function(e){for(const t of["zoom","overview"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`)}(e),Ri(e),function(e){const t=e;if(void 0!==t.labels&&"boolean"!=typeof t.labels)throw new Error('"labels" must be true or false');if(void 0!==t.labels_show&&!oi.includes(t.labels_show))throw new Error(`"labels_show" must be one of: ${oi.join(", ")}`);if(void 0!==t.labels_position&&!ni.includes(t.labels_position))throw new Error(`"labels_position" must be one of: ${ni.join(", ")}`);if(void 0!==t.labels_overlap&&"boolean"!=typeof t.labels_overlap)throw new Error('"labels_overlap" must be true or false')}(e),function(e){const t=e.extremes;if(void 0!==t){if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"extremes" must have "min", "max" (true or false) and "average"');const e=t;for(const t of["min","max"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"extremes.${t}" must be true or false`);if(void 0!==e.average&&!pi.includes(e.average))throw new Error(`"extremes.average" must be one of: ${pi.join(", ")}`)}for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o.extremes;if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"extremes" of ${o.entity} must be true or false`)}}(e),function(e){if(void 0!==e.sync&&("string"!=typeof e.sync||""===e.sync.trim()))throw new Error('"sync" must be a group name')}(e),function(e){if(void 0!==e.multiples&&"boolean"!=typeof e.multiples)throw new Error('"multiples" must be true or false');if(void 0!==e.multiples_scale&&!Ci.includes(e.multiples_scale))throw new Error(`"multiples_scale" must be one of: ${Ci.join(", ")}`);const t=e.multiples_columns;if(void 0!==t&&!(Number.isInteger(t)&&t>=1&&t<=6))throw new Error('"multiples_columns" must be a whole number from 1 to 6')}(e),void 0!==e.color_by&&!Ic.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Ic.join(", ")}`)},editor:function(e){const t=$s(`line|${cs(e.config)}|${o=e.config,!0===o?.labels?"labels":""}|${(e=>!0===e?.multiples?"multiples":"")(e.config)}`,e.hass,()=>{return[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:ss(e.hass,"curve",qa)},{name:"color_by",selector:ss(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:To},{name:"dots",selector:{boolean:{}}}]},...bs(e.hass,e.config),...gs(e.hass),{name:"y_scale",selector:ss(e.hass,"y_scale",un)},...vs,...ys,...(t=e.hass,[{type:"grid",name:"",schema:[{name:"extremes_max",selector:{boolean:{}}},{name:"extremes_min",selector:{boolean:{}}}]},{name:"extremes_average",selector:{select:{mode:"dropdown",options:pi.map(e=>({value:e,label:Ze(t,`editor_extremes_average_${e}`)}))}}}]),...xs,...ms(e.hass),..._s(e.hass,e.config)];var t});var o;return B`${ks(e,"chart",t,Ms)}${is(e)}`},entityFields:(e,t)=>{const o=Bo(e),n=Fo(!0===t.dots);return yi(vi(t))?{schema:Si(o,e),fields:Ei(n)}:{schema:o,fields:n}},watch:function(e){const t=new Set;for(const o of Bi(e))for(const e of[o.value,o.from,o.to,"state"===o.type?o.entity:void 0])Pi(e)&&t.add(e.trim());return[...t]},disconnect(e){rr(e),$r(e),Wr(e),function(e){Mc.delete(e)}(e),function(e){const t=Yi.get(e);t&&t.generation++,Yi.delete(e)}(e),Uc(e)},render(e){const t=er(e),o=Zr(e.host),n=Hc(e,t,o),a=nr(t,e),r=ir(t,e),i=a===Z&&r===Z?Z:B`${a}${r}`,s=sr(t,e),l=Lr(e.raw);if(s)return Nr("over"===l.header?{...l,header:"above"}:l,i,s);const c=function(e){if(!0===e.multiples)return{scale:e.multiples_scale??"auto",columns:e.multiples_columns}}(e.raw);if(c){const r="log"===e.raw.y_scale?{...t,series:t.series.map(e=>({...e,points:vr(e.points)}))}:t;return Nr({...l,header:"above"},a,ji(e,r,c,o??n,(t,a,i)=>function(e,t,o,n,a,r,i=Z,s=Zr(e.host)){const{scales:l}=n,c=ai(e.raw),d=Yr(e.raw),u="bands"===e.raw.color_by,h=u?q`${o.map(e=>Rc(`cd-bands-${e.index}${r}`,e.entity.bands,l))}`:Z,p=yo(o,t=>vo(t.entity.config,e.raw).onTop),m=q`${p.map(o=>Bc(o,l,u?`url(#cd-bands-${o.index}${r})`:o.color,t.range,e.raw))}`,f=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_line"),names:o.map(e=>e.entity.name).join(", ")});return Ar({axes:n,ctx:e,content:m,label:f,defs:h,overlay:B`${i} ${c?qc(t,o,t.range,l,c,!0,e):Z}
    ${d?ei(e,o,l,s,a):Z}`,hover:d?Xr(e,t.range,o.map(e=>e.points)):void 0})}(e,r,[t],a,i,`-${t.index}`,Z,o??n)))}const d=zc(e,t),u=d.range,h=d.zoomed?t.series.map(e=>({...e,points:kc(e.points,u)})):t.series,p="log"===e.raw.y_scale,m=p?h.map(e=>({...e,points:vr(e.points)})):h,f=(g=e.raw,v=e.hass,Bi(g).filter(e=>"line"===e.type).map(e=>qi(e.value,v)).filter(Fi)).filter(e=>!p||e>0).map(e=>({t:u.start,v:e}));var g,v;const y=ln([...m.map(e=>e.points),f]);if(p&&!y){const t=B`<div class="chart-message">${Ze(e.hass,"chart_log_nothing")}</div>`;return Nr("over"===l.header?{...l,header:"above"}:l,i,t)}const b=Mr(e,u,y),{scales:x}=b,_=Yr(e.raw)&&!function(e){const t=Mc.get(e)?.gesture;return!!t&&("pinch"===t.kind||"moved"in t&&t.moved)}(e.host),w="bands"===e.raw.color_by,$=w?q`${h.map(e=>Rc(`cd-bands-${e.index}`,e.entity.bands,x))}`:Z,k=yo(m,t=>vo(t.entity.config,e.raw).onTop),M=q`${k.map(o=>Bc(o,x,w?`url(#cd-bands-${o.index})`:o.color,t.range,e.raw))}`,z=Yr(e.raw)?Xr(e,u,h.map(e=>e.points)):void 0,S=Ki(e,t,x,kr(e)),A=ai(e.raw),E=kr(e),C=wi({ctx:e,series:h,scales:x,range:u,group:t.group,timeWeighted:"history"===t.source&&void 0===t.group,width:E,height:Vc(l.compact,b.options),until:Math.min(u.end,Date.now()),obstacles:"over"===l.header?[Zc(t,l.compact,E)]:[]}),j=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_line"),names:t.series.map(e=>e.entity.name).join(", ")});return Nr(l,i,Ar({axes:b,ctx:e,content:q`${S.behind}${C.lines}${M}${S.front}`,label:j,defs:$,overlay:B`${"over"===l.header?Tr(i):Z}
        ${A?qc(t,m,u,x,A,l.compact,e):Z}
        ${jc(e,d)} ${S.overlay} ${C.overlay}
        ${_?ei(e,h,x,o??n,kr(e)):Z}`,hover:z,gestures:d.options.zoom?Cc(e,d,z):void 0,classes:d.options.zoom?"zoomable "+(d.zoomed?"zoomed":""):"",below:d.options.overview?Tc(e,d,t.range,Nc(t.series,t.range)):Z}))}},Yc=["line","column","area"],Gc=["auto","left","right"],Xc=e=>e.config,Jc=e=>Xc(e).type??"line";function Kc(e,t){const o={...e},n=t.some(e=>"column"===Jc(e));return"none"!==e.group_by&&(void 0!==e.group_by&&"auto"!==e.group_by||n)?void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=Jl(da(e.period))):delete o.group_by,"auto"===e.aggregate&&delete o.aggregate,o}function Qc(e,t){const o=e.flatMap(e=>e.points.map(e=>e.v));return oc(o,t.includes("column"))}const ed=[...ls.map(e=>"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:mo},{name:"dots",path:["dots"],default:!1},{name:"rounded",path:["rounded"],default:!0},...fs,...ps];const td=[{name:"series_type",path:["type"],default:"line"},{name:"series_axis",path:["y_axis"],default:"auto"},{name:"series_color",path:["color"]},{name:"series_aggregate",path:["aggregate"],default:"auto"},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"negative_color",path:["negative_color"]}],od={layout:"chart",group:"history",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    ${Ts}
    ${mc}
    .lines-over {
      pointer-events: none;
    }
    .lines-over .line {
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .lines-over .dots {
      stroke-linecap: round;
    }
    .lines-over .line.dashed {
      stroke-dasharray: 6 5;
    }
  `,thumbnail:()=>q`
    <path d="M10 36 V22 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M27 36 V14 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M44 36 V18 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M4 26 C14 20 22 8 32 10 S50 22 60 6" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){if(void 0!==e.group_by&&!Wl.includes(e.group_by))throw new Error(`"group_by" must be one of: ${Wl.join(", ")}`);if(void 0!==e.aggregate&&!Yl.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Yl.join(", ")}`);const t={...e};if("auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,Qa(t),Na(t),xn(e),Gr(e),$o(e),jr(e),void 0!==e.rounded&&"boolean"!=typeof e.rounded)throw new Error('"rounded" must be true or false');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.type&&!Yc.includes(e.type))throw new Error(`"type" of ${o.entity} must be one of: ${Yc.join(", ")}`);if(void 0!==e.y_axis&&"left"!==e.y_axis&&"right"!==e.y_axis)throw new Error(`"y_axis" of ${o.entity} must be one of: left, right`);if(void 0!==e.aggregate&&!La.includes(e.aggregate))throw new Error(`"aggregate" of ${o.entity} must be one of: ${La.join(", ")}`)}},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},n=$s(`combined|${cs(o)}|${t}`,e.hass,()=>[...ds(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:ss(e.hass,"group_by",Wl)},...t?[]:[{name:"aggregate",selector:ss(e.hass,"aggregate",Yl)}]]},{name:"curve",selector:ss(e.hass,"curve",qa)},{type:"grid",name:"",schema:[{name:"line_width",selector:To},{name:"dots",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",n,ed)},entityFields:e=>({schema:$s("combined-entity",e,()=>[{type:"grid",name:"",schema:[{name:"series_type",selector:ss(e,"series_type",Yc)},{name:"series_axis",selector:ss(e,"series_axis",Gc)},{name:"series_color",selector:{text:{}}},{name:"series_aggregate",selector:ss(e,"series_aggregate",["auto",...La])}]},{type:"grid",name:"",schema:[{name:"curve",selector:ss(e,"curve",qa)},{name:"line_width",selector:To},{name:"dash",selector:{boolean:{}}},{name:"negative_color",selector:{text:{}}}]}]),fields:td}),disconnect(e){rr(e),$r(e),Wr(e)},render:function(e){const t={...e,raw:Kc(e.raw,e.items)},o=t.raw,n=er(t,Date.now(),{aggregate:t=>function(e,t){const o=t.aggregate;return Xc(e).aggregate??(o&&"auto"!==o?o:Kl(e)?"change":"mean")}(t,e.raw)}),a=nr(n,t),r=ir(n,t),i=a===Z&&r===Z?Z:B`${a}${r}`,s=sr(n,t),l=Lr(o);if(s)return Nr("over"===l.header?{...l,header:"above"}:l,i,s);const c=n.series.map(e=>Jc(e.entity)),d=function(e){const t=e[0]?.unit,o=e.map(e=>Xc(e).y_axis??(e.unit===t?"left":"right"));return o.includes("left")?o:o.map(()=>"left")}(n.series.map(e=>e.entity)),u=n.group,h=n.series.map(e=>u?{...e,points:e.points.map(e=>({...e,t:void 0!==e.end?(e.t+e.end)/2:e.t}))}:e),p=u?Math.max(n.range.end,...n.series.flatMap(e=>e.points.map(e=>e.end??0))):0,m=u?{...n.range,end:p}:n.range,f=e=>h.filter((t,o)=>d[o]===e),g=e=>c.filter((t,o)=>d[o]===e),v=Qc(f("left"),g("left"));let y=o;v&&g("left").includes("column")?y={...o,y_min:o.y_min??(v[0]>=0?0:void 0),y_max:o.y_max??(v[1]<=0?0:void 0)}:g("left").includes("area")&&(y=zs(v,o));const b=Mr({...t,raw:y},m,v),x=b.scales,_=f("right"),w=Qc(_,g("right")),$={};w&&(g("right").includes("column")||g("right").includes("area"))&&(w[0]>=0&&w[0]<=w[1]/2&&($.min=0),w[1]<=0&&w[1]>=w[0]/2&&($.max=0));const k=_.length?Mn(w,$,4):void 0,M=k?{x:x.x,y:dn(k.domain,[Xa,0]),domain:k.domain}:void 0,z=e=>"right"===d[e.index]&&M?M:x,S=h.filter(e=>"area"===c[e.index]).map(e=>Cs(e,e.points,z(e),o,{range:m})),A=h.filter(e=>"line"===c[e.index]).map(e=>Bc({...e,points:e.points},z(e),e.color,m,o)),E=h.filter(e=>"column"===c[e.index]),C=ec(n.series.filter(e=>"column"===c[e.index]).map(e=>e.points),u?1/0:n.range.end),j=!1===o.rounded?0:4,L=[];C.times.forEach((e,t)=>{const o=x.x(e),n=x.x(C.ends[t]);E.forEach((e,a)=>{const r=C.values[a][t];if(null===r)return;const i=z(e),s=Math.min(Math.max(0,i.domain[0]),i.domain[1]),[l,c]=tc(o,n,a,E.length);L.push(lc(i,l,c,Math.min(s,r),Math.max(s,r),e.color,r>=s?"top":"bottom",e.index))})});const N=C.times.map((e,t)=>(e+C.ends[t])/2),T=h.map(e=>{if("column"!==c[e.index]||u)return e;const t=E.indexOf(e);return{...e,points:N.map((e,o)=>({t:e,v:C.values[t][o]}))}}),O=new Map;for(const D of n.series)for(const e of D.points)void 0!==e.end&&O.set((e.t+e.end)/2,[e.t,e.end]);const F=Yr(o),P=Ze(t.hass,"chart_aria",{style:Ze(t.hass,"editor_style_combined"),names:n.series.map(e=>e.entity.name).join(", ")});return Nr(l,i,Ar({axes:b,ctx:t,right:k&&M?{value:k,y:M.y}:void 0,content:q`${S.map(e=>e.body)}`,defs:q`${S.map(e=>e.defs)}`,label:P,overlay:B`<div class="columns" style="--r:${j}px">${L}</div>
        <svg class="plot lines-over" viewBox="0 0 ${Ga} ${Xa}" preserveAspectRatio="none" aria-hidden="true">
          ${A}
        </svg>
        ${"over"===l.header?Tr(i):Z}
        ${F?ei(t,T,x,Zr(t.host),kr(t),{dotY:(e,t)=>"column"===c[e.index]||null===t.v?null:z(e).y(t.v),heading:e=>{const o=O.get(e);return o&&u?rc(o[0],o[1],u.unit,t.hass):Hn(e,t.hass)}}):Z}`,hover:F?Xr(t,m,T.map(e=>e.points)):void 0}))}};function nd(e,t){const o=Math.round(12+88*t);return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const ad=Math.sqrt(3)/2,rd=["hours","calendar"],id=["scale","bands"],sd=["square","rounded","hexagon"],ld=10,cd=1e4,dd={hours:{last:4,unit:"week",source:"history"},calendar:{last:12,unit:"month",source:"statistics"}},ud=e=>"number"==typeof e&&Number.isFinite(e);function hd(e){return e.grid??"hours"}function pd(e){const t=hd(e),o=dd[t],n=e.period??{};return{...e,group_by:"hours"===t?"hour":"day",source:e.source??o.source,period:void 0!==n.calendar?n:{...n,last:n.last??o.last,unit:n.unit??o.unit}}}const md=new Map;function fd(e,t,o){const n=e?.locale?.language??e?.language??"en",a=`${n}|${t}|${JSON.stringify(o)}`;let r=md.get(a);if(!r){try{r=new Intl.DateTimeFormat(n,{...o,timeZone:t})}catch{r=new Intl.DateTimeFormat("en",{...o,timeZone:"UTC"})}md.set(a,r)}return r}function gd(e,t){return fd(t,"UTC",{weekday:"short"}).format(Date.UTC(2024,0,e))}function vd(e,t,o=!1){return fd(t,"UTC",{hour:"numeric",...o?{minute:"2-digit"}:{},hour12:Fn(t)}).format(Date.UTC(2024,0,1,e))}function yd(e,t,o,n,a="cell"){const[r,i]=e.centre(t.col,t.row),s=n?`fill:${n}`:"",l=n?"":"empty";if("hexagon"===o)return q`<path class="${a} ${l}" d=${function(e,t,o){const n=o/Math.sqrt(3),a=[0,1,2,3,4,5].map(o=>{const a=(60*o-90)*Math.PI/180;return`${Math.round(100*(e+n*Math.cos(a)))/100},${Math.round(100*(t+n*Math.sin(a)))/100}`});return`M${a.join("L")}Z`}(r,i,8.8)} style=${s}></path>`;const c=8.8;return q`<rect class="${a} ${l}" x=${r-4.4} y=${i-4.4} width=${c} height=${c}
    rx=${"rounded"===o?2:.4} style=${s}></rect>`}const bd=e=>Math.round(1e4*e)/100+"%";function xd(e,t,o,n){const{zone:a}=t,r=e=>(a.firstDay-1+e)%7+1,i=function(e,t){const o=new Array(168).fill(0),n=new Array(168).fill(0);for(const a of e){if(null===a.v)continue;const e=Yn(a.t,t.timeZone),r=(e.weekday-t.firstDay+7)%7*24+e.hour;o[r]+=a.v,n[r]+=1}return o.map((e,t)=>({row:Math.floor(t/24),hour:t%24,v:n[t]?e/n[t]:null,count:n[t]}))}(e.points,a).map(e=>({col:e.hour,row:e.row,v:e.v,count:e.count,title:()=>`${gd(r(e.row),o)} ${vd(e.hour,o,!0)} – ${vd((e.hour+1)%24,o,!0)}`})),s=n?3:6;return{cells:i,cols:24,rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:gd(r(e),o)})),colLabels:Array.from({length:24/s},(e,t)=>({col:t*s,text:vd(t*s,o)}))}}function _d(e,t,o){const{zone:n}=t,a=function(e,t){if(0===e.length)return{cells:[],weeks:0,months:[]};const o=e=>{const o=Yn(e,t.timeZone);return Math.round(Date.UTC(o.year,o.month-1,o.day)/864e5)},n=o(Kn("week",e[0].t,t)),a=[],r=[];let i=-1;for(const s of e){const e=Yn(s.t,t.timeZone),l=Math.floor((o(s.t)-n)/7);a.push({t:s.t,col:l,row:(e.weekday-t.firstDay+7)%7,v:s.v});const c=12*e.year+e.month;c!==i&&(-1!==i&&1!==e.day||r.push({col:l,t:s.t}),i=c)}return r.length>1&&r[1].col-r[0].col<3&&r.shift(),{cells:a,weeks:a[a.length-1].col+1,months:r}}(e.points,n),r=fd(o,n.timeZone,{weekday:"short",day:"numeric",month:"short",year:"numeric"}),i=fd(o,n.timeZone,{month:"short"}),s=e=>(n.firstDay-1+e)%7+1;return{cells:a.cells.map(e=>({col:e.col,row:e.row,v:e.v,title:()=>r.format(e.t)})),cols:Math.max(1,a.weeks),rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:gd(s(e),o)})),colLabels:a.months.map(e=>({col:e.col,text:i.format(e.t)}))}}function wd(e,t,o,n){const a=o.raw,r=hd(o.raw),i=a.cell_shape??"rounded",s="bands"===a.color_by,l=wr(o),c="hours"===r?xd(e,t,o.hass,l>=400):_d(e,t,o.hass),d=function(e,t,o){if("hexagon"===o){const o=ld/Math.sqrt(3),n=ld*ad,a=e*ld+5,r=(t-1)*n+2*o;return{width:a,height:r,centre:(e,t)=>[e*ld+5+t%2*5,o+t*n],at(i,s){const l=Math.min(t-1,Math.max(0,Math.round((s*r-o)/n))),c=Math.floor((i*a-l%2*5)/ld);return[Math.min(e-1,Math.max(0,c)),l]}}}return{width:e*ld,height:t*ld,centre:(e,t)=>[e*ld+5,t*ld+5],at:(o,n)=>[Math.min(e-1,Math.floor(o*e)),Math.min(t-1,Math.floor(n*t))]}}(c.cols,c.rows,i),u=Math.max(0,l-72)/d.width*ld,h=Math.ceil(13/Math.max(1,u*("hexagon"===i?ad:1))),p=c.rowLabels.filter(e=>e.row%h===0);let m=-1/0;const f=c.colLabels.filter(e=>!((e.col-m)*u<32)&&(m=e.col,!0)),g=function(e,t={}){const o=e.filter(e=>null!==e);if(0===o.length&&(void 0===t.min||void 0===t.max))return;let n=t.min??Math.min(...o),a=t.max??Math.max(...o);return a<=n&&(void 0===t.max?a=n+1:n=a-1),[n,a]}(c.cells.map(e=>e.v),{min:ud(a.color_min)?a.color_min:void 0,max:ud(a.color_max)?a.color_max:void 0}),v=t=>{if(null!==t)return s?Ce(Te(t,e.entity.bands).color):g?nd(e.color,function(e,[t,o]){return Math.min(1,Math.max(0,(e-t)/(o-t)))}(t,g)):e.color},y=al(o.host),b=void 0!==y&&Math.floor(y/cd)===e.index?y%cd:void 0,x=new Map(c.cells.map((e,t)=>[8*e.col+e.row,t])),_=Yr(o.raw)?il(o,(t,o)=>{const[n,a]=d.at(t,o),r=x.get(8*n+a);return void 0===r?void 0:e.index*cd+r}):void 0,w=void 0===b?void 0:c.cells[b];let $=Z;if(w){const[t,n]=d.centre(w.col,w.row),a=null===w.v?Ze(o.hass,"heatmap_empty"):ur(dr(w.v,e.entity.decimals,o.hass),e.entity.unit);$=ll({x:t/d.width,y:n/d.height,plotWidth:Math.max(0,l-80),title:w.title(),rows:[{color:v(w.v)??"var(--cd-track)",name:e.entity.name,value:a},...void 0!==w.count&&null!==w.v?[{name:Ze(o.hass,"heatmap_hours"),value:String(w.count)}]:[]]})}const{show:k}=o.config,M=k.name||k.value||n?B`<div class="series-header">
          <div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
            ${s?Z:B`<span class="swatch" style="background:${e.color}"></span>`}
            ${k.name||n?B`<span class="series-name">${e.entity.name}</span>`:Z}
            ${k.value?B`<span class="series-value">${e.entity.display}</span>`:Z}
          </div>
        </div>`:Z,z=Ze(o.hass,"heatmap_aria",{name:e.entity.name});return B`<div class="hm grid-${r} shape-${i}">
    ${M}
    <div class="hm-body">
      <div class="hm-rows" aria-hidden="true">
        ${p.map(e=>B`<span class="hm-label" style="top:${bd(d.centre(0,e.row)[1]/d.height)}">${e.text}</span>`)}
      </div>
      <div
        class="hm-plot ${_?"hoverable":""}"
        @pointerdown=${_?.move}
        @pointermove=${_?.move}
        @pointerleave=${_?.leave}
        @pointercancel=${_?.leave}
      >
        <svg class="hm-svg" viewBox="0 0 ${d.width} ${d.height}" role="img" aria-label=${z}>
          ${c.cells.map(e=>yd(d,e,i,v(e.v)))}
          ${w?yd(d,w,i,"none","cell picked"):Z}
        </svg>
        ${$}
      </div>
      <div class="hm-cols" aria-hidden="true">
        ${f.map(e=>B`<span class="hm-label" style="left:${bd(e.col*ld/d.width)}">${e.text}</span>`)}
      </div>
    </div>
    ${!1===a.legend?Z:function(e,t,o,n){const a=e.entity,r=e=>dr(e,a.decimals,n.hass);return o?B`<div class="hm-legend bands">
      ${Oe(a.bands,r,a.unit).map(e=>B`<span class="hm-key"
            ><span class="hm-swatch" style="background:${e.color}"></span>${e.text}</span
          >`)}
    </div>`:t?B`<div class="hm-legend scale">
    <span class="hm-end">${r(t[0])}</span>
    <span class="hm-gradient" style="background:linear-gradient(to right, ${nd(e.color,0)}, ${e.color})"></span>
    <span class="hm-end">${ur(r(t[1]),a.unit)}</span>
  </div>`:Z}(e,g,s,o)}
  </div>`}const $d=new Map;const kd={layout:"chart",group:"distribution",height:220,styles:r`
    ${cr}
    ${ti}
    .hm + .hm {
      margin-top: 12px;
    }
    .hm-body {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      grid-template-rows: auto auto;
      column-gap: 6px;
    }
    .hm-rows {
      position: relative;
      grid-column: 1;
      grid-row: 1;
      min-width: 2em;
    }
    .hm-plot {
      position: relative;
      grid-column: 2;
      grid-row: 1;
    }
    .hm-plot.hoverable {
      cursor: crosshair;
    }
    .hm-svg {
      display: block;
      width: 100%;
      height: auto;
      opacity: 0;
      transition: opacity var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .hm-svg {
      opacity: 1;
    }
    :host([static]) .hm-svg {
      transition: none;
    }
    .hm-svg .cell.empty {
      fill: var(--cd-track);
    }
    .hm-svg .cell.picked {
      fill: none;
      stroke: var(--primary-text-color);
      stroke-width: 1px;
      vector-effect: non-scaling-stroke;
    }
    .hm-cols {
      position: relative;
      grid-column: 2;
      grid-row: 2;
      height: 16px;
    }
    .hm-label {
      position: absolute;
      font-size: 11px;
      line-height: 1;
      color: var(--secondary-text-color);
      white-space: nowrap;
      pointer-events: none;
    }
    .hm-rows .hm-label {
      right: 0;
      transform: translateY(-50%);
    }
    .hm-cols .hm-label {
      top: 4px;
    }
    .grid-calendar .hm-label {
      font-size: 10px;
    }
    .hm-legend {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 4px 10px;
      padding-top: 6px;
      font-size: 11px;
      color: var(--secondary-text-color);
      font-variant-numeric: tabular-nums;
    }
    .hm-legend.scale {
      justify-content: flex-end;
      gap: 6px;
    }
    .hm-gradient {
      width: min(160px, 40%);
      height: 8px;
      border-radius: 4px;
    }
    .hm-key {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .hm-swatch {
      width: 10px;
      height: 10px;
      border-radius: 2px;
    }
  `,thumbnail:()=>q`
    ${[0,1,2,3].map(e=>[0,1,2,3,4,5,6].map(t=>q`<rect x=${4+8*t} y=${4+8.5*e} width="7" height="7.5" rx="1.5"
          fill="var(--primary-color, #03a9f4)" fill-opacity=${.15+.85*((3*t+5*e)%7/6)}></rect>`))}`,validate:function(e){const t=e,o=(e,o)=>{const n=t[e];if(void 0!==n&&!o.includes(n))throw new Error(`"${e}" must be one of: ${o.join(", ")}`)};o("grid",rd),o("color_by",id),o("cell_shape",sd);for(const n of["color_min","color_max"])if(void 0!==t[n]&&!ud(t[n]))throw new Error(`"${n}" must be a number`);if(ud(t.color_min)&&ud(t.color_max)&&t.color_min>=t.color_max)throw new Error('"color_min" must be below "color_max"');if(void 0!==t.legend&&"boolean"!=typeof t.legend)throw new Error('"legend" must be true or false');Qa(pd(e)),Gr(e)},editor:function(e){const t=hd(e.config),o=$s(`heatmap|${cs({...e.config,group_by:void 0})}`,e.hass,()=>[{name:"grid",selector:ss(e.hass,"grid",rd)},...ds(e.hass,{...e.config,group_by:void 0}).filter(e=>!JSON.stringify(e).includes('"group_by"')),{name:"aggregate",selector:ss(e.hass,"aggregate",La)},{type:"grid",name:"",schema:[{name:"color_by",selector:ss(e.hass,"color_by",id)},{name:"cell_shape",selector:ss(e.hass,"cell_shape",sd)}]},{type:"grid",name:"",schema:[{name:"color_min",selector:{number:{mode:"box",step:"any"}}},{name:"color_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"legend",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}}]}]);return ks(e,"chart",o,function(e){let t=$d.get(e);if(!t){const o=dd[e],n={period_last:o.last,period_unit:o.unit,source:o.source};t=[{name:"grid",path:["grid"],default:"hours"},...ls.filter(e=>"group_by"!==e.name).map(e=>e.name in n?{...e,default:n[e.name]}:e),{name:"color_by",path:["color_by"],default:"scale"},{name:"cell_shape",path:["cell_shape"],default:"rounded"},{name:"color_min",path:["color_min"]},{name:"color_max",path:["color_max"]},{name:"legend",path:["legend"],default:!0},{name:"tooltip",path:["tooltip"],default:!0}],$d.set(e,t)}return t}(t))},entityFields:()=>({schema:[{name:"series_color",selector:{text:{}}}],fields:[{name:"series_color",path:["color"]}]}),disconnect(e){rr(e),$r(e),rl(e)},render(e){const t=er({...e,raw:pd(e.raw)}),o=nr(t,e),n=sr(t,e);if(n)return B`<div class="frame">${o}${n}</div>`;const a=t.series.length>1;return B`<div class="frame">${o}${t.series.map(o=>wd(o,t,e,a))}</div>`}},Md=["time","readings"],zd=100,Sd=e=>Number(e.toPrecision(12));const Ad=6e4,Ed=36e5;const Cd=["percent","total"],jd=["side","overlap"],Ld=["series","bands"],Nd=e=>"number"==typeof e&&Number.isFinite(e);function Td(e,t,o){if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function Od(e,t){const o=er(e,t),n={count:(a=e.raw).count??"time",showAs:a.show_as??"percent",bars:a.bars??"side",bands:"bands"===a.color_by,bins:Nd(a.bins)?a.bins:void 0,width:Nd(a.bin_width)?a.bin_width:void 0};var a;const r=Math.min(o.range.end,t),i=o.series.map(e=>function(e,t){const{mode:o,until:n,statistics:a}=t;if(0===e.length)return[];if(void 0!==e[0].end)return e.map(e=>null===e.v?0:"readings"===o?1:Math.max(0,Math.min(e.end,n)-e.t));if(a){if("readings"===o)return e.map(e=>null===e.v||e.carried?0:1);const t=e.slice(1).map((t,o)=>t.t-e[o].t).filter(e=>e>0).sort((e,t)=>e-t),n=t.length?t[Math.floor(t.length/2)]:36e5;return e.map(e=>null===e.v||e.carried?0:n)}const r=e.length-1;return e.map((t,a)=>{if(null===t.v)return 0;if("readings"===o){const o=a===r&&a>0&&t.t>=n&&e[a-1].v===t.v;return t.carried||o?0:1}const i=a<r?e[a+1].t:Math.max(t.t,n);return Math.max(0,Math.min(i,n)-t.t)})}(e.points,{mode:n.count,until:r,statistics:"statistics"===o.source}));let s=1/0,l=-1/0;o.series.forEach((e,t)=>e.points.forEach((e,o)=>{null!==e.v&&i[t][o]>0&&(s=Math.min(s,e.v),l=Math.max(l,e.v))}));const c=el(e.raw),d="side"===n.bars&&o.series.length>1,u=Math.max(5,Math.min(24,Math.round(kr(e)/(d?40:28)))),h=s===1/0?[]:function(e,t,o={},n=12){const a=o.min??e,r=o.max??t;if(void 0!==o.bins&&void 0===o.width){let[e,t]=[a,r];t>e||([e,t]=[e-.5,e+.5]);const n=(t-e)/o.bins;return Array.from({length:o.bins+1},(a,r)=>r===o.bins?t:Sd(e+r*n))}const i=r-a;let s=o.width??(i>0?wn(i,n):wn(Math.max(Math.abs(a),1),10));for(;i/s>zd;)s=wn(i,50);const l=o.min??Sd(Math.floor(a/s+1e-9)*s);let c=o.max??Sd(Math.ceil(r/s-1e-9)*s);c>l||(c=Sd(l+s));const d=[l];for(let u=1;d[d.length-1]<c-1e-9*s;u++)d.push(Math.min(c,Sd(l+u*s)));return d}(s,l,{bins:n.bins,width:n.width,min:c.min,max:c.max},u),p=o.series.map((e,t)=>{const o=function(e,t,o){const n=new Array(Math.max(0,o.length-1)).fill(0);return e.forEach((e,a)=>{if(null===e.v||!(t[a]>0))return;const r=function(e,t){const o=t.length-1;if(o<1||e<t[0]||e>t[o])return-1;if(e===t[o])return o-1;let n=0,a=o-1;for(;n<a;){const o=n+a+1>>1;t[o]<=e?n=o:a=o-1}return n}(e.v,o);r>=0&&(n[r]+=t[a])}),n}(e.points,i[t],h),a=o.reduce((e,t)=>e+t,0),r=o.map(e=>"percent"===n.showAs?a>0?e/a*100:0:"time"===n.count?e/36e5:e);return{series:e,totals:o,heights:r,whole:a}});return{frame:o,opts:n,edges:h,data:p,side:d}}function Fd(e,t,o){return"time"===t?function(e){if(e<Ad)return e>0?"< 1 min":"0 min";const t=Math.round(e/Ad);if(t<60)return`${t} min`;if(e<864e5){const e=Math.floor(t/60),o=t%60;return o?`${e} h ${o} min`:`${e} h`}const o=Math.round(e/Ed),n=Math.floor(o/24),a=o%24;return a?`${n} d ${a} h`:`${n} d`}(e):1===e?Ze(o.hass,"histogram_reading"):Ze(o.hass,"histogram_readings",{n:dr(e,0,o.hass)})}const Pd={layout:"chart",group:"distribution",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    ${cl}
    .style-histogram .bin {
      shape-rendering: crispEdges;
    }
    .style-histogram .overlap .bin {
      fill-opacity: 0.35;
      stroke-width: 1.5px;
      vector-effect: non-scaling-stroke;
    }
  `,thumbnail:()=>q`
    <g fill="var(--primary-color, #03a9f4)">
      <rect x="6" y="28" width="7" height="8" rx="1" />
      <rect x="14" y="20" width="7" height="16" rx="1" />
      <rect x="22" y="8" width="7" height="28" rx="1" />
      <rect x="30" y="12" width="7" height="24" rx="1" />
      <rect x="38" y="22" width="7" height="14" rx="1" />
      <rect x="46" y="30" width="7" height="6" rx="1" />
    </g>
    <path d="M4 37 H60" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate(e){if(Qa(e),xn(e),Gr(e),jr(e),Js(e),Td(e,"count",Md),Td(e,"show_as",Cd),Td(e,"bars",jd),Td(e,"color_by",Ld),void 0!==e.bins&&!(Number.isInteger(e.bins)&&e.bins>=1&&e.bins<=zd))throw new Error('"bins" must be a whole number from 1 to 100');if(void 0!==e.bin_width&&!(Nd(e.bin_width)&&e.bin_width>0))throw new Error('"bin_width" must be a number above 0')},editor:function(e){const t=e.hass,o=$s(`histogram|${cs(e.config)}`,t,()=>[...ds(t,e.config),{type:"grid",name:"",schema:[{name:"count",selector:ss(t,"count",Md)},{name:"show_as",selector:ss(t,"show_as",Cd)}]},{type:"grid",name:"",schema:[{name:"bins",selector:{number:{min:1,max:zd,mode:"box"}}},{name:"bin_width",selector:{number:{min:0,mode:"box",step:"any"}}}]},...Qs,{type:"grid",name:"",schema:[{name:"bars",selector:ss(t,"bars",jd)},{name:"color_by",selector:ss(t,"color_by",Ld)}]},...gs(t).map(e=>"grid"===e.type?{...e,schema:e.schema.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e)}:e),...ms(t)]);return ks(e,"chart",o,Id)},entityFields:()=>({schema:Ud,fields:Dd}),disconnect(e){rr(e),$r(e),rl(e)},render(e){const t=Date.now(),{frame:o,opts:n,edges:a,data:r,side:i}=Od(e,t),s=nr(o,e),l=ir(o,e),c=s===Z&&l===Z?Z:B`${s}${l}`,d=Lr(e.raw),u=sr(o,e)??(a.length<2?sr({...o,series:[]},e):void 0);if(u)return Nr("over"===d.header?{...d,header:"above"}:d,c,u);const h=Math.max(0,...r.flatMap(e=>e.heights)),p=tl(e,[a[0],a[a.length-1]],[0,h],{x:{min:a[0],max:a[a.length-1]},yFloor:0}),{scales:m}=p,f=m.y(Math.max(0,p.value.domain[0])),g=r.length,v="overlap"===n.bars&&g>1,y=q`${r.map((e,t)=>{const o=e.heights.map((o,r)=>{if(!(o>0))return Z;const s=m.x(a[r]),l=m.x(a[r+1]),c=Math.min(4,.08*(l-s)),d=(l-s-2*c)/(i?g:1),u=s+c+(i?d*t:0),h=m.y(o),p=n.bands&&e.series.entity.bands.length?Ce(Te((a[r]+a[r+1])/2,e.series.entity.bands).color):e.series.color;return q`<rect class="bin" x=${u} y=${Math.min(h,f)} width=${Math.max(.5,d)} height=${Math.abs(f-h)} fill=${p} stroke=${v?p:"none"}></rect>`});return q`<g class="series" data-series=${e.series.index}>${o}</g>`})}`,b=function(e){if(e.length<2)return 0;const t=e[1]-e[0],o=e.every(e=>Math.abs(e-Number(e.toFixed($n(t))))<1e-6*t);return o?$n(t):Math.min(4,$n(t)+1)}(a),x=Yr(e.raw),_=x?al(e.host):void 0;let w=Z;if(void 0!==_&&_<a.length-1){const t=r[0]?.series.entity.unit??"",o=dr(a[_],b,e.hass),i=dr(a[_+1],b,e.hass),s=m.x(a[_])/Ga,l=m.x(a[_+1])/Ga,c=kr(e);w=ll({x:"right"===Rr(l,c)?l:s,y:0,plotWidth:c,title:ur(`${o} – ${i}`,t),band:[s,l],rows:r.map(t=>{const o=t.whole>0?t.totals[_]/t.whole*100:0;return{color:t.series.color,name:t.series.entity.name,value:`${dr(o,o>0&&o<1?1:0,e.hass)}% · ${Fd(t.totals[_],n.count,e)}`}})})}const $=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_histogram"),names:o.series.map(e=>e.entity.name).join(", ")});return Nr(d,c,Ar({axes:p,ctx:e,content:q`<g class=${v?"overlap":"side"}>${y}</g>`,label:$,xLabel:t=>dr(t,ol(p),e.hass),yLabel:t=>"percent"===n.showAs?`${dr(t,p.value.decimals,e.hass)}%`:"time"===n.count?`${dr(t,p.value.decimals,e.hass)} h`:dr(t,p.value.decimals,e.hass),overlay:B`${"over"===d.header?Tr(c):Z}${w}`,hover:x?il(e,e=>{const t=a[0]+e*(a[a.length-1]-a[0]),o=a.findIndex((e,o)=>o<a.length-1&&t>=e&&t<=a[o+1]);return o<0?void 0:o}):void 0}))}},Dd=[{name:"bar_color",path:["color"]}],Ud=[{name:"bar_color",selector:{text:{}}}],Hd=fs.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e),Id=[...ls,{name:"count",path:["count"],default:"time"},{name:"show_as",path:["show_as"],default:"percent"},{name:"bins",path:["bins"]},{name:"bin_width",path:["bin_width"]},...Ks,{name:"bars",path:["bars"],default:"side"},{name:"color_by",path:["color_by"],default:"series"},...Hd,...ps];function Rd(e){let t=0;for(const o of e)t+=o.codePointAt(0)>=11904?1/.58:1;return t}function Bd(e,t=76,o=12,n=8,a=11){const r=e.trim();let i=[r];if(Rd(r)>a){let e=Rd(r);for(let t=r.indexOf(" ");t>0;t=r.indexOf(" ",t+1)){const o=Math.max(Rd(r.slice(0,t)),Rd(r.slice(t+1)));o<e&&(e=o,i=[r.slice(0,t),r.slice(t+1)])}}const s=Math.max(...i.map(Rd));return{lines:i,size:Math.max(n,Math.min(o,Math.floor(t/(.58*Math.max(1,s)))))}}const qd=65,Vd=66,Zd=50,Wd=[-90,90],Yd=e=>String(Math.round(1e3*e)/1e3+0);function Gd(e,t,o,n,a,r=11){const{lines:i,size:s}=Bd(e,t,o,n,r),l=a-1.2*(i.length-1)*s;return q`<text class="na" text-anchor="middle" style="font-size: ${s}px">${i.map((e,t)=>q`<tspan x=${qd} y=${Yd(l+1.2*t*s)}>${e}</tspan>`)}</text>`}const Xd={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:r`
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
    :host(:not([ready])) .needle-gauge.fitted .needle {
      transform: rotate(var(--needle-start)) !important;
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
    .needle-gauge .tick-label {
      font-size: 9px;
      fill: var(--secondary-text-color);
    }
    .needle-gauge .center-text {
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
  `,render(e,{show:t,hass:o}){const n=e.config.gauge,a=It(Wd,n),r=e=>Bt(a,e),i=function(e,t,o){const n=o-t,a=[];return n>0?(e.forEach((r,i)=>{const s=0===i?t:Math.max(r.from,t),l=Math.min(i+1<e.length?e[i+1].from:1/0,o);l>s&&a.push({from:(s-t)/n,to:(l-t)/n,color:r.color})}),a):a}(e.bands,e.min,e.max),s=i.map((e,t)=>{const o=r(e.from)+(t>0?1:0),n=r(e.to)-(t<i.length-1?1:0);return n>o?q`<path class="seg" d=${Pt(qd,Vd,Zd,o,n)} stroke=${Ce(e.color)}></path>`:Z}),l=e=>{const[t,o]=Ft(qd,Vd,36,e),[n,a]=Ft(qd,Vd,40,e);return q`<line class="tickmark" x1=${t.toFixed(2)} y1=${o.toFixed(2)} x2=${n.toFixed(2)} y2=${a.toFixed(2)}></line>`},c=n?.tickLabels?function(e,t,o=5){if(!(Number.isFinite(e)&&Number.isFinite(t)&&t>e))return[];const n=Zt(t-e,o),a=[];for(let r=Math.ceil(e/n)*n;r<t-.4*n;r+=n)r>e+.4*n&&a.push(Number(r.toPrecision(12)));return[e,...a,t]}(e.min,e.max):[],d=e.max-e.min,u=c.length?c.map(t=>l(r((t-e.min)/d))):Array.from({length:11},(e,t)=>l(r(t/10))),h=Zt(d),p=t.target&&null!==e.targetPosition,m=p?67:60,f=Rt(n)||c.length>0,g=f?Math.max(94,Math.ceil(Vt(qd,Vd,Zd,a[0],a[1],6).y1)+14):94,v=c.map(t=>{const n=r((t-e.min)/d),[a,i]=Ft(qd,Vd,m,n),{anchor:s,dy:l}=Yt(n);return q`<text class="tick-label" x=${a.toFixed(2)} y=${i.toFixed(2)} dy="${l}em" text-anchor=${s}>${dr(t,Wt(t,h),o)}</text>`});let y=Z;if(t.target&&null!==e.targetPosition&&e.available){const t=r(e.targetPosition),[o,n]=Ft(qd,Vd,57,t),[a,i]=Ft(qd,Vd,64,t-3),[s,l]=Ft(qd,Vd,64,t+3);y=q`<polygon class="target-mark" points="${o.toFixed(2)},${n.toFixed(2)} ${a.toFixed(2)},${i.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const b=!t.value,x=e.available?Gt(e,n):{kind:"value"};let _={x:0,y:0,w:130,h:b?82:104};if(f){const t=function(e,t,o,n,a,r){const i=[Vt(qd,Vd,Zd,t[0],t[1],a.hasTarget?15:7),Vt(qd,Vd,43,t[0],t[1],0),{x0:57,y0:58,x1:73,y1:74},a.compact?{x0:2,y0:40,x1:128,y1:82}:{x0:2,y0:a.valueY-16,x1:128,y1:a.valueY+6}],s=e.max-e.min;for(const c of o){const o=Bt(t,(c-e.min)/s),[l,d]=Ft(qd,Vd,a.labelR,o),{anchor:u,dy:h}=Yt(o),p=9*dr(c,Wt(c,n),r).length*.6,m="start"===u?l:"end"===u?l-p:l-p/2,f=d+9*h;i.push({x0:m,y0:f-9,x1:m+p,y1:f+2})}const l=qt(...i);return{x0:Math.floor(l.x0-2),y0:Math.floor(l.y0-2),x1:Math.ceil(l.x1+2),y1:Math.ceil(l.y1+2)}}(e,a,c,h,{hasTarget:p,labelR:m,valueY:g,compact:b},o);_={x:t.x0,y:t.y0,w:t.x1-t.x0,h:t.y1-t.y0}}const w=f?`width: min(${Yd(_.w)}px, 100%); aspect-ratio: ${Yd(_.w)} / ${Yd(_.h)}`:void 0;return B`<div
      class="needle-gauge ${f?"fitted":""}"
      style=${f?`--needle-start: ${Yd(a[0])}deg; width: ${Yd(Math.max(130,_.w))}px`:Z}
    >
      <svg
        class=${b?"compact":""}
        viewBox="${Yd(_.x)} ${Yd(_.y)} ${Yd(_.w)} ${Yd(_.h)}"
        style=${w??Z}
        aria-hidden="true"
      >
        ${s} ${u} ${v} ${y}
        ${e.available?q`<g class="needle" style="transform: rotate(${Yd(r(e.position))}deg)"><path d=${$=qd,k=Vd,M=42,z=3,`M${Ot($)} ${Ot(k-M)} L${Ot($+z)} ${Ot(k)} L${Ot($-z)} ${Ot(k)} Z`}></path></g>`:Z}
        <circle class="hub" cx=${qd} cy=${Vd} r="6"></circle>
        <circle class="hub-dot" cx=${qd} cy=${Vd} r="2.5"></circle>
        ${e.available?t.value?"value"===x.kind?q`<text class="value" x=${qd} y=${g} text-anchor="middle">${e.display}</text>`:"text"===x.kind?q`<text
                      class="center-text"
                      x=${qd}
                      y=${g}
                      text-anchor="middle"
                      style=${x.band?`fill: ${Ce(e.band.color)}`:Z}
                    >${x.text}</text>`:Z:Z:b?function(e){return Gd(e,58,11,7,55)}(e.display):function(e,t=94){return Gd(e,126,12,8,t,18)}(e.display,g)}
      </svg>
      ${t.name&&"name"!==n?.center||t.icon?B`<div class="name">
              ${t.icon?B`<ha-state-icon
                      class="icon"
                      .hass=${o}
                      .stateObj=${e.stateObj}
                      .icon=${Us(e)}
                    ></ha-state-icon>`:Z}
              ${t.name&&"name"!==n?.center?B`<span class="name-text">${e.name}</span>`:Z}
            </div>`:Z}
    </div>`;var $,k,M,z}};function Jd(e){return e.map(e=>e.available&&e.value>0?e.value:0)}function Kd(e,t=100){const o=e.reduce((e,t)=>e+Math.max(0,t),0);if(o<=0)return e.map(()=>0);const n=e.map(e=>Math.max(0,e)/o*t),a=n.map(Math.floor);let r=t-a.reduce((e,t)=>e+t,0);const i=n.map((e,t)=>({i:t,rest:e-a[t]})).sort((e,t)=>t.rest-e.rest||e.i-t.i);for(const{i:s}of i){if(r<=0)break;a[s]+=1,r-=1}return a}function Qd(e,t){return t>0?e/t*(180/Math.PI):0}function eu(e){const t=Math.max(0,e.end-e.start);return`--a:${(e.start-90).toFixed(3)}deg;--len:${t.toFixed(3)}`}function tu(e,t,o,n,a="primary"){return"bands"===n?Ce(e.band.color):"shades"===n?function(e,t,o){return o<=1||t<=0?e:`color-mix(in srgb, ${e} ${Math.round(100-Math.min(t,o-1)/(o-1)*65)}%, var(--card-background-color, #fff))`}(Ce(a),t,o):Ce(function(e){const t=e.config.color;return"string"==typeof t&&""!==t.trim()?t:void 0}(e)??Ja[t%Ja.length])}function ou(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:""}function nu(e,t,o,n=e.map(e=>e.available?e.value:0)){const a=e.map((e,t)=>({e:e,v:n[t]})).filter(({e:e})=>e.available);if(!a.length)return;const r=a.reduce((e,{v:t})=>e+t,0),i="total"===t?r:r/a.length,s=Math.max(...a.map(({e:e})=>e.decimals));return{value:i,text:dr(i,s,o),unit:ou(e)}}function au(e){return Se(e.config)?0:Z}function ru(e,t){const{show:o}=t.config;return!e.length||!o.name&&!o.value&&e.every(e=>void 0===e.share)?Z:B`<div class="parts-legend">
    ${e.map(e=>B`<div
          class="entity part-row ${Se(e.entity.config)?"interactive":""} ${e.entity.available?"":"unavailable"}"
          data-index=${e.index}
          tabindex=${au(e.entity)}
          aria-label=${void 0===e.share?e.entity.label:`${e.entity.label}, ${e.share}`}
        >
          <span class="swatch ${e.entity.available?"":"empty"}" style="background:${e.color}"></span>
          ${o.name?B`<span class="part-name">${e.entity.name}</span>`:Z}
          ${o.value?B`<span class="part-value value">${e.entity.display}</span>`:Z}
          ${void 0===e.share?Z:B`<span class="part-share">${e.share}</span>`}
        </div>`)}
  </div>`}function iu(e,t){return ur(dr(e,0,t),"%")}function su(e,t){return Ze(e.hass,"parts_aria",{style:Ze(e.hass,t),names:e.items.map(e=>e.name).join(", ")})}function lu(e,t,o){return B`<div class="centre" aria-hidden="true">
    <div class="centre-value">${e}${t?B`<span class="centre-unit">${t}</span>`:Z}</div>
    ${o?B`<div class="centre-caption">${o}</div>`:Z}
  </div>`}function cu(e,t,o){const n=e[t];if(void 0!==n&&!o.includes(n))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function du(e,t,o,n){const a=e[t];if(void 0!==a&&("number"!=typeof a||!Number.isFinite(a)||a<o||a>n))throw new Error(`"${t}" must be a number from ${o} to ${n}`)}function uu(e,t){const o=e[t];if(void 0!==o&&"boolean"!=typeof o)throw new Error(`"${t}" must be true or false`)}function hu(e,t){const o=e[t];if(void 0!==o&&"string"!=typeof o)throw new Error(`"${t}" must be text`)}const pu=r`
  .parts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 4px 0;
  }
  @container (min-width: 400px) {
    .parts {
      flex-direction: row;
      align-items: center;
      gap: 24px;
    }
    .parts > .parts-legend {
      flex: 1;
    }
  }
  .dial {
    position: relative;
    flex: none;
    width: 180px;
    max-width: 100%;
    aspect-ratio: 1;
  }
  .dial svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .seg {
    fill: none;
    stroke-dasharray: var(--len) 360;
    transform: rotate(var(--a));
    transform-box: view-box;
    transform-origin: 50px 50px;
    transition:
      stroke-dasharray var(--cd-duration) var(--cd-easing),
      transform var(--cd-duration) var(--cd-easing),
      stroke var(--cd-duration) var(--cd-easing);
  }
  :host(:not([ready])) .seg {
    stroke-dasharray: 0 360;
  }
  :host([static]) .seg {
    transition: none;
  }
  /* Parts inside a drawing take taps; the keyboard reaches each entity through its legend row. */
  .dial .entity.interactive {
    cursor: pointer;
  }
  .centre {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    text-align: center;
  }
  .centre-value {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.1;
    color: var(--primary-text-color);
  }
  .centre-unit {
    font-size: 14px;
    margin-left: 3px;
    color: var(--secondary-text-color);
  }
  .centre-caption {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .parts-legend {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
  }
  .part-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 4px;
    min-width: 0;
    border-radius: 4px;
  }
  .part-row + .part-row {
    border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2));
    border-radius: 0;
  }
  .part-row .swatch {
    flex: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .part-row .swatch.empty {
    background: none !important;
    box-shadow: inset 0 0 0 1.5px var(--secondary-text-color);
  }
  .part-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .part-value {
    color: var(--secondary-text-color);
    font-size: 0.875em;
    white-space: nowrap;
  }
  .part-share {
    min-width: 3.2em;
    text-align: right;
    font-weight: 500;
    white-space: nowrap;
  }
`,mu=["series","bands"];function fu(e,t,o,n){const{show:a}=o.config,r=function(e,t,o){const n=t-e;if(!(n>0))return{count:0,per:1};const a=void 0!==o&&o>0?o:n<=20?1:n/10,r=Math.ceil(n/a-1e-9);return r>100?{count:100,per:n/100}:{count:r,per:a}}(e.min,e.max,n.perIcon),i=e.available?function(e,t,o,n){const a=Math.min(o.count,Math.max(0,(e-t)/o.per)),r=n?a:Math.floor(a+1e-9);return Array.from({length:o.count},(e,t)=>Math.min(1,Math.max(0,r-t)))}(e.value,e.min,r,n.partial):r.count?Array(r.count).fill(0):[],s=tu(e,t,o.items.length,n.colorBy),l=e.config.icon??n.unitIcon??(e.stateObj?void 0:"mdi:checkbox-blank-circle"),c=r.count>20?20:28,d=e.available?B`<span class="picto-now">${e.valueText}</span
        ><span class="picto-of"
          >/ ${ur(dr(e.max,Number.isInteger(e.max)?0:e.decimals,o.hass),e.unit)}</span
        >`:e.display;return B`<div
    class="entity picto-row ${Se(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    tabindex=${au(e)}
    aria-label=${e.label}
  >
    ${a.name?B`<span class="name picto-name">${e.name}</span>`:Z}
    <div class="picto-icons" style="--mdc-icon-size:${c}px" role="img" aria-label=${e.label}>
      ${function(e,t){if(e<=0)return[];if(!(t>0))return[[0,e]];const o=[];for(let n=0;n<e;n+=t)o.push([n,Math.min(e,n+t)]);return o}(i.length,n.groupSize).map(([t,n])=>B`<span class="picto-group">${i.slice(t,n).map((n,a)=>((t,n)=>B`<span class="unit" style="--i:${n};--fill:${(100*t).toFixed(1)}%">
      <ha-state-icon class="unit-empty" .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon>
      <span class="unit-full" style="color:${s}"
        ><ha-state-icon .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon
      ></span>
    </span>`)(n,t+a))}</span>`)}
    </div>
    ${a.value?B`<span class="value picto-value">${d}</span>`:Z}
  </div>`}const gu=[{name:"unit_icon",path:["unit_icon"]},{name:"per_icon",path:["per_icon"]},{name:"group_size",path:["group_size"],default:5},{name:"color_by",path:["color_by"],default:"series"},{name:"partial",path:["partial"],default:!0}];const vu={layout:"chart",group:"totals",height:180,styles:r`
    .pictograph {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 4px 0;
    }
    .picto-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      grid-template-areas: 'name name' 'icons value';
      align-items: end;
      column-gap: 12px;
      row-gap: 4px;
      padding: 2px 4px;
    }
    @container (max-width: 360px) {
      .picto-row {
        grid-template-areas: 'name value' 'icons icons';
        align-items: baseline;
      }
      .picto-value {
        line-height: normal;
      }
    }
    .picto-name {
      grid-area: name;
      color: var(--secondary-text-color);
      font-size: 0.875em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .picto-icons {
      grid-area: icons;
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      min-width: 0;
    }
    .picto-group {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      min-width: 0;
    }
    .picto-value {
      grid-area: value;
      white-space: nowrap;
      line-height: var(--mdc-icon-size, 28px);
    }
    .picto-now {
      font-size: 1.5em;
      font-weight: 500;
    }
    .picto-of {
      margin-left: 4px;
      color: var(--secondary-text-color);
      font-size: 0.875em;
    }
    .unit {
      position: relative;
      display: inline-flex;
    }
    .unit-empty {
      color: color-mix(in srgb, var(--primary-text-color, #212121) 15%, transparent);
    }
    .unit-full {
      position: absolute;
      inset: 0;
      display: inline-flex;
      clip-path: inset(0 calc(100% - var(--fill)) 0 0);
      transition: clip-path calc(var(--cd-duration) / 2) var(--cd-easing);
      transition-delay: calc(var(--i) * 30ms);
    }
    :host(:not([ready])) .unit-full {
      clip-path: inset(0 100% 0 0);
    }
    :host([static]) .unit-full {
      transition: none;
    }
    @supports not (color: color-mix(in srgb, red 50%, white)) {
      .unit-empty {
        color: var(--divider-color, rgba(127, 127, 127, 0.3));
      }
    }
  `,thumbnail:()=>q`
    ${[0,1,2,3,4].map(e=>q`<circle cx=${10+11*e} cy="14" r="4" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />
        <path d="M${3+11*e} 30 a7 7 0 0 1 14 0 z" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`)}`,validate(e){hu(e,"unit_icon");const t=e.per_icon;if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<=0))throw new Error('"per_icon" must be a number more than 0');if(du(e,"group_size",0,50),void 0!==e.group_size&&!Number.isInteger(e.group_size))throw new Error('"group_size" must be a whole number');cu(e,"color_by",mu),uu(e,"partial")},editor:function(e){const t=$s("pictograph",e.hass,()=>[{name:"unit_icon",selector:{icon:{}}},{type:"grid",name:"",schema:[{name:"per_icon",selector:{number:{min:0,step:"any",mode:"box"}}},{name:"group_size",selector:{number:{min:0,max:50,mode:"box"}}},{name:"color_by",selector:ss(e.hass,"color_by",mu)}]},{name:"partial",selector:{boolean:{}}}]);return ks(e,"chart",t,gu)},render:function(e){const t={perIcon:(o=e.raw).per_icon,unitIcon:o.unit_icon||void 0,groupSize:o.group_size??5,partial:!1!==o.partial,colorBy:o.color_by??"series"};var o;return B`<div class="pictograph" role="group" aria-label=${su(e,"editor_style_pictograph")}>
    ${e.items.map((o,n)=>fu(o,n,e,t))}
  </div>`}},yu=["donut","pie"],bu=["total","none"],xu=["series","bands","shades"],_u=48;function wu(e,t){const o=function(e){const t=e.reduce((e,t)=>e+Math.max(0,t),0);return e.map(e=>t>0?Math.max(0,e)/t:0)}(e),n=o.filter(e=>e>0).length,a="donut"===t.shape?41.5:24;let r=0;return"donut"===t.shape&&(n>1&&(r+=Qd(t.gap,a)),t.rounded&&(r+=Qd(13,a))),function(e,t=0,o=360){const n=o-t;let a=t;return e.map(e=>{const t=a;return a+=e*n,{start:t,end:a}})}(o).map((e,t)=>o[t]>0?function(e,t){const o=e.end-e.start,n=Math.min(Math.max(0,t),o)/2;return{start:e.start+n,end:e.end-n}}(e,r):void 0)}const $u=[{name:"shape",path:["shape"],default:"donut"},{name:"color_by",path:["color_by"],default:"series"},{name:"center",path:["center"],default:"total"},{name:"center_label",path:["center_label"],default:""},{name:"gap",path:["gap"],default:2},{name:"shade_color",path:["shade_color"],default:""},{name:"rounded",path:["rounded"],default:!1},{name:"gradient",path:["gradient"],default:!1},{name:"show_percent",path:["show_percent"],default:!0}];const ku={layout:"chart",group:"totals",height:200,styles:r`
    ${pu}
    .style-pie .track {
      stroke: var(--cd-track);
    }
    .style-pie .separator {
      stroke: var(--card-background-color, #fff);
      transform: rotate(var(--a));
      transform-box: view-box;
      transform-origin: 50% 50%;
      transition: transform var(--cd-duration) var(--cd-easing);
    }
    :host(:not([ready])) .style-pie .separator {
      opacity: 0;
    }
    :host([static]) .style-pie .separator {
      transition: none;
    }
  `,thumbnail:()=>q`
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="6"
      pathLength="100" stroke-dasharray="44 56" transform="rotate(-90 32 20)" />
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--warning-color, #f59e0b)" stroke-width="6"
      pathLength="100" stroke-dasharray="28 72" stroke-dashoffset="-46" transform="rotate(-90 32 20)" />
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--success-color, #43a047)" stroke-width="6"
      pathLength="100" stroke-dasharray="22 78" stroke-dashoffset="-76" transform="rotate(-90 32 20)" />`,validate(e){cu(e,"shape",yu),cu(e,"center",bu),cu(e,"color_by",xu),du(e,"gap",0,10),uu(e,"rounded"),uu(e,"gradient"),uu(e,"show_percent"),hu(e,"shade_color"),hu(e,"center_label")},editor:function(e){const t=$s("pie",e.hass,()=>[{type:"grid",name:"",schema:[{name:"shape",selector:ss(e.hass,"shape",yu)},{name:"color_by",selector:ss(e.hass,"color_by",xu)},{name:"center",selector:ss(e.hass,"center",bu)},{name:"center_label",selector:{text:{}}},{name:"gap",selector:{number:{min:0,max:10,step:.5,mode:"slider"}}},{name:"shade_color",selector:{text:{}}}]},{name:"rounded",selector:{boolean:{}}},{name:"gradient",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return ks(e,"chart",t,$u)},render:function(e){const t={shape:(o=e.raw).shape??"donut",center:o.center??"total",colorBy:o.color_by??"series",shadeColor:o.shade_color||"primary",gap:o.gap??2,rounded:!0===o.rounded,gradient:!0===o.gradient,percent:!1!==o.show_percent,centerLabel:o.center_label??""};var o;const n=e.items,a=Jd(n),r=n.map((e,o)=>tu(e,o,n.length,t.colorBy,t.shadeColor)),i=wu(a,t),s="donut"===t.shape,l=s?41.5:24,c=s?13:_u,d=s?35/_u:0,u=i.filter(Boolean).length,h=t.gradient?q`<defs>${n.map((e,t)=>i[t]?function(e,t,o){return q`<radialGradient id=${e} gradientUnits="userSpaceOnUse" cx="50" cy="50" r=${_u}>
    <stop offset=${o} style="stop-color:color-mix(in srgb, ${t} 65%, #fff)"></stop>
    <stop offset="1" style="stop-color:${t}"></stop>
  </radialGradient>`}(`cd-pie-${t}`,r[t],d):Z)}</defs>`:Z,p=n.map((e,o)=>{const n=i[o];if(!n)return Z;const a=t.gradient?`url(#cd-pie-${o})`:r[o];return q`<g
      class="entity slice ${Se(e.config)?"interactive":""}"
      data-index=${o}
      aria-label=${e.label}
    >
      <circle
        class="seg"
        cx="50"
        cy="50"
        r=${l}
        pathLength="360"
        stroke-width=${c}
        stroke-linecap=${s&&t.rounded?"round":"butt"}
        style="${eu(n)};stroke:${a}"
      ></circle>
    </g>`}),m=!s&&t.gap>0&&u>1?i.map(e=>e?q`<line class="separator" x1="50" y1="50" x2="50" y2=${1}
                stroke-width=${t.gap} style="--a:${e.start.toFixed(3)}deg"></line>`:Z):Z,f=0===u?q`<circle class="track" cx="50" cy="50" r=${l} stroke-width=${c} fill="none"></circle>`:Z,g=Kd(a),v=n.map((o,n)=>({index:n,entity:o,color:r[n],share:t.percent&&a[n]>0?iu(g[n],e.hass):void 0})),y=nu(n,"total",e.hass,a),b=s&&"total"===t.center&&y?lu(y.text,"",t.centerLabel||ou(n)):Z;return B`<div class="parts">
    <div class="dial">
      <svg viewBox="0 0 100 100" role="img" aria-label=${su(e,"editor_style_pie")}>
        ${h}${f}${p}${m}
      </svg>
      ${b}
    </div>
    ${ru(v,e)}
  </div>`}};let Mu=0;const zu=new WeakMap;const Su=60,Au=60,Eu=e=>String(Math.round(1e3*e)/1e3+0);function Cu(e){return Math.min(22,Math.floor(124/Math.max(1,e.length)))}function ju(e){const t=function(e,t){const o=e/2;return[-o+t[0]*e,-o+t[1]*e]}(e,[0,1]),o=Pt(Su,Au,46,t[0],t[1]),n=e<360;return{layout:"tiles",group:"gauges",height:n?135:155,minColumnWidth:128,styles:r`
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
      .radial .center-text {
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
      /* A custom sweep crops --y0 drawing units off the top: move the icon up by as much. */
      .radial .dial.fitted .icon {
        top: calc(25cqw - var(--y0) * 0.8065cqw);
      }
      .radial .dial.fitted .icon.centre {
        top: calc(48.39cqw - var(--y0) * 0.8065cqw);
      }
      .radial .name {
        max-width: min(124px, 100%);
        font-size: 12px;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `,render(e,{show:a,hass:r}){const i=function(e){let t=zu.get(e);return t||(t="cd-g-"+ ++Mu,zu.set(e,t)),t}(e.config),s=e.config.gauge,l=It(t,s),c=Rt(s),d=c?Pt(Su,Au,46,l[0],l[1]):o;let u=0,h=n?100:120;if(c){const e=qt(Vt(Su,Au,46,l[0],l[1],6.5),{x0:26,y0:26,x1:94,y1:94});u=Math.max(0,Math.floor(e.y0)),h=Math.min(120,Math.ceil(e.y1))-u}const p=h<120,m=e.available&&a.value?Gt(e,s):{kind:"none"},f=e.span[1]-e.span[0]<=0,g=`stroke-dasharray: ${Eu(100*(e.span[1]-e.span[0]))} 100; stroke-dashoffset: ${Eu(100*-e.span[0])}`,v=(y=e.band.color,Object.prototype.hasOwnProperty.call(Ee,y)?Ee[y].fallback:y);var y;const b=function(e){return!e.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",e))}(v)?`url(#${i}) ${v}`:`url(#${i})`,x=a.icon?6:0,_=Cu(e.valueText);let w=Z;if(a.target&&null!==e.targetPosition&&e.available){const t=Bt(l,e.targetPosition),[o,n]=Ft(Su,Au,39.5,t),[a,r]=Ft(Su,Au,52.5,t);w=q`<line class="tick" x1=${o.toFixed(2)} y1=${n.toFixed(2)} x2=${a.toFixed(2)} y2=${r.toFixed(2)}></line>`}return B`<div class="radial ${p?"cropped":""}">
        <div class="dial ${c?"fitted":""}" style=${c?`aspect-ratio: 124 / ${h}; --y0: ${u}`:Z}>
          <svg viewBox="0 ${u} 120 ${h}" aria-hidden="true">
            <defs>
              <linearGradient id=${i} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${Su} cy=${Au} r="34"></circle>
            <path class="track" d=${d}></path>
            ${e.available?q`<path
                  class="value-arc ${f?"empty":""}"
                  d=${d}
                  pathLength="100"
                  style=${g}
                  stroke=${b}
                ></path>`:Z}
            ${w}
            ${e.available?q`${"text"===m.kind?q`<text
                        class="center-text"
                        x=${Su}
                        y=${66+x}
                        text-anchor="middle"
                        style="font-size: ${Math.min(18,Cu(m.text))}px${m.band?`; fill: ${Ce(e.band.color)}`:""}"
                      >${m.text}</text>`:"value"===m.kind?q`<text
                        class="value"
                        x=${Su}
                        y=${64+x}
                        text-anchor="middle"
                        style=${_<22?`font-size: ${_}px`:Z}
                      >${e.valueText}</text>
                      <text class="unit" x=${Su} y=${80+x} text-anchor="middle">${e.unit}</text>`:Z}`:function(e){const{lines:t,size:o}=Bd(e),n=64-1.2*(t.length-1)*o/2;return q`<text class="na" text-anchor="middle" style="font-size: ${o}px">${t.map((e,t)=>q`<tspan x=${Su} y=${Eu(n+1.2*t*o)}>${e}</tspan>`)}</text>`}(e.display)}
          </svg>
          ${a.icon&&e.available?B`<ha-state-icon
                  class="icon ${a.value&&"none"!==m.kind?"":"centre"}"
                  .hass=${r}
                  .stateObj=${e.stateObj}
                  .icon=${Us(e)}
                ></ha-state-icon>`:Z}
        </div>
        ${a.name&&"name"!==s?.center?B`<span class="name">${e.name}</span>`:Z}
      </div>`}}}const Lu=ju(360),Nu=ju(270),Tu=["average","total","none"],Ou=["series","bands"];function Fu(e){return{start:e.start_angle??0,end:e.end_angle??270,center:e.center??"average",colorBy:e.color_by??"series",rounded:!1!==e.rounded_ends}}const Pu=[{name:"start_angle",path:["start_angle"],default:0},{name:"end_angle",path:["end_angle"],default:270},{name:"center",path:["center"],default:"average"},{name:"color_by",path:["color_by"],default:"series"},{name:"rounded_ends",path:["rounded_ends"],default:!0}];const Du={layout:"chart",group:"totals",height:200,styles:r`
    ${pu}
    .style-rings .centre-box {
      position: absolute;
      inset: 0 0 auto 0;
    }
    .style-rings .part-value {
      color: var(--primary-text-color);
      font-size: 1em;
      font-weight: 500;
    }
    .style-rings .ring-track {
      fill: none;
      stroke: var(--cd-track);
      stroke-dasharray: var(--len) 360;
      transform: rotate(var(--a));
      transform-box: view-box;
      transform-origin: 50px 50px;
    }
  `,thumbnail:()=>q`
    <circle cx="32" cy="20" r="16" fill="none" stroke="var(--divider-color, rgba(127, 127, 127, 0.3))"
      stroke-width="4" pathLength="100" stroke-dasharray="75 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="16" fill="none" stroke="var(--success-color, #43a047)" stroke-width="4"
      pathLength="100" stroke-dasharray="62 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="10" fill="none" stroke="var(--divider-color, rgba(127, 127, 127, 0.3))"
      stroke-width="4" pathLength="100" stroke-dasharray="75 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="10" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="4"
      pathLength="100" stroke-dasharray="48 100" transform="rotate(-90 32 20)" stroke-linecap="round" />`,validate(e){du(e,"start_angle",-360,360),du(e,"end_angle",-360,360);const{start:t,end:o}=Fu(e);if(o<=t||o-t>360)throw new Error('"end_angle" must be after "start_angle", and at most 360 degrees after it');cu(e,"center",Tu),cu(e,"color_by",Ou),uu(e,"rounded_ends")},editor:function(e){const t=$s("rings",e.hass,()=>[{type:"grid",name:"",schema:[{name:"start_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"end_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"center",selector:ss(e.hass,"center",Tu)},{name:"color_by",selector:ss(e.hass,"color_by",Ou)}]},{name:"rounded_ends",selector:{boolean:{}}}]);return ks(e,"chart",t,Pu,{start_angle:"editor_rings_start_angle"})},render:function(e){const t=Fu(e.raw),o=e.items,{radii:n,width:a}=function(e){if(e<=0)return{radii:[],width:0};const t=Math.min(9,28/(1.33*e)),o=1.33*t;return{radii:Array.from({length:e},(e,n)=>48-t/2-n*o),width:t}}(o.length),r=o.map((e,n)=>tu(e,n,o.length,t.colorBy)),i=t.rounded?"round":"butt",s=eu({start:t.start,end:t.end}),l=o.map((e,o)=>{const l=e.available?q`<circle class="seg" cx="50" cy="50" r=${n[o]} pathLength="360" stroke-width=${a}
          stroke-linecap=${i} style="${eu(function(e,t,o){return{start:t,end:t+Math.min(1,Math.max(0,e))*(o-t)}}(e.position,t.start,t.end))};stroke:${r[o]}"></circle>`:Z;return q`<g
      class="entity ring ${Se(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
      data-index=${o}
      aria-label=${e.label}
    >
      <circle class="ring-track" cx="50" cy="50" r=${n[o]} pathLength="360" stroke-width=${a}
        stroke-linecap=${i} style=${s}></circle>
      ${l}
    </g>`}),c="none"===t.center?void 0:nu(o,t.center,e.hass),d=c?lu(c.text,c.unit,Ze(e.hass,`parts_${t.center}`)):Z,u=o.map((e,t)=>({index:t,entity:e,color:r[t]})),h=function(e,t){const o=e=>-Math.cos(e*Math.PI/180),n=360*Math.ceil((e-180)/360)+180<=t?1:Math.max(o(e),o(t));return Math.min(100,Math.max(66,50+48*n+6))}(t.start,t.end);return B`<div class="parts">
    <div class="dial" style="aspect-ratio:100 / ${h.toFixed(2)}">
      <svg viewBox="0 0 100 ${h.toFixed(2)}" role="img" aria-label=${su(e,"editor_style_rings")}>
        ${l}
      </svg>
      <div class="centre-box" style="height:${(100/h*100).toFixed(2)}%">${d}</div>
    </div>
    ${ru(u,e)}
  </div>`}},Uu={layout:"chart",group:"distribution",height:240,styles:Pl,thumbnail:()=>q`
    <g fill="var(--primary-color, #03a9f4)">
      <circle cx="10" cy="32" r="2.5" /><circle cx="17" cy="27" r="2.5" /><circle cx="22" cy="29" r="2.5" />
      <circle cx="28" cy="21" r="2.5" /><circle cx="34" cy="23" r="2.5" /><circle cx="40" cy="15" r="2.5" />
      <circle cx="47" cy="17" r="2.5" /><circle cx="53" cy="9" r="2.5" />
    </g>
    <g fill="var(--warning-color, #f59e0b)">
      <circle cx="14" cy="18" r="2.5" /><circle cx="31" cy="33" r="2.5" /><circle cx="50" cy="28" r="2.5" />
    </g>`,validate:e=>Ll(e,"scatter"),editor:Rl("scatter"),entityFields:()=>Vl(),disconnect:Dl,render:e=>Ol(e,"scatter")};function Hu(e){const[t,o]=e;return Array.from({length:10},(e,n)=>{const a=(n+.5)/10;return a>t&&a<=o})}const Iu={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:r`
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
  `,render(e,{show:t,hass:o}){const n=e.available?Hu(e.span):Hu([0,0]),a=t.target&&e.available&&null!==e.targetPosition?Math.min(9,Math.max(0,Math.floor(10*e.targetPosition))):-1,r=!e.available;return B`<div class="seg">
      ${t.icon?B`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Us(e)}
            ></ha-state-icon>`:Z}
      <div class="body">
        ${t.name||r?B`<div class="name">
                ${t.name?B`<span class="label">${e.name}</span>`:Z}
                ${r?B`<span class="status">${e.display}</span>`:Z}
              </div>`:Z}
        <div class="cells">
          ${n.map((e,t)=>B`<i class="cell ${e?"on":""} ${t===a?"mark":""}" style="--i:${t}"></i>`)}
        </div>
      </div>
      ${t.value?B`<span class="value">${e.available?e.display:""}</span>`:Z}
    </div>`}},Ru={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:r`
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
  `,render:(e,{show:t,hass:o})=>B`
      ${t.icon?B`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Us(e)}
            ></ha-state-icon>`:Z}
      ${t.value||!e.available?B`<span class="value">${e.display}</span>`:Z}
      <div class="tube">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?B`<div class="target"></div>`:Z}
      </div>
      ${t.name?B`<span class="name">${e.name}</span>`:Z}
    `},Bu={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:r`
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
  `,render(e,{show:t,hass:o}){const n=t.value||!e.available;return B`
      ${t.icon?B`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Us(e)}
            ></ha-state-icon>`:Z}
      <div class="body">
        ${t.name||n?B`<div class="top">
                ${t.name?B`<span class="name">${e.name}</span>`:Z}
                ${n?B`<span class="value">${e.display}</span>`:Z}
              </div>`:Z}
        <div class="track">
          <div class="fill"></div>
          ${t.target&&null!==e.targetPosition&&e.available?B`<div class="target"></div>`:Z}
        </div>
      </div>
    `}},qu=["one","each"],Vu=["series","bands"];function Zu(e){if(1===e.length){const t=e[0];return t.available?[Kd([t.position,1-t.position])[0]]:[0]}return Kd(Jd(e),100)}function Wu(e,t){const{col:o,row:n}=function(e){return{col:e%10,row:9-Math.floor(e/10)}}(e);return q`<rect
    class="cell ${t?"filled":""}"
    x=${10*o+.8}
    y=${10*n+.8}
    width="8.4"
    height="8.4"
    rx="1.6"
    style="--k:${e}${t?`;fill:${t}`:""}"
  ></rect>`}function Yu(e,t,o,n){let a=0;const r=e.map((e,n)=>{const r=a;if(a+=e,!e)return Z;const i=o[n];return q`<g class="entity ${Se(i.config)?"interactive":""}" data-index=${n}>
      ${Array.from({length:e},(e,o)=>Wu(r+o,t[n]))}
    </g>`}),i=Array.from({length:100-a},(e,t)=>Wu(a+t,void 0));return B`<svg class="waffle" viewBox="0 0 100 100" role="img" aria-label=${n}>
    ${r}
    <g class="empty">${i}</g>
  </svg>`}const Gu=[{name:"waffles",path:["waffles"],default:"one"},{name:"color_by",path:["color_by"],default:"series"},{name:"headline",path:["headline"],default:!0},{name:"show_percent",path:["show_percent"],default:!0}];const Xu={layout:"chart",group:"totals",height:210,styles:r`
    ${pu}
    .waffle-box {
      flex: none;
      width: 180px;
      max-width: 100%;
    }
    .waffle {
      display: block;
      width: 100%;
      height: auto;
    }
    .cell {
      fill: color-mix(in srgb, var(--primary-text-color, #212121) 10%, transparent);
      transform-box: fill-box;
      transform-origin: center;
      transition:
        opacity calc(var(--cd-duration) / 2) var(--cd-easing),
        transform calc(var(--cd-duration) / 2) var(--cd-easing),
        fill var(--cd-duration) var(--cd-easing);
      transition-delay: calc(var(--k) * 4ms);
    }
    :host(:not([ready])) .cell.filled {
      opacity: 0;
      transform: scale(0.4);
    }
    :host([static]) .cell {
      transition: none;
    }
    @supports not (color: color-mix(in srgb, red 50%, white)) {
      .cell {
        fill: var(--divider-color, rgba(127, 127, 127, 0.2));
      }
    }
    .waffle .entity.interactive {
      cursor: pointer;
    }
    .waffle-side {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      min-width: 0;
    }
    .waffle-headline {
      display: flex;
      flex-direction: column;
      padding: 0 4px;
    }
    .waffle-big {
      font-size: 32px;
      font-weight: 500;
      line-height: 1.1;
    }
    .waffle-caption {
      color: var(--secondary-text-color);
    }
    .waffles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
      gap: 12px 16px;
      padding: 4px 0;
    }
    .waffle-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 4px;
      min-width: 0;
    }
    .waffle-item .waffle {
      margin-bottom: 4px;
    }
    .waffle-name {
      color: var(--secondary-text-color);
      font-size: 0.875em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .waffle-value {
      font-weight: 500;
    }
    .waffle-raw {
      color: var(--secondary-text-color);
      font-size: 0.75em;
    }
  `,thumbnail:()=>q`
    ${Array.from({length:25},(e,t)=>{const o=t%5,n=4-Math.floor(t/5);return q`<rect x=${20+5*o} y=${8+5*n} width="4" height="4" rx="0.8" fill=${t<9?"var(--warning-color, #f59e0b)":t<15?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`})}`,validate(e){cu(e,"waffles",qu),cu(e,"color_by",Vu),uu(e,"headline"),uu(e,"show_percent")},editor:function(e){const t=$s("waffle",e.hass,()=>[{type:"grid",name:"",schema:[{name:"waffles",selector:ss(e.hass,"waffles",qu)},{name:"color_by",selector:ss(e.hass,"color_by",Vu)}]},{name:"headline",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return ks(e,"chart",t,Gu)},render(e){const t={waffles:(o=e.raw).waffles??"one",colorBy:o.color_by??"series",headline:!1!==o.headline,percent:!1!==o.show_percent};var o;return"each"===t.waffles?function(e,t){const{show:o}=e.config;return B`<div class="waffles">
    ${e.items.map((n,a)=>{const r=tu(n,a,e.items.length,t.colorBy),[i]=Zu([n]),s=iu(i,e.hass),l=o.value&&t.percent&&n.available&&n.display!==s;return B`<div
        class="entity waffle-item ${Se(n.config)?"interactive":""} ${n.available?"":"unavailable"}"
        data-index=${a}
        tabindex=${au(n)}
      >
        ${Yu([i],[r],[n],n.label)}
        ${o.name?B`<span class="waffle-name">${n.name}</span>`:Z}
        <span class="value waffle-value">${n.available&&t.percent?s:n.display}</span>
        ${l?B`<span class="waffle-raw">${n.display}</span>`:Z}
      </div>`})}
  </div>`}(e,t):function(e,t){const o=e.items,n=o.map((e,n)=>tu(e,n,o.length,t.colorBy)),a=Zu(o),r=e=>a[e]>0||1===o.length&&o[e].available,i=o.map((i,s)=>({index:s,entity:i,color:n[s],share:!t.percent||!r(s)||t.headline&&1===o.length?void 0:iu(a[s],e.hass)})),s=o[0],l=t.headline&&s&&r(0)?B`<div class="waffle-headline">
          <span class="waffle-big">${iu(a[0],e.hass)}</span>
          <span class="waffle-caption">${s.name}</span>
        </div>`:Z;return B`<div class="parts">
    <div class="waffle-box">${Yu(a,n,o,su(e,"editor_style_waffle"))}</div>
    <div class="waffle-side">${l}${ru(i,e)}</div>
  </div>`}(e,t)}};function Ju(e,t){return Ce(Ja[e%Ja.length])}function Ku(e,t){const o=Math.round(Math.min(100,Math.max(0,t)));return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const Qu=["funnel","pyramid"],eh=["first","previous","none"],th=["series","bands"];function oh(e,t){const o=e=>Math.round(100*e)/100,n=o((100-e)/2),a=o((100-t)/2);return`${n},0 ${o(100-n)},0 ${o(100-a)},10 ${a},10`}const nh=[{name:"funnel_shape",path:["shape"],default:"funnel"},{name:"funnel_percent_of",path:["percent_of"],default:"first"},{name:"funnel_color_by",path:["color_by"],default:"series"}];function ah(e,t,o){const n=e[t];if(void 0!==n&&!o.includes(n))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}const rh={layout:"chart",group:"totals",height:240,styles:r`
    .style-funnel .funnel {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 4px 0;
    }
    .style-funnel .stage {
      display: grid;
      grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
      align-items: center;
      gap: 12px;
    }
    .style-funnel .funnel.no-labels .stage {
      grid-template-columns: minmax(0, 1fr);
    }
    .style-funnel .shape {
      position: relative;
      height: 44px;
    }
    .style-funnel .shape svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
      transform: scaleX(0);
      transform-origin: 50% 50%;
      transition: transform var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .style-funnel .shape svg {
      transform: scaleX(1);
    }
    .style-funnel polygon.empty {
      fill: none;
      stroke: var(--secondary-text-color);
      stroke-width: 1;
      stroke-dasharray: 4 3;
      vector-effect: non-scaling-stroke;
    }
    .style-funnel .percent {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      pointer-events: none;
    }
    .style-funnel .percent.dark {
      color: #1d1f24;
      text-shadow: none;
    }
    .style-funnel .percent.theme {
      color: var(--primary-text-color);
      text-shadow: none;
    }
    .style-funnel .label {
      display: flex;
      flex-direction: column;
      min-width: 0;
      line-height: 1.25;
    }
    .style-funnel .name {
      color: var(--secondary-text-color);
      font-size: 0.875em;
      overflow: hidden;
      overflow-wrap: anywhere;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .style-funnel .value {
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .style-funnel .unavailable .value {
      color: var(--secondary-text-color);
      font-weight: 400;
    }
  `,thumbnail:()=>q`
    <polygon points="6,4 58,4 48,15 16,15" fill="var(--warning-color, #f59e0b)" />
    <polygon points="16,17 48,17 41,27 23,27" fill="var(--success-color, #1fae7a)" />
    <polygon points="23,29 41,29 38,37 26,37" fill="var(--primary-color, #03a9f4)" />`,validate(e){ah(e,"shape",Qu),ah(e,"percent_of",eh),ah(e,"color_by",th)},editor:function(e){const t=$s("funnel",e.hass,()=>[{name:"funnel_shape",selector:ss(e.hass,"funnel_shape",Qu)},{type:"grid",name:"",schema:[{name:"funnel_percent_of",selector:ss(e.hass,"funnel_percent_of",eh)},{name:"funnel_color_by",selector:ss(e.hass,"funnel_color_by",th)}]}]);return ks(e,"chart",t,nh)},render(e){const{items:t,raw:o,hass:n,config:a}=e,r=o.shape??"funnel",i="bands"===o.color_by,s=t.map(e=>e.available?e.value:null),l=function(e){const t=Math.max(0,...e.map(e=>null!==e&&e>0?e:0));return e.map(e=>t>0&&null!==e&&e>0?e/t*100:0)}(s),c=function(e,t){return e.map((o,n)=>{if(o<=0)return{top:0,bottom:0};const a=e[n+1],r=n===e.length-1;return"pyramid"===t?{top:r?0:a>0?a:.8*o,bottom:o}:{top:o,bottom:!r&&a>0?a:.8*o}})}(l,r),d=function(e,t){return"none"===t?e.map(()=>null):e.map((o,n)=>{if(null===o)return null;if("previous"===t&&0===n)return 100;const a="first"===t?e[0]:e[n-1];return null!=a&&a>0?o/a*100:null})}(s,o.percent_of??"first"),{show:u}=a,h=u.name||u.value,p=t.map((e,t)=>{const o=function(e,t,o){if(o)return e.band.color;const n=e.config.color;return"string"==typeof n&&n?n:Ja[t%Ja.length]}(e,t,i),a=d[t],r=null===a?"":`${dr(a,0,n)}%`,s=l[t]<22?"theme":Ne(o),p=Se(e.config),{top:m,bottom:f}=c[t],g=l[t]>0;return B`<div
        class="entity stage ${p?"interactive":""} ${e.available?"":"unavailable"}"
        data-index=${t}
        role="img"
        aria-label=${r?`${e.label}, ${r}`:e.label}
        tabindex=${p?0:Z}
      >
        <div class="shape">
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            ${g?q`<polygon points=${oh(m,f)} fill=${Ce(o)}></polygon>`:q`<polygon class="empty" points=${oh(30,30)}></polygon>`}
          </svg>
          ${r?B`<div class="percent ${s}" aria-hidden="true">${r}</div>`:Z}
        </div>
        ${h?B`<div class="label" aria-hidden="true">
                ${u.name?B`<span class="name">${e.name}</span>`:Z}
                ${u.value?B`<span class="value">${e.display}</span>`:Z}
              </div>`:Z}
      </div>`});"pyramid"===r&&p.reverse();const m=Ze(n,"funnel_aria",{style:Ze(n,`editor_funnel_shape_${r}`).replace(/ \(.*\)$/,""),names:t.map(e=>e.name).join(", ")});return B`<div class="funnel ${h?"":"no-labels"}" role="group" aria-label=${m}>${p}</div>`}},ih=["floor","area","device","label"];function sh(e){if(null==e||""===e)return[];const t=Array.isArray(e)?e:[e];if(t.some(e=>!ih.includes(e)))throw new Error(`"group_by" must be one or more of: ${ih.join(", ")}`);return ih.filter(e=>t.includes(e))}function lh(e){sh(e.group_by),(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.group:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "group" must be text, such as "Kitchen" or "Ground floor / Kitchen"`)})}function ch(e){return"string"!=typeof e?[]:e.split("/").map(e=>e.trim()).filter(Boolean)}function dh(e){const t=e.replace(/_/g," ").trim();return t.charAt(0).toUpperCase()+t.slice(1)}function uh(e,t,o,n){const a=ch(e.config.group);return a.length?a:t.map(t=>function(e,t,o){const n=o,a=n.entities?.[e],r=a?.device_id?n.devices?.[a.device_id]:void 0,i=a?.area_id??r?.area_id??void 0;switch(t){case"area":return i?n.areas?.[i]?.name??dh(i):void 0;case"floor":{const e=i?n.areas?.[i]?.floor_id:void 0;return e?n.floors?.[e]?.name??dh(e):void 0}case"device":return r?r.name_by_user??r.name??void 0:void 0;case"label":{const e=[...a?.labels??[],...r?.labels??[]][0];return e?n.labels?.[e]?.name??dh(e):void 0}}}(e.entityId,t,o)??n)}function hh(e,t,o){const n={name:o,path:[],value:0,depth:0,children:[]};e.forEach((e,o)=>{let a=n;for(const n of t[o]??[]){let e=a.children.find(e=>void 0===e.entity&&e.name===n);e||(e={name:n,path:[...a.path,n],value:0,depth:a.depth+1,children:[]},a.children.push(e)),a=e}a.children.push({name:e.name,path:a.path,value:0,depth:a.depth+1,children:[],entity:e,index:o})});const a=e=>{e.value=e.entity?function(e){return e.available&&null!==e.value&&e.value>0?e.value:0}(e.entity):e.children.reduce((e,t)=>e+a(t),0);const t=new Map(e.children.map((e,t)=>[e,t]));return e.children.sort((e,o)=>o.value-e.value||t.get(e)-t.get(o)),e.value};return a(n),n}function ph(e,t){let o=e;for(const n of t)if(o=o.children.find(e=>void 0===e.entity&&e.name===n),!o)return;return o}function mh(e){return e.children.length?1+Math.max(...e.children.map(mh)):0}function fh(e){const t=[],o=(e,n,a,r)=>{if(t.push({node:e,level:n,x0:a,x1:r}),e.value<=0)return;let i=a;for(const t of e.children){if(t.value<=0)continue;const s=(r-a)*t.value/e.value;o(t,n+1,i,i+s),i+=s}};return o(e,0,0,1),t}const gh=2*Math.PI;function vh(e,t){return[yh(e*Math.sin(t)),yh(-e*Math.cos(t))]}function yh(e){return Math.round(100*e)/100||0}function bh(e,t,o,n){if(t<=0||n<=o)return"";const a=Math.max(0,e);if(n-o>=gh-1e-6){const e=(e,t)=>{const[o,n]=vh(e,0),[a,r]=vh(e,Math.PI);return`M${o} ${n}A${e} ${e} 0 1 ${t} ${a} ${r}A${e} ${e} 0 1 ${t} ${o} ${n}Z`};return a>0?`${e(t,1)}${e(a,0)}`:e(t,1)}const r=n-o>Math.PI?1:0,[i,s]=vh(t,o),[l,c]=vh(t,n),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===a)return`${d}L0 0Z`;const[u,h]=vh(a,n),[p,m]=vh(a,o);return`${d}L${u} ${h}A${a} ${a} 0 ${r} 0 ${p} ${m}Z`}function xh(e,t){return t>0?e*gh/t:0}function _h(e){return e.map(([e,t])=>`${e},${t}`).join(" ")}function wh(e){const t=Math.sin(e);return Math.abs(t)<.2?"middle":t>0?"start":"end"}function $h(e,t,o,n,a=void 0){const r=e.config.entities??[],i=r.length,s=$s(`${t}-${i}`,e.hass,()=>r.map((e,t)=>({name:`e${t}`,selector:n}))),l=e=>{const t=r[e];return"object"==typeof t?t[o]:void 0},c={};for(let d=0;d<i;d++)c[`e${d}`]=l(d)??a;return B`<div class="entity-options" data-section=${t}>
    <div style="margin: 16px 0 4px; font-weight: 500">${Ze(e.hass,`editor_${t}`)}</div>
    ${0===i?B`<div style="color: var(--secondary-text-color)">
            ${Ze(e.hass,"editor_entity_options_none")}
          </div>`:B`<ha-form
            .hass=${e.hass}
            .data=${c}
            .schema=${s}
            .computeLabel=${t=>{const o=ho(r[Number(t.name.slice(1))]),n=e.hass?.states[o]?.attributes?.friendly_name;return"string"==typeof n&&n?n:o}}
            @value-changed=${t=>{t.stopPropagation();const n=t.detail?.value??{};let r=e.config;for(let e=0;e<i;e++){const t=n[`e${e}`],i=t===a||""===t?void 0:t;i!==l(e)&&(r=po(r,e,o,i))}r!==e.config&&e.commit(r)}}
          ></ha-form>`}
  </div>`}const kh=[{name:"group_by",path:["group_by"],default:[]}];function Mh(e){return{name:"group_by",selector:{select:{multiple:!0,mode:"list",options:ih.map(t=>({value:t,label:Ze(e,`editor_group_by_${t}`)}))}}}}function zh(e){const t=e.config.group_by;if(void 0===t||Array.isArray(t))return e;let o;try{o=sh(t)}catch{return e}return{...e,config:{...e.config,group_by:o}}}function Sh(e){return $h(e,"entity_groups","group",{text:{}})}const Ah={group_by:"editor_hierarchy_group_by"},Eh=["limits","shared"],Ch={aqi:"AQI",carbon_dioxide:"CO₂",carbon_monoxide:"CO",pm1:"PM1",pm10:"PM10",pm25:"PM2.5",volatile_organic_compounds:"VOC",volatile_organic_compounds_parts:"VOC"};function jh(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}function Lh(e,t,o){const n=sh(t.group_by),a=n.length>0||e.some(e=>ch(e.config.group).length),r=t.scale??"limits",i=e.filter(e=>e.available&&null!==e.value).map(e=>e.value),s=i.length?Math.max(...i):0,l=e=>{const t=e.config.axis;return"string"==typeof t&&t.trim()?t.trim():void 0};if(!a)return{axes:e.map(e=>({name:l(e)??e.name,entity:e})),series:[{name:"",color:Ju(0),points:e.map((e,t)=>({index:t,axis:t,r:jh(e,r,s)}))}]};const c=Ze(o,"radar_other"),d=[],u=[];return e.forEach((e,t)=>{const a=e.stateObj?.attributes?.device_class,i=l(e)??("string"==typeof a?function(e){if(Ch[e])return Ch[e];const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}(a):e.name);let h=d.findIndex(e=>e.name===i);-1===h&&(h=d.push({name:i})-1);const p=uh(e,n,o,c).join(" / ")||c;let m=u.find(e=>e.name===p);m||(m={name:p,color:Ju(u.length),points:[]},u.push(m)),m.points.push({index:t,axis:h,r:jh(e,r,s)})}),{axes:d,series:u}}const Nh=[{name:"radar_scale",path:["scale"],default:"limits"},{name:"radar_fill",path:["fill"],default:!0},...kh];const Th={layout:"chart",group:"compare",height:280,styles:r`
    .radar-plot {
      display: block;
      width: 100%;
      height: 240px;
      overflow: visible;
    }
    .radar-plot .grid {
      fill: none;
      stroke: var(--divider-color, rgba(127, 127, 127, 0.25));
      stroke-width: 1;
    }
    .radar-plot .axis-label {
      fill: var(--secondary-text-color);
      font-size: 12px;
    }
    .radar-plot .axis-value {
      fill: var(--primary-text-color);
      font-weight: 500;
    }
    .radar-plot .axis-value.muted {
      fill: var(--secondary-text-color);
      font-weight: 400;
    }
    .radar-plot .area {
      stroke-width: 2;
      stroke-linejoin: round;
      fill-opacity: 0;
    }
    .radar-plot .area.filled {
      fill-opacity: 0.2;
    }
    .radar-plot .dot {
      fill: var(--card-background-color, #fff);
      stroke-width: 2;
    }
    .radar-plot .hit {
      fill: transparent;
    }
    .radar-plot .marker {
      cursor: pointer;
      outline: none;
    }
    .radar-plot .marker:focus-visible .dot {
      stroke-width: 4;
    }
    .radar-grow {
      transform-box: fill-box;
      transform-origin: center;
      transform: scale(0);
      transition: transform var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .radar-grow {
      transform: scale(1);
    }
    :host([static]) .radar-grow {
      transition: none;
    }
    .radar-legend {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 4px 16px;
      padding-top: 4px;
      font-size: 0.875em;
      color: var(--secondary-text-color);
    }
    .radar-legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .radar-legend .swatch {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  `,thumbnail:()=>q`
    <polygon points="32,4 52,15 49,34 15,34 12,15" fill="none" stroke="var(--divider-color, #ccc)" />
    <polygon points="32,10 46,17 40,30 20,32 18,18" fill="var(--primary-color, #03a9f4)" fill-opacity="0.25"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2" stroke-linejoin="round" />`,validate(e){if(lh(e),void 0!==e.scale&&!Eh.includes(e.scale))throw new Error(`"scale" must be one of: ${Eh.join(", ")}`);if(void 0!==e.fill&&"boolean"!=typeof e.fill)throw new Error('"fill" must be true or false');(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.axis:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "axis" must be text`)})},editor:function(e){const t=$s("radar",e.hass,()=>[{name:"radar_scale",selector:ss(e.hass,"radar_scale",Eh)},{name:"radar_fill",selector:{boolean:{}}},Mh(e.hass)]);return B`${ks(zh(e),"chart",t,Nh,Ah)} ${Sh(e)}
  ${$h(e,"radar_axis","axis",{text:{}})}`},render(e){const t=Lh(e.items,e.raw,e.hass),o=t.axes.length,n=1===t.series.length&&""===t.series[0].name,a=!1!==e.raw.fill,r=Ze(e.hass,"radar_aria",{names:(n?e.items.map(e=>e.name):t.series.map(e=>e.name)).join(", ")});return B`<svg
        class="radar-plot"
        viewBox="${-170} ${-120} ${340} ${240}"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label=${r}
      >
        ${function(e){const t=Array.from({length:4},(e,t)=>84*(t+1)/4);return q`${t.map(t=>e>=3?q`<polygon class="grid" points=${_h(Array.from({length:e},(o,n)=>vh(t,xh(n,e))))}></polygon>`:q`<circle class="grid" r=${t}></circle>`)}
    ${Array.from({length:e},(t,o)=>{const[n,a]=vh(84,xh(o,e));return q`<line class="grid spoke" x1="0" y1="0" x2=${n} y2=${a}></line>`})}`}(o)} ${function(e,t,o){const n=e.axes.length,a=o&&t.config.show.value;return q`${e.axes.map((e,o)=>{const r=xh(o,n),[i,s]=vh(96,r),l=wh(r),c=Math.cos(r)<-.2,d=a&&e.entity?2:1,u=c?10:Math.abs(Math.cos(r))<=.2?4-6*(d-1):12*-(d-1);return q`<text class="axis-label" x=${i} y=${s+u} text-anchor=${l}>
      ${t.config.show.name||!a?q`<tspan>${e.name}</tspan>`:Z}
      ${a&&e.entity?q`<tspan class="axis-value ${e.entity.available?"":"muted"}" x=${i} dy="13">${e.entity.display}</tspan>`:Z}
    </text>`})}`}(t,e,n)}
        <g class="radar-grow">
          <circle r=${84} fill="none" stroke="none"></circle>
          ${t.series.map(t=>function(e,t,o,n){const a=e.points.filter(e=>null!==e.r).sort((e,t)=>e.axis-t.axis).map(e=>({p:e,xy:vh(84*e.r,xh(e.axis,t))}));return q`<g class="series">
    ${a.length>1?q`<polygon class="area ${n?"filled":""}" points=${_h(a.map(e=>e.xy))}
            stroke=${e.color} fill=${n?e.color:"none"}></polygon>`:Z}
    ${a.map(({p:t,xy:n})=>q`<g class="entity marker" data-index=${t.index} tabindex="0" aria-label=${o[t.index].label}
        role="img">
        <circle class="hit" cx=${n[0]} cy=${n[1]} r="9"></circle>
        <circle class="dot" cx=${n[0]} cy=${n[1]} r="3.5" stroke=${e.color}></circle>
      </g>`)}
  </g>`}(t,o,e.items,a))}
        </g>
      </svg>
      ${n?Z:B`<div class="radar-legend">
              ${t.series.map(e=>B`<span class="radar-legend-item"
                    ><span class="swatch" style="background:${e.color}"></span>${e.name}</span
                  >`)}
            </div>`}`}},Oh=["shared","limits"],Fh=["series","shades","bands"];const Ph=[{name:"polar_scale",path:["scale"],default:"shared"},{name:"polar_color_by",path:["color_by"],default:"series"},{name:"polar_color",path:["color"],default:"primary"}],Dh=Object.keys(Ee);const Uh={layout:"chart",group:"compare",height:260,styles:r`
    .polar-plot {
      display: block;
      width: 100%;
      height: 240px;
      overflow: visible;
    }
    .polar-plot .ring {
      fill: none;
      stroke: var(--divider-color, rgba(127, 127, 127, 0.25));
      stroke-dasharray: 3 3;
    }
    .polar-plot .ring:last-of-type {
      stroke-dasharray: none;
    }
    .polar-plot .ring-label {
      fill: var(--secondary-text-color);
      font-size: 10px;
      paint-order: stroke;
      stroke: var(--card-background-color, #fff);
      stroke-width: 3px;
      stroke-linejoin: round;
    }
    .polar-plot .slice-label {
      fill: var(--secondary-text-color);
      font-size: 12px;
    }
    .polar-plot .slice-value {
      fill: var(--primary-text-color);
      font-weight: 500;
    }
    .polar-plot .slice-label.muted .slice-value {
      fill: var(--secondary-text-color);
      font-weight: 400;
    }
    .polar-plot .slice {
      cursor: pointer;
      outline: none;
      stroke: var(--card-background-color, #fff);
      stroke-width: 0.5;
    }
    .polar-plot .slice:focus-visible {
      stroke: var(--primary-text-color);
      stroke-width: 2;
    }
    .polar-grow {
      transform-box: fill-box;
      transform-origin: center;
      transform: scale(0);
      transition: transform var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .polar-grow {
      transform: scale(1);
    }
    :host([static]) .polar-grow {
      transition: none;
    }
  `,thumbnail:()=>q`
    <g transform="translate(32 21)">
      <path d=${bh(0,18,-.6,.6)} fill="var(--primary-color, #03a9f4)" />
      <path d=${bh(0,12,.65,1.85)} fill="var(--warning-color, #ffa600)" />
      <path d=${bh(0,15,1.9,3.1)} fill="var(--success-color, #43a047)" />
      <path d=${bh(0,9,3.15,4.35)} fill="var(--error-color, #db4437)" />
      <path d=${bh(0,13,4.4,5.6)} fill="var(--purple-color, #8b6cff)" />
    </g>`,validate(e){if(void 0!==e.scale&&!Oh.includes(e.scale))throw new Error(`"scale" must be one of: ${Oh.join(", ")}`);if(void 0!==e.color_by&&!Fh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Fh.join(", ")}`);if(void 0!==e.color&&("string"!=typeof e.color||!e.color))throw new Error('"color" must be a colour name, such as "primary", or any CSS colour')},editor:function(e){const t=$s("polar_area",e.hass,()=>[{name:"polar_scale",selector:ss(e.hass,"polar_scale",Oh)},{type:"grid",name:"",schema:[{name:"polar_color_by",selector:ss(e.hass,"polar_color_by",Fh)},{name:"polar_color",selector:{select:{mode:"dropdown",custom_value:!0,options:Dh.map(t=>({value:t,label:Ze(e.hass,`editor_color_${t}`)}))}}}]}]);return ks(e,"chart",t,Ph)},render(e){const t=e.raw.scale??"shared",o=e.raw.color_by??"series",n=e.raw.color??"primary",a=e.items.length,r=e.items.filter(e=>e.available&&null!==e.value).map(e=>e.value),i=r.length?Math.max(0,...r):0,s=e.items.map((e,r)=>{const s=function(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}(e,t,i);if(null===s||s<=0)return Z;const[l,c]=function(e,t){if(t<=1)return[0,2*Math.PI];const o=Math.PI/t,n=xh(e,t);return[n-o+.02,n+o-.02]}(r,a),d=6+86*s;return q`<path class="entity slice" data-index=${r} tabindex="0" role="img" aria-label=${e.label}
        d=${bh(6,d,l,c)} fill=${function(e,t,o,n,a){return"bands"===n?Ce(e.band.color):"shades"===n?Ku(Ce(a),30+70*o):Ju(t)}(e,r,s,o,n)}></path>`}),l=Ze(e.hass,"polar_area_aria",{names:e.items.map(e=>e.name).join(", ")});return B`<svg
      class="polar-plot"
      viewBox="${-170} ${-120} ${340} ${240}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label=${l}
    >
      ${q`${Array.from({length:3},(e,t)=>q`<circle class="ring" r=${92*(t+1)/3}></circle>`)}`}
      <g class="polar-grow">
        <circle r=${92} fill="none" stroke="none"></circle>
        ${s}
      </g>
      ${function(e,t,o){const n=e.items.find(e=>e.available);if("shared"!==t||!n||o<=0)return q``;const a=e.items.length>1?Math.PI/e.items.length:0;return q`${Array.from({length:3},(t,r)=>{const i=92*(r+1)/3,[s,l]=vh(i,a),c=ur(dr(o*(r+1)/3,n.decimals,e.hass),n.unit);return q`<text class="ring-label" x=${s+3} y=${l-2}>${c}</text>`})}`}(e,t,i)} ${function(e){const t=e.items.length,{show:o}=e.config;return o.name||o.value?q`${e.items.map((e,n)=>{const a=xh(n,t),[r,i]=vh(104,a),s=Math.cos(a)<-.2,l=o.name&&o.value?2:1,c=s?10:Math.abs(Math.cos(a))<=.2?4-6*(l-1):13*-(l-1);return q`<text class="slice-label ${e.available?"":"muted"}" x=${r} y=${i+c} text-anchor=${wh(a)}>
      ${o.name?q`<tspan>${e.name}</tspan>`:Z}
      ${o.value?q`<tspan class="slice-value" x=${r} dy=${o.name?13:0}>${e.display}</tspan>`:Z}
    </text>`})}`:q``}(e)}
    </svg>`}},Hh=new WeakMap;function Ih(e){return!1!==e.drill_down}function Rh(e){if(void 0!==e.drill_down&&"boolean"!=typeof e.drill_down)throw new Error('"drill_down" must be true or false')}function Bh(e,t){Hh.set(e.host,t),e.requestUpdate()}function qh(e,t){return Ih(e.raw)?function(e,t){let o=e;const n=[];for(const a of t){const e=ph(o,[a]);if(!e||e.value<=0)break;o=e,n.push(a)}return{node:o,path:n}}(t,(o=e.host,Hh.get(o)??[])):{node:t,path:[]};var o}function Vh(e,t,o){if(!Ih(e.raw)||t.entity||t.value<=0)return;const n=()=>Bh(e,t.path);return{label:Ze(e.hass,"drill_into",{label:o}),click:e=>{e.stopPropagation(),n()},keydown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n())}}}function Zh(e,t,o,n){if(!o.path.length)return Z;const a=o.path.slice(0,-1),r=a.length&&ph(t,a)?.name||Ze(e.hass,"drill_top");return B`<div class="drill-bar">
    <button
      type="button"
      class="drill-back"
      aria-label=${Ze(e.hass,"drill_back",{name:r})}
      @click=${()=>Bh(e,a)}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z" fill="currentColor"></path>
      </svg>
      <span>${r}</span>
    </button>
    <div class="drill-current">
      <span class="drill-name">${o.node.name}</span>
      ${n?B`<span class="drill-total">${n}</span>`:Z}
    </div>
  </div>`}const Wh=r`
  .drill-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 8px;
    min-width: 0;
  }
  .drill-back {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    min-width: 0;
    max-width: 55%;
    padding: 4px 12px 4px 6px;
    border: none;
    border-radius: 16px;
    background: color-mix(in srgb, var(--primary-color, #03a9f4) 12%, transparent);
    color: var(--primary-color, #03a9f4);
    font: inherit;
    font-size: 0.875em;
    font-weight: 500;
    cursor: pointer;
  }
  .drill-back span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .drill-back:focus-visible {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: 2px;
  }
  .drill-current {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-width: 0;
    line-height: 1.2;
  }
  .drill-name {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
  .drill-total {
    color: var(--secondary-text-color);
    font-size: 0.875em;
  }
  .drillable {
    cursor: pointer;
    outline: none;
  }
`;function Yh(e,t){const o=e.reduce((e,t)=>e+t,0);if(o<=0||t<=0)return 1/0;const n=Math.max(...e),a=Math.min(...e),r=t*t;return Math.max(r*n/(o*o),o*o/(r*a))}function Gh(e,t){const o=Math.min(t,e.w/2,e.h/2);return{x:e.x+o,y:e.y+o,w:e.w-2*o,h:e.h-2*o}}const Xh=["group","bands"],Jh=240;function Kh(e,t,o,n){const a=[],r=[],i=(e,t,o,s)=>{const l=e.children.filter(e=>e.value>0),c=function(e,t){const o=e.map(()=>({x:t.x,y:t.y,w:0,h:0})),n=e.map((e,t)=>({v:Number.isFinite(e)&&e>0?e:0,i:t})).filter(e=>e.v>0).sort((e,t)=>t.v-e.v||e.i-t.i),a=n.reduce((e,t)=>e+t.v,0);if(a<=0||t.w<=0||t.h<=0)return o;const r=t.w*t.h/a;let{x:i,y:s,w:l,h:c}=t,d=[];const u=()=>{const e=d.reduce((e,t)=>e+t.area,0);if(l>=c){const t=e/c;let n=s;for(const e of d){const a=e.area/t;o[e.i]={x:i,y:n,w:t,h:a},n+=a}i+=t,l-=t}else{const t=e/l;let n=i;for(const e of d){const a=e.area/t;o[e.i]={x:n,y:s,w:a,h:t},n+=a}s+=t,c-=t}d=[]};for(const h of n){const e=h.v*r,t=Math.min(l,c),o=d.map(e=>e.area);0===d.length||Yh([...o,e],t)<=Yh(o,t)||u(),d.push({area:e,i:h.i})}return d.length&&u(),o}(l.map(e=>e.value),t);l.forEach((e,t)=>{const l=c[t],d=s&&void 0===n?t:o;if(e.entity)return void r.push({node:e,rect:Gh(l,1.5),series:d,rank:t});const u=Gh(l,1.5),h=u.h>=44&&u.w>=56;a.push({node:e,rect:u,series:d,head:h});const p=Gh(h?{...u,y:u.y+22-3,h:u.h-22+3}:u,3);i(e,p,d,!1)})};return i(e,{x:0,y:0,w:t,h:o},n??0,!0),{groups:a,leaves:r}}function Qh(e,t,o){const n=t.items.find(e=>e.available)?.decimals??1;return ur(dr(e,n,t.hass),o)}const ep=new WeakMap,tp=new WeakMap;const op=(e,t)=>e/t*100+"%";function np(e,t){return`left:${op(e.x,t)};top:${op(e.y,Jh)};width:${op(e.w,t)};height:${op(e.h,Jh)}`}function ap(e,t,o,n,a){const r=e.node.entity,i=function(e,t){const o=e.node.entity;if("bands"===t)return o.band.color;const n=o.config.color;return"string"==typeof n&&n?n:Ja[e.series%Ja.length]}(e,n),s="group"===n&&e.node.path.length?Ku(Ce(i),Math.max(70,100-12*(e.rank??0))):Ce(i),l=Ne(i),{w:c,h:d}=e.rect,{show:u}=t.config,h=c>=120&&d>=70&&null!==r.value&&r.value>=.25*a,p=d>=20&&c>=44,m=u.value&&d>=36;return B`<div
    class="entity tile text-${l} ${h?"big":""}"
    data-index=${e.node.index}
    tabindex="0"
    role="img"
    aria-label=${r.label}
    title=${r.label}
    style="${np(e.rect,o)};background:${s}"
  >
    ${p&&u.name?B`<span class="tile-name">${r.name}</span>`:Z}
    ${p&&m?B`<span class="tile-value">${r.display}</span>`:Z}
  </div>`}const rp=[{name:"treemap_color_by",path:["color_by"],default:"group"},...kh,{name:"drill_down",path:["drill_down"],default:!0}];const ip={layout:"chart",group:"totals",height:280,styles:r`
    ${Wh}
    .treemap-head {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
      gap: 8px;
      min-height: 20px;
      padding-bottom: 6px;
      color: var(--secondary-text-color);
      font-size: 0.875em;
    }
    .treemap {
      position: relative;
      height: ${Jh}px;
    }
    .treemap .group,
    .treemap .tile {
      position: absolute;
      box-sizing: border-box;
      border-radius: 6px;
      overflow: hidden;
    }
    .treemap .group-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 6px;
      height: ${22}px;
      padding: 3px 8px 0;
      box-sizing: border-box;
      font-size: 12px;
      white-space: nowrap;
    }
    .treemap .group-name {
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .treemap .group-total {
      color: var(--secondary-text-color);
    }
    .treemap .tile {
      display: flex;
      flex-direction: column;
      padding: 5px 8px;
      gap: 1px;
      cursor: pointer;
      outline: none;
      opacity: 0;
      transform: scale(0.96);
      transition:
        opacity var(--cd-duration) var(--cd-easing),
        transform var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .treemap .tile {
      opacity: 1;
      transform: none;
    }
    :host([static]) .treemap .tile {
      transition: none;
    }
    .treemap .tile:focus-visible {
      box-shadow: inset 0 0 0 2px var(--primary-text-color);
    }
    .treemap .tile.text-light {
      color: #fff;
    }
    .treemap .tile.text-dark {
      color: rgba(0, 0, 0, 0.87);
    }
    .treemap .tile.text-theme {
      color: var(--primary-text-color);
    }
    .treemap .tile-name,
    .treemap .tile-value {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.25;
    }
    .treemap .tile-name {
      font-size: 13px;
      font-weight: 500;
    }
    .treemap .tile-value {
      font-size: 12px;
      opacity: 0.9;
    }
    .treemap .tile.big .tile-value {
      font-size: 22px;
      font-weight: 500;
      opacity: 1;
    }
    .treemap-message {
      display: flex;
      align-items: center;
      justify-content: center;
      height: ${Jh}px;
      color: var(--secondary-text-color);
      font-size: 0.875em;
      text-align: center;
    }
    .treemap-missing {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      padding-top: 8px;
      font-size: 0.875em;
      color: var(--secondary-text-color);
    }
    .treemap-missing .entity {
      cursor: pointer;
      border-radius: 4px;
    }
    .treemap-missing .entity:focus-visible {
      outline: 2px solid var(--primary-color);
    }
  `,thumbnail:()=>q`
    <rect x="4" y="4" width="28" height="32" rx="3" fill="var(--primary-color, #03a9f4)" />
    <rect x="34" y="4" width="26" height="17" rx="3" fill="var(--warning-color, #f59e0b)" />
    <rect x="34" y="23" width="14" height="13" rx="3" fill="var(--success-color, #43a047)" />
    <rect x="50" y="23" width="10" height="13" rx="3" fill="var(--success-color, #43a047)" opacity="0.7" />`,validate(e){if(lh(e),Rh(e),void 0!==e.color_by&&!Xh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Xh.join(", ")}`)},editor:function(e){const t=$s("treemap",e.hass,()=>[{name:"treemap_color_by",selector:ss(e.hass,"treemap_color_by",Xh)},Mh(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return B`${ks(zh(e),"chart",t,rp,Ah)} ${Sh(e)}`},disconnect:function(e){tp.get(e)?.disconnect(),tp.delete(e)},render(e){const t=function(e){const t=e.host;if(!tp.has(t)&&"function"==typeof ResizeObserver){const o=new ResizeObserver(()=>{const o=t.shadowRoot?.querySelector(".treemap"),n=o?.clientWidth??0;n>0&&Math.abs(n-(ep.get(t)??0))>=1&&(ep.set(t,n),e.requestUpdate())});o.observe(t),tp.set(t,o)}return ep.get(t)??400}(e),o=function(e){const t=sh(e.raw.group_by),o=Ze(e.hass,"treemap_other"),n=e.items.map(n=>uh(n,t,e.hass,o));return hh(e.items,n,"")}(e),n=qh(e,o),a=n.node,r=e.raw.color_by??"group",i=function(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}(e.items),s=n.path.length?o.children.filter(e=>e.value>0).findIndex(e=>e.name===n.path[0]):void 0,{groups:l,leaves:c}=Kh(a,t,Jh,s),d=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available),u=void 0!==i&&e.config.show.value&&a.value>0?Qh(a.value,e,i):"",h=u&&!n.path.length?Ze(e.hass,"treemap_total",{value:u}):"",p=Ze(e.hass,"treemap_aria",{names:(a.children.length?a.children:[]).map(e=>e.name).join(", ")}),m=c.length?B`<div class="treemap" role="img" aria-label=${p}>
          ${l.map(o=>function(e,t,o,n,a){const r=Ce(Ja[e.series%Ja.length]),i=void 0===a?"":Qh(e.node.value,t,a),s=Vh(t,e.node,i?`${e.node.name}, ${i}`:e.node.name);return B`<div
    class="group ${s?"drillable":""}"
    style="${np(e.rect,o)};background:${"bands"===n?"var(--cd-track)":Ku(r,14)}"
    role=${s?"button":Z}
    tabindex=${s?0:Z}
    aria-label=${s?.label??Z}
    data-path=${e.node.path.join("/")}
    @click=${s?.click}
    @keydown=${s?.keydown}
  >
    ${e.head?B`<div class="group-head">
            <span class="group-name">${e.node.name}</span>
            ${t.config.show.value&&i&&e.rect.w>=110?B`<span class="group-total">${i}</span>`:Z}
          </div>`:Z}
  </div>`}(o,e,t,r,i))}
          ${c.map(o=>ap(o,e,t,r,a.value))}
        </div>`:B`<div class="treemap-message">${Ze(e.hass,"treemap_empty")}</div>`;return B`${Zh(e,o,n,u)}
    ${h?B`<div class="treemap-head"><span class="treemap-total">${h}</span></div>`:Z} ${m}
    ${d.length?B`<div class="treemap-missing">
            <span>${Ze(e.hass,"treemap_no_reading")}</span>
            ${d.map(({e:e,index:t})=>B`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
                  >${e.name} (${e.display})</span
                >`)}
          </div>`:Z}`}},sp=["full","half"],lp=["group","bands"],cp=240;function dp(e){return Math.max(45,100-20*(e-1))}function up(e){const t=sh(e.raw.group_by),o=Ze(e.hass,"hierarchy_other"),n=e.items.map(n=>uh(n,t,e.hass,o));return hh(e.items,n,Ze(e.hass,"hierarchy_total"))}function hp(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}function pp(e,t){const o=new Map,n=new Map;let a=0;for(const{node:r,level:i}of e){if(0===i)continue;const e=r.entity?r.entity.config.color:void 0;let s;s=1===i?"string"==typeof e&&e?e:Ja[a++%Ja.length]:n.get(r)??"grey";for(const t of r.children)n.set(t,s);if("bands"===t){o.set(r,r.entity?{fill:Ce(r.entity.band.color),text:Ne(r.entity.band.color)}:{fill:"var(--cd-track)",text:"theme"});continue}const l=dp(i);o.set(r,{fill:Ku(Ce(s),l),text:l>=100?Ne(s):"theme"})}return o}function mp(e,t,o){const n=t.items.find(e=>e.available)?.decimals??1;return ur(dr(e,n,t.hass),o)}function fp(e,t,o){return e.entity?e.entity.label:void 0===o?e.name:`${e.name}, ${mp(e.value,t,o)}`}function gp(e){const t=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available);return t.length?B`<div class="hierarchy-missing">
    <span>${Ze(e.hass,"hierarchy_no_reading")}</span>
    ${t.map(({e:e,index:t})=>B`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
          >${e.name} (${e.display})</span
        >`)}
  </div>`:Z}const vp=[{name:"hierarchy_color_by",path:["color_by"],default:"group"},...kh,{name:"drill_down",path:["drill_down"],default:!0}],yp=[{name:"sunburst_shape",path:["shape"],default:"full"},...vp];function bp(e,t){if(lh(e),Rh(e),void 0!==e.color_by&&!lp.includes(e.color_by))throw new Error(`"color_by" must be one of: ${lp.join(", ")}`);if(t&&void 0!==e.shape&&!sp.includes(e.shape))throw new Error(`"shape" must be one of: ${sp.join(", ")}`)}function xp(e,t,o=t){if(t.value<=0)return B`<div class="hierarchy-message">${Ze(e.hass,"hierarchy_empty")}</div>`;const n=e.raw.shape??"full",a=e.raw.color_by??"group",r=hp(e.items),i=fh(t),s=pp(fh(o),a),l=function(e,t){const o=72/Math.max(1,t);return{start:"half"===e?-Math.PI/2:0,sweep:"half"===e?Math.PI:2*Math.PI,radii:e=>[40+(e-1)*o,40+e*o],viewBox:"half"===e?"-116 -116 232 124":"-116 -116 232 232"}}(n,mh(t)),c=i.filter(e=>e.level>0).map(t=>{const[o,n]=l.radii(t.level),a=bh(o,n,l.start+t.x0*l.sweep,l.start+t.x1*l.sweep),i=fp(t.node,e,r),c=s.get(t.node).fill;return t.node.entity?q`<path class="entity arc leaf" data-index=${t.node.index} tabindex="0" role="img"
            aria-label=${i} d=${a} fill=${c}><title>${i}</title></path>`:function(e,t,o,n,a){const r=Vh(e,t,o);return q`<path
    class="arc group ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":Z}
    tabindex=${r?0:Z}
    aria-label=${r?.label??o}
    d=${n}
    fill=${a}
    @click=${r?.click}
    @keydown=${r?.keydown}
  ><title>${o}</title></path>`}(e,t.node,i,a,c)}),d=void 0!==r&&e.config.show.value?mp(t.value,e,r):"",u=t.children.filter(e=>e.value>0).map(e=>e.name);return B`<div class="sunburst-wrap ${n}">
    <svg
      class="sunburst"
      viewBox=${l.viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label=${Ze(e.hass,"sunburst_aria",{names:u.join(", ")})}
    >
      <g class="sunburst-grow">${c}</g>
    </svg>
    <div class="sunburst-centre">${d?B`<span class="centre-value">${d}</span>`:Z}</div>
  </div>`}function _p(e,t,o=t){const n=e.raw.color_by??"group",a=hp(e.items),r=pp(fh(o),n),i=t.children.filter(e=>e.value>0);return B`<div class="hierarchy-legend">
    ${i.map(t=>{const o=B`<span class="swatch" style="background:${r.get(t)?.fill}"></span>`,n=e.config.show.value&&void 0!==a?B`<span class="legend-value">${mp(t.value,e,a)}</span>`:Z;return t.entity?B`<span class="entity legend-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}
            >${o}${t.name} ${n}</span
          >`:function(e,t,o,n,a){const r=Vh(e,t,fp(t,e,a));return B`<span
    class="legend-item ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":Z}
    tabindex=${r?0:Z}
    aria-label=${r?.label??Z}
    @click=${r?.click}
    @keydown=${r?.keydown}
    >${o}${t.name} ${n}</span
  >`}(e,t,o,n,a)})}
  </div>`}function wp(e,t,o=t){if(t.value<=0)return B`<div class="hierarchy-message">${Ze(e.hass,"hierarchy_empty")}</div>`;const n=e.raw.color_by??"group",a=hp(e.items),r=fh(t),i=pp(fh(o),n),s=mh(t)+1,{show:l}=e.config,c=t.children.filter(e=>e.value>0).map(e=>e.name);return B`<div
    class="icicle"
    role="img"
    aria-label=${Ze(e.hass,"icicle_aria",{names:c.join(", ")})}
  >
    ${r.map(t=>{const o=(t.x1-t.x0)*cp,n=`left:${t.level/s*100}%;width:${100/s}%;top:${100*t.x0}%;height:${100*(t.x1-t.x0)}%`,r=fp(t.node,e,a),c=0===t.level?void 0:i.get(t.node),d=t.node.entity?t.node.entity.display:void 0!==a?mp(t.node.value,e,a):"",u=B`<div class="cell-fill" style=${c?`background:${c.fill}`:""}>
        ${o>=18&&(l.name||0===t.level)?B`<span class="cell-name">${t.node.name}</span>`:Z}
        ${o>=34&&l.value&&d?B`<span class="cell-value">${d}</span>`:Z}
      </div>`,h=`cell level-${Math.min(t.level,1)} text-${c?.text??"root"}`;return t.node.entity?B`<div
            class="entity ${h} leaf"
            data-index=${t.node.index}
            tabindex="0"
            role="img"
            aria-label=${r}
            title=${r}
            style=${n}
          >
            ${u}
          </div>`:function(e,t,o,n,a,r){const i=o.includes("text-root")?void 0:Vh(e,t,n);return B`<div
    class="${o} group ${i?"drillable":""}"
    data-path=${t.path.join("/")}
    title=${n}
    style=${a}
    role=${i?"button":Z}
    tabindex=${i?0:Z}
    aria-label=${i?.label??Z}
    @click=${i?.click}
    @keydown=${i?.keydown}
  >
    ${r}
  </div>`}(e,t.node,h,r,n,u)})}
  </div>`}const $p=r`
  ${Wh}
  .hierarchy-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${cp}px;
    color: var(--secondary-text-color);
    font-size: 0.875em;
    text-align: center;
  }
  .hierarchy-missing,
  .hierarchy-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    padding-top: 8px;
    font-size: 0.875em;
    color: var(--secondary-text-color);
  }
  .hierarchy-legend {
    justify-content: center;
  }
  .hierarchy-legend .legend-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .hierarchy-legend .legend-value {
    color: var(--primary-text-color);
    font-weight: 500;
  }
  .hierarchy-legend .swatch {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .hierarchy-missing .entity,
  .hierarchy-legend .entity {
    cursor: pointer;
    border-radius: 4px;
  }
  .hierarchy-missing .entity:focus-visible,
  .hierarchy-legend .entity:focus-visible {
    outline: 2px solid var(--primary-color);
  }
`,kp={layout:"chart",group:"totals",height:290,styles:r`
    ${$p}
    .sunburst-wrap {
      position: relative;
      height: ${cp}px;
    }
    .sunburst-wrap.half {
      height: ${144}px;
    }
    .sunburst {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .sunburst .arc {
      stroke: var(--card-background-color, #fff);
      stroke-width: 1.5;
      stroke-linejoin: round;
    }
    .sunburst .arc.leaf {
      cursor: pointer;
      outline: none;
    }
    .sunburst .arc.leaf:focus-visible {
      stroke: var(--primary-text-color);
      stroke-width: 2.5;
    }
    .sunburst-grow {
      transform: scale(0.6) rotate(-30deg);
      opacity: 0;
      transition:
        transform var(--cd-duration) var(--cd-easing),
        opacity var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .sunburst-grow {
      transform: none;
      opacity: 1;
    }
    :host([static]) .sunburst-grow {
      transition: none;
    }
    .sunburst-centre {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 72px;
      text-align: center;
      line-height: 1.2;
      pointer-events: none;
    }
    .sunburst-wrap.half .sunburst-centre {
      top: auto;
      bottom: 4px;
      transform: translateX(-50%);
    }
    .sunburst-centre > * {
      pointer-events: auto;
    }
    .centre-value {
      font-size: 1.15em;
      font-weight: 500;
      /* A long total ("339.4 kWh") wraps its unit under the number rather than over the rings. */
      overflow-wrap: normal;
    }
  `,thumbnail:()=>q`
    <circle cx="32" cy="20" r="7" fill="none" />
    <path d="M32 9 A11 11 0 0 1 42 25 L37 22 A6 6 0 0 0 32 14 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M42 25 A11 11 0 0 1 21 23 L26 21 A6 6 0 0 0 37 22 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M21 23 A11 11 0 0 1 32 9 L32 14 A6 6 0 0 0 26 21 Z" fill="var(--success-color, #43a047)" />
    <path d="M32 3 A17 17 0 0 1 48 26 L42 25 A11 11 0 0 0 32 9 Z" fill="var(--primary-color, #03a9f4)" opacity="0.6" />
    <path d="M48 26 A17 17 0 0 1 32 37 L32 31 A11 11 0 0 0 42 25 Z" fill="var(--warning-color, #f59e0b)" opacity="0.6" />`,validate:e=>bp(e,!0),editor:function(e){const t=$s("sunburst",e.hass,()=>[{type:"grid",name:"",schema:[{name:"sunburst_shape",selector:ss(e.hass,"sunburst_shape",sp)},{name:"hierarchy_color_by",selector:ss(e.hass,"hierarchy_color_by",lp)}]},Mh(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return B`${ks(zh(e),"chart",t,yp,Ah)}
  ${Sh(e)}`},render(e){const t=up(e),o=qh(e,t);return B`${Zh(e,t,o,"")} ${xp(e,o.node,t)}
    ${o.node.value>0?_p(e,o.node,t):Z} ${gp(e)}`}},Mp={layout:"chart",group:"totals",height:280,styles:r`
    ${$p}
    .icicle {
      position: relative;
      height: ${cp}px;
    }
    .icicle .cell {
      position: absolute;
      box-sizing: border-box;
      padding: 1.5px;
    }
    .icicle .cell-fill {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      padding: 3px 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      line-height: 1.25;
      opacity: 0;
      transform: translateX(-8px);
      transition:
        opacity var(--cd-duration) var(--cd-easing),
        transform var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .icicle .cell-fill {
      opacity: 1;
      transform: none;
    }
    :host([static]) .icicle .cell-fill {
      transition: none;
    }
    .icicle .text-root .cell-fill {
      background: color-mix(in srgb, var(--primary-text-color, #212121) 78%, var(--card-background-color, #fff));
      color: var(--card-background-color, #fff);
    }
    .icicle .text-light {
      color: #fff;
    }
    .icicle .text-dark {
      color: rgba(0, 0, 0, 0.87);
    }
    .icicle .text-theme {
      color: var(--primary-text-color);
    }
    .icicle .cell-name,
    .icicle .cell-value {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .icicle .cell-name {
      font-size: 13px;
      font-weight: 500;
    }
    .icicle .cell-value {
      font-size: 12px;
      opacity: 0.9;
    }
    .icicle .leaf {
      cursor: pointer;
      outline: none;
    }
    .icicle .leaf:focus-visible .cell-fill {
      box-shadow: inset 0 0 0 2px var(--primary-text-color);
    }
  `,thumbnail:()=>q`
    <rect x="4" y="4" width="16" height="32" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.75" />
    <rect x="22" y="4" width="17" height="19" rx="2" fill="var(--primary-color, #03a9f4)" />
    <rect x="22" y="25" width="17" height="11" rx="2" fill="var(--warning-color, #f59e0b)" />
    <rect x="41" y="4" width="19" height="11" rx="2" fill="var(--primary-color, #03a9f4)" opacity="0.7" />
    <rect x="41" y="17" width="19" height="6" rx="2" fill="var(--primary-color, #03a9f4)" opacity="0.7" />
    <rect x="41" y="25" width="19" height="11" rx="2" fill="var(--warning-color, #f59e0b)" opacity="0.7" />`,validate:e=>bp(e,!1),editor:function(e){const t=$s("icicle",e.hass,()=>[{name:"hierarchy_color_by",selector:ss(e.hass,"hierarchy_color_by",lp)},Mh(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return B`${ks(zh(e),"chart",t,vp,Ah)} ${Sh(e)}`},render(e){const t=up(e),o=qh(e,t);return B`${Zh(e,t,o,"")} ${wp(e,o.node,t)} ${gp(e)}`}};function zp(e,t,o=5){if(!Number.isFinite(e)||!Number.isFinite(t))return[];e>t&&([e,t]=[t,e]),e===t&&(e-=.5,t+=.5);const n=function(e,t=5){if(!Number.isFinite(e)||e<=0||t<1)return 1;const o=e/t,n=10**Math.floor(Math.log10(o)),a=o/n;return(a<=1?1:a<=2?2:a<=2.5?2.5:a<=5?5:10)*n}(t-e,o),a=Math.floor(e/n+1e-9)*n,r=Math.ceil(t/n-1e-9)*n,i=[];for(let s=0,l=a;l<=r+n/2&&s<100;s++,l=a+s*n)i.push(Number(l.toPrecision(12)));return i}function Sp(e){let t=1/0,o=-1/0;for(const n of e)"number"==typeof n&&Number.isFinite(n)&&(n<t&&(t=n),n>o&&(o=n));return t===1/0?void 0:[t,o]}function Ap(e,t){let o=null;for(const n of e){if(n.t>t)break;o=n.v}return o}const Ep=["grouped","stacked","percent"],Cp=["series","bands"],jp=Ja;function Lp(e,t,o="none"){const n=new Map,a=[];for(const l of e){let e=n.get(l.group);e||(e={key:l.group,label:l.group,segments:[],total:null},n.set(l.group,e)),a.includes(l.series)||a.push(l.series);const t=e.segments.length;e.segments.push({index:l.index,series:l.series,value:l.value,from:0,to:0,slot:t}),null!==l.value&&(e.total=(e.total??0)+l.value)}const r=[...n.values()];for(const l of r){const e=l.segments.reduce((e,t)=>e+Math.abs(t.value??0),0);let o=0,n=0;for(const a of l.segments){if(null===a.value)continue;const r="percent"===t?0===e?0:a.value/e:a.value;"grouped"===t?a.to=r:r>=0?(a.from=o,a.to=o+=r):(a.from=n,a.to=n+=r)}}const i=r.flatMap(e=>e.segments.flatMap(e=>null===e.value?[]:[e.from,e.to])),s=function([e,t]){return[Math.min(0,e),Math.max(0,t)]}(Sp(i)??[0,1]);if(s[0]===s[1]&&(s[1]=1),"none"!==o){const e="ascending"===o?1:-1;r.sort((t,o)=>null===t.total!=(null===o.total)?null===t.total?1:-1:((t.total??0)-(o.total??0))*e)}return{rows:r,domain:s,series:a}}function Np(e,t){if("grouped"!==t)return 36;const o=Math.max(1,e.segments.length);return 12*o+3*(o-1)+16}function Tp(e){return"string"==typeof e&&""!==e.trim()?e.trim():"number"==typeof e?String(e):void 0}function Op(e,t){return`${dr(100*Math.abs(e),0,t)} %`}const Fp=e=>`${(100*e).toFixed(3)}%`;const Pp=[{name:"mode",path:["mode"],default:"grouped"},{name:"bars_color_by",path:["color_by"],default:"series"}];const Dp=[{name:"bar_group",path:["group"]},{name:"bar_series",path:["series"]},{name:"bar_color",path:["color"]}];const Up={layout:"chart",group:"compare",height:200,styles:r`
    .bars {
      padding: 4px 0;
    }
    .bar-rows {
      position: relative;
      transition: height var(--cd-duration) var(--cd-easing);
    }
    .bar-row {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      transition: transform var(--cd-duration) var(--cd-easing);
    }
    .row-name {
      flex: none;
      width: var(--name-w);
      padding-right: 8px;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.875em;
    }
    .row-plot {
      position: relative;
      flex: 1;
      min-width: 0;
      align-self: stretch;
      margin: 0 var(--value-w) 0 var(--neg-w);
    }
    .bars .zero {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background: var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .bar-seg {
      position: absolute;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transform-origin: left center;
      transition:
        left var(--cd-duration) var(--cd-easing),
        width var(--cd-duration) var(--cd-easing),
        transform var(--cd-duration) var(--cd-easing);
    }
    .bar-seg.negative {
      transform-origin: right center;
    }
    .mode-stacked .bar-seg,
    .mode-percent .bar-seg {
      border-radius: 2px;
      border-right: 1px solid var(--card-background-color, #fff);
    }
    :host(:not([ready])) .bar-seg {
      transform: scaleX(0);
    }
    .bar-seg:focus-visible {
      outline: 2px solid var(--primary-text-color);
      outline-offset: 1px;
    }
    .seg-text {
      font-size: 11px;
      line-height: 1;
      white-space: nowrap;
      color: #fff;
      pointer-events: none;
    }
    .seg-text.dark {
      color: rgba(0, 0, 0, 0.8);
    }
    .seg-text.theme {
      color: var(--primary-text-color);
    }
    .bar-value {
      position: absolute;
      display: flex;
      align-items: center;
      padding: 0 4px;
      font-size: 11px;
      line-height: 1;
      white-space: nowrap;
      color: var(--primary-text-color);
      transition:
        left var(--cd-duration) var(--cd-easing),
        right var(--cd-duration) var(--cd-easing);
    }
    .bar-value.unavailable {
      color: var(--secondary-text-color);
    }
    .bar-value.total {
      font-size: 12px;
      font-weight: 500;
    }
    :host([static]) .bar-row,
    :host([static]) .bar-rows,
    :host([static]) .bar-value {
      transition: none;
    }
    .bar-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 16px;
      padding-top: 8px;
      font-size: 0.875em;
      color: var(--secondary-text-color);
    }
    .bar-legend-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .bar-legend .swatch {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  `,thumbnail:()=>q`
    <rect x="4" y="6" width="40" height="5" rx="2" fill="var(--primary-color, #03a9f4)" />
    <rect x="4" y="12" width="30" height="5" rx="2" fill="var(--warning-color, #f59e0b)" />
    <rect x="4" y="23" width="22" height="5" rx="2" fill="var(--primary-color, #03a9f4)" />
    <rect x="4" y="29" width="34" height="5" rx="2" fill="var(--warning-color, #f59e0b)" />
    <line x1="4" y1="3" x2="4" y2="37" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate:function(e){if(void 0!==e.mode&&!Ep.includes(e.mode))throw new Error(`"mode" must be one of: ${Ep.join(", ")}`);if(void 0!==e.color_by&&!Cp.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Cp.join(", ")}`);(e.entities??[]).forEach((e,t)=>{if("object"==typeof e&&null!==e)for(const o of["group","series"]){const n=e[o];if(null!=n&&"string"!=typeof n&&"number"!=typeof n)throw new Error(`Entity ${t+1}: "${o}" must be text`)}})},editor:function(e){const t=$s("grouped_bars",e.hass,()=>[{type:"grid",name:"",schema:[{name:"mode",selector:ss(e.hass,"mode",Ep)},{name:"bars_color_by",selector:ss(e.hass,"bars_color_by",Cp)}]}]);return ks(e,"chart",t,Pp)},entityFields:e=>({schema:$s("grouped_bars_entity",e,()=>[{type:"grid",name:"",schema:[{name:"bar_group",selector:{text:{}}},{name:"bar_series",selector:{text:{}}}]},{name:"bar_color",selector:{text:{}}}]),fields:Dp}),render:function(e){const{hass:t}=e,o=e.raw.mode??"grouped",n="bands"===e.raw.color_by,a=Lp(function(e){return function(e){const t=e.config.entities;return e.items.map((e,o)=>({e:e,index:o,at:t.indexOf(e.config)})).sort((e,t)=>(-1===e.at?1/0:e.at)-(-1===t.at?1/0:t.at)||e.index-t.index)}(e).map(({e:e,index:t})=>{const o=e.config;return{index:t,group:Tp(o.group)??`\0${t}`,series:Tp(o.series)??"",value:e.available?e.value:null}})}(e),o,e.config.sort),[r,i]=a.domain,s=e=>(e-r)/(i-r),l=s(0),c=t=>{const o=e.items[t.index],r=o.config.color;return n?o.band.color:"string"==typeof r&&r?r:jp[a.series.indexOf(t.series)%jp.length]},{show:d}=e.config,u=!n&&a.series.some(e=>""!==e)&&!1!==e.raw.show?.legend,h=e.items.map(e=>e.display.length),p=d.value&&"percent"!==o?Math.min(12,Math.max(4,...h)):0,m=p?Math.round(6.5*p+8):4,f=Math.max(0,...a.rows.map(t=>(t.label.startsWith("\0")?e.items[t.segments[0].index].name:t.label).length));let g=0;const v=a.rows.map(e=>{const t=g;return g+=Np(e,o),{row:e,top:t}}),y=Ze(t,"grouped_bars_aria",{names:e.items.map(e=>e.name).join(", ")}),b=r<0;return B`<div
    class="bars mode-${o}"
    role="img"
    aria-label=${y}
    style="--name-w:${d.name?`min(35%, calc(${f}ch + 16px))`:"0px"};--value-w:${m}px;--neg-w:${b?m:0}px"
  >
    <div class="bar-rows" style="height:${g}px">
      ${Me(v,e=>e.row.key,({row:n,top:a})=>B`<div class="bar-row" style="transform:translateY(${a}px);height:${Np(n,o)}px">
            ${d.name?B`<div class="row-name">
                    ${n.label.startsWith("\0")?e.items[n.segments[0].index].name:n.label}
                  </div>`:Z}
            <div class="row-plot">
              <div class="zero" style="left:${Fp(l)}"></div>
              ${n.segments.map(n=>(n=>{const a=e.items[n.index],r=c(n),i=s(Math.min(n.from,n.to)),u=Math.abs(s(n.to)-s(n.from)),h="grouped"===o?8+15*n.slot:8,p="grouped"===o?12:20,m=n.to<n.from||"grouped"===o&&n.to<0,f="percent"===o&&a.available?n.to-n.from:0,g="percent"===o&&d.value&&Math.abs(f)>=.12;return B`<div
        class="entity bar-seg ${m?"negative":""} ${a.available?"":"unavailable"}"
        data-index=${n.index}
        tabindex="0"
        role="button"
        aria-label=${"percent"===o&&a.available?`${a.label} (${Op(f,t)})`:a.label}
        style="left:${Fp(i)};width:${Fp(u)};top:${h}px;height:${p}px;background:${Ce(r)}"
      >
        ${g?B`<span class="seg-text ${Ne(r)}" aria-hidden="true">${Op(f,t)}</span>`:Z}
      </div>
      ${"grouped"===o&&d.value?B`<span
              class="bar-value ${a.available?"":"unavailable"} ${m?"left":""}"
              style="${m?"right":"left"}:${Fp(m?1-s(n.to):a.available?s(n.to):l)};top:${h}px;height:${p}px"
              aria-hidden="true"
              >${a.display}</span
            >`:Z}`})(n))} ${(n=>{if("stacked"!==o||!d.value)return Z;const a=e.items[n.segments[0].index],r=n.segments.filter(e=>null!==e.value).map(e=>e.to),i=Math.max(0,...r),l=Math.min(0,...r),c=0===i&&l<0,u=null===n.total?a.display:ur(dr(n.total,a.decimals,t),a.unit);return B`<span
      class="bar-value total ${null===n.total?"unavailable":""} ${c?"left":""}"
      style="${c?"right":"left"}:${Fp(c?1-s(l):s(i))};top:${8}px;height:${20}px"
      aria-hidden="true"
      >${u}</span
    >`})(n)}
            </div>
          </div>`)}
    </div>
    ${u?B`<div class="bar-legend">
            ${a.series.filter(e=>""!==e).map(e=>{const t=function(e,t){for(const o of e.rows)for(const e of o.segments)if(e.series===t)return e;return}(a,e);return B`<span class="bar-legend-item"
                  ><span class="swatch" style="background:${Ce(t?c(t):"grey")}"></span
                  >${e}</span
                >`})}
          </div>`:Z}
  </div>`}};function Hp(e,t,o,n=""){const a=Se(e.config);return B`<div
    class="entity ${n} ${a?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    role="meter"
    aria-valuenow=${e.available?String(e.value):Z}
    aria-valuemin=${e.min}
    aria-valuemax=${e.max}
    aria-label=${e.label}
    tabindex=${a?0:Z}
    style=${function(e){const t=Ce(e.band.color);return`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${t}`}(e)}
  >
    ${o}
  </div>`}const Ip=r`
  .compare .entity.interactive {
    cursor: pointer;
  }
  .compare .entity:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: 4px;
  }
  .compare .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }
  .compare .value {
    font-weight: 500;
    white-space: nowrap;
  }
  .compare .entity.unavailable .value {
    color: var(--secondary-text-color);
    font-weight: 400;
    font-size: 0.875em;
    white-space: normal;
  }
  .compare .sub {
    color: var(--secondary-text-color);
    font-size: 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Rp=["shades","colours"];function Bp(e,t,o,n){const{show:a}=o.config,r=function(e){const t=[];return e.bands.forEach((o,n)=>{const a=e.bands[n+1],r=Number.isFinite(o.from)?Fs(o.from,e.min,e.max):0,i=a?Fs(a.from,e.min,e.max):1;i<=r||t.push({from:t.length?r:0,to:i,color:o.color,level:0})}),t.forEach((e,t)=>e.level=t),t}(e),i=a.target?function(e,t){if(null!==e.target)return Ze(t,"compare_target",{target:ur(dr(e.target,e.decimals,t),e.unit)})}(e,o.hass):void 0,s=a.value||!e.available,l=B`
    ${a.name?B`<div class="label">
            <span class="name">${e.name}</span>${i?B`<span class="sub">${i}</span>`:Z}
          </div>`:Z}
    <div class="track">
      ${r.map(e=>B`<div
            class="range"
            style="left:${100*e.from}%;width:${100*(e.to-e.from)}%;background:${function(e,t,o){return"colours"===o?`color-mix(in srgb, ${Ce(e.color)} 22%, transparent)`:`color-mix(in srgb, var(--primary-text-color, #212121) ${t<=1?8:6+Math.round(e.level/(t-1)*12)}%, transparent)`}(e,r.length,n)}"
          ></div>`)}
      ${e.available?B`<div class="fill"></div>`:Z}
      ${a.target&&e.available&&null!==e.targetPosition?B`<div class="target"></div>`:Z}
    </div>
    ${s?B`<span class="value">${e.display}</span>`:B`<span></span>`}
  `;return Hp(e,t,l,"bullet-row")}const qp={layout:"chart",group:"compare",height:120,styles:r`
    ${Ip}
    .style-bullet .bullets {
      display: grid;
      grid-template-columns: minmax(0, auto) minmax(96px, 1fr) fit-content(8em);
      column-gap: 12px;
    }
    .style-bullet .bullets.no-name {
      grid-template-columns: minmax(96px, 1fr) fit-content(8em);
    }
    .style-bullet .bullet-row {
      display: grid;
      grid-column: 1 / -1;
      grid-template-columns: subgrid;
      align-items: center;
      padding: 6px 0;
    }
    .style-bullet .label {
      display: flex;
      flex-direction: column;
      min-width: 0;
      max-width: 14em;
    }
    .style-bullet .track {
      position: relative;
      height: 28px;
      border-radius: 6px;
      overflow: hidden;
      background: var(--cd-track);
    }
    .style-bullet .range {
      position: absolute;
      top: 0;
      bottom: 0;
    }
    .style-bullet .fill {
      position: absolute;
      top: 30%;
      bottom: 30%;
      left: calc(var(--start) * 100%);
      width: calc((var(--end) - var(--start)) * 100%);
      border-radius: 4px;
      background: var(--c-start);
      background-image: linear-gradient(90deg, var(--c-start), color-mix(in srgb, var(--c-start) 80%, #fff));
      transition:
        left var(--cd-duration) var(--cd-easing),
        width var(--cd-duration) var(--cd-easing);
    }
    .style-bullet .target {
      position: absolute;
      top: 3px;
      bottom: 3px;
      width: 3px;
      border-radius: 2px;
      left: calc(var(--target) * (100% - 3px));
      background: var(--primary-text-color);
      transition: left var(--cd-duration) var(--cd-easing);
    }
    .style-bullet .value {
      text-align: right;
      min-width: calc(var(--cd-value-ch, 4) * 0.62em);
    }
  `,thumbnail:()=>q`
    <rect x="4" y="8" width="56" height="10" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.08" />
    <rect x="4" y="8" width="30" height="10" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.12" />
    <rect x="4" y="11" width="38" height="4" rx="2" fill="var(--primary-color, #03a9f4)" />
    <rect x="46" y="6" width="2" height="14" rx="1" fill="var(--primary-text-color, #212121)" />
    <rect x="4" y="24" width="56" height="10" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.08" />
    <rect x="4" y="24" width="24" height="10" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.12" />
    <rect x="4" y="27" width="48" height="4" rx="2" fill="var(--warning-color, #f59e0b)" />
    <rect x="40" y="22" width="2" height="14" rx="1" fill="var(--primary-text-color, #212121)" />`,validate(e){if(void 0!==e.ranges&&!Rp.includes(e.ranges))throw new Error(`"ranges" must be one of: ${Rp.join(", ")}`)},editor(e){const t=$s("bullet",e.hass,()=>[{name:"ranges",selector:ss(e.hass,"ranges",Rp)}]);return ks(e,"chart",t,[{name:"ranges",path:["ranges"],default:"shades"}])},render(e){const t=e.raw.ranges??"shades",o=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_bullet"),names:e.items.map(e=>e.name).join(", ")});return B`<div class="compare bullets ${e.config.show.name?"":"no-name"}" role="group" aria-label=${o}>
      ${e.items.map((o,n)=>Bp(o,n,e,t))}
    </div>`}},Vp=["vertical","horizontal"];function Zp(e,t,o){const{show:n}=t.config;return B`<div class="lane">
    <div class="scale">
      ${e.available?B`<div class="stem"></div>
              ${n.target&&null!==e.targetPosition?B`<div class="target"></div>`:Z}
              <div class="dot"></div>
              ${o&&n.value?B`<span class="value tip">${e.display}</span>`:Z}`:o?B`<span class="value tip">${e.display}</span>`:Z}
    </div>
  </div>`}function Wp(e,t,o){const{show:n}=o.config;return Hp(e,t,B`${Zp(e,o,!0)} ${n.name?B`<span class="name">${e.name}</span>`:Z}`,"pop")}function Yp(e,t,o){const{show:n}=o.config,a=n.value||!e.available;return Hp(e,t,B`${n.name?B`<span class="name">${e.name}</span>`:Z} ${Zp(e,o,!1)}
  ${a?B`<span class="value">${e.display}</span>`:B`<span></span>`}`,"pop")}const Gp={layout:"chart",group:"compare",height:200,styles:r`
    ${Ip}
    .style-lollipop .lane {
      position: relative;
    }
    .style-lollipop .scale {
      position: absolute;
    }
    .style-lollipop .stem {
      position: absolute;
      background: var(--c-start);
      border-radius: 2px;
    }
    .style-lollipop .dot {
      position: absolute;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--c-start);
      background-image: radial-gradient(
        circle at 35% 30%,
        color-mix(in srgb, var(--c-start) 70%, #fff),
        var(--c-start)
      );
    }
    .style-lollipop .target {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 2px solid var(--primary-text-color);
      background: var(--card-background-color, #fff);
      box-sizing: content-box;
    }

    /* Upright: one column per entity over a shared baseline. */
    .style-lollipop .vertical {
      display: flex;
      align-items: stretch;
    }
    .style-lollipop .vertical .pop {
      flex: 1 1 0;
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .style-lollipop .vertical .lane {
      align-self: stretch;
      height: 150px;
      border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .style-lollipop .vertical .scale {
      left: 50%;
      top: 26px;
      bottom: 0;
    }
    .style-lollipop .vertical .stem {
      left: -1.5px;
      width: 3px;
      bottom: calc(var(--start) * 100%);
      height: calc((var(--end) - var(--start)) * 100%);
      transition:
        bottom var(--cd-duration) var(--cd-easing),
        height var(--cd-duration) var(--cd-easing);
    }
    .style-lollipop .vertical .dot {
      left: -7px;
      bottom: calc(var(--pos) * 100% - 7px);
      transition: bottom var(--cd-duration) var(--cd-easing);
    }
    .style-lollipop .vertical .target {
      left: -6px;
      bottom: calc(var(--target) * 100% - 6px);
    }
    .style-lollipop .vertical .tip {
      position: absolute;
      left: 0;
      bottom: calc(var(--pos) * 100% + 10px);
      transform: translateX(-50%);
      font-size: 0.875em;
      line-height: 1.2;
      padding: 0 3px;
      border-radius: 3px;
      background: var(--card-background-color, #fff);
      z-index: 1;
      transition: bottom var(--cd-duration) var(--cd-easing);
    }
    .style-lollipop .vertical .name {
      max-width: 100%;
      color: var(--secondary-text-color);
      font-size: 0.875em;
      padding: 0 2px;
    }
    .style-lollipop .vertical .entity.unavailable .value {
      font-size: 0.75em;
      white-space: nowrap;
    }

    /* Across: one row per entity, stems growing to the right. */
    .style-lollipop .horizontal {
      display: grid;
      grid-template-columns: minmax(0, auto) minmax(96px, 1fr) fit-content(8em);
      column-gap: 12px;
    }
    .style-lollipop .horizontal.no-name {
      grid-template-columns: minmax(96px, 1fr) fit-content(8em);
    }
    .style-lollipop .horizontal .pop {
      display: grid;
      grid-column: 1 / -1;
      grid-template-columns: subgrid;
      align-items: center;
      padding: 6px 0;
    }
    .style-lollipop .horizontal .name {
      max-width: 14em;
    }
    .style-lollipop .horizontal .lane {
      height: 20px;
      border-left: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .style-lollipop .horizontal .scale {
      top: 50%;
      left: 0;
      right: 7px;
    }
    .style-lollipop .horizontal .stem {
      top: -1.5px;
      height: 3px;
      left: calc(var(--start) * 100%);
      width: calc((var(--end) - var(--start)) * 100%);
      transition:
        left var(--cd-duration) var(--cd-easing),
        width var(--cd-duration) var(--cd-easing);
    }
    .style-lollipop .horizontal .dot {
      top: -7px;
      left: calc(var(--pos) * 100% - 7px);
      transition: left var(--cd-duration) var(--cd-easing);
    }
    .style-lollipop .horizontal .target {
      top: -6px;
      left: calc(var(--target) * 100% - 6px);
    }
    .style-lollipop .horizontal .value {
      text-align: right;
    }
  `,thumbnail:()=>q`
    <line x1="4" y1="36" x2="60" y2="36" stroke="var(--divider-color, #ccc)" stroke-width="1" />
    <line x1="14" y1="36" x2="14" y2="14" stroke="var(--success-color, #1fae7a)" stroke-width="2.5" />
    <circle cx="14" cy="14" r="5" fill="var(--success-color, #1fae7a)" />
    <line x1="32" y1="36" x2="32" y2="22" stroke="var(--success-color, #1fae7a)" stroke-width="2.5" />
    <circle cx="32" cy="22" r="5" fill="var(--success-color, #1fae7a)" />
    <line x1="50" y1="36" x2="50" y2="8" stroke="var(--success-color, #1fae7a)" stroke-width="2.5" />
    <circle cx="50" cy="8" r="5" fill="var(--success-color, #1fae7a)" />`,validate(e){if(void 0!==e.orientation&&!Vp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${Vp.join(", ")}`)},editor(e){const t=$s("lollipop",e.hass,()=>[{name:"orientation",selector:ss(e.hass,"orientation",Vp)}]);return ks(e,"chart",t,[{name:"orientation",path:["orientation"],default:"vertical"}])},render(e){const t=e.raw.orientation??"vertical",o=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_lollipop"),names:e.items.map(e=>e.name).join(", ")}),n="vertical"===t?Wp:Yp;return B`<div
      class="compare ${t} ${e.config.show.name?"":"no-name"}"
      role="group"
      aria-label=${o}
    >
      ${e.items.map((t,o)=>n(t,o,e))}
    </div>`}},Xp=["change","current"],Jp=["vertical","horizontal"];function Kp(e){const t=e.find(e=>null!==e.v);return t?t.v:null}const Qp={vertical:.14,horizontal:.24};function em(e,t){const{items:o,raw:n,hass:a}=e,r=n.steps??"change",i=!0===n.start_from_first,s=e=>t?.series[e]?.points??[],l=(e,t)=>{const o="change"===r?function(e){const t=e.filter(e=>null!==e.v);return 0===t.length?null:t[t.length-1].v-t[0].v}(s(t)):e.available?e.value:null;return null===o?null:function(e){return!0===e.config.invert}(e)?-o:o},c=i&&o.length?{value:Kp(s(0)),index:0}:null,d=o.map((e,t)=>({value:l(e,t),index:t})).slice(i?1:0),{bars:u}=function(e,t,o){const n=[];let a=0;if(e){const t=e.value??0;n.push({kind:"start",from:0,to:t,delta:t,index:e.index,missing:null===e.value}),a=t}for(const s of t){const e=s.value??0;n.push({kind:"step",from:a,to:a+e,delta:e,index:s.index,missing:null===s.value}),a+=e}o&&n.push({kind:"total",from:0,to:a,delta:a,missing:!1});let r=0,i=0;for(const s of n)r=Math.min(r,s.from,s.to),i=Math.max(i,s.from,s.to);return r===i&&(i=r+1),{bars:n,domain:[r,i]}}(c,d,!1!==n.total),h=o[0]?.decimals??1;return u.map(e=>{const t=void 0===e.index?void 0:o[e.index],n=t?.decimals??h;let r,i;return"start"===e.kind?(r=Ze(a,"waterfall_start"),i=e.missing?Ze(a,"waterfall_no_readings"):dr(e.to,n,a)):"total"===e.kind?(r=Ze(a,c?"waterfall_end":"waterfall_total"),i=dr(e.to,h,a)):(r=t.name,i=e.missing?t.available?Ze(a,"waterfall_no_readings"):t.display:function(e,t,o){const n=dr(Math.abs(e),t,o);return 0===Number(e.toFixed(t))?dr(0,t,o):`${e>0?"+":"−"}${n}`}(e.delta,n,a)),{...e,name:r,label:i,entity:t}})}function tm(e,t){const o="horizontal"===e.raw.orientation,n=t.flatMap(e=>[e.from,e.to]);let a=Math.min(0,...n),r=Math.max(0,...n);a===r&&(r=a+1);const i=(r-a)*Qp[o?"horizontal":"vertical"];r+=i,a<0&&(a-=i);const s=e=>(e-a)/(r-a)*100,l=t.length,c=100/l,d=o?.64:.6,u=e=>c*e+c*(1-d)/2,h=e=>u(e)+c*d,p=e.items[0]?.unit??"",m=Ze(e.hass,"waterfall_aria",{bars:t.map(e=>`${e.name} ${e.missing?e.label:ur(e.label,e.entity?.unit??p)}`).join(", ")}),f=e=>void 0===e.index?"":"entity",g=t.map((e,t)=>{const n=`--a0:${s(Math.min(e.from,e.to))}%;--a1:${s(Math.max(e.from,e.to))}%;--c0:${u(t)}%;--c1:${h(t)}%;--cm:${(u(t)+h(t))/2}%;--color:${function(e){return"step"!==e.kind?Ce("primary"):Ce(e.delta<0?"red":"green")}(e)}`,a=t+1<l?`--a:${s(e.to)}%;--c0:${h(t)}%;--c1:${u(t+1)}%`:"";return B`<div
        class="bar ${e.kind} ${e.missing?"missing":""} ${e.delta<0?"fall":"rise"} ${f(e)}"
        data-index=${e.index??Z}
        tabindex=${void 0===e.index?Z:0}
        aria-label=${`${e.name}, ${e.label}`}
        style=${n}
      ></div>
      <span class="bar-label ${e.missing?"missing":""} ${e.kind}" style=${n}
        >${e.missing&&!o?"–":e.label}</span
      >
      ${a?B`<div class="connector" style=${a}></div>`:Z}`}),v=t.map(e=>B`<div class="bar-name ${f(e)}" data-index=${e.index??Z} title=${e.name}>
        <span>${e.name}</span>
      </div>`);return B`<div class="wf ${o?"horizontal":"vertical"}" style="--n:${l}">
    <div class="names">${v}</div>
    <div class="wf-plot" role="img" aria-label=${m}>
      <div class="zero" style="--a:${s(0)}%"></div>
      ${g}
    </div>
  </div>`}const om=[...us,{name:"steps",path:["steps"],default:"change"},{name:"orientation",path:["orientation"],default:"vertical"},{name:"start_from_first",path:["start_from_first"],default:!1},{name:"total",path:["total"],default:!0}];function nm(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}const am={layout:"chart",group:"totals",height:240,styles:r`
    ${cr}
    .wf {
      display: grid;
      gap: 6px;
    }
    .wf.vertical {
      grid-template-rows: 180px auto;
    }
    .wf.vertical .names {
      grid-row: 2;
      display: grid;
      grid-template-columns: repeat(var(--n), minmax(0, 1fr));
    }
    .wf.vertical .wf-plot {
      grid-row: 1;
    }
    .wf.horizontal {
      grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
      max-width: 100%;
    }
    .wf.horizontal .names {
      display: grid;
      grid-template-rows: repeat(var(--n), 30px);
      max-width: 140px;
    }
    .wf.horizontal .wf-plot {
      height: calc(var(--n) * 30px);
    }
    .wf-plot {
      position: relative;
      min-width: 0;
    }
    .bar-name {
      min-width: 0;
      display: flex;
      align-items: center;
      font-size: 0.8125em;
      color: var(--secondary-text-color);
    }
    .bar-name span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .wf.vertical .bar-name {
      justify-content: center;
      padding: 0 2px;
    }
    .bar-name.entity {
      cursor: pointer;
      border-radius: 4px;
    }
    .bar {
      position: absolute;
      box-sizing: border-box;
      background: linear-gradient(var(--color), color-mix(in srgb, var(--color) 80%, #fff));
      border-radius: 4px;
      transition: transform var(--cd-duration) var(--cd-easing);
    }
    .bar.entity {
      cursor: pointer;
    }
    .bar.missing {
      background: none;
      border: 1.5px dashed var(--secondary-text-color);
      opacity: 0.6;
    }
    .wf.vertical .bar {
      left: var(--c0);
      width: calc(var(--c1) - var(--c0));
      bottom: var(--a0);
      height: max(calc(var(--a1) - var(--a0)), 2px);
      transform-origin: 50% 100%;
      transform: scaleY(0);
    }
    .wf.horizontal .bar {
      top: var(--c0);
      height: calc(var(--c1) - var(--c0));
      left: var(--a0);
      width: max(calc(var(--a1) - var(--a0)), 2px);
      transform-origin: 0 50%;
      transform: scaleX(0);
    }
    .wf.vertical .bar.missing {
      height: 16px;
      bottom: calc(var(--a0) - 8px);
    }
    .wf.horizontal .bar.missing {
      width: 16px;
      left: calc(var(--a0) - 8px);
    }
    :host([ready]) .wf .bar {
      transform: none;
    }
    .bar-label {
      position: absolute;
      font-size: 0.8125em;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
      pointer-events: none;
      color: var(--primary-text-color);
    }
    .bar-label:not(.start):not(.total):not(.missing) {
      color: var(--color);
    }
    .bar-label.missing {
      color: var(--secondary-text-color);
      font-weight: 400;
    }
    .wf.horizontal .bar-label.missing {
      margin-left: 10px;
    }
    .wf.vertical .bar-label {
      left: var(--cm);
      bottom: calc(var(--a1) + 4px);
      transform: translateX(-50%);
    }
    .wf.horizontal .bar-label {
      left: calc(var(--a1) + 6px);
      top: var(--cm);
      transform: translateY(-50%);
    }
    .connector {
      position: absolute;
      pointer-events: none;
      border: 0 dashed var(--secondary-text-color);
      opacity: 0.6;
    }
    .wf.vertical .connector {
      left: var(--c0);
      width: calc(var(--c1) - var(--c0));
      bottom: var(--a);
      border-top-width: 1px;
    }
    .wf.horizontal .connector {
      top: var(--c0);
      height: calc(var(--c1) - var(--c0));
      left: var(--a);
      border-left-width: 1px;
    }
    /* Narrow cards: smaller text so neighbouring columns' labels don't run into each other. */
    @container (max-width: 400px) {
      .wf .bar-label,
      .wf .bar-name {
        font-size: 0.6875em;
      }
      .wf.horizontal .names {
        max-width: 96px;
      }
    }
    .zero {
      position: absolute;
      pointer-events: none;
      background: var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .wf.vertical .zero {
      left: 0;
      right: 0;
      bottom: var(--a);
      height: 1px;
    }
    .wf.horizontal .zero {
      top: 0;
      bottom: 0;
      left: var(--a);
      width: 1px;
    }
  `,thumbnail:()=>q`
    <rect x="4" y="22" width="9" height="14" rx="1.5" fill="var(--primary-color, #03a9f4)" />
    <rect x="16" y="10" width="9" height="12" rx="1.5" fill="var(--success-color, #43a047)" />
    <rect x="28" y="10" width="9" height="8" rx="1.5" fill="var(--error-color, #db4437)" />
    <rect x="40" y="18" width="9" height="6" rx="1.5" fill="var(--error-color, #db4437)" />
    <rect x="52" y="24" width="9" height="12" rx="1.5" fill="var(--primary-color, #03a9f4)" />`,validate(e){if(Qa(e),void 0!==e.steps&&!Xp.includes(e.steps))throw new Error(`"steps" must be one of: ${Xp.join(", ")}`);if(void 0!==e.orientation&&!Jp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${Jp.join(", ")}`);nm(e.start_from_first,"start_from_first"),nm(e.total,"total");for(const t of e.entities??[])"object"==typeof t&&nm(t.invert,"invert")},editor:function(e){const t=$s("waterfall",e.hass,()=>[...hs(e.hass),{type:"grid",name:"",schema:[{name:"steps",selector:ss(e.hass,"steps",Xp)},{name:"orientation",selector:ss(e.hass,"orientation",Jp)}]},{name:"start_from_first",selector:{boolean:{}}},{name:"total",selector:{boolean:{}}}]);return B`${ks(e,"chart",t,om)}
  ${$h(e,"waterfall_invert","invert",{boolean:{}},!1)}`},disconnect:rr,render(e){let t;if("change"===((o=e.raw).steps??"change")||!0===o.start_from_first){t=er(e);const o=sr(t,e);if(o)return o}var o;return tm(e,em(e,t))}},rm=["value","change"],im=["direction","group"],sm=["bad","good"];const lm={"5minute":3e5,hour:36e5,day:864e5,month:26784e5};function cm(e,t,o){const n=function(e,t,o=1e-9){return Math.abs(t-e)<=o?"flat":t>e?"up":"down"}(e,t);return"flat"===n?"grey":"up"===n==("bad"===o)?"red":"green"}function dm(e,t,o){const n=1===o.last,a=Ze(e,`slope_unit_${o.unit}${n?"":"_other"}`);return Ze(e,n?`slope_${t}_one`:`slope_${t}`,{n:o.last,unit:a})}function um(e,t,o){const n=function(e,t){if(null!==e&&null!==t&&0!==e)return(t-e)/Math.abs(e)}(e,t);if(void 0===n)return"";const a=Math.round(100*n);return`${a>0?"+":a<0?"−":""}${dr(Math.abs(a),0,o)} %`}function hm(e,t,o,n){const a="statistics"===e.source?lm[Aa(e.range)]:0,r="group"===t.raw.color_by,i="good"===t.raw.increase?"good":"bad",s=new Map,l=e.series.map(e=>{const t=e.entity.available?e.entity.value:null,[l,c]=function(e,t,o,n,a=0){const r=t.find(e=>null!==e.v),i=Ap(t,o.start)??(r&&r.t-o.start<=a?r.v:null);if("value"===e)return[i,n];const s=Ap(t,o.middle);return[null===i||null===s?null:s-i,null===s||null===n?null:n-s]}(o,e.points,n,t,a),d=function(e){const t=e.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0}(e.entity),u=e.entity.config.color;let h;if(r){const t=d??`#${e.index}`;s.has(t)||s.set(t,Ja[s.size%Ja.length]),h=u??s.get(t)}else h=null!==l&&null!==c?cm(l,c,i):"grey";return{index:e.index,entity:e.entity,from:l,to:c,color:Ce(h),group:d}});return l}const pm=[...us,{name:"measure",path:["measure"],default:"value"},{name:"color_by",path:["color_by"],default:"direction"},{name:"increase",path:["increase"],default:"bad"}],mm=[{name:"group",path:["group"]}],fm={layout:"chart",group:"compare",height:230,styles:r`
    ${cr}
    .style-slope .slope-head,
    .style-slope .slope-plot {
      --lw: min(36%, 180px);
    }
    .slope-head {
      display: grid;
      grid-template-columns: var(--lw) 1fr var(--lw);
      gap: 0 8px;
      padding: 4px 0 6px;
      font-size: 0.875em;
      color: var(--secondary-text-color);
    }
    .slope-head .from {
      grid-column: 1;
      text-align: right;
    }
    .slope-head .to {
      grid-column: 3;
    }
    .slope-head .unit {
      grid-column: 2;
      text-align: center;
    }
    .slope-plot {
      position: relative;
      margin: 8px 0;
    }
    .slope-plot .axis {
      position: absolute;
      top: -6px;
      bottom: -6px;
      border-left: 1px dashed var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .slope-plot .axis.from {
      left: calc(var(--lw) + 8px);
    }
    .slope-plot .axis.to {
      right: calc(var(--lw) + 8px);
    }
    .slope-plot .entity {
      position: absolute;
      inset: 0;
      pointer-events: none;
      outline: none;
      opacity: 1;
      transition: opacity var(--cd-duration) var(--cd-easing);
    }
    :host(:not([ready])) .slope-plot .entity {
      opacity: 0;
    }
    .slope-plot .entity > * {
      pointer-events: auto;
      cursor: pointer;
    }
    .slope-plot .entity:focus-visible .lbl {
      outline: 2px solid var(--primary-color);
      outline-offset: 1px;
      border-radius: 3px;
    }
    .slope-plot svg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(var(--lw) + 8px);
      right: calc(var(--lw) + 8px);
      width: calc(100% - 2 * var(--lw) - 16px);
      height: 100%;
      overflow: visible;
      pointer-events: none;
    }
    .slope-plot svg line {
      vector-effect: non-scaling-stroke;
      stroke-width: 3;
      stroke-linecap: round;
      pointer-events: stroke;
    }
    .slope-plot .dot {
      position: absolute;
      width: 10px;
      height: 10px;
      margin: -5px 0 0 -5px;
      border-radius: 50%;
    }
    .slope-plot .dot.from {
      left: calc(var(--lw) + 8px);
    }
    .slope-plot .dot.to {
      left: calc(100% - var(--lw) - 8px);
    }
    .slope-plot .lbl {
      position: absolute;
      transform: translateY(-50%);
      width: var(--lw);
      display: flex;
      gap: 4px;
      align-items: baseline;
      font-size: 0.875em;
      line-height: 1.2;
      white-space: nowrap;
      min-width: 0;
    }
    .slope-plot .lbl.from {
      left: 0;
      justify-content: flex-end;
    }
    .slope-plot .lbl.to {
      right: 0;
    }
    .slope-plot .lbl .name {
      color: var(--secondary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    .slope-plot .lbl .value {
      font-weight: 500;
      flex: none;
    }
    .slope-plot .lbl .pct {
      flex: none;
      padding-left: 2px;
      font-size: 0.9em;
    }
    /* Narrow cards: the change column would squeeze the names to nothing. */
    @container (max-width: 380px) {
      .slope-plot .lbl .pct {
        display: none;
      }
    }
    .slope-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 16px;
      padding: 4px 0;
      font-size: 0.875em;
      color: var(--secondary-text-color);
    }
    .slope-legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  `,thumbnail:()=>q`
    <line x1="14" y1="28" x2="50" y2="10" stroke="var(--error-color, #ef3b5a)" stroke-width="2.5" stroke-linecap="round" />
    <line x1="14" y1="12" x2="50" y2="22" stroke="var(--success-color, #1fae7a)" stroke-width="2.5" stroke-linecap="round" />
    <line x1="14" y1="32" x2="50" y2="30" stroke="var(--error-color, #ef3b5a)" stroke-width="2.5" stroke-linecap="round" />
    ${[[14,28],[50,10],[14,12],[50,22],[14,32],[50,30]].map(([e,t])=>q`<circle cx=${e} cy=${t} r="3" fill="var(--primary-text-color, #212121)" />`)}`,validate(e){Qa(e);const t=(t,o)=>{if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)};t("measure",rm),t("color_by",im),t("increase",sm);for(const o of e.entities??[]){const e="object"==typeof o&&o?o.group:void 0;if(void 0!==e&&"string"!=typeof e)throw new Error('"group" must be text')}},editor(e){const t=$s("slope",e.hass,()=>[...hs(e.hass),{name:"measure",selector:ss(e.hass,"measure",rm)},{type:"grid",name:"",schema:[{name:"color_by",selector:ss(e.hass,"color_by",im)},{name:"increase",selector:ss(e.hass,"increase",sm)}]}]);return ks(e,"chart",t,pm)},entityFields:e=>({schema:$s("slope-entity",e,()=>[{name:"group",selector:{text:{}}}]),fields:mm}),disconnect:rr,render(e){const t=Date.now(),o=da(e.raw.period),n="change"===e.raw.measure?"change":"value",a=er("change"===n?{...e,raw:{...e.raw,period:{last:2*o.last,unit:o.unit}}}:e,t),r=ua(o,t).start,i={start:a.range.start,middle:r},s=e.hass,l=dm(s,"change"===n?"previous":"ago",o),c="change"===n?dm(s,"last",o):Ze(s,"slope_now");if("ready"!==a.status)return B`${sr(a,e)}`;const d=hm(a,e,n,i),u=d.flatMap(e=>[e.from,e.to]),h=Sp(u);if(!h)return B`<div class="chart-message">${Ze(s,"chart_no_data")}</div>`;const{show:p}=e.config,m=new Set(d.filter(e=>e.entity.stateObj).map(e=>e.entity.unit)),f=1===m.size?[...m][0]:void 0,g=(e,t)=>{const o=dr(t,e.entity.decimals,s);return void 0===f&&e.entity.unit?`${o} ${e.entity.unit}`:o},v=d.filter(e=>null!==e.from||null!==e.to),y=Math.max(160,22*v.length),[b,x]=cn(h,.06),_=e=>9+(x-e)/(x-b)*(y-18),w=e=>{const t=v.filter(t=>null!==e(t)),o=function(e,t,o,n){const a=e.map((e,t)=>({y:e,i:t})).sort((e,t)=>e.y-t.y||e.i-t.i),r=a.map(e=>Math.min(n,Math.max(o,e.y)));for(let s=1;s<r.length;s++)r[s]=Math.max(r[s],r[s-1]+t);if(r.length&&r[r.length-1]>n){r[r.length-1]=n;for(let e=r.length-2;e>=0;e--)r[e]=Math.min(r[e],r[e+1]-t)}if(r.length&&r[0]<o){r[0]=o;for(let e=1;e<r.length;e++)r[e]=Math.max(r[e],r[e-1]+t)}const i=new Array(e.length);return a.forEach((e,t)=>i[e.i]=r[t]),i}(t.map(t=>_(e(t))),18,9,y-9);return new Map(t.map((e,t)=>[e,o[t]]))},$=w(e=>e.from),k=w(e=>e.to),M=Ze(s,"slope_no_reading"),z=Ze(s,"chart_aria",{style:Ze(s,"editor_style_slope"),names:d.map(e=>e.entity.name).join(", ")});return B`<div class="slope-head">
        <span class="from">${l}</span>
        ${f?B`<span class="unit">${f}</span>`:Z}
        <span class="to">${c}</span>
      </div>
      <div class="slope-plot" style="height:${y}px" role="group" aria-label=${z}>
        <div class="axis from"></div>
        <div class="axis to"></div>
        ${v.map(e=>{const t=Ze(s,"slope_entity_aria",{name:e.entity.name,from:null===e.from?M:g(e,e.from),to:null===e.to?M:g(e,e.to)}),o=p.value&&null!==e.from&&null!==e.to?um(e.from,e.to,s):"",n=e=>p.name?B`<span class="name">${e}</span>`:Z;return B`<div class="entity" data-index=${e.index} tabindex="0" role="img" aria-label=${t}>
        ${null!==e.from&&null!==e.to?B`<svg viewBox="0 0 100 ${y}" preserveAspectRatio="none">
                <line x1="0" y1=${_(e.from)} x2="100" y2=${_(e.to)} stroke=${e.color}></line>
              </svg>`:Z}
        ${null!==e.from?B`<span class="dot from" style="top:${_(e.from)}px;background:${e.color}"></span>
                <span class="lbl from" style="top:${$.get(e)}px"
                  >${n(e.entity.name)}${p.value?B`<span class="value">${g(e,e.from)}</span>`:Z}</span
                >`:Z}
        ${null!==e.to?B`<span class="dot to" style="top:${_(e.to)}px;background:${e.color}"></span>
                <span class="lbl to" style="top:${k.get(e)}px"
                  >${p.value?B`<span class="value">${g(e,e.to)}</span>`:Z}${n(e.entity.name)}${o?B`<span class="pct" style="color:${e.color}">${o}</span>`:Z}</span
                >`:Z}
      </div>`})}
      </div>
      ${"group"===e.raw.color_by?function(e){const t=new Map;for(const o of e)o.group&&!t.has(o.group)&&t.set(o.group,o.color);return t.size?B`<div class="slope-legend">
    ${[...t].map(([e,t])=>B`<span class="slope-legend-item"><span class="swatch" style="background:${t}"></span>${e}</span>`)}
  </div>`:Z}(d):Z}`}},gm=["range","then","target"],vm=["horizontal","vertical"];function ym(e,t,o,n,a){const r=e.available?e.value:null,i=[];if("range"===t){const e=function(e){return Sp(e.flatMap(e=>[e.v,e.min,e.max]))}(o),t=e?Sp([e[0],e[1],r]):void 0;t&&i.push({kind:"low",value:t[0]},{kind:"high",value:t[1]}),null===r||!a&&t||i.push({kind:"now",value:r})}else{const a="then"===t?Ap(o,n)??function(e){for(const t of e)if(null!==t.v)return t.v;return null}(o):e.target;null!==a&&i.push({kind:t,value:a}),null!==r&&i.push({kind:"now",value:r})}return i.sort((e,t)=>e.value-t.value)}function bm(e){if(0===e.length)return[];const t=e.some(e=>"low"===e.kind)?e.filter(e=>"now"!==e.kind):e,o=t[0],n=t[t.length-1];return o===n?[n]:[o,n]}function xm(e,t,o,n,a){return e.map((e,r)=>{const i=ym(e,t,o(r),n,a);return{index:r,entity:e,marks:i,labelled:bm(i)}})}function _m(e,t){return 1===t.last?Ze(e,`dumbbell_ago_${t.unit}_one`):Ze(e,`dumbbell_ago_${t.unit}`,{n:t.last})}const wm={low:Ce("blue"),high:Ce("red"),then:Ce("grey"),target:"var(--primary-text-color, #212121)"};function $m(e,t){return"target"===e||"now"===e&&"range"===t}function km(e,t,o){return"now"!==e?wm[e]:"range"===t?"var(--primary-text-color, #212121)":Ce(o.band.color)}const Mm="range",zm="horizontal",Sm=!0;function Am(e){return{ends:e.ends??Mm,orientation:e.orientation??zm,showNow:void 0===e.show_now?Sm:!0===e.show_now}}function Em(e,t,o){const n=e.entity;if(0===e.marks.length)return`${n.name}, ${n.available?Ze(t.hass,"dumbbell_no_value"):n.display}`;const a=e.marks.map(e=>`${(e=>"then"===e?_m(t.hass,o):Ze(t.hass,`dumbbell_${e}`))(e.kind)} ${ur(dr(e.value,n.decimals,t.hass),n.unit)}`);return`${n.name}: ${a.join(", ")}`}const Cm=[...us,{name:"ends",path:["ends"],default:Mm},{name:"show_now",path:["show_now"],default:Sm},{name:"orientation",path:["orientation"],default:zm}];const jm={layout:"chart",group:"compare",height:220,styles:r`
    ${cr}
    .db {
      --pad: 40px;
      --span: calc(100% - 2 * var(--pad));
      --dot: 14px;
      display: flex;
      flex-direction: column;
    }
    .db.no-values {
      --pad: 12px;
    }
    .db-legend {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      gap: 4px 14px;
      padding: 2px 0 6px;
      font-size: 0.8125em;
      color: var(--secondary-text-color);
    }
    .db-unit {
      margin-right: auto;
    }
    /* Narrow cards: every other tick label, so they don't run together. */
    @container (max-width: 400px) {
      .db.horizontal .db-tick:nth-child(even) {
        visibility: hidden;
      }
    }
    .db-key {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .db-swatch {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--mark);
      box-sizing: border-box;
    }
    .db-swatch.ring,
    .db-dot.ring {
      background: var(--card-background-color, #fff);
      border: 2.5px solid var(--mark);
    }
    .db-row {
      position: relative;
      cursor: pointer;
      border-radius: 6px;
      outline: none;
    }
    .db-row:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: -2px;
    }
    .db-name {
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .db-plot {
      position: relative;
    }
    .db-grid,
    .db-bar,
    .db-dot,
    .db-label,
    .db-tick {
      position: absolute;
    }
    .db-dot {
      width: var(--dot);
      height: var(--dot);
      border-radius: 50%;
      background: var(--mark);
      box-sizing: border-box;
      z-index: 1;
    }
    .db-dot.now.ring {
      z-index: 2;
    }
    .db-label,
    .db-tick,
    .db-status {
      font-size: 0.8125em;
      color: var(--secondary-text-color);
      white-space: nowrap;
      line-height: 1;
    }
    .db-status {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .db-bar,
    .db-dot,
    .db-label {
      transition:
        left var(--cd-duration) var(--cd-easing),
        width var(--cd-duration) var(--cd-easing),
        bottom var(--cd-duration) var(--cd-easing),
        height var(--cd-duration) var(--cd-easing),
        opacity var(--cd-duration) var(--cd-easing);
    }
    :host(:not([ready])) .db-bar,
    :host(:not([ready])) .db-dot,
    :host(:not([ready])) .db-label {
      opacity: 0;
    }

    /* Rows: value across, one entity per row. */
    .db.horizontal .db-row {
      display: grid;
      grid-template-columns: var(--name-w) minmax(0, 1fr);
      align-items: center;
      column-gap: 8px;
      height: 36px;
    }
    .db.horizontal.no-names .db-row,
    .db.horizontal.no-names .db-axis {
      grid-template-columns: minmax(0, 1fr);
    }
    .db.horizontal .db-plot {
      height: 100%;
    }
    .db.horizontal .db-grid {
      top: 0;
      bottom: 0;
      left: calc(var(--pad) + var(--span) * var(--f));
      border-left: 1px dashed var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .db.horizontal .db-bar {
      top: 50%;
      height: 6px;
      transform: translateY(-50%);
      border-radius: 3px;
      left: calc(var(--pad) + var(--span) * var(--a));
      width: calc(var(--span) * (var(--b) - var(--a)));
      background: linear-gradient(to right, var(--from), var(--to));
      opacity: 0.45;
    }
    .db.horizontal .db-dot {
      top: 50%;
      left: calc(var(--pad) + var(--span) * var(--f));
      transform: translate(-50%, -50%);
    }
    .db.horizontal .db-label {
      top: 50%;
      left: calc(var(--pad) + var(--span) * var(--f));
    }
    .db.horizontal .db-label.lo {
      transform: translate(calc(-100% - 11px), -50%);
    }
    .db.horizontal .db-label.hi {
      transform: translate(11px, -50%);
    }
    .db.horizontal .db-axis {
      display: grid;
      grid-template-columns: var(--name-w) minmax(0, 1fr);
      column-gap: 8px;
      height: 22px;
    }
    .db.horizontal .db-axis .db-plot {
      grid-column: -2;
    }
    .db.horizontal .db-tick {
      top: 6px;
      left: calc(var(--pad) + var(--span) * var(--f));
      transform: translateX(-50%);
    }

    /* Columns: value up, one entity per column. */
    .db.vertical .db-body {
      display: flex;
    }
    .db.vertical .db-row {
      flex: 1 1 0;
      min-width: 0;
      display: flex;
      flex-direction: column-reverse;
      align-items: stretch;
    }
    .db.vertical .db-name {
      text-align: center;
      font-size: 0.8125em;
      padding-top: 4px;
      height: 1.4em;
    }
    .db.vertical .db-plot {
      height: 180px;
    }
    /* Columns are narrow and tall: status text runs up the column. */
    .db.vertical .db-status {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      overflow: hidden;
    }
    .db.vertical {
      --pad: 22px;
    }
    .db.vertical .db-grid {
      left: 0;
      right: 0;
      bottom: calc(var(--pad) + var(--span) * var(--f));
      border-top: 1px dashed var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .db.vertical .db-bar {
      left: 50%;
      width: 6px;
      transform: translateX(-50%);
      border-radius: 3px;
      bottom: calc(var(--pad) + var(--span) * var(--a));
      height: calc(var(--span) * (var(--b) - var(--a)));
      background: linear-gradient(to top, var(--from), var(--to));
      opacity: 0.45;
    }
    .db.vertical .db-dot {
      left: 50%;
      bottom: calc(var(--pad) + var(--span) * var(--f));
      transform: translate(-50%, 50%);
    }
    .db.vertical .db-label {
      left: 50%;
      bottom: calc(var(--pad) + var(--span) * var(--f));
    }
    .db.vertical .db-label.lo {
      transform: translate(-50%, calc(100% + 11px));
    }
    .db.vertical .db-label.hi {
      transform: translate(-50%, -11px);
    }
    .db.vertical .db-axis {
      flex: none;
      position: relative;
      width: 3.5em;
      height: 180px;
    }
    .db.vertical .db-tick {
      right: 6px;
      bottom: calc(var(--pad) + var(--span) * var(--f));
      transform: translateY(50%);
    }
  `,thumbnail:()=>q`
    <line x1="14" y1="11" x2="44" y2="11" stroke="var(--primary-text-color, #212121)" stroke-opacity="0.25"
      stroke-width="3" stroke-linecap="round" />
    <line x1="8" y1="20" x2="34" y2="20" stroke="var(--primary-text-color, #212121)" stroke-opacity="0.25"
      stroke-width="3" stroke-linecap="round" />
    <line x1="22" y1="29" x2="56" y2="29" stroke="var(--primary-text-color, #212121)" stroke-opacity="0.25"
      stroke-width="3" stroke-linecap="round" />
    <circle cx="14" cy="11" r="4" fill="var(--info-color, #2f6fe4)" />
    <circle cx="44" cy="11" r="4" fill="var(--error-color, #ef3b5a)" />
    <circle cx="8" cy="20" r="4" fill="var(--info-color, #2f6fe4)" />
    <circle cx="34" cy="20" r="4" fill="var(--error-color, #ef3b5a)" />
    <circle cx="22" cy="29" r="4" fill="var(--info-color, #2f6fe4)" />
    <circle cx="56" cy="29" r="4" fill="var(--error-color, #ef3b5a)" />`,validate(e){if(Qa(e),void 0!==e.ends&&!gm.includes(e.ends))throw new Error(`"ends" must be one of: ${gm.join(", ")}`);if(void 0!==e.orientation&&!vm.includes(e.orientation))throw new Error(`"orientation" must be one of: ${vm.join(", ")}`);if(void 0!==e.show_now&&"boolean"!=typeof e.show_now)throw new Error('"show_now" must be true or false')},editor:function(e){const{ends:t}=Am(e.config),o=$s(`dumbbell-${t}`,e.hass,()=>[{type:"grid",name:"",schema:[{name:"ends",selector:ss(e.hass,"ends",gm)},{name:"orientation",selector:ss(e.hass,"orientation",vm)}]},..."target"===t?[]:hs(e.hass),..."range"===t?[{name:"show_now",selector:{boolean:{}}}]:[]]);return ks(e,"chart",o,Cm)},disconnect:rr,render(e){const{ends:t,orientation:o,showNow:n}=Am(e.raw),a=da(e.raw.period);let r;if("target"===t)r=xm(e.items,t,()=>[],0,n);else{const o=er(e);if("ready"!==o.status)return sr(o,e)??B``;r=xm(e.items,t,e=>o.series[e]?.points??[],o.range.start,n)}const i=Sp(r.flatMap(e=>e.marks.map(e=>e.value))),s=i?zp(i[0],i[1],4):[],[l,c]=s.length?[s[0],s[s.length-1]]:[0,1],d=e=>c===l?.5:(e-l)/(c-l),u=function(e){const t=new Set(e.map(e=>e.unit).filter(e=>""!==e));return 1===t.size?[...t][0]:""}(e.items),h=function(e){if(e.length<2)return 0;const t=Math.abs(e[1]-e[0]);for(let o=0;o<6;o++)if(Math.abs(Math.round(t*10**o)-t*10**o)<1e-6)return o;return 6}(s),{show:p}=e.config,m=Math.max(...e.items.map(e=>e.name.length)),f=`min(${Math.min(m,16)+1}ch, 38%)`,g=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_dumbbell"),names:e.items.map(e=>e.name).join(", ")}),v=s.map(t=>B`<span class="db-tick" style="--f:${d(t)}">${dr(t,h,e.hass)}</span>`),y=r.map(o=>function(e,t,o,n,a,r){const i=e.entity,{show:s}=t.config,l=e.labelled[0],c=e.labelled[e.labelled.length-1],d=e=>$m(e.kind,o)?"color-mix(in srgb, var(--primary-text-color, #212121) 30%, transparent)":km(e.kind,o,i);return B`<div
    class="entity db-row ${i.available?"":"unavailable"}"
    data-index=${e.index}
    tabindex="0"
    role="img"
    aria-label=${Em(e,t,r)}
  >
    ${s.name?B`<span class="db-name">${i.name}</span>`:Z}
    <div class="db-plot">
      ${a.map(e=>B`<span class="db-grid" style="--f:${n(e)}"></span>`)}
      ${0===e.marks.length?B`<span class="db-status value">${i.available?"–":i.display}</span>`:B`${e.labelled.length>1?B`<span
                    class="db-bar"
                    style="--a:${n(l.value)};--b:${n(c.value)};--from:${d(l)};--to:${d(c)}"
                  ></span>`:Z}
            ${e.marks.map(e=>B`<span
                  class="db-dot ${e.kind} ${$m(e.kind,o)?"ring":""}"
                  style="--f:${n(e.value)};--mark:${km(e.kind,o,i)}"
                ></span>`)}
            ${s.value?e.labelled.map((o,a)=>B`<span
                        class="db-label ${0===a&&e.labelled.length>1?"lo":"hi"}"
                        style="--f:${n(o.value)}"
                        >${dr(o.value,i.decimals,t.hass)}</span
                      >`):Z}`}
    </div>
  </div>`}(o,e,t,d,s,a)),b=`db ${o} ${p.name?"":"no-names"} ${p.value?"":"no-values"}`;return B`<div class=${b} style="--name-w:${f}" role="group" aria-label=${g}>
      ${i?function(e,t,o,n,a,r){const i=t=>Ze(e.hass,t),s=new Set(n.map(e=>Ce(e.entity.band.color))),l=1===s.size?[...s][0]:Ce("primary"),c="range"===t?[[i("dumbbell_low"),wm.low,!1],...o?[[i("dumbbell_now"),km("now",t,n[0].entity),!0]]:[],[i("dumbbell_high"),wm.high,!1]]:["then"===t?[_m(e.hass,a),wm.then,!1]:[i("dumbbell_target"),wm.target,!0],[i("dumbbell_now"),l,!1]];return B`<div class="db-legend">
    ${r?B`<span class="db-unit">${r}</span>`:Z}
    ${c.map(([e,t,o])=>B`<span class="db-key"
          ><span class="db-swatch ${o?"ring":""}" style="--mark:${t}"></span>${e}</span
        >`)}
  </div>`}(e,t,n,r,a,u):Z}
      ${"horizontal"===o?B`${y}
            ${s.length?B`<div class="db-axis" aria-hidden="true"><div class="db-plot">${v}</div></div>`:Z}`:B`<div class="db-body">
              ${s.length?B`<div class="db-axis" aria-hidden="true">${v}</div>`:Z}${y}
            </div>`}
    </div>`}};function Lm(e){const t={...e,source:e.source??"statistics"};if("history"===t.source&&void 0===e.group_by){const o=e.period??{},n=(o.last??24)*({hour:1,day:24,week:168,month:720}[o.unit??"hour"]??1);t.group_by="day"===o.calendar||!o.calendar&&n<=48?"hour":"day"}return t}function Nm(e){return e.flatMap((t,o)=>o>0?[[t[0],e[o-1][1]],t]:[t])}function Tm(e,t,o){if(e.length<2)return"";const[n,a,r]="step"===o?[Nm(e),Nm(t),"straight"]:[e,t,o];return`${Wa(n,r)}${Wa([...a].reverse(),r).replace(/^M/,"L")}Z`}const Om=[...ls.map(e=>"source"===e.name?{...e,default:"statistics"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"mean",path:["mean"],default:!0},{name:"line_width",path:["line_width"],default:mo},...fs,...ps];const Fm=[{name:"range_color",path:["color"]},{name:"curve",path:["curve"]},{name:"dash",path:["dash"],default:!1}],Pm={layout:"chart",group:"history",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    .plot .band {
      fill-opacity: 0.22;
    }
    .plot .band-edge {
      stroke-width: 1px;
      stroke-opacity: 0.45;
    }
    .plot .series .line {
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .plot .series .line.dashed {
      stroke-dasharray: 6 5;
    }
  `,thumbnail:()=>q`
    <path d="M4 18 C14 12 22 8 32 12 S50 20 60 10 V24 C50 32 42 26 32 28 S14 32 4 30 Z"
      fill="var(--primary-color, #03a9f4)" fill-opacity="0.25" />
    <path d="M4 24 C14 22 22 18 32 20 S50 26 60 17" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){if(Qa(e),xn(e),Gr(e),$o(e),jr(e),void 0!==e.mean&&"boolean"!=typeof e.mean)throw new Error('"mean" must be true or false')},editor:function(e){const t=$s(`range_area|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config),{name:"curve",selector:ss(e.hass,"curve",qa)},{type:"grid",name:"",schema:[{name:"mean",selector:{boolean:{}}},{name:"line_width",selector:To}]},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",t,Om)},entityFields:e=>({schema:$s("range-area-entity",e,()=>[{type:"grid",name:"",schema:[{name:"range_color",selector:{text:{}}},{name:"curve",selector:ss(e,"curve",qa)},{name:"dash",selector:{boolean:{}}}]}]),fields:Fm}),disconnect(e){rr(e),$r(e),Wr(e)},render:function(e){const t={...e,raw:Lm(e.raw)},o=er(t,Date.now(),{range:!0}),n=nr(o,t),a=ir(o,t),r=n===Z&&a===Z?Z:B`${n}${a}`,i=sr(o,t),s=Lr(t.raw);if(i)return Nr("over"===s.header?{...s,header:"above"}:s,r,i);const l=o.series,c=Mr(t,o.range,ln(l.map(e=>e.points))),d=!1!==t.raw.mean,u=t.raw.line_width??mo,h={text:(e,o)=>{if(!o||null===o.v)return"—";const n=o=>dr(o,e.entity.decimals,t.hass),a=o.min??o.v,r=o.max??o.v;return ur(`${n(a)} – ${n(r)}`,e.entity.unit)+(d?` · ${n(o.v)}`:"")}};d||(h.dotY=()=>null);const p=Yr(t.raw),m=Ze(t.hass,"chart_aria",{style:Ze(t.hass,"editor_style_range_area"),names:o.series.map(e=>e.entity.name).join(", ")});return Nr(s,r,Ar({axes:c,ctx:t,content:q`${l.map(e=>function(e,t,o,n){const a=[],r=[],i=[];for(const s of function(e){const t=[];let o=[];for(const n of e)null!==n.v?o.push({t:n.t,v:n.v,lo:n.min??n.v,hi:n.max??n.v}):(o.length&&t.push(o),o=[]);return o.length&&t.push(o),t}(e.points)){const o=s.map(e=>[t.x(e.t),t.y(e.hi)]),n=s.map(e=>[t.x(e.t),t.y(e.lo)]);a.push(Tm(o,n,e.curve)),r.push(Wa(o,e.curve),Wa(n,e.curve)),i.push(Wa(s.map(e=>[t.x(e.t),t.y(e.v)]),e.curve))}return q`<g class="series" data-series=${e.index}>
    <path class="band" d=${a.join("")} fill=${e.color} stroke="none"></path>
    <path class="band-edge" d=${r.join("")} fill="none" stroke=${e.color}></path>
    ${o?q`<path class="line ${e.dash?"dashed":""}" d=${i.join("")} fill="none" stroke=${e.color}
            style="stroke-width:${n}px"></path>`:Z}
  </g>`}(e,c.scales,d,u))}`,label:m,overlay:B`${"over"===s.header?Tr(r):Z}
      ${p?ei(t,l,c.scales,Zr(t.host),kr(t),h):Z}`,hover:p?Xr(t,o.range,l.map(e=>e.points)):void 0}))}},Dm=["line","area","column"];function Um(e,t){return e.config.spark??t.spark??"line"}function Hm(e){const t=e.period??{},o=(t.last??24)*({hour:1,day:24,week:168,month:720}[t.unit??"hour"]??1);return(t.calendar?"day"===t.calendar:o<=48)?"hour":"day"}function Im(e,t){return void 0===e.group_by&&0!==t.length&&t.every(e=>"column"===e)?{...e,group_by:Hm(e),aggregate:e.aggregate??"mean"}:e}function Rm(e,t,o,n){const a=Rn(e.points,120),r=a.filter(e=>null!==e.v).map(e=>e.v),i=function(e,t){if(0===e.length)return;let o=Math.min(...e),n=Math.max(...e);return t?(o=Math.min(o,0),n=Math.max(n,0),o===n?[o,o+1]:[o,n]):([o,n]=cn([o,n],.1),[o,n])}(r,"column"===t);if(!i)return q``;const s=dn([o.start,o.end],[0,100]),l=dn(i,[23,1]),c=l(Math.min(Math.max(0,i[0]),i[1]));if("column"===t){const t=[];return a.forEach((e,n)=>{if(null===e.v)return;const r=e.end??a[n+1]?.t??o.end,i=s(e.t),d=Math.max(0,Math.min(100,s(r))-i);if(d<=0)return;const u=Math.min(l(e.v),c);t.push(q`<rect x=${i+.12*d} width=${.76*d} y=${u} height=${Math.abs(l(e.v)-c)}></rect>`)}),q`<g class="spark-columns" fill=${e.color}>${t}</g>`}const d=Ya(a).map(e=>e.map(e=>[s(e.t),l(e.v)])),u=d.map(t=>Wa(t,e.curve)).join(""),h="area"===t?d.filter(e=>e.length>1).map(t=>`${Wa(t,"step"===e.curve?"straight":e.curve)}L${t[t.length-1][0]},${c}L${t[0][0]},${c}Z`).join(""):"";return q`${h?q`<path class="spark-fill" d=${h} fill=${e.color} stroke="none"></path>`:Z}
    <path class="spark-line" d=${u} fill="none" stroke=${e.color} style="stroke-width:${n}px"></path>`}const Bm=[...ls,{name:"spark",path:["spark"],default:"line"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:1.5},{name:"spark_bar",path:["bar"],default:!1}];const qm=[{name:"spark",path:["spark"]},{name:"spark_color",path:["color"]}];const Vm={layout:"chart",group:"history",height:120,styles:r`
    ${cr}
    /* One grid for every row, so the sparklines line up whatever each value's width. */
    .spark-rows {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(64px, 38%) auto;
      column-gap: 12px;
    }
    .spark-rows.icons {
      grid-template-columns: auto minmax(0, 1fr) minmax(64px, 38%) auto;
    }
    .spark-rows.bars {
      grid-template-columns: minmax(0, 1fr) minmax(64px, 38%);
    }
    .spark-rows.icons.bars {
      grid-template-columns: auto minmax(0, 1fr) minmax(64px, 38%);
    }
    .spark-row {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: subgrid;
      align-items: center;
      padding: 6px 0;
      min-height: 28px;
      border-radius: 6px;
      cursor: pointer;
    }
    .spark-row:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
    .spark-row .icon {
      color: var(--state-icon-color, var(--secondary-text-color));
      --mdc-icon-size: 22px;
    }
    .spark-row .name {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .spark-row .value {
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      text-align: right;
      min-width: calc(var(--cd-value-ch, 4) * 1ch);
      font-variant-numeric: tabular-nums;
    }
    .spark-row.unavailable .value {
      color: var(--secondary-text-color);
      font-weight: 400;
      font-size: 13px;
      max-width: 7em;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* Narrow cards: the names keep their room, the sparklines give some up. */
    @container (max-width: 360px) {
      .spark-rows {
        grid-template-columns: minmax(0, 1fr) minmax(48px, 30%) auto;
      }
      .spark-rows.icons {
        grid-template-columns: auto minmax(0, 1fr) minmax(48px, 30%) auto;
      }
      .spark-rows.bars {
        grid-template-columns: minmax(0, 1fr) minmax(48px, 30%);
      }
      .spark-rows.icons.bars {
        grid-template-columns: auto minmax(0, 1fr) minmax(48px, 30%);
      }
    }
    .spark {
      width: 100%;
      height: 28px;
      overflow: visible;
    }
    .spark path {
      vector-effect: non-scaling-stroke;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .spark .spark-fill {
      fill-opacity: 0.22;
    }
    .spark-body {
      min-width: 0;
    }
    .spark-body .top {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 6px;
    }
    .spark-body .value {
      font-weight: 400;
      font-size: 13px;
      color: var(--secondary-text-color);
      min-width: 0;
    }
    .spark-track {
      position: relative;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--cd-track);
    }
    .spark-bar {
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(var(--start) * 100%);
      width: calc((var(--end) - var(--start)) * 100%);
      border-radius: 4px;
      background: var(--c-start);
      background-image: linear-gradient(90deg, var(--c-start), var(--c-end));
    }
    .spark-target {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      left: calc(var(--target) * (100% - 2px));
      background: var(--primary-text-color);
    }
    .spark-message {
      color: var(--secondary-text-color);
      font-size: 0.875em;
      padding: 4px 0;
    }
    .spark-message.error {
      color: var(--error-color, #db4437);
    }
  `,thumbnail:()=>q`
    <path d="M4 12 L12 9 L20 13 L28 6 L36 10" fill="none" stroke="var(--primary-color, #03a9f4)"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="42" y="7" width="18" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.5" />
    <path d="M4 27 L12 25 L20 29 L28 23 L36 26 V32 H4 Z" fill="var(--warning-color, #f59e0b)" opacity="0.3" />
    <path d="M4 27 L12 25 L20 29 L28 23 L36 26" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="42" y="25" width="14" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.5" />`,validate:function(e){Qa(e);const t=[e.spark,...(e.entities??[]).map(e=>"object"==typeof e?e.spark:void 0)];for(const n of t)if(void 0!==n&&!Dm.includes(n))throw new Error(`"spark" must be one of: ${Dm.join(", ")}`);if(void 0!==e.bar&&"boolean"!=typeof e.bar)throw new Error('"bar" must be true or false');const o=e.line_width;if(void 0!==o&&("number"!=typeof o||o<fo||o>go))throw new Error('"line_width" must be a number from 0.5 to 12')},editor:function(e){const t=$s(`sparkline|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"spark",selector:ss(e.hass,"spark",Dm)},{name:"curve",selector:ss(e.hass,"curve",qa)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:To},{name:"spark_bar",selector:{boolean:{}}}]}]);return ks(e,"chart",t,Bm)},entityFields:e=>({schema:$s("sparkline-entity",e,()=>[{type:"grid",name:"",schema:[{name:"spark",selector:ss(e,"spark",Dm)},{name:"spark_color",selector:{text:{}}}]}]),fields:qm}),disconnect(e){rr(e)},render:function(e){const t=e.items.map(t=>Um(t,e.raw)),o={...e,raw:Im(e.raw,t)},n=er(o),{show:a}=o.config,r=!0===o.raw.bar,i=o.raw.line_width??1.5,s="error"===n.status?B`<div class="spark-message error">${Ze(o.hass,"chart_error",{error:n.error??""})}</div>`:Z,l=n.series.map((s,l)=>{const c=s.entity,d=c.config.color,u=Ce(d||c.band.color),h="column"===Um(c,e.raw)&&void 0===o.raw.group_by,p={...s,color:u,points:h?(m=s.points,f=o.raw,g=n.range,v=o.hass,Ta(m,ea(Hm(f),g.start,g.end,oa(v)),f.aggregate??"mean",Date.now())):s.points};var m,f,g,v;const y=c.config.line_width??i,b=a.name?B`<span class="name">${c.name}</span>`:Z,x=a.value||!c.available?B`<span class="value">${c.display}</span>`:Z;return B`<div
      class="entity spark-row ${r?"with-bar":""} ${c.available?"":"unavailable"}"
      data-index=${l}
      tabindex="0"
      aria-label=${c.label}
    >
      ${a.icon?B`<ha-state-icon
              class="icon"
              .hass=${o.hass}
              .stateObj=${c.stateObj}
              .icon=${Us(c)}
            ></ha-state-icon>`:Z}
      ${r?B`<div class="spark-body">
              <div class="top">${b}${x}</div>
              ${function(e,t){const o=je(e.band.color);return B`<div
    class="spark-track"
    style="--start:${e.span[0]};--end:${e.span[1]};--c-start:${o.start};--c-end:${o.end};--target:${e.targetPosition??0}"
  >
    <div class="spark-bar"></div>
    ${t&&null!==e.targetPosition&&e.available?B`<div class="spark-target"></div>`:Z}
  </div>`}(c,a.target)}
            </div>`:b}
      <svg
        class="spark ${"loading"===n.status?"loading":""}"
        viewBox="0 0 ${100} ${24}"
        preserveAspectRatio="none"
        role="img"
        aria-label=${Ze(o.hass,"spark_aria",{name:c.name})}
      >
        ${"ready"===n.status?Rm(p,t[l],n.range,y):Z}
      </svg>
      ${r?Z:x}
    </div>`});return B`${nr(n,o)}${s}
    <div class="spark-rows ${a.icon?"icons":""} ${r?"bars":""}">${l}</div>`}},Zm=["wiggle","centre","share","zero"],Wm=["inside_out","listed"];function Ym(e){return e.map(e=>null===e||!Number.isFinite(e)||e<0?0:e)}function Gm(e,t,o){const n="share"===o?function(e){const t=e[0]?.length??0,o=Array.from({length:t},(t,o)=>e.reduce((e,t)=>e+t[o],0));return e.map(e=>e.map((e,t)=>o[t]>0?e/o[t]*100:0))}(e):e,a=t.map(e=>n[e]);let r=function(e,t){const o=e[0]?.length??0,n=Array.from({length:o},(t,o)=>e.reduce((e,t)=>e+t[o],0));if("zero"===t||"share"===t)return new Array(o).fill(0);if("centre"===t)return n.map(e=>-e/2);const a=new Array(o).fill(0);for(let l=1;l<o;l++){let t=0,o=0;for(let n=0;n<e.length;n++){const a=e[n][l];let r=(a-e[n][l-1])/2;for(let t=0;t<n;t++)r+=e[t][l]-e[t][l-1];t+=a,o+=r*a}a[l]=a[l-1]-(t?o/t:0)}let r=1/0,i=-1/0;for(let l=0;l<o;l++)r=Math.min(r,a[l]),i=Math.max(i,a[l]+n[l]);const s=o?-(r+i)/2:0;return a.map(e=>e+s)}(a,o);const i=new Array(e.length);for(const s of t){const e=r.map((e,t)=>e+n[s][t]);i[s]={lower:r,upper:e},r=e}return i}function Xm(e){let t=0,o=-1/0;return e.upper.forEach((n,a)=>{const r=n-e.lower[a];r>o&&(o=r,t=a)}),{at:t,thickness:Math.max(0,o)}}function Jm(e,t,o){const n=Math.min(e.range.end,t);if(e.group){const t=e.series[0]?.points??[],o=t.map((e,t)=>t).filter(e=>t[e].t<n);return{times:o.map(e=>(t[e].t+Math.min(t[e].end??t[e].t,n))/2),values:e.series.map(e=>o.map(t=>e.points[t]?.v??null))}}let a=Math.min(240,Math.max(24,Math.round(o/4)));if("statistics"===e.source){const t=Math.max(1,...e.series.map(e=>e.points.filter(e=>!e.carried).length));a=Math.min(a,t)}const r=function(e,t,o){const n=Math.max(e.start+1,Math.min(e.end,t)),a=Math.max(1,Math.round(o)),r=(n-e.start)/a,i=[];for(let s=0;s<a;s++)i.push(e.start+s*r);return i.push(n),i}(e.range,n,a);return{times:r.slice(0,-1).map((e,t)=>(e+r[t+1])/2),values:e.series.map(t=>function(e,t,o,n){return("statistics"===o?Oa(e,t,"mean",n):Ta(e,t,"mean",n)).map(e=>e.v)}(t.points,r,e.source,n))}}function Km(e){return e.baseline??"wiggle"}const Qm=e=>Math.round(1e4*e)/100+"%";function ef(e,t,o,n,a,r,i){const[s,l]=n.domain,c=Lr(a.raw).compact?110:180,d=kr(a),u=e=>e/(l-s)*c,h=new Map,p=[];for(const f of e.series){const e=t[f.index],{at:s,thickness:l}=Xm(e);if(u(l)<18)continue;const m=i[f.index][s],g=r?`${dr(e.upper[s]-e.lower[s],0,a.hass)} %`:null===m?"":ur(dr(m,f.entity.decimals,a.hass),f.entity.unit),v=`${f.entity.name} ${g}`.trim();h.set(f.index,v),p.push({key:f.index,x:o[s]/Ga*d,y:n.y((e.upper[s]+e.lower[s])/2)/Xa*c,width:6.2*v.length,thickness:u(l)})}const m=function(e,t){const o=[],n=new Map;for(const a of[...e].sort((e,t)=>t.thickness-e.thickness||e.key-t.key)){if(a.width>t-4)continue;const e=Math.min(Math.max(2,a.x-a.width/2),t-a.width-2),r={left:e,right:e+a.width,top:a.y-6.5,bottom:a.y+6.5},i=o.some(e=>r.left<e.right+4&&r.right>e.left-4&&r.top<e.bottom&&r.bottom>e.top);i||(o.push(r),n.set(a.key,e))}return n}(p,d);return B`<div class="stream-labels" aria-hidden="true">
    ${p.map(t=>{const o=m.get(t.key);if(void 0===o)return Z;const n=e.series[t.key];return B`<span
        class="stream-label ${Ne(function(e){return e.entity.config.color??Ja[e.index%Ja.length]}(n))}"
        style="left:${Qm(d?o/d:0)};top:${Qm(t.y/c)}"
        >${h.get(t.key)}</span
      >`})}
  </div>`}function tf(e,t,o,n,a,r,i,s){if(void 0===i)return Z;const l=qr(o.times.map(e=>({t:e})),i);if(l<0)return Z;const c=r[l]/Ga,d=Rr(c,kr(e)),u=[...a].reverse().map(e=>t.series[e]),h=n.map(e=>e.upper[l]-e.lower[l]),p=o.values.reduce((e,t)=>e+Math.max(0,t[l]??0),0),m=new Set(t.series.map(e=>e.entity.unit));return B`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Qm(c)}"></div>
    <div class="tooltip ${d}" style=${d.startsWith("pin")?"":`left:${Qm(c)}`}>
      <div class="tooltip-time">${Hn(o.times[l],e.hass)}</div>
      ${u.map(t=>B`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${(t=>{const n=o.values[t.index][l];if(null===n)return"—";const a=ur(dr(n,t.entity.decimals,e.hass),t.entity.unit);return s?`${a} · ${dr(h[t.index],0,e.hass)} %`:a})(t)}</span>
          </div>`)}
      ${1===m.size&&t.series.length>1?B`<div class="tooltip-row total">
              <span class="tooltip-name">${Ze(e.hass,"stream_total")}</span>
              <span class="tooltip-value"
                >${ur(dr(p,t.series[0].entity.decimals,e.hass),t.series[0].entity.unit)}</span
              >
            </div>`:Z}
    </div>
  </div>`}const of=[...ls,{name:"baseline",path:["baseline"],default:"wiggle"},{name:"stream_order",path:["stream_order"],default:"inside_out"},{name:"stream_curve",path:["curve"],default:"smooth"},{name:"stream_labels",path:["labels"],default:!0},...fs,...ps],nf=new Set(["y_axis","grid_horizontal","y_min","y_max"]);function af(e){return e.map(e=>{const t=e;if(!nf.has(t.name)){if(t.schema){const e=t.schema.filter(e=>!nf.has(e.name));return e.length?{...t,schema:e}:void 0}return t}}).filter(e=>void 0!==e)}const rf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},sf={layout:"chart",group:"totals",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    .style-streamgraph .stream {
      cursor: pointer;
      stroke: var(--card-background-color, #fff);
      stroke-width: 1px;
      stroke-linejoin: round;
    }
    .stream-labels {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }
    .stream-label {
      position: absolute;
      transform: translateY(-50%);
      font-size: 11px;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
      color: #fff;
    }
    .stream-label.dark {
      color: rgba(0, 0, 0, 0.8);
    }
    .stream-label.theme {
      color: var(--primary-text-color);
    }
    .tooltip-row.total {
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      margin-top: 2px;
      padding-top: 2px;
    }
  `,thumbnail:()=>q`
    <path d="M4 20 C14 12 22 14 32 16 S50 10 60 14 L60 22 C50 20 42 24 32 22 S14 22 4 24 Z"
      fill="var(--primary-color, #03a9f4)" />
    <path d="M4 24 C14 22 22 22 32 22 S50 20 60 22 L60 28 C50 30 40 34 32 30 S14 30 4 28 Z"
      fill="var(--success-color, #43a047)" />
    <path d="M4 28 C14 30 22 30 32 30 S50 30 60 28 L60 31 C50 34 40 38 32 34 S14 33 4 31 Z"
      fill="var(--warning-color, #f59e0b)" />`,validate(e){if(Qa(e),xn(e),Gr(e),jr(e),void 0!==e.baseline&&!Zm.includes(e.baseline))throw new Error(`"baseline" must be one of: ${Zm.join(", ")}`);if(void 0!==e.stream_order&&!Wm.includes(e.stream_order))throw new Error(`"stream_order" must be one of: ${Wm.join(", ")}`);if(void 0!==e.labels&&"boolean"!=typeof e.labels)throw new Error('"labels" must be true or false')},editor:function(e){const t=function(e){const t=Km(e);return`${cs(e)}|${"wiggle"===t||"centre"===t?"floating":"axis"}`}(e.config),o=$s(`streamgraph|${t}`,e.hass,()=>{const o=gs(e.hass);return[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"baseline",selector:ss(e.hass,"baseline",Zm)},{name:"stream_order",selector:ss(e.hass,"stream_order",Wm)}]},{type:"grid",name:"",schema:[{name:"stream_curve",selector:ss(e.hass,"curve",["smooth","straight","step"])},{name:"stream_labels",selector:{boolean:{}}}]},...t.endsWith("floating")?af(o):o,...ms(e.hass)]});return ks(e,"chart",o,of)},entityFields:()=>rf,disconnect(e){rr(e),$r(e),Wr(e)},render(e){const t=Date.now(),o=er(e,t),n=nr(o,e),a=ir(o,e),r=n===Z&&a===Z?Z:B`${n}${a}`,i=sr(o,e),s=Lr(e.raw);if(i)return Nr("over"===s.header?{...s,header:"above"}:s,r,i);const l=Km(e.raw),c="share"===l,d="wiggle"===l||"centre"===l,u=Jm(o,t,kr(e)),h=u.values.map(Ym),p="listed"===(e.raw.stream_order??"inside_out")?h.map((e,t)=>t):function(e){const t=e.map((e,t)=>{let o=0;for(let n=1;n<e.length;n++)e[n]>e[o]&&(o=n);return{i:t,at:o,sum:e.reduce((e,t)=>e+t,0)}});t.sort((e,t)=>e.at-t.at||e.i-t.i);let o=0,n=0;const a=[],r=[];for(const i of t)o<n?(o+=i.sum,a.push(i.i)):(n+=i.sum,r.push(i.i));return[...r.reverse(),...a]}(h);const m=Gm(h,p,l),f=function(e){let t=1/0,o=-1/0;for(const n of e){for(const e of n.lower)t=Math.min(t,e);for(const e of n.upper)o=Math.max(o,e)}return t===1/0?void 0:[t,o]}(m);let g=e.raw;if(d){const[t,o]=f??[0,1],n=o>t?.04*(o-t):1;g={...e.raw,y_axis:!1,y_min:t-n,y_max:o+n,gridlines:{...e.raw.gridlines??{},horizontal:!1}}}else c?g={...e.raw,y_min:0,y_max:100}:void 0===e.raw.y_min&&(g={...e.raw,y_min:0});const v=Mr({...e,raw:g},o.range,f),{scales:y}=v,b=u.times.map(e=>y.x(e)),x=e.raw.curve??"smooth",_=Math.min(o.range.end,t),w=[y.x(o.range.start),...b,y.x(_)],$=0===u.times.length?q``:q`${p.map(e=>{const t=o.series[e];return q`<path
              class="stream entity"
              data-index=${e}
              aria-label=${t.entity.label}
              d=${function(e,t,o,n){const a=t.map((t,n)=>[t,o.y(e.upper[n])]),r=t.map((t,n)=>[t,o.y(e.lower[n])]).reverse();return 0===a.length?"":`${Wa(a,n)}L${Wa(r,n).slice(1)}Z`}((e=>({lower:[e.lower[0],...e.lower,e.lower[e.lower.length-1]],upper:[e.upper[0],...e.upper,e.upper[e.upper.length-1]]}))(m[e]),w,y,x)}
              fill=${t.color}
            ></path>`})}`,k=Yr(e.raw),M=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_streamgraph"),names:o.series.map(e=>e.entity.name).join(", ")}),z=u.times.map(e=>({t:e,v:0}));return Nr(s,r,Ar({axes:v,ctx:{...e},content:$,label:M,overlay:B`${"over"===s.header?Tr(r):Z}
        ${!1!==e.raw.labels&&u.times.length?ef(o,m,b,y,e,c,u.values):Z}
        ${k?tf(e,o,u,m,p,b,Zr(e.host),c):Z}`,hover:k?Xr(e,o.range,[z]):void 0}))}};const lf=["columns","line"],cf=.7;function df(e){return{last:14,unit:"day",...e.period??{}}}function uf(e){return e.group_by??"day"}function hf(e,t=Date.now()){const o=da(df(e.raw)),n=e.raw.source??"statistics";const a=uf(e.raw),r=e.raw.aggregate??"mean",i=oa(e.hass),s=ha(o,t,i,o.navigate?ma(e.host,o):0),l=Kn(a,s.start,i),c=ea(a,l,s.end,i),d={start:l,end:c[c.length-1]},u=Math.min(s.end,t),h=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),p=Ba(e.host,e.requestUpdate),m="statistics"===n?function(e,t,o){let n="hour";return"hour"===e?n="5minute":"day"!==e&&t.timeZone===o&&(n="day"),{period:n,types:["mean","min","max","state"],value:"mean"}}(a,i,e.hass.config?.time_zone):void 0,f=p.get(e.hass,h,{start:l,end:s.end},n,{live:s.live,statistics:m});let g=[];const v=e.items.map((e,t)=>{const o=e.config,a=f.data.get(Ca(h[t]))??[];let i;return 0===t?(g="statistics"===n?function(e,t,o){const n=[];let a=0;for(let r=0;r+1<t.length;r++){const i=t[r],s=t[r+1];for(;a<e.length&&e[a].t<i;)a++;let l=null;for(let t=a;t<e.length&&e[t].t<s;t++){const n=e[t];if(null===n.v||n.carried||i>=o)continue;const a="number"==typeof n.max?Math.max(n.max,n.v):n.v,r="number"==typeof n.min?Math.min(n.min,n.v):n.v;l?(l.high=Math.max(l.high,a),l.low=Math.min(l.low,r),l.close=n.v):l={t:i,end:s,open:n.v,high:a,low:r,close:n.v}}n.push(l)}return n}(a,c,u):function(e,t,o){const[n,a,r,i]=["first","max","min","last"].map(n=>Ta(e,t,n,o));return n.map((e,t)=>null===e.v||null===a[t].v||null===r[t].v||null===i[t].v?null:{t:e.t,end:e.end??e.t,open:e.v,high:a[t].v,low:r[t].v,close:i[t].v})}(a,c,u),i=g.map((e,t)=>({t:c[t],end:c[t+1],v:e?e.close:null}))):i=function(e,t,o,n,a){return"history"===n?Ta(e,t,o,a):"sum"===o||"change"===o?Ta(e,t,"change",a):Oa(e,t,o,a)}(a,c,r,n,u),{index:t,entity:e,points:i,color:Ce(o.color??(0===t?Ja[0]:"grey")),curve:"smooth",dash:!1}});return{status:f.status,error:f.error,range:d,period:o,source:n,series:v,live:s.live,back:s.back,zone:i,group:{unit:a,aggregate:r},candles:g,unit:a}}const pf=e=>Math.round(1e4*e)/100+"%";function mf(e,t,o,n){if(void 0===n)return Z;const a=t.series[0].points.map(e=>({t:(e.t+(e.end??e.t))/2})),r=qr(a,n);if(r<0)return Z;const i=t.candles[r],s=o(a[r].t)/Ga,l=Rr(s,kr(e)),c=t.series[0].entity,d=(t,o=c)=>ur(dr(t,o.decimals,e.hass),o.unit),u=i?[[Ze(e.hass,"candle_open"),d(i.open)],[Ze(e.hass,"candle_high"),d(i.high)],[Ze(e.hass,"candle_low"),d(i.low)],[Ze(e.hass,"candle_close"),d(i.close)]]:[[c.name,"—"]];for(const h of t.series.slice(1)){const e=h.points[r]?.v;u.push([h.entity.name,null==e?"—":d(e,h.entity),h.color])}return B`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${pf(s)}"></div>
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${pf(s)}`}>
      <div class="tooltip-time">${function(e,t,o,n){if("hour"===t)return Hn(e,o);const a="month"===t?{month:"long",year:"numeric",timeZone:n.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:n.timeZone};let r;try{r=new Intl.DateTimeFormat(o?.locale?.language??o?.language??"en",a)}catch{r=new Intl.DateTimeFormat("en",a)}const i=r.format(e);return"week"===t?Ze(o,"candle_week_of",{date:i}):i}(t.series[0].points[r].t,t.unit,e.hass,t.zone)}</div>
      ${u.map(([e,t,o])=>B`<div class="tooltip-row">
            ${o?B`<span class="swatch" style="background:${o}"></span>`:Z}
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}const ff=[...ls.map(e=>"period_last"===e.name?{...e,default:14}:"period_unit"===e.name?{...e,default:"day"}:"source"===e.name?{...e,default:"statistics"}:"group_by"===e.name?{name:"candle_by",path:["group_by"],default:"day"}:"aggregate"===e.name?{name:"under_aggregate",path:["aggregate"],default:"mean"}:e),{name:"up_color",path:["up_color"],default:"green"},{name:"down_color",path:["down_color"],default:"red"},{name:"underneath",path:["underneath"],default:"columns"},...fs,...ps];const gf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},vf={layout:"chart",group:"history",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    .candle {
      cursor: pointer;
    }
    .candle .wick {
      stroke-width: 1.5px;
    }
    .under-columns rect {
      opacity: 0.45;
    }
    .under-line {
      stroke-width: 2px;
      stroke-linejoin: round;
      opacity: 0.7;
    }
  `,thumbnail:()=>q`
    <g stroke-width="1.5">
      <line x1="12" x2="12" y1="8" y2="26" stroke="var(--error-color, #db4437)" />
      <rect x="8" y="11" width="8" height="10" fill="var(--error-color, #db4437)" />
      <line x1="26" x2="26" y1="14" y2="32" stroke="var(--error-color, #db4437)" />
      <rect x="22" y="18" width="8" height="9" fill="var(--error-color, #db4437)" />
      <line x1="40" x2="40" y1="10" y2="30" stroke="var(--success-color, #43a047)" />
      <rect x="36" y="14" width="8" height="12" fill="var(--success-color, #43a047)" />
      <line x1="54" x2="54" y1="4" y2="22" stroke="var(--success-color, #43a047)" />
      <rect x="50" y="7" width="8" height="10" fill="var(--success-color, #43a047)" />
    </g>`,validate(e){Qa(e),xn(e),Gr(e),jr(e),da(df(e));for(const t of["up_color","down_color"])if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`);if(void 0!==e.underneath&&!lf.includes(e.underneath))throw new Error(`"underneath" must be one of: ${lf.join(", ")}`)},editor:function(e){const t=$s(`candlestick|${e.config.period?.calendar?"calendar":"rolling"}`,e.hass,()=>{return[...(t=e.hass,o=e.config,ds(t,{...o,group_by:uf(o)}).map(e=>{const o=e;return o.schema?.some(e=>"group_by"===e.name)?{...o,schema:[{name:"candle_by",selector:ss(t,"group_by",ja)},{name:"under_aggregate",selector:ss(t,"aggregate",La)}]}:e})),{type:"grid",name:"",schema:[{name:"up_color",selector:{text:{}}},{name:"down_color",selector:{text:{}}}]},{name:"underneath",selector:ss(e.hass,"underneath",lf)},...gs(e.hass),...ms(e.hass)];var t,o});return ks(e,"chart",t,ff)},entityFields:()=>gf,disconnect(e){rr(e),$r(e),Wr(e)},render(e){const t=hf(e),o=nr(t,e),n=ir(t,e),a=o===Z&&n===Z?Z:B`${o}${n}`,r=sr(t,e),i=Lr(e.raw);if(r)return Nr("over"===i.header?{...i,header:"above"}:i,a,r);const s=Mr(e,t.range,function(e){let t=1/0,o=-1/0;for(const n of e)n&&(t=Math.min(t,n.low),o=Math.max(o,n.high));return t===1/0?void 0:[t,o]}(t.candles)),l=t.series.length>1;l&&(s.scales.y=dn(s.value.domain,[146,0]));const{x:c,y:d}=s.scales,u=Ce(e.raw.up_color??"green"),h=Ce(e.raw.down_color??"red"),p=t.series[0],m=t.candles.map(e=>{if(!e)return Z;const t=c(e.t),o=c(e.end)-t,n=t+o/2,a=e.close>=e.open?u:h,r=d(Math.max(e.open,e.close)),i=Math.max(1.5,d(Math.min(e.open,e.close))-r);return q`<g
        class="candle entity ${e.close>=e.open?"up":"down"}"
        data-index="0"
        aria-label=${p.entity.label}
      >
        <line class="wick" x1=${n} x2=${n} y1=${d(e.high)} y2=${d(e.low)} stroke=${a}></line>
        <rect class="body" x=${t+o*(1-cf)/2} width=${o*cf} y=${r} height=${i} fill=${a}></rect>
      </g>`}),f=e.raw.underneath??"columns",g=q`${l?function(e,t,o){const n=e.series.slice(1);return q`${n.map((e,a)=>{const r=e.points.map(e=>e.v).filter(e=>null!==e),i=Math.min(0,...r),s=Math.max(0,...r),l=dn([i,s===i?i+1:s],[Xa,156]);if("line"===o){const o=Ya(e.points).map(e=>Wa(e.map(e=>[t((e.t+(e.end??e.t))/2),l(e.v)]),"straight")).join("");return q`<path class="under-line entity" data-index=${e.index} d=${o} fill="none" stroke=${e.color}></path>`}return q`<g class="under-columns entity" data-index=${e.index} fill=${e.color}>
      ${e.points.map(e=>{if(null===e.v)return Z;const o=t(e.t),r=t(e.end??e.t)-o,i=r*cf/n.length,s=o+r*(1-cf)/2+a*i,c=l(Math.max(0,e.v));return q`<rect x=${s} width=${Math.max(.5,.9*i)} y=${c} height=${Math.max(0,l(Math.min(0,e.v))-c)}></rect>`})}
    </g>`})}`}(t,c,f):Z}${m}`,v=Yr(e.raw),y=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_candlestick"),names:t.series.map(e=>e.entity.name).join(", ")}),b=p.points.map(e=>({t:(e.t+(e.end??e.t))/2,v:e.v}));return Nr(i,a,Ar({axes:s,ctx:e,content:g,label:y,overlay:B`${"over"===i.header?Tr(a):Z}
        ${v?mf(e,t,c,Zr(e.host)):Z}`,hover:v?Xr(e,t.range,[b]):void 0}))}},yf=["horizontal","vertical"],bf=1e3,xf=100,_f=e=>"number"==typeof e&&Number.isFinite(e),wf=[{name:"orientation",path:["orientation"],default:"horizontal"},{name:"value_axis",path:["value_axis"],default:!0},{name:"value_grid",path:["value_grid"],default:!0},{name:"value_min",path:["value_min"]},{name:"value_max",path:["value_max"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function $f(e){return[{name:"orientation",selector:ss(e,"orientation",yf)},{type:"grid",name:"",schema:[{name:"value_axis",selector:{boolean:{}}},{name:"value_grid",selector:{boolean:{}}},{name:"value_min",selector:{number:{mode:"box",step:"any"}}},{name:"value_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]}function kf(e){for(const t of["compact","tooltip"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);if(void 0!==e.orientation&&!yf.includes(e.orientation))throw new Error(`"orientation" must be one of: ${yf.join(", ")}`);for(const t of["value_axis","value_grid"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of["value_min","value_max"])if(void 0!==e[t]&&!_f(e[t]))throw new Error(`"${t}" must be a number`);if(_f(e.value_min)&&_f(e.value_max)&&e.value_min>=e.value_max)throw new Error('"value_min" must be below "value_max"')}function Mf(e){return{orientation:e.orientation??"horizontal",axis:!1!==e.value_axis,grid:!1!==e.value_grid,min:_f(e.value_min)?e.value_min:void 0,max:_f(e.value_max)?e.value_max:void 0}}function zf(e){return Math.min(140,Math.max(64,Math.round(.3*(e-32))))}function Sf(e,t,o,n=64){const a=Mf(e.raw),r=!0===e.raw.compact,i=wr(e),s=Math.max(1,t);if("horizontal"===a.orientation){const e=dn(o.domain,[0,bf]);return{orientation:a.orientation,count:s,width:bf,height:s*xf,at:(t,o,n=0)=>[e(t),(o+.5+n)*xf],valuePx:Math.max(40,i-32-zf(i)-8),bandPx:Math.min(r?Math.round(.69*n):n,s>12?28:s>6?40:1/0)}}const l=dn(o.domain,[bf,0]),c=Math.max(40,i-32-(a.axis?40:0));return{orientation:a.orientation,count:s,width:s*xf,height:bf,at:(e,t,o=0)=>[(t+.5+o)*xf,l(e)],valuePx:r?110:180,bandPx:c/s}}function Af(e,t){return"horizontal"===t?Math.max(2,Math.min(8,Math.floor(e/64))):e>140?4:3}function Ef(e,t,o,n){const a=Mf(t),r=Mn(e,{min:a.min,max:a.max},o);return{domain:r.domain,ticks:r.ticks,format:e=>dr(e,r.decimals,n)}}function Cf(e,t){const o=function(e){for(const t of[1,2,3,4,6,12])if(t>=e)return t;return Math.max(12,wn(e,1))}(24/Math.max(1,e)),n=[];for(let i=0;i<=24;i+=o)n.push(i);let a;const r={hour:"numeric",minute:"2-digit",timeZone:"UTC",hour12:Fn(t)};try{a=new Intl.DateTimeFormat(t?.locale?.language??t?.language??"en",r)}catch{a=new Intl.DateTimeFormat("en",r)}return{domain:[0,24],ticks:n,format:e=>a.format(Date.UTC(2e3,0,1,0,Math.round(60*e)))}}const jf=e=>Math.round(1e4*e)/100+"%",Lf=new WeakMap;function Nf(e){return Lf.get(e)}function Tf(e){Lf.delete(e)}function Of(e,t,o,n,a){const r=(t+.5)/e.count,i="horizontal"===e.orientation?r>.5?`top:auto;bottom:${jf(1-t/e.count)};right:0`:`top:${jf((t+1)/e.count)};right:0`:r>.5?`top:0;right:${jf(1-t/e.count)}`:`top:0;left:${jf((t+1)/e.count)}`;return B`<div class="hover-layer" aria-hidden="true">
    <div class="tooltip band-tooltip" style=${i}>
      <div class="tooltip-time"><span class="swatch" style="background:${a}"></span> ${o}</div>
      ${n.map(([e,t])=>B`<div class="tooltip-row">
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}function Ff({ctx:e,geometry:t,categories:o,scale:n,content:a,label:r,overlay:i=Z,hover:s=!1}){const l=Mf(e.raw),c="horizontal"===t.orientation,d=n.ticks.filter(e=>e>=n.domain[0]&&e<=n.domain[1]),u=l.grid?q`<g class="grid">${d.map(e=>{const[o,n]=t.at(e,0);return c?q`<line x1=${o} x2=${o} y1="0" y2=${t.height}></line>`:q`<line x1="0" x2=${t.width} y1=${n} y2=${n}></line>`})}</g>`:Z,h=l.axis&&d.length?B`<div class="cat-axis">
          ${c?Z:B`<span class="cat-sizer" aria-hidden="true"
                  >${d.map(n.format).reduce((e,t)=>t.length>e.length?t:e,"")}</span
                >`}
          ${d.map(e=>{const o=(e=>{const[o,n]=t.at(e,0);return c?o/t.width:n/t.height})(e);return B`<span class="axis-label ${c?o<.04?"start":o>.96?"end":"":o<.08?"top":""}" style="${c?"left":"top"}:${jf(o)}"
              >${n.format(e)}</span
            >`})}
        </div>`:Z,p=s?function(e,t){const o=t=>{Lf.get(e.host)!==t&&(void 0===t?Lf.delete(e.host):Lf.set(e.host,t),e.requestUpdate())};return{move(e){const n=e.currentTarget.getBoundingClientRect(),a="horizontal"===t.orientation,r=a?n.height:n.width,i=a?e.clientY-n.top:e.clientX-n.left;r>0&&o(Math.min(t.count-1,Math.max(0,Math.floor(i/r*t.count))))},leave(){o(void 0)}}}(e,t):void 0,m=B`<div class="cat-labels">
    ${o.map(e=>B`<div class="entity cat-label" data-index=${e.index} tabindex="0" aria-label=${e.label}>
          <span class="cat-name"><span class="swatch" style="background:${e.color}"></span>${e.name}</span>
          ${e.detail?B`<span class="cat-detail">${e.detail}</span>`:Z}
        </div>`)}
  </div>`,f=c?`height:${t.count*t.bandPx}px`:`height:${t.valuePx}px`,g=c&&t.bandPx<40;return B`<div
    class="cat-plot ${t.orientation} ${h===Z?"":"has-axis"} ${g?"dense":""}"
  >
    ${c?m:h}
    <div
      class="plot-area ${s?"hoverable":""}"
      style=${f}
      @pointerdown=${p?.move}
      @pointermove=${p?.move}
      @pointerleave=${p?.leave}
      @pointercancel=${p?.leave}
    >
      <svg
        class="plot"
        viewBox="0 0 ${t.width} ${t.height}"
        preserveAspectRatio="none"
        role="img"
        aria-label=${r}
      >
        ${u}
        <g class="cat-content">${a}</g>
      </svg>
      ${i}
    </div>
    ${c?h:m}
  </div>`}const Pf=r`
  .cat-plot {
    display: grid;
    gap: 0 8px;
  }
  .cat-plot.horizontal {
    grid-template-columns: clamp(64px, 30%, 140px) minmax(0, 1fr);
  }
  .cat-plot.vertical {
    grid-template-columns: auto minmax(0, 1fr);
  }
  .cat-plot .plot-area {
    position: relative;
    min-width: 0;
  }
  .cat-plot.horizontal .plot-area,
  .cat-plot.vertical .plot-area {
    grid-column: 2;
    grid-row: 1;
  }
  .cat-plot .plot {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .cat-plot .plot path,
  .cat-plot .plot line,
  .cat-plot .plot rect {
    vector-effect: non-scaling-stroke;
  }
  .cat-plot .grid line {
    stroke: var(--divider-color, rgba(127, 127, 127, 0.25));
    stroke-width: 1;
  }
  .cat-content {
    opacity: 0;
    transition: opacity var(--cd-duration) var(--cd-easing);
  }
  :host([ready]) .cat-content {
    opacity: 1;
  }
  :host([static]) .cat-content {
    transition: none;
  }
  .cat-labels {
    display: flex;
    min-width: 0;
  }
  .horizontal .cat-labels {
    grid-column: 1;
    grid-row: 1;
    flex-direction: column;
  }
  .vertical .cat-labels {
    grid-column: 2;
    grid-row: 2;
    padding-top: 4px;
  }
  .cat-label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    flex: 1 1 0;
    cursor: pointer;
    border-radius: 4px;
  }
  .vertical .cat-label {
    align-items: center;
    text-align: center;
  }
  .cat-label:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .cat-name,
  .cat-detail {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
  .cat-name {
    font-size: 0.875em;
  }
  .cat-name .swatch {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 6px;
    vertical-align: middle;
  }
  .cat-detail {
    font-size: 0.75em;
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
  }
  .frame.compact .cat-detail,
  .cat-plot.dense .cat-detail {
    display: none;
  }
  .cat-axis {
    position: relative;
  }
  .horizontal .cat-axis {
    grid-column: 2;
    grid-row: 2;
    height: 18px;
  }
  .horizontal .cat-axis .axis-label {
    top: 5px;
    transform: translateX(-50%);
  }
  .horizontal .cat-axis .axis-label.start {
    transform: none;
  }
  .horizontal .cat-axis .axis-label.end {
    transform: translateX(-100%);
  }
  .vertical .cat-axis {
    grid-column: 1;
    grid-row: 1;
    min-width: 24px;
  }
  .vertical .cat-axis .axis-label {
    right: 0;
    transform: translateY(-50%);
  }
  .vertical .cat-axis .axis-label.top {
    transform: none;
  }
  .cat-plot .axis-label {
    position: absolute;
    font-size: 11px;
    line-height: 1;
    color: var(--secondary-text-color);
    white-space: nowrap;
    pointer-events: none;
    font-variant-numeric: tabular-nums;
  }
  .cat-sizer {
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .band-tooltip {
    position: absolute;
    min-width: 120px;
  }
  .band-tooltip .tooltip-time {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .band-tooltip .swatch {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;function Df(e,t,o){const n=[];for(let a=0;a<e.length;a++){const r=e[a];if(null===r.v||!Number.isFinite(r.v))continue;const i=a+1<e.length?e[a+1].t:o;if(t&&a>0&&a===e.length-1&&r.t>=o)continue;const s=t?Math.max(1,Math.min(i,o)-r.t):1;n.push({t:r.t,v:r.v,w:s,real:!0!==r.carried})}return n}function Uf(e){return[...e].sort((e,t)=>e.v-t.v)}function Hf(e,t){const o=e.length;if(0===o)return Number.NaN;if(1===o)return e[0].v;const n=e.reduce((e,t)=>e+t.w,0),a=Math.min(1,Math.max(0,t))*n;let r=0,i=-1/0,s=e[0].v;for(const l of e){const e=r+l.w/2;if(a<=e)return i===-1/0?l.v:s+(l.v-s)*(a-i)/(e-i||1);r+=l.w,i=e,s=l.v}return e[o-1].v}function If(e){if(0===e.length)return;const t=Uf(e),o=Hf(t,.25),n=Hf(t,.5),a=Hf(t,.75),r=1.5*(a-o),i=t.filter(e=>e.v>=o-r&&e.v<=a+r),s=t.reduce((e,t)=>e+t.w,0);return{n:e.length,min:t[0].v,max:t[t.length-1].v,q1:o,median:n,q3:a,low:i.length?i[0].v:o,high:i.length?i[i.length-1].v:a,mean:s>0?t.reduce((e,t)=>e+t.v*t.w,0)/s:n}}function Rf(e){const t=e.length;if(0===t)return 1;const o=Uf(e),n=o.reduce((e,t)=>e+t.w,0),a=o.reduce((e,t)=>e+t.v*t.w,0)/n,r=Math.sqrt(o.reduce((e,t)=>e+t.w*(t.v-a)**2,0)/n),i=Hf(o,.75)-Hf(o,.25),s=i>0?Math.min(r,i/1.34):r,l=o.reduce((e,t)=>e+t.w*t.w,0),c=l>0?n*n/l:t;let d=1/0;for(let h=1;h<o.length;h++){const e=o[h].v-o[h-1].v;e>0&&e<d&&(d=e)}const u=.9*s*Math.max(1,c)**-.2;return u>0?Math.max(u,d===1/0?0:d):d!==1/0?d:.01*Math.abs(a)||1}function Bf(e,t,o,n=64){if(0===e.length)return[];let a=1/0,r=-1/0;for(const u of e)a=Math.min(a,u.v),r=Math.max(r,u.v);const i=Math.max(o[0],a-2*t),s=Math.min(o[1],r+2*t);if(!(s>i))return[];const l=Array.from({length:n+1},(e,t)=>i+(s-i)*t/n),c=function(e,t,o){const n=e.reduce((e,t)=>e+t.w,0);if(0===n||t<=0)return o.map(()=>0);const a=1/(n*t*Math.sqrt(2*Math.PI));return o.map(o=>{let n=0;for(const a of e){const e=(o-a.v)/t;e>-6&&e<6&&(n+=a.w*Math.exp(-.5*e*e))}return n*a})}(e,t,l),d=Math.max(...c);return l.map((e,t)=>({x:e,d:d>0?c[t]/d:0}))}function qf(e){const t=43758.5453*Math.sin(12.9898*(e+1));return t-Math.floor(t)-.5}function Vf(e,t){const o=e.filter(e=>e.real);if(o.length<=t)return o;const n=[];for(let a=0;a<t;a++)n.push(o[Math.floor(a*o.length/t)]);return n}const Zf=["violin","raincloud"],Wf=["none","day","week","month"],Yf=.42;function Gf(e){const t=e.shape??"violin";return{shape:t,box:!1!==e.box,readings:e.readings??"raincloud"===t,bandwidth:"number"==typeof e.bandwidth?e.bandwidth:void 0,split:e.split_by??"none"}}function Xf(e,t,o,n){const a="month"===t?{month:"short",year:"numeric",timeZone:o.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:o.timeZone};try{return new Intl.DateTimeFormat(n?.locale?.language??n?.language??"en",a).format(e)}catch{return new Intl.DateTimeFormat("en",a).format(e)}}const Jf=(e,t,o)=>e?ur(dr(e.median,t.entity.decimals,o),t.entity.unit):"";function Kf(e,t,o,n,a,r,i){const s=(e,t)=>e?Ze(i,"violin_median",{value:Jf(e,t,i)}):Ze(i,"violin_none");if("none"===o.split)return e.map((e,o)=>{const n=If(t[o]);return{series:e,readings:t[o],summary:n,name:e.entity.name,detail:s(n,e)}});const l=e.map((e,o)=>function(e,t,o){const n=t.slice(0,-1).map(()=>[]);for(const a of e)for(let e=0;e+1<t.length;e++){const r=t[e],i=t[e+1];if(!o){a.t>=r&&a.t<i&&n[e].push(a);continue}const s=Math.min(i,a.t+a.w)-Math.max(r,a.t);s<=0||n[e].push({t:Math.max(r,a.t),v:a.v,w:s,real:a.real&&a.t>=r})}return n}(t[o],n,a)),c=[];for(let d=0;d+1<n.length;d++)for(let t=0;t<e.length;t++){const a=l[t][d];if(0===a.length)continue;const u=If(a),h=Xf(n[d],o.split,r,i);c.push({series:e[t],readings:a,summary:u,name:e.length>1?`${h} · ${e[t].entity.name}`:h,detail:s(u,e[t])})}return c}function Qf(e,t,o,n,a=0,r=.42){if(0===e.length)return"";const i=e.map(e=>t.at(e.x,o,a-e.d*r)),s=e.map(e=>t.at(e.x,o,n?a:a+e.d*r));return function(e,t){const o=e=>Math.round(100*e)/100;return`${[...e,...[...t].reverse()].map(([e,t],n)=>`${n?"L":"M"}${o(e)},${o(t)}`).join("")}Z`}(i,s)}function eg(e,t,o,n,a){const{summary:r,series:i}=e;if(!r)return q``;const s=n.bandwidth??Rf(e.readings),l=Bf(e.readings,s,a),c="raincloud"===n.shape,d=Math.min(1,110/o.bandPx),u=q`<path class="shape" d=${Qf(l,o,t,c,c?-.04*d:0,(c?.44:Yf)*d)}
    fill=${i.color} stroke=${i.color}></path>`,h=c?.08*d:0,p=function([e,t],[o,n]){return{x:Math.min(e,o),y:Math.min(t,n),width:Math.abs(o-e),height:Math.abs(n-t)}}(o.at(r.q1,t,h-.045*d),o.at(r.q3,t,h+.045*d)),[m,f]=o.at(r.low,t,h),[g,v]=o.at(r.high,t,h),y=n.box?q`<g class="box">
        <line class="whisker" x1=${m} y1=${f} x2=${g} y2=${v} stroke=${i.color}></line>
        <rect class="iqr" x=${p.x} y=${p.y} width=${p.width} height=${p.height} fill=${i.color}></rect>
        <path class="median" d=${bo([o.at(r.median,t,h)])}></path>
      </g>`:Z,b=n.readings?q`<path class="dots" stroke=${i.color} d=${bo(Vf(e.readings,300).map((e,n)=>o.at(e.v,t,d*function(e,t,o){return o?.3+.22*qf(e):1.6*qf(e)*Yf*t}(n,function(e,t){if(0===e.length)return 0;let o=0;for(;o<e.length-1&&e[o+1].x<t;)o++;const n=e[o],a=e[Math.min(e.length-1,o+1)];return a.x===n.x?n.d:n.d+(a.d-n.d)*(t-n.x)/(a.x-n.x)}(l,e.v),c))))}></path>`:Z;return q`<g class="group">${u}${y}${b}</g>`}const tg=(e,t,o)=>{const n=e=>dr(e,t.entity.decimals,o),a=e=>ur(e,t.entity.unit);return[[Ze(o,"dist_median"),a(n(e.median))],[Ze(o,"dist_middle"),a(`${n(e.q1)} – ${n(e.q3)}`)],[Ze(o,"dist_range"),a(`${n(e.min)} – ${n(e.max)}`)],[Ze(o,"dist_count"),dr(e.n,0,o)]]},og=[...ls,{name:"shape",path:["shape"],default:"violin"},{name:"box",path:["box"],default:!0},{name:"split_by",path:["split_by"],default:"none"},{name:"bandwidth",path:["bandwidth"]},...wf],ng=new Map;const ag={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},rg={layout:"chart",group:"distribution",height:240,styles:r`
    ${cr}
    ${ti}
    ${Or}
    ${Pf}
    .style-violin .shape {
      fill-opacity: 0.35;
      stroke-width: 1.5px;
      stroke-linejoin: round;
    }
    .style-violin .whisker {
      stroke-width: 1.5px;
    }
    .style-violin .median {
      stroke: var(--card-background-color, #fff);
      stroke-width: 6px;
      stroke-linecap: round;
    }
    .style-violin .dots {
      fill: none;
      stroke-width: 4px;
      stroke-linecap: round;
      stroke-opacity: 0.7;
    }
  `,thumbnail:()=>q`
    <path d="M6 14 C14 6 22 6 32 10 S50 6 58 14 C50 22 42 18 32 18 S14 22 6 14 Z"
      fill="var(--primary-color, #03a9f4)" fill-opacity="0.4" stroke="var(--primary-color, #03a9f4)" stroke-width="1.5" />
    <line x1="18" x2="46" y1="14" y2="14" stroke="var(--primary-color, #03a9f4)" stroke-width="1.5" />
    <rect x="26" y="12" width="12" height="4" fill="var(--primary-color, #03a9f4)" />
    <path d="M10 32 C18 24 26 22 34 26 S50 26 56 32 Z" fill="var(--success-color, #43a047)" fill-opacity="0.4"
      stroke="var(--success-color, #43a047)" stroke-width="1.5" />
    <g fill="var(--success-color, #43a047)"><circle cx="20" cy="36" r="1.3" /><circle cx="28" cy="37" r="1.3" />
      <circle cx="34" cy="35.5" r="1.3" /><circle cx="42" cy="37" r="1.3" /></g>`,validate(e){if(Qa(e),Gr(e),kf(e),void 0!==e.shape&&!Zf.includes(e.shape))throw new Error(`"shape" must be one of: ${Zf.join(", ")}`);if(void 0!==e.split_by&&!Wf.includes(e.split_by))throw new Error(`"split_by" must be one of: ${Wf.join(", ")}`);for(const o of["box","readings"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);const t=e.bandwidth;if(void 0!==t&&!("number"==typeof t&&Number.isFinite(t)&&t>0))throw new Error('"bandwidth" must be a number above 0')},editor:function(e){const t=Gf(e.config),o=$s(`violin|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"shape",selector:ss(e.hass,"shape",Zf)},{name:"split_by",selector:ss(e.hass,"split_by",Wf)}]},{type:"grid",name:"",schema:[{name:"box",selector:{boolean:{}}},{name:"readings",selector:{boolean:{}}}]},{name:"bandwidth",selector:{number:{min:0,mode:"box",step:"any"}}},...$f(e.hass)]);return ks(e,"chart",o,function(e){let t=ng.get(e);return t||(t=[...og,{name:"readings",path:["readings"],default:"raincloud"===e}],ng.set(e,t)),t}(t.shape))},entityFields:()=>ag,disconnect(e){rr(e),$r(e),Tf(e)},render(e){const t=Date.now(),o=er(e,t),n=nr(o,e),a={...Lr(e.raw),header:"above"},r=sr(o,e);if(r)return Nr(a,n,r);const i=Gf(e.raw),s=Math.min(o.range.end,t),l="history"===o.source&&!o.group,c=o.series.map(e=>Df(e.points,l,s)),d="none"===i.split?[]:ea(i.split,o.range.start,s,o.zone),u=Kf(o.series,c,i,d,l,o.zone,e.hass);let h=1/0,p=-1/0;for(const k of u){if(!k.summary)continue;const e=i.bandwidth??Rf(k.readings);h=Math.min(h,k.summary.min-e),p=Math.max(p,k.summary.max+e)}const m=Mf(e.raw),f=Sf(e,u.length,{domain:[0,1]}),g=Ef(h===1/0?void 0:[h,p],e.raw,Af(f.valuePx,m.orientation),e.hass),v=Sf(e,u.length,g),y=q`${u.map((e,t)=>eg(e,t,v,i,g.domain))}`,b=u.map(e=>({index:e.series.index,name:e.name,detail:e.detail,color:e.series.color,label:`${e.name}, ${e.detail}`})),x=Yr(e.raw),_=x?Nf(e.host):void 0,w=void 0===_?void 0:u[_],$=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"raincloud"===i.shape?"violin_raincloud":"editor_style_violin"),names:o.series.map(e=>e.entity.name).join(", ")});return Nr(a,n,Ff({ctx:e,geometry:v,categories:b,scale:g,content:y,label:$,hover:x,overlay:w?.summary&&void 0!==_?Of(v,_,w.name,tg(w.summary,w.series,e.hass),w.series.color):Z}))}},ig=.75;function sg(e){const t=e.map((e,t)=>t).sort((t,o)=>e[t].at-e[o].at||t-o),o=new Array(e.length).fill(0),n=[];let a=0;const r=function(e){let t=0;for(const o of e)o.r>t&&(t=o.r);return t}(e);for(const i of t){const{at:t,r:s}=e[i];for(;a<n.length&&t-n[a].at>s+r+ig;)a++;const l=n.slice(a).filter(e=>Math.abs(e.at-t)<e.r+s+ig),c=[0];for(const e of l){const o=e.r+s+ig,n=Math.sqrt(Math.max(0,o*o-(e.at-t)**2));c.push(e.y+n,e.y-n)}const d=c.sort((e,t)=>Math.abs(e)-Math.abs(t)||t-e).find(e=>l.every(o=>(o.at-t)**2+(o.y-e)**2>=(o.r+s+ig)**2-1e-6)),u=d??0;o[i]=u,n.push({at:t,r:s,y:u})}return o}function lg(e,t,o=1){let n=1,a=sg(e);const r=t=>function(e,t){let o=0;return e.forEach((e,n)=>{o=Math.max(o,Math.abs(t[n])+e.r)}),o}(e.map(e=>({...e,r:e.r*t})),a),i=Math.min(...e.map(e=>e.r)),s=Math.min(1,o/Math.max(i,1e-9));for(let l=0;l<4;l++){const o=r(n);if(o<=t)return{offsets:a,scale:n};const i=Math.max(s,n*Math.sqrt(t/o)*.95);if(i>=n)break;n=i,a=sg(e.map(e=>({...e,r:e.r*n})))}if(r(n)>t){const o=Math.max(0,t-Math.max(...e.map(e=>e.r*n))),r=Math.max(...a.map(Math.abs));r>0&&(a=a.map(e=>e*o/r))}return{offsets:a,scale:n}}const cg=["value","time_of_day"];function dg(e){return{placeBy:e.place_by??"value",dot:"number"==typeof e.dot_size?e.dot_size:6,sized:!0===e.size_by_value}}const ug=/^(binary_sensor|switch|input_boolean|light|fan|siren|automation)\./;function hg(e,t,o){const n=Math.min(e.range.end,o);return e.series.map(o=>{const a="time_of_day"===t.placeBy&&ug.test(o.entity.entityId);let r;r=a?function(e){const t=[];let o=null;for(const n of e)null!==n.v&&(1!==n.v||1===o||n.carried||t.push(n),o=n.v);return t}(o.points).map(e=>({t:e.t,v:1,w:1,real:!0})):Df(o.points,"history"===e.source&&!e.group,n).filter(e=>e.real);const i=Vf(r,400);return{series:o,positions:i.map(o=>"time_of_day"===t.placeBy?function(e,t){const o=Yn(e,t);return o.hour+o.minute/60+o.second/3600}(o.t,e.zone.timeZone):o.v),values:i.map(e=>e.v),total:r.length,events:a}})}function pg(e,t,o,n,a){if(0===e.positions.length)return q``;const r=a.dot/2,i=n.domain[1]-n.domain[0]||1,s=Math.min(...e.values),l=Math.max(...e.values),c=e.values.map(t=>{if(!a.sized||e.events)return r;const o=function(e,t,o,n){if(!(o>t))return n;const a=Math.min(1,Math.max(0,(e-t)/(o-t)));return n*Math.sqrt(.12+.88*a)}(t,s,l,r);return Math.max(.5,Math.round(o/r*6)/6)*r}),d=e.positions.map((e,t)=>({at:(e-n.domain[0])/i*o.valuePx,r:c[t]})),{offsets:u,scale:h}=lg(d,o.bandPx/2-1,1),p=new Map;return d.forEach((n,a)=>{const r=Math.round(n.r*h*2*100)/100,i=p.get(r)??[];i.push(o.at(e.positions[a],t,u[a]/o.bandPx)),p.set(r,i)}),q`<g class="swarm entity" data-index=${e.series.index} stroke=${e.series.color}>
    ${[...p].map(([e,t])=>q`<path class="dots" d=${bo(t)} style="stroke-width:${e}px"></path>`)}
  </g>`}function mg(e,t,o,n){const a=If(e.positions.map((e,t)=>({t:t,v:e,w:1,real:!0})));if(!a)return[];const r=a=>o?t.format(a):ur(dr(a,e.series.entity.decimals,n),e.series.entity.unit);return[[Ze(n,"dist_count"),dr(e.total,0,n)],...e.positions.length<e.total?[[Ze(n,"swarm_shown"),dr(e.positions.length,0,n)]]:[],[Ze(n,"dist_median"),r(a.median)],[Ze(n,"dist_middle"),`${r(a.q1)} – ${r(a.q3)}`],[Ze(n,o?"swarm_earliest_latest":"swarm_lowest_highest"),`${r(a.min)} – ${r(a.max)}`]]}const fg=[...ls,{name:"place_by",path:["place_by"],default:"value"},{name:"dot_size",path:["dot_size"],default:6},{name:"size_by_value",path:["size_by_value"],default:!1},...wf];function gg(e){return e.map(e=>{const t=e;return t.schema?{...t,schema:t.schema.filter(e=>"value_min"!==e.name&&"value_max"!==e.name)}:e})}const vg={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},yg={layout:"chart",group:"distribution",height:260,styles:r`
    ${cr}
    ${ti}
    ${Or}
    ${Pf}
    .swarm .dots {
      fill: none;
      stroke-linecap: round;
      stroke-opacity: 0.85;
    }
  `,thumbnail:()=>q`
    <g fill="var(--primary-color, #03a9f4)">
      <circle cx="10" cy="14" r="2.2" /><circle cx="16" cy="11" r="2.2" /><circle cx="16" cy="17" r="2.2" />
      <circle cx="21" cy="14" r="2.2" /><circle cx="26" cy="11" r="2.2" /><circle cx="26" cy="17" r="2.2" />
      <circle cx="31" cy="14" r="2.2" /><circle cx="44" cy="14" r="2.2" /><circle cx="52" cy="14" r="2.2" />
    </g>
    <g fill="var(--warning-color, #f59e0b)">
      <circle cx="14" cy="30" r="2.2" /><circle cx="30" cy="30" r="2.2" /><circle cx="36" cy="27" r="2.2" />
      <circle cx="36" cy="33" r="2.2" /><circle cx="41" cy="30" r="2.2" /><circle cx="46" cy="27" r="2.2" />
      <circle cx="46" cy="33" r="2.2" /><circle cx="51" cy="30" r="2.2" /><circle cx="56" cy="27" r="2.2" />
    </g>`,validate(e){if(Qa(e),kf(e),void 0!==e.place_by&&!cg.includes(e.place_by))throw new Error(`"place_by" must be one of: ${cg.join(", ")}`);const t=e.dot_size;if(void 0!==t&&!("number"==typeof t&&t>=2&&t<=16))throw new Error('"dot_size" must be a number from 2 to 16');if(void 0!==e.size_by_value&&"boolean"!=typeof e.size_by_value)throw new Error('"size_by_value" must be true or false')},editor:function(e){const t=dg(e.config),o=$s(`beeswarm|${cs(e.config)}|${t.placeBy}`,e.hass,()=>[...ds(e.hass,e.config),{name:"place_by",selector:ss(e.hass,"place_by",cg)},{type:"grid",name:"",schema:[{name:"dot_size",selector:{number:{min:2,max:16,step:1,mode:"box",unit_of_measurement:"px"}}},{name:"size_by_value",selector:{boolean:{}}}]},..."value"===t.placeBy?$f(e.hass):gg($f(e.hass))]);return ks(e,"chart",o,fg)},entityFields:()=>vg,disconnect(e){rr(e),$r(e),Tf(e)},render(e){const t=Date.now(),o=er(e,t),n=nr(o,e),a={...Lr(e.raw),header:"above"},r=sr(o,e);if(r)return Nr(a,n,r);const i=dg(e.raw),s=hg(o,i,t),l=Mf(e.raw),c=Af(Sf(e,s.length,{domain:[0,1]},96).valuePx,l.orientation);let d;if("time_of_day"===i.placeBy)d=Cf(c,e.hass);else{const t=s.flatMap(e=>e.positions);d=Ef(t.length?[Math.min(...t),Math.max(...t)]:void 0,e.raw,c,e.hass)}const u=Sf(e,s.length,d,96),h=q`${s.map((e,t)=>pg(e,t,u,d,i))}`,p=s.map(t=>{const o=function(e,t){if(0===e.total)return Ze(t,"swarm_none");const o=dr(e.total,0,t);return Ze(t,e.events?"swarm_events":"swarm_readings",{n:o})}(t,e.hass);return{index:t.series.index,name:t.series.entity.name,detail:o,color:t.series.color,label:`${t.series.entity.name}, ${o}`}}),m=Yr(e.raw),f=m?Nf(e.host):void 0,g=void 0===f?void 0:s[f],v=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_beeswarm"),names:o.series.map(e=>e.entity.name).join(", ")});return Nr(a,n,Ff({ctx:e,geometry:u,categories:p,scale:d,content:h,label:v,hover:m,overlay:g&&g.total>0&&void 0!==f?Of(u,f,g.series.entity.name,mg(g,d,"time_of_day"===i.placeBy,e.hass),g.series.color):Z}))}};function bg(e,t,o){const n=new Set,a=[t];for(;a.length;){const t=a.pop();if(t===o)return!0;n.has(t)||(n.add(t),a.push(...e.get(t)??[]))}return!1}function xg(e){const t=new Map,o=[];for(const n of e)n.from&&n.to&&n.from!==n.to&&(bg(t,n.to,n.from)||(t.set(n.from,[...t.get(n.from)??[],n.to]),o.push(n)));return o}function _g(e){return null!==e&&Number.isFinite(e)&&e>0?e:0}function wg(e,t){const o=xg(e),n=function(e){const t=new Map;for(const o of e)t.set(o.from,t.get(o.from)??0),t.set(o.to,t.get(o.to)??0);for(let o=0;o<=t.size;o++){let o=!1;for(const n of e){const e=t.get(n.from)+1;e>t.get(n.to)&&(t.set(n.to,e),o=!0)}if(!o)break}return t}(o),a=new Map;for(const b of o)a.has(b.from)||a.set(b.from,a.size),a.has(b.to)||a.set(b.to,a.size);const r=o.filter(e=>_g(e.value)>0),i=new Map,s=e=>{let t=i.get(e);return t||(t={name:e,order:a.get(e),column:n.get(e),value:0,in:0,out:0,x:0,y:0,h:0},i.set(e,t)),t},l=r.map(e=>{const t=_g(e.value),o=s(e.from),n=s(e.to);return o.out+=t,n.in+=t,{flow:e,value:t,source:o,target:n,width:0,y0:0,y1:0}}),c=[...i.values()].sort((e,t)=>e.order-t.order);for(const b of c)b.value=Math.max(b.in,b.out);const d=[...new Set(c.map(e=>e.column))].sort((e,t)=>e-t);for(const b of c)b.column=d.indexOf(b.column);const u=d.length;if(0===u)return{nodes:c,links:l,columns:u};const h=d.map((e,t)=>c.filter(e=>e.column===t)),p=e=>t.above?.(e,u)??0,m=h.map(e=>e.reduce((e,t)=>e+p(t),0)+t.gap*(e.length-1)),f=h.map(e=>e.reduce((e,t)=>e+t.value,0)),g=Math.max(0,Math.min(...h.map((e,o)=>(t.height-m[o])/f[o]))),v=t.width-t.left-t.right-t.nodeWidth;h.forEach((e,o)=>{let n=(t.height-(f[o]*g+m[o]))/2;const a=t.left+(u>1?v*o/(u-1):v/2);for(const r of e)n+=p(r),r.x=a,r.y=n,r.h=r.value*g,n+=r.h+t.gap});const y=e=>e.y+e.h/2;for(const b of l)b.width=b.value*g;for(const b of c){const e=l.filter(e=>e.source===b).sort((e,t)=>y(e.target)-y(t.target));let t=b.y;for(const n of e)n.y0=t+n.width/2,t+=n.width;const o=l.filter(e=>e.target===b).sort((e,t)=>y(e.source)-y(t.source));t=b.y;for(const n of o)n.y1=t+n.width/2,t+=n.width}return{nodes:c,links:l,columns:u}}function $g(e,t){return e.length*t*.58}function kg(e,t,o){if($g(e,o)<=t)return e;const n=Math.floor(t/(.58*o))-1;return n>=1?`${e.slice(0,n).trimEnd()}…`:""}function Mg(e,t,o){const n=e.map((e,t)=>t).sort((t,o)=>e[t]-e[o]),a=[...e];let r=-1/0;for(const s of n)a[s]=Math.max(a[s],r+t,t/2),r=a[s];let i=1/0;for(const s of[...n].reverse())a[s]=Math.min(a[s],i-t,o-t/2),i=a[s];return a}const zg=["auto","source","target"],Sg=10,Ag=e=>"string"==typeof e?e.trim():"";const Eg=new WeakMap,Cg=(e,t)=>e.column>0&&e.column<t-1,jg=(e,t)=>0===e.column?"left":Cg(e,t)&&e.in>0&&e.out>0?"above":"right";function Lg(e,t){return B`<div class="chart-message">${Ze(t,e)}</div>`}const Ng=[{name:"link_color",path:["link_color"],default:"auto"}];const Tg=[{name:"from",path:["from"],default:""},{name:"to",path:["to"],default:""},{name:"flow_color",path:["color"]}],Og=[{type:"grid",name:"",schema:[{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}}]},{name:"flow_color",selector:{text:{}}}];const Fg={layout:"chart",group:"totals",height:220,styles:r`
    ${cr}
    ${ti}
    .sankey-wrap {
      position: relative;
    }
    .sankey {
      display: block;
      width: 100%;
      height: auto;
      overflow: visible;
    }
    .sankey .link {
      fill-opacity: 0.35;
      transition:
        fill-opacity 0.15s ease,
        opacity var(--cd-duration) var(--cd-easing);
    }
    .sankey.dark .link {
      fill-opacity: 0.45;
    }
    .sankey.hovering .link {
      fill-opacity: 0.2;
    }
    .sankey .flow:hover .link,
    .sankey .flow:focus-visible .link,
    .sankey .flow.active .link {
      fill-opacity: 0.75;
    }
    .sankey .flow {
      cursor: pointer;
      outline: none;
    }
    .sankey .flow:focus-visible {
      box-shadow: none;
    }
    .sankey .flow:focus-visible .link {
      fill-opacity: 0.85;
    }
    :host(:not([ready])) .sankey .link {
      opacity: 0;
    }
    .sankey .node {
      transition: opacity var(--cd-duration) var(--cd-easing);
    }
    :host(:not([ready])) .sankey .node {
      opacity: 0;
    }
    :host([static]) .sankey .node {
      transition: none;
    }
    .sankey .label {
      pointer-events: none;
    }
    .sankey .name {
      fill: var(--primary-text-color);
    }
    .sankey .value {
      fill: var(--secondary-text-color);
    }
    .sankey-tip {
      pointer-events: none;
      white-space: nowrap;
      max-width: none;
      transform: translate(-50%, calc(-100% - 6px));
    }
  `,thumbnail:()=>q`
    <g fill="none" stroke-opacity="0.4">
      <path d="M10 11 C32 11 32 9 54 9" stroke="var(--primary-color, #03a9f4)" stroke-width="10" />
      <path d="M10 21 C32 21 32 25 54 25" stroke="var(--primary-color, #03a9f4)" stroke-width="10" />
      <path d="M10 32 C32 32 32 33 54 33" stroke="var(--warning-color, #f59e0b)" stroke-width="6" />
    </g>
    <rect x="6" y="6" width="4" height="20" rx="1" fill="var(--primary-color, #03a9f4)" />
    <rect x="6" y="29" width="4" height="6" rx="1" fill="var(--warning-color, #f59e0b)" />
    <rect x="54" y="4" width="4" height="10" rx="1" fill="var(--success-color, #43a047)" />
    <rect x="54" y="20" width="4" height="16" rx="1" fill="var(--purple-color, #8b6cff)" />`,validate:function(e){if(void 0!==e.link_color&&!zg.includes(e.link_color))throw new Error(`"link_color" must be one of: ${zg.join(", ")}`);const t=[];(e.entities??[]).forEach((e,o)=>{if("object"!=typeof e||null===e)return;const n=e;for(const t of["from","to"])if(void 0!==n[t]&&"string"!=typeof n[t])throw new Error(`Entity ${o+1}: "${t}" must be a node name`);const a=Ag(n.from),r=Ag(n.to);if(a&&r&&a===r)throw new Error(`Entity ${o+1}: "from" and "to" must be different nodes`);a&&r&&t.push([a,r])});const o=function(e){const t=new Map;for(const[r,i]of e){if(r===i)return[r,i];t.set(r,[...t.get(r)??[],i])}const o=new Map,n=[],a=e=>{if("open"===o.get(e))return[...n.slice(n.indexOf(e)),e];if("done"!==o.get(e)){o.set(e,"open"),n.push(e);for(const o of t.get(e)??[]){const e=a(o);if(e)return e}n.pop(),o.set(e,"done")}};for(const r of t.keys()){const e=a(r);if(e)return e}}(t);if(o)throw new Error(`Flows can't go round in a loop: ${o.join(" → ")}`)},editor:function(e){const t=$s("sankey",e.hass,()=>[{name:"link_color",selector:ss(e.hass,"link_color",zg)}]);return ks(e,"chart",t,Ng)},entityFields:()=>({schema:Og,fields:Tg}),disconnect(e){$r(e),Eg.delete(e)},render:function(e){const t=function(e){return e.items.flatMap((e,t)=>{const o=e.config,n=Ag(o.from),a=Ag(o.to);return n&&a?[{index:t,from:n,to:a,value:e.available?e.value:null}]:[]})}(e);if(!t.length)return Lg("sankey_no_flows",e.hass);const o=e.items[t[0].index],n=t=>ur(dr(t,o.decimals,e.hass),o.unit),a=Math.max(200,wr(e)-32),{show:r}=e.config,i=function(e,t,o){const n=t<400?11:12,a=n+3,r=wg(e,{width:t,height:200,left:0,right:0,nodeWidth:Sg,gap:12}),i=r.columns,s=new Map;for(const b of r.nodes)s.set(b.column,(s.get(b.column)??0)+1);const l=Math.max(200,44*Math.max(0,...s.values())),c=.3*t,d=e=>({name:o.name?e.name:"",value:o.value?o.format(e.value):""}),u=e=>{const t=r.nodes.filter(t=>jg(t,i)===e&&!Cg(t,i)).map(e=>Math.max($g(d(e).name,n),$g(d(e).value,n)));return t.length&&Math.max(...t)>0?Math.min(c,Math.max(...t))+6+3:2},h=u("left"),p=u("right"),m=r.nodes.some(e=>"above"===jg(e,i)),f=m&&(o.name||o.value)?20:0,g=wg(e,{width:t,height:l-f,left:h,right:p,nodeWidth:Sg,gap:12,above:(e,t)=>"above"===jg(e,t)&&f?20:0});for(const b of g.nodes)b.y+=f;for(const b of g.links)b.y0+=f,b.y1+=f;const v=i>1?(t-h-p-Sg)/(i-1):t,y=[];if(o.name||o.value){for(const o of g.nodes){const e=jg(o,i),a=d(o);if("above"===e){const r=o.x+5,i=Math.min(1.6*v,2*r,2*(t-r)),s=$g(`${a.name} ${a.value}`,n)<=i||!a.name?a.value:"",l=kg(a.name,s?i-$g(` ${s}`,n):i,n);y.push({node:o,side:e,name:l,value:s,y:o.y-6});continue}const r=Cg(o,i)?v-Sg-12:("left"===e?h:p)-6-2,s=$g(a.value,n)<=r?a.value:"";y.push({node:o,side:e,name:kg(a.name,r,n),value:s,y:o.y+o.h/2})}const e=o.name&&o.value?2*a:a;for(let t=0;t<i;t++){const o=y.filter(e=>"above"!==e.side&&e.node.column===t);Mg(o.map(e=>e.y),e,l).forEach((e,t)=>o[t].y=e)}}return{width:t,height:l,font:n,layout:g,labels:y}}(t,a,{name:r.name,value:r.value,format:n}),{layout:s}=i;if(!s.links.length)return Lg("sankey_nothing",e.hass);const l=function(e,t,o){const n=xg(e),a=new Set(n.map(e=>e.to)),r=new Map;for(const c of n)for(const e of[c.from,c.to])r.has(e)||r.set(e,"");const i=e=>"target"===t||"auto"===t&&a.has(e.from)?e.to:e.from,s=new Set;for(const c of n){const e=o(c.index);e&&!s.has(i(c))&&(r.set(i(c),Ce(e)),s.add(i(c)))}[...r.keys()].forEach((e,t)=>{s.has(e)||r.set(e,Ce(Ja[t%Ja.length]))});const l=new Map;for(const c of n){const e=o(c.index);l.set(c.index,e?Ce(e):r.get(i(c)))}return{node:r,link:l}}(t,e.raw.link_color??"auto",t=>{const o=e.items[t].config.color;return"string"==typeof o&&o?o:void 0}),c=Eg.get(e.host),d=t=>()=>{void 0===t?Eg.delete(e.host):Eg.set(e.host,t),e.requestUpdate()},u=!0===e.hass.themes?.darkMode,h=t=>Ze(e.hass,"sankey_flow",{from:t.flow.from,to:t.flow.to,value:n(t.value)}),p=Ze(e.hass,"sankey_aria",{flows:s.links.map(h).join(", ")}),m=s.links.find(e=>e.flow.index===c),f=s.links.map(t=>{const o=e.items[t.flow.index],n=Se(o.config);return q`<g
      class="entity flow ${n?"interactive":""} ${t===m?"active":""}"
      data-index=${t.flow.index}
      tabindex=${n?0:Z}
      aria-label=${`${h(t)} (${o.name})`}
      @pointerenter=${d(t.flow.index)}
      @pointerleave=${d(void 0)}
      @focus=${d(t.flow.index)}
      @blur=${d(void 0)}
    >
      <title>${h(t)}</title>
      <path class="link" d=${function(e,t){const o=e.source.x+t,n=e.target.x,a=(o+n)/2,r=Math.max(1,e.width)/2,i=e=>Math.round(10*e)/10,[s,l,c,d]=[e.y0-r,e.y1-r,e.y1+r,e.y0+r].map(i);return`M${i(o)},${s}C${i(a)},${s} ${i(a)},${l} ${i(n)},${l}L${i(n)},${c}C${i(a)},${c} ${i(a)},${d} ${i(o)},${d}Z`}(t,Sg)} fill=${l.link.get(t.flow.index)}></path>
    </g>`}),g=s.nodes.map(e=>q`<rect class="node" x=${e.x} y=${e.y} width=${Sg} height=${Math.max(2,e.h).toFixed(1)} rx="2"
        fill=${l.node.get(e.name)}></rect>`);return B`<div class="sankey-wrap">
    <svg
      class="sankey ${u?"dark":""} ${m?"hovering":""}"
      viewBox="0 0 ${i.width} ${i.height}"
      role="img"
      aria-label=${p}
    >
      <g class="links">${f}</g>
      <g class="nodes">${g}</g>
      <g class="labels" aria-hidden="true">${i.labels.map(e=>function(e,t){const o=e.node;if("above"===e.side)return q`<text class="label" x=${o.x+5} y=${e.y} text-anchor="middle" font-size=${t}>
      <tspan class="name">${e.name}</tspan>${e.value?q`<tspan class="value">${e.name?" ":""}${e.value}</tspan>`:Z}
    </text>`;const n="left"===e.side?o.x-6:o.x+Sg+6,a="left"===e.side?"end":"start",r=e.name&&e.value,i=t+3;return q`<text class="label" x=${n} text-anchor=${a} font-size=${t}>
    ${e.name?q`<tspan class="name" x=${n} y=${r?e.y-2:e.y+t/3}>${e.name}</tspan>`:Z}
    ${e.value?q`<tspan class="value" x=${n} y=${r?e.y-2+i:e.y+t/3}>${e.value}</tspan>`:Z}
  </text>`}(e,i.font))}</g>
    </svg>
    ${function(e,t,o,n){if(!e)return Z;const a=(e.source.x+Sg+e.target.x)/2,r=(e.y0+e.y1)/2-e.width/2,i=Math.min(Math.max(a,70),t.width-70);return B`<div
    class="tooltip sankey-tip"
    aria-hidden="true"
    style="left:${i/t.width*100}%;top:${Math.max(r,0)/t.height*100}%"
  >
    <div class="tooltip-row">
      <span class="swatch" style="background:${o}"></span>
      <span class="tooltip-name">${e.flow.from} → ${e.flow.to}</span>
      <span class="tooltip-value">${n}</span>
    </div>
  </div>`}(m,i,m?l.link.get(m.flow.index):"",m?n(m.value):"")}
  </div>`}},Pg=new Set(["unavailable","unknown"]);function Dg(e){return void 0===e||""===e||Pg.has(e)}function Ug(e,t){const o=[];for(let n=0;n<e.length;n++){const a=e[n];if(a.t>=t)break;const r=Math.min(t,n+1<e.length?e[n+1].t:t);if(r<=a.t)continue;const i=o[o.length-1];i&&i.state===a.s&&i.end===a.t?i.end=r:o.push({start:a.t,end:r,state:a.s})}return o}const Hg={on:"amber",open:"amber",opening:"amber",closing:"amber",home:"green",playing:"green",charging:"green",auto:"green",heat_cool:"green",heat:"#ff8100",heating:"#ff8100",preheating:"#ff8100",cool:"#2b9af9",cooling:"#2b9af9",dry:"#efbd07",drying:"#efbd07",fan_only:"#14b8a6",fan:"#14b8a6",paused:"purple",buffering:"purple",detected:"red",problem:"red",triggered:"red",unlocked:"red",jammed:"red",locked:"green",armed_home:"green",armed_away:"green",armed_night:"green",armed_vacation:"green",armed_custom_bypass:"green",arming:"amber",pending:"amber",cleaning:"primary",returning:"purple"},Ig=new Set(["off","closed","not_home","away","idle","standby","docked","clear","disarmed","none","false"]),Rg=["primary","purple","#14b8a6","#ec4899","amber","green","blue","red"];function Bg(e){const t=Math.max(0,Math.round(e/1e3));if(t<60)return`${t} s`;const o=Math.round(t/60);if(o<60)return`${o} min`;const n=Math.floor(o/60);if(n<24){const e=o-60*n;return e?`${n} h ${String(e).padStart(2,"0")}`:`${n} h`}const a=Math.floor(n/24),r=n-24*a;return r?`${a} d ${r} h`:`${a} d`}function qg(e){const t=new Set;for(const o of e)if(!Dg(o.state)){if(!Number.isFinite(Number(o.state))||""===o.state.trim())return!1;t.add(o.state)}return t.size>8}const Vg=new Set(["source","group_by","aggregate"]),Zg=[...ls.filter(e=>!Vg.has(e.name)),{name:"bar_labels",path:["bar_labels"],default:"state"},{name:"x_axis",path:["x_axis"],default:!0},{name:"grid_vertical",path:["gridlines","vertical"],default:!0},{name:"tooltip",path:["tooltip"],default:!0},{name:"timeline_legend",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];const Wg={text:{}};function Yg(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?Object.entries(t):[]}function Gg(e,t){const o=new Set(Yg(e).map(([e])=>e)),n=(e.entities??[]).map(e=>"string"==typeof e?e:e.entity),a=n.map(e=>t?.states[e]?.state).filter(e=>!!e);return[...a,"on","off","home","not_home","heat","idle"].find(e=>!o.has(e)&&"unavailable"!==e&&"unknown"!==e)??`state_${o.size+1}`}function Xg(e){const t=Yg(e.config),o=t=>Ze(e.hass,t),n=t=>e.commit(function(e,t){const o={...e},n=t.filter(([e])=>""!==e.trim());return n.length?o.state_colors=Object.fromEntries(n.map(([e,t])=>[e.trim(),t])):delete o.state_colors,o}(e.config,t)),a=(e,o)=>a=>{a.stopPropagation();const r=String(a.detail?.value??""),i=t.map(e=>[...e]);1===o&&""===r.trim()||(i[e][o]=r,n(i))};return B`<div class="state-colors" data-section="state-colors">
    <style>
      .state-colors {
        margin-top: 16px;
      }
      .state-colors .sc-title {
        font-weight: 500;
      }
      .state-colors .sc-help {
        font-size: 0.875em;
        color: var(--secondary-text-color);
        margin: 2px 0 8px;
      }
      .state-colors .sc-row {
        display: grid;
        grid-template-columns: 16px 1fr 1fr auto;
        gap: 8px;
        align-items: center;
        margin-bottom: 8px;
      }
      .state-colors .sc-swatch {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid var(--divider-color);
      }
      .state-colors .sc-add {
        font: inherit;
        color: var(--primary-color);
        background: none;
        border: 1px solid color-mix(in srgb, var(--primary-color) 40%, transparent);
        border-radius: 16px;
        padding: 6px 14px;
        cursor: pointer;
      }
    </style>
    <div class="sc-title">${o("editor_state_colors")}</div>
    <div class="sc-help">${o("editor_state_colors_help")}</div>
    ${t.map(([r,i],s)=>B`<div class="sc-row">
          <span class="sc-swatch" style="background:${Ce(i)}"></span>
          <ha-selector
            data-role="state"
            .hass=${e.hass}
            .label=${o("editor_state_colors_state")}
            .selector=${Wg}
            .value=${r}
            @value-changed=${a(s,0)}
          ></ha-selector>
          <ha-selector
            data-role="color"
            .hass=${e.hass}
            .label=${o("editor_state_colors_color")}
            .selector=${Wg}
            .value=${i}
            @value-changed=${a(s,1)}
          ></ha-selector>
          <ha-icon-button
            class="sc-remove"
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            .label=${o("editor_state_colors_remove")}
            @click=${()=>n(t.filter((e,t)=>t!==s))}
          ></ha-icon-button>
        </div>`)}
    <button
      type="button"
      class="sc-add"
      @click=${()=>n([...t,[Gg(e.config,e.hass),"primary"]])}
    >
      ${o("editor_state_colors_add")}
    </button>
  </div>`}const Jg=[{name:"timeline_group",path:["group"]}];const Kg=["state","duration","both","none"],Qg={normal:30,compact:22},ev={normal:24,compact:18};function tv(e,t,o){const n=t.entity.stateObj??{entity_id:t.entity.entityId,state:o,attributes:{}},a=t.entity.config.attribute;try{return a?e.formatEntityAttributeValue?.(n,a,o)??o:e.formatEntityState?.({...n,state:o},o)??o}catch{return o}}function ov(e,t,o){return function(e,t,o){const n=o?.[e];if(n)return{color:Ce(n),quiet:!1,text:Ne(n)};const a=Ig.has(e)&&!Object.prototype.hasOwnProperty.call(Hg,e),r=Object.prototype.hasOwnProperty.call(Hg,e)?Hg[e]:a?"grey":Rg[function(e){let t=0;for(let o=0;o<e.length;o++)t=31*t+e.charCodeAt(o)>>>0;return t}(e)%Rg.length],i=Ce(r);return{color:/^[a-z0-9_]+$/.test(e)&&/^[a-z0-9_]+$/.test(t)?`var(--state-${t}-${e}-color, ${i})`:i,quiet:a,text:a?"theme":Ne(r)}}(t,e.domain,function(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?t:void 0}(o))}const nv=e=>Math.round(1e4*e)/100+"%";function av(e,t,o,n){const a=o.raw.bar_labels??"state";return e.spans.map(r=>{if(Dg(r.state))return Z;const{left:i,width:s}=function(e,t){const o=t.end-t.start;if(!(o>0))return{left:0,width:0};const n=Math.max(t.start,e.start),a=Math.min(t.end,e.end);return{left:(n-t.start)/o,width:Math.max(0,a-n)/o}}(r,t.range);if(s<=0)return Z;const l=r.state,c=ov(e,l,o.raw),d=function(e,t,o){const n=Bg(o.end-o.start);return"state"===e?t:"duration"===e?n:"both"===e?`${t} · ${n}`:""}(a,tv(o.hass,e.series,l),r),u=""!==d&&function(e){return 6.2*e.length+10}(d)<=s*n;return B`<div
      class="tl-bar ${c.quiet?"quiet":""} text-${c.text}"
      style="left:${nv(i)};width:${nv(s)};--tl-color:${c.color}"
    >
      ${u?B`<span class="tl-label">${d}</span>`:Z}
    </div>`})}const rv={layout:"chart",group:"history",height:200,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    .tl-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 14px;
      padding: 0 0 8px;
      font-size: 0.875em;
      color: var(--secondary-text-color);
    }
    .tl-key {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    .swatch.quiet {
      opacity: 0.45;
    }
    .tl-wrap {
      display: grid;
      grid-template-columns: fit-content(35%) minmax(0, 1fr);
      grid-template-rows: auto auto;
    }
    .tl-wrap.no-names {
      grid-template-columns: 0 minmax(0, 1fr);
    }
    .tl-names {
      grid-column: 1;
      grid-row: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      padding-right: 10px;
    }
    .tl-name,
    .tl-heading {
      display: flex;
      align-items: center;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: var(--tl-row);
    }
    .tl-name {
      font-size: 0.875em;
      cursor: pointer;
      border-radius: 4px;
    }
    .tl-name span {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tl-name:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: -2px;
    }
    .tl-heading {
      height: var(--tl-heading);
      font-size: 0.75em;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
    }
    .tl-plot {
      position: relative;
      grid-column: 2;
      grid-row: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .tl-gap {
      height: var(--tl-heading);
      position: relative;
    }
    .tl-gap::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25));
    }
    .tl-row {
      position: relative;
      height: var(--tl-row);
      cursor: pointer;
    }
    .tl-track,
    .tl-bar {
      position: absolute;
      top: 4px;
      bottom: 4px;
      border-radius: 6px;
    }
    .tl-track {
      left: 0;
      right: 0;
      background: color-mix(in srgb, var(--primary-text-color) 5%, transparent);
    }
    .tl-bars {
      position: absolute;
      inset: 0;
      clip-path: inset(0 100% 0 0);
      transition: clip-path var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .tl-bars {
      clip-path: inset(0 0 0 0);
    }
    .tl-bar {
      min-width: 2px;
      background: var(--tl-color);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-sizing: border-box;
    }
    .tl-bar.quiet {
      background: color-mix(in srgb, var(--tl-color) 30%, transparent);
    }
    .tl-label {
      font-size: 11px;
      font-weight: 500;
      line-height: 1;
      padding: 0 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tl-bar.text-dark .tl-label {
      color: #1c1c1c;
    }
    .tl-bar.text-light .tl-label {
      color: #fff;
    }
    .tl-bar.text-theme .tl-label {
      color: var(--primary-text-color);
    }
    .tl-grid {
      position: absolute;
      top: 0;
      bottom: 0;
      border-left: 1px dashed var(--divider-color, rgba(127, 127, 127, 0.25));
      pointer-events: none;
    }
    .tl-now {
      position: absolute;
      top: 0;
      bottom: 0;
      border-left: 1.5px dashed var(--secondary-text-color);
      opacity: 0.7;
      pointer-events: none;
    }
    .tl-hint {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 8px;
      font-size: 0.75em;
      color: var(--secondary-text-color);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .tl-for {
      font-weight: 400;
      color: var(--secondary-text-color);
    }
    .tl-wrap .x-axis {
      position: relative;
      grid-column: 2;
      grid-row: 2;
      height: 18px;
    }
    .tl-wrap .x-axis .axis-label {
      top: 5px;
    }
    .frame.compact .tl-legend {
      padding-bottom: 4px;
      font-size: 0.8em;
    }
    .frame.compact .tl-wrap .x-axis {
      height: 14px;
    }
    .frame.compact .tl-wrap .x-axis .axis-label {
      top: 3px;
    }
    .frame.compact .tl-track,
    .frame.compact .tl-bar {
      top: 3px;
      bottom: 3px;
      border-radius: 4px;
    }
  `,thumbnail:()=>q`
    <rect x="4" y="7" width="56" height="7" rx="3" fill="var(--divider-color, rgba(127,127,127,.25))" />
    <rect x="12" y="7" width="16" height="7" rx="3" fill="var(--warning-color, #f59e0b)" />
    <rect x="40" y="7" width="14" height="7" rx="3" fill="var(--warning-color, #f59e0b)" />
    <rect x="4" y="17" width="56" height="7" rx="3" fill="var(--divider-color, rgba(127,127,127,.25))" />
    <rect x="22" y="17" width="12" height="7" rx="3" fill="var(--primary-color, #03a9f4)" />
    <rect x="34" y="17" width="6" height="7" rx="3" fill="var(--purple-color, #8b6cff)" />
    <rect x="4" y="27" width="56" height="7" rx="3" fill="var(--divider-color, rgba(127,127,127,.25))" />
    <rect x="4" y="27" width="22" height="7" rx="3" fill="var(--success-color, #1fae7a)" />
    <rect x="44" y="27" width="16" height="7" rx="3" fill="var(--success-color, #1fae7a)" />`,validate:function(e){if(da(e.period),void 0!==e.source&&"history"!==e.source)throw new Error('"source" must be history: a state timeline reads states, which statistics don\'t keep');if(void 0!==e.group_by)throw new Error('"group_by" does not apply to a state timeline');if(void 0!==e.bar_labels&&!Kg.includes(e.bar_labels))throw new Error(`"bar_labels" must be one of: ${Kg.join(", ")}`);if(void 0!==e.x_axis&&"boolean"!=typeof e.x_axis)throw new Error('"x_axis" must be true or false');const t=e.gridlines;if(void 0!==t&&("object"!=typeof t||null===t||Array.isArray(t)))throw new Error('"gridlines" must have "vertical" (true or false)');if(void 0!==t?.vertical&&"boolean"!=typeof t.vertical)throw new Error('"gridlines.vertical" must be true or false');!function(e,t){if(void 0===e)return;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`${t} must map states to colours, like "on: amber"`);for(const[o,n]of Object.entries(e))if("string"!=typeof n||""===n.trim())throw new Error(`${t}: the colour for "${o}" must be text`)}(e.state_colors,'"state_colors"');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.group&&"string"!=typeof e.group)throw new Error(`"group" of ${o.entity} must be text`)}Gr(e),jr(e)},editor:function(e){const t=$s(`timeline|${cs(e.config)}`,e.hass,()=>{return[...(t=e.hass,o=e.config,ds(t,o).filter(e=>!Vg.has(e.name??"")&&!(e.schema??[]).some(e=>Vg.has(e.name??"")))),{name:"bar_labels",selector:ss(e.hass,"bar_labels",["state","duration","both","none"])},{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]},{name:"timeline_legend",selector:ss(e.hass,"timeline_legend",["above","hidden"])}];var t,o});return B`${ks(e,"chart",t,Zg)}${Xg(e)}`},entityFields:function(e){return{schema:$s("timeline_entity",e,()=>[{name:"timeline_group",selector:{text:{}}}]),fields:Jg}},disconnect(e){rr(e),$r(e),Wr(e)},render(e){const t=Date.now(),o=er(e,t,{text:!0}),n=Lr(e.raw),a=n.compact?"compact":"normal",r=nr(o,e),i=Math.min(o.range.end,t),s=o.series.map(e=>({series:e,spans:Ug(e.points,i),domain:e.entity.entityId.split(".")[0],measurement:!1}));for(const S of s)S.measurement=qg(S.spans);const l="hidden"!==n.header,c=(e,t)=>B`<div class="frame ${n.compact?"compact":""}">${e}${t}</div>`,d="ready"!==o.status?sr(o,e):s.every(e=>e.spans.every(e=>Dg(e.state)))?B`<div class="chart-message">${Ze(e.hass,"timeline_no_states")}</div>`:void 0;if(d)return c(r,d);const u=e.config.show.name,h=wr(e),p=Math.max(0,...s.map(e=>e.series.entity.name.length)),m=u?Math.min(.35*h,7*p+10):0,f=Math.max(40,h-32-m),g=function(e,t,o){const n=Math.max(2,Math.min(8,Math.round(o/70))),a=jn(On(t.hass)),{unit:r,ticks:i}=Tn(e.range,n,a);return{unit:r,ticks:i,x:dn([e.range.start,e.range.end],[0,1]),offset:a}}(o,e,f),v=!1!==e.raw.x_axis,y=e.raw.gridlines?.vertical??!0,b=Yr(e.raw),x=new Map(s.map(e=>[e.series.index,e])),_=function(e,t){const o=[],n=new Set;for(const a of e){const r=t(a);if(void 0!==r){if(!n.has(r)){n.add(r),o.push({heading:r});for(const n of e)t(n)===r&&o.push({item:n})}}else o.push({item:a})}return o}(o.series.map(e=>x.get(e.index)),e=>(e=>{const t=e.entity.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0})(e.series)),w=o.range.end-o.range.start,$=o.live&&o.range.end>t&&t>o.range.start,k=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_timeline"),names:s.map(e=>e.series.entity.name).join(", ")}),M=b?Xr(e,o.range,[Array.from({length:241},(e,t)=>({t:o.range.start+w*t/240,v:null})),...s.map(e=>e.spans.map(e=>({t:e.start,v:null})))]):void 0,z=`--tl-row:${Qg[a]}px;--tl-heading:${ev[a]}px`;return c(B`${r}${l?function(e,t){const o=new Map;for(const a of e)if(!a.measurement)for(const e of a.spans){if(Dg(e.state))continue;const n=tv(t.hass,a.series,e.state);o.has(n)||o.set(n,{label:n,color:ov(a,e.state,t.raw)})}if(0===o.size)return Z;const n=[...o.values()];return B`<div class="tl-legend">
    ${[...n.filter(e=>!e.color.quiet),...n.filter(e=>e.color.quiet)].map(({label:e,color:t})=>B`<span class="tl-key"
          ><span class="swatch ${t.quiet?"quiet":""}" style="background:${t.color}"></span>${e}</span
        >`)}
  </div>`}(s,e):Z}`,B`<div class="tl-wrap ${u?"":"no-names"}" style=${z}>
        ${u?B`<div class="tl-names">
                ${_.map(e=>"heading"in e?B`<div class="tl-heading">${e.heading}</div>`:B`<div
                        class="entity tl-name"
                        data-index=${e.item.series.index}
                        tabindex="0"
                        aria-label=${e.item.series.entity.label}
                      >
                        <span>${e.item.series.entity.name}</span>
                      </div>`)}
              </div>`:Z}
        <div
          class="tl-plot plot-area ${M?"hoverable":""}"
          role="img"
          aria-label=${k}
          @pointerdown=${M?.move}
          @pointermove=${M?.move}
          @pointerleave=${M?.leave}
          @pointercancel=${M?.leave}
        >
          ${y?g.ticks.map(e=>B`<div class="tl-grid" style="left:${nv(g.x(e))}"></div>`):Z}
          ${_.map(t=>"heading"in t?B`<div class="tl-gap"></div>`:B`<div class="entity tl-row" data-index=${t.item.series.index}>
                  <div class="tl-track"></div>
                  ${t.item.measurement?B`<div class="tl-hint">${Ze(e.hass,"timeline_measurement")}</div>`:B`<div class="tl-bars">${av(t.item,o,e,f)}</div>`}
                </div>`)}
          ${$?B`<div class="tl-now" style="left:${nv(g.x(t))}" title=${Ze(e.hass,"timeline_now")}></div>`:Z}
          ${b?function(e,t,o,n){const a=Zr(o.host);if(void 0===a)return Z;const r=(a-t.range.start)/(t.range.end-t.range.start);if(!(r>=0&&r<=1))return Z;const i=Rr(r,n);return B`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${nv(r)}"></div>
    <div class="tooltip ${i}" style=${i.startsWith("pin")?"":`left:${nv(r)}`}>
      <div class="tooltip-time">${Hn(a,o.hass)}</div>
      ${e.map(e=>{const t=function(e,t){return e.find(o=>t>=o.start&&(t<o.end||t===o.end&&o===e[e.length-1]))}(e.spans,a),n=t?.state,r=Dg(n),i=r?void 0:ov(e,n,o.raw),s=void 0===n||""===n?"—":tv(o.hass,e.series,n);return B`<div class="tooltip-row">
          <span class="swatch" style="background:${i?.color??"transparent"}"></span>
          <span class="tooltip-name">${e.series.entity.name}</span>
          <span class="tooltip-value"
            >${s}${t&&!r?B` <span class="tl-for"
                    >${Ze(o.hass,"timeline_for",{duration:Bg(t.end-t.start)})}</span
                  >`:Z}</span
          >
        </div>`})}
    </div>
  </div>`}(s,o,e,f):Z}
        </div>
        ${v?B`<div class="x-axis">
                ${g.ticks.map(t=>{const o=g.x(t);return B`<span class="axis-label ${o<.05?"start":o>.95?"end":""}" style="left:${nv(o)}"
                    >${In(t,g.unit,w,e.hass,g.offset)}</span
                  >`})}
              </div>`:Z}
      </div>`)}},iv={current:"current_temperature",target:"temperature",low:"target_temp_low",high:"target_temp_high",action:"hvac_action"},sv=Object.keys(iv);const lv=["heat","cool","dry","fan"],cv={heating:"heat",preheating:"heat",cooling:"cool",defrosting:"cool",drying:"dry",fan:"fan"};function dv(e){return void 0===e?void 0:cv[e]}function uv(e,t){let o=0,n=e.length;for(;o<n;){const a=o+n>>1;e[a].t<=t?o=a+1:n=a}return o>0?e[o-1]:void 0}const hv=e=>(Math.round(100*e)/100).toString();const pv=new Set(["source","group_by","aggregate"]),mv=[...ls.filter(e=>!pv.has(e.name)),{name:"set_point",path:["set_point"],default:!0},{name:"shading",path:["shading"],default:!0},{name:"shade_fan",path:["shade_fan"],default:!1},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:mo},{name:"current_color",path:["current_color"]},{name:"set_point_color",path:["set_point_color"]},{name:"heating_color",path:["heating_color"]},{name:"cooling_color",path:["cooling_color"]},...fs,...ps];function fv(e){return ds(e.hass,e.config).filter(e=>!pv.has(e.name??"")&&!(e.schema??[]).some(e=>pv.has(e.name??"")))}const gv="var(--state-climate-heat-color, #ff8100)",vv="var(--state-climate-cool-color, #2b9af9)",yv="var(--state-climate-dry-color, #efbd07)",bv="var(--state-climate-fan_only-color, #8a8a8a)",xv=["set_point","shading","shade_fan"],_v=["current_color","set_point_color","heating_color","cooling_color"];function wv(e,t,o){if(t.stateObj&&e?.formatEntityAttributeValue){const n=e.formatEntityAttributeValue(t.stateObj,iv.action,o);if(n)return n}const n=Ze(e,`climate_action_${o}`);return n===`climate_action_${o}`?o:n}function $v(e,t,o,n,a){return"number"==typeof t?e.text(t):"number"==typeof o&&"number"==typeof n?Ze(a,"climate_range",{low:dr(o,e.decimals,a),high:e.text(n)}):"—"}const kv=e=>Math.round(1e4*e)/100+"%";function Mv(e,t,o,n,a,r,i){if(void 0===i)return Z;const s=a.x(i)/Ga;if(!(s>=0&&s<=1))return Z;const l=Rr(s,kr(e)),c=uv(o.current,i),d=uv(o.action,i)?.s,u=dv(d),h=e=>uv(e,i)?.v??void 0,p=c&&null!==c.v?a.y(c.v)/Xa:-1,m=(e,t,o)=>B`<div class="tooltip-row">
      ${e}<span class="tooltip-name">${t}</span><span class="tooltip-value">${o}</span>
    </div>`;return B`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${kv(s)}"></div>
    ${p>=0&&p<=1?B`<span
            class="hover-dot"
            style="left:${kv(s)};top:${kv(p)};background:${n.colors.current}"
          ></span>`:Z}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${kv(s)}`}>
      <div class="tooltip-time">${Hn(i,e.hass)}</div>
      ${m(B`<span class="swatch" style="background:${n.colors.current}"></span>`,t.name,r.text(c?.v))}
      ${n.setPoint?m(B`<span class="swatch set-point-swatch" style="border-color:${n.colors.setPoint}"></span>`,Ze(e.hass,"climate_set_point"),$v(r,h(o.target),h(o.low),h(o.high),e.hass)):Z}
      ${d?m(B`<span
                class="swatch action-swatch"
                style=${u?`background:${n.colors[u]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
              ></span>`,wv(e.hass,t,d),""):Z}
    </div>
  </div>`}const zv=(e,t=!1)=>B`<div class="chart-message ${t?"error":""}">${e}</div>`;const Sv={layout:"chart",group:"history",height:240,styles:r`
    ${cr}
    ${Er}
    ${ti}
    ${Or}
    .style-climate .current {
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .style-climate .set-point {
      stroke-dasharray: 6 5;
      stroke-width: 2px;
    }
    .style-climate .range-band {
      fill-opacity: 0.08;
    }
    .style-climate .action-span {
      fill-opacity: 0.2;
    }
    .style-climate .set-point-swatch {
      box-sizing: border-box;
      height: 0;
      border-radius: 0;
      border-top: 3px dashed;
    }
    .style-climate .action-swatch {
      border-radius: 2px;
      opacity: 0.45;
    }
  `,thumbnail:()=>q`
    <rect x="14" y="4" width="14" height="32" fill="var(--state-climate-heat-color, #ff8100)" opacity="0.25" />
    <rect x="40" y="4" width="8" height="32" fill="var(--state-climate-heat-color, #ff8100)" opacity="0.25" />
    <path d="M4 26 H14 V14 H50 V24 H60" fill="none" stroke="var(--error-color, #ef3b5a)" stroke-width="2"
      stroke-dasharray="3 2" />
    <path d="M4 28 C10 30 12 27 16 22 S24 15 30 16 S44 18 50 17 S56 24 60 27" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />`,validate(e){Qa(e),xn(e),Gr(e),$o(e),jr(e),function(e){if(void 0!==e.source&&"history"!==e.source)throw new Error("\"source\" must be history: long-term statistics don't keep a thermostat's set point or action");if(void 0!==e.group_by)throw new Error('"group_by" is not available on a climate chart');for(const t of xv)if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of _v)if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`)}(e)},editor:function(e){const t=$s(`climate|${cs(e.config)}`,e.hass,()=>[...fv(e),{type:"grid",name:"",schema:[{name:"set_point",selector:{boolean:{}}},{name:"shading",selector:{boolean:{}}},{name:"shade_fan",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"curve",selector:ss(e.hass,"curve",qa)},{name:"line_width",selector:To}]},{type:"grid",name:"",schema:[{name:"current_color",selector:{text:{}}},{name:"set_point_color",selector:{text:{}}},{name:"heating_color",selector:{text:{}}},{name:"cooling_color",selector:{text:{}}}]},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",t,mv)},disconnect(e){rr(e),$r(e),Wr(e)},render(e){const t=Lr(e.raw),o=function(e){const t=(t,o)=>Ce(e[t]??o);return{setPoint:!1!==e.set_point,shading:!1!==e.shading,shadeFan:!0===e.shade_fan,colors:{current:t("current_color","primary"),setPoint:t("set_point_color","red"),heat:t("heating_color",gv),cool:t("cooling_color",vv),dry:yv,fan:bv}}}(e.raw),n=e.items[0],a=da(e.raw.period),r=oa(e.hass),i=Date.now(),s=ha(a,i,r,a.navigate?ma(e.host,a):0),l={start:s.start,end:s.end},c=function(e,t){const o=t.config?.unit_system,n=e.config.unit??o?.temperature??"°C",a=e.config.decimals??1;return{unit:n,decimals:a,text:e=>"number"==typeof e&&Number.isFinite(e)?ur(dr(e,a,t),n):"—"}}(n,e.hass),d=n.entityId.startsWith("climate."),u=function(e,t,o,n){const{show:a}=e.config;if(!a.name&&!a.value)return Z;const r=t.stateObj?.attributes??{},i=t.entityId.startsWith("climate.")&&void 0!==t.stateObj&&!["unavailable","unknown"].includes(t.stateObj.state),s="string"==typeof r[iv.action]?r[iv.action]:void 0,l=dv(s),c=(e,t,o)=>B`<div class="entity series-item" data-index="0" tabindex="0" aria-label=${`${t}, ${o}`}>
      ${e} ${a.name?B`<span class="series-name">${t}</span>`:Z}
      ${a.value?B`<span class="series-value">${o}</span>`:Z}
    </div>`;return B`<div class="series-header">
    ${c(B`<span class="swatch" style="background:${o.colors.current}"></span>`,t.name,i?n.text(r[iv.current]):t.display)}
    ${o.setPoint&&i?c(B`<span class="swatch set-point-swatch" style="border-color:${o.colors.setPoint}"></span>`,Ze(e.hass,"climate_set_point"),$v(n,r[iv.target],r[iv.low],r[iv.high],e.hass)):Z}
    ${i&&s?B`<div
            class="entity series-item action-item"
            data-index="0"
            tabindex="0"
            aria-label=${wv(e.hass,t,s)}
          >
            <span
              class="swatch action-swatch"
              style=${l?`background:${o.colors[l]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
            ></span>
            <span class="series-value action-value">${wv(e.hass,t,s)}</span>
          </div>`:Z}
  </div>`}(e,n,d?o:{...o,setPoint:!1},c);if(!d)return Nr({...t,header:"above"},u,zv(Ze(e.hass,"climate_not_thermostat",{name:n.name})));const h=function(e){const t={};for(const o of sv)t[o]="action"===o?{entity:e,attribute:iv[o],text:!0}:{entity:e,attribute:iv[o]};return t}(n.entityId),p=Ba(e.host,e.requestUpdate).get(e.hass,Object.values(h),l,"history",{live:s.live}),m=function(e,t,o,n){const a={};for(const r of sv){const i=e.get(n(t[r]))??[],s=i[i.length-1],l="action"===r?void 0!==s?.s:null!=s?.v;a[r]=s&&l&&s.t<o?[...i,{...s,t:o,carried:!0}]:i}return a}(p.data,h,Math.min(l.end,i),Ca),f=nr({status:p.status,error:p.error,range:l,period:a,live:s.live,back:s.back,zone:r},e),g=f===Z&&u===Z?Z:B`${f}${u}`,v=o.shadeFan?["heat","cool","dry","fan"]:["heat","cool","dry"],y=o.shading?function(e,t,o=lv){const n=[];let a;for(const r of e){if(a&&r.s===a.action)continue;a&&(a.end=r.t,a.end>a.start&&n.push(a),a=void 0);const e=dv(r.s);e&&o.includes(e)&&(a={kind:e,action:r.s,start:r.t,end:t})}return a&&t>a.start&&n.push({...a,end:Math.max(a.end,t)}),n}(m.action,Math.min(l.end,i),v):[],b=o.setPoint?[m.current,m.target,m.low,m.high]:[m.current];let x;if("loading"===p.status?x=zv(Ze(e.hass,"chart_loading")):"error"===p.status?x=zv(Ze(e.hass,"chart_error",{error:p.error??""}),!0):b.every(e=>e.every(e=>null===e.v))&&0===y.length&&(x=zv(Ze(e.hass,"chart_no_data"))),x)return Nr("over"===t.header?{...t,header:"above"}:t,g,x);const _=Mr(e,l,ln(b)),{scales:w}=_,$=e.raw.line_width??mo,k=e.raw.curve??"smooth",M=q`${y.map(e=>q`<rect
        class="action-span action-${e.kind}"
        x=${w.x(e.start)}
        y="0"
        width=${Math.max(0,w.x(e.end)-w.x(e.start))}
        height=${Xa}
        fill=${o.colors[e.kind]}
      ></rect>`)}`,z=function(e,t){const o=new Map(t.map(e=>[e.t,e.v]));return e.map(e=>{const t=o.get(e.t);return{t:e.t,v:null!==e.v&&"number"==typeof t?[e.v,t]:null}})}(m.low,m.high),S=o.setPoint?q`
        <path class="range-band" d=${function(e,t,o){let n="",a=[];const r=e=>{if(!a.length)return;const r=a[a.length-1];if(e>r.t&&a.push({t:e,v:r.v}),a.length>1){const e=a.map(e=>[t(e.t),o(e.v[1])]),r=a.map(e=>[t(e.t),o(e.v[0])]);n+=`M${hv(e[0][0])},${hv(e[0][1])}`;for(let t=1;t<e.length;t++)n+=`H${hv(e[t][0])}V${hv(e[t][1])}`;n+=`V${hv(r[r.length-1][1])}`;for(let t=r.length-2;t>=0;t--)n+=`V${hv(r[t][1])}H${hv(r[t][0])}`;n+="Z"}a=[]};for(const i of e)null===i.v?r(i.t):a.push({t:i.t,v:i.v});return a.length&&r(e[e.length-1].t),n}(z,w.x,w.y)} fill=${o.colors.setPoint}></path>
        ${[m.target,m.low,m.high].map(e=>q`<path class="set-point" d=${function(e,t){return function(e){const t=[];let o=[];const n=e=>{if(!o.length)return;const n=o[o.length-1];e>n.t&&o.push({t:e,v:n.v}),t.push(o),o=[]};for(const r of e){if(null===r.v){n(r.t);continue}const e=o[o.length-1];e&&e.v===r.v||o.push({t:r.t,v:r.v})}const a=e[e.length-1];return o.length&&n(a.t),t}(e).map(e=>Wa(e.map(e=>[t.x(e.t),t.y(e.v)]),"step")).join("")}(e,w)} fill="none" stroke=${o.colors.setPoint}></path>`)}`:Z,A=Ya(Rn(m.current,500)).map(e=>Wa(e.map(e=>[w.x(e.t),w.y(e.v)]),k)).join(""),E=q`${M}${S}<path
      class="current"
      d=${A}
      fill="none"
      stroke=${o.colors.current}
      style="stroke-width:${$}px"
    ></path>`,C=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_climate"),names:n.name}),j=Yr(e.raw);return Nr(t,g,Ar({axes:_,ctx:e,content:E,label:C,overlay:B`${"over"===t.header?Tr(g):Z}
        ${j?Mv(e,n,m,o,w,c,Zr(e.host)):Z}`,hover:j?Xr(e,l,[m.current,m.target,m.low,m.high,m.action]):void 0}))}},Av=[4,8,16];function Ev(e,t){const o=360/t;return Math.floor(ba(e)/o+.5)%t}function Cv(e,t){return ga[e*(16/t)%16]}function jv(e,t,o,n){if(t<0)return null;const a=e[t];return o-a.t<n?a.v:null}function Lv(e,t){let o=0;for(let n=0;n<t.length&&t[n]<=e;n++)o=n;return o}const Nv=e=>Math.round(100*e)/100||0;function Tv(e,t){return[Nv(e*Math.sin(t)),Nv(-e*Math.cos(t))]}const Ov=ls.filter(e=>"group_by"!==e.name&&"aggregate"!==e.name).map(e=>"period_last"===e.name?{...e,default:30}:"period_unit"===e.name?{...e,default:"day"}:e),Fv=[...Ov,{name:"sectors",path:["sectors"],default:"16"},{name:"calm",path:["calm"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function Pv(e,t){if(void 0===t)return Ze(e.hass,"editor_wind_none");const o="string"==typeof t?t:t.entity;return("string"==typeof t?void 0:t.name)??e.hass?.states[o]?.attributes?.friendly_name??o}const Dv={last:30,unit:"day"};function Uv(e){const t=e.period;return null==t?da(Dv):"object"!=typeof t||Array.isArray(t)?da(t):da({...Dv,...t})}function Hv(e){const t=e.sectors;if(null==t||""===t)return 16;const o="string"==typeof t?Number(t):t;if(!Av.includes(o))throw new Error(`"sectors" must be one of: ${Av.join(", ")}`);return o}function Iv(e){const t=e.calm;if(null==t||""===t)return;const o="string"==typeof t?Number(t):t;if("number"!=typeof o||!Number.isFinite(o)||o<0)throw new Error('"calm" must be a number of 0 or more');return o}const Rv=["color-mix(in srgb, var(--primary-color, #2f6fe4) 35%, var(--card-background-color, #fff))","color-mix(in srgb, var(--primary-color, #2f6fe4) 62%, var(--card-background-color, #fff))","var(--primary-color, #2f6fe4)","color-mix(in srgb, var(--primary-color, #2f6fe4) 68%, var(--primary-text-color, #212121))","color-mix(in srgb, var(--purple-color, #8b6cff) 80%, var(--primary-text-color, #212121))"],Bv=(e,t)=>dr(e,Number.isInteger(e)?0:1,t.hass);function qv(e,t,o){return Number.isFinite(e)?void 0===t?`${Bv(e,o)}+`:`${Bv(e,o)}–${Bv(t,o)}`:void 0===t?"":`< ${Bv(t,o)}`}function Vv(e,t,o=!1){const n=100*e;return 0===n?`${dr(0,0,t.hass)}%`:`${dr(n,o||n<1?1:0,t.hass)}%`}const Zv=new WeakMap;function Wv(e,t){Zv.get(e.host)!==t&&(void 0===t?Zv.delete(e.host):Zv.set(e.host,t),e.requestUpdate())}const Yv=124;function Gv(e,t,o,n){const{rose:a,n:r,bands:i,rings:s}=e,l=2*Math.PI/r,c=.09*l,d=Yr(n.raw),u=a.sectors.map((o,s)=>{if(a.totals[s]<=0)return Z;const u=s*l-l/2+c,h=s*l+l/2-c;let p=0;const m=o.map((t,o)=>{if(t<=0)return Z;const n=function(e,t,o,n){if(t<=e||n<=o)return"";const a=n-o>Math.PI?1:0,[r,i]=Tv(t,o),[s,l]=Tv(t,n),c=`M${r} ${i}A${t} ${t} 0 ${a} 1 ${s} ${l}`;if(e<=0)return`${c}L0 0Z`;const[d,u]=Tv(e,n),[h,p]=Tv(e,o);return`${c}L${d} ${u}A${e} ${e} 0 ${a} 0 ${h} ${p}Z`}(e.radius(p),e.radius(p+t),u,h);return p+=t,q`<path d=${n} style="fill:${i[o].color}"></path>`}),f=Cv(s,r),g=t.index>=0;return q`<g
      class="petal ${g?"entity":""}"
      data-index=${g?t.index:Z}
      data-sector=${s}
      tabindex=${g||d?0:Z}
      aria-label=${`${f} ${Vv(a.totals[s],n,!0)}`}
      @pointerenter=${d?()=>Wv(n,s):Z}
      @pointerleave=${d?()=>Wv(n,void 0):Z}
      @focus=${d?()=>Wv(n,s):Z}
      @blur=${d?()=>Wv(n,void 0):Z}
    >${m}</g>`}),h=function(e){const t=e.length;let o=0,n=1/0;for(let a=0;a<t;a++){const r=(Math.floor(t/8)+a)%t,i=Math.max(e[r],e[(r+1)%t]);i<n-1e-9&&(o=r,n=i)}return 2*(o+.5)*Math.PI/t}(a.totals),p=["N","E","S","W"].map((e,t)=>{const[o,n]=Tv(113,t*Math.PI/2);return q`<text class="compass ${"N"===e?"north":""}" x=${o} y=${n+4}>${e}</text>`});return B`<svg class="rose" viewBox="${-124} ${-124} ${248} ${248}" role="img" aria-label=${o}>
    ${s.map(t=>q`<circle class="ring" r=${e.radius(t/100)}></circle>`)}
    <circle class="rim" r=${102}></circle>
    <line class="spoke" x1="0" y1=${-102} x2="0" y2=${102}></line>
    <line class="spoke" x1=${-102} y1="0" x2=${102} y2="0"></line>
    <g class="petals">${u}</g>
    <circle class="calm-circle" r=${9}></circle>
    ${p}
    ${s.map(t=>{const[o,a]=Tv(e.radius(t/100),h),r=Math.sin(h)>=0?"start":"end";return q`<text class="ring-label" x=${o+("start"===r?3:-3)} y=${a} text-anchor=${r}>${dr(t,Number.isInteger(t)?0:1,n.hass)}%</text>`})}
  </svg>`}function Xv(e,t,o,n){const a=void 0!==o&&o.index>=0;return B`<div
    class="stat stat-${n} ${a?"entity":""}"
    data-index=${a?o.index:Z}
    tabindex=${a?0:Z}
  >
    <span class="stat-label">${e}</span>
    <span class="stat-value">${t}</span>
  </div>`}function Jv(e,t,o,n){const a=(e,t)=>Ze(n.hass,e,t),{rose:r}=e,i=r.prevailing<0?"—":`${Cv(r.prevailing,e.n)} · ${Vv(r.totals[r.prevailing],n)}`,s=e=>null===e?"—":ur(dr(e,o?.decimals??1,n.hass),o?.unit??"");return B`<div class="readout">
    <div class="stats">
      ${Xv(a("wind_prevailing"),i,t.direction,"prevailing")}
      ${o?B`${Xv(a("wind_mean_speed"),s(r.meanSpeed),t.speed,"mean")}
            ${Xv(a("wind_strongest"),s(function(e){let t=null;for(const o of e){const e="number"==typeof o.max&&Number.isFinite(o.max)?o.max:o.v;null!==e&&(null===t||e>t)&&(t=e)}return t}(o.points)),t.speed,"strongest")}
            ${Xv(a("wind_calm"),Vv(r.calm,n),t.speed,"calm")}`:Z}
    </div>
    ${o?B`<div class="speed-legend">
            <div class="stat-label">${o.unit?a("wind_speed_unit",{unit:o.unit}):a("wind_speed")}</div>
            <div class="keys">
              ${e.bands.map(e=>B`<div class="key">
                    <span class="key-swatch" style="background:${e.color}"></span>
                    <span class="key-label">${e.label}</span>
                  </div>`)}
            </div>
          </div>`:Z}
  </div>`}const Kv={layout:"chart",group:"distribution",height:280,styles:r`
    ${cr}
    ${ti}
    ${Or}
    .wind {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 8px 20px;
    }
    .rose-wrap {
      position: relative;
      flex: 1 1 200px;
      max-width: 270px;
      aspect-ratio: 1;
    }
    .rose {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .rose .ring {
      fill: none;
      stroke: var(--divider-color, rgba(127, 127, 127, 0.3));
      stroke-dasharray: 3 3;
    }
    .rose .rim,
    .rose .spoke {
      fill: none;
      stroke: var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .rose .calm-circle {
      fill: var(--card-background-color, #fff);
      stroke: var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    .rose text {
      font-family: inherit;
      fill: var(--secondary-text-color);
      text-anchor: middle;
      font-size: 12px;
    }
    .rose .compass.north {
      fill: var(--primary-text-color);
      font-weight: 500;
    }
    .rose .ring-label {
      font-size: 10px;
      paint-order: stroke;
      stroke: var(--card-background-color, #fff);
      stroke-width: 3px;
      stroke-linejoin: round;
    }
    .rose .petal {
      outline: none;
      transform-box: view-box;
      transform-origin: 0 0;
      transform: scale(0);
      transition: transform var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .rose .petal {
      transform: scale(1);
    }
    .rose .petal.entity {
      cursor: pointer;
    }
    .rose .petal:focus-visible path {
      stroke: var(--primary-text-color);
      stroke-width: 1.5px;
    }
    .rose-tip {
      top: 0;
      white-space: nowrap;
    }
    .tooltip.rose-tip.right {
      transform: translate(10px, -50%);
    }
    .tooltip.rose-tip.left {
      transform: translate(calc(-100% - 10px), -50%);
    }
    .readout {
      flex: 1 1 150px;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      gap: 8px 16px;
    }
    .stat {
      display: flex;
      flex-direction: column;
      min-width: 0;
      border-radius: 4px;
    }
    .stat.entity {
      cursor: pointer;
    }
    .stat:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
    .stat-label {
      color: var(--secondary-text-color);
      font-size: 0.875em;
    }
    .stat-value {
      font-size: 1.25em;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-variant-numeric: tabular-nums;
    }
    .keys {
      display: flex;
      gap: 4px;
      margin-top: 6px;
    }
    .key {
      flex: 1 1 0;
      min-width: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
    .key-swatch {
      width: 100%;
      height: 10px;
      border-radius: 2px;
    }
    .key-label {
      font-size: 11px;
      color: var(--secondary-text-color);
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
    }
    .frame.compact .rose-wrap {
      max-width: 170px;
      flex-basis: 150px;
    }
    .frame.compact .wind {
      gap: 4px 12px;
    }
    .frame.compact .readout {
      gap: 8px;
    }
    .frame.compact .stats {
      gap: 4px 12px;
    }
    .frame.compact .stat-value {
      font-size: 1.05em;
    }
  `,thumbnail:()=>q`
    <circle cx="32" cy="20" r="17" fill="none" stroke="var(--divider-color, #ccc)" stroke-dasharray="2 2" />
    <path d="M32 20 L21 29 A14 14 0 0 1 18 23 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M32 20 L27 34 A15 15 0 0 1 22 32 Z" fill="var(--primary-color, #03a9f4)" opacity="0.7" />
    <path d="M32 20 L23 14 A10 10 0 0 1 26 11 Z" fill="var(--primary-color, #03a9f4)" opacity="0.5" />
    <path d="M32 20 L36 12 A9 9 0 0 1 40 15 Z" fill="var(--primary-color, #03a9f4)" opacity="0.4" />
    <path d="M32 20 L40 24 A9 9 0 0 1 37 27 Z" fill="var(--primary-color, #03a9f4)" opacity="0.4" />`,validate(e){Qa(e),Uv(e),Gr(e),jr(e),Hv(e),Iv(e)},editor:function(e){const t=$s(`wind_rose|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config).filter(e=>!e.schema?.some(e=>"group_by"===e.name)),{type:"grid",name:"",schema:[{name:"sectors",selector:ss(e.hass,"sectors",Av.map(String))},{name:"calm",selector:{number:{min:0,mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]),o=e.config.entities??[],n={...e,config:(a=e.config,"number"==typeof a.sectors?{...a,sectors:String(a.sectors)}:a),commit:t=>e.commit(function(e){if("string"!=typeof e.sectors)return e;const t=Number(e.sectors);return{...e,sectors:Number.isFinite(t)?t:e.sectors}}(t))};var a;const r="margin: 0 0 12px; color: var(--secondary-text-color); font-size: 0.875em; line-height: 1.4;";return B`<p class="wind-roles" style=${r}>
      ${Ze(e.hass,"editor_wind_roles")}
      <br /><b
        >${Ze(e.hass,"editor_wind_now",{direction:Pv(e,o[0]),speed:Pv(e,o[1])})}</b
      >
    </p>
    ${"statistics"===e.config.source?B`<p class="wind-statistics" style=${r}>${Ze(e.hass,"editor_wind_statistics")}</p>`:Z}
    ${ks(n,"chart",t,Fv)}`},disconnect(e){rr(e),Zv.delete(e)},render(e){const t={...Lr(e.raw),header:"above"},o=function(e){const t=e.config.entities.length?e.config.entities:e.items.map(e=>e.config),o=t=>t&&{id:t.entity,entity:t,index:e.items.findIndex(e=>e.entityId===t.entity)};return{direction:o(t[0]),speed:o(t[1])}}(e),n=o.direction;if(!n)return B``;const a=function(e,t,o,n=Date.now()){const a=Uv(e.raw),r=e.raw.source??"history",i=oa(e.hass),s=ha(a,n,i,a.navigate?ma(e.host,a):0),l={start:s.start,end:s.end},c=[{entity:t.id,attribute:t.entity.attribute,bearing:!0},...o?[{entity:o.id,attribute:o.entity.attribute}]:[]],d="statistics"===r?function(e){return{period:e.end-e.start<=1728e5?"5minute":"hour",types:["mean","max"],value:"mean"}}(l):void 0,u=d?Fa[d.period]:1/0,h=d?{start:l.start-u,end:l.end}:l,p=Ba(e.host,e.requestUpdate).get(e.hass,c,h,r,{live:s.live,statistics:d}),m=e=>p.data.get(Ca(e))??[],f=m(c[0]),g=o?m(c[1]):void 0;return{frame:{status:p.status,error:p.error,range:l,period:a,source:r,series:[],live:s.live,back:s.back,zone:i},direction:f,speed:g?.some(e=>null!==e.v)?g:void 0,until:Math.min(l.end,n),maxHold:u}}(e,n,o.speed),{frame:r}=a,i=nr(r,e),s=B`<div class="chart-message">${Ze(e.hass,"chart_no_data")}</div>`,l="ready"!==r.status?sr(r,e):a.direction.every(e=>null===e.v)?s:void 0;if(l)return Nr(t,i,l);const c=Hv(e.raw),d=a.speed?o.speed:void 0,u=d?d.entity.unit??(d.entity.attribute?"":String(e.hass.states[d.id]?.attributes?.unit_of_measurement??"")):void 0,h=function(e){switch((e??"").trim().toLowerCase()){case"km/h":case"kmh":case"kph":return{from:[0,12,20,29,39],calm:1.8};case"mph":return{from:[0,8,13,19,25],calm:1.1};case"kn":case"kt":case"kts":case"knot":case"knots":return{from:[0,7,11,17,22],calm:1};case"ft/s":return{from:[0,10,20,30,40],calm:1.6};default:return{from:[0,3,6,9,12],calm:.5}}}(u),p=d?function(e,t,o){return e!==Jt&&e.length>0?e.map((t,n)=>({from:t.from,color:Ce(t.color),label:t.label??qv(t.from,e[n+1]?.from,o)})):t.map((e,n)=>({from:e,color:Rv[n%Rv.length],label:qv(e,t[n+1],o)}))}(Bs(d.entity.severity,e.hass),h.from,e):[{from:0,color:"var(--primary-color, #2f6fe4)",label:""}],m=d?Iv(e.raw)??h.calm:0,f=function(e,t,o,n=1/0){const a=new Set([o]);for(const c of t?[e,t]:[e])for(const e of c)a.add(e.t),Number.isFinite(n)&&a.add(e.t+n);const r=[...a].filter(e=>e<=o).sort((e,t)=>e-t),i=[];let s=-1,l=-1;for(let c=0;c+1<r.length;c++){const o=r[c],a=r[c+1]-o;for(;s+1<e.length&&e[s+1].t<=o;)s++;const d=jv(e,s,o,n);if(null===d)continue;let u=null;if(t){for(;l+1<t.length&&t[l+1].t<=o;)l++;if(u=jv(t,l,o,n),null===u)continue}const h=i[i.length-1];h&&h.dir===d&&h.speed===u?h.ms+=a:i.push({dir:d,speed:u,ms:a})}return i}(a.direction,a.speed,a.until,a.maxHold),g=function(e,t,o,n=0){const a=Math.max(1,o.length),r=Array.from({length:t},()=>new Array(a).fill(0));let i=0,s=0,l=0,c=0;for(const m of e){if(i+=m.ms,null!==m.speed&&(l+=m.ms,c+=m.speed*m.ms,m.speed<n)){s+=m.ms;continue}const e=null===m.speed?0:Lv(m.speed,o);r[Ev(m.dir,t)][e]+=m.ms}const d=e=>i>0?e/i:0,u=r.map(e=>e.map(d)),h=u.map(e=>e.reduce((e,t)=>e+t,0));let p=-1;return h.forEach((e,t)=>{e>0&&(p<0||e>h[p])&&(p=t)}),{total:i,calm:d(s),sectors:u,totals:h,prevailing:p,meanSpeed:l>0?c/l:null}}(f,c,p.map(e=>e.from),m);if(g.total<=0)return Nr(t,i,s);const v=function(e){if(!(e>0))return[];const t=e/3,o=10**Math.floor(Math.log10(t)),n=[1,2,2.5,5,10].map(e=>e*o).find(e=>e>=t-1e-9)??10*o,a=Math.max(1,Math.ceil(e/n-1e-9));return Array.from({length:a},(e,t)=>Math.round((t+1)*n*1e3)/1e3)}(100*Math.max(0,...g.totals)),y=(v[v.length-1]??100)/100,b={rose:g,n:c,bands:p,rings:v,radius:e=>10+e/y*90},x=t=>Vv(t,e),_={direction:g.prevailing<0?"":Cv(g.prevailing,c),share:g.prevailing<0?"":x(g.totals[g.prevailing]),calm:x(g.calm)},w=Ze(e.hass,g.prevailing<0?"wind_aria_still":d?"wind_aria_calm":"wind_aria",_),$=d?{unit:u??"",decimals:d.index>=0?e.items[d.index].decimals:1,points:a.speed??[]}:void 0;return Nr(t,i,B`<div class="wind">
        <div class="rose-wrap">
          ${Gv(b,n,w,e)} ${function(e,t,o){const n=Zv.get(o.host);if(!(void 0!==n&&Yr(o.raw)&&e.rose.totals[n]>0))return Z;const a=2*n*Math.PI/e.n,[r,i]=Tv(e.radius(e.rose.totals[n]),a),s=r>0?"left":"right",l=void 0===t?[{color:e.bands[0].color,name:Ze(o.hass,"wind_share"),share:e.rose.totals[n]}]:e.rose.sectors[n].map((o,n)=>({color:e.bands[n].color,name:ur(e.bands[n].label,t),share:o})).filter(e=>e.share>0);return B`<div class="hover-layer" aria-hidden="true">
    <div
      class="tooltip rose-tip ${s}"
      style="left:${(r+Yv)/248*100}%;top:${(i+Yv)/248*100}%"
    >
      <div class="tooltip-time">${Cv(n,e.n)} · ${Vv(e.rose.totals[n],o,!0)}</div>
      ${l.map(e=>B`<div class="tooltip-row">
            <span class="swatch" style="background:${e.color}"></span>
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${Vv(e.share,o,!0)}</span>
          </div>`)}
    </div>
  </div>`}(b,$?$.unit:void 0,e)}
        </div>
        ${Jv(b,{direction:n,speed:d},$,e)}
      </div>`)}},Qv=2*Math.PI,ey=1440,ty=6e4,oy=["on","open","opening","closing","home","playing","heating","cooling","drying","active","running","cleaning","detected"],ny=new Set(["unavailable","unknown"]);function ay(e){return void 0===e||""===e||ny.has(e)}function ry(e,t,o,n){const a=e[e.length-1];a&&a.end===t?a.end=o:e.push(n?{start:t,end:o,carried:n}:{start:t,end:o})}function iy(e,t){const o=[];for(const n of e){const e=Math.max(t.start,n.start),a=Math.min(t.end,n.end);if(a<=e)continue;const r=!0===n.carried||n.start<t.start;o.push(r?{start:e,end:a,carried:r}:{start:e,end:a})}return o}function sy(e){return e.filter(e=>!e.carried).length}function ly(e,t,o){return(e+Gn(e,o)-(t+Gn(t,o)))/ty}function cy(e,t,o){const n=e.start,a=e.end,r=Gn(n,o),i=Gn(Math.max(n,a-1e3),o),s=t+Gn(t,o),l=(e,t)=>(e=>Math.min(ey,Math.max(0,e)))((e+t-s)/ty);if(r===i)return[[l(n,r),l(a,r)]];const c=function(e,t,o){const n=Gn(e,o);for(;t-e>1e3;){const a=Math.floor((e+t)/2);Gn(a,o)===n?e=a:t=a}return 1e3*Math.floor(t/1e3)}(n,a-1e3,o);return[[l(n,r),l(c,r)],[l(c,i),l(a,i)]].filter(([e,t])=>t>e)}function dy(e){return e/ey*Qv}function uy(e,[t,o]){const n=Math.max(0,Math.ceil(t-.5)),a=Math.min(ey,Math.ceil(o-.5));for(let r=n;r<a;r++)e[r]=1}const hy=[15,30,60];function py(e,t){const o=t*ty,n=[];for(let a=e.start;a<e.end;a+=o)n.push(a);return n.push(e.end),n}const my=new Set(["sum","change"]);function fy(e,t){if("max"===t)return Math.max(...e);if("min"===t)return Math.min(...e);if("first"===t)return e[0];if("last"===t)return e[e.length-1];const o=e.reduce((e,t)=>e+t,0);return my.has(t)?o:o/e.length}function gy(e){return my.has(e)}function vy(e){const t=Math.max(0,Math.round(e/ty)),o=Math.floor(t/60),n=t-60*o;return 0===o?`${n} m`:n?`${o} h ${n} m`:`${o} h`}function yy(e,t){return[by(e*Math.sin(t)),by(-e*Math.cos(t))]}function by(e){return Math.round(100*e)/100||0}function xy(e,t,o,n){if(t<=0||n<=o)return"";const a=Math.max(0,e);if(n-o>=Qv-1e-6){const e=(e,t)=>{const[o,n]=yy(e,0),[a,r]=yy(e,Math.PI);return`M${o} ${n}A${e} ${e} 0 1 ${t} ${a} ${r}A${e} ${e} 0 1 ${t} ${o} ${n}Z`};return a>0?`${e(t,1)}${e(a,0)}`:e(t,1)}const r=n-o>Math.PI?1:0,[i,s]=yy(t,o),[l,c]=yy(t,n),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===a)return`${d}L0 0Z`;const[u,h]=yy(a,n),[p,m]=yy(a,o);return`${d}L${u} ${h}A${a} ${a} 0 ${r} 0 ${p} ${m}Z`}const _y=[{name:"days",path:["days"],default:1},{name:"period_offset",path:["period","offset"],default:0},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"center",path:["center"],default:"total"},{name:"bucket",path:["bucket"],default:"60"},{name:"aggregate",path:["aggregate"],default:"auto"},{name:"tooltip",path:["tooltip"],default:!0}];const wy=[{type:"grid",name:"",schema:[{name:"ring_color",selector:{text:{}}},{name:"active",selector:{text:{multiple:!0}}}]}],$y=[{name:"ring_color",path:["color"]},{name:"active",path:["active"]}];const ky=["total","now","none"],My=new Set(["alarm_control_panel","automation","binary_sensor","calendar","climate","cover","device_tracker","fan","humidifier","input_boolean","lawn_mower","light","lock","media_player","person","remote","schedule","script","siren","switch","timer","vacuum","valve","water_heater"]),zy=e=>e.split(".")[0];function Sy(e){const t=e.config.active;if("string"==typeof t&&""!==t.trim()||Array.isArray(t)&&t.length>0)return"state";if(My.has(zy(e.entityId)))return"state";const o=e.stateObj?.attributes??{};if(!e.config.attribute&&(void 0!==o.unit_of_measurement||void 0!==o.state_class))return"numeric";const n=e.stateObj?.state,a="string"==typeof n&&""!==n.trim()&&Number.isFinite(Number(n));return e.available&&a?"numeric":"state"}function Ay(e,t){return e.config.attribute?e.config.attribute:"state"===t&&"climate"===zy(e.entityId)?"hvac_action":void 0}function Ey(e,t){if(void 0!==t.aggregate)return t.aggregate;const o=e.stateObj?.attributes?.state_class;return"total_increasing"===o||"total"===o?"change":"mean"}function Cy(e,t,o,n){const a=t.stateObj;let r=o.replace(/_/g," ");if(a){const t=n?e.formatEntityAttributeValue?.(a,n,o):e.formatEntityState?.(a,o);t&&(r=t)}return r.toLocaleLowerCase()}function jy(e,t){const o=Math.round(e)%ey,n=Date.UTC(2e3,0,1,Math.floor(o/60),o%60);return new Intl.DateTimeFormat(t?.locale?.language??"en",{hour:"numeric",minute:"2-digit",hour12:Fn(t),timeZone:"UTC"}).format(n)}function Ly(e,t,o){return ur(dr(e,t.decimals,o),t.unit)}function Ny(e,t=Date.now()){const{raw:o,hass:n}=e,a=o.days??1,r=Number(o.bucket??60),i=function(e,t){const o=da(e.period);return 1===t?{last:1,unit:"day",calendar:"day",offset:o.offset,navigate:o.navigate,until:"end"}:{last:t,unit:"day",offset:o.offset,navigate:o.navigate,until:"end"}}(o,a),s=Math.max(0,i.offset+(i.navigate?ma(e.host,i):0)),l=oa(n),c=function(e,t,o,n){const a=Qn("day",Kn("day",e,t),-n*o,t),r=[];for(let i=o-1;i>=-1;i--)r.push(Qn("day",a,-i,t));return r}(t,l,a,s),d=0===s,u=c[c.length-1],h=Math.min(u,t),p=e.items.map(Sy),m=e.items.map((e,t)=>({entity:e.entityId,attribute:Ay(e,p[t]),text:!0})),f=Ba(e.host,e.requestUpdate).get(n,m,{start:c[0],end:d?t:u},"history",{live:d}),g={start:c[0],end:h},v=Math.max(1,c.slice(0,-1).filter(e=>e<h).length),y=e.items.map((e,t)=>{const i=p[t],s=e.config,d=e.stateObj?f.data.get(Ca(m[t]))??[]:[],u={index:t,entity:e,kind:i,color:Ce(s.color??Ja[t%Ja.length]),missing:!e.stateObj,hasData:!1,intervals:[],runs:[],slots:[],heights:[],aggregate:Ey(e,o),totalMs:0,count:0,stat:""};if("state"===i){const e=function(e){if("string"==typeof e&&""!==e.trim())return new Set([e.trim()]);if(Array.isArray(e)){const t=e.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>e.trim());if(t.length)return new Set(t)}return new Set(oy)}(s.active),t=function(e,t,o){const n={active:[],known:[]};for(let a=0;a<e.length;a++){const r=e[a],i=a+1<e.length?e[a+1].t:t.end,s=Math.max(t.start,r.t),l=Math.min(t.end,i);if(l<=s||ay(r.s))continue;const c=!0===r.carried||r.t<t.start;ry(n.known,s,l,c),o.has(r.s)&&(ry(n.active,s,l,c),n.word=r.s)}return n}(d,g,e);u.hasData=t.known.length>0,u.word=t.word;const o=t.active;1===a?u.intervals=o:u.runs=function(e,t,o,n){const a=new Uint16Array(ey),r=new Uint16Array(ey);for(let s=0;s+1<o.length;s++){const i={start:o[s],end:o[s+1]},l=new Uint8Array(ey),c=new Uint8Array(ey);for(const e of iy(t,i))for(const t of cy(e,i.start,n))uy(c,t);for(const t of iy(e,i))for(const e of cy(t,i.start,n))uy(l,e);for(let e=0;e<ey;e++)r[e]+=c[e],a[e]+=l[e]&c[e]}const i=[];for(let s=0;s<ey;s++){if(0===a[s])continue;const e=i[i.length-1];e&&e.to===s&&e.on===a[s]&&e.of===r[s]?e.to=s+1:i.push({from:s,to:s+1,on:a[s],of:r[s]})}return i}(o,t.known,c,l.timeZone),u.totalMs=o.reduce((e,t)=>e+t.end-t.start,0)/v;let r=0;for(let n=0;n+1<c.length;n++)r+=sy(iy(o,{start:c[n],end:c[n+1]}));u.count=r/v;const i=e=>1===a?e:Ze(n,"day_clock_a_day",{text:e}),h=[i(vy(u.totalMs))];u.count>0&&h.push(i(function(e,t){const o=Math.round(10*t)/10;return 1===o?Ze(e,"day_clock_times_one"):Ze(e,"day_clock_times",{n:o})}(n,u.count))),u.stat=h.join(" · ")}else{const t=d.map(e=>({...e,v:_a(e.s),s:void 0}));u.slots=function(e,t,o,n,a,r){const i=new Map;for(let s=0;s+1<t.length;s++){const l={start:t[s],end:t[s+1]};if(l.start>=a)break;const c=Ta(e,py(l,o),n,a),d=new Map;for(const e of c){if(null===e.v)continue;const t=Math.floor(ly(e.t,l.start,r)/o);t<0||t*o>=ey||d.set(t,[...d.get(t)??[],e.v])}for(const[e,t]of d)i.set(e,[...i.get(e)??[],fy(t,n)])}return[...i.entries()].sort((e,t)=>e[0]-t[0]).map(([e,t])=>({index:e,v:t.reduce((e,t)=>e+t,0)/t.length,days:t.length}))}(t,c,r,u.aggregate,h,l.timeZone);const o=gy(u.aggregate);if(u.heights=function(e,t){if(0===e.length)return[];const o=e.map(e=>e.v);if(t){const e=Math.max(...o.map(Math.abs));return o.map(t=>e>0?Math.abs(t)/e:0)}const n=Math.min(...o),a=Math.max(...o);return o.map(e=>a>n?.15+.85*(e-n)/(a-n):1)}(u.slots,o),u.hasData=u.slots.length>0,u.hasData){const t=u.slots.reduce((e,t)=>t.v>e.v?t:e),i=jy(t.index*r,n);if(o){const t=Ly(u.slots.reduce((e,t)=>e+t.v,0),e,n);u.stat=Ze(n,"day_clock_busiest",{total:1===a?t:Ze(n,"day_clock_a_day",{text:t}),time:i})}else u.stat=Ze(n,"day_clock_peak",{value:Ly(t.v,e,n),time:i})}}return u.missing?u.stat=Ze(n,"entity_not_found"):u.hasData||"ready"!==f.status||(u.stat=Ze(n,"day_clock_no_data")),u});return{status:f.status,error:f.error,rings:y,bounds:c,days:a,bucket:r,live:d,now:t,period:i,back:s,zone:l}}const Ty=new WeakMap;function Oy(e){let t=Ty.get(e);return t||(t={},Ty.set(e,t)),t}function Fy(e,t,o){const n=Oy(e.host);void 0!==n.timer&&clearTimeout(n.timer),n.timer=void 0,n.ring===t&&n.item===o||(n.ring=t,n.item=o,e.requestUpdate())}const Py=new WeakMap;function Dy(e,t){if(Py.has(e.host))return;const o=6e4-t%6e4+50;Py.set(e.host,setTimeout(()=>{Py.delete(e.host),"undefined"!=typeof document&&"hidden"===document.visibilityState?Dy(e,Date.now()):e.requestUpdate()},o))}const Uy=-132,Hy=-120,Iy=264,Ry=240,By=92;function qy(e,t,o){const n=Ty.get(e.host);if(void 0===n?.ring||void 0===n.item)return Z;const a=t.rings[n.ring],r=o[n.ring]?.[n.item];if(!a||!r)return Z;const{time:i,value:s}=function(e,t,o,n){const a=(e,t)=>Ze(n,"day_clock_range",{from:e,to:t});if("numeric"===e.kind){const r=e.slots[t],i=a(jy(r.index*o.bucket,n),jy((r.index+1)*o.bucket,n)),s=Ly(r.v,e.entity,n);return{time:i,value:1===o.days?s:Ze(n,"day_clock_average_value",{value:s})}}if(o.days>1){const o=e.runs[t];return{time:a(jy(o.from,n),jy(o.to,n)),value:Ze(n,"day_clock_on_days",{on:o.on,of:o.of})}}const r=e.intervals[t],i=o.live&&r.end>=o.now-1e3,s=i?Ze(n,"day_clock_now").toLocaleLowerCase():Un(r.end,n),l=vy(r.end-r.start);return{time:a(Un(r.start,n),s),value:i?Ze(n,"day_clock_so_far",{duration:l}):l}}(a,r.item,t,e.hass),[l,c]=yy(r.r+4,r.angle);return B`<div class="dc-tip tooltip ${`${l<0?"tip-right":"tip-left"} ${c<0?"tip-down":"tip-up"}`}" style="left:${(l-Uy)/Iy*100}%;top:${(c-Hy)/Ry*100}%" aria-hidden="true">
    <div class="tooltip-time">${i}</div>
    <div class="tooltip-row">
      <span class="swatch" style="background:${a.color}"></span>
      <span class="tooltip-name">${a.entity.name}</span>
      <span class="tooltip-value">${s}</span>
    </div>
  </div>`}function Vy(e,t,o){const n=t.toLocaleLowerCase().includes(o.toLocaleLowerCase())?Ze(e,"day_clock_on"):o;return Ze(e,"day_clock_state",{name:t,state:n})}function Zy(e,t){const o=e.entity;if(!o.stateObj)return o.display;if("numeric"===e.kind)return Ze(t,"day_clock_state",{name:o.name,state:o.display});const n=Ay(o,"state"),a=n?o.stateObj.attributes?.[n]:o.stateObj.state;return"string"!=typeof a?Ze(t,"day_clock_state",{name:o.name,state:o.display}):Vy(t,o.name,Cy(t,o,a,n))}function Wy(e){return e.rings.find(e=>!e.missing)}function Yy(e,t,o){const n=Math.min(o,t/Math.max(1,.56*e.length)),a=.62*o;if(n>=a)return{size:n,text:e};const r=Math.max(3,Math.floor(t/(.56*a))-1);return{size:a,text:`${e.slice(0,r).trimEnd()}…`}}function Gy(e,t,o){const n=function(e,t){const o=e.raw.center??"total";if("none"===o||0===t.rings.length)return;const{hass:n}=e,a=Wy(t);if("now"===o&&t.live&&1===t.days&&a)return[Un(t.now,n),Zy(a,n)];const r=t.rings.find(e=>"state"===e.kind&&e.hasData);if(r){const e=r.word?Cy(n,r.entity,r.word,Ay(r.entity,"state")):Ze(n,"day_clock_on"),o=Vy(n,r.entity.name,e);return[vy(r.totalMs),1===t.days?o:Ze(n,"day_clock_per_day",{label:o})]}const i=t.rings.find(e=>"numeric"===e.kind&&e.hasData);if(!i)return;const s=gy(i.aggregate)?Ly(i.slots.reduce((e,t)=>e+t.v,0),i.entity,n):i.entity.display;return[s,i.entity.name]}(e,t);if(!n)return Z;const a=Math.min(18,.4*o),r=Math.min(11,.25*o),i=(1.05*a+1.3*r)/2,s=2*Math.sqrt(Math.max(0,o*o-i*i))-8,l=Yy(n[0],s,a),c=Yy(n[1],s,r),d=.3*l.size+c.size,u=(-.75*l.size+d+.3*c.size)/2;return q`<g class="dc-centre" aria-hidden="true">
    <text class="dc-centre-value" y=${-u} font-size=${l.size}>${l.text}</text>
    <text class="dc-centre-label" y=${d-u} font-size=${c.size}>${c.text}</text>
  </g>`}function Xy(e,t){const o=function(e,t=92,o=44){const n=e.map(e=>"state"===e?15:22),a=n.reduce((e,t)=>e+t,0)+4*Math.max(0,e.length-1),r=t-o,i=a>r?r/a:1,s=[];let l=t;for(const c of n){const e=c*i;s.push({r0:l-e,r1:l}),l-=e+4*i}return{rings:s,hole:s.length?s[s.length-1].r0:t}}(t.rings.map(e=>e.kind),By),n=Yr(e.raw),a=t.rings.map((e,n)=>{const{r0:a,r1:r}=o.rings[n];return"state"===e.kind?function(e,t,o,n){const a=t.zone.timeZone;return 1===t.days?e.intervals.map((e,r)=>{const i=cy(e,t.bounds[0],a),s=i.map(([e,t])=>xy(o,n,dy(e),dy(t))).join("");return{d:s,angle:dy(i.length?(i[0][0]+i[i.length-1][1])/2:0),r:n,item:r}}):e.runs.map((e,t)=>({d:xy(o,n,dy(e.from),dy(e.to)),angle:dy((e.from+e.to)/2),r:n,opacity:Math.max(.12,e.on/Math.max(1,e.of)),item:t}))}(e,t,a,r):function(e,t,o,n){const a=ey/t.bucket,r=Math.min(.03,Qv/a/8),i=gy(e.aggregate),s=[];return e.slots.forEach((t,l)=>{if(i&&0===t.v)return;const c=t.index/a*Qv+r,d=(t.index+1)/a*Qv-r,u=o+Math.max(.04,e.heights[l])*(n-o);s.push({d:xy(o,u,c,d),angle:(c+d)/2,r:u,item:l})}),s}(e,t,a,r)}),r=Ty.get(e.host),i=t.rings.map((i,s)=>{const{r0:l,r1:c}=o.rings[s],d=1===t.days&&a[s].length<=48,u="state"===i.kind?q`<path class="dc-track" d=${xy(l,c,0,Qv)}></path>`:q`<circle class="dc-base" r=${l}></circle>`;return q`<g
      class="entity dc-ring ${i.kind}"
      data-index=${i.index}
      tabindex="0"
      role="group"
      aria-label=${`${i.entity.name}, ${i.stat}`}
    >
      ${u}
      ${a[s].map((t,o)=>q`<path
            class="dc-mark ${r?.ring===s&&r.item===o?"hover":""}"
            d=${t.d}
            fill=${i.color}
            fill-opacity=${t.opacity??Z}
            tabindex=${d?"0":Z}
            @pointerenter=${n?()=>Fy(e,s,o):Z}
            @pointerdown=${n?()=>Fy(e,s,o):Z}
            @pointerleave=${n?t=>function(e,t){if("touch"!==t.pointerType&&"pen"!==t.pointerType)return void Fy(e,void 0,void 0);const o=Oy(e.host);void 0!==o.timer&&clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=void 0,Fy(e,void 0,void 0)},Br)}(e,t):Z}
            @focus=${n?()=>Fy(e,s,o):Z}
            @blur=${n?()=>Fy(e,void 0,void 0):Z}
          ></path>`)}
    </g>`}),s=function(e){const t=e?.locale?.language??"en";let o=Fn(e);if(void 0===o)try{o=!0===new Intl.DateTimeFormat(t,{hour:"numeric"}).resolvedOptions().hour12}catch{o=!1}return o?[0,6,12,18].map(e=>new Intl.DateTimeFormat(t,{hour:"numeric",hour12:!0,timeZone:"UTC"}).format(Date.UTC(2e3,0,1,e))):["00","06","12","18"]}(e.hass),l=Array.from({length:24},(e,t)=>{const o=t/24*Qv,n=t%6==0,[a,r]=yy(95,o),[i,s]=yy(By+(n?9:6),o);return q`<line class="dc-tick ${n?"major":""}" x1=${a} y1=${r} x2=${i} y2=${s}></line>`}),c=q`
    <text class="dc-label" x="0" y=${-107} text-anchor="middle">${s[0]}</text>
    <text class="dc-label" x=${104} y="3.5" text-anchor="start">${s[1]}</text>
    <text class="dc-label" x="0" y=${114} text-anchor="middle">${s[2]}</text>
    <text class="dc-label" x=${-104} y="3.5" text-anchor="end">${s[3]}</text>`;let d=Z;if(t.live&&1===t.days){const e=dy(ly(t.now,t.bounds[0],t.zone.timeZone)),[n,a]=yy(o.hole,e),[r,i]=yy(101,e);d=q`
      <path class="dc-future" d=${xy(o.hole-1,93,e,Qv)}></path>
      <line class="dc-hand" x1=${n} y1=${a} x2=${r} y2=${i}></line>
      <circle class="dc-hand-dot" cx=${r} cy=${i} r="2.6"></circle>`}const u=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_day_clock"),names:t.rings.map(e=>e.entity.name).join(", ")});return B`<div class="dc-dial">
    <svg class="dc-svg" viewBox="${Uy} ${Hy} ${Iy} ${Ry}" role="img" aria-label=${u}>
      ${l}${c}
      <g class="dc-marks">${i}</g>
      ${d} ${Gy(e,t,o.hole)}
    </svg>
    ${n?qy(e,t,a):Z}
  </div>`}function Jy(e,t,o=!1){return B`<div class="frame">
    ${e}
    <div class="chart-message ${o?"error":""}">${t}</div>
  </div>`}const Ky={layout:"chart",group:"history",height:280,styles:r`
    ${cr}
    ${ti}
    .dc-body {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 8px 20px;
      padding-bottom: 4px;
    }
    .dc-dial {
      position: relative;
      flex: 0 1 280px;
      min-width: 200px;
      aspect-ratio: 264 / 240;
    }
    .dc-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .dc-track {
      fill: var(--cd-track);
    }
    .dc-base {
      fill: none;
      stroke: var(--divider-color, rgba(127, 127, 127, 0.3));
      stroke-width: 1;
    }
    .dc-mark {
      outline: none;
      transition: fill-opacity 0.15s ease;
    }
    .dc-ring:hover .dc-mark:not(.hover),
    .dc-ring:focus-within .dc-mark:not(.hover) {
      fill-opacity: 0.75;
    }
    .dc-mark.hover {
      stroke: var(--primary-text-color);
      stroke-width: 1.2;
      paint-order: stroke;
    }
    .dc-ring {
      cursor: pointer;
      outline: none;
    }
    .dc-ring:focus-visible .dc-track,
    .dc-ring:focus-visible .dc-base {
      stroke: var(--primary-color);
      stroke-width: 1.5;
    }
    .dc-tick {
      stroke: var(--secondary-text-color);
      stroke-opacity: 0.5;
      stroke-width: 1;
    }
    .dc-tick.major {
      stroke-opacity: 1;
      stroke-width: 1.5;
    }
    .dc-label {
      fill: var(--secondary-text-color);
      font-size: 10px;
    }
    .dc-future {
      fill: var(--card-background-color, #fff);
      fill-opacity: 0.55;
      pointer-events: none;
    }
    .dc-hand {
      stroke: var(--primary-text-color);
      stroke-width: 2;
      stroke-linecap: round;
      pointer-events: none;
    }
    .dc-hand-dot {
      fill: var(--primary-text-color);
    }
    .dc-centre text {
      text-anchor: middle;
      pointer-events: none;
    }
    .dc-centre-value {
      fill: var(--primary-text-color);
      font-weight: 500;
    }
    .dc-centre-label {
      fill: var(--secondary-text-color);
    }
    .dc-marks {
      opacity: 0;
      transition: opacity var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .dc-marks {
      opacity: 1;
    }
    :host([static]) .dc-marks,
    :host([static]) .dc-mark {
      transition: none;
    }
    .dc-legend {
      flex: 1 1 160px;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .dc-item {
      display: flex;
      gap: 8px;
      align-items: baseline;
      min-width: 0;
    }
    .dc-swatch {
      flex: none;
      width: 10px;
      height: 10px;
      border-radius: 2px;
    }
    .dc-text {
      min-width: 0;
    }
    .dc-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dc-stat {
      color: var(--secondary-text-color);
      font-size: 0.875em;
    }
    .dc-item.missing .dc-name {
      color: var(--secondary-text-color);
    }
    .dc-foot {
      margin-top: 4px;
    }
    .dc-now {
      font-weight: 500;
      font-size: 1.1em;
    }
    .dc-tip {
      position: absolute;
      pointer-events: none;
      z-index: 1;
      white-space: nowrap;
    }
    .dc-tip.tip-right {
      transform: translate(6px, 0);
    }
    .dc-tip.tip-left {
      transform: translate(calc(-100% - 6px), 0);
    }
    .dc-tip.tip-right.tip-up {
      transform: translate(6px, -100%);
    }
    .dc-tip.tip-left.tip-up {
      transform: translate(calc(-100% - 6px), -100%);
    }
  `,thumbnail:()=>q`
    <circle cx="32" cy="20" r="15" fill="none" stroke="var(--divider-color, #ccc)" stroke-width="5" />
    <path d="M32 5 A15 15 0 0 1 46.5 16" fill="none" stroke="var(--error-color, #db4437)" stroke-width="5" />
    <path d="M38 33.8 A15 15 0 0 1 22 31" fill="none" stroke="var(--error-color, #db4437)" stroke-width="5" />
    <circle cx="32" cy="20" r="8" fill="none" stroke="var(--divider-color, #ccc)" stroke-width="3" />
    <path d="M32 12 A8 8 0 0 1 39.5 17.5" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="3" />
    <line x1="32" y1="20" x2="19" y2="28" stroke="var(--primary-text-color, #212121)" stroke-width="1.5"
      stroke-linecap="round" />`,validate:function(e){Gr(e),da(e.period);const t=e.days;if(void 0!==t&&("number"!=typeof t||!Number.isInteger(t)||t<1||t>31))throw new Error('"days" must be a whole number from 1 to 31');if(void 0!==e.center&&!ky.includes(e.center))throw new Error(`"center" must be one of: ${ky.join(", ")}`);if(void 0!==e.bucket&&!hy.includes(Number(e.bucket)))throw new Error(`"bucket" must be one of: ${hy.join(", ")}`);if(void 0!==e.aggregate&&!La.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${La.join(", ")}`);for(const o of e.entities??[]){if("object"!=typeof o||null===o)continue;const e=o.active;if(void 0===e)continue;const t="string"==typeof e&&""!==e.trim()||Array.isArray(e)&&e.every(e=>"string"==typeof e);if(!t)throw new Error('"active" must be a state or a list of states')}},editor:function(e){var t;return ks({...e,config:(t=e.config,"number"==typeof t.bucket?{...t,bucket:String(t.bucket)}:t),commit:t=>e.commit(function(e){return"string"==typeof e.bucket?{...e,bucket:Number(e.bucket)}:e}(t))},"chart",$s("day_clock",e.hass,()=>{return[{type:"grid",name:"",schema:[{name:"days",selector:{number:{min:1,max:31,mode:"box"}}},{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"center",selector:ss(t=e.hass,"day_clock_center",["total","now","none"])},{type:"grid",name:"",schema:[{name:"bucket",selector:ss(t,"bucket",hy.map(String))},{name:"aggregate",selector:ss(t,"aggregate",["auto",...La])}]},{name:"tooltip",selector:{boolean:{}}}];var t}),_y)},entityFields:function(){return{schema:wy,fields:$y}},disconnect(e){rr(e),function(e){const t=Py.get(e);void 0!==t&&clearTimeout(t),Py.delete(e)}(e);const t=Ty.get(e);void 0!==t?.timer&&clearTimeout(t.timer),Ty.delete(e)},render(e){const t=Ny(e);t.live&&Dy(e,t.now);const o=nr({period:t.period,range:{start:t.bounds[0],end:t.bounds[t.bounds.length-1]},back:t.back,zone:t.zone},e,t.now);return"loading"===t.status?Jy(o,Ze(e.hass,"chart_loading")):"error"===t.status?Jy(o,Ze(e.hass,"chart_error",{error:t.error??""}),!0):t.rings.every(e=>!e.hasData)?Jy(o,Ze(e.hass,"chart_no_data")):B`<div class="frame">
      ${o}
      <div class="dc-body">${Xy(e,t)} ${function(e,t){const{hass:o}=e;let n=Z;return t.days>1?n=B`<div class="dc-foot">
      <div class="dc-stat">${Ze(o,"day_clock_average",{n:t.days})}</div>
    </div>`:t.live&&Wy(t)&&(n=B`<div class="dc-foot">
      <div class="dc-stat">${Ze(o,"day_clock_now")}</div>
      <div class="dc-now">${Un(t.now,o)} · ${Zy(Wy(t),o)}</div>
    </div>`),B`<div class="dc-legend">
    ${t.rings.map(e=>B`<div class="dc-item ${e.missing?"missing":""}">
          <span class="dc-swatch" style="background:${e.color}"></span>
          <div class="dc-text">
            <div class="dc-name">${e.entity.name}</div>
            <div class="dc-stat">${e.stat}</div>
          </div>
        </div>`)}
    ${n}
  </div>`}(e,t)}</div>
    </div>`}};function Qy(e,t){if(null!=e&&""!==e){if("number"==typeof e&&Number.isFinite(e))return{value:e,soft:!1};if("string"==typeof e){const t=e.trim(),o=t.startsWith("~"),n=Number(o?t.slice(1):t);if(""!==t&&"~"!==t&&Number.isFinite(n))return{value:n,soft:o}}throw new Error(`"${t}" must be a number, or ~ and a number for a soft limit (e.g. "~0")`)}}function eb(e,t={}){let[o,n]=e??[t.min?.value??0,t.max?.value??1];if(t.fromZero&&(o>0&&(o=0),n<0&&(n=0)),void 0!==t.minRange&&n-o<t.minRange){const e=(o+n)/2;o=e-t.minRange/2,n=e+t.minRange/2}let[a,r]=cn([o,n],.1);t.fromZero&&0===o&&(a=0),t.fromZero&&0===n&&(r=0);const{min:i,max:s}=t;return i&&(a=i.soft&&o<i.value?a:i.value),s&&(r=s.soft&&n>s.value?r:s.value),r<=a&&(r=a+1),[a,r]}function tb(e,t,o){const n=[];for(const c of e){const e=Math.min(c.end??c.t,o);if(c.t>=o)break;n.push({...c,start:c.t,end:e,t:Math.round((c.t+e)/2)})}const a=n.filter(e=>null!==e.v);if(0===a.length)return n;const r=n[0],i=n[n.length-1],s=[...n];null!==r.v&&r.t>t.start&&s.unshift({t:t.start,v:r.v,carried:!0});const l=Math.min(t.end,o);return null!==i.v&&i.t<l&&s.push({t:l,v:i.v,carried:!0}),s}function ob(e,t){if(void 0!==e&&!La.includes(e))throw new Error(`${t} must be one of: ${La.join(", ")}`)}const nb=[...ls,{name:"points_per_hour",path:["points_per_hour"],default:.5},{name:"graph",path:["graph"],default:"line"},{name:"fill",path:["fill"],default:"fade"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:mo},{name:"points",path:["points"],default:"hover"},{name:"labels",path:["labels"],default:"hover"},{name:"height",path:["height"],default:150},{name:"bar_spacing",path:["bar_spacing"],default:4},{name:"color_transition",path:["color_transition"],default:"smooth"},{name:"extrema",path:["extrema"],default:!1},{name:"average",path:["average"],default:!1},{name:"legend",path:["legend"],default:!0},{name:"trend_y_min",path:["y_min"]},{name:"trend_y_max",path:["y_max"]},{name:"min_range",path:["min_range"]},{name:"y_min_secondary",path:["y_min_secondary"]},{name:"y_max_secondary",path:["y_max_secondary"]},{name:"min_range_secondary",path:["min_range_secondary"]},{name:"value_factor",path:["value_factor"],default:0},{name:"align_header",path:["align_header"],default:"default"},{name:"align_icon",path:["align_icon"],default:"right"},{name:"align_state",path:["align_state"],default:"left"},{name:"font_size",path:["font_size"],default:100},{name:"font_size_header",path:["font_size_header"]},{name:"color_name",path:["color_name"],default:!1},{name:"color_value",path:["color_value"],default:!1},{name:"trend_color_icon",path:["color_icon"],default:!1},{name:"group",path:["group"],default:!1},{name:"icon_image",path:["icon_image"]},{name:"trend_tooltip",path:["tooltip"],default:!0}],ab=(...e)=>({type:"grid",name:"",schema:e}),rb=e=>({name:e,selector:{boolean:{}}}),ib=(e,t,o,n="any")=>({name:e,selector:{number:{mode:"box",step:n,...void 0!==t?{min:t}:{},...void 0!==o?{max:o}:{}}}}),sb=e=>({name:e,selector:{text:{}}});function lb(e){const t={};for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"])"number"==typeof e[o]&&(t[o]=String(e[o]));return t}const cb=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"entity_aggregate",path:["aggregate"]},{name:"y_axis_side",path:["y_axis"],default:"primary"},{name:"fixed_value",path:["fixed_value"],default:!1},{name:"show_graph",path:["show_graph"],default:!0},{name:"show_line",path:["show_line"],default:!0},{name:"show_fill",path:["show_fill"],default:!0},{name:"show_points",path:["show_points"]},{name:"show_legend_entity",path:["show_legend"],default:!0},{name:"show_legend_state",path:["show_legend_state"],default:!1},{name:"show_indicator",path:["show_indicator"],default:!1},{name:"show_state",path:["show_state"],default:!1}];const db=["line","bar","none"],ub=["solid","fade","none"],hb=["hover","always","never"],pb=["default","left","right","center"],mb=["right","left","state"],fb=["left","right","center"],gb=["smooth","hard"];function vb(e,t){return void 0===e?t:!0===e?"always":!1===e?"never":e}function yb(e){return void 0===e||!0===e?"fade":!1===e?"none":e}const bb=e=>"number"==typeof e&&Number.isFinite(e)?e:void 0;function xb(e){return{graph:e.graph??"line",fill:yb(e.fill),points:vb(e.points,"hover"),labels:vb(e.labels,"hover"),pointsPerHour:bb(e.points_per_hour)??.5,height:bb(e.height)??150,lineWidth:bb(e.line_width)??2.5,barSpacing:bb(e.bar_spacing)??4,transition:e.color_transition??"smooth",extrema:!0===e.extrema,average:!0===e.average,legend:!1!==e.legend,factor:Math.pow(10,bb(e.value_factor)??0),alignHeader:e.align_header??"default",alignIcon:e.align_icon??"right",alignState:e.align_state??"left",fontSize:bb(e.font_size)??100,fontSizeHeader:bb(e.font_size_header),colorName:!0===e.color_name,colorValue:!0===e.color_value,colorIcon:!0===e.color_icon,group:!0===e.group,iconImage:"string"==typeof e.icon_image&&""!==e.icon_image?e.icon_image:void 0,primary:{min:Qy(e.y_min,"y_min"),max:Qy(e.y_max,"y_max"),minRange:bb(e.min_range)},secondary:{min:Qy(e.y_min_secondary,"y_min_secondary"),max:Qy(e.y_max_secondary,"y_max_secondary"),minRange:bb(e.min_range_secondary)}}}function _b(e,t,o){if(void 0!==e&&!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`)}function wb(e,t,o,n=1/0,a=!1){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<o||e>n||a&&!Number.isInteger(e))){throw new Error(`"${t}" must be ${a?"a whole number":"a number"} ${n===1/0?`${o} or more`:`from ${o} to ${n}`}`)}}function $b(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}function kb(e,t,o){const n=Math.min(e.range.end,Date.now()),a="bar"===o.graph,r=a&&0===o.pointsPerHour?.5:o.pointsPerHour,i=e.group?[]:function(e,t,o=500){const n=e.end-e.start;if(n<=0||t<=0)return[];const a=Math.max(1,Math.min(o,Math.round(n/36e5*t))),r=n/a,i=[];for(let s=0;s<=a;s++)i.push(s===a?e.end:Math.round(e.start+s*r));return i}(e.range,r,a?96:500),s=t.raw.aggregate??"mean";return e.series.map(t=>{const a=t.entity.config;let r=t.points;a.fixed_value&&null!==t.entity.value?r=[{t:e.range.start,v:t.entity.value},{t:n,v:t.entity.value}]:e.group?r=tb(t.points,e.range,n):i.length&&(r=tb(function(e,t,o,n,a){if(t.length<2)return e;let r=e;const i=e[e.length-1],s=e[e.length-2];return"history"===n&&i&&s&&i.t===a&&i.v===s.v&&(r=e.slice(0,-1)),"statistics"===n?Oa(r,t,o,a):Ta(r,t,o,a)}(t.points,i,a.aggregate??s,e.source,n),e.range,n)),1!==o.factor&&(r=r.map(e=>null===e.v?e:{...e,v:e.v*o.factor}));const l=void 0!==a.color?Ce(a.color):void 0,c=!l&&(e=>e.config.severity!==Jt)(t.entity),d=null===t.entity.value?null:t.entity.value*o.factor,u=l??(c&&null!==d?Ce(Te(d,t.entity.bands).color):t.color);return{index:t.index,entity:t.entity,own:a,points:r,color:c?void 0:l??t.color,current:u,curve:t.curve,secondary:"secondary"===a.y_axis,graphed:!1!==a.show_graph}})}function Mb(e){let t=1/0,o=-1/0;for(const n of e)for(const e of n.points)null!==e.v&&(e.v<t&&(t=e.v),e.v>o&&(o=e.v));return t===1/0?void 0:[t,o]}const zb=e=>Math.round(1e4*e)/100+"%";function Sb(e,t,o){return e.filter(({series:e})=>void 0===e.color).map(({series:e})=>{const n=function(e,t,o){const[n,a]=t,r=e=>Math.min(1,Math.max(0,(e-n)/(a-n))),i=[];return e.forEach((t,n)=>{const a=Ce(t.color),s=Number.isFinite(t.from)?r(t.from):0,l=n+1<e.length?r(e[n+1].from):1;"hard"===o?i.push({offset:s,color:a},{offset:l,color:a}):(0===n||n===e.length-1||s<l)&&(i.push({offset:s,color:a}),n===e.length-1&&i.push({offset:1,color:a}))}),i}(e.entity.bands,t.get(e.secondary),o.transition);return q`<linearGradient id="cd-trend-${e.index}" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${Xa} y2="0">
        ${n.map(e=>q`<stop offset=${e.offset} stop-color=${e.color}></stop>`)}
      </linearGradient>`})}const Ab=e=>e.color??`url(#cd-trend-${e.index})`;function Eb(e,t){return void 0!==e.start&&void 0!==e.end&&e.end>e.start?`${Un(e.start,t.hass)} – ${Un(e.end,t.hass)}`:Un(e.t,t.hass)}function Cb(e,t,o,n){const a=o.colorIcon?`color:${n}`:"";return o.iconImage?B`<span class="trend-icon"><img src=${o.iconImage} alt="" /></span>`:B`<span class="trend-icon" style=${a}>
    <ha-state-icon .hass=${t.hass} .stateObj=${e.stateObj} .icon=${Us(e)}></ha-state-icon>
  </span>`}function jb(e,t,o,n){if(!t.extrema&&!t.average)return Z;const a=function(e,t){let o,n,a=0,r=0;for(let i=0;i<e.length;i++){const s=e[i];if(null!==s.v)if(s.carried||((!o||s.v<o.v)&&(o={t:s.t,v:s.v}),(!n||s.v>n.v)&&(n={t:s.t,v:s.v})),t){const t=e[i+1],o=t?t.t-s.t:0;a+=s.v*o,r+=o}else s.carried||(a+=s.v,r+=1)}if(o&&n)return{min:o,max:n,mean:r>0?a/r:(o.v+n.v)/2}}(e.points,n);if(!a)return Z;const r=(t,n,a)=>B`<span class="trend-chip ${t}"
      ><span class="trend-chip-type">${Ze(o.hass,t)}</span> ${(t=>ur(dr(t,e.entity.decimals,o.hass),e.entity.unit))(n)}${void 0!==a?B` · <span class="trend-chip-time">${Un(a,o.hass)}</span>`:Z}</span
    >`;return B`<div class="trend-info" style="--series:${e.current}">
    ${t.extrema?r("trend_min",a.min.v,a.min.t):Z}
    ${t.average?r("trend_avg",a.mean):Z}
    ${t.extrema?r("trend_max",a.max.v,a.max.t):Z}
  </div>`}const Lb={layout:"chart",group:"history",height:170,gridOptions:{columns:6,min_columns:3,min_rows:2},styles:r`
    ${cr}
    ${ti}
    .content.style-trend {
      padding: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .content.style-trend > .chart {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    /* The graph sits on the card's bottom edge, its corners cut by the card's rounding. */
    ha-card:has(> .content.style-trend) {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    ha-card:has(> .content.style-trend .trend.group) {
      box-shadow: none;
      border: none;
      background: none;
    }
    .trend {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .trend-top {
      padding: 16px 16px 0;
    }
    .trend.group .trend-top {
      padding: 0 0 0;
    }
    .trend.no-graph .trend-top {
      padding-bottom: 16px;
    }
    .trend-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      min-width: 0;
      cursor: pointer;
      border-radius: 4px;
      font-size: 14px;
    }
    .trend-header.icon-left {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
    .trend-header.align-left {
      justify-content: flex-start;
    }
    .trend-header.align-right {
      justify-content: flex-end;
    }
    .trend-header.align-center {
      justify-content: center;
    }
    .trend-name {
      font-size: 1.15em;
      font-weight: 500;
      line-height: 1.4em;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .trend-icon {
      flex: none;
      display: inline-flex;
      color: var(--state-icon-color, #44739e);
    }
    .trend-icon ha-state-icon {
      --mdc-icon-size: 1.7em;
      width: 1.7em;
      height: 1.7em;
    }
    .trend-icon img {
      width: 1.7em;
      height: 1.7em;
      object-fit: contain;
    }
    .trend-states {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0 16px;
      min-width: 0;
      padding-bottom: 4px;
    }
    .trend-states.align-right {
      flex-direction: row-reverse;
    }
    .trend-states.align-center {
      justify-content: space-evenly;
    }
    .trend-states .trend-icon {
      align-self: center;
      font-size: 1.15em;
    }
    .trend-state {
      position: relative;
      display: flex;
      align-items: baseline;
      gap: 4px;
      min-width: 0;
      cursor: pointer;
      border-radius: 4px;
    }
    .trend-state:not(.small) {
      margin-top: 4px;
    }
    .trend-value {
      font-size: 2.25em;
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -0.01em;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
    }
    .trend-unit {
      font-size: 1.15em;
      font-weight: 400;
      color: var(--secondary-text-color);
      white-space: nowrap;
    }
    /* While hovering, the reading's time sits after the value. */
    .trend-when {
      align-self: center;
      margin-left: 6px;
      font-size: 0.8125em;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    .trend-secondary {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 2px;
      min-width: 0;
      padding-top: 8px;
    }
    .trend-states.align-right .trend-secondary {
      align-items: flex-start;
    }
    .trend-state.small {
      align-items: center;
      gap: 6px;
    }
    .trend-state.small .trend-value {
      font-size: 1em;
      font-weight: 500;
      letter-spacing: 0;
    }
    .trend-state.small .trend-unit {
      font-size: 0.875em;
    }
    .trend-state .swatch {
      align-self: center;
    }
    /* Low, average and high, as the line chart's highs and lows. */
    .trend-info {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 2px 0 8px;
    }
    .trend-chip {
      height: 20px;
      box-sizing: border-box;
      padding: 0 8px;
      border-radius: 10px;
      font-size: 11px;
      line-height: 20px;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
      color: var(--primary-text-color);
      background: color-mix(in srgb, var(--series) 16%, var(--card-background-color, #fff));
    }
    .trend-chip.trend_avg {
      color: var(--secondary-text-color);
      background: color-mix(in srgb, var(--primary-text-color) 6%, var(--card-background-color, #fff));
    }
    .trend-chip-type {
      font-weight: 500;
    }
    .trend-chip-time {
      color: var(--secondary-text-color);
    }
    .trend-legend {
      padding: 0 0 6px;
    }
    .trend .entity:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
    .trend-graph {
      position: relative;
      margin-top: auto;
      width: 100%;
      max-height: 400px;
    }
    .trend-graph.hoverable {
      touch-action: pan-y;
      cursor: crosshair;
    }
    .trend-graph.message {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      font-size: 0.875em;
      min-height: 48px;
    }
    .trend-graph.message.error {
      color: var(--error-color, #db4437);
    }
    .trend-graph .plot {
      overflow: hidden;
    }
    .style-trend .line {
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .style-trend .dots {
      stroke-linecap: round;
    }
    .style-trend .fill.solid {
      fill-opacity: 0.2;
    }
    /* Columns as on the column chart: rounded at the outer end, growing in from the base. */
    .trend-cols {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .trend-col {
      position: absolute;
      box-sizing: border-box;
      border-radius: 4px 4px 0 0;
      transform-origin: 50% 100%;
      animation: cd-trend-grow var(--cd-duration) var(--cd-easing);
    }
    .trend-col.down {
      border-radius: 0 0 4px 4px;
      transform-origin: 50% 0;
    }
    :host([static]) .trend-col {
      animation: none;
    }
    @keyframes cd-trend-grow {
      from {
        transform: scaleY(0);
      }
    }
    .trend-labels-wrap {
      position: absolute;
      inset: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1;
    }
    .trend-labels-wrap.labels-hover {
      opacity: 0;
    }
    .trend-graph:hover .trend-labels-wrap.labels-hover,
    .trend-graph:active .trend-labels-wrap.labels-hover {
      opacity: 1;
    }
    .trend-labels {
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 6px 8px;
      box-sizing: border-box;
    }
    .trend-labels.primary {
      left: 0;
    }
    .trend-labels.secondary {
      right: 0;
      align-items: flex-end;
    }
    /* Tinted with the series colour, as the line chart's high and low labels. */
    .trend-labels span {
      height: 18px;
      box-sizing: border-box;
      padding: 0 6px;
      border-radius: 9px;
      font-size: 11px;
      line-height: 18px;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
      color: var(--primary-text-color);
      background: color-mix(in srgb, var(--series) 16%, var(--card-background-color, #fff));
    }
    .trend-graph .crosshair {
      z-index: 1;
      pointer-events: none;
    }
    .trend-graph .hover-dot {
      z-index: 2;
      pointer-events: none;
    }
    .bar-hover {
      position: absolute;
      top: 0;
      bottom: 0;
      background: color-mix(in srgb, var(--primary-text-color) 7%, transparent);
      pointer-events: none;
    }
  `,thumbnail:()=>q`
    <rect x="6" y="6" width="18" height="3" rx="1.5" fill="var(--secondary-text-color, #727272)" />
    <circle cx="55" cy="8" r="3.5" fill="var(--state-icon-color, #44739e)" />
    <rect x="6" y="13" width="22" height="7" rx="2" fill="var(--primary-text-color, #212121)" />
    <path d="M0 33 C10 36 14 26 24 27 S38 29 44 25 S56 21 64 24 V40 H0 Z"
      fill="var(--primary-color, #03a9f4)" fill-opacity="0.2" />
    <path d="M0 33 C10 36 14 26 24 27 S38 29 44 25 S56 21 64 24" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){Qa(e),Gr(e),_b(e.graph,db,"graph"),_b(e.fill,[...ub,!0,!1],"fill"),_b(e.points,[...hb,!0,!1],"points"),_b(e.labels,[...hb,!0,!1],"labels"),_b(e.color_transition,gb,"color_transition"),_b(e.align_header,pb,"align_header"),_b(e.align_icon,mb,"align_icon"),_b(e.align_state,fb,"align_state"),wb(e.points_per_hour,"points_per_hour",0,60),wb(e.height,"height",20,1e3),wb(e.line_width,"line_width",fo,go),wb(e.bar_spacing,"bar_spacing",0,50),wb(e.value_factor,"value_factor",-9,9,!0),wb(e.font_size,"font_size",25,400),wb(e.font_size_header,"font_size_header",6,60),wb(e.min_range,"min_range",0),wb(e.min_range_secondary,"min_range_secondary",0);for(const t of["extrema","average","legend","color_name","color_value","group"])$b(e[t],t);if(void 0!==e.icon_image&&"string"!=typeof e.icon_image)throw new Error('"icon_image" must be a URL');xb(e);for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t,o=t=>`"${t}" of ${e.entity}`;ob(e.aggregate,o("aggregate")),_b(e.y_axis,["primary","secondary"],`y_axis of ${e.entity}`),wb(e.line_width,`line_width of ${e.entity}`,fo,go);for(const t of["fixed_value","show_state","show_indicator","show_graph","show_line","show_fill","show_points","show_legend","show_legend_state"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`${o(t)} must be true or false`)}},editor:function(e){const t=$s(`trend|${cs(e.config)}`,e.hass,()=>{return t=e.hass,o=e.config,[...ds(t,o),ib("points_per_hour",0,60),ab({name:"graph",selector:ss(t,"graph",["line","bar","none"])},{name:"fill",selector:ss(t,"fill",["fade","solid","none"])},{name:"curve",selector:ss(t,"curve",qa)},{name:"line_width",selector:To},{name:"points",selector:ss(t,"points",["hover","always","never"])},{name:"labels",selector:ss(t,"labels",["hover","always","never"])},ib("height",20,1e3,1),ib("bar_spacing",0,50,1)),{name:"color_transition",selector:ss(t,"color_transition",["smooth","hard"])},ab(rb("extrema"),rb("average"),rb("legend"),rb("trend_tooltip")),ab(sb("trend_y_min"),sb("trend_y_max"),ib("min_range",0)),ab(sb("y_min_secondary"),sb("y_max_secondary"),ib("min_range_secondary",0)),ab({name:"align_header",selector:ss(t,"align_header",["default","left","right","center"])},{name:"align_icon",selector:ss(t,"align_icon",["right","left","state"])},{name:"align_state",selector:ss(t,"align_state",["left","right","center"])},ib("font_size",25,400,1),ib("font_size_header",6,60,1),ib("value_factor",-9,9,1)),ab(rb("color_name"),rb("trend_color_icon"),rb("color_value"),rb("group")),{name:"icon_image",selector:{text:{}}}];var t,o}),o={...e,config:{...e.config,...lb(e.config)},commit:t=>e.commit(function(e){let t=e;for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"]){const e=t[o];"string"==typeof e&&""!==e.trim()&&!e.trim().startsWith("~")&&Number.isFinite(Number(e))?t={...t,[o]:Number(e)}:""===e&&(t={...t},delete t[o])}return t}(t))};return ks(o,"chart",t,nb,{legend:"editor_trend_legend",labels:"editor_trend_labels",group:"editor_trend_group"})},entityFields:function(e){return{schema:$s("trend-entity",e,()=>function(e){return[ab({name:"series_color",selector:{text:{}}},{name:"curve",selector:ss(e,"curve",qa)},{name:"line_width",selector:To},{name:"entity_aggregate",selector:ss(e,"aggregate",La)},{name:"y_axis_side",selector:ss(e,"y_axis_side",["primary","secondary"])}),ab(rb("show_state"),rb("show_indicator"),rb("show_graph"),rb("show_line"),rb("show_fill"),rb("show_points"),rb("show_legend_entity"),rb("show_legend_state"),rb("fixed_value"))]}(e)),fields:cb}},disconnect(e){rr(e),$r(e),Wr(e)},render:function(e){const t=xb(e.raw),{show:o}=e.config,n=er(e),a=kb(n,e,t),r=a[0],i=r.entity,s=a.filter(e=>e.graphed),l=function(e,t){if(void 0!==t)return e.map(e=>{const o=e.points.filter(e=>!e.carried),n=qr(o,t);return n<0?void 0:o[n]})}(a,Yr(e.raw)&&"ready"===n.status?Zr(e.host):void 0),c=t.colorName?`color:${r.current}`:"",d=o.icon&&"state"!==t.alignIcon?Cb(i,e,t,r.current):Z,u=o.name||d!==Z?B`<div
          class="trend-header entity align-${t.alignHeader} icon-${t.alignIcon}"
          data-index="0"
          tabindex="0"
          aria-label=${i.label}
          style=${t.fontSizeHeader?`font-size:${t.fontSizeHeader}px`:""}
        >
          ${o.name?B`<span class="trend-name" style=${c}>${i.name}</span>`:Z} ${d}
        </div>`:Z,h=(o,n)=>{const a=l?.[n],r=a?a.v:o.entity.value,i=a?{number:null===a.v?"—":dr(a.v,o.entity.decimals,e.hass),unit:o.entity.unit}:function(e,t,o,n){return null===e?{number:t.display,unit:""}:{number:dr(e*o,t.decimals,n),unit:t.unit}}(r,o.entity,t.factor,e.hass);return{parts:i,color:a&&null!==a.v&&void 0===o.color?Ce(Te(a.v,o.entity.bands).color):o.current,when:a?Eb(a,e):void 0}},p=h(r,0),m=o.value,f=a.slice(1).filter(e=>!0===e.own.show_state),g=m||f.length||"state"===t.alignIcon?B`<div class="trend-states align-${t.alignState}" style="font-size:${t.fontSize}%">
          ${o.icon&&"state"===t.alignIcon?Cb(i,e,t,r.current):Z}
          ${m?B`<div class="trend-state entity" data-index="0" tabindex="0" aria-label=${i.label}>
                  ${r.own.show_indicator?B`<span class="swatch" style="background:${r.current}"></span>`:Z}
                  <span class="trend-value" style=${t.colorValue?`color:${p.color}`:""}
                    >${p.parts.number}</span
                  >${p.parts.unit?B`<span class="trend-unit">${p.parts.unit}</span>`:Z}
                  ${p.when?B`<span class="trend-when">${p.when}</span>`:Z}
                </div>`:Z}
          ${f.length?B`<div class="trend-secondary">
                  ${f.map(e=>{const o=h(e,e.index);return B`<div
                      class="trend-state small entity"
                      data-index=${e.index}
                      tabindex="0"
                      aria-label=${e.entity.label}
                    >
                      ${!1!==e.own.show_indicator?B`<span class="swatch" style="background:${e.current}"></span>`:Z}
                      <span class="trend-value" style=${t.colorValue?`color:${o.color}`:""}
                        >${o.parts.number}</span
                      >${o.parts.unit?B`<span class="trend-unit">${o.parts.unit}</span>`:Z}
                    </div>`})}
                </div>`:Z}
        </div>`:Z,v=s.filter(e=>!1!==e.own.show_legend),y=t.legend&&s.length>1&&v.length?B`<div class="series-header trend-legend">
          ${v.map(t=>B`<div class="entity series-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}>
                <span class="swatch" style="background:${t.current}"></span>
                <span class="series-name">${function(e,t){const o=t.raw.name;return void 0===o||e.entity.name!==o?e.entity.name:e.entity.stateObj?.attributes.friendly_name??e.entity.entityId}(t,e)}</span>
                ${t.own.show_legend_state?B`<span class="series-value">${t.entity.display}</span>`:Z}
              </div>`)}
        </div>`:Z,b=nr(n,e),x="none"===t.graph?Z:function(e,t,o,n,a){const r=`aspect-ratio:500 / ${n.height}`;if("ready"!==t.status||o.every(e=>e.points.every(e=>null===e.v))){const o="loading"===t.status?"chart_loading":"error"===t.status?"chart_error":"chart_no_data";return B`<div class="trend-graph message ${"error"===t.status?"error":""}" style=${r}>
      <span>${Ze(e.hass,o,{error:t.error??""})}</span>
    </div>`}const i="bar"===n.graph,s=new Map;for(const b of[!1,!0]){const e=o.filter(e=>e.secondary===b);e.length&&s.set(b,eb(Mb(e),{...b?n.secondary:n.primary,fromZero:i}))}const l=dn([t.range.start,t.range.end],[0,Ga]),c=o.map(e=>({series:e,y:dn(s.get(e.secondary),[Xa,0])})),d=i?q``:q`${c.map(e=>function({series:e,y:t},o,n){const a=Ya(e.points).map(n=>{const a=n.map(e=>[o(e.t),t(e.v)]);return{pts:a,d:Wa(a,e.curve)}}),r=!1!==e.own.show_line,i="none"!==n.fill&&!1!==e.own.show_fill,s=e.own.line_width??n.lineWidth,l=e.own.show_points??"always"===n.points,c=e.points.filter(e=>null!==e.v&&!e.carried);return q`<g class="series" data-series=${e.index}>
    ${i?q`<path
            class="fill ${n.fill}"
            d=${a.map(({pts:e,d:t})=>`${t}L${e[e.length-1][0]},200L${e[0][0]},200Z`).join("")}
            fill=${Ab(e)}
            mask=${"fade"===n.fill?"url(#cd-trend-fade)":Z}
          ></path>`:Z}
    ${r?q`<path class="line" d=${a.map(e=>e.d).join("")} fill="none" stroke=${Ab(e)}
            style="stroke-width:${s}px"></path>`:Z}
    ${l&&c.length<=200?q`<path class="dots" d=${bo(c.map(e=>[o(e.t),t(e.v)]))} fill="none"
            stroke=${Ab(e)} style="stroke-width:${xo(s)}px"></path>`:Z}
  </g>`}(e,l,n))}`,u=q`${Sb(c,s,n)}
    <linearGradient id="cd-trend-fade-paint" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Xa}>
      <stop offset="0" stop-color="#fff" stop-opacity="0.42"></stop>
      <stop offset="1" stop-color="#fff" stop-opacity="0.05"></stop>
    </linearGradient>
    <mask id="cd-trend-fade" maskContentUnits="userSpaceOnUse">
      <rect x="0" y="0" width=${Ga} height=${Xa} fill="url(#cd-trend-fade-paint)"></rect>
    </mask>`,h=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_trend"),names:o.map(e=>e.entity.name).join(", ")}),p=t=>{const a=o.filter(e=>e.secondary===t),r=Mb(a);if(!r)return Z;const i=t?n.secondary:n.primary,s=i.min&&!i.min.soft?i.min.value:r[0],l=i.max&&!i.max.soft?i.max.value:r[1],c=a[0].entity,d=t=>ur(dr(t,c.decimals,e.hass),c.unit);return B`<div class="trend-labels ${t?"secondary":"primary"}" style="--series:${a[0].current}">
      <span>${d(l)}</span><span>${d(s)}</span>
    </div>`},m="never"===n.labels?Z:B`<div class="trend-labels-wrap labels-${n.labels}">${p(!1)}${p(!0)}</div>`,f=a&&!i&&a[o[0].index]?B`<div class="crosshair" style="left:${zb(l(a[o[0].index].t)/Ga)}"></div>`:Z,g=a&&!i?c.map(({series:e,y:t})=>{const o=a[e.index];if(!o||null===o.v||!1===e.own.show_points)return Z;const n=t(o.v)/Xa;if(!(n>=0&&n<=1))return Z;const r=e.color??Ce(Te(o.v,e.entity.bands).color);return B`<span
            class="hover-dot"
            style="left:${zb(l(o.t)/Ga)};top:${zb(n)};background:${r}"
          ></span>`}):Z,v=a&&i&&a[o[0].index]?(()=>{const e=a[o[0].index];return void 0===e.start||void 0===e.end?Z:B`<div
            class="bar-hover"
            style="left:${zb(l(e.start)/Ga)};width:${zb((l(e.end)-l(e.start))/Ga)}"
          ></div>`})():Z,y=Yr(e.raw)?Xr(e,t.range,o.map(e=>e.points.filter(e=>!e.carried))):void 0;return B`<div
    class="trend-graph ${y?"hoverable":""}"
    style=${r}
    @pointerdown=${y?.move}
    @pointermove=${y?.move}
    @pointerleave=${y?.leave}
    @pointercancel=${y?.leave}
  >
    ${lr(d,h,u)} ${i?function(e,t,o){const n=e.length,a=e.flatMap(({series:e,y:a},r)=>{const i=Math.min(Xa,Math.max(0,a(0)));return e.points.filter(e=>null!==e.v&&!e.carried&&void 0!==e.start&&void 0!==e.end).map(s=>{const l=t(s.start)/Ga,c=(t(s.end)-t(s.start))/Ga,d=Math.min(Xa,Math.max(0,a(s.v))),u=d>i,h=e.color??Ce(Te(s.v,e.entity.bands).color),p=`(${zb(c)} - ${o}px) / ${n}`;return B`<div
          class="trend-col ${u?"down":""}"
          style="left:calc(${zb(l)} + ${o/2}px + ${r} * ${p});width:max(1px, calc(${p}));
            top:${zb(Math.min(d,i)/Xa)};height:${zb(Math.abs(i-d)/Xa)};background:${h}"
        ></div>`})});return B`<div class="trend-cols">${a}</div>`}(c,l,n.barSpacing):Z} ${m} ${v}
    ${f} ${"never"===n.points?Z:g}
  </div>`}(e,n,s,t,l);return B`<div class="trend ${t.group?"group":""} ${"none"===t.graph?"no-graph":""}">
    <div class="trend-top">
      ${u} ${b===Z?Z:B`<div class="trend-nav">${b}</div>`} ${g}
      ${jb(r,t,e,"history"===n.source&&!n.group&&0===t.pointsPerHour)}
      ${y}
    </div>
    ${x}
  </div>`}},Nb=["bars","gauges","history","totals","compare","distribution"];function Tb(e){return"chart"===e.layout}const Ob={bar:Zs,thin:Bu,segmented:Iu,tank:Ru,ring:Lu,needle:Xd,arc:Nu,line:Wc,column:fc,area:Os,combined:od,pie:ku,rings:Du,pictograph:vu,waffle:Xu,histogram:Pd,scatter:Uu,bubble:Zl,heatmap:kd,box:xl,funnel:rh,radar:Th,polar_area:Uh,treemap:ip,sunburst:kp,icicle:Mp,grouped_bars:Up,bullet:qp,lollipop:Gp,waterfall:am,slope:fm,dumbbell:jm,range_area:Pm,sparkline:Vm,streamgraph:sf,candlestick:vf,violin:rg,beeswarm:yg,sankey:Fg,timeline:rv,climate:Sv,wind_rose:Kv,day_clock:Ky,trend:Lb},Fb="important",Pb=" !"+Fb,Db=me(class extends fe{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const n=e[o];return null==n?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)null==t[n]&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in t){const e=t[n];if(null!=e){this.ft.add(n);const t="string"==typeof e&&e.endsWith(Pb);n.includes("-")||t?o.setProperty(n,t?e.slice(0,-11):e,t?Fb:""):o[n]=e}}return V}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ub{constructor(e){this.host=e,e.addController(this)}hostConnected(){var e;this.stop=(e=()=>this.host.requestUpdate(),"undefined"==typeof window?()=>{}:(window.addEventListener(Re,e),()=>window.removeEventListener(Re,e)))}hostDisconnected(){this.stop?.(),this.stop=void 0}}const Hb=Object.keys(Fe),Ib=Object.keys(Ee),Rb="custom",Bb={text:{}},qb={entity:{domain:["sensor","input_number","number"]}};function Vb(e){return"string"==typeof e&&""!==e.trim()&&!Number.isFinite(Number(e))}const Zb={icon:{}};function Wb(e){return void 0===e?"none":Hb.find(t=>Fe[t]&&Jo(Fe[t],e))??"custom"}function Yb(e){return Ib.includes(e)}class Gb extends le{constructor(){super(),this.languageController=new Ub(this),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(e){e.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(e){const t=this.hass?.states[e]?.state,o=void 0===t||""===t.trim()?NaN:Number(t);return Number.isFinite(o)?o:void 0}_t(e){return Ze(this.hass,e)}_getSelectors(){const e=`${Ve(this.hass)}|${this.unit??""}`;if(this._selectors?.key===e)return this._selectors;const t=Hb.map(e=>({value:e,label:this._t(`editor_preset_${e}`)})),o=e=>({select:{mode:"dropdown",options:e}});return this._selectors={key:e,preset:o(t),presetCustom:o([...t,{value:Rb,label:this._t("editor_preset_custom")}]),color:o([...Ib,Rb].map(e=>({value:e,label:this._t(`editor_color_${e}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e&&e.length?e:void 0}}))}_presetChanged(e){e.stopPropagation();const t=e.detail?.value;if(!t||t===Rb||!Hb.includes(t))return;if(t===Wb(this.bands))return;const o=Fe[t];this._emit(o?structuredClone(o):void 0)}_updateBand(e,t,o){const n=[...this.bands??[]],a={...n[e]};null==o||""===o?delete a[t]:a[t]=o,n[e]=a,this._emit(n)}_fromChanged(e,t){t.stopPropagation();const o=Number(t.detail?.value);""!==t.detail?.value&&null!=t.detail?.value&&Number.isFinite(o)&&this._updateBand(e,"from",o)}_fromEntityChanged(e,t){t.stopPropagation();const o=t.detail?.value;"string"==typeof o&&""!==o&&this._updateBand(e,"from",o)}_toggleFromMode(e){const t=this.bands?.[e]?.from,o=new Set(this._entityOpen);Vb(t)?this._updateBand(e,"from",this._entityValue(t)??0):o.delete(e)||o.add(e),this._entityOpen=o}_colorChanged(e,t){t.stopPropagation();const o=t.detail?.value,n=this.bands?.[e]?.color??"primary";if(!o)return;const a=new Set(this._customOpen);o!==Rb?(a.delete(e),this._customOpen=a,o!==n&&this._updateBand(e,"color",o)):Yb(n)&&(this._customOpen=a.add(e))}_customColorChanged(e,t){t.stopPropagation();const o="string"==typeof t.detail?.value?t.detail.value.trim():"";if(!o)return;const n=new Set(this._customOpen);n.delete(e),this._customOpen=n,this._updateBand(e,"color",o)}_iconChanged(e,t){t.stopPropagation(),this._updateBand(e,"icon",t.detail?.value)}_labelChanged(e,t){t.stopPropagation(),this._updateBand(e,"label",t.detail?.value)}_removeBand(e){const t=[...this.bands??[]];t.splice(e,1),this._emit(t)}_addBand(){const e=[...this.bands??[]],t=e[e.length-1]?.from,o="number"==typeof t?t:Vb(t)?this._entityValue(t)??NaN:"string"==typeof t&&""!==t.trim()?Number(t):NaN;e.push({from:Number.isFinite(o)?o+10:0,color:"primary"}),this._emit(e)}_renderBand(e,t,o){const n=!Yb(e.color)||this._customOpen.has(t),a=Vb(e.from)?e.from:void 0,r=void 0!==a||this._entityOpen.has(t);return B`<div class="band">
      <span class="swatch" style=${Db({"--swatch":Ce(e.color)})}></span>
      <ha-selector
        .required=${!1}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${o.from}
        .value=${void 0!==a?this._entityValue(a):e.from}
        .disabled=${r}
        @value-changed=${e=>this._fromChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!0}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${o.color}
        .value=${n?Rb:e.color}
        @value-changed=${e=>this._colorChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${Bb}
        .value=${e.label??""}
        @value-changed=${e=>this._labelChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${Zb}
        .value=${e.icon??""}
        @value-changed=${e=>this._iconChanged(t,e)}
      ></ha-selector>
      <ha-icon-button
        class="from-mode"
        .path=${r?"M4,17V9H2V7H6V17H4M22,15C22,16.11 21.1,17 20,17H16V15H20V13H18V11H20V9H16V7H20A2,2 0 0,1 22,9V10.5A1.5,1.5 0 0,1 20.5,12A1.5,1.5 0 0,1 22,13.5V15M14,15V17H8V13C8,11.89 8.9,11 10,11H12V9H8V7H12A2,2 0 0,1 14,9V11C14,12.11 13.1,13 12,13H10V15H14Z":"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"}
        .label=${this._t(r?"editor_band_from_number":"editor_band_from_entity")}
        aria-pressed=${r?"true":"false"}
        @click=${()=>this._toggleFromMode(t)}
      ></ha-icon-button>
      <ha-icon-button
        class="remove"
        .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
        .label=${this._t("editor_remove_band")}
        @click=${()=>this._removeBand(t)}
      ></ha-icon-button>
      ${r?B`<ha-selector
              .required=${!1}
              class="from-entity"
              data-role="from-entity"
              .hass=${this.hass}
              .label=${this._t("editor_band_from_entity_label")}
              .selector=${qb}
              .value=${a??""}
              @value-changed=${e=>this._fromEntityChanged(t,e)}
            ></ha-selector>`:Z}
      ${n?B`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${Bb}
              .value=${Yb(e.color)?Ce(e.color):e.color}
              @value-changed=${e=>this._customColorChanged(t,e)}
            ></ha-selector>`:Z}
    </div>`}render(){const e=this._getSelectors(),t=Wb(this.bands);return B`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${t===Rb?e.presetCustom:e.preset}
        .value=${t}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((t,o)=>this._renderBand(t,o,e))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}Gb.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},Gb.styles=r`
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",Gb);const Xb={number:{mode:"box",step:"any"}},Jb={entity:{domain:["sensor","input_number","number"]}};function Kb(e){return null==e||""===e?"default":"number"==typeof e||""!==e.trim()&&Number.isFinite(Number(e))?"number":"entity"}class Qb extends le{constructor(){super(...arguments),this.languageController=new Ub(this)}willUpdate(e){e.has("value")&&"default"!==Kb(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const e=(e,t)=>Ze(this.hass,e,t),t=[{value:"default",label:e("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:e("editor_limit_number")},{value:"entity",label:e("editor_limit_entity")}],o=t.map(e=>e.label).join("|");return this._modeSelector?.key!==o&&(this._modeSelector={key:o,selector:{select:{mode:"dropdown",options:t}}}),this._modeSelector.selector}get _currentMode(){return this._mode??Kb(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e}}))}_modeChanged(e){e.stopPropagation();const t=e.detail?.value;t&&t!==this._currentMode&&(this._mode=t,void 0!==this.value&&this._emit(void 0))}_numberChanged(e){e.stopPropagation();const t=e.detail?.value,o="number"==typeof t?t:""===t||null==t?NaN:Number(t);this._mode="number",this._emit(Number.isFinite(o)?o:void 0)}_entityChanged(e){e.stopPropagation();const t=e.detail?.value;this._mode="entity",this._emit("string"==typeof t&&""!==t?t:void 0)}render(){const e=e=>Ze(this.hass,e),t=this._currentMode;return B`<ha-selector
        .required=${!0}
        data-role="mode"
        .hass=${this.hass}
        .label=${this.label}
        .selector=${this._modeSelectorFor()}
        .value=${t}
        @value-changed=${this._modeChanged}
      ></ha-selector>
      ${"number"===t?B`<ha-selector
              .required=${!1}
              data-role="number"
              .hass=${this.hass}
              .label=${e("editor_limit_number")}
              .selector=${Xb}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===t?B`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${e("editor_limit_entity")}
                .selector=${Jb}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:Z}`}}Qb.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},Qb.styles=r`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",Qb);const ex=["min","max","target"];function tx(e,t,o){const n=t&&!o?e?.states[t]?.attributes?.unit_of_measurement:void 0;return"string"==typeof n&&n?n:void 0}class ox extends le{constructor(){super(),this.languageController=new Ub(this),this._computeLabel=e=>this._t(`editor_${e.name}`),this._expanded=new Set}_t(e,t){return Ze(this.hass,e,t)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(e){e.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e.entities??[]}}))}_set(e,t,o){this._emit(po(this._asConfig,e,t,o))}_move(e,t){const o=new Set;for(const n of this._expanded)o.add(n===e?t:n===t?e:n);this._expanded=o,this._emit(function(e,t,o){const n=[...e.entities??[]];if(t<0||t>=n.length||t===o)return e;const[a]=n.splice(t,1);return n.splice(Math.max(0,Math.min(o,n.length)),0,a),{...e,entities:n}}(this._asConfig,e,t))}_remove(e){const t=new Set;for(const o of this._expanded)o!==e&&t.add(o>e?o-1:o);this._expanded=t,this._emit(function(e,t){const o=[...e.entities??[]];return t<0||t>=o.length?e:(o.splice(t,1),{...e,entities:o})}(this._asConfig,e))}_toggle(e){const t=new Set(this._expanded);t.delete(e)||t.add(e),this._expanded=t}_add(e){e.stopPropagation();const t=e.detail?.value;"string"==typeof t&&""!==t&&(e.target.value="",this._emit(function(e,t){return{...e,entities:[...e.entities??[],t]}}(this._asConfig,t)))}_formChanged(e,t,o){o.stopPropagation();const n=this.entities?.[e];if(void 0===n)return;const a="string"==typeof n?{entity:n}:n,r=Qo(a,t,o.detail?.value??{});if(r===a)return;const i=[...this.entities??[]],s=Object.keys(r);i[e]=1===s.length&&"entity"===s[0]?r.entity:r,this._emit({type:"",entities:i})}_rowLabel(e){const t=this.hass?.states[e];return t?{text:t.attributes.friendly_name||e,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:e}),missing:!0}:{text:e,missing:!1}}_form(e,t,o,n,a){return B`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${Ko(o,a)}
      .schema=${n}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(t,a,e)}
    ></ha-form>`}_renderOverrides(e,t){const o=e=>t=>{t.stopPropagation(),e(t.detail?.value)};return B`<div class="overrides">
      ${this._form("entity-attribute",t,e,function(e){let t=Io.get(e);return t||(t=[{name:"attribute",selector:{attribute:{entity_id:e}}}],Io.set(e,t)),t}(e.entity),Lo)}
      ${this._form("entity-text",t,e,Ho,jo)}
      ${this.chartFields?this._form("entity-chart",t,e,this.chartFields.schema,this.chartFields.fields):Z}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${e.icon??""}
        @value-changed=${o(e=>this._set(t,"icon",e))}
      ></ha-icon-picker>
      ${ex.map(n=>B`<cd-limit-field
            data-limit=${n}
            .hass=${this.hass}
            .label=${this._t(`editor_${n}`)}
            .value=${e[n]}
            .defaultLabel=${this._t("editor_card_setting")}
            @value-changed=${o(e=>this._set(t,n,e))}
          ></cd-limit-field>`)}
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${e.severity}
        .unit=${e.unit??this.unit??tx(this.hass,e.entity,e.attribute)}
        @value-changed=${o(e=>this._set(t,"severity",e))}
      ></cd-bands-editor>
      ${this._form("entity-actions",t,e,Uo,Po)}
    </div>`}_renderRow(e,t,o){const n=ho(e),a="string"==typeof e?{entity:e}:e,r=this._rowLabel(n),i=this._expanded.has(t);return B`<div class="entity">
      <span class="label ${r.missing?"missing":""}">${r.text}</span>
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${io(n)}
          allow-custom-entity
          @value-changed=${e=>{e.stopPropagation(),this._set(t,"entity",e.detail?.value),this.requestUpdate()}}
        ></ha-entity-picker>
        <ha-icon-button
          class="up"
          .path=${"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
          .label=${this._t("editor_move_up")}
          .disabled=${0===t}
          @click=${()=>this._move(t,t-1)}
        ></ha-icon-button>
        <ha-icon-button
          class="down"
          .path=${"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
          .label=${this._t("editor_move_down")}
          .disabled=${t===o-1}
          @click=${()=>this._move(t,t+1)}
        ></ha-icon-button>
        <ha-icon-button
          class="remove"
          .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
          .label=${this._t("editor_remove_entity")}
          @click=${()=>this._remove(t)}
        ></ha-icon-button>
        <ha-icon-button
          class="expand"
          .path=${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
          .label=${this._t(i?"editor_hide_options":"editor_show_options")}
          aria-expanded=${i?"true":"false"}
          @click=${()=>this._toggle(t)}
        ></ha-icon-button>
      </div>
      ${i?this._renderOverrides(a,t):Z}
    </div>`}render(){const e=this.entities??[];return B`${e.map((t,o)=>this._renderRow(t,o,e.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}ox.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chartFields:{attribute:!1},_expanded:{state:!0}},ox.styles=r`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",ox);const nx=[{name:"export",path:["export"],default:!1}],ax=["treemap","sunburst","icicle","radar"],rx=["ring","arc","needle"];class ix extends le{constructor(){super(...arguments),this.languageController=new Ub(this),this._label=e=>Ze(this.hass,e),this._computeLabel=e=>Ze(this.hass,`editor_${e.name}`),this._computeRuleLabel=e=>Ze(this.hass,`editor_rule_${e.name.slice(e.name.indexOf("_")+1)}`)}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]}),o=t?.constructor;await(o?.getConfigElement?.())}catch{}}()}_commit(e){this._config=e,function(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}(this,e)}_formChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{};this._commit(Qo(this._config,e,o))}_form(e,t,o){return B`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${Ko(this._config,o)}
      .schema=${t}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(o,e)}
    ></ha-form>`}_panel(e,t){return B`<ha-expansion-panel .header=${this._label(`editor_section_${e}`)} outlined>
      <div class="panel section-${e}">${t}</div>
    </ha-expansion-panel>`}_subChanged(e,t){t.stopPropagation(),this._config&&this._commit(uo(this._config,e,t.detail?.value))}_chartFields(){const e=Ob[this._config?.style??"bar"];return e&&Tb(e)&&this._config?e.entityFields?.(this.hass,this._config):void 0}renderEntities(){return B`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        @value-changed=${e=>this._subChanged(["entities"],e)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(e){const t=this._config?.[e],o={};if(!t||"object"!=typeof t)return o;for(const[n,a]of Object.entries(t))o[`${e}_${n}`]=Array.isArray(a)?a:[a];return o}_ruleChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{},n=this._ruleData(e);let a=this._config;for(const r of Vo[e]){const t=`${e}_${r}`,i=Array.isArray(o[t])?o[t]:[];Jo(n[t]??[],i)||(a=uo(a,[e,r],i.length?i:void 0))}a!==this._config&&this._commit(a)}_ruleForm(e){return B`<div class="rules-heading">${this._label(`editor_${e}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${e}_help`)}</p>
      <ha-form
        data-section=${e}
        .hass=${this.hass}
        .data=${this._ruleData(e)}
        .schema=${Yo(e,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${t=>this._ruleChanged(e,t)}
      ></ha-form>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([e,t])=>B`<cd-limit-field
          data-limit=${e}
          .hass=${this.hass}
          .label=${this._label(`editor_${e}`)}
          .value=${this._config?.[e]}
          .defaultLabel=${t}
          @value-changed=${t=>this._subChanged([e],t)}
        ></cd-limit-field>`)}renderColours(){return B`${this._toggles(zo)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${e=>this._subChanged(["severity"],e)}
      ></cd-bands-editor>`}_firstEntityUnit(){const e=this._config?.entities?.[0];return"string"==typeof e?tx(this.hass,e):e?.unit??tx(this.hass,e?.entity,e?.attribute)}_selectStyle(e){if(!this._config)return;let t=uo(this._config,["style"],"bar"===e?void 0:e);const o=[].concat(t.group_by??[]),n=o.length>0&&o.every(e=>ih.includes(e));o.length>0&&n!==ax.includes(e)&&(t=uo(t,["group_by"],void 0)),this._commit(t)}renderStyle(){const e=this._config?.style??"bar";return B`${Nb.map(t=>{const o=Xt.filter(e=>Ob[e].group===t);return o.length?B`<div class="style-group">${this._label(`editor_group_${t}`)}</div>
        <div class="styles" data-group=${t}>
          ${o.map(t=>{const o=Ob[t],n=Tb(o)?B`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${o.thumbnail()}
                </svg>`:sn(t);return B`<button
              type="button"
              class="style"
              data-style=${t}
              aria-pressed=${e===t?"true":"false"}
              @click=${()=>this._selectStyle(t)}
            >
              ${n}<span>${this._label(`editor_style_${t}`)}</span>
            </button>`})}
        </div>`:Z})}
    ${rx.includes(e)?B`<p class="gauge-help">${this._label("editor_gauge_help")}</p>
            ${this._form("gauge",function(e,t,o){const n="text"===o,a=`${Ve(e)}|${t}|${n}`;let r=Co.get(a);if(!r){const o={number:{min:-360,max:360,step:1,mode:"box",unit_of_measurement:"°"}};r=[{type:"grid",name:"",schema:[{name:"start_angle",selector:o},{name:"end_angle",selector:o}]},{name:"center",selector:{select:{mode:"dropdown",options:["value","band","name","text","none"].map(t=>({value:t,label:Ze(e,`editor_center_mode_${t}`)}))}}},...n?[{name:"center_text",selector:{text:{}}}]:[],..."needle"===t?[{name:"tick_labels",selector:{boolean:{}}}]:[]],Co.set(a,r)}return r}(this.hass,e,this._config?.center),Eo)}`:Z}`}renderChart(){const e=Ob[this._config?.style??"bar"];return e&&Tb(e)&&e.editor&&this._config?this._panel("chart",e.editor({hass:this.hass,config:this._config,commit:e=>this._commit(e)})):Z}renderDisplay(){const e=Tb(Ob[this._config?.style??"bar"]??Ob.bar);return B`${this._toggles(e?[...Mo,...nx]:Mo)}
    ${this._form("display",function(e){const t=Ve(e);return Go?.language!==t&&(Go={language:t,schema:qo(e)}),Go.schema}(this.hass),So)}`}_toggles(e){const t=Ko(this._config,e);return B`<div class="toggles">
      ${e.map(({name:o})=>{const n=this._label(`editor_${o}`),a=!0===t[o];return B`<div class="toggle">
          <span @click=${()=>this._toggle(e,o,!a)}>${n}</span
          ><ha-switch
            data-name=${o}
            aria-label=${n}
            .checked=${io(a)}
            @change=${t=>this._toggle(e,o,t.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(e,t,o){if(!this._config)return;const n=Ko(this._config,e);this._commit(Qo(this._config,e,{...n,[t]:o}))}renderActions(){return this._form("actions",Uo,Ao)}render(){return this._config?B`<div class="title">${this._form("title",Do,ko)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:Z}}ix.properties={hass:{attribute:!1},_config:{state:!0}},ix.styles=r`
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
    .rules-help,
    .gauge-help {
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",ix);const sx=r`
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
`;console.info("%c CHARTDECK %c 2.1.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const lx={rows:16,tiles:8};function cx(e){const t=lx[e.layout];return Math.max(1,Math.floor((368+t)/((e.minColumnWidth??0)+t)))}class dx extends le{constructor(){super(...arguments),this.languageController=new Ub(this),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(e){const t=Object.values(e?.states??{}).filter(e=>e.entity_id.startsWith("sensor.")&&""!==e.state.trim()&&Number.isFinite(Number(e.state))),o=e=>"battery"===e.attributes?.device_class;return t.sort((e,t)=>o(e)!==o(t)?o(e)?-1:1:e.entity_id<t.entity_id?-1:e.entity_id>t.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:t.slice(0,3).map(e=>e.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(e){const t=function(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");const t=e.style??"bar";if(!Xt.includes(t))throw new Error(`Unknown style "${String(t)}". Use one of: ${Xt.join(", ")}`);const o=e.sort??"none";if(!Kt.includes(o))throw new Error(`Unknown sort "${String(o)}". Use one of: ${Kt.join(", ")}`);if(void 0!==e.entities&&!Array.isArray(e.entities))throw new Error('"entities" must be a list');const n=(e.entities??[]).map((t,o)=>ro(t,e,o)),a={name:!0,value:!0,icon:!0,target:!0,legend:!1,...e.show},r=to(e.columns,"columns",1),i=to(e.limit,"limit",1),s=At(e.include,"include"),l=At(e.exclude,"exclude");s&&ro("sensor.chartdeck_check",e,0);const c={style:t,entities:n,hideUnavailable:!0===e.hide_unavailable,cardOptions:e,show:a,sort:o,animate:!1!==e.animate,colorIcon:!0===e.color_icon,legendBands:oo(e.severity)??Jt};return void 0!==e.title&&(c.title=e.title),void 0!==r&&(c.columns=r),void 0!==i&&(c.limit=i),s&&(c.include=s),l&&(c.exclude=l),c}(e);!function(e){if(void 0!==e.export&&"boolean"!=typeof e.export)throw new Error('"export" must be true or false')}(e);const o=Ob[t.style];if(Tb(o)&&o.validate?.(e),this._watched=function(e){const t=new Set;for(const o of e.entities){t.add(o.entity);for(const e of[o.min,o.max,o.target,...o.severity.map(e=>e.from)])"string"==typeof e&&""!==e&&t.add(e)}for(const o of e.legendBands)"string"==typeof o.from&&t.add(o.from);return t}(t),Tb(o))for(const n of o.watch?.(e)??[])this._watched.add(n);this._config&&this._config.style!==t.style&&this._disconnectStyle(),this._config=t}get _styleName(){return this._config?.style??"bar"}get _style(){return Ob[this._styleName]}_legend(e){const t=this._config;if(!t?.show.legend||0===this._count())return[];const o=e?.decimals??1;return Oe(Bs(t.legendBands,this.hass),e=>dr(e,o,this.hass),e?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const e=this._config;if(!e)return 0;const t=this._style,o=16+(e.title?73:0)+(this._legend().length>0?32:0);if(Tb(t))return o+t.height;const n=this._count(),a=void 0!==e.columns?Math.min(e.columns,cx(t)):"rows"===t.layout?1:Math.min(n,t.tilesPerRow??3,cx(t));return o+(0===n?0:Math.ceil(n/Math.max(1,a)))*t.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const e=this._count();if(Tb(this._style))return{columns:12,min_columns:6,min_rows:2,...this._style.gridOptions,rows:"auto"};const t="rows"===this._style.layout;return{columns:t||e<=1?6:12,rows:"auto",min_columns:t?6:3,min_rows:1}}shouldUpdate(e){if(0===e.size)return!0;if([...e.keys()].some(e=>"hass"!==e))return!0;if(!e.has("hass"))return!1;const t=e.get("hass"),o=this.hass;if(!t||!o)return!0;for(const n of this._watched)if(t.states[n]!==o.states[n])return!0;if(this._config?.include){const e=Vs(this._config,o);if(e.length!==this._matched.length||e.some((e,t)=>e!==this._matched[t]))return!0;for(const n of e)if(t.states[n]!==o.states[n])return!0}return t.themes?.darkMode!==o.themes?.darkMode||t.themes?.theme!==o.themes?.theme||t.locale!==o.locale}willUpdate(){const e=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",e),(e||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const e=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,16)}updated(){this._scheduleReady(),this._syncActions(),function(e){const t=e.shadowRoot?.querySelector(".export.titled"),o=e.shadowRoot?.querySelector("ha-card");if(!t||!o)return;const n=()=>{const e=o.shadowRoot?.querySelector(".card-header")??[...o.children].find(e=>e.classList.contains("card-header"));if(!e?.offsetHeight)return;const n=getComputedStyle(e),a=parseFloat(n.paddingTop)||0,r=e.offsetHeight-a-(parseFloat(n.paddingBottom)||0),i=t.offsetHeight||32,s=e.offsetTop+a+r/2-i/2,l=Math.max(4,Math.round(Math.min(s,e.offsetTop+e.offsetHeight-i)));t.style.top=`${l}px`};n(),o.updateComplete?.then(n)}(this)}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const e=this._config?Ob[this._config.style]:void 0;e&&Tb(e)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const e=this._config?Ob[this._config.style]:void 0;e&&Tb(e)&&e.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle(),function(e){const t=bt.get(e);t&&(t.outside&&window.removeEventListener("pointerdown",t.outside,!0),void 0!==t.statusTimer&&clearTimeout(t.statusTimer),bt.delete(e))}(this);for(const e of this._detachers.values())e();this._detachers.clear()}_syncActions(){const e=this.shadowRoot;if(!e)return;const t=new Set(e.querySelectorAll(".entity"));for(const[o,n]of this._detachers)t.has(o)||(n(),this._detachers.delete(o));for(const o of t)this._detachers.has(o)||this._detachers.set(o,Ae(o,()=>this._items[Number(o.dataset.index)].config))}_renderEntity(e,t,o,n){const a=this._config,r=Se(e.config),i=je(e.band.color),s=`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${i.start};--c-end:${i.end}`;return B`<div
      class="entity ${r?"interactive":""} ${e.available?"":"unavailable"} ${a.colorIcon&&e.available?"icon-band":""}"
      data-index=${t}
      role="meter"
      aria-valuenow=${e.available?String(e.value):Z}
      aria-valuemin=${e.min}
      aria-valuemax=${e.max}
      aria-label=${e.label}
      tabindex=${r?0:Z}
      style=${s}
    >
      ${o.render(e,{show:a.show,hass:n})}
    </div>`}render(){const e=this._config;if(!e)return Z;const t=this.hass,o=this._style;let n,a,r;const i=t?function(e,t){const o=Vs(e,t).map((t,o)=>ro(t,e.cardOptions,o)),n=[...e.entities,...o].map(e=>qs(e,t));return e.hideUnavailable?n.filter(e=>e.available):n}(e,t):[];if(this._matched=t?Vs(e,t):[],0!==e.entities.length||e.include)if(t)if(0===i.length)this._items=[],n=B`<div class="hint">${Ze(t,e.include?"no_matches":"none_available")}</div>`;else{a=i[0];const s=new Map,l=new Set;i.forEach((e,t)=>{s.set(e,l.has(e.entityId)?`${e.entityId}#${t}`:e.entityId),l.add(e.entityId)}),this._items=function(e,t){if("none"===t)return[...e];const o="ascending"===t?1:-1;return e.map((e,t)=>({item:e,index:t})).sort((e,t)=>{if(e.item.available!==t.item.available)return e.item.available?-1:1;if(e.item.available){const n=(e.item.position-t.item.position)*o;if(0!==n)return n}return e.index-t.index}).map(e=>e.item)}(i,e.sort).slice(0,e.limit);const c=this._items.filter(e=>e.available).map(e=>e.display.length);if(r=c.length?Math.max(...c):void 0,Tb(o))n=B`<div class="chart">
          ${o.render({items:this._items,config:e,raw:e.cardOptions,hass:t,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const a="tiles"===o.layout,r=function(e,t){if(void 0===t)return"rows"===e.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const o=(t-1)*lx[e.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${e.minColumnWidth??0}px, 100%), calc((100% - ${o}px) / ${t} - 0.5px)), 1fr))`}(o,e.columns);n=B`<div
          class="entities layout-${o.layout} ${a&&void 0!==e.columns?"has-columns":""}"
          style=${r}
        >
          ${Me(this._items,e=>s.get(e),(e,n)=>this._renderEntity(e,n,o,t))}
        </div>`}}else this._items=[],n=Z;else this._items=[],n=B`<div class="hint">${Ze(t,"no_entities")}</div>`;const s=this._legend(a),l=Tb(o)&&t?Mt({host:this,hass:t,raw:e.cardOptions,items:this._items,content:()=>this.shadowRoot?.querySelector(".content")??null,requestUpdate:()=>this.requestUpdate()}):Z;return B`<ha-card .header=${e.title}>
      ${l}
      <div
        class="content style-${this._styleName}"
        style=${void 0===r?Z:`--cd-value-ch: ${r}`}
      >
        ${n}
      </div>
      ${s.length?B`<div class="legend">
              ${s.map(e=>B`<span class="legend-item"
                    ><span class="dot" style="background:${e.color}"></span>${e.text}</span
                  >`)}
            </div>`:Z}
    </ha-card>`}}dx.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},dx.styles=[sx,zt,...Object.values(Ob).map(e=>e.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",dx);const ux=window.customCards??=[];ux.some(e=>"chartdeck-card"===e.type)||ux.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{dx as ChartdeckCard};
//# sourceMappingURL=chartdeck-card.js.map
