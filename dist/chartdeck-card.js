/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let r=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new r(n,e,o)},i=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},_=(e,t)=>!s(e,t),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const a=n?.call(this);r?.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...d(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const e=this._$Eu(t,o);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(i(e))}else void 0!==e&&t.push(i(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((o,n)=>{if(t)o.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of n){const n=document.createElement("style"),r=e.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:v).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=n;const a=r.fromAttribute(t,e.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,t,o,n=!1,r){if(void 0!==e){const a=this.constructor;if(!1===n&&(r=this[e]),o??=a.getPropertyOptions(e),!((o.hasChanged??_)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:n,wrapped:r},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,o,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,g?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=e=>e,k=w.trustedTypes,M=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+E,A=`<${S}>`,j=document,C=()=>j.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,F="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,D=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,I=/"/g,H=/^(?:script|style|textarea|title)$/i,W=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),R=W(1),q=W(2),B=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),V=new WeakMap,Y=j.createTreeWalker(j,129);function G(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,a=0;const i=e.length-1,s=this.parts,[l,c]=((e,t)=>{const o=e.length-1,n=[];let r,a=2===t?"<svg>":3===t?"<math>":"",i=T;for(let s=0;s<o;s++){const t=e[s];let o,l,c=-1,d=0;for(;d<t.length&&(i.lastIndex=d,l=i.exec(t),null!==l);)d=i.lastIndex,i===T?"!--"===l[1]?i=O:void 0!==l[1]?i=P:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),i=D):void 0!==l[3]&&(i=D):i===D?">"===l[0]?(i=r??T,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,o=l[1],i=void 0===l[3]?D:'"'===l[3]?I:U):i===I||i===U?i=D:i===O||i===P?i=T:(i=D,r=void 0);const u=i===D&&e[s+1].startsWith("/>")?" ":"";a+=i===T?t+A:c>=0?(n.push(o),t.slice(0,c)+z+t.slice(c)+E+u):t+E+(-2===c?s:u)}return[G(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]})(e,t);if(this.el=X.createElement(l,o),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Y.nextNode())&&s.length<i;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(z)){const t=c[a++],o=n.getAttribute(e).split(E),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:i[2],strings:o,ctor:"."===i[1]?te:"?"===i[1]?oe:"@"===i[1]?ne:ee}),n.removeAttribute(e)}else e.startsWith(E)&&(s.push({type:6,index:r}),n.removeAttribute(e));if(H.test(n.tagName)){const e=n.textContent.split(E),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],C()),Y.nextNode(),s.push({type:2,index:++r});n.append(e[t],C())}}}else if(8===n.nodeType)if(n.data===S)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(E,e+1));)s.push({type:7,index:r}),e+=E.length-1}r++}}static createElement(e,t){const o=j.createElement("template");return o.innerHTML=e,o}}function K(e,t,o=e,n){if(t===B)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const a=N(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=K(e,r._$AS(e,t.values),r,n)),t}let J=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??j).importNode(t,!0);Y.currentNode=n;let r=Y.nextNode(),a=0,i=0,s=o[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new Q(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new re(r,this,e)),this._$AV.push(t),s=o[++i]}a!==s?.index&&(r=Y.nextNode(),a++)}return Y.currentNode=j,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),N(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=X.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new J(n,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new X(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new Q(this.O(C()),this.O(C()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Z}_$AI(e,t=this,o,n){const r=this.strings;let a=!1;if(void 0===r)e=K(this,e,t,0),a=!N(e)||e!==this._$AH&&e!==B,a&&(this._$AH=e);else{const n=e;let i,s;for(e=r[0],i=0;i<r.length-1;i++)s=K(this,n[o+i],t,i),s===B&&(s=this._$AH[i]),a||=!N(s)||s!==this._$AH[i],s===Z?e=Z:e!==Z&&(e+=(s??"")+r[i+1]),this._$AH[i]=s}a&&!n&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class ne extends ee{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??Z)===B)return;const o=this._$AH,n=e===Z&&o!==Z||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==Z&&(o===Z||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ae={I:Q},ie=w.litHtmlPolyfillSupport;ie?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let le=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new Q(t.insertBefore(C(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};le._$litElement$=!0,le.finalized=!0,se.litElementHydrateSupport?.({LitElement:le});const ce=se.litElementPolyfillSupport;ce?.({LitElement:le}),(se.litElementVersions??=[]).push("4.2.2");
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
 */const{I:ge}=ae,ye=e=>e,ve=()=>document.createComment(""),_e=(e,t,o)=>{const n=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=n.insertBefore(ve(),r),a=n.insertBefore(ve(),r);o=new ge(t,a,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,i=a!==e;if(i){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||i){let e=o._$AA;for(;e!==t;){const t=ye(e).nextSibling;ye(n).insertBefore(e,r),e=t}}}return o},be=(e,t,o=e)=>(e._$AI(t,o),e),xe={},we=(e,t=xe)=>e._$AH=t,$e=e=>{e._$AR(),e._$AA.remove()},ke=(e,t,o)=>{const n=new Map;for(let r=t;r<=o;r++)n.set(e[r],r);return n},Me=me(class extends fe{constructor(e){if(super(e),e.type!==ue)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const r=[],a=[];let i=0;for(const s of e)r[i]=n?n(s,i):i,a[i]=o(s,i),i++;return{values:a,keys:r}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){const r=(e=>e._$AH)(e),{values:a,keys:i}=this.dt(t,o,n);if(!Array.isArray(r))return this.ut=i,a;const s=this.ut??=[],l=[];let c,d,u=0,h=r.length-1,p=0,m=a.length-1;for(;u<=h&&p<=m;)if(null===r[u])u++;else if(null===r[h])h--;else if(s[u]===i[p])l[p]=be(r[u],a[p]),u++,p++;else if(s[h]===i[m])l[m]=be(r[h],a[m]),h--,m--;else if(s[u]===i[m])l[m]=be(r[u],a[m]),_e(e,l[m+1],r[u]),u++,m--;else if(s[h]===i[p])l[p]=be(r[h],a[p]),_e(e,r[u],r[h]),h--,p++;else if(void 0===c&&(c=ke(i,p,m),d=ke(s,u,h)),c.has(s[u]))if(c.has(s[h])){const t=d.get(i[p]),o=void 0!==t?r[t]:null;if(null===o){const t=_e(e,r[u]);be(t,a[p]),l[p]=t}else l[p]=be(o,a[p]),_e(e,r[u],o),r[t]=null;p++}else $e(r[h]),h--;else $e(r[u]),u++;for(;p<=m;){const t=_e(e,l[m+1]);be(t,a[p]),l[p++]=t}for(;u<=h;){const e=r[u++];null!==e&&$e(e)}return this.ut=i,we(e,l),B}}),ze=e=>!!e&&"none"!==e.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee(e){return ze(e.tap_action)||ze(e.hold_action)||ze(e.double_tap_action)}function Se(e,t){let o,n,r=0,a=0,i=!1,s=!1;const l=o=>{const n=t(),r="tap"===o?n.tap_action:"hold"===o?n.hold_action:n.double_tap_action;ze(r)&&e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:n,action:o}}))},c=()=>{void 0!==o&&clearTimeout(o),o=void 0},d=e=>{const n=e;n.button>0||(i=!0,s=!1,r=n.clientX,a=n.clientY,c(),ze(t().hold_action)&&(o=setTimeout(()=>{o=void 0,s=!0,l("hold")},500)))},u=e=>{if(!i)return;const t=e;Math.hypot(t.clientX-r,t.clientY-a)>10&&(c(),i=!1)},h=()=>{c(),i=!1},p=()=>{const e=i;c(),i=!1,e&&!s?ze(t().double_tap_action)?void 0!==n?(clearTimeout(n),n=void 0,l("double_tap")):n=setTimeout(()=>{n=void 0,l("tap")},250):l("tap"):s=!1},m=e=>{const t=e;t.repeat||"Enter"!==t.key&&" "!==t.key||(" "===t.key&&t.preventDefault(),l("tap"))},f=e=>{ze(t().hold_action)&&e.preventDefault()};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",u),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",h),e.addEventListener("pointerleave",h),e.addEventListener("keydown",m),e.addEventListener("contextmenu",f),()=>{c(),void 0!==n&&clearTimeout(n),n=void 0,e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",h),e.removeEventListener("pointerleave",h),e.removeEventListener("keydown",m),e.removeEventListener("contextmenu",f)}}const Ae={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function je(e){if(Object.prototype.hasOwnProperty.call(Ae,e)){const{variable:t,fallback:o}=Ae[e];return`var(${t}, ${o})`}return e}function Ce(e){const t=je(e);return{start:t,end:`color-mix(in srgb, ${t} 80%, #fff)`}}const Ne=new Set(["amber"]);function Le(e){if(Object.prototype.hasOwnProperty.call(Ae,e))return Ne.has(e)?"dark":"light";const t=function(e){const t=e.trim().toLowerCase(),o=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(o){const e=o[1].length<=4?[...o[1]].map(e=>e+e).join(""):o[1],[t,n,r]=[0,2,4].map(t=>parseInt(e.slice(t,t+2),16));return[t,n,r,8===e.length?parseInt(e.slice(6,8),16)/255:1]}const n=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(t);if(n){const[e,t,o]=[n[1],n[2],n[3]].map(e=>Math.min(255,Number(e))),r=void 0===n[4]?1:Number(n[4])/(n[5]?100:1);return[e,t,o,Math.min(1,r)]}}(e);return t?t[3]<.5?"theme":function([e,t,o]){const n=e=>{const t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return.2126*n(e)+.7152*n(t)+.0722*n(o)}([t[0],t[1],t[2]])>.4?"dark":"light":"light"}function Fe(e,t){let o=t[0];for(const n of t){if(!(n.from<=e))break;o=n}return o}function Te(e,t,o){const n=o?` ${o}`:"",r=[];return e.forEach((o,a)=>{const i=e[a+1],s=je(o.color);o.label?r.push({color:s,text:o.label}):Number.isFinite(o.from)?i?r.push({color:s,text:`${t(o.from)}–${t(i.from)}${n}`}):r.push({color:s,text:`${t(o.from)}${n}+`}):i&&r.push({color:s,text:`< ${t(i.from)}${n}`})}),r}const Oe={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0};var Pe={entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_derivative_transform:"Transform",editor_derivative_transform_none:"None (readings as they are)",editor_derivative_transform_derivative:"Rate of change",editor_rolling_transform_rolling:"Rolling window",editor_rolling_window:"Window",editor_rolling_stat:"Show",editor_rolling_stat_mean:"Mean",editor_rolling_stat_median:"Median",editor_rolling_stat_min:"Lowest",editor_rolling_stat_max:"Highest",editor_rolling_raw:"Keep the readings faint behind it",editor_derivative_unit_time:"Rate per",editor_derivative_unit_time_s:"Second",editor_derivative_unit_time_min:"Minute",editor_derivative_unit_time_h:"Hour",editor_derivative_unit_time_d:"Day",editor_derivative_smoothing:"Smooth over readings",editor_derivative_smoothing_time:"Smooth over time",editor_formula_heading:"Calculate from other entities",editor_formula:"Formula",editor_formula_var:"Entity for {name}",editor_source_current:"Current values",editor_source_energy:"Energy dashboard",editor_energy_flows:"Energy flows",editor_energy_split:"Export and battery charging below the axis",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_battery:"Battery grid",battery_aria:"Battery levels: {levels}",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_gauge_help:"Angles are in degrees, clockwise from the top: -90 is the left, 90 the right. Leave them empty for the style's usual shape.",editor_start_angle:"Start angle",editor_end_angle:"End angle",editor_center:"In the middle",editor_center_mode_value:"The value",editor_center_mode_band:"The colour band's label",editor_center_mode_name:"The name",editor_center_mode_text:"My own text",editor_center_mode_none:"Nothing",editor_center_text:"Text",editor_tick_labels:"Numbers on the scale",editor_ghost:"Recent range behind the gauge",editor_ghost_off:"Off",editor_ghost_24h:"Last 24 hours",editor_ghost_7d:"Last 7 days",ghost_title_24h:"Last 24 hours: {min} to {max}, mean {mean}",ghost_title_7d:"Last 7 days: {min} to {max}, mean {mean}",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_export:"Export menu",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_badge_entity:"Entity",editor_badge_style:"Look",editor_badge_style_value:"Value with icon",editor_badge_style_sparkline:"Sparkline",editor_badge_style_ring:"Ring",editor_badge_style_thin:"Thin bar",editor_badge_attribute:"Attribute (instead of the state)",editor_badge_name:"Name",editor_badge_hours:"Hours of history",editor_badge_show_name:"Show name",editor_badge_show_icon:"Show icon",editor_badge_icon:"Icon",editor_badge_min:"Minimum",editor_badge_max:"Maximum",editor_badge_unit:"Unit",editor_badge_decimals:"Decimals",editor_badge_color:"Colour without bands",editor_badge_bands:"Colour bands",editor_badge_bands_help:"The badge takes the colour of the band its value is in, as on the card.",editor_badge_actions:"Actions",editor_badge_tap_action:"Tap action",editor_badge_hold_action:"Hold action",editor_badge_double_tap_action:"Double tap action",feature_aria:"{name}, last {hours} h: {value}",editor_feature_entity:"Entity",editor_feature_entity_helper:"Empty: the tile's entity.",editor_feature_style_column:"Columns",editor_feature_style_bar:"Bar",editor_feature_fill:"Fill below the line",editor_feature_bands_help:"The chart takes the colour of the band its value is in. Without bands it takes the tile's colour.",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours",annotation_at:"{label} at {time}",chart_calendar_all_day:"All day",chart_calendar_event:"Event",chart_calendar_more:"+{count} more",editor_orientation:"Direction",editor_orientation_horizontal:"Across",editor_orientation_vertical:"Upright",editor_value_axis:"Value labels",editor_value_grid:"Lines at each value label",editor_value_min:"Lowest value shown",editor_value_max:"Highest value shown",dist_median:"Median",dist_middle:"Middle half",dist_range:"Lowest – highest",dist_count:"Readings",editor_drill_down:"Tap a group to show what makes it up",drill_into:"{label}. Show what makes it up",drill_back:"Back to {name}",drill_top:"All",extremes_high:"High",extremes_low:"Low",extremes_average:"Avg",editor_extremes_max:"Mark the highest reading",editor_extremes_min:"Mark the lowest reading",editor_extremes_average:"Average",editor_extremes_average_none:"Don't show",editor_extremes_average_line:"Line across the chart",editor_extremes_average_figure:"Figure only",editor_extremes:"Mark highest, lowest and average",anomaly_title:"{name}: {value}, {sigma} from normal",anomaly_beyond_high:"over {limit}",anomaly_beyond_low:"under {limit}",editor_anomalies:"Mark readings far from normal",editor_anomalies_window:"Window",editor_anomalies_sigma:"How far out to mark, in standard deviations",editor_anomalies_color:"Marker colour",editor_anomalies_band:"Shade the normal band",normal_range_key:"Usual range",normal_range_percentiles:"{low}–{high} percentile",normal_range_days:"days back: {n}",normal_range_weekdays:"same weekday, weeks back: {n}",normal_range_above:"{name}: {value}, above the usual {low}–{high}",normal_range_below:"{name}: {value}, below the usual {low}–{high}",editor_normal_range:"Shade the usual range for the time of day",editor_normal_range_days:"Compare with",editor_normal_range_days_every_day:"Every day",editor_normal_range_days_same_weekday:"The same weekday",editor_normal_range_weeks:"Weeks back",editor_normal_range_low:"Low percentile",editor_normal_range_high:"High percentile",editor_normal_range_median:"Draw the median",editor_normal_range_marks:"Mark readings outside the range",editor_normal_range_color:"Marker colour",period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months",editor_color_by_shades:"Shades of one colour",editor_shade_color:"Shade colour",editor_show_percent:"Show each share as a percentage",editor_center_total:"Total",editor_center_average:"Average",editor_center_none:"Nothing",parts_total:"Total",parts_average:"Average",parts_aria:"{style} of {names}",editor_style_scatter:"Scatter",editor_style_bubble:"Bubble",editor_against:"Along the bottom",editor_against_entity:"The first entity",editor_against_time:"Time",editor_dot_size:"Dot size (px)",editor_jitter:"Jitter (px)",editor_min_size:"Smallest bubble (px)",editor_max_size:"Largest bubble (px)",editor_dot_color:"Dot colour",editor_xy_x_axis:"Labels along the bottom",scatter_needs_two:"Add a second entity. The first goes along the bottom, the others up the side.",bubble_needs_three:"Add three entities: one along the bottom, one up the side, and one for the size of each bubble.",scatter_role_x:"Across",bubble_role_size:"Size",chart_total:"Total",editor_x_min:"Lowest value across",editor_x_max:"Highest value across",editor_scatter_fit:"Fit line",editor_scatter_fit_none:"None",editor_scatter_fit_linear:"Straight line (least squares)",editor_scatter_now_point:"Ring where they are now",scatter_fit_slope:"{value} per {unit}",scatter_fit_slope_plain:"Slope {value}",scatter_fit_r2:"R² {value}",scatter_now:"Now",zoom_reset:"Reset zoom",zoom_window:"Shown: {from} to {to}",zoom_window_label:"Part of the chart shown",editor_zoom:"Zoom and pan",editor_overview:"Overview strip below the chart",editor_annotations:"Annotations",editor_annotation_type:"Kind",editor_annotation_type_line:"Line at a value",editor_annotation_type_band:"Shaded band of values",editor_annotation_type_time:"Marks at set times",editor_annotation_type_state:"Marks when an entity changes",editor_annotation_type_point:"Label on a reading",editor_annotation_type_calendar:"Events from a calendar",editor_annotation_add_line:"Line",editor_annotation_add_band:"Band",editor_annotation_add_time:"Times",editor_annotation_add_state:"State changes",editor_annotation_add_point:"Point label",editor_annotation_add_calendar:"Calendar events",editor_annotation_add:"Add an annotation:",editor_annotation_value:"Value",editor_annotation_from:"From",editor_annotation_to:"To",editor_annotation_times:"Times",editor_annotation_entity:"Entity",editor_annotation_series:"Series (blank for the first)",editor_annotation_state:"State (blank for every change)",editor_annotation_shade:"Shade while in this state",editor_annotation_at:"Reading",editor_annotation_at_max:"Highest",editor_annotation_at_min:"Lowest",editor_annotation_at_last:"Latest",editor_annotation_at_first:"First",editor_annotation_label:"Label",editor_annotation_color:"Colour",editor_annotation_dash:"Dashed",editor_annotation_history:"Follow the entity's history (stepped)",editor_annotation_zone:"Shade",editor_annotation_zone_none:"Nothing",editor_annotation_zone_above:"Above the line",editor_annotation_zone_below:"Below the line",editor_annotation_severity:"Shade colours by the line's value (optional bands)",editor_annotation_remove:"Remove annotation",editor_annotation_calendar:"Calendar",editor_annotation_calendar_match:"Only events containing (blank for all)",editor_annotation_calendar_shade:"Shade each event's length",editor_zones:"Shade the severity bands behind the chart",editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",compare_series:"{name}, {offset}",compare_hours_earlier:"{n} h earlier",compare_days_earlier:"{n} days earlier",compare_weeks_earlier:"{n} weeks earlier",compare_months_earlier:"{n} months earlier",compare_years_earlier:"{n} years earlier",editor_compare:"Compare with earlier spans (drawn faintly behind)",editor_compare_style:"Colour of the earlier spans",editor_compare_style_grey:"Grey",editor_compare_style_series:"Faded series colour",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)",editor_cumulative_transform:"Transform",editor_cumulative_transform_none:"None (readings as they are)",editor_cumulative_transform_cumulative:"Running total",editor_cumulative_reset:"Running total starts again",editor_cumulative_reset_none:"Never (from the left edge)",editor_cumulative_reset_day:"Every day",editor_cumulative_reset_week:"Every week",editor_cumulative_reset_month:"Every month",editor_cumulative_reset_billing:"Every month on a billing day",editor_cumulative_billing_day:"Billing day of the month (1–28)",editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_y_scale:"Value scale",editor_y_scale_linear:"Even steps",editor_y_scale_log:"Logarithmic (powers of ten)",editor_tooltip:"Show values on hover or touch",editor_keyboard_nav:"Read values with the keyboard",editor_keyboard_nav_helper:"The chart is one Tab stop: arrow keys move between readings and series, Enter opens the series, Esc stops.",editor_point_action:"Tapping a point",editor_point_action_none:"Does nothing",editor_point_action_history:"Opens History there",editor_point_action_window:"History window",editor_point_action_window_helper:"Like 30min, 2h or 1d, centred on the point. A grouped point opens its whole group.",history_open:"Open in History",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_when_entity:"Entity",editor_when_state:"is in state",editor_when_above:"is above",editor_when_below:"is below",editor_when_card_entity:"Entity",editor_when_card_state:"is in state",editor_when_card_above:"is above",editor_when_card_below:"is below",editor_when_ghost:"Faint line of the hidden readings",editor_when_strip:"Strip showing when it held",when_strip_label:"Shown while {condition}",editor_now_marker:"Now line",editor_now_marker_off:"Off",editor_now_marker_line:"Line only",editor_now_marker_time:"Line and the time",editor_now_marker_countdown:"Line and a countdown to the next set time",now_marker_countdown:"{label} in {duration}",now_marker_next:"Next in {duration}",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden",editor_legend_toggle:"Tap a name to hide or show it",editor_table_toggle:"Chart | Table switch",editor_table_toggle_helper:"Adds a switch to show the readings as a table. The choice is remembered in this browser.",editor_table_change:"Table: change from average",editor_labels_show:"Which readings",editor_labels_show_all:"All (as many as fit)",editor_labels_show_last:"The latest",editor_labels_show_minmax:"Highest and lowest",editor_labels_show_ends:"First and latest",editor_labels_position:"Label position",editor_labels_position_auto:"Above peaks, below dips",editor_labels_position_above:"Above",editor_labels_position_below:"Below",editor_labels_position_center:"On the point",editor_labels_overlap:"Let labels overlap",editor_sync:"Sync group",editor_multiples:"A small chart for each entity",editor_multiples_scale:"Value scale",editor_multiples_scale_auto:"The same when the units match",editor_multiples_scale_shared:"The same for every chart",editor_multiples_scale_independent:"Each chart its own",editor_multiples_columns:"Columns (empty fits the card)",forecast_label:"Forecast",forecast_series:"{name} forecast",editor_forecast_title:"Forecast",editor_forecast_entity:"Forecast entity",editor_forecast_attribute:"Attribute",editor_forecast_value_key:"Value key",editor_forecast_time_key:"Time key",editor_forecast_type:"Weather forecast",editor_forecast_type_hourly:"Hourly",editor_forecast_type_daily:"Daily",editor_forecast_type_twice_daily:"Twice daily",editor_forecast_multiply:"Multiply values by",editor_forecast_hours:"Show forecasts this far ahead",editor_set_point:"Show the set point",editor_shading:"Shade while heating or cooling",editor_shade_fan:"Shade while only the fan runs",editor_current_color:"Temperature colour",editor_set_point_color:"Set point colour",editor_heating_color:"Heating colour",editor_cooling_color:"Cooling colour",editor_days:"Days (more than 1 shows the average day)",editor_day_clock_center_total:"Time on",editor_day_clock_center_now:"The time now",editor_day_clock_center_none:"Nothing",editor_bucket:"One bar for every",editor_bucket_15:"15 minutes",editor_bucket_30:"30 minutes",editor_bucket_60:"Hour",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_ring_color:"Colour",editor_active:"Counts as on",editor_entity_options_none:"Add an entity above first.",editor_hierarchy_group_by:"Group by",editor_group_by_floor:"Floor",editor_group_by_area:"Area",editor_group_by_device:"Device",editor_group_by_label:"Label",editor_entity_groups:"Own group",editor_bar_labels:"Text on the bars",editor_bar_labels_state:"State",editor_bar_labels_duration:"How long",editor_bar_labels_both:"State and how long",editor_bar_labels_none:"None",editor_timeline_legend:"Legend of states",editor_timeline_legend_above:"Above the chart",editor_timeline_legend_hidden:"Hidden",editor_state_colors:"State colours",editor_state_colors_help:"A palette name (amber, green, blue, red, purple, grey, primary) or any CSS colour.",editor_state_colors_state:"State",editor_state_colors_color:"Colour",editor_state_colors_add:"Add a state colour",editor_state_colors_remove:"Remove",editor_timeline_group:"Group (rows with the same group share a heading)",editor_points_per_hour:"Points per hour (0 draws every reading)",editor_graph:"Graph",editor_graph_line:"Line",editor_graph_bar:"Bars",editor_graph_none:"None (value only)",editor_fill:"Fill under the line",editor_fill_solid:"Solid",editor_fill_fade:"Fade",editor_fill_none:"None",editor_points:"Dots on the line",editor_points_hover:"On hover",editor_points_always:"Always",editor_points_never:"Never",editor_trend_labels:"Highest and lowest labels",editor_labels_hover:"On hover",editor_labels_always:"Always",editor_labels_never:"Never",editor_height:"Graph height (per 500 px of width)",editor_bar_spacing:"Space between bars (px)",editor_color_transition:"Band colours",editor_color_transition_smooth:"Blend",editor_color_transition_hard:"Change at each band",editor_extrema:"Show lowest and highest",editor_average:"Show average",editor_trend_legend:"Legend (two or more entities)",editor_trend_y_min:"Lowest value",editor_trend_y_max:"Highest value",editor_min_range:"Smallest range shown",editor_y_min_secondary:"Right axis lowest",editor_y_max_secondary:"Right axis highest",editor_min_range_secondary:"Right axis smallest range",editor_value_factor:"Scale by 10 to the power of",editor_align_header:"Name and icon",editor_align_header_default:"Spread out",editor_align_header_left:"Left",editor_align_header_right:"Right",editor_align_header_center:"Centre",editor_align_icon:"Icon",editor_align_icon_right:"Right of the name",editor_align_icon_left:"Left of the name",editor_align_icon_state:"Beside the value",editor_align_state:"Value",editor_align_state_left:"Left",editor_align_state_right:"Right",editor_align_state_center:"Centre",editor_font_size:"Value size (%)",editor_font_size_header:"Name size (px)",editor_color_name:"Colour the name",editor_color_value:"Colour the value",editor_trend_color_icon:"Colour the icon",editor_trend_group:"No background (inside another card)",editor_icon_image:"Image instead of the icon (URL)",editor_trend_tooltip:"Show the value under the pointer",editor_y_axis_side:"Axis",editor_y_axis_side_primary:"Left",editor_y_axis_side_secondary:"Right (its own scale)",editor_entity_aggregate:"Combine with",editor_fixed_value:"Draw the current value as a flat line",editor_show_state:"Show its value beside the main one",editor_show_indicator:"Colour dot by the value",editor_show_graph:"On the graph",editor_show_line:"Line",editor_show_fill:"Fill",editor_show_points:"Dots",editor_show_legend_entity:"In the legend",editor_show_legend_state:"Value in the legend",editor_sectors:"Directions",editor_sectors_4:"4 (N, E, S, W)",editor_sectors_8:"8 (N, NE, E…)",editor_sectors_16:"16 (N, NNE, NE…)",editor_calm:"Calm below",editor_wind_roles:"The first entity is the wind direction, in degrees or compass points such as SW. The second is the wind speed: without one, the petals only show how often the wind came from each way.",editor_wind_now:"Direction: {direction}. Speed: {speed}.",editor_wind_none:"none",editor_wind_statistics:"Long-term statistics give each hour's average direction. That is only right across north when the sensor records direction as an angle (state class measurement_angle); otherwise an hour swinging between NNW and NNE averages to south. History is exact.",editor_style_area:"Area",editor_stack:"Stack",editor_stack_none:"Don't stack",editor_stack_normal:"On top of each other",editor_stack_percent:"To 100 %",editor_negative_color:"Colour below zero",editor_style_beeswarm:"Beeswarm",editor_place_by:"Place each dot by",editor_place_by_value:"Its value",editor_place_by_time_of_day:"The time of day it happened",editor_size_by_value:"Bigger dots for bigger values",swarm_readings:"{n} readings",swarm_events:"{n} times on",swarm_shown:"Dots shown",swarm_none:"No readings",swarm_no_change:"No change: {value}",swarm_held:"Held all period",swarm_earliest_latest:"Earliest – latest",swarm_lowest_highest:"Lowest – highest",editor_style_strip_plot:"Strip plot",strip_median_value:"Median {value}",strip_mean_value:"Average {value}",strip_mean:"Average",editor_strip_marker:"Line across each row at",editor_strip_marker_median:"The median",editor_strip_marker_mean:"The average",editor_strip_marker_none:"No line",editor_strip_jitter:"Spread across the row",editor_fill_color:"Colour",editor_style_box:"Box plot",box_aria:"Box plot of {names}",box_highest:"Highest",box_upper_quartile:"Upper quartile",box_median:"Median",box_lower_quartile:"Lower quartile",box_lowest:"Lowest",box_mean:"Average",box_count:"Readings",box_outliers:"Outliers",editor_whiskers:"Whiskers reach",editor_whiskers_tukey:"1.5 × box height (outliers as dots)",editor_whiskers_range:"The lowest and highest",editor_readings:"Show each reading as a dot",editor_box_color:"Box colour",editor_style_bullet:"Bullet",editor_ranges:"Ranges behind the bar",editor_ranges_shades:"Shades of grey",editor_ranges_colours:"Colour band colours",compare_target:"target {target}",chart_aria:"{style} chart of {names}",keyboard_nav_label:"{chart}. Arrow keys read the values, Enter opens the series, Esc stops.",keyboard_nav_point:"{name}, {time}: {value}",summary_rose:"Rose from {from} to {to} over {span}.",summary_fell:"Fell from {from} to {to} over {span}.",summary_level:"Ended about where it started, at {value}, over {span}.",summary_peak:"Peak {value} at {time}.",summary_low:"Low {value} at {time}.",summary_now_rising:"Now rising.",summary_now_falling:"Now falling.",summary_now_steady:"Now steady.",summary_series:"{name}: {text}",editor_summary_text:"Summary for screen readers",editor_summary_text_helper:"Empty or auto writes one from the readings; off leaves it out; anything else is read out as written.",editor_summary_show:"Show the summary under the chart",editor_style_candlestick:"Candlestick",editor_candle_by:"One candle per",editor_under_aggregate:"Entities underneath: combine readings with",editor_up_color:"Colour when it rose",editor_down_color:"Colour when it fell",editor_underneath:"Draw the other entities underneath as",editor_underneath_columns:"Columns",editor_underneath_line:"A line",candle_open:"Open",candle_high:"High",candle_low:"Low",candle_close:"Close",candle_week_of:"Week of {date}",editor_style_climate:"Climate",climate_set_point:"Set point",climate_range:"{low} – {high}",climate_not_thermostat:"{name} is not a thermostat. Pick a climate entity.",climate_action_heating:"Heating",climate_action_preheating:"Preheating",climate_action_cooling:"Cooling",climate_action_defrosting:"Defrosting",climate_action_drying:"Drying",climate_action_fan:"Fan",climate_action_idle:"Idle",climate_action_off:"Off",editor_style_column:"Column",editor_group_by_auto:"Automatic",editor_range:"Lowest to highest in each column",editor_rounded:"Rounded ends",editor_column_labels:"Show values on the columns",editor_error_bars:"Error bars (spread in each column)",editor_error_bars_none:"None",editor_error_bars_std:"Mean ± one standard deviation",editor_error_bars_min_max:"The lowest and highest",editor_error_bars_ci95:"95 % confidence interval of the mean",error_bars_tooltip:"{value} ({low} – {high})",editor_column_color:"Colour",editor_style_combined:"Combined",editor_series_type:"Draw as",editor_series_type_line:"Line",editor_series_type_column:"Columns",editor_series_type_area:"Area",editor_series_axis:"Value axis",editor_series_axis_auto:"Automatic (by unit)",editor_series_axis_left:"Left",editor_series_axis_right:"Right",editor_series_aggregate:"Combine with",editor_series_aggregate_auto:"As the card",editor_series_aggregate_mean:"Average",editor_series_aggregate_sum:"Sum",editor_series_aggregate_min:"Lowest",editor_series_aggregate_max:"Highest",editor_series_aggregate_first:"First",editor_series_aggregate_last:"Last",editor_series_aggregate_change:"Change (meters that count up)",editor_style_day_clock:"24-hour clock",day_clock_times_one:"once",day_clock_times:"{n} times",day_clock_a_day:"{text} a day",day_clock_busiest:"{total} · busiest {time}",day_clock_peak:"peak {value} at {time}",day_clock_state:"{name} {state}",day_clock_per_day:"{label} per day",day_clock_no_data:"Nothing recorded",day_clock_now:"Now",day_clock_on:"on",day_clock_average:"Average day · last {n} days",day_clock_on_days:"on {on} of {of} days",day_clock_so_far:"{duration} so far",day_clock_range:"{from} – {to}",day_clock_average_value:"{value} on average",editor_style_cycle_plot:"Cycle plot",cycle_note_week:"Average of each hour over {n} weeks",cycle_note_hour:"Each hour, day by day, over {n} weeks",cycle_note_month:"Each day of the month, month by month, over {n} weeks",cycle_mean_legend:"Panel average",cycle_panel_average:"{name} average",editor_cycle_plot_cycle:"One panel per",editor_cycle_plot_cycle_day_of_week:"Day of the week (its hours)",editor_cycle_plot_cycle_hour_of_day:"Hour of the day (day by day)",editor_cycle_plot_cycle_day_of_month:"Day of the month (month by month)",editor_cycle_plot_weeks:"Weeks",editor_style_duration_curve:"Duration curve",editor_duration_markers:"Values to mark (e.g. 2, 5)",editor_duration_skip_zero:"Leave out time at zero",duration_marker:"Above {value} for {share} of the time",duration_tooltip:"At or above this for {share} of the time",editor_style_dumbbell:"Dumbbell",editor_ends:"Compare",editor_ends_range:"Lowest and highest in the period",editor_ends_then:"Start of the period and now",editor_ends_target:"Target and now",editor_show_now:"Mark the current value",dumbbell_low:"Low",dumbbell_high:"High",dumbbell_now:"Now",dumbbell_target:"Target",dumbbell_ago_hour_one:"An hour ago",dumbbell_ago_hour:"{n} hours ago",dumbbell_ago_day_one:"A day ago",dumbbell_ago_day:"{n} days ago",dumbbell_ago_week_one:"A week ago",dumbbell_ago_week:"{n} weeks ago",dumbbell_ago_month_one:"A month ago",dumbbell_ago_month:"{n} months ago",dumbbell_no_value:"No value",editor_style_funnel:"Funnel",editor_funnel_shape:"Shape",editor_funnel_shape_funnel:"Funnel (first stage at the top)",editor_funnel_shape_pyramid:"Pyramid (first stage at the bottom)",editor_funnel_percent_of:"Percentages",editor_funnel_percent_of_first:"Share of the first stage",editor_funnel_percent_of_previous:"Share of the stage before",editor_funnel_percent_of_none:"Don't show",editor_funnel_color_by:"Colour",editor_funnel_color_by_series:"One colour per entity",editor_funnel_color_by_bands:"By colour band",funnel_aria:"{style} of {names}",editor_style_grouped_bars:"Grouped bars",editor_mode:"Bars",editor_mode_grouped:"Side by side",editor_mode_stacked:"Stacked",editor_mode_percent:"Stacked to 100 %",editor_bars_color_by:"Colour",editor_bars_color_by_series:"One colour per series",editor_bars_color_by_bands:"By colour band",editor_bar_group:"Row",editor_bar_series:"Series",editor_bar_color:"Bar colour",grouped_bars_aria:"Bar chart of {names}",editor_style_heatmap:"Heatmap",heatmap_aria:"Heatmap of {name}",heatmap_hours:"Days averaged",heatmap_empty:"No readings",editor_grid:"Layout",editor_grid_hours:"Hour by weekday",editor_grid_calendar:"Calendar (a day per cell)",editor_color_by_scale:"Smooth scale",editor_cell_shape:"Cells",editor_cell_shape_square:"Square",editor_cell_shape_rounded:"Rounded",editor_cell_shape_hexagon:"Hexagon",editor_color_min:"Lowest colour at",editor_color_max:"Highest colour at",editor_legend:"Legend",editor_style_spiral:"Spiral",spiral_aria:"Spiral of {name}, {n} turns",spiral_turn_day_note:"{n} days, one turn a day",spiral_turn_week_note:"{n} weeks, one turn a week",spiral_inner_oldest:"Oldest in the middle, newest outside",editor_spiral_turn:"One turn per",editor_spiral_turn_day:"Day",editor_spiral_turn_week:"Week",editor_spiral_turns:"Turns",editor_spiral_ring_width:"Ring width",editor_style_histogram:"Histogram",editor_count:"Count",editor_count_time:"Time spent in each range",editor_count_readings:"Readings in each range",editor_show_as:"Show as",editor_show_as_percent:"Share of the whole (%)",editor_show_as_total:"Hours or readings",editor_bins:"Number of bins (empty: automatic)",editor_bin_width:"Bin width (wins over the number)",editor_bars:"Two or more entities",editor_bars_side:"Bars side by side",editor_bars_overlap:"Bars over each other",editor_hist_x_axis:"Value labels along the bottom",histogram_readings:"{n} readings",histogram_reading:"1 reading",editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",energy_loading:"Loading the Energy dashboard settings…",energy_error:"Couldn't read the Energy dashboard settings: {error}",energy_none:"The Energy dashboard has none of these flows set up yet.",energy_flow_grid_import:"Grid import",energy_flow_grid_export:"Grid export",energy_flow_solar:"Solar",energy_flow_battery_out:"Battery out",energy_flow_battery_in:"Battery in",energy_flow_gas:"Gas",energy_flow_water:"Water",energy_flow_devices:"Devices",energy_node_home:"Home",energy_node_untracked:"Untracked use",energy_node_home_use:"Used at home",chart_no_data:"No readings in this period.",legend_toggle_hint:"Tap to hide or show. Hold to show only this one.",legend_toggle_all_hidden:"Every series is hidden. Tap a name to show it again.",table_toggle_group:"Show as",table_toggle_chart:"Chart",table_toggle_table:"Table",table_time:"Time",table_hour:"Hour",table_day:"Day",table_week:"Week",table_month:"Month",table_vs_average:"vs avg",table_vs_average_of:"{name}, change from its average",table_so_far:"so far",table_caption_latest:"{period}, latest {shown} of {total} rows",export_menu:"Export",export_png:"Save as PNG",export_png_hint:"picture, 2×",export_svg:"Save as SVG",export_svg_hint:"vector",export_csv:"Copy CSV",export_csv_hint:"plotted values",export_yaml:"Copy YAML",export_yaml_hint:"this card's config",export_copied:"Copied",export_saved:"Saved",export_saved_file:"Saved as a file: the clipboard isn't available here",export_failed:"Couldn't export from this browser",chart_log_nothing:"Nothing above zero to draw on a log scale.",editor_style_lollipop:"Lollipop",editor_style_pictograph:"Pictograph",editor_unit_icon:"Icon (each entity can have its own)",editor_per_icon:"Each icon stands for (empty: automatic)",editor_group_size:"Icons per group (0: no groups)",editor_partial:"Part-fill an icon for fractions",editor_style_pie:"Pie / donut",editor_shape:"Shape",editor_shape_donut:"Donut",editor_shape_pie:"Pie",editor_center_label:"Line under the total",editor_gap:"Space between slices",editor_gradient:"Gradient fills",editor_style_polar_area:"Polar area",editor_polar_scale:"Scale",editor_polar_scale_shared:"One scale for all, from 0 to the largest value",editor_polar_scale_limits:"Each slice from its entity's minimum to maximum",editor_polar_color_by:"Colour",editor_polar_color_by_series:"One colour per entity",editor_polar_color_by_shades:"Shades of one colour, darker for more",editor_polar_color_by_bands:"By colour band",editor_polar_color:"Colour for shades",polar_area_aria:"Polar area chart of {names}",editor_style_radar:"Radar",editor_radar_scale:"Scale",editor_radar_scale_limits:"Each axis from its entity's minimum to maximum",editor_radar_scale_shared:"One scale for all, from 0 to the largest value",editor_radar_fill:"Fill the shapes",editor_radar_axis:"Axis name",radar_aria:"Radar chart of {names}",radar_other:"Other",editor_style_range_area:"Range area",editor_mean:"Draw the average as a line",editor_range_color:"Colour",editor_style_rings:"Rings",editor_rings_start_angle:"Start angle (0 is the top)",editor_rounded_ends:"Rounded ends",editor_style_sankey:"Sankey (flow)",editor_link_color:"Colour flows by",editor_link_color_auto:"Where they come from, or where they go after a middle node",editor_link_color_source:"Where they come from",editor_link_color_target:"Where they go",editor_from:"Flows from",editor_to:"Flows to",editor_flow_color:"Flow colour",sankey_aria:"Flow chart: {flows}",sankey_flow:"{from} to {to} {value}",sankey_no_flows:'Give each entity a "Flows from" and a "Flows to" in its options.',sankey_nothing:"Nothing is flowing right now.",energy_nothing_flowed:"Nothing flowed in this period.",editor_style_chord:"Chord (flows round a circle)",editor_chord_pad:"Gap between nodes",editor_chord_ribbon_opacity:"Ribbon opacity",chord_aria:"Chord diagram: {flows}",editor_style_slope:"Slope",editor_measure:"Compare",editor_measure_value:"The reading then and now",editor_measure_change:"How much it rose in each period (meters)",editor_color_by_direction:"Up or down",editor_color_by_group:"By group",editor_increase:"A rise is",editor_increase_bad:"Bad (red)",editor_increase_good:"Good (green)",editor_group:"Group",slope_now:"Now",slope_ago:"{n} {unit} ago",slope_ago_one:"A {unit} ago",slope_previous:"Previous {n} {unit}",slope_previous_one:"Previous {unit}",slope_last:"Last {n} {unit}",slope_last_one:"Last {unit}",slope_unit_hour:"hour",slope_unit_hour_other:"hours",slope_unit_day:"day",slope_unit_day_other:"days",slope_unit_week:"week",slope_unit_week_other:"weeks",slope_unit_month:"month",slope_unit_month_other:"months",slope_entity_aria:"{name}, {from} to {to}",slope_no_reading:"no reading",editor_style_sparkline:"Sparklines",editor_spark:"Sparkline",editor_spark_line:"Line",editor_spark_area:"Area",editor_spark_column:"Columns",editor_spark_bar:"Bar under the name and value",editor_spark_color:"Colour",spark_aria:"Trend of {name}",editor_style_streamgraph:"Streamgraph",editor_baseline:"Shape",editor_baseline_wiggle:"Streamgraph (flowing)",editor_baseline_centre:"Centred",editor_baseline_share:"Share of the total (100 %)",editor_baseline_zero:"Stacked from zero",editor_stream_order:"Order",editor_stream_order_inside_out:"Biggest in the middle",editor_stream_order_listed:"As listed, first at the bottom",editor_stream_labels:"Names on the streams",editor_stream_curve:"Edges",stream_total:"Total",editor_style_sunburst:"Sunburst",editor_style_icicle:"Icicle",editor_sunburst_shape:"Shape",editor_sunburst_shape_full:"Full circle",editor_sunburst_shape_half:"Half circle",editor_hierarchy_color_by:"Colour",editor_hierarchy_color_by_group:"One colour per group",editor_hierarchy_color_by_bands:"By colour band",hierarchy_total:"Total",hierarchy_other:"Other",hierarchy_empty:"Nothing to show: no entity has a value above zero.",hierarchy_no_reading:"No reading:",sunburst_aria:"Sunburst of {names}",icicle_aria:"Icicle chart of {names}",editor_style_timeline:"State timeline",timeline_no_states:"No states recorded in this period.",timeline_for:"for {duration}",timeline_now:"Now",timeline_measurement:"Readings, not states: a line chart suits this one",editor_style_state_duration:"Time in each state",editor_state_duration_states:"States to show, bottom first (empty: every state)",editor_style_treemap:"Treemap",editor_treemap_color_by:"Colour",editor_treemap_color_by_group:"One colour per group",editor_treemap_color_by_bands:"By colour band",treemap_aria:"Treemap of {names}",treemap_total:"{value} in all",treemap_empty:"Nothing to show: no entity has a value above zero.",treemap_no_reading:"No reading:",treemap_other:"Other",editor_style_marimekko:"Marimekko",editor_marimekko_segment_labels:"Text on each part",editor_marimekko_segment_labels_percent:"Share of its column",editor_marimekko_segment_labels_value:"Value",editor_marimekko_segment_labels_both:"Share and value",editor_marimekko_segment_labels_none:"None",editor_marimekko_group:"Column (group)",editor_marimekko_category:"Category",editor_marimekko_color:"Category colour",marimekko_aria:"Marimekko chart, columns: {columns}",editor_style_trend:"Trend",trend_min:"Low",trend_avg:"Average",trend_max:"High",editor_style_violin:"Violin",editor_shape_violin:"Violin",editor_shape_raincloud:"Raincloud (half violin, box and readings)",editor_box:"Box with the median and middle half",editor_bandwidth:"Smoothing (in the entity’s unit, empty for automatic)",editor_split_by:"One shape per",editor_split_by_none:"Entity",editor_split_by_day:"Entity and day",editor_split_by_week:"Entity and week",editor_split_by_month:"Entity and month",violin_median:"median {value}",violin_none:"No readings",violin_raincloud:"Raincloud",editor_style_waffle:"Waffle",editor_waffles:"Waffles",editor_waffles_one:"One, split between the entities",editor_waffles_each:"One per entity, side by side",editor_headline:"Show the first share in large type",editor_style_waterfall:"Waterfall",editor_steps:"Each step is",editor_steps_change:"How much it changed in the period",editor_steps_current:"Its current value",editor_start_from_first:"Start from the first entity's reading at the start of the period",editor_total:"Show the total at the end",editor_waterfall_invert:"Counts down (a rise in these is a drop in the total)",waterfall_start:"Start",waterfall_end:"End",waterfall_total:"Total",waterfall_no_readings:"No readings",waterfall_aria:"Waterfall chart: {bars}",editor_style_wind_rose:"Wind rose",wind_prevailing:"Prevailing",wind_mean_speed:"Mean speed",wind_strongest:"Strongest",wind_calm:"Calm",wind_speed:"Speed",wind_speed_unit:"Speed ({unit})",wind_share:"Of the time",wind_aria:"Wind rose, prevailing {direction} {share}",wind_aria_calm:"Wind rose, prevailing {direction} {share}, calm {calm}",wind_aria_still:"Wind rose, calm {calm}",editor_style_purpose_bar:"Batteries, levels, anything from 0 to 100",editor_style_purpose_thin:"Storage and long lists, in little space",editor_style_purpose_segmented:"Signal strength and fill levels, in steps",editor_style_purpose_tank:"Tanks, bins and water butts, filling from the bottom",editor_style_purpose_battery:"Every battery in the house, emptiest first",editor_style_purpose_ring:"CPU, memory and disk, as a dial",editor_style_purpose_needle:"Power and speed, with a pointer",editor_style_purpose_arc:"Temperature, humidity and CO₂, as an open dial",editor_style_purpose_line:"How a sensor changed over hours, days or months",editor_style_purpose_area:"Solar and power use, with import and export either side of zero",editor_style_purpose_column:"Energy per day, rain per hour",editor_style_purpose_combined:"Columns, lines and areas on one time axis, with a second axis",editor_style_purpose_pie:"How a total splits into parts, such as where today's energy came from",editor_style_purpose_rings:"Several batteries or goals in one dial",editor_style_purpose_pictograph:"Counting: chores done, glasses of water, people at home",editor_style_purpose_waffle:"One share out of 100, or a split of one total",editor_style_purpose_histogram:"How long a room spent in each temperature range",editor_style_purpose_scatter:"One sensor against another, such as heating against outside temperature",editor_style_purpose_bubble:"Two sensors against each other, sized by a third",editor_style_purpose_heatmap:"Power by hour and weekday, or a year of days as a calendar",editor_style_purpose_spiral:"A daily or weekly routine, one turn per day or week",editor_style_purpose_box:"How readings spread, per entity or per day, week or month",editor_style_purpose_funnel:"Solar produced, then used in the house, then exported",editor_style_purpose_radar:"Comparing the profiles of several values",editor_style_purpose_polar_area:"Values as slices of different lengths round a circle",editor_style_purpose_treemap:"Power use by floor and room, as boxes sized by share",editor_style_purpose_marimekko:"A total split two ways, such as energy by room and by use",editor_style_purpose_sunburst:"A hierarchy as rings, tap to go in",editor_style_purpose_icicle:"A hierarchy as stacked bars, tap to go in",editor_style_purpose_grouped_bars:"Several values side by side, stacked, or as 100 %",editor_style_purpose_bullet:"A value against its target",editor_style_purpose_lollipop:"Many values with little ink",editor_style_purpose_waterfall:"How a total is built up or worn down, step by step",editor_style_purpose_slope:"Each entity then and now",editor_style_purpose_dumbbell:"Each entity's lowest and highest",editor_style_purpose_range_area:"Each period's lowest to highest, shaded",editor_style_purpose_sparkline:"A tiny trend beside each entity's name and value",editor_style_purpose_streamgraph:"How several entities share a total over time",editor_style_purpose_candlestick:"Open, high, low and close per period",editor_style_purpose_violin:"How readings are spread, as a smooth shape",editor_style_purpose_beeswarm:"Every reading as a dot, spread out so none overlap",editor_style_purpose_strip_plot:"Every reading as a dot, with a line at the middle value",editor_style_purpose_sankey:"How power flows between sources and loads",editor_style_purpose_chord:"Flows both ways between a few places, round a circle",editor_style_purpose_timeline:"When each entity was on, off, home or heating",editor_style_purpose_state_duration:"How many hours a day each entity spent heating, on or away",editor_style_purpose_climate:"A thermostat's temperature against its set point",editor_style_purpose_wind_rose:"Where the wind comes from, and how hard",editor_style_purpose_day_clock:"When each entity was on, round the clock",editor_style_purpose_cycle_plot:"The average day for each weekday, side by side",editor_style_purpose_duration_curve:"How long a sensor spent above each value, such as solar output",editor_style_purpose_trend:"A compact tile: the value over its recent history",editor_chart_group_data:"Time span and readings",editor_chart_group_look:"Look",editor_chart_group_axes:"Axes and gridlines",editor_chart_group_extras:"Markers and extras",editor_chart_group_layout:"Layout and sharing",editor_notice_group_by:"Grouping by {by} was turned off: {style} can't group that way.",editor_notice_sorted:"Sorted emptiest first. Change it with Sort under Display.",editor_summary_no_entities:"No entities yet",editor_summary_entity_one:"1 entity",editor_summary_entities:"{count} entities",editor_summary_matching:"plus matches",editor_summary_limits:"{min} to {max}",editor_summary_target:"target {target}",editor_summary_no_bands:"No bands",editor_summary_band_one:"1 band",editor_summary_bands:"{count} bands",editor_warn_min_max:"The minimum ({min}) isn't below the maximum ({max}), so nothing can fill. Lower the minimum or raise the maximum.",editor_warn_not_number:"{entity} reads \"{state}\", which isn't a number, so this style can't draw it. Pick a sensor that reports a number, or read one of its attributes under its options.",editor_warn_band_same_start:"Two bands start at {from}, so only one of them shows. Give each band its own start.",editor_row_action:"{action}: {entity}",editor_when_heading:"Only show this series while…",editor_when_card_heading:"Only show the series while…",editor_when_card_help:"Pick an entity, then the state it must be in or the range it must be inside. A series can have its own, under its options in Entities.",editor_when_state_helper:"Several states: put commas between them.",editor_when_card_state_helper:"Several states: put commas between them.",editor_anomalies_window_helper:"Like 30min, 2h or 1d. Empty: a twelfth of the span.",editor_normal_range_helper:"From the entity's hourly statistics over the last weeks (its history if it has none). For spans up to two weeks.",editor_rolling_window_helper:"Like 30min, 2h or 1d: each point covers that long before it.",editor_zoom_helper:"Pinch, Ctrl + scroll, or drag.",editor_sync_helper:"Charts with the same name share the pointer and step through periods together.",editor_forecast_entity_helper:"Its forecast is drawn dashed after now.",editor_forecast_attribute_helper:'Empty: the weather forecast, or an attribute called "forecast".',editor_forecast_value_key_helper:"Empty: worked out from the forecast.",editor_forecast_time_key_helper:"Empty: worked out from the forecast.",editor_forecast_type_helper:"Empty: hourly.",editor_forecast_multiply_helper:"Empty: 1.",editor_trend_y_min_helper:"Put ~ before the number to let readings go past it.",editor_trend_y_max_helper:"Put ~ before the number to let readings go past it.",editor_y_min_secondary_helper:"Put ~ before the number to let readings go past it.",editor_y_max_secondary_helper:"Put ~ before the number to let readings go past it.",editor_entity_groups_helper:'Wins over "Group by". Write "Ground floor / Kitchen" for two levels.',editor_active_helper:"Empty: on, open, heating, home and the like.",editor_annotation_times_helper:"07:00 for every day, or 2026-10-28 07:00. Put commas between them.",editor_annotation_value_helper:"A number or an entity.",editor_annotation_from_helper:"A number or an entity. Blank: the bottom.",editor_annotation_to_helper:"A number or an entity. Blank: the top.",editor_annotation_calendar_helper:"Timed events get a line at their start, all-day events a shaded span. Each mark shows the event's title unless you set a label.",editor_annotation_calendar_match_helper:"Words to look for in the event's title, in any case. Put commas between them.",editor_derivative_smoothing_time_helper:"Like 15min. Used instead of a number of readings.",editor_formula_helper:"Like a - b or power * price, then pick the entity each name reads. Uses + - * / ^, brackets, min, max, abs and round.",editor_calm_helper:"Blank: 0.5 m/s, or the same in km/h, mph or knots.",editor_radar_axis_helper:"Entities with the same axis name line up across groups.",editor_energy_flows_helper:"None ticked: grid, solar and battery.",editor_shade_color_helper:"A palette name or any CSS colour.",goal_pace_over:"On pace for {value} · {percent} over",goal_pace_under:"On pace for {value} · {percent} under",goal_pace_on:"On pace for {value} · on target",goal_ended_over:"Ended at {value} · {percent} over",goal_ended_under:"Ended at {value} · {percent} under",goal_ended_on:"Ended at {value} · on target",goal_target:"Target {value}",editor_goal:"Goal",editor_goal_on:"Pace against a goal",editor_goal_on_helper:"Draws the first entity's running total over the period, with the ideal pace and where it will end.",editor_goal_target:"Target",editor_goal_target_entity:"Target entity",editor_goal_target_entity_helper:"Its state is the target, used instead of the number.",editor_goal_period:"Period",editor_goal_period_day:"Day",editor_goal_period_week:"Week",editor_goal_period_month:"Month",editor_goal_period_year:"Year",editor_goal_direction:"Good when",editor_goal_direction_below:"Staying under the target",editor_goal_direction_above:"Reaching the target",editor_goal_project:"Projection",editor_goal_project_linear:"Pace since the start",editor_goal_project_recent:"Recent pace",cost_no_price:"Set a price or a tariff to show the cost",cost_band_standard:"Standard",editor_cost:"Cost",editor_cost_on:"Show the cost",editor_cost_on_helper:"Draws what the energy cost instead of how much was used.",editor_cost_price_entity:"Price entity",editor_cost_price_entity_helper:"Each reading is priced at what this entity said at the time.",editor_cost_price:"Price per unit",editor_cost_price_helper:"Per kWh for energy. Used outside the tariff periods.",editor_cost_currency:"Currency",editor_cost_currency_helper:"A code like GBP or EUR. Blank: Home Assistant's currency.",editor_cost_split:"Stack each column by tariff band",editor_cost_tariff:"Tariff periods",editor_cost_period_from:"From",editor_cost_period_to:"To",editor_cost_period_price:"Price",editor_cost_period_name:"Name",editor_cost_period_color:"Colour",editor_cost_period_remove:"Remove period",editor_cost_period_add:"Add a tariff period",editor_cost_entity_on:"Count its cost",editor_cost_entity_price:"Its own price entity"};const De="en",Ue={[De]:Pe},Ie={ar:()=>import("./chartdeck-card.ar-CpusOAzP.js"),bn:()=>import("./chartdeck-card.bn-CyWghaH3.js"),de:()=>import("./chartdeck-card.de-BNMU4OU5.js"),es:()=>import("./chartdeck-card.es-umXgcTLq.js"),fr:()=>import("./chartdeck-card.fr-BgJNi1Az.js"),hi:()=>import("./chartdeck-card.hi-vtPPPHyR.js"),id:()=>import("./chartdeck-card.id-Dbaoo-Oi.js"),it:()=>import("./chartdeck-card.it-Dzzrv4LL.js"),ja:()=>import("./chartdeck-card.ja-BbwJq3XA.js"),ko:()=>import("./chartdeck-card.ko-CLEA9FGW.js"),nl:()=>import("./chartdeck-card.nl-BUThRDwL.js"),pl:()=>import("./chartdeck-card.pl-EcR5Qb6s.js"),pt:()=>import("./chartdeck-card.pt-BhijTPQy.js"),ru:()=>import("./chartdeck-card.ru-DTLFf7WE.js"),tr:()=>import("./chartdeck-card.tr-DUtMbYIp.js"),ur:()=>import("./chartdeck-card.ur-CW0-bzYe.js"),vi:()=>import("./chartdeck-card.vi-r4faGf9d.js"),"zh-Hans":()=>import("./chartdeck-card.zh-Hans-DVc-r0Ku.js"),"zh-Hant":()=>import("./chartdeck-card.zh-Hant-hHF3PvS4.js")},He=new Map,We="chartdeck-language-loaded";function Re(e){const t=[e];return e.includes("-")&&t.push(e.split("-")[0]),t}function qe(e){const t=Re(e).find(e=>void 0!==Ie[e]);if(!t||Ue[t])return Promise.resolve();let o=He.get(t);return o||(o=Ie[t]().then(e=>{return o=t,n=e.default,Ue[o]=n,void("undefined"!=typeof window&&window.dispatchEvent(new Event(We)));var o,n}).catch(()=>{He.delete(t)}),He.set(t,o)),o}function Be(e){const t=function(e){return e?.locale?.language??e?.language??De}(e),o=Re(t).find(e=>void 0!==Ue[e]);return o||(qe(t),De)}function Ze(e,t,o){const n=Ue[Be(e)][t]??Ue[De][t]??t;return o?n.replace(/\{(\w+)\}/g,(e,t)=>t in o?String(o[t]):e):n}Object.keys(Ie);{const e=function(){if("undefined"!=typeof document){const e=document.querySelector("home-assistant")?.hass,t=e?.locale?.language??e?.language;if(t)return t}try{const e=JSON.parse(globalThis.localStorage?.getItem("selectedLanguage")??"null");if("string"==typeof e&&e)return e}catch{}}();e&&qe(e)}const Ve=["label","area","floor","device_class","domain","entity"];function Ye(e,t){if(null==e)return;if("object"!=typeof e||Array.isArray(e))throw new Error(`"${t}" must list what to match, such as "area" or "device_class"`);const o="include"===t?Ve.filter(e=>"entity"!==e):Ve,n={};for(const[r,a]of Object.entries(e)){if(!o.includes(r))throw new Error(`"${t}" can't match on "${r}". Use: ${o.join(", ")}`);const e=(Array.isArray(a)?a:[a]).filter(e=>null!=e&&""!==e);if(e.some(e=>"string"!=typeof e))throw new Error(`"${t}.${r}" must be text or a list of text`);e.length&&(n[r]=e)}return Object.keys(n).length?n:void 0}function Ge(e){const t=e.state;return"unavailable"===t||"unknown"===t||""!==t.trim()&&Number.isFinite(Number(t))}function Xe(e,t){const o=e.entity_id,n=t.entities?.[o],r=n?.device_id?t.devices?.[n.device_id]:void 0,a=n?.area_id??r?.area_id??void 0,i=e.attributes?.device_class;return{label:[...n?.labels??[],...r?.labels??[]],area:a,floor:a?t.areas?.[a]?.floor_id??void 0:void 0,device_class:"string"==typeof i?i:void 0,domain:o.slice(0,o.indexOf(".")),entity:o}}function Ke(e,t,o){const n=e[t],r=o[t];return Array.isArray(r)?r.some(e=>n.includes(e)):void 0!==r&&n.includes(r)}function Je(e,t){return Object.keys(e).every(o=>Ke(e,o,t))}function Qe(e,t){return!!e&&Object.keys(e).some(o=>Ke(e,o,t))}const et=new WeakMap;const tt={min:{max:1/0},max:{max:1/0},abs:{max:1},round:{max:2}},ot=/^[A-Za-z_][A-Za-z0-9_]*$/,nt=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),rt=e=>nt(tt,e);function at(e){if("string"!=typeof e||""===e.trim())throw new Error('Formula: write one, like "a - b"');if(e.length>500)throw new Error("Formula: keep it under 500 characters");const t=function(e){const t=[];let o=0;for(;o<e.length;){const n=e[o];if(/\s/.test(n)){o++;continue}const r=/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/.exec(e.slice(o));if(r){t.push({t:"num",v:Number(r[0])}),o+=r[0].length;continue}const a=/^[A-Za-z_][A-Za-z0-9_]*/.exec(e.slice(o));if(a){t.push({t:"id",v:a[0]}),o+=a[0].length;continue}const i={"×":"*","÷":"/","−":"-"}[n]??n;if(!"+-*/^(),".includes(i))throw new Error(`Formula: "${n}" is not allowed (use numbers, names, + - * / ^, brackets, min, max, abs, round)`);t.push({t:"sym",v:i}),o++}return t}(e);let o=0;const n=()=>t[o],r=e=>"sym"===n()?.t&&n().v===e,a=e=>{if(!r(e))throw new Error(`Formula: expected "${e}"${n()?` before "${String(n().v)}"`:" at the end"}`);o++};function i(){let e=s();for(;r("+")||r("-");){e={k:"op",op:t[o++].v,a:e,b:s()}}return e}function s(){let e=l();for(;r("*")||r("/");){e={k:"op",op:t[o++].v,a:e,b:l()}}return e}function l(){return r("-")?(o++,{k:"neg",a:l()}):r("+")?(o++,l()):function(){const e=function(){const e=n();if(!e)throw new Error("Formula: it ends too soon");if("num"===e.t)return o++,{k:"num",v:e.v};if("id"===e.t){if(o++,r("(")){const t=rt(e.v)?tt[e.v]:void 0;if(!t)throw new Error(`Formula: "${e.v}" is not a function (use min, max, abs or round)`);o++;const n=[];if(!r(")"))for(n.push(i());r(",");)o++,n.push(i());if(a(")"),n.length<1||n.length>t.max){const o=1===t.max?"1 value":t.max===1/0?"1 or more values":`1 or ${t.max} values`;throw new Error(`Formula: ${e.v}() takes ${o}`)}return{k:"call",fn:e.v,args:n}}if(rt(e.v))throw new Error(`Formula: "${e.v}" is a function; write ${e.v}(…)`);return{k:"var",name:e.v}}if("("===e.v){o++;const e=i();return a(")"),e}throw new Error(`Formula: "${e.v}" is out of place`)}();if(r("^"))return o++,{k:"op",op:"^",a:e,b:l()};return e}()}const c=i();if(o<t.length)throw new Error(`Formula: "${String(t[o].v)}" is out of place`);return c}function it(e){const t=[],o=e=>{"var"===e.k?t.includes(e.name)||t.push(e.name):"neg"===e.k?o(e.a):"op"===e.k?(o(e.a),o(e.b)):"call"===e.k&&e.args.forEach(o)};return o(e),t}function st(e,t){const o=e=>{switch(e.k){case"num":return e.v;case"var":{const o=nt(t,e.name)?t[e.name]:void 0;return"number"==typeof o?o:NaN}case"neg":return-o(e.a);case"op":{const t=o(e.a),n=o(e.b);return"+"===e.op?t+n:"-"===e.op?t-n:"*"===e.op?t*n:"/"===e.op?0===n?NaN:t/n:t**n}case"call":{const t=e.args.map(o);if("min"===e.fn)return Math.min(...t);if("max"===e.fn)return Math.max(...t);if("abs"===e.fn)return Math.abs(t[0]);const n=10**(t.length>1?Math.round(t[1]):0);return Math.round(t[0]*n)/n}}},n=o(e);return Number.isFinite(n)?n:null}const lt=new Map;function ct(e){if(void 0===e.formula||null===e.formula||""===e.formula)return;if("string"!=typeof e.formula)throw new Error('"formula" must be text, like "a - b"');const t=function(e){let t=lt.get(e);return t||(t=at(e),lt.size>200&&lt.clear(),lt.set(e,t)),t}(e.formula),o=e.vars??{};if("object"!=typeof o||null===o||Array.isArray(o))throw new Error('"vars" must map each name in the formula to an entity, like a: sensor.indoor');const n={};for(const[i,s]of Object.entries(o)){if(!ot.test(i)||rt(i)||"__proto__"===i)throw new Error(`"vars": "${i}" can't be a variable name`);if(null!=s&&""!==s){if("string"!=typeof s)throw new Error(`"vars": "${i}" must be an entity id`);n[i]=s}}if(Object.keys(n).length>10)throw new Error('"vars": at most 10 variables');const r=it(t),a=r.find(e=>!nt(n,e));if(a)throw new Error(`Formula uses "${a}": add it to "vars" with the entity it reads`);return{text:e.formula,expr:t,vars:Object.fromEntries(r.map(e=>[e,n[e]]))}}function dt(e){try{return ct(e)}catch{return}}function ut(e){return[...new Set(Object.values(e.vars))]}function ht(e,t){const o=Object.keys(t),n=[...new Set(o.flatMap(e=>t[e].map(e=>e.t)))].sort((e,t)=>e-t),r=Object.fromEntries(o.map(e=>[e,-1])),a=[];for(const i of n){for(const e of o){const o=t[e];for(;r[e]+1<o.length&&o[r[e]+1].t<=i;)r[e]++}if(o.some(e=>r[e]<0))continue;const n={};let s=!0;for(const e of o){const o=t[e][r[e]];n[e]=o.v,o.carried||(s=!1)}const l=st(e,n),c=a[a.length-1];null===l&&c&&null===c.v||a.push(s?{t:i,v:l,carried:!0}:{t:i,v:l})}return a}function pt(e){const t=dt(e);return t?{formula:t.text,vars:t.vars}:{}}const mt=e=>(Math.abs(e)<.005?0:e).toFixed(2);function ft(e,t,o,n){const r=n*Math.PI/180;return[e+o*Math.sin(r),t-o*Math.cos(r)]}function gt(e,t,o,n,r){const a=String(Number(o.toFixed(2))),i=r-n,[s,l]=ft(e,t,o,n);if(i>=359.99){const[r,i]=ft(e,t,o,n+180);return`M${mt(s)} ${mt(l)} A${a} ${a} 0 1 1 ${mt(r)} ${mt(i)} A${a} ${a} 0 1 1 ${mt(s)} ${mt(l)}`}const[c,d]=ft(e,t,o,r),u=i>180?1:0;return`M${mt(s)} ${mt(l)} A${a} ${a} 0 ${u} 1 ${mt(c)} ${mt(d)}`}const yt=["value","band","name","text","none"],vt=["off","24h","7d"],_t={ring:[-180,180],arc:[-135,135],needle:[-90,90]};function bt(e,t){if(null==e||""===e)return;const o="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof o||!Number.isFinite(o)||o<-360||o>360)throw new Error(`"${t}" must be a number of degrees from -360 to 360`);return o}function xt(e,t){return[t?.startAngle??e[0],t?.endAngle??e[1]]}function wt(e){return void 0!==e?.startAngle||void 0!==e?.endAngle}function $t([e,t],o){return e+(t-e)*o}function kt(...e){return{x0:Math.min(...e.map(e=>e.x0)),y0:Math.min(...e.map(e=>e.y0)),x1:Math.max(...e.map(e=>e.x1)),y1:Math.max(...e.map(e=>e.y1))}}function Mt(e,t,o,n,r,a){const i=[n,r];for(let h=Math.ceil(n/90);90*h<=r;h++)i.push(90*h);const s=i.map(n=>ft(e,t,o,n)),l=Math.min(...s.map(e=>e[0])),c=Math.min(...s.map(e=>e[1])),d=Math.max(...s.map(e=>e[0])),u=Math.max(...s.map(e=>e[1]));return{x0:l-a,y0:c-a,x1:d+a,y1:u+a}}function zt(e,t=5){if(!Number.isFinite(e)||e<=0)return 1;const o=e/t,n=10**Math.floor(Math.log10(o)),r=o/n;return(r<=1?1:r<=2?2:r<=2.5?2.5:r<=5?5:10)*n}function Et(e,t){const o=e=>{const t=String(Number(e.toPrecision(12)));return t.includes("e")?0:t.split(".")[1]?.length??0};return Math.min(3,Math.max(o(t),o(e)))}function St(e){const t=e*Math.PI/180,o=Math.sin(t),n=Math.cos(t);return{anchor:o>.3?"start":o<-.3?"end":"middle",dy:n>.3?0:n<-.3?.75:.35}}function At(e,t){switch(t?.center??"value"){case"band":return e.band.label?{kind:"text",text:e.band.label,band:!0}:{kind:"value"};case"name":return{kind:"text",text:e.name,band:!1};case"text":return t.centerText?{kind:"text",text:t.centerText,band:!1}:{kind:"none"};case"none":return{kind:"none"};default:return{kind:"value"}}}const jt=["bar","thin","segmented","tank","battery","ring","needle","arc","line","column","area","combined","pie","rings","pictograph","waffle","histogram","scatter","bubble","heatmap","spiral","box","funnel","radar","polar_area","treemap","marimekko","sunburst","icicle","grouped_bars","bullet","lollipop","waterfall","slope","dumbbell","range_area","sparkline","streamgraph","candlestick","violin","beeswarm","strip_plot","sankey","chord","timeline","state_duration","climate","wind_rose","day_clock","cycle_plot","trend","duration_curve"],Ct=[{from:-1/0,color:"primary"}],Nt=["none","ascending","descending"];function Lt(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"==typeof e&&""!==e.trim()){const t=Number(e);return Number.isFinite(t)?t:void 0}}function Ft(e,t){if(null==e||""===e)return;const o=Lt(e);if(void 0!==o)return o;if("string"==typeof e)return e;throw new Error(`"${t}" must be a number or an entity id`)}function Tt(e,t,o,n=1/0){if(null==e||""===e)return;const r=Lt(e);if(void 0===r||!Number.isInteger(r)||r<o||r>n){throw new Error(`"${t}" must be a whole number ${n===1/0?`of at least ${o}`:`from ${o} to ${n}`}`)}return r}function Ot(e){if(null==e)return;if(!Array.isArray(e))throw new Error('"severity" must be a list of bands');if(0===e.length)return;const t=e.map((e,t)=>{let o;try{o=Ft(e?.from,"from")}catch{o=void 0}if(void 0===o)throw new Error(`Severity band ${t+1}: "from" must be a number or an entity id`);if("string"!=typeof e.color||!e.color)throw new Error(`Severity band ${t+1}: "color" is required`);return{...e,from:o}});return t.every(e=>"number"==typeof e.from)?t.sort((e,t)=>e.from-t.from):t}function Pt(e,t,o){if(null==e)return{action:t};if("object"!=typeof e||"string"!=typeof e.action)throw new Error(`"${o}" must have an "action"`);return e}function Dt(e,t){return void 0!==e?e:t}function Ut(e,t,o){let n,r="string"==typeof e?{entity:e}:e;try{n=r&&"object"==typeof r?ct(r):void 0}catch(p){throw new Error(`Entity ${o+1}: ${p.message}`)}if(n&&r&&("string"!=typeof r.entity||!r.entity)){const e=ut(n)[0];e&&(r={name:n.text,...r,entity:e})}if(!r||"object"!=typeof r||"string"!=typeof r.entity||!r.entity)throw new Error(`Entity ${o+1} needs an "entity" id`);if(void 0!==r.attribute&&null!==r.attribute&&"string"!=typeof r.attribute)throw new Error(`Entity ${o+1}: "attribute" must be an attribute name`);const a=Dt(Ft(r.min,"min"),Ft(t.min,"min"))??0,i=Dt(Ft(r.max,"max"),Ft(t.max,"max"))??100;if("number"==typeof a&&"number"==typeof i&&a>=i)throw new Error(`"max" (${i}) must be greater than "min" (${a})`);const s={...r,entity:r.entity,min:a,max:i,severity:Ot(r.severity)??Ot(t.severity)??Ct,tap_action:Pt(Dt(r.tap_action,t.tap_action),"more-info","tap_action"),hold_action:Pt(Dt(r.hold_action,t.hold_action),"none","hold_action"),double_tap_action:Pt(Dt(r.double_tap_action,t.double_tap_action),"none","double_tap_action")},l=Dt(r.name,t.name),c=Dt(r.icon,t.icon),d=Dt(r.unit,t.unit),u=Dt(Ft(r.target,"target"),Ft(t.target,"target")),h=Dt(Tt(r.decimals,"decimals",0,20),Tt(t.decimals,"decimals",0,20));return void 0!==l&&(s.name=l),void 0!==c&&(s.icon=c),void 0!==d&&(s.unit=d),void 0!==u&&(s.target=u),void 0!==h&&(s.decimals=h),r.attribute||delete s.attribute,_t[t.style??"bar"]&&(s.gauge=function(e,t=e.style??"bar"){const o=bt(e.start_angle,"start_angle"),n=bt(e.end_angle,"end_angle"),r=_t[t];if(r&&(void 0!==o||void 0!==n)){const[e,t]=[o??r[0],n??r[1]];if(!(t>e))throw new Error(`"end_angle" (${t}) must be greater than "start_angle" (${e})`);if(t-e>360)throw new Error('"end_angle" can be at most 360 degrees after "start_angle"')}const a=e.center??"value";if(!yt.includes(a))throw new Error(`"center" must be one of: ${yt.join(", ")}`);if(void 0!==e.center_text&&null!==e.center_text&&"string"!=typeof e.center_text)throw new Error('"center_text" must be text');if(void 0!==e.tick_labels&&"boolean"!=typeof e.tick_labels)throw new Error('"tick_labels" must be true or false');if(void 0!==e.ghost&&null!==e.ghost&&!vt.includes(e.ghost))throw new Error(`"ghost" must be one of: ${vt.join(", ")}`);const i={center:a,centerText:e.center_text??"",tickLabels:!0===e.tick_labels};return void 0!==o&&(i.startAngle=o),void 0!==n&&(i.endAngle=n),e.ghost&&"off"!==e.ghost&&(i.ghost=e.ghost),i}(t)),s}function It(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");const t=e.style??"bar";if(!jt.includes(t))throw new Error(`Unknown style "${String(t)}". Use one of: ${jt.join(", ")}`);const o=e.sort??"none";if(!Nt.includes(o))throw new Error(`Unknown sort "${String(o)}". Use one of: ${Nt.join(", ")}`);if(void 0!==e.entities&&!Array.isArray(e.entities))throw new Error('"entities" must be a list');const n=(e.entities??[]).map((t,o)=>Ut(t,e,o)),r={name:!0,value:!0,icon:!0,target:!0,legend:!1,...e.show},a=Tt(e.columns,"columns",1),i=Tt(e.limit,"limit",1),s=Ye(e.include,"include"),l=Ye(e.exclude,"exclude");s&&Ut("sensor.chartdeck_check",e,0);const c={style:t,entities:n,hideUnavailable:!0===e.hide_unavailable,cardOptions:e,show:r,sort:o,animate:!1!==e.animate,colorIcon:!0===e.color_icon,legendBands:Ot(e.severity)??Ct};return void 0!==e.title&&(c.title=e.title),void 0!==a&&(c.columns=a),void 0!==i&&(c.limit=i),s&&(c.include=s),l&&(c.exclude=l),c}function Ht(e){const t=e?.locale?.language??"en";switch(e?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:t,grouping:!0}}}function Wt(e,t,o){const{locale:n,grouping:r}=Ht(o),a=new Intl.NumberFormat(n,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:r});let i=a.format(0===e?0:e);return 0===Number(e.toFixed(t))&&(i=a.format(0)),i}const Rt=new Map;function qt(e,t){const o=e.toUpperCase(),{locale:n}=Ht(t);let r;try{r=new Intl.NumberFormat(n,{style:"currency",currency:o})}catch{r=new Intl.NumberFormat("en",{style:"currency",currency:o})}const a=r.formatToParts(1),i=a.findIndex(e=>"integer"===e.type);let s=-1;a.forEach((e,t)=>{"integer"!==e.type&&"decimal"!==e.type&&"fraction"!==e.type&&"group"!==e.type||(s=t)});const l=e=>e.map(e=>e.value).join(""),c=`${o}⁠`;return Rt.set(c,{prefix:l(a.slice(0,i)),suffix:l(a.slice(s+1))}),{unit:c,decimals:r.resolvedOptions().maximumFractionDigits??2}}function Bt(e,t){const o=Rt.get(t);if(o){const t=/^[-\u2212]/.test(e)?e[0]:"";return`${t}${o.prefix}${t?e.slice(1):e}${o.suffix}`}return t?`${e} ${t}`:e}const Zt=["grid_import","grid_export","solar","battery_out","battery_in","gas","water","devices"],Vt=["grid_import","grid_export","solar","battery_out","battery_in"],Yt=["line","column","area"],Gt=["pie","sankey"],Xt=[...Yt,...Gt],Kt=["column","area"],Jt=["grid_export","battery_in"],Qt=["grid_import","grid_export","solar","battery_out","battery_in","devices"],eo=Qt;const to=e=>e.config,oo={grid_import:"var(--energy-grid-consumption-color, #488fc2)",grid_export:"var(--energy-grid-return-color, #8353d1)",solar:"var(--energy-solar-color, #ff9800)",battery_out:"var(--energy-battery-out-color, #4db6ac)",battery_in:"var(--energy-battery-in-color, #f06292)",gas:"var(--energy-gas-color, #8e021b)",water:"var(--energy-water-color, #00bcd4)",devices:""};function no(e){return function(e){if("energy"!==e.source){for(const t of["energy_flows","energy_split"])if(void 0!==e[t])throw new Error(`"${t}" needs "source: energy"`);return}const t=e.style??"bar";if(!Xt.includes(t))throw new Error(`"source: energy" works with these styles: ${Xt.join(", ")}`);if(void 0!==e.energy_split&&"boolean"!=typeof e.energy_split)throw new Error('"energy_split" must be true or false');const o=e.energy_flows;if(void 0!==o){if(!Array.isArray(o)||o.some(e=>!Zt.includes(e)))throw new Error(`"energy_flows" must be a list of: ${Zt.join(", ")}`);if("sankey"===t&&o.some(e=>!eo.includes(e)))throw new Error(`"energy_flows" on a Sankey must be a list of: ${eo.join(", ")}`)}}(e),"energy"===e.source?{...e,source:"statistics"}:e}function ro(e,t){const o={grid_import:[],grid_export:[],solar:[],battery_out:[],battery_in:[],gas:[],water:[],devices:[]},n=(e,t,n,r)=>{if("string"!=typeof t||""===t)return;const a="string"==typeof r?.entity_energy_price&&""!==r.entity_energy_price?r.entity_energy_price:"number"==typeof r?.number_energy_price&&Number.isFinite(r.number_energy_price)?r.number_energy_price:void 0;o[e].push({id:t,flow:e,...n?{name:n}:{},...void 0!==a?{price:a}:{}})};for(const a of e.energy_sources??[])switch(a.type){case"grid":for(const e of a.flow_from??[])n("grid_import",e.stat_energy_from,void 0,e);for(const e of a.flow_to??[])n("grid_export",e.stat_energy_to,void 0,e);n("grid_import",a.stat_energy_from,void 0,a),n("grid_export",a.stat_energy_to);break;case"solar":n("solar",a.stat_energy_from);break;case"battery":n("battery_out",a.stat_energy_from),n("battery_in",a.stat_energy_to);break;case"gas":n("gas",a.stat_energy_from,void 0,a);break;case"water":n("water",a.stat_energy_from,void 0,a)}for(const a of e.device_consumption??[])n("devices",a.stat_consumption,a.name);const r=new Set;return t.flatMap(e=>o[e]).filter(e=>!r.has(e.id)&&(r.add(e.id),!0))}const ao={action:"none"};function io(e,t,o={},n=!1){const r=new Map;for(const a of e)r.set(a.flow,(r.get(a.flow)??0)+1);return e.map(e=>{const a=t?.states[e.id],i=o[e.id],s=e.name??a?.attributes?.friendly_name??(i?.name||void 0),l=Ze(t,`energy_flow_${e.flow}`),c="devices"===e.flow||(r.get(e.flow)??0)>1?s??l:l,d={entity:e.id,name:c,energy_flow:e.flow};if(oo[e.flow]&&(d.color=oo[e.flow]),!a){d.statistic=!0;const t=i?.unit||(Qt.includes(e.flow)?"kWh":void 0);t&&(d.unit=t),d.tap_action=ao,d.hold_action=ao,d.double_tap_action=ao}return n&&Jt.includes(e.flow)&&(d.energy_below=!0),void 0!==e.price&&(d.energy_price=e.price),d})}function so(e,t,o,n={}){const r=e.style,a=e.energy_flows??function(e){return"pie"===e?["grid_import","solar","battery_out"]:"sankey"===e?[...Vt,"devices"]:Vt}(r),i=Kt.includes(r)&&!1!==e.energy_split,s=[...io(ro(t,a),o,n,i),...e.entities??[]],l={...e,entities:s,source:"statistics"};return Gt.includes(r)||(l.group_by=e.group_by??("column"===r?void 0:"hour"),l.aggregate=void 0===e.aggregate||"auto"===e.aggregate?"change":e.aggregate,void 0===l.group_by&&delete l.group_by),l}function lo(e){return e.map(e=>{const t={...e,v:null===e.v?null:-e.v};return void 0!==e.min&&(t.max=null===e.min?null:-e.min),void 0!==e.max&&(t.min=null===e.max?null:-e.max),t})}function co(e,t){return to(e).energy_below?-t:t}function uo(e){return e.some(e=>void 0!==to(e).energy_flow)}function ho(e){return!0===to(e).statistic}function po(e,t,o,n){if(!to(e).energy_flow)return;if("change"!==o?.aggregate&&"sum"!==o?.aggregate)return ho(e)?"":void 0;const r=mo(t);return null===r?"":Bt(Wt(co(e,r),e.decimals,n),e.unit)}function mo(e){let t=null;for(const o of e)null!==o.v&&(t=(t??0)+o.v);return t}const fo=new WeakMap,go=new WeakMap;function yo(e,t,o=Date.now()){const n=e.callWS;if(!n)return{status:"error",error:"no connection"};const r=fo.get(n),a=go.get(n)??new Set;go.set(n,a);const i=r&&("ready"===r.status&&o-r.at>18e5||"error"===r.status&&o-r.at>6e4);if(!r||i){a.add(t);const e=n({type:"energy/get_prefs"}).then(async e=>{const t=e??{},o=await async function(e,t){const o=ro(t,Zt).map(e=>e.id);if(!o.length)return{};try{const t=await e({type:"recorder/get_statistics_metadata",statistic_ids:o}),n={};for(const e of Array.isArray(t)?t:[])e?.statistic_id&&(n[e.statistic_id]={name:e.name,unit:e.statistics_unit_of_measurement});return n}catch{return{}}}(n,t);fo.set(n,{status:"ready",prefs:t,meta:o,at:Date.now()})}).catch(e=>{const t=e?.message??String(e);fo.set(n,{status:"error",error:t,at:Date.now()})}).then(()=>{const e=[...a];a.clear();for(const t of e)t()});return"ready"===r?.status?(fo.set(n,{...r,at:o}),{status:"ready",prefs:r.prefs,meta:r.meta}):(fo.set(n,{status:"loading",promise:e}),{status:"loading"})}return"loading"===r.status?(a.add(t),{status:"loading"}):"ready"===r.status?{status:"ready",prefs:r.prefs,meta:r.meta}:{status:"error",error:r.error}}const vo=new Set(["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]);function _o(e){const t=[];for(const o of e.matchAll(/\s*(?:"([^"]*)"|'([^']*)'|([^,]+))\s*(?:,|$)/g)){const e=(o[1]??o[2]??o[3]??"").trim();e&&t.push(e)}return t}function bo(e){const t=_o(e);if(t.some(e=>vo.has(e.toLowerCase())))return e;const o=function(e){const t=_o(e),o=t.find(e=>vo.has(e.toLowerCase()));if(o)return o.toLowerCase();const n=t.join(" ").toLowerCase();return/mono|code|courier|consol/.test(n)?"monospace":/serif|times|georgia|garamond|slab/.test(n)&&!/sans/.test(n)?"serif":"sans-serif"}(e);return t.length?`${e}, ${o}`:o}const xo=(e,t,o,n)=>[e.replace(/^["']|["']$/g,"").toLowerCase(),{normal:"400",bold:"700"}[t||"normal"]??t,o||"normal",(n||"U+0-10FFFF").toUpperCase().replace(/\s+/g,"")].join("|");function wo(e){const t=/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)\s]*))\s*\)(?:\s*format\(\s*["']?([^"')]*)["']?\s*\))?/.exec(e),o=t&&(t[1]??t[2]??t[3]);return o?{url:o,format:t[4]||void 0}:void 0}function $o(e){try{return e.cssRules}catch{return}}function ko(e,t,o,n,r){const a=new Set(_o(e).filter(e=>!vo.has(e.toLowerCase())).map(e=>e.toLowerCase())),i=new Set;for(const c of t){const e=c.family.replace(/^["']|["']$/g,"").toLowerCase();"loaded"===c.status&&a.has(e)&&i.add(xo(c.family,c.weight,c.style,c.unicodeRange))}if(!i.size)return[];const s=[],l=new Set;for(const{rule:c,base:d}of function(e,t){const o=[],n=(e,t,r)=>{if(e&&!(r>4))for(const a of Array.from(e))a.styleSheet?n($o(a.styleSheet),a.styleSheet.href??t,r+1):a.cssRules?n(a.cssRules,t,r+1):a.style&&a.cssText?.trimStart().toLowerCase().startsWith("@font-face")&&o.push({rule:a,base:t})};for(const r of Array.from(e))n($o(r),r.href??t,0);return o}(o,r)){const e=c.style,t=e.getPropertyValue("font-family").trim().replace(/^["']|["']$/g,""),o=e.getPropertyValue("font-weight").trim(),r=e.getPropertyValue("font-style").trim(),a=e.getPropertyValue("unicode-range").trim(),u=xo(t,o,r,a);if(!i.has(u)||l.has(u))continue;const h=wo(e.getPropertyValue("src"));if(!h)continue;let p;try{p=new URL(h.url,d)}catch{continue}"data:"!==p.protocol&&p.origin!==n||(l.add(u),s.push({family:t,weight:o||"normal",style:r||"normal",unicodeRange:a,url:p.href,format:h.format}))}return s}const Mo={woff2:"font/woff2",woff:"font/woff",truetype:"font/ttf",ttf:"font/ttf",opentype:"font/otf",otf:"font/otf"};async function zo(e,t){let o=e.url;if(!o.startsWith("data:")){const n=await fetch(e.url,{credentials:"same-origin"});if(!n.ok)return"";const r=new Uint8Array(await n.arrayBuffer());if(r.length>t.left)return"";t.left-=r.length;const a=/\.(\w+)(?:[?#]|$)/.exec(new URL(e.url).pathname)?.[1]?.toLowerCase()??"";o=`data:${Mo[e.format?.toLowerCase()??""]??Mo[a]??"font/woff2"};base64,${function(e){let t="";for(let o=0;o<e.length;o+=32768)t+=String.fromCharCode(...e.subarray(o,o+32768));return btoa(t)}(r)}`}const n=e.format?` format("${e.format}")`:"",r=e.unicodeRange?`;unicode-range:${e.unicodeRange}`:"";return`@font-face{font-family:"${e.family.replace(/["<>&]/g,"")}";font-weight:${e.weight};font-style:${e.style}${r};src:url("${o}")${n}}`}const Eo=new WeakMap;function So(e){Eo.delete(e)}function Ao(e){const t=String(e);return/[",\r\n]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function jo(e,t,o=Date.now()){const n=[["timestamp","entity","value","unit"]];if(e)for(const r of e)for(const e of r.points){if(null===e.v||e.carried)continue;const t=r.entity.config?co({config:r.entity.config},e.v):e.v;n.push([new Date(e.t).toISOString(),r.entity.entityId,t,r.entity.unit])}else{const e=new Date(o).toISOString();for(const o of t)null!==o.value&&n.push([e,o.entityId,o.value,o.unit])}return function(e){return e.map(e=>e.map(Ao).join(",")).join("\r\n")+"\r\n"}(n)}const Co=/^[A-Za-z_][A-Za-z0-9_.\-/ ]*$/,No=/^(true|false|yes|no|on|off|null|~|y|n)$/i;function Lo(e){if(null==e)return"null";if("number"==typeof e)return Number.isFinite(e)?String(e):"null";if("boolean"==typeof e)return String(e);const t=String(e);return""===t||!Co.test(t)||No.test(t)||t.endsWith(" ")?JSON.stringify(t):t}function Fo(e){return!Co.test(e)||No.test(e)||e.includes(" ")?JSON.stringify(e):e}const To=e=>"object"==typeof e&&null!==e&&!Array.isArray(e);function Oo(e,t=""){if(Array.isArray(e))return 0===e.length?`${t}[]\n`:e.map(e=>{if(To(e)&&Object.keys(e).length>0){const o=Oo(e,`${t}  `);return`${t}- ${o.slice(t.length+2)}`}return Array.isArray(e)&&e.length>0?`${t}-\n${Oo(e,`${t}  `)}`:`${t}- ${To(e)?"{}":Array.isArray(e)?"[]":Lo(e)}\n`}).join("");if(To(e)){const o=Object.entries(e).filter(([,e])=>void 0!==e);return 0===o.length?`${t}{}\n`:o.map(([e,o])=>{if(To(o)&&Object.keys(o).length>0||Array.isArray(o)&&o.length>0)return`${t}${Fo(e)}:\n${Oo(o,`${t}  `)}`;const n=To(o)?"{}":Array.isArray(o)?"[]":Lo(o);return`${t}${Fo(e)}: ${n}\n`}).join("")}return`${t}${Lo(e)}\n`}function Po(e,t,o=Date.now()){return`${(e??"").normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,60)||"chartdeck"}-${new Date(o).toISOString().slice(0,10)}.${t}`}const Do=["fill","fill-opacity","stroke","stroke-width","stroke-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stop-color","stop-opacity","opacity","visibility","display","transform","transform-origin","transform-box","vector-effect","font-family","font-size","font-weight","text-anchor","dominant-baseline"],Uo=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Io=e=>Math.round(100*e)/100;function Ho(e){if(!e||"transparent"===e)return!1;const t=/^rgba?\(([^)]*)\)$/.exec(e.trim())?.[1].split(/[\s,/]+/).filter(Boolean);return!t||t.length<4||parseFloat(t[3])>0}function Wo(e,t){const o=e.getBoundingClientRect(),n=t.title?44:0,r=Math.max(1,Math.ceil(o.width)),a=Math.max(1,Math.ceil(o.height+n)),i=[`<rect width="${r}" height="${a}" rx="12" fill="${Uo(t.background)}"/>`];if(t.title){const o=bo(getComputedStyle(e).fontFamily||"Roboto, Noto");i.push(`<text x="16" y="30" font-family="${Uo(o)}" font-size="20" fill="${Uo(t.color)}">${Uo(t.title)}</text>`)}const s=e=>({x:e.left-o.left,y:e.top-o.top+n,w:e.width,h:e.height}),l=e=>{if(t.skip?.(e))return;const o=getComputedStyle(e);if("none"===o.display||"hidden"===o.visibility||0===Number(o.opacity))return;const n=s(e.getBoundingClientRect());if(e instanceof SVGSVGElement)return void(n.w>0&&n.h>0&&i.push(function(e,t,o,n,r){const a=e.cloneNode(!0),i=[e,...e.querySelectorAll("*")],s=[a,...a.querySelectorAll("*")];return i.forEach((e,t)=>{const o=getComputedStyle(e),n=Do.map(e=>[e,o.getPropertyValue(e)]).filter(([,e])=>""!==e),r=s[t];r.removeAttribute("class"),n.length&&r.setAttribute("style",n.map(([e,t])=>`${e}:${t}`).join(";"))}),a.setAttribute("x",String(Io(t))),a.setAttribute("y",String(Io(o))),a.setAttribute("width",String(Io(n))),a.setAttribute("height",String(Io(r))),a.removeAttribute("role"),(new XMLSerializer).serializeToString(a)}(e,n.x,n.y,n.w,n.h)));const r=Number(o.opacity),a=r<1?` opacity="${r}"`:"";if(n.w>0&&n.h>0&&Ho(o.backgroundColor)){const e=Math.min(parseFloat(o.borderTopLeftRadius)||0,n.w/2,n.h/2);i.push(`<rect x="${Io(n.x)}" y="${Io(n.y)}" width="${Io(n.w)}" height="${Io(n.h)}" rx="${Io(e)}" fill="${Uo(o.backgroundColor)}"${a}/>`)}const c=[["Top",n.x,n.y,n.x+n.w,n.y],["Bottom",n.x,n.y+n.h,n.x+n.w,n.y+n.h],["Left",n.x,n.y,n.x,n.y+n.h],["Right",n.x+n.w,n.y,n.x+n.w,n.y+n.h]];for(const[t,s,l,d,u]of c){const e=parseFloat(o.getPropertyValue(`border-${t.toLowerCase()}-width`))||0,n=o.getPropertyValue(`border-${t.toLowerCase()}-style`),r=o.getPropertyValue(`border-${t.toLowerCase()}-color`);if(e>0&&"none"!==n&&"hidden"!==n&&Ho(r)){const t="dashed"===n?` stroke-dasharray="${3*e} ${2*e}"`:"dotted"===n?` stroke-dasharray="${e} ${e}"`:"";i.push(`<line x1="${Io(s)}" y1="${Io(l)}" x2="${Io(d)}" y2="${Io(u)}" stroke="${Uo(r)}" stroke-width="${e}"${t}${a}/>`)}}for(const t of function(e){return[...e.childNodes].filter(e=>3===e.nodeType&&""!==(e.textContent??"").trim())}(e)){const n=document.createRange();n.selectNodeContents(t);const r=s("function"==typeof n.getBoundingClientRect?n.getBoundingClientRect():e.getBoundingClientRect()),l=parseFloat(o.fontSize)||14,c=o.textDecorationLine&&"none"!==o.textDecorationLine?` text-decoration="${Uo(o.textDecorationLine)}"`:"";i.push(`<text x="${Io(r.x)}" y="${Io(r.y+(r.h+.7*l)/2)}" font-family="${Uo(bo(o.fontFamily))}" font-size="${l}" font-weight="${Uo(o.fontWeight)}" fill="${Uo(o.color)}"${c}${a}>${Uo((t.textContent??"").replace(/\s+/g," ").trim())}</text>`)}for(const t of e.children)l(t)};for(const c of e.children)l(c);return{svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${a}" viewBox="0 0 ${r} ${a}">${i.join("")}</svg>`,width:r,height:a}}function Ro(e,t){if("undefined"==typeof URL||"function"!=typeof URL.createObjectURL||"undefined"==typeof document)return!1;try{const o=URL.createObjectURL(e),n=document.createElement("a");return n.href=o,n.download=t,n.rel="noopener",n.style.display="none",document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3),!0}catch{return!1}}const qo=["png","svg","csv","yaml"],Bo=new WeakMap;function Zo(e){let t=Bo.get(e);return t||(t={open:!1},Bo.set(e,t)),t}function Vo(e,t){const o=Zo(e.host);o.open!==t&&(o.open=t,o.outside&&(window.removeEventListener("pointerdown",o.outside,!0),o.outside=void 0),t&&(o.outside=t=>{t.composedPath().some(e=>e instanceof Element&&e.classList.contains("export"))||Vo(e,!1)},window.addEventListener("pointerdown",o.outside,!0)),e.requestUpdate())}function Yo(e,t,o){const n=Zo(e.host);n.status=Ze(e.hass,t,o),void 0!==n.statusTimer&&clearTimeout(n.statusTimer),n.statusTimer=setTimeout(()=>{n.status=void 0,n.statusTimer=void 0,e.requestUpdate()},2500),e.requestUpdate()}async function Go(e,t,o,n){return await async function(e){try{const t=globalThis.navigator?.clipboard;return!(!t||"function"!=typeof t.writeText||(await t.writeText(e),0))}catch{return!1}}(t)?Yo(e,"export_copied"):Ro(new Blob([t],{type:o}),Po(e.raw.title,n))?Yo(e,"export_saved_file"):void Yo(e,"export_failed")}async function Xo(e,t){try{if("csv"===t)return await Go(e,jo(Eo.get(e.host),e.items),"text/csv","csv");if("yaml"===t)return await Go(e,Oo(e.raw),"text/yaml","yaml");const o=e.content();if(!o)return Yo(e,"export_failed");const n=function(e){const t=getComputedStyle(e),o=e.shadowRoot?.querySelector("ha-card"),n=o?getComputedStyle(o).backgroundColor:"";return{background:Ho(n)?n:t.getPropertyValue("--card-background-color").trim()||t.getPropertyValue("--ha-card-background").trim()||"#ffffff",color:t.color||t.getPropertyValue("--primary-text-color").trim()||"#212121"}}(e.host),r=Wo(o,{title:e.raw.title,...n,skip:e=>e.classList.contains("export")}),a=await async function(e,t,o=document){try{const n=o.fonts;if(!n||"function"!=typeof fetch||"function"!=typeof btoa)return e;const r=o.location?.origin??"",a=ko(t,n,o.styleSheets,r,o.baseURI);if(!a.length)return e;const i={left:2e6},s=(await Promise.all(a.map(e=>zo(e,i).catch(()=>"")))).filter(Boolean);if(!s.length)return e;const l=e.indexOf(">")+1;return`${e.slice(0,l)}<defs><style>${s.join("")}</style></defs>${e.slice(l)}`}catch{return e}}(r.svg,getComputedStyle(o).fontFamily);if("svg"===t){return Yo(e,Ro(new Blob([a],{type:"image/svg+xml"}),Po(e.raw.title,"svg"))?"export_saved":"export_failed")}const i=await async function(e,t,o,n=2){if("undefined"==typeof Image||"undefined"==typeof document)return null;const r=document.createElement("canvas");r.width=Math.round(t*n),r.height=Math.round(o*n);let a=null;try{a=r.getContext("2d")}catch{a=null}if(!a||"function"!=typeof r.toBlob)return null;const i=new Image;return i.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`,await("function"==typeof i.decode?i.decode():new Promise((e,t)=>{i.onload=()=>e(),i.onerror=()=>t(new Error("image"))})),a.scale(n,n),a.drawImage(i,0,0,t,o),new Promise(e=>{try{r.toBlob(t=>e(t),"image/png")}catch{e(null)}})}(a,r.width,r.height,2);Yo(e,null!==i&&Ro(i,Po(e.raw.title,"png"))?"export_saved":"export_failed")}catch{Yo(e,"export_failed")}}function Ko(e){if(!0!==e.raw.export)return Z;const t=Zo(e.host),o=t=>Ze(e.hass,t);return R`<div class="export ${e.raw.title?"titled":"inline"}" @keydown=${o=>{if("Escape"===o.key&&t.open)return o.stopPropagation(),Vo(e,!1),void e.host.shadowRoot?.querySelector(".export-button")?.focus();if(!t.open||"ArrowDown"!==o.key&&"ArrowUp"!==o.key)return;o.preventDefault();const n=[...e.host.shadowRoot?.querySelectorAll(".export-item")??[]],r=n.indexOf(e.host.shadowRoot?.activeElement),a="ArrowDown"===o.key?(r+1)%n.length:(r-1+n.length)%n.length;n[a]?.focus()}}>
    ${t.status?R`<span class="export-status" role="status">${t.status}</span>`:Z}
    <button
      class="export-button"
      type="button"
      aria-label=${o("export_menu")}
      aria-haspopup="menu"
      aria-expanded=${t.open?"true":"false"}
      @click=${o=>{o.stopPropagation(),Vo(e,!t.open)}}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}></path></svg>
    </button>
    ${t.open?R`<div class="export-menu" role="menu" aria-label=${o("export_menu")}>
            ${qo.map(t=>R`<button
                  class="export-item"
                  type="button"
                  role="menuitem"
                  data-action=${t}
                  @click=${(t=>o=>{o.stopPropagation(),Vo(e,!1),Xo(e,t)})(t)}
                >
                  <span>${o(`export_${t}`)}</span><span class="export-hint">${o(`export_${t}_hint`)}</span>
                </button>`)}
          </div>`:Z}
  </div>`}const Jo=a`
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
`,Qo=36e5,en=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tn=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],on=new Map;function nn(e){let t=on.get(e);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),on.set(e,t)),t}function rn(e,t){const o={};for(const n of nn(t).formatToParts(new Date(e)))o[n.type]=n.value;return{year:Number(o.year),month:Number(o.month),day:Number(o.day),hour:Number(o.hour)%24,minute:Number(o.minute),second:Number(o.second),weekday:en.indexOf(o.weekday)+1}}function an(e,t){const o=rn(e,t);return Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute,o.second)-1e3*Math.floor(e/1e3)}function sn(e,t,o,n=1,r=0,a=0,i=0){const s=Date.UTC(t,o-1,n,r,a,i),l=new Date(s),c=an(s-864e5,e),d=an(s+864e5,e),u=[s-c,s-d].filter(t=>{const o=rn(t,e);return o.year===l.getUTCFullYear()&&o.month===l.getUTCMonth()+1&&o.day===l.getUTCDate()&&o.hour===l.getUTCHours()&&o.minute===l.getUTCMinutes()&&o.second===l.getUTCSeconds()});return u.length?Math.min(...u):function(e,t,o,n){for(;t-e>1e3;){const r=1e3*Math.floor((e+t)/2e3);an(r,n)===o?e=r:t=r}return t}(s-d,s-c,c,e)}function ln(e,t,o){const n=new Date(Date.UTC(e,t-1,o));return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate()}}function cn(e,t,o){const n=rn(t,o.timeZone);switch(e){case"hour":return t-t%1e3-1e3*(60*n.minute+n.second);case"day":return sn(o.timeZone,n.year,n.month,n.day);case"week":{const e=(n.weekday-o.firstDay+7)%7,t=ln(n.year,n.month,n.day-e);return sn(o.timeZone,t.year,t.month,t.day)}case"month":return sn(o.timeZone,n.year,n.month,1);case"year":return sn(o.timeZone,n.year,1,1)}}function dn(e,t,o,n){if("hour"===e)return t+o*Qo;const r=rn(t,n.timeZone);let{year:a,month:i,day:s}=r;if("day"===e)({year:a,month:i,day:s}=ln(a,i,s+o));else if("week"===e)({year:a,month:i,day:s}=ln(a,i,s+7*o));else{const t=ln(a,i+("year"===e?12*o:o),1),n=ln(t.year,t.month+1,0).day;({year:a,month:i}=t),s=Math.min(s,n)}return sn(n.timeZone,a,i,s,r.hour,r.minute,r.second)}function un(e,t,o,n,r=1e4){const a=[cn(e,t,n)];let i=1;for(;a[a.length-1]<o&&a.length<=r;){const t="hour"===e?a[0]+i*Qo:dn(e,a[0],i,n);a.push(t>a[a.length-1]?t:a[a.length-1]+Qo),i++}return 1===a.length&&a.push(dn(e,a[0],1,n)),a}function hn(e){try{const t=new Intl.Locale(e),o=t.getWeekInfo?.().firstDay??t.weekInfo?.firstDay;return"number"==typeof o&&o>=1&&o<=7?o:1}catch{return 1}}function pn(e){const t=e?.locale,o=e?.config?.time_zone,n="server"===t?.time_zone&&function(e){if("string"!=typeof e||""===e)return!1;try{return nn(e),!0}catch{return!1}}(o)?o:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",r=tn.indexOf(String(t?.first_weekday??"language"))+1;return{timeZone:n,firstDay:r>0?r:hn(t?.language??e?.language??"en")}}const mn=["hour","day","week","month"],fn=["day","week","month","year"],gn=["now","end"],yn={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},vn={hour:36e5,day:864e5,week:6048e5};function _n(e,t,o){const n="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof n||!Number.isInteger(n)||n<t)throw new Error(o);return n}function bn(e,t,o){if(!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`);return e}function xn(e){if(null==e)return yn;if("object"!=typeof e||Array.isArray(e))throw new Error('"period" must have "last" and "unit"');const t=e,o={last:_n(t.last??yn.last,1,'"period.last" must be a whole number of 1 or more'),unit:bn(t.unit??yn.unit,mn,"period.unit"),offset:_n(t.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==t.navigate&&!0===t.navigate,until:bn(t.until??"now",gn,"period.until")};if(void 0!==t.navigate&&"boolean"!=typeof t.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==t.calendar&&(o.calendar=bn(t.calendar,fn,"period.calendar")),o}function wn(e,t,o){if("month"===e.unit){if(o)return{start:dn("month",t,-e.last,o),end:t};const n=new Date(t);return n.setMonth(n.getMonth()-e.last),{start:n.getTime(),end:t}}return{start:t-e.last*vn[e.unit],end:t}}function $n(e,t,o,n=0){const r=Math.max(0,e.offset+n);if(e.calendar){const n=e.calendar,a=dn(n,cn(n,t,o),-r,o),i=dn(n,a,1,o);return{start:a,end:0===r&&"now"===e.until?t:i,live:0===r,back:r}}if("month"===e.unit){return{...wn(e,0===r?t:dn("month",t,-r*e.last,o),o),live:0===r,back:r}}const a=e.last*vn[e.unit];return{start:t-(r+1)*a,end:t-r*a,live:0===r,back:r}}const kn=new WeakMap;function Mn(e,t){const o=kn.get(e);return o&&o.key===JSON.stringify(t)?o.steps:0}function zn(e,t,o){kn.set(e,{key:JSON.stringify(t),steps:Math.max(-t.offset,o)})}const En=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Sn=new Map(En.map((e,t)=>[e,22.5*t])),An=[[/north/g,"n"],[/south/g,"s"],[/east/g,"e"],[/west/g,"w"]];function jn(e){const t=(e%360+360)%360;return 360===t?0:t}function Cn(e){if("number"==typeof e)return Number.isFinite(e)?jn(e):null;if("string"!=typeof e)return null;const t=e.trim().toLowerCase();if(""===t)return null;const o=Number(t.replace(/\s*°$/,""));if(Number.isFinite(o))return jn(o);let n=t.replace(/[\s_-]+/g,"");for(const[r,a]of An)n=n.replace(r,a);return Sn.get(n.toUpperCase())??null}function Nn(e){if("number"==typeof e)return Number.isFinite(e)?e:null;if("on"===e)return 1;if("off"===e)return 0;if("string"!=typeof e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function Ln(e){return e.bearing?Cn:Nn}function Fn(e){return"string"==typeof e?e:"number"==typeof e||"boolean"==typeof e?String(e):void 0}function Tn(e,t,o=!1,n=Nn){return o?{t:e,v:null,s:Fn(t)}:{t:e,v:n(t)}}function On(e,t,o=!1,n=Nn){const r=[];for(const a of e??[]){const e=a.lu??a.lc;if(void 0===e)continue;const i=t?a.a?.[t]:a.s;r.push(Tn(Math.round(1e3*e),i,o,n))}return r}const Pn=e=>"number"==typeof e&&Number.isFinite(e)?e:null;function Dn(e,t){return(e??[]).map(e=>{const o="number"==typeof e.start?e.start:Date.parse(e.start);let n;return n="change"===t?Pn(e.change):"state"===t?Pn(e.state)??Pn(e.mean):"min"===t||"max"===t?Pn(e[t])??Pn(e.mean)??Pn(e.state):Pn(e.mean)??Pn(e.state),{t:o,v:n,min:e.min??null,max:e.max??null}})}function Un(e){const t=(e.end-e.start)/864e5;return t<=2?"5minute":t<=35?"hour":t<=400?"day":"month"}function In(e){return{period:Un(e),types:["mean","min","max","state"],value:"mean"}}function Hn(e,t,o){return Bn(t,t=>async function(e,t,o){const n=new Map;if(!e.callWS||0===t.length)return n;const r={type:"history/history_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),significant_changes_only:!1},a=[...new Set(t.filter(e=>!e.attribute).map(e=>e.entity))],i=[...new Set(t.filter(e=>e.attribute).map(e=>e.entity))],s=[];a.length&&s.push(e.callWS({...r,entity_ids:a,minimal_response:!0,no_attributes:!0}).then(e=>{for(const o of t.filter(e=>!e.attribute))n.set(Zn(o),On(e?.[o.entity],void 0,o.text,Ln(o)))}));i.length&&s.push(e.callWS({...r,entity_ids:i,no_attributes:!1}).then(e=>{for(const o of t.filter(e=>e.attribute))n.set(Zn(o),On(e?.[o.entity],o.attribute,o.text,Ln(o)))}));return await Promise.all(s),n}(e,t,o))}function Wn(e,t,o,n=In(o)){return Bn(t,t=>async function(e,t,o,n){const r=new Map;if(!e.callWS||0===t.length)return r;const a=[...new Set(t.map(e=>e.entity))],i=await e.callWS({type:"recorder/statistics_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),statistic_ids:a,period:n.period,types:n.types});for(const s of t)r.set(Zn(s),Dn(i?.[s.entity],n.value));return r}(e,t,o,n))}function Rn(e,t){const o={};for(const[n,r]of Object.entries(e.vars))o[n]=Nn(t.states[r]?.state);return st(e.expr,o)}function qn(e){return e.formula&&!e.text?dt(e):void 0}async function Bn(e,t){const o=e.map(e=>[e,qn(e)]);if(o.every(([,e])=>!e))return t(e);const n=[],r=new Set,a=e=>{r.has(Zn(e))||(r.add(Zn(e)),n.push(e))};for(const[l,c]of o)if(c)for(const e of Object.values(c.vars))a({entity:e});else a(l);const i=await t(n),s=new Map(i);for(const[l,c]of o){if(!c)continue;const e=Object.fromEntries(Object.entries(c.vars).map(([e,t])=>[e,i.get(t)??[]]));s.set(Zn(l),ht(c.expr,e))}return s}function Zn(e){const t=qn(e);if(t)return`=${t.text}|${JSON.stringify(t.vars)}`;const o=e.attribute?`${e.entity}|${e.attribute}`:e.entity;return e.text?`${o}|text`:e.bearing?`${o}#bearing`:o}const Vn=["hour","day","week","month"],Yn=["mean","sum","min","max","first","last","change"];function Gn(e){if(void 0!==e.aggregate&&!Yn.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Yn.join(", ")}`);if(void 0!==e.group_by){if(!Vn.includes(e.group_by))throw new Error(`"group_by" must be one of: ${Vn.join(", ")}`);return{unit:e.group_by,aggregate:e.aggregate??"mean"}}}function Xn(e){let t=null;return e.map(e=>{if(null===e.v)return null;if(null===t)return t=e.v,0;if(e.v>=t){const o=e.v-t;return t=e.v,o}return t-e.v>.1*Math.abs(t)?(t=e.v,Math.max(0,e.v)):0})}function Kn(e,t,o,n,r=!1){const a="change"===o?Xn(e):[],i=[];let s=0;for(let l=0;l+1<t.length;l++){const c=t[l],d=t[l+1],u=Math.min(d,n);for(;s<e.length&&e[s].t<c;)s++;const h={t:c,end:d,v:null};if(i.push(h),u<=c)continue;const p=[],m=e[s-1];let f=s;const g=f<e.length&&e[f].t<u?e[f].t:u;for(m&&g>c&&p.push({v:m.v,dt:g-c,reading:!1,carried:!0,up:0});f<e.length&&e[f].t<u;f++){const t=f+1<e.length&&e[f+1].t<u?e[f+1].t:u,o=e[f];p.push({v:o.v,dt:t-o.t,reading:!0,carried:!0===o.carried,up:a[f]??null})}const y=p.filter(e=>null!==e.v);if(0===y.length)continue;const v=y.map(e=>e.v);switch(r&&(h.min=Math.min(...v),h.max=Math.max(...v)),o){case"mean":{const e=y.reduce((e,t)=>e+t.dt,0);h.v=e>0?y.reduce((e,t)=>e+t.v*t.dt,0)/e:v.reduce((e,t)=>e+t,0)/v.length;break}case"min":h.v=Math.min(...v);break;case"max":h.v=Math.max(...v);break;case"first":h.v=v[0];break;case"last":h.v=v[v.length-1];break;case"sum":{const e=y.filter(e=>e.reading&&!e.carried);h.v=e.length?e.reduce((e,t)=>e+t.v,0):null;break}case"change":h.v=y.reduce((e,t)=>e+(t.reading&&!t.carried?t.up??0:0),0)}}return i}function Jn(e,t,o,n=1/0,r=!1){const a=[];let i=0;for(let s=0;s+1<t.length;s++){const l=t[s],c=t[s+1];for(;i<e.length&&e[i].t<l;)i++;let d=i;const u=[],h=[],p=[];for(;d<e.length&&e[d].t<c;d++){const t=e[d];null===t.v||t.carried||(u.push(t.v),h.push(t.min??t.v),p.push(t.max??t.v))}let m=null;if(u.length&&l<n)if("mean"===o)m=u.reduce((e,t)=>e+t,0)/u.length;else if("sum"===o||"change"===o)m=u.reduce((e,t)=>e+t,0);else if("min"===o)m=Math.min(...u);else if("max"===o)m=Math.max(...u);else if("last"===o)m=u[u.length-1];else{const t=e.slice(0,i).reverse().find(e=>null!==e.v),o=e.slice(i,d).find(e=>e.carried&&null!==e.v);m=(t??o)?.v??u[0]}const f={t:l,end:c,v:m};r&&null!==m&&(f.min=Math.min(...h),f.max=Math.max(...p)),a.push(f)}return a}const Qn={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},er={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};function tr(e,t,o,n=!1){const r=t.timeZone===o&&("week"!==e.unit||1===t.firstDay),a="hour"!==e.unit&&r?e.unit:"hour",{types:i,value:s}=er[e.aggregate];return{period:a,types:n?[...new Set([...i,"min","max"])]:i,value:s}}const or={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class nr{constructor(e){this.onChange=e,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0,this.stale=!1}get(e,t,o,n,r={}){const a=r.live??!0,i="statistics"===n?r.statistics??In(o):void 0,s=`${n}|${t.map(Zn).join(",")}|${i?JSON.stringify(i):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>ir,c=void 0!==this.pausedAt&&"statistics"===n&&a;this.pausedAt=void 0;const d=Math.max(6e4,(o.end-o.start)/100),u=o.start<this.loadedFrom||(a?this.loadedTo!==1/0:o.end>this.loadedTo+d);if(s!==this.shape||u||l&&a||c||this.stale){const r=s===this.shape&&!u&&"statistics"===n&&"ready"===this.status;this.shape=s,this.stale=!1,this.load(e,t,o,a,i,r)}"ready"===this.status&&"history"===n&&this.loadedTo===1/0&&this.appendLive(e,t);const h=new Map;for(const[p,m]of this.data)h.set(p,ar(m,o));return{status:this.status,data:h,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.stale=!1,this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(e,t,o,n,r,a=!1){const i=++this.generation;a||(this.status="loading"),this.loadedFrom=o.start,this.loadedTo=n?1/0:o.end,clearTimeout(this.timer);(r?Wn(e,t,o,r):Hn(e,t,o)).then(o=>{if(i===this.generation){this.data=o,this.status="ready",this.error=void 0,this.seen.clear();for(const o of t)this.seen.set(Zn(o),rr(e,o));r&&n&&this.refreshLater(r),this.onChange()}},e=>{i===this.generation&&(a?r&&n&&this.refreshLater(r):(this.status="error",this.error=e instanceof Error?e.message:String(e?.message??e),this.onChange()))})}refreshLater(e){this.timer=setTimeout(()=>{this.stale=!0,this.onChange()},or[e.period])}appendLive(e,t){for(const o of t){const t=Zn(o),n=rr(e,o),r=this.seen.get(t);if(n.some(e=>!e)||r&&n.every((e,t)=>e===r[t]))continue;this.seen.set(t,n);const a=Math.max(...n.map(e=>Date.parse(e.last_updated??e.last_changed??"")||Date.now())),i=this.data.get(t)??[],s=i[i.length-1];if(s&&a<=s.t)continue;const l=qn(o),c=n[0];i.push(l?{t:a,v:Rn(l,e)}:Tn(a,o.attribute?c.attributes?.[o.attribute]:c.state,o.text,Ln(o))),this.data.set(t,i)}}}function rr(e,t){const o=[...new Set(Object.values(qn(t)?.vars??{}))];return o.length?o.map(t=>e.states[t]):[e.states[t.entity]]}function ar(e,t){let o=0;for(;o<e.length&&e[o].t<t.start;)o++;const n=e.slice(o).filter(e=>e.t<=t.end),r=e[o-1];return r?[{...r,t:t.start,carried:!0},...n]:n}const ir=6e4,sr=new WeakMap;function lr(e,t){let o=sr.get(e);return o||(o=new nr(t),sr.set(e,o)),o}function cr(e){sr.get(e)?.pause()}const dr=["cumulative","derivative","rolling"],ur=["none","day","week","month","billing"],hr=["line","column","area","combined","range_area","sparkline","trend","streamgraph","histogram","violin","beeswarm","heatmap","slope","dumbbell","waterfall","scatter","bubble","box","candlestick","day_clock","spiral","strip_plot","cycle_plot","duration_curve"];const pr={W:1,kW:1e3,MW:1e6},mr={Wh:1,kWh:1e3,MWh:1e6};function fr(e,t,o,n){let r=null;for(let s=t.length-1;s>=0&&null===r;s--)r=t[s].v;if(null===r)return{...e,unit:o};const a=Wt(r,e.decimals,n),i=Bt(a,o);return{...e,unit:o,value:r,valueText:a,display:i,label:`${e.name}, ${i}`}}function gr(e,t,o,n,r,a){const i=e.config;if("cumulative"!==i.transform||0===t.length)return{entity:e,points:t};const s=i.transform_reset??"none",l="number"==typeof i.transform_reset_day?i.transform_reset_day:1,c=t.map(e=>e.carried?{t:e.t,v:e.v,carried:!0}:{t:e.t,v:e.v}),d=function(e,t,o,n,r=1){if("none"===e||o<=t)return[];const a="billing"===e?un("month",t,o,n).map(e=>r>1?dn("day",e,r-1,n):e):un(e,t,o,n);return a.filter(e=>e>t&&e<=o)}(s,c[0].t,n,r,l),u=function(e){if(e.formula)return"meter"===e.formula?"total":void 0;if(e.config.attribute)return;const t=e.stateObj?.attributes?.state_class;return"total_increasing"===t?"increasing":"total"===t?"total":void 0}(e);if(u){const t=function(e,t,o){const n="increasing"===o?Xn(e):function(e){let t=null;return e.map(e=>{if(null===e.v)return null;const o=null===t?0:e.v-t;return t=e.v,o})}(e),r=[];let a=0,i=0;return e.forEach((o,s)=>{for(;i<t.length&&t[i]<=o.t;)r.push({t:t[i],v:a},{t:t[i],v:0}),a=0,i++;const l=!0===o.carried&&s>0&&null===e[s-1].v&&null!==n[s]?0:n[s];null!==l?(a+=l,r.push({t:o.t,v:a})):r.push({t:o.t,v:null})}),r}(c,d,u);return{entity:fr(e,t,e.unit,a),points:t}}const h=e.stateObj?.attributes?.unit_of_measurement,{unit:p,factor:m}=(f=e.unit,g="string"==typeof h?h:void 0,void 0!==pr[f]?{unit:`${f}h`,factor:1}:void 0!==mr[f]&&void 0!==g&&void 0!==pr[g]?{unit:f,factor:pr[g]/mr[f]}:{unit:f?`${f}·h`:"",factor:1});var f,g;let y=function(e,t,o){const n=[];let r=0,a=0,i=null,s=e[0]?.t??o;const l=e=>{null!==i&&e>s&&(r+=i*(e-s)/36e5),s=Math.max(s,e)},c=e=>{for(;a<t.length&&t[a]<=e;)l(t[a]),n.push({t:t[a],v:null===i?null:r},{t:t[a],v:null===i?null:0}),r=0,a++;l(e)};for(const u of e)c(u.t),i=u.v,n.push({t:u.t,v:null===u.v?null:r});const d=e[e.length-1];return d&&o>d.t&&(c(o),null!==i&&n.push({t:o,v:r})),n}(c,d,Math.max(n,o.start));return 1!==m&&(y=y.map(e=>null===e.v?e:{t:e.t,v:e.v*m})),{entity:fr(e,y,p,a),points:y}}const yr=e=>1===e.path.length&&"transform"===e.path[0],vr=new WeakMap,_r={schema:[],fields:[]};const br=["line","column","area"],xr=36e5,wr=1440,$r=/^\s*(\d{1,2}):(\d{2})(?::(\d{2}))?\s*$/,kr=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim()),Mr=e=>"object"==typeof e&&null!==e&&!Array.isArray(e);function zr(e){if("string"!=typeof e)return;const t=$r.exec(e);if(!t)return;const o=Number(t[1]),n=Number(t[2]);return o>24||n>59||24===o&&n>0?void 0:60*o+n}function Er(e,t){if(void 0===e||"boolean"==typeof e)return;if(!Mr(e))throw new Error(`"${t}" must be true, false or a list of options`);const{price:o,tariff:n,currency:r,split:a}=e;if(!(void 0===o||kr(o)||"number"==typeof o&&Number.isFinite(o)))throw new Error(`"${t}.price" must be a number or an entity id`);if(void 0!==r&&("string"!=typeof r||!/^[A-Za-z]{3}$/.test(r)))throw new Error(`"${t}.currency" must be a three-letter currency code, like GBP or EUR`);if(void 0!==a&&"boolean"!=typeof a)throw new Error(`"${t}.split" must be true or false`);if(void 0!==n){if(!Array.isArray(n))throw new Error(`"${t}.tariff" must be a list of periods`);n.forEach((e,o)=>{const n=`${t}.tariff[${o}]`;if(!Mr(e))throw new Error(`"${n}" must have "from", "to" and "price"`);const r=zr(e.from),a=zr(e.to);if(void 0===r)throw new Error(`"${n}.from" must be a time, like 00:30`);if(void 0===a)throw new Error(`"${n}.to" must be a time, like 05:30`);if(r%wr===a%wr)throw new Error(`"${n}" must end at another time than it starts`);if("number"!=typeof e.price||!Number.isFinite(e.price))throw new Error(`"${n}.price" must be a number`);for(const t of["name","color"])if(void 0!==e[t]&&"string"!=typeof e[t])throw new Error(`"${n}.${t}" must be text`)})}}function Sr(e,t){const o=e.cost,n=t.cost;if(!1===o)return;if(void 0===o&&(void 0===n||!1===n))return;const r={...Mr(n)?n:{},...Mr(o)?o:{}},a=e.energy_price;return void 0===r.price&&void 0===r.tariff&&void 0!==a&&(r.price=a),r}function Ar(e){return!!br.includes(String(e.style??"bar"))&&(void 0!==e.cost&&!1!==e.cost||(e.entities??[]).some(e=>Mr(e)&&void 0!==e.cost&&!1!==e.cost))}function jr(e,t=[]){const o=new Set,n=e=>{Mr(e)&&kr(e.price)&&o.add(e.price.trim())};n(e.cost);for(const r of e.entities??[])Mr(r)&&n(r.cost);for(const r of t){const t=Sr(r,e);t&&kr(t.price)&&o.add(t.price.trim())}return[...o]}function Cr(e){const t=[{price:e.price}],o=new Map,n=(e.tariff??[]).map(e=>{const n=e.name?`n:${e.name}`:`p:${e.price}`;let r=o.get(n);return void 0===r&&(r=t.length,o.set(n,r),t.push({name:e.name,price:e.price,color:e.color})),r});return{bands:t,bandOf:n}}function Nr(e,t){for(let o=0;o<t.length;o++){const{from:n,to:r}=t[o];if(n<r?e>=n&&e<r:e>=n||e<r)return o}return-1}const Lr={W:.001,kW:1,MW:1e3},Fr={Wh:.001,kWh:1,MWh:1e3};function Tr(e,t){if(!e.length||e[0].t>t)return-1;let o=0,n=e.length-1;for(;o<n;){const r=o+n+1>>1;e[r].t<=t?o=r:n=r-1}return o}function Or(e,t){for(let o=t;o>=0;o--)if(null!==e[o].v)return e[o].v;return null}function Pr(e,t,o,n,r){const a=qt(o,n),i=r??a.decimals;if(null===t)return{...e,unit:a.unit,decimals:i,value:null,valueText:"",display:"",label:e.name};const s=Wt(t,i,n),l=Bt(s,a.unit);return{...e,unit:a.unit,decimals:i,value:t,valueText:s,display:l,label:`${e.name}, ${l}`}}const Dr={1:["primary"],2:["green","red"],3:["green","amber","red"],4:["green","#84cc16","amber","red"]},Ur=["green","#14b8a6","#84cc16","amber","#f97316","red"];function Ir(e,t,o){return e.name?e.name:"number"==typeof e.price?function(e,t,o){const{unit:n}=qt(t,o);return Bt(Wt(e,Math.min(4,Math.max(2,(String(e).split(".")[1]??"").length)),o),n)}(e.price,t,o):Ze(o,"cost_band_standard")}const Hr=new WeakMap;function Wr(e,t,o,n){const{bandOf:r}=Cr(e);return function(e,t,o,n,r){const a=Array.isArray(t)?t.filter(e=>null!==e.v):[],i=e=>{if("number"==typeof t)return t;if(!a.length)return null;let o=0,n=a.length-1;if(e<a[0].t)return a[0].v;for(;o<n;){const t=o+n+1>>1;a[t].t<=e?o=t:n=t-1}return a[o].v},s=o.map(e=>({from:zr(e.from),to:zr(e.to),price:e.price})).filter(e=>void 0!==e.from&&void 0!==e.to).map(e=>({...e,to:e.to%wr})),l=new Set([e.start]);for(const d of a)d.t>e.start&&d.t<e.end&&l.add(d.t);if(s.length)for(let d=cn("day",e.start,r);d<e.end;d=dn("day",d,1,r)){const t=rn(d,r.timeZone);for(const o of s)for(const n of[o.from,o.to]){const o=sn(r.timeZone,t.year,t.month,t.day,Math.floor(n/60),n%60);o>e.start&&o<e.end&&l.add(o)}}const c=[];for(const d of[...l].sort((e,t)=>e-t)){let e;if(s.length){const t=rn(d,r.timeZone),o=Nr(60*t.hour+t.minute,s);e=o>=0?{t:d,v:s[o].price,band:n[o]??0}:{t:d,v:i(d),band:0}}else e={t:d,v:i(d),band:0};const t=c[c.length-1];t&&t.v===e.v&&t.band===e.band||c.push(e)}return c}(t,kr(e.price)?o?.points.get(e.price.trim())??[]:"number"==typeof e.price?e.price:void 0,e.tariff??[],r,n)}function Rr(e,t,o,n){const r=function(e,t){if(e.currency)return e.currency.toUpperCase();const o=t?.config?.currency;if("string"==typeof o&&/^[A-Za-z]{3}$/.test(o))return o.toUpperCase();const n=kr(e.price)?t?.states[e.price.trim()]?.attributes?.unit_of_measurement:void 0,r="string"==typeof n?/^([A-Za-z]{3})\s*\//.exec(n)?.[1]:void 0;return r?r.toUpperCase():"EUR"}(o,n.hass),a="number"==typeof e.config.decimals?e.config.decimals:void 0;if(!function(e){return void 0!==e.price||(e.tariff??[]).length>0}(o))return{entity:Pr(e,null,r,n.hass,a),points:t.map(e=>({t:e.t,v:null})),noPrice:!0};const i=Wr(o,n.load,n.prices,n.zone),s=function(e){const t=e.unit,o=e.config.attribute?void 0:e.stateObj?.attributes?.state_class;return void 0!==Lr[t]&&"total_increasing"!==o&&"total"!==o?{how:"power",factor:Lr[t]}:{how:"total"===o?"total":"increasing",factor:Fr[t]??1}}(e),l=e=>{const o=(t,o)=>function(e,t,o,n){if(!e.length)return null;const r=e=>void 0===n||e.band===n?e.v:null===e.v?null:0;let a=0,i=e.length-1;for(;a<i;){const o=a+i+1>>1;e[o].t<=t?a=o:i=o-1}if(o<=t)return r(e[a]);let s=0,l=0;for(let c=a;c<e.length;c++){const n=Math.max(t,c===a?t:e[c].t);if(n>=o)break;const i=Math.min(o,c+1<e.length?e[c+1].t:o),d=r(e[c]);null!==d&&i>n&&(s+=d*(i-n),l+=i-n)}return l>0?s/l:null}(i,t,o,e);if(n.bounds&&"statistics"===n.source)return n.groupRows(function(e,t,o,n=xr){return e.map(e=>{if(null===e.v)return{...e};const r=o(e.t,e.t+n);return{...e,v:null===r?null:e.v*t*r}})}(t,s.factor,o),n.bounds,n.until);const r=function(e,t,o,n=[],r=-1/0){const a=[];let i=0;if("power"!==t.how){const n="increasing"===t.how?Xn(e):(()=>{let t=null;return e.map(e=>{if(null===e.v)return null;const o=null===t?0:e.v-t;return t=e.v,o})})();let r;return e.forEach((e,s)=>{const l=n[s];if(null!==l){if(0!==l){const n=o(r??e.t,e.t);null!==n&&(i+=l*t.factor*n)}r=e.t,a.push({t:e.t,v:i})}else a.push({t:e.t,v:null})}),a}let s=null,l=e[0]?.t??r,c=0;const d=e=>{if(null!==s&&e>l){const n=o(l,e);null!==n&&(i+=s*t.factor*(e-l)*n/xr)}l=Math.max(l,e)},u=e=>{for(;c<n.length&&n[c]<e;)n[c]>l&&(d(n[c]),a.push({t:n[c],v:null===s?null:i})),c++;d(e)};for(const p of e)u(p.t),s=p.v,a.push({t:p.t,v:null===p.v?null:i});const h=e[e.length-1];return h&&r>h.t&&(u(r),null!==s&&a.push({t:r,v:i})),a}(t,s,o,n.bounds??[],n.until);if(n.bounds)return function(e,t,o){const n=[];for(let r=0;r+1<t.length;r++){const a=t[r],i=t[r+1],s=Math.min(i,o),l={t:a,end:i,v:null};if(n.push(l),s<=a)continue;const c=Tr(e,s);if(c<0)continue;const d=Tr(e,a);let u=!1;for(let t=c;t>d&&!u;t--)null!==e[t].v&&(u=!0);if(!u&&(d<0||null===e[d].v))continue;const h=Or(e,c);null!==h&&(l.v=h-(d<0?0:Or(e,d)??0))}return n}(r,n.bounds,n.until);const a=r[r.length-1];return"history"===n.source&&a&&null!==a.v&&a.t<n.until&&r.push({t:n.until,v:a.v}),r};let c=l(),d=null;if(n.bounds){for(const e of c)null!==e.v&&(d=(d??0)+e.v);n.cumulative&&(c=function(e){let t=0;return e.map(e=>null===e.v?{...e}:(t+=e.v,{...e,v:t}))}(c))}else for(let h=c.length-1;h>=0&&null===d;h--)d=c[h].v;const u={entity:Pr(e,d,r,n.hass,a),points:c};if(o.split&&n.bounds&&!n.cumulative&&(o.tariff??[]).length){const{bands:e}=Cr(o),t=function(e,t){const o=(e,o)=>0===o?t??("number"==typeof e.price?e.price:0):e.price,n=e.map((e,t)=>({i:t,p:o(e,t)})).sort((e,t)=>e.p-t.p),r=Dr[e.length]??Ur,a=[];return n.forEach(({i:t},o)=>{const n=r.length===e.length?o:Math.round(o*(r.length-1)/Math.max(1,e.length-1));a[t]=e[t].color??r[n]}),a}(e,"number"==typeof o.price?o.price:void 0),a=e.map((e,o)=>({name:Ir(e,r,n.hass),color:t[o],points:l(o)}));u.parts=a.filter((e,t)=>t>0||e.points.some(e=>null!==e.v&&0!==e.v))}return u}const qr=["cumulative","derivative","rolling"],Br=["s","min","h","d"],Zr={s:1e3,min:6e4,h:36e5,d:864e5},Vr=["line","column","area","combined","range_area","sparkline","trend","streamgraph","histogram","violin","beeswarm","heatmap","slope","dumbbell","waterfall","scatter","bubble","box","candlestick","day_clock","spiral","strip_plot","cycle_plot","duration_curve"],Yr=/^\s*(\d+(?:\.\d+)?)\s*(s|min|h|d)\s*$/;function Gr(e){if("string"!=typeof e)return;const t=Yr.exec(e);if(!t)return;const o=Number(t[1])*Zr[t[2]];return o>0&&o<=6048e5?o:void 0}function Xr(e,t,o){const n=t-o;for(;e.length>1&&e[0].b<=n;)e.shift();let r=0,a=0;for(const i of e){const e=i.b-Math.max(i.a,n);e<=0||(r+=i.r*e,a+=e)}return a>0?r/a:e[e.length-1].r}const Kr={"Wh/h":"W","kWh/h":"kW","MWh/h":"MW"};function Jr(e,t){const o=`${e}/${t}`;return Kr[o]??o}function Qr(e,t,o,n){let r=null;for(let s=t.length-1;s>=0&&null===r;s--)r=t[s].v;if(null===r)return{...e,unit:o};const a=Wt(r,e.decimals,n),i=Bt(a,o);return{...e,unit:o,value:r,valueText:a,display:i,label:`${e.name}, ${i}`}}function ea(e,t,o,n=Date.now()){const r=e.config;if("derivative"!==r.transform)return{entity:e,points:t};const a=r.transform_unit_time??"h",i=!e.formula&&!e.config.attribute&&"total_increasing"===e.stateObj?.attributes?.state_class,s="number"==typeof r.transform_smoothing?r.transform_smoothing:1;let l=function(e,t,o=!1,n=1,r=0){const a=[];let i,s=[],l=[];for(const c of e){if(null===c.v){a.length&&null!==a[a.length-1].v&&a.push({t:c.t,v:null}),i=void 0,s=[],l=[];continue}if(void 0===i||i.carried||c.t<=i.t){i=c;continue}if(o&&c.v<i.v){i=c;continue}const e=(c.v-i.v)*t/(c.t-i.t);r>0?(l.push({a:i.t,b:c.t,r:e}),a.push({t:c.t,v:Xr(l,c.t,r)})):(s.push(e),s.length>n&&s.shift(),a.push({t:c.t,v:s.reduce((e,t)=>e+t,0)/s.length})),i=c}return a}(t,Zr[a],i,s,Gr(r.transform_smoothing_time)??0);const c=l.every(e=>null===e.v)?function(e){const t=e.filter(e=>null!==e.v);if(t.length&&!t.some(e=>e.v!==t[0].v))return t[0].t}(t):void 0;return void 0!==c&&c<n&&(l=[{t:c,v:0},{t:n,v:0}]),{entity:Qr(e,l,Jr(e.unit,a),o),points:l}}const ta=e=>1===e.path.length&&"transform"===e.path[0],oa=new WeakMap,na={schema:[],fields:[]};const ra=["mean","median","min","max"];function aa(e){const t=e;return"rolling"===t.transform?Gr(t.transform_window):void 0}function ia(e){const t=Math.max(1,Math.ceil(e.length/401)),o=1===t?[...e]:e.filter((e,o)=>o%t===0);o.sort((e,t)=>e.v-t.v);const n=o.reduce((e,t)=>e+t.d,0);if(n<=0)return o[o.length>>1].v;let r=0;for(const a of o)if(r+=a.d,r>=n/2)return a.v;return o[o.length-1].v}function sa(e,t,o){let n=null;for(let i=t.length-1;i>=0&&null===n;i--)n=t[i].v;if(null===n)return e;const r=Wt(n,e.decimals,o),a=Bt(r,e.unit);return{...e,value:n,valueText:r,display:a,label:`${e.name}, ${a}`}}function la(e,t,o,n,r=Date.now()){const a=aa(e.config);if(void 0===a)return{entity:e,points:t};const i=ar(function(e,t,o="mean",n=1/0,r=[]){const a=[];for(let d=0;d<e.length;d++){const t=e[d];if(t.t>n)break;const o=d+1<e.length?Math.min(e[d+1].t,n):n;a.length&&a[a.length-1].a===t.t&&a.pop(),a.push({a:t.t,b:Math.max(t.t,o),v:t.v})}if(!a.length)return[];const i=new Set;for(const d of a)i.add(d.a),d.a+t<a[a.length-1].b&&i.add(d.a+t);Number.isFinite(n)&&i.add(a[a.length-1].b);for(const d of r)d>a[0].a&&d<a[a.length-1].b&&i.add(d);const s=[];let l=0,c=0;for(const d of[...i].sort((e,t)=>e-t)){const e=d-t;for(;l<a.length&&a[l].b<=e&&a[l].b<d;)l++;for(;c<a.length&&a[c].a<=d;)c++;const n=[];for(let t=l;t<c;t++){const o=a[t];null!==o.v&&n.push({v:o.v,d:Math.max(0,Math.min(o.b,d)-Math.max(o.a,e))})}let r=null;if(n.length)if("min"===o)r=Math.min(...n.map(e=>e.v));else if("max"===o)r=Math.max(...n.map(e=>e.v));else if("median"===o)r=ia(n);else{const e=n.reduce((e,t)=>e+t.d,0);r=e>0?n.reduce((e,t)=>e+t.v*t.d,0)/e:n[n.length-1].v}const i=s[s.length-1];(null!==r||i&&null!==i.v)&&s.push({t:d,v:r})}return"mean"===o?s:function(e,t){const o=[];for(let n=0;n<e.length;n++){const r=e[n],a=e[n-1],i=e[n+1];if(a&&i&&r.v===a.v){if(i.v!==r.v){let a=n;for(;a>0&&e[a-1].v===r.v;)a--;r.t-e[a].t>=t/4&&o.push(r)}}else o.push(r)}return o}(s,t)}(t,a,e.config.transform_stat??"mean",Math.min(r,o.end),[o.start]),o);return{entity:sa(e,i,n),points:i}}const ca=e=>1===e.path.length&&"transform"===e.path[0],da=new WeakMap;const ua=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim());function ha(e,t){if(void 0===e)return;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`"${t("")}" must have an "entity"`);const o=e;if(void 0!==o.entity&&!ua(o.entity))throw new Error(`"${t("entity")}" must be an entity id`);if((Array.isArray(o.state)?o.state:void 0===o.state?[]:[o.state]).some(e=>"string"!=typeof e&&"number"!=typeof e))throw new Error(`"${t("state")}" must be a state or a list of states`);for(const n of["above","below"])if(void 0!==o[n]&&("number"!=typeof o[n]||!Number.isFinite(o[n])))throw new Error(`"${t(n)}" must be a number`)}function pa(e){ha(e.when,e=>"when"+(e?`.${e}`:"")),(e.entities??[]).forEach((e,t)=>{"object"==typeof e&&null!==e&&ha(e.when,e=>`entities[${t}].when${e?`.${e}`:""}`)});for(const t of["when_ghost","when_strip"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`)}function ma(e){if(!e||"object"!=typeof e||!ua(e.entity))return;const t=(Array.isArray(e.state)?e.state:"string"==typeof e.state?e.state.split(","):[e.state]).filter(e=>null!=e).map(e=>String(e).trim()).filter(Boolean),o={entity:e.entity.trim()};return t.length&&(o.state=t),"number"==typeof e.above&&(o.above=e.above),"number"==typeof e.below&&(o.below=e.below),o.state||void 0!==o.above||void 0!==o.below?o:void 0}function fa(e,t){return ma(e.when)??ma(t?.when)}const ga=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function ya(e,t){if(void 0===t)return!1;if(e.state&&!e.state.includes(t.trim()))return!1;if(void 0!==e.above||void 0!==e.below){const o=Nn(t);if(null===o)return!1;if(void 0!==e.above&&!(o>e.above))return!1;if(void 0!==e.below&&!(o<e.below))return!1}return!0}function va(e,t){const o=[];for(const n of t){const t=ya(e,n.s);0!==o.length&&o[o.length-1].ok===t||o.push({t:n.t,ok:t})}return o}const _a=e=>void 0!==e&&(null!==e.v||void 0!==e.s);const ba=new WeakMap;function xa(e,t,o,n,r,a,i){const s=[...new Set(o.map(e=>fa(e,i)?.entity).filter(e=>!!e))];if(0===s.length)return;let l=ba.get(e);l||(l=new nr(a),ba.set(e,l));const c=s.map(e=>({entity:e,text:!0})),d=l.get(t,c,n,"history",{live:r}),u=new Map;return c.forEach(e=>u.set(e.entity,d.data.get(Zn(e))??[])),{pending:"loading"===d.status,states:u,...i?{card:i}:{}}}function wa(e,t,o){return xa(e.host,e.hass,e.items.map(e=>e.config),t,o,e.requestUpdate,e.raw)}function $a(e,t){return t?.pending&&"ready"===e?"loading":e}function ka(e,t,o){const n=fa(e,o?.card);return n&&o?function(e,t){const o=[];let n,r=!1,a=0;const i=({t:e,ok:t})=>{t!==r&&(r=t,r?_a(n)&&o.push({...n,t:e,carried:!0}):_a(o[o.length-1])&&(_a(n)&&e>o[o.length-1].t&&o.push({...n,t:e,carried:!0}),o.push({t:e,v:null})))};for(const s of e){for(;a<t.length&&t[a].t<=s.t;)i(t[a++]);r?o.push(s):_a(o[o.length-1])&&o.push({t:s.t,v:null}),n=s}for(;a<t.length;)i(t[a++]);return o}(t,va(n,o.states.get(n.entity)??[])):t}const Ma=e=>!0===e.when_ghost;const za={energy:{Wh:[1,0],kWh:[1e3,0],MWh:[1e6,0],GWh:[1e9,0]},power:{W:[1,0],kW:[1e3,0],MW:[1e6,0]},temperature:{"°C":[1,0],"°F":[5/9,-160/9],K:[1,-273.15]},speed:{"m/s":[1,0],"km/h":[1/3.6,0],mph:[.44704,0],kn:[1852/3600,0],"ft/s":[.3048,0]},pressure:{Pa:[1,0],hPa:[100,0],mbar:[100,0],kPa:[1e3,0],bar:[1e5,0],inHg:[3386.389,0],mmHg:[133.322387415,0],psi:[6894.757293168,0]},length:{mm:[1,0],cm:[10,0],m:[1e3,0],in:[25.4,0],ft:[304.8,0]}},Ea=new Map;for(const[Lj,Fj]of Object.entries(za))for(const e of Object.keys(Fj))Ea.set(e,Lj);function Sa(e,t){if(void 0===e||void 0===t||e===t)return;const o=Ea.get(e);if(!o||Ea.get(t)!==o)return;const[n,r]=za[o][e],[a,i]=za[o][t];return{from:e,to:t,slope:n/a,apply:e=>(e*n+r-i)/a}}function Aa(e,t){if(!t)return e;const o=e=>"number"==typeof e?t.apply(e):e;return e.map(e=>{const n={...e,v:null===e.v?null:t.apply(e.v)};return void 0!==e.min&&(n.min=o(e.min)),void 0!==e.max&&(n.max=o(e.max)),n})}const ja=[{name:"legend_toggle",selector:{boolean:{}}}];function Ca(e){const t=e.config.attribute;return t?`${e.entityId}|${t}`:e.entityId}function Na(e){const t=JSON.stringify(e)??"";let o=2166136261;for(let n=0;n<t.length;n++)o^=t.charCodeAt(n),o=Math.imul(o,16777619);return(o>>>0).toString(36)}const La=new WeakMap;function Fa(){try{return globalThis.localStorage??void 0}catch{return}}function Ta(e){try{const t=JSON.parse(Fa()?.getItem(e)??"[]");return new Set(Array.isArray(t)?t.filter(e=>"string"==typeof e):[])}catch{return new Set}}function Oa(e){const t="chartdeck-legend-"+Na(e.raw);let o=La.get(e.host);return o&&o.storageKey===t||(o={storageKey:t,hidden:Ta(t),held:!1},La.set(e.host,o)),o}function Pa(e,t,o=()=>!1){if(!function(e){const{raw:t}=e;return!0===t.legend_toggle&&"hidden"!==t.header&&!0!==t.multiples&&(e.config.show.name||e.config.show.value)}(t))return e;const n=function(e){return Oa(e).hidden}(t),r=new Set(e.series.filter(o).map(e=>e.index));return{...e,legend:{all:e.series,locked:r},series:e.series.filter(e=>r.has(e.index)||!n.has(Ca(e.entity)))}}function Da(e,t){const o=Oa(e);o.hidden=t,function(e){try{const t=Fa();if(!t)return;0===e.hidden.size?t.removeItem(e.storageKey):t.setItem(e.storageKey,JSON.stringify([...e.hidden]))}catch{}}(o),e.requestUpdate()}function Ua(e,t,o){const{show:n}=t.config,r=Oa(t),a=e.all.filter(t=>!e.locked.has(t.index)).map(e=>Ca(e.entity)),i=()=>{void 0!==r.timer&&clearTimeout(r.timer),r.timer=void 0},s=e=>Da(t,function(e,t,o){const n=t.filter(e=>e!==o),r=!e.has(o)&&n.every(t=>e.has(t));return r?new Set:new Set(n)}(Oa(t).hidden,a,e)),l=Ze(t.hass,"legend_toggle_hint");return R`<div class="series-header legend-toggles">
    ${e.all.map(a=>{const c=po(a.entity,a.points,o,t.hass)??a.entity.display,d=R`<span class="swatch" style="background:${a.color}"></span>
        ${n.name?R`<span class="series-name">${a.entity.name}</span>`:Z}
        ${n.value&&c?R`<span class="series-value">${c}</span>`:Z}`;if(e.locked.has(a.index))return R`<div class="entity series-item" data-index=${a.index} tabindex="0" aria-label=${a.entity.label}>
          ${d}
        </div>`;const u=Ca(a.entity),h=r.hidden.has(u);return R`<button
        class="series-item series-toggle ${h?"off":""}"
        type="button"
        data-series=${a.index}
        aria-pressed=${h?"false":"true"}
        aria-label=${a.entity.label}
        title=${l}
        @pointerdown=${e=>{e.button>0||(i(),r.held=!1,r.timer=setTimeout(()=>{r.timer=void 0,r.held=!0,s(u)},500))}}
        @pointerleave=${i}
        @pointercancel=${i}
        @contextmenu=${e=>e.preventDefault()}
        @click=${e=>{e.stopPropagation(),i(),r.held?r.held=!1:e.shiftKey?s(u):Da(t,function(e,t){const o=new Set(e);return o.has(t)?o.delete(t):o.add(t),o}(Oa(t).hidden,u))}}
      >
        ${d}
      </button>`})}
  </div>`}const Ia=a`
  .series-toggle {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 2px 6px;
    margin: -2px -6px;
    border-radius: 12px;
    text-align: start;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
  }
  .series-toggle:hover {
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
  .series-toggle.off .swatch {
    opacity: 0.35;
  }
  .series-toggle.off .series-name,
  .series-toggle.off .series-value {
    opacity: 0.6;
    text-decoration: line-through;
  }
`,Ha=["smooth","straight","step"],Wa=e=>(Math.round(100*e)/100).toString();function Ra(e){return e.map(([e,t],o)=>`${o?"L":"M"}${Wa(e)},${Wa(t)}`).join("")}function qa(e,t){return 0===e.length?"":1===e.length?`M${Wa(e[0][0])},${Wa(e[0][1])}h0`:"smooth"===t?function(e){const t=e.length;if(t<3)return Ra(e);const o=[],n=[];for(let i=0;i<t-1;i++)o.push(e[i+1][0]-e[i][0]),n.push(0===o[i]?0:(e[i+1][1]-e[i][1])/o[i]);const r=[n[0]];for(let i=1;i<t-1;i++)r.push(n[i-1]*n[i]<=0?0:(n[i-1]+n[i])/2);r.push(n[t-2]);for(let i=0;i<t-1;i++){if(0===n[i]){r[i]=0,r[i+1]=0;continue}const e=r[i]/n[i],t=r[i+1]/n[i],o=e*e+t*t;if(o>9){const a=3/Math.sqrt(o);r[i]=a*e*n[i],r[i+1]=a*t*n[i]}}let a=`M${Wa(e[0][0])},${Wa(e[0][1])}`;for(let i=0;i<t-1;i++){const t=o[i]/3;a+=`C${Wa(e[i][0]+t)},${Wa(e[i][1]+r[i]*t)},${Wa(e[i+1][0]-t)},${Wa(e[i+1][1]-r[i+1]*t)},${Wa(e[i+1][0])},${Wa(e[i+1][1])}`}return a}(e):"step"===t?function(e){let t=`M${Wa(e[0][0])},${Wa(e[0][1])}`;for(let o=1;o<e.length;o++)t+=`H${Wa(e[o][0])}V${Wa(e[o][1])}`;return t}(e):Ra(e)}function Ba(e){const t=[];let o=[];for(const n of e)null===n.v?(o.length&&t.push(o),o=[]):o.push(n);return o.length&&t.push(o),t}const Za=1e3,Va=200,Ya=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],Ga=["history","statistics"];function Xa(e){if(xn(e.period),Gn(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t||null===t)continue;const e=t;if(void 0!==e.transform&&!dr.includes(e.transform))throw new Error(`"transform" must be one of: ${dr.join(", ")}`);if(void 0!==e.transform_reset&&!ur.includes(e.transform_reset))throw new Error(`"transform_reset" must be one of: ${ur.join(", ")}`);const o=e.transform_reset_day;if(void 0!==o&&("number"!=typeof o||!Number.isInteger(o)||o<1||o>28))throw new Error('"transform_reset_day" must be a whole number from 1 to 28')}}(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t||null===t)continue;const e=t;if(void 0!==e.transform&&!qr.includes(e.transform))throw new Error(`"transform" must be one of: ${qr.join(", ")}`);if(void 0!==e.transform_unit_time&&!Br.includes(e.transform_unit_time))throw new Error(`"transform_unit_time" must be one of: ${Br.join(", ")}`);const o=e.transform_smoothing;if(void 0!==o&&("number"!=typeof o||!Number.isInteger(o)||o<1||o>100))throw new Error('"transform_smoothing" must be a whole number from 1 to 100');const n=e.transform_smoothing_time;if(void 0!==n&&""!==n&&void 0===Gr(n))throw new Error('"transform_smoothing_time" must be a time up to 7 days, like 90s, 15min, 1h or 1d')}}(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t||null===t)continue;const e=t,o=e.transform_window;if(void 0!==o&&""!==o&&void 0===Gr(o))throw new Error('"transform_window" must be a time up to 7 days, like 30min, 2h or 1d');if("rolling"===e.transform&&(void 0===o||""===o))throw new Error('"transform: rolling" needs a "transform_window", like 2h');if(void 0!==e.transform_stat&&!ra.includes(e.transform_stat))throw new Error(`"transform_stat" must be one of: ${ra.join(", ")}`);if(void 0!==e.transform_raw&&"boolean"!=typeof e.transform_raw)throw new Error('"transform_raw" must be true or false')}}(e),pa(e),function(e){const t=void 0!==e.cost||(e.entities??[]).some(e=>Mr(e)&&void 0!==e.cost);if(!t)return;const o=String(e.style??"bar");if(!br.includes(o))throw new Error(`"cost" works with these styles: ${br.join(", ")}`);Er(e.cost,"cost"),(e.entities??[]).forEach((t,o)=>{if(Mr(t)&&(Er(t.cost,`entities[${o}].cost`),Sr(t,e)&&void 0!==t.transform))throw new Error(`"entities[${o}]" can't have both "cost" and "transform"`)})}(e),void 0!==e.source&&!Ga.includes(e.source))throw new Error(`"source" must be one of: ${Ga.join(", ")}`);const t=[e.curve,...(e.entities??[]).map(e=>"object"==typeof e?e.curve:void 0)];for(const o of t)if(void 0!==o&&!Ha.includes(o))throw new Error(`"curve" must be one of: ${Ha.join(", ")}`)}function Ka(e,t,o,n,r,a,i=o){return({entity:e,points:t}=gr(e,t,o,n,r,a)),({entity:e,points:t}=ea(e,t,a,n)),({entity:e,points:t}=la(e,t,i,a,n)),{entity:e,points:t}}function Ja(e,t=Date.now(),o={}){const n=xn(e.raw.period),r=e.raw.source??"history",a=pn(e.hass),i=$n(n,t,a,n.navigate?Mn(e.host,n):0),s=Gn(e.raw),l={start:s?cn(s.unit,i.start,a):i.start,end:i.end},c=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute,...o.text?{text:!0}:pt(e.config)})),d=lr(e.host,e.requestUpdate);let u=s&&"statistics"===r?tr(s,a,e.hass.config?.time_zone,!0===o.range):void 0;const h=Ar(e.raw)?e.items.map(t=>Sr(t.config,e.raw)):[],p=h.some(e=>void 0!==e);u&&(o.hourly||p)&&(u={...u,period:"hour"}),u&&p&&(u={...u,types:[...new Set([...u.types,"change"])],value:"change"});const m=u?{start:l.start-Qn[u.period],end:l.end}:l,f=o.text?0:(g=e.items.map(e=>e.config),Math.max(0,...g.map(e=>aa(e)??0)));var g;const y=f?{start:m.start-f,end:m.end}:m,v=d.get(e.hass,c,y,r,{live:i.live,statistics:u}),_=xa(e.host,e.hass,e.items.map(e=>e.config),y,i.live,e.requestUpdate,e.raw),b=p?function(e,t,o,n,r,a){const i=new Map;if(!o.length)return{pending:!1,points:i};let s=Hr.get(e);s||(s=new nr(a),Hr.set(e,s));const l=o.map(e=>({entity:e})),c=s.get(t,l,n,"history",{live:r});return l.forEach(e=>i.set(e.entity,c.data.get(Zn(e))??[])),{pending:"loading"===c.status,points:i}}(e.host,e.hass,jr(e.raw,e.items.map(e=>e.config)),y,i.live,e.requestUpdate):void 0,x=s?un(s.unit,l.start,l.end,a):[],w=e.raw.curve??"smooth",$=Math.min(l.end,t),k=(e,t)=>{const n=t[t.length-1];return s?"statistics"===r?Jn(t,x,s.aggregate,$,!0===o.range):Kn(t,x,o.aggregate?.(e)??s.aggregate,$,!0===o.range):"history"===r&&n&&null!==n.v&&n.t<$?[...t,{t:$,v:n.v}]:t},M=(t,n)=>{if(o.text)return{entity:t,points:n};return Ka(t,f&&void 0===aa(t.config)?ar(n,m):n,l,$,a,e.hass,m)};let z=!1;const E=e.items.map((t,n)=>{const i=t.config,l=Aa(v.data.get(Zn(c[n]))??[],t.conversion),d=ka(t.config,l,_),u=h[n],p=t.config.energy_below?lo:e=>e;if(u&&!o.text){const o=Rr(t,f?ar(d,m):d,u,{load:m,until:$,zone:a,source:r,bounds:s?x:void 0,prices:b,hass:e.hass,cumulative:"column"!==e.config.style,groupRows:(e,t,o)=>Jn(e,t,"change",o)});return o.noPrice&&(z=!0),{index:n,entity:o.entity,points:p(o.points),color:je(i.color??Ya[n%Ya.length]),curve:i.curve??w,dash:!0===i.dash,readings:d,...o.parts?{costParts:o.parts.map(e=>({...e,points:p(e.points)}))}:{}}}const{entity:g,points:y}=M(t,d),E={index:n,entity:g,points:p(k(g,y)),color:je(i.color??Ya[n%Ya.length]),curve:i.curve??w,dash:!0===i.dash,readings:y};var S;return o.ghost&&_&&fa(t.config,e.raw)?E.hidden=p(k(g,M(t,l).points)):o.raw&&(void 0!==aa(S=t.config)&&!0===S.transform_raw)&&(E.hidden=p(k(g,ar(d,m)))),E}),S=Pa({status:b?.pending&&"ready"===v.status?"loading":$a(v.status,_),error:v.error,range:l,period:n,source:r,series:E,live:i.live,back:i.back,zone:a,group:s,..._?{conditions:_}:{},...z?{noPrice:z}:{}},e);return function(e,t){Eo.set(e,t)}(e.host,S.series),S}const Qa=(e,t,o)=>1===e?t:o;function ei(e,t,o,n,r){const a=(e,t)=>Ze(r,e,t);if(e.calendar&&o<2)return a({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[e.calendar][o]);if(!e.calendar&&0===o){const t=e.last;return a({hour:Qa(t,"period_last_hour","period_last_hours"),day:Qa(t,"period_last_day","period_last_days"),week:Qa(t,"period_last_week_rolling","period_last_weeks"),month:Qa(t,"period_last_month_rolling","period_last_months")}[e.unit],{n:t})}const i={timeZone:n.timeZone},s=rn(t.start,n.timeZone).year===rn(Date.now(),n.timeZone).year;let l;"year"===e.calendar?i.year="numeric":"month"===e.calendar?Object.assign(i,{month:"long",year:"numeric"}):(Object.assign(i,{day:"numeric",month:"short"}),s||(i.year="numeric"),"day"===e.calendar&&(i.weekday="short"),e.calendar||"hour"!==e.unit&&"day"!==e.unit||Object.assign(i,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(r?.locale?.language??r?.language??"en",i)}catch{l=new Intl.DateTimeFormat("en",i)}const c=e.calendar?t.end-1:t.end;return"day"===e.calendar||"month"===e.calendar||"year"===e.calendar?l.format(t.start):l.formatRange(t.start,c)}function ti(e,t,o=Date.now()){const{period:n}=e;if(!n.navigate)return Z;const r=Mn(t.host,n),a=e=>o=>{o.stopPropagation(),zn(t.host,n,e),t.requestUpdate()},i=ei(n,e.range,e.back,e.zone,t.hass);let s="";if(0!==r){const r=$n(n,o,e.zone);s=ei(n,r,r.back,e.zone,t.hass)}const l=e=>R`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${e}></path></svg>`;return R`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${Ze(t.hass,"period_previous")} @click=${a(r+1)}>
      ${l("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")}
    </button>
    <span class="period-label" aria-live="polite">${i}</span>
    <button
      class="period-step period-next"
      aria-label=${Ze(t.hass,"period_next")}
      ?disabled=${0===e.back}
      @click=${a(r-1)}
    >
      ${l("M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")}
    </button>
    ${0!==r?R`<button
            class="period-return"
            aria-label=${Ze(t.hass,"period_return",{label:s})}
            @click=${a(0)}
          >
            ${s}
          </button>`:Z}
  </div>`}const oi=a`
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
`;function ni(e){cr(e),function(e){ba.get(e)?.pause()}(e),function(e){Hr.get(e)?.pause()}(e)}function ri(e,t){const{show:o}=t.config;return o.name||o.value?e.legend?Ua(e.legend,t,e.group):R`<div class="series-header">
    ${e.series.map(n=>{const r=po(n.entity,n.points,e.group,t.hass)??n.entity.display,a=r?`${n.entity.name}, ${r}`:n.entity.name,i=Ee(n.entity.config);return R`<div
        class="entity series-item ${i?"":"inert"}"
        data-index=${n.index}
        tabindex=${i?"0":Z}
        aria-label=${a}
      >
        <span class="swatch" style="background:${n.color}"></span>
        ${o.name?R`<span class="series-name">${n.entity.name}</span>`:Z}
        ${o.value&&r?R`<span class="series-value">${r}</span>`:Z}
      </div>`})}
  </div>`:Z}function ai(e,t){return"loading"===e.status?R`<div class="chart-message">${Ze(t.hass,"chart_loading")}</div>`:"error"===e.status?R`<div class="chart-message error">
      ${Ze(t.hass,"chart_error",{error:e.error??""})}
    </div>`:e.legend&&0===e.series.length?function(e){return R`<div class="chart-message">${Ze(e.hass,"legend_toggle_all_hidden")}</div>`}(t):e.noPrice&&e.series.every(e=>e.points.every(e=>null===e.v))?R`<div class="chart-message">${Ze(t.hass,"cost_no_price")}</div>`:e.series.every(e=>e.points.every(e=>null===e.v))?R`<div class="chart-message">${Ze(t.hass,"chart_no_data")}</div>`:void 0}function ii(e,t,o=Z,n=Z,r,a=!1){return R`<svg
    class="plot"
    viewBox="0 0 ${Za} ${Va}"
    preserveAspectRatio="none"
    role=${a?Z:"img"}
    aria-label=${a?Z:t}
    aria-describedby=${a?Z:r??Z}
    aria-hidden=${a?"true":Z}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${Za} height=${204}></rect>
      </clipPath>
      ${o}
    </defs>
    ${n}
    <g clip-path="url(#cd-draw-in)">${e}</g>
  </svg>`}const si=a`
  ${oi}
  ${Ia}
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
  .series-item.inert {
    cursor: default;
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
`,li=["grid_import","solar","battery_out"];function ci(e,t,o){const n=null!==t,r=n?Wt(t,e.decimals,o):"",a=n?Bt(r,e.unit):"";return{...e,available:n,value:t,valueText:r,display:a,label:a?`${e.name}, ${a}`:e.name}}function di(e,t,o=Date.now()){const n=$n(xn(e.period),o,pn(t));return n.end-n.start>27648e5?"day":"hour"}function ui(e,t=Date.now()){const o={...e.raw,source:"statistics",group_by:di(e.raw,e.hass,t),aggregate:"change"},n=Ja({...e,raw:o},t);if(So(e.host),"loading"===n.status)return{message:Ze(e.hass,"chart_loading")};if("error"===n.status)return{message:Ze(e.hass,"chart_error",{error:n.error??""}),error:!0};let r=n.series.map(t=>ci(t.entity,mo(t.points),e.hass));const a=e.config.sort;if("none"!==a){const e="ascending"===a?1:-1;r=[...r].sort((t,o)=>t.available!==o.available?t.available?-1:1:((t.value??0)-(o.value??0))*e)}return"sankey"===e.config.style&&(r=function(e,t){const o=Ze(t,"energy_node_home");let n=0,r=0,a=!1;const i=e.map(e=>{const i=e.config.energy_flow;if(!i)return e;const s=e.value??0,l=Ze(t,`energy_flow_${i}`);let c;return li.includes(i)?(n+=s,c={from:l,to:o}):(r+=s,"devices"===i&&(a=!0),c={from:o,to:Jt.includes(i)?l:e.name}),{...e,config:{...e.config,...c}}}),s=n-r,l=i.find(e=>e.config.energy_flow);if(!(l&&s>.001*n))return i;const c=Ze(t,a?"energy_node_untracked":"energy_node_home_use"),d={action:"none"},u={...l.config,entity:"",name:c,from:o,to:c,color:"grey",statistic:!0,energy_flow:void 0,tap_action:d,hold_action:d,double_tap_action:d};return[...i,{...ci({...l,name:c},s,t),entityId:"",stateObj:void 0,config:u}]}(r,e.hass)),{items:r}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi=me(class extends fe{constructor(e){if(super(e),e.type!==he&&e.type!==de&&e.type!==pe)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===B||t===Z)return t;const o=e.element,n=e.name;if(e.type===he){if(t===o[n])return B}else if(e.type===pe){if(!!t===o.hasAttribute(n))return B}else if(e.type===de&&o.getAttribute(n)===t+"")return B;return we(e),t}});function pi(e){return null==e||""===e}function mi(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function fi(e,t,o){const[n,...r]=t,a=function(e,t){return Array.isArray(e)?[...e]:mi(e)?{...e}:"number"==typeof t?[]:{}}(e,n),i=a,s=r.length?fi(i[n],r,o):o,l=r.length>0&&mi(s)&&0===Object.keys(s).length;return pi(s)?Array.isArray(a)&&"number"==typeof n?a.splice(n,1):delete i[n]:l&&mi(a)?delete i[n]:i[n]=s,a}function gi(e,t,o){return 0===t.length||pi(o)&&void 0===function(e,t){let o=e;for(const n of t){if("object"!=typeof o||null===o)return;o=o[n]}return o}(e,t)?e:fi(e,t,o)}function yi(e){return"string"==typeof e?e:e.entity??Object.values(e.vars??{}).find(e=>"string"==typeof e&&e)??""}function vi(e,t,o,n){if("entity"===o&&(pi(n)||"string"!=typeof n))return e;const r=[...e.entities??[]],a=r[t];if(void 0===a)return e;const i="string"==typeof a?{entity:a}:{...a};pi(n)?delete i[o]:i[o]=n;const s=Object.keys(i);return r[t]=1===s.length&&"entity"===s[0]&&"string"==typeof i.entity?i.entity:i,{...e,entities:r}}const _i=2.5,bi=.5,xi=12;function wi(e,t){const o=e;return{width:o.line_width??t.line_width??_i,dots:o.dots??!0===t.dots,onTop:!0===o.on_top}}function $i(e,t){return[...e.filter(e=>!t(e)),...e.filter(t)]}function ki(e){return e.map(([e,t])=>`M${Math.round(100*e)/100},${Math.round(100*t)/100}h0`).join("")}function Mi(e){return Math.round(10*(e+3.5))/10}function zi(e,t){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<bi||e>xi))throw new Error(`${t} must be a number from 0.5 to 12`)}function Ei(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`${t} must be true or false`)}function Si(e){zi(e.line_width,'"line_width"'),Ei(e.dots,'"dots"');for(const t of e.entities??[])"object"==typeof t&&(zi(t.line_width,`"line_width" of ${t.entity}`),Ei(t.dots,`"dots" of ${t.entity}`),Ei(t.on_top,`"on_top" of ${t.entity}`))}const Ai=[{name:"title",path:["title"]}],ji=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],Ci=[{name:"color_icon",path:["color_icon"],default:!1}],Ni=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],Li=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],Fi=[{name:"start_angle",path:["start_angle"]},{name:"end_angle",path:["end_angle"]},{name:"center",path:["center"],default:"value"},{name:"center_text",path:["center_text"]},{name:"tick_labels",path:["tick_labels"],default:!1},{name:"ghost",path:["ghost"],default:"off"}],Ti=new Map;const Oi=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],Pi=[{name:"attribute",path:["attribute"]}],Di=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],Ui={number:{min:bi,max:xi,step:.5,mode:"box",unit_of_measurement:"px"}},Ii=new Map;function Hi(e){let t=Ii.get(e);return t||(t=[...Di,{name:"dots",path:["dots"],default:e}],Ii.set(e,t)),t}const Wi=Li.map(({name:e,path:t})=>({name:e,path:t})),Ri=[{name:"title",selector:{text:{}}}],qi=Li.map(({name:e})=>({name:e,selector:{ui_action:{}}})),Bi=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],Zi=new Map;let Vi;function Yi(e){const t=Be(e);if(Vi?.language!==t){const o=t=>Ze(e,t);Vi={language:t,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(e=>({value:e,label:o(`editor_curve_${e}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Ui},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return Vi.schema}const Gi=new Map;function Xi(e){const t=function(e){const t=void 0===e?void 0:Ea.get(e);return t?[e,...Object.keys(za[t]).filter(t=>t!==e)]:[]}(e);if(0===t.length)return Bi;const o=t[0];let n=Gi.get(o);if(!n){const e=Bi[0];n=[{...e,schema:e.schema.map(e=>"unit"===e.name?{name:"unit",selector:{select:{mode:"dropdown",custom_value:!0,options:t}}}:e)}],Gi.set(o,n)}return n}function Ki(e){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(t=>({value:t,label:Ze(e,`editor_sort_${t}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const Ji={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function Qi(e,t){const o=e=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:e}});switch(e){case"device_class":return o(t.deviceClasses);case"domain":return o(t.domains);case"entity":return{entity:{multiple:!0}};default:return{[e]:{multiple:!0}}}}const es=new Map;function ts(e,t){const o=function(e){const t=new Set,o=new Set;for(const n of Object.values(e?.states??{})){const e=n.attributes?.device_class;"string"==typeof e&&e&&t.add(e),o.add(n.entity_id.slice(0,n.entity_id.indexOf(".")))}return{deviceClasses:[...t].sort(),domains:[...o].sort()}}(t),n=`${o.deviceClasses.join()}|${o.domains.join()}`,r=es.get(e);if(r?.key===n)return r.schema;const a=Ji[e].map(t=>({name:`${e}_${t}`,selector:Qi(t,o)}));return es.set(e,{key:n,schema:a}),a}let os;function ns(e,t){let o=e;for(const n of t){if("object"!=typeof o||null===o)return;o=o[n]}return o}function rs(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;const o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&o.every(o=>rs(e[o],t[o]))}function as(e,t){const o={};for(const n of t){const t=ns(e,n.path)??n.default;void 0!==t&&(o[n.name]=t)}return o}function is(e,t,o){const n=as(e,t);let r=e;for(const a of t){const e=o[a.name];rs(n[a.name],e)||(r=gi(r,a.path,void 0!==a.default&&rs(e,a.default)?void 0:e))}return r}const ss="var(--divider-color, rgba(127, 127, 127, 0.3))",ls="var(--primary-color, #03a9f4)",cs="var(--secondary-text-color, #727272)";function ds(e,t,o,n){const r=(n-90)*Math.PI/180;return[(e+o*Math.cos(r)).toFixed(2),(t+o*Math.sin(r)).toFixed(2)]}function us(e,t,o,n){return ds(e,t,o,n).join(" ")}function hs(e,t,o,n,r){const a=r-n>180?1:0;return`M ${us(e,t,o,n)} A ${o} ${o} 0 ${a} 1 ${us(e,t,o,r)}`}function ps(e){return R`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(e){switch(e){case"bar":return q`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${ss} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${ls} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${ss} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${ls} />`;case"thin":return q`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${cs} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${ss} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${ls} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${cs} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${ss} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${ls} />`;case"segmented":return q`${[0,1].map(e=>Array.from({length:8},(t,o)=>q`<rect x=${6+6.75*o} y=${0===e?9:23} width="5" height="9" rx="1.5"
            fill=${o<(0===e?6:3)?ls:ss} />`))}`;case"tank":return q`${[14,36].map((e,t)=>q`
          <rect x=${e} y="5" width="14" height="30" rx="4" fill=${ss} />
          <rect x=${e} y=${0===t?13:23} width="14" height=${0===t?22:12} rx="4" fill=${ls} />`)}`;case"ring":return q`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${ss} stroke-width="5" />
        <path d=${hs(32,20,14,0,250)} fill="none" stroke=${ls} stroke-width="5" stroke-linecap="round" />`;case"arc":return q`
        <path d=${hs(32,21,14,-135,135)} fill="none" stroke=${ss} stroke-width="5" stroke-linecap="round" />
        <path d=${hs(32,21,14,-135,40)} fill="none" stroke=${ls} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[e,t]=ds(32,32,18,25);return q`
        <path d=${hs(32,32,22,-90,90)} fill="none" stroke=${ss} stroke-width="5" />
        <path d=${hs(32,32,22,-90,25)} fill="none" stroke=${ls} stroke-width="5" />
        <line x1="32" y1="32" x2=${e} y2=${t} stroke=${cs} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${cs} />`}default:return q``}}(e)}
  </svg>`}const ms=["line","area","column","combined","range_area","sparkline","streamgraph","beeswarm","violin","histogram","heatmap","dumbbell","slope","trend","waterfall","timeline","state_duration","box","candlestick","day_clock","wind_rose","spiral","strip_plot","cycle_plot","duration_curve"],fs=["line","area"],gs={number:{mode:"box",step:"any"}},ys={schema:[{name:"when_entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"when_state",selector:{text:{}}},{name:"when_above",selector:gs},{name:"when_below",selector:gs}]}],fields:[{name:"when_entity",path:["when","entity"]},{name:"when_state",path:["when","state"]},{name:"when_above",path:["when","above"]},{name:"when_below",path:["when","below"]}]},vs=[{name:"when_card_entity",path:["when","entity"]},{name:"when_card_state",path:["when","state"]},{name:"when_card_above",path:["when","above"]},{name:"when_card_below",path:["when","below"]}],_s=[{name:"when_card_entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"when_card_state",selector:{text:{}}},{name:"when_card_above",selector:gs},{name:"when_card_below",selector:gs}]}],bs={schema:_s,fields:vs},xs={schema:[..._s,{type:"grid",name:"",schema:[{name:"when_ghost",selector:{boolean:{}}},{name:"when_strip",selector:{boolean:{}}}]}],fields:[...vs,{name:"when_ghost",path:["when_ghost"],default:!1},{name:"when_strip",path:["when_strip"],default:!1}]};function ws(e){let t=1/0,o=-1/0;for(const n of e)for(const e of n)for(const n of[e.v,e.min,e.max])"number"==typeof n&&(n<t&&(t=n),n>o&&(o=n));return t===1/0?void 0:[t,o]}function $s([e,t],o=.08){if(e===t)return[e-1,t+1];const n=(t-e)*o;return[e-n,t+n]}function ks(e,t){const[o,n]=e,[r,a]=t,i=n===o?0:(a-r)/(n-o);return e=>r+(e-o)*i}const Ms=["linear","log"],zs=["outside","inside"],Es=!0,Ss=!0,As="outside",js=!0,Cs=!1,Ns="linear",Ls=e=>"number"==typeof e&&Number.isFinite(e);function Fs(e){const t=e;for(const o of["x_axis","y_axis"])if(void 0!==t[o]&&"boolean"!=typeof t[o])throw new Error(`"${o}" must be true or false`);if(void 0!==t.axis_labels&&!zs.includes(t.axis_labels))throw new Error(`"axis_labels" must be one of: ${zs.join(", ")}`);if(void 0!==t.gridlines){const e=t.gridlines;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const t of["horizontal","vertical"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"gridlines.${t}" must be true or false`)}for(const o of["y_min","y_max"])if(void 0!==t[o]&&!Ls(t[o]))throw new Error(`"${o}" must be a number`);if(Ls(t.y_min)&&Ls(t.y_max)&&t.y_min>=t.y_max)throw new Error('"y_min" must be below "y_max"');if(void 0!==t.y_scale&&!Ms.includes(t.y_scale))throw new Error(`"y_scale" must be one of: ${Ms.join(", ")}`);if("log"===t.y_scale)for(const o of["y_min","y_max"])if(Ls(t[o])&&t[o]<=0)throw new Error(`"${o}" must be above 0 on a log scale`)}function Ts(e){const t=e,o=t.gridlines??{};return{x:t.x_axis??Es,y:t.y_axis??Ss,labels:t.axis_labels??As,horizontal:o.horizontal??js,vertical:o.vertical??Cs,min:Ls(t.y_min)?t.y_min:void 0,max:Ls(t.y_max)?t.y_max:void 0,scale:t.y_scale??Ns}}function Os(e,t){if(!(e>0&&Number.isFinite(e)))return 1;const o=e/Math.max(1,t),n=10**Math.floor(Math.log10(o));for(const r of[1,2,5])if(r*n>=o*(1-1e-9))return r*n;return 10*n}function Ps(e){return Math.max(0,-Math.floor(Math.log10(e)+1e-9))}const Ds=e=>Number(e.toPrecision(12));function Us(e,t,o){let[n,r]=$s(e??[0,1]);void 0!==t.min&&(n=t.min),void 0!==t.max&&(r=t.max),r<=n&&(void 0!==t.min?r=n+Math.max(1,.1*Math.abs(n)):n=r-Math.max(1,.1*Math.abs(r)));const a=Os(r-n,o);void 0===t.min&&(n=Ds(Math.floor(n/a+1e-9)*a)),void 0===t.max&&(r=Ds(Math.ceil(r/a-1e-9)*a));const i=[];for(let s=Math.ceil(n/a-1e-9);s*a<=r+1e-9*a;s++)i.push(Ds(s*a));return{domain:[n,r],ticks:i,decimals:Ps(a)}}const Is=6e4,Hs=36e5,Ws=864e5,Rs=[...[1,5,10,15,30].map(e=>({unit:"minute",n:e,ms:e*Is})),...[1,2,3,6,12].map(e=>({unit:"hour",n:e,ms:e*Hs})),...[1,2,7].map(e=>({unit:"day",n:e,ms:e*Ws})),...[1,2,3,6].map(e=>({unit:"month",n:e,ms:30.44*e*Ws})),...[1,2,5,10,20,50,100].map(e=>({unit:"year",n:e,ms:365.25*e*Ws}))];const qs=e=>-new Date(e).getTimezoneOffset()*Is;function Bs(e){if(!e)return qs;let t;try{t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return qs}return e=>{const o={};for(const n of t.formatToParts(e))o[n.type]=Number(n.value);return Date.UTC(o.year,o.month-1,o.day,o.hour%24,o.minute,o.second)-1e3*Math.floor(e/1e3)}}function Zs(e,t){return e-t(e-t(e))}function Vs(e,t,o,n){const r=[],a=e.end+t(e.end);for(let i=o,s=0;i<=a&&s<1e3;i=n(i),s++){const o=Zs(i,t);o>=e.start&&o<=e.end&&o!==r[r.length-1]&&r.push(o)}return r}function Ys(e,t,o=qs){const{unit:n,n:r}=function(e,t){return Rs.find(o=>e/o.ms<=Math.max(1,t))??Rs[Rs.length-1]}(e.end-e.start,t),a=e.start+o(e.start);if("minute"===n||"hour"===n||"day"===n&&7!==r){const t=r*("minute"===n?Is:"hour"===n?Hs:Ws);return{unit:n,ticks:Vs(e,o,Math.ceil(a/t)*t,e=>e+t)}}if("day"===n){const t=Math.ceil(a/Ws);return{unit:n,ticks:Vs(e,o,(t+((4-t)%7+7)%7)*Ws,e=>e+7*Ws)}}const i=new Date(a);if("month"===n){let t=i.getUTCFullYear(),s=i.getUTCMonth();Date.UTC(t,s)<a&&(s+=1),s=Math.ceil(s/r)*r,t+=Math.floor(s/12),s%=12;const l=e=>{const t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+r)};return{unit:n,ticks:Vs(e,o,Date.UTC(t,s),l)}}let s=i.getUTCFullYear();return Date.UTC(s,0)<a&&(s+=1),s=Math.ceil(s/r)*r,{unit:n,ticks:Vs(e,o,Date.UTC(s,0),e=>Date.UTC(new Date(e).getUTCFullYear()+r,0))}}function Gs(e){return"server"===e?.locale?.time_zone?e.config?.time_zone:void 0}function Xs(e){const t=e?.locale?.time_format;return"12"===t||"24"!==t&&void 0}const Ks=new Map;function Js(e,t,o){const n=`${e}|${t}|${JSON.stringify(o)}`;let r=Ks.get(n);if(!r){try{r=new Intl.DateTimeFormat(e,{...o,timeZone:t})}catch{r=new Intl.DateTimeFormat(void 0,o)}Ks.set(n,r)}return r}function Qs(e,t,o=!1){return Js(t?.locale?.language??"en",Gs(t),{hour:"numeric",minute:"2-digit",...o?{second:"2-digit"}:{},hour12:Xs(t)}).format(e)}function el(e,t){return Js(t?.locale?.language??"en",Gs(t),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:Xs(t)}).format(e)}function tl(e,t,o,n,r){const a=n?.locale?.language??"en",i=Gs(n),s=e+(r??Bs(i))(e),l=new Date(s),c=s%Ws===0;switch(t){case"minute":case"hour":return c?Js(a,i,{weekday:"short"}).format(e):Qs(e,n);case"day":return o<=7*Ws?Js(a,i,{weekday:"short"}).format(e):Js(a,i,{day:"numeric",month:"short"}).format(e);case"month":return Js(a,i,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(e);default:return Js(a,i,{year:"numeric"}).format(e)}}const ol=["none","normal","percent"];function nl(e){const t=e.stack;if(void 0!==t&&!ol.includes(t))throw new Error(`"stack" must be one of: ${ol.join(", ")}`)}function rl(e,t){let o=0,n=e.length;for(;o<n;){const r=o+n>>1;e[r].t<=t?o=r+1:n=r}return 0===o?null:e[o-1].v}function al(e,t){const o=e[0]?.length??0,n=e.map(()=>[]);for(let r=0;r<o;r++){let o=1;if("percent"===t){const t=e.reduce((e,t)=>e+Math.abs(t[r]??0),0);o=t>0?100/t:0}let a=0,i=0;e.forEach((e,t)=>{const s=e[r];if(null==s)return void n[t].push(null);const l=s*o;l>=0?(n[t].push([a,a+l]),a+=l):(n[t].push([i,i+l]),i+=l)})}return n}function il(e){const t=e[0]?.length??0,o=[];for(let n=0;n<t;n++){let t=null;for(const o of e)null!==o[n]&&void 0!==o[n]&&(t=(t??0)+o[n]);o.push(t)}return o}function sl(e){let t=0,o=0;for(const n of e)for(const e of n)e&&(t=Math.min(t,e[0],e[1]),o=Math.max(o,e[0],e[1]));return[t,o]}const ll=new Set(["unavailable","unknown"]);function cl(e){return void 0===e||""===e||ll.has(e)}function dl(e,t){const o=[];for(let n=0;n<e.length;n++){const r=e[n];if(r.t>=t)break;const a=Math.min(t,n+1<e.length?e[n+1].t:t);if(a<=r.t)continue;const i=o[o.length-1];i&&i.state===r.s&&i.end===r.t?i.end=a:o.push({start:r.t,end:a,state:r.s})}return o}const ul={on:"amber",open:"amber",opening:"amber",closing:"amber",home:"green",playing:"green",charging:"green",auto:"green",heat_cool:"green",heat:"#ff8100",heating:"#ff8100",preheating:"#ff8100",cool:"#2b9af9",cooling:"#2b9af9",dry:"#efbd07",drying:"#efbd07",fan_only:"#14b8a6",fan:"#14b8a6",paused:"purple",buffering:"purple",detected:"red",problem:"red",triggered:"red",unlocked:"red",jammed:"red",locked:"green",armed_home:"green",armed_away:"green",armed_night:"green",armed_vacation:"green",armed_custom_bypass:"green",arming:"amber",pending:"amber",cleaning:"primary",returning:"purple"},hl=new Set(["off","closed","not_home","away","idle","standby","docked","clear","disarmed","none","false"]),pl=["primary","purple","#14b8a6","#ec4899","amber","green","blue","red"];function ml(e,t,o){const n=o?.[e];if(n)return{color:je(n),quiet:!1,text:Le(n)};const r=hl.has(e)&&!Object.prototype.hasOwnProperty.call(ul,e),a=Object.prototype.hasOwnProperty.call(ul,e)?ul[e]:r?"grey":pl[function(e){let t=0;for(let o=0;o<e.length;o++)t=31*t+e.charCodeAt(o)>>>0;return t}(e)%pl.length],i=je(a);return{color:/^[a-z0-9_]+$/.test(e)&&/^[a-z0-9_]+$/.test(t)?`var(--state-${t}-${e}-color, ${i})`:i,quiet:r,text:r?"theme":Le(a)}}function fl(e){const t=Math.max(0,Math.round(e/1e3));if(t<60)return`${t} s`;const o=Math.round(t/60);if(o<60)return`${o} min`;const n=Math.floor(o/60);if(n<24){const e=o-60*n;return e?`${n} h ${String(e).padStart(2,"0")}`:`${n} h`}const r=Math.floor(n/24),a=n-24*r;return a?`${r} d ${a} h`:`${r} d`}function gl(e){const t=new Set;for(const o of e)if(!cl(o.state)){if(!Number.isFinite(Number(o.state))||""===o.state.trim())return!1;t.add(o.state)}return t.size>8}function yl(e,t,o){const n=t-e;return o<=0||Math.abs(n)<.1*o?"steady":n>0?"rising":"falling"}const vl=[{name:"summary_text",path:["summary"]},{name:"summary_show",path:["show_summary"],default:!1}];function _l(e){if(void 0!==e.summary&&"string"!=typeof e.summary)throw new Error('"summary" must be auto, off, or your own text');if(void 0!==e.show_summary&&"boolean"!=typeof e.show_summary)throw new Error('"show_summary" must be true or false')}function bl(e,t,o,n){const r=e=>Bt(Wt(co(t.entity,e),t.entity.decimals,n),t.entity.unit),a=o.range.end-o.range.start,i=o.when??(e=>a<=864e5?Qs(e,n):el(e,n)),s=(e,t)=>Ze(n,e,t),l=(c=a)>0&&c<=1728e5&&c%36e5==0?c/36e5+" h":fl(c);var c;const d=[];"steady"===e.overall?d.push(s("summary_level",{value:r(e.last),span:l})):d.push(s("rising"===e.overall?"summary_rose":"summary_fell",{from:r(e.first),to:r(e.last),span:l}));const u=Math.max(e.first,e.last),h=Math.min(e.first,e.last);return e.max>u&&r(e.max)!==r(u)&&d.push(s("summary_peak",{value:r(e.max),time:i(e.maxAt)})),e.min<h&&r(e.min)!==r(h)&&d.push(s("summary_low",{value:r(e.min),time:i(e.minAt)})),o.live&&d.push(s(`summary_now_${e.recent}`,{})),d.join(" ")}function xl(e,t,o,n){const r="string"==typeof e.summary?e.summary.trim():"";if("off"===r)return;if(""!==r&&"auto"!==r)return r;const a=t.flatMap(e=>{const r=function(e){const t=e.filter(e=>null!==e.v&&Number.isFinite(e.v));if(0===t.length)return;let o=t[0],n=t[0];for(const l of t)l.v<o.v&&(o=l),l.v>n.v&&(n=l);const r=t[0],a=t[t.length-1],i=n.v-o.v,s=rl(t,a.t-.1*(a.t-r.t))??r.v;return{first:r.v,last:a.v,min:o.v,minAt:o.t,max:n.v,maxAt:n.t,overall:yl(r.v,a.v,i),recent:yl(s,a.v,i)}}(e.points);if(!r)return[];const a=bl(r,e,o,n);return[t.length>1?Ze(n,"summary_series",{name:e.entity.name,text:a}):a]});return a.length?a.join(" "):void 0}const wl="cd-summary";function $l(e,t,o){const n=xl(e.raw,t,o,e.hass);return n?{text:n,show:!0===e.raw.show_summary}:void 0}const kl=a`
  .chart-summary {
    margin: 8px 0 0;
    font-size: 0.875em;
    line-height: 1.4;
    color: var(--secondary-text-color);
  }
  .frame.compact .chart-summary {
    margin-top: 4px;
    font-size: 0.8em;
  }
  .chart-summary.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }
`;function Ml(e,t){const o=Ze(e,`${t}_helper`);return o&&o!==`${t}_helper`?o:void 0}const zl="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",El=e=>"object"==typeof e&&null!==e&&!Array.isArray(e);function Sl(e){if(void 0!==e.cost&&!1!==e.cost)return El(e.cost)?e.cost:{}}function Al(e){const t=Sl(e);if(!t)return{cost_on:!1};const o={cost_on:!0,cost_split:!0===t.split};return"string"==typeof t.price&&(o.cost_price_entity=t.price),"number"==typeof t.price&&(o.cost_price=t.price),t.currency&&(o.cost_currency=t.currency),o}function jl(e){const t="string"==typeof e?e.trim():"",o=/^(\d{1,2}):(\d{2})(?::00)?$/.exec(t);return o?`${o[1].padStart(2,"0")}:${o[2]}`:t}function Cl(e,t){const o={...Sl(e)??{}};return t.length?o.tariff=t:delete o.tariff,{...e,cost:o}}const Nl=new Map;const Ll=new Map;function Fl(e,t=!1){const o=t=>Ze(e.hass,t),n=Sl(e.config),r=Array.isArray(n?.tariff)?n.tariff:[],a=function(e,t,o,n){const r=`${Be(e)}|${t}|${o}|${n}`,a=Nl.get(r);if(a)return a;const i=[{name:"cost_on",selector:{boolean:{}}},...t?[{name:"cost_price_entity",selector:{entity:{domain:["sensor","input_number","number"]}}},{type:"grid",name:"",schema:[{name:"cost_price",selector:{number:{mode:"box",step:"any"}}},{name:"cost_currency",selector:{text:{}}}]},...o&&n?[{name:"cost_split",selector:{boolean:{}}}]:[]]:[]];return Nl.set(r,i),i}(e.hass,void 0!==n,t,r.length>0),i=(t,o)=>{const n=[...r];o?n[t]=o:n.splice(t,1),e.commit(Cl(e.config,n))};return R`<style>
      .cost-title {
        font-weight: 500;
        margin: 16px 0 4px;
      }
      .cost-period {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 4px;
        align-items: start;
        padding: 8px 0;
        border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      }
      .cost-add {
        margin-top: 8px;
        padding: 4px 10px;
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        border-radius: 8px;
        background: none;
        color: var(--primary-color);
        font: inherit;
        cursor: pointer;
      }
      .cost-add:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
    </style>
    <div class="cost" data-section="cost">
      <div class="cost-title">${o("editor_cost")}</div>
      <ha-form
        data-section="cost-options"
        .hass=${e.hass}
        .data=${Al(e.config)}
        .schema=${a}
        .computeLabel=${e=>o(`editor_${e.name}`)}
        .computeHelper=${t=>Ml(e.hass,`editor_${t.name}`)}
        @value-changed=${t=>{t.stopPropagation(),e.commit(function(e,t){const o={...e};if(!0!==t.cost_on)return delete o.cost,o;const n=Al(e),r={...Sl(e)??{}},a="string"==typeof t.cost_price_entity?t.cost_price_entity.trim():"",i="number"==typeof t.cost_price&&Number.isFinite(t.cost_price)?t.cost_price:void 0;let s=r.price;a!==(n.cost_price_entity??"")?s=a||i:i!==n.cost_price&&(s=i??(a||void 0)),void 0===s||""===s?delete r.price:r.price=s;const l="string"==typeof t.cost_currency?t.cost_currency.trim().toUpperCase():"";return l?r.currency=l:delete r.currency,!0===t.cost_split?r.split=!0:delete r.split,o.cost=r,o}(e.config,t.detail?.value??{}))}}
      ></ha-form>
      ${n?R`<div class="cost-title">${o("editor_cost_tariff")}</div>
              ${r.map((t,n)=>R`<div class="cost-period" data-index=${n}>
                    <ha-form
                      data-section="cost-period"
                      .hass=${e.hass}
                      .data=${{...t}}
                      .schema=${function(e){const t=Be(e);let o=Ll.get(t);return o||(o=[{type:"grid",name:"",schema:[{name:"from",selector:{time:{}}},{name:"to",selector:{time:{}}}]},{type:"grid",name:"",schema:[{name:"price",selector:{number:{mode:"box",step:"any"}}},{name:"name",selector:{text:{}}},{name:"color",selector:{text:{}}}]}],Ll.set(t,o)),o}(e.hass)}
                      .computeLabel=${e=>o(`editor_cost_period_${e.name}`)}
                      @value-changed=${e=>{e.stopPropagation(),i(n,function(e,t){const o={from:void 0===e.from?t.from:jl(e.from),to:void 0===e.to?t.to:jl(e.to),price:"number"==typeof e.price&&Number.isFinite(e.price)?e.price:t.price};for(const n of["name","color"]){const t="string"==typeof e[n]?e[n].trim():"";t&&(o[n]=t)}return o}(e.detail?.value??{},t))}}
                    ></ha-form>
                    <ha-icon-button
                      class="remove"
                      .path=${zl}
                      .label=${o("editor_cost_period_remove")}
                      @click=${()=>i(n)}
                    ></ha-icon-button>
                  </div>`)}
              <button
                type="button"
                class="cost-add"
                @click=${()=>e.commit(Cl(e.config,[...r,{from:"00:00",to:"07:00",price:0}]))}
              >
                + ${o("editor_cost_period_add")}
              </button>`:Z}
    </div>`}const Tl=new WeakMap,Ol={schema:[],fields:[]};function Pl(e,t,o,n){if(!br.includes(e)||!function(e){return void 0!==e.cost&&!1!==e.cost||(e.entities??[]).some(e=>El(e)&&void 0!==e.cost&&!1!==e.cost)}(o))return n;const r=n??Ol,a=void 0!==o.cost&&!1!==o.cost,i=`${Be(t)}|${a}`;let s=Tl.get(r.schema);s||(s=new WeakMap,Tl.set(r.schema,s));let l=s.get(r.fields);l||(l=new Map,s.set(r.fields,l));const c=l.get(i);if(c)return c;const d={schema:[...r.schema,{type:"grid",name:"",schema:[{name:"cost_entity_on",selector:{boolean:{}}},{name:"cost_entity_price",selector:{entity:{domain:["sensor","input_number","number"]}}}]}],fields:[...r.fields,{name:"cost_entity_on",path:["cost"],default:a},{name:"cost_entity_price",path:["cost","price"]}]};return l.set(i,d),d}function Dl(e,t){if(e.length<=t)return e;const o=[];let n=[];for(const a of e)null===a.v?(n.length&&o.push(n),o.push([a]),n=[]):n.push(a);n.length&&o.push(n);const r=e.length;return o.flatMap(e=>null===e[0].v?e:function(e,t){if(e.length<=t||t<3)return e;const o=[e[0]],n=(e.length-2)/(t-2);let r=0;for(let a=0;a<t-2;a++){const t=Math.floor(a*n)+1,i=Math.min(Math.floor((a+1)*n)+1,e.length-1),s=i,l=Math.min(Math.floor((a+2)*n)+1,e.length);let c=0,d=0;const u=Math.max(1,l-s);for(let o=s;o<l;o++)c+=e[o].t,d+=e[o].v;c/=u,d/=u;let h=t,p=-1;const m=e[r];for(let o=t;o<i;o++){const t=Math.abs((m.t-c)*(e[o].v-m.v)-(m.t-e[o].t)*(d-m.v));t>p&&(p=t,h=o)}o.push(e[h]),r=h}return o.push(e[e.length-1]),o}(e,Math.max(3,Math.round(e.length/r*t))))}const Ul=[[1,2,3,4,5,6,7,8,9],[1,2,5],[1]],Il=[2,3,5,10,20,50,100],Hl=e=>Number(e.toPrecision(12)),Wl=e=>Hl(10**e),Rl=e=>Math.floor(Math.log10(e)+1e-9);function ql(e){return e.map(e=>{const t=e=>"number"==typeof e&&e<=0;return t(e.v)||t(e.min)||t(e.max)?{...e,v:t(e.v)?null:e.v,...void 0!==e.min?{min:t(e.min)?null:e.min}:{},...void 0!==e.max?{max:t(e.max)?null:e.max}:{}}:e})}function Bl(e,t,o,n=1){const r=[];for(let a=Rl(e);a<=Rl(t)+n;a+=n)for(const n of o){const o=Hl(n*10**a);o>=e*(1-1e-9)&&o<=t*(1+1e-9)&&r.push(o)}return r}function Zl(e,t,o){const n=Rl(e),r=Bl(Wl(n-2),Wl(n+2),t),a=o?r.filter(t=>t<=e*(1+1e-9)):r.filter(t=>t>=e*(1-1e-9));return o?a[a.length-1]:a[0]}function Vl(e,t){const o=Math.log10(e[0]),n=Math.log10(e[1]),[r,a]=t,i=n===o?0:(a-r)/(n-o);return e=>e>0?r+(Math.log10(e)-o)*i:NaN}const Yl=new WeakMap;function Gl(e){let t=Yl.get(e.host);if(!t){const o={width:e.host.clientWidth||400};t=o,Yl.set(e.host,o),"undefined"!=typeof ResizeObserver&&(o.observer=new ResizeObserver(t=>{const n=Math.round(t[t.length-1].contentRect.width);Math.round(n/70)!==Math.round(o.width/70)&&(o.width=n,e.requestUpdate())}),o.observer.observe(e.host))}return t.width}function Xl(e){Yl.get(e)?.observer?.disconnect(),Yl.delete(e)}function Kl(e){const t=Ts(e.raw);return Math.max(0,Gl(e)-32-(t.y&&"outside"===t.labels?40:0))}function Jl(e,t,o,n,r=4){const a=Ts(e.raw),i="log"===a.scale&&"line"===e.raw.style,s=i?function(e,t,o){let[n,r]=e??[1,100];void 0!==t.min&&t.min>0&&(n=t.min),void 0!==t.max&&t.max>0&&(r=t.max),r>0||(r=n>0?10*n:100),n>0||(n=r/1e3);const a=void 0!==t.min&&t.min===n,i=void 0!==t.max&&t.max===r;r<=n&&(a?r=10*n:i?n=r/10:(n/=Math.sqrt(10),r*=Math.sqrt(10)));const s=Math.max(2,o+1),l=[...Ul.map(e=>({mantissas:e,every:1})),...Il.map(e=>({mantissas:[1],every:e}))];let c=l[l.length-1],d=[n,r],u=[];for(const f of l){const e=a?n:Zl(n,f.mantissas,!0),t=i?r:Zl(r,f.mantissas,!1),o=Bl(e,t,f.mantissas,f.every);if(c=f,d=[e,t],u=o,o.length<=s)break}const h=c.every>1?[1]:Ul[0],p=9===c.mantissas.length?[]:Bl(d[0],d[1],h).filter(e=>!u.includes(e)).slice(0,200),m=u.map(e=>Math.max(0,-Rl(e)));return{domain:d,ticks:u,decimals:Math.max(0,...m),minor:p,tickDecimals:m}}(o,a,r):Us(o,a,r),l=Math.max(2,Math.min(8,Math.floor((n??Kl(e))/70))),{unit:c,ticks:d}=Ys(t,l,Bs(Gs(e.hass)));return{options:a,value:s,times:d,unit:c,range:t,scales:{x:ks([t.start,t.end],[0,Za]),y:(i?Vl:ks)(s.domain,[Va,0]),domain:s.domain}}}function Ql(e){const{options:t,scales:o}=e;return q`<g class="grid">
    ${t.horizontal?(e.value.minor??[]).map(e=>q`<line class="minor" x1="0" x2=${Za} y1=${o.y(e)} y2=${o.y(e)}></line>`):Z}
    ${t.horizontal?e.value.ticks.map(e=>q`<line x1="0" x2=${Za} y1=${o.y(e)} y2=${o.y(e)}></line>`):Z}
    ${t.vertical?e.times.map(e=>q`<line x1=${o.x(e)} x2=${o.x(e)} y1="0" y2=${Va}></line>`):Z}
  </g>`}const ec=e=>Math.round(1e4*e)/100+"%";function tc(e,t,o){const n=e.ticks[t];return e.tickDecimals?function(e,t,o){if(Math.abs(e)<1e4)return Wt(e,t,o);const n=o?.locale?.language??o?.language??"en";try{return new Intl.NumberFormat(n,{notation:"compact",maximumFractionDigits:1}).format(e)}catch{return new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}).format(e)}}(n,e.tickDecimals[t],o.hass):Wt(n,e.decimals,o.hass)}function oc({axes:e,ctx:t,content:o,label:n,defs:r=Z,overlay:a=Z,hover:i,right:s,xLabel:l,yLabel:c,gestures:d,classes:u="",below:h=Z,wrapClasses:p="",wrapStyle:m="",tap:f,summary:g,keys:y}){const{options:v}=e,_="outside"===v.labels,b=v.y&&e.value.ticks.length>0,x=v.x&&e.times.length>0,w=b?function(e,t,o){const{scales:n,value:r}=e;return r.ticks.map((e,a)=>{const i=n.y(e)/Va;return R`<span class="axis-label ${i<.08?"top":i>.92?"bottom":""}" style="top:${ec(i)}"
      >${o?o(e):tc(r,a,t)}</span
    >`})}(e,t,c):[],$=b?R`<div class="y-axis">${w}</div>`:Z,k=x?R`<div class="x-axis">${function(e,t,o){const{scales:n,range:r}=e,a=Bs(Gs(t.hass));return e.times.map(i=>{const s=n.x(i)/Za;return R`<span class="axis-label ${s<.05?"start":s>.95?"end":""}" style="left:${ec(s)}"
      >${o?o(i):e.label?e.label(i):tl(i,e.unit,r.end-r.start,t.hass,a)}</span
    >`})}(e,t,l)}</div>`:Z,M=b?R`<span class="axis-sizer" aria-hidden="true"
        >${e.value.ticks.map((o,n)=>c?c(o):tc(e.value,n,t)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:Z,z=s&&v.y&&s.value.ticks.length>0?s:void 0,E=z?R`<span class="axis-sizer" aria-hidden="true"
        >${z.value.ticks.map(e=>Wt(e,z.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:Z,S=z?R`<div class="y-axis right">${_?E:Z}${function(e,t){return e.value.ticks.map(o=>{const n=e.y(o)/Va;return R`<span class="axis-label ${n<.08?"top":n>.92?"bottom":""}" style="top:${ec(n)}"
      >${Wt(o,e.value.decimals,t.hass)}</span
    >`})}(z,t)}</div>`:Z,A=d?.down??i?.move,j=f?e=>{f.down(e),A?.(e)}:A,C=`plot-wrap axes-${v.labels} ${b?"has-y":""} ${x?"has-x":""} ${z?"has-right":""} ${h===Z?"":"has-overview"} ${p}`;return R`<div class=${C} style=${m}>
      ${_&&b?R`<div class="y-axis">${M}${w}</div>`:Z}
      <div
        class="plot-area ${i?"hoverable":""} ${f?"opens-history":""} ${u}"
        tabindex=${y?"0":Z}
        role=${y?"group":Z}
        aria-label=${y?y.label:Z}
        aria-describedby=${y&&g?wl:Z}
        @keydown=${y?.keydown}
        @blur=${y?.blur}
        @pointerdown=${j}
        @pointermove=${d?.move??i?.move}
        @pointerup=${d?.up}
        @pointerleave=${d?.leave??i?.leave}
        @pointercancel=${d?.cancel??i?.leave}
        @wheel=${d?.wheel}
        @dblclick=${d?.dblclick}
        @click=${f?.click}
      >
        ${y?ii(o,n,r,Ql(e),void 0,!0):ii(o,n,r,Ql(e),g?wl:void 0)}
        ${_?Z:R`${$}${S}${k}`} ${a}
      </div>
      ${_?R`${S}${k}`:Z} ${h}
    </div>
    ${function(e){return e?R`<p id=${wl} class="chart-summary ${e.show?"":"sr-only"}">${e.text}</p>`:Z}(g)}`}const nc=a`
  ${kl}
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
`,rc=["above","over","hidden"];function ac(e){if(void 0!==e.compact&&"boolean"!=typeof e.compact)throw new Error('"compact" must be true or false');if(void 0!==e.header&&!rc.includes(e.header))throw new Error(`"header" must be one of: ${rc.join(", ")}`);!function(e){if(void 0!==e.legend_toggle&&"boolean"!=typeof e.legend_toggle)throw new Error('"legend_toggle" must be true or false')}(e)}function ic(e){return{compact:!0===e.compact,header:e.header??"above"}}function sc(e,t,o){return R`<div class="frame ${e.compact?"compact":""}">
    ${"above"===e.header?t:Z}${o}
  </div>`}function lc(e){return e===Z?Z:R`<div class="header-over" @pointerdown=${e=>e.stopPropagation()}>${e}</div>`}const cc=a`
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
`,dc=["auto","none","hour","day","week","month"],uc=["auto","mean","sum","min","max","first","last","change"],hc={last:7,unit:"day"},pc={hour:1/24,day:1,week:7,month:30};function mc(e){if(e.calendar)return{day:"hour",week:"day",month:"day",year:"month"}[e.calendar];const t=e.last*pc[e.unit];return t<=2?"hour":t<=62?"day":t<=190?"week":"month"}function fc(e){if(e.formula)return"meter"===e.formula;if(e.config.attribute)return!1;if("derivative"===e.config.transform)return!1;const t=e.stateObj?.attributes?.state_class;return"total_increasing"===t||"total"===t}function gc(e,t){const o={...e,period:e.period??{...hc}};return"none"===e.group_by?delete o.group_by:void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=mc(xn(o.period))),void 0!==e.aggregate&&"auto"!==e.aggregate||(o.aggregate=!0!==e.range&&t.length>0&&t.every(fc)?"change":"mean"),o}function yc(e,t){const o=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t),n=e.map(e=>new Map(e.map(e=>[e.t,e]))),r=new Map;for(const i of e)for(const e of i)void 0!==e.end&&r.set(e.t,e.end);const a={times:[],ends:[],values:e.map(()=>[]),lows:e.map(()=>[]),highs:e.map(()=>[])};return o.forEach((i,s)=>{const l=Math.min(r.get(i)??o[s+1]??t,t);l>i&&(a.times.push(i),a.ends.push(l),e.forEach((e,t)=>{const o=n[t].get(i);a.values[t].push(o?o.v:rl(e,i)),a.lows[t].push(o?.min??null),a.highs[t].push(o?.max??null)}))}),a}function vc(e,t,o,n){const r=t-e,a=.8*r/n,i=n>1?.12*a:0;return[e+.2*r/2+o*a+i/2,a-i]}function _c(e,t=!0){let o=t?0:1/0,n=t?0:-1/0;for(const r of e)null!==r&&Number.isFinite(r)&&(o=Math.min(o,r),n=Math.max(n,r));return o===1/0?void 0:[o,n]}function bc(e,t){return Math.max(1,Math.ceil(e/Math.max(1,t)))}const xc=["sum","change"],wc=[{name:"table_toggle",path:["table_toggle"],default:!1},{name:"table_change",path:["table_change"],default:!0}];function $c(e){return[{name:"table_toggle",selector:{boolean:{}}},...!0===e?.table_toggle?[{name:"table_change",selector:{boolean:{}}}]:[]]}const kc=e=>!0===e?.table_toggle?"table":"";function Mc(e){for(const t of["table_toggle","table_change"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`)}const zc=new WeakMap;function Ec(){try{return globalThis.localStorage??void 0}catch{return}}function Sc(e){try{return"table"===Ec()?.getItem(e)?"table":"chart"}catch{return"chart"}}function Ac(e){const t="chartdeck-table-"+Na(e.raw);let o=zc.get(e.host);return o&&o.storageKey===t||(o={storageKey:t,mode:Sc(t)},zc.set(e.host,o)),o}function jc(e,t){const o=Ac(e);o.mode!==t&&(o.mode=t,function(e){try{const t=Ec();if(!t)return;"chart"===e.mode?t.removeItem(e.storageKey):t.setItem(e.storageKey,e.mode)}catch{}}(o),e.requestUpdate())}function Cc(e,t){const o=t=>Ze(e.hass,t),n=(n,r)=>R`<button
      type="button"
      class="table-switch-option ${t===n?"on":""}"
      aria-pressed=${t===n?"true":"false"}
      @click=${t=>{t.stopPropagation(),jc(e,n)}}
    >
      ${o(r)}
    </button>`;return R`<div
    class="table-switch"
    role="group"
    aria-label=${o("table_toggle_group")}
    @pointerdown=${e=>e.stopPropagation()}
  >
    ${n("chart","table_toggle_chart")}${n("table","table_toggle_table")}
  </div>`}function Nc(e,t,o){if(!0!==e.raw.table_toggle)return{layout:t,header:o,table:!1};const n=function(e){return!0===e.raw.table_toggle?Ac(e).mode:"chart"}(e),r="table"===n,a="hidden"===t.header,i=a||r&&"over"===t.header?"above":t.header;return{layout:{...t,header:i},header:R`<div class="table-head">
      <div class="table-head-main">${a?Z:o}</div>
      ${Cc(e,n)}
    </div>`,table:r}}const Lc={hour:"table_hour",day:"table_day",week:"table_week",month:"table_month"};function Fc(e,t,o={}){const{hass:n}=e,r=o.now??Date.now(),a=t.group,i=t.series,s=yc(i.map(e=>e.points),a?1/0:t.range.end),l=i.map((e,t)=>s.values[t].map(t=>null===t?null:co(e.entity,t))),c=!1!==e.raw.table_change,d=new Set;a&&xc.includes(a.aggregate)&&s.ends.forEach((e,t)=>{e>r&&d.add(t)});const u=a?void 0:s.times.map((e,t)=>s.ends[t]-e),h=l.map(e=>function(e,t,o=new Set){let n=0,r=0;return e.forEach((e,a)=>{if(null===e||!Number.isFinite(e)||o.has(a))return;const i=t?t[a]:1;i>0&&(n+=e*i,r+=i)}),r>0?n/r:null}(e,u,d)),p=function(e,t=250){return Math.max(0,e-t)}(s.times.length),m=ei(t.period,t.range,t.back,t.zone,n),f=p>0?Ze(n,"table_caption_latest",{period:m,shown:s.times.length-p,total:s.times.length}):m,g=(e,t)=>Ze(n,e,t),y=(e,t)=>{const o=i[e],r=l[e][t],a=null===r?"—":Wt(r,o.entity.decimals,n);if(!c)return R`<td class="n">${a}</td>`;let s="—";if(d.has(t))s=g("table_so_far");else{const t=function(e,t){return null===e||null===t||0===t?null:(e-t)/Math.abs(t)*100}(r,h[e]);null!==t&&(s=function(e,t){const o=Math.round(e);return Bt(`${o>0?"+":o<0?"−":""}${Wt(Math.abs(o),0,t)}`,"%")}(t,n))}return R`<td class="n">${a}</td>
      <td class="n change">${s}</td>`},v=s.times.map((e,t)=>t).slice(p);return R`<div class="data-table-wrap" tabindex="0" role="region" aria-label=${f}>
    <table class="data-table">
      <caption>
        ${f}
      </caption>
      <thead>
        <tr>
          <th scope="col">${g(a?Lc[a.unit]:"table_time")}</th>
          ${i.map(e=>R`<th scope="col" class="n">
                  <span class="table-series"
                    ><span class="swatch" style="background:${e.color}"></span>${e.entity.name}</span
                  >${e.entity.unit?R` <span class="table-unit">${e.entity.unit}</span>`:Z}
                </th>
                ${c?R`<th
                        scope="col"
                        class="n change"
                        aria-label=${g("table_vs_average_of",{name:e.entity.name})}
                        title=${g("table_vs_average_of",{name:e.entity.name})}
                      >
                        ${g("table_vs_average")}
                      </th>`:Z}`)}
        </tr>
      </thead>
      <tbody>
        ${v.map(e=>R`<tr>
              <th scope="row">${(e=>a&&o.heading?o.heading(s.times[e],s.ends[e],a.unit,n):el(s.times[e],n))(e)}</th>
              ${i.map((t,o)=>y(o,e))}
            </tr>`)}
      </tbody>
    </table>
  </div>`}const Tc=a`
  .table-head {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .table-head-main {
    flex: 1;
    min-width: 0;
  }
  .table-switch {
    flex: none;
    display: inline-flex;
    margin-bottom: 4px;
    padding: 2px;
    border-radius: 14px;
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
  .table-switch-option {
    font: inherit;
    font-size: 0.75em;
    line-height: 1;
    color: var(--secondary-text-color);
    background: none;
    border: none;
    border-radius: 12px;
    padding: 5px 10px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
  .table-switch-option.on {
    color: var(--primary-text-color);
    background: var(--card-background-color, #fff);
    box-shadow: 0 1px 2px color-mix(in srgb, #000 20%, transparent);
    font-weight: 500;
  }
  .table-switch-option:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .header-over .table-switch {
    margin: 2px 0;
  }
  .data-table-wrap {
    height: 180px;
    overflow: auto;
    border-radius: 4px;
  }
  .frame.compact .data-table-wrap {
    height: 110px;
  }
  .data-table-wrap:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8125em;
    font-variant-numeric: tabular-nums;
  }
  .data-table caption {
    caption-side: top;
    text-align: start;
    padding: 0 6px 4px;
    font-size: 0.875em;
    color: var(--secondary-text-color);
  }
  .data-table th,
  .data-table td {
    padding: 4px 6px;
    text-align: start;
    white-space: nowrap;
    border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2));
  }
  .data-table thead th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--secondary-text-color);
    font-weight: 500;
    font-size: 0.9em;
  }
  /* On a narrow card a long time wraps, and stays in view while the values scroll sideways. */
  .data-table tbody th {
    font-weight: normal;
    color: var(--primary-text-color);
    white-space: normal;
    min-width: 9em;
  }
  .data-table tbody th,
  .data-table thead th:first-child {
    position: sticky;
    inset-inline-start: 0;
    background: var(--ha-card-background, var(--card-background-color, #fff));
  }
  .data-table tbody th {
    z-index: 1;
  }
  .data-table thead th:first-child {
    z-index: 2;
  }
  .data-table .n {
    text-align: end;
  }
  .data-table td.change {
    color: var(--secondary-text-color);
  }
  .table-series {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .table-series .swatch {
    width: 8px;
    height: 8px;
  }
  .table-unit {
    font-weight: normal;
    opacity: 0.8;
  }
`;function Oc(e,t){const o=e*t;return o+190<=t?"right":o>=190?"left":e>.5?"pin-left":"pin-right"}const Pc=3e3;function Dc(e,t){if(0===e.length)return-1;let o=0,n=e.length-1;for(;o<n;){const r=o+n>>1;e[r].t<t?o=r+1:n=r}return o>0&&t-e[o-1].t<=e[o].t-t?o-1:o}function Uc(e,t){let o;for(const n of e){const e=Dc(n,t);if(e<0)continue;const r=n[e].t;(void 0===o||Math.abs(r-t)<Math.abs(o-t))&&(o=r)}return o}const Ic=new WeakMap;function Hc(e){let t=Ic.get(e);return t||(t={},Ic.set(e,t)),t}function Wc(e){return Ic.get(e)?.t}function Rc(e,t){const o=Hc(e.host);void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0,o.t!==t&&(o.t=t,e.requestUpdate())}function qc(e){const t=Ic.get(e);void 0!==t?.timer&&clearTimeout(t.timer),Ic.delete(e)}function Bc(e){return!1!==e.tooltip}function Zc(e){const t=e.tooltip;if(void 0!==t&&"boolean"!=typeof t)throw new Error('"tooltip" must be true or false')}function Vc(e,t,o){const n=Hc(e.host),r=t=>{t!==n.t&&(n.t=t,e.requestUpdate())},a=()=>{void 0!==n.timer&&clearTimeout(n.timer),n.timer=void 0};return{move(e){a();const n=e.currentTarget.getBoundingClientRect(),i=n.width>0?Math.min(1,Math.max(0,(e.clientX-n.left)/n.width)):0;r(Uc(o,t.start+i*(t.end-t.start)))},leave(e){a(),"touch"===e.pointerType||"pen"===e.pointerType?n.timer=setTimeout(()=>{n.timer=void 0,r(void 0)},Pc):r(void 0)}}}const Yc=e=>Math.round(1e4*e)/100+"%";function Gc(e){const t=new Set(e.map(e=>e.entity.unit));return 1===t.size?[...t][0]:""}function Xc(e,t,o,n){return R`<div class="tooltip-row tooltip-total">
    <span class="swatch"></span>
    <span class="tooltip-name">${Ze(e.hass,"chart_total")}</span>
    <span class="tooltip-value">${null===t?"—":Bt(Wt(t,n,e.hass),o)}</span>
  </div>`}function Kc(e,t,o,n,r,a={}){if(void 0===n)return Z;const i=o.x(n)/Za;if(!(i>=0&&i<=1))return Z;const s=Oc(i,r),l=t.map(e=>{const t=Dc(e.points,n);return{s:e,p:t<0?void 0:e.points[t]}});return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Yc(i)}"></div>
    ${l.map(({s:e,p:t})=>{if(!t||null===t.v)return Z;const n=a.dotY?a.dotY(e,t):o.y(t.v);if(null===n)return Z;const r=n/Va;return r>=0&&r<=1?R`<span
        class="hover-dot"
        style="left:${Yc(o.x(t.t)/Za)};top:${Yc(r)};background:${e.color}"
      ></span>`:Z})}
    <div class="tooltip ${s}" style=${s.startsWith("pin")?"":`left:${Yc(i)}`}>
      <div class="tooltip-time">${a.heading?a.heading(n):el(n,e.hass)}</div>
      ${l.map(({s:t,p:o})=>R`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${a.text?a.text(t,o):function(e,t,o){return e&&null!==e.v?Bt(Wt(co(t.entity,e.v),t.entity.decimals,o.hass),t.entity.unit):"—"}(o,t,e)}</span>
          </div>`)}
      ${a.footer?a.footer(l):Z} ${a.after??Z}
    </div>
  </div>`}const Jc=a`
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
`,Qc=[{name:"keyboard_nav",path:["keyboard_nav"],default:!0}],ed=[{name:"keyboard_nav",selector:{boolean:{}}}];function td(e){if(void 0!==e.keyboard_nav&&"boolean"!=typeof e.keyboard_nav)throw new Error('"keyboard_nav" must be true or false')}function od(e){return e.filter(e=>null!==e.v)}function nd(e,t){const o=od(e),n=Dc(o,t);return n<0?void 0:o[n]}function rd(e,t,o){const n=e.filter(e=>e.points.some(e=>null!==e.v));if(0===n.length)return;let r=t?n.findIndex(e=>e.index===t.series):-1;if(r<0||!t){const e=od(n[0].points),t="first"===o?e[0]:e[e.length-1];return{series:n[0].index,t:t.t}}if("up"===o||"down"===o){r=Math.min(n.length-1,Math.max(0,r+("down"===o?1:-1)));const e=nd(n[r].points,t.t);return{series:n[r].index,t:e.t}}const a=od(n[r].points);if("first"===o)return{series:n[r].index,t:a[0].t};if("last"===o)return{series:n[r].index,t:a[a.length-1].t};const i=Dc(a,t.t),s="back"===o||"on"===o?(l=a.length,Math.max(1,Math.round(l/10))):1;var l;const c=Math.min(a.length-1,Math.max(0,i+("next"===o||"on"===o?s:-s)));return{series:n[r].index,t:a[c].t}}const ad=new WeakMap;function id(e){ad.delete(e)}const sd=e=>Math.round(1e4*e)/100+"%";function ld(e,t,o,n){const r=n.text?n.text(t,o):null===o.v?"—":Bt(Wt(co(t.entity,o.v),t.entity.decimals,e.hass),t.entity.unit);return Ze(e.hass,"keyboard_nav_point",{name:t.entity.name,time:n.heading?n.heading(o.t):el(o.t,e.hass),value:r})}function cd(e,t,o,n,r,a={}){if(!1===e.raw.keyboard_nav)return{layer:Z};const i=e.host,s=o.x(n.end)>=o.x(n.start)?1:-1,l=ad.get(i),c=l&&Wc(i)===l.t?t.find(e=>e.index===l.series):void 0,d=c?nd(c.points,l.t):void 0;let u=Z;if(c&&d&&null!==d.v){const e=a.position?a.position(c,d):[o.x(d.t),a.dotY?a.dotY(c,d):o.y(d.v)],[t,n]=e??[NaN,NaN];null!==t&&null!==n&&t>=0&&t<=Za&&n>=0&&n<=Va&&(u=R`<span
        class="key-point"
        style="left:${sd(t/Za)};top:${sd(n/Va)};background:${c.color}"
      ></span>`)}return{keys:{label:Ze(e.hass,"keyboard_nav_label",{chart:r}),keydown:o=>{if(o.target!==o.currentTarget||o.altKey||o.ctrlKey||o.metaKey)return;const r=ad.get(i);if("Escape"===o.key){if(!r)return;return o.preventDefault(),o.stopPropagation(),ad.delete(i),void(Wc(i)===r.t?Rc(e,void 0):e.requestUpdate())}if("Enter"===o.key){const e=r&&t.find(e=>e.index===r.series);if(!e||e.entity.config.statistic)return;return o.preventDefault(),void i.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e.entity.entityId}}))}const a=function(e,t=1){switch(e){case"ArrowRight":return 1===t?"next":"prev";case"ArrowLeft":return 1===t?"prev":"next";case"ArrowUp":return"up";case"ArrowDown":return"down";case"PageUp":return"back";case"PageDown":return"on";case"Home":return"first";case"End":return"last";default:return}}(o.key,s);if(!a)return;o.preventDefault();const l=Wc(i),c=r&&void 0!==l?{...r,t:l}:r,d=t.map(e=>({index:e.index,points:e.points.filter(e=>e.t>=n.start&&e.t<=n.end)})),u=rd(d,c,a);u&&(ad.set(i,u),Wc(i)===u.t?e.requestUpdate():Rc(e,u.t))},blur:()=>{const t=ad.get(i);t&&(ad.delete(i),Wc(i)===t.t?Rc(e,void 0):e.requestUpdate())}},layer:R`${u}
      <span class="key-live" role="status" aria-live="polite">${c&&d?ld(e,c,d,a):""}</span>`}}const dd=a`
  .plot-area[tabindex]:focus {
    outline: none;
  }
  .plot-area[tabindex]:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: 2px;
  }
  .key-point {
    position: absolute;
    z-index: 2;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    box-shadow:
      0 0 0 2px var(--card-background-color, #fff),
      0 0 0 4px var(--primary-color);
  }
  .key-live {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;function ud(e,t){const o=e.filter(e=>e.hidden&&e.hidden.length>0).map(e=>{const o=Ba(Dl(e.hidden,500)).map(o=>qa(o.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join("");return q`<path class="ghost" data-series=${e.index} d=${o} fill="none"></path>`});return o.length?q`<g class="ghosts" aria-hidden="true">${o}</g>`:Z}function hd(e,t){const o=t.states[e.entity],n=String(o?.attributes?.friendly_name??e.entity),r=e=>Wt(e,(e=>Math.min(3,(String(e).split(".")[1]??"").length))(e),t),a=[];if(e.state){const r=[e.state].flat().map(e=>o?t.formatEntityState?.({...o,state:e},e)??e:e);a.push(`${n}: ${r.join(" / ")}`)}return void 0!==e.above&&void 0!==e.below?a.push(`${r(e.above)} < ${n} < ${r(e.below)}`):void 0!==e.above?a.push(`${n} > ${r(e.above)}`):void 0!==e.below&&a.push(`${n} < ${r(e.below)}`),a.join(", ")}function pd(e,t,o,n,r=Z,a=Date.now()){const i={below:r,wrapClasses:"",wrapStyle:""};if(!0!==e.raw.when_strip||!t.conditions)return i;const s=[];for(const d of t.series){const t=fa(d.entity.config,e.raw);t&&!s.some(e=>ga(e.c,t))&&s.push({c:t,color:d.color})}if(0===s.length)return i;const l=s.map(({c:r,color:i})=>{const s=function(e,t,o){const n=[],r=Math.min(t.end,o);return e.forEach((o,a)=>{if(!o.ok)return;const i=Math.max(t.start,o.t),s=Math.min(r,a+1<e.length?e[a+1].t:r);s>i&&n.push([i,s])}),n}(va(r,t.conditions.states.get(r.entity)??[]),o,a),l=hd(r,e.hass),c=s.map(([e,t])=>{const o=n.x(e);return q`<rect x=${o} y="0" width=${Math.max(0,n.x(t)-o)} height="1" fill=${i}></rect>`});return R`<div
      class="cond-row"
      role="img"
      aria-label=${Ze(e.hass,"when_strip_label",{condition:l})}
    >
      <svg viewBox="0 0 ${Za} 1" preserveAspectRatio="none" aria-hidden="true">${c}</svg>
      <span class="cond-label" aria-hidden="true">${l}</span>
    </div>`}),c=6+12*s.length+3*(s.length-1);return{below:R`<div class="cond-below">
      <div class="cond-strip">${l}</div>
      ${r}
    </div>`,wrapClasses:"has-strip "+(r===Z?"":"strip-overview"),wrapStyle:`--cd-strip:${c}px`}}const md=a`
  .plot .ghost {
    stroke: var(--secondary-text-color, #727272);
    stroke-width: 1px;
    stroke-opacity: 0.45;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .plot-wrap.has-strip {
    grid-template-rows: minmax(0, 1fr) auto auto;
  }
  /* The strip adds its own height, so the plot keeps its size. */
  .frame .plot-wrap.has-strip.has-overview {
    height: calc(180px + var(--cd-strip));
  }
  .frame.compact .plot-wrap.has-strip.has-overview {
    height: calc(110px + var(--cd-strip));
  }
  .frame .plot-wrap.has-strip.strip-overview.has-overview {
    height: calc(220px + var(--cd-strip));
  }
  .frame.compact .plot-wrap.has-strip.strip-overview.has-overview {
    height: calc(140px + var(--cd-strip));
  }
  .cond-below {
    grid-column: 2;
    grid-row: 3;
    min-width: 0;
  }
  .cond-strip {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 6px;
  }
  .cond-row {
    position: relative;
    height: 12px;
    border-radius: 3px;
    overflow: hidden;
    background: color-mix(in srgb, var(--primary-text-color, #212121) 6%, transparent);
  }
  .cond-row svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .cond-row rect {
    opacity: 0.5;
  }
  .cond-label {
    position: absolute;
    left: 4px;
    top: 0;
    max-width: calc(100% - 8px);
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 9px;
    line-height: 12px;
    color: var(--primary-text-color, #212121);
    white-space: nowrap;
    pointer-events: none;
    text-shadow:
      0 0 2px var(--card-background-color, #fff),
      0 0 2px var(--card-background-color, #fff);
  }
`,fd=["none","history"],gd={s:1e3,min:6e4,h:36e5,d:864e5},yd=/^\s*(\d+(?:\.\d+)?)\s*(s|min|h|d)\s*$/;function vd(e){if("string"!=typeof e)return;const t=yd.exec(e);if(!t)return;const o=Number(t[1])*gd[t[2]];return o>0&&o<=26784e5?o:void 0}function _d(e){const t=e.point_action;if(void 0===t)return;if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"point_action" must be an object like { action: history, window: 2h }');const{action:o,window:n}=t;if(void 0!==o&&!fd.includes(o))throw new Error(`"point_action.action" must be one of: ${fd.join(", ")}`);if(void 0!==n&&void 0===vd(n))throw new Error('"point_action.window" must be a duration like 30min, 2h or 1d (at most 31d)')}function bd(e){const t=e.point_action;if("history"===t?.action)return vd(t.window??"2h")??vd("2h")}function xd(e,t,o,n){if(void 0!==o?.end&&o.end>o.t)return{start:o.t,end:Math.min(o.end,n)};let r=e-t/2,a=e+t/2;return a>n&&(r-=a-n,a=n),{start:r,end:a}}function wd(e,t){const o=e=>encodeURIComponent(new Date(e).toISOString());return`/history?entity_id=${e.map(encodeURIComponent).join(",")}&start_date=${o(t.start)}&end_date=${o(t.end)}`}function $d(e,t,o,n=Date.now(),r){const a=function(e){const t=e.map(e=>e.entity.entityId).filter(e=>/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(e));return[...new Set(t)]}(e);if(0===a.length)return;const i=r?.(t);if(i)return wd(a,xd(i.start,o,{t:i.start,end:i.end},n));let s;for(const l of e){const e=Dc(l.points,t);if(e>=0&&l.points[e].t===t){s=l.points[e];break}}return wd(a,xd(t,o,s,n))}function kd(e,t){e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:{tap_action:{action:"navigate",navigation_path:t}},action:"tap"}}))}function Md(e,t,o,n){const r=bd(e.raw);if(void 0===r||void 0===o)return Z;const a=$d(t,o,r,Date.now(),n);return a?R`<a
    class="tooltip-history"
    href=${a}
    @pointerdown=${e=>e.stopPropagation()}
    @click=${t=>{t.preventDefault(),t.stopPropagation(),kd(e.host,a)}}
    >${Ze(e.hass,"history_open")}</a
  >`:Z}const zd=new WeakMap;function Ed(e,t,o,n=!1,r){const a=bd(e.raw);if(void 0===a)return;const i=Bc(e.raw);return{down(t){const o=zd.get(e.host);void 0!==o?.timer&&clearTimeout(o.timer),zd.set(e.host,{x:t.clientX,y:t.clientY,type:t.pointerType||"mouse"})},click(s){const l=zd.get(e.host);if(!l)return;if(s.target?.closest?.('.entity, a, button, [role="button"], .header-over'))return;if(Math.hypot(s.clientX-l.x,s.clientY-l.y)>6)return;if("mouse"!==l.type&&i)return;const c=s.currentTarget.getBoundingClientRect(),d=c.width>0?Math.min(1,Math.max(0,(s.clientX-c.left)/c.width)):0,u=Uc(o.map(e=>e.points),t.start+d*(t.end-t.start));if(void 0===u)return;const h=$d(o,u,a,Date.now(),r);if(!h)return;const p=s.currentTarget;n?s.detail>1||(l.timer=setTimeout(()=>{l.timer=void 0,kd(p,h)},250)):kd(p,h)}}}const Sd=a`
  .tooltip-history {
    display: block;
    margin-top: 4px;
    padding-top: 4px;
    border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
    color: var(--primary-color);
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    pointer-events: auto;
    cursor: pointer;
  }
  .tooltip-history:hover,
  .tooltip-history:focus-visible {
    text-decoration: underline;
  }
  .plot-area.opens-history,
  .plot-area.hoverable.opens-history {
    cursor: pointer;
  }
`,Ad=["all","last","minmax","ends"],jd=["auto","above","below","center"];function Cd(e){const t=e;if(!0===t.labels)return{show:t.labels_show??"all",position:t.labels_position??"auto",hideOverlap:!0!==t.labels_overlap}}function Nd(e,t){const o=e.map((e,t)=>null===e.v?-1:t).filter(e=>e>=0);if(0===o.length)return[];const n=o[o.length-1],r=o[0];let a=r,i=r;for(const l of o)e[l].v>e[a].v&&(a=l),e[l].v<e[i].v&&(i=l);const s="last"===t?[n]:"ends"===t?[n,r]:"minmax"===t?[a,i]:[n,a,i,...o];return[...new Set(s)]}function Ld(e,t){const o=e[t].v,n=[e[t-1]?.v??null,e[t+1]?.v??null].filter(e=>null!==e);if(0===n.length)return"above";const r=n.reduce((e,t)=>e+t,0)/n.length;return o<r?"below":"above"}function Fd(e,t){const o=e.x-e.width/2,n="above"===t?e.y-6-14:"below"===t?e.y+6:e.y-7;return[o,n,o+e.width,n+14]}const Td=(e,t)=>e[0]<t[2]&&t[0]<e[2]&&e[1]<t[3]&&t[1]<e[3];function Od(e){return Math.ceil(6*e.length)+6}const Pd=e=>Math.round(1e4*e)/100+"%";function Dd(e,t,o,n){const r=[],a=[];for(const c of e){const e=o.skip?c.points.map(e=>o.skip(e)?{...e,v:null}:e):c.points;!t.hideOverlap&&"all"===t.show&&e.filter(e=>null!==e.v).length>40||Nd(e,t.show).forEach((i,s)=>{const l=e[i],[d,u]=o.at(l);if(!(d>=0&&d<=1&&u>=0&&u<=1))return;const h=Wt(l.v,c.decimals,n),p="auto"===t.position?Ld(e,i):t.position,m="above"===p?"below":"above",f={x:d*o.width,y:u*o.height,width:Od(h),sides:"center"===p?["center"]:[p,m],text:h,color:c.color,fx:d,fy:u};(s<3&&"all"===t.show?r:"all"===t.show?a:r).push(f)})}const i=[...r,...a].slice(0,600),s=function(e,t,o){const n=[];return e.map(e=>{for(const r of e.sides){const a="auto"===r?"above":r,i=Fd(e,a);if(!o)return{side:a,box:i};if(!(i[1]<-2||i[3]>t+2||n.some(e=>Td(e,i))))return n.push(i),{side:a,box:i}}})}(i,o.height,t.hideOverlap),l=i.map((e,t)=>({b:e,p:s[t]})).filter(e=>void 0!==e.p);return 0===l.length?Z:(l.sort((e,t)=>e.b.fx-t.b.fx),R`<div class="point-labels">
    ${l.map(({b:e,p:t})=>R`<span
          class="point-label ${t.side} ${function(e,t,o){return e-t/2<0?"start":e+t/2>o?"end":""}(e.fx*o.width,e.width,o.width)}"
          style="left:${Pd(e.fx)};top:${Pd(e.fy)};--cd-label:${e.color}"
          >${e.text}</span
        >`)}
  </div>`)}const Ud=a`
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
`,Id=["none","line","figure"],Hd=!1,Wd=!1,Rd="none";function qd(e){const t=e.extremes??{};return{min:t.min??Hd,max:t.max??Wd,average:t.average??Rd}}function Bd(e){return e.min||e.max||"none"!==e.average}const Zd=18,Vd=e=>Math.ceil(6.2*e.length)+12,Yd=(e,t)=>e.l<t.r&&t.l<e.r&&e.t<t.b&&t.t<e.b;function Gd(e,t,o,n){const r=Vd(e.text),a=e.x*o,i=e.y*n,s="start"===t.align?0:"end"===t.align?o-r:a-r/2,l=8+20*t.tier,c="above"===t.side?i-l-Zd:i+l;return{l:s,r:s+r,t:c,b:c+Zd}}function Xd(e,t,o,n=[]){const r=e.filter(e=>e.dot).map(e=>({l:e.x*t-6,r:e.x*t+6,t:e.y*o-6,b:e.y*o+6})),a=[...n,...r];return e.map(e=>{const n=Vd(e.text),r=e.x*t,i=r-n/2<0?"start":r+n/2>t?"end":"center",s=(n,r=0)=>Gd(e,{side:n,align:i,tier:r},t,o),l=e=>e.t>=0&&e.b<=o,c="above"===e.prefer?"below":"above",d=[{side:e.prefer,tier:0},{side:c,tier:0},{side:e.prefer,tier:1},{side:c,tier:1}],u=d.find(e=>(e=>l(e)&&!a.some(t=>Yd(t,e)))(s(e.side,e.tier)))??d.find(e=>0===e.tier&&l(s(e.side)))??d[0];a.push(s(u.side,u.tier));const h=u.side,p=u.tier;return{side:h,align:i,tier:p}})}function Kd(e,t,o,n){if("day"===n?.unit||"week"===n?.unit||"month"===n?.unit){const t="month"===n.unit?{month:"short",year:"numeric"}:{weekday:"short",day:"numeric",month:"short"};try{return new Intl.DateTimeFormat(o?.locale?.language??"en",{...t,timeZone:Gs(o)}).format(e)}catch{return new Intl.DateTimeFormat("en",t).format(e)}}return t.end-t.start>864e5?el(e,o):Qs(e,o)}const Jd=e=>Math.round(1e4*e)/100+"%";function Qd(e){const{ctx:t,scales:o,width:n,height:r}=e,a=qd(t.raw);if(!Bd(a))return{lines:Z,overlay:Z};const i=e.series.filter(e=>!1!==e.entity.config.extremes).map(t=>{const{min:o,max:n}=function(e){let t,o;for(const n of e)null===n.v||n.carried||((!t||n.v<t.v)&&(t=n),(!o||n.v>o.v)&&(o=n));return{min:t,max:o}}(t.points),r="none"===a.average?void 0:function(e,t,o=1/0){const n=e.filter(e=>null!==e.v&&!(e.carried&&!t));if(0!==n.length){if(t){let t=0,n=0;for(let r=0;r<e.length;r++){const a=e[r];if(null===a.v)continue;const i=r+1<e.length?e[r+1].t:a.t,s=Math.max(0,Math.min(i,o)-a.t);t+=a.v*s,n+=s}if(n>0)return t/n}return n.reduce((e,t)=>e+t.v,0)/n.length}}(t.points,e.timeWeighted,e.until);return{s:t,min:a.min?o:void 0,max:a.max?n:void 0,average:r}}),s=(e,o)=>Bt(Wt(e,o.entity.decimals,t.hass),o.entity.unit),l=e=>Ze(t.hass,e),c=e=>e>=0&&e<=1,d=[];for(const f of i){for(const n of["max","min"]){const r=f[n];if(!r)continue;const a=o.y(r.v)/Va;if(!c(a))continue;const i=l("max"===n?"extremes_high":"extremes_low");d.push({s:f.s,kind:n,spec:{x:o.x(r.t)/Za,y:a,text:`${i} ${s(r.v,f.s)} · ${Kd(r.t,e.range,t.hass,e.group)}`,prefer:"max"===n?"above":"below",dot:!0}})}if("line"===a.average&&void 0!==f.average){const e=o.y(f.average)/Va;c(e)&&d.push({s:f.s,kind:"average",spec:{x:1,y:e,text:`${l("extremes_average")} ${s(f.average,f.s)}`,prefer:"above"}})}}const u=Xd(d.map(e=>e.spec),n,r,e.obstacles),h="line"===a.average?q`<g class="average-lines">${i.map(e=>{if(void 0===e.average)return Z;const t=o.y(e.average);return q`<line class="average-line" x1="0" x2=${Za} y1=${t} y2=${t} stroke=${e.s.color}></line>`})}</g>`:Z,p="figure"===a.average&&i.some(e=>void 0!==e.average)?R`<div class="extreme-figures">
          ${i.map(t=>void 0===t.average?Z:R`<div class="extreme-figure">
                  ${e.series.length>1?R`<span class="swatch" style="background:${t.s.color}"></span>`:Z}
                  <span>${l("extremes_average")} ${s(t.average,t.s)}</span>
                </div>`)}
        </div>`:Z,m=R`<div class="extremes-layer">
    ${d.map((e,t)=>{const{side:o,align:n,tier:r}=u[t],{x:a,y:i,text:s}=e.spec,l="start"===n?"left:0":"end"===n?"right:0":`left:${Jd(a)}`;return R`<span
        class="extreme-label ${e.kind} ${o} ${n} ${r?"far":""}"
        style="${l};top:${Jd(i)};--series:${e.s.color}"
        >${s}</span
      >`})}
    ${d.map(e=>e.spec.dot?R`<span
            class="extreme-dot ${e.kind}"
            style="left:${Jd(e.spec.x)};top:${Jd(e.spec.y)};border-color:${e.s.color}"
          ></span>`:Z)}
    ${p}
  </div>`;return{lines:h,overlay:m}}const eu=a`
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
    height: ${Zd}px;
    box-sizing: border-box;
    padding: 0 6px;
    border-radius: 9px;
    font-size: 11px;
    line-height: ${Zd}px;
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
`,tu=[{name:"extremes_max",path:["extremes","max"],default:Wd},{name:"extremes_min",path:["extremes","min"],default:Hd},{name:"extremes_average",path:["extremes","average"],default:Rd}];const ou={name:"extremes",path:["extremes"],default:!0},nu=new Map;function ru(e,t){const o=Be(t);let n=nu.get(o);return n&&n[0]===e[0]||(n=[...e,{name:"extremes",selector:{boolean:{}}}],nu.set(o,n)),n}const au=new WeakMap;function iu(e){let t=au.get(e);return t||(t=[...e,ou],au.set(e,t)),t}const su=["hourly","daily","twice_daily"],lu=["datetime","period_start","start","starts_at","startsAt","time","from","date"],cu=["value","pv_estimate","watts","price","total","temperature","native_temperature"],du=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim()),uu=e=>void 0===e||"string"==typeof e;function hu(e){const t=e.forecast;if("object"==typeof t&&null!==t&&du(t.entity))return{...t,entity:t.entity.trim()}}function pu(e){const t=new Set;for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=hu(o);e&&t.add(e.entity)}return[...t]}function mu(e){if("number"==typeof e)return e<1e11?1e3*e:e;if("string"==typeof e){const t=e.trim();return/^\d+(\.\d+)?$/.test(t)?mu(Number(t)):Date.parse(t)}return e instanceof Date?e.getTime():NaN}const fu=(e,t)=>t.find(t=>void 0!==e[t]);function gu(e,t,o,n=1){const r=[],a=(e,t)=>{if(!Number.isFinite(e))return;const o=Nn(t);r.push({t:e,v:null===o?null:o*n})};if(Array.isArray(e)){for(const i of e)if(Array.isArray(i))a(mu(i[0]),i[1]);else if("object"==typeof i&&null!==i){const e=i,n=o??fu(e,lu),r=t??fu(e,cu);if(void 0===n)continue;a(mu(e[n]),void 0===r?void 0:e[r])}}else if("object"==typeof e&&null!==e)for(const[i,s]of Object.entries(e))a(mu(i),s);return r.sort((e,t)=>e.t-t.t),r.filter((e,t)=>t+1>=r.length||r[t+1].t!==e.t)}function yu(e,t,o){const n=[],r=function(e,t){for(let o=1;o<e.length;o++){const n=e[o-1],r=e[o];if(!(r.t<t))return n.t>t||null===n.v||null===r.v?null:r.t===n.t?r.v:n.v+(r.v-n.v)*(t-n.t)/(r.t-n.t)}return null}(e,t);null!==r&&n.push({t:t,v:r});for(const a of e)if(!(a.t<t||a.t===t&&null!==r)&&(n.push(a),a.t>=o))break;return n}const vu=new WeakMap;function _u(e,t){const o=vu.get(e);if(o)for(const[n,r]of o)t.has(n)||(r.closed=!0,r.unsubscribe?.then(e=>e?.()),o.delete(n))}function bu(e,t){const o=e.hass.states[t.entity];if(t.attribute)return o?.attributes?.[t.attribute];if(t.entity.startsWith("weather.")){const n=o?.attributes?.forecast;return Array.isArray(n)?n:function(e,t,o,n,r){let a=vu.get(e);a||(a=new Map,vu.set(e,a));const i=`${o}|${n}`;let s=a.get(i);if(!s){const e=t.connection,l={closed:!1};s=l,a.set(i,l);const c=e?.subscribeMessage?.(e=>{l.closed||(l.items=Array.isArray(e?.forecast)?e.forecast:[],r())},{type:"weather/subscribe_forecast",entity_id:o,forecast_type:n});l.unsubscribe=c?.then(e=>e,()=>{})}return s.items}(e.host,e.hass,t.entity,t.type??"hourly",e.requestUpdate)}return o?.attributes?.forecast}function xu(e,t,o=Date.now()){const n=new Set,r=[];for(const c of t.series){const t=hu(c.entity.config);if(!t)continue;!t.attribute&&t.entity.startsWith("weather.")&&n.add(`${t.entity}|${t.type??"hourly"}`);const o=t.value_key??(t.entity.startsWith("weather.")?"temperature":void 0),a=Aa(gu(bu(e,t),o,t.time_key,t.multiply??1),c.entity.conversion);a.length>0&&r.push({s:c,points:a})}if(_u(e.host,n),0===r.length)return{frame:t,series:[]};const a=Math.max(...r.map(e=>e.points[e.points.length-1].t)),i=function(e,t,o,n,r){return!t||void 0===n||e.end<o-1e3||e.end>o+1e3?e.end:Math.max(e.end,Math.min(n,o+r))}(t.range,t.live,o,a,function(e){const t=e.forecast_hours;return 36e5*("number"==typeof t&&t>0?t:24)}(e.raw)),s=i===t.range.end?t.range:{...t.range,end:i},l=r.map(({s:e,points:t})=>({...e,points:yu(t,o,s.end),dash:!0})).filter(e=>e.points.some(e=>null!==e.v));return{frame:s===t.range?t:{...t,range:s},series:l}}function wu(e,t){return 0===e.length?Z:q`<g class="forecasts">${e.map(e=>{const o=Ba(Dl(e.points,500)).map(o=>qa(o.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join("");return q`<path class="forecast-line" data-series=${e.index} d=${o} fill="none" stroke=${e.color}></path>`})}</g>`}function $u(e,t,o){return t.map(t=>({...t,entity:{...t.entity,name:Ze(e.hass,"forecast_series",{name:t.entity.name})},points:t.points[0]&&t.points[0].t>o?[{t:o,v:null},...t.points]:t.points}))}function ku(e,t,o){const n=Math.min(...t.map(e=>e.points[0]?.t??1/0));if(!Number.isFinite(n))return Z;const r=o.x(n)/Za;return r>=0&&r<.97?R`<span class="forecast-label ${r>.8?"end":""}" style="left:${(e=>Math.round(1e4*e)/100+"%")(r)}"
    >${Ze(e.hass,"forecast_label")}</span
  >`:Z}const Mu=a`
  .plot .forecast-line {
    stroke-width: 2;
    stroke-dasharray: 6 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.85;
  }
  .forecast-label {
    position: absolute;
    top: 0;
    transform: translateX(4px);
    font-size: 10px;
    line-height: 1.2;
    padding: 1px 4px;
    border-radius: 3px;
    pointer-events: none;
    white-space: nowrap;
    color: var(--secondary-text-color);
    background: color-mix(in srgb, var(--card-background-color, #fff) 82%, transparent);
    border-left: 1px dashed var(--secondary-text-color);
  }
  .forecast-label.end {
    transform: translateX(calc(-100% - 4px));
    border-left: none;
    border-right: 1px dashed var(--secondary-text-color);
  }
`,zu=[{name:"forecast_entity",path:["forecast","entity"]},{name:"forecast_attribute",path:["forecast","attribute"]},{name:"forecast_value_key",path:["forecast","value_key"]},{name:"forecast_time_key",path:["forecast","time_key"]},{name:"forecast_type",path:["forecast","type"]},{name:"forecast_multiply",path:["forecast","multiply"]}],Eu=[{name:"forecast_hours",path:["forecast_hours"],default:24}],Su=[{name:"forecast_hours",selector:{number:{min:1,max:336,mode:"box",unit_of_measurement:"h"}}}],Au=e=>e&&pu(e).length>0?"forecast":"";function ju(e){return Au(e)?Su:[]}const Cu=new Map,Nu=new WeakMap;const Lu=1/12,Fu={s:1e3,min:6e4,h:36e5,d:864e5,w:6048e5},Tu=/^(\d+(?:\.\d+)?)\s*(s|min|h|d|w)$/;function Ou(e){if("number"==typeof e)return Number.isFinite(e)&&e>0?6e4*e:void 0;if("string"!=typeof e)return;const t=Tu.exec(e.trim());if(!t)return;const o=Number(t[1])*Fu[t[2]];return o>0?o:void 0}const Pu=1.4826;function Du(e){const t=e.length>>1;return e.length%2?e[t]:(e[t-1]+e[t])/2}function Uu(e,t){const o=e.map(()=>null),n=[],r=[];e.forEach((e,t)=>{null===e.v||e.carried||(n.push(t),r.push(e))});const a=function(e){if(e.length<3)return 0;const t=e.slice(1).map((t,o)=>t.v-e[o].v);t.sort((e,t)=>e-t);const o=Du(t),n=t.map(e=>Math.abs(e-o)).sort((e,t)=>e-t);return Pu*Du(n)/Math.SQRT2}(r),i=t/2;let s=0,l=0;return r.forEach((e,t)=>{for(;l<r.length&&r[l].t<=e.t+i;)l++;for(;r[s].t<e.t-i;)s++;const c=l-s-1;if(c<5||t-s<2||l-1-t<2)return;const d=Math.max(1,Math.ceil(c/401)),u=[];for(let o=s;o<l;o+=d)o!==t&&u.push(r[o].v);u.sort((e,t)=>e-t);const h=Du(u),p=u.map(e=>Math.abs(e-h)).sort((e,t)=>e-t),m=Pu*Du(p)||p.reduce((e,t)=>e+t,0)/p.length*1.2533,f=Math.max(m,a),g=e.v-h,y=f<1e-9*Math.max(1,Math.abs(h)),v=y?Math.abs(g)<1e-9*Math.max(1,Math.abs(h))?0:Math.sign(g)*(1/0):g/f;o[n[t]]={t:e.t,v:e.v,mid:h,sd:y?0:f,z:v}}),o}function Iu(e,t){return e.filter(e=>null!==e&&Math.abs(e.z)>t).sort((e,t)=>Math.abs(t.z)-Math.abs(e.z))}function Hu(e,t){const o=e<0?"−":"+";if(Math.abs(e)>10){return Ze(t,e<0?"anomaly_beyond_low":"anomaly_beyond_high",{limit:`${o}${Wt(10,0,t)}σ`})}return`${o}${Wt(Math.abs(e),1,t)}σ`}function Wu(e,t,o,n){const r=e=>Math.round(10*e)/10;let a="",i=[];const s=()=>{if(i.length>=2){const e=i.map((e,a)=>`${a?"L":"M"}${r(o(e.t))},${r(n(e.mid+t*e.sd))}`).join(""),s=[...i].reverse().map(e=>`L${r(o(e.t))},${r(n(e.mid-t*e.sd))}`).join("");a+=`${e}${s}Z`}i=[]};for(const l of e)null===l?s():i.push(l);return s(),a}function Ru(e,t){if(e.length<=t)return e;const o=Math.ceil(e.length/t);return e.filter((t,n)=>n%o===0||n===e.length-1)}const qu=e=>Math.round(1e4*e)/100+"%";function Bu(e){const{ctx:t,scales:o}=e,n=function(e){const t=e;if(!0===t.anomalies)return{window:Ou(t.anomalies_window),sigma:t.anomalies_sigma??3,color:t.anomalies_color??"red",band:!1!==t.anomalies_band}}(t.raw);if(!n)return{behind:Z,overlay:Z};const r=n.window??Math.max(6e4,(e.range.end-e.range.start)*Lu),a=je(n.color),i=[],s=[];for(const h of e.series){const e=Uu(h.points,r);if(n.band){const t=Wu(Ru(e,600),n.sigma,o.x,o.y);t&&i.push(q`<path class="anomaly-band" d=${t} fill=${h.color}></path>`)}for(const t of Iu(e,n.sigma).slice(0,200)){const e=o.x(t.t)/Za,n=o.y(t.v)/Va;e>=0&&e<=1&&n>=0&&n<=1&&s.push({s:h,a:t,x:e,y:n})}}if(0===i.length&&0===s.length)return{behind:Z,overlay:Z};s.sort((e,t)=>Math.abs(t.a.z)-Math.abs(e.a.z));const l=s.map(e=>Hu(e.a.z,t.hass)),c=function(e,t,o,n,r=[],a=3){const i=e.map((e,t)=>t).sort((t,o)=>Math.abs(e[o].z)-Math.abs(e[t].z)),s=e.map(e=>({l:e.x*o-6,r:e.x*o+6,t:e.y*n-6,b:e.y*n+6})),l=[],c=[...r],d=[];for(const u of i){if(d.length>=a)break;const r=e[u],i=l.some(t=>Math.abs((e[t].x-r.x)*o)<48&&Math.abs((e[t].y-r.y)*n)<54);if(i)continue;l.push(u);const h={x:r.x,y:r.y,text:t[u],prefer:r.z>0?"above":"below",dot:!0},p=s.filter((e,t)=>t!==u),[m]=Xd([h],o,n,[...c,...p]),f=Gd(h,m,o,n);!(f.t>=0&&f.b<=n&&f.l>=0&&f.r<=o)||c.some(e=>Yd(e,f))||p.some(e=>Yd(e,f))||(c.push(f),d.push({index:u,spec:h,placed:m}))}return d}(s.map(e=>({x:e.x,y:e.y,z:e.a.z})),l,e.width,e.height,e.obstacles),d=e=>Ze(t.hass,"anomaly_title",{name:e.s.entity.name,value:Bt(Wt(e.a.v,e.s.entity.decimals,t.hass),e.s.entity.unit),sigma:Hu(e.a.z,t.hass)}),u=0===s.length?Z:R`<div class="anomaly-layer" style="--cd-anomaly:${a}">
          ${c.map(({index:e,placed:t})=>{const o=s[e],{side:n,align:r,tier:a}=t,i="start"===r?"left:0":"end"===r?"right:0":`left:${qu(o.x)}`;return R`<span
              class="anomaly-label ${n} ${r} ${a?"far":""}"
              style="${i};top:${qu(o.y)}"
              >${l[e]}</span
            >`})}
          ${s.map(e=>R`<span
                class="anomaly-dot"
                style="left:${qu(e.x)};top:${qu(e.y)}"
                role="img"
                aria-label=${d(e)}
                title=${d(e)}
              ></span>`)}
        </div>`;return{behind:i.length?q`<g class="anomaly-bands">${i}</g>`:Z,overlay:u}}const Zu=a`
  .plot .anomaly-band {
    opacity: 0.13;
    stroke: none;
  }
  .anomaly-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .anomaly-dot {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--cd-anomaly);
    border: 1.5px solid var(--card-background-color, #fff);
    transform: translate(-50%, -50%);
  }
  .anomaly-label {
    position: absolute;
    height: ${Zd}px;
    line-height: ${Zd}px;
    padding: 0 5px;
    box-sizing: border-box;
    border-radius: 9px;
    font-size: 11px;
    font-weight: 500;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    color: color-mix(in srgb, var(--cd-anomaly) 70%, var(--primary-text-color));
    background: color-mix(in srgb, var(--card-background-color, #fff) 85%, transparent);
    transform: translateY(var(--dy));
  }
  .anomaly-label.above {
    --dy: calc(-100% - 8px);
  }
  .anomaly-label.below {
    --dy: 8px;
  }
  .anomaly-label.above.far {
    --dy: calc(-200% - 10px);
  }
  .anomaly-label.below.far {
    --dy: calc(100% + 10px);
  }
  .anomaly-label.center {
    transform: translate(-50%, var(--dy));
  }
`,Vu=[{name:"anomalies",path:["anomalies"],default:!1},{name:"anomalies_window",path:["anomalies_window"],default:"auto"},{name:"anomalies_sigma",path:["anomalies_sigma"],default:3},{name:"anomalies_color",path:["anomalies_color"],default:"red"},{name:"anomalies_band",path:["anomalies_band"],default:!0}],Yu=e=>!0===e?.anomalies?"anomalies":"";function Gu(e){return[{name:"anomalies",selector:{boolean:{}}},...Yu(e)?[{type:"grid",name:"",schema:[{name:"anomalies_window",selector:{text:{}}},{name:"anomalies_sigma",selector:{number:{min:.5,max:6,step:.1,mode:"box"}}},{name:"anomalies_color",selector:{text:{}}},{name:"anomalies_band",selector:{boolean:{}}}]}]:[]]}const Xu=["grey","series"],Ku=["1d","7d","28d","1y"],Ju={h:"hour",d:"day",w:"week",mo:"month",y:"year"},Qu=/^(\d+)\s*(h|d|w|mo|y)$/;function eh(e){if("string"!=typeof e)return;const t=e.trim(),o=Qu.exec(t);return!o||Number(o[1])<=0?void 0:{text:t,n:Number(o[1]),unit:Ju[o[2]]}}function th(e){const t=e.compare;return void 0===t?[]:Array.isArray(t)?t:[t]}function oh(e,t,o){return dn(t.unit,e,-t.n,o)}function nh(e,t){const{n:o,unit:n}=e;return"day"===n&&1===o?Ze(t,"period_yesterday"):"day"===n&&7===o||"week"===n&&1===o?Ze(t,"period_last_week"):"month"===n&&1===o?Ze(t,"period_last_month"):"year"===n&&1===o||"month"===n&&12===o?Ze(t,"period_last_year"):Ze(t,`compare_${n}s_earlier`,{n:o})}const rh=new WeakMap;const ah=36e5,ih=864e5;function sh(e,t){if("hour"===e.unit)return t=>t+e.n*ah;let o=1/0,n=-1/0,r=null;return a=>{if(a<o||a>=n){o=cn("day",a,t),n=dn("day",o,1,t);const i=dn(e.unit,o,e.n,t),s=dn("day",i,1,t);r=n-o===ih&&s-i===ih?i-o:null}return null===r?(o=>dn(e.unit,o,e.n,t)+(o%1e3+1e3)%1e3)(a):a+r}}function lh(e,t,o){const n=sh(t,o),r=[];let a=-1/0;for(const i of e){const e=n(i.t);e<=a||(a=e,r.push({...i,t:e,...void 0!==i.end?{end:Math.max(e,n(i.end))}:{}}))}return r}function ch(e,t,o=Date.now()){const n=function(e){const t=new Set;return th(e).map(eh).filter(e=>void 0!==e&&!t.has(`${e.n}${e.unit}`)&&!!t.add(`${e.n}${e.unit}`))}(e.raw);if(0===n.length)return[];const r=e.raw.compare_style??"grey",a=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute,...pt(e.config)})),{group:i,zone:s,source:l}=t,c=[];return n.forEach((n,d)=>{const u=oh(t.range.start,n,s),h=oh(t.range.end,n,s),p=Math.min(h,o);if(u>=o)return;const m=i&&"statistics"===l?tr(i,s,e.hass.config?.time_zone):void 0,f=m?{start:u-Qn[m.period],end:h}:{start:u,end:h},g=function(e,t){let o=rh.get(e.host);o||(o=new Map,rh.set(e.host,o));let n=o.get(t);return n||(n=new nr(e.requestUpdate),o.set(t,n)),n}(e,n.text).get(e.hass,a,f,l,{live:!1,statistics:m});if("ready"!==g.status)return;const y=i?un(i.unit,u,h,s):[];t.series.forEach(o=>{const m=e.items[o.index];let f=Aa(g.data.get(Zn(a[o.index]))??[],m.conversion);f=Ka(m,f,{start:u,end:h},p,s,e.hass).points;const v=f[f.length-1];if(i?f="statistics"===l?Jn(f,y,i.aggregate,p):Kn(f,y,i.aggregate,p):"history"===l&&v&&null!==v.v&&v.t<p&&(f=[...f,{t:p,v:v.v}]),!f.some(e=>null!==e.v))return;const _=nh(n,e.hass);c.push({...o,points:lh(f,n,s),color:"grey"===r?"var(--secondary-text-color)":o.color,entity:{...o.entity,name:t.series.length>1?Ze(e.hass,"compare_series",{name:o.entity.name,offset:_}):_},dash:d>0,ghost:d,offset:n})})}),c}const dh=["","6 4","1.5 3.5","8 3 1.5 3"];function uh(e,t){return 0===e.length?Z:q`<g class="compare-ghosts">${e.map(e=>{const o=Ba(Dl(e.points,500)).map(o=>qa(o.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join("");return q`<path
      class="ghost-line"
      data-series=${e.index}
      data-offset=${e.offset.text}
      d=${o}
      fill="none"
      stroke=${e.color}
      stroke-dasharray=${dh[e.ghost%dh.length]||Z}
    ></path>`})}</g>`}const hh=a`
  .plot .ghost-line {
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.55;
  }
  .compare-key {
    display: flex;
    flex-wrap: wrap;
    gap: 2px 12px;
    padding: 0 0 6px;
    font-size: 0.75em;
    color: var(--secondary-text-color);
  }
  .compare-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
  }
  .compare-item svg {
    width: 18px;
    height: 6px;
    overflow: visible;
  }
  .compare-item line {
    stroke-width: 1.5;
    stroke-linecap: round;
    opacity: 0.8;
  }
`,ph=e=>e&&th(e).length>0?"compare":"";function mh(e,t){const o=t=>nh(eh(t),e);return[{name:"compare",selector:{select:{multiple:!0,custom_value:!0,mode:"dropdown",options:Ku.map(e=>({value:e,label:o(e)}))}}},...ph(t)?[{name:"compare_style",selector:{select:{mode:"dropdown",options:Xu.map(t=>({value:t,label:Ze(e,`editor_compare_style_${t}`)}))}}}]:[]]}const fh=["every_day","same_weekday"],gh="amber",yh=36e5,vh=e=>"number"==typeof e&&Number.isFinite(e)&&e>=0&&e<=100;function _h(e){const t=e;if(!0===t.normal_range)return{weeks:t.normal_range_weeks??4,days:t.normal_range_days??"every_day",low:t.normal_range_low??10,high:t.normal_range_high??90,median:!1!==t.normal_range_median,marks:!1!==t.normal_range_marks,color:t.normal_range_color??gh}}function bh(e,t){if(0===e.length)return NaN;const o=Math.min(100,Math.max(0,t))/100*(e.length-1),n=Math.floor(o),r=Math.ceil(o);return e[n]+(e[r]-e[n])*(o-n)}function xh(e,t){let o=null;for(const n of e)if(null!==n){if(n.t===t)return{lo:n.lo,hi:n.hi};if(n.t>t){if(!o)return t>=n.t-18e5?{lo:n.lo,hi:n.hi}:void 0;const e=(t-o.t)/(n.t-o.t);return{lo:o.lo+(n.lo-o.lo)*e,hi:o.hi+(n.hi-o.hi)*e}}o=n}else o=null;return o&&t<=o.t+18e5?{lo:o.lo,hi:o.hi}:void 0}function wh(e,t){const o=[];let n;const r=()=>{n&&o.push({t:n.t,v:n.v,lo:n.lo,hi:n.hi,side:n.side}),n=void 0};for(const a of e){if(null===a.v||a.carried){null===a.v&&r();continue}const e=xh(t,a.t);if(!e){r();continue}const o=a.v>e.hi?"above":a.v<e.lo?"below":void 0;if(!o){r();continue}n&&n.side!==o&&r();const i="above"===o?a.v-e.hi:e.lo-a.v;(!n||i>n.by)&&(n={t:a.t,v:a.v,lo:e.lo,hi:e.hi,side:o,by:i})}return r(),o}const $h=new WeakMap;const kh={period:"hour",types:["mean","state"],value:"mean"};function Mh(e,t,o=Date.now()){const n=_h(e.raw);if(!n)return[];const{range:r,zone:a}=t;if(r.end-r.start>12096e5)return[];if(t.group&&"hour"!==t.group.unit)return[];const i=t.series.filter(t=>{const o=e.items[t.index];return o&&!o.config.transform});if(0===i.length)return[];const s=function(e,t){const o=[];if("same_weekday"===e)for(let n=1;n<=t;n++)o.push(7*n);else for(let n=1;n<=7*t;n++)o.push(n);return o}(n.days,n.weeks),l=function(e,t,o){const n=Math.max(...t),r=Math.min(...t);return{start:dn("day",e.start,-n,o),end:dn("day",e.end,-r,o)}}(r,s,a),c={start:l.start,end:Math.min(l.end,o)};if(c.end<=c.start)return[];const d=function(e){let t=$h.get(e.host);return t||(t={statistics:new nr(e.requestUpdate),history:new nr(e.requestUpdate),bands:new Map},$h.set(e.host,t)),t}(e),u=i.map(t=>({entity:e.items[t.index].entityId,attribute:e.items[t.index].config.attribute})),h=u.filter(e=>!e.attribute),p=h.length?d.statistics.get(e.hass,h,c,"statistics",{live:!1,statistics:kh}):void 0;if(p&&"loading"===p.status)return[];const m=u.filter(e=>e.attribute||!p?.data.get(Zn(e))?.some(e=>null!==e.v)),f=m.length?d.history.get(e.hass,m,c,"history",{live:!1}):void 0,g=[];return i.forEach((t,o)=>{const i=u[o],l=m.includes(i);if(l&&"ready"!==f?.status)return;const h=(l?f.data:p.data).get(Zn(i))??[];if(0===h.length)return;const y=h[h.length-1],v=[Zn(i),l?"h":"s",h.length,h[0].t,y.t,y.v,Math.floor(r.start/yh),Math.floor(r.end/yh),s.length,n.low,n.high,a.timeZone].join("|");let _=d.bands.get(v);if(!_){const o=Aa(h,e.items[t.index].conversion),i=l?function(e,t){const o=new Map;for(let r=0;r<e.length;r++){const n=e[r];if(null===n.v)continue;const a=Math.min(r+1<e.length?e[r+1].t:t,t);let i=n.t;for(;i<a;){const e=Math.floor(i/yh)*yh,t=Math.min(a,e+yh),r=o.get(e)??{sum:0,ms:0};r.sum+=n.v*(t-i),r.ms+=t-i,o.set(e,r),i=t}}const n=new Map;for(const[r,{sum:a,ms:i}]of o)i>0&&n.set(r,a/i);return n}(o,c.end):function(e){const t=new Map;for(const o of e)null!==o.v&&Number.isFinite(o.v)&&t.set(Math.floor(o.t/yh)*yh,o.v);return t}(o);_=function(e,t,o,n,r,a){const i=un("hour",e.start,e.end,n,360).slice(0,-1),s=Math.min(3,o.length),l=new Map;return i.map(e=>{const i=cn("day",e,n);let c=l.get(i);c||(c=o.map(e=>dn("day",i,-e,n)),l.set(i,c));const d=[];for(const o of c){const n=t.get(Math.floor((o+(e-i))/yh)*yh);void 0!==n&&d.push(n)}return d.length<s||0===d.length?null:(d.sort((e,t)=>e-t),{t:e+18e5,lo:bh(d,r),mid:bh(d,50),hi:bh(d,a)})})}(r,i,s,a,n.low,n.high),d.bands.size>16&&d.bands.clear(),d.bands.set(v,_)}_.some(e=>null!==e)&&g.push({s:t,slots:_})}),g}const zh=e=>Math.round(1e4*e)/100+"%";function Eh(e,t){const o=[],n=e.findIndex(e=>null!==e);return e.forEach((r,a)=>{if(!r)return void o.push(null);const i=e=>({t:e,v:r.mid,mid:(r.lo+r.hi)/2,sd:(r.hi-r.lo)/2,z:0});a===n&&r.t>t.start&&o.push(i(Math.max(t.start,r.t-18e5))),o.push(i(r.t)),a===e.length-1&&r.t<t.end&&o.push(i(Math.min(t.end,r.t+18e5)))}),o}function Sh(e,t){const o=_h(e.raw);if(!o||0===t.length)return Z;const n=function(e,t){const o="same_weekday"===e.days?Ze(t,"normal_range_weekdays",{n:e.weeks}):Ze(t,"normal_range_days",{n:7*e.weeks});return`${Ze(t,"normal_range_percentiles",{low:e.low,high:e.high})} · ${o}`}(o,e.hass),r=1===t.length?t[0].s.color:"var(--secondary-text-color)";return R`<div class="normal-range-key" title=${n}>
    <span class="normal-range-swatch" style="--cd-normal:${r}"></span>
    <span>${Ze(e.hass,"normal_range_key")}</span>
    <span class="normal-range-detail">${n}</span>
  </div>`}const Ah=a`
  .plot .normal-band {
    opacity: 0.14;
    stroke: none;
  }
  .plot .normal-median {
    stroke-width: 1;
    stroke-dasharray: 2 3;
    opacity: 0.55;
  }
  .normal-range-key {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2px 6px;
    padding: 0 0 6px;
    font-size: 0.75em;
    color: var(--secondary-text-color);
  }
  .normal-range-swatch {
    width: 14px;
    height: 8px;
    border-radius: 2px;
    background: color-mix(in srgb, var(--cd-normal) 30%, transparent);
    border-top: 1px dashed var(--cd-normal);
  }
  .normal-range-detail {
    opacity: 0.8;
  }
  .normal-range-dot {
    width: 8px;
    height: 8px;
  }
`,jh=[{name:"normal_range",path:["normal_range"],default:!1},{name:"normal_range_days",path:["normal_range_days"],default:"every_day"},{name:"normal_range_weeks",path:["normal_range_weeks"],default:4},{name:"normal_range_low",path:["normal_range_low"],default:10},{name:"normal_range_high",path:["normal_range_high"],default:90},{name:"normal_range_median",path:["normal_range_median"],default:!0},{name:"normal_range_marks",path:["normal_range_marks"],default:!0},{name:"normal_range_color",path:["normal_range_color"],default:gh}],Ch=e=>!0===e?.normal_range?"normal":"";function Nh(e,t){const o={number:{min:0,max:100,step:1,mode:"box"}};return[{name:"normal_range",selector:{boolean:{}}},...Ch(t)?[{type:"grid",name:"",schema:[{name:"normal_range_days",selector:{select:{mode:"dropdown",options:fh.map(t=>({value:t,label:Ze(e,`editor_normal_range_days_${t}`)}))}}},{name:"normal_range_weeks",selector:{number:{min:1,max:12,step:1,mode:"box"}}},{name:"normal_range_low",selector:o},{name:"normal_range_high",selector:o},{name:"normal_range_median",selector:{boolean:{}}},{name:"normal_range_marks",selector:{boolean:{}}},{name:"normal_range_color",selector:{text:{}}}]}]:[]]}const Lh=["auto","shared","independent"];function Fh(e,t,o,n,r){const a=Math.max(0,Gl(e)-32),i=function(e,t,o){const n=e=>Math.max(1,Math.floor((t+12)/(e+12))),r=void 0===o?n(150):Math.min(o,n(110));return Math.max(1,Math.min(e,r))}(t.series.length,a,o.columns),s=function(e,t){return Math.max(0,(e-12*(t-1))/t)}(a,i),l=new Set(t.series.map(e=>e.entity.unit).filter(e=>""!==e)),c="shared"===o.scale||"auto"===o.scale&&l.size<=1,d=e=>e.hidden?[e.points,e.hidden]:[e.points],u=c?ws(t.series.flatMap(d)):void 0,{show:h}=e.config;return R`<div class="multiples" style=${`grid-template-columns:repeat(${i}, minmax(0, 1fr))`}>
    ${t.series.map(o=>{const a=Jl(e,t.range,u??ws(d(o)),s,2),i=h.name||h.value?R`<div class="entity panel-title" data-index=${o.index} tabindex="0" aria-label=${o.entity.label}>
              <span class="swatch" style="background:${o.color}"></span>
              ${h.name?R`<span class="series-name">${o.entity.name}</span>`:Z}
              ${h.value?R`<span class="series-value">${function(e,t,o){if(void 0===t)return e.entity.display;const n=Dc(e.points,t),r=n<0?void 0:e.points[n];return r&&null!==r.v?Bt(Wt(r.v,e.entity.decimals,o.hass),e.entity.unit):"—"}(o,n,e)}</span>`:Z}
            </div>`:Z,l=o.points.some(e=>null!==e.v)?r(o,a,s):R`<div class="chart-message">${Ze(e.hass,"chart_no_data")}</div>`;return R`<div class="panel">${i}${l}</div>`})}
  </div>`}const Th=a`
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
`,Oh=864e5,Ph=/^(\d{4})-(\d{2})-(\d{2})$/;function Dh(e,t){const o="string"==typeof e?e:e?.dateTime??e?.date;if("string"!=typeof o)return;const n=Ph.exec(o.trim());if(n)return{t:sn(t.timeZone,+n[1],+n[2],+n[3]),allDay:!0};const r=Date.parse(o);return Number.isFinite(r)?{t:r,allDay:!1}:void 0}function Uh(e){return e.allDay||e.end-e.start>=Oh}const Ih=new WeakMap;function Hh(e,t,o,n,r,a=Date.now()){if(0===t.length)return new Map;const i=[...new Set(t)].sort().join(",");let s=Ih.get(e.host);if((!s||s.shape!==i||o.start<s.from||o.end>s.to||n&&"loading"!==s.status&&a-s.loaded>6e5)&&e.hass.callApi){const t=(s?.generation??0)+1,l=s&&s.shape===i?s.data:new Map,c={shape:i,from:o.start,to:n?o.end+36e5:o.end,loaded:a,status:"loading",data:l,generation:t};s=c,Ih.set(e.host,c);const d=e.hass,u=i.split(",");Promise.all(u.map(e=>d.callApi("GET",function(e,t,o){const n=e=>encodeURIComponent(new Date(e).toISOString());return`calendars/${e}?start=${n(t)}&end=${n(o)}`}(e,c.from,c.to)).then(e=>function(e,t){if(!Array.isArray(e))return[];const o=[];for(const n of e){if("object"!=typeof n||null===n)continue;const e=Dh(n.start,t);if(!e)continue;const r=Dh(n.end,t);o.push({start:e.t,end:r&&r.t>=e.t?r.t:e.t,summary:"string"==typeof n.summary?n.summary.trim():"",allDay:e.allDay,..."string"==typeof n.location&&n.location.trim()?{location:n.location.trim()}:{}})}return o.sort((e,t)=>e.start-t.start).slice(0,500)}(e,r),()=>{}))).then(o=>{if(Ih.get(e.host)!==c||c.generation!==t)return;const n=new Map;u.forEach((e,t)=>{const r=o[t];n.set(e,r??l.get(e)??[])}),c.data=n,c.status=o.every(e=>void 0===e)?"error":"ready",e.requestUpdate()})}return s?.data??new Map}function Wh(e,t){if(0===t.length)return Z;const o=t.slice(0,3),n=t.length-o.length;return R`<div class="tooltip-events">
    ${o.map(({event:t,color:o})=>R`<div class="tooltip-row tooltip-event">
          <span class="swatch event-swatch" style="background:${o}"></span>
          <span class="tooltip-name">${t.summary||Ze(e,"chart_calendar_event")}</span>
          <span class="tooltip-value">${function(e,t){return e.allDay&&e.end-e.start<=9e7?Ze(t,"chart_calendar_all_day"):e.end<=e.start?Qs(e.start,t):Uh(e)?`${el(e.start,t)} – ${el(e.end,t)}`:`${Qs(e.start,t)} – ${Qs(e.end,t)}`}(t,e)}</span>
        </div>`)}
    ${n>0?R`<div class="tooltip-row tooltip-event-more">
            ${Ze(e,"chart_calendar_more",{count:String(n)})}
          </div>`:Z}
  </div>`}function Rh(e,t,o){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t?0:Math.min(1,Math.max(0,(e-t)/(o-t)))}function qh(e,t,o){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t)return[0,0];const n=Rh(e,t,o);if(t<0&&o>0){const e=Rh(0,t,o);return n<e?[n,e]:[e,n]}return[0,n]}const Bh=new Set;function Zh(e){return(e.available?e.band.icon:void 0)??e.config.icon??(e.stateObj||ho(e)?void 0:"mdi:help-circle-outline")}function Vh(e){return null==e||""===e}function Yh(e){if(void 0===e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function Gh(e,t,o="limit",n){if(Vh(e))return null;if("number"==typeof e)return Number.isFinite(e)?e:null;const r=String(e),a=Yh(t.states[r]?.state),i=t.states[r]?.attributes?.unit_of_measurement,s=null===a?void 0:Sa("string"==typeof i?i:void 0,n),l=s&&null!==a?s.apply(a):a;if(null===l&&!Bh.has(r)){Bh.add(r);const e="limit"===o?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${o} entity "${r}" is missing or not numeric; ${e}.`)}return l}function Xh(e,t,o){if(e.every(e=>"number"==typeof e.from))return e;const n=[];for(const r of e){const e=t?Gh(r.from,t,"band start",o):null;null!==e&&n.push({...r,from:e})}return n.length?n.sort((e,t)=>e.from-t.from):Ct}function Kh(e,t){const o=ut(e);return o.length>0&&o.every(e=>["total_increasing","total"].includes(String(t.states[e]?.attributes?.state_class)))?"meter":"measurement"}function Jh(e,t){const o=e.entity,n=t.states[o],r=e.name??n?.attributes?.friendly_name??o,a=dt(e);let i=e.attribute?"":String(n?.attributes?.unit_of_measurement??"");a&&(i=function(e,t){const o=new Set(ut(e).map(e=>{const o=t.states[e]?.attributes?.unit_of_measurement;return"string"==typeof o?o:""}));return 1===o.size?[...o][0]:""}(a,t));const s=e.unit??i,l=void 0===e.unit?void 0:Sa(i||void 0,e.unit),c=a?void 0:function(e,t){if(t)return e.attribute?t.attributes?.[e.attribute]:t.state}(e,n),d=a?Rn(a,t):function(e){return"number"==typeof e?Number.isFinite(e)?e:null:"string"==typeof e?Yh(e):null}(c),u=l&&null!==d?l.apply(d):d,h=null!==u;let p;p=Vh(e.decimals)?a&&!i?2:e.attribute&&!a?h?function(e){const t=String(e),o=t.indexOf(".");return-1===o||/e/i.test(t)?0:Math.min(2,t.length-o-1)}(c):0:l&&"number"==typeof t.entities?.[o]?.display_precision?function(e,t){return Math.min(6,Math.max(0,e+Math.round(-Math.log10(t))))}(t.entities[o].display_precision,l.slope):function(e,t,o){const n=e?.entities?.[t]?.display_precision;return"number"==typeof n?n:"%"===o?0:1}(t,o,s):e.decimals;const m=Gh(e.min,t,"limit",s)??0,f=Gh(e.max,t,"limit",s)??100,g=Gh(e.target,t,"limit",s),y=Xh(e.severity,t,s);let v,_="";return h?(_=Wt(u,p,t),v=Bt(_,s)):v=a&&n?Ze(t,"unavailable"):n?function(e,t,o,n){const r=e.attribute;return r&&"string"==typeof o&&""!==o.trim()?n.formatEntityAttributeValue?.(t,r)??o:n.formatEntityState?.(t)??Ze(n,"unavailable")}(e,n,c,t):ho({config:e})?"":Ze(t,"entity_not_found"),{entityId:o,config:e,stateObj:n,available:h,value:u,min:m,max:f,target:g,name:r,unit:s,...l?{conversion:l}:{},decimals:p,position:h?Rh(u,m,f):0,span:h?qh(u,m,f):[0,0],targetPosition:null===g?null:Rh(g,m,f),band:Fe(h?u:-1/0,y),bands:y,valueText:_,display:v,label:v?`${r}, ${v}`:r,...a?{formula:Kh(a,t)}:{}}}function Qh(e,t){if(!e.include)return[];const o=new Set(e.entities.map(e=>e.entity));return function(e,t,o){const n=et.get(e);if(n&&n.exclude===t&&n.states===o.states&&n.entities===o.entities&&n.devices===o.devices&&n.areas===o.areas)return n.ids;const r=[];for(const i of Object.values(o.states)){if(!Ge(i)||o.entities?.[i.entity_id]?.hidden)continue;const n=Xe(i,o);if(!Je(e,n)||Qe(t,n))continue;const a=i.attributes?.friendly_name;r.push({id:i.entity_id,name:"string"==typeof a&&a?a:i.entity_id})}r.sort((e,t)=>e.name.localeCompare(t.name)||(e.id<t.id?-1:1));const a=r.map(e=>e.id);return et.set(e,{exclude:t,states:o.states,entities:o.entities,devices:o.devices,areas:o.areas,ids:a}),a}(e.include,e.exclude,t).filter(e=>!o.has(e))}function ep(e,t){const o=Qh(e,t).map((t,o)=>Ut(t,e.cardOptions,o)),n=[...e.entities,...o].map(e=>Jh(e,t));return e.hideUnavailable?n.filter(e=>e.available||ho(e)):n}function tp(e){const t=new Set;for(const o of e.entities){t.add(o.entity);const e=dt(o);if(e)for(const o of ut(e))t.add(o);for(const n of[o.min,o.max,o.target,...o.severity.map(e=>e.from)])"string"==typeof n&&""!==n&&t.add(n)}for(const o of e.legendBands)"string"==typeof o.from&&t.add(o.from);for(const o of function(e,t){const o=new Set;for(const r of e){const e="object"==typeof r&&null!==r?fa(r):void 0;e&&o.add(e.entity)}const n=ma(t?.when);return n&&o.add(n.entity),[...o]}(e.entities,e.cardOptions))t.add(o);return t}const op=["above","below"],np=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim());function rp(e,t,o){if(!Array.isArray(e.severity)||0===e.severity.length)return;const n=e.severity.map(e=>({...e,from:"string"==typeof e.from&&Number.isFinite(Number(e.from))?Number(e.from):e.from})),r=Xh(n,t,o).filter(e=>Number.isFinite(e.from));return r.length?[...r].sort((e,t)=>e.from-t.from):void 0}function ap(e){return"line"===e.type&&!0===e.history&&np(e.value)?e.value.trim():void 0}const ip=new WeakMap;function sp(e,t,o=Date.now()){const n=function(e){const t=Array.isArray(e.annotations)?e.annotations:[];return[...new Set(t.map(ap).filter(e=>void 0!==e))]}(e.raw),r=new Map;if(0===n.length)return r;const a=function(e){let t=ip.get(e.host);return t||(t={statistics:new nr(e.requestUpdate),history:new nr(e.requestUpdate)},ip.set(e.host,t)),t}(e),i=Math.min(t.range.end,o),s=t.series[0]?.entity.unit||void 0,l=(t,o)=>{const n=e.hass.states[t]?.attributes?.unit_of_measurement,a=Aa(o,Sa("string"==typeof n?n:void 0,s));a.some(e=>null!==e.v)&&r.set(t,function(e,t){const o=e[e.length-1];return o&&null!==o.v&&o.t<t?[...e,{t:t,v:o.v}]:e}(a,i))};let c=n;const d=function(e,t){const{range:o,group:n,source:r,zone:a}=e;if("statistics"!==r&&o.end-o.start<=6048e5)return;return{period:n&&"statistics"===r?tr(n,a,t).period:Un(o),types:["mean","state"],value:"mean"}}(t,e.hass.config?.time_zone);if(d){const o={start:t.range.start-Qn[d.period],end:t.range.end},i=a.statistics.get(e.hass,n.map(e=>({entity:e})),o,"statistics",{live:t.live,statistics:d});if("loading"===i.status)return r;if("ready"===i.status){for(const e of n)l(e,ar(i.data.get(e)??[],t.range));c=n.filter(e=>!r.has(e))}}if(0===c.length)return r;const u=a.history.get(e.hass,c.map(e=>({entity:e})),t.range,"history",{live:t.live});if("ready"===u.status)for(const h of c)l(h,u.data.get(h)??[]);return r}function lp(e,t){const o=[];for(const n of e.values())for(const e of n)null!==e.v&&e.t>=t.start&&e.t<=t.end&&o.push(e.v);return o}function cp(e,t,o,n,r,a){const i=function(e){const t=[];let o=[];for(const n of e)if(null===n.v){const e=o[o.length-1];e&&n.t>e.t&&o.push({t:n.t,v:e.v}),o.length&&t.push(o),o=[]}else o.push(n);return o.length&&t.push(o),t}(e);if(0===i.length)return;const s=i.map(e=>qa(e.map(e=>[t.x(e.t),t.y(e.v)]),"step")).join(""),l=q`<path
    class="threshold stepped ${n?"dashed":""}"
    d=${s}
    fill="none"
    stroke=${o}
  ></path>`,c="above"===r?0:Va,d=a?e=>je(Fe(e,a).color):()=>o,u=r?i.flatMap(e=>function(e,t,o,n){const r=e=>Math.round(100*e)/100,a=[];for(let i=0;i+1<e.length;i++){const s=e[i].v,l=r(t.x(e[i].t)),c=r(t.x(e[i+1].t));if(!(c>l))continue;const d=r(t.y(s)),u=n(s),h=`M${l},${d}H${c}V${o}H${l}Z`,p=a[a.length-1];p&&p.color===u?p.d+=h:a.push({color:u,d:h})}return a}(e,t,c,d)):[],h=new Map;for(const g of u)h.set(g.color,(h.get(g.color)??"")+g.d);const p=r?q`<g class="threshold-zone ${r} ${a?"banded":""}">${[...h].map(([e,t])=>q`<path d=${t} fill=${e}></path>`)}</g>`:void 0,m=i[i.length-1],f=m[m.length-1];return{line:l,zone:p,top:t.y(f.v)/Va}}const dp=["line","band","time","state","point","calendar"],up=["max","min","last","first"],hp={line:"red",band:"green",time:"grey",state:"amber",point:"primary",calendar:"purple"},pp=e=>"number"==typeof e&&Number.isFinite(e),mp=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim());function fp(e,t){if(!(void 0===e||pp(e)||mp(e)||"string"==typeof e&&""!==e.trim()&&Number.isFinite(Number(e))))throw new Error(`"${t}" must be a number or an entity id`)}const gp=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/,yp=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{1,2}):(\d{2})(?::(\d{2}))?$/;function vp(e){return(Array.isArray(e)?e:"string"==typeof e?e.split(","):[]).map(e=>String(e).trim()).filter(e=>""!==e)}function _p(e){const t=e.annotations;if(void 0!==e.zones&&"boolean"!=typeof e.zones)throw new Error('"zones" must be true or false');if(void 0!==t){if(!Array.isArray(t))throw new Error('"annotations" must be a list');t.forEach((e,t)=>{const o=e=>`annotations[${t}].${e}`;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`"annotations[${t}]" must have a "type"`);const n=e;if(!dp.includes(n.type))throw new Error(`"${o("type")}" must be one of: ${dp.join(", ")}`);for(const r of["label","color","state","match"])if(void 0!==n[r]&&"string"!=typeof n[r])throw new Error(`"${o(r)}" must be text`);for(const r of["dash","shade"])if(void 0!==n[r]&&"boolean"!=typeof n[r])throw new Error(`"${o(r)}" must be true or false`);if(fp(n.value,o("value")),fp(n.from,o("from")),fp(n.to,o("to")),void 0!==n.entity&&!mp(n.entity))throw new Error(`"${o("entity")}" must be an entity id`);if("line"===n.type&&void 0===n.value)throw new Error(`"${o("value")}" is needed for a line`);if("band"===n.type&&void 0===n.from&&void 0===n.to)throw new Error(`"${o("from")}" or "${o("to")}" is needed for a band`);if("time"===n.type){if(void 0!==n.times&&"string"!=typeof n.times&&!Array.isArray(n.times))throw new Error(`"${o("times")}" must be a time or a list of times`);const e=vp(n.times).find(e=>!function(e){const t=e.trim(),o=gp.exec(t);return o?Number(o[1])<24&&Number(o[2])<60:yp.test(t)||/\d{4}-\d{2}-\d{2}T.+(Z|[+-]\d{2}:?\d{2})$/.test(t)&&Number.isFinite(Date.parse(t))}(e));if(void 0!==e)throw new Error(`"${o("times")}" has "${e}": use 07:00 or 2026-10-28 07:00`)}if("state"===n.type&&void 0===n.entity)throw new Error(`"${o("entity")}" is needed for a state mark`);if("calendar"===n.type&&("string"!=typeof n.entity||!n.entity.trim().startsWith("calendar.")))throw new Error(`"${o("entity")}" must be a calendar entity (calendar.…)`);if(function(e,t){if(void 0!==e.history&&"boolean"!=typeof e.history)throw new Error(`"${t("history")}" must be true or false`);if(void 0!==e.zone&&!op.includes(e.zone))throw new Error(`"${t("zone")}" must be one of: ${op.join(", ")}`);if((!0===e.history||void 0!==e.zone)&&"line"!==e.type)throw new Error(`"${t("history")}" and "${t("zone")}" are for a line`);if(void 0!==e.severity){if("line"!==e.type)throw new Error(`"${t("severity")}" is for a line`);if(!Array.isArray(e.severity))throw new Error(`"${t("severity")}" must be a list of bands`);e.severity.forEach((e,o)=>{const n=e,r=n?.from;if(!("number"==typeof r&&Number.isFinite(r)||"string"==typeof r&&(Number.isFinite(Number(r))||np(r)))||""===r)throw new Error(`"${t(`severity[${o}].from`)}" must be a number or an entity id`);if("string"!=typeof n?.color||""===n.color)throw new Error(`"${t(`severity[${o}].color`)}" is required`)})}}(n,o),void 0!==n.at&&!up.includes(n.at))throw new Error(`"${o("at")}" must be one of: ${up.join(", ")}`)})}}function bp(e){return Array.isArray(e.annotations)?e.annotations:[]}function xp(e){const t=new Set;for(const o of bp(e))for(const e of[o.value,o.from,o.to,"state"===o.type||"calendar"===o.type?o.entity:void 0])mp(e)&&t.add(e.trim());return[...t]}function wp(e,t,o){if(void 0===e)return;if(pp(e))return e;const n=Nn(e);if(null!==n)return n;const r=t.states[e.trim()],a=Nn(r?.state);if(null===a)return;const i=r?.attributes?.unit_of_measurement,s=Sa("string"==typeof i?i:void 0,o);return s?s.apply(a):a}function $p(e){return e.series[0]?.entity.unit||void 0}function kp(e,t,o){const n=[],r=un("day",t.start,t.end,o,800);for(const a of e){const e=gp.exec(a);if(e){for(const t of r){const r=rn(t,o.timeZone);n.push(sn(o.timeZone,r.year,r.month,r.day,+e[1],+e[2],+(e[3]??0)))}continue}const t=yp.exec(a),i=t?sn(o.timeZone,+t[1],+t[2],+t[3],+t[4],+t[5],+(t[6]??0)):Date.parse(a);Number.isFinite(i)&&n.push(i)}return[...new Set(n.filter(e=>e>=t.start&&e<=t.end))].sort((e,t)=>e-t)}function Mp(e,t,o,n){const r=[],a=t?.trim().toLowerCase();for(let i=0;i<e.length;i++){const t=e[i];if(i>0&&e[i-1].s===t.s)continue;if(void 0!==a&&t.s.toLowerCase()!==a)continue;let s=i+1;for(;s<e.length&&e[s].s===t.s;)s++;const l=s<e.length?e[s].t:n,c=Math.max(t.t,o.start);l<=o.start||c>o.end||r.push({start:c,end:Math.min(l,o.end),s:t.s})}return r}function zp(e){return Math.ceil(5.8*e.length)+10}const Ep=new WeakMap;function Sp(e){const t=Ep.get(e);t&&t.generation++,Ep.delete(e),function(e){const t=ip.get(e);t?.statistics.pause(),t?.history.pause()}(e),function(e){const t=Ih.get(e);t&&t.generation++,Ih.delete(e)}(e)}function Ap(e,t){const o=bp(e.raw).filter(e=>"calendar"===e.type&&e.entity).map(e=>e.entity.trim());if(0===o.length)return[];const n=Hh(e,o,t.range,t.live,t.zone);return bp(e.raw).filter(e=>"calendar"===e.type&&e.entity).map(e=>{return{a:e,events:(o=n.get(e.entity.trim())??[],r=t.range,a=e.match,o.filter(e=>Math.max(e.end,e.start)>=r.start&&e.start<=r.end&&function(e,t){const o=(t??"").split(",").map(e=>e.trim().toLowerCase()).filter(e=>""!==e);if(0===o.length)return!0;const n=e.toLowerCase();return o.some(e=>n.includes(e))}(e.summary,a)))};var o,r,a})}function jp(e,t,o){if(void 0===o)return Z;const n=(t.range.end-t.range.start)/100,r=Ap(e,t).flatMap(({a:e,events:t})=>function(e,t,o){return e.filter(e=>e.end>e.start?t>=e.start&&t<e.end:Math.abs(t-e.start)<=o)}(t,o,n).map(t=>({event:t,color:je(e.color??hp.calendar)})));return Wh(e.hass,r)}const Cp=e=>Math.round(1e4*e)/100+"%";function Np(e,t){return e.entity&&t.find(t=>t.entity.entityId===e.entity.trim())||t[0]}function Lp(e,t,o,n){const r=e.points.filter(e=>null!==e.v&&(n||!e.carried&&(e.t!==o.end||"last"===t)));if(0!==r.length)return"first"===t?r[0]:"last"===t?r[r.length-1]:r.reduce((e,o)=>("max"===t?o.v>e.v:o.v<e.v)?o:e)}function Fp(e,t,o,n){const r=bp(e.raw),a=!0===e.raw.zones&&t.series[0]?function(e,t){const[o,n]=t.domain;return e.map((r,a)=>{const i=Math.max(o,Number.isFinite(r.from)?r.from:o),s=Math.min(n,a+1<e.length?e[a+1].from:n);if(!(s>i))return q``;const l=t.y(s),c=t.y(i);return q`<rect class="zone" x="0" width=${Za} y=${l} height=${c-l} fill=${je(r.color)}></rect>`})}(t.series[0].entity.bands,o):[];if(0===r.length&&0===a.length)return{behind:Z,front:Z,overlay:Z};const i=[...a],s=[],l=[],{range:c}=t,d=e=>o.x(e),[u,h]=o.domain,p=function(e,t,o){const n=[...new Set(bp(e.raw).filter(e=>"state"===e.type&&e.entity).map(e=>e.entity.trim()))];if(0===n.length)return new Map;const r=n.join(",");let a=Ep.get(e.host);if(!a||a.shape!==r||t.start<a.from||!o&&t.end>a.to+6e4||o&&a.to!==1/0){const i=(a?.generation??0)+1,s={shape:r,from:t.start,to:o?1/0:t.end,status:"loading",data:new Map,generation:i};a=s,Ep.set(e.host,s);const l=e.hass.callWS?.({type:"history/history_during_period",start_time:new Date(t.start).toISOString(),end_time:new Date(t.end).toISOString(),entity_ids:n,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});l&&l.then(t=>{if(Ep.get(e.host)===s&&s.generation===i){for(const e of n){const o=(t?.[e]??[]).map(e=>({t:Math.round(1e3*(e.lu??e.lc??0)),s:String(e.s??"")})).filter(e=>e.t>0);s.data.set(e,o.slice(-2e3))}s.status="ready",e.requestUpdate()}},()=>{Ep.get(e.host)===s&&(s.status="error")})}const i=a;if("ready"===i.status&&o)for(const s of n){const t=e.hass.states[s];if(!t)continue;const o=Date.parse(t.last_changed??t.last_updated??""),n=i.data.get(s)??[],r=n[n.length-1];Number.isFinite(o)&&(!r||o>r.t&&r.s!==t.state)&&(n.push({t:o,s:t.state}),i.data.set(s,n))}return i.data}(e,c,t.live),m=new Map(Ap(e,t).map(({a:e,events:t})=>[e,t])),f=sp(e,t),g=Math.min(c.end,Date.now()),y=$p(t),v=[],_=(e,t,o,n)=>{const r=o.slice(0,2e3);if(s.push(q`${r.map(e=>q`<line class="mark-line ${n}" x1=${d(e)} x2=${d(e)} y1="0" y2=${Va} stroke=${t}></line>`)}`),e.label&&r.length<=60)for(const a of r)v.push({t:a,label:e.label,color:t})};for(const x of r){const n=je(x.color??hp[x.type]),r="line"===x.type?f.get(ap(x)??""):void 0,a=r&&cp(r,o,n,!1!==x.dash,x.zone,rp(x,e.hass,y));if(a)a.zone&&i.push(a.zone),s.push(a.line),x.label&&l.push(R`<span
            class="annotation-label threshold ${a.top<.12?"below":""}"
            style="top:${Cp(a.top)};--cd-annotation:${n}"
            >${x.label}</span
          >`);else if("line"===x.type){const t=wp(x.value,e.hass,y);if(void 0===t||t<u||t>h)continue;const r=o.y(t);if(s.push(q`<line class="threshold ${!1===x.dash?"":"dashed"}" x1="0" x2=${Za} y1=${r} y2=${r} stroke=${n}></line>`),x.label){const e=r/Va;l.push(R`<span
            class="annotation-label threshold ${e<.12?"below":""}"
            style="top:${Cp(e)};--cd-annotation:${n}"
            >${x.label}</span
          >`)}}else if("band"===x.type){const t=void 0===x.from?u:wp(x.from,e.hass,y),r=void 0===x.to?h:wp(x.to,e.hass,y);if(void 0===t||void 0===r)continue;const a=Math.max(u,Math.min(t,r)),s=Math.min(h,Math.max(t,r));if(!(s>a))continue;const c=o.y(s);i.push(q`<rect class="band" x="0" width=${Za} y=${c} height=${o.y(a)-c} fill=${n}></rect>`),x.label&&l.push(R`<span class="annotation-label band" style="top:${Cp(c/Va)};--cd-annotation:${n}"
            >${x.label}</span
          >`)}else if("time"===x.type)_(x,n,kp(vp(x.times),c,t.zone),"time");else if("state"===x.type){const e=Mp(p.get(x.entity.trim())??[],x.state,c,g);x.shade&&i.push(q`${e.map(e=>q`<rect class="state-shade" x=${d(e.start)} width=${Math.max(0,d(e.end)-d(e.start))} y="0" height=${Va} fill=${n}></rect>`)}`),_(x,n,e.map(e=>e.start).filter(e=>e>c.start),"state")}else if("calendar"===x.type){const e=m.get(x)??[],t=e.filter(e=>Uh(e)||x.shade&&e.end>e.start);i.push(q`${t.map(e=>{const t=d(Math.max(e.start,c.start)),o=d(Math.min(e.end,c.end));return q`<rect class="calendar-shade" x=${t} width=${Math.max(0,o-t)} y="0" height=${Va} fill=${n}></rect>`})}`);const o=e.filter(e=>!Uh(e)&&e.start>=c.start);if(s.push(q`${o.map(e=>q`<line class="mark-line calendar" x1=${d(e.start)} x2=${d(e.start)} y1="0" y2=${Va} stroke=${n}></line>`)}`),e.length<=60)for(const r of e){const e=x.label||r.summary;e&&v.push({t:Math.max(r.start,c.start),label:e,color:n})}}else if("point"===x.type){const r=Np(x,t.series),a=r&&Lp(r,x.at??"max",c,void 0!==t.group);if(!r||!a)continue;const i=d(a.t)/Za,s=o.y(a.v)/Va;if(!(i>=0&&i<=1&&s>=0&&s<=1))continue;const u=Bt(Wt(a.v,r.entity.decimals,e.hass),r.entity.unit),h=i<.1?"start":i>.9?"end":"";l.push(R`<span class="annotation-dot" style="left:${Cp(i)};top:${Cp(s)};background:${n}"></span>
          <span
            class="annotation-label point ${h} ${s<.2?"below":""}"
            style="left:${Cp(i)};top:${Cp(s)};--cd-annotation:${n}"
            >${x.label?R`<span class="point-name">${x.label}</span> `:Z}${u}</span
          >`)}}const b=function(e,t,o=2){const n=e.map((e,t)=>t).sort((t,o)=>e[t].x-e[o].x),r=Array.from({length:o},()=>-1/0),a=e.map(()=>{});for(const i of n){const{x:o,width:n}=e[i],s=o+2+n>t?o-2-n:o+2,l=r.findIndex(e=>s>=e+4);l<0||(r[l]=s+n,a[i]=l)}return a}(v.map(e=>({x:d(e.t)/Za*n,width:zp(e.label)})),n);return v.forEach((t,o)=>{const r=b[o];if(void 0===r)return;const a=d(t.t)/Za,i=a*n+2+zp(t.label)>n;l.push(R`<span
        class="annotation-label mark ${i?"end":""}"
        style="left:${Cp(a)};top:${15*r}px;--cd-annotation:${t.color}"
        title=${Ze(e.hass,"annotation_at",{label:t.label,time:el(t.t,e.hass)})}
        >${t.label}</span
      >`)}),{behind:i.length?q`<g class="annotations-behind">${i}</g>`:Z,front:s.length?q`<g class="annotations-front">${s}</g>`:Z,overlay:l.length?R`<div class="annotation-labels">${l}</div>`:Z}}const Tp=a`
  .plot .zone {
    opacity: 0.1;
  }
  .plot .band {
    opacity: 0.14;
  }
  .plot .state-shade {
    opacity: 0.12;
  }
  .plot .calendar-shade {
    opacity: 0.1;
  }
  .plot .threshold {
    stroke-width: 1.5;
  }
  .plot .threshold.dashed {
    stroke-dasharray: 6 4;
  }
  .plot .threshold.stepped {
    stroke-linejoin: round;
  }
  .plot .threshold-zone {
    opacity: 0.1;
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
  .tooltip-events {
    margin-top: 2px;
    padding-top: 2px;
    border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
  }
  .tooltip-event .event-swatch {
    border-radius: 2px;
  }
  .tooltip-event-more {
    color: var(--secondary-text-color);
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
`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Op="important",Pp=" !"+Op,Dp=me(class extends fe{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const n=e[o];return null==n?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)null==t[n]&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in t){const e=t[n];if(null!=e){this.ft.add(n);const t="string"==typeof e&&e.endsWith(Pp);n.includes("-")||t?o.setProperty(n,t?e.slice(0,-11):e,t?Op:""):o[n]=e}}return B}});class Up{constructor(e){this.host=e,e.addController(this)}hostConnected(){var e;this.stop=(e=()=>this.host.requestUpdate(),"undefined"==typeof window?()=>{}:(window.addEventListener(We,e),()=>window.removeEventListener(We,e)))}hostDisconnected(){this.stop?.(),this.stop=void 0}}const Ip=Object.keys(Oe),Hp=Object.keys(Ae),Wp="custom",Rp={text:{}},qp={entity:{domain:["sensor","input_number","number"]}};function Bp(e){return"string"==typeof e&&""!==e.trim()&&!Number.isFinite(Number(e))}const Zp={icon:{}};function Vp(e){return void 0===e?"none":Ip.find(t=>Oe[t]&&rs(Oe[t],e))??"custom"}function Yp(e){return Hp.includes(e)}class Gp extends le{constructor(){super(),this.languageController=new Up(this),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(e){e.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(e){const t=this.hass?.states[e]?.state,o=void 0===t||""===t.trim()?NaN:Number(t);return Number.isFinite(o)?o:void 0}_t(e){return Ze(this.hass,e)}_getSelectors(){const e=`${Be(this.hass)}|${this.unit??""}`;if(this._selectors?.key===e)return this._selectors;const t=Ip.map(e=>({value:e,label:this._t(`editor_preset_${e}`)})),o=e=>({select:{mode:"dropdown",options:e}});return this._selectors={key:e,preset:o(t),presetCustom:o([...t,{value:Wp,label:this._t("editor_preset_custom")}]),color:o([...Hp,Wp].map(e=>({value:e,label:this._t(`editor_color_${e}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e&&e.length?e:void 0}}))}_presetChanged(e){e.stopPropagation();const t=e.detail?.value;if(!t||t===Wp||!Ip.includes(t))return;if(t===Vp(this.bands))return;const o=Oe[t];this._emit(o?structuredClone(o):void 0)}_updateBand(e,t,o){const n=[...this.bands??[]],r={...n[e]};null==o||""===o?delete r[t]:r[t]=o,n[e]=r,this._emit(n)}_fromChanged(e,t){t.stopPropagation();const o=Number(t.detail?.value);""!==t.detail?.value&&null!=t.detail?.value&&Number.isFinite(o)&&this._updateBand(e,"from",o)}_fromEntityChanged(e,t){t.stopPropagation();const o=t.detail?.value;"string"==typeof o&&""!==o&&this._updateBand(e,"from",o)}_toggleFromMode(e){const t=this.bands?.[e]?.from,o=new Set(this._entityOpen);Bp(t)?this._updateBand(e,"from",this._entityValue(t)??0):o.delete(e)||o.add(e),this._entityOpen=o}_colorChanged(e,t){t.stopPropagation();const o=t.detail?.value,n=this.bands?.[e]?.color??"primary";if(!o)return;const r=new Set(this._customOpen);o!==Wp?(r.delete(e),this._customOpen=r,o!==n&&this._updateBand(e,"color",o)):Yp(n)&&(this._customOpen=r.add(e))}_customColorChanged(e,t){t.stopPropagation();const o="string"==typeof t.detail?.value?t.detail.value.trim():"";if(!o)return;const n=new Set(this._customOpen);n.delete(e),this._customOpen=n,this._updateBand(e,"color",o)}_iconChanged(e,t){t.stopPropagation(),this._updateBand(e,"icon",t.detail?.value)}_labelChanged(e,t){t.stopPropagation(),this._updateBand(e,"label",t.detail?.value)}_removeBand(e){const t=[...this.bands??[]];t.splice(e,1),this._emit(t)}_addBand(){const e=[...this.bands??[]],t=e[e.length-1]?.from,o="number"==typeof t?t:Bp(t)?this._entityValue(t)??NaN:"string"==typeof t&&""!==t.trim()?Number(t):NaN;e.push({from:Number.isFinite(o)?o+10:0,color:"primary"}),this._emit(e)}_duplicateWarning(){const e=new Set;for(const t of this.bands??[]){const o="string"!=typeof t.from||Bp(t.from)?t.from:Number(t.from);if("number"==typeof o&&Number.isFinite(o)){if(e.has(o))return R`<ha-alert class="warning" data-warning="bands" alert-type="warning"
          >${Ze(this.hass,"editor_warn_band_same_start",{from:String(o)})}</ha-alert
        >`;e.add(o)}}return Z}_renderBand(e,t,o){const n=!Yp(e.color)||this._customOpen.has(t),r=Bp(e.from)?e.from:void 0,a=void 0!==r||this._entityOpen.has(t);return R`<div class="band">
      <span
        class="swatch"
        role="img"
        aria-label=${Yp(e.color)?this._t(`editor_color_${e.color}`):e.color}
        style=${Dp({"--swatch":je(e.color)})}
      ></span>
      <ha-selector
        .required=${!1}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${o.from}
        .value=${void 0!==r?this._entityValue(r):e.from}
        .disabled=${a}
        @value-changed=${e=>this._fromChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!0}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${o.color}
        .value=${n?Wp:e.color}
        @value-changed=${e=>this._colorChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${Rp}
        .value=${e.label??""}
        @value-changed=${e=>this._labelChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${Zp}
        .value=${e.icon??""}
        @value-changed=${e=>this._iconChanged(t,e)}
      ></ha-selector>
      <ha-icon-button
        class="from-mode"
        .path=${a?"M4,17V9H2V7H6V17H4M22,15C22,16.11 21.1,17 20,17H16V15H20V13H18V11H20V9H16V7H20A2,2 0 0,1 22,9V10.5A1.5,1.5 0 0,1 20.5,12A1.5,1.5 0 0,1 22,13.5V15M14,15V17H8V13C8,11.89 8.9,11 10,11H12V9H8V7H12A2,2 0 0,1 14,9V11C14,12.11 13.1,13 12,13H10V15H14Z":"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"}
        .label=${this._t(a?"editor_band_from_number":"editor_band_from_entity")}
        aria-pressed=${a?"true":"false"}
        @click=${()=>this._toggleFromMode(t)}
      ></ha-icon-button>
      <ha-icon-button
        class="remove"
        .path=${zl}
        .label=${this._t("editor_remove_band")}
        @click=${()=>this._removeBand(t)}
      ></ha-icon-button>
      ${a?R`<ha-selector
              .required=${!1}
              class="from-entity"
              data-role="from-entity"
              .hass=${this.hass}
              .label=${this._t("editor_band_from_entity_label")}
              .selector=${qp}
              .value=${r??""}
              @value-changed=${e=>this._fromEntityChanged(t,e)}
            ></ha-selector>`:Z}
      ${n?R`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${Rp}
              .value=${Yp(e.color)?je(e.color):e.color}
              @value-changed=${e=>this._customColorChanged(t,e)}
            ></ha-selector>`:Z}
    </div>`}render(){const e=this._getSelectors(),t=Vp(this.bands);return R`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${t===Wp?e.presetCustom:e.preset}
        .value=${t}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((t,o)=>this._renderBand(t,o,e))} ${this._duplicateWarning()}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}Gp.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},Gp.styles=a`
    :host {
      display: block;
      container-type: inline-size;
    }
    .warning {
      display: block;
      margin-top: 12px;
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
    /* Narrow: the start keeps its buttons; the colour, label and icon each get a line wide enough to read. */
    @container (max-width: 420px) {
      .band {
        grid-template-areas:
          'swatch from from mode remove'
          '. color color color color'
          '. label label label label'
          '. icon icon icon icon';
      }
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",Gp);const Xp={line:["value","dash","history","zone"],band:["from","to"],time:["times"],state:["entity","state","shade"],point:["at","series"],calendar:["calendar","calendar_match","calendar_shade"]},Kp={series:"entity",calendar:"entity",calendar_match:"match",calendar_shade:"shade"},Jp=e=>Kp[e]??e,Qp={dash:!0,shade:!1,at:"max",history:!1,zone:"none",calendar_shade:!1};function em(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:Ze(e,`editor_annotation_${t}_${o}`)}))}}}const tm=new Map;function om(e,t){const o={...e};return t.length?o.annotations=t:delete o.annotations,o}function nm(e,t,o){if("calendar"===e){return{type:e,entity:Object.keys(o?.states??{}).find(e=>e.startsWith("calendar."))??"calendar.example"}}if("line"===e)return{type:e,value:0};if("band"===e)return{type:e,from:0,to:1};if("time"===e)return{type:e,times:["07:00"]};if("state"===e){const o=(t.entities??[])[0];return{type:e,entity:"string"==typeof o?o:o?.entity??"sensor.example",state:"on"}}return{type:e,at:"max"}}function rm(e){const t=Array.isArray(e.config.annotations)?e.config.annotations:[],o=(e.config.entities??[]).map(e=>"string"==typeof e?e:e.entity),n=t=>Ze(e.hass,t),r=(o,n)=>{const r=[...t];n?r[o]=n:r.splice(o,1),e.commit(om(e.config,r))};return R`<style>
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
      .annotation-bands-title {
        margin: 8px 0 0;
        color: var(--secondary-text-color);
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
      ${t.map((t,a)=>R`<div class="annotation" data-index=${a}>
            <div class="annotation-fields">
              <ha-form
                data-section="annotation"
                .hass=${e.hass}
                .data=${function(e){const t={type:e.type};for(const o of[...Xp[e.type],"label","color"]){let n=e[Jp(o)];"times"===o?n=vp(e.times).join(", "):"value"!==o&&"from"!==o&&"to"!==o||void 0===n||(n=String(n)),t[o]=n??Qp[o]}return t}(t)}
                .schema=${function(e,t,o){const n=`${e}|${Be(t)}|${o.join(",")}`;let r=tm.get(n);if(r)return r;const a={value:{text:{}},from:{text:{}},to:{text:{}},times:{text:{}},entity:{entity:{}},series:{entity:{include_entities:o}},calendar:{entity:{domain:"calendar"}},calendar_match:{text:{}},calendar_shade:{boolean:{}},state:{text:{}},shade:{boolean:{}},dash:{boolean:{}},at:em(t,"at",up),history:{boolean:{}},zone:em(t,"zone",["none",...op])};return r=[{name:"type",selector:em(t,"type",dp)},...Xp[e].map(e=>({name:e,selector:a[e]})),{type:"grid",name:"",schema:[{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}}}]}],tm.set(n,r),r}(dp.includes(t.type)?t.type:"line",e.hass,o)}
                .computeLabel=${e=>n(`editor_annotation_${e.name}`)}
                .computeHelper=${t=>Ml(e.hass,`editor_annotation_${t.name}`)}
                @value-changed=${e=>{e.stopPropagation(),r(a,function(e,t){const o=e.type??t.type,n={type:o},r=o===t.type?[...Xp[o],"label","color"]:["label","color"];for(const a of r){let t=e[a];"string"==typeof t&&(t=t.trim()),void 0!==t&&""!==t&&t!==Qp[a]&&("value"!==a&&"from"!==a&&"to"!==a||!Number.isFinite(Number(t))||(t=Number(t)),"times"===a&&(t=vp(t)),n[Jp(a)]=t)}return o===t.type&&void 0!==t.severity&&(n.severity=t.severity),n}(e.detail?.value??{},t))}}
              ></ha-form>
              ${"line"===t.type&&void 0!==t.zone?R`<div class="annotation-bands">
                      <div class="annotation-bands-title">${n("editor_annotation_severity")}</div>
                      <cd-bands-editor
                        .hass=${e.hass}
                        .bands=${t.severity}
                        @value-changed=${e=>{e.stopPropagation(),r(a,function(e,t){const o={...e};return t&&t.length?o.severity=t:delete o.severity,o}(t,e.detail?.value))}}
                      ></cd-bands-editor>
                    </div>`:Z}
            </div>
            <ha-icon-button
              class="remove"
              .path=${zl}
              .label=${n("editor_annotation_remove")}
              @click=${()=>r(a)}
            ></ha-icon-button>
          </div>`)}
      <div class="annotation-add">
        <span>${n("editor_annotation_add")}</span>
        ${dp.map(o=>R`<button
              type="button"
              data-type=${o}
              @click=${()=>e.commit(om(e.config,[...t,nm(o,e.config,e.hass)]))}
            >
              + ${n(`editor_annotation_add_${o}`)}
            </button>`)}
      </div>
    </div>`}const am=fn,im=["below","above"],sm=["linear","recent"],lm=864e5,cm={day:108e5,week:2*lm,month:7*lm,year:30*lm},dm=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim()),um=e=>"object"==typeof e&&null!==e&&!Array.isArray(e);function hm(e){const t=e.goal;if(um(t))return{...void 0!==t.target?{target:t.target}:{},period:t.period??"month",direction:t.direction??"below",project:t.project??"linear"}}function pm(e){const t=um(e.goal)?e.goal.target:void 0;return dm(t)?[t.trim()]:[]}function mm(e,t){if("number"==typeof e.target)return e.target;if(!dm(e.target))return;const o=Number(t?.states[e.target.trim()]?.state);return Number.isFinite(o)&&""!==t?.states[e.target.trim()]?.state?o:void 0}function fm(e,t){for(let o=e.length-1;o>=0;o--){const n=e[o];if(n.t<=t&&null!==n.v)return n}}function gm(e,t,o,n,r){const a=fm(e,Math.min(o,t.end));if(!a)return;const i=a.v;if(o>=t.end)return{at:a,end:i};const s=a.t-t.start;if(s<=0)return{at:a,end:i};let l=i/s;if("recent"===n){const o=Math.max(t.start,a.t-cm[r]),n=fm(e,o),s=n?n.v:0;a.t>o&&(l=(i-s)/(a.t-o))}return{at:a,end:i+l*(t.end-a.t)}}function ym(e,t,o){return{share:0===t?0===e?0:Math.sign(e):(e-t)/Math.abs(t),good:"below"===o?e<=t:e>=t}}function vm(e){if(!e)return[];const t=e.range.start;return[0,e.target,e.projection?.end].filter(e=>"number"==typeof e&&Number.isFinite(e)).map(e=>({t:t,v:e}))}const _m=(e,t,o)=>Bt(Wt(e,t.decimals,o),t.unit);function bm(e,t){if(void 0===e.target||!e.projection)return;const{share:o,good:n}=ym(e.projection.end,e.target,e.goal.direction),r=_m(e.projection.end,e.entity,t),a=function(e,t){const o={style:"percent",maximumFractionDigits:0};try{return new Intl.NumberFormat(t?.locale?.language??t?.language??"en",o).format(e)}catch{return new Intl.NumberFormat("en",o).format(e)}}(Math.abs(o),t);return{text:Ze(t,`goal_${e.ended?"ended":"pace"}_${o>0?"over":o<0?"under":"on"}`,{value:r,percent:a}),good:n}}function xm(e,t){if(!e||void 0===e.target)return Z;const{start:o,end:n}=e.range,r=t.x(o),a=t.x(n),i=t.y(0),s=t.y(e.target);return q`<g class="goal">
    <path class="goal-ideal" d="M${r} ${i}L${a} ${s}" fill="none"></path>
    <path class="goal-target" d="M${r} ${s}L${a} ${s}" fill="none"></path>
  </g>`}function wm(e,t){const o=e?.projection;if(!e||!o||e.ended)return Z;const n=void 0===e.target||ym(o.end,e.target,e.goal.direction).good;return q`<path
    class="goal-projection ${n?"good":"bad"}"
    d="M${t.x(o.at.t)} ${t.y(o.at.v)}L${t.x(e.range.end)} ${t.y(o.end)}"
    fill="none"
  ></path>`}const $m=e=>Math.round(1e4*e)/100+"%";function km(e,t,o){if(!e)return Z;const n=[];if(void 0!==e.target){const r=t.y(e.target)/Va;r>=0&&r<=1&&n.push(R`<span class="goal-label goal-target-label" style="top:${$m(r)}"
          >${Ze(o,"goal_target",{value:_m(e.target,e.entity,o)})}</span
        >`)}const r=e.projection;if(r&&!e.ended){const a=void 0===e.target||ym(r.end,e.target,e.goal.direction).good,i=t.x(e.range.end)/Za,s=t.y(r.end)/Va,l=t.x(r.at.t)/Za,c=t.y(r.at.v)/Va;l>=0&&l<=1&&c>=0&&c<=1&&n.push(R`<span class="goal-dot now" style="left:${$m(l)};top:${$m(c)}"></span>`),s>=0&&s<=1&&n.push(R`<span class="goal-dot end ${a?"good":"bad"}" style="left:${$m(i)};top:${$m(s)}"></span>
          <span class="goal-label goal-end-label ${a?"good":"bad"}" style="top:${$m(s)}"
            >${Wt(r.end,e.entity.decimals,o)}</span
          >`)}return n.length?R`<div class="goal-layer" aria-hidden="true">${n}</div>`:Z}const Mm=a`
  .goal-pill {
    display: inline-block;
    margin: 0 0 6px;
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 0.8125em;
    font-weight: 500;
  }
  .goal-pill.good {
    color: var(--success-color, #43a047);
    background: color-mix(in srgb, var(--success-color, #43a047) 15%, transparent);
  }
  .goal-pill.bad {
    color: var(--error-color, #db4437);
    background: color-mix(in srgb, var(--error-color, #db4437) 15%, transparent);
  }
  .goal-ideal {
    stroke: var(--secondary-text-color);
    stroke-width: 1.2px;
    stroke-dasharray: 4 3;
    opacity: 0.8;
  }
  .goal-target {
    stroke: var(--success-color, #43a047);
    stroke-width: 1.4px;
  }
  .goal-projection {
    stroke-width: 2px;
    stroke-dasharray: 2 3;
    stroke-linecap: round;
  }
  .goal-projection.good,
  .goal-dot.end.good,
  .goal-end-label.good {
    stroke: var(--success-color, #43a047);
    color: var(--success-color, #43a047);
  }
  .goal-projection.bad,
  .goal-dot.end.bad,
  .goal-end-label.bad {
    stroke: var(--error-color, #db4437);
    color: var(--error-color, #db4437);
  }
  .goal-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .goal-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: currentColor;
  }
  .goal-dot.now {
    color: var(--primary-color);
  }
  .goal-label {
    position: absolute;
    font-size: 11px;
    line-height: 1;
    transform: translateY(calc(-100% - 4px));
    white-space: nowrap;
  }
  .goal-target-label {
    left: 4px;
    color: var(--success-color, #43a047);
  }
  .goal-end-label {
    right: 6px;
    font-weight: 600;
  }
`,zm=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),Em={period:"month",direction:"below",project:"linear"};function Sm(e){const t=e.goal;if(!zm(t))return{goal_on:!1};const o={goal_on:!0};"number"==typeof t.target&&(o.goal_target=t.target),"string"==typeof t.target&&(o.goal_target_entity=t.target);for(const n of Object.keys(Em))o[`goal_${n}`]=t[n]??Em[n];return o}const Am=(e,t,o)=>({select:{mode:"dropdown",options:o.map(o=>({value:o,label:Ze(e,`editor_goal_${t}_${o}`)}))}}),jm=new Map;function Cm(e){const t=t=>Ze(e.hass,t);return R`<div class="goal" data-section="goal">
    <div style="font-weight: 500; margin: 16px 0 4px">${t("editor_goal")}</div>
    <ha-form
      data-section="goal-options"
      .hass=${e.hass}
      .data=${Sm(e.config)}
      .schema=${function(e,t){const o=`${Be(e)}|${t}`;let n=jm.get(o);return n||(n=[{name:"goal_on",selector:{boolean:{}}},...t?[{type:"grid",name:"",schema:[{name:"goal_target",selector:{number:{mode:"box",step:"any"}}},{name:"goal_target_entity",selector:{entity:{domain:["sensor","input_number","number"]}}}]},{type:"grid",name:"",schema:[{name:"goal_period",selector:Am(e,"period",am)},{name:"goal_direction",selector:Am(e,"direction",im)},{name:"goal_project",selector:Am(e,"project",sm)}]}]:[]],jm.set(o,n)),n}(e.hass,zm(e.config.goal))}
      .computeLabel=${e=>t(`editor_${e.name}`)}
      .computeHelper=${t=>Ml(e.hass,`editor_${t.name}`)}
      @value-changed=${t=>{t.stopPropagation(),e.commit(function(e,t){const o={...e};if(!0!==t.goal_on)return delete o.goal,o;const n=Sm(e),r={...zm(e.goal)?e.goal:{}},a="string"==typeof t.goal_target_entity?t.goal_target_entity.trim():"",i="number"==typeof t.goal_target&&Number.isFinite(t.goal_target)?t.goal_target:void 0;let s=r.target;a!==(n.goal_target_entity??"")?s=a||i:i!==n.goal_target&&(s=i??(a||void 0)),void 0===s||""===s?delete r.target:r.target=s;for(const l of Object.keys(Em)){const e=t[`goal_${l}`];void 0===e||e===Em[l]?delete r[l]:r[l]=e}return o.goal=r,o}(e.config,t.detail?.value??{}))}}
    ></ha-form>
  </div>`}const Nm=2*Math.PI,Lm=1440,Fm=6e4,Tm=["on","open","opening","closing","home","playing","heating","cooling","drying","active","running","cleaning","detected"],Om=new Set(["unavailable","unknown"]);function Pm(e){return void 0===e||""===e||Om.has(e)}function Dm(e,t,o,n){const r=e[e.length-1];r&&r.end===t?r.end=o:e.push(n?{start:t,end:o,carried:n}:{start:t,end:o})}function Um(e,t){const o=[];for(const n of e){const e=Math.max(t.start,n.start),r=Math.min(t.end,n.end);if(r<=e)continue;const a=!0===n.carried||n.start<t.start;o.push(a?{start:e,end:r,carried:a}:{start:e,end:r})}return o}function Im(e){return e.filter(e=>!e.carried).length}function Hm(e,t,o){return(e+an(e,o)-(t+an(t,o)))/Fm}function Wm(e,t,o){const n=e.start,r=e.end,a=an(n,o),i=an(Math.max(n,r-1e3),o),s=t+an(t,o),l=(e,t)=>(e=>Math.min(Lm,Math.max(0,e)))((e+t-s)/Fm);if(a===i)return[[l(n,a),l(r,a)]];const c=function(e,t,o){const n=an(e,o);for(;t-e>1e3;){const r=Math.floor((e+t)/2);an(r,o)===n?e=r:t=r}return 1e3*Math.floor(t/1e3)}(n,r-1e3,o);return[[l(n,a),l(c,a)],[l(c,i),l(r,i)]].filter(([e,t])=>t>e)}function Rm(e){return e/Lm*Nm}function qm(e,[t,o]){const n=Math.max(0,Math.ceil(t-.5)),r=Math.min(Lm,Math.ceil(o-.5));for(let a=n;a<r;a++)e[a]=1}const Bm=[15,30,60];function Zm(e,t){const o=t*Fm,n=[];for(let r=e.start;r<e.end;r+=o)n.push(r);return n.push(e.end),n}const Vm=new Set(["sum","change"]);function Ym(e,t){if("max"===t)return Math.max(...e);if("min"===t)return Math.min(...e);if("first"===t)return e[0];if("last"===t)return e[e.length-1];const o=e.reduce((e,t)=>e+t,0);return Vm.has(t)?o:o/e.length}function Gm(e){return Vm.has(e)}function Xm(e){const t=Math.max(0,Math.round(e/Fm)),o=Math.floor(t/60),n=t-60*o;return 0===o?`${n} m`:n?`${o} h ${n} m`:`${o} h`}function Km(e,t){return[Jm(e*Math.sin(t)),Jm(-e*Math.cos(t))]}function Jm(e){return Math.round(100*e)/100||0}function Qm(e,t,o,n){if(t<=0||n<=o)return"";const r=Math.max(0,e);if(n-o>=Nm-1e-6){const e=(e,t)=>{const[o,n]=Km(e,0),[r,a]=Km(e,Math.PI);return`M${o} ${n}A${e} ${e} 0 1 ${t} ${r} ${a}A${e} ${e} 0 1 ${t} ${o} ${n}Z`};return r>0?`${e(t,1)}${e(r,0)}`:e(t,1)}const a=n-o>Math.PI?1:0,[i,s]=Km(t,o),[l,c]=Km(t,n),d=`M${i} ${s}A${t} ${t} 0 ${a} 1 ${l} ${c}`;if(0===r)return`${d}L0 0Z`;const[u,h]=Km(r,n),[p,m]=Km(r,o);return`${d}L${u} ${h}A${r} ${r} 0 ${a} 0 ${p} ${m}Z`}const ef=["off","line","time","countdown"],tf=6e4;function of(e){const t=e.now_marker;if(void 0!==t&&!ef.includes(t))throw new Error(`"now_marker" must be one of: ${ef.join(", ")}`)}function nf(e,t,o,n,r){if("countdown"===e){const e=function(e,t,o){let n;for(const r of bp(e)){if("time"!==r.type)continue;const e=kp(vp(r.times),{start:t+1,end:t+1728e5},o)[0];void 0!==e&&(!n||e<n.t)&&(n={t:e,label:r.label})}return n}(t,o,n);if(e){const t=Xm(Math.ceil((e.t-o)/tf)*tf);return e.label?Ze(r,"now_marker_countdown",{label:e.label,duration:t}):Ze(r,"now_marker_next",{duration:t})}}return"time"===e||"countdown"===e?Qs(o,r):""}const rf=new WeakMap;function af(e,t){if(rf.has(e.host))return;const o=tf-t%tf+50;rf.set(e.host,setTimeout(()=>{rf.delete(e.host),"undefined"!=typeof document&&"hidden"===document.visibilityState?af(e,Date.now()):e.requestUpdate()},o))}function sf(e){const t=rf.get(e);void 0!==t&&clearTimeout(t),rf.delete(e)}function lf(e,t,o,n,r,a=Date.now()){const i=(s=e.raw,ef.includes(s.now_marker)?s.now_marker:"off");var s;if("off"===i||!t.live||!function(e,t){const o=(e.end-e.start)/200;return t>e.start&&t<e.end-o}(o,a))return Z;af(e,a);const l=n.x(a)/Za;if(!(l>=0&&l<=1))return Z;const c=nf(i,e.raw,a,t.zone,e.hass),d=c?function(e,t,o,n,r){const a=[];for(const i of bp(e)){if("time"!==i.type||!i.label)continue;const e=zp(i.label);for(const s of kp(vp(i.times),t,o)){const t=n(s)/Za*r;a.push(t+2+e>r?[t-2-e,t-2]:[t+2,t+2+e])}}return a}(e.raw,o,t.zone,n.x,r):[],u="end"===function(e,t,o,n){const r=[e+8,e+8+t],a=[e-8-t,e-8],i=([e,t])=>n.every(([o,n])=>t+4<=o||e>=n+4),s=r[1]<=o,l=a[0]>=0;return s&&i(r)?"start":l&&i(a)?"end":s?"start":"end"}(l*r,(e=>Math.ceil(6.2*e.length)+18)(c),r,d),h=Math.round(1e4*l)/100+"%";return R`<div class="now-marker" style="left:${h}" title=${Qs(a,e.hass)}>
    <span class="now-line"></span>
    <span class="now-dot"></span>
    ${c?R`<span class="now-label ${u?"end":""}" aria-live="off">${c}</span>`:Z}
  </div>`}const cf=a`
  .now-marker {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0;
    pointer-events: none;
    transition: left 0.6s ease-out;
    z-index: 1;
  }
  :host([static]) .now-marker {
    transition: none;
  }
  .now-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    width: 2px;
    background: var(--primary-text-color);
    opacity: 0.85;
  }
  .now-dot {
    position: absolute;
    top: -3px;
    left: -4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-text-color);
  }
  .now-label {
    position: absolute;
    top: -2px;
    left: 8px;
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    padding: 0 8px;
    border-radius: 8px;
    white-space: nowrap;
    color: var(--card-background-color, #fff);
    background: var(--primary-text-color);
  }
  .now-label.end {
    left: auto;
    right: 8px;
  }
`,df=[{name:"now_marker",path:["now_marker"],default:"off"}];function uf(e){return[{name:"now_marker",selector:{select:{mode:"dropdown",options:ef.map(t=>({value:t,label:Ze(e,`editor_now_marker_${t}`)}))}}}]}function hf(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:Ze(e,`editor_${t}_${o}`)}))}}}const pf=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"energy_flows",path:["energy_flows"]},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"}],mf={name:"energy_split",path:["energy_split"],default:!0};function ff(e){const t=e?.period,o=e?.style,n="energy"===e?.source?"|energy"+(Kt.includes(o)?"|split":""):"",r=Yt.includes(o)?n||"|energy-able":"";return`${t?.calendar?"calendar":"rolling"}${e?.group_by?"|grouped":""}${r}`}function gf(e,t){const[o,...n]=ff(t).split("|"),r="calendar"===o,a=n.includes("grouped"),i=n.includes("energy")||n.includes("energy-able")?[...Ga,"energy"]:Ga;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:hf(e,"period_calendar",["rolling",...fn])},...r?[{name:"period_until",selector:hf(e,"period_until",gn)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:hf(e,"period_unit",mn)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:hf(e,"source",i)},...n.includes("energy")?[yf(e,Zt)]:[],...n.includes("split")?[{name:"energy_split",selector:{boolean:{}}}]:[],{type:"grid",name:"",schema:[{name:"group_by",selector:hf(e,"group_by",["none",...Vn])},...a?[{name:"aggregate",selector:hf(e,"aggregate",Yn)}]:[]]}]}function yf(e,t){return{name:"energy_flows",selector:{select:{multiple:!0,mode:"list",options:t.map(t=>({value:t,label:Ze(e,`energy_flow_${t}`)}))}}}}const vf=[{name:"source",path:["source"],default:"current"},...pf.filter(e=>e.name.startsWith("period_")&&"period_navigate"!==e.name),{name:"energy_flows",path:["energy_flows"]}];function _f(e){return"energy"!==e?.source?"current":e.period?.calendar?"calendar":"rolling"}function bf(e,t){const o=_f(t),n={name:"source",selector:hf(e,"source",["current","energy"])};if("current"===o)return[n];return[n,gf(e,{...t,source:"history"})[0],yf(e,"sankey"===t?.style?eo:Zt)]}const xf=pf.filter(e=>["period_last","period_unit","source"].includes(e.name));function wf(e){return[{type:"grid",name:"",schema:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:hf(e,"period_unit",mn)}]},{name:"source",selector:hf(e,"source",Ga)}]}const $f=[{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1},{name:"legend_toggle",path:["legend_toggle"],default:!1}];function kf(e,t=!0){return[{type:"grid",name:"",schema:[{name:"header",selector:hf(e,"header",rc)},{name:"compact",selector:{boolean:{}}}]},...t?ja:[]]}const Mf=[{name:"x_axis",path:["x_axis"],default:Es},{name:"y_axis",path:["y_axis"],default:Ss},{name:"axis_labels",path:["axis_labels"],default:As},{name:"grid_horizontal",path:["gridlines","horizontal"],default:js},{name:"grid_vertical",path:["gridlines","vertical"],default:Cs},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function zf(e){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:hf(e,"axis_labels",zs)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const Ef=[{name:"point_action",path:["point_action","action"],default:"none"},{name:"point_action_window",path:["point_action","window"],default:"2h"}];function Sf(e){return[{type:"grid",name:"",schema:[{name:"point_action",selector:hf(e,"point_action",["none","history"])},{name:"point_action_window",selector:{text:{}}}]}]}const Af=[{type:"grid",name:"",schema:[{name:"zoom",selector:{boolean:{}}},{name:"overview",selector:{boolean:{}}}]}],jf=[{name:"zones",selector:{boolean:{}}}];function Cf(e,t){return[{name:"labels",selector:{boolean:{}}},...!0===t?.labels?[{type:"grid",name:"",schema:[{name:"labels_show",selector:hf(e,"labels_show",Ad)},{name:"labels_position",selector:hf(e,"labels_position",jd)}]},{name:"labels_overlap",selector:{boolean:{}}}]:[]]}const Nf=[{name:"sync",selector:{text:{}}}];function Lf(e,t){return[{name:"multiples",selector:{boolean:{}}},...!0===t?.multiples?[{type:"grid",name:"",schema:[{name:"multiples_scale",selector:hf(e,"multiples_scale",Lh)},{name:"multiples_columns",selector:{number:{min:1,max:6,mode:"box"}}}]}]:[]]}const Ff=new Map;function Tf(e,t,o){const n=`${e}|${Be(t)}`;let r=Ff.get(n);return r||(r=o(),Ff.set(n,r)),r}const Of=["data","look","axes","extras","layout"],Pf={data:["period_","source","energy_","group_by","aggregate","compare","readings","bucket","bins","bin_width","days","hours","points_per_hour","cycle_plot_","series_aggregate","entity_aggregate","under_aggregate","measure"],axes:["x_axis","y_axis","axis_labels","grid_horizontal","grid_vertical","y_min","y_max","x_min","x_max","min_range","y_scale","value_axis","value_grid","value_min","value_max","tooltip","point_action","keyboard_nav","trend_y_","trend_tooltip"],extras:["zoom","overview","forecast_","zones","now_","show_now","extremes","anomalies","extrema","average","normal_range"],layout:["sync","header","compact","legend_toggle","table_","multiples","summary_"]};function Df(e,t){return t.endsWith("_")?e.startsWith(t):e===t||e.startsWith(`${t}_`)}function Uf(e){const t=e.name||e.schema?.find(e=>e.name)?.name||"";for(const o of Of)if("look"!==o&&Pf[o].some(e=>Df(t,e)))return o;return"look"}function If(e){return e.reduce((e,t)=>e+(t.schema?If(t.schema):1),0)}const Hf=new WeakMap;function Wf(e,t){const o=Hf.get(t);if(o)return o;const n=t;let r=t;if(If(n)>=9&&!n.some(e=>"expandable"===e.type)){const t=new Map;for(const e of n){const o=Uf(e);t.set(o,[...t.get(o)??[],e])}t.size>1&&(r=Of.filter(e=>t.has(e)).map((o,n)=>({type:"expandable",name:"",flatten:!0,expanded:0===n,title:Ze(e,`editor_chart_group_${o}`),schema:t.get(o)})))}return Hf.set(t,r),r}function Rf(e,t,o,n,r={}){return R`<ha-form
    data-section=${t}
    .hass=${e.hass}
    .data=${as(e.config,n)}
    .schema=${Wf(e.hass,o)}
    .computeLabel=${t=>Ze(e.hass,r[t.name]??`editor_${t.name}`)}
    .computeHelper=${t=>Ml(e.hass,r[t.name]??`editor_${t.name}`)}
    @value-changed=${t=>{t.stopPropagation();const o=function(e,t){if("energy"!==t.source){if("energy"!==e.source||void 0===t.energy_flows&&void 0===t.energy_split)return t;const o={...t};return delete o.energy_flows,delete o.energy_split,o}if("energy"===e.source)return t;if(Gt.includes(t.style))return void 0===t.period?{...t,period:{calendar:"day"}}:t;const o={...t,aggregate:"change"};return"column"===t.style||void 0!==t.group_by&&"none"!==t.group_by||(o.group_by="hour"),o}(e.config,is(e.config,n,t.detail?.value??{}));o!==e.config&&e.commit(o)}}
  ></ha-form>`}const qf=[...pf,{name:"compare",path:["compare"],default:[]},{name:"compare_style",path:["compare_style"],default:"grey"},{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"labels_show",path:["labels_show"],default:"all"},{name:"labels_position",path:["labels_position"],default:"auto"},{name:"labels_overlap",path:["labels_overlap"],default:!1},{name:"line_width",path:["line_width"],default:_i},{name:"dots",path:["dots"],default:!1},...Mf,...Ef,...Qc,{name:"y_scale",path:["y_scale"],default:Ns},{name:"zoom",path:["zoom"],default:!1},{name:"overview",path:["overview"],default:!1},...Eu,{name:"zones",path:["zones"],default:!1},...df,...tu,...Vu,...jh,{name:"sync",path:["sync"]},...$f,...wc,{name:"multiples",path:["multiples"],default:!1},{name:"multiples_scale",path:["multiples_scale"],default:"auto"},{name:"multiples_columns",path:["multiples_columns"]},...vl];const Bf=["none","std","min_max","ci95"],Zf={std:["mean"],ci95:["mean"],min_max:["mean","min","max","first","last"]};function Vf(e,t,o,n,r,a){return t.map((t,i)=>{return function(e,t){if(!e.length)return null;const o=Math.min(...e.map(e=>e.min??e.v)),n=Math.max(...e.map(e=>e.max??e.v));if("min_max"===t)return{lo:o,hi:n};if(e.length<2)return null;const r=e.reduce((e,t)=>e+t.dt,0),a=t=>r>0?t.dt/r:1/e.length,i=e.reduce((e,t)=>e+t.v*a(t),0),s=Math.sqrt(e.reduce((e,t)=>e+(t.v-i)**2*a(t),0)),l="std"===t?s:1.96*s/Math.sqrt(e.length);return{lo:Math.max(o,i-l),hi:Math.min(n,i+l)}}(r?(s=e,l=t,c=o[i],s.filter(e=>e.t>=l&&e.t<c&&null!==e.v&&!e.carried).map(e=>({v:e.v,dt:1,min:e.min??void 0,max:e.max??void 0}))):function(e,t,o,n){const r=Math.min(o,n);if(!(r>t))return[];let a=0;for(;a<e.length&&e[a].t<t;)a++;const i=[],s=e[a-1],l=a<e.length&&e[a].t<r?e[a].t:r;s&&null!==s.v&&l>t&&i.push({v:s.v,dt:l-t});for(let c=a;c<e.length&&e[c].t<r;c++){const t=c+1<e.length&&e[c+1].t<r?e[c+1].t:r,o=e[c].v;null!==o&&i.push({v:o,dt:t-e[c].t})}return i}(e,t,o[i],a),n);var s,l,c})}const Yf=(e,t)=>Math.round(e/t*1e4)/100+"%",Gf=e=>Math.min(Va,Math.max(0,e));const Xf=a`
  /* Caps top and bottom, the stem down the middle; caps at most 14 px wide. */
  .whisker-bar {
    position: absolute;
    box-sizing: border-box;
    max-width: 14px;
    transform: translateX(-50%);
    border-top: 1.5px solid var(--primary-text-color);
    border-bottom: 1.5px solid var(--primary-text-color);
    opacity: 0.8;
    animation: cd-whisker-in var(--cd-duration) var(--cd-easing);
  }
  .whisker-bar::before {
    content: '';
    position: absolute;
    left: calc(50% - 0.75px);
    top: 0;
    bottom: 0;
    border-left: 1.5px solid var(--primary-text-color);
  }
  :host([static]) .whisker-bar {
    animation: none;
  }
  @keyframes cd-whisker-in {
    from {
      opacity: 0;
    }
  }
`;function Kf(e,t){return e.map(e=>({name:e.name,color:e.color,v:Jf(e.points,t)??0}))}function Jf(e,t){for(const o of e)if(o.t===t)return o.v;return null}const Qf=a`
  .cost-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 2px 12px;
    padding: 0 0 6px;
    font-size: 0.8125em;
    color: var(--secondary-text-color);
  }
  .cost-band {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .cost-band .swatch {
    width: 8px;
    height: 8px;
  }
  .tooltip-row.cost-part .tooltip-name {
    padding-left: 10px;
  }
`,eg={hour:66,day:52,week:52,month:60};const tg={hour:"hour",day:"day",week:"day",month:"month"};function og(e,t,o,n){if("hour"===o)return`${el(e,n)} – ${Qs(t,n)}`;const r="day"===o?{weekday:"short",day:"numeric",month:"short"}:"week"===o?{day:"numeric",month:"short"}:{month:"long",year:"numeric"};let a;try{a=new Intl.DateTimeFormat(n?.locale?.language??"en",{...r,timeZone:Gs(n)})}catch{a=new Intl.DateTimeFormat("en",r)}return"week"===o?a.formatRange(e,t-1):a.format(e)}const ng=(e,t)=>Math.round(e/t*1e4)/100+"%",rg=e=>Math.min(Va,Math.max(0,e));function ag(e,t,o,n,r,a,i,s){const l=rg(e.y(r)),c=rg(e.y(n));return R`<div
    class="col ${i?`cap-${i}`:""} ${r<=0&&"both"!==i?"down":""}"
    data-series=${s}
    style="left:${ng(t,Za)};width:${ng(o,Za)};top:${ng(l,Va)};height:${ng(c-l,Va)};background:${a}"
  ></div>`}function ig(e,t,o,n,r,a){return R`<span
    class="point-label col-label ${a?"below":""}"
    style="left:${ng(t,Za)};top:${ng(rg(o),Va)}"
    >${Wt(n,r,e.hass)}</span
  >`}function sg(e,t,o,n){const r=e.y(n);return r<0||r>Va?R``:R`<div
    class="target-mark"
    style="left:${ng(t-.1*o,Za)};width:${ng(1.2*o,Za)};top:${ng(r,Va)}"
  ></div>`}function lg(e,t,o,n,r,a,i){const s=e.raw,l=t.series,c=l.length,d=!0===s.range,u="bands"===s.color_by,h=Kl(e)/Za,p=!0===s.labels&&"percent"!==r&&o.times.length*(a?1:c)<=60,m=e.config.show.target&&"percent"!==r,f=Math.min(Math.max(0,n.domain[0]),n.domain[1]),g=(e,t)=>u?je(Fe(t,e.entity.bands).color):e.color,y={columns:[],labels:[],targets:[]},v=a?il(o.values):[];return o.times.forEach((t,r)=>{const s=n.x(t),u=n.x(o.ends[r]);if(a){const[t,i]=vc(s,u,0,1);let c=-1,d=-1;a.forEach((e,t)=>{const o=e[r];o&&o[1]>o[0]&&(c=t),o&&o[1]<o[0]&&(d=t)}),a.forEach((e,a)=>{const s=e[r];if(!s||s[0]===s[1])return;const u=o.values[a][r],h=a===c?"top":a===d?"bottom":"";y.columns.push(ag(n,t,i,Math.min(...s),Math.max(...s),g(l[a],u),h,a))});const f=v[r];if(p&&null!==f&&i*h>=24){const o=f>=0?Math.max(0,...a.map(e=>e[r]?.[1]??0)):Math.min(0,...a.map(e=>e[r]?.[1]??0)),s=Math.max(...l.map(e=>e.entity.decimals));y.labels.push(ig(e,t+i/2,n.y(o),f,s,f<0))}const _=l[0].entity.target;return void(m&&null!==_&&y.targets.push(sg(n,t,i,_)))}l.forEach((a,l)=>{const v=o.values[l][r];if(null===v)return;const[_,b]=vc(s,u,l,c);if(a.costParts&&!d){const o=Kf(a.costParts,t);let r=f,i=f;const s=o.reduce((e,t,o)=>t.v>0?o:e,-1),c=o.reduce((e,t,o)=>t.v<0?o:e,-1);return o.forEach((e,t)=>{if(0===e.v)return;const o=e.v>0?r:i+e.v,a=e.v>0?r+e.v:i;e.v>0?r+=e.v:i+=e.v;const d=t===s?"top":t===c?"bottom":"";y.columns.push(ag(n,_,b,o,a,je(e.color),d,l))}),void(p&&b*h>=24&&y.labels.push(ig(e,_+b/2,n.y(v>=0?r:i),v,a.entity.decimals,v<0)))}if(d){const e=o.lows[l][r]??v,t=o.highs[l][r]??v;y.columns.push(ag(n,_,b,e,t,g(a,v),"both",l)),y.columns.push(R`<div
            class="col-mark"
            style="left:${ng(_,Za)};width:${ng(b,Za)};top:${ng(rg(n.y(v)),Va)}"
          ></div>`)}else{if(y.columns.push(ag(n,_,b,Math.min(f,v),Math.max(f,v),g(a,v),v>=f?"top":"bottom",l)),p&&b*h>=24){const t=co(a.entity,v);y.labels.push(ig(e,_+b/2,n.y(v),t,a.entity.decimals,v<f))}const t=i?.[l][r];t&&y.columns.push(function(e,t,o,n){const r=Gf(e.y(n.hi)),a=Gf(e.y(n.lo));return R`<div
    class="whisker-bar"
    style="left:${Yf(t,Za)};width:${Yf(o,Za)};top:${Yf(r,Va)};height:${Yf(a-r,Va)}"
  ></div>`}(n,_+b/2,.4*b,t))}m&&null!==a.entity.target&&y.targets.push(sg(n,_,b,a.entity.target))})}),y}const cg=pf.map(e=>"period_last"===e.name?{...e,default:hc.last}:"period_unit"===e.name?{...e,default:hc.unit}:"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),dg=[...cg,mf,{name:"stack",path:["stack"],default:"none"},{name:"color_by",path:["color_by"],default:"series"},{name:"range",path:["range"],default:!1},{name:"column_labels",path:["labels"],default:!1},{name:"rounded",path:["rounded"],default:!0},{name:"error_bars",path:["error_bars"],default:"none"},...Mf,...Ef,...Qc,...df,...$f,...vl,...wc];function ug(e){const t=e.period;return t&&"object"==typeof t&&void 0===t.calendar?void 0!==t.last&&void 0!==t.unit?e:{...e,period:{last:hc.last,unit:hc.unit,...t}}:e}const hg=[{name:"column_color",path:["color"]}],pg=a`
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
`,mg={layout:"chart",group:"history",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${Sd}
    ${cc}
    ${pg}
    ${Xf}
    ${cf}
    ${Qf}
    ${Tc}
    ${dd}
  `,thumbnail:()=>q`
    <path d="M7 36 V22 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M19 36 V12 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M31 36 V18 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M43 36 V8 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M55 36 V26 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M4 36.5 H62" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(e){if(of(e),void 0!==e.group_by&&!(e=>dc.includes(e))(e.group_by))throw new Error(`"group_by" must be one of: ${dc.join(", ")}`);if(void 0!==e.aggregate&&!uc.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${uc.join(", ")}`);const t={...e};"auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,Xa(t),Fs(e),Zc(e),_d(e),ac(e),_l(e),Mc(e),td(e),nl(e),function(e){if(void 0!==e.error_bars&&!Bf.includes(e.error_bars))throw new Error(`"error_bars" must be one of: ${Bf.join(", ")}`)}(e);for(const o of["range","rounded","labels"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);if(void 0!==e.color_by&&"series"!==e.color_by&&"bands"!==e.color_by)throw new Error('"color_by" must be one of: series, bands')},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},n=Tf(`column|${ff(o)}|${t}|${kc(e.config)}`,e.hass,()=>[...gf(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:hf(e.hass,"group_by",dc)},...t?[]:[{name:"aggregate",selector:hf(e.hass,"aggregate",uc)}]]},{type:"grid",name:"",schema:[{name:"stack",selector:hf(e.hass,"stack",ol)},{name:"color_by",selector:hf(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"range",selector:{boolean:{}}},{name:"column_labels",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...t?[]:[{name:"error_bars",selector:hf(e.hass,"error_bars",Bf)}],...zf(e.hass),...Sf(e.hass),...ed,...uf(e.hass),...kf(e.hass),...$c(e.config),{type:"grid",name:"",schema:[{name:"summary_text",selector:{text:{}}},{name:"summary_show",selector:{boolean:{}}}]}]);return R`${Rf({...e,commit:t=>e.commit(ug(t))},"chart",n,dg)}${Fl(e,!0)}`},watch:e=>jr(e),entityFields:e=>({schema:Tf("column-entity",e,()=>[{name:"column_color",selector:{text:{}}}]),fields:hg}),disconnect(e){ni(e),Xl(e),qc(e),sf(e),id(e)},render:function(e){const t={...e,raw:gc(e.raw,e.items)},o=t.raw,n=!0===o.range,r=function(e){const t=e.error_bars;return t&&"none"!==t?t:void 0}(o),a=r&&!n&&"none"===(o.stack??"none")&&void 0!==o.group_by&&function(e,t){return Zf[e].includes(t)}(r,o.aggregate)?r:void 0,i=Date.now(),s=Ja(t,i,{range:n||"min_max"===a,hourly:void 0!==a&&"statistics"===o.source}),l=ti(s,t),c=ri(s,t),d=function(e){const t=new Map;for(const o of e)for(const e of o.costParts??[])t.has(e.name)||t.set(e.name,e.color);return t.size?R`<div class="cost-legend">
    ${[...t].map(([e,t])=>R`<span class="cost-band"><span class="swatch" style="background:${je(t)}"></span>${e}</span>`)}
  </div>`:Z}(s.series),u=Nc(t,ic(o),l===Z&&c===Z&&d===Z?Z:R`${l}${c}${d}`),{layout:h,header:p}=u,m=ai(s,t);if(m)return sc("over"===h.header?{...h,header:"above"}:h,p,m);if(u.table)return sc(h,p,Fc(t,s,{heading:og,now:i}));const f=n?"none":o.stack??"none",g=s.group,y=yc(s.series.map(e=>e.points),g?1/0:s.range.end),v=g&&y.ends.length?{...s.range,end:Math.max(s.range.end,...y.ends)}:s.range,_="none"===f?void 0:al(y.values,f),b=a&&g?s.series.map(e=>Vf(e.readings??[],y.times,y.ends,a,"statistics"===s.source,Math.min(s.range.end,i))):void 0,x=(b??[]).flat().flatMap(e=>e?[e.lo,e.hi]:[]);for(const H of"none"===f?s.series:[])for(const e of H.costParts?y.times:[]){const t=Kf(H.costParts,e);x.push(t.reduce((e,t)=>e+Math.max(0,t.v),0),t.reduce((e,t)=>e+Math.min(0,t.v),0))}const w=s.series.map(e=>e.entity.target).filter(e=>null!==e);let $;$=_?sl(_):n?_c([...y.lows.flat(),...y.highs.flat(),...y.values.flat(),...w],!1):_c([...y.values.flat(),...x,...t.config.show.target?w:[]]);let k=o;"percent"===f?k={y_min:$[0]<0?-100:0,y_max:$[1]>0?100:0,...o}:!n&&$&&(k=function(e,t){const o={...t};return void 0===t.y_min&&e[0]>=0&&(o.y_min=0),void 0===t.y_max&&e[1]<=0&&(o.y_max=0),o}($,o));let M=Jl({...t,raw:k},v,$);const{scales:z}=M,E=y.times.map((e,t)=>(e+y.ends[t])/2),S=new Map(E.map((e,t)=>[e,t]));if(g&&E.length){const e=bc(E.length,Kl(t)/eg[g.unit]),o=tg[g.unit],n="day"===g.unit&&E.length<=8?6048e5:s.range.end-s.range.start;M={...M,unit:o,times:E.filter((t,o)=>o%e===0),label:e=>tl(y.times[S.get(e)],o,n,t.hass)}}const A=lg(t,s,y,z,f,_,b),j=s.series.map((e,t)=>({...e,points:E.map((e,o)=>({t:e,v:y.values[t][o],min:y.lows[t][o],max:y.highs[t][o]}))})),C={dotY:()=>null,heading:e=>{const o=S.get(e);return void 0===o?el(e,t.hass):g?og(y.times[o],y.ends[o],g.unit,t.hass):el(y.times[o],t.hass)}},N=(e,o)=>Wt(e,o.entity.decimals,t.hass);if(n&&(C.text=(e,t)=>{if(!t||null===t.v)return"—";const o=t.min??t.v,n=t.max??t.v;return Bt(`${N(o,e)} – ${N(n,e)}`,e.entity.unit)}),b){const e=new Map(s.series.map((e,t)=>[e.index,b[t]]));C.text=(o,n)=>{if(!n||null===n.v)return"—";const r=e.get(o.index)?.[S.get(n.t)??-1],a=Bt(N(n.v,o),o.entity.unit);return r?Ze(t.hass,"error_bars_tooltip",{value:a,low:N(r.lo,o),high:N(r.hi,o)}):a}}if(_||n||!s.series.some(e=>e.costParts)||(C.footer=e=>function(e,t,o){const n=[];for(const{s:r,p:a}of t){if(!r.costParts||!a||null===a.v)continue;const t=o(a.t);if(void 0!==t)for(const o of Kf(r.costParts,t))0!==o.v&&n.push(R`<div class="tooltip-row cost-part">
          <span class="swatch" style="background:${je(o.color)}"></span>
          <span class="tooltip-name">${o.name}</span>
          <span class="tooltip-value"
            >${Bt(Wt(o.v,r.entity.decimals,e.hass),r.entity.unit)}</span
          >
        </div>`)}return n.length?R`${n}`:Z}(t,e,e=>y.times[S.get(e)??-1])),_){const e=il(y.values),o=Gc(j),n=Math.max(...j.map(e=>e.entity.decimals));C.footer=r=>Xc(t,e[S.get(r[0]?.p?.t??NaN)??-1]??null,o,n),"percent"===f&&(C.text=(e,t)=>{const o=t?_[e.index][S.get(t.t)??-1]:null;return t&&null!==t.v&&o?`${Bt(N(co(e.entity,t.v),e),e.entity.unit)} · ${Math.round(Math.abs(o[1]-o[0]))} %`:"—"})}const L=Bc(o),F=L?Wc(t.host):void 0,T=e=>{const t=S.get(e);return void 0===t?void 0:{start:y.times[t],end:y.ends[t]}};C.after=Md(t,j,F,T);const O=void 0===F?void 0:S.get(F),P=void 0===O?Z:R`<div
          class="slot-hover"
          style="left:${ng(z.x(y.times[O]),Za)};width:${ng(z.x(y.ends[O])-z.x(y.times[O]),Za)}"
        ></div>`,D=Ze(t.hass,"chart_aria",{style:Ze(t.hass,"editor_style_column"),names:s.series.map(e=>e.entity.name).join(", ")}),U=cd(t,j,z,v,D,{...C,position:(e,t)=>{const o=S.get(t.t),r=s.series.findIndex(t=>t.index===e.index);if(void 0===o||r<0||null===t.v)return null;const a=z.x(y.times[o]),i=z.x(y.ends[o]);if(_){const e=_[r][o],[t,n]=vc(a,i,0,1);return e?[t+n/2,rg(z.y(e[1]))]:null}const[l,c]=vc(a,i,r,s.series.length);return[l+c/2,rg(z.y(n?y.highs[r][o]??t.v:t.v))]}}),I=!1===o.rounded?0:4;return sc(h,p,oc({axes:M,ctx:t,content:q``,label:D,summary:$l(t,s.series,{range:v,live:s.live&&!g,when:g?e=>og(e,y.ends[y.times.indexOf(e)]??e,g.unit,t.hass):void 0}),overlay:R`<div class="columns" style="--r:${I}px">${P}${A.columns}${A.targets}</div>
        <div class="point-labels">${A.labels}</div>
        ${"over"===h.header?lc(p):Z}
        ${lf(t,s,v,z,Kl(t))}
        ${L?Kc(t,j,z,F,Kl(t),C):Z} ${U.layer}`,hover:L?Vc(t,v,j.map(e=>e.points)):void 0,tap:Ed(t,v,j,!1,T),keys:U.keys}))}};function fg(e,t){if(!e)return t;const[o,n]=e,r={};return void 0===t.y_min&&o>=0&&o<=n/2&&(r.y_min=0),void 0===t.y_max&&n<=0&&n>=o/2&&(r.y_max=0),Object.keys(r).length?{...t,...r}:t}function gg(e){const t=[];return e.forEach((o,n)=>{n>0&&t.push([o[0],e[n-1][1]]),t.push(o)}),t}function yg(e,t,o){if(e.length<2)return"";const[n,r,a]="step"===o?[gg(e),gg(t),"straight"]:[e,t,o];return`${qa(n,a)}${qa([...r].reverse(),a).replace(/^M/,"L")}Z`}function vg(e,t){return"step"===t?qa(gg(e),"straight"):qa(e,t)}function _g(e,t,o,n,r={}){const a=wi(e.entity.config,n),i=e.entity.config.line_width??n.line_width,s=o.y(Math.min(Math.max(0,o.domain[0]),o.domain[1])),l=function(e){const t=e.entity.config.negative_color;return"string"==typeof t&&t.trim()?je(t.trim()):e.color}(e),c=`cd-area-${e.index}`,d=`cd-area-line-${e.index}`,u=l!==e.color,h=q`${function(e,t,o,n,r=.42,a=.05){const i=Math.min(1,Math.max(0,n/Va));return q`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Va}>
    <stop offset="0" stop-color=${t} stop-opacity=${r}></stop>
    <stop offset=${i} stop-color=${t} stop-opacity=${a}></stop>
    <stop offset=${i} stop-color=${o} stop-opacity=${a}></stop>
    <stop offset="1" stop-color=${o} stop-opacity=${r}></stop>
  </linearGradient>`}(c,e.color,l,s,r.stacked?.6:.42,r.stacked?.35:.05)}
    ${u?function(e,t,o,n){const r=Math.min(1,Math.max(0,n/Va));return q`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Va}>
    <stop offset=${r} stop-color=${t}></stop>
    <stop offset=${r} stop-color=${o}></stop>
  </linearGradient>`}(d,e.color,l,s):Z}`,p=[],m=[],f=[];if(r.layers){const n=r.layers;let a=[];const i=()=>{if(a.length){const r=a.map(e=>[o.x(t[e].t),o.y(n[e][1])]),i=a.map(e=>[o.x(t[e].t),o.y(n[e][0])]);p.push(yg(r,i,e.curve)),m.push(vg(r,e.curve))}a=[]};for(let e=0;e<t.length;e++)n[e]?a.push(e):i();i()}else for(const v of Ba(t)){const t=v.map(e=>[o.x(e.t),o.y(e.v)]);p.push(yg(t,t.map(([e])=>[e,s]),e.curve)),m.push(vg(t,e.curve))}if(a.dots){const e=r.range;t.forEach((t,n)=>{if(null===t.v||e&&(t.t===e.start||t.t===e.end))return;const a=r.layers?r.layers[n]?.[1]:t.v;void 0!==a&&f.push([o.x(t.t),o.y(a)])})}const g=i??2,y=u?`url(#${d})`:e.color;return{defs:h,body:q`<g class="series" data-series=${e.index}>
    <path class="fill" d=${p.join("")} fill="url(#${c})" stroke="none"></path>
    <path class="line ${e.dash?"dashed":""}" d=${m.join("")} fill="none" stroke=${y}
      style="stroke-width:${g}px"></path>
    ${f.length>0&&f.length<=200?q`<path class="dots" d=${ki(f)} fill="none" stroke=${y}
            style="stroke-width:${Mi(g)}px"></path>`:Z}
  </g>`}}const bg=[...pf,mf,{name:"curve",path:["curve"],default:"smooth"},{name:"stack",path:["stack"],default:"none"},{name:"line_width",path:["line_width"],default:2},{name:"dots",path:["dots"],default:!1},...Mf,...Ef,...Qc,...$f,...vl,...wc];const xg={name:"negative_color",path:["negative_color"]},wg=new Map;const $g=a`
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
`,kg={layout:"chart",group:"history",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${Sd}
    ${cc}
    ${$g}
    ${md}
    ${Tc}
    ${dd}
  `,thumbnail:()=>q`
    <defs>
      <linearGradient id="cd-thumb-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.5" />
        <stop offset="1" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10 V36 H4 Z" fill="url(#cd-thumb-area)" />
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){Xa(e),Fs(e),Zc(e),_d(e),Si(e),ac(e),_l(e),Mc(e),td(e),nl(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t.negative_color;if(void 0!==e&&"string"!=typeof e)throw new Error(`"negative_color" of ${t.entity} must be a colour`)}}(e)},editor:function(e){const t=Tf(`area|${ff(e.config)}|${kc(e.config)}`,e.hass,()=>[...gf(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:hf(e.hass,"curve",Ha)},{name:"stack",selector:hf(e.hass,"stack",ol)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Ui},{name:"dots",selector:{boolean:{}}}]},...zf(e.hass),...Sf(e.hass),...ed,...kf(e.hass),{type:"grid",name:"",schema:[{name:"summary_text",selector:{text:{}}},{name:"summary_show",selector:{boolean:{}}}]},...$c(e.config)]);return R`${Rf(e,"chart",t,bg)}${Fl(e)}`},entityFields:function(e,t){const o=!0===t.dots;let n=wg.get(o);return n||(n=[...Hi(o),xg],wg.set(o,n)),{schema:Tf("area-entity",e,()=>[...Yi(e),{name:"negative_color",selector:{text:{}}}]),fields:n}},watch:e=>jr(e),disconnect(e){ni(e),Xl(e),qc(e),id(e)},render:function(e){const t=e.raw.stack??"none",o=Ja(e,Date.now(),{ghost:"none"===t&&Ma(e.raw)}),n=ti(o,e),r=ri(o,e),a=Nc(e,ic(e.raw),n===Z&&r===Z?Z:R`${n}${r}`),{layout:i,header:s}=a,l=ai(o,e);if(l)return sc("over"===i.header?{...i,header:"above"}:i,s,l);if(a.table)return sc(i,s,Fc(e,o,{heading:og}));const c=o.series.map(e=>({...e,points:Dl(e.points,500)}));let d,u,h=c;const p={};let m=Z;if("none"===t){const t=ws([...c.map(e=>e.points),...c.flatMap(e=>e.hidden?[e.hidden]:[])]);u=Jl({...e,raw:fg(t,e.raw)},o.range,t);const n=u.scales,r=$i(c,t=>wi(t.entity.config,e.raw).onTop);d=r.map(t=>_g(t,t.points,n,e.raw,{range:o.range})),m=ud(c,n)}else{const n=function(e){const t=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t);return{times:t,values:e.map(e=>t.map(t=>rl(e,t)))}}(c.map(e=>e.points)),r=al(n.values,t),a=il(n.values);h=c.map((e,t)=>({...e,points:n.times.map((e,o)=>({t:e,v:n.values[t][o]}))}));const i=sl(r),s="percent"===t?{y_min:i[0]<0?-100:0,y_max:i[1]>0?100:0}:{};u=Jl({...e,raw:fg(i,{...s,...e.raw})},o.range,i);const l=u.scales;d=h.map((t,n)=>_g(t,t.points,l,e.raw,{layers:r[n],stacked:!0,range:o.range})).reverse();const m=new Map;h.forEach(e=>e.points.forEach((e,t)=>m.set(e,t))),p.dotY=(e,t)=>{const o=r[e.index][m.get(t)??-1];return o?l.y(o[1]):null};const f=Gc(h),g=Math.max(...h.map(e=>e.entity.decimals));p.footer=t=>{const o=t.length?m.get(t[0].p):void 0;return Xc(e,void 0===o?null:a[o],f,g)},"percent"===t&&(p.text=(t,o)=>{const n=o?r[t.index][m.get(o)??-1]:null;if(!o||null===o.v||!n)return"—";const a=Math.round(Math.abs(n[1]-n[0]));return`${Bt(Wt(co(t.entity,o.v),t.entity.decimals,e.hass),t.entity.unit)} · ${a} %`})}const f=Bc(e.raw),g=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_area"),names:o.series.map(e=>e.entity.name).join(", ")}),y=cd(e,h,u.scales,o.range,g,p);return sc(i,s,oc({axes:u,ctx:e,content:q`${m}${d.map(e=>e.body)}`,summary:$l(e,o.series,{range:o.range,live:o.live}),defs:q`${d.map(e=>e.defs)}`,label:g,overlay:R`${"over"===i.header?lc(s):Z}
      ${f?Kc(e,h,u.scales,Wc(e.host),Kl(e),{...p,after:Md(e,h,Wc(e.host))}):Z}
      ${y.layer}`,hover:f?Vc(e,o.range,h.map(e=>e.points)):void 0,tap:Ed(e,o.range,h),...pd(e,o,o.range,u.scales),keys:y.keys}))}},Mg={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:a`
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
  `,render(e,{show:t,hass:o}){const n=t.value||!e.available,r=R`${t.name?R`<span class="name">${e.name}</span>`:Z}${n?R`<span class="value">${e.display}</span>`:Z}`;return R`
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Zh(e)}
            ></ha-state-icon>`:Z}
      <div class="track">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:Z}
        <div class="text">${r}</div>
        ${e.available?R`<div class="text on-fill ${Le(e.band.color)}" aria-hidden="true">${r}</div>`:Z}
      </div>
    `}};function zg(e,t){const o=e.reduce((e,t)=>e+t.w,0);let n,r=0;for(const a of e){const e=(r+a.w/2)/o;if(r+=a.w,t<=e)return n?n.v+(a.v-n.v)*(t-n.at)/(e-n.at):a.v;n={at:e,v:a.v}}return e[e.length-1].v}const Eg=["tukey","range"];function Sg(e,t){if(e.length<=t)return[...e];const o=[];for(let n=0;n<t;n++)o.push(e[Math.floor(n*e.length/t)]);return o}const Ag=e=>"number"==typeof e&&Number.isFinite(e);function jg(e){for(const t of["x_min","x_max"])if(void 0!==e[t]&&!Ag(e[t]))throw new Error(`"${t}" must be a number`);if(Ag(e.x_min)&&Ag(e.x_max)&&e.x_min>=e.x_max)throw new Error('"x_min" must be below "x_max"')}const Cg=[{name:"x_min",path:["x_min"]},{name:"x_max",path:["x_max"]}],Ng=[{type:"grid",name:"",schema:[{name:"x_min",selector:{number:{mode:"box",step:"any"}}},{name:"x_max",selector:{number:{mode:"box",step:"any"}}}]}];function Lg(e){return{min:Ag(e.x_min)?e.x_min:void 0,max:Ag(e.x_max)?e.x_max:void 0}}function Fg(e,t,o,n={}){const r=Ts(e.raw),a=Math.max(2,Math.min(8,Math.round(Gl(e)/70))),i=Us(t,n.x??{},a),s=Us(o,{min:r.min??n.yFloor,max:r.max},4);return{options:r,value:s,times:i.ticks,unit:"minute",range:{start:i.domain[0],end:i.domain[1]},scales:{x:ks(i.domain,[0,Za]),y:ks(s.domain,[Va,0]),domain:s.domain}}}function Tg(e){const[t,o]=e.times;return void 0===t||void 0===o?0:Math.max(0,-Math.floor(Math.log10(Math.abs(o-t))+1e-9))}const Og=new WeakMap;function Pg(e){return Og.get(e)?.i}function Dg(e){const t=Og.get(e);void 0!==t?.timer&&clearTimeout(t.timer),Og.delete(e)}function Ug(e,t){const o=function(e){let t=Og.get(e);return t||(t={},Og.set(e,t)),t}(e.host),n=t=>{t!==o.i&&(o.i=t,e.requestUpdate())},r=()=>{void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0};return{move(e){r();const o=e.currentTarget.getBoundingClientRect(),a=o.width>0?Math.min(1,Math.max(0,(e.clientX-o.left)/o.width)):0,i=o.height>0?Math.min(1,Math.max(0,(e.clientY-o.top)/o.height)):0;n(t(a,i,o.width,o.height))},leave(e){r(),"touch"===e.pointerType||"pen"===e.pointerType?o.timer=setTimeout(()=>{o.timer=void 0,n(void 0)},Pc):n(void 0)}}}const Ig=e=>Math.round(1e4*e)/100+"%";function Hg(e){const{x:t,y:o,plotWidth:n,title:r,rows:a,dot:i,band:s}=e;if(!(t>=0&&t<=1))return Z;const l=Oc(t,n);return R`<div class="hover-layer" aria-hidden="true">
    ${s?R`<div class="pick-band" style="left:${Ig(s[0])};width:${Ig(s[1]-s[0])}"></div>`:Z}
    ${i&&o>=0&&o<=1?R`<span class="hover-dot" style="left:${Ig(t)};top:${Ig(o)};background:${i}"></span>`:Z}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${Ig(t)}`}>
      <div class="tooltip-time">${r}</div>
      ${a.map(e=>R`<div class="tooltip-row">
            ${e.color?R`<span class="swatch" style="background:${e.color}"></span>`:Z}
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${e.value}</span>
          </div>`)}
    </div>
  </div>`}const Wg=a`
  .pick-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
`,Rg=["vertical","horizontal"],qg=.72;function Bg(e,t){const o=e.bounds.length>1,n=o?e.bounds.slice(0,-1).map((t,o)=>[t,e.bounds[o+1]]):[[e.range.start,e.range.end]],r=[];return n.forEach(([n,a],i)=>{const s=Math.min(a,e.until);e.series.forEach((a,l)=>{let c,d;"statistics"===e.source?({samples:c,extremes:d}=function(e,t,o){const n=[];let r=1/0,a=-1/0;for(const i of e)i.t<t||i.t>=o||i.carried||null===i.v||(n.push({v:i.v,w:1}),r=Math.min(r,i.v,"number"==typeof i.min?i.min:i.v),a=Math.max(a,i.v,"number"==typeof i.max?i.max:i.v));return{samples:n,extremes:n.length?[r,a]:void 0}}(a.points,n,s)):c=function(e,t,o){const n=[];if(o<=t)return n;for(let r=0;r<e.length;r++){const a=e[r];if(a.t>=o)break;const i=r+1<e.length?e[r+1].t:1/0,s=Math.max(a.t,t),l=Math.min(i,o);l<=s||null===a.v||n.push({v:a.v,w:l-s})}return n}(a.points,n,s);const u=function(e,t,o){const n=e.filter(e=>e.w>0&&Number.isFinite(e.v)).sort((e,t)=>e.v-t.v);if(0===n.length)return;const r=zg(n,.25),a=zg(n,.5),i=zg(n,.75),s=n.reduce((e,t)=>e+t.w,0),l=n.reduce((e,t)=>e+t.v*t.w,0)/s,c=Math.min(n[0].v,o?.[0]??1/0),d=Math.max(n[n.length-1].v,o?.[1]??-1/0),u={count:n.length,q1:r,median:a,q3:i,mean:l,min:c,max:d};if("range"===t)return{...u,low:c,high:d,outliers:[]};const h=1.5*(i-r),p=n.filter(e=>e.v>=r-h&&e.v<=i+h),m=Math.min(p[0]?.v??r,r),f=Math.max(p[p.length-1]?.v??i,i);let g=[...new Set(n.filter(e=>e.v<m||e.v>f).map(e=>e.v))];return g.length>60&&(g=g.map(e=>({v:e,d:e<m?m-e:e-f})).sort((e,t)=>t.d-e.d).slice(0,60).map(e=>e.v).sort((e,t)=>e-t)),{...u,low:m,high:f,outliers:g}}(c,t,d);u&&r.push({category:o?i:l,slot:o?l:0,series:a,stats:u,readings:Sg(c.map(e=>e.v),120)})})}),{boxes:r,categories:o?n.length:e.series.length,slots:o?e.series.length:1}}function Zg(e,t){const o=Math.max(1,Math.ceil(e/Math.max(1,t))),n=[];for(let r=0;r<e;r+=o)n.push(r);return n}const Vg=new Map;function Yg(e,t,o){const n=qg/t;return{centre:e.category-.36+n*(e.slot+.5),half:Math.min(.4*n,o)}}function Gg(e,t,o,n){const{stats:r,series:a}=e,{centre:i,half:s}=t,l=(e,t,o)=>q`<line class=${o} x1=${e[0]} y1=${e[1]} x2=${t[0]} y2=${t[1]}></line>`,[c,d]=o(i-s,r.q1),[u,h]=o(i+s,r.q3),p=n&&e.readings.length?q`<path class="readings" d=${ki(e.readings.map((e,t)=>o(i+function(e){const t=43758.5453*Math.sin(12.9898*(e+1));return 2*(t-Math.floor(t))-1}(t)*s*.8,e)))}></path>`:Z;return q`<g class="box" data-series=${a.index} style="--box-color:${a.color}">
    ${l(o(i,r.low),o(i,r.q1),"whisker")}
    ${l(o(i,r.q3),o(i,r.high),"whisker")}
    ${l(o(i-s/2,r.low),o(i+s/2,r.low),"cap")}
    ${l(o(i-s/2,r.high),o(i+s/2,r.high),"cap")}
    <rect
      class="body"
      x=${Math.min(c,u)}
      y=${Math.min(d,h)}
      width=${Math.abs(u-c)}
      height=${Math.abs(h-d)}
    ></rect>
    ${p}
    ${l(o(i-s,r.median),o(i+s,r.median),"median")}
    ${r.outliers.length?q`<path class="outliers" d=${ki(r.outliers.map(e=>o(i,e)))}></path>`:Z}
  </g>`}const Xg=[...pf,{name:"orientation",path:["orientation"],default:"vertical"},{name:"whiskers",path:["whiskers"],default:"tukey"},{name:"readings",path:["readings"],default:!1},...Mf,...$f];const Kg=[{name:"box_color",selector:{text:{}}}],Jg=[{name:"box_color",path:["color"]}],Qg={layout:"chart",group:"distribution",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
    ${Wg}
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
    </g>`,validate:function(e){Xa(e),Fs(e),Zc(e),ac(e);const t=e;if(void 0!==t.orientation&&!Rg.includes(t.orientation))throw new Error(`"orientation" must be one of: ${Rg.join(", ")}`);if(void 0!==t.whiskers&&!Eg.includes(t.whiskers))throw new Error(`"whiskers" must be one of: ${Eg.join(", ")}`);if(void 0!==t.readings&&"boolean"!=typeof t.readings)throw new Error('"readings" must be true or false')},editor:function(e){const t={...e.config,group_by:void 0},o=Tf(`box|${ff(t)}`,e.hass,()=>[...gf(e.hass,t),{type:"grid",name:"",schema:[{name:"orientation",selector:hf(e.hass,"orientation",Rg)},{name:"whiskers",selector:hf(e.hass,"whiskers",Eg)}]},{name:"readings",selector:{boolean:{}}},...zf(e.hass),...kf(e.hass)]);return Rf(e,"chart",o,Xg)},entityFields:()=>({schema:Kg,fields:Jg}),disconnect(e){ni(e),Xl(e),Dg(e)},render(e){const t=Pa(function(e,t=Date.now()){const o=xn(e.raw.period),n=e.raw.source??"history",r=pn(e.hass),a=$n(o,t,r,o.navigate?Mn(e.host,o):0),i=Gn(e.raw),s={start:i?cn(i.unit,a.start,r):a.start,end:a.end},l=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute,...pt(e.config)})),c="statistics"===n?{period:i?"hour"===i.unit?"5minute":"hour":Un(s),types:["mean","min","max"],value:"mean"}:void 0,d=lr(e.host,e.requestUpdate).get(e.hass,l,s,n,{live:a.live,statistics:c}),u=wa(e,s,a.live),h=e.items.map((e,t)=>{const o=e.config;return{index:t,entity:e,points:ka(e.config,Aa(d.data.get(Zn(l[t]))??[],e.conversion),u),color:je(o.color??Ya[t%Ya.length]),curve:"straight",dash:!1}}),p=Math.min(s.end,t);for(const m of h)Object.assign(m,Ka(m.entity,m.points,s,p,r,e.hass));return{status:$a(d.status,u),error:d.error,range:s,period:o,source:n,series:h,live:a.live,back:a.back,zone:r,bounds:i?un(i.unit,s.start,s.end,r):[],unit:i?.unit,until:p}}(e),e),o=ti(t,e),n=ri(t,e),r=o===Z&&n===Z?Z:R`${o}${n}`,a=ic(e.raw),i=ai(t,e);if(i)return sc("over"===a.header?{...a,header:"above"}:a,r,i);const s=e.raw,l=s.orientation??"vertical",c=s.whiskers??"tukey",{boxes:d,categories:u,slots:h}=Bg(t,c);let p=1/0,m=-1/0;for(const L of d)p=Math.min(p,L.stats.low,...L.stats.outliers,...!0===s.readings?L.readings:[]),m=Math.max(m,L.stats.high,...L.stats.outliers,...!0===s.readings?L.readings:[]);const f=t.bounds.length>1,g="vertical"===l,y=g?Math.max(4,Math.floor(Kl(e)/Math.max(1,u)/6.5)):16,v=o=>f?function(e,t,o){const n=e.bounds[t],r=e.range.end-e.range.start;return"hour"===e.unit?tl(n,"hour",r,o):"month"===e.unit?tl(n,"month",r,o):tl(n,"day","week"===e.unit?1/0:r,o)}(t,o,e.hass):((e,t=16)=>e.length>t?`${e.slice(0,t-1)}…`:e)(t.series[o]?.entity.name??"",y),_=Math.max(0,...Array.from({length:u},(e,t)=>v(t).length)),b=function(e,t,o,n,r,a=0){const i=Ts(e.raw),s={min:i.min,max:i.max},l=[-.5,o-.5];if("vertical"===t){const t=Kl(e),a=Us(n,s,4);return{options:i,value:a,times:Zg(o,Math.floor(t/r)),unit:"day",range:{start:l[0],end:l[1]},scales:{x:ks(l,[0,Za]),y:ks(a.domain,[Va,0]),domain:a.domain}}}const c=Gl(e)-32-(i.y&&"outside"===i.labels?a:0),d=Us(n,s,Math.max(2,Math.min(8,Math.round(c/70)))),u=!0===e.raw.compact?6:10;return{options:{...i,horizontal:i.vertical,vertical:i.horizontal},value:{domain:l,ticks:Zg(o,u),decimals:0},times:d.ticks,unit:"day",range:{start:d.domain[0],end:d.domain[1]},scales:{x:ks(d.domain,[0,Za]),y:ks(l,[0,Va]),domain:l}}}(e,l,u,d.length?[p,m]:void 0,f?56:1,6*_+12),x=g?b.scales.x:b.scales.y,w=g?b.scales.y:b.scales.x,$=(e,t)=>g?[x(e),w(t)]:[w(t),x(e)],k=g?Kl(e):a.compact?110:160,M=k>0?u/k*22:1/0,z=q`${d.map(e=>Gg(e,Yg(e,h,M),$,!0===s.readings))}`,E=Ze(e.hass,"box_aria",{names:t.series.map(e=>e.entity.name).join(", ")}),S=Bc(e.raw),A=S?Pg(e.host):void 0,j=(t,o)=>Bt(Wt(o,t.series.entity.decimals,e.hass),t.series.entity.unit);let C=Z;const N=void 0===A?void 0:d[A];if(N){const o=t=>Ze(e.hass,t),{stats:n}=N,r=[{name:o("box_highest"),value:j(N,n.max)},{name:o("box_upper_quartile"),value:j(N,n.q3)},{name:o("box_median"),value:j(N,n.median),color:N.series.color},{name:o("box_lower_quartile"),value:j(N,n.q1)},{name:o("box_lowest"),value:j(N,n.min)},{name:o("box_mean"),value:j(N,n.mean)},{name:o("box_count"),value:String(n.count)}];if(n.outliers.length){const e=n.outliers.length;r.push({name:o("box_outliers"),value:e>=60?`${e}+`:String(e)})}const a=Yg(N,h,M),i=f?`${function(e,t,o){const n="month"===t?{month:"long",year:"numeric"}:"hour"===t?{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:Xs(o)}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short"},r=o?.locale?.language??"en",a=`${r}|${t}|${Gs(o)}|${n.hour12}`;let i=Vg.get(a);if(!i){try{i=new Intl.DateTimeFormat(r,{...n,timeZone:Gs(o)})}catch{i=new Intl.DateTimeFormat("en",n)}Vg.set(a,i)}return i.format(e)}(t.bounds[N.category],t.unit,e.hass)}${h>1?` · ${N.series.entity.name}`:""}`:N.series.entity.name;C=Hg(g?{x:x(a.centre)/Za,y:w(n.median)/Va,plotWidth:Kl(e),title:i,rows:r,band:[x(N.category-.5)/Za,x(N.category+.5)/Za]}:{x:w(n.high)/Za,y:x(a.centre)/Va,plotWidth:Kl(e),title:i,rows:r})}return sc(a,r,oc({axes:b,ctx:e,content:z,label:E,overlay:R`${"over"===a.header?lc(r):Z}${C}`,hover:S?Ug(e,(e,t)=>function(e,t,o,n){const r=n*t-.5,a=Math.min(t-1,Math.max(0,Math.round(r))),i=r-a+.36;if(o>1&&(i<0||i>=qg))return;const s=Math.min(o-1,Math.max(0,Math.floor(i/(qg/o)))),l=e.findIndex(e=>e.category===a&&e.slot===s);return l<0?void 0:l}(d,u,h,g?e:t)):void 0,...g?{xLabel:v}:{yLabel:v,xLabel:t=>Wt(t,Tg(b),e.hass)}}))}},ey=["none","linear"];const ty=["entity","time"],oy=[2,80],ny=[2,30],ry=[0,20];function ay(e,t){const o=new Set;for(const i of e)for(const e of i)e.t!==t&&o.add(e.t);const n=[...o].sort((e,t)=>e-t),r=e.map(()=>-1),a=[];for(const i of n){const t=[];let o=!0;e.forEach((e,n)=>{for(;r[n]+1<e.length&&e[r[n]+1].t<=i;)r[n]++;const a=e[r[n]];a&&null!==a.v?t.push(a.v):o=!1}),o&&a.push({t:i,v:t})}return a}function iy(e,t){if(e.length<=t)return e;const o=e.length/t,n=[];for(let r=0;r<t-1;r++)n.push(e[Math.floor(r*o)]);return n.push(e[e.length-1]),n}function sy(e,t){let o=Math.floor(e/1e3)^Math.imul(t+1,2654435769)|0;return o=Math.imul(o^o>>>16,73244475),o=Math.imul(o^o>>>16,73244475),o^=o>>>16,(o>>>0)/4294967295*2-1}function ly(e,[t,o],n,r){const a=n*n+(r*r-n*n)*(o>t?Math.min(1,Math.max(0,(e-t)/(o-t))):.5);return Math.round(10*Math.sqrt(a))/10}const cy=e=>"number"==typeof e&&Number.isFinite(e);function dy(e,t,[o,n]){const r=e[t];if(void 0!==r&&(!cy(r)||r<o||r>n))throw new Error(`"${t}" must be a number from ${o} to ${n}`)}function uy(e,t){return{against:"bubble"===t?"entity":e.against??"entity",fit:"scatter"===t&&ey.includes(e.fit)?e.fit:"none",nowPoint:"scatter"===t&&!0===e.now_point,dotSize:cy(e.dot_size)?e.dot_size:6,jitter:cy(e.jitter)?e.jitter:0,minSize:cy(e.min_size)?e.min_size:6,maxSize:cy(e.max_size)?e.max_size:32}}function hy(e,t){if(Xa(e),Fs(e),Zc(e),ac(e),jg(e),dy(e,"jitter",ry),"scatter"===t){if(void 0!==e.against&&!ty.includes(e.against))throw new Error(`"against" must be one of: ${ty.join(", ")}`);if(dy(e,"dot_size",ny),void 0!==e.fit&&!ey.includes(e.fit))throw new Error(`"fit" must be one of: ${ey.join(", ")}`);if(void 0!==e.now_point&&"boolean"!=typeof e.now_point)throw new Error('"now_point" must be true or false')}else{dy(e,"min_size",oy),dy(e,"max_size",oy);const o=uy(e,t);if(o.minSize>o.maxSize)throw new Error('"min_size" must not be above "max_size"')}}function py(e,t){return je(e.entity.config.color??Ya[(e.index-t)%Ya.length])}const my=(e,t,o)=>Bt(Wt(e,t.entity.decimals,o),t.entity.unit);function fy(e,t,o,n){const r=Bt(Wt(e.slope,function(e,t=2){return Number.isFinite(e)&&0!==e?Math.min(6,Math.max(0,t-1-Math.floor(Math.log10(Math.abs(e))))):0}(e.slope),n),o.entity.unit),a=Ze(n,"scatter_fit_r2",{value:Wt(e.r2,2,n)});return`${t.entity.unit?Ze(n,"scatter_fit_slope",{value:r,unit:t.entity.unit}):Ze(n,"scatter_fit_slope_plain",{value:r})} · ${a}`}function gy(e,t,o=Date.now()){const n=uy(e.raw,t),{against:r}=n,a=ic(e.raw),i=Ja(e,o),s=ti(i,e),l="time"===r,c=l?0:1,d=i.series.map((e,o)=>l?e.color:"bubble"===t?1===o?py(e,1):void 0:0===o?void 0:py(e,c)),u=function(e,t,o,n){const{show:r}=o.config;return r.name||r.value?R`<div class="series-header">
    ${e.map((e,a)=>{const i=t[a],s=void 0!==i?R`<span class="swatch" style="background:${i}"></span>`:R`<span class="role"
              >${Ze(o.hass,"bubble"===n&&2===a?"bubble_role_size":"scatter_role_x")}</span
            >`;return R`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
        ${s} ${r.name?R`<span class="series-name">${e.entity.name}</span>`:Z}
        ${r.value?R`<span class="series-value">${e.entity.display}</span>`:Z}
      </div>`})}
  </div>`:Z}(i.series,d,e,t),h=s===Z&&u===Z?Z:R`${s}${u}`,p="over"===a.header?{...a,header:"above"}:a;if(i.series.length<function(e,t){return"bubble"===e?3:"entity"===t?2:1}(t,r))return sc(p,h,R`<div class="chart-message">
        ${Ze(e.hass,"bubble"===t?"bubble_needs_three":"scatter_needs_two")}
      </div>`);const m=ai(i,e);if(m)return sc(p,h,m);const f="history"!==i.source||i.group?void 0:Math.min(i.range.end,o),g=function(e,t,o,n){const{series:r}=e;if("time"===o)return r.map(e=>({s:e,samples:iy(e.points.filter(e=>null!==e.v&&e.t!==n&&!e.carried).map(e=>({t:e.t,v:[e.t,e.v]})),800)}));if("bubble"===t){const[e,t,o]=r;return[{s:t,samples:iy(ay([e.points,t.points,o.points],n),400)}]}const[a,...i]=r;return i.map(e=>{const t=ay([a.points,e.points],n);return{s:e,samples:iy(t,800),pairs:t}})}(i,t,r,f),y=g.flatMap(e=>e.samples);if(0===y.length)return sc(p,h,R`<div class="chart-message">${Ze(e.hass,"chart_no_data")}</div>`);const v="scatter"===t&&!l,_=i.series[0],b=v&&n.nowPoint&&i.range.end>=o?g.flatMap(({s:e})=>{const t=function(e,t){const o=e.entity.value,n=t.entity.value;return null!==o&&null!==n&&Number.isFinite(o)&&Number.isFinite(n)?[o,n]:void 0}(_,e);return t?[{s:e,v:t}]:[]}):[],x=[...y.map(e=>e.v[1]),...b.map(e=>e.v[1])],w=[Math.min(...x),Math.max(...x)];let $,k;if(l)$=Jl(e,i.range,ws(i.series.map(e=>e.points)));else{const t=[...y.map(e=>e.v[0]),...b.map(e=>e.v[0])];$=Fg(e,[Math.min(...t),Math.max(...t)],w,{x:Lg(e.raw)});const o=Tg($);k=t=>Wt(t,o,e.hass)}const{scales:M}=$,z=Kl(e)||1,E=n.jitter*Za/z,S=n.jitter*Va/(a.compact?96:162);const A="bubble"===t?y.map(e=>e.v[2]):[],j=A.length?[Math.min(...A),Math.max(...A)]:[0,0],C=g.flatMap(({s:e,samples:o})=>{const r=l?e.color:py(e,c);return o.map(o=>({series:e,t:o.t,x:M.x(o.v[0])+(E?sy(o.t,2*e.index)*E:0),y:M.y(o.v[1])+(S?sy(o.t,2*e.index+1)*S:0),v:l?[o.v[1]]:o.v,color:r,d:"bubble"===t?ly(o.v[2],j,n.minSize,n.maxSize):void 0}))}),N=v&&"linear"===n.fit?g.flatMap(({s:e,pairs:t})=>{const o=(t??[]).map(e=>[e.v[0],e.v[1]]),n=function(e){const t=e.length;if(t<2)return;let o=0,n=0;for(const[c,d]of e)o+=c,n+=d;o/=t,n/=t;let r=0,a=0,i=0;for(const[c,d]of e){const e=c-o,t=d-n;r+=e*e,a+=e*t,i+=t*t}const s=16*Number.EPSILON*Math.max(1,Math.abs(o));if(!(r>t*s*s))return;const l=a/r;return{slope:l,intercept:n-l*o,r2:i>0?Math.min(1,Math.max(0,a*a/(r*i))):1,n:t}}(o),r=o.map(e=>e[0]);return n?[{s:e,color:py(e,c),fit:n,span:[Math.min(...r),Math.max(...r)]}]:[]}):[],L=N.map(({s:e,color:t,fit:o,span:n})=>{const r=function(e,[t,o],[n,r]){const a=t=>e.intercept+e.slope*t;let i=Math.min(t,o),s=Math.max(t,o);const l=Math.min(n,r),c=Math.max(n,r);if(0===e.slope){if(e.intercept<l||e.intercept>c)return}else{const t=(l-e.intercept)/e.slope,o=(c-e.intercept)/e.slope;if(i=Math.max(i,Math.min(t,o)),s=Math.min(s,Math.max(t,o)),!(s>i))return}return[[i,a(i)],[s,a(s)]]}(o,[Math.max(n[0],$.range.start),Math.min(n[1],$.range.end)],M.domain);if(!r)return Z;const[a,i,s,l]=[M.x(r[0][0]),M.y(r[0][1]),M.x(r[1][0]),M.y(r[1][1])];return q`<line class="fit-halo" x1=${a} y1=${i} x2=${s} y2=${l}></line>
      <line class="fit-line" data-series=${e.index} x1=${a} y1=${i} x2=${s} y2=${l} stroke=${t}></line>`}),F=b.map(({s:t,v:o})=>{const n=M.x(o[0])/Za;return R`<span
      class="fit-now"
      style="left:${vy(n)};top:${vy(M.y(o[1])/Va)};border-color:${py(t,c)}"
      ><span class="fit-now-label ${n>.85?"end":""}">${Ze(e.hass,"scatter_now")}</span></span
    >`}),T="bubble"===t?q`${[...C].sort((e,t)=>(t.d??0)-(e.d??0)).map(e=>q`<path class="bubble" d=${ki([[e.x,e.y]])} stroke=${e.color} style="stroke-width:${e.d}px"></path>`)}`:q`${g.map(({s:e})=>{const t=C.filter(t=>t.series===e);return t.length?q`<path class="dots" data-series=${e.index} d=${ki(t.map(e=>[e.x,e.y]))}
                stroke=${t[0].color} style="stroke-width:${n.dotSize}px"></path>`:Z})}${L}`,O=Bc(e.raw),P=O?Pg(e.host):void 0,D=void 0!==P?C[P]:void 0,U=[Ze(e.hass,"chart_aria",{style:Ze(e.hass,`editor_style_${t}`),names:i.series.map(e=>e.entity.name).join(", ")}),...N.map(({s:t,fit:o})=>`${t.entity.name}: ${fy(o,_,t,e.hass)}`)].join(". "),I=Math.max(16,"bubble"===t?n.maxSize/2:n.dotSize);return sc(a,h,R`${oc({axes:$,ctx:e,content:T,label:U,xLabel:k,overlay:R`${"over"===a.header?lc(h):Z}
      ${F.length?R`<div class="fit-now-layer" aria-hidden="true">${F}</div>`:Z}
      ${D?yy(D,i,t,r,e,z):Z}`,hover:O?Ug(e,(e,t,o,n)=>function(e,t,o,n,r,a=24){let i,s=a*a;const l=t*n,c=o*r;return e.forEach(([e,t],o)=>{const a=e/Za*n-l,d=t/Va*r-c,u=a*a+d*d;u<=s&&(s=u,i=o)}),i}(C.map(e=>[e.x,e.y]),e,t,o,n,I)):void 0})}
    ${"bubble"===t?function(e,[t,o],n,r){const a=(t,o)=>R`<span class="size-item"
      ><span class="size-dot" style="width:${o}px;height:${o}px"></span>${my(t,e,r)}</span
    >`;return R`<div class="size-legend" aria-hidden="true">
    <span class="size-name">${e.entity.name}</span>
    ${a(t,ly(t,[t,o],n.minSize,n.maxSize))}
    ${o>t?a(o,ly(o,[t,o],n.minSize,n.maxSize)):Z}
  </div>`}(i.series[2],j,n,e.hass):Z}
    ${N.length?function(e,t,o){return R`<div class="fit-legend">
    ${e.map(({s:n,color:r,fit:a})=>R`<span class="fit-item"
          ><span class="fit-swatch" style="background:${r}"></span>${e.length>1?R`<span class="fit-name">${n.entity.name}</span>`:Z}<span class="fit-text">${fy(a,t,n,o)}</span></span
        >`)}
  </div>`}(N,_,e.hass):Z}`)}function yy(e,t,o,n,r,a){const i="time"===n?[e.series]:"bubble"===o?t.series.slice(0,3):[t.series[0],e.series];return Hg({x:e.x/Za,y:e.y/Va,plotWidth:a,title:el(e.t,r.hass),dot:e.color,rows:i.map((t,o)=>({color:t===e.series?e.color:void 0,name:t.entity.name,value:my(e.v[o],t,r.hass)}))})}const vy=e=>Math.round(1e4*e)/100+"%";const _y=a`
  ${si}
  ${nc}
  ${Jc}
  ${cc}
  ${Wg}
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
  .plot .fit-line {
    stroke-width: 2;
    stroke-linecap: round;
  }
  .plot .fit-halo {
    stroke: var(--card-background-color, #fff);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-opacity: 0.85;
  }
  .fit-now-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .fit-now {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid;
    box-shadow: 0 0 0 2px var(--card-background-color, #fff);
    transform: translate(-50%, -50%);
  }
  .fit-now-label {
    position: absolute;
    left: 100%;
    bottom: 100%;
    margin-left: 2px;
    font-size: 11px;
    line-height: 1;
    white-space: nowrap;
    color: var(--primary-text-color);
    text-shadow: 0 0 3px var(--card-background-color, #fff);
  }
  .fit-now-label.end {
    left: auto;
    right: 100%;
    margin-left: 0;
    margin-right: 2px;
  }
  .fit-legend {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 12px;
    padding-top: 6px;
    font-size: 0.8125em;
    color: var(--secondary-text-color);
  }
  .fit-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }
  .fit-swatch {
    flex: none;
    width: 14px;
    height: 2px;
    border-radius: 1px;
  }
  .fit-name {
    color: var(--primary-text-color);
  }
  .frame.compact .fit-legend {
    padding-top: 2px;
  }
`;function by(e){ni(e),Xl(e),qc(e),Dg(e)}const xy=Mf.map(e=>"x_axis"===e.name?{...e,name:"xy_x_axis"}:e);const wy=(e,t,o=1)=>({number:{min:e,max:t,step:o,mode:"box",unit_of_measurement:"px"}}),$y={scatter:[...pf,{name:"against",path:["against"],default:"entity"},{name:"dot_size",path:["dot_size"],default:6},{name:"jitter",path:["jitter"],default:0},{name:"scatter_fit",path:["fit"],default:"none"},{name:"scatter_now_point",path:["now_point"],default:!1},...Cg,...xy,...$f],bubble:[...pf,{name:"min_size",path:["min_size"],default:6},{name:"max_size",path:["max_size"],default:32},{name:"jitter",path:["jitter"],default:0},...Cg,...xy,...$f]};function ky(e){return t=>{const o="scatter"===e&&"time"===t.config.against,n=Tf(`${e}|${ff(t.config)}|${o}`,t.hass,()=>{return[...gf(t.hass,t.config),..."scatter"===e?[{name:"against",selector:hf(t.hass,"against",ty)},{type:"grid",name:"",schema:[{name:"dot_size",selector:wy(ny[0],ny[1])},{name:"jitter",selector:wy(ry[0],ry[1])}]},...o?[]:[{name:"scatter_fit",selector:hf(t.hass,"scatter_fit",ey)},{name:"scatter_now_point",selector:{boolean:{}}}]]:[{type:"grid",name:"",schema:[{name:"min_size",selector:wy(oy[0],oy[1])},{name:"max_size",selector:wy(oy[0],oy[1])}]},{name:"jitter",selector:wy(ry[0],ry[1])}],...o?[]:Ng,...(n=t.hass,[{type:"grid",name:"",schema:[{name:"xy_x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:hf(n,"axis_labels",zs)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]),...kf(t.hass,!1)];var n});return Rf(t,"chart",n,$y[e])}}const My=[{name:"dot_color",path:["color"]}],zy=[{name:"dot_color",selector:{text:{}}}];function Ey(){return{schema:zy,fields:My}}const Sy={layout:"chart",group:"distribution",height:270,styles:_y,thumbnail:()=>q`
    <g fill="var(--primary-color, #03a9f4)" fill-opacity="0.6">
      <circle cx="14" cy="28" r="4" /><circle cx="27" cy="20" r="7" /><circle cx="44" cy="24" r="5" />
      <circle cx="52" cy="11" r="8" /><circle cx="36" cy="33" r="3" />
    </g>`,validate:e=>hy(e,"bubble"),editor:ky("bubble"),entityFields:()=>Ey(),disconnect:by,render:e=>gy(e,"bubble")},Ay={from:0,to:1};const jy=(e,t,o)=>Math.min(o,Math.max(t,e));function Cy(e,t){const o=jy(t,0,1);let n=jy(e.to-e.from,o,1);Number.isFinite(n)||(n=1);const r=jy(Number.isFinite(e.from)?e.from:0,0,1-n);return{from:r,to:r+n}}function Ny(e){return e.from>1e-9||e.to<1-1e-9}function Ly(e,t,o,n){const r=e.to-e.from,a=e.from+jy(t,0,1)*r,i=jy(r/o,n,1),s=a-jy(t,0,1)*i;return Cy({from:s,to:s+i},n)}function Fy(e,t){const o=e.to-e.from,n=jy(e.from+t,0,1-o);return{from:n,to:n+o}}function Ty(e,t,o,n){const r=e.to-e.from,a=e.from+jy(Math.min(t,o),0,1)*r,i=e.from+jy(Math.max(t,o),0,1)*r;if(i-a>=n)return{from:a,to:i};const s=(a+i)/2;return Cy({from:s-n/2,to:s+n/2},n)}function Oy(e,t){const o=e.end-e.start;return{start:e.start+t.from*o,end:e.start+t.to*o}}function Py(e,t){if(0===e.length)return e;let o=0,n=e.length;for(;o<n;){const r=o+n>>1;(e[r].end??e[r].t)<t.start?o=r+1:n=r}const r=Math.max(0,o-1);let a=o;for(;a<e.length&&e[a].t<=t.end;)a++;const i=e.slice(r,Math.min(e.length,a+1));return i.length===e.length?e:i}const Dy=new WeakMap;function Uy(e,t){const o={zoom:!0===(n=e.raw).zoom,overview:!0===n.overview};var n;const r=t.range.end-t.range.start,a=r>0?Math.min(1,function(e){return e.group?2*{hour:36e5,day:864e5,week:6048e5,month:2592e6}[e.group.unit]:3e5}(t)/r):1,i=`${JSON.stringify(t.period)}|${t.back}|${t.group?.unit??""}|${t.source}`,s=function(e,t){let o=Dy.get(e);return o&&o.key===t||(o={key:t,window:Ay,pointers:new Map},Dy.set(e,o)),o}(e.host,i);o.zoom||o.overview||(s.window=Ay);const l=Cy(s.window,a),c=t=>{const o=Cy(t,a);o.from===s.window.from&&o.to===s.window.to||(s.window=o,e.requestUpdate())};return{options:o,window:l,zoomed:Ny(l),range:Oy(t.range,l),minSpan:a,current:()=>Cy(s.window,a),set:c,reset:()=>c(Ay)}}const Iy=e=>{const t=e.currentTarget.getBoundingClientRect();return{f:t.width>0?jy((e.clientX-t.left)/t.width,0,1):0,width:t.width}};function Hy(e){try{e.currentTarget.setPointerCapture?.(e.pointerId)}catch{}}const Wy=e=>e?.leave({pointerType:"mouse"});function Ry(e,t,o){const n=Dy.get(e.host),r=()=>{n.gesture=void 0,n.select&&(n.select=void 0,e.requestUpdate())};return{down(e){const{f:r,width:a}=Iy(e);if(n.pointers.set(e.pointerId,r),2===n.pointers.size){const[e,r]=[...n.pointers.values()];return n.gesture={kind:"pinch",w0:t.current(),start:e<=r?[e,r]:[r,e]},n.select=void 0,void Wy(o)}if(!(n.pointers.size>2)){if("mouse"===e.pointerType&&0===e.button){const o=t.current();n.gesture={kind:Ny(o)?"pan":"select",x0:r,w0:o,moved:!1,px:a},Hy(e)}o?.move(e)}},move(r){if(!n.pointers.has(r.pointerId))return void o?.move(r);const{f:a}=Iy(r);n.pointers.set(r.pointerId,a);const i=n.gesture;if("pinch"===i?.kind){if(n.pointers.size<2)return;const[e,o]=[...n.pointers.values()];return void t.set(function(e,t,o,n){const r=e.to-e.from,a=e.from+t[0]*r,i=e.from+t[1]*r,s=o[1]-o[0];if(Math.abs(s)<.02||Math.abs(t[1]-t[0])<.02)return Fy(e,-((o[0]+o[1])/2-(t[0]+t[1])/2)*r);const l=jy((i-a)/s,n,1),c=a-o[0]*l;return Cy({from:c,to:c+l},n)}(i.w0,i.start,e<=o?[e,o]:[o,e],t.minSpan))}if(i&&("pan"===i.kind||"select"===i.kind))return!i.moved&&Math.abs(a-i.x0)*i.px<4?void o?.move(r):(i.moved||Wy(o),i.moved=!0,void("pan"===i.kind?t.set(Fy(i.w0,-(a-i.x0)*(i.w0.to-i.w0.from))):(n.select=[i.x0,a],e.requestUpdate())));o?.move(r)},up(e){const{f:o,width:a}=Iy(e),i=n.gesture;if(n.pointers.delete(e.pointerId),"pinch"===i?.kind)return void(0===n.pointers.size&&(n.gesture=void 0));"select"===i?.kind&&i.moved&&t.set(Ty(i.w0,i.x0,o,t.minSpan));const s=!i||!("moved"in i)||!i.moved;if(r(),"mouse"!==e.pointerType&&s){const r=e.timeStamp||Date.now(),i=n.lastTap;i&&r-i.at<300&&Math.abs(o-i.x)*a<30?(n.lastTap=void 0,t.reset()):n.lastTap={at:r,x:o}}},cancel(e){n.pointers.delete(e.pointerId),"pinch"===n.gesture?.kind&&n.pointers.size>=2||(r(),o?.leave(e))},leave(e){n.gesture&&"mouse"===e.pointerType||(n.pointers.delete(e.pointerId),o?.leave(e))},wheel(e){const{f:o}=Iy(e);if(e.ctrlKey||e.metaKey){e.preventDefault();const n=1===e.deltaMode?16*e.deltaY:e.deltaY;return void t.set(Ly(t.current(),o,Math.exp(-jy(n,-100,100)/200),t.minSpan))}const n=e.shiftKey&&0===e.deltaX?e.deltaY:e.deltaX,r=t.current();if(Ny(r)&&Math.abs(n)>Math.abs(e.shiftKey?0:e.deltaY)){e.preventDefault();const{width:o}=Iy(e);t.set(Fy(r,n/Math.max(o,1)*(r.to-r.from)))}},dblclick(){t.reset()}}}function qy(e,t){const o=Dy.get(e.host),n=o?.select,r=n?R`<div
        class="zoom-select"
        style="left:${100*Math.min(...n)}%;width:${100*Math.abs(n[1]-n[0])}%"
      ></div>`:Z,a=t.zoomed?R`<button
        class="zoom-reset"
        title=${Ze(e.hass,"zoom_reset")}
        @pointerdown=${e=>e.stopPropagation()}
        @click=${e=>{e.stopPropagation(),t.reset()}}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${By}></path></svg>
        <span>${Ze(e.hass,"zoom_reset")}</span>
      </button>`:Z;return r===Z&&a===Z?Z:R`${r}${a}`}const By="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z";const Zy=a`
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
`,Vy="chartdeck-sync";const Yy=new WeakMap;function Gy(e,t){const o=Yy.get(e);o&&window.dispatchEvent(new CustomEvent(Vy,{detail:{group:o.group,source:e,message:t}}))}function Xy(e){const t=Yy.get(e);t&&window.removeEventListener(Vy,t.listener),Yy.delete(e)}function Ky(e,t,o){const n="string"==typeof(r=e.raw).sync&&""!==r.sync.trim()?r.sync.trim():void 0;var r;let a=Yy.get(e.host);if(!n)return void(a&&Xy(e.host));if(!a||a.group!==n){a&&Xy(e.host);const t={group:n,handlers:new Map,ctx:e,listener:()=>{}};t.listener=e=>function(e,t){if(!t||t.group!==e.group||t.source===e.ctx.host)return;const o=t.message;if("hover"===o.type){if(o.t===e.remote)return;e.remote=o.t,e.ctx.requestUpdate()}else if("period"===o.type){const t={period:JSON.parse(o.period)};if(o.period!==e.period||!t.period.navigate||Mn(e.ctx.host,t.period)===o.steps)return;zn(e.ctx.host,t.period,o.steps),e.steps=o.steps,e.ctx.requestUpdate()}e.handlers.get(o.type)?.(o)}(t,e.detail),window.addEventListener(Vy,t.listener),Yy.set(e.host,t),a=t}a.ctx=e,o!==a.sent&&(a.sent=o,Gy(e.host,{type:"hover",t:o}));const i=(e=>JSON.stringify(e.period))(t),s=t.period.navigate?Mn(e.host,t.period):0;return a.period===i&&a.steps!==s&&Gy(e.host,{type:"period",period:i,steps:s}),a.period=i,a.steps=s,void 0===o?a.remote:void 0}const Jy=["series","bands"];function Qy(e,t,o){const n=e=>{const t=(Va-o.y(e))/Va;return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0},r=[];return t.forEach((e,o)=>{const a=Number.isFinite(e.from)?n(e.from):0,i=o+1<t.length?n(t[o+1].from):1,s=je(e.color);r.push(q`<stop offset=${a} stop-color=${s}></stop><stop offset=${i} stop-color=${s}></stop>`)}),q`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${Va} y2="0">
    ${r}
  </linearGradient>`}function ev(e,t,o,n,r){const a=wi(e.entity.config,r),i=Dl(e.points,500),s=Ba(i).map(o=>qa(o.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join(""),l=a.dots?i.filter(e=>null!==e.v&&e.t!==n.start&&e.t!==n.end):[],c=l.length>0&&l.length<=200?q`<path
          class="dots"
          d=${ki(l.map(e=>[t.x(e.t),t.y(e.v)]))}
          fill="none"
          stroke=${o}
          style="stroke-width:${Mi(a.width)}px"
        ></path>`:Z;return q`<g class="series" data-series=${e.index}>
    <path
      class="line ${e.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${o}
      style="stroke-width:${a.width}px"
    ></path>
    ${c}
  </g>`}function tv(e,t,o,n,r,a,i){const{range:s}=e;return Dd(t.map(e=>({points:e.points.filter(e=>e.t>=o.start&&e.t<=o.end),decimals:e.entity.decimals,color:e.color})),r,{at:e=>[n.x(e.t)/Za,n.y(e.v)/Va],width:Kl(i),height:a?96:162,skip:t=>void 0===e.group&&(t.t===s.start||t.t===s.end)},i.hass)}function ov(e,t){const o="outside"===t.labels;return(e?110:180)-(o&&t.x?e?14:18:0)-(o&&t.y?6:0)}function nv(e,t,o){const n=e.series.reduce((e,t)=>e+t.entity.name.length+t.entity.display.length+6,0);return{l:0,t:0,r:Math.min(o,8*n),b:t?24:34}}const rv={layout:"chart",group:"history",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${Sd}
    ${cc}
    ${Zy}
    ${Tp}
    ${Ah}
    ${Ud}
    ${eu}
    ${Th}
    ${md}
    ${Mu}
    ${Zu}
    ${hh}
    ${cf}
    ${Mm}
    ${Tc}
    ${dd}
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
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(e){if(Xa(e),Fs(e),Zc(e),_d(e),Si(e),ac(e),_l(e),function(e){for(const t of["zoom","overview"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`)}(e),_p(e),function(e){const t=e;if(void 0!==t.labels&&"boolean"!=typeof t.labels)throw new Error('"labels" must be true or false');if(void 0!==t.labels_show&&!Ad.includes(t.labels_show))throw new Error(`"labels_show" must be one of: ${Ad.join(", ")}`);if(void 0!==t.labels_position&&!jd.includes(t.labels_position))throw new Error(`"labels_position" must be one of: ${jd.join(", ")}`);if(void 0!==t.labels_overlap&&"boolean"!=typeof t.labels_overlap)throw new Error('"labels_overlap" must be true or false')}(e),function(e){const t=e.extremes;if(void 0!==t){if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"extremes" must have "min", "max" (true or false) and "average"');const e=t;for(const t of["min","max"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"extremes.${t}" must be true or false`);if(void 0!==e.average&&!Id.includes(e.average))throw new Error(`"extremes.average" must be one of: ${Id.join(", ")}`)}for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o.extremes;if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"extremes" of ${o.entity} must be true or false`)}}(e),function(e){if(void 0!==e.sync&&("string"!=typeof e.sync||""===e.sync.trim()))throw new Error('"sync" must be a group name')}(e),function(e){if(void 0!==e.multiples&&"boolean"!=typeof e.multiples)throw new Error('"multiples" must be true or false');if(void 0!==e.multiples_scale&&!Lh.includes(e.multiples_scale))throw new Error(`"multiples_scale" must be one of: ${Lh.join(", ")}`);const t=e.multiples_columns;if(void 0!==t&&!(Number.isInteger(t)&&t>=1&&t<=6))throw new Error('"multiples_columns" must be a whole number from 1 to 6')}(e),function(e){const t=e.forecast_hours;if(void 0!==t&&!("number"==typeof t&&Number.isFinite(t)&&t>0))throw new Error('"forecast_hours" must be a number above 0');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o.forecast;if(void 0===e)continue;const t=`"forecast" of ${o.entity}`;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`${t} must have an "entity"`);const n=e;if(void 0!==n.entity&&!du(n.entity))throw new Error(`"forecast.entity" of ${o.entity} must be an entity id`);for(const r of["attribute","value_key","time_key"])if(!uu(n[r]))throw new Error(`"forecast.${r}" of ${o.entity} must be text`);if(void 0!==n.type&&!su.includes(n.type))throw new Error(`"forecast.type" of ${o.entity} must be one of: ${su.join(", ")}`);if(void 0!==n.multiply&&("number"!=typeof n.multiply||!Number.isFinite(n.multiply)))throw new Error(`"forecast.multiply" of ${o.entity} must be a number`)}}(e),function(e){const t=e;for(const n of["anomalies","anomalies_band"])if(void 0!==t[n]&&"boolean"!=typeof t[n])throw new Error(`"${n}" must be true or false`);if(void 0!==t.anomalies_window&&"auto"!==t.anomalies_window&&void 0===Ou(t.anomalies_window))throw new Error('"anomalies_window" must be a time such as 30min, 2h or 1d (or auto)');const o=t.anomalies_sigma;if(void 0!==o&&!("number"==typeof o&&Number.isFinite(o)&&o>0))throw new Error('"anomalies_sigma" must be a number above 0');if(void 0!==t.anomalies_color&&"string"!=typeof t.anomalies_color)throw new Error('"anomalies_color" must be text')}(e),function(e){const t=th(e),o=t.find(e=>void 0===eh(e));if(void 0!==o)throw new Error(`"compare" has "${String(o)}": use 1d, 7d, 1y, 3mo or 12h`);if(t.length>4)throw new Error('"compare" can have at most 4 offsets');const n=e.compare_style;if(void 0!==n&&!Xu.includes(n))throw new Error(`"compare_style" must be one of: ${Xu.join(", ")}`)}(e),of(e),function(e){const t=e.goal;if(void 0===t)return;if(!um(t))throw new Error('"goal" must have a "target"');const o=t.target;if(!(void 0===o||dm(o)||"number"==typeof o&&Number.isFinite(o)))throw new Error('"goal.target" must be a number or an entity id');const n=[["period",am],["direction",im],["project",sm]];for(const[i,s]of n)if(void 0!==t[i]&&!s.includes(t[i]))throw new Error(`"goal.${i}" must be one of: ${s.join(", ")}`);const r=e.entities?.[0],a=um(r)?r.transform:void 0;if(void 0!==a&&"cumulative"!==a)throw new Error(`"goal" paces the first entity's running total, so that entity can't also have "transform: ${String(a)}"`)}(e),function(e){const t=e;for(const a of["normal_range","normal_range_median","normal_range_marks"])if(void 0!==t[a]&&"boolean"!=typeof t[a])throw new Error(`"${a}" must be true or false`);const o=t.normal_range_weeks;if(void 0!==o&&!(Number.isInteger(o)&&o>=1&&o<=12))throw new Error('"normal_range_weeks" must be a whole number from 1 to 12');if(void 0!==t.normal_range_days&&!fh.includes(t.normal_range_days))throw new Error(`"normal_range_days" must be one of: ${fh.join(", ")}`);for(const a of["normal_range_low","normal_range_high"])if(void 0!==t[a]&&!vh(t[a]))throw new Error(`"${a}" must be a number from 0 to 100`);if(!((t.normal_range_low??10)<(t.normal_range_high??90)))throw new Error('"normal_range_low" must be below "normal_range_high"');if(void 0!==t.normal_range_color&&"string"!=typeof t.normal_range_color)throw new Error('"normal_range_color" must be text');if(!0!==t.normal_range)return;if(void 0!==e.goal)throw new Error('"normal_range" can\'t be used with "goal": the goal draws a running total');const n=(e.entities??[]).filter(e=>"object"==typeof e&&null!==e),r=n.find(e=>void 0!==e.transform);if(r)throw new Error(`"normal_range" can't be used with "transform: ${String(r.transform)}": the usual range is worked out from the readings themselves`);if(Ar(e)&&(e.entities??[]).some(t=>Sr("string"==typeof t?{}:t,e)))throw new Error('"normal_range" can\'t be used with "cost": the usual range is in the entity\'s own unit, not money')}(e),Mc(e),td(e),void 0!==e.color_by&&!Jy.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Jy.join(", ")}`)},editor:function(e){const t=Tf(`line|${ff(e.config)}|${o=e.config,!0===o?.labels?"labels":""}|${(e=>!0===e?.multiples?"multiples":"")(e.config)}|${Au(e.config)}|${Yu(e.config)}|${ph(e.config)}|${Ch(e.config)}|${kc(e.config)}`,e.hass,()=>{return[...gf(e.hass,e.config),...mh(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:hf(e.hass,"curve",Ha)},{name:"color_by",selector:hf(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Ui},{name:"dots",selector:{boolean:{}}}]},...Cf(e.hass,e.config),...zf(e.hass),...Sf(e.hass),...ed,{name:"y_scale",selector:hf(e.hass,"y_scale",Ms)},...Af,...ju(e.config),...jf,...uf(e.hass),...(t=e.hass,[{type:"grid",name:"",schema:[{name:"extremes_max",selector:{boolean:{}}},{name:"extremes_min",selector:{boolean:{}}}]},{name:"extremes_average",selector:{select:{mode:"dropdown",options:Id.map(e=>({value:e,label:Ze(t,`editor_extremes_average_${e}`)}))}}}]),...Gu(e.config),...Nh(e.hass,e.config),...Nf,...kf(e.hass),...$c(e.config),...Lf(e.hass,e.config),{type:"grid",name:"",schema:[{name:"summary_text",selector:{text:{}}},{name:"summary_show",selector:{boolean:{}}}]}];var t});var o;return R`${Rf(e,"chart",t,qf)}${Fl(e)}${Cm(e)}${rm(e)}`},entityFields:(e,t)=>{const o=Yi(e),n=Hi(!0===t.dots);return function(e,t){const o=Be(e);let n=Cu.get(o);if(!n||n.base!==t.schema){const r=t=>Ze(e,t);n={base:t.schema,schema:[...t.schema,{type:"expandable",name:"",flatten:!0,title:r("editor_forecast_title"),schema:[{name:"forecast_entity",selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"forecast_attribute",selector:{text:{}}},{name:"forecast_type",selector:{select:{mode:"dropdown",options:su.map(e=>({value:e,label:r(`editor_forecast_type_${e}`)}))}}},{name:"forecast_value_key",selector:{text:{}}},{name:"forecast_time_key",selector:{text:{}}},{name:"forecast_multiply",selector:{number:{mode:"box",step:"any"}}}]}]}]},Cu.set(o,n)}let r=Nu.get(t.fields);return r||(r=[...t.fields,...zu],Nu.set(t.fields,r)),{schema:n.schema,fields:r}}(e,Bd(qd(t))?{schema:ru(o,e),fields:iu(n)}:{schema:o,fields:n})},watch:e=>[...xp(e),...pu(e),...jr(e),...pm(e)],disconnect(e){ni(e),Xl(e),qc(e),function(e){Dy.delete(e)}(e),Sp(e),Xy(e),function(e){_u(e,new Set),vu.delete(e)}(e),function(e){for(const t of rh.get(e)?.values()??[])t.pause()}(e),sf(e),function(e){const t=$h.get(e);t?.statistics.pause(),t?.history.pause()}(e),id(e)},render(e){const t=function(e){const t=hm(e.raw);if(!t)return e;const o=um(e.raw.period)?e.raw.period:{},n={...e.raw,period:{calendar:t.period,until:"end",...void 0!==o.offset?{offset:o.offset}:{},...void 0!==o.navigate?{navigate:o.navigate}:{}}};delete n.group_by,delete n.aggregate,void 0===n.y_min&&(n.y_min=0);const r=e.items.map((e,t)=>t>0||"cumulative"===e.config.transform?e:{...e,config:{...e.config,transform:"cumulative",transform_reset:"none"}});return{...e,raw:n,items:r}}(e),o=xu(t,Ja(t,Date.now(),{ghost:Ma(t.raw),raw:!0})),n=o.frame,r=Wc(t.host),a=Ky(t,n,r),i=ti(n,t),s=ri(n,t),l=ch(t,n),c=function(e,t,o=Date.now()){const n=hm(e.raw),r=t.series.find(e=>0===e.index);if(n&&r)return{goal:n,target:mm(n,e.hass),projection:gm(r.points,t.range,o,n.project,n.period),range:t.range,entity:r.entity,ended:o>=t.range.end}}(t,n),d=function(e,t){const o=e?bm(e,t):void 0;return o?R`<div class="goal-pill ${o.good?"good":"bad"}" role="status">${o.text}</div>`:Z}(c,t.hass),u=Mh(t,n),h=t.config.show.name?R`${function(e,t){if(0===t.length)return Z;const o=e.raw.compare_style??"grey",n=new Set,r=t.filter(e=>!n.has(e.ghost)&&!!n.add(e.ghost));return R`<div class="compare-key">
    ${r.map(t=>R`<span class="compare-item"
          ><svg viewBox="0 0 18 6" aria-hidden="true">
            <line
              x1="1"
              x2="17"
              y1="3"
              y2="3"
              stroke=${"grey"===o?"var(--secondary-text-color)":"currentColor"}
              stroke-dasharray=${dh[t.ghost%dh.length]||Z}
            ></line></svg
          >${nh(t.offset,e.hass)}</span
        >`)}
  </div>`}(t,l)}${Sh(t,u)}`:Z,p=Nc(t,ic(t.raw),i===Z&&s===Z&&d===Z?Z:R`${i}${s}${d}${h}`),{layout:m,header:f}=p,g=ai(n,t);if(g)return sc("over"===m.header?{...m,header:"above"}:m,f,g);if(p.table)return sc(m,f,Fc(t,n,{heading:og}));const y=function(e){if(!0===e.multiples)return{scale:e.multiples_scale??"auto",columns:e.multiples_columns}}(t.raw);if(y){const e=Nc(t,{...m,header:"above"},i),o="log"===t.raw.y_scale?{...n,series:n.series.map(e=>({...e,points:ql(e.points),...e.hidden?{hidden:ql(e.hidden)}:{}}))}:n;return sc(e.layout,e.header,Fh(t,o,y,r??a,(e,n,i)=>function(e,t,o,n,r,a,i=Z,s=Wc(e.host)){const{scales:l}=n,c=Cd(e.raw),d=Bc(e.raw),u="bands"===e.raw.color_by,h=u?q`${o.map(e=>Qy(`cd-bands-${e.index}${a}`,e.entity.bands,l))}`:Z,p=$i(o,t=>wi(t.entity.config,e.raw).onTop),m=q`${p.map(o=>ev(o,l,u?`url(#cd-bands-${o.index}${a})`:o.color,t.range,e.raw))}`,f=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_line"),names:o.map(e=>e.entity.name).join(", ")});return oc({axes:n,ctx:e,content:q`${ud(o,l)}${m}`,label:f,defs:h,overlay:R`${i} ${c?tv(t,o,t.range,l,c,!0,e):Z}
    ${d?Kc(e,o,l,s,r,{after:Md(e,o,s)}):Z}`,hover:d?Vc(e,t.range,o.map(e=>e.points)):void 0,tap:Ed(e,t.range,o)})}(t,o,[e],n,i,`-${e.index}`,Z,r??a)))}const v=Uy(t,n),_=v.range,b="log"===t.raw.y_scale,x=v.zoomed?n.series.map(e=>({...e,points:Py(e.points,_),...e.hidden?{hidden:Py(e.hidden,_)}:{}})):n.series,w=o.series.map(e=>({...e,points:(b?ql:e=>e)(v.zoomed?Py(e.points,_):e.points)})),$=b?x.map(e=>({...e,points:ql(e.points),...e.hidden?{hidden:ql(e.hidden)}:{}})):x,k=l.map(e=>{const t=v.zoomed?Py(e.points,_):e.points;return{...e,points:b?ql(t):t}}),M=function(e,t,o,n,r){const a=bp(e).filter(e=>"line"===e.type).map(e=>wp(e.value,t,o)).filter(pp);return n&&r?[...a,...lp(sp(n,r),r.range)]:a}(t.raw,t.hass,$p(n),t,n).filter(e=>!b||e>0).map(e=>({t:_.start,v:e})),z=$.flatMap(e=>e.hidden?[e.hidden]:[]),E=ws([...$.map(e=>e.points),...z,...k.map(e=>e.points),...w.map(e=>e.points),M,vm(c),(S=u,A=_.start,S.flatMap(e=>e.slots.flatMap(e=>e?[{t:A,v:e.lo},{t:A,v:e.hi}]:[])))]);var S,A;if(b&&!E){const e=R`<div class="chart-message">${Ze(t.hass,"chart_log_nothing")}</div>`;return sc("over"===m.header?{...m,header:"above"}:m,f,e)}const j=Jl(t,_,E),{scales:C}=j,N=Bc(t.raw)&&!function(e){const t=Dy.get(e)?.gesture;return!!t&&("pinch"===t.kind||"moved"in t&&t.moved)}(t.host),L="bands"===t.raw.color_by,F=L?q`${x.map(e=>Qy(`cd-bands-${e.index}`,e.entity.bands,C))}`:Z,T=$i($,e=>wi(e.entity.config,t.raw).onTop),O=q`${T.map(e=>ev(e,C,L?`url(#cd-bands-${e.index})`:e.color,n.range,t.raw))}`,P=Bc(t.raw)?Vc(t,_,[...x,...w].map(e=>e.points)):void 0,D=Fp(t,n,C,Kl(t)),U=function(e,t,o,n){const r=_h(e.raw);if(!r||0===t.length)return{behind:Z,overlay:Z};const a=[],i=[];for(const{s:l,slots:c}of t){const e=Eh(c,n),t=Wu(e,1,o.x,o.y);if(t&&a.push(q`<path class="normal-band" data-series=${l.index} d=${t} fill=${l.color}></path>`),r.median){const t=e.map((e,t)=>e?{t:e.t,v:e.v}:{t:t,v:null}),n=Ba(t).map(e=>qa(e.map(e=>[o.x(e.t),o.y(e.v)]),"straight")).join("");n&&a.push(q`<path class="normal-median" d=${n} fill="none" stroke=${l.color}></path>`)}if(r.marks)for(const n of wh(l.points,c).slice(0,60)){const e=o.x(n.t)/Za,t=o.y(n.v)/Va;e>=0&&e<=1&&t>=0&&t<=1&&i.push({s:l,o:n,x:e,y:t})}}const s=t=>{const o=o=>Wt(o,t.s.entity.decimals,e.hass);return Ze(e.hass,"above"===t.o.side?"normal_range_above":"normal_range_below",{name:t.s.entity.name,value:Bt(o(t.o.v),t.s.entity.unit),low:o(t.o.lo),high:Bt(o(t.o.hi),t.s.entity.unit)})};return{behind:a.length?q`<g class="normal-range">${a}</g>`:Z,overlay:i.length?R`<div class="anomaly-layer normal-range-marks" style="--cd-anomaly:${je(r.color)}">
          ${i.map(e=>R`<span
                class="anomaly-dot normal-range-dot"
                style="left:${zh(e.x)};top:${zh(e.y)}"
                role="img"
                aria-label=${s(e)}
                title=${s(e)}
              ></span>`)}
        </div>`:Z}}(t,u,C,n.range),I=Cd(t.raw),H=Kl(t),W=Qd({ctx:t,series:x,scales:C,range:_,group:n.group,timeWeighted:"history"===n.source&&void 0===n.group,width:H,height:ov(m.compact,j.options),until:Math.min(_.end,Date.now()),obstacles:"over"===m.header?[nv(n,m.compact,H)]:[]}),B=Bu({ctx:t,series:$,scales:C,range:_,width:H,height:ov(m.compact,j.options),obstacles:"over"===m.header?[nv(n,m.compact,H)]:[]}),V=Ze(t.hass,"chart_aria",{style:Ze(t.hass,"editor_style_line"),names:n.series.map(e=>e.entity.name).join(", ")}),Y=cd(t,x,C,_,V),G=pd(t,n,_,C,v.options.overview?function(e,t,o,n){const r=Dy.get(e.host),a=t.window,i=e=>Iy(e),s=Oy(o,a),l=Ze(e.hass,"zoom_window",{from:el(s.start,e.hass),to:el(s.end,e.hass)}),c=e=>Math.round(1e4*e)/100+"%";return R`<div
    class="overview ${t.zoomed?"zoomed":""}"
    @pointerdown=${e=>{if(e.button>0)return;e.stopPropagation();const{f:o,width:n}=i(e),a=t.current(),s=10/Math.max(n,1);let l="new";Ny(a)&&(Math.abs(o-a.from)<=s?l="left":Math.abs(o-a.to)<=s?l="right":o>a.from&&o<a.to&&(l="move")),r.gesture={kind:l,f0:o,w0:a,moved:!1,px:n},Hy(e)}}
    @pointermove=${e=>{const o=r.gesture;if(!o||!("f0"in o))return;const{f:n}=i(e);if(!o.moved&&Math.abs(n-o.f0)*o.px<4)return;o.moved=!0;const{w0:a}=o;"move"===o.kind?t.set(Fy(a,n-o.f0)):"left"===o.kind?t.set({from:Math.min(n,a.to-t.minSpan),to:a.to}):"right"===o.kind?t.set({from:a.from,to:Math.max(n,a.from+t.minSpan)}):t.set(Ty(Ay,o.f0,n,t.minSpan))}}
    @pointerup=${()=>{const e=r.gesture;if(e&&"f0"in e&&(r.gesture=void 0,!e.moved&&"new"===e.kind&&Ny(e.w0))){const o=e.w0.to-e.w0.from;t.set({from:e.f0-o/2,to:e.f0+o/2})}}}
    @pointercancel=${()=>r.gesture=void 0}
    @dblclick=${e=>{e.stopPropagation(),t.reset()}}
  >
    <svg class="overview-lines" viewBox="0 0 ${Za} ${40}" preserveAspectRatio="none" aria-hidden="true">
      ${n}
    </svg>
    <div class="overview-shade" style="left:0;width:${c(a.from)}"></div>
    <div class="overview-shade" style="left:${c(a.to)};right:0"></div>
    <div
      class="overview-window"
      style="left:${c(a.from)};width:${c(a.to-a.from)}"
      tabindex="0"
      role="slider"
      aria-label=${Ze(e.hass,"zoom_window_label")}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round((a.from+a.to)/2*100)}
      aria-valuetext=${l}
      @keydown=${e=>{const o=t.current(),n=o.to-o.from,r=.5,a={ArrowLeft:()=>Fy(o,-n/4),ArrowRight:()=>Fy(o,n/4),ArrowUp:()=>Ly(o,r,1.5,t.minSpan),ArrowDown:()=>Ly(o,r,1/1.5,t.minSpan),"+":()=>Ly(o,r,1.5,t.minSpan),"=":()=>Ly(o,r,1.5,t.minSpan),"-":()=>Ly(o,r,1/1.5,t.minSpan),Home:()=>Fy(o,-1),End:()=>Fy(o,1),Escape:()=>Ay}[e.key];a&&(e.preventDefault(),e.stopPropagation(),t.set(a()))}}
    >
      <span class="overview-handle left"></span><span class="overview-handle right"></span>
    </div>
  </div>`}(t,v,n.range,function(e,t){const o=ws(e.map(e=>e.points));if(!o)return q``;const[n,r]=$s(o),a=ks([t.start,t.end],[0,Za]),i=ks([n,r],[38,2]);return q`${e.map(e=>{const t=Ba(Dl(e.points,200)).map(e=>1===e.length?`M${a(e[0].t).toFixed(1)},${i(e[0].v).toFixed(1)}h0.5`:`M${e.map(e=>`${a(e.t).toFixed(1)},${i(e.v).toFixed(1)}`).join("L")}`).join("");return q`<path d=${t} fill="none" stroke=${e.color}></path>`})}`}(n.series,n.range)):Z);return sc(m,f,oc({axes:j,ctx:t,content:q`${D.behind}${U.behind}${uh(k,C)}${ud($,C)}${B.behind}${W.lines}${xm(c,C)}${wu(w,C)}${O}${wm(c,C)}${D.front}`,label:V,defs:F,overlay:R`${"over"===m.header?lc(f):Z}
        ${I?tv(n,$,_,C,I,m.compact,t):Z}
        ${qy(t,v)} ${D.overlay} ${W.overlay} ${B.overlay} ${U.overlay}
        ${lf(t,n,_,C,H)} ${km(c,C,t.hass)}
        ${w.length?ku(t,w,C):Z} ${Y.layer}
        ${N?Kc(t,[...x,...k,...$u(t,w,_.start)],C,r??a,Kl(t),{footer:()=>jp(t,n,r??a),after:Md(t,x,r??a)}):Z}`,hover:P,summary:$l(t,n.series,{range:n.range,live:n.live}),gestures:v.options.zoom?Ry(t,v,P):void 0,tap:Ed(t,_,x,v.options.zoom),classes:v.options.zoom?"zoomable "+(v.zoomed?"zoomed":""):"",keys:Y.keys,...G}))}},av=["line","column","area"],iv=["auto","left","right"],sv=e=>e.config,lv=e=>sv(e).type??"line";function cv(e,t){const o={...e},n=t.some(e=>"column"===lv(e));return"none"!==e.group_by&&(void 0!==e.group_by&&"auto"!==e.group_by||n)?void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=mc(xn(e.period))):delete o.group_by,"auto"===e.aggregate&&delete o.aggregate,o}function dv(e,t){const o=e.flatMap(e=>e.points.map(e=>e.v));return _c(o,t.includes("column"))}const uv=[...pf.map(e=>"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:_i},{name:"dots",path:["dots"],default:!1},{name:"rounded",path:["rounded"],default:!0},...Mf,...$f];const hv=[{name:"series_type",path:["type"],default:"line"},{name:"series_axis",path:["y_axis"],default:"auto"},{name:"series_color",path:["color"]},{name:"series_aggregate",path:["aggregate"],default:"auto"},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"negative_color",path:["negative_color"]}],pv={layout:"chart",group:"history",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
    ${$g}
    ${pg}
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
      stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){if(void 0!==e.group_by&&!dc.includes(e.group_by))throw new Error(`"group_by" must be one of: ${dc.join(", ")}`);if(void 0!==e.aggregate&&!uc.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${uc.join(", ")}`);const t={...e};if("auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,Xa(t),Gn(t),Fs(e),Zc(e),Si(e),ac(e),void 0!==e.rounded&&"boolean"!=typeof e.rounded)throw new Error('"rounded" must be true or false');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.type&&!av.includes(e.type))throw new Error(`"type" of ${o.entity} must be one of: ${av.join(", ")}`);if(void 0!==e.y_axis&&"left"!==e.y_axis&&"right"!==e.y_axis)throw new Error(`"y_axis" of ${o.entity} must be one of: left, right`);if(void 0!==e.aggregate&&!Yn.includes(e.aggregate))throw new Error(`"aggregate" of ${o.entity} must be one of: ${Yn.join(", ")}`)}},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},n=Tf(`combined|${ff(o)}|${t}`,e.hass,()=>[...gf(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:hf(e.hass,"group_by",dc)},...t?[]:[{name:"aggregate",selector:hf(e.hass,"aggregate",uc)}]]},{name:"curve",selector:hf(e.hass,"curve",Ha)},{type:"grid",name:"",schema:[{name:"line_width",selector:Ui},{name:"dots",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...zf(e.hass),...kf(e.hass)]);return Rf(e,"chart",n,uv)},entityFields:e=>({schema:Tf("combined-entity",e,()=>[{type:"grid",name:"",schema:[{name:"series_type",selector:hf(e,"series_type",av)},{name:"series_axis",selector:hf(e,"series_axis",iv)},{name:"series_color",selector:{text:{}}},{name:"series_aggregate",selector:hf(e,"series_aggregate",["auto",...Yn])}]},{type:"grid",name:"",schema:[{name:"curve",selector:hf(e,"curve",Ha)},{name:"line_width",selector:Ui},{name:"dash",selector:{boolean:{}}},{name:"negative_color",selector:{text:{}}}]}]),fields:hv}),disconnect(e){ni(e),Xl(e),qc(e)},render:function(e){const t={...e,raw:cv(e.raw,e.items)},o=t.raw,n=Ja(t,Date.now(),{aggregate:t=>function(e,t){const o=t.aggregate;return sv(e).aggregate??(o&&"auto"!==o?o:fc(e)?"change":"mean")}(t,e.raw)}),r=ti(n,t),a=ri(n,t),i=r===Z&&a===Z?Z:R`${r}${a}`,s=ai(n,t),l=ic(o);if(s)return sc("over"===l.header?{...l,header:"above"}:l,i,s);const c=n.series.map(e=>lv(e.entity)),d=function(e){const t=e[0]?.unit,o=e.map(e=>sv(e).y_axis??(e.unit===t?"left":"right"));return o.includes("left")?o:o.map(()=>"left")}(n.series.map(e=>e.entity)),u=n.group,h=n.series.map(e=>u?{...e,points:e.points.map(e=>({...e,t:void 0!==e.end?(e.t+e.end)/2:e.t}))}:e),p=u?Math.max(n.range.end,...n.series.flatMap(e=>e.points.map(e=>e.end??0))):0,m=u?{...n.range,end:p}:n.range,f=e=>h.filter((t,o)=>d[o]===e),g=e=>c.filter((t,o)=>d[o]===e),y=dv(f("left"),g("left"));let v=o;y&&g("left").includes("column")?v={...o,y_min:o.y_min??(y[0]>=0?0:void 0),y_max:o.y_max??(y[1]<=0?0:void 0)}:g("left").includes("area")&&(v=fg(y,o));const _=Jl({...t,raw:v},m,y),b=_.scales,x=f("right"),w=dv(x,g("right")),$={};w&&(g("right").includes("column")||g("right").includes("area"))&&(w[0]>=0&&w[0]<=w[1]/2&&($.min=0),w[1]<=0&&w[1]>=w[0]/2&&($.max=0));const k=x.length?Us(w,$,4):void 0,M=k?{x:b.x,y:ks(k.domain,[Va,0]),domain:k.domain}:void 0,z=e=>"right"===d[e.index]&&M?M:b,E=h.filter(e=>"area"===c[e.index]).map(e=>_g(e,e.points,z(e),o,{range:m})),S=h.filter(e=>"line"===c[e.index]).map(e=>ev({...e,points:e.points},z(e),e.color,m,o)),A=h.filter(e=>"column"===c[e.index]),j=yc(n.series.filter(e=>"column"===c[e.index]).map(e=>e.points),u?1/0:n.range.end),C=!1===o.rounded?0:4,N=[];j.times.forEach((e,t)=>{const o=b.x(e),n=b.x(j.ends[t]);A.forEach((e,r)=>{const a=j.values[r][t];if(null===a)return;const i=z(e),s=Math.min(Math.max(0,i.domain[0]),i.domain[1]),[l,c]=vc(o,n,r,A.length);N.push(ag(i,l,c,Math.min(s,a),Math.max(s,a),e.color,a>=s?"top":"bottom",e.index))})});const L=j.times.map((e,t)=>(e+j.ends[t])/2),F=h.map(e=>{if("column"!==c[e.index]||u)return e;const t=A.indexOf(e);return{...e,points:L.map((e,o)=>({t:e,v:j.values[t][o]}))}}),T=new Map;for(const D of n.series)for(const e of D.points)void 0!==e.end&&T.set((e.t+e.end)/2,[e.t,e.end]);const O=Bc(o),P=Ze(t.hass,"chart_aria",{style:Ze(t.hass,"editor_style_combined"),names:n.series.map(e=>e.entity.name).join(", ")});return sc(l,i,oc({axes:_,ctx:t,right:k&&M?{value:k,y:M.y}:void 0,content:q`${E.map(e=>e.body)}`,defs:q`${E.map(e=>e.defs)}`,label:P,overlay:R`<div class="columns" style="--r:${C}px">${N}</div>
        <svg class="plot lines-over" viewBox="0 0 ${Za} ${Va}" preserveAspectRatio="none" aria-hidden="true">
          ${S}
        </svg>
        ${"over"===l.header?lc(i):Z}
        ${O?Kc(t,F,b,Wc(t.host),Kl(t),{dotY:(e,t)=>"column"===c[e.index]||null===t.v?null:z(e).y(t.v),heading:e=>{const o=T.get(e);return o&&u?og(o[0],o[1],u.unit,t.hass):el(e,t.hass)}}):Z}`,hover:O?Vc(t,m,F.map(e=>e.points)):void 0}))}};function mv(e,t){const o=new Array(168).fill(0),n=new Array(168).fill(0);for(const r of e){if(null===r.v)continue;const e=rn(r.t,t.timeZone),a=(e.weekday-t.firstDay+7)%7*24+e.hour;o[a]+=r.v,n[a]+=1}return o.map((e,t)=>({row:Math.floor(t/24),hour:t%24,v:n[t]?e/n[t]:null,count:n[t]}))}function fv(e,t={}){const o=e.filter(e=>null!==e);if(0===o.length&&(void 0===t.min||void 0===t.max))return;let n=t.min??Math.min(...o),r=t.max??Math.max(...o);return r<=n&&(void 0===t.max?r=n+1:n=r-1),[n,r]}function gv(e,[t,o]){return Math.min(1,Math.max(0,(e-t)/(o-t)))}function yv(e,t){const o=Math.round(12+88*t);return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const vv=Math.sqrt(3)/2,_v=["hours","calendar"],bv=["scale","bands"],xv=["square","rounded","hexagon"],wv=10,$v=1e4,kv={hours:{last:4,unit:"week",source:"history"},calendar:{last:12,unit:"month",source:"statistics"}},Mv=e=>"number"==typeof e&&Number.isFinite(e);function zv(e){return e.grid??"hours"}function Ev(e){const t=zv(e),o=kv[t],n=e.period??{};return{...e,group_by:"hours"===t?"hour":"day",source:e.source??o.source,period:void 0!==n.calendar?n:{...n,last:n.last??o.last,unit:n.unit??o.unit}}}const Sv=new Map;function Av(e,t,o){const n=e?.locale?.language??e?.language??"en",r=`${n}|${t}|${JSON.stringify(o)}`;let a=Sv.get(r);if(!a){try{a=new Intl.DateTimeFormat(n,{...o,timeZone:t})}catch{a=new Intl.DateTimeFormat("en",{...o,timeZone:"UTC"})}Sv.set(r,a)}return a}function jv(e,t){return Av(t,"UTC",{weekday:"short"}).format(Date.UTC(2024,0,e))}function Cv(e,t,o=!1){return Av(t,"UTC",{hour:"numeric",...o?{minute:"2-digit"}:{},hour12:Xs(t)}).format(Date.UTC(2024,0,1,e))}function Nv(e,t,o,n,r="cell"){const[a,i]=e.centre(t.col,t.row),s=n?`fill:${n}`:"",l=n?"":"empty";if("hexagon"===o)return q`<path class="${r} ${l}" d=${function(e,t,o){const n=o/Math.sqrt(3),r=[0,1,2,3,4,5].map(o=>{const r=(60*o-90)*Math.PI/180;return`${Math.round(100*(e+n*Math.cos(r)))/100},${Math.round(100*(t+n*Math.sin(r)))/100}`});return`M${r.join("L")}Z`}(a,i,8.8)} style=${s}></path>`;const c=8.8;return q`<rect class="${r} ${l}" x=${a-4.4} y=${i-4.4} width=${c} height=${c}
    rx=${"rounded"===o?2:.4} style=${s}></rect>`}const Lv=e=>Math.round(1e4*e)/100+"%";function Fv(e,t,o){const{zone:n}=t,r=function(e,t){if(0===e.length)return{cells:[],weeks:0,months:[]};const o=e=>{const o=rn(e,t.timeZone);return Math.round(Date.UTC(o.year,o.month-1,o.day)/864e5)},n=o(cn("week",e[0].t,t)),r=[],a=[];let i=-1;for(const s of e){const e=rn(s.t,t.timeZone),l=Math.floor((o(s.t)-n)/7);r.push({t:s.t,col:l,row:(e.weekday-t.firstDay+7)%7,v:s.v});const c=12*e.year+e.month;c!==i&&(-1!==i&&1!==e.day||a.push({col:l,t:s.t}),i=c)}return a.length>1&&a[1].col-a[0].col<3&&a.shift(),{cells:r,weeks:r[r.length-1].col+1,months:a}}(e.points,n),a=Av(o,n.timeZone,{weekday:"short",day:"numeric",month:"short",year:"numeric"}),i=Av(o,n.timeZone,{month:"short"}),s=e=>(n.firstDay-1+e)%7+1;return{cells:r.cells.map(e=>({col:e.col,row:e.row,v:e.v,title:()=>a.format(e.t)})),cols:Math.max(1,r.weeks),rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:jv(s(e),o)})),colLabels:r.months.map(e=>({col:e.col,text:i.format(e.t)}))}}function Tv(e,t,o,n){const r=o.raw,a=zv(o.raw),i=r.cell_shape??"rounded",s="bands"===r.color_by,l=Gl(o),c="hours"===a?function(e,t,o,n){const{zone:r}=t,a=e=>(r.firstDay-1+e)%7+1,i=mv(e.points,r).map(e=>({col:e.hour,row:e.row,v:e.v,count:e.count,title:()=>`${jv(a(e.row),o)} ${Cv(e.hour,o,!0)} – ${Cv((e.hour+1)%24,o,!0)}`})),s=n?3:6;return{cells:i,cols:24,rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:jv(a(e),o)})),colLabels:Array.from({length:24/s},(e,t)=>({col:t*s,text:Cv(t*s,o)}))}}(e,t,o.hass,l>=400):Fv(e,t,o.hass),d=function(e,t,o){if("hexagon"===o){const o=wv/Math.sqrt(3),n=wv*vv,r=e*wv+5,a=(t-1)*n+2*o;return{width:r,height:a,centre:(e,t)=>[e*wv+5+t%2*5,o+t*n],at(i,s){const l=Math.min(t-1,Math.max(0,Math.round((s*a-o)/n))),c=Math.floor((i*r-l%2*5)/wv);return[Math.min(e-1,Math.max(0,c)),l]}}}return{width:e*wv,height:t*wv,centre:(e,t)=>[e*wv+5,t*wv+5],at:(o,n)=>[Math.min(e-1,Math.floor(o*e)),Math.min(t-1,Math.floor(n*t))]}}(c.cols,c.rows,i),u=Math.max(0,l-72)/d.width*wv,h=Math.ceil(13/Math.max(1,u*("hexagon"===i?vv:1))),p=c.rowLabels.filter(e=>e.row%h===0);let m=-1/0;const f=c.colLabels.filter(e=>!((e.col-m)*u<32)&&(m=e.col,!0)),g=fv(c.cells.map(e=>e.v),{min:Mv(r.color_min)?r.color_min:void 0,max:Mv(r.color_max)?r.color_max:void 0}),y=t=>{if(null!==t)return s?je(Fe(t,e.entity.bands).color):g?yv(e.color,gv(t,g)):e.color},v=Pg(o.host),_=void 0!==v&&Math.floor(v/$v)===e.index?v%$v:void 0,b=new Map(c.cells.map((e,t)=>[8*e.col+e.row,t])),x=Bc(o.raw)?Ug(o,(t,o)=>{const[n,r]=d.at(t,o),a=b.get(8*n+r);return void 0===a?void 0:e.index*$v+a}):void 0,w=void 0===_?void 0:c.cells[_];let $=Z;if(w){const[t,n]=d.centre(w.col,w.row),r=null===w.v?Ze(o.hass,"heatmap_empty"):Bt(Wt(w.v,e.entity.decimals,o.hass),e.entity.unit);$=Hg({x:t/d.width,y:n/d.height,plotWidth:Math.max(0,l-80),title:w.title(),rows:[{color:y(w.v)??"var(--cd-track)",name:e.entity.name,value:r},...void 0!==w.count&&null!==w.v?[{name:Ze(o.hass,"heatmap_hours"),value:String(w.count)}]:[]]})}const{show:k}=o.config,M=k.name||k.value||n?R`<div class="series-header">
          <div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
            ${s?Z:R`<span class="swatch" style="background:${e.color}"></span>`}
            ${k.name||n?R`<span class="series-name">${e.entity.name}</span>`:Z}
            ${k.value?R`<span class="series-value">${e.entity.display}</span>`:Z}
          </div>
        </div>`:Z,z=Ze(o.hass,"heatmap_aria",{name:e.entity.name});return R`<div class="hm grid-${a} shape-${i}">
    ${M}
    <div class="hm-body">
      <div class="hm-rows" aria-hidden="true">
        ${p.map(e=>R`<span class="hm-label" style="top:${Lv(d.centre(0,e.row)[1]/d.height)}">${e.text}</span>`)}
      </div>
      <div
        class="hm-plot ${x?"hoverable":""}"
        @pointerdown=${x?.move}
        @pointermove=${x?.move}
        @pointerleave=${x?.leave}
        @pointercancel=${x?.leave}
      >
        <svg class="hm-svg" viewBox="0 0 ${d.width} ${d.height}" role="img" aria-label=${z}>
          ${c.cells.map(e=>Nv(d,e,i,y(e.v)))}
          ${w?Nv(d,w,i,"none","cell picked"):Z}
        </svg>
        ${$}
      </div>
      <div class="hm-cols" aria-hidden="true">
        ${f.map(e=>R`<span class="hm-label" style="left:${Lv(e.col*wv/d.width)}">${e.text}</span>`)}
      </div>
    </div>
    ${!1===r.legend?Z:function(e,t,o,n){const r=e.entity,a=e=>Wt(e,r.decimals,n.hass);return o?R`<div class="hm-legend bands">
      ${Te(r.bands,a,r.unit).map(e=>R`<span class="hm-key"
            ><span class="hm-swatch" style="background:${e.color}"></span>${e.text}</span
          >`)}
    </div>`:t?R`<div class="hm-legend scale">
    <span class="hm-end">${a(t[0])}</span>
    <span class="hm-gradient" style="background:linear-gradient(to right, ${yv(e.color,0)}, ${e.color})"></span>
    <span class="hm-end">${Bt(a(t[1]),r.unit)}</span>
  </div>`:Z}(e,g,s,o)}
  </div>`}const Ov=new Map;const Pv={layout:"chart",group:"distribution",height:220,styles:a`
    ${si}
    ${Jc}
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
          fill="var(--primary-color, #03a9f4)" fill-opacity=${.15+.85*((3*t+5*e)%7/6)}></rect>`))}`,validate:function(e){const t=e,o=(e,o)=>{const n=t[e];if(void 0!==n&&!o.includes(n))throw new Error(`"${e}" must be one of: ${o.join(", ")}`)};o("grid",_v),o("color_by",bv),o("cell_shape",xv);for(const n of["color_min","color_max"])if(void 0!==t[n]&&!Mv(t[n]))throw new Error(`"${n}" must be a number`);if(Mv(t.color_min)&&Mv(t.color_max)&&t.color_min>=t.color_max)throw new Error('"color_min" must be below "color_max"');if(void 0!==t.legend&&"boolean"!=typeof t.legend)throw new Error('"legend" must be true or false');Xa(Ev(e)),Zc(e)},editor:function(e){const t=zv(e.config),o=Tf(`heatmap|${ff({...e.config,group_by:void 0})}`,e.hass,()=>[{name:"grid",selector:hf(e.hass,"grid",_v)},...gf(e.hass,{...e.config,group_by:void 0}).filter(e=>!JSON.stringify(e).includes('"group_by"')),{name:"aggregate",selector:hf(e.hass,"aggregate",Yn)},{type:"grid",name:"",schema:[{name:"color_by",selector:hf(e.hass,"color_by",bv)},{name:"cell_shape",selector:hf(e.hass,"cell_shape",xv)}]},{type:"grid",name:"",schema:[{name:"color_min",selector:{number:{mode:"box",step:"any"}}},{name:"color_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"legend",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}}]}]);return Rf(e,"chart",o,function(e){let t=Ov.get(e);if(!t){const o=kv[e],n={period_last:o.last,period_unit:o.unit,source:o.source};t=[{name:"grid",path:["grid"],default:"hours"},...pf.filter(e=>"group_by"!==e.name).map(e=>e.name in n?{...e,default:n[e.name]}:e),{name:"color_by",path:["color_by"],default:"scale"},{name:"cell_shape",path:["cell_shape"],default:"rounded"},{name:"color_min",path:["color_min"]},{name:"color_max",path:["color_max"]},{name:"legend",path:["legend"],default:!0},{name:"tooltip",path:["tooltip"],default:!0}],Ov.set(e,t)}return t}(t))},entityFields:()=>({schema:[{name:"series_color",selector:{text:{}}}],fields:[{name:"series_color",path:["color"]}]}),disconnect(e){ni(e),Xl(e),Dg(e)},render(e){const t=Ja({...e,raw:Ev(e.raw)}),o=ti(t,e),n=ai(t,e);if(n)return R`<div class="frame">${o}${n}</div>`;const r=t.series.length>1;return R`<div class="frame">${o}${t.series.map(o=>Tv(o,t,e,r))}</div>`}},Dv=["day","week"],Uv=2*Math.PI;function Iv(e,t,o){const{day:n,fraction:r}=function(e,t){const o=rn(e,t);return{day:Math.round(Date.UTC(o.year,o.month-1,o.day)/864e5),fraction:(3600*o.hour+60*o.minute+o.second)/86400}}(e,o.timeZone);if("day"===t)return n+r;return(n-(o.firstDay-4+7)%7+r)/7}const Hv=e=>e-Math.floor(e);function Wv(e,t,o,n,r=e/2){const a=.16*r,i=Math.max(t,.25),s=(r-a)/(i+n);return{size:e,centre:e/2,turns:i,phase:Hv(o),hole:a,pitch:s,width:s*n}}function Rv(e,t){return e.hole+e.width/2+t*e.pitch}function qv(e,t){return Uv*(t+e.phase)}function Bv(e,t,o){return[e.centre+t*Math.sin(o),e.centre-t*Math.cos(o)]}const Zv=e=>Math.round(100*e)/100;function Vv(e,t,o){if(!(o>t))return"";const n=Math.max(1,Math.ceil(90*(o-t))),r=[],a=[];for(let i=0;i<=n;i++){const s=t+(o-t)*i/n,l=Rv(e,s),c=qv(e,s),[d,u]=Bv(e,l+e.width/2,c),[h,p]=Bv(e,Math.max(0,l-e.width/2),c);r.push(`${Zv(d)},${Zv(u)}`),a.unshift(`${Zv(h)},${Zv(p)}`)}return`M${r.join("L")}L${a.join("L")}Z`}function Yv(e,t=6){if("week"===e)return[0,1,2,3,4,5,6].map(e=>e/7);const o=[];for(let n=0;n<24;n+=t)o.push(n/24);return o}const Gv={day:7,week:4},Xv={day:31,week:13},Kv=["scale","bands"],Jv=200,Qv=1e5,e_=e=>"number"==typeof e&&Number.isFinite(e);function t_(e){const t=e,o=t.turn??"day";return{turn:o,turns:e_(t.turns)?t.turns:Gv[o],ring:(e_(t.ring_width)?t.ring_width:80)/100}}function o_(e){const t=t_(e),o=e.period??{},n={};for(const r of["offset","navigate"])void 0!==o[r]&&(n[r]=o[r]);return{...e,group_by:"hour",period:{...n,last:t.turns,unit:t.turn}}}const n_=new Map;function r_(e,t,o){const n=e?.locale?.language??e?.language??"en",r=`${n}|${t}|${JSON.stringify(o)}`;let a=n_.get(r);if(!a){try{a=new Intl.DateTimeFormat(n,{...o,timeZone:t})}catch{a=new Intl.DateTimeFormat("en",{...o,timeZone:"UTC"})}n_.set(r,a)}return a}function a_(e,t,o,n){const r=o.raw,a=t_(o.raw),i="bands"===r.color_by,{range:s,zone:l}=t,c=Math.min(s.end,n),d=function(e,t,o,n,r){const a=Iv(t,n,r),i=[];for(const s of e){if(null===s.v||s.t>=o)continue;const e=Math.min(s.end??s.t+36e5,o),t=Iv(s.t,n,r)-a,l=Iv(e,n,r)-a;l>t&&i.push({t:s.t,end:e,v:s.v,u0:t,u1:l})}return i.sort((e,t)=>e.u0-t.u0)}(e.points,s.start,c,a.turn,l),u=Iv(s.end,a.turn,l)-Iv(s.start,a.turn,l),h=Wv(Jv,u,Iv(s.start,a.turn,l),a.ring,84),p=function(e){const t=Math.max(120,e-32),o=t>=406;return{px:Math.round(Math.min(300,o?t-150-16:t)),side:o}}(Gl(o)),m=Jv/p.px,f=fv(d.map(e=>e.v),{min:e_(r.color_min)?r.color_min:void 0,max:e_(r.color_max)?r.color_max:void 0}),g=t=>i?je(Fe(t,e.entity.bands).color):f?yv(e.color,gv(t,f)):e.color,y=Pg(o.host),v=void 0!==y&&Math.floor(y/Qv)===e.index?y%Qv:void 0,_=void 0===v?void 0:d[v],b=Bc(o.raw)?Ug(o,(t,o,n)=>{const r=function(e,t,o,n=0){const r=t-e.centre,a=o-e.centre,i=Math.hypot(r,a),s=Hv(Math.atan2(r,-a)/Uv)-e.phase,l=s+Math.round((i-Rv(e,s))/e.pitch);if(!(l<0||l>e.turns))return Math.abs(i-Rv(e,l))<=e.width/2+n?l:void 0}(h,t*Jv,o*Jv,1200/Math.max(1,n)),a=void 0===r?void 0:function(e,t){let o=0,n=e.length-1;for(;o<=n;){const r=o+n>>1,a=e[r];if(t<a.u0)n=r-1;else{if(!(t>=a.u1))return r;o=r+1}}}(d,r);return void 0===a?void 0:e.index*Qv+a}):void 0;let x=Z;if(_){const t=(_.u0+_.u1)/2,[n,r]=Bv(h,Rv(h,t),qv(h,t)),a=r_(o.hass,l.timeZone,{weekday:"short",day:"numeric",month:"short"}),i=r_(o.hass,l.timeZone,{hour:"numeric",minute:"2-digit",hour12:Xs(o.hass)});x=Hg({x:n/Jv,y:r/Jv,plotWidth:p.px,title:`${a.format(_.t)} ${i.format(_.t)} – ${i.format(_.end)}`,rows:[{color:g(_.v),name:e.entity.name,value:Bt(Wt(_.v,e.entity.decimals,o.hass),e.entity.unit)}]})}const w=function(e,t,o,n){if("week"===e){const e=r_(o,"UTC",{weekday:"short"});return Yv("week").map((o,n)=>({f:o,text:e.format(Date.UTC(2024,0,(t.zone.firstDay-1+n)%7+1))}))}const r=r_(o,"UTC",{hour:"numeric",hour12:Xs(o)});return Yv("day",n?3:6).map(e=>({f:e,text:r.format(Date.UTC(2024,0,1,Math.round(24*e)))}))}(a.turn,t,o.hass,p.px>=220),$=11*m,k=Vv(h,0,h.turns),M=t.live&&d.length?(()=>{const[e,t]=Bv(h,Rv(h,h.turns),qv(h,h.turns));return q`<circle class="sp-now" cx=${e} cy=${t} r=${Math.min(h.width/2,4*m)}></circle>`})():Z,z=Math.round(u),E=Ze(o.hass,"spiral_aria",{name:e.entity.name,n:z}),{show:S}=o.config,A=t.series.length>1,j=Ze(o.hass,"week"===a.turn?"spiral_turn_week_note":"spiral_turn_day_note",{n:z});return R`<div class="sp ${p.side?"side":"stacked"}">
    <div
      class="sp-plot ${b?"hoverable":""}"
      style="width:${p.px}px;height:${p.px}px"
      @pointerdown=${b?.move}
      @pointermove=${b?.move}
      @pointerleave=${b?.leave}
      @pointercancel=${b?.leave}
    >
      <svg class="sp-svg" viewBox="0 0 ${Jv} ${Jv}" role="img" aria-label=${E}>
        <path class="sp-track" d=${k}></path>
        <g class="entity sp-pieces" data-index=${e.index}>
          ${d.map(e=>q`<path class="sp-piece" d=${Vv(h,e.u0,e.u1)} style="fill:${g(e.v)};stroke:${g(e.v)}"></path>`)}
        </g>
        ${_?q`<path class="sp-picked" d=${Vv(h,_.u0,_.u1)}></path>`:Z}
        ${M}
        <g class="sp-labels" aria-hidden="true" style="font-size:${$}px">
          ${w.map(({f:e,text:t})=>{const[o,n]=Bv(h,92,e*Math.PI*2);return q`<text x=${o} y=${n}>${t}</text>`})}
        </g>
      </svg>
      ${x}
    </div>
    <div class="sp-side">
      ${S.name||S.value||A?R`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
              ${i?Z:R`<span class="swatch" style="background:${e.color}"></span>`}
              ${S.name||A?R`<span class="series-name">${e.entity.name}</span>`:Z}
              ${S.value?R`<span class="series-value">${e.entity.display}</span>`:Z}
            </div>`:Z}
      <div class="sp-note">${j}</div>
      <div class="sp-note">${Ze(o.hass,"spiral_inner_oldest")}</div>
      ${!1===r.legend?Z:function(e,t,o,n){const r=e.entity,a=e=>Wt(e,r.decimals,n.hass);return o?R`<div class="sp-legend bands">
      ${Te(r.bands,a,r.unit).map(e=>R`<span class="sp-key"
            ><span class="sp-swatch" style="background:${e.color}"></span>${e.text}</span
          >`)}
    </div>`:t?R`<div class="sp-legend scale">
    <span class="sp-end">${a(t[0])}</span>
    <span class="sp-gradient" style="background:linear-gradient(to right, ${yv(e.color,0)}, ${e.color})"></span>
    <span class="sp-end">${Bt(a(t[1]),r.unit)}</span>
  </div>`:Z}(e,f,i,o)}
    </div>
  </div>`}const i_=[{name:"spiral_turn",path:["turn"],default:"day"},{name:"spiral_turns",path:["turns"]},...pf.filter(e=>["period_offset","period_navigate","source","aggregate"].includes(e.name)),{name:"color_by",path:["color_by"],default:"scale"},{name:"spiral_ring_width",path:["ring_width"],default:80},{name:"color_min",path:["color_min"]},{name:"color_max",path:["color_max"]},{name:"legend",path:["legend"],default:!0},{name:"tooltip",path:["tooltip"],default:!0}];const s_={layout:"chart",group:"history",height:340,styles:a`
    ${si}
    ${Jc}
    .sp {
      display: flex;
      align-items: center;
      gap: 8px 16px;
    }
    .sp.stacked {
      flex-direction: column;
      align-items: stretch;
    }
    .sp + .sp {
      margin-top: 12px;
    }
    .sp-plot {
      position: relative;
      flex: none;
      max-width: 100%;
    }
    .sp.stacked .sp-plot {
      align-self: center;
    }
    .sp-plot.hoverable {
      cursor: crosshair;
    }
    .sp-svg {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
      opacity: 0;
      transition: opacity var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .sp-svg {
      opacity: 1;
    }
    :host([static]) .sp-svg {
      transition: none;
    }
    .sp-track {
      fill: var(--cd-track);
    }
    .sp-piece {
      /* Drawn in its own colour, so neighbouring hours meet without a hairline seam. */
      stroke-width: 0.3px;
    }
    .sp-picked {
      fill: none;
      stroke: var(--primary-text-color);
      stroke-width: 1px;
      vector-effect: non-scaling-stroke;
    }
    .sp-now {
      fill: var(--primary-text-color);
      stroke: var(--card-background-color, #fff);
      stroke-width: 1px;
      vector-effect: non-scaling-stroke;
    }
    .sp-labels text {
      fill: var(--secondary-text-color);
      text-anchor: middle;
      dominant-baseline: central;
      pointer-events: none;
    }
    .sp-side {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
      flex: 1 1 0;
    }
    .sp-side .series-item {
      padding-bottom: 2px;
    }
    .sp-note {
      font-size: 0.8125em;
      color: var(--secondary-text-color);
    }
    .sp-legend {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 4px 10px;
      padding-top: 6px;
      font-size: 11px;
      color: var(--secondary-text-color);
      font-variant-numeric: tabular-nums;
    }
    .sp-legend.scale {
      gap: 6px;
      flex-wrap: nowrap;
    }
    .sp-gradient {
      flex: 1 1 auto;
      min-width: 40px;
      max-width: 160px;
      height: 8px;
      border-radius: 4px;
    }
    .sp-key {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .sp-swatch {
      width: 10px;
      height: 10px;
      border-radius: 2px;
    }
  `,thumbnail:()=>{const e=Wv(40,3,0,.7,19);return q`<g transform="translate(12 0)">
      ${[0,1,2,3,4,5,6,7,8,9,10,11].map(t=>q`<path d=${Vv(e,t/4,(t+1)/4)} fill="var(--primary-color, #03a9f4)"
          fill-opacity=${.2+5*t%12/11*.8}></path>`)}
    </g>`},validate:function(e){const t=e;if(void 0!==t.turn&&!Dv.includes(t.turn))throw new Error(`"turn" must be one of: ${Dv.join(", ")}`);const o=t.turn??"day",n=Xv[o];if(void 0!==t.turns&&!(Number.isInteger(t.turns)&&t.turns>=1&&t.turns<=n))throw new Error(`"turns" must be a whole number from 1 to ${n}`);if(void 0!==t.ring_width&&!(e_(t.ring_width)&&t.ring_width>=20&&t.ring_width<=100))throw new Error('"ring_width" must be a number from 20 to 100');if(void 0!==t.color_by&&!Kv.includes(t.color_by))throw new Error(`"color_by" must be one of: ${Kv.join(", ")}`);for(const r of["color_min","color_max"])if(void 0!==t[r]&&!e_(t[r]))throw new Error(`"${r}" must be a number`);if(e_(t.color_min)&&e_(t.color_max)&&t.color_min>=t.color_max)throw new Error('"color_min" must be below "color_max"');if(void 0!==t.legend&&"boolean"!=typeof t.legend)throw new Error('"legend" must be true or false');Xa(o_(e)),Zc(e)},editor:function(e){const t=t_(e.config),o=Tf(`spiral|${t.turn}`,e.hass,()=>[{type:"grid",name:"",schema:[{name:"spiral_turn",selector:hf(e.hass,"spiral_turn",Dv)},{name:"spiral_turns",selector:{number:{min:1,max:Xv[t.turn],mode:"box",placeholder:Gv[t.turn]}}},{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{type:"grid",name:"",schema:[{name:"source",selector:hf(e.hass,"source",Ga)},{name:"aggregate",selector:hf(e.hass,"aggregate",Yn)}]},{type:"grid",name:"",schema:[{name:"color_by",selector:hf(e.hass,"color_by",Kv)},{name:"spiral_ring_width",selector:{number:{min:20,max:100,step:5,mode:"slider",unit_of_measurement:"%"}}}]},{type:"grid",name:"",schema:[{name:"color_min",selector:{number:{mode:"box",step:"any"}}},{name:"color_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"legend",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}}]}]);return Rf(e,"chart",o,i_)},entityFields:()=>({schema:[{name:"series_color",selector:{text:{}}}],fields:[{name:"series_color",path:["color"]}]}),disconnect(e){ni(e),Xl(e),Dg(e)},render(e){const t=Date.now(),o=Ja({...e,raw:o_(e.raw)},t),n=ti(o,e),r=ai(o,e);return r?R`<div class="frame">${n}${r}</div>`:R`<div class="frame">${n}${o.series.map(n=>a_(n,o,e,t))}</div>`}},l_=["time","readings"],c_=100,d_=e=>Number(e.toPrecision(12));function u_(e,t){const{mode:o,until:n,statistics:r}=t;if(0===e.length)return[];if(void 0!==e[0].end)return e.map(e=>null===e.v?0:"readings"===o?1:Math.max(0,Math.min(e.end,n)-e.t));if(r){if("readings"===o)return e.map(e=>null===e.v||e.carried?0:1);const t=e.slice(1).map((t,o)=>t.t-e[o].t).filter(e=>e>0).sort((e,t)=>e-t),n=t.length?t[Math.floor(t.length/2)]:36e5;return e.map(e=>null===e.v||e.carried?0:n)}const a=e.length-1;return e.map((t,r)=>{if(null===t.v)return 0;if("readings"===o){const o=r===a&&r>0&&t.t>=n&&e[r-1].v===t.v;return t.carried||o?0:1}const i=r<a?e[r+1].t:Math.max(t.t,n);return Math.max(0,Math.min(i,n)-t.t)})}const h_=6e4,p_=36e5;const m_=["percent","total"],f_=["side","overlap"],g_=["series","bands"],y_=e=>"number"==typeof e&&Number.isFinite(e);function v_(e,t,o){if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function __(e,t){const o=Ja(e,t),n={count:(r=e.raw).count??"time",showAs:r.show_as??"percent",bars:r.bars??"side",bands:"bands"===r.color_by,bins:y_(r.bins)?r.bins:void 0,width:y_(r.bin_width)?r.bin_width:void 0};var r;const a=Math.min(o.range.end,t),i=o.series.map(e=>u_(e.points,{mode:n.count,until:a,statistics:"statistics"===o.source}));let s=1/0,l=-1/0;o.series.forEach((e,t)=>e.points.forEach((e,o)=>{null!==e.v&&i[t][o]>0&&(s=Math.min(s,e.v),l=Math.max(l,e.v))}));const c=Lg(e.raw),d="side"===n.bars&&o.series.length>1,u=Math.max(5,Math.min(24,Math.round(Kl(e)/(d?40:28)))),h=s===1/0?[]:function(e,t,o={},n=12){const r=o.min??e,a=o.max??t;if(void 0!==o.bins&&void 0===o.width){let[e,t]=[r,a];t>e||([e,t]=[e-.5,e+.5]);const n=(t-e)/o.bins;return Array.from({length:o.bins+1},(r,a)=>a===o.bins?t:d_(e+a*n))}const i=a-r;let s=o.width??(i>0?Os(i,n):Os(Math.max(Math.abs(r),1),10));for(;i/s>c_;)s=Os(i,50);const l=o.min??d_(Math.floor(r/s+1e-9)*s);let c=o.max??d_(Math.ceil(a/s-1e-9)*s);c>l||(c=d_(l+s));const d=[l];for(let u=1;d[d.length-1]<c-1e-9*s;u++)d.push(Math.min(c,d_(l+u*s)));return d}(s,l,{bins:n.bins,width:n.width,min:c.min,max:c.max},u),p=o.series.map((e,t)=>{const o=function(e,t,o){const n=new Array(Math.max(0,o.length-1)).fill(0);return e.forEach((e,r)=>{if(null===e.v||!(t[r]>0))return;const a=function(e,t){const o=t.length-1;if(o<1||e<t[0]||e>t[o])return-1;if(e===t[o])return o-1;let n=0,r=o-1;for(;n<r;){const o=n+r+1>>1;t[o]<=e?n=o:r=o-1}return n}(e.v,o);a>=0&&(n[a]+=t[r])}),n}(e.points,i[t],h),r=o.reduce((e,t)=>e+t,0),a=o.map(e=>"percent"===n.showAs?r>0?e/r*100:0:"time"===n.count?e/36e5:e);return{series:e,totals:o,heights:a,whole:r}});return{frame:o,opts:n,edges:h,data:p,side:d}}function b_(e,t,o){return"time"===t?function(e){if(e<h_)return e>0?"< 1 min":"0 min";const t=Math.round(e/h_);if(t<60)return`${t} min`;if(e<864e5){const e=Math.floor(t/60),o=t%60;return o?`${e} h ${o} min`:`${e} h`}const o=Math.round(e/p_),n=Math.floor(o/24),r=o%24;return r?`${n} d ${r} h`:`${n} d`}(e):1===e?Ze(o.hass,"histogram_reading"):Ze(o.hass,"histogram_readings",{n:Wt(e,0,o.hass)})}const x_={layout:"chart",group:"distribution",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
    ${Wg}
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
    <path d="M4 37 H60" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate(e){if(Xa(e),Fs(e),Zc(e),ac(e),jg(e),v_(e,"count",l_),v_(e,"show_as",m_),v_(e,"bars",f_),v_(e,"color_by",g_),void 0!==e.bins&&!(Number.isInteger(e.bins)&&e.bins>=1&&e.bins<=c_))throw new Error('"bins" must be a whole number from 1 to 100');if(void 0!==e.bin_width&&!(y_(e.bin_width)&&e.bin_width>0))throw new Error('"bin_width" must be a number above 0')},editor:function(e){const t=e.hass,o=Tf(`histogram|${ff(e.config)}`,t,()=>[...gf(t,e.config),{type:"grid",name:"",schema:[{name:"count",selector:hf(t,"count",l_)},{name:"show_as",selector:hf(t,"show_as",m_)}]},{type:"grid",name:"",schema:[{name:"bins",selector:{number:{min:1,max:c_,mode:"box"}}},{name:"bin_width",selector:{number:{min:0,mode:"box",step:"any"}}}]},...Ng,{type:"grid",name:"",schema:[{name:"bars",selector:hf(t,"bars",f_)},{name:"color_by",selector:hf(t,"color_by",g_)}]},...zf(t).map(e=>"grid"===e.type?{...e,schema:e.schema.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e)}:e),...kf(t)]);return Rf(e,"chart",o,M_)},entityFields:()=>({schema:$_,fields:w_}),disconnect(e){ni(e),Xl(e),Dg(e)},render(e){const t=Date.now(),{frame:o,opts:n,edges:r,data:a,side:i}=__(e,t),s=ti(o,e),l=ri(o,e),c=s===Z&&l===Z?Z:R`${s}${l}`,d=ic(e.raw),u=ai(o,e)??(r.length<2?ai({...o,series:[]},e):void 0);if(u)return sc("over"===d.header?{...d,header:"above"}:d,c,u);const h=Math.max(0,...a.flatMap(e=>e.heights)),p=Fg(e,[r[0],r[r.length-1]],[0,h],{x:{min:r[0],max:r[r.length-1]},yFloor:0}),{scales:m}=p,f=m.y(Math.max(0,p.value.domain[0])),g=a.length,y="overlap"===n.bars&&g>1,v=q`${a.map((e,t)=>{const o=e.heights.map((o,a)=>{if(!(o>0))return Z;const s=m.x(r[a]),l=m.x(r[a+1]),c=Math.min(4,.08*(l-s)),d=(l-s-2*c)/(i?g:1),u=s+c+(i?d*t:0),h=m.y(o),p=n.bands&&e.series.entity.bands.length?je(Fe((r[a]+r[a+1])/2,e.series.entity.bands).color):e.series.color;return q`<rect class="bin" x=${u} y=${Math.min(h,f)} width=${Math.max(.5,d)} height=${Math.abs(f-h)} fill=${p} stroke=${y?p:"none"}></rect>`});return q`<g class="series" data-series=${e.series.index}>${o}</g>`})}`,_=function(e){if(e.length<2)return 0;const t=e[1]-e[0],o=e.every(e=>Math.abs(e-Number(e.toFixed(Ps(t))))<1e-6*t);return o?Ps(t):Math.min(4,Ps(t)+1)}(r),b=Bc(e.raw),x=b?Pg(e.host):void 0;let w=Z;if(void 0!==x&&x<r.length-1){const t=a[0]?.series.entity.unit??"",o=Wt(r[x],_,e.hass),i=Wt(r[x+1],_,e.hass),s=m.x(r[x])/Za,l=m.x(r[x+1])/Za,c=Kl(e);w=Hg({x:"right"===Oc(l,c)?l:s,y:0,plotWidth:c,title:Bt(`${o} – ${i}`,t),band:[s,l],rows:a.map(t=>{const o=t.whole>0?t.totals[x]/t.whole*100:0;return{color:t.series.color,name:t.series.entity.name,value:`${Wt(o,o>0&&o<1?1:0,e.hass)}% · ${b_(t.totals[x],n.count,e)}`}})})}const $=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_histogram"),names:o.series.map(e=>e.entity.name).join(", ")});return sc(d,c,oc({axes:p,ctx:e,content:q`<g class=${y?"overlap":"side"}>${v}</g>`,label:$,xLabel:t=>Wt(t,Tg(p),e.hass),yLabel:t=>"percent"===n.showAs?`${Wt(t,p.value.decimals,e.hass)}%`:"time"===n.count?`${Wt(t,p.value.decimals,e.hass)} h`:Wt(t,p.value.decimals,e.hass),overlay:R`${"over"===d.header?lc(c):Z}${w}`,hover:b?Ug(e,e=>{const t=r[0]+e*(r[r.length-1]-r[0]),o=r.findIndex((e,o)=>o<r.length-1&&t>=e&&t<=r[o+1]);return o<0?void 0:o}):void 0}))}},w_=[{name:"bar_color",path:["color"]}],$_=[{name:"bar_color",selector:{text:{}}}],k_=Mf.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e),M_=[...pf,{name:"count",path:["count"],default:"time"},{name:"show_as",path:["show_as"],default:"percent"},{name:"bins",path:["bins"]},{name:"bin_width",path:["bin_width"]},...Cg,{name:"bars",path:["bars"],default:"side"},{name:"color_by",path:["color_by"],default:"series"},...k_,...$f];const z_={"24h":864e5,"7d":6048e5},E_={"24h":3e5,"7d":36e5};async function S_(e,t,o,n,r=Date.now()){const a={start:r-z_[n],end:r},i=[{entity:t,attribute:o}];if("7d"===n&&!o){const o=function(e){const t=e.filter(e=>null!==e.v);if(!t.length)return null;const o=t.map(e=>e.min??e.v).filter(e=>null!==e),n=t.map(e=>e.max??e.v).filter(e=>null!==e);return{min:Math.min(...o),max:Math.max(...n),mean:t.reduce((e,t)=>e+t.v,0)/t.length}}((await Wn(e,i,a,{period:"hour",types:["mean","min","max"],value:"mean"})).get(t)??[]);if(o)return o}const s=o?`${t}|${o}`:t;return function(e,t){let o=1/0,n=-1/0,r=0,a=0,i=0,s=0;return e.forEach((l,c)=>{if(null===l.v)return;o=Math.min(o,l.v),n=Math.max(n,l.v),i+=l.v,s++;const d=Math.max(l.t,t.start),u=Math.min(c+1<e.length?e[c+1].t:t.end,t.end);u>d&&(r+=l.v*(u-d),a+=u-d)}),0===s?null:{min:o,max:n,mean:a>0?r/a:i/s}}((await Hn(e,i,a)).get(s)??[],a)}const A_=new Map;function j_(e,t,o,n,r,a=Date.now()){if(!n||"off"===n||!e.callWS||!e.states[t])return null;const i=`${t}|${o??""}|${n}`;let s=A_.get(i);if(s||(s={ghost:null,at:-1/0,loading:!1,waiting:new Set},A_.set(i,s)),!s.loading&&a-s.at>E_[n]){const r=s;r.loading=!0,r.at=a;const i=e=>{r.ghost=e,r.loading=!1;const t=[...r.waiting];r.waiting.clear();for(const o of t)o()};S_(e,t,o,n,a).then(i,()=>i(r.ghost))}return s.loading&&r&&s.waiting.add(r),s.ghost}function C_(e,t,o,n,r){if(!e||!o||"off"===o)return Z;const a=function(e,t,o){const n=o-t,r=e=>n>0?Math.min(1,Math.max(0,(e-t)/n)):0;return{from:r(e.min),to:r(e.max),mean:r(e.mean)}}(e,t.min,t.max);let i=n.at(a.from),s=n.at(a.to);if(s-i<2){const e=(i+s)/2;i=e-1,s=e+1}const l=n.at(a.mean),[c,d]=ft(n.cx,n.cy,n.tick[0],l),[u,h]=ft(n.cx,n.cy,n.tick[1],l);return q`<g class="ghost">
    <title>${function(e,t,o,n,r){const a=e=>Bt(Wt(e,o,r),n);return Ze(r,`ghost_title_${t}`,{min:a(e.min),max:a(e.max),mean:a(e.mean)})}(e,o,t.decimals,t.unit,r)}</title>
    <path class="ghost-band" d=${gt(n.cx,n.cy,n.r,i,s)} style="stroke-width: ${n.width}px"></path>
    <line class="ghost-mean" x1=${c.toFixed(2)} y1=${d.toFixed(2)} x2=${u.toFixed(2)} y2=${h.toFixed(2)}></line>
  </g>`}const N_=a`
  .ghost-band {
    fill: none;
    stroke: var(--primary-text-color);
    stroke-opacity: 0.2;
    stroke-linecap: butt;
  }
  .ghost-mean {
    stroke: var(--primary-text-color);
    stroke-opacity: 0.75;
    stroke-width: 2px;
    stroke-linecap: round;
  }
`;function L_(e){let t=0;for(const o of e)t+=o.codePointAt(0)>=11904?1/.58:1;return t}function F_(e,t=76,o=12,n=8,r=11){const a=e.trim();let i=[a];if(L_(a)>r){let e=L_(a);for(let t=a.indexOf(" ");t>0;t=a.indexOf(" ",t+1)){const o=Math.max(L_(a.slice(0,t)),L_(a.slice(t+1)));o<e&&(e=o,i=[a.slice(0,t),a.slice(t+1)])}}const s=Math.max(...i.map(L_));return{lines:i,size:Math.max(n,Math.min(o,Math.floor(t/(.58*Math.max(1,s)))))}}const T_=65,O_=66,P_=50,D_=[-90,90],U_=e=>String(Math.round(1e3*e)/1e3+0);function I_(e,t,o,n,r,a=11){const{lines:i,size:s}=F_(e,t,o,n,a),l=r-1.2*(i.length-1)*s;return q`<text class="na" text-anchor="middle" style="font-size: ${s}px">${i.map((e,t)=>q`<tspan x=${T_} y=${U_(l+1.2*t*s)}>${e}</tspan>`)}</text>`}const H_={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:a`
    ${N_}
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
  `,render(e,{show:t,hass:o,requestUpdate:n}){const r=e.config.gauge,a=xt(D_,r),i=e=>$t(a,e),s=function(e,t,o){const n=o-t,r=[];return n>0?(e.forEach((a,i)=>{const s=0===i?t:Math.max(a.from,t),l=Math.min(i+1<e.length?e[i+1].from:1/0,o);l>s&&r.push({from:(s-t)/n,to:(l-t)/n,color:a.color})}),r):r}(e.bands,e.min,e.max),l=s.map((e,t)=>{const o=i(e.from)+(t>0?1:0),n=i(e.to)-(t<s.length-1?1:0);return n>o?q`<path class="seg" d=${gt(T_,O_,P_,o,n)} stroke=${je(e.color)}></path>`:Z}),c=e=>{const[t,o]=ft(T_,O_,36,e),[n,r]=ft(T_,O_,40,e);return q`<line class="tickmark" x1=${t.toFixed(2)} y1=${o.toFixed(2)} x2=${n.toFixed(2)} y2=${r.toFixed(2)}></line>`},d=r?.tickLabels?function(e,t,o=5){if(!(Number.isFinite(e)&&Number.isFinite(t)&&t>e))return[];const n=zt(t-e,o),r=[];for(let a=Math.ceil(e/n)*n;a<t-.4*n;a+=n)a>e+.4*n&&r.push(Number(a.toPrecision(12)));return[e,...r,t]}(e.min,e.max):[],u=e.max-e.min,h=d.length?d.map(t=>c(i((t-e.min)/u))):Array.from({length:11},(e,t)=>c(i(t/10))),p=zt(u),m=C_(j_(o,e.entityId,e.config.attribute,r?.ghost,n),e,r?.ghost,{cx:T_,cy:O_,r:40.5,width:6,tick:[36,44],at:i},o),f=t.target&&null!==e.targetPosition,g=f?67:60,y=wt(r)||d.length>0,v=y?Math.max(94,Math.ceil(Mt(T_,O_,P_,a[0],a[1],6).y1)+14):94,_=d.map(t=>{const n=i((t-e.min)/u),[r,a]=ft(T_,O_,g,n),{anchor:s,dy:l}=St(n);return q`<text class="tick-label" x=${r.toFixed(2)} y=${a.toFixed(2)} dy="${l}em" text-anchor=${s}>${Wt(t,Et(t,p),o)}</text>`});let b=Z;if(t.target&&null!==e.targetPosition&&e.available){const t=i(e.targetPosition),[o,n]=ft(T_,O_,57,t),[r,a]=ft(T_,O_,64,t-3),[s,l]=ft(T_,O_,64,t+3);b=q`<polygon class="target-mark" points="${o.toFixed(2)},${n.toFixed(2)} ${r.toFixed(2)},${a.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const x=!t.value,w=e.available?At(e,r):{kind:"value"};let $={x:0,y:0,w:130,h:x?82:104};if(y){const t=function(e,t,o,n,r,a){const i=[Mt(T_,O_,P_,t[0],t[1],r.hasTarget?15:7),Mt(T_,O_,43,t[0],t[1],0),{x0:57,y0:58,x1:73,y1:74},r.compact?{x0:2,y0:40,x1:128,y1:82}:{x0:2,y0:r.valueY-16,x1:128,y1:r.valueY+6}],s=e.max-e.min;for(const c of o){const o=$t(t,(c-e.min)/s),[l,d]=ft(T_,O_,r.labelR,o),{anchor:u,dy:h}=St(o),p=9*Wt(c,Et(c,n),a).length*.6,m="start"===u?l:"end"===u?l-p:l-p/2,f=d+9*h;i.push({x0:m,y0:f-9,x1:m+p,y1:f+2})}const l=kt(...i);return{x0:Math.floor(l.x0-2),y0:Math.floor(l.y0-2),x1:Math.ceil(l.x1+2),y1:Math.ceil(l.y1+2)}}(e,a,d,p,{hasTarget:f,labelR:g,valueY:v,compact:x},o);$={x:t.x0,y:t.y0,w:t.x1-t.x0,h:t.y1-t.y0}}const k=y?`width: min(${U_($.w)}px, 100%); aspect-ratio: ${U_($.w)} / ${U_($.h)}`:void 0;return R`<div
      class="needle-gauge ${y?"fitted":""}"
      style=${y?`--needle-start: ${U_(a[0])}deg; width: ${U_(Math.max(130,$.w))}px`:Z}
    >
      <svg
        class=${x?"compact":""}
        viewBox="${U_($.x)} ${U_($.y)} ${U_($.w)} ${U_($.h)}"
        style=${k??Z}
        aria-hidden="true"
      >
        ${l} ${m} ${h} ${_} ${b}
        ${e.available?q`<g class="needle" style="transform: rotate(${U_(i(e.position))}deg)"><path d=${M=T_,z=O_,E=42,S=3,`M${mt(M)} ${mt(z-E)} L${mt(M+S)} ${mt(z)} L${mt(M-S)} ${mt(z)} Z`}></path></g>`:Z}
        <circle class="hub" cx=${T_} cy=${O_} r="6"></circle>
        <circle class="hub-dot" cx=${T_} cy=${O_} r="2.5"></circle>
        ${e.available?t.value?"value"===w.kind?q`<text class="value" x=${T_} y=${v} text-anchor="middle">${e.display}</text>`:"text"===w.kind?q`<text
                      class="center-text"
                      x=${T_}
                      y=${v}
                      text-anchor="middle"
                      style=${w.band?`fill: ${je(e.band.color)}`:Z}
                    >${w.text}</text>`:Z:Z:x?function(e){return I_(e,58,11,7,55)}(e.display):function(e,t=94){return I_(e,126,12,8,t,18)}(e.display,v)}
      </svg>
      ${t.name&&"name"!==r?.center||t.icon?R`<div class="name">
              ${t.icon?R`<ha-state-icon
                      class="icon"
                      .hass=${o}
                      .stateObj=${e.stateObj}
                      .icon=${Zh(e)}
                    ></ha-state-icon>`:Z}
              ${t.name&&"name"!==r?.center?R`<span class="name-text">${e.name}</span>`:Z}
            </div>`:Z}
    </div>`;var M,z,E,S}};function W_(e){return e.map(e=>e.available&&e.value>0?e.value:0)}function R_(e,t=100){const o=e.reduce((e,t)=>e+Math.max(0,t),0);if(o<=0)return e.map(()=>0);const n=e.map(e=>Math.max(0,e)/o*t),r=n.map(Math.floor);let a=t-r.reduce((e,t)=>e+t,0);const i=n.map((e,t)=>({i:t,rest:e-r[t]})).sort((e,t)=>t.rest-e.rest||e.i-t.i);for(const{i:s}of i){if(a<=0)break;r[s]+=1,a-=1}return r}function q_(e,t){return t>0?e/t*(180/Math.PI):0}function B_(e){const t=Math.max(0,e.end-e.start);return`--a:${(e.start-90).toFixed(3)}deg;--len:${t.toFixed(3)}`}function Z_(e,t,o,n,r="primary"){return"bands"===n?je(e.band.color):"shades"===n?function(e,t,o){return o<=1||t<=0?e:`color-mix(in srgb, ${e} ${Math.round(100-Math.min(t,o-1)/(o-1)*65)}%, var(--card-background-color, #fff))`}(je(r),t,o):je(function(e){const t=e.config.color;return"string"==typeof t&&""!==t.trim()?t:void 0}(e)??Ya[t%Ya.length])}function V_(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:""}function Y_(e,t,o,n=e.map(e=>e.available?e.value:0)){const r=e.map((e,t)=>({e:e,v:n[t]})).filter(({e:e})=>e.available);if(!r.length)return;const a=r.reduce((e,{v:t})=>e+t,0),i="total"===t?a:a/r.length,s=Math.max(...r.map(({e:e})=>e.decimals));return{value:i,text:Wt(i,s,o),unit:V_(e)}}function G_(e){return Ee(e.config)?0:Z}function X_(e,t){const{show:o}=t.config;return!e.length||!o.name&&!o.value&&e.every(e=>void 0===e.share)?Z:R`<div class="parts-legend">
    ${e.map(e=>R`<div
          class="entity part-row ${Ee(e.entity.config)?"interactive":""} ${e.entity.available?"":"unavailable"}"
          data-index=${e.index}
          tabindex=${G_(e.entity)}
          aria-label=${void 0===e.share?e.entity.label:`${e.entity.label}, ${e.share}`}
        >
          <span class="swatch ${e.entity.available?"":"empty"}" style="background:${e.color}"></span>
          ${o.name?R`<span class="part-name">${e.entity.name}</span>`:Z}
          ${o.value?R`<span class="part-value value">${e.entity.display}</span>`:Z}
          ${void 0===e.share?Z:R`<span class="part-share">${e.share}</span>`}
        </div>`)}
  </div>`}function K_(e,t){return Bt(Wt(e,0,t),"%")}function J_(e,t){return Ze(e.hass,"parts_aria",{style:Ze(e.hass,t),names:e.items.map(e=>e.name).join(", ")})}function Q_(e,t,o){return R`<div class="centre" aria-hidden="true">
    <div class="centre-value">${e}${t?R`<span class="centre-unit">${t}</span>`:Z}</div>
    ${o?R`<div class="centre-caption">${o}</div>`:Z}
  </div>`}function eb(e,t,o){const n=e[t];if(void 0!==n&&!o.includes(n))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function tb(e,t,o,n){const r=e[t];if(void 0!==r&&("number"!=typeof r||!Number.isFinite(r)||r<o||r>n))throw new Error(`"${t}" must be a number from ${o} to ${n}`)}function ob(e,t){const o=e[t];if(void 0!==o&&"boolean"!=typeof o)throw new Error(`"${t}" must be true or false`)}function nb(e,t){const o=e[t];if(void 0!==o&&"string"!=typeof o)throw new Error(`"${t}" must be text`)}const rb=a`
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
`,ab=["series","bands"];function ib(e,t,o,n){const{show:r}=o.config,a=function(e,t,o){const n=t-e;if(!(n>0))return{count:0,per:1};const r=void 0!==o&&o>0?o:n<=20?1:n/10,a=Math.ceil(n/r-1e-9);return a>100?{count:100,per:n/100}:{count:a,per:r}}(e.min,e.max,n.perIcon),i=e.available?function(e,t,o,n){const r=Math.min(o.count,Math.max(0,(e-t)/o.per)),a=n?r:Math.floor(r+1e-9);return Array.from({length:o.count},(e,t)=>Math.min(1,Math.max(0,a-t)))}(e.value,e.min,a,n.partial):a.count?Array(a.count).fill(0):[],s=Z_(e,t,o.items.length,n.colorBy),l=e.config.icon??n.unitIcon??(e.stateObj?void 0:"mdi:checkbox-blank-circle"),c=a.count>20?20:28,d=e.available?R`<span class="picto-now">${e.valueText}</span
        ><span class="picto-of"
          >/ ${Bt(Wt(e.max,Number.isInteger(e.max)?0:e.decimals,o.hass),e.unit)}</span
        >`:e.display;return R`<div
    class="entity picto-row ${Ee(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    tabindex=${G_(e)}
    aria-label=${e.label}
  >
    ${r.name?R`<span class="name picto-name">${e.name}</span>`:Z}
    <div class="picto-icons" style="--mdc-icon-size:${c}px" role="img" aria-label=${e.label}>
      ${function(e,t){if(e<=0)return[];if(!(t>0))return[[0,e]];const o=[];for(let n=0;n<e;n+=t)o.push([n,Math.min(e,n+t)]);return o}(i.length,n.groupSize).map(([t,n])=>R`<span class="picto-group">${i.slice(t,n).map((n,r)=>((t,n)=>R`<span class="unit" style="--i:${n};--fill:${(100*t).toFixed(1)}%">
      <ha-state-icon class="unit-empty" .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon>
      <span class="unit-full" style="color:${s}"
        ><ha-state-icon .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon
      ></span>
    </span>`)(n,t+r))}</span>`)}
    </div>
    ${r.value?R`<span class="value picto-value">${d}</span>`:Z}
  </div>`}const sb=[{name:"unit_icon",path:["unit_icon"]},{name:"per_icon",path:["per_icon"]},{name:"group_size",path:["group_size"],default:5},{name:"color_by",path:["color_by"],default:"series"},{name:"partial",path:["partial"],default:!0}];const lb={layout:"chart",group:"totals",height:180,styles:a`
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
        <path d="M${3+11*e} 30 a7 7 0 0 1 14 0 z" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`)}`,validate(e){nb(e,"unit_icon");const t=e.per_icon;if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<=0))throw new Error('"per_icon" must be a number more than 0');if(tb(e,"group_size",0,50),void 0!==e.group_size&&!Number.isInteger(e.group_size))throw new Error('"group_size" must be a whole number');eb(e,"color_by",ab),ob(e,"partial")},editor:function(e){const t=Tf("pictograph",e.hass,()=>[{name:"unit_icon",selector:{icon:{}}},{type:"grid",name:"",schema:[{name:"per_icon",selector:{number:{min:0,step:"any",mode:"box"}}},{name:"group_size",selector:{number:{min:0,max:50,mode:"box"}}},{name:"color_by",selector:hf(e.hass,"color_by",ab)}]},{name:"partial",selector:{boolean:{}}}]);return Rf(e,"chart",t,sb)},render:function(e){const t={perIcon:(o=e.raw).per_icon,unitIcon:o.unit_icon||void 0,groupSize:o.group_size??5,partial:!1!==o.partial,colorBy:o.color_by??"series"};var o;return R`<div class="pictograph" role="group" aria-label=${J_(e,"editor_style_pictograph")}>
    ${e.items.map((o,n)=>ib(o,n,e,t))}
  </div>`}},cb=["donut","pie"],db=["total","none"],ub=["series","bands","shades"],hb=48;function pb(e,t){const o=function(e){const t=e.reduce((e,t)=>e+Math.max(0,t),0);return e.map(e=>t>0?Math.max(0,e)/t:0)}(e),n=o.filter(e=>e>0).length,r="donut"===t.shape?41.5:24;let a=0;return"donut"===t.shape&&(n>1&&(a+=q_(t.gap,r)),t.rounded&&(a+=q_(13,r))),function(e,t=0,o=360){const n=o-t;let r=t;return e.map(e=>{const t=r;return r+=e*n,{start:t,end:r}})}(o).map((e,t)=>o[t]>0?function(e,t){const o=e.end-e.start,n=Math.min(Math.max(0,t),o)/2;return{start:e.start+n,end:e.end-n}}(e,a):void 0)}const mb=[{name:"shape",path:["shape"],default:"donut"},{name:"color_by",path:["color_by"],default:"series"},{name:"center",path:["center"],default:"total"},{name:"center_label",path:["center_label"],default:""},{name:"gap",path:["gap"],default:2},{name:"shade_color",path:["shade_color"],default:""},{name:"rounded",path:["rounded"],default:!1},{name:"gradient",path:["gradient"],default:!1},{name:"show_percent",path:["show_percent"],default:!0}];const fb={layout:"chart",group:"totals",height:200,styles:a`
    ${rb}
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
      pathLength="100" stroke-dasharray="22 78" stroke-dashoffset="-76" transform="rotate(-90 32 20)" />`,validate(e){eb(e,"shape",cb),eb(e,"center",db),eb(e,"color_by",ub),tb(e,"gap",0,10),ob(e,"rounded"),ob(e,"gradient"),ob(e,"show_percent"),nb(e,"shade_color"),nb(e,"center_label")},editor:function(e){const t=Tf(`pie|${_f(e.config)}`,e.hass,()=>[...bf(e.hass,e.config),{type:"grid",name:"",schema:[{name:"shape",selector:hf(e.hass,"shape",cb)},{name:"color_by",selector:hf(e.hass,"color_by",ub)},{name:"center",selector:hf(e.hass,"center",db)},{name:"center_label",selector:{text:{}}},{name:"gap",selector:{number:{min:0,max:10,step:.5,mode:"slider"}}},{name:"shade_color",selector:{text:{}}}]},{name:"rounded",selector:{boolean:{}}},{name:"gradient",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Rf(e,"chart",t,[...vf,...mb])},render:function(e){const t={shape:(o=e.raw).shape??"donut",center:o.center??"total",colorBy:o.color_by??"series",shadeColor:o.shade_color||"primary",gap:o.gap??2,rounded:!0===o.rounded,gradient:!0===o.gradient,percent:!1!==o.show_percent,centerLabel:o.center_label??""};var o;const n=e.items,r=W_(n),a=n.map((e,o)=>Z_(e,o,n.length,t.colorBy,t.shadeColor)),i=pb(r,t),s="donut"===t.shape,l=s?41.5:24,c=s?13:hb,d=s?35/hb:0,u=i.filter(Boolean).length;if(0===u&&uo(n))return R`<div class="chart-message">${Ze(e.hass,"energy_nothing_flowed")}</div>`;const h=t.gradient?q`<defs>${n.map((e,t)=>i[t]?function(e,t,o){return q`<radialGradient id=${e} gradientUnits="userSpaceOnUse" cx="50" cy="50" r=${hb}>
    <stop offset=${o} style="stop-color:color-mix(in srgb, ${t} 65%, #fff)"></stop>
    <stop offset="1" style="stop-color:${t}"></stop>
  </radialGradient>`}(`cd-pie-${t}`,a[t],d):Z)}</defs>`:Z,p=n.map((e,o)=>{const n=i[o];if(!n)return Z;const r=t.gradient?`url(#cd-pie-${o})`:a[o];return q`<g
      class="entity slice ${Ee(e.config)?"interactive":""}"
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
        style="${B_(n)};stroke:${r}"
      ></circle>
    </g>`}),m=!s&&t.gap>0&&u>1?i.map(e=>e?q`<line class="separator" x1="50" y1="50" x2="50" y2=${1}
                stroke-width=${t.gap} style="--a:${e.start.toFixed(3)}deg"></line>`:Z):Z,f=0===u?q`<circle class="track" cx="50" cy="50" r=${l} stroke-width=${c} fill="none"></circle>`:Z,g=R_(r),y=n.map((o,n)=>({index:n,entity:o,color:a[n],share:t.percent&&r[n]>0?K_(g[n],e.hass):void 0})),v=Y_(n,"total",e.hass,r),_=s&&"total"===t.center&&v?Q_(v.text,"",t.centerLabel||V_(n)):Z;return R`<div class="parts">
    <div class="dial">
      <svg viewBox="0 0 100 100" role="img" aria-label=${J_(e,"editor_style_pie")}>
        ${h}${f}${p}${m}
      </svg>
      ${_}
    </div>
    ${X_(y,e)}
  </div>`}};let gb=0;const yb=new WeakMap;const vb=60,_b=60,bb=e=>String(Math.round(1e3*e)/1e3+0);function xb(e){return Math.min(22,Math.floor(124/Math.max(1,e.length)))}function wb(e){const t=function(e,t){const o=e/2;return[-o+t[0]*e,-o+t[1]*e]}(e,[0,1]),o=gt(vb,_b,46,t[0],t[1]),n=e<360;return{layout:"tiles",group:"gauges",height:n?135:155,minColumnWidth:128,styles:a`
      ${N_}
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
    `,render(e,{show:r,hass:a,requestUpdate:i}){const s=function(e){let t=yb.get(e);return t||(t="cd-g-"+ ++gb,yb.set(e,t)),t}(e.config),l=e.config.gauge,c=xt(t,l),d=wt(l),u=d?gt(vb,_b,46,c[0],c[1]):o;let h=0,p=n?100:120;if(d){const e=kt(Mt(vb,_b,46,c[0],c[1],6.5),{x0:26,y0:26,x1:94,y1:94});h=Math.max(0,Math.floor(e.y0)),p=Math.min(120,Math.ceil(e.y1))-h}const m=p<120,f=e.available&&r.value?At(e,l):{kind:"none"},g=e.span[1]-e.span[0]<=0,y=`stroke-dasharray: ${bb(100*(e.span[1]-e.span[0]))} 100; stroke-dashoffset: ${bb(100*-e.span[0])}`,v=(_=e.band.color,Object.prototype.hasOwnProperty.call(Ae,_)?Ae[_].fallback:_);var _;const b=function(e){return!e.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",e))}(v)?`url(#${s}) ${v}`:`url(#${s})`,x=r.icon?6:0,w=xb(e.valueText);let $=Z;if(r.target&&null!==e.targetPosition&&e.available){const t=$t(c,e.targetPosition),[o,n]=ft(vb,_b,39.5,t),[r,a]=ft(vb,_b,52.5,t);$=q`<line class="tick" x1=${o.toFixed(2)} y1=${n.toFixed(2)} x2=${r.toFixed(2)} y2=${a.toFixed(2)}></line>`}const k=C_(j_(a,e.entityId,e.config.attribute,l?.ghost,i),e,l?.ghost,{cx:vb,cy:_b,r:37.5,width:4,tick:[35,40.5],at:e=>$t(c,e)},a);return R`<div class="radial ${m?"cropped":""}">
        <div class="dial ${d?"fitted":""}" style=${d?`aspect-ratio: 124 / ${p}; --y0: ${h}`:Z}>
          <svg viewBox="0 ${h} 120 ${p}" aria-hidden="true">
            <defs>
              <linearGradient id=${s} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${vb} cy=${_b} r="34"></circle>
            <path class="track" d=${u}></path>
            ${k}
            ${e.available?q`<path
                  class="value-arc ${g?"empty":""}"
                  d=${u}
                  pathLength="100"
                  style=${y}
                  stroke=${b}
                ></path>`:Z}
            ${$}
            ${e.available?q`${"text"===f.kind?q`<text
                        class="center-text"
                        x=${vb}
                        y=${66+x}
                        text-anchor="middle"
                        style="font-size: ${Math.min(18,xb(f.text))}px${f.band?`; fill: ${je(e.band.color)}`:""}"
                      >${f.text}</text>`:"value"===f.kind?q`<text
                        class="value"
                        x=${vb}
                        y=${64+x}
                        text-anchor="middle"
                        style=${w<22?`font-size: ${w}px`:Z}
                      >${e.valueText}</text>
                      <text class="unit" x=${vb} y=${80+x} text-anchor="middle">${e.unit}</text>`:Z}`:function(e){const{lines:t,size:o}=F_(e),n=64-1.2*(t.length-1)*o/2;return q`<text class="na" text-anchor="middle" style="font-size: ${o}px">${t.map((e,t)=>q`<tspan x=${vb} y=${bb(n+1.2*t*o)}>${e}</tspan>`)}</text>`}(e.display)}
          </svg>
          ${r.icon&&e.available?R`<ha-state-icon
                  class="icon ${r.value&&"none"!==f.kind?"":"centre"}"
                  .hass=${a}
                  .stateObj=${e.stateObj}
                  .icon=${Zh(e)}
                ></ha-state-icon>`:Z}
        </div>
        ${r.name&&"name"!==l?.center?R`<span class="name">${e.name}</span>`:Z}
      </div>`}}}const $b=wb(360),kb=wb(270),Mb=["average","total","none"],zb=["series","bands"];function Eb(e){return{start:e.start_angle??0,end:e.end_angle??270,center:e.center??"average",colorBy:e.color_by??"series",rounded:!1!==e.rounded_ends}}const Sb=[{name:"start_angle",path:["start_angle"],default:0},{name:"end_angle",path:["end_angle"],default:270},{name:"center",path:["center"],default:"average"},{name:"color_by",path:["color_by"],default:"series"},{name:"rounded_ends",path:["rounded_ends"],default:!0}];const Ab={layout:"chart",group:"totals",height:200,styles:a`
    ${rb}
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
      pathLength="100" stroke-dasharray="48 100" transform="rotate(-90 32 20)" stroke-linecap="round" />`,validate(e){tb(e,"start_angle",-360,360),tb(e,"end_angle",-360,360);const{start:t,end:o}=Eb(e);if(o<=t||o-t>360)throw new Error('"end_angle" must be after "start_angle", and at most 360 degrees after it');eb(e,"center",Mb),eb(e,"color_by",zb),ob(e,"rounded_ends")},editor:function(e){const t=Tf("rings",e.hass,()=>[{type:"grid",name:"",schema:[{name:"start_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"end_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"center",selector:hf(e.hass,"center",Mb)},{name:"color_by",selector:hf(e.hass,"color_by",zb)}]},{name:"rounded_ends",selector:{boolean:{}}}]);return Rf(e,"chart",t,Sb,{start_angle:"editor_rings_start_angle"})},render:function(e){const t=Eb(e.raw),o=e.items,{radii:n,width:r}=function(e){if(e<=0)return{radii:[],width:0};const t=Math.min(9,28/(1.33*e)),o=1.33*t;return{radii:Array.from({length:e},(e,n)=>48-t/2-n*o),width:t}}(o.length),a=o.map((e,n)=>Z_(e,n,o.length,t.colorBy)),i=t.rounded?"round":"butt",s=B_({start:t.start,end:t.end}),l=o.map((e,o)=>{const l=e.available?q`<circle class="seg" cx="50" cy="50" r=${n[o]} pathLength="360" stroke-width=${r}
          stroke-linecap=${i} style="${B_(function(e,t,o){return{start:t,end:t+Math.min(1,Math.max(0,e))*(o-t)}}(e.position,t.start,t.end))};stroke:${a[o]}"></circle>`:Z;return q`<g
      class="entity ring ${Ee(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
      data-index=${o}
      aria-label=${e.label}
    >
      <circle class="ring-track" cx="50" cy="50" r=${n[o]} pathLength="360" stroke-width=${r}
        stroke-linecap=${i} style=${s}></circle>
      ${l}
    </g>`}),c="none"===t.center?void 0:Y_(o,t.center,e.hass),d=c?Q_(c.text,c.unit,Ze(e.hass,`parts_${t.center}`)):Z,u=o.map((e,t)=>({index:t,entity:e,color:a[t]})),h=function(e,t){const o=e=>-Math.cos(e*Math.PI/180),n=360*Math.ceil((e-180)/360)+180<=t?1:Math.max(o(e),o(t));return Math.min(100,Math.max(66,50+48*n+6))}(t.start,t.end);return R`<div class="parts">
    <div class="dial" style="aspect-ratio:100 / ${h.toFixed(2)}">
      <svg viewBox="0 0 100 ${h.toFixed(2)}" role="img" aria-label=${J_(e,"editor_style_rings")}>
        ${l}
      </svg>
      <div class="centre-box" style="height:${(100/h*100).toFixed(2)}%">${d}</div>
    </div>
    ${X_(u,e)}
  </div>`}},jb={layout:"chart",group:"distribution",height:240,styles:_y,thumbnail:()=>q`
    <g fill="var(--primary-color, #03a9f4)">
      <circle cx="10" cy="32" r="2.5" /><circle cx="17" cy="27" r="2.5" /><circle cx="22" cy="29" r="2.5" />
      <circle cx="28" cy="21" r="2.5" /><circle cx="34" cy="23" r="2.5" /><circle cx="40" cy="15" r="2.5" />
      <circle cx="47" cy="17" r="2.5" /><circle cx="53" cy="9" r="2.5" />
    </g>
    <g fill="var(--warning-color, #f59e0b)">
      <circle cx="14" cy="18" r="2.5" /><circle cx="31" cy="33" r="2.5" /><circle cx="50" cy="28" r="2.5" />
    </g>`,validate:e=>hy(e,"scatter"),editor:ky("scatter"),entityFields:()=>Ey(),disconnect:by,render:e=>gy(e,"scatter")};function Cb(e){const[t,o]=e;return Array.from({length:10},(e,n)=>{const r=(n+.5)/10;return r>t&&r<=o})}const Nb={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:a`
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
  `,render(e,{show:t,hass:o}){const n=e.available?Cb(e.span):Cb([0,0]),r=t.target&&e.available&&null!==e.targetPosition?Math.min(9,Math.max(0,Math.floor(10*e.targetPosition))):-1,a=!e.available;return R`<div class="seg">
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Zh(e)}
            ></ha-state-icon>`:Z}
      <div class="body">
        ${t.name||a?R`<div class="name">
                ${t.name?R`<span class="label">${e.name}</span>`:Z}
                ${a?R`<span class="status">${e.display}</span>`:Z}
              </div>`:Z}
        <div class="cells">
          ${n.map((e,t)=>R`<i class="cell ${e?"on":""} ${t===r?"mark":""}" style="--i:${t}"></i>`)}
        </div>
      </div>
      ${t.value?R`<span class="value">${e.available?e.display:""}</span>`:Z}
    </div>`}},Lb={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:a`
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
  `,render:(e,{show:t,hass:o})=>R`
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Zh(e)}
            ></ha-state-icon>`:Z}
      ${t.value||!e.available?R`<span class="value">${e.display}</span>`:Z}
      <div class="tube">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:Z}
      </div>
      ${t.name?R`<span class="name">${e.name}</span>`:Z}
    `},Fb=[{from:-1/0,color:"red"},{from:20,color:"amber"},{from:40,color:"green"}];function Tb(e,t,o){const{show:n}=o.config,r=e.available?function(e){return e.available&&null!==e.value?e.config.severity===Ct?Fe(e.value,Fb).color:e.band.color:"grey"}(e):void 0;return R`<div
    class="entity battery ${e.available?"":"unavailable"}"
    data-index=${t}
    tabindex="0"
    role="img"
    aria-label=${e.label}
    title=${e.label}
  >
    ${function(e,t){const o=38*Math.min(1,Math.max(0,e));return q`<svg class="glyph" viewBox="0 0 ${49} ${22}" width=${49} height=${22}
    aria-hidden="true">
    <rect class="body ${t?"":"empty"}" x="0.75" y="0.75" width=${42.5} height=${20.5} rx="4"></rect>
    <rect class="cap" x=${45} y=${7} width="3" height="8" rx="1"></rect>
    ${t&&o>0?q`<rect class="level" x=${3} y=${3} width=${o.toFixed(2)} height=${16} rx="2"
          fill=${je(t)}></rect>`:Z}
  </svg>`}(e.available?e.position:0,r)}
    ${n.value||!e.available?R`<span class="battery-value">${e.display}</span>`:Z}
    ${n.name?R`<span class="battery-name">${e.name}</span>`:Z}
  </div>`}const Ob={layout:"chart",group:"bars",height:230,styles:a`
    .battery-grid {
      display: grid;
      gap: 14px ${8}px;
      padding: 4px 0;
    }
    .battery-grid .battery {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      min-width: 0;
      padding: 4px 2px;
      cursor: pointer;
    }
    .battery .glyph {
      display: block;
      margin-bottom: 4px;
      overflow: visible;
    }
    .battery .body {
      fill: none;
      stroke: var(--secondary-text-color);
      stroke-width: 1.5;
    }
    .battery .body.empty {
      stroke-dasharray: 3 2;
      opacity: 0.6;
    }
    .battery .cap {
      fill: var(--secondary-text-color);
    }
    .battery .level {
      transition: width var(--cd-duration) var(--cd-easing);
    }
    :host(:not([ready])) .battery .level {
      width: 0;
    }
    :host([static]) .battery .level {
      transition: none;
    }
    .battery-value {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      white-space: nowrap;
    }
    .battery.unavailable .battery-value {
      font-weight: 400;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .battery-name {
      max-width: 100%;
      font-size: 12px;
      color: var(--secondary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,thumbnail:()=>q`
    ${[[4,4,.9,"var(--success-color, #43a047)"],[34,4,.55,"var(--success-color, #43a047)"],[4,23,.3,"var(--warning-color, #f59e0b)"],[34,23,.12,"var(--error-color, #db4437)"]].map(([e,t,o,n])=>q`
        <rect x=${e} y=${t} width="22" height="12" rx="2.5" fill="none" stroke="var(--secondary-text-color, #727272)"
          stroke-width="1.2"></rect>
        <rect x=${e+22.5} y=${t+4} width="2" height="4" rx="0.5"
          fill="var(--secondary-text-color, #727272)"></rect>
        <rect x=${e+2} y=${t+2} width=${18*o} height="8" rx="1" fill=${n}></rect>`)}`,render(e){const t=e.items.map(e=>e.label).join(", ");return R`<div
      class="battery-grid"
      style=${function(e){return void 0===e?"grid-template-columns: repeat(auto-fill, minmax(88px, 1fr))":`grid-template-columns: repeat(auto-fill, minmax(max(min(76px, 100%), calc((100% - ${8*(e-1)}px) / ${e} - 0.5px)), 1fr))`}(e.config.columns)}
      role="img"
      aria-label=${Ze(e.hass,"battery_aria",{levels:t})}
    >
      ${e.items.map((t,o)=>Tb(t,o,e))}
    </div>`}},Pb={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:a`
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
  `,render(e,{show:t,hass:o}){const n=t.value||!e.available;return R`
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Zh(e)}
            ></ha-state-icon>`:Z}
      <div class="body">
        ${t.name||n?R`<div class="top">
                ${t.name?R`<span class="name">${e.name}</span>`:Z}
                ${n?R`<span class="value">${e.display}</span>`:Z}
              </div>`:Z}
        <div class="track">
          <div class="fill"></div>
          ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:Z}
        </div>
      </div>
    `}},Db=["one","each"],Ub=["series","bands"];function Ib(e){if(1===e.length){const t=e[0];return t.available?[R_([t.position,1-t.position])[0]]:[0]}return R_(W_(e),100)}function Hb(e,t){const{col:o,row:n}=function(e){return{col:e%10,row:9-Math.floor(e/10)}}(e);return q`<rect
    class="cell ${t?"filled":""}"
    x=${10*o+.8}
    y=${10*n+.8}
    width="8.4"
    height="8.4"
    rx="1.6"
    style="--k:${e}${t?`;fill:${t}`:""}"
  ></rect>`}function Wb(e,t,o,n){let r=0;const a=e.map((e,n)=>{const a=r;if(r+=e,!e)return Z;const i=o[n];return q`<g class="entity ${Ee(i.config)?"interactive":""}" data-index=${n}>
      ${Array.from({length:e},(e,o)=>Hb(a+o,t[n]))}
    </g>`}),i=Array.from({length:100-r},(e,t)=>Hb(r+t,void 0));return R`<svg class="waffle" viewBox="0 0 100 100" role="img" aria-label=${n}>
    ${a}
    <g class="empty">${i}</g>
  </svg>`}const Rb=[{name:"waffles",path:["waffles"],default:"one"},{name:"color_by",path:["color_by"],default:"series"},{name:"headline",path:["headline"],default:!0},{name:"show_percent",path:["show_percent"],default:!0}];const qb={layout:"chart",group:"totals",height:210,styles:a`
    ${rb}
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
    ${Array.from({length:25},(e,t)=>{const o=t%5,n=4-Math.floor(t/5);return q`<rect x=${20+5*o} y=${8+5*n} width="4" height="4" rx="0.8" fill=${t<9?"var(--warning-color, #f59e0b)":t<15?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`})}`,validate(e){eb(e,"waffles",Db),eb(e,"color_by",Ub),ob(e,"headline"),ob(e,"show_percent")},editor:function(e){const t=Tf("waffle",e.hass,()=>[{type:"grid",name:"",schema:[{name:"waffles",selector:hf(e.hass,"waffles",Db)},{name:"color_by",selector:hf(e.hass,"color_by",Ub)}]},{name:"headline",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Rf(e,"chart",t,Rb)},render(e){const t={waffles:(o=e.raw).waffles??"one",colorBy:o.color_by??"series",headline:!1!==o.headline,percent:!1!==o.show_percent};var o;return"each"===t.waffles?function(e,t){const{show:o}=e.config;return R`<div class="waffles">
    ${e.items.map((n,r)=>{const a=Z_(n,r,e.items.length,t.colorBy),[i]=Ib([n]),s=K_(i,e.hass),l=o.value&&t.percent&&n.available&&n.display!==s;return R`<div
        class="entity waffle-item ${Ee(n.config)?"interactive":""} ${n.available?"":"unavailable"}"
        data-index=${r}
        tabindex=${G_(n)}
      >
        ${Wb([i],[a],[n],n.label)}
        ${o.name?R`<span class="waffle-name">${n.name}</span>`:Z}
        <span class="value waffle-value">${n.available&&t.percent?s:n.display}</span>
        ${l?R`<span class="waffle-raw">${n.display}</span>`:Z}
      </div>`})}
  </div>`}(e,t):function(e,t){const o=e.items,n=o.map((e,n)=>Z_(e,n,o.length,t.colorBy)),r=Ib(o),a=e=>r[e]>0||1===o.length&&o[e].available,i=o.map((i,s)=>({index:s,entity:i,color:n[s],share:!t.percent||!a(s)||t.headline&&1===o.length?void 0:K_(r[s],e.hass)})),s=o[0],l=t.headline&&s&&a(0)?R`<div class="waffle-headline">
          <span class="waffle-big">${K_(r[0],e.hass)}</span>
          <span class="waffle-caption">${s.name}</span>
        </div>`:Z;return R`<div class="parts">
    <div class="waffle-box">${Wb(r,n,o,J_(e,"editor_style_waffle"))}</div>
    <div class="waffle-side">${l}${X_(i,e)}</div>
  </div>`}(e,t)}};function Bb(e,t){return je(Ya[e%Ya.length])}function Zb(e,t){const o=Math.round(Math.min(100,Math.max(0,t)));return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const Vb=["funnel","pyramid"],Yb=["first","previous","none"],Gb=["series","bands"];function Xb(e,t){const o=e=>Math.round(100*e)/100,n=o((100-e)/2),r=o((100-t)/2);return`${n},0 ${o(100-n)},0 ${o(100-r)},10 ${r},10`}const Kb=[{name:"funnel_shape",path:["shape"],default:"funnel"},{name:"funnel_percent_of",path:["percent_of"],default:"first"},{name:"funnel_color_by",path:["color_by"],default:"series"}];function Jb(e,t,o){const n=e[t];if(void 0!==n&&!o.includes(n))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}const Qb={layout:"chart",group:"totals",height:240,styles:a`
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
    <polygon points="23,29 41,29 38,37 26,37" fill="var(--primary-color, #03a9f4)" />`,validate(e){Jb(e,"shape",Vb),Jb(e,"percent_of",Yb),Jb(e,"color_by",Gb)},editor:function(e){const t=Tf("funnel",e.hass,()=>[{name:"funnel_shape",selector:hf(e.hass,"funnel_shape",Vb)},{type:"grid",name:"",schema:[{name:"funnel_percent_of",selector:hf(e.hass,"funnel_percent_of",Yb)},{name:"funnel_color_by",selector:hf(e.hass,"funnel_color_by",Gb)}]}]);return Rf(e,"chart",t,Kb)},render(e){const{items:t,raw:o,hass:n,config:r}=e,a=o.shape??"funnel",i="bands"===o.color_by,s=t.map(e=>e.available?e.value:null),l=function(e){const t=Math.max(0,...e.map(e=>null!==e&&e>0?e:0));return e.map(e=>t>0&&null!==e&&e>0?e/t*100:0)}(s),c=function(e,t){return e.map((o,n)=>{if(o<=0)return{top:0,bottom:0};const r=e[n+1],a=n===e.length-1;return"pyramid"===t?{top:a?0:r>0?r:.8*o,bottom:o}:{top:o,bottom:!a&&r>0?r:.8*o}})}(l,a),d=function(e,t){return"none"===t?e.map(()=>null):e.map((o,n)=>{if(null===o)return null;if("previous"===t&&0===n)return 100;const r="first"===t?e[0]:e[n-1];return null!=r&&r>0?o/r*100:null})}(s,o.percent_of??"first"),{show:u}=r,h=u.name||u.value,p=t.map((e,t)=>{const o=function(e,t,o){if(o)return e.band.color;const n=e.config.color;return"string"==typeof n&&n?n:Ya[t%Ya.length]}(e,t,i),r=d[t],a=null===r?"":`${Wt(r,0,n)}%`,s=l[t]<22?"theme":Le(o),p=Ee(e.config),{top:m,bottom:f}=c[t],g=l[t]>0;return R`<div
        class="entity stage ${p?"interactive":""} ${e.available?"":"unavailable"}"
        data-index=${t}
        role="img"
        aria-label=${a?`${e.label}, ${a}`:e.label}
        tabindex=${p?0:Z}
      >
        <div class="shape">
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            ${g?q`<polygon points=${Xb(m,f)} fill=${je(o)}></polygon>`:q`<polygon class="empty" points=${Xb(30,30)}></polygon>`}
          </svg>
          ${a?R`<div class="percent ${s}" aria-hidden="true">${a}</div>`:Z}
        </div>
        ${h?R`<div class="label" aria-hidden="true">
                ${u.name?R`<span class="name">${e.name}</span>`:Z}
                ${u.value?R`<span class="value">${e.display}</span>`:Z}
              </div>`:Z}
      </div>`});"pyramid"===a&&p.reverse();const m=Ze(n,"funnel_aria",{style:Ze(n,`editor_funnel_shape_${a}`).replace(/ \(.*\)$/,""),names:t.map(e=>e.name).join(", ")});return R`<div class="funnel ${h?"":"no-labels"}" role="group" aria-label=${m}>${p}</div>`}},ex=["floor","area","device","label"];function tx(e){if(null==e||""===e)return[];const t=Array.isArray(e)?e:[e];if(t.some(e=>!ex.includes(e)))throw new Error(`"group_by" must be one or more of: ${ex.join(", ")}`);return ex.filter(e=>t.includes(e))}function ox(e){tx(e.group_by),(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.group:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "group" must be text, such as "Kitchen" or "Ground floor / Kitchen"`)})}function nx(e){return"string"!=typeof e?[]:e.split("/").map(e=>e.trim()).filter(Boolean)}function rx(e){const t=e.replace(/_/g," ").trim();return t.charAt(0).toUpperCase()+t.slice(1)}function ax(e,t,o,n){const r=nx(e.config.group);return r.length?r:t.map(t=>function(e,t,o){const n=o,r=n.entities?.[e],a=r?.device_id?n.devices?.[r.device_id]:void 0,i=r?.area_id??a?.area_id??void 0;switch(t){case"area":return i?n.areas?.[i]?.name??rx(i):void 0;case"floor":{const e=i?n.areas?.[i]?.floor_id:void 0;return e?n.floors?.[e]?.name??rx(e):void 0}case"device":return a?a.name_by_user??a.name??void 0:void 0;case"label":{const e=[...r?.labels??[],...a?.labels??[]][0];return e?n.labels?.[e]?.name??rx(e):void 0}}}(e.entityId,t,o)??n)}function ix(e,t,o){const n={name:o,path:[],value:0,depth:0,children:[]};e.forEach((e,o)=>{let r=n;for(const n of t[o]??[]){let e=r.children.find(e=>void 0===e.entity&&e.name===n);e||(e={name:n,path:[...r.path,n],value:0,depth:r.depth+1,children:[]},r.children.push(e)),r=e}r.children.push({name:e.name,path:r.path,value:0,depth:r.depth+1,children:[],entity:e,index:o})});const r=e=>{e.value=e.entity?function(e){return e.available&&null!==e.value&&e.value>0?e.value:0}(e.entity):e.children.reduce((e,t)=>e+r(t),0);const t=new Map(e.children.map((e,t)=>[e,t]));return e.children.sort((e,o)=>o.value-e.value||t.get(e)-t.get(o)),e.value};return r(n),n}function sx(e,t){let o=e;for(const n of t)if(o=o.children.find(e=>void 0===e.entity&&e.name===n),!o)return;return o}function lx(e){return e.children.length?1+Math.max(...e.children.map(lx)):0}function cx(e){const t=[],o=(e,n,r,a)=>{if(t.push({node:e,level:n,x0:r,x1:a}),e.value<=0)return;let i=r;for(const t of e.children){if(t.value<=0)continue;const s=(a-r)*t.value/e.value;o(t,n+1,i,i+s),i+=s}};return o(e,0,0,1),t}const dx=2*Math.PI;function ux(e,t){return[hx(e*Math.sin(t)),hx(-e*Math.cos(t))]}function hx(e){return Math.round(100*e)/100||0}function px(e,t,o,n){if(t<=0||n<=o)return"";const r=Math.max(0,e);if(n-o>=dx-1e-6){const e=(e,t)=>{const[o,n]=ux(e,0),[r,a]=ux(e,Math.PI);return`M${o} ${n}A${e} ${e} 0 1 ${t} ${r} ${a}A${e} ${e} 0 1 ${t} ${o} ${n}Z`};return r>0?`${e(t,1)}${e(r,0)}`:e(t,1)}const a=n-o>Math.PI?1:0,[i,s]=ux(t,o),[l,c]=ux(t,n),d=`M${i} ${s}A${t} ${t} 0 ${a} 1 ${l} ${c}`;if(0===r)return`${d}L0 0Z`;const[u,h]=ux(r,n),[p,m]=ux(r,o);return`${d}L${u} ${h}A${r} ${r} 0 ${a} 0 ${p} ${m}Z`}function mx(e,t){return t>0?e*dx/t:0}function fx(e){return e.map(([e,t])=>`${e},${t}`).join(" ")}function gx(e){const t=Math.sin(e);return Math.abs(t)<.2?"middle":t>0?"start":"end"}function yx(e,t,o,n,r=void 0){const a=e.config.entities??[],i=a.length,s=Tf(`${t}-${i}`,e.hass,()=>a.map((e,t)=>({name:`e${t}`,selector:n}))),l=e=>{const t=a[e];return"object"==typeof t?t[o]:void 0},c={};for(let d=0;d<i;d++)c[`e${d}`]=l(d)??r;return R`<div class="entity-options" data-section=${t}>
    <div style="margin: 16px 0 4px; font-weight: 500">${Ze(e.hass,`editor_${t}`)}</div>
    ${0===i?R`<div style="color: var(--secondary-text-color)">
            ${Ze(e.hass,"editor_entity_options_none")}
          </div>`:R`<ha-form
            .hass=${e.hass}
            .data=${c}
            .schema=${s}
            .computeLabel=${t=>{const o=yi(a[Number(t.name.slice(1))]),n=e.hass?.states[o]?.attributes?.friendly_name;return"string"==typeof n&&n?n:o}}
            @value-changed=${t=>{t.stopPropagation();const n=t.detail?.value??{};let a=e.config;for(let e=0;e<i;e++){const t=n[`e${e}`],i=t===r||""===t?void 0:t;i!==l(e)&&(a=vi(a,e,o,i))}a!==e.config&&e.commit(a)}}
          ></ha-form>`}
  </div>`}const vx=[{name:"group_by",path:["group_by"],default:[]}];function _x(e){return{name:"group_by",selector:{select:{multiple:!0,mode:"list",options:ex.map(t=>({value:t,label:Ze(e,`editor_group_by_${t}`)}))}}}}function bx(e){const t=e.config.group_by;if(void 0===t||Array.isArray(t))return e;let o;try{o=tx(t)}catch{return e}return{...e,config:{...e.config,group_by:o}}}function xx(e){return yx(e,"entity_groups","group",{text:{}})}const wx={group_by:"editor_hierarchy_group_by"},$x=["limits","shared"],kx={aqi:"AQI",carbon_dioxide:"CO₂",carbon_monoxide:"CO",pm1:"PM1",pm10:"PM10",pm25:"PM2.5",volatile_organic_compounds:"VOC",volatile_organic_compounds_parts:"VOC"};function Mx(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}function zx(e,t,o){const n=tx(t.group_by),r=n.length>0||e.some(e=>nx(e.config.group).length),a=t.scale??"limits",i=e.filter(e=>e.available&&null!==e.value).map(e=>e.value),s=i.length?Math.max(...i):0,l=e=>{const t=e.config.axis;return"string"==typeof t&&t.trim()?t.trim():void 0};if(!r)return{axes:e.map(e=>({name:l(e)??e.name,entity:e})),series:[{name:"",color:Bb(0),points:e.map((e,t)=>({index:t,axis:t,r:Mx(e,a,s)}))}]};const c=Ze(o,"radar_other"),d=[],u=[];return e.forEach((e,t)=>{const r=e.stateObj?.attributes?.device_class,i=l(e)??("string"==typeof r?function(e){if(kx[e])return kx[e];const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}(r):e.name);let h=d.findIndex(e=>e.name===i);-1===h&&(h=d.push({name:i})-1);const p=ax(e,n,o,c).join(" / ")||c;let m=u.find(e=>e.name===p);m||(m={name:p,color:Bb(u.length),points:[]},u.push(m)),m.points.push({index:t,axis:h,r:Mx(e,a,s)})}),{axes:d,series:u}}const Ex=[{name:"radar_scale",path:["scale"],default:"limits"},{name:"radar_fill",path:["fill"],default:!0},...vx];const Sx={layout:"chart",group:"compare",height:280,styles:a`
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2" stroke-linejoin="round" />`,validate(e){if(ox(e),void 0!==e.scale&&!$x.includes(e.scale))throw new Error(`"scale" must be one of: ${$x.join(", ")}`);if(void 0!==e.fill&&"boolean"!=typeof e.fill)throw new Error('"fill" must be true or false');(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.axis:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "axis" must be text`)})},editor:function(e){const t=Tf("radar",e.hass,()=>[{name:"radar_scale",selector:hf(e.hass,"radar_scale",$x)},{name:"radar_fill",selector:{boolean:{}}},_x(e.hass)]);return R`${Rf(bx(e),"chart",t,Ex,wx)} ${xx(e)}
  ${yx(e,"radar_axis","axis",{text:{}})}`},render(e){const t=zx(e.items,e.raw,e.hass),o=t.axes.length,n=1===t.series.length&&""===t.series[0].name,r=!1!==e.raw.fill,a=Ze(e.hass,"radar_aria",{names:(n?e.items.map(e=>e.name):t.series.map(e=>e.name)).join(", ")});return R`<svg
        class="radar-plot"
        viewBox="${-170} ${-120} ${340} ${240}"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label=${a}
      >
        ${function(e){const t=Array.from({length:4},(e,t)=>84*(t+1)/4);return q`${t.map(t=>e>=3?q`<polygon class="grid" points=${fx(Array.from({length:e},(o,n)=>ux(t,mx(n,e))))}></polygon>`:q`<circle class="grid" r=${t}></circle>`)}
    ${Array.from({length:e},(t,o)=>{const[n,r]=ux(84,mx(o,e));return q`<line class="grid spoke" x1="0" y1="0" x2=${n} y2=${r}></line>`})}`}(o)} ${function(e,t,o){const n=e.axes.length,r=o&&t.config.show.value;return q`${e.axes.map((e,o)=>{const a=mx(o,n),[i,s]=ux(96,a),l=gx(a),c=Math.cos(a)<-.2,d=r&&e.entity?2:1,u=c?10:Math.abs(Math.cos(a))<=.2?4-6*(d-1):12*-(d-1);return q`<text class="axis-label" x=${i} y=${s+u} text-anchor=${l}>
      ${t.config.show.name||!r?q`<tspan>${e.name}</tspan>`:Z}
      ${r&&e.entity?q`<tspan class="axis-value ${e.entity.available?"":"muted"}" x=${i} dy="13">${e.entity.display}</tspan>`:Z}
    </text>`})}`}(t,e,n)}
        <g class="radar-grow">
          <circle r=${84} fill="none" stroke="none"></circle>
          ${t.series.map(t=>function(e,t,o,n){const r=e.points.filter(e=>null!==e.r).sort((e,t)=>e.axis-t.axis).map(e=>({p:e,xy:ux(84*e.r,mx(e.axis,t))}));return q`<g class="series">
    ${r.length>1?q`<polygon class="area ${n?"filled":""}" points=${fx(r.map(e=>e.xy))}
            stroke=${e.color} fill=${n?e.color:"none"}></polygon>`:Z}
    ${r.map(({p:t,xy:n})=>q`<g class="entity marker" data-index=${t.index} tabindex="0" aria-label=${o[t.index].label}
        role="img">
        <circle class="hit" cx=${n[0]} cy=${n[1]} r="9"></circle>
        <circle class="dot" cx=${n[0]} cy=${n[1]} r="3.5" stroke=${e.color}></circle>
      </g>`)}
  </g>`}(t,o,e.items,r))}
        </g>
      </svg>
      ${n?Z:R`<div class="radar-legend">
              ${t.series.map(e=>R`<span class="radar-legend-item"
                    ><span class="swatch" style="background:${e.color}"></span>${e.name}</span
                  >`)}
            </div>`}`}},Ax=["shared","limits"],jx=["series","shades","bands"];const Cx=[{name:"polar_scale",path:["scale"],default:"shared"},{name:"polar_color_by",path:["color_by"],default:"series"},{name:"polar_color",path:["color"],default:"primary"}],Nx=Object.keys(Ae);const Lx={layout:"chart",group:"compare",height:260,styles:a`
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
      <path d=${px(0,18,-.6,.6)} fill="var(--primary-color, #03a9f4)" />
      <path d=${px(0,12,.65,1.85)} fill="var(--warning-color, #ffa600)" />
      <path d=${px(0,15,1.9,3.1)} fill="var(--success-color, #43a047)" />
      <path d=${px(0,9,3.15,4.35)} fill="var(--error-color, #db4437)" />
      <path d=${px(0,13,4.4,5.6)} fill="var(--purple-color, #8b6cff)" />
    </g>`,validate(e){if(void 0!==e.scale&&!Ax.includes(e.scale))throw new Error(`"scale" must be one of: ${Ax.join(", ")}`);if(void 0!==e.color_by&&!jx.includes(e.color_by))throw new Error(`"color_by" must be one of: ${jx.join(", ")}`);if(void 0!==e.color&&("string"!=typeof e.color||!e.color))throw new Error('"color" must be a colour name, such as "primary", or any CSS colour')},editor:function(e){const t=Tf("polar_area",e.hass,()=>[{name:"polar_scale",selector:hf(e.hass,"polar_scale",Ax)},{type:"grid",name:"",schema:[{name:"polar_color_by",selector:hf(e.hass,"polar_color_by",jx)},{name:"polar_color",selector:{select:{mode:"dropdown",custom_value:!0,options:Nx.map(t=>({value:t,label:Ze(e.hass,`editor_color_${t}`)}))}}}]}]);return Rf(e,"chart",t,Cx)},render(e){const t=e.raw.scale??"shared",o=e.raw.color_by??"series",n=e.raw.color??"primary",r=e.items.length,a=e.items.filter(e=>e.available&&null!==e.value).map(e=>e.value),i=a.length?Math.max(0,...a):0,s=e.items.map((e,a)=>{const s=function(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}(e,t,i);if(null===s||s<=0)return Z;const[l,c]=function(e,t){if(t<=1)return[0,2*Math.PI];const o=Math.PI/t,n=mx(e,t);return[n-o+.02,n+o-.02]}(a,r),d=6+86*s;return q`<path class="entity slice" data-index=${a} tabindex="0" role="img" aria-label=${e.label}
        d=${px(6,d,l,c)} fill=${function(e,t,o,n,r){return"bands"===n?je(e.band.color):"shades"===n?Zb(je(r),30+70*o):Bb(t)}(e,a,s,o,n)}></path>`}),l=Ze(e.hass,"polar_area_aria",{names:e.items.map(e=>e.name).join(", ")});return R`<svg
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
      ${function(e,t,o){const n=e.items.find(e=>e.available);if("shared"!==t||!n||o<=0)return q``;const r=e.items.length>1?Math.PI/e.items.length:0;return q`${Array.from({length:3},(t,a)=>{const i=92*(a+1)/3,[s,l]=ux(i,r),c=Bt(Wt(o*(a+1)/3,n.decimals,e.hass),n.unit);return q`<text class="ring-label" x=${s+3} y=${l-2}>${c}</text>`})}`}(e,t,i)} ${function(e){const t=e.items.length,{show:o}=e.config;return o.name||o.value?q`${e.items.map((e,n)=>{const r=mx(n,t),[a,i]=ux(104,r),s=Math.cos(r)<-.2,l=o.name&&o.value?2:1,c=s?10:Math.abs(Math.cos(r))<=.2?4-6*(l-1):13*-(l-1);return q`<text class="slice-label ${e.available?"":"muted"}" x=${a} y=${i+c} text-anchor=${gx(r)}>
      ${o.name?q`<tspan>${e.name}</tspan>`:Z}
      ${o.value?q`<tspan class="slice-value" x=${a} dy=${o.name?13:0}>${e.display}</tspan>`:Z}
    </text>`})}`:q``}(e)}
    </svg>`}},Fx=new WeakMap;function Tx(e){return!1!==e.drill_down}function Ox(e){if(void 0!==e.drill_down&&"boolean"!=typeof e.drill_down)throw new Error('"drill_down" must be true or false')}function Px(e,t){Fx.set(e.host,t),e.requestUpdate()}function Dx(e,t){return Tx(e.raw)?function(e,t){let o=e;const n=[];for(const r of t){const e=sx(o,[r]);if(!e||e.value<=0)break;o=e,n.push(r)}return{node:o,path:n}}(t,(o=e.host,Fx.get(o)??[])):{node:t,path:[]};var o}function Ux(e,t,o){if(!Tx(e.raw)||t.entity||t.value<=0)return;const n=()=>Px(e,t.path);return{label:Ze(e.hass,"drill_into",{label:o}),click:e=>{e.stopPropagation(),n()},keydown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n())}}}function Ix(e,t,o,n){if(!o.path.length)return Z;const r=o.path.slice(0,-1),a=r.length&&sx(t,r)?.name||Ze(e.hass,"drill_top");return R`<div class="drill-bar">
    <button
      type="button"
      class="drill-back"
      aria-label=${Ze(e.hass,"drill_back",{name:a})}
      @click=${()=>Px(e,r)}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z" fill="currentColor"></path>
      </svg>
      <span>${a}</span>
    </button>
    <div class="drill-current">
      <span class="drill-name">${o.node.name}</span>
      ${n?R`<span class="drill-total">${n}</span>`:Z}
    </div>
  </div>`}const Hx=a`
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
`;function Wx(e,t){const o=e.reduce((e,t)=>e+t,0);if(o<=0||t<=0)return 1/0;const n=Math.max(...e),r=Math.min(...e),a=t*t;return Math.max(a*n/(o*o),o*o/(a*r))}function Rx(e,t){const o=Math.min(t,e.w/2,e.h/2);return{x:e.x+o,y:e.y+o,w:e.w-2*o,h:e.h-2*o}}const qx=["group","bands"],Bx=240;function Zx(e,t,o,n){const r=[],a=[],i=(e,t,o,s)=>{const l=e.children.filter(e=>e.value>0),c=function(e,t){const o=e.map(()=>({x:t.x,y:t.y,w:0,h:0})),n=e.map((e,t)=>({v:Number.isFinite(e)&&e>0?e:0,i:t})).filter(e=>e.v>0).sort((e,t)=>t.v-e.v||e.i-t.i),r=n.reduce((e,t)=>e+t.v,0);if(r<=0||t.w<=0||t.h<=0)return o;const a=t.w*t.h/r;let{x:i,y:s,w:l,h:c}=t,d=[];const u=()=>{const e=d.reduce((e,t)=>e+t.area,0);if(l>=c){const t=e/c;let n=s;for(const e of d){const r=e.area/t;o[e.i]={x:i,y:n,w:t,h:r},n+=r}i+=t,l-=t}else{const t=e/l;let n=i;for(const e of d){const r=e.area/t;o[e.i]={x:n,y:s,w:r,h:t},n+=r}s+=t,c-=t}d=[]};for(const h of n){const e=h.v*a,t=Math.min(l,c),o=d.map(e=>e.area);0===d.length||Wx([...o,e],t)<=Wx(o,t)||u(),d.push({area:e,i:h.i})}return d.length&&u(),o}(l.map(e=>e.value),t);l.forEach((e,t)=>{const l=c[t],d=s&&void 0===n?t:o;if(e.entity)return void a.push({node:e,rect:Rx(l,1.5),series:d,rank:t});const u=Rx(l,1.5),h=u.h>=44&&u.w>=56;r.push({node:e,rect:u,series:d,head:h});const p=Rx(h?{...u,y:u.y+22-3,h:u.h-22+3}:u,3);i(e,p,d,!1)})};return i(e,{x:0,y:0,w:t,h:o},n??0,!0),{groups:r,leaves:a}}function Vx(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}function Yx(e,t,o){const n=t.items.find(e=>e.available)?.decimals??1;return Bt(Wt(e,n,t.hass),o)}const Gx=new WeakMap,Xx=new WeakMap;const Kx=(e,t)=>e/t*100+"%";function Jx(e,t){return`left:${Kx(e.x,t)};top:${Kx(e.y,Bx)};width:${Kx(e.w,t)};height:${Kx(e.h,Bx)}`}function Qx(e,t,o,n,r){const a=e.node.entity,i=function(e,t){const o=e.node.entity;if("bands"===t)return o.band.color;const n=o.config.color;return"string"==typeof n&&n?n:Ya[e.series%Ya.length]}(e,n),s="group"===n&&e.node.path.length?Zb(je(i),Math.max(70,100-12*(e.rank??0))):je(i),l=Le(i),{w:c,h:d}=e.rect,{show:u}=t.config,h=c>=120&&d>=70&&null!==a.value&&a.value>=.25*r,p=d>=20&&c>=44,m=u.value&&d>=36;return R`<div
    class="entity tile text-${l} ${h?"big":""}"
    data-index=${e.node.index}
    tabindex="0"
    role="img"
    aria-label=${a.label}
    title=${a.label}
    style="${Jx(e.rect,o)};background:${s}"
  >
    ${p&&u.name?R`<span class="tile-name">${a.name}</span>`:Z}
    ${p&&m?R`<span class="tile-value">${a.display}</span>`:Z}
  </div>`}const ew=[{name:"treemap_color_by",path:["color_by"],default:"group"},...vx,{name:"drill_down",path:["drill_down"],default:!0}];const tw={layout:"chart",group:"totals",height:280,styles:a`
    ${Hx}
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
      height: ${Bx}px;
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
      height: ${Bx}px;
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
    <rect x="50" y="23" width="10" height="13" rx="3" fill="var(--success-color, #43a047)" opacity="0.7" />`,validate(e){if(ox(e),Ox(e),void 0!==e.color_by&&!qx.includes(e.color_by))throw new Error(`"color_by" must be one of: ${qx.join(", ")}`)},editor:function(e){const t=Tf("treemap",e.hass,()=>[{name:"treemap_color_by",selector:hf(e.hass,"treemap_color_by",qx)},_x(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return R`${Rf(bx(e),"chart",t,ew,wx)} ${xx(e)}`},disconnect:function(e){Xx.get(e)?.disconnect(),Xx.delete(e)},render(e){const t=function(e){const t=e.host;if(!Xx.has(t)&&"function"==typeof ResizeObserver){const o=new ResizeObserver(()=>{const o=t.shadowRoot?.querySelector(".treemap"),n=o?.clientWidth??0;n>0&&Math.abs(n-(Gx.get(t)??0))>=1&&(Gx.set(t,n),e.requestUpdate())});o.observe(t),Xx.set(t,o)}return Gx.get(t)??400}(e),o=function(e){const t=tx(e.raw.group_by),o=Ze(e.hass,"treemap_other"),n=e.items.map(n=>ax(n,t,e.hass,o));return ix(e.items,n,"")}(e),n=Dx(e,o),r=n.node,a=e.raw.color_by??"group",i=Vx(e.items),s=n.path.length?o.children.filter(e=>e.value>0).findIndex(e=>e.name===n.path[0]):void 0,{groups:l,leaves:c}=Zx(r,t,Bx,s),d=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available),u=void 0!==i&&e.config.show.value&&r.value>0?Yx(r.value,e,i):"",h=u&&!n.path.length?Ze(e.hass,"treemap_total",{value:u}):"",p=Ze(e.hass,"treemap_aria",{names:(r.children.length?r.children:[]).map(e=>e.name).join(", ")}),m=c.length?R`<div class="treemap" role="img" aria-label=${p}>
          ${l.map(o=>function(e,t,o,n,r){const a=je(Ya[e.series%Ya.length]),i=void 0===r?"":Yx(e.node.value,t,r),s=Ux(t,e.node,i?`${e.node.name}, ${i}`:e.node.name);return R`<div
    class="group ${s?"drillable":""}"
    style="${Jx(e.rect,o)};background:${"bands"===n?"var(--cd-track)":Zb(a,14)}"
    role=${s?"button":Z}
    tabindex=${s?0:Z}
    aria-label=${s?.label??Z}
    data-path=${e.node.path.join("/")}
    @click=${s?.click}
    @keydown=${s?.keydown}
  >
    ${e.head?R`<div class="group-head">
            <span class="group-name">${e.node.name}</span>
            ${t.config.show.value&&i&&e.rect.w>=110?R`<span class="group-total">${i}</span>`:Z}
          </div>`:Z}
  </div>`}(o,e,t,a,i))}
          ${c.map(o=>Qx(o,e,t,a,r.value))}
        </div>`:R`<div class="treemap-message">${Ze(e.hass,"treemap_empty")}</div>`;return R`${Ix(e,o,n,u)}
    ${h?R`<div class="treemap-head"><span class="treemap-total">${h}</span></div>`:Z} ${m}
    ${d.length?R`<div class="treemap-missing">
            <span>${Ze(e.hass,"treemap_no_reading")}</span>
            ${d.map(({e:e,index:t})=>R`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
                  >${e.name} (${e.display})</span
                >`)}
          </div>`:Z}`}};function ow(e){return null!==e&&Number.isFinite(e)&&e>0?e:0}function nw(e,t,o){const n=new Set,r=[t];for(;r.length;){const t=r.pop();if(t===o)return!0;n.has(t)||(n.add(t),r.push(...e.get(t)??[]))}return!1}function rw(e){const t=new Map,o=[];for(const n of e)n.from&&n.to&&n.from!==n.to&&(nw(t,n.to,n.from)||(t.set(n.from,[...t.get(n.from)??[],n.to]),o.push(n)));return o}function aw(e){return null!==e&&Number.isFinite(e)&&e>0?e:0}function iw(e,t){const o=rw(e),n=function(e){const t=new Map;for(const o of e)t.set(o.from,t.get(o.from)??0),t.set(o.to,t.get(o.to)??0);for(let o=0;o<=t.size;o++){let o=!1;for(const n of e){const e=t.get(n.from)+1;e>t.get(n.to)&&(t.set(n.to,e),o=!0)}if(!o)break}return t}(o),r=new Map;for(const _ of o)r.has(_.from)||r.set(_.from,r.size),r.has(_.to)||r.set(_.to,r.size);const a=o.filter(e=>aw(e.value)>0),i=new Map,s=e=>{let t=i.get(e);return t||(t={name:e,order:r.get(e),column:n.get(e),value:0,in:0,out:0,x:0,y:0,h:0},i.set(e,t)),t},l=a.map(e=>{const t=aw(e.value),o=s(e.from),n=s(e.to);return o.out+=t,n.in+=t,{flow:e,value:t,source:o,target:n,width:0,y0:0,y1:0}}),c=[...i.values()].sort((e,t)=>e.order-t.order);for(const _ of c)_.value=Math.max(_.in,_.out);const d=[...new Set(c.map(e=>e.column))].sort((e,t)=>e-t);for(const _ of c)_.column=d.indexOf(_.column);const u=d.length;if(0===u)return{nodes:c,links:l,columns:u};const h=d.map((e,t)=>c.filter(e=>e.column===t)),p=e=>t.above?.(e,u)??0,m=h.map(e=>e.reduce((e,t)=>e+p(t),0)+t.gap*(e.length-1)),f=h.map(e=>e.reduce((e,t)=>e+t.value,0)),g=Math.max(0,Math.min(...h.map((e,o)=>(t.height-m[o])/f[o]))),y=t.width-t.left-t.right-t.nodeWidth;h.forEach((e,o)=>{let n=(t.height-(f[o]*g+m[o]))/2;const r=t.left+(u>1?y*o/(u-1):y/2);for(const a of e)n+=p(a),a.x=r,a.y=n,a.h=a.value*g,n+=a.h+t.gap});const v=e=>e.y+e.h/2;for(const _ of l)_.width=_.value*g;for(const _ of c){const e=l.filter(e=>e.source===_).sort((e,t)=>v(e.target)-v(t.target));let t=_.y;for(const n of e)n.y0=t+n.width/2,t+=n.width;const o=l.filter(e=>e.target===_).sort((e,t)=>v(e.source)-v(t.source));t=_.y;for(const n of o)n.y1=t+n.width/2,t+=n.width}return{nodes:c,links:l,columns:u}}function sw(e,t){return e.length*t*.58}function lw(e,t,o){if(sw(e,o)<=t)return e;const n=Math.floor(t/(.58*o))-1;return n>=1?`${e.slice(0,n).trimEnd()}…`:""}function cw(e,t,o){const n=e.map((e,t)=>t).sort((t,o)=>e[t]-e[o]),r=[...e];let a=-1/0;for(const s of n)r[s]=Math.max(r[s],a+t,t/2),a=r[s];let i=1/0;for(const s of[...n].reverse())r[s]=Math.min(r[s],i-t,o-t/2),i=r[s];return r}const dw=["percent","value","both","none"],uw=200;const hw=(e,t)=>(t>0?e/t*100:0)+"%";function pw(e,t,o,n,r,a){const i=o.items[e.cell.index],s=r[e.category],l=`${Wt(100*e.share,e.share>0&&e.share<.01?1:0,o.hass)}%`,c=function(e,t,o,n,r){if("none"===o||e.h<18)return"";const a=e=>sw(e,11)<=t-6;if("percent"===o)return a(n)?n:"";if("value"===o)return a(r)?r:"";const i=`${n} · ${r}`;return a(i)?i:a(n)?n:""}(e,t.w,a,l,i.display),d=`${i.label} (${l}, ${t.name})`;return R`<div
    class="entity segment text-${Le(s)}"
    data-index=${e.cell.index}
    tabindex="0"
    role="img"
    aria-label=${d}
    title=${`${t.name}, ${e.cell.category}: ${i.display} (${l})`}
    style="left:${hw(t.x,n)};width:${hw(t.w,n)};top:${hw(e.y,uw)};height:${hw(e.h,uw)};background:${je(s)}"
  >
    ${c?R`<span class="segment-text">${c}</span>`:Z}
  </div>`}const mw=[{name:"marimekko_segment_labels",path:["segment_labels"],default:"percent"},...vx];const fw=[{name:"marimekko_group",path:["group"],default:""},{name:"marimekko_category",path:["category"],default:""},{name:"marimekko_color",path:["color"]}],gw=[{type:"grid",name:"",schema:[{name:"marimekko_group",selector:{text:{}}},{name:"marimekko_category",selector:{text:{}}}]},{name:"marimekko_color",selector:{text:{}}}];const yw={layout:"chart",group:"totals",height:290,styles:a`
    .mekko-wrap {
      position: relative;
    }
    .mekko {
      position: relative;
      height: ${uw}px;
    }
    .mekko .segment {
      position: absolute;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 0;
      border-bottom: 1.5px solid var(--card-background-color, var(--ha-card-background, #fff));
      cursor: pointer;
      outline: none;
      opacity: 0;
      transition: opacity var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .mekko .segment {
      opacity: 1;
    }
    :host([static]) .mekko .segment {
      transition: none;
    }
    .mekko .segment:hover {
      filter: brightness(1.08);
    }
    .mekko .segment:focus-visible {
      box-shadow: inset 0 0 0 2px var(--primary-text-color);
    }
    .mekko .segment.text-light {
      color: #fff;
    }
    .mekko .segment.text-dark {
      color: rgba(0, 0, 0, 0.87);
    }
    .mekko .segment.text-theme {
      color: var(--primary-text-color);
    }
    .mekko .segment-text {
      font-size: ${11}px;
      white-space: nowrap;
      pointer-events: none;
    }
    .mekko-row {
      position: relative;
      height: 18px;
      font-size: 11px;
    }
    .mekko-row span {
      position: absolute;
      top: 0;
      overflow: hidden;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 18px;
    }
    .mekko-totals {
      color: var(--secondary-text-color);
    }
    .mekko-names {
      margin-top: 2px;
      color: var(--primary-text-color);
      font-size: 12px;
    }
    .mekko-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 14px;
      padding-top: 10px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .mekko-key {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .mekko-key .dot {
      width: 10px;
      height: 10px;
      border-radius: 2px;
    }
    .mekko-missing {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      padding-top: 8px;
      font-size: 0.875em;
      color: var(--secondary-text-color);
    }
    .mekko-missing .entity {
      cursor: pointer;
      border-radius: 4px;
    }
    .mekko-missing .entity:focus-visible {
      outline: 2px solid var(--primary-color);
    }
  `,thumbnail:()=>q`
    <rect x="4" y="4" width="24" height="14" fill="var(--primary-color, #03a9f4)" />
    <rect x="4" y="19" width="24" height="7" fill="var(--warning-color, #f59e0b)" />
    <rect x="4" y="27" width="24" height="9" fill="var(--success-color, #43a047)" />
    <rect x="30" y="4" width="16" height="8" fill="var(--primary-color, #03a9f4)" />
    <rect x="30" y="13" width="16" height="12" fill="var(--warning-color, #f59e0b)" />
    <rect x="30" y="26" width="16" height="10" fill="var(--success-color, #43a047)" />
    <rect x="48" y="4" width="12" height="20" fill="var(--primary-color, #03a9f4)" />
    <rect x="48" y="25" width="12" height="11" fill="var(--success-color, #43a047)" />`,validate:function(e){if(ox(e),void 0!==e.segment_labels&&!dw.includes(e.segment_labels))throw new Error(`"segment_labels" must be one of: ${dw.join(", ")}`);(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.category:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "category" must be text, such as "Heating"`)})},editor:function(e){const t=Tf("marimekko",e.hass,()=>[{name:"marimekko_segment_labels",selector:hf(e.hass,"marimekko_segment_labels",dw)},_x(e.hass)]);return Rf(bx(e),"chart",t,mw,wx)},entityFields:()=>({schema:gw,fields:fw}),disconnect:Xl,render:function(e){const t=Math.max(120,Gl(e)-32),o=function(e){const t=tx(e.raw.group_by),o=Ze(e.hass,"treemap_other"),n=t=>{const o=e.config.entities.indexOf(e.items[t].config);return o<0?1/0:o},r=e.items.map((n,r)=>{const a=n.config,i=ax(n,t,e.hass,o),s="string"==typeof a.category&&a.category.trim()?a.category.trim():n.name;return{index:r,group:i.length?i.join(" / "):o,category:s,value:n.available?n.value:null}});return r.sort((e,t)=>n(e.index)-n(t.index)||e.index-t.index)}(e),n=function(e,t,o,n,r="none"){const a=e.filter(e=>ow(e.value)>0),i=[];for(const h of a)i.includes(h.category)||i.push(h.category);const s=[];for(const h of a){let e=s.find(e=>e.name===h.group);e||(e={name:h.group,cells:[],total:0},s.push(e)),e.cells.push(h),e.total+=ow(h.value)}if("none"!==r){const e=new Map(s.map((e,t)=>[e,t])),t="ascending"===r?1:-1;s.sort((o,n)=>t*(o.total-n.total)||e.get(o)-e.get(n))}const l=s.reduce((e,t)=>e+t.total,0),c=Math.max(0,t-n*Math.max(0,s.length-1));let d=0;const u=s.map(e=>{const t=l>0?e.total/l:0,r=t*c,a=e=>i.indexOf(e.category),s=e.cells.map((e,t)=>({c:e,i:t})).sort((e,t)=>a(e.c)-a(t.c)||e.i-t.i).map(({c:e})=>e);let u=o;const h=s.map(t=>{const n=ow(t.value),r=n/e.total,i=r*o;return u-=i,{cell:t,value:n,share:r,category:a(t),y:u,h:i}}),p={name:e.name,total:e.total,share:t,x:d,w:r,segments:h};return d+=r+n,p});return{columns:u,categories:i,total:l}}(o,t,uw,3,e.config.sort),r=e.raw.segment_labels??"percent",{show:a}=e.config,i=Vx(e.items),s=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available),l=s.length?R`<div class="mekko-missing">
        <span>${Ze(e.hass,"treemap_no_reading")}</span>
        ${s.map(({e:e,index:t})=>R`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
              >${e.name} (${e.display})</span
            >`)}
      </div>`:Z;if(!n.columns.length)return R`<div class="chart-message">${Ze(e.hass,"treemap_empty")}</div>
      ${l}`;const c=function(e,t){return e.categories.map((o,n)=>{for(const r of e.columns)for(const e of r.segments){const n=e.cell.category===o?t(e.cell.index):void 0;if(n)return n}return Ya[n%Ya.length]})}(n,t=>{const o=e.items[t].config.color;return"string"==typeof o&&o?o:void 0}),d=t=>void 0===i?"":Yx(t.total,e,i),u=n.columns.map(e=>d(e)?`${e.name} ${d(e)}`:e.name).join(", "),h=Ze(e.hass,"marimekko_aria",{columns:u}),p=a.value&&void 0!==i;return R`<div class="mekko-wrap">
    ${p?R`<div class="mekko-row mekko-totals" aria-hidden="true">
            ${n.columns.map(e=>((e,t)=>sw(e,11)<=t.w+3)(d(e),e)?R`<span style="left:${hw(e.x,t)};width:${hw(e.w,t)}">${d(e)}</span>`:Z)}
          </div>`:Z}
    <div class="mekko" role="img" aria-label=${h}>
      ${n.columns.map(o=>o.segments.map(n=>pw(n,o,e,t,c,r)))}
    </div>
    ${a.name?R`<div class="mekko-row mekko-names" aria-hidden="true">
            ${n.columns.map(e=>e.w>=14?R`<span style="left:${hw(e.x,t)};width:${hw(e.w,t)}" title=${e.name}
                    >${e.name}</span
                  >`:Z)}
          </div>`:Z}
    ${n.categories.length>1?R`<div class="mekko-legend" aria-hidden="true">
            ${n.categories.map((e,t)=>R`<span class="mekko-key"
                  ><span class="dot" style="background:${je(c[t])}"></span>${e}</span
                >`)}
          </div>`:Z}
    ${l}
  </div>`}},vw=["full","half"],_w=["group","bands"],bw=240;function xw(e){return Math.max(45,100-20*(e-1))}function ww(e){const t=tx(e.raw.group_by),o=Ze(e.hass,"hierarchy_other"),n=e.items.map(n=>ax(n,t,e.hass,o));return ix(e.items,n,Ze(e.hass,"hierarchy_total"))}function $w(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}function kw(e,t){const o=new Map,n=new Map;let r=0;for(const{node:a,level:i}of e){if(0===i)continue;const e=a.entity?a.entity.config.color:void 0;let s;s=1===i?"string"==typeof e&&e?e:Ya[r++%Ya.length]:n.get(a)??"grey";for(const t of a.children)n.set(t,s);if("bands"===t){o.set(a,a.entity?{fill:je(a.entity.band.color),text:Le(a.entity.band.color)}:{fill:"var(--cd-track)",text:"theme"});continue}const l=xw(i);o.set(a,{fill:Zb(je(s),l),text:l>=100?Le(s):"theme"})}return o}function Mw(e,t,o){const n=t.items.find(e=>e.available)?.decimals??1;return Bt(Wt(e,n,t.hass),o)}function zw(e,t,o){return e.entity?e.entity.label:void 0===o?e.name:`${e.name}, ${Mw(e.value,t,o)}`}function Ew(e){const t=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available);return t.length?R`<div class="hierarchy-missing">
    <span>${Ze(e.hass,"hierarchy_no_reading")}</span>
    ${t.map(({e:e,index:t})=>R`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
          >${e.name} (${e.display})</span
        >`)}
  </div>`:Z}const Sw=[{name:"hierarchy_color_by",path:["color_by"],default:"group"},...vx,{name:"drill_down",path:["drill_down"],default:!0}],Aw=[{name:"sunburst_shape",path:["shape"],default:"full"},...Sw];function jw(e,t){if(ox(e),Ox(e),void 0!==e.color_by&&!_w.includes(e.color_by))throw new Error(`"color_by" must be one of: ${_w.join(", ")}`);if(t&&void 0!==e.shape&&!vw.includes(e.shape))throw new Error(`"shape" must be one of: ${vw.join(", ")}`)}function Cw(e,t,o=t){if(t.value<=0)return R`<div class="hierarchy-message">${Ze(e.hass,"hierarchy_empty")}</div>`;const n=e.raw.shape??"full",r=e.raw.color_by??"group",a=$w(e.items),i=cx(t),s=kw(cx(o),r),l=function(e,t){const o=72/Math.max(1,t);return{start:"half"===e?-Math.PI/2:0,sweep:"half"===e?Math.PI:2*Math.PI,radii:e=>[40+(e-1)*o,40+e*o],viewBox:"half"===e?"-116 -116 232 124":"-116 -116 232 232"}}(n,lx(t)),c=i.filter(e=>e.level>0).map(t=>{const[o,n]=l.radii(t.level),r=px(o,n,l.start+t.x0*l.sweep,l.start+t.x1*l.sweep),i=zw(t.node,e,a),c=s.get(t.node).fill;return t.node.entity?q`<path class="entity arc leaf" data-index=${t.node.index} tabindex="0" role="img"
            aria-label=${i} d=${r} fill=${c}><title>${i}</title></path>`:function(e,t,o,n,r){const a=Ux(e,t,o);return q`<path
    class="arc group ${a?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${a?"button":Z}
    tabindex=${a?0:Z}
    aria-label=${a?.label??o}
    d=${n}
    fill=${r}
    @click=${a?.click}
    @keydown=${a?.keydown}
  ><title>${o}</title></path>`}(e,t.node,i,r,c)}),d=void 0!==a&&e.config.show.value?Mw(t.value,e,a):"",u=t.children.filter(e=>e.value>0).map(e=>e.name);return R`<div class="sunburst-wrap ${n}">
    <svg
      class="sunburst"
      viewBox=${l.viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label=${Ze(e.hass,"sunburst_aria",{names:u.join(", ")})}
    >
      <g class="sunburst-grow">${c}</g>
    </svg>
    <div class="sunburst-centre">${d?R`<span class="centre-value">${d}</span>`:Z}</div>
  </div>`}function Nw(e,t,o=t){const n=e.raw.color_by??"group",r=$w(e.items),a=kw(cx(o),n),i=t.children.filter(e=>e.value>0);return R`<div class="hierarchy-legend">
    ${i.map(t=>{const o=R`<span class="swatch" style="background:${a.get(t)?.fill}"></span>`,n=e.config.show.value&&void 0!==r?R`<span class="legend-value">${Mw(t.value,e,r)}</span>`:Z;return t.entity?R`<span class="entity legend-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}
            >${o}${t.name} ${n}</span
          >`:function(e,t,o,n,r){const a=Ux(e,t,zw(t,e,r));return R`<span
    class="legend-item ${a?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${a?"button":Z}
    tabindex=${a?0:Z}
    aria-label=${a?.label??Z}
    @click=${a?.click}
    @keydown=${a?.keydown}
    >${o}${t.name} ${n}</span
  >`}(e,t,o,n,r)})}
  </div>`}function Lw(e,t,o=t){if(t.value<=0)return R`<div class="hierarchy-message">${Ze(e.hass,"hierarchy_empty")}</div>`;const n=e.raw.color_by??"group",r=$w(e.items),a=cx(t),i=kw(cx(o),n),s=lx(t)+1,{show:l}=e.config,c=t.children.filter(e=>e.value>0).map(e=>e.name);return R`<div
    class="icicle"
    role="img"
    aria-label=${Ze(e.hass,"icicle_aria",{names:c.join(", ")})}
  >
    ${a.map(t=>{const o=(t.x1-t.x0)*bw,n=`left:${t.level/s*100}%;width:${100/s}%;top:${100*t.x0}%;height:${100*(t.x1-t.x0)}%`,a=zw(t.node,e,r),c=0===t.level?void 0:i.get(t.node),d=t.node.entity?t.node.entity.display:void 0!==r?Mw(t.node.value,e,r):"",u=R`<div class="cell-fill" style=${c?`background:${c.fill}`:""}>
        ${o>=18&&(l.name||0===t.level)?R`<span class="cell-name">${t.node.name}</span>`:Z}
        ${o>=34&&l.value&&d?R`<span class="cell-value">${d}</span>`:Z}
      </div>`,h=`cell level-${Math.min(t.level,1)} text-${c?.text??"root"}`;return t.node.entity?R`<div
            class="entity ${h} leaf"
            data-index=${t.node.index}
            tabindex="0"
            role="img"
            aria-label=${a}
            title=${a}
            style=${n}
          >
            ${u}
          </div>`:function(e,t,o,n,r,a){const i=o.includes("text-root")?void 0:Ux(e,t,n);return R`<div
    class="${o} group ${i?"drillable":""}"
    data-path=${t.path.join("/")}
    title=${n}
    style=${r}
    role=${i?"button":Z}
    tabindex=${i?0:Z}
    aria-label=${i?.label??Z}
    @click=${i?.click}
    @keydown=${i?.keydown}
  >
    ${a}
  </div>`}(e,t.node,h,a,n,u)})}
  </div>`}const Fw=a`
  ${Hx}
  .hierarchy-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${bw}px;
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
`,Tw={layout:"chart",group:"totals",height:290,styles:a`
    ${Fw}
    .sunburst-wrap {
      position: relative;
      height: ${bw}px;
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
    <path d="M48 26 A17 17 0 0 1 32 37 L32 31 A11 11 0 0 0 42 25 Z" fill="var(--warning-color, #f59e0b)" opacity="0.6" />`,validate:e=>jw(e,!0),editor:function(e){const t=Tf("sunburst",e.hass,()=>[{type:"grid",name:"",schema:[{name:"sunburst_shape",selector:hf(e.hass,"sunburst_shape",vw)},{name:"hierarchy_color_by",selector:hf(e.hass,"hierarchy_color_by",_w)}]},_x(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return R`${Rf(bx(e),"chart",t,Aw,wx)}
  ${xx(e)}`},render(e){const t=ww(e),o=Dx(e,t);return R`${Ix(e,t,o,"")} ${Cw(e,o.node,t)}
    ${o.node.value>0?Nw(e,o.node,t):Z} ${Ew(e)}`}},Ow={layout:"chart",group:"totals",height:280,styles:a`
    ${Fw}
    .icicle {
      position: relative;
      height: ${bw}px;
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
    <rect x="41" y="25" width="19" height="11" rx="2" fill="var(--warning-color, #f59e0b)" opacity="0.7" />`,validate:e=>jw(e,!1),editor:function(e){const t=Tf("icicle",e.hass,()=>[{name:"hierarchy_color_by",selector:hf(e.hass,"hierarchy_color_by",_w)},_x(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return R`${Rf(bx(e),"chart",t,Sw,wx)} ${xx(e)}`},render(e){const t=ww(e),o=Dx(e,t);return R`${Ix(e,t,o,"")} ${Lw(e,o.node,t)} ${Ew(e)}`}};function Pw(e,t,o=5){if(!Number.isFinite(e)||!Number.isFinite(t))return[];e>t&&([e,t]=[t,e]),e===t&&(e-=.5,t+=.5);const n=function(e,t=5){if(!Number.isFinite(e)||e<=0||t<1)return 1;const o=e/t,n=10**Math.floor(Math.log10(o)),r=o/n;return(r<=1?1:r<=2?2:r<=2.5?2.5:r<=5?5:10)*n}(t-e,o),r=Math.floor(e/n+1e-9)*n,a=Math.ceil(t/n-1e-9)*n,i=[];for(let s=0,l=r;l<=a+n/2&&s<100;s++,l=r+s*n)i.push(Number(l.toPrecision(12)));return i}function Dw(e){let t=1/0,o=-1/0;for(const n of e)"number"==typeof n&&Number.isFinite(n)&&(n<t&&(t=n),n>o&&(o=n));return t===1/0?void 0:[t,o]}function Uw(e,t){let o=null;for(const n of e){if(n.t>t)break;o=n.v}return o}const Iw=["grouped","stacked","percent"],Hw=["series","bands"],Ww=Ya;function Rw(e,t,o="none"){const n=new Map,r=[];for(const l of e){let e=n.get(l.group);e||(e={key:l.group,label:l.group,segments:[],total:null},n.set(l.group,e)),r.includes(l.series)||r.push(l.series);const t=e.segments.length;e.segments.push({index:l.index,series:l.series,value:l.value,from:0,to:0,slot:t}),null!==l.value&&(e.total=(e.total??0)+l.value)}const a=[...n.values()];for(const l of a){const e=l.segments.reduce((e,t)=>e+Math.abs(t.value??0),0);let o=0,n=0;for(const r of l.segments){if(null===r.value)continue;const a="percent"===t?0===e?0:r.value/e:r.value;"grouped"===t?r.to=a:a>=0?(r.from=o,r.to=o+=a):(r.from=n,r.to=n+=a)}}const i=a.flatMap(e=>e.segments.flatMap(e=>null===e.value?[]:[e.from,e.to])),s=function([e,t]){return[Math.min(0,e),Math.max(0,t)]}(Dw(i)??[0,1]);if(s[0]===s[1]&&(s[1]=1),"none"!==o){const e="ascending"===o?1:-1;a.sort((t,o)=>null===t.total!=(null===o.total)?null===t.total?1:-1:((t.total??0)-(o.total??0))*e)}return{rows:a,domain:s,series:r}}function qw(e,t){if("grouped"!==t)return 36;const o=Math.max(1,e.segments.length);return 12*o+3*(o-1)+16}function Bw(e){return"string"==typeof e&&""!==e.trim()?e.trim():"number"==typeof e?String(e):void 0}function Zw(e,t){return`${Wt(100*Math.abs(e),0,t)} %`}const Vw=e=>`${(100*e).toFixed(3)}%`;const Yw=[{name:"mode",path:["mode"],default:"grouped"},{name:"bars_color_by",path:["color_by"],default:"series"}];const Gw=[{name:"bar_group",path:["group"]},{name:"bar_series",path:["series"]},{name:"bar_color",path:["color"]}];const Xw={layout:"chart",group:"compare",height:200,styles:a`
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
    <line x1="4" y1="3" x2="4" y2="37" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate:function(e){if(void 0!==e.mode&&!Iw.includes(e.mode))throw new Error(`"mode" must be one of: ${Iw.join(", ")}`);if(void 0!==e.color_by&&!Hw.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Hw.join(", ")}`);(e.entities??[]).forEach((e,t)=>{if("object"==typeof e&&null!==e)for(const o of["group","series"]){const n=e[o];if(null!=n&&"string"!=typeof n&&"number"!=typeof n)throw new Error(`Entity ${t+1}: "${o}" must be text`)}})},editor:function(e){const t=Tf("grouped_bars",e.hass,()=>[{type:"grid",name:"",schema:[{name:"mode",selector:hf(e.hass,"mode",Iw)},{name:"bars_color_by",selector:hf(e.hass,"bars_color_by",Hw)}]}]);return Rf(e,"chart",t,Yw)},entityFields:e=>({schema:Tf("grouped_bars_entity",e,()=>[{type:"grid",name:"",schema:[{name:"bar_group",selector:{text:{}}},{name:"bar_series",selector:{text:{}}}]},{name:"bar_color",selector:{text:{}}}]),fields:Gw}),render:function(e){const{hass:t}=e,o=e.raw.mode??"grouped",n="bands"===e.raw.color_by,r=Rw(function(e){return function(e){const t=e.config.entities;return e.items.map((e,o)=>({e:e,index:o,at:t.indexOf(e.config)})).sort((e,t)=>(-1===e.at?1/0:e.at)-(-1===t.at?1/0:t.at)||e.index-t.index)}(e).map(({e:e,index:t})=>{const o=e.config;return{index:t,group:Bw(o.group)??`\0${t}`,series:Bw(o.series)??"",value:e.available?e.value:null}})}(e),o,e.config.sort),[a,i]=r.domain,s=e=>(e-a)/(i-a),l=s(0),c=t=>{const o=e.items[t.index],a=o.config.color;return n?o.band.color:"string"==typeof a&&a?a:Ww[r.series.indexOf(t.series)%Ww.length]},{show:d}=e.config,u=!n&&r.series.some(e=>""!==e)&&!1!==e.raw.show?.legend,h=e.items.map(e=>e.display.length),p=d.value&&"percent"!==o?Math.min(12,Math.max(4,...h)):0,m=p?Math.round(6.5*p+8):4,f=Math.max(0,...r.rows.map(t=>(t.label.startsWith("\0")?e.items[t.segments[0].index].name:t.label).length));let g=0;const y=r.rows.map(e=>{const t=g;return g+=qw(e,o),{row:e,top:t}}),v=Ze(t,"grouped_bars_aria",{names:e.items.map(e=>e.name).join(", ")}),_=a<0;return R`<div
    class="bars mode-${o}"
    role="img"
    aria-label=${v}
    style="--name-w:${d.name?`min(35%, calc(${f}ch + 16px))`:"0px"};--value-w:${m}px;--neg-w:${_?m:0}px"
  >
    <div class="bar-rows" style="height:${g}px">
      ${Me(y,e=>e.row.key,({row:n,top:r})=>R`<div class="bar-row" style="transform:translateY(${r}px);height:${qw(n,o)}px">
            ${d.name?R`<div class="row-name">
                    ${n.label.startsWith("\0")?e.items[n.segments[0].index].name:n.label}
                  </div>`:Z}
            <div class="row-plot">
              <div class="zero" style="left:${Vw(l)}"></div>
              ${n.segments.map(n=>(n=>{const r=e.items[n.index],a=c(n),i=s(Math.min(n.from,n.to)),u=Math.abs(s(n.to)-s(n.from)),h="grouped"===o?8+15*n.slot:8,p="grouped"===o?12:20,m=n.to<n.from||"grouped"===o&&n.to<0,f="percent"===o&&r.available?n.to-n.from:0,g="percent"===o&&d.value&&Math.abs(f)>=.12;return R`<div
        class="entity bar-seg ${m?"negative":""} ${r.available?"":"unavailable"}"
        data-index=${n.index}
        tabindex="0"
        role="button"
        aria-label=${"percent"===o&&r.available?`${r.label} (${Zw(f,t)})`:r.label}
        style="left:${Vw(i)};width:${Vw(u)};top:${h}px;height:${p}px;background:${je(a)}"
      >
        ${g?R`<span class="seg-text ${Le(a)}" aria-hidden="true">${Zw(f,t)}</span>`:Z}
      </div>
      ${"grouped"===o&&d.value?R`<span
              class="bar-value ${r.available?"":"unavailable"} ${m?"left":""}"
              style="${m?"right":"left"}:${Vw(m?1-s(n.to):r.available?s(n.to):l)};top:${h}px;height:${p}px"
              aria-hidden="true"
              >${r.display}</span
            >`:Z}`})(n))} ${(n=>{if("stacked"!==o||!d.value)return Z;const r=e.items[n.segments[0].index],a=n.segments.filter(e=>null!==e.value).map(e=>e.to),i=Math.max(0,...a),l=Math.min(0,...a),c=0===i&&l<0,u=null===n.total?r.display:Bt(Wt(n.total,r.decimals,t),r.unit);return R`<span
      class="bar-value total ${null===n.total?"unavailable":""} ${c?"left":""}"
      style="${c?"right":"left"}:${Vw(c?1-s(l):s(i))};top:${8}px;height:${20}px"
      aria-hidden="true"
      >${u}</span
    >`})(n)}
            </div>
          </div>`)}
    </div>
    ${u?R`<div class="bar-legend">
            ${r.series.filter(e=>""!==e).map(e=>{const t=function(e,t){for(const o of e.rows)for(const e of o.segments)if(e.series===t)return e;return}(r,e);return R`<span class="bar-legend-item"
                  ><span class="swatch" style="background:${je(t?c(t):"grey")}"></span
                  >${e}</span
                >`})}
          </div>`:Z}
  </div>`}};function Kw(e,t,o,n=""){const r=Ee(e.config);return R`<div
    class="entity ${n} ${r?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    role="meter"
    aria-valuenow=${e.available?String(e.value):Z}
    aria-valuemin=${e.min}
    aria-valuemax=${e.max}
    aria-label=${e.label}
    tabindex=${r?0:Z}
    style=${function(e){const t=je(e.band.color);return`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${t}`}(e)}
  >
    ${o}
  </div>`}const Jw=a`
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
`,Qw=["shades","colours"];function e$(e,t,o,n){const{show:r}=o.config,a=function(e){const t=[];return e.bands.forEach((o,n)=>{const r=e.bands[n+1],a=Number.isFinite(o.from)?Rh(o.from,e.min,e.max):0,i=r?Rh(r.from,e.min,e.max):1;i<=a||t.push({from:t.length?a:0,to:i,color:o.color,level:0})}),t.forEach((e,t)=>e.level=t),t}(e),i=r.target?function(e,t){if(null!==e.target)return Ze(t,"compare_target",{target:Bt(Wt(e.target,e.decimals,t),e.unit)})}(e,o.hass):void 0,s=r.value||!e.available,l=R`
    ${r.name?R`<div class="label">
            <span class="name">${e.name}</span>${i?R`<span class="sub">${i}</span>`:Z}
          </div>`:Z}
    <div class="track">
      ${a.map(e=>R`<div
            class="range"
            style="left:${100*e.from}%;width:${100*(e.to-e.from)}%;background:${function(e,t,o){return"colours"===o?`color-mix(in srgb, ${je(e.color)} 22%, transparent)`:`color-mix(in srgb, var(--primary-text-color, #212121) ${t<=1?8:6+Math.round(e.level/(t-1)*12)}%, transparent)`}(e,a.length,n)}"
          ></div>`)}
      ${e.available?R`<div class="fill"></div>`:Z}
      ${r.target&&e.available&&null!==e.targetPosition?R`<div class="target"></div>`:Z}
    </div>
    ${s?R`<span class="value">${e.display}</span>`:R`<span></span>`}
  `;return Kw(e,t,l,"bullet-row")}const t$={layout:"chart",group:"compare",height:120,styles:a`
    ${Jw}
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
    <rect x="40" y="22" width="2" height="14" rx="1" fill="var(--primary-text-color, #212121)" />`,validate(e){if(void 0!==e.ranges&&!Qw.includes(e.ranges))throw new Error(`"ranges" must be one of: ${Qw.join(", ")}`)},editor(e){const t=Tf("bullet",e.hass,()=>[{name:"ranges",selector:hf(e.hass,"ranges",Qw)}]);return Rf(e,"chart",t,[{name:"ranges",path:["ranges"],default:"shades"}])},render(e){const t=e.raw.ranges??"shades",o=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_bullet"),names:e.items.map(e=>e.name).join(", ")});return R`<div class="compare bullets ${e.config.show.name?"":"no-name"}" role="group" aria-label=${o}>
      ${e.items.map((o,n)=>e$(o,n,e,t))}
    </div>`}},o$=["vertical","horizontal"];function n$(e,t,o){const{show:n}=t.config;return R`<div class="lane">
    <div class="scale">
      ${e.available?R`<div class="stem"></div>
              ${n.target&&null!==e.targetPosition?R`<div class="target"></div>`:Z}
              <div class="dot"></div>
              ${o&&n.value?R`<span class="value tip">${e.display}</span>`:Z}`:o?R`<span class="value tip">${e.display}</span>`:Z}
    </div>
  </div>`}function r$(e,t,o){const{show:n}=o.config;return Kw(e,t,R`${n$(e,o,!0)} ${n.name?R`<span class="name">${e.name}</span>`:Z}`,"pop")}function a$(e,t,o){const{show:n}=o.config,r=n.value||!e.available;return Kw(e,t,R`${n.name?R`<span class="name">${e.name}</span>`:Z} ${n$(e,o,!1)}
  ${r?R`<span class="value">${e.display}</span>`:R`<span></span>`}`,"pop")}const i$={layout:"chart",group:"compare",height:200,styles:a`
    ${Jw}
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
    <circle cx="50" cy="8" r="5" fill="var(--success-color, #1fae7a)" />`,validate(e){if(void 0!==e.orientation&&!o$.includes(e.orientation))throw new Error(`"orientation" must be one of: ${o$.join(", ")}`)},editor(e){const t=Tf("lollipop",e.hass,()=>[{name:"orientation",selector:hf(e.hass,"orientation",o$)}]);return Rf(e,"chart",t,[{name:"orientation",path:["orientation"],default:"vertical"}])},render(e){const t=e.raw.orientation??"vertical",o=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_lollipop"),names:e.items.map(e=>e.name).join(", ")}),n="vertical"===t?r$:a$;return R`<div
      class="compare ${t} ${e.config.show.name?"":"no-name"}"
      role="group"
      aria-label=${o}
    >
      ${e.items.map((t,o)=>n(t,o,e))}
    </div>`}},s$=["change","current"],l$=["vertical","horizontal"];function c$(e){const t=e.find(e=>null!==e.v);return t?t.v:null}const d$={vertical:.14,horizontal:.24};function u$(e,t){const{items:o,raw:n,hass:r}=e,a=n.steps??"change",i=!0===n.start_from_first,s=e=>t?.series[e]?.points??[],l=(e,t)=>{const o="change"===a?function(e){const t=e.filter(e=>null!==e.v);return 0===t.length?null:t[t.length-1].v-t[0].v}(s(t)):e.available?e.value:null;return null===o?null:function(e){return!0===e.config.invert}(e)?-o:o},c=i&&o.length?{value:c$(s(0)),index:0}:null,d=o.map((e,t)=>({value:l(e,t),index:t})).slice(i?1:0),{bars:u}=function(e,t,o){const n=[];let r=0;if(e){const t=e.value??0;n.push({kind:"start",from:0,to:t,delta:t,index:e.index,missing:null===e.value}),r=t}for(const s of t){const e=s.value??0;n.push({kind:"step",from:r,to:r+e,delta:e,index:s.index,missing:null===s.value}),r+=e}o&&n.push({kind:"total",from:0,to:r,delta:r,missing:!1});let a=0,i=0;for(const s of n)a=Math.min(a,s.from,s.to),i=Math.max(i,s.from,s.to);return a===i&&(i=a+1),{bars:n,domain:[a,i]}}(c,d,!1!==n.total),h=o[0]?.decimals??1;return u.map(e=>{const t=void 0===e.index?void 0:o[e.index],n=t?.decimals??h;let a,i;return"start"===e.kind?(a=Ze(r,"waterfall_start"),i=e.missing?Ze(r,"waterfall_no_readings"):Wt(e.to,n,r)):"total"===e.kind?(a=Ze(r,c?"waterfall_end":"waterfall_total"),i=Wt(e.to,h,r)):(a=t.name,i=e.missing?t.available?Ze(r,"waterfall_no_readings"):t.display:function(e,t,o){const n=Wt(Math.abs(e),t,o);return 0===Number(e.toFixed(t))?Wt(0,t,o):`${e>0?"+":"−"}${n}`}(e.delta,n,r)),{...e,name:a,label:i,entity:t}})}function h$(e,t){const o="horizontal"===e.raw.orientation,n=t.flatMap(e=>[e.from,e.to]);let r=Math.min(0,...n),a=Math.max(0,...n);r===a&&(a=r+1);const i=(a-r)*d$[o?"horizontal":"vertical"];a+=i,r<0&&(r-=i);const s=e=>(e-r)/(a-r)*100,l=t.length,c=100/l,d=o?.64:.6,u=e=>c*e+c*(1-d)/2,h=e=>u(e)+c*d,p=e.items[0]?.unit??"",m=Ze(e.hass,"waterfall_aria",{bars:t.map(e=>`${e.name} ${e.missing?e.label:Bt(e.label,e.entity?.unit??p)}`).join(", ")}),f=e=>void 0===e.index?"":"entity",g=t.map((e,t)=>{const n=`--a0:${s(Math.min(e.from,e.to))}%;--a1:${s(Math.max(e.from,e.to))}%;--c0:${u(t)}%;--c1:${h(t)}%;--cm:${(u(t)+h(t))/2}%;--color:${function(e){return"step"!==e.kind?je("primary"):je(e.delta<0?"red":"green")}(e)}`,r=t+1<l?`--a:${s(e.to)}%;--c0:${h(t)}%;--c1:${u(t+1)}%`:"";return R`<div
        class="bar ${e.kind} ${e.missing?"missing":""} ${e.delta<0?"fall":"rise"} ${f(e)}"
        data-index=${e.index??Z}
        tabindex=${void 0===e.index?Z:0}
        aria-label=${`${e.name}, ${e.label}`}
        style=${n}
      ></div>
      <span class="bar-label ${e.missing?"missing":""} ${e.kind}" style=${n}
        >${e.missing&&!o?"–":e.label}</span
      >
      ${r?R`<div class="connector" style=${r}></div>`:Z}`}),y=t.map(e=>R`<div class="bar-name ${f(e)}" data-index=${e.index??Z} title=${e.name}>
        <span>${e.name}</span>
      </div>`);return R`<div class="wf ${o?"horizontal":"vertical"}" style="--n:${l}">
    <div class="names">${y}</div>
    <div class="wf-plot" role="img" aria-label=${m}>
      <div class="zero" style="--a:${s(0)}%"></div>
      ${g}
    </div>
  </div>`}const p$=[...xf,{name:"steps",path:["steps"],default:"change"},{name:"orientation",path:["orientation"],default:"vertical"},{name:"start_from_first",path:["start_from_first"],default:!1},{name:"total",path:["total"],default:!0}];function m$(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}const f$={layout:"chart",group:"totals",height:240,styles:a`
    ${si}
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
    <rect x="52" y="24" width="9" height="12" rx="1.5" fill="var(--primary-color, #03a9f4)" />`,validate(e){if(Xa(e),void 0!==e.steps&&!s$.includes(e.steps))throw new Error(`"steps" must be one of: ${s$.join(", ")}`);if(void 0!==e.orientation&&!l$.includes(e.orientation))throw new Error(`"orientation" must be one of: ${l$.join(", ")}`);m$(e.start_from_first,"start_from_first"),m$(e.total,"total");for(const t of e.entities??[])"object"==typeof t&&m$(t.invert,"invert")},editor:function(e){const t=Tf("waterfall",e.hass,()=>[...wf(e.hass),{type:"grid",name:"",schema:[{name:"steps",selector:hf(e.hass,"steps",s$)},{name:"orientation",selector:hf(e.hass,"orientation",l$)}]},{name:"start_from_first",selector:{boolean:{}}},{name:"total",selector:{boolean:{}}}]);return R`${Rf(e,"chart",t,p$)}
  ${yx(e,"waterfall_invert","invert",{boolean:{}},!1)}`},disconnect:ni,render(e){let t;if("change"===((o=e.raw).steps??"change")||!0===o.start_from_first){t=Ja(e);const o=ai(t,e);if(o)return o}var o;return h$(e,u$(e,t))}},g$=["value","change"],y$=["direction","group"],v$=["bad","good"];const _$={"5minute":3e5,hour:36e5,day:864e5,month:26784e5};function b$(e,t,o){const n=function(e,t,o=1e-9){return Math.abs(t-e)<=o?"flat":t>e?"up":"down"}(e,t);return"flat"===n?"grey":"up"===n==("bad"===o)?"red":"green"}function x$(e,t,o){const n=1===o.last,r=Ze(e,`slope_unit_${o.unit}${n?"":"_other"}`);return Ze(e,n?`slope_${t}_one`:`slope_${t}`,{n:o.last,unit:r})}function w$(e,t,o){const n=function(e,t){if(null!==e&&null!==t&&0!==e)return(t-e)/Math.abs(e)}(e,t);if(void 0===n)return"";const r=Math.round(100*n);return`${r>0?"+":r<0?"−":""}${Wt(Math.abs(r),0,o)} %`}function $$(e,t,o,n){const r="statistics"===e.source?_$[Un(e.range)]:0,a="group"===t.raw.color_by,i="good"===t.raw.increase?"good":"bad",s=new Map,l=e.series.map(e=>{const t=e.entity.available?e.entity.value:null,[l,c]=function(e,t,o,n,r=0){const a=t.find(e=>null!==e.v),i=Uw(t,o.start)??(a&&a.t-o.start<=r?a.v:null);if("value"===e)return[i,n];const s=Uw(t,o.middle);return[null===i||null===s?null:s-i,null===s||null===n?null:n-s]}(o,e.points,n,t,r),d=function(e){const t=e.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0}(e.entity),u=e.entity.config.color;let h;if(a){const t=d??`#${e.index}`;s.has(t)||s.set(t,Ya[s.size%Ya.length]),h=u??s.get(t)}else h=null!==l&&null!==c?b$(l,c,i):"grey";return{index:e.index,entity:e.entity,from:l,to:c,color:je(h),group:d}});return l}const k$=[...xf,{name:"measure",path:["measure"],default:"value"},{name:"color_by",path:["color_by"],default:"direction"},{name:"increase",path:["increase"],default:"bad"}],M$=[{name:"group",path:["group"]}],z$={layout:"chart",group:"compare",height:230,styles:a`
    ${si}
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
    ${[[14,28],[50,10],[14,12],[50,22],[14,32],[50,30]].map(([e,t])=>q`<circle cx=${e} cy=${t} r="3" fill="var(--primary-text-color, #212121)" />`)}`,validate(e){Xa(e);const t=(t,o)=>{if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)};t("measure",g$),t("color_by",y$),t("increase",v$);for(const o of e.entities??[]){const e="object"==typeof o&&o?o.group:void 0;if(void 0!==e&&"string"!=typeof e)throw new Error('"group" must be text')}},editor(e){const t=Tf("slope",e.hass,()=>[...wf(e.hass),{name:"measure",selector:hf(e.hass,"measure",g$)},{type:"grid",name:"",schema:[{name:"color_by",selector:hf(e.hass,"color_by",y$)},{name:"increase",selector:hf(e.hass,"increase",v$)}]}]);return Rf(e,"chart",t,k$)},entityFields:e=>({schema:Tf("slope-entity",e,()=>[{name:"group",selector:{text:{}}}]),fields:M$}),disconnect:ni,render(e){const t=Date.now(),o=xn(e.raw.period),n="change"===e.raw.measure?"change":"value",r=Ja("change"===n?{...e,raw:{...e.raw,period:{last:2*o.last,unit:o.unit}}}:e,t),a=wn(o,t).start,i={start:r.range.start,middle:a},s=e.hass,l=x$(s,"change"===n?"previous":"ago",o),c="change"===n?x$(s,"last",o):Ze(s,"slope_now");if("ready"!==r.status)return R`${ai(r,e)}`;const d=$$(r,e,n,i),u=d.flatMap(e=>[e.from,e.to]),h=Dw(u);if(!h)return R`<div class="chart-message">${Ze(s,"chart_no_data")}</div>`;const{show:p}=e.config,m=new Set(d.filter(e=>e.entity.stateObj).map(e=>e.entity.unit)),f=1===m.size?[...m][0]:void 0,g=(e,t)=>{const o=Wt(t,e.entity.decimals,s);return void 0===f&&e.entity.unit?`${o} ${e.entity.unit}`:o},y=d.filter(e=>null!==e.from||null!==e.to),v=Math.max(160,22*y.length),[_,b]=$s(h,.06),x=e=>9+(b-e)/(b-_)*(v-18),w=e=>{const t=y.filter(t=>null!==e(t)),o=function(e,t,o,n){const r=e.map((e,t)=>({y:e,i:t})).sort((e,t)=>e.y-t.y||e.i-t.i),a=r.map(e=>Math.min(n,Math.max(o,e.y)));for(let s=1;s<a.length;s++)a[s]=Math.max(a[s],a[s-1]+t);if(a.length&&a[a.length-1]>n){a[a.length-1]=n;for(let e=a.length-2;e>=0;e--)a[e]=Math.min(a[e],a[e+1]-t)}if(a.length&&a[0]<o){a[0]=o;for(let e=1;e<a.length;e++)a[e]=Math.max(a[e],a[e-1]+t)}const i=new Array(e.length);return r.forEach((e,t)=>i[e.i]=a[t]),i}(t.map(t=>x(e(t))),18,9,v-9);return new Map(t.map((e,t)=>[e,o[t]]))},$=w(e=>e.from),k=w(e=>e.to),M=Ze(s,"slope_no_reading"),z=Ze(s,"chart_aria",{style:Ze(s,"editor_style_slope"),names:d.map(e=>e.entity.name).join(", ")});return R`<div class="slope-head">
        <span class="from">${l}</span>
        ${f?R`<span class="unit">${f}</span>`:Z}
        <span class="to">${c}</span>
      </div>
      <div class="slope-plot" style="height:${v}px" role="group" aria-label=${z}>
        <div class="axis from"></div>
        <div class="axis to"></div>
        ${y.map(e=>{const t=Ze(s,"slope_entity_aria",{name:e.entity.name,from:null===e.from?M:g(e,e.from),to:null===e.to?M:g(e,e.to)}),o=p.value&&null!==e.from&&null!==e.to?w$(e.from,e.to,s):"",n=e=>p.name?R`<span class="name">${e}</span>`:Z;return R`<div class="entity" data-index=${e.index} tabindex="0" role="img" aria-label=${t}>
        ${null!==e.from&&null!==e.to?R`<svg viewBox="0 0 100 ${v}" preserveAspectRatio="none">
                <line x1="0" y1=${x(e.from)} x2="100" y2=${x(e.to)} stroke=${e.color}></line>
              </svg>`:Z}
        ${null!==e.from?R`<span class="dot from" style="top:${x(e.from)}px;background:${e.color}"></span>
                <span class="lbl from" style="top:${$.get(e)}px"
                  >${n(e.entity.name)}${p.value?R`<span class="value">${g(e,e.from)}</span>`:Z}</span
                >`:Z}
        ${null!==e.to?R`<span class="dot to" style="top:${x(e.to)}px;background:${e.color}"></span>
                <span class="lbl to" style="top:${k.get(e)}px"
                  >${p.value?R`<span class="value">${g(e,e.to)}</span>`:Z}${n(e.entity.name)}${o?R`<span class="pct" style="color:${e.color}">${o}</span>`:Z}</span
                >`:Z}
      </div>`})}
      </div>
      ${"group"===e.raw.color_by?function(e){const t=new Map;for(const o of e)o.group&&!t.has(o.group)&&t.set(o.group,o.color);return t.size?R`<div class="slope-legend">
    ${[...t].map(([e,t])=>R`<span class="slope-legend-item"><span class="swatch" style="background:${t}"></span>${e}</span>`)}
  </div>`:Z}(d):Z}`}},E$=["range","then","target"],S$=["horizontal","vertical"];function A$(e,t,o,n,r){const a=e.available?e.value:null,i=[];if("range"===t){const e=function(e){return Dw(e.flatMap(e=>[e.v,e.min,e.max]))}(o),t=e?Dw([e[0],e[1],a]):void 0;t&&i.push({kind:"low",value:t[0]},{kind:"high",value:t[1]}),null===a||!r&&t||i.push({kind:"now",value:a})}else{const r="then"===t?Uw(o,n)??function(e){for(const t of e)if(null!==t.v)return t.v;return null}(o):e.target;null!==r&&i.push({kind:t,value:r}),null!==a&&i.push({kind:"now",value:a})}return i.sort((e,t)=>e.value-t.value)}function j$(e){if(0===e.length)return[];const t=e.some(e=>"low"===e.kind)?e.filter(e=>"now"!==e.kind):e,o=t[0],n=t[t.length-1];return o===n?[n]:[o,n]}function C$(e,t,o,n,r){return e.map((e,a)=>{const i=A$(e,t,o(a),n,r);return{index:a,entity:e,marks:i,labelled:j$(i)}})}function N$(e,t){return 1===t.last?Ze(e,`dumbbell_ago_${t.unit}_one`):Ze(e,`dumbbell_ago_${t.unit}`,{n:t.last})}const L$={low:je("blue"),high:je("red"),then:je("grey"),target:"var(--primary-text-color, #212121)"};function F$(e,t){return"target"===e||"now"===e&&"range"===t}function T$(e,t,o){return"now"!==e?L$[e]:"range"===t?"var(--primary-text-color, #212121)":je(o.band.color)}const O$="range",P$="horizontal",D$=!0;function U$(e){return{ends:e.ends??O$,orientation:e.orientation??P$,showNow:void 0===e.show_now?D$:!0===e.show_now}}function I$(e,t,o){const n=e.entity;if(0===e.marks.length)return`${n.name}, ${n.available?Ze(t.hass,"dumbbell_no_value"):n.display}`;const r=e.marks.map(e=>`${(e=>"then"===e?N$(t.hass,o):Ze(t.hass,`dumbbell_${e}`))(e.kind)} ${Bt(Wt(e.value,n.decimals,t.hass),n.unit)}`);return`${n.name}: ${r.join(", ")}`}const H$=[...xf,{name:"ends",path:["ends"],default:O$},{name:"show_now",path:["show_now"],default:D$},{name:"orientation",path:["orientation"],default:P$}];const W$={layout:"chart",group:"compare",height:220,styles:a`
    ${si}
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
    <circle cx="56" cy="29" r="4" fill="var(--error-color, #ef3b5a)" />`,validate(e){if(Xa(e),void 0!==e.ends&&!E$.includes(e.ends))throw new Error(`"ends" must be one of: ${E$.join(", ")}`);if(void 0!==e.orientation&&!S$.includes(e.orientation))throw new Error(`"orientation" must be one of: ${S$.join(", ")}`);if(void 0!==e.show_now&&"boolean"!=typeof e.show_now)throw new Error('"show_now" must be true or false')},editor:function(e){const{ends:t}=U$(e.config),o=Tf(`dumbbell-${t}`,e.hass,()=>[{type:"grid",name:"",schema:[{name:"ends",selector:hf(e.hass,"ends",E$)},{name:"orientation",selector:hf(e.hass,"orientation",S$)}]},..."target"===t?[]:wf(e.hass),..."range"===t?[{name:"show_now",selector:{boolean:{}}}]:[]]);return Rf(e,"chart",o,H$)},disconnect:ni,render(e){const{ends:t,orientation:o,showNow:n}=U$(e.raw),r=xn(e.raw.period);let a;if("target"===t)a=C$(e.items,t,()=>[],0,n);else{const o=Ja(e);if("ready"!==o.status)return ai(o,e)??R``;a=C$(e.items,t,e=>o.series[e]?.points??[],o.range.start,n)}const i=Dw(a.flatMap(e=>e.marks.map(e=>e.value))),s=i?Pw(i[0],i[1],4):[],[l,c]=s.length?[s[0],s[s.length-1]]:[0,1],d=e=>c===l?.5:(e-l)/(c-l),u=function(e){const t=new Set(e.map(e=>e.unit).filter(e=>""!==e));return 1===t.size?[...t][0]:""}(e.items),h=function(e){if(e.length<2)return 0;const t=Math.abs(e[1]-e[0]);for(let o=0;o<6;o++)if(Math.abs(Math.round(t*10**o)-t*10**o)<1e-6)return o;return 6}(s),{show:p}=e.config,m=Math.max(...e.items.map(e=>e.name.length)),f=`min(${Math.min(m,16)+1}ch, 38%)`,g=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_dumbbell"),names:e.items.map(e=>e.name).join(", ")}),y=s.map(t=>R`<span class="db-tick" style="--f:${d(t)}">${Wt(t,h,e.hass)}</span>`),v=a.map(o=>function(e,t,o,n,r,a){const i=e.entity,{show:s}=t.config,l=e.labelled[0],c=e.labelled[e.labelled.length-1],d=e=>F$(e.kind,o)?"color-mix(in srgb, var(--primary-text-color, #212121) 30%, transparent)":T$(e.kind,o,i);return R`<div
    class="entity db-row ${i.available?"":"unavailable"}"
    data-index=${e.index}
    tabindex="0"
    role="img"
    aria-label=${I$(e,t,a)}
  >
    ${s.name?R`<span class="db-name">${i.name}</span>`:Z}
    <div class="db-plot">
      ${r.map(e=>R`<span class="db-grid" style="--f:${n(e)}"></span>`)}
      ${0===e.marks.length?R`<span class="db-status value">${i.available?"–":i.display}</span>`:R`${e.labelled.length>1?R`<span
                    class="db-bar"
                    style="--a:${n(l.value)};--b:${n(c.value)};--from:${d(l)};--to:${d(c)}"
                  ></span>`:Z}
            ${e.marks.map(e=>R`<span
                  class="db-dot ${e.kind} ${F$(e.kind,o)?"ring":""}"
                  style="--f:${n(e.value)};--mark:${T$(e.kind,o,i)}"
                ></span>`)}
            ${s.value?e.labelled.map((o,r)=>R`<span
                        class="db-label ${0===r&&e.labelled.length>1?"lo":"hi"}"
                        style="--f:${n(o.value)}"
                        >${Wt(o.value,i.decimals,t.hass)}</span
                      >`):Z}`}
    </div>
  </div>`}(o,e,t,d,s,r)),_=`db ${o} ${p.name?"":"no-names"} ${p.value?"":"no-values"}`;return R`<div class=${_} style="--name-w:${f}" role="group" aria-label=${g}>
      ${i?function(e,t,o,n,r,a){const i=t=>Ze(e.hass,t),s=new Set(n.map(e=>je(e.entity.band.color))),l=1===s.size?[...s][0]:je("primary"),c="range"===t?[[i("dumbbell_low"),L$.low,!1],...o?[[i("dumbbell_now"),T$("now",t,n[0].entity),!0]]:[],[i("dumbbell_high"),L$.high,!1]]:["then"===t?[N$(e.hass,r),L$.then,!1]:[i("dumbbell_target"),L$.target,!0],[i("dumbbell_now"),l,!1]];return R`<div class="db-legend">
    ${a?R`<span class="db-unit">${a}</span>`:Z}
    ${c.map(([e,t,o])=>R`<span class="db-key"
          ><span class="db-swatch ${o?"ring":""}" style="--mark:${t}"></span>${e}</span
        >`)}
  </div>`}(e,t,n,a,r,u):Z}
      ${"horizontal"===o?R`${v}
            ${s.length?R`<div class="db-axis" aria-hidden="true"><div class="db-plot">${y}</div></div>`:Z}`:R`<div class="db-body">
              ${s.length?R`<div class="db-axis" aria-hidden="true">${y}</div>`:Z}${v}
            </div>`}
    </div>`}};function R$(e){const t={...e,source:e.source??"statistics"};if("history"===t.source&&void 0===e.group_by){const o=e.period??{},n=(o.last??24)*({hour:1,day:24,week:168,month:720}[o.unit??"hour"]??1);t.group_by="day"===o.calendar||!o.calendar&&n<=48?"hour":"day"}return t}function q$(e){return e.flatMap((t,o)=>o>0?[[t[0],e[o-1][1]],t]:[t])}function B$(e,t,o){if(e.length<2)return"";const[n,r,a]="step"===o?[q$(e),q$(t),"straight"]:[e,t,o];return`${qa(n,a)}${qa([...r].reverse(),a).replace(/^M/,"L")}Z`}const Z$=[...pf.map(e=>"source"===e.name?{...e,default:"statistics"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"mean",path:["mean"],default:!0},{name:"line_width",path:["line_width"],default:_i},...Mf,...$f];const V$=[{name:"range_color",path:["color"]},{name:"curve",path:["curve"]},{name:"dash",path:["dash"],default:!1}],Y$={layout:"chart",group:"history",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){if(Xa(e),Fs(e),Zc(e),Si(e),ac(e),void 0!==e.mean&&"boolean"!=typeof e.mean)throw new Error('"mean" must be true or false')},editor:function(e){const t=Tf(`range_area|${ff(e.config)}`,e.hass,()=>[...gf(e.hass,e.config),{name:"curve",selector:hf(e.hass,"curve",Ha)},{type:"grid",name:"",schema:[{name:"mean",selector:{boolean:{}}},{name:"line_width",selector:Ui}]},...zf(e.hass),...kf(e.hass)]);return Rf(e,"chart",t,Z$)},entityFields:e=>({schema:Tf("range-area-entity",e,()=>[{type:"grid",name:"",schema:[{name:"range_color",selector:{text:{}}},{name:"curve",selector:hf(e,"curve",Ha)},{name:"dash",selector:{boolean:{}}}]}]),fields:V$}),disconnect(e){ni(e),Xl(e),qc(e)},render:function(e){const t={...e,raw:R$(e.raw)},o=Ja(t,Date.now(),{range:!0}),n=ti(o,t),r=ri(o,t),a=n===Z&&r===Z?Z:R`${n}${r}`,i=ai(o,t),s=ic(t.raw);if(i)return sc("over"===s.header?{...s,header:"above"}:s,a,i);const l=o.series,c=Jl(t,o.range,ws(l.map(e=>e.points))),d=!1!==t.raw.mean,u=t.raw.line_width??_i,h={text:(e,o)=>{if(!o||null===o.v)return"—";const n=o=>Wt(o,e.entity.decimals,t.hass),r=o.min??o.v,a=o.max??o.v;return Bt(`${n(r)} – ${n(a)}`,e.entity.unit)+(d?` · ${n(o.v)}`:"")}};d||(h.dotY=()=>null);const p=Bc(t.raw),m=Ze(t.hass,"chart_aria",{style:Ze(t.hass,"editor_style_range_area"),names:o.series.map(e=>e.entity.name).join(", ")});return sc(s,a,oc({axes:c,ctx:t,content:q`${l.map(e=>function(e,t,o,n){const r=[],a=[],i=[];for(const s of function(e){const t=[];let o=[];for(const n of e)null!==n.v?o.push({t:n.t,v:n.v,lo:n.min??n.v,hi:n.max??n.v}):(o.length&&t.push(o),o=[]);return o.length&&t.push(o),t}(e.points)){const o=s.map(e=>[t.x(e.t),t.y(e.hi)]),n=s.map(e=>[t.x(e.t),t.y(e.lo)]);r.push(B$(o,n,e.curve)),a.push(qa(o,e.curve),qa(n,e.curve)),i.push(qa(s.map(e=>[t.x(e.t),t.y(e.v)]),e.curve))}return q`<g class="series" data-series=${e.index}>
    <path class="band" d=${r.join("")} fill=${e.color} stroke="none"></path>
    <path class="band-edge" d=${a.join("")} fill="none" stroke=${e.color}></path>
    ${o?q`<path class="line ${e.dash?"dashed":""}" d=${i.join("")} fill="none" stroke=${e.color}
            style="stroke-width:${n}px"></path>`:Z}
  </g>`}(e,c.scales,d,u))}`,label:m,overlay:R`${"over"===s.header?lc(a):Z}
      ${p?Kc(t,l,c.scales,Wc(t.host),Kl(t),h):Z}`,hover:p?Vc(t,o.range,l.map(e=>e.points)):void 0}))}},G$=["line","area","column"];function X$(e,t){return e.config.spark??t.spark??"line"}function K$(e){const t=e.period??{},o=(t.last??24)*({hour:1,day:24,week:168,month:720}[t.unit??"hour"]??1);return(t.calendar?"day"===t.calendar:o<=48)?"hour":"day"}function J$(e,t){return void 0===e.group_by&&0!==t.length&&t.every(e=>"column"===e)?{...e,group_by:K$(e),aggregate:e.aggregate??"mean"}:e}function Q$(e,t,o,n){return Kn(e,un(K$(t),o.start,o.end,pn(n)),t.aggregate??"mean",Date.now())}function ek(e,t,o,n){const r=Dl(e.points,120),a=r.filter(e=>null!==e.v).map(e=>e.v),i=function(e,t){if(0===e.length)return;let o=Math.min(...e),n=Math.max(...e);return t?(o=Math.min(o,0),n=Math.max(n,0),o===n?[o,o+1]:[o,n]):([o,n]=$s([o,n],.1),[o,n])}(a,"column"===t);if(!i)return q``;const s=ks([o.start,o.end],[0,100]),l=ks(i,[23,1]),c=l(Math.min(Math.max(0,i[0]),i[1]));if("column"===t){const t=[];return r.forEach((e,n)=>{if(null===e.v)return;const a=e.end??r[n+1]?.t??o.end,i=s(e.t),d=Math.max(0,Math.min(100,s(a))-i);if(d<=0)return;const u=Math.min(l(e.v),c);t.push(q`<rect x=${i+.12*d} width=${.76*d} y=${u} height=${Math.abs(l(e.v)-c)}></rect>`)}),q`<g class="spark-columns" fill=${e.color}>${t}</g>`}const d=Ba(r).map(e=>e.map(e=>[s(e.t),l(e.v)])),u=d.map(t=>qa(t,e.curve)).join(""),h="area"===t?d.filter(e=>e.length>1).map(t=>`${qa(t,"step"===e.curve?"straight":e.curve)}L${t[t.length-1][0]},${c}L${t[0][0]},${c}Z`).join(""):"";return q`${h?q`<path class="spark-fill" d=${h} fill=${e.color} stroke="none"></path>`:Z}
    <path class="spark-line" d=${u} fill="none" stroke=${e.color} style="stroke-width:${n}px"></path>`}const tk=[...pf,{name:"spark",path:["spark"],default:"line"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:1.5},{name:"spark_bar",path:["bar"],default:!1}];const ok=[{name:"spark",path:["spark"]},{name:"spark_color",path:["color"]}];const nk={layout:"chart",group:"history",height:120,styles:a`
    ${si}
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
    <rect x="42" y="25" width="14" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.5" />`,validate:function(e){Xa(e);const t=[e.spark,...(e.entities??[]).map(e=>"object"==typeof e?e.spark:void 0)];for(const n of t)if(void 0!==n&&!G$.includes(n))throw new Error(`"spark" must be one of: ${G$.join(", ")}`);if(void 0!==e.bar&&"boolean"!=typeof e.bar)throw new Error('"bar" must be true or false');const o=e.line_width;if(void 0!==o&&("number"!=typeof o||o<bi||o>xi))throw new Error('"line_width" must be a number from 0.5 to 12')},editor:function(e){const t=Tf(`sparkline|${ff(e.config)}`,e.hass,()=>[...gf(e.hass,e.config),{type:"grid",name:"",schema:[{name:"spark",selector:hf(e.hass,"spark",G$)},{name:"curve",selector:hf(e.hass,"curve",Ha)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Ui},{name:"spark_bar",selector:{boolean:{}}}]}]);return Rf(e,"chart",t,tk)},entityFields:e=>({schema:Tf("sparkline-entity",e,()=>[{type:"grid",name:"",schema:[{name:"spark",selector:hf(e,"spark",G$)},{name:"spark_color",selector:{text:{}}}]}]),fields:ok}),disconnect(e){ni(e)},render:function(e){const t=e.items.map(t=>X$(t,e.raw)),o={...e,raw:J$(e.raw,t)},n=Ja(o),{show:r}=o.config,a=!0===o.raw.bar,i=o.raw.line_width??1.5,s="error"===n.status?R`<div class="spark-message error">${Ze(o.hass,"chart_error",{error:n.error??""})}</div>`:Z,l=n.series.map((s,l)=>{const c=s.entity,d=c.config.color,u=je(d||c.band.color),h="column"===X$(c,e.raw)&&void 0===o.raw.group_by,p={...s,color:u,points:h?Q$(s.points,o.raw,n.range,o.hass):s.points},m=c.config.line_width??i,f=r.name?R`<span class="name">${c.name}</span>`:Z,g=r.value||!c.available?R`<span class="value">${c.display}</span>`:Z;return R`<div
      class="entity spark-row ${a?"with-bar":""} ${c.available?"":"unavailable"}"
      data-index=${l}
      tabindex="0"
      aria-label=${c.label}
    >
      ${r.icon?R`<ha-state-icon
              class="icon"
              .hass=${o.hass}
              .stateObj=${c.stateObj}
              .icon=${Zh(c)}
            ></ha-state-icon>`:Z}
      ${a?R`<div class="spark-body">
              <div class="top">${f}${g}</div>
              ${function(e,t){const o=Ce(e.band.color);return R`<div
    class="spark-track"
    style="--start:${e.span[0]};--end:${e.span[1]};--c-start:${o.start};--c-end:${o.end};--target:${e.targetPosition??0}"
  >
    <div class="spark-bar"></div>
    ${t&&null!==e.targetPosition&&e.available?R`<div class="spark-target"></div>`:Z}
  </div>`}(c,r.target)}
            </div>`:f}
      <svg
        class="spark ${"loading"===n.status?"loading":""}"
        viewBox="0 0 ${100} ${24}"
        preserveAspectRatio="none"
        role="img"
        aria-label=${Ze(o.hass,"spark_aria",{name:c.name})}
      >
        ${"ready"===n.status?ek(p,t[l],n.range,m):Z}
      </svg>
      ${a?Z:g}
    </div>`});return R`${ti(n,o)}${s}
    <div class="spark-rows ${r.icon?"icons":""} ${a?"bars":""}">${l}</div>`}},rk=["wiggle","centre","share","zero"],ak=["inside_out","listed"];function ik(e){return e.map(e=>null===e||!Number.isFinite(e)||e<0?0:e)}function sk(e,t,o){const n="share"===o?function(e){const t=e[0]?.length??0,o=Array.from({length:t},(t,o)=>e.reduce((e,t)=>e+t[o],0));return e.map(e=>e.map((e,t)=>o[t]>0?e/o[t]*100:0))}(e):e,r=t.map(e=>n[e]);let a=function(e,t){const o=e[0]?.length??0,n=Array.from({length:o},(t,o)=>e.reduce((e,t)=>e+t[o],0));if("zero"===t||"share"===t)return new Array(o).fill(0);if("centre"===t)return n.map(e=>-e/2);const r=new Array(o).fill(0);for(let l=1;l<o;l++){let t=0,o=0;for(let n=0;n<e.length;n++){const r=e[n][l];let a=(r-e[n][l-1])/2;for(let t=0;t<n;t++)a+=e[t][l]-e[t][l-1];t+=r,o+=a*r}r[l]=r[l-1]-(t?o/t:0)}let a=1/0,i=-1/0;for(let l=0;l<o;l++)a=Math.min(a,r[l]),i=Math.max(i,r[l]+n[l]);const s=o?-(a+i)/2:0;return r.map(e=>e+s)}(r,o);const i=new Array(e.length);for(const s of t){const e=a.map((e,t)=>e+n[s][t]);i[s]={lower:a,upper:e},a=e}return i}function lk(e){let t=0,o=-1/0;return e.upper.forEach((n,r)=>{const a=n-e.lower[r];a>o&&(o=a,t=r)}),{at:t,thickness:Math.max(0,o)}}function ck(e,t,o){const n=Math.min(e.range.end,t);if(e.group){const t=e.series[0]?.points??[],o=t.map((e,t)=>t).filter(e=>t[e].t<n);return{times:o.map(e=>(t[e].t+Math.min(t[e].end??t[e].t,n))/2),values:e.series.map(e=>o.map(t=>e.points[t]?.v??null))}}let r=Math.min(240,Math.max(24,Math.round(o/4)));if("statistics"===e.source){const t=Math.max(1,...e.series.map(e=>e.points.filter(e=>!e.carried).length));r=Math.min(r,t)}const a=function(e,t,o){const n=Math.max(e.start+1,Math.min(e.end,t)),r=Math.max(1,Math.round(o)),a=(n-e.start)/r,i=[];for(let s=0;s<r;s++)i.push(e.start+s*a);return i.push(n),i}(e.range,n,r);return{times:a.slice(0,-1).map((e,t)=>(e+a[t+1])/2),values:e.series.map(t=>function(e,t,o,n){return("statistics"===o?Jn(e,t,"mean",n):Kn(e,t,"mean",n)).map(e=>e.v)}(t.points,a,e.source,n))}}function dk(e){return e.baseline??"wiggle"}const uk=e=>Math.round(1e4*e)/100+"%";function hk(e,t,o,n,r,a,i){const[s,l]=n.domain,c=ic(r.raw).compact?110:180,d=Kl(r),u=e=>e/(l-s)*c,h=new Map,p=[];for(const[f,g]of e.series.entries()){const e=t[f],{at:s,thickness:l}=lk(e);if(u(l)<18)continue;const m=i[f][s],y=a?`${Wt(e.upper[s]-e.lower[s],0,r.hass)} %`:null===m?"":Bt(Wt(m,g.entity.decimals,r.hass),g.entity.unit),v=`${g.entity.name} ${y}`.trim();h.set(g.index,v),p.push({key:g.index,x:o[s]/Za*d,y:n.y((e.upper[s]+e.lower[s])/2)/Va*c,width:6.2*v.length,thickness:u(l)})}const m=function(e,t){const o=[],n=new Map;for(const r of[...e].sort((e,t)=>t.thickness-e.thickness||e.key-t.key)){if(r.width>t-4)continue;const e=Math.min(Math.max(2,r.x-r.width/2),t-r.width-2),a={left:e,right:e+r.width,top:r.y-6.5,bottom:r.y+6.5},i=o.some(e=>a.left<e.right+4&&a.right>e.left-4&&a.top<e.bottom&&a.bottom>e.top);i||(o.push(a),n.set(r.key,e))}return n}(p,d);return R`<div class="stream-labels" aria-hidden="true">
    ${p.map(t=>{const o=m.get(t.key);if(void 0===o)return Z;const n=e.series.find(e=>e.index===t.key);return R`<span
        class="stream-label ${Le(function(e){return e.entity.config.color??Ya[e.index%Ya.length]}(n))}"
        style="left:${uk(d?o/d:0)};top:${uk(t.y/c)}"
        >${h.get(t.key)}</span
      >`})}
  </div>`}function pk(e,t,o,n,r,a,i,s){if(void 0===i)return Z;const l=Dc(o.times.map(e=>({t:e})),i);if(l<0)return Z;const c=a[l]/Za,d=Oc(c,Kl(e)),u=[...r].reverse().map(e=>t.series[e]),h=n.map(e=>e.upper[l]-e.lower[l]),p=o.values.reduce((e,t)=>e+Math.max(0,t[l]??0),0),m=new Set(t.series.map(e=>e.entity.unit));return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${uk(c)}"></div>
    <div class="tooltip ${d}" style=${d.startsWith("pin")?"":`left:${uk(c)}`}>
      <div class="tooltip-time">${el(o.times[l],e.hass)}</div>
      ${u.map(t=>R`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${(t=>{const n=o.values[t.index][l];if(null===n)return"—";const r=Bt(Wt(n,t.entity.decimals,e.hass),t.entity.unit);return s?`${r} · ${Wt(h[t.index],0,e.hass)} %`:r})(t)}</span>
          </div>`)}
      ${1===m.size&&t.series.length>1?R`<div class="tooltip-row total">
              <span class="tooltip-name">${Ze(e.hass,"stream_total")}</span>
              <span class="tooltip-value"
                >${Bt(Wt(p,t.series[0].entity.decimals,e.hass),t.series[0].entity.unit)}</span
              >
            </div>`:Z}
    </div>
  </div>`}const mk=[...pf,{name:"baseline",path:["baseline"],default:"wiggle"},{name:"stream_order",path:["stream_order"],default:"inside_out"},{name:"stream_curve",path:["curve"],default:"smooth"},{name:"stream_labels",path:["labels"],default:!0},...Mf,...$f],fk=new Set(["y_axis","grid_horizontal","y_min","y_max"]);function gk(e){return e.map(e=>{const t=e;if(!fk.has(t.name)){if(t.schema){const e=t.schema.filter(e=>!fk.has(e.name));return e.length?{...t,schema:e}:void 0}return t}}).filter(e=>void 0!==e)}const yk={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},vk={layout:"chart",group:"totals",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
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
      fill="var(--warning-color, #f59e0b)" />`,validate(e){if(Xa(e),Fs(e),Zc(e),ac(e),void 0!==e.baseline&&!rk.includes(e.baseline))throw new Error(`"baseline" must be one of: ${rk.join(", ")}`);if(void 0!==e.stream_order&&!ak.includes(e.stream_order))throw new Error(`"stream_order" must be one of: ${ak.join(", ")}`);if(void 0!==e.labels&&"boolean"!=typeof e.labels)throw new Error('"labels" must be true or false')},editor:function(e){const t=function(e){const t=dk(e);return`${ff(e)}|${"wiggle"===t||"centre"===t?"floating":"axis"}`}(e.config),o=Tf(`streamgraph|${t}`,e.hass,()=>{const o=zf(e.hass);return[...gf(e.hass,e.config),{type:"grid",name:"",schema:[{name:"baseline",selector:hf(e.hass,"baseline",rk)},{name:"stream_order",selector:hf(e.hass,"stream_order",ak)}]},{type:"grid",name:"",schema:[{name:"stream_curve",selector:hf(e.hass,"curve",["smooth","straight","step"])},{name:"stream_labels",selector:{boolean:{}}}]},...t.endsWith("floating")?gk(o):o,...kf(e.hass)]});return Rf(e,"chart",o,mk)},entityFields:()=>yk,disconnect(e){ni(e),Xl(e),qc(e)},render(e){const t=Date.now(),o=Ja(e,t),n=ti(o,e),r=ri(o,e),a=n===Z&&r===Z?Z:R`${n}${r}`,i=ai(o,e),s=ic(e.raw);if(i)return sc("over"===s.header?{...s,header:"above"}:s,a,i);const l=dk(e.raw),c="share"===l,d="wiggle"===l||"centre"===l,u=ck(o,t,Kl(e)),h=u.values.map(ik),p="listed"===(e.raw.stream_order??"inside_out")?h.map((e,t)=>t):function(e){const t=e.map((e,t)=>{let o=0;for(let n=1;n<e.length;n++)e[n]>e[o]&&(o=n);return{i:t,at:o,sum:e.reduce((e,t)=>e+t,0)}});t.sort((e,t)=>e.at-t.at||e.i-t.i);let o=0,n=0;const r=[],a=[];for(const i of t)o<n?(o+=i.sum,r.push(i.i)):(n+=i.sum,a.push(i.i));return[...a.reverse(),...r]}(h);const m=sk(h,p,l),f=function(e){let t=1/0,o=-1/0;for(const n of e){for(const e of n.lower)t=Math.min(t,e);for(const e of n.upper)o=Math.max(o,e)}return t===1/0?void 0:[t,o]}(m);let g=e.raw;if(d){const[t,o]=f??[0,1],n=o>t?.04*(o-t):1;g={...e.raw,y_axis:!1,y_min:t-n,y_max:o+n,gridlines:{...e.raw.gridlines??{},horizontal:!1}}}else c?g={...e.raw,y_min:0,y_max:100}:void 0===e.raw.y_min&&(g={...e.raw,y_min:0});const y=Jl({...e,raw:g},o.range,f),{scales:v}=y,_=u.times.map(e=>v.x(e)),b=e.raw.curve??"smooth",x=Math.min(o.range.end,t),w=[v.x(o.range.start),..._,v.x(x)],$=0===u.times.length?q``:q`${p.map(e=>{const t=o.series[e];return q`<path
              class="stream entity"
              data-index=${t.index}
              aria-label=${t.entity.label}
              d=${function(e,t,o,n){const r=t.map((t,n)=>[t,o.y(e.upper[n])]),a=t.map((t,n)=>[t,o.y(e.lower[n])]).reverse();return 0===r.length?"":`${qa(r,n)}L${qa(a,n).slice(1)}Z`}((e=>({lower:[e.lower[0],...e.lower,e.lower[e.lower.length-1]],upper:[e.upper[0],...e.upper,e.upper[e.upper.length-1]]}))(m[e]),w,v,b)}
              fill=${t.color}
            ></path>`})}`,k=Bc(e.raw),M=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_streamgraph"),names:o.series.map(e=>e.entity.name).join(", ")}),z=u.times.map(e=>({t:e,v:0}));return sc(s,a,oc({axes:y,ctx:{...e},content:$,label:M,overlay:R`${"over"===s.header?lc(a):Z}
        ${!1!==e.raw.labels&&u.times.length?hk(o,m,_,v,e,c,u.values):Z}
        ${k?pk(e,o,u,m,p,_,Wc(e.host),c):Z}`,hover:k?Vc(e,o.range,[z]):void 0}))}};const _k=["columns","line"],bk=.7;function xk(e){return{last:14,unit:"day",...e.period??{}}}function wk(e){return e.group_by??"day"}function $k(e,t=Date.now()){const o=xn(xk(e.raw)),n=e.raw.source??"statistics";const r=wk(e.raw),a=e.raw.aggregate??"mean",i=pn(e.hass),s=$n(o,t,i,o.navigate?Mn(e.host,o):0),l=cn(r,s.start,i),c=un(r,l,s.end,i),d={start:l,end:c[c.length-1]},u=Math.min(s.end,t),h=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute,...pt(e.config)})),p=lr(e.host,e.requestUpdate),m="statistics"===n?function(e,t,o){let n="hour";return"hour"===e?n="5minute":"day"!==e&&t.timeZone===o&&(n="day"),{period:n,types:["mean","min","max","state"],value:"mean"}}(r,i,e.hass.config?.time_zone):void 0,f=p.get(e.hass,h,{start:l,end:s.end},n,{live:s.live,statistics:m}),g=wa(e,{start:l,end:s.end},s.live);let y=[];const v=e.items.map((t,o)=>{const r=t.config;let s;const l=Ka(t,ka(t.config,Aa(f.data.get(Zn(h[o]))??[],t.conversion),g),d,u,i,e.hass);return 0===o?(y="statistics"===n?function(e,t,o){const n=[];let r=0;for(let a=0;a+1<t.length;a++){const i=t[a],s=t[a+1];for(;r<e.length&&e[r].t<i;)r++;let l=null;for(let t=r;t<e.length&&e[t].t<s;t++){const n=e[t];if(null===n.v||n.carried||i>=o)continue;const r="number"==typeof n.max?Math.max(n.max,n.v):n.v,a="number"==typeof n.min?Math.min(n.min,n.v):n.v;l?(l.high=Math.max(l.high,r),l.low=Math.min(l.low,a),l.close=n.v):l={t:i,end:s,open:n.v,high:r,low:a,close:n.v}}n.push(l)}return n}(l.points,c,u):function(e,t,o){const[n,r,a,i]=["first","max","min","last"].map(n=>Kn(e,t,n,o));return n.map((e,t)=>null===e.v||null===r[t].v||null===a[t].v||null===i[t].v?null:{t:e.t,end:e.end??e.t,open:e.v,high:r[t].v,low:a[t].v,close:i[t].v})}(l.points,c,u),s=y.map((e,t)=>({t:c[t],end:c[t+1],v:e?e.close:null}))):s=function(e,t,o,n,r){return"history"===n?Kn(e,t,o,r):"sum"===o||"change"===o?Kn(e,t,"change",r):Jn(e,t,o,r)}(l.points,c,a,n,u),{index:o,entity:l.entity,points:s,color:je(r.color??(0===o?Ya[0]:"grey")),curve:"smooth",dash:!1}});return{status:$a(f.status,g),error:f.error,range:d,period:o,source:n,series:v,live:s.live,back:s.back,zone:i,group:{unit:r,aggregate:a},candles:y,unit:r}}const kk=e=>Math.round(1e4*e)/100+"%";function Mk(e,t,o,n){if(void 0===n)return Z;const r=t.series[0].points.map(e=>({t:(e.t+(e.end??e.t))/2})),a=Dc(r,n);if(a<0)return Z;const i=t.candles[a],s=o(r[a].t)/Za,l=Oc(s,Kl(e)),c=t.series[0].entity,d=(t,o=c)=>Bt(Wt(t,o.decimals,e.hass),o.unit),u=i?[[Ze(e.hass,"candle_open"),d(i.open)],[Ze(e.hass,"candle_high"),d(i.high)],[Ze(e.hass,"candle_low"),d(i.low)],[Ze(e.hass,"candle_close"),d(i.close)]]:[[c.name,"—"]];for(const h of t.series.slice(1)){const e=h.points[a]?.v;u.push([h.entity.name,null==e?"—":d(e,h.entity),h.color])}return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${kk(s)}"></div>
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${kk(s)}`}>
      <div class="tooltip-time">${function(e,t,o,n){if("hour"===t)return el(e,o);const r="month"===t?{month:"long",year:"numeric",timeZone:n.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:n.timeZone};let a;try{a=new Intl.DateTimeFormat(o?.locale?.language??o?.language??"en",r)}catch{a=new Intl.DateTimeFormat("en",r)}const i=a.format(e);return"week"===t?Ze(o,"candle_week_of",{date:i}):i}(t.series[0].points[a].t,t.unit,e.hass,t.zone)}</div>
      ${u.map(([e,t,o])=>R`<div class="tooltip-row">
            ${o?R`<span class="swatch" style="background:${o}"></span>`:Z}
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}const zk=[...pf.map(e=>"period_last"===e.name?{...e,default:14}:"period_unit"===e.name?{...e,default:"day"}:"source"===e.name?{...e,default:"statistics"}:"group_by"===e.name?{name:"candle_by",path:["group_by"],default:"day"}:"aggregate"===e.name?{name:"under_aggregate",path:["aggregate"],default:"mean"}:e),{name:"up_color",path:["up_color"],default:"green"},{name:"down_color",path:["down_color"],default:"red"},{name:"underneath",path:["underneath"],default:"columns"},...Mf,...$f];const Ek={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Sk={layout:"chart",group:"history",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
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
    </g>`,validate(e){Xa(e),Fs(e),Zc(e),ac(e),xn(xk(e));for(const t of["up_color","down_color"])if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`);if(void 0!==e.underneath&&!_k.includes(e.underneath))throw new Error(`"underneath" must be one of: ${_k.join(", ")}`)},editor:function(e){const t=Tf(`candlestick|${e.config.period?.calendar?"calendar":"rolling"}`,e.hass,()=>{return[...(t=e.hass,o=e.config,gf(t,{...o,group_by:wk(o)}).map(e=>{const o=e;return o.schema?.some(e=>"group_by"===e.name)?{...o,schema:[{name:"candle_by",selector:hf(t,"group_by",Vn)},{name:"under_aggregate",selector:hf(t,"aggregate",Yn)}]}:e})),{type:"grid",name:"",schema:[{name:"up_color",selector:{text:{}}},{name:"down_color",selector:{text:{}}}]},{name:"underneath",selector:hf(e.hass,"underneath",_k)},...zf(e.hass),...kf(e.hass)];var t,o});return Rf(e,"chart",t,zk)},entityFields:()=>Ek,disconnect(e){ni(e),Xl(e),qc(e)},render(e){const t=Pa($k(e),e,e=>0===e.index),o=ti(t,e),n=ri(t,e),r=o===Z&&n===Z?Z:R`${o}${n}`,a=ai(t,e),i=ic(e.raw);if(a)return sc("over"===i.header?{...i,header:"above"}:i,r,a);const s=Jl(e,t.range,function(e){let t=1/0,o=-1/0;for(const n of e)n&&(t=Math.min(t,n.low),o=Math.max(o,n.high));return t===1/0?void 0:[t,o]}(t.candles)),l=t.series.length>1;l&&(s.scales.y=ks(s.value.domain,[146,0]));const{x:c,y:d}=s.scales,u=je(e.raw.up_color??"green"),h=je(e.raw.down_color??"red"),p=t.series[0],m=t.candles.map(e=>{if(!e)return Z;const t=c(e.t),o=c(e.end)-t,n=t+o/2,r=e.close>=e.open?u:h,a=d(Math.max(e.open,e.close)),i=Math.max(1.5,d(Math.min(e.open,e.close))-a);return q`<g
        class="candle entity ${e.close>=e.open?"up":"down"}"
        data-index="0"
        aria-label=${p.entity.label}
      >
        <line class="wick" x1=${n} x2=${n} y1=${d(e.high)} y2=${d(e.low)} stroke=${r}></line>
        <rect class="body" x=${t+o*(1-bk)/2} width=${o*bk} y=${a} height=${i} fill=${r}></rect>
      </g>`}),f=e.raw.underneath??"columns",g=q`${l?function(e,t,o){const n=e.series.slice(1);return q`${n.map((e,r)=>{const a=e.points.map(e=>e.v).filter(e=>null!==e),i=Math.min(0,...a),s=Math.max(0,...a),l=ks([i,s===i?i+1:s],[Va,156]);if("line"===o){const o=Ba(e.points).map(e=>qa(e.map(e=>[t((e.t+(e.end??e.t))/2),l(e.v)]),"straight")).join("");return q`<path class="under-line entity" data-index=${e.index} d=${o} fill="none" stroke=${e.color}></path>`}return q`<g class="under-columns entity" data-index=${e.index} fill=${e.color}>
      ${e.points.map(e=>{if(null===e.v)return Z;const o=t(e.t),a=t(e.end??e.t)-o,i=a*bk/n.length,s=o+a*(1-bk)/2+r*i,c=l(Math.max(0,e.v));return q`<rect x=${s} width=${Math.max(.5,.9*i)} y=${c} height=${Math.max(0,l(Math.min(0,e.v))-c)}></rect>`})}
    </g>`})}`}(t,c,f):Z}${m}`,y=Bc(e.raw),v=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_candlestick"),names:t.series.map(e=>e.entity.name).join(", ")}),_=p.points.map(e=>({t:(e.t+(e.end??e.t))/2,v:e.v}));return sc(i,r,oc({axes:s,ctx:e,content:g,label:v,overlay:R`${"over"===i.header?lc(r):Z}
        ${y?Mk(e,t,c,Wc(e.host)):Z}`,hover:y?Vc(e,t.range,[_]):void 0}))}},Ak=["horizontal","vertical"],jk=1e3,Ck=100,Nk=e=>"number"==typeof e&&Number.isFinite(e),Lk=[{name:"orientation",path:["orientation"],default:"horizontal"},{name:"value_axis",path:["value_axis"],default:!0},{name:"value_grid",path:["value_grid"],default:!0},{name:"value_min",path:["value_min"]},{name:"value_max",path:["value_max"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function Fk(e){return[{name:"orientation",selector:hf(e,"orientation",Ak)},{type:"grid",name:"",schema:[{name:"value_axis",selector:{boolean:{}}},{name:"value_grid",selector:{boolean:{}}},{name:"value_min",selector:{number:{mode:"box",step:"any"}}},{name:"value_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]}function Tk(e){for(const t of["compact","tooltip"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);if(void 0!==e.orientation&&!Ak.includes(e.orientation))throw new Error(`"orientation" must be one of: ${Ak.join(", ")}`);for(const t of["value_axis","value_grid"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of["value_min","value_max"])if(void 0!==e[t]&&!Nk(e[t]))throw new Error(`"${t}" must be a number`);if(Nk(e.value_min)&&Nk(e.value_max)&&e.value_min>=e.value_max)throw new Error('"value_min" must be below "value_max"')}function Ok(e){return{orientation:e.orientation??"horizontal",axis:!1!==e.value_axis,grid:!1!==e.value_grid,min:Nk(e.value_min)?e.value_min:void 0,max:Nk(e.value_max)?e.value_max:void 0}}function Pk(e){return Math.min(140,Math.max(64,Math.round(.3*(e-32))))}function Dk(e,t,o,n=64){const r=Ok(e.raw),a=!0===e.raw.compact,i=Gl(e),s=Math.max(1,t);if("horizontal"===r.orientation){const e=ks(o.domain,[0,jk]);return{orientation:r.orientation,count:s,width:jk,height:s*Ck,at:(t,o,n=0)=>[e(t),(o+.5+n)*Ck],valuePx:Math.max(40,i-32-Pk(i)-8),bandPx:Math.min(a?Math.round(.69*n):n,s>12?28:s>6?40:1/0)}}const l=ks(o.domain,[jk,0]),c=Math.max(40,i-32-(r.axis?40:0));return{orientation:r.orientation,count:s,width:s*Ck,height:jk,at:(e,t,o=0)=>[(t+.5+o)*Ck,l(e)],valuePx:a?110:180,bandPx:c/s}}function Uk(e,t){return"horizontal"===t?Math.max(2,Math.min(8,Math.floor(e/64))):e>140?4:3}function Ik(e,t,o,n){const r=Ok(t),a=Us(e,{min:r.min,max:r.max},o);return{domain:a.domain,ticks:a.ticks,format:e=>Wt(e,a.decimals,n)}}function Hk(e,t){const o=function(e){for(const t of[1,2,3,4,6,12])if(t>=e)return t;return Math.max(12,Os(e,1))}(24/Math.max(1,e)),n=[];for(let i=0;i<=24;i+=o)n.push(i);let r;const a={hour:"numeric",minute:"2-digit",timeZone:"UTC",hour12:Xs(t)};try{r=new Intl.DateTimeFormat(t?.locale?.language??t?.language??"en",a)}catch{r=new Intl.DateTimeFormat("en",a)}return{domain:[0,24],ticks:n,format:e=>r.format(Date.UTC(2e3,0,1,0,Math.round(60*e)))}}const Wk=e=>Math.round(1e4*e)/100+"%",Rk=new WeakMap;function qk(e){return Rk.get(e)}function Bk(e){Rk.delete(e)}function Zk(e,t,o,n,r){const a=(t+.5)/e.count,i="horizontal"===e.orientation?a>.5?`top:auto;bottom:${Wk(1-t/e.count)};right:0`:`top:${Wk((t+1)/e.count)};right:0`:a>.5?`top:0;right:${Wk(1-t/e.count)}`:`top:0;left:${Wk((t+1)/e.count)}`;return R`<div class="hover-layer" aria-hidden="true">
    <div class="tooltip band-tooltip" style=${i}>
      <div class="tooltip-time"><span class="swatch" style="background:${r}"></span> ${o}</div>
      ${n.map(([e,t])=>R`<div class="tooltip-row">
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}function Vk({ctx:e,geometry:t,categories:o,scale:n,content:r,label:a,overlay:i=Z,hover:s=!1}){const l=Ok(e.raw),c="horizontal"===t.orientation,d=n.ticks.filter(e=>e>=n.domain[0]&&e<=n.domain[1]),u=l.grid?q`<g class="grid">${d.map(e=>{const[o,n]=t.at(e,0);return c?q`<line x1=${o} x2=${o} y1="0" y2=${t.height}></line>`:q`<line x1="0" x2=${t.width} y1=${n} y2=${n}></line>`})}</g>`:Z,h=l.axis&&d.length?R`<div class="cat-axis">
          ${c?Z:R`<span class="cat-sizer" aria-hidden="true"
                  >${d.map(n.format).reduce((e,t)=>t.length>e.length?t:e,"")}</span
                >`}
          ${d.map(e=>{const o=(e=>{const[o,n]=t.at(e,0);return c?o/t.width:n/t.height})(e);return R`<span class="axis-label ${c?o<.04?"start":o>.96?"end":"":o<.08?"top":""}" style="${c?"left":"top"}:${Wk(o)}"
              >${n.format(e)}</span
            >`})}
        </div>`:Z,p=s?function(e,t){const o=t=>{Rk.get(e.host)!==t&&(void 0===t?Rk.delete(e.host):Rk.set(e.host,t),e.requestUpdate())};return{move(e){const n=e.currentTarget.getBoundingClientRect(),r="horizontal"===t.orientation,a=r?n.height:n.width,i=r?e.clientY-n.top:e.clientX-n.left;a>0&&o(Math.min(t.count-1,Math.max(0,Math.floor(i/a*t.count))))},leave(){o(void 0)}}}(e,t):void 0,m=R`<div class="cat-labels">
    ${o.map(e=>R`<div class="entity cat-label" data-index=${e.index} tabindex="0" aria-label=${e.label}>
          <span class="cat-name"><span class="swatch" style="background:${e.color}"></span>${e.name}</span>
          ${e.detail?R`<span class="cat-detail">${e.detail}</span>`:Z}
        </div>`)}
  </div>`,f=c?`height:${t.count*t.bandPx}px`:`height:${t.valuePx}px`,g=c&&t.bandPx<40;return R`<div
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
        aria-label=${a}
      >
        ${u}
        <g class="cat-content">${r}</g>
      </svg>
      ${i}
    </div>
    ${c?h:m}
  </div>`}const Yk=a`
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
`;function Gk(e,t,o){const n=[];for(let r=0;r<e.length;r++){const a=e[r];if(null===a.v||!Number.isFinite(a.v))continue;const i=r+1<e.length?e[r+1].t:o;if(t&&r>0&&r===e.length-1&&a.t>=o)continue;const s=t?Math.max(1,Math.min(i,o)-a.t):1;n.push({t:a.t,v:a.v,w:s,real:!0!==a.carried})}return n}function Xk(e,t,o){const n=Gk(e,t,o),r=n.filter(e=>e.real).map(e=>({...e,w:1}));if(r.length||!t)return{readings:r};const a=n.find(e=>!e.real);return a?{readings:[{...a,w:1,real:!0}],held:a.v}:{readings:r}}function Kk(e){return[...e].sort((e,t)=>e.v-t.v)}function Jk(e,t){const o=e.length;if(0===o)return Number.NaN;if(1===o)return e[0].v;const n=e.reduce((e,t)=>e+t.w,0),r=Math.min(1,Math.max(0,t))*n;let a=0,i=-1/0,s=e[0].v;for(const l of e){const e=a+l.w/2;if(r<=e)return i===-1/0?l.v:s+(l.v-s)*(r-i)/(e-i||1);a+=l.w,i=e,s=l.v}return e[o-1].v}function Qk(e){if(0===e.length)return;const t=Kk(e),o=Jk(t,.25),n=Jk(t,.5),r=Jk(t,.75),a=1.5*(r-o),i=t.filter(e=>e.v>=o-a&&e.v<=r+a),s=t.reduce((e,t)=>e+t.w,0);return{n:e.length,min:t[0].v,max:t[t.length-1].v,q1:o,median:n,q3:r,low:i.length?i[0].v:o,high:i.length?i[i.length-1].v:r,mean:s>0?t.reduce((e,t)=>e+t.v*t.w,0)/s:n}}function eM(e){const t=e.length;if(0===t)return 1;const o=Kk(e),n=o.reduce((e,t)=>e+t.w,0),r=o.reduce((e,t)=>e+t.v*t.w,0)/n,a=Math.sqrt(o.reduce((e,t)=>e+t.w*(t.v-r)**2,0)/n),i=Jk(o,.75)-Jk(o,.25),s=i>0?Math.min(a,i/1.34):a,l=o.reduce((e,t)=>e+t.w*t.w,0),c=l>0?n*n/l:t;let d=1/0;for(let h=1;h<o.length;h++){const e=o[h].v-o[h-1].v;e>0&&e<d&&(d=e)}const u=.9*s*Math.max(1,c)**-.2;return u>0?Math.max(u,d===1/0?0:d):d!==1/0?d:.01*Math.abs(r)||1}function tM(e,t,o,n=64){if(0===e.length)return[];let r=1/0,a=-1/0;for(const u of e)r=Math.min(r,u.v),a=Math.max(a,u.v);const i=Math.max(o[0],r-2*t),s=Math.min(o[1],a+2*t);if(!(s>i))return[];const l=Array.from({length:n+1},(e,t)=>i+(s-i)*t/n),c=function(e,t,o){const n=e.reduce((e,t)=>e+t.w,0);if(0===n||t<=0)return o.map(()=>0);const r=1/(n*t*Math.sqrt(2*Math.PI));return o.map(o=>{let n=0;for(const r of e){const e=(o-r.v)/t;e>-6&&e<6&&(n+=r.w*Math.exp(-.5*e*e))}return n*r})}(e,t,l),d=Math.max(...c);return l.map((e,t)=>({x:e,d:d>0?c[t]/d:0}))}function oM(e){const t=43758.5453*Math.sin(12.9898*(e+1));return t-Math.floor(t)-.5}function nM(e,t){const o=e.filter(e=>e.real);if(o.length<=t)return o;const n=[];for(let r=0;r<t;r++)n.push(o[Math.floor(r*o.length/t)]);return n}const rM=["violin","raincloud"],aM=["none","day","week","month"],iM=.42;function sM(e){const t=e.shape??"violin";return{shape:t,box:!1!==e.box,readings:e.readings??"raincloud"===t,bandwidth:"number"==typeof e.bandwidth?e.bandwidth:void 0,split:e.split_by??"none"}}function lM(e,t,o,n){const r="month"===t?{month:"short",year:"numeric",timeZone:o.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:o.timeZone};try{return new Intl.DateTimeFormat(n?.locale?.language??n?.language??"en",r).format(e)}catch{return new Intl.DateTimeFormat("en",r).format(e)}}const cM=(e,t,o)=>e?Bt(Wt(e.median,t.entity.decimals,o),t.entity.unit):"";function dM(e,t,o,n,r,a,i){const s=(e,t)=>e?Ze(i,"violin_median",{value:cM(e,t,i)}):Ze(i,"violin_none");if("none"===o.split)return e.map((e,o)=>{const n=Qk(t[o]);return{series:e,readings:t[o],summary:n,name:e.entity.name,detail:s(n,e)}});const l=e.map((e,o)=>function(e,t,o){const n=t.slice(0,-1).map(()=>[]);for(const r of e)for(let e=0;e+1<t.length;e++){const a=t[e],i=t[e+1];if(!o){r.t>=a&&r.t<i&&n[e].push(r);continue}const s=Math.min(i,r.t+r.w)-Math.max(a,r.t);s<=0||n[e].push({t:Math.max(a,r.t),v:r.v,w:s,real:r.real&&r.t>=a})}return n}(t[o],n,r)),c=[];for(let d=0;d+1<n.length;d++)for(let t=0;t<e.length;t++){const r=l[t][d];if(0===r.length)continue;const u=Qk(r),h=lM(n[d],o.split,a,i);c.push({series:e[t],readings:r,summary:u,name:e.length>1?`${h} · ${e[t].entity.name}`:h,detail:s(u,e[t])})}return c}function uM(e,t,o,n,r=0,a=.42){if(0===e.length)return"";const i=e.map(e=>t.at(e.x,o,r-e.d*a)),s=e.map(e=>t.at(e.x,o,n?r:r+e.d*a));return function(e,t){const o=e=>Math.round(100*e)/100;return`${[...e,...[...t].reverse()].map(([e,t],n)=>`${n?"L":"M"}${o(e)},${o(t)}`).join("")}Z`}(i,s)}function hM(e,t,o,n,r){const{summary:a,series:i}=e;if(!a)return q``;const s=n.bandwidth??eM(e.readings),l=tM(e.readings,s,r),c="raincloud"===n.shape,d=Math.min(1,110/o.bandPx),u=q`<path class="shape" d=${uM(l,o,t,c,c?-.04*d:0,(c?.44:iM)*d)}
    fill=${i.color} stroke=${i.color}></path>`,h=c?.08*d:0,p=function([e,t],[o,n]){return{x:Math.min(e,o),y:Math.min(t,n),width:Math.abs(o-e),height:Math.abs(n-t)}}(o.at(a.q1,t,h-.045*d),o.at(a.q3,t,h+.045*d)),[m,f]=o.at(a.low,t,h),[g,y]=o.at(a.high,t,h),v=n.box?q`<g class="box">
        <line class="whisker" x1=${m} y1=${f} x2=${g} y2=${y} stroke=${i.color}></line>
        <rect class="iqr" x=${p.x} y=${p.y} width=${p.width} height=${p.height} fill=${i.color}></rect>
        <path class="median" d=${ki([o.at(a.median,t,h)])}></path>
      </g>`:Z,_=n.readings?q`<path class="dots" stroke=${i.color} d=${ki(nM(e.readings,300).map((e,n)=>o.at(e.v,t,d*function(e,t,o){return o?.3+.22*oM(e):1.6*oM(e)*iM*t}(n,function(e,t){if(0===e.length)return 0;let o=0;for(;o<e.length-1&&e[o+1].x<t;)o++;const n=e[o],r=e[Math.min(e.length-1,o+1)];return r.x===n.x?n.d:n.d+(r.d-n.d)*(t-n.x)/(r.x-n.x)}(l,e.v),c))))}></path>`:Z;return q`<g class="group">${u}${v}${_}</g>`}const pM=(e,t,o)=>{const n=e=>Wt(e,t.entity.decimals,o),r=e=>Bt(e,t.entity.unit);return[[Ze(o,"dist_median"),r(n(e.median))],[Ze(o,"dist_middle"),r(`${n(e.q1)} – ${n(e.q3)}`)],[Ze(o,"dist_range"),r(`${n(e.min)} – ${n(e.max)}`)],[Ze(o,"dist_count"),Wt(e.n,0,o)]]},mM=[...pf,{name:"shape",path:["shape"],default:"violin"},{name:"box",path:["box"],default:!0},{name:"split_by",path:["split_by"],default:"none"},{name:"bandwidth",path:["bandwidth"]},...Lk],fM=new Map;const gM={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},yM={layout:"chart",group:"distribution",height:240,styles:a`
    ${si}
    ${Jc}
    ${cc}
    ${Yk}
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
      <circle cx="34" cy="35.5" r="1.3" /><circle cx="42" cy="37" r="1.3" /></g>`,validate(e){if(Xa(e),Zc(e),Tk(e),void 0!==e.shape&&!rM.includes(e.shape))throw new Error(`"shape" must be one of: ${rM.join(", ")}`);if(void 0!==e.split_by&&!aM.includes(e.split_by))throw new Error(`"split_by" must be one of: ${aM.join(", ")}`);for(const o of["box","readings"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);const t=e.bandwidth;if(void 0!==t&&!("number"==typeof t&&Number.isFinite(t)&&t>0))throw new Error('"bandwidth" must be a number above 0')},editor:function(e){const t=sM(e.config),o=Tf(`violin|${ff(e.config)}`,e.hass,()=>[...gf(e.hass,e.config),{type:"grid",name:"",schema:[{name:"shape",selector:hf(e.hass,"shape",rM)},{name:"split_by",selector:hf(e.hass,"split_by",aM)}]},{type:"grid",name:"",schema:[{name:"box",selector:{boolean:{}}},{name:"readings",selector:{boolean:{}}}]},{name:"bandwidth",selector:{number:{min:0,mode:"box",step:"any"}}},...Fk(e.hass)]);return Rf(e,"chart",o,function(e){let t=fM.get(e);return t||(t=[...mM,{name:"readings",path:["readings"],default:"raincloud"===e}],fM.set(e,t)),t}(t.shape))},entityFields:()=>gM,disconnect(e){ni(e),Xl(e),Bk(e)},render(e){const t=Date.now(),o=Ja(e,t),n=ti(o,e),r={...ic(e.raw),header:"above"},a=ai(o,e);if(a)return sc(r,n,a);const i=sM(e.raw),s=Math.min(o.range.end,t),l="history"===o.source&&!o.group,c=o.series.map(e=>Gk(e.points,l,s)),d="none"===i.split?[]:un(i.split,o.range.start,s,o.zone),u=dM(o.series,c,i,d,l,o.zone,e.hass);let h=1/0,p=-1/0;for(const k of u){if(!k.summary)continue;const e=i.bandwidth??eM(k.readings);h=Math.min(h,k.summary.min-e),p=Math.max(p,k.summary.max+e)}const m=Ok(e.raw),f=Dk(e,u.length,{domain:[0,1]}),g=Ik(h===1/0?void 0:[h,p],e.raw,Uk(f.valuePx,m.orientation),e.hass),y=Dk(e,u.length,g),v=q`${u.map((e,t)=>hM(e,t,y,i,g.domain))}`,_=u.map(e=>({index:e.series.index,name:e.name,detail:e.detail,color:e.series.color,label:`${e.name}, ${e.detail}`})),b=Bc(e.raw),x=b?qk(e.host):void 0,w=void 0===x?void 0:u[x],$=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"raincloud"===i.shape?"violin_raincloud":"editor_style_violin"),names:o.series.map(e=>e.entity.name).join(", ")});return sc(r,n,Vk({ctx:e,geometry:y,categories:_,scale:g,content:v,label:$,hover:b,overlay:w?.summary&&void 0!==x?Zk(y,x,w.name,pM(w.summary,w.series,e.hass),w.series.color):Z}))}},vM=.75;function _M(e){const t=e.map((e,t)=>t).sort((t,o)=>e[t].at-e[o].at||t-o),o=new Array(e.length).fill(0),n=[];let r=0;const a=function(e){let t=0;for(const o of e)o.r>t&&(t=o.r);return t}(e);for(const i of t){const{at:t,r:s}=e[i];for(;r<n.length&&t-n[r].at>s+a+vM;)r++;const l=n.slice(r).filter(e=>Math.abs(e.at-t)<e.r+s+vM),c=[0];for(const e of l){const o=e.r+s+vM,n=Math.sqrt(Math.max(0,o*o-(e.at-t)**2));c.push(e.y+n,e.y-n)}const d=c.sort((e,t)=>Math.abs(e)-Math.abs(t)||t-e).find(e=>l.every(o=>(o.at-t)**2+(o.y-e)**2>=(o.r+s+vM)**2-1e-6)),u=d??0;o[i]=u,n.push({at:t,r:s,y:u})}return o}function bM(e,t,o=1){let n=1,r=_M(e);const a=t=>function(e,t){let o=0;return e.forEach((e,n)=>{o=Math.max(o,Math.abs(t[n])+e.r)}),o}(e.map(e=>({...e,r:e.r*t})),r),i=Math.min(...e.map(e=>e.r)),s=Math.min(1,o/Math.max(i,1e-9));for(let l=0;l<4;l++){const o=a(n);if(o<=t)return{offsets:r,scale:n};const i=Math.max(s,n*Math.sqrt(t/o)*.95);if(i>=n)break;n=i,r=_M(e.map(e=>({...e,r:e.r*n})))}if(a(n)>t){const o=Math.max(0,t-Math.max(...e.map(e=>e.r*n))),a=Math.max(...r.map(Math.abs));a>0&&(r=r.map(e=>e*o/a))}return{offsets:r,scale:n}}const xM=["value","time_of_day"];function wM(e){return{placeBy:e.place_by??"value",dot:"number"==typeof e.dot_size?e.dot_size:6,sized:!0===e.size_by_value}}const $M=/^(binary_sensor|switch|input_boolean|light|fan|siren|automation)\./;function kM(e,t,o){const n=Math.min(e.range.end,o);return e.series.map(o=>{const r="time_of_day"===t.placeBy&&$M.test(o.entity.entityId);let a,i;r?a=function(e){const t=[];let o=null;for(const n of e)null!==n.v&&(1!==n.v||1===o||n.carried||t.push(n),o=n.v);return t}(o.points).map(e=>({t:e.t,v:1,w:1,real:!0})):(({readings:a,held:i}=Xk(o.points,"history"===e.source&&!e.group,n)),void 0!==i&&"time_of_day"===t.placeBy&&(a=[]));const s=nM(a,400);return{series:o,positions:s.map(o=>"time_of_day"===t.placeBy?function(e,t){const o=rn(e,t);return o.hour+o.minute/60+o.second/3600}(o.t,e.zone.timeZone):o.v),values:s.map(e=>e.v),total:void 0===i?a.length:0,events:r,...void 0===i?{}:{held:i}}})}function MM(e,t,o,n,r){if(0===e.positions.length)return q``;const a=r.dot/2,i=n.domain[1]-n.domain[0]||1,s=Math.min(...e.values),l=Math.max(...e.values),c=e.values.map(t=>{if(!r.sized||e.events)return a;const o=function(e,t,o,n){if(!(o>t))return n;const r=Math.min(1,Math.max(0,(e-t)/(o-t)));return n*Math.sqrt(.12+.88*r)}(t,s,l,a);return Math.max(.5,Math.round(o/a*6)/6)*a}),d=e.positions.map((e,t)=>({at:(e-n.domain[0])/i*o.valuePx,r:c[t]})),{offsets:u,scale:h}=bM(d,o.bandPx/2-1,1),p=new Map;return d.forEach((n,r)=>{const a=Math.round(n.r*h*2*100)/100,i=p.get(a)??[];i.push(o.at(e.positions[r],t,u[r]/o.bandPx)),p.set(a,i)}),q`<g class="swarm entity" data-index=${e.series.index} stroke=${e.series.color}>
    ${[...p].map(([e,t])=>q`<path class="dots" d=${ki(t)} style="stroke-width:${e}px"></path>`)}
  </g>`}function zM(e,t,o,n){const r=Qk(e.positions.map((e,t)=>({t:t,v:e,w:1,real:!0})));if(!r)return[];const a=r=>o?t.format(r):Bt(Wt(r,e.series.entity.decimals,n),e.series.entity.unit);return void 0!==e.held?[[Ze(n,"swarm_held"),a(e.held)]]:[[Ze(n,"dist_count"),Wt(e.total,0,n)],...e.positions.length<e.total?[[Ze(n,"swarm_shown"),Wt(e.positions.length,0,n)]]:[],[Ze(n,"dist_median"),a(r.median)],[Ze(n,"dist_middle"),`${a(r.q1)} – ${a(r.q3)}`],[Ze(n,o?"swarm_earliest_latest":"swarm_lowest_highest"),`${a(r.min)} – ${a(r.max)}`]]}const EM=[...pf,{name:"place_by",path:["place_by"],default:"value"},{name:"dot_size",path:["dot_size"],default:6},{name:"size_by_value",path:["size_by_value"],default:!1},...Lk];function SM(e){return e.map(e=>{const t=e;return t.schema?{...t,schema:t.schema.filter(e=>"value_min"!==e.name&&"value_max"!==e.name)}:e})}const AM={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},jM={layout:"chart",group:"distribution",height:260,styles:a`
    ${si}
    ${Jc}
    ${cc}
    ${Yk}
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
    </g>`,validate(e){if(Xa(e),Tk(e),void 0!==e.place_by&&!xM.includes(e.place_by))throw new Error(`"place_by" must be one of: ${xM.join(", ")}`);const t=e.dot_size;if(void 0!==t&&!("number"==typeof t&&t>=2&&t<=16))throw new Error('"dot_size" must be a number from 2 to 16');if(void 0!==e.size_by_value&&"boolean"!=typeof e.size_by_value)throw new Error('"size_by_value" must be true or false')},editor:function(e){const t=wM(e.config),o=Tf(`beeswarm|${ff(e.config)}|${t.placeBy}`,e.hass,()=>[...gf(e.hass,e.config),{name:"place_by",selector:hf(e.hass,"place_by",xM)},{type:"grid",name:"",schema:[{name:"dot_size",selector:{number:{min:2,max:16,step:1,mode:"box",unit_of_measurement:"px"}}},{name:"size_by_value",selector:{boolean:{}}}]},..."value"===t.placeBy?Fk(e.hass):SM(Fk(e.hass))]);return Rf(e,"chart",o,EM)},entityFields:()=>AM,disconnect(e){ni(e),Xl(e),Bk(e)},render(e){const t=Date.now(),o=Ja(e,t),n=ti(o,e),r={...ic(e.raw),header:"above"},a=ai(o,e);if(a)return sc(r,n,a);const i=wM(e.raw),s=kM(o,i,t),l=Ok(e.raw),c=Uk(Dk(e,s.length,{domain:[0,1]},96).valuePx,l.orientation);let d;if("time_of_day"===i.placeBy)d=Hk(c,e.hass);else{const t=s.flatMap(e=>e.positions);d=Ik(t.length?[Math.min(...t),Math.max(...t)]:void 0,e.raw,c,e.hass)}const u=Dk(e,s.length,d,96),h=q`${s.map((e,t)=>MM(e,t,u,d,i))}`,p=s.map(t=>{const o=function(e,t){if(void 0!==e.held)return Ze(t,"swarm_no_change",{value:Bt(Wt(e.held,e.series.entity.decimals,t),e.series.entity.unit)});if(0===e.total)return Ze(t,"swarm_none");const o=Wt(e.total,0,t);return Ze(t,e.events?"swarm_events":"swarm_readings",{n:o})}(t,e.hass);return{index:t.series.index,name:t.series.entity.name,detail:o,color:t.series.color,label:`${t.series.entity.name}, ${o}`}}),m=Bc(e.raw),f=m?qk(e.host):void 0,g=void 0===f?void 0:s[f],y=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_beeswarm"),names:o.series.map(e=>e.entity.name).join(", ")});return sc(r,n,Vk({ctx:e,geometry:u,categories:p,scale:d,content:h,label:y,hover:m,overlay:g&&g.positions.length>0&&void 0!==f?Zk(u,f,g.series.entity.name,zM(g,d,"time_of_day"===i.placeBy,e.hass),g.series.color):Z}))}},CM=["median","mean","none"];function NM(e,t){if(e.summary&&"none"!==t)return"mean"===t?e.summary.mean:e.summary.median}function LM(e,t,o){return Bt(Wt(t,e.series.entity.decimals,o),e.series.entity.unit)}function FM(e,t,o,n){if(0===e.shown.length)return q``;const r=function(e,t,o,n,r){const a=Math.max(0,o-n/Math.max(1,r));return e.map(e=>sy(e,t)*a/2)}(e.shown.map(e=>e.t),e.series.index,n.jitter,n.dot,o.bandPx),a=e.shown.map((e,n)=>o.at(e.v,t,r[n])),i=void 0===e.held?NM(e,n.marker):void 0,s=Math.max(n.jitter,.3)/2+.06,l=void 0===i?Z:(()=>{const[e,r]=o.at(i,t,-s),[a,l]=o.at(i,t,s);return q`<line class="strip-halo" x1=${e} y1=${r} x2=${a} y2=${l}></line>
            <line class="strip-marker ${n.marker}" x1=${e} y1=${r} x2=${a} y2=${l}></line>`})();return q`<g class="strip entity" data-index=${e.series.index} stroke=${e.series.color}>
    <path class="dots" d=${ki(a)} style="stroke-width:${n.dot}px"></path>
    ${l}
  </g>`}function TM(e,t){const o=e.summary;if(!o)return[];const n=o=>LM(e,o,t);return void 0!==e.held?[[Ze(t,"swarm_held"),n(e.held)]]:[[Ze(t,"dist_count"),Wt(e.total,0,t)],...e.shown.length<e.total?[[Ze(t,"swarm_shown"),Wt(e.shown.length,0,t)]]:[],[Ze(t,"dist_median"),n(o.median)],[Ze(t,"strip_mean"),n(o.mean)],[Ze(t,"dist_middle"),`${n(o.q1)} – ${n(o.q3)}`],[Ze(t,"dist_range"),`${n(o.min)} – ${n(o.max)}`]]}const OM=[...pf,{name:"strip_marker",path:["marker"],default:"median"},{name:"strip_jitter",path:["jitter"],default:70},{name:"dot_size",path:["dot_size"],default:5},...Lk];const PM={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},DM={layout:"chart",group:"distribution",height:240,styles:a`
    ${si}
    ${Jc}
    ${cc}
    ${Yk}
    .strip .dots {
      fill: none;
      stroke-linecap: round;
      stroke-opacity: 0.7;
    }
    .strip .strip-halo {
      stroke: var(--card-background-color, #fff);
      stroke-width: 5px;
      stroke-linecap: round;
    }
    .strip .strip-marker {
      stroke: var(--primary-text-color);
      stroke-width: 2px;
      stroke-linecap: round;
    }
  `,thumbnail:()=>q`
    <g fill="var(--primary-color, #03a9f4)" fill-opacity="0.6">
      ${[8,12,15,17,19,20,22,24,27,31,36].map((e,t)=>q`<circle cx=${e+6} cy=${12+7*t%5-2} r="2" />`)}
    </g>
    <g fill="var(--warning-color, #f59e0b)" fill-opacity="0.6">
      ${[24,29,32,35,37,39,41,44,48,53].map((e,t)=>q`<circle cx=${e+2} cy=${29+3*t%5-2} r="2" />`)}
    </g>
    <path d="M26 6V18M41 23V35" stroke="var(--primary-text-color, #212121)" stroke-width="2" stroke-linecap="round" />`,validate(e){if(Xa(e),Tk(e),void 0!==e.marker&&!CM.includes(e.marker))throw new Error(`"marker" must be one of: ${CM.join(", ")}`);const t=e.jitter;if(void 0!==t&&!("number"==typeof t&&t>=0&&t<=100))throw new Error('"jitter" must be a number from 0 to 100');const o=e.dot_size;if(void 0!==o&&!("number"==typeof o&&o>=2&&o<=16))throw new Error('"dot_size" must be a number from 2 to 16')},editor:function(e){const t=Tf(`strip_plot|${ff(e.config)}`,e.hass,()=>[...gf(e.hass,e.config),{name:"strip_marker",selector:hf(e.hass,"strip_marker",CM)},{type:"grid",name:"",schema:[{name:"strip_jitter",selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}}},{name:"dot_size",selector:{number:{min:2,max:16,step:1,mode:"box",unit_of_measurement:"px"}}}]},...Fk(e.hass)]);return Rf(e,"chart",t,OM)},entityFields:()=>PM,disconnect(e){ni(e),Xl(e),Bk(e)},render(e){const t=Date.now(),o=Ja(e,t),n=ti(o,e),r={...ic(e.raw),header:"above"},a=ai(o,e);if(a)return sc(r,n,a);const i={jitter:("number"==typeof(s=e.raw).jitter?s.jitter:70)/100,dot:"number"==typeof s.dot_size?s.dot_size:5,marker:s.marker??"median"};var s;const l=function(e,t){const o=Math.min(e.range.end,t);return e.series.map(t=>{const{readings:n,held:r}=Xk(t.points,"history"===e.source&&!e.group,o);return{series:t,shown:nM(n,2e3),summary:Qk(n),total:void 0===r?n.length:0,...void 0===r?{}:{held:r}}})}(o,t),c=Ok(e.raw),d=Uk(Dk(e,l.length,{domain:[0,1]},56).valuePx,c.orientation),u=l.flatMap(e=>e.summary?[e.summary.min,e.summary.max]:[]),h=Ik(u.length?[Math.min(...u),Math.max(...u)]:void 0,e.raw,d,e.hass),p=Dk(e,l.length,h,56),m=q`${l.map((e,t)=>FM(e,t,p,i))}`,f=l.map(t=>{const o=function(e,t,o){if(void 0!==e.held)return Ze(o,"swarm_no_change",{value:LM(e,e.held,o)});if(0===e.total)return Ze(o,"swarm_none");const n=NM(e,t);return void 0===n?Ze(o,"swarm_readings",{n:Wt(e.total,0,o)}):Ze(o,"mean"===t?"strip_mean_value":"strip_median_value",{value:LM(e,n,o)})}(t,i.marker,e.hass);return{index:t.series.index,name:t.series.entity.name,detail:o,color:t.series.color,label:`${t.series.entity.name}, ${o}`}}),g=Bc(e.raw),y=g?qk(e.host):void 0,v=void 0===y?void 0:l[y],_=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_strip_plot"),names:o.series.map(e=>e.entity.name).join(", ")});return sc(r,n,Vk({ctx:e,geometry:p,categories:f,scale:h,content:m,label:_,hover:g,overlay:v&&v.summary&&void 0!==y?Zk(p,y,v.series.entity.name,TM(v,e.hass),v.series.color):Z}))}},UM=["auto","source","target"],IM=10,HM=e=>"string"==typeof e?e.trim():"";function WM(e){return e.items.flatMap((e,t)=>{const o=e.config,n=HM(o.from),r=HM(o.to);return n&&r?[{index:t,from:n,to:r,value:e.available?e.value:null}]:[]})}const RM=new WeakMap,qM=(e,t)=>e.column>0&&e.column<t-1,BM=(e,t)=>0===e.column?"left":qM(e,t)&&e.in>0&&e.out>0?"above":"right";function ZM(e,t){return R`<div class="chart-message">${Ze(t,e)}</div>`}const VM=[{name:"link_color",path:["link_color"],default:"auto"}];const YM=[{name:"from",path:["from"],default:""},{name:"to",path:["to"],default:""},{name:"flow_color",path:["color"]}],GM=[{type:"grid",name:"",schema:[{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}}]},{name:"flow_color",selector:{text:{}}}];const XM={layout:"chart",group:"totals",height:220,styles:a`
    ${si}
    ${Jc}
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
    <rect x="54" y="20" width="4" height="16" rx="1" fill="var(--purple-color, #8b6cff)" />`,validate:function(e){if(void 0!==e.link_color&&!UM.includes(e.link_color))throw new Error(`"link_color" must be one of: ${UM.join(", ")}`);const t=[];(e.entities??[]).forEach((e,o)=>{if("object"!=typeof e||null===e)return;const n=e;for(const t of["from","to"])if(void 0!==n[t]&&"string"!=typeof n[t])throw new Error(`Entity ${o+1}: "${t}" must be a node name`);const r=HM(n.from),a=HM(n.to);if(r&&a&&r===a)throw new Error(`Entity ${o+1}: "from" and "to" must be different nodes`);r&&a&&t.push([r,a])});const o=function(e){const t=new Map;for(const[a,i]of e){if(a===i)return[a,i];t.set(a,[...t.get(a)??[],i])}const o=new Map,n=[],r=e=>{if("open"===o.get(e))return[...n.slice(n.indexOf(e)),e];if("done"!==o.get(e)){o.set(e,"open"),n.push(e);for(const o of t.get(e)??[]){const e=r(o);if(e)return e}n.pop(),o.set(e,"done")}};for(const a of t.keys()){const e=r(a);if(e)return e}}(t);if(o)throw new Error(`Flows can't go round in a loop: ${o.join(" → ")}`)},editor:function(e){const t=Tf(`sankey|${_f(e.config)}`,e.hass,()=>[...bf(e.hass,e.config),{name:"link_color",selector:hf(e.hass,"link_color",UM)}]);return Rf(e,"chart",t,[...vf,...VM])},entityFields:()=>({schema:GM,fields:YM}),disconnect(e){Xl(e),RM.delete(e)},render:function(e){const t=WM(e);if(!t.length)return ZM("sankey_no_flows",e.hass);const o=e.items[t[0].index],n=t=>Bt(Wt(t,o.decimals,e.hass),o.unit),r=Math.max(200,Gl(e)-32),{show:a}=e.config,i=function(e,t,o){const n=t<400?11:12,r=n+3,a=iw(e,{width:t,height:200,left:0,right:0,nodeWidth:IM,gap:12}),i=a.columns,s=new Map;for(const _ of a.nodes)s.set(_.column,(s.get(_.column)??0)+1);const l=Math.max(200,44*Math.max(0,...s.values())),c=.3*t,d=e=>({name:o.name?e.name:"",value:o.value?o.format(e.value):""}),u=e=>{const t=a.nodes.filter(t=>BM(t,i)===e&&!qM(t,i)).map(e=>Math.max(sw(d(e).name,n),sw(d(e).value,n)));return t.length&&Math.max(...t)>0?Math.min(c,Math.max(...t))+6+3:2},h=u("left"),p=u("right"),m=a.nodes.some(e=>"above"===BM(e,i)),f=m&&(o.name||o.value)?20:0,g=iw(e,{width:t,height:l-f,left:h,right:p,nodeWidth:IM,gap:12,above:(e,t)=>"above"===BM(e,t)&&f?20:0});for(const _ of g.nodes)_.y+=f;for(const _ of g.links)_.y0+=f,_.y1+=f;const y=i>1?(t-h-p-IM)/(i-1):t,v=[];if(o.name||o.value){for(const o of g.nodes){const e=BM(o,i),r=d(o);if("above"===e){const a=o.x+5,i=Math.min(1.6*y,2*a,2*(t-a)),s=sw(`${r.name} ${r.value}`,n)<=i||!r.name?r.value:"",l=lw(r.name,s?i-sw(` ${s}`,n):i,n);v.push({node:o,side:e,name:l,value:s,y:o.y-6});continue}const a=qM(o,i)?y-IM-12:("left"===e?h:p)-6-2,s=sw(r.value,n)<=a?r.value:"";v.push({node:o,side:e,name:lw(r.name,a,n),value:s,y:o.y+o.h/2})}const e=o.name&&o.value?2*r:r;for(let t=0;t<i;t++){const o=v.filter(e=>"above"!==e.side&&e.node.column===t);cw(o.map(e=>e.y),e,l).forEach((e,t)=>o[t].y=e)}}return{width:t,height:l,font:n,layout:g,labels:v}}(t,r,{name:a.name,value:a.value,format:n}),{layout:s}=i;if(!s.links.length)return ZM(uo(e.items)?"energy_nothing_flowed":"sankey_nothing",e.hass);const l=function(e,t,o){const n=rw(e),r=new Set(n.map(e=>e.to)),a=new Map;for(const c of n)for(const e of[c.from,c.to])a.has(e)||a.set(e,"");const i=e=>"target"===t||"auto"===t&&r.has(e.from)?e.to:e.from,s=new Set;for(const c of n){const e=o(c.index);e&&!s.has(i(c))&&(a.set(i(c),je(e)),s.add(i(c)))}[...a.keys()].forEach((e,t)=>{s.has(e)||a.set(e,je(Ya[t%Ya.length]))});const l=new Map;for(const c of n){const e=o(c.index);l.set(c.index,e?je(e):a.get(i(c)))}return{node:a,link:l}}(t,e.raw.link_color??"auto",t=>{const o=e.items[t].config.color;return"string"==typeof o&&o?o:void 0}),c=RM.get(e.host),d=t=>()=>{void 0===t?RM.delete(e.host):RM.set(e.host,t),e.requestUpdate()},u=!0===e.hass.themes?.darkMode,h=t=>Ze(e.hass,"sankey_flow",{from:t.flow.from,to:t.flow.to,value:n(t.value)}),p=Ze(e.hass,"sankey_aria",{flows:s.links.map(h).join(", ")}),m=s.links.find(e=>e.flow.index===c),f=s.links.map(t=>{const o=e.items[t.flow.index],n=Ee(o.config);return q`<g
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
      <path class="link" d=${function(e,t){const o=e.source.x+t,n=e.target.x,r=(o+n)/2,a=Math.max(1,e.width)/2,i=e=>Math.round(10*e)/10,[s,l,c,d]=[e.y0-a,e.y1-a,e.y1+a,e.y0+a].map(i);return`M${i(o)},${s}C${i(r)},${s} ${i(r)},${l} ${i(n)},${l}L${i(n)},${c}C${i(r)},${c} ${i(r)},${d} ${i(o)},${d}Z`}(t,IM)} fill=${l.link.get(t.flow.index)}></path>
    </g>`}),g=s.nodes.map(e=>q`<rect class="node" x=${e.x} y=${e.y} width=${IM} height=${Math.max(2,e.h).toFixed(1)} rx="2"
        fill=${l.node.get(e.name)}></rect>`);return R`<div class="sankey-wrap">
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
    </text>`;const n="left"===e.side?o.x-6:o.x+IM+6,r="left"===e.side?"end":"start",a=e.name&&e.value,i=t+3;return q`<text class="label" x=${n} text-anchor=${r} font-size=${t}>
    ${e.name?q`<tspan class="name" x=${n} y=${a?e.y-2:e.y+t/3}>${e.name}</tspan>`:Z}
    ${e.value?q`<tspan class="value" x=${n} y=${a?e.y-2+i:e.y+t/3}>${e.value}</tspan>`:Z}
  </text>`}(e,i.font))}</g>
    </svg>
    ${function(e,t,o,n){if(!e)return Z;const r=(e.source.x+IM+e.target.x)/2,a=(e.y0+e.y1)/2-e.width/2,i=Math.min(Math.max(r,70),t.width-70);return R`<div
    class="tooltip sankey-tip"
    aria-hidden="true"
    style="left:${i/t.width*100}%;top:${Math.max(a,0)/t.height*100}%"
  >
    <div class="tooltip-row">
      <span class="swatch" style="background:${o}"></span>
      <span class="tooltip-name">${e.flow.from} → ${e.flow.to}</span>
      <span class="tooltip-value">${n}</span>
    </div>
  </div>`}(m,i,m?l.link.get(m.flow.index):"",m?n(m.value):"")}
  </div>`}};function KM(e,t,o="none"){const n=function(e){return e.filter(e=>e.from&&e.to&&e.from!==e.to&&aw(e.value)>0)}(e),r=new Map,a=e=>{let t=r.get(e);return t||(t={name:e,order:r.size,in:0,out:0,total:0,start:0,end:0},r.set(e,t)),t};for(const m of n){const e=aw(m.value);a(m.from).out+=e,a(m.to).in+=e}const i=[...r.values()];for(const m of i)m.total=m.in+m.out;if("none"!==o){const e="ascending"===o?1:-1;i.sort((t,o)=>e*(t.total-o.total)||t.order-o.order)}const s=n.reduce((e,t)=>e+aw(t.value),0);if(!i.length)return{nodes:i,ribbons:[],total:s};const l=Math.min(Math.max(0,t),180/i.length),c=360-l*i.length,d=2*s;let u=l/2;for(const m of i)m.start=u,m.end=u+m.total/d*c,u=m.end+l;const h=new Map(i.map((e,t)=>[e,t])),p=n.map(e=>({flow:e,value:aw(e.value),source:r.get(e.from),target:r.get(e.to),s:{start:0,end:0},t:{start:0,end:0}}));for(const m of i){const e=h.get(m),t=p.flatMap((e,t)=>{const o=[];return e.source===m&&o.push({r:e,i:t,send:!0,other:e.target}),e.target===m&&o.push({r:e,i:t,send:!1,other:e.source}),o}),o=t=>(h.get(t)-e+i.length)%i.length;t.sort((e,t)=>o(t.other)-o(e.other)||Number(t.send)-Number(e.send)||e.i-t.i);const n=m.total>0?(m.end-m.start)/m.total:0;let r=m.start;for(const a of t){const e={start:r,end:r+a.r.value*n};a.send?a.r.s=e:a.r.t=e,r=e.end}}return{nodes:i,ribbons:p,total:s}}const JM=e=>(Math.abs(e)<.005?0:e).toFixed(2);function QM(e,t,o,n,r){const[a,i]=ft(e,t,o,r);return`A${JM(o)} ${JM(o)} 0 ${r-n>180?1:0} 1 ${JM(a)} ${JM(i)}`}const ez=12,tz=new WeakMap;function oz(e){return q`<text class="label" x=${e.x.toFixed(1)} text-anchor=${e.anchor} font-size=${ez}>
    ${e.name?q`<tspan class="name" x=${e.x.toFixed(1)} y=${e.y.toFixed(1)}>${e.name}</tspan>`:Z}
    ${e.value?q`<tspan class="value" x=${e.x.toFixed(1)} y=${(e.y+(e.name?15:0)).toFixed(1)}>${e.value}</tspan>`:Z}
  </text>`}function nz(e,t){return R`<div class="chart-message">${Ze(t,e)}</div>`}const rz=[{name:"chord_pad",path:["pad"],default:3},{name:"chord_ribbon_opacity",path:["ribbon_opacity"]}];const az=[{name:"from",path:["from"],default:""},{name:"to",path:["to"],default:""},{name:"flow_color",path:["color"]}],iz=[{type:"grid",name:"",schema:[{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}}]},{name:"flow_color",selector:{text:{}}}];const sz={layout:"chart",group:"totals",height:300,styles:a`
    ${si}
    ${Jc}
    .chord-wrap {
      position: relative;
    }
    .chord {
      display: block;
      width: 100%;
      height: auto;
      overflow: visible;
      --cd-ribbon-opacity: 0.35;
    }
    .chord.dark {
      --cd-ribbon-opacity: 0.45;
    }
    .chord .ribbon path {
      fill-opacity: var(--cd-ribbon-opacity);
      transition:
        fill-opacity 0.15s ease,
        opacity var(--cd-duration) var(--cd-easing);
    }
    .chord.hovering .ribbon path {
      fill-opacity: calc(var(--cd-ribbon-opacity) * 0.4);
    }
    .chord .ribbon:hover path,
    .chord .ribbon:focus-visible path,
    .chord .ribbon.active path {
      fill-opacity: 0.8;
    }
    .chord .ribbon {
      cursor: pointer;
      outline: none;
    }
    .chord .ribbon:focus-visible {
      box-shadow: none;
    }
    .chord .node {
      transition: opacity var(--cd-duration) var(--cd-easing);
    }
    :host(:not([ready])) .chord .ribbon path,
    :host(:not([ready])) .chord .node {
      opacity: 0;
    }
    :host([static]) .chord .ribbon path,
    :host([static]) .chord .node {
      transition: none;
    }
    .chord .label {
      pointer-events: none;
    }
    .chord .name {
      fill: var(--primary-text-color);
    }
    .chord .value {
      fill: var(--secondary-text-color);
    }
    .chord-tip {
      pointer-events: none;
      white-space: nowrap;
      max-width: none;
      transform: translate(-50%, calc(-100% - 6px));
    }
  `,thumbnail:()=>q`
    <g fill-opacity="0.45">
      <path d="M36.4 7.8 A13 13 0 0 1 43.3 13.5 Q32 20 38.5 31.3 A13 13 0 0 1 32 33 Q32 20 36.4 7.8Z"
        fill="var(--primary-color, #03a9f4)" />
      <path d="M44.8 17.7 A13 13 0 0 1 44.6 23.4 Q32 20 25.5 31.3 A13 13 0 0 1 19.8 24.4 Q32 20 44.8 17.7Z"
        fill="var(--warning-color, #f59e0b)" />
      <path d="M19.2 17.7 A13 13 0 0 1 23.6 10 Q32 20 35.4 7.4 A13 13 0 0 1 38.5 8.7 Q32 20 19.2 17.7Z"
        fill="var(--purple-color, #8b6cff)" />
    </g>
    <g fill="none" stroke-width="3">
      <path d="M33.1 4 A16 16 0 0 1 47 25.5" stroke="var(--primary-color, #03a9f4)" />
      <path d="M46.1 27.5 A16 16 0 0 1 29.2 35.8" stroke="var(--warning-color, #f59e0b)" />
      <path d="M27.1 35.2 A16 16 0 0 1 16.2 22.8" stroke="var(--success-color, #43a047)" />
      <path d="M16 20.6 A16 16 0 0 1 29.8 4.2" stroke="var(--purple-color, #8b6cff)" />
    </g>`,validate:function(e){if(void 0!==e.pad&&("number"!=typeof e.pad||!(e.pad>=0&&e.pad<=20)))throw new Error('"pad" must be a number of degrees from 0 to 20');if(void 0!==e.ribbon_opacity&&("number"!=typeof e.ribbon_opacity||!(e.ribbon_opacity>0&&e.ribbon_opacity<=1)))throw new Error('"ribbon_opacity" must be a number above 0, up to 1');(e.entities??[]).forEach((e,t)=>{if("object"!=typeof e||null===e)return;const o=e;for(const a of["from","to"])if(void 0!==o[a]&&"string"!=typeof o[a])throw new Error(`Entity ${t+1}: "${a}" must be a node name`);const n="string"==typeof o.from?o.from.trim():"",r="string"==typeof o.to?o.to.trim():"";if(n&&r&&n===r)throw new Error(`Entity ${t+1}: "from" and "to" must be different nodes`)})},editor:function(e){return Rf(e,"chart",Tf("chord",e.hass,()=>[{type:"grid",name:"",schema:[{name:"chord_pad",selector:{number:{min:0,max:20,step:1,mode:"box",unit_of_measurement:"°"}}},{name:"chord_ribbon_opacity",selector:{number:{min:.05,max:1,step:.05,mode:"slider"}}}]}]),rz)},entityFields:()=>({schema:iz,fields:az}),disconnect(e){Xl(e),tz.delete(e)},render:function(e){const t=WM(e);if(!t.length)return nz("sankey_no_flows",e.hass);const o=KM(t,"number"==typeof e.raw.pad?e.raw.pad:3,e.config.sort);if(!o.ribbons.length)return nz("sankey_nothing",e.hass);const n=e.items[t[0].index],r=t=>Bt(Wt(t,n.decimals,e.hass),n.unit),a=Math.max(200,Gl(e)-32),{show:i}=e.config,s=function(e,t,o){const n=e=>({name:o.name?e.name:"",value:o.value?o.format(e.total):""}),r=t/4,a=Math.max(0,...e.nodes.map(e=>Math.max(sw(n(e).name,ez),sw(n(e).value,ez)))),i=o.name||o.value?Math.min(r,a)+8:4,s=Math.max(50,Math.min(120,t/2-i)),l=(o.name?1:0)+(o.value?1:0),c=l?8+15*l:4,d=Math.round(2*(s+c)),u=t/2,h=d/2,p=[];if(l)for(const m of e.nodes){const e=(m.start+m.end)/2,[o,r]=ft(u,h,s+8,e),a=Math.sin(e*Math.PI/180),i=Math.cos(e*Math.PI/180),c=a>.3?"start":a<-.3?"end":"middle",d="middle"===c?Math.min(t,2*Math.min(o,t-o)):"start"===c?t-o:o,f=n(m),g=15*l,y=i>.3?r-g:i<-.3?r:r-g/2;p.push({node:m,x:o,y:y+ez,anchor:c,name:lw(f.name,d-2,ez),value:sw(f.value,ez)<=d?f.value:""})}return{width:t,height:d,cx:u,cy:h,r:s,labels:p}}(o,a,{name:i.name,value:i.value,format:r}),l=function(e,t){const o=new Map;for(const r of[...e.nodes].sort((e,t)=>e.order-t.order))o.set(r.name,je(Ya[r.order%Ya.length]));const n=new Map;for(const r of e.ribbons){const e=t(r.flow.index);n.set(r.flow.index,e?je(e):o.get(r.source.name))}return{node:o,ribbon:n}}(o,t=>{const o=e.items[t].config.color;return"string"==typeof o&&o?o:void 0}),c=tz.get(e.host)??{},d=t=>()=>{t?tz.set(e.host,t):tz.delete(e.host),e.requestUpdate()},u=o.ribbons.find(e=>e.flow.index===c.ribbon),h=!0===e.hass.themes?.darkMode,p=t=>Ze(e.hass,"sankey_flow",{from:t.flow.from,to:t.flow.to,value:r(t.value)}),m=Ze(e.hass,"chord_aria",{flows:o.ribbons.map(p).join(", ")}),f="number"==typeof e.raw.ribbon_opacity?e.raw.ribbon_opacity:void 0,g=s.r-10-2,y=o.ribbons.map(t=>{const o=e.items[t.flow.index],n=Ee(o.config);return q`<g
      class="entity ribbon ${n?"interactive":""} ${(e=>e===u||void 0!==c.node&&(e.source.name===c.node||e.target.name===c.node))(t)?"active":""}"
      data-index=${t.flow.index}
      tabindex=${n?0:Z}
      aria-label=${`${p(t)} (${o.name})`}
      @pointerenter=${d({ribbon:t.flow.index})}
      @pointerleave=${d(void 0)}
      @focus=${d({ribbon:t.flow.index})}
      @blur=${d(void 0)}
    >
      <title>${p(t)}</title>
      <path d=${function(e,t,o,n,r){const[a,i]=ft(e,t,o,n.start),[s,l]=ft(e,t,o,r.start);return`M${JM(a)} ${JM(i)} ${QM(e,t,o,n.start,n.end)} Q${JM(e)} ${JM(t)} ${JM(s)} ${JM(l)} ${QM(e,t,o,r.start,r.end)} Q${JM(e)} ${JM(t)} ${JM(a)} ${JM(i)}Z`}(s.cx,s.cy,g,t.s,t.t)} fill=${l.ribbon.get(t.flow.index)}></path>
    </g>`}),v=o.nodes.map(e=>q`<path class="node" d=${function(e,t,o,n,r,a){const[i,s]=ft(e,t,n,r),[l,c]=ft(e,t,o,a),d=a-r>180?1:0,[u,h]=ft(e,t,n,a),[p,m]=ft(e,t,o,r);return`M${JM(i)} ${JM(s)} A${JM(n)} ${JM(n)} 0 ${d} 1 ${JM(u)} ${JM(h)} L${JM(l)} ${JM(c)} A${JM(o)} ${JM(o)} 0 ${d} 0 ${JM(p)} ${JM(m)}Z`}(s.cx,s.cy,s.r-10,s.r,e.start,Math.max(e.end,e.start+.5))}
        fill=${l.node.get(e.name)}
        @pointerenter=${d({node:e.name})}
        @pointerleave=${d(void 0)}
      ><title>${e.name} ${r(e.total)}</title></path>`),_=void 0!==u||void 0!==c.node;return R`<div class="chord-wrap">
    <svg
      class="chord ${h?"dark":""} ${_?"hovering":""}"
      viewBox="0 0 ${s.width} ${s.height}"
      role="img"
      aria-label=${m}
      style=${void 0===f?Z:`--cd-ribbon-opacity:${f}`}
    >
      <g class="ribbons">${y}</g>
      <g class="nodes">${v}</g>
      <g class="labels" aria-hidden="true">${s.labels.map(oz)}</g>
    </svg>
    ${function(e,t,o,n){if(!e)return Z;const r=t.r-10-2,[a,i]=ft(t.cx,t.cy,r,(e.s.start+e.s.end)/2),[s,l]=ft(t.cx,t.cy,r,(e.t.start+e.t.end)/2),c=(a+s)/4+t.cx/2,d=(i+l)/4+t.cy/2,u=Math.min(Math.max(c,70),t.width-70);return R`<div
    class="tooltip chord-tip"
    aria-hidden="true"
    style="left:${u/t.width*100}%;top:${Math.max(d,0)/t.height*100}%"
  >
    <div class="tooltip-row">
      <span class="swatch" style="background:${o}"></span>
      <span class="tooltip-name">${e.flow.from} → ${e.flow.to}</span>
      <span class="tooltip-value">${n}</span>
    </div>
  </div>`}(u,s,u?l.ribbon.get(u.flow.index):"",u?r(u.value):"")}
  </div>`}},lz=new Set(["source","group_by","aggregate"]),cz=[...pf.filter(e=>!lz.has(e.name)),{name:"bar_labels",path:["bar_labels"],default:"state"},{name:"x_axis",path:["x_axis"],default:!0},{name:"grid_vertical",path:["gridlines","vertical"],default:!0},{name:"tooltip",path:["tooltip"],default:!0},{name:"timeline_legend",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];const dz={text:{}};function uz(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?Object.entries(t):[]}function hz(e,t){const o=new Set(uz(e).map(([e])=>e)),n=(e.entities??[]).map(e=>"string"==typeof e?e:e.entity),r=n.map(e=>t?.states[e]?.state).filter(e=>!!e);return[...r,"on","off","home","not_home","heat","idle"].find(e=>!o.has(e)&&"unavailable"!==e&&"unknown"!==e)??`state_${o.size+1}`}function pz(e){const t=uz(e.config),o=t=>Ze(e.hass,t),n=t=>e.commit(function(e,t){const o={...e},n=t.filter(([e])=>""!==e.trim());return n.length?o.state_colors=Object.fromEntries(n.map(([e,t])=>[e.trim(),t])):delete o.state_colors,o}(e.config,t)),r=(e,o)=>r=>{r.stopPropagation();const a=String(r.detail?.value??""),i=t.map(e=>[...e]);1===o&&""===a.trim()||(i[e][o]=a,n(i))};return R`<div class="state-colors" data-section="state-colors">
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
        border-radius: 8px;
        padding: 6px 12px;
        cursor: pointer;
      }
    </style>
    <div class="sc-title">${o("editor_state_colors")}</div>
    <div class="sc-help">${o("editor_state_colors_help")}</div>
    ${t.map(([a,i],s)=>R`<div class="sc-row">
          <span class="sc-swatch" style="background:${je(i)}"></span>
          <ha-selector
            data-role="state"
            .hass=${e.hass}
            .label=${o("editor_state_colors_state")}
            .selector=${dz}
            .value=${a}
            @value-changed=${r(s,0)}
          ></ha-selector>
          <ha-selector
            data-role="color"
            .hass=${e.hass}
            .label=${o("editor_state_colors_color")}
            .selector=${dz}
            .value=${i}
            @value-changed=${r(s,1)}
          ></ha-selector>
          <ha-icon-button
            class="sc-remove"
            .path=${zl}
            .label=${o("editor_state_colors_remove")}
            @click=${()=>n(t.filter((e,t)=>t!==s))}
          ></ha-icon-button>
        </div>`)}
    <button
      type="button"
      class="sc-add"
      @click=${()=>n([...t,[hz(e.config,e.hass),"primary"]])}
    >
      ${o("editor_state_colors_add")}
    </button>
  </div>`}const mz=[{name:"timeline_group",path:["group"]}];const fz=["state","duration","both","none"],gz={normal:30,compact:22},yz={normal:24,compact:18};function vz(e,t){if(void 0!==e){if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`${t} must map states to colours, like "on: amber"`);for(const[o,n]of Object.entries(e))if("string"!=typeof n||""===n.trim())throw new Error(`${t}: the colour for "${o}" must be text`)}}function _z(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?t:void 0}function bz(e,t,o){const n=t.entity.stateObj??{entity_id:t.entity.entityId,state:o,attributes:{}},r=t.entity.config.attribute;try{return r?e.formatEntityAttributeValue?.(n,r,o)??o:e.formatEntityState?.({...n,state:o},o)??o}catch{return o}}function xz(e,t,o){return ml(t,e.domain,_z(o))}const wz=e=>Math.round(1e4*e)/100+"%";function $z(e,t,o,n){const r=o.raw.bar_labels??"state";return e.spans.map(a=>{if(cl(a.state))return Z;const{left:i,width:s}=function(e,t){const o=t.end-t.start;if(!(o>0))return{left:0,width:0};const n=Math.max(t.start,e.start),r=Math.min(t.end,e.end);return{left:(n-t.start)/o,width:Math.max(0,r-n)/o}}(a,t.range);if(s<=0)return Z;const l=a.state,c=xz(e,l,o.raw),d=function(e,t,o){const n=fl(o.end-o.start);return"state"===e?t:"duration"===e?n:"both"===e?`${t} · ${n}`:""}(r,bz(o.hass,e.series,l),a),u=""!==d&&function(e){return 6.2*e.length+10}(d)<=s*n;return R`<div
      class="tl-bar ${c.quiet?"quiet":""} text-${c.text}"
      style="left:${wz(i)};width:${wz(s)};--tl-color:${c.color}"
    >
      ${u?R`<span class="tl-label">${d}</span>`:Z}
    </div>`})}const kz={layout:"chart",group:"history",height:200,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
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
    <rect x="44" y="27" width="16" height="7" rx="3" fill="var(--success-color, #1fae7a)" />`,validate:function(e){if(xn(e.period),void 0!==e.source&&"history"!==e.source)throw new Error('"source" must be history: a state timeline reads states, which statistics don\'t keep');if(void 0!==e.group_by)throw new Error('"group_by" does not apply to a state timeline');if(void 0!==e.bar_labels&&!fz.includes(e.bar_labels))throw new Error(`"bar_labels" must be one of: ${fz.join(", ")}`);if(void 0!==e.x_axis&&"boolean"!=typeof e.x_axis)throw new Error('"x_axis" must be true or false');const t=e.gridlines;if(void 0!==t&&("object"!=typeof t||null===t||Array.isArray(t)))throw new Error('"gridlines" must have "vertical" (true or false)');if(void 0!==t?.vertical&&"boolean"!=typeof t.vertical)throw new Error('"gridlines.vertical" must be true or false');vz(e.state_colors,'"state_colors"');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.group&&"string"!=typeof e.group)throw new Error(`"group" of ${o.entity} must be text`)}Zc(e),ac(e)},editor:function(e){const t=Tf(`timeline|${ff(e.config)}`,e.hass,()=>{return[...(t=e.hass,o=e.config,gf(t,o).filter(e=>!lz.has(e.name??"")&&!(e.schema??[]).some(e=>lz.has(e.name??"")))),{name:"bar_labels",selector:hf(e.hass,"bar_labels",["state","duration","both","none"])},{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]},{name:"timeline_legend",selector:hf(e.hass,"timeline_legend",["above","hidden"])}];var t,o});return R`${Rf(e,"chart",t,cz)}${pz(e)}`},entityFields:function(e){return{schema:Tf("timeline_entity",e,()=>[{name:"timeline_group",selector:{text:{}}}]),fields:mz}},disconnect(e){ni(e),Xl(e),qc(e)},render(e){const t=Date.now(),o=Ja(e,t,{text:!0}),n=ic(e.raw),r=n.compact?"compact":"normal",a=ti(o,e),i=Math.min(o.range.end,t),s=o.series.map(e=>({series:e,spans:dl(e.points,i),domain:e.entity.entityId.split(".")[0],measurement:!1}));for(const E of s)E.measurement=gl(E.spans);const l="hidden"!==n.header,c=(e,t)=>R`<div class="frame ${n.compact?"compact":""}">${e}${t}</div>`,d="ready"!==o.status?ai(o,e):s.every(e=>e.spans.every(e=>cl(e.state)))?R`<div class="chart-message">${Ze(e.hass,"timeline_no_states")}</div>`:void 0;if(d)return c(a,d);const u=e.config.show.name,h=Gl(e),p=Math.max(0,...s.map(e=>e.series.entity.name.length)),m=u?Math.min(.35*h,7*p+10):0,f=Math.max(40,h-32-m),g=function(e,t,o){const n=Math.max(2,Math.min(8,Math.round(o/70))),r=Bs(Gs(t.hass)),{unit:a,ticks:i}=Ys(e.range,n,r);return{unit:a,ticks:i,x:ks([e.range.start,e.range.end],[0,1]),offset:r}}(o,e,f),y=!1!==e.raw.x_axis,v=e.raw.gridlines?.vertical??!0,_=Bc(e.raw),b=new Map(s.map(e=>[e.series.index,e])),x=function(e,t){const o=[],n=new Set;for(const r of e){const a=t(r);if(void 0!==a){if(!n.has(a)){n.add(a),o.push({heading:a});for(const n of e)t(n)===a&&o.push({item:n})}}else o.push({item:r})}return o}(o.series.map(e=>b.get(e.index)),e=>(e=>{const t=e.entity.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0})(e.series)),w=o.range.end-o.range.start,$=o.live&&o.range.end>t&&t>o.range.start,k=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_timeline"),names:s.map(e=>e.series.entity.name).join(", ")}),M=_?Vc(e,o.range,[Array.from({length:241},(e,t)=>({t:o.range.start+w*t/240,v:null})),...s.map(e=>e.spans.map(e=>({t:e.start,v:null})))]):void 0,z=`--tl-row:${gz[r]}px;--tl-heading:${yz[r]}px`;return c(R`${a}${l?function(e,t){const o=new Map;for(const r of e)if(!r.measurement)for(const e of r.spans){if(cl(e.state))continue;const n=bz(t.hass,r.series,e.state);o.has(n)||o.set(n,{label:n,color:xz(r,e.state,t.raw)})}if(0===o.size)return Z;const n=[...o.values()];return R`<div class="tl-legend">
    ${[...n.filter(e=>!e.color.quiet),...n.filter(e=>e.color.quiet)].map(({label:e,color:t})=>R`<span class="tl-key"
          ><span class="swatch ${t.quiet?"quiet":""}" style="background:${t.color}"></span>${e}</span
        >`)}
  </div>`}(s,e):Z}`,R`<div class="tl-wrap ${u?"":"no-names"}" style=${z}>
        ${u?R`<div class="tl-names">
                ${x.map(e=>"heading"in e?R`<div class="tl-heading">${e.heading}</div>`:R`<div
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
          ${v?g.ticks.map(e=>R`<div class="tl-grid" style="left:${wz(g.x(e))}"></div>`):Z}
          ${x.map(t=>"heading"in t?R`<div class="tl-gap"></div>`:R`<div class="entity tl-row" data-index=${t.item.series.index}>
                  <div class="tl-track"></div>
                  ${t.item.measurement?R`<div class="tl-hint">${Ze(e.hass,"timeline_measurement")}</div>`:R`<div class="tl-bars">${$z(t.item,o,e,f)}</div>`}
                </div>`)}
          ${$?R`<div class="tl-now" style="left:${wz(g.x(t))}" title=${Ze(e.hass,"timeline_now")}></div>`:Z}
          ${_?function(e,t,o,n){const r=Wc(o.host);if(void 0===r)return Z;const a=(r-t.range.start)/(t.range.end-t.range.start);if(!(a>=0&&a<=1))return Z;const i=Oc(a,n);return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${wz(a)}"></div>
    <div class="tooltip ${i}" style=${i.startsWith("pin")?"":`left:${wz(a)}`}>
      <div class="tooltip-time">${el(r,o.hass)}</div>
      ${e.map(e=>{const t=function(e,t){return e.find(o=>t>=o.start&&(t<o.end||t===o.end&&o===e[e.length-1]))}(e.spans,r),n=t?.state,a=cl(n),i=a?void 0:xz(e,n,o.raw),s=void 0===n||""===n?"—":bz(o.hass,e.series,n);return R`<div class="tooltip-row">
          <span class="swatch" style="background:${i?.color??"transparent"}"></span>
          <span class="tooltip-name">${e.series.entity.name}</span>
          <span class="tooltip-value"
            >${s}${t&&!a?R` <span class="tl-for"
                    >${Ze(o.hass,"timeline_for",{duration:fl(t.end-t.start)})}</span
                  >`:Z}</span
          >
        </div>`})}
    </div>
  </div>`}(s,o,e,f):Z}
        </div>
        ${y?R`<div class="x-axis">
                ${g.ticks.map(t=>{const o=g.x(t);return R`<span class="axis-label ${o<.05?"start":o>.95?"end":""}" style="left:${wz(o)}"
                    >${tl(t,g.unit,w,e.hass,g.offset)}</span
                  >`})}
              </div>`:Z}
      </div>`)}},Mz=["normal","percent"],zz=["auto","hour","day","week","month"];function Ez(e,t){const o=[];let n=0;for(let r=0;r+1<t.length;r++){const a=t[r],i=t[r+1],s={start:a,end:i,time:new Map,recorded:0};for(o.push(s);n<e.length&&e[n].end<=a;)n++;for(let t=n;t<e.length&&e[t].start<i;t++){const o=e[t];if(cl(o.state))continue;const n=Math.min(i,o.end)-Math.max(a,o.start);if(n<=0)continue;const r=o.state;s.time.set(r,(s.time.get(r)??0)+n),s.recorded+=n}}return o}function Sz(e){return"hour"===e?6e4:36e5}function Az(e,t,o,n){return"percent"===o?t.recorded>0?e/t.recorded*100:0:e/Sz(n)}const jz=[55,32,18];const Cz={hour:66,day:52,week:52,month:60},Nz={hour:"hour",day:"day",week:"day",month:"month"},Lz={hour:15,day:6},Fz={normal:180,compact:110};const Tz=(e,t)=>Math.round(e/t*1e4)/100+"%";function Oz(e,t,o,n){return"percent"===t?`${Wt(e,0,n.hass)} %`:"hour"===o?`${Wt(e,0,n.hass)} min`:`${Wt(e,1,n.hass)} h`}const Pz=new Set(["source","energy_flows","group_by","aggregate"]),Dz=[...pf.filter(e=>!Pz.has(e.name)).map(e=>"period_last"===e.name?{...e,default:hc.last}:"period_unit"===e.name?{...e,default:hc.unit}:e),{name:"group_by",path:["group_by"],default:"auto"},{name:"state_duration_states",path:["states"]},{name:"stack",path:["stack"],default:"normal"},{name:"column_labels",path:["labels"],default:!1},...Mf,...$f];const Uz={layout:"chart",group:"history",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
    ${pg}
    .sd-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 14px;
      padding: 4px 0 8px;
      font-size: 0.875em;
      color: var(--secondary-text-color);
    }
    .sd-key {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    /* A hairline of card colour between slices, so two greys never run together. */
    .sd-slice {
      box-shadow: inset 0 1px 0 var(--card-background-color, #fff);
    }
    .sd-hit {
      position: absolute;
      top: 0;
      bottom: 0;
      pointer-events: auto;
      cursor: pointer;
      border-radius: 4px;
    }
    .sd-hit:focus-visible {
      outline: 2px solid var(--primary-color);
    }
    .sd-label {
      position: absolute;
      transform: translate(-50%, -50%);
      font-size: 10px;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
      pointer-events: none;
    }
    .sd-label.text-dark {
      color: #1c1c1c;
    }
    .sd-label.text-light {
      color: #fff;
    }
    .sd-label.text-theme {
      color: var(--primary-text-color);
    }
    .frame.compact .sd-legend {
      padding: 0 0 4px;
      font-size: 0.8em;
    }
  `,thumbnail:()=>q`
    <rect x="6" y="22" width="9" height="14" fill="var(--warning-color, #f59e0b)" />
    <rect x="6" y="12" width="9" height="10" fill="var(--primary-color, #03a9f4)" />
    <rect x="6" y="6" width="9" height="6" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.35" />
    <rect x="20" y="26" width="9" height="10" fill="var(--warning-color, #f59e0b)" />
    <rect x="20" y="13" width="9" height="13" fill="var(--primary-color, #03a9f4)" />
    <rect x="20" y="6" width="9" height="7" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.35" />
    <rect x="34" y="18" width="9" height="18" fill="var(--warning-color, #f59e0b)" />
    <rect x="34" y="10" width="9" height="8" fill="var(--primary-color, #03a9f4)" />
    <rect x="34" y="6" width="9" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.35" />
    <rect x="48" y="28" width="9" height="8" fill="var(--warning-color, #f59e0b)" />
    <rect x="48" y="20" width="9" height="8" rx="2" fill="var(--primary-color, #03a9f4)" />
    <path d="M3 36.5 H61" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(e){if(xn(e.period),void 0!==e.source&&"history"!==e.source)throw new Error('"source" must be history: time in each state is worked out from states, which statistics don\'t keep');if(void 0!==e.group_by&&!(e=>zz.includes(e))(e.group_by))throw new Error(`"group_by" must be one of: ${zz.join(", ")}`);if(void 0!==e.stack&&!Mz.includes(e.stack))throw new Error(`"stack" must be one of: ${Mz.join(", ")}`);const t=e.states;if(void 0!==t&&(!Array.isArray(t)||t.some(e=>"string"!=typeof e||""===e.trim())))throw new Error('"states" must be a list of states, like [heating, idle, off]');if(void 0!==e.labels&&"boolean"!=typeof e.labels)throw new Error('"labels" must be true or false');vz(e.state_colors,'"state_colors"'),Fs(e),Zc(e),ac(e)},editor:function(e){const t={...e.config,group_by:void 0},o=Tf(`state_duration|${ff(t)}`,e.hass,()=>[...gf(e.hass,t).filter(e=>!Pz.has(e.name??"")&&!(e.schema??[]).some(e=>Pz.has(e.name??""))),{type:"grid",name:"",schema:[{name:"group_by",selector:hf(e.hass,"group_by",zz)},{name:"stack",selector:hf(e.hass,"stack",Mz)}]},{name:"state_duration_states",selector:{text:{multiple:!0}}},{name:"column_labels",selector:{boolean:{}}},...zf(e.hass),...kf(e.hass,!1)]);return R`${Rf({...e,commit:t=>e.commit(function(e){const t=e.states;if(!Array.isArray(t))return e;const o=t.map(e=>String(e??"").trim()).filter(e=>""!==e),n={...e};o.length?n.states=o:delete n.states;return n}(ug(t)))},"chart",o,Dz)}
  ${pz(e)}`},disconnect(e){ni(e),Xl(e),qc(e)},render:function(e){const t=function(e){const t=e.group_by;return void 0!==t&&"auto"!==t?t:mc(xn(e.period??hc))}(e.raw),o={...e.raw,period:e.raw.period??{...hc},group_by:t};delete o.aggregate;const n={...e,raw:o},r=Date.now(),a=Ja(n,r,{text:!0}),i=ic(o),s=ti(a,n),l="over"===i.header?{...i,header:"above"}:i;if("ready"!==a.status)return sc(l,s,ai(a,n));const c=o.stack??"normal",d=Math.min(a.range.end,r),u=un(t,a.range.start,a.range.end,a.zone),h=[];let p=!1;for(const R of a.series){const e=dl(R.readings??[],d);gl(e)?p=!0:h.push({series:R,domain:R.entity.entityId.split(".")[0],groups:Ez(e,u)})}const m=_z(o),f=(e,t=h[0])=>ml(e,t.domain,m),g=function(e){const t=e.states;return Array.isArray(t)&&t.length?t.map(e=>String(e).trim()):void 0}(o),y=h.length?function(e,t,o){if(t&&t.length)return[...new Set(t)];const n=new Map;for(const i of e)for(const e of i)for(const[t,o]of e.time)n.set(t,(n.get(t)??0)+o);const r=(e,t)=>(n.get(t)??0)-(n.get(e)??0)||(e<t?-1:e>t?1:0),a=[...n.keys()];return[...a.filter(e=>!o(e)).sort(r),...a.filter(e=>o(e)).sort(r)]}(h.map(e=>e.groups),g,e=>f(e).quiet):[],v=function(e,t){const o=new Map;for(const n of e)t(n)&&o.set(n,jz[Math.min(o.size,jz.length-1)]);return o}(y,e=>f(e).quiet),_=(e,t)=>v.has(t)?`color-mix(in srgb, ${e.color} ${v.get(t)}%, transparent)`:e.color,b=h.some(e=>e.groups.some(e=>y.some(t=>(e.time.get(t)??0)>0)));if(!b){const e=p&&0===h.length?"timeline_measurement":"timeline_no_states";return sc(l,s,R`<div class="chart-message">${Ze(n.hass,e)}</div>`)}const x=R`${s}${"hidden"===i.header?Z:function(e,t,o,n){return e.length?R`<div class="sd-legend">
    ${e.map(e=>R`<span class="sd-key"
        ><span class="swatch" style="background:${n(e)}"></span>${bz(o.hass,t[0].series,e)}</span
      >`)}
  </div>`:Z}(y,h,n,e=>_(f(e),e))}`,w=u.slice(0,-1),$=u.slice(1),k={start:u[0],end:u[u.length-1]},M=function(e,t,o){if("percent"===t)return 100;const n=Math.max(0,...e.map(e=>e.end-e.start));return n/Sz(o)}(h[0].groups,c,t);let z=Jl({...n,raw:{y_min:0,y_max:M,...o}},k,[0,M]);const E="normal"===c?Lz[t]:void 0;if(E&&void 0===o.y_min&&void 0===o.y_max){const e=Array.from({length:Math.floor(M/E)+1},(e,t)=>t*E);z={...z,value:{...z.value,ticks:e,decimals:0}}}const{scales:S}=z,A=w.map((e,t)=>(e+$[t])/2),j=new Map(A.map((e,t)=>[e,t])),C=bc(A.length,Kl(n)/Cz[t]),N="day"===t&&A.length<=8?6048e5:k.end-k.start;z={...z,unit:Nz[t],times:A.filter((e,t)=>t%C===0),label:e=>tl(w[j.get(e)],Nz[t],N,n.hass)};const L=Kl(n)/Za,F=Fz[i.compact?"compact":"normal"]/Va,T=!0===o.labels,O=h.length,P=[],D=[],U=e=>Math.min(Va,Math.max(0,e));w.forEach((e,o)=>{const r=S.x(e),a=S.x($[o]);h.forEach((e,i)=>{const s=e.groups[o],[l,d]=vc(r,a,i,O),u=y.map(e=>({state:e,v:Az(s.time.get(e)??0,s,c,t)})).filter(e=>e.v>0);let h=0;u.forEach(({state:o,v:r},a)=>{const s=f(o,e),p=U(S.y(h)),m=U(S.y(h+r));if(h+=r,p-m<=0)return;const g=_(s,o);P.push(R`<div
            class="col sd-slice ${a===u.length-1?"cap-top":""}"
            data-series=${i}
            style="left:${Tz(l,Za)};width:${Tz(d,Za)};top:${Tz(m,Va)};height:${Tz(p-m,Va)};background:${g}"
          ></div>`),T&&(p-m)*F>=14&&d*L>=26&&D.push(R`<span
              class="sd-label text-${s.text}"
              style="left:${Tz(l+d/2,Za)};top:${Tz((p+m)/2,Va)}"
              >${Oz(r,c,t,n)}</span
            >`)}),P.push(R`<div
          class="entity sd-hit"
          data-index=${e.series.index}
          style="left:${Tz(l,Za)};width:${Tz(d,Za)}"
        ></div>`)})});const I=h.length>1,H=new Map,W=[];for(const R of h)for(const e of y){if(!R.groups.some(t=>(t.time.get(e)??0)>0))continue;const t=bz(n.hass,R.series,e),o=f(e,R),r={...R.series,entity:{...R.series.entity,name:I?`${R.series.entity.name} · ${t}`:t},color:_(o,e),points:A.map((t,o)=>({t:t,v:R.groups[o].time.get(e)??0}))};H.set(r,{row:R}),W.push(r)}const B=Bc(o),V=B?Wc(n.host):void 0,Y=void 0===V?void 0:j.get(V),G=void 0===Y?Z:R`<div
          class="slot-hover"
          style="left:${Tz(S.x(w[Y]),Za)};width:${Tz(S.x($[Y])-S.x(w[Y]),Za)}"
        ></div>`,X={dotY:()=>null,heading:e=>{const o=j.get(e);return void 0===o?el(e,n.hass):og(w[o],$[o],t,n.hass)},text:(e,o)=>{if(!o||!o.v)return"—";const r=fl(o.v);if("percent"!==c)return r;const a=H.get(e).row.groups[j.get(o.t)??-1];return a?`${Oz(Az(o.v,a,c,t),c,t,n)} · ${r}`:r}},K=Ze(n.hass,"chart_aria",{style:Ze(n.hass,"editor_style_state_duration"),names:h.map(e=>e.series.entity.name).join(", ")});return sc(i,x,oc({axes:z,ctx:n,content:q``,label:K,yLabel:e=>function(e,t,o,n,r){const a=Wt(e,n,r.hass);return"percent"===t?`${a} %`:"hour"===o?`${a} min`:`${a} h`}(e,c,t,z.value.decimals,n),overlay:R`<div class="columns" style="--r:${4}px">${G}${P}</div>
        <div class="point-labels">${D}</div>
        ${"over"===i.header?lc(x):Z}
        ${B?Kc(n,W,S,V,Kl(n),X):Z}`,hover:B?Vc(n,k,W.map(e=>e.points)):void 0}))}},Iz={current:"current_temperature",target:"temperature",low:"target_temp_low",high:"target_temp_high",action:"hvac_action"},Hz=Object.keys(Iz);const Wz=["heat","cool","dry","fan"],Rz={heating:"heat",preheating:"heat",cooling:"cool",defrosting:"cool",drying:"dry",fan:"fan"};function qz(e){return void 0===e?void 0:Rz[e]}function Bz(e,t){let o=0,n=e.length;for(;o<n;){const r=o+n>>1;e[r].t<=t?o=r+1:n=r}return o>0?e[o-1]:void 0}const Zz=e=>(Math.round(100*e)/100).toString();const Vz=new Set(["source","group_by","aggregate"]),Yz=[...pf.filter(e=>!Vz.has(e.name)),{name:"set_point",path:["set_point"],default:!0},{name:"shading",path:["shading"],default:!0},{name:"shade_fan",path:["shade_fan"],default:!1},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:_i},{name:"current_color",path:["current_color"]},{name:"set_point_color",path:["set_point_color"]},{name:"heating_color",path:["heating_color"]},{name:"cooling_color",path:["cooling_color"]},...Mf,...$f];function Gz(e){return gf(e.hass,e.config).filter(e=>!Vz.has(e.name??"")&&!(e.schema??[]).some(e=>Vz.has(e.name??"")))}const Xz="var(--state-climate-heat-color, #ff8100)",Kz="var(--state-climate-cool-color, #2b9af9)",Jz="var(--state-climate-dry-color, #efbd07)",Qz="var(--state-climate-fan_only-color, #8a8a8a)",eE=["set_point","shading","shade_fan"],tE=["current_color","set_point_color","heating_color","cooling_color"];function oE(e,t,o){if(t.stateObj&&e?.formatEntityAttributeValue){const n=e.formatEntityAttributeValue(t.stateObj,Iz.action,o);if(n)return n}const n=Ze(e,`climate_action_${o}`);return n===`climate_action_${o}`?o:n}function nE(e,t,o,n,r){return"number"==typeof t?e.text(t):"number"==typeof o&&"number"==typeof n?Ze(r,"climate_range",{low:Wt(o,e.decimals,r),high:e.text(n)}):"—"}const rE=e=>Math.round(1e4*e)/100+"%";function aE(e,t,o,n,r,a,i){if(void 0===i)return Z;const s=r.x(i)/Za;if(!(s>=0&&s<=1))return Z;const l=Oc(s,Kl(e)),c=Bz(o.current,i),d=Bz(o.action,i)?.s,u=qz(d),h=e=>Bz(e,i)?.v??void 0,p=c&&null!==c.v?r.y(c.v)/Va:-1,m=(e,t,o)=>R`<div class="tooltip-row">
      ${e}<span class="tooltip-name">${t}</span><span class="tooltip-value">${o}</span>
    </div>`;return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${rE(s)}"></div>
    ${p>=0&&p<=1?R`<span
            class="hover-dot"
            style="left:${rE(s)};top:${rE(p)};background:${n.colors.current}"
          ></span>`:Z}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${rE(s)}`}>
      <div class="tooltip-time">${el(i,e.hass)}</div>
      ${m(R`<span class="swatch" style="background:${n.colors.current}"></span>`,t.name,a.text(c?.v))}
      ${n.setPoint?m(R`<span class="swatch set-point-swatch" style="border-color:${n.colors.setPoint}"></span>`,Ze(e.hass,"climate_set_point"),nE(a,h(o.target),h(o.low),h(o.high),e.hass)):Z}
      ${d?m(R`<span
                class="swatch action-swatch"
                style=${u?`background:${n.colors[u]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
              ></span>`,oE(e.hass,t,d),""):Z}
    </div>
  </div>`}const iE=(e,t=!1)=>R`<div class="chart-message ${t?"error":""}">${e}</div>`;const sE={layout:"chart",group:"history",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />`,validate(e){Xa(e),Fs(e),Zc(e),Si(e),ac(e),function(e){if(void 0!==e.source&&"history"!==e.source)throw new Error("\"source\" must be history: long-term statistics don't keep a thermostat's set point or action");if(void 0!==e.group_by)throw new Error('"group_by" is not available on a climate chart');for(const t of eE)if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of tE)if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`)}(e)},editor:function(e){const t=Tf(`climate|${ff(e.config)}`,e.hass,()=>[...Gz(e),{type:"grid",name:"",schema:[{name:"set_point",selector:{boolean:{}}},{name:"shading",selector:{boolean:{}}},{name:"shade_fan",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"curve",selector:hf(e.hass,"curve",Ha)},{name:"line_width",selector:Ui}]},{type:"grid",name:"",schema:[{name:"current_color",selector:{text:{}}},{name:"set_point_color",selector:{text:{}}},{name:"heating_color",selector:{text:{}}},{name:"cooling_color",selector:{text:{}}}]},...zf(e.hass),...kf(e.hass,!1)]);return Rf(e,"chart",t,Yz)},disconnect(e){ni(e),Xl(e),qc(e)},render(e){const t=ic(e.raw),o=function(e){const t=(t,o)=>je(e[t]??o);return{setPoint:!1!==e.set_point,shading:!1!==e.shading,shadeFan:!0===e.shade_fan,colors:{current:t("current_color","primary"),setPoint:t("set_point_color","red"),heat:t("heating_color",Xz),cool:t("cooling_color",Kz),dry:Jz,fan:Qz}}}(e.raw),n=e.items[0],r=xn(e.raw.period),a=pn(e.hass),i=Date.now(),s=$n(r,i,a,r.navigate?Mn(e.host,r):0),l={start:s.start,end:s.end},c=function(e,t){const o=t.config?.unit_system,n=o?.temperature??"°C",r=e.config.unit??n,a=e.config.decimals??1,i=Sa(n,e.config.unit);return{unit:r,decimals:a,...i?{conversion:i}:{},convert:e=>i&&"number"==typeof e&&Number.isFinite(e)?i.apply(e):e,text:e=>"number"==typeof e&&Number.isFinite(e)?Bt(Wt(e,a,t),r):"—"}}(n,e.hass),d=n.entityId.startsWith("climate."),u=function(e,t,o,n){const{show:r}=e.config;if(!r.name&&!r.value)return Z;const a=t.stateObj?.attributes??{},i=t.entityId.startsWith("climate.")&&void 0!==t.stateObj&&!["unavailable","unknown"].includes(t.stateObj.state),s="string"==typeof a[Iz.action]?a[Iz.action]:void 0,l=qz(s),c=(e,t,o)=>R`<div class="entity series-item" data-index="0" tabindex="0" aria-label=${`${t}, ${o}`}>
      ${e} ${r.name?R`<span class="series-name">${t}</span>`:Z}
      ${r.value?R`<span class="series-value">${o}</span>`:Z}
    </div>`;return R`<div class="series-header">
    ${c(R`<span class="swatch" style="background:${o.colors.current}"></span>`,t.name,i?n.text(n.convert(a[Iz.current])):t.display)}
    ${o.setPoint&&i?c(R`<span class="swatch set-point-swatch" style="border-color:${o.colors.setPoint}"></span>`,Ze(e.hass,"climate_set_point"),nE(n,n.convert(a[Iz.target]),n.convert(a[Iz.low]),n.convert(a[Iz.high]),e.hass)):Z}
    ${i&&s?R`<div
            class="entity series-item action-item"
            data-index="0"
            tabindex="0"
            aria-label=${oE(e.hass,t,s)}
          >
            <span
              class="swatch action-swatch"
              style=${l?`background:${o.colors[l]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
            ></span>
            <span class="series-value action-value">${oE(e.hass,t,s)}</span>
          </div>`:Z}
  </div>`}(e,n,d?o:{...o,setPoint:!1},c);if(!d)return sc({...t,header:"above"},u,iE(Ze(e.hass,"climate_not_thermostat",{name:n.name})));const h=function(e){const t={};for(const o of Hz)t[o]="action"===o?{entity:e,attribute:Iz[o],text:!0}:{entity:e,attribute:Iz[o]};return t}(n.entityId),p=lr(e.host,e.requestUpdate).get(e.hass,Object.values(h),l,"history",{live:s.live}),m=function(e,t,o,n){const r={};for(const a of Hz){const i=e.get(n(t[a]))??[],s=i[i.length-1],l="action"===a?void 0!==s?.s:null!=s?.v;r[a]=s&&l&&s.t<o?[...i,{...s,t:o,carried:!0}]:i}return r}(p.data,h,Math.min(l.end,i),Zn),f=e=>Aa(e,c.conversion),g=c.conversion?{...m,current:f(m.current),target:f(m.target),low:f(m.low),high:f(m.high)}:m,y=ti({status:p.status,error:p.error,range:l,period:r,live:s.live,back:s.back,zone:a},e),v=y===Z&&u===Z?Z:R`${y}${u}`,_=o.shadeFan?["heat","cool","dry","fan"]:["heat","cool","dry"],b=o.shading?function(e,t,o=Wz){const n=[];let r;for(const a of e){if(r&&a.s===r.action)continue;r&&(r.end=a.t,r.end>r.start&&n.push(r),r=void 0);const e=qz(a.s);e&&o.includes(e)&&(r={kind:e,action:a.s,start:a.t,end:t})}return r&&t>r.start&&n.push({...r,end:Math.max(r.end,t)}),n}(g.action,Math.min(l.end,i),_):[],x=o.setPoint?[g.current,g.target,g.low,g.high]:[g.current];let w;if("loading"===p.status?w=iE(Ze(e.hass,"chart_loading")):"error"===p.status?w=iE(Ze(e.hass,"chart_error",{error:p.error??""}),!0):x.every(e=>e.every(e=>null===e.v))&&0===b.length&&(w=iE(Ze(e.hass,"chart_no_data"))),w)return sc("over"===t.header?{...t,header:"above"}:t,v,w);const $=Jl(e,l,ws(x)),{scales:k}=$,M=e.raw.line_width??_i,z=e.raw.curve??"smooth",E=q`${b.map(e=>q`<rect
        class="action-span action-${e.kind}"
        x=${k.x(e.start)}
        y="0"
        width=${Math.max(0,k.x(e.end)-k.x(e.start))}
        height=${Va}
        fill=${o.colors[e.kind]}
      ></rect>`)}`,S=function(e,t){const o=new Map(t.map(e=>[e.t,e.v]));return e.map(e=>{const t=o.get(e.t);return{t:e.t,v:null!==e.v&&"number"==typeof t?[e.v,t]:null}})}(g.low,g.high),A=o.setPoint?q`
        <path class="range-band" d=${function(e,t,o){let n="",r=[];const a=e=>{if(!r.length)return;const a=r[r.length-1];if(e>a.t&&r.push({t:e,v:a.v}),r.length>1){const e=r.map(e=>[t(e.t),o(e.v[1])]),a=r.map(e=>[t(e.t),o(e.v[0])]);n+=`M${Zz(e[0][0])},${Zz(e[0][1])}`;for(let t=1;t<e.length;t++)n+=`H${Zz(e[t][0])}V${Zz(e[t][1])}`;n+=`V${Zz(a[a.length-1][1])}`;for(let t=a.length-2;t>=0;t--)n+=`V${Zz(a[t][1])}H${Zz(a[t][0])}`;n+="Z"}r=[]};for(const i of e)null===i.v?a(i.t):r.push({t:i.t,v:i.v});return r.length&&a(e[e.length-1].t),n}(S,k.x,k.y)} fill=${o.colors.setPoint}></path>
        ${[g.target,g.low,g.high].map(e=>q`<path class="set-point" d=${function(e,t){return function(e){const t=[];let o=[];const n=e=>{if(!o.length)return;const n=o[o.length-1];e>n.t&&o.push({t:e,v:n.v}),t.push(o),o=[]};for(const a of e){if(null===a.v){n(a.t);continue}const e=o[o.length-1];e&&e.v===a.v||o.push({t:a.t,v:a.v})}const r=e[e.length-1];return o.length&&n(r.t),t}(e).map(e=>qa(e.map(e=>[t.x(e.t),t.y(e.v)]),"step")).join("")}(e,k)} fill="none" stroke=${o.colors.setPoint}></path>`)}`:Z,j=Ba(Dl(g.current,500)).map(e=>qa(e.map(e=>[k.x(e.t),k.y(e.v)]),z)).join(""),C=q`${E}${A}<path
      class="current"
      d=${j}
      fill="none"
      stroke=${o.colors.current}
      style="stroke-width:${M}px"
    ></path>`,N=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_climate"),names:n.name}),L=Bc(e.raw);return sc(t,v,oc({axes:$,ctx:e,content:C,label:N,overlay:R`${"over"===t.header?lc(v):Z}
        ${L?aE(e,n,g,o,k,c,Wc(e.host)):Z}`,hover:L?Vc(e,l,[g.current,g.target,g.low,g.high,g.action]):void 0}))}},lE=[4,8,16];function cE(e,t){const o=360/t;return Math.floor(jn(e)/o+.5)%t}function dE(e,t){return En[e*(16/t)%16]}function uE(e,t,o,n){if(t<0)return null;const r=e[t];return o-r.t<n?r.v:null}function hE(e,t){let o=0;for(let n=0;n<t.length&&t[n]<=e;n++)o=n;return o}const pE=e=>Math.round(100*e)/100||0;function mE(e,t){return[pE(e*Math.sin(t)),pE(-e*Math.cos(t))]}const fE=pf.filter(e=>"group_by"!==e.name&&"aggregate"!==e.name).map(e=>"period_last"===e.name?{...e,default:30}:"period_unit"===e.name?{...e,default:"day"}:e),gE=[...fE,{name:"sectors",path:["sectors"],default:"16"},{name:"calm",path:["calm"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function yE(e,t){if(void 0===t)return Ze(e.hass,"editor_wind_none");const o="string"==typeof t?t:t.entity;return("string"==typeof t?void 0:t.name)??e.hass?.states[o]?.attributes?.friendly_name??o}const vE={last:30,unit:"day"};function _E(e){const t=e.period;return null==t?xn(vE):"object"!=typeof t||Array.isArray(t)?xn(t):xn({...vE,...t})}function bE(e){const t=e.sectors;if(null==t||""===t)return 16;const o="string"==typeof t?Number(t):t;if(!lE.includes(o))throw new Error(`"sectors" must be one of: ${lE.join(", ")}`);return o}function xE(e){const t=e.calm;if(null==t||""===t)return;const o="string"==typeof t?Number(t):t;if("number"!=typeof o||!Number.isFinite(o)||o<0)throw new Error('"calm" must be a number of 0 or more');return o}const wE=["color-mix(in srgb, var(--primary-color, #2f6fe4) 35%, var(--card-background-color, #fff))","color-mix(in srgb, var(--primary-color, #2f6fe4) 62%, var(--card-background-color, #fff))","var(--primary-color, #2f6fe4)","color-mix(in srgb, var(--primary-color, #2f6fe4) 68%, var(--primary-text-color, #212121))","color-mix(in srgb, var(--purple-color, #8b6cff) 80%, var(--primary-text-color, #212121))"],$E=(e,t)=>Wt(e,Number.isInteger(e)?0:1,t.hass);function kE(e,t,o){return Number.isFinite(e)?void 0===t?`${$E(e,o)}+`:`${$E(e,o)}–${$E(t,o)}`:void 0===t?"":`< ${$E(t,o)}`}function ME(e,t,o=!1){const n=100*e;return 0===n?`${Wt(0,0,t.hass)}%`:`${Wt(n,o||n<1?1:0,t.hass)}%`}const zE=new WeakMap;function EE(e,t){zE.get(e.host)!==t&&(void 0===t?zE.delete(e.host):zE.set(e.host,t),e.requestUpdate())}const SE=124;function AE(e,t,o,n){const{rose:r,n:a,bands:i,rings:s}=e,l=2*Math.PI/a,c=.09*l,d=Bc(n.raw),u=r.sectors.map((o,s)=>{if(r.totals[s]<=0)return Z;const u=s*l-l/2+c,h=s*l+l/2-c;let p=0;const m=o.map((t,o)=>{if(t<=0)return Z;const n=function(e,t,o,n){if(t<=e||n<=o)return"";const r=n-o>Math.PI?1:0,[a,i]=mE(t,o),[s,l]=mE(t,n),c=`M${a} ${i}A${t} ${t} 0 ${r} 1 ${s} ${l}`;if(e<=0)return`${c}L0 0Z`;const[d,u]=mE(e,n),[h,p]=mE(e,o);return`${c}L${d} ${u}A${e} ${e} 0 ${r} 0 ${h} ${p}Z`}(e.radius(p),e.radius(p+t),u,h);return p+=t,q`<path d=${n} style="fill:${i[o].color}"></path>`}),f=dE(s,a),g=t.index>=0;return q`<g
      class="petal ${g?"entity":""}"
      data-index=${g?t.index:Z}
      data-sector=${s}
      tabindex=${g||d?0:Z}
      aria-label=${`${f} ${ME(r.totals[s],n,!0)}`}
      @pointerenter=${d?()=>EE(n,s):Z}
      @pointerleave=${d?()=>EE(n,void 0):Z}
      @focus=${d?()=>EE(n,s):Z}
      @blur=${d?()=>EE(n,void 0):Z}
    >${m}</g>`}),h=function(e){const t=e.length;let o=0,n=1/0;for(let r=0;r<t;r++){const a=(Math.floor(t/8)+r)%t,i=Math.max(e[a],e[(a+1)%t]);i<n-1e-9&&(o=a,n=i)}return 2*(o+.5)*Math.PI/t}(r.totals),p=["N","E","S","W"].map((e,t)=>{const[o,n]=mE(113,t*Math.PI/2);return q`<text class="compass ${"N"===e?"north":""}" x=${o} y=${n+4}>${e}</text>`});return R`<svg class="rose" viewBox="${-124} ${-124} ${248} ${248}" role="img" aria-label=${o}>
    ${s.map(t=>q`<circle class="ring" r=${e.radius(t/100)}></circle>`)}
    <circle class="rim" r=${102}></circle>
    <line class="spoke" x1="0" y1=${-102} x2="0" y2=${102}></line>
    <line class="spoke" x1=${-102} y1="0" x2=${102} y2="0"></line>
    <g class="petals">${u}</g>
    <circle class="calm-circle" r=${9}></circle>
    ${p}
    ${s.map(t=>{const[o,r]=mE(e.radius(t/100),h),a=Math.sin(h)>=0?"start":"end";return q`<text class="ring-label" x=${o+("start"===a?3:-3)} y=${r} text-anchor=${a}>${Wt(t,Number.isInteger(t)?0:1,n.hass)}%</text>`})}
  </svg>`}function jE(e,t,o,n){const r=void 0!==o&&o.index>=0;return R`<div
    class="stat stat-${n} ${r?"entity":""}"
    data-index=${r?o.index:Z}
    tabindex=${r?0:Z}
  >
    <span class="stat-label">${e}</span>
    <span class="stat-value">${t}</span>
  </div>`}function CE(e,t,o,n){const r=(e,t)=>Ze(n.hass,e,t),{rose:a}=e,i=a.prevailing<0?"—":`${dE(a.prevailing,e.n)} · ${ME(a.totals[a.prevailing],n)}`,s=e=>null===e?"—":Bt(Wt(e,o?.decimals??1,n.hass),o?.unit??"");return R`<div class="readout">
    <div class="stats">
      ${jE(r("wind_prevailing"),i,t.direction,"prevailing")}
      ${o?R`${jE(r("wind_mean_speed"),s(a.meanSpeed),t.speed,"mean")}
            ${jE(r("wind_strongest"),s(function(e){let t=null;for(const o of e){const e="number"==typeof o.max&&Number.isFinite(o.max)?o.max:o.v;null!==e&&(null===t||e>t)&&(t=e)}return t}(o.points)),t.speed,"strongest")}
            ${jE(r("wind_calm"),ME(a.calm,n),t.speed,"calm")}`:Z}
    </div>
    ${o?R`<div class="speed-legend">
            <div class="stat-label">${o.unit?r("wind_speed_unit",{unit:o.unit}):r("wind_speed")}</div>
            <div class="keys">
              ${e.bands.map(e=>R`<div class="key">
                    <span class="key-swatch" style="background:${e.color}"></span>
                    <span class="key-label">${e.label}</span>
                  </div>`)}
            </div>
          </div>`:Z}
  </div>`}const NE={layout:"chart",group:"distribution",height:280,styles:a`
    ${si}
    ${Jc}
    ${cc}
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
    <path d="M32 20 L40 24 A9 9 0 0 1 37 27 Z" fill="var(--primary-color, #03a9f4)" opacity="0.4" />`,validate(e){Xa(e),_E(e),Zc(e),ac(e),bE(e),xE(e)},editor:function(e){const t=Tf(`wind_rose|${ff(e.config)}`,e.hass,()=>[...gf(e.hass,e.config).filter(e=>!e.schema?.some(e=>"group_by"===e.name)),{type:"grid",name:"",schema:[{name:"sectors",selector:hf(e.hass,"sectors",lE.map(String))},{name:"calm",selector:{number:{min:0,mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]),o=e.config.entities??[],n={...e,config:(r=e.config,"number"==typeof r.sectors?{...r,sectors:String(r.sectors)}:r),commit:t=>e.commit(function(e){if("string"!=typeof e.sectors)return e;const t=Number(e.sectors);return{...e,sectors:Number.isFinite(t)?t:e.sectors}}(t))};var r;const a="margin: 0 0 12px; color: var(--secondary-text-color); font-size: 0.875em; line-height: 1.4;";return R`<p class="wind-roles" style=${a}>
      ${Ze(e.hass,"editor_wind_roles")}
      <br /><b
        >${Ze(e.hass,"editor_wind_now",{direction:yE(e,o[0]),speed:yE(e,o[1])})}</b
      >
    </p>
    ${"statistics"===e.config.source?R`<p class="wind-statistics" style=${a}>${Ze(e.hass,"editor_wind_statistics")}</p>`:Z}
    ${Rf(n,"chart",t,gE)}`},disconnect(e){ni(e),zE.delete(e)},render(e){const t={...ic(e.raw),header:"above"},o=function(e){const t=e.config.entities.length?e.config.entities:e.items.map(e=>e.config),o=t=>t&&{id:t.entity,entity:t,index:e.items.findIndex(e=>e.entityId===t.entity)};return{direction:o(t[0]),speed:o(t[1])}}(e),n=o.direction;if(!n)return R``;const r=function(e,t,o,n=Date.now()){const r=_E(e.raw),a=e.raw.source??"history",i=pn(e.hass),s=$n(r,n,i,r.navigate?Mn(e.host,r):0),l={start:s.start,end:s.end},c=[{entity:t.id,attribute:t.entity.attribute,bearing:!0},...o?[{entity:o.id,attribute:o.entity.attribute}]:[]],d="statistics"===a?function(e){return{period:e.end-e.start<=1728e5?"5minute":"hour",types:["mean","max"],value:"mean"}}(l):void 0,u=d?Qn[d.period]:1/0,h=d?{start:l.start-u,end:l.end}:l,p=lr(e.host,e.requestUpdate).get(e.hass,c,h,a,{live:s.live,statistics:d}),m=o?[t.entity,o.entity]:[t.entity],f=xa(e.host,e.hass,m,h,s.live,e.requestUpdate,e.raw),g=(e,t)=>ka(t.entity,p.data.get(Zn(e))??[],f),y=g(c[0],t),v=o?g(c[1],o):void 0;return{frame:{status:$a(p.status,f),error:p.error,range:l,period:r,source:a,series:[],live:s.live,back:s.back,zone:i},direction:y,speed:v?.some(e=>null!==e.v)?v:void 0,until:Math.min(l.end,n),maxHold:u}}(e,n,o.speed),{frame:a}=r,i=ti(a,e),s=R`<div class="chart-message">${Ze(e.hass,"chart_no_data")}</div>`,l="ready"!==a.status?ai(a,e):r.direction.every(e=>null===e.v)?s:void 0;if(l)return sc(t,i,l);const c=bE(e.raw),d=r.speed?o.speed:void 0,u=d?function(e,t){const o=e.entity.attribute?"":String(t.hass.states[e.id]?.attributes?.unit_of_measurement??""),n=e.entity.unit??o,r=void 0===e.entity.unit?void 0:Sa(o||void 0,e.entity.unit);return r?{unit:n,conversion:r}:{unit:n}}(d,e):void 0,h=u?.unit,p=r.speed&&Aa(r.speed,u?.conversion),m=function(e){switch((e??"").trim().toLowerCase()){case"km/h":case"kmh":case"kph":return{from:[0,12,20,29,39],calm:1.8};case"mph":return{from:[0,8,13,19,25],calm:1.1};case"kn":case"kt":case"kts":case"knot":case"knots":return{from:[0,7,11,17,22],calm:1};case"ft/s":return{from:[0,10,20,30,40],calm:1.6};default:return{from:[0,3,6,9,12],calm:.5}}}(h),f=d?function(e,t,o){return e!==Ct&&e.length>0?e.map((t,n)=>({from:t.from,color:je(t.color),label:t.label??kE(t.from,e[n+1]?.from,o)})):t.map((e,n)=>({from:e,color:wE[n%wE.length],label:kE(e,t[n+1],o)}))}(Xh(d.entity.severity,e.hass,h),m.from,e):[{from:0,color:"var(--primary-color, #2f6fe4)",label:""}],g=d?xE(e.raw)??m.calm:0,y=function(e,t,o,n=1/0){const r=new Set([o]);for(const c of t?[e,t]:[e])for(const e of c)r.add(e.t),Number.isFinite(n)&&r.add(e.t+n);const a=[...r].filter(e=>e<=o).sort((e,t)=>e-t),i=[];let s=-1,l=-1;for(let c=0;c+1<a.length;c++){const o=a[c],r=a[c+1]-o;for(;s+1<e.length&&e[s+1].t<=o;)s++;const d=uE(e,s,o,n);if(null===d)continue;let u=null;if(t){for(;l+1<t.length&&t[l+1].t<=o;)l++;if(u=uE(t,l,o,n),null===u)continue}const h=i[i.length-1];h&&h.dir===d&&h.speed===u?h.ms+=r:i.push({dir:d,speed:u,ms:r})}return i}(r.direction,p,r.until,r.maxHold),v=function(e,t,o,n=0){const r=Math.max(1,o.length),a=Array.from({length:t},()=>new Array(r).fill(0));let i=0,s=0,l=0,c=0;for(const m of e){if(i+=m.ms,null!==m.speed&&(l+=m.ms,c+=m.speed*m.ms,m.speed<n)){s+=m.ms;continue}const e=null===m.speed?0:hE(m.speed,o);a[cE(m.dir,t)][e]+=m.ms}const d=e=>i>0?e/i:0,u=a.map(e=>e.map(d)),h=u.map(e=>e.reduce((e,t)=>e+t,0));let p=-1;return h.forEach((e,t)=>{e>0&&(p<0||e>h[p])&&(p=t)}),{total:i,calm:d(s),sectors:u,totals:h,prevailing:p,meanSpeed:l>0?c/l:null}}(y,c,f.map(e=>e.from),g);if(v.total<=0)return sc(t,i,s);const _=function(e){if(!(e>0))return[];const t=e/3,o=10**Math.floor(Math.log10(t)),n=[1,2,2.5,5,10].map(e=>e*o).find(e=>e>=t-1e-9)??10*o,r=Math.max(1,Math.ceil(e/n-1e-9));return Array.from({length:r},(e,t)=>Math.round((t+1)*n*1e3)/1e3)}(100*Math.max(0,...v.totals)),b=(_[_.length-1]??100)/100,x={rose:v,n:c,bands:f,rings:_,radius:e=>10+e/b*90},w=t=>ME(t,e),$={direction:v.prevailing<0?"":dE(v.prevailing,c),share:v.prevailing<0?"":w(v.totals[v.prevailing]),calm:w(v.calm)},k=Ze(e.hass,v.prevailing<0?"wind_aria_still":d?"wind_aria_calm":"wind_aria",$),M=d?{unit:h??"",decimals:d.index>=0?e.items[d.index].decimals:1,points:p??[]}:void 0;return sc(t,i,R`<div class="wind">
        <div class="rose-wrap">
          ${AE(x,n,k,e)} ${function(e,t,o){const n=zE.get(o.host);if(!(void 0!==n&&Bc(o.raw)&&e.rose.totals[n]>0))return Z;const r=2*n*Math.PI/e.n,[a,i]=mE(e.radius(e.rose.totals[n]),r),s=a>0?"left":"right",l=void 0===t?[{color:e.bands[0].color,name:Ze(o.hass,"wind_share"),share:e.rose.totals[n]}]:e.rose.sectors[n].map((o,n)=>({color:e.bands[n].color,name:Bt(e.bands[n].label,t),share:o})).filter(e=>e.share>0);return R`<div class="hover-layer" aria-hidden="true">
    <div
      class="tooltip rose-tip ${s}"
      style="left:${(a+SE)/248*100}%;top:${(i+SE)/248*100}%"
    >
      <div class="tooltip-time">${dE(n,e.n)} · ${ME(e.rose.totals[n],o,!0)}</div>
      ${l.map(e=>R`<div class="tooltip-row">
            <span class="swatch" style="background:${e.color}"></span>
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${ME(e.share,o,!0)}</span>
          </div>`)}
    </div>
  </div>`}(x,M?M.unit:void 0,e)}
        </div>
        ${CE(x,{direction:n,speed:d},M,e)}
      </div>`)}},LE=[{name:"days",path:["days"],default:1},{name:"period_offset",path:["period","offset"],default:0},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"center",path:["center"],default:"total"},{name:"bucket",path:["bucket"],default:"60"},{name:"aggregate",path:["aggregate"],default:"auto"},{name:"tooltip",path:["tooltip"],default:!0}];const FE=[{type:"grid",name:"",schema:[{name:"ring_color",selector:{text:{}}},{name:"active",selector:{text:{multiple:!0}}}]}],TE=[{name:"ring_color",path:["color"]},{name:"active",path:["active"]}];const OE=["total","now","none"],PE=new Set(["alarm_control_panel","automation","binary_sensor","calendar","climate","cover","device_tracker","fan","humidifier","input_boolean","lawn_mower","light","lock","media_player","person","remote","schedule","script","siren","switch","timer","vacuum","valve","water_heater"]),DE=e=>e.split(".")[0];function UE(e){const t=e.config.active;if("string"==typeof t&&""!==t.trim()||Array.isArray(t)&&t.length>0)return"state";if(PE.has(DE(e.entityId)))return"state";const o=e.stateObj?.attributes??{};if(!e.config.attribute&&(void 0!==o.unit_of_measurement||void 0!==o.state_class))return"numeric";const n=e.stateObj?.state,r="string"==typeof n&&""!==n.trim()&&Number.isFinite(Number(n));return e.available&&r?"numeric":"state"}function IE(e,t){return e.config.attribute?e.config.attribute:"state"===t&&"climate"===DE(e.entityId)?"hvac_action":void 0}function HE(e,t){if(void 0!==t.aggregate)return t.aggregate;if(void 0!==e.config.transform)return"mean";const o=e.stateObj?.attributes?.state_class;return"total_increasing"===o||"total"===o?"change":"mean"}function WE(e,t,o,n){const r=t.stateObj;let a=o.replace(/_/g," ");if(r){const t=n?e.formatEntityAttributeValue?.(r,n,o):e.formatEntityState?.(r,o);t&&(a=t)}return a.toLocaleLowerCase()}function RE(e,t){const o=Math.round(e)%Lm,n=Date.UTC(2e3,0,1,Math.floor(o/60),o%60);return new Intl.DateTimeFormat(t?.locale?.language??"en",{hour:"numeric",minute:"2-digit",hour12:Xs(t),timeZone:"UTC"}).format(n)}function qE(e,t,o){return Bt(Wt(e,t.decimals,o),t.unit)}function BE(e,t=Date.now()){const{raw:o,hass:n}=e,r=o.days??1,a=Number(o.bucket??60),i=function(e,t){const o=xn(e.period);return 1===t?{last:1,unit:"day",calendar:"day",offset:o.offset,navigate:o.navigate,until:"end"}:{last:t,unit:"day",offset:o.offset,navigate:o.navigate,until:"end"}}(o,r),s=Math.max(0,i.offset+(i.navigate?Mn(e.host,i):0)),l=pn(n),c=function(e,t,o,n){const r=dn("day",cn("day",e,t),-n*o,t),a=[];for(let i=o-1;i>=-1;i--)a.push(dn("day",r,-i,t));return a}(t,l,r,s),d=0===s,u=c[c.length-1],h=Math.min(u,t),p=e.items.map(UE),m=e.items.map((e,t)=>({entity:e.entityId,attribute:IE(e,p[t]),text:!0})),f=lr(e.host,e.requestUpdate).get(n,m,{start:c[0],end:d?t:u},"history",{live:d}),g={start:c[0],end:h},y=wa(e,{start:c[0],end:d?t:u},d),v=$a(f.status,y),_=Math.max(1,c.slice(0,-1).filter(e=>e<h).length),b=e.items.map((e,t)=>{const i=p[t],s=e.config,d=e.stateObj?ka(e.config,f.data.get(Zn(m[t]))??[],y):[],u={index:t,entity:e,kind:i,color:je(s.color??Ya[t%Ya.length]),missing:!e.stateObj,hasData:!1,intervals:[],runs:[],slots:[],heights:[],aggregate:HE(e,o),totalMs:0,count:0,stat:""};if("state"===i){const e=function(e){if("string"==typeof e&&""!==e.trim())return new Set([e.trim()]);if(Array.isArray(e)){const t=e.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>e.trim());if(t.length)return new Set(t)}return new Set(Tm)}(s.active),t=function(e,t,o){const n={active:[],known:[]};for(let r=0;r<e.length;r++){const a=e[r],i=r+1<e.length?e[r+1].t:t.end,s=Math.max(t.start,a.t),l=Math.min(t.end,i);if(l<=s||Pm(a.s))continue;const c=!0===a.carried||a.t<t.start;Dm(n.known,s,l,c),o.has(a.s)&&(Dm(n.active,s,l,c),n.word=a.s)}return n}(d,g,e);u.hasData=t.known.length>0,u.word=t.word;const o=t.active;1===r?u.intervals=o:u.runs=function(e,t,o,n){const r=new Uint16Array(Lm),a=new Uint16Array(Lm);for(let s=0;s+1<o.length;s++){const i={start:o[s],end:o[s+1]},l=new Uint8Array(Lm),c=new Uint8Array(Lm);for(const e of Um(t,i))for(const t of Wm(e,i.start,n))qm(c,t);for(const t of Um(e,i))for(const e of Wm(t,i.start,n))qm(l,e);for(let e=0;e<Lm;e++)a[e]+=c[e],r[e]+=l[e]&c[e]}const i=[];for(let s=0;s<Lm;s++){if(0===r[s])continue;const e=i[i.length-1];e&&e.to===s&&e.on===r[s]&&e.of===a[s]?e.to=s+1:i.push({from:s,to:s+1,on:r[s],of:a[s]})}return i}(o,t.known,c,l.timeZone),u.totalMs=o.reduce((e,t)=>e+t.end-t.start,0)/_;let a=0;for(let n=0;n+1<c.length;n++)a+=Im(Um(o,{start:c[n],end:c[n+1]}));u.count=a/_;const i=e=>1===r?e:Ze(n,"day_clock_a_day",{text:e}),h=[i(Xm(u.totalMs))];u.count>0&&h.push(i(function(e,t){const o=Math.round(10*t)/10;return 1===o?Ze(e,"day_clock_times_one"):Ze(e,"day_clock_times",{n:o})}(n,u.count))),u.stat=h.join(" · ")}else{const t=Aa(d.map(e=>({...e,v:Nn(e.s),s:void 0})),e.conversion),o=Ka(e,t,g,h,l,n);u.entity=o.entity,u.slots=function(e,t,o,n,r,a){const i=new Map;for(let s=0;s+1<t.length;s++){const l={start:t[s],end:t[s+1]};if(l.start>=r)break;const c=Kn(e,Zm(l,o),n,r),d=new Map;for(const e of c){if(null===e.v)continue;const t=Math.floor(Hm(e.t,l.start,a)/o);t<0||t*o>=Lm||d.set(t,[...d.get(t)??[],e.v])}for(const[e,t]of d)i.set(e,[...i.get(e)??[],Ym(t,n)])}return[...i.entries()].sort((e,t)=>e[0]-t[0]).map(([e,t])=>({index:e,v:t.reduce((e,t)=>e+t,0)/t.length,days:t.length}))}(o.points,c,a,u.aggregate,h,l.timeZone);const i=Gm(u.aggregate);if(u.heights=function(e,t){if(0===e.length)return[];const o=e.map(e=>e.v);if(t){const e=Math.max(...o.map(Math.abs));return o.map(t=>e>0?Math.abs(t)/e:0)}const n=Math.min(...o),r=Math.max(...o);return o.map(e=>r>n?.15+.85*(e-n)/(r-n):1)}(u.slots,i),u.hasData=u.slots.length>0,u.hasData){const e=u.slots.reduce((e,t)=>t.v>e.v?t:e),t=RE(e.index*a,n);if(i){const e=qE(u.slots.reduce((e,t)=>e+t.v,0),u.entity,n);u.stat=Ze(n,"day_clock_busiest",{total:1===r?e:Ze(n,"day_clock_a_day",{text:e}),time:t})}else u.stat=Ze(n,"day_clock_peak",{value:qE(e.v,u.entity,n),time:t})}}return u.missing?u.stat=Ze(n,"entity_not_found"):u.hasData||"ready"!==v||(u.stat=Ze(n,"day_clock_no_data")),u});return{status:v,error:f.error,rings:b,bounds:c,days:r,bucket:a,live:d,now:t,period:i,back:s,zone:l}}const ZE=new WeakMap;function VE(e){let t=ZE.get(e);return t||(t={},ZE.set(e,t)),t}function YE(e,t,o){const n=VE(e.host);void 0!==n.timer&&clearTimeout(n.timer),n.timer=void 0,n.ring===t&&n.item===o||(n.ring=t,n.item=o,e.requestUpdate())}const GE=new WeakMap;function XE(e,t){if(GE.has(e.host))return;const o=6e4-t%6e4+50;GE.set(e.host,setTimeout(()=>{GE.delete(e.host),"undefined"!=typeof document&&"hidden"===document.visibilityState?XE(e,Date.now()):e.requestUpdate()},o))}const KE=-132,JE=-120,QE=264,eS=240,tS=92;function oS(e,t,o){const n=ZE.get(e.host);if(void 0===n?.ring||void 0===n.item)return Z;const r=t.rings[n.ring],a=o[n.ring]?.[n.item];if(!r||!a)return Z;const{time:i,value:s}=function(e,t,o,n){const r=(e,t)=>Ze(n,"day_clock_range",{from:e,to:t});if("numeric"===e.kind){const a=e.slots[t],i=r(RE(a.index*o.bucket,n),RE((a.index+1)*o.bucket,n)),s=qE(a.v,e.entity,n);return{time:i,value:1===o.days?s:Ze(n,"day_clock_average_value",{value:s})}}if(o.days>1){const o=e.runs[t];return{time:r(RE(o.from,n),RE(o.to,n)),value:Ze(n,"day_clock_on_days",{on:o.on,of:o.of})}}const a=e.intervals[t],i=o.live&&a.end>=o.now-1e3,s=i?Ze(n,"day_clock_now").toLocaleLowerCase():Qs(a.end,n),l=Xm(a.end-a.start);return{time:r(Qs(a.start,n),s),value:i?Ze(n,"day_clock_so_far",{duration:l}):l}}(r,a.item,t,e.hass),[l,c]=Km(a.r+4,a.angle);return R`<div class="dc-tip tooltip ${`${l<0?"tip-right":"tip-left"} ${c<0?"tip-down":"tip-up"}`}" style="left:${(l-KE)/QE*100}%;top:${(c-JE)/eS*100}%" aria-hidden="true">
    <div class="tooltip-time">${i}</div>
    <div class="tooltip-row">
      <span class="swatch" style="background:${r.color}"></span>
      <span class="tooltip-name">${r.entity.name}</span>
      <span class="tooltip-value">${s}</span>
    </div>
  </div>`}function nS(e,t,o){const n=t.toLocaleLowerCase().includes(o.toLocaleLowerCase())?Ze(e,"day_clock_on"):o;return Ze(e,"day_clock_state",{name:t,state:n})}function rS(e,t){const o=e.entity;if(!o.stateObj)return o.display;if("numeric"===e.kind)return Ze(t,"day_clock_state",{name:o.name,state:o.display});const n=IE(o,"state"),r=n?o.stateObj.attributes?.[n]:o.stateObj.state;return"string"!=typeof r?Ze(t,"day_clock_state",{name:o.name,state:o.display}):nS(t,o.name,WE(t,o,r,n))}function aS(e){return e.rings.find(e=>!e.missing)}function iS(e,t,o){const n=Math.min(o,t/Math.max(1,.56*e.length)),r=.62*o;if(n>=r)return{size:n,text:e};const a=Math.max(3,Math.floor(t/(.56*r))-1);return{size:r,text:`${e.slice(0,a).trimEnd()}…`}}function sS(e,t,o){const n=function(e,t){const o=e.raw.center??"total";if("none"===o||0===t.rings.length)return;const{hass:n}=e,r=aS(t);if("now"===o&&t.live&&1===t.days&&r)return[Qs(t.now,n),rS(r,n)];const a=t.rings.find(e=>"state"===e.kind&&e.hasData);if(a){const e=a.word?WE(n,a.entity,a.word,IE(a.entity,"state")):Ze(n,"day_clock_on"),o=nS(n,a.entity.name,e);return[Xm(a.totalMs),1===t.days?o:Ze(n,"day_clock_per_day",{label:o})]}const i=t.rings.find(e=>"numeric"===e.kind&&e.hasData);if(!i)return;const s=Gm(i.aggregate)?qE(i.slots.reduce((e,t)=>e+t.v,0),i.entity,n):i.entity.display;return[s,i.entity.name]}(e,t);if(!n)return Z;const r=Math.min(18,.4*o),a=Math.min(11,.25*o),i=(1.05*r+1.3*a)/2,s=2*Math.sqrt(Math.max(0,o*o-i*i))-8,l=iS(n[0],s,r),c=iS(n[1],s,a),d=.3*l.size+c.size,u=(-.75*l.size+d+.3*c.size)/2;return q`<g class="dc-centre" aria-hidden="true">
    <text class="dc-centre-value" y=${-u} font-size=${l.size}>${l.text}</text>
    <text class="dc-centre-label" y=${d-u} font-size=${c.size}>${c.text}</text>
  </g>`}function lS(e,t){const o=function(e,t=92,o=44){const n=e.map(e=>"state"===e?15:22),r=n.reduce((e,t)=>e+t,0)+4*Math.max(0,e.length-1),a=t-o,i=r>a?a/r:1,s=[];let l=t;for(const c of n){const e=c*i;s.push({r0:l-e,r1:l}),l-=e+4*i}return{rings:s,hole:s.length?s[s.length-1].r0:t}}(t.rings.map(e=>e.kind),tS),n=Bc(e.raw),r=t.rings.map((e,n)=>{const{r0:r,r1:a}=o.rings[n];return"state"===e.kind?function(e,t,o,n){const r=t.zone.timeZone;return 1===t.days?e.intervals.map((e,a)=>{const i=Wm(e,t.bounds[0],r),s=i.map(([e,t])=>Qm(o,n,Rm(e),Rm(t))).join("");return{d:s,angle:Rm(i.length?(i[0][0]+i[i.length-1][1])/2:0),r:n,item:a}}):e.runs.map((e,t)=>({d:Qm(o,n,Rm(e.from),Rm(e.to)),angle:Rm((e.from+e.to)/2),r:n,opacity:Math.max(.12,e.on/Math.max(1,e.of)),item:t}))}(e,t,r,a):function(e,t,o,n){const r=Lm/t.bucket,a=Math.min(.03,Nm/r/8),i=Gm(e.aggregate),s=[];return e.slots.forEach((t,l)=>{if(i&&0===t.v)return;const c=t.index/r*Nm+a,d=(t.index+1)/r*Nm-a,u=o+Math.max(.04,e.heights[l])*(n-o);s.push({d:Qm(o,u,c,d),angle:(c+d)/2,r:u,item:l})}),s}(e,t,r,a)}),a=ZE.get(e.host),i=t.rings.map((i,s)=>{const{r0:l,r1:c}=o.rings[s],d=1===t.days&&r[s].length<=48,u="state"===i.kind?q`<path class="dc-track" d=${Qm(l,c,0,Nm)}></path>`:q`<circle class="dc-base" r=${l}></circle>`;return q`<g
      class="entity dc-ring ${i.kind}"
      data-index=${i.index}
      tabindex="0"
      role="group"
      aria-label=${`${i.entity.name}, ${i.stat}`}
    >
      ${u}
      ${r[s].map((t,o)=>q`<path
            class="dc-mark ${a?.ring===s&&a.item===o?"hover":""}"
            d=${t.d}
            fill=${i.color}
            fill-opacity=${t.opacity??Z}
            tabindex=${d?"0":Z}
            @pointerenter=${n?()=>YE(e,s,o):Z}
            @pointerdown=${n?()=>YE(e,s,o):Z}
            @pointerleave=${n?t=>function(e,t){if("touch"!==t.pointerType&&"pen"!==t.pointerType)return void YE(e,void 0,void 0);const o=VE(e.host);void 0!==o.timer&&clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=void 0,YE(e,void 0,void 0)},Pc)}(e,t):Z}
            @focus=${n?()=>YE(e,s,o):Z}
            @blur=${n?()=>YE(e,void 0,void 0):Z}
          ></path>`)}
    </g>`}),s=function(e){const t=e?.locale?.language??"en";let o=Xs(e);if(void 0===o)try{o=!0===new Intl.DateTimeFormat(t,{hour:"numeric"}).resolvedOptions().hour12}catch{o=!1}return o?[0,6,12,18].map(e=>new Intl.DateTimeFormat(t,{hour:"numeric",hour12:!0,timeZone:"UTC"}).format(Date.UTC(2e3,0,1,e))):["00","06","12","18"]}(e.hass),l=Array.from({length:24},(e,t)=>{const o=t/24*Nm,n=t%6==0,[r,a]=Km(95,o),[i,s]=Km(tS+(n?9:6),o);return q`<line class="dc-tick ${n?"major":""}" x1=${r} y1=${a} x2=${i} y2=${s}></line>`}),c=q`
    <text class="dc-label" x="0" y=${-107} text-anchor="middle">${s[0]}</text>
    <text class="dc-label" x=${104} y="3.5" text-anchor="start">${s[1]}</text>
    <text class="dc-label" x="0" y=${114} text-anchor="middle">${s[2]}</text>
    <text class="dc-label" x=${-104} y="3.5" text-anchor="end">${s[3]}</text>`;let d=Z;if(t.live&&1===t.days){const e=Rm(Hm(t.now,t.bounds[0],t.zone.timeZone)),[n,r]=Km(o.hole,e),[a,i]=Km(101,e);d=q`
      <path class="dc-future" d=${Qm(o.hole-1,93,e,Nm)}></path>
      <line class="dc-hand" x1=${n} y1=${r} x2=${a} y2=${i}></line>
      <circle class="dc-hand-dot" cx=${a} cy=${i} r="2.6"></circle>`}const u=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_day_clock"),names:t.rings.map(e=>e.entity.name).join(", ")});return R`<div class="dc-dial">
    <svg class="dc-svg" viewBox="${KE} ${JE} ${QE} ${eS}" role="img" aria-label=${u}>
      ${l}${c}
      <g class="dc-marks">${i}</g>
      ${d} ${sS(e,t,o.hole)}
    </svg>
    ${n?oS(e,t,r):Z}
  </div>`}function cS(e,t,o=!1){return R`<div class="frame">
    ${e}
    <div class="chart-message ${o?"error":""}">${t}</div>
  </div>`}const dS={layout:"chart",group:"history",height:280,styles:a`
    ${si}
    ${Jc}
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
      stroke-linecap="round" />`,validate:function(e){Zc(e),pa(e),xn(e.period);const t=e.days;if(void 0!==t&&("number"!=typeof t||!Number.isInteger(t)||t<1||t>31))throw new Error('"days" must be a whole number from 1 to 31');if(void 0!==e.center&&!OE.includes(e.center))throw new Error(`"center" must be one of: ${OE.join(", ")}`);if(void 0!==e.bucket&&!Bm.includes(Number(e.bucket)))throw new Error(`"bucket" must be one of: ${Bm.join(", ")}`);if(void 0!==e.aggregate&&!Yn.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Yn.join(", ")}`);for(const o of e.entities??[]){if("object"!=typeof o||null===o)continue;const e=o.active;if(void 0===e)continue;const t="string"==typeof e&&""!==e.trim()||Array.isArray(e)&&e.every(e=>"string"==typeof e);if(!t)throw new Error('"active" must be a state or a list of states')}},editor:function(e){var t;return Rf({...e,config:(t=e.config,"number"==typeof t.bucket?{...t,bucket:String(t.bucket)}:t),commit:t=>e.commit(function(e){return"string"==typeof e.bucket?{...e,bucket:Number(e.bucket)}:e}(t))},"chart",Tf("day_clock",e.hass,()=>{return[{type:"grid",name:"",schema:[{name:"days",selector:{number:{min:1,max:31,mode:"box"}}},{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"center",selector:hf(t=e.hass,"day_clock_center",["total","now","none"])},{type:"grid",name:"",schema:[{name:"bucket",selector:hf(t,"bucket",Bm.map(String))},{name:"aggregate",selector:hf(t,"aggregate",["auto",...Yn])}]},{name:"tooltip",selector:{boolean:{}}}];var t}),LE)},entityFields:function(){return{schema:FE,fields:TE}},disconnect(e){ni(e),function(e){const t=GE.get(e);void 0!==t&&clearTimeout(t),GE.delete(e)}(e);const t=ZE.get(e);void 0!==t?.timer&&clearTimeout(t.timer),ZE.delete(e)},render(e){const t=BE(e);t.live&&XE(e,t.now);const o=ti({period:t.period,range:{start:t.bounds[0],end:t.bounds[t.bounds.length-1]},back:t.back,zone:t.zone},e,t.now);return"loading"===t.status?cS(o,Ze(e.hass,"chart_loading")):"error"===t.status?cS(o,Ze(e.hass,"chart_error",{error:t.error??""}),!0):t.rings.every(e=>!e.hasData)?cS(o,Ze(e.hass,"chart_no_data")):R`<div class="frame">
      ${o}
      <div class="dc-body">${lS(e,t)} ${function(e,t){const{hass:o}=e;let n=Z;return t.days>1?n=R`<div class="dc-foot">
      <div class="dc-stat">${Ze(o,"day_clock_average",{n:t.days})}</div>
    </div>`:t.live&&aS(t)&&(n=R`<div class="dc-foot">
      <div class="dc-stat">${Ze(o,"day_clock_now")}</div>
      <div class="dc-now">${Qs(t.now,o)} · ${rS(aS(t),o)}</div>
    </div>`),R`<div class="dc-legend">
    ${t.rings.map(e=>R`<div class="dc-item ${e.missing?"missing":""}">
          <span class="dc-swatch" style="background:${e.color}"></span>
          <div class="dc-text">
            <div class="dc-name">${e.entity.name}</div>
            <div class="dc-stat">${e.stat}</div>
          </div>
        </div>`)}
    ${n}
  </div>`}(e,t)}</div>
    </div>`}},uS=["day_of_week","hour_of_day","day_of_month"];function hS(e,t){const o=rn(e,t);return Math.round(Date.UTC(o.year,o.month-1,o.day)/864e5)}function pS(e,t){const o=rn(e,t);return 12*o.year+o.month-1}function mS(e,t,o){const n=t.map(()=>new Array(o).fill(0)),r=t.map(()=>new Array(o).fill(0));for(const a of e)a.slot<0||a.slot>=o||(n[a.panel][a.slot]+=a.v,r[a.panel][a.slot]+=1);return t.map((e,t)=>({key:e,values:n[t].map((e,o)=>r[t][o]?e/r[t][o]:null)}))}function fS(e,t,o,n){const r=o.timeZone;if("day_of_week"===t){const t=mv(e,o);return{panels:[0,1,2,3,4,5,6].map(e=>({key:e,values:t.slice(24*e,24*e+24).map(e=>e.v)})),slots:24,first:0}}const a=e.filter(e=>null!==e.v),i=Math.max(n.start,n.end-1);if("hour_of_day"===t){const e=hS(n.start,r),t=hS(i,r)-e+1,o=a.map(t=>({panel:rn(t.t,r).hour,slot:hS(t.t,r)-e,v:t.v}));return{panels:mS(o,Array.from({length:24},(e,t)=>t),t),slots:t,first:e}}const s=pS(n.start,r),l=pS(i,r)-s+1,c=a.map(e=>({panel:rn(e.t,r).day-1,slot:pS(e.t,r)-s,v:e.v}));return{panels:mS(c,Array.from({length:31},(e,t)=>t+1),l),slots:l,first:s}}function gS(e){const t=e.filter(e=>null!==e);return t.length?t.reduce((e,t)=>e+t,0)/t.length:void 0}const yS={day_of_week:8,hour_of_day:2,day_of_month:26},vS={day_of_week:26,hour_of_day:13,day_of_month:104},_S={day_of_week:"history",hour_of_day:"history",day_of_month:"statistics"},bS=100,xS=100,wS=1e3;function $S(e){const t=e,o=t.cycle??"day_of_week";return{cycle:o,weeks:"number"==typeof t.weeks?t.weeks:yS[o]}}function kS(e){const t=$S(e),o=e.period??{},n={};for(const r of["offset","navigate"])void 0!==o[r]&&(n[r]=o[r]);return{...e,source:e.source??_S[t.cycle],group_by:"day_of_month"===t.cycle?"day":"hour",period:{...n,last:t.weeks,unit:"week"}}}const MS=new Map;function zS(e,t){const o=e?.locale?.language??e?.language??"en",n=`${o}|${JSON.stringify(t)}`;let r=MS.get(n);if(!r){try{r=new Intl.DateTimeFormat(o,{...t,timeZone:"UTC"})}catch{r=new Intl.DateTimeFormat("en",{...t,timeZone:"UTC"})}MS.set(n,r)}return r}const ES=(e,t)=>zS(t,{hour:"numeric",hour12:Xs(t)}).format(Date.UTC(2024,0,1,e)),SS=(e,t)=>zS(t,{hour:"numeric",minute:"2-digit",hour12:Xs(t)}).format(Date.UTC(2024,0,1,e)),AS=(e,t,o,n=!1)=>zS(o,{weekday:n?"long":"short"}).format(Date.UTC(2024,0,(t-1+e)%7+1));function jS(e,t,o,n){return"day_of_week"===t?AS(e,o,n):"hour_of_day"===t?ES(e,n):String(e)}function CS(e,t,o,n,r,a){if("day_of_week"===n)return`${AS(t,r,a,!0)} ${SS(o,a)} – ${SS((o+1)%24,a)}`;if("hour_of_day"===n){return`${zS(a,{weekday:"short",day:"numeric",month:"short"}).format(864e5*(e.first+o))} ${SS(t,a)}`}const i=e.first+o;return zS(a,{day:"numeric",month:"long",year:"numeric"}).format(Date.UTC(Math.floor(i/12),i%12,t))}function NS(e,t,o){return Ze(o,{day_of_week:"cycle_note_week",hour_of_day:"cycle_note_hour",day_of_month:"cycle_note_month"}[e],{n:t})}function LS(e,t,o){const n=e.series.map(t=>({series:t,data:fS(t.points,o.cycle,e.zone,e.range)})),r=n[0].data.panels,a=n.flatMap(e=>e.data.panels.flatMap(e=>e.values)).filter(e=>null!==e),i=Us(a.length?[Math.min(...a),Math.max(...a)]:void 0,{},3),[s,l]=i.domain,c=e=>96-(e-s)/(l-s||1)*92,d=Math.max(0,Gl(t)-32-36),u=function(e,t,o,n=4){const r=Math.max(1,Math.floor((t+n)/(o+n)));if(r>=e)return e;const a=Math.ceil(e/r);return Math.ceil(e/a)}(r.length,d,30,4),h=Math.ceil(r.length/u),p=1===h?120:86,m=(d-4*(u-1))/u,f=n.length>1,g=t.hass,y=e.zone.firstDay,v=Bc(t.raw),_=n[0].data.slots,b=Pg(t.host),x=void 0===b?void 0:Math.floor(b/wS),w=void 0===b?void 0:b%wS,$=v?Ug(t,(e,t,o)=>{const n=Math.min(u-1,Math.floor(e*u)),a=Math.min(h-1,Math.floor(t*h))*u+n;if(a>=r.length)return;const i=(o+4)/u,s=Math.min(1,Math.max(0,(e*o-n*i)/Math.max(1,i-4)));return a*wS+Math.round(s*Math.max(0,_-1))}):void 0,k=(e,t)=>Bt(Wt(t,e.series.entity.decimals,g),e.series.entity.unit);let M=Z;if(void 0!==x&&void 0!==w&&x<r.length){const e=x%u,t=Math.floor(x/u),a=e*((d+4)/u)+(_<=1?.5:w/(_-1))*m,i=r[x].key;M=Hg({x:d>0?a/d:0,y:(t+.5)/h,plotWidth:d,title:CS(n[0].data,i,w,o.cycle,y,g),rows:n.flatMap(e=>{const t=e.data.panels[x].values[w],n=gS(e.data.panels[x].values);return[{color:e.series.color,name:e.series.entity.name,value:null===t?"—":k(e,t)},...void 0===n?[]:[{name:Ze(g,"cycle_panel_average",{name:jS(i,o.cycle,y,g)}),value:k(e,n)}]]})})}const z=`grid-template-columns:repeat(${u}, minmax(0, 1fr));grid-auto-rows:${p}px`,E=i.ticks.filter(e=>e>=s&&e<=l),S=e.series[0].entity.unit,A=Ze(g,"chart_aria",{style:Ze(g,"editor_style_cycle_plot"),names:e.series.map(e=>e.entity.name).join(", ")}),j="day_of_week"===o.cycle?`${ES(0,g)} – ${ES(23,g)}`:function(e,t,o){const n=e.slots-1;if("hour_of_day"===t){const t=zS(o,{day:"numeric",month:"short"});return`${t.format(864e5*e.first)} – ${t.format(864e5*(e.first+n))}`}const r=zS(o,{month:"short",year:"numeric"}),a=e=>Date.UTC(Math.floor(e/12),e%12,1);return`${r.format(a(e.first))} – ${r.format(a(e.first+n))}`}(n[0].data,o.cycle,g),C=h>1?14:0;return R`<div class="cy" role="img" aria-label=${A}>
    ${1===h?R`<div class="cy-titles" style="grid-template-columns:repeat(${u}, minmax(0, 1fr))" aria-hidden="true">
            ${S?R`<span class="cy-unit">${S}</span>`:Z}
            ${r.map(e=>R`<span class="cy-title">${jS(e.key,o.cycle,y,g)}</span>`)}
          </div>`:Z}
    <div class="cy-body">
      <div class="cy-axis" aria-hidden="true">
        ${Array.from({length:h},(e,t)=>R`<div class="cy-axis-row" style="height:${p}px">
              ${E.map(e=>R`<span class="cy-tick" style="top:calc(${C}px + ${c(e)/xS} * (100% - ${C}px))"
                    >${Wt(e,i.decimals,g)}</span
                  >`)}
              ${0===t&&C>0&&S?R`<span class="cy-unit">${S}</span>`:Z}
            </div>`)}
      </div>
      <div
        class="cy-grid ${$?"hoverable":""}"
        style=${z}
        @pointerdown=${$?.move}
        @pointermove=${$?.move}
        @pointerleave=${$?.leave}
        @pointercancel=${$?.leave}
      >
        ${r.map((e,t)=>R`<div class="cy-panel" style="padding-top:${C}px">
              <svg class="cy-svg" viewBox="0 0 ${bS} ${xS}" preserveAspectRatio="none">
                <rect class="cy-bg" x="0" y="0" width=${bS} height=${xS} rx="3"></rect>
                ${n.map(e=>function(e,t,o,n){const{values:r}=e.data.panels[t],a=e.data.slots,i=e=>a<=1?50:e/(a-1)*bS,s=r.map((e,t)=>({k:t,v:e})),l=Ba(s).map(e=>1===e.length?`M${i(e[0].k)},${o(e[0].v)}h0.01`:qa(e.map(e=>[i(e.k),o(e.v)]),"straight")).join(""),c=gS(r);return q`<g class="cy-series" data-series=${e.series.index}>
    ${void 0===c?Z:q`<line class="cy-mean ${n?"multi":""}" x1="0" x2=${bS} y1=${o(c)} y2=${o(c)}
            stroke=${n?e.series.color:"var(--cd-cycle-mean)"}></line>`}
    <path class="cy-line" d=${l} stroke=${e.series.color}></path>
  </g>`}(e,t,c,f))}
                ${x===t&&void 0!==w?q`<line class="cy-guide" x1=${(_<=1?.5:w/(_-1))*bS}
                      x2=${(_<=1?.5:w/(_-1))*bS} y1="0" y2=${xS}></line>`:Z}
              </svg>
              ${h>1?R`<span class="cy-inline-title">${jS(e.key,o.cycle,y,g)}</span>`:Z}
            </div>`)}
        ${M}
      </div>
    </div>
    <div class="cy-ends" aria-hidden="true">${j}</div>
    <div class="cy-legend">
      ${n.map(e=>R`<span
            class="entity cy-key"
            data-index=${e.series.index}
            tabindex="0"
            aria-label=${e.series.entity.label}
          >
            <span class="cy-swatch" style="background:${e.series.color}"></span>${f?e.series.entity.name:NS(o.cycle,o.weeks,g)}
          </span>`)}
      ${f?R`<span class="cy-key">${NS(o.cycle,o.weeks,g)}</span>`:Z}
      <span class="cy-key"><span class="cy-dash"></span>${Ze(g,"cycle_mean_legend")}</span>
    </div>
  </div>`}const FS=[{name:"cycle_plot_cycle",path:["cycle"],default:"day_of_week"},{name:"cycle_plot_weeks",path:["weeks"]},...pf.filter(e=>["period_offset","period_navigate","source","aggregate"].includes(e.name)),{name:"tooltip",path:["tooltip"],default:!0}];const TS={layout:"chart",group:"history",height:230,styles:a`
    ${si}
    ${Jc}
    .cy {
      --cd-cycle-mean: var(--error-color, #db4437);
    }
    .cy-titles,
    .cy-grid {
      display: grid;
      gap: ${4}px;
    }
    .cy-titles {
      position: relative;
      margin-left: 36px;
      padding-bottom: 4px;
    }
    .cy-title,
    .cy-inline-title {
      font-size: 11px;
      color: var(--secondary-text-color);
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cy-body {
      display: flex;
      gap: 0;
    }
    .cy-axis {
      flex: none;
      width: 32px;
      margin-right: 4px;
      display: flex;
      flex-direction: column;
      gap: ${4}px;
    }
    .cy-axis-row {
      position: relative;
    }
    .cy-tick {
      position: absolute;
      right: 0;
      transform: translateY(-50%);
      font-size: 10px;
      line-height: 1;
      color: var(--secondary-text-color);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .cy-unit {
      position: absolute;
      right: 0;
      top: -1px;
      font-size: 10px;
      line-height: 1;
      color: var(--secondary-text-color);
      white-space: nowrap;
    }
    .cy-titles .cy-unit {
      left: -36px;
      width: 32px;
      top: 1px;
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cy-grid {
      position: relative;
      flex: 1 1 auto;
      min-width: 0;
    }
    .cy-grid.hoverable {
      cursor: crosshair;
    }
    .cy-panel {
      position: relative;
      min-width: 0;
      box-sizing: border-box;
    }
    .cy-inline-title {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      font-size: 10px;
      pointer-events: none;
    }
    .cy-svg {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .cy-svg path,
    .cy-svg line {
      vector-effect: non-scaling-stroke;
    }
    .cy-bg {
      fill: color-mix(in srgb, var(--primary-text-color) 5%, transparent);
    }
    .cy-line {
      fill: none;
      stroke-width: 1.75px;
      stroke-linejoin: round;
      stroke-linecap: round;
      opacity: 0;
      transition: opacity var(--cd-duration) var(--cd-easing);
    }
    :host([ready]) .cy-line {
      opacity: 1;
    }
    :host([static]) .cy-line {
      transition: none;
    }
    .cy-mean {
      stroke-width: 1.25px;
      stroke-dasharray: 3 2;
    }
    .cy-mean.multi {
      opacity: 0.7;
    }
    .cy-guide {
      stroke: var(--secondary-text-color);
      stroke-width: 1px;
    }
    .cy-ends {
      margin-left: 36px;
      padding-top: 3px;
      font-size: 10px;
      color: var(--secondary-text-color);
      white-space: nowrap;
      min-width: 0;
    }
    .cy-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 14px;
      padding-top: 8px;
      font-size: 0.8125em;
      color: var(--secondary-text-color);
    }
    .cy-key {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
      border-radius: 4px;
    }
    .cy-key.entity {
      cursor: pointer;
    }
    .cy-key.entity:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
    .cy-swatch {
      flex: none;
      width: 10px;
      height: 10px;
      border-radius: 2px;
    }
    .cy-dash {
      flex: none;
      width: 14px;
      border-top: 2px dashed var(--cd-cycle-mean);
    }
  `,thumbnail:()=>q`
    ${[0,1,2,3,4].map(e=>q`<g transform="translate(${3+12*e} 6)">
        <rect width="10" height="28" rx="1.5" fill="var(--primary-text-color, #212121)" fill-opacity="0.06"></rect>
        <path d=${e<3?"M1 22L3 21L4 8L5 20L7 12L9 20":"M1 22L3 14L5 13L7 14L9 22"} fill="none"
          stroke="var(--primary-color, #03a9f4)" stroke-width="1.2" stroke-linejoin="round"></path>
        <path d="M1 17H9" stroke="var(--error-color, #db4437)" stroke-width="0.8" stroke-dasharray="1.5 1"></path>
      </g>`)}`,validate:function(e){const t=e;if(void 0!==t.cycle&&!uS.includes(t.cycle))throw new Error(`"cycle" must be one of: ${uS.join(", ")}`);const o=vS[t.cycle??"day_of_week"];if(void 0!==t.weeks&&!(Number.isInteger(t.weeks)&&t.weeks>=1&&t.weeks<=o))throw new Error(`"weeks" must be a whole number from 1 to ${o}`);Xa(kS(e)),Zc(e)},editor:function(e){const t=$S(e.config),o=Tf(`cycle_plot|${t.cycle}`,e.hass,()=>[{name:"cycle_plot_cycle",selector:hf(e.hass,"cycle_plot_cycle",uS)},{type:"grid",name:"",schema:[{name:"cycle_plot_weeks",selector:{number:{min:1,max:vS[t.cycle],mode:"box",placeholder:yS[t.cycle]}}},{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{type:"grid",name:"",schema:[{name:"source",selector:hf(e.hass,"source",Ga)},{name:"aggregate",selector:hf(e.hass,"aggregate",Yn)}]},{name:"tooltip",selector:{boolean:{}}}]),n=FS.map(e=>"source"===e.name?{...e,default:_S[t.cycle]}:e);return Rf(e,"chart",o,n)},entityFields:()=>({schema:[{name:"series_color",selector:{text:{}}}],fields:[{name:"series_color",path:["color"]}]}),disconnect(e){ni(e),Xl(e),Dg(e)},render(e){const t=$S(e.raw),o=Ja({...e,raw:kS(e.raw)}),n=ti(o,e),r=ri(o,e),a=ai(o,e);return a?R`<div class="frame">${n}${r}${a}</div>`:R`<div class="frame">${n}${r}${LS(o,e,t)}</div>`}};function OS(e,t){if(null!=e&&""!==e){if("number"==typeof e&&Number.isFinite(e))return{value:e,soft:!1};if("string"==typeof e){const t=e.trim(),o=t.startsWith("~"),n=Number(o?t.slice(1):t);if(""!==t&&"~"!==t&&Number.isFinite(n))return{value:n,soft:o}}throw new Error(`"${t}" must be a number, or ~ and a number for a soft limit (e.g. "~0")`)}}function PS(e,t={}){let[o,n]=e??[t.min?.value??0,t.max?.value??1];if(t.fromZero&&(o>0&&(o=0),n<0&&(n=0)),void 0!==t.minRange&&n-o<t.minRange){const e=(o+n)/2;o=e-t.minRange/2,n=e+t.minRange/2}let[r,a]=$s([o,n],.1);t.fromZero&&0===o&&(r=0),t.fromZero&&0===n&&(a=0);const{min:i,max:s}=t;return i&&(r=i.soft&&o<i.value?r:i.value),s&&(a=s.soft&&n>s.value?a:s.value),a<=r&&(a=r+1),[r,a]}function DS(e,t,o){const n=[];for(const c of e){const e=Math.min(c.end??c.t,o);if(c.t>=o)break;n.push({...c,start:c.t,end:e,t:Math.round((c.t+e)/2)})}const r=n.filter(e=>null!==e.v);if(0===r.length)return n;const a=n[0],i=n[n.length-1],s=[...n];null!==a.v&&a.t>t.start&&s.unshift({t:t.start,v:a.v,carried:!0});const l=Math.min(t.end,o);return null!==i.v&&i.t<l&&s.push({t:l,v:i.v,carried:!0}),s}function US(e,t){if(void 0!==e&&!Yn.includes(e))throw new Error(`${t} must be one of: ${Yn.join(", ")}`)}const IS=[...pf,{name:"points_per_hour",path:["points_per_hour"],default:.5},{name:"graph",path:["graph"],default:"line"},{name:"fill",path:["fill"],default:"fade"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:_i},{name:"points",path:["points"],default:"hover"},{name:"labels",path:["labels"],default:"hover"},{name:"height",path:["height"],default:150},{name:"bar_spacing",path:["bar_spacing"],default:4},{name:"color_transition",path:["color_transition"],default:"smooth"},{name:"extrema",path:["extrema"],default:!1},{name:"average",path:["average"],default:!1},{name:"legend",path:["legend"],default:!0},{name:"trend_y_min",path:["y_min"]},{name:"trend_y_max",path:["y_max"]},{name:"min_range",path:["min_range"]},{name:"y_min_secondary",path:["y_min_secondary"]},{name:"y_max_secondary",path:["y_max_secondary"]},{name:"min_range_secondary",path:["min_range_secondary"]},{name:"value_factor",path:["value_factor"],default:0},{name:"align_header",path:["align_header"],default:"default"},{name:"align_icon",path:["align_icon"],default:"right"},{name:"align_state",path:["align_state"],default:"left"},{name:"font_size",path:["font_size"],default:100},{name:"font_size_header",path:["font_size_header"]},{name:"color_name",path:["color_name"],default:!1},{name:"color_value",path:["color_value"],default:!1},{name:"trend_color_icon",path:["color_icon"],default:!1},{name:"group",path:["group"],default:!1},{name:"icon_image",path:["icon_image"]},{name:"trend_tooltip",path:["tooltip"],default:!0}],HS=(...e)=>({type:"grid",name:"",schema:e}),WS=e=>({name:e,selector:{boolean:{}}}),RS=(e,t,o,n="any")=>({name:e,selector:{number:{mode:"box",step:n,...void 0!==t?{min:t}:{},...void 0!==o?{max:o}:{}}}}),qS=e=>({name:e,selector:{text:{}}});function BS(e){const t={};for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"])"number"==typeof e[o]&&(t[o]=String(e[o]));return t}const ZS=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"entity_aggregate",path:["aggregate"]},{name:"y_axis_side",path:["y_axis"],default:"primary"},{name:"fixed_value",path:["fixed_value"],default:!1},{name:"show_graph",path:["show_graph"],default:!0},{name:"show_line",path:["show_line"],default:!0},{name:"show_fill",path:["show_fill"],default:!0},{name:"show_points",path:["show_points"]},{name:"show_legend_entity",path:["show_legend"],default:!0},{name:"show_legend_state",path:["show_legend_state"],default:!1},{name:"show_indicator",path:["show_indicator"],default:!1},{name:"show_state",path:["show_state"],default:!1}];const VS=["line","bar","none"],YS=["solid","fade","none"],GS=["hover","always","never"],XS=["default","left","right","center"],KS=["right","left","state"],JS=["left","right","center"],QS=["smooth","hard"];function eA(e,t){return void 0===e?t:!0===e?"always":!1===e?"never":e}function tA(e){return void 0===e||!0===e?"fade":!1===e?"none":e}const oA=e=>"number"==typeof e&&Number.isFinite(e)?e:void 0;function nA(e){return{graph:e.graph??"line",fill:tA(e.fill),points:eA(e.points,"hover"),labels:eA(e.labels,"hover"),pointsPerHour:oA(e.points_per_hour)??.5,height:oA(e.height)??150,lineWidth:oA(e.line_width)??2.5,barSpacing:oA(e.bar_spacing)??4,transition:e.color_transition??"smooth",extrema:!0===e.extrema,average:!0===e.average,legend:!1!==e.legend,factor:Math.pow(10,oA(e.value_factor)??0),alignHeader:e.align_header??"default",alignIcon:e.align_icon??"right",alignState:e.align_state??"left",fontSize:oA(e.font_size)??100,fontSizeHeader:oA(e.font_size_header),colorName:!0===e.color_name,colorValue:!0===e.color_value,colorIcon:!0===e.color_icon,group:!0===e.group,iconImage:"string"==typeof e.icon_image&&""!==e.icon_image?e.icon_image:void 0,primary:{min:OS(e.y_min,"y_min"),max:OS(e.y_max,"y_max"),minRange:oA(e.min_range)},secondary:{min:OS(e.y_min_secondary,"y_min_secondary"),max:OS(e.y_max_secondary,"y_max_secondary"),minRange:oA(e.min_range_secondary)}}}function rA(e,t,o){if(void 0!==e&&!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`)}function aA(e,t,o,n=1/0,r=!1){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<o||e>n||r&&!Number.isInteger(e))){throw new Error(`"${t}" must be ${r?"a whole number":"a number"} ${n===1/0?`${o} or more`:`from ${o} to ${n}`}`)}}function iA(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}function sA(e,t,o){const n=Math.min(e.range.end,Date.now()),r="bar"===o.graph,a=r&&0===o.pointsPerHour?.5:o.pointsPerHour,i=e.group?[]:function(e,t,o=500){const n=e.end-e.start;if(n<=0||t<=0)return[];const r=Math.max(1,Math.min(o,Math.round(n/36e5*t))),a=n/r,i=[];for(let s=0;s<=r;s++)i.push(s===r?e.end:Math.round(e.start+s*a));return i}(e.range,a,r?96:500),s=t.raw.aggregate??"mean";return e.series.map(t=>{const r=t.entity.config;let a=t.points;r.fixed_value&&null!==t.entity.value?a=[{t:e.range.start,v:t.entity.value},{t:n,v:t.entity.value}]:e.group?a=DS(t.points,e.range,n):i.length&&(a=DS(function(e,t,o,n,r){if(t.length<2)return e;let a=e;const i=e[e.length-1],s=e[e.length-2];return"history"===n&&i&&s&&i.t===r&&i.v===s.v&&(a=e.slice(0,-1)),"statistics"===n?Jn(a,t,o,r):Kn(a,t,o,r)}(t.points,i,r.aggregate??s,e.source,n),e.range,n)),1!==o.factor&&(a=a.map(e=>null===e.v?e:{...e,v:e.v*o.factor}));const l=void 0!==r.color?je(r.color):void 0,c=!l&&(e=>e.config.severity!==Ct)(t.entity),d=null===t.entity.value?null:t.entity.value*o.factor,u=l??(c&&null!==d?je(Fe(d,t.entity.bands).color):t.color);return{index:t.index,entity:t.entity,own:r,points:a,color:c?void 0:l??t.color,current:u,curve:t.curve,secondary:"secondary"===r.y_axis,graphed:!1!==r.show_graph}})}function lA(e){let t=1/0,o=-1/0;for(const n of e)for(const e of n.points)null!==e.v&&(e.v<t&&(t=e.v),e.v>o&&(o=e.v));return t===1/0?void 0:[t,o]}const cA=e=>Math.round(1e4*e)/100+"%";function dA(e,t,o){return e.filter(({series:e})=>void 0===e.color).map(({series:e})=>{const n=function(e,t,o){const[n,r]=t,a=e=>Math.min(1,Math.max(0,(e-n)/(r-n))),i=[];return e.forEach((t,n)=>{const r=je(t.color),s=Number.isFinite(t.from)?a(t.from):0,l=n+1<e.length?a(e[n+1].from):1;"hard"===o?i.push({offset:s,color:r},{offset:l,color:r}):(0===n||n===e.length-1||s<l)&&(i.push({offset:s,color:r}),n===e.length-1&&i.push({offset:1,color:r}))}),i}(e.entity.bands,t.get(e.secondary),o.transition);return q`<linearGradient id="cd-trend-${e.index}" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${Va} y2="0">
        ${n.map(e=>q`<stop offset=${e.offset} stop-color=${e.color}></stop>`)}
      </linearGradient>`})}const uA=e=>e.color??`url(#cd-trend-${e.index})`;function hA(e,t){return void 0!==e.start&&void 0!==e.end&&e.end>e.start?`${Qs(e.start,t.hass)} – ${Qs(e.end,t.hass)}`:Qs(e.t,t.hass)}function pA(e,t,o,n){const r=o.colorIcon?`color:${n}`:"";return o.iconImage?R`<span class="trend-icon"><img src=${o.iconImage} alt="" /></span>`:R`<span class="trend-icon" style=${r}>
    <ha-state-icon .hass=${t.hass} .stateObj=${e.stateObj} .icon=${Zh(e)}></ha-state-icon>
  </span>`}function mA(e,t,o,n){if(!t.extrema&&!t.average)return Z;const r=function(e,t){let o,n,r=0,a=0;for(let i=0;i<e.length;i++){const s=e[i];if(null!==s.v)if(s.carried||((!o||s.v<o.v)&&(o={t:s.t,v:s.v}),(!n||s.v>n.v)&&(n={t:s.t,v:s.v})),t){const t=e[i+1],o=t?t.t-s.t:0;r+=s.v*o,a+=o}else s.carried||(r+=s.v,a+=1)}if(o&&n)return{min:o,max:n,mean:a>0?r/a:(o.v+n.v)/2}}(e.points,n);if(!r)return Z;const a=(t,n,r)=>R`<span class="trend-chip ${t}"
      ><span class="trend-chip-type">${Ze(o.hass,t)}</span> ${(t=>Bt(Wt(t,e.entity.decimals,o.hass),e.entity.unit))(n)}${void 0!==r?R` · <span class="trend-chip-time">${Qs(r,o.hass)}</span>`:Z}</span
    >`;return R`<div class="trend-info" style="--series:${e.current}">
    ${t.extrema?a("trend_min",r.min.v,r.min.t):Z}
    ${t.average?a("trend_avg",r.mean):Z}
    ${t.extrema?a("trend_max",r.max.v,r.max.t):Z}
  </div>`}const fA={layout:"chart",group:"history",height:170,gridOptions:{columns:6,min_columns:3,min_rows:2},styles:a`
    ${si}
    ${Jc}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){Xa(e),Zc(e),rA(e.graph,VS,"graph"),rA(e.fill,[...YS,!0,!1],"fill"),rA(e.points,[...GS,!0,!1],"points"),rA(e.labels,[...GS,!0,!1],"labels"),rA(e.color_transition,QS,"color_transition"),rA(e.align_header,XS,"align_header"),rA(e.align_icon,KS,"align_icon"),rA(e.align_state,JS,"align_state"),aA(e.points_per_hour,"points_per_hour",0,60),aA(e.height,"height",20,1e3),aA(e.line_width,"line_width",bi,xi),aA(e.bar_spacing,"bar_spacing",0,50),aA(e.value_factor,"value_factor",-9,9,!0),aA(e.font_size,"font_size",25,400),aA(e.font_size_header,"font_size_header",6,60),aA(e.min_range,"min_range",0),aA(e.min_range_secondary,"min_range_secondary",0);for(const t of["extrema","average","legend","color_name","color_value","group"])iA(e[t],t);if(void 0!==e.icon_image&&"string"!=typeof e.icon_image)throw new Error('"icon_image" must be a URL');nA(e);for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t,o=t=>`"${t}" of ${e.entity}`;US(e.aggregate,o("aggregate")),rA(e.y_axis,["primary","secondary"],`y_axis of ${e.entity}`),aA(e.line_width,`line_width of ${e.entity}`,bi,xi);for(const t of["fixed_value","show_state","show_indicator","show_graph","show_line","show_fill","show_points","show_legend","show_legend_state"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`${o(t)} must be true or false`)}},editor:function(e){const t=Tf(`trend|${ff(e.config)}`,e.hass,()=>{return t=e.hass,o=e.config,[...gf(t,o),RS("points_per_hour",0,60),HS({name:"graph",selector:hf(t,"graph",["line","bar","none"])},{name:"fill",selector:hf(t,"fill",["fade","solid","none"])},{name:"curve",selector:hf(t,"curve",Ha)},{name:"line_width",selector:Ui},{name:"points",selector:hf(t,"points",["hover","always","never"])},{name:"labels",selector:hf(t,"labels",["hover","always","never"])},RS("height",20,1e3,1),RS("bar_spacing",0,50,1)),{name:"color_transition",selector:hf(t,"color_transition",["smooth","hard"])},HS(WS("extrema"),WS("average"),WS("legend"),WS("trend_tooltip")),HS(qS("trend_y_min"),qS("trend_y_max"),RS("min_range",0)),HS(qS("y_min_secondary"),qS("y_max_secondary"),RS("min_range_secondary",0)),HS({name:"align_header",selector:hf(t,"align_header",["default","left","right","center"])},{name:"align_icon",selector:hf(t,"align_icon",["right","left","state"])},{name:"align_state",selector:hf(t,"align_state",["left","right","center"])},RS("font_size",25,400,1),RS("font_size_header",6,60,1),RS("value_factor",-9,9,1)),HS(WS("color_name"),WS("trend_color_icon"),WS("color_value"),WS("group")),{name:"icon_image",selector:{text:{}}}];var t,o}),o={...e,config:{...e.config,...BS(e.config)},commit:t=>e.commit(function(e){let t=e;for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"]){const e=t[o];"string"==typeof e&&""!==e.trim()&&!e.trim().startsWith("~")&&Number.isFinite(Number(e))?t={...t,[o]:Number(e)}:""===e&&(t={...t},delete t[o])}return t}(t))};return Rf(o,"chart",t,IS,{legend:"editor_trend_legend",labels:"editor_trend_labels",group:"editor_trend_group"})},entityFields:function(e){return{schema:Tf("trend-entity",e,()=>function(e){return[HS({name:"series_color",selector:{text:{}}},{name:"curve",selector:hf(e,"curve",Ha)},{name:"line_width",selector:Ui},{name:"entity_aggregate",selector:hf(e,"aggregate",Yn)},{name:"y_axis_side",selector:hf(e,"y_axis_side",["primary","secondary"])}),HS(WS("show_state"),WS("show_indicator"),WS("show_graph"),WS("show_line"),WS("show_fill"),WS("show_points"),WS("show_legend_entity"),WS("show_legend_state"),WS("fixed_value"))]}(e)),fields:ZS}},disconnect(e){ni(e),Xl(e),qc(e)},render:function(e){const t=nA(e.raw),{show:o}=e.config,n=Ja(e),r=sA(n,e,t),a=r[0],i=a.entity,s=r.filter(e=>e.graphed),l=function(e,t){if(void 0!==t)return e.map(e=>{const o=e.points.filter(e=>!e.carried),n=Dc(o,t);return n<0?void 0:o[n]})}(r,Bc(e.raw)&&"ready"===n.status?Wc(e.host):void 0),c=t.colorName?`color:${a.current}`:"",d=o.icon&&"state"!==t.alignIcon?pA(i,e,t,a.current):Z,u=o.name||d!==Z?R`<div
          class="trend-header entity align-${t.alignHeader} icon-${t.alignIcon}"
          data-index="0"
          tabindex="0"
          aria-label=${i.label}
          style=${t.fontSizeHeader?`font-size:${t.fontSizeHeader}px`:""}
        >
          ${o.name?R`<span class="trend-name" style=${c}>${i.name}</span>`:Z} ${d}
        </div>`:Z,h=(o,n)=>{const r=l?.[n],a=r?r.v:o.entity.value,i=r?{number:null===r.v?"—":Wt(r.v,o.entity.decimals,e.hass),unit:o.entity.unit}:function(e,t,o,n){return null===e?{number:t.display,unit:""}:{number:Wt(e*o,t.decimals,n),unit:t.unit}}(a,o.entity,t.factor,e.hass);return{parts:i,color:r&&null!==r.v&&void 0===o.color?je(Fe(r.v,o.entity.bands).color):o.current,when:r?hA(r,e):void 0}},p=h(a,0),m=o.value,f=r.slice(1).filter(e=>!0===e.own.show_state),g=m||f.length||"state"===t.alignIcon?R`<div class="trend-states align-${t.alignState}" style="font-size:${t.fontSize}%">
          ${o.icon&&"state"===t.alignIcon?pA(i,e,t,a.current):Z}
          ${m?R`<div class="trend-state entity" data-index="0" tabindex="0" aria-label=${i.label}>
                  ${a.own.show_indicator?R`<span class="swatch" style="background:${a.current}"></span>`:Z}
                  <span class="trend-value" style=${t.colorValue?`color:${p.color}`:""}
                    >${p.parts.number}</span
                  >${p.parts.unit?R`<span class="trend-unit">${p.parts.unit}</span>`:Z}
                  ${p.when?R`<span class="trend-when">${p.when}</span>`:Z}
                </div>`:Z}
          ${f.length?R`<div class="trend-secondary">
                  ${f.map(e=>{const o=h(e,e.index);return R`<div
                      class="trend-state small entity"
                      data-index=${e.index}
                      tabindex="0"
                      aria-label=${e.entity.label}
                    >
                      ${!1!==e.own.show_indicator?R`<span class="swatch" style="background:${e.current}"></span>`:Z}
                      <span class="trend-value" style=${t.colorValue?`color:${o.color}`:""}
                        >${o.parts.number}</span
                      >${o.parts.unit?R`<span class="trend-unit">${o.parts.unit}</span>`:Z}
                    </div>`})}
                </div>`:Z}
        </div>`:Z,y=s.filter(e=>!1!==e.own.show_legend),v=t.legend&&s.length>1&&y.length?R`<div class="series-header trend-legend">
          ${y.map(t=>R`<div class="entity series-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}>
                <span class="swatch" style="background:${t.current}"></span>
                <span class="series-name">${function(e,t){const o=t.raw.name;return void 0===o||e.entity.name!==o?e.entity.name:e.entity.stateObj?.attributes.friendly_name??e.entity.entityId}(t,e)}</span>
                ${t.own.show_legend_state?R`<span class="series-value">${t.entity.display}</span>`:Z}
              </div>`)}
        </div>`:Z,_=ti(n,e),b="none"===t.graph?Z:function(e,t,o,n,r){const a=`aspect-ratio:500 / ${n.height}`;if("ready"!==t.status||o.every(e=>e.points.every(e=>null===e.v))){const o="loading"===t.status?"chart_loading":"error"===t.status?"chart_error":"chart_no_data";return R`<div class="trend-graph message ${"error"===t.status?"error":""}" style=${a}>
      <span>${Ze(e.hass,o,{error:t.error??""})}</span>
    </div>`}const i="bar"===n.graph,s=new Map;for(const _ of[!1,!0]){const e=o.filter(e=>e.secondary===_);e.length&&s.set(_,PS(lA(e),{..._?n.secondary:n.primary,fromZero:i}))}const l=ks([t.range.start,t.range.end],[0,Za]),c=o.map(e=>({series:e,y:ks(s.get(e.secondary),[Va,0])})),d=i?q``:q`${c.map(e=>function({series:e,y:t},o,n){const r=Ba(e.points).map(n=>{const r=n.map(e=>[o(e.t),t(e.v)]);return{pts:r,d:qa(r,e.curve)}}),a=!1!==e.own.show_line,i="none"!==n.fill&&!1!==e.own.show_fill,s=e.own.line_width??n.lineWidth,l=e.own.show_points??"always"===n.points,c=e.points.filter(e=>null!==e.v&&!e.carried);return q`<g class="series" data-series=${e.index}>
    ${i?q`<path
            class="fill ${n.fill}"
            d=${r.map(({pts:e,d:t})=>`${t}L${e[e.length-1][0]},200L${e[0][0]},200Z`).join("")}
            fill=${uA(e)}
            mask=${"fade"===n.fill?"url(#cd-trend-fade)":Z}
          ></path>`:Z}
    ${a?q`<path class="line" d=${r.map(e=>e.d).join("")} fill="none" stroke=${uA(e)}
            style="stroke-width:${s}px"></path>`:Z}
    ${l&&c.length<=200?q`<path class="dots" d=${ki(c.map(e=>[o(e.t),t(e.v)]))} fill="none"
            stroke=${uA(e)} style="stroke-width:${Mi(s)}px"></path>`:Z}
  </g>`}(e,l,n))}`,u=q`${dA(c,s,n)}
    <linearGradient id="cd-trend-fade-paint" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Va}>
      <stop offset="0" stop-color="#fff" stop-opacity="0.42"></stop>
      <stop offset="1" stop-color="#fff" stop-opacity="0.05"></stop>
    </linearGradient>
    <mask id="cd-trend-fade" maskContentUnits="userSpaceOnUse">
      <rect x="0" y="0" width=${Za} height=${Va} fill="url(#cd-trend-fade-paint)"></rect>
    </mask>`,h=Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_trend"),names:o.map(e=>e.entity.name).join(", ")}),p=t=>{const r=o.filter(e=>e.secondary===t),a=lA(r);if(!a)return Z;const i=t?n.secondary:n.primary,s=i.min&&!i.min.soft?i.min.value:a[0],l=i.max&&!i.max.soft?i.max.value:a[1],c=r[0].entity,d=t=>Bt(Wt(t,c.decimals,e.hass),c.unit);return R`<div class="trend-labels ${t?"secondary":"primary"}" style="--series:${r[0].current}">
      <span>${d(l)}</span><span>${d(s)}</span>
    </div>`},m="never"===n.labels?Z:R`<div class="trend-labels-wrap labels-${n.labels}">${p(!1)}${p(!0)}</div>`,f=r&&!i&&r[o[0].index]?R`<div class="crosshair" style="left:${cA(l(r[o[0].index].t)/Za)}"></div>`:Z,g=r&&!i?c.map(({series:e,y:t})=>{const o=r[e.index];if(!o||null===o.v||!1===e.own.show_points)return Z;const n=t(o.v)/Va;if(!(n>=0&&n<=1))return Z;const a=e.color??je(Fe(o.v,e.entity.bands).color);return R`<span
            class="hover-dot"
            style="left:${cA(l(o.t)/Za)};top:${cA(n)};background:${a}"
          ></span>`}):Z,y=r&&i&&r[o[0].index]?(()=>{const e=r[o[0].index];return void 0===e.start||void 0===e.end?Z:R`<div
            class="bar-hover"
            style="left:${cA(l(e.start)/Za)};width:${cA((l(e.end)-l(e.start))/Za)}"
          ></div>`})():Z,v=Bc(e.raw)?Vc(e,t.range,o.map(e=>e.points.filter(e=>!e.carried))):void 0;return R`<div
    class="trend-graph ${v?"hoverable":""}"
    style=${a}
    @pointerdown=${v?.move}
    @pointermove=${v?.move}
    @pointerleave=${v?.leave}
    @pointercancel=${v?.leave}
  >
    ${ii(d,h,u)} ${i?function(e,t,o){const n=e.length,r=e.flatMap(({series:e,y:r},a)=>{const i=Math.min(Va,Math.max(0,r(0)));return e.points.filter(e=>null!==e.v&&!e.carried&&void 0!==e.start&&void 0!==e.end).map(s=>{const l=t(s.start)/Za,c=(t(s.end)-t(s.start))/Za,d=Math.min(Va,Math.max(0,r(s.v))),u=d>i,h=e.color??je(Fe(s.v,e.entity.bands).color),p=`(${cA(c)} - ${o}px) / ${n}`;return R`<div
          class="trend-col ${u?"down":""}"
          style="left:calc(${cA(l)} + ${o/2}px + ${a} * ${p});width:max(1px, calc(${p}));
            top:${cA(Math.min(d,i)/Va)};height:${cA(Math.abs(i-d)/Va)};background:${h}"
        ></div>`})});return R`<div class="trend-cols">${r}</div>`}(c,l,n.barSpacing):Z} ${m} ${y}
    ${f} ${"never"===n.points?Z:g}
  </div>`}(e,n,s,t,l);return R`<div class="trend ${t.group?"group":""} ${"none"===t.graph?"no-graph":""}">
    <div class="trend-top">
      ${u} ${_===Z?Z:R`<div class="trend-nav">${_}</div>`} ${g}
      ${mA(a,t,e,"history"===n.source&&!n.group&&0===t.pointsPerHour)}
      ${v}
    </div>
    ${b}
  </div>`}};function gA(e,t,o=!1){const n=new Map;e.forEach((e,r)=>{const a=t[r];null!==e.v&&Number.isFinite(e.v)&&a>0&&(!o||0!==e.v)&&n.set(e.v,(n.get(e.v)??0)+a)});const r=[...n.values()].reduce((e,t)=>e+t,0);if(!(r>0))return[];const a=[];let i=0;for(const s of[...n.keys()].sort((e,t)=>t-e)){const e=Math.min(1,i+n.get(s)/r);a.push({v:s,from:i,to:e}),i=e}return a[a.length-1].to=1,a}function yA(e,t){if(0===e.length)return;let o=0,n=e.length-1;for(;o<n;){const r=o+n>>1;e[r].to<t?o=r+1:n=r}return e[o].v}function vA(e,t){let o=0;for(const n of e){if(n.v<=t)break;o=n.to}return o}function _A(e){if(null==e||""===e)return[];const t="number"==typeof e?[e]:Array.isArray(e)?e:"string"==typeof e?e.split(/[\s,;]+/):void 0;if(!t)return;const o=[];for(const n of t){if("string"==typeof n&&""===n.trim())continue;const e="number"==typeof n?n:"string"==typeof n?Number(n):NaN;if(!Number.isFinite(e))return;o.push(e)}return o}const bA=e=>Math.round(1e4*e)/100+"%";function xA(e,t){const o=100*e;return`${Wt(o,o>0&&o<1?1:0,t)}%`}const wA=(e,t,o)=>Bt(Wt(e,t.entity.decimals,o),t.entity.unit);function $A(e){const t=String(e);if(t.includes("e"))return 0;const o=t.indexOf(".");return o<0?0:Math.min(6,t.length-o-1)}function kA(e,t,o,n){const r=Ze(o,"duration_marker",{value:Bt(Wt(e,$A(e),o),t.series.entity.unit),share:xA(vA(t.steps,e),o)});return n?`${t.series.entity.name}: ${r}`:r}const MA=Mf.map(e=>"x_axis"===e.name?{...e,name:"xy_x_axis"}:e),zA=[...pf,{name:"duration_markers",path:["markers"]},{name:"duration_skip_zero",path:["skip_zero"],default:!1},...MA,...$f];const EA=[{name:"series_color",path:["color"]}],SA=[{name:"series_color",selector:{text:{}}}],AA={layout:"chart",group:"distribution",height:240,styles:a`
    ${si}
    ${nc}
    ${Jc}
    ${cc}
    ${Wg}
    .plot .curve {
      fill: none;
      stroke-width: 2px;
      stroke-linejoin: round;
    }
    .plot .curve-fill {
      fill-opacity: 0.15;
      stroke: none;
    }
    .plot .marker line {
      stroke: var(--primary-text-color);
      stroke-opacity: 0.55;
      stroke-dasharray: 3 3;
      stroke-width: 1px;
    }
    .marker-layer {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .marker-dot {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--card-background-color, #fff);
      transform: translate(-50%, -50%);
    }
    .marker-label {
      position: absolute;
      left: 100%;
      bottom: 100%;
      margin-left: 4px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.2;
      white-space: nowrap;
      color: var(--primary-text-color);
      text-shadow: 0 0 3px var(--card-background-color, #fff);
    }
    .marker-label.end {
      left: auto;
      right: 100%;
      margin-left: 0;
      margin-right: 4px;
    }
    .marker-list {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding-top: 6px;
      font-size: 0.8125em;
      color: var(--secondary-text-color);
    }
    .frame.compact .marker-list {
      padding-top: 2px;
    }
  `,thumbnail:()=>q`
    <path d="M6 6 C14 8 18 14 24 22 S36 34 58 35 V36 H6 Z" fill="var(--primary-color, #03a9f4)" fill-opacity="0.2" />
    <path d="M6 6 C14 8 18 14 24 22 S36 34 58 35" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="2" />
    <path d="M6 22 H24 V36" fill="none" stroke="var(--secondary-text-color, #727272)" stroke-width="1" stroke-dasharray="2 2" />
    <path d="M4 37 H60" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate(e){if(Xa(e),Fs(e),Zc(e),ac(e),void 0===_A(e.markers))throw new Error('"markers" must be a number or a list of numbers');if(void 0!==e.skip_zero&&"boolean"!=typeof e.skip_zero)throw new Error('"skip_zero" must be true or false')},editor:function(e){const t=e.hass,o=Tf(`duration_curve|${ff(e.config)}`,t,()=>[...gf(t,e.config),{name:"duration_markers",selector:{text:{}}},{name:"duration_skip_zero",selector:{boolean:{}}},...zf(t).map(e=>"grid"===e.type?{...e,schema:e.schema.map(e=>"x_axis"===e.name?{...e,name:"xy_x_axis"}:e)}:e),...kf(t)]);return Rf(e,"chart",o,zA)},entityFields:()=>({schema:SA,fields:EA}),disconnect(e){ni(e),Xl(e),Dg(e)},render:function(e){const t=Date.now(),o={markers:_A((n=e.raw).markers)??[],skipZero:!0===n.skip_zero};var n;const r=Ja(e,t),a=ti(r,e),i=ri(r,e),s=a===Z&&i===Z?Z:R`${a}${i}`,l=ic(e.raw),c=Math.min(r.range.end,t),d=r.series.map(e=>({series:e,steps:gA(e.points,u_(e.points,{mode:"time",until:c,statistics:"statistics"===r.source}),o.skipZero)})),u=d.filter(e=>e.steps.length>0),h=ai(r,e)??(0===u.length?ai({...r,series:[]},e):void 0);if(h)return sc("over"===l.header?{...l,header:"above"}:l,s,h);const p=u.flatMap(e=>e.steps.map(e=>e.v)),m=Math.min(...p),f=Math.max(...p),g=Fg(e,[0,100],[m,f],{x:{min:0,max:100},yFloor:m>=0?0:void 0}),{scales:y}=g,[v,_]=y.domain,b=y.y(Math.min(_,Math.max(v,0))),x=e=>e>=Math.min(v,_)&&e<=Math.max(v,_),w=q`${u.map(e=>{const t=function(e,t=400){if(0===e.length)return[];if(2*e.length<=t)return e.flatMap(e=>[[e.from,e.v],[e.to,e.v]]);const o=[];for(let n=0;n<t;n++){const r=n/(t-1);o.push([r,yA(e,r)])}return o}(e.steps).map(([e,t])=>[y.x(100*e),y.y(t)]),o=t.map(([e,t],o)=>`${o?"L":"M"}${Math.round(100*e)/100},${Math.round(100*t)/100}`).join(""),n=`${o}L1000,${b}L0,${b}Z`;return q`<g class="series" data-series=${e.series.index}>
      <path class="curve-fill" d=${n} fill=${e.series.color}></path>
      <path class="curve" d=${o} stroke=${e.series.color}></path>
    </g>`})}${o.markers.filter(x).map(e=>{const t=u.map(t=>vA(t.steps,e)),o=Math.max(...t),n=y.y(e);return q`<g class="marker">
      <line x1="0" x2=${y.x(100*o)} y1=${n} y2=${n}></line>
      ${t.map(e=>e>0?q`<line x1=${y.x(100*e)} x2=${y.x(100*e)} y1=${n} y2=${b}></line>`:Z)}
    </g>`})}`,$=1===u.length&&"over"!==l.header,k=o.markers.filter(x).flatMap(t=>u.map(o=>{const n=vA(o.steps,t),r=y.x(100*n)/Za,a=y.y(t)/Va;return R`<span class="marker-dot" style="left:${bA(r)};top:${bA(a)};background:${o.series.color}"
        >${$?R`<span class="marker-label ${function(e,t){const o=t>0?t:500;return e*o+190>o&&e>.5}(r,Kl(e))?"end":""}"
                >${kA(t,o,e.hass,!1)}</span
              >`:Z}</span
      >`})),M=$?o.markers.filter(e=>!x(e)):o.markers,z=u.length>1,E=M.length?R`<div class="marker-list">
        ${u.flatMap(t=>M.map(o=>R`<span>${kA(o,t,e.hass,z)}</span>`))}
      </div>`:Z,S=Bc(e.raw),A=S?Pg(e.host):void 0;let j=Z;if(void 0!==A){const t=A/100,o=yA(u[0].steps,t);j=Hg({x:t,y:y.y(o)/Va,plotWidth:Kl(e),title:Ze(e.hass,"duration_tooltip",{share:xA(t,e.hass)}),dot:u[0].series.color,rows:u.map(o=>({color:o.series.color,name:o.series.entity.name,value:wA(yA(o.steps,t),o.series,e.hass)}))})}const C=[Ze(e.hass,"chart_aria",{style:Ze(e.hass,"editor_style_duration_curve"),names:r.series.map(e=>e.entity.name).join(", ")}),...u.flatMap(t=>o.markers.map(o=>kA(o,t,e.hass,z)))].join(". ");return sc(l,s,R`${oc({axes:g,ctx:e,content:w,label:C,xLabel:t=>`${Wt(t,0,e.hass)}%`,overlay:R`${"over"===l.header?lc(s):Z}
        <div class="marker-layer" aria-hidden="true">${k}</div>
        ${j}`,hover:S?Ug(e,e=>Math.round(100*e)):void 0})}
    ${E}`)}},jA=["bars","gauges","history","totals","compare","distribution"];function CA(e){return"chart"===e.layout}const NA={bar:Mg,thin:Pb,segmented:Nb,tank:Lb,battery:Ob,ring:$b,needle:H_,arc:kb,line:rv,column:mg,area:kg,combined:pv,pie:fb,rings:Ab,pictograph:lb,waffle:qb,histogram:x_,scatter:jb,bubble:Sy,heatmap:Pv,spiral:s_,box:Qg,funnel:Qb,radar:Sx,polar_area:Lx,treemap:tw,marimekko:yw,sunburst:Tw,icicle:Ow,grouped_bars:Xw,bullet:t$,lollipop:i$,waterfall:f$,slope:z$,dumbbell:W$,range_area:Y$,sparkline:nk,streamgraph:vk,candlestick:Sk,violin:yM,beeswarm:jM,strip_plot:DM,sankey:XM,chord:sz,timeline:kz,state_duration:Uz,climate:sE,wind_rose:NE,day_clock:dS,cycle_plot:TS,trend:fA,duration_curve:AA},LA={number:{mode:"box",step:"any"}},FA={entity:{domain:["sensor","input_number","number"]}};function TA(e){return null==e||""===e?"default":"number"==typeof e||""!==e.trim()&&Number.isFinite(Number(e))?"number":"entity"}class OA extends le{constructor(){super(...arguments),this.languageController=new Up(this)}willUpdate(e){e.has("value")&&"default"!==TA(this.value)&&(this._mode=void 0)}updated(){this.setAttribute("mode",this._currentMode)}_modeSelectorFor(){const e=(e,t)=>Ze(this.hass,e,t),t=[{value:"default",label:e("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:e("editor_limit_number")},{value:"entity",label:e("editor_limit_entity")}],o=t.map(e=>e.label).join("|");return this._modeSelector?.key!==o&&(this._modeSelector={key:o,selector:{select:{mode:"dropdown",options:t}}}),this._modeSelector.selector}get _currentMode(){return this._mode??TA(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e}}))}_modeChanged(e){e.stopPropagation();const t=e.detail?.value;t&&t!==this._currentMode&&(this._mode=t,void 0!==this.value&&this._emit(void 0))}_numberChanged(e){e.stopPropagation();const t=e.detail?.value,o="number"==typeof t?t:""===t||null==t?NaN:Number(t);this._mode="number",this._emit(Number.isFinite(o)?o:void 0)}_entityChanged(e){e.stopPropagation();const t=e.detail?.value;this._mode="entity",this._emit("string"==typeof t&&""!==t?t:void 0)}render(){const e=e=>Ze(this.hass,e),t=this._currentMode;return R`<ha-selector
        .required=${!0}
        data-role="mode"
        .hass=${this.hass}
        .label=${this.label}
        .selector=${this._modeSelectorFor()}
        .value=${t}
        @value-changed=${this._modeChanged}
      ></ha-selector>
      ${"number"===t?R`<ha-selector
              .required=${!1}
              data-role="number"
              .hass=${this.hass}
              .label=${e("editor_limit_number")}
              .selector=${LA}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===t?R`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${e("editor_limit_entity")}
                .selector=${FA}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:Z}`}}OA.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},OA.styles=a`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
    /* With no number or entity to enter, the choice takes the whole line. */
    :host([mode='default']) {
      grid-template-columns: minmax(0, 1fr);
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",OA);const PA=/[A-Za-z_][A-Za-z0-9_]*/g,DA=new Set(["min","max","abs","round"]);function UA(e){if(!e)return[];try{return it(at(e))}catch{return[...new Set((e.match(PA)??[]).filter(e=>!DA.has(e)))]}}const IA=new Map;function HA(e,t,o,n){const r=UA(t.formula),a={formula:t.formula??""};for(const s of r)a[`var_${s}`]=t.vars?.[s]??"";const i=t.formula?function(e){try{return void ct(e)}catch(t){return t.message}}(t):void 0;return R`<div role="group" aria-labelledby="formula-${o}">
    <div class="sub-heading" id="formula-${o}">${Ze(e,"editor_formula_heading")}</div>
    <ha-form
      data-section="entity-formula"
      .hass=${e}
      .data=${a}
      .schema=${function(e,t){const o=`${Be(t)}|${e.join(",")}`;let n=IA.get(o);return n||(n=[{name:"formula",selector:{text:{}}},...e.map(e=>({name:`var_${e}`,selector:{entity:{}}}))],IA.size>100&&IA.clear(),IA.set(o,n)),n}(r,e)}
      .computeLabel=${t=>"formula"===t.name?Ze(e,"editor_formula"):Ze(e,"editor_formula_var",{name:t.name.slice(4)})}
      .computeHelper=${t=>"formula"===t.name?Ml(e,"editor_formula"):void 0}
      @value-changed=${e=>{e.stopPropagation();const o=function(e,t){const o={...e},n="string"==typeof t.formula?t.formula:"";if(""===n.trim())return delete o.formula,delete o.vars,o;o.formula=n;const r={};for(const a of UA(n)){const e=t[`var_${a}`];"string"==typeof e&&e&&(r[a]=e)}return Object.keys(r).length?o.vars=r:delete o.vars,o}(t,e.detail?.value??{});o.formula===t.formula&&JSON.stringify(o.vars)===JSON.stringify(t.vars)||n(o)}}
    ></ha-form>
    ${i?R`<ha-alert class="warning" data-warning="formula" alert-type="warning">${i}</ha-alert>`:Z}
  </div>`}const WA=["min","max","target"];function RA(e,t,o){const n=t&&!o?e?.states[t]?.attributes?.unit_of_measurement:void 0;return"string"==typeof n&&n?n:void 0}class qA extends le{constructor(){super(),this.languageController=new Up(this),this._computeLabel=e=>this._t(`editor_${e.name}`),this._computeHelper=e=>Ml(this.hass,`editor_${e.name}`),this._expanded=new Set}_t(e,t){return Ze(this.hass,e,t)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(e){e.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e.entities??[]}}))}_set(e,t,o){this._emit(vi(this._asConfig,e,t,o))}_replace(e,t){const o=[...this.entities??[]];if(void 0===o[e])return;const n=Object.keys(t);o[e]=1===n.length&&"entity"===n[0]?t.entity:t,this._emit({type:"",entities:o})}_move(e,t){const o=new Set;for(const n of this._expanded)o.add(n===e?t:n===t?e:n);this._expanded=o,this._emit(function(e,t,o){const n=[...e.entities??[]];if(t<0||t>=n.length||t===o)return e;const[r]=n.splice(t,1);return n.splice(Math.max(0,Math.min(o,n.length)),0,r),{...e,entities:n}}(this._asConfig,e,t))}_remove(e){const t=new Set;for(const o of this._expanded)o!==e&&t.add(o>e?o-1:o);this._expanded=t,this._emit(function(e,t){const o=[...e.entities??[]];return t<0||t>=o.length?e:(o.splice(t,1),{...e,entities:o})}(this._asConfig,e))}_toggle(e){const t=new Set(this._expanded);t.delete(e)||t.add(e),this._expanded=t}_add(e){e.stopPropagation();const t=e.detail?.value;"string"==typeof t&&""!==t&&(e.target.value="",this._emit(function(e,t){return{...e,entities:[...e.entities??[],t]}}(this._asConfig,t)))}_formChanged(e,t,o){o.stopPropagation();const n=this.entities?.[e];if(void 0===n)return;const r="string"==typeof n?{entity:n}:n,a=is(r,t,o.detail?.value??{});if(a===r)return;const i=[...this.entities??[]],s=Object.keys(a);i[e]=1===s.length&&"entity"===s[0]?a.entity:a,this._emit({type:"",entities:i})}_rowLabel(e){const t=this.hass?.states[e];return t?{text:t.attributes.friendly_name||e,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:e}),missing:!0}:{text:e,missing:!1}}_notNumber(e,t){if(!this.numeric||e.attribute||e.formula)return Z;const o=this.hass?.states[e.entity]?.state;return void 0===o||["unavailable","unknown",""].includes(o)||Number.isFinite(Number(o))?Z:R`<ha-alert class="warning" data-warning="not-number" alert-type="warning"
      >${this._t("editor_warn_not_number",{entity:t,state:o})}</ha-alert
    >`}_form(e,t,o,n,r){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${as(o,r)}
      .schema=${n}
      .computeLabel=${this._computeLabel}
      .computeHelper=${this._computeHelper}
      @value-changed=${e=>this._formChanged(t,r,e)}
    ></ha-form>`}_renderOverrides(e,t){const o=e=>t=>{t.stopPropagation(),e(t.detail?.value)};return R`<div class="overrides">
      ${this._form("entity-attribute",t,e,function(e){let t=Zi.get(e);return t||(t=[{name:"attribute",selector:{attribute:{entity_id:e}}}],Zi.set(e,t)),t}(e.entity),Pi)}
      ${HA(this.hass,e,t,e=>this._replace(t,e))}
      ${this._form("entity-text",t,e,Xi(RA(this.hass,e.entity,e.attribute)),Oi)}
      ${this.chartFields?this._form("entity-chart",t,e,this.chartFields.schema,this.chartFields.fields):Z}
      ${this.transformFields?this._form("entity-transform",t,e,this.transformFields.schema,this.transformFields.fields):Z}
      ${this.conditionFields?R`<div role="group" aria-labelledby="when-${t}">
              <div class="sub-heading" id="when-${t}">${this._t("editor_when_heading")}</div>
              ${this._form("entity-condition",t,e,this.conditionFields.schema,this.conditionFields.fields)}
            </div>`:Z}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${e.icon??""}
        @value-changed=${o(e=>this._set(t,"icon",e))}
      ></ha-icon-picker>
      ${WA.map(n=>R`<cd-limit-field
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
        .unit=${e.unit??this.unit??RA(this.hass,e.entity,e.attribute)}
        @value-changed=${o(e=>this._set(t,"severity",e))}
      ></cd-bands-editor>
      ${this._form("entity-actions",t,e,qi,Wi)}
    </div>`}_renderRow(e,t,o){const n=yi(e),r="string"==typeof e?{entity:e}:e,a=this._rowLabel(n),i=this._expanded.has(t),s=e=>this._t("editor_row_action",{action:this._t(e),entity:a.text});return R`<div class="entity">
      ${a.missing?R`<span class="label missing">${a.text}</span>`:Z}
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${hi(n)}
          allow-custom-entity
          @value-changed=${e=>{e.stopPropagation(),this._set(t,"entity",e.detail?.value),this.requestUpdate()}}
        ></ha-entity-picker>
        <ha-icon-button
          class="up"
          .path=${"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
          .label=${s("editor_move_up")}
          .disabled=${0===t}
          @click=${()=>this._move(t,t-1)}
        ></ha-icon-button>
        <ha-icon-button
          class="down"
          .path=${"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
          .label=${s("editor_move_down")}
          .disabled=${t===o-1}
          @click=${()=>this._move(t,t+1)}
        ></ha-icon-button>
        <ha-icon-button
          class="remove"
          .path=${zl}
          .label=${s("editor_remove_entity")}
          @click=${()=>this._remove(t)}
        ></ha-icon-button>
        <ha-icon-button
          class="expand"
          .path=${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
          .label=${s(i?"editor_hide_options":"editor_show_options")}
          aria-expanded=${i?"true":"false"}
          @click=${()=>this._toggle(t)}
        ></ha-icon-button>
      </div>
      ${this._notNumber(r,a.text)} ${i?this._renderOverrides(r,t):Z}
    </div>`}render(){const e=this.entities??[];return R`${e.map((t,o)=>this._renderRow(t,o,e.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}qA.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chartFields:{attribute:!1},transformFields:{attribute:!1},conditionFields:{attribute:!1},numeric:{attribute:!1},_expanded:{state:!0}},qA.styles=a`
    :host {
      display: block;
      /* Rows rearrange for the editor's own width (a phone, or a narrow dialog). */
      container-type: inline-size;
    }
    .entity {
      border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      padding: 8px 0;
    }
    .label {
      display: block;
      font-size: 0.875em;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--error-color, #db4437);
    }
    .warning {
      display: block;
      margin-top: 8px;
    }
    .header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
    }
    .header ha-entity-picker {
      flex: 1 1 200px;
      min-width: 0;
    }
    /* Narrow: the picker takes the whole line and the row's buttons go under it. */
    @container (max-width: 420px) {
      .header ha-entity-picker {
        flex-basis: 100%;
      }
    }
    .sub-heading {
      margin: 8px 0 4px;
      font-weight: 500;
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
      padding-block: 8px;
      padding-inline-start: 12px;
      border-inline-start: 2px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      margin-top: 8px;
    }
    .add {
      display: block;
      margin-top: 8px;
    }
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",qA);const BA=[{name:"export",path:["export"],default:!1}],ZA=["treemap","sunburst","icicle","radar","marimekko"],VA=["ring","arc","needle"];async function YA(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]}),o=t?.constructor;await(o?.getConfigElement?.())}catch{}}class GA extends le{constructor(){super(...arguments),this.languageController=new Up(this),this._label=e=>Ze(this.hass,e),this._computeLabel=e=>Ze(this.hass,`editor_${e.name}`),this._computeHelper=e=>Ml(this.hass,`editor_${e.name}`),this._computeRuleLabel=e=>Ze(this.hass,`editor_rule_${e.name.slice(e.name.indexOf("_")+1)}`)}setConfig(e){void 0===this._openEntities&&(this._openEntities=!e?.entities?.length),this._config=e}connectedCallback(){super.connectedCallback(),YA()}_commit(e){this._config=e,function(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}(this,e)}_formChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{};this._commit(is(this._config,e,o))}_form(e,t,o){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${as(this._config,o)}
      .schema=${t}
      .computeLabel=${this._computeLabel}
      .computeHelper=${this._computeHelper}
      @value-changed=${e=>this._formChanged(o,e)}
    ></ha-form>`}_panel(e,t,o){return R`<ha-expansion-panel
      data-panel=${e}
      .header=${this._label(`editor_section_${e}`)}
      .secondary=${o??""}
      .expanded=${"entities"===e&&!0===this._openEntities}
      outlined
    >
      <div class="panel section-${e}">${t}</div>
    </ha-expansion-panel>`}_summary(e){const t=this._config;if(t)switch(e){case"entities":{const e=t.entities?.length??0,o=t.include?` · ${this._label("editor_summary_matching")}`:"";if(0===e&&!o)return this._label("editor_summary_no_entities");return`${1===e?this._label("editor_summary_entity_one"):Ze(this.hass,"editor_summary_entities",{count:e})}${o}`}case"style":return this._label(`editor_style_${t.style??"bar"}`);case"limits":{const e=(e,o)=>{const n=t[e];return"default"===TA(n)?o:String(n)},o=Ze(this.hass,"editor_summary_limits",{min:e("min","0"),max:e("max","100")}),n=e("target","");return n?`${o} · ${Ze(this.hass,"editor_summary_target",{target:n})}`:o}case"colours":{const e=t.severity,o=Vp(e);if("none"===o)return this._label("editor_summary_no_bands");if("custom"===o){const t=e?.length??0;return 1===t?this._label("editor_summary_band_one"):Ze(this.hass,"editor_summary_bands",{count:t})}return this._label(`editor_preset_${o}`)}}}_subChanged(e,t){t.stopPropagation(),this._config&&this._commit(gi(this._config,e,t.detail?.value))}_chartFields(){const e=NA[this._config?.style??"bar"];return e&&CA(e)&&this._config?e.entityFields?.(this.hass,this._config):void 0}_transformFields(){if(!this._config)return;const e=this._config.style??"bar";return Pl(e,this.hass,this._config,function(e,t,o){const n=o?.fields.find(ca);if(!o||!n)return o;const r=function(e){return(e.entities??[]).some(e=>"object"==typeof e&&"rolling"===e.transform)}(t),a=`${Be(e)}|${r}`;let i=da.get(o.schema);i||(i=new WeakMap,da.set(o.schema,i));let s=i.get(o.fields);s||(s=new Map,i.set(o.fields,s));const l=s.get(a);if(l)return l;const c=t=>Ze(e,t),d={value:"rolling",label:c("editor_rolling_transform_rolling")};let u=o.schema.map(e=>{const t=e;return t.name!==n.name?e:{...t,selector:{select:{...t.selector.select,options:[...t.selector.select.options,d]}}}}),h=o.fields;r&&(u=[...u,{type:"grid",name:"",schema:[{name:"rolling_window",selector:{text:{}}},{name:"rolling_stat",selector:{select:{mode:"dropdown",options:ra.map(e=>({value:e,label:c(`editor_rolling_stat_${e}`)}))}}}]},{name:"rolling_raw",selector:{boolean:{}}}],h=[...h,{name:"rolling_window",path:["transform_window"]},{name:"rolling_stat",path:["transform_stat"],default:"mean"},{name:"rolling_raw",path:["transform_raw"],default:!1}]);const p={schema:u,fields:h};return s.set(a,p),p}(this.hass,this._config,function(e,t,o,n){if(!Vr.includes(e))return n;const r=n??na,a=function(e){return(e.entities??[]).some(e=>"object"==typeof e&&"derivative"===e.transform)}(o),i=`${Be(t)}|${a}`;let s=oa.get(r.schema);s||(s=new WeakMap,oa.set(r.schema,s));let l=s.get(r.fields);l||(l=new Map,s.set(r.fields,l));const c=l.get(i);if(c)return c;const d=e=>Ze(t,e),u={value:"derivative",label:d("editor_derivative_transform_derivative")},h=r.fields.find(ta);let p,m=r.fields;if(h)p=r.schema.map(e=>{const t=e;return t.name!==h.name?e:{...t,selector:{select:{...t.selector.select,options:[...t.selector.select.options,u]}}}});else{const e={name:"derivative_transform",selector:{select:{mode:"dropdown",options:[{value:"none",label:d("editor_derivative_transform_none")},u]}}};p=[...r.schema,e],m=[...m,{name:"derivative_transform",path:["transform"],default:"none"}]}a&&(p=[...p,{type:"grid",name:"",schema:[{name:"derivative_unit_time",selector:{select:{mode:"dropdown",options:Br.map(e=>({value:e,label:d(`editor_derivative_unit_time_${e}`)}))}}},{name:"derivative_smoothing",selector:{number:{min:1,max:100,step:1,mode:"box"}}}]},{name:"derivative_smoothing_time",selector:{text:{}}}],m=[...m,{name:"derivative_unit_time",path:["transform_unit_time"],default:"h"},{name:"derivative_smoothing",path:["transform_smoothing"],default:1},{name:"derivative_smoothing_time",path:["transform_smoothing_time"]}]);const f={schema:p,fields:m};return l.set(i,f),f}(e,this.hass,this._config,function(e,t,o,n){if(!hr.includes(e))return n;const r=n??_r,a=function(e){return(e.entities??[]).some(e=>"object"==typeof e&&"cumulative"===e.transform)}(o),i=a&&function(e){return(e.entities??[]).some(e=>"object"==typeof e&&"cumulative"===e.transform&&"billing"===e.transform_reset)}(o),s=`${Be(t)}|${a}|${i}`;let l=vr.get(r.schema);l||(l=new WeakMap,vr.set(r.schema,l));let c=l.get(r.fields);c||(c=new Map,l.set(r.fields,c));const d=c.get(s);if(d)return d;const u=e=>Ze(t,e),h={value:"cumulative",label:u("editor_cumulative_transform_cumulative")},p=r.fields.find(yr);let m,f=r.fields;if(p)m=r.schema.map(e=>{const t=e;return t.name!==p.name?e:{...t,selector:{select:{...t.selector.select,options:[...t.selector.select.options,h]}}}});else{const e={name:"cumulative_transform",selector:{select:{mode:"dropdown",options:[{value:"none",label:u("editor_cumulative_transform_none")},h]}}};m=[...r.schema,e],f=[...f,{name:"cumulative_transform",path:["transform"],default:"none"}]}a&&(m=[...m,{name:"cumulative_reset",selector:{select:{mode:"dropdown",options:ur.map(e=>({value:e,label:u(`editor_cumulative_reset_${e}`)}))}}}],f=[...f,{name:"cumulative_reset",path:["transform_reset"],default:"none"}]),i&&(m=[...m,{name:"cumulative_billing_day",selector:{number:{min:1,max:28,step:1,mode:"box"}}}],f=[...f,{name:"cumulative_billing_day",path:["transform_reset_day"],default:1}]);const g={schema:m,fields:f};return c.set(s,g),g}(e,this.hass,this._config,void 0))))}renderEntities(){return R`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        .transformFields=${this._transformFields()}
        .conditionFields=${e=this._config?.style,void 0!==e&&ms.includes(e)?ys:void 0}
        .numeric=${!CA(NA[this._config?.style??"bar"]??NA.bar)}
        @value-changed=${e=>this._subChanged(["entities"],e)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`;var e}_ruleData(e){const t=this._config?.[e],o={};if(!t||"object"!=typeof t)return o;for(const[n,r]of Object.entries(t))o[`${e}_${n}`]=Array.isArray(r)?r:[r];return o}_ruleChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{},n=this._ruleData(e);let r=this._config;for(const a of Ji[e]){const t=`${e}_${a}`,i=Array.isArray(o[t])?o[t]:[];rs(n[t]??[],i)||(r=gi(r,[e,a],i.length?i:void 0))}r!==this._config&&this._commit(r)}_ruleForm(e){return R`<div role="group" aria-labelledby="rules-${e}" aria-describedby="rules-${e}-help">
      <div class="rules-heading" id="rules-${e}">${this._label(`editor_${e}_heading`)}</div>
      <p class="rules-help" id="rules-${e}-help">${this._label(`editor_${e}_help`)}</p>
      <ha-form
        data-section=${e}
        .hass=${this.hass}
        .data=${this._ruleData(e)}
        .schema=${ts(e,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${t=>this._ruleChanged(e,t)}
      ></ha-form>
    </div>`}renderLimits(){const e=[["min","0"],["max","100"],["target",this._label("editor_none")]];return R`${this._limitsWarning()}
    ${e.map(([e,t])=>R`<cd-limit-field
          data-limit=${e}
          .hass=${this.hass}
          .label=${this._label(`editor_${e}`)}
          .value=${this._config?.[e]}
          .defaultLabel=${t}
          @value-changed=${t=>this._subChanged([e],t)}
        ></cd-limit-field>`)}`}_limitsWarning(){const e=(e,t)=>{const o=this._config?.[e],n=TA(o);return"default"===n?t:"number"===n?Number(o):void 0},t=e("min",0),o=e("max",100);return void 0===t||void 0===o||t<o?Z:R`<ha-alert class="warning" data-warning="limits" alert-type="warning"
      >${Ze(this.hass,"editor_warn_min_max",{min:t,max:o})}</ha-alert
    >`}renderColours(){return R`${this._toggles(Ci)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${e=>this._subChanged(["severity"],e)}
      ></cd-bands-editor>`}_firstEntityUnit(){const e=this._config?.entities?.[0];return"string"==typeof e?RA(this.hass,e):e?.unit??RA(this.hass,e?.entity,e?.attribute)}_selectStyle(e){if(!this._config)return;if(e===(this._config.style??"bar"))return;let t=gi(this._config,["style"],"bar"===e?void 0:e);const o=[],n=this._label(`editor_style_${e}`),r=[].concat(t.group_by??[]),a=r.length>0&&r.every(e=>ex.includes(e));if(r.length>0&&a!==ZA.includes(e)){const e=r.map(e=>this._label(`editor_group_by_${String(e)}`)).join(", ");o.push(Ze(this.hass,"editor_notice_group_by",{by:e,style:n})),t=gi(t,["group_by"],void 0)}"battery"===e&&void 0===t.sort&&(o.push(this._label("editor_notice_sorted")),t=gi(t,["sort"],"ascending")),this._notice=o.length?o.join(" "):void 0,this._focusStyle=e,this._commit(t)}_styleOrder(){return jA.flatMap(e=>jt.filter(t=>NA[t].group===e))}_styleKey(e){const t=this._styleOrder(),o=t.indexOf(e.target.dataset?.style);if(o<0)return;const n="rtl"===getComputedStyle(this).direction,r={ArrowDown:1,ArrowUp:-1,ArrowRight:n?-1:1,ArrowLeft:n?1:-1};let a;if(e.key in r)a=(o+r[e.key]+t.length)%t.length;else if("Home"===e.key)a=0;else{if("End"!==e.key)return;a=t.length-1}e.preventDefault(),this._focusStyle=t[a],this.updateComplete.then(()=>this.shadowRoot?.querySelector(`.style[data-style="${t[a]}"]`)?.focus())}renderStyle(){const e=this._config?.style??"bar",t=this._styleOrder(),o=this._focusStyle&&t.includes(this._focusStyle)?this._focusStyle:e;return R`<p class="style-purpose" aria-live="polite">
        <strong>${this._label(`editor_style_${e}`)}</strong> · ${this._label(`editor_style_purpose_${e}`)}
      </p>
      ${this._notice?R`<ha-alert class="notice" data-notice alert-type="info">${this._notice}</ha-alert>`:Z}
      <div
        class="style-groups"
        role="radiogroup"
        aria-label=${this._label("editor_section_style")}
        @keydown=${this._styleKey}
      >
        ${jA.map(t=>{const n=jt.filter(e=>NA[e].group===t);return n.length?R`<div role="group" aria-labelledby="style-group-${t}">
            <div class="style-group" id="style-group-${t}">${this._label(`editor_group_${t}`)}</div>
            <div class="styles" data-group=${t}>
              ${n.map(t=>{const n=NA[t],r=CA(n)?R`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                      ${n.thumbnail()}
                    </svg>`:ps(t),a=this._label(`editor_style_purpose_${t}`);return R`<button
                  type="button"
                  class="style"
                  role="radio"
                  data-style=${t}
                  title=${a}
                  aria-description=${a}
                  aria-checked=${e===t?"true":"false"}
                  tabindex=${o===t?"0":"-1"}
                  @click=${()=>this._selectStyle(t)}
                >
                  ${r}<span>${this._label(`editor_style_${t}`)}</span>
                </button>`})}
            </div>
          </div>`:Z})}
      </div>
      ${VA.includes(e)?R`<p class="gauge-help">${this._label("editor_gauge_help")}</p>
              ${this._form("gauge",function(e,t,o){const n="text"===o,r=`${Be(e)}|${t}|${n}`;let a=Ti.get(r);if(!a){const o={number:{min:-360,max:360,step:1,mode:"box",unit_of_measurement:"°"}};a=[{type:"grid",name:"",schema:[{name:"start_angle",selector:o},{name:"end_angle",selector:o}]},{name:"center",selector:{select:{mode:"dropdown",options:["value","band","name","text","none"].map(t=>({value:t,label:Ze(e,`editor_center_mode_${t}`)}))}}},...n?[{name:"center_text",selector:{text:{}}}]:[],..."needle"===t?[{name:"tick_labels",selector:{boolean:{}}}]:[],{name:"ghost",selector:{select:{mode:"dropdown",options:vt.map(t=>({value:t,label:Ze(e,`editor_ghost_${t}`)}))}}}],Ti.set(r,a)}return a}(this.hass,e,this._config?.center),Fi)}`:Z}`}renderChart(){const e=NA[this._config?.style??"bar"];if(!(e&&CA(e)&&e.editor&&this._config))return Z;const t=function(e){if(void 0!==e&&ms.includes(e))return fs.includes(e)?xs:bs}(this._config.style);return this._panel("chart",R`${e.editor({hass:this.hass,config:this._config,commit:e=>this._commit(e)})}
      ${t?R`<div role="group" aria-labelledby="when-card" aria-describedby="when-card-help">
              <div class="rules-heading" id="when-card">${this._label("editor_when_card_heading")}</div>
              <p class="rules-help" id="when-card-help">${this._label("editor_when_card_help")}</p>
              ${this._form("card-condition",t.schema,t.fields)}
            </div>`:Z}`)}renderDisplay(){const e=CA(NA[this._config?.style??"bar"]??NA.bar);return R`${this._toggles(e?[...ji,...BA]:ji)}
    ${this._form("display",function(e){const t=Be(e);return os?.language!==t&&(os={language:t,schema:Ki(e)}),os.schema}(this.hass),Ni)}`}_toggles(e){const t=as(this._config,e);return R`<div class="toggles">
      ${e.map(({name:o})=>{const n=this._label(`editor_${o}`),r=!0===t[o];return R`<div class="toggle">
          <span @click=${()=>this._toggle(e,o,!r)}>${n}</span
          ><ha-switch
            data-name=${o}
            aria-label=${n}
            .checked=${hi(r)}
            @change=${t=>this._toggle(e,o,t.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(e,t,o){if(!this._config)return;const n=as(this._config,e);this._commit(is(this._config,e,{...n,[t]:o}))}renderActions(){return this._form("actions",qi,Li)}render(){return this._config?R`<div class="title">${this._form("title",Ri,Ai)}</div>
      ${this._panel("entities",this.renderEntities(),this._summary("entities"))}
      ${this._panel("style",this.renderStyle(),this._summary("style"))} ${this.renderChart()}
      ${this._panel("limits",this.renderLimits(),this._summary("limits"))}
      ${this._panel("colours",this.renderColours(),this._summary("colours"))}
      ${this._panel("display",this.renderDisplay())} ${this._panel("actions",this.renderActions())}`:Z}}GA.properties={hass:{attribute:!1},_config:{state:!0},_notice:{state:!0},_focusStyle:{state:!0}},GA.styles=a`
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
    .style-purpose {
      margin: 0 0 12px;
      color: var(--secondary-text-color);
      font-size: 0.875em;
    }
    .style-purpose strong {
      color: var(--primary-text-color);
      font-weight: 500;
    }
    .notice,
    .warning {
      display: block;
      margin: 0 0 12px;
    }
    .style-group {
      margin: 16px 0 6px;
      font-size: 0.875em;
      font-weight: 500;
      color: var(--secondary-text-color);
    }
    .style-groups > [role='group']:first-child .style-group {
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
    .style[aria-checked='true'] {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -1px;
      border-color: transparent;
    }
    .style[aria-checked='true']:focus-visible {
      outline-offset: 2px;
    }
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",GA);const XA=a`
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
`,KA=["value","sparkline","ring","thin"],JA=[{name:"entity",path:["entity"]},{name:"style",path:["style"],default:"value"},{name:"attribute",path:["attribute"]},{name:"name",path:["name"]},{name:"show_name",path:["show_name"],default:!0},{name:"show_icon",path:["show_icon"],default:!0},{name:"hours",path:["hours"],default:24},{name:"icon",path:["icon"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]},{name:"color",path:["color"]}],QA=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],ej=new Map,tj=[["min","0"],["max","100"]];const oj=["tap_action","hold_action","double_tap_action"].map(e=>({name:e,selector:{ui_action:{}}}));class nj extends le{constructor(){super(...arguments),this.languageController=new Up(this),this._label=e=>Ze(this.hass,`editor_badge_${e.name}`)}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),YA()}_commit(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:e}}))}_formChanged(e,t){t.stopPropagation(),this._config&&this._commit(is(this._config,e,t.detail.value))}_optionChanged(e,t){t.stopPropagation(),this._config&&this._commit(gi(this._config,[e],t.detail.value))}_form(e,t,o){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${as(this._config,o)}
      .schema=${t}
      .computeLabel=${this._label}
      .computeHelper=${e=>Ml(this.hass,`editor_badge_${e.name}`)}
      @value-changed=${e=>this._formChanged(o,e)}
    ></ha-form>`}render(){if(!this._config)return Z;const e="string"==typeof this._config.entity?this._config.entity:void 0,t=this._config.unit??this.hass?.states[e??""]?.attributes?.unit_of_measurement;return R`${this._form("badge",function(e,t){const o=t.style??"value",n="string"==typeof t.entity?t.entity:"",r="value"===o&&!1!==t.show_icon,a=`${Be(e)}|${o}|${n}|${r}`;let i=ej.get(a);return i||(i=[{name:"entity",required:!0,selector:{entity:{}}},{name:"style",selector:{select:{mode:"dropdown",options:KA.map(t=>({value:t,label:Ze(e,`editor_badge_style_${t}`)}))}}},...n?[{name:"attribute",selector:{attribute:{entity_id:n}}}]:[],{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},..."sparkline"===o?[{name:"hours",selector:{number:{min:1,max:168,mode:"box",unit_of_measurement:"h"}}}]:[]]},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},..."value"===o?[{name:"show_icon",selector:{boolean:{}}}]:[]]},...r?[{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}}]:[],{type:"grid",name:"",schema:[{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]},{name:"color",selector:{text:{}}}],ej.set(a,i)),i}(this.hass,this._config),JA)}
      <div class="limits">
        ${tj.map(([e,t])=>R`<cd-limit-field
              data-limit=${e}
              .hass=${this.hass}
              .label=${Ze(this.hass,`editor_badge_${e}`)}
              .value=${this._config?.[e]}
              .defaultLabel=${t}
              @value-changed=${t=>this._optionChanged(e,t)}
            ></cd-limit-field>`)}
      </div>
      <div class="heading">${Ze(this.hass,"editor_badge_bands")}</div>
      <p class="help">${Ze(this.hass,"editor_badge_bands_help")}</p>
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config.severity}
        .unit=${t}
        @value-changed=${e=>this._optionChanged("severity",e)}
      ></cd-bands-editor>
      <div class="heading">${Ze(this.hass,"editor_badge_actions")}</div>
      ${this._form("actions",oj,QA)}`}}nj.properties={hass:{attribute:!1},_config:{state:!0}},nj.styles=a`
    :host {
      display: block;
    }
    .limits {
      display: grid;
      gap: 8px;
      margin-top: 16px;
    }
    .heading {
      margin-top: 24px;
      font-weight: 500;
    }
    .help {
      margin: 4px 0 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
  `,customElements.get("chartdeck-badge-editor")||customElements.define("chartdeck-badge-editor",nj);const rj=["value","sparkline","ring","thin"];class aj extends le{constructor(){super(...arguments),this.languageController=new Up(this),this._style="value",this._hours=24,this._watched=new Set}static getConfigElement(){return document.createElement("chartdeck-badge-editor")}static getStubConfig(e){const t=Object.values(e?.states??{}).filter(e=>e.entity_id.startsWith("sensor.")&&""!==e.state.trim()&&Number.isFinite(Number(e.state)));t.sort((e,t)=>e.entity_id.localeCompare(t.entity_id));const o=t.find(e=>"battery"===e.attributes?.device_class);return{type:"custom:chartdeck-badge",entity:(o??t[0])?.entity_id??"sensor.example",style:"ring"}}setConfig(e){const{config:t,style:o,hours:n}=function(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");if("string"!=typeof e.entity||!e.entity)throw new Error('"entity" is required');const t=e.style??"value";if(!rj.includes(t))throw new Error(`"style" must be one of: ${rj.join(", ")}`);const o=e.hours??24;if("number"!=typeof o||!Number.isFinite(o)||o<=0||o>168)throw new Error('"hours" must be a number of hours from 1 to 168');for(const u of["show_name","show_icon"])if(void 0!==e[u]&&"boolean"!=typeof e[u])throw new Error(`"${u}" must be true or false`);if(void 0!==e.color&&"string"!=typeof e.color)throw new Error('"color" must be a colour');const{type:n,entity:r,attribute:a,style:i,hours:s,show_name:l,show_icon:c,...d}=e;return{config:It({...d,type:"custom:chartdeck-card",entities:[a?{entity:r,attribute:a}:r],show:{name:!1!==l,icon:!1!==c,value:!0,target:!1,legend:!1}}),style:t,hours:o}}(e);this._config=t,this._style=o,this._hours=n,this._watched=tp(t),this._raw=e}shouldUpdate(e){if(0===e.size||!e.has("hass")||e.size>1)return!0;const t=e.get("hass"),o=this.hass;if(!t||!o)return!0;for(const n of this._watched)if(t.states[n]!==o.states[n])return!0;return t.themes?.darkMode!==o.themes?.darkMode||t.locale!==o.locale}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),cr(this),this._detach?.(),this._detach=void 0}updated(){const e=this.shadowRoot?.querySelector(".badge");e&&!this._detach&&(this._detach=Se(e,()=>this._item.config))}_spark(e,t){const o=Date.now(),n={start:o-36e5*this._hours,end:o},r={entity:e.entityId,attribute:e.config.attribute,...pt(e.config)};let a=lr(this,()=>this.requestUpdate()).get(this.hass,[r],n,"history").data.get(Zn(r))??[];const i=a[a.length-1];i&&null!==i.v&&i.t<o&&(a=[...a,{t:o,v:i.v}]);const s=function(e,t,o=44,n=20){const r=Dl(e,60),a=ws([r]);if(!a||t.end<=t.start)return"";const i=ks([t.start,t.end],[1,o-1]),s=ks($s(a,.1),[n-2,2]);return Ba(r).map(e=>qa(e.map(e=>[i(e.t),s(e.v)]),"smooth")).join(" ")}(a,n);return R`<svg class="spark" viewBox="0 0 ${44} ${20}" aria-hidden="true">
      ${s?q`<path d=${s} stroke=${t}></path>`:q`<line class="spark-empty" x1="2" x2=${42} y1=${10} y2=${10}></line>`}
    </svg>`}_visual(e,t){const o=e.available?e.position:0;switch(this._style){case"sparkline":return this._spark(e,t);case"ring":return R`<svg class="ring" viewBox="0 0 24 24" aria-hidden="true">
          <circle class="track" cx="12" cy="12" r="9.5"></circle>
          ${o>0?q`<circle class="fill" cx="12" cy="12" r="9.5" pathLength="100" stroke=${t}
                  style="stroke-dasharray: ${Math.round(1e3*o)/10} 100"></circle>`:Z}
        </svg>`;case"thin":return R`<div class="thin" aria-hidden="true">
          <div class="thin-fill" style="width: ${Math.round(1e3*o)/10}%; background: ${t}"></div>
        </div>`;default:return R`<div class="icon-wrap" style="--badge-color: ${t}" aria-hidden="true">
          ${this._config.show.icon?R`<ha-state-icon
                  class="icon"
                  .hass=${this.hass}
                  .stateObj=${e.stateObj}
                  .icon=${Zh(e)}
                ></ha-state-icon>`:R`<span class="dot"></span>`}
        </div>`}}render(){const e=this._config,t=this.hass;if(!e||!t||!this._raw)return Z;const o=ep(e,t)[0];this._item=o;const n=o.available?function(e,t){return Array.isArray(t.severity)&&t.severity.length?je(e.band.color):je(t.color??"primary")}(o,this._raw):"var(--disabled-text-color, var(--secondary-text-color))",r=Ee(o.config);return R`<div
      class="badge style-${this._style} ${r?"interactive":""} ${o.available?"":"unavailable"}"
      role=${r?"button":"img"}
      tabindex=${r?0:Z}
      aria-label=${o.label}
      title=${o.label}
    >
      ${this._visual(o,n)}
      <div class="info">
        <span class="value">${o.display}</span>
        ${e.show.name?R`<span class="name">${o.name}</span>`:Z}
      </div>
    </div>`}}aj.properties={hass:{attribute:!1},_raw:{state:!0}},aj.styles=a`
    :host {
      display: inline-block;
      --cd-badge-track: color-mix(in srgb, var(--primary-text-color, #212121) 12%, transparent);
    }
    @supports not (color: color-mix(in srgb, red 50%, white)) {
      :host {
        --cd-badge-track: var(--divider-color, rgba(127, 127, 127, 0.2));
      }
    }
    /* The look of Home Assistant's own badges: a 36 px pill on the card background. */
    .badge {
      display: flex;
      align-items: center;
      gap: 8px;
      box-sizing: border-box;
      height: var(--ha-badge-size, 36px);
      min-width: var(--ha-badge-size, 36px);
      padding: 0 12px 0 6px;
      border-radius: var(--ha-badge-border-radius, 18px);
      background: var(--ha-card-background, var(--card-background-color, #fff));
      border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color, #e0e0e0));
      box-shadow: var(--ha-card-box-shadow, none);
      color: var(--primary-text-color);
      -webkit-tap-highlight-color: transparent;
      user-select: none;
    }
    .badge.style-sparkline,
    .badge.style-thin {
      padding-left: 10px;
    }
    .badge.interactive {
      cursor: pointer;
    }
    .badge:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
      line-height: 1.2;
    }
    .value {
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }
    .name {
      font-size: 10px;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 120px;
    }
    .unavailable .value {
      color: var(--secondary-text-color);
      font-weight: 400;
    }
    .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: color-mix(in srgb, var(--badge-color) 20%, transparent);
      color: var(--badge-color);
    }
    .icon {
      --mdc-icon-size: 16px;
      display: flex;
    }
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--badge-color);
    }
    .ring {
      flex: none;
      width: 24px;
      height: 24px;
      transform: rotate(-90deg);
    }
    .ring circle {
      fill: none;
      stroke-width: 3px;
    }
    .ring .track {
      stroke: var(--cd-badge-track);
    }
    .ring .fill {
      stroke-linecap: round;
    }
    .thin {
      flex: none;
      width: 32px;
      height: 4px;
      border-radius: 2px;
      overflow: hidden;
      background: var(--cd-badge-track);
    }
    .thin-fill {
      height: 100%;
      border-radius: 2px;
    }
    .spark {
      flex: none;
      width: 44px;
      height: 20px;
      overflow: visible;
    }
    .spark path {
      fill: none;
      stroke-width: 1.5px;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
    .spark-empty {
      stroke: var(--cd-badge-track);
      stroke-width: 1.5px;
      stroke-dasharray: 2 3;
    }
  `,customElements.get("chartdeck-badge")||customElements.define("chartdeck-badge",aj);const ij=window.customBadges??=[];ij.some(e=>"chartdeck-badge"===e.type)||ij.push({type:"chartdeck-badge",name:"Chartdeck badge",description:"A value, sparkline, ring or thin bar in the badge row, with the card’s colour bands.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});const sj=["sparkline","column","bar"],lj=["auto","mean","sum","min","max","first","last","change"],cj=[{name:"style",path:["style"],default:"sparkline"},{name:"entity",path:["entity"]},{name:"attribute",path:["attribute"]},{name:"hours",path:["hours"],default:24},{name:"fill",path:["fill"],default:!0},{name:"aggregate",path:["aggregate"],default:"auto"},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]},{name:"color",path:["color"]}],dj=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],uj={style:"editor_badge_style",attribute:"editor_badge_attribute",hours:"editor_badge_hours",color:"editor_badge_color",style_sparkline:"editor_badge_style_sparkline",unit:"editor_badge_unit",decimals:"editor_badge_decimals",min:"editor_badge_min",max:"editor_badge_max",target:"editor_target",aggregate:"editor_aggregate",bands:"editor_badge_bands",actions:"editor_badge_actions",tap_action:"editor_badge_tap_action",hold_action:"editor_badge_hold_action",double_tap_action:"editor_badge_double_tap_action"},hj=e=>uj[e]??`editor_feature_${e}`;const pj=new Map;const mj=["tap_action","hold_action","double_tap_action"].map(e=>({name:e,selector:{ui_action:{}}}));class fj extends le{constructor(){super(...arguments),this.languageController=new Up(this),this._label=e=>Ze(this.hass,hj(e.name))}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),YA()}_commit(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:e}}))}_formChanged(e,t){t.stopPropagation(),this._config&&this._commit(is(this._config,e,t.detail.value))}_optionChanged(e,t){t.stopPropagation(),this._config&&this._commit(gi(this._config,[e],t.detail.value))}_form(e,t,o){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${as(this._config,o)}
      .schema=${t}
      .computeLabel=${this._label}
      .computeHelper=${e=>Ml(this.hass,hj(e.name))}
      @value-changed=${e=>this._formChanged(o,e)}
    ></ha-form>`}render(){if(!this._config)return Z;const e=this._config.style??"sparkline",t=this._config.entity||this.context?.entity_id,o=this._config.unit??this.hass?.states[t??""]?.attributes?.unit_of_measurement;return R`${this._form("feature",function(e,t,o){const n=t.style??"sparkline",r="string"==typeof t.entity&&t.entity||o||"",a=`${Be(e)}|${n}|${r}`;let i=pj.get(a);if(!i){const t="bar"!==n;i=[{name:"style",selector:{select:{mode:"dropdown",options:sj.map(t=>({value:t,label:Ze(e,hj(`style_${t}`))}))}}},{name:"entity",selector:{entity:{}}},...r?[{name:"attribute",selector:{attribute:{entity_id:r}}}]:[],...t?[{type:"grid",name:"",schema:[{name:"hours",selector:{number:{min:1,max:168,mode:"box",unit_of_measurement:"h"}}},"column"===n?{name:"aggregate",selector:hf(e,"aggregate",lj)}:{name:"fill",selector:{boolean:{}}}]}]:[],{type:"grid",name:"",schema:[{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]},{name:"color",selector:{text:{}}}],pj.set(a,i)}return i}(this.hass,this._config,this.context?.entity_id),cj)}
      <div class="limits">
        ${function(e,t){return[["min","0"],["max","100"],..."bar"===t?[["target",Ze(e,"editor_none")]]:[]]}(this.hass,e).map(([e,t])=>R`<cd-limit-field
              data-limit=${e}
              .hass=${this.hass}
              .label=${Ze(this.hass,hj(e))}
              .value=${this._config?.[e]}
              .defaultLabel=${t}
              @value-changed=${t=>this._optionChanged(e,t)}
            ></cd-limit-field>`)}
      </div>
      <div class="heading">${Ze(this.hass,hj("bands"))}</div>
      <p class="help">${Ze(this.hass,"editor_feature_bands_help")}</p>
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config.severity}
        .unit=${o}
        @value-changed=${e=>this._optionChanged("severity",e)}
      ></cd-bands-editor>
      <div class="heading">${Ze(this.hass,hj("actions"))}</div>
      ${this._form("actions",mj,dj)}`}}fj.properties={hass:{attribute:!1},context:{attribute:!1},_config:{state:!0}},fj.styles=a`
    :host {
      display: block;
    }
    .limits {
      display: grid;
      gap: 8px;
      margin-top: 16px;
    }
    .heading {
      margin-top: 24px;
      font-weight: 500;
    }
    .help {
      margin: 4px 0 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
  `,customElements.get("chartdeck-feature-editor")||customElements.define("chartdeck-feature-editor",fj);const gj=["sparkline","column","bar"],yj=["auto",...Yn],vj=["current_temperature","current_humidity","current_position","percentage","brightness","temperature","humidity","volume_level","battery_level"],_j=["switch","light","fan","input_boolean","binary_sensor"],bj=e=>"number"==typeof e?Number.isFinite(e):"string"==typeof e&&""!==e.trim()&&Number.isFinite(Number(e));function xj(e){return bj(e.state)||!!e.attributes?.unit_of_measurement||!!e.attributes?.state_class}function wj(e){return vj.find(t=>bj(e.attributes?.[t]))}function $j(e,t){const o=t?e?.states?.[t]:void 0;if(!o)return;if(xj(o))return{};const n=wj(o);if(n)return{attribute:n};const r=e?.entities?.[o.entity_id]?.device_id;if(!r)return;const a=Object.values(e.entities).filter(e=>e.device_id===r&&e.entity_id!==o.entity_id&&e.entity_id.startsWith("sensor.")).map(t=>e.states[t.entity_id]).filter(e=>!!e&&xj(e)).sort((e,t)=>e.entity_id.localeCompare(t.entity_id)),i=e=>{const t=["power","energy"].indexOf(String(e.attributes?.device_class??""));return t<0?2:t};return a.sort((e,t)=>i(e)-i(t)),a[0]?{entity:a[0].entity_id}:void 0}function kj(e,t){const{type:o,style:n,hours:r,fill:a,aggregate:i,entity:s,attribute:l,color:c,...d}=e;return It({...d,type:"custom:chartdeck-card",entities:[l?{entity:t,attribute:l}:t]})}function Mj(e,t){if("auto"!==e)return e;const o=t?.attributes?.state_class;return"total_increasing"===o||"total"===o?"change":"mean"}const zj=e=>Math.round(1e3*e)/10;class Ej extends le{constructor(){super(...arguments),this.languageController=new Up(this),this._options={style:"sparkline",hours:24,fill:!0,aggregate:"auto"}}static getConfigElement(){return document.createElement("chartdeck-feature-editor")}static getStubConfig(e,t){return{type:"custom:chartdeck-feature",style:"sparkline",...$j(e,t?.entity_id)}}setConfig(e){const t=function(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");const t=e.style??"sparkline";if(!gj.includes(t))throw new Error(`"style" must be one of: ${gj.join(", ")}`);const o=e.hours??24;if("number"!=typeof o||!Number.isFinite(o)||o<=0||o>168)throw new Error('"hours" must be a number of hours from 1 to 168');if(void 0!==e.fill&&"boolean"!=typeof e.fill)throw new Error('"fill" must be true or false');const n=e.aggregate??"auto";if(!yj.includes(n))throw new Error(`"aggregate" must be one of: ${yj.join(", ")}`);if(void 0!==e.entity&&("string"!=typeof e.entity||!e.entity))throw new Error('"entity" must be an entity id');if(void 0!==e.color&&"string"!=typeof e.color)throw new Error('"color" must be a colour');return{style:t,hours:o,fill:!1!==e.fill,aggregate:n}}(e);kj(e,e.entity??"sensor.chartdeck_feature"),this._options=t,this._card=void 0,this._raw=e}get entityId(){return this._raw?.entity??this.context?.entity_id??this.stateObj?.entity_id}_config(e){return this._card?.id!==e&&(this._card={id:e,config:kj(this._raw,e)}),this._card.config}shouldUpdate(e){if(0===e.size||!e.has("hass")||e.size>1)return!0;const t=e.get("hass"),o=this.hass,n=this.entityId;if(!t||!o||!n)return!0;const r=[n];for(const a of[this._raw?.min,this._raw?.max,this._raw?.target])"string"==typeof a&&r.push(a);for(const a of this._raw?.severity??[])"string"==typeof a.from&&r.push(a.from);return!!r.some(e=>t.states[e]!==o.states[e])||(t.themes?.darkMode!==o.themes?.darkMode||t.locale!==o.locale)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),cr(this),this._detach?.(),this._detach=void 0}updated(){const e=this.shadowRoot?.querySelector(".feature");e!==this._detachedFrom&&(this._detach?.(),this._detach=void 0),e&&!this._detach&&(this._detach=Se(e,()=>this._item.config),this._detachedFrom=e)}_history(e,t){const{style:o,hours:n,fill:r,aggregate:a}=this._options,i=Date.now(),s={start:i-36e5*n,end:i},l={entity:e.entityId,attribute:e.config.attribute},c=lr(this,()=>this.requestUpdate()).get(this.hass,[l],s,"history");let d=function(e,t){const o=e[e.length-1];return o&&null!==o.v&&o.t<t?[...e,{t:t,v:o.v}]:e}(c.data.get(Zn(l))??[],i);if("column"===o){d=Q$(d,{period:{last:n,unit:"hour"},aggregate:Mj(a,e.stateObj)},s,this.hass)}const u={points:d,color:t,curve:"smooth"},h="ready"===c.status?ek(u,"column"===o?"column":r?"area":"line",s,2):Z,p="ready"!==c.status||!d.some(e=>null!==e.v);return R`<svg
      class="chart ${c.status}"
      viewBox="0 0 ${100} ${24}"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      ${p?q`<line class="empty" x1="0" x2=${100} y1=${12} y2=${12}></line>`:h}
    </svg>`}_bar(e,t){const o=Array.isArray(this._raw?.severity)&&this._raw.severity.length?Ce(e.band.color):null,n=o?.start??t,r=o?.end??t,[a,i]=e.available?e.span:[0,0];return R`<div class="track" aria-hidden="true">
      ${i>a?R`<div
              class="fill"
              style="left:${zj(a)}%;width:${zj(i-a)}%;background:${n};background-image:linear-gradient(90deg, ${n}, ${r})"
            ></div>`:Z}
      ${null!==e.targetPosition&&e.available?R`<div class="target" style="--target:${e.targetPosition}"></div>`:Z}
    </div>`}render(){const e=this.hass,t=this.entityId;if(!this._raw||!e||!t)return Z;const o=ep(this._config(t),e)[0];this._item=o;const n=function(e,t,o){return t.color?je(t.color):Array.isArray(t.severity)&&t.severity.length?je(e.band.color):"string"==typeof o&&o&&"state"!==o&&"none"!==o?o:"var(--tile-color, var(--primary-color, #03a9f4))"}(o,this._raw,this.color),r=Ee(o.config),{style:a,hours:i}=this._options,s="bar"===a?o.label:Ze(e,"feature_aria",{name:o.name,hours:i,value:o.display});return R`<div
      class="feature style-${a} ${r?"interactive":""} ${o.available?"":"unavailable"}"
      style="--cd-feature-color:${n}"
      role=${r?"button":"img"}
      tabindex=${r?0:Z}
      aria-label=${s}
      title=${s}
    >
      ${"bar"===a?this._bar(o,n):this._history(o,n)}
    </div>`}}Ej.properties={hass:{attribute:!1},context:{attribute:!1},stateObj:{attribute:!1},color:{attribute:!1},_raw:{state:!0}},Ej.styles=a`
    :host {
      display: block;
      width: 100%;
      height: var(--feature-height, 42px);
      --cd-feature-radius: var(--feature-border-radius, 12px);
    }
    .feature {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border-radius: var(--cd-feature-radius);
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      --cd-feature-track: color-mix(in srgb, var(--cd-feature-color) 20%, transparent);
    }
    .feature.interactive {
      cursor: pointer;
    }
    .feature:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
    /* A line along the top or bottom keeps half its stroke inside the strip. */
    .style-sparkline,
    .style-column {
      padding: 2px 0;
    }
    .chart {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    /* The first column starts on the hour before the span: show only its part inside it. */
    .style-column .chart {
      overflow: hidden;
    }
    .chart path {
      vector-effect: non-scaling-stroke;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .chart .spark-fill {
      fill-opacity: 0.22;
    }
    .chart .empty {
      stroke: var(--cd-feature-track);
      stroke-width: 1.5px;
      stroke-dasharray: 3 4;
      vector-effect: non-scaling-stroke;
    }
    @supports not (color: color-mix(in srgb, red 50%, white)) {
      .feature {
        --cd-feature-track: var(--divider-color, rgba(127, 127, 127, 0.2));
      }
    }
    .unavailable .chart path {
      opacity: 0.5;
    }
    /* The bar fills the strip like HA's own slider features. */
    .track {
      position: relative;
      height: 100%;
      border-radius: var(--cd-feature-radius);
      overflow: hidden;
      background: var(--cd-feature-track);
    }
    .fill {
      position: absolute;
      top: 0;
      bottom: 0;
    }
    .target {
      position: absolute;
      top: 6px;
      bottom: 6px;
      width: 3px;
      border-radius: 2px;
      left: calc(var(--target) * (100% - 3px));
      background: var(--primary-text-color, #212121);
    }
  `,customElements.get("chartdeck-feature")||customElements.define("chartdeck-feature",Ej);const Sj=window.customCardFeatures??=[];Sj.some(e=>"chartdeck-feature"===e.type)||Sj.push({type:"chartdeck-feature",name:"Chartdeck chart",configurable:!0,supported:function(e){return!!e&&(xj(e)||!!wj(e)||_j.includes(e.entity_id.split(".")[0]))},isSupported:(e,t)=>void 0!==$j(e,t?.entity_id)}),console.info("%c CHARTDECK %c 2.3.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const Aj={rows:16,tiles:8};function jj(e){const t=Aj[e.layout];return Math.max(1,Math.floor((368+t)/((e.minColumnWidth??0)+t)))}class Cj extends le{constructor(){super(...arguments),this.languageController=new Up(this),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0,this._redraw=()=>this.requestUpdate()}static getStubConfig(e){const t=Object.values(e?.states??{}).filter(e=>e.entity_id.startsWith("sensor.")&&""!==e.state.trim()&&Number.isFinite(Number(e.state))),o=e=>"battery"===e.attributes?.device_class;return t.sort((e,t)=>o(e)!==o(t)?o(e)?-1:1:e.entity_id<t.entity_id?-1:e.entity_id>t.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:t.slice(0,3).map(e=>e.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(e){const t=It(e);!function(e){if(void 0!==e.export&&"boolean"!=typeof e.export)throw new Error('"export" must be true or false')}(e),So(this);const o=NA[t.style],n=no(e);if(CA(o)&&o.validate?.(n),this._watched=tp(t),CA(o))for(const r of o.watch?.(e)??[])this._watched.add(r);this._config&&this._config.style!==t.style&&this._disconnectStyle(),this._config=t}get _styleName(){return this._config?.style??"bar"}get _style(){return NA[this._styleName]}_legend(e){const t=this._config;if(!t?.show.legend||0===this._count())return[];const o=e?.decimals??1;return Te(Xh(t.legendBands,this.hass,e?.unit),e=>Wt(e,o,this.hass),e?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const e=this._config;if(!e)return 0;const t=this._style,o=16+(e.title?73:0)+(this._legend().length>0?32:0);if(CA(t))return o+t.height;const n=this._count(),r=void 0!==e.columns?Math.min(e.columns,jj(t)):"rows"===t.layout?1:Math.min(n,t.tilesPerRow??3,jj(t));return o+(0===n?0:Math.ceil(n/Math.max(1,r)))*t.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const e=this._count();if(CA(this._style))return{columns:12,min_columns:6,min_rows:2,...this._style.gridOptions,rows:"auto"};const t="rows"===this._style.layout;return{columns:t||e<=1?6:12,rows:"auto",min_columns:t?6:3,min_rows:1}}shouldUpdate(e){if(0===e.size)return!0;if([...e.keys()].some(e=>"hass"!==e))return!0;if(!e.has("hass"))return!1;const t=e.get("hass"),o=this.hass;if(!t||!o)return!0;for(const n of this._watched)if(t.states[n]!==o.states[n])return!0;if(this._config?.include){const e=Qh(this._config,o);if(e.length!==this._matched.length||e.some((e,t)=>e!==this._matched[t]))return!0;for(const n of e)if(t.states[n]!==o.states[n])return!0}return t.themes?.darkMode!==o.themes?.darkMode||t.themes?.theme!==o.themes?.theme||t.locale!==o.locale}willUpdate(){const e=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",e),(e||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const e=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,16)}updated(){this._scheduleReady(),this._syncActions(),function(e){const t=e.shadowRoot?.querySelector(".export.titled"),o=e.shadowRoot?.querySelector("ha-card");if(!t||!o)return;const n=()=>{const e=o.shadowRoot?.querySelector(".card-header")??[...o.children].find(e=>e.classList.contains("card-header"));if(!e?.offsetHeight)return;const n=getComputedStyle(e),r=parseFloat(n.paddingTop)||0,a=e.offsetHeight-r-(parseFloat(n.paddingBottom)||0),i=t.offsetHeight||32,s=e.offsetTop+r+a/2-i/2,l=Math.max(4,Math.round(Math.min(s,e.offsetTop+e.offsetHeight-i)));t.style.top=`${l}px`};n(),o.updateComplete?.then(n)}(this)}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const e=this._config?NA[this._config.style]:void 0;e&&CA(e)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const e=this._config?NA[this._config.style]:void 0;e&&CA(e)&&e.disconnect?.(this),cr(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle(),function(e){const t=Bo.get(e);t&&(t.outside&&window.removeEventListener("pointerdown",t.outside,!0),void 0!==t.statusTimer&&clearTimeout(t.statusTimer),Bo.delete(e))}(this);for(const e of this._detachers.values())e();this._detachers.clear()}_syncActions(){const e=this.shadowRoot;if(!e)return;const t=new Set(e.querySelectorAll(".entity"));for(const[o,n]of this._detachers)t.has(o)||(n(),this._detachers.delete(o));for(const o of t)this._detachers.has(o)||this._detachers.set(o,Se(o,()=>this._items[Number(o.dataset.index)].config))}_renderEntity(e,t,o,n){const r=this._config,a=Ee(e.config),i=Ce(e.band.color),s=`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${i.start};--c-end:${i.end}`;return R`<div
      class="entity ${a?"interactive":""} ${e.available?"":"unavailable"} ${r.colorIcon&&e.available?"icon-band":""}"
      data-index=${t}
      role="meter"
      aria-valuenow=${e.available?String(e.value):Z}
      aria-valuemin=${e.min}
      aria-valuemax=${e.max}
      aria-label=${e.label}
      tabindex=${a?0:Z}
      style=${s}
    >
      ${o.render(e,{show:r.show,hass:n,requestUpdate:this._redraw})}
    </div>`}render(){if(!this._config)return Z;const e=this.hass,t=function(e,t,o){const n=e.cardOptions;if("energy"!==n.source||!t)return{config:e};const r=yo(t,o);if("loading"===r.status)return{config:e,message:Ze(t,"energy_loading")};if("error"===r.status)return{config:e,message:Ze(t,"energy_error",{error:r.error})};const a=It(so(n,r.prefs,t,r.meta));return 0===a.entities.length?{config:e,message:Ze(t,"energy_none")}:Gt.includes(a.style)?{config:a,totals:!0}:{config:a}}(this._config,e,()=>this.requestUpdate()),o=t.config,n=this._style;let r,a,i;const s=e?ep(o,e):[];if(this._matched=e?Qh(o,e):[],t.message)this._items=[],r=R`<div class="hint">${t.message}</div>`;else if(0!==o.entities.length||o.include)if(e)if(0===s.length)this._items=[],r=R`<div class="hint">${Ze(e,o.include?"no_matches":"none_available")}</div>`;else{a=s[0];const l=new Map,c=new Set;s.forEach((e,t)=>{l.set(e,c.has(e.entityId)?`${e.entityId}#${t}`:e.entityId),c.add(e.entityId)}),this._items=function(e,t){if("none"===t)return[...e];const o="ascending"===t?1:-1;return e.map((e,t)=>({item:e,index:t})).sort((e,t)=>{if(e.item.available!==t.item.available)return e.item.available?-1:1;if(e.item.available){const n=(e.item.position-t.item.position)*o;if(0!==n)return n}return e.index-t.index}).map(e=>e.item)}(s,o.sort).slice(0,o.limit);const d=this._items.filter(e=>e.available).map(e=>e.display.length);if(i=d.length?Math.max(...d):void 0,CA(n)){const a={items:this._items,config:o,raw:o.cardOptions,hass:e,requestUpdate:()=>this.requestUpdate(),host:this},i=t.totals?ui(a):void 0;void 0!==i?.message?r=R`<div class="chart">
            <div class="chart-message ${i.error?"error":""}">${i.message}</div>
          </div>`:(i&&(this._items=i.items),r=R`<div class="chart">${n.render({...a,items:this._items})}</div>`)}else{const t="tiles"===n.layout,a=function(e,t){if(void 0===t)return"rows"===e.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const o=(t-1)*Aj[e.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${e.minColumnWidth??0}px, 100%), calc((100% - ${o}px) / ${t} - 0.5px)), 1fr))`}(n,o.columns);r=R`<div
          class="entities layout-${n.layout} ${t&&void 0!==o.columns?"has-columns":""}"
          style=${a}
        >
          ${Me(this._items,e=>l.get(e),(t,o)=>this._renderEntity(t,o,n,e))}
        </div>`}}else this._items=[],r=Z;else this._items=[],r=R`<div class="hint">${Ze(e,"no_entities")}</div>`;const l=this._legend(a),c=CA(n)&&e?Ko({host:this,hass:e,raw:o.cardOptions,items:this._items,content:()=>this.shadowRoot?.querySelector(".content")??null,requestUpdate:()=>this.requestUpdate()}):Z;return R`<ha-card .header=${o.title}>
      ${c}
      <div
        class="content style-${this._styleName}"
        style=${void 0===i?Z:`--cd-value-ch: ${i}`}
      >
        ${r}
      </div>
      ${l.length?R`<div class="legend">
              ${l.map(e=>R`<span class="legend-item"
                    ><span class="dot" style="background:${e.color}"></span>${e.text}</span
                  >`)}
            </div>`:Z}
    </ha-card>`}}Cj.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},Cj.styles=[XA,Jo,...Object.values(NA).map(e=>e.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",Cj);const Nj=window.customCards??=[];Nj.some(e=>"chartdeck-card"===e.type)||Nj.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{Cj as ChartdeckCard};
//# sourceMappingURL=chartdeck-card.js.map
