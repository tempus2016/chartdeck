/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new a(n,e,o)},i=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},b=(e,t)=>!s(e,t),_={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const r=n?.call(this);a?.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const e=this._$Eu(t,o);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(i(e))}else void 0!==e&&t.push(i(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((o,n)=>{if(t)o.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of n){const n=document.createElement("style"),a=e.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=t.cssText,o.appendChild(n)}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const a=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=n;const r=a.fromAttribute(t,e.type);this[n]=r??this._$Ej?.get(n)??r,this._$Em=null}}requestUpdate(e,t,o,n=!1,a){if(void 0!==e){const r=this.constructor;if(!1===n&&(a=this[e]),o??=r.getPropertyOptions(e),!((o.hasChanged??b)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:n,wrapped:a},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==a||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,o,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,g?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=e=>e,k=w.trustedTypes,M=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+A,S=`<${E}>`,C=document,j=()=>C.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,T="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,H=/"/g,I=/^(?:script|style|textarea|title)$/i,B=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),q=B(1),Z=B(2),R=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,Y=C.createTreeWalker(C,129);function G(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let a=0,r=0;const i=e.length-1,s=this.parts,[l,c]=((e,t)=>{const o=e.length-1,n=[];let a,r=2===t?"<svg>":3===t?"<math>":"",i=F;for(let s=0;s<o;s++){const t=e[s];let o,l,c=-1,d=0;for(;d<t.length&&(i.lastIndex=d,l=i.exec(t),null!==l);)d=i.lastIndex,i===F?"!--"===l[1]?i=O:void 0!==l[1]?i=P:void 0!==l[2]?(I.test(l[2])&&(a=RegExp("</"+l[2],"g")),i=D):void 0!==l[3]&&(i=D):i===D?">"===l[0]?(i=a??F,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,o=l[1],i=void 0===l[3]?D:'"'===l[3]?H:U):i===H||i===U?i=D:i===O||i===P?i=F:(i=D,a=void 0);const u=i===D&&e[s+1].startsWith("/>")?" ":"";r+=i===F?t+S:c>=0?(n.push(o),t.slice(0,c)+z+t.slice(c)+A+u):t+A+(-2===c?s:u)}return[G(e,r+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]})(e,t);if(this.el=X.createElement(l,o),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Y.nextNode())&&s.length<i;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(z)){const t=c[r++],o=n.getAttribute(e).split(A),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:i[2],strings:o,ctor:"."===i[1]?te:"?"===i[1]?oe:"@"===i[1]?ne:ee}),n.removeAttribute(e)}else e.startsWith(A)&&(s.push({type:6,index:a}),n.removeAttribute(e));if(I.test(n.tagName)){const e=n.textContent.split(A),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],j()),Y.nextNode(),s.push({type:2,index:++a});n.append(e[t],j())}}}else if(8===n.nodeType)if(n.data===E)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(A,e+1));)s.push({type:7,index:a}),e+=A.length-1}a++}}static createElement(e,t){const o=C.createElement("template");return o.innerHTML=e,o}}function J(e,t,o=e,n){if(t===R)return t;let a=void 0!==n?o._$Co?.[n]:o._$Cl;const r=N(t)?void 0:t._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),void 0===r?a=void 0:(a=new r(e),a._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=a:o._$Cl=a),void 0!==a&&(t=J(e,a._$AS(e,t.values),a,n)),t}let K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??C).importNode(t,!0);Y.currentNode=n;let a=Y.nextNode(),r=0,i=0,s=o[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new Q(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new ae(a,this,e)),this._$AV.push(t),s=o[++i]}r!==s?.index&&(a=Y.nextNode(),r++)}return Y.currentNode=C,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),N(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==R&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=X.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new K(n,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new X(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const a of e)n===t.length?t.push(o=new Q(this.O(j()),this.O(j()),this,this.options)):o=t[n],o._$AI(a),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=W}_$AI(e,t=this,o,n){const a=this.strings;let r=!1;if(void 0===a)e=J(this,e,t,0),r=!N(e)||e!==this._$AH&&e!==R,r&&(this._$AH=e);else{const n=e;let i,s;for(e=a[0],i=0;i<a.length-1;i++)s=J(this,n[o+i],t,i),s===R&&(s=this._$AH[i]),r||=!N(s)||s!==this._$AH[i],s===W?e=W:e!==W&&(e+=(s??"")+a[i+1]),this._$AH[i]=s}r&&!n&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class ne extends ee{constructor(e,t,o,n,a){super(e,t,o,n,a),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??W)===R)return;const o=this._$AH,n=e===W&&o!==W||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==W&&(o===W||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const re={I:Q},ie=w.litHtmlPolyfillSupport;ie?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let le=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let a=n._$litPart$;if(void 0===a){const e=o?.renderBefore??null;n._$litPart$=a=new Q(t.insertBefore(j(),e),e,void 0,o??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};le._$litElement$=!0,le.finalized=!0,se.litElementHydrateSupport?.({LitElement:le});const ce=se.litElementPolyfillSupport;ce?.({LitElement:le}),(se.litElementVersions??=[]).push("4.2.2");
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
 */const{I:ge}=re,ve=e=>e,ye=()=>document.createComment(""),be=(e,t,o)=>{const n=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=n.insertBefore(ye(),a),r=n.insertBefore(ye(),a);o=new ge(t,r,e,e.options)}else{const t=o._$AB.nextSibling,r=o._$AM,i=r!==e;if(i){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==a||i){let e=o._$AA;for(;e!==t;){const t=ve(e).nextSibling;ve(n).insertBefore(e,a),e=t}}}return o},_e=(e,t,o=e)=>(e._$AI(t,o),e),xe={},we=(e,t=xe)=>e._$AH=t,$e=e=>{e._$AR(),e._$AA.remove()},ke=(e,t,o)=>{const n=new Map;for(let a=t;a<=o;a++)n.set(e[a],a);return n},Me=me(class extends fe{constructor(e){if(super(e),e.type!==ue)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const a=[],r=[];let i=0;for(const s of e)a[i]=n?n(s,i):i,r[i]=o(s,i),i++;return{values:r,keys:a}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){const a=(e=>e._$AH)(e),{values:r,keys:i}=this.dt(t,o,n);if(!Array.isArray(a))return this.ut=i,r;const s=this.ut??=[],l=[];let c,d,u=0,h=a.length-1,p=0,m=r.length-1;for(;u<=h&&p<=m;)if(null===a[u])u++;else if(null===a[h])h--;else if(s[u]===i[p])l[p]=_e(a[u],r[p]),u++,p++;else if(s[h]===i[m])l[m]=_e(a[h],r[m]),h--,m--;else if(s[u]===i[m])l[m]=_e(a[u],r[m]),be(e,l[m+1],a[u]),u++,m--;else if(s[h]===i[p])l[p]=_e(a[h],r[p]),be(e,a[u],a[h]),h--,p++;else if(void 0===c&&(c=ke(i,p,m),d=ke(s,u,h)),c.has(s[u]))if(c.has(s[h])){const t=d.get(i[p]),o=void 0!==t?a[t]:null;if(null===o){const t=be(e,a[u]);_e(t,r[p]),l[p]=t}else l[p]=_e(o,r[p]),be(e,a[u],o),a[t]=null;p++}else $e(a[h]),h--;else $e(a[u]),u++;for(;p<=m;){const t=be(e,l[m+1]);_e(t,r[p]),l[p++]=t}for(;u<=h;){const e=a[u++];null!==e&&$e(e)}return this.ut=i,we(e,l),R}}),ze=e=>!!e&&"none"!==e.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ae(e){return ze(e.tap_action)||ze(e.hold_action)||ze(e.double_tap_action)}function Ee(e,t){let o,n,a=0,r=0,i=!1,s=!1;const l=o=>{const n=t(),a="tap"===o?n.tap_action:"hold"===o?n.hold_action:n.double_tap_action;ze(a)&&e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:n,action:o}}))},c=()=>{void 0!==o&&clearTimeout(o),o=void 0},d=e=>{const n=e;n.button>0||(i=!0,s=!1,a=n.clientX,r=n.clientY,c(),ze(t().hold_action)&&(o=setTimeout(()=>{o=void 0,s=!0,l("hold")},500)))},u=e=>{if(!i)return;const t=e;Math.hypot(t.clientX-a,t.clientY-r)>10&&(c(),i=!1)},h=()=>{c(),i=!1},p=()=>{const e=i;c(),i=!1,e&&!s?ze(t().double_tap_action)?void 0!==n?(clearTimeout(n),n=void 0,l("double_tap")):n=setTimeout(()=>{n=void 0,l("tap")},250):l("tap"):s=!1},m=e=>{const t=e;t.repeat||"Enter"!==t.key&&" "!==t.key||(" "===t.key&&t.preventDefault(),l("tap"))},f=e=>{ze(t().hold_action)&&e.preventDefault()};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",u),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",h),e.addEventListener("pointerleave",h),e.addEventListener("keydown",m),e.addEventListener("contextmenu",f),()=>{c(),void 0!==n&&clearTimeout(n),n=void 0,e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",h),e.removeEventListener("pointerleave",h),e.removeEventListener("keydown",m),e.removeEventListener("contextmenu",f)}}const Se={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function Ce(e){if(Object.prototype.hasOwnProperty.call(Se,e)){const{variable:t,fallback:o}=Se[e];return`var(${t}, ${o})`}return e}function je(e){const t=Ce(e);return{start:t,end:`color-mix(in srgb, ${t} 80%, #fff)`}}const Ne=new Set(["amber"]);function Le(e){if(Object.prototype.hasOwnProperty.call(Se,e))return Ne.has(e)?"dark":"light";const t=function(e){const t=e.trim().toLowerCase(),o=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(o){const e=o[1].length<=4?[...o[1]].map(e=>e+e).join(""):o[1],[t,n,a]=[0,2,4].map(t=>parseInt(e.slice(t,t+2),16));return[t,n,a,8===e.length?parseInt(e.slice(6,8),16)/255:1]}const n=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(t);if(n){const[e,t,o]=[n[1],n[2],n[3]].map(e=>Math.min(255,Number(e))),a=void 0===n[4]?1:Number(n[4])/(n[5]?100:1);return[e,t,o,Math.min(1,a)]}}(e);return t?t[3]<.5?"theme":function([e,t,o]){const n=e=>{const t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return.2126*n(e)+.7152*n(t)+.0722*n(o)}([t[0],t[1],t[2]])>.4?"dark":"light":"light"}function Te(e,t){let o=t[0];for(const n of t){if(!(n.from<=e))break;o=n}return o}function Fe(e,t,o){const n=o?` ${o}`:"",a=[];return e.forEach((o,r)=>{const i=e[r+1],s=Ce(o.color);o.label?a.push({color:s,text:o.label}):Number.isFinite(o.from)?i?a.push({color:s,text:`${t(o.from)}–${t(i.from)}${n}`}):a.push({color:s,text:`${t(o.from)}${n}+`}):i&&a.push({color:s,text:`< ${t(i.from)}${n}`})}),a}const Oe={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},Pe=["label","area","floor","device_class","domain","entity"];function De(e,t){if(null==e)return;if("object"!=typeof e||Array.isArray(e))throw new Error(`"${t}" must list what to match, such as "area" or "device_class"`);const o="include"===t?Pe.filter(e=>"entity"!==e):Pe,n={};for(const[a,r]of Object.entries(e)){if(!o.includes(a))throw new Error(`"${t}" can't match on "${a}". Use: ${o.join(", ")}`);const e=(Array.isArray(r)?r:[r]).filter(e=>null!=e&&""!==e);if(e.some(e=>"string"!=typeof e))throw new Error(`"${t}.${a}" must be text or a list of text`);e.length&&(n[a]=e)}return Object.keys(n).length?n:void 0}function Ue(e){const t=e.state;return"unavailable"===t||"unknown"===t||""!==t.trim()&&Number.isFinite(Number(t))}function He(e,t){const o=e.entity_id,n=t.entities?.[o],a=n?.device_id?t.devices?.[n.device_id]:void 0,r=n?.area_id??a?.area_id??void 0,i=e.attributes?.device_class;return{label:[...n?.labels??[],...a?.labels??[]],area:r,floor:r?t.areas?.[r]?.floor_id??void 0:void 0,device_class:"string"==typeof i?i:void 0,domain:o.slice(0,o.indexOf(".")),entity:o}}function Ie(e,t,o){const n=e[t],a=o[t];return Array.isArray(a)?a.some(e=>n.includes(e)):void 0!==a&&n.includes(a)}function Be(e,t){return Object.keys(e).every(o=>Ie(e,o,t))}function qe(e,t){return!!e&&Object.keys(e).some(o=>Ie(e,o,t))}const Ze=new WeakMap;const Re=e=>(Math.abs(e)<.005?0:e).toFixed(2);function We(e,t,o,n){const a=n*Math.PI/180;return[e+o*Math.sin(a),t-o*Math.cos(a)]}function Ve(e,t,o,n,a){const r=String(Number(o.toFixed(2))),i=a-n,[s,l]=We(e,t,o,n);if(i>=359.99){const[a,i]=We(e,t,o,n+180);return`M${Re(s)} ${Re(l)} A${r} ${r} 0 1 1 ${Re(a)} ${Re(i)} A${r} ${r} 0 1 1 ${Re(s)} ${Re(l)}`}const[c,d]=We(e,t,o,a),u=i>180?1:0;return`M${Re(s)} ${Re(l)} A${r} ${r} 0 ${u} 1 ${Re(c)} ${Re(d)}`}const Ye=["value","band","name","text","none"],Ge={ring:[-180,180],arc:[-135,135],needle:[-90,90]};function Xe(e,t){if(null==e||""===e)return;const o="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof o||!Number.isFinite(o)||o<-360||o>360)throw new Error(`"${t}" must be a number of degrees from -360 to 360`);return o}function Je(e,t){return[t?.startAngle??e[0],t?.endAngle??e[1]]}function Ke(e){return void 0!==e?.startAngle||void 0!==e?.endAngle}function Qe([e,t],o){return e+(t-e)*o}function et(...e){return{x0:Math.min(...e.map(e=>e.x0)),y0:Math.min(...e.map(e=>e.y0)),x1:Math.max(...e.map(e=>e.x1)),y1:Math.max(...e.map(e=>e.y1))}}function tt(e,t,o,n,a,r){const i=[n,a];for(let h=Math.ceil(n/90);90*h<=a;h++)i.push(90*h);const s=i.map(n=>We(e,t,o,n)),l=Math.min(...s.map(e=>e[0])),c=Math.min(...s.map(e=>e[1])),d=Math.max(...s.map(e=>e[0])),u=Math.max(...s.map(e=>e[1]));return{x0:l-r,y0:c-r,x1:d+r,y1:u+r}}function ot(e,t=5){if(!Number.isFinite(e)||e<=0)return 1;const o=e/t,n=10**Math.floor(Math.log10(o)),a=o/n;return(a<=1?1:a<=2?2:a<=2.5?2.5:a<=5?5:10)*n}function nt(e,t){const o=e=>{const t=String(Number(e.toPrecision(12)));return t.includes("e")?0:t.split(".")[1]?.length??0};return Math.min(3,Math.max(o(t),o(e)))}function at(e){const t=e*Math.PI/180,o=Math.sin(t),n=Math.cos(t);return{anchor:o>.3?"start":o<-.3?"end":"middle",dy:n>.3?0:n<-.3?.75:.35}}function rt(e,t){switch(t?.center??"value"){case"band":return e.band.label?{kind:"text",text:e.band.label,band:!0}:{kind:"value"};case"name":return{kind:"text",text:e.name,band:!1};case"text":return t.centerText?{kind:"text",text:t.centerText,band:!1}:{kind:"none"};case"none":return{kind:"none"};default:return{kind:"value"}}}const it=["bar","thin","segmented","tank","ring","needle","arc","line","column","area","combined","pie","rings","pictograph","waffle","histogram","scatter","bubble","heatmap","box","funnel","radar","polar_area","treemap","sunburst","icicle","grouped_bars","bullet","lollipop","waterfall","slope","dumbbell","range_area","sparkline","streamgraph","candlestick","violin","beeswarm","sankey","timeline","climate","wind_rose","day_clock","trend"],st=[{from:-1/0,color:"primary"}],lt=["none","ascending","descending"];function ct(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"==typeof e&&""!==e.trim()){const t=Number(e);return Number.isFinite(t)?t:void 0}}function dt(e,t){if(null==e||""===e)return;const o=ct(e);if(void 0!==o)return o;if("string"==typeof e)return e;throw new Error(`"${t}" must be a number or an entity id`)}function ut(e,t,o,n=1/0){if(null==e||""===e)return;const a=ct(e);if(void 0===a||!Number.isInteger(a)||a<o||a>n){throw new Error(`"${t}" must be a whole number ${n===1/0?`of at least ${o}`:`from ${o} to ${n}`}`)}return a}function ht(e){if(null==e)return;if(!Array.isArray(e))throw new Error('"severity" must be a list of bands');if(0===e.length)return;const t=e.map((e,t)=>{let o;try{o=dt(e?.from,"from")}catch{o=void 0}if(void 0===o)throw new Error(`Severity band ${t+1}: "from" must be a number or an entity id`);if("string"!=typeof e.color||!e.color)throw new Error(`Severity band ${t+1}: "color" is required`);return{...e,from:o}});return t.every(e=>"number"==typeof e.from)?t.sort((e,t)=>e.from-t.from):t}function pt(e,t,o){if(null==e)return{action:t};if("object"!=typeof e||"string"!=typeof e.action)throw new Error(`"${o}" must have an "action"`);return e}function mt(e,t){return void 0!==e?e:t}function ft(e,t,o){const n="string"==typeof e?{entity:e}:e;if(!n||"object"!=typeof n||"string"!=typeof n.entity||!n.entity)throw new Error(`Entity ${o+1} needs an "entity" id`);if(void 0!==n.attribute&&null!==n.attribute&&"string"!=typeof n.attribute)throw new Error(`Entity ${o+1}: "attribute" must be an attribute name`);const a=mt(dt(n.min,"min"),dt(t.min,"min"))??0,r=mt(dt(n.max,"max"),dt(t.max,"max"))??100;if("number"==typeof a&&"number"==typeof r&&a>=r)throw new Error(`"max" (${r}) must be greater than "min" (${a})`);const i={...n,entity:n.entity,min:a,max:r,severity:ht(n.severity)??ht(t.severity)??st,tap_action:pt(mt(n.tap_action,t.tap_action),"more-info","tap_action"),hold_action:pt(mt(n.hold_action,t.hold_action),"none","hold_action"),double_tap_action:pt(mt(n.double_tap_action,t.double_tap_action),"none","double_tap_action")},s=mt(n.name,t.name),l=mt(n.icon,t.icon),c=mt(n.unit,t.unit),d=mt(dt(n.target,"target"),dt(t.target,"target")),u=mt(ut(n.decimals,"decimals",0,20),ut(t.decimals,"decimals",0,20));return void 0!==s&&(i.name=s),void 0!==l&&(i.icon=l),void 0!==c&&(i.unit=c),void 0!==d&&(i.target=d),void 0!==u&&(i.decimals=u),n.attribute||delete i.attribute,Ge[t.style??"bar"]&&(i.gauge=function(e,t=e.style??"bar"){const o=Xe(e.start_angle,"start_angle"),n=Xe(e.end_angle,"end_angle"),a=Ge[t];if(a&&(void 0!==o||void 0!==n)){const[e,t]=[o??a[0],n??a[1]];if(!(t>e))throw new Error(`"end_angle" (${t}) must be greater than "start_angle" (${e})`);if(t-e>360)throw new Error('"end_angle" can be at most 360 degrees after "start_angle"')}const r=e.center??"value";if(!Ye.includes(r))throw new Error(`"center" must be one of: ${Ye.join(", ")}`);if(void 0!==e.center_text&&null!==e.center_text&&"string"!=typeof e.center_text)throw new Error('"center_text" must be text');if(void 0!==e.tick_labels&&"boolean"!=typeof e.tick_labels)throw new Error('"tick_labels" must be true or false');const i={center:r,centerText:e.center_text??"",tickLabels:!0===e.tick_labels};return void 0!==o&&(i.startAngle=o),void 0!==n&&(i.endAngle=n),i}(t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt=me(class extends fe{constructor(e){if(super(e),e.type!==he&&e.type!==de&&e.type!==pe)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===R||t===W)return t;const o=e.element,n=e.name;if(e.type===he){if(t===o[n])return R}else if(e.type===pe){if(!!t===o.hasAttribute(n))return R}else if(e.type===de&&o.getAttribute(n)===t+"")return R;return we(e),t}});var vt={entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_gauge_help:"Angles are in degrees, clockwise from the top: -90 is the left, 90 the right. Leave them empty for the style's usual shape.",editor_start_angle:"Start angle",editor_end_angle:"End angle",editor_center:"In the middle",editor_center_mode_value:"The value",editor_center_mode_band:"The colour band's label",editor_center_mode_name:"The name",editor_center_mode_text:"My own text",editor_center_mode_none:"Nothing",editor_center_text:"Text",editor_tick_labels:"Numbers on the scale",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours",annotation_at:"{label} at {time}",editor_orientation:"Direction",editor_orientation_horizontal:"Across",editor_orientation_vertical:"Upright",editor_value_axis:"Value labels",editor_value_grid:"Lines at each value label",editor_value_min:"Lowest value shown",editor_value_max:"Highest value shown",dist_median:"Median",dist_middle:"Middle half",dist_range:"Lowest – highest",dist_count:"Readings",editor_drill_down:"Tap a group to show what makes it up",drill_into:"{label}. Show what makes it up",drill_back:"Back to {name}",drill_top:"All",extremes_high:"High",extremes_low:"Low",extremes_average:"Avg",editor_extremes_max:"Mark the highest reading",editor_extremes_min:"Mark the lowest reading",editor_extremes_average:"Average",editor_extremes_average_none:"Don't show",editor_extremes_average_line:"Line across the chart",editor_extremes_average_figure:"Figure only",editor_extremes:"Mark highest, lowest and average",period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months",editor_color_by_shades:"Shades of one colour",editor_shade_color:"Shade colour (palette name or CSS colour)",editor_show_percent:"Show each share as a percentage",editor_center_total:"Total",editor_center_average:"Average",editor_center_none:"Nothing",parts_total:"Total",parts_average:"Average",parts_aria:"{style} of {names}",editor_style_scatter:"Scatter",editor_style_bubble:"Bubble",editor_against:"Along the bottom",editor_against_entity:"The first entity",editor_against_time:"Time",editor_dot_size:"Dot size (px)",editor_jitter:"Jitter (px)",editor_min_size:"Smallest bubble (px)",editor_max_size:"Largest bubble (px)",editor_dot_color:"Dot colour",editor_xy_x_axis:"Labels along the bottom",scatter_needs_two:"Add a second entity. The first goes along the bottom, the others up the side.",bubble_needs_three:"Add three entities: one along the bottom, one up the side, and one for the size of each bubble.",scatter_role_x:"Across",bubble_role_size:"Size",chart_total:"Total",editor_x_min:"Lowest value across",editor_x_max:"Highest value across",zoom_reset:"Reset zoom",zoom_window:"Shown: {from} to {to}",zoom_window_label:"Part of the chart shown",editor_zoom:"Zoom and pan (pinch, Ctrl + scroll or drag)",editor_overview:"Overview strip below the chart",editor_annotations:"Annotations",editor_annotation_type:"Kind",editor_annotation_type_line:"Line at a value",editor_annotation_type_band:"Shaded band of values",editor_annotation_type_time:"Marks at set times",editor_annotation_type_state:"Marks when an entity changes",editor_annotation_type_point:"Label on a reading",editor_annotation_add_line:"Line",editor_annotation_add_band:"Band",editor_annotation_add_time:"Times",editor_annotation_add_state:"State changes",editor_annotation_add_point:"Point label",editor_annotation_add:"Add an annotation:",editor_annotation_value:"Value (a number or an entity)",editor_annotation_from:"From (a number or an entity; blank for the bottom)",editor_annotation_to:"To (a number or an entity; blank for the top)",editor_annotation_times:"Times: 07:00 for every day, or 2026-10-28 07:00 (commas between)",editor_annotation_entity:"Entity",editor_annotation_series:"Series (blank for the first)",editor_annotation_state:"State (blank for every change)",editor_annotation_shade:"Shade while in this state",editor_annotation_at:"Reading",editor_annotation_at_max:"Highest",editor_annotation_at_min:"Lowest",editor_annotation_at_last:"Latest",editor_annotation_at_first:"First",editor_annotation_label:"Label",editor_annotation_color:"Colour",editor_annotation_dash:"Dashed",editor_annotation_history:"Follow the entity's history (stepped)",editor_annotation_zone:"Shade",editor_annotation_zone_none:"Nothing",editor_annotation_zone_above:"Above the line",editor_annotation_zone_below:"Below the line",editor_annotation_severity:"Shade colours by the line's value (optional bands)",editor_annotation_remove:"Remove annotation",editor_zones:"Shade the severity bands behind the chart",editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)",editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_y_scale:"Value scale",editor_y_scale_linear:"Even steps",editor_y_scale_log:"Logarithmic (powers of ten)",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden",editor_labels_show:"Which readings",editor_labels_show_all:"All (as many as fit)",editor_labels_show_last:"The latest",editor_labels_show_minmax:"Highest and lowest",editor_labels_show_ends:"First and latest",editor_labels_position:"Label position",editor_labels_position_auto:"Above peaks, below dips",editor_labels_position_above:"Above",editor_labels_position_below:"Below",editor_labels_position_center:"On the point",editor_labels_overlap:"Let labels overlap",editor_sync:"Sync group (charts with the same name share the pointer and period steps)",editor_multiples:"A small chart for each entity",editor_multiples_scale:"Value scale",editor_multiples_scale_auto:"The same when the units match",editor_multiples_scale_shared:"The same for every chart",editor_multiples_scale_independent:"Each chart its own",editor_multiples_columns:"Columns (empty fits the card)",editor_set_point:"Show the set point",editor_shading:"Shade while heating or cooling",editor_shade_fan:"Shade while only the fan runs",editor_current_color:"Temperature colour",editor_set_point_color:"Set point colour",editor_heating_color:"Heating colour",editor_cooling_color:"Cooling colour",editor_days:"Days (more than 1 shows the average day)",editor_day_clock_center_total:"Time on",editor_day_clock_center_now:"The time now",editor_day_clock_center_none:"Nothing",editor_bucket:"One bar for every",editor_bucket_15:"15 minutes",editor_bucket_30:"30 minutes",editor_bucket_60:"Hour",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_ring_color:"Colour",editor_active:"Counts as on (empty: on, open, heating, home…)",editor_entity_options_none:"Add an entity above first.",editor_hierarchy_group_by:"Group by",editor_group_by_floor:"Floor",editor_group_by_area:"Area",editor_group_by_device:"Device",editor_group_by_label:"Label",editor_entity_groups:'Own group (wins over "Group by"; "Ground floor / Kitchen" for two levels)',editor_bar_labels:"Text on the bars",editor_bar_labels_state:"State",editor_bar_labels_duration:"How long",editor_bar_labels_both:"State and how long",editor_bar_labels_none:"None",editor_timeline_legend:"Legend of states",editor_timeline_legend_above:"Above the chart",editor_timeline_legend_hidden:"Hidden",editor_state_colors:"State colours",editor_state_colors_help:"A palette name (amber, green, blue, red, purple, grey, primary) or any CSS colour.",editor_state_colors_state:"State",editor_state_colors_color:"Colour",editor_state_colors_add:"Add a state colour",editor_state_colors_remove:"Remove",editor_timeline_group:"Group (rows with the same group share a heading)",editor_points_per_hour:"Points per hour (0 draws every reading)",editor_graph:"Graph",editor_graph_line:"Line",editor_graph_bar:"Bars",editor_graph_none:"None (value only)",editor_fill:"Fill under the line",editor_fill_solid:"Solid",editor_fill_fade:"Fade",editor_fill_none:"None",editor_points:"Dots on the line",editor_points_hover:"On hover",editor_points_always:"Always",editor_points_never:"Never",editor_trend_labels:"Highest and lowest labels",editor_labels_hover:"On hover",editor_labels_always:"Always",editor_labels_never:"Never",editor_height:"Graph height (per 500 px of width)",editor_bar_spacing:"Space between bars (px)",editor_color_transition:"Band colours",editor_color_transition_smooth:"Blend",editor_color_transition_hard:"Change at each band",editor_extrema:"Show lowest and highest",editor_average:"Show average",editor_trend_legend:"Legend (two or more entities)",editor_trend_y_min:"Lowest value (~ for soft)",editor_trend_y_max:"Highest value (~ for soft)",editor_min_range:"Smallest range shown",editor_y_min_secondary:"Right axis lowest (~ for soft)",editor_y_max_secondary:"Right axis highest (~ for soft)",editor_min_range_secondary:"Right axis smallest range",editor_value_factor:"Scale by 10 to the power of",editor_align_header:"Name and icon",editor_align_header_default:"Spread out",editor_align_header_left:"Left",editor_align_header_right:"Right",editor_align_header_center:"Centre",editor_align_icon:"Icon",editor_align_icon_right:"Right of the name",editor_align_icon_left:"Left of the name",editor_align_icon_state:"Beside the value",editor_align_state:"Value",editor_align_state_left:"Left",editor_align_state_right:"Right",editor_align_state_center:"Centre",editor_font_size:"Value size (%)",editor_font_size_header:"Name size (px)",editor_color_name:"Colour the name",editor_color_value:"Colour the value",editor_trend_color_icon:"Colour the icon",editor_trend_group:"No background (inside another card)",editor_icon_image:"Image instead of the icon (URL)",editor_trend_tooltip:"Show the value under the pointer",editor_y_axis_side:"Axis",editor_y_axis_side_primary:"Left",editor_y_axis_side_secondary:"Right (its own scale)",editor_entity_aggregate:"Combine with",editor_fixed_value:"Draw the current value as a flat line",editor_show_state:"Show its value beside the main one",editor_show_indicator:"Colour dot by the value",editor_show_graph:"On the graph",editor_show_line:"Line",editor_show_fill:"Fill",editor_show_points:"Dots",editor_show_legend_entity:"In the legend",editor_show_legend_state:"Value in the legend",editor_sectors:"Directions",editor_sectors_4:"4 (N, E, S, W)",editor_sectors_8:"8 (N, NE, E…)",editor_sectors_16:"16 (N, NNE, NE…)",editor_calm:"Calm below (blank: 0.5 m/s, or the same in km/h, mph or knots)",editor_wind_roles:"The first entity is the wind direction, in degrees or compass points such as SW. The second is the wind speed: without one, the petals only show how often the wind came from each way.",editor_wind_now:"Direction: {direction}. Speed: {speed}.",editor_wind_none:"none",editor_wind_statistics:"Long-term statistics give each hour's average direction. That is only right across north when the sensor records direction as an angle (state class measurement_angle); otherwise an hour swinging between NNW and NNE averages to south. History is exact.",editor_style_area:"Area",editor_stack:"Stack",editor_stack_none:"Don't stack",editor_stack_normal:"On top of each other",editor_stack_percent:"To 100 %",editor_negative_color:"Colour below zero",editor_style_beeswarm:"Beeswarm",editor_place_by:"Place each dot by",editor_place_by_value:"Its value",editor_place_by_time_of_day:"The time of day it happened",editor_size_by_value:"Bigger dots for bigger values",swarm_readings:"{n} readings",swarm_events:"{n} times on",swarm_shown:"Dots shown",swarm_none:"No readings",swarm_earliest_latest:"Earliest – latest",swarm_lowest_highest:"Lowest – highest",editor_fill_color:"Colour",editor_style_box:"Box plot",box_aria:"Box plot of {names}",box_highest:"Highest",box_upper_quartile:"Upper quartile",box_median:"Median",box_lower_quartile:"Lower quartile",box_lowest:"Lowest",box_mean:"Average",box_count:"Readings",box_outliers:"Outliers",editor_whiskers:"Whiskers reach",editor_whiskers_tukey:"1.5 × box height (outliers as dots)",editor_whiskers_range:"The lowest and highest",editor_readings:"Show each reading as a dot",editor_box_color:"Box colour",editor_style_bullet:"Bullet",editor_ranges:"Ranges behind the bar",editor_ranges_shades:"Shades of grey",editor_ranges_colours:"Colour band colours",compare_target:"target {target}",chart_aria:"{style} chart of {names}",editor_style_candlestick:"Candlestick",editor_candle_by:"One candle per",editor_under_aggregate:"Entities underneath: combine readings with",editor_up_color:"Colour when it rose",editor_down_color:"Colour when it fell",editor_underneath:"Draw the other entities underneath as",editor_underneath_columns:"Columns",editor_underneath_line:"A line",candle_open:"Open",candle_high:"High",candle_low:"Low",candle_close:"Close",candle_week_of:"Week of {date}",editor_style_climate:"Climate",climate_set_point:"Set point",climate_range:"{low} – {high}",climate_not_thermostat:"{name} is not a thermostat. Pick a climate entity.",climate_action_heating:"Heating",climate_action_preheating:"Preheating",climate_action_cooling:"Cooling",climate_action_defrosting:"Defrosting",climate_action_drying:"Drying",climate_action_fan:"Fan",climate_action_idle:"Idle",climate_action_off:"Off",editor_style_column:"Column",editor_group_by_auto:"Automatic",editor_range:"Lowest to highest in each column",editor_rounded:"Rounded ends",editor_column_labels:"Show values on the columns",editor_column_color:"Colour",editor_style_combined:"Combined",editor_series_type:"Draw as",editor_series_type_line:"Line",editor_series_type_column:"Columns",editor_series_type_area:"Area",editor_series_axis:"Value axis",editor_series_axis_auto:"Automatic (by unit)",editor_series_axis_left:"Left",editor_series_axis_right:"Right",editor_series_aggregate:"Combine with",editor_series_aggregate_auto:"As the card",editor_series_aggregate_mean:"Average",editor_series_aggregate_sum:"Sum",editor_series_aggregate_min:"Lowest",editor_series_aggregate_max:"Highest",editor_series_aggregate_first:"First",editor_series_aggregate_last:"Last",editor_series_aggregate_change:"Change (meters that count up)",editor_style_day_clock:"24-hour clock",day_clock_times_one:"once",day_clock_times:"{n} times",day_clock_a_day:"{text} a day",day_clock_busiest:"{total} · busiest {time}",day_clock_peak:"peak {value} at {time}",day_clock_state:"{name} {state}",day_clock_per_day:"{label} per day",day_clock_no_data:"Nothing recorded",day_clock_now:"Now",day_clock_on:"on",day_clock_average:"Average day · last {n} days",day_clock_on_days:"on {on} of {of} days",day_clock_so_far:"{duration} so far",day_clock_range:"{from} – {to}",day_clock_average_value:"{value} on average",editor_style_dumbbell:"Dumbbell",editor_ends:"Compare",editor_ends_range:"Lowest and highest in the period",editor_ends_then:"Start of the period and now",editor_ends_target:"Target and now",editor_show_now:"Mark the current value",dumbbell_low:"Low",dumbbell_high:"High",dumbbell_now:"Now",dumbbell_target:"Target",dumbbell_ago_hour_one:"An hour ago",dumbbell_ago_hour:"{n} hours ago",dumbbell_ago_day_one:"A day ago",dumbbell_ago_day:"{n} days ago",dumbbell_ago_week_one:"A week ago",dumbbell_ago_week:"{n} weeks ago",dumbbell_ago_month_one:"A month ago",dumbbell_ago_month:"{n} months ago",dumbbell_no_value:"No value",editor_style_funnel:"Funnel",editor_funnel_shape:"Shape",editor_funnel_shape_funnel:"Funnel (first stage at the top)",editor_funnel_shape_pyramid:"Pyramid (first stage at the bottom)",editor_funnel_percent_of:"Percentages",editor_funnel_percent_of_first:"Share of the first stage",editor_funnel_percent_of_previous:"Share of the stage before",editor_funnel_percent_of_none:"Don't show",editor_funnel_color_by:"Colour",editor_funnel_color_by_series:"One colour per entity",editor_funnel_color_by_bands:"By colour band",funnel_aria:"{style} of {names}",editor_style_grouped_bars:"Grouped bars",editor_mode:"Bars",editor_mode_grouped:"Side by side",editor_mode_stacked:"Stacked",editor_mode_percent:"Stacked to 100 %",editor_bars_color_by:"Colour",editor_bars_color_by_series:"One colour per series",editor_bars_color_by_bands:"By colour band",editor_bar_group:"Row",editor_bar_series:"Series",editor_bar_color:"Bar colour",grouped_bars_aria:"Bar chart of {names}",editor_style_heatmap:"Heatmap",heatmap_aria:"Heatmap of {name}",heatmap_hours:"Days averaged",heatmap_empty:"No readings",editor_grid:"Layout",editor_grid_hours:"Hour by weekday",editor_grid_calendar:"Calendar (a day per cell)",editor_color_by_scale:"Smooth scale",editor_cell_shape:"Cells",editor_cell_shape_square:"Square",editor_cell_shape_rounded:"Rounded",editor_cell_shape_hexagon:"Hexagon",editor_color_min:"Lowest colour at",editor_color_max:"Highest colour at",editor_legend:"Legend",editor_style_histogram:"Histogram",editor_count:"Count",editor_count_time:"Time spent in each range",editor_count_readings:"Readings in each range",editor_show_as:"Show as",editor_show_as_percent:"Share of the whole (%)",editor_show_as_total:"Hours or readings",editor_bins:"Number of bins (empty: automatic)",editor_bin_width:"Bin width (wins over the number)",editor_bars:"Two or more entities",editor_bars_side:"Bars side by side",editor_bars_overlap:"Bars over each other",editor_hist_x_axis:"Value labels along the bottom",histogram_readings:"{n} readings",histogram_reading:"1 reading",editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",chart_log_nothing:"Nothing above zero to draw on a log scale.",editor_style_lollipop:"Lollipop",editor_style_pictograph:"Pictograph",editor_unit_icon:"Icon (each entity can have its own)",editor_per_icon:"Each icon stands for (empty: automatic)",editor_group_size:"Icons per group (0: no groups)",editor_partial:"Part-fill an icon for fractions",editor_style_pie:"Pie / donut",editor_shape:"Shape",editor_shape_donut:"Donut",editor_shape_pie:"Pie",editor_center_label:"Line under the total",editor_gap:"Space between slices",editor_gradient:"Gradient fills",editor_style_polar_area:"Polar area",editor_polar_scale:"Scale",editor_polar_scale_shared:"One scale for all, from 0 to the largest value",editor_polar_scale_limits:"Each slice from its entity's minimum to maximum",editor_polar_color_by:"Colour",editor_polar_color_by_series:"One colour per entity",editor_polar_color_by_shades:"Shades of one colour, darker for more",editor_polar_color_by_bands:"By colour band",editor_polar_color:"Colour for shades",polar_area_aria:"Polar area chart of {names}",editor_style_radar:"Radar",editor_radar_scale:"Scale",editor_radar_scale_limits:"Each axis from its entity's minimum to maximum",editor_radar_scale_shared:"One scale for all, from 0 to the largest value",editor_radar_fill:"Fill the shapes",editor_radar_axis:"Axis name (entities with the same axis name line up across groups)",radar_aria:"Radar chart of {names}",radar_other:"Other",editor_style_range_area:"Range area",editor_mean:"Draw the average as a line",editor_range_color:"Colour",editor_style_rings:"Rings",editor_rings_start_angle:"Start angle (0 is the top)",editor_rounded_ends:"Rounded ends",editor_style_sankey:"Sankey (flow)",editor_link_color:"Colour flows by",editor_link_color_auto:"Where they come from, or where they go after a middle node",editor_link_color_source:"Where they come from",editor_link_color_target:"Where they go",editor_from:"Flows from",editor_to:"Flows to",editor_flow_color:"Flow colour",sankey_aria:"Flow chart: {flows}",sankey_flow:"{from} to {to} {value}",sankey_no_flows:'Give each entity a "Flows from" and a "Flows to" in its options.',sankey_nothing:"Nothing is flowing right now.",editor_style_slope:"Slope",editor_measure:"Compare",editor_measure_value:"The reading then and now",editor_measure_change:"How much it rose in each period (meters)",editor_color_by_direction:"Up or down",editor_color_by_group:"By group",editor_increase:"A rise is",editor_increase_bad:"Bad (red)",editor_increase_good:"Good (green)",editor_group:"Group",slope_now:"Now",slope_ago:"{n} {unit} ago",slope_ago_one:"A {unit} ago",slope_previous:"Previous {n} {unit}",slope_previous_one:"Previous {unit}",slope_last:"Last {n} {unit}",slope_last_one:"Last {unit}",slope_unit_hour:"hour",slope_unit_hour_other:"hours",slope_unit_day:"day",slope_unit_day_other:"days",slope_unit_week:"week",slope_unit_week_other:"weeks",slope_unit_month:"month",slope_unit_month_other:"months",slope_entity_aria:"{name}, {from} to {to}",slope_no_reading:"no reading",editor_style_sparkline:"Sparklines",editor_spark:"Sparkline",editor_spark_line:"Line",editor_spark_area:"Area",editor_spark_column:"Columns",editor_spark_bar:"Bar under the name and value",editor_spark_color:"Colour",spark_aria:"Trend of {name}",editor_style_streamgraph:"Streamgraph",editor_baseline:"Shape",editor_baseline_wiggle:"Streamgraph (flowing)",editor_baseline_centre:"Centred",editor_baseline_share:"Share of the total (100 %)",editor_baseline_zero:"Stacked from zero",editor_stream_order:"Order",editor_stream_order_inside_out:"Biggest in the middle",editor_stream_order_listed:"As listed, first at the bottom",editor_stream_labels:"Names on the streams",editor_stream_curve:"Edges",stream_total:"Total",editor_style_sunburst:"Sunburst",editor_style_icicle:"Icicle",editor_sunburst_shape:"Shape",editor_sunburst_shape_full:"Full circle",editor_sunburst_shape_half:"Half circle",editor_hierarchy_color_by:"Colour",editor_hierarchy_color_by_group:"One colour per group",editor_hierarchy_color_by_bands:"By colour band",hierarchy_total:"Total",hierarchy_other:"Other",hierarchy_empty:"Nothing to show: no entity has a value above zero.",hierarchy_no_reading:"No reading:",sunburst_aria:"Sunburst of {names}",icicle_aria:"Icicle chart of {names}",editor_style_timeline:"State timeline",timeline_no_states:"No states recorded in this period.",timeline_for:"for {duration}",timeline_now:"Now",timeline_measurement:"Readings, not states: a line chart suits this one",editor_style_treemap:"Treemap",editor_treemap_color_by:"Colour",editor_treemap_color_by_group:"One colour per group",editor_treemap_color_by_bands:"By colour band",treemap_aria:"Treemap of {names}",treemap_total:"{value} in all",treemap_empty:"Nothing to show: no entity has a value above zero.",treemap_no_reading:"No reading:",treemap_other:"Other",editor_style_trend:"Trend",trend_min:"Low",trend_avg:"Average",trend_max:"High",editor_style_violin:"Violin",editor_shape_violin:"Violin",editor_shape_raincloud:"Raincloud (half violin, box and readings)",editor_box:"Box with the median and middle half",editor_bandwidth:"Smoothing (in the entity’s unit, empty for automatic)",editor_split_by:"One shape per",editor_split_by_none:"Entity",editor_split_by_day:"Entity and day",editor_split_by_week:"Entity and week",editor_split_by_month:"Entity and month",violin_median:"median {value}",violin_none:"No readings",violin_raincloud:"Raincloud",editor_style_waffle:"Waffle",editor_waffles:"Waffles",editor_waffles_one:"One, split between the entities",editor_waffles_each:"One per entity, side by side",editor_headline:"Show the first share in large type",editor_style_waterfall:"Waterfall",editor_steps:"Each step is",editor_steps_change:"How much it changed in the period",editor_steps_current:"Its current value",editor_start_from_first:"Start from the first entity's reading at the start of the period",editor_total:"Show the total at the end",editor_waterfall_invert:"Counts down (a rise in these is a drop in the total)",waterfall_start:"Start",waterfall_end:"End",waterfall_total:"Total",waterfall_no_readings:"No readings",waterfall_aria:"Waterfall chart: {bars}",editor_style_wind_rose:"Wind rose",wind_prevailing:"Prevailing",wind_mean_speed:"Mean speed",wind_strongest:"Strongest",wind_calm:"Calm",wind_speed:"Speed",wind_speed_unit:"Speed ({unit})",wind_share:"Of the time",wind_aria:"Wind rose, prevailing {direction} {share}",wind_aria_calm:"Wind rose, prevailing {direction} {share}, calm {calm}",wind_aria_still:"Wind rose, calm {calm}"};const yt="en",bt={[yt]:vt},_t={de:()=>import("./chartdeck-card.de-DDLut2_K.js"),es:()=>import("./chartdeck-card.es-C3h9DoGK.js"),fr:()=>import("./chartdeck-card.fr-DKOFcOhP.js"),nl:()=>import("./chartdeck-card.nl-BcWitJXu.js"),pt:()=>import("./chartdeck-card.pt-D1P6K3zy.js")},xt=new Map,wt="chartdeck-language-loaded";function $t(e){const t=[e];return e.includes("-")&&t.push(e.split("-")[0]),t}function kt(e){const t=$t(e).find(e=>void 0!==_t[e]);if(!t||bt[t])return Promise.resolve();let o=xt.get(t);return o||(o=_t[t]().then(e=>{return o=t,n=e.default,bt[o]=n,void("undefined"!=typeof window&&window.dispatchEvent(new Event(wt)));var o,n}).catch(()=>{xt.delete(t)}),xt.set(t,o)),o}function Mt(e){const t=function(e){return e?.locale?.language??e?.language??yt}(e),o=$t(t).find(e=>void 0!==bt[e]);return o||(kt(t),yt)}function zt(e,t,o){const n=bt[Mt(e)][t]??bt[yt][t]??t;return o?n.replace(/\{(\w+)\}/g,(e,t)=>t in o?String(o[t]):e):n}Object.keys(_t);{const e=function(){if("undefined"!=typeof document){const e=document.querySelector("home-assistant")?.hass,t=e?.locale?.language??e?.language;if(t)return t}try{const e=JSON.parse(globalThis.localStorage?.getItem("selectedLanguage")??"null");if("string"==typeof e&&e)return e}catch{}}();e&&kt(e)}function At(e){return null==e||""===e}function Et(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function St(e,t,o){const[n,...a]=t,r=function(e,t){return Array.isArray(e)?[...e]:Et(e)?{...e}:"number"==typeof t?[]:{}}(e,n),i=r,s=a.length?St(i[n],a,o):o,l=a.length>0&&Et(s)&&0===Object.keys(s).length;return At(s)?Array.isArray(r)&&"number"==typeof n?r.splice(n,1):delete i[n]:l&&Et(r)?delete i[n]:i[n]=s,r}function Ct(e,t,o){return 0===t.length||At(o)&&void 0===function(e,t){let o=e;for(const n of t){if("object"!=typeof o||null===o)return;o=o[n]}return o}(e,t)?e:St(e,t,o)}function jt(e){return"string"==typeof e?e:e.entity}function Nt(e,t,o,n){if("entity"===o&&(At(n)||"string"!=typeof n))return e;const a=[...e.entities??[]],r=a[t];if(void 0===r)return e;const i="string"==typeof r?{entity:r}:{...r};At(n)?delete i[o]:i[o]=n;const s=Object.keys(i);return a[t]=1===s.length&&"entity"===s[0]&&"string"==typeof i.entity?i.entity:i,{...e,entities:a}}const Lt=2.5,Tt=.5,Ft=12;function Ot(e,t){const o=e;return{width:o.line_width??t.line_width??Lt,dots:o.dots??!0===t.dots,onTop:!0===o.on_top}}function Pt(e,t){return[...e.filter(e=>!t(e)),...e.filter(t)]}function Dt(e){return e.map(([e,t])=>`M${Math.round(100*e)/100},${Math.round(100*t)/100}h0`).join("")}function Ut(e){return Math.round(10*(e+3.5))/10}function Ht(e,t){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<Tt||e>Ft))throw new Error(`${t} must be a number from 0.5 to 12`)}function It(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`${t} must be true or false`)}function Bt(e){Ht(e.line_width,'"line_width"'),It(e.dots,'"dots"');for(const t of e.entities??[])"object"==typeof t&&(Ht(t.line_width,`"line_width" of ${t.entity}`),It(t.dots,`"dots" of ${t.entity}`),It(t.on_top,`"on_top" of ${t.entity}`))}const qt=[{name:"title",path:["title"]}],Zt=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],Rt=[{name:"color_icon",path:["color_icon"],default:!1}],Wt=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],Vt=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],Yt=[{name:"start_angle",path:["start_angle"]},{name:"end_angle",path:["end_angle"]},{name:"center",path:["center"],default:"value"},{name:"center_text",path:["center_text"]},{name:"tick_labels",path:["tick_labels"],default:!1}],Gt=new Map;const Xt=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],Jt=[{name:"attribute",path:["attribute"]}],Kt=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],Qt={number:{min:Tt,max:Ft,step:.5,mode:"box",unit_of_measurement:"px"}},eo=new Map;function to(e){let t=eo.get(e);return t||(t=[...Kt,{name:"dots",path:["dots"],default:e}],eo.set(e,t)),t}const oo=Vt.map(({name:e,path:t})=>({name:e,path:t})),no=[{name:"title",selector:{text:{}}}],ao=Vt.map(({name:e})=>({name:e,selector:{ui_action:{}}})),ro=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],io=new Map;let so;function lo(e){const t=Mt(e);if(so?.language!==t){const o=t=>zt(e,t);so={language:t,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(e=>({value:e,label:o(`editor_curve_${e}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return so.schema}function co(e){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(t=>({value:t,label:zt(e,`editor_sort_${t}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const uo={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function ho(e,t){const o=e=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:e}});switch(e){case"device_class":return o(t.deviceClasses);case"domain":return o(t.domains);case"entity":return{entity:{multiple:!0}};default:return{[e]:{multiple:!0}}}}const po=new Map;function mo(e,t){const o=function(e){const t=new Set,o=new Set;for(const n of Object.values(e?.states??{})){const e=n.attributes?.device_class;"string"==typeof e&&e&&t.add(e),o.add(n.entity_id.slice(0,n.entity_id.indexOf(".")))}return{deviceClasses:[...t].sort(),domains:[...o].sort()}}(t),n=`${o.deviceClasses.join()}|${o.domains.join()}`,a=po.get(e);if(a?.key===n)return a.schema;const r=uo[e].map(t=>({name:`${e}_${t}`,selector:ho(t,o)}));return po.set(e,{key:n,schema:r}),r}let fo;function go(e,t){let o=e;for(const n of t){if("object"!=typeof o||null===o)return;o=o[n]}return o}function vo(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;const o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&o.every(o=>vo(e[o],t[o]))}function yo(e,t){const o={};for(const n of t){const t=go(e,n.path)??n.default;void 0!==t&&(o[n.name]=t)}return o}function bo(e,t,o){const n=yo(e,t);let a=e;for(const r of t){const e=o[r.name];vo(n[r.name],e)||(a=Ct(a,r.path,void 0!==r.default&&vo(e,r.default)?void 0:e))}return a}const _o="var(--divider-color, rgba(127, 127, 127, 0.3))",xo="var(--primary-color, #03a9f4)",wo="var(--secondary-text-color, #727272)";function $o(e,t,o,n){const a=(n-90)*Math.PI/180;return[(e+o*Math.cos(a)).toFixed(2),(t+o*Math.sin(a)).toFixed(2)]}function ko(e,t,o,n){return $o(e,t,o,n).join(" ")}function Mo(e,t,o,n,a){const r=a-n>180?1:0;return`M ${ko(e,t,o,n)} A ${o} ${o} 0 ${r} 1 ${ko(e,t,o,a)}`}function zo(e){return q`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(e){switch(e){case"bar":return Z`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${_o} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${xo} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${_o} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${xo} />`;case"thin":return Z`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${wo} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${_o} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${xo} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${wo} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${_o} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${xo} />`;case"segmented":return Z`${[0,1].map(e=>Array.from({length:8},(t,o)=>Z`<rect x=${6+6.75*o} y=${0===e?9:23} width="5" height="9" rx="1.5"
            fill=${o<(0===e?6:3)?xo:_o} />`))}`;case"tank":return Z`${[14,36].map((e,t)=>Z`
          <rect x=${e} y="5" width="14" height="30" rx="4" fill=${_o} />
          <rect x=${e} y=${0===t?13:23} width="14" height=${0===t?22:12} rx="4" fill=${xo} />`)}`;case"ring":return Z`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${_o} stroke-width="5" />
        <path d=${Mo(32,20,14,0,250)} fill="none" stroke=${xo} stroke-width="5" stroke-linecap="round" />`;case"arc":return Z`
        <path d=${Mo(32,21,14,-135,135)} fill="none" stroke=${_o} stroke-width="5" stroke-linecap="round" />
        <path d=${Mo(32,21,14,-135,40)} fill="none" stroke=${xo} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[e,t]=$o(32,32,18,25);return Z`
        <path d=${Mo(32,32,22,-90,90)} fill="none" stroke=${_o} stroke-width="5" />
        <path d=${Mo(32,32,22,-90,25)} fill="none" stroke=${xo} stroke-width="5" />
        <line x1="32" y1="32" x2=${e} y2=${t} stroke=${wo} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${wo} />`}default:return Z``}}(e)}
  </svg>`}function Ao(e){let t=1/0,o=-1/0;for(const n of e)for(const e of n)for(const n of[e.v,e.min,e.max])"number"==typeof n&&(n<t&&(t=n),n>o&&(o=n));return t===1/0?void 0:[t,o]}function Eo([e,t],o=.08){if(e===t)return[e-1,t+1];const n=(t-e)*o;return[e-n,t+n]}function So(e,t){const[o,n]=e,[a,r]=t,i=n===o?0:(r-a)/(n-o);return e=>a+(e-o)*i}const Co=["linear","log"],jo=["outside","inside"],No=!0,Lo=!0,To="outside",Fo=!0,Oo=!1,Po="linear",Do=e=>"number"==typeof e&&Number.isFinite(e);function Uo(e){const t=e;for(const o of["x_axis","y_axis"])if(void 0!==t[o]&&"boolean"!=typeof t[o])throw new Error(`"${o}" must be true or false`);if(void 0!==t.axis_labels&&!jo.includes(t.axis_labels))throw new Error(`"axis_labels" must be one of: ${jo.join(", ")}`);if(void 0!==t.gridlines){const e=t.gridlines;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const t of["horizontal","vertical"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"gridlines.${t}" must be true or false`)}for(const o of["y_min","y_max"])if(void 0!==t[o]&&!Do(t[o]))throw new Error(`"${o}" must be a number`);if(Do(t.y_min)&&Do(t.y_max)&&t.y_min>=t.y_max)throw new Error('"y_min" must be below "y_max"');if(void 0!==t.y_scale&&!Co.includes(t.y_scale))throw new Error(`"y_scale" must be one of: ${Co.join(", ")}`);if("log"===t.y_scale)for(const o of["y_min","y_max"])if(Do(t[o])&&t[o]<=0)throw new Error(`"${o}" must be above 0 on a log scale`)}function Ho(e){const t=e,o=t.gridlines??{};return{x:t.x_axis??No,y:t.y_axis??Lo,labels:t.axis_labels??To,horizontal:o.horizontal??Fo,vertical:o.vertical??Oo,min:Do(t.y_min)?t.y_min:void 0,max:Do(t.y_max)?t.y_max:void 0,scale:t.y_scale??Po}}function Io(e,t){if(!(e>0&&Number.isFinite(e)))return 1;const o=e/Math.max(1,t),n=10**Math.floor(Math.log10(o));for(const a of[1,2,5])if(a*n>=o*(1-1e-9))return a*n;return 10*n}function Bo(e){return Math.max(0,-Math.floor(Math.log10(e)+1e-9))}const qo=e=>Number(e.toPrecision(12));function Zo(e,t,o){let[n,a]=Eo(e??[0,1]);void 0!==t.min&&(n=t.min),void 0!==t.max&&(a=t.max),a<=n&&(void 0!==t.min?a=n+Math.max(1,.1*Math.abs(n)):n=a-Math.max(1,.1*Math.abs(a)));const r=Io(a-n,o);void 0===t.min&&(n=qo(Math.floor(n/r+1e-9)*r)),void 0===t.max&&(a=qo(Math.ceil(a/r-1e-9)*r));const i=[];for(let s=Math.ceil(n/r-1e-9);s*r<=a+1e-9*r;s++)i.push(qo(s*r));return{domain:[n,a],ticks:i,decimals:Bo(r)}}const Ro=6e4,Wo=36e5,Vo=864e5,Yo=[...[1,5,10,15,30].map(e=>({unit:"minute",n:e,ms:e*Ro})),...[1,2,3,6,12].map(e=>({unit:"hour",n:e,ms:e*Wo})),...[1,2,7].map(e=>({unit:"day",n:e,ms:e*Vo})),...[1,2,3,6].map(e=>({unit:"month",n:e,ms:30.44*e*Vo})),...[1,2,5,10,20,50,100].map(e=>({unit:"year",n:e,ms:365.25*e*Vo}))];const Go=e=>-new Date(e).getTimezoneOffset()*Ro;function Xo(e){if(!e)return Go;let t;try{t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return Go}return e=>{const o={};for(const n of t.formatToParts(e))o[n.type]=Number(n.value);return Date.UTC(o.year,o.month-1,o.day,o.hour%24,o.minute,o.second)-1e3*Math.floor(e/1e3)}}function Jo(e,t){return e-t(e-t(e))}function Ko(e,t,o,n){const a=[],r=e.end+t(e.end);for(let i=o,s=0;i<=r&&s<1e3;i=n(i),s++){const o=Jo(i,t);o>=e.start&&o<=e.end&&o!==a[a.length-1]&&a.push(o)}return a}function Qo(e,t,o=Go){const{unit:n,n:a}=function(e,t){return Yo.find(o=>e/o.ms<=Math.max(1,t))??Yo[Yo.length-1]}(e.end-e.start,t),r=e.start+o(e.start);if("minute"===n||"hour"===n||"day"===n&&7!==a){const t=a*("minute"===n?Ro:"hour"===n?Wo:Vo);return{unit:n,ticks:Ko(e,o,Math.ceil(r/t)*t,e=>e+t)}}if("day"===n){const t=Math.ceil(r/Vo);return{unit:n,ticks:Ko(e,o,(t+((4-t)%7+7)%7)*Vo,e=>e+7*Vo)}}const i=new Date(r);if("month"===n){let t=i.getUTCFullYear(),s=i.getUTCMonth();Date.UTC(t,s)<r&&(s+=1),s=Math.ceil(s/a)*a,t+=Math.floor(s/12),s%=12;const l=e=>{const t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+a)};return{unit:n,ticks:Ko(e,o,Date.UTC(t,s),l)}}let s=i.getUTCFullYear();return Date.UTC(s,0)<r&&(s+=1),s=Math.ceil(s/a)*a,{unit:n,ticks:Ko(e,o,Date.UTC(s,0),e=>Date.UTC(new Date(e).getUTCFullYear()+a,0))}}function en(e){return"server"===e?.locale?.time_zone?e.config?.time_zone:void 0}function tn(e){const t=e?.locale?.time_format;return"12"===t||"24"!==t&&void 0}const on=new Map;function nn(e,t,o){const n=`${e}|${t}|${JSON.stringify(o)}`;let a=on.get(n);if(!a){try{a=new Intl.DateTimeFormat(e,{...o,timeZone:t})}catch{a=new Intl.DateTimeFormat(void 0,o)}on.set(n,a)}return a}function an(e,t,o=!1){return nn(t?.locale?.language??"en",en(t),{hour:"numeric",minute:"2-digit",...o?{second:"2-digit"}:{},hour12:tn(t)}).format(e)}function rn(e,t){return nn(t?.locale?.language??"en",en(t),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:tn(t)}).format(e)}function sn(e,t,o,n,a){const r=n?.locale?.language??"en",i=en(n),s=e+(a??Xo(i))(e),l=new Date(s),c=s%Vo===0;switch(t){case"minute":case"hour":return c?nn(r,i,{weekday:"short"}).format(e):an(e,n);case"day":return o<=7*Vo?nn(r,i,{weekday:"short"}).format(e):nn(r,i,{day:"numeric",month:"short"}).format(e);case"month":return nn(r,i,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(e);default:return nn(r,i,{year:"numeric"}).format(e)}}function ln(e,t){if(e.length<=t)return e;const o=[];let n=[];for(const r of e)null===r.v?(n.length&&o.push(n),o.push([r]),n=[]):n.push(r);n.length&&o.push(n);const a=e.length;return o.flatMap(e=>null===e[0].v?e:function(e,t){if(e.length<=t||t<3)return e;const o=[e[0]],n=(e.length-2)/(t-2);let a=0;for(let r=0;r<t-2;r++){const t=Math.floor(r*n)+1,i=Math.min(Math.floor((r+1)*n)+1,e.length-1),s=i,l=Math.min(Math.floor((r+2)*n)+1,e.length);let c=0,d=0;const u=Math.max(1,l-s);for(let o=s;o<l;o++)c+=e[o].t,d+=e[o].v;c/=u,d/=u;let h=t,p=-1;const m=e[a];for(let o=t;o<i;o++){const t=Math.abs((m.t-c)*(e[o].v-m.v)-(m.t-e[o].t)*(d-m.v));t>p&&(p=t,h=o)}o.push(e[h]),a=h}return o.push(e[e.length-1]),o}(e,Math.max(3,Math.round(e.length/a*t))))}const cn=36e5,dn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],un=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],hn=new Map;function pn(e){let t=hn.get(e);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),hn.set(e,t)),t}function mn(e,t){const o={};for(const n of pn(t).formatToParts(new Date(e)))o[n.type]=n.value;return{year:Number(o.year),month:Number(o.month),day:Number(o.day),hour:Number(o.hour)%24,minute:Number(o.minute),second:Number(o.second),weekday:dn.indexOf(o.weekday)+1}}function fn(e,t){const o=mn(e,t);return Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute,o.second)-1e3*Math.floor(e/1e3)}function gn(e,t,o,n=1,a=0,r=0,i=0){const s=Date.UTC(t,o-1,n,a,r,i),l=new Date(s),c=fn(s-864e5,e),d=fn(s+864e5,e),u=[s-c,s-d].filter(t=>{const o=mn(t,e);return o.year===l.getUTCFullYear()&&o.month===l.getUTCMonth()+1&&o.day===l.getUTCDate()&&o.hour===l.getUTCHours()&&o.minute===l.getUTCMinutes()&&o.second===l.getUTCSeconds()});return u.length?Math.min(...u):function(e,t,o,n){for(;t-e>1e3;){const a=1e3*Math.floor((e+t)/2e3);fn(a,n)===o?e=a:t=a}return t}(s-d,s-c,c,e)}function vn(e,t,o){const n=new Date(Date.UTC(e,t-1,o));return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate()}}function yn(e,t,o){const n=mn(t,o.timeZone);switch(e){case"hour":return t-t%1e3-1e3*(60*n.minute+n.second);case"day":return gn(o.timeZone,n.year,n.month,n.day);case"week":{const e=(n.weekday-o.firstDay+7)%7,t=vn(n.year,n.month,n.day-e);return gn(o.timeZone,t.year,t.month,t.day)}case"month":return gn(o.timeZone,n.year,n.month,1);case"year":return gn(o.timeZone,n.year,1,1)}}function bn(e,t,o,n){if("hour"===e)return t+o*cn;const a=mn(t,n.timeZone);let{year:r,month:i,day:s}=a;if("day"===e)({year:r,month:i,day:s}=vn(r,i,s+o));else if("week"===e)({year:r,month:i,day:s}=vn(r,i,s+7*o));else{const t=vn(r,i+("year"===e?12*o:o),1),n=vn(t.year,t.month+1,0).day;({year:r,month:i}=t),s=Math.min(s,n)}return gn(n.timeZone,r,i,s,a.hour,a.minute,a.second)}function _n(e,t,o,n,a=1e4){const r=[yn(e,t,n)];let i=1;for(;r[r.length-1]<o&&r.length<=a;){const t="hour"===e?r[0]+i*cn:bn(e,r[0],i,n);r.push(t>r[r.length-1]?t:r[r.length-1]+cn),i++}return 1===r.length&&r.push(bn(e,r[0],1,n)),r}function xn(e){try{const t=new Intl.Locale(e),o=t.getWeekInfo?.().firstDay??t.weekInfo?.firstDay;return"number"==typeof o&&o>=1&&o<=7?o:1}catch{return 1}}function wn(e){const t=e?.locale,o=e?.config?.time_zone,n="server"===t?.time_zone&&function(e){if("string"!=typeof e||""===e)return!1;try{return pn(e),!0}catch{return!1}}(o)?o:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",a=un.indexOf(String(t?.first_weekday??"language"))+1;return{timeZone:n,firstDay:a>0?a:xn(t?.language??e?.language??"en")}}const $n=["hour","day","week","month"],kn=["day","week","month","year"],Mn=["now","end"],zn={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},An={hour:36e5,day:864e5,week:6048e5};function En(e,t,o){const n="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof n||!Number.isInteger(n)||n<t)throw new Error(o);return n}function Sn(e,t,o){if(!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`);return e}function Cn(e){if(null==e)return zn;if("object"!=typeof e||Array.isArray(e))throw new Error('"period" must have "last" and "unit"');const t=e,o={last:En(t.last??zn.last,1,'"period.last" must be a whole number of 1 or more'),unit:Sn(t.unit??zn.unit,$n,"period.unit"),offset:En(t.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==t.navigate&&!0===t.navigate,until:Sn(t.until??"now",Mn,"period.until")};if(void 0!==t.navigate&&"boolean"!=typeof t.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==t.calendar&&(o.calendar=Sn(t.calendar,kn,"period.calendar")),o}function jn(e,t,o){if("month"===e.unit){if(o)return{start:bn("month",t,-e.last,o),end:t};const n=new Date(t);return n.setMonth(n.getMonth()-e.last),{start:n.getTime(),end:t}}return{start:t-e.last*An[e.unit],end:t}}function Nn(e,t,o,n=0){const a=Math.max(0,e.offset+n);if(e.calendar){const n=e.calendar,r=bn(n,yn(n,t,o),-a,o),i=bn(n,r,1,o);return{start:r,end:0===a&&"now"===e.until?t:i,live:0===a,back:a}}if("month"===e.unit){return{...jn(e,0===a?t:bn("month",t,-a*e.last,o),o),live:0===a,back:a}}const r=e.last*An[e.unit];return{start:t-(a+1)*r,end:t-a*r,live:0===a,back:a}}const Ln=new WeakMap;function Tn(e,t){const o=Ln.get(e);return o&&o.key===JSON.stringify(t)?o.steps:0}function Fn(e,t,o){Ln.set(e,{key:JSON.stringify(t),steps:Math.max(-t.offset,o)})}const On=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Pn=new Map(On.map((e,t)=>[e,22.5*t])),Dn=[[/north/g,"n"],[/south/g,"s"],[/east/g,"e"],[/west/g,"w"]];function Un(e){const t=(e%360+360)%360;return 360===t?0:t}function Hn(e){if("number"==typeof e)return Number.isFinite(e)?Un(e):null;if("string"!=typeof e)return null;const t=e.trim().toLowerCase();if(""===t)return null;const o=Number(t.replace(/\s*°$/,""));if(Number.isFinite(o))return Un(o);let n=t.replace(/[\s_-]+/g,"");for(const[a,r]of Dn)n=n.replace(a,r);return Pn.get(n.toUpperCase())??null}function In(e){if("number"==typeof e)return Number.isFinite(e)?e:null;if("on"===e)return 1;if("off"===e)return 0;if("string"!=typeof e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function Bn(e){return e.bearing?Hn:In}function qn(e){return"string"==typeof e?e:"number"==typeof e||"boolean"==typeof e?String(e):void 0}function Zn(e,t,o=!1,n=In){return o?{t:e,v:null,s:qn(t)}:{t:e,v:n(t)}}function Rn(e,t,o=!1,n=In){const a=[];for(const r of e??[]){const e=r.lu??r.lc;if(void 0===e)continue;const i=t?r.a?.[t]:r.s;a.push(Zn(Math.round(1e3*e),i,o,n))}return a}const Wn=e=>"number"==typeof e&&Number.isFinite(e)?e:null;function Vn(e,t){return(e??[]).map(e=>{const o="number"==typeof e.start?e.start:Date.parse(e.start);let n;return n="change"===t?Wn(e.change):"state"===t?Wn(e.state)??Wn(e.mean):"min"===t||"max"===t?Wn(e[t])??Wn(e.mean)??Wn(e.state):Wn(e.mean)??Wn(e.state),{t:o,v:n,min:e.min??null,max:e.max??null}})}function Yn(e){const t=(e.end-e.start)/864e5;return t<=2?"5minute":t<=35?"hour":t<=400?"day":"month"}function Gn(e){return{period:Yn(e),types:["mean","min","max","state"],value:"mean"}}function Xn(e){const t=e.attribute?`${e.entity}|${e.attribute}`:e.entity;return e.text?`${t}|text`:e.bearing?`${t}#bearing`:t}const Jn=["hour","day","week","month"],Kn=["mean","sum","min","max","first","last","change"];function Qn(e){if(void 0!==e.aggregate&&!Kn.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Kn.join(", ")}`);if(void 0!==e.group_by){if(!Jn.includes(e.group_by))throw new Error(`"group_by" must be one of: ${Jn.join(", ")}`);return{unit:e.group_by,aggregate:e.aggregate??"mean"}}}function ea(e,t,o,n,a=!1){const r="change"===o?function(e){let t=null;return e.map(e=>{if(null===e.v)return null;if(null===t)return t=e.v,0;if(e.v>=t){const o=e.v-t;return t=e.v,o}return t-e.v>.1*Math.abs(t)?(t=e.v,Math.max(0,e.v)):0})}(e):[],i=[];let s=0;for(let l=0;l+1<t.length;l++){const c=t[l],d=t[l+1],u=Math.min(d,n);for(;s<e.length&&e[s].t<c;)s++;const h={t:c,end:d,v:null};if(i.push(h),u<=c)continue;const p=[],m=e[s-1];let f=s;const g=f<e.length&&e[f].t<u?e[f].t:u;for(m&&g>c&&p.push({v:m.v,dt:g-c,reading:!1,carried:!0,up:0});f<e.length&&e[f].t<u;f++){const t=f+1<e.length&&e[f+1].t<u?e[f+1].t:u,o=e[f];p.push({v:o.v,dt:t-o.t,reading:!0,carried:!0===o.carried,up:r[f]??null})}const v=p.filter(e=>null!==e.v);if(0===v.length)continue;const y=v.map(e=>e.v);switch(a&&(h.min=Math.min(...y),h.max=Math.max(...y)),o){case"mean":{const e=v.reduce((e,t)=>e+t.dt,0);h.v=e>0?v.reduce((e,t)=>e+t.v*t.dt,0)/e:y.reduce((e,t)=>e+t,0)/y.length;break}case"min":h.v=Math.min(...y);break;case"max":h.v=Math.max(...y);break;case"first":h.v=y[0];break;case"last":h.v=y[y.length-1];break;case"sum":{const e=v.filter(e=>e.reading&&!e.carried);h.v=e.length?e.reduce((e,t)=>e+t.v,0):null;break}case"change":h.v=v.reduce((e,t)=>e+(t.reading&&!t.carried?t.up??0:0),0)}}return i}function ta(e,t,o,n=1/0,a=!1){const r=[];let i=0;for(let s=0;s+1<t.length;s++){const l=t[s],c=t[s+1];for(;i<e.length&&e[i].t<l;)i++;let d=i;const u=[],h=[],p=[];for(;d<e.length&&e[d].t<c;d++){const t=e[d];null===t.v||t.carried||(u.push(t.v),h.push(t.min??t.v),p.push(t.max??t.v))}let m=null;if(u.length&&l<n)if("mean"===o)m=u.reduce((e,t)=>e+t,0)/u.length;else if("sum"===o||"change"===o)m=u.reduce((e,t)=>e+t,0);else if("min"===o)m=Math.min(...u);else if("max"===o)m=Math.max(...u);else if("last"===o)m=u[u.length-1];else{const t=e.slice(0,i).reverse().find(e=>null!==e.v),o=e.slice(i,d).find(e=>e.carried&&null!==e.v);m=(t??o)?.v??u[0]}const f={t:l,end:c,v:m};a&&null!==m&&(f.min=Math.min(...h),f.max=Math.max(...p)),r.push(f)}return r}const oa={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},na={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};function aa(e,t,o,n=!1){const a=t.timeZone===o&&("week"!==e.unit||1===t.firstDay),r="hour"!==e.unit&&a?e.unit:"hour",{types:i,value:s}=na[e.aggregate];return{period:r,types:n?[...new Set([...i,"min","max"])]:i,value:s}}const ra={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class ia{constructor(e){this.onChange=e,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(e,t,o,n,a={}){const r=a.live??!0,i="statistics"===n?a.statistics??Gn(o):void 0,s=`${n}|${t.map(Xn).join(",")}|${i?JSON.stringify(i):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>la,c=void 0!==this.pausedAt&&"statistics"===n&&r;this.pausedAt=void 0;const d=Math.max(6e4,(o.end-o.start)/100),u=o.start<this.loadedFrom||(r?this.loadedTo!==1/0:o.end>this.loadedTo+d);(s!==this.shape||u||l&&r||c)&&(this.shape=s,this.load(e,t,o,r,i)),"ready"===this.status&&"history"===n&&this.loadedTo===1/0&&this.appendLive(e,t);const h=new Map;for(const[p,m]of this.data)h.set(p,sa(m,o));return{status:this.status,data:h,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(e,t,o,n,a){const r=++this.generation;this.status="loading",this.loadedFrom=o.start,this.loadedTo=n?1/0:o.end,clearTimeout(this.timer);const i=a?async function(e,t,o,n=Gn(o)){const a=new Map;if(!e.callWS||0===t.length)return a;const r=[...new Set(t.map(e=>e.entity))],i=await e.callWS({type:"recorder/statistics_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),statistic_ids:r,period:n.period,types:n.types});for(const s of t)a.set(Xn(s),Vn(i?.[s.entity],n.value));return a}(e,t,o,a):async function(e,t,o){const n=new Map;if(!e.callWS||0===t.length)return n;const a={type:"history/history_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),significant_changes_only:!1},r=[...new Set(t.filter(e=>!e.attribute).map(e=>e.entity))],i=[...new Set(t.filter(e=>e.attribute).map(e=>e.entity))],s=[];return r.length&&s.push(e.callWS({...a,entity_ids:r,minimal_response:!0,no_attributes:!0}).then(e=>{for(const o of t.filter(e=>!e.attribute))n.set(Xn(o),Rn(e?.[o.entity],void 0,o.text,Bn(o)))})),i.length&&s.push(e.callWS({...a,entity_ids:i,no_attributes:!1}).then(e=>{for(const o of t.filter(e=>e.attribute))n.set(Xn(o),Rn(e?.[o.entity],o.attribute,o.text,Bn(o)))})),await Promise.all(s),n}(e,t,o);i.then(o=>{if(r===this.generation){this.data=o,this.status="ready",this.error=void 0,this.seen.clear();for(const o of t)this.seen.set(Xn(o),e.states[o.entity]);a&&n&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},ra[a.period])),this.onChange()}},e=>{r===this.generation&&(this.status="error",this.error=e instanceof Error?e.message:String(e?.message??e),this.onChange())})}appendLive(e,t){for(const o of t){const t=Xn(o),n=e.states[o.entity];if(!n||this.seen.get(t)===n)continue;this.seen.set(t,n);const a=Date.parse(n.last_updated??n.last_changed??"")||Date.now(),r=this.data.get(t)??[],i=r[r.length-1];i&&a<=i.t||(r.push(Zn(a,o.attribute?n.attributes?.[o.attribute]:n.state,o.text,Bn(o))),this.data.set(t,r))}}}function sa(e,t){let o=0;for(;o<e.length&&e[o].t<t.start;)o++;const n=e.slice(o).filter(e=>e.t<=t.end),a=e[o-1];return a?[{...a,t:t.start,carried:!0},...n]:n}const la=6e4,ca=new WeakMap;function da(e,t){let o=ca.get(e);return o||(o=new ia(t),ca.set(e,o)),o}const ua=["smooth","straight","step"],ha=e=>(Math.round(100*e)/100).toString();function pa(e){return e.map(([e,t],o)=>`${o?"L":"M"}${ha(e)},${ha(t)}`).join("")}function ma(e,t){return 0===e.length?"":1===e.length?`M${ha(e[0][0])},${ha(e[0][1])}h0`:"smooth"===t?function(e){const t=e.length;if(t<3)return pa(e);const o=[],n=[];for(let i=0;i<t-1;i++)o.push(e[i+1][0]-e[i][0]),n.push(0===o[i]?0:(e[i+1][1]-e[i][1])/o[i]);const a=[n[0]];for(let i=1;i<t-1;i++)a.push(n[i-1]*n[i]<=0?0:(n[i-1]+n[i])/2);a.push(n[t-2]);for(let i=0;i<t-1;i++){if(0===n[i]){a[i]=0,a[i+1]=0;continue}const e=a[i]/n[i],t=a[i+1]/n[i],o=e*e+t*t;if(o>9){const r=3/Math.sqrt(o);a[i]=r*e*n[i],a[i+1]=r*t*n[i]}}let r=`M${ha(e[0][0])},${ha(e[0][1])}`;for(let i=0;i<t-1;i++){const t=o[i]/3;r+=`C${ha(e[i][0]+t)},${ha(e[i][1]+a[i]*t)},${ha(e[i+1][0]-t)},${ha(e[i+1][1]-a[i+1]*t)},${ha(e[i+1][0])},${ha(e[i+1][1])}`}return r}(e):"step"===t?function(e){let t=`M${ha(e[0][0])},${ha(e[0][1])}`;for(let o=1;o<e.length;o++)t+=`H${ha(e[o][0])}V${ha(e[o][1])}`;return t}(e):pa(e)}function fa(e){const t=[];let o=[];for(const n of e)null===n.v?(o.length&&t.push(o),o=[]):o.push(n);return o.length&&t.push(o),t}const ga=1e3,va=200,ya=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],ba=["history","statistics"];function _a(e){if(Cn(e.period),Qn(e),void 0!==e.source&&!ba.includes(e.source))throw new Error(`"source" must be one of: ${ba.join(", ")}`);const t=[e.curve,...(e.entities??[]).map(e=>"object"==typeof e?e.curve:void 0)];for(const o of t)if(void 0!==o&&!ua.includes(o))throw new Error(`"curve" must be one of: ${ua.join(", ")}`)}function xa(e,t=Date.now(),o={}){const n=Cn(e.raw.period),a=e.raw.source??"history",r=wn(e.hass),i=Nn(n,t,r,n.navigate?Tn(e.host,n):0),s=Qn(e.raw),l={start:s?yn(s.unit,i.start,r):i.start,end:i.end},c=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute,...o.text?{text:!0}:{}})),d=da(e.host,e.requestUpdate),u=s&&"statistics"===a?aa(s,r,e.hass.config?.time_zone,!0===o.range):void 0,h=u?{start:l.start-oa[u.period],end:l.end}:l,p=d.get(e.hass,c,h,a,{live:i.live,statistics:u}),m=s?_n(s.unit,l.start,l.end,r):[],f=e.raw.curve??"smooth",g=Math.min(l.end,t),v=e.items.map((e,t)=>{const n=e.config;let r=p.data.get(Xn(c[t]))??[];const i=r[r.length-1];return s?r="statistics"===a?ta(r,m,s.aggregate,g,!0===o.range):ea(r,m,o.aggregate?.(e)??s.aggregate,g,!0===o.range):"history"===a&&i&&null!==i.v&&i.t<g&&(r=[...r,{t:g,v:i.v}]),{index:t,entity:e,points:r,color:Ce(n.color??ya[t%ya.length]),curve:n.curve??f,dash:!0===n.dash}});return{status:p.status,error:p.error,range:l,period:n,source:a,series:v,live:i.live,back:i.back,zone:r,group:s}}const wa=(e,t,o)=>1===e?t:o;function $a(e,t,o,n,a){const r=(e,t)=>zt(a,e,t);if(e.calendar&&o<2)return r({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[e.calendar][o]);if(!e.calendar&&0===o){const t=e.last;return r({hour:wa(t,"period_last_hour","period_last_hours"),day:wa(t,"period_last_day","period_last_days"),week:wa(t,"period_last_week_rolling","period_last_weeks"),month:wa(t,"period_last_month_rolling","period_last_months")}[e.unit],{n:t})}const i={timeZone:n.timeZone},s=mn(t.start,n.timeZone).year===mn(Date.now(),n.timeZone).year;let l;"year"===e.calendar?i.year="numeric":"month"===e.calendar?Object.assign(i,{month:"long",year:"numeric"}):(Object.assign(i,{day:"numeric",month:"short"}),s||(i.year="numeric"),"day"===e.calendar&&(i.weekday="short"),e.calendar||"hour"!==e.unit&&"day"!==e.unit||Object.assign(i,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(a?.locale?.language??a?.language??"en",i)}catch{l=new Intl.DateTimeFormat("en",i)}const c=e.calendar?t.end-1:t.end;return"day"===e.calendar||"month"===e.calendar||"year"===e.calendar?l.format(t.start):l.formatRange(t.start,c)}function ka(e,t,o=Date.now()){const{period:n}=e;if(!n.navigate)return W;const a=Tn(t.host,n),r=e=>o=>{o.stopPropagation(),Fn(t.host,n,e),t.requestUpdate()},i=$a(n,e.range,e.back,e.zone,t.hass);let s="";if(0!==a){const a=Nn(n,o,e.zone);s=$a(n,a,a.back,e.zone,t.hass)}const l=e=>q`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${e}></path></svg>`;return q`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${zt(t.hass,"period_previous")} @click=${r(a+1)}>
      ${l("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")}
    </button>
    <span class="period-label" aria-live="polite">${i}</span>
    <button
      class="period-step period-next"
      aria-label=${zt(t.hass,"period_next")}
      ?disabled=${0===e.back}
      @click=${r(a-1)}
    >
      ${l("M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")}
    </button>
    ${0!==a?q`<button
            class="period-return"
            aria-label=${zt(t.hass,"period_return",{label:s})}
            @click=${r(0)}
          >
            ${s}
          </button>`:W}
  </div>`}const Ma=r`
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
`;function za(e){!function(e){ca.get(e)?.pause()}(e)}function Aa(e,t){const{show:o}=t.config;return o.name||o.value?q`<div class="series-header">
    ${e.series.map(e=>q`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
          <span class="swatch" style="background:${e.color}"></span>
          ${o.name?q`<span class="series-name">${e.entity.name}</span>`:W}
          ${o.value?q`<span class="series-value">${e.entity.display}</span>`:W}
        </div>`)}
  </div>`:W}function Ea(e,t){return"loading"===e.status?q`<div class="chart-message">${zt(t.hass,"chart_loading")}</div>`:"error"===e.status?q`<div class="chart-message error">
      ${zt(t.hass,"chart_error",{error:e.error??""})}
    </div>`:e.series.every(e=>e.points.every(e=>null===e.v))?q`<div class="chart-message">${zt(t.hass,"chart_no_data")}</div>`:void 0}function Sa(e,t,o=W,n=W){return q`<svg
    class="plot"
    viewBox="0 0 ${ga} ${va}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${t}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${ga} height=${204}></rect>
      </clipPath>
      ${o}
    </defs>
    ${n}
    <g clip-path="url(#cd-draw-in)">${e}</g>
  </svg>`}const Ca=r`
  ${Ma}
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
`;function ja(e,t,o){const{locale:n,grouping:a}=function(e){const t=e?.locale?.language??"en";switch(e?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:t,grouping:!0}}}(o),r=new Intl.NumberFormat(n,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:a});let i=r.format(0===e?0:e);return 0===Number(e.toFixed(t))&&(i=r.format(0)),i}function Na(e,t){return t?`${e} ${t}`:e}const La=[[1,2,3,4,5,6,7,8,9],[1,2,5],[1]],Ta=[2,3,5,10,20,50,100],Fa=e=>Number(e.toPrecision(12)),Oa=e=>Fa(10**e),Pa=e=>Math.floor(Math.log10(e)+1e-9);function Da(e){return e.map(e=>{const t=e=>"number"==typeof e&&e<=0;return t(e.v)||t(e.min)||t(e.max)?{...e,v:t(e.v)?null:e.v,...void 0!==e.min?{min:t(e.min)?null:e.min}:{},...void 0!==e.max?{max:t(e.max)?null:e.max}:{}}:e})}function Ua(e,t,o,n=1){const a=[];for(let r=Pa(e);r<=Pa(t)+n;r+=n)for(const n of o){const o=Fa(n*10**r);o>=e*(1-1e-9)&&o<=t*(1+1e-9)&&a.push(o)}return a}function Ha(e,t,o){const n=Pa(e),a=Ua(Oa(n-2),Oa(n+2),t),r=o?a.filter(t=>t<=e*(1+1e-9)):a.filter(t=>t>=e*(1-1e-9));return o?r[r.length-1]:r[0]}function Ia(e,t){const o=Math.log10(e[0]),n=Math.log10(e[1]),[a,r]=t,i=n===o?0:(r-a)/(n-o);return e=>e>0?a+(Math.log10(e)-o)*i:NaN}const Ba=new WeakMap;function qa(e){let t=Ba.get(e.host);if(!t){const o={width:e.host.clientWidth||400};t=o,Ba.set(e.host,o),"undefined"!=typeof ResizeObserver&&(o.observer=new ResizeObserver(t=>{const n=Math.round(t[t.length-1].contentRect.width);Math.round(n/70)!==Math.round(o.width/70)&&(o.width=n,e.requestUpdate())}),o.observer.observe(e.host))}return t.width}function Za(e){Ba.get(e)?.observer?.disconnect(),Ba.delete(e)}function Ra(e){const t=Ho(e.raw);return Math.max(0,qa(e)-32-(t.y&&"outside"===t.labels?40:0))}function Wa(e,t,o,n,a=4){const r=Ho(e.raw),i="log"===r.scale&&"line"===e.raw.style,s=i?function(e,t,o){let[n,a]=e??[1,100];void 0!==t.min&&t.min>0&&(n=t.min),void 0!==t.max&&t.max>0&&(a=t.max),a>0||(a=n>0?10*n:100),n>0||(n=a/1e3);const r=void 0!==t.min&&t.min===n,i=void 0!==t.max&&t.max===a;a<=n&&(r?a=10*n:i?n=a/10:(n/=Math.sqrt(10),a*=Math.sqrt(10)));const s=Math.max(2,o+1),l=[...La.map(e=>({mantissas:e,every:1})),...Ta.map(e=>({mantissas:[1],every:e}))];let c=l[l.length-1],d=[n,a],u=[];for(const f of l){const e=r?n:Ha(n,f.mantissas,!0),t=i?a:Ha(a,f.mantissas,!1),o=Ua(e,t,f.mantissas,f.every);if(c=f,d=[e,t],u=o,o.length<=s)break}const h=c.every>1?[1]:La[0],p=9===c.mantissas.length?[]:Ua(d[0],d[1],h).filter(e=>!u.includes(e)).slice(0,200),m=u.map(e=>Math.max(0,-Pa(e)));return{domain:d,ticks:u,decimals:Math.max(0,...m),minor:p,tickDecimals:m}}(o,r,a):Zo(o,r,a),l=Math.max(2,Math.min(8,Math.floor((n??Ra(e))/70))),{unit:c,ticks:d}=Qo(t,l,Xo(en(e.hass)));return{options:r,value:s,times:d,unit:c,range:t,scales:{x:So([t.start,t.end],[0,ga]),y:(i?Ia:So)(s.domain,[va,0]),domain:s.domain}}}const Va=e=>Math.round(1e4*e)/100+"%";function Ya(e,t,o){const n=e.ticks[t];return e.tickDecimals?function(e,t,o){if(Math.abs(e)<1e4)return ja(e,t,o);const n=o?.locale?.language??o?.language??"en";try{return new Intl.NumberFormat(n,{notation:"compact",maximumFractionDigits:1}).format(e)}catch{return new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}).format(e)}}(n,e.tickDecimals[t],o.hass):ja(n,e.decimals,o.hass)}function Ga({axes:e,ctx:t,content:o,label:n,defs:a=W,overlay:r=W,hover:i,right:s,xLabel:l,yLabel:c,gestures:d,classes:u="",below:h=W}){const{options:p}=e,m="outside"===p.labels,f=p.y&&e.value.ticks.length>0,g=p.x&&e.times.length>0,v=f?function(e,t,o){const{scales:n,value:a}=e;return a.ticks.map((e,r)=>{const i=n.y(e)/va;return q`<span class="axis-label ${i<.08?"top":i>.92?"bottom":""}" style="top:${Va(i)}"
      >${o?o(e):Ya(a,r,t)}</span
    >`})}(e,t,c):[],y=f?q`<div class="y-axis">${v}</div>`:W,b=g?q`<div class="x-axis">${function(e,t,o){const{scales:n,range:a}=e,r=Xo(en(t.hass));return e.times.map(i=>{const s=n.x(i)/ga;return q`<span class="axis-label ${s<.05?"start":s>.95?"end":""}" style="left:${Va(s)}"
      >${o?o(i):e.label?e.label(i):sn(i,e.unit,a.end-a.start,t.hass,r)}</span
    >`})}(e,t,l)}</div>`:W,_=f?q`<span class="axis-sizer" aria-hidden="true"
        >${e.value.ticks.map((o,n)=>c?c(o):Ya(e.value,n,t)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:W,x=s&&p.y&&s.value.ticks.length>0?s:void 0,w=x?q`<span class="axis-sizer" aria-hidden="true"
        >${x.value.ticks.map(e=>ja(e,x.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:W,$=x?q`<div class="y-axis right">${m?w:W}${function(e,t){return e.value.ticks.map(o=>{const n=e.y(o)/va;return q`<span class="axis-label ${n<.08?"top":n>.92?"bottom":""}" style="top:${Va(n)}"
      >${ja(o,e.value.decimals,t.hass)}</span
    >`})}(x,t)}</div>`:W,k=`plot-wrap axes-${p.labels} ${f?"has-y":""} ${g?"has-x":""} ${x?"has-right":""} ${h===W?"":"has-overview"}`;return q`<div class=${k}>
    ${m&&f?q`<div class="y-axis">${_}${v}</div>`:W}
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
      ${Sa(o,n,a,function(e){const{options:t,scales:o}=e;return Z`<g class="grid">
    ${t.horizontal?(e.value.minor??[]).map(e=>Z`<line class="minor" x1="0" x2=${ga} y1=${o.y(e)} y2=${o.y(e)}></line>`):W}
    ${t.horizontal?e.value.ticks.map(e=>Z`<line x1="0" x2=${ga} y1=${o.y(e)} y2=${o.y(e)}></line>`):W}
    ${t.vertical?e.times.map(e=>Z`<line x1=${o.x(e)} x2=${o.x(e)} y1="0" y2=${va}></line>`):W}
  </g>`}(e))} ${m?W:q`${y}${$}${b}`}
      ${r}
    </div>
    ${m?q`${$}${b}`:W} ${h}
  </div>`}const Xa=r`
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
`,Ja=["above","over","hidden"];function Ka(e){if(void 0!==e.compact&&"boolean"!=typeof e.compact)throw new Error('"compact" must be true or false');if(void 0!==e.header&&!Ja.includes(e.header))throw new Error(`"header" must be one of: ${Ja.join(", ")}`)}function Qa(e){return{compact:!0===e.compact,header:e.header??"above"}}function er(e,t,o){return q`<div class="frame ${e.compact?"compact":""}">
    ${"above"===e.header?t:W}${o}
  </div>`}function tr(e){return e===W?W:q`<div class="header-over" @pointerdown=${e=>e.stopPropagation()}>${e}</div>`}const or=r`
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
`,nr=["none","normal","percent"];function ar(e){const t=e.stack;if(void 0!==t&&!nr.includes(t))throw new Error(`"stack" must be one of: ${nr.join(", ")}`)}function rr(e,t){let o=0,n=e.length;for(;o<n;){const a=o+n>>1;e[a].t<=t?o=a+1:n=a}return 0===o?null:e[o-1].v}function ir(e,t){const o=e[0]?.length??0,n=e.map(()=>[]);for(let a=0;a<o;a++){let o=1;if("percent"===t){const t=e.reduce((e,t)=>e+Math.abs(t[a]??0),0);o=t>0?100/t:0}let r=0,i=0;e.forEach((e,t)=>{const s=e[a];if(null==s)return void n[t].push(null);const l=s*o;l>=0?(n[t].push([r,r+l]),r+=l):(n[t].push([i,i+l]),i+=l)})}return n}function sr(e){const t=e[0]?.length??0,o=[];for(let n=0;n<t;n++){let t=null;for(const o of e)null!==o[n]&&void 0!==o[n]&&(t=(t??0)+o[n]);o.push(t)}return o}function lr(e){let t=0,o=0;for(const n of e)for(const e of n)e&&(t=Math.min(t,e[0],e[1]),o=Math.max(o,e[0],e[1]));return[t,o]}function cr(e,t){const o=e*t;return o+190<=t?"right":o>=190?"left":e>.5?"pin-left":"pin-right"}const dr=3e3;function ur(e,t){if(0===e.length)return-1;let o=0,n=e.length-1;for(;o<n;){const a=o+n>>1;e[a].t<t?o=a+1:n=a}return o>0&&t-e[o-1].t<=e[o].t-t?o-1:o}const hr=new WeakMap;function pr(e){return hr.get(e)?.t}function mr(e){const t=hr.get(e);void 0!==t?.timer&&clearTimeout(t.timer),hr.delete(e)}function fr(e){return!1!==e.tooltip}function gr(e){const t=e.tooltip;if(void 0!==t&&"boolean"!=typeof t)throw new Error('"tooltip" must be true or false')}function vr(e,t,o){const n=function(e){let t=hr.get(e);return t||(t={},hr.set(e,t)),t}(e.host),a=t=>{t!==n.t&&(n.t=t,e.requestUpdate())},r=()=>{void 0!==n.timer&&clearTimeout(n.timer),n.timer=void 0};return{move(e){r();const n=e.currentTarget.getBoundingClientRect(),i=n.width>0?Math.min(1,Math.max(0,(e.clientX-n.left)/n.width)):0;a(function(e,t){let o;for(const n of e){const e=ur(n,t);if(e<0)continue;const a=n[e].t;(void 0===o||Math.abs(a-t)<Math.abs(o-t))&&(o=a)}return o}(o,t.start+i*(t.end-t.start)))},leave(e){r(),"touch"===e.pointerType||"pen"===e.pointerType?n.timer=setTimeout(()=>{n.timer=void 0,a(void 0)},dr):a(void 0)}}}const yr=e=>Math.round(1e4*e)/100+"%";function br(e){const t=new Set(e.map(e=>e.entity.unit));return 1===t.size?[...t][0]:""}function _r(e,t,o,n){return q`<div class="tooltip-row tooltip-total">
    <span class="swatch"></span>
    <span class="tooltip-name">${zt(e.hass,"chart_total")}</span>
    <span class="tooltip-value">${null===t?"—":Na(ja(t,n,e.hass),o)}</span>
  </div>`}function xr(e,t,o,n,a,r={}){if(void 0===n)return W;const i=o.x(n)/ga;if(!(i>=0&&i<=1))return W;const s=cr(i,a),l=t.map(e=>{const t=ur(e.points,n);return{s:e,p:t<0?void 0:e.points[t]}});return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${yr(i)}"></div>
    ${l.map(({s:e,p:t})=>{if(!t||null===t.v)return W;const n=r.dotY?r.dotY(e,t):o.y(t.v);if(null===n)return W;const a=n/va;return a>=0&&a<=1?q`<span
        class="hover-dot"
        style="left:${yr(o.x(t.t)/ga)};top:${yr(a)};background:${e.color}"
      ></span>`:W})}
    <div class="tooltip ${s}" style=${s.startsWith("pin")?"":`left:${yr(i)}`}>
      <div class="tooltip-time">${r.heading?r.heading(n):rn(n,e.hass)}</div>
      ${l.map(({s:t,p:o})=>q`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${r.text?r.text(t,o):function(e,t,o){return e&&null!==e.v?Na(ja(e.v,t.entity.decimals,o.hass),t.entity.unit):"—"}(o,t,e)}</span>
          </div>`)}
      ${r.footer?r.footer(l):W}
    </div>
  </div>`}const wr=r`
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
`,$r=["all","last","minmax","ends"],kr=["auto","above","below","center"];function Mr(e){const t=e;if(!0===t.labels)return{show:t.labels_show??"all",position:t.labels_position??"auto",hideOverlap:!0!==t.labels_overlap}}function zr(e,t){const o=e.map((e,t)=>null===e.v?-1:t).filter(e=>e>=0);if(0===o.length)return[];const n=o[o.length-1],a=o[0];let r=a,i=a;for(const l of o)e[l].v>e[r].v&&(r=l),e[l].v<e[i].v&&(i=l);const s="last"===t?[n]:"ends"===t?[n,a]:"minmax"===t?[r,i]:[n,r,i,...o];return[...new Set(s)]}function Ar(e,t){const o=e[t].v,n=[e[t-1]?.v??null,e[t+1]?.v??null].filter(e=>null!==e);if(0===n.length)return"above";const a=n.reduce((e,t)=>e+t,0)/n.length;return o<a?"below":"above"}function Er(e,t){const o=e.x-e.width/2,n="above"===t?e.y-6-14:"below"===t?e.y+6:e.y-7;return[o,n,o+e.width,n+14]}const Sr=(e,t)=>e[0]<t[2]&&t[0]<e[2]&&e[1]<t[3]&&t[1]<e[3];function Cr(e){return Math.ceil(6*e.length)+6}const jr=e=>Math.round(1e4*e)/100+"%";function Nr(e,t,o,n){const a=[],r=[];for(const c of e){const e=o.skip?c.points.map(e=>o.skip(e)?{...e,v:null}:e):c.points;!t.hideOverlap&&"all"===t.show&&e.filter(e=>null!==e.v).length>40||zr(e,t.show).forEach((i,s)=>{const l=e[i],[d,u]=o.at(l);if(!(d>=0&&d<=1&&u>=0&&u<=1))return;const h=ja(l.v,c.decimals,n),p="auto"===t.position?Ar(e,i):t.position,m="above"===p?"below":"above",f={x:d*o.width,y:u*o.height,width:Cr(h),sides:"center"===p?["center"]:[p,m],text:h,color:c.color,fx:d,fy:u};(s<3&&"all"===t.show?a:"all"===t.show?r:a).push(f)})}const i=[...a,...r].slice(0,600),s=function(e,t,o){const n=[];return e.map(e=>{for(const a of e.sides){const r="auto"===a?"above":a,i=Er(e,r);if(!o)return{side:r,box:i};if(!(i[1]<-2||i[3]>t+2||n.some(e=>Sr(e,i))))return n.push(i),{side:r,box:i}}})}(i,o.height,t.hideOverlap),l=i.map((e,t)=>({b:e,p:s[t]})).filter(e=>void 0!==e.p);return 0===l.length?W:(l.sort((e,t)=>e.b.fx-t.b.fx),q`<div class="point-labels">
    ${l.map(({b:e,p:t})=>q`<span
          class="point-label ${t.side} ${function(e,t,o){return e-t/2<0?"start":e+t/2>o?"end":""}(e.fx*o.width,e.width,o.width)}"
          style="left:${jr(e.fx)};top:${jr(e.fy)};--cd-label:${e.color}"
          >${e.text}</span
        >`)}
  </div>`)}const Lr=r`
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
`,Tr=["none","line","figure"],Fr=!1,Or=!1,Pr="none";function Dr(e){const t=e.extremes??{};return{min:t.min??Fr,max:t.max??Or,average:t.average??Pr}}function Ur(e){return e.min||e.max||"none"!==e.average}function Hr(e,t,o,n=[]){const a=e.filter(e=>e.dot).map(e=>({l:e.x*t-6,r:e.x*t+6,t:e.y*o-6,b:e.y*o+6})),r=[...n,...a];return e.map(e=>{const n=(e=>Math.ceil(6.2*e.length)+12)(e.text),a=e.x*t,i=e.y*o,s=a-n/2<0?"start":a+n/2>t?"end":"center",l="start"===s?0:"end"===s?t-n:a-n/2,c=(e,t=0)=>{const o=8+20*t,a="above"===e?i-o-18:i+o;return{l:l,r:l+n,t:a,b:a+18}},d=e=>e.t>=0&&e.b<=o,u="above"===e.prefer?"below":"above",h=[{side:e.prefer,tier:0},{side:u,tier:0},{side:e.prefer,tier:1},{side:u,tier:1}],p=h.find(e=>(e=>d(e)&&!r.some(t=>((e,t)=>e.l<t.r&&t.l<e.r&&e.t<t.b&&t.t<e.b)(t,e)))(c(e.side,e.tier)))??h.find(e=>0===e.tier&&d(c(e.side)))??h[0];r.push(c(p.side,p.tier));return{side:p.side,align:s,tier:p.tier}})}function Ir(e,t,o,n){if("day"===n?.unit||"week"===n?.unit||"month"===n?.unit){const t="month"===n.unit?{month:"short",year:"numeric"}:{weekday:"short",day:"numeric",month:"short"};try{return new Intl.DateTimeFormat(o?.locale?.language??"en",{...t,timeZone:en(o)}).format(e)}catch{return new Intl.DateTimeFormat("en",t).format(e)}}return t.end-t.start>864e5?rn(e,o):an(e,o)}const Br=e=>Math.round(1e4*e)/100+"%";function qr(e){const{ctx:t,scales:o,width:n,height:a}=e,r=Dr(t.raw);if(!Ur(r))return{lines:W,overlay:W};const i=e.series.filter(e=>!1!==e.entity.config.extremes).map(t=>{const{min:o,max:n}=function(e){let t,o;for(const n of e)null===n.v||n.carried||((!t||n.v<t.v)&&(t=n),(!o||n.v>o.v)&&(o=n));return{min:t,max:o}}(t.points),a="none"===r.average?void 0:function(e,t,o=1/0){const n=e.filter(e=>null!==e.v&&!(e.carried&&!t));if(0!==n.length){if(t){let t=0,n=0;for(let a=0;a<e.length;a++){const r=e[a];if(null===r.v)continue;const i=a+1<e.length?e[a+1].t:r.t,s=Math.max(0,Math.min(i,o)-r.t);t+=r.v*s,n+=s}if(n>0)return t/n}return n.reduce((e,t)=>e+t.v,0)/n.length}}(t.points,e.timeWeighted,e.until);return{s:t,min:r.min?o:void 0,max:r.max?n:void 0,average:a}}),s=(e,o)=>Na(ja(e,o.entity.decimals,t.hass),o.entity.unit),l=e=>zt(t.hass,e),c=e=>e>=0&&e<=1,d=[];for(const f of i){for(const n of["max","min"]){const a=f[n];if(!a)continue;const r=o.y(a.v)/va;if(!c(r))continue;const i=l("max"===n?"extremes_high":"extremes_low");d.push({s:f.s,kind:n,spec:{x:o.x(a.t)/ga,y:r,text:`${i} ${s(a.v,f.s)} · ${Ir(a.t,e.range,t.hass,e.group)}`,prefer:"max"===n?"above":"below",dot:!0}})}if("line"===r.average&&void 0!==f.average){const e=o.y(f.average)/va;c(e)&&d.push({s:f.s,kind:"average",spec:{x:1,y:e,text:`${l("extremes_average")} ${s(f.average,f.s)}`,prefer:"above"}})}}const u=Hr(d.map(e=>e.spec),n,a,e.obstacles),h="line"===r.average?Z`<g class="average-lines">${i.map(e=>{if(void 0===e.average)return W;const t=o.y(e.average);return Z`<line class="average-line" x1="0" x2=${ga} y1=${t} y2=${t} stroke=${e.s.color}></line>`})}</g>`:W,p="figure"===r.average&&i.some(e=>void 0!==e.average)?q`<div class="extreme-figures">
          ${i.map(t=>void 0===t.average?W:q`<div class="extreme-figure">
                  ${e.series.length>1?q`<span class="swatch" style="background:${t.s.color}"></span>`:W}
                  <span>${l("extremes_average")} ${s(t.average,t.s)}</span>
                </div>`)}
        </div>`:W,m=q`<div class="extremes-layer">
    ${d.map((e,t)=>{const{side:o,align:n,tier:a}=u[t],{x:r,y:i,text:s}=e.spec,l="start"===n?"left:0":"end"===n?"right:0":`left:${Br(r)}`;return q`<span
        class="extreme-label ${e.kind} ${o} ${n} ${a?"far":""}"
        style="${l};top:${Br(i)};--series:${e.s.color}"
        >${s}</span
      >`})}
    ${d.map(e=>e.spec.dot?q`<span
            class="extreme-dot ${e.kind}"
            style="left:${Br(e.spec.x)};top:${Br(e.spec.y)};border-color:${e.s.color}"
          ></span>`:W)}
    ${p}
  </div>`;return{lines:h,overlay:m}}const Zr=r`
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
`,Rr=[{name:"extremes_max",path:["extremes","max"],default:Or},{name:"extremes_min",path:["extremes","min"],default:Fr},{name:"extremes_average",path:["extremes","average"],default:Pr}];const Wr={name:"extremes",path:["extremes"],default:!0},Vr=new Map;function Yr(e,t){const o=Mt(t);let n=Vr.get(o);return n&&n[0]===e[0]||(n=[...e,{name:"extremes",selector:{boolean:{}}}],Vr.set(o,n)),n}const Gr=new WeakMap;function Xr(e){let t=Gr.get(e);return t||(t=[...e,Wr],Gr.set(e,t)),t}const Jr=["auto","shared","independent"];function Kr(e,t,o,n,a){const r=Math.max(0,qa(e)-32),i=function(e,t,o){const n=e=>Math.max(1,Math.floor((t+12)/(e+12))),a=void 0===o?n(150):Math.min(o,n(110));return Math.max(1,Math.min(e,a))}(t.series.length,r,o.columns),s=function(e,t){return Math.max(0,(e-12*(t-1))/t)}(r,i),l=new Set(t.series.map(e=>e.entity.unit).filter(e=>""!==e)),c="shared"===o.scale||"auto"===o.scale&&l.size<=1?Ao(t.series.map(e=>e.points)):void 0,{show:d}=e.config;return q`<div class="multiples" style=${`grid-template-columns:repeat(${i}, minmax(0, 1fr))`}>
    ${t.series.map(o=>{const r=Wa(e,t.range,c??Ao([o.points]),s,2),i=d.name||d.value?q`<div class="entity panel-title" data-index=${o.index} tabindex="0" aria-label=${o.entity.label}>
              <span class="swatch" style="background:${o.color}"></span>
              ${d.name?q`<span class="series-name">${o.entity.name}</span>`:W}
              ${d.value?q`<span class="series-value">${function(e,t,o){if(void 0===t)return e.entity.display;const n=ur(e.points,t),a=n<0?void 0:e.points[n];return a&&null!==a.v?Na(ja(a.v,e.entity.decimals,o.hass),e.entity.unit):"—"}(o,n,e)}</span>`:W}
            </div>`:W,l=o.points.some(e=>null!==e.v)?a(o,r,s):q`<div class="chart-message">${zt(e.hass,"chart_no_data")}</div>`;return q`<div class="panel">${i}${l}</div>`})}
  </div>`}const Qr=r`
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
`;function ei(e,t,o){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t?0:Math.min(1,Math.max(0,(e-t)/(o-t)))}function ti(e,t,o){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t)return[0,0];const n=ei(e,t,o);if(t<0&&o>0){const e=ei(0,t,o);return n<e?[n,e]:[e,n]}return[0,n]}const oi=new Set;function ni(e){return(e.available?e.band.icon:void 0)??e.config.icon??(e.stateObj?void 0:"mdi:help-circle-outline")}function ai(e){return null==e||""===e}function ri(e){if(void 0===e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function ii(e,t,o="limit"){if(ai(e))return null;if("number"==typeof e)return Number.isFinite(e)?e:null;const n=String(e),a=ri(t.states[n]?.state);if(null===a&&!oi.has(n)){oi.add(n);const e="limit"===o?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${o} entity "${n}" is missing or not numeric; ${e}.`)}return a}function si(e,t){if(e.every(e=>"number"==typeof e.from))return e;const o=[];for(const n of e){const e=t?ii(n.from,t,"band start"):null;null!==e&&o.push({...n,from:e})}return o.length?o.sort((e,t)=>e.from-t.from):st}function li(e,t){const o=e.entity,n=t.states[o],a=e.name??n?.attributes?.friendly_name??o,r=e.unit??(e.attribute?"":n?.attributes?.unit_of_measurement??""),i=function(e,t){if(t)return e.attribute?t.attributes?.[e.attribute]:t.state}(e,n),s=function(e){return"number"==typeof e?Number.isFinite(e)?e:null:"string"==typeof e?ri(e):null}(i),l=null!==s;let c;c=ai(e.decimals)?e.attribute?l?function(e){const t=String(e),o=t.indexOf(".");return-1===o||/e/i.test(t)?0:Math.min(2,t.length-o-1)}(i):0:function(e,t,o){const n=e?.entities?.[t]?.display_precision;return"number"==typeof n?n:"%"===o?0:1}(t,o,r):e.decimals;const d=ii(e.min,t)??0,u=ii(e.max,t)??100,h=ii(e.target,t),p=si(e.severity,t);let m,f="";return l?(f=ja(s,c,t),m=Na(f,r)):m=n?function(e,t,o,n){const a=e.attribute;return a&&"string"==typeof o&&""!==o.trim()?n.formatEntityAttributeValue?.(t,a)??o:n.formatEntityState?.(t)??zt(n,"unavailable")}(e,n,i,t):zt(t,"entity_not_found"),{entityId:o,config:e,stateObj:n,available:l,value:s,min:d,max:u,target:h,name:a,unit:r,decimals:c,position:l?ei(s,d,u):0,span:l?ti(s,d,u):[0,0],targetPosition:null===h?null:ei(h,d,u),band:Te(l?s:-1/0,p),bands:p,valueText:f,display:m,label:`${a}, ${m}`}}function ci(e,t){if(!e.include)return[];const o=new Set(e.entities.map(e=>e.entity));return function(e,t,o){const n=Ze.get(e);if(n&&n.exclude===t&&n.states===o.states&&n.entities===o.entities&&n.devices===o.devices&&n.areas===o.areas)return n.ids;const a=[];for(const i of Object.values(o.states)){if(!Ue(i)||o.entities?.[i.entity_id]?.hidden)continue;const n=He(i,o);if(!Be(e,n)||qe(t,n))continue;const r=i.attributes?.friendly_name;a.push({id:i.entity_id,name:"string"==typeof r&&r?r:i.entity_id})}a.sort((e,t)=>e.name.localeCompare(t.name)||(e.id<t.id?-1:1));const r=a.map(e=>e.id);return Ze.set(e,{exclude:t,states:o.states,entities:o.entities,devices:o.devices,areas:o.areas,ids:r}),r}(e.include,e.exclude,t).filter(e=>!o.has(e))}const di=["above","below"],ui=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim());function hi(e,t){if(!Array.isArray(e.severity)||0===e.severity.length)return;const o=e.severity.map(e=>({...e,from:"string"==typeof e.from&&Number.isFinite(Number(e.from))?Number(e.from):e.from})),n=si(o,t).filter(e=>Number.isFinite(e.from));return n.length?[...n].sort((e,t)=>e.from-t.from):void 0}function pi(e){return"line"===e.type&&!0===e.history&&ui(e.value)?e.value.trim():void 0}const mi=new WeakMap;function fi(e,t,o=Date.now()){const n=function(e){const t=Array.isArray(e.annotations)?e.annotations:[];return[...new Set(t.map(pi).filter(e=>void 0!==e))]}(e.raw),a=new Map;if(0===n.length)return a;const r=function(e){let t=mi.get(e.host);return t||(t={statistics:new ia(e.requestUpdate),history:new ia(e.requestUpdate)},mi.set(e.host,t)),t}(e),i=Math.min(t.range.end,o),s=(e,t)=>{t.some(e=>null!==e.v)&&a.set(e,function(e,t){const o=e[e.length-1];return o&&null!==o.v&&o.t<t?[...e,{t:t,v:o.v}]:e}(t,i))};let l=n;const c=function(e,t){const{range:o,group:n,source:a,zone:r}=e;if("statistics"!==a&&o.end-o.start<=6048e5)return;return{period:n&&"statistics"===a?aa(n,r,t).period:Yn(o),types:["mean","state"],value:"mean"}}(t,e.hass.config?.time_zone);if(c){const o={start:t.range.start-oa[c.period],end:t.range.end},i=r.statistics.get(e.hass,n.map(e=>({entity:e})),o,"statistics",{live:t.live,statistics:c});if("loading"===i.status)return a;if("ready"===i.status){for(const e of n)s(e,sa(i.data.get(e)??[],t.range));l=n.filter(e=>!a.has(e))}}if(0===l.length)return a;const d=r.history.get(e.hass,l.map(e=>({entity:e})),t.range,"history",{live:t.live});if("ready"===d.status)for(const u of l)s(u,d.data.get(u)??[]);return a}function gi(e,t){const o=[];for(const n of e.values())for(const e of n)null!==e.v&&e.t>=t.start&&e.t<=t.end&&o.push(e.v);return o}function vi(e,t,o,n,a,r){const i=function(e){const t=[];let o=[];for(const n of e)if(null===n.v){const e=o[o.length-1];e&&n.t>e.t&&o.push({t:n.t,v:e.v}),o.length&&t.push(o),o=[]}else o.push(n);return o.length&&t.push(o),t}(e);if(0===i.length)return;const s=i.map(e=>ma(e.map(e=>[t.x(e.t),t.y(e.v)]),"step")).join(""),l=Z`<path
    class="threshold stepped ${n?"dashed":""}"
    d=${s}
    fill="none"
    stroke=${o}
  ></path>`,c="above"===a?0:va,d=r?e=>Ce(Te(e,r).color):()=>o,u=a?i.flatMap(e=>function(e,t,o,n){const a=e=>Math.round(100*e)/100,r=[];for(let i=0;i+1<e.length;i++){const s=e[i].v,l=a(t.x(e[i].t)),c=a(t.x(e[i+1].t));if(!(c>l))continue;const d=a(t.y(s)),u=n(s),h=`M${l},${d}H${c}V${o}H${l}Z`,p=r[r.length-1];p&&p.color===u?p.d+=h:r.push({color:u,d:h})}return r}(e,t,c,d)):[],h=new Map;for(const g of u)h.set(g.color,(h.get(g.color)??"")+g.d);const p=a?Z`<g class="threshold-zone ${a} ${r?"banded":""}">${[...h].map(([e,t])=>Z`<path d=${t} fill=${e}></path>`)}</g>`:void 0,m=i[i.length-1],f=m[m.length-1];return{line:l,zone:p,top:t.y(f.v)/va}}const yi=["line","band","time","state","point"],bi=["max","min","last","first"],_i={line:"red",band:"green",time:"grey",state:"amber",point:"primary"},xi=e=>"number"==typeof e&&Number.isFinite(e),wi=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim());function $i(e,t){if(!(void 0===e||xi(e)||wi(e)||"string"==typeof e&&""!==e.trim()&&Number.isFinite(Number(e))))throw new Error(`"${t}" must be a number or an entity id`)}const ki=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/,Mi=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{1,2}):(\d{2})(?::(\d{2}))?$/;function zi(e){return(Array.isArray(e)?e:"string"==typeof e?e.split(","):[]).map(e=>String(e).trim()).filter(e=>""!==e)}function Ai(e){const t=e.annotations;if(void 0!==e.zones&&"boolean"!=typeof e.zones)throw new Error('"zones" must be true or false');if(void 0!==t){if(!Array.isArray(t))throw new Error('"annotations" must be a list');t.forEach((e,t)=>{const o=e=>`annotations[${t}].${e}`;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`"annotations[${t}]" must have a "type"`);const n=e;if(!yi.includes(n.type))throw new Error(`"${o("type")}" must be one of: ${yi.join(", ")}`);for(const a of["label","color","state"])if(void 0!==n[a]&&"string"!=typeof n[a])throw new Error(`"${o(a)}" must be text`);for(const a of["dash","shade"])if(void 0!==n[a]&&"boolean"!=typeof n[a])throw new Error(`"${o(a)}" must be true or false`);if($i(n.value,o("value")),$i(n.from,o("from")),$i(n.to,o("to")),void 0!==n.entity&&!wi(n.entity))throw new Error(`"${o("entity")}" must be an entity id`);if("line"===n.type&&void 0===n.value)throw new Error(`"${o("value")}" is needed for a line`);if("band"===n.type&&void 0===n.from&&void 0===n.to)throw new Error(`"${o("from")}" or "${o("to")}" is needed for a band`);if("time"===n.type){if(void 0!==n.times&&"string"!=typeof n.times&&!Array.isArray(n.times))throw new Error(`"${o("times")}" must be a time or a list of times`);const e=zi(n.times).find(e=>!function(e){const t=e.trim(),o=ki.exec(t);return o?Number(o[1])<24&&Number(o[2])<60:Mi.test(t)||/\d{4}-\d{2}-\d{2}T.+(Z|[+-]\d{2}:?\d{2})$/.test(t)&&Number.isFinite(Date.parse(t))}(e));if(void 0!==e)throw new Error(`"${o("times")}" has "${e}": use 07:00 or 2026-10-28 07:00`)}if("state"===n.type&&void 0===n.entity)throw new Error(`"${o("entity")}" is needed for a state mark`);if(function(e,t){if(void 0!==e.history&&"boolean"!=typeof e.history)throw new Error(`"${t("history")}" must be true or false`);if(void 0!==e.zone&&!di.includes(e.zone))throw new Error(`"${t("zone")}" must be one of: ${di.join(", ")}`);if((!0===e.history||void 0!==e.zone)&&"line"!==e.type)throw new Error(`"${t("history")}" and "${t("zone")}" are for a line`);if(void 0!==e.severity){if("line"!==e.type)throw new Error(`"${t("severity")}" is for a line`);if(!Array.isArray(e.severity))throw new Error(`"${t("severity")}" must be a list of bands`);e.severity.forEach((e,o)=>{const n=e,a=n?.from;if(!("number"==typeof a&&Number.isFinite(a)||"string"==typeof a&&(Number.isFinite(Number(a))||ui(a)))||""===a)throw new Error(`"${t(`severity[${o}].from`)}" must be a number or an entity id`);if("string"!=typeof n?.color||""===n.color)throw new Error(`"${t(`severity[${o}].color`)}" is required`)})}}(n,o),void 0!==n.at&&!bi.includes(n.at))throw new Error(`"${o("at")}" must be one of: ${bi.join(", ")}`)})}}function Ei(e){return Array.isArray(e.annotations)?e.annotations:[]}function Si(e,t){if(void 0===e)return;if(xi(e))return e;const o=In(e);if(null!==o)return o;return In(t.states[e.trim()]?.state)??void 0}function Ci(e,t,o){const n=[],a=_n("day",t.start,t.end,o,800);for(const r of e){const e=ki.exec(r);if(e){for(const t of a){const a=mn(t,o.timeZone);n.push(gn(o.timeZone,a.year,a.month,a.day,+e[1],+e[2],+(e[3]??0)))}continue}const t=Mi.exec(r),i=t?gn(o.timeZone,+t[1],+t[2],+t[3],+t[4],+t[5],+(t[6]??0)):Date.parse(r);Number.isFinite(i)&&n.push(i)}return[...new Set(n.filter(e=>e>=t.start&&e<=t.end))].sort((e,t)=>e-t)}function ji(e,t,o,n){const a=[],r=t?.trim().toLowerCase();for(let i=0;i<e.length;i++){const t=e[i];if(i>0&&e[i-1].s===t.s)continue;if(void 0!==r&&t.s.toLowerCase()!==r)continue;let s=i+1;for(;s<e.length&&e[s].s===t.s;)s++;const l=s<e.length?e[s].t:n,c=Math.max(t.t,o.start);l<=o.start||c>o.end||a.push({start:c,end:Math.min(l,o.end),s:t.s})}return a}function Ni(e){return Math.ceil(5.8*e.length)+10}const Li=new WeakMap;function Ti(e){const t=Li.get(e);t&&t.generation++,Li.delete(e),function(e){const t=mi.get(e);t?.statistics.pause(),t?.history.pause()}(e)}const Fi=e=>Math.round(1e4*e)/100+"%";function Oi(e,t){return e.entity&&t.find(t=>t.entity.entityId===e.entity.trim())||t[0]}function Pi(e,t,o,n){const a=e.points.filter(e=>null!==e.v&&(n||!e.carried&&(e.t!==o.end||"last"===t)));if(0!==a.length)return"first"===t?a[0]:"last"===t?a[a.length-1]:a.reduce((e,o)=>("max"===t?o.v>e.v:o.v<e.v)?o:e)}function Di(e,t,o,n){const a=Ei(e.raw),r=!0===e.raw.zones&&t.series[0]?function(e,t){const[o,n]=t.domain;return e.map((a,r)=>{const i=Math.max(o,Number.isFinite(a.from)?a.from:o),s=Math.min(n,r+1<e.length?e[r+1].from:n);if(!(s>i))return Z``;const l=t.y(s),c=t.y(i);return Z`<rect class="zone" x="0" width=${ga} y=${l} height=${c-l} fill=${Ce(a.color)}></rect>`})}(t.series[0].entity.bands,o):[];if(0===a.length&&0===r.length)return{behind:W,front:W,overlay:W};const i=[...r],s=[],l=[],{range:c}=t,d=e=>o.x(e),[u,h]=o.domain,p=function(e,t,o){const n=[...new Set(Ei(e.raw).filter(e=>"state"===e.type&&e.entity).map(e=>e.entity.trim()))];if(0===n.length)return new Map;const a=n.join(",");let r=Li.get(e.host);if(!r||r.shape!==a||t.start<r.from||!o&&t.end>r.to+6e4||o&&r.to!==1/0){const i=(r?.generation??0)+1,s={shape:a,from:t.start,to:o?1/0:t.end,status:"loading",data:new Map,generation:i};r=s,Li.set(e.host,s);const l=e.hass.callWS?.({type:"history/history_during_period",start_time:new Date(t.start).toISOString(),end_time:new Date(t.end).toISOString(),entity_ids:n,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});l&&l.then(t=>{if(Li.get(e.host)===s&&s.generation===i){for(const e of n){const o=(t?.[e]??[]).map(e=>({t:Math.round(1e3*(e.lu??e.lc??0)),s:String(e.s??"")})).filter(e=>e.t>0);s.data.set(e,o.slice(-2e3))}s.status="ready",e.requestUpdate()}},()=>{Li.get(e.host)===s&&(s.status="error")})}const i=r;if("ready"===i.status&&o)for(const s of n){const t=e.hass.states[s];if(!t)continue;const o=Date.parse(t.last_changed??t.last_updated??""),n=i.data.get(s)??[],a=n[n.length-1];Number.isFinite(o)&&(!a||o>a.t&&a.s!==t.state)&&(n.push({t:o,s:t.state}),i.data.set(s,n))}return i.data}(e,c,t.live),m=fi(e,t),f=Math.min(c.end,Date.now()),g=[],v=(e,t,o,n)=>{const a=o.slice(0,2e3);if(s.push(Z`${a.map(e=>Z`<line class="mark-line ${n}" x1=${d(e)} x2=${d(e)} y1="0" y2=${va} stroke=${t}></line>`)}`),e.label&&a.length<=60)for(const r of a)g.push({t:r,label:e.label,color:t})};for(const b of a){const n=Ce(b.color??_i[b.type]),a="line"===b.type?m.get(pi(b)??""):void 0,r=a&&vi(a,o,n,!1!==b.dash,b.zone,hi(b,e.hass));if(r)r.zone&&i.push(r.zone),s.push(r.line),b.label&&l.push(q`<span
            class="annotation-label threshold ${r.top<.12?"below":""}"
            style="top:${Fi(r.top)};--cd-annotation:${n}"
            >${b.label}</span
          >`);else if("line"===b.type){const t=Si(b.value,e.hass);if(void 0===t||t<u||t>h)continue;const a=o.y(t);if(s.push(Z`<line class="threshold ${!1===b.dash?"":"dashed"}" x1="0" x2=${ga} y1=${a} y2=${a} stroke=${n}></line>`),b.label){const e=a/va;l.push(q`<span
            class="annotation-label threshold ${e<.12?"below":""}"
            style="top:${Fi(e)};--cd-annotation:${n}"
            >${b.label}</span
          >`)}}else if("band"===b.type){const t=void 0===b.from?u:Si(b.from,e.hass),a=void 0===b.to?h:Si(b.to,e.hass);if(void 0===t||void 0===a)continue;const r=Math.max(u,Math.min(t,a)),s=Math.min(h,Math.max(t,a));if(!(s>r))continue;const c=o.y(s);i.push(Z`<rect class="band" x="0" width=${ga} y=${c} height=${o.y(r)-c} fill=${n}></rect>`),b.label&&l.push(q`<span class="annotation-label band" style="top:${Fi(c/va)};--cd-annotation:${n}"
            >${b.label}</span
          >`)}else if("time"===b.type)v(b,n,Ci(zi(b.times),c,t.zone),"time");else if("state"===b.type){const e=ji(p.get(b.entity.trim())??[],b.state,c,f);b.shade&&i.push(Z`${e.map(e=>Z`<rect class="state-shade" x=${d(e.start)} width=${Math.max(0,d(e.end)-d(e.start))} y="0" height=${va} fill=${n}></rect>`)}`),v(b,n,e.map(e=>e.start).filter(e=>e>c.start),"state")}else if("point"===b.type){const a=Oi(b,t.series),r=a&&Pi(a,b.at??"max",c,void 0!==t.group);if(!a||!r)continue;const i=d(r.t)/ga,s=o.y(r.v)/va;if(!(i>=0&&i<=1&&s>=0&&s<=1))continue;const u=Na(ja(r.v,a.entity.decimals,e.hass),a.entity.unit),h=i<.1?"start":i>.9?"end":"";l.push(q`<span class="annotation-dot" style="left:${Fi(i)};top:${Fi(s)};background:${n}"></span>
          <span
            class="annotation-label point ${h} ${s<.2?"below":""}"
            style="left:${Fi(i)};top:${Fi(s)};--cd-annotation:${n}"
            >${b.label?q`<span class="point-name">${b.label}</span> `:W}${u}</span
          >`)}}const y=function(e,t,o=2){const n=e.map((e,t)=>t).sort((t,o)=>e[t].x-e[o].x),a=Array.from({length:o},()=>-1/0),r=e.map(()=>{});for(const i of n){const{x:o,width:n}=e[i],s=o+2+n>t?o-2-n:o+2,l=a.findIndex(e=>s>=e+4);l<0||(a[l]=s+n,r[i]=l)}return r}(g.map(e=>({x:d(e.t)/ga*n,width:Ni(e.label)})),n);return g.forEach((t,o)=>{const a=y[o];if(void 0===a)return;const r=d(t.t)/ga,i=r*n+2+Ni(t.label)>n;l.push(q`<span
        class="annotation-label mark ${i?"end":""}"
        style="left:${Fi(r)};top:${15*a}px;--cd-annotation:${t.color}"
        title=${zt(e.hass,"annotation_at",{label:t.label,time:rn(t.t,e.hass)})}
        >${t.label}</span
      >`)}),{behind:i.length?Z`<g class="annotations-behind">${i}</g>`:W,front:s.length?Z`<g class="annotations-front">${s}</g>`:W,overlay:l.length?q`<div class="annotation-labels">${l}</div>`:W}}const Ui=r`
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
 */,Hi="important",Ii=" !"+Hi,Bi=me(class extends fe{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const n=e[o];return null==n?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)null==t[n]&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in t){const e=t[n];if(null!=e){this.ft.add(n);const t="string"==typeof e&&e.endsWith(Ii);n.includes("-")||t?o.setProperty(n,t?e.slice(0,-11):e,t?Hi:""):o[n]=e}}return R}});class qi{constructor(e){this.host=e,e.addController(this)}hostConnected(){var e;this.stop=(e=()=>this.host.requestUpdate(),"undefined"==typeof window?()=>{}:(window.addEventListener(wt,e),()=>window.removeEventListener(wt,e)))}hostDisconnected(){this.stop?.(),this.stop=void 0}}const Zi=Object.keys(Oe),Ri=Object.keys(Se),Wi="custom",Vi={text:{}},Yi={entity:{domain:["sensor","input_number","number"]}};function Gi(e){return"string"==typeof e&&""!==e.trim()&&!Number.isFinite(Number(e))}const Xi={icon:{}};function Ji(e){return void 0===e?"none":Zi.find(t=>Oe[t]&&vo(Oe[t],e))??"custom"}function Ki(e){return Ri.includes(e)}class Qi extends le{constructor(){super(),this.languageController=new qi(this),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(e){e.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(e){const t=this.hass?.states[e]?.state,o=void 0===t||""===t.trim()?NaN:Number(t);return Number.isFinite(o)?o:void 0}_t(e){return zt(this.hass,e)}_getSelectors(){const e=`${Mt(this.hass)}|${this.unit??""}`;if(this._selectors?.key===e)return this._selectors;const t=Zi.map(e=>({value:e,label:this._t(`editor_preset_${e}`)})),o=e=>({select:{mode:"dropdown",options:e}});return this._selectors={key:e,preset:o(t),presetCustom:o([...t,{value:Wi,label:this._t("editor_preset_custom")}]),color:o([...Ri,Wi].map(e=>({value:e,label:this._t(`editor_color_${e}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e&&e.length?e:void 0}}))}_presetChanged(e){e.stopPropagation();const t=e.detail?.value;if(!t||t===Wi||!Zi.includes(t))return;if(t===Ji(this.bands))return;const o=Oe[t];this._emit(o?structuredClone(o):void 0)}_updateBand(e,t,o){const n=[...this.bands??[]],a={...n[e]};null==o||""===o?delete a[t]:a[t]=o,n[e]=a,this._emit(n)}_fromChanged(e,t){t.stopPropagation();const o=Number(t.detail?.value);""!==t.detail?.value&&null!=t.detail?.value&&Number.isFinite(o)&&this._updateBand(e,"from",o)}_fromEntityChanged(e,t){t.stopPropagation();const o=t.detail?.value;"string"==typeof o&&""!==o&&this._updateBand(e,"from",o)}_toggleFromMode(e){const t=this.bands?.[e]?.from,o=new Set(this._entityOpen);Gi(t)?this._updateBand(e,"from",this._entityValue(t)??0):o.delete(e)||o.add(e),this._entityOpen=o}_colorChanged(e,t){t.stopPropagation();const o=t.detail?.value,n=this.bands?.[e]?.color??"primary";if(!o)return;const a=new Set(this._customOpen);o!==Wi?(a.delete(e),this._customOpen=a,o!==n&&this._updateBand(e,"color",o)):Ki(n)&&(this._customOpen=a.add(e))}_customColorChanged(e,t){t.stopPropagation();const o="string"==typeof t.detail?.value?t.detail.value.trim():"";if(!o)return;const n=new Set(this._customOpen);n.delete(e),this._customOpen=n,this._updateBand(e,"color",o)}_iconChanged(e,t){t.stopPropagation(),this._updateBand(e,"icon",t.detail?.value)}_labelChanged(e,t){t.stopPropagation(),this._updateBand(e,"label",t.detail?.value)}_removeBand(e){const t=[...this.bands??[]];t.splice(e,1),this._emit(t)}_addBand(){const e=[...this.bands??[]],t=e[e.length-1]?.from,o="number"==typeof t?t:Gi(t)?this._entityValue(t)??NaN:"string"==typeof t&&""!==t.trim()?Number(t):NaN;e.push({from:Number.isFinite(o)?o+10:0,color:"primary"}),this._emit(e)}_renderBand(e,t,o){const n=!Ki(e.color)||this._customOpen.has(t),a=Gi(e.from)?e.from:void 0,r=void 0!==a||this._entityOpen.has(t);return q`<div class="band">
      <span class="swatch" style=${Bi({"--swatch":Ce(e.color)})}></span>
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
        .value=${n?Wi:e.color}
        @value-changed=${e=>this._colorChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${Vi}
        .value=${e.label??""}
        @value-changed=${e=>this._labelChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${Xi}
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
      ${r?q`<ha-selector
              .required=${!1}
              class="from-entity"
              data-role="from-entity"
              .hass=${this.hass}
              .label=${this._t("editor_band_from_entity_label")}
              .selector=${Yi}
              .value=${a??""}
              @value-changed=${e=>this._fromEntityChanged(t,e)}
            ></ha-selector>`:W}
      ${n?q`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${Vi}
              .value=${Ki(e.color)?Ce(e.color):e.color}
              @value-changed=${e=>this._customColorChanged(t,e)}
            ></ha-selector>`:W}
    </div>`}render(){const e=this._getSelectors(),t=Ji(this.bands);return q`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${t===Wi?e.presetCustom:e.preset}
        .value=${t}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((t,o)=>this._renderBand(t,o,e))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}Qi.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},Qi.styles=r`
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",Qi);const es={line:["value","dash","history","zone"],band:["from","to"],time:["times"],state:["entity","state","shade"],point:["at","series"]},ts={dash:!0,shade:!1,at:"max",history:!1,zone:"none"};function os(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:zt(e,`editor_annotation_${t}_${o}`)}))}}}const ns=new Map;function as(e,t){const o={...e};return t.length?o.annotations=t:delete o.annotations,o}function rs(e,t){if("line"===e)return{type:e,value:0};if("band"===e)return{type:e,from:0,to:1};if("time"===e)return{type:e,times:["07:00"]};if("state"===e){const o=(t.entities??[])[0];return{type:e,entity:"string"==typeof o?o:o?.entity??"sensor.example",state:"on"}}return{type:e,at:"max"}}function is(e){const t=Array.isArray(e.config.annotations)?e.config.annotations:[],o=(e.config.entities??[]).map(e=>"string"==typeof e?e:e.entity),n=t=>zt(e.hass,t),a=(o,n)=>{const a=[...t];n?a[o]=n:a.splice(o,1),e.commit(as(e.config,a))};return q`<style>
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
      ${t.map((t,r)=>q`<div class="annotation" data-index=${r}>
            <div class="annotation-fields">
              <ha-form
                data-section="annotation"
                .hass=${e.hass}
                .data=${function(e){const t={type:e.type};for(const o of[...es[e.type],"label","color"]){let n=e["series"===o?"entity":o];"times"===o?n=zi(e.times).join(", "):"value"!==o&&"from"!==o&&"to"!==o||void 0===n||(n=String(n)),t[o]=n??ts[o]}return t}(t)}
                .schema=${function(e,t,o){const n=`${e}|${Mt(t)}|${o.join(",")}`;let a=ns.get(n);if(a)return a;const r={value:{text:{}},from:{text:{}},to:{text:{}},times:{text:{}},entity:{entity:{}},series:{entity:{include_entities:o}},state:{text:{}},shade:{boolean:{}},dash:{boolean:{}},at:os(t,"at",bi),history:{boolean:{}},zone:os(t,"zone",["none",...di])};return a=[{name:"type",selector:os(t,"type",yi)},...es[e].map(e=>({name:e,selector:r[e]})),{type:"grid",name:"",schema:[{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}}}]}],ns.set(n,a),a}(yi.includes(t.type)?t.type:"line",e.hass,o)}
                .computeLabel=${e=>n(`editor_annotation_${e.name}`)}
                @value-changed=${e=>{e.stopPropagation(),a(r,function(e,t){const o=e.type??t.type,n={type:o},a=o===t.type?[...es[o],"label","color"]:["label","color"];for(const r of a){let t=e[r];"string"==typeof t&&(t=t.trim()),void 0!==t&&""!==t&&t!==ts[r]&&("value"!==r&&"from"!==r&&"to"!==r||!Number.isFinite(Number(t))||(t=Number(t)),"times"===r&&(t=zi(t)),n["series"===r?"entity":r]=t)}return o===t.type&&void 0!==t.severity&&(n.severity=t.severity),n}(e.detail?.value??{},t))}}
              ></ha-form>
              ${"line"===t.type&&void 0!==t.zone?q`<div class="annotation-bands">
                      <div class="annotation-bands-title">${n("editor_annotation_severity")}</div>
                      <cd-bands-editor
                        .hass=${e.hass}
                        .bands=${t.severity}
                        @value-changed=${e=>{e.stopPropagation(),a(r,function(e,t){const o={...e};return t&&t.length?o.severity=t:delete o.severity,o}(t,e.detail?.value))}}
                      ></cd-bands-editor>
                    </div>`:W}
            </div>
            <ha-icon-button
              class="remove"
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              .label=${n("editor_annotation_remove")}
              @click=${()=>a(r)}
            ></ha-icon-button>
          </div>`)}
      <div class="annotation-add">
        <span>${n("editor_annotation_add")}</span>
        ${yi.map(o=>q`<button
              type="button"
              data-type=${o}
              @click=${()=>e.commit(as(e.config,[...t,rs(o,e.config)]))}
            >
              + ${n(`editor_annotation_add_${o}`)}
            </button>`)}
      </div>
    </div>`}function ss(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:zt(e,`editor_${t}_${o}`)}))}}}const ls=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"}];function cs(e){const t=e?.period;return`${t?.calendar?"calendar":"rolling"}${e?.group_by?"|grouped":""}`}function ds(e,t){const[o,n]=cs(t).split("|"),a="calendar"===o;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:ss(e,"period_calendar",["rolling",...kn])},...a?[{name:"period_until",selector:ss(e,"period_until",Mn)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:ss(e,"period_unit",$n)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:ss(e,"source",ba)},{type:"grid",name:"",schema:[{name:"group_by",selector:ss(e,"group_by",["none",...Jn])},...n?[{name:"aggregate",selector:ss(e,"aggregate",Kn)}]:[]]}]}const us=ls.filter(e=>["period_last","period_unit","source"].includes(e.name));function hs(e){return[{type:"grid",name:"",schema:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:ss(e,"period_unit",$n)}]},{name:"source",selector:ss(e,"source",ba)}]}const ps=[{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];function ms(e){return[{type:"grid",name:"",schema:[{name:"header",selector:ss(e,"header",Ja)},{name:"compact",selector:{boolean:{}}}]}]}const fs=[{name:"x_axis",path:["x_axis"],default:No},{name:"y_axis",path:["y_axis"],default:Lo},{name:"axis_labels",path:["axis_labels"],default:To},{name:"grid_horizontal",path:["gridlines","horizontal"],default:Fo},{name:"grid_vertical",path:["gridlines","vertical"],default:Oo},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function gs(e){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:ss(e,"axis_labels",jo)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const vs=[{type:"grid",name:"",schema:[{name:"zoom",selector:{boolean:{}}},{name:"overview",selector:{boolean:{}}}]}],ys=[{name:"zones",selector:{boolean:{}}}];function bs(e,t){return[{name:"labels",selector:{boolean:{}}},...!0===t?.labels?[{type:"grid",name:"",schema:[{name:"labels_show",selector:ss(e,"labels_show",$r)},{name:"labels_position",selector:ss(e,"labels_position",kr)}]},{name:"labels_overlap",selector:{boolean:{}}}]:[]]}const _s=[{name:"sync",selector:{text:{}}}];function xs(e,t){return[{name:"multiples",selector:{boolean:{}}},...!0===t?.multiples?[{type:"grid",name:"",schema:[{name:"multiples_scale",selector:ss(e,"multiples_scale",Jr)},{name:"multiples_columns",selector:{number:{min:1,max:6,mode:"box"}}}]}]:[]]}const ws=new Map;function $s(e,t,o){const n=`${e}|${Mt(t)}`;let a=ws.get(n);return a||(a=o(),ws.set(n,a)),a}function ks(e,t,o,n,a={}){return q`<ha-form
    data-section=${t}
    .hass=${e.hass}
    .data=${yo(e.config,n)}
    .schema=${o}
    .computeLabel=${t=>zt(e.hass,a[t.name]??`editor_${t.name}`)}
    @value-changed=${t=>{t.stopPropagation();const o=bo(e.config,n,t.detail?.value??{});o!==e.config&&e.commit(o)}}
  ></ha-form>`}const Ms=[...ls,{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"labels_show",path:["labels_show"],default:"all"},{name:"labels_position",path:["labels_position"],default:"auto"},{name:"labels_overlap",path:["labels_overlap"],default:!1},{name:"line_width",path:["line_width"],default:Lt},{name:"dots",path:["dots"],default:!1},...fs,{name:"y_scale",path:["y_scale"],default:Po},{name:"zoom",path:["zoom"],default:!1},{name:"overview",path:["overview"],default:!1},{name:"zones",path:["zones"],default:!1},...Rr,{name:"sync",path:["sync"]},...ps,{name:"multiples",path:["multiples"],default:!1},{name:"multiples_scale",path:["multiples_scale"],default:"auto"},{name:"multiples_columns",path:["multiples_columns"]}];function zs(e,t){if(!e)return t;const[o,n]=e,a={};return void 0===t.y_min&&o>=0&&o<=n/2&&(a.y_min=0),void 0===t.y_max&&n<=0&&n>=o/2&&(a.y_max=0),Object.keys(a).length?{...t,...a}:t}function As(e){const t=[];return e.forEach((o,n)=>{n>0&&t.push([o[0],e[n-1][1]]),t.push(o)}),t}function Es(e,t,o){if(e.length<2)return"";const[n,a,r]="step"===o?[As(e),As(t),"straight"]:[e,t,o];return`${ma(n,r)}${ma([...a].reverse(),r).replace(/^M/,"L")}Z`}function Ss(e,t){return"step"===t?ma(As(e),"straight"):ma(e,t)}function Cs(e,t,o,n,a={}){const r=Ot(e.entity.config,n),i=e.entity.config.line_width??n.line_width,s=o.y(Math.min(Math.max(0,o.domain[0]),o.domain[1])),l=function(e){const t=e.entity.config.negative_color;return"string"==typeof t&&t.trim()?Ce(t.trim()):e.color}(e),c=`cd-area-${e.index}`,d=`cd-area-line-${e.index}`,u=l!==e.color,h=Z`${function(e,t,o,n,a=.42,r=.05){const i=Math.min(1,Math.max(0,n/va));return Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${va}>
    <stop offset="0" stop-color=${t} stop-opacity=${a}></stop>
    <stop offset=${i} stop-color=${t} stop-opacity=${r}></stop>
    <stop offset=${i} stop-color=${o} stop-opacity=${r}></stop>
    <stop offset="1" stop-color=${o} stop-opacity=${a}></stop>
  </linearGradient>`}(c,e.color,l,s,a.stacked?.6:.42,a.stacked?.35:.05)}
    ${u?function(e,t,o,n){const a=Math.min(1,Math.max(0,n/va));return Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${va}>
    <stop offset=${a} stop-color=${t}></stop>
    <stop offset=${a} stop-color=${o}></stop>
  </linearGradient>`}(d,e.color,l,s):W}`,p=[],m=[],f=[];if(a.layers){const n=a.layers;let r=[];const i=()=>{if(r.length){const a=r.map(e=>[o.x(t[e].t),o.y(n[e][1])]),i=r.map(e=>[o.x(t[e].t),o.y(n[e][0])]);p.push(Es(a,i,e.curve)),m.push(Ss(a,e.curve))}r=[]};for(let e=0;e<t.length;e++)n[e]?r.push(e):i();i()}else for(const y of fa(t)){const t=y.map(e=>[o.x(e.t),o.y(e.v)]);p.push(Es(t,t.map(([e])=>[e,s]),e.curve)),m.push(Ss(t,e.curve))}if(r.dots){const e=a.range;t.forEach((t,n)=>{if(null===t.v||e&&(t.t===e.start||t.t===e.end))return;const r=a.layers?a.layers[n]?.[1]:t.v;void 0!==r&&f.push([o.x(t.t),o.y(r)])})}const g=i??2,v=u?`url(#${d})`:e.color;return{defs:h,body:Z`<g class="series" data-series=${e.index}>
    <path class="fill" d=${p.join("")} fill="url(#${c})" stroke="none"></path>
    <path class="line ${e.dash?"dashed":""}" d=${m.join("")} fill="none" stroke=${v}
      style="stroke-width:${g}px"></path>
    ${f.length>0&&f.length<=200?Z`<path class="dots" d=${Dt(f)} fill="none" stroke=${v}
            style="stroke-width:${Ut(g)}px"></path>`:W}
  </g>`}}const js=[...ls,{name:"curve",path:["curve"],default:"smooth"},{name:"stack",path:["stack"],default:"none"},{name:"line_width",path:["line_width"],default:2},{name:"dots",path:["dots"],default:!1},...fs,...ps];const Ns={name:"negative_color",path:["negative_color"]},Ls=new Map;const Ts=r`
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
`,Fs={layout:"chart",group:"history",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
    ${Ts}
  `,thumbnail:()=>Z`
    <defs>
      <linearGradient id="cd-thumb-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.5" />
        <stop offset="1" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10 V36 H4 Z" fill="url(#cd-thumb-area)" />
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){_a(e),Uo(e),gr(e),Bt(e),Ka(e),ar(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t.negative_color;if(void 0!==e&&"string"!=typeof e)throw new Error(`"negative_color" of ${t.entity} must be a colour`)}}(e)},editor:function(e){const t=$s(`area|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:ss(e.hass,"curve",ua)},{name:"stack",selector:ss(e.hass,"stack",nr)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"dots",selector:{boolean:{}}}]},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",t,js)},entityFields:function(e,t){const o=!0===t.dots;let n=Ls.get(o);return n||(n=[...to(o),Ns],Ls.set(o,n)),{schema:$s("area-entity",e,()=>[...lo(e),{name:"negative_color",selector:{text:{}}}]),fields:n}},disconnect(e){za(e),Za(e),mr(e)},render:function(e){const t=xa(e),o=ka(t,e),n=Aa(t,e),a=o===W&&n===W?W:q`${o}${n}`,r=Ea(t,e),i=Qa(e.raw);if(r)return er("over"===i.header?{...i,header:"above"}:i,a,r);const s=e.raw.stack??"none",l=t.series.map(e=>({...e,points:ln(e.points,500)}));let c,d,u=l;const h={};if("none"===s){const o=Ao(l.map(e=>e.points));d=Wa({...e,raw:zs(o,e.raw)},t.range,o);const n=d.scales,a=Pt(l,t=>Ot(t.entity.config,e.raw).onTop);c=a.map(o=>Cs(o,o.points,n,e.raw,{range:t.range}))}else{const o=function(e){const t=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t);return{times:t,values:e.map(e=>t.map(t=>rr(e,t)))}}(l.map(e=>e.points)),n=ir(o.values,s),a=sr(o.values);u=l.map((e,t)=>({...e,points:o.times.map((e,n)=>({t:e,v:o.values[t][n]}))}));const r=lr(n),i="percent"===s?{y_min:r[0]<0?-100:0,y_max:r[1]>0?100:0}:{};d=Wa({...e,raw:zs(r,{...i,...e.raw})},t.range,r);const p=d.scales;c=u.map((o,a)=>Cs(o,o.points,p,e.raw,{layers:n[a],stacked:!0,range:t.range})).reverse();const m=new Map;u.forEach(e=>e.points.forEach((e,t)=>m.set(e,t))),h.dotY=(e,t)=>{const o=n[e.index][m.get(t)??-1];return o?p.y(o[1]):null};const f=br(u),g=Math.max(...u.map(e=>e.entity.decimals));h.footer=t=>{const o=t.length?m.get(t[0].p):void 0;return _r(e,void 0===o?null:a[o],f,g)},"percent"===s&&(h.text=(t,o)=>{const a=o?n[t.index][m.get(o)??-1]:null;if(!o||null===o.v||!a)return"—";const r=Math.round(Math.abs(a[1]-a[0]));return`${Na(ja(o.v,t.entity.decimals,e.hass),t.entity.unit)} · ${r} %`})}const p=fr(e.raw),m=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_area"),names:t.series.map(e=>e.entity.name).join(", ")});return er(i,a,Ga({axes:d,ctx:e,content:Z`${c.map(e=>e.body)}`,defs:Z`${c.map(e=>e.defs)}`,label:m,overlay:q`${"over"===i.header?tr(a):W}
      ${p?xr(e,u,d.scales,pr(e.host),Ra(e),h):W}`,hover:p?vr(e,t.range,u.map(e=>e.points)):void 0}))}},Os={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:r`
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
  `,render(e,{show:t,hass:o}){const n=t.value||!e.available,a=q`${t.name?q`<span class="name">${e.name}</span>`:W}${n?q`<span class="value">${e.display}</span>`:W}`;return q`
      ${t.icon?q`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${ni(e)}
            ></ha-state-icon>`:W}
      <div class="track">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?q`<div class="target"></div>`:W}
        <div class="text">${a}</div>
        ${e.available?q`<div class="text on-fill ${Le(e.band.color)}" aria-hidden="true">${a}</div>`:W}
      </div>
    `}};function Ps(e,t){const o=e.reduce((e,t)=>e+t.w,0);let n,a=0;for(const r of e){const e=(a+r.w/2)/o;if(a+=r.w,t<=e)return n?n.v+(r.v-n.v)*(t-n.at)/(e-n.at):r.v;n={at:e,v:r.v}}return e[e.length-1].v}const Ds=["tukey","range"];function Us(e,t){if(e.length<=t)return[...e];const o=[];for(let n=0;n<t;n++)o.push(e[Math.floor(n*e.length/t)]);return o}const Hs=e=>"number"==typeof e&&Number.isFinite(e);function Is(e){for(const t of["x_min","x_max"])if(void 0!==e[t]&&!Hs(e[t]))throw new Error(`"${t}" must be a number`);if(Hs(e.x_min)&&Hs(e.x_max)&&e.x_min>=e.x_max)throw new Error('"x_min" must be below "x_max"')}const Bs=[{name:"x_min",path:["x_min"]},{name:"x_max",path:["x_max"]}],qs=[{type:"grid",name:"",schema:[{name:"x_min",selector:{number:{mode:"box",step:"any"}}},{name:"x_max",selector:{number:{mode:"box",step:"any"}}}]}];function Zs(e){return{min:Hs(e.x_min)?e.x_min:void 0,max:Hs(e.x_max)?e.x_max:void 0}}function Rs(e,t,o,n={}){const a=Ho(e.raw),r=Math.max(2,Math.min(8,Math.round(qa(e)/70))),i=Zo(t,n.x??{},r),s=Zo(o,{min:a.min??n.yFloor,max:a.max},4);return{options:a,value:s,times:i.ticks,unit:"minute",range:{start:i.domain[0],end:i.domain[1]},scales:{x:So(i.domain,[0,ga]),y:So(s.domain,[va,0]),domain:s.domain}}}function Ws(e){const[t,o]=e.times;return void 0===t||void 0===o?0:Math.max(0,-Math.floor(Math.log10(Math.abs(o-t))+1e-9))}const Vs=new WeakMap;function Ys(e){return Vs.get(e)?.i}function Gs(e){const t=Vs.get(e);void 0!==t?.timer&&clearTimeout(t.timer),Vs.delete(e)}function Xs(e,t){const o=function(e){let t=Vs.get(e);return t||(t={},Vs.set(e,t)),t}(e.host),n=t=>{t!==o.i&&(o.i=t,e.requestUpdate())},a=()=>{void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0};return{move(e){a();const o=e.currentTarget.getBoundingClientRect(),r=o.width>0?Math.min(1,Math.max(0,(e.clientX-o.left)/o.width)):0,i=o.height>0?Math.min(1,Math.max(0,(e.clientY-o.top)/o.height)):0;n(t(r,i,o.width,o.height))},leave(e){a(),"touch"===e.pointerType||"pen"===e.pointerType?o.timer=setTimeout(()=>{o.timer=void 0,n(void 0)},dr):n(void 0)}}}const Js=e=>Math.round(1e4*e)/100+"%";function Ks(e){const{x:t,y:o,plotWidth:n,title:a,rows:r,dot:i,band:s}=e;if(!(t>=0&&t<=1))return W;const l=cr(t,n);return q`<div class="hover-layer" aria-hidden="true">
    ${s?q`<div class="pick-band" style="left:${Js(s[0])};width:${Js(s[1]-s[0])}"></div>`:W}
    ${i&&o>=0&&o<=1?q`<span class="hover-dot" style="left:${Js(t)};top:${Js(o)};background:${i}"></span>`:W}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${Js(t)}`}>
      <div class="tooltip-time">${a}</div>
      ${r.map(e=>q`<div class="tooltip-row">
            ${e.color?q`<span class="swatch" style="background:${e.color}"></span>`:W}
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${e.value}</span>
          </div>`)}
    </div>
  </div>`}const Qs=r`
  .pick-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
`,el=["vertical","horizontal"],tl=.72;function ol(e,t){const o=e.bounds.length>1,n=o?e.bounds.slice(0,-1).map((t,o)=>[t,e.bounds[o+1]]):[[e.range.start,e.range.end]],a=[];return n.forEach(([n,r],i)=>{const s=Math.min(r,e.until);e.series.forEach((r,l)=>{let c,d;"statistics"===e.source?({samples:c,extremes:d}=function(e,t,o){const n=[];let a=1/0,r=-1/0;for(const i of e)i.t<t||i.t>=o||i.carried||null===i.v||(n.push({v:i.v,w:1}),a=Math.min(a,i.v,"number"==typeof i.min?i.min:i.v),r=Math.max(r,i.v,"number"==typeof i.max?i.max:i.v));return{samples:n,extremes:n.length?[a,r]:void 0}}(r.points,n,s)):c=function(e,t,o){const n=[];if(o<=t)return n;for(let a=0;a<e.length;a++){const r=e[a];if(r.t>=o)break;const i=a+1<e.length?e[a+1].t:1/0,s=Math.max(r.t,t),l=Math.min(i,o);l<=s||null===r.v||n.push({v:r.v,w:l-s})}return n}(r.points,n,s);const u=function(e,t,o){const n=e.filter(e=>e.w>0&&Number.isFinite(e.v)).sort((e,t)=>e.v-t.v);if(0===n.length)return;const a=Ps(n,.25),r=Ps(n,.5),i=Ps(n,.75),s=n.reduce((e,t)=>e+t.w,0),l=n.reduce((e,t)=>e+t.v*t.w,0)/s,c=Math.min(n[0].v,o?.[0]??1/0),d=Math.max(n[n.length-1].v,o?.[1]??-1/0),u={count:n.length,q1:a,median:r,q3:i,mean:l,min:c,max:d};if("range"===t)return{...u,low:c,high:d,outliers:[]};const h=1.5*(i-a),p=n.filter(e=>e.v>=a-h&&e.v<=i+h),m=Math.min(p[0]?.v??a,a),f=Math.max(p[p.length-1]?.v??i,i);let g=[...new Set(n.filter(e=>e.v<m||e.v>f).map(e=>e.v))];return g.length>60&&(g=g.map(e=>({v:e,d:e<m?m-e:e-f})).sort((e,t)=>t.d-e.d).slice(0,60).map(e=>e.v).sort((e,t)=>e-t)),{...u,low:m,high:f,outliers:g}}(c,t,d);u&&a.push({category:o?i:l,slot:o?l:0,series:r,stats:u,readings:Us(c.map(e=>e.v),120)})})}),{boxes:a,categories:o?n.length:e.series.length,slots:o?e.series.length:1}}function nl(e,t){const o=Math.max(1,Math.ceil(e/Math.max(1,t))),n=[];for(let a=0;a<e;a+=o)n.push(a);return n}const al=new Map;function rl(e,t,o){const n=tl/t;return{centre:e.category-.36+n*(e.slot+.5),half:Math.min(.4*n,o)}}function il(e,t,o,n){const{stats:a,series:r}=e,{centre:i,half:s}=t,l=(e,t,o)=>Z`<line class=${o} x1=${e[0]} y1=${e[1]} x2=${t[0]} y2=${t[1]}></line>`,[c,d]=o(i-s,a.q1),[u,h]=o(i+s,a.q3),p=n&&e.readings.length?Z`<path class="readings" d=${Dt(e.readings.map((e,t)=>o(i+function(e){const t=43758.5453*Math.sin(12.9898*(e+1));return 2*(t-Math.floor(t))-1}(t)*s*.8,e)))}></path>`:W;return Z`<g class="box" data-series=${r.index} style="--box-color:${r.color}">
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
    ${a.outliers.length?Z`<path class="outliers" d=${Dt(a.outliers.map(e=>o(i,e)))}></path>`:W}
  </g>`}const sl=[...ls,{name:"orientation",path:["orientation"],default:"vertical"},{name:"whiskers",path:["whiskers"],default:"tukey"},{name:"readings",path:["readings"],default:!1},...fs,...ps];const ll=[{name:"box_color",selector:{text:{}}}],cl=[{name:"box_color",path:["color"]}],dl={layout:"chart",group:"distribution",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
    ${Qs}
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
  `,thumbnail:()=>Z`
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
    </g>`,validate:function(e){_a(e),Uo(e),gr(e),Ka(e);const t=e;if(void 0!==t.orientation&&!el.includes(t.orientation))throw new Error(`"orientation" must be one of: ${el.join(", ")}`);if(void 0!==t.whiskers&&!Ds.includes(t.whiskers))throw new Error(`"whiskers" must be one of: ${Ds.join(", ")}`);if(void 0!==t.readings&&"boolean"!=typeof t.readings)throw new Error('"readings" must be true or false')},editor:function(e){const t={...e.config,group_by:void 0},o=$s(`box|${cs(t)}`,e.hass,()=>[...ds(e.hass,t),{type:"grid",name:"",schema:[{name:"orientation",selector:ss(e.hass,"orientation",el)},{name:"whiskers",selector:ss(e.hass,"whiskers",Ds)}]},{name:"readings",selector:{boolean:{}}},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",o,sl)},entityFields:()=>({schema:ll,fields:cl}),disconnect(e){za(e),Za(e),Gs(e)},render(e){const t=function(e,t=Date.now()){const o=Cn(e.raw.period),n=e.raw.source??"history",a=wn(e.hass),r=Nn(o,t,a,o.navigate?Tn(e.host,o):0),i=Qn(e.raw),s={start:i?yn(i.unit,r.start,a):r.start,end:r.end},l=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),c="statistics"===n?{period:i?"hour"===i.unit?"5minute":"hour":Yn(s),types:["mean","min","max"],value:"mean"}:void 0,d=da(e.host,e.requestUpdate).get(e.hass,l,s,n,{live:r.live,statistics:c}),u=e.items.map((e,t)=>{const o=e.config;return{index:t,entity:e,points:d.data.get(Xn(l[t]))??[],color:Ce(o.color??ya[t%ya.length]),curve:"straight",dash:!1}});return{status:d.status,error:d.error,range:s,period:o,source:n,series:u,live:r.live,back:r.back,zone:a,bounds:i?_n(i.unit,s.start,s.end,a):[],unit:i?.unit,until:Math.min(s.end,t)}}(e),o=ka(t,e),n=Aa(t,e),a=o===W&&n===W?W:q`${o}${n}`,r=Qa(e.raw),i=Ea(t,e);if(i)return er("over"===r.header?{...r,header:"above"}:r,a,i);const s=e.raw,l=s.orientation??"vertical",c=s.whiskers??"tukey",{boxes:d,categories:u,slots:h}=ol(t,c);let p=1/0,m=-1/0;for(const L of d)p=Math.min(p,L.stats.low,...L.stats.outliers,...!0===s.readings?L.readings:[]),m=Math.max(m,L.stats.high,...L.stats.outliers,...!0===s.readings?L.readings:[]);const f=t.bounds.length>1,g="vertical"===l,v=g?Math.max(4,Math.floor(Ra(e)/Math.max(1,u)/6.5)):16,y=o=>f?function(e,t,o){const n=e.bounds[t],a=e.range.end-e.range.start;return"hour"===e.unit?sn(n,"hour",a,o):"month"===e.unit?sn(n,"month",a,o):sn(n,"day","week"===e.unit?1/0:a,o)}(t,o,e.hass):((e,t=16)=>e.length>t?`${e.slice(0,t-1)}…`:e)(t.series[o]?.entity.name??"",v),b=Math.max(0,...Array.from({length:u},(e,t)=>y(t).length)),_=function(e,t,o,n,a,r=0){const i=Ho(e.raw),s={min:i.min,max:i.max},l=[-.5,o-.5];if("vertical"===t){const t=Ra(e),r=Zo(n,s,4);return{options:i,value:r,times:nl(o,Math.floor(t/a)),unit:"day",range:{start:l[0],end:l[1]},scales:{x:So(l,[0,ga]),y:So(r.domain,[va,0]),domain:r.domain}}}const c=qa(e)-32-(i.y&&"outside"===i.labels?r:0),d=Zo(n,s,Math.max(2,Math.min(8,Math.round(c/70)))),u=!0===e.raw.compact?6:10;return{options:{...i,horizontal:i.vertical,vertical:i.horizontal},value:{domain:l,ticks:nl(o,u),decimals:0},times:d.ticks,unit:"day",range:{start:d.domain[0],end:d.domain[1]},scales:{x:So(d.domain,[0,ga]),y:So(l,[0,va]),domain:l}}}(e,l,u,d.length?[p,m]:void 0,f?56:1,6*b+12),x=g?_.scales.x:_.scales.y,w=g?_.scales.y:_.scales.x,$=(e,t)=>g?[x(e),w(t)]:[w(t),x(e)],k=g?Ra(e):r.compact?110:160,M=k>0?u/k*22:1/0,z=Z`${d.map(e=>il(e,rl(e,h,M),$,!0===s.readings))}`,A=zt(e.hass,"box_aria",{names:t.series.map(e=>e.entity.name).join(", ")}),E=fr(e.raw),S=E?Ys(e.host):void 0,C=(t,o)=>Na(ja(o,t.series.entity.decimals,e.hass),t.series.entity.unit);let j=W;const N=void 0===S?void 0:d[S];if(N){const o=t=>zt(e.hass,t),{stats:n}=N,a=[{name:o("box_highest"),value:C(N,n.max)},{name:o("box_upper_quartile"),value:C(N,n.q3)},{name:o("box_median"),value:C(N,n.median),color:N.series.color},{name:o("box_lower_quartile"),value:C(N,n.q1)},{name:o("box_lowest"),value:C(N,n.min)},{name:o("box_mean"),value:C(N,n.mean)},{name:o("box_count"),value:String(n.count)}];if(n.outliers.length){const e=n.outliers.length;a.push({name:o("box_outliers"),value:e>=60?`${e}+`:String(e)})}const r=rl(N,h,M),i=f?`${function(e,t,o){const n="month"===t?{month:"long",year:"numeric"}:"hour"===t?{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:tn(o)}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short"},a=o?.locale?.language??"en",r=`${a}|${t}|${en(o)}|${n.hour12}`;let i=al.get(r);if(!i){try{i=new Intl.DateTimeFormat(a,{...n,timeZone:en(o)})}catch{i=new Intl.DateTimeFormat("en",n)}al.set(r,i)}return i.format(e)}(t.bounds[N.category],t.unit,e.hass)}${h>1?` · ${N.series.entity.name}`:""}`:N.series.entity.name;j=Ks(g?{x:x(r.centre)/ga,y:w(n.median)/va,plotWidth:Ra(e),title:i,rows:a,band:[x(N.category-.5)/ga,x(N.category+.5)/ga]}:{x:w(n.high)/ga,y:x(r.centre)/va,plotWidth:Ra(e),title:i,rows:a})}return er(r,a,Ga({axes:_,ctx:e,content:z,label:A,overlay:q`${"over"===r.header?tr(a):W}${j}`,hover:E?Xs(e,(e,t)=>function(e,t,o,n){const a=n*t-.5,r=Math.min(t-1,Math.max(0,Math.round(a))),i=a-r+.36;if(o>1&&(i<0||i>=tl))return;const s=Math.min(o-1,Math.max(0,Math.floor(i/(tl/o)))),l=e.findIndex(e=>e.category===r&&e.slot===s);return l<0?void 0:l}(d,u,h,g?e:t)):void 0,...g?{xLabel:y}:{yLabel:y,xLabel:t=>ja(t,Ws(_),e.hass)}}))}},ul=["entity","time"],hl=[2,80],pl=[2,30],ml=[0,20];function fl(e,t){const o=new Set;for(const i of e)for(const e of i)e.t!==t&&o.add(e.t);const n=[...o].sort((e,t)=>e-t),a=e.map(()=>-1),r=[];for(const i of n){const t=[];let o=!0;e.forEach((e,n)=>{for(;a[n]+1<e.length&&e[a[n]+1].t<=i;)a[n]++;const r=e[a[n]];r&&null!==r.v?t.push(r.v):o=!1}),o&&r.push({t:i,v:t})}return r}function gl(e,t){if(e.length<=t)return e;const o=e.length/t,n=[];for(let a=0;a<t-1;a++)n.push(e[Math.floor(a*o)]);return n.push(e[e.length-1]),n}function vl(e,t){let o=Math.floor(e/1e3)^Math.imul(t+1,2654435769)|0;return o=Math.imul(o^o>>>16,73244475),o=Math.imul(o^o>>>16,73244475),o^=o>>>16,(o>>>0)/4294967295*2-1}function yl(e,[t,o],n,a){const r=n*n+(a*a-n*n)*(o>t?Math.min(1,Math.max(0,(e-t)/(o-t))):.5);return Math.round(10*Math.sqrt(r))/10}const bl=e=>"number"==typeof e&&Number.isFinite(e);function _l(e,t,[o,n]){const a=e[t];if(void 0!==a&&(!bl(a)||a<o||a>n))throw new Error(`"${t}" must be a number from ${o} to ${n}`)}function xl(e,t){return{against:"bubble"===t?"entity":e.against??"entity",dotSize:bl(e.dot_size)?e.dot_size:6,jitter:bl(e.jitter)?e.jitter:0,minSize:bl(e.min_size)?e.min_size:6,maxSize:bl(e.max_size)?e.max_size:32}}function wl(e,t){if(_a(e),Uo(e),gr(e),Ka(e),Is(e),_l(e,"jitter",ml),"scatter"===t){if(void 0!==e.against&&!ul.includes(e.against))throw new Error(`"against" must be one of: ${ul.join(", ")}`);_l(e,"dot_size",pl)}else{_l(e,"min_size",hl),_l(e,"max_size",hl);const o=xl(e,t);if(o.minSize>o.maxSize)throw new Error('"min_size" must not be above "max_size"')}}function $l(e,t){return Ce(e.entity.config.color??ya[(e.index-t)%ya.length])}const kl=(e,t,o)=>Na(ja(e,t.entity.decimals,o),t.entity.unit);function Ml(e,t,o=Date.now()){const n=xl(e.raw,t),{against:a}=n,r=Qa(e.raw),i=xa(e,o),s=ka(i,e),l="time"===a,c=l?0:1,d=i.series.map((e,o)=>l?e.color:"bubble"===t?1===o?$l(e,1):void 0:0===o?void 0:$l(e,c)),u=function(e,t,o,n){const{show:a}=o.config;return a.name||a.value?q`<div class="series-header">
    ${e.map((e,r)=>{const i=t[r],s=void 0!==i?q`<span class="swatch" style="background:${i}"></span>`:q`<span class="role"
              >${zt(o.hass,"bubble"===n&&2===r?"bubble_role_size":"scatter_role_x")}</span
            >`;return q`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
        ${s} ${a.name?q`<span class="series-name">${e.entity.name}</span>`:W}
        ${a.value?q`<span class="series-value">${e.entity.display}</span>`:W}
      </div>`})}
  </div>`:W}(i.series,d,e,t),h=s===W&&u===W?W:q`${s}${u}`,p="over"===r.header?{...r,header:"above"}:r;if(i.series.length<function(e,t){return"bubble"===e?3:"entity"===t?2:1}(t,a))return er(p,h,q`<div class="chart-message">
        ${zt(e.hass,"bubble"===t?"bubble_needs_three":"scatter_needs_two")}
      </div>`);const m=Ea(i,e);if(m)return er(p,h,m);const f="history"!==i.source||i.group?void 0:Math.min(i.range.end,o),g=function(e,t,o,n){const{series:a}=e;if("time"===o)return a.map(e=>({s:e,samples:gl(e.points.filter(e=>null!==e.v&&e.t!==n&&!e.carried).map(e=>({t:e.t,v:[e.t,e.v]})),800)}));if("bubble"===t){const[e,t,o]=a;return[{s:t,samples:gl(fl([e.points,t.points,o.points],n),400)}]}const[r,...i]=a;return i.map(e=>({s:e,samples:gl(fl([r.points,e.points],n),800)}))}(i,t,a,f),v=g.flatMap(e=>e.samples);if(0===v.length)return er(p,h,q`<div class="chart-message">${zt(e.hass,"chart_no_data")}</div>`);const y=v.map(e=>e.v[1]),b=[Math.min(...y),Math.max(...y)];let _,x;if(l)_=Wa(e,i.range,Ao(i.series.map(e=>e.points)));else{const t=v.map(e=>e.v[0]);_=Rs(e,[Math.min(...t),Math.max(...t)],b,{x:Zs(e.raw)});const o=Ws(_);x=t=>ja(t,o,e.hass)}const{scales:w}=_,$=Ra(e)||1,k=n.jitter*ga/$,M=n.jitter*va/(r.compact?96:162);const z="bubble"===t?v.map(e=>e.v[2]):[],A=z.length?[Math.min(...z),Math.max(...z)]:[0,0],E=g.flatMap(({s:e,samples:o})=>{const a=l?e.color:$l(e,c);return o.map(o=>({series:e,t:o.t,x:w.x(o.v[0])+(k?vl(o.t,2*e.index)*k:0),y:w.y(o.v[1])+(M?vl(o.t,2*e.index+1)*M:0),v:l?[o.v[1]]:o.v,color:a,d:"bubble"===t?yl(o.v[2],A,n.minSize,n.maxSize):void 0}))}),S="bubble"===t?Z`${[...E].sort((e,t)=>(t.d??0)-(e.d??0)).map(e=>Z`<path class="bubble" d=${Dt([[e.x,e.y]])} stroke=${e.color} style="stroke-width:${e.d}px"></path>`)}`:Z`${g.map(({s:e})=>{const t=E.filter(t=>t.series===e);return t.length?Z`<path class="dots" data-series=${e.index} d=${Dt(t.map(e=>[e.x,e.y]))}
                stroke=${t[0].color} style="stroke-width:${n.dotSize}px"></path>`:W})}`,C=fr(e.raw),j=C?Ys(e.host):void 0,N=void 0!==j?E[j]:void 0,L=zt(e.hass,"chart_aria",{style:zt(e.hass,`editor_style_${t}`),names:i.series.map(e=>e.entity.name).join(", ")}),T=Math.max(16,"bubble"===t?n.maxSize/2:n.dotSize);return er(r,h,q`${Ga({axes:_,ctx:e,content:S,label:L,xLabel:x,overlay:q`${"over"===r.header?tr(h):W}
      ${N?zl(N,i,t,a,e,$):W}`,hover:C?Xs(e,(e,t,o,n)=>function(e,t,o,n,a,r=24){let i,s=r*r;const l=t*n,c=o*a;return e.forEach(([e,t],o)=>{const r=e/ga*n-l,d=t/va*a-c,u=r*r+d*d;u<=s&&(s=u,i=o)}),i}(E.map(e=>[e.x,e.y]),e,t,o,n,T)):void 0})}
    ${"bubble"===t?function(e,[t,o],n,a){const r=(t,o)=>q`<span class="size-item"
      ><span class="size-dot" style="width:${o}px;height:${o}px"></span>${kl(t,e,a)}</span
    >`;return q`<div class="size-legend" aria-hidden="true">
    <span class="size-name">${e.entity.name}</span>
    ${r(t,yl(t,[t,o],n.minSize,n.maxSize))}
    ${o>t?r(o,yl(o,[t,o],n.minSize,n.maxSize)):W}
  </div>`}(i.series[2],A,n,e.hass):W}`)}function zl(e,t,o,n,a,r){const i="time"===n?[e.series]:"bubble"===o?t.series.slice(0,3):[t.series[0],e.series];return Ks({x:e.x/ga,y:e.y/va,plotWidth:r,title:rn(e.t,a.hass),dot:e.color,rows:i.map((t,o)=>({color:t===e.series?e.color:void 0,name:t.entity.name,value:kl(e.v[o],t,a.hass)}))})}const Al=r`
  ${Ca}
  ${Xa}
  ${wr}
  ${or}
  ${Qs}
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
`;function El(e){za(e),Za(e),mr(e),Gs(e)}const Sl=fs.map(e=>"x_axis"===e.name?{...e,name:"xy_x_axis"}:e);const Cl=(e,t,o=1)=>({number:{min:e,max:t,step:o,mode:"box",unit_of_measurement:"px"}}),jl={scatter:[...ls,{name:"against",path:["against"],default:"entity"},{name:"dot_size",path:["dot_size"],default:6},{name:"jitter",path:["jitter"],default:0},...Bs,...Sl,...ps],bubble:[...ls,{name:"min_size",path:["min_size"],default:6},{name:"max_size",path:["max_size"],default:32},{name:"jitter",path:["jitter"],default:0},...Bs,...Sl,...ps]};function Nl(e){return t=>{const o="scatter"===e&&"time"===t.config.against,n=$s(`${e}|${cs(t.config)}|${o}`,t.hass,()=>{return[...ds(t.hass,t.config),..."scatter"===e?[{name:"against",selector:ss(t.hass,"against",ul)},{type:"grid",name:"",schema:[{name:"dot_size",selector:Cl(pl[0],pl[1])},{name:"jitter",selector:Cl(ml[0],ml[1])}]}]:[{type:"grid",name:"",schema:[{name:"min_size",selector:Cl(hl[0],hl[1])},{name:"max_size",selector:Cl(hl[0],hl[1])}]},{name:"jitter",selector:Cl(ml[0],ml[1])}],...o?[]:qs,...(n=t.hass,[{type:"grid",name:"",schema:[{name:"xy_x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:ss(n,"axis_labels",jo)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]),...ms(t.hass)];var n});return ks(t,"chart",n,jl[e])}}const Ll=[{name:"dot_color",path:["color"]}],Tl=[{name:"dot_color",selector:{text:{}}}];function Fl(){return{schema:Tl,fields:Ll}}const Ol={layout:"chart",group:"distribution",height:270,styles:Al,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)" fill-opacity="0.6">
      <circle cx="14" cy="28" r="4" /><circle cx="27" cy="20" r="7" /><circle cx="44" cy="24" r="5" />
      <circle cx="52" cy="11" r="8" /><circle cx="36" cy="33" r="3" />
    </g>`,validate:e=>wl(e,"bubble"),editor:Nl("bubble"),entityFields:()=>Fl(),disconnect:El,render:e=>Ml(e,"bubble")},Pl=["auto","none","hour","day","week","month"],Dl=["auto","mean","sum","min","max","first","last","change"],Ul={last:7,unit:"day"},Hl={hour:1/24,day:1,week:7,month:30};function Il(e){if(e.calendar)return{day:"hour",week:"day",month:"day",year:"month"}[e.calendar];const t=e.last*Hl[e.unit];return t<=2?"hour":t<=62?"day":t<=190?"week":"month"}function Bl(e){if(e.config.attribute)return!1;const t=e.stateObj?.attributes?.state_class;return"total_increasing"===t||"total"===t}function ql(e,t){const o={...e,period:e.period??{...Ul}};return"none"===e.group_by?delete o.group_by:void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=Il(Cn(o.period))),void 0!==e.aggregate&&"auto"!==e.aggregate||(o.aggregate=!0!==e.range&&t.length>0&&t.every(Bl)?"change":"mean"),o}function Zl(e,t){const o=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t),n=e.map(e=>new Map(e.map(e=>[e.t,e]))),a=new Map;for(const i of e)for(const e of i)void 0!==e.end&&a.set(e.t,e.end);const r={times:[],ends:[],values:e.map(()=>[]),lows:e.map(()=>[]),highs:e.map(()=>[])};return o.forEach((i,s)=>{const l=Math.min(a.get(i)??o[s+1]??t,t);l>i&&(r.times.push(i),r.ends.push(l),e.forEach((e,t)=>{const o=n[t].get(i);r.values[t].push(o?o.v:rr(e,i)),r.lows[t].push(o?.min??null),r.highs[t].push(o?.max??null)}))}),r}function Rl(e,t,o,n){const a=t-e,r=.8*a/n,i=n>1?.12*r:0;return[e+.2*a/2+o*r+i/2,r-i]}function Wl(e,t=!0){let o=t?0:1/0,n=t?0:-1/0;for(const a of e)null!==a&&Number.isFinite(a)&&(o=Math.min(o,a),n=Math.max(n,a));return o===1/0?void 0:[o,n]}const Vl={hour:66,day:52,week:52,month:60};const Yl={hour:"hour",day:"day",week:"day",month:"month"};function Gl(e,t,o,n){if("hour"===o)return`${rn(e,n)} – ${an(t,n)}`;const a="day"===o?{weekday:"short",day:"numeric",month:"short"}:"week"===o?{day:"numeric",month:"short"}:{month:"long",year:"numeric"};let r;try{r=new Intl.DateTimeFormat(n?.locale?.language??"en",{...a,timeZone:en(n)})}catch{r=new Intl.DateTimeFormat("en",a)}return"week"===o?r.formatRange(e,t-1):r.format(e)}const Xl=(e,t)=>Math.round(e/t*1e4)/100+"%",Jl=e=>Math.min(va,Math.max(0,e));function Kl(e,t,o,n,a,r,i,s){const l=Jl(e.y(a)),c=Jl(e.y(n));return q`<div
    class="col ${i?`cap-${i}`:""} ${a<=0&&"both"!==i?"down":""}"
    data-series=${s}
    style="left:${Xl(t,ga)};width:${Xl(o,ga)};top:${Xl(l,va)};height:${Xl(c-l,va)};background:${r}"
  ></div>`}function Ql(e,t,o,n,a,r){return q`<span
    class="point-label col-label ${r?"below":""}"
    style="left:${Xl(t,ga)};top:${Xl(Jl(o),va)}"
    >${ja(n,a,e.hass)}</span
  >`}function ec(e,t,o,n){const a=e.y(n);return a<0||a>va?q``:q`<div
    class="target-mark"
    style="left:${Xl(t-.1*o,ga)};width:${Xl(1.2*o,ga)};top:${Xl(a,va)}"
  ></div>`}const tc=ls.map(e=>"period_last"===e.name?{...e,default:Ul.last}:"period_unit"===e.name?{...e,default:Ul.unit}:"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),oc=[...tc,{name:"stack",path:["stack"],default:"none"},{name:"color_by",path:["color_by"],default:"series"},{name:"range",path:["range"],default:!1},{name:"column_labels",path:["labels"],default:!1},{name:"rounded",path:["rounded"],default:!0},...fs,...ps];const nc=[{name:"column_color",path:["color"]}],ac=r`
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
`,rc={layout:"chart",group:"history",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
    ${ac}
  `,thumbnail:()=>Z`
    <path d="M7 36 V22 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M19 36 V12 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M31 36 V18 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M43 36 V8 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M55 36 V26 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M4 36.5 H62" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(e){if(void 0!==e.group_by&&!(e=>Pl.includes(e))(e.group_by))throw new Error(`"group_by" must be one of: ${Pl.join(", ")}`);if(void 0!==e.aggregate&&!Dl.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Dl.join(", ")}`);const t={...e};"auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,_a(t),Uo(e),gr(e),Ka(e),ar(e);for(const o of["range","rounded","labels"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);if(void 0!==e.color_by&&"series"!==e.color_by&&"bands"!==e.color_by)throw new Error('"color_by" must be one of: series, bands')},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},n=$s(`column|${cs(o)}|${t}`,e.hass,()=>[...ds(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:ss(e.hass,"group_by",Pl)},...t?[]:[{name:"aggregate",selector:ss(e.hass,"aggregate",Dl)}]]},{type:"grid",name:"",schema:[{name:"stack",selector:ss(e.hass,"stack",nr)},{name:"color_by",selector:ss(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"range",selector:{boolean:{}}},{name:"column_labels",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...gs(e.hass),...ms(e.hass)]);return ks({...e,commit:t=>e.commit(function(e){const t=e.period;return t&&"object"==typeof t&&void 0===t.calendar?void 0!==t.last&&void 0!==t.unit?e:{...e,period:{last:Ul.last,unit:Ul.unit,...t}}:e}(t))},"chart",n,oc)},entityFields:e=>({schema:$s("column-entity",e,()=>[{name:"column_color",selector:{text:{}}}]),fields:nc}),disconnect(e){za(e),Za(e),mr(e)},render:function(e){const t={...e,raw:ql(e.raw,e.items)},o=t.raw,n=!0===o.range,a=xa(t,Date.now(),{range:n}),r=ka(a,t),i=Aa(a,t),s=r===W&&i===W?W:q`${r}${i}`,l=Ea(a,t),c=Qa(o);if(l)return er("over"===c.header?{...c,header:"above"}:c,s,l);const d=n?"none":o.stack??"none",u=a.group,h=Zl(a.series.map(e=>e.points),u?1/0:a.range.end),p=u&&h.ends.length?{...a.range,end:Math.max(a.range.end,...h.ends)}:a.range,m="none"===d?void 0:ir(h.values,d),f=a.series.map(e=>e.entity.target).filter(e=>null!==e);let g;g=m?lr(m):n?Wl([...h.lows.flat(),...h.highs.flat(),...h.values.flat(),...f],!1):Wl([...h.values.flat(),...t.config.show.target?f:[]]);let v=o;"percent"===d?v={y_min:g[0]<0?-100:0,y_max:g[1]>0?100:0,...o}:!n&&g&&(v=function(e,t){const o={...t};return void 0===t.y_min&&e[0]>=0&&(o.y_min=0),void 0===t.y_max&&e[1]<=0&&(o.y_max=0),o}(g,o));let y=Wa({...t,raw:v},p,g);const{scales:b}=y,_=h.times.map((e,t)=>(e+h.ends[t])/2),x=new Map(_.map((e,t)=>[e,t]));if(u&&_.length){const e=(w=_.length,$=Ra(t)/Vl[u.unit],Math.max(1,Math.ceil(w/Math.max(1,$)))),o=Yl[u.unit],n="day"===u.unit&&_.length<=8?6048e5:a.range.end-a.range.start;y={...y,unit:o,times:_.filter((t,o)=>o%e===0),label:e=>sn(h.times[x.get(e)],o,n,t.hass)}}var w,$;const k=function(e,t,o,n,a,r){const i=e.raw,s=t.series,l=s.length,c=!0===i.range,d="bands"===i.color_by,u=Ra(e)/ga,h=!0===i.labels&&"percent"!==a&&o.times.length*(r?1:l)<=60,p=e.config.show.target&&"percent"!==a,m=Math.min(Math.max(0,n.domain[0]),n.domain[1]),f=(e,t)=>d?Ce(Te(t,e.entity.bands).color):e.color,g={columns:[],labels:[],targets:[]},v=r?sr(o.values):[];return o.times.forEach((t,a)=>{const i=n.x(t),d=n.x(o.ends[a]);if(r){const[t,l]=Rl(i,d,0,1);let c=-1,m=-1;r.forEach((e,t)=>{const o=e[a];o&&o[1]>o[0]&&(c=t),o&&o[1]<o[0]&&(m=t)}),r.forEach((e,r)=>{const i=e[a];if(!i||i[0]===i[1])return;const d=o.values[r][a],u=r===c?"top":r===m?"bottom":"";g.columns.push(Kl(n,t,l,Math.min(...i),Math.max(...i),f(s[r],d),u,r))});const y=v[a];if(h&&null!==y&&l*u>=24){const o=y>=0?Math.max(0,...r.map(e=>e[a]?.[1]??0)):Math.min(0,...r.map(e=>e[a]?.[1]??0)),i=Math.max(...s.map(e=>e.entity.decimals));g.labels.push(Ql(e,t+l/2,n.y(o),y,i,y<0))}const b=s[0].entity.target;return void(p&&null!==b&&g.targets.push(ec(n,t,l,b)))}s.forEach((t,r)=>{const s=o.values[r][a];if(null===s)return;const[v,y]=Rl(i,d,r,l);if(c){const e=o.lows[r][a]??s,i=o.highs[r][a]??s;g.columns.push(Kl(n,v,y,e,i,f(t,s),"both",r)),g.columns.push(q`<div
            class="col-mark"
            style="left:${Xl(v,ga)};width:${Xl(y,ga)};top:${Xl(Jl(n.y(s)),va)}"
          ></div>`)}else g.columns.push(Kl(n,v,y,Math.min(m,s),Math.max(m,s),f(t,s),s>=m?"top":"bottom",r)),h&&y*u>=24&&g.labels.push(Ql(e,v+y/2,n.y(s),s,t.entity.decimals,s<m));p&&null!==t.entity.target&&g.targets.push(ec(n,v,y,t.entity.target))})}),g}(t,a,h,b,d,m),M=a.series.map((e,t)=>({...e,points:_.map((e,o)=>({t:e,v:h.values[t][o],min:h.lows[t][o],max:h.highs[t][o]}))})),z={dotY:()=>null,heading:e=>{const o=x.get(e);return void 0===o?rn(e,t.hass):u?Gl(h.times[o],h.ends[o],u.unit,t.hass):rn(h.times[o],t.hass)}},A=(e,o)=>ja(e,o.entity.decimals,t.hass);if(n&&(z.text=(e,t)=>{if(!t||null===t.v)return"—";const o=t.min??t.v,n=t.max??t.v;return Na(`${A(o,e)} – ${A(n,e)}`,e.entity.unit)}),m){const e=sr(h.values),o=br(M),n=Math.max(...M.map(e=>e.entity.decimals));z.footer=a=>_r(t,e[x.get(a[0]?.p?.t??NaN)??-1]??null,o,n),"percent"===d&&(z.text=(e,t)=>{const o=t?m[e.index][x.get(t.t)??-1]:null;return t&&null!==t.v&&o?`${Na(A(t.v,e),e.entity.unit)} · ${Math.round(Math.abs(o[1]-o[0]))} %`:"—"})}const E=fr(o),S=E?pr(t.host):void 0,C=void 0===S?void 0:x.get(S),j=void 0===C?W:q`<div
          class="slot-hover"
          style="left:${Xl(b.x(h.times[C]),ga)};width:${Xl(b.x(h.ends[C])-b.x(h.times[C]),ga)}"
        ></div>`,N=zt(t.hass,"chart_aria",{style:zt(t.hass,"editor_style_column"),names:a.series.map(e=>e.entity.name).join(", ")}),L=!1===o.rounded?0:4;return er(c,s,Ga({axes:y,ctx:t,content:Z``,label:N,overlay:q`<div class="columns" style="--r:${L}px">${j}${k.columns}${k.targets}</div>
        <div class="point-labels">${k.labels}</div>
        ${"over"===c.header?tr(s):W}
        ${E?xr(t,M,b,S,Ra(t),z):W}`,hover:E?vr(t,p,M.map(e=>e.points)):void 0}))}},ic={from:0,to:1};const sc=(e,t,o)=>Math.min(o,Math.max(t,e));function lc(e,t){const o=sc(t,0,1);let n=sc(e.to-e.from,o,1);Number.isFinite(n)||(n=1);const a=sc(Number.isFinite(e.from)?e.from:0,0,1-n);return{from:a,to:a+n}}function cc(e){return e.from>1e-9||e.to<1-1e-9}function dc(e,t,o,n){const a=e.to-e.from,r=e.from+sc(t,0,1)*a,i=sc(a/o,n,1),s=r-sc(t,0,1)*i;return lc({from:s,to:s+i},n)}function uc(e,t){const o=e.to-e.from,n=sc(e.from+t,0,1-o);return{from:n,to:n+o}}function hc(e,t,o,n){const a=e.to-e.from,r=e.from+sc(Math.min(t,o),0,1)*a,i=e.from+sc(Math.max(t,o),0,1)*a;if(i-r>=n)return{from:r,to:i};const s=(r+i)/2;return lc({from:s-n/2,to:s+n/2},n)}function pc(e,t){const o=e.end-e.start;return{start:e.start+t.from*o,end:e.start+t.to*o}}function mc(e,t){if(0===e.length)return e;let o=0,n=e.length;for(;o<n;){const a=o+n>>1;(e[a].end??e[a].t)<t.start?o=a+1:n=a}const a=Math.max(0,o-1);let r=o;for(;r<e.length&&e[r].t<=t.end;)r++;const i=e.slice(a,Math.min(e.length,r+1));return i.length===e.length?e:i}const fc=new WeakMap;function gc(e,t){const o={zoom:!0===(n=e.raw).zoom,overview:!0===n.overview};var n;const a=t.range.end-t.range.start,r=a>0?Math.min(1,function(e){return e.group?2*{hour:36e5,day:864e5,week:6048e5,month:2592e6}[e.group.unit]:3e5}(t)/a):1,i=`${JSON.stringify(t.period)}|${t.back}|${t.group?.unit??""}|${t.source}`,s=function(e,t){let o=fc.get(e);return o&&o.key===t||(o={key:t,window:ic,pointers:new Map},fc.set(e,o)),o}(e.host,i);o.zoom||o.overview||(s.window=ic);const l=lc(s.window,r),c=t=>{const o=lc(t,r);o.from===s.window.from&&o.to===s.window.to||(s.window=o,e.requestUpdate())};return{options:o,window:l,zoomed:cc(l),range:pc(t.range,l),minSpan:r,current:()=>lc(s.window,r),set:c,reset:()=>c(ic)}}const vc=e=>{const t=e.currentTarget.getBoundingClientRect();return{f:t.width>0?sc((e.clientX-t.left)/t.width,0,1):0,width:t.width}};function yc(e){try{e.currentTarget.setPointerCapture?.(e.pointerId)}catch{}}const bc=e=>e?.leave({pointerType:"mouse"});function _c(e,t,o){const n=fc.get(e.host),a=()=>{n.gesture=void 0,n.select&&(n.select=void 0,e.requestUpdate())};return{down(e){const{f:a,width:r}=vc(e);if(n.pointers.set(e.pointerId,a),2===n.pointers.size){const[e,a]=[...n.pointers.values()];return n.gesture={kind:"pinch",w0:t.current(),start:e<=a?[e,a]:[a,e]},n.select=void 0,void bc(o)}if(!(n.pointers.size>2)){if("mouse"===e.pointerType&&0===e.button){const o=t.current();n.gesture={kind:cc(o)?"pan":"select",x0:a,w0:o,moved:!1,px:r},yc(e)}o?.move(e)}},move(a){if(!n.pointers.has(a.pointerId))return void o?.move(a);const{f:r}=vc(a);n.pointers.set(a.pointerId,r);const i=n.gesture;if("pinch"===i?.kind){if(n.pointers.size<2)return;const[e,o]=[...n.pointers.values()];return void t.set(function(e,t,o,n){const a=e.to-e.from,r=e.from+t[0]*a,i=e.from+t[1]*a,s=o[1]-o[0];if(Math.abs(s)<.02||Math.abs(t[1]-t[0])<.02)return uc(e,-((o[0]+o[1])/2-(t[0]+t[1])/2)*a);const l=sc((i-r)/s,n,1),c=r-o[0]*l;return lc({from:c,to:c+l},n)}(i.w0,i.start,e<=o?[e,o]:[o,e],t.minSpan))}if(i&&("pan"===i.kind||"select"===i.kind))return!i.moved&&Math.abs(r-i.x0)*i.px<4?void o?.move(a):(i.moved||bc(o),i.moved=!0,void("pan"===i.kind?t.set(uc(i.w0,-(r-i.x0)*(i.w0.to-i.w0.from))):(n.select=[i.x0,r],e.requestUpdate())));o?.move(a)},up(e){const{f:o,width:r}=vc(e),i=n.gesture;if(n.pointers.delete(e.pointerId),"pinch"===i?.kind)return void(0===n.pointers.size&&(n.gesture=void 0));"select"===i?.kind&&i.moved&&t.set(hc(i.w0,i.x0,o,t.minSpan));const s=!i||!("moved"in i)||!i.moved;if(a(),"mouse"!==e.pointerType&&s){const a=e.timeStamp||Date.now(),i=n.lastTap;i&&a-i.at<300&&Math.abs(o-i.x)*r<30?(n.lastTap=void 0,t.reset()):n.lastTap={at:a,x:o}}},cancel(e){n.pointers.delete(e.pointerId),"pinch"===n.gesture?.kind&&n.pointers.size>=2||(a(),o?.leave(e))},leave(e){n.gesture&&"mouse"===e.pointerType||(n.pointers.delete(e.pointerId),o?.leave(e))},wheel(e){const{f:o}=vc(e);if(e.ctrlKey||e.metaKey){e.preventDefault();const n=1===e.deltaMode?16*e.deltaY:e.deltaY;return void t.set(dc(t.current(),o,Math.exp(-sc(n,-100,100)/200),t.minSpan))}const n=e.shiftKey&&0===e.deltaX?e.deltaY:e.deltaX,a=t.current();if(cc(a)&&Math.abs(n)>Math.abs(e.shiftKey?0:e.deltaY)){e.preventDefault();const{width:o}=vc(e);t.set(uc(a,n/Math.max(o,1)*(a.to-a.from)))}},dblclick(){t.reset()}}}function xc(e,t){const o=fc.get(e.host),n=o?.select,a=n?q`<div
        class="zoom-select"
        style="left:${100*Math.min(...n)}%;width:${100*Math.abs(n[1]-n[0])}%"
      ></div>`:W,r=t.zoomed?q`<button
        class="zoom-reset"
        title=${zt(e.hass,"zoom_reset")}
        @pointerdown=${e=>e.stopPropagation()}
        @click=${e=>{e.stopPropagation(),t.reset()}}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${wc}></path></svg>
        <span>${zt(e.hass,"zoom_reset")}</span>
      </button>`:W;return a===W&&r===W?W:q`${a}${r}`}const wc="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z";function $c(e,t){const o=Ao(e.map(e=>e.points));if(!o)return Z``;const[n,a]=Eo(o),r=So([t.start,t.end],[0,ga]),i=So([n,a],[38,2]);return Z`${e.map(e=>{const t=fa(ln(e.points,200)).map(e=>1===e.length?`M${r(e[0].t).toFixed(1)},${i(e[0].v).toFixed(1)}h0.5`:`M${e.map(e=>`${r(e.t).toFixed(1)},${i(e.v).toFixed(1)}`).join("L")}`).join("");return Z`<path d=${t} fill="none" stroke=${e.color}></path>`})}`}function kc(e,t,o,n){const a=fc.get(e.host),r=t.window,i=e=>vc(e),s=pc(o,r),l=zt(e.hass,"zoom_window",{from:rn(s.start,e.hass),to:rn(s.end,e.hass)}),c=e=>Math.round(1e4*e)/100+"%";return q`<div
    class="overview ${t.zoomed?"zoomed":""}"
    @pointerdown=${e=>{if(e.button>0)return;e.stopPropagation();const{f:o,width:n}=i(e),r=t.current(),s=10/Math.max(n,1);let l="new";cc(r)&&(Math.abs(o-r.from)<=s?l="left":Math.abs(o-r.to)<=s?l="right":o>r.from&&o<r.to&&(l="move")),a.gesture={kind:l,f0:o,w0:r,moved:!1,px:n},yc(e)}}
    @pointermove=${e=>{const o=a.gesture;if(!o||!("f0"in o))return;const{f:n}=i(e);if(!o.moved&&Math.abs(n-o.f0)*o.px<4)return;o.moved=!0;const{w0:r}=o;"move"===o.kind?t.set(uc(r,n-o.f0)):"left"===o.kind?t.set({from:Math.min(n,r.to-t.minSpan),to:r.to}):"right"===o.kind?t.set({from:r.from,to:Math.max(n,r.from+t.minSpan)}):t.set(hc(ic,o.f0,n,t.minSpan))}}
    @pointerup=${()=>{const e=a.gesture;if(e&&"f0"in e&&(a.gesture=void 0,!e.moved&&"new"===e.kind&&cc(e.w0))){const o=e.w0.to-e.w0.from;t.set({from:e.f0-o/2,to:e.f0+o/2})}}}
    @pointercancel=${()=>a.gesture=void 0}
    @dblclick=${e=>{e.stopPropagation(),t.reset()}}
  >
    <svg class="overview-lines" viewBox="0 0 ${ga} ${40}" preserveAspectRatio="none" aria-hidden="true">
      ${n}
    </svg>
    <div class="overview-shade" style="left:0;width:${c(r.from)}"></div>
    <div class="overview-shade" style="left:${c(r.to)};right:0"></div>
    <div
      class="overview-window"
      style="left:${c(r.from)};width:${c(r.to-r.from)}"
      tabindex="0"
      role="slider"
      aria-label=${zt(e.hass,"zoom_window_label")}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round((r.from+r.to)/2*100)}
      aria-valuetext=${l}
      @keydown=${e=>{const o=t.current(),n=o.to-o.from,a=.5,r={ArrowLeft:()=>uc(o,-n/4),ArrowRight:()=>uc(o,n/4),ArrowUp:()=>dc(o,a,1.5,t.minSpan),ArrowDown:()=>dc(o,a,1/1.5,t.minSpan),"+":()=>dc(o,a,1.5,t.minSpan),"=":()=>dc(o,a,1.5,t.minSpan),"-":()=>dc(o,a,1/1.5,t.minSpan),Home:()=>uc(o,-1),End:()=>uc(o,1),Escape:()=>ic}[e.key];r&&(e.preventDefault(),e.stopPropagation(),t.set(r()))}}
    >
      <span class="overview-handle left"></span><span class="overview-handle right"></span>
    </div>
  </div>`}const Mc=r`
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
`,zc="chartdeck-sync";const Ac=new WeakMap;function Ec(e,t){const o=Ac.get(e);o&&window.dispatchEvent(new CustomEvent(zc,{detail:{group:o.group,source:e,message:t}}))}function Sc(e){const t=Ac.get(e);t&&window.removeEventListener(zc,t.listener),Ac.delete(e)}function Cc(e,t,o){const n="string"==typeof(a=e.raw).sync&&""!==a.sync.trim()?a.sync.trim():void 0;var a;let r=Ac.get(e.host);if(!n)return void(r&&Sc(e.host));if(!r||r.group!==n){r&&Sc(e.host);const t={group:n,handlers:new Map,ctx:e,listener:()=>{}};t.listener=e=>function(e,t){if(!t||t.group!==e.group||t.source===e.ctx.host)return;const o=t.message;if("hover"===o.type){if(o.t===e.remote)return;e.remote=o.t,e.ctx.requestUpdate()}else if("period"===o.type){const t={period:JSON.parse(o.period)};if(o.period!==e.period||!t.period.navigate||Tn(e.ctx.host,t.period)===o.steps)return;Fn(e.ctx.host,t.period,o.steps),e.steps=o.steps,e.ctx.requestUpdate()}e.handlers.get(o.type)?.(o)}(t,e.detail),window.addEventListener(zc,t.listener),Ac.set(e.host,t),r=t}r.ctx=e,o!==r.sent&&(r.sent=o,Ec(e.host,{type:"hover",t:o}));const i=(e=>JSON.stringify(e.period))(t),s=t.period.navigate?Tn(e.host,t.period):0;return r.period===i&&r.steps!==s&&Ec(e.host,{type:"period",period:i,steps:s}),r.period=i,r.steps=s,void 0===o?r.remote:void 0}const jc=["series","bands"];function Nc(e,t,o){const n=e=>{const t=(va-o.y(e))/va;return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0},a=[];return t.forEach((e,o)=>{const r=Number.isFinite(e.from)?n(e.from):0,i=o+1<t.length?n(t[o+1].from):1,s=Ce(e.color);a.push(Z`<stop offset=${r} stop-color=${s}></stop><stop offset=${i} stop-color=${s}></stop>`)}),Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${va} y2="0">
    ${a}
  </linearGradient>`}function Lc(e,t,o,n,a){const r=Ot(e.entity.config,a),i=ln(e.points,500),s=fa(i).map(o=>ma(o.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join(""),l=r.dots?i.filter(e=>null!==e.v&&e.t!==n.start&&e.t!==n.end):[],c=l.length>0&&l.length<=200?Z`<path
          class="dots"
          d=${Dt(l.map(e=>[t.x(e.t),t.y(e.v)]))}
          fill="none"
          stroke=${o}
          style="stroke-width:${Ut(r.width)}px"
        ></path>`:W;return Z`<g class="series" data-series=${e.index}>
    <path
      class="line ${e.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${o}
      style="stroke-width:${r.width}px"
    ></path>
    ${c}
  </g>`}function Tc(e,t,o,n,a,r,i){const{range:s}=e;return Nr(t.map(e=>({points:e.points.filter(e=>e.t>=o.start&&e.t<=o.end),decimals:e.entity.decimals,color:e.color})),a,{at:e=>[n.x(e.t)/ga,n.y(e.v)/va],width:Ra(i),height:r?96:162,skip:t=>void 0===e.group&&(t.t===s.start||t.t===s.end)},i.hass)}function Fc(e,t){const o="outside"===t.labels;return(e?110:180)-(o&&t.x?e?14:18:0)-(o&&t.y?6:0)}function Oc(e,t,o){const n=e.series.reduce((e,t)=>e+t.entity.name.length+t.entity.display.length+6,0);return{l:0,t:0,r:Math.min(o,8*n),b:t?24:34}}const Pc={layout:"chart",group:"history",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
    ${Mc}
    ${Ui}
    ${Lr}
    ${Zr}
    ${Qr}
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
  `,thumbnail:()=>Z`
    <path d="M4 30 C14 28 16 14 26 16 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />
    <path d="M4 34 C16 33 22 26 32 28 S50 30 60 24" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(e){if(_a(e),Uo(e),gr(e),Bt(e),Ka(e),function(e){for(const t of["zoom","overview"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`)}(e),Ai(e),function(e){const t=e;if(void 0!==t.labels&&"boolean"!=typeof t.labels)throw new Error('"labels" must be true or false');if(void 0!==t.labels_show&&!$r.includes(t.labels_show))throw new Error(`"labels_show" must be one of: ${$r.join(", ")}`);if(void 0!==t.labels_position&&!kr.includes(t.labels_position))throw new Error(`"labels_position" must be one of: ${kr.join(", ")}`);if(void 0!==t.labels_overlap&&"boolean"!=typeof t.labels_overlap)throw new Error('"labels_overlap" must be true or false')}(e),function(e){const t=e.extremes;if(void 0!==t){if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"extremes" must have "min", "max" (true or false) and "average"');const e=t;for(const t of["min","max"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"extremes.${t}" must be true or false`);if(void 0!==e.average&&!Tr.includes(e.average))throw new Error(`"extremes.average" must be one of: ${Tr.join(", ")}`)}for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o.extremes;if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"extremes" of ${o.entity} must be true or false`)}}(e),function(e){if(void 0!==e.sync&&("string"!=typeof e.sync||""===e.sync.trim()))throw new Error('"sync" must be a group name')}(e),function(e){if(void 0!==e.multiples&&"boolean"!=typeof e.multiples)throw new Error('"multiples" must be true or false');if(void 0!==e.multiples_scale&&!Jr.includes(e.multiples_scale))throw new Error(`"multiples_scale" must be one of: ${Jr.join(", ")}`);const t=e.multiples_columns;if(void 0!==t&&!(Number.isInteger(t)&&t>=1&&t<=6))throw new Error('"multiples_columns" must be a whole number from 1 to 6')}(e),void 0!==e.color_by&&!jc.includes(e.color_by))throw new Error(`"color_by" must be one of: ${jc.join(", ")}`)},editor:function(e){const t=$s(`line|${cs(e.config)}|${o=e.config,!0===o?.labels?"labels":""}|${(e=>!0===e?.multiples?"multiples":"")(e.config)}`,e.hass,()=>{return[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:ss(e.hass,"curve",ua)},{name:"color_by",selector:ss(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"dots",selector:{boolean:{}}}]},...bs(e.hass,e.config),...gs(e.hass),{name:"y_scale",selector:ss(e.hass,"y_scale",Co)},...vs,...ys,...(t=e.hass,[{type:"grid",name:"",schema:[{name:"extremes_max",selector:{boolean:{}}},{name:"extremes_min",selector:{boolean:{}}}]},{name:"extremes_average",selector:{select:{mode:"dropdown",options:Tr.map(e=>({value:e,label:zt(t,`editor_extremes_average_${e}`)}))}}}]),..._s,...ms(e.hass),...xs(e.hass,e.config)];var t});var o;return q`${ks(e,"chart",t,Ms)}${is(e)}`},entityFields:(e,t)=>{const o=lo(e),n=to(!0===t.dots);return Ur(Dr(t))?{schema:Yr(o,e),fields:Xr(n)}:{schema:o,fields:n}},watch:function(e){const t=new Set;for(const o of Ei(e))for(const e of[o.value,o.from,o.to,"state"===o.type?o.entity:void 0])wi(e)&&t.add(e.trim());return[...t]},disconnect(e){za(e),Za(e),mr(e),function(e){fc.delete(e)}(e),Ti(e),Sc(e)},render(e){const t=xa(e),o=pr(e.host),n=Cc(e,t,o),a=ka(t,e),r=Aa(t,e),i=a===W&&r===W?W:q`${a}${r}`,s=Ea(t,e),l=Qa(e.raw);if(s)return er("over"===l.header?{...l,header:"above"}:l,i,s);const c=function(e){if(!0===e.multiples)return{scale:e.multiples_scale??"auto",columns:e.multiples_columns}}(e.raw);if(c){const r="log"===e.raw.y_scale?{...t,series:t.series.map(e=>({...e,points:Da(e.points)}))}:t;return er({...l,header:"above"},a,Kr(e,r,c,o??n,(t,a,i)=>function(e,t,o,n,a,r,i=W,s=pr(e.host)){const{scales:l}=n,c=Mr(e.raw),d=fr(e.raw),u="bands"===e.raw.color_by,h=u?Z`${o.map(e=>Nc(`cd-bands-${e.index}${r}`,e.entity.bands,l))}`:W,p=Pt(o,t=>Ot(t.entity.config,e.raw).onTop),m=Z`${p.map(o=>Lc(o,l,u?`url(#cd-bands-${o.index}${r})`:o.color,t.range,e.raw))}`,f=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_line"),names:o.map(e=>e.entity.name).join(", ")});return Ga({axes:n,ctx:e,content:m,label:f,defs:h,overlay:q`${i} ${c?Tc(t,o,t.range,l,c,!0,e):W}
    ${d?xr(e,o,l,s,a):W}`,hover:d?vr(e,t.range,o.map(e=>e.points)):void 0})}(e,r,[t],a,i,`-${t.index}`,W,o??n)))}const d=gc(e,t),u=d.range,h=d.zoomed?t.series.map(e=>({...e,points:mc(e.points,u)})):t.series,p="log"===e.raw.y_scale,m=p?h.map(e=>({...e,points:Da(e.points)})):h,f=function(e,t,o,n){const a=Ei(e).filter(e=>"line"===e.type).map(e=>Si(e.value,t)).filter(xi);return o&&n?[...a,...gi(fi(o,n),n.range)]:a}(e.raw,e.hass,e,t).filter(e=>!p||e>0).map(e=>({t:u.start,v:e})),g=Ao([...m.map(e=>e.points),f]);if(p&&!g){const t=q`<div class="chart-message">${zt(e.hass,"chart_log_nothing")}</div>`;return er("over"===l.header?{...l,header:"above"}:l,i,t)}const v=Wa(e,u,g),{scales:y}=v,b=fr(e.raw)&&!function(e){const t=fc.get(e)?.gesture;return!!t&&("pinch"===t.kind||"moved"in t&&t.moved)}(e.host),_="bands"===e.raw.color_by,x=_?Z`${h.map(e=>Nc(`cd-bands-${e.index}`,e.entity.bands,y))}`:W,w=Pt(m,t=>Ot(t.entity.config,e.raw).onTop),$=Z`${w.map(o=>Lc(o,y,_?`url(#cd-bands-${o.index})`:o.color,t.range,e.raw))}`,k=fr(e.raw)?vr(e,u,h.map(e=>e.points)):void 0,M=Di(e,t,y,Ra(e)),z=Mr(e.raw),A=Ra(e),E=qr({ctx:e,series:h,scales:y,range:u,group:t.group,timeWeighted:"history"===t.source&&void 0===t.group,width:A,height:Fc(l.compact,v.options),until:Math.min(u.end,Date.now()),obstacles:"over"===l.header?[Oc(t,l.compact,A)]:[]}),S=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_line"),names:t.series.map(e=>e.entity.name).join(", ")});return er(l,i,Ga({axes:v,ctx:e,content:Z`${M.behind}${E.lines}${$}${M.front}`,label:S,defs:x,overlay:q`${"over"===l.header?tr(i):W}
        ${z?Tc(t,m,u,y,z,l.compact,e):W}
        ${xc(e,d)} ${M.overlay} ${E.overlay}
        ${b?xr(e,h,y,o??n,Ra(e)):W}`,hover:k,gestures:d.options.zoom?_c(e,d,k):void 0,classes:d.options.zoom?"zoomable "+(d.zoomed?"zoomed":""):"",below:d.options.overview?kc(e,d,t.range,$c(t.series,t.range)):W}))}},Dc=["line","column","area"],Uc=["auto","left","right"],Hc=e=>e.config,Ic=e=>Hc(e).type??"line";function Bc(e,t){const o={...e},n=t.some(e=>"column"===Ic(e));return"none"!==e.group_by&&(void 0!==e.group_by&&"auto"!==e.group_by||n)?void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=Il(Cn(e.period))):delete o.group_by,"auto"===e.aggregate&&delete o.aggregate,o}function qc(e,t){const o=e.flatMap(e=>e.points.map(e=>e.v));return Wl(o,t.includes("column"))}const Zc=[...ls.map(e=>"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:Lt},{name:"dots",path:["dots"],default:!1},{name:"rounded",path:["rounded"],default:!0},...fs,...ps];const Rc=[{name:"series_type",path:["type"],default:"line"},{name:"series_axis",path:["y_axis"],default:"auto"},{name:"series_color",path:["color"]},{name:"series_aggregate",path:["aggregate"],default:"auto"},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"negative_color",path:["negative_color"]}],Wc={layout:"chart",group:"history",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
    ${Ts}
    ${ac}
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
  `,thumbnail:()=>Z`
    <path d="M10 36 V22 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M27 36 V14 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M44 36 V18 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M4 26 C14 20 22 8 32 10 S50 22 60 6" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){if(void 0!==e.group_by&&!Pl.includes(e.group_by))throw new Error(`"group_by" must be one of: ${Pl.join(", ")}`);if(void 0!==e.aggregate&&!Dl.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Dl.join(", ")}`);const t={...e};if("auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,_a(t),Qn(t),Uo(e),gr(e),Bt(e),Ka(e),void 0!==e.rounded&&"boolean"!=typeof e.rounded)throw new Error('"rounded" must be true or false');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.type&&!Dc.includes(e.type))throw new Error(`"type" of ${o.entity} must be one of: ${Dc.join(", ")}`);if(void 0!==e.y_axis&&"left"!==e.y_axis&&"right"!==e.y_axis)throw new Error(`"y_axis" of ${o.entity} must be one of: left, right`);if(void 0!==e.aggregate&&!Kn.includes(e.aggregate))throw new Error(`"aggregate" of ${o.entity} must be one of: ${Kn.join(", ")}`)}},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},n=$s(`combined|${cs(o)}|${t}`,e.hass,()=>[...ds(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:ss(e.hass,"group_by",Pl)},...t?[]:[{name:"aggregate",selector:ss(e.hass,"aggregate",Dl)}]]},{name:"curve",selector:ss(e.hass,"curve",ua)},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"dots",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",n,Zc)},entityFields:e=>({schema:$s("combined-entity",e,()=>[{type:"grid",name:"",schema:[{name:"series_type",selector:ss(e,"series_type",Dc)},{name:"series_axis",selector:ss(e,"series_axis",Uc)},{name:"series_color",selector:{text:{}}},{name:"series_aggregate",selector:ss(e,"series_aggregate",["auto",...Kn])}]},{type:"grid",name:"",schema:[{name:"curve",selector:ss(e,"curve",ua)},{name:"line_width",selector:Qt},{name:"dash",selector:{boolean:{}}},{name:"negative_color",selector:{text:{}}}]}]),fields:Rc}),disconnect(e){za(e),Za(e),mr(e)},render:function(e){const t={...e,raw:Bc(e.raw,e.items)},o=t.raw,n=xa(t,Date.now(),{aggregate:t=>function(e,t){const o=t.aggregate;return Hc(e).aggregate??(o&&"auto"!==o?o:Bl(e)?"change":"mean")}(t,e.raw)}),a=ka(n,t),r=Aa(n,t),i=a===W&&r===W?W:q`${a}${r}`,s=Ea(n,t),l=Qa(o);if(s)return er("over"===l.header?{...l,header:"above"}:l,i,s);const c=n.series.map(e=>Ic(e.entity)),d=function(e){const t=e[0]?.unit,o=e.map(e=>Hc(e).y_axis??(e.unit===t?"left":"right"));return o.includes("left")?o:o.map(()=>"left")}(n.series.map(e=>e.entity)),u=n.group,h=n.series.map(e=>u?{...e,points:e.points.map(e=>({...e,t:void 0!==e.end?(e.t+e.end)/2:e.t}))}:e),p=u?Math.max(n.range.end,...n.series.flatMap(e=>e.points.map(e=>e.end??0))):0,m=u?{...n.range,end:p}:n.range,f=e=>h.filter((t,o)=>d[o]===e),g=e=>c.filter((t,o)=>d[o]===e),v=qc(f("left"),g("left"));let y=o;v&&g("left").includes("column")?y={...o,y_min:o.y_min??(v[0]>=0?0:void 0),y_max:o.y_max??(v[1]<=0?0:void 0)}:g("left").includes("area")&&(y=zs(v,o));const b=Wa({...t,raw:y},m,v),_=b.scales,x=f("right"),w=qc(x,g("right")),$={};w&&(g("right").includes("column")||g("right").includes("area"))&&(w[0]>=0&&w[0]<=w[1]/2&&($.min=0),w[1]<=0&&w[1]>=w[0]/2&&($.max=0));const k=x.length?Zo(w,$,4):void 0,M=k?{x:_.x,y:So(k.domain,[va,0]),domain:k.domain}:void 0,z=e=>"right"===d[e.index]&&M?M:_,A=h.filter(e=>"area"===c[e.index]).map(e=>Cs(e,e.points,z(e),o,{range:m})),E=h.filter(e=>"line"===c[e.index]).map(e=>Lc({...e,points:e.points},z(e),e.color,m,o)),S=h.filter(e=>"column"===c[e.index]),C=Zl(n.series.filter(e=>"column"===c[e.index]).map(e=>e.points),u?1/0:n.range.end),j=!1===o.rounded?0:4,N=[];C.times.forEach((e,t)=>{const o=_.x(e),n=_.x(C.ends[t]);S.forEach((e,a)=>{const r=C.values[a][t];if(null===r)return;const i=z(e),s=Math.min(Math.max(0,i.domain[0]),i.domain[1]),[l,c]=Rl(o,n,a,S.length);N.push(Kl(i,l,c,Math.min(s,r),Math.max(s,r),e.color,r>=s?"top":"bottom",e.index))})});const L=C.times.map((e,t)=>(e+C.ends[t])/2),T=h.map(e=>{if("column"!==c[e.index]||u)return e;const t=S.indexOf(e);return{...e,points:L.map((e,o)=>({t:e,v:C.values[t][o]}))}}),F=new Map;for(const D of n.series)for(const e of D.points)void 0!==e.end&&F.set((e.t+e.end)/2,[e.t,e.end]);const O=fr(o),P=zt(t.hass,"chart_aria",{style:zt(t.hass,"editor_style_combined"),names:n.series.map(e=>e.entity.name).join(", ")});return er(l,i,Ga({axes:b,ctx:t,right:k&&M?{value:k,y:M.y}:void 0,content:Z`${A.map(e=>e.body)}`,defs:Z`${A.map(e=>e.defs)}`,label:P,overlay:q`<div class="columns" style="--r:${j}px">${N}</div>
        <svg class="plot lines-over" viewBox="0 0 ${ga} ${va}" preserveAspectRatio="none" aria-hidden="true">
          ${E}
        </svg>
        ${"over"===l.header?tr(i):W}
        ${O?xr(t,T,_,pr(t.host),Ra(t),{dotY:(e,t)=>"column"===c[e.index]||null===t.v?null:z(e).y(t.v),heading:e=>{const o=F.get(e);return o&&u?Gl(o[0],o[1],u.unit,t.hass):rn(e,t.hass)}}):W}`,hover:O?vr(t,m,T.map(e=>e.points)):void 0}))}};function Vc(e,t){const o=Math.round(12+88*t);return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const Yc=Math.sqrt(3)/2,Gc=["hours","calendar"],Xc=["scale","bands"],Jc=["square","rounded","hexagon"],Kc=10,Qc=1e4,ed={hours:{last:4,unit:"week",source:"history"},calendar:{last:12,unit:"month",source:"statistics"}},td=e=>"number"==typeof e&&Number.isFinite(e);function od(e){return e.grid??"hours"}function nd(e){const t=od(e),o=ed[t],n=e.period??{};return{...e,group_by:"hours"===t?"hour":"day",source:e.source??o.source,period:void 0!==n.calendar?n:{...n,last:n.last??o.last,unit:n.unit??o.unit}}}const ad=new Map;function rd(e,t,o){const n=e?.locale?.language??e?.language??"en",a=`${n}|${t}|${JSON.stringify(o)}`;let r=ad.get(a);if(!r){try{r=new Intl.DateTimeFormat(n,{...o,timeZone:t})}catch{r=new Intl.DateTimeFormat("en",{...o,timeZone:"UTC"})}ad.set(a,r)}return r}function id(e,t){return rd(t,"UTC",{weekday:"short"}).format(Date.UTC(2024,0,e))}function sd(e,t,o=!1){return rd(t,"UTC",{hour:"numeric",...o?{minute:"2-digit"}:{},hour12:tn(t)}).format(Date.UTC(2024,0,1,e))}function ld(e,t,o,n,a="cell"){const[r,i]=e.centre(t.col,t.row),s=n?`fill:${n}`:"",l=n?"":"empty";if("hexagon"===o)return Z`<path class="${a} ${l}" d=${function(e,t,o){const n=o/Math.sqrt(3),a=[0,1,2,3,4,5].map(o=>{const a=(60*o-90)*Math.PI/180;return`${Math.round(100*(e+n*Math.cos(a)))/100},${Math.round(100*(t+n*Math.sin(a)))/100}`});return`M${a.join("L")}Z`}(r,i,8.8)} style=${s}></path>`;const c=8.8;return Z`<rect class="${a} ${l}" x=${r-4.4} y=${i-4.4} width=${c} height=${c}
    rx=${"rounded"===o?2:.4} style=${s}></rect>`}const cd=e=>Math.round(1e4*e)/100+"%";function dd(e,t,o,n){const{zone:a}=t,r=e=>(a.firstDay-1+e)%7+1,i=function(e,t){const o=new Array(168).fill(0),n=new Array(168).fill(0);for(const a of e){if(null===a.v)continue;const e=mn(a.t,t.timeZone),r=(e.weekday-t.firstDay+7)%7*24+e.hour;o[r]+=a.v,n[r]+=1}return o.map((e,t)=>({row:Math.floor(t/24),hour:t%24,v:n[t]?e/n[t]:null,count:n[t]}))}(e.points,a).map(e=>({col:e.hour,row:e.row,v:e.v,count:e.count,title:()=>`${id(r(e.row),o)} ${sd(e.hour,o,!0)} – ${sd((e.hour+1)%24,o,!0)}`})),s=n?3:6;return{cells:i,cols:24,rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:id(r(e),o)})),colLabels:Array.from({length:24/s},(e,t)=>({col:t*s,text:sd(t*s,o)}))}}function ud(e,t,o){const{zone:n}=t,a=function(e,t){if(0===e.length)return{cells:[],weeks:0,months:[]};const o=e=>{const o=mn(e,t.timeZone);return Math.round(Date.UTC(o.year,o.month-1,o.day)/864e5)},n=o(yn("week",e[0].t,t)),a=[],r=[];let i=-1;for(const s of e){const e=mn(s.t,t.timeZone),l=Math.floor((o(s.t)-n)/7);a.push({t:s.t,col:l,row:(e.weekday-t.firstDay+7)%7,v:s.v});const c=12*e.year+e.month;c!==i&&(-1!==i&&1!==e.day||r.push({col:l,t:s.t}),i=c)}return r.length>1&&r[1].col-r[0].col<3&&r.shift(),{cells:a,weeks:a[a.length-1].col+1,months:r}}(e.points,n),r=rd(o,n.timeZone,{weekday:"short",day:"numeric",month:"short",year:"numeric"}),i=rd(o,n.timeZone,{month:"short"}),s=e=>(n.firstDay-1+e)%7+1;return{cells:a.cells.map(e=>({col:e.col,row:e.row,v:e.v,title:()=>r.format(e.t)})),cols:Math.max(1,a.weeks),rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:id(s(e),o)})),colLabels:a.months.map(e=>({col:e.col,text:i.format(e.t)}))}}function hd(e,t,o,n){const a=o.raw,r=od(o.raw),i=a.cell_shape??"rounded",s="bands"===a.color_by,l=qa(o),c="hours"===r?dd(e,t,o.hass,l>=400):ud(e,t,o.hass),d=function(e,t,o){if("hexagon"===o){const o=Kc/Math.sqrt(3),n=Kc*Yc,a=e*Kc+5,r=(t-1)*n+2*o;return{width:a,height:r,centre:(e,t)=>[e*Kc+5+t%2*5,o+t*n],at(i,s){const l=Math.min(t-1,Math.max(0,Math.round((s*r-o)/n))),c=Math.floor((i*a-l%2*5)/Kc);return[Math.min(e-1,Math.max(0,c)),l]}}}return{width:e*Kc,height:t*Kc,centre:(e,t)=>[e*Kc+5,t*Kc+5],at:(o,n)=>[Math.min(e-1,Math.floor(o*e)),Math.min(t-1,Math.floor(n*t))]}}(c.cols,c.rows,i),u=Math.max(0,l-72)/d.width*Kc,h=Math.ceil(13/Math.max(1,u*("hexagon"===i?Yc:1))),p=c.rowLabels.filter(e=>e.row%h===0);let m=-1/0;const f=c.colLabels.filter(e=>!((e.col-m)*u<32)&&(m=e.col,!0)),g=function(e,t={}){const o=e.filter(e=>null!==e);if(0===o.length&&(void 0===t.min||void 0===t.max))return;let n=t.min??Math.min(...o),a=t.max??Math.max(...o);return a<=n&&(void 0===t.max?a=n+1:n=a-1),[n,a]}(c.cells.map(e=>e.v),{min:td(a.color_min)?a.color_min:void 0,max:td(a.color_max)?a.color_max:void 0}),v=t=>{if(null!==t)return s?Ce(Te(t,e.entity.bands).color):g?Vc(e.color,function(e,[t,o]){return Math.min(1,Math.max(0,(e-t)/(o-t)))}(t,g)):e.color},y=Ys(o.host),b=void 0!==y&&Math.floor(y/Qc)===e.index?y%Qc:void 0,_=new Map(c.cells.map((e,t)=>[8*e.col+e.row,t])),x=fr(o.raw)?Xs(o,(t,o)=>{const[n,a]=d.at(t,o),r=_.get(8*n+a);return void 0===r?void 0:e.index*Qc+r}):void 0,w=void 0===b?void 0:c.cells[b];let $=W;if(w){const[t,n]=d.centre(w.col,w.row),a=null===w.v?zt(o.hass,"heatmap_empty"):Na(ja(w.v,e.entity.decimals,o.hass),e.entity.unit);$=Ks({x:t/d.width,y:n/d.height,plotWidth:Math.max(0,l-80),title:w.title(),rows:[{color:v(w.v)??"var(--cd-track)",name:e.entity.name,value:a},...void 0!==w.count&&null!==w.v?[{name:zt(o.hass,"heatmap_hours"),value:String(w.count)}]:[]]})}const{show:k}=o.config,M=k.name||k.value||n?q`<div class="series-header">
          <div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
            ${s?W:q`<span class="swatch" style="background:${e.color}"></span>`}
            ${k.name||n?q`<span class="series-name">${e.entity.name}</span>`:W}
            ${k.value?q`<span class="series-value">${e.entity.display}</span>`:W}
          </div>
        </div>`:W,z=zt(o.hass,"heatmap_aria",{name:e.entity.name});return q`<div class="hm grid-${r} shape-${i}">
    ${M}
    <div class="hm-body">
      <div class="hm-rows" aria-hidden="true">
        ${p.map(e=>q`<span class="hm-label" style="top:${cd(d.centre(0,e.row)[1]/d.height)}">${e.text}</span>`)}
      </div>
      <div
        class="hm-plot ${x?"hoverable":""}"
        @pointerdown=${x?.move}
        @pointermove=${x?.move}
        @pointerleave=${x?.leave}
        @pointercancel=${x?.leave}
      >
        <svg class="hm-svg" viewBox="0 0 ${d.width} ${d.height}" role="img" aria-label=${z}>
          ${c.cells.map(e=>ld(d,e,i,v(e.v)))}
          ${w?ld(d,w,i,"none","cell picked"):W}
        </svg>
        ${$}
      </div>
      <div class="hm-cols" aria-hidden="true">
        ${f.map(e=>q`<span class="hm-label" style="left:${cd(e.col*Kc/d.width)}">${e.text}</span>`)}
      </div>
    </div>
    ${!1===a.legend?W:function(e,t,o,n){const a=e.entity,r=e=>ja(e,a.decimals,n.hass);return o?q`<div class="hm-legend bands">
      ${Fe(a.bands,r,a.unit).map(e=>q`<span class="hm-key"
            ><span class="hm-swatch" style="background:${e.color}"></span>${e.text}</span
          >`)}
    </div>`:t?q`<div class="hm-legend scale">
    <span class="hm-end">${r(t[0])}</span>
    <span class="hm-gradient" style="background:linear-gradient(to right, ${Vc(e.color,0)}, ${e.color})"></span>
    <span class="hm-end">${Na(r(t[1]),a.unit)}</span>
  </div>`:W}(e,g,s,o)}
  </div>`}const pd=new Map;const md={layout:"chart",group:"distribution",height:220,styles:r`
    ${Ca}
    ${wr}
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
  `,thumbnail:()=>Z`
    ${[0,1,2,3].map(e=>[0,1,2,3,4,5,6].map(t=>Z`<rect x=${4+8*t} y=${4+8.5*e} width="7" height="7.5" rx="1.5"
          fill="var(--primary-color, #03a9f4)" fill-opacity=${.15+.85*((3*t+5*e)%7/6)}></rect>`))}`,validate:function(e){const t=e,o=(e,o)=>{const n=t[e];if(void 0!==n&&!o.includes(n))throw new Error(`"${e}" must be one of: ${o.join(", ")}`)};o("grid",Gc),o("color_by",Xc),o("cell_shape",Jc);for(const n of["color_min","color_max"])if(void 0!==t[n]&&!td(t[n]))throw new Error(`"${n}" must be a number`);if(td(t.color_min)&&td(t.color_max)&&t.color_min>=t.color_max)throw new Error('"color_min" must be below "color_max"');if(void 0!==t.legend&&"boolean"!=typeof t.legend)throw new Error('"legend" must be true or false');_a(nd(e)),gr(e)},editor:function(e){const t=od(e.config),o=$s(`heatmap|${cs({...e.config,group_by:void 0})}`,e.hass,()=>[{name:"grid",selector:ss(e.hass,"grid",Gc)},...ds(e.hass,{...e.config,group_by:void 0}).filter(e=>!JSON.stringify(e).includes('"group_by"')),{name:"aggregate",selector:ss(e.hass,"aggregate",Kn)},{type:"grid",name:"",schema:[{name:"color_by",selector:ss(e.hass,"color_by",Xc)},{name:"cell_shape",selector:ss(e.hass,"cell_shape",Jc)}]},{type:"grid",name:"",schema:[{name:"color_min",selector:{number:{mode:"box",step:"any"}}},{name:"color_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"legend",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}}]}]);return ks(e,"chart",o,function(e){let t=pd.get(e);if(!t){const o=ed[e],n={period_last:o.last,period_unit:o.unit,source:o.source};t=[{name:"grid",path:["grid"],default:"hours"},...ls.filter(e=>"group_by"!==e.name).map(e=>e.name in n?{...e,default:n[e.name]}:e),{name:"color_by",path:["color_by"],default:"scale"},{name:"cell_shape",path:["cell_shape"],default:"rounded"},{name:"color_min",path:["color_min"]},{name:"color_max",path:["color_max"]},{name:"legend",path:["legend"],default:!0},{name:"tooltip",path:["tooltip"],default:!0}],pd.set(e,t)}return t}(t))},entityFields:()=>({schema:[{name:"series_color",selector:{text:{}}}],fields:[{name:"series_color",path:["color"]}]}),disconnect(e){za(e),Za(e),Gs(e)},render(e){const t=xa({...e,raw:nd(e.raw)}),o=ka(t,e),n=Ea(t,e);if(n)return q`<div class="frame">${o}${n}</div>`;const a=t.series.length>1;return q`<div class="frame">${o}${t.series.map(o=>hd(o,t,e,a))}</div>`}},fd=["time","readings"],gd=100,vd=e=>Number(e.toPrecision(12));const yd=6e4,bd=36e5;const _d=["percent","total"],xd=["side","overlap"],wd=["series","bands"],$d=e=>"number"==typeof e&&Number.isFinite(e);function kd(e,t,o){if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function Md(e,t){const o=xa(e,t),n={count:(a=e.raw).count??"time",showAs:a.show_as??"percent",bars:a.bars??"side",bands:"bands"===a.color_by,bins:$d(a.bins)?a.bins:void 0,width:$d(a.bin_width)?a.bin_width:void 0};var a;const r=Math.min(o.range.end,t),i=o.series.map(e=>function(e,t){const{mode:o,until:n,statistics:a}=t;if(0===e.length)return[];if(void 0!==e[0].end)return e.map(e=>null===e.v?0:"readings"===o?1:Math.max(0,Math.min(e.end,n)-e.t));if(a){if("readings"===o)return e.map(e=>null===e.v||e.carried?0:1);const t=e.slice(1).map((t,o)=>t.t-e[o].t).filter(e=>e>0).sort((e,t)=>e-t),n=t.length?t[Math.floor(t.length/2)]:36e5;return e.map(e=>null===e.v||e.carried?0:n)}const r=e.length-1;return e.map((t,a)=>{if(null===t.v)return 0;if("readings"===o){const o=a===r&&a>0&&t.t>=n&&e[a-1].v===t.v;return t.carried||o?0:1}const i=a<r?e[a+1].t:Math.max(t.t,n);return Math.max(0,Math.min(i,n)-t.t)})}(e.points,{mode:n.count,until:r,statistics:"statistics"===o.source}));let s=1/0,l=-1/0;o.series.forEach((e,t)=>e.points.forEach((e,o)=>{null!==e.v&&i[t][o]>0&&(s=Math.min(s,e.v),l=Math.max(l,e.v))}));const c=Zs(e.raw),d="side"===n.bars&&o.series.length>1,u=Math.max(5,Math.min(24,Math.round(Ra(e)/(d?40:28)))),h=s===1/0?[]:function(e,t,o={},n=12){const a=o.min??e,r=o.max??t;if(void 0!==o.bins&&void 0===o.width){let[e,t]=[a,r];t>e||([e,t]=[e-.5,e+.5]);const n=(t-e)/o.bins;return Array.from({length:o.bins+1},(a,r)=>r===o.bins?t:vd(e+r*n))}const i=r-a;let s=o.width??(i>0?Io(i,n):Io(Math.max(Math.abs(a),1),10));for(;i/s>gd;)s=Io(i,50);const l=o.min??vd(Math.floor(a/s+1e-9)*s);let c=o.max??vd(Math.ceil(r/s-1e-9)*s);c>l||(c=vd(l+s));const d=[l];for(let u=1;d[d.length-1]<c-1e-9*s;u++)d.push(Math.min(c,vd(l+u*s)));return d}(s,l,{bins:n.bins,width:n.width,min:c.min,max:c.max},u),p=o.series.map((e,t)=>{const o=function(e,t,o){const n=new Array(Math.max(0,o.length-1)).fill(0);return e.forEach((e,a)=>{if(null===e.v||!(t[a]>0))return;const r=function(e,t){const o=t.length-1;if(o<1||e<t[0]||e>t[o])return-1;if(e===t[o])return o-1;let n=0,a=o-1;for(;n<a;){const o=n+a+1>>1;t[o]<=e?n=o:a=o-1}return n}(e.v,o);r>=0&&(n[r]+=t[a])}),n}(e.points,i[t],h),a=o.reduce((e,t)=>e+t,0),r=o.map(e=>"percent"===n.showAs?a>0?e/a*100:0:"time"===n.count?e/36e5:e);return{series:e,totals:o,heights:r,whole:a}});return{frame:o,opts:n,edges:h,data:p,side:d}}function zd(e,t,o){return"time"===t?function(e){if(e<yd)return e>0?"< 1 min":"0 min";const t=Math.round(e/yd);if(t<60)return`${t} min`;if(e<864e5){const e=Math.floor(t/60),o=t%60;return o?`${e} h ${o} min`:`${e} h`}const o=Math.round(e/bd),n=Math.floor(o/24),a=o%24;return a?`${n} d ${a} h`:`${n} d`}(e):1===e?zt(o.hass,"histogram_reading"):zt(o.hass,"histogram_readings",{n:ja(e,0,o.hass)})}const Ad={layout:"chart",group:"distribution",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
    ${Qs}
    .style-histogram .bin {
      shape-rendering: crispEdges;
    }
    .style-histogram .overlap .bin {
      fill-opacity: 0.35;
      stroke-width: 1.5px;
      vector-effect: non-scaling-stroke;
    }
  `,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)">
      <rect x="6" y="28" width="7" height="8" rx="1" />
      <rect x="14" y="20" width="7" height="16" rx="1" />
      <rect x="22" y="8" width="7" height="28" rx="1" />
      <rect x="30" y="12" width="7" height="24" rx="1" />
      <rect x="38" y="22" width="7" height="14" rx="1" />
      <rect x="46" y="30" width="7" height="6" rx="1" />
    </g>
    <path d="M4 37 H60" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate(e){if(_a(e),Uo(e),gr(e),Ka(e),Is(e),kd(e,"count",fd),kd(e,"show_as",_d),kd(e,"bars",xd),kd(e,"color_by",wd),void 0!==e.bins&&!(Number.isInteger(e.bins)&&e.bins>=1&&e.bins<=gd))throw new Error('"bins" must be a whole number from 1 to 100');if(void 0!==e.bin_width&&!($d(e.bin_width)&&e.bin_width>0))throw new Error('"bin_width" must be a number above 0')},editor:function(e){const t=e.hass,o=$s(`histogram|${cs(e.config)}`,t,()=>[...ds(t,e.config),{type:"grid",name:"",schema:[{name:"count",selector:ss(t,"count",fd)},{name:"show_as",selector:ss(t,"show_as",_d)}]},{type:"grid",name:"",schema:[{name:"bins",selector:{number:{min:1,max:gd,mode:"box"}}},{name:"bin_width",selector:{number:{min:0,mode:"box",step:"any"}}}]},...qs,{type:"grid",name:"",schema:[{name:"bars",selector:ss(t,"bars",xd)},{name:"color_by",selector:ss(t,"color_by",wd)}]},...gs(t).map(e=>"grid"===e.type?{...e,schema:e.schema.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e)}:e),...ms(t)]);return ks(e,"chart",o,jd)},entityFields:()=>({schema:Sd,fields:Ed}),disconnect(e){za(e),Za(e),Gs(e)},render(e){const t=Date.now(),{frame:o,opts:n,edges:a,data:r,side:i}=Md(e,t),s=ka(o,e),l=Aa(o,e),c=s===W&&l===W?W:q`${s}${l}`,d=Qa(e.raw),u=Ea(o,e)??(a.length<2?Ea({...o,series:[]},e):void 0);if(u)return er("over"===d.header?{...d,header:"above"}:d,c,u);const h=Math.max(0,...r.flatMap(e=>e.heights)),p=Rs(e,[a[0],a[a.length-1]],[0,h],{x:{min:a[0],max:a[a.length-1]},yFloor:0}),{scales:m}=p,f=m.y(Math.max(0,p.value.domain[0])),g=r.length,v="overlap"===n.bars&&g>1,y=Z`${r.map((e,t)=>{const o=e.heights.map((o,r)=>{if(!(o>0))return W;const s=m.x(a[r]),l=m.x(a[r+1]),c=Math.min(4,.08*(l-s)),d=(l-s-2*c)/(i?g:1),u=s+c+(i?d*t:0),h=m.y(o),p=n.bands&&e.series.entity.bands.length?Ce(Te((a[r]+a[r+1])/2,e.series.entity.bands).color):e.series.color;return Z`<rect class="bin" x=${u} y=${Math.min(h,f)} width=${Math.max(.5,d)} height=${Math.abs(f-h)} fill=${p} stroke=${v?p:"none"}></rect>`});return Z`<g class="series" data-series=${e.series.index}>${o}</g>`})}`,b=function(e){if(e.length<2)return 0;const t=e[1]-e[0],o=e.every(e=>Math.abs(e-Number(e.toFixed(Bo(t))))<1e-6*t);return o?Bo(t):Math.min(4,Bo(t)+1)}(a),_=fr(e.raw),x=_?Ys(e.host):void 0;let w=W;if(void 0!==x&&x<a.length-1){const t=r[0]?.series.entity.unit??"",o=ja(a[x],b,e.hass),i=ja(a[x+1],b,e.hass),s=m.x(a[x])/ga,l=m.x(a[x+1])/ga,c=Ra(e);w=Ks({x:"right"===cr(l,c)?l:s,y:0,plotWidth:c,title:Na(`${o} – ${i}`,t),band:[s,l],rows:r.map(t=>{const o=t.whole>0?t.totals[x]/t.whole*100:0;return{color:t.series.color,name:t.series.entity.name,value:`${ja(o,o>0&&o<1?1:0,e.hass)}% · ${zd(t.totals[x],n.count,e)}`}})})}const $=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_histogram"),names:o.series.map(e=>e.entity.name).join(", ")});return er(d,c,Ga({axes:p,ctx:e,content:Z`<g class=${v?"overlap":"side"}>${y}</g>`,label:$,xLabel:t=>ja(t,Ws(p),e.hass),yLabel:t=>"percent"===n.showAs?`${ja(t,p.value.decimals,e.hass)}%`:"time"===n.count?`${ja(t,p.value.decimals,e.hass)} h`:ja(t,p.value.decimals,e.hass),overlay:q`${"over"===d.header?tr(c):W}${w}`,hover:_?Xs(e,e=>{const t=a[0]+e*(a[a.length-1]-a[0]),o=a.findIndex((e,o)=>o<a.length-1&&t>=e&&t<=a[o+1]);return o<0?void 0:o}):void 0}))}},Ed=[{name:"bar_color",path:["color"]}],Sd=[{name:"bar_color",selector:{text:{}}}],Cd=fs.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e),jd=[...ls,{name:"count",path:["count"],default:"time"},{name:"show_as",path:["show_as"],default:"percent"},{name:"bins",path:["bins"]},{name:"bin_width",path:["bin_width"]},...Bs,{name:"bars",path:["bars"],default:"side"},{name:"color_by",path:["color_by"],default:"series"},...Cd,...ps];function Nd(e){let t=0;for(const o of e)t+=o.codePointAt(0)>=11904?1/.58:1;return t}function Ld(e,t=76,o=12,n=8,a=11){const r=e.trim();let i=[r];if(Nd(r)>a){let e=Nd(r);for(let t=r.indexOf(" ");t>0;t=r.indexOf(" ",t+1)){const o=Math.max(Nd(r.slice(0,t)),Nd(r.slice(t+1)));o<e&&(e=o,i=[r.slice(0,t),r.slice(t+1)])}}const s=Math.max(...i.map(Nd));return{lines:i,size:Math.max(n,Math.min(o,Math.floor(t/(.58*Math.max(1,s)))))}}const Td=65,Fd=66,Od=50,Pd=[-90,90],Dd=e=>String(Math.round(1e3*e)/1e3+0);function Ud(e,t,o,n,a,r=11){const{lines:i,size:s}=Ld(e,t,o,n,r),l=a-1.2*(i.length-1)*s;return Z`<text class="na" text-anchor="middle" style="font-size: ${s}px">${i.map((e,t)=>Z`<tspan x=${Td} y=${Dd(l+1.2*t*s)}>${e}</tspan>`)}</text>`}const Hd={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:r`
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
  `,render(e,{show:t,hass:o}){const n=e.config.gauge,a=Je(Pd,n),r=e=>Qe(a,e),i=function(e,t,o){const n=o-t,a=[];return n>0?(e.forEach((r,i)=>{const s=0===i?t:Math.max(r.from,t),l=Math.min(i+1<e.length?e[i+1].from:1/0,o);l>s&&a.push({from:(s-t)/n,to:(l-t)/n,color:r.color})}),a):a}(e.bands,e.min,e.max),s=i.map((e,t)=>{const o=r(e.from)+(t>0?1:0),n=r(e.to)-(t<i.length-1?1:0);return n>o?Z`<path class="seg" d=${Ve(Td,Fd,Od,o,n)} stroke=${Ce(e.color)}></path>`:W}),l=e=>{const[t,o]=We(Td,Fd,36,e),[n,a]=We(Td,Fd,40,e);return Z`<line class="tickmark" x1=${t.toFixed(2)} y1=${o.toFixed(2)} x2=${n.toFixed(2)} y2=${a.toFixed(2)}></line>`},c=n?.tickLabels?function(e,t,o=5){if(!(Number.isFinite(e)&&Number.isFinite(t)&&t>e))return[];const n=ot(t-e,o),a=[];for(let r=Math.ceil(e/n)*n;r<t-.4*n;r+=n)r>e+.4*n&&a.push(Number(r.toPrecision(12)));return[e,...a,t]}(e.min,e.max):[],d=e.max-e.min,u=c.length?c.map(t=>l(r((t-e.min)/d))):Array.from({length:11},(e,t)=>l(r(t/10))),h=ot(d),p=t.target&&null!==e.targetPosition,m=p?67:60,f=Ke(n)||c.length>0,g=f?Math.max(94,Math.ceil(tt(Td,Fd,Od,a[0],a[1],6).y1)+14):94,v=c.map(t=>{const n=r((t-e.min)/d),[a,i]=We(Td,Fd,m,n),{anchor:s,dy:l}=at(n);return Z`<text class="tick-label" x=${a.toFixed(2)} y=${i.toFixed(2)} dy="${l}em" text-anchor=${s}>${ja(t,nt(t,h),o)}</text>`});let y=W;if(t.target&&null!==e.targetPosition&&e.available){const t=r(e.targetPosition),[o,n]=We(Td,Fd,57,t),[a,i]=We(Td,Fd,64,t-3),[s,l]=We(Td,Fd,64,t+3);y=Z`<polygon class="target-mark" points="${o.toFixed(2)},${n.toFixed(2)} ${a.toFixed(2)},${i.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const b=!t.value,_=e.available?rt(e,n):{kind:"value"};let x={x:0,y:0,w:130,h:b?82:104};if(f){const t=function(e,t,o,n,a,r){const i=[tt(Td,Fd,Od,t[0],t[1],a.hasTarget?15:7),tt(Td,Fd,43,t[0],t[1],0),{x0:57,y0:58,x1:73,y1:74},a.compact?{x0:2,y0:40,x1:128,y1:82}:{x0:2,y0:a.valueY-16,x1:128,y1:a.valueY+6}],s=e.max-e.min;for(const c of o){const o=Qe(t,(c-e.min)/s),[l,d]=We(Td,Fd,a.labelR,o),{anchor:u,dy:h}=at(o),p=9*ja(c,nt(c,n),r).length*.6,m="start"===u?l:"end"===u?l-p:l-p/2,f=d+9*h;i.push({x0:m,y0:f-9,x1:m+p,y1:f+2})}const l=et(...i);return{x0:Math.floor(l.x0-2),y0:Math.floor(l.y0-2),x1:Math.ceil(l.x1+2),y1:Math.ceil(l.y1+2)}}(e,a,c,h,{hasTarget:p,labelR:m,valueY:g,compact:b},o);x={x:t.x0,y:t.y0,w:t.x1-t.x0,h:t.y1-t.y0}}const w=f?`width: min(${Dd(x.w)}px, 100%); aspect-ratio: ${Dd(x.w)} / ${Dd(x.h)}`:void 0;return q`<div
      class="needle-gauge ${f?"fitted":""}"
      style=${f?`--needle-start: ${Dd(a[0])}deg; width: ${Dd(Math.max(130,x.w))}px`:W}
    >
      <svg
        class=${b?"compact":""}
        viewBox="${Dd(x.x)} ${Dd(x.y)} ${Dd(x.w)} ${Dd(x.h)}"
        style=${w??W}
        aria-hidden="true"
      >
        ${s} ${u} ${v} ${y}
        ${e.available?Z`<g class="needle" style="transform: rotate(${Dd(r(e.position))}deg)"><path d=${$=Td,k=Fd,M=42,z=3,`M${Re($)} ${Re(k-M)} L${Re($+z)} ${Re(k)} L${Re($-z)} ${Re(k)} Z`}></path></g>`:W}
        <circle class="hub" cx=${Td} cy=${Fd} r="6"></circle>
        <circle class="hub-dot" cx=${Td} cy=${Fd} r="2.5"></circle>
        ${e.available?t.value?"value"===_.kind?Z`<text class="value" x=${Td} y=${g} text-anchor="middle">${e.display}</text>`:"text"===_.kind?Z`<text
                      class="center-text"
                      x=${Td}
                      y=${g}
                      text-anchor="middle"
                      style=${_.band?`fill: ${Ce(e.band.color)}`:W}
                    >${_.text}</text>`:W:W:b?function(e){return Ud(e,58,11,7,55)}(e.display):function(e,t=94){return Ud(e,126,12,8,t,18)}(e.display,g)}
      </svg>
      ${t.name&&"name"!==n?.center||t.icon?q`<div class="name">
              ${t.icon?q`<ha-state-icon
                      class="icon"
                      .hass=${o}
                      .stateObj=${e.stateObj}
                      .icon=${ni(e)}
                    ></ha-state-icon>`:W}
              ${t.name&&"name"!==n?.center?q`<span class="name-text">${e.name}</span>`:W}
            </div>`:W}
    </div>`;var $,k,M,z}};function Id(e){return e.map(e=>e.available&&e.value>0?e.value:0)}function Bd(e,t=100){const o=e.reduce((e,t)=>e+Math.max(0,t),0);if(o<=0)return e.map(()=>0);const n=e.map(e=>Math.max(0,e)/o*t),a=n.map(Math.floor);let r=t-a.reduce((e,t)=>e+t,0);const i=n.map((e,t)=>({i:t,rest:e-a[t]})).sort((e,t)=>t.rest-e.rest||e.i-t.i);for(const{i:s}of i){if(r<=0)break;a[s]+=1,r-=1}return a}function qd(e,t){return t>0?e/t*(180/Math.PI):0}function Zd(e){const t=Math.max(0,e.end-e.start);return`--a:${(e.start-90).toFixed(3)}deg;--len:${t.toFixed(3)}`}function Rd(e,t,o,n,a="primary"){return"bands"===n?Ce(e.band.color):"shades"===n?function(e,t,o){return o<=1||t<=0?e:`color-mix(in srgb, ${e} ${Math.round(100-Math.min(t,o-1)/(o-1)*65)}%, var(--card-background-color, #fff))`}(Ce(a),t,o):Ce(function(e){const t=e.config.color;return"string"==typeof t&&""!==t.trim()?t:void 0}(e)??ya[t%ya.length])}function Wd(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:""}function Vd(e,t,o,n=e.map(e=>e.available?e.value:0)){const a=e.map((e,t)=>({e:e,v:n[t]})).filter(({e:e})=>e.available);if(!a.length)return;const r=a.reduce((e,{v:t})=>e+t,0),i="total"===t?r:r/a.length,s=Math.max(...a.map(({e:e})=>e.decimals));return{value:i,text:ja(i,s,o),unit:Wd(e)}}function Yd(e){return Ae(e.config)?0:W}function Gd(e,t){const{show:o}=t.config;return!e.length||!o.name&&!o.value&&e.every(e=>void 0===e.share)?W:q`<div class="parts-legend">
    ${e.map(e=>q`<div
          class="entity part-row ${Ae(e.entity.config)?"interactive":""} ${e.entity.available?"":"unavailable"}"
          data-index=${e.index}
          tabindex=${Yd(e.entity)}
          aria-label=${void 0===e.share?e.entity.label:`${e.entity.label}, ${e.share}`}
        >
          <span class="swatch ${e.entity.available?"":"empty"}" style="background:${e.color}"></span>
          ${o.name?q`<span class="part-name">${e.entity.name}</span>`:W}
          ${o.value?q`<span class="part-value value">${e.entity.display}</span>`:W}
          ${void 0===e.share?W:q`<span class="part-share">${e.share}</span>`}
        </div>`)}
  </div>`}function Xd(e,t){return Na(ja(e,0,t),"%")}function Jd(e,t){return zt(e.hass,"parts_aria",{style:zt(e.hass,t),names:e.items.map(e=>e.name).join(", ")})}function Kd(e,t,o){return q`<div class="centre" aria-hidden="true">
    <div class="centre-value">${e}${t?q`<span class="centre-unit">${t}</span>`:W}</div>
    ${o?q`<div class="centre-caption">${o}</div>`:W}
  </div>`}function Qd(e,t,o){const n=e[t];if(void 0!==n&&!o.includes(n))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function eu(e,t,o,n){const a=e[t];if(void 0!==a&&("number"!=typeof a||!Number.isFinite(a)||a<o||a>n))throw new Error(`"${t}" must be a number from ${o} to ${n}`)}function tu(e,t){const o=e[t];if(void 0!==o&&"boolean"!=typeof o)throw new Error(`"${t}" must be true or false`)}function ou(e,t){const o=e[t];if(void 0!==o&&"string"!=typeof o)throw new Error(`"${t}" must be text`)}const nu=r`
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
`,au=["series","bands"];function ru(e,t,o,n){const{show:a}=o.config,r=function(e,t,o){const n=t-e;if(!(n>0))return{count:0,per:1};const a=void 0!==o&&o>0?o:n<=20?1:n/10,r=Math.ceil(n/a-1e-9);return r>100?{count:100,per:n/100}:{count:r,per:a}}(e.min,e.max,n.perIcon),i=e.available?function(e,t,o,n){const a=Math.min(o.count,Math.max(0,(e-t)/o.per)),r=n?a:Math.floor(a+1e-9);return Array.from({length:o.count},(e,t)=>Math.min(1,Math.max(0,r-t)))}(e.value,e.min,r,n.partial):r.count?Array(r.count).fill(0):[],s=Rd(e,t,o.items.length,n.colorBy),l=e.config.icon??n.unitIcon??(e.stateObj?void 0:"mdi:checkbox-blank-circle"),c=r.count>20?20:28,d=e.available?q`<span class="picto-now">${e.valueText}</span
        ><span class="picto-of"
          >/ ${Na(ja(e.max,Number.isInteger(e.max)?0:e.decimals,o.hass),e.unit)}</span
        >`:e.display;return q`<div
    class="entity picto-row ${Ae(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    tabindex=${Yd(e)}
    aria-label=${e.label}
  >
    ${a.name?q`<span class="name picto-name">${e.name}</span>`:W}
    <div class="picto-icons" style="--mdc-icon-size:${c}px" role="img" aria-label=${e.label}>
      ${function(e,t){if(e<=0)return[];if(!(t>0))return[[0,e]];const o=[];for(let n=0;n<e;n+=t)o.push([n,Math.min(e,n+t)]);return o}(i.length,n.groupSize).map(([t,n])=>q`<span class="picto-group">${i.slice(t,n).map((n,a)=>((t,n)=>q`<span class="unit" style="--i:${n};--fill:${(100*t).toFixed(1)}%">
      <ha-state-icon class="unit-empty" .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon>
      <span class="unit-full" style="color:${s}"
        ><ha-state-icon .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon
      ></span>
    </span>`)(n,t+a))}</span>`)}
    </div>
    ${a.value?q`<span class="value picto-value">${d}</span>`:W}
  </div>`}const iu=[{name:"unit_icon",path:["unit_icon"]},{name:"per_icon",path:["per_icon"]},{name:"group_size",path:["group_size"],default:5},{name:"color_by",path:["color_by"],default:"series"},{name:"partial",path:["partial"],default:!0}];const su={layout:"chart",group:"totals",height:180,styles:r`
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
  `,thumbnail:()=>Z`
    ${[0,1,2,3,4].map(e=>Z`<circle cx=${10+11*e} cy="14" r="4" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />
        <path d="M${3+11*e} 30 a7 7 0 0 1 14 0 z" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`)}`,validate(e){ou(e,"unit_icon");const t=e.per_icon;if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<=0))throw new Error('"per_icon" must be a number more than 0');if(eu(e,"group_size",0,50),void 0!==e.group_size&&!Number.isInteger(e.group_size))throw new Error('"group_size" must be a whole number');Qd(e,"color_by",au),tu(e,"partial")},editor:function(e){const t=$s("pictograph",e.hass,()=>[{name:"unit_icon",selector:{icon:{}}},{type:"grid",name:"",schema:[{name:"per_icon",selector:{number:{min:0,step:"any",mode:"box"}}},{name:"group_size",selector:{number:{min:0,max:50,mode:"box"}}},{name:"color_by",selector:ss(e.hass,"color_by",au)}]},{name:"partial",selector:{boolean:{}}}]);return ks(e,"chart",t,iu)},render:function(e){const t={perIcon:(o=e.raw).per_icon,unitIcon:o.unit_icon||void 0,groupSize:o.group_size??5,partial:!1!==o.partial,colorBy:o.color_by??"series"};var o;return q`<div class="pictograph" role="group" aria-label=${Jd(e,"editor_style_pictograph")}>
    ${e.items.map((o,n)=>ru(o,n,e,t))}
  </div>`}},lu=["donut","pie"],cu=["total","none"],du=["series","bands","shades"],uu=48;function hu(e,t){const o=function(e){const t=e.reduce((e,t)=>e+Math.max(0,t),0);return e.map(e=>t>0?Math.max(0,e)/t:0)}(e),n=o.filter(e=>e>0).length,a="donut"===t.shape?41.5:24;let r=0;return"donut"===t.shape&&(n>1&&(r+=qd(t.gap,a)),t.rounded&&(r+=qd(13,a))),function(e,t=0,o=360){const n=o-t;let a=t;return e.map(e=>{const t=a;return a+=e*n,{start:t,end:a}})}(o).map((e,t)=>o[t]>0?function(e,t){const o=e.end-e.start,n=Math.min(Math.max(0,t),o)/2;return{start:e.start+n,end:e.end-n}}(e,r):void 0)}const pu=[{name:"shape",path:["shape"],default:"donut"},{name:"color_by",path:["color_by"],default:"series"},{name:"center",path:["center"],default:"total"},{name:"center_label",path:["center_label"],default:""},{name:"gap",path:["gap"],default:2},{name:"shade_color",path:["shade_color"],default:""},{name:"rounded",path:["rounded"],default:!1},{name:"gradient",path:["gradient"],default:!1},{name:"show_percent",path:["show_percent"],default:!0}];const mu={layout:"chart",group:"totals",height:200,styles:r`
    ${nu}
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
  `,thumbnail:()=>Z`
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="6"
      pathLength="100" stroke-dasharray="44 56" transform="rotate(-90 32 20)" />
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--warning-color, #f59e0b)" stroke-width="6"
      pathLength="100" stroke-dasharray="28 72" stroke-dashoffset="-46" transform="rotate(-90 32 20)" />
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--success-color, #43a047)" stroke-width="6"
      pathLength="100" stroke-dasharray="22 78" stroke-dashoffset="-76" transform="rotate(-90 32 20)" />`,validate(e){Qd(e,"shape",lu),Qd(e,"center",cu),Qd(e,"color_by",du),eu(e,"gap",0,10),tu(e,"rounded"),tu(e,"gradient"),tu(e,"show_percent"),ou(e,"shade_color"),ou(e,"center_label")},editor:function(e){const t=$s("pie",e.hass,()=>[{type:"grid",name:"",schema:[{name:"shape",selector:ss(e.hass,"shape",lu)},{name:"color_by",selector:ss(e.hass,"color_by",du)},{name:"center",selector:ss(e.hass,"center",cu)},{name:"center_label",selector:{text:{}}},{name:"gap",selector:{number:{min:0,max:10,step:.5,mode:"slider"}}},{name:"shade_color",selector:{text:{}}}]},{name:"rounded",selector:{boolean:{}}},{name:"gradient",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return ks(e,"chart",t,pu)},render:function(e){const t={shape:(o=e.raw).shape??"donut",center:o.center??"total",colorBy:o.color_by??"series",shadeColor:o.shade_color||"primary",gap:o.gap??2,rounded:!0===o.rounded,gradient:!0===o.gradient,percent:!1!==o.show_percent,centerLabel:o.center_label??""};var o;const n=e.items,a=Id(n),r=n.map((e,o)=>Rd(e,o,n.length,t.colorBy,t.shadeColor)),i=hu(a,t),s="donut"===t.shape,l=s?41.5:24,c=s?13:uu,d=s?35/uu:0,u=i.filter(Boolean).length,h=t.gradient?Z`<defs>${n.map((e,t)=>i[t]?function(e,t,o){return Z`<radialGradient id=${e} gradientUnits="userSpaceOnUse" cx="50" cy="50" r=${uu}>
    <stop offset=${o} style="stop-color:color-mix(in srgb, ${t} 65%, #fff)"></stop>
    <stop offset="1" style="stop-color:${t}"></stop>
  </radialGradient>`}(`cd-pie-${t}`,r[t],d):W)}</defs>`:W,p=n.map((e,o)=>{const n=i[o];if(!n)return W;const a=t.gradient?`url(#cd-pie-${o})`:r[o];return Z`<g
      class="entity slice ${Ae(e.config)?"interactive":""}"
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
        style="${Zd(n)};stroke:${a}"
      ></circle>
    </g>`}),m=!s&&t.gap>0&&u>1?i.map(e=>e?Z`<line class="separator" x1="50" y1="50" x2="50" y2=${1}
                stroke-width=${t.gap} style="--a:${e.start.toFixed(3)}deg"></line>`:W):W,f=0===u?Z`<circle class="track" cx="50" cy="50" r=${l} stroke-width=${c} fill="none"></circle>`:W,g=Bd(a),v=n.map((o,n)=>({index:n,entity:o,color:r[n],share:t.percent&&a[n]>0?Xd(g[n],e.hass):void 0})),y=Vd(n,"total",e.hass,a),b=s&&"total"===t.center&&y?Kd(y.text,"",t.centerLabel||Wd(n)):W;return q`<div class="parts">
    <div class="dial">
      <svg viewBox="0 0 100 100" role="img" aria-label=${Jd(e,"editor_style_pie")}>
        ${h}${f}${p}${m}
      </svg>
      ${b}
    </div>
    ${Gd(v,e)}
  </div>`}};let fu=0;const gu=new WeakMap;const vu=60,yu=60,bu=e=>String(Math.round(1e3*e)/1e3+0);function _u(e){return Math.min(22,Math.floor(124/Math.max(1,e.length)))}function xu(e){const t=function(e,t){const o=e/2;return[-o+t[0]*e,-o+t[1]*e]}(e,[0,1]),o=Ve(vu,yu,46,t[0],t[1]),n=e<360;return{layout:"tiles",group:"gauges",height:n?135:155,minColumnWidth:128,styles:r`
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
    `,render(e,{show:a,hass:r}){const i=function(e){let t=gu.get(e);return t||(t="cd-g-"+ ++fu,gu.set(e,t)),t}(e.config),s=e.config.gauge,l=Je(t,s),c=Ke(s),d=c?Ve(vu,yu,46,l[0],l[1]):o;let u=0,h=n?100:120;if(c){const e=et(tt(vu,yu,46,l[0],l[1],6.5),{x0:26,y0:26,x1:94,y1:94});u=Math.max(0,Math.floor(e.y0)),h=Math.min(120,Math.ceil(e.y1))-u}const p=h<120,m=e.available&&a.value?rt(e,s):{kind:"none"},f=e.span[1]-e.span[0]<=0,g=`stroke-dasharray: ${bu(100*(e.span[1]-e.span[0]))} 100; stroke-dashoffset: ${bu(100*-e.span[0])}`,v=(y=e.band.color,Object.prototype.hasOwnProperty.call(Se,y)?Se[y].fallback:y);var y;const b=function(e){return!e.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",e))}(v)?`url(#${i}) ${v}`:`url(#${i})`,_=a.icon?6:0,x=_u(e.valueText);let w=W;if(a.target&&null!==e.targetPosition&&e.available){const t=Qe(l,e.targetPosition),[o,n]=We(vu,yu,39.5,t),[a,r]=We(vu,yu,52.5,t);w=Z`<line class="tick" x1=${o.toFixed(2)} y1=${n.toFixed(2)} x2=${a.toFixed(2)} y2=${r.toFixed(2)}></line>`}return q`<div class="radial ${p?"cropped":""}">
        <div class="dial ${c?"fitted":""}" style=${c?`aspect-ratio: 124 / ${h}; --y0: ${u}`:W}>
          <svg viewBox="0 ${u} 120 ${h}" aria-hidden="true">
            <defs>
              <linearGradient id=${i} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${vu} cy=${yu} r="34"></circle>
            <path class="track" d=${d}></path>
            ${e.available?Z`<path
                  class="value-arc ${f?"empty":""}"
                  d=${d}
                  pathLength="100"
                  style=${g}
                  stroke=${b}
                ></path>`:W}
            ${w}
            ${e.available?Z`${"text"===m.kind?Z`<text
                        class="center-text"
                        x=${vu}
                        y=${66+_}
                        text-anchor="middle"
                        style="font-size: ${Math.min(18,_u(m.text))}px${m.band?`; fill: ${Ce(e.band.color)}`:""}"
                      >${m.text}</text>`:"value"===m.kind?Z`<text
                        class="value"
                        x=${vu}
                        y=${64+_}
                        text-anchor="middle"
                        style=${x<22?`font-size: ${x}px`:W}
                      >${e.valueText}</text>
                      <text class="unit" x=${vu} y=${80+_} text-anchor="middle">${e.unit}</text>`:W}`:function(e){const{lines:t,size:o}=Ld(e),n=64-1.2*(t.length-1)*o/2;return Z`<text class="na" text-anchor="middle" style="font-size: ${o}px">${t.map((e,t)=>Z`<tspan x=${vu} y=${bu(n+1.2*t*o)}>${e}</tspan>`)}</text>`}(e.display)}
          </svg>
          ${a.icon&&e.available?q`<ha-state-icon
                  class="icon ${a.value&&"none"!==m.kind?"":"centre"}"
                  .hass=${r}
                  .stateObj=${e.stateObj}
                  .icon=${ni(e)}
                ></ha-state-icon>`:W}
        </div>
        ${a.name&&"name"!==s?.center?q`<span class="name">${e.name}</span>`:W}
      </div>`}}}const wu=xu(360),$u=xu(270),ku=["average","total","none"],Mu=["series","bands"];function zu(e){return{start:e.start_angle??0,end:e.end_angle??270,center:e.center??"average",colorBy:e.color_by??"series",rounded:!1!==e.rounded_ends}}const Au=[{name:"start_angle",path:["start_angle"],default:0},{name:"end_angle",path:["end_angle"],default:270},{name:"center",path:["center"],default:"average"},{name:"color_by",path:["color_by"],default:"series"},{name:"rounded_ends",path:["rounded_ends"],default:!0}];const Eu={layout:"chart",group:"totals",height:200,styles:r`
    ${nu}
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
  `,thumbnail:()=>Z`
    <circle cx="32" cy="20" r="16" fill="none" stroke="var(--divider-color, rgba(127, 127, 127, 0.3))"
      stroke-width="4" pathLength="100" stroke-dasharray="75 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="16" fill="none" stroke="var(--success-color, #43a047)" stroke-width="4"
      pathLength="100" stroke-dasharray="62 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="10" fill="none" stroke="var(--divider-color, rgba(127, 127, 127, 0.3))"
      stroke-width="4" pathLength="100" stroke-dasharray="75 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="10" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="4"
      pathLength="100" stroke-dasharray="48 100" transform="rotate(-90 32 20)" stroke-linecap="round" />`,validate(e){eu(e,"start_angle",-360,360),eu(e,"end_angle",-360,360);const{start:t,end:o}=zu(e);if(o<=t||o-t>360)throw new Error('"end_angle" must be after "start_angle", and at most 360 degrees after it');Qd(e,"center",ku),Qd(e,"color_by",Mu),tu(e,"rounded_ends")},editor:function(e){const t=$s("rings",e.hass,()=>[{type:"grid",name:"",schema:[{name:"start_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"end_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"center",selector:ss(e.hass,"center",ku)},{name:"color_by",selector:ss(e.hass,"color_by",Mu)}]},{name:"rounded_ends",selector:{boolean:{}}}]);return ks(e,"chart",t,Au,{start_angle:"editor_rings_start_angle"})},render:function(e){const t=zu(e.raw),o=e.items,{radii:n,width:a}=function(e){if(e<=0)return{radii:[],width:0};const t=Math.min(9,28/(1.33*e)),o=1.33*t;return{radii:Array.from({length:e},(e,n)=>48-t/2-n*o),width:t}}(o.length),r=o.map((e,n)=>Rd(e,n,o.length,t.colorBy)),i=t.rounded?"round":"butt",s=Zd({start:t.start,end:t.end}),l=o.map((e,o)=>{const l=e.available?Z`<circle class="seg" cx="50" cy="50" r=${n[o]} pathLength="360" stroke-width=${a}
          stroke-linecap=${i} style="${Zd(function(e,t,o){return{start:t,end:t+Math.min(1,Math.max(0,e))*(o-t)}}(e.position,t.start,t.end))};stroke:${r[o]}"></circle>`:W;return Z`<g
      class="entity ring ${Ae(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
      data-index=${o}
      aria-label=${e.label}
    >
      <circle class="ring-track" cx="50" cy="50" r=${n[o]} pathLength="360" stroke-width=${a}
        stroke-linecap=${i} style=${s}></circle>
      ${l}
    </g>`}),c="none"===t.center?void 0:Vd(o,t.center,e.hass),d=c?Kd(c.text,c.unit,zt(e.hass,`parts_${t.center}`)):W,u=o.map((e,t)=>({index:t,entity:e,color:r[t]})),h=function(e,t){const o=e=>-Math.cos(e*Math.PI/180),n=360*Math.ceil((e-180)/360)+180<=t?1:Math.max(o(e),o(t));return Math.min(100,Math.max(66,50+48*n+6))}(t.start,t.end);return q`<div class="parts">
    <div class="dial" style="aspect-ratio:100 / ${h.toFixed(2)}">
      <svg viewBox="0 0 100 ${h.toFixed(2)}" role="img" aria-label=${Jd(e,"editor_style_rings")}>
        ${l}
      </svg>
      <div class="centre-box" style="height:${(100/h*100).toFixed(2)}%">${d}</div>
    </div>
    ${Gd(u,e)}
  </div>`}},Su={layout:"chart",group:"distribution",height:240,styles:Al,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)">
      <circle cx="10" cy="32" r="2.5" /><circle cx="17" cy="27" r="2.5" /><circle cx="22" cy="29" r="2.5" />
      <circle cx="28" cy="21" r="2.5" /><circle cx="34" cy="23" r="2.5" /><circle cx="40" cy="15" r="2.5" />
      <circle cx="47" cy="17" r="2.5" /><circle cx="53" cy="9" r="2.5" />
    </g>
    <g fill="var(--warning-color, #f59e0b)">
      <circle cx="14" cy="18" r="2.5" /><circle cx="31" cy="33" r="2.5" /><circle cx="50" cy="28" r="2.5" />
    </g>`,validate:e=>wl(e,"scatter"),editor:Nl("scatter"),entityFields:()=>Fl(),disconnect:El,render:e=>Ml(e,"scatter")};function Cu(e){const[t,o]=e;return Array.from({length:10},(e,n)=>{const a=(n+.5)/10;return a>t&&a<=o})}const ju={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:r`
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
  `,render(e,{show:t,hass:o}){const n=e.available?Cu(e.span):Cu([0,0]),a=t.target&&e.available&&null!==e.targetPosition?Math.min(9,Math.max(0,Math.floor(10*e.targetPosition))):-1,r=!e.available;return q`<div class="seg">
      ${t.icon?q`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${ni(e)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${t.name||r?q`<div class="name">
                ${t.name?q`<span class="label">${e.name}</span>`:W}
                ${r?q`<span class="status">${e.display}</span>`:W}
              </div>`:W}
        <div class="cells">
          ${n.map((e,t)=>q`<i class="cell ${e?"on":""} ${t===a?"mark":""}" style="--i:${t}"></i>`)}
        </div>
      </div>
      ${t.value?q`<span class="value">${e.available?e.display:""}</span>`:W}
    </div>`}},Nu={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:r`
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
  `,render:(e,{show:t,hass:o})=>q`
      ${t.icon?q`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${ni(e)}
            ></ha-state-icon>`:W}
      ${t.value||!e.available?q`<span class="value">${e.display}</span>`:W}
      <div class="tube">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?q`<div class="target"></div>`:W}
      </div>
      ${t.name?q`<span class="name">${e.name}</span>`:W}
    `},Lu={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:r`
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
  `,render(e,{show:t,hass:o}){const n=t.value||!e.available;return q`
      ${t.icon?q`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${ni(e)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${t.name||n?q`<div class="top">
                ${t.name?q`<span class="name">${e.name}</span>`:W}
                ${n?q`<span class="value">${e.display}</span>`:W}
              </div>`:W}
        <div class="track">
          <div class="fill"></div>
          ${t.target&&null!==e.targetPosition&&e.available?q`<div class="target"></div>`:W}
        </div>
      </div>
    `}},Tu=["one","each"],Fu=["series","bands"];function Ou(e){if(1===e.length){const t=e[0];return t.available?[Bd([t.position,1-t.position])[0]]:[0]}return Bd(Id(e),100)}function Pu(e,t){const{col:o,row:n}=function(e){return{col:e%10,row:9-Math.floor(e/10)}}(e);return Z`<rect
    class="cell ${t?"filled":""}"
    x=${10*o+.8}
    y=${10*n+.8}
    width="8.4"
    height="8.4"
    rx="1.6"
    style="--k:${e}${t?`;fill:${t}`:""}"
  ></rect>`}function Du(e,t,o,n){let a=0;const r=e.map((e,n)=>{const r=a;if(a+=e,!e)return W;const i=o[n];return Z`<g class="entity ${Ae(i.config)?"interactive":""}" data-index=${n}>
      ${Array.from({length:e},(e,o)=>Pu(r+o,t[n]))}
    </g>`}),i=Array.from({length:100-a},(e,t)=>Pu(a+t,void 0));return q`<svg class="waffle" viewBox="0 0 100 100" role="img" aria-label=${n}>
    ${r}
    <g class="empty">${i}</g>
  </svg>`}const Uu=[{name:"waffles",path:["waffles"],default:"one"},{name:"color_by",path:["color_by"],default:"series"},{name:"headline",path:["headline"],default:!0},{name:"show_percent",path:["show_percent"],default:!0}];const Hu={layout:"chart",group:"totals",height:210,styles:r`
    ${nu}
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
  `,thumbnail:()=>Z`
    ${Array.from({length:25},(e,t)=>{const o=t%5,n=4-Math.floor(t/5);return Z`<rect x=${20+5*o} y=${8+5*n} width="4" height="4" rx="0.8" fill=${t<9?"var(--warning-color, #f59e0b)":t<15?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`})}`,validate(e){Qd(e,"waffles",Tu),Qd(e,"color_by",Fu),tu(e,"headline"),tu(e,"show_percent")},editor:function(e){const t=$s("waffle",e.hass,()=>[{type:"grid",name:"",schema:[{name:"waffles",selector:ss(e.hass,"waffles",Tu)},{name:"color_by",selector:ss(e.hass,"color_by",Fu)}]},{name:"headline",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return ks(e,"chart",t,Uu)},render(e){const t={waffles:(o=e.raw).waffles??"one",colorBy:o.color_by??"series",headline:!1!==o.headline,percent:!1!==o.show_percent};var o;return"each"===t.waffles?function(e,t){const{show:o}=e.config;return q`<div class="waffles">
    ${e.items.map((n,a)=>{const r=Rd(n,a,e.items.length,t.colorBy),[i]=Ou([n]),s=Xd(i,e.hass),l=o.value&&t.percent&&n.available&&n.display!==s;return q`<div
        class="entity waffle-item ${Ae(n.config)?"interactive":""} ${n.available?"":"unavailable"}"
        data-index=${a}
        tabindex=${Yd(n)}
      >
        ${Du([i],[r],[n],n.label)}
        ${o.name?q`<span class="waffle-name">${n.name}</span>`:W}
        <span class="value waffle-value">${n.available&&t.percent?s:n.display}</span>
        ${l?q`<span class="waffle-raw">${n.display}</span>`:W}
      </div>`})}
  </div>`}(e,t):function(e,t){const o=e.items,n=o.map((e,n)=>Rd(e,n,o.length,t.colorBy)),a=Ou(o),r=e=>a[e]>0||1===o.length&&o[e].available,i=o.map((i,s)=>({index:s,entity:i,color:n[s],share:!t.percent||!r(s)||t.headline&&1===o.length?void 0:Xd(a[s],e.hass)})),s=o[0],l=t.headline&&s&&r(0)?q`<div class="waffle-headline">
          <span class="waffle-big">${Xd(a[0],e.hass)}</span>
          <span class="waffle-caption">${s.name}</span>
        </div>`:W;return q`<div class="parts">
    <div class="waffle-box">${Du(a,n,o,Jd(e,"editor_style_waffle"))}</div>
    <div class="waffle-side">${l}${Gd(i,e)}</div>
  </div>`}(e,t)}};function Iu(e,t){return Ce(ya[e%ya.length])}function Bu(e,t){const o=Math.round(Math.min(100,Math.max(0,t)));return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const qu=["funnel","pyramid"],Zu=["first","previous","none"],Ru=["series","bands"];function Wu(e,t){const o=e=>Math.round(100*e)/100,n=o((100-e)/2),a=o((100-t)/2);return`${n},0 ${o(100-n)},0 ${o(100-a)},10 ${a},10`}const Vu=[{name:"funnel_shape",path:["shape"],default:"funnel"},{name:"funnel_percent_of",path:["percent_of"],default:"first"},{name:"funnel_color_by",path:["color_by"],default:"series"}];function Yu(e,t,o){const n=e[t];if(void 0!==n&&!o.includes(n))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}const Gu={layout:"chart",group:"totals",height:240,styles:r`
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
  `,thumbnail:()=>Z`
    <polygon points="6,4 58,4 48,15 16,15" fill="var(--warning-color, #f59e0b)" />
    <polygon points="16,17 48,17 41,27 23,27" fill="var(--success-color, #1fae7a)" />
    <polygon points="23,29 41,29 38,37 26,37" fill="var(--primary-color, #03a9f4)" />`,validate(e){Yu(e,"shape",qu),Yu(e,"percent_of",Zu),Yu(e,"color_by",Ru)},editor:function(e){const t=$s("funnel",e.hass,()=>[{name:"funnel_shape",selector:ss(e.hass,"funnel_shape",qu)},{type:"grid",name:"",schema:[{name:"funnel_percent_of",selector:ss(e.hass,"funnel_percent_of",Zu)},{name:"funnel_color_by",selector:ss(e.hass,"funnel_color_by",Ru)}]}]);return ks(e,"chart",t,Vu)},render(e){const{items:t,raw:o,hass:n,config:a}=e,r=o.shape??"funnel",i="bands"===o.color_by,s=t.map(e=>e.available?e.value:null),l=function(e){const t=Math.max(0,...e.map(e=>null!==e&&e>0?e:0));return e.map(e=>t>0&&null!==e&&e>0?e/t*100:0)}(s),c=function(e,t){return e.map((o,n)=>{if(o<=0)return{top:0,bottom:0};const a=e[n+1],r=n===e.length-1;return"pyramid"===t?{top:r?0:a>0?a:.8*o,bottom:o}:{top:o,bottom:!r&&a>0?a:.8*o}})}(l,r),d=function(e,t){return"none"===t?e.map(()=>null):e.map((o,n)=>{if(null===o)return null;if("previous"===t&&0===n)return 100;const a="first"===t?e[0]:e[n-1];return null!=a&&a>0?o/a*100:null})}(s,o.percent_of??"first"),{show:u}=a,h=u.name||u.value,p=t.map((e,t)=>{const o=function(e,t,o){if(o)return e.band.color;const n=e.config.color;return"string"==typeof n&&n?n:ya[t%ya.length]}(e,t,i),a=d[t],r=null===a?"":`${ja(a,0,n)}%`,s=l[t]<22?"theme":Le(o),p=Ae(e.config),{top:m,bottom:f}=c[t],g=l[t]>0;return q`<div
        class="entity stage ${p?"interactive":""} ${e.available?"":"unavailable"}"
        data-index=${t}
        role="img"
        aria-label=${r?`${e.label}, ${r}`:e.label}
        tabindex=${p?0:W}
      >
        <div class="shape">
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            ${g?Z`<polygon points=${Wu(m,f)} fill=${Ce(o)}></polygon>`:Z`<polygon class="empty" points=${Wu(30,30)}></polygon>`}
          </svg>
          ${r?q`<div class="percent ${s}" aria-hidden="true">${r}</div>`:W}
        </div>
        ${h?q`<div class="label" aria-hidden="true">
                ${u.name?q`<span class="name">${e.name}</span>`:W}
                ${u.value?q`<span class="value">${e.display}</span>`:W}
              </div>`:W}
      </div>`});"pyramid"===r&&p.reverse();const m=zt(n,"funnel_aria",{style:zt(n,`editor_funnel_shape_${r}`).replace(/ \(.*\)$/,""),names:t.map(e=>e.name).join(", ")});return q`<div class="funnel ${h?"":"no-labels"}" role="group" aria-label=${m}>${p}</div>`}},Xu=["floor","area","device","label"];function Ju(e){if(null==e||""===e)return[];const t=Array.isArray(e)?e:[e];if(t.some(e=>!Xu.includes(e)))throw new Error(`"group_by" must be one or more of: ${Xu.join(", ")}`);return Xu.filter(e=>t.includes(e))}function Ku(e){Ju(e.group_by),(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.group:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "group" must be text, such as "Kitchen" or "Ground floor / Kitchen"`)})}function Qu(e){return"string"!=typeof e?[]:e.split("/").map(e=>e.trim()).filter(Boolean)}function eh(e){const t=e.replace(/_/g," ").trim();return t.charAt(0).toUpperCase()+t.slice(1)}function th(e,t,o,n){const a=Qu(e.config.group);return a.length?a:t.map(t=>function(e,t,o){const n=o,a=n.entities?.[e],r=a?.device_id?n.devices?.[a.device_id]:void 0,i=a?.area_id??r?.area_id??void 0;switch(t){case"area":return i?n.areas?.[i]?.name??eh(i):void 0;case"floor":{const e=i?n.areas?.[i]?.floor_id:void 0;return e?n.floors?.[e]?.name??eh(e):void 0}case"device":return r?r.name_by_user??r.name??void 0:void 0;case"label":{const e=[...a?.labels??[],...r?.labels??[]][0];return e?n.labels?.[e]?.name??eh(e):void 0}}}(e.entityId,t,o)??n)}function oh(e,t,o){const n={name:o,path:[],value:0,depth:0,children:[]};e.forEach((e,o)=>{let a=n;for(const n of t[o]??[]){let e=a.children.find(e=>void 0===e.entity&&e.name===n);e||(e={name:n,path:[...a.path,n],value:0,depth:a.depth+1,children:[]},a.children.push(e)),a=e}a.children.push({name:e.name,path:a.path,value:0,depth:a.depth+1,children:[],entity:e,index:o})});const a=e=>{e.value=e.entity?function(e){return e.available&&null!==e.value&&e.value>0?e.value:0}(e.entity):e.children.reduce((e,t)=>e+a(t),0);const t=new Map(e.children.map((e,t)=>[e,t]));return e.children.sort((e,o)=>o.value-e.value||t.get(e)-t.get(o)),e.value};return a(n),n}function nh(e,t){let o=e;for(const n of t)if(o=o.children.find(e=>void 0===e.entity&&e.name===n),!o)return;return o}function ah(e){return e.children.length?1+Math.max(...e.children.map(ah)):0}function rh(e){const t=[],o=(e,n,a,r)=>{if(t.push({node:e,level:n,x0:a,x1:r}),e.value<=0)return;let i=a;for(const t of e.children){if(t.value<=0)continue;const s=(r-a)*t.value/e.value;o(t,n+1,i,i+s),i+=s}};return o(e,0,0,1),t}const ih=2*Math.PI;function sh(e,t){return[lh(e*Math.sin(t)),lh(-e*Math.cos(t))]}function lh(e){return Math.round(100*e)/100||0}function ch(e,t,o,n){if(t<=0||n<=o)return"";const a=Math.max(0,e);if(n-o>=ih-1e-6){const e=(e,t)=>{const[o,n]=sh(e,0),[a,r]=sh(e,Math.PI);return`M${o} ${n}A${e} ${e} 0 1 ${t} ${a} ${r}A${e} ${e} 0 1 ${t} ${o} ${n}Z`};return a>0?`${e(t,1)}${e(a,0)}`:e(t,1)}const r=n-o>Math.PI?1:0,[i,s]=sh(t,o),[l,c]=sh(t,n),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===a)return`${d}L0 0Z`;const[u,h]=sh(a,n),[p,m]=sh(a,o);return`${d}L${u} ${h}A${a} ${a} 0 ${r} 0 ${p} ${m}Z`}function dh(e,t){return t>0?e*ih/t:0}function uh(e){return e.map(([e,t])=>`${e},${t}`).join(" ")}function hh(e){const t=Math.sin(e);return Math.abs(t)<.2?"middle":t>0?"start":"end"}function ph(e,t,o,n,a=void 0){const r=e.config.entities??[],i=r.length,s=$s(`${t}-${i}`,e.hass,()=>r.map((e,t)=>({name:`e${t}`,selector:n}))),l=e=>{const t=r[e];return"object"==typeof t?t[o]:void 0},c={};for(let d=0;d<i;d++)c[`e${d}`]=l(d)??a;return q`<div class="entity-options" data-section=${t}>
    <div style="margin: 16px 0 4px; font-weight: 500">${zt(e.hass,`editor_${t}`)}</div>
    ${0===i?q`<div style="color: var(--secondary-text-color)">
            ${zt(e.hass,"editor_entity_options_none")}
          </div>`:q`<ha-form
            .hass=${e.hass}
            .data=${c}
            .schema=${s}
            .computeLabel=${t=>{const o=jt(r[Number(t.name.slice(1))]),n=e.hass?.states[o]?.attributes?.friendly_name;return"string"==typeof n&&n?n:o}}
            @value-changed=${t=>{t.stopPropagation();const n=t.detail?.value??{};let r=e.config;for(let e=0;e<i;e++){const t=n[`e${e}`],i=t===a||""===t?void 0:t;i!==l(e)&&(r=Nt(r,e,o,i))}r!==e.config&&e.commit(r)}}
          ></ha-form>`}
  </div>`}const mh=[{name:"group_by",path:["group_by"],default:[]}];function fh(e){return{name:"group_by",selector:{select:{multiple:!0,mode:"list",options:Xu.map(t=>({value:t,label:zt(e,`editor_group_by_${t}`)}))}}}}function gh(e){const t=e.config.group_by;if(void 0===t||Array.isArray(t))return e;let o;try{o=Ju(t)}catch{return e}return{...e,config:{...e.config,group_by:o}}}function vh(e){return ph(e,"entity_groups","group",{text:{}})}const yh={group_by:"editor_hierarchy_group_by"},bh=["limits","shared"],_h={aqi:"AQI",carbon_dioxide:"CO₂",carbon_monoxide:"CO",pm1:"PM1",pm10:"PM10",pm25:"PM2.5",volatile_organic_compounds:"VOC",volatile_organic_compounds_parts:"VOC"};function xh(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}function wh(e,t,o){const n=Ju(t.group_by),a=n.length>0||e.some(e=>Qu(e.config.group).length),r=t.scale??"limits",i=e.filter(e=>e.available&&null!==e.value).map(e=>e.value),s=i.length?Math.max(...i):0,l=e=>{const t=e.config.axis;return"string"==typeof t&&t.trim()?t.trim():void 0};if(!a)return{axes:e.map(e=>({name:l(e)??e.name,entity:e})),series:[{name:"",color:Iu(0),points:e.map((e,t)=>({index:t,axis:t,r:xh(e,r,s)}))}]};const c=zt(o,"radar_other"),d=[],u=[];return e.forEach((e,t)=>{const a=e.stateObj?.attributes?.device_class,i=l(e)??("string"==typeof a?function(e){if(_h[e])return _h[e];const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}(a):e.name);let h=d.findIndex(e=>e.name===i);-1===h&&(h=d.push({name:i})-1);const p=th(e,n,o,c).join(" / ")||c;let m=u.find(e=>e.name===p);m||(m={name:p,color:Iu(u.length),points:[]},u.push(m)),m.points.push({index:t,axis:h,r:xh(e,r,s)})}),{axes:d,series:u}}const $h=[{name:"radar_scale",path:["scale"],default:"limits"},{name:"radar_fill",path:["fill"],default:!0},...mh];const kh={layout:"chart",group:"compare",height:280,styles:r`
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
  `,thumbnail:()=>Z`
    <polygon points="32,4 52,15 49,34 15,34 12,15" fill="none" stroke="var(--divider-color, #ccc)" />
    <polygon points="32,10 46,17 40,30 20,32 18,18" fill="var(--primary-color, #03a9f4)" fill-opacity="0.25"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2" stroke-linejoin="round" />`,validate(e){if(Ku(e),void 0!==e.scale&&!bh.includes(e.scale))throw new Error(`"scale" must be one of: ${bh.join(", ")}`);if(void 0!==e.fill&&"boolean"!=typeof e.fill)throw new Error('"fill" must be true or false');(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.axis:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "axis" must be text`)})},editor:function(e){const t=$s("radar",e.hass,()=>[{name:"radar_scale",selector:ss(e.hass,"radar_scale",bh)},{name:"radar_fill",selector:{boolean:{}}},fh(e.hass)]);return q`${ks(gh(e),"chart",t,$h,yh)} ${vh(e)}
  ${ph(e,"radar_axis","axis",{text:{}})}`},render(e){const t=wh(e.items,e.raw,e.hass),o=t.axes.length,n=1===t.series.length&&""===t.series[0].name,a=!1!==e.raw.fill,r=zt(e.hass,"radar_aria",{names:(n?e.items.map(e=>e.name):t.series.map(e=>e.name)).join(", ")});return q`<svg
        class="radar-plot"
        viewBox="${-170} ${-120} ${340} ${240}"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label=${r}
      >
        ${function(e){const t=Array.from({length:4},(e,t)=>84*(t+1)/4);return Z`${t.map(t=>e>=3?Z`<polygon class="grid" points=${uh(Array.from({length:e},(o,n)=>sh(t,dh(n,e))))}></polygon>`:Z`<circle class="grid" r=${t}></circle>`)}
    ${Array.from({length:e},(t,o)=>{const[n,a]=sh(84,dh(o,e));return Z`<line class="grid spoke" x1="0" y1="0" x2=${n} y2=${a}></line>`})}`}(o)} ${function(e,t,o){const n=e.axes.length,a=o&&t.config.show.value;return Z`${e.axes.map((e,o)=>{const r=dh(o,n),[i,s]=sh(96,r),l=hh(r),c=Math.cos(r)<-.2,d=a&&e.entity?2:1,u=c?10:Math.abs(Math.cos(r))<=.2?4-6*(d-1):12*-(d-1);return Z`<text class="axis-label" x=${i} y=${s+u} text-anchor=${l}>
      ${t.config.show.name||!a?Z`<tspan>${e.name}</tspan>`:W}
      ${a&&e.entity?Z`<tspan class="axis-value ${e.entity.available?"":"muted"}" x=${i} dy="13">${e.entity.display}</tspan>`:W}
    </text>`})}`}(t,e,n)}
        <g class="radar-grow">
          <circle r=${84} fill="none" stroke="none"></circle>
          ${t.series.map(t=>function(e,t,o,n){const a=e.points.filter(e=>null!==e.r).sort((e,t)=>e.axis-t.axis).map(e=>({p:e,xy:sh(84*e.r,dh(e.axis,t))}));return Z`<g class="series">
    ${a.length>1?Z`<polygon class="area ${n?"filled":""}" points=${uh(a.map(e=>e.xy))}
            stroke=${e.color} fill=${n?e.color:"none"}></polygon>`:W}
    ${a.map(({p:t,xy:n})=>Z`<g class="entity marker" data-index=${t.index} tabindex="0" aria-label=${o[t.index].label}
        role="img">
        <circle class="hit" cx=${n[0]} cy=${n[1]} r="9"></circle>
        <circle class="dot" cx=${n[0]} cy=${n[1]} r="3.5" stroke=${e.color}></circle>
      </g>`)}
  </g>`}(t,o,e.items,a))}
        </g>
      </svg>
      ${n?W:q`<div class="radar-legend">
              ${t.series.map(e=>q`<span class="radar-legend-item"
                    ><span class="swatch" style="background:${e.color}"></span>${e.name}</span
                  >`)}
            </div>`}`}},Mh=["shared","limits"],zh=["series","shades","bands"];const Ah=[{name:"polar_scale",path:["scale"],default:"shared"},{name:"polar_color_by",path:["color_by"],default:"series"},{name:"polar_color",path:["color"],default:"primary"}],Eh=Object.keys(Se);const Sh={layout:"chart",group:"compare",height:260,styles:r`
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
  `,thumbnail:()=>Z`
    <g transform="translate(32 21)">
      <path d=${ch(0,18,-.6,.6)} fill="var(--primary-color, #03a9f4)" />
      <path d=${ch(0,12,.65,1.85)} fill="var(--warning-color, #ffa600)" />
      <path d=${ch(0,15,1.9,3.1)} fill="var(--success-color, #43a047)" />
      <path d=${ch(0,9,3.15,4.35)} fill="var(--error-color, #db4437)" />
      <path d=${ch(0,13,4.4,5.6)} fill="var(--purple-color, #8b6cff)" />
    </g>`,validate(e){if(void 0!==e.scale&&!Mh.includes(e.scale))throw new Error(`"scale" must be one of: ${Mh.join(", ")}`);if(void 0!==e.color_by&&!zh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${zh.join(", ")}`);if(void 0!==e.color&&("string"!=typeof e.color||!e.color))throw new Error('"color" must be a colour name, such as "primary", or any CSS colour')},editor:function(e){const t=$s("polar_area",e.hass,()=>[{name:"polar_scale",selector:ss(e.hass,"polar_scale",Mh)},{type:"grid",name:"",schema:[{name:"polar_color_by",selector:ss(e.hass,"polar_color_by",zh)},{name:"polar_color",selector:{select:{mode:"dropdown",custom_value:!0,options:Eh.map(t=>({value:t,label:zt(e.hass,`editor_color_${t}`)}))}}}]}]);return ks(e,"chart",t,Ah)},render(e){const t=e.raw.scale??"shared",o=e.raw.color_by??"series",n=e.raw.color??"primary",a=e.items.length,r=e.items.filter(e=>e.available&&null!==e.value).map(e=>e.value),i=r.length?Math.max(0,...r):0,s=e.items.map((e,r)=>{const s=function(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}(e,t,i);if(null===s||s<=0)return W;const[l,c]=function(e,t){if(t<=1)return[0,2*Math.PI];const o=Math.PI/t,n=dh(e,t);return[n-o+.02,n+o-.02]}(r,a),d=6+86*s;return Z`<path class="entity slice" data-index=${r} tabindex="0" role="img" aria-label=${e.label}
        d=${ch(6,d,l,c)} fill=${function(e,t,o,n,a){return"bands"===n?Ce(e.band.color):"shades"===n?Bu(Ce(a),30+70*o):Iu(t)}(e,r,s,o,n)}></path>`}),l=zt(e.hass,"polar_area_aria",{names:e.items.map(e=>e.name).join(", ")});return q`<svg
      class="polar-plot"
      viewBox="${-170} ${-120} ${340} ${240}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label=${l}
    >
      ${Z`${Array.from({length:3},(e,t)=>Z`<circle class="ring" r=${92*(t+1)/3}></circle>`)}`}
      <g class="polar-grow">
        <circle r=${92} fill="none" stroke="none"></circle>
        ${s}
      </g>
      ${function(e,t,o){const n=e.items.find(e=>e.available);if("shared"!==t||!n||o<=0)return Z``;const a=e.items.length>1?Math.PI/e.items.length:0;return Z`${Array.from({length:3},(t,r)=>{const i=92*(r+1)/3,[s,l]=sh(i,a),c=Na(ja(o*(r+1)/3,n.decimals,e.hass),n.unit);return Z`<text class="ring-label" x=${s+3} y=${l-2}>${c}</text>`})}`}(e,t,i)} ${function(e){const t=e.items.length,{show:o}=e.config;return o.name||o.value?Z`${e.items.map((e,n)=>{const a=dh(n,t),[r,i]=sh(104,a),s=Math.cos(a)<-.2,l=o.name&&o.value?2:1,c=s?10:Math.abs(Math.cos(a))<=.2?4-6*(l-1):13*-(l-1);return Z`<text class="slice-label ${e.available?"":"muted"}" x=${r} y=${i+c} text-anchor=${hh(a)}>
      ${o.name?Z`<tspan>${e.name}</tspan>`:W}
      ${o.value?Z`<tspan class="slice-value" x=${r} dy=${o.name?13:0}>${e.display}</tspan>`:W}
    </text>`})}`:Z``}(e)}
    </svg>`}},Ch=new WeakMap;function jh(e){return!1!==e.drill_down}function Nh(e){if(void 0!==e.drill_down&&"boolean"!=typeof e.drill_down)throw new Error('"drill_down" must be true or false')}function Lh(e,t){Ch.set(e.host,t),e.requestUpdate()}function Th(e,t){return jh(e.raw)?function(e,t){let o=e;const n=[];for(const a of t){const e=nh(o,[a]);if(!e||e.value<=0)break;o=e,n.push(a)}return{node:o,path:n}}(t,(o=e.host,Ch.get(o)??[])):{node:t,path:[]};var o}function Fh(e,t,o){if(!jh(e.raw)||t.entity||t.value<=0)return;const n=()=>Lh(e,t.path);return{label:zt(e.hass,"drill_into",{label:o}),click:e=>{e.stopPropagation(),n()},keydown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n())}}}function Oh(e,t,o,n){if(!o.path.length)return W;const a=o.path.slice(0,-1),r=a.length&&nh(t,a)?.name||zt(e.hass,"drill_top");return q`<div class="drill-bar">
    <button
      type="button"
      class="drill-back"
      aria-label=${zt(e.hass,"drill_back",{name:r})}
      @click=${()=>Lh(e,a)}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z" fill="currentColor"></path>
      </svg>
      <span>${r}</span>
    </button>
    <div class="drill-current">
      <span class="drill-name">${o.node.name}</span>
      ${n?q`<span class="drill-total">${n}</span>`:W}
    </div>
  </div>`}const Ph=r`
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
`;function Dh(e,t){const o=e.reduce((e,t)=>e+t,0);if(o<=0||t<=0)return 1/0;const n=Math.max(...e),a=Math.min(...e),r=t*t;return Math.max(r*n/(o*o),o*o/(r*a))}function Uh(e,t){const o=Math.min(t,e.w/2,e.h/2);return{x:e.x+o,y:e.y+o,w:e.w-2*o,h:e.h-2*o}}const Hh=["group","bands"],Ih=240;function Bh(e,t,o,n){const a=[],r=[],i=(e,t,o,s)=>{const l=e.children.filter(e=>e.value>0),c=function(e,t){const o=e.map(()=>({x:t.x,y:t.y,w:0,h:0})),n=e.map((e,t)=>({v:Number.isFinite(e)&&e>0?e:0,i:t})).filter(e=>e.v>0).sort((e,t)=>t.v-e.v||e.i-t.i),a=n.reduce((e,t)=>e+t.v,0);if(a<=0||t.w<=0||t.h<=0)return o;const r=t.w*t.h/a;let{x:i,y:s,w:l,h:c}=t,d=[];const u=()=>{const e=d.reduce((e,t)=>e+t.area,0);if(l>=c){const t=e/c;let n=s;for(const e of d){const a=e.area/t;o[e.i]={x:i,y:n,w:t,h:a},n+=a}i+=t,l-=t}else{const t=e/l;let n=i;for(const e of d){const a=e.area/t;o[e.i]={x:n,y:s,w:a,h:t},n+=a}s+=t,c-=t}d=[]};for(const h of n){const e=h.v*r,t=Math.min(l,c),o=d.map(e=>e.area);0===d.length||Dh([...o,e],t)<=Dh(o,t)||u(),d.push({area:e,i:h.i})}return d.length&&u(),o}(l.map(e=>e.value),t);l.forEach((e,t)=>{const l=c[t],d=s&&void 0===n?t:o;if(e.entity)return void r.push({node:e,rect:Uh(l,1.5),series:d,rank:t});const u=Uh(l,1.5),h=u.h>=44&&u.w>=56;a.push({node:e,rect:u,series:d,head:h});const p=Uh(h?{...u,y:u.y+22-3,h:u.h-22+3}:u,3);i(e,p,d,!1)})};return i(e,{x:0,y:0,w:t,h:o},n??0,!0),{groups:a,leaves:r}}function qh(e,t,o){const n=t.items.find(e=>e.available)?.decimals??1;return Na(ja(e,n,t.hass),o)}const Zh=new WeakMap,Rh=new WeakMap;const Wh=(e,t)=>e/t*100+"%";function Vh(e,t){return`left:${Wh(e.x,t)};top:${Wh(e.y,Ih)};width:${Wh(e.w,t)};height:${Wh(e.h,Ih)}`}function Yh(e,t,o,n,a){const r=e.node.entity,i=function(e,t){const o=e.node.entity;if("bands"===t)return o.band.color;const n=o.config.color;return"string"==typeof n&&n?n:ya[e.series%ya.length]}(e,n),s="group"===n&&e.node.path.length?Bu(Ce(i),Math.max(70,100-12*(e.rank??0))):Ce(i),l=Le(i),{w:c,h:d}=e.rect,{show:u}=t.config,h=c>=120&&d>=70&&null!==r.value&&r.value>=.25*a,p=d>=20&&c>=44,m=u.value&&d>=36;return q`<div
    class="entity tile text-${l} ${h?"big":""}"
    data-index=${e.node.index}
    tabindex="0"
    role="img"
    aria-label=${r.label}
    title=${r.label}
    style="${Vh(e.rect,o)};background:${s}"
  >
    ${p&&u.name?q`<span class="tile-name">${r.name}</span>`:W}
    ${p&&m?q`<span class="tile-value">${r.display}</span>`:W}
  </div>`}const Gh=[{name:"treemap_color_by",path:["color_by"],default:"group"},...mh,{name:"drill_down",path:["drill_down"],default:!0}];const Xh={layout:"chart",group:"totals",height:280,styles:r`
    ${Ph}
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
      height: ${Ih}px;
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
      height: ${Ih}px;
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
  `,thumbnail:()=>Z`
    <rect x="4" y="4" width="28" height="32" rx="3" fill="var(--primary-color, #03a9f4)" />
    <rect x="34" y="4" width="26" height="17" rx="3" fill="var(--warning-color, #f59e0b)" />
    <rect x="34" y="23" width="14" height="13" rx="3" fill="var(--success-color, #43a047)" />
    <rect x="50" y="23" width="10" height="13" rx="3" fill="var(--success-color, #43a047)" opacity="0.7" />`,validate(e){if(Ku(e),Nh(e),void 0!==e.color_by&&!Hh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Hh.join(", ")}`)},editor:function(e){const t=$s("treemap",e.hass,()=>[{name:"treemap_color_by",selector:ss(e.hass,"treemap_color_by",Hh)},fh(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return q`${ks(gh(e),"chart",t,Gh,yh)} ${vh(e)}`},disconnect:function(e){Rh.get(e)?.disconnect(),Rh.delete(e)},render(e){const t=function(e){const t=e.host;if(!Rh.has(t)&&"function"==typeof ResizeObserver){const o=new ResizeObserver(()=>{const o=t.shadowRoot?.querySelector(".treemap"),n=o?.clientWidth??0;n>0&&Math.abs(n-(Zh.get(t)??0))>=1&&(Zh.set(t,n),e.requestUpdate())});o.observe(t),Rh.set(t,o)}return Zh.get(t)??400}(e),o=function(e){const t=Ju(e.raw.group_by),o=zt(e.hass,"treemap_other"),n=e.items.map(n=>th(n,t,e.hass,o));return oh(e.items,n,"")}(e),n=Th(e,o),a=n.node,r=e.raw.color_by??"group",i=function(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}(e.items),s=n.path.length?o.children.filter(e=>e.value>0).findIndex(e=>e.name===n.path[0]):void 0,{groups:l,leaves:c}=Bh(a,t,Ih,s),d=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available),u=void 0!==i&&e.config.show.value&&a.value>0?qh(a.value,e,i):"",h=u&&!n.path.length?zt(e.hass,"treemap_total",{value:u}):"",p=zt(e.hass,"treemap_aria",{names:(a.children.length?a.children:[]).map(e=>e.name).join(", ")}),m=c.length?q`<div class="treemap" role="img" aria-label=${p}>
          ${l.map(o=>function(e,t,o,n,a){const r=Ce(ya[e.series%ya.length]),i=void 0===a?"":qh(e.node.value,t,a),s=Fh(t,e.node,i?`${e.node.name}, ${i}`:e.node.name);return q`<div
    class="group ${s?"drillable":""}"
    style="${Vh(e.rect,o)};background:${"bands"===n?"var(--cd-track)":Bu(r,14)}"
    role=${s?"button":W}
    tabindex=${s?0:W}
    aria-label=${s?.label??W}
    data-path=${e.node.path.join("/")}
    @click=${s?.click}
    @keydown=${s?.keydown}
  >
    ${e.head?q`<div class="group-head">
            <span class="group-name">${e.node.name}</span>
            ${t.config.show.value&&i&&e.rect.w>=110?q`<span class="group-total">${i}</span>`:W}
          </div>`:W}
  </div>`}(o,e,t,r,i))}
          ${c.map(o=>Yh(o,e,t,r,a.value))}
        </div>`:q`<div class="treemap-message">${zt(e.hass,"treemap_empty")}</div>`;return q`${Oh(e,o,n,u)}
    ${h?q`<div class="treemap-head"><span class="treemap-total">${h}</span></div>`:W} ${m}
    ${d.length?q`<div class="treemap-missing">
            <span>${zt(e.hass,"treemap_no_reading")}</span>
            ${d.map(({e:e,index:t})=>q`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
                  >${e.name} (${e.display})</span
                >`)}
          </div>`:W}`}},Jh=["full","half"],Kh=["group","bands"],Qh=240;function ep(e){return Math.max(45,100-20*(e-1))}function tp(e){const t=Ju(e.raw.group_by),o=zt(e.hass,"hierarchy_other"),n=e.items.map(n=>th(n,t,e.hass,o));return oh(e.items,n,zt(e.hass,"hierarchy_total"))}function op(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}function np(e,t){const o=new Map,n=new Map;let a=0;for(const{node:r,level:i}of e){if(0===i)continue;const e=r.entity?r.entity.config.color:void 0;let s;s=1===i?"string"==typeof e&&e?e:ya[a++%ya.length]:n.get(r)??"grey";for(const t of r.children)n.set(t,s);if("bands"===t){o.set(r,r.entity?{fill:Ce(r.entity.band.color),text:Le(r.entity.band.color)}:{fill:"var(--cd-track)",text:"theme"});continue}const l=ep(i);o.set(r,{fill:Bu(Ce(s),l),text:l>=100?Le(s):"theme"})}return o}function ap(e,t,o){const n=t.items.find(e=>e.available)?.decimals??1;return Na(ja(e,n,t.hass),o)}function rp(e,t,o){return e.entity?e.entity.label:void 0===o?e.name:`${e.name}, ${ap(e.value,t,o)}`}function ip(e){const t=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available);return t.length?q`<div class="hierarchy-missing">
    <span>${zt(e.hass,"hierarchy_no_reading")}</span>
    ${t.map(({e:e,index:t})=>q`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
          >${e.name} (${e.display})</span
        >`)}
  </div>`:W}const sp=[{name:"hierarchy_color_by",path:["color_by"],default:"group"},...mh,{name:"drill_down",path:["drill_down"],default:!0}],lp=[{name:"sunburst_shape",path:["shape"],default:"full"},...sp];function cp(e,t){if(Ku(e),Nh(e),void 0!==e.color_by&&!Kh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Kh.join(", ")}`);if(t&&void 0!==e.shape&&!Jh.includes(e.shape))throw new Error(`"shape" must be one of: ${Jh.join(", ")}`)}function dp(e,t,o=t){if(t.value<=0)return q`<div class="hierarchy-message">${zt(e.hass,"hierarchy_empty")}</div>`;const n=e.raw.shape??"full",a=e.raw.color_by??"group",r=op(e.items),i=rh(t),s=np(rh(o),a),l=function(e,t){const o=72/Math.max(1,t);return{start:"half"===e?-Math.PI/2:0,sweep:"half"===e?Math.PI:2*Math.PI,radii:e=>[40+(e-1)*o,40+e*o],viewBox:"half"===e?"-116 -116 232 124":"-116 -116 232 232"}}(n,ah(t)),c=i.filter(e=>e.level>0).map(t=>{const[o,n]=l.radii(t.level),a=ch(o,n,l.start+t.x0*l.sweep,l.start+t.x1*l.sweep),i=rp(t.node,e,r),c=s.get(t.node).fill;return t.node.entity?Z`<path class="entity arc leaf" data-index=${t.node.index} tabindex="0" role="img"
            aria-label=${i} d=${a} fill=${c}><title>${i}</title></path>`:function(e,t,o,n,a){const r=Fh(e,t,o);return Z`<path
    class="arc group ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":W}
    tabindex=${r?0:W}
    aria-label=${r?.label??o}
    d=${n}
    fill=${a}
    @click=${r?.click}
    @keydown=${r?.keydown}
  ><title>${o}</title></path>`}(e,t.node,i,a,c)}),d=void 0!==r&&e.config.show.value?ap(t.value,e,r):"",u=t.children.filter(e=>e.value>0).map(e=>e.name);return q`<div class="sunburst-wrap ${n}">
    <svg
      class="sunburst"
      viewBox=${l.viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label=${zt(e.hass,"sunburst_aria",{names:u.join(", ")})}
    >
      <g class="sunburst-grow">${c}</g>
    </svg>
    <div class="sunburst-centre">${d?q`<span class="centre-value">${d}</span>`:W}</div>
  </div>`}function up(e,t,o=t){const n=e.raw.color_by??"group",a=op(e.items),r=np(rh(o),n),i=t.children.filter(e=>e.value>0);return q`<div class="hierarchy-legend">
    ${i.map(t=>{const o=q`<span class="swatch" style="background:${r.get(t)?.fill}"></span>`,n=e.config.show.value&&void 0!==a?q`<span class="legend-value">${ap(t.value,e,a)}</span>`:W;return t.entity?q`<span class="entity legend-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}
            >${o}${t.name} ${n}</span
          >`:function(e,t,o,n,a){const r=Fh(e,t,rp(t,e,a));return q`<span
    class="legend-item ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":W}
    tabindex=${r?0:W}
    aria-label=${r?.label??W}
    @click=${r?.click}
    @keydown=${r?.keydown}
    >${o}${t.name} ${n}</span
  >`}(e,t,o,n,a)})}
  </div>`}function hp(e,t,o=t){if(t.value<=0)return q`<div class="hierarchy-message">${zt(e.hass,"hierarchy_empty")}</div>`;const n=e.raw.color_by??"group",a=op(e.items),r=rh(t),i=np(rh(o),n),s=ah(t)+1,{show:l}=e.config,c=t.children.filter(e=>e.value>0).map(e=>e.name);return q`<div
    class="icicle"
    role="img"
    aria-label=${zt(e.hass,"icicle_aria",{names:c.join(", ")})}
  >
    ${r.map(t=>{const o=(t.x1-t.x0)*Qh,n=`left:${t.level/s*100}%;width:${100/s}%;top:${100*t.x0}%;height:${100*(t.x1-t.x0)}%`,r=rp(t.node,e,a),c=0===t.level?void 0:i.get(t.node),d=t.node.entity?t.node.entity.display:void 0!==a?ap(t.node.value,e,a):"",u=q`<div class="cell-fill" style=${c?`background:${c.fill}`:""}>
        ${o>=18&&(l.name||0===t.level)?q`<span class="cell-name">${t.node.name}</span>`:W}
        ${o>=34&&l.value&&d?q`<span class="cell-value">${d}</span>`:W}
      </div>`,h=`cell level-${Math.min(t.level,1)} text-${c?.text??"root"}`;return t.node.entity?q`<div
            class="entity ${h} leaf"
            data-index=${t.node.index}
            tabindex="0"
            role="img"
            aria-label=${r}
            title=${r}
            style=${n}
          >
            ${u}
          </div>`:function(e,t,o,n,a,r){const i=o.includes("text-root")?void 0:Fh(e,t,n);return q`<div
    class="${o} group ${i?"drillable":""}"
    data-path=${t.path.join("/")}
    title=${n}
    style=${a}
    role=${i?"button":W}
    tabindex=${i?0:W}
    aria-label=${i?.label??W}
    @click=${i?.click}
    @keydown=${i?.keydown}
  >
    ${r}
  </div>`}(e,t.node,h,r,n,u)})}
  </div>`}const pp=r`
  ${Ph}
  .hierarchy-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${Qh}px;
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
`,mp={layout:"chart",group:"totals",height:290,styles:r`
    ${pp}
    .sunburst-wrap {
      position: relative;
      height: ${Qh}px;
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
  `,thumbnail:()=>Z`
    <circle cx="32" cy="20" r="7" fill="none" />
    <path d="M32 9 A11 11 0 0 1 42 25 L37 22 A6 6 0 0 0 32 14 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M42 25 A11 11 0 0 1 21 23 L26 21 A6 6 0 0 0 37 22 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M21 23 A11 11 0 0 1 32 9 L32 14 A6 6 0 0 0 26 21 Z" fill="var(--success-color, #43a047)" />
    <path d="M32 3 A17 17 0 0 1 48 26 L42 25 A11 11 0 0 0 32 9 Z" fill="var(--primary-color, #03a9f4)" opacity="0.6" />
    <path d="M48 26 A17 17 0 0 1 32 37 L32 31 A11 11 0 0 0 42 25 Z" fill="var(--warning-color, #f59e0b)" opacity="0.6" />`,validate:e=>cp(e,!0),editor:function(e){const t=$s("sunburst",e.hass,()=>[{type:"grid",name:"",schema:[{name:"sunburst_shape",selector:ss(e.hass,"sunburst_shape",Jh)},{name:"hierarchy_color_by",selector:ss(e.hass,"hierarchy_color_by",Kh)}]},fh(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return q`${ks(gh(e),"chart",t,lp,yh)}
  ${vh(e)}`},render(e){const t=tp(e),o=Th(e,t);return q`${Oh(e,t,o,"")} ${dp(e,o.node,t)}
    ${o.node.value>0?up(e,o.node,t):W} ${ip(e)}`}},fp={layout:"chart",group:"totals",height:280,styles:r`
    ${pp}
    .icicle {
      position: relative;
      height: ${Qh}px;
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
  `,thumbnail:()=>Z`
    <rect x="4" y="4" width="16" height="32" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.75" />
    <rect x="22" y="4" width="17" height="19" rx="2" fill="var(--primary-color, #03a9f4)" />
    <rect x="22" y="25" width="17" height="11" rx="2" fill="var(--warning-color, #f59e0b)" />
    <rect x="41" y="4" width="19" height="11" rx="2" fill="var(--primary-color, #03a9f4)" opacity="0.7" />
    <rect x="41" y="17" width="19" height="6" rx="2" fill="var(--primary-color, #03a9f4)" opacity="0.7" />
    <rect x="41" y="25" width="19" height="11" rx="2" fill="var(--warning-color, #f59e0b)" opacity="0.7" />`,validate:e=>cp(e,!1),editor:function(e){const t=$s("icicle",e.hass,()=>[{name:"hierarchy_color_by",selector:ss(e.hass,"hierarchy_color_by",Kh)},fh(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return q`${ks(gh(e),"chart",t,sp,yh)} ${vh(e)}`},render(e){const t=tp(e),o=Th(e,t);return q`${Oh(e,t,o,"")} ${hp(e,o.node,t)} ${ip(e)}`}};function gp(e,t,o=5){if(!Number.isFinite(e)||!Number.isFinite(t))return[];e>t&&([e,t]=[t,e]),e===t&&(e-=.5,t+=.5);const n=function(e,t=5){if(!Number.isFinite(e)||e<=0||t<1)return 1;const o=e/t,n=10**Math.floor(Math.log10(o)),a=o/n;return(a<=1?1:a<=2?2:a<=2.5?2.5:a<=5?5:10)*n}(t-e,o),a=Math.floor(e/n+1e-9)*n,r=Math.ceil(t/n-1e-9)*n,i=[];for(let s=0,l=a;l<=r+n/2&&s<100;s++,l=a+s*n)i.push(Number(l.toPrecision(12)));return i}function vp(e){let t=1/0,o=-1/0;for(const n of e)"number"==typeof n&&Number.isFinite(n)&&(n<t&&(t=n),n>o&&(o=n));return t===1/0?void 0:[t,o]}function yp(e,t){let o=null;for(const n of e){if(n.t>t)break;o=n.v}return o}const bp=["grouped","stacked","percent"],_p=["series","bands"],xp=ya;function wp(e,t,o="none"){const n=new Map,a=[];for(const l of e){let e=n.get(l.group);e||(e={key:l.group,label:l.group,segments:[],total:null},n.set(l.group,e)),a.includes(l.series)||a.push(l.series);const t=e.segments.length;e.segments.push({index:l.index,series:l.series,value:l.value,from:0,to:0,slot:t}),null!==l.value&&(e.total=(e.total??0)+l.value)}const r=[...n.values()];for(const l of r){const e=l.segments.reduce((e,t)=>e+Math.abs(t.value??0),0);let o=0,n=0;for(const a of l.segments){if(null===a.value)continue;const r="percent"===t?0===e?0:a.value/e:a.value;"grouped"===t?a.to=r:r>=0?(a.from=o,a.to=o+=r):(a.from=n,a.to=n+=r)}}const i=r.flatMap(e=>e.segments.flatMap(e=>null===e.value?[]:[e.from,e.to])),s=function([e,t]){return[Math.min(0,e),Math.max(0,t)]}(vp(i)??[0,1]);if(s[0]===s[1]&&(s[1]=1),"none"!==o){const e="ascending"===o?1:-1;r.sort((t,o)=>null===t.total!=(null===o.total)?null===t.total?1:-1:((t.total??0)-(o.total??0))*e)}return{rows:r,domain:s,series:a}}function $p(e,t){if("grouped"!==t)return 36;const o=Math.max(1,e.segments.length);return 12*o+3*(o-1)+16}function kp(e){return"string"==typeof e&&""!==e.trim()?e.trim():"number"==typeof e?String(e):void 0}function Mp(e,t){return`${ja(100*Math.abs(e),0,t)} %`}const zp=e=>`${(100*e).toFixed(3)}%`;const Ap=[{name:"mode",path:["mode"],default:"grouped"},{name:"bars_color_by",path:["color_by"],default:"series"}];const Ep=[{name:"bar_group",path:["group"]},{name:"bar_series",path:["series"]},{name:"bar_color",path:["color"]}];const Sp={layout:"chart",group:"compare",height:200,styles:r`
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
  `,thumbnail:()=>Z`
    <rect x="4" y="6" width="40" height="5" rx="2" fill="var(--primary-color, #03a9f4)" />
    <rect x="4" y="12" width="30" height="5" rx="2" fill="var(--warning-color, #f59e0b)" />
    <rect x="4" y="23" width="22" height="5" rx="2" fill="var(--primary-color, #03a9f4)" />
    <rect x="4" y="29" width="34" height="5" rx="2" fill="var(--warning-color, #f59e0b)" />
    <line x1="4" y1="3" x2="4" y2="37" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate:function(e){if(void 0!==e.mode&&!bp.includes(e.mode))throw new Error(`"mode" must be one of: ${bp.join(", ")}`);if(void 0!==e.color_by&&!_p.includes(e.color_by))throw new Error(`"color_by" must be one of: ${_p.join(", ")}`);(e.entities??[]).forEach((e,t)=>{if("object"==typeof e&&null!==e)for(const o of["group","series"]){const n=e[o];if(null!=n&&"string"!=typeof n&&"number"!=typeof n)throw new Error(`Entity ${t+1}: "${o}" must be text`)}})},editor:function(e){const t=$s("grouped_bars",e.hass,()=>[{type:"grid",name:"",schema:[{name:"mode",selector:ss(e.hass,"mode",bp)},{name:"bars_color_by",selector:ss(e.hass,"bars_color_by",_p)}]}]);return ks(e,"chart",t,Ap)},entityFields:e=>({schema:$s("grouped_bars_entity",e,()=>[{type:"grid",name:"",schema:[{name:"bar_group",selector:{text:{}}},{name:"bar_series",selector:{text:{}}}]},{name:"bar_color",selector:{text:{}}}]),fields:Ep}),render:function(e){const{hass:t}=e,o=e.raw.mode??"grouped",n="bands"===e.raw.color_by,a=wp(function(e){return function(e){const t=e.config.entities;return e.items.map((e,o)=>({e:e,index:o,at:t.indexOf(e.config)})).sort((e,t)=>(-1===e.at?1/0:e.at)-(-1===t.at?1/0:t.at)||e.index-t.index)}(e).map(({e:e,index:t})=>{const o=e.config;return{index:t,group:kp(o.group)??`\0${t}`,series:kp(o.series)??"",value:e.available?e.value:null}})}(e),o,e.config.sort),[r,i]=a.domain,s=e=>(e-r)/(i-r),l=s(0),c=t=>{const o=e.items[t.index],r=o.config.color;return n?o.band.color:"string"==typeof r&&r?r:xp[a.series.indexOf(t.series)%xp.length]},{show:d}=e.config,u=!n&&a.series.some(e=>""!==e)&&!1!==e.raw.show?.legend,h=e.items.map(e=>e.display.length),p=d.value&&"percent"!==o?Math.min(12,Math.max(4,...h)):0,m=p?Math.round(6.5*p+8):4,f=Math.max(0,...a.rows.map(t=>(t.label.startsWith("\0")?e.items[t.segments[0].index].name:t.label).length));let g=0;const v=a.rows.map(e=>{const t=g;return g+=$p(e,o),{row:e,top:t}}),y=zt(t,"grouped_bars_aria",{names:e.items.map(e=>e.name).join(", ")}),b=r<0;return q`<div
    class="bars mode-${o}"
    role="img"
    aria-label=${y}
    style="--name-w:${d.name?`min(35%, calc(${f}ch + 16px))`:"0px"};--value-w:${m}px;--neg-w:${b?m:0}px"
  >
    <div class="bar-rows" style="height:${g}px">
      ${Me(v,e=>e.row.key,({row:n,top:a})=>q`<div class="bar-row" style="transform:translateY(${a}px);height:${$p(n,o)}px">
            ${d.name?q`<div class="row-name">
                    ${n.label.startsWith("\0")?e.items[n.segments[0].index].name:n.label}
                  </div>`:W}
            <div class="row-plot">
              <div class="zero" style="left:${zp(l)}"></div>
              ${n.segments.map(n=>(n=>{const a=e.items[n.index],r=c(n),i=s(Math.min(n.from,n.to)),u=Math.abs(s(n.to)-s(n.from)),h="grouped"===o?8+15*n.slot:8,p="grouped"===o?12:20,m=n.to<n.from||"grouped"===o&&n.to<0,f="percent"===o&&a.available?n.to-n.from:0,g="percent"===o&&d.value&&Math.abs(f)>=.12;return q`<div
        class="entity bar-seg ${m?"negative":""} ${a.available?"":"unavailable"}"
        data-index=${n.index}
        tabindex="0"
        role="button"
        aria-label=${"percent"===o&&a.available?`${a.label} (${Mp(f,t)})`:a.label}
        style="left:${zp(i)};width:${zp(u)};top:${h}px;height:${p}px;background:${Ce(r)}"
      >
        ${g?q`<span class="seg-text ${Le(r)}" aria-hidden="true">${Mp(f,t)}</span>`:W}
      </div>
      ${"grouped"===o&&d.value?q`<span
              class="bar-value ${a.available?"":"unavailable"} ${m?"left":""}"
              style="${m?"right":"left"}:${zp(m?1-s(n.to):a.available?s(n.to):l)};top:${h}px;height:${p}px"
              aria-hidden="true"
              >${a.display}</span
            >`:W}`})(n))} ${(n=>{if("stacked"!==o||!d.value)return W;const a=e.items[n.segments[0].index],r=n.segments.filter(e=>null!==e.value).map(e=>e.to),i=Math.max(0,...r),l=Math.min(0,...r),c=0===i&&l<0,u=null===n.total?a.display:Na(ja(n.total,a.decimals,t),a.unit);return q`<span
      class="bar-value total ${null===n.total?"unavailable":""} ${c?"left":""}"
      style="${c?"right":"left"}:${zp(c?1-s(l):s(i))};top:${8}px;height:${20}px"
      aria-hidden="true"
      >${u}</span
    >`})(n)}
            </div>
          </div>`)}
    </div>
    ${u?q`<div class="bar-legend">
            ${a.series.filter(e=>""!==e).map(e=>{const t=function(e,t){for(const o of e.rows)for(const e of o.segments)if(e.series===t)return e;return}(a,e);return q`<span class="bar-legend-item"
                  ><span class="swatch" style="background:${Ce(t?c(t):"grey")}"></span
                  >${e}</span
                >`})}
          </div>`:W}
  </div>`}};function Cp(e,t,o,n=""){const a=Ae(e.config);return q`<div
    class="entity ${n} ${a?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    role="meter"
    aria-valuenow=${e.available?String(e.value):W}
    aria-valuemin=${e.min}
    aria-valuemax=${e.max}
    aria-label=${e.label}
    tabindex=${a?0:W}
    style=${function(e){const t=Ce(e.band.color);return`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${t}`}(e)}
  >
    ${o}
  </div>`}const jp=r`
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
`,Np=["shades","colours"];function Lp(e,t,o,n){const{show:a}=o.config,r=function(e){const t=[];return e.bands.forEach((o,n)=>{const a=e.bands[n+1],r=Number.isFinite(o.from)?ei(o.from,e.min,e.max):0,i=a?ei(a.from,e.min,e.max):1;i<=r||t.push({from:t.length?r:0,to:i,color:o.color,level:0})}),t.forEach((e,t)=>e.level=t),t}(e),i=a.target?function(e,t){if(null!==e.target)return zt(t,"compare_target",{target:Na(ja(e.target,e.decimals,t),e.unit)})}(e,o.hass):void 0,s=a.value||!e.available,l=q`
    ${a.name?q`<div class="label">
            <span class="name">${e.name}</span>${i?q`<span class="sub">${i}</span>`:W}
          </div>`:W}
    <div class="track">
      ${r.map(e=>q`<div
            class="range"
            style="left:${100*e.from}%;width:${100*(e.to-e.from)}%;background:${function(e,t,o){return"colours"===o?`color-mix(in srgb, ${Ce(e.color)} 22%, transparent)`:`color-mix(in srgb, var(--primary-text-color, #212121) ${t<=1?8:6+Math.round(e.level/(t-1)*12)}%, transparent)`}(e,r.length,n)}"
          ></div>`)}
      ${e.available?q`<div class="fill"></div>`:W}
      ${a.target&&e.available&&null!==e.targetPosition?q`<div class="target"></div>`:W}
    </div>
    ${s?q`<span class="value">${e.display}</span>`:q`<span></span>`}
  `;return Cp(e,t,l,"bullet-row")}const Tp={layout:"chart",group:"compare",height:120,styles:r`
    ${jp}
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
  `,thumbnail:()=>Z`
    <rect x="4" y="8" width="56" height="10" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.08" />
    <rect x="4" y="8" width="30" height="10" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.12" />
    <rect x="4" y="11" width="38" height="4" rx="2" fill="var(--primary-color, #03a9f4)" />
    <rect x="46" y="6" width="2" height="14" rx="1" fill="var(--primary-text-color, #212121)" />
    <rect x="4" y="24" width="56" height="10" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.08" />
    <rect x="4" y="24" width="24" height="10" rx="2" fill="var(--primary-text-color, #212121)" opacity="0.12" />
    <rect x="4" y="27" width="48" height="4" rx="2" fill="var(--warning-color, #f59e0b)" />
    <rect x="40" y="22" width="2" height="14" rx="1" fill="var(--primary-text-color, #212121)" />`,validate(e){if(void 0!==e.ranges&&!Np.includes(e.ranges))throw new Error(`"ranges" must be one of: ${Np.join(", ")}`)},editor(e){const t=$s("bullet",e.hass,()=>[{name:"ranges",selector:ss(e.hass,"ranges",Np)}]);return ks(e,"chart",t,[{name:"ranges",path:["ranges"],default:"shades"}])},render(e){const t=e.raw.ranges??"shades",o=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_bullet"),names:e.items.map(e=>e.name).join(", ")});return q`<div class="compare bullets ${e.config.show.name?"":"no-name"}" role="group" aria-label=${o}>
      ${e.items.map((o,n)=>Lp(o,n,e,t))}
    </div>`}},Fp=["vertical","horizontal"];function Op(e,t,o){const{show:n}=t.config;return q`<div class="lane">
    <div class="scale">
      ${e.available?q`<div class="stem"></div>
              ${n.target&&null!==e.targetPosition?q`<div class="target"></div>`:W}
              <div class="dot"></div>
              ${o&&n.value?q`<span class="value tip">${e.display}</span>`:W}`:o?q`<span class="value tip">${e.display}</span>`:W}
    </div>
  </div>`}function Pp(e,t,o){const{show:n}=o.config;return Cp(e,t,q`${Op(e,o,!0)} ${n.name?q`<span class="name">${e.name}</span>`:W}`,"pop")}function Dp(e,t,o){const{show:n}=o.config,a=n.value||!e.available;return Cp(e,t,q`${n.name?q`<span class="name">${e.name}</span>`:W} ${Op(e,o,!1)}
  ${a?q`<span class="value">${e.display}</span>`:q`<span></span>`}`,"pop")}const Up={layout:"chart",group:"compare",height:200,styles:r`
    ${jp}
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
  `,thumbnail:()=>Z`
    <line x1="4" y1="36" x2="60" y2="36" stroke="var(--divider-color, #ccc)" stroke-width="1" />
    <line x1="14" y1="36" x2="14" y2="14" stroke="var(--success-color, #1fae7a)" stroke-width="2.5" />
    <circle cx="14" cy="14" r="5" fill="var(--success-color, #1fae7a)" />
    <line x1="32" y1="36" x2="32" y2="22" stroke="var(--success-color, #1fae7a)" stroke-width="2.5" />
    <circle cx="32" cy="22" r="5" fill="var(--success-color, #1fae7a)" />
    <line x1="50" y1="36" x2="50" y2="8" stroke="var(--success-color, #1fae7a)" stroke-width="2.5" />
    <circle cx="50" cy="8" r="5" fill="var(--success-color, #1fae7a)" />`,validate(e){if(void 0!==e.orientation&&!Fp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${Fp.join(", ")}`)},editor(e){const t=$s("lollipop",e.hass,()=>[{name:"orientation",selector:ss(e.hass,"orientation",Fp)}]);return ks(e,"chart",t,[{name:"orientation",path:["orientation"],default:"vertical"}])},render(e){const t=e.raw.orientation??"vertical",o=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_lollipop"),names:e.items.map(e=>e.name).join(", ")}),n="vertical"===t?Pp:Dp;return q`<div
      class="compare ${t} ${e.config.show.name?"":"no-name"}"
      role="group"
      aria-label=${o}
    >
      ${e.items.map((t,o)=>n(t,o,e))}
    </div>`}},Hp=["change","current"],Ip=["vertical","horizontal"];function Bp(e){const t=e.find(e=>null!==e.v);return t?t.v:null}const qp={vertical:.14,horizontal:.24};function Zp(e,t){const{items:o,raw:n,hass:a}=e,r=n.steps??"change",i=!0===n.start_from_first,s=e=>t?.series[e]?.points??[],l=(e,t)=>{const o="change"===r?function(e){const t=e.filter(e=>null!==e.v);return 0===t.length?null:t[t.length-1].v-t[0].v}(s(t)):e.available?e.value:null;return null===o?null:function(e){return!0===e.config.invert}(e)?-o:o},c=i&&o.length?{value:Bp(s(0)),index:0}:null,d=o.map((e,t)=>({value:l(e,t),index:t})).slice(i?1:0),{bars:u}=function(e,t,o){const n=[];let a=0;if(e){const t=e.value??0;n.push({kind:"start",from:0,to:t,delta:t,index:e.index,missing:null===e.value}),a=t}for(const s of t){const e=s.value??0;n.push({kind:"step",from:a,to:a+e,delta:e,index:s.index,missing:null===s.value}),a+=e}o&&n.push({kind:"total",from:0,to:a,delta:a,missing:!1});let r=0,i=0;for(const s of n)r=Math.min(r,s.from,s.to),i=Math.max(i,s.from,s.to);return r===i&&(i=r+1),{bars:n,domain:[r,i]}}(c,d,!1!==n.total),h=o[0]?.decimals??1;return u.map(e=>{const t=void 0===e.index?void 0:o[e.index],n=t?.decimals??h;let r,i;return"start"===e.kind?(r=zt(a,"waterfall_start"),i=e.missing?zt(a,"waterfall_no_readings"):ja(e.to,n,a)):"total"===e.kind?(r=zt(a,c?"waterfall_end":"waterfall_total"),i=ja(e.to,h,a)):(r=t.name,i=e.missing?t.available?zt(a,"waterfall_no_readings"):t.display:function(e,t,o){const n=ja(Math.abs(e),t,o);return 0===Number(e.toFixed(t))?ja(0,t,o):`${e>0?"+":"−"}${n}`}(e.delta,n,a)),{...e,name:r,label:i,entity:t}})}function Rp(e,t){const o="horizontal"===e.raw.orientation,n=t.flatMap(e=>[e.from,e.to]);let a=Math.min(0,...n),r=Math.max(0,...n);a===r&&(r=a+1);const i=(r-a)*qp[o?"horizontal":"vertical"];r+=i,a<0&&(a-=i);const s=e=>(e-a)/(r-a)*100,l=t.length,c=100/l,d=o?.64:.6,u=e=>c*e+c*(1-d)/2,h=e=>u(e)+c*d,p=e.items[0]?.unit??"",m=zt(e.hass,"waterfall_aria",{bars:t.map(e=>`${e.name} ${e.missing?e.label:Na(e.label,e.entity?.unit??p)}`).join(", ")}),f=e=>void 0===e.index?"":"entity",g=t.map((e,t)=>{const n=`--a0:${s(Math.min(e.from,e.to))}%;--a1:${s(Math.max(e.from,e.to))}%;--c0:${u(t)}%;--c1:${h(t)}%;--cm:${(u(t)+h(t))/2}%;--color:${function(e){return"step"!==e.kind?Ce("primary"):Ce(e.delta<0?"red":"green")}(e)}`,a=t+1<l?`--a:${s(e.to)}%;--c0:${h(t)}%;--c1:${u(t+1)}%`:"";return q`<div
        class="bar ${e.kind} ${e.missing?"missing":""} ${e.delta<0?"fall":"rise"} ${f(e)}"
        data-index=${e.index??W}
        tabindex=${void 0===e.index?W:0}
        aria-label=${`${e.name}, ${e.label}`}
        style=${n}
      ></div>
      <span class="bar-label ${e.missing?"missing":""} ${e.kind}" style=${n}
        >${e.missing&&!o?"–":e.label}</span
      >
      ${a?q`<div class="connector" style=${a}></div>`:W}`}),v=t.map(e=>q`<div class="bar-name ${f(e)}" data-index=${e.index??W} title=${e.name}>
        <span>${e.name}</span>
      </div>`);return q`<div class="wf ${o?"horizontal":"vertical"}" style="--n:${l}">
    <div class="names">${v}</div>
    <div class="wf-plot" role="img" aria-label=${m}>
      <div class="zero" style="--a:${s(0)}%"></div>
      ${g}
    </div>
  </div>`}const Wp=[...us,{name:"steps",path:["steps"],default:"change"},{name:"orientation",path:["orientation"],default:"vertical"},{name:"start_from_first",path:["start_from_first"],default:!1},{name:"total",path:["total"],default:!0}];function Vp(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}const Yp={layout:"chart",group:"totals",height:240,styles:r`
    ${Ca}
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
  `,thumbnail:()=>Z`
    <rect x="4" y="22" width="9" height="14" rx="1.5" fill="var(--primary-color, #03a9f4)" />
    <rect x="16" y="10" width="9" height="12" rx="1.5" fill="var(--success-color, #43a047)" />
    <rect x="28" y="10" width="9" height="8" rx="1.5" fill="var(--error-color, #db4437)" />
    <rect x="40" y="18" width="9" height="6" rx="1.5" fill="var(--error-color, #db4437)" />
    <rect x="52" y="24" width="9" height="12" rx="1.5" fill="var(--primary-color, #03a9f4)" />`,validate(e){if(_a(e),void 0!==e.steps&&!Hp.includes(e.steps))throw new Error(`"steps" must be one of: ${Hp.join(", ")}`);if(void 0!==e.orientation&&!Ip.includes(e.orientation))throw new Error(`"orientation" must be one of: ${Ip.join(", ")}`);Vp(e.start_from_first,"start_from_first"),Vp(e.total,"total");for(const t of e.entities??[])"object"==typeof t&&Vp(t.invert,"invert")},editor:function(e){const t=$s("waterfall",e.hass,()=>[...hs(e.hass),{type:"grid",name:"",schema:[{name:"steps",selector:ss(e.hass,"steps",Hp)},{name:"orientation",selector:ss(e.hass,"orientation",Ip)}]},{name:"start_from_first",selector:{boolean:{}}},{name:"total",selector:{boolean:{}}}]);return q`${ks(e,"chart",t,Wp)}
  ${ph(e,"waterfall_invert","invert",{boolean:{}},!1)}`},disconnect:za,render(e){let t;if("change"===((o=e.raw).steps??"change")||!0===o.start_from_first){t=xa(e);const o=Ea(t,e);if(o)return o}var o;return Rp(e,Zp(e,t))}},Gp=["value","change"],Xp=["direction","group"],Jp=["bad","good"];const Kp={"5minute":3e5,hour:36e5,day:864e5,month:26784e5};function Qp(e,t,o){const n=function(e,t,o=1e-9){return Math.abs(t-e)<=o?"flat":t>e?"up":"down"}(e,t);return"flat"===n?"grey":"up"===n==("bad"===o)?"red":"green"}function em(e,t,o){const n=1===o.last,a=zt(e,`slope_unit_${o.unit}${n?"":"_other"}`);return zt(e,n?`slope_${t}_one`:`slope_${t}`,{n:o.last,unit:a})}function tm(e,t,o){const n=function(e,t){if(null!==e&&null!==t&&0!==e)return(t-e)/Math.abs(e)}(e,t);if(void 0===n)return"";const a=Math.round(100*n);return`${a>0?"+":a<0?"−":""}${ja(Math.abs(a),0,o)} %`}function om(e,t,o,n){const a="statistics"===e.source?Kp[Yn(e.range)]:0,r="group"===t.raw.color_by,i="good"===t.raw.increase?"good":"bad",s=new Map,l=e.series.map(e=>{const t=e.entity.available?e.entity.value:null,[l,c]=function(e,t,o,n,a=0){const r=t.find(e=>null!==e.v),i=yp(t,o.start)??(r&&r.t-o.start<=a?r.v:null);if("value"===e)return[i,n];const s=yp(t,o.middle);return[null===i||null===s?null:s-i,null===s||null===n?null:n-s]}(o,e.points,n,t,a),d=function(e){const t=e.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0}(e.entity),u=e.entity.config.color;let h;if(r){const t=d??`#${e.index}`;s.has(t)||s.set(t,ya[s.size%ya.length]),h=u??s.get(t)}else h=null!==l&&null!==c?Qp(l,c,i):"grey";return{index:e.index,entity:e.entity,from:l,to:c,color:Ce(h),group:d}});return l}const nm=[...us,{name:"measure",path:["measure"],default:"value"},{name:"color_by",path:["color_by"],default:"direction"},{name:"increase",path:["increase"],default:"bad"}],am=[{name:"group",path:["group"]}],rm={layout:"chart",group:"compare",height:230,styles:r`
    ${Ca}
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
  `,thumbnail:()=>Z`
    <line x1="14" y1="28" x2="50" y2="10" stroke="var(--error-color, #ef3b5a)" stroke-width="2.5" stroke-linecap="round" />
    <line x1="14" y1="12" x2="50" y2="22" stroke="var(--success-color, #1fae7a)" stroke-width="2.5" stroke-linecap="round" />
    <line x1="14" y1="32" x2="50" y2="30" stroke="var(--error-color, #ef3b5a)" stroke-width="2.5" stroke-linecap="round" />
    ${[[14,28],[50,10],[14,12],[50,22],[14,32],[50,30]].map(([e,t])=>Z`<circle cx=${e} cy=${t} r="3" fill="var(--primary-text-color, #212121)" />`)}`,validate(e){_a(e);const t=(t,o)=>{if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)};t("measure",Gp),t("color_by",Xp),t("increase",Jp);for(const o of e.entities??[]){const e="object"==typeof o&&o?o.group:void 0;if(void 0!==e&&"string"!=typeof e)throw new Error('"group" must be text')}},editor(e){const t=$s("slope",e.hass,()=>[...hs(e.hass),{name:"measure",selector:ss(e.hass,"measure",Gp)},{type:"grid",name:"",schema:[{name:"color_by",selector:ss(e.hass,"color_by",Xp)},{name:"increase",selector:ss(e.hass,"increase",Jp)}]}]);return ks(e,"chart",t,nm)},entityFields:e=>({schema:$s("slope-entity",e,()=>[{name:"group",selector:{text:{}}}]),fields:am}),disconnect:za,render(e){const t=Date.now(),o=Cn(e.raw.period),n="change"===e.raw.measure?"change":"value",a=xa("change"===n?{...e,raw:{...e.raw,period:{last:2*o.last,unit:o.unit}}}:e,t),r=jn(o,t).start,i={start:a.range.start,middle:r},s=e.hass,l=em(s,"change"===n?"previous":"ago",o),c="change"===n?em(s,"last",o):zt(s,"slope_now");if("ready"!==a.status)return q`${Ea(a,e)}`;const d=om(a,e,n,i),u=d.flatMap(e=>[e.from,e.to]),h=vp(u);if(!h)return q`<div class="chart-message">${zt(s,"chart_no_data")}</div>`;const{show:p}=e.config,m=new Set(d.filter(e=>e.entity.stateObj).map(e=>e.entity.unit)),f=1===m.size?[...m][0]:void 0,g=(e,t)=>{const o=ja(t,e.entity.decimals,s);return void 0===f&&e.entity.unit?`${o} ${e.entity.unit}`:o},v=d.filter(e=>null!==e.from||null!==e.to),y=Math.max(160,22*v.length),[b,_]=Eo(h,.06),x=e=>9+(_-e)/(_-b)*(y-18),w=e=>{const t=v.filter(t=>null!==e(t)),o=function(e,t,o,n){const a=e.map((e,t)=>({y:e,i:t})).sort((e,t)=>e.y-t.y||e.i-t.i),r=a.map(e=>Math.min(n,Math.max(o,e.y)));for(let s=1;s<r.length;s++)r[s]=Math.max(r[s],r[s-1]+t);if(r.length&&r[r.length-1]>n){r[r.length-1]=n;for(let e=r.length-2;e>=0;e--)r[e]=Math.min(r[e],r[e+1]-t)}if(r.length&&r[0]<o){r[0]=o;for(let e=1;e<r.length;e++)r[e]=Math.max(r[e],r[e-1]+t)}const i=new Array(e.length);return a.forEach((e,t)=>i[e.i]=r[t]),i}(t.map(t=>x(e(t))),18,9,y-9);return new Map(t.map((e,t)=>[e,o[t]]))},$=w(e=>e.from),k=w(e=>e.to),M=zt(s,"slope_no_reading"),z=zt(s,"chart_aria",{style:zt(s,"editor_style_slope"),names:d.map(e=>e.entity.name).join(", ")});return q`<div class="slope-head">
        <span class="from">${l}</span>
        ${f?q`<span class="unit">${f}</span>`:W}
        <span class="to">${c}</span>
      </div>
      <div class="slope-plot" style="height:${y}px" role="group" aria-label=${z}>
        <div class="axis from"></div>
        <div class="axis to"></div>
        ${v.map(e=>{const t=zt(s,"slope_entity_aria",{name:e.entity.name,from:null===e.from?M:g(e,e.from),to:null===e.to?M:g(e,e.to)}),o=p.value&&null!==e.from&&null!==e.to?tm(e.from,e.to,s):"",n=e=>p.name?q`<span class="name">${e}</span>`:W;return q`<div class="entity" data-index=${e.index} tabindex="0" role="img" aria-label=${t}>
        ${null!==e.from&&null!==e.to?q`<svg viewBox="0 0 100 ${y}" preserveAspectRatio="none">
                <line x1="0" y1=${x(e.from)} x2="100" y2=${x(e.to)} stroke=${e.color}></line>
              </svg>`:W}
        ${null!==e.from?q`<span class="dot from" style="top:${x(e.from)}px;background:${e.color}"></span>
                <span class="lbl from" style="top:${$.get(e)}px"
                  >${n(e.entity.name)}${p.value?q`<span class="value">${g(e,e.from)}</span>`:W}</span
                >`:W}
        ${null!==e.to?q`<span class="dot to" style="top:${x(e.to)}px;background:${e.color}"></span>
                <span class="lbl to" style="top:${k.get(e)}px"
                  >${p.value?q`<span class="value">${g(e,e.to)}</span>`:W}${n(e.entity.name)}${o?q`<span class="pct" style="color:${e.color}">${o}</span>`:W}</span
                >`:W}
      </div>`})}
      </div>
      ${"group"===e.raw.color_by?function(e){const t=new Map;for(const o of e)o.group&&!t.has(o.group)&&t.set(o.group,o.color);return t.size?q`<div class="slope-legend">
    ${[...t].map(([e,t])=>q`<span class="slope-legend-item"><span class="swatch" style="background:${t}"></span>${e}</span>`)}
  </div>`:W}(d):W}`}},im=["range","then","target"],sm=["horizontal","vertical"];function lm(e,t,o,n,a){const r=e.available?e.value:null,i=[];if("range"===t){const e=function(e){return vp(e.flatMap(e=>[e.v,e.min,e.max]))}(o),t=e?vp([e[0],e[1],r]):void 0;t&&i.push({kind:"low",value:t[0]},{kind:"high",value:t[1]}),null===r||!a&&t||i.push({kind:"now",value:r})}else{const a="then"===t?yp(o,n)??function(e){for(const t of e)if(null!==t.v)return t.v;return null}(o):e.target;null!==a&&i.push({kind:t,value:a}),null!==r&&i.push({kind:"now",value:r})}return i.sort((e,t)=>e.value-t.value)}function cm(e){if(0===e.length)return[];const t=e.some(e=>"low"===e.kind)?e.filter(e=>"now"!==e.kind):e,o=t[0],n=t[t.length-1];return o===n?[n]:[o,n]}function dm(e,t,o,n,a){return e.map((e,r)=>{const i=lm(e,t,o(r),n,a);return{index:r,entity:e,marks:i,labelled:cm(i)}})}function um(e,t){return 1===t.last?zt(e,`dumbbell_ago_${t.unit}_one`):zt(e,`dumbbell_ago_${t.unit}`,{n:t.last})}const hm={low:Ce("blue"),high:Ce("red"),then:Ce("grey"),target:"var(--primary-text-color, #212121)"};function pm(e,t){return"target"===e||"now"===e&&"range"===t}function mm(e,t,o){return"now"!==e?hm[e]:"range"===t?"var(--primary-text-color, #212121)":Ce(o.band.color)}const fm="range",gm="horizontal",vm=!0;function ym(e){return{ends:e.ends??fm,orientation:e.orientation??gm,showNow:void 0===e.show_now?vm:!0===e.show_now}}function bm(e,t,o){const n=e.entity;if(0===e.marks.length)return`${n.name}, ${n.available?zt(t.hass,"dumbbell_no_value"):n.display}`;const a=e.marks.map(e=>`${(e=>"then"===e?um(t.hass,o):zt(t.hass,`dumbbell_${e}`))(e.kind)} ${Na(ja(e.value,n.decimals,t.hass),n.unit)}`);return`${n.name}: ${a.join(", ")}`}const _m=[...us,{name:"ends",path:["ends"],default:fm},{name:"show_now",path:["show_now"],default:vm},{name:"orientation",path:["orientation"],default:gm}];const xm={layout:"chart",group:"compare",height:220,styles:r`
    ${Ca}
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
  `,thumbnail:()=>Z`
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
    <circle cx="56" cy="29" r="4" fill="var(--error-color, #ef3b5a)" />`,validate(e){if(_a(e),void 0!==e.ends&&!im.includes(e.ends))throw new Error(`"ends" must be one of: ${im.join(", ")}`);if(void 0!==e.orientation&&!sm.includes(e.orientation))throw new Error(`"orientation" must be one of: ${sm.join(", ")}`);if(void 0!==e.show_now&&"boolean"!=typeof e.show_now)throw new Error('"show_now" must be true or false')},editor:function(e){const{ends:t}=ym(e.config),o=$s(`dumbbell-${t}`,e.hass,()=>[{type:"grid",name:"",schema:[{name:"ends",selector:ss(e.hass,"ends",im)},{name:"orientation",selector:ss(e.hass,"orientation",sm)}]},..."target"===t?[]:hs(e.hass),..."range"===t?[{name:"show_now",selector:{boolean:{}}}]:[]]);return ks(e,"chart",o,_m)},disconnect:za,render(e){const{ends:t,orientation:o,showNow:n}=ym(e.raw),a=Cn(e.raw.period);let r;if("target"===t)r=dm(e.items,t,()=>[],0,n);else{const o=xa(e);if("ready"!==o.status)return Ea(o,e)??q``;r=dm(e.items,t,e=>o.series[e]?.points??[],o.range.start,n)}const i=vp(r.flatMap(e=>e.marks.map(e=>e.value))),s=i?gp(i[0],i[1],4):[],[l,c]=s.length?[s[0],s[s.length-1]]:[0,1],d=e=>c===l?.5:(e-l)/(c-l),u=function(e){const t=new Set(e.map(e=>e.unit).filter(e=>""!==e));return 1===t.size?[...t][0]:""}(e.items),h=function(e){if(e.length<2)return 0;const t=Math.abs(e[1]-e[0]);for(let o=0;o<6;o++)if(Math.abs(Math.round(t*10**o)-t*10**o)<1e-6)return o;return 6}(s),{show:p}=e.config,m=Math.max(...e.items.map(e=>e.name.length)),f=`min(${Math.min(m,16)+1}ch, 38%)`,g=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_dumbbell"),names:e.items.map(e=>e.name).join(", ")}),v=s.map(t=>q`<span class="db-tick" style="--f:${d(t)}">${ja(t,h,e.hass)}</span>`),y=r.map(o=>function(e,t,o,n,a,r){const i=e.entity,{show:s}=t.config,l=e.labelled[0],c=e.labelled[e.labelled.length-1],d=e=>pm(e.kind,o)?"color-mix(in srgb, var(--primary-text-color, #212121) 30%, transparent)":mm(e.kind,o,i);return q`<div
    class="entity db-row ${i.available?"":"unavailable"}"
    data-index=${e.index}
    tabindex="0"
    role="img"
    aria-label=${bm(e,t,r)}
  >
    ${s.name?q`<span class="db-name">${i.name}</span>`:W}
    <div class="db-plot">
      ${a.map(e=>q`<span class="db-grid" style="--f:${n(e)}"></span>`)}
      ${0===e.marks.length?q`<span class="db-status value">${i.available?"–":i.display}</span>`:q`${e.labelled.length>1?q`<span
                    class="db-bar"
                    style="--a:${n(l.value)};--b:${n(c.value)};--from:${d(l)};--to:${d(c)}"
                  ></span>`:W}
            ${e.marks.map(e=>q`<span
                  class="db-dot ${e.kind} ${pm(e.kind,o)?"ring":""}"
                  style="--f:${n(e.value)};--mark:${mm(e.kind,o,i)}"
                ></span>`)}
            ${s.value?e.labelled.map((o,a)=>q`<span
                        class="db-label ${0===a&&e.labelled.length>1?"lo":"hi"}"
                        style="--f:${n(o.value)}"
                        >${ja(o.value,i.decimals,t.hass)}</span
                      >`):W}`}
    </div>
  </div>`}(o,e,t,d,s,a)),b=`db ${o} ${p.name?"":"no-names"} ${p.value?"":"no-values"}`;return q`<div class=${b} style="--name-w:${f}" role="group" aria-label=${g}>
      ${i?function(e,t,o,n,a,r){const i=t=>zt(e.hass,t),s=new Set(n.map(e=>Ce(e.entity.band.color))),l=1===s.size?[...s][0]:Ce("primary"),c="range"===t?[[i("dumbbell_low"),hm.low,!1],...o?[[i("dumbbell_now"),mm("now",t,n[0].entity),!0]]:[],[i("dumbbell_high"),hm.high,!1]]:["then"===t?[um(e.hass,a),hm.then,!1]:[i("dumbbell_target"),hm.target,!0],[i("dumbbell_now"),l,!1]];return q`<div class="db-legend">
    ${r?q`<span class="db-unit">${r}</span>`:W}
    ${c.map(([e,t,o])=>q`<span class="db-key"
          ><span class="db-swatch ${o?"ring":""}" style="--mark:${t}"></span>${e}</span
        >`)}
  </div>`}(e,t,n,r,a,u):W}
      ${"horizontal"===o?q`${y}
            ${s.length?q`<div class="db-axis" aria-hidden="true"><div class="db-plot">${v}</div></div>`:W}`:q`<div class="db-body">
              ${s.length?q`<div class="db-axis" aria-hidden="true">${v}</div>`:W}${y}
            </div>`}
    </div>`}};function wm(e){const t={...e,source:e.source??"statistics"};if("history"===t.source&&void 0===e.group_by){const o=e.period??{},n=(o.last??24)*({hour:1,day:24,week:168,month:720}[o.unit??"hour"]??1);t.group_by="day"===o.calendar||!o.calendar&&n<=48?"hour":"day"}return t}function $m(e){return e.flatMap((t,o)=>o>0?[[t[0],e[o-1][1]],t]:[t])}function km(e,t,o){if(e.length<2)return"";const[n,a,r]="step"===o?[$m(e),$m(t),"straight"]:[e,t,o];return`${ma(n,r)}${ma([...a].reverse(),r).replace(/^M/,"L")}Z`}const Mm=[...ls.map(e=>"source"===e.name?{...e,default:"statistics"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"mean",path:["mean"],default:!0},{name:"line_width",path:["line_width"],default:Lt},...fs,...ps];const zm=[{name:"range_color",path:["color"]},{name:"curve",path:["curve"]},{name:"dash",path:["dash"],default:!1}],Am={layout:"chart",group:"history",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
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
  `,thumbnail:()=>Z`
    <path d="M4 18 C14 12 22 8 32 12 S50 20 60 10 V24 C50 32 42 26 32 28 S14 32 4 30 Z"
      fill="var(--primary-color, #03a9f4)" fill-opacity="0.25" />
    <path d="M4 24 C14 22 22 18 32 20 S50 26 60 17" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){if(_a(e),Uo(e),gr(e),Bt(e),Ka(e),void 0!==e.mean&&"boolean"!=typeof e.mean)throw new Error('"mean" must be true or false')},editor:function(e){const t=$s(`range_area|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config),{name:"curve",selector:ss(e.hass,"curve",ua)},{type:"grid",name:"",schema:[{name:"mean",selector:{boolean:{}}},{name:"line_width",selector:Qt}]},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",t,Mm)},entityFields:e=>({schema:$s("range-area-entity",e,()=>[{type:"grid",name:"",schema:[{name:"range_color",selector:{text:{}}},{name:"curve",selector:ss(e,"curve",ua)},{name:"dash",selector:{boolean:{}}}]}]),fields:zm}),disconnect(e){za(e),Za(e),mr(e)},render:function(e){const t={...e,raw:wm(e.raw)},o=xa(t,Date.now(),{range:!0}),n=ka(o,t),a=Aa(o,t),r=n===W&&a===W?W:q`${n}${a}`,i=Ea(o,t),s=Qa(t.raw);if(i)return er("over"===s.header?{...s,header:"above"}:s,r,i);const l=o.series,c=Wa(t,o.range,Ao(l.map(e=>e.points))),d=!1!==t.raw.mean,u=t.raw.line_width??Lt,h={text:(e,o)=>{if(!o||null===o.v)return"—";const n=o=>ja(o,e.entity.decimals,t.hass),a=o.min??o.v,r=o.max??o.v;return Na(`${n(a)} – ${n(r)}`,e.entity.unit)+(d?` · ${n(o.v)}`:"")}};d||(h.dotY=()=>null);const p=fr(t.raw),m=zt(t.hass,"chart_aria",{style:zt(t.hass,"editor_style_range_area"),names:o.series.map(e=>e.entity.name).join(", ")});return er(s,r,Ga({axes:c,ctx:t,content:Z`${l.map(e=>function(e,t,o,n){const a=[],r=[],i=[];for(const s of function(e){const t=[];let o=[];for(const n of e)null!==n.v?o.push({t:n.t,v:n.v,lo:n.min??n.v,hi:n.max??n.v}):(o.length&&t.push(o),o=[]);return o.length&&t.push(o),t}(e.points)){const o=s.map(e=>[t.x(e.t),t.y(e.hi)]),n=s.map(e=>[t.x(e.t),t.y(e.lo)]);a.push(km(o,n,e.curve)),r.push(ma(o,e.curve),ma(n,e.curve)),i.push(ma(s.map(e=>[t.x(e.t),t.y(e.v)]),e.curve))}return Z`<g class="series" data-series=${e.index}>
    <path class="band" d=${a.join("")} fill=${e.color} stroke="none"></path>
    <path class="band-edge" d=${r.join("")} fill="none" stroke=${e.color}></path>
    ${o?Z`<path class="line ${e.dash?"dashed":""}" d=${i.join("")} fill="none" stroke=${e.color}
            style="stroke-width:${n}px"></path>`:W}
  </g>`}(e,c.scales,d,u))}`,label:m,overlay:q`${"over"===s.header?tr(r):W}
      ${p?xr(t,l,c.scales,pr(t.host),Ra(t),h):W}`,hover:p?vr(t,o.range,l.map(e=>e.points)):void 0}))}},Em=["line","area","column"];function Sm(e,t){return e.config.spark??t.spark??"line"}function Cm(e){const t=e.period??{},o=(t.last??24)*({hour:1,day:24,week:168,month:720}[t.unit??"hour"]??1);return(t.calendar?"day"===t.calendar:o<=48)?"hour":"day"}function jm(e,t){return void 0===e.group_by&&0!==t.length&&t.every(e=>"column"===e)?{...e,group_by:Cm(e),aggregate:e.aggregate??"mean"}:e}function Nm(e,t,o,n){const a=ln(e.points,120),r=a.filter(e=>null!==e.v).map(e=>e.v),i=function(e,t){if(0===e.length)return;let o=Math.min(...e),n=Math.max(...e);return t?(o=Math.min(o,0),n=Math.max(n,0),o===n?[o,o+1]:[o,n]):([o,n]=Eo([o,n],.1),[o,n])}(r,"column"===t);if(!i)return Z``;const s=So([o.start,o.end],[0,100]),l=So(i,[23,1]),c=l(Math.min(Math.max(0,i[0]),i[1]));if("column"===t){const t=[];return a.forEach((e,n)=>{if(null===e.v)return;const r=e.end??a[n+1]?.t??o.end,i=s(e.t),d=Math.max(0,Math.min(100,s(r))-i);if(d<=0)return;const u=Math.min(l(e.v),c);t.push(Z`<rect x=${i+.12*d} width=${.76*d} y=${u} height=${Math.abs(l(e.v)-c)}></rect>`)}),Z`<g class="spark-columns" fill=${e.color}>${t}</g>`}const d=fa(a).map(e=>e.map(e=>[s(e.t),l(e.v)])),u=d.map(t=>ma(t,e.curve)).join(""),h="area"===t?d.filter(e=>e.length>1).map(t=>`${ma(t,"step"===e.curve?"straight":e.curve)}L${t[t.length-1][0]},${c}L${t[0][0]},${c}Z`).join(""):"";return Z`${h?Z`<path class="spark-fill" d=${h} fill=${e.color} stroke="none"></path>`:W}
    <path class="spark-line" d=${u} fill="none" stroke=${e.color} style="stroke-width:${n}px"></path>`}const Lm=[...ls,{name:"spark",path:["spark"],default:"line"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:1.5},{name:"spark_bar",path:["bar"],default:!1}];const Tm=[{name:"spark",path:["spark"]},{name:"spark_color",path:["color"]}];const Fm={layout:"chart",group:"history",height:120,styles:r`
    ${Ca}
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
  `,thumbnail:()=>Z`
    <path d="M4 12 L12 9 L20 13 L28 6 L36 10" fill="none" stroke="var(--primary-color, #03a9f4)"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="42" y="7" width="18" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.5" />
    <path d="M4 27 L12 25 L20 29 L28 23 L36 26 V32 H4 Z" fill="var(--warning-color, #f59e0b)" opacity="0.3" />
    <path d="M4 27 L12 25 L20 29 L28 23 L36 26" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="42" y="25" width="14" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.5" />`,validate:function(e){_a(e);const t=[e.spark,...(e.entities??[]).map(e=>"object"==typeof e?e.spark:void 0)];for(const n of t)if(void 0!==n&&!Em.includes(n))throw new Error(`"spark" must be one of: ${Em.join(", ")}`);if(void 0!==e.bar&&"boolean"!=typeof e.bar)throw new Error('"bar" must be true or false');const o=e.line_width;if(void 0!==o&&("number"!=typeof o||o<Tt||o>Ft))throw new Error('"line_width" must be a number from 0.5 to 12')},editor:function(e){const t=$s(`sparkline|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"spark",selector:ss(e.hass,"spark",Em)},{name:"curve",selector:ss(e.hass,"curve",ua)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"spark_bar",selector:{boolean:{}}}]}]);return ks(e,"chart",t,Lm)},entityFields:e=>({schema:$s("sparkline-entity",e,()=>[{type:"grid",name:"",schema:[{name:"spark",selector:ss(e,"spark",Em)},{name:"spark_color",selector:{text:{}}}]}]),fields:Tm}),disconnect(e){za(e)},render:function(e){const t=e.items.map(t=>Sm(t,e.raw)),o={...e,raw:jm(e.raw,t)},n=xa(o),{show:a}=o.config,r=!0===o.raw.bar,i=o.raw.line_width??1.5,s="error"===n.status?q`<div class="spark-message error">${zt(o.hass,"chart_error",{error:n.error??""})}</div>`:W,l=n.series.map((s,l)=>{const c=s.entity,d=c.config.color,u=Ce(d||c.band.color),h="column"===Sm(c,e.raw)&&void 0===o.raw.group_by,p={...s,color:u,points:h?(m=s.points,f=o.raw,g=n.range,v=o.hass,ea(m,_n(Cm(f),g.start,g.end,wn(v)),f.aggregate??"mean",Date.now())):s.points};var m,f,g,v;const y=c.config.line_width??i,b=a.name?q`<span class="name">${c.name}</span>`:W,_=a.value||!c.available?q`<span class="value">${c.display}</span>`:W;return q`<div
      class="entity spark-row ${r?"with-bar":""} ${c.available?"":"unavailable"}"
      data-index=${l}
      tabindex="0"
      aria-label=${c.label}
    >
      ${a.icon?q`<ha-state-icon
              class="icon"
              .hass=${o.hass}
              .stateObj=${c.stateObj}
              .icon=${ni(c)}
            ></ha-state-icon>`:W}
      ${r?q`<div class="spark-body">
              <div class="top">${b}${_}</div>
              ${function(e,t){const o=je(e.band.color);return q`<div
    class="spark-track"
    style="--start:${e.span[0]};--end:${e.span[1]};--c-start:${o.start};--c-end:${o.end};--target:${e.targetPosition??0}"
  >
    <div class="spark-bar"></div>
    ${t&&null!==e.targetPosition&&e.available?q`<div class="spark-target"></div>`:W}
  </div>`}(c,a.target)}
            </div>`:b}
      <svg
        class="spark ${"loading"===n.status?"loading":""}"
        viewBox="0 0 ${100} ${24}"
        preserveAspectRatio="none"
        role="img"
        aria-label=${zt(o.hass,"spark_aria",{name:c.name})}
      >
        ${"ready"===n.status?Nm(p,t[l],n.range,y):W}
      </svg>
      ${r?W:_}
    </div>`});return q`${ka(n,o)}${s}
    <div class="spark-rows ${a.icon?"icons":""} ${r?"bars":""}">${l}</div>`}},Om=["wiggle","centre","share","zero"],Pm=["inside_out","listed"];function Dm(e){return e.map(e=>null===e||!Number.isFinite(e)||e<0?0:e)}function Um(e,t,o){const n="share"===o?function(e){const t=e[0]?.length??0,o=Array.from({length:t},(t,o)=>e.reduce((e,t)=>e+t[o],0));return e.map(e=>e.map((e,t)=>o[t]>0?e/o[t]*100:0))}(e):e,a=t.map(e=>n[e]);let r=function(e,t){const o=e[0]?.length??0,n=Array.from({length:o},(t,o)=>e.reduce((e,t)=>e+t[o],0));if("zero"===t||"share"===t)return new Array(o).fill(0);if("centre"===t)return n.map(e=>-e/2);const a=new Array(o).fill(0);for(let l=1;l<o;l++){let t=0,o=0;for(let n=0;n<e.length;n++){const a=e[n][l];let r=(a-e[n][l-1])/2;for(let t=0;t<n;t++)r+=e[t][l]-e[t][l-1];t+=a,o+=r*a}a[l]=a[l-1]-(t?o/t:0)}let r=1/0,i=-1/0;for(let l=0;l<o;l++)r=Math.min(r,a[l]),i=Math.max(i,a[l]+n[l]);const s=o?-(r+i)/2:0;return a.map(e=>e+s)}(a,o);const i=new Array(e.length);for(const s of t){const e=r.map((e,t)=>e+n[s][t]);i[s]={lower:r,upper:e},r=e}return i}function Hm(e){let t=0,o=-1/0;return e.upper.forEach((n,a)=>{const r=n-e.lower[a];r>o&&(o=r,t=a)}),{at:t,thickness:Math.max(0,o)}}function Im(e,t,o){const n=Math.min(e.range.end,t);if(e.group){const t=e.series[0]?.points??[],o=t.map((e,t)=>t).filter(e=>t[e].t<n);return{times:o.map(e=>(t[e].t+Math.min(t[e].end??t[e].t,n))/2),values:e.series.map(e=>o.map(t=>e.points[t]?.v??null))}}let a=Math.min(240,Math.max(24,Math.round(o/4)));if("statistics"===e.source){const t=Math.max(1,...e.series.map(e=>e.points.filter(e=>!e.carried).length));a=Math.min(a,t)}const r=function(e,t,o){const n=Math.max(e.start+1,Math.min(e.end,t)),a=Math.max(1,Math.round(o)),r=(n-e.start)/a,i=[];for(let s=0;s<a;s++)i.push(e.start+s*r);return i.push(n),i}(e.range,n,a);return{times:r.slice(0,-1).map((e,t)=>(e+r[t+1])/2),values:e.series.map(t=>function(e,t,o,n){return("statistics"===o?ta(e,t,"mean",n):ea(e,t,"mean",n)).map(e=>e.v)}(t.points,r,e.source,n))}}function Bm(e){return e.baseline??"wiggle"}const qm=e=>Math.round(1e4*e)/100+"%";function Zm(e,t,o,n,a,r,i){const[s,l]=n.domain,c=Qa(a.raw).compact?110:180,d=Ra(a),u=e=>e/(l-s)*c,h=new Map,p=[];for(const f of e.series){const e=t[f.index],{at:s,thickness:l}=Hm(e);if(u(l)<18)continue;const m=i[f.index][s],g=r?`${ja(e.upper[s]-e.lower[s],0,a.hass)} %`:null===m?"":Na(ja(m,f.entity.decimals,a.hass),f.entity.unit),v=`${f.entity.name} ${g}`.trim();h.set(f.index,v),p.push({key:f.index,x:o[s]/ga*d,y:n.y((e.upper[s]+e.lower[s])/2)/va*c,width:6.2*v.length,thickness:u(l)})}const m=function(e,t){const o=[],n=new Map;for(const a of[...e].sort((e,t)=>t.thickness-e.thickness||e.key-t.key)){if(a.width>t-4)continue;const e=Math.min(Math.max(2,a.x-a.width/2),t-a.width-2),r={left:e,right:e+a.width,top:a.y-6.5,bottom:a.y+6.5},i=o.some(e=>r.left<e.right+4&&r.right>e.left-4&&r.top<e.bottom&&r.bottom>e.top);i||(o.push(r),n.set(a.key,e))}return n}(p,d);return q`<div class="stream-labels" aria-hidden="true">
    ${p.map(t=>{const o=m.get(t.key);if(void 0===o)return W;const n=e.series[t.key];return q`<span
        class="stream-label ${Le(function(e){return e.entity.config.color??ya[e.index%ya.length]}(n))}"
        style="left:${qm(d?o/d:0)};top:${qm(t.y/c)}"
        >${h.get(t.key)}</span
      >`})}
  </div>`}function Rm(e,t,o,n,a,r,i,s){if(void 0===i)return W;const l=ur(o.times.map(e=>({t:e})),i);if(l<0)return W;const c=r[l]/ga,d=cr(c,Ra(e)),u=[...a].reverse().map(e=>t.series[e]),h=n.map(e=>e.upper[l]-e.lower[l]),p=o.values.reduce((e,t)=>e+Math.max(0,t[l]??0),0),m=new Set(t.series.map(e=>e.entity.unit));return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${qm(c)}"></div>
    <div class="tooltip ${d}" style=${d.startsWith("pin")?"":`left:${qm(c)}`}>
      <div class="tooltip-time">${rn(o.times[l],e.hass)}</div>
      ${u.map(t=>q`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${(t=>{const n=o.values[t.index][l];if(null===n)return"—";const a=Na(ja(n,t.entity.decimals,e.hass),t.entity.unit);return s?`${a} · ${ja(h[t.index],0,e.hass)} %`:a})(t)}</span>
          </div>`)}
      ${1===m.size&&t.series.length>1?q`<div class="tooltip-row total">
              <span class="tooltip-name">${zt(e.hass,"stream_total")}</span>
              <span class="tooltip-value"
                >${Na(ja(p,t.series[0].entity.decimals,e.hass),t.series[0].entity.unit)}</span
              >
            </div>`:W}
    </div>
  </div>`}const Wm=[...ls,{name:"baseline",path:["baseline"],default:"wiggle"},{name:"stream_order",path:["stream_order"],default:"inside_out"},{name:"stream_curve",path:["curve"],default:"smooth"},{name:"stream_labels",path:["labels"],default:!0},...fs,...ps],Vm=new Set(["y_axis","grid_horizontal","y_min","y_max"]);function Ym(e){return e.map(e=>{const t=e;if(!Vm.has(t.name)){if(t.schema){const e=t.schema.filter(e=>!Vm.has(e.name));return e.length?{...t,schema:e}:void 0}return t}}).filter(e=>void 0!==e)}const Gm={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Xm={layout:"chart",group:"totals",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
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
  `,thumbnail:()=>Z`
    <path d="M4 20 C14 12 22 14 32 16 S50 10 60 14 L60 22 C50 20 42 24 32 22 S14 22 4 24 Z"
      fill="var(--primary-color, #03a9f4)" />
    <path d="M4 24 C14 22 22 22 32 22 S50 20 60 22 L60 28 C50 30 40 34 32 30 S14 30 4 28 Z"
      fill="var(--success-color, #43a047)" />
    <path d="M4 28 C14 30 22 30 32 30 S50 30 60 28 L60 31 C50 34 40 38 32 34 S14 33 4 31 Z"
      fill="var(--warning-color, #f59e0b)" />`,validate(e){if(_a(e),Uo(e),gr(e),Ka(e),void 0!==e.baseline&&!Om.includes(e.baseline))throw new Error(`"baseline" must be one of: ${Om.join(", ")}`);if(void 0!==e.stream_order&&!Pm.includes(e.stream_order))throw new Error(`"stream_order" must be one of: ${Pm.join(", ")}`);if(void 0!==e.labels&&"boolean"!=typeof e.labels)throw new Error('"labels" must be true or false')},editor:function(e){const t=function(e){const t=Bm(e);return`${cs(e)}|${"wiggle"===t||"centre"===t?"floating":"axis"}`}(e.config),o=$s(`streamgraph|${t}`,e.hass,()=>{const o=gs(e.hass);return[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"baseline",selector:ss(e.hass,"baseline",Om)},{name:"stream_order",selector:ss(e.hass,"stream_order",Pm)}]},{type:"grid",name:"",schema:[{name:"stream_curve",selector:ss(e.hass,"curve",["smooth","straight","step"])},{name:"stream_labels",selector:{boolean:{}}}]},...t.endsWith("floating")?Ym(o):o,...ms(e.hass)]});return ks(e,"chart",o,Wm)},entityFields:()=>Gm,disconnect(e){za(e),Za(e),mr(e)},render(e){const t=Date.now(),o=xa(e,t),n=ka(o,e),a=Aa(o,e),r=n===W&&a===W?W:q`${n}${a}`,i=Ea(o,e),s=Qa(e.raw);if(i)return er("over"===s.header?{...s,header:"above"}:s,r,i);const l=Bm(e.raw),c="share"===l,d="wiggle"===l||"centre"===l,u=Im(o,t,Ra(e)),h=u.values.map(Dm),p="listed"===(e.raw.stream_order??"inside_out")?h.map((e,t)=>t):function(e){const t=e.map((e,t)=>{let o=0;for(let n=1;n<e.length;n++)e[n]>e[o]&&(o=n);return{i:t,at:o,sum:e.reduce((e,t)=>e+t,0)}});t.sort((e,t)=>e.at-t.at||e.i-t.i);let o=0,n=0;const a=[],r=[];for(const i of t)o<n?(o+=i.sum,a.push(i.i)):(n+=i.sum,r.push(i.i));return[...r.reverse(),...a]}(h);const m=Um(h,p,l),f=function(e){let t=1/0,o=-1/0;for(const n of e){for(const e of n.lower)t=Math.min(t,e);for(const e of n.upper)o=Math.max(o,e)}return t===1/0?void 0:[t,o]}(m);let g=e.raw;if(d){const[t,o]=f??[0,1],n=o>t?.04*(o-t):1;g={...e.raw,y_axis:!1,y_min:t-n,y_max:o+n,gridlines:{...e.raw.gridlines??{},horizontal:!1}}}else c?g={...e.raw,y_min:0,y_max:100}:void 0===e.raw.y_min&&(g={...e.raw,y_min:0});const v=Wa({...e,raw:g},o.range,f),{scales:y}=v,b=u.times.map(e=>y.x(e)),_=e.raw.curve??"smooth",x=Math.min(o.range.end,t),w=[y.x(o.range.start),...b,y.x(x)],$=0===u.times.length?Z``:Z`${p.map(e=>{const t=o.series[e];return Z`<path
              class="stream entity"
              data-index=${e}
              aria-label=${t.entity.label}
              d=${function(e,t,o,n){const a=t.map((t,n)=>[t,o.y(e.upper[n])]),r=t.map((t,n)=>[t,o.y(e.lower[n])]).reverse();return 0===a.length?"":`${ma(a,n)}L${ma(r,n).slice(1)}Z`}((e=>({lower:[e.lower[0],...e.lower,e.lower[e.lower.length-1]],upper:[e.upper[0],...e.upper,e.upper[e.upper.length-1]]}))(m[e]),w,y,_)}
              fill=${t.color}
            ></path>`})}`,k=fr(e.raw),M=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_streamgraph"),names:o.series.map(e=>e.entity.name).join(", ")}),z=u.times.map(e=>({t:e,v:0}));return er(s,r,Ga({axes:v,ctx:{...e},content:$,label:M,overlay:q`${"over"===s.header?tr(r):W}
        ${!1!==e.raw.labels&&u.times.length?Zm(o,m,b,y,e,c,u.values):W}
        ${k?Rm(e,o,u,m,p,b,pr(e.host),c):W}`,hover:k?vr(e,o.range,[z]):void 0}))}};const Jm=["columns","line"],Km=.7;function Qm(e){return{last:14,unit:"day",...e.period??{}}}function ef(e){return e.group_by??"day"}function tf(e,t=Date.now()){const o=Cn(Qm(e.raw)),n=e.raw.source??"statistics";const a=ef(e.raw),r=e.raw.aggregate??"mean",i=wn(e.hass),s=Nn(o,t,i,o.navigate?Tn(e.host,o):0),l=yn(a,s.start,i),c=_n(a,l,s.end,i),d={start:l,end:c[c.length-1]},u=Math.min(s.end,t),h=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),p=da(e.host,e.requestUpdate),m="statistics"===n?function(e,t,o){let n="hour";return"hour"===e?n="5minute":"day"!==e&&t.timeZone===o&&(n="day"),{period:n,types:["mean","min","max","state"],value:"mean"}}(a,i,e.hass.config?.time_zone):void 0,f=p.get(e.hass,h,{start:l,end:s.end},n,{live:s.live,statistics:m});let g=[];const v=e.items.map((e,t)=>{const o=e.config,a=f.data.get(Xn(h[t]))??[];let i;return 0===t?(g="statistics"===n?function(e,t,o){const n=[];let a=0;for(let r=0;r+1<t.length;r++){const i=t[r],s=t[r+1];for(;a<e.length&&e[a].t<i;)a++;let l=null;for(let t=a;t<e.length&&e[t].t<s;t++){const n=e[t];if(null===n.v||n.carried||i>=o)continue;const a="number"==typeof n.max?Math.max(n.max,n.v):n.v,r="number"==typeof n.min?Math.min(n.min,n.v):n.v;l?(l.high=Math.max(l.high,a),l.low=Math.min(l.low,r),l.close=n.v):l={t:i,end:s,open:n.v,high:a,low:r,close:n.v}}n.push(l)}return n}(a,c,u):function(e,t,o){const[n,a,r,i]=["first","max","min","last"].map(n=>ea(e,t,n,o));return n.map((e,t)=>null===e.v||null===a[t].v||null===r[t].v||null===i[t].v?null:{t:e.t,end:e.end??e.t,open:e.v,high:a[t].v,low:r[t].v,close:i[t].v})}(a,c,u),i=g.map((e,t)=>({t:c[t],end:c[t+1],v:e?e.close:null}))):i=function(e,t,o,n,a){return"history"===n?ea(e,t,o,a):"sum"===o||"change"===o?ea(e,t,"change",a):ta(e,t,o,a)}(a,c,r,n,u),{index:t,entity:e,points:i,color:Ce(o.color??(0===t?ya[0]:"grey")),curve:"smooth",dash:!1}});return{status:f.status,error:f.error,range:d,period:o,source:n,series:v,live:s.live,back:s.back,zone:i,group:{unit:a,aggregate:r},candles:g,unit:a}}const of=e=>Math.round(1e4*e)/100+"%";function nf(e,t,o,n){if(void 0===n)return W;const a=t.series[0].points.map(e=>({t:(e.t+(e.end??e.t))/2})),r=ur(a,n);if(r<0)return W;const i=t.candles[r],s=o(a[r].t)/ga,l=cr(s,Ra(e)),c=t.series[0].entity,d=(t,o=c)=>Na(ja(t,o.decimals,e.hass),o.unit),u=i?[[zt(e.hass,"candle_open"),d(i.open)],[zt(e.hass,"candle_high"),d(i.high)],[zt(e.hass,"candle_low"),d(i.low)],[zt(e.hass,"candle_close"),d(i.close)]]:[[c.name,"—"]];for(const h of t.series.slice(1)){const e=h.points[r]?.v;u.push([h.entity.name,null==e?"—":d(e,h.entity),h.color])}return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${of(s)}"></div>
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${of(s)}`}>
      <div class="tooltip-time">${function(e,t,o,n){if("hour"===t)return rn(e,o);const a="month"===t?{month:"long",year:"numeric",timeZone:n.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:n.timeZone};let r;try{r=new Intl.DateTimeFormat(o?.locale?.language??o?.language??"en",a)}catch{r=new Intl.DateTimeFormat("en",a)}const i=r.format(e);return"week"===t?zt(o,"candle_week_of",{date:i}):i}(t.series[0].points[r].t,t.unit,e.hass,t.zone)}</div>
      ${u.map(([e,t,o])=>q`<div class="tooltip-row">
            ${o?q`<span class="swatch" style="background:${o}"></span>`:W}
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}const af=[...ls.map(e=>"period_last"===e.name?{...e,default:14}:"period_unit"===e.name?{...e,default:"day"}:"source"===e.name?{...e,default:"statistics"}:"group_by"===e.name?{name:"candle_by",path:["group_by"],default:"day"}:"aggregate"===e.name?{name:"under_aggregate",path:["aggregate"],default:"mean"}:e),{name:"up_color",path:["up_color"],default:"green"},{name:"down_color",path:["down_color"],default:"red"},{name:"underneath",path:["underneath"],default:"columns"},...fs,...ps];const rf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},sf={layout:"chart",group:"history",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
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
  `,thumbnail:()=>Z`
    <g stroke-width="1.5">
      <line x1="12" x2="12" y1="8" y2="26" stroke="var(--error-color, #db4437)" />
      <rect x="8" y="11" width="8" height="10" fill="var(--error-color, #db4437)" />
      <line x1="26" x2="26" y1="14" y2="32" stroke="var(--error-color, #db4437)" />
      <rect x="22" y="18" width="8" height="9" fill="var(--error-color, #db4437)" />
      <line x1="40" x2="40" y1="10" y2="30" stroke="var(--success-color, #43a047)" />
      <rect x="36" y="14" width="8" height="12" fill="var(--success-color, #43a047)" />
      <line x1="54" x2="54" y1="4" y2="22" stroke="var(--success-color, #43a047)" />
      <rect x="50" y="7" width="8" height="10" fill="var(--success-color, #43a047)" />
    </g>`,validate(e){_a(e),Uo(e),gr(e),Ka(e),Cn(Qm(e));for(const t of["up_color","down_color"])if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`);if(void 0!==e.underneath&&!Jm.includes(e.underneath))throw new Error(`"underneath" must be one of: ${Jm.join(", ")}`)},editor:function(e){const t=$s(`candlestick|${e.config.period?.calendar?"calendar":"rolling"}`,e.hass,()=>{return[...(t=e.hass,o=e.config,ds(t,{...o,group_by:ef(o)}).map(e=>{const o=e;return o.schema?.some(e=>"group_by"===e.name)?{...o,schema:[{name:"candle_by",selector:ss(t,"group_by",Jn)},{name:"under_aggregate",selector:ss(t,"aggregate",Kn)}]}:e})),{type:"grid",name:"",schema:[{name:"up_color",selector:{text:{}}},{name:"down_color",selector:{text:{}}}]},{name:"underneath",selector:ss(e.hass,"underneath",Jm)},...gs(e.hass),...ms(e.hass)];var t,o});return ks(e,"chart",t,af)},entityFields:()=>rf,disconnect(e){za(e),Za(e),mr(e)},render(e){const t=tf(e),o=ka(t,e),n=Aa(t,e),a=o===W&&n===W?W:q`${o}${n}`,r=Ea(t,e),i=Qa(e.raw);if(r)return er("over"===i.header?{...i,header:"above"}:i,a,r);const s=Wa(e,t.range,function(e){let t=1/0,o=-1/0;for(const n of e)n&&(t=Math.min(t,n.low),o=Math.max(o,n.high));return t===1/0?void 0:[t,o]}(t.candles)),l=t.series.length>1;l&&(s.scales.y=So(s.value.domain,[146,0]));const{x:c,y:d}=s.scales,u=Ce(e.raw.up_color??"green"),h=Ce(e.raw.down_color??"red"),p=t.series[0],m=t.candles.map(e=>{if(!e)return W;const t=c(e.t),o=c(e.end)-t,n=t+o/2,a=e.close>=e.open?u:h,r=d(Math.max(e.open,e.close)),i=Math.max(1.5,d(Math.min(e.open,e.close))-r);return Z`<g
        class="candle entity ${e.close>=e.open?"up":"down"}"
        data-index="0"
        aria-label=${p.entity.label}
      >
        <line class="wick" x1=${n} x2=${n} y1=${d(e.high)} y2=${d(e.low)} stroke=${a}></line>
        <rect class="body" x=${t+o*(1-Km)/2} width=${o*Km} y=${r} height=${i} fill=${a}></rect>
      </g>`}),f=e.raw.underneath??"columns",g=Z`${l?function(e,t,o){const n=e.series.slice(1);return Z`${n.map((e,a)=>{const r=e.points.map(e=>e.v).filter(e=>null!==e),i=Math.min(0,...r),s=Math.max(0,...r),l=So([i,s===i?i+1:s],[va,156]);if("line"===o){const o=fa(e.points).map(e=>ma(e.map(e=>[t((e.t+(e.end??e.t))/2),l(e.v)]),"straight")).join("");return Z`<path class="under-line entity" data-index=${e.index} d=${o} fill="none" stroke=${e.color}></path>`}return Z`<g class="under-columns entity" data-index=${e.index} fill=${e.color}>
      ${e.points.map(e=>{if(null===e.v)return W;const o=t(e.t),r=t(e.end??e.t)-o,i=r*Km/n.length,s=o+r*(1-Km)/2+a*i,c=l(Math.max(0,e.v));return Z`<rect x=${s} width=${Math.max(.5,.9*i)} y=${c} height=${Math.max(0,l(Math.min(0,e.v))-c)}></rect>`})}
    </g>`})}`}(t,c,f):W}${m}`,v=fr(e.raw),y=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_candlestick"),names:t.series.map(e=>e.entity.name).join(", ")}),b=p.points.map(e=>({t:(e.t+(e.end??e.t))/2,v:e.v}));return er(i,a,Ga({axes:s,ctx:e,content:g,label:y,overlay:q`${"over"===i.header?tr(a):W}
        ${v?nf(e,t,c,pr(e.host)):W}`,hover:v?vr(e,t.range,[b]):void 0}))}},lf=["horizontal","vertical"],cf=1e3,df=100,uf=e=>"number"==typeof e&&Number.isFinite(e),hf=[{name:"orientation",path:["orientation"],default:"horizontal"},{name:"value_axis",path:["value_axis"],default:!0},{name:"value_grid",path:["value_grid"],default:!0},{name:"value_min",path:["value_min"]},{name:"value_max",path:["value_max"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function pf(e){return[{name:"orientation",selector:ss(e,"orientation",lf)},{type:"grid",name:"",schema:[{name:"value_axis",selector:{boolean:{}}},{name:"value_grid",selector:{boolean:{}}},{name:"value_min",selector:{number:{mode:"box",step:"any"}}},{name:"value_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]}function mf(e){for(const t of["compact","tooltip"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);if(void 0!==e.orientation&&!lf.includes(e.orientation))throw new Error(`"orientation" must be one of: ${lf.join(", ")}`);for(const t of["value_axis","value_grid"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of["value_min","value_max"])if(void 0!==e[t]&&!uf(e[t]))throw new Error(`"${t}" must be a number`);if(uf(e.value_min)&&uf(e.value_max)&&e.value_min>=e.value_max)throw new Error('"value_min" must be below "value_max"')}function ff(e){return{orientation:e.orientation??"horizontal",axis:!1!==e.value_axis,grid:!1!==e.value_grid,min:uf(e.value_min)?e.value_min:void 0,max:uf(e.value_max)?e.value_max:void 0}}function gf(e){return Math.min(140,Math.max(64,Math.round(.3*(e-32))))}function vf(e,t,o,n=64){const a=ff(e.raw),r=!0===e.raw.compact,i=qa(e),s=Math.max(1,t);if("horizontal"===a.orientation){const e=So(o.domain,[0,cf]);return{orientation:a.orientation,count:s,width:cf,height:s*df,at:(t,o,n=0)=>[e(t),(o+.5+n)*df],valuePx:Math.max(40,i-32-gf(i)-8),bandPx:Math.min(r?Math.round(.69*n):n,s>12?28:s>6?40:1/0)}}const l=So(o.domain,[cf,0]),c=Math.max(40,i-32-(a.axis?40:0));return{orientation:a.orientation,count:s,width:s*df,height:cf,at:(e,t,o=0)=>[(t+.5+o)*df,l(e)],valuePx:r?110:180,bandPx:c/s}}function yf(e,t){return"horizontal"===t?Math.max(2,Math.min(8,Math.floor(e/64))):e>140?4:3}function bf(e,t,o,n){const a=ff(t),r=Zo(e,{min:a.min,max:a.max},o);return{domain:r.domain,ticks:r.ticks,format:e=>ja(e,r.decimals,n)}}function _f(e,t){const o=function(e){for(const t of[1,2,3,4,6,12])if(t>=e)return t;return Math.max(12,Io(e,1))}(24/Math.max(1,e)),n=[];for(let i=0;i<=24;i+=o)n.push(i);let a;const r={hour:"numeric",minute:"2-digit",timeZone:"UTC",hour12:tn(t)};try{a=new Intl.DateTimeFormat(t?.locale?.language??t?.language??"en",r)}catch{a=new Intl.DateTimeFormat("en",r)}return{domain:[0,24],ticks:n,format:e=>a.format(Date.UTC(2e3,0,1,0,Math.round(60*e)))}}const xf=e=>Math.round(1e4*e)/100+"%",wf=new WeakMap;function $f(e){return wf.get(e)}function kf(e){wf.delete(e)}function Mf(e,t,o,n,a){const r=(t+.5)/e.count,i="horizontal"===e.orientation?r>.5?`top:auto;bottom:${xf(1-t/e.count)};right:0`:`top:${xf((t+1)/e.count)};right:0`:r>.5?`top:0;right:${xf(1-t/e.count)}`:`top:0;left:${xf((t+1)/e.count)}`;return q`<div class="hover-layer" aria-hidden="true">
    <div class="tooltip band-tooltip" style=${i}>
      <div class="tooltip-time"><span class="swatch" style="background:${a}"></span> ${o}</div>
      ${n.map(([e,t])=>q`<div class="tooltip-row">
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}function zf({ctx:e,geometry:t,categories:o,scale:n,content:a,label:r,overlay:i=W,hover:s=!1}){const l=ff(e.raw),c="horizontal"===t.orientation,d=n.ticks.filter(e=>e>=n.domain[0]&&e<=n.domain[1]),u=l.grid?Z`<g class="grid">${d.map(e=>{const[o,n]=t.at(e,0);return c?Z`<line x1=${o} x2=${o} y1="0" y2=${t.height}></line>`:Z`<line x1="0" x2=${t.width} y1=${n} y2=${n}></line>`})}</g>`:W,h=l.axis&&d.length?q`<div class="cat-axis">
          ${c?W:q`<span class="cat-sizer" aria-hidden="true"
                  >${d.map(n.format).reduce((e,t)=>t.length>e.length?t:e,"")}</span
                >`}
          ${d.map(e=>{const o=(e=>{const[o,n]=t.at(e,0);return c?o/t.width:n/t.height})(e);return q`<span class="axis-label ${c?o<.04?"start":o>.96?"end":"":o<.08?"top":""}" style="${c?"left":"top"}:${xf(o)}"
              >${n.format(e)}</span
            >`})}
        </div>`:W,p=s?function(e,t){const o=t=>{wf.get(e.host)!==t&&(void 0===t?wf.delete(e.host):wf.set(e.host,t),e.requestUpdate())};return{move(e){const n=e.currentTarget.getBoundingClientRect(),a="horizontal"===t.orientation,r=a?n.height:n.width,i=a?e.clientY-n.top:e.clientX-n.left;r>0&&o(Math.min(t.count-1,Math.max(0,Math.floor(i/r*t.count))))},leave(){o(void 0)}}}(e,t):void 0,m=q`<div class="cat-labels">
    ${o.map(e=>q`<div class="entity cat-label" data-index=${e.index} tabindex="0" aria-label=${e.label}>
          <span class="cat-name"><span class="swatch" style="background:${e.color}"></span>${e.name}</span>
          ${e.detail?q`<span class="cat-detail">${e.detail}</span>`:W}
        </div>`)}
  </div>`,f=c?`height:${t.count*t.bandPx}px`:`height:${t.valuePx}px`,g=c&&t.bandPx<40;return q`<div
    class="cat-plot ${t.orientation} ${h===W?"":"has-axis"} ${g?"dense":""}"
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
  </div>`}const Af=r`
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
`;function Ef(e,t,o){const n=[];for(let a=0;a<e.length;a++){const r=e[a];if(null===r.v||!Number.isFinite(r.v))continue;const i=a+1<e.length?e[a+1].t:o;if(t&&a>0&&a===e.length-1&&r.t>=o)continue;const s=t?Math.max(1,Math.min(i,o)-r.t):1;n.push({t:r.t,v:r.v,w:s,real:!0!==r.carried})}return n}function Sf(e){return[...e].sort((e,t)=>e.v-t.v)}function Cf(e,t){const o=e.length;if(0===o)return Number.NaN;if(1===o)return e[0].v;const n=e.reduce((e,t)=>e+t.w,0),a=Math.min(1,Math.max(0,t))*n;let r=0,i=-1/0,s=e[0].v;for(const l of e){const e=r+l.w/2;if(a<=e)return i===-1/0?l.v:s+(l.v-s)*(a-i)/(e-i||1);r+=l.w,i=e,s=l.v}return e[o-1].v}function jf(e){if(0===e.length)return;const t=Sf(e),o=Cf(t,.25),n=Cf(t,.5),a=Cf(t,.75),r=1.5*(a-o),i=t.filter(e=>e.v>=o-r&&e.v<=a+r),s=t.reduce((e,t)=>e+t.w,0);return{n:e.length,min:t[0].v,max:t[t.length-1].v,q1:o,median:n,q3:a,low:i.length?i[0].v:o,high:i.length?i[i.length-1].v:a,mean:s>0?t.reduce((e,t)=>e+t.v*t.w,0)/s:n}}function Nf(e){const t=e.length;if(0===t)return 1;const o=Sf(e),n=o.reduce((e,t)=>e+t.w,0),a=o.reduce((e,t)=>e+t.v*t.w,0)/n,r=Math.sqrt(o.reduce((e,t)=>e+t.w*(t.v-a)**2,0)/n),i=Cf(o,.75)-Cf(o,.25),s=i>0?Math.min(r,i/1.34):r,l=o.reduce((e,t)=>e+t.w*t.w,0),c=l>0?n*n/l:t;let d=1/0;for(let h=1;h<o.length;h++){const e=o[h].v-o[h-1].v;e>0&&e<d&&(d=e)}const u=.9*s*Math.max(1,c)**-.2;return u>0?Math.max(u,d===1/0?0:d):d!==1/0?d:.01*Math.abs(a)||1}function Lf(e,t,o,n=64){if(0===e.length)return[];let a=1/0,r=-1/0;for(const u of e)a=Math.min(a,u.v),r=Math.max(r,u.v);const i=Math.max(o[0],a-2*t),s=Math.min(o[1],r+2*t);if(!(s>i))return[];const l=Array.from({length:n+1},(e,t)=>i+(s-i)*t/n),c=function(e,t,o){const n=e.reduce((e,t)=>e+t.w,0);if(0===n||t<=0)return o.map(()=>0);const a=1/(n*t*Math.sqrt(2*Math.PI));return o.map(o=>{let n=0;for(const a of e){const e=(o-a.v)/t;e>-6&&e<6&&(n+=a.w*Math.exp(-.5*e*e))}return n*a})}(e,t,l),d=Math.max(...c);return l.map((e,t)=>({x:e,d:d>0?c[t]/d:0}))}function Tf(e){const t=43758.5453*Math.sin(12.9898*(e+1));return t-Math.floor(t)-.5}function Ff(e,t){const o=e.filter(e=>e.real);if(o.length<=t)return o;const n=[];for(let a=0;a<t;a++)n.push(o[Math.floor(a*o.length/t)]);return n}const Of=["violin","raincloud"],Pf=["none","day","week","month"],Df=.42;function Uf(e){const t=e.shape??"violin";return{shape:t,box:!1!==e.box,readings:e.readings??"raincloud"===t,bandwidth:"number"==typeof e.bandwidth?e.bandwidth:void 0,split:e.split_by??"none"}}function Hf(e,t,o,n){const a="month"===t?{month:"short",year:"numeric",timeZone:o.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:o.timeZone};try{return new Intl.DateTimeFormat(n?.locale?.language??n?.language??"en",a).format(e)}catch{return new Intl.DateTimeFormat("en",a).format(e)}}const If=(e,t,o)=>e?Na(ja(e.median,t.entity.decimals,o),t.entity.unit):"";function Bf(e,t,o,n,a,r,i){const s=(e,t)=>e?zt(i,"violin_median",{value:If(e,t,i)}):zt(i,"violin_none");if("none"===o.split)return e.map((e,o)=>{const n=jf(t[o]);return{series:e,readings:t[o],summary:n,name:e.entity.name,detail:s(n,e)}});const l=e.map((e,o)=>function(e,t,o){const n=t.slice(0,-1).map(()=>[]);for(const a of e)for(let e=0;e+1<t.length;e++){const r=t[e],i=t[e+1];if(!o){a.t>=r&&a.t<i&&n[e].push(a);continue}const s=Math.min(i,a.t+a.w)-Math.max(r,a.t);s<=0||n[e].push({t:Math.max(r,a.t),v:a.v,w:s,real:a.real&&a.t>=r})}return n}(t[o],n,a)),c=[];for(let d=0;d+1<n.length;d++)for(let t=0;t<e.length;t++){const a=l[t][d];if(0===a.length)continue;const u=jf(a),h=Hf(n[d],o.split,r,i);c.push({series:e[t],readings:a,summary:u,name:e.length>1?`${h} · ${e[t].entity.name}`:h,detail:s(u,e[t])})}return c}function qf(e,t,o,n,a=0,r=.42){if(0===e.length)return"";const i=e.map(e=>t.at(e.x,o,a-e.d*r)),s=e.map(e=>t.at(e.x,o,n?a:a+e.d*r));return function(e,t){const o=e=>Math.round(100*e)/100;return`${[...e,...[...t].reverse()].map(([e,t],n)=>`${n?"L":"M"}${o(e)},${o(t)}`).join("")}Z`}(i,s)}function Zf(e,t,o,n,a){const{summary:r,series:i}=e;if(!r)return Z``;const s=n.bandwidth??Nf(e.readings),l=Lf(e.readings,s,a),c="raincloud"===n.shape,d=Math.min(1,110/o.bandPx),u=Z`<path class="shape" d=${qf(l,o,t,c,c?-.04*d:0,(c?.44:Df)*d)}
    fill=${i.color} stroke=${i.color}></path>`,h=c?.08*d:0,p=function([e,t],[o,n]){return{x:Math.min(e,o),y:Math.min(t,n),width:Math.abs(o-e),height:Math.abs(n-t)}}(o.at(r.q1,t,h-.045*d),o.at(r.q3,t,h+.045*d)),[m,f]=o.at(r.low,t,h),[g,v]=o.at(r.high,t,h),y=n.box?Z`<g class="box">
        <line class="whisker" x1=${m} y1=${f} x2=${g} y2=${v} stroke=${i.color}></line>
        <rect class="iqr" x=${p.x} y=${p.y} width=${p.width} height=${p.height} fill=${i.color}></rect>
        <path class="median" d=${Dt([o.at(r.median,t,h)])}></path>
      </g>`:W,b=n.readings?Z`<path class="dots" stroke=${i.color} d=${Dt(Ff(e.readings,300).map((e,n)=>o.at(e.v,t,d*function(e,t,o){return o?.3+.22*Tf(e):1.6*Tf(e)*Df*t}(n,function(e,t){if(0===e.length)return 0;let o=0;for(;o<e.length-1&&e[o+1].x<t;)o++;const n=e[o],a=e[Math.min(e.length-1,o+1)];return a.x===n.x?n.d:n.d+(a.d-n.d)*(t-n.x)/(a.x-n.x)}(l,e.v),c))))}></path>`:W;return Z`<g class="group">${u}${y}${b}</g>`}const Rf=(e,t,o)=>{const n=e=>ja(e,t.entity.decimals,o),a=e=>Na(e,t.entity.unit);return[[zt(o,"dist_median"),a(n(e.median))],[zt(o,"dist_middle"),a(`${n(e.q1)} – ${n(e.q3)}`)],[zt(o,"dist_range"),a(`${n(e.min)} – ${n(e.max)}`)],[zt(o,"dist_count"),ja(e.n,0,o)]]},Wf=[...ls,{name:"shape",path:["shape"],default:"violin"},{name:"box",path:["box"],default:!0},{name:"split_by",path:["split_by"],default:"none"},{name:"bandwidth",path:["bandwidth"]},...hf],Vf=new Map;const Yf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Gf={layout:"chart",group:"distribution",height:240,styles:r`
    ${Ca}
    ${wr}
    ${or}
    ${Af}
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
  `,thumbnail:()=>Z`
    <path d="M6 14 C14 6 22 6 32 10 S50 6 58 14 C50 22 42 18 32 18 S14 22 6 14 Z"
      fill="var(--primary-color, #03a9f4)" fill-opacity="0.4" stroke="var(--primary-color, #03a9f4)" stroke-width="1.5" />
    <line x1="18" x2="46" y1="14" y2="14" stroke="var(--primary-color, #03a9f4)" stroke-width="1.5" />
    <rect x="26" y="12" width="12" height="4" fill="var(--primary-color, #03a9f4)" />
    <path d="M10 32 C18 24 26 22 34 26 S50 26 56 32 Z" fill="var(--success-color, #43a047)" fill-opacity="0.4"
      stroke="var(--success-color, #43a047)" stroke-width="1.5" />
    <g fill="var(--success-color, #43a047)"><circle cx="20" cy="36" r="1.3" /><circle cx="28" cy="37" r="1.3" />
      <circle cx="34" cy="35.5" r="1.3" /><circle cx="42" cy="37" r="1.3" /></g>`,validate(e){if(_a(e),gr(e),mf(e),void 0!==e.shape&&!Of.includes(e.shape))throw new Error(`"shape" must be one of: ${Of.join(", ")}`);if(void 0!==e.split_by&&!Pf.includes(e.split_by))throw new Error(`"split_by" must be one of: ${Pf.join(", ")}`);for(const o of["box","readings"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);const t=e.bandwidth;if(void 0!==t&&!("number"==typeof t&&Number.isFinite(t)&&t>0))throw new Error('"bandwidth" must be a number above 0')},editor:function(e){const t=Uf(e.config),o=$s(`violin|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config),{type:"grid",name:"",schema:[{name:"shape",selector:ss(e.hass,"shape",Of)},{name:"split_by",selector:ss(e.hass,"split_by",Pf)}]},{type:"grid",name:"",schema:[{name:"box",selector:{boolean:{}}},{name:"readings",selector:{boolean:{}}}]},{name:"bandwidth",selector:{number:{min:0,mode:"box",step:"any"}}},...pf(e.hass)]);return ks(e,"chart",o,function(e){let t=Vf.get(e);return t||(t=[...Wf,{name:"readings",path:["readings"],default:"raincloud"===e}],Vf.set(e,t)),t}(t.shape))},entityFields:()=>Yf,disconnect(e){za(e),Za(e),kf(e)},render(e){const t=Date.now(),o=xa(e,t),n=ka(o,e),a={...Qa(e.raw),header:"above"},r=Ea(o,e);if(r)return er(a,n,r);const i=Uf(e.raw),s=Math.min(o.range.end,t),l="history"===o.source&&!o.group,c=o.series.map(e=>Ef(e.points,l,s)),d="none"===i.split?[]:_n(i.split,o.range.start,s,o.zone),u=Bf(o.series,c,i,d,l,o.zone,e.hass);let h=1/0,p=-1/0;for(const k of u){if(!k.summary)continue;const e=i.bandwidth??Nf(k.readings);h=Math.min(h,k.summary.min-e),p=Math.max(p,k.summary.max+e)}const m=ff(e.raw),f=vf(e,u.length,{domain:[0,1]}),g=bf(h===1/0?void 0:[h,p],e.raw,yf(f.valuePx,m.orientation),e.hass),v=vf(e,u.length,g),y=Z`${u.map((e,t)=>Zf(e,t,v,i,g.domain))}`,b=u.map(e=>({index:e.series.index,name:e.name,detail:e.detail,color:e.series.color,label:`${e.name}, ${e.detail}`})),_=fr(e.raw),x=_?$f(e.host):void 0,w=void 0===x?void 0:u[x],$=zt(e.hass,"chart_aria",{style:zt(e.hass,"raincloud"===i.shape?"violin_raincloud":"editor_style_violin"),names:o.series.map(e=>e.entity.name).join(", ")});return er(a,n,zf({ctx:e,geometry:v,categories:b,scale:g,content:y,label:$,hover:_,overlay:w?.summary&&void 0!==x?Mf(v,x,w.name,Rf(w.summary,w.series,e.hass),w.series.color):W}))}},Xf=.75;function Jf(e){const t=e.map((e,t)=>t).sort((t,o)=>e[t].at-e[o].at||t-o),o=new Array(e.length).fill(0),n=[];let a=0;const r=function(e){let t=0;for(const o of e)o.r>t&&(t=o.r);return t}(e);for(const i of t){const{at:t,r:s}=e[i];for(;a<n.length&&t-n[a].at>s+r+Xf;)a++;const l=n.slice(a).filter(e=>Math.abs(e.at-t)<e.r+s+Xf),c=[0];for(const e of l){const o=e.r+s+Xf,n=Math.sqrt(Math.max(0,o*o-(e.at-t)**2));c.push(e.y+n,e.y-n)}const d=c.sort((e,t)=>Math.abs(e)-Math.abs(t)||t-e).find(e=>l.every(o=>(o.at-t)**2+(o.y-e)**2>=(o.r+s+Xf)**2-1e-6)),u=d??0;o[i]=u,n.push({at:t,r:s,y:u})}return o}function Kf(e,t,o=1){let n=1,a=Jf(e);const r=t=>function(e,t){let o=0;return e.forEach((e,n)=>{o=Math.max(o,Math.abs(t[n])+e.r)}),o}(e.map(e=>({...e,r:e.r*t})),a),i=Math.min(...e.map(e=>e.r)),s=Math.min(1,o/Math.max(i,1e-9));for(let l=0;l<4;l++){const o=r(n);if(o<=t)return{offsets:a,scale:n};const i=Math.max(s,n*Math.sqrt(t/o)*.95);if(i>=n)break;n=i,a=Jf(e.map(e=>({...e,r:e.r*n})))}if(r(n)>t){const o=Math.max(0,t-Math.max(...e.map(e=>e.r*n))),r=Math.max(...a.map(Math.abs));r>0&&(a=a.map(e=>e*o/r))}return{offsets:a,scale:n}}const Qf=["value","time_of_day"];function eg(e){return{placeBy:e.place_by??"value",dot:"number"==typeof e.dot_size?e.dot_size:6,sized:!0===e.size_by_value}}const tg=/^(binary_sensor|switch|input_boolean|light|fan|siren|automation)\./;function og(e,t,o){const n=Math.min(e.range.end,o);return e.series.map(o=>{const a="time_of_day"===t.placeBy&&tg.test(o.entity.entityId);let r;r=a?function(e){const t=[];let o=null;for(const n of e)null!==n.v&&(1!==n.v||1===o||n.carried||t.push(n),o=n.v);return t}(o.points).map(e=>({t:e.t,v:1,w:1,real:!0})):Ef(o.points,"history"===e.source&&!e.group,n).filter(e=>e.real);const i=Ff(r,400);return{series:o,positions:i.map(o=>"time_of_day"===t.placeBy?function(e,t){const o=mn(e,t);return o.hour+o.minute/60+o.second/3600}(o.t,e.zone.timeZone):o.v),values:i.map(e=>e.v),total:r.length,events:a}})}function ng(e,t,o,n,a){if(0===e.positions.length)return Z``;const r=a.dot/2,i=n.domain[1]-n.domain[0]||1,s=Math.min(...e.values),l=Math.max(...e.values),c=e.values.map(t=>{if(!a.sized||e.events)return r;const o=function(e,t,o,n){if(!(o>t))return n;const a=Math.min(1,Math.max(0,(e-t)/(o-t)));return n*Math.sqrt(.12+.88*a)}(t,s,l,r);return Math.max(.5,Math.round(o/r*6)/6)*r}),d=e.positions.map((e,t)=>({at:(e-n.domain[0])/i*o.valuePx,r:c[t]})),{offsets:u,scale:h}=Kf(d,o.bandPx/2-1,1),p=new Map;return d.forEach((n,a)=>{const r=Math.round(n.r*h*2*100)/100,i=p.get(r)??[];i.push(o.at(e.positions[a],t,u[a]/o.bandPx)),p.set(r,i)}),Z`<g class="swarm entity" data-index=${e.series.index} stroke=${e.series.color}>
    ${[...p].map(([e,t])=>Z`<path class="dots" d=${Dt(t)} style="stroke-width:${e}px"></path>`)}
  </g>`}function ag(e,t,o,n){const a=jf(e.positions.map((e,t)=>({t:t,v:e,w:1,real:!0})));if(!a)return[];const r=a=>o?t.format(a):Na(ja(a,e.series.entity.decimals,n),e.series.entity.unit);return[[zt(n,"dist_count"),ja(e.total,0,n)],...e.positions.length<e.total?[[zt(n,"swarm_shown"),ja(e.positions.length,0,n)]]:[],[zt(n,"dist_median"),r(a.median)],[zt(n,"dist_middle"),`${r(a.q1)} – ${r(a.q3)}`],[zt(n,o?"swarm_earliest_latest":"swarm_lowest_highest"),`${r(a.min)} – ${r(a.max)}`]]}const rg=[...ls,{name:"place_by",path:["place_by"],default:"value"},{name:"dot_size",path:["dot_size"],default:6},{name:"size_by_value",path:["size_by_value"],default:!1},...hf];function ig(e){return e.map(e=>{const t=e;return t.schema?{...t,schema:t.schema.filter(e=>"value_min"!==e.name&&"value_max"!==e.name)}:e})}const sg={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},lg={layout:"chart",group:"distribution",height:260,styles:r`
    ${Ca}
    ${wr}
    ${or}
    ${Af}
    .swarm .dots {
      fill: none;
      stroke-linecap: round;
      stroke-opacity: 0.85;
    }
  `,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)">
      <circle cx="10" cy="14" r="2.2" /><circle cx="16" cy="11" r="2.2" /><circle cx="16" cy="17" r="2.2" />
      <circle cx="21" cy="14" r="2.2" /><circle cx="26" cy="11" r="2.2" /><circle cx="26" cy="17" r="2.2" />
      <circle cx="31" cy="14" r="2.2" /><circle cx="44" cy="14" r="2.2" /><circle cx="52" cy="14" r="2.2" />
    </g>
    <g fill="var(--warning-color, #f59e0b)">
      <circle cx="14" cy="30" r="2.2" /><circle cx="30" cy="30" r="2.2" /><circle cx="36" cy="27" r="2.2" />
      <circle cx="36" cy="33" r="2.2" /><circle cx="41" cy="30" r="2.2" /><circle cx="46" cy="27" r="2.2" />
      <circle cx="46" cy="33" r="2.2" /><circle cx="51" cy="30" r="2.2" /><circle cx="56" cy="27" r="2.2" />
    </g>`,validate(e){if(_a(e),mf(e),void 0!==e.place_by&&!Qf.includes(e.place_by))throw new Error(`"place_by" must be one of: ${Qf.join(", ")}`);const t=e.dot_size;if(void 0!==t&&!("number"==typeof t&&t>=2&&t<=16))throw new Error('"dot_size" must be a number from 2 to 16');if(void 0!==e.size_by_value&&"boolean"!=typeof e.size_by_value)throw new Error('"size_by_value" must be true or false')},editor:function(e){const t=eg(e.config),o=$s(`beeswarm|${cs(e.config)}|${t.placeBy}`,e.hass,()=>[...ds(e.hass,e.config),{name:"place_by",selector:ss(e.hass,"place_by",Qf)},{type:"grid",name:"",schema:[{name:"dot_size",selector:{number:{min:2,max:16,step:1,mode:"box",unit_of_measurement:"px"}}},{name:"size_by_value",selector:{boolean:{}}}]},..."value"===t.placeBy?pf(e.hass):ig(pf(e.hass))]);return ks(e,"chart",o,rg)},entityFields:()=>sg,disconnect(e){za(e),Za(e),kf(e)},render(e){const t=Date.now(),o=xa(e,t),n=ka(o,e),a={...Qa(e.raw),header:"above"},r=Ea(o,e);if(r)return er(a,n,r);const i=eg(e.raw),s=og(o,i,t),l=ff(e.raw),c=yf(vf(e,s.length,{domain:[0,1]},96).valuePx,l.orientation);let d;if("time_of_day"===i.placeBy)d=_f(c,e.hass);else{const t=s.flatMap(e=>e.positions);d=bf(t.length?[Math.min(...t),Math.max(...t)]:void 0,e.raw,c,e.hass)}const u=vf(e,s.length,d,96),h=Z`${s.map((e,t)=>ng(e,t,u,d,i))}`,p=s.map(t=>{const o=function(e,t){if(0===e.total)return zt(t,"swarm_none");const o=ja(e.total,0,t);return zt(t,e.events?"swarm_events":"swarm_readings",{n:o})}(t,e.hass);return{index:t.series.index,name:t.series.entity.name,detail:o,color:t.series.color,label:`${t.series.entity.name}, ${o}`}}),m=fr(e.raw),f=m?$f(e.host):void 0,g=void 0===f?void 0:s[f],v=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_beeswarm"),names:o.series.map(e=>e.entity.name).join(", ")});return er(a,n,zf({ctx:e,geometry:u,categories:p,scale:d,content:h,label:v,hover:m,overlay:g&&g.total>0&&void 0!==f?Mf(u,f,g.series.entity.name,ag(g,d,"time_of_day"===i.placeBy,e.hass),g.series.color):W}))}};function cg(e,t,o){const n=new Set,a=[t];for(;a.length;){const t=a.pop();if(t===o)return!0;n.has(t)||(n.add(t),a.push(...e.get(t)??[]))}return!1}function dg(e){const t=new Map,o=[];for(const n of e)n.from&&n.to&&n.from!==n.to&&(cg(t,n.to,n.from)||(t.set(n.from,[...t.get(n.from)??[],n.to]),o.push(n)));return o}function ug(e){return null!==e&&Number.isFinite(e)&&e>0?e:0}function hg(e,t){const o=dg(e),n=function(e){const t=new Map;for(const o of e)t.set(o.from,t.get(o.from)??0),t.set(o.to,t.get(o.to)??0);for(let o=0;o<=t.size;o++){let o=!1;for(const n of e){const e=t.get(n.from)+1;e>t.get(n.to)&&(t.set(n.to,e),o=!0)}if(!o)break}return t}(o),a=new Map;for(const b of o)a.has(b.from)||a.set(b.from,a.size),a.has(b.to)||a.set(b.to,a.size);const r=o.filter(e=>ug(e.value)>0),i=new Map,s=e=>{let t=i.get(e);return t||(t={name:e,order:a.get(e),column:n.get(e),value:0,in:0,out:0,x:0,y:0,h:0},i.set(e,t)),t},l=r.map(e=>{const t=ug(e.value),o=s(e.from),n=s(e.to);return o.out+=t,n.in+=t,{flow:e,value:t,source:o,target:n,width:0,y0:0,y1:0}}),c=[...i.values()].sort((e,t)=>e.order-t.order);for(const b of c)b.value=Math.max(b.in,b.out);const d=[...new Set(c.map(e=>e.column))].sort((e,t)=>e-t);for(const b of c)b.column=d.indexOf(b.column);const u=d.length;if(0===u)return{nodes:c,links:l,columns:u};const h=d.map((e,t)=>c.filter(e=>e.column===t)),p=e=>t.above?.(e,u)??0,m=h.map(e=>e.reduce((e,t)=>e+p(t),0)+t.gap*(e.length-1)),f=h.map(e=>e.reduce((e,t)=>e+t.value,0)),g=Math.max(0,Math.min(...h.map((e,o)=>(t.height-m[o])/f[o]))),v=t.width-t.left-t.right-t.nodeWidth;h.forEach((e,o)=>{let n=(t.height-(f[o]*g+m[o]))/2;const a=t.left+(u>1?v*o/(u-1):v/2);for(const r of e)n+=p(r),r.x=a,r.y=n,r.h=r.value*g,n+=r.h+t.gap});const y=e=>e.y+e.h/2;for(const b of l)b.width=b.value*g;for(const b of c){const e=l.filter(e=>e.source===b).sort((e,t)=>y(e.target)-y(t.target));let t=b.y;for(const n of e)n.y0=t+n.width/2,t+=n.width;const o=l.filter(e=>e.target===b).sort((e,t)=>y(e.source)-y(t.source));t=b.y;for(const n of o)n.y1=t+n.width/2,t+=n.width}return{nodes:c,links:l,columns:u}}function pg(e,t){return e.length*t*.58}function mg(e,t,o){if(pg(e,o)<=t)return e;const n=Math.floor(t/(.58*o))-1;return n>=1?`${e.slice(0,n).trimEnd()}…`:""}function fg(e,t,o){const n=e.map((e,t)=>t).sort((t,o)=>e[t]-e[o]),a=[...e];let r=-1/0;for(const s of n)a[s]=Math.max(a[s],r+t,t/2),r=a[s];let i=1/0;for(const s of[...n].reverse())a[s]=Math.min(a[s],i-t,o-t/2),i=a[s];return a}const gg=["auto","source","target"],vg=10,yg=e=>"string"==typeof e?e.trim():"";const bg=new WeakMap,_g=(e,t)=>e.column>0&&e.column<t-1,xg=(e,t)=>0===e.column?"left":_g(e,t)&&e.in>0&&e.out>0?"above":"right";function wg(e,t){return q`<div class="chart-message">${zt(t,e)}</div>`}const $g=[{name:"link_color",path:["link_color"],default:"auto"}];const kg=[{name:"from",path:["from"],default:""},{name:"to",path:["to"],default:""},{name:"flow_color",path:["color"]}],Mg=[{type:"grid",name:"",schema:[{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}}]},{name:"flow_color",selector:{text:{}}}];const zg={layout:"chart",group:"totals",height:220,styles:r`
    ${Ca}
    ${wr}
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
  `,thumbnail:()=>Z`
    <g fill="none" stroke-opacity="0.4">
      <path d="M10 11 C32 11 32 9 54 9" stroke="var(--primary-color, #03a9f4)" stroke-width="10" />
      <path d="M10 21 C32 21 32 25 54 25" stroke="var(--primary-color, #03a9f4)" stroke-width="10" />
      <path d="M10 32 C32 32 32 33 54 33" stroke="var(--warning-color, #f59e0b)" stroke-width="6" />
    </g>
    <rect x="6" y="6" width="4" height="20" rx="1" fill="var(--primary-color, #03a9f4)" />
    <rect x="6" y="29" width="4" height="6" rx="1" fill="var(--warning-color, #f59e0b)" />
    <rect x="54" y="4" width="4" height="10" rx="1" fill="var(--success-color, #43a047)" />
    <rect x="54" y="20" width="4" height="16" rx="1" fill="var(--purple-color, #8b6cff)" />`,validate:function(e){if(void 0!==e.link_color&&!gg.includes(e.link_color))throw new Error(`"link_color" must be one of: ${gg.join(", ")}`);const t=[];(e.entities??[]).forEach((e,o)=>{if("object"!=typeof e||null===e)return;const n=e;for(const t of["from","to"])if(void 0!==n[t]&&"string"!=typeof n[t])throw new Error(`Entity ${o+1}: "${t}" must be a node name`);const a=yg(n.from),r=yg(n.to);if(a&&r&&a===r)throw new Error(`Entity ${o+1}: "from" and "to" must be different nodes`);a&&r&&t.push([a,r])});const o=function(e){const t=new Map;for(const[r,i]of e){if(r===i)return[r,i];t.set(r,[...t.get(r)??[],i])}const o=new Map,n=[],a=e=>{if("open"===o.get(e))return[...n.slice(n.indexOf(e)),e];if("done"!==o.get(e)){o.set(e,"open"),n.push(e);for(const o of t.get(e)??[]){const e=a(o);if(e)return e}n.pop(),o.set(e,"done")}};for(const r of t.keys()){const e=a(r);if(e)return e}}(t);if(o)throw new Error(`Flows can't go round in a loop: ${o.join(" → ")}`)},editor:function(e){const t=$s("sankey",e.hass,()=>[{name:"link_color",selector:ss(e.hass,"link_color",gg)}]);return ks(e,"chart",t,$g)},entityFields:()=>({schema:Mg,fields:kg}),disconnect(e){Za(e),bg.delete(e)},render:function(e){const t=function(e){return e.items.flatMap((e,t)=>{const o=e.config,n=yg(o.from),a=yg(o.to);return n&&a?[{index:t,from:n,to:a,value:e.available?e.value:null}]:[]})}(e);if(!t.length)return wg("sankey_no_flows",e.hass);const o=e.items[t[0].index],n=t=>Na(ja(t,o.decimals,e.hass),o.unit),a=Math.max(200,qa(e)-32),{show:r}=e.config,i=function(e,t,o){const n=t<400?11:12,a=n+3,r=hg(e,{width:t,height:200,left:0,right:0,nodeWidth:vg,gap:12}),i=r.columns,s=new Map;for(const b of r.nodes)s.set(b.column,(s.get(b.column)??0)+1);const l=Math.max(200,44*Math.max(0,...s.values())),c=.3*t,d=e=>({name:o.name?e.name:"",value:o.value?o.format(e.value):""}),u=e=>{const t=r.nodes.filter(t=>xg(t,i)===e&&!_g(t,i)).map(e=>Math.max(pg(d(e).name,n),pg(d(e).value,n)));return t.length&&Math.max(...t)>0?Math.min(c,Math.max(...t))+6+3:2},h=u("left"),p=u("right"),m=r.nodes.some(e=>"above"===xg(e,i)),f=m&&(o.name||o.value)?20:0,g=hg(e,{width:t,height:l-f,left:h,right:p,nodeWidth:vg,gap:12,above:(e,t)=>"above"===xg(e,t)&&f?20:0});for(const b of g.nodes)b.y+=f;for(const b of g.links)b.y0+=f,b.y1+=f;const v=i>1?(t-h-p-vg)/(i-1):t,y=[];if(o.name||o.value){for(const o of g.nodes){const e=xg(o,i),a=d(o);if("above"===e){const r=o.x+5,i=Math.min(1.6*v,2*r,2*(t-r)),s=pg(`${a.name} ${a.value}`,n)<=i||!a.name?a.value:"",l=mg(a.name,s?i-pg(` ${s}`,n):i,n);y.push({node:o,side:e,name:l,value:s,y:o.y-6});continue}const r=_g(o,i)?v-vg-12:("left"===e?h:p)-6-2,s=pg(a.value,n)<=r?a.value:"";y.push({node:o,side:e,name:mg(a.name,r,n),value:s,y:o.y+o.h/2})}const e=o.name&&o.value?2*a:a;for(let t=0;t<i;t++){const o=y.filter(e=>"above"!==e.side&&e.node.column===t);fg(o.map(e=>e.y),e,l).forEach((e,t)=>o[t].y=e)}}return{width:t,height:l,font:n,layout:g,labels:y}}(t,a,{name:r.name,value:r.value,format:n}),{layout:s}=i;if(!s.links.length)return wg("sankey_nothing",e.hass);const l=function(e,t,o){const n=dg(e),a=new Set(n.map(e=>e.to)),r=new Map;for(const c of n)for(const e of[c.from,c.to])r.has(e)||r.set(e,"");const i=e=>"target"===t||"auto"===t&&a.has(e.from)?e.to:e.from,s=new Set;for(const c of n){const e=o(c.index);e&&!s.has(i(c))&&(r.set(i(c),Ce(e)),s.add(i(c)))}[...r.keys()].forEach((e,t)=>{s.has(e)||r.set(e,Ce(ya[t%ya.length]))});const l=new Map;for(const c of n){const e=o(c.index);l.set(c.index,e?Ce(e):r.get(i(c)))}return{node:r,link:l}}(t,e.raw.link_color??"auto",t=>{const o=e.items[t].config.color;return"string"==typeof o&&o?o:void 0}),c=bg.get(e.host),d=t=>()=>{void 0===t?bg.delete(e.host):bg.set(e.host,t),e.requestUpdate()},u=!0===e.hass.themes?.darkMode,h=t=>zt(e.hass,"sankey_flow",{from:t.flow.from,to:t.flow.to,value:n(t.value)}),p=zt(e.hass,"sankey_aria",{flows:s.links.map(h).join(", ")}),m=s.links.find(e=>e.flow.index===c),f=s.links.map(t=>{const o=e.items[t.flow.index],n=Ae(o.config);return Z`<g
      class="entity flow ${n?"interactive":""} ${t===m?"active":""}"
      data-index=${t.flow.index}
      tabindex=${n?0:W}
      aria-label=${`${h(t)} (${o.name})`}
      @pointerenter=${d(t.flow.index)}
      @pointerleave=${d(void 0)}
      @focus=${d(t.flow.index)}
      @blur=${d(void 0)}
    >
      <title>${h(t)}</title>
      <path class="link" d=${function(e,t){const o=e.source.x+t,n=e.target.x,a=(o+n)/2,r=Math.max(1,e.width)/2,i=e=>Math.round(10*e)/10,[s,l,c,d]=[e.y0-r,e.y1-r,e.y1+r,e.y0+r].map(i);return`M${i(o)},${s}C${i(a)},${s} ${i(a)},${l} ${i(n)},${l}L${i(n)},${c}C${i(a)},${c} ${i(a)},${d} ${i(o)},${d}Z`}(t,vg)} fill=${l.link.get(t.flow.index)}></path>
    </g>`}),g=s.nodes.map(e=>Z`<rect class="node" x=${e.x} y=${e.y} width=${vg} height=${Math.max(2,e.h).toFixed(1)} rx="2"
        fill=${l.node.get(e.name)}></rect>`);return q`<div class="sankey-wrap">
    <svg
      class="sankey ${u?"dark":""} ${m?"hovering":""}"
      viewBox="0 0 ${i.width} ${i.height}"
      role="img"
      aria-label=${p}
    >
      <g class="links">${f}</g>
      <g class="nodes">${g}</g>
      <g class="labels" aria-hidden="true">${i.labels.map(e=>function(e,t){const o=e.node;if("above"===e.side)return Z`<text class="label" x=${o.x+5} y=${e.y} text-anchor="middle" font-size=${t}>
      <tspan class="name">${e.name}</tspan>${e.value?Z`<tspan class="value">${e.name?" ":""}${e.value}</tspan>`:W}
    </text>`;const n="left"===e.side?o.x-6:o.x+vg+6,a="left"===e.side?"end":"start",r=e.name&&e.value,i=t+3;return Z`<text class="label" x=${n} text-anchor=${a} font-size=${t}>
    ${e.name?Z`<tspan class="name" x=${n} y=${r?e.y-2:e.y+t/3}>${e.name}</tspan>`:W}
    ${e.value?Z`<tspan class="value" x=${n} y=${r?e.y-2+i:e.y+t/3}>${e.value}</tspan>`:W}
  </text>`}(e,i.font))}</g>
    </svg>
    ${function(e,t,o,n){if(!e)return W;const a=(e.source.x+vg+e.target.x)/2,r=(e.y0+e.y1)/2-e.width/2,i=Math.min(Math.max(a,70),t.width-70);return q`<div
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
  </div>`}},Ag=new Set(["unavailable","unknown"]);function Eg(e){return void 0===e||""===e||Ag.has(e)}function Sg(e,t){const o=[];for(let n=0;n<e.length;n++){const a=e[n];if(a.t>=t)break;const r=Math.min(t,n+1<e.length?e[n+1].t:t);if(r<=a.t)continue;const i=o[o.length-1];i&&i.state===a.s&&i.end===a.t?i.end=r:o.push({start:a.t,end:r,state:a.s})}return o}const Cg={on:"amber",open:"amber",opening:"amber",closing:"amber",home:"green",playing:"green",charging:"green",auto:"green",heat_cool:"green",heat:"#ff8100",heating:"#ff8100",preheating:"#ff8100",cool:"#2b9af9",cooling:"#2b9af9",dry:"#efbd07",drying:"#efbd07",fan_only:"#14b8a6",fan:"#14b8a6",paused:"purple",buffering:"purple",detected:"red",problem:"red",triggered:"red",unlocked:"red",jammed:"red",locked:"green",armed_home:"green",armed_away:"green",armed_night:"green",armed_vacation:"green",armed_custom_bypass:"green",arming:"amber",pending:"amber",cleaning:"primary",returning:"purple"},jg=new Set(["off","closed","not_home","away","idle","standby","docked","clear","disarmed","none","false"]),Ng=["primary","purple","#14b8a6","#ec4899","amber","green","blue","red"];function Lg(e){const t=Math.max(0,Math.round(e/1e3));if(t<60)return`${t} s`;const o=Math.round(t/60);if(o<60)return`${o} min`;const n=Math.floor(o/60);if(n<24){const e=o-60*n;return e?`${n} h ${String(e).padStart(2,"0")}`:`${n} h`}const a=Math.floor(n/24),r=n-24*a;return r?`${a} d ${r} h`:`${a} d`}function Tg(e){const t=new Set;for(const o of e)if(!Eg(o.state)){if(!Number.isFinite(Number(o.state))||""===o.state.trim())return!1;t.add(o.state)}return t.size>8}const Fg=new Set(["source","group_by","aggregate"]),Og=[...ls.filter(e=>!Fg.has(e.name)),{name:"bar_labels",path:["bar_labels"],default:"state"},{name:"x_axis",path:["x_axis"],default:!0},{name:"grid_vertical",path:["gridlines","vertical"],default:!0},{name:"tooltip",path:["tooltip"],default:!0},{name:"timeline_legend",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];const Pg={text:{}};function Dg(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?Object.entries(t):[]}function Ug(e,t){const o=new Set(Dg(e).map(([e])=>e)),n=(e.entities??[]).map(e=>"string"==typeof e?e:e.entity),a=n.map(e=>t?.states[e]?.state).filter(e=>!!e);return[...a,"on","off","home","not_home","heat","idle"].find(e=>!o.has(e)&&"unavailable"!==e&&"unknown"!==e)??`state_${o.size+1}`}function Hg(e){const t=Dg(e.config),o=t=>zt(e.hass,t),n=t=>e.commit(function(e,t){const o={...e},n=t.filter(([e])=>""!==e.trim());return n.length?o.state_colors=Object.fromEntries(n.map(([e,t])=>[e.trim(),t])):delete o.state_colors,o}(e.config,t)),a=(e,o)=>a=>{a.stopPropagation();const r=String(a.detail?.value??""),i=t.map(e=>[...e]);1===o&&""===r.trim()||(i[e][o]=r,n(i))};return q`<div class="state-colors" data-section="state-colors">
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
    ${t.map(([r,i],s)=>q`<div class="sc-row">
          <span class="sc-swatch" style="background:${Ce(i)}"></span>
          <ha-selector
            data-role="state"
            .hass=${e.hass}
            .label=${o("editor_state_colors_state")}
            .selector=${Pg}
            .value=${r}
            @value-changed=${a(s,0)}
          ></ha-selector>
          <ha-selector
            data-role="color"
            .hass=${e.hass}
            .label=${o("editor_state_colors_color")}
            .selector=${Pg}
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
      @click=${()=>n([...t,[Ug(e.config,e.hass),"primary"]])}
    >
      ${o("editor_state_colors_add")}
    </button>
  </div>`}const Ig=[{name:"timeline_group",path:["group"]}];const Bg=["state","duration","both","none"],qg={normal:30,compact:22},Zg={normal:24,compact:18};function Rg(e,t,o){const n=t.entity.stateObj??{entity_id:t.entity.entityId,state:o,attributes:{}},a=t.entity.config.attribute;try{return a?e.formatEntityAttributeValue?.(n,a,o)??o:e.formatEntityState?.({...n,state:o},o)??o}catch{return o}}function Wg(e,t,o){return function(e,t,o){const n=o?.[e];if(n)return{color:Ce(n),quiet:!1,text:Le(n)};const a=jg.has(e)&&!Object.prototype.hasOwnProperty.call(Cg,e),r=Object.prototype.hasOwnProperty.call(Cg,e)?Cg[e]:a?"grey":Ng[function(e){let t=0;for(let o=0;o<e.length;o++)t=31*t+e.charCodeAt(o)>>>0;return t}(e)%Ng.length],i=Ce(r);return{color:/^[a-z0-9_]+$/.test(e)&&/^[a-z0-9_]+$/.test(t)?`var(--state-${t}-${e}-color, ${i})`:i,quiet:a,text:a?"theme":Le(r)}}(t,e.domain,function(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?t:void 0}(o))}const Vg=e=>Math.round(1e4*e)/100+"%";function Yg(e,t,o,n){const a=o.raw.bar_labels??"state";return e.spans.map(r=>{if(Eg(r.state))return W;const{left:i,width:s}=function(e,t){const o=t.end-t.start;if(!(o>0))return{left:0,width:0};const n=Math.max(t.start,e.start),a=Math.min(t.end,e.end);return{left:(n-t.start)/o,width:Math.max(0,a-n)/o}}(r,t.range);if(s<=0)return W;const l=r.state,c=Wg(e,l,o.raw),d=function(e,t,o){const n=Lg(o.end-o.start);return"state"===e?t:"duration"===e?n:"both"===e?`${t} · ${n}`:""}(a,Rg(o.hass,e.series,l),r),u=""!==d&&function(e){return 6.2*e.length+10}(d)<=s*n;return q`<div
      class="tl-bar ${c.quiet?"quiet":""} text-${c.text}"
      style="left:${Vg(i)};width:${Vg(s)};--tl-color:${c.color}"
    >
      ${u?q`<span class="tl-label">${d}</span>`:W}
    </div>`})}const Gg={layout:"chart",group:"history",height:200,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
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
  `,thumbnail:()=>Z`
    <rect x="4" y="7" width="56" height="7" rx="3" fill="var(--divider-color, rgba(127,127,127,.25))" />
    <rect x="12" y="7" width="16" height="7" rx="3" fill="var(--warning-color, #f59e0b)" />
    <rect x="40" y="7" width="14" height="7" rx="3" fill="var(--warning-color, #f59e0b)" />
    <rect x="4" y="17" width="56" height="7" rx="3" fill="var(--divider-color, rgba(127,127,127,.25))" />
    <rect x="22" y="17" width="12" height="7" rx="3" fill="var(--primary-color, #03a9f4)" />
    <rect x="34" y="17" width="6" height="7" rx="3" fill="var(--purple-color, #8b6cff)" />
    <rect x="4" y="27" width="56" height="7" rx="3" fill="var(--divider-color, rgba(127,127,127,.25))" />
    <rect x="4" y="27" width="22" height="7" rx="3" fill="var(--success-color, #1fae7a)" />
    <rect x="44" y="27" width="16" height="7" rx="3" fill="var(--success-color, #1fae7a)" />`,validate:function(e){if(Cn(e.period),void 0!==e.source&&"history"!==e.source)throw new Error('"source" must be history: a state timeline reads states, which statistics don\'t keep');if(void 0!==e.group_by)throw new Error('"group_by" does not apply to a state timeline');if(void 0!==e.bar_labels&&!Bg.includes(e.bar_labels))throw new Error(`"bar_labels" must be one of: ${Bg.join(", ")}`);if(void 0!==e.x_axis&&"boolean"!=typeof e.x_axis)throw new Error('"x_axis" must be true or false');const t=e.gridlines;if(void 0!==t&&("object"!=typeof t||null===t||Array.isArray(t)))throw new Error('"gridlines" must have "vertical" (true or false)');if(void 0!==t?.vertical&&"boolean"!=typeof t.vertical)throw new Error('"gridlines.vertical" must be true or false');!function(e,t){if(void 0===e)return;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`${t} must map states to colours, like "on: amber"`);for(const[o,n]of Object.entries(e))if("string"!=typeof n||""===n.trim())throw new Error(`${t}: the colour for "${o}" must be text`)}(e.state_colors,'"state_colors"');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.group&&"string"!=typeof e.group)throw new Error(`"group" of ${o.entity} must be text`)}gr(e),Ka(e)},editor:function(e){const t=$s(`timeline|${cs(e.config)}`,e.hass,()=>{return[...(t=e.hass,o=e.config,ds(t,o).filter(e=>!Fg.has(e.name??"")&&!(e.schema??[]).some(e=>Fg.has(e.name??"")))),{name:"bar_labels",selector:ss(e.hass,"bar_labels",["state","duration","both","none"])},{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]},{name:"timeline_legend",selector:ss(e.hass,"timeline_legend",["above","hidden"])}];var t,o});return q`${ks(e,"chart",t,Og)}${Hg(e)}`},entityFields:function(e){return{schema:$s("timeline_entity",e,()=>[{name:"timeline_group",selector:{text:{}}}]),fields:Ig}},disconnect(e){za(e),Za(e),mr(e)},render(e){const t=Date.now(),o=xa(e,t,{text:!0}),n=Qa(e.raw),a=n.compact?"compact":"normal",r=ka(o,e),i=Math.min(o.range.end,t),s=o.series.map(e=>({series:e,spans:Sg(e.points,i),domain:e.entity.entityId.split(".")[0],measurement:!1}));for(const A of s)A.measurement=Tg(A.spans);const l="hidden"!==n.header,c=(e,t)=>q`<div class="frame ${n.compact?"compact":""}">${e}${t}</div>`,d="ready"!==o.status?Ea(o,e):s.every(e=>e.spans.every(e=>Eg(e.state)))?q`<div class="chart-message">${zt(e.hass,"timeline_no_states")}</div>`:void 0;if(d)return c(r,d);const u=e.config.show.name,h=qa(e),p=Math.max(0,...s.map(e=>e.series.entity.name.length)),m=u?Math.min(.35*h,7*p+10):0,f=Math.max(40,h-32-m),g=function(e,t,o){const n=Math.max(2,Math.min(8,Math.round(o/70))),a=Xo(en(t.hass)),{unit:r,ticks:i}=Qo(e.range,n,a);return{unit:r,ticks:i,x:So([e.range.start,e.range.end],[0,1]),offset:a}}(o,e,f),v=!1!==e.raw.x_axis,y=e.raw.gridlines?.vertical??!0,b=fr(e.raw),_=new Map(s.map(e=>[e.series.index,e])),x=function(e,t){const o=[],n=new Set;for(const a of e){const r=t(a);if(void 0!==r){if(!n.has(r)){n.add(r),o.push({heading:r});for(const n of e)t(n)===r&&o.push({item:n})}}else o.push({item:a})}return o}(o.series.map(e=>_.get(e.index)),e=>(e=>{const t=e.entity.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0})(e.series)),w=o.range.end-o.range.start,$=o.live&&o.range.end>t&&t>o.range.start,k=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_timeline"),names:s.map(e=>e.series.entity.name).join(", ")}),M=b?vr(e,o.range,[Array.from({length:241},(e,t)=>({t:o.range.start+w*t/240,v:null})),...s.map(e=>e.spans.map(e=>({t:e.start,v:null})))]):void 0,z=`--tl-row:${qg[a]}px;--tl-heading:${Zg[a]}px`;return c(q`${r}${l?function(e,t){const o=new Map;for(const a of e)if(!a.measurement)for(const e of a.spans){if(Eg(e.state))continue;const n=Rg(t.hass,a.series,e.state);o.has(n)||o.set(n,{label:n,color:Wg(a,e.state,t.raw)})}if(0===o.size)return W;const n=[...o.values()];return q`<div class="tl-legend">
    ${[...n.filter(e=>!e.color.quiet),...n.filter(e=>e.color.quiet)].map(({label:e,color:t})=>q`<span class="tl-key"
          ><span class="swatch ${t.quiet?"quiet":""}" style="background:${t.color}"></span>${e}</span
        >`)}
  </div>`}(s,e):W}`,q`<div class="tl-wrap ${u?"":"no-names"}" style=${z}>
        ${u?q`<div class="tl-names">
                ${x.map(e=>"heading"in e?q`<div class="tl-heading">${e.heading}</div>`:q`<div
                        class="entity tl-name"
                        data-index=${e.item.series.index}
                        tabindex="0"
                        aria-label=${e.item.series.entity.label}
                      >
                        <span>${e.item.series.entity.name}</span>
                      </div>`)}
              </div>`:W}
        <div
          class="tl-plot plot-area ${M?"hoverable":""}"
          role="img"
          aria-label=${k}
          @pointerdown=${M?.move}
          @pointermove=${M?.move}
          @pointerleave=${M?.leave}
          @pointercancel=${M?.leave}
        >
          ${y?g.ticks.map(e=>q`<div class="tl-grid" style="left:${Vg(g.x(e))}"></div>`):W}
          ${x.map(t=>"heading"in t?q`<div class="tl-gap"></div>`:q`<div class="entity tl-row" data-index=${t.item.series.index}>
                  <div class="tl-track"></div>
                  ${t.item.measurement?q`<div class="tl-hint">${zt(e.hass,"timeline_measurement")}</div>`:q`<div class="tl-bars">${Yg(t.item,o,e,f)}</div>`}
                </div>`)}
          ${$?q`<div class="tl-now" style="left:${Vg(g.x(t))}" title=${zt(e.hass,"timeline_now")}></div>`:W}
          ${b?function(e,t,o,n){const a=pr(o.host);if(void 0===a)return W;const r=(a-t.range.start)/(t.range.end-t.range.start);if(!(r>=0&&r<=1))return W;const i=cr(r,n);return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Vg(r)}"></div>
    <div class="tooltip ${i}" style=${i.startsWith("pin")?"":`left:${Vg(r)}`}>
      <div class="tooltip-time">${rn(a,o.hass)}</div>
      ${e.map(e=>{const t=function(e,t){return e.find(o=>t>=o.start&&(t<o.end||t===o.end&&o===e[e.length-1]))}(e.spans,a),n=t?.state,r=Eg(n),i=r?void 0:Wg(e,n,o.raw),s=void 0===n||""===n?"—":Rg(o.hass,e.series,n);return q`<div class="tooltip-row">
          <span class="swatch" style="background:${i?.color??"transparent"}"></span>
          <span class="tooltip-name">${e.series.entity.name}</span>
          <span class="tooltip-value"
            >${s}${t&&!r?q` <span class="tl-for"
                    >${zt(o.hass,"timeline_for",{duration:Lg(t.end-t.start)})}</span
                  >`:W}</span
          >
        </div>`})}
    </div>
  </div>`}(s,o,e,f):W}
        </div>
        ${v?q`<div class="x-axis">
                ${g.ticks.map(t=>{const o=g.x(t);return q`<span class="axis-label ${o<.05?"start":o>.95?"end":""}" style="left:${Vg(o)}"
                    >${sn(t,g.unit,w,e.hass,g.offset)}</span
                  >`})}
              </div>`:W}
      </div>`)}},Xg={current:"current_temperature",target:"temperature",low:"target_temp_low",high:"target_temp_high",action:"hvac_action"},Jg=Object.keys(Xg);const Kg=["heat","cool","dry","fan"],Qg={heating:"heat",preheating:"heat",cooling:"cool",defrosting:"cool",drying:"dry",fan:"fan"};function ev(e){return void 0===e?void 0:Qg[e]}function tv(e,t){let o=0,n=e.length;for(;o<n;){const a=o+n>>1;e[a].t<=t?o=a+1:n=a}return o>0?e[o-1]:void 0}const ov=e=>(Math.round(100*e)/100).toString();const nv=new Set(["source","group_by","aggregate"]),av=[...ls.filter(e=>!nv.has(e.name)),{name:"set_point",path:["set_point"],default:!0},{name:"shading",path:["shading"],default:!0},{name:"shade_fan",path:["shade_fan"],default:!1},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:Lt},{name:"current_color",path:["current_color"]},{name:"set_point_color",path:["set_point_color"]},{name:"heating_color",path:["heating_color"]},{name:"cooling_color",path:["cooling_color"]},...fs,...ps];function rv(e){return ds(e.hass,e.config).filter(e=>!nv.has(e.name??"")&&!(e.schema??[]).some(e=>nv.has(e.name??"")))}const iv="var(--state-climate-heat-color, #ff8100)",sv="var(--state-climate-cool-color, #2b9af9)",lv="var(--state-climate-dry-color, #efbd07)",cv="var(--state-climate-fan_only-color, #8a8a8a)",dv=["set_point","shading","shade_fan"],uv=["current_color","set_point_color","heating_color","cooling_color"];function hv(e,t,o){if(t.stateObj&&e?.formatEntityAttributeValue){const n=e.formatEntityAttributeValue(t.stateObj,Xg.action,o);if(n)return n}const n=zt(e,`climate_action_${o}`);return n===`climate_action_${o}`?o:n}function pv(e,t,o,n,a){return"number"==typeof t?e.text(t):"number"==typeof o&&"number"==typeof n?zt(a,"climate_range",{low:ja(o,e.decimals,a),high:e.text(n)}):"—"}const mv=e=>Math.round(1e4*e)/100+"%";function fv(e,t,o,n,a,r,i){if(void 0===i)return W;const s=a.x(i)/ga;if(!(s>=0&&s<=1))return W;const l=cr(s,Ra(e)),c=tv(o.current,i),d=tv(o.action,i)?.s,u=ev(d),h=e=>tv(e,i)?.v??void 0,p=c&&null!==c.v?a.y(c.v)/va:-1,m=(e,t,o)=>q`<div class="tooltip-row">
      ${e}<span class="tooltip-name">${t}</span><span class="tooltip-value">${o}</span>
    </div>`;return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${mv(s)}"></div>
    ${p>=0&&p<=1?q`<span
            class="hover-dot"
            style="left:${mv(s)};top:${mv(p)};background:${n.colors.current}"
          ></span>`:W}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${mv(s)}`}>
      <div class="tooltip-time">${rn(i,e.hass)}</div>
      ${m(q`<span class="swatch" style="background:${n.colors.current}"></span>`,t.name,r.text(c?.v))}
      ${n.setPoint?m(q`<span class="swatch set-point-swatch" style="border-color:${n.colors.setPoint}"></span>`,zt(e.hass,"climate_set_point"),pv(r,h(o.target),h(o.low),h(o.high),e.hass)):W}
      ${d?m(q`<span
                class="swatch action-swatch"
                style=${u?`background:${n.colors[u]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
              ></span>`,hv(e.hass,t,d),""):W}
    </div>
  </div>`}const gv=(e,t=!1)=>q`<div class="chart-message ${t?"error":""}">${e}</div>`;const vv={layout:"chart",group:"history",height:240,styles:r`
    ${Ca}
    ${Xa}
    ${wr}
    ${or}
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
  `,thumbnail:()=>Z`
    <rect x="14" y="4" width="14" height="32" fill="var(--state-climate-heat-color, #ff8100)" opacity="0.25" />
    <rect x="40" y="4" width="8" height="32" fill="var(--state-climate-heat-color, #ff8100)" opacity="0.25" />
    <path d="M4 26 H14 V14 H50 V24 H60" fill="none" stroke="var(--error-color, #ef3b5a)" stroke-width="2"
      stroke-dasharray="3 2" />
    <path d="M4 28 C10 30 12 27 16 22 S24 15 30 16 S44 18 50 17 S56 24 60 27" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />`,validate(e){_a(e),Uo(e),gr(e),Bt(e),Ka(e),function(e){if(void 0!==e.source&&"history"!==e.source)throw new Error("\"source\" must be history: long-term statistics don't keep a thermostat's set point or action");if(void 0!==e.group_by)throw new Error('"group_by" is not available on a climate chart');for(const t of dv)if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of uv)if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`)}(e)},editor:function(e){const t=$s(`climate|${cs(e.config)}`,e.hass,()=>[...rv(e),{type:"grid",name:"",schema:[{name:"set_point",selector:{boolean:{}}},{name:"shading",selector:{boolean:{}}},{name:"shade_fan",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"curve",selector:ss(e.hass,"curve",ua)},{name:"line_width",selector:Qt}]},{type:"grid",name:"",schema:[{name:"current_color",selector:{text:{}}},{name:"set_point_color",selector:{text:{}}},{name:"heating_color",selector:{text:{}}},{name:"cooling_color",selector:{text:{}}}]},...gs(e.hass),...ms(e.hass)]);return ks(e,"chart",t,av)},disconnect(e){za(e),Za(e),mr(e)},render(e){const t=Qa(e.raw),o=function(e){const t=(t,o)=>Ce(e[t]??o);return{setPoint:!1!==e.set_point,shading:!1!==e.shading,shadeFan:!0===e.shade_fan,colors:{current:t("current_color","primary"),setPoint:t("set_point_color","red"),heat:t("heating_color",iv),cool:t("cooling_color",sv),dry:lv,fan:cv}}}(e.raw),n=e.items[0],a=Cn(e.raw.period),r=wn(e.hass),i=Date.now(),s=Nn(a,i,r,a.navigate?Tn(e.host,a):0),l={start:s.start,end:s.end},c=function(e,t){const o=t.config?.unit_system,n=e.config.unit??o?.temperature??"°C",a=e.config.decimals??1;return{unit:n,decimals:a,text:e=>"number"==typeof e&&Number.isFinite(e)?Na(ja(e,a,t),n):"—"}}(n,e.hass),d=n.entityId.startsWith("climate."),u=function(e,t,o,n){const{show:a}=e.config;if(!a.name&&!a.value)return W;const r=t.stateObj?.attributes??{},i=t.entityId.startsWith("climate.")&&void 0!==t.stateObj&&!["unavailable","unknown"].includes(t.stateObj.state),s="string"==typeof r[Xg.action]?r[Xg.action]:void 0,l=ev(s),c=(e,t,o)=>q`<div class="entity series-item" data-index="0" tabindex="0" aria-label=${`${t}, ${o}`}>
      ${e} ${a.name?q`<span class="series-name">${t}</span>`:W}
      ${a.value?q`<span class="series-value">${o}</span>`:W}
    </div>`;return q`<div class="series-header">
    ${c(q`<span class="swatch" style="background:${o.colors.current}"></span>`,t.name,i?n.text(r[Xg.current]):t.display)}
    ${o.setPoint&&i?c(q`<span class="swatch set-point-swatch" style="border-color:${o.colors.setPoint}"></span>`,zt(e.hass,"climate_set_point"),pv(n,r[Xg.target],r[Xg.low],r[Xg.high],e.hass)):W}
    ${i&&s?q`<div
            class="entity series-item action-item"
            data-index="0"
            tabindex="0"
            aria-label=${hv(e.hass,t,s)}
          >
            <span
              class="swatch action-swatch"
              style=${l?`background:${o.colors[l]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
            ></span>
            <span class="series-value action-value">${hv(e.hass,t,s)}</span>
          </div>`:W}
  </div>`}(e,n,d?o:{...o,setPoint:!1},c);if(!d)return er({...t,header:"above"},u,gv(zt(e.hass,"climate_not_thermostat",{name:n.name})));const h=function(e){const t={};for(const o of Jg)t[o]="action"===o?{entity:e,attribute:Xg[o],text:!0}:{entity:e,attribute:Xg[o]};return t}(n.entityId),p=da(e.host,e.requestUpdate).get(e.hass,Object.values(h),l,"history",{live:s.live}),m=function(e,t,o,n){const a={};for(const r of Jg){const i=e.get(n(t[r]))??[],s=i[i.length-1],l="action"===r?void 0!==s?.s:null!=s?.v;a[r]=s&&l&&s.t<o?[...i,{...s,t:o,carried:!0}]:i}return a}(p.data,h,Math.min(l.end,i),Xn),f=ka({status:p.status,error:p.error,range:l,period:a,live:s.live,back:s.back,zone:r},e),g=f===W&&u===W?W:q`${f}${u}`,v=o.shadeFan?["heat","cool","dry","fan"]:["heat","cool","dry"],y=o.shading?function(e,t,o=Kg){const n=[];let a;for(const r of e){if(a&&r.s===a.action)continue;a&&(a.end=r.t,a.end>a.start&&n.push(a),a=void 0);const e=ev(r.s);e&&o.includes(e)&&(a={kind:e,action:r.s,start:r.t,end:t})}return a&&t>a.start&&n.push({...a,end:Math.max(a.end,t)}),n}(m.action,Math.min(l.end,i),v):[],b=o.setPoint?[m.current,m.target,m.low,m.high]:[m.current];let _;if("loading"===p.status?_=gv(zt(e.hass,"chart_loading")):"error"===p.status?_=gv(zt(e.hass,"chart_error",{error:p.error??""}),!0):b.every(e=>e.every(e=>null===e.v))&&0===y.length&&(_=gv(zt(e.hass,"chart_no_data"))),_)return er("over"===t.header?{...t,header:"above"}:t,g,_);const x=Wa(e,l,Ao(b)),{scales:w}=x,$=e.raw.line_width??Lt,k=e.raw.curve??"smooth",M=Z`${y.map(e=>Z`<rect
        class="action-span action-${e.kind}"
        x=${w.x(e.start)}
        y="0"
        width=${Math.max(0,w.x(e.end)-w.x(e.start))}
        height=${va}
        fill=${o.colors[e.kind]}
      ></rect>`)}`,z=function(e,t){const o=new Map(t.map(e=>[e.t,e.v]));return e.map(e=>{const t=o.get(e.t);return{t:e.t,v:null!==e.v&&"number"==typeof t?[e.v,t]:null}})}(m.low,m.high),A=o.setPoint?Z`
        <path class="range-band" d=${function(e,t,o){let n="",a=[];const r=e=>{if(!a.length)return;const r=a[a.length-1];if(e>r.t&&a.push({t:e,v:r.v}),a.length>1){const e=a.map(e=>[t(e.t),o(e.v[1])]),r=a.map(e=>[t(e.t),o(e.v[0])]);n+=`M${ov(e[0][0])},${ov(e[0][1])}`;for(let t=1;t<e.length;t++)n+=`H${ov(e[t][0])}V${ov(e[t][1])}`;n+=`V${ov(r[r.length-1][1])}`;for(let t=r.length-2;t>=0;t--)n+=`V${ov(r[t][1])}H${ov(r[t][0])}`;n+="Z"}a=[]};for(const i of e)null===i.v?r(i.t):a.push({t:i.t,v:i.v});return a.length&&r(e[e.length-1].t),n}(z,w.x,w.y)} fill=${o.colors.setPoint}></path>
        ${[m.target,m.low,m.high].map(e=>Z`<path class="set-point" d=${function(e,t){return function(e){const t=[];let o=[];const n=e=>{if(!o.length)return;const n=o[o.length-1];e>n.t&&o.push({t:e,v:n.v}),t.push(o),o=[]};for(const r of e){if(null===r.v){n(r.t);continue}const e=o[o.length-1];e&&e.v===r.v||o.push({t:r.t,v:r.v})}const a=e[e.length-1];return o.length&&n(a.t),t}(e).map(e=>ma(e.map(e=>[t.x(e.t),t.y(e.v)]),"step")).join("")}(e,w)} fill="none" stroke=${o.colors.setPoint}></path>`)}`:W,E=fa(ln(m.current,500)).map(e=>ma(e.map(e=>[w.x(e.t),w.y(e.v)]),k)).join(""),S=Z`${M}${A}<path
      class="current"
      d=${E}
      fill="none"
      stroke=${o.colors.current}
      style="stroke-width:${$}px"
    ></path>`,C=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_climate"),names:n.name}),j=fr(e.raw);return er(t,g,Ga({axes:x,ctx:e,content:S,label:C,overlay:q`${"over"===t.header?tr(g):W}
        ${j?fv(e,n,m,o,w,c,pr(e.host)):W}`,hover:j?vr(e,l,[m.current,m.target,m.low,m.high,m.action]):void 0}))}},yv=[4,8,16];function bv(e,t){const o=360/t;return Math.floor(Un(e)/o+.5)%t}function _v(e,t){return On[e*(16/t)%16]}function xv(e,t,o,n){if(t<0)return null;const a=e[t];return o-a.t<n?a.v:null}function wv(e,t){let o=0;for(let n=0;n<t.length&&t[n]<=e;n++)o=n;return o}const $v=e=>Math.round(100*e)/100||0;function kv(e,t){return[$v(e*Math.sin(t)),$v(-e*Math.cos(t))]}const Mv=ls.filter(e=>"group_by"!==e.name&&"aggregate"!==e.name).map(e=>"period_last"===e.name?{...e,default:30}:"period_unit"===e.name?{...e,default:"day"}:e),zv=[...Mv,{name:"sectors",path:["sectors"],default:"16"},{name:"calm",path:["calm"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function Av(e,t){if(void 0===t)return zt(e.hass,"editor_wind_none");const o="string"==typeof t?t:t.entity;return("string"==typeof t?void 0:t.name)??e.hass?.states[o]?.attributes?.friendly_name??o}const Ev={last:30,unit:"day"};function Sv(e){const t=e.period;return null==t?Cn(Ev):"object"!=typeof t||Array.isArray(t)?Cn(t):Cn({...Ev,...t})}function Cv(e){const t=e.sectors;if(null==t||""===t)return 16;const o="string"==typeof t?Number(t):t;if(!yv.includes(o))throw new Error(`"sectors" must be one of: ${yv.join(", ")}`);return o}function jv(e){const t=e.calm;if(null==t||""===t)return;const o="string"==typeof t?Number(t):t;if("number"!=typeof o||!Number.isFinite(o)||o<0)throw new Error('"calm" must be a number of 0 or more');return o}const Nv=["color-mix(in srgb, var(--primary-color, #2f6fe4) 35%, var(--card-background-color, #fff))","color-mix(in srgb, var(--primary-color, #2f6fe4) 62%, var(--card-background-color, #fff))","var(--primary-color, #2f6fe4)","color-mix(in srgb, var(--primary-color, #2f6fe4) 68%, var(--primary-text-color, #212121))","color-mix(in srgb, var(--purple-color, #8b6cff) 80%, var(--primary-text-color, #212121))"],Lv=(e,t)=>ja(e,Number.isInteger(e)?0:1,t.hass);function Tv(e,t,o){return Number.isFinite(e)?void 0===t?`${Lv(e,o)}+`:`${Lv(e,o)}–${Lv(t,o)}`:void 0===t?"":`< ${Lv(t,o)}`}function Fv(e,t,o=!1){const n=100*e;return 0===n?`${ja(0,0,t.hass)}%`:`${ja(n,o||n<1?1:0,t.hass)}%`}const Ov=new WeakMap;function Pv(e,t){Ov.get(e.host)!==t&&(void 0===t?Ov.delete(e.host):Ov.set(e.host,t),e.requestUpdate())}const Dv=124;function Uv(e,t,o,n){const{rose:a,n:r,bands:i,rings:s}=e,l=2*Math.PI/r,c=.09*l,d=fr(n.raw),u=a.sectors.map((o,s)=>{if(a.totals[s]<=0)return W;const u=s*l-l/2+c,h=s*l+l/2-c;let p=0;const m=o.map((t,o)=>{if(t<=0)return W;const n=function(e,t,o,n){if(t<=e||n<=o)return"";const a=n-o>Math.PI?1:0,[r,i]=kv(t,o),[s,l]=kv(t,n),c=`M${r} ${i}A${t} ${t} 0 ${a} 1 ${s} ${l}`;if(e<=0)return`${c}L0 0Z`;const[d,u]=kv(e,n),[h,p]=kv(e,o);return`${c}L${d} ${u}A${e} ${e} 0 ${a} 0 ${h} ${p}Z`}(e.radius(p),e.radius(p+t),u,h);return p+=t,Z`<path d=${n} style="fill:${i[o].color}"></path>`}),f=_v(s,r),g=t.index>=0;return Z`<g
      class="petal ${g?"entity":""}"
      data-index=${g?t.index:W}
      data-sector=${s}
      tabindex=${g||d?0:W}
      aria-label=${`${f} ${Fv(a.totals[s],n,!0)}`}
      @pointerenter=${d?()=>Pv(n,s):W}
      @pointerleave=${d?()=>Pv(n,void 0):W}
      @focus=${d?()=>Pv(n,s):W}
      @blur=${d?()=>Pv(n,void 0):W}
    >${m}</g>`}),h=function(e){const t=e.length;let o=0,n=1/0;for(let a=0;a<t;a++){const r=(Math.floor(t/8)+a)%t,i=Math.max(e[r],e[(r+1)%t]);i<n-1e-9&&(o=r,n=i)}return 2*(o+.5)*Math.PI/t}(a.totals),p=["N","E","S","W"].map((e,t)=>{const[o,n]=kv(113,t*Math.PI/2);return Z`<text class="compass ${"N"===e?"north":""}" x=${o} y=${n+4}>${e}</text>`});return q`<svg class="rose" viewBox="${-124} ${-124} ${248} ${248}" role="img" aria-label=${o}>
    ${s.map(t=>Z`<circle class="ring" r=${e.radius(t/100)}></circle>`)}
    <circle class="rim" r=${102}></circle>
    <line class="spoke" x1="0" y1=${-102} x2="0" y2=${102}></line>
    <line class="spoke" x1=${-102} y1="0" x2=${102} y2="0"></line>
    <g class="petals">${u}</g>
    <circle class="calm-circle" r=${9}></circle>
    ${p}
    ${s.map(t=>{const[o,a]=kv(e.radius(t/100),h),r=Math.sin(h)>=0?"start":"end";return Z`<text class="ring-label" x=${o+("start"===r?3:-3)} y=${a} text-anchor=${r}>${ja(t,Number.isInteger(t)?0:1,n.hass)}%</text>`})}
  </svg>`}function Hv(e,t,o,n){const a=void 0!==o&&o.index>=0;return q`<div
    class="stat stat-${n} ${a?"entity":""}"
    data-index=${a?o.index:W}
    tabindex=${a?0:W}
  >
    <span class="stat-label">${e}</span>
    <span class="stat-value">${t}</span>
  </div>`}function Iv(e,t,o,n){const a=(e,t)=>zt(n.hass,e,t),{rose:r}=e,i=r.prevailing<0?"—":`${_v(r.prevailing,e.n)} · ${Fv(r.totals[r.prevailing],n)}`,s=e=>null===e?"—":Na(ja(e,o?.decimals??1,n.hass),o?.unit??"");return q`<div class="readout">
    <div class="stats">
      ${Hv(a("wind_prevailing"),i,t.direction,"prevailing")}
      ${o?q`${Hv(a("wind_mean_speed"),s(r.meanSpeed),t.speed,"mean")}
            ${Hv(a("wind_strongest"),s(function(e){let t=null;for(const o of e){const e="number"==typeof o.max&&Number.isFinite(o.max)?o.max:o.v;null!==e&&(null===t||e>t)&&(t=e)}return t}(o.points)),t.speed,"strongest")}
            ${Hv(a("wind_calm"),Fv(r.calm,n),t.speed,"calm")}`:W}
    </div>
    ${o?q`<div class="speed-legend">
            <div class="stat-label">${o.unit?a("wind_speed_unit",{unit:o.unit}):a("wind_speed")}</div>
            <div class="keys">
              ${e.bands.map(e=>q`<div class="key">
                    <span class="key-swatch" style="background:${e.color}"></span>
                    <span class="key-label">${e.label}</span>
                  </div>`)}
            </div>
          </div>`:W}
  </div>`}const Bv={layout:"chart",group:"distribution",height:280,styles:r`
    ${Ca}
    ${wr}
    ${or}
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
  `,thumbnail:()=>Z`
    <circle cx="32" cy="20" r="17" fill="none" stroke="var(--divider-color, #ccc)" stroke-dasharray="2 2" />
    <path d="M32 20 L21 29 A14 14 0 0 1 18 23 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M32 20 L27 34 A15 15 0 0 1 22 32 Z" fill="var(--primary-color, #03a9f4)" opacity="0.7" />
    <path d="M32 20 L23 14 A10 10 0 0 1 26 11 Z" fill="var(--primary-color, #03a9f4)" opacity="0.5" />
    <path d="M32 20 L36 12 A9 9 0 0 1 40 15 Z" fill="var(--primary-color, #03a9f4)" opacity="0.4" />
    <path d="M32 20 L40 24 A9 9 0 0 1 37 27 Z" fill="var(--primary-color, #03a9f4)" opacity="0.4" />`,validate(e){_a(e),Sv(e),gr(e),Ka(e),Cv(e),jv(e)},editor:function(e){const t=$s(`wind_rose|${cs(e.config)}`,e.hass,()=>[...ds(e.hass,e.config).filter(e=>!e.schema?.some(e=>"group_by"===e.name)),{type:"grid",name:"",schema:[{name:"sectors",selector:ss(e.hass,"sectors",yv.map(String))},{name:"calm",selector:{number:{min:0,mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]),o=e.config.entities??[],n={...e,config:(a=e.config,"number"==typeof a.sectors?{...a,sectors:String(a.sectors)}:a),commit:t=>e.commit(function(e){if("string"!=typeof e.sectors)return e;const t=Number(e.sectors);return{...e,sectors:Number.isFinite(t)?t:e.sectors}}(t))};var a;const r="margin: 0 0 12px; color: var(--secondary-text-color); font-size: 0.875em; line-height: 1.4;";return q`<p class="wind-roles" style=${r}>
      ${zt(e.hass,"editor_wind_roles")}
      <br /><b
        >${zt(e.hass,"editor_wind_now",{direction:Av(e,o[0]),speed:Av(e,o[1])})}</b
      >
    </p>
    ${"statistics"===e.config.source?q`<p class="wind-statistics" style=${r}>${zt(e.hass,"editor_wind_statistics")}</p>`:W}
    ${ks(n,"chart",t,zv)}`},disconnect(e){za(e),Ov.delete(e)},render(e){const t={...Qa(e.raw),header:"above"},o=function(e){const t=e.config.entities.length?e.config.entities:e.items.map(e=>e.config),o=t=>t&&{id:t.entity,entity:t,index:e.items.findIndex(e=>e.entityId===t.entity)};return{direction:o(t[0]),speed:o(t[1])}}(e),n=o.direction;if(!n)return q``;const a=function(e,t,o,n=Date.now()){const a=Sv(e.raw),r=e.raw.source??"history",i=wn(e.hass),s=Nn(a,n,i,a.navigate?Tn(e.host,a):0),l={start:s.start,end:s.end},c=[{entity:t.id,attribute:t.entity.attribute,bearing:!0},...o?[{entity:o.id,attribute:o.entity.attribute}]:[]],d="statistics"===r?function(e){return{period:e.end-e.start<=1728e5?"5minute":"hour",types:["mean","max"],value:"mean"}}(l):void 0,u=d?oa[d.period]:1/0,h=d?{start:l.start-u,end:l.end}:l,p=da(e.host,e.requestUpdate).get(e.hass,c,h,r,{live:s.live,statistics:d}),m=e=>p.data.get(Xn(e))??[],f=m(c[0]),g=o?m(c[1]):void 0;return{frame:{status:p.status,error:p.error,range:l,period:a,source:r,series:[],live:s.live,back:s.back,zone:i},direction:f,speed:g?.some(e=>null!==e.v)?g:void 0,until:Math.min(l.end,n),maxHold:u}}(e,n,o.speed),{frame:r}=a,i=ka(r,e),s=q`<div class="chart-message">${zt(e.hass,"chart_no_data")}</div>`,l="ready"!==r.status?Ea(r,e):a.direction.every(e=>null===e.v)?s:void 0;if(l)return er(t,i,l);const c=Cv(e.raw),d=a.speed?o.speed:void 0,u=d?d.entity.unit??(d.entity.attribute?"":String(e.hass.states[d.id]?.attributes?.unit_of_measurement??"")):void 0,h=function(e){switch((e??"").trim().toLowerCase()){case"km/h":case"kmh":case"kph":return{from:[0,12,20,29,39],calm:1.8};case"mph":return{from:[0,8,13,19,25],calm:1.1};case"kn":case"kt":case"kts":case"knot":case"knots":return{from:[0,7,11,17,22],calm:1};case"ft/s":return{from:[0,10,20,30,40],calm:1.6};default:return{from:[0,3,6,9,12],calm:.5}}}(u),p=d?function(e,t,o){return e!==st&&e.length>0?e.map((t,n)=>({from:t.from,color:Ce(t.color),label:t.label??Tv(t.from,e[n+1]?.from,o)})):t.map((e,n)=>({from:e,color:Nv[n%Nv.length],label:Tv(e,t[n+1],o)}))}(si(d.entity.severity,e.hass),h.from,e):[{from:0,color:"var(--primary-color, #2f6fe4)",label:""}],m=d?jv(e.raw)??h.calm:0,f=function(e,t,o,n=1/0){const a=new Set([o]);for(const c of t?[e,t]:[e])for(const e of c)a.add(e.t),Number.isFinite(n)&&a.add(e.t+n);const r=[...a].filter(e=>e<=o).sort((e,t)=>e-t),i=[];let s=-1,l=-1;for(let c=0;c+1<r.length;c++){const o=r[c],a=r[c+1]-o;for(;s+1<e.length&&e[s+1].t<=o;)s++;const d=xv(e,s,o,n);if(null===d)continue;let u=null;if(t){for(;l+1<t.length&&t[l+1].t<=o;)l++;if(u=xv(t,l,o,n),null===u)continue}const h=i[i.length-1];h&&h.dir===d&&h.speed===u?h.ms+=a:i.push({dir:d,speed:u,ms:a})}return i}(a.direction,a.speed,a.until,a.maxHold),g=function(e,t,o,n=0){const a=Math.max(1,o.length),r=Array.from({length:t},()=>new Array(a).fill(0));let i=0,s=0,l=0,c=0;for(const m of e){if(i+=m.ms,null!==m.speed&&(l+=m.ms,c+=m.speed*m.ms,m.speed<n)){s+=m.ms;continue}const e=null===m.speed?0:wv(m.speed,o);r[bv(m.dir,t)][e]+=m.ms}const d=e=>i>0?e/i:0,u=r.map(e=>e.map(d)),h=u.map(e=>e.reduce((e,t)=>e+t,0));let p=-1;return h.forEach((e,t)=>{e>0&&(p<0||e>h[p])&&(p=t)}),{total:i,calm:d(s),sectors:u,totals:h,prevailing:p,meanSpeed:l>0?c/l:null}}(f,c,p.map(e=>e.from),m);if(g.total<=0)return er(t,i,s);const v=function(e){if(!(e>0))return[];const t=e/3,o=10**Math.floor(Math.log10(t)),n=[1,2,2.5,5,10].map(e=>e*o).find(e=>e>=t-1e-9)??10*o,a=Math.max(1,Math.ceil(e/n-1e-9));return Array.from({length:a},(e,t)=>Math.round((t+1)*n*1e3)/1e3)}(100*Math.max(0,...g.totals)),y=(v[v.length-1]??100)/100,b={rose:g,n:c,bands:p,rings:v,radius:e=>10+e/y*90},_=t=>Fv(t,e),x={direction:g.prevailing<0?"":_v(g.prevailing,c),share:g.prevailing<0?"":_(g.totals[g.prevailing]),calm:_(g.calm)},w=zt(e.hass,g.prevailing<0?"wind_aria_still":d?"wind_aria_calm":"wind_aria",x),$=d?{unit:u??"",decimals:d.index>=0?e.items[d.index].decimals:1,points:a.speed??[]}:void 0;return er(t,i,q`<div class="wind">
        <div class="rose-wrap">
          ${Uv(b,n,w,e)} ${function(e,t,o){const n=Ov.get(o.host);if(!(void 0!==n&&fr(o.raw)&&e.rose.totals[n]>0))return W;const a=2*n*Math.PI/e.n,[r,i]=kv(e.radius(e.rose.totals[n]),a),s=r>0?"left":"right",l=void 0===t?[{color:e.bands[0].color,name:zt(o.hass,"wind_share"),share:e.rose.totals[n]}]:e.rose.sectors[n].map((o,n)=>({color:e.bands[n].color,name:Na(e.bands[n].label,t),share:o})).filter(e=>e.share>0);return q`<div class="hover-layer" aria-hidden="true">
    <div
      class="tooltip rose-tip ${s}"
      style="left:${(r+Dv)/248*100}%;top:${(i+Dv)/248*100}%"
    >
      <div class="tooltip-time">${_v(n,e.n)} · ${Fv(e.rose.totals[n],o,!0)}</div>
      ${l.map(e=>q`<div class="tooltip-row">
            <span class="swatch" style="background:${e.color}"></span>
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${Fv(e.share,o,!0)}</span>
          </div>`)}
    </div>
  </div>`}(b,$?$.unit:void 0,e)}
        </div>
        ${Iv(b,{direction:n,speed:d},$,e)}
      </div>`)}},qv=2*Math.PI,Zv=1440,Rv=6e4,Wv=["on","open","opening","closing","home","playing","heating","cooling","drying","active","running","cleaning","detected"],Vv=new Set(["unavailable","unknown"]);function Yv(e){return void 0===e||""===e||Vv.has(e)}function Gv(e,t,o,n){const a=e[e.length-1];a&&a.end===t?a.end=o:e.push(n?{start:t,end:o,carried:n}:{start:t,end:o})}function Xv(e,t){const o=[];for(const n of e){const e=Math.max(t.start,n.start),a=Math.min(t.end,n.end);if(a<=e)continue;const r=!0===n.carried||n.start<t.start;o.push(r?{start:e,end:a,carried:r}:{start:e,end:a})}return o}function Jv(e){return e.filter(e=>!e.carried).length}function Kv(e,t,o){return(e+fn(e,o)-(t+fn(t,o)))/Rv}function Qv(e,t,o){const n=e.start,a=e.end,r=fn(n,o),i=fn(Math.max(n,a-1e3),o),s=t+fn(t,o),l=(e,t)=>(e=>Math.min(Zv,Math.max(0,e)))((e+t-s)/Rv);if(r===i)return[[l(n,r),l(a,r)]];const c=function(e,t,o){const n=fn(e,o);for(;t-e>1e3;){const a=Math.floor((e+t)/2);fn(a,o)===n?e=a:t=a}return 1e3*Math.floor(t/1e3)}(n,a-1e3,o);return[[l(n,r),l(c,r)],[l(c,i),l(a,i)]].filter(([e,t])=>t>e)}function ey(e){return e/Zv*qv}function ty(e,[t,o]){const n=Math.max(0,Math.ceil(t-.5)),a=Math.min(Zv,Math.ceil(o-.5));for(let r=n;r<a;r++)e[r]=1}const oy=[15,30,60];function ny(e,t){const o=t*Rv,n=[];for(let a=e.start;a<e.end;a+=o)n.push(a);return n.push(e.end),n}const ay=new Set(["sum","change"]);function ry(e,t){if("max"===t)return Math.max(...e);if("min"===t)return Math.min(...e);if("first"===t)return e[0];if("last"===t)return e[e.length-1];const o=e.reduce((e,t)=>e+t,0);return ay.has(t)?o:o/e.length}function iy(e){return ay.has(e)}function sy(e){const t=Math.max(0,Math.round(e/Rv)),o=Math.floor(t/60),n=t-60*o;return 0===o?`${n} m`:n?`${o} h ${n} m`:`${o} h`}function ly(e,t){return[cy(e*Math.sin(t)),cy(-e*Math.cos(t))]}function cy(e){return Math.round(100*e)/100||0}function dy(e,t,o,n){if(t<=0||n<=o)return"";const a=Math.max(0,e);if(n-o>=qv-1e-6){const e=(e,t)=>{const[o,n]=ly(e,0),[a,r]=ly(e,Math.PI);return`M${o} ${n}A${e} ${e} 0 1 ${t} ${a} ${r}A${e} ${e} 0 1 ${t} ${o} ${n}Z`};return a>0?`${e(t,1)}${e(a,0)}`:e(t,1)}const r=n-o>Math.PI?1:0,[i,s]=ly(t,o),[l,c]=ly(t,n),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===a)return`${d}L0 0Z`;const[u,h]=ly(a,n),[p,m]=ly(a,o);return`${d}L${u} ${h}A${a} ${a} 0 ${r} 0 ${p} ${m}Z`}const uy=[{name:"days",path:["days"],default:1},{name:"period_offset",path:["period","offset"],default:0},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"center",path:["center"],default:"total"},{name:"bucket",path:["bucket"],default:"60"},{name:"aggregate",path:["aggregate"],default:"auto"},{name:"tooltip",path:["tooltip"],default:!0}];const hy=[{type:"grid",name:"",schema:[{name:"ring_color",selector:{text:{}}},{name:"active",selector:{text:{multiple:!0}}}]}],py=[{name:"ring_color",path:["color"]},{name:"active",path:["active"]}];const my=["total","now","none"],fy=new Set(["alarm_control_panel","automation","binary_sensor","calendar","climate","cover","device_tracker","fan","humidifier","input_boolean","lawn_mower","light","lock","media_player","person","remote","schedule","script","siren","switch","timer","vacuum","valve","water_heater"]),gy=e=>e.split(".")[0];function vy(e){const t=e.config.active;if("string"==typeof t&&""!==t.trim()||Array.isArray(t)&&t.length>0)return"state";if(fy.has(gy(e.entityId)))return"state";const o=e.stateObj?.attributes??{};if(!e.config.attribute&&(void 0!==o.unit_of_measurement||void 0!==o.state_class))return"numeric";const n=e.stateObj?.state,a="string"==typeof n&&""!==n.trim()&&Number.isFinite(Number(n));return e.available&&a?"numeric":"state"}function yy(e,t){return e.config.attribute?e.config.attribute:"state"===t&&"climate"===gy(e.entityId)?"hvac_action":void 0}function by(e,t){if(void 0!==t.aggregate)return t.aggregate;const o=e.stateObj?.attributes?.state_class;return"total_increasing"===o||"total"===o?"change":"mean"}function _y(e,t,o,n){const a=t.stateObj;let r=o.replace(/_/g," ");if(a){const t=n?e.formatEntityAttributeValue?.(a,n,o):e.formatEntityState?.(a,o);t&&(r=t)}return r.toLocaleLowerCase()}function xy(e,t){const o=Math.round(e)%Zv,n=Date.UTC(2e3,0,1,Math.floor(o/60),o%60);return new Intl.DateTimeFormat(t?.locale?.language??"en",{hour:"numeric",minute:"2-digit",hour12:tn(t),timeZone:"UTC"}).format(n)}function wy(e,t,o){return Na(ja(e,t.decimals,o),t.unit)}function $y(e,t=Date.now()){const{raw:o,hass:n}=e,a=o.days??1,r=Number(o.bucket??60),i=function(e,t){const o=Cn(e.period);return 1===t?{last:1,unit:"day",calendar:"day",offset:o.offset,navigate:o.navigate,until:"end"}:{last:t,unit:"day",offset:o.offset,navigate:o.navigate,until:"end"}}(o,a),s=Math.max(0,i.offset+(i.navigate?Tn(e.host,i):0)),l=wn(n),c=function(e,t,o,n){const a=bn("day",yn("day",e,t),-n*o,t),r=[];for(let i=o-1;i>=-1;i--)r.push(bn("day",a,-i,t));return r}(t,l,a,s),d=0===s,u=c[c.length-1],h=Math.min(u,t),p=e.items.map(vy),m=e.items.map((e,t)=>({entity:e.entityId,attribute:yy(e,p[t]),text:!0})),f=da(e.host,e.requestUpdate).get(n,m,{start:c[0],end:d?t:u},"history",{live:d}),g={start:c[0],end:h},v=Math.max(1,c.slice(0,-1).filter(e=>e<h).length),y=e.items.map((e,t)=>{const i=p[t],s=e.config,d=e.stateObj?f.data.get(Xn(m[t]))??[]:[],u={index:t,entity:e,kind:i,color:Ce(s.color??ya[t%ya.length]),missing:!e.stateObj,hasData:!1,intervals:[],runs:[],slots:[],heights:[],aggregate:by(e,o),totalMs:0,count:0,stat:""};if("state"===i){const e=function(e){if("string"==typeof e&&""!==e.trim())return new Set([e.trim()]);if(Array.isArray(e)){const t=e.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>e.trim());if(t.length)return new Set(t)}return new Set(Wv)}(s.active),t=function(e,t,o){const n={active:[],known:[]};for(let a=0;a<e.length;a++){const r=e[a],i=a+1<e.length?e[a+1].t:t.end,s=Math.max(t.start,r.t),l=Math.min(t.end,i);if(l<=s||Yv(r.s))continue;const c=!0===r.carried||r.t<t.start;Gv(n.known,s,l,c),o.has(r.s)&&(Gv(n.active,s,l,c),n.word=r.s)}return n}(d,g,e);u.hasData=t.known.length>0,u.word=t.word;const o=t.active;1===a?u.intervals=o:u.runs=function(e,t,o,n){const a=new Uint16Array(Zv),r=new Uint16Array(Zv);for(let s=0;s+1<o.length;s++){const i={start:o[s],end:o[s+1]},l=new Uint8Array(Zv),c=new Uint8Array(Zv);for(const e of Xv(t,i))for(const t of Qv(e,i.start,n))ty(c,t);for(const t of Xv(e,i))for(const e of Qv(t,i.start,n))ty(l,e);for(let e=0;e<Zv;e++)r[e]+=c[e],a[e]+=l[e]&c[e]}const i=[];for(let s=0;s<Zv;s++){if(0===a[s])continue;const e=i[i.length-1];e&&e.to===s&&e.on===a[s]&&e.of===r[s]?e.to=s+1:i.push({from:s,to:s+1,on:a[s],of:r[s]})}return i}(o,t.known,c,l.timeZone),u.totalMs=o.reduce((e,t)=>e+t.end-t.start,0)/v;let r=0;for(let n=0;n+1<c.length;n++)r+=Jv(Xv(o,{start:c[n],end:c[n+1]}));u.count=r/v;const i=e=>1===a?e:zt(n,"day_clock_a_day",{text:e}),h=[i(sy(u.totalMs))];u.count>0&&h.push(i(function(e,t){const o=Math.round(10*t)/10;return 1===o?zt(e,"day_clock_times_one"):zt(e,"day_clock_times",{n:o})}(n,u.count))),u.stat=h.join(" · ")}else{const t=d.map(e=>({...e,v:In(e.s),s:void 0}));u.slots=function(e,t,o,n,a,r){const i=new Map;for(let s=0;s+1<t.length;s++){const l={start:t[s],end:t[s+1]};if(l.start>=a)break;const c=ea(e,ny(l,o),n,a),d=new Map;for(const e of c){if(null===e.v)continue;const t=Math.floor(Kv(e.t,l.start,r)/o);t<0||t*o>=Zv||d.set(t,[...d.get(t)??[],e.v])}for(const[e,t]of d)i.set(e,[...i.get(e)??[],ry(t,n)])}return[...i.entries()].sort((e,t)=>e[0]-t[0]).map(([e,t])=>({index:e,v:t.reduce((e,t)=>e+t,0)/t.length,days:t.length}))}(t,c,r,u.aggregate,h,l.timeZone);const o=iy(u.aggregate);if(u.heights=function(e,t){if(0===e.length)return[];const o=e.map(e=>e.v);if(t){const e=Math.max(...o.map(Math.abs));return o.map(t=>e>0?Math.abs(t)/e:0)}const n=Math.min(...o),a=Math.max(...o);return o.map(e=>a>n?.15+.85*(e-n)/(a-n):1)}(u.slots,o),u.hasData=u.slots.length>0,u.hasData){const t=u.slots.reduce((e,t)=>t.v>e.v?t:e),i=xy(t.index*r,n);if(o){const t=wy(u.slots.reduce((e,t)=>e+t.v,0),e,n);u.stat=zt(n,"day_clock_busiest",{total:1===a?t:zt(n,"day_clock_a_day",{text:t}),time:i})}else u.stat=zt(n,"day_clock_peak",{value:wy(t.v,e,n),time:i})}}return u.missing?u.stat=zt(n,"entity_not_found"):u.hasData||"ready"!==f.status||(u.stat=zt(n,"day_clock_no_data")),u});return{status:f.status,error:f.error,rings:y,bounds:c,days:a,bucket:r,live:d,now:t,period:i,back:s,zone:l}}const ky=new WeakMap;function My(e){let t=ky.get(e);return t||(t={},ky.set(e,t)),t}function zy(e,t,o){const n=My(e.host);void 0!==n.timer&&clearTimeout(n.timer),n.timer=void 0,n.ring===t&&n.item===o||(n.ring=t,n.item=o,e.requestUpdate())}const Ay=new WeakMap;function Ey(e,t){if(Ay.has(e.host))return;const o=6e4-t%6e4+50;Ay.set(e.host,setTimeout(()=>{Ay.delete(e.host),"undefined"!=typeof document&&"hidden"===document.visibilityState?Ey(e,Date.now()):e.requestUpdate()},o))}const Sy=-132,Cy=-120,jy=264,Ny=240,Ly=92;function Ty(e,t,o){const n=ky.get(e.host);if(void 0===n?.ring||void 0===n.item)return W;const a=t.rings[n.ring],r=o[n.ring]?.[n.item];if(!a||!r)return W;const{time:i,value:s}=function(e,t,o,n){const a=(e,t)=>zt(n,"day_clock_range",{from:e,to:t});if("numeric"===e.kind){const r=e.slots[t],i=a(xy(r.index*o.bucket,n),xy((r.index+1)*o.bucket,n)),s=wy(r.v,e.entity,n);return{time:i,value:1===o.days?s:zt(n,"day_clock_average_value",{value:s})}}if(o.days>1){const o=e.runs[t];return{time:a(xy(o.from,n),xy(o.to,n)),value:zt(n,"day_clock_on_days",{on:o.on,of:o.of})}}const r=e.intervals[t],i=o.live&&r.end>=o.now-1e3,s=i?zt(n,"day_clock_now").toLocaleLowerCase():an(r.end,n),l=sy(r.end-r.start);return{time:a(an(r.start,n),s),value:i?zt(n,"day_clock_so_far",{duration:l}):l}}(a,r.item,t,e.hass),[l,c]=ly(r.r+4,r.angle);return q`<div class="dc-tip tooltip ${`${l<0?"tip-right":"tip-left"} ${c<0?"tip-down":"tip-up"}`}" style="left:${(l-Sy)/jy*100}%;top:${(c-Cy)/Ny*100}%" aria-hidden="true">
    <div class="tooltip-time">${i}</div>
    <div class="tooltip-row">
      <span class="swatch" style="background:${a.color}"></span>
      <span class="tooltip-name">${a.entity.name}</span>
      <span class="tooltip-value">${s}</span>
    </div>
  </div>`}function Fy(e,t,o){const n=t.toLocaleLowerCase().includes(o.toLocaleLowerCase())?zt(e,"day_clock_on"):o;return zt(e,"day_clock_state",{name:t,state:n})}function Oy(e,t){const o=e.entity;if(!o.stateObj)return o.display;if("numeric"===e.kind)return zt(t,"day_clock_state",{name:o.name,state:o.display});const n=yy(o,"state"),a=n?o.stateObj.attributes?.[n]:o.stateObj.state;return"string"!=typeof a?zt(t,"day_clock_state",{name:o.name,state:o.display}):Fy(t,o.name,_y(t,o,a,n))}function Py(e){return e.rings.find(e=>!e.missing)}function Dy(e,t,o){const n=Math.min(o,t/Math.max(1,.56*e.length)),a=.62*o;if(n>=a)return{size:n,text:e};const r=Math.max(3,Math.floor(t/(.56*a))-1);return{size:a,text:`${e.slice(0,r).trimEnd()}…`}}function Uy(e,t,o){const n=function(e,t){const o=e.raw.center??"total";if("none"===o||0===t.rings.length)return;const{hass:n}=e,a=Py(t);if("now"===o&&t.live&&1===t.days&&a)return[an(t.now,n),Oy(a,n)];const r=t.rings.find(e=>"state"===e.kind&&e.hasData);if(r){const e=r.word?_y(n,r.entity,r.word,yy(r.entity,"state")):zt(n,"day_clock_on"),o=Fy(n,r.entity.name,e);return[sy(r.totalMs),1===t.days?o:zt(n,"day_clock_per_day",{label:o})]}const i=t.rings.find(e=>"numeric"===e.kind&&e.hasData);if(!i)return;const s=iy(i.aggregate)?wy(i.slots.reduce((e,t)=>e+t.v,0),i.entity,n):i.entity.display;return[s,i.entity.name]}(e,t);if(!n)return W;const a=Math.min(18,.4*o),r=Math.min(11,.25*o),i=(1.05*a+1.3*r)/2,s=2*Math.sqrt(Math.max(0,o*o-i*i))-8,l=Dy(n[0],s,a),c=Dy(n[1],s,r),d=.3*l.size+c.size,u=(-.75*l.size+d+.3*c.size)/2;return Z`<g class="dc-centre" aria-hidden="true">
    <text class="dc-centre-value" y=${-u} font-size=${l.size}>${l.text}</text>
    <text class="dc-centre-label" y=${d-u} font-size=${c.size}>${c.text}</text>
  </g>`}function Hy(e,t){const o=function(e,t=92,o=44){const n=e.map(e=>"state"===e?15:22),a=n.reduce((e,t)=>e+t,0)+4*Math.max(0,e.length-1),r=t-o,i=a>r?r/a:1,s=[];let l=t;for(const c of n){const e=c*i;s.push({r0:l-e,r1:l}),l-=e+4*i}return{rings:s,hole:s.length?s[s.length-1].r0:t}}(t.rings.map(e=>e.kind),Ly),n=fr(e.raw),a=t.rings.map((e,n)=>{const{r0:a,r1:r}=o.rings[n];return"state"===e.kind?function(e,t,o,n){const a=t.zone.timeZone;return 1===t.days?e.intervals.map((e,r)=>{const i=Qv(e,t.bounds[0],a),s=i.map(([e,t])=>dy(o,n,ey(e),ey(t))).join("");return{d:s,angle:ey(i.length?(i[0][0]+i[i.length-1][1])/2:0),r:n,item:r}}):e.runs.map((e,t)=>({d:dy(o,n,ey(e.from),ey(e.to)),angle:ey((e.from+e.to)/2),r:n,opacity:Math.max(.12,e.on/Math.max(1,e.of)),item:t}))}(e,t,a,r):function(e,t,o,n){const a=Zv/t.bucket,r=Math.min(.03,qv/a/8),i=iy(e.aggregate),s=[];return e.slots.forEach((t,l)=>{if(i&&0===t.v)return;const c=t.index/a*qv+r,d=(t.index+1)/a*qv-r,u=o+Math.max(.04,e.heights[l])*(n-o);s.push({d:dy(o,u,c,d),angle:(c+d)/2,r:u,item:l})}),s}(e,t,a,r)}),r=ky.get(e.host),i=t.rings.map((i,s)=>{const{r0:l,r1:c}=o.rings[s],d=1===t.days&&a[s].length<=48,u="state"===i.kind?Z`<path class="dc-track" d=${dy(l,c,0,qv)}></path>`:Z`<circle class="dc-base" r=${l}></circle>`;return Z`<g
      class="entity dc-ring ${i.kind}"
      data-index=${i.index}
      tabindex="0"
      role="group"
      aria-label=${`${i.entity.name}, ${i.stat}`}
    >
      ${u}
      ${a[s].map((t,o)=>Z`<path
            class="dc-mark ${r?.ring===s&&r.item===o?"hover":""}"
            d=${t.d}
            fill=${i.color}
            fill-opacity=${t.opacity??W}
            tabindex=${d?"0":W}
            @pointerenter=${n?()=>zy(e,s,o):W}
            @pointerdown=${n?()=>zy(e,s,o):W}
            @pointerleave=${n?t=>function(e,t){if("touch"!==t.pointerType&&"pen"!==t.pointerType)return void zy(e,void 0,void 0);const o=My(e.host);void 0!==o.timer&&clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=void 0,zy(e,void 0,void 0)},dr)}(e,t):W}
            @focus=${n?()=>zy(e,s,o):W}
            @blur=${n?()=>zy(e,void 0,void 0):W}
          ></path>`)}
    </g>`}),s=function(e){const t=e?.locale?.language??"en";let o=tn(e);if(void 0===o)try{o=!0===new Intl.DateTimeFormat(t,{hour:"numeric"}).resolvedOptions().hour12}catch{o=!1}return o?[0,6,12,18].map(e=>new Intl.DateTimeFormat(t,{hour:"numeric",hour12:!0,timeZone:"UTC"}).format(Date.UTC(2e3,0,1,e))):["00","06","12","18"]}(e.hass),l=Array.from({length:24},(e,t)=>{const o=t/24*qv,n=t%6==0,[a,r]=ly(95,o),[i,s]=ly(Ly+(n?9:6),o);return Z`<line class="dc-tick ${n?"major":""}" x1=${a} y1=${r} x2=${i} y2=${s}></line>`}),c=Z`
    <text class="dc-label" x="0" y=${-107} text-anchor="middle">${s[0]}</text>
    <text class="dc-label" x=${104} y="3.5" text-anchor="start">${s[1]}</text>
    <text class="dc-label" x="0" y=${114} text-anchor="middle">${s[2]}</text>
    <text class="dc-label" x=${-104} y="3.5" text-anchor="end">${s[3]}</text>`;let d=W;if(t.live&&1===t.days){const e=ey(Kv(t.now,t.bounds[0],t.zone.timeZone)),[n,a]=ly(o.hole,e),[r,i]=ly(101,e);d=Z`
      <path class="dc-future" d=${dy(o.hole-1,93,e,qv)}></path>
      <line class="dc-hand" x1=${n} y1=${a} x2=${r} y2=${i}></line>
      <circle class="dc-hand-dot" cx=${r} cy=${i} r="2.6"></circle>`}const u=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_day_clock"),names:t.rings.map(e=>e.entity.name).join(", ")});return q`<div class="dc-dial">
    <svg class="dc-svg" viewBox="${Sy} ${Cy} ${jy} ${Ny}" role="img" aria-label=${u}>
      ${l}${c}
      <g class="dc-marks">${i}</g>
      ${d} ${Uy(e,t,o.hole)}
    </svg>
    ${n?Ty(e,t,a):W}
  </div>`}function Iy(e,t,o=!1){return q`<div class="frame">
    ${e}
    <div class="chart-message ${o?"error":""}">${t}</div>
  </div>`}const By={layout:"chart",group:"history",height:280,styles:r`
    ${Ca}
    ${wr}
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
  `,thumbnail:()=>Z`
    <circle cx="32" cy="20" r="15" fill="none" stroke="var(--divider-color, #ccc)" stroke-width="5" />
    <path d="M32 5 A15 15 0 0 1 46.5 16" fill="none" stroke="var(--error-color, #db4437)" stroke-width="5" />
    <path d="M38 33.8 A15 15 0 0 1 22 31" fill="none" stroke="var(--error-color, #db4437)" stroke-width="5" />
    <circle cx="32" cy="20" r="8" fill="none" stroke="var(--divider-color, #ccc)" stroke-width="3" />
    <path d="M32 12 A8 8 0 0 1 39.5 17.5" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="3" />
    <line x1="32" y1="20" x2="19" y2="28" stroke="var(--primary-text-color, #212121)" stroke-width="1.5"
      stroke-linecap="round" />`,validate:function(e){gr(e),Cn(e.period);const t=e.days;if(void 0!==t&&("number"!=typeof t||!Number.isInteger(t)||t<1||t>31))throw new Error('"days" must be a whole number from 1 to 31');if(void 0!==e.center&&!my.includes(e.center))throw new Error(`"center" must be one of: ${my.join(", ")}`);if(void 0!==e.bucket&&!oy.includes(Number(e.bucket)))throw new Error(`"bucket" must be one of: ${oy.join(", ")}`);if(void 0!==e.aggregate&&!Kn.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Kn.join(", ")}`);for(const o of e.entities??[]){if("object"!=typeof o||null===o)continue;const e=o.active;if(void 0===e)continue;const t="string"==typeof e&&""!==e.trim()||Array.isArray(e)&&e.every(e=>"string"==typeof e);if(!t)throw new Error('"active" must be a state or a list of states')}},editor:function(e){var t;return ks({...e,config:(t=e.config,"number"==typeof t.bucket?{...t,bucket:String(t.bucket)}:t),commit:t=>e.commit(function(e){return"string"==typeof e.bucket?{...e,bucket:Number(e.bucket)}:e}(t))},"chart",$s("day_clock",e.hass,()=>{return[{type:"grid",name:"",schema:[{name:"days",selector:{number:{min:1,max:31,mode:"box"}}},{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"center",selector:ss(t=e.hass,"day_clock_center",["total","now","none"])},{type:"grid",name:"",schema:[{name:"bucket",selector:ss(t,"bucket",oy.map(String))},{name:"aggregate",selector:ss(t,"aggregate",["auto",...Kn])}]},{name:"tooltip",selector:{boolean:{}}}];var t}),uy)},entityFields:function(){return{schema:hy,fields:py}},disconnect(e){za(e),function(e){const t=Ay.get(e);void 0!==t&&clearTimeout(t),Ay.delete(e)}(e);const t=ky.get(e);void 0!==t?.timer&&clearTimeout(t.timer),ky.delete(e)},render(e){const t=$y(e);t.live&&Ey(e,t.now);const o=ka({period:t.period,range:{start:t.bounds[0],end:t.bounds[t.bounds.length-1]},back:t.back,zone:t.zone},e,t.now);return"loading"===t.status?Iy(o,zt(e.hass,"chart_loading")):"error"===t.status?Iy(o,zt(e.hass,"chart_error",{error:t.error??""}),!0):t.rings.every(e=>!e.hasData)?Iy(o,zt(e.hass,"chart_no_data")):q`<div class="frame">
      ${o}
      <div class="dc-body">${Hy(e,t)} ${function(e,t){const{hass:o}=e;let n=W;return t.days>1?n=q`<div class="dc-foot">
      <div class="dc-stat">${zt(o,"day_clock_average",{n:t.days})}</div>
    </div>`:t.live&&Py(t)&&(n=q`<div class="dc-foot">
      <div class="dc-stat">${zt(o,"day_clock_now")}</div>
      <div class="dc-now">${an(t.now,o)} · ${Oy(Py(t),o)}</div>
    </div>`),q`<div class="dc-legend">
    ${t.rings.map(e=>q`<div class="dc-item ${e.missing?"missing":""}">
          <span class="dc-swatch" style="background:${e.color}"></span>
          <div class="dc-text">
            <div class="dc-name">${e.entity.name}</div>
            <div class="dc-stat">${e.stat}</div>
          </div>
        </div>`)}
    ${n}
  </div>`}(e,t)}</div>
    </div>`}};function qy(e,t){if(null!=e&&""!==e){if("number"==typeof e&&Number.isFinite(e))return{value:e,soft:!1};if("string"==typeof e){const t=e.trim(),o=t.startsWith("~"),n=Number(o?t.slice(1):t);if(""!==t&&"~"!==t&&Number.isFinite(n))return{value:n,soft:o}}throw new Error(`"${t}" must be a number, or ~ and a number for a soft limit (e.g. "~0")`)}}function Zy(e,t={}){let[o,n]=e??[t.min?.value??0,t.max?.value??1];if(t.fromZero&&(o>0&&(o=0),n<0&&(n=0)),void 0!==t.minRange&&n-o<t.minRange){const e=(o+n)/2;o=e-t.minRange/2,n=e+t.minRange/2}let[a,r]=Eo([o,n],.1);t.fromZero&&0===o&&(a=0),t.fromZero&&0===n&&(r=0);const{min:i,max:s}=t;return i&&(a=i.soft&&o<i.value?a:i.value),s&&(r=s.soft&&n>s.value?r:s.value),r<=a&&(r=a+1),[a,r]}function Ry(e,t,o){const n=[];for(const c of e){const e=Math.min(c.end??c.t,o);if(c.t>=o)break;n.push({...c,start:c.t,end:e,t:Math.round((c.t+e)/2)})}const a=n.filter(e=>null!==e.v);if(0===a.length)return n;const r=n[0],i=n[n.length-1],s=[...n];null!==r.v&&r.t>t.start&&s.unshift({t:t.start,v:r.v,carried:!0});const l=Math.min(t.end,o);return null!==i.v&&i.t<l&&s.push({t:l,v:i.v,carried:!0}),s}function Wy(e,t){if(void 0!==e&&!Kn.includes(e))throw new Error(`${t} must be one of: ${Kn.join(", ")}`)}const Vy=[...ls,{name:"points_per_hour",path:["points_per_hour"],default:.5},{name:"graph",path:["graph"],default:"line"},{name:"fill",path:["fill"],default:"fade"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:Lt},{name:"points",path:["points"],default:"hover"},{name:"labels",path:["labels"],default:"hover"},{name:"height",path:["height"],default:150},{name:"bar_spacing",path:["bar_spacing"],default:4},{name:"color_transition",path:["color_transition"],default:"smooth"},{name:"extrema",path:["extrema"],default:!1},{name:"average",path:["average"],default:!1},{name:"legend",path:["legend"],default:!0},{name:"trend_y_min",path:["y_min"]},{name:"trend_y_max",path:["y_max"]},{name:"min_range",path:["min_range"]},{name:"y_min_secondary",path:["y_min_secondary"]},{name:"y_max_secondary",path:["y_max_secondary"]},{name:"min_range_secondary",path:["min_range_secondary"]},{name:"value_factor",path:["value_factor"],default:0},{name:"align_header",path:["align_header"],default:"default"},{name:"align_icon",path:["align_icon"],default:"right"},{name:"align_state",path:["align_state"],default:"left"},{name:"font_size",path:["font_size"],default:100},{name:"font_size_header",path:["font_size_header"]},{name:"color_name",path:["color_name"],default:!1},{name:"color_value",path:["color_value"],default:!1},{name:"trend_color_icon",path:["color_icon"],default:!1},{name:"group",path:["group"],default:!1},{name:"icon_image",path:["icon_image"]},{name:"trend_tooltip",path:["tooltip"],default:!0}],Yy=(...e)=>({type:"grid",name:"",schema:e}),Gy=e=>({name:e,selector:{boolean:{}}}),Xy=(e,t,o,n="any")=>({name:e,selector:{number:{mode:"box",step:n,...void 0!==t?{min:t}:{},...void 0!==o?{max:o}:{}}}}),Jy=e=>({name:e,selector:{text:{}}});function Ky(e){const t={};for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"])"number"==typeof e[o]&&(t[o]=String(e[o]));return t}const Qy=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"entity_aggregate",path:["aggregate"]},{name:"y_axis_side",path:["y_axis"],default:"primary"},{name:"fixed_value",path:["fixed_value"],default:!1},{name:"show_graph",path:["show_graph"],default:!0},{name:"show_line",path:["show_line"],default:!0},{name:"show_fill",path:["show_fill"],default:!0},{name:"show_points",path:["show_points"]},{name:"show_legend_entity",path:["show_legend"],default:!0},{name:"show_legend_state",path:["show_legend_state"],default:!1},{name:"show_indicator",path:["show_indicator"],default:!1},{name:"show_state",path:["show_state"],default:!1}];const eb=["line","bar","none"],tb=["solid","fade","none"],ob=["hover","always","never"],nb=["default","left","right","center"],ab=["right","left","state"],rb=["left","right","center"],ib=["smooth","hard"];function sb(e,t){return void 0===e?t:!0===e?"always":!1===e?"never":e}function lb(e){return void 0===e||!0===e?"fade":!1===e?"none":e}const cb=e=>"number"==typeof e&&Number.isFinite(e)?e:void 0;function db(e){return{graph:e.graph??"line",fill:lb(e.fill),points:sb(e.points,"hover"),labels:sb(e.labels,"hover"),pointsPerHour:cb(e.points_per_hour)??.5,height:cb(e.height)??150,lineWidth:cb(e.line_width)??2.5,barSpacing:cb(e.bar_spacing)??4,transition:e.color_transition??"smooth",extrema:!0===e.extrema,average:!0===e.average,legend:!1!==e.legend,factor:Math.pow(10,cb(e.value_factor)??0),alignHeader:e.align_header??"default",alignIcon:e.align_icon??"right",alignState:e.align_state??"left",fontSize:cb(e.font_size)??100,fontSizeHeader:cb(e.font_size_header),colorName:!0===e.color_name,colorValue:!0===e.color_value,colorIcon:!0===e.color_icon,group:!0===e.group,iconImage:"string"==typeof e.icon_image&&""!==e.icon_image?e.icon_image:void 0,primary:{min:qy(e.y_min,"y_min"),max:qy(e.y_max,"y_max"),minRange:cb(e.min_range)},secondary:{min:qy(e.y_min_secondary,"y_min_secondary"),max:qy(e.y_max_secondary,"y_max_secondary"),minRange:cb(e.min_range_secondary)}}}function ub(e,t,o){if(void 0!==e&&!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`)}function hb(e,t,o,n=1/0,a=!1){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<o||e>n||a&&!Number.isInteger(e))){throw new Error(`"${t}" must be ${a?"a whole number":"a number"} ${n===1/0?`${o} or more`:`from ${o} to ${n}`}`)}}function pb(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}function mb(e,t,o){const n=Math.min(e.range.end,Date.now()),a="bar"===o.graph,r=a&&0===o.pointsPerHour?.5:o.pointsPerHour,i=e.group?[]:function(e,t,o=500){const n=e.end-e.start;if(n<=0||t<=0)return[];const a=Math.max(1,Math.min(o,Math.round(n/36e5*t))),r=n/a,i=[];for(let s=0;s<=a;s++)i.push(s===a?e.end:Math.round(e.start+s*r));return i}(e.range,r,a?96:500),s=t.raw.aggregate??"mean";return e.series.map(t=>{const a=t.entity.config;let r=t.points;a.fixed_value&&null!==t.entity.value?r=[{t:e.range.start,v:t.entity.value},{t:n,v:t.entity.value}]:e.group?r=Ry(t.points,e.range,n):i.length&&(r=Ry(function(e,t,o,n,a){if(t.length<2)return e;let r=e;const i=e[e.length-1],s=e[e.length-2];return"history"===n&&i&&s&&i.t===a&&i.v===s.v&&(r=e.slice(0,-1)),"statistics"===n?ta(r,t,o,a):ea(r,t,o,a)}(t.points,i,a.aggregate??s,e.source,n),e.range,n)),1!==o.factor&&(r=r.map(e=>null===e.v?e:{...e,v:e.v*o.factor}));const l=void 0!==a.color?Ce(a.color):void 0,c=!l&&(e=>e.config.severity!==st)(t.entity),d=null===t.entity.value?null:t.entity.value*o.factor,u=l??(c&&null!==d?Ce(Te(d,t.entity.bands).color):t.color);return{index:t.index,entity:t.entity,own:a,points:r,color:c?void 0:l??t.color,current:u,curve:t.curve,secondary:"secondary"===a.y_axis,graphed:!1!==a.show_graph}})}function fb(e){let t=1/0,o=-1/0;for(const n of e)for(const e of n.points)null!==e.v&&(e.v<t&&(t=e.v),e.v>o&&(o=e.v));return t===1/0?void 0:[t,o]}const gb=e=>Math.round(1e4*e)/100+"%";function vb(e,t,o){return e.filter(({series:e})=>void 0===e.color).map(({series:e})=>{const n=function(e,t,o){const[n,a]=t,r=e=>Math.min(1,Math.max(0,(e-n)/(a-n))),i=[];return e.forEach((t,n)=>{const a=Ce(t.color),s=Number.isFinite(t.from)?r(t.from):0,l=n+1<e.length?r(e[n+1].from):1;"hard"===o?i.push({offset:s,color:a},{offset:l,color:a}):(0===n||n===e.length-1||s<l)&&(i.push({offset:s,color:a}),n===e.length-1&&i.push({offset:1,color:a}))}),i}(e.entity.bands,t.get(e.secondary),o.transition);return Z`<linearGradient id="cd-trend-${e.index}" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${va} y2="0">
        ${n.map(e=>Z`<stop offset=${e.offset} stop-color=${e.color}></stop>`)}
      </linearGradient>`})}const yb=e=>e.color??`url(#cd-trend-${e.index})`;function bb(e,t){return void 0!==e.start&&void 0!==e.end&&e.end>e.start?`${an(e.start,t.hass)} – ${an(e.end,t.hass)}`:an(e.t,t.hass)}function _b(e,t,o,n){const a=o.colorIcon?`color:${n}`:"";return o.iconImage?q`<span class="trend-icon"><img src=${o.iconImage} alt="" /></span>`:q`<span class="trend-icon" style=${a}>
    <ha-state-icon .hass=${t.hass} .stateObj=${e.stateObj} .icon=${ni(e)}></ha-state-icon>
  </span>`}function xb(e,t,o,n){if(!t.extrema&&!t.average)return W;const a=function(e,t){let o,n,a=0,r=0;for(let i=0;i<e.length;i++){const s=e[i];if(null!==s.v)if(s.carried||((!o||s.v<o.v)&&(o={t:s.t,v:s.v}),(!n||s.v>n.v)&&(n={t:s.t,v:s.v})),t){const t=e[i+1],o=t?t.t-s.t:0;a+=s.v*o,r+=o}else s.carried||(a+=s.v,r+=1)}if(o&&n)return{min:o,max:n,mean:r>0?a/r:(o.v+n.v)/2}}(e.points,n);if(!a)return W;const r=(t,n,a)=>q`<span class="trend-chip ${t}"
      ><span class="trend-chip-type">${zt(o.hass,t)}</span> ${(t=>Na(ja(t,e.entity.decimals,o.hass),e.entity.unit))(n)}${void 0!==a?q` · <span class="trend-chip-time">${an(a,o.hass)}</span>`:W}</span
    >`;return q`<div class="trend-info" style="--series:${e.current}">
    ${t.extrema?r("trend_min",a.min.v,a.min.t):W}
    ${t.average?r("trend_avg",a.mean):W}
    ${t.extrema?r("trend_max",a.max.v,a.max.t):W}
  </div>`}const wb={layout:"chart",group:"history",height:170,gridOptions:{columns:6,min_columns:3,min_rows:2},styles:r`
    ${Ca}
    ${wr}
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
  `,thumbnail:()=>Z`
    <rect x="6" y="6" width="18" height="3" rx="1.5" fill="var(--secondary-text-color, #727272)" />
    <circle cx="55" cy="8" r="3.5" fill="var(--state-icon-color, #44739e)" />
    <rect x="6" y="13" width="22" height="7" rx="2" fill="var(--primary-text-color, #212121)" />
    <path d="M0 33 C10 36 14 26 24 27 S38 29 44 25 S56 21 64 24 V40 H0 Z"
      fill="var(--primary-color, #03a9f4)" fill-opacity="0.2" />
    <path d="M0 33 C10 36 14 26 24 27 S38 29 44 25 S56 21 64 24" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){_a(e),gr(e),ub(e.graph,eb,"graph"),ub(e.fill,[...tb,!0,!1],"fill"),ub(e.points,[...ob,!0,!1],"points"),ub(e.labels,[...ob,!0,!1],"labels"),ub(e.color_transition,ib,"color_transition"),ub(e.align_header,nb,"align_header"),ub(e.align_icon,ab,"align_icon"),ub(e.align_state,rb,"align_state"),hb(e.points_per_hour,"points_per_hour",0,60),hb(e.height,"height",20,1e3),hb(e.line_width,"line_width",Tt,Ft),hb(e.bar_spacing,"bar_spacing",0,50),hb(e.value_factor,"value_factor",-9,9,!0),hb(e.font_size,"font_size",25,400),hb(e.font_size_header,"font_size_header",6,60),hb(e.min_range,"min_range",0),hb(e.min_range_secondary,"min_range_secondary",0);for(const t of["extrema","average","legend","color_name","color_value","group"])pb(e[t],t);if(void 0!==e.icon_image&&"string"!=typeof e.icon_image)throw new Error('"icon_image" must be a URL');db(e);for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t,o=t=>`"${t}" of ${e.entity}`;Wy(e.aggregate,o("aggregate")),ub(e.y_axis,["primary","secondary"],`y_axis of ${e.entity}`),hb(e.line_width,`line_width of ${e.entity}`,Tt,Ft);for(const t of["fixed_value","show_state","show_indicator","show_graph","show_line","show_fill","show_points","show_legend","show_legend_state"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`${o(t)} must be true or false`)}},editor:function(e){const t=$s(`trend|${cs(e.config)}`,e.hass,()=>{return t=e.hass,o=e.config,[...ds(t,o),Xy("points_per_hour",0,60),Yy({name:"graph",selector:ss(t,"graph",["line","bar","none"])},{name:"fill",selector:ss(t,"fill",["fade","solid","none"])},{name:"curve",selector:ss(t,"curve",ua)},{name:"line_width",selector:Qt},{name:"points",selector:ss(t,"points",["hover","always","never"])},{name:"labels",selector:ss(t,"labels",["hover","always","never"])},Xy("height",20,1e3,1),Xy("bar_spacing",0,50,1)),{name:"color_transition",selector:ss(t,"color_transition",["smooth","hard"])},Yy(Gy("extrema"),Gy("average"),Gy("legend"),Gy("trend_tooltip")),Yy(Jy("trend_y_min"),Jy("trend_y_max"),Xy("min_range",0)),Yy(Jy("y_min_secondary"),Jy("y_max_secondary"),Xy("min_range_secondary",0)),Yy({name:"align_header",selector:ss(t,"align_header",["default","left","right","center"])},{name:"align_icon",selector:ss(t,"align_icon",["right","left","state"])},{name:"align_state",selector:ss(t,"align_state",["left","right","center"])},Xy("font_size",25,400,1),Xy("font_size_header",6,60,1),Xy("value_factor",-9,9,1)),Yy(Gy("color_name"),Gy("trend_color_icon"),Gy("color_value"),Gy("group")),{name:"icon_image",selector:{text:{}}}];var t,o}),o={...e,config:{...e.config,...Ky(e.config)},commit:t=>e.commit(function(e){let t=e;for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"]){const e=t[o];"string"==typeof e&&""!==e.trim()&&!e.trim().startsWith("~")&&Number.isFinite(Number(e))?t={...t,[o]:Number(e)}:""===e&&(t={...t},delete t[o])}return t}(t))};return ks(o,"chart",t,Vy,{legend:"editor_trend_legend",labels:"editor_trend_labels",group:"editor_trend_group"})},entityFields:function(e){return{schema:$s("trend-entity",e,()=>function(e){return[Yy({name:"series_color",selector:{text:{}}},{name:"curve",selector:ss(e,"curve",ua)},{name:"line_width",selector:Qt},{name:"entity_aggregate",selector:ss(e,"aggregate",Kn)},{name:"y_axis_side",selector:ss(e,"y_axis_side",["primary","secondary"])}),Yy(Gy("show_state"),Gy("show_indicator"),Gy("show_graph"),Gy("show_line"),Gy("show_fill"),Gy("show_points"),Gy("show_legend_entity"),Gy("show_legend_state"),Gy("fixed_value"))]}(e)),fields:Qy}},disconnect(e){za(e),Za(e),mr(e)},render:function(e){const t=db(e.raw),{show:o}=e.config,n=xa(e),a=mb(n,e,t),r=a[0],i=r.entity,s=a.filter(e=>e.graphed),l=function(e,t){if(void 0!==t)return e.map(e=>{const o=e.points.filter(e=>!e.carried),n=ur(o,t);return n<0?void 0:o[n]})}(a,fr(e.raw)&&"ready"===n.status?pr(e.host):void 0),c=t.colorName?`color:${r.current}`:"",d=o.icon&&"state"!==t.alignIcon?_b(i,e,t,r.current):W,u=o.name||d!==W?q`<div
          class="trend-header entity align-${t.alignHeader} icon-${t.alignIcon}"
          data-index="0"
          tabindex="0"
          aria-label=${i.label}
          style=${t.fontSizeHeader?`font-size:${t.fontSizeHeader}px`:""}
        >
          ${o.name?q`<span class="trend-name" style=${c}>${i.name}</span>`:W} ${d}
        </div>`:W,h=(o,n)=>{const a=l?.[n],r=a?a.v:o.entity.value,i=a?{number:null===a.v?"—":ja(a.v,o.entity.decimals,e.hass),unit:o.entity.unit}:function(e,t,o,n){return null===e?{number:t.display,unit:""}:{number:ja(e*o,t.decimals,n),unit:t.unit}}(r,o.entity,t.factor,e.hass);return{parts:i,color:a&&null!==a.v&&void 0===o.color?Ce(Te(a.v,o.entity.bands).color):o.current,when:a?bb(a,e):void 0}},p=h(r,0),m=o.value,f=a.slice(1).filter(e=>!0===e.own.show_state),g=m||f.length||"state"===t.alignIcon?q`<div class="trend-states align-${t.alignState}" style="font-size:${t.fontSize}%">
          ${o.icon&&"state"===t.alignIcon?_b(i,e,t,r.current):W}
          ${m?q`<div class="trend-state entity" data-index="0" tabindex="0" aria-label=${i.label}>
                  ${r.own.show_indicator?q`<span class="swatch" style="background:${r.current}"></span>`:W}
                  <span class="trend-value" style=${t.colorValue?`color:${p.color}`:""}
                    >${p.parts.number}</span
                  >${p.parts.unit?q`<span class="trend-unit">${p.parts.unit}</span>`:W}
                  ${p.when?q`<span class="trend-when">${p.when}</span>`:W}
                </div>`:W}
          ${f.length?q`<div class="trend-secondary">
                  ${f.map(e=>{const o=h(e,e.index);return q`<div
                      class="trend-state small entity"
                      data-index=${e.index}
                      tabindex="0"
                      aria-label=${e.entity.label}
                    >
                      ${!1!==e.own.show_indicator?q`<span class="swatch" style="background:${e.current}"></span>`:W}
                      <span class="trend-value" style=${t.colorValue?`color:${o.color}`:""}
                        >${o.parts.number}</span
                      >${o.parts.unit?q`<span class="trend-unit">${o.parts.unit}</span>`:W}
                    </div>`})}
                </div>`:W}
        </div>`:W,v=s.filter(e=>!1!==e.own.show_legend),y=t.legend&&s.length>1&&v.length?q`<div class="series-header trend-legend">
          ${v.map(t=>q`<div class="entity series-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}>
                <span class="swatch" style="background:${t.current}"></span>
                <span class="series-name">${function(e,t){const o=t.raw.name;return void 0===o||e.entity.name!==o?e.entity.name:e.entity.stateObj?.attributes.friendly_name??e.entity.entityId}(t,e)}</span>
                ${t.own.show_legend_state?q`<span class="series-value">${t.entity.display}</span>`:W}
              </div>`)}
        </div>`:W,b=ka(n,e),_="none"===t.graph?W:function(e,t,o,n,a){const r=`aspect-ratio:500 / ${n.height}`;if("ready"!==t.status||o.every(e=>e.points.every(e=>null===e.v))){const o="loading"===t.status?"chart_loading":"error"===t.status?"chart_error":"chart_no_data";return q`<div class="trend-graph message ${"error"===t.status?"error":""}" style=${r}>
      <span>${zt(e.hass,o,{error:t.error??""})}</span>
    </div>`}const i="bar"===n.graph,s=new Map;for(const b of[!1,!0]){const e=o.filter(e=>e.secondary===b);e.length&&s.set(b,Zy(fb(e),{...b?n.secondary:n.primary,fromZero:i}))}const l=So([t.range.start,t.range.end],[0,ga]),c=o.map(e=>({series:e,y:So(s.get(e.secondary),[va,0])})),d=i?Z``:Z`${c.map(e=>function({series:e,y:t},o,n){const a=fa(e.points).map(n=>{const a=n.map(e=>[o(e.t),t(e.v)]);return{pts:a,d:ma(a,e.curve)}}),r=!1!==e.own.show_line,i="none"!==n.fill&&!1!==e.own.show_fill,s=e.own.line_width??n.lineWidth,l=e.own.show_points??"always"===n.points,c=e.points.filter(e=>null!==e.v&&!e.carried);return Z`<g class="series" data-series=${e.index}>
    ${i?Z`<path
            class="fill ${n.fill}"
            d=${a.map(({pts:e,d:t})=>`${t}L${e[e.length-1][0]},200L${e[0][0]},200Z`).join("")}
            fill=${yb(e)}
            mask=${"fade"===n.fill?"url(#cd-trend-fade)":W}
          ></path>`:W}
    ${r?Z`<path class="line" d=${a.map(e=>e.d).join("")} fill="none" stroke=${yb(e)}
            style="stroke-width:${s}px"></path>`:W}
    ${l&&c.length<=200?Z`<path class="dots" d=${Dt(c.map(e=>[o(e.t),t(e.v)]))} fill="none"
            stroke=${yb(e)} style="stroke-width:${Ut(s)}px"></path>`:W}
  </g>`}(e,l,n))}`,u=Z`${vb(c,s,n)}
    <linearGradient id="cd-trend-fade-paint" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${va}>
      <stop offset="0" stop-color="#fff" stop-opacity="0.42"></stop>
      <stop offset="1" stop-color="#fff" stop-opacity="0.05"></stop>
    </linearGradient>
    <mask id="cd-trend-fade" maskContentUnits="userSpaceOnUse">
      <rect x="0" y="0" width=${ga} height=${va} fill="url(#cd-trend-fade-paint)"></rect>
    </mask>`,h=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_trend"),names:o.map(e=>e.entity.name).join(", ")}),p=t=>{const a=o.filter(e=>e.secondary===t),r=fb(a);if(!r)return W;const i=t?n.secondary:n.primary,s=i.min&&!i.min.soft?i.min.value:r[0],l=i.max&&!i.max.soft?i.max.value:r[1],c=a[0].entity,d=t=>Na(ja(t,c.decimals,e.hass),c.unit);return q`<div class="trend-labels ${t?"secondary":"primary"}" style="--series:${a[0].current}">
      <span>${d(l)}</span><span>${d(s)}</span>
    </div>`},m="never"===n.labels?W:q`<div class="trend-labels-wrap labels-${n.labels}">${p(!1)}${p(!0)}</div>`,f=a&&!i&&a[o[0].index]?q`<div class="crosshair" style="left:${gb(l(a[o[0].index].t)/ga)}"></div>`:W,g=a&&!i?c.map(({series:e,y:t})=>{const o=a[e.index];if(!o||null===o.v||!1===e.own.show_points)return W;const n=t(o.v)/va;if(!(n>=0&&n<=1))return W;const r=e.color??Ce(Te(o.v,e.entity.bands).color);return q`<span
            class="hover-dot"
            style="left:${gb(l(o.t)/ga)};top:${gb(n)};background:${r}"
          ></span>`}):W,v=a&&i&&a[o[0].index]?(()=>{const e=a[o[0].index];return void 0===e.start||void 0===e.end?W:q`<div
            class="bar-hover"
            style="left:${gb(l(e.start)/ga)};width:${gb((l(e.end)-l(e.start))/ga)}"
          ></div>`})():W,y=fr(e.raw)?vr(e,t.range,o.map(e=>e.points.filter(e=>!e.carried))):void 0;return q`<div
    class="trend-graph ${y?"hoverable":""}"
    style=${r}
    @pointerdown=${y?.move}
    @pointermove=${y?.move}
    @pointerleave=${y?.leave}
    @pointercancel=${y?.leave}
  >
    ${Sa(d,h,u)} ${i?function(e,t,o){const n=e.length,a=e.flatMap(({series:e,y:a},r)=>{const i=Math.min(va,Math.max(0,a(0)));return e.points.filter(e=>null!==e.v&&!e.carried&&void 0!==e.start&&void 0!==e.end).map(s=>{const l=t(s.start)/ga,c=(t(s.end)-t(s.start))/ga,d=Math.min(va,Math.max(0,a(s.v))),u=d>i,h=e.color??Ce(Te(s.v,e.entity.bands).color),p=`(${gb(c)} - ${o}px) / ${n}`;return q`<div
          class="trend-col ${u?"down":""}"
          style="left:calc(${gb(l)} + ${o/2}px + ${r} * ${p});width:max(1px, calc(${p}));
            top:${gb(Math.min(d,i)/va)};height:${gb(Math.abs(i-d)/va)};background:${h}"
        ></div>`})});return q`<div class="trend-cols">${a}</div>`}(c,l,n.barSpacing):W} ${m} ${v}
    ${f} ${"never"===n.points?W:g}
  </div>`}(e,n,s,t,l);return q`<div class="trend ${t.group?"group":""} ${"none"===t.graph?"no-graph":""}">
    <div class="trend-top">
      ${u} ${b===W?W:q`<div class="trend-nav">${b}</div>`} ${g}
      ${xb(r,t,e,"history"===n.source&&!n.group&&0===t.pointsPerHour)}
      ${y}
    </div>
    ${_}
  </div>`}},$b=["bars","gauges","history","totals","compare","distribution"];function kb(e){return"chart"===e.layout}const Mb={bar:Os,thin:Lu,segmented:ju,tank:Nu,ring:wu,needle:Hd,arc:$u,line:Pc,column:rc,area:Fs,combined:Wc,pie:mu,rings:Eu,pictograph:su,waffle:Hu,histogram:Ad,scatter:Su,bubble:Ol,heatmap:md,box:dl,funnel:Gu,radar:kh,polar_area:Sh,treemap:Xh,sunburst:mp,icicle:fp,grouped_bars:Sp,bullet:Tp,lollipop:Up,waterfall:Yp,slope:rm,dumbbell:xm,range_area:Am,sparkline:Fm,streamgraph:Xm,candlestick:sf,violin:Gf,beeswarm:lg,sankey:zg,timeline:Gg,climate:vv,wind_rose:Bv,day_clock:By,trend:wb},zb={number:{mode:"box",step:"any"}},Ab={entity:{domain:["sensor","input_number","number"]}};function Eb(e){return null==e||""===e?"default":"number"==typeof e||""!==e.trim()&&Number.isFinite(Number(e))?"number":"entity"}class Sb extends le{constructor(){super(...arguments),this.languageController=new qi(this)}willUpdate(e){e.has("value")&&"default"!==Eb(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const e=(e,t)=>zt(this.hass,e,t),t=[{value:"default",label:e("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:e("editor_limit_number")},{value:"entity",label:e("editor_limit_entity")}],o=t.map(e=>e.label).join("|");return this._modeSelector?.key!==o&&(this._modeSelector={key:o,selector:{select:{mode:"dropdown",options:t}}}),this._modeSelector.selector}get _currentMode(){return this._mode??Eb(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e}}))}_modeChanged(e){e.stopPropagation();const t=e.detail?.value;t&&t!==this._currentMode&&(this._mode=t,void 0!==this.value&&this._emit(void 0))}_numberChanged(e){e.stopPropagation();const t=e.detail?.value,o="number"==typeof t?t:""===t||null==t?NaN:Number(t);this._mode="number",this._emit(Number.isFinite(o)?o:void 0)}_entityChanged(e){e.stopPropagation();const t=e.detail?.value;this._mode="entity",this._emit("string"==typeof t&&""!==t?t:void 0)}render(){const e=e=>zt(this.hass,e),t=this._currentMode;return q`<ha-selector
        .required=${!0}
        data-role="mode"
        .hass=${this.hass}
        .label=${this.label}
        .selector=${this._modeSelectorFor()}
        .value=${t}
        @value-changed=${this._modeChanged}
      ></ha-selector>
      ${"number"===t?q`<ha-selector
              .required=${!1}
              data-role="number"
              .hass=${this.hass}
              .label=${e("editor_limit_number")}
              .selector=${zb}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===t?q`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${e("editor_limit_entity")}
                .selector=${Ab}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:W}`}}Sb.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},Sb.styles=r`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",Sb);const Cb=["min","max","target"];function jb(e,t,o){const n=t&&!o?e?.states[t]?.attributes?.unit_of_measurement:void 0;return"string"==typeof n&&n?n:void 0}class Nb extends le{constructor(){super(),this.languageController=new qi(this),this._computeLabel=e=>this._t(`editor_${e.name}`),this._expanded=new Set}_t(e,t){return zt(this.hass,e,t)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(e){e.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e.entities??[]}}))}_set(e,t,o){this._emit(Nt(this._asConfig,e,t,o))}_move(e,t){const o=new Set;for(const n of this._expanded)o.add(n===e?t:n===t?e:n);this._expanded=o,this._emit(function(e,t,o){const n=[...e.entities??[]];if(t<0||t>=n.length||t===o)return e;const[a]=n.splice(t,1);return n.splice(Math.max(0,Math.min(o,n.length)),0,a),{...e,entities:n}}(this._asConfig,e,t))}_remove(e){const t=new Set;for(const o of this._expanded)o!==e&&t.add(o>e?o-1:o);this._expanded=t,this._emit(function(e,t){const o=[...e.entities??[]];return t<0||t>=o.length?e:(o.splice(t,1),{...e,entities:o})}(this._asConfig,e))}_toggle(e){const t=new Set(this._expanded);t.delete(e)||t.add(e),this._expanded=t}_add(e){e.stopPropagation();const t=e.detail?.value;"string"==typeof t&&""!==t&&(e.target.value="",this._emit(function(e,t){return{...e,entities:[...e.entities??[],t]}}(this._asConfig,t)))}_formChanged(e,t,o){o.stopPropagation();const n=this.entities?.[e];if(void 0===n)return;const a="string"==typeof n?{entity:n}:n,r=bo(a,t,o.detail?.value??{});if(r===a)return;const i=[...this.entities??[]],s=Object.keys(r);i[e]=1===s.length&&"entity"===s[0]?r.entity:r,this._emit({type:"",entities:i})}_rowLabel(e){const t=this.hass?.states[e];return t?{text:t.attributes.friendly_name||e,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:e}),missing:!0}:{text:e,missing:!1}}_form(e,t,o,n,a){return q`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${yo(o,a)}
      .schema=${n}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(t,a,e)}
    ></ha-form>`}_renderOverrides(e,t){const o=e=>t=>{t.stopPropagation(),e(t.detail?.value)};return q`<div class="overrides">
      ${this._form("entity-attribute",t,e,function(e){let t=io.get(e);return t||(t=[{name:"attribute",selector:{attribute:{entity_id:e}}}],io.set(e,t)),t}(e.entity),Jt)}
      ${this._form("entity-text",t,e,ro,Xt)}
      ${this.chartFields?this._form("entity-chart",t,e,this.chartFields.schema,this.chartFields.fields):W}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${e.icon??""}
        @value-changed=${o(e=>this._set(t,"icon",e))}
      ></ha-icon-picker>
      ${Cb.map(n=>q`<cd-limit-field
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
        .unit=${e.unit??this.unit??jb(this.hass,e.entity,e.attribute)}
        @value-changed=${o(e=>this._set(t,"severity",e))}
      ></cd-bands-editor>
      ${this._form("entity-actions",t,e,ao,oo)}
    </div>`}_renderRow(e,t,o){const n=jt(e),a="string"==typeof e?{entity:e}:e,r=this._rowLabel(n),i=this._expanded.has(t);return q`<div class="entity">
      <span class="label ${r.missing?"missing":""}">${r.text}</span>
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${gt(n)}
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
      ${i?this._renderOverrides(a,t):W}
    </div>`}render(){const e=this.entities??[];return q`${e.map((t,o)=>this._renderRow(t,o,e.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}Nb.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chartFields:{attribute:!1},_expanded:{state:!0}},Nb.styles=r`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",Nb);const Lb=["treemap","sunburst","icicle","radar"],Tb=["ring","arc","needle"];class Fb extends le{constructor(){super(...arguments),this.languageController=new qi(this),this._label=e=>zt(this.hass,e),this._computeLabel=e=>zt(this.hass,`editor_${e.name}`),this._computeRuleLabel=e=>zt(this.hass,`editor_rule_${e.name.slice(e.name.indexOf("_")+1)}`)}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]}),o=t?.constructor;await(o?.getConfigElement?.())}catch{}}()}_commit(e){this._config=e,function(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}(this,e)}_formChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{};this._commit(bo(this._config,e,o))}_form(e,t,o){return q`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${yo(this._config,o)}
      .schema=${t}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(o,e)}
    ></ha-form>`}_panel(e,t){return q`<ha-expansion-panel .header=${this._label(`editor_section_${e}`)} outlined>
      <div class="panel section-${e}">${t}</div>
    </ha-expansion-panel>`}_subChanged(e,t){t.stopPropagation(),this._config&&this._commit(Ct(this._config,e,t.detail?.value))}_chartFields(){const e=Mb[this._config?.style??"bar"];return e&&kb(e)&&this._config?e.entityFields?.(this.hass,this._config):void 0}renderEntities(){return q`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        @value-changed=${e=>this._subChanged(["entities"],e)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(e){const t=this._config?.[e],o={};if(!t||"object"!=typeof t)return o;for(const[n,a]of Object.entries(t))o[`${e}_${n}`]=Array.isArray(a)?a:[a];return o}_ruleChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{},n=this._ruleData(e);let a=this._config;for(const r of uo[e]){const t=`${e}_${r}`,i=Array.isArray(o[t])?o[t]:[];vo(n[t]??[],i)||(a=Ct(a,[e,r],i.length?i:void 0))}a!==this._config&&this._commit(a)}_ruleForm(e){return q`<div class="rules-heading">${this._label(`editor_${e}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${e}_help`)}</p>
      <ha-form
        data-section=${e}
        .hass=${this.hass}
        .data=${this._ruleData(e)}
        .schema=${mo(e,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${t=>this._ruleChanged(e,t)}
      ></ha-form>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([e,t])=>q`<cd-limit-field
          data-limit=${e}
          .hass=${this.hass}
          .label=${this._label(`editor_${e}`)}
          .value=${this._config?.[e]}
          .defaultLabel=${t}
          @value-changed=${t=>this._subChanged([e],t)}
        ></cd-limit-field>`)}renderColours(){return q`${this._toggles(Rt)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${e=>this._subChanged(["severity"],e)}
      ></cd-bands-editor>`}_firstEntityUnit(){const e=this._config?.entities?.[0];return"string"==typeof e?jb(this.hass,e):e?.unit??jb(this.hass,e?.entity,e?.attribute)}_selectStyle(e){if(!this._config)return;let t=Ct(this._config,["style"],"bar"===e?void 0:e);const o=[].concat(t.group_by??[]),n=o.length>0&&o.every(e=>Xu.includes(e));o.length>0&&n!==Lb.includes(e)&&(t=Ct(t,["group_by"],void 0)),this._commit(t)}renderStyle(){const e=this._config?.style??"bar";return q`${$b.map(t=>{const o=it.filter(e=>Mb[e].group===t);return o.length?q`<div class="style-group">${this._label(`editor_group_${t}`)}</div>
        <div class="styles" data-group=${t}>
          ${o.map(t=>{const o=Mb[t],n=kb(o)?q`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${o.thumbnail()}
                </svg>`:zo(t);return q`<button
              type="button"
              class="style"
              data-style=${t}
              aria-pressed=${e===t?"true":"false"}
              @click=${()=>this._selectStyle(t)}
            >
              ${n}<span>${this._label(`editor_style_${t}`)}</span>
            </button>`})}
        </div>`:W})}
    ${Tb.includes(e)?q`<p class="gauge-help">${this._label("editor_gauge_help")}</p>
            ${this._form("gauge",function(e,t,o){const n="text"===o,a=`${Mt(e)}|${t}|${n}`;let r=Gt.get(a);if(!r){const o={number:{min:-360,max:360,step:1,mode:"box",unit_of_measurement:"°"}};r=[{type:"grid",name:"",schema:[{name:"start_angle",selector:o},{name:"end_angle",selector:o}]},{name:"center",selector:{select:{mode:"dropdown",options:["value","band","name","text","none"].map(t=>({value:t,label:zt(e,`editor_center_mode_${t}`)}))}}},...n?[{name:"center_text",selector:{text:{}}}]:[],..."needle"===t?[{name:"tick_labels",selector:{boolean:{}}}]:[]],Gt.set(a,r)}return r}(this.hass,e,this._config?.center),Yt)}`:W}`}renderChart(){const e=Mb[this._config?.style??"bar"];return e&&kb(e)&&e.editor&&this._config?this._panel("chart",e.editor({hass:this.hass,config:this._config,commit:e=>this._commit(e)})):W}renderDisplay(){return q`${this._toggles(Zt)}
    ${this._form("display",function(e){const t=Mt(e);return fo?.language!==t&&(fo={language:t,schema:co(e)}),fo.schema}(this.hass),Wt)}`}_toggles(e){const t=yo(this._config,e);return q`<div class="toggles">
      ${e.map(({name:o})=>{const n=this._label(`editor_${o}`),a=!0===t[o];return q`<div class="toggle">
          <span @click=${()=>this._toggle(e,o,!a)}>${n}</span
          ><ha-switch
            data-name=${o}
            aria-label=${n}
            .checked=${gt(a)}
            @change=${t=>this._toggle(e,o,t.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(e,t,o){if(!this._config)return;const n=yo(this._config,e);this._commit(bo(this._config,e,{...n,[t]:o}))}renderActions(){return this._form("actions",ao,Vt)}render(){return this._config?q`<div class="title">${this._form("title",no,qt)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:W}}Fb.properties={hass:{attribute:!1},_config:{state:!0}},Fb.styles=r`
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",Fb);const Ob=r`
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
`;console.info("%c CHARTDECK %c 2.1.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const Pb={rows:16,tiles:8};function Db(e){const t=Pb[e.layout];return Math.max(1,Math.floor((368+t)/((e.minColumnWidth??0)+t)))}class Ub extends le{constructor(){super(...arguments),this.languageController=new qi(this),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(e){const t=Object.values(e?.states??{}).filter(e=>e.entity_id.startsWith("sensor.")&&""!==e.state.trim()&&Number.isFinite(Number(e.state))),o=e=>"battery"===e.attributes?.device_class;return t.sort((e,t)=>o(e)!==o(t)?o(e)?-1:1:e.entity_id<t.entity_id?-1:e.entity_id>t.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:t.slice(0,3).map(e=>e.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(e){const t=function(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");const t=e.style??"bar";if(!it.includes(t))throw new Error(`Unknown style "${String(t)}". Use one of: ${it.join(", ")}`);const o=e.sort??"none";if(!lt.includes(o))throw new Error(`Unknown sort "${String(o)}". Use one of: ${lt.join(", ")}`);if(void 0!==e.entities&&!Array.isArray(e.entities))throw new Error('"entities" must be a list');const n=(e.entities??[]).map((t,o)=>ft(t,e,o)),a={name:!0,value:!0,icon:!0,target:!0,legend:!1,...e.show},r=ut(e.columns,"columns",1),i=ut(e.limit,"limit",1),s=De(e.include,"include"),l=De(e.exclude,"exclude");s&&ft("sensor.chartdeck_check",e,0);const c={style:t,entities:n,hideUnavailable:!0===e.hide_unavailable,cardOptions:e,show:a,sort:o,animate:!1!==e.animate,colorIcon:!0===e.color_icon,legendBands:ht(e.severity)??st};return void 0!==e.title&&(c.title=e.title),void 0!==r&&(c.columns=r),void 0!==i&&(c.limit=i),s&&(c.include=s),l&&(c.exclude=l),c}(e),o=Mb[t.style];if(kb(o)&&o.validate?.(e),this._watched=function(e){const t=new Set;for(const o of e.entities){t.add(o.entity);for(const e of[o.min,o.max,o.target,...o.severity.map(e=>e.from)])"string"==typeof e&&""!==e&&t.add(e)}for(const o of e.legendBands)"string"==typeof o.from&&t.add(o.from);return t}(t),kb(o))for(const n of o.watch?.(e)??[])this._watched.add(n);this._config&&this._config.style!==t.style&&this._disconnectStyle(),this._config=t}get _styleName(){return this._config?.style??"bar"}get _style(){return Mb[this._styleName]}_legend(e){const t=this._config;if(!t?.show.legend||0===this._count())return[];const o=e?.decimals??1;return Fe(si(t.legendBands,this.hass),e=>ja(e,o,this.hass),e?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const e=this._config;if(!e)return 0;const t=this._style,o=16+(e.title?73:0)+(this._legend().length>0?32:0);if(kb(t))return o+t.height;const n=this._count(),a=void 0!==e.columns?Math.min(e.columns,Db(t)):"rows"===t.layout?1:Math.min(n,t.tilesPerRow??3,Db(t));return o+(0===n?0:Math.ceil(n/Math.max(1,a)))*t.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const e=this._count();if(kb(this._style))return{columns:12,min_columns:6,min_rows:2,...this._style.gridOptions,rows:"auto"};const t="rows"===this._style.layout;return{columns:t||e<=1?6:12,rows:"auto",min_columns:t?6:3,min_rows:1}}shouldUpdate(e){if(0===e.size)return!0;if([...e.keys()].some(e=>"hass"!==e))return!0;if(!e.has("hass"))return!1;const t=e.get("hass"),o=this.hass;if(!t||!o)return!0;for(const n of this._watched)if(t.states[n]!==o.states[n])return!0;if(this._config?.include){const e=ci(this._config,o);if(e.length!==this._matched.length||e.some((e,t)=>e!==this._matched[t]))return!0;for(const n of e)if(t.states[n]!==o.states[n])return!0}return t.themes?.darkMode!==o.themes?.darkMode||t.themes?.theme!==o.themes?.theme||t.locale!==o.locale}willUpdate(){const e=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",e),(e||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const e=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const e=this._config?Mb[this._config.style]:void 0;e&&kb(e)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const e=this._config?Mb[this._config.style]:void 0;e&&kb(e)&&e.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle();for(const e of this._detachers.values())e();this._detachers.clear()}_syncActions(){const e=this.shadowRoot;if(!e)return;const t=new Set(e.querySelectorAll(".entity"));for(const[o,n]of this._detachers)t.has(o)||(n(),this._detachers.delete(o));for(const o of t)this._detachers.has(o)||this._detachers.set(o,Ee(o,()=>this._items[Number(o.dataset.index)].config))}_renderEntity(e,t,o,n){const a=this._config,r=Ae(e.config),i=je(e.band.color),s=`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${i.start};--c-end:${i.end}`;return q`<div
      class="entity ${r?"interactive":""} ${e.available?"":"unavailable"} ${a.colorIcon&&e.available?"icon-band":""}"
      data-index=${t}
      role="meter"
      aria-valuenow=${e.available?String(e.value):W}
      aria-valuemin=${e.min}
      aria-valuemax=${e.max}
      aria-label=${e.label}
      tabindex=${r?0:W}
      style=${s}
    >
      ${o.render(e,{show:a.show,hass:n})}
    </div>`}render(){const e=this._config;if(!e)return W;const t=this.hass,o=this._style;let n,a,r;const i=t?function(e,t){const o=ci(e,t).map((t,o)=>ft(t,e.cardOptions,o)),n=[...e.entities,...o].map(e=>li(e,t));return e.hideUnavailable?n.filter(e=>e.available):n}(e,t):[];if(this._matched=t?ci(e,t):[],0!==e.entities.length||e.include)if(t)if(0===i.length)this._items=[],n=q`<div class="hint">${zt(t,e.include?"no_matches":"none_available")}</div>`;else{a=i[0];const s=new Map,l=new Set;i.forEach((e,t)=>{s.set(e,l.has(e.entityId)?`${e.entityId}#${t}`:e.entityId),l.add(e.entityId)}),this._items=function(e,t){if("none"===t)return[...e];const o="ascending"===t?1:-1;return e.map((e,t)=>({item:e,index:t})).sort((e,t)=>{if(e.item.available!==t.item.available)return e.item.available?-1:1;if(e.item.available){const n=(e.item.position-t.item.position)*o;if(0!==n)return n}return e.index-t.index}).map(e=>e.item)}(i,e.sort).slice(0,e.limit);const c=this._items.filter(e=>e.available).map(e=>e.display.length);if(r=c.length?Math.max(...c):void 0,kb(o))n=q`<div class="chart">
          ${o.render({items:this._items,config:e,raw:e.cardOptions,hass:t,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const a="tiles"===o.layout,r=function(e,t){if(void 0===t)return"rows"===e.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const o=(t-1)*Pb[e.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${e.minColumnWidth??0}px, 100%), calc((100% - ${o}px) / ${t} - 0.5px)), 1fr))`}(o,e.columns);n=q`<div
          class="entities layout-${o.layout} ${a&&void 0!==e.columns?"has-columns":""}"
          style=${r}
        >
          ${Me(this._items,e=>s.get(e),(e,n)=>this._renderEntity(e,n,o,t))}
        </div>`}}else this._items=[],n=W;else this._items=[],n=q`<div class="hint">${zt(t,"no_entities")}</div>`;const s=this._legend(a);return q`<ha-card .header=${e.title}>
      <div
        class="content style-${this._styleName}"
        style=${void 0===r?W:`--cd-value-ch: ${r}`}
      >
        ${n}
      </div>
      ${s.length?q`<div class="legend">
              ${s.map(e=>q`<span class="legend-item"
                    ><span class="dot" style="background:${e.color}"></span>${e.text}</span
                  >`)}
            </div>`:W}
    </ha-card>`}}Ub.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},Ub.styles=[Ob,...Object.values(Mb).map(e=>e.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",Ub);const Hb=window.customCards??=[];Hb.some(e=>"chartdeck-card"===e.type)||Hb.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{Ub as ChartdeckCard};
//# sourceMappingURL=chartdeck-card.js.map
