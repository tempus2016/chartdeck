/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;let n=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const a=this.t;if(t&&void 0===e){const t=void 0!==a&&1===a.length;t&&(e=o.get(a)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(a,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,a,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[o+1],e[0]);return new n(o,e,a)},i=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,a))(t)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},b=(e,t)=>!s(e,t),_={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),o=this.getPropertyDescriptor(e,a,t);void 0!==o&&l(this.prototype,e,o)}}static getPropertyDescriptor(e,t,a){const{get:o,set:n}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const r=o?.call(this);n?.call(this,t),this.requestUpdate(e,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...u(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[t,a]of this.elementProperties){const e=this._$Eu(t,a);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(i(e))}else void 0!==e&&t.push(i(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const a=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((a,o)=>{if(t)a.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of o){const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,a.appendChild(o)}})(a,this.constructor.elementStyles),a}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){const a=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,a);if(void 0!==o&&!0===a.reflect){const n=(void 0!==a.converter?.toAttribute?a.converter:y).toAttribute(t,a.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const a=this.constructor,o=a._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=a.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o;const r=n.fromAttribute(t,e.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(e,t,a,o=!1,n){if(void 0!==e){const r=this.constructor;if(!1===o&&(n=this[e]),a??=r.getPropertyOptions(e),!((a.hasChanged??b)(n,t)||a.useDefault&&a.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,a))))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:o,wrapped:n},r){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e){const{wrapped:e}=a,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,a,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,g?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=e=>e,k=w.trustedTypes,M=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+S,E=`<${A}>`,j=document,C=()=>j.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,T="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,P=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,H=/"/g,I=/^(?:script|style|textarea|title)$/i,B=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),q=B(1),Z=B(2),R=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,Y=j.createTreeWalker(j,129);function G(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},a){let o;this.parts=[];let n=0,r=0;const i=e.length-1,s=this.parts,[l,c]=((e,t)=>{const a=e.length-1,o=[];let n,r=2===t?"<svg>":3===t?"<math>":"",i=O;for(let s=0;s<a;s++){const t=e[s];let a,l,c=-1,d=0;for(;d<t.length&&(i.lastIndex=d,l=i.exec(t),null!==l);)d=i.lastIndex,i===O?"!--"===l[1]?i=F:void 0!==l[1]?i=P:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),i=D):void 0!==l[3]&&(i=D):i===D?">"===l[0]?(i=n??O,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,a=l[1],i=void 0===l[3]?D:'"'===l[3]?H:U):i===H||i===U?i=D:i===F||i===P?i=O:(i=D,n=void 0);const u=i===D&&e[s+1].startsWith("/>")?" ":"";r+=i===O?t+E:c>=0?(o.push(a),t.slice(0,c)+z+t.slice(c)+S+u):t+S+(-2===c?s:u)}return[G(e,r+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]})(e,t);if(this.el=X.createElement(l,a),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Y.nextNode())&&s.length<i;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(z)){const t=c[r++],a=o.getAttribute(e).split(S),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:i[2],strings:a,ctor:"."===i[1]?te:"?"===i[1]?ae:"@"===i[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(S)&&(s.push({type:6,index:n}),o.removeAttribute(e));if(I.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let a=0;a<t;a++)o.append(e[a],C()),Y.nextNode(),s.push({type:2,index:++n});o.append(e[t],C())}}}else if(8===o.nodeType)if(o.data===A)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)s.push({type:7,index:n}),e+=S.length-1}n++}}static createElement(e,t){const a=j.createElement("template");return a.innerHTML=e,a}}function J(e,t,a=e,o){if(t===R)return t;let n=void 0!==o?a._$Co?.[o]:a._$Cl;const r=N(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,a,o)),void 0!==o?(a._$Co??=[])[o]=n:a._$Cl=n),void 0!==n&&(t=J(e,n._$AS(e,t.values),n,o)),t}let K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,o=(e?.creationScope??j).importNode(t,!0);Y.currentNode=o;let n=Y.nextNode(),r=0,i=0,s=a[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new Q(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ne(n,this,e)),this._$AV.push(t),s=a[++i]}r!==s?.index&&(n=Y.nextNode(),r++)}return Y.currentNode=j,o}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),N(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==R&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,o="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=X.createElement(G(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new K(o,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new X(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,o=0;for(const n of e)o===t.length?t.push(a=new Q(this.O(C()),this.O(C()),this,this.options)):a=t[o],a._$AI(n),o++;o<t.length&&(this._$AR(a&&a._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,o,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=W}_$AI(e,t=this,a,o){const n=this.strings;let r=!1;if(void 0===n)e=J(this,e,t,0),r=!N(e)||e!==this._$AH&&e!==R,r&&(this._$AH=e);else{const o=e;let i,s;for(e=n[0],i=0;i<n.length-1;i++)s=J(this,o[a+i],t,i),s===R&&(s=this._$AH[i]),r||=!N(s)||s!==this._$AH[i],s===W?e=W:e!==W&&(e+=(s??"")+n[i+1]),this._$AH[i]=s}r&&!o&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ae extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class oe extends ee{constructor(e,t,a,o,n){super(e,t,a,o,n),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??W)===R)return;const a=this._$AH,o=e===W&&a!==W||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,n=e!==W&&(a===W||o);o&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const re={I:Q},ie=w.litHtmlPolyfillSupport;ie?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let le=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{const o=a?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=a?.renderBefore??null;o._$litPart$=n=new Q(t.insertBefore(C(),e),e,void 0,a??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};le._$litElement$=!0,le.finalized=!0,se.litElementHydrateSupport?.({LitElement:le});const ce=se.litElementPolyfillSupport;ce?.({LitElement:le}),(se.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=1,ue=2,he=3,pe=4,me=e=>(...t)=>({_$litDirective$:e,values:t});let fe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ge}=re,ve=e=>e,ye=()=>document.createComment(""),be=(e,t,a)=>{const o=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===a){const t=o.insertBefore(ye(),n),r=o.insertBefore(ye(),n);a=new ge(t,r,e,e.options)}else{const t=a._$AB.nextSibling,r=a._$AM,i=r!==e;if(i){let t;a._$AQ?.(e),a._$AM=e,void 0!==a._$AP&&(t=e._$AU)!==r._$AU&&a._$AP(t)}if(t!==n||i){let e=a._$AA;for(;e!==t;){const t=ve(e).nextSibling;ve(o).insertBefore(e,n),e=t}}}return a},_e=(e,t,a=e)=>(e._$AI(t,a),e),xe={},we=(e,t=xe)=>e._$AH=t,$e=e=>{e._$AR(),e._$AA.remove()},ke=(e,t,a)=>{const o=new Map;for(let n=t;n<=a;n++)o.set(e[n],n);return o},Me=me(class extends fe{constructor(e){if(super(e),e.type!==ue)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let o;void 0===a?a=t:void 0!==t&&(o=t);const n=[],r=[];let i=0;for(const s of e)n[i]=o?o(s,i):i,r[i]=a(s,i),i++;return{values:r,keys:n}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,o]){const n=(e=>e._$AH)(e),{values:r,keys:i}=this.dt(t,a,o);if(!Array.isArray(n))return this.ut=i,r;const s=this.ut??=[],l=[];let c,d,u=0,h=n.length-1,p=0,m=r.length-1;for(;u<=h&&p<=m;)if(null===n[u])u++;else if(null===n[h])h--;else if(s[u]===i[p])l[p]=_e(n[u],r[p]),u++,p++;else if(s[h]===i[m])l[m]=_e(n[h],r[m]),h--,m--;else if(s[u]===i[m])l[m]=_e(n[u],r[m]),be(e,l[m+1],n[u]),u++,m--;else if(s[h]===i[p])l[p]=_e(n[h],r[p]),be(e,n[u],n[h]),h--,p++;else if(void 0===c&&(c=ke(i,p,m),d=ke(s,u,h)),c.has(s[u]))if(c.has(s[h])){const t=d.get(i[p]),a=void 0!==t?n[t]:null;if(null===a){const t=be(e,n[u]);_e(t,r[p]),l[p]=t}else l[p]=_e(a,r[p]),be(e,n[u],a),n[t]=null;p++}else $e(n[h]),h--;else $e(n[u]),u++;for(;p<=m;){const t=be(e,l[m+1]);_e(t,r[p]),l[p++]=t}for(;u<=h;){const e=n[u++];null!==e&&$e(e)}return this.ut=i,we(e,l),R}}),ze=e=>!!e&&"none"!==e.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Se(e){return ze(e.tap_action)||ze(e.hold_action)||ze(e.double_tap_action)}function Ae(e,t){let a,o,n=0,r=0,i=!1,s=!1;const l=a=>{const o=t(),n="tap"===a?o.tap_action:"hold"===a?o.hold_action:o.double_tap_action;ze(n)&&e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:o,action:a}}))},c=()=>{void 0!==a&&clearTimeout(a),a=void 0},d=e=>{const o=e;o.button>0||(i=!0,s=!1,n=o.clientX,r=o.clientY,c(),ze(t().hold_action)&&(a=setTimeout(()=>{a=void 0,s=!0,l("hold")},500)))},u=e=>{if(!i)return;const t=e;Math.hypot(t.clientX-n,t.clientY-r)>10&&(c(),i=!1)},h=()=>{c(),i=!1},p=()=>{const e=i;c(),i=!1,e&&!s?ze(t().double_tap_action)?void 0!==o?(clearTimeout(o),o=void 0,l("double_tap")):o=setTimeout(()=>{o=void 0,l("tap")},250):l("tap"):s=!1},m=e=>{const t=e;t.repeat||"Enter"!==t.key&&" "!==t.key||(" "===t.key&&t.preventDefault(),l("tap"))},f=e=>{ze(t().hold_action)&&e.preventDefault()};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",u),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",h),e.addEventListener("pointerleave",h),e.addEventListener("keydown",m),e.addEventListener("contextmenu",f),()=>{c(),void 0!==o&&clearTimeout(o),o=void 0,e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",h),e.removeEventListener("pointerleave",h),e.removeEventListener("keydown",m),e.removeEventListener("contextmenu",f)}}const Ee={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function je(e){if(Object.prototype.hasOwnProperty.call(Ee,e)){const{variable:t,fallback:a}=Ee[e];return`var(${t}, ${a})`}return e}function Ce(e){const t=je(e);return{start:t,end:`color-mix(in srgb, ${t} 80%, #fff)`}}const Ne=new Set(["amber"]);function Le(e){if(Object.prototype.hasOwnProperty.call(Ee,e))return Ne.has(e)?"dark":"light";const t=function(e){const t=e.trim().toLowerCase(),a=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(a){const e=a[1].length<=4?[...a[1]].map(e=>e+e).join(""):a[1],[t,o,n]=[0,2,4].map(t=>parseInt(e.slice(t,t+2),16));return[t,o,n,8===e.length?parseInt(e.slice(6,8),16)/255:1]}const o=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(t);if(o){const[e,t,a]=[o[1],o[2],o[3]].map(e=>Math.min(255,Number(e))),n=void 0===o[4]?1:Number(o[4])/(o[5]?100:1);return[e,t,a,Math.min(1,n)]}}(e);return t?t[3]<.5?"theme":function([e,t,a]){const o=e=>{const t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return.2126*o(e)+.7152*o(t)+.0722*o(a)}([t[0],t[1],t[2]])>.4?"dark":"light":"light"}function Te(e,t){let a=t[0];for(const o of t){if(!(o.from<=e))break;a=o}return a}function Oe(e,t,a){const o=a?` ${a}`:"",n=[];return e.forEach((a,r)=>{const i=e[r+1],s=je(a.color);a.label?n.push({color:s,text:a.label}):Number.isFinite(a.from)?i?n.push({color:s,text:`${t(a.from)}–${t(i.from)}${o}`}):n.push({color:s,text:`${t(a.from)}${o}+`}):i&&n.push({color:s,text:`< ${t(i.from)}${o}`})}),n}const Fe={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},Pe=["label","area","floor","device_class","domain","entity"];function De(e,t){if(null==e)return;if("object"!=typeof e||Array.isArray(e))throw new Error(`"${t}" must list what to match, such as "area" or "device_class"`);const a="include"===t?Pe.filter(e=>"entity"!==e):Pe,o={};for(const[n,r]of Object.entries(e)){if(!a.includes(n))throw new Error(`"${t}" can't match on "${n}". Use: ${a.join(", ")}`);const e=(Array.isArray(r)?r:[r]).filter(e=>null!=e&&""!==e);if(e.some(e=>"string"!=typeof e))throw new Error(`"${t}.${n}" must be text or a list of text`);e.length&&(o[n]=e)}return Object.keys(o).length?o:void 0}function Ue(e){const t=e.state;return"unavailable"===t||"unknown"===t||""!==t.trim()&&Number.isFinite(Number(t))}function He(e,t){const a=e.entity_id,o=t.entities?.[a],n=o?.device_id?t.devices?.[o.device_id]:void 0,r=o?.area_id??n?.area_id??void 0,i=e.attributes?.device_class;return{label:[...o?.labels??[],...n?.labels??[]],area:r,floor:r?t.areas?.[r]?.floor_id??void 0:void 0,device_class:"string"==typeof i?i:void 0,domain:a.slice(0,a.indexOf(".")),entity:a}}function Ie(e,t,a){const o=e[t],n=a[t];return Array.isArray(n)?n.some(e=>o.includes(e)):void 0!==n&&o.includes(n)}function Be(e,t){return Object.keys(e).every(a=>Ie(e,a,t))}function qe(e,t){return!!e&&Object.keys(e).some(a=>Ie(e,a,t))}const Ze=new WeakMap;const Re=e=>(Math.abs(e)<.005?0:e).toFixed(2);function We(e,t,a,o){const n=o*Math.PI/180;return[e+a*Math.sin(n),t-a*Math.cos(n)]}function Ve(e,t,a,o,n){const r=String(Number(a.toFixed(2))),i=n-o,[s,l]=We(e,t,a,o);if(i>=359.99){const[n,i]=We(e,t,a,o+180);return`M${Re(s)} ${Re(l)} A${r} ${r} 0 1 1 ${Re(n)} ${Re(i)} A${r} ${r} 0 1 1 ${Re(s)} ${Re(l)}`}const[c,d]=We(e,t,a,n),u=i>180?1:0;return`M${Re(s)} ${Re(l)} A${r} ${r} 0 ${u} 1 ${Re(c)} ${Re(d)}`}const Ye=["value","band","name","text","none"],Ge={ring:[-180,180],arc:[-135,135],needle:[-90,90]};function Xe(e,t){if(null==e||""===e)return;const a="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof a||!Number.isFinite(a)||a<-360||a>360)throw new Error(`"${t}" must be a number of degrees from -360 to 360`);return a}function Je(e,t){return[t?.startAngle??e[0],t?.endAngle??e[1]]}function Ke(e){return void 0!==e?.startAngle||void 0!==e?.endAngle}function Qe([e,t],a){return e+(t-e)*a}function et(...e){return{x0:Math.min(...e.map(e=>e.x0)),y0:Math.min(...e.map(e=>e.y0)),x1:Math.max(...e.map(e=>e.x1)),y1:Math.max(...e.map(e=>e.y1))}}function tt(e,t,a,o,n,r){const i=[o,n];for(let h=Math.ceil(o/90);90*h<=n;h++)i.push(90*h);const s=i.map(o=>We(e,t,a,o)),l=Math.min(...s.map(e=>e[0])),c=Math.min(...s.map(e=>e[1])),d=Math.max(...s.map(e=>e[0])),u=Math.max(...s.map(e=>e[1]));return{x0:l-r,y0:c-r,x1:d+r,y1:u+r}}function at(e,t=5){if(!Number.isFinite(e)||e<=0)return 1;const a=e/t,o=10**Math.floor(Math.log10(a)),n=a/o;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*o}function ot(e,t){const a=e=>{const t=String(Number(e.toPrecision(12)));return t.includes("e")?0:t.split(".")[1]?.length??0};return Math.min(3,Math.max(a(t),a(e)))}function nt(e){const t=e*Math.PI/180,a=Math.sin(t),o=Math.cos(t);return{anchor:a>.3?"start":a<-.3?"end":"middle",dy:o>.3?0:o<-.3?.75:.35}}function rt(e,t){switch(t?.center??"value"){case"band":return e.band.label?{kind:"text",text:e.band.label,band:!0}:{kind:"value"};case"name":return{kind:"text",text:e.name,band:!1};case"text":return t.centerText?{kind:"text",text:t.centerText,band:!1}:{kind:"none"};case"none":return{kind:"none"};default:return{kind:"value"}}}const it=["bar","thin","segmented","tank","ring","needle","arc","line","column","area","combined","pie","rings","pictograph","waffle","histogram","scatter","bubble","heatmap","box","funnel","radar","polar_area","treemap","sunburst","icicle","grouped_bars","bullet","lollipop","waterfall","slope","dumbbell","range_area","sparkline","streamgraph","candlestick","violin","beeswarm","strip_plot","sankey","timeline","climate","wind_rose","day_clock","trend"],st=[{from:-1/0,color:"primary"}],lt=["none","ascending","descending"];function ct(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"==typeof e&&""!==e.trim()){const t=Number(e);return Number.isFinite(t)?t:void 0}}function dt(e,t){if(null==e||""===e)return;const a=ct(e);if(void 0!==a)return a;if("string"==typeof e)return e;throw new Error(`"${t}" must be a number or an entity id`)}function ut(e,t,a,o=1/0){if(null==e||""===e)return;const n=ct(e);if(void 0===n||!Number.isInteger(n)||n<a||n>o){throw new Error(`"${t}" must be a whole number ${o===1/0?`of at least ${a}`:`from ${a} to ${o}`}`)}return n}function ht(e){if(null==e)return;if(!Array.isArray(e))throw new Error('"severity" must be a list of bands');if(0===e.length)return;const t=e.map((e,t)=>{let a;try{a=dt(e?.from,"from")}catch{a=void 0}if(void 0===a)throw new Error(`Severity band ${t+1}: "from" must be a number or an entity id`);if("string"!=typeof e.color||!e.color)throw new Error(`Severity band ${t+1}: "color" is required`);return{...e,from:a}});return t.every(e=>"number"==typeof e.from)?t.sort((e,t)=>e.from-t.from):t}function pt(e,t,a){if(null==e)return{action:t};if("object"!=typeof e||"string"!=typeof e.action)throw new Error(`"${a}" must have an "action"`);return e}function mt(e,t){return void 0!==e?e:t}function ft(e,t,a){const o="string"==typeof e?{entity:e}:e;if(!o||"object"!=typeof o||"string"!=typeof o.entity||!o.entity)throw new Error(`Entity ${a+1} needs an "entity" id`);if(void 0!==o.attribute&&null!==o.attribute&&"string"!=typeof o.attribute)throw new Error(`Entity ${a+1}: "attribute" must be an attribute name`);const n=mt(dt(o.min,"min"),dt(t.min,"min"))??0,r=mt(dt(o.max,"max"),dt(t.max,"max"))??100;if("number"==typeof n&&"number"==typeof r&&n>=r)throw new Error(`"max" (${r}) must be greater than "min" (${n})`);const i={...o,entity:o.entity,min:n,max:r,severity:ht(o.severity)??ht(t.severity)??st,tap_action:pt(mt(o.tap_action,t.tap_action),"more-info","tap_action"),hold_action:pt(mt(o.hold_action,t.hold_action),"none","hold_action"),double_tap_action:pt(mt(o.double_tap_action,t.double_tap_action),"none","double_tap_action")},s=mt(o.name,t.name),l=mt(o.icon,t.icon),c=mt(o.unit,t.unit),d=mt(dt(o.target,"target"),dt(t.target,"target")),u=mt(ut(o.decimals,"decimals",0,20),ut(t.decimals,"decimals",0,20));return void 0!==s&&(i.name=s),void 0!==l&&(i.icon=l),void 0!==c&&(i.unit=c),void 0!==d&&(i.target=d),void 0!==u&&(i.decimals=u),o.attribute||delete i.attribute,Ge[t.style??"bar"]&&(i.gauge=function(e,t=e.style??"bar"){const a=Xe(e.start_angle,"start_angle"),o=Xe(e.end_angle,"end_angle"),n=Ge[t];if(n&&(void 0!==a||void 0!==o)){const[e,t]=[a??n[0],o??n[1]];if(!(t>e))throw new Error(`"end_angle" (${t}) must be greater than "start_angle" (${e})`);if(t-e>360)throw new Error('"end_angle" can be at most 360 degrees after "start_angle"')}const r=e.center??"value";if(!Ye.includes(r))throw new Error(`"center" must be one of: ${Ye.join(", ")}`);if(void 0!==e.center_text&&null!==e.center_text&&"string"!=typeof e.center_text)throw new Error('"center_text" must be text');if(void 0!==e.tick_labels&&"boolean"!=typeof e.tick_labels)throw new Error('"tick_labels" must be true or false');const i={center:r,centerText:e.center_text??"",tickLabels:!0===e.tick_labels};return void 0!==a&&(i.startAngle=a),void 0!==o&&(i.endAngle=o),i}(t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt=me(class extends fe{constructor(e){if(super(e),e.type!==he&&e.type!==de&&e.type!==pe)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===R||t===W)return t;const a=e.element,o=e.name;if(e.type===he){if(t===a[o])return R}else if(e.type===pe){if(!!t===a.hasAttribute(o))return R}else if(e.type===de&&a.getAttribute(o)===t+"")return R;return we(e),t}});var vt={entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_gauge_help:"Angles are in degrees, clockwise from the top: -90 is the left, 90 the right. Leave them empty for the style's usual shape.",editor_start_angle:"Start angle",editor_end_angle:"End angle",editor_center:"In the middle",editor_center_mode_value:"The value",editor_center_mode_band:"The colour band's label",editor_center_mode_name:"The name",editor_center_mode_text:"My own text",editor_center_mode_none:"Nothing",editor_center_text:"Text",editor_tick_labels:"Numbers on the scale",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours",annotation_at:"{label} at {time}",editor_orientation:"Direction",editor_orientation_horizontal:"Across",editor_orientation_vertical:"Upright",editor_value_axis:"Value labels",editor_value_grid:"Lines at each value label",editor_value_min:"Lowest value shown",editor_value_max:"Highest value shown",dist_median:"Median",dist_middle:"Middle half",dist_range:"Lowest – highest",dist_count:"Readings",editor_drill_down:"Tap a group to show what makes it up",drill_into:"{label}. Show what makes it up",drill_back:"Back to {name}",drill_top:"All",extremes_high:"High",extremes_low:"Low",extremes_average:"Avg",editor_extremes_max:"Mark the highest reading",editor_extremes_min:"Mark the lowest reading",editor_extremes_average:"Average",editor_extremes_average_none:"Don't show",editor_extremes_average_line:"Line across the chart",editor_extremes_average_figure:"Figure only",editor_extremes:"Mark highest, lowest and average",period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months",editor_color_by_shades:"Shades of one colour",editor_shade_color:"Shade colour (palette name or CSS colour)",editor_show_percent:"Show each share as a percentage",editor_center_total:"Total",editor_center_average:"Average",editor_center_none:"Nothing",parts_total:"Total",parts_average:"Average",parts_aria:"{style} of {names}",editor_style_scatter:"Scatter",editor_style_bubble:"Bubble",editor_against:"Along the bottom",editor_against_entity:"The first entity",editor_against_time:"Time",editor_dot_size:"Dot size (px)",editor_jitter:"Jitter (px)",editor_min_size:"Smallest bubble (px)",editor_max_size:"Largest bubble (px)",editor_dot_color:"Dot colour",editor_xy_x_axis:"Labels along the bottom",scatter_needs_two:"Add a second entity. The first goes along the bottom, the others up the side.",bubble_needs_three:"Add three entities: one along the bottom, one up the side, and one for the size of each bubble.",scatter_role_x:"Across",bubble_role_size:"Size",chart_total:"Total",editor_x_min:"Lowest value across",editor_x_max:"Highest value across",zoom_reset:"Reset zoom",zoom_window:"Shown: {from} to {to}",zoom_window_label:"Part of the chart shown",editor_zoom:"Zoom and pan (pinch, Ctrl + scroll or drag)",editor_overview:"Overview strip below the chart",editor_annotations:"Annotations",editor_annotation_type:"Kind",editor_annotation_type_line:"Line at a value",editor_annotation_type_band:"Shaded band of values",editor_annotation_type_time:"Marks at set times",editor_annotation_type_state:"Marks when an entity changes",editor_annotation_type_point:"Label on a reading",editor_annotation_add_line:"Line",editor_annotation_add_band:"Band",editor_annotation_add_time:"Times",editor_annotation_add_state:"State changes",editor_annotation_add_point:"Point label",editor_annotation_add:"Add an annotation:",editor_annotation_value:"Value (a number or an entity)",editor_annotation_from:"From (a number or an entity; blank for the bottom)",editor_annotation_to:"To (a number or an entity; blank for the top)",editor_annotation_times:"Times: 07:00 for every day, or 2026-10-28 07:00 (commas between)",editor_annotation_entity:"Entity",editor_annotation_series:"Series (blank for the first)",editor_annotation_state:"State (blank for every change)",editor_annotation_shade:"Shade while in this state",editor_annotation_at:"Reading",editor_annotation_at_max:"Highest",editor_annotation_at_min:"Lowest",editor_annotation_at_last:"Latest",editor_annotation_at_first:"First",editor_annotation_label:"Label",editor_annotation_color:"Colour",editor_annotation_dash:"Dashed",editor_annotation_remove:"Remove annotation",editor_zones:"Shade the severity bands behind the chart",editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)",editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_y_scale:"Value scale",editor_y_scale_linear:"Even steps",editor_y_scale_log:"Logarithmic (powers of ten)",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden",editor_labels_show:"Which readings",editor_labels_show_all:"All (as many as fit)",editor_labels_show_last:"The latest",editor_labels_show_minmax:"Highest and lowest",editor_labels_show_ends:"First and latest",editor_labels_position:"Label position",editor_labels_position_auto:"Above peaks, below dips",editor_labels_position_above:"Above",editor_labels_position_below:"Below",editor_labels_position_center:"On the point",editor_labels_overlap:"Let labels overlap",editor_sync:"Sync group (charts with the same name share the pointer and period steps)",editor_multiples:"A small chart for each entity",editor_multiples_scale:"Value scale",editor_multiples_scale_auto:"The same when the units match",editor_multiples_scale_shared:"The same for every chart",editor_multiples_scale_independent:"Each chart its own",editor_multiples_columns:"Columns (empty fits the card)",editor_set_point:"Show the set point",editor_shading:"Shade while heating or cooling",editor_shade_fan:"Shade while only the fan runs",editor_current_color:"Temperature colour",editor_set_point_color:"Set point colour",editor_heating_color:"Heating colour",editor_cooling_color:"Cooling colour",editor_days:"Days (more than 1 shows the average day)",editor_day_clock_center_total:"Time on",editor_day_clock_center_now:"The time now",editor_day_clock_center_none:"Nothing",editor_bucket:"One bar for every",editor_bucket_15:"15 minutes",editor_bucket_30:"30 minutes",editor_bucket_60:"Hour",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_ring_color:"Colour",editor_active:"Counts as on (empty: on, open, heating, home…)",editor_entity_options_none:"Add an entity above first.",editor_hierarchy_group_by:"Group by",editor_group_by_floor:"Floor",editor_group_by_area:"Area",editor_group_by_device:"Device",editor_group_by_label:"Label",editor_entity_groups:'Own group (wins over "Group by"; "Ground floor / Kitchen" for two levels)',editor_bar_labels:"Text on the bars",editor_bar_labels_state:"State",editor_bar_labels_duration:"How long",editor_bar_labels_both:"State and how long",editor_bar_labels_none:"None",editor_timeline_legend:"Legend of states",editor_timeline_legend_above:"Above the chart",editor_timeline_legend_hidden:"Hidden",editor_state_colors:"State colours",editor_state_colors_help:"A palette name (amber, green, blue, red, purple, grey, primary) or any CSS colour.",editor_state_colors_state:"State",editor_state_colors_color:"Colour",editor_state_colors_add:"Add a state colour",editor_state_colors_remove:"Remove",editor_timeline_group:"Group (rows with the same group share a heading)",editor_points_per_hour:"Points per hour (0 draws every reading)",editor_graph:"Graph",editor_graph_line:"Line",editor_graph_bar:"Bars",editor_graph_none:"None (value only)",editor_fill:"Fill under the line",editor_fill_solid:"Solid",editor_fill_fade:"Fade",editor_fill_none:"None",editor_points:"Dots on the line",editor_points_hover:"On hover",editor_points_always:"Always",editor_points_never:"Never",editor_trend_labels:"Highest and lowest labels",editor_labels_hover:"On hover",editor_labels_always:"Always",editor_labels_never:"Never",editor_height:"Graph height (per 500 px of width)",editor_bar_spacing:"Space between bars (px)",editor_color_transition:"Band colours",editor_color_transition_smooth:"Blend",editor_color_transition_hard:"Change at each band",editor_extrema:"Show lowest and highest",editor_average:"Show average",editor_trend_legend:"Legend (two or more entities)",editor_trend_y_min:"Lowest value (~ for soft)",editor_trend_y_max:"Highest value (~ for soft)",editor_min_range:"Smallest range shown",editor_y_min_secondary:"Right axis lowest (~ for soft)",editor_y_max_secondary:"Right axis highest (~ for soft)",editor_min_range_secondary:"Right axis smallest range",editor_value_factor:"Scale by 10 to the power of",editor_align_header:"Name and icon",editor_align_header_default:"Spread out",editor_align_header_left:"Left",editor_align_header_right:"Right",editor_align_header_center:"Centre",editor_align_icon:"Icon",editor_align_icon_right:"Right of the name",editor_align_icon_left:"Left of the name",editor_align_icon_state:"Beside the value",editor_align_state:"Value",editor_align_state_left:"Left",editor_align_state_right:"Right",editor_align_state_center:"Centre",editor_font_size:"Value size (%)",editor_font_size_header:"Name size (px)",editor_color_name:"Colour the name",editor_color_value:"Colour the value",editor_trend_color_icon:"Colour the icon",editor_trend_group:"No background (inside another card)",editor_icon_image:"Image instead of the icon (URL)",editor_trend_tooltip:"Show the value under the pointer",editor_y_axis_side:"Axis",editor_y_axis_side_primary:"Left",editor_y_axis_side_secondary:"Right (its own scale)",editor_entity_aggregate:"Combine with",editor_fixed_value:"Draw the current value as a flat line",editor_show_state:"Show its value beside the main one",editor_show_indicator:"Colour dot by the value",editor_show_graph:"On the graph",editor_show_line:"Line",editor_show_fill:"Fill",editor_show_points:"Dots",editor_show_legend_entity:"In the legend",editor_show_legend_state:"Value in the legend",editor_sectors:"Directions",editor_sectors_4:"4 (N, E, S, W)",editor_sectors_8:"8 (N, NE, E…)",editor_sectors_16:"16 (N, NNE, NE…)",editor_calm:"Calm below (blank: 0.5 m/s, or the same in km/h, mph or knots)",editor_wind_roles:"The first entity is the wind direction, in degrees or compass points such as SW. The second is the wind speed: without one, the petals only show how often the wind came from each way.",editor_wind_now:"Direction: {direction}. Speed: {speed}.",editor_wind_none:"none",editor_wind_statistics:"Long-term statistics give each hour's average direction. That is only right across north when the sensor records direction as an angle (state class measurement_angle); otherwise an hour swinging between NNW and NNE averages to south. History is exact.",editor_style_area:"Area",editor_stack:"Stack",editor_stack_none:"Don't stack",editor_stack_normal:"On top of each other",editor_stack_percent:"To 100 %",editor_negative_color:"Colour below zero",editor_style_beeswarm:"Beeswarm",editor_place_by:"Place each dot by",editor_place_by_value:"Its value",editor_place_by_time_of_day:"The time of day it happened",editor_size_by_value:"Bigger dots for bigger values",swarm_readings:"{n} readings",swarm_events:"{n} times on",swarm_shown:"Dots shown",swarm_none:"No readings",swarm_earliest_latest:"Earliest – latest",swarm_lowest_highest:"Lowest – highest",editor_style_strip_plot:"Strip plot",strip_median_value:"Median {value}",strip_mean_value:"Average {value}",strip_mean:"Average",editor_strip_marker:"Line across each row at",editor_strip_marker_median:"The median",editor_strip_marker_mean:"The average",editor_strip_marker_none:"No line",editor_strip_jitter:"Spread across the row",editor_fill_color:"Colour",editor_style_box:"Box plot",box_aria:"Box plot of {names}",box_highest:"Highest",box_upper_quartile:"Upper quartile",box_median:"Median",box_lower_quartile:"Lower quartile",box_lowest:"Lowest",box_mean:"Average",box_count:"Readings",box_outliers:"Outliers",editor_whiskers:"Whiskers reach",editor_whiskers_tukey:"1.5 × box height (outliers as dots)",editor_whiskers_range:"The lowest and highest",editor_readings:"Show each reading as a dot",editor_box_color:"Box colour",editor_style_bullet:"Bullet",editor_ranges:"Ranges behind the bar",editor_ranges_shades:"Shades of grey",editor_ranges_colours:"Colour band colours",compare_target:"target {target}",chart_aria:"{style} chart of {names}",editor_style_candlestick:"Candlestick",editor_candle_by:"One candle per",editor_under_aggregate:"Entities underneath: combine readings with",editor_up_color:"Colour when it rose",editor_down_color:"Colour when it fell",editor_underneath:"Draw the other entities underneath as",editor_underneath_columns:"Columns",editor_underneath_line:"A line",candle_open:"Open",candle_high:"High",candle_low:"Low",candle_close:"Close",candle_week_of:"Week of {date}",editor_style_climate:"Climate",climate_set_point:"Set point",climate_range:"{low} – {high}",climate_not_thermostat:"{name} is not a thermostat. Pick a climate entity.",climate_action_heating:"Heating",climate_action_preheating:"Preheating",climate_action_cooling:"Cooling",climate_action_defrosting:"Defrosting",climate_action_drying:"Drying",climate_action_fan:"Fan",climate_action_idle:"Idle",climate_action_off:"Off",editor_style_column:"Column",editor_group_by_auto:"Automatic",editor_range:"Lowest to highest in each column",editor_rounded:"Rounded ends",editor_column_labels:"Show values on the columns",editor_column_color:"Colour",editor_style_combined:"Combined",editor_series_type:"Draw as",editor_series_type_line:"Line",editor_series_type_column:"Columns",editor_series_type_area:"Area",editor_series_axis:"Value axis",editor_series_axis_auto:"Automatic (by unit)",editor_series_axis_left:"Left",editor_series_axis_right:"Right",editor_series_aggregate:"Combine with",editor_series_aggregate_auto:"As the card",editor_series_aggregate_mean:"Average",editor_series_aggregate_sum:"Sum",editor_series_aggregate_min:"Lowest",editor_series_aggregate_max:"Highest",editor_series_aggregate_first:"First",editor_series_aggregate_last:"Last",editor_series_aggregate_change:"Change (meters that count up)",editor_style_day_clock:"24-hour clock",day_clock_times_one:"once",day_clock_times:"{n} times",day_clock_a_day:"{text} a day",day_clock_busiest:"{total} · busiest {time}",day_clock_peak:"peak {value} at {time}",day_clock_state:"{name} {state}",day_clock_per_day:"{label} per day",day_clock_no_data:"Nothing recorded",day_clock_now:"Now",day_clock_on:"on",day_clock_average:"Average day · last {n} days",day_clock_on_days:"on {on} of {of} days",day_clock_so_far:"{duration} so far",day_clock_range:"{from} – {to}",day_clock_average_value:"{value} on average",editor_style_dumbbell:"Dumbbell",editor_ends:"Compare",editor_ends_range:"Lowest and highest in the period",editor_ends_then:"Start of the period and now",editor_ends_target:"Target and now",editor_show_now:"Mark the current value",dumbbell_low:"Low",dumbbell_high:"High",dumbbell_now:"Now",dumbbell_target:"Target",dumbbell_ago_hour_one:"An hour ago",dumbbell_ago_hour:"{n} hours ago",dumbbell_ago_day_one:"A day ago",dumbbell_ago_day:"{n} days ago",dumbbell_ago_week_one:"A week ago",dumbbell_ago_week:"{n} weeks ago",dumbbell_ago_month_one:"A month ago",dumbbell_ago_month:"{n} months ago",dumbbell_no_value:"No value",editor_style_funnel:"Funnel",editor_funnel_shape:"Shape",editor_funnel_shape_funnel:"Funnel (first stage at the top)",editor_funnel_shape_pyramid:"Pyramid (first stage at the bottom)",editor_funnel_percent_of:"Percentages",editor_funnel_percent_of_first:"Share of the first stage",editor_funnel_percent_of_previous:"Share of the stage before",editor_funnel_percent_of_none:"Don't show",editor_funnel_color_by:"Colour",editor_funnel_color_by_series:"One colour per entity",editor_funnel_color_by_bands:"By colour band",funnel_aria:"{style} of {names}",editor_style_grouped_bars:"Grouped bars",editor_mode:"Bars",editor_mode_grouped:"Side by side",editor_mode_stacked:"Stacked",editor_mode_percent:"Stacked to 100 %",editor_bars_color_by:"Colour",editor_bars_color_by_series:"One colour per series",editor_bars_color_by_bands:"By colour band",editor_bar_group:"Row",editor_bar_series:"Series",editor_bar_color:"Bar colour",grouped_bars_aria:"Bar chart of {names}",editor_style_heatmap:"Heatmap",heatmap_aria:"Heatmap of {name}",heatmap_hours:"Days averaged",heatmap_empty:"No readings",editor_grid:"Layout",editor_grid_hours:"Hour by weekday",editor_grid_calendar:"Calendar (a day per cell)",editor_color_by_scale:"Smooth scale",editor_cell_shape:"Cells",editor_cell_shape_square:"Square",editor_cell_shape_rounded:"Rounded",editor_cell_shape_hexagon:"Hexagon",editor_color_min:"Lowest colour at",editor_color_max:"Highest colour at",editor_legend:"Legend",editor_style_histogram:"Histogram",editor_count:"Count",editor_count_time:"Time spent in each range",editor_count_readings:"Readings in each range",editor_show_as:"Show as",editor_show_as_percent:"Share of the whole (%)",editor_show_as_total:"Hours or readings",editor_bins:"Number of bins (empty: automatic)",editor_bin_width:"Bin width (wins over the number)",editor_bars:"Two or more entities",editor_bars_side:"Bars side by side",editor_bars_overlap:"Bars over each other",editor_hist_x_axis:"Value labels along the bottom",histogram_readings:"{n} readings",histogram_reading:"1 reading",editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",chart_log_nothing:"Nothing above zero to draw on a log scale.",editor_style_lollipop:"Lollipop",editor_style_pictograph:"Pictograph",editor_unit_icon:"Icon (each entity can have its own)",editor_per_icon:"Each icon stands for (empty: automatic)",editor_group_size:"Icons per group (0: no groups)",editor_partial:"Part-fill an icon for fractions",editor_style_pie:"Pie / donut",editor_shape:"Shape",editor_shape_donut:"Donut",editor_shape_pie:"Pie",editor_center_label:"Line under the total",editor_gap:"Space between slices",editor_gradient:"Gradient fills",editor_style_polar_area:"Polar area",editor_polar_scale:"Scale",editor_polar_scale_shared:"One scale for all, from 0 to the largest value",editor_polar_scale_limits:"Each slice from its entity's minimum to maximum",editor_polar_color_by:"Colour",editor_polar_color_by_series:"One colour per entity",editor_polar_color_by_shades:"Shades of one colour, darker for more",editor_polar_color_by_bands:"By colour band",editor_polar_color:"Colour for shades",polar_area_aria:"Polar area chart of {names}",editor_style_radar:"Radar",editor_radar_scale:"Scale",editor_radar_scale_limits:"Each axis from its entity's minimum to maximum",editor_radar_scale_shared:"One scale for all, from 0 to the largest value",editor_radar_fill:"Fill the shapes",editor_radar_axis:"Axis name (entities with the same axis name line up across groups)",radar_aria:"Radar chart of {names}",radar_other:"Other",editor_style_range_area:"Range area",editor_mean:"Draw the average as a line",editor_range_color:"Colour",editor_style_rings:"Rings",editor_rings_start_angle:"Start angle (0 is the top)",editor_rounded_ends:"Rounded ends",editor_style_sankey:"Sankey (flow)",editor_link_color:"Colour flows by",editor_link_color_auto:"Where they come from, or where they go after a middle node",editor_link_color_source:"Where they come from",editor_link_color_target:"Where they go",editor_from:"Flows from",editor_to:"Flows to",editor_flow_color:"Flow colour",sankey_aria:"Flow chart: {flows}",sankey_flow:"{from} to {to} {value}",sankey_no_flows:'Give each entity a "Flows from" and a "Flows to" in its options.',sankey_nothing:"Nothing is flowing right now.",editor_style_slope:"Slope",editor_measure:"Compare",editor_measure_value:"The reading then and now",editor_measure_change:"How much it rose in each period (meters)",editor_color_by_direction:"Up or down",editor_color_by_group:"By group",editor_increase:"A rise is",editor_increase_bad:"Bad (red)",editor_increase_good:"Good (green)",editor_group:"Group",slope_now:"Now",slope_ago:"{n} {unit} ago",slope_ago_one:"A {unit} ago",slope_previous:"Previous {n} {unit}",slope_previous_one:"Previous {unit}",slope_last:"Last {n} {unit}",slope_last_one:"Last {unit}",slope_unit_hour:"hour",slope_unit_hour_other:"hours",slope_unit_day:"day",slope_unit_day_other:"days",slope_unit_week:"week",slope_unit_week_other:"weeks",slope_unit_month:"month",slope_unit_month_other:"months",slope_entity_aria:"{name}, {from} to {to}",slope_no_reading:"no reading",editor_style_sparkline:"Sparklines",editor_spark:"Sparkline",editor_spark_line:"Line",editor_spark_area:"Area",editor_spark_column:"Columns",editor_spark_bar:"Bar under the name and value",editor_spark_color:"Colour",spark_aria:"Trend of {name}",editor_style_streamgraph:"Streamgraph",editor_baseline:"Shape",editor_baseline_wiggle:"Streamgraph (flowing)",editor_baseline_centre:"Centred",editor_baseline_share:"Share of the total (100 %)",editor_baseline_zero:"Stacked from zero",editor_stream_order:"Order",editor_stream_order_inside_out:"Biggest in the middle",editor_stream_order_listed:"As listed, first at the bottom",editor_stream_labels:"Names on the streams",editor_stream_curve:"Edges",stream_total:"Total",editor_style_sunburst:"Sunburst",editor_style_icicle:"Icicle",editor_sunburst_shape:"Shape",editor_sunburst_shape_full:"Full circle",editor_sunburst_shape_half:"Half circle",editor_hierarchy_color_by:"Colour",editor_hierarchy_color_by_group:"One colour per group",editor_hierarchy_color_by_bands:"By colour band",hierarchy_total:"Total",hierarchy_other:"Other",hierarchy_empty:"Nothing to show: no entity has a value above zero.",hierarchy_no_reading:"No reading:",sunburst_aria:"Sunburst of {names}",icicle_aria:"Icicle chart of {names}",editor_style_timeline:"State timeline",timeline_no_states:"No states recorded in this period.",timeline_for:"for {duration}",timeline_now:"Now",timeline_measurement:"Readings, not states: a line chart suits this one",editor_style_treemap:"Treemap",editor_treemap_color_by:"Colour",editor_treemap_color_by_group:"One colour per group",editor_treemap_color_by_bands:"By colour band",treemap_aria:"Treemap of {names}",treemap_total:"{value} in all",treemap_empty:"Nothing to show: no entity has a value above zero.",treemap_no_reading:"No reading:",treemap_other:"Other",editor_style_trend:"Trend",trend_min:"Low",trend_avg:"Average",trend_max:"High",editor_style_violin:"Violin",editor_shape_violin:"Violin",editor_shape_raincloud:"Raincloud (half violin, box and readings)",editor_box:"Box with the median and middle half",editor_bandwidth:"Smoothing (in the entity’s unit, empty for automatic)",editor_split_by:"One shape per",editor_split_by_none:"Entity",editor_split_by_day:"Entity and day",editor_split_by_week:"Entity and week",editor_split_by_month:"Entity and month",violin_median:"median {value}",violin_none:"No readings",violin_raincloud:"Raincloud",editor_style_waffle:"Waffle",editor_waffles:"Waffles",editor_waffles_one:"One, split between the entities",editor_waffles_each:"One per entity, side by side",editor_headline:"Show the first share in large type",editor_style_waterfall:"Waterfall",editor_steps:"Each step is",editor_steps_change:"How much it changed in the period",editor_steps_current:"Its current value",editor_start_from_first:"Start from the first entity's reading at the start of the period",editor_total:"Show the total at the end",editor_waterfall_invert:"Counts down (a rise in these is a drop in the total)",waterfall_start:"Start",waterfall_end:"End",waterfall_total:"Total",waterfall_no_readings:"No readings",waterfall_aria:"Waterfall chart: {bars}",editor_style_wind_rose:"Wind rose",wind_prevailing:"Prevailing",wind_mean_speed:"Mean speed",wind_strongest:"Strongest",wind_calm:"Calm",wind_speed:"Speed",wind_speed_unit:"Speed ({unit})",wind_share:"Of the time",wind_aria:"Wind rose, prevailing {direction} {share}",wind_aria_calm:"Wind rose, prevailing {direction} {share}, calm {calm}",wind_aria_still:"Wind rose, calm {calm}"};const yt="en",bt={[yt]:vt},_t={de:()=>import("./chartdeck-card.de-CRgp4m43.js"),es:()=>import("./chartdeck-card.es-DvnuYrzm.js"),fr:()=>import("./chartdeck-card.fr-DSGTWQqm.js"),nl:()=>import("./chartdeck-card.nl-CSdqavMP.js"),pt:()=>import("./chartdeck-card.pt-puLmiEu2.js")},xt=new Map,wt="chartdeck-language-loaded";function $t(e){const t=[e];return e.includes("-")&&t.push(e.split("-")[0]),t}function kt(e){const t=$t(e).find(e=>void 0!==_t[e]);if(!t||bt[t])return Promise.resolve();let a=xt.get(t);return a||(a=_t[t]().then(e=>{return a=t,o=e.default,bt[a]=o,void("undefined"!=typeof window&&window.dispatchEvent(new Event(wt)));var a,o}).catch(()=>{xt.delete(t)}),xt.set(t,a)),a}function Mt(e){const t=function(e){return e?.locale?.language??e?.language??yt}(e),a=$t(t).find(e=>void 0!==bt[e]);return a||(kt(t),yt)}function zt(e,t,a){const o=bt[Mt(e)][t]??bt[yt][t]??t;return a?o.replace(/\{(\w+)\}/g,(e,t)=>t in a?String(a[t]):e):o}Object.keys(_t);{const e=function(){if("undefined"!=typeof document){const e=document.querySelector("home-assistant")?.hass,t=e?.locale?.language??e?.language;if(t)return t}try{const e=JSON.parse(globalThis.localStorage?.getItem("selectedLanguage")??"null");if("string"==typeof e&&e)return e}catch{}}();e&&kt(e)}function St(e){return null==e||""===e}function At(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function Et(e,t,a){const[o,...n]=t,r=function(e,t){return Array.isArray(e)?[...e]:At(e)?{...e}:"number"==typeof t?[]:{}}(e,o),i=r,s=n.length?Et(i[o],n,a):a,l=n.length>0&&At(s)&&0===Object.keys(s).length;return St(s)?Array.isArray(r)&&"number"==typeof o?r.splice(o,1):delete i[o]:l&&At(r)?delete i[o]:i[o]=s,r}function jt(e,t,a){return 0===t.length||St(a)&&void 0===function(e,t){let a=e;for(const o of t){if("object"!=typeof a||null===a)return;a=a[o]}return a}(e,t)?e:Et(e,t,a)}function Ct(e){return"string"==typeof e?e:e.entity}function Nt(e,t,a,o){if("entity"===a&&(St(o)||"string"!=typeof o))return e;const n=[...e.entities??[]],r=n[t];if(void 0===r)return e;const i="string"==typeof r?{entity:r}:{...r};St(o)?delete i[a]:i[a]=o;const s=Object.keys(i);return n[t]=1===s.length&&"entity"===s[0]&&"string"==typeof i.entity?i.entity:i,{...e,entities:n}}const Lt=2.5,Tt=.5,Ot=12;function Ft(e,t){const a=e;return{width:a.line_width??t.line_width??Lt,dots:a.dots??!0===t.dots,onTop:!0===a.on_top}}function Pt(e,t){return[...e.filter(e=>!t(e)),...e.filter(t)]}function Dt(e){return e.map(([e,t])=>`M${Math.round(100*e)/100},${Math.round(100*t)/100}h0`).join("")}function Ut(e){return Math.round(10*(e+3.5))/10}function Ht(e,t){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<Tt||e>Ot))throw new Error(`${t} must be a number from 0.5 to 12`)}function It(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`${t} must be true or false`)}function Bt(e){Ht(e.line_width,'"line_width"'),It(e.dots,'"dots"');for(const t of e.entities??[])"object"==typeof t&&(Ht(t.line_width,`"line_width" of ${t.entity}`),It(t.dots,`"dots" of ${t.entity}`),It(t.on_top,`"on_top" of ${t.entity}`))}const qt=[{name:"title",path:["title"]}],Zt=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],Rt=[{name:"color_icon",path:["color_icon"],default:!1}],Wt=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],Vt=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],Yt=[{name:"start_angle",path:["start_angle"]},{name:"end_angle",path:["end_angle"]},{name:"center",path:["center"],default:"value"},{name:"center_text",path:["center_text"]},{name:"tick_labels",path:["tick_labels"],default:!1}],Gt=new Map;const Xt=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],Jt=[{name:"attribute",path:["attribute"]}],Kt=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],Qt={number:{min:Tt,max:Ot,step:.5,mode:"box",unit_of_measurement:"px"}},ea=new Map;function ta(e){let t=ea.get(e);return t||(t=[...Kt,{name:"dots",path:["dots"],default:e}],ea.set(e,t)),t}const aa=Vt.map(({name:e,path:t})=>({name:e,path:t})),oa=[{name:"title",selector:{text:{}}}],na=Vt.map(({name:e})=>({name:e,selector:{ui_action:{}}})),ra=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],ia=new Map;let sa;function la(e){const t=Mt(e);if(sa?.language!==t){const a=t=>zt(e,t);sa={language:t,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(e=>({value:e,label:a(`editor_curve_${e}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return sa.schema}function ca(e){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(t=>({value:t,label:zt(e,`editor_sort_${t}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const da={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function ua(e,t){const a=e=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:e}});switch(e){case"device_class":return a(t.deviceClasses);case"domain":return a(t.domains);case"entity":return{entity:{multiple:!0}};default:return{[e]:{multiple:!0}}}}const ha=new Map;function pa(e,t){const a=function(e){const t=new Set,a=new Set;for(const o of Object.values(e?.states??{})){const e=o.attributes?.device_class;"string"==typeof e&&e&&t.add(e),a.add(o.entity_id.slice(0,o.entity_id.indexOf(".")))}return{deviceClasses:[...t].sort(),domains:[...a].sort()}}(t),o=`${a.deviceClasses.join()}|${a.domains.join()}`,n=ha.get(e);if(n?.key===o)return n.schema;const r=da[e].map(t=>({name:`${e}_${t}`,selector:ua(t,a)}));return ha.set(e,{key:o,schema:r}),r}let ma;function fa(e,t){let a=e;for(const o of t){if("object"!=typeof a||null===a)return;a=a[o]}return a}function ga(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;const a=Object.keys(e),o=Object.keys(t);return a.length===o.length&&a.every(a=>ga(e[a],t[a]))}function va(e,t){const a={};for(const o of t){const t=fa(e,o.path)??o.default;void 0!==t&&(a[o.name]=t)}return a}function ya(e,t,a){const o=va(e,t);let n=e;for(const r of t){const e=a[r.name];ga(o[r.name],e)||(n=jt(n,r.path,void 0!==r.default&&ga(e,r.default)?void 0:e))}return n}const ba="var(--divider-color, rgba(127, 127, 127, 0.3))",_a="var(--primary-color, #03a9f4)",xa="var(--secondary-text-color, #727272)";function wa(e,t,a,o){const n=(o-90)*Math.PI/180;return[(e+a*Math.cos(n)).toFixed(2),(t+a*Math.sin(n)).toFixed(2)]}function $a(e,t,a,o){return wa(e,t,a,o).join(" ")}function ka(e,t,a,o,n){const r=n-o>180?1:0;return`M ${$a(e,t,a,o)} A ${a} ${a} 0 ${r} 1 ${$a(e,t,a,n)}`}function Ma(e){return q`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(e){switch(e){case"bar":return Z`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${ba} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${_a} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${ba} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${_a} />`;case"thin":return Z`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${xa} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${ba} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${_a} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${xa} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${ba} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${_a} />`;case"segmented":return Z`${[0,1].map(e=>Array.from({length:8},(t,a)=>Z`<rect x=${6+6.75*a} y=${0===e?9:23} width="5" height="9" rx="1.5"
            fill=${a<(0===e?6:3)?_a:ba} />`))}`;case"tank":return Z`${[14,36].map((e,t)=>Z`
          <rect x=${e} y="5" width="14" height="30" rx="4" fill=${ba} />
          <rect x=${e} y=${0===t?13:23} width="14" height=${0===t?22:12} rx="4" fill=${_a} />`)}`;case"ring":return Z`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${ba} stroke-width="5" />
        <path d=${ka(32,20,14,0,250)} fill="none" stroke=${_a} stroke-width="5" stroke-linecap="round" />`;case"arc":return Z`
        <path d=${ka(32,21,14,-135,135)} fill="none" stroke=${ba} stroke-width="5" stroke-linecap="round" />
        <path d=${ka(32,21,14,-135,40)} fill="none" stroke=${_a} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[e,t]=wa(32,32,18,25);return Z`
        <path d=${ka(32,32,22,-90,90)} fill="none" stroke=${ba} stroke-width="5" />
        <path d=${ka(32,32,22,-90,25)} fill="none" stroke=${_a} stroke-width="5" />
        <line x1="32" y1="32" x2=${e} y2=${t} stroke=${xa} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${xa} />`}default:return Z``}}(e)}
  </svg>`}function za(e){let t=1/0,a=-1/0;for(const o of e)for(const e of o)for(const o of[e.v,e.min,e.max])"number"==typeof o&&(o<t&&(t=o),o>a&&(a=o));return t===1/0?void 0:[t,a]}function Sa([e,t],a=.08){if(e===t)return[e-1,t+1];const o=(t-e)*a;return[e-o,t+o]}function Aa(e,t){const[a,o]=e,[n,r]=t,i=o===a?0:(r-n)/(o-a);return e=>n+(e-a)*i}const Ea=["linear","log"],ja=["outside","inside"],Ca=!0,Na=!0,La="outside",Ta=!0,Oa=!1,Fa="linear",Pa=e=>"number"==typeof e&&Number.isFinite(e);function Da(e){const t=e;for(const a of["x_axis","y_axis"])if(void 0!==t[a]&&"boolean"!=typeof t[a])throw new Error(`"${a}" must be true or false`);if(void 0!==t.axis_labels&&!ja.includes(t.axis_labels))throw new Error(`"axis_labels" must be one of: ${ja.join(", ")}`);if(void 0!==t.gridlines){const e=t.gridlines;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const t of["horizontal","vertical"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"gridlines.${t}" must be true or false`)}for(const a of["y_min","y_max"])if(void 0!==t[a]&&!Pa(t[a]))throw new Error(`"${a}" must be a number`);if(Pa(t.y_min)&&Pa(t.y_max)&&t.y_min>=t.y_max)throw new Error('"y_min" must be below "y_max"');if(void 0!==t.y_scale&&!Ea.includes(t.y_scale))throw new Error(`"y_scale" must be one of: ${Ea.join(", ")}`);if("log"===t.y_scale)for(const a of["y_min","y_max"])if(Pa(t[a])&&t[a]<=0)throw new Error(`"${a}" must be above 0 on a log scale`)}function Ua(e){const t=e,a=t.gridlines??{};return{x:t.x_axis??Ca,y:t.y_axis??Na,labels:t.axis_labels??La,horizontal:a.horizontal??Ta,vertical:a.vertical??Oa,min:Pa(t.y_min)?t.y_min:void 0,max:Pa(t.y_max)?t.y_max:void 0,scale:t.y_scale??Fa}}function Ha(e,t){if(!(e>0&&Number.isFinite(e)))return 1;const a=e/Math.max(1,t),o=10**Math.floor(Math.log10(a));for(const n of[1,2,5])if(n*o>=a*(1-1e-9))return n*o;return 10*o}function Ia(e){return Math.max(0,-Math.floor(Math.log10(e)+1e-9))}const Ba=e=>Number(e.toPrecision(12));function qa(e,t,a){let[o,n]=Sa(e??[0,1]);void 0!==t.min&&(o=t.min),void 0!==t.max&&(n=t.max),n<=o&&(void 0!==t.min?n=o+Math.max(1,.1*Math.abs(o)):o=n-Math.max(1,.1*Math.abs(n)));const r=Ha(n-o,a);void 0===t.min&&(o=Ba(Math.floor(o/r+1e-9)*r)),void 0===t.max&&(n=Ba(Math.ceil(n/r-1e-9)*r));const i=[];for(let s=Math.ceil(o/r-1e-9);s*r<=n+1e-9*r;s++)i.push(Ba(s*r));return{domain:[o,n],ticks:i,decimals:Ia(r)}}const Za=6e4,Ra=36e5,Wa=864e5,Va=[...[1,5,10,15,30].map(e=>({unit:"minute",n:e,ms:e*Za})),...[1,2,3,6,12].map(e=>({unit:"hour",n:e,ms:e*Ra})),...[1,2,7].map(e=>({unit:"day",n:e,ms:e*Wa})),...[1,2,3,6].map(e=>({unit:"month",n:e,ms:30.44*e*Wa})),...[1,2,5,10,20,50,100].map(e=>({unit:"year",n:e,ms:365.25*e*Wa}))];const Ya=e=>-new Date(e).getTimezoneOffset()*Za;function Ga(e){if(!e)return Ya;let t;try{t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return Ya}return e=>{const a={};for(const o of t.formatToParts(e))a[o.type]=Number(o.value);return Date.UTC(a.year,a.month-1,a.day,a.hour%24,a.minute,a.second)-1e3*Math.floor(e/1e3)}}function Xa(e,t){return e-t(e-t(e))}function Ja(e,t,a,o){const n=[],r=e.end+t(e.end);for(let i=a,s=0;i<=r&&s<1e3;i=o(i),s++){const a=Xa(i,t);a>=e.start&&a<=e.end&&a!==n[n.length-1]&&n.push(a)}return n}function Ka(e,t,a=Ya){const{unit:o,n:n}=function(e,t){return Va.find(a=>e/a.ms<=Math.max(1,t))??Va[Va.length-1]}(e.end-e.start,t),r=e.start+a(e.start);if("minute"===o||"hour"===o||"day"===o&&7!==n){const t=n*("minute"===o?Za:"hour"===o?Ra:Wa);return{unit:o,ticks:Ja(e,a,Math.ceil(r/t)*t,e=>e+t)}}if("day"===o){const t=Math.ceil(r/Wa);return{unit:o,ticks:Ja(e,a,(t+((4-t)%7+7)%7)*Wa,e=>e+7*Wa)}}const i=new Date(r);if("month"===o){let t=i.getUTCFullYear(),s=i.getUTCMonth();Date.UTC(t,s)<r&&(s+=1),s=Math.ceil(s/n)*n,t+=Math.floor(s/12),s%=12;const l=e=>{const t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+n)};return{unit:o,ticks:Ja(e,a,Date.UTC(t,s),l)}}let s=i.getUTCFullYear();return Date.UTC(s,0)<r&&(s+=1),s=Math.ceil(s/n)*n,{unit:o,ticks:Ja(e,a,Date.UTC(s,0),e=>Date.UTC(new Date(e).getUTCFullYear()+n,0))}}function Qa(e){return"server"===e?.locale?.time_zone?e.config?.time_zone:void 0}function eo(e){const t=e?.locale?.time_format;return"12"===t||"24"!==t&&void 0}const to=new Map;function ao(e,t,a){const o=`${e}|${t}|${JSON.stringify(a)}`;let n=to.get(o);if(!n){try{n=new Intl.DateTimeFormat(e,{...a,timeZone:t})}catch{n=new Intl.DateTimeFormat(void 0,a)}to.set(o,n)}return n}function oo(e,t,a=!1){return ao(t?.locale?.language??"en",Qa(t),{hour:"numeric",minute:"2-digit",...a?{second:"2-digit"}:{},hour12:eo(t)}).format(e)}function no(e,t){return ao(t?.locale?.language??"en",Qa(t),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:eo(t)}).format(e)}function ro(e,t,a,o,n){const r=o?.locale?.language??"en",i=Qa(o),s=e+(n??Ga(i))(e),l=new Date(s),c=s%Wa===0;switch(t){case"minute":case"hour":return c?ao(r,i,{weekday:"short"}).format(e):oo(e,o);case"day":return a<=7*Wa?ao(r,i,{weekday:"short"}).format(e):ao(r,i,{day:"numeric",month:"short"}).format(e);case"month":return ao(r,i,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(e);default:return ao(r,i,{year:"numeric"}).format(e)}}function io(e,t){if(e.length<=t)return e;const a=[];let o=[];for(const r of e)null===r.v?(o.length&&a.push(o),a.push([r]),o=[]):o.push(r);o.length&&a.push(o);const n=e.length;return a.flatMap(e=>null===e[0].v?e:function(e,t){if(e.length<=t||t<3)return e;const a=[e[0]],o=(e.length-2)/(t-2);let n=0;for(let r=0;r<t-2;r++){const t=Math.floor(r*o)+1,i=Math.min(Math.floor((r+1)*o)+1,e.length-1),s=i,l=Math.min(Math.floor((r+2)*o)+1,e.length);let c=0,d=0;const u=Math.max(1,l-s);for(let a=s;a<l;a++)c+=e[a].t,d+=e[a].v;c/=u,d/=u;let h=t,p=-1;const m=e[n];for(let a=t;a<i;a++){const t=Math.abs((m.t-c)*(e[a].v-m.v)-(m.t-e[a].t)*(d-m.v));t>p&&(p=t,h=a)}a.push(e[h]),n=h}return a.push(e[e.length-1]),a}(e,Math.max(3,Math.round(e.length/n*t))))}const so=36e5,lo=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],co=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],uo=new Map;function ho(e){let t=uo.get(e);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),uo.set(e,t)),t}function po(e,t){const a={};for(const o of ho(t).formatToParts(new Date(e)))a[o.type]=o.value;return{year:Number(a.year),month:Number(a.month),day:Number(a.day),hour:Number(a.hour)%24,minute:Number(a.minute),second:Number(a.second),weekday:lo.indexOf(a.weekday)+1}}function mo(e,t){const a=po(e,t);return Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute,a.second)-1e3*Math.floor(e/1e3)}function fo(e,t,a,o=1,n=0,r=0,i=0){const s=Date.UTC(t,a-1,o,n,r,i),l=new Date(s),c=mo(s-864e5,e),d=mo(s+864e5,e),u=[s-c,s-d].filter(t=>{const a=po(t,e);return a.year===l.getUTCFullYear()&&a.month===l.getUTCMonth()+1&&a.day===l.getUTCDate()&&a.hour===l.getUTCHours()&&a.minute===l.getUTCMinutes()&&a.second===l.getUTCSeconds()});return u.length?Math.min(...u):function(e,t,a,o){for(;t-e>1e3;){const n=1e3*Math.floor((e+t)/2e3);mo(n,o)===a?e=n:t=n}return t}(s-d,s-c,c,e)}function go(e,t,a){const o=new Date(Date.UTC(e,t-1,a));return{year:o.getUTCFullYear(),month:o.getUTCMonth()+1,day:o.getUTCDate()}}function vo(e,t,a){const o=po(t,a.timeZone);switch(e){case"hour":return t-t%1e3-1e3*(60*o.minute+o.second);case"day":return fo(a.timeZone,o.year,o.month,o.day);case"week":{const e=(o.weekday-a.firstDay+7)%7,t=go(o.year,o.month,o.day-e);return fo(a.timeZone,t.year,t.month,t.day)}case"month":return fo(a.timeZone,o.year,o.month,1);case"year":return fo(a.timeZone,o.year,1,1)}}function yo(e,t,a,o){if("hour"===e)return t+a*so;const n=po(t,o.timeZone);let{year:r,month:i,day:s}=n;if("day"===e)({year:r,month:i,day:s}=go(r,i,s+a));else if("week"===e)({year:r,month:i,day:s}=go(r,i,s+7*a));else{const t=go(r,i+("year"===e?12*a:a),1),o=go(t.year,t.month+1,0).day;({year:r,month:i}=t),s=Math.min(s,o)}return fo(o.timeZone,r,i,s,n.hour,n.minute,n.second)}function bo(e,t,a,o,n=1e4){const r=[vo(e,t,o)];let i=1;for(;r[r.length-1]<a&&r.length<=n;){const t="hour"===e?r[0]+i*so:yo(e,r[0],i,o);r.push(t>r[r.length-1]?t:r[r.length-1]+so),i++}return 1===r.length&&r.push(yo(e,r[0],1,o)),r}function _o(e){try{const t=new Intl.Locale(e),a=t.getWeekInfo?.().firstDay??t.weekInfo?.firstDay;return"number"==typeof a&&a>=1&&a<=7?a:1}catch{return 1}}function xo(e){const t=e?.locale,a=e?.config?.time_zone,o="server"===t?.time_zone&&function(e){if("string"!=typeof e||""===e)return!1;try{return ho(e),!0}catch{return!1}}(a)?a:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",n=co.indexOf(String(t?.first_weekday??"language"))+1;return{timeZone:o,firstDay:n>0?n:_o(t?.language??e?.language??"en")}}const wo=["hour","day","week","month"],$o=["day","week","month","year"],ko=["now","end"],Mo={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},zo={hour:36e5,day:864e5,week:6048e5};function So(e,t,a){const o="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof o||!Number.isInteger(o)||o<t)throw new Error(a);return o}function Ao(e,t,a){if(!t.includes(e))throw new Error(`"${a}" must be one of: ${t.join(", ")}`);return e}function Eo(e){if(null==e)return Mo;if("object"!=typeof e||Array.isArray(e))throw new Error('"period" must have "last" and "unit"');const t=e,a={last:So(t.last??Mo.last,1,'"period.last" must be a whole number of 1 or more'),unit:Ao(t.unit??Mo.unit,wo,"period.unit"),offset:So(t.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==t.navigate&&!0===t.navigate,until:Ao(t.until??"now",ko,"period.until")};if(void 0!==t.navigate&&"boolean"!=typeof t.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==t.calendar&&(a.calendar=Ao(t.calendar,$o,"period.calendar")),a}function jo(e,t,a){if("month"===e.unit){if(a)return{start:yo("month",t,-e.last,a),end:t};const o=new Date(t);return o.setMonth(o.getMonth()-e.last),{start:o.getTime(),end:t}}return{start:t-e.last*zo[e.unit],end:t}}function Co(e,t,a,o=0){const n=Math.max(0,e.offset+o);if(e.calendar){const o=e.calendar,r=yo(o,vo(o,t,a),-n,a),i=yo(o,r,1,a);return{start:r,end:0===n&&"now"===e.until?t:i,live:0===n,back:n}}if("month"===e.unit){return{...jo(e,0===n?t:yo("month",t,-n*e.last,a),a),live:0===n,back:n}}const r=e.last*zo[e.unit];return{start:t-(n+1)*r,end:t-n*r,live:0===n,back:n}}const No=new WeakMap;function Lo(e,t){const a=No.get(e);return a&&a.key===JSON.stringify(t)?a.steps:0}function To(e,t,a){No.set(e,{key:JSON.stringify(t),steps:Math.max(-t.offset,a)})}const Oo=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Fo=new Map(Oo.map((e,t)=>[e,22.5*t])),Po=[[/north/g,"n"],[/south/g,"s"],[/east/g,"e"],[/west/g,"w"]];function Do(e){const t=(e%360+360)%360;return 360===t?0:t}function Uo(e){if("number"==typeof e)return Number.isFinite(e)?Do(e):null;if("string"!=typeof e)return null;const t=e.trim().toLowerCase();if(""===t)return null;const a=Number(t.replace(/\s*°$/,""));if(Number.isFinite(a))return Do(a);let o=t.replace(/[\s_-]+/g,"");for(const[n,r]of Po)o=o.replace(n,r);return Fo.get(o.toUpperCase())??null}function Ho(e){if("number"==typeof e)return Number.isFinite(e)?e:null;if("on"===e)return 1;if("off"===e)return 0;if("string"!=typeof e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function Io(e){return e.bearing?Uo:Ho}function Bo(e){return"string"==typeof e?e:"number"==typeof e||"boolean"==typeof e?String(e):void 0}function qo(e,t,a=!1,o=Ho){return a?{t:e,v:null,s:Bo(t)}:{t:e,v:o(t)}}function Zo(e,t,a=!1,o=Ho){const n=[];for(const r of e??[]){const e=r.lu??r.lc;if(void 0===e)continue;const i=t?r.a?.[t]:r.s;n.push(qo(Math.round(1e3*e),i,a,o))}return n}const Ro=e=>"number"==typeof e&&Number.isFinite(e)?e:null;function Wo(e,t){return(e??[]).map(e=>{const a="number"==typeof e.start?e.start:Date.parse(e.start);let o;return o="change"===t?Ro(e.change):"state"===t?Ro(e.state)??Ro(e.mean):"min"===t||"max"===t?Ro(e[t])??Ro(e.mean)??Ro(e.state):Ro(e.mean)??Ro(e.state),{t:a,v:o,min:e.min??null,max:e.max??null}})}function Vo(e){const t=(e.end-e.start)/864e5;return t<=2?"5minute":t<=35?"hour":t<=400?"day":"month"}function Yo(e){return{period:Vo(e),types:["mean","min","max","state"],value:"mean"}}function Go(e){const t=e.attribute?`${e.entity}|${e.attribute}`:e.entity;return e.text?`${t}|text`:e.bearing?`${t}#bearing`:t}const Xo=["hour","day","week","month"],Jo=["mean","sum","min","max","first","last","change"];function Ko(e){if(void 0!==e.aggregate&&!Jo.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Jo.join(", ")}`);if(void 0!==e.group_by){if(!Xo.includes(e.group_by))throw new Error(`"group_by" must be one of: ${Xo.join(", ")}`);return{unit:e.group_by,aggregate:e.aggregate??"mean"}}}function Qo(e,t,a,o,n=!1){const r="change"===a?function(e){let t=null;return e.map(e=>{if(null===e.v)return null;if(null===t)return t=e.v,0;if(e.v>=t){const a=e.v-t;return t=e.v,a}return t-e.v>.1*Math.abs(t)?(t=e.v,Math.max(0,e.v)):0})}(e):[],i=[];let s=0;for(let l=0;l+1<t.length;l++){const c=t[l],d=t[l+1],u=Math.min(d,o);for(;s<e.length&&e[s].t<c;)s++;const h={t:c,end:d,v:null};if(i.push(h),u<=c)continue;const p=[],m=e[s-1];let f=s;const g=f<e.length&&e[f].t<u?e[f].t:u;for(m&&g>c&&p.push({v:m.v,dt:g-c,reading:!1,carried:!0,up:0});f<e.length&&e[f].t<u;f++){const t=f+1<e.length&&e[f+1].t<u?e[f+1].t:u,a=e[f];p.push({v:a.v,dt:t-a.t,reading:!0,carried:!0===a.carried,up:r[f]??null})}const v=p.filter(e=>null!==e.v);if(0===v.length)continue;const y=v.map(e=>e.v);switch(n&&(h.min=Math.min(...y),h.max=Math.max(...y)),a){case"mean":{const e=v.reduce((e,t)=>e+t.dt,0);h.v=e>0?v.reduce((e,t)=>e+t.v*t.dt,0)/e:y.reduce((e,t)=>e+t,0)/y.length;break}case"min":h.v=Math.min(...y);break;case"max":h.v=Math.max(...y);break;case"first":h.v=y[0];break;case"last":h.v=y[y.length-1];break;case"sum":{const e=v.filter(e=>e.reading&&!e.carried);h.v=e.length?e.reduce((e,t)=>e+t.v,0):null;break}case"change":h.v=v.reduce((e,t)=>e+(t.reading&&!t.carried?t.up??0:0),0)}}return i}function en(e,t,a,o=1/0,n=!1){const r=[];let i=0;for(let s=0;s+1<t.length;s++){const l=t[s],c=t[s+1];for(;i<e.length&&e[i].t<l;)i++;let d=i;const u=[],h=[],p=[];for(;d<e.length&&e[d].t<c;d++){const t=e[d];null===t.v||t.carried||(u.push(t.v),h.push(t.min??t.v),p.push(t.max??t.v))}let m=null;if(u.length&&l<o)if("mean"===a)m=u.reduce((e,t)=>e+t,0)/u.length;else if("sum"===a||"change"===a)m=u.reduce((e,t)=>e+t,0);else if("min"===a)m=Math.min(...u);else if("max"===a)m=Math.max(...u);else if("last"===a)m=u[u.length-1];else{const t=e.slice(0,i).reverse().find(e=>null!==e.v),a=e.slice(i,d).find(e=>e.carried&&null!==e.v);m=(t??a)?.v??u[0]}const f={t:l,end:c,v:m};n&&null!==m&&(f.min=Math.min(...h),f.max=Math.max(...p)),r.push(f)}return r}const tn={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},an={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};const on={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class nn{constructor(e){this.onChange=e,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(e,t,a,o,n={}){const r=n.live??!0,i="statistics"===o?n.statistics??Yo(a):void 0,s=`${o}|${t.map(Go).join(",")}|${i?JSON.stringify(i):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>sn,c=void 0!==this.pausedAt&&"statistics"===o&&r;this.pausedAt=void 0;const d=Math.max(6e4,(a.end-a.start)/100),u=a.start<this.loadedFrom||(r?this.loadedTo!==1/0:a.end>this.loadedTo+d);(s!==this.shape||u||l&&r||c)&&(this.shape=s,this.load(e,t,a,r,i)),"ready"===this.status&&"history"===o&&this.loadedTo===1/0&&this.appendLive(e,t);const h=new Map;for(const[p,m]of this.data)h.set(p,rn(m,a));return{status:this.status,data:h,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(e,t,a,o,n){const r=++this.generation;this.status="loading",this.loadedFrom=a.start,this.loadedTo=o?1/0:a.end,clearTimeout(this.timer);const i=n?async function(e,t,a,o=Yo(a)){const n=new Map;if(!e.callWS||0===t.length)return n;const r=[...new Set(t.map(e=>e.entity))],i=await e.callWS({type:"recorder/statistics_during_period",start_time:new Date(a.start).toISOString(),end_time:new Date(a.end).toISOString(),statistic_ids:r,period:o.period,types:o.types});for(const s of t)n.set(Go(s),Wo(i?.[s.entity],o.value));return n}(e,t,a,n):async function(e,t,a){const o=new Map;if(!e.callWS||0===t.length)return o;const n={type:"history/history_during_period",start_time:new Date(a.start).toISOString(),end_time:new Date(a.end).toISOString(),significant_changes_only:!1},r=[...new Set(t.filter(e=>!e.attribute).map(e=>e.entity))],i=[...new Set(t.filter(e=>e.attribute).map(e=>e.entity))],s=[];return r.length&&s.push(e.callWS({...n,entity_ids:r,minimal_response:!0,no_attributes:!0}).then(e=>{for(const a of t.filter(e=>!e.attribute))o.set(Go(a),Zo(e?.[a.entity],void 0,a.text,Io(a)))})),i.length&&s.push(e.callWS({...n,entity_ids:i,no_attributes:!1}).then(e=>{for(const a of t.filter(e=>e.attribute))o.set(Go(a),Zo(e?.[a.entity],a.attribute,a.text,Io(a)))})),await Promise.all(s),o}(e,t,a);i.then(a=>{if(r===this.generation){this.data=a,this.status="ready",this.error=void 0,this.seen.clear();for(const a of t)this.seen.set(Go(a),e.states[a.entity]);n&&o&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},on[n.period])),this.onChange()}},e=>{r===this.generation&&(this.status="error",this.error=e instanceof Error?e.message:String(e?.message??e),this.onChange())})}appendLive(e,t){for(const a of t){const t=Go(a),o=e.states[a.entity];if(!o||this.seen.get(t)===o)continue;this.seen.set(t,o);const n=Date.parse(o.last_updated??o.last_changed??"")||Date.now(),r=this.data.get(t)??[],i=r[r.length-1];i&&n<=i.t||(r.push(qo(n,a.attribute?o.attributes?.[a.attribute]:o.state,a.text,Io(a))),this.data.set(t,r))}}}function rn(e,t){let a=0;for(;a<e.length&&e[a].t<t.start;)a++;const o=e.slice(a).filter(e=>e.t<=t.end),n=e[a-1];return n?[{...n,t:t.start,carried:!0},...o]:o}const sn=6e4,ln=new WeakMap;function cn(e,t){let a=ln.get(e);return a||(a=new nn(t),ln.set(e,a)),a}const dn=["smooth","straight","step"],un=e=>(Math.round(100*e)/100).toString();function hn(e){return e.map(([e,t],a)=>`${a?"L":"M"}${un(e)},${un(t)}`).join("")}function pn(e,t){return 0===e.length?"":1===e.length?`M${un(e[0][0])},${un(e[0][1])}h0`:"smooth"===t?function(e){const t=e.length;if(t<3)return hn(e);const a=[],o=[];for(let i=0;i<t-1;i++)a.push(e[i+1][0]-e[i][0]),o.push(0===a[i]?0:(e[i+1][1]-e[i][1])/a[i]);const n=[o[0]];for(let i=1;i<t-1;i++)n.push(o[i-1]*o[i]<=0?0:(o[i-1]+o[i])/2);n.push(o[t-2]);for(let i=0;i<t-1;i++){if(0===o[i]){n[i]=0,n[i+1]=0;continue}const e=n[i]/o[i],t=n[i+1]/o[i],a=e*e+t*t;if(a>9){const r=3/Math.sqrt(a);n[i]=r*e*o[i],n[i+1]=r*t*o[i]}}let r=`M${un(e[0][0])},${un(e[0][1])}`;for(let i=0;i<t-1;i++){const t=a[i]/3;r+=`C${un(e[i][0]+t)},${un(e[i][1]+n[i]*t)},${un(e[i+1][0]-t)},${un(e[i+1][1]-n[i+1]*t)},${un(e[i+1][0])},${un(e[i+1][1])}`}return r}(e):"step"===t?function(e){let t=`M${un(e[0][0])},${un(e[0][1])}`;for(let a=1;a<e.length;a++)t+=`H${un(e[a][0])}V${un(e[a][1])}`;return t}(e):hn(e)}function mn(e){const t=[];let a=[];for(const o of e)null===o.v?(a.length&&t.push(a),a=[]):a.push(o);return a.length&&t.push(a),t}const fn=1e3,gn=200,vn=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],yn=["history","statistics"];function bn(e){if(Eo(e.period),Ko(e),void 0!==e.source&&!yn.includes(e.source))throw new Error(`"source" must be one of: ${yn.join(", ")}`);const t=[e.curve,...(e.entities??[]).map(e=>"object"==typeof e?e.curve:void 0)];for(const a of t)if(void 0!==a&&!dn.includes(a))throw new Error(`"curve" must be one of: ${dn.join(", ")}`)}function _n(e,t=Date.now(),a={}){const o=Eo(e.raw.period),n=e.raw.source??"history",r=xo(e.hass),i=Co(o,t,r,o.navigate?Lo(e.host,o):0),s=Ko(e.raw),l={start:s?vo(s.unit,i.start,r):i.start,end:i.end},c=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute,...a.text?{text:!0}:{}})),d=cn(e.host,e.requestUpdate),u=s&&"statistics"===n?function(e,t,a,o=!1){const n=t.timeZone===a&&("week"!==e.unit||1===t.firstDay),r="hour"!==e.unit&&n?e.unit:"hour",{types:i,value:s}=an[e.aggregate];return{period:r,types:o?[...new Set([...i,"min","max"])]:i,value:s}}(s,r,e.hass.config?.time_zone,!0===a.range):void 0,h=u?{start:l.start-tn[u.period],end:l.end}:l,p=d.get(e.hass,c,h,n,{live:i.live,statistics:u}),m=s?bo(s.unit,l.start,l.end,r):[],f=e.raw.curve??"smooth",g=Math.min(l.end,t),v=e.items.map((e,t)=>{const o=e.config;let r=p.data.get(Go(c[t]))??[];const i=r[r.length-1];return s?r="statistics"===n?en(r,m,s.aggregate,g,!0===a.range):Qo(r,m,a.aggregate?.(e)??s.aggregate,g,!0===a.range):"history"===n&&i&&null!==i.v&&i.t<g&&(r=[...r,{t:g,v:i.v}]),{index:t,entity:e,points:r,color:je(o.color??vn[t%vn.length]),curve:o.curve??f,dash:!0===o.dash}});return{status:p.status,error:p.error,range:l,period:o,source:n,series:v,live:i.live,back:i.back,zone:r,group:s}}const xn=(e,t,a)=>1===e?t:a;function wn(e,t,a,o,n){const r=(e,t)=>zt(n,e,t);if(e.calendar&&a<2)return r({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[e.calendar][a]);if(!e.calendar&&0===a){const t=e.last;return r({hour:xn(t,"period_last_hour","period_last_hours"),day:xn(t,"period_last_day","period_last_days"),week:xn(t,"period_last_week_rolling","period_last_weeks"),month:xn(t,"period_last_month_rolling","period_last_months")}[e.unit],{n:t})}const i={timeZone:o.timeZone},s=po(t.start,o.timeZone).year===po(Date.now(),o.timeZone).year;let l;"year"===e.calendar?i.year="numeric":"month"===e.calendar?Object.assign(i,{month:"long",year:"numeric"}):(Object.assign(i,{day:"numeric",month:"short"}),s||(i.year="numeric"),"day"===e.calendar&&(i.weekday="short"),e.calendar||"hour"!==e.unit&&"day"!==e.unit||Object.assign(i,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(n?.locale?.language??n?.language??"en",i)}catch{l=new Intl.DateTimeFormat("en",i)}const c=e.calendar?t.end-1:t.end;return"day"===e.calendar||"month"===e.calendar||"year"===e.calendar?l.format(t.start):l.formatRange(t.start,c)}function $n(e,t,a=Date.now()){const{period:o}=e;if(!o.navigate)return W;const n=Lo(t.host,o),r=e=>a=>{a.stopPropagation(),To(t.host,o,e),t.requestUpdate()},i=wn(o,e.range,e.back,e.zone,t.hass);let s="";if(0!==n){const n=Co(o,a,e.zone);s=wn(o,n,n.back,e.zone,t.hass)}const l=e=>q`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${e}></path></svg>`;return q`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${zt(t.hass,"period_previous")} @click=${r(n+1)}>
      ${l("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")}
    </button>
    <span class="period-label" aria-live="polite">${i}</span>
    <button
      class="period-step period-next"
      aria-label=${zt(t.hass,"period_next")}
      ?disabled=${0===e.back}
      @click=${r(n-1)}
    >
      ${l("M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")}
    </button>
    ${0!==n?q`<button
            class="period-return"
            aria-label=${zt(t.hass,"period_return",{label:s})}
            @click=${r(0)}
          >
            ${s}
          </button>`:W}
  </div>`}const kn=r`
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
`;function Mn(e){!function(e){ln.get(e)?.pause()}(e)}function zn(e,t){const{show:a}=t.config;return a.name||a.value?q`<div class="series-header">
    ${e.series.map(e=>q`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
          <span class="swatch" style="background:${e.color}"></span>
          ${a.name?q`<span class="series-name">${e.entity.name}</span>`:W}
          ${a.value?q`<span class="series-value">${e.entity.display}</span>`:W}
        </div>`)}
  </div>`:W}function Sn(e,t){return"loading"===e.status?q`<div class="chart-message">${zt(t.hass,"chart_loading")}</div>`:"error"===e.status?q`<div class="chart-message error">
      ${zt(t.hass,"chart_error",{error:e.error??""})}
    </div>`:e.series.every(e=>e.points.every(e=>null===e.v))?q`<div class="chart-message">${zt(t.hass,"chart_no_data")}</div>`:void 0}function An(e,t,a=W,o=W){return q`<svg
    class="plot"
    viewBox="0 0 ${fn} ${gn}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${t}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${fn} height=${204}></rect>
      </clipPath>
      ${a}
    </defs>
    ${o}
    <g clip-path="url(#cd-draw-in)">${e}</g>
  </svg>`}const En=r`
  ${kn}
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
`;function jn(e,t,a){const{locale:o,grouping:n}=function(e){const t=e?.locale?.language??"en";switch(e?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:t,grouping:!0}}}(a),r=new Intl.NumberFormat(o,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:n});let i=r.format(0===e?0:e);return 0===Number(e.toFixed(t))&&(i=r.format(0)),i}function Cn(e,t){return t?`${e} ${t}`:e}const Nn=[[1,2,3,4,5,6,7,8,9],[1,2,5],[1]],Ln=[2,3,5,10,20,50,100],Tn=e=>Number(e.toPrecision(12)),On=e=>Tn(10**e),Fn=e=>Math.floor(Math.log10(e)+1e-9);function Pn(e){return e.map(e=>{const t=e=>"number"==typeof e&&e<=0;return t(e.v)||t(e.min)||t(e.max)?{...e,v:t(e.v)?null:e.v,...void 0!==e.min?{min:t(e.min)?null:e.min}:{},...void 0!==e.max?{max:t(e.max)?null:e.max}:{}}:e})}function Dn(e,t,a,o=1){const n=[];for(let r=Fn(e);r<=Fn(t)+o;r+=o)for(const o of a){const a=Tn(o*10**r);a>=e*(1-1e-9)&&a<=t*(1+1e-9)&&n.push(a)}return n}function Un(e,t,a){const o=Fn(e),n=Dn(On(o-2),On(o+2),t),r=a?n.filter(t=>t<=e*(1+1e-9)):n.filter(t=>t>=e*(1-1e-9));return a?r[r.length-1]:r[0]}function Hn(e,t){const a=Math.log10(e[0]),o=Math.log10(e[1]),[n,r]=t,i=o===a?0:(r-n)/(o-a);return e=>e>0?n+(Math.log10(e)-a)*i:NaN}const In=new WeakMap;function Bn(e){let t=In.get(e.host);if(!t){const a={width:e.host.clientWidth||400};t=a,In.set(e.host,a),"undefined"!=typeof ResizeObserver&&(a.observer=new ResizeObserver(t=>{const o=Math.round(t[t.length-1].contentRect.width);Math.round(o/70)!==Math.round(a.width/70)&&(a.width=o,e.requestUpdate())}),a.observer.observe(e.host))}return t.width}function qn(e){In.get(e)?.observer?.disconnect(),In.delete(e)}function Zn(e){const t=Ua(e.raw);return Math.max(0,Bn(e)-32-(t.y&&"outside"===t.labels?40:0))}function Rn(e,t,a,o,n=4){const r=Ua(e.raw),i="log"===r.scale&&"line"===e.raw.style,s=i?function(e,t,a){let[o,n]=e??[1,100];void 0!==t.min&&t.min>0&&(o=t.min),void 0!==t.max&&t.max>0&&(n=t.max),n>0||(n=o>0?10*o:100),o>0||(o=n/1e3);const r=void 0!==t.min&&t.min===o,i=void 0!==t.max&&t.max===n;n<=o&&(r?n=10*o:i?o=n/10:(o/=Math.sqrt(10),n*=Math.sqrt(10)));const s=Math.max(2,a+1),l=[...Nn.map(e=>({mantissas:e,every:1})),...Ln.map(e=>({mantissas:[1],every:e}))];let c=l[l.length-1],d=[o,n],u=[];for(const f of l){const e=r?o:Un(o,f.mantissas,!0),t=i?n:Un(n,f.mantissas,!1),a=Dn(e,t,f.mantissas,f.every);if(c=f,d=[e,t],u=a,a.length<=s)break}const h=c.every>1?[1]:Nn[0],p=9===c.mantissas.length?[]:Dn(d[0],d[1],h).filter(e=>!u.includes(e)).slice(0,200),m=u.map(e=>Math.max(0,-Fn(e)));return{domain:d,ticks:u,decimals:Math.max(0,...m),minor:p,tickDecimals:m}}(a,r,n):qa(a,r,n),l=Math.max(2,Math.min(8,Math.floor((o??Zn(e))/70))),{unit:c,ticks:d}=Ka(t,l,Ga(Qa(e.hass)));return{options:r,value:s,times:d,unit:c,range:t,scales:{x:Aa([t.start,t.end],[0,fn]),y:(i?Hn:Aa)(s.domain,[gn,0]),domain:s.domain}}}const Wn=e=>Math.round(1e4*e)/100+"%";function Vn(e,t,a){const o=e.ticks[t];return e.tickDecimals?function(e,t,a){if(Math.abs(e)<1e4)return jn(e,t,a);const o=a?.locale?.language??a?.language??"en";try{return new Intl.NumberFormat(o,{notation:"compact",maximumFractionDigits:1}).format(e)}catch{return new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}).format(e)}}(o,e.tickDecimals[t],a.hass):jn(o,e.decimals,a.hass)}function Yn({axes:e,ctx:t,content:a,label:o,defs:n=W,overlay:r=W,hover:i,right:s,xLabel:l,yLabel:c,gestures:d,classes:u="",below:h=W}){const{options:p}=e,m="outside"===p.labels,f=p.y&&e.value.ticks.length>0,g=p.x&&e.times.length>0,v=f?function(e,t,a){const{scales:o,value:n}=e;return n.ticks.map((e,r)=>{const i=o.y(e)/gn;return q`<span class="axis-label ${i<.08?"top":i>.92?"bottom":""}" style="top:${Wn(i)}"
      >${a?a(e):Vn(n,r,t)}</span
    >`})}(e,t,c):[],y=f?q`<div class="y-axis">${v}</div>`:W,b=g?q`<div class="x-axis">${function(e,t,a){const{scales:o,range:n}=e,r=Ga(Qa(t.hass));return e.times.map(i=>{const s=o.x(i)/fn;return q`<span class="axis-label ${s<.05?"start":s>.95?"end":""}" style="left:${Wn(s)}"
      >${a?a(i):e.label?e.label(i):ro(i,e.unit,n.end-n.start,t.hass,r)}</span
    >`})}(e,t,l)}</div>`:W,_=f?q`<span class="axis-sizer" aria-hidden="true"
        >${e.value.ticks.map((a,o)=>c?c(a):Vn(e.value,o,t)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:W,x=s&&p.y&&s.value.ticks.length>0?s:void 0,w=x?q`<span class="axis-sizer" aria-hidden="true"
        >${x.value.ticks.map(e=>jn(e,x.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:W,$=x?q`<div class="y-axis right">${m?w:W}${function(e,t){return e.value.ticks.map(a=>{const o=e.y(a)/gn;return q`<span class="axis-label ${o<.08?"top":o>.92?"bottom":""}" style="top:${Wn(o)}"
      >${jn(a,e.value.decimals,t.hass)}</span
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
      ${An(a,o,n,function(e){const{options:t,scales:a}=e;return Z`<g class="grid">
    ${t.horizontal?(e.value.minor??[]).map(e=>Z`<line class="minor" x1="0" x2=${fn} y1=${a.y(e)} y2=${a.y(e)}></line>`):W}
    ${t.horizontal?e.value.ticks.map(e=>Z`<line x1="0" x2=${fn} y1=${a.y(e)} y2=${a.y(e)}></line>`):W}
    ${t.vertical?e.times.map(e=>Z`<line x1=${a.x(e)} x2=${a.x(e)} y1="0" y2=${gn}></line>`):W}
  </g>`}(e))} ${m?W:q`${y}${$}${b}`}
      ${r}
    </div>
    ${m?q`${$}${b}`:W} ${h}
  </div>`}const Gn=r`
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
`,Xn=["above","over","hidden"];function Jn(e){if(void 0!==e.compact&&"boolean"!=typeof e.compact)throw new Error('"compact" must be true or false');if(void 0!==e.header&&!Xn.includes(e.header))throw new Error(`"header" must be one of: ${Xn.join(", ")}`)}function Kn(e){return{compact:!0===e.compact,header:e.header??"above"}}function Qn(e,t,a){return q`<div class="frame ${e.compact?"compact":""}">
    ${"above"===e.header?t:W}${a}
  </div>`}function er(e){return e===W?W:q`<div class="header-over" @pointerdown=${e=>e.stopPropagation()}>${e}</div>`}const tr=r`
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
`,ar=["none","normal","percent"];function or(e){const t=e.stack;if(void 0!==t&&!ar.includes(t))throw new Error(`"stack" must be one of: ${ar.join(", ")}`)}function nr(e,t){let a=0,o=e.length;for(;a<o;){const n=a+o>>1;e[n].t<=t?a=n+1:o=n}return 0===a?null:e[a-1].v}function rr(e,t){const a=e[0]?.length??0,o=e.map(()=>[]);for(let n=0;n<a;n++){let a=1;if("percent"===t){const t=e.reduce((e,t)=>e+Math.abs(t[n]??0),0);a=t>0?100/t:0}let r=0,i=0;e.forEach((e,t)=>{const s=e[n];if(null==s)return void o[t].push(null);const l=s*a;l>=0?(o[t].push([r,r+l]),r+=l):(o[t].push([i,i+l]),i+=l)})}return o}function ir(e){const t=e[0]?.length??0,a=[];for(let o=0;o<t;o++){let t=null;for(const a of e)null!==a[o]&&void 0!==a[o]&&(t=(t??0)+a[o]);a.push(t)}return a}function sr(e){let t=0,a=0;for(const o of e)for(const e of o)e&&(t=Math.min(t,e[0],e[1]),a=Math.max(a,e[0],e[1]));return[t,a]}function lr(e,t){const a=e*t;return a+190<=t?"right":a>=190?"left":e>.5?"pin-left":"pin-right"}const cr=3e3;function dr(e,t){if(0===e.length)return-1;let a=0,o=e.length-1;for(;a<o;){const n=a+o>>1;e[n].t<t?a=n+1:o=n}return a>0&&t-e[a-1].t<=e[a].t-t?a-1:a}const ur=new WeakMap;function hr(e){return ur.get(e)?.t}function pr(e){const t=ur.get(e);void 0!==t?.timer&&clearTimeout(t.timer),ur.delete(e)}function mr(e){return!1!==e.tooltip}function fr(e){const t=e.tooltip;if(void 0!==t&&"boolean"!=typeof t)throw new Error('"tooltip" must be true or false')}function gr(e,t,a){const o=function(e){let t=ur.get(e);return t||(t={},ur.set(e,t)),t}(e.host),n=t=>{t!==o.t&&(o.t=t,e.requestUpdate())},r=()=>{void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0};return{move(e){r();const o=e.currentTarget.getBoundingClientRect(),i=o.width>0?Math.min(1,Math.max(0,(e.clientX-o.left)/o.width)):0;n(function(e,t){let a;for(const o of e){const e=dr(o,t);if(e<0)continue;const n=o[e].t;(void 0===a||Math.abs(n-t)<Math.abs(a-t))&&(a=n)}return a}(a,t.start+i*(t.end-t.start)))},leave(e){r(),"touch"===e.pointerType||"pen"===e.pointerType?o.timer=setTimeout(()=>{o.timer=void 0,n(void 0)},cr):n(void 0)}}}const vr=e=>Math.round(1e4*e)/100+"%";function yr(e){const t=new Set(e.map(e=>e.entity.unit));return 1===t.size?[...t][0]:""}function br(e,t,a,o){return q`<div class="tooltip-row tooltip-total">
    <span class="swatch"></span>
    <span class="tooltip-name">${zt(e.hass,"chart_total")}</span>
    <span class="tooltip-value">${null===t?"—":Cn(jn(t,o,e.hass),a)}</span>
  </div>`}function _r(e,t,a,o,n,r={}){if(void 0===o)return W;const i=a.x(o)/fn;if(!(i>=0&&i<=1))return W;const s=lr(i,n),l=t.map(e=>{const t=dr(e.points,o);return{s:e,p:t<0?void 0:e.points[t]}});return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${vr(i)}"></div>
    ${l.map(({s:e,p:t})=>{if(!t||null===t.v)return W;const o=r.dotY?r.dotY(e,t):a.y(t.v);if(null===o)return W;const n=o/gn;return n>=0&&n<=1?q`<span
        class="hover-dot"
        style="left:${vr(a.x(t.t)/fn)};top:${vr(n)};background:${e.color}"
      ></span>`:W})}
    <div class="tooltip ${s}" style=${s.startsWith("pin")?"":`left:${vr(i)}`}>
      <div class="tooltip-time">${r.heading?r.heading(o):no(o,e.hass)}</div>
      ${l.map(({s:t,p:a})=>q`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${r.text?r.text(t,a):function(e,t,a){return e&&null!==e.v?Cn(jn(e.v,t.entity.decimals,a.hass),t.entity.unit):"—"}(a,t,e)}</span>
          </div>`)}
      ${r.footer?r.footer(l):W}
    </div>
  </div>`}const xr=r`
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
`,wr=["all","last","minmax","ends"],$r=["auto","above","below","center"];function kr(e){const t=e;if(!0===t.labels)return{show:t.labels_show??"all",position:t.labels_position??"auto",hideOverlap:!0!==t.labels_overlap}}function Mr(e,t){const a=e.map((e,t)=>null===e.v?-1:t).filter(e=>e>=0);if(0===a.length)return[];const o=a[a.length-1],n=a[0];let r=n,i=n;for(const l of a)e[l].v>e[r].v&&(r=l),e[l].v<e[i].v&&(i=l);const s="last"===t?[o]:"ends"===t?[o,n]:"minmax"===t?[r,i]:[o,r,i,...a];return[...new Set(s)]}function zr(e,t){const a=e[t].v,o=[e[t-1]?.v??null,e[t+1]?.v??null].filter(e=>null!==e);if(0===o.length)return"above";const n=o.reduce((e,t)=>e+t,0)/o.length;return a<n?"below":"above"}function Sr(e,t){const a=e.x-e.width/2,o="above"===t?e.y-6-14:"below"===t?e.y+6:e.y-7;return[a,o,a+e.width,o+14]}const Ar=(e,t)=>e[0]<t[2]&&t[0]<e[2]&&e[1]<t[3]&&t[1]<e[3];function Er(e){return Math.ceil(6*e.length)+6}const jr=e=>Math.round(1e4*e)/100+"%";function Cr(e,t,a,o){const n=[],r=[];for(const c of e){const e=a.skip?c.points.map(e=>a.skip(e)?{...e,v:null}:e):c.points;!t.hideOverlap&&"all"===t.show&&e.filter(e=>null!==e.v).length>40||Mr(e,t.show).forEach((i,s)=>{const l=e[i],[d,u]=a.at(l);if(!(d>=0&&d<=1&&u>=0&&u<=1))return;const h=jn(l.v,c.decimals,o),p="auto"===t.position?zr(e,i):t.position,m="above"===p?"below":"above",f={x:d*a.width,y:u*a.height,width:Er(h),sides:"center"===p?["center"]:[p,m],text:h,color:c.color,fx:d,fy:u};(s<3&&"all"===t.show?n:"all"===t.show?r:n).push(f)})}const i=[...n,...r].slice(0,600),s=function(e,t,a){const o=[];return e.map(e=>{for(const n of e.sides){const r="auto"===n?"above":n,i=Sr(e,r);if(!a)return{side:r,box:i};if(!(i[1]<-2||i[3]>t+2||o.some(e=>Ar(e,i))))return o.push(i),{side:r,box:i}}})}(i,a.height,t.hideOverlap),l=i.map((e,t)=>({b:e,p:s[t]})).filter(e=>void 0!==e.p);return 0===l.length?W:(l.sort((e,t)=>e.b.fx-t.b.fx),q`<div class="point-labels">
    ${l.map(({b:e,p:t})=>q`<span
          class="point-label ${t.side} ${function(e,t,a){return e-t/2<0?"start":e+t/2>a?"end":""}(e.fx*a.width,e.width,a.width)}"
          style="left:${jr(e.fx)};top:${jr(e.fy)};--cd-label:${e.color}"
          >${e.text}</span
        >`)}
  </div>`)}const Nr=r`
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
`,Lr=["none","line","figure"],Tr=!1,Or=!1,Fr="none";function Pr(e){const t=e.extremes??{};return{min:t.min??Tr,max:t.max??Or,average:t.average??Fr}}function Dr(e){return e.min||e.max||"none"!==e.average}function Ur(e,t,a,o=[]){const n=e.filter(e=>e.dot).map(e=>({l:e.x*t-6,r:e.x*t+6,t:e.y*a-6,b:e.y*a+6})),r=[...o,...n];return e.map(e=>{const o=(e=>Math.ceil(6.2*e.length)+12)(e.text),n=e.x*t,i=e.y*a,s=n-o/2<0?"start":n+o/2>t?"end":"center",l="start"===s?0:"end"===s?t-o:n-o/2,c=(e,t=0)=>{const a=8+20*t,n="above"===e?i-a-18:i+a;return{l:l,r:l+o,t:n,b:n+18}},d=e=>e.t>=0&&e.b<=a,u="above"===e.prefer?"below":"above",h=[{side:e.prefer,tier:0},{side:u,tier:0},{side:e.prefer,tier:1},{side:u,tier:1}],p=h.find(e=>(e=>d(e)&&!r.some(t=>((e,t)=>e.l<t.r&&t.l<e.r&&e.t<t.b&&t.t<e.b)(t,e)))(c(e.side,e.tier)))??h.find(e=>0===e.tier&&d(c(e.side)))??h[0];r.push(c(p.side,p.tier));return{side:p.side,align:s,tier:p.tier}})}function Hr(e,t,a,o){if("day"===o?.unit||"week"===o?.unit||"month"===o?.unit){const t="month"===o.unit?{month:"short",year:"numeric"}:{weekday:"short",day:"numeric",month:"short"};try{return new Intl.DateTimeFormat(a?.locale?.language??"en",{...t,timeZone:Qa(a)}).format(e)}catch{return new Intl.DateTimeFormat("en",t).format(e)}}return t.end-t.start>864e5?no(e,a):oo(e,a)}const Ir=e=>Math.round(1e4*e)/100+"%";function Br(e){const{ctx:t,scales:a,width:o,height:n}=e,r=Pr(t.raw);if(!Dr(r))return{lines:W,overlay:W};const i=e.series.filter(e=>!1!==e.entity.config.extremes).map(t=>{const{min:a,max:o}=function(e){let t,a;for(const o of e)null===o.v||o.carried||((!t||o.v<t.v)&&(t=o),(!a||o.v>a.v)&&(a=o));return{min:t,max:a}}(t.points),n="none"===r.average?void 0:function(e,t,a=1/0){const o=e.filter(e=>null!==e.v&&!(e.carried&&!t));if(0!==o.length){if(t){let t=0,o=0;for(let n=0;n<e.length;n++){const r=e[n];if(null===r.v)continue;const i=n+1<e.length?e[n+1].t:r.t,s=Math.max(0,Math.min(i,a)-r.t);t+=r.v*s,o+=s}if(o>0)return t/o}return o.reduce((e,t)=>e+t.v,0)/o.length}}(t.points,e.timeWeighted,e.until);return{s:t,min:r.min?a:void 0,max:r.max?o:void 0,average:n}}),s=(e,a)=>Cn(jn(e,a.entity.decimals,t.hass),a.entity.unit),l=e=>zt(t.hass,e),c=e=>e>=0&&e<=1,d=[];for(const f of i){for(const o of["max","min"]){const n=f[o];if(!n)continue;const r=a.y(n.v)/gn;if(!c(r))continue;const i=l("max"===o?"extremes_high":"extremes_low");d.push({s:f.s,kind:o,spec:{x:a.x(n.t)/fn,y:r,text:`${i} ${s(n.v,f.s)} · ${Hr(n.t,e.range,t.hass,e.group)}`,prefer:"max"===o?"above":"below",dot:!0}})}if("line"===r.average&&void 0!==f.average){const e=a.y(f.average)/gn;c(e)&&d.push({s:f.s,kind:"average",spec:{x:1,y:e,text:`${l("extremes_average")} ${s(f.average,f.s)}`,prefer:"above"}})}}const u=Ur(d.map(e=>e.spec),o,n,e.obstacles),h="line"===r.average?Z`<g class="average-lines">${i.map(e=>{if(void 0===e.average)return W;const t=a.y(e.average);return Z`<line class="average-line" x1="0" x2=${fn} y1=${t} y2=${t} stroke=${e.s.color}></line>`})}</g>`:W,p="figure"===r.average&&i.some(e=>void 0!==e.average)?q`<div class="extreme-figures">
          ${i.map(t=>void 0===t.average?W:q`<div class="extreme-figure">
                  ${e.series.length>1?q`<span class="swatch" style="background:${t.s.color}"></span>`:W}
                  <span>${l("extremes_average")} ${s(t.average,t.s)}</span>
                </div>`)}
        </div>`:W,m=q`<div class="extremes-layer">
    ${d.map((e,t)=>{const{side:a,align:o,tier:n}=u[t],{x:r,y:i,text:s}=e.spec,l="start"===o?"left:0":"end"===o?"right:0":`left:${Ir(r)}`;return q`<span
        class="extreme-label ${e.kind} ${a} ${o} ${n?"far":""}"
        style="${l};top:${Ir(i)};--series:${e.s.color}"
        >${s}</span
      >`})}
    ${d.map(e=>e.spec.dot?q`<span
            class="extreme-dot ${e.kind}"
            style="left:${Ir(e.spec.x)};top:${Ir(e.spec.y)};border-color:${e.s.color}"
          ></span>`:W)}
    ${p}
  </div>`;return{lines:h,overlay:m}}const qr=r`
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
`,Zr=[{name:"extremes_max",path:["extremes","max"],default:Or},{name:"extremes_min",path:["extremes","min"],default:Tr},{name:"extremes_average",path:["extremes","average"],default:Fr}];const Rr={name:"extremes",path:["extremes"],default:!0},Wr=new Map;function Vr(e,t){const a=Mt(t);let o=Wr.get(a);return o&&o[0]===e[0]||(o=[...e,{name:"extremes",selector:{boolean:{}}}],Wr.set(a,o)),o}const Yr=new WeakMap;function Gr(e){let t=Yr.get(e);return t||(t=[...e,Rr],Yr.set(e,t)),t}const Xr=["auto","shared","independent"];function Jr(e,t,a,o,n){const r=Math.max(0,Bn(e)-32),i=function(e,t,a){const o=e=>Math.max(1,Math.floor((t+12)/(e+12))),n=void 0===a?o(150):Math.min(a,o(110));return Math.max(1,Math.min(e,n))}(t.series.length,r,a.columns),s=function(e,t){return Math.max(0,(e-12*(t-1))/t)}(r,i),l=new Set(t.series.map(e=>e.entity.unit).filter(e=>""!==e)),c="shared"===a.scale||"auto"===a.scale&&l.size<=1?za(t.series.map(e=>e.points)):void 0,{show:d}=e.config;return q`<div class="multiples" style=${`grid-template-columns:repeat(${i}, minmax(0, 1fr))`}>
    ${t.series.map(a=>{const r=Rn(e,t.range,c??za([a.points]),s,2),i=d.name||d.value?q`<div class="entity panel-title" data-index=${a.index} tabindex="0" aria-label=${a.entity.label}>
              <span class="swatch" style="background:${a.color}"></span>
              ${d.name?q`<span class="series-name">${a.entity.name}</span>`:W}
              ${d.value?q`<span class="series-value">${function(e,t,a){if(void 0===t)return e.entity.display;const o=dr(e.points,t),n=o<0?void 0:e.points[o];return n&&null!==n.v?Cn(jn(n.v,e.entity.decimals,a.hass),e.entity.unit):"—"}(a,o,e)}</span>`:W}
            </div>`:W,l=a.points.some(e=>null!==e.v)?n(a,r,s):q`<div class="chart-message">${zt(e.hass,"chart_no_data")}</div>`;return q`<div class="panel">${i}${l}</div>`})}
  </div>`}const Kr=r`
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
`,Qr=["line","band","time","state","point"],ei=["max","min","last","first"],ti={line:"red",band:"green",time:"grey",state:"amber",point:"primary"},ai=e=>"number"==typeof e&&Number.isFinite(e),oi=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim());function ni(e,t){if(!(void 0===e||ai(e)||oi(e)||"string"==typeof e&&""!==e.trim()&&Number.isFinite(Number(e))))throw new Error(`"${t}" must be a number or an entity id`)}const ri=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/,ii=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{1,2}):(\d{2})(?::(\d{2}))?$/;function si(e){return(Array.isArray(e)?e:"string"==typeof e?e.split(","):[]).map(e=>String(e).trim()).filter(e=>""!==e)}function li(e){const t=e.annotations;if(void 0!==e.zones&&"boolean"!=typeof e.zones)throw new Error('"zones" must be true or false');if(void 0!==t){if(!Array.isArray(t))throw new Error('"annotations" must be a list');t.forEach((e,t)=>{const a=e=>`annotations[${t}].${e}`;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`"annotations[${t}]" must have a "type"`);const o=e;if(!Qr.includes(o.type))throw new Error(`"${a("type")}" must be one of: ${Qr.join(", ")}`);for(const n of["label","color","state"])if(void 0!==o[n]&&"string"!=typeof o[n])throw new Error(`"${a(n)}" must be text`);for(const n of["dash","shade"])if(void 0!==o[n]&&"boolean"!=typeof o[n])throw new Error(`"${a(n)}" must be true or false`);if(ni(o.value,a("value")),ni(o.from,a("from")),ni(o.to,a("to")),void 0!==o.entity&&!oi(o.entity))throw new Error(`"${a("entity")}" must be an entity id`);if("line"===o.type&&void 0===o.value)throw new Error(`"${a("value")}" is needed for a line`);if("band"===o.type&&void 0===o.from&&void 0===o.to)throw new Error(`"${a("from")}" or "${a("to")}" is needed for a band`);if("time"===o.type){if(void 0!==o.times&&"string"!=typeof o.times&&!Array.isArray(o.times))throw new Error(`"${a("times")}" must be a time or a list of times`);const e=si(o.times).find(e=>!function(e){const t=e.trim(),a=ri.exec(t);return a?Number(a[1])<24&&Number(a[2])<60:ii.test(t)||/\d{4}-\d{2}-\d{2}T.+(Z|[+-]\d{2}:?\d{2})$/.test(t)&&Number.isFinite(Date.parse(t))}(e));if(void 0!==e)throw new Error(`"${a("times")}" has "${e}": use 07:00 or 2026-10-28 07:00`)}if("state"===o.type&&void 0===o.entity)throw new Error(`"${a("entity")}" is needed for a state mark`);if(void 0!==o.at&&!ei.includes(o.at))throw new Error(`"${a("at")}" must be one of: ${ei.join(", ")}`)})}}function ci(e){return Array.isArray(e.annotations)?e.annotations:[]}function di(e,t){if(void 0===e)return;if(ai(e))return e;const a=Ho(e);if(null!==a)return a;return Ho(t.states[e.trim()]?.state)??void 0}function ui(e,t,a){const o=[],n=bo("day",t.start,t.end,a,800);for(const r of e){const e=ri.exec(r);if(e){for(const t of n){const n=po(t,a.timeZone);o.push(fo(a.timeZone,n.year,n.month,n.day,+e[1],+e[2],+(e[3]??0)))}continue}const t=ii.exec(r),i=t?fo(a.timeZone,+t[1],+t[2],+t[3],+t[4],+t[5],+(t[6]??0)):Date.parse(r);Number.isFinite(i)&&o.push(i)}return[...new Set(o.filter(e=>e>=t.start&&e<=t.end))].sort((e,t)=>e-t)}function hi(e,t,a,o){const n=[],r=t?.trim().toLowerCase();for(let i=0;i<e.length;i++){const t=e[i];if(i>0&&e[i-1].s===t.s)continue;if(void 0!==r&&t.s.toLowerCase()!==r)continue;let s=i+1;for(;s<e.length&&e[s].s===t.s;)s++;const l=s<e.length?e[s].t:o,c=Math.max(t.t,a.start);l<=a.start||c>a.end||n.push({start:c,end:Math.min(l,a.end),s:t.s})}return n}function pi(e){return Math.ceil(5.8*e.length)+10}const mi=new WeakMap;const fi=e=>Math.round(1e4*e)/100+"%";function gi(e,t){return e.entity&&t.find(t=>t.entity.entityId===e.entity.trim())||t[0]}function vi(e,t,a,o){const n=e.points.filter(e=>null!==e.v&&(o||!e.carried&&(e.t!==a.end||"last"===t)));if(0!==n.length)return"first"===t?n[0]:"last"===t?n[n.length-1]:n.reduce((e,a)=>("max"===t?a.v>e.v:a.v<e.v)?a:e)}function yi(e,t,a,o){const n=ci(e.raw),r=!0===e.raw.zones&&t.series[0]?function(e,t){const[a,o]=t.domain;return e.map((n,r)=>{const i=Math.max(a,Number.isFinite(n.from)?n.from:a),s=Math.min(o,r+1<e.length?e[r+1].from:o);if(!(s>i))return Z``;const l=t.y(s),c=t.y(i);return Z`<rect class="zone" x="0" width=${fn} y=${l} height=${c-l} fill=${je(n.color)}></rect>`})}(t.series[0].entity.bands,a):[];if(0===n.length&&0===r.length)return{behind:W,front:W,overlay:W};const i=[...r],s=[],l=[],{range:c}=t,d=e=>a.x(e),[u,h]=a.domain,p=function(e,t,a){const o=[...new Set(ci(e.raw).filter(e=>"state"===e.type&&e.entity).map(e=>e.entity.trim()))];if(0===o.length)return new Map;const n=o.join(",");let r=mi.get(e.host);if(!r||r.shape!==n||t.start<r.from||!a&&t.end>r.to+6e4||a&&r.to!==1/0){const i=(r?.generation??0)+1,s={shape:n,from:t.start,to:a?1/0:t.end,status:"loading",data:new Map,generation:i};r=s,mi.set(e.host,s);const l=e.hass.callWS?.({type:"history/history_during_period",start_time:new Date(t.start).toISOString(),end_time:new Date(t.end).toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});l&&l.then(t=>{if(mi.get(e.host)===s&&s.generation===i){for(const e of o){const a=(t?.[e]??[]).map(e=>({t:Math.round(1e3*(e.lu??e.lc??0)),s:String(e.s??"")})).filter(e=>e.t>0);s.data.set(e,a.slice(-2e3))}s.status="ready",e.requestUpdate()}},()=>{mi.get(e.host)===s&&(s.status="error")})}const i=r;if("ready"===i.status&&a)for(const s of o){const t=e.hass.states[s];if(!t)continue;const a=Date.parse(t.last_changed??t.last_updated??""),o=i.data.get(s)??[],n=o[o.length-1];Number.isFinite(a)&&(!n||a>n.t&&n.s!==t.state)&&(o.push({t:a,s:t.state}),i.data.set(s,o))}return i.data}(e,c,t.live),m=Math.min(c.end,Date.now()),f=[],g=(e,t,a,o)=>{const n=a.slice(0,2e3);if(s.push(Z`${n.map(e=>Z`<line class="mark-line ${o}" x1=${d(e)} x2=${d(e)} y1="0" y2=${gn} stroke=${t}></line>`)}`),e.label&&n.length<=60)for(const r of n)f.push({t:r,label:e.label,color:t})};for(const y of n){const o=je(y.color??ti[y.type]);if("line"===y.type){const t=di(y.value,e.hass);if(void 0===t||t<u||t>h)continue;const n=a.y(t);if(s.push(Z`<line class="threshold ${!1===y.dash?"":"dashed"}" x1="0" x2=${fn} y1=${n} y2=${n} stroke=${o}></line>`),y.label){const e=n/gn;l.push(q`<span
            class="annotation-label threshold ${e<.12?"below":""}"
            style="top:${fi(e)};--cd-annotation:${o}"
            >${y.label}</span
          >`)}}else if("band"===y.type){const t=void 0===y.from?u:di(y.from,e.hass),n=void 0===y.to?h:di(y.to,e.hass);if(void 0===t||void 0===n)continue;const r=Math.max(u,Math.min(t,n)),s=Math.min(h,Math.max(t,n));if(!(s>r))continue;const c=a.y(s);i.push(Z`<rect class="band" x="0" width=${fn} y=${c} height=${a.y(r)-c} fill=${o}></rect>`),y.label&&l.push(q`<span class="annotation-label band" style="top:${fi(c/gn)};--cd-annotation:${o}"
            >${y.label}</span
          >`)}else if("time"===y.type)g(y,o,ui(si(y.times),c,t.zone),"time");else if("state"===y.type){const e=hi(p.get(y.entity.trim())??[],y.state,c,m);y.shade&&i.push(Z`${e.map(e=>Z`<rect class="state-shade" x=${d(e.start)} width=${Math.max(0,d(e.end)-d(e.start))} y="0" height=${gn} fill=${o}></rect>`)}`),g(y,o,e.map(e=>e.start).filter(e=>e>c.start),"state")}else if("point"===y.type){const n=gi(y,t.series),r=n&&vi(n,y.at??"max",c,void 0!==t.group);if(!n||!r)continue;const i=d(r.t)/fn,s=a.y(r.v)/gn;if(!(i>=0&&i<=1&&s>=0&&s<=1))continue;const u=Cn(jn(r.v,n.entity.decimals,e.hass),n.entity.unit),h=i<.1?"start":i>.9?"end":"";l.push(q`<span class="annotation-dot" style="left:${fi(i)};top:${fi(s)};background:${o}"></span>
          <span
            class="annotation-label point ${h} ${s<.2?"below":""}"
            style="left:${fi(i)};top:${fi(s)};--cd-annotation:${o}"
            >${y.label?q`<span class="point-name">${y.label}</span> `:W}${u}</span
          >`)}}const v=function(e,t,a=2){const o=e.map((e,t)=>t).sort((t,a)=>e[t].x-e[a].x),n=Array.from({length:a},()=>-1/0),r=e.map(()=>{});for(const i of o){const{x:a,width:o}=e[i],s=a+2+o>t?a-2-o:a+2,l=n.findIndex(e=>s>=e+4);l<0||(n[l]=s+o,r[i]=l)}return r}(f.map(e=>({x:d(e.t)/fn*o,width:pi(e.label)})),o);return f.forEach((t,a)=>{const n=v[a];if(void 0===n)return;const r=d(t.t)/fn,i=r*o+2+pi(t.label)>o;l.push(q`<span
        class="annotation-label mark ${i?"end":""}"
        style="left:${fi(r)};top:${15*n}px;--cd-annotation:${t.color}"
        title=${zt(e.hass,"annotation_at",{label:t.label,time:no(t.t,e.hass)})}
        >${t.label}</span
      >`)}),{behind:i.length?Z`<g class="annotations-behind">${i}</g>`:W,front:s.length?Z`<g class="annotations-front">${s}</g>`:W,overlay:l.length?q`<div class="annotation-labels">${l}</div>`:W}}const bi=r`
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
`,_i={line:["value","dash"],band:["from","to"],time:["times"],state:["entity","state","shade"],point:["at","series"]},xi={dash:!0,shade:!1,at:"max"};function wi(e,t,a){return{select:{mode:"dropdown",options:a.map(a=>({value:a,label:zt(e,`editor_annotation_${t}_${a}`)}))}}}const $i=new Map;function ki(e,t){const a={...e};return t.length?a.annotations=t:delete a.annotations,a}function Mi(e,t){if("line"===e)return{type:e,value:0};if("band"===e)return{type:e,from:0,to:1};if("time"===e)return{type:e,times:["07:00"]};if("state"===e){const a=(t.entities??[])[0];return{type:e,entity:"string"==typeof a?a:a?.entity??"sensor.example",state:"on"}}return{type:e,at:"max"}}function zi(e){const t=Array.isArray(e.config.annotations)?e.config.annotations:[],a=(e.config.entities??[]).map(e=>"string"==typeof e?e:e.entity),o=t=>zt(e.hass,t),n=(a,o)=>{const n=[...t];o?n[a]=o:n.splice(a,1),e.commit(ki(e.config,n))};return q`<style>
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
      <div class="annotations-title">${o("editor_annotations")}</div>
      ${t.map((t,r)=>q`<div class="annotation" data-index=${r}>
            <ha-form
              data-section="annotation"
              .hass=${e.hass}
              .data=${function(e){const t={type:e.type};for(const a of[..._i[e.type],"label","color"]){let o=e["series"===a?"entity":a];"times"===a?o=si(e.times).join(", "):"value"!==a&&"from"!==a&&"to"!==a||void 0===o||(o=String(o)),t[a]=o??xi[a]}return t}(t)}
              .schema=${function(e,t,a){const o=`${e}|${Mt(t)}|${a.join(",")}`;let n=$i.get(o);if(n)return n;const r={value:{text:{}},from:{text:{}},to:{text:{}},times:{text:{}},entity:{entity:{}},series:{entity:{include_entities:a}},state:{text:{}},shade:{boolean:{}},dash:{boolean:{}},at:wi(t,"at",ei)};return n=[{name:"type",selector:wi(t,"type",Qr)},..._i[e].map(e=>({name:e,selector:r[e]})),{type:"grid",name:"",schema:[{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}}}]}],$i.set(o,n),n}(Qr.includes(t.type)?t.type:"line",e.hass,a)}
              .computeLabel=${e=>o(`editor_annotation_${e.name}`)}
              @value-changed=${e=>{e.stopPropagation(),n(r,function(e,t){const a=e.type??t.type,o={type:a},n=a===t.type?[..._i[a],"label","color"]:["label","color"];for(const r of n){let t=e[r];"string"==typeof t&&(t=t.trim()),void 0!==t&&""!==t&&t!==xi[r]&&("value"!==r&&"from"!==r&&"to"!==r||!Number.isFinite(Number(t))||(t=Number(t)),"times"===r&&(t=si(t)),o["series"===r?"entity":r]=t)}return o}(e.detail?.value??{},t))}}
            ></ha-form>
            <ha-icon-button
              class="remove"
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              .label=${o("editor_annotation_remove")}
              @click=${()=>n(r)}
            ></ha-icon-button>
          </div>`)}
      <div class="annotation-add">
        <span>${o("editor_annotation_add")}</span>
        ${Qr.map(a=>q`<button
              type="button"
              data-type=${a}
              @click=${()=>e.commit(ki(e.config,[...t,Mi(a,e.config)]))}
            >
              + ${o(`editor_annotation_add_${a}`)}
            </button>`)}
      </div>
    </div>`}function Si(e,t,a){return{select:{mode:"dropdown",options:a.map(a=>({value:a,label:zt(e,`editor_${t}_${a}`)}))}}}const Ai=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"}];function Ei(e){const t=e?.period;return`${t?.calendar?"calendar":"rolling"}${e?.group_by?"|grouped":""}`}function ji(e,t){const[a,o]=Ei(t).split("|"),n="calendar"===a;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:Si(e,"period_calendar",["rolling",...$o])},...n?[{name:"period_until",selector:Si(e,"period_until",ko)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:Si(e,"period_unit",wo)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:Si(e,"source",yn)},{type:"grid",name:"",schema:[{name:"group_by",selector:Si(e,"group_by",["none",...Xo])},...o?[{name:"aggregate",selector:Si(e,"aggregate",Jo)}]:[]]}]}const Ci=Ai.filter(e=>["period_last","period_unit","source"].includes(e.name));function Ni(e){return[{type:"grid",name:"",schema:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:Si(e,"period_unit",wo)}]},{name:"source",selector:Si(e,"source",yn)}]}const Li=[{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];function Ti(e){return[{type:"grid",name:"",schema:[{name:"header",selector:Si(e,"header",Xn)},{name:"compact",selector:{boolean:{}}}]}]}const Oi=[{name:"x_axis",path:["x_axis"],default:Ca},{name:"y_axis",path:["y_axis"],default:Na},{name:"axis_labels",path:["axis_labels"],default:La},{name:"grid_horizontal",path:["gridlines","horizontal"],default:Ta},{name:"grid_vertical",path:["gridlines","vertical"],default:Oa},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function Fi(e){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:Si(e,"axis_labels",ja)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const Pi=[{type:"grid",name:"",schema:[{name:"zoom",selector:{boolean:{}}},{name:"overview",selector:{boolean:{}}}]}],Di=[{name:"zones",selector:{boolean:{}}}];function Ui(e,t){return[{name:"labels",selector:{boolean:{}}},...!0===t?.labels?[{type:"grid",name:"",schema:[{name:"labels_show",selector:Si(e,"labels_show",wr)},{name:"labels_position",selector:Si(e,"labels_position",$r)}]},{name:"labels_overlap",selector:{boolean:{}}}]:[]]}const Hi=[{name:"sync",selector:{text:{}}}];function Ii(e,t){return[{name:"multiples",selector:{boolean:{}}},...!0===t?.multiples?[{type:"grid",name:"",schema:[{name:"multiples_scale",selector:Si(e,"multiples_scale",Xr)},{name:"multiples_columns",selector:{number:{min:1,max:6,mode:"box"}}}]}]:[]]}const Bi=new Map;function qi(e,t,a){const o=`${e}|${Mt(t)}`;let n=Bi.get(o);return n||(n=a(),Bi.set(o,n)),n}function Zi(e,t,a,o,n={}){return q`<ha-form
    data-section=${t}
    .hass=${e.hass}
    .data=${va(e.config,o)}
    .schema=${a}
    .computeLabel=${t=>zt(e.hass,n[t.name]??`editor_${t.name}`)}
    @value-changed=${t=>{t.stopPropagation();const a=ya(e.config,o,t.detail?.value??{});a!==e.config&&e.commit(a)}}
  ></ha-form>`}const Ri=[...Ai,{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"labels_show",path:["labels_show"],default:"all"},{name:"labels_position",path:["labels_position"],default:"auto"},{name:"labels_overlap",path:["labels_overlap"],default:!1},{name:"line_width",path:["line_width"],default:Lt},{name:"dots",path:["dots"],default:!1},...Oi,{name:"y_scale",path:["y_scale"],default:Fa},{name:"zoom",path:["zoom"],default:!1},{name:"overview",path:["overview"],default:!1},{name:"zones",path:["zones"],default:!1},...Zr,{name:"sync",path:["sync"]},...Li,{name:"multiples",path:["multiples"],default:!1},{name:"multiples_scale",path:["multiples_scale"],default:"auto"},{name:"multiples_columns",path:["multiples_columns"]}];function Wi(e,t){if(!e)return t;const[a,o]=e,n={};return void 0===t.y_min&&a>=0&&a<=o/2&&(n.y_min=0),void 0===t.y_max&&o<=0&&o>=a/2&&(n.y_max=0),Object.keys(n).length?{...t,...n}:t}function Vi(e){const t=[];return e.forEach((a,o)=>{o>0&&t.push([a[0],e[o-1][1]]),t.push(a)}),t}function Yi(e,t,a){if(e.length<2)return"";const[o,n,r]="step"===a?[Vi(e),Vi(t),"straight"]:[e,t,a];return`${pn(o,r)}${pn([...n].reverse(),r).replace(/^M/,"L")}Z`}function Gi(e,t){return"step"===t?pn(Vi(e),"straight"):pn(e,t)}function Xi(e,t,a,o,n={}){const r=Ft(e.entity.config,o),i=e.entity.config.line_width??o.line_width,s=a.y(Math.min(Math.max(0,a.domain[0]),a.domain[1])),l=function(e){const t=e.entity.config.negative_color;return"string"==typeof t&&t.trim()?je(t.trim()):e.color}(e),c=`cd-area-${e.index}`,d=`cd-area-line-${e.index}`,u=l!==e.color,h=Z`${function(e,t,a,o,n=.42,r=.05){const i=Math.min(1,Math.max(0,o/gn));return Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${gn}>
    <stop offset="0" stop-color=${t} stop-opacity=${n}></stop>
    <stop offset=${i} stop-color=${t} stop-opacity=${r}></stop>
    <stop offset=${i} stop-color=${a} stop-opacity=${r}></stop>
    <stop offset="1" stop-color=${a} stop-opacity=${n}></stop>
  </linearGradient>`}(c,e.color,l,s,n.stacked?.6:.42,n.stacked?.35:.05)}
    ${u?function(e,t,a,o){const n=Math.min(1,Math.max(0,o/gn));return Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${gn}>
    <stop offset=${n} stop-color=${t}></stop>
    <stop offset=${n} stop-color=${a}></stop>
  </linearGradient>`}(d,e.color,l,s):W}`,p=[],m=[],f=[];if(n.layers){const o=n.layers;let r=[];const i=()=>{if(r.length){const n=r.map(e=>[a.x(t[e].t),a.y(o[e][1])]),i=r.map(e=>[a.x(t[e].t),a.y(o[e][0])]);p.push(Yi(n,i,e.curve)),m.push(Gi(n,e.curve))}r=[]};for(let e=0;e<t.length;e++)o[e]?r.push(e):i();i()}else for(const y of mn(t)){const t=y.map(e=>[a.x(e.t),a.y(e.v)]);p.push(Yi(t,t.map(([e])=>[e,s]),e.curve)),m.push(Gi(t,e.curve))}if(r.dots){const e=n.range;t.forEach((t,o)=>{if(null===t.v||e&&(t.t===e.start||t.t===e.end))return;const r=n.layers?n.layers[o]?.[1]:t.v;void 0!==r&&f.push([a.x(t.t),a.y(r)])})}const g=i??2,v=u?`url(#${d})`:e.color;return{defs:h,body:Z`<g class="series" data-series=${e.index}>
    <path class="fill" d=${p.join("")} fill="url(#${c})" stroke="none"></path>
    <path class="line ${e.dash?"dashed":""}" d=${m.join("")} fill="none" stroke=${v}
      style="stroke-width:${g}px"></path>
    ${f.length>0&&f.length<=200?Z`<path class="dots" d=${Dt(f)} fill="none" stroke=${v}
            style="stroke-width:${Ut(g)}px"></path>`:W}
  </g>`}}const Ji=[...Ai,{name:"curve",path:["curve"],default:"smooth"},{name:"stack",path:["stack"],default:"none"},{name:"line_width",path:["line_width"],default:2},{name:"dots",path:["dots"],default:!1},...Oi,...Li];const Ki={name:"negative_color",path:["negative_color"]},Qi=new Map;const es=r`
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
`,ts={layout:"chart",group:"history",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
    ${es}
  `,thumbnail:()=>Z`
    <defs>
      <linearGradient id="cd-thumb-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.5" />
        <stop offset="1" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10 V36 H4 Z" fill="url(#cd-thumb-area)" />
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){bn(e),Da(e),fr(e),Bt(e),Jn(e),or(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t.negative_color;if(void 0!==e&&"string"!=typeof e)throw new Error(`"negative_color" of ${t.entity} must be a colour`)}}(e)},editor:function(e){const t=qi(`area|${Ei(e.config)}`,e.hass,()=>[...ji(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:Si(e.hass,"curve",dn)},{name:"stack",selector:Si(e.hass,"stack",ar)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"dots",selector:{boolean:{}}}]},...Fi(e.hass),...Ti(e.hass)]);return Zi(e,"chart",t,Ji)},entityFields:function(e,t){const a=!0===t.dots;let o=Qi.get(a);return o||(o=[...ta(a),Ki],Qi.set(a,o)),{schema:qi("area-entity",e,()=>[...la(e),{name:"negative_color",selector:{text:{}}}]),fields:o}},disconnect(e){Mn(e),qn(e),pr(e)},render:function(e){const t=_n(e),a=$n(t,e),o=zn(t,e),n=a===W&&o===W?W:q`${a}${o}`,r=Sn(t,e),i=Kn(e.raw);if(r)return Qn("over"===i.header?{...i,header:"above"}:i,n,r);const s=e.raw.stack??"none",l=t.series.map(e=>({...e,points:io(e.points,500)}));let c,d,u=l;const h={};if("none"===s){const a=za(l.map(e=>e.points));d=Rn({...e,raw:Wi(a,e.raw)},t.range,a);const o=d.scales,n=Pt(l,t=>Ft(t.entity.config,e.raw).onTop);c=n.map(a=>Xi(a,a.points,o,e.raw,{range:t.range}))}else{const a=function(e){const t=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t);return{times:t,values:e.map(e=>t.map(t=>nr(e,t)))}}(l.map(e=>e.points)),o=rr(a.values,s),n=ir(a.values);u=l.map((e,t)=>({...e,points:a.times.map((e,o)=>({t:e,v:a.values[t][o]}))}));const r=sr(o),i="percent"===s?{y_min:r[0]<0?-100:0,y_max:r[1]>0?100:0}:{};d=Rn({...e,raw:Wi(r,{...i,...e.raw})},t.range,r);const p=d.scales;c=u.map((a,n)=>Xi(a,a.points,p,e.raw,{layers:o[n],stacked:!0,range:t.range})).reverse();const m=new Map;u.forEach(e=>e.points.forEach((e,t)=>m.set(e,t))),h.dotY=(e,t)=>{const a=o[e.index][m.get(t)??-1];return a?p.y(a[1]):null};const f=yr(u),g=Math.max(...u.map(e=>e.entity.decimals));h.footer=t=>{const a=t.length?m.get(t[0].p):void 0;return br(e,void 0===a?null:n[a],f,g)},"percent"===s&&(h.text=(t,a)=>{const n=a?o[t.index][m.get(a)??-1]:null;if(!a||null===a.v||!n)return"—";const r=Math.round(Math.abs(n[1]-n[0]));return`${Cn(jn(a.v,t.entity.decimals,e.hass),t.entity.unit)} · ${r} %`})}const p=mr(e.raw),m=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_area"),names:t.series.map(e=>e.entity.name).join(", ")});return Qn(i,n,Yn({axes:d,ctx:e,content:Z`${c.map(e=>e.body)}`,defs:Z`${c.map(e=>e.defs)}`,label:m,overlay:q`${"over"===i.header?er(n):W}
      ${p?_r(e,u,d.scales,hr(e.host),Zn(e),h):W}`,hover:p?gr(e,t.range,u.map(e=>e.points)):void 0}))}};function as(e,t,a){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(a)||a<=t?0:Math.min(1,Math.max(0,(e-t)/(a-t)))}function os(e,t,a){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(a)||a<=t)return[0,0];const o=as(e,t,a);if(t<0&&a>0){const e=as(0,t,a);return o<e?[o,e]:[e,o]}return[0,o]}const ns=new Set;function rs(e){return(e.available?e.band.icon:void 0)??e.config.icon??(e.stateObj?void 0:"mdi:help-circle-outline")}function is(e){return null==e||""===e}function ss(e){if(void 0===e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function ls(e,t,a="limit"){if(is(e))return null;if("number"==typeof e)return Number.isFinite(e)?e:null;const o=String(e),n=ss(t.states[o]?.state);if(null===n&&!ns.has(o)){ns.add(o);const e="limit"===a?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${a} entity "${o}" is missing or not numeric; ${e}.`)}return n}function cs(e,t){if(e.every(e=>"number"==typeof e.from))return e;const a=[];for(const o of e){const e=t?ls(o.from,t,"band start"):null;null!==e&&a.push({...o,from:e})}return a.length?a.sort((e,t)=>e.from-t.from):st}function ds(e,t){const a=e.entity,o=t.states[a],n=e.name??o?.attributes?.friendly_name??a,r=e.unit??(e.attribute?"":o?.attributes?.unit_of_measurement??""),i=function(e,t){if(t)return e.attribute?t.attributes?.[e.attribute]:t.state}(e,o),s=function(e){return"number"==typeof e?Number.isFinite(e)?e:null:"string"==typeof e?ss(e):null}(i),l=null!==s;let c;c=is(e.decimals)?e.attribute?l?function(e){const t=String(e),a=t.indexOf(".");return-1===a||/e/i.test(t)?0:Math.min(2,t.length-a-1)}(i):0:function(e,t,a){const o=e?.entities?.[t]?.display_precision;return"number"==typeof o?o:"%"===a?0:1}(t,a,r):e.decimals;const d=ls(e.min,t)??0,u=ls(e.max,t)??100,h=ls(e.target,t),p=cs(e.severity,t);let m,f="";return l?(f=jn(s,c,t),m=Cn(f,r)):m=o?function(e,t,a,o){const n=e.attribute;return n&&"string"==typeof a&&""!==a.trim()?o.formatEntityAttributeValue?.(t,n)??a:o.formatEntityState?.(t)??zt(o,"unavailable")}(e,o,i,t):zt(t,"entity_not_found"),{entityId:a,config:e,stateObj:o,available:l,value:s,min:d,max:u,target:h,name:n,unit:r,decimals:c,position:l?as(s,d,u):0,span:l?os(s,d,u):[0,0],targetPosition:null===h?null:as(h,d,u),band:Te(l?s:-1/0,p),bands:p,valueText:f,display:m,label:`${n}, ${m}`}}function us(e,t){if(!e.include)return[];const a=new Set(e.entities.map(e=>e.entity));return function(e,t,a){const o=Ze.get(e);if(o&&o.exclude===t&&o.states===a.states&&o.entities===a.entities&&o.devices===a.devices&&o.areas===a.areas)return o.ids;const n=[];for(const i of Object.values(a.states)){if(!Ue(i)||a.entities?.[i.entity_id]?.hidden)continue;const o=He(i,a);if(!Be(e,o)||qe(t,o))continue;const r=i.attributes?.friendly_name;n.push({id:i.entity_id,name:"string"==typeof r&&r?r:i.entity_id})}n.sort((e,t)=>e.name.localeCompare(t.name)||(e.id<t.id?-1:1));const r=n.map(e=>e.id);return Ze.set(e,{exclude:t,states:a.states,entities:a.entities,devices:a.devices,areas:a.areas,ids:r}),r}(e.include,e.exclude,t).filter(e=>!a.has(e))}const hs={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:r`
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
  `,render(e,{show:t,hass:a}){const o=t.value||!e.available,n=q`${t.name?q`<span class="name">${e.name}</span>`:W}${o?q`<span class="value">${e.display}</span>`:W}`;return q`
      ${t.icon?q`<ha-state-icon
              class="icon"
              .hass=${a}
              .stateObj=${e.stateObj}
              .icon=${rs(e)}
            ></ha-state-icon>`:W}
      <div class="track">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?q`<div class="target"></div>`:W}
        <div class="text">${n}</div>
        ${e.available?q`<div class="text on-fill ${Le(e.band.color)}" aria-hidden="true">${n}</div>`:W}
      </div>
    `}};function ps(e,t){const a=e.reduce((e,t)=>e+t.w,0);let o,n=0;for(const r of e){const e=(n+r.w/2)/a;if(n+=r.w,t<=e)return o?o.v+(r.v-o.v)*(t-o.at)/(e-o.at):r.v;o={at:e,v:r.v}}return e[e.length-1].v}const ms=["tukey","range"];function fs(e,t){if(e.length<=t)return[...e];const a=[];for(let o=0;o<t;o++)a.push(e[Math.floor(o*e.length/t)]);return a}const gs=e=>"number"==typeof e&&Number.isFinite(e);function vs(e){for(const t of["x_min","x_max"])if(void 0!==e[t]&&!gs(e[t]))throw new Error(`"${t}" must be a number`);if(gs(e.x_min)&&gs(e.x_max)&&e.x_min>=e.x_max)throw new Error('"x_min" must be below "x_max"')}const ys=[{name:"x_min",path:["x_min"]},{name:"x_max",path:["x_max"]}],bs=[{type:"grid",name:"",schema:[{name:"x_min",selector:{number:{mode:"box",step:"any"}}},{name:"x_max",selector:{number:{mode:"box",step:"any"}}}]}];function _s(e){return{min:gs(e.x_min)?e.x_min:void 0,max:gs(e.x_max)?e.x_max:void 0}}function xs(e,t,a,o={}){const n=Ua(e.raw),r=Math.max(2,Math.min(8,Math.round(Bn(e)/70))),i=qa(t,o.x??{},r),s=qa(a,{min:n.min??o.yFloor,max:n.max},4);return{options:n,value:s,times:i.ticks,unit:"minute",range:{start:i.domain[0],end:i.domain[1]},scales:{x:Aa(i.domain,[0,fn]),y:Aa(s.domain,[gn,0]),domain:s.domain}}}function ws(e){const[t,a]=e.times;return void 0===t||void 0===a?0:Math.max(0,-Math.floor(Math.log10(Math.abs(a-t))+1e-9))}const $s=new WeakMap;function ks(e){return $s.get(e)?.i}function Ms(e){const t=$s.get(e);void 0!==t?.timer&&clearTimeout(t.timer),$s.delete(e)}function zs(e,t){const a=function(e){let t=$s.get(e);return t||(t={},$s.set(e,t)),t}(e.host),o=t=>{t!==a.i&&(a.i=t,e.requestUpdate())},n=()=>{void 0!==a.timer&&clearTimeout(a.timer),a.timer=void 0};return{move(e){n();const a=e.currentTarget.getBoundingClientRect(),r=a.width>0?Math.min(1,Math.max(0,(e.clientX-a.left)/a.width)):0,i=a.height>0?Math.min(1,Math.max(0,(e.clientY-a.top)/a.height)):0;o(t(r,i,a.width,a.height))},leave(e){n(),"touch"===e.pointerType||"pen"===e.pointerType?a.timer=setTimeout(()=>{a.timer=void 0,o(void 0)},cr):o(void 0)}}}const Ss=e=>Math.round(1e4*e)/100+"%";function As(e){const{x:t,y:a,plotWidth:o,title:n,rows:r,dot:i,band:s}=e;if(!(t>=0&&t<=1))return W;const l=lr(t,o);return q`<div class="hover-layer" aria-hidden="true">
    ${s?q`<div class="pick-band" style="left:${Ss(s[0])};width:${Ss(s[1]-s[0])}"></div>`:W}
    ${i&&a>=0&&a<=1?q`<span class="hover-dot" style="left:${Ss(t)};top:${Ss(a)};background:${i}"></span>`:W}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${Ss(t)}`}>
      <div class="tooltip-time">${n}</div>
      ${r.map(e=>q`<div class="tooltip-row">
            ${e.color?q`<span class="swatch" style="background:${e.color}"></span>`:W}
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${e.value}</span>
          </div>`)}
    </div>
  </div>`}const Es=r`
  .pick-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
`,js=["vertical","horizontal"],Cs=.72;function Ns(e,t){const a=e.bounds.length>1,o=a?e.bounds.slice(0,-1).map((t,a)=>[t,e.bounds[a+1]]):[[e.range.start,e.range.end]],n=[];return o.forEach(([o,r],i)=>{const s=Math.min(r,e.until);e.series.forEach((r,l)=>{let c,d;"statistics"===e.source?({samples:c,extremes:d}=function(e,t,a){const o=[];let n=1/0,r=-1/0;for(const i of e)i.t<t||i.t>=a||i.carried||null===i.v||(o.push({v:i.v,w:1}),n=Math.min(n,i.v,"number"==typeof i.min?i.min:i.v),r=Math.max(r,i.v,"number"==typeof i.max?i.max:i.v));return{samples:o,extremes:o.length?[n,r]:void 0}}(r.points,o,s)):c=function(e,t,a){const o=[];if(a<=t)return o;for(let n=0;n<e.length;n++){const r=e[n];if(r.t>=a)break;const i=n+1<e.length?e[n+1].t:1/0,s=Math.max(r.t,t),l=Math.min(i,a);l<=s||null===r.v||o.push({v:r.v,w:l-s})}return o}(r.points,o,s);const u=function(e,t,a){const o=e.filter(e=>e.w>0&&Number.isFinite(e.v)).sort((e,t)=>e.v-t.v);if(0===o.length)return;const n=ps(o,.25),r=ps(o,.5),i=ps(o,.75),s=o.reduce((e,t)=>e+t.w,0),l=o.reduce((e,t)=>e+t.v*t.w,0)/s,c=Math.min(o[0].v,a?.[0]??1/0),d=Math.max(o[o.length-1].v,a?.[1]??-1/0),u={count:o.length,q1:n,median:r,q3:i,mean:l,min:c,max:d};if("range"===t)return{...u,low:c,high:d,outliers:[]};const h=1.5*(i-n),p=o.filter(e=>e.v>=n-h&&e.v<=i+h),m=Math.min(p[0]?.v??n,n),f=Math.max(p[p.length-1]?.v??i,i);let g=[...new Set(o.filter(e=>e.v<m||e.v>f).map(e=>e.v))];return g.length>60&&(g=g.map(e=>({v:e,d:e<m?m-e:e-f})).sort((e,t)=>t.d-e.d).slice(0,60).map(e=>e.v).sort((e,t)=>e-t)),{...u,low:m,high:f,outliers:g}}(c,t,d);u&&n.push({category:a?i:l,slot:a?l:0,series:r,stats:u,readings:fs(c.map(e=>e.v),120)})})}),{boxes:n,categories:a?o.length:e.series.length,slots:a?e.series.length:1}}function Ls(e,t){const a=Math.max(1,Math.ceil(e/Math.max(1,t))),o=[];for(let n=0;n<e;n+=a)o.push(n);return o}const Ts=new Map;function Os(e,t,a){const o=Cs/t;return{centre:e.category-.36+o*(e.slot+.5),half:Math.min(.4*o,a)}}function Fs(e,t,a,o){const{stats:n,series:r}=e,{centre:i,half:s}=t,l=(e,t,a)=>Z`<line class=${a} x1=${e[0]} y1=${e[1]} x2=${t[0]} y2=${t[1]}></line>`,[c,d]=a(i-s,n.q1),[u,h]=a(i+s,n.q3),p=o&&e.readings.length?Z`<path class="readings" d=${Dt(e.readings.map((e,t)=>a(i+function(e){const t=43758.5453*Math.sin(12.9898*(e+1));return 2*(t-Math.floor(t))-1}(t)*s*.8,e)))}></path>`:W;return Z`<g class="box" data-series=${r.index} style="--box-color:${r.color}">
    ${l(a(i,n.low),a(i,n.q1),"whisker")}
    ${l(a(i,n.q3),a(i,n.high),"whisker")}
    ${l(a(i-s/2,n.low),a(i+s/2,n.low),"cap")}
    ${l(a(i-s/2,n.high),a(i+s/2,n.high),"cap")}
    <rect
      class="body"
      x=${Math.min(c,u)}
      y=${Math.min(d,h)}
      width=${Math.abs(u-c)}
      height=${Math.abs(h-d)}
    ></rect>
    ${p}
    ${l(a(i-s,n.median),a(i+s,n.median),"median")}
    ${n.outliers.length?Z`<path class="outliers" d=${Dt(n.outliers.map(e=>a(i,e)))}></path>`:W}
  </g>`}const Ps=[...Ai,{name:"orientation",path:["orientation"],default:"vertical"},{name:"whiskers",path:["whiskers"],default:"tukey"},{name:"readings",path:["readings"],default:!1},...Oi,...Li];const Ds=[{name:"box_color",selector:{text:{}}}],Us=[{name:"box_color",path:["color"]}],Hs={layout:"chart",group:"distribution",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
    ${Es}
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
    </g>`,validate:function(e){bn(e),Da(e),fr(e),Jn(e);const t=e;if(void 0!==t.orientation&&!js.includes(t.orientation))throw new Error(`"orientation" must be one of: ${js.join(", ")}`);if(void 0!==t.whiskers&&!ms.includes(t.whiskers))throw new Error(`"whiskers" must be one of: ${ms.join(", ")}`);if(void 0!==t.readings&&"boolean"!=typeof t.readings)throw new Error('"readings" must be true or false')},editor:function(e){const t={...e.config,group_by:void 0},a=qi(`box|${Ei(t)}`,e.hass,()=>[...ji(e.hass,t),{type:"grid",name:"",schema:[{name:"orientation",selector:Si(e.hass,"orientation",js)},{name:"whiskers",selector:Si(e.hass,"whiskers",ms)}]},{name:"readings",selector:{boolean:{}}},...Fi(e.hass),...Ti(e.hass)]);return Zi(e,"chart",a,Ps)},entityFields:()=>({schema:Ds,fields:Us}),disconnect(e){Mn(e),qn(e),Ms(e)},render(e){const t=function(e,t=Date.now()){const a=Eo(e.raw.period),o=e.raw.source??"history",n=xo(e.hass),r=Co(a,t,n,a.navigate?Lo(e.host,a):0),i=Ko(e.raw),s={start:i?vo(i.unit,r.start,n):r.start,end:r.end},l=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),c="statistics"===o?{period:i?"hour"===i.unit?"5minute":"hour":Vo(s),types:["mean","min","max"],value:"mean"}:void 0,d=cn(e.host,e.requestUpdate).get(e.hass,l,s,o,{live:r.live,statistics:c}),u=e.items.map((e,t)=>{const a=e.config;return{index:t,entity:e,points:d.data.get(Go(l[t]))??[],color:je(a.color??vn[t%vn.length]),curve:"straight",dash:!1}});return{status:d.status,error:d.error,range:s,period:a,source:o,series:u,live:r.live,back:r.back,zone:n,bounds:i?bo(i.unit,s.start,s.end,n):[],unit:i?.unit,until:Math.min(s.end,t)}}(e),a=$n(t,e),o=zn(t,e),n=a===W&&o===W?W:q`${a}${o}`,r=Kn(e.raw),i=Sn(t,e);if(i)return Qn("over"===r.header?{...r,header:"above"}:r,n,i);const s=e.raw,l=s.orientation??"vertical",c=s.whiskers??"tukey",{boxes:d,categories:u,slots:h}=Ns(t,c);let p=1/0,m=-1/0;for(const L of d)p=Math.min(p,L.stats.low,...L.stats.outliers,...!0===s.readings?L.readings:[]),m=Math.max(m,L.stats.high,...L.stats.outliers,...!0===s.readings?L.readings:[]);const f=t.bounds.length>1,g="vertical"===l,v=g?Math.max(4,Math.floor(Zn(e)/Math.max(1,u)/6.5)):16,y=a=>f?function(e,t,a){const o=e.bounds[t],n=e.range.end-e.range.start;return"hour"===e.unit?ro(o,"hour",n,a):"month"===e.unit?ro(o,"month",n,a):ro(o,"day","week"===e.unit?1/0:n,a)}(t,a,e.hass):((e,t=16)=>e.length>t?`${e.slice(0,t-1)}…`:e)(t.series[a]?.entity.name??"",v),b=Math.max(0,...Array.from({length:u},(e,t)=>y(t).length)),_=function(e,t,a,o,n,r=0){const i=Ua(e.raw),s={min:i.min,max:i.max},l=[-.5,a-.5];if("vertical"===t){const t=Zn(e),r=qa(o,s,4);return{options:i,value:r,times:Ls(a,Math.floor(t/n)),unit:"day",range:{start:l[0],end:l[1]},scales:{x:Aa(l,[0,fn]),y:Aa(r.domain,[gn,0]),domain:r.domain}}}const c=Bn(e)-32-(i.y&&"outside"===i.labels?r:0),d=qa(o,s,Math.max(2,Math.min(8,Math.round(c/70)))),u=!0===e.raw.compact?6:10;return{options:{...i,horizontal:i.vertical,vertical:i.horizontal},value:{domain:l,ticks:Ls(a,u),decimals:0},times:d.ticks,unit:"day",range:{start:d.domain[0],end:d.domain[1]},scales:{x:Aa(d.domain,[0,fn]),y:Aa(l,[0,gn]),domain:l}}}(e,l,u,d.length?[p,m]:void 0,f?56:1,6*b+12),x=g?_.scales.x:_.scales.y,w=g?_.scales.y:_.scales.x,$=(e,t)=>g?[x(e),w(t)]:[w(t),x(e)],k=g?Zn(e):r.compact?110:160,M=k>0?u/k*22:1/0,z=Z`${d.map(e=>Fs(e,Os(e,h,M),$,!0===s.readings))}`,S=zt(e.hass,"box_aria",{names:t.series.map(e=>e.entity.name).join(", ")}),A=mr(e.raw),E=A?ks(e.host):void 0,j=(t,a)=>Cn(jn(a,t.series.entity.decimals,e.hass),t.series.entity.unit);let C=W;const N=void 0===E?void 0:d[E];if(N){const a=t=>zt(e.hass,t),{stats:o}=N,n=[{name:a("box_highest"),value:j(N,o.max)},{name:a("box_upper_quartile"),value:j(N,o.q3)},{name:a("box_median"),value:j(N,o.median),color:N.series.color},{name:a("box_lower_quartile"),value:j(N,o.q1)},{name:a("box_lowest"),value:j(N,o.min)},{name:a("box_mean"),value:j(N,o.mean)},{name:a("box_count"),value:String(o.count)}];if(o.outliers.length){const e=o.outliers.length;n.push({name:a("box_outliers"),value:e>=60?`${e}+`:String(e)})}const r=Os(N,h,M),i=f?`${function(e,t,a){const o="month"===t?{month:"long",year:"numeric"}:"hour"===t?{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:eo(a)}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short"},n=a?.locale?.language??"en",r=`${n}|${t}|${Qa(a)}|${o.hour12}`;let i=Ts.get(r);if(!i){try{i=new Intl.DateTimeFormat(n,{...o,timeZone:Qa(a)})}catch{i=new Intl.DateTimeFormat("en",o)}Ts.set(r,i)}return i.format(e)}(t.bounds[N.category],t.unit,e.hass)}${h>1?` · ${N.series.entity.name}`:""}`:N.series.entity.name;C=As(g?{x:x(r.centre)/fn,y:w(o.median)/gn,plotWidth:Zn(e),title:i,rows:n,band:[x(N.category-.5)/fn,x(N.category+.5)/fn]}:{x:w(o.high)/fn,y:x(r.centre)/gn,plotWidth:Zn(e),title:i,rows:n})}return Qn(r,n,Yn({axes:_,ctx:e,content:z,label:S,overlay:q`${"over"===r.header?er(n):W}${C}`,hover:A?zs(e,(e,t)=>function(e,t,a,o){const n=o*t-.5,r=Math.min(t-1,Math.max(0,Math.round(n))),i=n-r+.36;if(a>1&&(i<0||i>=Cs))return;const s=Math.min(a-1,Math.max(0,Math.floor(i/(Cs/a)))),l=e.findIndex(e=>e.category===r&&e.slot===s);return l<0?void 0:l}(d,u,h,g?e:t)):void 0,...g?{xLabel:y}:{yLabel:y,xLabel:t=>jn(t,ws(_),e.hass)}}))}},Is=["entity","time"],Bs=[2,80],qs=[2,30],Zs=[0,20];function Rs(e,t){const a=new Set;for(const i of e)for(const e of i)e.t!==t&&a.add(e.t);const o=[...a].sort((e,t)=>e-t),n=e.map(()=>-1),r=[];for(const i of o){const t=[];let a=!0;e.forEach((e,o)=>{for(;n[o]+1<e.length&&e[n[o]+1].t<=i;)n[o]++;const r=e[n[o]];r&&null!==r.v?t.push(r.v):a=!1}),a&&r.push({t:i,v:t})}return r}function Ws(e,t){if(e.length<=t)return e;const a=e.length/t,o=[];for(let n=0;n<t-1;n++)o.push(e[Math.floor(n*a)]);return o.push(e[e.length-1]),o}function Vs(e,t){let a=Math.floor(e/1e3)^Math.imul(t+1,2654435769)|0;return a=Math.imul(a^a>>>16,73244475),a=Math.imul(a^a>>>16,73244475),a^=a>>>16,(a>>>0)/4294967295*2-1}function Ys(e,[t,a],o,n){const r=o*o+(n*n-o*o)*(a>t?Math.min(1,Math.max(0,(e-t)/(a-t))):.5);return Math.round(10*Math.sqrt(r))/10}const Gs=e=>"number"==typeof e&&Number.isFinite(e);function Xs(e,t,[a,o]){const n=e[t];if(void 0!==n&&(!Gs(n)||n<a||n>o))throw new Error(`"${t}" must be a number from ${a} to ${o}`)}function Js(e,t){return{against:"bubble"===t?"entity":e.against??"entity",dotSize:Gs(e.dot_size)?e.dot_size:6,jitter:Gs(e.jitter)?e.jitter:0,minSize:Gs(e.min_size)?e.min_size:6,maxSize:Gs(e.max_size)?e.max_size:32}}function Ks(e,t){if(bn(e),Da(e),fr(e),Jn(e),vs(e),Xs(e,"jitter",Zs),"scatter"===t){if(void 0!==e.against&&!Is.includes(e.against))throw new Error(`"against" must be one of: ${Is.join(", ")}`);Xs(e,"dot_size",qs)}else{Xs(e,"min_size",Bs),Xs(e,"max_size",Bs);const a=Js(e,t);if(a.minSize>a.maxSize)throw new Error('"min_size" must not be above "max_size"')}}function Qs(e,t){return je(e.entity.config.color??vn[(e.index-t)%vn.length])}const el=(e,t,a)=>Cn(jn(e,t.entity.decimals,a),t.entity.unit);function tl(e,t,a=Date.now()){const o=Js(e.raw,t),{against:n}=o,r=Kn(e.raw),i=_n(e,a),s=$n(i,e),l="time"===n,c=l?0:1,d=i.series.map((e,a)=>l?e.color:"bubble"===t?1===a?Qs(e,1):void 0:0===a?void 0:Qs(e,c)),u=function(e,t,a,o){const{show:n}=a.config;return n.name||n.value?q`<div class="series-header">
    ${e.map((e,r)=>{const i=t[r],s=void 0!==i?q`<span class="swatch" style="background:${i}"></span>`:q`<span class="role"
              >${zt(a.hass,"bubble"===o&&2===r?"bubble_role_size":"scatter_role_x")}</span
            >`;return q`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
        ${s} ${n.name?q`<span class="series-name">${e.entity.name}</span>`:W}
        ${n.value?q`<span class="series-value">${e.entity.display}</span>`:W}
      </div>`})}
  </div>`:W}(i.series,d,e,t),h=s===W&&u===W?W:q`${s}${u}`,p="over"===r.header?{...r,header:"above"}:r;if(i.series.length<function(e,t){return"bubble"===e?3:"entity"===t?2:1}(t,n))return Qn(p,h,q`<div class="chart-message">
        ${zt(e.hass,"bubble"===t?"bubble_needs_three":"scatter_needs_two")}
      </div>`);const m=Sn(i,e);if(m)return Qn(p,h,m);const f="history"!==i.source||i.group?void 0:Math.min(i.range.end,a),g=function(e,t,a,o){const{series:n}=e;if("time"===a)return n.map(e=>({s:e,samples:Ws(e.points.filter(e=>null!==e.v&&e.t!==o&&!e.carried).map(e=>({t:e.t,v:[e.t,e.v]})),800)}));if("bubble"===t){const[e,t,a]=n;return[{s:t,samples:Ws(Rs([e.points,t.points,a.points],o),400)}]}const[r,...i]=n;return i.map(e=>({s:e,samples:Ws(Rs([r.points,e.points],o),800)}))}(i,t,n,f),v=g.flatMap(e=>e.samples);if(0===v.length)return Qn(p,h,q`<div class="chart-message">${zt(e.hass,"chart_no_data")}</div>`);const y=v.map(e=>e.v[1]),b=[Math.min(...y),Math.max(...y)];let _,x;if(l)_=Rn(e,i.range,za(i.series.map(e=>e.points)));else{const t=v.map(e=>e.v[0]);_=xs(e,[Math.min(...t),Math.max(...t)],b,{x:_s(e.raw)});const a=ws(_);x=t=>jn(t,a,e.hass)}const{scales:w}=_,$=Zn(e)||1,k=o.jitter*fn/$,M=o.jitter*gn/(r.compact?96:162);const z="bubble"===t?v.map(e=>e.v[2]):[],S=z.length?[Math.min(...z),Math.max(...z)]:[0,0],A=g.flatMap(({s:e,samples:a})=>{const n=l?e.color:Qs(e,c);return a.map(a=>({series:e,t:a.t,x:w.x(a.v[0])+(k?Vs(a.t,2*e.index)*k:0),y:w.y(a.v[1])+(M?Vs(a.t,2*e.index+1)*M:0),v:l?[a.v[1]]:a.v,color:n,d:"bubble"===t?Ys(a.v[2],S,o.minSize,o.maxSize):void 0}))}),E="bubble"===t?Z`${[...A].sort((e,t)=>(t.d??0)-(e.d??0)).map(e=>Z`<path class="bubble" d=${Dt([[e.x,e.y]])} stroke=${e.color} style="stroke-width:${e.d}px"></path>`)}`:Z`${g.map(({s:e})=>{const t=A.filter(t=>t.series===e);return t.length?Z`<path class="dots" data-series=${e.index} d=${Dt(t.map(e=>[e.x,e.y]))}
                stroke=${t[0].color} style="stroke-width:${o.dotSize}px"></path>`:W})}`,j=mr(e.raw),C=j?ks(e.host):void 0,N=void 0!==C?A[C]:void 0,L=zt(e.hass,"chart_aria",{style:zt(e.hass,`editor_style_${t}`),names:i.series.map(e=>e.entity.name).join(", ")}),T=Math.max(16,"bubble"===t?o.maxSize/2:o.dotSize);return Qn(r,h,q`${Yn({axes:_,ctx:e,content:E,label:L,xLabel:x,overlay:q`${"over"===r.header?er(h):W}
      ${N?al(N,i,t,n,e,$):W}`,hover:j?zs(e,(e,t,a,o)=>function(e,t,a,o,n,r=24){let i,s=r*r;const l=t*o,c=a*n;return e.forEach(([e,t],a)=>{const r=e/fn*o-l,d=t/gn*n-c,u=r*r+d*d;u<=s&&(s=u,i=a)}),i}(A.map(e=>[e.x,e.y]),e,t,a,o,T)):void 0})}
    ${"bubble"===t?function(e,[t,a],o,n){const r=(t,a)=>q`<span class="size-item"
      ><span class="size-dot" style="width:${a}px;height:${a}px"></span>${el(t,e,n)}</span
    >`;return q`<div class="size-legend" aria-hidden="true">
    <span class="size-name">${e.entity.name}</span>
    ${r(t,Ys(t,[t,a],o.minSize,o.maxSize))}
    ${a>t?r(a,Ys(a,[t,a],o.minSize,o.maxSize)):W}
  </div>`}(i.series[2],S,o,e.hass):W}`)}function al(e,t,a,o,n,r){const i="time"===o?[e.series]:"bubble"===a?t.series.slice(0,3):[t.series[0],e.series];return As({x:e.x/fn,y:e.y/gn,plotWidth:r,title:no(e.t,n.hass),dot:e.color,rows:i.map((t,a)=>({color:t===e.series?e.color:void 0,name:t.entity.name,value:el(e.v[a],t,n.hass)}))})}const ol=r`
  ${En}
  ${Gn}
  ${xr}
  ${tr}
  ${Es}
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
`;function nl(e){Mn(e),qn(e),pr(e),Ms(e)}const rl=Oi.map(e=>"x_axis"===e.name?{...e,name:"xy_x_axis"}:e);const il=(e,t,a=1)=>({number:{min:e,max:t,step:a,mode:"box",unit_of_measurement:"px"}}),sl={scatter:[...Ai,{name:"against",path:["against"],default:"entity"},{name:"dot_size",path:["dot_size"],default:6},{name:"jitter",path:["jitter"],default:0},...ys,...rl,...Li],bubble:[...Ai,{name:"min_size",path:["min_size"],default:6},{name:"max_size",path:["max_size"],default:32},{name:"jitter",path:["jitter"],default:0},...ys,...rl,...Li]};function ll(e){return t=>{const a="scatter"===e&&"time"===t.config.against,o=qi(`${e}|${Ei(t.config)}|${a}`,t.hass,()=>{return[...ji(t.hass,t.config),..."scatter"===e?[{name:"against",selector:Si(t.hass,"against",Is)},{type:"grid",name:"",schema:[{name:"dot_size",selector:il(qs[0],qs[1])},{name:"jitter",selector:il(Zs[0],Zs[1])}]}]:[{type:"grid",name:"",schema:[{name:"min_size",selector:il(Bs[0],Bs[1])},{name:"max_size",selector:il(Bs[0],Bs[1])}]},{name:"jitter",selector:il(Zs[0],Zs[1])}],...a?[]:bs,...(o=t.hass,[{type:"grid",name:"",schema:[{name:"xy_x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:Si(o,"axis_labels",ja)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]),...Ti(t.hass)];var o});return Zi(t,"chart",o,sl[e])}}const cl=[{name:"dot_color",path:["color"]}],dl=[{name:"dot_color",selector:{text:{}}}];function ul(){return{schema:dl,fields:cl}}const hl={layout:"chart",group:"distribution",height:270,styles:ol,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)" fill-opacity="0.6">
      <circle cx="14" cy="28" r="4" /><circle cx="27" cy="20" r="7" /><circle cx="44" cy="24" r="5" />
      <circle cx="52" cy="11" r="8" /><circle cx="36" cy="33" r="3" />
    </g>`,validate:e=>Ks(e,"bubble"),editor:ll("bubble"),entityFields:()=>ul(),disconnect:nl,render:e=>tl(e,"bubble")},pl=["auto","none","hour","day","week","month"],ml=["auto","mean","sum","min","max","first","last","change"],fl={last:7,unit:"day"},gl={hour:1/24,day:1,week:7,month:30};function vl(e){if(e.calendar)return{day:"hour",week:"day",month:"day",year:"month"}[e.calendar];const t=e.last*gl[e.unit];return t<=2?"hour":t<=62?"day":t<=190?"week":"month"}function yl(e){if(e.config.attribute)return!1;const t=e.stateObj?.attributes?.state_class;return"total_increasing"===t||"total"===t}function bl(e,t){const a={...e,period:e.period??{...fl}};return"none"===e.group_by?delete a.group_by:void 0!==e.group_by&&"auto"!==e.group_by||(a.group_by=vl(Eo(a.period))),void 0!==e.aggregate&&"auto"!==e.aggregate||(a.aggregate=!0!==e.range&&t.length>0&&t.every(yl)?"change":"mean"),a}function _l(e,t){const a=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t),o=e.map(e=>new Map(e.map(e=>[e.t,e]))),n=new Map;for(const i of e)for(const e of i)void 0!==e.end&&n.set(e.t,e.end);const r={times:[],ends:[],values:e.map(()=>[]),lows:e.map(()=>[]),highs:e.map(()=>[])};return a.forEach((i,s)=>{const l=Math.min(n.get(i)??a[s+1]??t,t);l>i&&(r.times.push(i),r.ends.push(l),e.forEach((e,t)=>{const a=o[t].get(i);r.values[t].push(a?a.v:nr(e,i)),r.lows[t].push(a?.min??null),r.highs[t].push(a?.max??null)}))}),r}function xl(e,t,a,o){const n=t-e,r=.8*n/o,i=o>1?.12*r:0;return[e+.2*n/2+a*r+i/2,r-i]}function wl(e,t=!0){let a=t?0:1/0,o=t?0:-1/0;for(const n of e)null!==n&&Number.isFinite(n)&&(a=Math.min(a,n),o=Math.max(o,n));return a===1/0?void 0:[a,o]}const $l={hour:66,day:52,week:52,month:60};const kl={hour:"hour",day:"day",week:"day",month:"month"};function Ml(e,t,a,o){if("hour"===a)return`${no(e,o)} – ${oo(t,o)}`;const n="day"===a?{weekday:"short",day:"numeric",month:"short"}:"week"===a?{day:"numeric",month:"short"}:{month:"long",year:"numeric"};let r;try{r=new Intl.DateTimeFormat(o?.locale?.language??"en",{...n,timeZone:Qa(o)})}catch{r=new Intl.DateTimeFormat("en",n)}return"week"===a?r.formatRange(e,t-1):r.format(e)}const zl=(e,t)=>Math.round(e/t*1e4)/100+"%",Sl=e=>Math.min(gn,Math.max(0,e));function Al(e,t,a,o,n,r,i,s){const l=Sl(e.y(n)),c=Sl(e.y(o));return q`<div
    class="col ${i?`cap-${i}`:""} ${n<=0&&"both"!==i?"down":""}"
    data-series=${s}
    style="left:${zl(t,fn)};width:${zl(a,fn)};top:${zl(l,gn)};height:${zl(c-l,gn)};background:${r}"
  ></div>`}function El(e,t,a,o,n,r){return q`<span
    class="point-label col-label ${r?"below":""}"
    style="left:${zl(t,fn)};top:${zl(Sl(a),gn)}"
    >${jn(o,n,e.hass)}</span
  >`}function jl(e,t,a,o){const n=e.y(o);return n<0||n>gn?q``:q`<div
    class="target-mark"
    style="left:${zl(t-.1*a,fn)};width:${zl(1.2*a,fn)};top:${zl(n,gn)}"
  ></div>`}const Cl=Ai.map(e=>"period_last"===e.name?{...e,default:fl.last}:"period_unit"===e.name?{...e,default:fl.unit}:"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),Nl=[...Cl,{name:"stack",path:["stack"],default:"none"},{name:"color_by",path:["color_by"],default:"series"},{name:"range",path:["range"],default:!1},{name:"column_labels",path:["labels"],default:!1},{name:"rounded",path:["rounded"],default:!0},...Oi,...Li];const Ll=[{name:"column_color",path:["color"]}],Tl=r`
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
`,Ol={layout:"chart",group:"history",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
    ${Tl}
  `,thumbnail:()=>Z`
    <path d="M7 36 V22 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M19 36 V12 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M31 36 V18 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M43 36 V8 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M55 36 V26 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M4 36.5 H62" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(e){if(void 0!==e.group_by&&!(e=>pl.includes(e))(e.group_by))throw new Error(`"group_by" must be one of: ${pl.join(", ")}`);if(void 0!==e.aggregate&&!ml.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${ml.join(", ")}`);const t={...e};"auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,bn(t),Da(e),fr(e),Jn(e),or(e);for(const a of["range","rounded","labels"])if(void 0!==e[a]&&"boolean"!=typeof e[a])throw new Error(`"${a}" must be true or false`);if(void 0!==e.color_by&&"series"!==e.color_by&&"bands"!==e.color_by)throw new Error('"color_by" must be one of: series, bands')},editor:function(e){const t="none"===e.config.group_by,a={...e.config,group_by:void 0},o=qi(`column|${Ei(a)}|${t}`,e.hass,()=>[...ji(e.hass,a).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:Si(e.hass,"group_by",pl)},...t?[]:[{name:"aggregate",selector:Si(e.hass,"aggregate",ml)}]]},{type:"grid",name:"",schema:[{name:"stack",selector:Si(e.hass,"stack",ar)},{name:"color_by",selector:Si(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"range",selector:{boolean:{}}},{name:"column_labels",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...Fi(e.hass),...Ti(e.hass)]);return Zi({...e,commit:t=>e.commit(function(e){const t=e.period;return t&&"object"==typeof t&&void 0===t.calendar?void 0!==t.last&&void 0!==t.unit?e:{...e,period:{last:fl.last,unit:fl.unit,...t}}:e}(t))},"chart",o,Nl)},entityFields:e=>({schema:qi("column-entity",e,()=>[{name:"column_color",selector:{text:{}}}]),fields:Ll}),disconnect(e){Mn(e),qn(e),pr(e)},render:function(e){const t={...e,raw:bl(e.raw,e.items)},a=t.raw,o=!0===a.range,n=_n(t,Date.now(),{range:o}),r=$n(n,t),i=zn(n,t),s=r===W&&i===W?W:q`${r}${i}`,l=Sn(n,t),c=Kn(a);if(l)return Qn("over"===c.header?{...c,header:"above"}:c,s,l);const d=o?"none":a.stack??"none",u=n.group,h=_l(n.series.map(e=>e.points),u?1/0:n.range.end),p=u&&h.ends.length?{...n.range,end:Math.max(n.range.end,...h.ends)}:n.range,m="none"===d?void 0:rr(h.values,d),f=n.series.map(e=>e.entity.target).filter(e=>null!==e);let g;g=m?sr(m):o?wl([...h.lows.flat(),...h.highs.flat(),...h.values.flat(),...f],!1):wl([...h.values.flat(),...t.config.show.target?f:[]]);let v=a;"percent"===d?v={y_min:g[0]<0?-100:0,y_max:g[1]>0?100:0,...a}:!o&&g&&(v=function(e,t){const a={...t};return void 0===t.y_min&&e[0]>=0&&(a.y_min=0),void 0===t.y_max&&e[1]<=0&&(a.y_max=0),a}(g,a));let y=Rn({...t,raw:v},p,g);const{scales:b}=y,_=h.times.map((e,t)=>(e+h.ends[t])/2),x=new Map(_.map((e,t)=>[e,t]));if(u&&_.length){const e=(w=_.length,$=Zn(t)/$l[u.unit],Math.max(1,Math.ceil(w/Math.max(1,$)))),a=kl[u.unit],o="day"===u.unit&&_.length<=8?6048e5:n.range.end-n.range.start;y={...y,unit:a,times:_.filter((t,a)=>a%e===0),label:e=>ro(h.times[x.get(e)],a,o,t.hass)}}var w,$;const k=function(e,t,a,o,n,r){const i=e.raw,s=t.series,l=s.length,c=!0===i.range,d="bands"===i.color_by,u=Zn(e)/fn,h=!0===i.labels&&"percent"!==n&&a.times.length*(r?1:l)<=60,p=e.config.show.target&&"percent"!==n,m=Math.min(Math.max(0,o.domain[0]),o.domain[1]),f=(e,t)=>d?je(Te(t,e.entity.bands).color):e.color,g={columns:[],labels:[],targets:[]},v=r?ir(a.values):[];return a.times.forEach((t,n)=>{const i=o.x(t),d=o.x(a.ends[n]);if(r){const[t,l]=xl(i,d,0,1);let c=-1,m=-1;r.forEach((e,t)=>{const a=e[n];a&&a[1]>a[0]&&(c=t),a&&a[1]<a[0]&&(m=t)}),r.forEach((e,r)=>{const i=e[n];if(!i||i[0]===i[1])return;const d=a.values[r][n],u=r===c?"top":r===m?"bottom":"";g.columns.push(Al(o,t,l,Math.min(...i),Math.max(...i),f(s[r],d),u,r))});const y=v[n];if(h&&null!==y&&l*u>=24){const a=y>=0?Math.max(0,...r.map(e=>e[n]?.[1]??0)):Math.min(0,...r.map(e=>e[n]?.[1]??0)),i=Math.max(...s.map(e=>e.entity.decimals));g.labels.push(El(e,t+l/2,o.y(a),y,i,y<0))}const b=s[0].entity.target;return void(p&&null!==b&&g.targets.push(jl(o,t,l,b)))}s.forEach((t,r)=>{const s=a.values[r][n];if(null===s)return;const[v,y]=xl(i,d,r,l);if(c){const e=a.lows[r][n]??s,i=a.highs[r][n]??s;g.columns.push(Al(o,v,y,e,i,f(t,s),"both",r)),g.columns.push(q`<div
            class="col-mark"
            style="left:${zl(v,fn)};width:${zl(y,fn)};top:${zl(Sl(o.y(s)),gn)}"
          ></div>`)}else g.columns.push(Al(o,v,y,Math.min(m,s),Math.max(m,s),f(t,s),s>=m?"top":"bottom",r)),h&&y*u>=24&&g.labels.push(El(e,v+y/2,o.y(s),s,t.entity.decimals,s<m));p&&null!==t.entity.target&&g.targets.push(jl(o,v,y,t.entity.target))})}),g}(t,n,h,b,d,m),M=n.series.map((e,t)=>({...e,points:_.map((e,a)=>({t:e,v:h.values[t][a],min:h.lows[t][a],max:h.highs[t][a]}))})),z={dotY:()=>null,heading:e=>{const a=x.get(e);return void 0===a?no(e,t.hass):u?Ml(h.times[a],h.ends[a],u.unit,t.hass):no(h.times[a],t.hass)}},S=(e,a)=>jn(e,a.entity.decimals,t.hass);if(o&&(z.text=(e,t)=>{if(!t||null===t.v)return"—";const a=t.min??t.v,o=t.max??t.v;return Cn(`${S(a,e)} – ${S(o,e)}`,e.entity.unit)}),m){const e=ir(h.values),a=yr(M),o=Math.max(...M.map(e=>e.entity.decimals));z.footer=n=>br(t,e[x.get(n[0]?.p?.t??NaN)??-1]??null,a,o),"percent"===d&&(z.text=(e,t)=>{const a=t?m[e.index][x.get(t.t)??-1]:null;return t&&null!==t.v&&a?`${Cn(S(t.v,e),e.entity.unit)} · ${Math.round(Math.abs(a[1]-a[0]))} %`:"—"})}const A=mr(a),E=A?hr(t.host):void 0,j=void 0===E?void 0:x.get(E),C=void 0===j?W:q`<div
          class="slot-hover"
          style="left:${zl(b.x(h.times[j]),fn)};width:${zl(b.x(h.ends[j])-b.x(h.times[j]),fn)}"
        ></div>`,N=zt(t.hass,"chart_aria",{style:zt(t.hass,"editor_style_column"),names:n.series.map(e=>e.entity.name).join(", ")}),L=!1===a.rounded?0:4;return Qn(c,s,Yn({axes:y,ctx:t,content:Z``,label:N,overlay:q`<div class="columns" style="--r:${L}px">${C}${k.columns}${k.targets}</div>
        <div class="point-labels">${k.labels}</div>
        ${"over"===c.header?er(s):W}
        ${A?_r(t,M,b,E,Zn(t),z):W}`,hover:A?gr(t,p,M.map(e=>e.points)):void 0}))}},Fl={from:0,to:1};const Pl=(e,t,a)=>Math.min(a,Math.max(t,e));function Dl(e,t){const a=Pl(t,0,1);let o=Pl(e.to-e.from,a,1);Number.isFinite(o)||(o=1);const n=Pl(Number.isFinite(e.from)?e.from:0,0,1-o);return{from:n,to:n+o}}function Ul(e){return e.from>1e-9||e.to<1-1e-9}function Hl(e,t,a,o){const n=e.to-e.from,r=e.from+Pl(t,0,1)*n,i=Pl(n/a,o,1),s=r-Pl(t,0,1)*i;return Dl({from:s,to:s+i},o)}function Il(e,t){const a=e.to-e.from,o=Pl(e.from+t,0,1-a);return{from:o,to:o+a}}function Bl(e,t,a,o){const n=e.to-e.from,r=e.from+Pl(Math.min(t,a),0,1)*n,i=e.from+Pl(Math.max(t,a),0,1)*n;if(i-r>=o)return{from:r,to:i};const s=(r+i)/2;return Dl({from:s-o/2,to:s+o/2},o)}function ql(e,t){const a=e.end-e.start;return{start:e.start+t.from*a,end:e.start+t.to*a}}function Zl(e,t){if(0===e.length)return e;let a=0,o=e.length;for(;a<o;){const n=a+o>>1;(e[n].end??e[n].t)<t.start?a=n+1:o=n}const n=Math.max(0,a-1);let r=a;for(;r<e.length&&e[r].t<=t.end;)r++;const i=e.slice(n,Math.min(e.length,r+1));return i.length===e.length?e:i}const Rl=new WeakMap;function Wl(e,t){const a={zoom:!0===(o=e.raw).zoom,overview:!0===o.overview};var o;const n=t.range.end-t.range.start,r=n>0?Math.min(1,function(e){return e.group?2*{hour:36e5,day:864e5,week:6048e5,month:2592e6}[e.group.unit]:3e5}(t)/n):1,i=`${JSON.stringify(t.period)}|${t.back}|${t.group?.unit??""}|${t.source}`,s=function(e,t){let a=Rl.get(e);return a&&a.key===t||(a={key:t,window:Fl,pointers:new Map},Rl.set(e,a)),a}(e.host,i);a.zoom||a.overview||(s.window=Fl);const l=Dl(s.window,r),c=t=>{const a=Dl(t,r);a.from===s.window.from&&a.to===s.window.to||(s.window=a,e.requestUpdate())};return{options:a,window:l,zoomed:Ul(l),range:ql(t.range,l),minSpan:r,current:()=>Dl(s.window,r),set:c,reset:()=>c(Fl)}}const Vl=e=>{const t=e.currentTarget.getBoundingClientRect();return{f:t.width>0?Pl((e.clientX-t.left)/t.width,0,1):0,width:t.width}};function Yl(e){try{e.currentTarget.setPointerCapture?.(e.pointerId)}catch{}}const Gl=e=>e?.leave({pointerType:"mouse"});function Xl(e,t,a){const o=Rl.get(e.host),n=()=>{o.gesture=void 0,o.select&&(o.select=void 0,e.requestUpdate())};return{down(e){const{f:n,width:r}=Vl(e);if(o.pointers.set(e.pointerId,n),2===o.pointers.size){const[e,n]=[...o.pointers.values()];return o.gesture={kind:"pinch",w0:t.current(),start:e<=n?[e,n]:[n,e]},o.select=void 0,void Gl(a)}if(!(o.pointers.size>2)){if("mouse"===e.pointerType&&0===e.button){const a=t.current();o.gesture={kind:Ul(a)?"pan":"select",x0:n,w0:a,moved:!1,px:r},Yl(e)}a?.move(e)}},move(n){if(!o.pointers.has(n.pointerId))return void a?.move(n);const{f:r}=Vl(n);o.pointers.set(n.pointerId,r);const i=o.gesture;if("pinch"===i?.kind){if(o.pointers.size<2)return;const[e,a]=[...o.pointers.values()];return void t.set(function(e,t,a,o){const n=e.to-e.from,r=e.from+t[0]*n,i=e.from+t[1]*n,s=a[1]-a[0];if(Math.abs(s)<.02||Math.abs(t[1]-t[0])<.02)return Il(e,-((a[0]+a[1])/2-(t[0]+t[1])/2)*n);const l=Pl((i-r)/s,o,1),c=r-a[0]*l;return Dl({from:c,to:c+l},o)}(i.w0,i.start,e<=a?[e,a]:[a,e],t.minSpan))}if(i&&("pan"===i.kind||"select"===i.kind))return!i.moved&&Math.abs(r-i.x0)*i.px<4?void a?.move(n):(i.moved||Gl(a),i.moved=!0,void("pan"===i.kind?t.set(Il(i.w0,-(r-i.x0)*(i.w0.to-i.w0.from))):(o.select=[i.x0,r],e.requestUpdate())));a?.move(n)},up(e){const{f:a,width:r}=Vl(e),i=o.gesture;if(o.pointers.delete(e.pointerId),"pinch"===i?.kind)return void(0===o.pointers.size&&(o.gesture=void 0));"select"===i?.kind&&i.moved&&t.set(Bl(i.w0,i.x0,a,t.minSpan));const s=!i||!("moved"in i)||!i.moved;if(n(),"mouse"!==e.pointerType&&s){const n=e.timeStamp||Date.now(),i=o.lastTap;i&&n-i.at<300&&Math.abs(a-i.x)*r<30?(o.lastTap=void 0,t.reset()):o.lastTap={at:n,x:a}}},cancel(e){o.pointers.delete(e.pointerId),"pinch"===o.gesture?.kind&&o.pointers.size>=2||(n(),a?.leave(e))},leave(e){o.gesture&&"mouse"===e.pointerType||(o.pointers.delete(e.pointerId),a?.leave(e))},wheel(e){const{f:a}=Vl(e);if(e.ctrlKey||e.metaKey){e.preventDefault();const o=1===e.deltaMode?16*e.deltaY:e.deltaY;return void t.set(Hl(t.current(),a,Math.exp(-Pl(o,-100,100)/200),t.minSpan))}const o=e.shiftKey&&0===e.deltaX?e.deltaY:e.deltaX,n=t.current();if(Ul(n)&&Math.abs(o)>Math.abs(e.shiftKey?0:e.deltaY)){e.preventDefault();const{width:a}=Vl(e);t.set(Il(n,o/Math.max(a,1)*(n.to-n.from)))}},dblclick(){t.reset()}}}function Jl(e,t){const a=Rl.get(e.host),o=a?.select,n=o?q`<div
        class="zoom-select"
        style="left:${100*Math.min(...o)}%;width:${100*Math.abs(o[1]-o[0])}%"
      ></div>`:W,r=t.zoomed?q`<button
        class="zoom-reset"
        title=${zt(e.hass,"zoom_reset")}
        @pointerdown=${e=>e.stopPropagation()}
        @click=${e=>{e.stopPropagation(),t.reset()}}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${Kl}></path></svg>
        <span>${zt(e.hass,"zoom_reset")}</span>
      </button>`:W;return n===W&&r===W?W:q`${n}${r}`}const Kl="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z";function Ql(e,t){const a=za(e.map(e=>e.points));if(!a)return Z``;const[o,n]=Sa(a),r=Aa([t.start,t.end],[0,fn]),i=Aa([o,n],[38,2]);return Z`${e.map(e=>{const t=mn(io(e.points,200)).map(e=>1===e.length?`M${r(e[0].t).toFixed(1)},${i(e[0].v).toFixed(1)}h0.5`:`M${e.map(e=>`${r(e.t).toFixed(1)},${i(e.v).toFixed(1)}`).join("L")}`).join("");return Z`<path d=${t} fill="none" stroke=${e.color}></path>`})}`}function ec(e,t,a,o){const n=Rl.get(e.host),r=t.window,i=e=>Vl(e),s=ql(a,r),l=zt(e.hass,"zoom_window",{from:no(s.start,e.hass),to:no(s.end,e.hass)}),c=e=>Math.round(1e4*e)/100+"%";return q`<div
    class="overview ${t.zoomed?"zoomed":""}"
    @pointerdown=${e=>{if(e.button>0)return;e.stopPropagation();const{f:a,width:o}=i(e),r=t.current(),s=10/Math.max(o,1);let l="new";Ul(r)&&(Math.abs(a-r.from)<=s?l="left":Math.abs(a-r.to)<=s?l="right":a>r.from&&a<r.to&&(l="move")),n.gesture={kind:l,f0:a,w0:r,moved:!1,px:o},Yl(e)}}
    @pointermove=${e=>{const a=n.gesture;if(!a||!("f0"in a))return;const{f:o}=i(e);if(!a.moved&&Math.abs(o-a.f0)*a.px<4)return;a.moved=!0;const{w0:r}=a;"move"===a.kind?t.set(Il(r,o-a.f0)):"left"===a.kind?t.set({from:Math.min(o,r.to-t.minSpan),to:r.to}):"right"===a.kind?t.set({from:r.from,to:Math.max(o,r.from+t.minSpan)}):t.set(Bl(Fl,a.f0,o,t.minSpan))}}
    @pointerup=${()=>{const e=n.gesture;if(e&&"f0"in e&&(n.gesture=void 0,!e.moved&&"new"===e.kind&&Ul(e.w0))){const a=e.w0.to-e.w0.from;t.set({from:e.f0-a/2,to:e.f0+a/2})}}}
    @pointercancel=${()=>n.gesture=void 0}
    @dblclick=${e=>{e.stopPropagation(),t.reset()}}
  >
    <svg class="overview-lines" viewBox="0 0 ${fn} ${40}" preserveAspectRatio="none" aria-hidden="true">
      ${o}
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
      @keydown=${e=>{const a=t.current(),o=a.to-a.from,n=.5,r={ArrowLeft:()=>Il(a,-o/4),ArrowRight:()=>Il(a,o/4),ArrowUp:()=>Hl(a,n,1.5,t.minSpan),ArrowDown:()=>Hl(a,n,1/1.5,t.minSpan),"+":()=>Hl(a,n,1.5,t.minSpan),"=":()=>Hl(a,n,1.5,t.minSpan),"-":()=>Hl(a,n,1/1.5,t.minSpan),Home:()=>Il(a,-1),End:()=>Il(a,1),Escape:()=>Fl}[e.key];r&&(e.preventDefault(),e.stopPropagation(),t.set(r()))}}
    >
      <span class="overview-handle left"></span><span class="overview-handle right"></span>
    </div>
  </div>`}const tc=r`
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
`,ac="chartdeck-sync";const oc=new WeakMap;function nc(e,t){const a=oc.get(e);a&&window.dispatchEvent(new CustomEvent(ac,{detail:{group:a.group,source:e,message:t}}))}function rc(e){const t=oc.get(e);t&&window.removeEventListener(ac,t.listener),oc.delete(e)}function ic(e,t,a){const o="string"==typeof(n=e.raw).sync&&""!==n.sync.trim()?n.sync.trim():void 0;var n;let r=oc.get(e.host);if(!o)return void(r&&rc(e.host));if(!r||r.group!==o){r&&rc(e.host);const t={group:o,handlers:new Map,ctx:e,listener:()=>{}};t.listener=e=>function(e,t){if(!t||t.group!==e.group||t.source===e.ctx.host)return;const a=t.message;if("hover"===a.type){if(a.t===e.remote)return;e.remote=a.t,e.ctx.requestUpdate()}else if("period"===a.type){const t={period:JSON.parse(a.period)};if(a.period!==e.period||!t.period.navigate||Lo(e.ctx.host,t.period)===a.steps)return;To(e.ctx.host,t.period,a.steps),e.steps=a.steps,e.ctx.requestUpdate()}e.handlers.get(a.type)?.(a)}(t,e.detail),window.addEventListener(ac,t.listener),oc.set(e.host,t),r=t}r.ctx=e,a!==r.sent&&(r.sent=a,nc(e.host,{type:"hover",t:a}));const i=(e=>JSON.stringify(e.period))(t),s=t.period.navigate?Lo(e.host,t.period):0;return r.period===i&&r.steps!==s&&nc(e.host,{type:"period",period:i,steps:s}),r.period=i,r.steps=s,void 0===a?r.remote:void 0}const sc=["series","bands"];function lc(e,t,a){const o=e=>{const t=(gn-a.y(e))/gn;return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0},n=[];return t.forEach((e,a)=>{const r=Number.isFinite(e.from)?o(e.from):0,i=a+1<t.length?o(t[a+1].from):1,s=je(e.color);n.push(Z`<stop offset=${r} stop-color=${s}></stop><stop offset=${i} stop-color=${s}></stop>`)}),Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${gn} y2="0">
    ${n}
  </linearGradient>`}function cc(e,t,a,o,n){const r=Ft(e.entity.config,n),i=io(e.points,500),s=mn(i).map(a=>pn(a.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join(""),l=r.dots?i.filter(e=>null!==e.v&&e.t!==o.start&&e.t!==o.end):[],c=l.length>0&&l.length<=200?Z`<path
          class="dots"
          d=${Dt(l.map(e=>[t.x(e.t),t.y(e.v)]))}
          fill="none"
          stroke=${a}
          style="stroke-width:${Ut(r.width)}px"
        ></path>`:W;return Z`<g class="series" data-series=${e.index}>
    <path
      class="line ${e.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${a}
      style="stroke-width:${r.width}px"
    ></path>
    ${c}
  </g>`}function dc(e,t,a,o,n,r,i){const{range:s}=e;return Cr(t.map(e=>({points:e.points.filter(e=>e.t>=a.start&&e.t<=a.end),decimals:e.entity.decimals,color:e.color})),n,{at:e=>[o.x(e.t)/fn,o.y(e.v)/gn],width:Zn(i),height:r?96:162,skip:t=>void 0===e.group&&(t.t===s.start||t.t===s.end)},i.hass)}function uc(e,t){const a="outside"===t.labels;return(e?110:180)-(a&&t.x?e?14:18:0)-(a&&t.y?6:0)}function hc(e,t,a){const o=e.series.reduce((e,t)=>e+t.entity.name.length+t.entity.display.length+6,0);return{l:0,t:0,r:Math.min(a,8*o),b:t?24:34}}const pc={layout:"chart",group:"history",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
    ${tc}
    ${bi}
    ${Nr}
    ${qr}
    ${Kr}
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
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(e){if(bn(e),Da(e),fr(e),Bt(e),Jn(e),function(e){for(const t of["zoom","overview"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`)}(e),li(e),function(e){const t=e;if(void 0!==t.labels&&"boolean"!=typeof t.labels)throw new Error('"labels" must be true or false');if(void 0!==t.labels_show&&!wr.includes(t.labels_show))throw new Error(`"labels_show" must be one of: ${wr.join(", ")}`);if(void 0!==t.labels_position&&!$r.includes(t.labels_position))throw new Error(`"labels_position" must be one of: ${$r.join(", ")}`);if(void 0!==t.labels_overlap&&"boolean"!=typeof t.labels_overlap)throw new Error('"labels_overlap" must be true or false')}(e),function(e){const t=e.extremes;if(void 0!==t){if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"extremes" must have "min", "max" (true or false) and "average"');const e=t;for(const t of["min","max"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"extremes.${t}" must be true or false`);if(void 0!==e.average&&!Lr.includes(e.average))throw new Error(`"extremes.average" must be one of: ${Lr.join(", ")}`)}for(const a of e.entities??[]){if("object"!=typeof a)continue;const e=a.extremes;if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"extremes" of ${a.entity} must be true or false`)}}(e),function(e){if(void 0!==e.sync&&("string"!=typeof e.sync||""===e.sync.trim()))throw new Error('"sync" must be a group name')}(e),function(e){if(void 0!==e.multiples&&"boolean"!=typeof e.multiples)throw new Error('"multiples" must be true or false');if(void 0!==e.multiples_scale&&!Xr.includes(e.multiples_scale))throw new Error(`"multiples_scale" must be one of: ${Xr.join(", ")}`);const t=e.multiples_columns;if(void 0!==t&&!(Number.isInteger(t)&&t>=1&&t<=6))throw new Error('"multiples_columns" must be a whole number from 1 to 6')}(e),void 0!==e.color_by&&!sc.includes(e.color_by))throw new Error(`"color_by" must be one of: ${sc.join(", ")}`)},editor:function(e){const t=qi(`line|${Ei(e.config)}|${a=e.config,!0===a?.labels?"labels":""}|${(e=>!0===e?.multiples?"multiples":"")(e.config)}`,e.hass,()=>{return[...ji(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:Si(e.hass,"curve",dn)},{name:"color_by",selector:Si(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"dots",selector:{boolean:{}}}]},...Ui(e.hass,e.config),...Fi(e.hass),{name:"y_scale",selector:Si(e.hass,"y_scale",Ea)},...Pi,...Di,...(t=e.hass,[{type:"grid",name:"",schema:[{name:"extremes_max",selector:{boolean:{}}},{name:"extremes_min",selector:{boolean:{}}}]},{name:"extremes_average",selector:{select:{mode:"dropdown",options:Lr.map(e=>({value:e,label:zt(t,`editor_extremes_average_${e}`)}))}}}]),...Hi,...Ti(e.hass),...Ii(e.hass,e.config)];var t});var a;return q`${Zi(e,"chart",t,Ri)}${zi(e)}`},entityFields:(e,t)=>{const a=la(e),o=ta(!0===t.dots);return Dr(Pr(t))?{schema:Vr(a,e),fields:Gr(o)}:{schema:a,fields:o}},watch:function(e){const t=new Set;for(const a of ci(e))for(const e of[a.value,a.from,a.to,"state"===a.type?a.entity:void 0])oi(e)&&t.add(e.trim());return[...t]},disconnect(e){Mn(e),qn(e),pr(e),function(e){Rl.delete(e)}(e),function(e){const t=mi.get(e);t&&t.generation++,mi.delete(e)}(e),rc(e)},render(e){const t=_n(e),a=hr(e.host),o=ic(e,t,a),n=$n(t,e),r=zn(t,e),i=n===W&&r===W?W:q`${n}${r}`,s=Sn(t,e),l=Kn(e.raw);if(s)return Qn("over"===l.header?{...l,header:"above"}:l,i,s);const c=function(e){if(!0===e.multiples)return{scale:e.multiples_scale??"auto",columns:e.multiples_columns}}(e.raw);if(c){const r="log"===e.raw.y_scale?{...t,series:t.series.map(e=>({...e,points:Pn(e.points)}))}:t;return Qn({...l,header:"above"},n,Jr(e,r,c,a??o,(t,n,i)=>function(e,t,a,o,n,r,i=W,s=hr(e.host)){const{scales:l}=o,c=kr(e.raw),d=mr(e.raw),u="bands"===e.raw.color_by,h=u?Z`${a.map(e=>lc(`cd-bands-${e.index}${r}`,e.entity.bands,l))}`:W,p=Pt(a,t=>Ft(t.entity.config,e.raw).onTop),m=Z`${p.map(a=>cc(a,l,u?`url(#cd-bands-${a.index}${r})`:a.color,t.range,e.raw))}`,f=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_line"),names:a.map(e=>e.entity.name).join(", ")});return Yn({axes:o,ctx:e,content:m,label:f,defs:h,overlay:q`${i} ${c?dc(t,a,t.range,l,c,!0,e):W}
    ${d?_r(e,a,l,s,n):W}`,hover:d?gr(e,t.range,a.map(e=>e.points)):void 0})}(e,r,[t],n,i,`-${t.index}`,W,a??o)))}const d=Wl(e,t),u=d.range,h=d.zoomed?t.series.map(e=>({...e,points:Zl(e.points,u)})):t.series,p="log"===e.raw.y_scale,m=p?h.map(e=>({...e,points:Pn(e.points)})):h,f=(g=e.raw,v=e.hass,ci(g).filter(e=>"line"===e.type).map(e=>di(e.value,v)).filter(ai)).filter(e=>!p||e>0).map(e=>({t:u.start,v:e}));var g,v;const y=za([...m.map(e=>e.points),f]);if(p&&!y){const t=q`<div class="chart-message">${zt(e.hass,"chart_log_nothing")}</div>`;return Qn("over"===l.header?{...l,header:"above"}:l,i,t)}const b=Rn(e,u,y),{scales:_}=b,x=mr(e.raw)&&!function(e){const t=Rl.get(e)?.gesture;return!!t&&("pinch"===t.kind||"moved"in t&&t.moved)}(e.host),w="bands"===e.raw.color_by,$=w?Z`${h.map(e=>lc(`cd-bands-${e.index}`,e.entity.bands,_))}`:W,k=Pt(m,t=>Ft(t.entity.config,e.raw).onTop),M=Z`${k.map(a=>cc(a,_,w?`url(#cd-bands-${a.index})`:a.color,t.range,e.raw))}`,z=mr(e.raw)?gr(e,u,h.map(e=>e.points)):void 0,S=yi(e,t,_,Zn(e)),A=kr(e.raw),E=Zn(e),j=Br({ctx:e,series:h,scales:_,range:u,group:t.group,timeWeighted:"history"===t.source&&void 0===t.group,width:E,height:uc(l.compact,b.options),until:Math.min(u.end,Date.now()),obstacles:"over"===l.header?[hc(t,l.compact,E)]:[]}),C=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_line"),names:t.series.map(e=>e.entity.name).join(", ")});return Qn(l,i,Yn({axes:b,ctx:e,content:Z`${S.behind}${j.lines}${M}${S.front}`,label:C,defs:$,overlay:q`${"over"===l.header?er(i):W}
        ${A?dc(t,m,u,_,A,l.compact,e):W}
        ${Jl(e,d)} ${S.overlay} ${j.overlay}
        ${x?_r(e,h,_,a??o,Zn(e)):W}`,hover:z,gestures:d.options.zoom?Xl(e,d,z):void 0,classes:d.options.zoom?"zoomable "+(d.zoomed?"zoomed":""):"",below:d.options.overview?ec(e,d,t.range,Ql(t.series,t.range)):W}))}},mc=["line","column","area"],fc=["auto","left","right"],gc=e=>e.config,vc=e=>gc(e).type??"line";function yc(e,t){const a={...e},o=t.some(e=>"column"===vc(e));return"none"!==e.group_by&&(void 0!==e.group_by&&"auto"!==e.group_by||o)?void 0!==e.group_by&&"auto"!==e.group_by||(a.group_by=vl(Eo(e.period))):delete a.group_by,"auto"===e.aggregate&&delete a.aggregate,a}function bc(e,t){const a=e.flatMap(e=>e.points.map(e=>e.v));return wl(a,t.includes("column"))}const _c=[...Ai.map(e=>"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:Lt},{name:"dots",path:["dots"],default:!1},{name:"rounded",path:["rounded"],default:!0},...Oi,...Li];const xc=[{name:"series_type",path:["type"],default:"line"},{name:"series_axis",path:["y_axis"],default:"auto"},{name:"series_color",path:["color"]},{name:"series_aggregate",path:["aggregate"],default:"auto"},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"negative_color",path:["negative_color"]}],wc={layout:"chart",group:"history",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
    ${es}
    ${Tl}
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
      stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){if(void 0!==e.group_by&&!pl.includes(e.group_by))throw new Error(`"group_by" must be one of: ${pl.join(", ")}`);if(void 0!==e.aggregate&&!ml.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${ml.join(", ")}`);const t={...e};if("auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,bn(t),Ko(t),Da(e),fr(e),Bt(e),Jn(e),void 0!==e.rounded&&"boolean"!=typeof e.rounded)throw new Error('"rounded" must be true or false');for(const a of e.entities??[]){if("object"!=typeof a)continue;const e=a;if(void 0!==e.type&&!mc.includes(e.type))throw new Error(`"type" of ${a.entity} must be one of: ${mc.join(", ")}`);if(void 0!==e.y_axis&&"left"!==e.y_axis&&"right"!==e.y_axis)throw new Error(`"y_axis" of ${a.entity} must be one of: left, right`);if(void 0!==e.aggregate&&!Jo.includes(e.aggregate))throw new Error(`"aggregate" of ${a.entity} must be one of: ${Jo.join(", ")}`)}},editor:function(e){const t="none"===e.config.group_by,a={...e.config,group_by:void 0},o=qi(`combined|${Ei(a)}|${t}`,e.hass,()=>[...ji(e.hass,a).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:Si(e.hass,"group_by",pl)},...t?[]:[{name:"aggregate",selector:Si(e.hass,"aggregate",ml)}]]},{name:"curve",selector:Si(e.hass,"curve",dn)},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"dots",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...Fi(e.hass),...Ti(e.hass)]);return Zi(e,"chart",o,_c)},entityFields:e=>({schema:qi("combined-entity",e,()=>[{type:"grid",name:"",schema:[{name:"series_type",selector:Si(e,"series_type",mc)},{name:"series_axis",selector:Si(e,"series_axis",fc)},{name:"series_color",selector:{text:{}}},{name:"series_aggregate",selector:Si(e,"series_aggregate",["auto",...Jo])}]},{type:"grid",name:"",schema:[{name:"curve",selector:Si(e,"curve",dn)},{name:"line_width",selector:Qt},{name:"dash",selector:{boolean:{}}},{name:"negative_color",selector:{text:{}}}]}]),fields:xc}),disconnect(e){Mn(e),qn(e),pr(e)},render:function(e){const t={...e,raw:yc(e.raw,e.items)},a=t.raw,o=_n(t,Date.now(),{aggregate:t=>function(e,t){const a=t.aggregate;return gc(e).aggregate??(a&&"auto"!==a?a:yl(e)?"change":"mean")}(t,e.raw)}),n=$n(o,t),r=zn(o,t),i=n===W&&r===W?W:q`${n}${r}`,s=Sn(o,t),l=Kn(a);if(s)return Qn("over"===l.header?{...l,header:"above"}:l,i,s);const c=o.series.map(e=>vc(e.entity)),d=function(e){const t=e[0]?.unit,a=e.map(e=>gc(e).y_axis??(e.unit===t?"left":"right"));return a.includes("left")?a:a.map(()=>"left")}(o.series.map(e=>e.entity)),u=o.group,h=o.series.map(e=>u?{...e,points:e.points.map(e=>({...e,t:void 0!==e.end?(e.t+e.end)/2:e.t}))}:e),p=u?Math.max(o.range.end,...o.series.flatMap(e=>e.points.map(e=>e.end??0))):0,m=u?{...o.range,end:p}:o.range,f=e=>h.filter((t,a)=>d[a]===e),g=e=>c.filter((t,a)=>d[a]===e),v=bc(f("left"),g("left"));let y=a;v&&g("left").includes("column")?y={...a,y_min:a.y_min??(v[0]>=0?0:void 0),y_max:a.y_max??(v[1]<=0?0:void 0)}:g("left").includes("area")&&(y=Wi(v,a));const b=Rn({...t,raw:y},m,v),_=b.scales,x=f("right"),w=bc(x,g("right")),$={};w&&(g("right").includes("column")||g("right").includes("area"))&&(w[0]>=0&&w[0]<=w[1]/2&&($.min=0),w[1]<=0&&w[1]>=w[0]/2&&($.max=0));const k=x.length?qa(w,$,4):void 0,M=k?{x:_.x,y:Aa(k.domain,[gn,0]),domain:k.domain}:void 0,z=e=>"right"===d[e.index]&&M?M:_,S=h.filter(e=>"area"===c[e.index]).map(e=>Xi(e,e.points,z(e),a,{range:m})),A=h.filter(e=>"line"===c[e.index]).map(e=>cc({...e,points:e.points},z(e),e.color,m,a)),E=h.filter(e=>"column"===c[e.index]),j=_l(o.series.filter(e=>"column"===c[e.index]).map(e=>e.points),u?1/0:o.range.end),C=!1===a.rounded?0:4,N=[];j.times.forEach((e,t)=>{const a=_.x(e),o=_.x(j.ends[t]);E.forEach((e,n)=>{const r=j.values[n][t];if(null===r)return;const i=z(e),s=Math.min(Math.max(0,i.domain[0]),i.domain[1]),[l,c]=xl(a,o,n,E.length);N.push(Al(i,l,c,Math.min(s,r),Math.max(s,r),e.color,r>=s?"top":"bottom",e.index))})});const L=j.times.map((e,t)=>(e+j.ends[t])/2),T=h.map(e=>{if("column"!==c[e.index]||u)return e;const t=E.indexOf(e);return{...e,points:L.map((e,a)=>({t:e,v:j.values[t][a]}))}}),O=new Map;for(const D of o.series)for(const e of D.points)void 0!==e.end&&O.set((e.t+e.end)/2,[e.t,e.end]);const F=mr(a),P=zt(t.hass,"chart_aria",{style:zt(t.hass,"editor_style_combined"),names:o.series.map(e=>e.entity.name).join(", ")});return Qn(l,i,Yn({axes:b,ctx:t,right:k&&M?{value:k,y:M.y}:void 0,content:Z`${S.map(e=>e.body)}`,defs:Z`${S.map(e=>e.defs)}`,label:P,overlay:q`<div class="columns" style="--r:${C}px">${N}</div>
        <svg class="plot lines-over" viewBox="0 0 ${fn} ${gn}" preserveAspectRatio="none" aria-hidden="true">
          ${A}
        </svg>
        ${"over"===l.header?er(i):W}
        ${F?_r(t,T,_,hr(t.host),Zn(t),{dotY:(e,t)=>"column"===c[e.index]||null===t.v?null:z(e).y(t.v),heading:e=>{const a=O.get(e);return a&&u?Ml(a[0],a[1],u.unit,t.hass):no(e,t.hass)}}):W}`,hover:F?gr(t,m,T.map(e=>e.points)):void 0}))}};function $c(e,t){const a=Math.round(12+88*t);return a>=100?e:`color-mix(in srgb, ${e} ${a}%, var(--card-background-color, #fff))`}const kc=Math.sqrt(3)/2,Mc=["hours","calendar"],zc=["scale","bands"],Sc=["square","rounded","hexagon"],Ac=10,Ec=1e4,jc={hours:{last:4,unit:"week",source:"history"},calendar:{last:12,unit:"month",source:"statistics"}},Cc=e=>"number"==typeof e&&Number.isFinite(e);function Nc(e){return e.grid??"hours"}function Lc(e){const t=Nc(e),a=jc[t],o=e.period??{};return{...e,group_by:"hours"===t?"hour":"day",source:e.source??a.source,period:void 0!==o.calendar?o:{...o,last:o.last??a.last,unit:o.unit??a.unit}}}const Tc=new Map;function Oc(e,t,a){const o=e?.locale?.language??e?.language??"en",n=`${o}|${t}|${JSON.stringify(a)}`;let r=Tc.get(n);if(!r){try{r=new Intl.DateTimeFormat(o,{...a,timeZone:t})}catch{r=new Intl.DateTimeFormat("en",{...a,timeZone:"UTC"})}Tc.set(n,r)}return r}function Fc(e,t){return Oc(t,"UTC",{weekday:"short"}).format(Date.UTC(2024,0,e))}function Pc(e,t,a=!1){return Oc(t,"UTC",{hour:"numeric",...a?{minute:"2-digit"}:{},hour12:eo(t)}).format(Date.UTC(2024,0,1,e))}function Dc(e,t,a,o,n="cell"){const[r,i]=e.centre(t.col,t.row),s=o?`fill:${o}`:"",l=o?"":"empty";if("hexagon"===a)return Z`<path class="${n} ${l}" d=${function(e,t,a){const o=a/Math.sqrt(3),n=[0,1,2,3,4,5].map(a=>{const n=(60*a-90)*Math.PI/180;return`${Math.round(100*(e+o*Math.cos(n)))/100},${Math.round(100*(t+o*Math.sin(n)))/100}`});return`M${n.join("L")}Z`}(r,i,8.8)} style=${s}></path>`;const c=8.8;return Z`<rect class="${n} ${l}" x=${r-4.4} y=${i-4.4} width=${c} height=${c}
    rx=${"rounded"===a?2:.4} style=${s}></rect>`}const Uc=e=>Math.round(1e4*e)/100+"%";function Hc(e,t,a,o){const{zone:n}=t,r=e=>(n.firstDay-1+e)%7+1,i=function(e,t){const a=new Array(168).fill(0),o=new Array(168).fill(0);for(const n of e){if(null===n.v)continue;const e=po(n.t,t.timeZone),r=(e.weekday-t.firstDay+7)%7*24+e.hour;a[r]+=n.v,o[r]+=1}return a.map((e,t)=>({row:Math.floor(t/24),hour:t%24,v:o[t]?e/o[t]:null,count:o[t]}))}(e.points,n).map(e=>({col:e.hour,row:e.row,v:e.v,count:e.count,title:()=>`${Fc(r(e.row),a)} ${Pc(e.hour,a,!0)} – ${Pc((e.hour+1)%24,a,!0)}`})),s=o?3:6;return{cells:i,cols:24,rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:Fc(r(e),a)})),colLabels:Array.from({length:24/s},(e,t)=>({col:t*s,text:Pc(t*s,a)}))}}function Ic(e,t,a){const{zone:o}=t,n=function(e,t){if(0===e.length)return{cells:[],weeks:0,months:[]};const a=e=>{const a=po(e,t.timeZone);return Math.round(Date.UTC(a.year,a.month-1,a.day)/864e5)},o=a(vo("week",e[0].t,t)),n=[],r=[];let i=-1;for(const s of e){const e=po(s.t,t.timeZone),l=Math.floor((a(s.t)-o)/7);n.push({t:s.t,col:l,row:(e.weekday-t.firstDay+7)%7,v:s.v});const c=12*e.year+e.month;c!==i&&(-1!==i&&1!==e.day||r.push({col:l,t:s.t}),i=c)}return r.length>1&&r[1].col-r[0].col<3&&r.shift(),{cells:n,weeks:n[n.length-1].col+1,months:r}}(e.points,o),r=Oc(a,o.timeZone,{weekday:"short",day:"numeric",month:"short",year:"numeric"}),i=Oc(a,o.timeZone,{month:"short"}),s=e=>(o.firstDay-1+e)%7+1;return{cells:n.cells.map(e=>({col:e.col,row:e.row,v:e.v,title:()=>r.format(e.t)})),cols:Math.max(1,n.weeks),rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:Fc(s(e),a)})),colLabels:n.months.map(e=>({col:e.col,text:i.format(e.t)}))}}function Bc(e,t,a,o){const n=a.raw,r=Nc(a.raw),i=n.cell_shape??"rounded",s="bands"===n.color_by,l=Bn(a),c="hours"===r?Hc(e,t,a.hass,l>=400):Ic(e,t,a.hass),d=function(e,t,a){if("hexagon"===a){const a=Ac/Math.sqrt(3),o=Ac*kc,n=e*Ac+5,r=(t-1)*o+2*a;return{width:n,height:r,centre:(e,t)=>[e*Ac+5+t%2*5,a+t*o],at(i,s){const l=Math.min(t-1,Math.max(0,Math.round((s*r-a)/o))),c=Math.floor((i*n-l%2*5)/Ac);return[Math.min(e-1,Math.max(0,c)),l]}}}return{width:e*Ac,height:t*Ac,centre:(e,t)=>[e*Ac+5,t*Ac+5],at:(a,o)=>[Math.min(e-1,Math.floor(a*e)),Math.min(t-1,Math.floor(o*t))]}}(c.cols,c.rows,i),u=Math.max(0,l-72)/d.width*Ac,h=Math.ceil(13/Math.max(1,u*("hexagon"===i?kc:1))),p=c.rowLabels.filter(e=>e.row%h===0);let m=-1/0;const f=c.colLabels.filter(e=>!((e.col-m)*u<32)&&(m=e.col,!0)),g=function(e,t={}){const a=e.filter(e=>null!==e);if(0===a.length&&(void 0===t.min||void 0===t.max))return;let o=t.min??Math.min(...a),n=t.max??Math.max(...a);return n<=o&&(void 0===t.max?n=o+1:o=n-1),[o,n]}(c.cells.map(e=>e.v),{min:Cc(n.color_min)?n.color_min:void 0,max:Cc(n.color_max)?n.color_max:void 0}),v=t=>{if(null!==t)return s?je(Te(t,e.entity.bands).color):g?$c(e.color,function(e,[t,a]){return Math.min(1,Math.max(0,(e-t)/(a-t)))}(t,g)):e.color},y=ks(a.host),b=void 0!==y&&Math.floor(y/Ec)===e.index?y%Ec:void 0,_=new Map(c.cells.map((e,t)=>[8*e.col+e.row,t])),x=mr(a.raw)?zs(a,(t,a)=>{const[o,n]=d.at(t,a),r=_.get(8*o+n);return void 0===r?void 0:e.index*Ec+r}):void 0,w=void 0===b?void 0:c.cells[b];let $=W;if(w){const[t,o]=d.centre(w.col,w.row),n=null===w.v?zt(a.hass,"heatmap_empty"):Cn(jn(w.v,e.entity.decimals,a.hass),e.entity.unit);$=As({x:t/d.width,y:o/d.height,plotWidth:Math.max(0,l-80),title:w.title(),rows:[{color:v(w.v)??"var(--cd-track)",name:e.entity.name,value:n},...void 0!==w.count&&null!==w.v?[{name:zt(a.hass,"heatmap_hours"),value:String(w.count)}]:[]]})}const{show:k}=a.config,M=k.name||k.value||o?q`<div class="series-header">
          <div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
            ${s?W:q`<span class="swatch" style="background:${e.color}"></span>`}
            ${k.name||o?q`<span class="series-name">${e.entity.name}</span>`:W}
            ${k.value?q`<span class="series-value">${e.entity.display}</span>`:W}
          </div>
        </div>`:W,z=zt(a.hass,"heatmap_aria",{name:e.entity.name});return q`<div class="hm grid-${r} shape-${i}">
    ${M}
    <div class="hm-body">
      <div class="hm-rows" aria-hidden="true">
        ${p.map(e=>q`<span class="hm-label" style="top:${Uc(d.centre(0,e.row)[1]/d.height)}">${e.text}</span>`)}
      </div>
      <div
        class="hm-plot ${x?"hoverable":""}"
        @pointerdown=${x?.move}
        @pointermove=${x?.move}
        @pointerleave=${x?.leave}
        @pointercancel=${x?.leave}
      >
        <svg class="hm-svg" viewBox="0 0 ${d.width} ${d.height}" role="img" aria-label=${z}>
          ${c.cells.map(e=>Dc(d,e,i,v(e.v)))}
          ${w?Dc(d,w,i,"none","cell picked"):W}
        </svg>
        ${$}
      </div>
      <div class="hm-cols" aria-hidden="true">
        ${f.map(e=>q`<span class="hm-label" style="left:${Uc(e.col*Ac/d.width)}">${e.text}</span>`)}
      </div>
    </div>
    ${!1===n.legend?W:function(e,t,a,o){const n=e.entity,r=e=>jn(e,n.decimals,o.hass);return a?q`<div class="hm-legend bands">
      ${Oe(n.bands,r,n.unit).map(e=>q`<span class="hm-key"
            ><span class="hm-swatch" style="background:${e.color}"></span>${e.text}</span
          >`)}
    </div>`:t?q`<div class="hm-legend scale">
    <span class="hm-end">${r(t[0])}</span>
    <span class="hm-gradient" style="background:linear-gradient(to right, ${$c(e.color,0)}, ${e.color})"></span>
    <span class="hm-end">${Cn(r(t[1]),n.unit)}</span>
  </div>`:W}(e,g,s,a)}
  </div>`}const qc=new Map;const Zc={layout:"chart",group:"distribution",height:220,styles:r`
    ${En}
    ${xr}
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
          fill="var(--primary-color, #03a9f4)" fill-opacity=${.15+.85*((3*t+5*e)%7/6)}></rect>`))}`,validate:function(e){const t=e,a=(e,a)=>{const o=t[e];if(void 0!==o&&!a.includes(o))throw new Error(`"${e}" must be one of: ${a.join(", ")}`)};a("grid",Mc),a("color_by",zc),a("cell_shape",Sc);for(const o of["color_min","color_max"])if(void 0!==t[o]&&!Cc(t[o]))throw new Error(`"${o}" must be a number`);if(Cc(t.color_min)&&Cc(t.color_max)&&t.color_min>=t.color_max)throw new Error('"color_min" must be below "color_max"');if(void 0!==t.legend&&"boolean"!=typeof t.legend)throw new Error('"legend" must be true or false');bn(Lc(e)),fr(e)},editor:function(e){const t=Nc(e.config),a=qi(`heatmap|${Ei({...e.config,group_by:void 0})}`,e.hass,()=>[{name:"grid",selector:Si(e.hass,"grid",Mc)},...ji(e.hass,{...e.config,group_by:void 0}).filter(e=>!JSON.stringify(e).includes('"group_by"')),{name:"aggregate",selector:Si(e.hass,"aggregate",Jo)},{type:"grid",name:"",schema:[{name:"color_by",selector:Si(e.hass,"color_by",zc)},{name:"cell_shape",selector:Si(e.hass,"cell_shape",Sc)}]},{type:"grid",name:"",schema:[{name:"color_min",selector:{number:{mode:"box",step:"any"}}},{name:"color_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"legend",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}}]}]);return Zi(e,"chart",a,function(e){let t=qc.get(e);if(!t){const a=jc[e],o={period_last:a.last,period_unit:a.unit,source:a.source};t=[{name:"grid",path:["grid"],default:"hours"},...Ai.filter(e=>"group_by"!==e.name).map(e=>e.name in o?{...e,default:o[e.name]}:e),{name:"color_by",path:["color_by"],default:"scale"},{name:"cell_shape",path:["cell_shape"],default:"rounded"},{name:"color_min",path:["color_min"]},{name:"color_max",path:["color_max"]},{name:"legend",path:["legend"],default:!0},{name:"tooltip",path:["tooltip"],default:!0}],qc.set(e,t)}return t}(t))},entityFields:()=>({schema:[{name:"series_color",selector:{text:{}}}],fields:[{name:"series_color",path:["color"]}]}),disconnect(e){Mn(e),qn(e),Ms(e)},render(e){const t=_n({...e,raw:Lc(e.raw)}),a=$n(t,e),o=Sn(t,e);if(o)return q`<div class="frame">${a}${o}</div>`;const n=t.series.length>1;return q`<div class="frame">${a}${t.series.map(a=>Bc(a,t,e,n))}</div>`}},Rc=["time","readings"],Wc=100,Vc=e=>Number(e.toPrecision(12));const Yc=6e4,Gc=36e5;const Xc=["percent","total"],Jc=["side","overlap"],Kc=["series","bands"],Qc=e=>"number"==typeof e&&Number.isFinite(e);function ed(e,t,a){if(void 0!==e[t]&&!a.includes(e[t]))throw new Error(`"${t}" must be one of: ${a.join(", ")}`)}function td(e,t){const a=_n(e,t),o={count:(n=e.raw).count??"time",showAs:n.show_as??"percent",bars:n.bars??"side",bands:"bands"===n.color_by,bins:Qc(n.bins)?n.bins:void 0,width:Qc(n.bin_width)?n.bin_width:void 0};var n;const r=Math.min(a.range.end,t),i=a.series.map(e=>function(e,t){const{mode:a,until:o,statistics:n}=t;if(0===e.length)return[];if(void 0!==e[0].end)return e.map(e=>null===e.v?0:"readings"===a?1:Math.max(0,Math.min(e.end,o)-e.t));if(n){if("readings"===a)return e.map(e=>null===e.v||e.carried?0:1);const t=e.slice(1).map((t,a)=>t.t-e[a].t).filter(e=>e>0).sort((e,t)=>e-t),o=t.length?t[Math.floor(t.length/2)]:36e5;return e.map(e=>null===e.v||e.carried?0:o)}const r=e.length-1;return e.map((t,n)=>{if(null===t.v)return 0;if("readings"===a){const a=n===r&&n>0&&t.t>=o&&e[n-1].v===t.v;return t.carried||a?0:1}const i=n<r?e[n+1].t:Math.max(t.t,o);return Math.max(0,Math.min(i,o)-t.t)})}(e.points,{mode:o.count,until:r,statistics:"statistics"===a.source}));let s=1/0,l=-1/0;a.series.forEach((e,t)=>e.points.forEach((e,a)=>{null!==e.v&&i[t][a]>0&&(s=Math.min(s,e.v),l=Math.max(l,e.v))}));const c=_s(e.raw),d="side"===o.bars&&a.series.length>1,u=Math.max(5,Math.min(24,Math.round(Zn(e)/(d?40:28)))),h=s===1/0?[]:function(e,t,a={},o=12){const n=a.min??e,r=a.max??t;if(void 0!==a.bins&&void 0===a.width){let[e,t]=[n,r];t>e||([e,t]=[e-.5,e+.5]);const o=(t-e)/a.bins;return Array.from({length:a.bins+1},(n,r)=>r===a.bins?t:Vc(e+r*o))}const i=r-n;let s=a.width??(i>0?Ha(i,o):Ha(Math.max(Math.abs(n),1),10));for(;i/s>Wc;)s=Ha(i,50);const l=a.min??Vc(Math.floor(n/s+1e-9)*s);let c=a.max??Vc(Math.ceil(r/s-1e-9)*s);c>l||(c=Vc(l+s));const d=[l];for(let u=1;d[d.length-1]<c-1e-9*s;u++)d.push(Math.min(c,Vc(l+u*s)));return d}(s,l,{bins:o.bins,width:o.width,min:c.min,max:c.max},u),p=a.series.map((e,t)=>{const a=function(e,t,a){const o=new Array(Math.max(0,a.length-1)).fill(0);return e.forEach((e,n)=>{if(null===e.v||!(t[n]>0))return;const r=function(e,t){const a=t.length-1;if(a<1||e<t[0]||e>t[a])return-1;if(e===t[a])return a-1;let o=0,n=a-1;for(;o<n;){const a=o+n+1>>1;t[a]<=e?o=a:n=a-1}return o}(e.v,a);r>=0&&(o[r]+=t[n])}),o}(e.points,i[t],h),n=a.reduce((e,t)=>e+t,0),r=a.map(e=>"percent"===o.showAs?n>0?e/n*100:0:"time"===o.count?e/36e5:e);return{series:e,totals:a,heights:r,whole:n}});return{frame:a,opts:o,edges:h,data:p,side:d}}function ad(e,t,a){return"time"===t?function(e){if(e<Yc)return e>0?"< 1 min":"0 min";const t=Math.round(e/Yc);if(t<60)return`${t} min`;if(e<864e5){const e=Math.floor(t/60),a=t%60;return a?`${e} h ${a} min`:`${e} h`}const a=Math.round(e/Gc),o=Math.floor(a/24),n=a%24;return n?`${o} d ${n} h`:`${o} d`}(e):1===e?zt(a.hass,"histogram_reading"):zt(a.hass,"histogram_readings",{n:jn(e,0,a.hass)})}const od={layout:"chart",group:"distribution",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
    ${Es}
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
    <path d="M4 37 H60" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate(e){if(bn(e),Da(e),fr(e),Jn(e),vs(e),ed(e,"count",Rc),ed(e,"show_as",Xc),ed(e,"bars",Jc),ed(e,"color_by",Kc),void 0!==e.bins&&!(Number.isInteger(e.bins)&&e.bins>=1&&e.bins<=Wc))throw new Error('"bins" must be a whole number from 1 to 100');if(void 0!==e.bin_width&&!(Qc(e.bin_width)&&e.bin_width>0))throw new Error('"bin_width" must be a number above 0')},editor:function(e){const t=e.hass,a=qi(`histogram|${Ei(e.config)}`,t,()=>[...ji(t,e.config),{type:"grid",name:"",schema:[{name:"count",selector:Si(t,"count",Rc)},{name:"show_as",selector:Si(t,"show_as",Xc)}]},{type:"grid",name:"",schema:[{name:"bins",selector:{number:{min:1,max:Wc,mode:"box"}}},{name:"bin_width",selector:{number:{min:0,mode:"box",step:"any"}}}]},...bs,{type:"grid",name:"",schema:[{name:"bars",selector:Si(t,"bars",Jc)},{name:"color_by",selector:Si(t,"color_by",Kc)}]},...Fi(t).map(e=>"grid"===e.type?{...e,schema:e.schema.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e)}:e),...Ti(t)]);return Zi(e,"chart",a,sd)},entityFields:()=>({schema:rd,fields:nd}),disconnect(e){Mn(e),qn(e),Ms(e)},render(e){const t=Date.now(),{frame:a,opts:o,edges:n,data:r,side:i}=td(e,t),s=$n(a,e),l=zn(a,e),c=s===W&&l===W?W:q`${s}${l}`,d=Kn(e.raw),u=Sn(a,e)??(n.length<2?Sn({...a,series:[]},e):void 0);if(u)return Qn("over"===d.header?{...d,header:"above"}:d,c,u);const h=Math.max(0,...r.flatMap(e=>e.heights)),p=xs(e,[n[0],n[n.length-1]],[0,h],{x:{min:n[0],max:n[n.length-1]},yFloor:0}),{scales:m}=p,f=m.y(Math.max(0,p.value.domain[0])),g=r.length,v="overlap"===o.bars&&g>1,y=Z`${r.map((e,t)=>{const a=e.heights.map((a,r)=>{if(!(a>0))return W;const s=m.x(n[r]),l=m.x(n[r+1]),c=Math.min(4,.08*(l-s)),d=(l-s-2*c)/(i?g:1),u=s+c+(i?d*t:0),h=m.y(a),p=o.bands&&e.series.entity.bands.length?je(Te((n[r]+n[r+1])/2,e.series.entity.bands).color):e.series.color;return Z`<rect class="bin" x=${u} y=${Math.min(h,f)} width=${Math.max(.5,d)} height=${Math.abs(f-h)} fill=${p} stroke=${v?p:"none"}></rect>`});return Z`<g class="series" data-series=${e.series.index}>${a}</g>`})}`,b=function(e){if(e.length<2)return 0;const t=e[1]-e[0],a=e.every(e=>Math.abs(e-Number(e.toFixed(Ia(t))))<1e-6*t);return a?Ia(t):Math.min(4,Ia(t)+1)}(n),_=mr(e.raw),x=_?ks(e.host):void 0;let w=W;if(void 0!==x&&x<n.length-1){const t=r[0]?.series.entity.unit??"",a=jn(n[x],b,e.hass),i=jn(n[x+1],b,e.hass),s=m.x(n[x])/fn,l=m.x(n[x+1])/fn,c=Zn(e);w=As({x:"right"===lr(l,c)?l:s,y:0,plotWidth:c,title:Cn(`${a} – ${i}`,t),band:[s,l],rows:r.map(t=>{const a=t.whole>0?t.totals[x]/t.whole*100:0;return{color:t.series.color,name:t.series.entity.name,value:`${jn(a,a>0&&a<1?1:0,e.hass)}% · ${ad(t.totals[x],o.count,e)}`}})})}const $=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_histogram"),names:a.series.map(e=>e.entity.name).join(", ")});return Qn(d,c,Yn({axes:p,ctx:e,content:Z`<g class=${v?"overlap":"side"}>${y}</g>`,label:$,xLabel:t=>jn(t,ws(p),e.hass),yLabel:t=>"percent"===o.showAs?`${jn(t,p.value.decimals,e.hass)}%`:"time"===o.count?`${jn(t,p.value.decimals,e.hass)} h`:jn(t,p.value.decimals,e.hass),overlay:q`${"over"===d.header?er(c):W}${w}`,hover:_?zs(e,e=>{const t=n[0]+e*(n[n.length-1]-n[0]),a=n.findIndex((e,a)=>a<n.length-1&&t>=e&&t<=n[a+1]);return a<0?void 0:a}):void 0}))}},nd=[{name:"bar_color",path:["color"]}],rd=[{name:"bar_color",selector:{text:{}}}],id=Oi.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e),sd=[...Ai,{name:"count",path:["count"],default:"time"},{name:"show_as",path:["show_as"],default:"percent"},{name:"bins",path:["bins"]},{name:"bin_width",path:["bin_width"]},...ys,{name:"bars",path:["bars"],default:"side"},{name:"color_by",path:["color_by"],default:"series"},...id,...Li];function ld(e){let t=0;for(const a of e)t+=a.codePointAt(0)>=11904?1/.58:1;return t}function cd(e,t=76,a=12,o=8,n=11){const r=e.trim();let i=[r];if(ld(r)>n){let e=ld(r);for(let t=r.indexOf(" ");t>0;t=r.indexOf(" ",t+1)){const a=Math.max(ld(r.slice(0,t)),ld(r.slice(t+1)));a<e&&(e=a,i=[r.slice(0,t),r.slice(t+1)])}}const s=Math.max(...i.map(ld));return{lines:i,size:Math.max(o,Math.min(a,Math.floor(t/(.58*Math.max(1,s)))))}}const dd=65,ud=66,hd=50,pd=[-90,90],md=e=>String(Math.round(1e3*e)/1e3+0);function fd(e,t,a,o,n,r=11){const{lines:i,size:s}=cd(e,t,a,o,r),l=n-1.2*(i.length-1)*s;return Z`<text class="na" text-anchor="middle" style="font-size: ${s}px">${i.map((e,t)=>Z`<tspan x=${dd} y=${md(l+1.2*t*s)}>${e}</tspan>`)}</text>`}const gd={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:r`
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
  `,render(e,{show:t,hass:a}){const o=e.config.gauge,n=Je(pd,o),r=e=>Qe(n,e),i=function(e,t,a){const o=a-t,n=[];return o>0?(e.forEach((r,i)=>{const s=0===i?t:Math.max(r.from,t),l=Math.min(i+1<e.length?e[i+1].from:1/0,a);l>s&&n.push({from:(s-t)/o,to:(l-t)/o,color:r.color})}),n):n}(e.bands,e.min,e.max),s=i.map((e,t)=>{const a=r(e.from)+(t>0?1:0),o=r(e.to)-(t<i.length-1?1:0);return o>a?Z`<path class="seg" d=${Ve(dd,ud,hd,a,o)} stroke=${je(e.color)}></path>`:W}),l=e=>{const[t,a]=We(dd,ud,36,e),[o,n]=We(dd,ud,40,e);return Z`<line class="tickmark" x1=${t.toFixed(2)} y1=${a.toFixed(2)} x2=${o.toFixed(2)} y2=${n.toFixed(2)}></line>`},c=o?.tickLabels?function(e,t,a=5){if(!(Number.isFinite(e)&&Number.isFinite(t)&&t>e))return[];const o=at(t-e,a),n=[];for(let r=Math.ceil(e/o)*o;r<t-.4*o;r+=o)r>e+.4*o&&n.push(Number(r.toPrecision(12)));return[e,...n,t]}(e.min,e.max):[],d=e.max-e.min,u=c.length?c.map(t=>l(r((t-e.min)/d))):Array.from({length:11},(e,t)=>l(r(t/10))),h=at(d),p=t.target&&null!==e.targetPosition,m=p?67:60,f=Ke(o)||c.length>0,g=f?Math.max(94,Math.ceil(tt(dd,ud,hd,n[0],n[1],6).y1)+14):94,v=c.map(t=>{const o=r((t-e.min)/d),[n,i]=We(dd,ud,m,o),{anchor:s,dy:l}=nt(o);return Z`<text class="tick-label" x=${n.toFixed(2)} y=${i.toFixed(2)} dy="${l}em" text-anchor=${s}>${jn(t,ot(t,h),a)}</text>`});let y=W;if(t.target&&null!==e.targetPosition&&e.available){const t=r(e.targetPosition),[a,o]=We(dd,ud,57,t),[n,i]=We(dd,ud,64,t-3),[s,l]=We(dd,ud,64,t+3);y=Z`<polygon class="target-mark" points="${a.toFixed(2)},${o.toFixed(2)} ${n.toFixed(2)},${i.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const b=!t.value,_=e.available?rt(e,o):{kind:"value"};let x={x:0,y:0,w:130,h:b?82:104};if(f){const t=function(e,t,a,o,n,r){const i=[tt(dd,ud,hd,t[0],t[1],n.hasTarget?15:7),tt(dd,ud,43,t[0],t[1],0),{x0:57,y0:58,x1:73,y1:74},n.compact?{x0:2,y0:40,x1:128,y1:82}:{x0:2,y0:n.valueY-16,x1:128,y1:n.valueY+6}],s=e.max-e.min;for(const c of a){const a=Qe(t,(c-e.min)/s),[l,d]=We(dd,ud,n.labelR,a),{anchor:u,dy:h}=nt(a),p=9*jn(c,ot(c,o),r).length*.6,m="start"===u?l:"end"===u?l-p:l-p/2,f=d+9*h;i.push({x0:m,y0:f-9,x1:m+p,y1:f+2})}const l=et(...i);return{x0:Math.floor(l.x0-2),y0:Math.floor(l.y0-2),x1:Math.ceil(l.x1+2),y1:Math.ceil(l.y1+2)}}(e,n,c,h,{hasTarget:p,labelR:m,valueY:g,compact:b},a);x={x:t.x0,y:t.y0,w:t.x1-t.x0,h:t.y1-t.y0}}const w=f?`width: min(${md(x.w)}px, 100%); aspect-ratio: ${md(x.w)} / ${md(x.h)}`:void 0;return q`<div
      class="needle-gauge ${f?"fitted":""}"
      style=${f?`--needle-start: ${md(n[0])}deg; width: ${md(Math.max(130,x.w))}px`:W}
    >
      <svg
        class=${b?"compact":""}
        viewBox="${md(x.x)} ${md(x.y)} ${md(x.w)} ${md(x.h)}"
        style=${w??W}
        aria-hidden="true"
      >
        ${s} ${u} ${v} ${y}
        ${e.available?Z`<g class="needle" style="transform: rotate(${md(r(e.position))}deg)"><path d=${$=dd,k=ud,M=42,z=3,`M${Re($)} ${Re(k-M)} L${Re($+z)} ${Re(k)} L${Re($-z)} ${Re(k)} Z`}></path></g>`:W}
        <circle class="hub" cx=${dd} cy=${ud} r="6"></circle>
        <circle class="hub-dot" cx=${dd} cy=${ud} r="2.5"></circle>
        ${e.available?t.value?"value"===_.kind?Z`<text class="value" x=${dd} y=${g} text-anchor="middle">${e.display}</text>`:"text"===_.kind?Z`<text
                      class="center-text"
                      x=${dd}
                      y=${g}
                      text-anchor="middle"
                      style=${_.band?`fill: ${je(e.band.color)}`:W}
                    >${_.text}</text>`:W:W:b?function(e){return fd(e,58,11,7,55)}(e.display):function(e,t=94){return fd(e,126,12,8,t,18)}(e.display,g)}
      </svg>
      ${t.name&&"name"!==o?.center||t.icon?q`<div class="name">
              ${t.icon?q`<ha-state-icon
                      class="icon"
                      .hass=${a}
                      .stateObj=${e.stateObj}
                      .icon=${rs(e)}
                    ></ha-state-icon>`:W}
              ${t.name&&"name"!==o?.center?q`<span class="name-text">${e.name}</span>`:W}
            </div>`:W}
    </div>`;var $,k,M,z}};function vd(e){return e.map(e=>e.available&&e.value>0?e.value:0)}function yd(e,t=100){const a=e.reduce((e,t)=>e+Math.max(0,t),0);if(a<=0)return e.map(()=>0);const o=e.map(e=>Math.max(0,e)/a*t),n=o.map(Math.floor);let r=t-n.reduce((e,t)=>e+t,0);const i=o.map((e,t)=>({i:t,rest:e-n[t]})).sort((e,t)=>t.rest-e.rest||e.i-t.i);for(const{i:s}of i){if(r<=0)break;n[s]+=1,r-=1}return n}function bd(e,t){return t>0?e/t*(180/Math.PI):0}function _d(e){const t=Math.max(0,e.end-e.start);return`--a:${(e.start-90).toFixed(3)}deg;--len:${t.toFixed(3)}`}function xd(e,t,a,o,n="primary"){return"bands"===o?je(e.band.color):"shades"===o?function(e,t,a){return a<=1||t<=0?e:`color-mix(in srgb, ${e} ${Math.round(100-Math.min(t,a-1)/(a-1)*65)}%, var(--card-background-color, #fff))`}(je(n),t,a):je(function(e){const t=e.config.color;return"string"==typeof t&&""!==t.trim()?t:void 0}(e)??vn[t%vn.length])}function wd(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:""}function $d(e,t,a,o=e.map(e=>e.available?e.value:0)){const n=e.map((e,t)=>({e:e,v:o[t]})).filter(({e:e})=>e.available);if(!n.length)return;const r=n.reduce((e,{v:t})=>e+t,0),i="total"===t?r:r/n.length,s=Math.max(...n.map(({e:e})=>e.decimals));return{value:i,text:jn(i,s,a),unit:wd(e)}}function kd(e){return Se(e.config)?0:W}function Md(e,t){const{show:a}=t.config;return!e.length||!a.name&&!a.value&&e.every(e=>void 0===e.share)?W:q`<div class="parts-legend">
    ${e.map(e=>q`<div
          class="entity part-row ${Se(e.entity.config)?"interactive":""} ${e.entity.available?"":"unavailable"}"
          data-index=${e.index}
          tabindex=${kd(e.entity)}
          aria-label=${void 0===e.share?e.entity.label:`${e.entity.label}, ${e.share}`}
        >
          <span class="swatch ${e.entity.available?"":"empty"}" style="background:${e.color}"></span>
          ${a.name?q`<span class="part-name">${e.entity.name}</span>`:W}
          ${a.value?q`<span class="part-value value">${e.entity.display}</span>`:W}
          ${void 0===e.share?W:q`<span class="part-share">${e.share}</span>`}
        </div>`)}
  </div>`}function zd(e,t){return Cn(jn(e,0,t),"%")}function Sd(e,t){return zt(e.hass,"parts_aria",{style:zt(e.hass,t),names:e.items.map(e=>e.name).join(", ")})}function Ad(e,t,a){return q`<div class="centre" aria-hidden="true">
    <div class="centre-value">${e}${t?q`<span class="centre-unit">${t}</span>`:W}</div>
    ${a?q`<div class="centre-caption">${a}</div>`:W}
  </div>`}function Ed(e,t,a){const o=e[t];if(void 0!==o&&!a.includes(o))throw new Error(`"${t}" must be one of: ${a.join(", ")}`)}function jd(e,t,a,o){const n=e[t];if(void 0!==n&&("number"!=typeof n||!Number.isFinite(n)||n<a||n>o))throw new Error(`"${t}" must be a number from ${a} to ${o}`)}function Cd(e,t){const a=e[t];if(void 0!==a&&"boolean"!=typeof a)throw new Error(`"${t}" must be true or false`)}function Nd(e,t){const a=e[t];if(void 0!==a&&"string"!=typeof a)throw new Error(`"${t}" must be text`)}const Ld=r`
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
`,Td=["series","bands"];function Od(e,t,a,o){const{show:n}=a.config,r=function(e,t,a){const o=t-e;if(!(o>0))return{count:0,per:1};const n=void 0!==a&&a>0?a:o<=20?1:o/10,r=Math.ceil(o/n-1e-9);return r>100?{count:100,per:o/100}:{count:r,per:n}}(e.min,e.max,o.perIcon),i=e.available?function(e,t,a,o){const n=Math.min(a.count,Math.max(0,(e-t)/a.per)),r=o?n:Math.floor(n+1e-9);return Array.from({length:a.count},(e,t)=>Math.min(1,Math.max(0,r-t)))}(e.value,e.min,r,o.partial):r.count?Array(r.count).fill(0):[],s=xd(e,t,a.items.length,o.colorBy),l=e.config.icon??o.unitIcon??(e.stateObj?void 0:"mdi:checkbox-blank-circle"),c=r.count>20?20:28,d=e.available?q`<span class="picto-now">${e.valueText}</span
        ><span class="picto-of"
          >/ ${Cn(jn(e.max,Number.isInteger(e.max)?0:e.decimals,a.hass),e.unit)}</span
        >`:e.display;return q`<div
    class="entity picto-row ${Se(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    tabindex=${kd(e)}
    aria-label=${e.label}
  >
    ${n.name?q`<span class="name picto-name">${e.name}</span>`:W}
    <div class="picto-icons" style="--mdc-icon-size:${c}px" role="img" aria-label=${e.label}>
      ${function(e,t){if(e<=0)return[];if(!(t>0))return[[0,e]];const a=[];for(let o=0;o<e;o+=t)a.push([o,Math.min(e,o+t)]);return a}(i.length,o.groupSize).map(([t,o])=>q`<span class="picto-group">${i.slice(t,o).map((o,n)=>((t,o)=>q`<span class="unit" style="--i:${o};--fill:${(100*t).toFixed(1)}%">
      <ha-state-icon class="unit-empty" .hass=${a.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon>
      <span class="unit-full" style="color:${s}"
        ><ha-state-icon .hass=${a.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon
      ></span>
    </span>`)(o,t+n))}</span>`)}
    </div>
    ${n.value?q`<span class="value picto-value">${d}</span>`:W}
  </div>`}const Fd=[{name:"unit_icon",path:["unit_icon"]},{name:"per_icon",path:["per_icon"]},{name:"group_size",path:["group_size"],default:5},{name:"color_by",path:["color_by"],default:"series"},{name:"partial",path:["partial"],default:!0}];const Pd={layout:"chart",group:"totals",height:180,styles:r`
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
        <path d="M${3+11*e} 30 a7 7 0 0 1 14 0 z" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`)}`,validate(e){Nd(e,"unit_icon");const t=e.per_icon;if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<=0))throw new Error('"per_icon" must be a number more than 0');if(jd(e,"group_size",0,50),void 0!==e.group_size&&!Number.isInteger(e.group_size))throw new Error('"group_size" must be a whole number');Ed(e,"color_by",Td),Cd(e,"partial")},editor:function(e){const t=qi("pictograph",e.hass,()=>[{name:"unit_icon",selector:{icon:{}}},{type:"grid",name:"",schema:[{name:"per_icon",selector:{number:{min:0,step:"any",mode:"box"}}},{name:"group_size",selector:{number:{min:0,max:50,mode:"box"}}},{name:"color_by",selector:Si(e.hass,"color_by",Td)}]},{name:"partial",selector:{boolean:{}}}]);return Zi(e,"chart",t,Fd)},render:function(e){const t={perIcon:(a=e.raw).per_icon,unitIcon:a.unit_icon||void 0,groupSize:a.group_size??5,partial:!1!==a.partial,colorBy:a.color_by??"series"};var a;return q`<div class="pictograph" role="group" aria-label=${Sd(e,"editor_style_pictograph")}>
    ${e.items.map((a,o)=>Od(a,o,e,t))}
  </div>`}},Dd=["donut","pie"],Ud=["total","none"],Hd=["series","bands","shades"],Id=48;function Bd(e,t){const a=function(e){const t=e.reduce((e,t)=>e+Math.max(0,t),0);return e.map(e=>t>0?Math.max(0,e)/t:0)}(e),o=a.filter(e=>e>0).length,n="donut"===t.shape?41.5:24;let r=0;return"donut"===t.shape&&(o>1&&(r+=bd(t.gap,n)),t.rounded&&(r+=bd(13,n))),function(e,t=0,a=360){const o=a-t;let n=t;return e.map(e=>{const t=n;return n+=e*o,{start:t,end:n}})}(a).map((e,t)=>a[t]>0?function(e,t){const a=e.end-e.start,o=Math.min(Math.max(0,t),a)/2;return{start:e.start+o,end:e.end-o}}(e,r):void 0)}const qd=[{name:"shape",path:["shape"],default:"donut"},{name:"color_by",path:["color_by"],default:"series"},{name:"center",path:["center"],default:"total"},{name:"center_label",path:["center_label"],default:""},{name:"gap",path:["gap"],default:2},{name:"shade_color",path:["shade_color"],default:""},{name:"rounded",path:["rounded"],default:!1},{name:"gradient",path:["gradient"],default:!1},{name:"show_percent",path:["show_percent"],default:!0}];const Zd={layout:"chart",group:"totals",height:200,styles:r`
    ${Ld}
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
      pathLength="100" stroke-dasharray="22 78" stroke-dashoffset="-76" transform="rotate(-90 32 20)" />`,validate(e){Ed(e,"shape",Dd),Ed(e,"center",Ud),Ed(e,"color_by",Hd),jd(e,"gap",0,10),Cd(e,"rounded"),Cd(e,"gradient"),Cd(e,"show_percent"),Nd(e,"shade_color"),Nd(e,"center_label")},editor:function(e){const t=qi("pie",e.hass,()=>[{type:"grid",name:"",schema:[{name:"shape",selector:Si(e.hass,"shape",Dd)},{name:"color_by",selector:Si(e.hass,"color_by",Hd)},{name:"center",selector:Si(e.hass,"center",Ud)},{name:"center_label",selector:{text:{}}},{name:"gap",selector:{number:{min:0,max:10,step:.5,mode:"slider"}}},{name:"shade_color",selector:{text:{}}}]},{name:"rounded",selector:{boolean:{}}},{name:"gradient",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Zi(e,"chart",t,qd)},render:function(e){const t={shape:(a=e.raw).shape??"donut",center:a.center??"total",colorBy:a.color_by??"series",shadeColor:a.shade_color||"primary",gap:a.gap??2,rounded:!0===a.rounded,gradient:!0===a.gradient,percent:!1!==a.show_percent,centerLabel:a.center_label??""};var a;const o=e.items,n=vd(o),r=o.map((e,a)=>xd(e,a,o.length,t.colorBy,t.shadeColor)),i=Bd(n,t),s="donut"===t.shape,l=s?41.5:24,c=s?13:Id,d=s?35/Id:0,u=i.filter(Boolean).length,h=t.gradient?Z`<defs>${o.map((e,t)=>i[t]?function(e,t,a){return Z`<radialGradient id=${e} gradientUnits="userSpaceOnUse" cx="50" cy="50" r=${Id}>
    <stop offset=${a} style="stop-color:color-mix(in srgb, ${t} 65%, #fff)"></stop>
    <stop offset="1" style="stop-color:${t}"></stop>
  </radialGradient>`}(`cd-pie-${t}`,r[t],d):W)}</defs>`:W,p=o.map((e,a)=>{const o=i[a];if(!o)return W;const n=t.gradient?`url(#cd-pie-${a})`:r[a];return Z`<g
      class="entity slice ${Se(e.config)?"interactive":""}"
      data-index=${a}
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
        style="${_d(o)};stroke:${n}"
      ></circle>
    </g>`}),m=!s&&t.gap>0&&u>1?i.map(e=>e?Z`<line class="separator" x1="50" y1="50" x2="50" y2=${1}
                stroke-width=${t.gap} style="--a:${e.start.toFixed(3)}deg"></line>`:W):W,f=0===u?Z`<circle class="track" cx="50" cy="50" r=${l} stroke-width=${c} fill="none"></circle>`:W,g=yd(n),v=o.map((a,o)=>({index:o,entity:a,color:r[o],share:t.percent&&n[o]>0?zd(g[o],e.hass):void 0})),y=$d(o,"total",e.hass,n),b=s&&"total"===t.center&&y?Ad(y.text,"",t.centerLabel||wd(o)):W;return q`<div class="parts">
    <div class="dial">
      <svg viewBox="0 0 100 100" role="img" aria-label=${Sd(e,"editor_style_pie")}>
        ${h}${f}${p}${m}
      </svg>
      ${b}
    </div>
    ${Md(v,e)}
  </div>`}};let Rd=0;const Wd=new WeakMap;const Vd=60,Yd=60,Gd=e=>String(Math.round(1e3*e)/1e3+0);function Xd(e){return Math.min(22,Math.floor(124/Math.max(1,e.length)))}function Jd(e){const t=function(e,t){const a=e/2;return[-a+t[0]*e,-a+t[1]*e]}(e,[0,1]),a=Ve(Vd,Yd,46,t[0],t[1]),o=e<360;return{layout:"tiles",group:"gauges",height:o?135:155,minColumnWidth:128,styles:r`
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
    `,render(e,{show:n,hass:r}){const i=function(e){let t=Wd.get(e);return t||(t="cd-g-"+ ++Rd,Wd.set(e,t)),t}(e.config),s=e.config.gauge,l=Je(t,s),c=Ke(s),d=c?Ve(Vd,Yd,46,l[0],l[1]):a;let u=0,h=o?100:120;if(c){const e=et(tt(Vd,Yd,46,l[0],l[1],6.5),{x0:26,y0:26,x1:94,y1:94});u=Math.max(0,Math.floor(e.y0)),h=Math.min(120,Math.ceil(e.y1))-u}const p=h<120,m=e.available&&n.value?rt(e,s):{kind:"none"},f=e.span[1]-e.span[0]<=0,g=`stroke-dasharray: ${Gd(100*(e.span[1]-e.span[0]))} 100; stroke-dashoffset: ${Gd(100*-e.span[0])}`,v=(y=e.band.color,Object.prototype.hasOwnProperty.call(Ee,y)?Ee[y].fallback:y);var y;const b=function(e){return!e.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",e))}(v)?`url(#${i}) ${v}`:`url(#${i})`,_=n.icon?6:0,x=Xd(e.valueText);let w=W;if(n.target&&null!==e.targetPosition&&e.available){const t=Qe(l,e.targetPosition),[a,o]=We(Vd,Yd,39.5,t),[n,r]=We(Vd,Yd,52.5,t);w=Z`<line class="tick" x1=${a.toFixed(2)} y1=${o.toFixed(2)} x2=${n.toFixed(2)} y2=${r.toFixed(2)}></line>`}return q`<div class="radial ${p?"cropped":""}">
        <div class="dial ${c?"fitted":""}" style=${c?`aspect-ratio: 124 / ${h}; --y0: ${u}`:W}>
          <svg viewBox="0 ${u} 120 ${h}" aria-hidden="true">
            <defs>
              <linearGradient id=${i} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${Vd} cy=${Yd} r="34"></circle>
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
                        x=${Vd}
                        y=${66+_}
                        text-anchor="middle"
                        style="font-size: ${Math.min(18,Xd(m.text))}px${m.band?`; fill: ${je(e.band.color)}`:""}"
                      >${m.text}</text>`:"value"===m.kind?Z`<text
                        class="value"
                        x=${Vd}
                        y=${64+_}
                        text-anchor="middle"
                        style=${x<22?`font-size: ${x}px`:W}
                      >${e.valueText}</text>
                      <text class="unit" x=${Vd} y=${80+_} text-anchor="middle">${e.unit}</text>`:W}`:function(e){const{lines:t,size:a}=cd(e),o=64-1.2*(t.length-1)*a/2;return Z`<text class="na" text-anchor="middle" style="font-size: ${a}px">${t.map((e,t)=>Z`<tspan x=${Vd} y=${Gd(o+1.2*t*a)}>${e}</tspan>`)}</text>`}(e.display)}
          </svg>
          ${n.icon&&e.available?q`<ha-state-icon
                  class="icon ${n.value&&"none"!==m.kind?"":"centre"}"
                  .hass=${r}
                  .stateObj=${e.stateObj}
                  .icon=${rs(e)}
                ></ha-state-icon>`:W}
        </div>
        ${n.name&&"name"!==s?.center?q`<span class="name">${e.name}</span>`:W}
      </div>`}}}const Kd=Jd(360),Qd=Jd(270),eu=["average","total","none"],tu=["series","bands"];function au(e){return{start:e.start_angle??0,end:e.end_angle??270,center:e.center??"average",colorBy:e.color_by??"series",rounded:!1!==e.rounded_ends}}const ou=[{name:"start_angle",path:["start_angle"],default:0},{name:"end_angle",path:["end_angle"],default:270},{name:"center",path:["center"],default:"average"},{name:"color_by",path:["color_by"],default:"series"},{name:"rounded_ends",path:["rounded_ends"],default:!0}];const nu={layout:"chart",group:"totals",height:200,styles:r`
    ${Ld}
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
      pathLength="100" stroke-dasharray="48 100" transform="rotate(-90 32 20)" stroke-linecap="round" />`,validate(e){jd(e,"start_angle",-360,360),jd(e,"end_angle",-360,360);const{start:t,end:a}=au(e);if(a<=t||a-t>360)throw new Error('"end_angle" must be after "start_angle", and at most 360 degrees after it');Ed(e,"center",eu),Ed(e,"color_by",tu),Cd(e,"rounded_ends")},editor:function(e){const t=qi("rings",e.hass,()=>[{type:"grid",name:"",schema:[{name:"start_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"end_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"center",selector:Si(e.hass,"center",eu)},{name:"color_by",selector:Si(e.hass,"color_by",tu)}]},{name:"rounded_ends",selector:{boolean:{}}}]);return Zi(e,"chart",t,ou,{start_angle:"editor_rings_start_angle"})},render:function(e){const t=au(e.raw),a=e.items,{radii:o,width:n}=function(e){if(e<=0)return{radii:[],width:0};const t=Math.min(9,28/(1.33*e)),a=1.33*t;return{radii:Array.from({length:e},(e,o)=>48-t/2-o*a),width:t}}(a.length),r=a.map((e,o)=>xd(e,o,a.length,t.colorBy)),i=t.rounded?"round":"butt",s=_d({start:t.start,end:t.end}),l=a.map((e,a)=>{const l=e.available?Z`<circle class="seg" cx="50" cy="50" r=${o[a]} pathLength="360" stroke-width=${n}
          stroke-linecap=${i} style="${_d(function(e,t,a){return{start:t,end:t+Math.min(1,Math.max(0,e))*(a-t)}}(e.position,t.start,t.end))};stroke:${r[a]}"></circle>`:W;return Z`<g
      class="entity ring ${Se(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
      data-index=${a}
      aria-label=${e.label}
    >
      <circle class="ring-track" cx="50" cy="50" r=${o[a]} pathLength="360" stroke-width=${n}
        stroke-linecap=${i} style=${s}></circle>
      ${l}
    </g>`}),c="none"===t.center?void 0:$d(a,t.center,e.hass),d=c?Ad(c.text,c.unit,zt(e.hass,`parts_${t.center}`)):W,u=a.map((e,t)=>({index:t,entity:e,color:r[t]})),h=function(e,t){const a=e=>-Math.cos(e*Math.PI/180),o=360*Math.ceil((e-180)/360)+180<=t?1:Math.max(a(e),a(t));return Math.min(100,Math.max(66,50+48*o+6))}(t.start,t.end);return q`<div class="parts">
    <div class="dial" style="aspect-ratio:100 / ${h.toFixed(2)}">
      <svg viewBox="0 0 100 ${h.toFixed(2)}" role="img" aria-label=${Sd(e,"editor_style_rings")}>
        ${l}
      </svg>
      <div class="centre-box" style="height:${(100/h*100).toFixed(2)}%">${d}</div>
    </div>
    ${Md(u,e)}
  </div>`}},ru={layout:"chart",group:"distribution",height:240,styles:ol,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)">
      <circle cx="10" cy="32" r="2.5" /><circle cx="17" cy="27" r="2.5" /><circle cx="22" cy="29" r="2.5" />
      <circle cx="28" cy="21" r="2.5" /><circle cx="34" cy="23" r="2.5" /><circle cx="40" cy="15" r="2.5" />
      <circle cx="47" cy="17" r="2.5" /><circle cx="53" cy="9" r="2.5" />
    </g>
    <g fill="var(--warning-color, #f59e0b)">
      <circle cx="14" cy="18" r="2.5" /><circle cx="31" cy="33" r="2.5" /><circle cx="50" cy="28" r="2.5" />
    </g>`,validate:e=>Ks(e,"scatter"),editor:ll("scatter"),entityFields:()=>ul(),disconnect:nl,render:e=>tl(e,"scatter")};function iu(e){const[t,a]=e;return Array.from({length:10},(e,o)=>{const n=(o+.5)/10;return n>t&&n<=a})}const su={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:r`
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
  `,render(e,{show:t,hass:a}){const o=e.available?iu(e.span):iu([0,0]),n=t.target&&e.available&&null!==e.targetPosition?Math.min(9,Math.max(0,Math.floor(10*e.targetPosition))):-1,r=!e.available;return q`<div class="seg">
      ${t.icon?q`<ha-state-icon
              class="icon"
              .hass=${a}
              .stateObj=${e.stateObj}
              .icon=${rs(e)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${t.name||r?q`<div class="name">
                ${t.name?q`<span class="label">${e.name}</span>`:W}
                ${r?q`<span class="status">${e.display}</span>`:W}
              </div>`:W}
        <div class="cells">
          ${o.map((e,t)=>q`<i class="cell ${e?"on":""} ${t===n?"mark":""}" style="--i:${t}"></i>`)}
        </div>
      </div>
      ${t.value?q`<span class="value">${e.available?e.display:""}</span>`:W}
    </div>`}},lu={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:r`
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
  `,render:(e,{show:t,hass:a})=>q`
      ${t.icon?q`<ha-state-icon
              class="icon"
              .hass=${a}
              .stateObj=${e.stateObj}
              .icon=${rs(e)}
            ></ha-state-icon>`:W}
      ${t.value||!e.available?q`<span class="value">${e.display}</span>`:W}
      <div class="tube">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?q`<div class="target"></div>`:W}
      </div>
      ${t.name?q`<span class="name">${e.name}</span>`:W}
    `},cu={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:r`
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
  `,render(e,{show:t,hass:a}){const o=t.value||!e.available;return q`
      ${t.icon?q`<ha-state-icon
              class="icon"
              .hass=${a}
              .stateObj=${e.stateObj}
              .icon=${rs(e)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${t.name||o?q`<div class="top">
                ${t.name?q`<span class="name">${e.name}</span>`:W}
                ${o?q`<span class="value">${e.display}</span>`:W}
              </div>`:W}
        <div class="track">
          <div class="fill"></div>
          ${t.target&&null!==e.targetPosition&&e.available?q`<div class="target"></div>`:W}
        </div>
      </div>
    `}},du=["one","each"],uu=["series","bands"];function hu(e){if(1===e.length){const t=e[0];return t.available?[yd([t.position,1-t.position])[0]]:[0]}return yd(vd(e),100)}function pu(e,t){const{col:a,row:o}=function(e){return{col:e%10,row:9-Math.floor(e/10)}}(e);return Z`<rect
    class="cell ${t?"filled":""}"
    x=${10*a+.8}
    y=${10*o+.8}
    width="8.4"
    height="8.4"
    rx="1.6"
    style="--k:${e}${t?`;fill:${t}`:""}"
  ></rect>`}function mu(e,t,a,o){let n=0;const r=e.map((e,o)=>{const r=n;if(n+=e,!e)return W;const i=a[o];return Z`<g class="entity ${Se(i.config)?"interactive":""}" data-index=${o}>
      ${Array.from({length:e},(e,a)=>pu(r+a,t[o]))}
    </g>`}),i=Array.from({length:100-n},(e,t)=>pu(n+t,void 0));return q`<svg class="waffle" viewBox="0 0 100 100" role="img" aria-label=${o}>
    ${r}
    <g class="empty">${i}</g>
  </svg>`}const fu=[{name:"waffles",path:["waffles"],default:"one"},{name:"color_by",path:["color_by"],default:"series"},{name:"headline",path:["headline"],default:!0},{name:"show_percent",path:["show_percent"],default:!0}];const gu={layout:"chart",group:"totals",height:210,styles:r`
    ${Ld}
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
    ${Array.from({length:25},(e,t)=>{const a=t%5,o=4-Math.floor(t/5);return Z`<rect x=${20+5*a} y=${8+5*o} width="4" height="4" rx="0.8" fill=${t<9?"var(--warning-color, #f59e0b)":t<15?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`})}`,validate(e){Ed(e,"waffles",du),Ed(e,"color_by",uu),Cd(e,"headline"),Cd(e,"show_percent")},editor:function(e){const t=qi("waffle",e.hass,()=>[{type:"grid",name:"",schema:[{name:"waffles",selector:Si(e.hass,"waffles",du)},{name:"color_by",selector:Si(e.hass,"color_by",uu)}]},{name:"headline",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Zi(e,"chart",t,fu)},render(e){const t={waffles:(a=e.raw).waffles??"one",colorBy:a.color_by??"series",headline:!1!==a.headline,percent:!1!==a.show_percent};var a;return"each"===t.waffles?function(e,t){const{show:a}=e.config;return q`<div class="waffles">
    ${e.items.map((o,n)=>{const r=xd(o,n,e.items.length,t.colorBy),[i]=hu([o]),s=zd(i,e.hass),l=a.value&&t.percent&&o.available&&o.display!==s;return q`<div
        class="entity waffle-item ${Se(o.config)?"interactive":""} ${o.available?"":"unavailable"}"
        data-index=${n}
        tabindex=${kd(o)}
      >
        ${mu([i],[r],[o],o.label)}
        ${a.name?q`<span class="waffle-name">${o.name}</span>`:W}
        <span class="value waffle-value">${o.available&&t.percent?s:o.display}</span>
        ${l?q`<span class="waffle-raw">${o.display}</span>`:W}
      </div>`})}
  </div>`}(e,t):function(e,t){const a=e.items,o=a.map((e,o)=>xd(e,o,a.length,t.colorBy)),n=hu(a),r=e=>n[e]>0||1===a.length&&a[e].available,i=a.map((i,s)=>({index:s,entity:i,color:o[s],share:!t.percent||!r(s)||t.headline&&1===a.length?void 0:zd(n[s],e.hass)})),s=a[0],l=t.headline&&s&&r(0)?q`<div class="waffle-headline">
          <span class="waffle-big">${zd(n[0],e.hass)}</span>
          <span class="waffle-caption">${s.name}</span>
        </div>`:W;return q`<div class="parts">
    <div class="waffle-box">${mu(n,o,a,Sd(e,"editor_style_waffle"))}</div>
    <div class="waffle-side">${l}${Md(i,e)}</div>
  </div>`}(e,t)}};function vu(e,t){return je(vn[e%vn.length])}function yu(e,t){const a=Math.round(Math.min(100,Math.max(0,t)));return a>=100?e:`color-mix(in srgb, ${e} ${a}%, var(--card-background-color, #fff))`}const bu=["funnel","pyramid"],_u=["first","previous","none"],xu=["series","bands"];function wu(e,t){const a=e=>Math.round(100*e)/100,o=a((100-e)/2),n=a((100-t)/2);return`${o},0 ${a(100-o)},0 ${a(100-n)},10 ${n},10`}const $u=[{name:"funnel_shape",path:["shape"],default:"funnel"},{name:"funnel_percent_of",path:["percent_of"],default:"first"},{name:"funnel_color_by",path:["color_by"],default:"series"}];function ku(e,t,a){const o=e[t];if(void 0!==o&&!a.includes(o))throw new Error(`"${t}" must be one of: ${a.join(", ")}`)}const Mu={layout:"chart",group:"totals",height:240,styles:r`
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
    <polygon points="23,29 41,29 38,37 26,37" fill="var(--primary-color, #03a9f4)" />`,validate(e){ku(e,"shape",bu),ku(e,"percent_of",_u),ku(e,"color_by",xu)},editor:function(e){const t=qi("funnel",e.hass,()=>[{name:"funnel_shape",selector:Si(e.hass,"funnel_shape",bu)},{type:"grid",name:"",schema:[{name:"funnel_percent_of",selector:Si(e.hass,"funnel_percent_of",_u)},{name:"funnel_color_by",selector:Si(e.hass,"funnel_color_by",xu)}]}]);return Zi(e,"chart",t,$u)},render(e){const{items:t,raw:a,hass:o,config:n}=e,r=a.shape??"funnel",i="bands"===a.color_by,s=t.map(e=>e.available?e.value:null),l=function(e){const t=Math.max(0,...e.map(e=>null!==e&&e>0?e:0));return e.map(e=>t>0&&null!==e&&e>0?e/t*100:0)}(s),c=function(e,t){return e.map((a,o)=>{if(a<=0)return{top:0,bottom:0};const n=e[o+1],r=o===e.length-1;return"pyramid"===t?{top:r?0:n>0?n:.8*a,bottom:a}:{top:a,bottom:!r&&n>0?n:.8*a}})}(l,r),d=function(e,t){return"none"===t?e.map(()=>null):e.map((a,o)=>{if(null===a)return null;if("previous"===t&&0===o)return 100;const n="first"===t?e[0]:e[o-1];return null!=n&&n>0?a/n*100:null})}(s,a.percent_of??"first"),{show:u}=n,h=u.name||u.value,p=t.map((e,t)=>{const a=function(e,t,a){if(a)return e.band.color;const o=e.config.color;return"string"==typeof o&&o?o:vn[t%vn.length]}(e,t,i),n=d[t],r=null===n?"":`${jn(n,0,o)}%`,s=l[t]<22?"theme":Le(a),p=Se(e.config),{top:m,bottom:f}=c[t],g=l[t]>0;return q`<div
        class="entity stage ${p?"interactive":""} ${e.available?"":"unavailable"}"
        data-index=${t}
        role="img"
        aria-label=${r?`${e.label}, ${r}`:e.label}
        tabindex=${p?0:W}
      >
        <div class="shape">
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            ${g?Z`<polygon points=${wu(m,f)} fill=${je(a)}></polygon>`:Z`<polygon class="empty" points=${wu(30,30)}></polygon>`}
          </svg>
          ${r?q`<div class="percent ${s}" aria-hidden="true">${r}</div>`:W}
        </div>
        ${h?q`<div class="label" aria-hidden="true">
                ${u.name?q`<span class="name">${e.name}</span>`:W}
                ${u.value?q`<span class="value">${e.display}</span>`:W}
              </div>`:W}
      </div>`});"pyramid"===r&&p.reverse();const m=zt(o,"funnel_aria",{style:zt(o,`editor_funnel_shape_${r}`).replace(/ \(.*\)$/,""),names:t.map(e=>e.name).join(", ")});return q`<div class="funnel ${h?"":"no-labels"}" role="group" aria-label=${m}>${p}</div>`}},zu=["floor","area","device","label"];function Su(e){if(null==e||""===e)return[];const t=Array.isArray(e)?e:[e];if(t.some(e=>!zu.includes(e)))throw new Error(`"group_by" must be one or more of: ${zu.join(", ")}`);return zu.filter(e=>t.includes(e))}function Au(e){Su(e.group_by),(e.entities??[]).forEach((e,t)=>{const a="object"==typeof e&&e?e.group:void 0;if(null!=a&&"string"!=typeof a)throw new Error(`Entity ${t+1}: "group" must be text, such as "Kitchen" or "Ground floor / Kitchen"`)})}function Eu(e){return"string"!=typeof e?[]:e.split("/").map(e=>e.trim()).filter(Boolean)}function ju(e){const t=e.replace(/_/g," ").trim();return t.charAt(0).toUpperCase()+t.slice(1)}function Cu(e,t,a,o){const n=Eu(e.config.group);return n.length?n:t.map(t=>function(e,t,a){const o=a,n=o.entities?.[e],r=n?.device_id?o.devices?.[n.device_id]:void 0,i=n?.area_id??r?.area_id??void 0;switch(t){case"area":return i?o.areas?.[i]?.name??ju(i):void 0;case"floor":{const e=i?o.areas?.[i]?.floor_id:void 0;return e?o.floors?.[e]?.name??ju(e):void 0}case"device":return r?r.name_by_user??r.name??void 0:void 0;case"label":{const e=[...n?.labels??[],...r?.labels??[]][0];return e?o.labels?.[e]?.name??ju(e):void 0}}}(e.entityId,t,a)??o)}function Nu(e,t,a){const o={name:a,path:[],value:0,depth:0,children:[]};e.forEach((e,a)=>{let n=o;for(const o of t[a]??[]){let e=n.children.find(e=>void 0===e.entity&&e.name===o);e||(e={name:o,path:[...n.path,o],value:0,depth:n.depth+1,children:[]},n.children.push(e)),n=e}n.children.push({name:e.name,path:n.path,value:0,depth:n.depth+1,children:[],entity:e,index:a})});const n=e=>{e.value=e.entity?function(e){return e.available&&null!==e.value&&e.value>0?e.value:0}(e.entity):e.children.reduce((e,t)=>e+n(t),0);const t=new Map(e.children.map((e,t)=>[e,t]));return e.children.sort((e,a)=>a.value-e.value||t.get(e)-t.get(a)),e.value};return n(o),o}function Lu(e,t){let a=e;for(const o of t)if(a=a.children.find(e=>void 0===e.entity&&e.name===o),!a)return;return a}function Tu(e){return e.children.length?1+Math.max(...e.children.map(Tu)):0}function Ou(e){const t=[],a=(e,o,n,r)=>{if(t.push({node:e,level:o,x0:n,x1:r}),e.value<=0)return;let i=n;for(const t of e.children){if(t.value<=0)continue;const s=(r-n)*t.value/e.value;a(t,o+1,i,i+s),i+=s}};return a(e,0,0,1),t}const Fu=2*Math.PI;function Pu(e,t){return[Du(e*Math.sin(t)),Du(-e*Math.cos(t))]}function Du(e){return Math.round(100*e)/100||0}function Uu(e,t,a,o){if(t<=0||o<=a)return"";const n=Math.max(0,e);if(o-a>=Fu-1e-6){const e=(e,t)=>{const[a,o]=Pu(e,0),[n,r]=Pu(e,Math.PI);return`M${a} ${o}A${e} ${e} 0 1 ${t} ${n} ${r}A${e} ${e} 0 1 ${t} ${a} ${o}Z`};return n>0?`${e(t,1)}${e(n,0)}`:e(t,1)}const r=o-a>Math.PI?1:0,[i,s]=Pu(t,a),[l,c]=Pu(t,o),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===n)return`${d}L0 0Z`;const[u,h]=Pu(n,o),[p,m]=Pu(n,a);return`${d}L${u} ${h}A${n} ${n} 0 ${r} 0 ${p} ${m}Z`}function Hu(e,t){return t>0?e*Fu/t:0}function Iu(e){return e.map(([e,t])=>`${e},${t}`).join(" ")}function Bu(e){const t=Math.sin(e);return Math.abs(t)<.2?"middle":t>0?"start":"end"}function qu(e,t,a,o,n=void 0){const r=e.config.entities??[],i=r.length,s=qi(`${t}-${i}`,e.hass,()=>r.map((e,t)=>({name:`e${t}`,selector:o}))),l=e=>{const t=r[e];return"object"==typeof t?t[a]:void 0},c={};for(let d=0;d<i;d++)c[`e${d}`]=l(d)??n;return q`<div class="entity-options" data-section=${t}>
    <div style="margin: 16px 0 4px; font-weight: 500">${zt(e.hass,`editor_${t}`)}</div>
    ${0===i?q`<div style="color: var(--secondary-text-color)">
            ${zt(e.hass,"editor_entity_options_none")}
          </div>`:q`<ha-form
            .hass=${e.hass}
            .data=${c}
            .schema=${s}
            .computeLabel=${t=>{const a=Ct(r[Number(t.name.slice(1))]),o=e.hass?.states[a]?.attributes?.friendly_name;return"string"==typeof o&&o?o:a}}
            @value-changed=${t=>{t.stopPropagation();const o=t.detail?.value??{};let r=e.config;for(let e=0;e<i;e++){const t=o[`e${e}`],i=t===n||""===t?void 0:t;i!==l(e)&&(r=Nt(r,e,a,i))}r!==e.config&&e.commit(r)}}
          ></ha-form>`}
  </div>`}const Zu=[{name:"group_by",path:["group_by"],default:[]}];function Ru(e){return{name:"group_by",selector:{select:{multiple:!0,mode:"list",options:zu.map(t=>({value:t,label:zt(e,`editor_group_by_${t}`)}))}}}}function Wu(e){const t=e.config.group_by;if(void 0===t||Array.isArray(t))return e;let a;try{a=Su(t)}catch{return e}return{...e,config:{...e.config,group_by:a}}}function Vu(e){return qu(e,"entity_groups","group",{text:{}})}const Yu={group_by:"editor_hierarchy_group_by"},Gu=["limits","shared"],Xu={aqi:"AQI",carbon_dioxide:"CO₂",carbon_monoxide:"CO",pm1:"PM1",pm10:"PM10",pm25:"PM2.5",volatile_organic_compounds:"VOC",volatile_organic_compounds_parts:"VOC"};function Ju(e,t,a){return e.available&&null!==e.value?"limits"===t?e.position:a>0?Math.min(1,Math.max(0,e.value/a)):0:null}function Ku(e,t,a){const o=Su(t.group_by),n=o.length>0||e.some(e=>Eu(e.config.group).length),r=t.scale??"limits",i=e.filter(e=>e.available&&null!==e.value).map(e=>e.value),s=i.length?Math.max(...i):0,l=e=>{const t=e.config.axis;return"string"==typeof t&&t.trim()?t.trim():void 0};if(!n)return{axes:e.map(e=>({name:l(e)??e.name,entity:e})),series:[{name:"",color:vu(0),points:e.map((e,t)=>({index:t,axis:t,r:Ju(e,r,s)}))}]};const c=zt(a,"radar_other"),d=[],u=[];return e.forEach((e,t)=>{const n=e.stateObj?.attributes?.device_class,i=l(e)??("string"==typeof n?function(e){if(Xu[e])return Xu[e];const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}(n):e.name);let h=d.findIndex(e=>e.name===i);-1===h&&(h=d.push({name:i})-1);const p=Cu(e,o,a,c).join(" / ")||c;let m=u.find(e=>e.name===p);m||(m={name:p,color:vu(u.length),points:[]},u.push(m)),m.points.push({index:t,axis:h,r:Ju(e,r,s)})}),{axes:d,series:u}}const Qu=[{name:"radar_scale",path:["scale"],default:"limits"},{name:"radar_fill",path:["fill"],default:!0},...Zu];const eh={layout:"chart",group:"compare",height:280,styles:r`
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2" stroke-linejoin="round" />`,validate(e){if(Au(e),void 0!==e.scale&&!Gu.includes(e.scale))throw new Error(`"scale" must be one of: ${Gu.join(", ")}`);if(void 0!==e.fill&&"boolean"!=typeof e.fill)throw new Error('"fill" must be true or false');(e.entities??[]).forEach((e,t)=>{const a="object"==typeof e&&e?e.axis:void 0;if(null!=a&&"string"!=typeof a)throw new Error(`Entity ${t+1}: "axis" must be text`)})},editor:function(e){const t=qi("radar",e.hass,()=>[{name:"radar_scale",selector:Si(e.hass,"radar_scale",Gu)},{name:"radar_fill",selector:{boolean:{}}},Ru(e.hass)]);return q`${Zi(Wu(e),"chart",t,Qu,Yu)} ${Vu(e)}
  ${qu(e,"radar_axis","axis",{text:{}})}`},render(e){const t=Ku(e.items,e.raw,e.hass),a=t.axes.length,o=1===t.series.length&&""===t.series[0].name,n=!1!==e.raw.fill,r=zt(e.hass,"radar_aria",{names:(o?e.items.map(e=>e.name):t.series.map(e=>e.name)).join(", ")});return q`<svg
        class="radar-plot"
        viewBox="${-170} ${-120} ${340} ${240}"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label=${r}
      >
        ${function(e){const t=Array.from({length:4},(e,t)=>84*(t+1)/4);return Z`${t.map(t=>e>=3?Z`<polygon class="grid" points=${Iu(Array.from({length:e},(a,o)=>Pu(t,Hu(o,e))))}></polygon>`:Z`<circle class="grid" r=${t}></circle>`)}
    ${Array.from({length:e},(t,a)=>{const[o,n]=Pu(84,Hu(a,e));return Z`<line class="grid spoke" x1="0" y1="0" x2=${o} y2=${n}></line>`})}`}(a)} ${function(e,t,a){const o=e.axes.length,n=a&&t.config.show.value;return Z`${e.axes.map((e,a)=>{const r=Hu(a,o),[i,s]=Pu(96,r),l=Bu(r),c=Math.cos(r)<-.2,d=n&&e.entity?2:1,u=c?10:Math.abs(Math.cos(r))<=.2?4-6*(d-1):12*-(d-1);return Z`<text class="axis-label" x=${i} y=${s+u} text-anchor=${l}>
      ${t.config.show.name||!n?Z`<tspan>${e.name}</tspan>`:W}
      ${n&&e.entity?Z`<tspan class="axis-value ${e.entity.available?"":"muted"}" x=${i} dy="13">${e.entity.display}</tspan>`:W}
    </text>`})}`}(t,e,o)}
        <g class="radar-grow">
          <circle r=${84} fill="none" stroke="none"></circle>
          ${t.series.map(t=>function(e,t,a,o){const n=e.points.filter(e=>null!==e.r).sort((e,t)=>e.axis-t.axis).map(e=>({p:e,xy:Pu(84*e.r,Hu(e.axis,t))}));return Z`<g class="series">
    ${n.length>1?Z`<polygon class="area ${o?"filled":""}" points=${Iu(n.map(e=>e.xy))}
            stroke=${e.color} fill=${o?e.color:"none"}></polygon>`:W}
    ${n.map(({p:t,xy:o})=>Z`<g class="entity marker" data-index=${t.index} tabindex="0" aria-label=${a[t.index].label}
        role="img">
        <circle class="hit" cx=${o[0]} cy=${o[1]} r="9"></circle>
        <circle class="dot" cx=${o[0]} cy=${o[1]} r="3.5" stroke=${e.color}></circle>
      </g>`)}
  </g>`}(t,a,e.items,n))}
        </g>
      </svg>
      ${o?W:q`<div class="radar-legend">
              ${t.series.map(e=>q`<span class="radar-legend-item"
                    ><span class="swatch" style="background:${e.color}"></span>${e.name}</span
                  >`)}
            </div>`}`}},th=["shared","limits"],ah=["series","shades","bands"];const oh=[{name:"polar_scale",path:["scale"],default:"shared"},{name:"polar_color_by",path:["color_by"],default:"series"},{name:"polar_color",path:["color"],default:"primary"}],nh=Object.keys(Ee);const rh={layout:"chart",group:"compare",height:260,styles:r`
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
      <path d=${Uu(0,18,-.6,.6)} fill="var(--primary-color, #03a9f4)" />
      <path d=${Uu(0,12,.65,1.85)} fill="var(--warning-color, #ffa600)" />
      <path d=${Uu(0,15,1.9,3.1)} fill="var(--success-color, #43a047)" />
      <path d=${Uu(0,9,3.15,4.35)} fill="var(--error-color, #db4437)" />
      <path d=${Uu(0,13,4.4,5.6)} fill="var(--purple-color, #8b6cff)" />
    </g>`,validate(e){if(void 0!==e.scale&&!th.includes(e.scale))throw new Error(`"scale" must be one of: ${th.join(", ")}`);if(void 0!==e.color_by&&!ah.includes(e.color_by))throw new Error(`"color_by" must be one of: ${ah.join(", ")}`);if(void 0!==e.color&&("string"!=typeof e.color||!e.color))throw new Error('"color" must be a colour name, such as "primary", or any CSS colour')},editor:function(e){const t=qi("polar_area",e.hass,()=>[{name:"polar_scale",selector:Si(e.hass,"polar_scale",th)},{type:"grid",name:"",schema:[{name:"polar_color_by",selector:Si(e.hass,"polar_color_by",ah)},{name:"polar_color",selector:{select:{mode:"dropdown",custom_value:!0,options:nh.map(t=>({value:t,label:zt(e.hass,`editor_color_${t}`)}))}}}]}]);return Zi(e,"chart",t,oh)},render(e){const t=e.raw.scale??"shared",a=e.raw.color_by??"series",o=e.raw.color??"primary",n=e.items.length,r=e.items.filter(e=>e.available&&null!==e.value).map(e=>e.value),i=r.length?Math.max(0,...r):0,s=e.items.map((e,r)=>{const s=function(e,t,a){return e.available&&null!==e.value?"limits"===t?e.position:a>0?Math.min(1,Math.max(0,e.value/a)):0:null}(e,t,i);if(null===s||s<=0)return W;const[l,c]=function(e,t){if(t<=1)return[0,2*Math.PI];const a=Math.PI/t,o=Hu(e,t);return[o-a+.02,o+a-.02]}(r,n),d=6+86*s;return Z`<path class="entity slice" data-index=${r} tabindex="0" role="img" aria-label=${e.label}
        d=${Uu(6,d,l,c)} fill=${function(e,t,a,o,n){return"bands"===o?je(e.band.color):"shades"===o?yu(je(n),30+70*a):vu(t)}(e,r,s,a,o)}></path>`}),l=zt(e.hass,"polar_area_aria",{names:e.items.map(e=>e.name).join(", ")});return q`<svg
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
      ${function(e,t,a){const o=e.items.find(e=>e.available);if("shared"!==t||!o||a<=0)return Z``;const n=e.items.length>1?Math.PI/e.items.length:0;return Z`${Array.from({length:3},(t,r)=>{const i=92*(r+1)/3,[s,l]=Pu(i,n),c=Cn(jn(a*(r+1)/3,o.decimals,e.hass),o.unit);return Z`<text class="ring-label" x=${s+3} y=${l-2}>${c}</text>`})}`}(e,t,i)} ${function(e){const t=e.items.length,{show:a}=e.config;return a.name||a.value?Z`${e.items.map((e,o)=>{const n=Hu(o,t),[r,i]=Pu(104,n),s=Math.cos(n)<-.2,l=a.name&&a.value?2:1,c=s?10:Math.abs(Math.cos(n))<=.2?4-6*(l-1):13*-(l-1);return Z`<text class="slice-label ${e.available?"":"muted"}" x=${r} y=${i+c} text-anchor=${Bu(n)}>
      ${a.name?Z`<tspan>${e.name}</tspan>`:W}
      ${a.value?Z`<tspan class="slice-value" x=${r} dy=${a.name?13:0}>${e.display}</tspan>`:W}
    </text>`})}`:Z``}(e)}
    </svg>`}},ih=new WeakMap;function sh(e){return!1!==e.drill_down}function lh(e){if(void 0!==e.drill_down&&"boolean"!=typeof e.drill_down)throw new Error('"drill_down" must be true or false')}function ch(e,t){ih.set(e.host,t),e.requestUpdate()}function dh(e,t){return sh(e.raw)?function(e,t){let a=e;const o=[];for(const n of t){const e=Lu(a,[n]);if(!e||e.value<=0)break;a=e,o.push(n)}return{node:a,path:o}}(t,(a=e.host,ih.get(a)??[])):{node:t,path:[]};var a}function uh(e,t,a){if(!sh(e.raw)||t.entity||t.value<=0)return;const o=()=>ch(e,t.path);return{label:zt(e.hass,"drill_into",{label:a}),click:e=>{e.stopPropagation(),o()},keydown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),o())}}}function hh(e,t,a,o){if(!a.path.length)return W;const n=a.path.slice(0,-1),r=n.length&&Lu(t,n)?.name||zt(e.hass,"drill_top");return q`<div class="drill-bar">
    <button
      type="button"
      class="drill-back"
      aria-label=${zt(e.hass,"drill_back",{name:r})}
      @click=${()=>ch(e,n)}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z" fill="currentColor"></path>
      </svg>
      <span>${r}</span>
    </button>
    <div class="drill-current">
      <span class="drill-name">${a.node.name}</span>
      ${o?q`<span class="drill-total">${o}</span>`:W}
    </div>
  </div>`}const ph=r`
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
`;function mh(e,t){const a=e.reduce((e,t)=>e+t,0);if(a<=0||t<=0)return 1/0;const o=Math.max(...e),n=Math.min(...e),r=t*t;return Math.max(r*o/(a*a),a*a/(r*n))}function fh(e,t){const a=Math.min(t,e.w/2,e.h/2);return{x:e.x+a,y:e.y+a,w:e.w-2*a,h:e.h-2*a}}const gh=["group","bands"],vh=240;function yh(e,t,a,o){const n=[],r=[],i=(e,t,a,s)=>{const l=e.children.filter(e=>e.value>0),c=function(e,t){const a=e.map(()=>({x:t.x,y:t.y,w:0,h:0})),o=e.map((e,t)=>({v:Number.isFinite(e)&&e>0?e:0,i:t})).filter(e=>e.v>0).sort((e,t)=>t.v-e.v||e.i-t.i),n=o.reduce((e,t)=>e+t.v,0);if(n<=0||t.w<=0||t.h<=0)return a;const r=t.w*t.h/n;let{x:i,y:s,w:l,h:c}=t,d=[];const u=()=>{const e=d.reduce((e,t)=>e+t.area,0);if(l>=c){const t=e/c;let o=s;for(const e of d){const n=e.area/t;a[e.i]={x:i,y:o,w:t,h:n},o+=n}i+=t,l-=t}else{const t=e/l;let o=i;for(const e of d){const n=e.area/t;a[e.i]={x:o,y:s,w:n,h:t},o+=n}s+=t,c-=t}d=[]};for(const h of o){const e=h.v*r,t=Math.min(l,c),a=d.map(e=>e.area);0===d.length||mh([...a,e],t)<=mh(a,t)||u(),d.push({area:e,i:h.i})}return d.length&&u(),a}(l.map(e=>e.value),t);l.forEach((e,t)=>{const l=c[t],d=s&&void 0===o?t:a;if(e.entity)return void r.push({node:e,rect:fh(l,1.5),series:d,rank:t});const u=fh(l,1.5),h=u.h>=44&&u.w>=56;n.push({node:e,rect:u,series:d,head:h});const p=fh(h?{...u,y:u.y+22-3,h:u.h-22+3}:u,3);i(e,p,d,!1)})};return i(e,{x:0,y:0,w:t,h:a},o??0,!0),{groups:n,leaves:r}}function bh(e,t,a){const o=t.items.find(e=>e.available)?.decimals??1;return Cn(jn(e,o,t.hass),a)}const _h=new WeakMap,xh=new WeakMap;const wh=(e,t)=>e/t*100+"%";function $h(e,t){return`left:${wh(e.x,t)};top:${wh(e.y,vh)};width:${wh(e.w,t)};height:${wh(e.h,vh)}`}function kh(e,t,a,o,n){const r=e.node.entity,i=function(e,t){const a=e.node.entity;if("bands"===t)return a.band.color;const o=a.config.color;return"string"==typeof o&&o?o:vn[e.series%vn.length]}(e,o),s="group"===o&&e.node.path.length?yu(je(i),Math.max(70,100-12*(e.rank??0))):je(i),l=Le(i),{w:c,h:d}=e.rect,{show:u}=t.config,h=c>=120&&d>=70&&null!==r.value&&r.value>=.25*n,p=d>=20&&c>=44,m=u.value&&d>=36;return q`<div
    class="entity tile text-${l} ${h?"big":""}"
    data-index=${e.node.index}
    tabindex="0"
    role="img"
    aria-label=${r.label}
    title=${r.label}
    style="${$h(e.rect,a)};background:${s}"
  >
    ${p&&u.name?q`<span class="tile-name">${r.name}</span>`:W}
    ${p&&m?q`<span class="tile-value">${r.display}</span>`:W}
  </div>`}const Mh=[{name:"treemap_color_by",path:["color_by"],default:"group"},...Zu,{name:"drill_down",path:["drill_down"],default:!0}];const zh={layout:"chart",group:"totals",height:280,styles:r`
    ${ph}
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
      height: ${vh}px;
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
      height: ${vh}px;
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
    <rect x="50" y="23" width="10" height="13" rx="3" fill="var(--success-color, #43a047)" opacity="0.7" />`,validate(e){if(Au(e),lh(e),void 0!==e.color_by&&!gh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${gh.join(", ")}`)},editor:function(e){const t=qi("treemap",e.hass,()=>[{name:"treemap_color_by",selector:Si(e.hass,"treemap_color_by",gh)},Ru(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return q`${Zi(Wu(e),"chart",t,Mh,Yu)} ${Vu(e)}`},disconnect:function(e){xh.get(e)?.disconnect(),xh.delete(e)},render(e){const t=function(e){const t=e.host;if(!xh.has(t)&&"function"==typeof ResizeObserver){const a=new ResizeObserver(()=>{const a=t.shadowRoot?.querySelector(".treemap"),o=a?.clientWidth??0;o>0&&Math.abs(o-(_h.get(t)??0))>=1&&(_h.set(t,o),e.requestUpdate())});a.observe(t),xh.set(t,a)}return _h.get(t)??400}(e),a=function(e){const t=Su(e.raw.group_by),a=zt(e.hass,"treemap_other"),o=e.items.map(o=>Cu(o,t,e.hass,a));return Nu(e.items,o,"")}(e),o=dh(e,a),n=o.node,r=e.raw.color_by??"group",i=function(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}(e.items),s=o.path.length?a.children.filter(e=>e.value>0).findIndex(e=>e.name===o.path[0]):void 0,{groups:l,leaves:c}=yh(n,t,vh,s),d=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available),u=void 0!==i&&e.config.show.value&&n.value>0?bh(n.value,e,i):"",h=u&&!o.path.length?zt(e.hass,"treemap_total",{value:u}):"",p=zt(e.hass,"treemap_aria",{names:(n.children.length?n.children:[]).map(e=>e.name).join(", ")}),m=c.length?q`<div class="treemap" role="img" aria-label=${p}>
          ${l.map(a=>function(e,t,a,o,n){const r=je(vn[e.series%vn.length]),i=void 0===n?"":bh(e.node.value,t,n),s=uh(t,e.node,i?`${e.node.name}, ${i}`:e.node.name);return q`<div
    class="group ${s?"drillable":""}"
    style="${$h(e.rect,a)};background:${"bands"===o?"var(--cd-track)":yu(r,14)}"
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
  </div>`}(a,e,t,r,i))}
          ${c.map(a=>kh(a,e,t,r,n.value))}
        </div>`:q`<div class="treemap-message">${zt(e.hass,"treemap_empty")}</div>`;return q`${hh(e,a,o,u)}
    ${h?q`<div class="treemap-head"><span class="treemap-total">${h}</span></div>`:W} ${m}
    ${d.length?q`<div class="treemap-missing">
            <span>${zt(e.hass,"treemap_no_reading")}</span>
            ${d.map(({e:e,index:t})=>q`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
                  >${e.name} (${e.display})</span
                >`)}
          </div>`:W}`}},Sh=["full","half"],Ah=["group","bands"],Eh=240;function jh(e){return Math.max(45,100-20*(e-1))}function Ch(e){const t=Su(e.raw.group_by),a=zt(e.hass,"hierarchy_other"),o=e.items.map(o=>Cu(o,t,e.hass,a));return Nu(e.items,o,zt(e.hass,"hierarchy_total"))}function Nh(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}function Lh(e,t){const a=new Map,o=new Map;let n=0;for(const{node:r,level:i}of e){if(0===i)continue;const e=r.entity?r.entity.config.color:void 0;let s;s=1===i?"string"==typeof e&&e?e:vn[n++%vn.length]:o.get(r)??"grey";for(const t of r.children)o.set(t,s);if("bands"===t){a.set(r,r.entity?{fill:je(r.entity.band.color),text:Le(r.entity.band.color)}:{fill:"var(--cd-track)",text:"theme"});continue}const l=jh(i);a.set(r,{fill:yu(je(s),l),text:l>=100?Le(s):"theme"})}return a}function Th(e,t,a){const o=t.items.find(e=>e.available)?.decimals??1;return Cn(jn(e,o,t.hass),a)}function Oh(e,t,a){return e.entity?e.entity.label:void 0===a?e.name:`${e.name}, ${Th(e.value,t,a)}`}function Fh(e){const t=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available);return t.length?q`<div class="hierarchy-missing">
    <span>${zt(e.hass,"hierarchy_no_reading")}</span>
    ${t.map(({e:e,index:t})=>q`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
          >${e.name} (${e.display})</span
        >`)}
  </div>`:W}const Ph=[{name:"hierarchy_color_by",path:["color_by"],default:"group"},...Zu,{name:"drill_down",path:["drill_down"],default:!0}],Dh=[{name:"sunburst_shape",path:["shape"],default:"full"},...Ph];function Uh(e,t){if(Au(e),lh(e),void 0!==e.color_by&&!Ah.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Ah.join(", ")}`);if(t&&void 0!==e.shape&&!Sh.includes(e.shape))throw new Error(`"shape" must be one of: ${Sh.join(", ")}`)}function Hh(e,t,a=t){if(t.value<=0)return q`<div class="hierarchy-message">${zt(e.hass,"hierarchy_empty")}</div>`;const o=e.raw.shape??"full",n=e.raw.color_by??"group",r=Nh(e.items),i=Ou(t),s=Lh(Ou(a),n),l=function(e,t){const a=72/Math.max(1,t);return{start:"half"===e?-Math.PI/2:0,sweep:"half"===e?Math.PI:2*Math.PI,radii:e=>[40+(e-1)*a,40+e*a],viewBox:"half"===e?"-116 -116 232 124":"-116 -116 232 232"}}(o,Tu(t)),c=i.filter(e=>e.level>0).map(t=>{const[a,o]=l.radii(t.level),n=Uu(a,o,l.start+t.x0*l.sweep,l.start+t.x1*l.sweep),i=Oh(t.node,e,r),c=s.get(t.node).fill;return t.node.entity?Z`<path class="entity arc leaf" data-index=${t.node.index} tabindex="0" role="img"
            aria-label=${i} d=${n} fill=${c}><title>${i}</title></path>`:function(e,t,a,o,n){const r=uh(e,t,a);return Z`<path
    class="arc group ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":W}
    tabindex=${r?0:W}
    aria-label=${r?.label??a}
    d=${o}
    fill=${n}
    @click=${r?.click}
    @keydown=${r?.keydown}
  ><title>${a}</title></path>`}(e,t.node,i,n,c)}),d=void 0!==r&&e.config.show.value?Th(t.value,e,r):"",u=t.children.filter(e=>e.value>0).map(e=>e.name);return q`<div class="sunburst-wrap ${o}">
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
  </div>`}function Ih(e,t,a=t){const o=e.raw.color_by??"group",n=Nh(e.items),r=Lh(Ou(a),o),i=t.children.filter(e=>e.value>0);return q`<div class="hierarchy-legend">
    ${i.map(t=>{const a=q`<span class="swatch" style="background:${r.get(t)?.fill}"></span>`,o=e.config.show.value&&void 0!==n?q`<span class="legend-value">${Th(t.value,e,n)}</span>`:W;return t.entity?q`<span class="entity legend-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}
            >${a}${t.name} ${o}</span
          >`:function(e,t,a,o,n){const r=uh(e,t,Oh(t,e,n));return q`<span
    class="legend-item ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":W}
    tabindex=${r?0:W}
    aria-label=${r?.label??W}
    @click=${r?.click}
    @keydown=${r?.keydown}
    >${a}${t.name} ${o}</span
  >`}(e,t,a,o,n)})}
  </div>`}function Bh(e,t,a=t){if(t.value<=0)return q`<div class="hierarchy-message">${zt(e.hass,"hierarchy_empty")}</div>`;const o=e.raw.color_by??"group",n=Nh(e.items),r=Ou(t),i=Lh(Ou(a),o),s=Tu(t)+1,{show:l}=e.config,c=t.children.filter(e=>e.value>0).map(e=>e.name);return q`<div
    class="icicle"
    role="img"
    aria-label=${zt(e.hass,"icicle_aria",{names:c.join(", ")})}
  >
    ${r.map(t=>{const a=(t.x1-t.x0)*Eh,o=`left:${t.level/s*100}%;width:${100/s}%;top:${100*t.x0}%;height:${100*(t.x1-t.x0)}%`,r=Oh(t.node,e,n),c=0===t.level?void 0:i.get(t.node),d=t.node.entity?t.node.entity.display:void 0!==n?Th(t.node.value,e,n):"",u=q`<div class="cell-fill" style=${c?`background:${c.fill}`:""}>
        ${a>=18&&(l.name||0===t.level)?q`<span class="cell-name">${t.node.name}</span>`:W}
        ${a>=34&&l.value&&d?q`<span class="cell-value">${d}</span>`:W}
      </div>`,h=`cell level-${Math.min(t.level,1)} text-${c?.text??"root"}`;return t.node.entity?q`<div
            class="entity ${h} leaf"
            data-index=${t.node.index}
            tabindex="0"
            role="img"
            aria-label=${r}
            title=${r}
            style=${o}
          >
            ${u}
          </div>`:function(e,t,a,o,n,r){const i=a.includes("text-root")?void 0:uh(e,t,o);return q`<div
    class="${a} group ${i?"drillable":""}"
    data-path=${t.path.join("/")}
    title=${o}
    style=${n}
    role=${i?"button":W}
    tabindex=${i?0:W}
    aria-label=${i?.label??W}
    @click=${i?.click}
    @keydown=${i?.keydown}
  >
    ${r}
  </div>`}(e,t.node,h,r,o,u)})}
  </div>`}const qh=r`
  ${ph}
  .hierarchy-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${Eh}px;
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
`,Zh={layout:"chart",group:"totals",height:290,styles:r`
    ${qh}
    .sunburst-wrap {
      position: relative;
      height: ${Eh}px;
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
    <path d="M48 26 A17 17 0 0 1 32 37 L32 31 A11 11 0 0 0 42 25 Z" fill="var(--warning-color, #f59e0b)" opacity="0.6" />`,validate:e=>Uh(e,!0),editor:function(e){const t=qi("sunburst",e.hass,()=>[{type:"grid",name:"",schema:[{name:"sunburst_shape",selector:Si(e.hass,"sunburst_shape",Sh)},{name:"hierarchy_color_by",selector:Si(e.hass,"hierarchy_color_by",Ah)}]},Ru(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return q`${Zi(Wu(e),"chart",t,Dh,Yu)}
  ${Vu(e)}`},render(e){const t=Ch(e),a=dh(e,t);return q`${hh(e,t,a,"")} ${Hh(e,a.node,t)}
    ${a.node.value>0?Ih(e,a.node,t):W} ${Fh(e)}`}},Rh={layout:"chart",group:"totals",height:280,styles:r`
    ${qh}
    .icicle {
      position: relative;
      height: ${Eh}px;
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
    <rect x="41" y="25" width="19" height="11" rx="2" fill="var(--warning-color, #f59e0b)" opacity="0.7" />`,validate:e=>Uh(e,!1),editor:function(e){const t=qi("icicle",e.hass,()=>[{name:"hierarchy_color_by",selector:Si(e.hass,"hierarchy_color_by",Ah)},Ru(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return q`${Zi(Wu(e),"chart",t,Ph,Yu)} ${Vu(e)}`},render(e){const t=Ch(e),a=dh(e,t);return q`${hh(e,t,a,"")} ${Bh(e,a.node,t)} ${Fh(e)}`}};function Wh(e,t,a=5){if(!Number.isFinite(e)||!Number.isFinite(t))return[];e>t&&([e,t]=[t,e]),e===t&&(e-=.5,t+=.5);const o=function(e,t=5){if(!Number.isFinite(e)||e<=0||t<1)return 1;const a=e/t,o=10**Math.floor(Math.log10(a)),n=a/o;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*o}(t-e,a),n=Math.floor(e/o+1e-9)*o,r=Math.ceil(t/o-1e-9)*o,i=[];for(let s=0,l=n;l<=r+o/2&&s<100;s++,l=n+s*o)i.push(Number(l.toPrecision(12)));return i}function Vh(e){let t=1/0,a=-1/0;for(const o of e)"number"==typeof o&&Number.isFinite(o)&&(o<t&&(t=o),o>a&&(a=o));return t===1/0?void 0:[t,a]}function Yh(e,t){let a=null;for(const o of e){if(o.t>t)break;a=o.v}return a}const Gh=["grouped","stacked","percent"],Xh=["series","bands"],Jh=vn;function Kh(e,t,a="none"){const o=new Map,n=[];for(const l of e){let e=o.get(l.group);e||(e={key:l.group,label:l.group,segments:[],total:null},o.set(l.group,e)),n.includes(l.series)||n.push(l.series);const t=e.segments.length;e.segments.push({index:l.index,series:l.series,value:l.value,from:0,to:0,slot:t}),null!==l.value&&(e.total=(e.total??0)+l.value)}const r=[...o.values()];for(const l of r){const e=l.segments.reduce((e,t)=>e+Math.abs(t.value??0),0);let a=0,o=0;for(const n of l.segments){if(null===n.value)continue;const r="percent"===t?0===e?0:n.value/e:n.value;"grouped"===t?n.to=r:r>=0?(n.from=a,n.to=a+=r):(n.from=o,n.to=o+=r)}}const i=r.flatMap(e=>e.segments.flatMap(e=>null===e.value?[]:[e.from,e.to])),s=function([e,t]){return[Math.min(0,e),Math.max(0,t)]}(Vh(i)??[0,1]);if(s[0]===s[1]&&(s[1]=1),"none"!==a){const e="ascending"===a?1:-1;r.sort((t,a)=>null===t.total!=(null===a.total)?null===t.total?1:-1:((t.total??0)-(a.total??0))*e)}return{rows:r,domain:s,series:n}}function Qh(e,t){if("grouped"!==t)return 36;const a=Math.max(1,e.segments.length);return 12*a+3*(a-1)+16}function ep(e){return"string"==typeof e&&""!==e.trim()?e.trim():"number"==typeof e?String(e):void 0}function tp(e,t){return`${jn(100*Math.abs(e),0,t)} %`}const ap=e=>`${(100*e).toFixed(3)}%`;const op=[{name:"mode",path:["mode"],default:"grouped"},{name:"bars_color_by",path:["color_by"],default:"series"}];const np=[{name:"bar_group",path:["group"]},{name:"bar_series",path:["series"]},{name:"bar_color",path:["color"]}];const rp={layout:"chart",group:"compare",height:200,styles:r`
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
    <line x1="4" y1="3" x2="4" y2="37" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate:function(e){if(void 0!==e.mode&&!Gh.includes(e.mode))throw new Error(`"mode" must be one of: ${Gh.join(", ")}`);if(void 0!==e.color_by&&!Xh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Xh.join(", ")}`);(e.entities??[]).forEach((e,t)=>{if("object"==typeof e&&null!==e)for(const a of["group","series"]){const o=e[a];if(null!=o&&"string"!=typeof o&&"number"!=typeof o)throw new Error(`Entity ${t+1}: "${a}" must be text`)}})},editor:function(e){const t=qi("grouped_bars",e.hass,()=>[{type:"grid",name:"",schema:[{name:"mode",selector:Si(e.hass,"mode",Gh)},{name:"bars_color_by",selector:Si(e.hass,"bars_color_by",Xh)}]}]);return Zi(e,"chart",t,op)},entityFields:e=>({schema:qi("grouped_bars_entity",e,()=>[{type:"grid",name:"",schema:[{name:"bar_group",selector:{text:{}}},{name:"bar_series",selector:{text:{}}}]},{name:"bar_color",selector:{text:{}}}]),fields:np}),render:function(e){const{hass:t}=e,a=e.raw.mode??"grouped",o="bands"===e.raw.color_by,n=Kh(function(e){return function(e){const t=e.config.entities;return e.items.map((e,a)=>({e:e,index:a,at:t.indexOf(e.config)})).sort((e,t)=>(-1===e.at?1/0:e.at)-(-1===t.at?1/0:t.at)||e.index-t.index)}(e).map(({e:e,index:t})=>{const a=e.config;return{index:t,group:ep(a.group)??`\0${t}`,series:ep(a.series)??"",value:e.available?e.value:null}})}(e),a,e.config.sort),[r,i]=n.domain,s=e=>(e-r)/(i-r),l=s(0),c=t=>{const a=e.items[t.index],r=a.config.color;return o?a.band.color:"string"==typeof r&&r?r:Jh[n.series.indexOf(t.series)%Jh.length]},{show:d}=e.config,u=!o&&n.series.some(e=>""!==e)&&!1!==e.raw.show?.legend,h=e.items.map(e=>e.display.length),p=d.value&&"percent"!==a?Math.min(12,Math.max(4,...h)):0,m=p?Math.round(6.5*p+8):4,f=Math.max(0,...n.rows.map(t=>(t.label.startsWith("\0")?e.items[t.segments[0].index].name:t.label).length));let g=0;const v=n.rows.map(e=>{const t=g;return g+=Qh(e,a),{row:e,top:t}}),y=zt(t,"grouped_bars_aria",{names:e.items.map(e=>e.name).join(", ")}),b=r<0;return q`<div
    class="bars mode-${a}"
    role="img"
    aria-label=${y}
    style="--name-w:${d.name?`min(35%, calc(${f}ch + 16px))`:"0px"};--value-w:${m}px;--neg-w:${b?m:0}px"
  >
    <div class="bar-rows" style="height:${g}px">
      ${Me(v,e=>e.row.key,({row:o,top:n})=>q`<div class="bar-row" style="transform:translateY(${n}px);height:${Qh(o,a)}px">
            ${d.name?q`<div class="row-name">
                    ${o.label.startsWith("\0")?e.items[o.segments[0].index].name:o.label}
                  </div>`:W}
            <div class="row-plot">
              <div class="zero" style="left:${ap(l)}"></div>
              ${o.segments.map(o=>(o=>{const n=e.items[o.index],r=c(o),i=s(Math.min(o.from,o.to)),u=Math.abs(s(o.to)-s(o.from)),h="grouped"===a?8+15*o.slot:8,p="grouped"===a?12:20,m=o.to<o.from||"grouped"===a&&o.to<0,f="percent"===a&&n.available?o.to-o.from:0,g="percent"===a&&d.value&&Math.abs(f)>=.12;return q`<div
        class="entity bar-seg ${m?"negative":""} ${n.available?"":"unavailable"}"
        data-index=${o.index}
        tabindex="0"
        role="button"
        aria-label=${"percent"===a&&n.available?`${n.label} (${tp(f,t)})`:n.label}
        style="left:${ap(i)};width:${ap(u)};top:${h}px;height:${p}px;background:${je(r)}"
      >
        ${g?q`<span class="seg-text ${Le(r)}" aria-hidden="true">${tp(f,t)}</span>`:W}
      </div>
      ${"grouped"===a&&d.value?q`<span
              class="bar-value ${n.available?"":"unavailable"} ${m?"left":""}"
              style="${m?"right":"left"}:${ap(m?1-s(o.to):n.available?s(o.to):l)};top:${h}px;height:${p}px"
              aria-hidden="true"
              >${n.display}</span
            >`:W}`})(o))} ${(o=>{if("stacked"!==a||!d.value)return W;const n=e.items[o.segments[0].index],r=o.segments.filter(e=>null!==e.value).map(e=>e.to),i=Math.max(0,...r),l=Math.min(0,...r),c=0===i&&l<0,u=null===o.total?n.display:Cn(jn(o.total,n.decimals,t),n.unit);return q`<span
      class="bar-value total ${null===o.total?"unavailable":""} ${c?"left":""}"
      style="${c?"right":"left"}:${ap(c?1-s(l):s(i))};top:${8}px;height:${20}px"
      aria-hidden="true"
      >${u}</span
    >`})(o)}
            </div>
          </div>`)}
    </div>
    ${u?q`<div class="bar-legend">
            ${n.series.filter(e=>""!==e).map(e=>{const t=function(e,t){for(const a of e.rows)for(const e of a.segments)if(e.series===t)return e;return}(n,e);return q`<span class="bar-legend-item"
                  ><span class="swatch" style="background:${je(t?c(t):"grey")}"></span
                  >${e}</span
                >`})}
          </div>`:W}
  </div>`}};function ip(e,t,a,o=""){const n=Se(e.config);return q`<div
    class="entity ${o} ${n?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    role="meter"
    aria-valuenow=${e.available?String(e.value):W}
    aria-valuemin=${e.min}
    aria-valuemax=${e.max}
    aria-label=${e.label}
    tabindex=${n?0:W}
    style=${function(e){const t=je(e.band.color);return`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${t}`}(e)}
  >
    ${a}
  </div>`}const sp=r`
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
`,lp=["shades","colours"];function cp(e,t,a,o){const{show:n}=a.config,r=function(e){const t=[];return e.bands.forEach((a,o)=>{const n=e.bands[o+1],r=Number.isFinite(a.from)?as(a.from,e.min,e.max):0,i=n?as(n.from,e.min,e.max):1;i<=r||t.push({from:t.length?r:0,to:i,color:a.color,level:0})}),t.forEach((e,t)=>e.level=t),t}(e),i=n.target?function(e,t){if(null!==e.target)return zt(t,"compare_target",{target:Cn(jn(e.target,e.decimals,t),e.unit)})}(e,a.hass):void 0,s=n.value||!e.available,l=q`
    ${n.name?q`<div class="label">
            <span class="name">${e.name}</span>${i?q`<span class="sub">${i}</span>`:W}
          </div>`:W}
    <div class="track">
      ${r.map(e=>q`<div
            class="range"
            style="left:${100*e.from}%;width:${100*(e.to-e.from)}%;background:${function(e,t,a){return"colours"===a?`color-mix(in srgb, ${je(e.color)} 22%, transparent)`:`color-mix(in srgb, var(--primary-text-color, #212121) ${t<=1?8:6+Math.round(e.level/(t-1)*12)}%, transparent)`}(e,r.length,o)}"
          ></div>`)}
      ${e.available?q`<div class="fill"></div>`:W}
      ${n.target&&e.available&&null!==e.targetPosition?q`<div class="target"></div>`:W}
    </div>
    ${s?q`<span class="value">${e.display}</span>`:q`<span></span>`}
  `;return ip(e,t,l,"bullet-row")}const dp={layout:"chart",group:"compare",height:120,styles:r`
    ${sp}
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
    <rect x="40" y="22" width="2" height="14" rx="1" fill="var(--primary-text-color, #212121)" />`,validate(e){if(void 0!==e.ranges&&!lp.includes(e.ranges))throw new Error(`"ranges" must be one of: ${lp.join(", ")}`)},editor(e){const t=qi("bullet",e.hass,()=>[{name:"ranges",selector:Si(e.hass,"ranges",lp)}]);return Zi(e,"chart",t,[{name:"ranges",path:["ranges"],default:"shades"}])},render(e){const t=e.raw.ranges??"shades",a=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_bullet"),names:e.items.map(e=>e.name).join(", ")});return q`<div class="compare bullets ${e.config.show.name?"":"no-name"}" role="group" aria-label=${a}>
      ${e.items.map((a,o)=>cp(a,o,e,t))}
    </div>`}},up=["vertical","horizontal"];function hp(e,t,a){const{show:o}=t.config;return q`<div class="lane">
    <div class="scale">
      ${e.available?q`<div class="stem"></div>
              ${o.target&&null!==e.targetPosition?q`<div class="target"></div>`:W}
              <div class="dot"></div>
              ${a&&o.value?q`<span class="value tip">${e.display}</span>`:W}`:a?q`<span class="value tip">${e.display}</span>`:W}
    </div>
  </div>`}function pp(e,t,a){const{show:o}=a.config;return ip(e,t,q`${hp(e,a,!0)} ${o.name?q`<span class="name">${e.name}</span>`:W}`,"pop")}function mp(e,t,a){const{show:o}=a.config,n=o.value||!e.available;return ip(e,t,q`${o.name?q`<span class="name">${e.name}</span>`:W} ${hp(e,a,!1)}
  ${n?q`<span class="value">${e.display}</span>`:q`<span></span>`}`,"pop")}const fp={layout:"chart",group:"compare",height:200,styles:r`
    ${sp}
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
    <circle cx="50" cy="8" r="5" fill="var(--success-color, #1fae7a)" />`,validate(e){if(void 0!==e.orientation&&!up.includes(e.orientation))throw new Error(`"orientation" must be one of: ${up.join(", ")}`)},editor(e){const t=qi("lollipop",e.hass,()=>[{name:"orientation",selector:Si(e.hass,"orientation",up)}]);return Zi(e,"chart",t,[{name:"orientation",path:["orientation"],default:"vertical"}])},render(e){const t=e.raw.orientation??"vertical",a=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_lollipop"),names:e.items.map(e=>e.name).join(", ")}),o="vertical"===t?pp:mp;return q`<div
      class="compare ${t} ${e.config.show.name?"":"no-name"}"
      role="group"
      aria-label=${a}
    >
      ${e.items.map((t,a)=>o(t,a,e))}
    </div>`}},gp=["change","current"],vp=["vertical","horizontal"];function yp(e){const t=e.find(e=>null!==e.v);return t?t.v:null}const bp={vertical:.14,horizontal:.24};function _p(e,t){const{items:a,raw:o,hass:n}=e,r=o.steps??"change",i=!0===o.start_from_first,s=e=>t?.series[e]?.points??[],l=(e,t)=>{const a="change"===r?function(e){const t=e.filter(e=>null!==e.v);return 0===t.length?null:t[t.length-1].v-t[0].v}(s(t)):e.available?e.value:null;return null===a?null:function(e){return!0===e.config.invert}(e)?-a:a},c=i&&a.length?{value:yp(s(0)),index:0}:null,d=a.map((e,t)=>({value:l(e,t),index:t})).slice(i?1:0),{bars:u}=function(e,t,a){const o=[];let n=0;if(e){const t=e.value??0;o.push({kind:"start",from:0,to:t,delta:t,index:e.index,missing:null===e.value}),n=t}for(const s of t){const e=s.value??0;o.push({kind:"step",from:n,to:n+e,delta:e,index:s.index,missing:null===s.value}),n+=e}a&&o.push({kind:"total",from:0,to:n,delta:n,missing:!1});let r=0,i=0;for(const s of o)r=Math.min(r,s.from,s.to),i=Math.max(i,s.from,s.to);return r===i&&(i=r+1),{bars:o,domain:[r,i]}}(c,d,!1!==o.total),h=a[0]?.decimals??1;return u.map(e=>{const t=void 0===e.index?void 0:a[e.index],o=t?.decimals??h;let r,i;return"start"===e.kind?(r=zt(n,"waterfall_start"),i=e.missing?zt(n,"waterfall_no_readings"):jn(e.to,o,n)):"total"===e.kind?(r=zt(n,c?"waterfall_end":"waterfall_total"),i=jn(e.to,h,n)):(r=t.name,i=e.missing?t.available?zt(n,"waterfall_no_readings"):t.display:function(e,t,a){const o=jn(Math.abs(e),t,a);return 0===Number(e.toFixed(t))?jn(0,t,a):`${e>0?"+":"−"}${o}`}(e.delta,o,n)),{...e,name:r,label:i,entity:t}})}function xp(e,t){const a="horizontal"===e.raw.orientation,o=t.flatMap(e=>[e.from,e.to]);let n=Math.min(0,...o),r=Math.max(0,...o);n===r&&(r=n+1);const i=(r-n)*bp[a?"horizontal":"vertical"];r+=i,n<0&&(n-=i);const s=e=>(e-n)/(r-n)*100,l=t.length,c=100/l,d=a?.64:.6,u=e=>c*e+c*(1-d)/2,h=e=>u(e)+c*d,p=e.items[0]?.unit??"",m=zt(e.hass,"waterfall_aria",{bars:t.map(e=>`${e.name} ${e.missing?e.label:Cn(e.label,e.entity?.unit??p)}`).join(", ")}),f=e=>void 0===e.index?"":"entity",g=t.map((e,t)=>{const o=`--a0:${s(Math.min(e.from,e.to))}%;--a1:${s(Math.max(e.from,e.to))}%;--c0:${u(t)}%;--c1:${h(t)}%;--cm:${(u(t)+h(t))/2}%;--color:${function(e){return"step"!==e.kind?je("primary"):je(e.delta<0?"red":"green")}(e)}`,n=t+1<l?`--a:${s(e.to)}%;--c0:${h(t)}%;--c1:${u(t+1)}%`:"";return q`<div
        class="bar ${e.kind} ${e.missing?"missing":""} ${e.delta<0?"fall":"rise"} ${f(e)}"
        data-index=${e.index??W}
        tabindex=${void 0===e.index?W:0}
        aria-label=${`${e.name}, ${e.label}`}
        style=${o}
      ></div>
      <span class="bar-label ${e.missing?"missing":""} ${e.kind}" style=${o}
        >${e.missing&&!a?"–":e.label}</span
      >
      ${n?q`<div class="connector" style=${n}></div>`:W}`}),v=t.map(e=>q`<div class="bar-name ${f(e)}" data-index=${e.index??W} title=${e.name}>
        <span>${e.name}</span>
      </div>`);return q`<div class="wf ${a?"horizontal":"vertical"}" style="--n:${l}">
    <div class="names">${v}</div>
    <div class="wf-plot" role="img" aria-label=${m}>
      <div class="zero" style="--a:${s(0)}%"></div>
      ${g}
    </div>
  </div>`}const wp=[...Ci,{name:"steps",path:["steps"],default:"change"},{name:"orientation",path:["orientation"],default:"vertical"},{name:"start_from_first",path:["start_from_first"],default:!1},{name:"total",path:["total"],default:!0}];function $p(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}const kp={layout:"chart",group:"totals",height:240,styles:r`
    ${En}
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
    <rect x="52" y="24" width="9" height="12" rx="1.5" fill="var(--primary-color, #03a9f4)" />`,validate(e){if(bn(e),void 0!==e.steps&&!gp.includes(e.steps))throw new Error(`"steps" must be one of: ${gp.join(", ")}`);if(void 0!==e.orientation&&!vp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${vp.join(", ")}`);$p(e.start_from_first,"start_from_first"),$p(e.total,"total");for(const t of e.entities??[])"object"==typeof t&&$p(t.invert,"invert")},editor:function(e){const t=qi("waterfall",e.hass,()=>[...Ni(e.hass),{type:"grid",name:"",schema:[{name:"steps",selector:Si(e.hass,"steps",gp)},{name:"orientation",selector:Si(e.hass,"orientation",vp)}]},{name:"start_from_first",selector:{boolean:{}}},{name:"total",selector:{boolean:{}}}]);return q`${Zi(e,"chart",t,wp)}
  ${qu(e,"waterfall_invert","invert",{boolean:{}},!1)}`},disconnect:Mn,render(e){let t;if("change"===((a=e.raw).steps??"change")||!0===a.start_from_first){t=_n(e);const a=Sn(t,e);if(a)return a}var a;return xp(e,_p(e,t))}},Mp=["value","change"],zp=["direction","group"],Sp=["bad","good"];const Ap={"5minute":3e5,hour:36e5,day:864e5,month:26784e5};function Ep(e,t,a){const o=function(e,t,a=1e-9){return Math.abs(t-e)<=a?"flat":t>e?"up":"down"}(e,t);return"flat"===o?"grey":"up"===o==("bad"===a)?"red":"green"}function jp(e,t,a){const o=1===a.last,n=zt(e,`slope_unit_${a.unit}${o?"":"_other"}`);return zt(e,o?`slope_${t}_one`:`slope_${t}`,{n:a.last,unit:n})}function Cp(e,t,a){const o=function(e,t){if(null!==e&&null!==t&&0!==e)return(t-e)/Math.abs(e)}(e,t);if(void 0===o)return"";const n=Math.round(100*o);return`${n>0?"+":n<0?"−":""}${jn(Math.abs(n),0,a)} %`}function Np(e,t,a,o){const n="statistics"===e.source?Ap[Vo(e.range)]:0,r="group"===t.raw.color_by,i="good"===t.raw.increase?"good":"bad",s=new Map,l=e.series.map(e=>{const t=e.entity.available?e.entity.value:null,[l,c]=function(e,t,a,o,n=0){const r=t.find(e=>null!==e.v),i=Yh(t,a.start)??(r&&r.t-a.start<=n?r.v:null);if("value"===e)return[i,o];const s=Yh(t,a.middle);return[null===i||null===s?null:s-i,null===s||null===o?null:o-s]}(a,e.points,o,t,n),d=function(e){const t=e.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0}(e.entity),u=e.entity.config.color;let h;if(r){const t=d??`#${e.index}`;s.has(t)||s.set(t,vn[s.size%vn.length]),h=u??s.get(t)}else h=null!==l&&null!==c?Ep(l,c,i):"grey";return{index:e.index,entity:e.entity,from:l,to:c,color:je(h),group:d}});return l}const Lp=[...Ci,{name:"measure",path:["measure"],default:"value"},{name:"color_by",path:["color_by"],default:"direction"},{name:"increase",path:["increase"],default:"bad"}],Tp=[{name:"group",path:["group"]}],Op={layout:"chart",group:"compare",height:230,styles:r`
    ${En}
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
    ${[[14,28],[50,10],[14,12],[50,22],[14,32],[50,30]].map(([e,t])=>Z`<circle cx=${e} cy=${t} r="3" fill="var(--primary-text-color, #212121)" />`)}`,validate(e){bn(e);const t=(t,a)=>{if(void 0!==e[t]&&!a.includes(e[t]))throw new Error(`"${t}" must be one of: ${a.join(", ")}`)};t("measure",Mp),t("color_by",zp),t("increase",Sp);for(const a of e.entities??[]){const e="object"==typeof a&&a?a.group:void 0;if(void 0!==e&&"string"!=typeof e)throw new Error('"group" must be text')}},editor(e){const t=qi("slope",e.hass,()=>[...Ni(e.hass),{name:"measure",selector:Si(e.hass,"measure",Mp)},{type:"grid",name:"",schema:[{name:"color_by",selector:Si(e.hass,"color_by",zp)},{name:"increase",selector:Si(e.hass,"increase",Sp)}]}]);return Zi(e,"chart",t,Lp)},entityFields:e=>({schema:qi("slope-entity",e,()=>[{name:"group",selector:{text:{}}}]),fields:Tp}),disconnect:Mn,render(e){const t=Date.now(),a=Eo(e.raw.period),o="change"===e.raw.measure?"change":"value",n=_n("change"===o?{...e,raw:{...e.raw,period:{last:2*a.last,unit:a.unit}}}:e,t),r=jo(a,t).start,i={start:n.range.start,middle:r},s=e.hass,l=jp(s,"change"===o?"previous":"ago",a),c="change"===o?jp(s,"last",a):zt(s,"slope_now");if("ready"!==n.status)return q`${Sn(n,e)}`;const d=Np(n,e,o,i),u=d.flatMap(e=>[e.from,e.to]),h=Vh(u);if(!h)return q`<div class="chart-message">${zt(s,"chart_no_data")}</div>`;const{show:p}=e.config,m=new Set(d.filter(e=>e.entity.stateObj).map(e=>e.entity.unit)),f=1===m.size?[...m][0]:void 0,g=(e,t)=>{const a=jn(t,e.entity.decimals,s);return void 0===f&&e.entity.unit?`${a} ${e.entity.unit}`:a},v=d.filter(e=>null!==e.from||null!==e.to),y=Math.max(160,22*v.length),[b,_]=Sa(h,.06),x=e=>9+(_-e)/(_-b)*(y-18),w=e=>{const t=v.filter(t=>null!==e(t)),a=function(e,t,a,o){const n=e.map((e,t)=>({y:e,i:t})).sort((e,t)=>e.y-t.y||e.i-t.i),r=n.map(e=>Math.min(o,Math.max(a,e.y)));for(let s=1;s<r.length;s++)r[s]=Math.max(r[s],r[s-1]+t);if(r.length&&r[r.length-1]>o){r[r.length-1]=o;for(let e=r.length-2;e>=0;e--)r[e]=Math.min(r[e],r[e+1]-t)}if(r.length&&r[0]<a){r[0]=a;for(let e=1;e<r.length;e++)r[e]=Math.max(r[e],r[e-1]+t)}const i=new Array(e.length);return n.forEach((e,t)=>i[e.i]=r[t]),i}(t.map(t=>x(e(t))),18,9,y-9);return new Map(t.map((e,t)=>[e,a[t]]))},$=w(e=>e.from),k=w(e=>e.to),M=zt(s,"slope_no_reading"),z=zt(s,"chart_aria",{style:zt(s,"editor_style_slope"),names:d.map(e=>e.entity.name).join(", ")});return q`<div class="slope-head">
        <span class="from">${l}</span>
        ${f?q`<span class="unit">${f}</span>`:W}
        <span class="to">${c}</span>
      </div>
      <div class="slope-plot" style="height:${y}px" role="group" aria-label=${z}>
        <div class="axis from"></div>
        <div class="axis to"></div>
        ${v.map(e=>{const t=zt(s,"slope_entity_aria",{name:e.entity.name,from:null===e.from?M:g(e,e.from),to:null===e.to?M:g(e,e.to)}),a=p.value&&null!==e.from&&null!==e.to?Cp(e.from,e.to,s):"",o=e=>p.name?q`<span class="name">${e}</span>`:W;return q`<div class="entity" data-index=${e.index} tabindex="0" role="img" aria-label=${t}>
        ${null!==e.from&&null!==e.to?q`<svg viewBox="0 0 100 ${y}" preserveAspectRatio="none">
                <line x1="0" y1=${x(e.from)} x2="100" y2=${x(e.to)} stroke=${e.color}></line>
              </svg>`:W}
        ${null!==e.from?q`<span class="dot from" style="top:${x(e.from)}px;background:${e.color}"></span>
                <span class="lbl from" style="top:${$.get(e)}px"
                  >${o(e.entity.name)}${p.value?q`<span class="value">${g(e,e.from)}</span>`:W}</span
                >`:W}
        ${null!==e.to?q`<span class="dot to" style="top:${x(e.to)}px;background:${e.color}"></span>
                <span class="lbl to" style="top:${k.get(e)}px"
                  >${p.value?q`<span class="value">${g(e,e.to)}</span>`:W}${o(e.entity.name)}${a?q`<span class="pct" style="color:${e.color}">${a}</span>`:W}</span
                >`:W}
      </div>`})}
      </div>
      ${"group"===e.raw.color_by?function(e){const t=new Map;for(const a of e)a.group&&!t.has(a.group)&&t.set(a.group,a.color);return t.size?q`<div class="slope-legend">
    ${[...t].map(([e,t])=>q`<span class="slope-legend-item"><span class="swatch" style="background:${t}"></span>${e}</span>`)}
  </div>`:W}(d):W}`}},Fp=["range","then","target"],Pp=["horizontal","vertical"];function Dp(e,t,a,o,n){const r=e.available?e.value:null,i=[];if("range"===t){const e=function(e){return Vh(e.flatMap(e=>[e.v,e.min,e.max]))}(a),t=e?Vh([e[0],e[1],r]):void 0;t&&i.push({kind:"low",value:t[0]},{kind:"high",value:t[1]}),null===r||!n&&t||i.push({kind:"now",value:r})}else{const n="then"===t?Yh(a,o)??function(e){for(const t of e)if(null!==t.v)return t.v;return null}(a):e.target;null!==n&&i.push({kind:t,value:n}),null!==r&&i.push({kind:"now",value:r})}return i.sort((e,t)=>e.value-t.value)}function Up(e){if(0===e.length)return[];const t=e.some(e=>"low"===e.kind)?e.filter(e=>"now"!==e.kind):e,a=t[0],o=t[t.length-1];return a===o?[o]:[a,o]}function Hp(e,t,a,o,n){return e.map((e,r)=>{const i=Dp(e,t,a(r),o,n);return{index:r,entity:e,marks:i,labelled:Up(i)}})}function Ip(e,t){return 1===t.last?zt(e,`dumbbell_ago_${t.unit}_one`):zt(e,`dumbbell_ago_${t.unit}`,{n:t.last})}const Bp={low:je("blue"),high:je("red"),then:je("grey"),target:"var(--primary-text-color, #212121)"};function qp(e,t){return"target"===e||"now"===e&&"range"===t}function Zp(e,t,a){return"now"!==e?Bp[e]:"range"===t?"var(--primary-text-color, #212121)":je(a.band.color)}const Rp="range",Wp="horizontal",Vp=!0;function Yp(e){return{ends:e.ends??Rp,orientation:e.orientation??Wp,showNow:void 0===e.show_now?Vp:!0===e.show_now}}function Gp(e,t,a){const o=e.entity;if(0===e.marks.length)return`${o.name}, ${o.available?zt(t.hass,"dumbbell_no_value"):o.display}`;const n=e.marks.map(e=>`${(e=>"then"===e?Ip(t.hass,a):zt(t.hass,`dumbbell_${e}`))(e.kind)} ${Cn(jn(e.value,o.decimals,t.hass),o.unit)}`);return`${o.name}: ${n.join(", ")}`}const Xp=[...Ci,{name:"ends",path:["ends"],default:Rp},{name:"show_now",path:["show_now"],default:Vp},{name:"orientation",path:["orientation"],default:Wp}];const Jp={layout:"chart",group:"compare",height:220,styles:r`
    ${En}
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
    <circle cx="56" cy="29" r="4" fill="var(--error-color, #ef3b5a)" />`,validate(e){if(bn(e),void 0!==e.ends&&!Fp.includes(e.ends))throw new Error(`"ends" must be one of: ${Fp.join(", ")}`);if(void 0!==e.orientation&&!Pp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${Pp.join(", ")}`);if(void 0!==e.show_now&&"boolean"!=typeof e.show_now)throw new Error('"show_now" must be true or false')},editor:function(e){const{ends:t}=Yp(e.config),a=qi(`dumbbell-${t}`,e.hass,()=>[{type:"grid",name:"",schema:[{name:"ends",selector:Si(e.hass,"ends",Fp)},{name:"orientation",selector:Si(e.hass,"orientation",Pp)}]},..."target"===t?[]:Ni(e.hass),..."range"===t?[{name:"show_now",selector:{boolean:{}}}]:[]]);return Zi(e,"chart",a,Xp)},disconnect:Mn,render(e){const{ends:t,orientation:a,showNow:o}=Yp(e.raw),n=Eo(e.raw.period);let r;if("target"===t)r=Hp(e.items,t,()=>[],0,o);else{const a=_n(e);if("ready"!==a.status)return Sn(a,e)??q``;r=Hp(e.items,t,e=>a.series[e]?.points??[],a.range.start,o)}const i=Vh(r.flatMap(e=>e.marks.map(e=>e.value))),s=i?Wh(i[0],i[1],4):[],[l,c]=s.length?[s[0],s[s.length-1]]:[0,1],d=e=>c===l?.5:(e-l)/(c-l),u=function(e){const t=new Set(e.map(e=>e.unit).filter(e=>""!==e));return 1===t.size?[...t][0]:""}(e.items),h=function(e){if(e.length<2)return 0;const t=Math.abs(e[1]-e[0]);for(let a=0;a<6;a++)if(Math.abs(Math.round(t*10**a)-t*10**a)<1e-6)return a;return 6}(s),{show:p}=e.config,m=Math.max(...e.items.map(e=>e.name.length)),f=`min(${Math.min(m,16)+1}ch, 38%)`,g=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_dumbbell"),names:e.items.map(e=>e.name).join(", ")}),v=s.map(t=>q`<span class="db-tick" style="--f:${d(t)}">${jn(t,h,e.hass)}</span>`),y=r.map(a=>function(e,t,a,o,n,r){const i=e.entity,{show:s}=t.config,l=e.labelled[0],c=e.labelled[e.labelled.length-1],d=e=>qp(e.kind,a)?"color-mix(in srgb, var(--primary-text-color, #212121) 30%, transparent)":Zp(e.kind,a,i);return q`<div
    class="entity db-row ${i.available?"":"unavailable"}"
    data-index=${e.index}
    tabindex="0"
    role="img"
    aria-label=${Gp(e,t,r)}
  >
    ${s.name?q`<span class="db-name">${i.name}</span>`:W}
    <div class="db-plot">
      ${n.map(e=>q`<span class="db-grid" style="--f:${o(e)}"></span>`)}
      ${0===e.marks.length?q`<span class="db-status value">${i.available?"–":i.display}</span>`:q`${e.labelled.length>1?q`<span
                    class="db-bar"
                    style="--a:${o(l.value)};--b:${o(c.value)};--from:${d(l)};--to:${d(c)}"
                  ></span>`:W}
            ${e.marks.map(e=>q`<span
                  class="db-dot ${e.kind} ${qp(e.kind,a)?"ring":""}"
                  style="--f:${o(e.value)};--mark:${Zp(e.kind,a,i)}"
                ></span>`)}
            ${s.value?e.labelled.map((a,n)=>q`<span
                        class="db-label ${0===n&&e.labelled.length>1?"lo":"hi"}"
                        style="--f:${o(a.value)}"
                        >${jn(a.value,i.decimals,t.hass)}</span
                      >`):W}`}
    </div>
  </div>`}(a,e,t,d,s,n)),b=`db ${a} ${p.name?"":"no-names"} ${p.value?"":"no-values"}`;return q`<div class=${b} style="--name-w:${f}" role="group" aria-label=${g}>
      ${i?function(e,t,a,o,n,r){const i=t=>zt(e.hass,t),s=new Set(o.map(e=>je(e.entity.band.color))),l=1===s.size?[...s][0]:je("primary"),c="range"===t?[[i("dumbbell_low"),Bp.low,!1],...a?[[i("dumbbell_now"),Zp("now",t,o[0].entity),!0]]:[],[i("dumbbell_high"),Bp.high,!1]]:["then"===t?[Ip(e.hass,n),Bp.then,!1]:[i("dumbbell_target"),Bp.target,!0],[i("dumbbell_now"),l,!1]];return q`<div class="db-legend">
    ${r?q`<span class="db-unit">${r}</span>`:W}
    ${c.map(([e,t,a])=>q`<span class="db-key"
          ><span class="db-swatch ${a?"ring":""}" style="--mark:${t}"></span>${e}</span
        >`)}
  </div>`}(e,t,o,r,n,u):W}
      ${"horizontal"===a?q`${y}
            ${s.length?q`<div class="db-axis" aria-hidden="true"><div class="db-plot">${v}</div></div>`:W}`:q`<div class="db-body">
              ${s.length?q`<div class="db-axis" aria-hidden="true">${v}</div>`:W}${y}
            </div>`}
    </div>`}};function Kp(e){const t={...e,source:e.source??"statistics"};if("history"===t.source&&void 0===e.group_by){const a=e.period??{},o=(a.last??24)*({hour:1,day:24,week:168,month:720}[a.unit??"hour"]??1);t.group_by="day"===a.calendar||!a.calendar&&o<=48?"hour":"day"}return t}function Qp(e){return e.flatMap((t,a)=>a>0?[[t[0],e[a-1][1]],t]:[t])}function em(e,t,a){if(e.length<2)return"";const[o,n,r]="step"===a?[Qp(e),Qp(t),"straight"]:[e,t,a];return`${pn(o,r)}${pn([...n].reverse(),r).replace(/^M/,"L")}Z`}const tm=[...Ai.map(e=>"source"===e.name?{...e,default:"statistics"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"mean",path:["mean"],default:!0},{name:"line_width",path:["line_width"],default:Lt},...Oi,...Li];const am=[{name:"range_color",path:["color"]},{name:"curve",path:["curve"]},{name:"dash",path:["dash"],default:!1}],om={layout:"chart",group:"history",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){if(bn(e),Da(e),fr(e),Bt(e),Jn(e),void 0!==e.mean&&"boolean"!=typeof e.mean)throw new Error('"mean" must be true or false')},editor:function(e){const t=qi(`range_area|${Ei(e.config)}`,e.hass,()=>[...ji(e.hass,e.config),{name:"curve",selector:Si(e.hass,"curve",dn)},{type:"grid",name:"",schema:[{name:"mean",selector:{boolean:{}}},{name:"line_width",selector:Qt}]},...Fi(e.hass),...Ti(e.hass)]);return Zi(e,"chart",t,tm)},entityFields:e=>({schema:qi("range-area-entity",e,()=>[{type:"grid",name:"",schema:[{name:"range_color",selector:{text:{}}},{name:"curve",selector:Si(e,"curve",dn)},{name:"dash",selector:{boolean:{}}}]}]),fields:am}),disconnect(e){Mn(e),qn(e),pr(e)},render:function(e){const t={...e,raw:Kp(e.raw)},a=_n(t,Date.now(),{range:!0}),o=$n(a,t),n=zn(a,t),r=o===W&&n===W?W:q`${o}${n}`,i=Sn(a,t),s=Kn(t.raw);if(i)return Qn("over"===s.header?{...s,header:"above"}:s,r,i);const l=a.series,c=Rn(t,a.range,za(l.map(e=>e.points))),d=!1!==t.raw.mean,u=t.raw.line_width??Lt,h={text:(e,a)=>{if(!a||null===a.v)return"—";const o=a=>jn(a,e.entity.decimals,t.hass),n=a.min??a.v,r=a.max??a.v;return Cn(`${o(n)} – ${o(r)}`,e.entity.unit)+(d?` · ${o(a.v)}`:"")}};d||(h.dotY=()=>null);const p=mr(t.raw),m=zt(t.hass,"chart_aria",{style:zt(t.hass,"editor_style_range_area"),names:a.series.map(e=>e.entity.name).join(", ")});return Qn(s,r,Yn({axes:c,ctx:t,content:Z`${l.map(e=>function(e,t,a,o){const n=[],r=[],i=[];for(const s of function(e){const t=[];let a=[];for(const o of e)null!==o.v?a.push({t:o.t,v:o.v,lo:o.min??o.v,hi:o.max??o.v}):(a.length&&t.push(a),a=[]);return a.length&&t.push(a),t}(e.points)){const a=s.map(e=>[t.x(e.t),t.y(e.hi)]),o=s.map(e=>[t.x(e.t),t.y(e.lo)]);n.push(em(a,o,e.curve)),r.push(pn(a,e.curve),pn(o,e.curve)),i.push(pn(s.map(e=>[t.x(e.t),t.y(e.v)]),e.curve))}return Z`<g class="series" data-series=${e.index}>
    <path class="band" d=${n.join("")} fill=${e.color} stroke="none"></path>
    <path class="band-edge" d=${r.join("")} fill="none" stroke=${e.color}></path>
    ${a?Z`<path class="line ${e.dash?"dashed":""}" d=${i.join("")} fill="none" stroke=${e.color}
            style="stroke-width:${o}px"></path>`:W}
  </g>`}(e,c.scales,d,u))}`,label:m,overlay:q`${"over"===s.header?er(r):W}
      ${p?_r(t,l,c.scales,hr(t.host),Zn(t),h):W}`,hover:p?gr(t,a.range,l.map(e=>e.points)):void 0}))}},nm=["line","area","column"];function rm(e,t){return e.config.spark??t.spark??"line"}function im(e){const t=e.period??{},a=(t.last??24)*({hour:1,day:24,week:168,month:720}[t.unit??"hour"]??1);return(t.calendar?"day"===t.calendar:a<=48)?"hour":"day"}function sm(e,t){return void 0===e.group_by&&0!==t.length&&t.every(e=>"column"===e)?{...e,group_by:im(e),aggregate:e.aggregate??"mean"}:e}function lm(e,t,a,o){const n=io(e.points,120),r=n.filter(e=>null!==e.v).map(e=>e.v),i=function(e,t){if(0===e.length)return;let a=Math.min(...e),o=Math.max(...e);return t?(a=Math.min(a,0),o=Math.max(o,0),a===o?[a,a+1]:[a,o]):([a,o]=Sa([a,o],.1),[a,o])}(r,"column"===t);if(!i)return Z``;const s=Aa([a.start,a.end],[0,100]),l=Aa(i,[23,1]),c=l(Math.min(Math.max(0,i[0]),i[1]));if("column"===t){const t=[];return n.forEach((e,o)=>{if(null===e.v)return;const r=e.end??n[o+1]?.t??a.end,i=s(e.t),d=Math.max(0,Math.min(100,s(r))-i);if(d<=0)return;const u=Math.min(l(e.v),c);t.push(Z`<rect x=${i+.12*d} width=${.76*d} y=${u} height=${Math.abs(l(e.v)-c)}></rect>`)}),Z`<g class="spark-columns" fill=${e.color}>${t}</g>`}const d=mn(n).map(e=>e.map(e=>[s(e.t),l(e.v)])),u=d.map(t=>pn(t,e.curve)).join(""),h="area"===t?d.filter(e=>e.length>1).map(t=>`${pn(t,"step"===e.curve?"straight":e.curve)}L${t[t.length-1][0]},${c}L${t[0][0]},${c}Z`).join(""):"";return Z`${h?Z`<path class="spark-fill" d=${h} fill=${e.color} stroke="none"></path>`:W}
    <path class="spark-line" d=${u} fill="none" stroke=${e.color} style="stroke-width:${o}px"></path>`}const cm=[...Ai,{name:"spark",path:["spark"],default:"line"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:1.5},{name:"spark_bar",path:["bar"],default:!1}];const dm=[{name:"spark",path:["spark"]},{name:"spark_color",path:["color"]}];const um={layout:"chart",group:"history",height:120,styles:r`
    ${En}
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
    <rect x="42" y="25" width="14" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.5" />`,validate:function(e){bn(e);const t=[e.spark,...(e.entities??[]).map(e=>"object"==typeof e?e.spark:void 0)];for(const o of t)if(void 0!==o&&!nm.includes(o))throw new Error(`"spark" must be one of: ${nm.join(", ")}`);if(void 0!==e.bar&&"boolean"!=typeof e.bar)throw new Error('"bar" must be true or false');const a=e.line_width;if(void 0!==a&&("number"!=typeof a||a<Tt||a>Ot))throw new Error('"line_width" must be a number from 0.5 to 12')},editor:function(e){const t=qi(`sparkline|${Ei(e.config)}`,e.hass,()=>[...ji(e.hass,e.config),{type:"grid",name:"",schema:[{name:"spark",selector:Si(e.hass,"spark",nm)},{name:"curve",selector:Si(e.hass,"curve",dn)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Qt},{name:"spark_bar",selector:{boolean:{}}}]}]);return Zi(e,"chart",t,cm)},entityFields:e=>({schema:qi("sparkline-entity",e,()=>[{type:"grid",name:"",schema:[{name:"spark",selector:Si(e,"spark",nm)},{name:"spark_color",selector:{text:{}}}]}]),fields:dm}),disconnect(e){Mn(e)},render:function(e){const t=e.items.map(t=>rm(t,e.raw)),a={...e,raw:sm(e.raw,t)},o=_n(a),{show:n}=a.config,r=!0===a.raw.bar,i=a.raw.line_width??1.5,s="error"===o.status?q`<div class="spark-message error">${zt(a.hass,"chart_error",{error:o.error??""})}</div>`:W,l=o.series.map((s,l)=>{const c=s.entity,d=c.config.color,u=je(d||c.band.color),h="column"===rm(c,e.raw)&&void 0===a.raw.group_by,p={...s,color:u,points:h?(m=s.points,f=a.raw,g=o.range,v=a.hass,Qo(m,bo(im(f),g.start,g.end,xo(v)),f.aggregate??"mean",Date.now())):s.points};var m,f,g,v;const y=c.config.line_width??i,b=n.name?q`<span class="name">${c.name}</span>`:W,_=n.value||!c.available?q`<span class="value">${c.display}</span>`:W;return q`<div
      class="entity spark-row ${r?"with-bar":""} ${c.available?"":"unavailable"}"
      data-index=${l}
      tabindex="0"
      aria-label=${c.label}
    >
      ${n.icon?q`<ha-state-icon
              class="icon"
              .hass=${a.hass}
              .stateObj=${c.stateObj}
              .icon=${rs(c)}
            ></ha-state-icon>`:W}
      ${r?q`<div class="spark-body">
              <div class="top">${b}${_}</div>
              ${function(e,t){const a=Ce(e.band.color);return q`<div
    class="spark-track"
    style="--start:${e.span[0]};--end:${e.span[1]};--c-start:${a.start};--c-end:${a.end};--target:${e.targetPosition??0}"
  >
    <div class="spark-bar"></div>
    ${t&&null!==e.targetPosition&&e.available?q`<div class="spark-target"></div>`:W}
  </div>`}(c,n.target)}
            </div>`:b}
      <svg
        class="spark ${"loading"===o.status?"loading":""}"
        viewBox="0 0 ${100} ${24}"
        preserveAspectRatio="none"
        role="img"
        aria-label=${zt(a.hass,"spark_aria",{name:c.name})}
      >
        ${"ready"===o.status?lm(p,t[l],o.range,y):W}
      </svg>
      ${r?W:_}
    </div>`});return q`${$n(o,a)}${s}
    <div class="spark-rows ${n.icon?"icons":""} ${r?"bars":""}">${l}</div>`}},hm=["wiggle","centre","share","zero"],pm=["inside_out","listed"];function mm(e){return e.map(e=>null===e||!Number.isFinite(e)||e<0?0:e)}function fm(e,t,a){const o="share"===a?function(e){const t=e[0]?.length??0,a=Array.from({length:t},(t,a)=>e.reduce((e,t)=>e+t[a],0));return e.map(e=>e.map((e,t)=>a[t]>0?e/a[t]*100:0))}(e):e,n=t.map(e=>o[e]);let r=function(e,t){const a=e[0]?.length??0,o=Array.from({length:a},(t,a)=>e.reduce((e,t)=>e+t[a],0));if("zero"===t||"share"===t)return new Array(a).fill(0);if("centre"===t)return o.map(e=>-e/2);const n=new Array(a).fill(0);for(let l=1;l<a;l++){let t=0,a=0;for(let o=0;o<e.length;o++){const n=e[o][l];let r=(n-e[o][l-1])/2;for(let t=0;t<o;t++)r+=e[t][l]-e[t][l-1];t+=n,a+=r*n}n[l]=n[l-1]-(t?a/t:0)}let r=1/0,i=-1/0;for(let l=0;l<a;l++)r=Math.min(r,n[l]),i=Math.max(i,n[l]+o[l]);const s=a?-(r+i)/2:0;return n.map(e=>e+s)}(n,a);const i=new Array(e.length);for(const s of t){const e=r.map((e,t)=>e+o[s][t]);i[s]={lower:r,upper:e},r=e}return i}function gm(e){let t=0,a=-1/0;return e.upper.forEach((o,n)=>{const r=o-e.lower[n];r>a&&(a=r,t=n)}),{at:t,thickness:Math.max(0,a)}}function vm(e,t,a){const o=Math.min(e.range.end,t);if(e.group){const t=e.series[0]?.points??[],a=t.map((e,t)=>t).filter(e=>t[e].t<o);return{times:a.map(e=>(t[e].t+Math.min(t[e].end??t[e].t,o))/2),values:e.series.map(e=>a.map(t=>e.points[t]?.v??null))}}let n=Math.min(240,Math.max(24,Math.round(a/4)));if("statistics"===e.source){const t=Math.max(1,...e.series.map(e=>e.points.filter(e=>!e.carried).length));n=Math.min(n,t)}const r=function(e,t,a){const o=Math.max(e.start+1,Math.min(e.end,t)),n=Math.max(1,Math.round(a)),r=(o-e.start)/n,i=[];for(let s=0;s<n;s++)i.push(e.start+s*r);return i.push(o),i}(e.range,o,n);return{times:r.slice(0,-1).map((e,t)=>(e+r[t+1])/2),values:e.series.map(t=>function(e,t,a,o){return("statistics"===a?en(e,t,"mean",o):Qo(e,t,"mean",o)).map(e=>e.v)}(t.points,r,e.source,o))}}function ym(e){return e.baseline??"wiggle"}const bm=e=>Math.round(1e4*e)/100+"%";function _m(e,t,a,o,n,r,i){const[s,l]=o.domain,c=Kn(n.raw).compact?110:180,d=Zn(n),u=e=>e/(l-s)*c,h=new Map,p=[];for(const f of e.series){const e=t[f.index],{at:s,thickness:l}=gm(e);if(u(l)<18)continue;const m=i[f.index][s],g=r?`${jn(e.upper[s]-e.lower[s],0,n.hass)} %`:null===m?"":Cn(jn(m,f.entity.decimals,n.hass),f.entity.unit),v=`${f.entity.name} ${g}`.trim();h.set(f.index,v),p.push({key:f.index,x:a[s]/fn*d,y:o.y((e.upper[s]+e.lower[s])/2)/gn*c,width:6.2*v.length,thickness:u(l)})}const m=function(e,t){const a=[],o=new Map;for(const n of[...e].sort((e,t)=>t.thickness-e.thickness||e.key-t.key)){if(n.width>t-4)continue;const e=Math.min(Math.max(2,n.x-n.width/2),t-n.width-2),r={left:e,right:e+n.width,top:n.y-6.5,bottom:n.y+6.5},i=a.some(e=>r.left<e.right+4&&r.right>e.left-4&&r.top<e.bottom&&r.bottom>e.top);i||(a.push(r),o.set(n.key,e))}return o}(p,d);return q`<div class="stream-labels" aria-hidden="true">
    ${p.map(t=>{const a=m.get(t.key);if(void 0===a)return W;const o=e.series[t.key];return q`<span
        class="stream-label ${Le(function(e){return e.entity.config.color??vn[e.index%vn.length]}(o))}"
        style="left:${bm(d?a/d:0)};top:${bm(t.y/c)}"
        >${h.get(t.key)}</span
      >`})}
  </div>`}function xm(e,t,a,o,n,r,i,s){if(void 0===i)return W;const l=dr(a.times.map(e=>({t:e})),i);if(l<0)return W;const c=r[l]/fn,d=lr(c,Zn(e)),u=[...n].reverse().map(e=>t.series[e]),h=o.map(e=>e.upper[l]-e.lower[l]),p=a.values.reduce((e,t)=>e+Math.max(0,t[l]??0),0),m=new Set(t.series.map(e=>e.entity.unit));return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${bm(c)}"></div>
    <div class="tooltip ${d}" style=${d.startsWith("pin")?"":`left:${bm(c)}`}>
      <div class="tooltip-time">${no(a.times[l],e.hass)}</div>
      ${u.map(t=>q`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${(t=>{const o=a.values[t.index][l];if(null===o)return"—";const n=Cn(jn(o,t.entity.decimals,e.hass),t.entity.unit);return s?`${n} · ${jn(h[t.index],0,e.hass)} %`:n})(t)}</span>
          </div>`)}
      ${1===m.size&&t.series.length>1?q`<div class="tooltip-row total">
              <span class="tooltip-name">${zt(e.hass,"stream_total")}</span>
              <span class="tooltip-value"
                >${Cn(jn(p,t.series[0].entity.decimals,e.hass),t.series[0].entity.unit)}</span
              >
            </div>`:W}
    </div>
  </div>`}const wm=[...Ai,{name:"baseline",path:["baseline"],default:"wiggle"},{name:"stream_order",path:["stream_order"],default:"inside_out"},{name:"stream_curve",path:["curve"],default:"smooth"},{name:"stream_labels",path:["labels"],default:!0},...Oi,...Li],$m=new Set(["y_axis","grid_horizontal","y_min","y_max"]);function km(e){return e.map(e=>{const t=e;if(!$m.has(t.name)){if(t.schema){const e=t.schema.filter(e=>!$m.has(e.name));return e.length?{...t,schema:e}:void 0}return t}}).filter(e=>void 0!==e)}const Mm={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},zm={layout:"chart",group:"totals",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
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
      fill="var(--warning-color, #f59e0b)" />`,validate(e){if(bn(e),Da(e),fr(e),Jn(e),void 0!==e.baseline&&!hm.includes(e.baseline))throw new Error(`"baseline" must be one of: ${hm.join(", ")}`);if(void 0!==e.stream_order&&!pm.includes(e.stream_order))throw new Error(`"stream_order" must be one of: ${pm.join(", ")}`);if(void 0!==e.labels&&"boolean"!=typeof e.labels)throw new Error('"labels" must be true or false')},editor:function(e){const t=function(e){const t=ym(e);return`${Ei(e)}|${"wiggle"===t||"centre"===t?"floating":"axis"}`}(e.config),a=qi(`streamgraph|${t}`,e.hass,()=>{const a=Fi(e.hass);return[...ji(e.hass,e.config),{type:"grid",name:"",schema:[{name:"baseline",selector:Si(e.hass,"baseline",hm)},{name:"stream_order",selector:Si(e.hass,"stream_order",pm)}]},{type:"grid",name:"",schema:[{name:"stream_curve",selector:Si(e.hass,"curve",["smooth","straight","step"])},{name:"stream_labels",selector:{boolean:{}}}]},...t.endsWith("floating")?km(a):a,...Ti(e.hass)]});return Zi(e,"chart",a,wm)},entityFields:()=>Mm,disconnect(e){Mn(e),qn(e),pr(e)},render(e){const t=Date.now(),a=_n(e,t),o=$n(a,e),n=zn(a,e),r=o===W&&n===W?W:q`${o}${n}`,i=Sn(a,e),s=Kn(e.raw);if(i)return Qn("over"===s.header?{...s,header:"above"}:s,r,i);const l=ym(e.raw),c="share"===l,d="wiggle"===l||"centre"===l,u=vm(a,t,Zn(e)),h=u.values.map(mm),p="listed"===(e.raw.stream_order??"inside_out")?h.map((e,t)=>t):function(e){const t=e.map((e,t)=>{let a=0;for(let o=1;o<e.length;o++)e[o]>e[a]&&(a=o);return{i:t,at:a,sum:e.reduce((e,t)=>e+t,0)}});t.sort((e,t)=>e.at-t.at||e.i-t.i);let a=0,o=0;const n=[],r=[];for(const i of t)a<o?(a+=i.sum,n.push(i.i)):(o+=i.sum,r.push(i.i));return[...r.reverse(),...n]}(h);const m=fm(h,p,l),f=function(e){let t=1/0,a=-1/0;for(const o of e){for(const e of o.lower)t=Math.min(t,e);for(const e of o.upper)a=Math.max(a,e)}return t===1/0?void 0:[t,a]}(m);let g=e.raw;if(d){const[t,a]=f??[0,1],o=a>t?.04*(a-t):1;g={...e.raw,y_axis:!1,y_min:t-o,y_max:a+o,gridlines:{...e.raw.gridlines??{},horizontal:!1}}}else c?g={...e.raw,y_min:0,y_max:100}:void 0===e.raw.y_min&&(g={...e.raw,y_min:0});const v=Rn({...e,raw:g},a.range,f),{scales:y}=v,b=u.times.map(e=>y.x(e)),_=e.raw.curve??"smooth",x=Math.min(a.range.end,t),w=[y.x(a.range.start),...b,y.x(x)],$=0===u.times.length?Z``:Z`${p.map(e=>{const t=a.series[e];return Z`<path
              class="stream entity"
              data-index=${e}
              aria-label=${t.entity.label}
              d=${function(e,t,a,o){const n=t.map((t,o)=>[t,a.y(e.upper[o])]),r=t.map((t,o)=>[t,a.y(e.lower[o])]).reverse();return 0===n.length?"":`${pn(n,o)}L${pn(r,o).slice(1)}Z`}((e=>({lower:[e.lower[0],...e.lower,e.lower[e.lower.length-1]],upper:[e.upper[0],...e.upper,e.upper[e.upper.length-1]]}))(m[e]),w,y,_)}
              fill=${t.color}
            ></path>`})}`,k=mr(e.raw),M=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_streamgraph"),names:a.series.map(e=>e.entity.name).join(", ")}),z=u.times.map(e=>({t:e,v:0}));return Qn(s,r,Yn({axes:v,ctx:{...e},content:$,label:M,overlay:q`${"over"===s.header?er(r):W}
        ${!1!==e.raw.labels&&u.times.length?_m(a,m,b,y,e,c,u.values):W}
        ${k?xm(e,a,u,m,p,b,hr(e.host),c):W}`,hover:k?gr(e,a.range,[z]):void 0}))}};const Sm=["columns","line"],Am=.7;function Em(e){return{last:14,unit:"day",...e.period??{}}}function jm(e){return e.group_by??"day"}function Cm(e,t=Date.now()){const a=Eo(Em(e.raw)),o=e.raw.source??"statistics";const n=jm(e.raw),r=e.raw.aggregate??"mean",i=xo(e.hass),s=Co(a,t,i,a.navigate?Lo(e.host,a):0),l=vo(n,s.start,i),c=bo(n,l,s.end,i),d={start:l,end:c[c.length-1]},u=Math.min(s.end,t),h=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),p=cn(e.host,e.requestUpdate),m="statistics"===o?function(e,t,a){let o="hour";return"hour"===e?o="5minute":"day"!==e&&t.timeZone===a&&(o="day"),{period:o,types:["mean","min","max","state"],value:"mean"}}(n,i,e.hass.config?.time_zone):void 0,f=p.get(e.hass,h,{start:l,end:s.end},o,{live:s.live,statistics:m});let g=[];const v=e.items.map((e,t)=>{const a=e.config,n=f.data.get(Go(h[t]))??[];let i;return 0===t?(g="statistics"===o?function(e,t,a){const o=[];let n=0;for(let r=0;r+1<t.length;r++){const i=t[r],s=t[r+1];for(;n<e.length&&e[n].t<i;)n++;let l=null;for(let t=n;t<e.length&&e[t].t<s;t++){const o=e[t];if(null===o.v||o.carried||i>=a)continue;const n="number"==typeof o.max?Math.max(o.max,o.v):o.v,r="number"==typeof o.min?Math.min(o.min,o.v):o.v;l?(l.high=Math.max(l.high,n),l.low=Math.min(l.low,r),l.close=o.v):l={t:i,end:s,open:o.v,high:n,low:r,close:o.v}}o.push(l)}return o}(n,c,u):function(e,t,a){const[o,n,r,i]=["first","max","min","last"].map(o=>Qo(e,t,o,a));return o.map((e,t)=>null===e.v||null===n[t].v||null===r[t].v||null===i[t].v?null:{t:e.t,end:e.end??e.t,open:e.v,high:n[t].v,low:r[t].v,close:i[t].v})}(n,c,u),i=g.map((e,t)=>({t:c[t],end:c[t+1],v:e?e.close:null}))):i=function(e,t,a,o,n){return"history"===o?Qo(e,t,a,n):"sum"===a||"change"===a?Qo(e,t,"change",n):en(e,t,a,n)}(n,c,r,o,u),{index:t,entity:e,points:i,color:je(a.color??(0===t?vn[0]:"grey")),curve:"smooth",dash:!1}});return{status:f.status,error:f.error,range:d,period:a,source:o,series:v,live:s.live,back:s.back,zone:i,group:{unit:n,aggregate:r},candles:g,unit:n}}const Nm=e=>Math.round(1e4*e)/100+"%";function Lm(e,t,a,o){if(void 0===o)return W;const n=t.series[0].points.map(e=>({t:(e.t+(e.end??e.t))/2})),r=dr(n,o);if(r<0)return W;const i=t.candles[r],s=a(n[r].t)/fn,l=lr(s,Zn(e)),c=t.series[0].entity,d=(t,a=c)=>Cn(jn(t,a.decimals,e.hass),a.unit),u=i?[[zt(e.hass,"candle_open"),d(i.open)],[zt(e.hass,"candle_high"),d(i.high)],[zt(e.hass,"candle_low"),d(i.low)],[zt(e.hass,"candle_close"),d(i.close)]]:[[c.name,"—"]];for(const h of t.series.slice(1)){const e=h.points[r]?.v;u.push([h.entity.name,null==e?"—":d(e,h.entity),h.color])}return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Nm(s)}"></div>
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${Nm(s)}`}>
      <div class="tooltip-time">${function(e,t,a,o){if("hour"===t)return no(e,a);const n="month"===t?{month:"long",year:"numeric",timeZone:o.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:o.timeZone};let r;try{r=new Intl.DateTimeFormat(a?.locale?.language??a?.language??"en",n)}catch{r=new Intl.DateTimeFormat("en",n)}const i=r.format(e);return"week"===t?zt(a,"candle_week_of",{date:i}):i}(t.series[0].points[r].t,t.unit,e.hass,t.zone)}</div>
      ${u.map(([e,t,a])=>q`<div class="tooltip-row">
            ${a?q`<span class="swatch" style="background:${a}"></span>`:W}
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}const Tm=[...Ai.map(e=>"period_last"===e.name?{...e,default:14}:"period_unit"===e.name?{...e,default:"day"}:"source"===e.name?{...e,default:"statistics"}:"group_by"===e.name?{name:"candle_by",path:["group_by"],default:"day"}:"aggregate"===e.name?{name:"under_aggregate",path:["aggregate"],default:"mean"}:e),{name:"up_color",path:["up_color"],default:"green"},{name:"down_color",path:["down_color"],default:"red"},{name:"underneath",path:["underneath"],default:"columns"},...Oi,...Li];const Om={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Fm={layout:"chart",group:"history",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
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
    </g>`,validate(e){bn(e),Da(e),fr(e),Jn(e),Eo(Em(e));for(const t of["up_color","down_color"])if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`);if(void 0!==e.underneath&&!Sm.includes(e.underneath))throw new Error(`"underneath" must be one of: ${Sm.join(", ")}`)},editor:function(e){const t=qi(`candlestick|${e.config.period?.calendar?"calendar":"rolling"}`,e.hass,()=>{return[...(t=e.hass,a=e.config,ji(t,{...a,group_by:jm(a)}).map(e=>{const a=e;return a.schema?.some(e=>"group_by"===e.name)?{...a,schema:[{name:"candle_by",selector:Si(t,"group_by",Xo)},{name:"under_aggregate",selector:Si(t,"aggregate",Jo)}]}:e})),{type:"grid",name:"",schema:[{name:"up_color",selector:{text:{}}},{name:"down_color",selector:{text:{}}}]},{name:"underneath",selector:Si(e.hass,"underneath",Sm)},...Fi(e.hass),...Ti(e.hass)];var t,a});return Zi(e,"chart",t,Tm)},entityFields:()=>Om,disconnect(e){Mn(e),qn(e),pr(e)},render(e){const t=Cm(e),a=$n(t,e),o=zn(t,e),n=a===W&&o===W?W:q`${a}${o}`,r=Sn(t,e),i=Kn(e.raw);if(r)return Qn("over"===i.header?{...i,header:"above"}:i,n,r);const s=Rn(e,t.range,function(e){let t=1/0,a=-1/0;for(const o of e)o&&(t=Math.min(t,o.low),a=Math.max(a,o.high));return t===1/0?void 0:[t,a]}(t.candles)),l=t.series.length>1;l&&(s.scales.y=Aa(s.value.domain,[146,0]));const{x:c,y:d}=s.scales,u=je(e.raw.up_color??"green"),h=je(e.raw.down_color??"red"),p=t.series[0],m=t.candles.map(e=>{if(!e)return W;const t=c(e.t),a=c(e.end)-t,o=t+a/2,n=e.close>=e.open?u:h,r=d(Math.max(e.open,e.close)),i=Math.max(1.5,d(Math.min(e.open,e.close))-r);return Z`<g
        class="candle entity ${e.close>=e.open?"up":"down"}"
        data-index="0"
        aria-label=${p.entity.label}
      >
        <line class="wick" x1=${o} x2=${o} y1=${d(e.high)} y2=${d(e.low)} stroke=${n}></line>
        <rect class="body" x=${t+a*(1-Am)/2} width=${a*Am} y=${r} height=${i} fill=${n}></rect>
      </g>`}),f=e.raw.underneath??"columns",g=Z`${l?function(e,t,a){const o=e.series.slice(1);return Z`${o.map((e,n)=>{const r=e.points.map(e=>e.v).filter(e=>null!==e),i=Math.min(0,...r),s=Math.max(0,...r),l=Aa([i,s===i?i+1:s],[gn,156]);if("line"===a){const a=mn(e.points).map(e=>pn(e.map(e=>[t((e.t+(e.end??e.t))/2),l(e.v)]),"straight")).join("");return Z`<path class="under-line entity" data-index=${e.index} d=${a} fill="none" stroke=${e.color}></path>`}return Z`<g class="under-columns entity" data-index=${e.index} fill=${e.color}>
      ${e.points.map(e=>{if(null===e.v)return W;const a=t(e.t),r=t(e.end??e.t)-a,i=r*Am/o.length,s=a+r*(1-Am)/2+n*i,c=l(Math.max(0,e.v));return Z`<rect x=${s} width=${Math.max(.5,.9*i)} y=${c} height=${Math.max(0,l(Math.min(0,e.v))-c)}></rect>`})}
    </g>`})}`}(t,c,f):W}${m}`,v=mr(e.raw),y=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_candlestick"),names:t.series.map(e=>e.entity.name).join(", ")}),b=p.points.map(e=>({t:(e.t+(e.end??e.t))/2,v:e.v}));return Qn(i,n,Yn({axes:s,ctx:e,content:g,label:y,overlay:q`${"over"===i.header?er(n):W}
        ${v?Lm(e,t,c,hr(e.host)):W}`,hover:v?gr(e,t.range,[b]):void 0}))}},Pm=["horizontal","vertical"],Dm=1e3,Um=100,Hm=e=>"number"==typeof e&&Number.isFinite(e),Im=[{name:"orientation",path:["orientation"],default:"horizontal"},{name:"value_axis",path:["value_axis"],default:!0},{name:"value_grid",path:["value_grid"],default:!0},{name:"value_min",path:["value_min"]},{name:"value_max",path:["value_max"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function Bm(e){return[{name:"orientation",selector:Si(e,"orientation",Pm)},{type:"grid",name:"",schema:[{name:"value_axis",selector:{boolean:{}}},{name:"value_grid",selector:{boolean:{}}},{name:"value_min",selector:{number:{mode:"box",step:"any"}}},{name:"value_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]}function qm(e){for(const t of["compact","tooltip"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);if(void 0!==e.orientation&&!Pm.includes(e.orientation))throw new Error(`"orientation" must be one of: ${Pm.join(", ")}`);for(const t of["value_axis","value_grid"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of["value_min","value_max"])if(void 0!==e[t]&&!Hm(e[t]))throw new Error(`"${t}" must be a number`);if(Hm(e.value_min)&&Hm(e.value_max)&&e.value_min>=e.value_max)throw new Error('"value_min" must be below "value_max"')}function Zm(e){return{orientation:e.orientation??"horizontal",axis:!1!==e.value_axis,grid:!1!==e.value_grid,min:Hm(e.value_min)?e.value_min:void 0,max:Hm(e.value_max)?e.value_max:void 0}}function Rm(e){return Math.min(140,Math.max(64,Math.round(.3*(e-32))))}function Wm(e,t,a,o=64){const n=Zm(e.raw),r=!0===e.raw.compact,i=Bn(e),s=Math.max(1,t);if("horizontal"===n.orientation){const e=Aa(a.domain,[0,Dm]);return{orientation:n.orientation,count:s,width:Dm,height:s*Um,at:(t,a,o=0)=>[e(t),(a+.5+o)*Um],valuePx:Math.max(40,i-32-Rm(i)-8),bandPx:Math.min(r?Math.round(.69*o):o,s>12?28:s>6?40:1/0)}}const l=Aa(a.domain,[Dm,0]),c=Math.max(40,i-32-(n.axis?40:0));return{orientation:n.orientation,count:s,width:s*Um,height:Dm,at:(e,t,a=0)=>[(t+.5+a)*Um,l(e)],valuePx:r?110:180,bandPx:c/s}}function Vm(e,t){return"horizontal"===t?Math.max(2,Math.min(8,Math.floor(e/64))):e>140?4:3}function Ym(e,t,a,o){const n=Zm(t),r=qa(e,{min:n.min,max:n.max},a);return{domain:r.domain,ticks:r.ticks,format:e=>jn(e,r.decimals,o)}}function Gm(e,t){const a=function(e){for(const t of[1,2,3,4,6,12])if(t>=e)return t;return Math.max(12,Ha(e,1))}(24/Math.max(1,e)),o=[];for(let i=0;i<=24;i+=a)o.push(i);let n;const r={hour:"numeric",minute:"2-digit",timeZone:"UTC",hour12:eo(t)};try{n=new Intl.DateTimeFormat(t?.locale?.language??t?.language??"en",r)}catch{n=new Intl.DateTimeFormat("en",r)}return{domain:[0,24],ticks:o,format:e=>n.format(Date.UTC(2e3,0,1,0,Math.round(60*e)))}}const Xm=e=>Math.round(1e4*e)/100+"%",Jm=new WeakMap;function Km(e){return Jm.get(e)}function Qm(e){Jm.delete(e)}function ef(e,t,a,o,n){const r=(t+.5)/e.count,i="horizontal"===e.orientation?r>.5?`top:auto;bottom:${Xm(1-t/e.count)};right:0`:`top:${Xm((t+1)/e.count)};right:0`:r>.5?`top:0;right:${Xm(1-t/e.count)}`:`top:0;left:${Xm((t+1)/e.count)}`;return q`<div class="hover-layer" aria-hidden="true">
    <div class="tooltip band-tooltip" style=${i}>
      <div class="tooltip-time"><span class="swatch" style="background:${n}"></span> ${a}</div>
      ${o.map(([e,t])=>q`<div class="tooltip-row">
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}function tf({ctx:e,geometry:t,categories:a,scale:o,content:n,label:r,overlay:i=W,hover:s=!1}){const l=Zm(e.raw),c="horizontal"===t.orientation,d=o.ticks.filter(e=>e>=o.domain[0]&&e<=o.domain[1]),u=l.grid?Z`<g class="grid">${d.map(e=>{const[a,o]=t.at(e,0);return c?Z`<line x1=${a} x2=${a} y1="0" y2=${t.height}></line>`:Z`<line x1="0" x2=${t.width} y1=${o} y2=${o}></line>`})}</g>`:W,h=l.axis&&d.length?q`<div class="cat-axis">
          ${c?W:q`<span class="cat-sizer" aria-hidden="true"
                  >${d.map(o.format).reduce((e,t)=>t.length>e.length?t:e,"")}</span
                >`}
          ${d.map(e=>{const a=(e=>{const[a,o]=t.at(e,0);return c?a/t.width:o/t.height})(e);return q`<span class="axis-label ${c?a<.04?"start":a>.96?"end":"":a<.08?"top":""}" style="${c?"left":"top"}:${Xm(a)}"
              >${o.format(e)}</span
            >`})}
        </div>`:W,p=s?function(e,t){const a=t=>{Jm.get(e.host)!==t&&(void 0===t?Jm.delete(e.host):Jm.set(e.host,t),e.requestUpdate())};return{move(e){const o=e.currentTarget.getBoundingClientRect(),n="horizontal"===t.orientation,r=n?o.height:o.width,i=n?e.clientY-o.top:e.clientX-o.left;r>0&&a(Math.min(t.count-1,Math.max(0,Math.floor(i/r*t.count))))},leave(){a(void 0)}}}(e,t):void 0,m=q`<div class="cat-labels">
    ${a.map(e=>q`<div class="entity cat-label" data-index=${e.index} tabindex="0" aria-label=${e.label}>
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
        <g class="cat-content">${n}</g>
      </svg>
      ${i}
    </div>
    ${c?h:m}
  </div>`}const af=r`
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
`;function of(e,t,a){const o=[];for(let n=0;n<e.length;n++){const r=e[n];if(null===r.v||!Number.isFinite(r.v))continue;const i=n+1<e.length?e[n+1].t:a;if(t&&n>0&&n===e.length-1&&r.t>=a)continue;const s=t?Math.max(1,Math.min(i,a)-r.t):1;o.push({t:r.t,v:r.v,w:s,real:!0!==r.carried})}return o}function nf(e){return[...e].sort((e,t)=>e.v-t.v)}function rf(e,t){const a=e.length;if(0===a)return Number.NaN;if(1===a)return e[0].v;const o=e.reduce((e,t)=>e+t.w,0),n=Math.min(1,Math.max(0,t))*o;let r=0,i=-1/0,s=e[0].v;for(const l of e){const e=r+l.w/2;if(n<=e)return i===-1/0?l.v:s+(l.v-s)*(n-i)/(e-i||1);r+=l.w,i=e,s=l.v}return e[a-1].v}function sf(e){if(0===e.length)return;const t=nf(e),a=rf(t,.25),o=rf(t,.5),n=rf(t,.75),r=1.5*(n-a),i=t.filter(e=>e.v>=a-r&&e.v<=n+r),s=t.reduce((e,t)=>e+t.w,0);return{n:e.length,min:t[0].v,max:t[t.length-1].v,q1:a,median:o,q3:n,low:i.length?i[0].v:a,high:i.length?i[i.length-1].v:n,mean:s>0?t.reduce((e,t)=>e+t.v*t.w,0)/s:o}}function lf(e){const t=e.length;if(0===t)return 1;const a=nf(e),o=a.reduce((e,t)=>e+t.w,0),n=a.reduce((e,t)=>e+t.v*t.w,0)/o,r=Math.sqrt(a.reduce((e,t)=>e+t.w*(t.v-n)**2,0)/o),i=rf(a,.75)-rf(a,.25),s=i>0?Math.min(r,i/1.34):r,l=a.reduce((e,t)=>e+t.w*t.w,0),c=l>0?o*o/l:t;let d=1/0;for(let h=1;h<a.length;h++){const e=a[h].v-a[h-1].v;e>0&&e<d&&(d=e)}const u=.9*s*Math.max(1,c)**-.2;return u>0?Math.max(u,d===1/0?0:d):d!==1/0?d:.01*Math.abs(n)||1}function cf(e,t,a,o=64){if(0===e.length)return[];let n=1/0,r=-1/0;for(const u of e)n=Math.min(n,u.v),r=Math.max(r,u.v);const i=Math.max(a[0],n-2*t),s=Math.min(a[1],r+2*t);if(!(s>i))return[];const l=Array.from({length:o+1},(e,t)=>i+(s-i)*t/o),c=function(e,t,a){const o=e.reduce((e,t)=>e+t.w,0);if(0===o||t<=0)return a.map(()=>0);const n=1/(o*t*Math.sqrt(2*Math.PI));return a.map(a=>{let o=0;for(const n of e){const e=(a-n.v)/t;e>-6&&e<6&&(o+=n.w*Math.exp(-.5*e*e))}return o*n})}(e,t,l),d=Math.max(...c);return l.map((e,t)=>({x:e,d:d>0?c[t]/d:0}))}function df(e){const t=43758.5453*Math.sin(12.9898*(e+1));return t-Math.floor(t)-.5}function uf(e,t){const a=e.filter(e=>e.real);if(a.length<=t)return a;const o=[];for(let n=0;n<t;n++)o.push(a[Math.floor(n*a.length/t)]);return o}const hf=["violin","raincloud"],pf=["none","day","week","month"],mf=.42;function ff(e){const t=e.shape??"violin";return{shape:t,box:!1!==e.box,readings:e.readings??"raincloud"===t,bandwidth:"number"==typeof e.bandwidth?e.bandwidth:void 0,split:e.split_by??"none"}}function gf(e,t,a,o){const n="month"===t?{month:"short",year:"numeric",timeZone:a.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:a.timeZone};try{return new Intl.DateTimeFormat(o?.locale?.language??o?.language??"en",n).format(e)}catch{return new Intl.DateTimeFormat("en",n).format(e)}}const vf=(e,t,a)=>e?Cn(jn(e.median,t.entity.decimals,a),t.entity.unit):"";function yf(e,t,a,o,n,r,i){const s=(e,t)=>e?zt(i,"violin_median",{value:vf(e,t,i)}):zt(i,"violin_none");if("none"===a.split)return e.map((e,a)=>{const o=sf(t[a]);return{series:e,readings:t[a],summary:o,name:e.entity.name,detail:s(o,e)}});const l=e.map((e,a)=>function(e,t,a){const o=t.slice(0,-1).map(()=>[]);for(const n of e)for(let e=0;e+1<t.length;e++){const r=t[e],i=t[e+1];if(!a){n.t>=r&&n.t<i&&o[e].push(n);continue}const s=Math.min(i,n.t+n.w)-Math.max(r,n.t);s<=0||o[e].push({t:Math.max(r,n.t),v:n.v,w:s,real:n.real&&n.t>=r})}return o}(t[a],o,n)),c=[];for(let d=0;d+1<o.length;d++)for(let t=0;t<e.length;t++){const n=l[t][d];if(0===n.length)continue;const u=sf(n),h=gf(o[d],a.split,r,i);c.push({series:e[t],readings:n,summary:u,name:e.length>1?`${h} · ${e[t].entity.name}`:h,detail:s(u,e[t])})}return c}function bf(e,t,a,o,n=0,r=.42){if(0===e.length)return"";const i=e.map(e=>t.at(e.x,a,n-e.d*r)),s=e.map(e=>t.at(e.x,a,o?n:n+e.d*r));return function(e,t){const a=e=>Math.round(100*e)/100;return`${[...e,...[...t].reverse()].map(([e,t],o)=>`${o?"L":"M"}${a(e)},${a(t)}`).join("")}Z`}(i,s)}function _f(e,t,a,o,n){const{summary:r,series:i}=e;if(!r)return Z``;const s=o.bandwidth??lf(e.readings),l=cf(e.readings,s,n),c="raincloud"===o.shape,d=Math.min(1,110/a.bandPx),u=Z`<path class="shape" d=${bf(l,a,t,c,c?-.04*d:0,(c?.44:mf)*d)}
    fill=${i.color} stroke=${i.color}></path>`,h=c?.08*d:0,p=function([e,t],[a,o]){return{x:Math.min(e,a),y:Math.min(t,o),width:Math.abs(a-e),height:Math.abs(o-t)}}(a.at(r.q1,t,h-.045*d),a.at(r.q3,t,h+.045*d)),[m,f]=a.at(r.low,t,h),[g,v]=a.at(r.high,t,h),y=o.box?Z`<g class="box">
        <line class="whisker" x1=${m} y1=${f} x2=${g} y2=${v} stroke=${i.color}></line>
        <rect class="iqr" x=${p.x} y=${p.y} width=${p.width} height=${p.height} fill=${i.color}></rect>
        <path class="median" d=${Dt([a.at(r.median,t,h)])}></path>
      </g>`:W,b=o.readings?Z`<path class="dots" stroke=${i.color} d=${Dt(uf(e.readings,300).map((e,o)=>a.at(e.v,t,d*function(e,t,a){return a?.3+.22*df(e):1.6*df(e)*mf*t}(o,function(e,t){if(0===e.length)return 0;let a=0;for(;a<e.length-1&&e[a+1].x<t;)a++;const o=e[a],n=e[Math.min(e.length-1,a+1)];return n.x===o.x?o.d:o.d+(n.d-o.d)*(t-o.x)/(n.x-o.x)}(l,e.v),c))))}></path>`:W;return Z`<g class="group">${u}${y}${b}</g>`}const xf=(e,t,a)=>{const o=e=>jn(e,t.entity.decimals,a),n=e=>Cn(e,t.entity.unit);return[[zt(a,"dist_median"),n(o(e.median))],[zt(a,"dist_middle"),n(`${o(e.q1)} – ${o(e.q3)}`)],[zt(a,"dist_range"),n(`${o(e.min)} – ${o(e.max)}`)],[zt(a,"dist_count"),jn(e.n,0,a)]]},wf=[...Ai,{name:"shape",path:["shape"],default:"violin"},{name:"box",path:["box"],default:!0},{name:"split_by",path:["split_by"],default:"none"},{name:"bandwidth",path:["bandwidth"]},...Im],$f=new Map;const kf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Mf={layout:"chart",group:"distribution",height:240,styles:r`
    ${En}
    ${xr}
    ${tr}
    ${af}
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
      <circle cx="34" cy="35.5" r="1.3" /><circle cx="42" cy="37" r="1.3" /></g>`,validate(e){if(bn(e),fr(e),qm(e),void 0!==e.shape&&!hf.includes(e.shape))throw new Error(`"shape" must be one of: ${hf.join(", ")}`);if(void 0!==e.split_by&&!pf.includes(e.split_by))throw new Error(`"split_by" must be one of: ${pf.join(", ")}`);for(const a of["box","readings"])if(void 0!==e[a]&&"boolean"!=typeof e[a])throw new Error(`"${a}" must be true or false`);const t=e.bandwidth;if(void 0!==t&&!("number"==typeof t&&Number.isFinite(t)&&t>0))throw new Error('"bandwidth" must be a number above 0')},editor:function(e){const t=ff(e.config),a=qi(`violin|${Ei(e.config)}`,e.hass,()=>[...ji(e.hass,e.config),{type:"grid",name:"",schema:[{name:"shape",selector:Si(e.hass,"shape",hf)},{name:"split_by",selector:Si(e.hass,"split_by",pf)}]},{type:"grid",name:"",schema:[{name:"box",selector:{boolean:{}}},{name:"readings",selector:{boolean:{}}}]},{name:"bandwidth",selector:{number:{min:0,mode:"box",step:"any"}}},...Bm(e.hass)]);return Zi(e,"chart",a,function(e){let t=$f.get(e);return t||(t=[...wf,{name:"readings",path:["readings"],default:"raincloud"===e}],$f.set(e,t)),t}(t.shape))},entityFields:()=>kf,disconnect(e){Mn(e),qn(e),Qm(e)},render(e){const t=Date.now(),a=_n(e,t),o=$n(a,e),n={...Kn(e.raw),header:"above"},r=Sn(a,e);if(r)return Qn(n,o,r);const i=ff(e.raw),s=Math.min(a.range.end,t),l="history"===a.source&&!a.group,c=a.series.map(e=>of(e.points,l,s)),d="none"===i.split?[]:bo(i.split,a.range.start,s,a.zone),u=yf(a.series,c,i,d,l,a.zone,e.hass);let h=1/0,p=-1/0;for(const k of u){if(!k.summary)continue;const e=i.bandwidth??lf(k.readings);h=Math.min(h,k.summary.min-e),p=Math.max(p,k.summary.max+e)}const m=Zm(e.raw),f=Wm(e,u.length,{domain:[0,1]}),g=Ym(h===1/0?void 0:[h,p],e.raw,Vm(f.valuePx,m.orientation),e.hass),v=Wm(e,u.length,g),y=Z`${u.map((e,t)=>_f(e,t,v,i,g.domain))}`,b=u.map(e=>({index:e.series.index,name:e.name,detail:e.detail,color:e.series.color,label:`${e.name}, ${e.detail}`})),_=mr(e.raw),x=_?Km(e.host):void 0,w=void 0===x?void 0:u[x],$=zt(e.hass,"chart_aria",{style:zt(e.hass,"raincloud"===i.shape?"violin_raincloud":"editor_style_violin"),names:a.series.map(e=>e.entity.name).join(", ")});return Qn(n,o,tf({ctx:e,geometry:v,categories:b,scale:g,content:y,label:$,hover:_,overlay:w?.summary&&void 0!==x?ef(v,x,w.name,xf(w.summary,w.series,e.hass),w.series.color):W}))}},zf=.75;function Sf(e){const t=e.map((e,t)=>t).sort((t,a)=>e[t].at-e[a].at||t-a),a=new Array(e.length).fill(0),o=[];let n=0;const r=function(e){let t=0;for(const a of e)a.r>t&&(t=a.r);return t}(e);for(const i of t){const{at:t,r:s}=e[i];for(;n<o.length&&t-o[n].at>s+r+zf;)n++;const l=o.slice(n).filter(e=>Math.abs(e.at-t)<e.r+s+zf),c=[0];for(const e of l){const a=e.r+s+zf,o=Math.sqrt(Math.max(0,a*a-(e.at-t)**2));c.push(e.y+o,e.y-o)}const d=c.sort((e,t)=>Math.abs(e)-Math.abs(t)||t-e).find(e=>l.every(a=>(a.at-t)**2+(a.y-e)**2>=(a.r+s+zf)**2-1e-6)),u=d??0;a[i]=u,o.push({at:t,r:s,y:u})}return a}function Af(e,t,a=1){let o=1,n=Sf(e);const r=t=>function(e,t){let a=0;return e.forEach((e,o)=>{a=Math.max(a,Math.abs(t[o])+e.r)}),a}(e.map(e=>({...e,r:e.r*t})),n),i=Math.min(...e.map(e=>e.r)),s=Math.min(1,a/Math.max(i,1e-9));for(let l=0;l<4;l++){const a=r(o);if(a<=t)return{offsets:n,scale:o};const i=Math.max(s,o*Math.sqrt(t/a)*.95);if(i>=o)break;o=i,n=Sf(e.map(e=>({...e,r:e.r*o})))}if(r(o)>t){const a=Math.max(0,t-Math.max(...e.map(e=>e.r*o))),r=Math.max(...n.map(Math.abs));r>0&&(n=n.map(e=>e*a/r))}return{offsets:n,scale:o}}const Ef=["value","time_of_day"];function jf(e){return{placeBy:e.place_by??"value",dot:"number"==typeof e.dot_size?e.dot_size:6,sized:!0===e.size_by_value}}const Cf=/^(binary_sensor|switch|input_boolean|light|fan|siren|automation)\./;function Nf(e,t,a){const o=Math.min(e.range.end,a);return e.series.map(a=>{const n="time_of_day"===t.placeBy&&Cf.test(a.entity.entityId);let r;r=n?function(e){const t=[];let a=null;for(const o of e)null!==o.v&&(1!==o.v||1===a||o.carried||t.push(o),a=o.v);return t}(a.points).map(e=>({t:e.t,v:1,w:1,real:!0})):of(a.points,"history"===e.source&&!e.group,o).filter(e=>e.real);const i=uf(r,400);return{series:a,positions:i.map(a=>"time_of_day"===t.placeBy?function(e,t){const a=po(e,t);return a.hour+a.minute/60+a.second/3600}(a.t,e.zone.timeZone):a.v),values:i.map(e=>e.v),total:r.length,events:n}})}function Lf(e,t,a,o,n){if(0===e.positions.length)return Z``;const r=n.dot/2,i=o.domain[1]-o.domain[0]||1,s=Math.min(...e.values),l=Math.max(...e.values),c=e.values.map(t=>{if(!n.sized||e.events)return r;const a=function(e,t,a,o){if(!(a>t))return o;const n=Math.min(1,Math.max(0,(e-t)/(a-t)));return o*Math.sqrt(.12+.88*n)}(t,s,l,r);return Math.max(.5,Math.round(a/r*6)/6)*r}),d=e.positions.map((e,t)=>({at:(e-o.domain[0])/i*a.valuePx,r:c[t]})),{offsets:u,scale:h}=Af(d,a.bandPx/2-1,1),p=new Map;return d.forEach((o,n)=>{const r=Math.round(o.r*h*2*100)/100,i=p.get(r)??[];i.push(a.at(e.positions[n],t,u[n]/a.bandPx)),p.set(r,i)}),Z`<g class="swarm entity" data-index=${e.series.index} stroke=${e.series.color}>
    ${[...p].map(([e,t])=>Z`<path class="dots" d=${Dt(t)} style="stroke-width:${e}px"></path>`)}
  </g>`}function Tf(e,t,a,o){const n=sf(e.positions.map((e,t)=>({t:t,v:e,w:1,real:!0})));if(!n)return[];const r=n=>a?t.format(n):Cn(jn(n,e.series.entity.decimals,o),e.series.entity.unit);return[[zt(o,"dist_count"),jn(e.total,0,o)],...e.positions.length<e.total?[[zt(o,"swarm_shown"),jn(e.positions.length,0,o)]]:[],[zt(o,"dist_median"),r(n.median)],[zt(o,"dist_middle"),`${r(n.q1)} – ${r(n.q3)}`],[zt(o,a?"swarm_earliest_latest":"swarm_lowest_highest"),`${r(n.min)} – ${r(n.max)}`]]}const Of=[...Ai,{name:"place_by",path:["place_by"],default:"value"},{name:"dot_size",path:["dot_size"],default:6},{name:"size_by_value",path:["size_by_value"],default:!1},...Im];function Ff(e){return e.map(e=>{const t=e;return t.schema?{...t,schema:t.schema.filter(e=>"value_min"!==e.name&&"value_max"!==e.name)}:e})}const Pf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Df={layout:"chart",group:"distribution",height:260,styles:r`
    ${En}
    ${xr}
    ${tr}
    ${af}
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
    </g>`,validate(e){if(bn(e),qm(e),void 0!==e.place_by&&!Ef.includes(e.place_by))throw new Error(`"place_by" must be one of: ${Ef.join(", ")}`);const t=e.dot_size;if(void 0!==t&&!("number"==typeof t&&t>=2&&t<=16))throw new Error('"dot_size" must be a number from 2 to 16');if(void 0!==e.size_by_value&&"boolean"!=typeof e.size_by_value)throw new Error('"size_by_value" must be true or false')},editor:function(e){const t=jf(e.config),a=qi(`beeswarm|${Ei(e.config)}|${t.placeBy}`,e.hass,()=>[...ji(e.hass,e.config),{name:"place_by",selector:Si(e.hass,"place_by",Ef)},{type:"grid",name:"",schema:[{name:"dot_size",selector:{number:{min:2,max:16,step:1,mode:"box",unit_of_measurement:"px"}}},{name:"size_by_value",selector:{boolean:{}}}]},..."value"===t.placeBy?Bm(e.hass):Ff(Bm(e.hass))]);return Zi(e,"chart",a,Of)},entityFields:()=>Pf,disconnect(e){Mn(e),qn(e),Qm(e)},render(e){const t=Date.now(),a=_n(e,t),o=$n(a,e),n={...Kn(e.raw),header:"above"},r=Sn(a,e);if(r)return Qn(n,o,r);const i=jf(e.raw),s=Nf(a,i,t),l=Zm(e.raw),c=Vm(Wm(e,s.length,{domain:[0,1]},96).valuePx,l.orientation);let d;if("time_of_day"===i.placeBy)d=Gm(c,e.hass);else{const t=s.flatMap(e=>e.positions);d=Ym(t.length?[Math.min(...t),Math.max(...t)]:void 0,e.raw,c,e.hass)}const u=Wm(e,s.length,d,96),h=Z`${s.map((e,t)=>Lf(e,t,u,d,i))}`,p=s.map(t=>{const a=function(e,t){if(0===e.total)return zt(t,"swarm_none");const a=jn(e.total,0,t);return zt(t,e.events?"swarm_events":"swarm_readings",{n:a})}(t,e.hass);return{index:t.series.index,name:t.series.entity.name,detail:a,color:t.series.color,label:`${t.series.entity.name}, ${a}`}}),m=mr(e.raw),f=m?Km(e.host):void 0,g=void 0===f?void 0:s[f],v=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_beeswarm"),names:a.series.map(e=>e.entity.name).join(", ")});return Qn(n,o,tf({ctx:e,geometry:u,categories:p,scale:d,content:h,label:v,hover:m,overlay:g&&g.total>0&&void 0!==f?ef(u,f,g.series.entity.name,Tf(g,d,"time_of_day"===i.placeBy,e.hass),g.series.color):W}))}},Uf=["median","mean","none"];function Hf(e,t){if(e.summary&&"none"!==t)return"mean"===t?e.summary.mean:e.summary.median}function If(e,t,a){return Cn(jn(t,e.series.entity.decimals,a),e.series.entity.unit)}function Bf(e,t,a,o){if(0===e.shown.length)return Z``;const n=function(e,t,a,o,n){const r=Math.max(0,a-o/Math.max(1,n));return e.map(e=>Vs(e,t)*r/2)}(e.shown.map(e=>e.t),e.series.index,o.jitter,o.dot,a.bandPx),r=e.shown.map((e,o)=>a.at(e.v,t,n[o])),i=Hf(e,o.marker),s=Math.max(o.jitter,.3)/2+.06,l=void 0===i?W:(()=>{const[e,n]=a.at(i,t,-s),[r,l]=a.at(i,t,s);return Z`<line class="strip-halo" x1=${e} y1=${n} x2=${r} y2=${l}></line>
            <line class="strip-marker ${o.marker}" x1=${e} y1=${n} x2=${r} y2=${l}></line>`})();return Z`<g class="strip entity" data-index=${e.series.index} stroke=${e.series.color}>
    <path class="dots" d=${Dt(r)} style="stroke-width:${o.dot}px"></path>
    ${l}
  </g>`}function qf(e,t){const a=e.summary;if(!a)return[];const o=a=>If(e,a,t);return[[zt(t,"dist_count"),jn(e.total,0,t)],...e.shown.length<e.total?[[zt(t,"swarm_shown"),jn(e.shown.length,0,t)]]:[],[zt(t,"dist_median"),o(a.median)],[zt(t,"strip_mean"),o(a.mean)],[zt(t,"dist_middle"),`${o(a.q1)} – ${o(a.q3)}`],[zt(t,"dist_range"),`${o(a.min)} – ${o(a.max)}`]]}const Zf=[...Ai,{name:"strip_marker",path:["marker"],default:"median"},{name:"strip_jitter",path:["jitter"],default:70},{name:"dot_size",path:["dot_size"],default:5},...Im];const Rf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Wf={layout:"chart",group:"distribution",height:240,styles:r`
    ${En}
    ${xr}
    ${tr}
    ${af}
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
  `,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)" fill-opacity="0.6">
      ${[8,12,15,17,19,20,22,24,27,31,36].map((e,t)=>Z`<circle cx=${e+6} cy=${12+7*t%5-2} r="2" />`)}
    </g>
    <g fill="var(--warning-color, #f59e0b)" fill-opacity="0.6">
      ${[24,29,32,35,37,39,41,44,48,53].map((e,t)=>Z`<circle cx=${e+2} cy=${29+3*t%5-2} r="2" />`)}
    </g>
    <path d="M26 6V18M41 23V35" stroke="var(--primary-text-color, #212121)" stroke-width="2" stroke-linecap="round" />`,validate(e){if(bn(e),qm(e),void 0!==e.marker&&!Uf.includes(e.marker))throw new Error(`"marker" must be one of: ${Uf.join(", ")}`);const t=e.jitter;if(void 0!==t&&!("number"==typeof t&&t>=0&&t<=100))throw new Error('"jitter" must be a number from 0 to 100');const a=e.dot_size;if(void 0!==a&&!("number"==typeof a&&a>=2&&a<=16))throw new Error('"dot_size" must be a number from 2 to 16')},editor:function(e){const t=qi(`strip_plot|${Ei(e.config)}`,e.hass,()=>[...ji(e.hass,e.config),{name:"strip_marker",selector:Si(e.hass,"strip_marker",Uf)},{type:"grid",name:"",schema:[{name:"strip_jitter",selector:{number:{min:0,max:100,step:5,mode:"slider",unit_of_measurement:"%"}}},{name:"dot_size",selector:{number:{min:2,max:16,step:1,mode:"box",unit_of_measurement:"px"}}}]},...Bm(e.hass)]);return Zi(e,"chart",t,Zf)},entityFields:()=>Rf,disconnect(e){Mn(e),qn(e),Qm(e)},render(e){const t=Date.now(),a=_n(e,t),o=$n(a,e),n={...Kn(e.raw),header:"above"},r=Sn(a,e);if(r)return Qn(n,o,r);const i={jitter:("number"==typeof(s=e.raw).jitter?s.jitter:70)/100,dot:"number"==typeof s.dot_size?s.dot_size:5,marker:s.marker??"median"};var s;const l=function(e,t){const a=Math.min(e.range.end,t);return e.series.map(t=>{const o=of(t.points,"history"===e.source&&!e.group,a).filter(e=>e.real).map(e=>({...e,w:1}));return{series:t,shown:uf(o,2e3),summary:sf(o),total:o.length}})}(a,t),c=Zm(e.raw),d=Vm(Wm(e,l.length,{domain:[0,1]},56).valuePx,c.orientation),u=l.flatMap(e=>e.summary?[e.summary.min,e.summary.max]:[]),h=Ym(u.length?[Math.min(...u),Math.max(...u)]:void 0,e.raw,d,e.hass),p=Wm(e,l.length,h,56),m=Z`${l.map((e,t)=>Bf(e,t,p,i))}`,f=l.map(t=>{const a=function(e,t,a){if(0===e.total)return zt(a,"swarm_none");const o=Hf(e,t);return void 0===o?zt(a,"swarm_readings",{n:jn(e.total,0,a)}):zt(a,"mean"===t?"strip_mean_value":"strip_median_value",{value:If(e,o,a)})}(t,i.marker,e.hass);return{index:t.series.index,name:t.series.entity.name,detail:a,color:t.series.color,label:`${t.series.entity.name}, ${a}`}}),g=mr(e.raw),v=g?Km(e.host):void 0,y=void 0===v?void 0:l[v],b=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_strip_plot"),names:a.series.map(e=>e.entity.name).join(", ")});return Qn(n,o,tf({ctx:e,geometry:p,categories:f,scale:h,content:m,label:b,hover:g,overlay:y&&y.total>0&&void 0!==v?ef(p,v,y.series.entity.name,qf(y,e.hass),y.series.color):W}))}};function Vf(e,t,a){const o=new Set,n=[t];for(;n.length;){const t=n.pop();if(t===a)return!0;o.has(t)||(o.add(t),n.push(...e.get(t)??[]))}return!1}function Yf(e){const t=new Map,a=[];for(const o of e)o.from&&o.to&&o.from!==o.to&&(Vf(t,o.to,o.from)||(t.set(o.from,[...t.get(o.from)??[],o.to]),a.push(o)));return a}function Gf(e){return null!==e&&Number.isFinite(e)&&e>0?e:0}function Xf(e,t){const a=Yf(e),o=function(e){const t=new Map;for(const a of e)t.set(a.from,t.get(a.from)??0),t.set(a.to,t.get(a.to)??0);for(let a=0;a<=t.size;a++){let a=!1;for(const o of e){const e=t.get(o.from)+1;e>t.get(o.to)&&(t.set(o.to,e),a=!0)}if(!a)break}return t}(a),n=new Map;for(const b of a)n.has(b.from)||n.set(b.from,n.size),n.has(b.to)||n.set(b.to,n.size);const r=a.filter(e=>Gf(e.value)>0),i=new Map,s=e=>{let t=i.get(e);return t||(t={name:e,order:n.get(e),column:o.get(e),value:0,in:0,out:0,x:0,y:0,h:0},i.set(e,t)),t},l=r.map(e=>{const t=Gf(e.value),a=s(e.from),o=s(e.to);return a.out+=t,o.in+=t,{flow:e,value:t,source:a,target:o,width:0,y0:0,y1:0}}),c=[...i.values()].sort((e,t)=>e.order-t.order);for(const b of c)b.value=Math.max(b.in,b.out);const d=[...new Set(c.map(e=>e.column))].sort((e,t)=>e-t);for(const b of c)b.column=d.indexOf(b.column);const u=d.length;if(0===u)return{nodes:c,links:l,columns:u};const h=d.map((e,t)=>c.filter(e=>e.column===t)),p=e=>t.above?.(e,u)??0,m=h.map(e=>e.reduce((e,t)=>e+p(t),0)+t.gap*(e.length-1)),f=h.map(e=>e.reduce((e,t)=>e+t.value,0)),g=Math.max(0,Math.min(...h.map((e,a)=>(t.height-m[a])/f[a]))),v=t.width-t.left-t.right-t.nodeWidth;h.forEach((e,a)=>{let o=(t.height-(f[a]*g+m[a]))/2;const n=t.left+(u>1?v*a/(u-1):v/2);for(const r of e)o+=p(r),r.x=n,r.y=o,r.h=r.value*g,o+=r.h+t.gap});const y=e=>e.y+e.h/2;for(const b of l)b.width=b.value*g;for(const b of c){const e=l.filter(e=>e.source===b).sort((e,t)=>y(e.target)-y(t.target));let t=b.y;for(const o of e)o.y0=t+o.width/2,t+=o.width;const a=l.filter(e=>e.target===b).sort((e,t)=>y(e.source)-y(t.source));t=b.y;for(const o of a)o.y1=t+o.width/2,t+=o.width}return{nodes:c,links:l,columns:u}}function Jf(e,t){return e.length*t*.58}function Kf(e,t,a){if(Jf(e,a)<=t)return e;const o=Math.floor(t/(.58*a))-1;return o>=1?`${e.slice(0,o).trimEnd()}…`:""}function Qf(e,t,a){const o=e.map((e,t)=>t).sort((t,a)=>e[t]-e[a]),n=[...e];let r=-1/0;for(const s of o)n[s]=Math.max(n[s],r+t,t/2),r=n[s];let i=1/0;for(const s of[...o].reverse())n[s]=Math.min(n[s],i-t,a-t/2),i=n[s];return n}const eg=["auto","source","target"],tg=10,ag=e=>"string"==typeof e?e.trim():"";const og=new WeakMap,ng=(e,t)=>e.column>0&&e.column<t-1,rg=(e,t)=>0===e.column?"left":ng(e,t)&&e.in>0&&e.out>0?"above":"right";function ig(e,t){return q`<div class="chart-message">${zt(t,e)}</div>`}const sg=[{name:"link_color",path:["link_color"],default:"auto"}];const lg=[{name:"from",path:["from"],default:""},{name:"to",path:["to"],default:""},{name:"flow_color",path:["color"]}],cg=[{type:"grid",name:"",schema:[{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}}]},{name:"flow_color",selector:{text:{}}}];const dg={layout:"chart",group:"totals",height:220,styles:r`
    ${En}
    ${xr}
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
    <rect x="54" y="20" width="4" height="16" rx="1" fill="var(--purple-color, #8b6cff)" />`,validate:function(e){if(void 0!==e.link_color&&!eg.includes(e.link_color))throw new Error(`"link_color" must be one of: ${eg.join(", ")}`);const t=[];(e.entities??[]).forEach((e,a)=>{if("object"!=typeof e||null===e)return;const o=e;for(const t of["from","to"])if(void 0!==o[t]&&"string"!=typeof o[t])throw new Error(`Entity ${a+1}: "${t}" must be a node name`);const n=ag(o.from),r=ag(o.to);if(n&&r&&n===r)throw new Error(`Entity ${a+1}: "from" and "to" must be different nodes`);n&&r&&t.push([n,r])});const a=function(e){const t=new Map;for(const[r,i]of e){if(r===i)return[r,i];t.set(r,[...t.get(r)??[],i])}const a=new Map,o=[],n=e=>{if("open"===a.get(e))return[...o.slice(o.indexOf(e)),e];if("done"!==a.get(e)){a.set(e,"open"),o.push(e);for(const a of t.get(e)??[]){const e=n(a);if(e)return e}o.pop(),a.set(e,"done")}};for(const r of t.keys()){const e=n(r);if(e)return e}}(t);if(a)throw new Error(`Flows can't go round in a loop: ${a.join(" → ")}`)},editor:function(e){const t=qi("sankey",e.hass,()=>[{name:"link_color",selector:Si(e.hass,"link_color",eg)}]);return Zi(e,"chart",t,sg)},entityFields:()=>({schema:cg,fields:lg}),disconnect(e){qn(e),og.delete(e)},render:function(e){const t=function(e){return e.items.flatMap((e,t)=>{const a=e.config,o=ag(a.from),n=ag(a.to);return o&&n?[{index:t,from:o,to:n,value:e.available?e.value:null}]:[]})}(e);if(!t.length)return ig("sankey_no_flows",e.hass);const a=e.items[t[0].index],o=t=>Cn(jn(t,a.decimals,e.hass),a.unit),n=Math.max(200,Bn(e)-32),{show:r}=e.config,i=function(e,t,a){const o=t<400?11:12,n=o+3,r=Xf(e,{width:t,height:200,left:0,right:0,nodeWidth:tg,gap:12}),i=r.columns,s=new Map;for(const b of r.nodes)s.set(b.column,(s.get(b.column)??0)+1);const l=Math.max(200,44*Math.max(0,...s.values())),c=.3*t,d=e=>({name:a.name?e.name:"",value:a.value?a.format(e.value):""}),u=e=>{const t=r.nodes.filter(t=>rg(t,i)===e&&!ng(t,i)).map(e=>Math.max(Jf(d(e).name,o),Jf(d(e).value,o)));return t.length&&Math.max(...t)>0?Math.min(c,Math.max(...t))+6+3:2},h=u("left"),p=u("right"),m=r.nodes.some(e=>"above"===rg(e,i)),f=m&&(a.name||a.value)?20:0,g=Xf(e,{width:t,height:l-f,left:h,right:p,nodeWidth:tg,gap:12,above:(e,t)=>"above"===rg(e,t)&&f?20:0});for(const b of g.nodes)b.y+=f;for(const b of g.links)b.y0+=f,b.y1+=f;const v=i>1?(t-h-p-tg)/(i-1):t,y=[];if(a.name||a.value){for(const a of g.nodes){const e=rg(a,i),n=d(a);if("above"===e){const r=a.x+5,i=Math.min(1.6*v,2*r,2*(t-r)),s=Jf(`${n.name} ${n.value}`,o)<=i||!n.name?n.value:"",l=Kf(n.name,s?i-Jf(` ${s}`,o):i,o);y.push({node:a,side:e,name:l,value:s,y:a.y-6});continue}const r=ng(a,i)?v-tg-12:("left"===e?h:p)-6-2,s=Jf(n.value,o)<=r?n.value:"";y.push({node:a,side:e,name:Kf(n.name,r,o),value:s,y:a.y+a.h/2})}const e=a.name&&a.value?2*n:n;for(let t=0;t<i;t++){const a=y.filter(e=>"above"!==e.side&&e.node.column===t);Qf(a.map(e=>e.y),e,l).forEach((e,t)=>a[t].y=e)}}return{width:t,height:l,font:o,layout:g,labels:y}}(t,n,{name:r.name,value:r.value,format:o}),{layout:s}=i;if(!s.links.length)return ig("sankey_nothing",e.hass);const l=function(e,t,a){const o=Yf(e),n=new Set(o.map(e=>e.to)),r=new Map;for(const c of o)for(const e of[c.from,c.to])r.has(e)||r.set(e,"");const i=e=>"target"===t||"auto"===t&&n.has(e.from)?e.to:e.from,s=new Set;for(const c of o){const e=a(c.index);e&&!s.has(i(c))&&(r.set(i(c),je(e)),s.add(i(c)))}[...r.keys()].forEach((e,t)=>{s.has(e)||r.set(e,je(vn[t%vn.length]))});const l=new Map;for(const c of o){const e=a(c.index);l.set(c.index,e?je(e):r.get(i(c)))}return{node:r,link:l}}(t,e.raw.link_color??"auto",t=>{const a=e.items[t].config.color;return"string"==typeof a&&a?a:void 0}),c=og.get(e.host),d=t=>()=>{void 0===t?og.delete(e.host):og.set(e.host,t),e.requestUpdate()},u=!0===e.hass.themes?.darkMode,h=t=>zt(e.hass,"sankey_flow",{from:t.flow.from,to:t.flow.to,value:o(t.value)}),p=zt(e.hass,"sankey_aria",{flows:s.links.map(h).join(", ")}),m=s.links.find(e=>e.flow.index===c),f=s.links.map(t=>{const a=e.items[t.flow.index],o=Se(a.config);return Z`<g
      class="entity flow ${o?"interactive":""} ${t===m?"active":""}"
      data-index=${t.flow.index}
      tabindex=${o?0:W}
      aria-label=${`${h(t)} (${a.name})`}
      @pointerenter=${d(t.flow.index)}
      @pointerleave=${d(void 0)}
      @focus=${d(t.flow.index)}
      @blur=${d(void 0)}
    >
      <title>${h(t)}</title>
      <path class="link" d=${function(e,t){const a=e.source.x+t,o=e.target.x,n=(a+o)/2,r=Math.max(1,e.width)/2,i=e=>Math.round(10*e)/10,[s,l,c,d]=[e.y0-r,e.y1-r,e.y1+r,e.y0+r].map(i);return`M${i(a)},${s}C${i(n)},${s} ${i(n)},${l} ${i(o)},${l}L${i(o)},${c}C${i(n)},${c} ${i(n)},${d} ${i(a)},${d}Z`}(t,tg)} fill=${l.link.get(t.flow.index)}></path>
    </g>`}),g=s.nodes.map(e=>Z`<rect class="node" x=${e.x} y=${e.y} width=${tg} height=${Math.max(2,e.h).toFixed(1)} rx="2"
        fill=${l.node.get(e.name)}></rect>`);return q`<div class="sankey-wrap">
    <svg
      class="sankey ${u?"dark":""} ${m?"hovering":""}"
      viewBox="0 0 ${i.width} ${i.height}"
      role="img"
      aria-label=${p}
    >
      <g class="links">${f}</g>
      <g class="nodes">${g}</g>
      <g class="labels" aria-hidden="true">${i.labels.map(e=>function(e,t){const a=e.node;if("above"===e.side)return Z`<text class="label" x=${a.x+5} y=${e.y} text-anchor="middle" font-size=${t}>
      <tspan class="name">${e.name}</tspan>${e.value?Z`<tspan class="value">${e.name?" ":""}${e.value}</tspan>`:W}
    </text>`;const o="left"===e.side?a.x-6:a.x+tg+6,n="left"===e.side?"end":"start",r=e.name&&e.value,i=t+3;return Z`<text class="label" x=${o} text-anchor=${n} font-size=${t}>
    ${e.name?Z`<tspan class="name" x=${o} y=${r?e.y-2:e.y+t/3}>${e.name}</tspan>`:W}
    ${e.value?Z`<tspan class="value" x=${o} y=${r?e.y-2+i:e.y+t/3}>${e.value}</tspan>`:W}
  </text>`}(e,i.font))}</g>
    </svg>
    ${function(e,t,a,o){if(!e)return W;const n=(e.source.x+tg+e.target.x)/2,r=(e.y0+e.y1)/2-e.width/2,i=Math.min(Math.max(n,70),t.width-70);return q`<div
    class="tooltip sankey-tip"
    aria-hidden="true"
    style="left:${i/t.width*100}%;top:${Math.max(r,0)/t.height*100}%"
  >
    <div class="tooltip-row">
      <span class="swatch" style="background:${a}"></span>
      <span class="tooltip-name">${e.flow.from} → ${e.flow.to}</span>
      <span class="tooltip-value">${o}</span>
    </div>
  </div>`}(m,i,m?l.link.get(m.flow.index):"",m?o(m.value):"")}
  </div>`}},ug=new Set(["unavailable","unknown"]);function hg(e){return void 0===e||""===e||ug.has(e)}function pg(e,t){const a=[];for(let o=0;o<e.length;o++){const n=e[o];if(n.t>=t)break;const r=Math.min(t,o+1<e.length?e[o+1].t:t);if(r<=n.t)continue;const i=a[a.length-1];i&&i.state===n.s&&i.end===n.t?i.end=r:a.push({start:n.t,end:r,state:n.s})}return a}const mg={on:"amber",open:"amber",opening:"amber",closing:"amber",home:"green",playing:"green",charging:"green",auto:"green",heat_cool:"green",heat:"#ff8100",heating:"#ff8100",preheating:"#ff8100",cool:"#2b9af9",cooling:"#2b9af9",dry:"#efbd07",drying:"#efbd07",fan_only:"#14b8a6",fan:"#14b8a6",paused:"purple",buffering:"purple",detected:"red",problem:"red",triggered:"red",unlocked:"red",jammed:"red",locked:"green",armed_home:"green",armed_away:"green",armed_night:"green",armed_vacation:"green",armed_custom_bypass:"green",arming:"amber",pending:"amber",cleaning:"primary",returning:"purple"},fg=new Set(["off","closed","not_home","away","idle","standby","docked","clear","disarmed","none","false"]),gg=["primary","purple","#14b8a6","#ec4899","amber","green","blue","red"];function vg(e){const t=Math.max(0,Math.round(e/1e3));if(t<60)return`${t} s`;const a=Math.round(t/60);if(a<60)return`${a} min`;const o=Math.floor(a/60);if(o<24){const e=a-60*o;return e?`${o} h ${String(e).padStart(2,"0")}`:`${o} h`}const n=Math.floor(o/24),r=o-24*n;return r?`${n} d ${r} h`:`${n} d`}function yg(e){const t=new Set;for(const a of e)if(!hg(a.state)){if(!Number.isFinite(Number(a.state))||""===a.state.trim())return!1;t.add(a.state)}return t.size>8}const bg=new Set(["source","group_by","aggregate"]),_g=[...Ai.filter(e=>!bg.has(e.name)),{name:"bar_labels",path:["bar_labels"],default:"state"},{name:"x_axis",path:["x_axis"],default:!0},{name:"grid_vertical",path:["gridlines","vertical"],default:!0},{name:"tooltip",path:["tooltip"],default:!0},{name:"timeline_legend",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];const xg={text:{}};function wg(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?Object.entries(t):[]}function $g(e,t){const a=new Set(wg(e).map(([e])=>e)),o=(e.entities??[]).map(e=>"string"==typeof e?e:e.entity),n=o.map(e=>t?.states[e]?.state).filter(e=>!!e);return[...n,"on","off","home","not_home","heat","idle"].find(e=>!a.has(e)&&"unavailable"!==e&&"unknown"!==e)??`state_${a.size+1}`}function kg(e){const t=wg(e.config),a=t=>zt(e.hass,t),o=t=>e.commit(function(e,t){const a={...e},o=t.filter(([e])=>""!==e.trim());return o.length?a.state_colors=Object.fromEntries(o.map(([e,t])=>[e.trim(),t])):delete a.state_colors,a}(e.config,t)),n=(e,a)=>n=>{n.stopPropagation();const r=String(n.detail?.value??""),i=t.map(e=>[...e]);1===a&&""===r.trim()||(i[e][a]=r,o(i))};return q`<div class="state-colors" data-section="state-colors">
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
    <div class="sc-title">${a("editor_state_colors")}</div>
    <div class="sc-help">${a("editor_state_colors_help")}</div>
    ${t.map(([r,i],s)=>q`<div class="sc-row">
          <span class="sc-swatch" style="background:${je(i)}"></span>
          <ha-selector
            data-role="state"
            .hass=${e.hass}
            .label=${a("editor_state_colors_state")}
            .selector=${xg}
            .value=${r}
            @value-changed=${n(s,0)}
          ></ha-selector>
          <ha-selector
            data-role="color"
            .hass=${e.hass}
            .label=${a("editor_state_colors_color")}
            .selector=${xg}
            .value=${i}
            @value-changed=${n(s,1)}
          ></ha-selector>
          <ha-icon-button
            class="sc-remove"
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            .label=${a("editor_state_colors_remove")}
            @click=${()=>o(t.filter((e,t)=>t!==s))}
          ></ha-icon-button>
        </div>`)}
    <button
      type="button"
      class="sc-add"
      @click=${()=>o([...t,[$g(e.config,e.hass),"primary"]])}
    >
      ${a("editor_state_colors_add")}
    </button>
  </div>`}const Mg=[{name:"timeline_group",path:["group"]}];const zg=["state","duration","both","none"],Sg={normal:30,compact:22},Ag={normal:24,compact:18};function Eg(e,t,a){const o=t.entity.stateObj??{entity_id:t.entity.entityId,state:a,attributes:{}},n=t.entity.config.attribute;try{return n?e.formatEntityAttributeValue?.(o,n,a)??a:e.formatEntityState?.({...o,state:a},a)??a}catch{return a}}function jg(e,t,a){return function(e,t,a){const o=a?.[e];if(o)return{color:je(o),quiet:!1,text:Le(o)};const n=fg.has(e)&&!Object.prototype.hasOwnProperty.call(mg,e),r=Object.prototype.hasOwnProperty.call(mg,e)?mg[e]:n?"grey":gg[function(e){let t=0;for(let a=0;a<e.length;a++)t=31*t+e.charCodeAt(a)>>>0;return t}(e)%gg.length],i=je(r);return{color:/^[a-z0-9_]+$/.test(e)&&/^[a-z0-9_]+$/.test(t)?`var(--state-${t}-${e}-color, ${i})`:i,quiet:n,text:n?"theme":Le(r)}}(t,e.domain,function(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?t:void 0}(a))}const Cg=e=>Math.round(1e4*e)/100+"%";function Ng(e,t,a,o){const n=a.raw.bar_labels??"state";return e.spans.map(r=>{if(hg(r.state))return W;const{left:i,width:s}=function(e,t){const a=t.end-t.start;if(!(a>0))return{left:0,width:0};const o=Math.max(t.start,e.start),n=Math.min(t.end,e.end);return{left:(o-t.start)/a,width:Math.max(0,n-o)/a}}(r,t.range);if(s<=0)return W;const l=r.state,c=jg(e,l,a.raw),d=function(e,t,a){const o=vg(a.end-a.start);return"state"===e?t:"duration"===e?o:"both"===e?`${t} · ${o}`:""}(n,Eg(a.hass,e.series,l),r),u=""!==d&&function(e){return 6.2*e.length+10}(d)<=s*o;return q`<div
      class="tl-bar ${c.quiet?"quiet":""} text-${c.text}"
      style="left:${Cg(i)};width:${Cg(s)};--tl-color:${c.color}"
    >
      ${u?q`<span class="tl-label">${d}</span>`:W}
    </div>`})}const Lg={layout:"chart",group:"history",height:200,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
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
    <rect x="44" y="27" width="16" height="7" rx="3" fill="var(--success-color, #1fae7a)" />`,validate:function(e){if(Eo(e.period),void 0!==e.source&&"history"!==e.source)throw new Error('"source" must be history: a state timeline reads states, which statistics don\'t keep');if(void 0!==e.group_by)throw new Error('"group_by" does not apply to a state timeline');if(void 0!==e.bar_labels&&!zg.includes(e.bar_labels))throw new Error(`"bar_labels" must be one of: ${zg.join(", ")}`);if(void 0!==e.x_axis&&"boolean"!=typeof e.x_axis)throw new Error('"x_axis" must be true or false');const t=e.gridlines;if(void 0!==t&&("object"!=typeof t||null===t||Array.isArray(t)))throw new Error('"gridlines" must have "vertical" (true or false)');if(void 0!==t?.vertical&&"boolean"!=typeof t.vertical)throw new Error('"gridlines.vertical" must be true or false');!function(e,t){if(void 0===e)return;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`${t} must map states to colours, like "on: amber"`);for(const[a,o]of Object.entries(e))if("string"!=typeof o||""===o.trim())throw new Error(`${t}: the colour for "${a}" must be text`)}(e.state_colors,'"state_colors"');for(const a of e.entities??[]){if("object"!=typeof a)continue;const e=a;if(void 0!==e.group&&"string"!=typeof e.group)throw new Error(`"group" of ${a.entity} must be text`)}fr(e),Jn(e)},editor:function(e){const t=qi(`timeline|${Ei(e.config)}`,e.hass,()=>{return[...(t=e.hass,a=e.config,ji(t,a).filter(e=>!bg.has(e.name??"")&&!(e.schema??[]).some(e=>bg.has(e.name??"")))),{name:"bar_labels",selector:Si(e.hass,"bar_labels",["state","duration","both","none"])},{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]},{name:"timeline_legend",selector:Si(e.hass,"timeline_legend",["above","hidden"])}];var t,a});return q`${Zi(e,"chart",t,_g)}${kg(e)}`},entityFields:function(e){return{schema:qi("timeline_entity",e,()=>[{name:"timeline_group",selector:{text:{}}}]),fields:Mg}},disconnect(e){Mn(e),qn(e),pr(e)},render(e){const t=Date.now(),a=_n(e,t,{text:!0}),o=Kn(e.raw),n=o.compact?"compact":"normal",r=$n(a,e),i=Math.min(a.range.end,t),s=a.series.map(e=>({series:e,spans:pg(e.points,i),domain:e.entity.entityId.split(".")[0],measurement:!1}));for(const S of s)S.measurement=yg(S.spans);const l="hidden"!==o.header,c=(e,t)=>q`<div class="frame ${o.compact?"compact":""}">${e}${t}</div>`,d="ready"!==a.status?Sn(a,e):s.every(e=>e.spans.every(e=>hg(e.state)))?q`<div class="chart-message">${zt(e.hass,"timeline_no_states")}</div>`:void 0;if(d)return c(r,d);const u=e.config.show.name,h=Bn(e),p=Math.max(0,...s.map(e=>e.series.entity.name.length)),m=u?Math.min(.35*h,7*p+10):0,f=Math.max(40,h-32-m),g=function(e,t,a){const o=Math.max(2,Math.min(8,Math.round(a/70))),n=Ga(Qa(t.hass)),{unit:r,ticks:i}=Ka(e.range,o,n);return{unit:r,ticks:i,x:Aa([e.range.start,e.range.end],[0,1]),offset:n}}(a,e,f),v=!1!==e.raw.x_axis,y=e.raw.gridlines?.vertical??!0,b=mr(e.raw),_=new Map(s.map(e=>[e.series.index,e])),x=function(e,t){const a=[],o=new Set;for(const n of e){const r=t(n);if(void 0!==r){if(!o.has(r)){o.add(r),a.push({heading:r});for(const o of e)t(o)===r&&a.push({item:o})}}else a.push({item:n})}return a}(a.series.map(e=>_.get(e.index)),e=>(e=>{const t=e.entity.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0})(e.series)),w=a.range.end-a.range.start,$=a.live&&a.range.end>t&&t>a.range.start,k=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_timeline"),names:s.map(e=>e.series.entity.name).join(", ")}),M=b?gr(e,a.range,[Array.from({length:241},(e,t)=>({t:a.range.start+w*t/240,v:null})),...s.map(e=>e.spans.map(e=>({t:e.start,v:null})))]):void 0,z=`--tl-row:${Sg[n]}px;--tl-heading:${Ag[n]}px`;return c(q`${r}${l?function(e,t){const a=new Map;for(const n of e)if(!n.measurement)for(const e of n.spans){if(hg(e.state))continue;const o=Eg(t.hass,n.series,e.state);a.has(o)||a.set(o,{label:o,color:jg(n,e.state,t.raw)})}if(0===a.size)return W;const o=[...a.values()];return q`<div class="tl-legend">
    ${[...o.filter(e=>!e.color.quiet),...o.filter(e=>e.color.quiet)].map(({label:e,color:t})=>q`<span class="tl-key"
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
          ${y?g.ticks.map(e=>q`<div class="tl-grid" style="left:${Cg(g.x(e))}"></div>`):W}
          ${x.map(t=>"heading"in t?q`<div class="tl-gap"></div>`:q`<div class="entity tl-row" data-index=${t.item.series.index}>
                  <div class="tl-track"></div>
                  ${t.item.measurement?q`<div class="tl-hint">${zt(e.hass,"timeline_measurement")}</div>`:q`<div class="tl-bars">${Ng(t.item,a,e,f)}</div>`}
                </div>`)}
          ${$?q`<div class="tl-now" style="left:${Cg(g.x(t))}" title=${zt(e.hass,"timeline_now")}></div>`:W}
          ${b?function(e,t,a,o){const n=hr(a.host);if(void 0===n)return W;const r=(n-t.range.start)/(t.range.end-t.range.start);if(!(r>=0&&r<=1))return W;const i=lr(r,o);return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Cg(r)}"></div>
    <div class="tooltip ${i}" style=${i.startsWith("pin")?"":`left:${Cg(r)}`}>
      <div class="tooltip-time">${no(n,a.hass)}</div>
      ${e.map(e=>{const t=function(e,t){return e.find(a=>t>=a.start&&(t<a.end||t===a.end&&a===e[e.length-1]))}(e.spans,n),o=t?.state,r=hg(o),i=r?void 0:jg(e,o,a.raw),s=void 0===o||""===o?"—":Eg(a.hass,e.series,o);return q`<div class="tooltip-row">
          <span class="swatch" style="background:${i?.color??"transparent"}"></span>
          <span class="tooltip-name">${e.series.entity.name}</span>
          <span class="tooltip-value"
            >${s}${t&&!r?q` <span class="tl-for"
                    >${zt(a.hass,"timeline_for",{duration:vg(t.end-t.start)})}</span
                  >`:W}</span
          >
        </div>`})}
    </div>
  </div>`}(s,a,e,f):W}
        </div>
        ${v?q`<div class="x-axis">
                ${g.ticks.map(t=>{const a=g.x(t);return q`<span class="axis-label ${a<.05?"start":a>.95?"end":""}" style="left:${Cg(a)}"
                    >${ro(t,g.unit,w,e.hass,g.offset)}</span
                  >`})}
              </div>`:W}
      </div>`)}},Tg={current:"current_temperature",target:"temperature",low:"target_temp_low",high:"target_temp_high",action:"hvac_action"},Og=Object.keys(Tg);const Fg=["heat","cool","dry","fan"],Pg={heating:"heat",preheating:"heat",cooling:"cool",defrosting:"cool",drying:"dry",fan:"fan"};function Dg(e){return void 0===e?void 0:Pg[e]}function Ug(e,t){let a=0,o=e.length;for(;a<o;){const n=a+o>>1;e[n].t<=t?a=n+1:o=n}return a>0?e[a-1]:void 0}const Hg=e=>(Math.round(100*e)/100).toString();const Ig=new Set(["source","group_by","aggregate"]),Bg=[...Ai.filter(e=>!Ig.has(e.name)),{name:"set_point",path:["set_point"],default:!0},{name:"shading",path:["shading"],default:!0},{name:"shade_fan",path:["shade_fan"],default:!1},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:Lt},{name:"current_color",path:["current_color"]},{name:"set_point_color",path:["set_point_color"]},{name:"heating_color",path:["heating_color"]},{name:"cooling_color",path:["cooling_color"]},...Oi,...Li];function qg(e){return ji(e.hass,e.config).filter(e=>!Ig.has(e.name??"")&&!(e.schema??[]).some(e=>Ig.has(e.name??"")))}const Zg="var(--state-climate-heat-color, #ff8100)",Rg="var(--state-climate-cool-color, #2b9af9)",Wg="var(--state-climate-dry-color, #efbd07)",Vg="var(--state-climate-fan_only-color, #8a8a8a)",Yg=["set_point","shading","shade_fan"],Gg=["current_color","set_point_color","heating_color","cooling_color"];function Xg(e,t,a){if(t.stateObj&&e?.formatEntityAttributeValue){const o=e.formatEntityAttributeValue(t.stateObj,Tg.action,a);if(o)return o}const o=zt(e,`climate_action_${a}`);return o===`climate_action_${a}`?a:o}function Jg(e,t,a,o,n){return"number"==typeof t?e.text(t):"number"==typeof a&&"number"==typeof o?zt(n,"climate_range",{low:jn(a,e.decimals,n),high:e.text(o)}):"—"}const Kg=e=>Math.round(1e4*e)/100+"%";function Qg(e,t,a,o,n,r,i){if(void 0===i)return W;const s=n.x(i)/fn;if(!(s>=0&&s<=1))return W;const l=lr(s,Zn(e)),c=Ug(a.current,i),d=Ug(a.action,i)?.s,u=Dg(d),h=e=>Ug(e,i)?.v??void 0,p=c&&null!==c.v?n.y(c.v)/gn:-1,m=(e,t,a)=>q`<div class="tooltip-row">
      ${e}<span class="tooltip-name">${t}</span><span class="tooltip-value">${a}</span>
    </div>`;return q`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Kg(s)}"></div>
    ${p>=0&&p<=1?q`<span
            class="hover-dot"
            style="left:${Kg(s)};top:${Kg(p)};background:${o.colors.current}"
          ></span>`:W}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${Kg(s)}`}>
      <div class="tooltip-time">${no(i,e.hass)}</div>
      ${m(q`<span class="swatch" style="background:${o.colors.current}"></span>`,t.name,r.text(c?.v))}
      ${o.setPoint?m(q`<span class="swatch set-point-swatch" style="border-color:${o.colors.setPoint}"></span>`,zt(e.hass,"climate_set_point"),Jg(r,h(a.target),h(a.low),h(a.high),e.hass)):W}
      ${d?m(q`<span
                class="swatch action-swatch"
                style=${u?`background:${o.colors[u]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
              ></span>`,Xg(e.hass,t,d),""):W}
    </div>
  </div>`}const ev=(e,t=!1)=>q`<div class="chart-message ${t?"error":""}">${e}</div>`;const tv={layout:"chart",group:"history",height:240,styles:r`
    ${En}
    ${Gn}
    ${xr}
    ${tr}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />`,validate(e){bn(e),Da(e),fr(e),Bt(e),Jn(e),function(e){if(void 0!==e.source&&"history"!==e.source)throw new Error("\"source\" must be history: long-term statistics don't keep a thermostat's set point or action");if(void 0!==e.group_by)throw new Error('"group_by" is not available on a climate chart');for(const t of Yg)if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of Gg)if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`)}(e)},editor:function(e){const t=qi(`climate|${Ei(e.config)}`,e.hass,()=>[...qg(e),{type:"grid",name:"",schema:[{name:"set_point",selector:{boolean:{}}},{name:"shading",selector:{boolean:{}}},{name:"shade_fan",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"curve",selector:Si(e.hass,"curve",dn)},{name:"line_width",selector:Qt}]},{type:"grid",name:"",schema:[{name:"current_color",selector:{text:{}}},{name:"set_point_color",selector:{text:{}}},{name:"heating_color",selector:{text:{}}},{name:"cooling_color",selector:{text:{}}}]},...Fi(e.hass),...Ti(e.hass)]);return Zi(e,"chart",t,Bg)},disconnect(e){Mn(e),qn(e),pr(e)},render(e){const t=Kn(e.raw),a=function(e){const t=(t,a)=>je(e[t]??a);return{setPoint:!1!==e.set_point,shading:!1!==e.shading,shadeFan:!0===e.shade_fan,colors:{current:t("current_color","primary"),setPoint:t("set_point_color","red"),heat:t("heating_color",Zg),cool:t("cooling_color",Rg),dry:Wg,fan:Vg}}}(e.raw),o=e.items[0],n=Eo(e.raw.period),r=xo(e.hass),i=Date.now(),s=Co(n,i,r,n.navigate?Lo(e.host,n):0),l={start:s.start,end:s.end},c=function(e,t){const a=t.config?.unit_system,o=e.config.unit??a?.temperature??"°C",n=e.config.decimals??1;return{unit:o,decimals:n,text:e=>"number"==typeof e&&Number.isFinite(e)?Cn(jn(e,n,t),o):"—"}}(o,e.hass),d=o.entityId.startsWith("climate."),u=function(e,t,a,o){const{show:n}=e.config;if(!n.name&&!n.value)return W;const r=t.stateObj?.attributes??{},i=t.entityId.startsWith("climate.")&&void 0!==t.stateObj&&!["unavailable","unknown"].includes(t.stateObj.state),s="string"==typeof r[Tg.action]?r[Tg.action]:void 0,l=Dg(s),c=(e,t,a)=>q`<div class="entity series-item" data-index="0" tabindex="0" aria-label=${`${t}, ${a}`}>
      ${e} ${n.name?q`<span class="series-name">${t}</span>`:W}
      ${n.value?q`<span class="series-value">${a}</span>`:W}
    </div>`;return q`<div class="series-header">
    ${c(q`<span class="swatch" style="background:${a.colors.current}"></span>`,t.name,i?o.text(r[Tg.current]):t.display)}
    ${a.setPoint&&i?c(q`<span class="swatch set-point-swatch" style="border-color:${a.colors.setPoint}"></span>`,zt(e.hass,"climate_set_point"),Jg(o,r[Tg.target],r[Tg.low],r[Tg.high],e.hass)):W}
    ${i&&s?q`<div
            class="entity series-item action-item"
            data-index="0"
            tabindex="0"
            aria-label=${Xg(e.hass,t,s)}
          >
            <span
              class="swatch action-swatch"
              style=${l?`background:${a.colors[l]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
            ></span>
            <span class="series-value action-value">${Xg(e.hass,t,s)}</span>
          </div>`:W}
  </div>`}(e,o,d?a:{...a,setPoint:!1},c);if(!d)return Qn({...t,header:"above"},u,ev(zt(e.hass,"climate_not_thermostat",{name:o.name})));const h=function(e){const t={};for(const a of Og)t[a]="action"===a?{entity:e,attribute:Tg[a],text:!0}:{entity:e,attribute:Tg[a]};return t}(o.entityId),p=cn(e.host,e.requestUpdate).get(e.hass,Object.values(h),l,"history",{live:s.live}),m=function(e,t,a,o){const n={};for(const r of Og){const i=e.get(o(t[r]))??[],s=i[i.length-1],l="action"===r?void 0!==s?.s:null!=s?.v;n[r]=s&&l&&s.t<a?[...i,{...s,t:a,carried:!0}]:i}return n}(p.data,h,Math.min(l.end,i),Go),f=$n({status:p.status,error:p.error,range:l,period:n,live:s.live,back:s.back,zone:r},e),g=f===W&&u===W?W:q`${f}${u}`,v=a.shadeFan?["heat","cool","dry","fan"]:["heat","cool","dry"],y=a.shading?function(e,t,a=Fg){const o=[];let n;for(const r of e){if(n&&r.s===n.action)continue;n&&(n.end=r.t,n.end>n.start&&o.push(n),n=void 0);const e=Dg(r.s);e&&a.includes(e)&&(n={kind:e,action:r.s,start:r.t,end:t})}return n&&t>n.start&&o.push({...n,end:Math.max(n.end,t)}),o}(m.action,Math.min(l.end,i),v):[],b=a.setPoint?[m.current,m.target,m.low,m.high]:[m.current];let _;if("loading"===p.status?_=ev(zt(e.hass,"chart_loading")):"error"===p.status?_=ev(zt(e.hass,"chart_error",{error:p.error??""}),!0):b.every(e=>e.every(e=>null===e.v))&&0===y.length&&(_=ev(zt(e.hass,"chart_no_data"))),_)return Qn("over"===t.header?{...t,header:"above"}:t,g,_);const x=Rn(e,l,za(b)),{scales:w}=x,$=e.raw.line_width??Lt,k=e.raw.curve??"smooth",M=Z`${y.map(e=>Z`<rect
        class="action-span action-${e.kind}"
        x=${w.x(e.start)}
        y="0"
        width=${Math.max(0,w.x(e.end)-w.x(e.start))}
        height=${gn}
        fill=${a.colors[e.kind]}
      ></rect>`)}`,z=function(e,t){const a=new Map(t.map(e=>[e.t,e.v]));return e.map(e=>{const t=a.get(e.t);return{t:e.t,v:null!==e.v&&"number"==typeof t?[e.v,t]:null}})}(m.low,m.high),S=a.setPoint?Z`
        <path class="range-band" d=${function(e,t,a){let o="",n=[];const r=e=>{if(!n.length)return;const r=n[n.length-1];if(e>r.t&&n.push({t:e,v:r.v}),n.length>1){const e=n.map(e=>[t(e.t),a(e.v[1])]),r=n.map(e=>[t(e.t),a(e.v[0])]);o+=`M${Hg(e[0][0])},${Hg(e[0][1])}`;for(let t=1;t<e.length;t++)o+=`H${Hg(e[t][0])}V${Hg(e[t][1])}`;o+=`V${Hg(r[r.length-1][1])}`;for(let t=r.length-2;t>=0;t--)o+=`V${Hg(r[t][1])}H${Hg(r[t][0])}`;o+="Z"}n=[]};for(const i of e)null===i.v?r(i.t):n.push({t:i.t,v:i.v});return n.length&&r(e[e.length-1].t),o}(z,w.x,w.y)} fill=${a.colors.setPoint}></path>
        ${[m.target,m.low,m.high].map(e=>Z`<path class="set-point" d=${function(e,t){return function(e){const t=[];let a=[];const o=e=>{if(!a.length)return;const o=a[a.length-1];e>o.t&&a.push({t:e,v:o.v}),t.push(a),a=[]};for(const r of e){if(null===r.v){o(r.t);continue}const e=a[a.length-1];e&&e.v===r.v||a.push({t:r.t,v:r.v})}const n=e[e.length-1];return a.length&&o(n.t),t}(e).map(e=>pn(e.map(e=>[t.x(e.t),t.y(e.v)]),"step")).join("")}(e,w)} fill="none" stroke=${a.colors.setPoint}></path>`)}`:W,A=mn(io(m.current,500)).map(e=>pn(e.map(e=>[w.x(e.t),w.y(e.v)]),k)).join(""),E=Z`${M}${S}<path
      class="current"
      d=${A}
      fill="none"
      stroke=${a.colors.current}
      style="stroke-width:${$}px"
    ></path>`,j=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_climate"),names:o.name}),C=mr(e.raw);return Qn(t,g,Yn({axes:x,ctx:e,content:E,label:j,overlay:q`${"over"===t.header?er(g):W}
        ${C?Qg(e,o,m,a,w,c,hr(e.host)):W}`,hover:C?gr(e,l,[m.current,m.target,m.low,m.high,m.action]):void 0}))}},av=[4,8,16];function ov(e,t){const a=360/t;return Math.floor(Do(e)/a+.5)%t}function nv(e,t){return Oo[e*(16/t)%16]}function rv(e,t,a,o){if(t<0)return null;const n=e[t];return a-n.t<o?n.v:null}function iv(e,t){let a=0;for(let o=0;o<t.length&&t[o]<=e;o++)a=o;return a}const sv=e=>Math.round(100*e)/100||0;function lv(e,t){return[sv(e*Math.sin(t)),sv(-e*Math.cos(t))]}const cv=Ai.filter(e=>"group_by"!==e.name&&"aggregate"!==e.name).map(e=>"period_last"===e.name?{...e,default:30}:"period_unit"===e.name?{...e,default:"day"}:e),dv=[...cv,{name:"sectors",path:["sectors"],default:"16"},{name:"calm",path:["calm"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function uv(e,t){if(void 0===t)return zt(e.hass,"editor_wind_none");const a="string"==typeof t?t:t.entity;return("string"==typeof t?void 0:t.name)??e.hass?.states[a]?.attributes?.friendly_name??a}const hv={last:30,unit:"day"};function pv(e){const t=e.period;return null==t?Eo(hv):"object"!=typeof t||Array.isArray(t)?Eo(t):Eo({...hv,...t})}function mv(e){const t=e.sectors;if(null==t||""===t)return 16;const a="string"==typeof t?Number(t):t;if(!av.includes(a))throw new Error(`"sectors" must be one of: ${av.join(", ")}`);return a}function fv(e){const t=e.calm;if(null==t||""===t)return;const a="string"==typeof t?Number(t):t;if("number"!=typeof a||!Number.isFinite(a)||a<0)throw new Error('"calm" must be a number of 0 or more');return a}const gv=["color-mix(in srgb, var(--primary-color, #2f6fe4) 35%, var(--card-background-color, #fff))","color-mix(in srgb, var(--primary-color, #2f6fe4) 62%, var(--card-background-color, #fff))","var(--primary-color, #2f6fe4)","color-mix(in srgb, var(--primary-color, #2f6fe4) 68%, var(--primary-text-color, #212121))","color-mix(in srgb, var(--purple-color, #8b6cff) 80%, var(--primary-text-color, #212121))"],vv=(e,t)=>jn(e,Number.isInteger(e)?0:1,t.hass);function yv(e,t,a){return Number.isFinite(e)?void 0===t?`${vv(e,a)}+`:`${vv(e,a)}–${vv(t,a)}`:void 0===t?"":`< ${vv(t,a)}`}function bv(e,t,a=!1){const o=100*e;return 0===o?`${jn(0,0,t.hass)}%`:`${jn(o,a||o<1?1:0,t.hass)}%`}const _v=new WeakMap;function xv(e,t){_v.get(e.host)!==t&&(void 0===t?_v.delete(e.host):_v.set(e.host,t),e.requestUpdate())}const wv=124;function $v(e,t,a,o){const{rose:n,n:r,bands:i,rings:s}=e,l=2*Math.PI/r,c=.09*l,d=mr(o.raw),u=n.sectors.map((a,s)=>{if(n.totals[s]<=0)return W;const u=s*l-l/2+c,h=s*l+l/2-c;let p=0;const m=a.map((t,a)=>{if(t<=0)return W;const o=function(e,t,a,o){if(t<=e||o<=a)return"";const n=o-a>Math.PI?1:0,[r,i]=lv(t,a),[s,l]=lv(t,o),c=`M${r} ${i}A${t} ${t} 0 ${n} 1 ${s} ${l}`;if(e<=0)return`${c}L0 0Z`;const[d,u]=lv(e,o),[h,p]=lv(e,a);return`${c}L${d} ${u}A${e} ${e} 0 ${n} 0 ${h} ${p}Z`}(e.radius(p),e.radius(p+t),u,h);return p+=t,Z`<path d=${o} style="fill:${i[a].color}"></path>`}),f=nv(s,r),g=t.index>=0;return Z`<g
      class="petal ${g?"entity":""}"
      data-index=${g?t.index:W}
      data-sector=${s}
      tabindex=${g||d?0:W}
      aria-label=${`${f} ${bv(n.totals[s],o,!0)}`}
      @pointerenter=${d?()=>xv(o,s):W}
      @pointerleave=${d?()=>xv(o,void 0):W}
      @focus=${d?()=>xv(o,s):W}
      @blur=${d?()=>xv(o,void 0):W}
    >${m}</g>`}),h=function(e){const t=e.length;let a=0,o=1/0;for(let n=0;n<t;n++){const r=(Math.floor(t/8)+n)%t,i=Math.max(e[r],e[(r+1)%t]);i<o-1e-9&&(a=r,o=i)}return 2*(a+.5)*Math.PI/t}(n.totals),p=["N","E","S","W"].map((e,t)=>{const[a,o]=lv(113,t*Math.PI/2);return Z`<text class="compass ${"N"===e?"north":""}" x=${a} y=${o+4}>${e}</text>`});return q`<svg class="rose" viewBox="${-124} ${-124} ${248} ${248}" role="img" aria-label=${a}>
    ${s.map(t=>Z`<circle class="ring" r=${e.radius(t/100)}></circle>`)}
    <circle class="rim" r=${102}></circle>
    <line class="spoke" x1="0" y1=${-102} x2="0" y2=${102}></line>
    <line class="spoke" x1=${-102} y1="0" x2=${102} y2="0"></line>
    <g class="petals">${u}</g>
    <circle class="calm-circle" r=${9}></circle>
    ${p}
    ${s.map(t=>{const[a,n]=lv(e.radius(t/100),h),r=Math.sin(h)>=0?"start":"end";return Z`<text class="ring-label" x=${a+("start"===r?3:-3)} y=${n} text-anchor=${r}>${jn(t,Number.isInteger(t)?0:1,o.hass)}%</text>`})}
  </svg>`}function kv(e,t,a,o){const n=void 0!==a&&a.index>=0;return q`<div
    class="stat stat-${o} ${n?"entity":""}"
    data-index=${n?a.index:W}
    tabindex=${n?0:W}
  >
    <span class="stat-label">${e}</span>
    <span class="stat-value">${t}</span>
  </div>`}function Mv(e,t,a,o){const n=(e,t)=>zt(o.hass,e,t),{rose:r}=e,i=r.prevailing<0?"—":`${nv(r.prevailing,e.n)} · ${bv(r.totals[r.prevailing],o)}`,s=e=>null===e?"—":Cn(jn(e,a?.decimals??1,o.hass),a?.unit??"");return q`<div class="readout">
    <div class="stats">
      ${kv(n("wind_prevailing"),i,t.direction,"prevailing")}
      ${a?q`${kv(n("wind_mean_speed"),s(r.meanSpeed),t.speed,"mean")}
            ${kv(n("wind_strongest"),s(function(e){let t=null;for(const a of e){const e="number"==typeof a.max&&Number.isFinite(a.max)?a.max:a.v;null!==e&&(null===t||e>t)&&(t=e)}return t}(a.points)),t.speed,"strongest")}
            ${kv(n("wind_calm"),bv(r.calm,o),t.speed,"calm")}`:W}
    </div>
    ${a?q`<div class="speed-legend">
            <div class="stat-label">${a.unit?n("wind_speed_unit",{unit:a.unit}):n("wind_speed")}</div>
            <div class="keys">
              ${e.bands.map(e=>q`<div class="key">
                    <span class="key-swatch" style="background:${e.color}"></span>
                    <span class="key-label">${e.label}</span>
                  </div>`)}
            </div>
          </div>`:W}
  </div>`}const zv={layout:"chart",group:"distribution",height:280,styles:r`
    ${En}
    ${xr}
    ${tr}
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
    <path d="M32 20 L40 24 A9 9 0 0 1 37 27 Z" fill="var(--primary-color, #03a9f4)" opacity="0.4" />`,validate(e){bn(e),pv(e),fr(e),Jn(e),mv(e),fv(e)},editor:function(e){const t=qi(`wind_rose|${Ei(e.config)}`,e.hass,()=>[...ji(e.hass,e.config).filter(e=>!e.schema?.some(e=>"group_by"===e.name)),{type:"grid",name:"",schema:[{name:"sectors",selector:Si(e.hass,"sectors",av.map(String))},{name:"calm",selector:{number:{min:0,mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]),a=e.config.entities??[],o={...e,config:(n=e.config,"number"==typeof n.sectors?{...n,sectors:String(n.sectors)}:n),commit:t=>e.commit(function(e){if("string"!=typeof e.sectors)return e;const t=Number(e.sectors);return{...e,sectors:Number.isFinite(t)?t:e.sectors}}(t))};var n;const r="margin: 0 0 12px; color: var(--secondary-text-color); font-size: 0.875em; line-height: 1.4;";return q`<p class="wind-roles" style=${r}>
      ${zt(e.hass,"editor_wind_roles")}
      <br /><b
        >${zt(e.hass,"editor_wind_now",{direction:uv(e,a[0]),speed:uv(e,a[1])})}</b
      >
    </p>
    ${"statistics"===e.config.source?q`<p class="wind-statistics" style=${r}>${zt(e.hass,"editor_wind_statistics")}</p>`:W}
    ${Zi(o,"chart",t,dv)}`},disconnect(e){Mn(e),_v.delete(e)},render(e){const t={...Kn(e.raw),header:"above"},a=function(e){const t=e.config.entities.length?e.config.entities:e.items.map(e=>e.config),a=t=>t&&{id:t.entity,entity:t,index:e.items.findIndex(e=>e.entityId===t.entity)};return{direction:a(t[0]),speed:a(t[1])}}(e),o=a.direction;if(!o)return q``;const n=function(e,t,a,o=Date.now()){const n=pv(e.raw),r=e.raw.source??"history",i=xo(e.hass),s=Co(n,o,i,n.navigate?Lo(e.host,n):0),l={start:s.start,end:s.end},c=[{entity:t.id,attribute:t.entity.attribute,bearing:!0},...a?[{entity:a.id,attribute:a.entity.attribute}]:[]],d="statistics"===r?function(e){return{period:e.end-e.start<=1728e5?"5minute":"hour",types:["mean","max"],value:"mean"}}(l):void 0,u=d?tn[d.period]:1/0,h=d?{start:l.start-u,end:l.end}:l,p=cn(e.host,e.requestUpdate).get(e.hass,c,h,r,{live:s.live,statistics:d}),m=e=>p.data.get(Go(e))??[],f=m(c[0]),g=a?m(c[1]):void 0;return{frame:{status:p.status,error:p.error,range:l,period:n,source:r,series:[],live:s.live,back:s.back,zone:i},direction:f,speed:g?.some(e=>null!==e.v)?g:void 0,until:Math.min(l.end,o),maxHold:u}}(e,o,a.speed),{frame:r}=n,i=$n(r,e),s=q`<div class="chart-message">${zt(e.hass,"chart_no_data")}</div>`,l="ready"!==r.status?Sn(r,e):n.direction.every(e=>null===e.v)?s:void 0;if(l)return Qn(t,i,l);const c=mv(e.raw),d=n.speed?a.speed:void 0,u=d?d.entity.unit??(d.entity.attribute?"":String(e.hass.states[d.id]?.attributes?.unit_of_measurement??"")):void 0,h=function(e){switch((e??"").trim().toLowerCase()){case"km/h":case"kmh":case"kph":return{from:[0,12,20,29,39],calm:1.8};case"mph":return{from:[0,8,13,19,25],calm:1.1};case"kn":case"kt":case"kts":case"knot":case"knots":return{from:[0,7,11,17,22],calm:1};case"ft/s":return{from:[0,10,20,30,40],calm:1.6};default:return{from:[0,3,6,9,12],calm:.5}}}(u),p=d?function(e,t,a){return e!==st&&e.length>0?e.map((t,o)=>({from:t.from,color:je(t.color),label:t.label??yv(t.from,e[o+1]?.from,a)})):t.map((e,o)=>({from:e,color:gv[o%gv.length],label:yv(e,t[o+1],a)}))}(cs(d.entity.severity,e.hass),h.from,e):[{from:0,color:"var(--primary-color, #2f6fe4)",label:""}],m=d?fv(e.raw)??h.calm:0,f=function(e,t,a,o=1/0){const n=new Set([a]);for(const c of t?[e,t]:[e])for(const e of c)n.add(e.t),Number.isFinite(o)&&n.add(e.t+o);const r=[...n].filter(e=>e<=a).sort((e,t)=>e-t),i=[];let s=-1,l=-1;for(let c=0;c+1<r.length;c++){const a=r[c],n=r[c+1]-a;for(;s+1<e.length&&e[s+1].t<=a;)s++;const d=rv(e,s,a,o);if(null===d)continue;let u=null;if(t){for(;l+1<t.length&&t[l+1].t<=a;)l++;if(u=rv(t,l,a,o),null===u)continue}const h=i[i.length-1];h&&h.dir===d&&h.speed===u?h.ms+=n:i.push({dir:d,speed:u,ms:n})}return i}(n.direction,n.speed,n.until,n.maxHold),g=function(e,t,a,o=0){const n=Math.max(1,a.length),r=Array.from({length:t},()=>new Array(n).fill(0));let i=0,s=0,l=0,c=0;for(const m of e){if(i+=m.ms,null!==m.speed&&(l+=m.ms,c+=m.speed*m.ms,m.speed<o)){s+=m.ms;continue}const e=null===m.speed?0:iv(m.speed,a);r[ov(m.dir,t)][e]+=m.ms}const d=e=>i>0?e/i:0,u=r.map(e=>e.map(d)),h=u.map(e=>e.reduce((e,t)=>e+t,0));let p=-1;return h.forEach((e,t)=>{e>0&&(p<0||e>h[p])&&(p=t)}),{total:i,calm:d(s),sectors:u,totals:h,prevailing:p,meanSpeed:l>0?c/l:null}}(f,c,p.map(e=>e.from),m);if(g.total<=0)return Qn(t,i,s);const v=function(e){if(!(e>0))return[];const t=e/3,a=10**Math.floor(Math.log10(t)),o=[1,2,2.5,5,10].map(e=>e*a).find(e=>e>=t-1e-9)??10*a,n=Math.max(1,Math.ceil(e/o-1e-9));return Array.from({length:n},(e,t)=>Math.round((t+1)*o*1e3)/1e3)}(100*Math.max(0,...g.totals)),y=(v[v.length-1]??100)/100,b={rose:g,n:c,bands:p,rings:v,radius:e=>10+e/y*90},_=t=>bv(t,e),x={direction:g.prevailing<0?"":nv(g.prevailing,c),share:g.prevailing<0?"":_(g.totals[g.prevailing]),calm:_(g.calm)},w=zt(e.hass,g.prevailing<0?"wind_aria_still":d?"wind_aria_calm":"wind_aria",x),$=d?{unit:u??"",decimals:d.index>=0?e.items[d.index].decimals:1,points:n.speed??[]}:void 0;return Qn(t,i,q`<div class="wind">
        <div class="rose-wrap">
          ${$v(b,o,w,e)} ${function(e,t,a){const o=_v.get(a.host);if(!(void 0!==o&&mr(a.raw)&&e.rose.totals[o]>0))return W;const n=2*o*Math.PI/e.n,[r,i]=lv(e.radius(e.rose.totals[o]),n),s=r>0?"left":"right",l=void 0===t?[{color:e.bands[0].color,name:zt(a.hass,"wind_share"),share:e.rose.totals[o]}]:e.rose.sectors[o].map((a,o)=>({color:e.bands[o].color,name:Cn(e.bands[o].label,t),share:a})).filter(e=>e.share>0);return q`<div class="hover-layer" aria-hidden="true">
    <div
      class="tooltip rose-tip ${s}"
      style="left:${(r+wv)/248*100}%;top:${(i+wv)/248*100}%"
    >
      <div class="tooltip-time">${nv(o,e.n)} · ${bv(e.rose.totals[o],a,!0)}</div>
      ${l.map(e=>q`<div class="tooltip-row">
            <span class="swatch" style="background:${e.color}"></span>
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${bv(e.share,a,!0)}</span>
          </div>`)}
    </div>
  </div>`}(b,$?$.unit:void 0,e)}
        </div>
        ${Mv(b,{direction:o,speed:d},$,e)}
      </div>`)}},Sv=2*Math.PI,Av=1440,Ev=6e4,jv=["on","open","opening","closing","home","playing","heating","cooling","drying","active","running","cleaning","detected"],Cv=new Set(["unavailable","unknown"]);function Nv(e){return void 0===e||""===e||Cv.has(e)}function Lv(e,t,a,o){const n=e[e.length-1];n&&n.end===t?n.end=a:e.push(o?{start:t,end:a,carried:o}:{start:t,end:a})}function Tv(e,t){const a=[];for(const o of e){const e=Math.max(t.start,o.start),n=Math.min(t.end,o.end);if(n<=e)continue;const r=!0===o.carried||o.start<t.start;a.push(r?{start:e,end:n,carried:r}:{start:e,end:n})}return a}function Ov(e){return e.filter(e=>!e.carried).length}function Fv(e,t,a){return(e+mo(e,a)-(t+mo(t,a)))/Ev}function Pv(e,t,a){const o=e.start,n=e.end,r=mo(o,a),i=mo(Math.max(o,n-1e3),a),s=t+mo(t,a),l=(e,t)=>(e=>Math.min(Av,Math.max(0,e)))((e+t-s)/Ev);if(r===i)return[[l(o,r),l(n,r)]];const c=function(e,t,a){const o=mo(e,a);for(;t-e>1e3;){const n=Math.floor((e+t)/2);mo(n,a)===o?e=n:t=n}return 1e3*Math.floor(t/1e3)}(o,n-1e3,a);return[[l(o,r),l(c,r)],[l(c,i),l(n,i)]].filter(([e,t])=>t>e)}function Dv(e){return e/Av*Sv}function Uv(e,[t,a]){const o=Math.max(0,Math.ceil(t-.5)),n=Math.min(Av,Math.ceil(a-.5));for(let r=o;r<n;r++)e[r]=1}const Hv=[15,30,60];function Iv(e,t){const a=t*Ev,o=[];for(let n=e.start;n<e.end;n+=a)o.push(n);return o.push(e.end),o}const Bv=new Set(["sum","change"]);function qv(e,t){if("max"===t)return Math.max(...e);if("min"===t)return Math.min(...e);if("first"===t)return e[0];if("last"===t)return e[e.length-1];const a=e.reduce((e,t)=>e+t,0);return Bv.has(t)?a:a/e.length}function Zv(e){return Bv.has(e)}function Rv(e){const t=Math.max(0,Math.round(e/Ev)),a=Math.floor(t/60),o=t-60*a;return 0===a?`${o} m`:o?`${a} h ${o} m`:`${a} h`}function Wv(e,t){return[Vv(e*Math.sin(t)),Vv(-e*Math.cos(t))]}function Vv(e){return Math.round(100*e)/100||0}function Yv(e,t,a,o){if(t<=0||o<=a)return"";const n=Math.max(0,e);if(o-a>=Sv-1e-6){const e=(e,t)=>{const[a,o]=Wv(e,0),[n,r]=Wv(e,Math.PI);return`M${a} ${o}A${e} ${e} 0 1 ${t} ${n} ${r}A${e} ${e} 0 1 ${t} ${a} ${o}Z`};return n>0?`${e(t,1)}${e(n,0)}`:e(t,1)}const r=o-a>Math.PI?1:0,[i,s]=Wv(t,a),[l,c]=Wv(t,o),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===n)return`${d}L0 0Z`;const[u,h]=Wv(n,o),[p,m]=Wv(n,a);return`${d}L${u} ${h}A${n} ${n} 0 ${r} 0 ${p} ${m}Z`}const Gv=[{name:"days",path:["days"],default:1},{name:"period_offset",path:["period","offset"],default:0},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"center",path:["center"],default:"total"},{name:"bucket",path:["bucket"],default:"60"},{name:"aggregate",path:["aggregate"],default:"auto"},{name:"tooltip",path:["tooltip"],default:!0}];const Xv=[{type:"grid",name:"",schema:[{name:"ring_color",selector:{text:{}}},{name:"active",selector:{text:{multiple:!0}}}]}],Jv=[{name:"ring_color",path:["color"]},{name:"active",path:["active"]}];const Kv=["total","now","none"],Qv=new Set(["alarm_control_panel","automation","binary_sensor","calendar","climate","cover","device_tracker","fan","humidifier","input_boolean","lawn_mower","light","lock","media_player","person","remote","schedule","script","siren","switch","timer","vacuum","valve","water_heater"]),ey=e=>e.split(".")[0];function ty(e){const t=e.config.active;if("string"==typeof t&&""!==t.trim()||Array.isArray(t)&&t.length>0)return"state";if(Qv.has(ey(e.entityId)))return"state";const a=e.stateObj?.attributes??{};if(!e.config.attribute&&(void 0!==a.unit_of_measurement||void 0!==a.state_class))return"numeric";const o=e.stateObj?.state,n="string"==typeof o&&""!==o.trim()&&Number.isFinite(Number(o));return e.available&&n?"numeric":"state"}function ay(e,t){return e.config.attribute?e.config.attribute:"state"===t&&"climate"===ey(e.entityId)?"hvac_action":void 0}function oy(e,t){if(void 0!==t.aggregate)return t.aggregate;const a=e.stateObj?.attributes?.state_class;return"total_increasing"===a||"total"===a?"change":"mean"}function ny(e,t,a,o){const n=t.stateObj;let r=a.replace(/_/g," ");if(n){const t=o?e.formatEntityAttributeValue?.(n,o,a):e.formatEntityState?.(n,a);t&&(r=t)}return r.toLocaleLowerCase()}function ry(e,t){const a=Math.round(e)%Av,o=Date.UTC(2e3,0,1,Math.floor(a/60),a%60);return new Intl.DateTimeFormat(t?.locale?.language??"en",{hour:"numeric",minute:"2-digit",hour12:eo(t),timeZone:"UTC"}).format(o)}function iy(e,t,a){return Cn(jn(e,t.decimals,a),t.unit)}function sy(e,t=Date.now()){const{raw:a,hass:o}=e,n=a.days??1,r=Number(a.bucket??60),i=function(e,t){const a=Eo(e.period);return 1===t?{last:1,unit:"day",calendar:"day",offset:a.offset,navigate:a.navigate,until:"end"}:{last:t,unit:"day",offset:a.offset,navigate:a.navigate,until:"end"}}(a,n),s=Math.max(0,i.offset+(i.navigate?Lo(e.host,i):0)),l=xo(o),c=function(e,t,a,o){const n=yo("day",vo("day",e,t),-o*a,t),r=[];for(let i=a-1;i>=-1;i--)r.push(yo("day",n,-i,t));return r}(t,l,n,s),d=0===s,u=c[c.length-1],h=Math.min(u,t),p=e.items.map(ty),m=e.items.map((e,t)=>({entity:e.entityId,attribute:ay(e,p[t]),text:!0})),f=cn(e.host,e.requestUpdate).get(o,m,{start:c[0],end:d?t:u},"history",{live:d}),g={start:c[0],end:h},v=Math.max(1,c.slice(0,-1).filter(e=>e<h).length),y=e.items.map((e,t)=>{const i=p[t],s=e.config,d=e.stateObj?f.data.get(Go(m[t]))??[]:[],u={index:t,entity:e,kind:i,color:je(s.color??vn[t%vn.length]),missing:!e.stateObj,hasData:!1,intervals:[],runs:[],slots:[],heights:[],aggregate:oy(e,a),totalMs:0,count:0,stat:""};if("state"===i){const e=function(e){if("string"==typeof e&&""!==e.trim())return new Set([e.trim()]);if(Array.isArray(e)){const t=e.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>e.trim());if(t.length)return new Set(t)}return new Set(jv)}(s.active),t=function(e,t,a){const o={active:[],known:[]};for(let n=0;n<e.length;n++){const r=e[n],i=n+1<e.length?e[n+1].t:t.end,s=Math.max(t.start,r.t),l=Math.min(t.end,i);if(l<=s||Nv(r.s))continue;const c=!0===r.carried||r.t<t.start;Lv(o.known,s,l,c),a.has(r.s)&&(Lv(o.active,s,l,c),o.word=r.s)}return o}(d,g,e);u.hasData=t.known.length>0,u.word=t.word;const a=t.active;1===n?u.intervals=a:u.runs=function(e,t,a,o){const n=new Uint16Array(Av),r=new Uint16Array(Av);for(let s=0;s+1<a.length;s++){const i={start:a[s],end:a[s+1]},l=new Uint8Array(Av),c=new Uint8Array(Av);for(const e of Tv(t,i))for(const t of Pv(e,i.start,o))Uv(c,t);for(const t of Tv(e,i))for(const e of Pv(t,i.start,o))Uv(l,e);for(let e=0;e<Av;e++)r[e]+=c[e],n[e]+=l[e]&c[e]}const i=[];for(let s=0;s<Av;s++){if(0===n[s])continue;const e=i[i.length-1];e&&e.to===s&&e.on===n[s]&&e.of===r[s]?e.to=s+1:i.push({from:s,to:s+1,on:n[s],of:r[s]})}return i}(a,t.known,c,l.timeZone),u.totalMs=a.reduce((e,t)=>e+t.end-t.start,0)/v;let r=0;for(let o=0;o+1<c.length;o++)r+=Ov(Tv(a,{start:c[o],end:c[o+1]}));u.count=r/v;const i=e=>1===n?e:zt(o,"day_clock_a_day",{text:e}),h=[i(Rv(u.totalMs))];u.count>0&&h.push(i(function(e,t){const a=Math.round(10*t)/10;return 1===a?zt(e,"day_clock_times_one"):zt(e,"day_clock_times",{n:a})}(o,u.count))),u.stat=h.join(" · ")}else{const t=d.map(e=>({...e,v:Ho(e.s),s:void 0}));u.slots=function(e,t,a,o,n,r){const i=new Map;for(let s=0;s+1<t.length;s++){const l={start:t[s],end:t[s+1]};if(l.start>=n)break;const c=Qo(e,Iv(l,a),o,n),d=new Map;for(const e of c){if(null===e.v)continue;const t=Math.floor(Fv(e.t,l.start,r)/a);t<0||t*a>=Av||d.set(t,[...d.get(t)??[],e.v])}for(const[e,t]of d)i.set(e,[...i.get(e)??[],qv(t,o)])}return[...i.entries()].sort((e,t)=>e[0]-t[0]).map(([e,t])=>({index:e,v:t.reduce((e,t)=>e+t,0)/t.length,days:t.length}))}(t,c,r,u.aggregate,h,l.timeZone);const a=Zv(u.aggregate);if(u.heights=function(e,t){if(0===e.length)return[];const a=e.map(e=>e.v);if(t){const e=Math.max(...a.map(Math.abs));return a.map(t=>e>0?Math.abs(t)/e:0)}const o=Math.min(...a),n=Math.max(...a);return a.map(e=>n>o?.15+.85*(e-o)/(n-o):1)}(u.slots,a),u.hasData=u.slots.length>0,u.hasData){const t=u.slots.reduce((e,t)=>t.v>e.v?t:e),i=ry(t.index*r,o);if(a){const t=iy(u.slots.reduce((e,t)=>e+t.v,0),e,o);u.stat=zt(o,"day_clock_busiest",{total:1===n?t:zt(o,"day_clock_a_day",{text:t}),time:i})}else u.stat=zt(o,"day_clock_peak",{value:iy(t.v,e,o),time:i})}}return u.missing?u.stat=zt(o,"entity_not_found"):u.hasData||"ready"!==f.status||(u.stat=zt(o,"day_clock_no_data")),u});return{status:f.status,error:f.error,rings:y,bounds:c,days:n,bucket:r,live:d,now:t,period:i,back:s,zone:l}}const ly=new WeakMap;function cy(e){let t=ly.get(e);return t||(t={},ly.set(e,t)),t}function dy(e,t,a){const o=cy(e.host);void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0,o.ring===t&&o.item===a||(o.ring=t,o.item=a,e.requestUpdate())}const uy=new WeakMap;function hy(e,t){if(uy.has(e.host))return;const a=6e4-t%6e4+50;uy.set(e.host,setTimeout(()=>{uy.delete(e.host),"undefined"!=typeof document&&"hidden"===document.visibilityState?hy(e,Date.now()):e.requestUpdate()},a))}const py=-132,my=-120,fy=264,gy=240,vy=92;function yy(e,t,a){const o=ly.get(e.host);if(void 0===o?.ring||void 0===o.item)return W;const n=t.rings[o.ring],r=a[o.ring]?.[o.item];if(!n||!r)return W;const{time:i,value:s}=function(e,t,a,o){const n=(e,t)=>zt(o,"day_clock_range",{from:e,to:t});if("numeric"===e.kind){const r=e.slots[t],i=n(ry(r.index*a.bucket,o),ry((r.index+1)*a.bucket,o)),s=iy(r.v,e.entity,o);return{time:i,value:1===a.days?s:zt(o,"day_clock_average_value",{value:s})}}if(a.days>1){const a=e.runs[t];return{time:n(ry(a.from,o),ry(a.to,o)),value:zt(o,"day_clock_on_days",{on:a.on,of:a.of})}}const r=e.intervals[t],i=a.live&&r.end>=a.now-1e3,s=i?zt(o,"day_clock_now").toLocaleLowerCase():oo(r.end,o),l=Rv(r.end-r.start);return{time:n(oo(r.start,o),s),value:i?zt(o,"day_clock_so_far",{duration:l}):l}}(n,r.item,t,e.hass),[l,c]=Wv(r.r+4,r.angle);return q`<div class="dc-tip tooltip ${`${l<0?"tip-right":"tip-left"} ${c<0?"tip-down":"tip-up"}`}" style="left:${(l-py)/fy*100}%;top:${(c-my)/gy*100}%" aria-hidden="true">
    <div class="tooltip-time">${i}</div>
    <div class="tooltip-row">
      <span class="swatch" style="background:${n.color}"></span>
      <span class="tooltip-name">${n.entity.name}</span>
      <span class="tooltip-value">${s}</span>
    </div>
  </div>`}function by(e,t,a){const o=t.toLocaleLowerCase().includes(a.toLocaleLowerCase())?zt(e,"day_clock_on"):a;return zt(e,"day_clock_state",{name:t,state:o})}function _y(e,t){const a=e.entity;if(!a.stateObj)return a.display;if("numeric"===e.kind)return zt(t,"day_clock_state",{name:a.name,state:a.display});const o=ay(a,"state"),n=o?a.stateObj.attributes?.[o]:a.stateObj.state;return"string"!=typeof n?zt(t,"day_clock_state",{name:a.name,state:a.display}):by(t,a.name,ny(t,a,n,o))}function xy(e){return e.rings.find(e=>!e.missing)}function wy(e,t,a){const o=Math.min(a,t/Math.max(1,.56*e.length)),n=.62*a;if(o>=n)return{size:o,text:e};const r=Math.max(3,Math.floor(t/(.56*n))-1);return{size:n,text:`${e.slice(0,r).trimEnd()}…`}}function $y(e,t,a){const o=function(e,t){const a=e.raw.center??"total";if("none"===a||0===t.rings.length)return;const{hass:o}=e,n=xy(t);if("now"===a&&t.live&&1===t.days&&n)return[oo(t.now,o),_y(n,o)];const r=t.rings.find(e=>"state"===e.kind&&e.hasData);if(r){const e=r.word?ny(o,r.entity,r.word,ay(r.entity,"state")):zt(o,"day_clock_on"),a=by(o,r.entity.name,e);return[Rv(r.totalMs),1===t.days?a:zt(o,"day_clock_per_day",{label:a})]}const i=t.rings.find(e=>"numeric"===e.kind&&e.hasData);if(!i)return;const s=Zv(i.aggregate)?iy(i.slots.reduce((e,t)=>e+t.v,0),i.entity,o):i.entity.display;return[s,i.entity.name]}(e,t);if(!o)return W;const n=Math.min(18,.4*a),r=Math.min(11,.25*a),i=(1.05*n+1.3*r)/2,s=2*Math.sqrt(Math.max(0,a*a-i*i))-8,l=wy(o[0],s,n),c=wy(o[1],s,r),d=.3*l.size+c.size,u=(-.75*l.size+d+.3*c.size)/2;return Z`<g class="dc-centre" aria-hidden="true">
    <text class="dc-centre-value" y=${-u} font-size=${l.size}>${l.text}</text>
    <text class="dc-centre-label" y=${d-u} font-size=${c.size}>${c.text}</text>
  </g>`}function ky(e,t){const a=function(e,t=92,a=44){const o=e.map(e=>"state"===e?15:22),n=o.reduce((e,t)=>e+t,0)+4*Math.max(0,e.length-1),r=t-a,i=n>r?r/n:1,s=[];let l=t;for(const c of o){const e=c*i;s.push({r0:l-e,r1:l}),l-=e+4*i}return{rings:s,hole:s.length?s[s.length-1].r0:t}}(t.rings.map(e=>e.kind),vy),o=mr(e.raw),n=t.rings.map((e,o)=>{const{r0:n,r1:r}=a.rings[o];return"state"===e.kind?function(e,t,a,o){const n=t.zone.timeZone;return 1===t.days?e.intervals.map((e,r)=>{const i=Pv(e,t.bounds[0],n),s=i.map(([e,t])=>Yv(a,o,Dv(e),Dv(t))).join("");return{d:s,angle:Dv(i.length?(i[0][0]+i[i.length-1][1])/2:0),r:o,item:r}}):e.runs.map((e,t)=>({d:Yv(a,o,Dv(e.from),Dv(e.to)),angle:Dv((e.from+e.to)/2),r:o,opacity:Math.max(.12,e.on/Math.max(1,e.of)),item:t}))}(e,t,n,r):function(e,t,a,o){const n=Av/t.bucket,r=Math.min(.03,Sv/n/8),i=Zv(e.aggregate),s=[];return e.slots.forEach((t,l)=>{if(i&&0===t.v)return;const c=t.index/n*Sv+r,d=(t.index+1)/n*Sv-r,u=a+Math.max(.04,e.heights[l])*(o-a);s.push({d:Yv(a,u,c,d),angle:(c+d)/2,r:u,item:l})}),s}(e,t,n,r)}),r=ly.get(e.host),i=t.rings.map((i,s)=>{const{r0:l,r1:c}=a.rings[s],d=1===t.days&&n[s].length<=48,u="state"===i.kind?Z`<path class="dc-track" d=${Yv(l,c,0,Sv)}></path>`:Z`<circle class="dc-base" r=${l}></circle>`;return Z`<g
      class="entity dc-ring ${i.kind}"
      data-index=${i.index}
      tabindex="0"
      role="group"
      aria-label=${`${i.entity.name}, ${i.stat}`}
    >
      ${u}
      ${n[s].map((t,a)=>Z`<path
            class="dc-mark ${r?.ring===s&&r.item===a?"hover":""}"
            d=${t.d}
            fill=${i.color}
            fill-opacity=${t.opacity??W}
            tabindex=${d?"0":W}
            @pointerenter=${o?()=>dy(e,s,a):W}
            @pointerdown=${o?()=>dy(e,s,a):W}
            @pointerleave=${o?t=>function(e,t){if("touch"!==t.pointerType&&"pen"!==t.pointerType)return void dy(e,void 0,void 0);const a=cy(e.host);void 0!==a.timer&&clearTimeout(a.timer),a.timer=setTimeout(()=>{a.timer=void 0,dy(e,void 0,void 0)},cr)}(e,t):W}
            @focus=${o?()=>dy(e,s,a):W}
            @blur=${o?()=>dy(e,void 0,void 0):W}
          ></path>`)}
    </g>`}),s=function(e){const t=e?.locale?.language??"en";let a=eo(e);if(void 0===a)try{a=!0===new Intl.DateTimeFormat(t,{hour:"numeric"}).resolvedOptions().hour12}catch{a=!1}return a?[0,6,12,18].map(e=>new Intl.DateTimeFormat(t,{hour:"numeric",hour12:!0,timeZone:"UTC"}).format(Date.UTC(2e3,0,1,e))):["00","06","12","18"]}(e.hass),l=Array.from({length:24},(e,t)=>{const a=t/24*Sv,o=t%6==0,[n,r]=Wv(95,a),[i,s]=Wv(vy+(o?9:6),a);return Z`<line class="dc-tick ${o?"major":""}" x1=${n} y1=${r} x2=${i} y2=${s}></line>`}),c=Z`
    <text class="dc-label" x="0" y=${-107} text-anchor="middle">${s[0]}</text>
    <text class="dc-label" x=${104} y="3.5" text-anchor="start">${s[1]}</text>
    <text class="dc-label" x="0" y=${114} text-anchor="middle">${s[2]}</text>
    <text class="dc-label" x=${-104} y="3.5" text-anchor="end">${s[3]}</text>`;let d=W;if(t.live&&1===t.days){const e=Dv(Fv(t.now,t.bounds[0],t.zone.timeZone)),[o,n]=Wv(a.hole,e),[r,i]=Wv(101,e);d=Z`
      <path class="dc-future" d=${Yv(a.hole-1,93,e,Sv)}></path>
      <line class="dc-hand" x1=${o} y1=${n} x2=${r} y2=${i}></line>
      <circle class="dc-hand-dot" cx=${r} cy=${i} r="2.6"></circle>`}const u=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_day_clock"),names:t.rings.map(e=>e.entity.name).join(", ")});return q`<div class="dc-dial">
    <svg class="dc-svg" viewBox="${py} ${my} ${fy} ${gy}" role="img" aria-label=${u}>
      ${l}${c}
      <g class="dc-marks">${i}</g>
      ${d} ${$y(e,t,a.hole)}
    </svg>
    ${o?yy(e,t,n):W}
  </div>`}function My(e,t,a=!1){return q`<div class="frame">
    ${e}
    <div class="chart-message ${a?"error":""}">${t}</div>
  </div>`}const zy={layout:"chart",group:"history",height:280,styles:r`
    ${En}
    ${xr}
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
      stroke-linecap="round" />`,validate:function(e){fr(e),Eo(e.period);const t=e.days;if(void 0!==t&&("number"!=typeof t||!Number.isInteger(t)||t<1||t>31))throw new Error('"days" must be a whole number from 1 to 31');if(void 0!==e.center&&!Kv.includes(e.center))throw new Error(`"center" must be one of: ${Kv.join(", ")}`);if(void 0!==e.bucket&&!Hv.includes(Number(e.bucket)))throw new Error(`"bucket" must be one of: ${Hv.join(", ")}`);if(void 0!==e.aggregate&&!Jo.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Jo.join(", ")}`);for(const a of e.entities??[]){if("object"!=typeof a||null===a)continue;const e=a.active;if(void 0===e)continue;const t="string"==typeof e&&""!==e.trim()||Array.isArray(e)&&e.every(e=>"string"==typeof e);if(!t)throw new Error('"active" must be a state or a list of states')}},editor:function(e){var t;return Zi({...e,config:(t=e.config,"number"==typeof t.bucket?{...t,bucket:String(t.bucket)}:t),commit:t=>e.commit(function(e){return"string"==typeof e.bucket?{...e,bucket:Number(e.bucket)}:e}(t))},"chart",qi("day_clock",e.hass,()=>{return[{type:"grid",name:"",schema:[{name:"days",selector:{number:{min:1,max:31,mode:"box"}}},{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"center",selector:Si(t=e.hass,"day_clock_center",["total","now","none"])},{type:"grid",name:"",schema:[{name:"bucket",selector:Si(t,"bucket",Hv.map(String))},{name:"aggregate",selector:Si(t,"aggregate",["auto",...Jo])}]},{name:"tooltip",selector:{boolean:{}}}];var t}),Gv)},entityFields:function(){return{schema:Xv,fields:Jv}},disconnect(e){Mn(e),function(e){const t=uy.get(e);void 0!==t&&clearTimeout(t),uy.delete(e)}(e);const t=ly.get(e);void 0!==t?.timer&&clearTimeout(t.timer),ly.delete(e)},render(e){const t=sy(e);t.live&&hy(e,t.now);const a=$n({period:t.period,range:{start:t.bounds[0],end:t.bounds[t.bounds.length-1]},back:t.back,zone:t.zone},e,t.now);return"loading"===t.status?My(a,zt(e.hass,"chart_loading")):"error"===t.status?My(a,zt(e.hass,"chart_error",{error:t.error??""}),!0):t.rings.every(e=>!e.hasData)?My(a,zt(e.hass,"chart_no_data")):q`<div class="frame">
      ${a}
      <div class="dc-body">${ky(e,t)} ${function(e,t){const{hass:a}=e;let o=W;return t.days>1?o=q`<div class="dc-foot">
      <div class="dc-stat">${zt(a,"day_clock_average",{n:t.days})}</div>
    </div>`:t.live&&xy(t)&&(o=q`<div class="dc-foot">
      <div class="dc-stat">${zt(a,"day_clock_now")}</div>
      <div class="dc-now">${oo(t.now,a)} · ${_y(xy(t),a)}</div>
    </div>`),q`<div class="dc-legend">
    ${t.rings.map(e=>q`<div class="dc-item ${e.missing?"missing":""}">
          <span class="dc-swatch" style="background:${e.color}"></span>
          <div class="dc-text">
            <div class="dc-name">${e.entity.name}</div>
            <div class="dc-stat">${e.stat}</div>
          </div>
        </div>`)}
    ${o}
  </div>`}(e,t)}</div>
    </div>`}};function Sy(e,t){if(null!=e&&""!==e){if("number"==typeof e&&Number.isFinite(e))return{value:e,soft:!1};if("string"==typeof e){const t=e.trim(),a=t.startsWith("~"),o=Number(a?t.slice(1):t);if(""!==t&&"~"!==t&&Number.isFinite(o))return{value:o,soft:a}}throw new Error(`"${t}" must be a number, or ~ and a number for a soft limit (e.g. "~0")`)}}function Ay(e,t={}){let[a,o]=e??[t.min?.value??0,t.max?.value??1];if(t.fromZero&&(a>0&&(a=0),o<0&&(o=0)),void 0!==t.minRange&&o-a<t.minRange){const e=(a+o)/2;a=e-t.minRange/2,o=e+t.minRange/2}let[n,r]=Sa([a,o],.1);t.fromZero&&0===a&&(n=0),t.fromZero&&0===o&&(r=0);const{min:i,max:s}=t;return i&&(n=i.soft&&a<i.value?n:i.value),s&&(r=s.soft&&o>s.value?r:s.value),r<=n&&(r=n+1),[n,r]}function Ey(e,t,a){const o=[];for(const c of e){const e=Math.min(c.end??c.t,a);if(c.t>=a)break;o.push({...c,start:c.t,end:e,t:Math.round((c.t+e)/2)})}const n=o.filter(e=>null!==e.v);if(0===n.length)return o;const r=o[0],i=o[o.length-1],s=[...o];null!==r.v&&r.t>t.start&&s.unshift({t:t.start,v:r.v,carried:!0});const l=Math.min(t.end,a);return null!==i.v&&i.t<l&&s.push({t:l,v:i.v,carried:!0}),s}function jy(e,t){if(void 0!==e&&!Jo.includes(e))throw new Error(`${t} must be one of: ${Jo.join(", ")}`)}const Cy=[...Ai,{name:"points_per_hour",path:["points_per_hour"],default:.5},{name:"graph",path:["graph"],default:"line"},{name:"fill",path:["fill"],default:"fade"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:Lt},{name:"points",path:["points"],default:"hover"},{name:"labels",path:["labels"],default:"hover"},{name:"height",path:["height"],default:150},{name:"bar_spacing",path:["bar_spacing"],default:4},{name:"color_transition",path:["color_transition"],default:"smooth"},{name:"extrema",path:["extrema"],default:!1},{name:"average",path:["average"],default:!1},{name:"legend",path:["legend"],default:!0},{name:"trend_y_min",path:["y_min"]},{name:"trend_y_max",path:["y_max"]},{name:"min_range",path:["min_range"]},{name:"y_min_secondary",path:["y_min_secondary"]},{name:"y_max_secondary",path:["y_max_secondary"]},{name:"min_range_secondary",path:["min_range_secondary"]},{name:"value_factor",path:["value_factor"],default:0},{name:"align_header",path:["align_header"],default:"default"},{name:"align_icon",path:["align_icon"],default:"right"},{name:"align_state",path:["align_state"],default:"left"},{name:"font_size",path:["font_size"],default:100},{name:"font_size_header",path:["font_size_header"]},{name:"color_name",path:["color_name"],default:!1},{name:"color_value",path:["color_value"],default:!1},{name:"trend_color_icon",path:["color_icon"],default:!1},{name:"group",path:["group"],default:!1},{name:"icon_image",path:["icon_image"]},{name:"trend_tooltip",path:["tooltip"],default:!0}],Ny=(...e)=>({type:"grid",name:"",schema:e}),Ly=e=>({name:e,selector:{boolean:{}}}),Ty=(e,t,a,o="any")=>({name:e,selector:{number:{mode:"box",step:o,...void 0!==t?{min:t}:{},...void 0!==a?{max:a}:{}}}}),Oy=e=>({name:e,selector:{text:{}}});function Fy(e){const t={};for(const a of["y_min","y_max","y_min_secondary","y_max_secondary"])"number"==typeof e[a]&&(t[a]=String(e[a]));return t}const Py=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"entity_aggregate",path:["aggregate"]},{name:"y_axis_side",path:["y_axis"],default:"primary"},{name:"fixed_value",path:["fixed_value"],default:!1},{name:"show_graph",path:["show_graph"],default:!0},{name:"show_line",path:["show_line"],default:!0},{name:"show_fill",path:["show_fill"],default:!0},{name:"show_points",path:["show_points"]},{name:"show_legend_entity",path:["show_legend"],default:!0},{name:"show_legend_state",path:["show_legend_state"],default:!1},{name:"show_indicator",path:["show_indicator"],default:!1},{name:"show_state",path:["show_state"],default:!1}];const Dy=["line","bar","none"],Uy=["solid","fade","none"],Hy=["hover","always","never"],Iy=["default","left","right","center"],By=["right","left","state"],qy=["left","right","center"],Zy=["smooth","hard"];function Ry(e,t){return void 0===e?t:!0===e?"always":!1===e?"never":e}function Wy(e){return void 0===e||!0===e?"fade":!1===e?"none":e}const Vy=e=>"number"==typeof e&&Number.isFinite(e)?e:void 0;function Yy(e){return{graph:e.graph??"line",fill:Wy(e.fill),points:Ry(e.points,"hover"),labels:Ry(e.labels,"hover"),pointsPerHour:Vy(e.points_per_hour)??.5,height:Vy(e.height)??150,lineWidth:Vy(e.line_width)??2.5,barSpacing:Vy(e.bar_spacing)??4,transition:e.color_transition??"smooth",extrema:!0===e.extrema,average:!0===e.average,legend:!1!==e.legend,factor:Math.pow(10,Vy(e.value_factor)??0),alignHeader:e.align_header??"default",alignIcon:e.align_icon??"right",alignState:e.align_state??"left",fontSize:Vy(e.font_size)??100,fontSizeHeader:Vy(e.font_size_header),colorName:!0===e.color_name,colorValue:!0===e.color_value,colorIcon:!0===e.color_icon,group:!0===e.group,iconImage:"string"==typeof e.icon_image&&""!==e.icon_image?e.icon_image:void 0,primary:{min:Sy(e.y_min,"y_min"),max:Sy(e.y_max,"y_max"),minRange:Vy(e.min_range)},secondary:{min:Sy(e.y_min_secondary,"y_min_secondary"),max:Sy(e.y_max_secondary,"y_max_secondary"),minRange:Vy(e.min_range_secondary)}}}function Gy(e,t,a){if(void 0!==e&&!t.includes(e))throw new Error(`"${a}" must be one of: ${t.join(", ")}`)}function Xy(e,t,a,o=1/0,n=!1){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<a||e>o||n&&!Number.isInteger(e))){throw new Error(`"${t}" must be ${n?"a whole number":"a number"} ${o===1/0?`${a} or more`:`from ${a} to ${o}`}`)}}function Jy(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}function Ky(e,t,a){const o=Math.min(e.range.end,Date.now()),n="bar"===a.graph,r=n&&0===a.pointsPerHour?.5:a.pointsPerHour,i=e.group?[]:function(e,t,a=500){const o=e.end-e.start;if(o<=0||t<=0)return[];const n=Math.max(1,Math.min(a,Math.round(o/36e5*t))),r=o/n,i=[];for(let s=0;s<=n;s++)i.push(s===n?e.end:Math.round(e.start+s*r));return i}(e.range,r,n?96:500),s=t.raw.aggregate??"mean";return e.series.map(t=>{const n=t.entity.config;let r=t.points;n.fixed_value&&null!==t.entity.value?r=[{t:e.range.start,v:t.entity.value},{t:o,v:t.entity.value}]:e.group?r=Ey(t.points,e.range,o):i.length&&(r=Ey(function(e,t,a,o,n){if(t.length<2)return e;let r=e;const i=e[e.length-1],s=e[e.length-2];return"history"===o&&i&&s&&i.t===n&&i.v===s.v&&(r=e.slice(0,-1)),"statistics"===o?en(r,t,a,n):Qo(r,t,a,n)}(t.points,i,n.aggregate??s,e.source,o),e.range,o)),1!==a.factor&&(r=r.map(e=>null===e.v?e:{...e,v:e.v*a.factor}));const l=void 0!==n.color?je(n.color):void 0,c=!l&&(e=>e.config.severity!==st)(t.entity),d=null===t.entity.value?null:t.entity.value*a.factor,u=l??(c&&null!==d?je(Te(d,t.entity.bands).color):t.color);return{index:t.index,entity:t.entity,own:n,points:r,color:c?void 0:l??t.color,current:u,curve:t.curve,secondary:"secondary"===n.y_axis,graphed:!1!==n.show_graph}})}function Qy(e){let t=1/0,a=-1/0;for(const o of e)for(const e of o.points)null!==e.v&&(e.v<t&&(t=e.v),e.v>a&&(a=e.v));return t===1/0?void 0:[t,a]}const eb=e=>Math.round(1e4*e)/100+"%";function tb(e,t,a){return e.filter(({series:e})=>void 0===e.color).map(({series:e})=>{const o=function(e,t,a){const[o,n]=t,r=e=>Math.min(1,Math.max(0,(e-o)/(n-o))),i=[];return e.forEach((t,o)=>{const n=je(t.color),s=Number.isFinite(t.from)?r(t.from):0,l=o+1<e.length?r(e[o+1].from):1;"hard"===a?i.push({offset:s,color:n},{offset:l,color:n}):(0===o||o===e.length-1||s<l)&&(i.push({offset:s,color:n}),o===e.length-1&&i.push({offset:1,color:n}))}),i}(e.entity.bands,t.get(e.secondary),a.transition);return Z`<linearGradient id="cd-trend-${e.index}" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${gn} y2="0">
        ${o.map(e=>Z`<stop offset=${e.offset} stop-color=${e.color}></stop>`)}
      </linearGradient>`})}const ab=e=>e.color??`url(#cd-trend-${e.index})`;function ob(e,t){return void 0!==e.start&&void 0!==e.end&&e.end>e.start?`${oo(e.start,t.hass)} – ${oo(e.end,t.hass)}`:oo(e.t,t.hass)}function nb(e,t,a,o){const n=a.colorIcon?`color:${o}`:"";return a.iconImage?q`<span class="trend-icon"><img src=${a.iconImage} alt="" /></span>`:q`<span class="trend-icon" style=${n}>
    <ha-state-icon .hass=${t.hass} .stateObj=${e.stateObj} .icon=${rs(e)}></ha-state-icon>
  </span>`}function rb(e,t,a,o){if(!t.extrema&&!t.average)return W;const n=function(e,t){let a,o,n=0,r=0;for(let i=0;i<e.length;i++){const s=e[i];if(null!==s.v)if(s.carried||((!a||s.v<a.v)&&(a={t:s.t,v:s.v}),(!o||s.v>o.v)&&(o={t:s.t,v:s.v})),t){const t=e[i+1],a=t?t.t-s.t:0;n+=s.v*a,r+=a}else s.carried||(n+=s.v,r+=1)}if(a&&o)return{min:a,max:o,mean:r>0?n/r:(a.v+o.v)/2}}(e.points,o);if(!n)return W;const r=(t,o,n)=>q`<span class="trend-chip ${t}"
      ><span class="trend-chip-type">${zt(a.hass,t)}</span> ${(t=>Cn(jn(t,e.entity.decimals,a.hass),e.entity.unit))(o)}${void 0!==n?q` · <span class="trend-chip-time">${oo(n,a.hass)}</span>`:W}</span
    >`;return q`<div class="trend-info" style="--series:${e.current}">
    ${t.extrema?r("trend_min",n.min.v,n.min.t):W}
    ${t.average?r("trend_avg",n.mean):W}
    ${t.extrema?r("trend_max",n.max.v,n.max.t):W}
  </div>`}const ib={layout:"chart",group:"history",height:170,gridOptions:{columns:6,min_columns:3,min_rows:2},styles:r`
    ${En}
    ${xr}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){bn(e),fr(e),Gy(e.graph,Dy,"graph"),Gy(e.fill,[...Uy,!0,!1],"fill"),Gy(e.points,[...Hy,!0,!1],"points"),Gy(e.labels,[...Hy,!0,!1],"labels"),Gy(e.color_transition,Zy,"color_transition"),Gy(e.align_header,Iy,"align_header"),Gy(e.align_icon,By,"align_icon"),Gy(e.align_state,qy,"align_state"),Xy(e.points_per_hour,"points_per_hour",0,60),Xy(e.height,"height",20,1e3),Xy(e.line_width,"line_width",Tt,Ot),Xy(e.bar_spacing,"bar_spacing",0,50),Xy(e.value_factor,"value_factor",-9,9,!0),Xy(e.font_size,"font_size",25,400),Xy(e.font_size_header,"font_size_header",6,60),Xy(e.min_range,"min_range",0),Xy(e.min_range_secondary,"min_range_secondary",0);for(const t of["extrema","average","legend","color_name","color_value","group"])Jy(e[t],t);if(void 0!==e.icon_image&&"string"!=typeof e.icon_image)throw new Error('"icon_image" must be a URL');Yy(e);for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t,a=t=>`"${t}" of ${e.entity}`;jy(e.aggregate,a("aggregate")),Gy(e.y_axis,["primary","secondary"],`y_axis of ${e.entity}`),Xy(e.line_width,`line_width of ${e.entity}`,Tt,Ot);for(const t of["fixed_value","show_state","show_indicator","show_graph","show_line","show_fill","show_points","show_legend","show_legend_state"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`${a(t)} must be true or false`)}},editor:function(e){const t=qi(`trend|${Ei(e.config)}`,e.hass,()=>{return t=e.hass,a=e.config,[...ji(t,a),Ty("points_per_hour",0,60),Ny({name:"graph",selector:Si(t,"graph",["line","bar","none"])},{name:"fill",selector:Si(t,"fill",["fade","solid","none"])},{name:"curve",selector:Si(t,"curve",dn)},{name:"line_width",selector:Qt},{name:"points",selector:Si(t,"points",["hover","always","never"])},{name:"labels",selector:Si(t,"labels",["hover","always","never"])},Ty("height",20,1e3,1),Ty("bar_spacing",0,50,1)),{name:"color_transition",selector:Si(t,"color_transition",["smooth","hard"])},Ny(Ly("extrema"),Ly("average"),Ly("legend"),Ly("trend_tooltip")),Ny(Oy("trend_y_min"),Oy("trend_y_max"),Ty("min_range",0)),Ny(Oy("y_min_secondary"),Oy("y_max_secondary"),Ty("min_range_secondary",0)),Ny({name:"align_header",selector:Si(t,"align_header",["default","left","right","center"])},{name:"align_icon",selector:Si(t,"align_icon",["right","left","state"])},{name:"align_state",selector:Si(t,"align_state",["left","right","center"])},Ty("font_size",25,400,1),Ty("font_size_header",6,60,1),Ty("value_factor",-9,9,1)),Ny(Ly("color_name"),Ly("trend_color_icon"),Ly("color_value"),Ly("group")),{name:"icon_image",selector:{text:{}}}];var t,a}),a={...e,config:{...e.config,...Fy(e.config)},commit:t=>e.commit(function(e){let t=e;for(const a of["y_min","y_max","y_min_secondary","y_max_secondary"]){const e=t[a];"string"==typeof e&&""!==e.trim()&&!e.trim().startsWith("~")&&Number.isFinite(Number(e))?t={...t,[a]:Number(e)}:""===e&&(t={...t},delete t[a])}return t}(t))};return Zi(a,"chart",t,Cy,{legend:"editor_trend_legend",labels:"editor_trend_labels",group:"editor_trend_group"})},entityFields:function(e){return{schema:qi("trend-entity",e,()=>function(e){return[Ny({name:"series_color",selector:{text:{}}},{name:"curve",selector:Si(e,"curve",dn)},{name:"line_width",selector:Qt},{name:"entity_aggregate",selector:Si(e,"aggregate",Jo)},{name:"y_axis_side",selector:Si(e,"y_axis_side",["primary","secondary"])}),Ny(Ly("show_state"),Ly("show_indicator"),Ly("show_graph"),Ly("show_line"),Ly("show_fill"),Ly("show_points"),Ly("show_legend_entity"),Ly("show_legend_state"),Ly("fixed_value"))]}(e)),fields:Py}},disconnect(e){Mn(e),qn(e),pr(e)},render:function(e){const t=Yy(e.raw),{show:a}=e.config,o=_n(e),n=Ky(o,e,t),r=n[0],i=r.entity,s=n.filter(e=>e.graphed),l=function(e,t){if(void 0!==t)return e.map(e=>{const a=e.points.filter(e=>!e.carried),o=dr(a,t);return o<0?void 0:a[o]})}(n,mr(e.raw)&&"ready"===o.status?hr(e.host):void 0),c=t.colorName?`color:${r.current}`:"",d=a.icon&&"state"!==t.alignIcon?nb(i,e,t,r.current):W,u=a.name||d!==W?q`<div
          class="trend-header entity align-${t.alignHeader} icon-${t.alignIcon}"
          data-index="0"
          tabindex="0"
          aria-label=${i.label}
          style=${t.fontSizeHeader?`font-size:${t.fontSizeHeader}px`:""}
        >
          ${a.name?q`<span class="trend-name" style=${c}>${i.name}</span>`:W} ${d}
        </div>`:W,h=(a,o)=>{const n=l?.[o],r=n?n.v:a.entity.value,i=n?{number:null===n.v?"—":jn(n.v,a.entity.decimals,e.hass),unit:a.entity.unit}:function(e,t,a,o){return null===e?{number:t.display,unit:""}:{number:jn(e*a,t.decimals,o),unit:t.unit}}(r,a.entity,t.factor,e.hass);return{parts:i,color:n&&null!==n.v&&void 0===a.color?je(Te(n.v,a.entity.bands).color):a.current,when:n?ob(n,e):void 0}},p=h(r,0),m=a.value,f=n.slice(1).filter(e=>!0===e.own.show_state),g=m||f.length||"state"===t.alignIcon?q`<div class="trend-states align-${t.alignState}" style="font-size:${t.fontSize}%">
          ${a.icon&&"state"===t.alignIcon?nb(i,e,t,r.current):W}
          ${m?q`<div class="trend-state entity" data-index="0" tabindex="0" aria-label=${i.label}>
                  ${r.own.show_indicator?q`<span class="swatch" style="background:${r.current}"></span>`:W}
                  <span class="trend-value" style=${t.colorValue?`color:${p.color}`:""}
                    >${p.parts.number}</span
                  >${p.parts.unit?q`<span class="trend-unit">${p.parts.unit}</span>`:W}
                  ${p.when?q`<span class="trend-when">${p.when}</span>`:W}
                </div>`:W}
          ${f.length?q`<div class="trend-secondary">
                  ${f.map(e=>{const a=h(e,e.index);return q`<div
                      class="trend-state small entity"
                      data-index=${e.index}
                      tabindex="0"
                      aria-label=${e.entity.label}
                    >
                      ${!1!==e.own.show_indicator?q`<span class="swatch" style="background:${e.current}"></span>`:W}
                      <span class="trend-value" style=${t.colorValue?`color:${a.color}`:""}
                        >${a.parts.number}</span
                      >${a.parts.unit?q`<span class="trend-unit">${a.parts.unit}</span>`:W}
                    </div>`})}
                </div>`:W}
        </div>`:W,v=s.filter(e=>!1!==e.own.show_legend),y=t.legend&&s.length>1&&v.length?q`<div class="series-header trend-legend">
          ${v.map(t=>q`<div class="entity series-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}>
                <span class="swatch" style="background:${t.current}"></span>
                <span class="series-name">${function(e,t){const a=t.raw.name;return void 0===a||e.entity.name!==a?e.entity.name:e.entity.stateObj?.attributes.friendly_name??e.entity.entityId}(t,e)}</span>
                ${t.own.show_legend_state?q`<span class="series-value">${t.entity.display}</span>`:W}
              </div>`)}
        </div>`:W,b=$n(o,e),_="none"===t.graph?W:function(e,t,a,o,n){const r=`aspect-ratio:500 / ${o.height}`;if("ready"!==t.status||a.every(e=>e.points.every(e=>null===e.v))){const a="loading"===t.status?"chart_loading":"error"===t.status?"chart_error":"chart_no_data";return q`<div class="trend-graph message ${"error"===t.status?"error":""}" style=${r}>
      <span>${zt(e.hass,a,{error:t.error??""})}</span>
    </div>`}const i="bar"===o.graph,s=new Map;for(const b of[!1,!0]){const e=a.filter(e=>e.secondary===b);e.length&&s.set(b,Ay(Qy(e),{...b?o.secondary:o.primary,fromZero:i}))}const l=Aa([t.range.start,t.range.end],[0,fn]),c=a.map(e=>({series:e,y:Aa(s.get(e.secondary),[gn,0])})),d=i?Z``:Z`${c.map(e=>function({series:e,y:t},a,o){const n=mn(e.points).map(o=>{const n=o.map(e=>[a(e.t),t(e.v)]);return{pts:n,d:pn(n,e.curve)}}),r=!1!==e.own.show_line,i="none"!==o.fill&&!1!==e.own.show_fill,s=e.own.line_width??o.lineWidth,l=e.own.show_points??"always"===o.points,c=e.points.filter(e=>null!==e.v&&!e.carried);return Z`<g class="series" data-series=${e.index}>
    ${i?Z`<path
            class="fill ${o.fill}"
            d=${n.map(({pts:e,d:t})=>`${t}L${e[e.length-1][0]},200L${e[0][0]},200Z`).join("")}
            fill=${ab(e)}
            mask=${"fade"===o.fill?"url(#cd-trend-fade)":W}
          ></path>`:W}
    ${r?Z`<path class="line" d=${n.map(e=>e.d).join("")} fill="none" stroke=${ab(e)}
            style="stroke-width:${s}px"></path>`:W}
    ${l&&c.length<=200?Z`<path class="dots" d=${Dt(c.map(e=>[a(e.t),t(e.v)]))} fill="none"
            stroke=${ab(e)} style="stroke-width:${Ut(s)}px"></path>`:W}
  </g>`}(e,l,o))}`,u=Z`${tb(c,s,o)}
    <linearGradient id="cd-trend-fade-paint" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${gn}>
      <stop offset="0" stop-color="#fff" stop-opacity="0.42"></stop>
      <stop offset="1" stop-color="#fff" stop-opacity="0.05"></stop>
    </linearGradient>
    <mask id="cd-trend-fade" maskContentUnits="userSpaceOnUse">
      <rect x="0" y="0" width=${fn} height=${gn} fill="url(#cd-trend-fade-paint)"></rect>
    </mask>`,h=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_trend"),names:a.map(e=>e.entity.name).join(", ")}),p=t=>{const n=a.filter(e=>e.secondary===t),r=Qy(n);if(!r)return W;const i=t?o.secondary:o.primary,s=i.min&&!i.min.soft?i.min.value:r[0],l=i.max&&!i.max.soft?i.max.value:r[1],c=n[0].entity,d=t=>Cn(jn(t,c.decimals,e.hass),c.unit);return q`<div class="trend-labels ${t?"secondary":"primary"}" style="--series:${n[0].current}">
      <span>${d(l)}</span><span>${d(s)}</span>
    </div>`},m="never"===o.labels?W:q`<div class="trend-labels-wrap labels-${o.labels}">${p(!1)}${p(!0)}</div>`,f=n&&!i&&n[a[0].index]?q`<div class="crosshair" style="left:${eb(l(n[a[0].index].t)/fn)}"></div>`:W,g=n&&!i?c.map(({series:e,y:t})=>{const a=n[e.index];if(!a||null===a.v||!1===e.own.show_points)return W;const o=t(a.v)/gn;if(!(o>=0&&o<=1))return W;const r=e.color??je(Te(a.v,e.entity.bands).color);return q`<span
            class="hover-dot"
            style="left:${eb(l(a.t)/fn)};top:${eb(o)};background:${r}"
          ></span>`}):W,v=n&&i&&n[a[0].index]?(()=>{const e=n[a[0].index];return void 0===e.start||void 0===e.end?W:q`<div
            class="bar-hover"
            style="left:${eb(l(e.start)/fn)};width:${eb((l(e.end)-l(e.start))/fn)}"
          ></div>`})():W,y=mr(e.raw)?gr(e,t.range,a.map(e=>e.points.filter(e=>!e.carried))):void 0;return q`<div
    class="trend-graph ${y?"hoverable":""}"
    style=${r}
    @pointerdown=${y?.move}
    @pointermove=${y?.move}
    @pointerleave=${y?.leave}
    @pointercancel=${y?.leave}
  >
    ${An(d,h,u)} ${i?function(e,t,a){const o=e.length,n=e.flatMap(({series:e,y:n},r)=>{const i=Math.min(gn,Math.max(0,n(0)));return e.points.filter(e=>null!==e.v&&!e.carried&&void 0!==e.start&&void 0!==e.end).map(s=>{const l=t(s.start)/fn,c=(t(s.end)-t(s.start))/fn,d=Math.min(gn,Math.max(0,n(s.v))),u=d>i,h=e.color??je(Te(s.v,e.entity.bands).color),p=`(${eb(c)} - ${a}px) / ${o}`;return q`<div
          class="trend-col ${u?"down":""}"
          style="left:calc(${eb(l)} + ${a/2}px + ${r} * ${p});width:max(1px, calc(${p}));
            top:${eb(Math.min(d,i)/gn)};height:${eb(Math.abs(i-d)/gn)};background:${h}"
        ></div>`})});return q`<div class="trend-cols">${n}</div>`}(c,l,o.barSpacing):W} ${m} ${v}
    ${f} ${"never"===o.points?W:g}
  </div>`}(e,o,s,t,l);return q`<div class="trend ${t.group?"group":""} ${"none"===t.graph?"no-graph":""}">
    <div class="trend-top">
      ${u} ${b===W?W:q`<div class="trend-nav">${b}</div>`} ${g}
      ${rb(r,t,e,"history"===o.source&&!o.group&&0===t.pointsPerHour)}
      ${y}
    </div>
    ${_}
  </div>`}},sb=["bars","gauges","history","totals","compare","distribution"];function lb(e){return"chart"===e.layout}const cb={bar:hs,thin:cu,segmented:su,tank:lu,ring:Kd,needle:gd,arc:Qd,line:pc,column:Ol,area:ts,combined:wc,pie:Zd,rings:nu,pictograph:Pd,waffle:gu,histogram:od,scatter:ru,bubble:hl,heatmap:Zc,box:Hs,funnel:Mu,radar:eh,polar_area:rh,treemap:zh,sunburst:Zh,icicle:Rh,grouped_bars:rp,bullet:dp,lollipop:fp,waterfall:kp,slope:Op,dumbbell:Jp,range_area:om,sparkline:um,streamgraph:zm,candlestick:Fm,violin:Mf,beeswarm:Df,strip_plot:Wf,sankey:dg,timeline:Lg,climate:tv,wind_rose:zv,day_clock:zy,trend:ib},db="important",ub=" !"+db,hb=me(class extends fe{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const o=e[a];return null==o?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:a}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)null==t[o]&&(this.ft.delete(o),o.includes("-")?a.removeProperty(o):a[o]=null);for(const o in t){const e=t[o];if(null!=e){this.ft.add(o);const t="string"==typeof e&&e.endsWith(ub);o.includes("-")||t?a.setProperty(o,t?e.slice(0,-11):e,t?db:""):a[o]=e}}return R}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pb{constructor(e){this.host=e,e.addController(this)}hostConnected(){var e;this.stop=(e=()=>this.host.requestUpdate(),"undefined"==typeof window?()=>{}:(window.addEventListener(wt,e),()=>window.removeEventListener(wt,e)))}hostDisconnected(){this.stop?.(),this.stop=void 0}}const mb=Object.keys(Fe),fb=Object.keys(Ee),gb="custom",vb={text:{}},yb={entity:{domain:["sensor","input_number","number"]}};function bb(e){return"string"==typeof e&&""!==e.trim()&&!Number.isFinite(Number(e))}const _b={icon:{}};function xb(e){return void 0===e?"none":mb.find(t=>Fe[t]&&ga(Fe[t],e))??"custom"}function wb(e){return fb.includes(e)}class $b extends le{constructor(){super(),this.languageController=new pb(this),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(e){e.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(e){const t=this.hass?.states[e]?.state,a=void 0===t||""===t.trim()?NaN:Number(t);return Number.isFinite(a)?a:void 0}_t(e){return zt(this.hass,e)}_getSelectors(){const e=`${Mt(this.hass)}|${this.unit??""}`;if(this._selectors?.key===e)return this._selectors;const t=mb.map(e=>({value:e,label:this._t(`editor_preset_${e}`)})),a=e=>({select:{mode:"dropdown",options:e}});return this._selectors={key:e,preset:a(t),presetCustom:a([...t,{value:gb,label:this._t("editor_preset_custom")}]),color:a([...fb,gb].map(e=>({value:e,label:this._t(`editor_color_${e}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e&&e.length?e:void 0}}))}_presetChanged(e){e.stopPropagation();const t=e.detail?.value;if(!t||t===gb||!mb.includes(t))return;if(t===xb(this.bands))return;const a=Fe[t];this._emit(a?structuredClone(a):void 0)}_updateBand(e,t,a){const o=[...this.bands??[]],n={...o[e]};null==a||""===a?delete n[t]:n[t]=a,o[e]=n,this._emit(o)}_fromChanged(e,t){t.stopPropagation();const a=Number(t.detail?.value);""!==t.detail?.value&&null!=t.detail?.value&&Number.isFinite(a)&&this._updateBand(e,"from",a)}_fromEntityChanged(e,t){t.stopPropagation();const a=t.detail?.value;"string"==typeof a&&""!==a&&this._updateBand(e,"from",a)}_toggleFromMode(e){const t=this.bands?.[e]?.from,a=new Set(this._entityOpen);bb(t)?this._updateBand(e,"from",this._entityValue(t)??0):a.delete(e)||a.add(e),this._entityOpen=a}_colorChanged(e,t){t.stopPropagation();const a=t.detail?.value,o=this.bands?.[e]?.color??"primary";if(!a)return;const n=new Set(this._customOpen);a!==gb?(n.delete(e),this._customOpen=n,a!==o&&this._updateBand(e,"color",a)):wb(o)&&(this._customOpen=n.add(e))}_customColorChanged(e,t){t.stopPropagation();const a="string"==typeof t.detail?.value?t.detail.value.trim():"";if(!a)return;const o=new Set(this._customOpen);o.delete(e),this._customOpen=o,this._updateBand(e,"color",a)}_iconChanged(e,t){t.stopPropagation(),this._updateBand(e,"icon",t.detail?.value)}_labelChanged(e,t){t.stopPropagation(),this._updateBand(e,"label",t.detail?.value)}_removeBand(e){const t=[...this.bands??[]];t.splice(e,1),this._emit(t)}_addBand(){const e=[...this.bands??[]],t=e[e.length-1]?.from,a="number"==typeof t?t:bb(t)?this._entityValue(t)??NaN:"string"==typeof t&&""!==t.trim()?Number(t):NaN;e.push({from:Number.isFinite(a)?a+10:0,color:"primary"}),this._emit(e)}_renderBand(e,t,a){const o=!wb(e.color)||this._customOpen.has(t),n=bb(e.from)?e.from:void 0,r=void 0!==n||this._entityOpen.has(t);return q`<div class="band">
      <span class="swatch" style=${hb({"--swatch":je(e.color)})}></span>
      <ha-selector
        .required=${!1}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${a.from}
        .value=${void 0!==n?this._entityValue(n):e.from}
        .disabled=${r}
        @value-changed=${e=>this._fromChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!0}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${a.color}
        .value=${o?gb:e.color}
        @value-changed=${e=>this._colorChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${vb}
        .value=${e.label??""}
        @value-changed=${e=>this._labelChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${_b}
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
              .selector=${yb}
              .value=${n??""}
              @value-changed=${e=>this._fromEntityChanged(t,e)}
            ></ha-selector>`:W}
      ${o?q`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${vb}
              .value=${wb(e.color)?je(e.color):e.color}
              @value-changed=${e=>this._customColorChanged(t,e)}
            ></ha-selector>`:W}
    </div>`}render(){const e=this._getSelectors(),t=xb(this.bands);return q`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${t===gb?e.presetCustom:e.preset}
        .value=${t}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((t,a)=>this._renderBand(t,a,e))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}$b.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},$b.styles=r`
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",$b);const kb={number:{mode:"box",step:"any"}},Mb={entity:{domain:["sensor","input_number","number"]}};function zb(e){return null==e||""===e?"default":"number"==typeof e||""!==e.trim()&&Number.isFinite(Number(e))?"number":"entity"}class Sb extends le{constructor(){super(...arguments),this.languageController=new pb(this)}willUpdate(e){e.has("value")&&"default"!==zb(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const e=(e,t)=>zt(this.hass,e,t),t=[{value:"default",label:e("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:e("editor_limit_number")},{value:"entity",label:e("editor_limit_entity")}],a=t.map(e=>e.label).join("|");return this._modeSelector?.key!==a&&(this._modeSelector={key:a,selector:{select:{mode:"dropdown",options:t}}}),this._modeSelector.selector}get _currentMode(){return this._mode??zb(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e}}))}_modeChanged(e){e.stopPropagation();const t=e.detail?.value;t&&t!==this._currentMode&&(this._mode=t,void 0!==this.value&&this._emit(void 0))}_numberChanged(e){e.stopPropagation();const t=e.detail?.value,a="number"==typeof t?t:""===t||null==t?NaN:Number(t);this._mode="number",this._emit(Number.isFinite(a)?a:void 0)}_entityChanged(e){e.stopPropagation();const t=e.detail?.value;this._mode="entity",this._emit("string"==typeof t&&""!==t?t:void 0)}render(){const e=e=>zt(this.hass,e),t=this._currentMode;return q`<ha-selector
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
              .selector=${kb}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===t?q`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${e("editor_limit_entity")}
                .selector=${Mb}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:W}`}}Sb.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},Sb.styles=r`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",Sb);const Ab=["min","max","target"];function Eb(e,t,a){const o=t&&!a?e?.states[t]?.attributes?.unit_of_measurement:void 0;return"string"==typeof o&&o?o:void 0}class jb extends le{constructor(){super(),this.languageController=new pb(this),this._computeLabel=e=>this._t(`editor_${e.name}`),this._expanded=new Set}_t(e,t){return zt(this.hass,e,t)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(e){e.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e.entities??[]}}))}_set(e,t,a){this._emit(Nt(this._asConfig,e,t,a))}_move(e,t){const a=new Set;for(const o of this._expanded)a.add(o===e?t:o===t?e:o);this._expanded=a,this._emit(function(e,t,a){const o=[...e.entities??[]];if(t<0||t>=o.length||t===a)return e;const[n]=o.splice(t,1);return o.splice(Math.max(0,Math.min(a,o.length)),0,n),{...e,entities:o}}(this._asConfig,e,t))}_remove(e){const t=new Set;for(const a of this._expanded)a!==e&&t.add(a>e?a-1:a);this._expanded=t,this._emit(function(e,t){const a=[...e.entities??[]];return t<0||t>=a.length?e:(a.splice(t,1),{...e,entities:a})}(this._asConfig,e))}_toggle(e){const t=new Set(this._expanded);t.delete(e)||t.add(e),this._expanded=t}_add(e){e.stopPropagation();const t=e.detail?.value;"string"==typeof t&&""!==t&&(e.target.value="",this._emit(function(e,t){return{...e,entities:[...e.entities??[],t]}}(this._asConfig,t)))}_formChanged(e,t,a){a.stopPropagation();const o=this.entities?.[e];if(void 0===o)return;const n="string"==typeof o?{entity:o}:o,r=ya(n,t,a.detail?.value??{});if(r===n)return;const i=[...this.entities??[]],s=Object.keys(r);i[e]=1===s.length&&"entity"===s[0]?r.entity:r,this._emit({type:"",entities:i})}_rowLabel(e){const t=this.hass?.states[e];return t?{text:t.attributes.friendly_name||e,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:e}),missing:!0}:{text:e,missing:!1}}_form(e,t,a,o,n){return q`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${va(a,n)}
      .schema=${o}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(t,n,e)}
    ></ha-form>`}_renderOverrides(e,t){const a=e=>t=>{t.stopPropagation(),e(t.detail?.value)};return q`<div class="overrides">
      ${this._form("entity-attribute",t,e,function(e){let t=ia.get(e);return t||(t=[{name:"attribute",selector:{attribute:{entity_id:e}}}],ia.set(e,t)),t}(e.entity),Jt)}
      ${this._form("entity-text",t,e,ra,Xt)}
      ${this.chartFields?this._form("entity-chart",t,e,this.chartFields.schema,this.chartFields.fields):W}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${e.icon??""}
        @value-changed=${a(e=>this._set(t,"icon",e))}
      ></ha-icon-picker>
      ${Ab.map(o=>q`<cd-limit-field
            data-limit=${o}
            .hass=${this.hass}
            .label=${this._t(`editor_${o}`)}
            .value=${e[o]}
            .defaultLabel=${this._t("editor_card_setting")}
            @value-changed=${a(e=>this._set(t,o,e))}
          ></cd-limit-field>`)}
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${e.severity}
        .unit=${e.unit??this.unit??Eb(this.hass,e.entity,e.attribute)}
        @value-changed=${a(e=>this._set(t,"severity",e))}
      ></cd-bands-editor>
      ${this._form("entity-actions",t,e,na,aa)}
    </div>`}_renderRow(e,t,a){const o=Ct(e),n="string"==typeof e?{entity:e}:e,r=this._rowLabel(o),i=this._expanded.has(t);return q`<div class="entity">
      <span class="label ${r.missing?"missing":""}">${r.text}</span>
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${gt(o)}
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
          .disabled=${t===a-1}
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
      ${i?this._renderOverrides(n,t):W}
    </div>`}render(){const e=this.entities??[];return q`${e.map((t,a)=>this._renderRow(t,a,e.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}jb.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chartFields:{attribute:!1},_expanded:{state:!0}},jb.styles=r`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",jb);const Cb=["treemap","sunburst","icicle","radar"],Nb=["ring","arc","needle"];class Lb extends le{constructor(){super(...arguments),this.languageController=new pb(this),this._label=e=>zt(this.hass,e),this._computeLabel=e=>zt(this.hass,`editor_${e.name}`),this._computeRuleLabel=e=>zt(this.hass,`editor_rule_${e.name.slice(e.name.indexOf("_")+1)}`)}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]}),a=t?.constructor;await(a?.getConfigElement?.())}catch{}}()}_commit(e){this._config=e,function(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}(this,e)}_formChanged(e,t){if(t.stopPropagation(),!this._config)return;const a=t.detail?.value??{};this._commit(ya(this._config,e,a))}_form(e,t,a){return q`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${va(this._config,a)}
      .schema=${t}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(a,e)}
    ></ha-form>`}_panel(e,t){return q`<ha-expansion-panel .header=${this._label(`editor_section_${e}`)} outlined>
      <div class="panel section-${e}">${t}</div>
    </ha-expansion-panel>`}_subChanged(e,t){t.stopPropagation(),this._config&&this._commit(jt(this._config,e,t.detail?.value))}_chartFields(){const e=cb[this._config?.style??"bar"];return e&&lb(e)&&this._config?e.entityFields?.(this.hass,this._config):void 0}renderEntities(){return q`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        @value-changed=${e=>this._subChanged(["entities"],e)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(e){const t=this._config?.[e],a={};if(!t||"object"!=typeof t)return a;for(const[o,n]of Object.entries(t))a[`${e}_${o}`]=Array.isArray(n)?n:[n];return a}_ruleChanged(e,t){if(t.stopPropagation(),!this._config)return;const a=t.detail?.value??{},o=this._ruleData(e);let n=this._config;for(const r of da[e]){const t=`${e}_${r}`,i=Array.isArray(a[t])?a[t]:[];ga(o[t]??[],i)||(n=jt(n,[e,r],i.length?i:void 0))}n!==this._config&&this._commit(n)}_ruleForm(e){return q`<div class="rules-heading">${this._label(`editor_${e}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${e}_help`)}</p>
      <ha-form
        data-section=${e}
        .hass=${this.hass}
        .data=${this._ruleData(e)}
        .schema=${pa(e,this.hass)}
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
      ></cd-bands-editor>`}_firstEntityUnit(){const e=this._config?.entities?.[0];return"string"==typeof e?Eb(this.hass,e):e?.unit??Eb(this.hass,e?.entity,e?.attribute)}_selectStyle(e){if(!this._config)return;let t=jt(this._config,["style"],"bar"===e?void 0:e);const a=[].concat(t.group_by??[]),o=a.length>0&&a.every(e=>zu.includes(e));a.length>0&&o!==Cb.includes(e)&&(t=jt(t,["group_by"],void 0)),this._commit(t)}renderStyle(){const e=this._config?.style??"bar";return q`${sb.map(t=>{const a=it.filter(e=>cb[e].group===t);return a.length?q`<div class="style-group">${this._label(`editor_group_${t}`)}</div>
        <div class="styles" data-group=${t}>
          ${a.map(t=>{const a=cb[t],o=lb(a)?q`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${a.thumbnail()}
                </svg>`:Ma(t);return q`<button
              type="button"
              class="style"
              data-style=${t}
              aria-pressed=${e===t?"true":"false"}
              @click=${()=>this._selectStyle(t)}
            >
              ${o}<span>${this._label(`editor_style_${t}`)}</span>
            </button>`})}
        </div>`:W})}
    ${Nb.includes(e)?q`<p class="gauge-help">${this._label("editor_gauge_help")}</p>
            ${this._form("gauge",function(e,t,a){const o="text"===a,n=`${Mt(e)}|${t}|${o}`;let r=Gt.get(n);if(!r){const a={number:{min:-360,max:360,step:1,mode:"box",unit_of_measurement:"°"}};r=[{type:"grid",name:"",schema:[{name:"start_angle",selector:a},{name:"end_angle",selector:a}]},{name:"center",selector:{select:{mode:"dropdown",options:["value","band","name","text","none"].map(t=>({value:t,label:zt(e,`editor_center_mode_${t}`)}))}}},...o?[{name:"center_text",selector:{text:{}}}]:[],..."needle"===t?[{name:"tick_labels",selector:{boolean:{}}}]:[]],Gt.set(n,r)}return r}(this.hass,e,this._config?.center),Yt)}`:W}`}renderChart(){const e=cb[this._config?.style??"bar"];return e&&lb(e)&&e.editor&&this._config?this._panel("chart",e.editor({hass:this.hass,config:this._config,commit:e=>this._commit(e)})):W}renderDisplay(){return q`${this._toggles(Zt)}
    ${this._form("display",function(e){const t=Mt(e);return ma?.language!==t&&(ma={language:t,schema:ca(e)}),ma.schema}(this.hass),Wt)}`}_toggles(e){const t=va(this._config,e);return q`<div class="toggles">
      ${e.map(({name:a})=>{const o=this._label(`editor_${a}`),n=!0===t[a];return q`<div class="toggle">
          <span @click=${()=>this._toggle(e,a,!n)}>${o}</span
          ><ha-switch
            data-name=${a}
            aria-label=${o}
            .checked=${gt(n)}
            @change=${t=>this._toggle(e,a,t.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(e,t,a){if(!this._config)return;const o=va(this._config,e);this._commit(ya(this._config,e,{...o,[t]:a}))}renderActions(){return this._form("actions",na,Vt)}render(){return this._config?q`<div class="title">${this._form("title",oa,qt)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:W}}Lb.properties={hass:{attribute:!1},_config:{state:!0}},Lb.styles=r`
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",Lb);const Tb=r`
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
`;console.info("%c CHARTDECK %c 2.1.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const Ob={rows:16,tiles:8};function Fb(e){const t=Ob[e.layout];return Math.max(1,Math.floor((368+t)/((e.minColumnWidth??0)+t)))}class Pb extends le{constructor(){super(...arguments),this.languageController=new pb(this),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(e){const t=Object.values(e?.states??{}).filter(e=>e.entity_id.startsWith("sensor.")&&""!==e.state.trim()&&Number.isFinite(Number(e.state))),a=e=>"battery"===e.attributes?.device_class;return t.sort((e,t)=>a(e)!==a(t)?a(e)?-1:1:e.entity_id<t.entity_id?-1:e.entity_id>t.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:t.slice(0,3).map(e=>e.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(e){const t=function(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");const t=e.style??"bar";if(!it.includes(t))throw new Error(`Unknown style "${String(t)}". Use one of: ${it.join(", ")}`);const a=e.sort??"none";if(!lt.includes(a))throw new Error(`Unknown sort "${String(a)}". Use one of: ${lt.join(", ")}`);if(void 0!==e.entities&&!Array.isArray(e.entities))throw new Error('"entities" must be a list');const o=(e.entities??[]).map((t,a)=>ft(t,e,a)),n={name:!0,value:!0,icon:!0,target:!0,legend:!1,...e.show},r=ut(e.columns,"columns",1),i=ut(e.limit,"limit",1),s=De(e.include,"include"),l=De(e.exclude,"exclude");s&&ft("sensor.chartdeck_check",e,0);const c={style:t,entities:o,hideUnavailable:!0===e.hide_unavailable,cardOptions:e,show:n,sort:a,animate:!1!==e.animate,colorIcon:!0===e.color_icon,legendBands:ht(e.severity)??st};return void 0!==e.title&&(c.title=e.title),void 0!==r&&(c.columns=r),void 0!==i&&(c.limit=i),s&&(c.include=s),l&&(c.exclude=l),c}(e),a=cb[t.style];if(lb(a)&&a.validate?.(e),this._watched=function(e){const t=new Set;for(const a of e.entities){t.add(a.entity);for(const e of[a.min,a.max,a.target,...a.severity.map(e=>e.from)])"string"==typeof e&&""!==e&&t.add(e)}for(const a of e.legendBands)"string"==typeof a.from&&t.add(a.from);return t}(t),lb(a))for(const o of a.watch?.(e)??[])this._watched.add(o);this._config&&this._config.style!==t.style&&this._disconnectStyle(),this._config=t}get _styleName(){return this._config?.style??"bar"}get _style(){return cb[this._styleName]}_legend(e){const t=this._config;if(!t?.show.legend||0===this._count())return[];const a=e?.decimals??1;return Oe(cs(t.legendBands,this.hass),e=>jn(e,a,this.hass),e?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const e=this._config;if(!e)return 0;const t=this._style,a=16+(e.title?73:0)+(this._legend().length>0?32:0);if(lb(t))return a+t.height;const o=this._count(),n=void 0!==e.columns?Math.min(e.columns,Fb(t)):"rows"===t.layout?1:Math.min(o,t.tilesPerRow??3,Fb(t));return a+(0===o?0:Math.ceil(o/Math.max(1,n)))*t.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const e=this._count();if(lb(this._style))return{columns:12,min_columns:6,min_rows:2,...this._style.gridOptions,rows:"auto"};const t="rows"===this._style.layout;return{columns:t||e<=1?6:12,rows:"auto",min_columns:t?6:3,min_rows:1}}shouldUpdate(e){if(0===e.size)return!0;if([...e.keys()].some(e=>"hass"!==e))return!0;if(!e.has("hass"))return!1;const t=e.get("hass"),a=this.hass;if(!t||!a)return!0;for(const o of this._watched)if(t.states[o]!==a.states[o])return!0;if(this._config?.include){const e=us(this._config,a);if(e.length!==this._matched.length||e.some((e,t)=>e!==this._matched[t]))return!0;for(const o of e)if(t.states[o]!==a.states[o])return!0}return t.themes?.darkMode!==a.themes?.darkMode||t.themes?.theme!==a.themes?.theme||t.locale!==a.locale}willUpdate(){const e=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",e),(e||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const e=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const e=this._config?cb[this._config.style]:void 0;e&&lb(e)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const e=this._config?cb[this._config.style]:void 0;e&&lb(e)&&e.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle();for(const e of this._detachers.values())e();this._detachers.clear()}_syncActions(){const e=this.shadowRoot;if(!e)return;const t=new Set(e.querySelectorAll(".entity"));for(const[a,o]of this._detachers)t.has(a)||(o(),this._detachers.delete(a));for(const a of t)this._detachers.has(a)||this._detachers.set(a,Ae(a,()=>this._items[Number(a.dataset.index)].config))}_renderEntity(e,t,a,o){const n=this._config,r=Se(e.config),i=Ce(e.band.color),s=`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${i.start};--c-end:${i.end}`;return q`<div
      class="entity ${r?"interactive":""} ${e.available?"":"unavailable"} ${n.colorIcon&&e.available?"icon-band":""}"
      data-index=${t}
      role="meter"
      aria-valuenow=${e.available?String(e.value):W}
      aria-valuemin=${e.min}
      aria-valuemax=${e.max}
      aria-label=${e.label}
      tabindex=${r?0:W}
      style=${s}
    >
      ${a.render(e,{show:n.show,hass:o})}
    </div>`}render(){const e=this._config;if(!e)return W;const t=this.hass,a=this._style;let o,n,r;const i=t?function(e,t){const a=us(e,t).map((t,a)=>ft(t,e.cardOptions,a)),o=[...e.entities,...a].map(e=>ds(e,t));return e.hideUnavailable?o.filter(e=>e.available):o}(e,t):[];if(this._matched=t?us(e,t):[],0!==e.entities.length||e.include)if(t)if(0===i.length)this._items=[],o=q`<div class="hint">${zt(t,e.include?"no_matches":"none_available")}</div>`;else{n=i[0];const s=new Map,l=new Set;i.forEach((e,t)=>{s.set(e,l.has(e.entityId)?`${e.entityId}#${t}`:e.entityId),l.add(e.entityId)}),this._items=function(e,t){if("none"===t)return[...e];const a="ascending"===t?1:-1;return e.map((e,t)=>({item:e,index:t})).sort((e,t)=>{if(e.item.available!==t.item.available)return e.item.available?-1:1;if(e.item.available){const o=(e.item.position-t.item.position)*a;if(0!==o)return o}return e.index-t.index}).map(e=>e.item)}(i,e.sort).slice(0,e.limit);const c=this._items.filter(e=>e.available).map(e=>e.display.length);if(r=c.length?Math.max(...c):void 0,lb(a))o=q`<div class="chart">
          ${a.render({items:this._items,config:e,raw:e.cardOptions,hass:t,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const n="tiles"===a.layout,r=function(e,t){if(void 0===t)return"rows"===e.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const a=(t-1)*Ob[e.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${e.minColumnWidth??0}px, 100%), calc((100% - ${a}px) / ${t} - 0.5px)), 1fr))`}(a,e.columns);o=q`<div
          class="entities layout-${a.layout} ${n&&void 0!==e.columns?"has-columns":""}"
          style=${r}
        >
          ${Me(this._items,e=>s.get(e),(e,o)=>this._renderEntity(e,o,a,t))}
        </div>`}}else this._items=[],o=W;else this._items=[],o=q`<div class="hint">${zt(t,"no_entities")}</div>`;const s=this._legend(n);return q`<ha-card .header=${e.title}>
      <div
        class="content style-${this._styleName}"
        style=${void 0===r?W:`--cd-value-ch: ${r}`}
      >
        ${o}
      </div>
      ${s.length?q`<div class="legend">
              ${s.map(e=>q`<span class="legend-item"
                    ><span class="dot" style="background:${e.color}"></span>${e.text}</span
                  >`)}
            </div>`:W}
    </ha-card>`}}Pb.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},Pb.styles=[Tb,...Object.values(cb).map(e=>e.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",Pb);const Db=window.customCards??=[];Db.some(e=>"chartdeck-card"===e.type)||Db.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{Pb as ChartdeckCard};
//# sourceMappingURL=chartdeck-card.js.map
