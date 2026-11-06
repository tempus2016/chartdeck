/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;let n=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=a.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&a.set(o,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,o,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new n(a,e,o)},i=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},b=(e,t)=>!s(e,t),_={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),a=this.getPropertyDescriptor(e,o,t);void 0!==a&&l(this.prototype,e,a)}}static getPropertyDescriptor(e,t,o){const{get:a,set:n}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const r=a?.call(this);n?.call(this,t),this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const e=this._$Eu(t,o);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(i(e))}else void 0!==e&&t.push(i(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((o,a)=>{if(t)o.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of a){const a=document.createElement("style"),n=e.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=t.cssText,o.appendChild(a)}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(void 0!==a&&!0===o.reflect){const n=(void 0!==o.converter?.toAttribute?o.converter:y).toAttribute(t,o.type);this._$Em=e,null==n?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){const o=this.constructor,a=o._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=o.getPropertyOptions(a),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=a;const r=n.fromAttribute(t,e.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(e,t,o,a=!1,n){if(void 0!==e){const r=this.constructor;if(!1===a&&(n=this[e]),o??=r.getPropertyOptions(e),!((o.hasChanged??b)(n,t)||o.useDefault&&o.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:a,wrapped:n},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,g?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=e=>e,k=w.trustedTypes,M=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+A,E=`<${S}>`,C=document,j=()=>C.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,T="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,P=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,H=/"/g,I=/^(?:script|style|textarea|title)$/i,B=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),R=B(1),Z=B(2),q=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,Y=C.createTreeWalker(C,129);function G(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},o){let a;this.parts=[];let n=0,r=0;const i=e.length-1,s=this.parts,[l,c]=((e,t)=>{const o=e.length-1,a=[];let n,r=2===t?"<svg>":3===t?"<math>":"",i=O;for(let s=0;s<o;s++){const t=e[s];let o,l,c=-1,d=0;for(;d<t.length&&(i.lastIndex=d,l=i.exec(t),null!==l);)d=i.lastIndex,i===O?"!--"===l[1]?i=F:void 0!==l[1]?i=P:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),i=D):void 0!==l[3]&&(i=D):i===D?">"===l[0]?(i=n??O,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,o=l[1],i=void 0===l[3]?D:'"'===l[3]?H:U):i===H||i===U?i=D:i===F||i===P?i=O:(i=D,n=void 0);const u=i===D&&e[s+1].startsWith("/>")?" ":"";r+=i===O?t+E:c>=0?(a.push(o),t.slice(0,c)+z+t.slice(c)+A+u):t+A+(-2===c?s:u)}return[G(e,r+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]})(e,t);if(this.el=X.createElement(l,o),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=Y.nextNode())&&s.length<i;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(z)){const t=c[r++],o=a.getAttribute(e).split(A),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:i[2],strings:o,ctor:"."===i[1]?te:"?"===i[1]?oe:"@"===i[1]?ae:ee}),a.removeAttribute(e)}else e.startsWith(A)&&(s.push({type:6,index:n}),a.removeAttribute(e));if(I.test(a.tagName)){const e=a.textContent.split(A),t=e.length-1;if(t>0){a.textContent=k?k.emptyScript:"";for(let o=0;o<t;o++)a.append(e[o],j()),Y.nextNode(),s.push({type:2,index:++n});a.append(e[t],j())}}}else if(8===a.nodeType)if(a.data===S)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(A,e+1));)s.push({type:7,index:n}),e+=A.length-1}n++}}static createElement(e,t){const o=C.createElement("template");return o.innerHTML=e,o}}function J(e,t,o=e,a){if(t===q)return t;let n=void 0!==a?o._$Co?.[a]:o._$Cl;const r=N(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,a)),void 0!==a?(o._$Co??=[])[a]=n:o._$Cl=n),void 0!==n&&(t=J(e,n._$AS(e,t.values),n,a)),t}let K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,a=(e?.creationScope??C).importNode(t,!0);Y.currentNode=a;let n=Y.nextNode(),r=0,i=0,s=o[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new Q(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ne(n,this,e)),this._$AV.push(t),s=o[++i]}r!==s?.index&&(n=Y.nextNode(),r++)}return Y.currentNode=C,a}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,a){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),N(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,a="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=X.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new K(a,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new X(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,a=0;for(const n of e)a===t.length?t.push(o=new Q(this.O(j()),this.O(j()),this,this.options)):o=t[a],o._$AI(n),a++;a<t.length&&(this._$AR(o&&o._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,a,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=W}_$AI(e,t=this,o,a){const n=this.strings;let r=!1;if(void 0===n)e=J(this,e,t,0),r=!N(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const a=e;let i,s;for(e=n[0],i=0;i<n.length-1;i++)s=J(this,a[o+i],t,i),s===q&&(s=this._$AH[i]),r||=!N(s)||s!==this._$AH[i],s===W?e=W:e!==W&&(e+=(s??"")+n[i+1]),this._$AH[i]=s}r&&!a&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class ae extends ee{constructor(e,t,o,a,n){super(e,t,o,a,n),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??W)===q)return;const o=this._$AH,a=e===W&&o!==W||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==W&&(o===W||a);a&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const re={I:Q},ie=w.litHtmlPolyfillSupport;ie?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let le=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const a=o?.renderBefore??t;let n=a._$litPart$;if(void 0===n){const e=o?.renderBefore??null;a._$litPart$=n=new Q(t.insertBefore(j(),e),e,void 0,o??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};le._$litElement$=!0,le.finalized=!0,se.litElementHydrateSupport?.({LitElement:le});const ce=se.litElementPolyfillSupport;ce?.({LitElement:le}),(se.litElementVersions??=[]).push("4.2.2");
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
 */const{I:ge}=re,ve=e=>e,ye=()=>document.createComment(""),be=(e,t,o)=>{const a=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=a.insertBefore(ye(),n),r=a.insertBefore(ye(),n);o=new ge(t,r,e,e.options)}else{const t=o._$AB.nextSibling,r=o._$AM,i=r!==e;if(i){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==n||i){let e=o._$AA;for(;e!==t;){const t=ve(e).nextSibling;ve(a).insertBefore(e,n),e=t}}}return o},_e=(e,t,o=e)=>(e._$AI(t,o),e),xe={},we=(e,t=xe)=>e._$AH=t,$e=e=>{e._$AR(),e._$AA.remove()},ke=(e,t,o)=>{const a=new Map;for(let n=t;n<=o;n++)a.set(e[n],n);return a},Me=me(class extends fe{constructor(e){if(super(e),e.type!==ue)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let a;void 0===o?o=t:void 0!==t&&(a=t);const n=[],r=[];let i=0;for(const s of e)n[i]=a?a(s,i):i,r[i]=o(s,i),i++;return{values:r,keys:n}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,a]){const n=(e=>e._$AH)(e),{values:r,keys:i}=this.dt(t,o,a);if(!Array.isArray(n))return this.ut=i,r;const s=this.ut??=[],l=[];let c,d,u=0,h=n.length-1,p=0,m=r.length-1;for(;u<=h&&p<=m;)if(null===n[u])u++;else if(null===n[h])h--;else if(s[u]===i[p])l[p]=_e(n[u],r[p]),u++,p++;else if(s[h]===i[m])l[m]=_e(n[h],r[m]),h--,m--;else if(s[u]===i[m])l[m]=_e(n[u],r[m]),be(e,l[m+1],n[u]),u++,m--;else if(s[h]===i[p])l[p]=_e(n[h],r[p]),be(e,n[u],n[h]),h--,p++;else if(void 0===c&&(c=ke(i,p,m),d=ke(s,u,h)),c.has(s[u]))if(c.has(s[h])){const t=d.get(i[p]),o=void 0!==t?n[t]:null;if(null===o){const t=be(e,n[u]);_e(t,r[p]),l[p]=t}else l[p]=_e(o,r[p]),be(e,n[u],o),n[t]=null;p++}else $e(n[h]),h--;else $e(n[u]),u++;for(;p<=m;){const t=be(e,l[m+1]);_e(t,r[p]),l[p++]=t}for(;u<=h;){const e=n[u++];null!==e&&$e(e)}return this.ut=i,we(e,l),q}}),ze=e=>!!e&&"none"!==e.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ae(e){return ze(e.tap_action)||ze(e.hold_action)||ze(e.double_tap_action)}function Se(e,t){let o,a,n=0,r=0,i=!1,s=!1;const l=o=>{const a=t(),n="tap"===o?a.tap_action:"hold"===o?a.hold_action:a.double_tap_action;ze(n)&&e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:a,action:o}}))},c=()=>{void 0!==o&&clearTimeout(o),o=void 0},d=e=>{const a=e;a.button>0||(i=!0,s=!1,n=a.clientX,r=a.clientY,c(),ze(t().hold_action)&&(o=setTimeout(()=>{o=void 0,s=!0,l("hold")},500)))},u=e=>{if(!i)return;const t=e;Math.hypot(t.clientX-n,t.clientY-r)>10&&(c(),i=!1)},h=()=>{c(),i=!1},p=()=>{const e=i;c(),i=!1,e&&!s?ze(t().double_tap_action)?void 0!==a?(clearTimeout(a),a=void 0,l("double_tap")):a=setTimeout(()=>{a=void 0,l("tap")},250):l("tap"):s=!1},m=e=>{const t=e;t.repeat||"Enter"!==t.key&&" "!==t.key||(" "===t.key&&t.preventDefault(),l("tap"))},f=e=>{ze(t().hold_action)&&e.preventDefault()};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",u),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",h),e.addEventListener("pointerleave",h),e.addEventListener("keydown",m),e.addEventListener("contextmenu",f),()=>{c(),void 0!==a&&clearTimeout(a),a=void 0,e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",h),e.removeEventListener("pointerleave",h),e.removeEventListener("keydown",m),e.removeEventListener("contextmenu",f)}}const Ee={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function Ce(e){if(Object.prototype.hasOwnProperty.call(Ee,e)){const{variable:t,fallback:o}=Ee[e];return`var(${t}, ${o})`}return e}function je(e){const t=Ce(e);return{start:t,end:`color-mix(in srgb, ${t} 80%, #fff)`}}const Ne=new Set(["amber"]);function Le(e){if(Object.prototype.hasOwnProperty.call(Ee,e))return Ne.has(e)?"dark":"light";const t=function(e){const t=e.trim().toLowerCase(),o=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(o){const e=o[1].length<=4?[...o[1]].map(e=>e+e).join(""):o[1],[t,a,n]=[0,2,4].map(t=>parseInt(e.slice(t,t+2),16));return[t,a,n,8===e.length?parseInt(e.slice(6,8),16)/255:1]}const a=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(t);if(a){const[e,t,o]=[a[1],a[2],a[3]].map(e=>Math.min(255,Number(e))),n=void 0===a[4]?1:Number(a[4])/(a[5]?100:1);return[e,t,o,Math.min(1,n)]}}(e);return t?t[3]<.5?"theme":function([e,t,o]){const a=e=>{const t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return.2126*a(e)+.7152*a(t)+.0722*a(o)}([t[0],t[1],t[2]])>.4?"dark":"light":"light"}function Te(e,t){let o=t[0];for(const a of t){if(!(a.from<=e))break;o=a}return o}function Oe(e,t,o){const a=o?` ${o}`:"",n=[];return e.forEach((o,r)=>{const i=e[r+1],s=Ce(o.color);o.label?n.push({color:s,text:o.label}):Number.isFinite(o.from)?i?n.push({color:s,text:`${t(o.from)}–${t(i.from)}${a}`}):n.push({color:s,text:`${t(o.from)}${a}+`}):i&&n.push({color:s,text:`< ${t(i.from)}${a}`})}),n}const Fe={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},Pe=["label","area","floor","device_class","domain","entity"];function De(e,t){if(null==e)return;if("object"!=typeof e||Array.isArray(e))throw new Error(`"${t}" must list what to match, such as "area" or "device_class"`);const o="include"===t?Pe.filter(e=>"entity"!==e):Pe,a={};for(const[n,r]of Object.entries(e)){if(!o.includes(n))throw new Error(`"${t}" can't match on "${n}". Use: ${o.join(", ")}`);const e=(Array.isArray(r)?r:[r]).filter(e=>null!=e&&""!==e);if(e.some(e=>"string"!=typeof e))throw new Error(`"${t}.${n}" must be text or a list of text`);e.length&&(a[n]=e)}return Object.keys(a).length?a:void 0}function Ue(e){const t=e.state;return"unavailable"===t||"unknown"===t||""!==t.trim()&&Number.isFinite(Number(t))}function He(e,t){const o=e.entity_id,a=t.entities?.[o],n=a?.device_id?t.devices?.[a.device_id]:void 0,r=a?.area_id??n?.area_id??void 0,i=e.attributes?.device_class;return{label:[...a?.labels??[],...n?.labels??[]],area:r,floor:r?t.areas?.[r]?.floor_id??void 0:void 0,device_class:"string"==typeof i?i:void 0,domain:o.slice(0,o.indexOf(".")),entity:o}}function Ie(e,t,o){const a=e[t],n=o[t];return Array.isArray(n)?n.some(e=>a.includes(e)):void 0!==n&&a.includes(n)}function Be(e,t){return Object.keys(e).every(o=>Ie(e,o,t))}function Re(e,t){return!!e&&Object.keys(e).some(o=>Ie(e,o,t))}const Ze=new WeakMap;const qe=e=>(Math.abs(e)<.005?0:e).toFixed(2);function We(e,t,o,a){const n=a*Math.PI/180;return[e+o*Math.sin(n),t-o*Math.cos(n)]}function Ve(e,t,o,a,n){const r=String(Number(o.toFixed(2))),i=n-a,[s,l]=We(e,t,o,a);if(i>=359.99){const[n,i]=We(e,t,o,a+180);return`M${qe(s)} ${qe(l)} A${r} ${r} 0 1 1 ${qe(n)} ${qe(i)} A${r} ${r} 0 1 1 ${qe(s)} ${qe(l)}`}const[c,d]=We(e,t,o,n),u=i>180?1:0;return`M${qe(s)} ${qe(l)} A${r} ${r} 0 ${u} 1 ${qe(c)} ${qe(d)}`}const Ye=["value","band","name","text","none"],Ge={ring:[-180,180],arc:[-135,135],needle:[-90,90]};function Xe(e,t){if(null==e||""===e)return;const o="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof o||!Number.isFinite(o)||o<-360||o>360)throw new Error(`"${t}" must be a number of degrees from -360 to 360`);return o}function Je(e,t){return[t?.startAngle??e[0],t?.endAngle??e[1]]}function Ke(e){return void 0!==e?.startAngle||void 0!==e?.endAngle}function Qe([e,t],o){return e+(t-e)*o}function et(...e){return{x0:Math.min(...e.map(e=>e.x0)),y0:Math.min(...e.map(e=>e.y0)),x1:Math.max(...e.map(e=>e.x1)),y1:Math.max(...e.map(e=>e.y1))}}function tt(e,t,o,a,n,r){const i=[a,n];for(let h=Math.ceil(a/90);90*h<=n;h++)i.push(90*h);const s=i.map(a=>We(e,t,o,a)),l=Math.min(...s.map(e=>e[0])),c=Math.min(...s.map(e=>e[1])),d=Math.max(...s.map(e=>e[0])),u=Math.max(...s.map(e=>e[1]));return{x0:l-r,y0:c-r,x1:d+r,y1:u+r}}function ot(e,t=5){if(!Number.isFinite(e)||e<=0)return 1;const o=e/t,a=10**Math.floor(Math.log10(o)),n=o/a;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*a}function at(e,t){const o=e=>{const t=String(Number(e.toPrecision(12)));return t.includes("e")?0:t.split(".")[1]?.length??0};return Math.min(3,Math.max(o(t),o(e)))}function nt(e){const t=e*Math.PI/180,o=Math.sin(t),a=Math.cos(t);return{anchor:o>.3?"start":o<-.3?"end":"middle",dy:a>.3?0:a<-.3?.75:.35}}function rt(e,t){switch(t?.center??"value"){case"band":return e.band.label?{kind:"text",text:e.band.label,band:!0}:{kind:"value"};case"name":return{kind:"text",text:e.name,band:!1};case"text":return t.centerText?{kind:"text",text:t.centerText,band:!1}:{kind:"none"};case"none":return{kind:"none"};default:return{kind:"value"}}}const it=["bar","thin","segmented","tank","ring","needle","arc","line","column","area","combined","pie","rings","pictograph","waffle","histogram","scatter","bubble","heatmap","box","funnel","radar","polar_area","treemap","sunburst","icicle","grouped_bars","bullet","lollipop","waterfall","slope","dumbbell","range_area","sparkline","streamgraph","candlestick","violin","beeswarm","sankey","timeline","climate","wind_rose","day_clock","trend"],st=[{from:-1/0,color:"primary"}],lt=["none","ascending","descending"];function ct(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"==typeof e&&""!==e.trim()){const t=Number(e);return Number.isFinite(t)?t:void 0}}function dt(e,t){if(null==e||""===e)return;const o=ct(e);if(void 0!==o)return o;if("string"==typeof e)return e;throw new Error(`"${t}" must be a number or an entity id`)}function ut(e,t,o,a=1/0){if(null==e||""===e)return;const n=ct(e);if(void 0===n||!Number.isInteger(n)||n<o||n>a){throw new Error(`"${t}" must be a whole number ${a===1/0?`of at least ${o}`:`from ${o} to ${a}`}`)}return n}function ht(e){if(null==e)return;if(!Array.isArray(e))throw new Error('"severity" must be a list of bands');if(0===e.length)return;const t=e.map((e,t)=>{let o;try{o=dt(e?.from,"from")}catch{o=void 0}if(void 0===o)throw new Error(`Severity band ${t+1}: "from" must be a number or an entity id`);if("string"!=typeof e.color||!e.color)throw new Error(`Severity band ${t+1}: "color" is required`);return{...e,from:o}});return t.every(e=>"number"==typeof e.from)?t.sort((e,t)=>e.from-t.from):t}function pt(e,t,o){if(null==e)return{action:t};if("object"!=typeof e||"string"!=typeof e.action)throw new Error(`"${o}" must have an "action"`);return e}function mt(e,t){return void 0!==e?e:t}function ft(e,t,o){const a="string"==typeof e?{entity:e}:e;if(!a||"object"!=typeof a||"string"!=typeof a.entity||!a.entity)throw new Error(`Entity ${o+1} needs an "entity" id`);if(void 0!==a.attribute&&null!==a.attribute&&"string"!=typeof a.attribute)throw new Error(`Entity ${o+1}: "attribute" must be an attribute name`);const n=mt(dt(a.min,"min"),dt(t.min,"min"))??0,r=mt(dt(a.max,"max"),dt(t.max,"max"))??100;if("number"==typeof n&&"number"==typeof r&&n>=r)throw new Error(`"max" (${r}) must be greater than "min" (${n})`);const i={...a,entity:a.entity,min:n,max:r,severity:ht(a.severity)??ht(t.severity)??st,tap_action:pt(mt(a.tap_action,t.tap_action),"more-info","tap_action"),hold_action:pt(mt(a.hold_action,t.hold_action),"none","hold_action"),double_tap_action:pt(mt(a.double_tap_action,t.double_tap_action),"none","double_tap_action")},s=mt(a.name,t.name),l=mt(a.icon,t.icon),c=mt(a.unit,t.unit),d=mt(dt(a.target,"target"),dt(t.target,"target")),u=mt(ut(a.decimals,"decimals",0,20),ut(t.decimals,"decimals",0,20));return void 0!==s&&(i.name=s),void 0!==l&&(i.icon=l),void 0!==c&&(i.unit=c),void 0!==d&&(i.target=d),void 0!==u&&(i.decimals=u),a.attribute||delete i.attribute,Ge[t.style??"bar"]&&(i.gauge=function(e,t=e.style??"bar"){const o=Xe(e.start_angle,"start_angle"),a=Xe(e.end_angle,"end_angle"),n=Ge[t];if(n&&(void 0!==o||void 0!==a)){const[e,t]=[o??n[0],a??n[1]];if(!(t>e))throw new Error(`"end_angle" (${t}) must be greater than "start_angle" (${e})`);if(t-e>360)throw new Error('"end_angle" can be at most 360 degrees after "start_angle"')}const r=e.center??"value";if(!Ye.includes(r))throw new Error(`"center" must be one of: ${Ye.join(", ")}`);if(void 0!==e.center_text&&null!==e.center_text&&"string"!=typeof e.center_text)throw new Error('"center_text" must be text');if(void 0!==e.tick_labels&&"boolean"!=typeof e.tick_labels)throw new Error('"tick_labels" must be true or false');const i={center:r,centerText:e.center_text??"",tickLabels:!0===e.tick_labels};return void 0!==o&&(i.startAngle=o),void 0!==a&&(i.endAngle=a),i}(t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt=me(class extends fe{constructor(e){if(super(e),e.type!==he&&e.type!==de&&e.type!==pe)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===q||t===W)return t;const o=e.element,a=e.name;if(e.type===he){if(t===o[a])return q}else if(e.type===pe){if(!!t===o.hasAttribute(a))return q}else if(e.type===de&&o.getAttribute(a)===t+"")return q;return we(e),t}}),vt={en:{entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_gauge_help:"Angles are in degrees, clockwise from the top: -90 is the left, 90 the right. Leave them empty for the style's usual shape.",editor_start_angle:"Start angle",editor_end_angle:"End angle",editor_center:"In the middle",editor_center_mode_value:"The value",editor_center_mode_band:"The colour band's label",editor_center_mode_name:"The name",editor_center_mode_text:"My own text",editor_center_mode_none:"Nothing",editor_center_text:"Text",editor_tick_labels:"Numbers on the scale",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours"}};function yt(e,t){vt[e]={...vt[e],...t}}function bt(e){return(e?.locale?.language??e?.language??"en").split("-")[0]}function _t(e,t,o){const a=bt(e),n=vt[a]?.[t]??vt.en[t]??t;return o?n.replace(/\{(\w+)\}/g,(e,t)=>t in o?String(o[t]):e):n}function xt(e){return null==e||""===e}function wt(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function $t(e,t,o){const[a,...n]=t,r=function(e,t){return Array.isArray(e)?[...e]:wt(e)?{...e}:"number"==typeof t?[]:{}}(e,a),i=r,s=n.length?$t(i[a],n,o):o,l=n.length>0&&wt(s)&&0===Object.keys(s).length;return xt(s)?Array.isArray(r)&&"number"==typeof a?r.splice(a,1):delete i[a]:l&&wt(r)?delete i[a]:i[a]=s,r}function kt(e,t,o){return 0===t.length||xt(o)&&void 0===function(e,t){let o=e;for(const a of t){if("object"!=typeof o||null===o)return;o=o[a]}return o}(e,t)?e:$t(e,t,o)}function Mt(e){return"string"==typeof e?e:e.entity}function zt(e,t,o,a){if("entity"===o&&(xt(a)||"string"!=typeof a))return e;const n=[...e.entities??[]],r=n[t];if(void 0===r)return e;const i="string"==typeof r?{entity:r}:{...r};xt(a)?delete i[o]:i[o]=a;const s=Object.keys(i);return n[t]=1===s.length&&"entity"===s[0]&&"string"==typeof i.entity?i.entity:i,{...e,entities:n}}const At=2.5,St=.5,Et=12;function Ct(e,t){const o=e;return{width:o.line_width??t.line_width??At,dots:o.dots??!0===t.dots,onTop:!0===o.on_top}}function jt(e,t){return[...e.filter(e=>!t(e)),...e.filter(t)]}function Nt(e){return e.map(([e,t])=>`M${Math.round(100*e)/100},${Math.round(100*t)/100}h0`).join("")}function Lt(e){return Math.round(10*(e+3.5))/10}function Tt(e,t){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<St||e>Et))throw new Error(`${t} must be a number from 0.5 to 12`)}function Ot(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`${t} must be true or false`)}function Ft(e){Tt(e.line_width,'"line_width"'),Ot(e.dots,'"dots"');for(const t of e.entities??[])"object"==typeof t&&(Tt(t.line_width,`"line_width" of ${t.entity}`),Ot(t.dots,`"dots" of ${t.entity}`),Ot(t.on_top,`"on_top" of ${t.entity}`))}const Pt=[{name:"title",path:["title"]}],Dt=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],Ut=[{name:"color_icon",path:["color_icon"],default:!1}],Ht=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],It=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],Bt=[{name:"start_angle",path:["start_angle"]},{name:"end_angle",path:["end_angle"]},{name:"center",path:["center"],default:"value"},{name:"center_text",path:["center_text"]},{name:"tick_labels",path:["tick_labels"],default:!1}],Rt=new Map;const Zt=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],qt=[{name:"attribute",path:["attribute"]}],Wt=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],Vt={number:{min:St,max:Et,step:.5,mode:"box",unit_of_measurement:"px"}},Yt=new Map;function Gt(e){let t=Yt.get(e);return t||(t=[...Wt,{name:"dots",path:["dots"],default:e}],Yt.set(e,t)),t}const Xt=It.map(({name:e,path:t})=>({name:e,path:t})),Jt=[{name:"title",selector:{text:{}}}],Kt=It.map(({name:e})=>({name:e,selector:{ui_action:{}}})),Qt=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],eo=new Map;let to;function oo(e){const t=bt(e);if(to?.language!==t){const o=t=>_t(e,t);to={language:t,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(e=>({value:e,label:o(`editor_curve_${e}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Vt},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return to.schema}function ao(e){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(t=>({value:t,label:_t(e,`editor_sort_${t}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const no={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function ro(e,t){const o=e=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:e}});switch(e){case"device_class":return o(t.deviceClasses);case"domain":return o(t.domains);case"entity":return{entity:{multiple:!0}};default:return{[e]:{multiple:!0}}}}const io=new Map;function so(e,t){const o=function(e){const t=new Set,o=new Set;for(const a of Object.values(e?.states??{})){const e=a.attributes?.device_class;"string"==typeof e&&e&&t.add(e),o.add(a.entity_id.slice(0,a.entity_id.indexOf(".")))}return{deviceClasses:[...t].sort(),domains:[...o].sort()}}(t),a=`${o.deviceClasses.join()}|${o.domains.join()}`,n=io.get(e);if(n?.key===a)return n.schema;const r=no[e].map(t=>({name:`${e}_${t}`,selector:ro(t,o)}));return io.set(e,{key:a,schema:r}),r}let lo;function co(e,t){let o=e;for(const a of t){if("object"!=typeof o||null===o)return;o=o[a]}return o}function uo(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;const o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every(o=>uo(e[o],t[o]))}function ho(e,t){const o={};for(const a of t){const t=co(e,a.path)??a.default;void 0!==t&&(o[a.name]=t)}return o}function po(e,t,o){const a=ho(e,t);let n=e;for(const r of t){const e=o[r.name];uo(a[r.name],e)||(n=kt(n,r.path,void 0!==r.default&&uo(e,r.default)?void 0:e))}return n}const mo="var(--divider-color, rgba(127, 127, 127, 0.3))",fo="var(--primary-color, #03a9f4)",go="var(--secondary-text-color, #727272)";function vo(e,t,o,a){const n=(a-90)*Math.PI/180;return[(e+o*Math.cos(n)).toFixed(2),(t+o*Math.sin(n)).toFixed(2)]}function yo(e,t,o,a){return vo(e,t,o,a).join(" ")}function bo(e,t,o,a,n){const r=n-a>180?1:0;return`M ${yo(e,t,o,a)} A ${o} ${o} 0 ${r} 1 ${yo(e,t,o,n)}`}function _o(e){return R`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(e){switch(e){case"bar":return Z`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${mo} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${fo} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${mo} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${fo} />`;case"thin":return Z`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${go} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${mo} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${fo} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${go} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${mo} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${fo} />`;case"segmented":return Z`${[0,1].map(e=>Array.from({length:8},(t,o)=>Z`<rect x=${6+6.75*o} y=${0===e?9:23} width="5" height="9" rx="1.5"
            fill=${o<(0===e?6:3)?fo:mo} />`))}`;case"tank":return Z`${[14,36].map((e,t)=>Z`
          <rect x=${e} y="5" width="14" height="30" rx="4" fill=${mo} />
          <rect x=${e} y=${0===t?13:23} width="14" height=${0===t?22:12} rx="4" fill=${fo} />`)}`;case"ring":return Z`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${mo} stroke-width="5" />
        <path d=${bo(32,20,14,0,250)} fill="none" stroke=${fo} stroke-width="5" stroke-linecap="round" />`;case"arc":return Z`
        <path d=${bo(32,21,14,-135,135)} fill="none" stroke=${mo} stroke-width="5" stroke-linecap="round" />
        <path d=${bo(32,21,14,-135,40)} fill="none" stroke=${fo} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[e,t]=vo(32,32,18,25);return Z`
        <path d=${bo(32,32,22,-90,90)} fill="none" stroke=${mo} stroke-width="5" />
        <path d=${bo(32,32,22,-90,25)} fill="none" stroke=${fo} stroke-width="5" />
        <line x1="32" y1="32" x2=${e} y2=${t} stroke=${go} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${go} />`}default:return Z``}}(e)}
  </svg>`}function xo(e){let t=1/0,o=-1/0;for(const a of e)for(const e of a)for(const a of[e.v,e.min,e.max])"number"==typeof a&&(a<t&&(t=a),a>o&&(o=a));return t===1/0?void 0:[t,o]}function wo([e,t],o=.08){if(e===t)return[e-1,t+1];const a=(t-e)*o;return[e-a,t+a]}function $o(e,t){const[o,a]=e,[n,r]=t,i=a===o?0:(r-n)/(a-o);return e=>n+(e-o)*i}const ko=["linear","log"],Mo=["outside","inside"],zo=!0,Ao=!0,So="outside",Eo=!0,Co=!1,jo="linear",No=e=>"number"==typeof e&&Number.isFinite(e);function Lo(e){const t=e;for(const o of["x_axis","y_axis"])if(void 0!==t[o]&&"boolean"!=typeof t[o])throw new Error(`"${o}" must be true or false`);if(void 0!==t.axis_labels&&!Mo.includes(t.axis_labels))throw new Error(`"axis_labels" must be one of: ${Mo.join(", ")}`);if(void 0!==t.gridlines){const e=t.gridlines;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const t of["horizontal","vertical"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"gridlines.${t}" must be true or false`)}for(const o of["y_min","y_max"])if(void 0!==t[o]&&!No(t[o]))throw new Error(`"${o}" must be a number`);if(No(t.y_min)&&No(t.y_max)&&t.y_min>=t.y_max)throw new Error('"y_min" must be below "y_max"');if(void 0!==t.y_scale&&!ko.includes(t.y_scale))throw new Error(`"y_scale" must be one of: ${ko.join(", ")}`);if("log"===t.y_scale)for(const o of["y_min","y_max"])if(No(t[o])&&t[o]<=0)throw new Error(`"${o}" must be above 0 on a log scale`)}function To(e){const t=e,o=t.gridlines??{};return{x:t.x_axis??zo,y:t.y_axis??Ao,labels:t.axis_labels??So,horizontal:o.horizontal??Eo,vertical:o.vertical??Co,min:No(t.y_min)?t.y_min:void 0,max:No(t.y_max)?t.y_max:void 0,scale:t.y_scale??jo}}function Oo(e,t){if(!(e>0&&Number.isFinite(e)))return 1;const o=e/Math.max(1,t),a=10**Math.floor(Math.log10(o));for(const n of[1,2,5])if(n*a>=o*(1-1e-9))return n*a;return 10*a}function Fo(e){return Math.max(0,-Math.floor(Math.log10(e)+1e-9))}const Po=e=>Number(e.toPrecision(12));function Do(e,t,o){let[a,n]=wo(e??[0,1]);void 0!==t.min&&(a=t.min),void 0!==t.max&&(n=t.max),n<=a&&(void 0!==t.min?n=a+Math.max(1,.1*Math.abs(a)):a=n-Math.max(1,.1*Math.abs(n)));const r=Oo(n-a,o);void 0===t.min&&(a=Po(Math.floor(a/r+1e-9)*r)),void 0===t.max&&(n=Po(Math.ceil(n/r-1e-9)*r));const i=[];for(let s=Math.ceil(a/r-1e-9);s*r<=n+1e-9*r;s++)i.push(Po(s*r));return{domain:[a,n],ticks:i,decimals:Fo(r)}}const Uo=6e4,Ho=36e5,Io=864e5,Bo=[...[1,5,10,15,30].map(e=>({unit:"minute",n:e,ms:e*Uo})),...[1,2,3,6,12].map(e=>({unit:"hour",n:e,ms:e*Ho})),...[1,2,7].map(e=>({unit:"day",n:e,ms:e*Io})),...[1,2,3,6].map(e=>({unit:"month",n:e,ms:30.44*e*Io})),...[1,2,5,10,20,50,100].map(e=>({unit:"year",n:e,ms:365.25*e*Io}))];const Ro=e=>-new Date(e).getTimezoneOffset()*Uo;function Zo(e){if(!e)return Ro;let t;try{t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return Ro}return e=>{const o={};for(const a of t.formatToParts(e))o[a.type]=Number(a.value);return Date.UTC(o.year,o.month-1,o.day,o.hour%24,o.minute,o.second)-1e3*Math.floor(e/1e3)}}function qo(e,t){return e-t(e-t(e))}function Wo(e,t,o,a){const n=[],r=e.end+t(e.end);for(let i=o,s=0;i<=r&&s<1e3;i=a(i),s++){const o=qo(i,t);o>=e.start&&o<=e.end&&o!==n[n.length-1]&&n.push(o)}return n}function Vo(e,t,o=Ro){const{unit:a,n:n}=function(e,t){return Bo.find(o=>e/o.ms<=Math.max(1,t))??Bo[Bo.length-1]}(e.end-e.start,t),r=e.start+o(e.start);if("minute"===a||"hour"===a||"day"===a&&7!==n){const t=n*("minute"===a?Uo:"hour"===a?Ho:Io);return{unit:a,ticks:Wo(e,o,Math.ceil(r/t)*t,e=>e+t)}}if("day"===a){const t=Math.ceil(r/Io);return{unit:a,ticks:Wo(e,o,(t+((4-t)%7+7)%7)*Io,e=>e+7*Io)}}const i=new Date(r);if("month"===a){let t=i.getUTCFullYear(),s=i.getUTCMonth();Date.UTC(t,s)<r&&(s+=1),s=Math.ceil(s/n)*n,t+=Math.floor(s/12),s%=12;const l=e=>{const t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+n)};return{unit:a,ticks:Wo(e,o,Date.UTC(t,s),l)}}let s=i.getUTCFullYear();return Date.UTC(s,0)<r&&(s+=1),s=Math.ceil(s/n)*n,{unit:a,ticks:Wo(e,o,Date.UTC(s,0),e=>Date.UTC(new Date(e).getUTCFullYear()+n,0))}}function Yo(e){return"server"===e?.locale?.time_zone?e.config?.time_zone:void 0}function Go(e){const t=e?.locale?.time_format;return"12"===t||"24"!==t&&void 0}const Xo=new Map;function Jo(e,t,o){const a=`${e}|${t}|${JSON.stringify(o)}`;let n=Xo.get(a);if(!n){try{n=new Intl.DateTimeFormat(e,{...o,timeZone:t})}catch{n=new Intl.DateTimeFormat(void 0,o)}Xo.set(a,n)}return n}function Ko(e,t,o=!1){return Jo(t?.locale?.language??"en",Yo(t),{hour:"numeric",minute:"2-digit",...o?{second:"2-digit"}:{},hour12:Go(t)}).format(e)}function Qo(e,t){return Jo(t?.locale?.language??"en",Yo(t),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:Go(t)}).format(e)}function ea(e,t,o,a,n){const r=a?.locale?.language??"en",i=Yo(a),s=e+(n??Zo(i))(e),l=new Date(s),c=s%Io===0;switch(t){case"minute":case"hour":return c?Jo(r,i,{weekday:"short"}).format(e):Ko(e,a);case"day":return o<=7*Io?Jo(r,i,{weekday:"short"}).format(e):Jo(r,i,{day:"numeric",month:"short"}).format(e);case"month":return Jo(r,i,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(e);default:return Jo(r,i,{year:"numeric"}).format(e)}}function ta(e,t){if(e.length<=t)return e;const o=[];let a=[];for(const r of e)null===r.v?(a.length&&o.push(a),o.push([r]),a=[]):a.push(r);a.length&&o.push(a);const n=e.length;return o.flatMap(e=>null===e[0].v?e:function(e,t){if(e.length<=t||t<3)return e;const o=[e[0]],a=(e.length-2)/(t-2);let n=0;for(let r=0;r<t-2;r++){const t=Math.floor(r*a)+1,i=Math.min(Math.floor((r+1)*a)+1,e.length-1),s=i,l=Math.min(Math.floor((r+2)*a)+1,e.length);let c=0,d=0;const u=Math.max(1,l-s);for(let o=s;o<l;o++)c+=e[o].t,d+=e[o].v;c/=u,d/=u;let h=t,p=-1;const m=e[n];for(let o=t;o<i;o++){const t=Math.abs((m.t-c)*(e[o].v-m.v)-(m.t-e[o].t)*(d-m.v));t>p&&(p=t,h=o)}o.push(e[h]),n=h}return o.push(e[e.length-1]),o}(e,Math.max(3,Math.round(e.length/n*t))))}const oa=36e5,aa=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],na=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],ra=new Map;function ia(e){let t=ra.get(e);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),ra.set(e,t)),t}function sa(e,t){const o={};for(const a of ia(t).formatToParts(new Date(e)))o[a.type]=a.value;return{year:Number(o.year),month:Number(o.month),day:Number(o.day),hour:Number(o.hour)%24,minute:Number(o.minute),second:Number(o.second),weekday:aa.indexOf(o.weekday)+1}}function la(e,t){const o=sa(e,t);return Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute,o.second)-1e3*Math.floor(e/1e3)}function ca(e,t,o,a=1,n=0,r=0,i=0){const s=Date.UTC(t,o-1,a,n,r,i),l=new Date(s),c=la(s-864e5,e),d=la(s+864e5,e),u=[s-c,s-d].filter(t=>{const o=sa(t,e);return o.year===l.getUTCFullYear()&&o.month===l.getUTCMonth()+1&&o.day===l.getUTCDate()&&o.hour===l.getUTCHours()&&o.minute===l.getUTCMinutes()&&o.second===l.getUTCSeconds()});return u.length?Math.min(...u):function(e,t,o,a){for(;t-e>1e3;){const n=1e3*Math.floor((e+t)/2e3);la(n,a)===o?e=n:t=n}return t}(s-d,s-c,c,e)}function da(e,t,o){const a=new Date(Date.UTC(e,t-1,o));return{year:a.getUTCFullYear(),month:a.getUTCMonth()+1,day:a.getUTCDate()}}function ua(e,t,o){const a=sa(t,o.timeZone);switch(e){case"hour":return t-t%1e3-1e3*(60*a.minute+a.second);case"day":return ca(o.timeZone,a.year,a.month,a.day);case"week":{const e=(a.weekday-o.firstDay+7)%7,t=da(a.year,a.month,a.day-e);return ca(o.timeZone,t.year,t.month,t.day)}case"month":return ca(o.timeZone,a.year,a.month,1);case"year":return ca(o.timeZone,a.year,1,1)}}function ha(e,t,o,a){if("hour"===e)return t+o*oa;const n=sa(t,a.timeZone);let{year:r,month:i,day:s}=n;if("day"===e)({year:r,month:i,day:s}=da(r,i,s+o));else if("week"===e)({year:r,month:i,day:s}=da(r,i,s+7*o));else{const t=da(r,i+("year"===e?12*o:o),1),a=da(t.year,t.month+1,0).day;({year:r,month:i}=t),s=Math.min(s,a)}return ca(a.timeZone,r,i,s,n.hour,n.minute,n.second)}function pa(e,t,o,a,n=1e4){const r=[ua(e,t,a)];let i=1;for(;r[r.length-1]<o&&r.length<=n;){const t="hour"===e?r[0]+i*oa:ha(e,r[0],i,a);r.push(t>r[r.length-1]?t:r[r.length-1]+oa),i++}return 1===r.length&&r.push(ha(e,r[0],1,a)),r}function ma(e){try{const t=new Intl.Locale(e),o=t.getWeekInfo?.().firstDay??t.weekInfo?.firstDay;return"number"==typeof o&&o>=1&&o<=7?o:1}catch{return 1}}function fa(e){const t=e?.locale,o=e?.config?.time_zone,a="server"===t?.time_zone&&function(e){if("string"!=typeof e||""===e)return!1;try{return ia(e),!0}catch{return!1}}(o)?o:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",n=na.indexOf(String(t?.first_weekday??"language"))+1;return{timeZone:a,firstDay:n>0?n:ma(t?.language??e?.language??"en")}}const ga=["hour","day","week","month"],va=["day","week","month","year"],ya=["now","end"],ba={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},_a={hour:36e5,day:864e5,week:6048e5};function xa(e,t,o){const a="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof a||!Number.isInteger(a)||a<t)throw new Error(o);return a}function wa(e,t,o){if(!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`);return e}function $a(e){if(null==e)return ba;if("object"!=typeof e||Array.isArray(e))throw new Error('"period" must have "last" and "unit"');const t=e,o={last:xa(t.last??ba.last,1,'"period.last" must be a whole number of 1 or more'),unit:wa(t.unit??ba.unit,ga,"period.unit"),offset:xa(t.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==t.navigate&&!0===t.navigate,until:wa(t.until??"now",ya,"period.until")};if(void 0!==t.navigate&&"boolean"!=typeof t.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==t.calendar&&(o.calendar=wa(t.calendar,va,"period.calendar")),o}function ka(e,t,o){if("month"===e.unit){if(o)return{start:ha("month",t,-e.last,o),end:t};const a=new Date(t);return a.setMonth(a.getMonth()-e.last),{start:a.getTime(),end:t}}return{start:t-e.last*_a[e.unit],end:t}}function Ma(e,t,o,a=0){const n=Math.max(0,e.offset+a);if(e.calendar){const a=e.calendar,r=ha(a,ua(a,t,o),-n,o),i=ha(a,r,1,o);return{start:r,end:0===n&&"now"===e.until?t:i,live:0===n,back:n}}if("month"===e.unit){return{...ka(e,0===n?t:ha("month",t,-n*e.last,o),o),live:0===n,back:n}}const r=e.last*_a[e.unit];return{start:t-(n+1)*r,end:t-n*r,live:0===n,back:n}}const za=new WeakMap;function Aa(e,t){const o=za.get(e);return o&&o.key===JSON.stringify(t)?o.steps:0}function Sa(e,t,o){za.set(e,{key:JSON.stringify(t),steps:Math.max(-t.offset,o)})}const Ea=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Ca=new Map(Ea.map((e,t)=>[e,22.5*t])),ja=[[/north/g,"n"],[/south/g,"s"],[/east/g,"e"],[/west/g,"w"]];function Na(e){const t=(e%360+360)%360;return 360===t?0:t}function La(e){if("number"==typeof e)return Number.isFinite(e)?Na(e):null;if("string"!=typeof e)return null;const t=e.trim().toLowerCase();if(""===t)return null;const o=Number(t.replace(/\s*°$/,""));if(Number.isFinite(o))return Na(o);let a=t.replace(/[\s_-]+/g,"");for(const[n,r]of ja)a=a.replace(n,r);return Ca.get(a.toUpperCase())??null}function Ta(e){if("number"==typeof e)return Number.isFinite(e)?e:null;if("on"===e)return 1;if("off"===e)return 0;if("string"!=typeof e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function Oa(e){return e.bearing?La:Ta}function Fa(e){return"string"==typeof e?e:"number"==typeof e||"boolean"==typeof e?String(e):void 0}function Pa(e,t,o=!1,a=Ta){return o?{t:e,v:null,s:Fa(t)}:{t:e,v:a(t)}}function Da(e,t,o=!1,a=Ta){const n=[];for(const r of e??[]){const e=r.lu??r.lc;if(void 0===e)continue;const i=t?r.a?.[t]:r.s;n.push(Pa(Math.round(1e3*e),i,o,a))}return n}const Ua=e=>"number"==typeof e&&Number.isFinite(e)?e:null;function Ha(e,t){return(e??[]).map(e=>{const o="number"==typeof e.start?e.start:Date.parse(e.start);let a;return a="change"===t?Ua(e.change):"state"===t?Ua(e.state)??Ua(e.mean):"min"===t||"max"===t?Ua(e[t])??Ua(e.mean)??Ua(e.state):Ua(e.mean)??Ua(e.state),{t:o,v:a,min:e.min??null,max:e.max??null}})}function Ia(e){const t=(e.end-e.start)/864e5;return t<=2?"5minute":t<=35?"hour":t<=400?"day":"month"}function Ba(e){return{period:Ia(e),types:["mean","min","max","state"],value:"mean"}}function Ra(e){const t=e.attribute?`${e.entity}|${e.attribute}`:e.entity;return e.text?`${t}|text`:e.bearing?`${t}#bearing`:t}const Za=["hour","day","week","month"],qa=["mean","sum","min","max","first","last","change"];function Wa(e){if(void 0!==e.aggregate&&!qa.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${qa.join(", ")}`);if(void 0!==e.group_by){if(!Za.includes(e.group_by))throw new Error(`"group_by" must be one of: ${Za.join(", ")}`);return{unit:e.group_by,aggregate:e.aggregate??"mean"}}}function Va(e,t,o,a,n=!1){const r="change"===o?function(e){let t=null;return e.map(e=>{if(null===e.v)return null;if(null===t)return t=e.v,0;if(e.v>=t){const o=e.v-t;return t=e.v,o}return t-e.v>.1*Math.abs(t)?(t=e.v,Math.max(0,e.v)):0})}(e):[],i=[];let s=0;for(let l=0;l+1<t.length;l++){const c=t[l],d=t[l+1],u=Math.min(d,a);for(;s<e.length&&e[s].t<c;)s++;const h={t:c,end:d,v:null};if(i.push(h),u<=c)continue;const p=[],m=e[s-1];let f=s;const g=f<e.length&&e[f].t<u?e[f].t:u;for(m&&g>c&&p.push({v:m.v,dt:g-c,reading:!1,carried:!0,up:0});f<e.length&&e[f].t<u;f++){const t=f+1<e.length&&e[f+1].t<u?e[f+1].t:u,o=e[f];p.push({v:o.v,dt:t-o.t,reading:!0,carried:!0===o.carried,up:r[f]??null})}const v=p.filter(e=>null!==e.v);if(0===v.length)continue;const y=v.map(e=>e.v);switch(n&&(h.min=Math.min(...y),h.max=Math.max(...y)),o){case"mean":{const e=v.reduce((e,t)=>e+t.dt,0);h.v=e>0?v.reduce((e,t)=>e+t.v*t.dt,0)/e:y.reduce((e,t)=>e+t,0)/y.length;break}case"min":h.v=Math.min(...y);break;case"max":h.v=Math.max(...y);break;case"first":h.v=y[0];break;case"last":h.v=y[y.length-1];break;case"sum":{const e=v.filter(e=>e.reading&&!e.carried);h.v=e.length?e.reduce((e,t)=>e+t.v,0):null;break}case"change":h.v=v.reduce((e,t)=>e+(t.reading&&!t.carried?t.up??0:0),0)}}return i}function Ya(e,t,o,a=1/0,n=!1){const r=[];let i=0;for(let s=0;s+1<t.length;s++){const l=t[s],c=t[s+1];for(;i<e.length&&e[i].t<l;)i++;let d=i;const u=[],h=[],p=[];for(;d<e.length&&e[d].t<c;d++){const t=e[d];null===t.v||t.carried||(u.push(t.v),h.push(t.min??t.v),p.push(t.max??t.v))}let m=null;if(u.length&&l<a)if("mean"===o)m=u.reduce((e,t)=>e+t,0)/u.length;else if("sum"===o||"change"===o)m=u.reduce((e,t)=>e+t,0);else if("min"===o)m=Math.min(...u);else if("max"===o)m=Math.max(...u);else if("last"===o)m=u[u.length-1];else{const t=e.slice(0,i).reverse().find(e=>null!==e.v),o=e.slice(i,d).find(e=>e.carried&&null!==e.v);m=(t??o)?.v??u[0]}const f={t:l,end:c,v:m};n&&null!==m&&(f.min=Math.min(...h),f.max=Math.max(...p)),r.push(f)}return r}const Ga={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},Xa={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};const Ja={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class Ka{constructor(e){this.onChange=e,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(e,t,o,a,n={}){const r=n.live??!0,i="statistics"===a?n.statistics??Ba(o):void 0,s=`${a}|${t.map(Ra).join(",")}|${i?JSON.stringify(i):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>en,c=void 0!==this.pausedAt&&"statistics"===a&&r;this.pausedAt=void 0;const d=Math.max(6e4,(o.end-o.start)/100),u=o.start<this.loadedFrom||(r?this.loadedTo!==1/0:o.end>this.loadedTo+d);(s!==this.shape||u||l&&r||c)&&(this.shape=s,this.load(e,t,o,r,i)),"ready"===this.status&&"history"===a&&this.loadedTo===1/0&&this.appendLive(e,t);const h=new Map;for(const[p,m]of this.data)h.set(p,Qa(m,o));return{status:this.status,data:h,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(e,t,o,a,n){const r=++this.generation;this.status="loading",this.loadedFrom=o.start,this.loadedTo=a?1/0:o.end,clearTimeout(this.timer);const i=n?async function(e,t,o,a=Ba(o)){const n=new Map;if(!e.callWS||0===t.length)return n;const r=[...new Set(t.map(e=>e.entity))],i=await e.callWS({type:"recorder/statistics_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),statistic_ids:r,period:a.period,types:a.types});for(const s of t)n.set(Ra(s),Ha(i?.[s.entity],a.value));return n}(e,t,o,n):async function(e,t,o){const a=new Map;if(!e.callWS||0===t.length)return a;const n={type:"history/history_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),significant_changes_only:!1},r=[...new Set(t.filter(e=>!e.attribute).map(e=>e.entity))],i=[...new Set(t.filter(e=>e.attribute).map(e=>e.entity))],s=[];return r.length&&s.push(e.callWS({...n,entity_ids:r,minimal_response:!0,no_attributes:!0}).then(e=>{for(const o of t.filter(e=>!e.attribute))a.set(Ra(o),Da(e?.[o.entity],void 0,o.text,Oa(o)))})),i.length&&s.push(e.callWS({...n,entity_ids:i,no_attributes:!1}).then(e=>{for(const o of t.filter(e=>e.attribute))a.set(Ra(o),Da(e?.[o.entity],o.attribute,o.text,Oa(o)))})),await Promise.all(s),a}(e,t,o);i.then(o=>{if(r===this.generation){this.data=o,this.status="ready",this.error=void 0,this.seen.clear();for(const o of t)this.seen.set(Ra(o),e.states[o.entity]);n&&a&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},Ja[n.period])),this.onChange()}},e=>{r===this.generation&&(this.status="error",this.error=e instanceof Error?e.message:String(e?.message??e),this.onChange())})}appendLive(e,t){for(const o of t){const t=Ra(o),a=e.states[o.entity];if(!a||this.seen.get(t)===a)continue;this.seen.set(t,a);const n=Date.parse(a.last_updated??a.last_changed??"")||Date.now(),r=this.data.get(t)??[],i=r[r.length-1];i&&n<=i.t||(r.push(Pa(n,o.attribute?a.attributes?.[o.attribute]:a.state,o.text,Oa(o))),this.data.set(t,r))}}}function Qa(e,t){let o=0;for(;o<e.length&&e[o].t<t.start;)o++;const a=e.slice(o).filter(e=>e.t<=t.end),n=e[o-1];return n?[{...n,t:t.start,carried:!0},...a]:a}const en=6e4,tn=new WeakMap;function on(e,t){let o=tn.get(e);return o||(o=new Ka(t),tn.set(e,o)),o}const an=["smooth","straight","step"],nn=e=>(Math.round(100*e)/100).toString();function rn(e){return e.map(([e,t],o)=>`${o?"L":"M"}${nn(e)},${nn(t)}`).join("")}function sn(e,t){return 0===e.length?"":1===e.length?`M${nn(e[0][0])},${nn(e[0][1])}h0`:"smooth"===t?function(e){const t=e.length;if(t<3)return rn(e);const o=[],a=[];for(let i=0;i<t-1;i++)o.push(e[i+1][0]-e[i][0]),a.push(0===o[i]?0:(e[i+1][1]-e[i][1])/o[i]);const n=[a[0]];for(let i=1;i<t-1;i++)n.push(a[i-1]*a[i]<=0?0:(a[i-1]+a[i])/2);n.push(a[t-2]);for(let i=0;i<t-1;i++){if(0===a[i]){n[i]=0,n[i+1]=0;continue}const e=n[i]/a[i],t=n[i+1]/a[i],o=e*e+t*t;if(o>9){const r=3/Math.sqrt(o);n[i]=r*e*a[i],n[i+1]=r*t*a[i]}}let r=`M${nn(e[0][0])},${nn(e[0][1])}`;for(let i=0;i<t-1;i++){const t=o[i]/3;r+=`C${nn(e[i][0]+t)},${nn(e[i][1]+n[i]*t)},${nn(e[i+1][0]-t)},${nn(e[i+1][1]-n[i+1]*t)},${nn(e[i+1][0])},${nn(e[i+1][1])}`}return r}(e):"step"===t?function(e){let t=`M${nn(e[0][0])},${nn(e[0][1])}`;for(let o=1;o<e.length;o++)t+=`H${nn(e[o][0])}V${nn(e[o][1])}`;return t}(e):rn(e)}function ln(e){const t=[];let o=[];for(const a of e)null===a.v?(o.length&&t.push(o),o=[]):o.push(a);return o.length&&t.push(o),t}const cn=1e3,dn=200,un=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],hn=["history","statistics"];function pn(e){if($a(e.period),Wa(e),void 0!==e.source&&!hn.includes(e.source))throw new Error(`"source" must be one of: ${hn.join(", ")}`);const t=[e.curve,...(e.entities??[]).map(e=>"object"==typeof e?e.curve:void 0)];for(const o of t)if(void 0!==o&&!an.includes(o))throw new Error(`"curve" must be one of: ${an.join(", ")}`)}function mn(e,t=Date.now(),o={}){const a=$a(e.raw.period),n=e.raw.source??"history",r=fa(e.hass),i=Ma(a,t,r,a.navigate?Aa(e.host,a):0),s=Wa(e.raw),l={start:s?ua(s.unit,i.start,r):i.start,end:i.end},c=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute,...o.text?{text:!0}:{}})),d=on(e.host,e.requestUpdate),u=s&&"statistics"===n?function(e,t,o,a=!1){const n=t.timeZone===o&&("week"!==e.unit||1===t.firstDay),r="hour"!==e.unit&&n?e.unit:"hour",{types:i,value:s}=Xa[e.aggregate];return{period:r,types:a?[...new Set([...i,"min","max"])]:i,value:s}}(s,r,e.hass.config?.time_zone,!0===o.range):void 0,h=u?{start:l.start-Ga[u.period],end:l.end}:l,p=d.get(e.hass,c,h,n,{live:i.live,statistics:u}),m=s?pa(s.unit,l.start,l.end,r):[],f=e.raw.curve??"smooth",g=Math.min(l.end,t),v=e.items.map((e,t)=>{const a=e.config;let r=p.data.get(Ra(c[t]))??[];const i=r[r.length-1];return s?r="statistics"===n?Ya(r,m,s.aggregate,g,!0===o.range):Va(r,m,o.aggregate?.(e)??s.aggregate,g,!0===o.range):"history"===n&&i&&null!==i.v&&i.t<g&&(r=[...r,{t:g,v:i.v}]),{index:t,entity:e,points:r,color:Ce(a.color??un[t%un.length]),curve:a.curve??f,dash:!0===a.dash}});return{status:p.status,error:p.error,range:l,period:a,source:n,series:v,live:i.live,back:i.back,zone:r,group:s}}yt("en",{period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months"});const fn=(e,t,o)=>1===e?t:o;function gn(e,t,o,a,n){const r=(e,t)=>_t(n,e,t);if(e.calendar&&o<2)return r({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[e.calendar][o]);if(!e.calendar&&0===o){const t=e.last;return r({hour:fn(t,"period_last_hour","period_last_hours"),day:fn(t,"period_last_day","period_last_days"),week:fn(t,"period_last_week_rolling","period_last_weeks"),month:fn(t,"period_last_month_rolling","period_last_months")}[e.unit],{n:t})}const i={timeZone:a.timeZone},s=sa(t.start,a.timeZone).year===sa(Date.now(),a.timeZone).year;let l;"year"===e.calendar?i.year="numeric":"month"===e.calendar?Object.assign(i,{month:"long",year:"numeric"}):(Object.assign(i,{day:"numeric",month:"short"}),s||(i.year="numeric"),"day"===e.calendar&&(i.weekday="short"),e.calendar||"hour"!==e.unit&&"day"!==e.unit||Object.assign(i,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(n?.locale?.language??n?.language??"en",i)}catch{l=new Intl.DateTimeFormat("en",i)}const c=e.calendar?t.end-1:t.end;return"day"===e.calendar||"month"===e.calendar||"year"===e.calendar?l.format(t.start):l.formatRange(t.start,c)}function vn(e,t,o=Date.now()){const{period:a}=e;if(!a.navigate)return W;const n=Aa(t.host,a),r=e=>o=>{o.stopPropagation(),Sa(t.host,a,e),t.requestUpdate()},i=gn(a,e.range,e.back,e.zone,t.hass);let s="";if(0!==n){const n=Ma(a,o,e.zone);s=gn(a,n,n.back,e.zone,t.hass)}const l=e=>R`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${e}></path></svg>`;return R`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${_t(t.hass,"period_previous")} @click=${r(n+1)}>
      ${l("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")}
    </button>
    <span class="period-label" aria-live="polite">${i}</span>
    <button
      class="period-step period-next"
      aria-label=${_t(t.hass,"period_next")}
      ?disabled=${0===e.back}
      @click=${r(n-1)}
    >
      ${l("M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")}
    </button>
    ${0!==n?R`<button
            class="period-return"
            aria-label=${_t(t.hass,"period_return",{label:s})}
            @click=${r(0)}
          >
            ${s}
          </button>`:W}
  </div>`}const yn=r`
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
`;function bn(e){!function(e){tn.get(e)?.pause()}(e)}function _n(e,t){const{show:o}=t.config;return o.name||o.value?R`<div class="series-header">
    ${e.series.map(e=>R`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
          <span class="swatch" style="background:${e.color}"></span>
          ${o.name?R`<span class="series-name">${e.entity.name}</span>`:W}
          ${o.value?R`<span class="series-value">${e.entity.display}</span>`:W}
        </div>`)}
  </div>`:W}function xn(e,t){return"loading"===e.status?R`<div class="chart-message">${_t(t.hass,"chart_loading")}</div>`:"error"===e.status?R`<div class="chart-message error">
      ${_t(t.hass,"chart_error",{error:e.error??""})}
    </div>`:e.series.every(e=>e.points.every(e=>null===e.v))?R`<div class="chart-message">${_t(t.hass,"chart_no_data")}</div>`:void 0}function wn(e,t,o=W,a=W){return R`<svg
    class="plot"
    viewBox="0 0 ${cn} ${dn}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${t}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${cn} height=${204}></rect>
      </clipPath>
      ${o}
    </defs>
    ${a}
    <g clip-path="url(#cd-draw-in)">${e}</g>
  </svg>`}const $n=r`
  ${yn}
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
`;function kn(e,t,o){const{locale:a,grouping:n}=function(e){const t=e?.locale?.language??"en";switch(e?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:t,grouping:!0}}}(o),r=new Intl.NumberFormat(a,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:n});let i=r.format(0===e?0:e);return 0===Number(e.toFixed(t))&&(i=r.format(0)),i}function Mn(e,t){return t?`${e} ${t}`:e}const zn=[[1,2,3,4,5,6,7,8,9],[1,2,5],[1]],An=[2,3,5,10,20,50,100],Sn=e=>Number(e.toPrecision(12)),En=e=>Sn(10**e),Cn=e=>Math.floor(Math.log10(e)+1e-9);function jn(e){return e.map(e=>{const t=e=>"number"==typeof e&&e<=0;return t(e.v)||t(e.min)||t(e.max)?{...e,v:t(e.v)?null:e.v,...void 0!==e.min?{min:t(e.min)?null:e.min}:{},...void 0!==e.max?{max:t(e.max)?null:e.max}:{}}:e})}function Nn(e,t,o,a=1){const n=[];for(let r=Cn(e);r<=Cn(t)+a;r+=a)for(const a of o){const o=Sn(a*10**r);o>=e*(1-1e-9)&&o<=t*(1+1e-9)&&n.push(o)}return n}function Ln(e,t,o){const a=Cn(e),n=Nn(En(a-2),En(a+2),t),r=o?n.filter(t=>t<=e*(1+1e-9)):n.filter(t=>t>=e*(1-1e-9));return o?r[r.length-1]:r[0]}function Tn(e,t){const o=Math.log10(e[0]),a=Math.log10(e[1]),[n,r]=t,i=a===o?0:(r-n)/(a-o);return e=>e>0?n+(Math.log10(e)-o)*i:NaN}const On=new WeakMap;function Fn(e){let t=On.get(e.host);if(!t){const o={width:e.host.clientWidth||400};t=o,On.set(e.host,o),"undefined"!=typeof ResizeObserver&&(o.observer=new ResizeObserver(t=>{const a=Math.round(t[t.length-1].contentRect.width);Math.round(a/70)!==Math.round(o.width/70)&&(o.width=a,e.requestUpdate())}),o.observer.observe(e.host))}return t.width}function Pn(e){On.get(e)?.observer?.disconnect(),On.delete(e)}function Dn(e){const t=To(e.raw);return Math.max(0,Fn(e)-32-(t.y&&"outside"===t.labels?40:0))}function Un(e,t,o,a,n=4){const r=To(e.raw),i="log"===r.scale&&"line"===e.raw.style,s=i?function(e,t,o){let[a,n]=e??[1,100];void 0!==t.min&&t.min>0&&(a=t.min),void 0!==t.max&&t.max>0&&(n=t.max),n>0||(n=a>0?10*a:100),a>0||(a=n/1e3);const r=void 0!==t.min&&t.min===a,i=void 0!==t.max&&t.max===n;n<=a&&(r?n=10*a:i?a=n/10:(a/=Math.sqrt(10),n*=Math.sqrt(10)));const s=Math.max(2,o+1),l=[...zn.map(e=>({mantissas:e,every:1})),...An.map(e=>({mantissas:[1],every:e}))];let c=l[l.length-1],d=[a,n],u=[];for(const f of l){const e=r?a:Ln(a,f.mantissas,!0),t=i?n:Ln(n,f.mantissas,!1),o=Nn(e,t,f.mantissas,f.every);if(c=f,d=[e,t],u=o,o.length<=s)break}const h=c.every>1?[1]:zn[0],p=9===c.mantissas.length?[]:Nn(d[0],d[1],h).filter(e=>!u.includes(e)).slice(0,200),m=u.map(e=>Math.max(0,-Cn(e)));return{domain:d,ticks:u,decimals:Math.max(0,...m),minor:p,tickDecimals:m}}(o,r,n):Do(o,r,n),l=Math.max(2,Math.min(8,Math.floor((a??Dn(e))/70))),{unit:c,ticks:d}=Vo(t,l,Zo(Yo(e.hass)));return{options:r,value:s,times:d,unit:c,range:t,scales:{x:$o([t.start,t.end],[0,cn]),y:(i?Tn:$o)(s.domain,[dn,0]),domain:s.domain}}}const Hn=e=>Math.round(1e4*e)/100+"%";function In(e,t,o){const a=e.ticks[t];return e.tickDecimals?function(e,t,o){if(Math.abs(e)<1e4)return kn(e,t,o);const a=o?.locale?.language??o?.language??"en";try{return new Intl.NumberFormat(a,{notation:"compact",maximumFractionDigits:1}).format(e)}catch{return new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}).format(e)}}(a,e.tickDecimals[t],o.hass):kn(a,e.decimals,o.hass)}function Bn({axes:e,ctx:t,content:o,label:a,defs:n=W,overlay:r=W,hover:i,right:s,xLabel:l,yLabel:c,gestures:d,classes:u="",below:h=W}){const{options:p}=e,m="outside"===p.labels,f=p.y&&e.value.ticks.length>0,g=p.x&&e.times.length>0,v=f?function(e,t,o){const{scales:a,value:n}=e;return n.ticks.map((e,r)=>{const i=a.y(e)/dn;return R`<span class="axis-label ${i<.08?"top":i>.92?"bottom":""}" style="top:${Hn(i)}"
      >${o?o(e):In(n,r,t)}</span
    >`})}(e,t,c):[],y=f?R`<div class="y-axis">${v}</div>`:W,b=g?R`<div class="x-axis">${function(e,t,o){const{scales:a,range:n}=e,r=Zo(Yo(t.hass));return e.times.map(i=>{const s=a.x(i)/cn;return R`<span class="axis-label ${s<.05?"start":s>.95?"end":""}" style="left:${Hn(s)}"
      >${o?o(i):e.label?e.label(i):ea(i,e.unit,n.end-n.start,t.hass,r)}</span
    >`})}(e,t,l)}</div>`:W,_=f?R`<span class="axis-sizer" aria-hidden="true"
        >${e.value.ticks.map((o,a)=>c?c(o):In(e.value,a,t)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:W,x=s&&p.y&&s.value.ticks.length>0?s:void 0,w=x?R`<span class="axis-sizer" aria-hidden="true"
        >${x.value.ticks.map(e=>kn(e,x.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:W,$=x?R`<div class="y-axis right">${m?w:W}${function(e,t){return e.value.ticks.map(o=>{const a=e.y(o)/dn;return R`<span class="axis-label ${a<.08?"top":a>.92?"bottom":""}" style="top:${Hn(a)}"
      >${kn(o,e.value.decimals,t.hass)}</span
    >`})}(x,t)}</div>`:W,k=`plot-wrap axes-${p.labels} ${f?"has-y":""} ${g?"has-x":""} ${x?"has-right":""} ${h===W?"":"has-overview"}`;return R`<div class=${k}>
    ${m&&f?R`<div class="y-axis">${_}${v}</div>`:W}
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
      ${wn(o,a,n,function(e){const{options:t,scales:o}=e;return Z`<g class="grid">
    ${t.horizontal?(e.value.minor??[]).map(e=>Z`<line class="minor" x1="0" x2=${cn} y1=${o.y(e)} y2=${o.y(e)}></line>`):W}
    ${t.horizontal?e.value.ticks.map(e=>Z`<line x1="0" x2=${cn} y1=${o.y(e)} y2=${o.y(e)}></line>`):W}
    ${t.vertical?e.times.map(e=>Z`<line x1=${o.x(e)} x2=${o.x(e)} y1="0" y2=${dn}></line>`):W}
  </g>`}(e))} ${m?W:R`${y}${$}${b}`}
      ${r}
    </div>
    ${m?R`${$}${b}`:W} ${h}
  </div>`}const Rn=r`
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
`,Zn=["above","over","hidden"];function qn(e){if(void 0!==e.compact&&"boolean"!=typeof e.compact)throw new Error('"compact" must be true or false');if(void 0!==e.header&&!Zn.includes(e.header))throw new Error(`"header" must be one of: ${Zn.join(", ")}`)}function Wn(e){return{compact:!0===e.compact,header:e.header??"above"}}function Vn(e,t,o){return R`<div class="frame ${e.compact?"compact":""}">
    ${"above"===e.header?t:W}${o}
  </div>`}function Yn(e){return e===W?W:R`<div class="header-over" @pointerdown=${e=>e.stopPropagation()}>${e}</div>`}const Gn=r`
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
`,Xn=["none","normal","percent"];function Jn(e){const t=e.stack;if(void 0!==t&&!Xn.includes(t))throw new Error(`"stack" must be one of: ${Xn.join(", ")}`)}function Kn(e,t){let o=0,a=e.length;for(;o<a;){const n=o+a>>1;e[n].t<=t?o=n+1:a=n}return 0===o?null:e[o-1].v}function Qn(e,t){const o=e[0]?.length??0,a=e.map(()=>[]);for(let n=0;n<o;n++){let o=1;if("percent"===t){const t=e.reduce((e,t)=>e+Math.abs(t[n]??0),0);o=t>0?100/t:0}let r=0,i=0;e.forEach((e,t)=>{const s=e[n];if(null==s)return void a[t].push(null);const l=s*o;l>=0?(a[t].push([r,r+l]),r+=l):(a[t].push([i,i+l]),i+=l)})}return a}function er(e){const t=e[0]?.length??0,o=[];for(let a=0;a<t;a++){let t=null;for(const o of e)null!==o[a]&&void 0!==o[a]&&(t=(t??0)+o[a]);o.push(t)}return o}function tr(e){let t=0,o=0;for(const a of e)for(const e of a)e&&(t=Math.min(t,e[0],e[1]),o=Math.max(o,e[0],e[1]));return[t,o]}function or(e,t){const o=e*t;return o+190<=t?"right":o>=190?"left":e>.5?"pin-left":"pin-right"}const ar=3e3;function nr(e,t){if(0===e.length)return-1;let o=0,a=e.length-1;for(;o<a;){const n=o+a>>1;e[n].t<t?o=n+1:a=n}return o>0&&t-e[o-1].t<=e[o].t-t?o-1:o}const rr=new WeakMap;function ir(e){return rr.get(e)?.t}function sr(e){const t=rr.get(e);void 0!==t?.timer&&clearTimeout(t.timer),rr.delete(e)}function lr(e){return!1!==e.tooltip}function cr(e){const t=e.tooltip;if(void 0!==t&&"boolean"!=typeof t)throw new Error('"tooltip" must be true or false')}function dr(e,t,o){const a=function(e){let t=rr.get(e);return t||(t={},rr.set(e,t)),t}(e.host),n=t=>{t!==a.t&&(a.t=t,e.requestUpdate())},r=()=>{void 0!==a.timer&&clearTimeout(a.timer),a.timer=void 0};return{move(e){r();const a=e.currentTarget.getBoundingClientRect(),i=a.width>0?Math.min(1,Math.max(0,(e.clientX-a.left)/a.width)):0;n(function(e,t){let o;for(const a of e){const e=nr(a,t);if(e<0)continue;const n=a[e].t;(void 0===o||Math.abs(n-t)<Math.abs(o-t))&&(o=n)}return o}(o,t.start+i*(t.end-t.start)))},leave(e){r(),"touch"===e.pointerType||"pen"===e.pointerType?a.timer=setTimeout(()=>{a.timer=void 0,n(void 0)},ar):n(void 0)}}}const ur=e=>Math.round(1e4*e)/100+"%";function hr(e){const t=new Set(e.map(e=>e.entity.unit));return 1===t.size?[...t][0]:""}function pr(e,t,o,a){return R`<div class="tooltip-row tooltip-total">
    <span class="swatch"></span>
    <span class="tooltip-name">${_t(e.hass,"chart_total")}</span>
    <span class="tooltip-value">${null===t?"—":Mn(kn(t,a,e.hass),o)}</span>
  </div>`}function mr(e,t,o,a,n,r={}){if(void 0===a)return W;const i=o.x(a)/cn;if(!(i>=0&&i<=1))return W;const s=or(i,n),l=t.map(e=>{const t=nr(e.points,a);return{s:e,p:t<0?void 0:e.points[t]}});return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${ur(i)}"></div>
    ${l.map(({s:e,p:t})=>{if(!t||null===t.v)return W;const a=r.dotY?r.dotY(e,t):o.y(t.v);if(null===a)return W;const n=a/dn;return n>=0&&n<=1?R`<span
        class="hover-dot"
        style="left:${ur(o.x(t.t)/cn)};top:${ur(n)};background:${e.color}"
      ></span>`:W})}
    <div class="tooltip ${s}" style=${s.startsWith("pin")?"":`left:${ur(i)}`}>
      <div class="tooltip-time">${r.heading?r.heading(a):Qo(a,e.hass)}</div>
      ${l.map(({s:t,p:o})=>R`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${r.text?r.text(t,o):function(e,t,o){return e&&null!==e.v?Mn(kn(e.v,t.entity.decimals,o.hass),t.entity.unit):"—"}(o,t,e)}</span>
          </div>`)}
      ${r.footer?r.footer(l):W}
    </div>
  </div>`}yt("en",{chart_total:"Total"});const fr=r`
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
`,gr=["all","last","minmax","ends"],vr=["auto","above","below","center"];function yr(e){const t=e;if(!0===t.labels)return{show:t.labels_show??"all",position:t.labels_position??"auto",hideOverlap:!0!==t.labels_overlap}}function br(e,t){const o=e.map((e,t)=>null===e.v?-1:t).filter(e=>e>=0);if(0===o.length)return[];const a=o[o.length-1],n=o[0];let r=n,i=n;for(const l of o)e[l].v>e[r].v&&(r=l),e[l].v<e[i].v&&(i=l);const s="last"===t?[a]:"ends"===t?[a,n]:"minmax"===t?[r,i]:[a,r,i,...o];return[...new Set(s)]}function _r(e,t){const o=e[t].v,a=[e[t-1]?.v??null,e[t+1]?.v??null].filter(e=>null!==e);if(0===a.length)return"above";const n=a.reduce((e,t)=>e+t,0)/a.length;return o<n?"below":"above"}function xr(e,t){const o=e.x-e.width/2,a="above"===t?e.y-6-14:"below"===t?e.y+6:e.y-7;return[o,a,o+e.width,a+14]}const wr=(e,t)=>e[0]<t[2]&&t[0]<e[2]&&e[1]<t[3]&&t[1]<e[3];function $r(e){return Math.ceil(6*e.length)+6}const kr=e=>Math.round(1e4*e)/100+"%";function Mr(e,t,o,a){const n=[],r=[];for(const c of e){const e=o.skip?c.points.map(e=>o.skip(e)?{...e,v:null}:e):c.points;!t.hideOverlap&&"all"===t.show&&e.filter(e=>null!==e.v).length>40||br(e,t.show).forEach((i,s)=>{const l=e[i],[d,u]=o.at(l);if(!(d>=0&&d<=1&&u>=0&&u<=1))return;const h=kn(l.v,c.decimals,a),p="auto"===t.position?_r(e,i):t.position,m="above"===p?"below":"above",f={x:d*o.width,y:u*o.height,width:$r(h),sides:"center"===p?["center"]:[p,m],text:h,color:c.color,fx:d,fy:u};(s<3&&"all"===t.show?n:"all"===t.show?r:n).push(f)})}const i=[...n,...r].slice(0,600),s=function(e,t,o){const a=[];return e.map(e=>{for(const n of e.sides){const r="auto"===n?"above":n,i=xr(e,r);if(!o)return{side:r,box:i};if(!(i[1]<-2||i[3]>t+2||a.some(e=>wr(e,i))))return a.push(i),{side:r,box:i}}})}(i,o.height,t.hideOverlap),l=i.map((e,t)=>({b:e,p:s[t]})).filter(e=>void 0!==e.p);return 0===l.length?W:(l.sort((e,t)=>e.b.fx-t.b.fx),R`<div class="point-labels">
    ${l.map(({b:e,p:t})=>R`<span
          class="point-label ${t.side} ${function(e,t,o){return e-t/2<0?"start":e+t/2>o?"end":""}(e.fx*o.width,e.width,o.width)}"
          style="left:${kr(e.fx)};top:${kr(e.fy)};--cd-label:${e.color}"
          >${e.text}</span
        >`)}
  </div>`)}const zr=r`
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
`,Ar=["none","line","figure"],Sr=!1,Er=!1,Cr="none";function jr(e){const t=e.extremes??{};return{min:t.min??Sr,max:t.max??Er,average:t.average??Cr}}function Nr(e){return e.min||e.max||"none"!==e.average}yt("en",{extremes_high:"High",extremes_low:"Low",extremes_average:"Avg",editor_extremes_max:"Mark the highest reading",editor_extremes_min:"Mark the lowest reading",editor_extremes_average:"Average",editor_extremes_average_none:"Don't show",editor_extremes_average_line:"Line across the chart",editor_extremes_average_figure:"Figure only",editor_extremes:"Mark highest, lowest and average"});function Lr(e,t,o,a=[]){const n=e.filter(e=>e.dot).map(e=>({l:e.x*t-6,r:e.x*t+6,t:e.y*o-6,b:e.y*o+6})),r=[...a,...n];return e.map(e=>{const a=(e=>Math.ceil(6.2*e.length)+12)(e.text),n=e.x*t,i=e.y*o,s=n-a/2<0?"start":n+a/2>t?"end":"center",l="start"===s?0:"end"===s?t-a:n-a/2,c=(e,t=0)=>{const o=8+20*t,n="above"===e?i-o-18:i+o;return{l:l,r:l+a,t:n,b:n+18}},d=e=>e.t>=0&&e.b<=o,u="above"===e.prefer?"below":"above",h=[{side:e.prefer,tier:0},{side:u,tier:0},{side:e.prefer,tier:1},{side:u,tier:1}],p=h.find(e=>(e=>d(e)&&!r.some(t=>((e,t)=>e.l<t.r&&t.l<e.r&&e.t<t.b&&t.t<e.b)(t,e)))(c(e.side,e.tier)))??h.find(e=>0===e.tier&&d(c(e.side)))??h[0];r.push(c(p.side,p.tier));return{side:p.side,align:s,tier:p.tier}})}function Tr(e,t,o,a){if("day"===a?.unit||"week"===a?.unit||"month"===a?.unit){const t="month"===a.unit?{month:"short",year:"numeric"}:{weekday:"short",day:"numeric",month:"short"};try{return new Intl.DateTimeFormat(o?.locale?.language??"en",{...t,timeZone:Yo(o)}).format(e)}catch{return new Intl.DateTimeFormat("en",t).format(e)}}return t.end-t.start>864e5?Qo(e,o):Ko(e,o)}const Or=e=>Math.round(1e4*e)/100+"%";function Fr(e){const{ctx:t,scales:o,width:a,height:n}=e,r=jr(t.raw);if(!Nr(r))return{lines:W,overlay:W};const i=e.series.filter(e=>!1!==e.entity.config.extremes).map(t=>{const{min:o,max:a}=function(e){let t,o;for(const a of e)null===a.v||a.carried||((!t||a.v<t.v)&&(t=a),(!o||a.v>o.v)&&(o=a));return{min:t,max:o}}(t.points),n="none"===r.average?void 0:function(e,t,o=1/0){const a=e.filter(e=>null!==e.v&&!(e.carried&&!t));if(0!==a.length){if(t){let t=0,a=0;for(let n=0;n<e.length;n++){const r=e[n];if(null===r.v)continue;const i=n+1<e.length?e[n+1].t:r.t,s=Math.max(0,Math.min(i,o)-r.t);t+=r.v*s,a+=s}if(a>0)return t/a}return a.reduce((e,t)=>e+t.v,0)/a.length}}(t.points,e.timeWeighted,e.until);return{s:t,min:r.min?o:void 0,max:r.max?a:void 0,average:n}}),s=(e,o)=>Mn(kn(e,o.entity.decimals,t.hass),o.entity.unit),l=e=>_t(t.hass,e),c=e=>e>=0&&e<=1,d=[];for(const f of i){for(const a of["max","min"]){const n=f[a];if(!n)continue;const r=o.y(n.v)/dn;if(!c(r))continue;const i=l("max"===a?"extremes_high":"extremes_low");d.push({s:f.s,kind:a,spec:{x:o.x(n.t)/cn,y:r,text:`${i} ${s(n.v,f.s)} · ${Tr(n.t,e.range,t.hass,e.group)}`,prefer:"max"===a?"above":"below",dot:!0}})}if("line"===r.average&&void 0!==f.average){const e=o.y(f.average)/dn;c(e)&&d.push({s:f.s,kind:"average",spec:{x:1,y:e,text:`${l("extremes_average")} ${s(f.average,f.s)}`,prefer:"above"}})}}const u=Lr(d.map(e=>e.spec),a,n,e.obstacles),h="line"===r.average?Z`<g class="average-lines">${i.map(e=>{if(void 0===e.average)return W;const t=o.y(e.average);return Z`<line class="average-line" x1="0" x2=${cn} y1=${t} y2=${t} stroke=${e.s.color}></line>`})}</g>`:W,p="figure"===r.average&&i.some(e=>void 0!==e.average)?R`<div class="extreme-figures">
          ${i.map(t=>void 0===t.average?W:R`<div class="extreme-figure">
                  ${e.series.length>1?R`<span class="swatch" style="background:${t.s.color}"></span>`:W}
                  <span>${l("extremes_average")} ${s(t.average,t.s)}</span>
                </div>`)}
        </div>`:W,m=R`<div class="extremes-layer">
    ${d.map((e,t)=>{const{side:o,align:a,tier:n}=u[t],{x:r,y:i,text:s}=e.spec,l="start"===a?"left:0":"end"===a?"right:0":`left:${Or(r)}`;return R`<span
        class="extreme-label ${e.kind} ${o} ${a} ${n?"far":""}"
        style="${l};top:${Or(i)};--series:${e.s.color}"
        >${s}</span
      >`})}
    ${d.map(e=>e.spec.dot?R`<span
            class="extreme-dot ${e.kind}"
            style="left:${Or(e.spec.x)};top:${Or(e.spec.y)};border-color:${e.s.color}"
          ></span>`:W)}
    ${p}
  </div>`;return{lines:h,overlay:m}}const Pr=r`
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
`,Dr=[{name:"extremes_max",path:["extremes","max"],default:Er},{name:"extremes_min",path:["extremes","min"],default:Sr},{name:"extremes_average",path:["extremes","average"],default:Cr}];const Ur={name:"extremes",path:["extremes"],default:!0},Hr=new Map;function Ir(e,t){const o=bt(t);let a=Hr.get(o);return a&&a[0]===e[0]||(a=[...e,{name:"extremes",selector:{boolean:{}}}],Hr.set(o,a)),a}const Br=new WeakMap;function Rr(e){let t=Br.get(e);return t||(t=[...e,Ur],Br.set(e,t)),t}const Zr=["auto","shared","independent"];function qr(e,t,o,a,n){const r=Math.max(0,Fn(e)-32),i=function(e,t,o){const a=e=>Math.max(1,Math.floor((t+12)/(e+12))),n=void 0===o?a(150):Math.min(o,a(110));return Math.max(1,Math.min(e,n))}(t.series.length,r,o.columns),s=function(e,t){return Math.max(0,(e-12*(t-1))/t)}(r,i),l=new Set(t.series.map(e=>e.entity.unit).filter(e=>""!==e)),c="shared"===o.scale||"auto"===o.scale&&l.size<=1?xo(t.series.map(e=>e.points)):void 0,{show:d}=e.config;return R`<div class="multiples" style=${`grid-template-columns:repeat(${i}, minmax(0, 1fr))`}>
    ${t.series.map(o=>{const r=Un(e,t.range,c??xo([o.points]),s,2),i=d.name||d.value?R`<div class="entity panel-title" data-index=${o.index} tabindex="0" aria-label=${o.entity.label}>
              <span class="swatch" style="background:${o.color}"></span>
              ${d.name?R`<span class="series-name">${o.entity.name}</span>`:W}
              ${d.value?R`<span class="series-value">${function(e,t,o){if(void 0===t)return e.entity.display;const a=nr(e.points,t),n=a<0?void 0:e.points[a];return n&&null!==n.v?Mn(kn(n.v,e.entity.decimals,o.hass),e.entity.unit):"—"}(o,a,e)}</span>`:W}
            </div>`:W,l=o.points.some(e=>null!==e.v)?n(o,r,s):R`<div class="chart-message">${_t(e.hass,"chart_no_data")}</div>`;return R`<div class="panel">${i}${l}</div>`})}
  </div>`}const Wr=r`
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
`;yt("en",{annotation_at:"{label} at {time}"});const Vr=["line","band","time","state","point"],Yr=["max","min","last","first"],Gr={line:"red",band:"green",time:"grey",state:"amber",point:"primary"},Xr=e=>"number"==typeof e&&Number.isFinite(e),Jr=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim());function Kr(e,t){if(!(void 0===e||Xr(e)||Jr(e)||"string"==typeof e&&""!==e.trim()&&Number.isFinite(Number(e))))throw new Error(`"${t}" must be a number or an entity id`)}const Qr=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/,ei=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{1,2}):(\d{2})(?::(\d{2}))?$/;function ti(e){return(Array.isArray(e)?e:"string"==typeof e?e.split(","):[]).map(e=>String(e).trim()).filter(e=>""!==e)}function oi(e){const t=e.annotations;if(void 0!==e.zones&&"boolean"!=typeof e.zones)throw new Error('"zones" must be true or false');if(void 0!==t){if(!Array.isArray(t))throw new Error('"annotations" must be a list');t.forEach((e,t)=>{const o=e=>`annotations[${t}].${e}`;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`"annotations[${t}]" must have a "type"`);const a=e;if(!Vr.includes(a.type))throw new Error(`"${o("type")}" must be one of: ${Vr.join(", ")}`);for(const n of["label","color","state"])if(void 0!==a[n]&&"string"!=typeof a[n])throw new Error(`"${o(n)}" must be text`);for(const n of["dash","shade"])if(void 0!==a[n]&&"boolean"!=typeof a[n])throw new Error(`"${o(n)}" must be true or false`);if(Kr(a.value,o("value")),Kr(a.from,o("from")),Kr(a.to,o("to")),void 0!==a.entity&&!Jr(a.entity))throw new Error(`"${o("entity")}" must be an entity id`);if("line"===a.type&&void 0===a.value)throw new Error(`"${o("value")}" is needed for a line`);if("band"===a.type&&void 0===a.from&&void 0===a.to)throw new Error(`"${o("from")}" or "${o("to")}" is needed for a band`);if("time"===a.type){if(void 0!==a.times&&"string"!=typeof a.times&&!Array.isArray(a.times))throw new Error(`"${o("times")}" must be a time or a list of times`);const e=ti(a.times).find(e=>!function(e){const t=e.trim(),o=Qr.exec(t);return o?Number(o[1])<24&&Number(o[2])<60:ei.test(t)||/\d{4}-\d{2}-\d{2}T.+(Z|[+-]\d{2}:?\d{2})$/.test(t)&&Number.isFinite(Date.parse(t))}(e));if(void 0!==e)throw new Error(`"${o("times")}" has "${e}": use 07:00 or 2026-10-28 07:00`)}if("state"===a.type&&void 0===a.entity)throw new Error(`"${o("entity")}" is needed for a state mark`);if(void 0!==a.at&&!Yr.includes(a.at))throw new Error(`"${o("at")}" must be one of: ${Yr.join(", ")}`)})}}function ai(e){return Array.isArray(e.annotations)?e.annotations:[]}function ni(e,t){if(void 0===e)return;if(Xr(e))return e;const o=Ta(e);if(null!==o)return o;return Ta(t.states[e.trim()]?.state)??void 0}function ri(e,t,o){const a=[],n=pa("day",t.start,t.end,o,800);for(const r of e){const e=Qr.exec(r);if(e){for(const t of n){const n=sa(t,o.timeZone);a.push(ca(o.timeZone,n.year,n.month,n.day,+e[1],+e[2],+(e[3]??0)))}continue}const t=ei.exec(r),i=t?ca(o.timeZone,+t[1],+t[2],+t[3],+t[4],+t[5],+(t[6]??0)):Date.parse(r);Number.isFinite(i)&&a.push(i)}return[...new Set(a.filter(e=>e>=t.start&&e<=t.end))].sort((e,t)=>e-t)}function ii(e,t,o,a){const n=[],r=t?.trim().toLowerCase();for(let i=0;i<e.length;i++){const t=e[i];if(i>0&&e[i-1].s===t.s)continue;if(void 0!==r&&t.s.toLowerCase()!==r)continue;let s=i+1;for(;s<e.length&&e[s].s===t.s;)s++;const l=s<e.length?e[s].t:a,c=Math.max(t.t,o.start);l<=o.start||c>o.end||n.push({start:c,end:Math.min(l,o.end),s:t.s})}return n}function si(e){return Math.ceil(5.8*e.length)+10}const li=new WeakMap;const ci=e=>Math.round(1e4*e)/100+"%";function di(e,t){return e.entity&&t.find(t=>t.entity.entityId===e.entity.trim())||t[0]}function ui(e,t,o,a){const n=e.points.filter(e=>null!==e.v&&(a||!e.carried&&(e.t!==o.end||"last"===t)));if(0!==n.length)return"first"===t?n[0]:"last"===t?n[n.length-1]:n.reduce((e,o)=>("max"===t?o.v>e.v:o.v<e.v)?o:e)}function hi(e,t,o,a){const n=ai(e.raw),r=!0===e.raw.zones&&t.series[0]?function(e,t){const[o,a]=t.domain;return e.map((n,r)=>{const i=Math.max(o,Number.isFinite(n.from)?n.from:o),s=Math.min(a,r+1<e.length?e[r+1].from:a);if(!(s>i))return Z``;const l=t.y(s),c=t.y(i);return Z`<rect class="zone" x="0" width=${cn} y=${l} height=${c-l} fill=${Ce(n.color)}></rect>`})}(t.series[0].entity.bands,o):[];if(0===n.length&&0===r.length)return{behind:W,front:W,overlay:W};const i=[...r],s=[],l=[],{range:c}=t,d=e=>o.x(e),[u,h]=o.domain,p=function(e,t,o){const a=[...new Set(ai(e.raw).filter(e=>"state"===e.type&&e.entity).map(e=>e.entity.trim()))];if(0===a.length)return new Map;const n=a.join(",");let r=li.get(e.host);if(!r||r.shape!==n||t.start<r.from||!o&&t.end>r.to+6e4||o&&r.to!==1/0){const i=(r?.generation??0)+1,s={shape:n,from:t.start,to:o?1/0:t.end,status:"loading",data:new Map,generation:i};r=s,li.set(e.host,s);const l=e.hass.callWS?.({type:"history/history_during_period",start_time:new Date(t.start).toISOString(),end_time:new Date(t.end).toISOString(),entity_ids:a,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});l&&l.then(t=>{if(li.get(e.host)===s&&s.generation===i){for(const e of a){const o=(t?.[e]??[]).map(e=>({t:Math.round(1e3*(e.lu??e.lc??0)),s:String(e.s??"")})).filter(e=>e.t>0);s.data.set(e,o.slice(-2e3))}s.status="ready",e.requestUpdate()}},()=>{li.get(e.host)===s&&(s.status="error")})}const i=r;if("ready"===i.status&&o)for(const s of a){const t=e.hass.states[s];if(!t)continue;const o=Date.parse(t.last_changed??t.last_updated??""),a=i.data.get(s)??[],n=a[a.length-1];Number.isFinite(o)&&(!n||o>n.t&&n.s!==t.state)&&(a.push({t:o,s:t.state}),i.data.set(s,a))}return i.data}(e,c,t.live),m=Math.min(c.end,Date.now()),f=[],g=(e,t,o,a)=>{const n=o.slice(0,2e3);if(s.push(Z`${n.map(e=>Z`<line class="mark-line ${a}" x1=${d(e)} x2=${d(e)} y1="0" y2=${dn} stroke=${t}></line>`)}`),e.label&&n.length<=60)for(const r of n)f.push({t:r,label:e.label,color:t})};for(const y of n){const a=Ce(y.color??Gr[y.type]);if("line"===y.type){const t=ni(y.value,e.hass);if(void 0===t||t<u||t>h)continue;const n=o.y(t);if(s.push(Z`<line class="threshold ${!1===y.dash?"":"dashed"}" x1="0" x2=${cn} y1=${n} y2=${n} stroke=${a}></line>`),y.label){const e=n/dn;l.push(R`<span
            class="annotation-label threshold ${e<.12?"below":""}"
            style="top:${ci(e)};--cd-annotation:${a}"
            >${y.label}</span
          >`)}}else if("band"===y.type){const t=void 0===y.from?u:ni(y.from,e.hass),n=void 0===y.to?h:ni(y.to,e.hass);if(void 0===t||void 0===n)continue;const r=Math.max(u,Math.min(t,n)),s=Math.min(h,Math.max(t,n));if(!(s>r))continue;const c=o.y(s);i.push(Z`<rect class="band" x="0" width=${cn} y=${c} height=${o.y(r)-c} fill=${a}></rect>`),y.label&&l.push(R`<span class="annotation-label band" style="top:${ci(c/dn)};--cd-annotation:${a}"
            >${y.label}</span
          >`)}else if("time"===y.type)g(y,a,ri(ti(y.times),c,t.zone),"time");else if("state"===y.type){const e=ii(p.get(y.entity.trim())??[],y.state,c,m);y.shade&&i.push(Z`${e.map(e=>Z`<rect class="state-shade" x=${d(e.start)} width=${Math.max(0,d(e.end)-d(e.start))} y="0" height=${dn} fill=${a}></rect>`)}`),g(y,a,e.map(e=>e.start).filter(e=>e>c.start),"state")}else if("point"===y.type){const n=di(y,t.series),r=n&&ui(n,y.at??"max",c,void 0!==t.group);if(!n||!r)continue;const i=d(r.t)/cn,s=o.y(r.v)/dn;if(!(i>=0&&i<=1&&s>=0&&s<=1))continue;const u=Mn(kn(r.v,n.entity.decimals,e.hass),n.entity.unit),h=i<.1?"start":i>.9?"end":"";l.push(R`<span class="annotation-dot" style="left:${ci(i)};top:${ci(s)};background:${a}"></span>
          <span
            class="annotation-label point ${h} ${s<.2?"below":""}"
            style="left:${ci(i)};top:${ci(s)};--cd-annotation:${a}"
            >${y.label?R`<span class="point-name">${y.label}</span> `:W}${u}</span
          >`)}}const v=function(e,t,o=2){const a=e.map((e,t)=>t).sort((t,o)=>e[t].x-e[o].x),n=Array.from({length:o},()=>-1/0),r=e.map(()=>{});for(const i of a){const{x:o,width:a}=e[i],s=o+2+a>t?o-2-a:o+2,l=n.findIndex(e=>s>=e+4);l<0||(n[l]=s+a,r[i]=l)}return r}(f.map(e=>({x:d(e.t)/cn*a,width:si(e.label)})),a);return f.forEach((t,o)=>{const n=v[o];if(void 0===n)return;const r=d(t.t)/cn,i=r*a+2+si(t.label)>a;l.push(R`<span
        class="annotation-label mark ${i?"end":""}"
        style="left:${ci(r)};top:${15*n}px;--cd-annotation:${t.color}"
        title=${_t(e.hass,"annotation_at",{label:t.label,time:Qo(t.t,e.hass)})}
        >${t.label}</span
      >`)}),{behind:i.length?Z`<g class="annotations-behind">${i}</g>`:W,front:s.length?Z`<g class="annotations-front">${s}</g>`:W,overlay:l.length?R`<div class="annotation-labels">${l}</div>`:W}}const pi=r`
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
`;yt("en",{editor_annotations:"Annotations",editor_annotation_type:"Kind",editor_annotation_type_line:"Line at a value",editor_annotation_type_band:"Shaded band of values",editor_annotation_type_time:"Marks at set times",editor_annotation_type_state:"Marks when an entity changes",editor_annotation_type_point:"Label on a reading",editor_annotation_add_line:"Line",editor_annotation_add_band:"Band",editor_annotation_add_time:"Times",editor_annotation_add_state:"State changes",editor_annotation_add_point:"Point label",editor_annotation_add:"Add an annotation:",editor_annotation_value:"Value (a number or an entity)",editor_annotation_from:"From (a number or an entity; blank for the bottom)",editor_annotation_to:"To (a number or an entity; blank for the top)",editor_annotation_times:"Times: 07:00 for every day, or 2026-10-28 07:00 (commas between)",editor_annotation_entity:"Entity",editor_annotation_series:"Series (blank for the first)",editor_annotation_state:"State (blank for every change)",editor_annotation_shade:"Shade while in this state",editor_annotation_at:"Reading",editor_annotation_at_max:"Highest",editor_annotation_at_min:"Lowest",editor_annotation_at_last:"Latest",editor_annotation_at_first:"First",editor_annotation_label:"Label",editor_annotation_color:"Colour",editor_annotation_dash:"Dashed",editor_annotation_remove:"Remove annotation",editor_zones:"Shade the severity bands behind the chart"});const mi={line:["value","dash"],band:["from","to"],time:["times"],state:["entity","state","shade"],point:["at","series"]},fi={dash:!0,shade:!1,at:"max"};function gi(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:_t(e,`editor_annotation_${t}_${o}`)}))}}}const vi=new Map;function yi(e,t){const o={...e};return t.length?o.annotations=t:delete o.annotations,o}function bi(e,t){if("line"===e)return{type:e,value:0};if("band"===e)return{type:e,from:0,to:1};if("time"===e)return{type:e,times:["07:00"]};if("state"===e){const o=(t.entities??[])[0];return{type:e,entity:"string"==typeof o?o:o?.entity??"sensor.example",state:"on"}}return{type:e,at:"max"}}function _i(e){const t=Array.isArray(e.config.annotations)?e.config.annotations:[],o=(e.config.entities??[]).map(e=>"string"==typeof e?e:e.entity),a=t=>_t(e.hass,t),n=(o,a)=>{const n=[...t];a?n[o]=a:n.splice(o,1),e.commit(yi(e.config,n))};return R`<style>
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
      <div class="annotations-title">${a("editor_annotations")}</div>
      ${t.map((t,r)=>R`<div class="annotation" data-index=${r}>
            <ha-form
              data-section="annotation"
              .hass=${e.hass}
              .data=${function(e){const t={type:e.type};for(const o of[...mi[e.type],"label","color"]){let a=e["series"===o?"entity":o];"times"===o?a=ti(e.times).join(", "):"value"!==o&&"from"!==o&&"to"!==o||void 0===a||(a=String(a)),t[o]=a??fi[o]}return t}(t)}
              .schema=${function(e,t,o){const a=`${e}|${bt(t)}|${o.join(",")}`;let n=vi.get(a);if(n)return n;const r={value:{text:{}},from:{text:{}},to:{text:{}},times:{text:{}},entity:{entity:{}},series:{entity:{include_entities:o}},state:{text:{}},shade:{boolean:{}},dash:{boolean:{}},at:gi(t,"at",Yr)};return n=[{name:"type",selector:gi(t,"type",Vr)},...mi[e].map(e=>({name:e,selector:r[e]})),{type:"grid",name:"",schema:[{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}}}]}],vi.set(a,n),n}(Vr.includes(t.type)?t.type:"line",e.hass,o)}
              .computeLabel=${e=>a(`editor_annotation_${e.name}`)}
              @value-changed=${e=>{e.stopPropagation(),n(r,function(e,t){const o=e.type??t.type,a={type:o},n=o===t.type?[...mi[o],"label","color"]:["label","color"];for(const r of n){let t=e[r];"string"==typeof t&&(t=t.trim()),void 0!==t&&""!==t&&t!==fi[r]&&("value"!==r&&"from"!==r&&"to"!==r||!Number.isFinite(Number(t))||(t=Number(t)),"times"===r&&(t=ti(t)),a["series"===r?"entity":r]=t)}return a}(e.detail?.value??{},t))}}
            ></ha-form>
            <ha-icon-button
              class="remove"
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              .label=${a("editor_annotation_remove")}
              @click=${()=>n(r)}
            ></ha-icon-button>
          </div>`)}
      <div class="annotation-add">
        <span>${a("editor_annotation_add")}</span>
        ${Vr.map(o=>R`<button
              type="button"
              data-type=${o}
              @click=${()=>e.commit(yi(e.config,[...t,bi(o,e.config)]))}
            >
              + ${a(`editor_annotation_add_${o}`)}
            </button>`)}
      </div>
    </div>`}function xi(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:_t(e,`editor_${t}_${o}`)}))}}}yt("en",{editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)"});const wi=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"}];function $i(e){const t=e?.period;return`${t?.calendar?"calendar":"rolling"}${e?.group_by?"|grouped":""}`}function ki(e,t){const[o,a]=$i(t).split("|"),n="calendar"===o;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:xi(e,"period_calendar",["rolling",...va])},...n?[{name:"period_until",selector:xi(e,"period_until",ya)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:xi(e,"period_unit",ga)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:xi(e,"source",hn)},{type:"grid",name:"",schema:[{name:"group_by",selector:xi(e,"group_by",["none",...Za])},...a?[{name:"aggregate",selector:xi(e,"aggregate",qa)}]:[]]}]}const Mi=wi.filter(e=>["period_last","period_unit","source"].includes(e.name));function zi(e){return[{type:"grid",name:"",schema:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:xi(e,"period_unit",ga)}]},{name:"source",selector:xi(e,"source",hn)}]}yt("en",{editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_y_scale:"Value scale",editor_y_scale_linear:"Even steps",editor_y_scale_log:"Logarithmic (powers of ten)",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden"});const Ai=[{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];function Si(e){return[{type:"grid",name:"",schema:[{name:"header",selector:xi(e,"header",Zn)},{name:"compact",selector:{boolean:{}}}]}]}const Ei=[{name:"x_axis",path:["x_axis"],default:zo},{name:"y_axis",path:["y_axis"],default:Ao},{name:"axis_labels",path:["axis_labels"],default:So},{name:"grid_horizontal",path:["gridlines","horizontal"],default:Eo},{name:"grid_vertical",path:["gridlines","vertical"],default:Co},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function Ci(e){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:xi(e,"axis_labels",Mo)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const ji=[{type:"grid",name:"",schema:[{name:"zoom",selector:{boolean:{}}},{name:"overview",selector:{boolean:{}}}]}],Ni=[{name:"zones",selector:{boolean:{}}}];yt("en",{editor_labels_show:"Which readings",editor_labels_show_all:"All (as many as fit)",editor_labels_show_last:"The latest",editor_labels_show_minmax:"Highest and lowest",editor_labels_show_ends:"First and latest",editor_labels_position:"Label position",editor_labels_position_auto:"Above peaks, below dips",editor_labels_position_above:"Above",editor_labels_position_below:"Below",editor_labels_position_center:"On the point",editor_labels_overlap:"Let labels overlap"});function Li(e,t){return[{name:"labels",selector:{boolean:{}}},...!0===t?.labels?[{type:"grid",name:"",schema:[{name:"labels_show",selector:xi(e,"labels_show",gr)},{name:"labels_position",selector:xi(e,"labels_position",vr)}]},{name:"labels_overlap",selector:{boolean:{}}}]:[]]}yt("en",{editor_sync:"Sync group (charts with the same name share the pointer and period steps)"});const Ti=[{name:"sync",selector:{text:{}}}];yt("en",{editor_multiples:"A small chart for each entity",editor_multiples_scale:"Value scale",editor_multiples_scale_auto:"The same when the units match",editor_multiples_scale_shared:"The same for every chart",editor_multiples_scale_independent:"Each chart its own",editor_multiples_columns:"Columns (empty fits the card)"});function Oi(e,t){return[{name:"multiples",selector:{boolean:{}}},...!0===t?.multiples?[{type:"grid",name:"",schema:[{name:"multiples_scale",selector:xi(e,"multiples_scale",Zr)},{name:"multiples_columns",selector:{number:{min:1,max:6,mode:"box"}}}]}]:[]]}const Fi=new Map;function Pi(e,t,o){const a=`${e}|${bt(t)}`;let n=Fi.get(a);return n||(n=o(),Fi.set(a,n)),n}function Di(e,t,o,a,n={}){return R`<ha-form
    data-section=${t}
    .hass=${e.hass}
    .data=${ho(e.config,a)}
    .schema=${o}
    .computeLabel=${t=>_t(e.hass,n[t.name]??`editor_${t.name}`)}
    @value-changed=${t=>{t.stopPropagation();const o=po(e.config,a,t.detail?.value??{});o!==e.config&&e.commit(o)}}
  ></ha-form>`}const Ui=[...wi,{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"labels_show",path:["labels_show"],default:"all"},{name:"labels_position",path:["labels_position"],default:"auto"},{name:"labels_overlap",path:["labels_overlap"],default:!1},{name:"line_width",path:["line_width"],default:At},{name:"dots",path:["dots"],default:!1},...Ei,{name:"y_scale",path:["y_scale"],default:jo},{name:"zoom",path:["zoom"],default:!1},{name:"overview",path:["overview"],default:!1},{name:"zones",path:["zones"],default:!1},...Dr,{name:"sync",path:["sync"]},...Ai,{name:"multiples",path:["multiples"],default:!1},{name:"multiples_scale",path:["multiples_scale"],default:"auto"},{name:"multiples_columns",path:["multiples_columns"]}];function Hi(e,t){if(!e)return t;const[o,a]=e,n={};return void 0===t.y_min&&o>=0&&o<=a/2&&(n.y_min=0),void 0===t.y_max&&a<=0&&a>=o/2&&(n.y_max=0),Object.keys(n).length?{...t,...n}:t}function Ii(e){const t=[];return e.forEach((o,a)=>{a>0&&t.push([o[0],e[a-1][1]]),t.push(o)}),t}function Bi(e,t,o){if(e.length<2)return"";const[a,n,r]="step"===o?[Ii(e),Ii(t),"straight"]:[e,t,o];return`${sn(a,r)}${sn([...n].reverse(),r).replace(/^M/,"L")}Z`}function Ri(e,t){return"step"===t?sn(Ii(e),"straight"):sn(e,t)}function Zi(e,t,o,a,n={}){const r=Ct(e.entity.config,a),i=e.entity.config.line_width??a.line_width,s=o.y(Math.min(Math.max(0,o.domain[0]),o.domain[1])),l=function(e){const t=e.entity.config.negative_color;return"string"==typeof t&&t.trim()?Ce(t.trim()):e.color}(e),c=`cd-area-${e.index}`,d=`cd-area-line-${e.index}`,u=l!==e.color,h=Z`${function(e,t,o,a,n=.42,r=.05){const i=Math.min(1,Math.max(0,a/dn));return Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${dn}>
    <stop offset="0" stop-color=${t} stop-opacity=${n}></stop>
    <stop offset=${i} stop-color=${t} stop-opacity=${r}></stop>
    <stop offset=${i} stop-color=${o} stop-opacity=${r}></stop>
    <stop offset="1" stop-color=${o} stop-opacity=${n}></stop>
  </linearGradient>`}(c,e.color,l,s,n.stacked?.6:.42,n.stacked?.35:.05)}
    ${u?function(e,t,o,a){const n=Math.min(1,Math.max(0,a/dn));return Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${dn}>
    <stop offset=${n} stop-color=${t}></stop>
    <stop offset=${n} stop-color=${o}></stop>
  </linearGradient>`}(d,e.color,l,s):W}`,p=[],m=[],f=[];if(n.layers){const a=n.layers;let r=[];const i=()=>{if(r.length){const n=r.map(e=>[o.x(t[e].t),o.y(a[e][1])]),i=r.map(e=>[o.x(t[e].t),o.y(a[e][0])]);p.push(Bi(n,i,e.curve)),m.push(Ri(n,e.curve))}r=[]};for(let e=0;e<t.length;e++)a[e]?r.push(e):i();i()}else for(const y of ln(t)){const t=y.map(e=>[o.x(e.t),o.y(e.v)]);p.push(Bi(t,t.map(([e])=>[e,s]),e.curve)),m.push(Ri(t,e.curve))}if(r.dots){const e=n.range;t.forEach((t,a)=>{if(null===t.v||e&&(t.t===e.start||t.t===e.end))return;const r=n.layers?n.layers[a]?.[1]:t.v;void 0!==r&&f.push([o.x(t.t),o.y(r)])})}const g=i??2,v=u?`url(#${d})`:e.color;return{defs:h,body:Z`<g class="series" data-series=${e.index}>
    <path class="fill" d=${p.join("")} fill="url(#${c})" stroke="none"></path>
    <path class="line ${e.dash?"dashed":""}" d=${m.join("")} fill="none" stroke=${v}
      style="stroke-width:${g}px"></path>
    ${f.length>0&&f.length<=200?Z`<path class="dots" d=${Nt(f)} fill="none" stroke=${v}
            style="stroke-width:${Lt(g)}px"></path>`:W}
  </g>`}}yt("en",{editor_style_area:"Area",editor_stack:"Stack",editor_stack_none:"Don't stack",editor_stack_normal:"On top of each other",editor_stack_percent:"To 100 %",editor_negative_color:"Colour below zero"});const qi=[...wi,{name:"curve",path:["curve"],default:"smooth"},{name:"stack",path:["stack"],default:"none"},{name:"line_width",path:["line_width"],default:2},{name:"dots",path:["dots"],default:!1},...Ei,...Ai];const Wi={name:"negative_color",path:["negative_color"]},Vi=new Map;const Yi=r`
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
`,Gi={layout:"chart",group:"history",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
    ${Yi}
  `,thumbnail:()=>Z`
    <defs>
      <linearGradient id="cd-thumb-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.5" />
        <stop offset="1" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10 V36 H4 Z" fill="url(#cd-thumb-area)" />
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){pn(e),Lo(e),cr(e),Ft(e),qn(e),Jn(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t.negative_color;if(void 0!==e&&"string"!=typeof e)throw new Error(`"negative_color" of ${t.entity} must be a colour`)}}(e)},editor:function(e){const t=Pi(`area|${$i(e.config)}`,e.hass,()=>[...ki(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:xi(e.hass,"curve",an)},{name:"stack",selector:xi(e.hass,"stack",Xn)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Vt},{name:"dots",selector:{boolean:{}}}]},...Ci(e.hass),...Si(e.hass)]);return Di(e,"chart",t,qi)},entityFields:function(e,t){const o=!0===t.dots;let a=Vi.get(o);return a||(a=[...Gt(o),Wi],Vi.set(o,a)),{schema:Pi("area-entity",e,()=>[...oo(e),{name:"negative_color",selector:{text:{}}}]),fields:a}},disconnect(e){bn(e),Pn(e),sr(e)},render:function(e){const t=mn(e),o=vn(t,e),a=_n(t,e),n=o===W&&a===W?W:R`${o}${a}`,r=xn(t,e),i=Wn(e.raw);if(r)return Vn("over"===i.header?{...i,header:"above"}:i,n,r);const s=e.raw.stack??"none",l=t.series.map(e=>({...e,points:ta(e.points,500)}));let c,d,u=l;const h={};if("none"===s){const o=xo(l.map(e=>e.points));d=Un({...e,raw:Hi(o,e.raw)},t.range,o);const a=d.scales,n=jt(l,t=>Ct(t.entity.config,e.raw).onTop);c=n.map(o=>Zi(o,o.points,a,e.raw,{range:t.range}))}else{const o=function(e){const t=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t);return{times:t,values:e.map(e=>t.map(t=>Kn(e,t)))}}(l.map(e=>e.points)),a=Qn(o.values,s),n=er(o.values);u=l.map((e,t)=>({...e,points:o.times.map((e,a)=>({t:e,v:o.values[t][a]}))}));const r=tr(a),i="percent"===s?{y_min:r[0]<0?-100:0,y_max:r[1]>0?100:0}:{};d=Un({...e,raw:Hi(r,{...i,...e.raw})},t.range,r);const p=d.scales;c=u.map((o,n)=>Zi(o,o.points,p,e.raw,{layers:a[n],stacked:!0,range:t.range})).reverse();const m=new Map;u.forEach(e=>e.points.forEach((e,t)=>m.set(e,t))),h.dotY=(e,t)=>{const o=a[e.index][m.get(t)??-1];return o?p.y(o[1]):null};const f=hr(u),g=Math.max(...u.map(e=>e.entity.decimals));h.footer=t=>{const o=t.length?m.get(t[0].p):void 0;return pr(e,void 0===o?null:n[o],f,g)},"percent"===s&&(h.text=(t,o)=>{const n=o?a[t.index][m.get(o)??-1]:null;if(!o||null===o.v||!n)return"—";const r=Math.round(Math.abs(n[1]-n[0]));return`${Mn(kn(o.v,t.entity.decimals,e.hass),t.entity.unit)} · ${r} %`})}const p=lr(e.raw),m=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_area"),names:t.series.map(e=>e.entity.name).join(", ")});return Vn(i,n,Bn({axes:d,ctx:e,content:Z`${c.map(e=>e.body)}`,defs:Z`${c.map(e=>e.defs)}`,label:m,overlay:R`${"over"===i.header?Yn(n):W}
      ${p?mr(e,u,d.scales,ir(e.host),Dn(e),h):W}`,hover:p?dr(e,t.range,u.map(e=>e.points)):void 0}))}};function Xi(e,t,o){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t?0:Math.min(1,Math.max(0,(e-t)/(o-t)))}function Ji(e,t,o){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t)return[0,0];const a=Xi(e,t,o);if(t<0&&o>0){const e=Xi(0,t,o);return a<e?[a,e]:[e,a]}return[0,a]}const Ki=new Set;function Qi(e){return(e.available?e.band.icon:void 0)??e.config.icon??(e.stateObj?void 0:"mdi:help-circle-outline")}function es(e){return null==e||""===e}function ts(e){if(void 0===e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function os(e,t,o="limit"){if(es(e))return null;if("number"==typeof e)return Number.isFinite(e)?e:null;const a=String(e),n=ts(t.states[a]?.state);if(null===n&&!Ki.has(a)){Ki.add(a);const e="limit"===o?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${o} entity "${a}" is missing or not numeric; ${e}.`)}return n}function as(e,t){if(e.every(e=>"number"==typeof e.from))return e;const o=[];for(const a of e){const e=t?os(a.from,t,"band start"):null;null!==e&&o.push({...a,from:e})}return o.length?o.sort((e,t)=>e.from-t.from):st}function ns(e,t){const o=e.entity,a=t.states[o],n=e.name??a?.attributes?.friendly_name??o,r=e.unit??(e.attribute?"":a?.attributes?.unit_of_measurement??""),i=function(e,t){if(t)return e.attribute?t.attributes?.[e.attribute]:t.state}(e,a),s=function(e){return"number"==typeof e?Number.isFinite(e)?e:null:"string"==typeof e?ts(e):null}(i),l=null!==s;let c;c=es(e.decimals)?e.attribute?l?function(e){const t=String(e),o=t.indexOf(".");return-1===o||/e/i.test(t)?0:Math.min(2,t.length-o-1)}(i):0:function(e,t,o){const a=e?.entities?.[t]?.display_precision;return"number"==typeof a?a:"%"===o?0:1}(t,o,r):e.decimals;const d=os(e.min,t)??0,u=os(e.max,t)??100,h=os(e.target,t),p=as(e.severity,t);let m,f="";return l?(f=kn(s,c,t),m=Mn(f,r)):m=a?function(e,t,o,a){const n=e.attribute;return n&&"string"==typeof o&&""!==o.trim()?a.formatEntityAttributeValue?.(t,n)??o:a.formatEntityState?.(t)??_t(a,"unavailable")}(e,a,i,t):_t(t,"entity_not_found"),{entityId:o,config:e,stateObj:a,available:l,value:s,min:d,max:u,target:h,name:n,unit:r,decimals:c,position:l?Xi(s,d,u):0,span:l?Ji(s,d,u):[0,0],targetPosition:null===h?null:Xi(h,d,u),band:Te(l?s:-1/0,p),bands:p,valueText:f,display:m,label:`${n}, ${m}`}}function rs(e,t){if(!e.include)return[];const o=new Set(e.entities.map(e=>e.entity));return function(e,t,o){const a=Ze.get(e);if(a&&a.exclude===t&&a.states===o.states&&a.entities===o.entities&&a.devices===o.devices&&a.areas===o.areas)return a.ids;const n=[];for(const i of Object.values(o.states)){if(!Ue(i)||o.entities?.[i.entity_id]?.hidden)continue;const a=He(i,o);if(!Be(e,a)||Re(t,a))continue;const r=i.attributes?.friendly_name;n.push({id:i.entity_id,name:"string"==typeof r&&r?r:i.entity_id})}n.sort((e,t)=>e.name.localeCompare(t.name)||(e.id<t.id?-1:1));const r=n.map(e=>e.id);return Ze.set(e,{exclude:t,states:o.states,entities:o.entities,devices:o.devices,areas:o.areas,ids:r}),r}(e.include,e.exclude,t).filter(e=>!o.has(e))}const is={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:r`
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
  `,render(e,{show:t,hass:o}){const a=t.value||!e.available,n=R`${t.name?R`<span class="name">${e.name}</span>`:W}${a?R`<span class="value">${e.display}</span>`:W}`;return R`
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Qi(e)}
            ></ha-state-icon>`:W}
      <div class="track">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:W}
        <div class="text">${n}</div>
        ${e.available?R`<div class="text on-fill ${Le(e.band.color)}" aria-hidden="true">${n}</div>`:W}
      </div>
    `}};function ss(e,t){const o=e.reduce((e,t)=>e+t.w,0);let a,n=0;for(const r of e){const e=(n+r.w/2)/o;if(n+=r.w,t<=e)return a?a.v+(r.v-a.v)*(t-a.at)/(e-a.at):r.v;a={at:e,v:r.v}}return e[e.length-1].v}const ls=["tukey","range"];function cs(e,t){if(e.length<=t)return[...e];const o=[];for(let a=0;a<t;a++)o.push(e[Math.floor(a*e.length/t)]);return o}const ds=e=>"number"==typeof e&&Number.isFinite(e);function us(e){for(const t of["x_min","x_max"])if(void 0!==e[t]&&!ds(e[t]))throw new Error(`"${t}" must be a number`);if(ds(e.x_min)&&ds(e.x_max)&&e.x_min>=e.x_max)throw new Error('"x_min" must be below "x_max"')}yt("en",{editor_x_min:"Lowest value across",editor_x_max:"Highest value across"});const hs=[{name:"x_min",path:["x_min"]},{name:"x_max",path:["x_max"]}],ps=[{type:"grid",name:"",schema:[{name:"x_min",selector:{number:{mode:"box",step:"any"}}},{name:"x_max",selector:{number:{mode:"box",step:"any"}}}]}];function ms(e){return{min:ds(e.x_min)?e.x_min:void 0,max:ds(e.x_max)?e.x_max:void 0}}function fs(e,t,o,a={}){const n=To(e.raw),r=Math.max(2,Math.min(8,Math.round(Fn(e)/70))),i=Do(t,a.x??{},r),s=Do(o,{min:n.min??a.yFloor,max:n.max},4);return{options:n,value:s,times:i.ticks,unit:"minute",range:{start:i.domain[0],end:i.domain[1]},scales:{x:$o(i.domain,[0,cn]),y:$o(s.domain,[dn,0]),domain:s.domain}}}function gs(e){const[t,o]=e.times;return void 0===t||void 0===o?0:Math.max(0,-Math.floor(Math.log10(Math.abs(o-t))+1e-9))}const vs=new WeakMap;function ys(e){return vs.get(e)?.i}function bs(e){const t=vs.get(e);void 0!==t?.timer&&clearTimeout(t.timer),vs.delete(e)}function _s(e,t){const o=function(e){let t=vs.get(e);return t||(t={},vs.set(e,t)),t}(e.host),a=t=>{t!==o.i&&(o.i=t,e.requestUpdate())},n=()=>{void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0};return{move(e){n();const o=e.currentTarget.getBoundingClientRect(),r=o.width>0?Math.min(1,Math.max(0,(e.clientX-o.left)/o.width)):0,i=o.height>0?Math.min(1,Math.max(0,(e.clientY-o.top)/o.height)):0;a(t(r,i,o.width,o.height))},leave(e){n(),"touch"===e.pointerType||"pen"===e.pointerType?o.timer=setTimeout(()=>{o.timer=void 0,a(void 0)},ar):a(void 0)}}}const xs=e=>Math.round(1e4*e)/100+"%";function ws(e){const{x:t,y:o,plotWidth:a,title:n,rows:r,dot:i,band:s}=e;if(!(t>=0&&t<=1))return W;const l=or(t,a);return R`<div class="hover-layer" aria-hidden="true">
    ${s?R`<div class="pick-band" style="left:${xs(s[0])};width:${xs(s[1]-s[0])}"></div>`:W}
    ${i&&o>=0&&o<=1?R`<span class="hover-dot" style="left:${xs(t)};top:${xs(o)};background:${i}"></span>`:W}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${xs(t)}`}>
      <div class="tooltip-time">${n}</div>
      ${r.map(e=>R`<div class="tooltip-row">
            ${e.color?R`<span class="swatch" style="background:${e.color}"></span>`:W}
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${e.value}</span>
          </div>`)}
    </div>
  </div>`}const $s=r`
  .pick-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
`,ks=["vertical","horizontal"],Ms=.72;function zs(e,t){const o=e.bounds.length>1,a=o?e.bounds.slice(0,-1).map((t,o)=>[t,e.bounds[o+1]]):[[e.range.start,e.range.end]],n=[];return a.forEach(([a,r],i)=>{const s=Math.min(r,e.until);e.series.forEach((r,l)=>{let c,d;"statistics"===e.source?({samples:c,extremes:d}=function(e,t,o){const a=[];let n=1/0,r=-1/0;for(const i of e)i.t<t||i.t>=o||i.carried||null===i.v||(a.push({v:i.v,w:1}),n=Math.min(n,i.v,"number"==typeof i.min?i.min:i.v),r=Math.max(r,i.v,"number"==typeof i.max?i.max:i.v));return{samples:a,extremes:a.length?[n,r]:void 0}}(r.points,a,s)):c=function(e,t,o){const a=[];if(o<=t)return a;for(let n=0;n<e.length;n++){const r=e[n];if(r.t>=o)break;const i=n+1<e.length?e[n+1].t:1/0,s=Math.max(r.t,t),l=Math.min(i,o);l<=s||null===r.v||a.push({v:r.v,w:l-s})}return a}(r.points,a,s);const u=function(e,t,o){const a=e.filter(e=>e.w>0&&Number.isFinite(e.v)).sort((e,t)=>e.v-t.v);if(0===a.length)return;const n=ss(a,.25),r=ss(a,.5),i=ss(a,.75),s=a.reduce((e,t)=>e+t.w,0),l=a.reduce((e,t)=>e+t.v*t.w,0)/s,c=Math.min(a[0].v,o?.[0]??1/0),d=Math.max(a[a.length-1].v,o?.[1]??-1/0),u={count:a.length,q1:n,median:r,q3:i,mean:l,min:c,max:d};if("range"===t)return{...u,low:c,high:d,outliers:[]};const h=1.5*(i-n),p=a.filter(e=>e.v>=n-h&&e.v<=i+h),m=Math.min(p[0]?.v??n,n),f=Math.max(p[p.length-1]?.v??i,i);let g=[...new Set(a.filter(e=>e.v<m||e.v>f).map(e=>e.v))];return g.length>60&&(g=g.map(e=>({v:e,d:e<m?m-e:e-f})).sort((e,t)=>t.d-e.d).slice(0,60).map(e=>e.v).sort((e,t)=>e-t)),{...u,low:m,high:f,outliers:g}}(c,t,d);u&&n.push({category:o?i:l,slot:o?l:0,series:r,stats:u,readings:cs(c.map(e=>e.v),120)})})}),{boxes:n,categories:o?a.length:e.series.length,slots:o?e.series.length:1}}function As(e,t){const o=Math.max(1,Math.ceil(e/Math.max(1,t))),a=[];for(let n=0;n<e;n+=o)a.push(n);return a}yt("en",{editor_style_box:"Box plot",box_aria:"Box plot of {names}",box_highest:"Highest",box_upper_quartile:"Upper quartile",box_median:"Median",box_lower_quartile:"Lower quartile",box_lowest:"Lowest",box_mean:"Average",box_count:"Readings",box_outliers:"Outliers",editor_orientation:"Direction",editor_orientation_vertical:"Upright",editor_orientation_horizontal:"Across",editor_whiskers:"Whiskers reach",editor_whiskers_tukey:"1.5 × box height (outliers as dots)",editor_whiskers_range:"The lowest and highest",editor_readings:"Show each reading as a dot",editor_box_color:"Box colour"});const Ss=new Map;function Es(e,t,o){const a=Ms/t;return{centre:e.category-.36+a*(e.slot+.5),half:Math.min(.4*a,o)}}function Cs(e,t,o,a){const{stats:n,series:r}=e,{centre:i,half:s}=t,l=(e,t,o)=>Z`<line class=${o} x1=${e[0]} y1=${e[1]} x2=${t[0]} y2=${t[1]}></line>`,[c,d]=o(i-s,n.q1),[u,h]=o(i+s,n.q3),p=a&&e.readings.length?Z`<path class="readings" d=${Nt(e.readings.map((e,t)=>o(i+function(e){const t=43758.5453*Math.sin(12.9898*(e+1));return 2*(t-Math.floor(t))-1}(t)*s*.8,e)))}></path>`:W;return Z`<g class="box" data-series=${r.index} style="--box-color:${r.color}">
    ${l(o(i,n.low),o(i,n.q1),"whisker")}
    ${l(o(i,n.q3),o(i,n.high),"whisker")}
    ${l(o(i-s/2,n.low),o(i+s/2,n.low),"cap")}
    ${l(o(i-s/2,n.high),o(i+s/2,n.high),"cap")}
    <rect
      class="body"
      x=${Math.min(c,u)}
      y=${Math.min(d,h)}
      width=${Math.abs(u-c)}
      height=${Math.abs(h-d)}
    ></rect>
    ${p}
    ${l(o(i-s,n.median),o(i+s,n.median),"median")}
    ${n.outliers.length?Z`<path class="outliers" d=${Nt(n.outliers.map(e=>o(i,e)))}></path>`:W}
  </g>`}const js=[...wi,{name:"orientation",path:["orientation"],default:"vertical"},{name:"whiskers",path:["whiskers"],default:"tukey"},{name:"readings",path:["readings"],default:!1},...Ei,...Ai];const Ns=[{name:"box_color",selector:{text:{}}}],Ls=[{name:"box_color",path:["color"]}],Ts={layout:"chart",group:"distribution",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
    ${$s}
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
    </g>`,validate:function(e){pn(e),Lo(e),cr(e),qn(e);const t=e;if(void 0!==t.orientation&&!ks.includes(t.orientation))throw new Error(`"orientation" must be one of: ${ks.join(", ")}`);if(void 0!==t.whiskers&&!ls.includes(t.whiskers))throw new Error(`"whiskers" must be one of: ${ls.join(", ")}`);if(void 0!==t.readings&&"boolean"!=typeof t.readings)throw new Error('"readings" must be true or false')},editor:function(e){const t={...e.config,group_by:void 0},o=Pi(`box|${$i(t)}`,e.hass,()=>[...ki(e.hass,t),{type:"grid",name:"",schema:[{name:"orientation",selector:xi(e.hass,"orientation",ks)},{name:"whiskers",selector:xi(e.hass,"whiskers",ls)}]},{name:"readings",selector:{boolean:{}}},...Ci(e.hass),...Si(e.hass)]);return Di(e,"chart",o,js)},entityFields:()=>({schema:Ns,fields:Ls}),disconnect(e){bn(e),Pn(e),bs(e)},render(e){const t=function(e,t=Date.now()){const o=$a(e.raw.period),a=e.raw.source??"history",n=fa(e.hass),r=Ma(o,t,n,o.navigate?Aa(e.host,o):0),i=Wa(e.raw),s={start:i?ua(i.unit,r.start,n):r.start,end:r.end},l=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),c="statistics"===a?{period:i?"hour"===i.unit?"5minute":"hour":Ia(s),types:["mean","min","max"],value:"mean"}:void 0,d=on(e.host,e.requestUpdate).get(e.hass,l,s,a,{live:r.live,statistics:c}),u=e.items.map((e,t)=>{const o=e.config;return{index:t,entity:e,points:d.data.get(Ra(l[t]))??[],color:Ce(o.color??un[t%un.length]),curve:"straight",dash:!1}});return{status:d.status,error:d.error,range:s,period:o,source:a,series:u,live:r.live,back:r.back,zone:n,bounds:i?pa(i.unit,s.start,s.end,n):[],unit:i?.unit,until:Math.min(s.end,t)}}(e),o=vn(t,e),a=_n(t,e),n=o===W&&a===W?W:R`${o}${a}`,r=Wn(e.raw),i=xn(t,e);if(i)return Vn("over"===r.header?{...r,header:"above"}:r,n,i);const s=e.raw,l=s.orientation??"vertical",c=s.whiskers??"tukey",{boxes:d,categories:u,slots:h}=zs(t,c);let p=1/0,m=-1/0;for(const L of d)p=Math.min(p,L.stats.low,...L.stats.outliers,...!0===s.readings?L.readings:[]),m=Math.max(m,L.stats.high,...L.stats.outliers,...!0===s.readings?L.readings:[]);const f=t.bounds.length>1,g="vertical"===l,v=g?Math.max(4,Math.floor(Dn(e)/Math.max(1,u)/6.5)):16,y=o=>f?function(e,t,o){const a=e.bounds[t],n=e.range.end-e.range.start;return"hour"===e.unit?ea(a,"hour",n,o):"month"===e.unit?ea(a,"month",n,o):ea(a,"day","week"===e.unit?1/0:n,o)}(t,o,e.hass):((e,t=16)=>e.length>t?`${e.slice(0,t-1)}…`:e)(t.series[o]?.entity.name??"",v),b=Math.max(0,...Array.from({length:u},(e,t)=>y(t).length)),_=function(e,t,o,a,n,r=0){const i=To(e.raw),s={min:i.min,max:i.max},l=[-.5,o-.5];if("vertical"===t){const t=Dn(e),r=Do(a,s,4);return{options:i,value:r,times:As(o,Math.floor(t/n)),unit:"day",range:{start:l[0],end:l[1]},scales:{x:$o(l,[0,cn]),y:$o(r.domain,[dn,0]),domain:r.domain}}}const c=Fn(e)-32-(i.y&&"outside"===i.labels?r:0),d=Do(a,s,Math.max(2,Math.min(8,Math.round(c/70)))),u=!0===e.raw.compact?6:10;return{options:{...i,horizontal:i.vertical,vertical:i.horizontal},value:{domain:l,ticks:As(o,u),decimals:0},times:d.ticks,unit:"day",range:{start:d.domain[0],end:d.domain[1]},scales:{x:$o(d.domain,[0,cn]),y:$o(l,[0,dn]),domain:l}}}(e,l,u,d.length?[p,m]:void 0,f?56:1,6*b+12),x=g?_.scales.x:_.scales.y,w=g?_.scales.y:_.scales.x,$=(e,t)=>g?[x(e),w(t)]:[w(t),x(e)],k=g?Dn(e):r.compact?110:160,M=k>0?u/k*22:1/0,z=Z`${d.map(e=>Cs(e,Es(e,h,M),$,!0===s.readings))}`,A=_t(e.hass,"box_aria",{names:t.series.map(e=>e.entity.name).join(", ")}),S=lr(e.raw),E=S?ys(e.host):void 0,C=(t,o)=>Mn(kn(o,t.series.entity.decimals,e.hass),t.series.entity.unit);let j=W;const N=void 0===E?void 0:d[E];if(N){const o=t=>_t(e.hass,t),{stats:a}=N,n=[{name:o("box_highest"),value:C(N,a.max)},{name:o("box_upper_quartile"),value:C(N,a.q3)},{name:o("box_median"),value:C(N,a.median),color:N.series.color},{name:o("box_lower_quartile"),value:C(N,a.q1)},{name:o("box_lowest"),value:C(N,a.min)},{name:o("box_mean"),value:C(N,a.mean)},{name:o("box_count"),value:String(a.count)}];if(a.outliers.length){const e=a.outliers.length;n.push({name:o("box_outliers"),value:e>=60?`${e}+`:String(e)})}const r=Es(N,h,M),i=f?`${function(e,t,o){const a="month"===t?{month:"long",year:"numeric"}:"hour"===t?{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:Go(o)}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short"},n=o?.locale?.language??"en",r=`${n}|${t}|${Yo(o)}|${a.hour12}`;let i=Ss.get(r);if(!i){try{i=new Intl.DateTimeFormat(n,{...a,timeZone:Yo(o)})}catch{i=new Intl.DateTimeFormat("en",a)}Ss.set(r,i)}return i.format(e)}(t.bounds[N.category],t.unit,e.hass)}${h>1?` · ${N.series.entity.name}`:""}`:N.series.entity.name;j=ws(g?{x:x(r.centre)/cn,y:w(a.median)/dn,plotWidth:Dn(e),title:i,rows:n,band:[x(N.category-.5)/cn,x(N.category+.5)/cn]}:{x:w(a.high)/cn,y:x(r.centre)/dn,plotWidth:Dn(e),title:i,rows:n})}return Vn(r,n,Bn({axes:_,ctx:e,content:z,label:A,overlay:R`${"over"===r.header?Yn(n):W}${j}`,hover:S?_s(e,(e,t)=>function(e,t,o,a){const n=a*t-.5,r=Math.min(t-1,Math.max(0,Math.round(n))),i=n-r+.36;if(o>1&&(i<0||i>=Ms))return;const s=Math.min(o-1,Math.max(0,Math.floor(i/(Ms/o)))),l=e.findIndex(e=>e.category===r&&e.slot===s);return l<0?void 0:l}(d,u,h,g?e:t)):void 0,...g?{xLabel:y}:{yLabel:y,xLabel:t=>kn(t,gs(_),e.hass)}}))}},Os=["entity","time"],Fs=[2,80],Ps=[2,30],Ds=[0,20];function Us(e,t){const o=new Set;for(const i of e)for(const e of i)e.t!==t&&o.add(e.t);const a=[...o].sort((e,t)=>e-t),n=e.map(()=>-1),r=[];for(const i of a){const t=[];let o=!0;e.forEach((e,a)=>{for(;n[a]+1<e.length&&e[n[a]+1].t<=i;)n[a]++;const r=e[n[a]];r&&null!==r.v?t.push(r.v):o=!1}),o&&r.push({t:i,v:t})}return r}function Hs(e,t){if(e.length<=t)return e;const o=e.length/t,a=[];for(let n=0;n<t-1;n++)a.push(e[Math.floor(n*o)]);return a.push(e[e.length-1]),a}function Is(e,t){let o=Math.floor(e/1e3)^Math.imul(t+1,2654435769)|0;return o=Math.imul(o^o>>>16,73244475),o=Math.imul(o^o>>>16,73244475),o^=o>>>16,(o>>>0)/4294967295*2-1}function Bs(e,[t,o],a,n){const r=a*a+(n*n-a*a)*(o>t?Math.min(1,Math.max(0,(e-t)/(o-t))):.5);return Math.round(10*Math.sqrt(r))/10}yt("en",{editor_style_scatter:"Scatter",editor_style_bubble:"Bubble",editor_against:"Along the bottom",editor_against_entity:"The first entity",editor_against_time:"Time",editor_dot_size:"Dot size (px)",editor_jitter:"Jitter (px)",editor_min_size:"Smallest bubble (px)",editor_max_size:"Largest bubble (px)",editor_dot_color:"Dot colour",editor_xy_x_axis:"Labels along the bottom",scatter_needs_two:"Add a second entity. The first goes along the bottom, the others up the side.",bubble_needs_three:"Add three entities: one along the bottom, one up the side, and one for the size of each bubble.",scatter_role_x:"Across",bubble_role_size:"Size"});const Rs=e=>"number"==typeof e&&Number.isFinite(e);function Zs(e,t,[o,a]){const n=e[t];if(void 0!==n&&(!Rs(n)||n<o||n>a))throw new Error(`"${t}" must be a number from ${o} to ${a}`)}function qs(e,t){return{against:"bubble"===t?"entity":e.against??"entity",dotSize:Rs(e.dot_size)?e.dot_size:6,jitter:Rs(e.jitter)?e.jitter:0,minSize:Rs(e.min_size)?e.min_size:6,maxSize:Rs(e.max_size)?e.max_size:32}}function Ws(e,t){if(pn(e),Lo(e),cr(e),qn(e),us(e),Zs(e,"jitter",Ds),"scatter"===t){if(void 0!==e.against&&!Os.includes(e.against))throw new Error(`"against" must be one of: ${Os.join(", ")}`);Zs(e,"dot_size",Ps)}else{Zs(e,"min_size",Fs),Zs(e,"max_size",Fs);const o=qs(e,t);if(o.minSize>o.maxSize)throw new Error('"min_size" must not be above "max_size"')}}function Vs(e,t){return Ce(e.entity.config.color??un[(e.index-t)%un.length])}const Ys=(e,t,o)=>Mn(kn(e,t.entity.decimals,o),t.entity.unit);function Gs(e,t,o=Date.now()){const a=qs(e.raw,t),{against:n}=a,r=Wn(e.raw),i=mn(e,o),s=vn(i,e),l="time"===n,c=l?0:1,d=i.series.map((e,o)=>l?e.color:"bubble"===t?1===o?Vs(e,1):void 0:0===o?void 0:Vs(e,c)),u=function(e,t,o,a){const{show:n}=o.config;return n.name||n.value?R`<div class="series-header">
    ${e.map((e,r)=>{const i=t[r],s=void 0!==i?R`<span class="swatch" style="background:${i}"></span>`:R`<span class="role"
              >${_t(o.hass,"bubble"===a&&2===r?"bubble_role_size":"scatter_role_x")}</span
            >`;return R`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
        ${s} ${n.name?R`<span class="series-name">${e.entity.name}</span>`:W}
        ${n.value?R`<span class="series-value">${e.entity.display}</span>`:W}
      </div>`})}
  </div>`:W}(i.series,d,e,t),h=s===W&&u===W?W:R`${s}${u}`,p="over"===r.header?{...r,header:"above"}:r;if(i.series.length<function(e,t){return"bubble"===e?3:"entity"===t?2:1}(t,n))return Vn(p,h,R`<div class="chart-message">
        ${_t(e.hass,"bubble"===t?"bubble_needs_three":"scatter_needs_two")}
      </div>`);const m=xn(i,e);if(m)return Vn(p,h,m);const f="history"!==i.source||i.group?void 0:Math.min(i.range.end,o),g=function(e,t,o,a){const{series:n}=e;if("time"===o)return n.map(e=>({s:e,samples:Hs(e.points.filter(e=>null!==e.v&&e.t!==a&&!e.carried).map(e=>({t:e.t,v:[e.t,e.v]})),800)}));if("bubble"===t){const[e,t,o]=n;return[{s:t,samples:Hs(Us([e.points,t.points,o.points],a),400)}]}const[r,...i]=n;return i.map(e=>({s:e,samples:Hs(Us([r.points,e.points],a),800)}))}(i,t,n,f),v=g.flatMap(e=>e.samples);if(0===v.length)return Vn(p,h,R`<div class="chart-message">${_t(e.hass,"chart_no_data")}</div>`);const y=v.map(e=>e.v[1]),b=[Math.min(...y),Math.max(...y)];let _,x;if(l)_=Un(e,i.range,xo(i.series.map(e=>e.points)));else{const t=v.map(e=>e.v[0]);_=fs(e,[Math.min(...t),Math.max(...t)],b,{x:ms(e.raw)});const o=gs(_);x=t=>kn(t,o,e.hass)}const{scales:w}=_,$=Dn(e)||1,k=a.jitter*cn/$,M=a.jitter*dn/(r.compact?96:162);const z="bubble"===t?v.map(e=>e.v[2]):[],A=z.length?[Math.min(...z),Math.max(...z)]:[0,0],S=g.flatMap(({s:e,samples:o})=>{const n=l?e.color:Vs(e,c);return o.map(o=>({series:e,t:o.t,x:w.x(o.v[0])+(k?Is(o.t,2*e.index)*k:0),y:w.y(o.v[1])+(M?Is(o.t,2*e.index+1)*M:0),v:l?[o.v[1]]:o.v,color:n,d:"bubble"===t?Bs(o.v[2],A,a.minSize,a.maxSize):void 0}))}),E="bubble"===t?Z`${[...S].sort((e,t)=>(t.d??0)-(e.d??0)).map(e=>Z`<path class="bubble" d=${Nt([[e.x,e.y]])} stroke=${e.color} style="stroke-width:${e.d}px"></path>`)}`:Z`${g.map(({s:e})=>{const t=S.filter(t=>t.series===e);return t.length?Z`<path class="dots" data-series=${e.index} d=${Nt(t.map(e=>[e.x,e.y]))}
                stroke=${t[0].color} style="stroke-width:${a.dotSize}px"></path>`:W})}`,C=lr(e.raw),j=C?ys(e.host):void 0,N=void 0!==j?S[j]:void 0,L=_t(e.hass,"chart_aria",{style:_t(e.hass,`editor_style_${t}`),names:i.series.map(e=>e.entity.name).join(", ")}),T=Math.max(16,"bubble"===t?a.maxSize/2:a.dotSize);return Vn(r,h,R`${Bn({axes:_,ctx:e,content:E,label:L,xLabel:x,overlay:R`${"over"===r.header?Yn(h):W}
      ${N?Xs(N,i,t,n,e,$):W}`,hover:C?_s(e,(e,t,o,a)=>function(e,t,o,a,n,r=24){let i,s=r*r;const l=t*a,c=o*n;return e.forEach(([e,t],o)=>{const r=e/cn*a-l,d=t/dn*n-c,u=r*r+d*d;u<=s&&(s=u,i=o)}),i}(S.map(e=>[e.x,e.y]),e,t,o,a,T)):void 0})}
    ${"bubble"===t?function(e,[t,o],a,n){const r=(t,o)=>R`<span class="size-item"
      ><span class="size-dot" style="width:${o}px;height:${o}px"></span>${Ys(t,e,n)}</span
    >`;return R`<div class="size-legend" aria-hidden="true">
    <span class="size-name">${e.entity.name}</span>
    ${r(t,Bs(t,[t,o],a.minSize,a.maxSize))}
    ${o>t?r(o,Bs(o,[t,o],a.minSize,a.maxSize)):W}
  </div>`}(i.series[2],A,a,e.hass):W}`)}function Xs(e,t,o,a,n,r){const i="time"===a?[e.series]:"bubble"===o?t.series.slice(0,3):[t.series[0],e.series];return ws({x:e.x/cn,y:e.y/dn,plotWidth:r,title:Qo(e.t,n.hass),dot:e.color,rows:i.map((t,o)=>({color:t===e.series?e.color:void 0,name:t.entity.name,value:Ys(e.v[o],t,n.hass)}))})}const Js=r`
  ${$n}
  ${Rn}
  ${fr}
  ${Gn}
  ${$s}
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
`;function Ks(e){bn(e),Pn(e),sr(e),bs(e)}const Qs=Ei.map(e=>"x_axis"===e.name?{...e,name:"xy_x_axis"}:e);const el=(e,t,o=1)=>({number:{min:e,max:t,step:o,mode:"box",unit_of_measurement:"px"}}),tl={scatter:[...wi,{name:"against",path:["against"],default:"entity"},{name:"dot_size",path:["dot_size"],default:6},{name:"jitter",path:["jitter"],default:0},...hs,...Qs,...Ai],bubble:[...wi,{name:"min_size",path:["min_size"],default:6},{name:"max_size",path:["max_size"],default:32},{name:"jitter",path:["jitter"],default:0},...hs,...Qs,...Ai]};function ol(e){return t=>{const o="scatter"===e&&"time"===t.config.against,a=Pi(`${e}|${$i(t.config)}|${o}`,t.hass,()=>{return[...ki(t.hass,t.config),..."scatter"===e?[{name:"against",selector:xi(t.hass,"against",Os)},{type:"grid",name:"",schema:[{name:"dot_size",selector:el(Ps[0],Ps[1])},{name:"jitter",selector:el(Ds[0],Ds[1])}]}]:[{type:"grid",name:"",schema:[{name:"min_size",selector:el(Fs[0],Fs[1])},{name:"max_size",selector:el(Fs[0],Fs[1])}]},{name:"jitter",selector:el(Ds[0],Ds[1])}],...o?[]:ps,...(a=t.hass,[{type:"grid",name:"",schema:[{name:"xy_x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:xi(a,"axis_labels",Mo)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]),...Si(t.hass)];var a});return Di(t,"chart",a,tl[e])}}const al=[{name:"dot_color",path:["color"]}],nl=[{name:"dot_color",selector:{text:{}}}];function rl(){return{schema:nl,fields:al}}const il={layout:"chart",group:"distribution",height:270,styles:Js,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)" fill-opacity="0.6">
      <circle cx="14" cy="28" r="4" /><circle cx="27" cy="20" r="7" /><circle cx="44" cy="24" r="5" />
      <circle cx="52" cy="11" r="8" /><circle cx="36" cy="33" r="3" />
    </g>`,validate:e=>Ws(e,"bubble"),editor:ol("bubble"),entityFields:()=>rl(),disconnect:Ks,render:e=>Gs(e,"bubble")},sl=["auto","none","hour","day","week","month"],ll=["auto","mean","sum","min","max","first","last","change"],cl={last:7,unit:"day"},dl={hour:1/24,day:1,week:7,month:30};function ul(e){if(e.calendar)return{day:"hour",week:"day",month:"day",year:"month"}[e.calendar];const t=e.last*dl[e.unit];return t<=2?"hour":t<=62?"day":t<=190?"week":"month"}function hl(e){if(e.config.attribute)return!1;const t=e.stateObj?.attributes?.state_class;return"total_increasing"===t||"total"===t}function pl(e,t){const o={...e,period:e.period??{...cl}};return"none"===e.group_by?delete o.group_by:void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=ul($a(o.period))),void 0!==e.aggregate&&"auto"!==e.aggregate||(o.aggregate=!0!==e.range&&t.length>0&&t.every(hl)?"change":"mean"),o}function ml(e,t){const o=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t),a=e.map(e=>new Map(e.map(e=>[e.t,e]))),n=new Map;for(const i of e)for(const e of i)void 0!==e.end&&n.set(e.t,e.end);const r={times:[],ends:[],values:e.map(()=>[]),lows:e.map(()=>[]),highs:e.map(()=>[])};return o.forEach((i,s)=>{const l=Math.min(n.get(i)??o[s+1]??t,t);l>i&&(r.times.push(i),r.ends.push(l),e.forEach((e,t)=>{const o=a[t].get(i);r.values[t].push(o?o.v:Kn(e,i)),r.lows[t].push(o?.min??null),r.highs[t].push(o?.max??null)}))}),r}function fl(e,t,o,a){const n=t-e,r=.8*n/a,i=a>1?.12*r:0;return[e+.2*n/2+o*r+i/2,r-i]}function gl(e,t=!0){let o=t?0:1/0,a=t?0:-1/0;for(const n of e)null!==n&&Number.isFinite(n)&&(o=Math.min(o,n),a=Math.max(a,n));return o===1/0?void 0:[o,a]}const vl={hour:66,day:52,week:52,month:60};yt("en",{editor_style_column:"Column",editor_group_by_auto:"Automatic",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_range:"Lowest to highest in each column",editor_rounded:"Rounded ends",editor_column_labels:"Show values on the columns",editor_column_color:"Colour"});const yl={hour:"hour",day:"day",week:"day",month:"month"};function bl(e,t,o,a){if("hour"===o)return`${Qo(e,a)} – ${Ko(t,a)}`;const n="day"===o?{weekday:"short",day:"numeric",month:"short"}:"week"===o?{day:"numeric",month:"short"}:{month:"long",year:"numeric"};let r;try{r=new Intl.DateTimeFormat(a?.locale?.language??"en",{...n,timeZone:Yo(a)})}catch{r=new Intl.DateTimeFormat("en",n)}return"week"===o?r.formatRange(e,t-1):r.format(e)}const _l=(e,t)=>Math.round(e/t*1e4)/100+"%",xl=e=>Math.min(dn,Math.max(0,e));function wl(e,t,o,a,n,r,i,s){const l=xl(e.y(n)),c=xl(e.y(a));return R`<div
    class="col ${i?`cap-${i}`:""} ${n<=0&&"both"!==i?"down":""}"
    data-series=${s}
    style="left:${_l(t,cn)};width:${_l(o,cn)};top:${_l(l,dn)};height:${_l(c-l,dn)};background:${r}"
  ></div>`}function $l(e,t,o,a,n,r){return R`<span
    class="point-label col-label ${r?"below":""}"
    style="left:${_l(t,cn)};top:${_l(xl(o),dn)}"
    >${kn(a,n,e.hass)}</span
  >`}function kl(e,t,o,a){const n=e.y(a);return n<0||n>dn?R``:R`<div
    class="target-mark"
    style="left:${_l(t-.1*o,cn)};width:${_l(1.2*o,cn)};top:${_l(n,dn)}"
  ></div>`}const Ml=wi.map(e=>"period_last"===e.name?{...e,default:cl.last}:"period_unit"===e.name?{...e,default:cl.unit}:"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),zl=[...Ml,{name:"stack",path:["stack"],default:"none"},{name:"color_by",path:["color_by"],default:"series"},{name:"range",path:["range"],default:!1},{name:"column_labels",path:["labels"],default:!1},{name:"rounded",path:["rounded"],default:!0},...Ei,...Ai];const Al=[{name:"column_color",path:["color"]}],Sl=r`
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
`,El={layout:"chart",group:"history",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
    ${Sl}
  `,thumbnail:()=>Z`
    <path d="M7 36 V22 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M19 36 V12 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M31 36 V18 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M43 36 V8 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M55 36 V26 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M4 36.5 H62" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(e){if(void 0!==e.group_by&&!(e=>sl.includes(e))(e.group_by))throw new Error(`"group_by" must be one of: ${sl.join(", ")}`);if(void 0!==e.aggregate&&!ll.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${ll.join(", ")}`);const t={...e};"auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,pn(t),Lo(e),cr(e),qn(e),Jn(e);for(const o of["range","rounded","labels"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);if(void 0!==e.color_by&&"series"!==e.color_by&&"bands"!==e.color_by)throw new Error('"color_by" must be one of: series, bands')},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},a=Pi(`column|${$i(o)}|${t}`,e.hass,()=>[...ki(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:xi(e.hass,"group_by",sl)},...t?[]:[{name:"aggregate",selector:xi(e.hass,"aggregate",ll)}]]},{type:"grid",name:"",schema:[{name:"stack",selector:xi(e.hass,"stack",Xn)},{name:"color_by",selector:xi(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"range",selector:{boolean:{}}},{name:"column_labels",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...Ci(e.hass),...Si(e.hass)]);return Di({...e,commit:t=>e.commit(function(e){const t=e.period;return t&&"object"==typeof t&&void 0===t.calendar?void 0!==t.last&&void 0!==t.unit?e:{...e,period:{last:cl.last,unit:cl.unit,...t}}:e}(t))},"chart",a,zl)},entityFields:e=>({schema:Pi("column-entity",e,()=>[{name:"column_color",selector:{text:{}}}]),fields:Al}),disconnect(e){bn(e),Pn(e),sr(e)},render:function(e){const t={...e,raw:pl(e.raw,e.items)},o=t.raw,a=!0===o.range,n=mn(t,Date.now(),{range:a}),r=vn(n,t),i=_n(n,t),s=r===W&&i===W?W:R`${r}${i}`,l=xn(n,t),c=Wn(o);if(l)return Vn("over"===c.header?{...c,header:"above"}:c,s,l);const d=a?"none":o.stack??"none",u=n.group,h=ml(n.series.map(e=>e.points),u?1/0:n.range.end),p=u&&h.ends.length?{...n.range,end:Math.max(n.range.end,...h.ends)}:n.range,m="none"===d?void 0:Qn(h.values,d),f=n.series.map(e=>e.entity.target).filter(e=>null!==e);let g;g=m?tr(m):a?gl([...h.lows.flat(),...h.highs.flat(),...h.values.flat(),...f],!1):gl([...h.values.flat(),...t.config.show.target?f:[]]);let v=o;"percent"===d?v={y_min:g[0]<0?-100:0,y_max:g[1]>0?100:0,...o}:!a&&g&&(v=function(e,t){const o={...t};return void 0===t.y_min&&e[0]>=0&&(o.y_min=0),void 0===t.y_max&&e[1]<=0&&(o.y_max=0),o}(g,o));let y=Un({...t,raw:v},p,g);const{scales:b}=y,_=h.times.map((e,t)=>(e+h.ends[t])/2),x=new Map(_.map((e,t)=>[e,t]));if(u&&_.length){const e=(w=_.length,$=Dn(t)/vl[u.unit],Math.max(1,Math.ceil(w/Math.max(1,$)))),o=yl[u.unit],a="day"===u.unit&&_.length<=8?6048e5:n.range.end-n.range.start;y={...y,unit:o,times:_.filter((t,o)=>o%e===0),label:e=>ea(h.times[x.get(e)],o,a,t.hass)}}var w,$;const k=function(e,t,o,a,n,r){const i=e.raw,s=t.series,l=s.length,c=!0===i.range,d="bands"===i.color_by,u=Dn(e)/cn,h=!0===i.labels&&"percent"!==n&&o.times.length*(r?1:l)<=60,p=e.config.show.target&&"percent"!==n,m=Math.min(Math.max(0,a.domain[0]),a.domain[1]),f=(e,t)=>d?Ce(Te(t,e.entity.bands).color):e.color,g={columns:[],labels:[],targets:[]},v=r?er(o.values):[];return o.times.forEach((t,n)=>{const i=a.x(t),d=a.x(o.ends[n]);if(r){const[t,l]=fl(i,d,0,1);let c=-1,m=-1;r.forEach((e,t)=>{const o=e[n];o&&o[1]>o[0]&&(c=t),o&&o[1]<o[0]&&(m=t)}),r.forEach((e,r)=>{const i=e[n];if(!i||i[0]===i[1])return;const d=o.values[r][n],u=r===c?"top":r===m?"bottom":"";g.columns.push(wl(a,t,l,Math.min(...i),Math.max(...i),f(s[r],d),u,r))});const y=v[n];if(h&&null!==y&&l*u>=24){const o=y>=0?Math.max(0,...r.map(e=>e[n]?.[1]??0)):Math.min(0,...r.map(e=>e[n]?.[1]??0)),i=Math.max(...s.map(e=>e.entity.decimals));g.labels.push($l(e,t+l/2,a.y(o),y,i,y<0))}const b=s[0].entity.target;return void(p&&null!==b&&g.targets.push(kl(a,t,l,b)))}s.forEach((t,r)=>{const s=o.values[r][n];if(null===s)return;const[v,y]=fl(i,d,r,l);if(c){const e=o.lows[r][n]??s,i=o.highs[r][n]??s;g.columns.push(wl(a,v,y,e,i,f(t,s),"both",r)),g.columns.push(R`<div
            class="col-mark"
            style="left:${_l(v,cn)};width:${_l(y,cn)};top:${_l(xl(a.y(s)),dn)}"
          ></div>`)}else g.columns.push(wl(a,v,y,Math.min(m,s),Math.max(m,s),f(t,s),s>=m?"top":"bottom",r)),h&&y*u>=24&&g.labels.push($l(e,v+y/2,a.y(s),s,t.entity.decimals,s<m));p&&null!==t.entity.target&&g.targets.push(kl(a,v,y,t.entity.target))})}),g}(t,n,h,b,d,m),M=n.series.map((e,t)=>({...e,points:_.map((e,o)=>({t:e,v:h.values[t][o],min:h.lows[t][o],max:h.highs[t][o]}))})),z={dotY:()=>null,heading:e=>{const o=x.get(e);return void 0===o?Qo(e,t.hass):u?bl(h.times[o],h.ends[o],u.unit,t.hass):Qo(h.times[o],t.hass)}},A=(e,o)=>kn(e,o.entity.decimals,t.hass);if(a&&(z.text=(e,t)=>{if(!t||null===t.v)return"—";const o=t.min??t.v,a=t.max??t.v;return Mn(`${A(o,e)} – ${A(a,e)}`,e.entity.unit)}),m){const e=er(h.values),o=hr(M),a=Math.max(...M.map(e=>e.entity.decimals));z.footer=n=>pr(t,e[x.get(n[0]?.p?.t??NaN)??-1]??null,o,a),"percent"===d&&(z.text=(e,t)=>{const o=t?m[e.index][x.get(t.t)??-1]:null;return t&&null!==t.v&&o?`${Mn(A(t.v,e),e.entity.unit)} · ${Math.round(Math.abs(o[1]-o[0]))} %`:"—"})}const S=lr(o),E=S?ir(t.host):void 0,C=void 0===E?void 0:x.get(E),j=void 0===C?W:R`<div
          class="slot-hover"
          style="left:${_l(b.x(h.times[C]),cn)};width:${_l(b.x(h.ends[C])-b.x(h.times[C]),cn)}"
        ></div>`,N=_t(t.hass,"chart_aria",{style:_t(t.hass,"editor_style_column"),names:n.series.map(e=>e.entity.name).join(", ")}),L=!1===o.rounded?0:4;return Vn(c,s,Bn({axes:y,ctx:t,content:Z``,label:N,overlay:R`<div class="columns" style="--r:${L}px">${j}${k.columns}${k.targets}</div>
        <div class="point-labels">${k.labels}</div>
        ${"over"===c.header?Yn(s):W}
        ${S?mr(t,M,b,E,Dn(t),z):W}`,hover:S?dr(t,p,M.map(e=>e.points)):void 0}))}};yt("en",{zoom_reset:"Reset zoom",zoom_window:"Shown: {from} to {to}",zoom_window_label:"Part of the chart shown",editor_zoom:"Zoom and pan (pinch, Ctrl + scroll or drag)",editor_overview:"Overview strip below the chart"});const Cl={from:0,to:1};const jl=(e,t,o)=>Math.min(o,Math.max(t,e));function Nl(e,t){const o=jl(t,0,1);let a=jl(e.to-e.from,o,1);Number.isFinite(a)||(a=1);const n=jl(Number.isFinite(e.from)?e.from:0,0,1-a);return{from:n,to:n+a}}function Ll(e){return e.from>1e-9||e.to<1-1e-9}function Tl(e,t,o,a){const n=e.to-e.from,r=e.from+jl(t,0,1)*n,i=jl(n/o,a,1),s=r-jl(t,0,1)*i;return Nl({from:s,to:s+i},a)}function Ol(e,t){const o=e.to-e.from,a=jl(e.from+t,0,1-o);return{from:a,to:a+o}}function Fl(e,t,o,a){const n=e.to-e.from,r=e.from+jl(Math.min(t,o),0,1)*n,i=e.from+jl(Math.max(t,o),0,1)*n;if(i-r>=a)return{from:r,to:i};const s=(r+i)/2;return Nl({from:s-a/2,to:s+a/2},a)}function Pl(e,t){const o=e.end-e.start;return{start:e.start+t.from*o,end:e.start+t.to*o}}function Dl(e,t){if(0===e.length)return e;let o=0,a=e.length;for(;o<a;){const n=o+a>>1;(e[n].end??e[n].t)<t.start?o=n+1:a=n}const n=Math.max(0,o-1);let r=o;for(;r<e.length&&e[r].t<=t.end;)r++;const i=e.slice(n,Math.min(e.length,r+1));return i.length===e.length?e:i}const Ul=new WeakMap;function Hl(e,t){const o={zoom:!0===(a=e.raw).zoom,overview:!0===a.overview};var a;const n=t.range.end-t.range.start,r=n>0?Math.min(1,function(e){return e.group?2*{hour:36e5,day:864e5,week:6048e5,month:2592e6}[e.group.unit]:3e5}(t)/n):1,i=`${JSON.stringify(t.period)}|${t.back}|${t.group?.unit??""}|${t.source}`,s=function(e,t){let o=Ul.get(e);return o&&o.key===t||(o={key:t,window:Cl,pointers:new Map},Ul.set(e,o)),o}(e.host,i);o.zoom||o.overview||(s.window=Cl);const l=Nl(s.window,r),c=t=>{const o=Nl(t,r);o.from===s.window.from&&o.to===s.window.to||(s.window=o,e.requestUpdate())};return{options:o,window:l,zoomed:Ll(l),range:Pl(t.range,l),minSpan:r,current:()=>Nl(s.window,r),set:c,reset:()=>c(Cl)}}const Il=e=>{const t=e.currentTarget.getBoundingClientRect();return{f:t.width>0?jl((e.clientX-t.left)/t.width,0,1):0,width:t.width}};function Bl(e){try{e.currentTarget.setPointerCapture?.(e.pointerId)}catch{}}const Rl=e=>e?.leave({pointerType:"mouse"});function Zl(e,t,o){const a=Ul.get(e.host),n=()=>{a.gesture=void 0,a.select&&(a.select=void 0,e.requestUpdate())};return{down(e){const{f:n,width:r}=Il(e);if(a.pointers.set(e.pointerId,n),2===a.pointers.size){const[e,n]=[...a.pointers.values()];return a.gesture={kind:"pinch",w0:t.current(),start:e<=n?[e,n]:[n,e]},a.select=void 0,void Rl(o)}if(!(a.pointers.size>2)){if("mouse"===e.pointerType&&0===e.button){const o=t.current();a.gesture={kind:Ll(o)?"pan":"select",x0:n,w0:o,moved:!1,px:r},Bl(e)}o?.move(e)}},move(n){if(!a.pointers.has(n.pointerId))return void o?.move(n);const{f:r}=Il(n);a.pointers.set(n.pointerId,r);const i=a.gesture;if("pinch"===i?.kind){if(a.pointers.size<2)return;const[e,o]=[...a.pointers.values()];return void t.set(function(e,t,o,a){const n=e.to-e.from,r=e.from+t[0]*n,i=e.from+t[1]*n,s=o[1]-o[0];if(Math.abs(s)<.02||Math.abs(t[1]-t[0])<.02)return Ol(e,-((o[0]+o[1])/2-(t[0]+t[1])/2)*n);const l=jl((i-r)/s,a,1),c=r-o[0]*l;return Nl({from:c,to:c+l},a)}(i.w0,i.start,e<=o?[e,o]:[o,e],t.minSpan))}if(i&&("pan"===i.kind||"select"===i.kind))return!i.moved&&Math.abs(r-i.x0)*i.px<4?void o?.move(n):(i.moved||Rl(o),i.moved=!0,void("pan"===i.kind?t.set(Ol(i.w0,-(r-i.x0)*(i.w0.to-i.w0.from))):(a.select=[i.x0,r],e.requestUpdate())));o?.move(n)},up(e){const{f:o,width:r}=Il(e),i=a.gesture;if(a.pointers.delete(e.pointerId),"pinch"===i?.kind)return void(0===a.pointers.size&&(a.gesture=void 0));"select"===i?.kind&&i.moved&&t.set(Fl(i.w0,i.x0,o,t.minSpan));const s=!i||!("moved"in i)||!i.moved;if(n(),"mouse"!==e.pointerType&&s){const n=e.timeStamp||Date.now(),i=a.lastTap;i&&n-i.at<300&&Math.abs(o-i.x)*r<30?(a.lastTap=void 0,t.reset()):a.lastTap={at:n,x:o}}},cancel(e){a.pointers.delete(e.pointerId),"pinch"===a.gesture?.kind&&a.pointers.size>=2||(n(),o?.leave(e))},leave(e){a.gesture&&"mouse"===e.pointerType||(a.pointers.delete(e.pointerId),o?.leave(e))},wheel(e){const{f:o}=Il(e);if(e.ctrlKey||e.metaKey){e.preventDefault();const a=1===e.deltaMode?16*e.deltaY:e.deltaY;return void t.set(Tl(t.current(),o,Math.exp(-jl(a,-100,100)/200),t.minSpan))}const a=e.shiftKey&&0===e.deltaX?e.deltaY:e.deltaX,n=t.current();if(Ll(n)&&Math.abs(a)>Math.abs(e.shiftKey?0:e.deltaY)){e.preventDefault();const{width:o}=Il(e);t.set(Ol(n,a/Math.max(o,1)*(n.to-n.from)))}},dblclick(){t.reset()}}}function ql(e,t){const o=Ul.get(e.host),a=o?.select,n=a?R`<div
        class="zoom-select"
        style="left:${100*Math.min(...a)}%;width:${100*Math.abs(a[1]-a[0])}%"
      ></div>`:W,r=t.zoomed?R`<button
        class="zoom-reset"
        title=${_t(e.hass,"zoom_reset")}
        @pointerdown=${e=>e.stopPropagation()}
        @click=${e=>{e.stopPropagation(),t.reset()}}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${Wl}></path></svg>
        <span>${_t(e.hass,"zoom_reset")}</span>
      </button>`:W;return n===W&&r===W?W:R`${n}${r}`}const Wl="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z";function Vl(e,t){const o=xo(e.map(e=>e.points));if(!o)return Z``;const[a,n]=wo(o),r=$o([t.start,t.end],[0,cn]),i=$o([a,n],[38,2]);return Z`${e.map(e=>{const t=ln(ta(e.points,200)).map(e=>1===e.length?`M${r(e[0].t).toFixed(1)},${i(e[0].v).toFixed(1)}h0.5`:`M${e.map(e=>`${r(e.t).toFixed(1)},${i(e.v).toFixed(1)}`).join("L")}`).join("");return Z`<path d=${t} fill="none" stroke=${e.color}></path>`})}`}function Yl(e,t,o,a){const n=Ul.get(e.host),r=t.window,i=e=>Il(e),s=Pl(o,r),l=_t(e.hass,"zoom_window",{from:Qo(s.start,e.hass),to:Qo(s.end,e.hass)}),c=e=>Math.round(1e4*e)/100+"%";return R`<div
    class="overview ${t.zoomed?"zoomed":""}"
    @pointerdown=${e=>{if(e.button>0)return;e.stopPropagation();const{f:o,width:a}=i(e),r=t.current(),s=10/Math.max(a,1);let l="new";Ll(r)&&(Math.abs(o-r.from)<=s?l="left":Math.abs(o-r.to)<=s?l="right":o>r.from&&o<r.to&&(l="move")),n.gesture={kind:l,f0:o,w0:r,moved:!1,px:a},Bl(e)}}
    @pointermove=${e=>{const o=n.gesture;if(!o||!("f0"in o))return;const{f:a}=i(e);if(!o.moved&&Math.abs(a-o.f0)*o.px<4)return;o.moved=!0;const{w0:r}=o;"move"===o.kind?t.set(Ol(r,a-o.f0)):"left"===o.kind?t.set({from:Math.min(a,r.to-t.minSpan),to:r.to}):"right"===o.kind?t.set({from:r.from,to:Math.max(a,r.from+t.minSpan)}):t.set(Fl(Cl,o.f0,a,t.minSpan))}}
    @pointerup=${()=>{const e=n.gesture;if(e&&"f0"in e&&(n.gesture=void 0,!e.moved&&"new"===e.kind&&Ll(e.w0))){const o=e.w0.to-e.w0.from;t.set({from:e.f0-o/2,to:e.f0+o/2})}}}
    @pointercancel=${()=>n.gesture=void 0}
    @dblclick=${e=>{e.stopPropagation(),t.reset()}}
  >
    <svg class="overview-lines" viewBox="0 0 ${cn} ${40}" preserveAspectRatio="none" aria-hidden="true">
      ${a}
    </svg>
    <div class="overview-shade" style="left:0;width:${c(r.from)}"></div>
    <div class="overview-shade" style="left:${c(r.to)};right:0"></div>
    <div
      class="overview-window"
      style="left:${c(r.from)};width:${c(r.to-r.from)}"
      tabindex="0"
      role="slider"
      aria-label=${_t(e.hass,"zoom_window_label")}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${Math.round((r.from+r.to)/2*100)}
      aria-valuetext=${l}
      @keydown=${e=>{const o=t.current(),a=o.to-o.from,n=.5,r={ArrowLeft:()=>Ol(o,-a/4),ArrowRight:()=>Ol(o,a/4),ArrowUp:()=>Tl(o,n,1.5,t.minSpan),ArrowDown:()=>Tl(o,n,1/1.5,t.minSpan),"+":()=>Tl(o,n,1.5,t.minSpan),"=":()=>Tl(o,n,1.5,t.minSpan),"-":()=>Tl(o,n,1/1.5,t.minSpan),Home:()=>Ol(o,-1),End:()=>Ol(o,1),Escape:()=>Cl}[e.key];r&&(e.preventDefault(),e.stopPropagation(),t.set(r()))}}
    >
      <span class="overview-handle left"></span><span class="overview-handle right"></span>
    </div>
  </div>`}const Gl=r`
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
`,Xl="chartdeck-sync";const Jl=new WeakMap;function Kl(e,t){const o=Jl.get(e);o&&window.dispatchEvent(new CustomEvent(Xl,{detail:{group:o.group,source:e,message:t}}))}function Ql(e){const t=Jl.get(e);t&&window.removeEventListener(Xl,t.listener),Jl.delete(e)}function ec(e,t,o){const a="string"==typeof(n=e.raw).sync&&""!==n.sync.trim()?n.sync.trim():void 0;var n;let r=Jl.get(e.host);if(!a)return void(r&&Ql(e.host));if(!r||r.group!==a){r&&Ql(e.host);const t={group:a,handlers:new Map,ctx:e,listener:()=>{}};t.listener=e=>function(e,t){if(!t||t.group!==e.group||t.source===e.ctx.host)return;const o=t.message;if("hover"===o.type){if(o.t===e.remote)return;e.remote=o.t,e.ctx.requestUpdate()}else if("period"===o.type){const t={period:JSON.parse(o.period)};if(o.period!==e.period||!t.period.navigate||Aa(e.ctx.host,t.period)===o.steps)return;Sa(e.ctx.host,t.period,o.steps),e.steps=o.steps,e.ctx.requestUpdate()}e.handlers.get(o.type)?.(o)}(t,e.detail),window.addEventListener(Xl,t.listener),Jl.set(e.host,t),r=t}r.ctx=e,o!==r.sent&&(r.sent=o,Kl(e.host,{type:"hover",t:o}));const i=(e=>JSON.stringify(e.period))(t),s=t.period.navigate?Aa(e.host,t.period):0;return r.period===i&&r.steps!==s&&Kl(e.host,{type:"period",period:i,steps:s}),r.period=i,r.steps=s,void 0===o?r.remote:void 0}const tc=["series","bands"];function oc(e,t,o){const a=e=>{const t=(dn-o.y(e))/dn;return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0},n=[];return t.forEach((e,o)=>{const r=Number.isFinite(e.from)?a(e.from):0,i=o+1<t.length?a(t[o+1].from):1,s=Ce(e.color);n.push(Z`<stop offset=${r} stop-color=${s}></stop><stop offset=${i} stop-color=${s}></stop>`)}),Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${dn} y2="0">
    ${n}
  </linearGradient>`}function ac(e,t,o,a,n){const r=Ct(e.entity.config,n),i=ta(e.points,500),s=ln(i).map(o=>sn(o.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join(""),l=r.dots?i.filter(e=>null!==e.v&&e.t!==a.start&&e.t!==a.end):[],c=l.length>0&&l.length<=200?Z`<path
          class="dots"
          d=${Nt(l.map(e=>[t.x(e.t),t.y(e.v)]))}
          fill="none"
          stroke=${o}
          style="stroke-width:${Lt(r.width)}px"
        ></path>`:W;return Z`<g class="series" data-series=${e.index}>
    <path
      class="line ${e.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${o}
      style="stroke-width:${r.width}px"
    ></path>
    ${c}
  </g>`}function nc(e,t,o,a,n,r,i){const{range:s}=e;return Mr(t.map(e=>({points:e.points.filter(e=>e.t>=o.start&&e.t<=o.end),decimals:e.entity.decimals,color:e.color})),n,{at:e=>[a.x(e.t)/cn,a.y(e.v)/dn],width:Dn(i),height:r?96:162,skip:t=>void 0===e.group&&(t.t===s.start||t.t===s.end)},i.hass)}function rc(e,t){const o="outside"===t.labels;return(e?110:180)-(o&&t.x?e?14:18:0)-(o&&t.y?6:0)}function ic(e,t,o){const a=e.series.reduce((e,t)=>e+t.entity.name.length+t.entity.display.length+6,0);return{l:0,t:0,r:Math.min(o,8*a),b:t?24:34}}yt("en",{editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",chart_aria:"{style} chart of {names}",chart_log_nothing:"Nothing above zero to draw on a log scale."});const sc={layout:"chart",group:"history",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
    ${Gl}
    ${pi}
    ${zr}
    ${Pr}
    ${Wr}
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
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(e){if(pn(e),Lo(e),cr(e),Ft(e),qn(e),function(e){for(const t of["zoom","overview"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`)}(e),oi(e),function(e){const t=e;if(void 0!==t.labels&&"boolean"!=typeof t.labels)throw new Error('"labels" must be true or false');if(void 0!==t.labels_show&&!gr.includes(t.labels_show))throw new Error(`"labels_show" must be one of: ${gr.join(", ")}`);if(void 0!==t.labels_position&&!vr.includes(t.labels_position))throw new Error(`"labels_position" must be one of: ${vr.join(", ")}`);if(void 0!==t.labels_overlap&&"boolean"!=typeof t.labels_overlap)throw new Error('"labels_overlap" must be true or false')}(e),function(e){const t=e.extremes;if(void 0!==t){if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"extremes" must have "min", "max" (true or false) and "average"');const e=t;for(const t of["min","max"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"extremes.${t}" must be true or false`);if(void 0!==e.average&&!Ar.includes(e.average))throw new Error(`"extremes.average" must be one of: ${Ar.join(", ")}`)}for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o.extremes;if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"extremes" of ${o.entity} must be true or false`)}}(e),function(e){if(void 0!==e.sync&&("string"!=typeof e.sync||""===e.sync.trim()))throw new Error('"sync" must be a group name')}(e),function(e){if(void 0!==e.multiples&&"boolean"!=typeof e.multiples)throw new Error('"multiples" must be true or false');if(void 0!==e.multiples_scale&&!Zr.includes(e.multiples_scale))throw new Error(`"multiples_scale" must be one of: ${Zr.join(", ")}`);const t=e.multiples_columns;if(void 0!==t&&!(Number.isInteger(t)&&t>=1&&t<=6))throw new Error('"multiples_columns" must be a whole number from 1 to 6')}(e),void 0!==e.color_by&&!tc.includes(e.color_by))throw new Error(`"color_by" must be one of: ${tc.join(", ")}`)},editor:function(e){const t=Pi(`line|${$i(e.config)}|${o=e.config,!0===o?.labels?"labels":""}|${(e=>!0===e?.multiples?"multiples":"")(e.config)}`,e.hass,()=>{return[...ki(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:xi(e.hass,"curve",an)},{name:"color_by",selector:xi(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Vt},{name:"dots",selector:{boolean:{}}}]},...Li(e.hass,e.config),...Ci(e.hass),{name:"y_scale",selector:xi(e.hass,"y_scale",ko)},...ji,...Ni,...(t=e.hass,[{type:"grid",name:"",schema:[{name:"extremes_max",selector:{boolean:{}}},{name:"extremes_min",selector:{boolean:{}}}]},{name:"extremes_average",selector:{select:{mode:"dropdown",options:Ar.map(e=>({value:e,label:_t(t,`editor_extremes_average_${e}`)}))}}}]),...Ti,...Si(e.hass),...Oi(e.hass,e.config)];var t});var o;return R`${Di(e,"chart",t,Ui)}${_i(e)}`},entityFields:(e,t)=>{const o=oo(e),a=Gt(!0===t.dots);return Nr(jr(t))?{schema:Ir(o,e),fields:Rr(a)}:{schema:o,fields:a}},watch:function(e){const t=new Set;for(const o of ai(e))for(const e of[o.value,o.from,o.to,"state"===o.type?o.entity:void 0])Jr(e)&&t.add(e.trim());return[...t]},disconnect(e){bn(e),Pn(e),sr(e),function(e){Ul.delete(e)}(e),function(e){const t=li.get(e);t&&t.generation++,li.delete(e)}(e),Ql(e)},render(e){const t=mn(e),o=ir(e.host),a=ec(e,t,o),n=vn(t,e),r=_n(t,e),i=n===W&&r===W?W:R`${n}${r}`,s=xn(t,e),l=Wn(e.raw);if(s)return Vn("over"===l.header?{...l,header:"above"}:l,i,s);const c=function(e){if(!0===e.multiples)return{scale:e.multiples_scale??"auto",columns:e.multiples_columns}}(e.raw);if(c){const r="log"===e.raw.y_scale?{...t,series:t.series.map(e=>({...e,points:jn(e.points)}))}:t;return Vn({...l,header:"above"},n,qr(e,r,c,o??a,(t,n,i)=>function(e,t,o,a,n,r,i=W,s=ir(e.host)){const{scales:l}=a,c=yr(e.raw),d=lr(e.raw),u="bands"===e.raw.color_by,h=u?Z`${o.map(e=>oc(`cd-bands-${e.index}${r}`,e.entity.bands,l))}`:W,p=jt(o,t=>Ct(t.entity.config,e.raw).onTop),m=Z`${p.map(o=>ac(o,l,u?`url(#cd-bands-${o.index}${r})`:o.color,t.range,e.raw))}`,f=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_line"),names:o.map(e=>e.entity.name).join(", ")});return Bn({axes:a,ctx:e,content:m,label:f,defs:h,overlay:R`${i} ${c?nc(t,o,t.range,l,c,!0,e):W}
    ${d?mr(e,o,l,s,n):W}`,hover:d?dr(e,t.range,o.map(e=>e.points)):void 0})}(e,r,[t],n,i,`-${t.index}`,W,o??a)))}const d=Hl(e,t),u=d.range,h=d.zoomed?t.series.map(e=>({...e,points:Dl(e.points,u)})):t.series,p="log"===e.raw.y_scale,m=p?h.map(e=>({...e,points:jn(e.points)})):h,f=(g=e.raw,v=e.hass,ai(g).filter(e=>"line"===e.type).map(e=>ni(e.value,v)).filter(Xr)).filter(e=>!p||e>0).map(e=>({t:u.start,v:e}));var g,v;const y=xo([...m.map(e=>e.points),f]);if(p&&!y){const t=R`<div class="chart-message">${_t(e.hass,"chart_log_nothing")}</div>`;return Vn("over"===l.header?{...l,header:"above"}:l,i,t)}const b=Un(e,u,y),{scales:_}=b,x=lr(e.raw)&&!function(e){const t=Ul.get(e)?.gesture;return!!t&&("pinch"===t.kind||"moved"in t&&t.moved)}(e.host),w="bands"===e.raw.color_by,$=w?Z`${h.map(e=>oc(`cd-bands-${e.index}`,e.entity.bands,_))}`:W,k=jt(m,t=>Ct(t.entity.config,e.raw).onTop),M=Z`${k.map(o=>ac(o,_,w?`url(#cd-bands-${o.index})`:o.color,t.range,e.raw))}`,z=lr(e.raw)?dr(e,u,h.map(e=>e.points)):void 0,A=hi(e,t,_,Dn(e)),S=yr(e.raw),E=Dn(e),C=Fr({ctx:e,series:h,scales:_,range:u,group:t.group,timeWeighted:"history"===t.source&&void 0===t.group,width:E,height:rc(l.compact,b.options),until:Math.min(u.end,Date.now()),obstacles:"over"===l.header?[ic(t,l.compact,E)]:[]}),j=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_line"),names:t.series.map(e=>e.entity.name).join(", ")});return Vn(l,i,Bn({axes:b,ctx:e,content:Z`${A.behind}${C.lines}${M}${A.front}`,label:j,defs:$,overlay:R`${"over"===l.header?Yn(i):W}
        ${S?nc(t,m,u,_,S,l.compact,e):W}
        ${ql(e,d)} ${A.overlay} ${C.overlay}
        ${x?mr(e,h,_,o??a,Dn(e)):W}`,hover:z,gestures:d.options.zoom?Zl(e,d,z):void 0,classes:d.options.zoom?"zoomable "+(d.zoomed?"zoomed":""):"",below:d.options.overview?Yl(e,d,t.range,Vl(t.series,t.range)):W}))}},lc=["line","column","area"],cc=["auto","left","right"];yt("en",{editor_style_combined:"Combined",editor_series_type:"Draw as",editor_series_type_line:"Line",editor_series_type_column:"Columns",editor_series_type_area:"Area",editor_series_axis:"Value axis",editor_series_axis_auto:"Automatic (by unit)",editor_series_axis_left:"Left",editor_series_axis_right:"Right",editor_series_aggregate:"Combine with",editor_series_aggregate_auto:"As the card",editor_series_aggregate_mean:"Average",editor_series_aggregate_sum:"Sum",editor_series_aggregate_min:"Lowest",editor_series_aggregate_max:"Highest",editor_series_aggregate_first:"First",editor_series_aggregate_last:"Last",editor_series_aggregate_change:"Change (meters that count up)"});const dc=e=>e.config,uc=e=>dc(e).type??"line";function hc(e,t){const o={...e},a=t.some(e=>"column"===uc(e));return"none"!==e.group_by&&(void 0!==e.group_by&&"auto"!==e.group_by||a)?void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=ul($a(e.period))):delete o.group_by,"auto"===e.aggregate&&delete o.aggregate,o}function pc(e,t){const o=e.flatMap(e=>e.points.map(e=>e.v));return gl(o,t.includes("column"))}const mc=[...wi.map(e=>"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:At},{name:"dots",path:["dots"],default:!1},{name:"rounded",path:["rounded"],default:!0},...Ei,...Ai];const fc=[{name:"series_type",path:["type"],default:"line"},{name:"series_axis",path:["y_axis"],default:"auto"},{name:"series_color",path:["color"]},{name:"series_aggregate",path:["aggregate"],default:"auto"},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"negative_color",path:["negative_color"]}],gc={layout:"chart",group:"history",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
    ${Yi}
    ${Sl}
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
      stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){if(void 0!==e.group_by&&!sl.includes(e.group_by))throw new Error(`"group_by" must be one of: ${sl.join(", ")}`);if(void 0!==e.aggregate&&!ll.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${ll.join(", ")}`);const t={...e};if("auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,pn(t),Wa(t),Lo(e),cr(e),Ft(e),qn(e),void 0!==e.rounded&&"boolean"!=typeof e.rounded)throw new Error('"rounded" must be true or false');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.type&&!lc.includes(e.type))throw new Error(`"type" of ${o.entity} must be one of: ${lc.join(", ")}`);if(void 0!==e.y_axis&&"left"!==e.y_axis&&"right"!==e.y_axis)throw new Error(`"y_axis" of ${o.entity} must be one of: left, right`);if(void 0!==e.aggregate&&!qa.includes(e.aggregate))throw new Error(`"aggregate" of ${o.entity} must be one of: ${qa.join(", ")}`)}},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},a=Pi(`combined|${$i(o)}|${t}`,e.hass,()=>[...ki(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:xi(e.hass,"group_by",sl)},...t?[]:[{name:"aggregate",selector:xi(e.hass,"aggregate",ll)}]]},{name:"curve",selector:xi(e.hass,"curve",an)},{type:"grid",name:"",schema:[{name:"line_width",selector:Vt},{name:"dots",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...Ci(e.hass),...Si(e.hass)]);return Di(e,"chart",a,mc)},entityFields:e=>({schema:Pi("combined-entity",e,()=>[{type:"grid",name:"",schema:[{name:"series_type",selector:xi(e,"series_type",lc)},{name:"series_axis",selector:xi(e,"series_axis",cc)},{name:"series_color",selector:{text:{}}},{name:"series_aggregate",selector:xi(e,"series_aggregate",["auto",...qa])}]},{type:"grid",name:"",schema:[{name:"curve",selector:xi(e,"curve",an)},{name:"line_width",selector:Vt},{name:"dash",selector:{boolean:{}}},{name:"negative_color",selector:{text:{}}}]}]),fields:fc}),disconnect(e){bn(e),Pn(e),sr(e)},render:function(e){const t={...e,raw:hc(e.raw,e.items)},o=t.raw,a=mn(t,Date.now(),{aggregate:t=>function(e,t){const o=t.aggregate;return dc(e).aggregate??(o&&"auto"!==o?o:hl(e)?"change":"mean")}(t,e.raw)}),n=vn(a,t),r=_n(a,t),i=n===W&&r===W?W:R`${n}${r}`,s=xn(a,t),l=Wn(o);if(s)return Vn("over"===l.header?{...l,header:"above"}:l,i,s);const c=a.series.map(e=>uc(e.entity)),d=function(e){const t=e[0]?.unit,o=e.map(e=>dc(e).y_axis??(e.unit===t?"left":"right"));return o.includes("left")?o:o.map(()=>"left")}(a.series.map(e=>e.entity)),u=a.group,h=a.series.map(e=>u?{...e,points:e.points.map(e=>({...e,t:void 0!==e.end?(e.t+e.end)/2:e.t}))}:e),p=u?Math.max(a.range.end,...a.series.flatMap(e=>e.points.map(e=>e.end??0))):0,m=u?{...a.range,end:p}:a.range,f=e=>h.filter((t,o)=>d[o]===e),g=e=>c.filter((t,o)=>d[o]===e),v=pc(f("left"),g("left"));let y=o;v&&g("left").includes("column")?y={...o,y_min:o.y_min??(v[0]>=0?0:void 0),y_max:o.y_max??(v[1]<=0?0:void 0)}:g("left").includes("area")&&(y=Hi(v,o));const b=Un({...t,raw:y},m,v),_=b.scales,x=f("right"),w=pc(x,g("right")),$={};w&&(g("right").includes("column")||g("right").includes("area"))&&(w[0]>=0&&w[0]<=w[1]/2&&($.min=0),w[1]<=0&&w[1]>=w[0]/2&&($.max=0));const k=x.length?Do(w,$,4):void 0,M=k?{x:_.x,y:$o(k.domain,[dn,0]),domain:k.domain}:void 0,z=e=>"right"===d[e.index]&&M?M:_,A=h.filter(e=>"area"===c[e.index]).map(e=>Zi(e,e.points,z(e),o,{range:m})),S=h.filter(e=>"line"===c[e.index]).map(e=>ac({...e,points:e.points},z(e),e.color,m,o)),E=h.filter(e=>"column"===c[e.index]),C=ml(a.series.filter(e=>"column"===c[e.index]).map(e=>e.points),u?1/0:a.range.end),j=!1===o.rounded?0:4,N=[];C.times.forEach((e,t)=>{const o=_.x(e),a=_.x(C.ends[t]);E.forEach((e,n)=>{const r=C.values[n][t];if(null===r)return;const i=z(e),s=Math.min(Math.max(0,i.domain[0]),i.domain[1]),[l,c]=fl(o,a,n,E.length);N.push(wl(i,l,c,Math.min(s,r),Math.max(s,r),e.color,r>=s?"top":"bottom",e.index))})});const L=C.times.map((e,t)=>(e+C.ends[t])/2),T=h.map(e=>{if("column"!==c[e.index]||u)return e;const t=E.indexOf(e);return{...e,points:L.map((e,o)=>({t:e,v:C.values[t][o]}))}}),O=new Map;for(const D of a.series)for(const e of D.points)void 0!==e.end&&O.set((e.t+e.end)/2,[e.t,e.end]);const F=lr(o),P=_t(t.hass,"chart_aria",{style:_t(t.hass,"editor_style_combined"),names:a.series.map(e=>e.entity.name).join(", ")});return Vn(l,i,Bn({axes:b,ctx:t,right:k&&M?{value:k,y:M.y}:void 0,content:Z`${A.map(e=>e.body)}`,defs:Z`${A.map(e=>e.defs)}`,label:P,overlay:R`<div class="columns" style="--r:${j}px">${N}</div>
        <svg class="plot lines-over" viewBox="0 0 ${cn} ${dn}" preserveAspectRatio="none" aria-hidden="true">
          ${S}
        </svg>
        ${"over"===l.header?Yn(i):W}
        ${F?mr(t,T,_,ir(t.host),Dn(t),{dotY:(e,t)=>"column"===c[e.index]||null===t.v?null:z(e).y(t.v),heading:e=>{const o=O.get(e);return o&&u?bl(o[0],o[1],u.unit,t.hass):Qo(e,t.hass)}}):W}`,hover:F?dr(t,m,T.map(e=>e.points)):void 0}))}};function vc(e,t){const o=Math.round(12+88*t);return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const yc=Math.sqrt(3)/2,bc=["hours","calendar"],_c=["scale","bands"],xc=["square","rounded","hexagon"],wc=10,$c=1e4,kc={hours:{last:4,unit:"week",source:"history"},calendar:{last:12,unit:"month",source:"statistics"}};yt("en",{editor_style_heatmap:"Heatmap",heatmap_aria:"Heatmap of {name}",heatmap_hours:"Days averaged",heatmap_empty:"No readings",editor_grid:"Layout",editor_grid_hours:"Hour by weekday",editor_grid_calendar:"Calendar (a day per cell)",editor_color_by_scale:"Smooth scale",editor_cell_shape:"Cells",editor_cell_shape_square:"Square",editor_cell_shape_rounded:"Rounded",editor_cell_shape_hexagon:"Hexagon",editor_color_min:"Lowest colour at",editor_color_max:"Highest colour at",editor_legend:"Legend"});const Mc=e=>"number"==typeof e&&Number.isFinite(e);function zc(e){return e.grid??"hours"}function Ac(e){const t=zc(e),o=kc[t],a=e.period??{};return{...e,group_by:"hours"===t?"hour":"day",source:e.source??o.source,period:void 0!==a.calendar?a:{...a,last:a.last??o.last,unit:a.unit??o.unit}}}const Sc=new Map;function Ec(e,t,o){const a=e?.locale?.language??e?.language??"en",n=`${a}|${t}|${JSON.stringify(o)}`;let r=Sc.get(n);if(!r){try{r=new Intl.DateTimeFormat(a,{...o,timeZone:t})}catch{r=new Intl.DateTimeFormat("en",{...o,timeZone:"UTC"})}Sc.set(n,r)}return r}function Cc(e,t){return Ec(t,"UTC",{weekday:"short"}).format(Date.UTC(2024,0,e))}function jc(e,t,o=!1){return Ec(t,"UTC",{hour:"numeric",...o?{minute:"2-digit"}:{},hour12:Go(t)}).format(Date.UTC(2024,0,1,e))}function Nc(e,t,o,a,n="cell"){const[r,i]=e.centre(t.col,t.row),s=a?`fill:${a}`:"",l=a?"":"empty";if("hexagon"===o)return Z`<path class="${n} ${l}" d=${function(e,t,o){const a=o/Math.sqrt(3),n=[0,1,2,3,4,5].map(o=>{const n=(60*o-90)*Math.PI/180;return`${Math.round(100*(e+a*Math.cos(n)))/100},${Math.round(100*(t+a*Math.sin(n)))/100}`});return`M${n.join("L")}Z`}(r,i,8.8)} style=${s}></path>`;const c=8.8;return Z`<rect class="${n} ${l}" x=${r-4.4} y=${i-4.4} width=${c} height=${c}
    rx=${"rounded"===o?2:.4} style=${s}></rect>`}const Lc=e=>Math.round(1e4*e)/100+"%";function Tc(e,t,o,a){const{zone:n}=t,r=e=>(n.firstDay-1+e)%7+1,i=function(e,t){const o=new Array(168).fill(0),a=new Array(168).fill(0);for(const n of e){if(null===n.v)continue;const e=sa(n.t,t.timeZone),r=(e.weekday-t.firstDay+7)%7*24+e.hour;o[r]+=n.v,a[r]+=1}return o.map((e,t)=>({row:Math.floor(t/24),hour:t%24,v:a[t]?e/a[t]:null,count:a[t]}))}(e.points,n).map(e=>({col:e.hour,row:e.row,v:e.v,count:e.count,title:()=>`${Cc(r(e.row),o)} ${jc(e.hour,o,!0)} – ${jc((e.hour+1)%24,o,!0)}`})),s=a?3:6;return{cells:i,cols:24,rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:Cc(r(e),o)})),colLabels:Array.from({length:24/s},(e,t)=>({col:t*s,text:jc(t*s,o)}))}}function Oc(e,t,o){const{zone:a}=t,n=function(e,t){if(0===e.length)return{cells:[],weeks:0,months:[]};const o=e=>{const o=sa(e,t.timeZone);return Math.round(Date.UTC(o.year,o.month-1,o.day)/864e5)},a=o(ua("week",e[0].t,t)),n=[],r=[];let i=-1;for(const s of e){const e=sa(s.t,t.timeZone),l=Math.floor((o(s.t)-a)/7);n.push({t:s.t,col:l,row:(e.weekday-t.firstDay+7)%7,v:s.v});const c=12*e.year+e.month;c!==i&&(-1!==i&&1!==e.day||r.push({col:l,t:s.t}),i=c)}return r.length>1&&r[1].col-r[0].col<3&&r.shift(),{cells:n,weeks:n[n.length-1].col+1,months:r}}(e.points,a),r=Ec(o,a.timeZone,{weekday:"short",day:"numeric",month:"short",year:"numeric"}),i=Ec(o,a.timeZone,{month:"short"}),s=e=>(a.firstDay-1+e)%7+1;return{cells:n.cells.map(e=>({col:e.col,row:e.row,v:e.v,title:()=>r.format(e.t)})),cols:Math.max(1,n.weeks),rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:Cc(s(e),o)})),colLabels:n.months.map(e=>({col:e.col,text:i.format(e.t)}))}}function Fc(e,t,o,a){const n=o.raw,r=zc(o.raw),i=n.cell_shape??"rounded",s="bands"===n.color_by,l=Fn(o),c="hours"===r?Tc(e,t,o.hass,l>=400):Oc(e,t,o.hass),d=function(e,t,o){if("hexagon"===o){const o=wc/Math.sqrt(3),a=wc*yc,n=e*wc+5,r=(t-1)*a+2*o;return{width:n,height:r,centre:(e,t)=>[e*wc+5+t%2*5,o+t*a],at(i,s){const l=Math.min(t-1,Math.max(0,Math.round((s*r-o)/a))),c=Math.floor((i*n-l%2*5)/wc);return[Math.min(e-1,Math.max(0,c)),l]}}}return{width:e*wc,height:t*wc,centre:(e,t)=>[e*wc+5,t*wc+5],at:(o,a)=>[Math.min(e-1,Math.floor(o*e)),Math.min(t-1,Math.floor(a*t))]}}(c.cols,c.rows,i),u=Math.max(0,l-72)/d.width*wc,h=Math.ceil(13/Math.max(1,u*("hexagon"===i?yc:1))),p=c.rowLabels.filter(e=>e.row%h===0);let m=-1/0;const f=c.colLabels.filter(e=>!((e.col-m)*u<32)&&(m=e.col,!0)),g=function(e,t={}){const o=e.filter(e=>null!==e);if(0===o.length&&(void 0===t.min||void 0===t.max))return;let a=t.min??Math.min(...o),n=t.max??Math.max(...o);return n<=a&&(void 0===t.max?n=a+1:a=n-1),[a,n]}(c.cells.map(e=>e.v),{min:Mc(n.color_min)?n.color_min:void 0,max:Mc(n.color_max)?n.color_max:void 0}),v=t=>{if(null!==t)return s?Ce(Te(t,e.entity.bands).color):g?vc(e.color,function(e,[t,o]){return Math.min(1,Math.max(0,(e-t)/(o-t)))}(t,g)):e.color},y=ys(o.host),b=void 0!==y&&Math.floor(y/$c)===e.index?y%$c:void 0,_=new Map(c.cells.map((e,t)=>[8*e.col+e.row,t])),x=lr(o.raw)?_s(o,(t,o)=>{const[a,n]=d.at(t,o),r=_.get(8*a+n);return void 0===r?void 0:e.index*$c+r}):void 0,w=void 0===b?void 0:c.cells[b];let $=W;if(w){const[t,a]=d.centre(w.col,w.row),n=null===w.v?_t(o.hass,"heatmap_empty"):Mn(kn(w.v,e.entity.decimals,o.hass),e.entity.unit);$=ws({x:t/d.width,y:a/d.height,plotWidth:Math.max(0,l-80),title:w.title(),rows:[{color:v(w.v)??"var(--cd-track)",name:e.entity.name,value:n},...void 0!==w.count&&null!==w.v?[{name:_t(o.hass,"heatmap_hours"),value:String(w.count)}]:[]]})}const{show:k}=o.config,M=k.name||k.value||a?R`<div class="series-header">
          <div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
            ${s?W:R`<span class="swatch" style="background:${e.color}"></span>`}
            ${k.name||a?R`<span class="series-name">${e.entity.name}</span>`:W}
            ${k.value?R`<span class="series-value">${e.entity.display}</span>`:W}
          </div>
        </div>`:W,z=_t(o.hass,"heatmap_aria",{name:e.entity.name});return R`<div class="hm grid-${r} shape-${i}">
    ${M}
    <div class="hm-body">
      <div class="hm-rows" aria-hidden="true">
        ${p.map(e=>R`<span class="hm-label" style="top:${Lc(d.centre(0,e.row)[1]/d.height)}">${e.text}</span>`)}
      </div>
      <div
        class="hm-plot ${x?"hoverable":""}"
        @pointerdown=${x?.move}
        @pointermove=${x?.move}
        @pointerleave=${x?.leave}
        @pointercancel=${x?.leave}
      >
        <svg class="hm-svg" viewBox="0 0 ${d.width} ${d.height}" role="img" aria-label=${z}>
          ${c.cells.map(e=>Nc(d,e,i,v(e.v)))}
          ${w?Nc(d,w,i,"none","cell picked"):W}
        </svg>
        ${$}
      </div>
      <div class="hm-cols" aria-hidden="true">
        ${f.map(e=>R`<span class="hm-label" style="left:${Lc(e.col*wc/d.width)}">${e.text}</span>`)}
      </div>
    </div>
    ${!1===n.legend?W:function(e,t,o,a){const n=e.entity,r=e=>kn(e,n.decimals,a.hass);return o?R`<div class="hm-legend bands">
      ${Oe(n.bands,r,n.unit).map(e=>R`<span class="hm-key"
            ><span class="hm-swatch" style="background:${e.color}"></span>${e.text}</span
          >`)}
    </div>`:t?R`<div class="hm-legend scale">
    <span class="hm-end">${r(t[0])}</span>
    <span class="hm-gradient" style="background:linear-gradient(to right, ${vc(e.color,0)}, ${e.color})"></span>
    <span class="hm-end">${Mn(r(t[1]),n.unit)}</span>
  </div>`:W}(e,g,s,o)}
  </div>`}const Pc=new Map;const Dc={layout:"chart",group:"distribution",height:220,styles:r`
    ${$n}
    ${fr}
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
          fill="var(--primary-color, #03a9f4)" fill-opacity=${.15+.85*((3*t+5*e)%7/6)}></rect>`))}`,validate:function(e){const t=e,o=(e,o)=>{const a=t[e];if(void 0!==a&&!o.includes(a))throw new Error(`"${e}" must be one of: ${o.join(", ")}`)};o("grid",bc),o("color_by",_c),o("cell_shape",xc);for(const a of["color_min","color_max"])if(void 0!==t[a]&&!Mc(t[a]))throw new Error(`"${a}" must be a number`);if(Mc(t.color_min)&&Mc(t.color_max)&&t.color_min>=t.color_max)throw new Error('"color_min" must be below "color_max"');if(void 0!==t.legend&&"boolean"!=typeof t.legend)throw new Error('"legend" must be true or false');pn(Ac(e)),cr(e)},editor:function(e){const t=zc(e.config),o=Pi(`heatmap|${$i({...e.config,group_by:void 0})}`,e.hass,()=>[{name:"grid",selector:xi(e.hass,"grid",bc)},...ki(e.hass,{...e.config,group_by:void 0}).filter(e=>!JSON.stringify(e).includes('"group_by"')),{name:"aggregate",selector:xi(e.hass,"aggregate",qa)},{type:"grid",name:"",schema:[{name:"color_by",selector:xi(e.hass,"color_by",_c)},{name:"cell_shape",selector:xi(e.hass,"cell_shape",xc)}]},{type:"grid",name:"",schema:[{name:"color_min",selector:{number:{mode:"box",step:"any"}}},{name:"color_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"legend",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}}]}]);return Di(e,"chart",o,function(e){let t=Pc.get(e);if(!t){const o=kc[e],a={period_last:o.last,period_unit:o.unit,source:o.source};t=[{name:"grid",path:["grid"],default:"hours"},...wi.filter(e=>"group_by"!==e.name).map(e=>e.name in a?{...e,default:a[e.name]}:e),{name:"color_by",path:["color_by"],default:"scale"},{name:"cell_shape",path:["cell_shape"],default:"rounded"},{name:"color_min",path:["color_min"]},{name:"color_max",path:["color_max"]},{name:"legend",path:["legend"],default:!0},{name:"tooltip",path:["tooltip"],default:!0}],Pc.set(e,t)}return t}(t))},entityFields:()=>({schema:[{name:"series_color",selector:{text:{}}}],fields:[{name:"series_color",path:["color"]}]}),disconnect(e){bn(e),Pn(e),bs(e)},render(e){const t=mn({...e,raw:Ac(e.raw)}),o=vn(t,e),a=xn(t,e);if(a)return R`<div class="frame">${o}${a}</div>`;const n=t.series.length>1;return R`<div class="frame">${o}${t.series.map(o=>Fc(o,t,e,n))}</div>`}},Uc=["time","readings"],Hc=100,Ic=e=>Number(e.toPrecision(12));const Bc=6e4,Rc=36e5;const Zc=["percent","total"],qc=["side","overlap"],Wc=["series","bands"];yt("en",{editor_style_histogram:"Histogram",editor_count:"Count",editor_count_time:"Time spent in each range",editor_count_readings:"Readings in each range",editor_show_as:"Show as",editor_show_as_percent:"Share of the whole (%)",editor_show_as_total:"Hours or readings",editor_bins:"Number of bins (empty: automatic)",editor_bin_width:"Bin width (wins over the number)",editor_bars:"Two or more entities",editor_bars_side:"Bars side by side",editor_bars_overlap:"Bars over each other",editor_hist_x_axis:"Value labels along the bottom",editor_bar_color:"Bar colour",histogram_readings:"{n} readings",histogram_reading:"1 reading"});const Vc=e=>"number"==typeof e&&Number.isFinite(e);function Yc(e,t,o){if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function Gc(e,t){const o=mn(e,t),a={count:(n=e.raw).count??"time",showAs:n.show_as??"percent",bars:n.bars??"side",bands:"bands"===n.color_by,bins:Vc(n.bins)?n.bins:void 0,width:Vc(n.bin_width)?n.bin_width:void 0};var n;const r=Math.min(o.range.end,t),i=o.series.map(e=>function(e,t){const{mode:o,until:a,statistics:n}=t;if(0===e.length)return[];if(void 0!==e[0].end)return e.map(e=>null===e.v?0:"readings"===o?1:Math.max(0,Math.min(e.end,a)-e.t));if(n){if("readings"===o)return e.map(e=>null===e.v||e.carried?0:1);const t=e.slice(1).map((t,o)=>t.t-e[o].t).filter(e=>e>0).sort((e,t)=>e-t),a=t.length?t[Math.floor(t.length/2)]:36e5;return e.map(e=>null===e.v||e.carried?0:a)}const r=e.length-1;return e.map((t,n)=>{if(null===t.v)return 0;if("readings"===o){const o=n===r&&n>0&&t.t>=a&&e[n-1].v===t.v;return t.carried||o?0:1}const i=n<r?e[n+1].t:Math.max(t.t,a);return Math.max(0,Math.min(i,a)-t.t)})}(e.points,{mode:a.count,until:r,statistics:"statistics"===o.source}));let s=1/0,l=-1/0;o.series.forEach((e,t)=>e.points.forEach((e,o)=>{null!==e.v&&i[t][o]>0&&(s=Math.min(s,e.v),l=Math.max(l,e.v))}));const c=ms(e.raw),d="side"===a.bars&&o.series.length>1,u=Math.max(5,Math.min(24,Math.round(Dn(e)/(d?40:28)))),h=s===1/0?[]:function(e,t,o={},a=12){const n=o.min??e,r=o.max??t;if(void 0!==o.bins&&void 0===o.width){let[e,t]=[n,r];t>e||([e,t]=[e-.5,e+.5]);const a=(t-e)/o.bins;return Array.from({length:o.bins+1},(n,r)=>r===o.bins?t:Ic(e+r*a))}const i=r-n;let s=o.width??(i>0?Oo(i,a):Oo(Math.max(Math.abs(n),1),10));for(;i/s>Hc;)s=Oo(i,50);const l=o.min??Ic(Math.floor(n/s+1e-9)*s);let c=o.max??Ic(Math.ceil(r/s-1e-9)*s);c>l||(c=Ic(l+s));const d=[l];for(let u=1;d[d.length-1]<c-1e-9*s;u++)d.push(Math.min(c,Ic(l+u*s)));return d}(s,l,{bins:a.bins,width:a.width,min:c.min,max:c.max},u),p=o.series.map((e,t)=>{const o=function(e,t,o){const a=new Array(Math.max(0,o.length-1)).fill(0);return e.forEach((e,n)=>{if(null===e.v||!(t[n]>0))return;const r=function(e,t){const o=t.length-1;if(o<1||e<t[0]||e>t[o])return-1;if(e===t[o])return o-1;let a=0,n=o-1;for(;a<n;){const o=a+n+1>>1;t[o]<=e?a=o:n=o-1}return a}(e.v,o);r>=0&&(a[r]+=t[n])}),a}(e.points,i[t],h),n=o.reduce((e,t)=>e+t,0),r=o.map(e=>"percent"===a.showAs?n>0?e/n*100:0:"time"===a.count?e/36e5:e);return{series:e,totals:o,heights:r,whole:n}});return{frame:o,opts:a,edges:h,data:p,side:d}}function Xc(e,t,o){return"time"===t?function(e){if(e<Bc)return e>0?"< 1 min":"0 min";const t=Math.round(e/Bc);if(t<60)return`${t} min`;if(e<864e5){const e=Math.floor(t/60),o=t%60;return o?`${e} h ${o} min`:`${e} h`}const o=Math.round(e/Rc),a=Math.floor(o/24),n=o%24;return n?`${a} d ${n} h`:`${a} d`}(e):1===e?_t(o.hass,"histogram_reading"):_t(o.hass,"histogram_readings",{n:kn(e,0,o.hass)})}const Jc={layout:"chart",group:"distribution",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
    ${$s}
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
    <path d="M4 37 H60" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate(e){if(pn(e),Lo(e),cr(e),qn(e),us(e),Yc(e,"count",Uc),Yc(e,"show_as",Zc),Yc(e,"bars",qc),Yc(e,"color_by",Wc),void 0!==e.bins&&!(Number.isInteger(e.bins)&&e.bins>=1&&e.bins<=Hc))throw new Error('"bins" must be a whole number from 1 to 100');if(void 0!==e.bin_width&&!(Vc(e.bin_width)&&e.bin_width>0))throw new Error('"bin_width" must be a number above 0')},editor:function(e){const t=e.hass,o=Pi(`histogram|${$i(e.config)}`,t,()=>[...ki(t,e.config),{type:"grid",name:"",schema:[{name:"count",selector:xi(t,"count",Uc)},{name:"show_as",selector:xi(t,"show_as",Zc)}]},{type:"grid",name:"",schema:[{name:"bins",selector:{number:{min:1,max:Hc,mode:"box"}}},{name:"bin_width",selector:{number:{min:0,mode:"box",step:"any"}}}]},...ps,{type:"grid",name:"",schema:[{name:"bars",selector:xi(t,"bars",qc)},{name:"color_by",selector:xi(t,"color_by",Wc)}]},...Ci(t).map(e=>"grid"===e.type?{...e,schema:e.schema.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e)}:e),...Si(t)]);return Di(e,"chart",o,td)},entityFields:()=>({schema:Qc,fields:Kc}),disconnect(e){bn(e),Pn(e),bs(e)},render(e){const t=Date.now(),{frame:o,opts:a,edges:n,data:r,side:i}=Gc(e,t),s=vn(o,e),l=_n(o,e),c=s===W&&l===W?W:R`${s}${l}`,d=Wn(e.raw),u=xn(o,e)??(n.length<2?xn({...o,series:[]},e):void 0);if(u)return Vn("over"===d.header?{...d,header:"above"}:d,c,u);const h=Math.max(0,...r.flatMap(e=>e.heights)),p=fs(e,[n[0],n[n.length-1]],[0,h],{x:{min:n[0],max:n[n.length-1]},yFloor:0}),{scales:m}=p,f=m.y(Math.max(0,p.value.domain[0])),g=r.length,v="overlap"===a.bars&&g>1,y=Z`${r.map((e,t)=>{const o=e.heights.map((o,r)=>{if(!(o>0))return W;const s=m.x(n[r]),l=m.x(n[r+1]),c=Math.min(4,.08*(l-s)),d=(l-s-2*c)/(i?g:1),u=s+c+(i?d*t:0),h=m.y(o),p=a.bands&&e.series.entity.bands.length?Ce(Te((n[r]+n[r+1])/2,e.series.entity.bands).color):e.series.color;return Z`<rect class="bin" x=${u} y=${Math.min(h,f)} width=${Math.max(.5,d)} height=${Math.abs(f-h)} fill=${p} stroke=${v?p:"none"}></rect>`});return Z`<g class="series" data-series=${e.series.index}>${o}</g>`})}`,b=function(e){if(e.length<2)return 0;const t=e[1]-e[0],o=e.every(e=>Math.abs(e-Number(e.toFixed(Fo(t))))<1e-6*t);return o?Fo(t):Math.min(4,Fo(t)+1)}(n),_=lr(e.raw),x=_?ys(e.host):void 0;let w=W;if(void 0!==x&&x<n.length-1){const t=r[0]?.series.entity.unit??"",o=kn(n[x],b,e.hass),i=kn(n[x+1],b,e.hass),s=m.x(n[x])/cn,l=m.x(n[x+1])/cn,c=Dn(e);w=ws({x:"right"===or(l,c)?l:s,y:0,plotWidth:c,title:Mn(`${o} – ${i}`,t),band:[s,l],rows:r.map(t=>{const o=t.whole>0?t.totals[x]/t.whole*100:0;return{color:t.series.color,name:t.series.entity.name,value:`${kn(o,o>0&&o<1?1:0,e.hass)}% · ${Xc(t.totals[x],a.count,e)}`}})})}const $=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_histogram"),names:o.series.map(e=>e.entity.name).join(", ")});return Vn(d,c,Bn({axes:p,ctx:e,content:Z`<g class=${v?"overlap":"side"}>${y}</g>`,label:$,xLabel:t=>kn(t,gs(p),e.hass),yLabel:t=>"percent"===a.showAs?`${kn(t,p.value.decimals,e.hass)}%`:"time"===a.count?`${kn(t,p.value.decimals,e.hass)} h`:kn(t,p.value.decimals,e.hass),overlay:R`${"over"===d.header?Yn(c):W}${w}`,hover:_?_s(e,e=>{const t=n[0]+e*(n[n.length-1]-n[0]),o=n.findIndex((e,o)=>o<n.length-1&&t>=e&&t<=n[o+1]);return o<0?void 0:o}):void 0}))}},Kc=[{name:"bar_color",path:["color"]}],Qc=[{name:"bar_color",selector:{text:{}}}],ed=Ei.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e),td=[...wi,{name:"count",path:["count"],default:"time"},{name:"show_as",path:["show_as"],default:"percent"},{name:"bins",path:["bins"]},{name:"bin_width",path:["bin_width"]},...hs,{name:"bars",path:["bars"],default:"side"},{name:"color_by",path:["color_by"],default:"series"},...ed,...Ai];function od(e){let t=0;for(const o of e)t+=o.codePointAt(0)>=11904?1/.58:1;return t}function ad(e,t=76,o=12,a=8,n=11){const r=e.trim();let i=[r];if(od(r)>n){let e=od(r);for(let t=r.indexOf(" ");t>0;t=r.indexOf(" ",t+1)){const o=Math.max(od(r.slice(0,t)),od(r.slice(t+1)));o<e&&(e=o,i=[r.slice(0,t),r.slice(t+1)])}}const s=Math.max(...i.map(od));return{lines:i,size:Math.max(a,Math.min(o,Math.floor(t/(.58*Math.max(1,s)))))}}const nd=65,rd=66,id=50,sd=[-90,90],ld=e=>String(Math.round(1e3*e)/1e3+0);function cd(e,t,o,a,n,r=11){const{lines:i,size:s}=ad(e,t,o,a,r),l=n-1.2*(i.length-1)*s;return Z`<text class="na" text-anchor="middle" style="font-size: ${s}px">${i.map((e,t)=>Z`<tspan x=${nd} y=${ld(l+1.2*t*s)}>${e}</tspan>`)}</text>`}const dd={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:r`
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
  `,render(e,{show:t,hass:o}){const a=e.config.gauge,n=Je(sd,a),r=e=>Qe(n,e),i=function(e,t,o){const a=o-t,n=[];return a>0?(e.forEach((r,i)=>{const s=0===i?t:Math.max(r.from,t),l=Math.min(i+1<e.length?e[i+1].from:1/0,o);l>s&&n.push({from:(s-t)/a,to:(l-t)/a,color:r.color})}),n):n}(e.bands,e.min,e.max),s=i.map((e,t)=>{const o=r(e.from)+(t>0?1:0),a=r(e.to)-(t<i.length-1?1:0);return a>o?Z`<path class="seg" d=${Ve(nd,rd,id,o,a)} stroke=${Ce(e.color)}></path>`:W}),l=e=>{const[t,o]=We(nd,rd,36,e),[a,n]=We(nd,rd,40,e);return Z`<line class="tickmark" x1=${t.toFixed(2)} y1=${o.toFixed(2)} x2=${a.toFixed(2)} y2=${n.toFixed(2)}></line>`},c=a?.tickLabels?function(e,t,o=5){if(!(Number.isFinite(e)&&Number.isFinite(t)&&t>e))return[];const a=ot(t-e,o),n=[];for(let r=Math.ceil(e/a)*a;r<t-.4*a;r+=a)r>e+.4*a&&n.push(Number(r.toPrecision(12)));return[e,...n,t]}(e.min,e.max):[],d=e.max-e.min,u=c.length?c.map(t=>l(r((t-e.min)/d))):Array.from({length:11},(e,t)=>l(r(t/10))),h=ot(d),p=t.target&&null!==e.targetPosition,m=p?67:60,f=Ke(a)||c.length>0,g=f?Math.max(94,Math.ceil(tt(nd,rd,id,n[0],n[1],6).y1)+14):94,v=c.map(t=>{const a=r((t-e.min)/d),[n,i]=We(nd,rd,m,a),{anchor:s,dy:l}=nt(a);return Z`<text class="tick-label" x=${n.toFixed(2)} y=${i.toFixed(2)} dy="${l}em" text-anchor=${s}>${kn(t,at(t,h),o)}</text>`});let y=W;if(t.target&&null!==e.targetPosition&&e.available){const t=r(e.targetPosition),[o,a]=We(nd,rd,57,t),[n,i]=We(nd,rd,64,t-3),[s,l]=We(nd,rd,64,t+3);y=Z`<polygon class="target-mark" points="${o.toFixed(2)},${a.toFixed(2)} ${n.toFixed(2)},${i.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const b=!t.value,_=e.available?rt(e,a):{kind:"value"};let x={x:0,y:0,w:130,h:b?82:104};if(f){const t=function(e,t,o,a,n,r){const i=[tt(nd,rd,id,t[0],t[1],n.hasTarget?15:7),tt(nd,rd,43,t[0],t[1],0),{x0:57,y0:58,x1:73,y1:74},n.compact?{x0:2,y0:40,x1:128,y1:82}:{x0:2,y0:n.valueY-16,x1:128,y1:n.valueY+6}],s=e.max-e.min;for(const c of o){const o=Qe(t,(c-e.min)/s),[l,d]=We(nd,rd,n.labelR,o),{anchor:u,dy:h}=nt(o),p=9*kn(c,at(c,a),r).length*.6,m="start"===u?l:"end"===u?l-p:l-p/2,f=d+9*h;i.push({x0:m,y0:f-9,x1:m+p,y1:f+2})}const l=et(...i);return{x0:Math.floor(l.x0-2),y0:Math.floor(l.y0-2),x1:Math.ceil(l.x1+2),y1:Math.ceil(l.y1+2)}}(e,n,c,h,{hasTarget:p,labelR:m,valueY:g,compact:b},o);x={x:t.x0,y:t.y0,w:t.x1-t.x0,h:t.y1-t.y0}}const w=f?`width: min(${ld(x.w)}px, 100%); aspect-ratio: ${ld(x.w)} / ${ld(x.h)}`:void 0;return R`<div
      class="needle-gauge ${f?"fitted":""}"
      style=${f?`--needle-start: ${ld(n[0])}deg; width: ${ld(Math.max(130,x.w))}px`:W}
    >
      <svg
        class=${b?"compact":""}
        viewBox="${ld(x.x)} ${ld(x.y)} ${ld(x.w)} ${ld(x.h)}"
        style=${w??W}
        aria-hidden="true"
      >
        ${s} ${u} ${v} ${y}
        ${e.available?Z`<g class="needle" style="transform: rotate(${ld(r(e.position))}deg)"><path d=${$=nd,k=rd,M=42,z=3,`M${qe($)} ${qe(k-M)} L${qe($+z)} ${qe(k)} L${qe($-z)} ${qe(k)} Z`}></path></g>`:W}
        <circle class="hub" cx=${nd} cy=${rd} r="6"></circle>
        <circle class="hub-dot" cx=${nd} cy=${rd} r="2.5"></circle>
        ${e.available?t.value?"value"===_.kind?Z`<text class="value" x=${nd} y=${g} text-anchor="middle">${e.display}</text>`:"text"===_.kind?Z`<text
                      class="center-text"
                      x=${nd}
                      y=${g}
                      text-anchor="middle"
                      style=${_.band?`fill: ${Ce(e.band.color)}`:W}
                    >${_.text}</text>`:W:W:b?function(e){return cd(e,58,11,7,55)}(e.display):function(e,t=94){return cd(e,126,12,8,t,18)}(e.display,g)}
      </svg>
      ${t.name&&"name"!==a?.center||t.icon?R`<div class="name">
              ${t.icon?R`<ha-state-icon
                      class="icon"
                      .hass=${o}
                      .stateObj=${e.stateObj}
                      .icon=${Qi(e)}
                    ></ha-state-icon>`:W}
              ${t.name&&"name"!==a?.center?R`<span class="name-text">${e.name}</span>`:W}
            </div>`:W}
    </div>`;var $,k,M,z}};function ud(e){return e.map(e=>e.available&&e.value>0?e.value:0)}function hd(e,t=100){const o=e.reduce((e,t)=>e+Math.max(0,t),0);if(o<=0)return e.map(()=>0);const a=e.map(e=>Math.max(0,e)/o*t),n=a.map(Math.floor);let r=t-n.reduce((e,t)=>e+t,0);const i=a.map((e,t)=>({i:t,rest:e-n[t]})).sort((e,t)=>t.rest-e.rest||e.i-t.i);for(const{i:s}of i){if(r<=0)break;n[s]+=1,r-=1}return n}function pd(e,t){return t>0?e/t*(180/Math.PI):0}function md(e){const t=Math.max(0,e.end-e.start);return`--a:${(e.start-90).toFixed(3)}deg;--len:${t.toFixed(3)}`}function fd(e,t,o,a,n="primary"){return"bands"===a?Ce(e.band.color):"shades"===a?function(e,t,o){return o<=1||t<=0?e:`color-mix(in srgb, ${e} ${Math.round(100-Math.min(t,o-1)/(o-1)*65)}%, var(--card-background-color, #fff))`}(Ce(n),t,o):Ce(function(e){const t=e.config.color;return"string"==typeof t&&""!==t.trim()?t:void 0}(e)??un[t%un.length])}function gd(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:""}function vd(e,t,o,a=e.map(e=>e.available?e.value:0)){const n=e.map((e,t)=>({e:e,v:a[t]})).filter(({e:e})=>e.available);if(!n.length)return;const r=n.reduce((e,{v:t})=>e+t,0),i="total"===t?r:r/n.length,s=Math.max(...n.map(({e:e})=>e.decimals));return{value:i,text:kn(i,s,o),unit:gd(e)}}function yd(e){return Ae(e.config)?0:W}function bd(e,t){const{show:o}=t.config;return!e.length||!o.name&&!o.value&&e.every(e=>void 0===e.share)?W:R`<div class="parts-legend">
    ${e.map(e=>R`<div
          class="entity part-row ${Ae(e.entity.config)?"interactive":""} ${e.entity.available?"":"unavailable"}"
          data-index=${e.index}
          tabindex=${yd(e.entity)}
          aria-label=${void 0===e.share?e.entity.label:`${e.entity.label}, ${e.share}`}
        >
          <span class="swatch ${e.entity.available?"":"empty"}" style="background:${e.color}"></span>
          ${o.name?R`<span class="part-name">${e.entity.name}</span>`:W}
          ${o.value?R`<span class="part-value value">${e.entity.display}</span>`:W}
          ${void 0===e.share?W:R`<span class="part-share">${e.share}</span>`}
        </div>`)}
  </div>`}function _d(e,t){return Mn(kn(e,0,t),"%")}function xd(e,t){return _t(e.hass,"parts_aria",{style:_t(e.hass,t),names:e.items.map(e=>e.name).join(", ")})}function wd(e,t,o){return R`<div class="centre" aria-hidden="true">
    <div class="centre-value">${e}${t?R`<span class="centre-unit">${t}</span>`:W}</div>
    ${o?R`<div class="centre-caption">${o}</div>`:W}
  </div>`}function $d(e,t,o){const a=e[t];if(void 0!==a&&!o.includes(a))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function kd(e,t,o,a){const n=e[t];if(void 0!==n&&("number"!=typeof n||!Number.isFinite(n)||n<o||n>a))throw new Error(`"${t}" must be a number from ${o} to ${a}`)}function Md(e,t){const o=e[t];if(void 0!==o&&"boolean"!=typeof o)throw new Error(`"${t}" must be true or false`)}function zd(e,t){const o=e[t];if(void 0!==o&&"string"!=typeof o)throw new Error(`"${t}" must be text`)}yt("en",{editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_color_by_shades:"Shades of one colour",editor_shade_color:"Shade colour (palette name or CSS colour)",editor_show_percent:"Show each share as a percentage",editor_center:"In the middle",editor_center_total:"Total",editor_center_average:"Average",editor_center_none:"Nothing",parts_total:"Total",parts_average:"Average",parts_aria:"{style} of {names}"});const Ad=r`
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
`;yt("en",{editor_style_pictograph:"Pictograph",editor_unit_icon:"Icon (each entity can have its own)",editor_per_icon:"Each icon stands for (empty: automatic)",editor_group_size:"Icons per group (0: no groups)",editor_partial:"Part-fill an icon for fractions"});const Sd=["series","bands"];function Ed(e,t,o,a){const{show:n}=o.config,r=function(e,t,o){const a=t-e;if(!(a>0))return{count:0,per:1};const n=void 0!==o&&o>0?o:a<=20?1:a/10,r=Math.ceil(a/n-1e-9);return r>100?{count:100,per:a/100}:{count:r,per:n}}(e.min,e.max,a.perIcon),i=e.available?function(e,t,o,a){const n=Math.min(o.count,Math.max(0,(e-t)/o.per)),r=a?n:Math.floor(n+1e-9);return Array.from({length:o.count},(e,t)=>Math.min(1,Math.max(0,r-t)))}(e.value,e.min,r,a.partial):r.count?Array(r.count).fill(0):[],s=fd(e,t,o.items.length,a.colorBy),l=e.config.icon??a.unitIcon??(e.stateObj?void 0:"mdi:checkbox-blank-circle"),c=r.count>20?20:28,d=e.available?R`<span class="picto-now">${e.valueText}</span
        ><span class="picto-of"
          >/ ${Mn(kn(e.max,Number.isInteger(e.max)?0:e.decimals,o.hass),e.unit)}</span
        >`:e.display;return R`<div
    class="entity picto-row ${Ae(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    tabindex=${yd(e)}
    aria-label=${e.label}
  >
    ${n.name?R`<span class="name picto-name">${e.name}</span>`:W}
    <div class="picto-icons" style="--mdc-icon-size:${c}px" role="img" aria-label=${e.label}>
      ${function(e,t){if(e<=0)return[];if(!(t>0))return[[0,e]];const o=[];for(let a=0;a<e;a+=t)o.push([a,Math.min(e,a+t)]);return o}(i.length,a.groupSize).map(([t,a])=>R`<span class="picto-group">${i.slice(t,a).map((a,n)=>((t,a)=>R`<span class="unit" style="--i:${a};--fill:${(100*t).toFixed(1)}%">
      <ha-state-icon class="unit-empty" .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon>
      <span class="unit-full" style="color:${s}"
        ><ha-state-icon .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon
      ></span>
    </span>`)(a,t+n))}</span>`)}
    </div>
    ${n.value?R`<span class="value picto-value">${d}</span>`:W}
  </div>`}const Cd=[{name:"unit_icon",path:["unit_icon"]},{name:"per_icon",path:["per_icon"]},{name:"group_size",path:["group_size"],default:5},{name:"color_by",path:["color_by"],default:"series"},{name:"partial",path:["partial"],default:!0}];const jd={layout:"chart",group:"totals",height:180,styles:r`
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
        <path d="M${3+11*e} 30 a7 7 0 0 1 14 0 z" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`)}`,validate(e){zd(e,"unit_icon");const t=e.per_icon;if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<=0))throw new Error('"per_icon" must be a number more than 0');if(kd(e,"group_size",0,50),void 0!==e.group_size&&!Number.isInteger(e.group_size))throw new Error('"group_size" must be a whole number');$d(e,"color_by",Sd),Md(e,"partial")},editor:function(e){const t=Pi("pictograph",e.hass,()=>[{name:"unit_icon",selector:{icon:{}}},{type:"grid",name:"",schema:[{name:"per_icon",selector:{number:{min:0,step:"any",mode:"box"}}},{name:"group_size",selector:{number:{min:0,max:50,mode:"box"}}},{name:"color_by",selector:xi(e.hass,"color_by",Sd)}]},{name:"partial",selector:{boolean:{}}}]);return Di(e,"chart",t,Cd)},render:function(e){const t={perIcon:(o=e.raw).per_icon,unitIcon:o.unit_icon||void 0,groupSize:o.group_size??5,partial:!1!==o.partial,colorBy:o.color_by??"series"};var o;return R`<div class="pictograph" role="group" aria-label=${xd(e,"editor_style_pictograph")}>
    ${e.items.map((o,a)=>Ed(o,a,e,t))}
  </div>`}};yt("en",{editor_style_pie:"Pie / donut",editor_shape:"Shape",editor_shape_donut:"Donut",editor_shape_pie:"Pie",editor_center_label:"Line under the total",editor_gap:"Space between slices",editor_rounded:"Rounded ends",editor_gradient:"Gradient fills"});const Nd=["donut","pie"],Ld=["total","none"],Td=["series","bands","shades"],Od=48;function Fd(e,t){const o=function(e){const t=e.reduce((e,t)=>e+Math.max(0,t),0);return e.map(e=>t>0?Math.max(0,e)/t:0)}(e),a=o.filter(e=>e>0).length,n="donut"===t.shape?41.5:24;let r=0;return"donut"===t.shape&&(a>1&&(r+=pd(t.gap,n)),t.rounded&&(r+=pd(13,n))),function(e,t=0,o=360){const a=o-t;let n=t;return e.map(e=>{const t=n;return n+=e*a,{start:t,end:n}})}(o).map((e,t)=>o[t]>0?function(e,t){const o=e.end-e.start,a=Math.min(Math.max(0,t),o)/2;return{start:e.start+a,end:e.end-a}}(e,r):void 0)}const Pd=[{name:"shape",path:["shape"],default:"donut"},{name:"color_by",path:["color_by"],default:"series"},{name:"center",path:["center"],default:"total"},{name:"center_label",path:["center_label"],default:""},{name:"gap",path:["gap"],default:2},{name:"shade_color",path:["shade_color"],default:""},{name:"rounded",path:["rounded"],default:!1},{name:"gradient",path:["gradient"],default:!1},{name:"show_percent",path:["show_percent"],default:!0}];const Dd={layout:"chart",group:"totals",height:200,styles:r`
    ${Ad}
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
      pathLength="100" stroke-dasharray="22 78" stroke-dashoffset="-76" transform="rotate(-90 32 20)" />`,validate(e){$d(e,"shape",Nd),$d(e,"center",Ld),$d(e,"color_by",Td),kd(e,"gap",0,10),Md(e,"rounded"),Md(e,"gradient"),Md(e,"show_percent"),zd(e,"shade_color"),zd(e,"center_label")},editor:function(e){const t=Pi("pie",e.hass,()=>[{type:"grid",name:"",schema:[{name:"shape",selector:xi(e.hass,"shape",Nd)},{name:"color_by",selector:xi(e.hass,"color_by",Td)},{name:"center",selector:xi(e.hass,"center",Ld)},{name:"center_label",selector:{text:{}}},{name:"gap",selector:{number:{min:0,max:10,step:.5,mode:"slider"}}},{name:"shade_color",selector:{text:{}}}]},{name:"rounded",selector:{boolean:{}}},{name:"gradient",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Di(e,"chart",t,Pd)},render:function(e){const t={shape:(o=e.raw).shape??"donut",center:o.center??"total",colorBy:o.color_by??"series",shadeColor:o.shade_color||"primary",gap:o.gap??2,rounded:!0===o.rounded,gradient:!0===o.gradient,percent:!1!==o.show_percent,centerLabel:o.center_label??""};var o;const a=e.items,n=ud(a),r=a.map((e,o)=>fd(e,o,a.length,t.colorBy,t.shadeColor)),i=Fd(n,t),s="donut"===t.shape,l=s?41.5:24,c=s?13:Od,d=s?35/Od:0,u=i.filter(Boolean).length,h=t.gradient?Z`<defs>${a.map((e,t)=>i[t]?function(e,t,o){return Z`<radialGradient id=${e} gradientUnits="userSpaceOnUse" cx="50" cy="50" r=${Od}>
    <stop offset=${o} style="stop-color:color-mix(in srgb, ${t} 65%, #fff)"></stop>
    <stop offset="1" style="stop-color:${t}"></stop>
  </radialGradient>`}(`cd-pie-${t}`,r[t],d):W)}</defs>`:W,p=a.map((e,o)=>{const a=i[o];if(!a)return W;const n=t.gradient?`url(#cd-pie-${o})`:r[o];return Z`<g
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
        style="${md(a)};stroke:${n}"
      ></circle>
    </g>`}),m=!s&&t.gap>0&&u>1?i.map(e=>e?Z`<line class="separator" x1="50" y1="50" x2="50" y2=${1}
                stroke-width=${t.gap} style="--a:${e.start.toFixed(3)}deg"></line>`:W):W,f=0===u?Z`<circle class="track" cx="50" cy="50" r=${l} stroke-width=${c} fill="none"></circle>`:W,g=hd(n),v=a.map((o,a)=>({index:a,entity:o,color:r[a],share:t.percent&&n[a]>0?_d(g[a],e.hass):void 0})),y=vd(a,"total",e.hass,n),b=s&&"total"===t.center&&y?wd(y.text,"",t.centerLabel||gd(a)):W;return R`<div class="parts">
    <div class="dial">
      <svg viewBox="0 0 100 100" role="img" aria-label=${xd(e,"editor_style_pie")}>
        ${h}${f}${p}${m}
      </svg>
      ${b}
    </div>
    ${bd(v,e)}
  </div>`}};let Ud=0;const Hd=new WeakMap;const Id=60,Bd=60,Rd=e=>String(Math.round(1e3*e)/1e3+0);function Zd(e){return Math.min(22,Math.floor(124/Math.max(1,e.length)))}function qd(e){const t=function(e,t){const o=e/2;return[-o+t[0]*e,-o+t[1]*e]}(e,[0,1]),o=Ve(Id,Bd,46,t[0],t[1]),a=e<360;return{layout:"tiles",group:"gauges",height:a?135:155,minColumnWidth:128,styles:r`
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
    `,render(e,{show:n,hass:r}){const i=function(e){let t=Hd.get(e);return t||(t="cd-g-"+ ++Ud,Hd.set(e,t)),t}(e.config),s=e.config.gauge,l=Je(t,s),c=Ke(s),d=c?Ve(Id,Bd,46,l[0],l[1]):o;let u=0,h=a?100:120;if(c){const e=et(tt(Id,Bd,46,l[0],l[1],6.5),{x0:26,y0:26,x1:94,y1:94});u=Math.max(0,Math.floor(e.y0)),h=Math.min(120,Math.ceil(e.y1))-u}const p=h<120,m=e.available&&n.value?rt(e,s):{kind:"none"},f=e.span[1]-e.span[0]<=0,g=`stroke-dasharray: ${Rd(100*(e.span[1]-e.span[0]))} 100; stroke-dashoffset: ${Rd(100*-e.span[0])}`,v=(y=e.band.color,Object.prototype.hasOwnProperty.call(Ee,y)?Ee[y].fallback:y);var y;const b=function(e){return!e.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",e))}(v)?`url(#${i}) ${v}`:`url(#${i})`,_=n.icon?6:0,x=Zd(e.valueText);let w=W;if(n.target&&null!==e.targetPosition&&e.available){const t=Qe(l,e.targetPosition),[o,a]=We(Id,Bd,39.5,t),[n,r]=We(Id,Bd,52.5,t);w=Z`<line class="tick" x1=${o.toFixed(2)} y1=${a.toFixed(2)} x2=${n.toFixed(2)} y2=${r.toFixed(2)}></line>`}return R`<div class="radial ${p?"cropped":""}">
        <div class="dial ${c?"fitted":""}" style=${c?`aspect-ratio: 124 / ${h}; --y0: ${u}`:W}>
          <svg viewBox="0 ${u} 120 ${h}" aria-hidden="true">
            <defs>
              <linearGradient id=${i} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${Id} cy=${Bd} r="34"></circle>
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
                        x=${Id}
                        y=${66+_}
                        text-anchor="middle"
                        style="font-size: ${Math.min(18,Zd(m.text))}px${m.band?`; fill: ${Ce(e.band.color)}`:""}"
                      >${m.text}</text>`:"value"===m.kind?Z`<text
                        class="value"
                        x=${Id}
                        y=${64+_}
                        text-anchor="middle"
                        style=${x<22?`font-size: ${x}px`:W}
                      >${e.valueText}</text>
                      <text class="unit" x=${Id} y=${80+_} text-anchor="middle">${e.unit}</text>`:W}`:function(e){const{lines:t,size:o}=ad(e),a=64-1.2*(t.length-1)*o/2;return Z`<text class="na" text-anchor="middle" style="font-size: ${o}px">${t.map((e,t)=>Z`<tspan x=${Id} y=${Rd(a+1.2*t*o)}>${e}</tspan>`)}</text>`}(e.display)}
          </svg>
          ${n.icon&&e.available?R`<ha-state-icon
                  class="icon ${n.value&&"none"!==m.kind?"":"centre"}"
                  .hass=${r}
                  .stateObj=${e.stateObj}
                  .icon=${Qi(e)}
                ></ha-state-icon>`:W}
        </div>
        ${n.name&&"name"!==s?.center?R`<span class="name">${e.name}</span>`:W}
      </div>`}}}const Wd=qd(360),Vd=qd(270);yt("en",{editor_style_rings:"Rings",editor_rings_start_angle:"Start angle (0 is the top)",editor_end_angle:"End angle",editor_rounded_ends:"Rounded ends"});const Yd=["average","total","none"],Gd=["series","bands"];function Xd(e){return{start:e.start_angle??0,end:e.end_angle??270,center:e.center??"average",colorBy:e.color_by??"series",rounded:!1!==e.rounded_ends}}const Jd=[{name:"start_angle",path:["start_angle"],default:0},{name:"end_angle",path:["end_angle"],default:270},{name:"center",path:["center"],default:"average"},{name:"color_by",path:["color_by"],default:"series"},{name:"rounded_ends",path:["rounded_ends"],default:!0}];const Kd={layout:"chart",group:"totals",height:200,styles:r`
    ${Ad}
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
      pathLength="100" stroke-dasharray="48 100" transform="rotate(-90 32 20)" stroke-linecap="round" />`,validate(e){kd(e,"start_angle",-360,360),kd(e,"end_angle",-360,360);const{start:t,end:o}=Xd(e);if(o<=t||o-t>360)throw new Error('"end_angle" must be after "start_angle", and at most 360 degrees after it');$d(e,"center",Yd),$d(e,"color_by",Gd),Md(e,"rounded_ends")},editor:function(e){const t=Pi("rings",e.hass,()=>[{type:"grid",name:"",schema:[{name:"start_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"end_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"center",selector:xi(e.hass,"center",Yd)},{name:"color_by",selector:xi(e.hass,"color_by",Gd)}]},{name:"rounded_ends",selector:{boolean:{}}}]);return Di(e,"chart",t,Jd,{start_angle:"editor_rings_start_angle"})},render:function(e){const t=Xd(e.raw),o=e.items,{radii:a,width:n}=function(e){if(e<=0)return{radii:[],width:0};const t=Math.min(9,28/(1.33*e)),o=1.33*t;return{radii:Array.from({length:e},(e,a)=>48-t/2-a*o),width:t}}(o.length),r=o.map((e,a)=>fd(e,a,o.length,t.colorBy)),i=t.rounded?"round":"butt",s=md({start:t.start,end:t.end}),l=o.map((e,o)=>{const l=e.available?Z`<circle class="seg" cx="50" cy="50" r=${a[o]} pathLength="360" stroke-width=${n}
          stroke-linecap=${i} style="${md(function(e,t,o){return{start:t,end:t+Math.min(1,Math.max(0,e))*(o-t)}}(e.position,t.start,t.end))};stroke:${r[o]}"></circle>`:W;return Z`<g
      class="entity ring ${Ae(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
      data-index=${o}
      aria-label=${e.label}
    >
      <circle class="ring-track" cx="50" cy="50" r=${a[o]} pathLength="360" stroke-width=${n}
        stroke-linecap=${i} style=${s}></circle>
      ${l}
    </g>`}),c="none"===t.center?void 0:vd(o,t.center,e.hass),d=c?wd(c.text,c.unit,_t(e.hass,`parts_${t.center}`)):W,u=o.map((e,t)=>({index:t,entity:e,color:r[t]})),h=function(e,t){const o=e=>-Math.cos(e*Math.PI/180),a=360*Math.ceil((e-180)/360)+180<=t?1:Math.max(o(e),o(t));return Math.min(100,Math.max(66,50+48*a+6))}(t.start,t.end);return R`<div class="parts">
    <div class="dial" style="aspect-ratio:100 / ${h.toFixed(2)}">
      <svg viewBox="0 0 100 ${h.toFixed(2)}" role="img" aria-label=${xd(e,"editor_style_rings")}>
        ${l}
      </svg>
      <div class="centre-box" style="height:${(100/h*100).toFixed(2)}%">${d}</div>
    </div>
    ${bd(u,e)}
  </div>`}},Qd={layout:"chart",group:"distribution",height:240,styles:Js,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)">
      <circle cx="10" cy="32" r="2.5" /><circle cx="17" cy="27" r="2.5" /><circle cx="22" cy="29" r="2.5" />
      <circle cx="28" cy="21" r="2.5" /><circle cx="34" cy="23" r="2.5" /><circle cx="40" cy="15" r="2.5" />
      <circle cx="47" cy="17" r="2.5" /><circle cx="53" cy="9" r="2.5" />
    </g>
    <g fill="var(--warning-color, #f59e0b)">
      <circle cx="14" cy="18" r="2.5" /><circle cx="31" cy="33" r="2.5" /><circle cx="50" cy="28" r="2.5" />
    </g>`,validate:e=>Ws(e,"scatter"),editor:ol("scatter"),entityFields:()=>rl(),disconnect:Ks,render:e=>Gs(e,"scatter")};function eu(e){const[t,o]=e;return Array.from({length:10},(e,a)=>{const n=(a+.5)/10;return n>t&&n<=o})}const tu={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:r`
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
  `,render(e,{show:t,hass:o}){const a=e.available?eu(e.span):eu([0,0]),n=t.target&&e.available&&null!==e.targetPosition?Math.min(9,Math.max(0,Math.floor(10*e.targetPosition))):-1,r=!e.available;return R`<div class="seg">
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Qi(e)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${t.name||r?R`<div class="name">
                ${t.name?R`<span class="label">${e.name}</span>`:W}
                ${r?R`<span class="status">${e.display}</span>`:W}
              </div>`:W}
        <div class="cells">
          ${a.map((e,t)=>R`<i class="cell ${e?"on":""} ${t===n?"mark":""}" style="--i:${t}"></i>`)}
        </div>
      </div>
      ${t.value?R`<span class="value">${e.available?e.display:""}</span>`:W}
    </div>`}},ou={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:r`
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
              .icon=${Qi(e)}
            ></ha-state-icon>`:W}
      ${t.value||!e.available?R`<span class="value">${e.display}</span>`:W}
      <div class="tube">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:W}
      </div>
      ${t.name?R`<span class="name">${e.name}</span>`:W}
    `},au={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:r`
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
  `,render(e,{show:t,hass:o}){const a=t.value||!e.available;return R`
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${Qi(e)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${t.name||a?R`<div class="top">
                ${t.name?R`<span class="name">${e.name}</span>`:W}
                ${a?R`<span class="value">${e.display}</span>`:W}
              </div>`:W}
        <div class="track">
          <div class="fill"></div>
          ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:W}
        </div>
      </div>
    `}};yt("en",{editor_style_waffle:"Waffle",editor_waffles:"Waffles",editor_waffles_one:"One, split between the entities",editor_waffles_each:"One per entity, side by side",editor_headline:"Show the first share in large type"});const nu=["one","each"],ru=["series","bands"];function iu(e){if(1===e.length){const t=e[0];return t.available?[hd([t.position,1-t.position])[0]]:[0]}return hd(ud(e),100)}function su(e,t){const{col:o,row:a}=function(e){return{col:e%10,row:9-Math.floor(e/10)}}(e);return Z`<rect
    class="cell ${t?"filled":""}"
    x=${10*o+.8}
    y=${10*a+.8}
    width="8.4"
    height="8.4"
    rx="1.6"
    style="--k:${e}${t?`;fill:${t}`:""}"
  ></rect>`}function lu(e,t,o,a){let n=0;const r=e.map((e,a)=>{const r=n;if(n+=e,!e)return W;const i=o[a];return Z`<g class="entity ${Ae(i.config)?"interactive":""}" data-index=${a}>
      ${Array.from({length:e},(e,o)=>su(r+o,t[a]))}
    </g>`}),i=Array.from({length:100-n},(e,t)=>su(n+t,void 0));return R`<svg class="waffle" viewBox="0 0 100 100" role="img" aria-label=${a}>
    ${r}
    <g class="empty">${i}</g>
  </svg>`}const cu=[{name:"waffles",path:["waffles"],default:"one"},{name:"color_by",path:["color_by"],default:"series"},{name:"headline",path:["headline"],default:!0},{name:"show_percent",path:["show_percent"],default:!0}];const du={layout:"chart",group:"totals",height:210,styles:r`
    ${Ad}
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
    ${Array.from({length:25},(e,t)=>{const o=t%5,a=4-Math.floor(t/5);return Z`<rect x=${20+5*o} y=${8+5*a} width="4" height="4" rx="0.8" fill=${t<9?"var(--warning-color, #f59e0b)":t<15?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`})}`,validate(e){$d(e,"waffles",nu),$d(e,"color_by",ru),Md(e,"headline"),Md(e,"show_percent")},editor:function(e){const t=Pi("waffle",e.hass,()=>[{type:"grid",name:"",schema:[{name:"waffles",selector:xi(e.hass,"waffles",nu)},{name:"color_by",selector:xi(e.hass,"color_by",ru)}]},{name:"headline",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Di(e,"chart",t,cu)},render(e){const t={waffles:(o=e.raw).waffles??"one",colorBy:o.color_by??"series",headline:!1!==o.headline,percent:!1!==o.show_percent};var o;return"each"===t.waffles?function(e,t){const{show:o}=e.config;return R`<div class="waffles">
    ${e.items.map((a,n)=>{const r=fd(a,n,e.items.length,t.colorBy),[i]=iu([a]),s=_d(i,e.hass),l=o.value&&t.percent&&a.available&&a.display!==s;return R`<div
        class="entity waffle-item ${Ae(a.config)?"interactive":""} ${a.available?"":"unavailable"}"
        data-index=${n}
        tabindex=${yd(a)}
      >
        ${lu([i],[r],[a],a.label)}
        ${o.name?R`<span class="waffle-name">${a.name}</span>`:W}
        <span class="value waffle-value">${a.available&&t.percent?s:a.display}</span>
        ${l?R`<span class="waffle-raw">${a.display}</span>`:W}
      </div>`})}
  </div>`}(e,t):function(e,t){const o=e.items,a=o.map((e,a)=>fd(e,a,o.length,t.colorBy)),n=iu(o),r=e=>n[e]>0||1===o.length&&o[e].available,i=o.map((i,s)=>({index:s,entity:i,color:a[s],share:!t.percent||!r(s)||t.headline&&1===o.length?void 0:_d(n[s],e.hass)})),s=o[0],l=t.headline&&s&&r(0)?R`<div class="waffle-headline">
          <span class="waffle-big">${_d(n[0],e.hass)}</span>
          <span class="waffle-caption">${s.name}</span>
        </div>`:W;return R`<div class="parts">
    <div class="waffle-box">${lu(n,a,o,xd(e,"editor_style_waffle"))}</div>
    <div class="waffle-side">${l}${bd(i,e)}</div>
  </div>`}(e,t)}};function uu(e,t){return Ce(un[e%un.length])}function hu(e,t){const o=Math.round(Math.min(100,Math.max(0,t)));return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const pu=["funnel","pyramid"],mu=["first","previous","none"],fu=["series","bands"];function gu(e,t){const o=e=>Math.round(100*e)/100,a=o((100-e)/2),n=o((100-t)/2);return`${a},0 ${o(100-a)},0 ${o(100-n)},10 ${n},10`}yt("en",{editor_style_funnel:"Funnel",editor_funnel_shape:"Shape",editor_funnel_shape_funnel:"Funnel (first stage at the top)",editor_funnel_shape_pyramid:"Pyramid (first stage at the bottom)",editor_funnel_percent_of:"Percentages",editor_funnel_percent_of_first:"Share of the first stage",editor_funnel_percent_of_previous:"Share of the stage before",editor_funnel_percent_of_none:"Don't show",editor_funnel_color_by:"Colour",editor_funnel_color_by_series:"One colour per entity",editor_funnel_color_by_bands:"By colour band",funnel_aria:"{style} of {names}"});const vu=[{name:"funnel_shape",path:["shape"],default:"funnel"},{name:"funnel_percent_of",path:["percent_of"],default:"first"},{name:"funnel_color_by",path:["color_by"],default:"series"}];function yu(e,t,o){const a=e[t];if(void 0!==a&&!o.includes(a))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}const bu={layout:"chart",group:"totals",height:240,styles:r`
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
    <polygon points="23,29 41,29 38,37 26,37" fill="var(--primary-color, #03a9f4)" />`,validate(e){yu(e,"shape",pu),yu(e,"percent_of",mu),yu(e,"color_by",fu)},editor:function(e){const t=Pi("funnel",e.hass,()=>[{name:"funnel_shape",selector:xi(e.hass,"funnel_shape",pu)},{type:"grid",name:"",schema:[{name:"funnel_percent_of",selector:xi(e.hass,"funnel_percent_of",mu)},{name:"funnel_color_by",selector:xi(e.hass,"funnel_color_by",fu)}]}]);return Di(e,"chart",t,vu)},render(e){const{items:t,raw:o,hass:a,config:n}=e,r=o.shape??"funnel",i="bands"===o.color_by,s=t.map(e=>e.available?e.value:null),l=function(e){const t=Math.max(0,...e.map(e=>null!==e&&e>0?e:0));return e.map(e=>t>0&&null!==e&&e>0?e/t*100:0)}(s),c=function(e,t){return e.map((o,a)=>{if(o<=0)return{top:0,bottom:0};const n=e[a+1],r=a===e.length-1;return"pyramid"===t?{top:r?0:n>0?n:.8*o,bottom:o}:{top:o,bottom:!r&&n>0?n:.8*o}})}(l,r),d=function(e,t){return"none"===t?e.map(()=>null):e.map((o,a)=>{if(null===o)return null;if("previous"===t&&0===a)return 100;const n="first"===t?e[0]:e[a-1];return null!=n&&n>0?o/n*100:null})}(s,o.percent_of??"first"),{show:u}=n,h=u.name||u.value,p=t.map((e,t)=>{const o=function(e,t,o){if(o)return e.band.color;const a=e.config.color;return"string"==typeof a&&a?a:un[t%un.length]}(e,t,i),n=d[t],r=null===n?"":`${kn(n,0,a)}%`,s=l[t]<22?"theme":Le(o),p=Ae(e.config),{top:m,bottom:f}=c[t],g=l[t]>0;return R`<div
        class="entity stage ${p?"interactive":""} ${e.available?"":"unavailable"}"
        data-index=${t}
        role="img"
        aria-label=${r?`${e.label}, ${r}`:e.label}
        tabindex=${p?0:W}
      >
        <div class="shape">
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            ${g?Z`<polygon points=${gu(m,f)} fill=${Ce(o)}></polygon>`:Z`<polygon class="empty" points=${gu(30,30)}></polygon>`}
          </svg>
          ${r?R`<div class="percent ${s}" aria-hidden="true">${r}</div>`:W}
        </div>
        ${h?R`<div class="label" aria-hidden="true">
                ${u.name?R`<span class="name">${e.name}</span>`:W}
                ${u.value?R`<span class="value">${e.display}</span>`:W}
              </div>`:W}
      </div>`});"pyramid"===r&&p.reverse();const m=_t(a,"funnel_aria",{style:_t(a,`editor_funnel_shape_${r}`).replace(/ \(.*\)$/,""),names:t.map(e=>e.name).join(", ")});return R`<div class="funnel ${h?"":"no-labels"}" role="group" aria-label=${m}>${p}</div>`}},_u=["floor","area","device","label"];function xu(e){if(null==e||""===e)return[];const t=Array.isArray(e)?e:[e];if(t.some(e=>!_u.includes(e)))throw new Error(`"group_by" must be one or more of: ${_u.join(", ")}`);return _u.filter(e=>t.includes(e))}function wu(e){xu(e.group_by),(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.group:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "group" must be text, such as "Kitchen" or "Ground floor / Kitchen"`)})}function $u(e){return"string"!=typeof e?[]:e.split("/").map(e=>e.trim()).filter(Boolean)}function ku(e){const t=e.replace(/_/g," ").trim();return t.charAt(0).toUpperCase()+t.slice(1)}function Mu(e,t,o,a){const n=$u(e.config.group);return n.length?n:t.map(t=>function(e,t,o){const a=o,n=a.entities?.[e],r=n?.device_id?a.devices?.[n.device_id]:void 0,i=n?.area_id??r?.area_id??void 0;switch(t){case"area":return i?a.areas?.[i]?.name??ku(i):void 0;case"floor":{const e=i?a.areas?.[i]?.floor_id:void 0;return e?a.floors?.[e]?.name??ku(e):void 0}case"device":return r?r.name_by_user??r.name??void 0:void 0;case"label":{const e=[...n?.labels??[],...r?.labels??[]][0];return e?a.labels?.[e]?.name??ku(e):void 0}}}(e.entityId,t,o)??a)}function zu(e,t,o){const a={name:o,path:[],value:0,depth:0,children:[]};e.forEach((e,o)=>{let n=a;for(const a of t[o]??[]){let e=n.children.find(e=>void 0===e.entity&&e.name===a);e||(e={name:a,path:[...n.path,a],value:0,depth:n.depth+1,children:[]},n.children.push(e)),n=e}n.children.push({name:e.name,path:n.path,value:0,depth:n.depth+1,children:[],entity:e,index:o})});const n=e=>{e.value=e.entity?function(e){return e.available&&null!==e.value&&e.value>0?e.value:0}(e.entity):e.children.reduce((e,t)=>e+n(t),0);const t=new Map(e.children.map((e,t)=>[e,t]));return e.children.sort((e,o)=>o.value-e.value||t.get(e)-t.get(o)),e.value};return n(a),a}function Au(e,t){let o=e;for(const a of t)if(o=o.children.find(e=>void 0===e.entity&&e.name===a),!o)return;return o}function Su(e){return e.children.length?1+Math.max(...e.children.map(Su)):0}function Eu(e){const t=[],o=(e,a,n,r)=>{if(t.push({node:e,level:a,x0:n,x1:r}),e.value<=0)return;let i=n;for(const t of e.children){if(t.value<=0)continue;const s=(r-n)*t.value/e.value;o(t,a+1,i,i+s),i+=s}};return o(e,0,0,1),t}const Cu=2*Math.PI;function ju(e,t){return[Nu(e*Math.sin(t)),Nu(-e*Math.cos(t))]}function Nu(e){return Math.round(100*e)/100||0}function Lu(e,t,o,a){if(t<=0||a<=o)return"";const n=Math.max(0,e);if(a-o>=Cu-1e-6){const e=(e,t)=>{const[o,a]=ju(e,0),[n,r]=ju(e,Math.PI);return`M${o} ${a}A${e} ${e} 0 1 ${t} ${n} ${r}A${e} ${e} 0 1 ${t} ${o} ${a}Z`};return n>0?`${e(t,1)}${e(n,0)}`:e(t,1)}const r=a-o>Math.PI?1:0,[i,s]=ju(t,o),[l,c]=ju(t,a),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===n)return`${d}L0 0Z`;const[u,h]=ju(n,a),[p,m]=ju(n,o);return`${d}L${u} ${h}A${n} ${n} 0 ${r} 0 ${p} ${m}Z`}function Tu(e,t){return t>0?e*Cu/t:0}function Ou(e){return e.map(([e,t])=>`${e},${t}`).join(" ")}function Fu(e){const t=Math.sin(e);return Math.abs(t)<.2?"middle":t>0?"start":"end"}function Pu(e,t,o,a,n=void 0){const r=e.config.entities??[],i=r.length,s=Pi(`${t}-${i}`,e.hass,()=>r.map((e,t)=>({name:`e${t}`,selector:a}))),l=e=>{const t=r[e];return"object"==typeof t?t[o]:void 0},c={};for(let d=0;d<i;d++)c[`e${d}`]=l(d)??n;return R`<div class="entity-options" data-section=${t}>
    <div style="margin: 16px 0 4px; font-weight: 500">${_t(e.hass,`editor_${t}`)}</div>
    ${0===i?R`<div style="color: var(--secondary-text-color)">
            ${_t(e.hass,"editor_entity_options_none")}
          </div>`:R`<ha-form
            .hass=${e.hass}
            .data=${c}
            .schema=${s}
            .computeLabel=${t=>{const o=Mt(r[Number(t.name.slice(1))]),a=e.hass?.states[o]?.attributes?.friendly_name;return"string"==typeof a&&a?a:o}}
            @value-changed=${t=>{t.stopPropagation();const a=t.detail?.value??{};let r=e.config;for(let e=0;e<i;e++){const t=a[`e${e}`],i=t===n||""===t?void 0:t;i!==l(e)&&(r=zt(r,e,o,i))}r!==e.config&&e.commit(r)}}
          ></ha-form>`}
  </div>`}yt("en",{editor_entity_options_none:"Add an entity above first."}),yt("en",{editor_hierarchy_group_by:"Group by",editor_group_by_floor:"Floor",editor_group_by_area:"Area",editor_group_by_device:"Device",editor_group_by_label:"Label",editor_entity_groups:'Own group (wins over "Group by"; "Ground floor / Kitchen" for two levels)'});const Du=[{name:"group_by",path:["group_by"],default:[]}];function Uu(e){return{name:"group_by",selector:{select:{multiple:!0,mode:"list",options:_u.map(t=>({value:t,label:_t(e,`editor_group_by_${t}`)}))}}}}function Hu(e){const t=e.config.group_by;if(void 0===t||Array.isArray(t))return e;let o;try{o=xu(t)}catch{return e}return{...e,config:{...e.config,group_by:o}}}function Iu(e){return Pu(e,"entity_groups","group",{text:{}})}const Bu={group_by:"editor_hierarchy_group_by"};yt("en",{editor_style_radar:"Radar",editor_radar_scale:"Scale",editor_radar_scale_limits:"Each axis from its entity's minimum to maximum",editor_radar_scale_shared:"One scale for all, from 0 to the largest value",editor_radar_fill:"Fill the shapes",editor_radar_axis:"Axis name (entities with the same axis name line up across groups)",radar_aria:"Radar chart of {names}",radar_other:"Other"});const Ru=["limits","shared"],Zu={aqi:"AQI",carbon_dioxide:"CO₂",carbon_monoxide:"CO",pm1:"PM1",pm10:"PM10",pm25:"PM2.5",volatile_organic_compounds:"VOC",volatile_organic_compounds_parts:"VOC"};function qu(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}function Wu(e,t,o){const a=xu(t.group_by),n=a.length>0||e.some(e=>$u(e.config.group).length),r=t.scale??"limits",i=e.filter(e=>e.available&&null!==e.value).map(e=>e.value),s=i.length?Math.max(...i):0,l=e=>{const t=e.config.axis;return"string"==typeof t&&t.trim()?t.trim():void 0};if(!n)return{axes:e.map(e=>({name:l(e)??e.name,entity:e})),series:[{name:"",color:uu(0),points:e.map((e,t)=>({index:t,axis:t,r:qu(e,r,s)}))}]};const c=_t(o,"radar_other"),d=[],u=[];return e.forEach((e,t)=>{const n=e.stateObj?.attributes?.device_class,i=l(e)??("string"==typeof n?function(e){if(Zu[e])return Zu[e];const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}(n):e.name);let h=d.findIndex(e=>e.name===i);-1===h&&(h=d.push({name:i})-1);const p=Mu(e,a,o,c).join(" / ")||c;let m=u.find(e=>e.name===p);m||(m={name:p,color:uu(u.length),points:[]},u.push(m)),m.points.push({index:t,axis:h,r:qu(e,r,s)})}),{axes:d,series:u}}const Vu=[{name:"radar_scale",path:["scale"],default:"limits"},{name:"radar_fill",path:["fill"],default:!0},...Du];const Yu={layout:"chart",group:"compare",height:280,styles:r`
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2" stroke-linejoin="round" />`,validate(e){if(wu(e),void 0!==e.scale&&!Ru.includes(e.scale))throw new Error(`"scale" must be one of: ${Ru.join(", ")}`);if(void 0!==e.fill&&"boolean"!=typeof e.fill)throw new Error('"fill" must be true or false');(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.axis:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "axis" must be text`)})},editor:function(e){const t=Pi("radar",e.hass,()=>[{name:"radar_scale",selector:xi(e.hass,"radar_scale",Ru)},{name:"radar_fill",selector:{boolean:{}}},Uu(e.hass)]);return R`${Di(Hu(e),"chart",t,Vu,Bu)} ${Iu(e)}
  ${Pu(e,"radar_axis","axis",{text:{}})}`},render(e){const t=Wu(e.items,e.raw,e.hass),o=t.axes.length,a=1===t.series.length&&""===t.series[0].name,n=!1!==e.raw.fill,r=_t(e.hass,"radar_aria",{names:(a?e.items.map(e=>e.name):t.series.map(e=>e.name)).join(", ")});return R`<svg
        class="radar-plot"
        viewBox="${-170} ${-120} ${340} ${240}"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label=${r}
      >
        ${function(e){const t=Array.from({length:4},(e,t)=>84*(t+1)/4);return Z`${t.map(t=>e>=3?Z`<polygon class="grid" points=${Ou(Array.from({length:e},(o,a)=>ju(t,Tu(a,e))))}></polygon>`:Z`<circle class="grid" r=${t}></circle>`)}
    ${Array.from({length:e},(t,o)=>{const[a,n]=ju(84,Tu(o,e));return Z`<line class="grid spoke" x1="0" y1="0" x2=${a} y2=${n}></line>`})}`}(o)} ${function(e,t,o){const a=e.axes.length,n=o&&t.config.show.value;return Z`${e.axes.map((e,o)=>{const r=Tu(o,a),[i,s]=ju(96,r),l=Fu(r),c=Math.cos(r)<-.2,d=n&&e.entity?2:1,u=c?10:Math.abs(Math.cos(r))<=.2?4-6*(d-1):12*-(d-1);return Z`<text class="axis-label" x=${i} y=${s+u} text-anchor=${l}>
      ${t.config.show.name||!n?Z`<tspan>${e.name}</tspan>`:W}
      ${n&&e.entity?Z`<tspan class="axis-value ${e.entity.available?"":"muted"}" x=${i} dy="13">${e.entity.display}</tspan>`:W}
    </text>`})}`}(t,e,a)}
        <g class="radar-grow">
          <circle r=${84} fill="none" stroke="none"></circle>
          ${t.series.map(t=>function(e,t,o,a){const n=e.points.filter(e=>null!==e.r).sort((e,t)=>e.axis-t.axis).map(e=>({p:e,xy:ju(84*e.r,Tu(e.axis,t))}));return Z`<g class="series">
    ${n.length>1?Z`<polygon class="area ${a?"filled":""}" points=${Ou(n.map(e=>e.xy))}
            stroke=${e.color} fill=${a?e.color:"none"}></polygon>`:W}
    ${n.map(({p:t,xy:a})=>Z`<g class="entity marker" data-index=${t.index} tabindex="0" aria-label=${o[t.index].label}
        role="img">
        <circle class="hit" cx=${a[0]} cy=${a[1]} r="9"></circle>
        <circle class="dot" cx=${a[0]} cy=${a[1]} r="3.5" stroke=${e.color}></circle>
      </g>`)}
  </g>`}(t,o,e.items,n))}
        </g>
      </svg>
      ${a?W:R`<div class="radar-legend">
              ${t.series.map(e=>R`<span class="radar-legend-item"
                    ><span class="swatch" style="background:${e.color}"></span>${e.name}</span
                  >`)}
            </div>`}`}};yt("en",{editor_style_polar_area:"Polar area",editor_polar_scale:"Scale",editor_polar_scale_shared:"One scale for all, from 0 to the largest value",editor_polar_scale_limits:"Each slice from its entity's minimum to maximum",editor_polar_color_by:"Colour",editor_polar_color_by_series:"One colour per entity",editor_polar_color_by_shades:"Shades of one colour, darker for more",editor_polar_color_by_bands:"By colour band",editor_polar_color:"Colour for shades",polar_area_aria:"Polar area chart of {names}"});const Gu=["shared","limits"],Xu=["series","shades","bands"];const Ju=[{name:"polar_scale",path:["scale"],default:"shared"},{name:"polar_color_by",path:["color_by"],default:"series"},{name:"polar_color",path:["color"],default:"primary"}],Ku=Object.keys(Ee);const Qu={layout:"chart",group:"compare",height:260,styles:r`
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
      <path d=${Lu(0,18,-.6,.6)} fill="var(--primary-color, #03a9f4)" />
      <path d=${Lu(0,12,.65,1.85)} fill="var(--warning-color, #ffa600)" />
      <path d=${Lu(0,15,1.9,3.1)} fill="var(--success-color, #43a047)" />
      <path d=${Lu(0,9,3.15,4.35)} fill="var(--error-color, #db4437)" />
      <path d=${Lu(0,13,4.4,5.6)} fill="var(--purple-color, #8b6cff)" />
    </g>`,validate(e){if(void 0!==e.scale&&!Gu.includes(e.scale))throw new Error(`"scale" must be one of: ${Gu.join(", ")}`);if(void 0!==e.color_by&&!Xu.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Xu.join(", ")}`);if(void 0!==e.color&&("string"!=typeof e.color||!e.color))throw new Error('"color" must be a colour name, such as "primary", or any CSS colour')},editor:function(e){const t=Pi("polar_area",e.hass,()=>[{name:"polar_scale",selector:xi(e.hass,"polar_scale",Gu)},{type:"grid",name:"",schema:[{name:"polar_color_by",selector:xi(e.hass,"polar_color_by",Xu)},{name:"polar_color",selector:{select:{mode:"dropdown",custom_value:!0,options:Ku.map(t=>({value:t,label:_t(e.hass,`editor_color_${t}`)}))}}}]}]);return Di(e,"chart",t,Ju)},render(e){const t=e.raw.scale??"shared",o=e.raw.color_by??"series",a=e.raw.color??"primary",n=e.items.length,r=e.items.filter(e=>e.available&&null!==e.value).map(e=>e.value),i=r.length?Math.max(0,...r):0,s=e.items.map((e,r)=>{const s=function(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}(e,t,i);if(null===s||s<=0)return W;const[l,c]=function(e,t){if(t<=1)return[0,2*Math.PI];const o=Math.PI/t,a=Tu(e,t);return[a-o+.02,a+o-.02]}(r,n),d=6+86*s;return Z`<path class="entity slice" data-index=${r} tabindex="0" role="img" aria-label=${e.label}
        d=${Lu(6,d,l,c)} fill=${function(e,t,o,a,n){return"bands"===a?Ce(e.band.color):"shades"===a?hu(Ce(n),30+70*o):uu(t)}(e,r,s,o,a)}></path>`}),l=_t(e.hass,"polar_area_aria",{names:e.items.map(e=>e.name).join(", ")});return R`<svg
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
      ${function(e,t,o){const a=e.items.find(e=>e.available);if("shared"!==t||!a||o<=0)return Z``;const n=e.items.length>1?Math.PI/e.items.length:0;return Z`${Array.from({length:3},(t,r)=>{const i=92*(r+1)/3,[s,l]=ju(i,n),c=Mn(kn(o*(r+1)/3,a.decimals,e.hass),a.unit);return Z`<text class="ring-label" x=${s+3} y=${l-2}>${c}</text>`})}`}(e,t,i)} ${function(e){const t=e.items.length,{show:o}=e.config;return o.name||o.value?Z`${e.items.map((e,a)=>{const n=Tu(a,t),[r,i]=ju(104,n),s=Math.cos(n)<-.2,l=o.name&&o.value?2:1,c=s?10:Math.abs(Math.cos(n))<=.2?4-6*(l-1):13*-(l-1);return Z`<text class="slice-label ${e.available?"":"muted"}" x=${r} y=${i+c} text-anchor=${Fu(n)}>
      ${o.name?Z`<tspan>${e.name}</tspan>`:W}
      ${o.value?Z`<tspan class="slice-value" x=${r} dy=${o.name?13:0}>${e.display}</tspan>`:W}
    </text>`})}`:Z``}(e)}
    </svg>`}};yt("en",{editor_drill_down:"Tap a group to show what makes it up",drill_into:"{label}. Show what makes it up",drill_back:"Back to {name}",drill_top:"All"});const eh=new WeakMap;function th(e){return!1!==e.drill_down}function oh(e){if(void 0!==e.drill_down&&"boolean"!=typeof e.drill_down)throw new Error('"drill_down" must be true or false')}function ah(e,t){eh.set(e.host,t),e.requestUpdate()}function nh(e,t){return th(e.raw)?function(e,t){let o=e;const a=[];for(const n of t){const e=Au(o,[n]);if(!e||e.value<=0)break;o=e,a.push(n)}return{node:o,path:a}}(t,(o=e.host,eh.get(o)??[])):{node:t,path:[]};var o}function rh(e,t,o){if(!th(e.raw)||t.entity||t.value<=0)return;const a=()=>ah(e,t.path);return{label:_t(e.hass,"drill_into",{label:o}),click:e=>{e.stopPropagation(),a()},keydown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),a())}}}function ih(e,t,o,a){if(!o.path.length)return W;const n=o.path.slice(0,-1),r=n.length&&Au(t,n)?.name||_t(e.hass,"drill_top");return R`<div class="drill-bar">
    <button
      type="button"
      class="drill-back"
      aria-label=${_t(e.hass,"drill_back",{name:r})}
      @click=${()=>ah(e,n)}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z" fill="currentColor"></path>
      </svg>
      <span>${r}</span>
    </button>
    <div class="drill-current">
      <span class="drill-name">${o.node.name}</span>
      ${a?R`<span class="drill-total">${a}</span>`:W}
    </div>
  </div>`}const sh=r`
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
`;function lh(e,t){const o=e.reduce((e,t)=>e+t,0);if(o<=0||t<=0)return 1/0;const a=Math.max(...e),n=Math.min(...e),r=t*t;return Math.max(r*a/(o*o),o*o/(r*n))}function ch(e,t){const o=Math.min(t,e.w/2,e.h/2);return{x:e.x+o,y:e.y+o,w:e.w-2*o,h:e.h-2*o}}yt("en",{editor_style_treemap:"Treemap",editor_treemap_color_by:"Colour",editor_treemap_color_by_group:"One colour per group",editor_treemap_color_by_bands:"By colour band",treemap_aria:"Treemap of {names}",treemap_total:"{value} in all",treemap_empty:"Nothing to show: no entity has a value above zero.",treemap_no_reading:"No reading:",treemap_other:"Other"});const dh=["group","bands"],uh=240;function hh(e,t,o,a){const n=[],r=[],i=(e,t,o,s)=>{const l=e.children.filter(e=>e.value>0),c=function(e,t){const o=e.map(()=>({x:t.x,y:t.y,w:0,h:0})),a=e.map((e,t)=>({v:Number.isFinite(e)&&e>0?e:0,i:t})).filter(e=>e.v>0).sort((e,t)=>t.v-e.v||e.i-t.i),n=a.reduce((e,t)=>e+t.v,0);if(n<=0||t.w<=0||t.h<=0)return o;const r=t.w*t.h/n;let{x:i,y:s,w:l,h:c}=t,d=[];const u=()=>{const e=d.reduce((e,t)=>e+t.area,0);if(l>=c){const t=e/c;let a=s;for(const e of d){const n=e.area/t;o[e.i]={x:i,y:a,w:t,h:n},a+=n}i+=t,l-=t}else{const t=e/l;let a=i;for(const e of d){const n=e.area/t;o[e.i]={x:a,y:s,w:n,h:t},a+=n}s+=t,c-=t}d=[]};for(const h of a){const e=h.v*r,t=Math.min(l,c),o=d.map(e=>e.area);0===d.length||lh([...o,e],t)<=lh(o,t)||u(),d.push({area:e,i:h.i})}return d.length&&u(),o}(l.map(e=>e.value),t);l.forEach((e,t)=>{const l=c[t],d=s&&void 0===a?t:o;if(e.entity)return void r.push({node:e,rect:ch(l,1.5),series:d,rank:t});const u=ch(l,1.5),h=u.h>=44&&u.w>=56;n.push({node:e,rect:u,series:d,head:h});const p=ch(h?{...u,y:u.y+22-3,h:u.h-22+3}:u,3);i(e,p,d,!1)})};return i(e,{x:0,y:0,w:t,h:o},a??0,!0),{groups:n,leaves:r}}function ph(e,t,o){const a=t.items.find(e=>e.available)?.decimals??1;return Mn(kn(e,a,t.hass),o)}const mh=new WeakMap,fh=new WeakMap;const gh=(e,t)=>e/t*100+"%";function vh(e,t){return`left:${gh(e.x,t)};top:${gh(e.y,uh)};width:${gh(e.w,t)};height:${gh(e.h,uh)}`}function yh(e,t,o,a,n){const r=e.node.entity,i=function(e,t){const o=e.node.entity;if("bands"===t)return o.band.color;const a=o.config.color;return"string"==typeof a&&a?a:un[e.series%un.length]}(e,a),s="group"===a&&e.node.path.length?hu(Ce(i),Math.max(70,100-12*(e.rank??0))):Ce(i),l=Le(i),{w:c,h:d}=e.rect,{show:u}=t.config,h=c>=120&&d>=70&&null!==r.value&&r.value>=.25*n,p=d>=20&&c>=44,m=u.value&&d>=36;return R`<div
    class="entity tile text-${l} ${h?"big":""}"
    data-index=${e.node.index}
    tabindex="0"
    role="img"
    aria-label=${r.label}
    title=${r.label}
    style="${vh(e.rect,o)};background:${s}"
  >
    ${p&&u.name?R`<span class="tile-name">${r.name}</span>`:W}
    ${p&&m?R`<span class="tile-value">${r.display}</span>`:W}
  </div>`}const bh=[{name:"treemap_color_by",path:["color_by"],default:"group"},...Du,{name:"drill_down",path:["drill_down"],default:!0}];const _h={layout:"chart",group:"totals",height:280,styles:r`
    ${sh}
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
      height: ${uh}px;
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
      height: ${uh}px;
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
    <rect x="50" y="23" width="10" height="13" rx="3" fill="var(--success-color, #43a047)" opacity="0.7" />`,validate(e){if(wu(e),oh(e),void 0!==e.color_by&&!dh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${dh.join(", ")}`)},editor:function(e){const t=Pi("treemap",e.hass,()=>[{name:"treemap_color_by",selector:xi(e.hass,"treemap_color_by",dh)},Uu(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return R`${Di(Hu(e),"chart",t,bh,Bu)} ${Iu(e)}`},disconnect:function(e){fh.get(e)?.disconnect(),fh.delete(e)},render(e){const t=function(e){const t=e.host;if(!fh.has(t)&&"function"==typeof ResizeObserver){const o=new ResizeObserver(()=>{const o=t.shadowRoot?.querySelector(".treemap"),a=o?.clientWidth??0;a>0&&Math.abs(a-(mh.get(t)??0))>=1&&(mh.set(t,a),e.requestUpdate())});o.observe(t),fh.set(t,o)}return mh.get(t)??400}(e),o=function(e){const t=xu(e.raw.group_by),o=_t(e.hass,"treemap_other"),a=e.items.map(a=>Mu(a,t,e.hass,o));return zu(e.items,a,"")}(e),a=nh(e,o),n=a.node,r=e.raw.color_by??"group",i=function(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}(e.items),s=a.path.length?o.children.filter(e=>e.value>0).findIndex(e=>e.name===a.path[0]):void 0,{groups:l,leaves:c}=hh(n,t,uh,s),d=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available),u=void 0!==i&&e.config.show.value&&n.value>0?ph(n.value,e,i):"",h=u&&!a.path.length?_t(e.hass,"treemap_total",{value:u}):"",p=_t(e.hass,"treemap_aria",{names:(n.children.length?n.children:[]).map(e=>e.name).join(", ")}),m=c.length?R`<div class="treemap" role="img" aria-label=${p}>
          ${l.map(o=>function(e,t,o,a,n){const r=Ce(un[e.series%un.length]),i=void 0===n?"":ph(e.node.value,t,n),s=rh(t,e.node,i?`${e.node.name}, ${i}`:e.node.name);return R`<div
    class="group ${s?"drillable":""}"
    style="${vh(e.rect,o)};background:${"bands"===a?"var(--cd-track)":hu(r,14)}"
    role=${s?"button":W}
    tabindex=${s?0:W}
    aria-label=${s?.label??W}
    data-path=${e.node.path.join("/")}
    @click=${s?.click}
    @keydown=${s?.keydown}
  >
    ${e.head?R`<div class="group-head">
            <span class="group-name">${e.node.name}</span>
            ${t.config.show.value&&i&&e.rect.w>=110?R`<span class="group-total">${i}</span>`:W}
          </div>`:W}
  </div>`}(o,e,t,r,i))}
          ${c.map(o=>yh(o,e,t,r,n.value))}
        </div>`:R`<div class="treemap-message">${_t(e.hass,"treemap_empty")}</div>`;return R`${ih(e,o,a,u)}
    ${h?R`<div class="treemap-head"><span class="treemap-total">${h}</span></div>`:W} ${m}
    ${d.length?R`<div class="treemap-missing">
            <span>${_t(e.hass,"treemap_no_reading")}</span>
            ${d.map(({e:e,index:t})=>R`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
                  >${e.name} (${e.display})</span
                >`)}
          </div>`:W}`}};yt("en",{editor_style_sunburst:"Sunburst",editor_style_icicle:"Icicle",editor_sunburst_shape:"Shape",editor_sunburst_shape_full:"Full circle",editor_sunburst_shape_half:"Half circle",editor_hierarchy_color_by:"Colour",editor_hierarchy_color_by_group:"One colour per group",editor_hierarchy_color_by_bands:"By colour band",hierarchy_total:"Total",hierarchy_other:"Other",hierarchy_empty:"Nothing to show: no entity has a value above zero.",hierarchy_no_reading:"No reading:",sunburst_aria:"Sunburst of {names}",icicle_aria:"Icicle chart of {names}"});const xh=["full","half"],wh=["group","bands"],$h=240;function kh(e){return Math.max(45,100-20*(e-1))}function Mh(e){const t=xu(e.raw.group_by),o=_t(e.hass,"hierarchy_other"),a=e.items.map(a=>Mu(a,t,e.hass,o));return zu(e.items,a,_t(e.hass,"hierarchy_total"))}function zh(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}function Ah(e,t){const o=new Map,a=new Map;let n=0;for(const{node:r,level:i}of e){if(0===i)continue;const e=r.entity?r.entity.config.color:void 0;let s;s=1===i?"string"==typeof e&&e?e:un[n++%un.length]:a.get(r)??"grey";for(const t of r.children)a.set(t,s);if("bands"===t){o.set(r,r.entity?{fill:Ce(r.entity.band.color),text:Le(r.entity.band.color)}:{fill:"var(--cd-track)",text:"theme"});continue}const l=kh(i);o.set(r,{fill:hu(Ce(s),l),text:l>=100?Le(s):"theme"})}return o}function Sh(e,t,o){const a=t.items.find(e=>e.available)?.decimals??1;return Mn(kn(e,a,t.hass),o)}function Eh(e,t,o){return e.entity?e.entity.label:void 0===o?e.name:`${e.name}, ${Sh(e.value,t,o)}`}function Ch(e){const t=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available);return t.length?R`<div class="hierarchy-missing">
    <span>${_t(e.hass,"hierarchy_no_reading")}</span>
    ${t.map(({e:e,index:t})=>R`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
          >${e.name} (${e.display})</span
        >`)}
  </div>`:W}const jh=[{name:"hierarchy_color_by",path:["color_by"],default:"group"},...Du,{name:"drill_down",path:["drill_down"],default:!0}],Nh=[{name:"sunburst_shape",path:["shape"],default:"full"},...jh];function Lh(e,t){if(wu(e),oh(e),void 0!==e.color_by&&!wh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${wh.join(", ")}`);if(t&&void 0!==e.shape&&!xh.includes(e.shape))throw new Error(`"shape" must be one of: ${xh.join(", ")}`)}function Th(e,t,o=t){if(t.value<=0)return R`<div class="hierarchy-message">${_t(e.hass,"hierarchy_empty")}</div>`;const a=e.raw.shape??"full",n=e.raw.color_by??"group",r=zh(e.items),i=Eu(t),s=Ah(Eu(o),n),l=function(e,t){const o=72/Math.max(1,t);return{start:"half"===e?-Math.PI/2:0,sweep:"half"===e?Math.PI:2*Math.PI,radii:e=>[40+(e-1)*o,40+e*o],viewBox:"half"===e?"-116 -116 232 124":"-116 -116 232 232"}}(a,Su(t)),c=i.filter(e=>e.level>0).map(t=>{const[o,a]=l.radii(t.level),n=Lu(o,a,l.start+t.x0*l.sweep,l.start+t.x1*l.sweep),i=Eh(t.node,e,r),c=s.get(t.node).fill;return t.node.entity?Z`<path class="entity arc leaf" data-index=${t.node.index} tabindex="0" role="img"
            aria-label=${i} d=${n} fill=${c}><title>${i}</title></path>`:function(e,t,o,a,n){const r=rh(e,t,o);return Z`<path
    class="arc group ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":W}
    tabindex=${r?0:W}
    aria-label=${r?.label??o}
    d=${a}
    fill=${n}
    @click=${r?.click}
    @keydown=${r?.keydown}
  ><title>${o}</title></path>`}(e,t.node,i,n,c)}),d=void 0!==r&&e.config.show.value?Sh(t.value,e,r):"",u=t.children.filter(e=>e.value>0).map(e=>e.name);return R`<div class="sunburst-wrap ${a}">
    <svg
      class="sunburst"
      viewBox=${l.viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label=${_t(e.hass,"sunburst_aria",{names:u.join(", ")})}
    >
      <g class="sunburst-grow">${c}</g>
    </svg>
    <div class="sunburst-centre">${d?R`<span class="centre-value">${d}</span>`:W}</div>
  </div>`}function Oh(e,t,o=t){const a=e.raw.color_by??"group",n=zh(e.items),r=Ah(Eu(o),a),i=t.children.filter(e=>e.value>0);return R`<div class="hierarchy-legend">
    ${i.map(t=>{const o=R`<span class="swatch" style="background:${r.get(t)?.fill}"></span>`,a=e.config.show.value&&void 0!==n?R`<span class="legend-value">${Sh(t.value,e,n)}</span>`:W;return t.entity?R`<span class="entity legend-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}
            >${o}${t.name} ${a}</span
          >`:function(e,t,o,a,n){const r=rh(e,t,Eh(t,e,n));return R`<span
    class="legend-item ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":W}
    tabindex=${r?0:W}
    aria-label=${r?.label??W}
    @click=${r?.click}
    @keydown=${r?.keydown}
    >${o}${t.name} ${a}</span
  >`}(e,t,o,a,n)})}
  </div>`}function Fh(e,t,o=t){if(t.value<=0)return R`<div class="hierarchy-message">${_t(e.hass,"hierarchy_empty")}</div>`;const a=e.raw.color_by??"group",n=zh(e.items),r=Eu(t),i=Ah(Eu(o),a),s=Su(t)+1,{show:l}=e.config,c=t.children.filter(e=>e.value>0).map(e=>e.name);return R`<div
    class="icicle"
    role="img"
    aria-label=${_t(e.hass,"icicle_aria",{names:c.join(", ")})}
  >
    ${r.map(t=>{const o=(t.x1-t.x0)*$h,a=`left:${t.level/s*100}%;width:${100/s}%;top:${100*t.x0}%;height:${100*(t.x1-t.x0)}%`,r=Eh(t.node,e,n),c=0===t.level?void 0:i.get(t.node),d=t.node.entity?t.node.entity.display:void 0!==n?Sh(t.node.value,e,n):"",u=R`<div class="cell-fill" style=${c?`background:${c.fill}`:""}>
        ${o>=18&&(l.name||0===t.level)?R`<span class="cell-name">${t.node.name}</span>`:W}
        ${o>=34&&l.value&&d?R`<span class="cell-value">${d}</span>`:W}
      </div>`,h=`cell level-${Math.min(t.level,1)} text-${c?.text??"root"}`;return t.node.entity?R`<div
            class="entity ${h} leaf"
            data-index=${t.node.index}
            tabindex="0"
            role="img"
            aria-label=${r}
            title=${r}
            style=${a}
          >
            ${u}
          </div>`:function(e,t,o,a,n,r){const i=o.includes("text-root")?void 0:rh(e,t,a);return R`<div
    class="${o} group ${i?"drillable":""}"
    data-path=${t.path.join("/")}
    title=${a}
    style=${n}
    role=${i?"button":W}
    tabindex=${i?0:W}
    aria-label=${i?.label??W}
    @click=${i?.click}
    @keydown=${i?.keydown}
  >
    ${r}
  </div>`}(e,t.node,h,r,a,u)})}
  </div>`}const Ph=r`
  ${sh}
  .hierarchy-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${$h}px;
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
`,Dh={layout:"chart",group:"totals",height:290,styles:r`
    ${Ph}
    .sunburst-wrap {
      position: relative;
      height: ${$h}px;
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
      white-space: nowrap;
    }
  `,thumbnail:()=>Z`
    <circle cx="32" cy="20" r="7" fill="none" />
    <path d="M32 9 A11 11 0 0 1 42 25 L37 22 A6 6 0 0 0 32 14 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M42 25 A11 11 0 0 1 21 23 L26 21 A6 6 0 0 0 37 22 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M21 23 A11 11 0 0 1 32 9 L32 14 A6 6 0 0 0 26 21 Z" fill="var(--success-color, #43a047)" />
    <path d="M32 3 A17 17 0 0 1 48 26 L42 25 A11 11 0 0 0 32 9 Z" fill="var(--primary-color, #03a9f4)" opacity="0.6" />
    <path d="M48 26 A17 17 0 0 1 32 37 L32 31 A11 11 0 0 0 42 25 Z" fill="var(--warning-color, #f59e0b)" opacity="0.6" />`,validate:e=>Lh(e,!0),editor:function(e){const t=Pi("sunburst",e.hass,()=>[{type:"grid",name:"",schema:[{name:"sunburst_shape",selector:xi(e.hass,"sunburst_shape",xh)},{name:"hierarchy_color_by",selector:xi(e.hass,"hierarchy_color_by",wh)}]},Uu(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return R`${Di(Hu(e),"chart",t,Nh,Bu)}
  ${Iu(e)}`},render(e){const t=Mh(e),o=nh(e,t);return R`${ih(e,t,o,"")} ${Th(e,o.node,t)}
    ${o.node.value>0?Oh(e,o.node,t):W} ${Ch(e)}`}},Uh={layout:"chart",group:"totals",height:280,styles:r`
    ${Ph}
    .icicle {
      position: relative;
      height: ${$h}px;
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
    <rect x="41" y="25" width="19" height="11" rx="2" fill="var(--warning-color, #f59e0b)" opacity="0.7" />`,validate:e=>Lh(e,!1),editor:function(e){const t=Pi("icicle",e.hass,()=>[{name:"hierarchy_color_by",selector:xi(e.hass,"hierarchy_color_by",wh)},Uu(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return R`${Di(Hu(e),"chart",t,jh,Bu)} ${Iu(e)}`},render(e){const t=Mh(e),o=nh(e,t);return R`${ih(e,t,o,"")} ${Fh(e,o.node,t)} ${Ch(e)}`}};function Hh(e,t,o=5){if(!Number.isFinite(e)||!Number.isFinite(t))return[];e>t&&([e,t]=[t,e]),e===t&&(e-=.5,t+=.5);const a=function(e,t=5){if(!Number.isFinite(e)||e<=0||t<1)return 1;const o=e/t,a=10**Math.floor(Math.log10(o)),n=o/a;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*a}(t-e,o),n=Math.floor(e/a+1e-9)*a,r=Math.ceil(t/a-1e-9)*a,i=[];for(let s=0,l=n;l<=r+a/2&&s<100;s++,l=n+s*a)i.push(Number(l.toPrecision(12)));return i}function Ih(e){let t=1/0,o=-1/0;for(const a of e)"number"==typeof a&&Number.isFinite(a)&&(a<t&&(t=a),a>o&&(o=a));return t===1/0?void 0:[t,o]}function Bh(e,t){let o=null;for(const a of e){if(a.t>t)break;o=a.v}return o}const Rh=["grouped","stacked","percent"],Zh=["series","bands"],qh=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"];function Wh(e,t,o="none"){const a=new Map,n=[];for(const l of e){let e=a.get(l.group);e||(e={key:l.group,label:l.group,segments:[],total:null},a.set(l.group,e)),n.includes(l.series)||n.push(l.series);const t=e.segments.length;e.segments.push({index:l.index,series:l.series,value:l.value,from:0,to:0,slot:t}),null!==l.value&&(e.total=(e.total??0)+l.value)}const r=[...a.values()];for(const l of r){const e=l.segments.reduce((e,t)=>e+Math.abs(t.value??0),0);let o=0,a=0;for(const n of l.segments){if(null===n.value)continue;const r="percent"===t?0===e?0:n.value/e:n.value;"grouped"===t?n.to=r:r>=0?(n.from=o,n.to=o+=r):(n.from=a,n.to=a+=r)}}const i=r.flatMap(e=>e.segments.flatMap(e=>null===e.value?[]:[e.from,e.to])),s=function([e,t]){return[Math.min(0,e),Math.max(0,t)]}(Ih(i)??[0,1]);if(s[0]===s[1]&&(s[1]=1),"none"!==o){const e="ascending"===o?1:-1;r.sort((t,o)=>null===t.total!=(null===o.total)?null===t.total?1:-1:((t.total??0)-(o.total??0))*e)}return{rows:r,domain:s,series:n}}function Vh(e,t){if("grouped"!==t)return 36;const o=Math.max(1,e.segments.length);return 12*o+3*(o-1)+16}function Yh(e){return"string"==typeof e&&""!==e.trim()?e.trim():"number"==typeof e?String(e):void 0}function Gh(e,t){return`${kn(100*Math.abs(e),0,t)} %`}yt("en",{editor_style_grouped_bars:"Grouped bars",editor_mode:"Bars",editor_mode_grouped:"Side by side",editor_mode_stacked:"Stacked",editor_mode_percent:"Stacked to 100 %",editor_bars_color_by:"Colour",editor_bars_color_by_series:"One colour per series",editor_bars_color_by_bands:"By colour band",editor_bar_group:"Row",editor_bar_series:"Series",editor_bar_color:"Bar colour",grouped_bars_aria:"Bar chart of {names}"});const Xh=e=>`${(100*e).toFixed(3)}%`;const Jh=[{name:"mode",path:["mode"],default:"grouped"},{name:"bars_color_by",path:["color_by"],default:"series"}];const Kh=[{name:"bar_group",path:["group"]},{name:"bar_series",path:["series"]},{name:"bar_color",path:["color"]}];const Qh={layout:"chart",group:"compare",height:200,styles:r`
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
    <line x1="4" y1="3" x2="4" y2="37" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate:function(e){if(void 0!==e.mode&&!Rh.includes(e.mode))throw new Error(`"mode" must be one of: ${Rh.join(", ")}`);if(void 0!==e.color_by&&!Zh.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Zh.join(", ")}`);(e.entities??[]).forEach((e,t)=>{if("object"==typeof e&&null!==e)for(const o of["group","series"]){const a=e[o];if(null!=a&&"string"!=typeof a&&"number"!=typeof a)throw new Error(`Entity ${t+1}: "${o}" must be text`)}})},editor:function(e){const t=Pi("grouped_bars",e.hass,()=>[{type:"grid",name:"",schema:[{name:"mode",selector:xi(e.hass,"mode",Rh)},{name:"bars_color_by",selector:xi(e.hass,"bars_color_by",Zh)}]}]);return Di(e,"chart",t,Jh)},entityFields:e=>({schema:Pi("grouped_bars_entity",e,()=>[{type:"grid",name:"",schema:[{name:"bar_group",selector:{text:{}}},{name:"bar_series",selector:{text:{}}}]},{name:"bar_color",selector:{text:{}}}]),fields:Kh}),render:function(e){const{hass:t}=e,o=e.raw.mode??"grouped",a="bands"===e.raw.color_by,n=Wh(function(e){return function(e){const t=e.config.entities;return e.items.map((e,o)=>({e:e,index:o,at:t.indexOf(e.config)})).sort((e,t)=>(-1===e.at?1/0:e.at)-(-1===t.at?1/0:t.at)||e.index-t.index)}(e).map(({e:e,index:t})=>{const o=e.config;return{index:t,group:Yh(o.group)??`\0${t}`,series:Yh(o.series)??"",value:e.available?e.value:null}})}(e),o,e.config.sort),[r,i]=n.domain,s=e=>(e-r)/(i-r),l=s(0),c=t=>{const o=e.items[t.index],r=o.config.color;return a?o.band.color:"string"==typeof r&&r?r:qh[n.series.indexOf(t.series)%qh.length]},{show:d}=e.config,u=!a&&n.series.some(e=>""!==e)&&!1!==e.raw.show?.legend,h=e.items.map(e=>e.display.length),p=d.value&&"percent"!==o?Math.min(12,Math.max(4,...h)):0,m=p?Math.round(6.5*p+8):4,f=Math.max(0,...n.rows.map(t=>(t.label.startsWith("\0")?e.items[t.segments[0].index].name:t.label).length));let g=0;const v=n.rows.map(e=>{const t=g;return g+=Vh(e,o),{row:e,top:t}}),y=_t(t,"grouped_bars_aria",{names:e.items.map(e=>e.name).join(", ")}),b=r<0;return R`<div
    class="bars mode-${o}"
    role="img"
    aria-label=${y}
    style="--name-w:${d.name?`min(35%, calc(${f}ch + 16px))`:"0px"};--value-w:${m}px;--neg-w:${b?m:0}px"
  >
    <div class="bar-rows" style="height:${g}px">
      ${Me(v,e=>e.row.key,({row:a,top:n})=>R`<div class="bar-row" style="transform:translateY(${n}px);height:${Vh(a,o)}px">
            ${d.name?R`<div class="row-name">
                    ${a.label.startsWith("\0")?e.items[a.segments[0].index].name:a.label}
                  </div>`:W}
            <div class="row-plot">
              <div class="zero" style="left:${Xh(l)}"></div>
              ${a.segments.map(a=>(a=>{const n=e.items[a.index],r=c(a),i=s(Math.min(a.from,a.to)),u=Math.abs(s(a.to)-s(a.from)),h="grouped"===o?8+15*a.slot:8,p="grouped"===o?12:20,m=a.to<a.from||"grouped"===o&&a.to<0,f="percent"===o&&n.available?a.to-a.from:0,g="percent"===o&&d.value&&Math.abs(f)>=.12;return R`<div
        class="entity bar-seg ${m?"negative":""} ${n.available?"":"unavailable"}"
        data-index=${a.index}
        tabindex="0"
        role="button"
        aria-label=${"percent"===o&&n.available?`${n.label} (${Gh(f,t)})`:n.label}
        style="left:${Xh(i)};width:${Xh(u)};top:${h}px;height:${p}px;background:${Ce(r)}"
      >
        ${g?R`<span class="seg-text ${Le(r)}" aria-hidden="true">${Gh(f,t)}</span>`:W}
      </div>
      ${"grouped"===o&&d.value?R`<span
              class="bar-value ${n.available?"":"unavailable"} ${m?"left":""}"
              style="${m?"right":"left"}:${Xh(m?1-s(a.to):n.available?s(a.to):l)};top:${h}px;height:${p}px"
              aria-hidden="true"
              >${n.display}</span
            >`:W}`})(a))} ${(a=>{if("stacked"!==o||!d.value)return W;const n=e.items[a.segments[0].index],r=a.segments.filter(e=>null!==e.value).map(e=>e.to),i=Math.max(0,...r),l=Math.min(0,...r),c=0===i&&l<0,u=null===a.total?n.display:Mn(kn(a.total,n.decimals,t),n.unit);return R`<span
      class="bar-value total ${null===a.total?"unavailable":""} ${c?"left":""}"
      style="${c?"right":"left"}:${Xh(c?1-s(l):s(i))};top:${8}px;height:${20}px"
      aria-hidden="true"
      >${u}</span
    >`})(a)}
            </div>
          </div>`)}
    </div>
    ${u?R`<div class="bar-legend">
            ${n.series.filter(e=>""!==e).map(e=>{const t=function(e,t){for(const o of e.rows)for(const e of o.segments)if(e.series===t)return e;return}(n,e);return R`<span class="bar-legend-item"
                  ><span class="swatch" style="background:${Ce(t?c(t):"grey")}"></span
                  >${e}</span
                >`})}
          </div>`:W}
  </div>`}};function ep(e,t,o,a=""){const n=Ae(e.config);return R`<div
    class="entity ${a} ${n?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    role="meter"
    aria-valuenow=${e.available?String(e.value):W}
    aria-valuemin=${e.min}
    aria-valuemax=${e.max}
    aria-label=${e.label}
    tabindex=${n?0:W}
    style=${function(e){const t=Ce(e.band.color);return`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${t}`}(e)}
  >
    ${o}
  </div>`}const tp=r`
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
`,op=["shades","colours"];function ap(e,t,o,a){const{show:n}=o.config,r=function(e){const t=[];return e.bands.forEach((o,a)=>{const n=e.bands[a+1],r=Number.isFinite(o.from)?Xi(o.from,e.min,e.max):0,i=n?Xi(n.from,e.min,e.max):1;i<=r||t.push({from:t.length?r:0,to:i,color:o.color,level:0})}),t.forEach((e,t)=>e.level=t),t}(e),i=n.target?function(e,t){if(null!==e.target)return _t(t,"compare_target",{target:Mn(kn(e.target,e.decimals,t),e.unit)})}(e,o.hass):void 0,s=n.value||!e.available,l=R`
    ${n.name?R`<div class="label">
            <span class="name">${e.name}</span>${i?R`<span class="sub">${i}</span>`:W}
          </div>`:W}
    <div class="track">
      ${r.map(e=>R`<div
            class="range"
            style="left:${100*e.from}%;width:${100*(e.to-e.from)}%;background:${function(e,t,o){return"colours"===o?`color-mix(in srgb, ${Ce(e.color)} 22%, transparent)`:`color-mix(in srgb, var(--primary-text-color, #212121) ${t<=1?8:6+Math.round(e.level/(t-1)*12)}%, transparent)`}(e,r.length,a)}"
          ></div>`)}
      ${e.available?R`<div class="fill"></div>`:W}
      ${n.target&&e.available&&null!==e.targetPosition?R`<div class="target"></div>`:W}
    </div>
    ${s?R`<span class="value">${e.display}</span>`:R`<span></span>`}
  `;return ep(e,t,l,"bullet-row")}yt("en",{editor_style_bullet:"Bullet",editor_ranges:"Ranges behind the bar",editor_ranges_shades:"Shades of grey",editor_ranges_colours:"Colour band colours",compare_target:"target {target}",chart_aria:"{style} chart of {names}"});const np={layout:"chart",group:"compare",height:120,styles:r`
    ${tp}
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
    <rect x="40" y="22" width="2" height="14" rx="1" fill="var(--primary-text-color, #212121)" />`,validate(e){if(void 0!==e.ranges&&!op.includes(e.ranges))throw new Error(`"ranges" must be one of: ${op.join(", ")}`)},editor(e){const t=Pi("bullet",e.hass,()=>[{name:"ranges",selector:xi(e.hass,"ranges",op)}]);return Di(e,"chart",t,[{name:"ranges",path:["ranges"],default:"shades"}])},render(e){const t=e.raw.ranges??"shades",o=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_bullet"),names:e.items.map(e=>e.name).join(", ")});return R`<div class="compare bullets ${e.config.show.name?"":"no-name"}" role="group" aria-label=${o}>
      ${e.items.map((o,a)=>ap(o,a,e,t))}
    </div>`}},rp=["vertical","horizontal"];function ip(e,t,o){const{show:a}=t.config;return R`<div class="lane">
    <div class="scale">
      ${e.available?R`<div class="stem"></div>
              ${a.target&&null!==e.targetPosition?R`<div class="target"></div>`:W}
              <div class="dot"></div>
              ${o&&a.value?R`<span class="value tip">${e.display}</span>`:W}`:o?R`<span class="value tip">${e.display}</span>`:W}
    </div>
  </div>`}function sp(e,t,o){const{show:a}=o.config;return ep(e,t,R`${ip(e,o,!0)} ${a.name?R`<span class="name">${e.name}</span>`:W}`,"pop")}function lp(e,t,o){const{show:a}=o.config,n=a.value||!e.available;return ep(e,t,R`${a.name?R`<span class="name">${e.name}</span>`:W} ${ip(e,o,!1)}
  ${n?R`<span class="value">${e.display}</span>`:R`<span></span>`}`,"pop")}yt("en",{editor_style_lollipop:"Lollipop",editor_orientation:"Direction",editor_orientation_vertical:"Upright",editor_orientation_horizontal:"Across",chart_aria:"{style} chart of {names}"});const cp={layout:"chart",group:"compare",height:200,styles:r`
    ${tp}
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
    <circle cx="50" cy="8" r="5" fill="var(--success-color, #1fae7a)" />`,validate(e){if(void 0!==e.orientation&&!rp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${rp.join(", ")}`)},editor(e){const t=Pi("lollipop",e.hass,()=>[{name:"orientation",selector:xi(e.hass,"orientation",rp)}]);return Di(e,"chart",t,[{name:"orientation",path:["orientation"],default:"vertical"}])},render(e){const t=e.raw.orientation??"vertical",o=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_lollipop"),names:e.items.map(e=>e.name).join(", ")}),a="vertical"===t?sp:lp;return R`<div
      class="compare ${t} ${e.config.show.name?"":"no-name"}"
      role="group"
      aria-label=${o}
    >
      ${e.items.map((t,o)=>a(t,o,e))}
    </div>`}},dp=["change","current"],up=["vertical","horizontal"];function hp(e){const t=e.find(e=>null!==e.v);return t?t.v:null}yt("en",{editor_style_waterfall:"Waterfall",editor_steps:"Each step is",editor_steps_change:"How much it changed in the period",editor_steps_current:"Its current value",editor_orientation:"Direction",editor_orientation_vertical:"Upright",editor_orientation_horizontal:"Across",editor_start_from_first:"Start from the first entity's reading at the start of the period",editor_total:"Show the total at the end",editor_waterfall_invert:"Counts down (a rise in these is a drop in the total)",waterfall_start:"Start",waterfall_end:"End",waterfall_total:"Total",waterfall_no_readings:"No readings",waterfall_aria:"Waterfall chart: {bars}"});const pp={vertical:.14,horizontal:.24};function mp(e,t){const{items:o,raw:a,hass:n}=e,r=a.steps??"change",i=!0===a.start_from_first,s=e=>t?.series[e]?.points??[],l=(e,t)=>{const o="change"===r?function(e){const t=e.filter(e=>null!==e.v);return 0===t.length?null:t[t.length-1].v-t[0].v}(s(t)):e.available?e.value:null;return null===o?null:function(e){return!0===e.config.invert}(e)?-o:o},c=i&&o.length?{value:hp(s(0)),index:0}:null,d=o.map((e,t)=>({value:l(e,t),index:t})).slice(i?1:0),{bars:u}=function(e,t,o){const a=[];let n=0;if(e){const t=e.value??0;a.push({kind:"start",from:0,to:t,delta:t,index:e.index,missing:null===e.value}),n=t}for(const s of t){const e=s.value??0;a.push({kind:"step",from:n,to:n+e,delta:e,index:s.index,missing:null===s.value}),n+=e}o&&a.push({kind:"total",from:0,to:n,delta:n,missing:!1});let r=0,i=0;for(const s of a)r=Math.min(r,s.from,s.to),i=Math.max(i,s.from,s.to);return r===i&&(i=r+1),{bars:a,domain:[r,i]}}(c,d,!1!==a.total),h=o[0]?.decimals??1;return u.map(e=>{const t=void 0===e.index?void 0:o[e.index],a=t?.decimals??h;let r,i;return"start"===e.kind?(r=_t(n,"waterfall_start"),i=e.missing?_t(n,"waterfall_no_readings"):kn(e.to,a,n)):"total"===e.kind?(r=_t(n,c?"waterfall_end":"waterfall_total"),i=kn(e.to,h,n)):(r=t.name,i=e.missing?t.available?_t(n,"waterfall_no_readings"):t.display:function(e,t,o){const a=kn(Math.abs(e),t,o);return 0===Number(e.toFixed(t))?kn(0,t,o):`${e>0?"+":"−"}${a}`}(e.delta,a,n)),{...e,name:r,label:i,entity:t}})}function fp(e,t){const o="horizontal"===e.raw.orientation,a=t.flatMap(e=>[e.from,e.to]);let n=Math.min(0,...a),r=Math.max(0,...a);n===r&&(r=n+1);const i=(r-n)*pp[o?"horizontal":"vertical"];r+=i,n<0&&(n-=i);const s=e=>(e-n)/(r-n)*100,l=t.length,c=100/l,d=o?.64:.6,u=e=>c*e+c*(1-d)/2,h=e=>u(e)+c*d,p=e.items[0]?.unit??"",m=_t(e.hass,"waterfall_aria",{bars:t.map(e=>`${e.name} ${e.missing?e.label:Mn(e.label,e.entity?.unit??p)}`).join(", ")}),f=e=>void 0===e.index?"":"entity",g=t.map((e,t)=>{const a=`--a0:${s(Math.min(e.from,e.to))}%;--a1:${s(Math.max(e.from,e.to))}%;--c0:${u(t)}%;--c1:${h(t)}%;--cm:${(u(t)+h(t))/2}%;--color:${function(e){return"step"!==e.kind?Ce("primary"):Ce(e.delta<0?"red":"green")}(e)}`,n=t+1<l?`--a:${s(e.to)}%;--c0:${h(t)}%;--c1:${u(t+1)}%`:"";return R`<div
        class="bar ${e.kind} ${e.missing?"missing":""} ${e.delta<0?"fall":"rise"} ${f(e)}"
        data-index=${e.index??W}
        tabindex=${void 0===e.index?W:0}
        aria-label=${`${e.name}, ${e.label}`}
        style=${a}
      ></div>
      <span class="bar-label ${e.missing?"missing":""} ${e.kind}" style=${a}
        >${e.missing&&!o?"–":e.label}</span
      >
      ${n?R`<div class="connector" style=${n}></div>`:W}`}),v=t.map(e=>R`<div class="bar-name ${f(e)}" data-index=${e.index??W} title=${e.name}>
        <span>${e.name}</span>
      </div>`);return R`<div class="wf ${o?"horizontal":"vertical"}" style="--n:${l}">
    <div class="names">${v}</div>
    <div class="wf-plot" role="img" aria-label=${m}>
      <div class="zero" style="--a:${s(0)}%"></div>
      ${g}
    </div>
  </div>`}const gp=[...Mi,{name:"steps",path:["steps"],default:"change"},{name:"orientation",path:["orientation"],default:"vertical"},{name:"start_from_first",path:["start_from_first"],default:!1},{name:"total",path:["total"],default:!0}];function vp(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}const yp={layout:"chart",group:"totals",height:240,styles:r`
    ${$n}
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
    <rect x="52" y="24" width="9" height="12" rx="1.5" fill="var(--primary-color, #03a9f4)" />`,validate(e){if(pn(e),void 0!==e.steps&&!dp.includes(e.steps))throw new Error(`"steps" must be one of: ${dp.join(", ")}`);if(void 0!==e.orientation&&!up.includes(e.orientation))throw new Error(`"orientation" must be one of: ${up.join(", ")}`);vp(e.start_from_first,"start_from_first"),vp(e.total,"total");for(const t of e.entities??[])"object"==typeof t&&vp(t.invert,"invert")},editor:function(e){const t=Pi("waterfall",e.hass,()=>[...zi(e.hass),{type:"grid",name:"",schema:[{name:"steps",selector:xi(e.hass,"steps",dp)},{name:"orientation",selector:xi(e.hass,"orientation",up)}]},{name:"start_from_first",selector:{boolean:{}}},{name:"total",selector:{boolean:{}}}]);return R`${Di(e,"chart",t,gp)}
  ${Pu(e,"waterfall_invert","invert",{boolean:{}},!1)}`},disconnect:bn,render(e){let t;if("change"===((o=e.raw).steps??"change")||!0===o.start_from_first){t=mn(e);const o=xn(t,e);if(o)return o}var o;return fp(e,mp(e,t))}},bp=["value","change"],_p=["direction","group"],xp=["bad","good"];yt("en",{editor_style_slope:"Slope",editor_measure:"Compare",editor_measure_value:"The reading then and now",editor_measure_change:"How much it rose in each period (meters)",editor_color_by_direction:"Up or down",editor_color_by_group:"By group",editor_increase:"A rise is",editor_increase_bad:"Bad (red)",editor_increase_good:"Good (green)",editor_group:"Group",slope_now:"Now",slope_ago:"{n} {unit} ago",slope_ago_one:"A {unit} ago",slope_previous:"Previous {n} {unit}",slope_previous_one:"Previous {unit}",slope_last:"Last {n} {unit}",slope_last_one:"Last {unit}",slope_unit_hour:"hour",slope_unit_hour_other:"hours",slope_unit_day:"day",slope_unit_day_other:"days",slope_unit_week:"week",slope_unit_week_other:"weeks",slope_unit_month:"month",slope_unit_month_other:"months",slope_entity_aria:"{name}, {from} to {to}",slope_no_reading:"no reading"});const wp={"5minute":3e5,hour:36e5,day:864e5,month:26784e5};function $p(e,t,o){const a=function(e,t,o=1e-9){return Math.abs(t-e)<=o?"flat":t>e?"up":"down"}(e,t);return"flat"===a?"grey":"up"===a==("bad"===o)?"red":"green"}function kp(e,t,o){const a=1===o.last,n=_t(e,`slope_unit_${o.unit}${a?"":"_other"}`);return _t(e,a?`slope_${t}_one`:`slope_${t}`,{n:o.last,unit:n})}function Mp(e,t,o){const a=function(e,t){if(null!==e&&null!==t&&0!==e)return(t-e)/Math.abs(e)}(e,t);if(void 0===a)return"";const n=Math.round(100*a);return`${n>0?"+":n<0?"−":""}${kn(Math.abs(n),0,o)} %`}function zp(e,t,o,a){const n="statistics"===e.source?wp[Ia(e.range)]:0,r="group"===t.raw.color_by,i="good"===t.raw.increase?"good":"bad",s=new Map,l=e.series.map(e=>{const t=e.entity.available?e.entity.value:null,[l,c]=function(e,t,o,a,n=0){const r=t.find(e=>null!==e.v),i=Bh(t,o.start)??(r&&r.t-o.start<=n?r.v:null);if("value"===e)return[i,a];const s=Bh(t,o.middle);return[null===i||null===s?null:s-i,null===s||null===a?null:a-s]}(o,e.points,a,t,n),d=function(e){const t=e.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0}(e.entity),u=e.entity.config.color;let h;if(r){const t=d??`#${e.index}`;s.has(t)||s.set(t,un[s.size%un.length]),h=u??s.get(t)}else h=null!==l&&null!==c?$p(l,c,i):"grey";return{index:e.index,entity:e.entity,from:l,to:c,color:Ce(h),group:d}});return l}const Ap=[...Mi,{name:"measure",path:["measure"],default:"value"},{name:"color_by",path:["color_by"],default:"direction"},{name:"increase",path:["increase"],default:"bad"}],Sp=[{name:"group",path:["group"]}],Ep={layout:"chart",group:"compare",height:230,styles:r`
    ${$n}
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
    ${[[14,28],[50,10],[14,12],[50,22],[14,32],[50,30]].map(([e,t])=>Z`<circle cx=${e} cy=${t} r="3" fill="var(--primary-text-color, #212121)" />`)}`,validate(e){pn(e);const t=(t,o)=>{if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)};t("measure",bp),t("color_by",_p),t("increase",xp);for(const o of e.entities??[]){const e="object"==typeof o&&o?o.group:void 0;if(void 0!==e&&"string"!=typeof e)throw new Error('"group" must be text')}},editor(e){const t=Pi("slope",e.hass,()=>[...zi(e.hass),{name:"measure",selector:xi(e.hass,"measure",bp)},{type:"grid",name:"",schema:[{name:"color_by",selector:xi(e.hass,"color_by",_p)},{name:"increase",selector:xi(e.hass,"increase",xp)}]}]);return Di(e,"chart",t,Ap)},entityFields:e=>({schema:Pi("slope-entity",e,()=>[{name:"group",selector:{text:{}}}]),fields:Sp}),disconnect:bn,render(e){const t=Date.now(),o=$a(e.raw.period),a="change"===e.raw.measure?"change":"value",n=mn("change"===a?{...e,raw:{...e.raw,period:{last:2*o.last,unit:o.unit}}}:e,t),r=ka(o,t).start,i={start:n.range.start,middle:r},s=e.hass,l=kp(s,"change"===a?"previous":"ago",o),c="change"===a?kp(s,"last",o):_t(s,"slope_now");if("ready"!==n.status)return R`${xn(n,e)}`;const d=zp(n,e,a,i),u=d.flatMap(e=>[e.from,e.to]),h=Ih(u);if(!h)return R`<div class="chart-message">${_t(s,"chart_no_data")}</div>`;const{show:p}=e.config,m=new Set(d.filter(e=>e.entity.stateObj).map(e=>e.entity.unit)),f=1===m.size?[...m][0]:void 0,g=(e,t)=>{const o=kn(t,e.entity.decimals,s);return void 0===f&&e.entity.unit?`${o} ${e.entity.unit}`:o},v=d.filter(e=>null!==e.from||null!==e.to),y=Math.max(160,22*v.length),[b,_]=wo(h,.06),x=e=>9+(_-e)/(_-b)*(y-18),w=e=>{const t=v.filter(t=>null!==e(t)),o=function(e,t,o,a){const n=e.map((e,t)=>({y:e,i:t})).sort((e,t)=>e.y-t.y||e.i-t.i),r=n.map(e=>Math.min(a,Math.max(o,e.y)));for(let s=1;s<r.length;s++)r[s]=Math.max(r[s],r[s-1]+t);if(r.length&&r[r.length-1]>a){r[r.length-1]=a;for(let e=r.length-2;e>=0;e--)r[e]=Math.min(r[e],r[e+1]-t)}if(r.length&&r[0]<o){r[0]=o;for(let e=1;e<r.length;e++)r[e]=Math.max(r[e],r[e-1]+t)}const i=new Array(e.length);return n.forEach((e,t)=>i[e.i]=r[t]),i}(t.map(t=>x(e(t))),18,9,y-9);return new Map(t.map((e,t)=>[e,o[t]]))},$=w(e=>e.from),k=w(e=>e.to),M=_t(s,"slope_no_reading"),z=_t(s,"chart_aria",{style:_t(s,"editor_style_slope"),names:d.map(e=>e.entity.name).join(", ")});return R`<div class="slope-head">
        <span class="from">${l}</span>
        ${f?R`<span class="unit">${f}</span>`:W}
        <span class="to">${c}</span>
      </div>
      <div class="slope-plot" style="height:${y}px" role="group" aria-label=${z}>
        <div class="axis from"></div>
        <div class="axis to"></div>
        ${v.map(e=>{const t=_t(s,"slope_entity_aria",{name:e.entity.name,from:null===e.from?M:g(e,e.from),to:null===e.to?M:g(e,e.to)}),o=p.value&&null!==e.from&&null!==e.to?Mp(e.from,e.to,s):"",a=e=>p.name?R`<span class="name">${e}</span>`:W;return R`<div class="entity" data-index=${e.index} tabindex="0" role="img" aria-label=${t}>
        ${null!==e.from&&null!==e.to?R`<svg viewBox="0 0 100 ${y}" preserveAspectRatio="none">
                <line x1="0" y1=${x(e.from)} x2="100" y2=${x(e.to)} stroke=${e.color}></line>
              </svg>`:W}
        ${null!==e.from?R`<span class="dot from" style="top:${x(e.from)}px;background:${e.color}"></span>
                <span class="lbl from" style="top:${$.get(e)}px"
                  >${a(e.entity.name)}${p.value?R`<span class="value">${g(e,e.from)}</span>`:W}</span
                >`:W}
        ${null!==e.to?R`<span class="dot to" style="top:${x(e.to)}px;background:${e.color}"></span>
                <span class="lbl to" style="top:${k.get(e)}px"
                  >${p.value?R`<span class="value">${g(e,e.to)}</span>`:W}${a(e.entity.name)}${o?R`<span class="pct" style="color:${e.color}">${o}</span>`:W}</span
                >`:W}
      </div>`})}
      </div>
      ${"group"===e.raw.color_by?function(e){const t=new Map;for(const o of e)o.group&&!t.has(o.group)&&t.set(o.group,o.color);return t.size?R`<div class="slope-legend">
    ${[...t].map(([e,t])=>R`<span class="slope-legend-item"><span class="swatch" style="background:${t}"></span>${e}</span>`)}
  </div>`:W}(d):W}`}},Cp=["range","then","target"],jp=["horizontal","vertical"];function Np(e,t,o,a,n){const r=e.available?e.value:null,i=[];if("range"===t){const e=function(e){return Ih(e.flatMap(e=>[e.v,e.min,e.max]))}(o),t=e?Ih([e[0],e[1],r]):void 0;t&&i.push({kind:"low",value:t[0]},{kind:"high",value:t[1]}),null===r||!n&&t||i.push({kind:"now",value:r})}else{const n="then"===t?Bh(o,a)??function(e){for(const t of e)if(null!==t.v)return t.v;return null}(o):e.target;null!==n&&i.push({kind:t,value:n}),null!==r&&i.push({kind:"now",value:r})}return i.sort((e,t)=>e.value-t.value)}function Lp(e){if(0===e.length)return[];const t=e.some(e=>"low"===e.kind)?e.filter(e=>"now"!==e.kind):e,o=t[0],a=t[t.length-1];return o===a?[a]:[o,a]}function Tp(e,t,o,a,n){return e.map((e,r)=>{const i=Np(e,t,o(r),a,n);return{index:r,entity:e,marks:i,labelled:Lp(i)}})}function Op(e,t){return 1===t.last?_t(e,`dumbbell_ago_${t.unit}_one`):_t(e,`dumbbell_ago_${t.unit}`,{n:t.last})}yt("en",{editor_style_dumbbell:"Dumbbell",editor_ends:"Compare",editor_ends_range:"Lowest and highest in the period",editor_ends_then:"Start of the period and now",editor_ends_target:"Target and now",editor_show_now:"Mark the current value",editor_orientation:"Direction",editor_orientation_horizontal:"Across",editor_orientation_vertical:"Upright",dumbbell_low:"Low",dumbbell_high:"High",dumbbell_now:"Now",dumbbell_target:"Target",dumbbell_ago_hour_one:"An hour ago",dumbbell_ago_hour:"{n} hours ago",dumbbell_ago_day_one:"A day ago",dumbbell_ago_day:"{n} days ago",dumbbell_ago_week_one:"A week ago",dumbbell_ago_week:"{n} weeks ago",dumbbell_ago_month_one:"A month ago",dumbbell_ago_month:"{n} months ago",dumbbell_no_value:"No value"});const Fp={low:Ce("blue"),high:Ce("red"),then:Ce("grey"),target:"var(--primary-text-color, #212121)"};function Pp(e,t){return"target"===e||"now"===e&&"range"===t}function Dp(e,t,o){return"now"!==e?Fp[e]:"range"===t?"var(--primary-text-color, #212121)":Ce(o.band.color)}const Up="range",Hp="horizontal",Ip=!0;function Bp(e){return{ends:e.ends??Up,orientation:e.orientation??Hp,showNow:void 0===e.show_now?Ip:!0===e.show_now}}function Rp(e,t,o){const a=e.entity;if(0===e.marks.length)return`${a.name}, ${a.available?_t(t.hass,"dumbbell_no_value"):a.display}`;const n=e.marks.map(e=>`${(e=>"then"===e?Op(t.hass,o):_t(t.hass,`dumbbell_${e}`))(e.kind)} ${Mn(kn(e.value,a.decimals,t.hass),a.unit)}`);return`${a.name}: ${n.join(", ")}`}const Zp=[...Mi,{name:"ends",path:["ends"],default:Up},{name:"show_now",path:["show_now"],default:Ip},{name:"orientation",path:["orientation"],default:Hp}];const qp={layout:"chart",group:"compare",height:220,styles:r`
    ${$n}
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
    <circle cx="56" cy="29" r="4" fill="var(--error-color, #ef3b5a)" />`,validate(e){if(pn(e),void 0!==e.ends&&!Cp.includes(e.ends))throw new Error(`"ends" must be one of: ${Cp.join(", ")}`);if(void 0!==e.orientation&&!jp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${jp.join(", ")}`);if(void 0!==e.show_now&&"boolean"!=typeof e.show_now)throw new Error('"show_now" must be true or false')},editor:function(e){const{ends:t}=Bp(e.config),o=Pi(`dumbbell-${t}`,e.hass,()=>[{type:"grid",name:"",schema:[{name:"ends",selector:xi(e.hass,"ends",Cp)},{name:"orientation",selector:xi(e.hass,"orientation",jp)}]},..."target"===t?[]:zi(e.hass),..."range"===t?[{name:"show_now",selector:{boolean:{}}}]:[]]);return Di(e,"chart",o,Zp)},disconnect:bn,render(e){const{ends:t,orientation:o,showNow:a}=Bp(e.raw),n=$a(e.raw.period);let r;if("target"===t)r=Tp(e.items,t,()=>[],0,a);else{const o=mn(e);if("ready"!==o.status)return xn(o,e)??R``;r=Tp(e.items,t,e=>o.series[e]?.points??[],o.range.start,a)}const i=Ih(r.flatMap(e=>e.marks.map(e=>e.value))),s=i?Hh(i[0],i[1],4):[],[l,c]=s.length?[s[0],s[s.length-1]]:[0,1],d=e=>c===l?.5:(e-l)/(c-l),u=function(e){const t=new Set(e.map(e=>e.unit).filter(e=>""!==e));return 1===t.size?[...t][0]:""}(e.items),h=function(e){if(e.length<2)return 0;const t=Math.abs(e[1]-e[0]);for(let o=0;o<6;o++)if(Math.abs(Math.round(t*10**o)-t*10**o)<1e-6)return o;return 6}(s),{show:p}=e.config,m=Math.max(...e.items.map(e=>e.name.length)),f=`min(${Math.min(m,16)+1}ch, 38%)`,g=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_dumbbell"),names:e.items.map(e=>e.name).join(", ")}),v=s.map(t=>R`<span class="db-tick" style="--f:${d(t)}">${kn(t,h,e.hass)}</span>`),y=r.map(o=>function(e,t,o,a,n,r){const i=e.entity,{show:s}=t.config,l=e.labelled[0],c=e.labelled[e.labelled.length-1],d=e=>Pp(e.kind,o)?"color-mix(in srgb, var(--primary-text-color, #212121) 30%, transparent)":Dp(e.kind,o,i);return R`<div
    class="entity db-row ${i.available?"":"unavailable"}"
    data-index=${e.index}
    tabindex="0"
    role="img"
    aria-label=${Rp(e,t,r)}
  >
    ${s.name?R`<span class="db-name">${i.name}</span>`:W}
    <div class="db-plot">
      ${n.map(e=>R`<span class="db-grid" style="--f:${a(e)}"></span>`)}
      ${0===e.marks.length?R`<span class="db-status value">${i.available?"–":i.display}</span>`:R`${e.labelled.length>1?R`<span
                    class="db-bar"
                    style="--a:${a(l.value)};--b:${a(c.value)};--from:${d(l)};--to:${d(c)}"
                  ></span>`:W}
            ${e.marks.map(e=>R`<span
                  class="db-dot ${e.kind} ${Pp(e.kind,o)?"ring":""}"
                  style="--f:${a(e.value)};--mark:${Dp(e.kind,o,i)}"
                ></span>`)}
            ${s.value?e.labelled.map((o,n)=>R`<span
                        class="db-label ${0===n&&e.labelled.length>1?"lo":"hi"}"
                        style="--f:${a(o.value)}"
                        >${kn(o.value,i.decimals,t.hass)}</span
                      >`):W}`}
    </div>
  </div>`}(o,e,t,d,s,n)),b=`db ${o} ${p.name?"":"no-names"} ${p.value?"":"no-values"}`;return R`<div class=${b} style="--name-w:${f}" role="group" aria-label=${g}>
      ${i?function(e,t,o,a,n,r){const i=t=>_t(e.hass,t),s=new Set(a.map(e=>Ce(e.entity.band.color))),l=1===s.size?[...s][0]:Ce("primary"),c="range"===t?[[i("dumbbell_low"),Fp.low,!1],...o?[[i("dumbbell_now"),Dp("now",t,a[0].entity),!0]]:[],[i("dumbbell_high"),Fp.high,!1]]:["then"===t?[Op(e.hass,n),Fp.then,!1]:[i("dumbbell_target"),Fp.target,!0],[i("dumbbell_now"),l,!1]];return R`<div class="db-legend">
    ${r?R`<span class="db-unit">${r}</span>`:W}
    ${c.map(([e,t,o])=>R`<span class="db-key"
          ><span class="db-swatch ${o?"ring":""}" style="--mark:${t}"></span>${e}</span
        >`)}
  </div>`}(e,t,a,r,n,u):W}
      ${"horizontal"===o?R`${y}
            ${s.length?R`<div class="db-axis" aria-hidden="true"><div class="db-plot">${v}</div></div>`:W}`:R`<div class="db-body">
              ${s.length?R`<div class="db-axis" aria-hidden="true">${v}</div>`:W}${y}
            </div>`}
    </div>`}};function Wp(e){const t={...e,source:e.source??"statistics"};if("history"===t.source&&void 0===e.group_by){const o=e.period??{},a=(o.last??24)*({hour:1,day:24,week:168,month:720}[o.unit??"hour"]??1);t.group_by="day"===o.calendar||!o.calendar&&a<=48?"hour":"day"}return t}function Vp(e){return e.flatMap((t,o)=>o>0?[[t[0],e[o-1][1]],t]:[t])}function Yp(e,t,o){if(e.length<2)return"";const[a,n,r]="step"===o?[Vp(e),Vp(t),"straight"]:[e,t,o];return`${sn(a,r)}${sn([...n].reverse(),r).replace(/^M/,"L")}Z`}yt("en",{editor_style_range_area:"Range area",editor_mean:"Draw the average as a line",editor_range_color:"Colour"});const Gp=[...wi.map(e=>"source"===e.name?{...e,default:"statistics"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"mean",path:["mean"],default:!0},{name:"line_width",path:["line_width"],default:At},...Ei,...Ai];const Xp=[{name:"range_color",path:["color"]},{name:"curve",path:["curve"]},{name:"dash",path:["dash"],default:!1}],Jp={layout:"chart",group:"history",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){if(pn(e),Lo(e),cr(e),Ft(e),qn(e),void 0!==e.mean&&"boolean"!=typeof e.mean)throw new Error('"mean" must be true or false')},editor:function(e){const t=Pi(`range_area|${$i(e.config)}`,e.hass,()=>[...ki(e.hass,e.config),{name:"curve",selector:xi(e.hass,"curve",an)},{type:"grid",name:"",schema:[{name:"mean",selector:{boolean:{}}},{name:"line_width",selector:Vt}]},...Ci(e.hass),...Si(e.hass)]);return Di(e,"chart",t,Gp)},entityFields:e=>({schema:Pi("range-area-entity",e,()=>[{type:"grid",name:"",schema:[{name:"range_color",selector:{text:{}}},{name:"curve",selector:xi(e,"curve",an)},{name:"dash",selector:{boolean:{}}}]}]),fields:Xp}),disconnect(e){bn(e),Pn(e),sr(e)},render:function(e){const t={...e,raw:Wp(e.raw)},o=mn(t,Date.now(),{range:!0}),a=vn(o,t),n=_n(o,t),r=a===W&&n===W?W:R`${a}${n}`,i=xn(o,t),s=Wn(t.raw);if(i)return Vn("over"===s.header?{...s,header:"above"}:s,r,i);const l=o.series,c=Un(t,o.range,xo(l.map(e=>e.points))),d=!1!==t.raw.mean,u=t.raw.line_width??At,h={text:(e,o)=>{if(!o||null===o.v)return"—";const a=o=>kn(o,e.entity.decimals,t.hass),n=o.min??o.v,r=o.max??o.v;return Mn(`${a(n)} – ${a(r)}`,e.entity.unit)+(d?` · ${a(o.v)}`:"")}};d||(h.dotY=()=>null);const p=lr(t.raw),m=_t(t.hass,"chart_aria",{style:_t(t.hass,"editor_style_range_area"),names:o.series.map(e=>e.entity.name).join(", ")});return Vn(s,r,Bn({axes:c,ctx:t,content:Z`${l.map(e=>function(e,t,o,a){const n=[],r=[],i=[];for(const s of function(e){const t=[];let o=[];for(const a of e)null!==a.v?o.push({t:a.t,v:a.v,lo:a.min??a.v,hi:a.max??a.v}):(o.length&&t.push(o),o=[]);return o.length&&t.push(o),t}(e.points)){const o=s.map(e=>[t.x(e.t),t.y(e.hi)]),a=s.map(e=>[t.x(e.t),t.y(e.lo)]);n.push(Yp(o,a,e.curve)),r.push(sn(o,e.curve),sn(a,e.curve)),i.push(sn(s.map(e=>[t.x(e.t),t.y(e.v)]),e.curve))}return Z`<g class="series" data-series=${e.index}>
    <path class="band" d=${n.join("")} fill=${e.color} stroke="none"></path>
    <path class="band-edge" d=${r.join("")} fill="none" stroke=${e.color}></path>
    ${o?Z`<path class="line ${e.dash?"dashed":""}" d=${i.join("")} fill="none" stroke=${e.color}
            style="stroke-width:${a}px"></path>`:W}
  </g>`}(e,c.scales,d,u))}`,label:m,overlay:R`${"over"===s.header?Yn(r):W}
      ${p?mr(t,l,c.scales,ir(t.host),Dn(t),h):W}`,hover:p?dr(t,o.range,l.map(e=>e.points)):void 0}))}},Kp=["line","area","column"];function Qp(e,t){return e.config.spark??t.spark??"line"}function em(e){const t=e.period??{},o=(t.last??24)*({hour:1,day:24,week:168,month:720}[t.unit??"hour"]??1);return(t.calendar?"day"===t.calendar:o<=48)?"hour":"day"}function tm(e,t){return void 0===e.group_by&&0!==t.length&&t.every(e=>"column"===e)?{...e,group_by:em(e),aggregate:e.aggregate??"mean"}:e}function om(e,t,o,a){const n=ta(e.points,120),r=n.filter(e=>null!==e.v).map(e=>e.v),i=function(e,t){if(0===e.length)return;let o=Math.min(...e),a=Math.max(...e);return t?(o=Math.min(o,0),a=Math.max(a,0),o===a?[o,o+1]:[o,a]):([o,a]=wo([o,a],.1),[o,a])}(r,"column"===t);if(!i)return Z``;const s=$o([o.start,o.end],[0,100]),l=$o(i,[23,1]),c=l(Math.min(Math.max(0,i[0]),i[1]));if("column"===t){const t=[];return n.forEach((e,a)=>{if(null===e.v)return;const r=e.end??n[a+1]?.t??o.end,i=s(e.t),d=Math.max(0,Math.min(100,s(r))-i);if(d<=0)return;const u=Math.min(l(e.v),c);t.push(Z`<rect x=${i+.12*d} width=${.76*d} y=${u} height=${Math.abs(l(e.v)-c)}></rect>`)}),Z`<g class="spark-columns" fill=${e.color}>${t}</g>`}const d=ln(n).map(e=>e.map(e=>[s(e.t),l(e.v)])),u=d.map(t=>sn(t,e.curve)).join(""),h="area"===t?d.filter(e=>e.length>1).map(t=>`${sn(t,"step"===e.curve?"straight":e.curve)}L${t[t.length-1][0]},${c}L${t[0][0]},${c}Z`).join(""):"";return Z`${h?Z`<path class="spark-fill" d=${h} fill=${e.color} stroke="none"></path>`:W}
    <path class="spark-line" d=${u} fill="none" stroke=${e.color} style="stroke-width:${a}px"></path>`}yt("en",{editor_style_sparkline:"Sparklines",editor_spark:"Sparkline",editor_spark_line:"Line",editor_spark_area:"Area",editor_spark_column:"Columns",editor_spark_bar:"Bar under the name and value",editor_spark_color:"Colour",spark_aria:"Trend of {name}"});const am=[...wi,{name:"spark",path:["spark"],default:"line"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:1.5},{name:"spark_bar",path:["bar"],default:!1}];const nm=[{name:"spark",path:["spark"]},{name:"spark_color",path:["color"]}];const rm={layout:"chart",group:"history",height:120,styles:r`
    ${$n}
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
    <rect x="42" y="25" width="14" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.5" />`,validate:function(e){pn(e);const t=[e.spark,...(e.entities??[]).map(e=>"object"==typeof e?e.spark:void 0)];for(const a of t)if(void 0!==a&&!Kp.includes(a))throw new Error(`"spark" must be one of: ${Kp.join(", ")}`);if(void 0!==e.bar&&"boolean"!=typeof e.bar)throw new Error('"bar" must be true or false');const o=e.line_width;if(void 0!==o&&("number"!=typeof o||o<St||o>Et))throw new Error('"line_width" must be a number from 0.5 to 12')},editor:function(e){const t=Pi(`sparkline|${$i(e.config)}`,e.hass,()=>[...ki(e.hass,e.config),{type:"grid",name:"",schema:[{name:"spark",selector:xi(e.hass,"spark",Kp)},{name:"curve",selector:xi(e.hass,"curve",an)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:Vt},{name:"spark_bar",selector:{boolean:{}}}]}]);return Di(e,"chart",t,am)},entityFields:e=>({schema:Pi("sparkline-entity",e,()=>[{type:"grid",name:"",schema:[{name:"spark",selector:xi(e,"spark",Kp)},{name:"spark_color",selector:{text:{}}}]}]),fields:nm}),disconnect(e){bn(e)},render:function(e){const t=e.items.map(t=>Qp(t,e.raw)),o={...e,raw:tm(e.raw,t)},a=mn(o),{show:n}=o.config,r=!0===o.raw.bar,i=o.raw.line_width??1.5,s="error"===a.status?R`<div class="spark-message error">${_t(o.hass,"chart_error",{error:a.error??""})}</div>`:W,l=a.series.map((s,l)=>{const c=s.entity,d=c.config.color,u=Ce(d||c.band.color),h="column"===Qp(c,e.raw)&&void 0===o.raw.group_by,p={...s,color:u,points:h?(m=s.points,f=o.raw,g=a.range,v=o.hass,Va(m,pa(em(f),g.start,g.end,fa(v)),f.aggregate??"mean",Date.now())):s.points};var m,f,g,v;const y=c.config.line_width??i,b=n.name?R`<span class="name">${c.name}</span>`:W,_=n.value||!c.available?R`<span class="value">${c.display}</span>`:W;return R`<div
      class="entity spark-row ${r?"with-bar":""} ${c.available?"":"unavailable"}"
      data-index=${l}
      tabindex="0"
      aria-label=${c.label}
    >
      ${n.icon?R`<ha-state-icon
              class="icon"
              .hass=${o.hass}
              .stateObj=${c.stateObj}
              .icon=${Qi(c)}
            ></ha-state-icon>`:W}
      ${r?R`<div class="spark-body">
              <div class="top">${b}${_}</div>
              ${function(e,t){const o=je(e.band.color);return R`<div
    class="spark-track"
    style="--start:${e.span[0]};--end:${e.span[1]};--c-start:${o.start};--c-end:${o.end};--target:${e.targetPosition??0}"
  >
    <div class="spark-bar"></div>
    ${t&&null!==e.targetPosition&&e.available?R`<div class="spark-target"></div>`:W}
  </div>`}(c,n.target)}
            </div>`:b}
      <svg
        class="spark ${"loading"===a.status?"loading":""}"
        viewBox="0 0 ${100} ${24}"
        preserveAspectRatio="none"
        role="img"
        aria-label=${_t(o.hass,"spark_aria",{name:c.name})}
      >
        ${"ready"===a.status?om(p,t[l],a.range,y):W}
      </svg>
      ${r?W:_}
    </div>`});return R`${vn(a,o)}${s}
    <div class="spark-rows ${n.icon?"icons":""} ${r?"bars":""}">${l}</div>`}},im=["wiggle","centre","share","zero"],sm=["inside_out","listed"];function lm(e){return e.map(e=>null===e||!Number.isFinite(e)||e<0?0:e)}function cm(e,t,o){const a="share"===o?function(e){const t=e[0]?.length??0,o=Array.from({length:t},(t,o)=>e.reduce((e,t)=>e+t[o],0));return e.map(e=>e.map((e,t)=>o[t]>0?e/o[t]*100:0))}(e):e,n=t.map(e=>a[e]);let r=function(e,t){const o=e[0]?.length??0,a=Array.from({length:o},(t,o)=>e.reduce((e,t)=>e+t[o],0));if("zero"===t||"share"===t)return new Array(o).fill(0);if("centre"===t)return a.map(e=>-e/2);const n=new Array(o).fill(0);for(let l=1;l<o;l++){let t=0,o=0;for(let a=0;a<e.length;a++){const n=e[a][l];let r=(n-e[a][l-1])/2;for(let t=0;t<a;t++)r+=e[t][l]-e[t][l-1];t+=n,o+=r*n}n[l]=n[l-1]-(t?o/t:0)}let r=1/0,i=-1/0;for(let l=0;l<o;l++)r=Math.min(r,n[l]),i=Math.max(i,n[l]+a[l]);const s=o?-(r+i)/2:0;return n.map(e=>e+s)}(n,o);const i=new Array(e.length);for(const s of t){const e=r.map((e,t)=>e+a[s][t]);i[s]={lower:r,upper:e},r=e}return i}function dm(e){let t=0,o=-1/0;return e.upper.forEach((a,n)=>{const r=a-e.lower[n];r>o&&(o=r,t=n)}),{at:t,thickness:Math.max(0,o)}}function um(e,t,o){const a=Math.min(e.range.end,t);if(e.group){const t=e.series[0]?.points??[],o=t.map((e,t)=>t).filter(e=>t[e].t<a);return{times:o.map(e=>(t[e].t+Math.min(t[e].end??t[e].t,a))/2),values:e.series.map(e=>o.map(t=>e.points[t]?.v??null))}}let n=Math.min(240,Math.max(24,Math.round(o/4)));if("statistics"===e.source){const t=Math.max(1,...e.series.map(e=>e.points.filter(e=>!e.carried).length));n=Math.min(n,t)}const r=function(e,t,o){const a=Math.max(e.start+1,Math.min(e.end,t)),n=Math.max(1,Math.round(o)),r=(a-e.start)/n,i=[];for(let s=0;s<n;s++)i.push(e.start+s*r);return i.push(a),i}(e.range,a,n);return{times:r.slice(0,-1).map((e,t)=>(e+r[t+1])/2),values:e.series.map(t=>function(e,t,o,a){return("statistics"===o?Ya(e,t,"mean",a):Va(e,t,"mean",a)).map(e=>e.v)}(t.points,r,e.source,a))}}function hm(e){return e.baseline??"wiggle"}yt("en",{editor_style_streamgraph:"Streamgraph",editor_baseline:"Shape",editor_baseline_wiggle:"Streamgraph (flowing)",editor_baseline_centre:"Centred",editor_baseline_share:"Share of the total (100 %)",editor_baseline_zero:"Stacked from zero",editor_stream_order:"Order",editor_stream_order_inside_out:"Biggest in the middle",editor_stream_order_listed:"As listed, first at the bottom",editor_stream_labels:"Names on the streams",editor_stream_curve:"Edges",editor_fill_color:"Colour",stream_total:"Total"});const pm=e=>Math.round(1e4*e)/100+"%";function mm(e,t,o,a,n,r,i){const[s,l]=a.domain,c=Wn(n.raw).compact?110:180,d=Dn(n),u=e=>e/(l-s)*c,h=new Map,p=[];for(const f of e.series){const e=t[f.index],{at:s,thickness:l}=dm(e);if(u(l)<18)continue;const m=i[f.index][s],g=r?`${kn(e.upper[s]-e.lower[s],0,n.hass)} %`:null===m?"":Mn(kn(m,f.entity.decimals,n.hass),f.entity.unit),v=`${f.entity.name} ${g}`.trim();h.set(f.index,v),p.push({key:f.index,x:o[s]/cn*d,y:a.y((e.upper[s]+e.lower[s])/2)/dn*c,width:6.2*v.length,thickness:u(l)})}const m=function(e,t){const o=[],a=new Map;for(const n of[...e].sort((e,t)=>t.thickness-e.thickness||e.key-t.key)){if(n.width>t-4)continue;const e=Math.min(Math.max(2,n.x-n.width/2),t-n.width-2),r={left:e,right:e+n.width,top:n.y-6.5,bottom:n.y+6.5},i=o.some(e=>r.left<e.right+4&&r.right>e.left-4&&r.top<e.bottom&&r.bottom>e.top);i||(o.push(r),a.set(n.key,e))}return a}(p,d);return R`<div class="stream-labels" aria-hidden="true">
    ${p.map(t=>{const o=m.get(t.key);if(void 0===o)return W;const a=e.series[t.key];return R`<span
        class="stream-label ${Le(function(e){return e.entity.config.color??un[e.index%un.length]}(a))}"
        style="left:${pm(d?o/d:0)};top:${pm(t.y/c)}"
        >${h.get(t.key)}</span
      >`})}
  </div>`}function fm(e,t,o,a,n,r,i,s){if(void 0===i)return W;const l=nr(o.times.map(e=>({t:e})),i);if(l<0)return W;const c=r[l]/cn,d=or(c,Dn(e)),u=[...n].reverse().map(e=>t.series[e]),h=a.map(e=>e.upper[l]-e.lower[l]),p=o.values.reduce((e,t)=>e+Math.max(0,t[l]??0),0),m=new Set(t.series.map(e=>e.entity.unit));return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${pm(c)}"></div>
    <div class="tooltip ${d}" style=${d.startsWith("pin")?"":`left:${pm(c)}`}>
      <div class="tooltip-time">${Qo(o.times[l],e.hass)}</div>
      ${u.map(t=>R`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${(t=>{const a=o.values[t.index][l];if(null===a)return"—";const n=Mn(kn(a,t.entity.decimals,e.hass),t.entity.unit);return s?`${n} · ${kn(h[t.index],0,e.hass)} %`:n})(t)}</span>
          </div>`)}
      ${1===m.size&&t.series.length>1?R`<div class="tooltip-row total">
              <span class="tooltip-name">${_t(e.hass,"stream_total")}</span>
              <span class="tooltip-value"
                >${Mn(kn(p,t.series[0].entity.decimals,e.hass),t.series[0].entity.unit)}</span
              >
            </div>`:W}
    </div>
  </div>`}const gm=[...wi,{name:"baseline",path:["baseline"],default:"wiggle"},{name:"stream_order",path:["stream_order"],default:"inside_out"},{name:"stream_curve",path:["curve"],default:"smooth"},{name:"stream_labels",path:["labels"],default:!0},...Ei,...Ai],vm=new Set(["y_axis","grid_horizontal","y_min","y_max"]);function ym(e){return e.map(e=>{const t=e;if(!vm.has(t.name)){if(t.schema){const e=t.schema.filter(e=>!vm.has(e.name));return e.length?{...t,schema:e}:void 0}return t}}).filter(e=>void 0!==e)}const bm={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},_m={layout:"chart",group:"totals",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
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
      fill="var(--warning-color, #f59e0b)" />`,validate(e){if(pn(e),Lo(e),cr(e),qn(e),void 0!==e.baseline&&!im.includes(e.baseline))throw new Error(`"baseline" must be one of: ${im.join(", ")}`);if(void 0!==e.stream_order&&!sm.includes(e.stream_order))throw new Error(`"stream_order" must be one of: ${sm.join(", ")}`);if(void 0!==e.labels&&"boolean"!=typeof e.labels)throw new Error('"labels" must be true or false')},editor:function(e){const t=function(e){const t=hm(e);return`${$i(e)}|${"wiggle"===t||"centre"===t?"floating":"axis"}`}(e.config),o=Pi(`streamgraph|${t}`,e.hass,()=>{const o=Ci(e.hass);return[...ki(e.hass,e.config),{type:"grid",name:"",schema:[{name:"baseline",selector:xi(e.hass,"baseline",im)},{name:"stream_order",selector:xi(e.hass,"stream_order",sm)}]},{type:"grid",name:"",schema:[{name:"stream_curve",selector:xi(e.hass,"curve",["smooth","straight","step"])},{name:"stream_labels",selector:{boolean:{}}}]},...t.endsWith("floating")?ym(o):o,...Si(e.hass)]});return Di(e,"chart",o,gm)},entityFields:()=>bm,disconnect(e){bn(e),Pn(e),sr(e)},render(e){const t=Date.now(),o=mn(e,t),a=vn(o,e),n=_n(o,e),r=a===W&&n===W?W:R`${a}${n}`,i=xn(o,e),s=Wn(e.raw);if(i)return Vn("over"===s.header?{...s,header:"above"}:s,r,i);const l=hm(e.raw),c="share"===l,d="wiggle"===l||"centre"===l,u=um(o,t,Dn(e)),h=u.values.map(lm),p="listed"===(e.raw.stream_order??"inside_out")?h.map((e,t)=>t):function(e){const t=e.map((e,t)=>{let o=0;for(let a=1;a<e.length;a++)e[a]>e[o]&&(o=a);return{i:t,at:o,sum:e.reduce((e,t)=>e+t,0)}});t.sort((e,t)=>e.at-t.at||e.i-t.i);let o=0,a=0;const n=[],r=[];for(const i of t)o<a?(o+=i.sum,n.push(i.i)):(a+=i.sum,r.push(i.i));return[...r.reverse(),...n]}(h);const m=cm(h,p,l),f=function(e){let t=1/0,o=-1/0;for(const a of e){for(const e of a.lower)t=Math.min(t,e);for(const e of a.upper)o=Math.max(o,e)}return t===1/0?void 0:[t,o]}(m);let g=e.raw;if(d){const[t,o]=f??[0,1],a=o>t?.04*(o-t):1;g={...e.raw,y_axis:!1,y_min:t-a,y_max:o+a,gridlines:{...e.raw.gridlines??{},horizontal:!1}}}else c?g={...e.raw,y_min:0,y_max:100}:void 0===e.raw.y_min&&(g={...e.raw,y_min:0});const v=Un({...e,raw:g},o.range,f),{scales:y}=v,b=u.times.map(e=>y.x(e)),_=e.raw.curve??"smooth",x=Math.min(o.range.end,t),w=[y.x(o.range.start),...b,y.x(x)],$=0===u.times.length?Z``:Z`${p.map(e=>{const t=o.series[e];return Z`<path
              class="stream entity"
              data-index=${e}
              aria-label=${t.entity.label}
              d=${function(e,t,o,a){const n=t.map((t,a)=>[t,o.y(e.upper[a])]),r=t.map((t,a)=>[t,o.y(e.lower[a])]).reverse();return 0===n.length?"":`${sn(n,a)}L${sn(r,a).slice(1)}Z`}((e=>({lower:[e.lower[0],...e.lower,e.lower[e.lower.length-1]],upper:[e.upper[0],...e.upper,e.upper[e.upper.length-1]]}))(m[e]),w,y,_)}
              fill=${t.color}
            ></path>`})}`,k=lr(e.raw),M=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_streamgraph"),names:o.series.map(e=>e.entity.name).join(", ")}),z=u.times.map(e=>({t:e,v:0}));return Vn(s,r,Bn({axes:v,ctx:{...e},content:$,label:M,overlay:R`${"over"===s.header?Yn(r):W}
        ${!1!==e.raw.labels&&u.times.length?mm(o,m,b,y,e,c,u.values):W}
        ${k?fm(e,o,u,m,p,b,ir(e.host),c):W}`,hover:k?dr(e,o.range,[z]):void 0}))}};const xm=["columns","line"],wm=.7;function $m(e){return{last:14,unit:"day",...e.period??{}}}function km(e){return e.group_by??"day"}function Mm(e,t=Date.now()){const o=$a($m(e.raw)),a=e.raw.source??"statistics";const n=km(e.raw),r=e.raw.aggregate??"mean",i=fa(e.hass),s=Ma(o,t,i,o.navigate?Aa(e.host,o):0),l=ua(n,s.start,i),c=pa(n,l,s.end,i),d={start:l,end:c[c.length-1]},u=Math.min(s.end,t),h=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),p=on(e.host,e.requestUpdate),m="statistics"===a?function(e,t,o){let a="hour";return"hour"===e?a="5minute":"day"!==e&&t.timeZone===o&&(a="day"),{period:a,types:["mean","min","max","state"],value:"mean"}}(n,i,e.hass.config?.time_zone):void 0,f=p.get(e.hass,h,{start:l,end:s.end},a,{live:s.live,statistics:m});let g=[];const v=e.items.map((e,t)=>{const o=e.config,n=f.data.get(Ra(h[t]))??[];let i;return 0===t?(g="statistics"===a?function(e,t,o){const a=[];let n=0;for(let r=0;r+1<t.length;r++){const i=t[r],s=t[r+1];for(;n<e.length&&e[n].t<i;)n++;let l=null;for(let t=n;t<e.length&&e[t].t<s;t++){const a=e[t];if(null===a.v||a.carried||i>=o)continue;const n="number"==typeof a.max?Math.max(a.max,a.v):a.v,r="number"==typeof a.min?Math.min(a.min,a.v):a.v;l?(l.high=Math.max(l.high,n),l.low=Math.min(l.low,r),l.close=a.v):l={t:i,end:s,open:a.v,high:n,low:r,close:a.v}}a.push(l)}return a}(n,c,u):function(e,t,o){const[a,n,r,i]=["first","max","min","last"].map(a=>Va(e,t,a,o));return a.map((e,t)=>null===e.v||null===n[t].v||null===r[t].v||null===i[t].v?null:{t:e.t,end:e.end??e.t,open:e.v,high:n[t].v,low:r[t].v,close:i[t].v})}(n,c,u),i=g.map((e,t)=>({t:c[t],end:c[t+1],v:e?e.close:null}))):i=function(e,t,o,a,n){return"history"===a?Va(e,t,o,n):"sum"===o||"change"===o?Va(e,t,"change",n):Ya(e,t,o,n)}(n,c,r,a,u),{index:t,entity:e,points:i,color:Ce(o.color??(0===t?un[0]:"grey")),curve:"smooth",dash:!1}});return{status:f.status,error:f.error,range:d,period:o,source:a,series:v,live:s.live,back:s.back,zone:i,group:{unit:n,aggregate:r},candles:g,unit:n}}yt("en",{editor_style_candlestick:"Candlestick",editor_candle_by:"One candle per",editor_under_aggregate:"Entities underneath: combine readings with",editor_up_color:"Colour when it rose",editor_down_color:"Colour when it fell",editor_underneath:"Draw the other entities underneath as",editor_underneath_columns:"Columns",editor_underneath_line:"A line",candle_open:"Open",candle_high:"High",candle_low:"Low",candle_close:"Close",candle_week_of:"Week of {date}"});const zm=e=>Math.round(1e4*e)/100+"%";function Am(e,t,o,a){if(void 0===a)return W;const n=t.series[0].points.map(e=>({t:(e.t+(e.end??e.t))/2})),r=nr(n,a);if(r<0)return W;const i=t.candles[r],s=o(n[r].t)/cn,l=or(s,Dn(e)),c=t.series[0].entity,d=(t,o=c)=>Mn(kn(t,o.decimals,e.hass),o.unit),u=i?[[_t(e.hass,"candle_open"),d(i.open)],[_t(e.hass,"candle_high"),d(i.high)],[_t(e.hass,"candle_low"),d(i.low)],[_t(e.hass,"candle_close"),d(i.close)]]:[[c.name,"—"]];for(const h of t.series.slice(1)){const e=h.points[r]?.v;u.push([h.entity.name,null==e?"—":d(e,h.entity),h.color])}return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${zm(s)}"></div>
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${zm(s)}`}>
      <div class="tooltip-time">${function(e,t,o,a){if("hour"===t)return Qo(e,o);const n="month"===t?{month:"long",year:"numeric",timeZone:a.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:a.timeZone};let r;try{r=new Intl.DateTimeFormat(o?.locale?.language??o?.language??"en",n)}catch{r=new Intl.DateTimeFormat("en",n)}const i=r.format(e);return"week"===t?_t(o,"candle_week_of",{date:i}):i}(t.series[0].points[r].t,t.unit,e.hass,t.zone)}</div>
      ${u.map(([e,t,o])=>R`<div class="tooltip-row">
            ${o?R`<span class="swatch" style="background:${o}"></span>`:W}
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}const Sm=[...wi.map(e=>"period_last"===e.name?{...e,default:14}:"period_unit"===e.name?{...e,default:"day"}:"source"===e.name?{...e,default:"statistics"}:"group_by"===e.name?{name:"candle_by",path:["group_by"],default:"day"}:"aggregate"===e.name?{name:"under_aggregate",path:["aggregate"],default:"mean"}:e),{name:"up_color",path:["up_color"],default:"green"},{name:"down_color",path:["down_color"],default:"red"},{name:"underneath",path:["underneath"],default:"columns"},...Ei,...Ai];const Em={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]};yt("en",{editor_fill_color:"Colour"});const Cm={layout:"chart",group:"history",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
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
    </g>`,validate(e){pn(e),Lo(e),cr(e),qn(e),$a($m(e));for(const t of["up_color","down_color"])if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`);if(void 0!==e.underneath&&!xm.includes(e.underneath))throw new Error(`"underneath" must be one of: ${xm.join(", ")}`)},editor:function(e){const t=Pi(`candlestick|${e.config.period?.calendar?"calendar":"rolling"}`,e.hass,()=>{return[...(t=e.hass,o=e.config,ki(t,{...o,group_by:km(o)}).map(e=>{const o=e;return o.schema?.some(e=>"group_by"===e.name)?{...o,schema:[{name:"candle_by",selector:xi(t,"group_by",Za)},{name:"under_aggregate",selector:xi(t,"aggregate",qa)}]}:e})),{type:"grid",name:"",schema:[{name:"up_color",selector:{text:{}}},{name:"down_color",selector:{text:{}}}]},{name:"underneath",selector:xi(e.hass,"underneath",xm)},...Ci(e.hass),...Si(e.hass)];var t,o});return Di(e,"chart",t,Sm)},entityFields:()=>Em,disconnect(e){bn(e),Pn(e),sr(e)},render(e){const t=Mm(e),o=vn(t,e),a=_n(t,e),n=o===W&&a===W?W:R`${o}${a}`,r=xn(t,e),i=Wn(e.raw);if(r)return Vn("over"===i.header?{...i,header:"above"}:i,n,r);const s=Un(e,t.range,function(e){let t=1/0,o=-1/0;for(const a of e)a&&(t=Math.min(t,a.low),o=Math.max(o,a.high));return t===1/0?void 0:[t,o]}(t.candles)),l=t.series.length>1;l&&(s.scales.y=$o(s.value.domain,[146,0]));const{x:c,y:d}=s.scales,u=Ce(e.raw.up_color??"green"),h=Ce(e.raw.down_color??"red"),p=t.series[0],m=t.candles.map(e=>{if(!e)return W;const t=c(e.t),o=c(e.end)-t,a=t+o/2,n=e.close>=e.open?u:h,r=d(Math.max(e.open,e.close)),i=Math.max(1.5,d(Math.min(e.open,e.close))-r);return Z`<g
        class="candle entity ${e.close>=e.open?"up":"down"}"
        data-index="0"
        aria-label=${p.entity.label}
      >
        <line class="wick" x1=${a} x2=${a} y1=${d(e.high)} y2=${d(e.low)} stroke=${n}></line>
        <rect class="body" x=${t+o*(1-wm)/2} width=${o*wm} y=${r} height=${i} fill=${n}></rect>
      </g>`}),f=e.raw.underneath??"columns",g=Z`${l?function(e,t,o){const a=e.series.slice(1);return Z`${a.map((e,n)=>{const r=e.points.map(e=>e.v).filter(e=>null!==e),i=Math.min(0,...r),s=Math.max(0,...r),l=$o([i,s===i?i+1:s],[dn,156]);if("line"===o){const o=ln(e.points).map(e=>sn(e.map(e=>[t((e.t+(e.end??e.t))/2),l(e.v)]),"straight")).join("");return Z`<path class="under-line entity" data-index=${e.index} d=${o} fill="none" stroke=${e.color}></path>`}return Z`<g class="under-columns entity" data-index=${e.index} fill=${e.color}>
      ${e.points.map(e=>{if(null===e.v)return W;const o=t(e.t),r=t(e.end??e.t)-o,i=r*wm/a.length,s=o+r*(1-wm)/2+n*i,c=l(Math.max(0,e.v));return Z`<rect x=${s} width=${Math.max(.5,.9*i)} y=${c} height=${Math.max(0,l(Math.min(0,e.v))-c)}></rect>`})}
    </g>`})}`}(t,c,f):W}${m}`,v=lr(e.raw),y=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_candlestick"),names:t.series.map(e=>e.entity.name).join(", ")}),b=p.points.map(e=>({t:(e.t+(e.end??e.t))/2,v:e.v}));return Vn(i,n,Bn({axes:s,ctx:e,content:g,label:y,overlay:R`${"over"===i.header?Yn(n):W}
        ${v?Am(e,t,c,ir(e.host)):W}`,hover:v?dr(e,t.range,[b]):void 0}))}},jm=["horizontal","vertical"],Nm=1e3,Lm=100,Tm=e=>"number"==typeof e&&Number.isFinite(e);yt("en",{editor_orientation:"Direction",editor_orientation_horizontal:"Across",editor_orientation_vertical:"Upright",editor_value_axis:"Value labels",editor_value_grid:"Lines at each value label",editor_value_min:"Lowest value shown",editor_value_max:"Highest value shown",dist_median:"Median",dist_middle:"Middle half",dist_range:"Lowest – highest",dist_count:"Readings"});const Om=[{name:"orientation",path:["orientation"],default:"horizontal"},{name:"value_axis",path:["value_axis"],default:!0},{name:"value_grid",path:["value_grid"],default:!0},{name:"value_min",path:["value_min"]},{name:"value_max",path:["value_max"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function Fm(e){return[{name:"orientation",selector:xi(e,"orientation",jm)},{type:"grid",name:"",schema:[{name:"value_axis",selector:{boolean:{}}},{name:"value_grid",selector:{boolean:{}}},{name:"value_min",selector:{number:{mode:"box",step:"any"}}},{name:"value_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]}function Pm(e){for(const t of["compact","tooltip"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);if(void 0!==e.orientation&&!jm.includes(e.orientation))throw new Error(`"orientation" must be one of: ${jm.join(", ")}`);for(const t of["value_axis","value_grid"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of["value_min","value_max"])if(void 0!==e[t]&&!Tm(e[t]))throw new Error(`"${t}" must be a number`);if(Tm(e.value_min)&&Tm(e.value_max)&&e.value_min>=e.value_max)throw new Error('"value_min" must be below "value_max"')}function Dm(e){return{orientation:e.orientation??"horizontal",axis:!1!==e.value_axis,grid:!1!==e.value_grid,min:Tm(e.value_min)?e.value_min:void 0,max:Tm(e.value_max)?e.value_max:void 0}}function Um(e){return Math.min(140,Math.max(64,Math.round(.3*(e-32))))}function Hm(e,t,o,a=64){const n=Dm(e.raw),r=!0===e.raw.compact,i=Fn(e),s=Math.max(1,t);if("horizontal"===n.orientation){const e=$o(o.domain,[0,Nm]);return{orientation:n.orientation,count:s,width:Nm,height:s*Lm,at:(t,o,a=0)=>[e(t),(o+.5+a)*Lm],valuePx:Math.max(40,i-32-Um(i)-8),bandPx:Math.min(r?Math.round(.69*a):a,s>12?28:s>6?40:1/0)}}const l=$o(o.domain,[Nm,0]),c=Math.max(40,i-32-(n.axis?40:0));return{orientation:n.orientation,count:s,width:s*Lm,height:Nm,at:(e,t,o=0)=>[(t+.5+o)*Lm,l(e)],valuePx:r?110:180,bandPx:c/s}}function Im(e,t){return"horizontal"===t?Math.max(2,Math.min(8,Math.floor(e/64))):e>140?4:3}function Bm(e,t,o,a){const n=Dm(t),r=Do(e,{min:n.min,max:n.max},o);return{domain:r.domain,ticks:r.ticks,format:e=>kn(e,r.decimals,a)}}function Rm(e,t){const o=function(e){for(const t of[1,2,3,4,6,12])if(t>=e)return t;return Math.max(12,Oo(e,1))}(24/Math.max(1,e)),a=[];for(let i=0;i<=24;i+=o)a.push(i);let n;const r={hour:"numeric",minute:"2-digit",timeZone:"UTC",hour12:Go(t)};try{n=new Intl.DateTimeFormat(t?.locale?.language??t?.language??"en",r)}catch{n=new Intl.DateTimeFormat("en",r)}return{domain:[0,24],ticks:a,format:e=>n.format(Date.UTC(2e3,0,1,0,Math.round(60*e)))}}const Zm=e=>Math.round(1e4*e)/100+"%",qm=new WeakMap;function Wm(e){return qm.get(e)}function Vm(e){qm.delete(e)}function Ym(e,t,o,a,n){const r=(t+.5)/e.count,i="horizontal"===e.orientation?r>.5?`top:auto;bottom:${Zm(1-t/e.count)};right:0`:`top:${Zm((t+1)/e.count)};right:0`:r>.5?`top:0;right:${Zm(1-t/e.count)}`:`top:0;left:${Zm((t+1)/e.count)}`;return R`<div class="hover-layer" aria-hidden="true">
    <div class="tooltip band-tooltip" style=${i}>
      <div class="tooltip-time"><span class="swatch" style="background:${n}"></span> ${o}</div>
      ${a.map(([e,t])=>R`<div class="tooltip-row">
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}function Gm({ctx:e,geometry:t,categories:o,scale:a,content:n,label:r,overlay:i=W,hover:s=!1}){const l=Dm(e.raw),c="horizontal"===t.orientation,d=a.ticks.filter(e=>e>=a.domain[0]&&e<=a.domain[1]),u=l.grid?Z`<g class="grid">${d.map(e=>{const[o,a]=t.at(e,0);return c?Z`<line x1=${o} x2=${o} y1="0" y2=${t.height}></line>`:Z`<line x1="0" x2=${t.width} y1=${a} y2=${a}></line>`})}</g>`:W,h=l.axis&&d.length?R`<div class="cat-axis">
          ${c?W:R`<span class="cat-sizer" aria-hidden="true"
                  >${d.map(a.format).reduce((e,t)=>t.length>e.length?t:e,"")}</span
                >`}
          ${d.map(e=>{const o=(e=>{const[o,a]=t.at(e,0);return c?o/t.width:a/t.height})(e);return R`<span class="axis-label ${c?o<.04?"start":o>.96?"end":"":o<.08?"top":""}" style="${c?"left":"top"}:${Zm(o)}"
              >${a.format(e)}</span
            >`})}
        </div>`:W,p=s?function(e,t){const o=t=>{qm.get(e.host)!==t&&(void 0===t?qm.delete(e.host):qm.set(e.host,t),e.requestUpdate())};return{move(e){const a=e.currentTarget.getBoundingClientRect(),n="horizontal"===t.orientation,r=n?a.height:a.width,i=n?e.clientY-a.top:e.clientX-a.left;r>0&&o(Math.min(t.count-1,Math.max(0,Math.floor(i/r*t.count))))},leave(){o(void 0)}}}(e,t):void 0,m=R`<div class="cat-labels">
    ${o.map(e=>R`<div class="entity cat-label" data-index=${e.index} tabindex="0" aria-label=${e.label}>
          <span class="cat-name"><span class="swatch" style="background:${e.color}"></span>${e.name}</span>
          ${e.detail?R`<span class="cat-detail">${e.detail}</span>`:W}
        </div>`)}
  </div>`,f=c?`height:${t.count*t.bandPx}px`:`height:${t.valuePx}px`,g=c&&t.bandPx<40;return R`<div
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
  </div>`}const Xm=r`
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
`;function Jm(e,t,o){const a=[];for(let n=0;n<e.length;n++){const r=e[n];if(null===r.v||!Number.isFinite(r.v))continue;const i=n+1<e.length?e[n+1].t:o;if(t&&n>0&&n===e.length-1&&r.t>=o)continue;const s=t?Math.max(1,Math.min(i,o)-r.t):1;a.push({t:r.t,v:r.v,w:s,real:!0!==r.carried})}return a}function Km(e){return[...e].sort((e,t)=>e.v-t.v)}function Qm(e,t){const o=e.length;if(0===o)return Number.NaN;if(1===o)return e[0].v;const a=e.reduce((e,t)=>e+t.w,0),n=Math.min(1,Math.max(0,t))*a;let r=0,i=-1/0,s=e[0].v;for(const l of e){const e=r+l.w/2;if(n<=e)return i===-1/0?l.v:s+(l.v-s)*(n-i)/(e-i||1);r+=l.w,i=e,s=l.v}return e[o-1].v}function ef(e){if(0===e.length)return;const t=Km(e),o=Qm(t,.25),a=Qm(t,.5),n=Qm(t,.75),r=1.5*(n-o),i=t.filter(e=>e.v>=o-r&&e.v<=n+r),s=t.reduce((e,t)=>e+t.w,0);return{n:e.length,min:t[0].v,max:t[t.length-1].v,q1:o,median:a,q3:n,low:i.length?i[0].v:o,high:i.length?i[i.length-1].v:n,mean:s>0?t.reduce((e,t)=>e+t.v*t.w,0)/s:a}}function tf(e){const t=e.length;if(0===t)return 1;const o=Km(e),a=o.reduce((e,t)=>e+t.w,0),n=o.reduce((e,t)=>e+t.v*t.w,0)/a,r=Math.sqrt(o.reduce((e,t)=>e+t.w*(t.v-n)**2,0)/a),i=Qm(o,.75)-Qm(o,.25),s=i>0?Math.min(r,i/1.34):r,l=o.reduce((e,t)=>e+t.w*t.w,0),c=l>0?a*a/l:t;let d=1/0;for(let h=1;h<o.length;h++){const e=o[h].v-o[h-1].v;e>0&&e<d&&(d=e)}const u=.9*s*Math.max(1,c)**-.2;return u>0?Math.max(u,d===1/0?0:d):d!==1/0?d:.01*Math.abs(n)||1}function of(e,t,o,a=64){if(0===e.length)return[];let n=1/0,r=-1/0;for(const u of e)n=Math.min(n,u.v),r=Math.max(r,u.v);const i=Math.max(o[0],n-2*t),s=Math.min(o[1],r+2*t);if(!(s>i))return[];const l=Array.from({length:a+1},(e,t)=>i+(s-i)*t/a),c=function(e,t,o){const a=e.reduce((e,t)=>e+t.w,0);if(0===a||t<=0)return o.map(()=>0);const n=1/(a*t*Math.sqrt(2*Math.PI));return o.map(o=>{let a=0;for(const n of e){const e=(o-n.v)/t;e>-6&&e<6&&(a+=n.w*Math.exp(-.5*e*e))}return a*n})}(e,t,l),d=Math.max(...c);return l.map((e,t)=>({x:e,d:d>0?c[t]/d:0}))}function af(e){const t=43758.5453*Math.sin(12.9898*(e+1));return t-Math.floor(t)-.5}function nf(e,t){const o=e.filter(e=>e.real);if(o.length<=t)return o;const a=[];for(let n=0;n<t;n++)a.push(o[Math.floor(n*o.length/t)]);return a}const rf=["violin","raincloud"],sf=["none","day","week","month"],lf=.42;function cf(e){const t=e.shape??"violin";return{shape:t,box:!1!==e.box,readings:e.readings??"raincloud"===t,bandwidth:"number"==typeof e.bandwidth?e.bandwidth:void 0,split:e.split_by??"none"}}function df(e,t,o,a){const n="month"===t?{month:"short",year:"numeric",timeZone:o.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:o.timeZone};try{return new Intl.DateTimeFormat(a?.locale?.language??a?.language??"en",n).format(e)}catch{return new Intl.DateTimeFormat("en",n).format(e)}}yt("en",{editor_style_violin:"Violin",editor_shape:"Shape",editor_shape_violin:"Violin",editor_shape_raincloud:"Raincloud (half violin, box and readings)",editor_box:"Box with the median and middle half",editor_readings:"Show each reading as a dot",editor_bandwidth:"Smoothing (in the entity’s unit, empty for automatic)",editor_split_by:"One shape per",editor_split_by_none:"Entity",editor_split_by_day:"Entity and day",editor_split_by_week:"Entity and week",editor_split_by_month:"Entity and month",violin_median:"median {value}",violin_none:"No readings",violin_raincloud:"Raincloud"});const uf=(e,t,o)=>e?Mn(kn(e.median,t.entity.decimals,o),t.entity.unit):"";function hf(e,t,o,a,n,r,i){const s=(e,t)=>e?_t(i,"violin_median",{value:uf(e,t,i)}):_t(i,"violin_none");if("none"===o.split)return e.map((e,o)=>{const a=ef(t[o]);return{series:e,readings:t[o],summary:a,name:e.entity.name,detail:s(a,e)}});const l=e.map((e,o)=>function(e,t,o){const a=t.slice(0,-1).map(()=>[]);for(const n of e)for(let e=0;e+1<t.length;e++){const r=t[e],i=t[e+1];if(!o){n.t>=r&&n.t<i&&a[e].push(n);continue}const s=Math.min(i,n.t+n.w)-Math.max(r,n.t);s<=0||a[e].push({t:Math.max(r,n.t),v:n.v,w:s,real:n.real&&n.t>=r})}return a}(t[o],a,n)),c=[];for(let d=0;d+1<a.length;d++)for(let t=0;t<e.length;t++){const n=l[t][d];if(0===n.length)continue;const u=ef(n),h=df(a[d],o.split,r,i);c.push({series:e[t],readings:n,summary:u,name:e.length>1?`${h} · ${e[t].entity.name}`:h,detail:s(u,e[t])})}return c}function pf(e,t,o,a,n=0,r=.42){if(0===e.length)return"";const i=e.map(e=>t.at(e.x,o,n-e.d*r)),s=e.map(e=>t.at(e.x,o,a?n:n+e.d*r));return function(e,t){const o=e=>Math.round(100*e)/100;return`${[...e,...[...t].reverse()].map(([e,t],a)=>`${a?"L":"M"}${o(e)},${o(t)}`).join("")}Z`}(i,s)}function mf(e,t,o,a,n){const{summary:r,series:i}=e;if(!r)return Z``;const s=a.bandwidth??tf(e.readings),l=of(e.readings,s,n),c="raincloud"===a.shape,d=Math.min(1,110/o.bandPx),u=Z`<path class="shape" d=${pf(l,o,t,c,c?-.04*d:0,(c?.44:lf)*d)}
    fill=${i.color} stroke=${i.color}></path>`,h=c?.08*d:0,p=function([e,t],[o,a]){return{x:Math.min(e,o),y:Math.min(t,a),width:Math.abs(o-e),height:Math.abs(a-t)}}(o.at(r.q1,t,h-.045*d),o.at(r.q3,t,h+.045*d)),[m,f]=o.at(r.low,t,h),[g,v]=o.at(r.high,t,h),y=a.box?Z`<g class="box">
        <line class="whisker" x1=${m} y1=${f} x2=${g} y2=${v} stroke=${i.color}></line>
        <rect class="iqr" x=${p.x} y=${p.y} width=${p.width} height=${p.height} fill=${i.color}></rect>
        <path class="median" d=${Nt([o.at(r.median,t,h)])}></path>
      </g>`:W,b=a.readings?Z`<path class="dots" stroke=${i.color} d=${Nt(nf(e.readings,300).map((e,a)=>o.at(e.v,t,d*function(e,t,o){return o?.3+.22*af(e):1.6*af(e)*lf*t}(a,function(e,t){if(0===e.length)return 0;let o=0;for(;o<e.length-1&&e[o+1].x<t;)o++;const a=e[o],n=e[Math.min(e.length-1,o+1)];return n.x===a.x?a.d:a.d+(n.d-a.d)*(t-a.x)/(n.x-a.x)}(l,e.v),c))))}></path>`:W;return Z`<g class="group">${u}${y}${b}</g>`}const ff=(e,t,o)=>{const a=e=>kn(e,t.entity.decimals,o),n=e=>Mn(e,t.entity.unit);return[[_t(o,"dist_median"),n(a(e.median))],[_t(o,"dist_middle"),n(`${a(e.q1)} – ${a(e.q3)}`)],[_t(o,"dist_range"),n(`${a(e.min)} – ${a(e.max)}`)],[_t(o,"dist_count"),kn(e.n,0,o)]]},gf=[...wi,{name:"shape",path:["shape"],default:"violin"},{name:"box",path:["box"],default:!0},{name:"split_by",path:["split_by"],default:"none"},{name:"bandwidth",path:["bandwidth"]},...Om],vf=new Map;const yf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]};yt("en",{editor_fill_color:"Colour"});const bf={layout:"chart",group:"distribution",height:240,styles:r`
    ${$n}
    ${fr}
    ${Gn}
    ${Xm}
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
      <circle cx="34" cy="35.5" r="1.3" /><circle cx="42" cy="37" r="1.3" /></g>`,validate(e){if(pn(e),cr(e),Pm(e),void 0!==e.shape&&!rf.includes(e.shape))throw new Error(`"shape" must be one of: ${rf.join(", ")}`);if(void 0!==e.split_by&&!sf.includes(e.split_by))throw new Error(`"split_by" must be one of: ${sf.join(", ")}`);for(const o of["box","readings"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);const t=e.bandwidth;if(void 0!==t&&!("number"==typeof t&&Number.isFinite(t)&&t>0))throw new Error('"bandwidth" must be a number above 0')},editor:function(e){const t=cf(e.config),o=Pi(`violin|${$i(e.config)}`,e.hass,()=>[...ki(e.hass,e.config),{type:"grid",name:"",schema:[{name:"shape",selector:xi(e.hass,"shape",rf)},{name:"split_by",selector:xi(e.hass,"split_by",sf)}]},{type:"grid",name:"",schema:[{name:"box",selector:{boolean:{}}},{name:"readings",selector:{boolean:{}}}]},{name:"bandwidth",selector:{number:{min:0,mode:"box",step:"any"}}},...Fm(e.hass)]);return Di(e,"chart",o,function(e){let t=vf.get(e);return t||(t=[...gf,{name:"readings",path:["readings"],default:"raincloud"===e}],vf.set(e,t)),t}(t.shape))},entityFields:()=>yf,disconnect(e){bn(e),Pn(e),Vm(e)},render(e){const t=Date.now(),o=mn(e,t),a=vn(o,e),n={...Wn(e.raw),header:"above"},r=xn(o,e);if(r)return Vn(n,a,r);const i=cf(e.raw),s=Math.min(o.range.end,t),l="history"===o.source&&!o.group,c=o.series.map(e=>Jm(e.points,l,s)),d="none"===i.split?[]:pa(i.split,o.range.start,s,o.zone),u=hf(o.series,c,i,d,l,o.zone,e.hass);let h=1/0,p=-1/0;for(const k of u){if(!k.summary)continue;const e=i.bandwidth??tf(k.readings);h=Math.min(h,k.summary.min-e),p=Math.max(p,k.summary.max+e)}const m=Dm(e.raw),f=Hm(e,u.length,{domain:[0,1]}),g=Bm(h===1/0?void 0:[h,p],e.raw,Im(f.valuePx,m.orientation),e.hass),v=Hm(e,u.length,g),y=Z`${u.map((e,t)=>mf(e,t,v,i,g.domain))}`,b=u.map(e=>({index:e.series.index,name:e.name,detail:e.detail,color:e.series.color,label:`${e.name}, ${e.detail}`})),_=lr(e.raw),x=_?Wm(e.host):void 0,w=void 0===x?void 0:u[x],$=_t(e.hass,"chart_aria",{style:_t(e.hass,"raincloud"===i.shape?"violin_raincloud":"editor_style_violin"),names:o.series.map(e=>e.entity.name).join(", ")});return Vn(n,a,Gm({ctx:e,geometry:v,categories:b,scale:g,content:y,label:$,hover:_,overlay:w?.summary&&void 0!==x?Ym(v,x,w.name,ff(w.summary,w.series,e.hass),w.series.color):W}))}},_f=.75;function xf(e){const t=e.map((e,t)=>t).sort((t,o)=>e[t].at-e[o].at||t-o),o=new Array(e.length).fill(0),a=[];let n=0;const r=function(e){let t=0;for(const o of e)o.r>t&&(t=o.r);return t}(e);for(const i of t){const{at:t,r:s}=e[i];for(;n<a.length&&t-a[n].at>s+r+_f;)n++;const l=a.slice(n).filter(e=>Math.abs(e.at-t)<e.r+s+_f),c=[0];for(const e of l){const o=e.r+s+_f,a=Math.sqrt(Math.max(0,o*o-(e.at-t)**2));c.push(e.y+a,e.y-a)}const d=c.sort((e,t)=>Math.abs(e)-Math.abs(t)||t-e).find(e=>l.every(o=>(o.at-t)**2+(o.y-e)**2>=(o.r+s+_f)**2-1e-6)),u=d??0;o[i]=u,a.push({at:t,r:s,y:u})}return o}function wf(e,t,o=1){let a=1,n=xf(e);const r=t=>function(e,t){let o=0;return e.forEach((e,a)=>{o=Math.max(o,Math.abs(t[a])+e.r)}),o}(e.map(e=>({...e,r:e.r*t})),n),i=Math.min(...e.map(e=>e.r)),s=Math.min(1,o/Math.max(i,1e-9));for(let l=0;l<4;l++){const o=r(a);if(o<=t)return{offsets:n,scale:a};const i=Math.max(s,a*Math.sqrt(t/o)*.95);if(i>=a)break;a=i,n=xf(e.map(e=>({...e,r:e.r*a})))}if(r(a)>t){const o=Math.max(0,t-Math.max(...e.map(e=>e.r*a))),r=Math.max(...n.map(Math.abs));r>0&&(n=n.map(e=>e*o/r))}return{offsets:n,scale:a}}const $f=["value","time_of_day"];function kf(e){return{placeBy:e.place_by??"value",dot:"number"==typeof e.dot_size?e.dot_size:6,sized:!0===e.size_by_value}}yt("en",{editor_style_beeswarm:"Beeswarm",editor_place_by:"Place each dot by",editor_place_by_value:"Its value",editor_place_by_time_of_day:"The time of day it happened",editor_dot_size:"Dot size (px)",editor_size_by_value:"Bigger dots for bigger values",swarm_readings:"{n} readings",swarm_events:"{n} times on",swarm_shown:"Dots shown",swarm_none:"No readings",swarm_earliest_latest:"Earliest – latest"});const Mf=/^(binary_sensor|switch|input_boolean|light|fan|siren|automation)\./;function zf(e,t,o){const a=Math.min(e.range.end,o);return e.series.map(o=>{const n="time_of_day"===t.placeBy&&Mf.test(o.entity.entityId);let r;r=n?function(e){const t=[];let o=null;for(const a of e)null!==a.v&&(1!==a.v||1===o||a.carried||t.push(a),o=a.v);return t}(o.points).map(e=>({t:e.t,v:1,w:1,real:!0})):Jm(o.points,"history"===e.source&&!e.group,a).filter(e=>e.real);const i=nf(r,400);return{series:o,positions:i.map(o=>"time_of_day"===t.placeBy?function(e,t){const o=sa(e,t);return o.hour+o.minute/60+o.second/3600}(o.t,e.zone.timeZone):o.v),values:i.map(e=>e.v),total:r.length,events:n}})}function Af(e,t,o,a,n){if(0===e.positions.length)return Z``;const r=n.dot/2,i=a.domain[1]-a.domain[0]||1,s=Math.min(...e.values),l=Math.max(...e.values),c=e.values.map(t=>{if(!n.sized||e.events)return r;const o=function(e,t,o,a){if(!(o>t))return a;const n=Math.min(1,Math.max(0,(e-t)/(o-t)));return a*Math.sqrt(.12+.88*n)}(t,s,l,r);return Math.max(.5,Math.round(o/r*6)/6)*r}),d=e.positions.map((e,t)=>({at:(e-a.domain[0])/i*o.valuePx,r:c[t]})),{offsets:u,scale:h}=wf(d,o.bandPx/2-1,1),p=new Map;return d.forEach((a,n)=>{const r=Math.round(a.r*h*2*100)/100,i=p.get(r)??[];i.push(o.at(e.positions[n],t,u[n]/o.bandPx)),p.set(r,i)}),Z`<g class="swarm entity" data-index=${e.series.index} stroke=${e.series.color}>
    ${[...p].map(([e,t])=>Z`<path class="dots" d=${Nt(t)} style="stroke-width:${e}px"></path>`)}
  </g>`}function Sf(e,t,o,a){const n=ef(e.positions.map((e,t)=>({t:t,v:e,w:1,real:!0})));if(!n)return[];const r=n=>o?t.format(n):Mn(kn(n,e.series.entity.decimals,a),e.series.entity.unit);return[[_t(a,"dist_count"),kn(e.total,0,a)],...e.positions.length<e.total?[[_t(a,"swarm_shown"),kn(e.positions.length,0,a)]]:[],[_t(a,"dist_median"),r(n.median)],[_t(a,"dist_middle"),`${r(n.q1)} – ${r(n.q3)}`],[_t(a,"swarm_earliest_latest"),`${r(n.min)} – ${r(n.max)}`]]}const Ef=[...wi,{name:"place_by",path:["place_by"],default:"value"},{name:"dot_size",path:["dot_size"],default:6},{name:"size_by_value",path:["size_by_value"],default:!1},...Om];function Cf(e){return e.map(e=>{const t=e;return t.schema?{...t,schema:t.schema.filter(e=>"value_min"!==e.name&&"value_max"!==e.name)}:e})}const jf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]};yt("en",{editor_fill_color:"Colour"});const Nf={layout:"chart",group:"distribution",height:260,styles:r`
    ${$n}
    ${fr}
    ${Gn}
    ${Xm}
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
    </g>`,validate(e){if(pn(e),Pm(e),void 0!==e.place_by&&!$f.includes(e.place_by))throw new Error(`"place_by" must be one of: ${$f.join(", ")}`);const t=e.dot_size;if(void 0!==t&&!("number"==typeof t&&t>=2&&t<=16))throw new Error('"dot_size" must be a number from 2 to 16');if(void 0!==e.size_by_value&&"boolean"!=typeof e.size_by_value)throw new Error('"size_by_value" must be true or false')},editor:function(e){const t=kf(e.config),o=Pi(`beeswarm|${$i(e.config)}|${t.placeBy}`,e.hass,()=>[...ki(e.hass,e.config),{name:"place_by",selector:xi(e.hass,"place_by",$f)},{type:"grid",name:"",schema:[{name:"dot_size",selector:{number:{min:2,max:16,step:1,mode:"box",unit_of_measurement:"px"}}},{name:"size_by_value",selector:{boolean:{}}}]},..."value"===t.placeBy?Fm(e.hass):Cf(Fm(e.hass))]);return Di(e,"chart",o,Ef)},entityFields:()=>jf,disconnect(e){bn(e),Pn(e),Vm(e)},render(e){const t=Date.now(),o=mn(e,t),a=vn(o,e),n={...Wn(e.raw),header:"above"},r=xn(o,e);if(r)return Vn(n,a,r);const i=kf(e.raw),s=zf(o,i,t),l=Dm(e.raw),c=Im(Hm(e,s.length,{domain:[0,1]},96).valuePx,l.orientation);let d;if("time_of_day"===i.placeBy)d=Rm(c,e.hass);else{const t=s.flatMap(e=>e.positions);d=Bm(t.length?[Math.min(...t),Math.max(...t)]:void 0,e.raw,c,e.hass)}const u=Hm(e,s.length,d,96),h=Z`${s.map((e,t)=>Af(e,t,u,d,i))}`,p=s.map(t=>{const o=function(e,t){if(0===e.total)return _t(t,"swarm_none");const o=kn(e.total,0,t);return _t(t,e.events?"swarm_events":"swarm_readings",{n:o})}(t,e.hass);return{index:t.series.index,name:t.series.entity.name,detail:o,color:t.series.color,label:`${t.series.entity.name}, ${o}`}}),m=lr(e.raw),f=m?Wm(e.host):void 0,g=void 0===f?void 0:s[f],v=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_beeswarm"),names:o.series.map(e=>e.entity.name).join(", ")});return Vn(n,a,Gm({ctx:e,geometry:u,categories:p,scale:d,content:h,label:v,hover:m,overlay:g&&g.total>0&&void 0!==f?Ym(u,f,g.series.entity.name,Sf(g,d,"time_of_day"===i.placeBy,e.hass),g.series.color):W}))}};function Lf(e,t,o){const a=new Set,n=[t];for(;n.length;){const t=n.pop();if(t===o)return!0;a.has(t)||(a.add(t),n.push(...e.get(t)??[]))}return!1}function Tf(e){const t=new Map,o=[];for(const a of e)a.from&&a.to&&a.from!==a.to&&(Lf(t,a.to,a.from)||(t.set(a.from,[...t.get(a.from)??[],a.to]),o.push(a)));return o}function Of(e){return null!==e&&Number.isFinite(e)&&e>0?e:0}function Ff(e,t){const o=Tf(e),a=function(e){const t=new Map;for(const o of e)t.set(o.from,t.get(o.from)??0),t.set(o.to,t.get(o.to)??0);for(let o=0;o<=t.size;o++){let o=!1;for(const a of e){const e=t.get(a.from)+1;e>t.get(a.to)&&(t.set(a.to,e),o=!0)}if(!o)break}return t}(o),n=new Map;for(const b of o)n.has(b.from)||n.set(b.from,n.size),n.has(b.to)||n.set(b.to,n.size);const r=o.filter(e=>Of(e.value)>0),i=new Map,s=e=>{let t=i.get(e);return t||(t={name:e,order:n.get(e),column:a.get(e),value:0,in:0,out:0,x:0,y:0,h:0},i.set(e,t)),t},l=r.map(e=>{const t=Of(e.value),o=s(e.from),a=s(e.to);return o.out+=t,a.in+=t,{flow:e,value:t,source:o,target:a,width:0,y0:0,y1:0}}),c=[...i.values()].sort((e,t)=>e.order-t.order);for(const b of c)b.value=Math.max(b.in,b.out);const d=[...new Set(c.map(e=>e.column))].sort((e,t)=>e-t);for(const b of c)b.column=d.indexOf(b.column);const u=d.length;if(0===u)return{nodes:c,links:l,columns:u};const h=d.map((e,t)=>c.filter(e=>e.column===t)),p=e=>t.above?.(e,u)??0,m=h.map(e=>e.reduce((e,t)=>e+p(t),0)+t.gap*(e.length-1)),f=h.map(e=>e.reduce((e,t)=>e+t.value,0)),g=Math.max(0,Math.min(...h.map((e,o)=>(t.height-m[o])/f[o]))),v=t.width-t.left-t.right-t.nodeWidth;h.forEach((e,o)=>{let a=(t.height-(f[o]*g+m[o]))/2;const n=t.left+(u>1?v*o/(u-1):v/2);for(const r of e)a+=p(r),r.x=n,r.y=a,r.h=r.value*g,a+=r.h+t.gap});const y=e=>e.y+e.h/2;for(const b of l)b.width=b.value*g;for(const b of c){const e=l.filter(e=>e.source===b).sort((e,t)=>y(e.target)-y(t.target));let t=b.y;for(const a of e)a.y0=t+a.width/2,t+=a.width;const o=l.filter(e=>e.target===b).sort((e,t)=>y(e.source)-y(t.source));t=b.y;for(const a of o)a.y1=t+a.width/2,t+=a.width}return{nodes:c,links:l,columns:u}}function Pf(e,t){return e.length*t*.58}function Df(e,t,o){if(Pf(e,o)<=t)return e;const a=Math.floor(t/(.58*o))-1;return a>=1?`${e.slice(0,a).trimEnd()}…`:""}function Uf(e,t,o){const a=e.map((e,t)=>t).sort((t,o)=>e[t]-e[o]),n=[...e];let r=-1/0;for(const s of a)n[s]=Math.max(n[s],r+t,t/2),r=n[s];let i=1/0;for(const s of[...a].reverse())n[s]=Math.min(n[s],i-t,o-t/2),i=n[s];return n}yt("en",{editor_style_sankey:"Sankey (flow)",editor_link_color:"Colour flows by",editor_link_color_auto:"Where they come from, or where they go after a middle node",editor_link_color_source:"Where they come from",editor_link_color_target:"Where they go",editor_from:"Flows from",editor_to:"Flows to",editor_flow_color:"Flow colour",sankey_aria:"Flow chart: {flows}",sankey_flow:"{from} to {to} {value}",sankey_no_flows:'Give each entity a "Flows from" and a "Flows to" in its options.',sankey_nothing:"Nothing is flowing right now."});const Hf=["auto","source","target"],If=10,Bf=e=>"string"==typeof e?e.trim():"";const Rf=new WeakMap,Zf=(e,t)=>e.column>0&&e.column<t-1,qf=(e,t)=>0===e.column?"left":Zf(e,t)&&e.in>0&&e.out>0?"above":"right";function Wf(e,t){return R`<div class="chart-message">${_t(t,e)}</div>`}const Vf=[{name:"link_color",path:["link_color"],default:"auto"}];const Yf=[{name:"from",path:["from"],default:""},{name:"to",path:["to"],default:""},{name:"flow_color",path:["color"]}],Gf=[{type:"grid",name:"",schema:[{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}}]},{name:"flow_color",selector:{text:{}}}];const Xf={layout:"chart",group:"totals",height:220,styles:r`
    ${$n}
    ${fr}
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
    <rect x="54" y="20" width="4" height="16" rx="1" fill="var(--purple-color, #8b6cff)" />`,validate:function(e){if(void 0!==e.link_color&&!Hf.includes(e.link_color))throw new Error(`"link_color" must be one of: ${Hf.join(", ")}`);const t=[];(e.entities??[]).forEach((e,o)=>{if("object"!=typeof e||null===e)return;const a=e;for(const t of["from","to"])if(void 0!==a[t]&&"string"!=typeof a[t])throw new Error(`Entity ${o+1}: "${t}" must be a node name`);const n=Bf(a.from),r=Bf(a.to);if(n&&r&&n===r)throw new Error(`Entity ${o+1}: "from" and "to" must be different nodes`);n&&r&&t.push([n,r])});const o=function(e){const t=new Map;for(const[r,i]of e){if(r===i)return[r,i];t.set(r,[...t.get(r)??[],i])}const o=new Map,a=[],n=e=>{if("open"===o.get(e))return[...a.slice(a.indexOf(e)),e];if("done"!==o.get(e)){o.set(e,"open"),a.push(e);for(const o of t.get(e)??[]){const e=n(o);if(e)return e}a.pop(),o.set(e,"done")}};for(const r of t.keys()){const e=n(r);if(e)return e}}(t);if(o)throw new Error(`Flows can't go round in a loop: ${o.join(" → ")}`)},editor:function(e){const t=Pi("sankey",e.hass,()=>[{name:"link_color",selector:xi(e.hass,"link_color",Hf)}]);return Di(e,"chart",t,Vf)},entityFields:()=>({schema:Gf,fields:Yf}),disconnect(e){Pn(e),Rf.delete(e)},render:function(e){const t=function(e){return e.items.flatMap((e,t)=>{const o=e.config,a=Bf(o.from),n=Bf(o.to);return a&&n?[{index:t,from:a,to:n,value:e.available?e.value:null}]:[]})}(e);if(!t.length)return Wf("sankey_no_flows",e.hass);const o=e.items[t[0].index],a=t=>Mn(kn(t,o.decimals,e.hass),o.unit),n=Math.max(200,Fn(e)-32),{show:r}=e.config,i=function(e,t,o){const a=t<400?11:12,n=a+3,r=Ff(e,{width:t,height:200,left:0,right:0,nodeWidth:If,gap:12}),i=r.columns,s=new Map;for(const b of r.nodes)s.set(b.column,(s.get(b.column)??0)+1);const l=Math.max(200,44*Math.max(0,...s.values())),c=.3*t,d=e=>({name:o.name?e.name:"",value:o.value?o.format(e.value):""}),u=e=>{const t=r.nodes.filter(t=>qf(t,i)===e&&!Zf(t,i)).map(e=>Math.max(Pf(d(e).name,a),Pf(d(e).value,a)));return t.length&&Math.max(...t)>0?Math.min(c,Math.max(...t))+6+3:2},h=u("left"),p=u("right"),m=r.nodes.some(e=>"above"===qf(e,i)),f=m&&(o.name||o.value)?20:0,g=Ff(e,{width:t,height:l-f,left:h,right:p,nodeWidth:If,gap:12,above:(e,t)=>"above"===qf(e,t)&&f?20:0});for(const b of g.nodes)b.y+=f;for(const b of g.links)b.y0+=f,b.y1+=f;const v=i>1?(t-h-p-If)/(i-1):t,y=[];if(o.name||o.value){for(const o of g.nodes){const e=qf(o,i),n=d(o);if("above"===e){const r=o.x+5,i=Math.min(1.6*v,2*r,2*(t-r)),s=Pf(`${n.name} ${n.value}`,a)<=i||!n.name?n.value:"",l=Df(n.name,s?i-Pf(` ${s}`,a):i,a);y.push({node:o,side:e,name:l,value:s,y:o.y-6});continue}const r=Zf(o,i)?v-If-12:("left"===e?h:p)-6-2,s=Pf(n.value,a)<=r?n.value:"";y.push({node:o,side:e,name:Df(n.name,r,a),value:s,y:o.y+o.h/2})}const e=o.name&&o.value?2*n:n;for(let t=0;t<i;t++){const o=y.filter(e=>"above"!==e.side&&e.node.column===t);Uf(o.map(e=>e.y),e,l).forEach((e,t)=>o[t].y=e)}}return{width:t,height:l,font:a,layout:g,labels:y}}(t,n,{name:r.name,value:r.value,format:a}),{layout:s}=i;if(!s.links.length)return Wf("sankey_nothing",e.hass);const l=function(e,t,o){const a=Tf(e),n=new Set(a.map(e=>e.to)),r=new Map;for(const c of a)for(const e of[c.from,c.to])r.has(e)||r.set(e,"");const i=e=>"target"===t||"auto"===t&&n.has(e.from)?e.to:e.from,s=new Set;for(const c of a){const e=o(c.index);e&&!s.has(i(c))&&(r.set(i(c),Ce(e)),s.add(i(c)))}[...r.keys()].forEach((e,t)=>{s.has(e)||r.set(e,Ce(un[t%un.length]))});const l=new Map;for(const c of a){const e=o(c.index);l.set(c.index,e?Ce(e):r.get(i(c)))}return{node:r,link:l}}(t,e.raw.link_color??"auto",t=>{const o=e.items[t].config.color;return"string"==typeof o&&o?o:void 0}),c=Rf.get(e.host),d=t=>()=>{void 0===t?Rf.delete(e.host):Rf.set(e.host,t),e.requestUpdate()},u=!0===e.hass.themes?.darkMode,h=t=>_t(e.hass,"sankey_flow",{from:t.flow.from,to:t.flow.to,value:a(t.value)}),p=_t(e.hass,"sankey_aria",{flows:s.links.map(h).join(", ")}),m=s.links.find(e=>e.flow.index===c),f=s.links.map(t=>{const o=e.items[t.flow.index],a=Ae(o.config);return Z`<g
      class="entity flow ${a?"interactive":""} ${t===m?"active":""}"
      data-index=${t.flow.index}
      tabindex=${a?0:W}
      aria-label=${`${h(t)} (${o.name})`}
      @pointerenter=${d(t.flow.index)}
      @pointerleave=${d(void 0)}
      @focus=${d(t.flow.index)}
      @blur=${d(void 0)}
    >
      <title>${h(t)}</title>
      <path class="link" d=${function(e,t){const o=e.source.x+t,a=e.target.x,n=(o+a)/2,r=Math.max(1,e.width)/2,i=e=>Math.round(10*e)/10,[s,l,c,d]=[e.y0-r,e.y1-r,e.y1+r,e.y0+r].map(i);return`M${i(o)},${s}C${i(n)},${s} ${i(n)},${l} ${i(a)},${l}L${i(a)},${c}C${i(n)},${c} ${i(n)},${d} ${i(o)},${d}Z`}(t,If)} fill=${l.link.get(t.flow.index)}></path>
    </g>`}),g=s.nodes.map(e=>Z`<rect class="node" x=${e.x} y=${e.y} width=${If} height=${Math.max(2,e.h).toFixed(1)} rx="2"
        fill=${l.node.get(e.name)}></rect>`);return R`<div class="sankey-wrap">
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
    </text>`;const a="left"===e.side?o.x-6:o.x+If+6,n="left"===e.side?"end":"start",r=e.name&&e.value,i=t+3;return Z`<text class="label" x=${a} text-anchor=${n} font-size=${t}>
    ${e.name?Z`<tspan class="name" x=${a} y=${r?e.y-2:e.y+t/3}>${e.name}</tspan>`:W}
    ${e.value?Z`<tspan class="value" x=${a} y=${r?e.y-2+i:e.y+t/3}>${e.value}</tspan>`:W}
  </text>`}(e,i.font))}</g>
    </svg>
    ${function(e,t,o,a){if(!e)return W;const n=(e.source.x+If+e.target.x)/2,r=(e.y0+e.y1)/2-e.width/2,i=Math.min(Math.max(n,70),t.width-70);return R`<div
    class="tooltip sankey-tip"
    aria-hidden="true"
    style="left:${i/t.width*100}%;top:${Math.max(r,0)/t.height*100}%"
  >
    <div class="tooltip-row">
      <span class="swatch" style="background:${o}"></span>
      <span class="tooltip-name">${e.flow.from} → ${e.flow.to}</span>
      <span class="tooltip-value">${a}</span>
    </div>
  </div>`}(m,i,m?l.link.get(m.flow.index):"",m?a(m.value):"")}
  </div>`}},Jf=new Set(["unavailable","unknown"]);function Kf(e){return void 0===e||""===e||Jf.has(e)}function Qf(e,t){const o=[];for(let a=0;a<e.length;a++){const n=e[a];if(n.t>=t)break;const r=Math.min(t,a+1<e.length?e[a+1].t:t);if(r<=n.t)continue;const i=o[o.length-1];i&&i.state===n.s&&i.end===n.t?i.end=r:o.push({start:n.t,end:r,state:n.s})}return o}const eg={on:"amber",open:"amber",opening:"amber",closing:"amber",home:"green",playing:"green",charging:"green",auto:"green",heat_cool:"green",heat:"#ff8100",heating:"#ff8100",preheating:"#ff8100",cool:"#2b9af9",cooling:"#2b9af9",dry:"#efbd07",drying:"#efbd07",fan_only:"#14b8a6",fan:"#14b8a6",paused:"purple",buffering:"purple",detected:"red",problem:"red",triggered:"red",unlocked:"red",jammed:"red",locked:"green",armed_home:"green",armed_away:"green",armed_night:"green",armed_vacation:"green",armed_custom_bypass:"green",arming:"amber",pending:"amber",cleaning:"primary",returning:"purple"},tg=new Set(["off","closed","not_home","away","idle","standby","docked","clear","disarmed","none","false"]),og=["primary","purple","#14b8a6","#ec4899","amber","green","blue","red"];function ag(e){const t=Math.max(0,Math.round(e/1e3));if(t<60)return`${t} s`;const o=Math.round(t/60);if(o<60)return`${o} min`;const a=Math.floor(o/60);if(a<24){const e=o-60*a;return e?`${a} h ${String(e).padStart(2,"0")}`:`${a} h`}const n=Math.floor(a/24),r=a-24*n;return r?`${n} d ${r} h`:`${n} d`}function ng(e){const t=new Set;for(const o of e)if(!Kf(o.state)){if(!Number.isFinite(Number(o.state))||""===o.state.trim())return!1;t.add(o.state)}return t.size>8}yt("en",{editor_bar_labels:"Text on the bars",editor_bar_labels_state:"State",editor_bar_labels_duration:"How long",editor_bar_labels_both:"State and how long",editor_bar_labels_none:"None",editor_timeline_legend:"Legend of states",editor_timeline_legend_above:"Above the chart",editor_timeline_legend_hidden:"Hidden",editor_state_colors:"State colours",editor_state_colors_help:"A palette name (amber, green, blue, red, purple, grey, primary) or any CSS colour.",editor_state_colors_state:"State",editor_state_colors_color:"Colour",editor_state_colors_add:"Add a state colour",editor_state_colors_remove:"Remove",editor_timeline_group:"Group (rows with the same group share a heading)"});const rg=new Set(["source","group_by","aggregate"]),ig=[...wi.filter(e=>!rg.has(e.name)),{name:"bar_labels",path:["bar_labels"],default:"state"},{name:"x_axis",path:["x_axis"],default:!0},{name:"grid_vertical",path:["gridlines","vertical"],default:!0},{name:"tooltip",path:["tooltip"],default:!0},{name:"timeline_legend",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];const sg={text:{}};function lg(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?Object.entries(t):[]}function cg(e,t){const o=new Set(lg(e).map(([e])=>e)),a=(e.entities??[]).map(e=>"string"==typeof e?e:e.entity),n=a.map(e=>t?.states[e]?.state).filter(e=>!!e);return[...n,"on","off","home","not_home","heat","idle"].find(e=>!o.has(e)&&"unavailable"!==e&&"unknown"!==e)??`state_${o.size+1}`}function dg(e){const t=lg(e.config),o=t=>_t(e.hass,t),a=t=>e.commit(function(e,t){const o={...e},a=t.filter(([e])=>""!==e.trim());return a.length?o.state_colors=Object.fromEntries(a.map(([e,t])=>[e.trim(),t])):delete o.state_colors,o}(e.config,t)),n=(e,o)=>n=>{n.stopPropagation();const r=String(n.detail?.value??""),i=t.map(e=>[...e]);1===o&&""===r.trim()||(i[e][o]=r,a(i))};return R`<div class="state-colors" data-section="state-colors">
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
    ${t.map(([r,i],s)=>R`<div class="sc-row">
          <span class="sc-swatch" style="background:${Ce(i)}"></span>
          <ha-selector
            data-role="state"
            .hass=${e.hass}
            .label=${o("editor_state_colors_state")}
            .selector=${sg}
            .value=${r}
            @value-changed=${n(s,0)}
          ></ha-selector>
          <ha-selector
            data-role="color"
            .hass=${e.hass}
            .label=${o("editor_state_colors_color")}
            .selector=${sg}
            .value=${i}
            @value-changed=${n(s,1)}
          ></ha-selector>
          <ha-icon-button
            class="sc-remove"
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            .label=${o("editor_state_colors_remove")}
            @click=${()=>a(t.filter((e,t)=>t!==s))}
          ></ha-icon-button>
        </div>`)}
    <button
      type="button"
      class="sc-add"
      @click=${()=>a([...t,[cg(e.config,e.hass),"primary"]])}
    >
      ${o("editor_state_colors_add")}
    </button>
  </div>`}const ug=[{name:"timeline_group",path:["group"]}];yt("en",{editor_style_timeline:"State timeline",timeline_no_states:"No states recorded in this period.",timeline_for:"for {duration}",timeline_now:"Now",timeline_measurement:"Readings, not states: a line chart suits this one"});const hg=["state","duration","both","none"],pg={normal:30,compact:22},mg={normal:24,compact:18};function fg(e,t,o){const a=t.entity.stateObj??{entity_id:t.entity.entityId,state:o,attributes:{}},n=t.entity.config.attribute;try{return n?e.formatEntityAttributeValue?.(a,n,o)??o:e.formatEntityState?.({...a,state:o},o)??o}catch{return o}}function gg(e,t,o){return function(e,t,o){const a=o?.[e];if(a)return{color:Ce(a),quiet:!1,text:Le(a)};const n=tg.has(e)&&!Object.prototype.hasOwnProperty.call(eg,e),r=Object.prototype.hasOwnProperty.call(eg,e)?eg[e]:n?"grey":og[function(e){let t=0;for(let o=0;o<e.length;o++)t=31*t+e.charCodeAt(o)>>>0;return t}(e)%og.length],i=Ce(r);return{color:/^[a-z0-9_]+$/.test(e)&&/^[a-z0-9_]+$/.test(t)?`var(--state-${t}-${e}-color, ${i})`:i,quiet:n,text:n?"theme":Le(r)}}(t,e.domain,function(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?t:void 0}(o))}const vg=e=>Math.round(1e4*e)/100+"%";function yg(e,t,o,a){const n=o.raw.bar_labels??"state";return e.spans.map(r=>{if(Kf(r.state))return W;const{left:i,width:s}=function(e,t){const o=t.end-t.start;if(!(o>0))return{left:0,width:0};const a=Math.max(t.start,e.start),n=Math.min(t.end,e.end);return{left:(a-t.start)/o,width:Math.max(0,n-a)/o}}(r,t.range);if(s<=0)return W;const l=r.state,c=gg(e,l,o.raw),d=function(e,t,o){const a=ag(o.end-o.start);return"state"===e?t:"duration"===e?a:"both"===e?`${t} · ${a}`:""}(n,fg(o.hass,e.series,l),r),u=""!==d&&function(e){return 6.2*e.length+10}(d)<=s*a;return R`<div
      class="tl-bar ${c.quiet?"quiet":""} text-${c.text}"
      style="left:${vg(i)};width:${vg(s)};--tl-color:${c.color}"
    >
      ${u?R`<span class="tl-label">${d}</span>`:W}
    </div>`})}const bg={layout:"chart",group:"history",height:200,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
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
    <rect x="44" y="27" width="16" height="7" rx="3" fill="var(--success-color, #1fae7a)" />`,validate:function(e){if($a(e.period),void 0!==e.source&&"history"!==e.source)throw new Error('"source" must be history: a state timeline reads states, which statistics don\'t keep');if(void 0!==e.group_by)throw new Error('"group_by" does not apply to a state timeline');if(void 0!==e.bar_labels&&!hg.includes(e.bar_labels))throw new Error(`"bar_labels" must be one of: ${hg.join(", ")}`);if(void 0!==e.x_axis&&"boolean"!=typeof e.x_axis)throw new Error('"x_axis" must be true or false');const t=e.gridlines;if(void 0!==t&&("object"!=typeof t||null===t||Array.isArray(t)))throw new Error('"gridlines" must have "vertical" (true or false)');if(void 0!==t?.vertical&&"boolean"!=typeof t.vertical)throw new Error('"gridlines.vertical" must be true or false');!function(e,t){if(void 0===e)return;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`${t} must map states to colours, like "on: amber"`);for(const[o,a]of Object.entries(e))if("string"!=typeof a||""===a.trim())throw new Error(`${t}: the colour for "${o}" must be text`)}(e.state_colors,'"state_colors"');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.group&&"string"!=typeof e.group)throw new Error(`"group" of ${o.entity} must be text`)}cr(e),qn(e)},editor:function(e){const t=Pi(`timeline|${$i(e.config)}`,e.hass,()=>{return[...(t=e.hass,o=e.config,ki(t,o).filter(e=>!rg.has(e.name??"")&&!(e.schema??[]).some(e=>rg.has(e.name??"")))),{name:"bar_labels",selector:xi(e.hass,"bar_labels",["state","duration","both","none"])},{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]},{name:"timeline_legend",selector:xi(e.hass,"timeline_legend",["above","hidden"])}];var t,o});return R`${Di(e,"chart",t,ig)}${dg(e)}`},entityFields:function(e){return{schema:Pi("timeline_entity",e,()=>[{name:"timeline_group",selector:{text:{}}}]),fields:ug}},disconnect(e){bn(e),Pn(e),sr(e)},render(e){const t=Date.now(),o=mn(e,t,{text:!0}),a=Wn(e.raw),n=a.compact?"compact":"normal",r=vn(o,e),i=Math.min(o.range.end,t),s=o.series.map(e=>({series:e,spans:Qf(e.points,i),domain:e.entity.entityId.split(".")[0],measurement:!1}));for(const A of s)A.measurement=ng(A.spans);const l="hidden"!==a.header,c=(e,t)=>R`<div class="frame ${a.compact?"compact":""}">${e}${t}</div>`,d="ready"!==o.status?xn(o,e):s.every(e=>e.spans.every(e=>Kf(e.state)))?R`<div class="chart-message">${_t(e.hass,"timeline_no_states")}</div>`:void 0;if(d)return c(r,d);const u=e.config.show.name,h=Fn(e),p=Math.max(0,...s.map(e=>e.series.entity.name.length)),m=u?Math.min(.35*h,7*p+10):0,f=Math.max(40,h-32-m),g=function(e,t,o){const a=Math.max(2,Math.min(8,Math.round(o/70))),n=Zo(Yo(t.hass)),{unit:r,ticks:i}=Vo(e.range,a,n);return{unit:r,ticks:i,x:$o([e.range.start,e.range.end],[0,1]),offset:n}}(o,e,f),v=!1!==e.raw.x_axis,y=e.raw.gridlines?.vertical??!0,b=lr(e.raw),_=new Map(s.map(e=>[e.series.index,e])),x=function(e,t){const o=[],a=new Set;for(const n of e){const r=t(n);if(void 0!==r){if(!a.has(r)){a.add(r),o.push({heading:r});for(const a of e)t(a)===r&&o.push({item:a})}}else o.push({item:n})}return o}(o.series.map(e=>_.get(e.index)),e=>(e=>{const t=e.entity.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0})(e.series)),w=o.range.end-o.range.start,$=o.live&&o.range.end>t&&t>o.range.start,k=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_timeline"),names:s.map(e=>e.series.entity.name).join(", ")}),M=b?dr(e,o.range,[Array.from({length:241},(e,t)=>({t:o.range.start+w*t/240,v:null})),...s.map(e=>e.spans.map(e=>({t:e.start,v:null})))]):void 0,z=`--tl-row:${pg[n]}px;--tl-heading:${mg[n]}px`;return c(R`${r}${l?function(e,t){const o=new Map;for(const n of e)if(!n.measurement)for(const e of n.spans){if(Kf(e.state))continue;const a=fg(t.hass,n.series,e.state);o.has(a)||o.set(a,{label:a,color:gg(n,e.state,t.raw)})}if(0===o.size)return W;const a=[...o.values()];return R`<div class="tl-legend">
    ${[...a.filter(e=>!e.color.quiet),...a.filter(e=>e.color.quiet)].map(({label:e,color:t})=>R`<span class="tl-key"
          ><span class="swatch ${t.quiet?"quiet":""}" style="background:${t.color}"></span>${e}</span
        >`)}
  </div>`}(s,e):W}`,R`<div class="tl-wrap ${u?"":"no-names"}" style=${z}>
        ${u?R`<div class="tl-names">
                ${x.map(e=>"heading"in e?R`<div class="tl-heading">${e.heading}</div>`:R`<div
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
          ${y?g.ticks.map(e=>R`<div class="tl-grid" style="left:${vg(g.x(e))}"></div>`):W}
          ${x.map(t=>"heading"in t?R`<div class="tl-gap"></div>`:R`<div class="entity tl-row" data-index=${t.item.series.index}>
                  <div class="tl-track"></div>
                  ${t.item.measurement?R`<div class="tl-hint">${_t(e.hass,"timeline_measurement")}</div>`:R`<div class="tl-bars">${yg(t.item,o,e,f)}</div>`}
                </div>`)}
          ${$?R`<div class="tl-now" style="left:${vg(g.x(t))}" title=${_t(e.hass,"timeline_now")}></div>`:W}
          ${b?function(e,t,o,a){const n=ir(o.host);if(void 0===n)return W;const r=(n-t.range.start)/(t.range.end-t.range.start);if(!(r>=0&&r<=1))return W;const i=or(r,a);return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${vg(r)}"></div>
    <div class="tooltip ${i}" style=${i.startsWith("pin")?"":`left:${vg(r)}`}>
      <div class="tooltip-time">${Qo(n,o.hass)}</div>
      ${e.map(e=>{const t=function(e,t){return e.find(o=>t>=o.start&&(t<o.end||t===o.end&&o===e[e.length-1]))}(e.spans,n),a=t?.state,r=Kf(a),i=r?void 0:gg(e,a,o.raw),s=void 0===a||""===a?"—":fg(o.hass,e.series,a);return R`<div class="tooltip-row">
          <span class="swatch" style="background:${i?.color??"transparent"}"></span>
          <span class="tooltip-name">${e.series.entity.name}</span>
          <span class="tooltip-value"
            >${s}${t&&!r?R` <span class="tl-for"
                    >${_t(o.hass,"timeline_for",{duration:ag(t.end-t.start)})}</span
                  >`:W}</span
          >
        </div>`})}
    </div>
  </div>`}(s,o,e,f):W}
        </div>
        ${v?R`<div class="x-axis">
                ${g.ticks.map(t=>{const o=g.x(t);return R`<span class="axis-label ${o<.05?"start":o>.95?"end":""}" style="left:${vg(o)}"
                    >${ea(t,g.unit,w,e.hass,g.offset)}</span
                  >`})}
              </div>`:W}
      </div>`)}},_g={current:"current_temperature",target:"temperature",low:"target_temp_low",high:"target_temp_high",action:"hvac_action"},xg=Object.keys(_g);const wg=["heat","cool","dry","fan"],$g={heating:"heat",preheating:"heat",cooling:"cool",defrosting:"cool",drying:"dry",fan:"fan"};function kg(e){return void 0===e?void 0:$g[e]}function Mg(e,t){let o=0,a=e.length;for(;o<a;){const n=o+a>>1;e[n].t<=t?o=n+1:a=n}return o>0?e[o-1]:void 0}const zg=e=>(Math.round(100*e)/100).toString();yt("en",{editor_set_point:"Show the set point",editor_shading:"Shade while heating or cooling",editor_shade_fan:"Shade while only the fan runs",editor_current_color:"Temperature colour",editor_set_point_color:"Set point colour",editor_heating_color:"Heating colour",editor_cooling_color:"Cooling colour"});const Ag=new Set(["source","group_by","aggregate"]),Sg=[...wi.filter(e=>!Ag.has(e.name)),{name:"set_point",path:["set_point"],default:!0},{name:"shading",path:["shading"],default:!0},{name:"shade_fan",path:["shade_fan"],default:!1},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:At},{name:"current_color",path:["current_color"]},{name:"set_point_color",path:["set_point_color"]},{name:"heating_color",path:["heating_color"]},{name:"cooling_color",path:["cooling_color"]},...Ei,...Ai];function Eg(e){return ki(e.hass,e.config).filter(e=>!Ag.has(e.name??"")&&!(e.schema??[]).some(e=>Ag.has(e.name??"")))}yt("en",{editor_style_climate:"Climate",climate_set_point:"Set point",climate_range:"{low} – {high}",climate_not_thermostat:"{name} is not a thermostat. Pick a climate entity.",climate_action_heating:"Heating",climate_action_preheating:"Preheating",climate_action_cooling:"Cooling",climate_action_defrosting:"Defrosting",climate_action_drying:"Drying",climate_action_fan:"Fan",climate_action_idle:"Idle",climate_action_off:"Off"});const Cg="var(--state-climate-heat-color, #ff8100)",jg="var(--state-climate-cool-color, #2b9af9)",Ng="var(--state-climate-dry-color, #efbd07)",Lg="var(--state-climate-fan_only-color, #8a8a8a)",Tg=["set_point","shading","shade_fan"],Og=["current_color","set_point_color","heating_color","cooling_color"];function Fg(e,t,o){if(t.stateObj&&e?.formatEntityAttributeValue){const a=e.formatEntityAttributeValue(t.stateObj,_g.action,o);if(a)return a}const a=_t(e,`climate_action_${o}`);return a===`climate_action_${o}`?o:a}function Pg(e,t,o,a,n){return"number"==typeof t?e.text(t):"number"==typeof o&&"number"==typeof a?_t(n,"climate_range",{low:kn(o,e.decimals,n),high:e.text(a)}):"—"}const Dg=e=>Math.round(1e4*e)/100+"%";function Ug(e,t,o,a,n,r,i){if(void 0===i)return W;const s=n.x(i)/cn;if(!(s>=0&&s<=1))return W;const l=or(s,Dn(e)),c=Mg(o.current,i),d=Mg(o.action,i)?.s,u=kg(d),h=e=>Mg(e,i)?.v??void 0,p=c&&null!==c.v?n.y(c.v)/dn:-1,m=(e,t,o)=>R`<div class="tooltip-row">
      ${e}<span class="tooltip-name">${t}</span><span class="tooltip-value">${o}</span>
    </div>`;return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Dg(s)}"></div>
    ${p>=0&&p<=1?R`<span
            class="hover-dot"
            style="left:${Dg(s)};top:${Dg(p)};background:${a.colors.current}"
          ></span>`:W}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${Dg(s)}`}>
      <div class="tooltip-time">${Qo(i,e.hass)}</div>
      ${m(R`<span class="swatch" style="background:${a.colors.current}"></span>`,t.name,r.text(c?.v))}
      ${a.setPoint?m(R`<span class="swatch set-point-swatch" style="border-color:${a.colors.setPoint}"></span>`,_t(e.hass,"climate_set_point"),Pg(r,h(o.target),h(o.low),h(o.high),e.hass)):W}
      ${d?m(R`<span
                class="swatch action-swatch"
                style=${u?`background:${a.colors[u]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
              ></span>`,Fg(e.hass,t,d),""):W}
    </div>
  </div>`}const Hg=(e,t=!1)=>R`<div class="chart-message ${t?"error":""}">${e}</div>`;const Ig={layout:"chart",group:"history",height:240,styles:r`
    ${$n}
    ${Rn}
    ${fr}
    ${Gn}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />`,validate(e){pn(e),Lo(e),cr(e),Ft(e),qn(e),function(e){if(void 0!==e.source&&"history"!==e.source)throw new Error("\"source\" must be history: long-term statistics don't keep a thermostat's set point or action");if(void 0!==e.group_by)throw new Error('"group_by" is not available on a climate chart');for(const t of Tg)if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of Og)if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`)}(e)},editor:function(e){const t=Pi(`climate|${$i(e.config)}`,e.hass,()=>[...Eg(e),{type:"grid",name:"",schema:[{name:"set_point",selector:{boolean:{}}},{name:"shading",selector:{boolean:{}}},{name:"shade_fan",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"curve",selector:xi(e.hass,"curve",an)},{name:"line_width",selector:Vt}]},{type:"grid",name:"",schema:[{name:"current_color",selector:{text:{}}},{name:"set_point_color",selector:{text:{}}},{name:"heating_color",selector:{text:{}}},{name:"cooling_color",selector:{text:{}}}]},...Ci(e.hass),...Si(e.hass)]);return Di(e,"chart",t,Sg)},disconnect(e){bn(e),Pn(e),sr(e)},render(e){const t=Wn(e.raw),o=function(e){const t=(t,o)=>Ce(e[t]??o);return{setPoint:!1!==e.set_point,shading:!1!==e.shading,shadeFan:!0===e.shade_fan,colors:{current:t("current_color","primary"),setPoint:t("set_point_color","red"),heat:t("heating_color",Cg),cool:t("cooling_color",jg),dry:Ng,fan:Lg}}}(e.raw),a=e.items[0],n=$a(e.raw.period),r=fa(e.hass),i=Date.now(),s=Ma(n,i,r,n.navigate?Aa(e.host,n):0),l={start:s.start,end:s.end},c=function(e,t){const o=t.config?.unit_system,a=e.config.unit??o?.temperature??"°C",n=e.config.decimals??1;return{unit:a,decimals:n,text:e=>"number"==typeof e&&Number.isFinite(e)?Mn(kn(e,n,t),a):"—"}}(a,e.hass),d=a.entityId.startsWith("climate."),u=function(e,t,o,a){const{show:n}=e.config;if(!n.name&&!n.value)return W;const r=t.stateObj?.attributes??{},i=t.entityId.startsWith("climate.")&&void 0!==t.stateObj&&!["unavailable","unknown"].includes(t.stateObj.state),s="string"==typeof r[_g.action]?r[_g.action]:void 0,l=kg(s),c=(e,t,o)=>R`<div class="entity series-item" data-index="0" tabindex="0" aria-label=${`${t}, ${o}`}>
      ${e} ${n.name?R`<span class="series-name">${t}</span>`:W}
      ${n.value?R`<span class="series-value">${o}</span>`:W}
    </div>`;return R`<div class="series-header">
    ${c(R`<span class="swatch" style="background:${o.colors.current}"></span>`,t.name,i?a.text(r[_g.current]):t.display)}
    ${o.setPoint&&i?c(R`<span class="swatch set-point-swatch" style="border-color:${o.colors.setPoint}"></span>`,_t(e.hass,"climate_set_point"),Pg(a,r[_g.target],r[_g.low],r[_g.high],e.hass)):W}
    ${i&&s?R`<div
            class="entity series-item action-item"
            data-index="0"
            tabindex="0"
            aria-label=${Fg(e.hass,t,s)}
          >
            <span
              class="swatch action-swatch"
              style=${l?`background:${o.colors[l]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
            ></span>
            <span class="series-value action-value">${Fg(e.hass,t,s)}</span>
          </div>`:W}
  </div>`}(e,a,d?o:{...o,setPoint:!1},c);if(!d)return Vn({...t,header:"above"},u,Hg(_t(e.hass,"climate_not_thermostat",{name:a.name})));const h=function(e){const t={};for(const o of xg)t[o]="action"===o?{entity:e,attribute:_g[o],text:!0}:{entity:e,attribute:_g[o]};return t}(a.entityId),p=on(e.host,e.requestUpdate).get(e.hass,Object.values(h),l,"history",{live:s.live}),m=function(e,t,o,a){const n={};for(const r of xg){const i=e.get(a(t[r]))??[],s=i[i.length-1],l="action"===r?void 0!==s?.s:null!=s?.v;n[r]=s&&l&&s.t<o?[...i,{...s,t:o,carried:!0}]:i}return n}(p.data,h,Math.min(l.end,i),Ra),f=vn({status:p.status,error:p.error,range:l,period:n,live:s.live,back:s.back,zone:r},e),g=f===W&&u===W?W:R`${f}${u}`,v=o.shadeFan?["heat","cool","dry","fan"]:["heat","cool","dry"],y=o.shading?function(e,t,o=wg){const a=[];let n;for(const r of e){if(n&&r.s===n.action)continue;n&&(n.end=r.t,n.end>n.start&&a.push(n),n=void 0);const e=kg(r.s);e&&o.includes(e)&&(n={kind:e,action:r.s,start:r.t,end:t})}return n&&t>n.start&&a.push({...n,end:Math.max(n.end,t)}),a}(m.action,Math.min(l.end,i),v):[],b=o.setPoint?[m.current,m.target,m.low,m.high]:[m.current];let _;if("loading"===p.status?_=Hg(_t(e.hass,"chart_loading")):"error"===p.status?_=Hg(_t(e.hass,"chart_error",{error:p.error??""}),!0):b.every(e=>e.every(e=>null===e.v))&&0===y.length&&(_=Hg(_t(e.hass,"chart_no_data"))),_)return Vn("over"===t.header?{...t,header:"above"}:t,g,_);const x=Un(e,l,xo(b)),{scales:w}=x,$=e.raw.line_width??At,k=e.raw.curve??"smooth",M=Z`${y.map(e=>Z`<rect
        class="action-span action-${e.kind}"
        x=${w.x(e.start)}
        y="0"
        width=${Math.max(0,w.x(e.end)-w.x(e.start))}
        height=${dn}
        fill=${o.colors[e.kind]}
      ></rect>`)}`,z=function(e,t){const o=new Map(t.map(e=>[e.t,e.v]));return e.map(e=>{const t=o.get(e.t);return{t:e.t,v:null!==e.v&&"number"==typeof t?[e.v,t]:null}})}(m.low,m.high),A=o.setPoint?Z`
        <path class="range-band" d=${function(e,t,o){let a="",n=[];const r=e=>{if(!n.length)return;const r=n[n.length-1];if(e>r.t&&n.push({t:e,v:r.v}),n.length>1){const e=n.map(e=>[t(e.t),o(e.v[1])]),r=n.map(e=>[t(e.t),o(e.v[0])]);a+=`M${zg(e[0][0])},${zg(e[0][1])}`;for(let t=1;t<e.length;t++)a+=`H${zg(e[t][0])}V${zg(e[t][1])}`;a+=`V${zg(r[r.length-1][1])}`;for(let t=r.length-2;t>=0;t--)a+=`V${zg(r[t][1])}H${zg(r[t][0])}`;a+="Z"}n=[]};for(const i of e)null===i.v?r(i.t):n.push({t:i.t,v:i.v});return n.length&&r(e[e.length-1].t),a}(z,w.x,w.y)} fill=${o.colors.setPoint}></path>
        ${[m.target,m.low,m.high].map(e=>Z`<path class="set-point" d=${function(e,t){return function(e){const t=[];let o=[];const a=e=>{if(!o.length)return;const a=o[o.length-1];e>a.t&&o.push({t:e,v:a.v}),t.push(o),o=[]};for(const r of e){if(null===r.v){a(r.t);continue}const e=o[o.length-1];e&&e.v===r.v||o.push({t:r.t,v:r.v})}const n=e[e.length-1];return o.length&&a(n.t),t}(e).map(e=>sn(e.map(e=>[t.x(e.t),t.y(e.v)]),"step")).join("")}(e,w)} fill="none" stroke=${o.colors.setPoint}></path>`)}`:W,S=ln(ta(m.current,500)).map(e=>sn(e.map(e=>[w.x(e.t),w.y(e.v)]),k)).join(""),E=Z`${M}${A}<path
      class="current"
      d=${S}
      fill="none"
      stroke=${o.colors.current}
      style="stroke-width:${$}px"
    ></path>`,C=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_climate"),names:a.name}),j=lr(e.raw);return Vn(t,g,Bn({axes:x,ctx:e,content:E,label:C,overlay:R`${"over"===t.header?Yn(g):W}
        ${j?Ug(e,a,m,o,w,c,ir(e.host)):W}`,hover:j?dr(e,l,[m.current,m.target,m.low,m.high,m.action]):void 0}))}},Bg=[4,8,16];function Rg(e,t){const o=360/t;return Math.floor(Na(e)/o+.5)%t}function Zg(e,t){return Ea[e*(16/t)%16]}function qg(e,t,o,a){if(t<0)return null;const n=e[t];return o-n.t<a?n.v:null}function Wg(e,t){let o=0;for(let a=0;a<t.length&&t[a]<=e;a++)o=a;return o}const Vg=e=>Math.round(100*e)/100||0;function Yg(e,t){return[Vg(e*Math.sin(t)),Vg(-e*Math.cos(t))]}yt("en",{editor_sectors:"Directions",editor_sectors_4:"4 (N, E, S, W)",editor_sectors_8:"8 (N, NE, E…)",editor_sectors_16:"16 (N, NNE, NE…)",editor_calm:"Calm below (blank: 0.5 m/s, or the same in km/h, mph or knots)",editor_wind_roles:"The first entity is the wind direction, in degrees or compass points such as SW. The second is the wind speed: without one, the petals only show how often the wind came from each way.",editor_wind_now:"Direction: {direction}. Speed: {speed}.",editor_wind_none:"none",editor_wind_statistics:"Long-term statistics give each hour's average direction. That is only right across north when the sensor records direction as an angle (state class measurement_angle); otherwise an hour swinging between NNW and NNE averages to south. History is exact."});const Gg=wi.filter(e=>"group_by"!==e.name&&"aggregate"!==e.name).map(e=>"period_last"===e.name?{...e,default:30}:"period_unit"===e.name?{...e,default:"day"}:e),Xg=[...Gg,{name:"sectors",path:["sectors"],default:"16"},{name:"calm",path:["calm"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function Jg(e,t){if(void 0===t)return _t(e.hass,"editor_wind_none");const o="string"==typeof t?t:t.entity;return("string"==typeof t?void 0:t.name)??e.hass?.states[o]?.attributes?.friendly_name??o}yt("en",{editor_style_wind_rose:"Wind rose",wind_prevailing:"Prevailing",wind_mean_speed:"Mean speed",wind_strongest:"Strongest",wind_calm:"Calm",wind_speed:"Speed",wind_speed_unit:"Speed ({unit})",wind_share:"Of the time",wind_aria:"Wind rose, prevailing {direction} {share}",wind_aria_calm:"Wind rose, prevailing {direction} {share}, calm {calm}",wind_aria_still:"Wind rose, calm {calm}"});const Kg={last:30,unit:"day"};function Qg(e){const t=e.period;return null==t?$a(Kg):"object"!=typeof t||Array.isArray(t)?$a(t):$a({...Kg,...t})}function ev(e){const t=e.sectors;if(null==t||""===t)return 16;const o="string"==typeof t?Number(t):t;if(!Bg.includes(o))throw new Error(`"sectors" must be one of: ${Bg.join(", ")}`);return o}function tv(e){const t=e.calm;if(null==t||""===t)return;const o="string"==typeof t?Number(t):t;if("number"!=typeof o||!Number.isFinite(o)||o<0)throw new Error('"calm" must be a number of 0 or more');return o}const ov=["color-mix(in srgb, var(--primary-color, #2f6fe4) 35%, var(--card-background-color, #fff))","color-mix(in srgb, var(--primary-color, #2f6fe4) 62%, var(--card-background-color, #fff))","var(--primary-color, #2f6fe4)","color-mix(in srgb, var(--primary-color, #2f6fe4) 68%, var(--primary-text-color, #212121))","color-mix(in srgb, var(--purple-color, #8b6cff) 80%, var(--primary-text-color, #212121))"],av=(e,t)=>kn(e,Number.isInteger(e)?0:1,t.hass);function nv(e,t,o){return Number.isFinite(e)?void 0===t?`${av(e,o)}+`:`${av(e,o)}–${av(t,o)}`:void 0===t?"":`< ${av(t,o)}`}function rv(e,t,o=!1){const a=100*e;return 0===a?`${kn(0,0,t.hass)}%`:`${kn(a,o||a<1?1:0,t.hass)}%`}const iv=new WeakMap;function sv(e,t){iv.get(e.host)!==t&&(void 0===t?iv.delete(e.host):iv.set(e.host,t),e.requestUpdate())}const lv=124;function cv(e,t,o,a){const{rose:n,n:r,bands:i,rings:s}=e,l=2*Math.PI/r,c=.09*l,d=lr(a.raw),u=n.sectors.map((o,s)=>{if(n.totals[s]<=0)return W;const u=s*l-l/2+c,h=s*l+l/2-c;let p=0;const m=o.map((t,o)=>{if(t<=0)return W;const a=function(e,t,o,a){if(t<=e||a<=o)return"";const n=a-o>Math.PI?1:0,[r,i]=Yg(t,o),[s,l]=Yg(t,a),c=`M${r} ${i}A${t} ${t} 0 ${n} 1 ${s} ${l}`;if(e<=0)return`${c}L0 0Z`;const[d,u]=Yg(e,a),[h,p]=Yg(e,o);return`${c}L${d} ${u}A${e} ${e} 0 ${n} 0 ${h} ${p}Z`}(e.radius(p),e.radius(p+t),u,h);return p+=t,Z`<path d=${a} style="fill:${i[o].color}"></path>`}),f=Zg(s,r),g=t.index>=0;return Z`<g
      class="petal ${g?"entity":""}"
      data-index=${g?t.index:W}
      data-sector=${s}
      tabindex=${g||d?0:W}
      aria-label=${`${f} ${rv(n.totals[s],a,!0)}`}
      @pointerenter=${d?()=>sv(a,s):W}
      @pointerleave=${d?()=>sv(a,void 0):W}
      @focus=${d?()=>sv(a,s):W}
      @blur=${d?()=>sv(a,void 0):W}
    >${m}</g>`}),h=function(e){const t=e.length;let o=0,a=1/0;for(let n=0;n<t;n++){const r=(Math.floor(t/8)+n)%t,i=Math.max(e[r],e[(r+1)%t]);i<a-1e-9&&(o=r,a=i)}return 2*(o+.5)*Math.PI/t}(n.totals),p=["N","E","S","W"].map((e,t)=>{const[o,a]=Yg(113,t*Math.PI/2);return Z`<text class="compass ${"N"===e?"north":""}" x=${o} y=${a+4}>${e}</text>`});return R`<svg class="rose" viewBox="${-124} ${-124} ${248} ${248}" role="img" aria-label=${o}>
    ${s.map(t=>Z`<circle class="ring" r=${e.radius(t/100)}></circle>`)}
    <circle class="rim" r=${102}></circle>
    <line class="spoke" x1="0" y1=${-102} x2="0" y2=${102}></line>
    <line class="spoke" x1=${-102} y1="0" x2=${102} y2="0"></line>
    <g class="petals">${u}</g>
    <circle class="calm-circle" r=${9}></circle>
    ${p}
    ${s.map(t=>{const[o,n]=Yg(e.radius(t/100),h),r=Math.sin(h)>=0?"start":"end";return Z`<text class="ring-label" x=${o+("start"===r?3:-3)} y=${n} text-anchor=${r}>${kn(t,Number.isInteger(t)?0:1,a.hass)}%</text>`})}
  </svg>`}function dv(e,t,o,a){const n=void 0!==o&&o.index>=0;return R`<div
    class="stat stat-${a} ${n?"entity":""}"
    data-index=${n?o.index:W}
    tabindex=${n?0:W}
  >
    <span class="stat-label">${e}</span>
    <span class="stat-value">${t}</span>
  </div>`}function uv(e,t,o,a){const n=(e,t)=>_t(a.hass,e,t),{rose:r}=e,i=r.prevailing<0?"—":`${Zg(r.prevailing,e.n)} · ${rv(r.totals[r.prevailing],a)}`,s=e=>null===e?"—":Mn(kn(e,o?.decimals??1,a.hass),o?.unit??"");return R`<div class="readout">
    <div class="stats">
      ${dv(n("wind_prevailing"),i,t.direction,"prevailing")}
      ${o?R`${dv(n("wind_mean_speed"),s(r.meanSpeed),t.speed,"mean")}
            ${dv(n("wind_strongest"),s(function(e){let t=null;for(const o of e){const e="number"==typeof o.max&&Number.isFinite(o.max)?o.max:o.v;null!==e&&(null===t||e>t)&&(t=e)}return t}(o.points)),t.speed,"strongest")}
            ${dv(n("wind_calm"),rv(r.calm,a),t.speed,"calm")}`:W}
    </div>
    ${o?R`<div class="speed-legend">
            <div class="stat-label">${o.unit?n("wind_speed_unit",{unit:o.unit}):n("wind_speed")}</div>
            <div class="keys">
              ${e.bands.map(e=>R`<div class="key">
                    <span class="key-swatch" style="background:${e.color}"></span>
                    <span class="key-label">${e.label}</span>
                  </div>`)}
            </div>
          </div>`:W}
  </div>`}const hv={layout:"chart",group:"distribution",height:280,styles:r`
    ${$n}
    ${fr}
    ${Gn}
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
    <path d="M32 20 L40 24 A9 9 0 0 1 37 27 Z" fill="var(--primary-color, #03a9f4)" opacity="0.4" />`,validate(e){pn(e),Qg(e),cr(e),qn(e),ev(e),tv(e)},editor:function(e){const t=Pi(`wind_rose|${$i(e.config)}`,e.hass,()=>[...ki(e.hass,e.config).filter(e=>!e.schema?.some(e=>"group_by"===e.name)),{type:"grid",name:"",schema:[{name:"sectors",selector:xi(e.hass,"sectors",Bg.map(String))},{name:"calm",selector:{number:{min:0,mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]),o=e.config.entities??[],a={...e,config:(n=e.config,"number"==typeof n.sectors?{...n,sectors:String(n.sectors)}:n),commit:t=>e.commit(function(e){if("string"!=typeof e.sectors)return e;const t=Number(e.sectors);return{...e,sectors:Number.isFinite(t)?t:e.sectors}}(t))};var n;const r="margin: 0 0 12px; color: var(--secondary-text-color); font-size: 0.875em; line-height: 1.4;";return R`<p class="wind-roles" style=${r}>
      ${_t(e.hass,"editor_wind_roles")}
      <br /><b
        >${_t(e.hass,"editor_wind_now",{direction:Jg(e,o[0]),speed:Jg(e,o[1])})}</b
      >
    </p>
    ${"statistics"===e.config.source?R`<p class="wind-statistics" style=${r}>${_t(e.hass,"editor_wind_statistics")}</p>`:W}
    ${Di(a,"chart",t,Xg)}`},disconnect(e){bn(e),iv.delete(e)},render(e){const t={...Wn(e.raw),header:"above"},o=function(e){const t=e.config.entities.length?e.config.entities:e.items.map(e=>e.config),o=t=>t&&{id:t.entity,entity:t,index:e.items.findIndex(e=>e.entityId===t.entity)};return{direction:o(t[0]),speed:o(t[1])}}(e),a=o.direction;if(!a)return R``;const n=function(e,t,o,a=Date.now()){const n=Qg(e.raw),r=e.raw.source??"history",i=fa(e.hass),s=Ma(n,a,i,n.navigate?Aa(e.host,n):0),l={start:s.start,end:s.end},c=[{entity:t.id,attribute:t.entity.attribute,bearing:!0},...o?[{entity:o.id,attribute:o.entity.attribute}]:[]],d="statistics"===r?function(e){return{period:e.end-e.start<=1728e5?"5minute":"hour",types:["mean","max"],value:"mean"}}(l):void 0,u=d?Ga[d.period]:1/0,h=d?{start:l.start-u,end:l.end}:l,p=on(e.host,e.requestUpdate).get(e.hass,c,h,r,{live:s.live,statistics:d}),m=e=>p.data.get(Ra(e))??[],f=m(c[0]),g=o?m(c[1]):void 0;return{frame:{status:p.status,error:p.error,range:l,period:n,source:r,series:[],live:s.live,back:s.back,zone:i},direction:f,speed:g?.some(e=>null!==e.v)?g:void 0,until:Math.min(l.end,a),maxHold:u}}(e,a,o.speed),{frame:r}=n,i=vn(r,e),s=R`<div class="chart-message">${_t(e.hass,"chart_no_data")}</div>`,l="ready"!==r.status?xn(r,e):n.direction.every(e=>null===e.v)?s:void 0;if(l)return Vn(t,i,l);const c=ev(e.raw),d=n.speed?o.speed:void 0,u=d?d.entity.unit??(d.entity.attribute?"":String(e.hass.states[d.id]?.attributes?.unit_of_measurement??"")):void 0,h=function(e){switch((e??"").trim().toLowerCase()){case"km/h":case"kmh":case"kph":return{from:[0,12,20,29,39],calm:1.8};case"mph":return{from:[0,8,13,19,25],calm:1.1};case"kn":case"kt":case"kts":case"knot":case"knots":return{from:[0,7,11,17,22],calm:1};case"ft/s":return{from:[0,10,20,30,40],calm:1.6};default:return{from:[0,3,6,9,12],calm:.5}}}(u),p=d?function(e,t,o){return e!==st&&e.length>0?e.map((t,a)=>({from:t.from,color:Ce(t.color),label:t.label??nv(t.from,e[a+1]?.from,o)})):t.map((e,a)=>({from:e,color:ov[a%ov.length],label:nv(e,t[a+1],o)}))}(as(d.entity.severity,e.hass),h.from,e):[{from:0,color:"var(--primary-color, #2f6fe4)",label:""}],m=d?tv(e.raw)??h.calm:0,f=function(e,t,o,a=1/0){const n=new Set([o]);for(const c of t?[e,t]:[e])for(const e of c)n.add(e.t),Number.isFinite(a)&&n.add(e.t+a);const r=[...n].filter(e=>e<=o).sort((e,t)=>e-t),i=[];let s=-1,l=-1;for(let c=0;c+1<r.length;c++){const o=r[c],n=r[c+1]-o;for(;s+1<e.length&&e[s+1].t<=o;)s++;const d=qg(e,s,o,a);if(null===d)continue;let u=null;if(t){for(;l+1<t.length&&t[l+1].t<=o;)l++;if(u=qg(t,l,o,a),null===u)continue}const h=i[i.length-1];h&&h.dir===d&&h.speed===u?h.ms+=n:i.push({dir:d,speed:u,ms:n})}return i}(n.direction,n.speed,n.until,n.maxHold),g=function(e,t,o,a=0){const n=Math.max(1,o.length),r=Array.from({length:t},()=>new Array(n).fill(0));let i=0,s=0,l=0,c=0;for(const m of e){if(i+=m.ms,null!==m.speed&&(l+=m.ms,c+=m.speed*m.ms,m.speed<a)){s+=m.ms;continue}const e=null===m.speed?0:Wg(m.speed,o);r[Rg(m.dir,t)][e]+=m.ms}const d=e=>i>0?e/i:0,u=r.map(e=>e.map(d)),h=u.map(e=>e.reduce((e,t)=>e+t,0));let p=-1;return h.forEach((e,t)=>{e>0&&(p<0||e>h[p])&&(p=t)}),{total:i,calm:d(s),sectors:u,totals:h,prevailing:p,meanSpeed:l>0?c/l:null}}(f,c,p.map(e=>e.from),m);if(g.total<=0)return Vn(t,i,s);const v=function(e){if(!(e>0))return[];const t=e/3,o=10**Math.floor(Math.log10(t)),a=[1,2,2.5,5,10].map(e=>e*o).find(e=>e>=t-1e-9)??10*o,n=Math.max(1,Math.ceil(e/a-1e-9));return Array.from({length:n},(e,t)=>Math.round((t+1)*a*1e3)/1e3)}(100*Math.max(0,...g.totals)),y=(v[v.length-1]??100)/100,b={rose:g,n:c,bands:p,rings:v,radius:e=>10+e/y*90},_=t=>rv(t,e),x={direction:g.prevailing<0?"":Zg(g.prevailing,c),share:g.prevailing<0?"":_(g.totals[g.prevailing]),calm:_(g.calm)},w=_t(e.hass,g.prevailing<0?"wind_aria_still":d?"wind_aria_calm":"wind_aria",x),$=d?{unit:u??"",decimals:d.index>=0?e.items[d.index].decimals:1,points:n.speed??[]}:void 0;return Vn(t,i,R`<div class="wind">
        <div class="rose-wrap">
          ${cv(b,a,w,e)} ${function(e,t,o){const a=iv.get(o.host);if(!(void 0!==a&&lr(o.raw)&&e.rose.totals[a]>0))return W;const n=2*a*Math.PI/e.n,[r,i]=Yg(e.radius(e.rose.totals[a]),n),s=r>0?"left":"right",l=void 0===t?[{color:e.bands[0].color,name:_t(o.hass,"wind_share"),share:e.rose.totals[a]}]:e.rose.sectors[a].map((o,a)=>({color:e.bands[a].color,name:Mn(e.bands[a].label,t),share:o})).filter(e=>e.share>0);return R`<div class="hover-layer" aria-hidden="true">
    <div
      class="tooltip rose-tip ${s}"
      style="left:${(r+lv)/248*100}%;top:${(i+lv)/248*100}%"
    >
      <div class="tooltip-time">${Zg(a,e.n)} · ${rv(e.rose.totals[a],o,!0)}</div>
      ${l.map(e=>R`<div class="tooltip-row">
            <span class="swatch" style="background:${e.color}"></span>
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${rv(e.share,o,!0)}</span>
          </div>`)}
    </div>
  </div>`}(b,$?$.unit:void 0,e)}
        </div>
        ${uv(b,{direction:a,speed:d},$,e)}
      </div>`)}},pv=2*Math.PI,mv=1440,fv=6e4,gv=["on","open","opening","closing","home","playing","heating","cooling","drying","active","running","cleaning","detected"],vv=new Set(["unavailable","unknown"]);function yv(e){return void 0===e||""===e||vv.has(e)}function bv(e,t,o,a){const n=e[e.length-1];n&&n.end===t?n.end=o:e.push(a?{start:t,end:o,carried:a}:{start:t,end:o})}function _v(e,t){const o=[];for(const a of e){const e=Math.max(t.start,a.start),n=Math.min(t.end,a.end);if(n<=e)continue;const r=!0===a.carried||a.start<t.start;o.push(r?{start:e,end:n,carried:r}:{start:e,end:n})}return o}function xv(e){return e.filter(e=>!e.carried).length}function wv(e,t,o){return(e+la(e,o)-(t+la(t,o)))/fv}function $v(e,t,o){const a=e.start,n=e.end,r=la(a,o),i=la(Math.max(a,n-1e3),o),s=t+la(t,o),l=(e,t)=>(e=>Math.min(mv,Math.max(0,e)))((e+t-s)/fv);if(r===i)return[[l(a,r),l(n,r)]];const c=function(e,t,o){const a=la(e,o);for(;t-e>1e3;){const n=Math.floor((e+t)/2);la(n,o)===a?e=n:t=n}return 1e3*Math.floor(t/1e3)}(a,n-1e3,o);return[[l(a,r),l(c,r)],[l(c,i),l(n,i)]].filter(([e,t])=>t>e)}function kv(e){return e/mv*pv}function Mv(e,[t,o]){const a=Math.max(0,Math.ceil(t-.5)),n=Math.min(mv,Math.ceil(o-.5));for(let r=a;r<n;r++)e[r]=1}const zv=[15,30,60];function Av(e,t){const o=t*fv,a=[];for(let n=e.start;n<e.end;n+=o)a.push(n);return a.push(e.end),a}const Sv=new Set(["sum","change"]);function Ev(e,t){if("max"===t)return Math.max(...e);if("min"===t)return Math.min(...e);if("first"===t)return e[0];if("last"===t)return e[e.length-1];const o=e.reduce((e,t)=>e+t,0);return Sv.has(t)?o:o/e.length}function Cv(e){return Sv.has(e)}function jv(e){const t=Math.max(0,Math.round(e/fv)),o=Math.floor(t/60),a=t-60*o;return 0===o?`${a} m`:a?`${o} h ${a} m`:`${o} h`}function Nv(e,t){return[Lv(e*Math.sin(t)),Lv(-e*Math.cos(t))]}function Lv(e){return Math.round(100*e)/100||0}function Tv(e,t,o,a){if(t<=0||a<=o)return"";const n=Math.max(0,e);if(a-o>=pv-1e-6){const e=(e,t)=>{const[o,a]=Nv(e,0),[n,r]=Nv(e,Math.PI);return`M${o} ${a}A${e} ${e} 0 1 ${t} ${n} ${r}A${e} ${e} 0 1 ${t} ${o} ${a}Z`};return n>0?`${e(t,1)}${e(n,0)}`:e(t,1)}const r=a-o>Math.PI?1:0,[i,s]=Nv(t,o),[l,c]=Nv(t,a),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===n)return`${d}L0 0Z`;const[u,h]=Nv(n,a),[p,m]=Nv(n,o);return`${d}L${u} ${h}A${n} ${n} 0 ${r} 0 ${p} ${m}Z`}yt("en",{editor_days:"Days (more than 1 shows the average day)",editor_center:"In the middle",editor_day_clock_center_total:"Time on",editor_day_clock_center_now:"The time now",editor_day_clock_center_none:"Nothing",editor_bucket:"One bar for every",editor_bucket_15:"15 minutes",editor_bucket_30:"30 minutes",editor_bucket_60:"Hour",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_ring_color:"Colour",editor_active:"Counts as on (empty: on, open, heating, home…)"});const Ov=[{name:"days",path:["days"],default:1},{name:"period_offset",path:["period","offset"],default:0},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"center",path:["center"],default:"total"},{name:"bucket",path:["bucket"],default:"60"},{name:"aggregate",path:["aggregate"],default:"auto"},{name:"tooltip",path:["tooltip"],default:!0}];const Fv=[{type:"grid",name:"",schema:[{name:"ring_color",selector:{text:{}}},{name:"active",selector:{text:{multiple:!0}}}]}],Pv=[{name:"ring_color",path:["color"]},{name:"active",path:["active"]}];yt("en",{editor_style_day_clock:"24-hour clock",day_clock_times_one:"once",day_clock_times:"{n} times",day_clock_a_day:"{text} a day",day_clock_busiest:"{total} · busiest {time}",day_clock_peak:"peak {value} at {time}",day_clock_state:"{name} {state}",day_clock_per_day:"{label} per day",day_clock_no_data:"Nothing recorded",day_clock_now:"Now",day_clock_on:"on",day_clock_average:"Average day · last {n} days",day_clock_on_days:"on {on} of {of} days",day_clock_so_far:"{duration} so far",day_clock_range:"{from} – {to}",day_clock_average_value:"{value} on average"});const Dv=["total","now","none"],Uv=new Set(["alarm_control_panel","automation","binary_sensor","calendar","climate","cover","device_tracker","fan","humidifier","input_boolean","lawn_mower","light","lock","media_player","person","remote","schedule","script","siren","switch","timer","vacuum","valve","water_heater"]),Hv=e=>e.split(".")[0];function Iv(e){const t=e.config.active;if("string"==typeof t&&""!==t.trim()||Array.isArray(t)&&t.length>0)return"state";if(Uv.has(Hv(e.entityId)))return"state";const o=e.stateObj?.attributes??{};return e.config.attribute||void 0===o.unit_of_measurement&&void 0===o.state_class?e.available?"numeric":"state":"numeric"}function Bv(e,t){return e.config.attribute?e.config.attribute:"state"===t&&"climate"===Hv(e.entityId)?"hvac_action":void 0}function Rv(e,t){if(void 0!==t.aggregate)return t.aggregate;const o=e.stateObj?.attributes?.state_class;return"total_increasing"===o||"total"===o?"change":"mean"}function Zv(e,t,o,a){const n=t.stateObj;let r=o.replace(/_/g," ");if(n){const t=a?e.formatEntityAttributeValue?.(n,a,o):e.formatEntityState?.(n,o);t&&(r=t)}return r.toLocaleLowerCase()}function qv(e,t){const o=Math.round(e)%mv,a=Date.UTC(2e3,0,1,Math.floor(o/60),o%60);return new Intl.DateTimeFormat(t?.locale?.language??"en",{hour:"numeric",minute:"2-digit",hour12:Go(t),timeZone:"UTC"}).format(a)}function Wv(e,t,o){return Mn(kn(e,t.decimals,o),t.unit)}function Vv(e,t=Date.now()){const{raw:o,hass:a}=e,n=o.days??1,r=Number(o.bucket??60),i=function(e,t){const o=$a(e.period);return 1===t?{last:1,unit:"day",calendar:"day",offset:o.offset,navigate:o.navigate,until:"end"}:{last:t,unit:"day",offset:o.offset,navigate:o.navigate,until:"end"}}(o,n),s=Math.max(0,i.offset+(i.navigate?Aa(e.host,i):0)),l=fa(a),c=function(e,t,o,a){const n=ha("day",ua("day",e,t),-a*o,t),r=[];for(let i=o-1;i>=-1;i--)r.push(ha("day",n,-i,t));return r}(t,l,n,s),d=0===s,u=c[c.length-1],h=Math.min(u,t),p=e.items.map(Iv),m=e.items.map((e,t)=>({entity:e.entityId,attribute:Bv(e,p[t]),text:!0})),f=on(e.host,e.requestUpdate).get(a,m,{start:c[0],end:d?t:u},"history",{live:d}),g={start:c[0],end:h},v=Math.max(1,c.slice(0,-1).filter(e=>e<h).length),y=e.items.map((e,t)=>{const i=p[t],s=e.config,d=e.stateObj?f.data.get(Ra(m[t]))??[]:[],u={index:t,entity:e,kind:i,color:Ce(s.color??un[t%un.length]),missing:!e.stateObj,hasData:!1,intervals:[],runs:[],slots:[],heights:[],aggregate:Rv(e,o),totalMs:0,count:0,stat:""};if("state"===i){const e=function(e){if("string"==typeof e&&""!==e.trim())return new Set([e.trim()]);if(Array.isArray(e)){const t=e.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>e.trim());if(t.length)return new Set(t)}return new Set(gv)}(s.active),t=function(e,t,o){const a={active:[],known:[]};for(let n=0;n<e.length;n++){const r=e[n],i=n+1<e.length?e[n+1].t:t.end,s=Math.max(t.start,r.t),l=Math.min(t.end,i);if(l<=s||yv(r.s))continue;const c=!0===r.carried||r.t<t.start;bv(a.known,s,l,c),o.has(r.s)&&(bv(a.active,s,l,c),a.word=r.s)}return a}(d,g,e);u.hasData=t.known.length>0,u.word=t.word;const o=t.active;1===n?u.intervals=o:u.runs=function(e,t,o,a){const n=new Uint16Array(mv),r=new Uint16Array(mv);for(let s=0;s+1<o.length;s++){const i={start:o[s],end:o[s+1]},l=new Uint8Array(mv),c=new Uint8Array(mv);for(const e of _v(t,i))for(const t of $v(e,i.start,a))Mv(c,t);for(const t of _v(e,i))for(const e of $v(t,i.start,a))Mv(l,e);for(let e=0;e<mv;e++)r[e]+=c[e],n[e]+=l[e]&c[e]}const i=[];for(let s=0;s<mv;s++){if(0===n[s])continue;const e=i[i.length-1];e&&e.to===s&&e.on===n[s]&&e.of===r[s]?e.to=s+1:i.push({from:s,to:s+1,on:n[s],of:r[s]})}return i}(o,t.known,c,l.timeZone),u.totalMs=o.reduce((e,t)=>e+t.end-t.start,0)/v;let r=0;for(let a=0;a+1<c.length;a++)r+=xv(_v(o,{start:c[a],end:c[a+1]}));u.count=r/v;const i=e=>1===n?e:_t(a,"day_clock_a_day",{text:e}),h=[i(jv(u.totalMs))];u.count>0&&h.push(i(function(e,t){const o=Math.round(10*t)/10;return 1===o?_t(e,"day_clock_times_one"):_t(e,"day_clock_times",{n:o})}(a,u.count))),u.stat=h.join(" · ")}else{const t=d.map(e=>({...e,v:Ta(e.s),s:void 0}));u.slots=function(e,t,o,a,n,r){const i=new Map;for(let s=0;s+1<t.length;s++){const l={start:t[s],end:t[s+1]};if(l.start>=n)break;const c=Va(e,Av(l,o),a,n),d=new Map;for(const e of c){if(null===e.v)continue;const t=Math.floor(wv(e.t,l.start,r)/o);t<0||t*o>=mv||d.set(t,[...d.get(t)??[],e.v])}for(const[e,t]of d)i.set(e,[...i.get(e)??[],Ev(t,a)])}return[...i.entries()].sort((e,t)=>e[0]-t[0]).map(([e,t])=>({index:e,v:t.reduce((e,t)=>e+t,0)/t.length,days:t.length}))}(t,c,r,u.aggregate,h,l.timeZone);const o=Cv(u.aggregate);if(u.heights=function(e,t){if(0===e.length)return[];const o=e.map(e=>e.v);if(t){const e=Math.max(...o.map(Math.abs));return o.map(t=>e>0?Math.abs(t)/e:0)}const a=Math.min(...o),n=Math.max(...o);return o.map(e=>n>a?.15+.85*(e-a)/(n-a):1)}(u.slots,o),u.hasData=u.slots.length>0,u.hasData){const t=u.slots.reduce((e,t)=>t.v>e.v?t:e),i=qv(t.index*r,a);if(o){const t=Wv(u.slots.reduce((e,t)=>e+t.v,0),e,a);u.stat=_t(a,"day_clock_busiest",{total:1===n?t:_t(a,"day_clock_a_day",{text:t}),time:i})}else u.stat=_t(a,"day_clock_peak",{value:Wv(t.v,e,a),time:i})}}return u.missing?u.stat=_t(a,"entity_not_found"):u.hasData||"ready"!==f.status||(u.stat=_t(a,"day_clock_no_data")),u});return{status:f.status,error:f.error,rings:y,bounds:c,days:n,bucket:r,live:d,now:t,period:i,back:s,zone:l}}const Yv=new WeakMap;function Gv(e){let t=Yv.get(e);return t||(t={},Yv.set(e,t)),t}function Xv(e,t,o){const a=Gv(e.host);void 0!==a.timer&&clearTimeout(a.timer),a.timer=void 0,a.ring===t&&a.item===o||(a.ring=t,a.item=o,e.requestUpdate())}const Jv=new WeakMap;function Kv(e,t){if(Jv.has(e.host))return;const o=6e4-t%6e4+50;Jv.set(e.host,setTimeout(()=>{Jv.delete(e.host),"undefined"!=typeof document&&"hidden"===document.visibilityState?Kv(e,Date.now()):e.requestUpdate()},o))}const Qv=-132,ey=-120,ty=264,oy=240,ay=92;function ny(e,t,o){const a=Yv.get(e.host);if(void 0===a?.ring||void 0===a.item)return W;const n=t.rings[a.ring],r=o[a.ring]?.[a.item];if(!n||!r)return W;const{time:i,value:s}=function(e,t,o,a){const n=(e,t)=>_t(a,"day_clock_range",{from:e,to:t});if("numeric"===e.kind){const r=e.slots[t],i=n(qv(r.index*o.bucket,a),qv((r.index+1)*o.bucket,a)),s=Wv(r.v,e.entity,a);return{time:i,value:1===o.days?s:_t(a,"day_clock_average_value",{value:s})}}if(o.days>1){const o=e.runs[t];return{time:n(qv(o.from,a),qv(o.to,a)),value:_t(a,"day_clock_on_days",{on:o.on,of:o.of})}}const r=e.intervals[t],i=o.live&&r.end>=o.now-1e3,s=i?_t(a,"day_clock_now").toLocaleLowerCase():Ko(r.end,a),l=jv(r.end-r.start);return{time:n(Ko(r.start,a),s),value:i?_t(a,"day_clock_so_far",{duration:l}):l}}(n,r.item,t,e.hass),[l,c]=Nv(r.r+4,r.angle);return R`<div class="dc-tip tooltip ${`${l<0?"tip-right":"tip-left"} ${c<0?"tip-down":"tip-up"}`}" style="left:${(l-Qv)/ty*100}%;top:${(c-ey)/oy*100}%" aria-hidden="true">
    <div class="tooltip-time">${i}</div>
    <div class="tooltip-row">
      <span class="swatch" style="background:${n.color}"></span>
      <span class="tooltip-name">${n.entity.name}</span>
      <span class="tooltip-value">${s}</span>
    </div>
  </div>`}function ry(e,t,o){const a=t.toLocaleLowerCase().includes(o.toLocaleLowerCase())?_t(e,"day_clock_on"):o;return _t(e,"day_clock_state",{name:t,state:a})}function iy(e,t){const o=e.entity;if(!o.stateObj)return o.display;if("numeric"===e.kind)return _t(t,"day_clock_state",{name:o.name,state:o.display});const a=Bv(o,"state"),n=a?o.stateObj.attributes?.[a]:o.stateObj.state;return"string"!=typeof n?_t(t,"day_clock_state",{name:o.name,state:o.display}):ry(t,o.name,Zv(t,o,n,a))}function sy(e){return e.rings.find(e=>!e.missing)}function ly(e,t,o){const a=Math.min(o,t/Math.max(1,.56*e.length)),n=.62*o;if(a>=n)return{size:a,text:e};const r=Math.max(3,Math.floor(t/(.56*n))-1);return{size:n,text:`${e.slice(0,r).trimEnd()}…`}}function cy(e,t,o){const a=function(e,t){const o=e.raw.center??"total";if("none"===o||0===t.rings.length)return;const{hass:a}=e,n=sy(t);if("now"===o&&t.live&&1===t.days&&n)return[Ko(t.now,a),iy(n,a)];const r=t.rings.find(e=>"state"===e.kind&&e.hasData);if(r){const e=r.word?Zv(a,r.entity,r.word,Bv(r.entity,"state")):_t(a,"day_clock_on"),o=ry(a,r.entity.name,e);return[jv(r.totalMs),1===t.days?o:_t(a,"day_clock_per_day",{label:o})]}const i=t.rings.find(e=>"numeric"===e.kind&&e.hasData);if(!i)return;const s=Cv(i.aggregate)?Wv(i.slots.reduce((e,t)=>e+t.v,0),i.entity,a):i.entity.display;return[s,i.entity.name]}(e,t);if(!a)return W;const n=Math.min(18,.4*o),r=Math.min(11,.25*o),i=(1.05*n+1.3*r)/2,s=2*Math.sqrt(Math.max(0,o*o-i*i))-8,l=ly(a[0],s,n),c=ly(a[1],s,r),d=.3*l.size+c.size,u=(-.75*l.size+d+.3*c.size)/2;return Z`<g class="dc-centre" aria-hidden="true">
    <text class="dc-centre-value" y=${-u} font-size=${l.size}>${l.text}</text>
    <text class="dc-centre-label" y=${d-u} font-size=${c.size}>${c.text}</text>
  </g>`}function dy(e,t){const o=function(e,t=92,o=44){const a=e.map(e=>"state"===e?15:22),n=a.reduce((e,t)=>e+t,0)+4*Math.max(0,e.length-1),r=t-o,i=n>r?r/n:1,s=[];let l=t;for(const c of a){const e=c*i;s.push({r0:l-e,r1:l}),l-=e+4*i}return{rings:s,hole:s.length?s[s.length-1].r0:t}}(t.rings.map(e=>e.kind),ay),a=lr(e.raw),n=t.rings.map((e,a)=>{const{r0:n,r1:r}=o.rings[a];return"state"===e.kind?function(e,t,o,a){const n=t.zone.timeZone;return 1===t.days?e.intervals.map((e,r)=>{const i=$v(e,t.bounds[0],n),s=i.map(([e,t])=>Tv(o,a,kv(e),kv(t))).join("");return{d:s,angle:kv(i.length?(i[0][0]+i[i.length-1][1])/2:0),r:a,item:r}}):e.runs.map((e,t)=>({d:Tv(o,a,kv(e.from),kv(e.to)),angle:kv((e.from+e.to)/2),r:a,opacity:Math.max(.12,e.on/Math.max(1,e.of)),item:t}))}(e,t,n,r):function(e,t,o,a){const n=mv/t.bucket,r=Math.min(.03,pv/n/8),i=Cv(e.aggregate),s=[];return e.slots.forEach((t,l)=>{if(i&&0===t.v)return;const c=t.index/n*pv+r,d=(t.index+1)/n*pv-r,u=o+Math.max(.04,e.heights[l])*(a-o);s.push({d:Tv(o,u,c,d),angle:(c+d)/2,r:u,item:l})}),s}(e,t,n,r)}),r=Yv.get(e.host),i=t.rings.map((i,s)=>{const{r0:l,r1:c}=o.rings[s],d=1===t.days&&n[s].length<=48,u="state"===i.kind?Z`<path class="dc-track" d=${Tv(l,c,0,pv)}></path>`:Z`<circle class="dc-base" r=${l}></circle>`;return Z`<g
      class="entity dc-ring ${i.kind}"
      data-index=${i.index}
      tabindex="0"
      role="group"
      aria-label=${`${i.entity.name}, ${i.stat}`}
    >
      ${u}
      ${n[s].map((t,o)=>Z`<path
            class="dc-mark ${r?.ring===s&&r.item===o?"hover":""}"
            d=${t.d}
            fill=${i.color}
            fill-opacity=${t.opacity??W}
            tabindex=${d?"0":W}
            @pointerenter=${a?()=>Xv(e,s,o):W}
            @pointerdown=${a?()=>Xv(e,s,o):W}
            @pointerleave=${a?t=>function(e,t){if("touch"!==t.pointerType&&"pen"!==t.pointerType)return void Xv(e,void 0,void 0);const o=Gv(e.host);void 0!==o.timer&&clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=void 0,Xv(e,void 0,void 0)},ar)}(e,t):W}
            @focus=${a?()=>Xv(e,s,o):W}
            @blur=${a?()=>Xv(e,void 0,void 0):W}
          ></path>`)}
    </g>`}),s=function(e){const t=e?.locale?.language??"en";let o=Go(e);if(void 0===o)try{o=!0===new Intl.DateTimeFormat(t,{hour:"numeric"}).resolvedOptions().hour12}catch{o=!1}return o?[0,6,12,18].map(e=>new Intl.DateTimeFormat(t,{hour:"numeric",hour12:!0,timeZone:"UTC"}).format(Date.UTC(2e3,0,1,e))):["00","06","12","18"]}(e.hass),l=Array.from({length:24},(e,t)=>{const o=t/24*pv,a=t%6==0,[n,r]=Nv(95,o),[i,s]=Nv(ay+(a?9:6),o);return Z`<line class="dc-tick ${a?"major":""}" x1=${n} y1=${r} x2=${i} y2=${s}></line>`}),c=Z`
    <text class="dc-label" x="0" y=${-107} text-anchor="middle">${s[0]}</text>
    <text class="dc-label" x=${104} y="3.5" text-anchor="start">${s[1]}</text>
    <text class="dc-label" x="0" y=${114} text-anchor="middle">${s[2]}</text>
    <text class="dc-label" x=${-104} y="3.5" text-anchor="end">${s[3]}</text>`;let d=W;if(t.live&&1===t.days){const e=kv(wv(t.now,t.bounds[0],t.zone.timeZone)),[a,n]=Nv(o.hole,e),[r,i]=Nv(101,e);d=Z`
      <path class="dc-future" d=${Tv(o.hole-1,93,e,pv)}></path>
      <line class="dc-hand" x1=${a} y1=${n} x2=${r} y2=${i}></line>
      <circle class="dc-hand-dot" cx=${r} cy=${i} r="2.6"></circle>`}const u=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_day_clock"),names:t.rings.map(e=>e.entity.name).join(", ")});return R`<div class="dc-dial">
    <svg class="dc-svg" viewBox="${Qv} ${ey} ${ty} ${oy}" role="img" aria-label=${u}>
      ${l}${c}
      <g class="dc-marks">${i}</g>
      ${d} ${cy(e,t,o.hole)}
    </svg>
    ${a?ny(e,t,n):W}
  </div>`}function uy(e,t,o=!1){return R`<div class="frame">
    ${e}
    <div class="chart-message ${o?"error":""}">${t}</div>
  </div>`}const hy={layout:"chart",group:"history",height:280,styles:r`
    ${$n}
    ${fr}
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
      stroke-linecap="round" />`,validate:function(e){cr(e),$a(e.period);const t=e.days;if(void 0!==t&&("number"!=typeof t||!Number.isInteger(t)||t<1||t>31))throw new Error('"days" must be a whole number from 1 to 31');if(void 0!==e.center&&!Dv.includes(e.center))throw new Error(`"center" must be one of: ${Dv.join(", ")}`);if(void 0!==e.bucket&&!zv.includes(Number(e.bucket)))throw new Error(`"bucket" must be one of: ${zv.join(", ")}`);if(void 0!==e.aggregate&&!qa.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${qa.join(", ")}`);for(const o of e.entities??[]){if("object"!=typeof o||null===o)continue;const e=o.active;if(void 0===e)continue;const t="string"==typeof e&&""!==e.trim()||Array.isArray(e)&&e.every(e=>"string"==typeof e);if(!t)throw new Error('"active" must be a state or a list of states')}},editor:function(e){var t;return Di({...e,config:(t=e.config,"number"==typeof t.bucket?{...t,bucket:String(t.bucket)}:t),commit:t=>e.commit(function(e){return"string"==typeof e.bucket?{...e,bucket:Number(e.bucket)}:e}(t))},"chart",Pi("day_clock",e.hass,()=>{return[{type:"grid",name:"",schema:[{name:"days",selector:{number:{min:1,max:31,mode:"box"}}},{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"center",selector:xi(t=e.hass,"day_clock_center",["total","now","none"])},{type:"grid",name:"",schema:[{name:"bucket",selector:xi(t,"bucket",zv.map(String))},{name:"aggregate",selector:xi(t,"aggregate",["auto",...qa])}]},{name:"tooltip",selector:{boolean:{}}}];var t}),Ov)},entityFields:function(){return{schema:Fv,fields:Pv}},disconnect(e){bn(e),function(e){const t=Jv.get(e);void 0!==t&&clearTimeout(t),Jv.delete(e)}(e);const t=Yv.get(e);void 0!==t?.timer&&clearTimeout(t.timer),Yv.delete(e)},render(e){const t=Vv(e);t.live&&Kv(e,t.now);const o=vn({period:t.period,range:{start:t.bounds[0],end:t.bounds[t.bounds.length-1]},back:t.back,zone:t.zone},e,t.now);return"loading"===t.status?uy(o,_t(e.hass,"chart_loading")):"error"===t.status?uy(o,_t(e.hass,"chart_error",{error:t.error??""}),!0):t.rings.every(e=>!e.hasData)?uy(o,_t(e.hass,"chart_no_data")):R`<div class="frame">
      ${o}
      <div class="dc-body">${dy(e,t)} ${function(e,t){const{hass:o}=e;let a=W;return t.days>1?a=R`<div class="dc-foot">
      <div class="dc-stat">${_t(o,"day_clock_average",{n:t.days})}</div>
    </div>`:t.live&&sy(t)&&(a=R`<div class="dc-foot">
      <div class="dc-stat">${_t(o,"day_clock_now")}</div>
      <div class="dc-now">${Ko(t.now,o)} · ${iy(sy(t),o)}</div>
    </div>`),R`<div class="dc-legend">
    ${t.rings.map(e=>R`<div class="dc-item ${e.missing?"missing":""}">
          <span class="dc-swatch" style="background:${e.color}"></span>
          <div class="dc-text">
            <div class="dc-name">${e.entity.name}</div>
            <div class="dc-stat">${e.stat}</div>
          </div>
        </div>`)}
    ${a}
  </div>`}(e,t)}</div>
    </div>`}};function py(e,t){if(null!=e&&""!==e){if("number"==typeof e&&Number.isFinite(e))return{value:e,soft:!1};if("string"==typeof e){const t=e.trim(),o=t.startsWith("~"),a=Number(o?t.slice(1):t);if(""!==t&&"~"!==t&&Number.isFinite(a))return{value:a,soft:o}}throw new Error(`"${t}" must be a number, or ~ and a number for a soft limit (e.g. "~0")`)}}function my(e,t={}){let[o,a]=e??[t.min?.value??0,t.max?.value??1];if(t.fromZero&&(o>0&&(o=0),a<0&&(a=0)),void 0!==t.minRange&&a-o<t.minRange){const e=(o+a)/2;o=e-t.minRange/2,a=e+t.minRange/2}let[n,r]=wo([o,a],.1);t.fromZero&&0===o&&(n=0),t.fromZero&&0===a&&(r=0);const{min:i,max:s}=t;return i&&(n=i.soft&&o<i.value?n:i.value),s&&(r=s.soft&&a>s.value?r:s.value),r<=n&&(r=n+1),[n,r]}function fy(e,t,o){const a=[];for(const c of e){const e=Math.min(c.end??c.t,o);if(c.t>=o)break;a.push({...c,start:c.t,end:e,t:Math.round((c.t+e)/2)})}const n=a.filter(e=>null!==e.v);if(0===n.length)return a;const r=a[0],i=a[a.length-1],s=[...a];null!==r.v&&r.t>t.start&&s.unshift({t:t.start,v:r.v,carried:!0});const l=Math.min(t.end,o);return null!==i.v&&i.t<l&&s.push({t:l,v:i.v,carried:!0}),s}function gy(e,t){if(void 0!==e&&!qa.includes(e))throw new Error(`${t} must be one of: ${qa.join(", ")}`)}yt("en",{editor_points_per_hour:"Points per hour (0 draws every reading)",editor_graph:"Graph",editor_graph_line:"Line",editor_graph_bar:"Bars",editor_graph_none:"None (value only)",editor_fill:"Fill under the line",editor_fill_solid:"Solid",editor_fill_fade:"Fade",editor_fill_none:"None",editor_points:"Dots on the line",editor_points_hover:"On hover",editor_points_always:"Always",editor_points_never:"Never",editor_trend_labels:"Highest and lowest labels",editor_labels_hover:"On hover",editor_labels_always:"Always",editor_labels_never:"Never",editor_height:"Graph height (per 500 px of width)",editor_bar_spacing:"Space between bars (px)",editor_color_transition:"Band colours",editor_color_transition_smooth:"Blend",editor_color_transition_hard:"Change at each band",editor_extrema:"Show lowest and highest",editor_average:"Show average",editor_trend_legend:"Legend (two or more entities)",editor_trend_y_min:"Lowest value (~ for soft)",editor_trend_y_max:"Highest value (~ for soft)",editor_min_range:"Smallest range shown",editor_y_min_secondary:"Right axis lowest (~ for soft)",editor_y_max_secondary:"Right axis highest (~ for soft)",editor_min_range_secondary:"Right axis smallest range",editor_value_factor:"Scale by 10 to the power of",editor_align_header:"Name and icon",editor_align_header_default:"Spread out",editor_align_header_left:"Left",editor_align_header_right:"Right",editor_align_header_center:"Centre",editor_align_icon:"Icon",editor_align_icon_right:"Right of the name",editor_align_icon_left:"Left of the name",editor_align_icon_state:"Beside the value",editor_align_state:"Value",editor_align_state_left:"Left",editor_align_state_right:"Right",editor_align_state_center:"Centre",editor_font_size:"Value size (%)",editor_font_size_header:"Name size (px)",editor_color_name:"Colour the name",editor_color_value:"Colour the value",editor_trend_color_icon:"Colour the icon",editor_trend_group:"No background (inside another card)",editor_icon_image:"Image instead of the icon (URL)",editor_trend_tooltip:"Show the value under the pointer",editor_y_axis_side:"Axis",editor_y_axis_side_primary:"Left",editor_y_axis_side_secondary:"Right (its own scale)",editor_entity_aggregate:"Combine with",editor_fixed_value:"Draw the current value as a flat line",editor_show_state:"Show its value beside the main one",editor_show_indicator:"Colour dot by the value",editor_show_graph:"On the graph",editor_show_line:"Line",editor_show_fill:"Fill",editor_show_points:"Dots",editor_show_legend_entity:"In the legend",editor_show_legend_state:"Value in the legend"});const vy=[...wi,{name:"points_per_hour",path:["points_per_hour"],default:.5},{name:"graph",path:["graph"],default:"line"},{name:"fill",path:["fill"],default:"fade"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:At},{name:"points",path:["points"],default:"hover"},{name:"labels",path:["labels"],default:"hover"},{name:"height",path:["height"],default:150},{name:"bar_spacing",path:["bar_spacing"],default:4},{name:"color_transition",path:["color_transition"],default:"smooth"},{name:"extrema",path:["extrema"],default:!1},{name:"average",path:["average"],default:!1},{name:"legend",path:["legend"],default:!0},{name:"trend_y_min",path:["y_min"]},{name:"trend_y_max",path:["y_max"]},{name:"min_range",path:["min_range"]},{name:"y_min_secondary",path:["y_min_secondary"]},{name:"y_max_secondary",path:["y_max_secondary"]},{name:"min_range_secondary",path:["min_range_secondary"]},{name:"value_factor",path:["value_factor"],default:0},{name:"align_header",path:["align_header"],default:"default"},{name:"align_icon",path:["align_icon"],default:"right"},{name:"align_state",path:["align_state"],default:"left"},{name:"font_size",path:["font_size"],default:100},{name:"font_size_header",path:["font_size_header"]},{name:"color_name",path:["color_name"],default:!1},{name:"color_value",path:["color_value"],default:!1},{name:"trend_color_icon",path:["color_icon"],default:!1},{name:"group",path:["group"],default:!1},{name:"icon_image",path:["icon_image"]},{name:"trend_tooltip",path:["tooltip"],default:!0}],yy=(...e)=>({type:"grid",name:"",schema:e}),by=e=>({name:e,selector:{boolean:{}}}),_y=(e,t,o,a="any")=>({name:e,selector:{number:{mode:"box",step:a,...void 0!==t?{min:t}:{},...void 0!==o?{max:o}:{}}}}),xy=e=>({name:e,selector:{text:{}}});function wy(e){const t={};for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"])"number"==typeof e[o]&&(t[o]=String(e[o]));return t}const $y=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"entity_aggregate",path:["aggregate"]},{name:"y_axis_side",path:["y_axis"],default:"primary"},{name:"fixed_value",path:["fixed_value"],default:!1},{name:"show_graph",path:["show_graph"],default:!0},{name:"show_line",path:["show_line"],default:!0},{name:"show_fill",path:["show_fill"],default:!0},{name:"show_points",path:["show_points"]},{name:"show_legend_entity",path:["show_legend"],default:!0},{name:"show_legend_state",path:["show_legend_state"],default:!1},{name:"show_indicator",path:["show_indicator"],default:!1},{name:"show_state",path:["show_state"],default:!1}];yt("en",{editor_style_trend:"Trend",trend_min:"Low",trend_avg:"Average",trend_max:"High"});const ky=["line","bar","none"],My=["solid","fade","none"],zy=["hover","always","never"],Ay=["default","left","right","center"],Sy=["right","left","state"],Ey=["left","right","center"],Cy=["smooth","hard"];function jy(e,t){return void 0===e?t:!0===e?"always":!1===e?"never":e}function Ny(e){return void 0===e||!0===e?"fade":!1===e?"none":e}const Ly=e=>"number"==typeof e&&Number.isFinite(e)?e:void 0;function Ty(e){return{graph:e.graph??"line",fill:Ny(e.fill),points:jy(e.points,"hover"),labels:jy(e.labels,"hover"),pointsPerHour:Ly(e.points_per_hour)??.5,height:Ly(e.height)??150,lineWidth:Ly(e.line_width)??2.5,barSpacing:Ly(e.bar_spacing)??4,transition:e.color_transition??"smooth",extrema:!0===e.extrema,average:!0===e.average,legend:!1!==e.legend,factor:Math.pow(10,Ly(e.value_factor)??0),alignHeader:e.align_header??"default",alignIcon:e.align_icon??"right",alignState:e.align_state??"left",fontSize:Ly(e.font_size)??100,fontSizeHeader:Ly(e.font_size_header),colorName:!0===e.color_name,colorValue:!0===e.color_value,colorIcon:!0===e.color_icon,group:!0===e.group,iconImage:"string"==typeof e.icon_image&&""!==e.icon_image?e.icon_image:void 0,primary:{min:py(e.y_min,"y_min"),max:py(e.y_max,"y_max"),minRange:Ly(e.min_range)},secondary:{min:py(e.y_min_secondary,"y_min_secondary"),max:py(e.y_max_secondary,"y_max_secondary"),minRange:Ly(e.min_range_secondary)}}}function Oy(e,t,o){if(void 0!==e&&!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`)}function Fy(e,t,o,a=1/0,n=!1){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<o||e>a||n&&!Number.isInteger(e))){throw new Error(`"${t}" must be ${n?"a whole number":"a number"} ${a===1/0?`${o} or more`:`from ${o} to ${a}`}`)}}function Py(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}function Dy(e,t,o){const a=Math.min(e.range.end,Date.now()),n="bar"===o.graph,r=n&&0===o.pointsPerHour?.5:o.pointsPerHour,i=e.group?[]:function(e,t,o=500){const a=e.end-e.start;if(a<=0||t<=0)return[];const n=Math.max(1,Math.min(o,Math.round(a/36e5*t))),r=a/n,i=[];for(let s=0;s<=n;s++)i.push(s===n?e.end:Math.round(e.start+s*r));return i}(e.range,r,n?96:500),s=t.raw.aggregate??"mean";return e.series.map(t=>{const n=t.entity.config;let r=t.points;n.fixed_value&&null!==t.entity.value?r=[{t:e.range.start,v:t.entity.value},{t:a,v:t.entity.value}]:e.group?r=fy(t.points,e.range,a):i.length&&(r=fy(function(e,t,o,a,n){if(t.length<2)return e;let r=e;const i=e[e.length-1],s=e[e.length-2];return"history"===a&&i&&s&&i.t===n&&i.v===s.v&&(r=e.slice(0,-1)),"statistics"===a?Ya(r,t,o,n):Va(r,t,o,n)}(t.points,i,n.aggregate??s,e.source,a),e.range,a)),1!==o.factor&&(r=r.map(e=>null===e.v?e:{...e,v:e.v*o.factor}));const l=void 0!==n.color?Ce(n.color):void 0,c=!l&&(e=>e.config.severity!==st)(t.entity),d=null===t.entity.value?null:t.entity.value*o.factor,u=l??(c&&null!==d?Ce(Te(d,t.entity.bands).color):t.color);return{index:t.index,entity:t.entity,own:n,points:r,color:c?void 0:l??t.color,current:u,curve:t.curve,secondary:"secondary"===n.y_axis,graphed:!1!==n.show_graph}})}function Uy(e){let t=1/0,o=-1/0;for(const a of e)for(const e of a.points)null!==e.v&&(e.v<t&&(t=e.v),e.v>o&&(o=e.v));return t===1/0?void 0:[t,o]}const Hy=e=>Math.round(1e4*e)/100+"%";function Iy(e,t,o){return e.filter(({series:e})=>void 0===e.color).map(({series:e})=>{const a=function(e,t,o){const[a,n]=t,r=e=>Math.min(1,Math.max(0,(e-a)/(n-a))),i=[];return e.forEach((t,a)=>{const n=Ce(t.color),s=Number.isFinite(t.from)?r(t.from):0,l=a+1<e.length?r(e[a+1].from):1;"hard"===o?i.push({offset:s,color:n},{offset:l,color:n}):(0===a||a===e.length-1||s<l)&&(i.push({offset:s,color:n}),a===e.length-1&&i.push({offset:1,color:n}))}),i}(e.entity.bands,t.get(e.secondary),o.transition);return Z`<linearGradient id="cd-trend-${e.index}" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${dn} y2="0">
        ${a.map(e=>Z`<stop offset=${e.offset} stop-color=${e.color}></stop>`)}
      </linearGradient>`})}const By=e=>e.color??`url(#cd-trend-${e.index})`;function Ry(e,t){return void 0!==e.start&&void 0!==e.end&&e.end>e.start?`${Ko(e.start,t.hass)} – ${Ko(e.end,t.hass)}`:Ko(e.t,t.hass)}function Zy(e,t,o,a){const n=o.colorIcon?`color:${a}`:"";return o.iconImage?R`<span class="trend-icon"><img src=${o.iconImage} alt="" /></span>`:R`<span class="trend-icon" style=${n}>
    <ha-state-icon .hass=${t.hass} .stateObj=${e.stateObj} .icon=${Qi(e)}></ha-state-icon>
  </span>`}function qy(e,t,o,a){if(!t.extrema&&!t.average)return W;const n=function(e,t){let o,a,n=0,r=0;for(let i=0;i<e.length;i++){const s=e[i];if(null!==s.v)if(s.carried||((!o||s.v<o.v)&&(o={t:s.t,v:s.v}),(!a||s.v>a.v)&&(a={t:s.t,v:s.v})),t){const t=e[i+1],o=t?t.t-s.t:0;n+=s.v*o,r+=o}else s.carried||(n+=s.v,r+=1)}if(o&&a)return{min:o,max:a,mean:r>0?n/r:(o.v+a.v)/2}}(e.points,a);if(!n)return W;const r=(t,a,n)=>R`<span class="trend-chip ${t}"
      ><span class="trend-chip-type">${_t(o.hass,t)}</span> ${(t=>Mn(kn(t,e.entity.decimals,o.hass),e.entity.unit))(a)}${void 0!==n?R` · <span class="trend-chip-time">${Ko(n,o.hass)}</span>`:W}</span
    >`;return R`<div class="trend-info" style="--series:${e.current}">
    ${t.extrema?r("trend_min",n.min.v,n.min.t):W}
    ${t.average?r("trend_avg",n.mean):W}
    ${t.extrema?r("trend_max",n.max.v,n.max.t):W}
  </div>`}const Wy={layout:"chart",group:"history",height:170,gridOptions:{columns:6,min_columns:3,min_rows:2},styles:r`
    ${$n}
    ${fr}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){pn(e),cr(e),Oy(e.graph,ky,"graph"),Oy(e.fill,[...My,!0,!1],"fill"),Oy(e.points,[...zy,!0,!1],"points"),Oy(e.labels,[...zy,!0,!1],"labels"),Oy(e.color_transition,Cy,"color_transition"),Oy(e.align_header,Ay,"align_header"),Oy(e.align_icon,Sy,"align_icon"),Oy(e.align_state,Ey,"align_state"),Fy(e.points_per_hour,"points_per_hour",0,60),Fy(e.height,"height",20,1e3),Fy(e.line_width,"line_width",St,Et),Fy(e.bar_spacing,"bar_spacing",0,50),Fy(e.value_factor,"value_factor",-9,9,!0),Fy(e.font_size,"font_size",25,400),Fy(e.font_size_header,"font_size_header",6,60),Fy(e.min_range,"min_range",0),Fy(e.min_range_secondary,"min_range_secondary",0);for(const t of["extrema","average","legend","color_name","color_value","group"])Py(e[t],t);if(void 0!==e.icon_image&&"string"!=typeof e.icon_image)throw new Error('"icon_image" must be a URL');Ty(e);for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t,o=t=>`"${t}" of ${e.entity}`;gy(e.aggregate,o("aggregate")),Oy(e.y_axis,["primary","secondary"],`y_axis of ${e.entity}`),Fy(e.line_width,`line_width of ${e.entity}`,St,Et);for(const t of["fixed_value","show_state","show_indicator","show_graph","show_line","show_fill","show_points","show_legend","show_legend_state"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`${o(t)} must be true or false`)}},editor:function(e){const t=Pi(`trend|${$i(e.config)}`,e.hass,()=>{return t=e.hass,o=e.config,[...ki(t,o),_y("points_per_hour",0,60),yy({name:"graph",selector:xi(t,"graph",["line","bar","none"])},{name:"fill",selector:xi(t,"fill",["fade","solid","none"])},{name:"curve",selector:xi(t,"curve",an)},{name:"line_width",selector:Vt},{name:"points",selector:xi(t,"points",["hover","always","never"])},{name:"labels",selector:xi(t,"labels",["hover","always","never"])},_y("height",20,1e3,1),_y("bar_spacing",0,50,1)),{name:"color_transition",selector:xi(t,"color_transition",["smooth","hard"])},yy(by("extrema"),by("average"),by("legend"),by("trend_tooltip")),yy(xy("trend_y_min"),xy("trend_y_max"),_y("min_range",0)),yy(xy("y_min_secondary"),xy("y_max_secondary"),_y("min_range_secondary",0)),yy({name:"align_header",selector:xi(t,"align_header",["default","left","right","center"])},{name:"align_icon",selector:xi(t,"align_icon",["right","left","state"])},{name:"align_state",selector:xi(t,"align_state",["left","right","center"])},_y("font_size",25,400,1),_y("font_size_header",6,60,1),_y("value_factor",-9,9,1)),yy(by("color_name"),by("trend_color_icon"),by("color_value"),by("group")),{name:"icon_image",selector:{text:{}}}];var t,o}),o={...e,config:{...e.config,...wy(e.config)},commit:t=>e.commit(function(e){let t=e;for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"]){const e=t[o];"string"==typeof e&&""!==e.trim()&&!e.trim().startsWith("~")&&Number.isFinite(Number(e))?t={...t,[o]:Number(e)}:""===e&&(t={...t},delete t[o])}return t}(t))};return Di(o,"chart",t,vy,{legend:"editor_trend_legend",labels:"editor_trend_labels",group:"editor_trend_group"})},entityFields:function(e){return{schema:Pi("trend-entity",e,()=>function(e){return[yy({name:"series_color",selector:{text:{}}},{name:"curve",selector:xi(e,"curve",an)},{name:"line_width",selector:Vt},{name:"entity_aggregate",selector:xi(e,"aggregate",qa)},{name:"y_axis_side",selector:xi(e,"y_axis_side",["primary","secondary"])}),yy(by("show_state"),by("show_indicator"),by("show_graph"),by("show_line"),by("show_fill"),by("show_points"),by("show_legend_entity"),by("show_legend_state"),by("fixed_value"))]}(e)),fields:$y}},disconnect(e){bn(e),Pn(e),sr(e)},render:function(e){const t=Ty(e.raw),{show:o}=e.config,a=mn(e),n=Dy(a,e,t),r=n[0],i=r.entity,s=n.filter(e=>e.graphed),l=function(e,t){if(void 0!==t)return e.map(e=>{const o=e.points.filter(e=>!e.carried),a=nr(o,t);return a<0?void 0:o[a]})}(n,lr(e.raw)&&"ready"===a.status?ir(e.host):void 0),c=t.colorName?`color:${r.current}`:"",d=o.icon&&"state"!==t.alignIcon?Zy(i,e,t,r.current):W,u=o.name||d!==W?R`<div
          class="trend-header entity align-${t.alignHeader} icon-${t.alignIcon}"
          data-index="0"
          tabindex="0"
          aria-label=${i.label}
          style=${t.fontSizeHeader?`font-size:${t.fontSizeHeader}px`:""}
        >
          ${o.name?R`<span class="trend-name" style=${c}>${i.name}</span>`:W} ${d}
        </div>`:W,h=(o,a)=>{const n=l?.[a],r=n?n.v:o.entity.value,i=n?{number:null===n.v?"—":kn(n.v,o.entity.decimals,e.hass),unit:o.entity.unit}:function(e,t,o,a){return null===e?{number:t.display,unit:""}:{number:kn(e*o,t.decimals,a),unit:t.unit}}(r,o.entity,t.factor,e.hass);return{parts:i,color:n&&null!==n.v&&void 0===o.color?Ce(Te(n.v,o.entity.bands).color):o.current,when:n?Ry(n,e):void 0}},p=h(r,0),m=o.value,f=n.slice(1).filter(e=>!0===e.own.show_state),g=m||f.length||"state"===t.alignIcon?R`<div class="trend-states align-${t.alignState}" style="font-size:${t.fontSize}%">
          ${o.icon&&"state"===t.alignIcon?Zy(i,e,t,r.current):W}
          ${m?R`<div class="trend-state entity" data-index="0" tabindex="0" aria-label=${i.label}>
                  ${r.own.show_indicator?R`<span class="swatch" style="background:${r.current}"></span>`:W}
                  <span class="trend-value" style=${t.colorValue?`color:${p.color}`:""}
                    >${p.parts.number}</span
                  >${p.parts.unit?R`<span class="trend-unit">${p.parts.unit}</span>`:W}
                  ${p.when?R`<span class="trend-when">${p.when}</span>`:W}
                </div>`:W}
          ${f.length?R`<div class="trend-secondary">
                  ${f.map(e=>{const o=h(e,e.index);return R`<div
                      class="trend-state small entity"
                      data-index=${e.index}
                      tabindex="0"
                      aria-label=${e.entity.label}
                    >
                      ${!1!==e.own.show_indicator?R`<span class="swatch" style="background:${e.current}"></span>`:W}
                      <span class="trend-value" style=${t.colorValue?`color:${o.color}`:""}
                        >${o.parts.number}</span
                      >${o.parts.unit?R`<span class="trend-unit">${o.parts.unit}</span>`:W}
                    </div>`})}
                </div>`:W}
        </div>`:W,v=s.filter(e=>!1!==e.own.show_legend),y=t.legend&&s.length>1&&v.length?R`<div class="series-header trend-legend">
          ${v.map(t=>R`<div class="entity series-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}>
                <span class="swatch" style="background:${t.current}"></span>
                <span class="series-name">${function(e,t){const o=t.raw.name;return void 0===o||e.entity.name!==o?e.entity.name:e.entity.stateObj?.attributes.friendly_name??e.entity.entityId}(t,e)}</span>
                ${t.own.show_legend_state?R`<span class="series-value">${t.entity.display}</span>`:W}
              </div>`)}
        </div>`:W,b=vn(a,e),_="none"===t.graph?W:function(e,t,o,a,n){const r=`aspect-ratio:500 / ${a.height}`;if("ready"!==t.status||o.every(e=>e.points.every(e=>null===e.v))){const o="loading"===t.status?"chart_loading":"error"===t.status?"chart_error":"chart_no_data";return R`<div class="trend-graph message ${"error"===t.status?"error":""}" style=${r}>
      <span>${_t(e.hass,o,{error:t.error??""})}</span>
    </div>`}const i="bar"===a.graph,s=new Map;for(const b of[!1,!0]){const e=o.filter(e=>e.secondary===b);e.length&&s.set(b,my(Uy(e),{...b?a.secondary:a.primary,fromZero:i}))}const l=$o([t.range.start,t.range.end],[0,cn]),c=o.map(e=>({series:e,y:$o(s.get(e.secondary),[dn,0])})),d=i?Z``:Z`${c.map(e=>function({series:e,y:t},o,a){const n=ln(e.points).map(a=>{const n=a.map(e=>[o(e.t),t(e.v)]);return{pts:n,d:sn(n,e.curve)}}),r=!1!==e.own.show_line,i="none"!==a.fill&&!1!==e.own.show_fill,s=e.own.line_width??a.lineWidth,l=e.own.show_points??"always"===a.points,c=e.points.filter(e=>null!==e.v&&!e.carried);return Z`<g class="series" data-series=${e.index}>
    ${i?Z`<path
            class="fill ${a.fill}"
            d=${n.map(({pts:e,d:t})=>`${t}L${e[e.length-1][0]},200L${e[0][0]},200Z`).join("")}
            fill=${By(e)}
            mask=${"fade"===a.fill?"url(#cd-trend-fade)":W}
          ></path>`:W}
    ${r?Z`<path class="line" d=${n.map(e=>e.d).join("")} fill="none" stroke=${By(e)}
            style="stroke-width:${s}px"></path>`:W}
    ${l&&c.length<=200?Z`<path class="dots" d=${Nt(c.map(e=>[o(e.t),t(e.v)]))} fill="none"
            stroke=${By(e)} style="stroke-width:${Lt(s)}px"></path>`:W}
  </g>`}(e,l,a))}`,u=Z`${Iy(c,s,a)}
    <linearGradient id="cd-trend-fade-paint" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${dn}>
      <stop offset="0" stop-color="#fff" stop-opacity="0.42"></stop>
      <stop offset="1" stop-color="#fff" stop-opacity="0.05"></stop>
    </linearGradient>
    <mask id="cd-trend-fade" maskContentUnits="userSpaceOnUse">
      <rect x="0" y="0" width=${cn} height=${dn} fill="url(#cd-trend-fade-paint)"></rect>
    </mask>`,h=_t(e.hass,"chart_aria",{style:_t(e.hass,"editor_style_trend"),names:o.map(e=>e.entity.name).join(", ")}),p=t=>{const n=o.filter(e=>e.secondary===t),r=Uy(n);if(!r)return W;const i=t?a.secondary:a.primary,s=i.min&&!i.min.soft?i.min.value:r[0],l=i.max&&!i.max.soft?i.max.value:r[1],c=n[0].entity,d=t=>Mn(kn(t,c.decimals,e.hass),c.unit);return R`<div class="trend-labels ${t?"secondary":"primary"}" style="--series:${n[0].current}">
      <span>${d(l)}</span><span>${d(s)}</span>
    </div>`},m="never"===a.labels?W:R`<div class="trend-labels-wrap labels-${a.labels}">${p(!1)}${p(!0)}</div>`,f=n&&!i&&n[o[0].index]?R`<div class="crosshair" style="left:${Hy(l(n[o[0].index].t)/cn)}"></div>`:W,g=n&&!i?c.map(({series:e,y:t})=>{const o=n[e.index];if(!o||null===o.v||!1===e.own.show_points)return W;const a=t(o.v)/dn;if(!(a>=0&&a<=1))return W;const r=e.color??Ce(Te(o.v,e.entity.bands).color);return R`<span
            class="hover-dot"
            style="left:${Hy(l(o.t)/cn)};top:${Hy(a)};background:${r}"
          ></span>`}):W,v=n&&i&&n[o[0].index]?(()=>{const e=n[o[0].index];return void 0===e.start||void 0===e.end?W:R`<div
            class="bar-hover"
            style="left:${Hy(l(e.start)/cn)};width:${Hy((l(e.end)-l(e.start))/cn)}"
          ></div>`})():W,y=lr(e.raw)?dr(e,t.range,o.map(e=>e.points.filter(e=>!e.carried))):void 0;return R`<div
    class="trend-graph ${y?"hoverable":""}"
    style=${r}
    @pointerdown=${y?.move}
    @pointermove=${y?.move}
    @pointerleave=${y?.leave}
    @pointercancel=${y?.leave}
  >
    ${wn(d,h,u)} ${i?function(e,t,o){const a=e.length,n=e.flatMap(({series:e,y:n},r)=>{const i=Math.min(dn,Math.max(0,n(0)));return e.points.filter(e=>null!==e.v&&!e.carried&&void 0!==e.start&&void 0!==e.end).map(s=>{const l=t(s.start)/cn,c=(t(s.end)-t(s.start))/cn,d=Math.min(dn,Math.max(0,n(s.v))),u=d>i,h=e.color??Ce(Te(s.v,e.entity.bands).color),p=`(${Hy(c)} - ${o}px) / ${a}`;return R`<div
          class="trend-col ${u?"down":""}"
          style="left:calc(${Hy(l)} + ${o/2}px + ${r} * ${p});width:max(1px, calc(${p}));
            top:${Hy(Math.min(d,i)/dn)};height:${Hy(Math.abs(i-d)/dn)};background:${h}"
        ></div>`})});return R`<div class="trend-cols">${n}</div>`}(c,l,a.barSpacing):W} ${m} ${v}
    ${f} ${"never"===a.points?W:g}
  </div>`}(e,a,s,t,l);return R`<div class="trend ${t.group?"group":""} ${"none"===t.graph?"no-graph":""}">
    <div class="trend-top">
      ${u} ${b===W?W:R`<div class="trend-nav">${b}</div>`} ${g}
      ${qy(r,t,e,"history"===a.source&&!a.group&&0===t.pointsPerHour)}
      ${y}
    </div>
    ${_}
  </div>`}},Vy=["bars","gauges","history","totals","compare","distribution"];function Yy(e){return"chart"===e.layout}const Gy={bar:is,thin:au,segmented:tu,tank:ou,ring:Wd,needle:dd,arc:Vd,line:sc,column:El,area:Gi,combined:gc,pie:Dd,rings:Kd,pictograph:jd,waffle:du,histogram:Jc,scatter:Qd,bubble:il,heatmap:Dc,box:Ts,funnel:bu,radar:Yu,polar_area:Qu,treemap:_h,sunburst:Dh,icicle:Uh,grouped_bars:Qh,bullet:np,lollipop:cp,waterfall:yp,slope:Ep,dumbbell:qp,range_area:Jp,sparkline:rm,streamgraph:_m,candlestick:Cm,violin:bf,beeswarm:Nf,sankey:Xf,timeline:bg,climate:Ig,wind_rose:hv,day_clock:hy,trend:Wy},Xy="important",Jy=" !"+Xy,Ky=me(class extends fe{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const a=e[o];return null==a?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const a of this.ft)null==t[a]&&(this.ft.delete(a),a.includes("-")?o.removeProperty(a):o[a]=null);for(const a in t){const e=t[a];if(null!=e){this.ft.add(a);const t="string"==typeof e&&e.endsWith(Jy);a.includes("-")||t?o.setProperty(a,t?e.slice(0,-11):e,t?Xy:""):o[a]=e}}return q}}),Qy=Object.keys(Fe),eb=Object.keys(Ee),tb="custom",ob={text:{}},ab={entity:{domain:["sensor","input_number","number"]}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nb(e){return"string"==typeof e&&""!==e.trim()&&!Number.isFinite(Number(e))}const rb={icon:{}};function ib(e){return void 0===e?"none":Qy.find(t=>Fe[t]&&uo(Fe[t],e))??"custom"}function sb(e){return eb.includes(e)}class lb extends le{constructor(){super(),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(e){e.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(e){const t=this.hass?.states[e]?.state,o=void 0===t||""===t.trim()?NaN:Number(t);return Number.isFinite(o)?o:void 0}_t(e){return _t(this.hass,e)}_getSelectors(){const e=`${bt(this.hass)}|${this.unit??""}`;if(this._selectors?.key===e)return this._selectors;const t=Qy.map(e=>({value:e,label:this._t(`editor_preset_${e}`)})),o=e=>({select:{mode:"dropdown",options:e}});return this._selectors={key:e,preset:o(t),presetCustom:o([...t,{value:tb,label:this._t("editor_preset_custom")}]),color:o([...eb,tb].map(e=>({value:e,label:this._t(`editor_color_${e}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e&&e.length?e:void 0}}))}_presetChanged(e){e.stopPropagation();const t=e.detail?.value;if(!t||t===tb||!Qy.includes(t))return;if(t===ib(this.bands))return;const o=Fe[t];this._emit(o?structuredClone(o):void 0)}_updateBand(e,t,o){const a=[...this.bands??[]],n={...a[e]};null==o||""===o?delete n[t]:n[t]=o,a[e]=n,this._emit(a)}_fromChanged(e,t){t.stopPropagation();const o=Number(t.detail?.value);""!==t.detail?.value&&null!=t.detail?.value&&Number.isFinite(o)&&this._updateBand(e,"from",o)}_fromEntityChanged(e,t){t.stopPropagation();const o=t.detail?.value;"string"==typeof o&&""!==o&&this._updateBand(e,"from",o)}_toggleFromMode(e){const t=this.bands?.[e]?.from,o=new Set(this._entityOpen);nb(t)?this._updateBand(e,"from",this._entityValue(t)??0):o.delete(e)||o.add(e),this._entityOpen=o}_colorChanged(e,t){t.stopPropagation();const o=t.detail?.value,a=this.bands?.[e]?.color??"primary";if(!o)return;const n=new Set(this._customOpen);o!==tb?(n.delete(e),this._customOpen=n,o!==a&&this._updateBand(e,"color",o)):sb(a)&&(this._customOpen=n.add(e))}_customColorChanged(e,t){t.stopPropagation();const o="string"==typeof t.detail?.value?t.detail.value.trim():"";if(!o)return;const a=new Set(this._customOpen);a.delete(e),this._customOpen=a,this._updateBand(e,"color",o)}_iconChanged(e,t){t.stopPropagation(),this._updateBand(e,"icon",t.detail?.value)}_labelChanged(e,t){t.stopPropagation(),this._updateBand(e,"label",t.detail?.value)}_removeBand(e){const t=[...this.bands??[]];t.splice(e,1),this._emit(t)}_addBand(){const e=[...this.bands??[]],t=e[e.length-1]?.from,o="number"==typeof t?t:nb(t)?this._entityValue(t)??NaN:"string"==typeof t&&""!==t.trim()?Number(t):NaN;e.push({from:Number.isFinite(o)?o+10:0,color:"primary"}),this._emit(e)}_renderBand(e,t,o){const a=!sb(e.color)||this._customOpen.has(t),n=nb(e.from)?e.from:void 0,r=void 0!==n||this._entityOpen.has(t);return R`<div class="band">
      <span class="swatch" style=${Ky({"--swatch":Ce(e.color)})}></span>
      <ha-selector
        .required=${!1}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${o.from}
        .value=${void 0!==n?this._entityValue(n):e.from}
        .disabled=${r}
        @value-changed=${e=>this._fromChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!0}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${o.color}
        .value=${a?tb:e.color}
        @value-changed=${e=>this._colorChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${ob}
        .value=${e.label??""}
        @value-changed=${e=>this._labelChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${rb}
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
      ${r?R`<ha-selector
              .required=${!1}
              class="from-entity"
              data-role="from-entity"
              .hass=${this.hass}
              .label=${this._t("editor_band_from_entity_label")}
              .selector=${ab}
              .value=${n??""}
              @value-changed=${e=>this._fromEntityChanged(t,e)}
            ></ha-selector>`:W}
      ${a?R`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${ob}
              .value=${sb(e.color)?Ce(e.color):e.color}
              @value-changed=${e=>this._customColorChanged(t,e)}
            ></ha-selector>`:W}
    </div>`}render(){const e=this._getSelectors(),t=ib(this.bands);return R`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${t===tb?e.presetCustom:e.preset}
        .value=${t}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((t,o)=>this._renderBand(t,o,e))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}lb.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},lb.styles=r`
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",lb);const cb={number:{mode:"box",step:"any"}},db={entity:{domain:["sensor","input_number","number"]}};function ub(e){return null==e||""===e?"default":"number"==typeof e||""!==e.trim()&&Number.isFinite(Number(e))?"number":"entity"}class hb extends le{willUpdate(e){e.has("value")&&"default"!==ub(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const e=(e,t)=>_t(this.hass,e,t),t=[{value:"default",label:e("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:e("editor_limit_number")},{value:"entity",label:e("editor_limit_entity")}],o=t.map(e=>e.label).join("|");return this._modeSelector?.key!==o&&(this._modeSelector={key:o,selector:{select:{mode:"dropdown",options:t}}}),this._modeSelector.selector}get _currentMode(){return this._mode??ub(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e}}))}_modeChanged(e){e.stopPropagation();const t=e.detail?.value;t&&t!==this._currentMode&&(this._mode=t,void 0!==this.value&&this._emit(void 0))}_numberChanged(e){e.stopPropagation();const t=e.detail?.value,o="number"==typeof t?t:""===t||null==t?NaN:Number(t);this._mode="number",this._emit(Number.isFinite(o)?o:void 0)}_entityChanged(e){e.stopPropagation();const t=e.detail?.value;this._mode="entity",this._emit("string"==typeof t&&""!==t?t:void 0)}render(){const e=e=>_t(this.hass,e),t=this._currentMode;return R`<ha-selector
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
              .selector=${cb}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===t?R`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${e("editor_limit_entity")}
                .selector=${db}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:W}`}}hb.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},hb.styles=r`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",hb);const pb=["min","max","target"];function mb(e,t,o){const a=t&&!o?e?.states[t]?.attributes?.unit_of_measurement:void 0;return"string"==typeof a&&a?a:void 0}class fb extends le{constructor(){super(),this._computeLabel=e=>this._t(`editor_${e.name}`),this._expanded=new Set}_t(e,t){return _t(this.hass,e,t)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(e){e.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e.entities??[]}}))}_set(e,t,o){this._emit(zt(this._asConfig,e,t,o))}_move(e,t){const o=new Set;for(const a of this._expanded)o.add(a===e?t:a===t?e:a);this._expanded=o,this._emit(function(e,t,o){const a=[...e.entities??[]];if(t<0||t>=a.length||t===o)return e;const[n]=a.splice(t,1);return a.splice(Math.max(0,Math.min(o,a.length)),0,n),{...e,entities:a}}(this._asConfig,e,t))}_remove(e){const t=new Set;for(const o of this._expanded)o!==e&&t.add(o>e?o-1:o);this._expanded=t,this._emit(function(e,t){const o=[...e.entities??[]];return t<0||t>=o.length?e:(o.splice(t,1),{...e,entities:o})}(this._asConfig,e))}_toggle(e){const t=new Set(this._expanded);t.delete(e)||t.add(e),this._expanded=t}_add(e){e.stopPropagation();const t=e.detail?.value;"string"==typeof t&&""!==t&&(e.target.value="",this._emit(function(e,t){return{...e,entities:[...e.entities??[],t]}}(this._asConfig,t)))}_formChanged(e,t,o){o.stopPropagation();const a=this.entities?.[e];if(void 0===a)return;const n="string"==typeof a?{entity:a}:a,r=po(n,t,o.detail?.value??{});if(r===n)return;const i=[...this.entities??[]],s=Object.keys(r);i[e]=1===s.length&&"entity"===s[0]?r.entity:r,this._emit({type:"",entities:i})}_rowLabel(e){const t=this.hass?.states[e];return t?{text:t.attributes.friendly_name||e,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:e}),missing:!0}:{text:e,missing:!1}}_form(e,t,o,a,n){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${ho(o,n)}
      .schema=${a}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(t,n,e)}
    ></ha-form>`}_renderOverrides(e,t){const o=e=>t=>{t.stopPropagation(),e(t.detail?.value)};return R`<div class="overrides">
      ${this._form("entity-attribute",t,e,function(e){let t=eo.get(e);return t||(t=[{name:"attribute",selector:{attribute:{entity_id:e}}}],eo.set(e,t)),t}(e.entity),qt)}
      ${this._form("entity-text",t,e,Qt,Zt)}
      ${this.chartFields?this._form("entity-chart",t,e,this.chartFields.schema,this.chartFields.fields):W}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${e.icon??""}
        @value-changed=${o(e=>this._set(t,"icon",e))}
      ></ha-icon-picker>
      ${pb.map(a=>R`<cd-limit-field
            data-limit=${a}
            .hass=${this.hass}
            .label=${this._t(`editor_${a}`)}
            .value=${e[a]}
            .defaultLabel=${this._t("editor_card_setting")}
            @value-changed=${o(e=>this._set(t,a,e))}
          ></cd-limit-field>`)}
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${e.severity}
        .unit=${e.unit??this.unit??mb(this.hass,e.entity,e.attribute)}
        @value-changed=${o(e=>this._set(t,"severity",e))}
      ></cd-bands-editor>
      ${this._form("entity-actions",t,e,Kt,Xt)}
    </div>`}_renderRow(e,t,o){const a=Mt(e),n="string"==typeof e?{entity:e}:e,r=this._rowLabel(a),i=this._expanded.has(t);return R`<div class="entity">
      <span class="label ${r.missing?"missing":""}">${r.text}</span>
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${gt(a)}
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
      ${i?this._renderOverrides(n,t):W}
    </div>`}render(){const e=this.entities??[];return R`${e.map((t,o)=>this._renderRow(t,o,e.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}fb.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chartFields:{attribute:!1},_expanded:{state:!0}},fb.styles=r`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",fb);const gb=["ring","arc","needle"];class vb extends le{constructor(){super(...arguments),this._label=e=>_t(this.hass,e),this._computeLabel=e=>_t(this.hass,`editor_${e.name}`),this._computeRuleLabel=e=>_t(this.hass,`editor_rule_${e.name.slice(e.name.indexOf("_")+1)}`)}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]}),o=t?.constructor;await(o?.getConfigElement?.())}catch{}}()}_commit(e){this._config=e,function(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}(this,e)}_formChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{};this._commit(po(this._config,e,o))}_form(e,t,o){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${ho(this._config,o)}
      .schema=${t}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(o,e)}
    ></ha-form>`}_panel(e,t){return R`<ha-expansion-panel .header=${this._label(`editor_section_${e}`)} outlined>
      <div class="panel section-${e}">${t}</div>
    </ha-expansion-panel>`}_subChanged(e,t){t.stopPropagation(),this._config&&this._commit(kt(this._config,e,t.detail?.value))}_chartFields(){const e=Gy[this._config?.style??"bar"];return e&&Yy(e)&&this._config?e.entityFields?.(this.hass,this._config):void 0}renderEntities(){return R`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        @value-changed=${e=>this._subChanged(["entities"],e)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(e){const t=this._config?.[e],o={};if(!t||"object"!=typeof t)return o;for(const[a,n]of Object.entries(t))o[`${e}_${a}`]=Array.isArray(n)?n:[n];return o}_ruleChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{},a=this._ruleData(e);let n=this._config;for(const r of no[e]){const t=`${e}_${r}`,i=Array.isArray(o[t])?o[t]:[];uo(a[t]??[],i)||(n=kt(n,[e,r],i.length?i:void 0))}n!==this._config&&this._commit(n)}_ruleForm(e){return R`<div class="rules-heading">${this._label(`editor_${e}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${e}_help`)}</p>
      <ha-form
        data-section=${e}
        .hass=${this.hass}
        .data=${this._ruleData(e)}
        .schema=${so(e,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${t=>this._ruleChanged(e,t)}
      ></ha-form>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([e,t])=>R`<cd-limit-field
          data-limit=${e}
          .hass=${this.hass}
          .label=${this._label(`editor_${e}`)}
          .value=${this._config?.[e]}
          .defaultLabel=${t}
          @value-changed=${t=>this._subChanged([e],t)}
        ></cd-limit-field>`)}renderColours(){return R`${this._toggles(Ut)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${e=>this._subChanged(["severity"],e)}
      ></cd-bands-editor>`}_firstEntityUnit(){const e=this._config?.entities?.[0];return"string"==typeof e?mb(this.hass,e):e?.unit??mb(this.hass,e?.entity,e?.attribute)}_selectStyle(e){this._config&&this._commit(kt(this._config,["style"],"bar"===e?void 0:e))}renderStyle(){const e=this._config?.style??"bar";return R`${Vy.map(t=>{const o=it.filter(e=>Gy[e].group===t);return o.length?R`<div class="style-group">${this._label(`editor_group_${t}`)}</div>
        <div class="styles" data-group=${t}>
          ${o.map(t=>{const o=Gy[t],a=Yy(o)?R`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${o.thumbnail()}
                </svg>`:_o(t);return R`<button
              type="button"
              class="style"
              data-style=${t}
              aria-pressed=${e===t?"true":"false"}
              @click=${()=>this._selectStyle(t)}
            >
              ${a}<span>${this._label(`editor_style_${t}`)}</span>
            </button>`})}
        </div>`:W})}
    ${gb.includes(e)?R`<p class="gauge-help">${this._label("editor_gauge_help")}</p>
            ${this._form("gauge",function(e,t,o){const a="text"===o,n=`${bt(e)}|${t}|${a}`;let r=Rt.get(n);if(!r){const o={number:{min:-360,max:360,step:1,mode:"box",unit_of_measurement:"°"}};r=[{type:"grid",name:"",schema:[{name:"start_angle",selector:o},{name:"end_angle",selector:o}]},{name:"center",selector:{select:{mode:"dropdown",options:["value","band","name","text","none"].map(t=>({value:t,label:_t(e,`editor_center_mode_${t}`)}))}}},...a?[{name:"center_text",selector:{text:{}}}]:[],..."needle"===t?[{name:"tick_labels",selector:{boolean:{}}}]:[]],Rt.set(n,r)}return r}(this.hass,e,this._config?.center),Bt)}`:W}`}renderChart(){const e=Gy[this._config?.style??"bar"];return e&&Yy(e)&&e.editor&&this._config?this._panel("chart",e.editor({hass:this.hass,config:this._config,commit:e=>this._commit(e)})):W}renderDisplay(){return R`${this._toggles(Dt)}
    ${this._form("display",function(e){const t=bt(e);return lo?.language!==t&&(lo={language:t,schema:ao(e)}),lo.schema}(this.hass),Ht)}`}_toggles(e){const t=ho(this._config,e);return R`<div class="toggles">
      ${e.map(({name:o})=>{const a=this._label(`editor_${o}`),n=!0===t[o];return R`<div class="toggle">
          <span @click=${()=>this._toggle(e,o,!n)}>${a}</span
          ><ha-switch
            data-name=${o}
            aria-label=${a}
            .checked=${gt(n)}
            @change=${t=>this._toggle(e,o,t.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(e,t,o){if(!this._config)return;const a=ho(this._config,e);this._commit(po(this._config,e,{...a,[t]:o}))}renderActions(){return this._form("actions",Kt,It)}render(){return this._config?R`<div class="title">${this._form("title",Jt,Pt)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:W}}vb.properties={hass:{attribute:!1},_config:{state:!0}},vb.styles=r`
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",vb);const yb=r`
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
`;console.info("%c CHARTDECK %c 1.5.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const bb={rows:16,tiles:8};function _b(e){const t=bb[e.layout];return Math.max(1,Math.floor((368+t)/((e.minColumnWidth??0)+t)))}class xb extends le{constructor(){super(...arguments),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(e){const t=Object.values(e?.states??{}).filter(e=>e.entity_id.startsWith("sensor.")&&""!==e.state.trim()&&Number.isFinite(Number(e.state))),o=e=>"battery"===e.attributes?.device_class;return t.sort((e,t)=>o(e)!==o(t)?o(e)?-1:1:e.entity_id<t.entity_id?-1:e.entity_id>t.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:t.slice(0,3).map(e=>e.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(e){const t=function(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");const t=e.style??"bar";if(!it.includes(t))throw new Error(`Unknown style "${String(t)}". Use one of: ${it.join(", ")}`);const o=e.sort??"none";if(!lt.includes(o))throw new Error(`Unknown sort "${String(o)}". Use one of: ${lt.join(", ")}`);if(void 0!==e.entities&&!Array.isArray(e.entities))throw new Error('"entities" must be a list');const a=(e.entities??[]).map((t,o)=>ft(t,e,o)),n={name:!0,value:!0,icon:!0,target:!0,legend:!1,...e.show},r=ut(e.columns,"columns",1),i=ut(e.limit,"limit",1),s=De(e.include,"include"),l=De(e.exclude,"exclude");s&&ft("sensor.chartdeck_check",e,0);const c={style:t,entities:a,hideUnavailable:!0===e.hide_unavailable,cardOptions:e,show:n,sort:o,animate:!1!==e.animate,colorIcon:!0===e.color_icon,legendBands:ht(e.severity)??st};return void 0!==e.title&&(c.title=e.title),void 0!==r&&(c.columns=r),void 0!==i&&(c.limit=i),s&&(c.include=s),l&&(c.exclude=l),c}(e),o=Gy[t.style];if(Yy(o)&&o.validate?.(e),this._watched=function(e){const t=new Set;for(const o of e.entities){t.add(o.entity);for(const e of[o.min,o.max,o.target,...o.severity.map(e=>e.from)])"string"==typeof e&&""!==e&&t.add(e)}for(const o of e.legendBands)"string"==typeof o.from&&t.add(o.from);return t}(t),Yy(o))for(const a of o.watch?.(e)??[])this._watched.add(a);this._config&&this._config.style!==t.style&&this._disconnectStyle(),this._config=t}get _styleName(){return this._config?.style??"bar"}get _style(){return Gy[this._styleName]}_legend(e){const t=this._config;if(!t?.show.legend||0===this._count())return[];const o=e?.decimals??1;return Oe(as(t.legendBands,this.hass),e=>kn(e,o,this.hass),e?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const e=this._config;if(!e)return 0;const t=this._style,o=16+(e.title?73:0)+(this._legend().length>0?32:0);if(Yy(t))return o+t.height;const a=this._count(),n=void 0!==e.columns?Math.min(e.columns,_b(t)):"rows"===t.layout?1:Math.min(a,t.tilesPerRow??3,_b(t));return o+(0===a?0:Math.ceil(a/Math.max(1,n)))*t.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const e=this._count();if(Yy(this._style))return{columns:12,min_columns:6,min_rows:2,...this._style.gridOptions,rows:"auto"};const t="rows"===this._style.layout;return{columns:t||e<=1?6:12,rows:"auto",min_columns:t?6:3,min_rows:1}}shouldUpdate(e){if(0===e.size)return!0;if([...e.keys()].some(e=>"hass"!==e))return!0;if(!e.has("hass"))return!1;const t=e.get("hass"),o=this.hass;if(!t||!o)return!0;for(const a of this._watched)if(t.states[a]!==o.states[a])return!0;if(this._config?.include){const e=rs(this._config,o);if(e.length!==this._matched.length||e.some((e,t)=>e!==this._matched[t]))return!0;for(const a of e)if(t.states[a]!==o.states[a])return!0}return t.themes?.darkMode!==o.themes?.darkMode||t.themes?.theme!==o.themes?.theme||t.locale!==o.locale}willUpdate(){const e=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",e),(e||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const e=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const e=this._config?Gy[this._config.style]:void 0;e&&Yy(e)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const e=this._config?Gy[this._config.style]:void 0;e&&Yy(e)&&e.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle();for(const e of this._detachers.values())e();this._detachers.clear()}_syncActions(){const e=this.shadowRoot;if(!e)return;const t=new Set(e.querySelectorAll(".entity"));for(const[o,a]of this._detachers)t.has(o)||(a(),this._detachers.delete(o));for(const o of t)this._detachers.has(o)||this._detachers.set(o,Se(o,()=>this._items[Number(o.dataset.index)].config))}_renderEntity(e,t,o,a){const n=this._config,r=Ae(e.config),i=je(e.band.color),s=`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${i.start};--c-end:${i.end}`;return R`<div
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
      ${o.render(e,{show:n.show,hass:a})}
    </div>`}render(){const e=this._config;if(!e)return W;const t=this.hass,o=this._style;let a,n,r;const i=t?function(e,t){const o=rs(e,t).map((t,o)=>ft(t,e.cardOptions,o)),a=[...e.entities,...o].map(e=>ns(e,t));return e.hideUnavailable?a.filter(e=>e.available):a}(e,t):[];if(this._matched=t?rs(e,t):[],0!==e.entities.length||e.include)if(t)if(0===i.length)this._items=[],a=R`<div class="hint">${_t(t,e.include?"no_matches":"none_available")}</div>`;else{n=i[0];const s=new Map,l=new Set;i.forEach((e,t)=>{s.set(e,l.has(e.entityId)?`${e.entityId}#${t}`:e.entityId),l.add(e.entityId)}),this._items=function(e,t){if("none"===t)return[...e];const o="ascending"===t?1:-1;return e.map((e,t)=>({item:e,index:t})).sort((e,t)=>{if(e.item.available!==t.item.available)return e.item.available?-1:1;if(e.item.available){const a=(e.item.position-t.item.position)*o;if(0!==a)return a}return e.index-t.index}).map(e=>e.item)}(i,e.sort).slice(0,e.limit);const c=this._items.filter(e=>e.available).map(e=>e.display.length);if(r=c.length?Math.max(...c):void 0,Yy(o))a=R`<div class="chart">
          ${o.render({items:this._items,config:e,raw:e.cardOptions,hass:t,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const n="tiles"===o.layout,r=function(e,t){if(void 0===t)return"rows"===e.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const o=(t-1)*bb[e.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${e.minColumnWidth??0}px, 100%), calc((100% - ${o}px) / ${t} - 0.5px)), 1fr))`}(o,e.columns);a=R`<div
          class="entities layout-${o.layout} ${n&&void 0!==e.columns?"has-columns":""}"
          style=${r}
        >
          ${Me(this._items,e=>s.get(e),(e,a)=>this._renderEntity(e,a,o,t))}
        </div>`}}else this._items=[],a=W;else this._items=[],a=R`<div class="hint">${_t(t,"no_entities")}</div>`;const s=this._legend(n);return R`<ha-card .header=${e.title}>
      <div
        class="content style-${this._styleName}"
        style=${void 0===r?W:`--cd-value-ch: ${r}`}
      >
        ${a}
      </div>
      ${s.length?R`<div class="legend">
              ${s.map(e=>R`<span class="legend-item"
                    ><span class="dot" style="background:${e.color}"></span>${e.text}</span
                  >`)}
            </div>`:W}
    </ha-card>`}}xb.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},xb.styles=[yb,...Object.values(Gy).map(e=>e.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",xb);const wb=window.customCards??=[];wb.some(e=>"chartdeck-card"===e.type)||wb.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{xb as ChartdeckCard};
