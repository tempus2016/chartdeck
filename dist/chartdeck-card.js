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
const w=globalThis,$=e=>e,k=w.trustedTypes,M=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+S,E=`<${A}>`,C=document,j=()=>C.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,O="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,P=/>/g,D=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,H=/"/g,I=/^(?:script|style|textarea|title)$/i,B=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),W=B(1),Z=B(2),q=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),V=new WeakMap,Y=C.createTreeWalker(C,129);function G(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},o){let a;this.parts=[];let n=0,r=0;const i=e.length-1,s=this.parts,[l,c]=((e,t)=>{const o=e.length-1,a=[];let n,r=2===t?"<svg>":3===t?"<math>":"",i=T;for(let s=0;s<o;s++){const t=e[s];let o,l,c=-1,d=0;for(;d<t.length&&(i.lastIndex=d,l=i.exec(t),null!==l);)d=i.lastIndex,i===T?"!--"===l[1]?i=F:void 0!==l[1]?i=P:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),i=D):void 0!==l[3]&&(i=D):i===D?">"===l[0]?(i=n??T,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,o=l[1],i=void 0===l[3]?D:'"'===l[3]?H:U):i===H||i===U?i=D:i===F||i===P?i=T:(i=D,n=void 0);const u=i===D&&e[s+1].startsWith("/>")?" ":"";r+=i===T?t+E:c>=0?(a.push(o),t.slice(0,c)+z+t.slice(c)+S+u):t+S+(-2===c?s:u)}return[G(e,r+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]})(e,t);if(this.el=X.createElement(l,o),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=Y.nextNode())&&s.length<i;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(z)){const t=c[r++],o=a.getAttribute(e).split(S),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:i[2],strings:o,ctor:"."===i[1]?te:"?"===i[1]?oe:"@"===i[1]?ae:ee}),a.removeAttribute(e)}else e.startsWith(S)&&(s.push({type:6,index:n}),a.removeAttribute(e));if(I.test(a.tagName)){const e=a.textContent.split(S),t=e.length-1;if(t>0){a.textContent=k?k.emptyScript:"";for(let o=0;o<t;o++)a.append(e[o],j()),Y.nextNode(),s.push({type:2,index:++n});a.append(e[t],j())}}}else if(8===a.nodeType)if(a.data===A)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(S,e+1));)s.push({type:7,index:n}),e+=S.length-1}n++}}static createElement(e,t){const o=C.createElement("template");return o.innerHTML=e,o}}function J(e,t,o=e,a){if(t===q)return t;let n=void 0!==a?o._$Co?.[a]:o._$Cl;const r=N(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,o,a)),void 0!==a?(o._$Co??=[])[a]=n:o._$Cl=n),void 0!==n&&(t=J(e,n._$AS(e,t.values),n,a)),t}let K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,a=(e?.creationScope??C).importNode(t,!0);Y.currentNode=a;let n=Y.nextNode(),r=0,i=0,s=o[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new Q(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ne(n,this,e)),this._$AV.push(t),s=o[++i]}r!==s?.index&&(n=Y.nextNode(),r++)}return Y.currentNode=C,a}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,a){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),N(e)?e===R||null==e||""===e?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,a="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=X.createElement(G(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new K(a,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new X(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,a=0;for(const n of e)a===t.length?t.push(o=new Q(this.O(j()),this.O(j()),this,this.options)):o=t[a],o._$AI(n),a++;a<t.length&&(this._$AR(o&&o._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}let ee=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,a,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=R}_$AI(e,t=this,o,a){const n=this.strings;let r=!1;if(void 0===n)e=J(this,e,t,0),r=!N(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const a=e;let i,s;for(e=n[0],i=0;i<n.length-1;i++)s=J(this,a[o+i],t,i),s===q&&(s=this._$AH[i]),r||=!N(s)||s!==this._$AH[i],s===R?e=R:e!==R&&(e+=(s??"")+n[i+1]),this._$AH[i]=s}r&&!a&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}}class oe extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}}class ae extends ee{constructor(e,t,o,a,n){super(e,t,o,a,n),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??R)===q)return;const o=this._$AH,a=e===R&&o!==R||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==R&&(o===R||a);a&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const re={I:Q},ie=w.litHtmlPolyfillSupport;ie?.(X,Q),(w.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;
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
 */function Se(e){return ze(e.tap_action)||ze(e.hold_action)||ze(e.double_tap_action)}function Ae(e,t){let o,a,n=0,r=0,i=!1,s=!1;const l=o=>{const a=t(),n="tap"===o?a.tap_action:"hold"===o?a.hold_action:a.double_tap_action;ze(n)&&e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:a,action:o}}))},c=()=>{void 0!==o&&clearTimeout(o),o=void 0},d=e=>{const a=e;a.button>0||(i=!0,s=!1,n=a.clientX,r=a.clientY,c(),ze(t().hold_action)&&(o=setTimeout(()=>{o=void 0,s=!0,l("hold")},500)))},u=e=>{if(!i)return;const t=e;Math.hypot(t.clientX-n,t.clientY-r)>10&&(c(),i=!1)},h=()=>{c(),i=!1},p=()=>{const e=i;c(),i=!1,e&&!s?ze(t().double_tap_action)?void 0!==a?(clearTimeout(a),a=void 0,l("double_tap")):a=setTimeout(()=>{a=void 0,l("tap")},250):l("tap"):s=!1},m=e=>{const t=e;t.repeat||"Enter"!==t.key&&" "!==t.key||(" "===t.key&&t.preventDefault(),l("tap"))},f=e=>{ze(t().hold_action)&&e.preventDefault()};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",u),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",h),e.addEventListener("pointerleave",h),e.addEventListener("keydown",m),e.addEventListener("contextmenu",f),()=>{c(),void 0!==a&&clearTimeout(a),a=void 0,e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",u),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",h),e.removeEventListener("pointerleave",h),e.removeEventListener("keydown",m),e.removeEventListener("contextmenu",f)}}const Ee={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function Ce(e){if(Object.prototype.hasOwnProperty.call(Ee,e)){const{variable:t,fallback:o}=Ee[e];return`var(${t}, ${o})`}return e}function je(e){const t=Ce(e);return{start:t,end:`color-mix(in srgb, ${t} 80%, #fff)`}}const Ne=new Set(["amber"]);function Le(e){if(Object.prototype.hasOwnProperty.call(Ee,e))return Ne.has(e)?"dark":"light";const t=function(e){const t=e.trim().toLowerCase(),o=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(o){const e=o[1].length<=4?[...o[1]].map(e=>e+e).join(""):o[1],[t,a,n]=[0,2,4].map(t=>parseInt(e.slice(t,t+2),16));return[t,a,n,8===e.length?parseInt(e.slice(6,8),16)/255:1]}const a=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(t);if(a){const[e,t,o]=[a[1],a[2],a[3]].map(e=>Math.min(255,Number(e))),n=void 0===a[4]?1:Number(a[4])/(a[5]?100:1);return[e,t,o,Math.min(1,n)]}}(e);return t?t[3]<.5?"theme":function([e,t,o]){const a=e=>{const t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return.2126*a(e)+.7152*a(t)+.0722*a(o)}([t[0],t[1],t[2]])>.4?"dark":"light":"light"}function Oe(e,t){let o=t[0];for(const a of t){if(!(a.from<=e))break;o=a}return o}function Te(e,t,o){const a=o?` ${o}`:"",n=[];return e.forEach((o,r)=>{const i=e[r+1],s=Ce(o.color);o.label?n.push({color:s,text:o.label}):Number.isFinite(o.from)?i?n.push({color:s,text:`${t(o.from)}–${t(i.from)}${a}`}):n.push({color:s,text:`${t(o.from)}${a}+`}):i&&n.push({color:s,text:`< ${t(i.from)}${a}`})}),n}const Fe={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},Pe=["label","area","floor","device_class","domain","entity"];function De(e,t){if(null==e)return;if("object"!=typeof e||Array.isArray(e))throw new Error(`"${t}" must list what to match, such as "area" or "device_class"`);const o="include"===t?Pe.filter(e=>"entity"!==e):Pe,a={};for(const[n,r]of Object.entries(e)){if(!o.includes(n))throw new Error(`"${t}" can't match on "${n}". Use: ${o.join(", ")}`);const e=(Array.isArray(r)?r:[r]).filter(e=>null!=e&&""!==e);if(e.some(e=>"string"!=typeof e))throw new Error(`"${t}.${n}" must be text or a list of text`);e.length&&(a[n]=e)}return Object.keys(a).length?a:void 0}function Ue(e){const t=e.state;return"unavailable"===t||"unknown"===t||""!==t.trim()&&Number.isFinite(Number(t))}function He(e,t){const o=e.entity_id,a=t.entities?.[o],n=a?.device_id?t.devices?.[a.device_id]:void 0,r=a?.area_id??n?.area_id??void 0,i=e.attributes?.device_class;return{label:[...a?.labels??[],...n?.labels??[]],area:r,floor:r?t.areas?.[r]?.floor_id??void 0:void 0,device_class:"string"==typeof i?i:void 0,domain:o.slice(0,o.indexOf(".")),entity:o}}function Ie(e,t,o){const a=e[t],n=o[t];return Array.isArray(n)?n.some(e=>a.includes(e)):void 0!==n&&a.includes(n)}function Be(e,t){return Object.keys(e).every(o=>Ie(e,o,t))}function We(e,t){return!!e&&Object.keys(e).some(o=>Ie(e,o,t))}const Ze=new WeakMap;const qe=e=>(Math.abs(e)<.005?0:e).toFixed(2);function Re(e,t,o,a){const n=a*Math.PI/180;return[e+o*Math.sin(n),t-o*Math.cos(n)]}function Ve(e,t,o,a,n){const r=String(Number(o.toFixed(2))),i=n-a,[s,l]=Re(e,t,o,a);if(i>=359.99){const[n,i]=Re(e,t,o,a+180);return`M${qe(s)} ${qe(l)} A${r} ${r} 0 1 1 ${qe(n)} ${qe(i)} A${r} ${r} 0 1 1 ${qe(s)} ${qe(l)}`}const[c,d]=Re(e,t,o,n),u=i>180?1:0;return`M${qe(s)} ${qe(l)} A${r} ${r} 0 ${u} 1 ${qe(c)} ${qe(d)}`}const Ye=["value","band","name","text","none"],Ge={ring:[-180,180],arc:[-135,135],needle:[-90,90]};function Xe(e,t){if(null==e||""===e)return;const o="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof o||!Number.isFinite(o)||o<-360||o>360)throw new Error(`"${t}" must be a number of degrees from -360 to 360`);return o}function Je(e,t){return[t?.startAngle??e[0],t?.endAngle??e[1]]}function Ke(e){return void 0!==e?.startAngle||void 0!==e?.endAngle}function Qe([e,t],o){return e+(t-e)*o}function et(...e){return{x0:Math.min(...e.map(e=>e.x0)),y0:Math.min(...e.map(e=>e.y0)),x1:Math.max(...e.map(e=>e.x1)),y1:Math.max(...e.map(e=>e.y1))}}function tt(e,t,o,a,n,r){const i=[a,n];for(let h=Math.ceil(a/90);90*h<=n;h++)i.push(90*h);const s=i.map(a=>Re(e,t,o,a)),l=Math.min(...s.map(e=>e[0])),c=Math.min(...s.map(e=>e[1])),d=Math.max(...s.map(e=>e[0])),u=Math.max(...s.map(e=>e[1]));return{x0:l-r,y0:c-r,x1:d+r,y1:u+r}}function ot(e,t=5){if(!Number.isFinite(e)||e<=0)return 1;const o=e/t,a=10**Math.floor(Math.log10(o)),n=o/a;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*a}function at(e,t){const o=e=>{const t=String(Number(e.toPrecision(12)));return t.includes("e")?0:t.split(".")[1]?.length??0};return Math.min(3,Math.max(o(t),o(e)))}function nt(e){const t=e*Math.PI/180,o=Math.sin(t),a=Math.cos(t);return{anchor:o>.3?"start":o<-.3?"end":"middle",dy:a>.3?0:a<-.3?.75:.35}}function rt(e,t){switch(t?.center??"value"){case"band":return e.band.label?{kind:"text",text:e.band.label,band:!0}:{kind:"value"};case"name":return{kind:"text",text:e.name,band:!1};case"text":return t.centerText?{kind:"text",text:t.centerText,band:!1}:{kind:"none"};case"none":return{kind:"none"};default:return{kind:"value"}}}const it=["bar","thin","segmented","tank","ring","needle","arc","line","column","area","combined","pie","rings","pictograph","waffle","histogram","scatter","bubble","heatmap","box","funnel","radar","polar_area","treemap","sunburst","icicle","grouped_bars","bullet","lollipop","waterfall","slope","dumbbell","range_area","sparkline","streamgraph","candlestick","violin","beeswarm","sankey","timeline","climate","wind_rose","day_clock","trend"],st=[{from:-1/0,color:"primary"}],lt=["none","ascending","descending"];function ct(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"==typeof e&&""!==e.trim()){const t=Number(e);return Number.isFinite(t)?t:void 0}}function dt(e,t){if(null==e||""===e)return;const o=ct(e);if(void 0!==o)return o;if("string"==typeof e)return e;throw new Error(`"${t}" must be a number or an entity id`)}function ut(e,t,o,a=1/0){if(null==e||""===e)return;const n=ct(e);if(void 0===n||!Number.isInteger(n)||n<o||n>a){throw new Error(`"${t}" must be a whole number ${a===1/0?`of at least ${o}`:`from ${o} to ${a}`}`)}return n}function ht(e){if(null==e)return;if(!Array.isArray(e))throw new Error('"severity" must be a list of bands');if(0===e.length)return;const t=e.map((e,t)=>{let o;try{o=dt(e?.from,"from")}catch{o=void 0}if(void 0===o)throw new Error(`Severity band ${t+1}: "from" must be a number or an entity id`);if("string"!=typeof e.color||!e.color)throw new Error(`Severity band ${t+1}: "color" is required`);return{...e,from:o}});return t.every(e=>"number"==typeof e.from)?t.sort((e,t)=>e.from-t.from):t}function pt(e,t,o){if(null==e)return{action:t};if("object"!=typeof e||"string"!=typeof e.action)throw new Error(`"${o}" must have an "action"`);return e}function mt(e,t){return void 0!==e?e:t}function ft(e,t,o){const a="string"==typeof e?{entity:e}:e;if(!a||"object"!=typeof a||"string"!=typeof a.entity||!a.entity)throw new Error(`Entity ${o+1} needs an "entity" id`);if(void 0!==a.attribute&&null!==a.attribute&&"string"!=typeof a.attribute)throw new Error(`Entity ${o+1}: "attribute" must be an attribute name`);const n=mt(dt(a.min,"min"),dt(t.min,"min"))??0,r=mt(dt(a.max,"max"),dt(t.max,"max"))??100;if("number"==typeof n&&"number"==typeof r&&n>=r)throw new Error(`"max" (${r}) must be greater than "min" (${n})`);const i={...a,entity:a.entity,min:n,max:r,severity:ht(a.severity)??ht(t.severity)??st,tap_action:pt(mt(a.tap_action,t.tap_action),"more-info","tap_action"),hold_action:pt(mt(a.hold_action,t.hold_action),"none","hold_action"),double_tap_action:pt(mt(a.double_tap_action,t.double_tap_action),"none","double_tap_action")},s=mt(a.name,t.name),l=mt(a.icon,t.icon),c=mt(a.unit,t.unit),d=mt(dt(a.target,"target"),dt(t.target,"target")),u=mt(ut(a.decimals,"decimals",0,20),ut(t.decimals,"decimals",0,20));return void 0!==s&&(i.name=s),void 0!==l&&(i.icon=l),void 0!==c&&(i.unit=c),void 0!==d&&(i.target=d),void 0!==u&&(i.decimals=u),a.attribute||delete i.attribute,Ge[t.style??"bar"]&&(i.gauge=function(e,t=e.style??"bar"){const o=Xe(e.start_angle,"start_angle"),a=Xe(e.end_angle,"end_angle"),n=Ge[t];if(n&&(void 0!==o||void 0!==a)){const[e,t]=[o??n[0],a??n[1]];if(!(t>e))throw new Error(`"end_angle" (${t}) must be greater than "start_angle" (${e})`);if(t-e>360)throw new Error('"end_angle" can be at most 360 degrees after "start_angle"')}const r=e.center??"value";if(!Ye.includes(r))throw new Error(`"center" must be one of: ${Ye.join(", ")}`);if(void 0!==e.center_text&&null!==e.center_text&&"string"!=typeof e.center_text)throw new Error('"center_text" must be text');if(void 0!==e.tick_labels&&"boolean"!=typeof e.tick_labels)throw new Error('"tick_labels" must be true or false');const i={center:r,centerText:e.center_text??"",tickLabels:!0===e.tick_labels};return void 0!==o&&(i.startAngle=o),void 0!==a&&(i.endAngle=a),i}(t)),i}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt=me(class extends fe{constructor(e){if(super(e),e.type!==he&&e.type!==de&&e.type!==pe)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===q||t===R)return t;const o=e.element,a=e.name;if(e.type===he){if(t===o[a])return q}else if(e.type===pe){if(!!t===o.hasAttribute(a))return q}else if(e.type===de&&o.getAttribute(a)===t+"")return q;return we(e),t}});var vt={entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_gauge_help:"Angles are in degrees, clockwise from the top: -90 is the left, 90 the right. Leave them empty for the style's usual shape.",editor_start_angle:"Start angle",editor_end_angle:"End angle",editor_center:"In the middle",editor_center_mode_value:"The value",editor_center_mode_band:"The colour band's label",editor_center_mode_name:"The name",editor_center_mode_text:"My own text",editor_center_mode_none:"Nothing",editor_center_text:"Text",editor_tick_labels:"Numbers on the scale",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours",annotation_at:"{label} at {time}",editor_orientation:"Direction",editor_orientation_horizontal:"Across",editor_orientation_vertical:"Upright",editor_value_axis:"Value labels",editor_value_grid:"Lines at each value label",editor_value_min:"Lowest value shown",editor_value_max:"Highest value shown",dist_median:"Median",dist_middle:"Middle half",dist_range:"Lowest – highest",dist_count:"Readings",editor_drill_down:"Tap a group to show what makes it up",drill_into:"{label}. Show what makes it up",drill_back:"Back to {name}",drill_top:"All",extremes_high:"High",extremes_low:"Low",extremes_average:"Avg",editor_extremes_max:"Mark the highest reading",editor_extremes_min:"Mark the lowest reading",editor_extremes_average:"Average",editor_extremes_average_none:"Don't show",editor_extremes_average_line:"Line across the chart",editor_extremes_average_figure:"Figure only",editor_extremes:"Mark highest, lowest and average",period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months",editor_color_by_shades:"Shades of one colour",editor_shade_color:"Shade colour (palette name or CSS colour)",editor_show_percent:"Show each share as a percentage",editor_center_total:"Total",editor_center_average:"Average",editor_center_none:"Nothing",parts_total:"Total",parts_average:"Average",parts_aria:"{style} of {names}",editor_style_scatter:"Scatter",editor_style_bubble:"Bubble",editor_against:"Along the bottom",editor_against_entity:"The first entity",editor_against_time:"Time",editor_dot_size:"Dot size (px)",editor_jitter:"Jitter (px)",editor_min_size:"Smallest bubble (px)",editor_max_size:"Largest bubble (px)",editor_dot_color:"Dot colour",editor_xy_x_axis:"Labels along the bottom",scatter_needs_two:"Add a second entity. The first goes along the bottom, the others up the side.",bubble_needs_three:"Add three entities: one along the bottom, one up the side, and one for the size of each bubble.",scatter_role_x:"Across",bubble_role_size:"Size",chart_total:"Total",editor_x_min:"Lowest value across",editor_x_max:"Highest value across",zoom_reset:"Reset zoom",zoom_window:"Shown: {from} to {to}",zoom_window_label:"Part of the chart shown",editor_zoom:"Zoom and pan (pinch, Ctrl + scroll or drag)",editor_overview:"Overview strip below the chart",editor_annotations:"Annotations",editor_annotation_type:"Kind",editor_annotation_type_line:"Line at a value",editor_annotation_type_band:"Shaded band of values",editor_annotation_type_time:"Marks at set times",editor_annotation_type_state:"Marks when an entity changes",editor_annotation_type_point:"Label on a reading",editor_annotation_add_line:"Line",editor_annotation_add_band:"Band",editor_annotation_add_time:"Times",editor_annotation_add_state:"State changes",editor_annotation_add_point:"Point label",editor_annotation_add:"Add an annotation:",editor_annotation_value:"Value (a number or an entity)",editor_annotation_from:"From (a number or an entity; blank for the bottom)",editor_annotation_to:"To (a number or an entity; blank for the top)",editor_annotation_times:"Times: 07:00 for every day, or 2026-10-28 07:00 (commas between)",editor_annotation_entity:"Entity",editor_annotation_series:"Series (blank for the first)",editor_annotation_state:"State (blank for every change)",editor_annotation_shade:"Shade while in this state",editor_annotation_at:"Reading",editor_annotation_at_max:"Highest",editor_annotation_at_min:"Lowest",editor_annotation_at_last:"Latest",editor_annotation_at_first:"First",editor_annotation_label:"Label",editor_annotation_color:"Colour",editor_annotation_dash:"Dashed",editor_annotation_remove:"Remove annotation",editor_zones:"Shade the severity bands behind the chart",editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)",editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_y_scale:"Value scale",editor_y_scale_linear:"Even steps",editor_y_scale_log:"Logarithmic (powers of ten)",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden",editor_labels_show:"Which readings",editor_labels_show_all:"All (as many as fit)",editor_labels_show_last:"The latest",editor_labels_show_minmax:"Highest and lowest",editor_labels_show_ends:"First and latest",editor_labels_position:"Label position",editor_labels_position_auto:"Above peaks, below dips",editor_labels_position_above:"Above",editor_labels_position_below:"Below",editor_labels_position_center:"On the point",editor_labels_overlap:"Let labels overlap",editor_sync:"Sync group (charts with the same name share the pointer and period steps)",editor_multiples:"A small chart for each entity",editor_multiples_scale:"Value scale",editor_multiples_scale_auto:"The same when the units match",editor_multiples_scale_shared:"The same for every chart",editor_multiples_scale_independent:"Each chart its own",editor_multiples_columns:"Columns (empty fits the card)",editor_set_point:"Show the set point",editor_shading:"Shade while heating or cooling",editor_shade_fan:"Shade while only the fan runs",editor_current_color:"Temperature colour",editor_set_point_color:"Set point colour",editor_heating_color:"Heating colour",editor_cooling_color:"Cooling colour",editor_days:"Days (more than 1 shows the average day)",editor_day_clock_center_total:"Time on",editor_day_clock_center_now:"The time now",editor_day_clock_center_none:"Nothing",editor_bucket:"One bar for every",editor_bucket_15:"15 minutes",editor_bucket_30:"30 minutes",editor_bucket_60:"Hour",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_ring_color:"Colour",editor_active:"Counts as on (empty: on, open, heating, home…)",editor_entity_options_none:"Add an entity above first.",editor_hierarchy_group_by:"Group by",editor_group_by_floor:"Floor",editor_group_by_area:"Area",editor_group_by_device:"Device",editor_group_by_label:"Label",editor_entity_groups:'Own group (wins over "Group by"; "Ground floor / Kitchen" for two levels)',editor_bar_labels:"Text on the bars",editor_bar_labels_state:"State",editor_bar_labels_duration:"How long",editor_bar_labels_both:"State and how long",editor_bar_labels_none:"None",editor_timeline_legend:"Legend of states",editor_timeline_legend_above:"Above the chart",editor_timeline_legend_hidden:"Hidden",editor_state_colors:"State colours",editor_state_colors_help:"A palette name (amber, green, blue, red, purple, grey, primary) or any CSS colour.",editor_state_colors_state:"State",editor_state_colors_color:"Colour",editor_state_colors_add:"Add a state colour",editor_state_colors_remove:"Remove",editor_timeline_group:"Group (rows with the same group share a heading)",editor_points_per_hour:"Points per hour (0 draws every reading)",editor_graph:"Graph",editor_graph_line:"Line",editor_graph_bar:"Bars",editor_graph_none:"None (value only)",editor_fill:"Fill under the line",editor_fill_solid:"Solid",editor_fill_fade:"Fade",editor_fill_none:"None",editor_points:"Dots on the line",editor_points_hover:"On hover",editor_points_always:"Always",editor_points_never:"Never",editor_trend_labels:"Highest and lowest labels",editor_labels_hover:"On hover",editor_labels_always:"Always",editor_labels_never:"Never",editor_height:"Graph height (per 500 px of width)",editor_bar_spacing:"Space between bars (px)",editor_color_transition:"Band colours",editor_color_transition_smooth:"Blend",editor_color_transition_hard:"Change at each band",editor_extrema:"Show lowest and highest",editor_average:"Show average",editor_trend_legend:"Legend (two or more entities)",editor_trend_y_min:"Lowest value (~ for soft)",editor_trend_y_max:"Highest value (~ for soft)",editor_min_range:"Smallest range shown",editor_y_min_secondary:"Right axis lowest (~ for soft)",editor_y_max_secondary:"Right axis highest (~ for soft)",editor_min_range_secondary:"Right axis smallest range",editor_value_factor:"Scale by 10 to the power of",editor_align_header:"Name and icon",editor_align_header_default:"Spread out",editor_align_header_left:"Left",editor_align_header_right:"Right",editor_align_header_center:"Centre",editor_align_icon:"Icon",editor_align_icon_right:"Right of the name",editor_align_icon_left:"Left of the name",editor_align_icon_state:"Beside the value",editor_align_state:"Value",editor_align_state_left:"Left",editor_align_state_right:"Right",editor_align_state_center:"Centre",editor_font_size:"Value size (%)",editor_font_size_header:"Name size (px)",editor_color_name:"Colour the name",editor_color_value:"Colour the value",editor_trend_color_icon:"Colour the icon",editor_trend_group:"No background (inside another card)",editor_icon_image:"Image instead of the icon (URL)",editor_trend_tooltip:"Show the value under the pointer",editor_y_axis_side:"Axis",editor_y_axis_side_primary:"Left",editor_y_axis_side_secondary:"Right (its own scale)",editor_entity_aggregate:"Combine with",editor_fixed_value:"Draw the current value as a flat line",editor_show_state:"Show its value beside the main one",editor_show_indicator:"Colour dot by the value",editor_show_graph:"On the graph",editor_show_line:"Line",editor_show_fill:"Fill",editor_show_points:"Dots",editor_show_legend_entity:"In the legend",editor_show_legend_state:"Value in the legend",editor_sectors:"Directions",editor_sectors_4:"4 (N, E, S, W)",editor_sectors_8:"8 (N, NE, E…)",editor_sectors_16:"16 (N, NNE, NE…)",editor_calm:"Calm below (blank: 0.5 m/s, or the same in km/h, mph or knots)",editor_wind_roles:"The first entity is the wind direction, in degrees or compass points such as SW. The second is the wind speed: without one, the petals only show how often the wind came from each way.",editor_wind_now:"Direction: {direction}. Speed: {speed}.",editor_wind_none:"none",editor_wind_statistics:"Long-term statistics give each hour's average direction. That is only right across north when the sensor records direction as an angle (state class measurement_angle); otherwise an hour swinging between NNW and NNE averages to south. History is exact.",editor_style_area:"Area",editor_stack:"Stack",editor_stack_none:"Don't stack",editor_stack_normal:"On top of each other",editor_stack_percent:"To 100 %",editor_negative_color:"Colour below zero",editor_style_beeswarm:"Beeswarm",editor_place_by:"Place each dot by",editor_place_by_value:"Its value",editor_place_by_time_of_day:"The time of day it happened",editor_size_by_value:"Bigger dots for bigger values",swarm_readings:"{n} readings",swarm_events:"{n} times on",swarm_shown:"Dots shown",swarm_none:"No readings",swarm_earliest_latest:"Earliest – latest",swarm_lowest_highest:"Lowest – highest",editor_fill_color:"Colour",editor_style_box:"Box plot",box_aria:"Box plot of {names}",box_highest:"Highest",box_upper_quartile:"Upper quartile",box_median:"Median",box_lower_quartile:"Lower quartile",box_lowest:"Lowest",box_mean:"Average",box_count:"Readings",box_outliers:"Outliers",editor_whiskers:"Whiskers reach",editor_whiskers_tukey:"1.5 × box height (outliers as dots)",editor_whiskers_range:"The lowest and highest",editor_readings:"Show each reading as a dot",editor_box_color:"Box colour",editor_style_bullet:"Bullet",editor_ranges:"Ranges behind the bar",editor_ranges_shades:"Shades of grey",editor_ranges_colours:"Colour band colours",compare_target:"target {target}",chart_aria:"{style} chart of {names}",editor_style_candlestick:"Candlestick",editor_candle_by:"One candle per",editor_under_aggregate:"Entities underneath: combine readings with",editor_up_color:"Colour when it rose",editor_down_color:"Colour when it fell",editor_underneath:"Draw the other entities underneath as",editor_underneath_columns:"Columns",editor_underneath_line:"A line",candle_open:"Open",candle_high:"High",candle_low:"Low",candle_close:"Close",candle_week_of:"Week of {date}",editor_style_climate:"Climate",climate_set_point:"Set point",climate_range:"{low} – {high}",climate_not_thermostat:"{name} is not a thermostat. Pick a climate entity.",climate_action_heating:"Heating",climate_action_preheating:"Preheating",climate_action_cooling:"Cooling",climate_action_defrosting:"Defrosting",climate_action_drying:"Drying",climate_action_fan:"Fan",climate_action_idle:"Idle",climate_action_off:"Off",editor_style_column:"Column",editor_group_by_auto:"Automatic",editor_range:"Lowest to highest in each column",editor_rounded:"Rounded ends",editor_column_labels:"Show values on the columns",editor_column_color:"Colour",editor_style_combined:"Combined",editor_series_type:"Draw as",editor_series_type_line:"Line",editor_series_type_column:"Columns",editor_series_type_area:"Area",editor_series_axis:"Value axis",editor_series_axis_auto:"Automatic (by unit)",editor_series_axis_left:"Left",editor_series_axis_right:"Right",editor_series_aggregate:"Combine with",editor_series_aggregate_auto:"As the card",editor_series_aggregate_mean:"Average",editor_series_aggregate_sum:"Sum",editor_series_aggregate_min:"Lowest",editor_series_aggregate_max:"Highest",editor_series_aggregate_first:"First",editor_series_aggregate_last:"Last",editor_series_aggregate_change:"Change (meters that count up)",editor_style_day_clock:"24-hour clock",day_clock_times_one:"once",day_clock_times:"{n} times",day_clock_a_day:"{text} a day",day_clock_busiest:"{total} · busiest {time}",day_clock_peak:"peak {value} at {time}",day_clock_state:"{name} {state}",day_clock_per_day:"{label} per day",day_clock_no_data:"Nothing recorded",day_clock_now:"Now",day_clock_on:"on",day_clock_average:"Average day · last {n} days",day_clock_on_days:"on {on} of {of} days",day_clock_so_far:"{duration} so far",day_clock_range:"{from} – {to}",day_clock_average_value:"{value} on average",editor_style_dumbbell:"Dumbbell",editor_ends:"Compare",editor_ends_range:"Lowest and highest in the period",editor_ends_then:"Start of the period and now",editor_ends_target:"Target and now",editor_show_now:"Mark the current value",dumbbell_low:"Low",dumbbell_high:"High",dumbbell_now:"Now",dumbbell_target:"Target",dumbbell_ago_hour_one:"An hour ago",dumbbell_ago_hour:"{n} hours ago",dumbbell_ago_day_one:"A day ago",dumbbell_ago_day:"{n} days ago",dumbbell_ago_week_one:"A week ago",dumbbell_ago_week:"{n} weeks ago",dumbbell_ago_month_one:"A month ago",dumbbell_ago_month:"{n} months ago",dumbbell_no_value:"No value",editor_style_funnel:"Funnel",editor_funnel_shape:"Shape",editor_funnel_shape_funnel:"Funnel (first stage at the top)",editor_funnel_shape_pyramid:"Pyramid (first stage at the bottom)",editor_funnel_percent_of:"Percentages",editor_funnel_percent_of_first:"Share of the first stage",editor_funnel_percent_of_previous:"Share of the stage before",editor_funnel_percent_of_none:"Don't show",editor_funnel_color_by:"Colour",editor_funnel_color_by_series:"One colour per entity",editor_funnel_color_by_bands:"By colour band",funnel_aria:"{style} of {names}",editor_style_grouped_bars:"Grouped bars",editor_mode:"Bars",editor_mode_grouped:"Side by side",editor_mode_stacked:"Stacked",editor_mode_percent:"Stacked to 100 %",editor_bars_color_by:"Colour",editor_bars_color_by_series:"One colour per series",editor_bars_color_by_bands:"By colour band",editor_bar_group:"Row",editor_bar_series:"Series",editor_bar_color:"Bar colour",grouped_bars_aria:"Bar chart of {names}",editor_style_heatmap:"Heatmap",heatmap_aria:"Heatmap of {name}",heatmap_hours:"Days averaged",heatmap_empty:"No readings",editor_grid:"Layout",editor_grid_hours:"Hour by weekday",editor_grid_calendar:"Calendar (a day per cell)",editor_color_by_scale:"Smooth scale",editor_cell_shape:"Cells",editor_cell_shape_square:"Square",editor_cell_shape_rounded:"Rounded",editor_cell_shape_hexagon:"Hexagon",editor_color_min:"Lowest colour at",editor_color_max:"Highest colour at",editor_legend:"Legend",editor_style_histogram:"Histogram",editor_count:"Count",editor_count_time:"Time spent in each range",editor_count_readings:"Readings in each range",editor_show_as:"Show as",editor_show_as_percent:"Share of the whole (%)",editor_show_as_total:"Hours or readings",editor_bins:"Number of bins (empty: automatic)",editor_bin_width:"Bin width (wins over the number)",editor_bars:"Two or more entities",editor_bars_side:"Bars side by side",editor_bars_overlap:"Bars over each other",editor_hist_x_axis:"Value labels along the bottom",histogram_readings:"{n} readings",histogram_reading:"1 reading",editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",chart_log_nothing:"Nothing above zero to draw on a log scale.",editor_style_lollipop:"Lollipop",editor_style_pictograph:"Pictograph",editor_unit_icon:"Icon (each entity can have its own)",editor_per_icon:"Each icon stands for (empty: automatic)",editor_group_size:"Icons per group (0: no groups)",editor_partial:"Part-fill an icon for fractions",editor_style_pie:"Pie / donut",editor_shape:"Shape",editor_shape_donut:"Donut",editor_shape_pie:"Pie",editor_center_label:"Line under the total",editor_gap:"Space between slices",editor_gradient:"Gradient fills",editor_style_polar_area:"Polar area",editor_polar_scale:"Scale",editor_polar_scale_shared:"One scale for all, from 0 to the largest value",editor_polar_scale_limits:"Each slice from its entity's minimum to maximum",editor_polar_color_by:"Colour",editor_polar_color_by_series:"One colour per entity",editor_polar_color_by_shades:"Shades of one colour, darker for more",editor_polar_color_by_bands:"By colour band",editor_polar_color:"Colour for shades",polar_area_aria:"Polar area chart of {names}",editor_style_radar:"Radar",editor_radar_scale:"Scale",editor_radar_scale_limits:"Each axis from its entity's minimum to maximum",editor_radar_scale_shared:"One scale for all, from 0 to the largest value",editor_radar_fill:"Fill the shapes",editor_radar_axis:"Axis name (entities with the same axis name line up across groups)",radar_aria:"Radar chart of {names}",radar_other:"Other",editor_style_range_area:"Range area",editor_mean:"Draw the average as a line",editor_range_color:"Colour",editor_style_rings:"Rings",editor_rings_start_angle:"Start angle (0 is the top)",editor_rounded_ends:"Rounded ends",editor_style_sankey:"Sankey (flow)",editor_link_color:"Colour flows by",editor_link_color_auto:"Where they come from, or where they go after a middle node",editor_link_color_source:"Where they come from",editor_link_color_target:"Where they go",editor_from:"Flows from",editor_to:"Flows to",editor_flow_color:"Flow colour",sankey_aria:"Flow chart: {flows}",sankey_flow:"{from} to {to} {value}",sankey_no_flows:'Give each entity a "Flows from" and a "Flows to" in its options.',sankey_nothing:"Nothing is flowing right now.",editor_style_slope:"Slope",editor_measure:"Compare",editor_measure_value:"The reading then and now",editor_measure_change:"How much it rose in each period (meters)",editor_color_by_direction:"Up or down",editor_color_by_group:"By group",editor_increase:"A rise is",editor_increase_bad:"Bad (red)",editor_increase_good:"Good (green)",editor_group:"Group",slope_now:"Now",slope_ago:"{n} {unit} ago",slope_ago_one:"A {unit} ago",slope_previous:"Previous {n} {unit}",slope_previous_one:"Previous {unit}",slope_last:"Last {n} {unit}",slope_last_one:"Last {unit}",slope_unit_hour:"hour",slope_unit_hour_other:"hours",slope_unit_day:"day",slope_unit_day_other:"days",slope_unit_week:"week",slope_unit_week_other:"weeks",slope_unit_month:"month",slope_unit_month_other:"months",slope_entity_aria:"{name}, {from} to {to}",slope_no_reading:"no reading",editor_style_sparkline:"Sparklines",editor_spark:"Sparkline",editor_spark_line:"Line",editor_spark_area:"Area",editor_spark_column:"Columns",editor_spark_bar:"Bar under the name and value",editor_spark_color:"Colour",spark_aria:"Trend of {name}",editor_style_streamgraph:"Streamgraph",editor_baseline:"Shape",editor_baseline_wiggle:"Streamgraph (flowing)",editor_baseline_centre:"Centred",editor_baseline_share:"Share of the total (100 %)",editor_baseline_zero:"Stacked from zero",editor_stream_order:"Order",editor_stream_order_inside_out:"Biggest in the middle",editor_stream_order_listed:"As listed, first at the bottom",editor_stream_labels:"Names on the streams",editor_stream_curve:"Edges",stream_total:"Total",editor_style_sunburst:"Sunburst",editor_style_icicle:"Icicle",editor_sunburst_shape:"Shape",editor_sunburst_shape_full:"Full circle",editor_sunburst_shape_half:"Half circle",editor_hierarchy_color_by:"Colour",editor_hierarchy_color_by_group:"One colour per group",editor_hierarchy_color_by_bands:"By colour band",hierarchy_total:"Total",hierarchy_other:"Other",hierarchy_empty:"Nothing to show: no entity has a value above zero.",hierarchy_no_reading:"No reading:",sunburst_aria:"Sunburst of {names}",icicle_aria:"Icicle chart of {names}",editor_style_timeline:"State timeline",timeline_no_states:"No states recorded in this period.",timeline_for:"for {duration}",timeline_now:"Now",timeline_measurement:"Readings, not states: a line chart suits this one",editor_style_treemap:"Treemap",editor_treemap_color_by:"Colour",editor_treemap_color_by_group:"One colour per group",editor_treemap_color_by_bands:"By colour band",treemap_aria:"Treemap of {names}",treemap_total:"{value} in all",treemap_empty:"Nothing to show: no entity has a value above zero.",treemap_no_reading:"No reading:",treemap_other:"Other",editor_style_trend:"Trend",trend_min:"Low",trend_avg:"Average",trend_max:"High",editor_style_violin:"Violin",editor_shape_violin:"Violin",editor_shape_raincloud:"Raincloud (half violin, box and readings)",editor_box:"Box with the median and middle half",editor_bandwidth:"Smoothing (in the entity’s unit, empty for automatic)",editor_split_by:"One shape per",editor_split_by_none:"Entity",editor_split_by_day:"Entity and day",editor_split_by_week:"Entity and week",editor_split_by_month:"Entity and month",violin_median:"median {value}",violin_none:"No readings",violin_raincloud:"Raincloud",editor_style_waffle:"Waffle",editor_waffles:"Waffles",editor_waffles_one:"One, split between the entities",editor_waffles_each:"One per entity, side by side",editor_headline:"Show the first share in large type",editor_style_waterfall:"Waterfall",editor_steps:"Each step is",editor_steps_change:"How much it changed in the period",editor_steps_current:"Its current value",editor_start_from_first:"Start from the first entity's reading at the start of the period",editor_total:"Show the total at the end",editor_waterfall_invert:"Counts down (a rise in these is a drop in the total)",waterfall_start:"Start",waterfall_end:"End",waterfall_total:"Total",waterfall_no_readings:"No readings",waterfall_aria:"Waterfall chart: {bars}",editor_style_wind_rose:"Wind rose",wind_prevailing:"Prevailing",wind_mean_speed:"Mean speed",wind_strongest:"Strongest",wind_calm:"Calm",wind_speed:"Speed",wind_speed_unit:"Speed ({unit})",wind_share:"Of the time",wind_aria:"Wind rose, prevailing {direction} {share}",wind_aria_calm:"Wind rose, prevailing {direction} {share}, calm {calm}",wind_aria_still:"Wind rose, calm {calm}"};const yt="en",bt={[yt]:vt},_t={de:()=>import("./chartdeck-card.de-aHFDhWpe.js"),es:()=>import("./chartdeck-card.es-Bjbhmsp-.js"),fr:()=>import("./chartdeck-card.fr-Bux47UXp.js"),nl:()=>import("./chartdeck-card.nl-DvVzFIch.js"),pt:()=>import("./chartdeck-card.pt-D8OdPLlD.js")},xt=new Map,wt="chartdeck-language-loaded";function $t(e){const t=[e];return e.includes("-")&&t.push(e.split("-")[0]),t}function kt(e){const t=$t(e).find(e=>void 0!==_t[e]);if(!t||bt[t])return Promise.resolve();let o=xt.get(t);return o||(o=_t[t]().then(e=>{return o=t,a=e.default,bt[o]=a,void("undefined"!=typeof window&&window.dispatchEvent(new Event(wt)));var o,a}).catch(()=>{xt.delete(t)}),xt.set(t,o)),o}function Mt(e){const t=function(e){return e?.locale?.language??e?.language??yt}(e),o=$t(t).find(e=>void 0!==bt[e]);return o||(kt(t),yt)}function zt(e,t,o){const a=bt[Mt(e)][t]??bt[yt][t]??t;return o?a.replace(/\{(\w+)\}/g,(e,t)=>t in o?String(o[t]):e):a}Object.keys(_t);{const e=function(){if("undefined"!=typeof document){const e=document.querySelector("home-assistant")?.hass,t=e?.locale?.language??e?.language;if(t)return t}try{const e=JSON.parse(globalThis.localStorage?.getItem("selectedLanguage")??"null");if("string"==typeof e&&e)return e}catch{}}();e&&kt(e)}function St(e){return null==e||""===e}function At(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function Et(e,t,o){const[a,...n]=t,r=function(e,t){return Array.isArray(e)?[...e]:At(e)?{...e}:"number"==typeof t?[]:{}}(e,a),i=r,s=n.length?Et(i[a],n,o):o,l=n.length>0&&At(s)&&0===Object.keys(s).length;return St(s)?Array.isArray(r)&&"number"==typeof a?r.splice(a,1):delete i[a]:l&&At(r)?delete i[a]:i[a]=s,r}function Ct(e,t,o){return 0===t.length||St(o)&&void 0===function(e,t){let o=e;for(const a of t){if("object"!=typeof o||null===o)return;o=o[a]}return o}(e,t)?e:Et(e,t,o)}function jt(e){return"string"==typeof e?e:e.entity}function Nt(e,t,o,a){if("entity"===o&&(St(a)||"string"!=typeof a))return e;const n=[...e.entities??[]],r=n[t];if(void 0===r)return e;const i="string"==typeof r?{entity:r}:{...r};St(a)?delete i[o]:i[o]=a;const s=Object.keys(i);return n[t]=1===s.length&&"entity"===s[0]&&"string"==typeof i.entity?i.entity:i,{...e,entities:n}}const Lt=2.5,Ot=.5,Tt=12;function Ft(e,t){const o=e;return{width:o.line_width??t.line_width??Lt,dots:o.dots??!0===t.dots,onTop:!0===o.on_top}}function Pt(e,t){return[...e.filter(e=>!t(e)),...e.filter(t)]}function Dt(e){return e.map(([e,t])=>`M${Math.round(100*e)/100},${Math.round(100*t)/100}h0`).join("")}function Ut(e){return Math.round(10*(e+3.5))/10}function Ht(e,t){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<Ot||e>Tt))throw new Error(`${t} must be a number from 0.5 to 12`)}function It(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`${t} must be true or false`)}function Bt(e){Ht(e.line_width,'"line_width"'),It(e.dots,'"dots"');for(const t of e.entities??[])"object"==typeof t&&(Ht(t.line_width,`"line_width" of ${t.entity}`),It(t.dots,`"dots" of ${t.entity}`),It(t.on_top,`"on_top" of ${t.entity}`))}const Wt={energy:{Wh:[1,0],kWh:[1e3,0],MWh:[1e6,0],GWh:[1e9,0]},power:{W:[1,0],kW:[1e3,0],MW:[1e6,0]},temperature:{"°C":[1,0],"°F":[5/9,-160/9],K:[1,-273.15]},speed:{"m/s":[1,0],"km/h":[1/3.6,0],mph:[.44704,0],kn:[1852/3600,0],"ft/s":[.3048,0]},pressure:{Pa:[1,0],hPa:[100,0],mbar:[100,0],kPa:[1e3,0],bar:[1e5,0],inHg:[3386.389,0],mmHg:[133.322387415,0],psi:[6894.757293168,0]},length:{mm:[1,0],cm:[10,0],m:[1e3,0],in:[25.4,0],ft:[304.8,0]}},Zt=new Map;for(const[Db,Ub]of Object.entries(Wt))for(const e of Object.keys(Ub))Zt.set(e,Db);function qt(e,t){if(void 0===e||void 0===t||e===t)return;const o=Zt.get(e);if(!o||Zt.get(t)!==o)return;const[a,n]=Wt[o][e],[r,i]=Wt[o][t];return{from:e,to:t,slope:a/r,apply:e=>(e*a+n-i)/r}}function Rt(e,t){if(!t)return e;const o=e=>"number"==typeof e?t.apply(e):e;return e.map(e=>{const a={...e,v:null===e.v?null:t.apply(e.v)};return void 0!==e.min&&(a.min=o(e.min)),void 0!==e.max&&(a.max=o(e.max)),a})}const Vt=[{name:"title",path:["title"]}],Yt=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],Gt=[{name:"color_icon",path:["color_icon"],default:!1}],Xt=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],Jt=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],Kt=[{name:"start_angle",path:["start_angle"]},{name:"end_angle",path:["end_angle"]},{name:"center",path:["center"],default:"value"},{name:"center_text",path:["center_text"]},{name:"tick_labels",path:["tick_labels"],default:!1}],Qt=new Map;const eo=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],to=[{name:"attribute",path:["attribute"]}],oo=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],ao={number:{min:Ot,max:Tt,step:.5,mode:"box",unit_of_measurement:"px"}},no=new Map;function ro(e){let t=no.get(e);return t||(t=[...oo,{name:"dots",path:["dots"],default:e}],no.set(e,t)),t}const io=Jt.map(({name:e,path:t})=>({name:e,path:t})),so=[{name:"title",selector:{text:{}}}],lo=Jt.map(({name:e})=>({name:e,selector:{ui_action:{}}})),co=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],uo=new Map;let ho;function po(e){const t=Mt(e);if(ho?.language!==t){const o=t=>zt(e,t);ho={language:t,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(e=>({value:e,label:o(`editor_curve_${e}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:ao},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return ho.schema}const mo=new Map;function fo(e){const t=function(e){const t=void 0===e?void 0:Zt.get(e);return t?[e,...Object.keys(Wt[t]).filter(t=>t!==e)]:[]}(e);if(0===t.length)return co;const o=t[0];let a=mo.get(o);if(!a){const e=co[0];a=[{...e,schema:e.schema.map(e=>"unit"===e.name?{name:"unit",selector:{select:{mode:"dropdown",custom_value:!0,options:t}}}:e)}],mo.set(o,a)}return a}function go(e){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(t=>({value:t,label:zt(e,`editor_sort_${t}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const vo={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function yo(e,t){const o=e=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:e}});switch(e){case"device_class":return o(t.deviceClasses);case"domain":return o(t.domains);case"entity":return{entity:{multiple:!0}};default:return{[e]:{multiple:!0}}}}const bo=new Map;function _o(e,t){const o=function(e){const t=new Set,o=new Set;for(const a of Object.values(e?.states??{})){const e=a.attributes?.device_class;"string"==typeof e&&e&&t.add(e),o.add(a.entity_id.slice(0,a.entity_id.indexOf(".")))}return{deviceClasses:[...t].sort(),domains:[...o].sort()}}(t),a=`${o.deviceClasses.join()}|${o.domains.join()}`,n=bo.get(e);if(n?.key===a)return n.schema;const r=vo[e].map(t=>({name:`${e}_${t}`,selector:yo(t,o)}));return bo.set(e,{key:a,schema:r}),r}let xo;function wo(e,t){let o=e;for(const a of t){if("object"!=typeof o||null===o)return;o=o[a]}return o}function $o(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;const o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every(o=>$o(e[o],t[o]))}function ko(e,t){const o={};for(const a of t){const t=wo(e,a.path)??a.default;void 0!==t&&(o[a.name]=t)}return o}function Mo(e,t,o){const a=ko(e,t);let n=e;for(const r of t){const e=o[r.name];$o(a[r.name],e)||(n=Ct(n,r.path,void 0!==r.default&&$o(e,r.default)?void 0:e))}return n}const zo="var(--divider-color, rgba(127, 127, 127, 0.3))",So="var(--primary-color, #03a9f4)",Ao="var(--secondary-text-color, #727272)";function Eo(e,t,o,a){const n=(a-90)*Math.PI/180;return[(e+o*Math.cos(n)).toFixed(2),(t+o*Math.sin(n)).toFixed(2)]}function Co(e,t,o,a){return Eo(e,t,o,a).join(" ")}function jo(e,t,o,a,n){const r=n-a>180?1:0;return`M ${Co(e,t,o,a)} A ${o} ${o} 0 ${r} 1 ${Co(e,t,o,n)}`}function No(e){return W`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(e){switch(e){case"bar":return Z`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${zo} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${So} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${zo} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${So} />`;case"thin":return Z`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${Ao} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${zo} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${So} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${Ao} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${zo} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${So} />`;case"segmented":return Z`${[0,1].map(e=>Array.from({length:8},(t,o)=>Z`<rect x=${6+6.75*o} y=${0===e?9:23} width="5" height="9" rx="1.5"
            fill=${o<(0===e?6:3)?So:zo} />`))}`;case"tank":return Z`${[14,36].map((e,t)=>Z`
          <rect x=${e} y="5" width="14" height="30" rx="4" fill=${zo} />
          <rect x=${e} y=${0===t?13:23} width="14" height=${0===t?22:12} rx="4" fill=${So} />`)}`;case"ring":return Z`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${zo} stroke-width="5" />
        <path d=${jo(32,20,14,0,250)} fill="none" stroke=${So} stroke-width="5" stroke-linecap="round" />`;case"arc":return Z`
        <path d=${jo(32,21,14,-135,135)} fill="none" stroke=${zo} stroke-width="5" stroke-linecap="round" />
        <path d=${jo(32,21,14,-135,40)} fill="none" stroke=${So} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[e,t]=Eo(32,32,18,25);return Z`
        <path d=${jo(32,32,22,-90,90)} fill="none" stroke=${zo} stroke-width="5" />
        <path d=${jo(32,32,22,-90,25)} fill="none" stroke=${So} stroke-width="5" />
        <line x1="32" y1="32" x2=${e} y2=${t} stroke=${Ao} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${Ao} />`}default:return Z``}}(e)}
  </svg>`}function Lo(e){let t=1/0,o=-1/0;for(const a of e)for(const e of a)for(const a of[e.v,e.min,e.max])"number"==typeof a&&(a<t&&(t=a),a>o&&(o=a));return t===1/0?void 0:[t,o]}function Oo([e,t],o=.08){if(e===t)return[e-1,t+1];const a=(t-e)*o;return[e-a,t+a]}function To(e,t){const[o,a]=e,[n,r]=t,i=a===o?0:(r-n)/(a-o);return e=>n+(e-o)*i}const Fo=["linear","log"],Po=["outside","inside"],Do=!0,Uo=!0,Ho="outside",Io=!0,Bo=!1,Wo="linear",Zo=e=>"number"==typeof e&&Number.isFinite(e);function qo(e){const t=e;for(const o of["x_axis","y_axis"])if(void 0!==t[o]&&"boolean"!=typeof t[o])throw new Error(`"${o}" must be true or false`);if(void 0!==t.axis_labels&&!Po.includes(t.axis_labels))throw new Error(`"axis_labels" must be one of: ${Po.join(", ")}`);if(void 0!==t.gridlines){const e=t.gridlines;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const t of["horizontal","vertical"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"gridlines.${t}" must be true or false`)}for(const o of["y_min","y_max"])if(void 0!==t[o]&&!Zo(t[o]))throw new Error(`"${o}" must be a number`);if(Zo(t.y_min)&&Zo(t.y_max)&&t.y_min>=t.y_max)throw new Error('"y_min" must be below "y_max"');if(void 0!==t.y_scale&&!Fo.includes(t.y_scale))throw new Error(`"y_scale" must be one of: ${Fo.join(", ")}`);if("log"===t.y_scale)for(const o of["y_min","y_max"])if(Zo(t[o])&&t[o]<=0)throw new Error(`"${o}" must be above 0 on a log scale`)}function Ro(e){const t=e,o=t.gridlines??{};return{x:t.x_axis??Do,y:t.y_axis??Uo,labels:t.axis_labels??Ho,horizontal:o.horizontal??Io,vertical:o.vertical??Bo,min:Zo(t.y_min)?t.y_min:void 0,max:Zo(t.y_max)?t.y_max:void 0,scale:t.y_scale??Wo}}function Vo(e,t){if(!(e>0&&Number.isFinite(e)))return 1;const o=e/Math.max(1,t),a=10**Math.floor(Math.log10(o));for(const n of[1,2,5])if(n*a>=o*(1-1e-9))return n*a;return 10*a}function Yo(e){return Math.max(0,-Math.floor(Math.log10(e)+1e-9))}const Go=e=>Number(e.toPrecision(12));function Xo(e,t,o){let[a,n]=Oo(e??[0,1]);void 0!==t.min&&(a=t.min),void 0!==t.max&&(n=t.max),n<=a&&(void 0!==t.min?n=a+Math.max(1,.1*Math.abs(a)):a=n-Math.max(1,.1*Math.abs(n)));const r=Vo(n-a,o);void 0===t.min&&(a=Go(Math.floor(a/r+1e-9)*r)),void 0===t.max&&(n=Go(Math.ceil(n/r-1e-9)*r));const i=[];for(let s=Math.ceil(a/r-1e-9);s*r<=n+1e-9*r;s++)i.push(Go(s*r));return{domain:[a,n],ticks:i,decimals:Yo(r)}}const Jo=6e4,Ko=36e5,Qo=864e5,ea=[...[1,5,10,15,30].map(e=>({unit:"minute",n:e,ms:e*Jo})),...[1,2,3,6,12].map(e=>({unit:"hour",n:e,ms:e*Ko})),...[1,2,7].map(e=>({unit:"day",n:e,ms:e*Qo})),...[1,2,3,6].map(e=>({unit:"month",n:e,ms:30.44*e*Qo})),...[1,2,5,10,20,50,100].map(e=>({unit:"year",n:e,ms:365.25*e*Qo}))];const ta=e=>-new Date(e).getTimezoneOffset()*Jo;function oa(e){if(!e)return ta;let t;try{t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return ta}return e=>{const o={};for(const a of t.formatToParts(e))o[a.type]=Number(a.value);return Date.UTC(o.year,o.month-1,o.day,o.hour%24,o.minute,o.second)-1e3*Math.floor(e/1e3)}}function aa(e,t){return e-t(e-t(e))}function na(e,t,o,a){const n=[],r=e.end+t(e.end);for(let i=o,s=0;i<=r&&s<1e3;i=a(i),s++){const o=aa(i,t);o>=e.start&&o<=e.end&&o!==n[n.length-1]&&n.push(o)}return n}function ra(e,t,o=ta){const{unit:a,n:n}=function(e,t){return ea.find(o=>e/o.ms<=Math.max(1,t))??ea[ea.length-1]}(e.end-e.start,t),r=e.start+o(e.start);if("minute"===a||"hour"===a||"day"===a&&7!==n){const t=n*("minute"===a?Jo:"hour"===a?Ko:Qo);return{unit:a,ticks:na(e,o,Math.ceil(r/t)*t,e=>e+t)}}if("day"===a){const t=Math.ceil(r/Qo);return{unit:a,ticks:na(e,o,(t+((4-t)%7+7)%7)*Qo,e=>e+7*Qo)}}const i=new Date(r);if("month"===a){let t=i.getUTCFullYear(),s=i.getUTCMonth();Date.UTC(t,s)<r&&(s+=1),s=Math.ceil(s/n)*n,t+=Math.floor(s/12),s%=12;const l=e=>{const t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+n)};return{unit:a,ticks:na(e,o,Date.UTC(t,s),l)}}let s=i.getUTCFullYear();return Date.UTC(s,0)<r&&(s+=1),s=Math.ceil(s/n)*n,{unit:a,ticks:na(e,o,Date.UTC(s,0),e=>Date.UTC(new Date(e).getUTCFullYear()+n,0))}}function ia(e){return"server"===e?.locale?.time_zone?e.config?.time_zone:void 0}function sa(e){const t=e?.locale?.time_format;return"12"===t||"24"!==t&&void 0}const la=new Map;function ca(e,t,o){const a=`${e}|${t}|${JSON.stringify(o)}`;let n=la.get(a);if(!n){try{n=new Intl.DateTimeFormat(e,{...o,timeZone:t})}catch{n=new Intl.DateTimeFormat(void 0,o)}la.set(a,n)}return n}function da(e,t,o=!1){return ca(t?.locale?.language??"en",ia(t),{hour:"numeric",minute:"2-digit",...o?{second:"2-digit"}:{},hour12:sa(t)}).format(e)}function ua(e,t){return ca(t?.locale?.language??"en",ia(t),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:sa(t)}).format(e)}function ha(e,t,o,a,n){const r=a?.locale?.language??"en",i=ia(a),s=e+(n??oa(i))(e),l=new Date(s),c=s%Qo===0;switch(t){case"minute":case"hour":return c?ca(r,i,{weekday:"short"}).format(e):da(e,a);case"day":return o<=7*Qo?ca(r,i,{weekday:"short"}).format(e):ca(r,i,{day:"numeric",month:"short"}).format(e);case"month":return ca(r,i,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(e);default:return ca(r,i,{year:"numeric"}).format(e)}}function pa(e,t){if(e.length<=t)return e;const o=[];let a=[];for(const r of e)null===r.v?(a.length&&o.push(a),o.push([r]),a=[]):a.push(r);a.length&&o.push(a);const n=e.length;return o.flatMap(e=>null===e[0].v?e:function(e,t){if(e.length<=t||t<3)return e;const o=[e[0]],a=(e.length-2)/(t-2);let n=0;for(let r=0;r<t-2;r++){const t=Math.floor(r*a)+1,i=Math.min(Math.floor((r+1)*a)+1,e.length-1),s=i,l=Math.min(Math.floor((r+2)*a)+1,e.length);let c=0,d=0;const u=Math.max(1,l-s);for(let o=s;o<l;o++)c+=e[o].t,d+=e[o].v;c/=u,d/=u;let h=t,p=-1;const m=e[n];for(let o=t;o<i;o++){const t=Math.abs((m.t-c)*(e[o].v-m.v)-(m.t-e[o].t)*(d-m.v));t>p&&(p=t,h=o)}o.push(e[h]),n=h}return o.push(e[e.length-1]),o}(e,Math.max(3,Math.round(e.length/n*t))))}const ma=36e5,fa=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ga=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],va=new Map;function ya(e){let t=va.get(e);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),va.set(e,t)),t}function ba(e,t){const o={};for(const a of ya(t).formatToParts(new Date(e)))o[a.type]=a.value;return{year:Number(o.year),month:Number(o.month),day:Number(o.day),hour:Number(o.hour)%24,minute:Number(o.minute),second:Number(o.second),weekday:fa.indexOf(o.weekday)+1}}function _a(e,t){const o=ba(e,t);return Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute,o.second)-1e3*Math.floor(e/1e3)}function xa(e,t,o,a=1,n=0,r=0,i=0){const s=Date.UTC(t,o-1,a,n,r,i),l=new Date(s),c=_a(s-864e5,e),d=_a(s+864e5,e),u=[s-c,s-d].filter(t=>{const o=ba(t,e);return o.year===l.getUTCFullYear()&&o.month===l.getUTCMonth()+1&&o.day===l.getUTCDate()&&o.hour===l.getUTCHours()&&o.minute===l.getUTCMinutes()&&o.second===l.getUTCSeconds()});return u.length?Math.min(...u):function(e,t,o,a){for(;t-e>1e3;){const n=1e3*Math.floor((e+t)/2e3);_a(n,a)===o?e=n:t=n}return t}(s-d,s-c,c,e)}function wa(e,t,o){const a=new Date(Date.UTC(e,t-1,o));return{year:a.getUTCFullYear(),month:a.getUTCMonth()+1,day:a.getUTCDate()}}function $a(e,t,o){const a=ba(t,o.timeZone);switch(e){case"hour":return t-t%1e3-1e3*(60*a.minute+a.second);case"day":return xa(o.timeZone,a.year,a.month,a.day);case"week":{const e=(a.weekday-o.firstDay+7)%7,t=wa(a.year,a.month,a.day-e);return xa(o.timeZone,t.year,t.month,t.day)}case"month":return xa(o.timeZone,a.year,a.month,1);case"year":return xa(o.timeZone,a.year,1,1)}}function ka(e,t,o,a){if("hour"===e)return t+o*ma;const n=ba(t,a.timeZone);let{year:r,month:i,day:s}=n;if("day"===e)({year:r,month:i,day:s}=wa(r,i,s+o));else if("week"===e)({year:r,month:i,day:s}=wa(r,i,s+7*o));else{const t=wa(r,i+("year"===e?12*o:o),1),a=wa(t.year,t.month+1,0).day;({year:r,month:i}=t),s=Math.min(s,a)}return xa(a.timeZone,r,i,s,n.hour,n.minute,n.second)}function Ma(e,t,o,a,n=1e4){const r=[$a(e,t,a)];let i=1;for(;r[r.length-1]<o&&r.length<=n;){const t="hour"===e?r[0]+i*ma:ka(e,r[0],i,a);r.push(t>r[r.length-1]?t:r[r.length-1]+ma),i++}return 1===r.length&&r.push(ka(e,r[0],1,a)),r}function za(e){try{const t=new Intl.Locale(e),o=t.getWeekInfo?.().firstDay??t.weekInfo?.firstDay;return"number"==typeof o&&o>=1&&o<=7?o:1}catch{return 1}}function Sa(e){const t=e?.locale,o=e?.config?.time_zone,a="server"===t?.time_zone&&function(e){if("string"!=typeof e||""===e)return!1;try{return ya(e),!0}catch{return!1}}(o)?o:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",n=ga.indexOf(String(t?.first_weekday??"language"))+1;return{timeZone:a,firstDay:n>0?n:za(t?.language??e?.language??"en")}}const Aa=["hour","day","week","month"],Ea=["day","week","month","year"],Ca=["now","end"],ja={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},Na={hour:36e5,day:864e5,week:6048e5};function La(e,t,o){const a="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof a||!Number.isInteger(a)||a<t)throw new Error(o);return a}function Oa(e,t,o){if(!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`);return e}function Ta(e){if(null==e)return ja;if("object"!=typeof e||Array.isArray(e))throw new Error('"period" must have "last" and "unit"');const t=e,o={last:La(t.last??ja.last,1,'"period.last" must be a whole number of 1 or more'),unit:Oa(t.unit??ja.unit,Aa,"period.unit"),offset:La(t.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==t.navigate&&!0===t.navigate,until:Oa(t.until??"now",Ca,"period.until")};if(void 0!==t.navigate&&"boolean"!=typeof t.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==t.calendar&&(o.calendar=Oa(t.calendar,Ea,"period.calendar")),o}function Fa(e,t,o){if("month"===e.unit){if(o)return{start:ka("month",t,-e.last,o),end:t};const a=new Date(t);return a.setMonth(a.getMonth()-e.last),{start:a.getTime(),end:t}}return{start:t-e.last*Na[e.unit],end:t}}function Pa(e,t,o,a=0){const n=Math.max(0,e.offset+a);if(e.calendar){const a=e.calendar,r=ka(a,$a(a,t,o),-n,o),i=ka(a,r,1,o);return{start:r,end:0===n&&"now"===e.until?t:i,live:0===n,back:n}}if("month"===e.unit){return{...Fa(e,0===n?t:ka("month",t,-n*e.last,o),o),live:0===n,back:n}}const r=e.last*Na[e.unit];return{start:t-(n+1)*r,end:t-n*r,live:0===n,back:n}}const Da=new WeakMap;function Ua(e,t){const o=Da.get(e);return o&&o.key===JSON.stringify(t)?o.steps:0}function Ha(e,t,o){Da.set(e,{key:JSON.stringify(t),steps:Math.max(-t.offset,o)})}const Ia=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Ba=new Map(Ia.map((e,t)=>[e,22.5*t])),Wa=[[/north/g,"n"],[/south/g,"s"],[/east/g,"e"],[/west/g,"w"]];function Za(e){const t=(e%360+360)%360;return 360===t?0:t}function qa(e){if("number"==typeof e)return Number.isFinite(e)?Za(e):null;if("string"!=typeof e)return null;const t=e.trim().toLowerCase();if(""===t)return null;const o=Number(t.replace(/\s*°$/,""));if(Number.isFinite(o))return Za(o);let a=t.replace(/[\s_-]+/g,"");for(const[n,r]of Wa)a=a.replace(n,r);return Ba.get(a.toUpperCase())??null}function Ra(e){if("number"==typeof e)return Number.isFinite(e)?e:null;if("on"===e)return 1;if("off"===e)return 0;if("string"!=typeof e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function Va(e){return e.bearing?qa:Ra}function Ya(e){return"string"==typeof e?e:"number"==typeof e||"boolean"==typeof e?String(e):void 0}function Ga(e,t,o=!1,a=Ra){return o?{t:e,v:null,s:Ya(t)}:{t:e,v:a(t)}}function Xa(e,t,o=!1,a=Ra){const n=[];for(const r of e??[]){const e=r.lu??r.lc;if(void 0===e)continue;const i=t?r.a?.[t]:r.s;n.push(Ga(Math.round(1e3*e),i,o,a))}return n}const Ja=e=>"number"==typeof e&&Number.isFinite(e)?e:null;function Ka(e,t){return(e??[]).map(e=>{const o="number"==typeof e.start?e.start:Date.parse(e.start);let a;return a="change"===t?Ja(e.change):"state"===t?Ja(e.state)??Ja(e.mean):"min"===t||"max"===t?Ja(e[t])??Ja(e.mean)??Ja(e.state):Ja(e.mean)??Ja(e.state),{t:o,v:a,min:e.min??null,max:e.max??null}})}function Qa(e){const t=(e.end-e.start)/864e5;return t<=2?"5minute":t<=35?"hour":t<=400?"day":"month"}function en(e){return{period:Qa(e),types:["mean","min","max","state"],value:"mean"}}function tn(e){const t=e.attribute?`${e.entity}|${e.attribute}`:e.entity;return e.text?`${t}|text`:e.bearing?`${t}#bearing`:t}const on=["hour","day","week","month"],an=["mean","sum","min","max","first","last","change"];function nn(e){if(void 0!==e.aggregate&&!an.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${an.join(", ")}`);if(void 0!==e.group_by){if(!on.includes(e.group_by))throw new Error(`"group_by" must be one of: ${on.join(", ")}`);return{unit:e.group_by,aggregate:e.aggregate??"mean"}}}function rn(e,t,o,a,n=!1){const r="change"===o?function(e){let t=null;return e.map(e=>{if(null===e.v)return null;if(null===t)return t=e.v,0;if(e.v>=t){const o=e.v-t;return t=e.v,o}return t-e.v>.1*Math.abs(t)?(t=e.v,Math.max(0,e.v)):0})}(e):[],i=[];let s=0;for(let l=0;l+1<t.length;l++){const c=t[l],d=t[l+1],u=Math.min(d,a);for(;s<e.length&&e[s].t<c;)s++;const h={t:c,end:d,v:null};if(i.push(h),u<=c)continue;const p=[],m=e[s-1];let f=s;const g=f<e.length&&e[f].t<u?e[f].t:u;for(m&&g>c&&p.push({v:m.v,dt:g-c,reading:!1,carried:!0,up:0});f<e.length&&e[f].t<u;f++){const t=f+1<e.length&&e[f+1].t<u?e[f+1].t:u,o=e[f];p.push({v:o.v,dt:t-o.t,reading:!0,carried:!0===o.carried,up:r[f]??null})}const v=p.filter(e=>null!==e.v);if(0===v.length)continue;const y=v.map(e=>e.v);switch(n&&(h.min=Math.min(...y),h.max=Math.max(...y)),o){case"mean":{const e=v.reduce((e,t)=>e+t.dt,0);h.v=e>0?v.reduce((e,t)=>e+t.v*t.dt,0)/e:y.reduce((e,t)=>e+t,0)/y.length;break}case"min":h.v=Math.min(...y);break;case"max":h.v=Math.max(...y);break;case"first":h.v=y[0];break;case"last":h.v=y[y.length-1];break;case"sum":{const e=v.filter(e=>e.reading&&!e.carried);h.v=e.length?e.reduce((e,t)=>e+t.v,0):null;break}case"change":h.v=v.reduce((e,t)=>e+(t.reading&&!t.carried?t.up??0:0),0)}}return i}function sn(e,t,o,a=1/0,n=!1){const r=[];let i=0;for(let s=0;s+1<t.length;s++){const l=t[s],c=t[s+1];for(;i<e.length&&e[i].t<l;)i++;let d=i;const u=[],h=[],p=[];for(;d<e.length&&e[d].t<c;d++){const t=e[d];null===t.v||t.carried||(u.push(t.v),h.push(t.min??t.v),p.push(t.max??t.v))}let m=null;if(u.length&&l<a)if("mean"===o)m=u.reduce((e,t)=>e+t,0)/u.length;else if("sum"===o||"change"===o)m=u.reduce((e,t)=>e+t,0);else if("min"===o)m=Math.min(...u);else if("max"===o)m=Math.max(...u);else if("last"===o)m=u[u.length-1];else{const t=e.slice(0,i).reverse().find(e=>null!==e.v),o=e.slice(i,d).find(e=>e.carried&&null!==e.v);m=(t??o)?.v??u[0]}const f={t:l,end:c,v:m};n&&null!==m&&(f.min=Math.min(...h),f.max=Math.max(...p)),r.push(f)}return r}const ln={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},cn={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};const dn={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class un{constructor(e){this.onChange=e,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(e,t,o,a,n={}){const r=n.live??!0,i="statistics"===a?n.statistics??en(o):void 0,s=`${a}|${t.map(tn).join(",")}|${i?JSON.stringify(i):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>pn,c=void 0!==this.pausedAt&&"statistics"===a&&r;this.pausedAt=void 0;const d=Math.max(6e4,(o.end-o.start)/100),u=o.start<this.loadedFrom||(r?this.loadedTo!==1/0:o.end>this.loadedTo+d);(s!==this.shape||u||l&&r||c)&&(this.shape=s,this.load(e,t,o,r,i)),"ready"===this.status&&"history"===a&&this.loadedTo===1/0&&this.appendLive(e,t);const h=new Map;for(const[p,m]of this.data)h.set(p,hn(m,o));return{status:this.status,data:h,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(e,t,o,a,n){const r=++this.generation;this.status="loading",this.loadedFrom=o.start,this.loadedTo=a?1/0:o.end,clearTimeout(this.timer);const i=n?async function(e,t,o,a=en(o)){const n=new Map;if(!e.callWS||0===t.length)return n;const r=[...new Set(t.map(e=>e.entity))],i=await e.callWS({type:"recorder/statistics_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),statistic_ids:r,period:a.period,types:a.types});for(const s of t)n.set(tn(s),Ka(i?.[s.entity],a.value));return n}(e,t,o,n):async function(e,t,o){const a=new Map;if(!e.callWS||0===t.length)return a;const n={type:"history/history_during_period",start_time:new Date(o.start).toISOString(),end_time:new Date(o.end).toISOString(),significant_changes_only:!1},r=[...new Set(t.filter(e=>!e.attribute).map(e=>e.entity))],i=[...new Set(t.filter(e=>e.attribute).map(e=>e.entity))],s=[];return r.length&&s.push(e.callWS({...n,entity_ids:r,minimal_response:!0,no_attributes:!0}).then(e=>{for(const o of t.filter(e=>!e.attribute))a.set(tn(o),Xa(e?.[o.entity],void 0,o.text,Va(o)))})),i.length&&s.push(e.callWS({...n,entity_ids:i,no_attributes:!1}).then(e=>{for(const o of t.filter(e=>e.attribute))a.set(tn(o),Xa(e?.[o.entity],o.attribute,o.text,Va(o)))})),await Promise.all(s),a}(e,t,o);i.then(o=>{if(r===this.generation){this.data=o,this.status="ready",this.error=void 0,this.seen.clear();for(const o of t)this.seen.set(tn(o),e.states[o.entity]);n&&a&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},dn[n.period])),this.onChange()}},e=>{r===this.generation&&(this.status="error",this.error=e instanceof Error?e.message:String(e?.message??e),this.onChange())})}appendLive(e,t){for(const o of t){const t=tn(o),a=e.states[o.entity];if(!a||this.seen.get(t)===a)continue;this.seen.set(t,a);const n=Date.parse(a.last_updated??a.last_changed??"")||Date.now(),r=this.data.get(t)??[],i=r[r.length-1];i&&n<=i.t||(r.push(Ga(n,o.attribute?a.attributes?.[o.attribute]:a.state,o.text,Va(o))),this.data.set(t,r))}}}function hn(e,t){let o=0;for(;o<e.length&&e[o].t<t.start;)o++;const a=e.slice(o).filter(e=>e.t<=t.end),n=e[o-1];return n?[{...n,t:t.start,carried:!0},...a]:a}const pn=6e4,mn=new WeakMap;function fn(e,t){let o=mn.get(e);return o||(o=new un(t),mn.set(e,o)),o}const gn=["smooth","straight","step"],vn=e=>(Math.round(100*e)/100).toString();function yn(e){return e.map(([e,t],o)=>`${o?"L":"M"}${vn(e)},${vn(t)}`).join("")}function bn(e,t){return 0===e.length?"":1===e.length?`M${vn(e[0][0])},${vn(e[0][1])}h0`:"smooth"===t?function(e){const t=e.length;if(t<3)return yn(e);const o=[],a=[];for(let i=0;i<t-1;i++)o.push(e[i+1][0]-e[i][0]),a.push(0===o[i]?0:(e[i+1][1]-e[i][1])/o[i]);const n=[a[0]];for(let i=1;i<t-1;i++)n.push(a[i-1]*a[i]<=0?0:(a[i-1]+a[i])/2);n.push(a[t-2]);for(let i=0;i<t-1;i++){if(0===a[i]){n[i]=0,n[i+1]=0;continue}const e=n[i]/a[i],t=n[i+1]/a[i],o=e*e+t*t;if(o>9){const r=3/Math.sqrt(o);n[i]=r*e*a[i],n[i+1]=r*t*a[i]}}let r=`M${vn(e[0][0])},${vn(e[0][1])}`;for(let i=0;i<t-1;i++){const t=o[i]/3;r+=`C${vn(e[i][0]+t)},${vn(e[i][1]+n[i]*t)},${vn(e[i+1][0]-t)},${vn(e[i+1][1]-n[i+1]*t)},${vn(e[i+1][0])},${vn(e[i+1][1])}`}return r}(e):"step"===t?function(e){let t=`M${vn(e[0][0])},${vn(e[0][1])}`;for(let o=1;o<e.length;o++)t+=`H${vn(e[o][0])}V${vn(e[o][1])}`;return t}(e):yn(e)}function _n(e){const t=[];let o=[];for(const a of e)null===a.v?(o.length&&t.push(o),o=[]):o.push(a);return o.length&&t.push(o),t}const xn=1e3,wn=200,$n=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],kn=["history","statistics"];function Mn(e){if(Ta(e.period),nn(e),void 0!==e.source&&!kn.includes(e.source))throw new Error(`"source" must be one of: ${kn.join(", ")}`);const t=[e.curve,...(e.entities??[]).map(e=>"object"==typeof e?e.curve:void 0)];for(const o of t)if(void 0!==o&&!gn.includes(o))throw new Error(`"curve" must be one of: ${gn.join(", ")}`)}function zn(e,t=Date.now(),o={}){const a=Ta(e.raw.period),n=e.raw.source??"history",r=Sa(e.hass),i=Pa(a,t,r,a.navigate?Ua(e.host,a):0),s=nn(e.raw),l={start:s?$a(s.unit,i.start,r):i.start,end:i.end},c=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute,...o.text?{text:!0}:{}})),d=fn(e.host,e.requestUpdate),u=s&&"statistics"===n?function(e,t,o,a=!1){const n=t.timeZone===o&&("week"!==e.unit||1===t.firstDay),r="hour"!==e.unit&&n?e.unit:"hour",{types:i,value:s}=cn[e.aggregate];return{period:r,types:a?[...new Set([...i,"min","max"])]:i,value:s}}(s,r,e.hass.config?.time_zone,!0===o.range):void 0,h=u?{start:l.start-ln[u.period],end:l.end}:l,p=d.get(e.hass,c,h,n,{live:i.live,statistics:u}),m=s?Ma(s.unit,l.start,l.end,r):[],f=e.raw.curve??"smooth",g=Math.min(l.end,t),v=e.items.map((e,t)=>{const a=e.config;let r=p.data.get(tn(c[t]))??[];r=Rt(r,e.conversion);const i=r[r.length-1];return s?r="statistics"===n?sn(r,m,s.aggregate,g,!0===o.range):rn(r,m,o.aggregate?.(e)??s.aggregate,g,!0===o.range):"history"===n&&i&&null!==i.v&&i.t<g&&(r=[...r,{t:g,v:i.v}]),{index:t,entity:e,points:r,color:Ce(a.color??$n[t%$n.length]),curve:a.curve??f,dash:!0===a.dash}});return{status:p.status,error:p.error,range:l,period:a,source:n,series:v,live:i.live,back:i.back,zone:r,group:s}}const Sn=(e,t,o)=>1===e?t:o;function An(e,t,o,a,n){const r=(e,t)=>zt(n,e,t);if(e.calendar&&o<2)return r({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[e.calendar][o]);if(!e.calendar&&0===o){const t=e.last;return r({hour:Sn(t,"period_last_hour","period_last_hours"),day:Sn(t,"period_last_day","period_last_days"),week:Sn(t,"period_last_week_rolling","period_last_weeks"),month:Sn(t,"period_last_month_rolling","period_last_months")}[e.unit],{n:t})}const i={timeZone:a.timeZone},s=ba(t.start,a.timeZone).year===ba(Date.now(),a.timeZone).year;let l;"year"===e.calendar?i.year="numeric":"month"===e.calendar?Object.assign(i,{month:"long",year:"numeric"}):(Object.assign(i,{day:"numeric",month:"short"}),s||(i.year="numeric"),"day"===e.calendar&&(i.weekday="short"),e.calendar||"hour"!==e.unit&&"day"!==e.unit||Object.assign(i,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(n?.locale?.language??n?.language??"en",i)}catch{l=new Intl.DateTimeFormat("en",i)}const c=e.calendar?t.end-1:t.end;return"day"===e.calendar||"month"===e.calendar||"year"===e.calendar?l.format(t.start):l.formatRange(t.start,c)}function En(e,t,o=Date.now()){const{period:a}=e;if(!a.navigate)return R;const n=Ua(t.host,a),r=e=>o=>{o.stopPropagation(),Ha(t.host,a,e),t.requestUpdate()},i=An(a,e.range,e.back,e.zone,t.hass);let s="";if(0!==n){const n=Pa(a,o,e.zone);s=An(a,n,n.back,e.zone,t.hass)}const l=e=>W`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${e}></path></svg>`;return W`<div class="period-nav">
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
    ${0!==n?W`<button
            class="period-return"
            aria-label=${zt(t.hass,"period_return",{label:s})}
            @click=${r(0)}
          >
            ${s}
          </button>`:R}
  </div>`}const Cn=r`
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
`;function jn(e){!function(e){mn.get(e)?.pause()}(e)}function Nn(e,t){const{show:o}=t.config;return o.name||o.value?W`<div class="series-header">
    ${e.series.map(e=>W`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
          <span class="swatch" style="background:${e.color}"></span>
          ${o.name?W`<span class="series-name">${e.entity.name}</span>`:R}
          ${o.value?W`<span class="series-value">${e.entity.display}</span>`:R}
        </div>`)}
  </div>`:R}function Ln(e,t){return"loading"===e.status?W`<div class="chart-message">${zt(t.hass,"chart_loading")}</div>`:"error"===e.status?W`<div class="chart-message error">
      ${zt(t.hass,"chart_error",{error:e.error??""})}
    </div>`:e.series.every(e=>e.points.every(e=>null===e.v))?W`<div class="chart-message">${zt(t.hass,"chart_no_data")}</div>`:void 0}function On(e,t,o=R,a=R){return W`<svg
    class="plot"
    viewBox="0 0 ${xn} ${wn}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${t}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${xn} height=${204}></rect>
      </clipPath>
      ${o}
    </defs>
    ${a}
    <g clip-path="url(#cd-draw-in)">${e}</g>
  </svg>`}const Tn=r`
  ${Cn}
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
`;function Fn(e,t,o){const{locale:a,grouping:n}=function(e){const t=e?.locale?.language??"en";switch(e?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:t,grouping:!0}}}(o),r=new Intl.NumberFormat(a,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:n});let i=r.format(0===e?0:e);return 0===Number(e.toFixed(t))&&(i=r.format(0)),i}function Pn(e,t){return t?`${e} ${t}`:e}const Dn=[[1,2,3,4,5,6,7,8,9],[1,2,5],[1]],Un=[2,3,5,10,20,50,100],Hn=e=>Number(e.toPrecision(12)),In=e=>Hn(10**e),Bn=e=>Math.floor(Math.log10(e)+1e-9);function Wn(e){return e.map(e=>{const t=e=>"number"==typeof e&&e<=0;return t(e.v)||t(e.min)||t(e.max)?{...e,v:t(e.v)?null:e.v,...void 0!==e.min?{min:t(e.min)?null:e.min}:{},...void 0!==e.max?{max:t(e.max)?null:e.max}:{}}:e})}function Zn(e,t,o,a=1){const n=[];for(let r=Bn(e);r<=Bn(t)+a;r+=a)for(const a of o){const o=Hn(a*10**r);o>=e*(1-1e-9)&&o<=t*(1+1e-9)&&n.push(o)}return n}function qn(e,t,o){const a=Bn(e),n=Zn(In(a-2),In(a+2),t),r=o?n.filter(t=>t<=e*(1+1e-9)):n.filter(t=>t>=e*(1-1e-9));return o?r[r.length-1]:r[0]}function Rn(e,t){const o=Math.log10(e[0]),a=Math.log10(e[1]),[n,r]=t,i=a===o?0:(r-n)/(a-o);return e=>e>0?n+(Math.log10(e)-o)*i:NaN}const Vn=new WeakMap;function Yn(e){let t=Vn.get(e.host);if(!t){const o={width:e.host.clientWidth||400};t=o,Vn.set(e.host,o),"undefined"!=typeof ResizeObserver&&(o.observer=new ResizeObserver(t=>{const a=Math.round(t[t.length-1].contentRect.width);Math.round(a/70)!==Math.round(o.width/70)&&(o.width=a,e.requestUpdate())}),o.observer.observe(e.host))}return t.width}function Gn(e){Vn.get(e)?.observer?.disconnect(),Vn.delete(e)}function Xn(e){const t=Ro(e.raw);return Math.max(0,Yn(e)-32-(t.y&&"outside"===t.labels?40:0))}function Jn(e,t,o,a,n=4){const r=Ro(e.raw),i="log"===r.scale&&"line"===e.raw.style,s=i?function(e,t,o){let[a,n]=e??[1,100];void 0!==t.min&&t.min>0&&(a=t.min),void 0!==t.max&&t.max>0&&(n=t.max),n>0||(n=a>0?10*a:100),a>0||(a=n/1e3);const r=void 0!==t.min&&t.min===a,i=void 0!==t.max&&t.max===n;n<=a&&(r?n=10*a:i?a=n/10:(a/=Math.sqrt(10),n*=Math.sqrt(10)));const s=Math.max(2,o+1),l=[...Dn.map(e=>({mantissas:e,every:1})),...Un.map(e=>({mantissas:[1],every:e}))];let c=l[l.length-1],d=[a,n],u=[];for(const f of l){const e=r?a:qn(a,f.mantissas,!0),t=i?n:qn(n,f.mantissas,!1),o=Zn(e,t,f.mantissas,f.every);if(c=f,d=[e,t],u=o,o.length<=s)break}const h=c.every>1?[1]:Dn[0],p=9===c.mantissas.length?[]:Zn(d[0],d[1],h).filter(e=>!u.includes(e)).slice(0,200),m=u.map(e=>Math.max(0,-Bn(e)));return{domain:d,ticks:u,decimals:Math.max(0,...m),minor:p,tickDecimals:m}}(o,r,n):Xo(o,r,n),l=Math.max(2,Math.min(8,Math.floor((a??Xn(e))/70))),{unit:c,ticks:d}=ra(t,l,oa(ia(e.hass)));return{options:r,value:s,times:d,unit:c,range:t,scales:{x:To([t.start,t.end],[0,xn]),y:(i?Rn:To)(s.domain,[wn,0]),domain:s.domain}}}const Kn=e=>Math.round(1e4*e)/100+"%";function Qn(e,t,o){const a=e.ticks[t];return e.tickDecimals?function(e,t,o){if(Math.abs(e)<1e4)return Fn(e,t,o);const a=o?.locale?.language??o?.language??"en";try{return new Intl.NumberFormat(a,{notation:"compact",maximumFractionDigits:1}).format(e)}catch{return new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}).format(e)}}(a,e.tickDecimals[t],o.hass):Fn(a,e.decimals,o.hass)}function er({axes:e,ctx:t,content:o,label:a,defs:n=R,overlay:r=R,hover:i,right:s,xLabel:l,yLabel:c,gestures:d,classes:u="",below:h=R}){const{options:p}=e,m="outside"===p.labels,f=p.y&&e.value.ticks.length>0,g=p.x&&e.times.length>0,v=f?function(e,t,o){const{scales:a,value:n}=e;return n.ticks.map((e,r)=>{const i=a.y(e)/wn;return W`<span class="axis-label ${i<.08?"top":i>.92?"bottom":""}" style="top:${Kn(i)}"
      >${o?o(e):Qn(n,r,t)}</span
    >`})}(e,t,c):[],y=f?W`<div class="y-axis">${v}</div>`:R,b=g?W`<div class="x-axis">${function(e,t,o){const{scales:a,range:n}=e,r=oa(ia(t.hass));return e.times.map(i=>{const s=a.x(i)/xn;return W`<span class="axis-label ${s<.05?"start":s>.95?"end":""}" style="left:${Kn(s)}"
      >${o?o(i):e.label?e.label(i):ha(i,e.unit,n.end-n.start,t.hass,r)}</span
    >`})}(e,t,l)}</div>`:R,_=f?W`<span class="axis-sizer" aria-hidden="true"
        >${e.value.ticks.map((o,a)=>c?c(o):Qn(e.value,a,t)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:R,x=s&&p.y&&s.value.ticks.length>0?s:void 0,w=x?W`<span class="axis-sizer" aria-hidden="true"
        >${x.value.ticks.map(e=>Fn(e,x.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:R,$=x?W`<div class="y-axis right">${m?w:R}${function(e,t){return e.value.ticks.map(o=>{const a=e.y(o)/wn;return W`<span class="axis-label ${a<.08?"top":a>.92?"bottom":""}" style="top:${Kn(a)}"
      >${Fn(o,e.value.decimals,t.hass)}</span
    >`})}(x,t)}</div>`:R,k=`plot-wrap axes-${p.labels} ${f?"has-y":""} ${g?"has-x":""} ${x?"has-right":""} ${h===R?"":"has-overview"}`;return W`<div class=${k}>
    ${m&&f?W`<div class="y-axis">${_}${v}</div>`:R}
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
      ${On(o,a,n,function(e){const{options:t,scales:o}=e;return Z`<g class="grid">
    ${t.horizontal?(e.value.minor??[]).map(e=>Z`<line class="minor" x1="0" x2=${xn} y1=${o.y(e)} y2=${o.y(e)}></line>`):R}
    ${t.horizontal?e.value.ticks.map(e=>Z`<line x1="0" x2=${xn} y1=${o.y(e)} y2=${o.y(e)}></line>`):R}
    ${t.vertical?e.times.map(e=>Z`<line x1=${o.x(e)} x2=${o.x(e)} y1="0" y2=${wn}></line>`):R}
  </g>`}(e))} ${m?R:W`${y}${$}${b}`}
      ${r}
    </div>
    ${m?W`${$}${b}`:R} ${h}
  </div>`}const tr=r`
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
`,or=["above","over","hidden"];function ar(e){if(void 0!==e.compact&&"boolean"!=typeof e.compact)throw new Error('"compact" must be true or false');if(void 0!==e.header&&!or.includes(e.header))throw new Error(`"header" must be one of: ${or.join(", ")}`)}function nr(e){return{compact:!0===e.compact,header:e.header??"above"}}function rr(e,t,o){return W`<div class="frame ${e.compact?"compact":""}">
    ${"above"===e.header?t:R}${o}
  </div>`}function ir(e){return e===R?R:W`<div class="header-over" @pointerdown=${e=>e.stopPropagation()}>${e}</div>`}const sr=r`
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
`,lr=["none","normal","percent"];function cr(e){const t=e.stack;if(void 0!==t&&!lr.includes(t))throw new Error(`"stack" must be one of: ${lr.join(", ")}`)}function dr(e,t){let o=0,a=e.length;for(;o<a;){const n=o+a>>1;e[n].t<=t?o=n+1:a=n}return 0===o?null:e[o-1].v}function ur(e,t){const o=e[0]?.length??0,a=e.map(()=>[]);for(let n=0;n<o;n++){let o=1;if("percent"===t){const t=e.reduce((e,t)=>e+Math.abs(t[n]??0),0);o=t>0?100/t:0}let r=0,i=0;e.forEach((e,t)=>{const s=e[n];if(null==s)return void a[t].push(null);const l=s*o;l>=0?(a[t].push([r,r+l]),r+=l):(a[t].push([i,i+l]),i+=l)})}return a}function hr(e){const t=e[0]?.length??0,o=[];for(let a=0;a<t;a++){let t=null;for(const o of e)null!==o[a]&&void 0!==o[a]&&(t=(t??0)+o[a]);o.push(t)}return o}function pr(e){let t=0,o=0;for(const a of e)for(const e of a)e&&(t=Math.min(t,e[0],e[1]),o=Math.max(o,e[0],e[1]));return[t,o]}function mr(e,t){const o=e*t;return o+190<=t?"right":o>=190?"left":e>.5?"pin-left":"pin-right"}const fr=3e3;function gr(e,t){if(0===e.length)return-1;let o=0,a=e.length-1;for(;o<a;){const n=o+a>>1;e[n].t<t?o=n+1:a=n}return o>0&&t-e[o-1].t<=e[o].t-t?o-1:o}const vr=new WeakMap;function yr(e){return vr.get(e)?.t}function br(e){const t=vr.get(e);void 0!==t?.timer&&clearTimeout(t.timer),vr.delete(e)}function _r(e){return!1!==e.tooltip}function xr(e){const t=e.tooltip;if(void 0!==t&&"boolean"!=typeof t)throw new Error('"tooltip" must be true or false')}function wr(e,t,o){const a=function(e){let t=vr.get(e);return t||(t={},vr.set(e,t)),t}(e.host),n=t=>{t!==a.t&&(a.t=t,e.requestUpdate())},r=()=>{void 0!==a.timer&&clearTimeout(a.timer),a.timer=void 0};return{move(e){r();const a=e.currentTarget.getBoundingClientRect(),i=a.width>0?Math.min(1,Math.max(0,(e.clientX-a.left)/a.width)):0;n(function(e,t){let o;for(const a of e){const e=gr(a,t);if(e<0)continue;const n=a[e].t;(void 0===o||Math.abs(n-t)<Math.abs(o-t))&&(o=n)}return o}(o,t.start+i*(t.end-t.start)))},leave(e){r(),"touch"===e.pointerType||"pen"===e.pointerType?a.timer=setTimeout(()=>{a.timer=void 0,n(void 0)},fr):n(void 0)}}}const $r=e=>Math.round(1e4*e)/100+"%";function kr(e){const t=new Set(e.map(e=>e.entity.unit));return 1===t.size?[...t][0]:""}function Mr(e,t,o,a){return W`<div class="tooltip-row tooltip-total">
    <span class="swatch"></span>
    <span class="tooltip-name">${zt(e.hass,"chart_total")}</span>
    <span class="tooltip-value">${null===t?"—":Pn(Fn(t,a,e.hass),o)}</span>
  </div>`}function zr(e,t,o,a,n,r={}){if(void 0===a)return R;const i=o.x(a)/xn;if(!(i>=0&&i<=1))return R;const s=mr(i,n),l=t.map(e=>{const t=gr(e.points,a);return{s:e,p:t<0?void 0:e.points[t]}});return W`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${$r(i)}"></div>
    ${l.map(({s:e,p:t})=>{if(!t||null===t.v)return R;const a=r.dotY?r.dotY(e,t):o.y(t.v);if(null===a)return R;const n=a/wn;return n>=0&&n<=1?W`<span
        class="hover-dot"
        style="left:${$r(o.x(t.t)/xn)};top:${$r(n)};background:${e.color}"
      ></span>`:R})}
    <div class="tooltip ${s}" style=${s.startsWith("pin")?"":`left:${$r(i)}`}>
      <div class="tooltip-time">${r.heading?r.heading(a):ua(a,e.hass)}</div>
      ${l.map(({s:t,p:o})=>W`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${r.text?r.text(t,o):function(e,t,o){return e&&null!==e.v?Pn(Fn(e.v,t.entity.decimals,o.hass),t.entity.unit):"—"}(o,t,e)}</span>
          </div>`)}
      ${r.footer?r.footer(l):R}
    </div>
  </div>`}const Sr=r`
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
`,Ar=["all","last","minmax","ends"],Er=["auto","above","below","center"];function Cr(e){const t=e;if(!0===t.labels)return{show:t.labels_show??"all",position:t.labels_position??"auto",hideOverlap:!0!==t.labels_overlap}}function jr(e,t){const o=e.map((e,t)=>null===e.v?-1:t).filter(e=>e>=0);if(0===o.length)return[];const a=o[o.length-1],n=o[0];let r=n,i=n;for(const l of o)e[l].v>e[r].v&&(r=l),e[l].v<e[i].v&&(i=l);const s="last"===t?[a]:"ends"===t?[a,n]:"minmax"===t?[r,i]:[a,r,i,...o];return[...new Set(s)]}function Nr(e,t){const o=e[t].v,a=[e[t-1]?.v??null,e[t+1]?.v??null].filter(e=>null!==e);if(0===a.length)return"above";const n=a.reduce((e,t)=>e+t,0)/a.length;return o<n?"below":"above"}function Lr(e,t){const o=e.x-e.width/2,a="above"===t?e.y-6-14:"below"===t?e.y+6:e.y-7;return[o,a,o+e.width,a+14]}const Or=(e,t)=>e[0]<t[2]&&t[0]<e[2]&&e[1]<t[3]&&t[1]<e[3];function Tr(e){return Math.ceil(6*e.length)+6}const Fr=e=>Math.round(1e4*e)/100+"%";function Pr(e,t,o,a){const n=[],r=[];for(const c of e){const e=o.skip?c.points.map(e=>o.skip(e)?{...e,v:null}:e):c.points;!t.hideOverlap&&"all"===t.show&&e.filter(e=>null!==e.v).length>40||jr(e,t.show).forEach((i,s)=>{const l=e[i],[d,u]=o.at(l);if(!(d>=0&&d<=1&&u>=0&&u<=1))return;const h=Fn(l.v,c.decimals,a),p="auto"===t.position?Nr(e,i):t.position,m="above"===p?"below":"above",f={x:d*o.width,y:u*o.height,width:Tr(h),sides:"center"===p?["center"]:[p,m],text:h,color:c.color,fx:d,fy:u};(s<3&&"all"===t.show?n:"all"===t.show?r:n).push(f)})}const i=[...n,...r].slice(0,600),s=function(e,t,o){const a=[];return e.map(e=>{for(const n of e.sides){const r="auto"===n?"above":n,i=Lr(e,r);if(!o)return{side:r,box:i};if(!(i[1]<-2||i[3]>t+2||a.some(e=>Or(e,i))))return a.push(i),{side:r,box:i}}})}(i,o.height,t.hideOverlap),l=i.map((e,t)=>({b:e,p:s[t]})).filter(e=>void 0!==e.p);return 0===l.length?R:(l.sort((e,t)=>e.b.fx-t.b.fx),W`<div class="point-labels">
    ${l.map(({b:e,p:t})=>W`<span
          class="point-label ${t.side} ${function(e,t,o){return e-t/2<0?"start":e+t/2>o?"end":""}(e.fx*o.width,e.width,o.width)}"
          style="left:${Fr(e.fx)};top:${Fr(e.fy)};--cd-label:${e.color}"
          >${e.text}</span
        >`)}
  </div>`)}const Dr=r`
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
`,Ur=["none","line","figure"],Hr=!1,Ir=!1,Br="none";function Wr(e){const t=e.extremes??{};return{min:t.min??Hr,max:t.max??Ir,average:t.average??Br}}function Zr(e){return e.min||e.max||"none"!==e.average}function qr(e,t,o,a=[]){const n=e.filter(e=>e.dot).map(e=>({l:e.x*t-6,r:e.x*t+6,t:e.y*o-6,b:e.y*o+6})),r=[...a,...n];return e.map(e=>{const a=(e=>Math.ceil(6.2*e.length)+12)(e.text),n=e.x*t,i=e.y*o,s=n-a/2<0?"start":n+a/2>t?"end":"center",l="start"===s?0:"end"===s?t-a:n-a/2,c=(e,t=0)=>{const o=8+20*t,n="above"===e?i-o-18:i+o;return{l:l,r:l+a,t:n,b:n+18}},d=e=>e.t>=0&&e.b<=o,u="above"===e.prefer?"below":"above",h=[{side:e.prefer,tier:0},{side:u,tier:0},{side:e.prefer,tier:1},{side:u,tier:1}],p=h.find(e=>(e=>d(e)&&!r.some(t=>((e,t)=>e.l<t.r&&t.l<e.r&&e.t<t.b&&t.t<e.b)(t,e)))(c(e.side,e.tier)))??h.find(e=>0===e.tier&&d(c(e.side)))??h[0];r.push(c(p.side,p.tier));return{side:p.side,align:s,tier:p.tier}})}function Rr(e,t,o,a){if("day"===a?.unit||"week"===a?.unit||"month"===a?.unit){const t="month"===a.unit?{month:"short",year:"numeric"}:{weekday:"short",day:"numeric",month:"short"};try{return new Intl.DateTimeFormat(o?.locale?.language??"en",{...t,timeZone:ia(o)}).format(e)}catch{return new Intl.DateTimeFormat("en",t).format(e)}}return t.end-t.start>864e5?ua(e,o):da(e,o)}const Vr=e=>Math.round(1e4*e)/100+"%";function Yr(e){const{ctx:t,scales:o,width:a,height:n}=e,r=Wr(t.raw);if(!Zr(r))return{lines:R,overlay:R};const i=e.series.filter(e=>!1!==e.entity.config.extremes).map(t=>{const{min:o,max:a}=function(e){let t,o;for(const a of e)null===a.v||a.carried||((!t||a.v<t.v)&&(t=a),(!o||a.v>o.v)&&(o=a));return{min:t,max:o}}(t.points),n="none"===r.average?void 0:function(e,t,o=1/0){const a=e.filter(e=>null!==e.v&&!(e.carried&&!t));if(0!==a.length){if(t){let t=0,a=0;for(let n=0;n<e.length;n++){const r=e[n];if(null===r.v)continue;const i=n+1<e.length?e[n+1].t:r.t,s=Math.max(0,Math.min(i,o)-r.t);t+=r.v*s,a+=s}if(a>0)return t/a}return a.reduce((e,t)=>e+t.v,0)/a.length}}(t.points,e.timeWeighted,e.until);return{s:t,min:r.min?o:void 0,max:r.max?a:void 0,average:n}}),s=(e,o)=>Pn(Fn(e,o.entity.decimals,t.hass),o.entity.unit),l=e=>zt(t.hass,e),c=e=>e>=0&&e<=1,d=[];for(const f of i){for(const a of["max","min"]){const n=f[a];if(!n)continue;const r=o.y(n.v)/wn;if(!c(r))continue;const i=l("max"===a?"extremes_high":"extremes_low");d.push({s:f.s,kind:a,spec:{x:o.x(n.t)/xn,y:r,text:`${i} ${s(n.v,f.s)} · ${Rr(n.t,e.range,t.hass,e.group)}`,prefer:"max"===a?"above":"below",dot:!0}})}if("line"===r.average&&void 0!==f.average){const e=o.y(f.average)/wn;c(e)&&d.push({s:f.s,kind:"average",spec:{x:1,y:e,text:`${l("extremes_average")} ${s(f.average,f.s)}`,prefer:"above"}})}}const u=qr(d.map(e=>e.spec),a,n,e.obstacles),h="line"===r.average?Z`<g class="average-lines">${i.map(e=>{if(void 0===e.average)return R;const t=o.y(e.average);return Z`<line class="average-line" x1="0" x2=${xn} y1=${t} y2=${t} stroke=${e.s.color}></line>`})}</g>`:R,p="figure"===r.average&&i.some(e=>void 0!==e.average)?W`<div class="extreme-figures">
          ${i.map(t=>void 0===t.average?R:W`<div class="extreme-figure">
                  ${e.series.length>1?W`<span class="swatch" style="background:${t.s.color}"></span>`:R}
                  <span>${l("extremes_average")} ${s(t.average,t.s)}</span>
                </div>`)}
        </div>`:R,m=W`<div class="extremes-layer">
    ${d.map((e,t)=>{const{side:o,align:a,tier:n}=u[t],{x:r,y:i,text:s}=e.spec,l="start"===a?"left:0":"end"===a?"right:0":`left:${Vr(r)}`;return W`<span
        class="extreme-label ${e.kind} ${o} ${a} ${n?"far":""}"
        style="${l};top:${Vr(i)};--series:${e.s.color}"
        >${s}</span
      >`})}
    ${d.map(e=>e.spec.dot?W`<span
            class="extreme-dot ${e.kind}"
            style="left:${Vr(e.spec.x)};top:${Vr(e.spec.y)};border-color:${e.s.color}"
          ></span>`:R)}
    ${p}
  </div>`;return{lines:h,overlay:m}}const Gr=r`
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
`,Xr=[{name:"extremes_max",path:["extremes","max"],default:Ir},{name:"extremes_min",path:["extremes","min"],default:Hr},{name:"extremes_average",path:["extremes","average"],default:Br}];const Jr={name:"extremes",path:["extremes"],default:!0},Kr=new Map;function Qr(e,t){const o=Mt(t);let a=Kr.get(o);return a&&a[0]===e[0]||(a=[...e,{name:"extremes",selector:{boolean:{}}}],Kr.set(o,a)),a}const ei=new WeakMap;function ti(e){let t=ei.get(e);return t||(t=[...e,Jr],ei.set(e,t)),t}const oi=["auto","shared","independent"];function ai(e,t,o,a,n){const r=Math.max(0,Yn(e)-32),i=function(e,t,o){const a=e=>Math.max(1,Math.floor((t+12)/(e+12))),n=void 0===o?a(150):Math.min(o,a(110));return Math.max(1,Math.min(e,n))}(t.series.length,r,o.columns),s=function(e,t){return Math.max(0,(e-12*(t-1))/t)}(r,i),l=new Set(t.series.map(e=>e.entity.unit).filter(e=>""!==e)),c="shared"===o.scale||"auto"===o.scale&&l.size<=1?Lo(t.series.map(e=>e.points)):void 0,{show:d}=e.config;return W`<div class="multiples" style=${`grid-template-columns:repeat(${i}, minmax(0, 1fr))`}>
    ${t.series.map(o=>{const r=Jn(e,t.range,c??Lo([o.points]),s,2),i=d.name||d.value?W`<div class="entity panel-title" data-index=${o.index} tabindex="0" aria-label=${o.entity.label}>
              <span class="swatch" style="background:${o.color}"></span>
              ${d.name?W`<span class="series-name">${o.entity.name}</span>`:R}
              ${d.value?W`<span class="series-value">${function(e,t,o){if(void 0===t)return e.entity.display;const a=gr(e.points,t),n=a<0?void 0:e.points[a];return n&&null!==n.v?Pn(Fn(n.v,e.entity.decimals,o.hass),e.entity.unit):"—"}(o,a,e)}</span>`:R}
            </div>`:R,l=o.points.some(e=>null!==e.v)?n(o,r,s):W`<div class="chart-message">${zt(e.hass,"chart_no_data")}</div>`;return W`<div class="panel">${i}${l}</div>`})}
  </div>`}const ni=r`
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
`,ri=["line","band","time","state","point"],ii=["max","min","last","first"],si={line:"red",band:"green",time:"grey",state:"amber",point:"primary"},li=e=>"number"==typeof e&&Number.isFinite(e),ci=e=>"string"==typeof e&&/^[a-z_]+\.[a-z0-9_]+$/.test(e.trim());function di(e,t){if(!(void 0===e||li(e)||ci(e)||"string"==typeof e&&""!==e.trim()&&Number.isFinite(Number(e))))throw new Error(`"${t}" must be a number or an entity id`)}const ui=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/,hi=/^(\d{4})-(\d{2})-(\d{2})[T ](\d{1,2}):(\d{2})(?::(\d{2}))?$/;function pi(e){return(Array.isArray(e)?e:"string"==typeof e?e.split(","):[]).map(e=>String(e).trim()).filter(e=>""!==e)}function mi(e){const t=e.annotations;if(void 0!==e.zones&&"boolean"!=typeof e.zones)throw new Error('"zones" must be true or false');if(void 0!==t){if(!Array.isArray(t))throw new Error('"annotations" must be a list');t.forEach((e,t)=>{const o=e=>`annotations[${t}].${e}`;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`"annotations[${t}]" must have a "type"`);const a=e;if(!ri.includes(a.type))throw new Error(`"${o("type")}" must be one of: ${ri.join(", ")}`);for(const n of["label","color","state"])if(void 0!==a[n]&&"string"!=typeof a[n])throw new Error(`"${o(n)}" must be text`);for(const n of["dash","shade"])if(void 0!==a[n]&&"boolean"!=typeof a[n])throw new Error(`"${o(n)}" must be true or false`);if(di(a.value,o("value")),di(a.from,o("from")),di(a.to,o("to")),void 0!==a.entity&&!ci(a.entity))throw new Error(`"${o("entity")}" must be an entity id`);if("line"===a.type&&void 0===a.value)throw new Error(`"${o("value")}" is needed for a line`);if("band"===a.type&&void 0===a.from&&void 0===a.to)throw new Error(`"${o("from")}" or "${o("to")}" is needed for a band`);if("time"===a.type){if(void 0!==a.times&&"string"!=typeof a.times&&!Array.isArray(a.times))throw new Error(`"${o("times")}" must be a time or a list of times`);const e=pi(a.times).find(e=>!function(e){const t=e.trim(),o=ui.exec(t);return o?Number(o[1])<24&&Number(o[2])<60:hi.test(t)||/\d{4}-\d{2}-\d{2}T.+(Z|[+-]\d{2}:?\d{2})$/.test(t)&&Number.isFinite(Date.parse(t))}(e));if(void 0!==e)throw new Error(`"${o("times")}" has "${e}": use 07:00 or 2026-10-28 07:00`)}if("state"===a.type&&void 0===a.entity)throw new Error(`"${o("entity")}" is needed for a state mark`);if(void 0!==a.at&&!ii.includes(a.at))throw new Error(`"${o("at")}" must be one of: ${ii.join(", ")}`)})}}function fi(e){return Array.isArray(e.annotations)?e.annotations:[]}function gi(e,t,o){if(void 0===e)return;if(li(e))return e;const a=Ra(e);if(null!==a)return a;const n=t.states[e.trim()],r=Ra(n?.state);if(null===r)return;const i=n?.attributes?.unit_of_measurement,s=qt("string"==typeof i?i:void 0,o);return s?s.apply(r):r}function vi(e){return e.series[0]?.entity.unit||void 0}function yi(e,t,o){const a=[],n=Ma("day",t.start,t.end,o,800);for(const r of e){const e=ui.exec(r);if(e){for(const t of n){const n=ba(t,o.timeZone);a.push(xa(o.timeZone,n.year,n.month,n.day,+e[1],+e[2],+(e[3]??0)))}continue}const t=hi.exec(r),i=t?xa(o.timeZone,+t[1],+t[2],+t[3],+t[4],+t[5],+(t[6]??0)):Date.parse(r);Number.isFinite(i)&&a.push(i)}return[...new Set(a.filter(e=>e>=t.start&&e<=t.end))].sort((e,t)=>e-t)}function bi(e,t,o,a){const n=[],r=t?.trim().toLowerCase();for(let i=0;i<e.length;i++){const t=e[i];if(i>0&&e[i-1].s===t.s)continue;if(void 0!==r&&t.s.toLowerCase()!==r)continue;let s=i+1;for(;s<e.length&&e[s].s===t.s;)s++;const l=s<e.length?e[s].t:a,c=Math.max(t.t,o.start);l<=o.start||c>o.end||n.push({start:c,end:Math.min(l,o.end),s:t.s})}return n}function _i(e){return Math.ceil(5.8*e.length)+10}const xi=new WeakMap;const wi=e=>Math.round(1e4*e)/100+"%";function $i(e,t){return e.entity&&t.find(t=>t.entity.entityId===e.entity.trim())||t[0]}function ki(e,t,o,a){const n=e.points.filter(e=>null!==e.v&&(a||!e.carried&&(e.t!==o.end||"last"===t)));if(0!==n.length)return"first"===t?n[0]:"last"===t?n[n.length-1]:n.reduce((e,o)=>("max"===t?o.v>e.v:o.v<e.v)?o:e)}function Mi(e,t,o,a){const n=fi(e.raw),r=!0===e.raw.zones&&t.series[0]?function(e,t){const[o,a]=t.domain;return e.map((n,r)=>{const i=Math.max(o,Number.isFinite(n.from)?n.from:o),s=Math.min(a,r+1<e.length?e[r+1].from:a);if(!(s>i))return Z``;const l=t.y(s),c=t.y(i);return Z`<rect class="zone" x="0" width=${xn} y=${l} height=${c-l} fill=${Ce(n.color)}></rect>`})}(t.series[0].entity.bands,o):[];if(0===n.length&&0===r.length)return{behind:R,front:R,overlay:R};const i=[...r],s=[],l=[],{range:c}=t,d=e=>o.x(e),[u,h]=o.domain,p=function(e,t,o){const a=[...new Set(fi(e.raw).filter(e=>"state"===e.type&&e.entity).map(e=>e.entity.trim()))];if(0===a.length)return new Map;const n=a.join(",");let r=xi.get(e.host);if(!r||r.shape!==n||t.start<r.from||!o&&t.end>r.to+6e4||o&&r.to!==1/0){const i=(r?.generation??0)+1,s={shape:n,from:t.start,to:o?1/0:t.end,status:"loading",data:new Map,generation:i};r=s,xi.set(e.host,s);const l=e.hass.callWS?.({type:"history/history_during_period",start_time:new Date(t.start).toISOString(),end_time:new Date(t.end).toISOString(),entity_ids:a,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});l&&l.then(t=>{if(xi.get(e.host)===s&&s.generation===i){for(const e of a){const o=(t?.[e]??[]).map(e=>({t:Math.round(1e3*(e.lu??e.lc??0)),s:String(e.s??"")})).filter(e=>e.t>0);s.data.set(e,o.slice(-2e3))}s.status="ready",e.requestUpdate()}},()=>{xi.get(e.host)===s&&(s.status="error")})}const i=r;if("ready"===i.status&&o)for(const s of a){const t=e.hass.states[s];if(!t)continue;const o=Date.parse(t.last_changed??t.last_updated??""),a=i.data.get(s)??[],n=a[a.length-1];Number.isFinite(o)&&(!n||o>n.t&&n.s!==t.state)&&(a.push({t:o,s:t.state}),i.data.set(s,a))}return i.data}(e,c,t.live),m=Math.min(c.end,Date.now()),f=vi(t),g=[],v=(e,t,o,a)=>{const n=o.slice(0,2e3);if(s.push(Z`${n.map(e=>Z`<line class="mark-line ${a}" x1=${d(e)} x2=${d(e)} y1="0" y2=${wn} stroke=${t}></line>`)}`),e.label&&n.length<=60)for(const r of n)g.push({t:r,label:e.label,color:t})};for(const b of n){const a=Ce(b.color??si[b.type]);if("line"===b.type){const t=gi(b.value,e.hass,f);if(void 0===t||t<u||t>h)continue;const n=o.y(t);if(s.push(Z`<line class="threshold ${!1===b.dash?"":"dashed"}" x1="0" x2=${xn} y1=${n} y2=${n} stroke=${a}></line>`),b.label){const e=n/wn;l.push(W`<span
            class="annotation-label threshold ${e<.12?"below":""}"
            style="top:${wi(e)};--cd-annotation:${a}"
            >${b.label}</span
          >`)}}else if("band"===b.type){const t=void 0===b.from?u:gi(b.from,e.hass,f),n=void 0===b.to?h:gi(b.to,e.hass,f);if(void 0===t||void 0===n)continue;const r=Math.max(u,Math.min(t,n)),s=Math.min(h,Math.max(t,n));if(!(s>r))continue;const c=o.y(s);i.push(Z`<rect class="band" x="0" width=${xn} y=${c} height=${o.y(r)-c} fill=${a}></rect>`),b.label&&l.push(W`<span class="annotation-label band" style="top:${wi(c/wn)};--cd-annotation:${a}"
            >${b.label}</span
          >`)}else if("time"===b.type)v(b,a,yi(pi(b.times),c,t.zone),"time");else if("state"===b.type){const e=bi(p.get(b.entity.trim())??[],b.state,c,m);b.shade&&i.push(Z`${e.map(e=>Z`<rect class="state-shade" x=${d(e.start)} width=${Math.max(0,d(e.end)-d(e.start))} y="0" height=${wn} fill=${a}></rect>`)}`),v(b,a,e.map(e=>e.start).filter(e=>e>c.start),"state")}else if("point"===b.type){const n=$i(b,t.series),r=n&&ki(n,b.at??"max",c,void 0!==t.group);if(!n||!r)continue;const i=d(r.t)/xn,s=o.y(r.v)/wn;if(!(i>=0&&i<=1&&s>=0&&s<=1))continue;const u=Pn(Fn(r.v,n.entity.decimals,e.hass),n.entity.unit),h=i<.1?"start":i>.9?"end":"";l.push(W`<span class="annotation-dot" style="left:${wi(i)};top:${wi(s)};background:${a}"></span>
          <span
            class="annotation-label point ${h} ${s<.2?"below":""}"
            style="left:${wi(i)};top:${wi(s)};--cd-annotation:${a}"
            >${b.label?W`<span class="point-name">${b.label}</span> `:R}${u}</span
          >`)}}const y=function(e,t,o=2){const a=e.map((e,t)=>t).sort((t,o)=>e[t].x-e[o].x),n=Array.from({length:o},()=>-1/0),r=e.map(()=>{});for(const i of a){const{x:o,width:a}=e[i],s=o+2+a>t?o-2-a:o+2,l=n.findIndex(e=>s>=e+4);l<0||(n[l]=s+a,r[i]=l)}return r}(g.map(e=>({x:d(e.t)/xn*a,width:_i(e.label)})),a);return g.forEach((t,o)=>{const n=y[o];if(void 0===n)return;const r=d(t.t)/xn,i=r*a+2+_i(t.label)>a;l.push(W`<span
        class="annotation-label mark ${i?"end":""}"
        style="left:${wi(r)};top:${15*n}px;--cd-annotation:${t.color}"
        title=${zt(e.hass,"annotation_at",{label:t.label,time:ua(t.t,e.hass)})}
        >${t.label}</span
      >`)}),{behind:i.length?Z`<g class="annotations-behind">${i}</g>`:R,front:s.length?Z`<g class="annotations-front">${s}</g>`:R,overlay:l.length?W`<div class="annotation-labels">${l}</div>`:R}}const zi=r`
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
`,Si={line:["value","dash"],band:["from","to"],time:["times"],state:["entity","state","shade"],point:["at","series"]},Ai={dash:!0,shade:!1,at:"max"};function Ei(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:zt(e,`editor_annotation_${t}_${o}`)}))}}}const Ci=new Map;function ji(e,t){const o={...e};return t.length?o.annotations=t:delete o.annotations,o}function Ni(e,t){if("line"===e)return{type:e,value:0};if("band"===e)return{type:e,from:0,to:1};if("time"===e)return{type:e,times:["07:00"]};if("state"===e){const o=(t.entities??[])[0];return{type:e,entity:"string"==typeof o?o:o?.entity??"sensor.example",state:"on"}}return{type:e,at:"max"}}function Li(e){const t=Array.isArray(e.config.annotations)?e.config.annotations:[],o=(e.config.entities??[]).map(e=>"string"==typeof e?e:e.entity),a=t=>zt(e.hass,t),n=(o,a)=>{const n=[...t];a?n[o]=a:n.splice(o,1),e.commit(ji(e.config,n))};return W`<style>
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
      ${t.map((t,r)=>W`<div class="annotation" data-index=${r}>
            <ha-form
              data-section="annotation"
              .hass=${e.hass}
              .data=${function(e){const t={type:e.type};for(const o of[...Si[e.type],"label","color"]){let a=e["series"===o?"entity":o];"times"===o?a=pi(e.times).join(", "):"value"!==o&&"from"!==o&&"to"!==o||void 0===a||(a=String(a)),t[o]=a??Ai[o]}return t}(t)}
              .schema=${function(e,t,o){const a=`${e}|${Mt(t)}|${o.join(",")}`;let n=Ci.get(a);if(n)return n;const r={value:{text:{}},from:{text:{}},to:{text:{}},times:{text:{}},entity:{entity:{}},series:{entity:{include_entities:o}},state:{text:{}},shade:{boolean:{}},dash:{boolean:{}},at:Ei(t,"at",ii)};return n=[{name:"type",selector:Ei(t,"type",ri)},...Si[e].map(e=>({name:e,selector:r[e]})),{type:"grid",name:"",schema:[{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}}}]}],Ci.set(a,n),n}(ri.includes(t.type)?t.type:"line",e.hass,o)}
              .computeLabel=${e=>a(`editor_annotation_${e.name}`)}
              @value-changed=${e=>{e.stopPropagation(),n(r,function(e,t){const o=e.type??t.type,a={type:o},n=o===t.type?[...Si[o],"label","color"]:["label","color"];for(const r of n){let t=e[r];"string"==typeof t&&(t=t.trim()),void 0!==t&&""!==t&&t!==Ai[r]&&("value"!==r&&"from"!==r&&"to"!==r||!Number.isFinite(Number(t))||(t=Number(t)),"times"===r&&(t=pi(t)),a["series"===r?"entity":r]=t)}return a}(e.detail?.value??{},t))}}
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
        ${ri.map(o=>W`<button
              type="button"
              data-type=${o}
              @click=${()=>e.commit(ji(e.config,[...t,Ni(o,e.config)]))}
            >
              + ${a(`editor_annotation_add_${o}`)}
            </button>`)}
      </div>
    </div>`}function Oi(e,t,o){return{select:{mode:"dropdown",options:o.map(o=>({value:o,label:zt(e,`editor_${t}_${o}`)}))}}}const Ti=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"}];function Fi(e){const t=e?.period;return`${t?.calendar?"calendar":"rolling"}${e?.group_by?"|grouped":""}`}function Pi(e,t){const[o,a]=Fi(t).split("|"),n="calendar"===o;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:Oi(e,"period_calendar",["rolling",...Ea])},...n?[{name:"period_until",selector:Oi(e,"period_until",Ca)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:Oi(e,"period_unit",Aa)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:Oi(e,"source",kn)},{type:"grid",name:"",schema:[{name:"group_by",selector:Oi(e,"group_by",["none",...on])},...a?[{name:"aggregate",selector:Oi(e,"aggregate",an)}]:[]]}]}const Di=Ti.filter(e=>["period_last","period_unit","source"].includes(e.name));function Ui(e){return[{type:"grid",name:"",schema:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:Oi(e,"period_unit",Aa)}]},{name:"source",selector:Oi(e,"source",kn)}]}const Hi=[{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];function Ii(e){return[{type:"grid",name:"",schema:[{name:"header",selector:Oi(e,"header",or)},{name:"compact",selector:{boolean:{}}}]}]}const Bi=[{name:"x_axis",path:["x_axis"],default:Do},{name:"y_axis",path:["y_axis"],default:Uo},{name:"axis_labels",path:["axis_labels"],default:Ho},{name:"grid_horizontal",path:["gridlines","horizontal"],default:Io},{name:"grid_vertical",path:["gridlines","vertical"],default:Bo},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function Wi(e){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:Oi(e,"axis_labels",Po)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const Zi=[{type:"grid",name:"",schema:[{name:"zoom",selector:{boolean:{}}},{name:"overview",selector:{boolean:{}}}]}],qi=[{name:"zones",selector:{boolean:{}}}];function Ri(e,t){return[{name:"labels",selector:{boolean:{}}},...!0===t?.labels?[{type:"grid",name:"",schema:[{name:"labels_show",selector:Oi(e,"labels_show",Ar)},{name:"labels_position",selector:Oi(e,"labels_position",Er)}]},{name:"labels_overlap",selector:{boolean:{}}}]:[]]}const Vi=[{name:"sync",selector:{text:{}}}];function Yi(e,t){return[{name:"multiples",selector:{boolean:{}}},...!0===t?.multiples?[{type:"grid",name:"",schema:[{name:"multiples_scale",selector:Oi(e,"multiples_scale",oi)},{name:"multiples_columns",selector:{number:{min:1,max:6,mode:"box"}}}]}]:[]]}const Gi=new Map;function Xi(e,t,o){const a=`${e}|${Mt(t)}`;let n=Gi.get(a);return n||(n=o(),Gi.set(a,n)),n}function Ji(e,t,o,a,n={}){return W`<ha-form
    data-section=${t}
    .hass=${e.hass}
    .data=${ko(e.config,a)}
    .schema=${o}
    .computeLabel=${t=>zt(e.hass,n[t.name]??`editor_${t.name}`)}
    @value-changed=${t=>{t.stopPropagation();const o=Mo(e.config,a,t.detail?.value??{});o!==e.config&&e.commit(o)}}
  ></ha-form>`}const Ki=[...Ti,{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"labels_show",path:["labels_show"],default:"all"},{name:"labels_position",path:["labels_position"],default:"auto"},{name:"labels_overlap",path:["labels_overlap"],default:!1},{name:"line_width",path:["line_width"],default:Lt},{name:"dots",path:["dots"],default:!1},...Bi,{name:"y_scale",path:["y_scale"],default:Wo},{name:"zoom",path:["zoom"],default:!1},{name:"overview",path:["overview"],default:!1},{name:"zones",path:["zones"],default:!1},...Xr,{name:"sync",path:["sync"]},...Hi,{name:"multiples",path:["multiples"],default:!1},{name:"multiples_scale",path:["multiples_scale"],default:"auto"},{name:"multiples_columns",path:["multiples_columns"]}];function Qi(e,t){if(!e)return t;const[o,a]=e,n={};return void 0===t.y_min&&o>=0&&o<=a/2&&(n.y_min=0),void 0===t.y_max&&a<=0&&a>=o/2&&(n.y_max=0),Object.keys(n).length?{...t,...n}:t}function es(e){const t=[];return e.forEach((o,a)=>{a>0&&t.push([o[0],e[a-1][1]]),t.push(o)}),t}function ts(e,t,o){if(e.length<2)return"";const[a,n,r]="step"===o?[es(e),es(t),"straight"]:[e,t,o];return`${bn(a,r)}${bn([...n].reverse(),r).replace(/^M/,"L")}Z`}function os(e,t){return"step"===t?bn(es(e),"straight"):bn(e,t)}function as(e,t,o,a,n={}){const r=Ft(e.entity.config,a),i=e.entity.config.line_width??a.line_width,s=o.y(Math.min(Math.max(0,o.domain[0]),o.domain[1])),l=function(e){const t=e.entity.config.negative_color;return"string"==typeof t&&t.trim()?Ce(t.trim()):e.color}(e),c=`cd-area-${e.index}`,d=`cd-area-line-${e.index}`,u=l!==e.color,h=Z`${function(e,t,o,a,n=.42,r=.05){const i=Math.min(1,Math.max(0,a/wn));return Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${wn}>
    <stop offset="0" stop-color=${t} stop-opacity=${n}></stop>
    <stop offset=${i} stop-color=${t} stop-opacity=${r}></stop>
    <stop offset=${i} stop-color=${o} stop-opacity=${r}></stop>
    <stop offset="1" stop-color=${o} stop-opacity=${n}></stop>
  </linearGradient>`}(c,e.color,l,s,n.stacked?.6:.42,n.stacked?.35:.05)}
    ${u?function(e,t,o,a){const n=Math.min(1,Math.max(0,a/wn));return Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${wn}>
    <stop offset=${n} stop-color=${t}></stop>
    <stop offset=${n} stop-color=${o}></stop>
  </linearGradient>`}(d,e.color,l,s):R}`,p=[],m=[],f=[];if(n.layers){const a=n.layers;let r=[];const i=()=>{if(r.length){const n=r.map(e=>[o.x(t[e].t),o.y(a[e][1])]),i=r.map(e=>[o.x(t[e].t),o.y(a[e][0])]);p.push(ts(n,i,e.curve)),m.push(os(n,e.curve))}r=[]};for(let e=0;e<t.length;e++)a[e]?r.push(e):i();i()}else for(const y of _n(t)){const t=y.map(e=>[o.x(e.t),o.y(e.v)]);p.push(ts(t,t.map(([e])=>[e,s]),e.curve)),m.push(os(t,e.curve))}if(r.dots){const e=n.range;t.forEach((t,a)=>{if(null===t.v||e&&(t.t===e.start||t.t===e.end))return;const r=n.layers?n.layers[a]?.[1]:t.v;void 0!==r&&f.push([o.x(t.t),o.y(r)])})}const g=i??2,v=u?`url(#${d})`:e.color;return{defs:h,body:Z`<g class="series" data-series=${e.index}>
    <path class="fill" d=${p.join("")} fill="url(#${c})" stroke="none"></path>
    <path class="line ${e.dash?"dashed":""}" d=${m.join("")} fill="none" stroke=${v}
      style="stroke-width:${g}px"></path>
    ${f.length>0&&f.length<=200?Z`<path class="dots" d=${Dt(f)} fill="none" stroke=${v}
            style="stroke-width:${Ut(g)}px"></path>`:R}
  </g>`}}const ns=[...Ti,{name:"curve",path:["curve"],default:"smooth"},{name:"stack",path:["stack"],default:"none"},{name:"line_width",path:["line_width"],default:2},{name:"dots",path:["dots"],default:!1},...Bi,...Hi];const rs={name:"negative_color",path:["negative_color"]},is=new Map;const ss=r`
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
`,ls={layout:"chart",group:"history",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
    ${ss}
  `,thumbnail:()=>Z`
    <defs>
      <linearGradient id="cd-thumb-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.5" />
        <stop offset="1" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10 V36 H4 Z" fill="url(#cd-thumb-area)" />
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){Mn(e),qo(e),xr(e),Bt(e),ar(e),cr(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t.negative_color;if(void 0!==e&&"string"!=typeof e)throw new Error(`"negative_color" of ${t.entity} must be a colour`)}}(e)},editor:function(e){const t=Xi(`area|${Fi(e.config)}`,e.hass,()=>[...Pi(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:Oi(e.hass,"curve",gn)},{name:"stack",selector:Oi(e.hass,"stack",lr)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:ao},{name:"dots",selector:{boolean:{}}}]},...Wi(e.hass),...Ii(e.hass)]);return Ji(e,"chart",t,ns)},entityFields:function(e,t){const o=!0===t.dots;let a=is.get(o);return a||(a=[...ro(o),rs],is.set(o,a)),{schema:Xi("area-entity",e,()=>[...po(e),{name:"negative_color",selector:{text:{}}}]),fields:a}},disconnect(e){jn(e),Gn(e),br(e)},render:function(e){const t=zn(e),o=En(t,e),a=Nn(t,e),n=o===R&&a===R?R:W`${o}${a}`,r=Ln(t,e),i=nr(e.raw);if(r)return rr("over"===i.header?{...i,header:"above"}:i,n,r);const s=e.raw.stack??"none",l=t.series.map(e=>({...e,points:pa(e.points,500)}));let c,d,u=l;const h={};if("none"===s){const o=Lo(l.map(e=>e.points));d=Jn({...e,raw:Qi(o,e.raw)},t.range,o);const a=d.scales,n=Pt(l,t=>Ft(t.entity.config,e.raw).onTop);c=n.map(o=>as(o,o.points,a,e.raw,{range:t.range}))}else{const o=function(e){const t=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t);return{times:t,values:e.map(e=>t.map(t=>dr(e,t)))}}(l.map(e=>e.points)),a=ur(o.values,s),n=hr(o.values);u=l.map((e,t)=>({...e,points:o.times.map((e,a)=>({t:e,v:o.values[t][a]}))}));const r=pr(a),i="percent"===s?{y_min:r[0]<0?-100:0,y_max:r[1]>0?100:0}:{};d=Jn({...e,raw:Qi(r,{...i,...e.raw})},t.range,r);const p=d.scales;c=u.map((o,n)=>as(o,o.points,p,e.raw,{layers:a[n],stacked:!0,range:t.range})).reverse();const m=new Map;u.forEach(e=>e.points.forEach((e,t)=>m.set(e,t))),h.dotY=(e,t)=>{const o=a[e.index][m.get(t)??-1];return o?p.y(o[1]):null};const f=kr(u),g=Math.max(...u.map(e=>e.entity.decimals));h.footer=t=>{const o=t.length?m.get(t[0].p):void 0;return Mr(e,void 0===o?null:n[o],f,g)},"percent"===s&&(h.text=(t,o)=>{const n=o?a[t.index][m.get(o)??-1]:null;if(!o||null===o.v||!n)return"—";const r=Math.round(Math.abs(n[1]-n[0]));return`${Pn(Fn(o.v,t.entity.decimals,e.hass),t.entity.unit)} · ${r} %`})}const p=_r(e.raw),m=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_area"),names:t.series.map(e=>e.entity.name).join(", ")});return rr(i,n,er({axes:d,ctx:e,content:Z`${c.map(e=>e.body)}`,defs:Z`${c.map(e=>e.defs)}`,label:m,overlay:W`${"over"===i.header?ir(n):R}
      ${p?zr(e,u,d.scales,yr(e.host),Xn(e),h):R}`,hover:p?wr(e,t.range,u.map(e=>e.points)):void 0}))}};function cs(e,t,o){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t?0:Math.min(1,Math.max(0,(e-t)/(o-t)))}function ds(e,t,o){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||o<=t)return[0,0];const a=cs(e,t,o);if(t<0&&o>0){const e=cs(0,t,o);return a<e?[a,e]:[e,a]}return[0,a]}const us=new Set;function hs(e){return(e.available?e.band.icon:void 0)??e.config.icon??(e.stateObj?void 0:"mdi:help-circle-outline")}function ps(e){return null==e||""===e}function ms(e){if(void 0===e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function fs(e,t,o="limit",a){if(ps(e))return null;if("number"==typeof e)return Number.isFinite(e)?e:null;const n=String(e),r=ms(t.states[n]?.state),i=t.states[n]?.attributes?.unit_of_measurement,s=null===r?void 0:qt("string"==typeof i?i:void 0,a),l=s&&null!==r?s.apply(r):r;if(null===l&&!us.has(n)){us.add(n);const e="limit"===o?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${o} entity "${n}" is missing or not numeric; ${e}.`)}return l}function gs(e,t,o){if(e.every(e=>"number"==typeof e.from))return e;const a=[];for(const n of e){const e=t?fs(n.from,t,"band start",o):null;null!==e&&a.push({...n,from:e})}return a.length?a.sort((e,t)=>e.from-t.from):st}function vs(e,t){const o=e.entity,a=t.states[o],n=e.name??a?.attributes?.friendly_name??o,r=e.attribute?"":String(a?.attributes?.unit_of_measurement??""),i=e.unit??r,s=void 0===e.unit?void 0:qt(r||void 0,e.unit),l=function(e,t){if(t)return e.attribute?t.attributes?.[e.attribute]:t.state}(e,a),c=function(e){return"number"==typeof e?Number.isFinite(e)?e:null:"string"==typeof e?ms(e):null}(l),d=s&&null!==c?s.apply(c):c,u=null!==d;let h;h=ps(e.decimals)?e.attribute?u?function(e){const t=String(e),o=t.indexOf(".");return-1===o||/e/i.test(t)?0:Math.min(2,t.length-o-1)}(l):0:s&&"number"==typeof t.entities?.[o]?.display_precision?function(e,t){return Math.min(6,Math.max(0,e+Math.round(-Math.log10(t))))}(t.entities[o].display_precision,s.slope):function(e,t,o){const a=e?.entities?.[t]?.display_precision;return"number"==typeof a?a:"%"===o?0:1}(t,o,i):e.decimals;const p=fs(e.min,t,"limit",i)??0,m=fs(e.max,t,"limit",i)??100,f=fs(e.target,t,"limit",i),g=gs(e.severity,t,i);let v,y="";return u?(y=Fn(d,h,t),v=Pn(y,i)):v=a?function(e,t,o,a){const n=e.attribute;return n&&"string"==typeof o&&""!==o.trim()?a.formatEntityAttributeValue?.(t,n)??o:a.formatEntityState?.(t)??zt(a,"unavailable")}(e,a,l,t):zt(t,"entity_not_found"),{entityId:o,config:e,stateObj:a,available:u,value:d,min:p,max:m,target:f,name:n,unit:i,...s?{conversion:s}:{},decimals:h,position:u?cs(d,p,m):0,span:u?ds(d,p,m):[0,0],targetPosition:null===f?null:cs(f,p,m),band:Oe(u?d:-1/0,g),bands:g,valueText:y,display:v,label:`${n}, ${v}`}}function ys(e,t){if(!e.include)return[];const o=new Set(e.entities.map(e=>e.entity));return function(e,t,o){const a=Ze.get(e);if(a&&a.exclude===t&&a.states===o.states&&a.entities===o.entities&&a.devices===o.devices&&a.areas===o.areas)return a.ids;const n=[];for(const i of Object.values(o.states)){if(!Ue(i)||o.entities?.[i.entity_id]?.hidden)continue;const a=He(i,o);if(!Be(e,a)||We(t,a))continue;const r=i.attributes?.friendly_name;n.push({id:i.entity_id,name:"string"==typeof r&&r?r:i.entity_id})}n.sort((e,t)=>e.name.localeCompare(t.name)||(e.id<t.id?-1:1));const r=n.map(e=>e.id);return Ze.set(e,{exclude:t,states:o.states,entities:o.entities,devices:o.devices,areas:o.areas,ids:r}),r}(e.include,e.exclude,t).filter(e=>!o.has(e))}const bs={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:r`
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
  `,render(e,{show:t,hass:o}){const a=t.value||!e.available,n=W`${t.name?W`<span class="name">${e.name}</span>`:R}${a?W`<span class="value">${e.display}</span>`:R}`;return W`
      ${t.icon?W`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${hs(e)}
            ></ha-state-icon>`:R}
      <div class="track">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?W`<div class="target"></div>`:R}
        <div class="text">${n}</div>
        ${e.available?W`<div class="text on-fill ${Le(e.band.color)}" aria-hidden="true">${n}</div>`:R}
      </div>
    `}};function _s(e,t){const o=e.reduce((e,t)=>e+t.w,0);let a,n=0;for(const r of e){const e=(n+r.w/2)/o;if(n+=r.w,t<=e)return a?a.v+(r.v-a.v)*(t-a.at)/(e-a.at):r.v;a={at:e,v:r.v}}return e[e.length-1].v}const xs=["tukey","range"];function ws(e,t){if(e.length<=t)return[...e];const o=[];for(let a=0;a<t;a++)o.push(e[Math.floor(a*e.length/t)]);return o}const $s=e=>"number"==typeof e&&Number.isFinite(e);function ks(e){for(const t of["x_min","x_max"])if(void 0!==e[t]&&!$s(e[t]))throw new Error(`"${t}" must be a number`);if($s(e.x_min)&&$s(e.x_max)&&e.x_min>=e.x_max)throw new Error('"x_min" must be below "x_max"')}const Ms=[{name:"x_min",path:["x_min"]},{name:"x_max",path:["x_max"]}],zs=[{type:"grid",name:"",schema:[{name:"x_min",selector:{number:{mode:"box",step:"any"}}},{name:"x_max",selector:{number:{mode:"box",step:"any"}}}]}];function Ss(e){return{min:$s(e.x_min)?e.x_min:void 0,max:$s(e.x_max)?e.x_max:void 0}}function As(e,t,o,a={}){const n=Ro(e.raw),r=Math.max(2,Math.min(8,Math.round(Yn(e)/70))),i=Xo(t,a.x??{},r),s=Xo(o,{min:n.min??a.yFloor,max:n.max},4);return{options:n,value:s,times:i.ticks,unit:"minute",range:{start:i.domain[0],end:i.domain[1]},scales:{x:To(i.domain,[0,xn]),y:To(s.domain,[wn,0]),domain:s.domain}}}function Es(e){const[t,o]=e.times;return void 0===t||void 0===o?0:Math.max(0,-Math.floor(Math.log10(Math.abs(o-t))+1e-9))}const Cs=new WeakMap;function js(e){return Cs.get(e)?.i}function Ns(e){const t=Cs.get(e);void 0!==t?.timer&&clearTimeout(t.timer),Cs.delete(e)}function Ls(e,t){const o=function(e){let t=Cs.get(e);return t||(t={},Cs.set(e,t)),t}(e.host),a=t=>{t!==o.i&&(o.i=t,e.requestUpdate())},n=()=>{void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0};return{move(e){n();const o=e.currentTarget.getBoundingClientRect(),r=o.width>0?Math.min(1,Math.max(0,(e.clientX-o.left)/o.width)):0,i=o.height>0?Math.min(1,Math.max(0,(e.clientY-o.top)/o.height)):0;a(t(r,i,o.width,o.height))},leave(e){n(),"touch"===e.pointerType||"pen"===e.pointerType?o.timer=setTimeout(()=>{o.timer=void 0,a(void 0)},fr):a(void 0)}}}const Os=e=>Math.round(1e4*e)/100+"%";function Ts(e){const{x:t,y:o,plotWidth:a,title:n,rows:r,dot:i,band:s}=e;if(!(t>=0&&t<=1))return R;const l=mr(t,a);return W`<div class="hover-layer" aria-hidden="true">
    ${s?W`<div class="pick-band" style="left:${Os(s[0])};width:${Os(s[1]-s[0])}"></div>`:R}
    ${i&&o>=0&&o<=1?W`<span class="hover-dot" style="left:${Os(t)};top:${Os(o)};background:${i}"></span>`:R}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${Os(t)}`}>
      <div class="tooltip-time">${n}</div>
      ${r.map(e=>W`<div class="tooltip-row">
            ${e.color?W`<span class="swatch" style="background:${e.color}"></span>`:R}
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${e.value}</span>
          </div>`)}
    </div>
  </div>`}const Fs=r`
  .pick-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
`,Ps=["vertical","horizontal"],Ds=.72;function Us(e,t){const o=e.bounds.length>1,a=o?e.bounds.slice(0,-1).map((t,o)=>[t,e.bounds[o+1]]):[[e.range.start,e.range.end]],n=[];return a.forEach(([a,r],i)=>{const s=Math.min(r,e.until);e.series.forEach((r,l)=>{let c,d;"statistics"===e.source?({samples:c,extremes:d}=function(e,t,o){const a=[];let n=1/0,r=-1/0;for(const i of e)i.t<t||i.t>=o||i.carried||null===i.v||(a.push({v:i.v,w:1}),n=Math.min(n,i.v,"number"==typeof i.min?i.min:i.v),r=Math.max(r,i.v,"number"==typeof i.max?i.max:i.v));return{samples:a,extremes:a.length?[n,r]:void 0}}(r.points,a,s)):c=function(e,t,o){const a=[];if(o<=t)return a;for(let n=0;n<e.length;n++){const r=e[n];if(r.t>=o)break;const i=n+1<e.length?e[n+1].t:1/0,s=Math.max(r.t,t),l=Math.min(i,o);l<=s||null===r.v||a.push({v:r.v,w:l-s})}return a}(r.points,a,s);const u=function(e,t,o){const a=e.filter(e=>e.w>0&&Number.isFinite(e.v)).sort((e,t)=>e.v-t.v);if(0===a.length)return;const n=_s(a,.25),r=_s(a,.5),i=_s(a,.75),s=a.reduce((e,t)=>e+t.w,0),l=a.reduce((e,t)=>e+t.v*t.w,0)/s,c=Math.min(a[0].v,o?.[0]??1/0),d=Math.max(a[a.length-1].v,o?.[1]??-1/0),u={count:a.length,q1:n,median:r,q3:i,mean:l,min:c,max:d};if("range"===t)return{...u,low:c,high:d,outliers:[]};const h=1.5*(i-n),p=a.filter(e=>e.v>=n-h&&e.v<=i+h),m=Math.min(p[0]?.v??n,n),f=Math.max(p[p.length-1]?.v??i,i);let g=[...new Set(a.filter(e=>e.v<m||e.v>f).map(e=>e.v))];return g.length>60&&(g=g.map(e=>({v:e,d:e<m?m-e:e-f})).sort((e,t)=>t.d-e.d).slice(0,60).map(e=>e.v).sort((e,t)=>e-t)),{...u,low:m,high:f,outliers:g}}(c,t,d);u&&n.push({category:o?i:l,slot:o?l:0,series:r,stats:u,readings:ws(c.map(e=>e.v),120)})})}),{boxes:n,categories:o?a.length:e.series.length,slots:o?e.series.length:1}}function Hs(e,t){const o=Math.max(1,Math.ceil(e/Math.max(1,t))),a=[];for(let n=0;n<e;n+=o)a.push(n);return a}const Is=new Map;function Bs(e,t,o){const a=Ds/t;return{centre:e.category-.36+a*(e.slot+.5),half:Math.min(.4*a,o)}}function Ws(e,t,o,a){const{stats:n,series:r}=e,{centre:i,half:s}=t,l=(e,t,o)=>Z`<line class=${o} x1=${e[0]} y1=${e[1]} x2=${t[0]} y2=${t[1]}></line>`,[c,d]=o(i-s,n.q1),[u,h]=o(i+s,n.q3),p=a&&e.readings.length?Z`<path class="readings" d=${Dt(e.readings.map((e,t)=>o(i+function(e){const t=43758.5453*Math.sin(12.9898*(e+1));return 2*(t-Math.floor(t))-1}(t)*s*.8,e)))}></path>`:R;return Z`<g class="box" data-series=${r.index} style="--box-color:${r.color}">
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
    ${n.outliers.length?Z`<path class="outliers" d=${Dt(n.outliers.map(e=>o(i,e)))}></path>`:R}
  </g>`}const Zs=[...Ti,{name:"orientation",path:["orientation"],default:"vertical"},{name:"whiskers",path:["whiskers"],default:"tukey"},{name:"readings",path:["readings"],default:!1},...Bi,...Hi];const qs=[{name:"box_color",selector:{text:{}}}],Rs=[{name:"box_color",path:["color"]}],Vs={layout:"chart",group:"distribution",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
    ${Fs}
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
    </g>`,validate:function(e){Mn(e),qo(e),xr(e),ar(e);const t=e;if(void 0!==t.orientation&&!Ps.includes(t.orientation))throw new Error(`"orientation" must be one of: ${Ps.join(", ")}`);if(void 0!==t.whiskers&&!xs.includes(t.whiskers))throw new Error(`"whiskers" must be one of: ${xs.join(", ")}`);if(void 0!==t.readings&&"boolean"!=typeof t.readings)throw new Error('"readings" must be true or false')},editor:function(e){const t={...e.config,group_by:void 0},o=Xi(`box|${Fi(t)}`,e.hass,()=>[...Pi(e.hass,t),{type:"grid",name:"",schema:[{name:"orientation",selector:Oi(e.hass,"orientation",Ps)},{name:"whiskers",selector:Oi(e.hass,"whiskers",xs)}]},{name:"readings",selector:{boolean:{}}},...Wi(e.hass),...Ii(e.hass)]);return Ji(e,"chart",o,Zs)},entityFields:()=>({schema:qs,fields:Rs}),disconnect(e){jn(e),Gn(e),Ns(e)},render(e){const t=function(e,t=Date.now()){const o=Ta(e.raw.period),a=e.raw.source??"history",n=Sa(e.hass),r=Pa(o,t,n,o.navigate?Ua(e.host,o):0),i=nn(e.raw),s={start:i?$a(i.unit,r.start,n):r.start,end:r.end},l=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),c="statistics"===a?{period:i?"hour"===i.unit?"5minute":"hour":Qa(s),types:["mean","min","max"],value:"mean"}:void 0,d=fn(e.host,e.requestUpdate).get(e.hass,l,s,a,{live:r.live,statistics:c}),u=e.items.map((e,t)=>{const o=e.config;return{index:t,entity:e,points:Rt(d.data.get(tn(l[t]))??[],e.conversion),color:Ce(o.color??$n[t%$n.length]),curve:"straight",dash:!1}});return{status:d.status,error:d.error,range:s,period:o,source:a,series:u,live:r.live,back:r.back,zone:n,bounds:i?Ma(i.unit,s.start,s.end,n):[],unit:i?.unit,until:Math.min(s.end,t)}}(e),o=En(t,e),a=Nn(t,e),n=o===R&&a===R?R:W`${o}${a}`,r=nr(e.raw),i=Ln(t,e);if(i)return rr("over"===r.header?{...r,header:"above"}:r,n,i);const s=e.raw,l=s.orientation??"vertical",c=s.whiskers??"tukey",{boxes:d,categories:u,slots:h}=Us(t,c);let p=1/0,m=-1/0;for(const L of d)p=Math.min(p,L.stats.low,...L.stats.outliers,...!0===s.readings?L.readings:[]),m=Math.max(m,L.stats.high,...L.stats.outliers,...!0===s.readings?L.readings:[]);const f=t.bounds.length>1,g="vertical"===l,v=g?Math.max(4,Math.floor(Xn(e)/Math.max(1,u)/6.5)):16,y=o=>f?function(e,t,o){const a=e.bounds[t],n=e.range.end-e.range.start;return"hour"===e.unit?ha(a,"hour",n,o):"month"===e.unit?ha(a,"month",n,o):ha(a,"day","week"===e.unit?1/0:n,o)}(t,o,e.hass):((e,t=16)=>e.length>t?`${e.slice(0,t-1)}…`:e)(t.series[o]?.entity.name??"",v),b=Math.max(0,...Array.from({length:u},(e,t)=>y(t).length)),_=function(e,t,o,a,n,r=0){const i=Ro(e.raw),s={min:i.min,max:i.max},l=[-.5,o-.5];if("vertical"===t){const t=Xn(e),r=Xo(a,s,4);return{options:i,value:r,times:Hs(o,Math.floor(t/n)),unit:"day",range:{start:l[0],end:l[1]},scales:{x:To(l,[0,xn]),y:To(r.domain,[wn,0]),domain:r.domain}}}const c=Yn(e)-32-(i.y&&"outside"===i.labels?r:0),d=Xo(a,s,Math.max(2,Math.min(8,Math.round(c/70)))),u=!0===e.raw.compact?6:10;return{options:{...i,horizontal:i.vertical,vertical:i.horizontal},value:{domain:l,ticks:Hs(o,u),decimals:0},times:d.ticks,unit:"day",range:{start:d.domain[0],end:d.domain[1]},scales:{x:To(d.domain,[0,xn]),y:To(l,[0,wn]),domain:l}}}(e,l,u,d.length?[p,m]:void 0,f?56:1,6*b+12),x=g?_.scales.x:_.scales.y,w=g?_.scales.y:_.scales.x,$=(e,t)=>g?[x(e),w(t)]:[w(t),x(e)],k=g?Xn(e):r.compact?110:160,M=k>0?u/k*22:1/0,z=Z`${d.map(e=>Ws(e,Bs(e,h,M),$,!0===s.readings))}`,S=zt(e.hass,"box_aria",{names:t.series.map(e=>e.entity.name).join(", ")}),A=_r(e.raw),E=A?js(e.host):void 0,C=(t,o)=>Pn(Fn(o,t.series.entity.decimals,e.hass),t.series.entity.unit);let j=R;const N=void 0===E?void 0:d[E];if(N){const o=t=>zt(e.hass,t),{stats:a}=N,n=[{name:o("box_highest"),value:C(N,a.max)},{name:o("box_upper_quartile"),value:C(N,a.q3)},{name:o("box_median"),value:C(N,a.median),color:N.series.color},{name:o("box_lower_quartile"),value:C(N,a.q1)},{name:o("box_lowest"),value:C(N,a.min)},{name:o("box_mean"),value:C(N,a.mean)},{name:o("box_count"),value:String(a.count)}];if(a.outliers.length){const e=a.outliers.length;n.push({name:o("box_outliers"),value:e>=60?`${e}+`:String(e)})}const r=Bs(N,h,M),i=f?`${function(e,t,o){const a="month"===t?{month:"long",year:"numeric"}:"hour"===t?{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:sa(o)}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short"},n=o?.locale?.language??"en",r=`${n}|${t}|${ia(o)}|${a.hour12}`;let i=Is.get(r);if(!i){try{i=new Intl.DateTimeFormat(n,{...a,timeZone:ia(o)})}catch{i=new Intl.DateTimeFormat("en",a)}Is.set(r,i)}return i.format(e)}(t.bounds[N.category],t.unit,e.hass)}${h>1?` · ${N.series.entity.name}`:""}`:N.series.entity.name;j=Ts(g?{x:x(r.centre)/xn,y:w(a.median)/wn,plotWidth:Xn(e),title:i,rows:n,band:[x(N.category-.5)/xn,x(N.category+.5)/xn]}:{x:w(a.high)/xn,y:x(r.centre)/wn,plotWidth:Xn(e),title:i,rows:n})}return rr(r,n,er({axes:_,ctx:e,content:z,label:S,overlay:W`${"over"===r.header?ir(n):R}${j}`,hover:A?Ls(e,(e,t)=>function(e,t,o,a){const n=a*t-.5,r=Math.min(t-1,Math.max(0,Math.round(n))),i=n-r+.36;if(o>1&&(i<0||i>=Ds))return;const s=Math.min(o-1,Math.max(0,Math.floor(i/(Ds/o)))),l=e.findIndex(e=>e.category===r&&e.slot===s);return l<0?void 0:l}(d,u,h,g?e:t)):void 0,...g?{xLabel:y}:{yLabel:y,xLabel:t=>Fn(t,Es(_),e.hass)}}))}},Ys=["entity","time"],Gs=[2,80],Xs=[2,30],Js=[0,20];function Ks(e,t){const o=new Set;for(const i of e)for(const e of i)e.t!==t&&o.add(e.t);const a=[...o].sort((e,t)=>e-t),n=e.map(()=>-1),r=[];for(const i of a){const t=[];let o=!0;e.forEach((e,a)=>{for(;n[a]+1<e.length&&e[n[a]+1].t<=i;)n[a]++;const r=e[n[a]];r&&null!==r.v?t.push(r.v):o=!1}),o&&r.push({t:i,v:t})}return r}function Qs(e,t){if(e.length<=t)return e;const o=e.length/t,a=[];for(let n=0;n<t-1;n++)a.push(e[Math.floor(n*o)]);return a.push(e[e.length-1]),a}function el(e,t){let o=Math.floor(e/1e3)^Math.imul(t+1,2654435769)|0;return o=Math.imul(o^o>>>16,73244475),o=Math.imul(o^o>>>16,73244475),o^=o>>>16,(o>>>0)/4294967295*2-1}function tl(e,[t,o],a,n){const r=a*a+(n*n-a*a)*(o>t?Math.min(1,Math.max(0,(e-t)/(o-t))):.5);return Math.round(10*Math.sqrt(r))/10}const ol=e=>"number"==typeof e&&Number.isFinite(e);function al(e,t,[o,a]){const n=e[t];if(void 0!==n&&(!ol(n)||n<o||n>a))throw new Error(`"${t}" must be a number from ${o} to ${a}`)}function nl(e,t){return{against:"bubble"===t?"entity":e.against??"entity",dotSize:ol(e.dot_size)?e.dot_size:6,jitter:ol(e.jitter)?e.jitter:0,minSize:ol(e.min_size)?e.min_size:6,maxSize:ol(e.max_size)?e.max_size:32}}function rl(e,t){if(Mn(e),qo(e),xr(e),ar(e),ks(e),al(e,"jitter",Js),"scatter"===t){if(void 0!==e.against&&!Ys.includes(e.against))throw new Error(`"against" must be one of: ${Ys.join(", ")}`);al(e,"dot_size",Xs)}else{al(e,"min_size",Gs),al(e,"max_size",Gs);const o=nl(e,t);if(o.minSize>o.maxSize)throw new Error('"min_size" must not be above "max_size"')}}function il(e,t){return Ce(e.entity.config.color??$n[(e.index-t)%$n.length])}const sl=(e,t,o)=>Pn(Fn(e,t.entity.decimals,o),t.entity.unit);function ll(e,t,o=Date.now()){const a=nl(e.raw,t),{against:n}=a,r=nr(e.raw),i=zn(e,o),s=En(i,e),l="time"===n,c=l?0:1,d=i.series.map((e,o)=>l?e.color:"bubble"===t?1===o?il(e,1):void 0:0===o?void 0:il(e,c)),u=function(e,t,o,a){const{show:n}=o.config;return n.name||n.value?W`<div class="series-header">
    ${e.map((e,r)=>{const i=t[r],s=void 0!==i?W`<span class="swatch" style="background:${i}"></span>`:W`<span class="role"
              >${zt(o.hass,"bubble"===a&&2===r?"bubble_role_size":"scatter_role_x")}</span
            >`;return W`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
        ${s} ${n.name?W`<span class="series-name">${e.entity.name}</span>`:R}
        ${n.value?W`<span class="series-value">${e.entity.display}</span>`:R}
      </div>`})}
  </div>`:R}(i.series,d,e,t),h=s===R&&u===R?R:W`${s}${u}`,p="over"===r.header?{...r,header:"above"}:r;if(i.series.length<function(e,t){return"bubble"===e?3:"entity"===t?2:1}(t,n))return rr(p,h,W`<div class="chart-message">
        ${zt(e.hass,"bubble"===t?"bubble_needs_three":"scatter_needs_two")}
      </div>`);const m=Ln(i,e);if(m)return rr(p,h,m);const f="history"!==i.source||i.group?void 0:Math.min(i.range.end,o),g=function(e,t,o,a){const{series:n}=e;if("time"===o)return n.map(e=>({s:e,samples:Qs(e.points.filter(e=>null!==e.v&&e.t!==a&&!e.carried).map(e=>({t:e.t,v:[e.t,e.v]})),800)}));if("bubble"===t){const[e,t,o]=n;return[{s:t,samples:Qs(Ks([e.points,t.points,o.points],a),400)}]}const[r,...i]=n;return i.map(e=>({s:e,samples:Qs(Ks([r.points,e.points],a),800)}))}(i,t,n,f),v=g.flatMap(e=>e.samples);if(0===v.length)return rr(p,h,W`<div class="chart-message">${zt(e.hass,"chart_no_data")}</div>`);const y=v.map(e=>e.v[1]),b=[Math.min(...y),Math.max(...y)];let _,x;if(l)_=Jn(e,i.range,Lo(i.series.map(e=>e.points)));else{const t=v.map(e=>e.v[0]);_=As(e,[Math.min(...t),Math.max(...t)],b,{x:Ss(e.raw)});const o=Es(_);x=t=>Fn(t,o,e.hass)}const{scales:w}=_,$=Xn(e)||1,k=a.jitter*xn/$,M=a.jitter*wn/(r.compact?96:162);const z="bubble"===t?v.map(e=>e.v[2]):[],S=z.length?[Math.min(...z),Math.max(...z)]:[0,0],A=g.flatMap(({s:e,samples:o})=>{const n=l?e.color:il(e,c);return o.map(o=>({series:e,t:o.t,x:w.x(o.v[0])+(k?el(o.t,2*e.index)*k:0),y:w.y(o.v[1])+(M?el(o.t,2*e.index+1)*M:0),v:l?[o.v[1]]:o.v,color:n,d:"bubble"===t?tl(o.v[2],S,a.minSize,a.maxSize):void 0}))}),E="bubble"===t?Z`${[...A].sort((e,t)=>(t.d??0)-(e.d??0)).map(e=>Z`<path class="bubble" d=${Dt([[e.x,e.y]])} stroke=${e.color} style="stroke-width:${e.d}px"></path>`)}`:Z`${g.map(({s:e})=>{const t=A.filter(t=>t.series===e);return t.length?Z`<path class="dots" data-series=${e.index} d=${Dt(t.map(e=>[e.x,e.y]))}
                stroke=${t[0].color} style="stroke-width:${a.dotSize}px"></path>`:R})}`,C=_r(e.raw),j=C?js(e.host):void 0,N=void 0!==j?A[j]:void 0,L=zt(e.hass,"chart_aria",{style:zt(e.hass,`editor_style_${t}`),names:i.series.map(e=>e.entity.name).join(", ")}),O=Math.max(16,"bubble"===t?a.maxSize/2:a.dotSize);return rr(r,h,W`${er({axes:_,ctx:e,content:E,label:L,xLabel:x,overlay:W`${"over"===r.header?ir(h):R}
      ${N?cl(N,i,t,n,e,$):R}`,hover:C?Ls(e,(e,t,o,a)=>function(e,t,o,a,n,r=24){let i,s=r*r;const l=t*a,c=o*n;return e.forEach(([e,t],o)=>{const r=e/xn*a-l,d=t/wn*n-c,u=r*r+d*d;u<=s&&(s=u,i=o)}),i}(A.map(e=>[e.x,e.y]),e,t,o,a,O)):void 0})}
    ${"bubble"===t?function(e,[t,o],a,n){const r=(t,o)=>W`<span class="size-item"
      ><span class="size-dot" style="width:${o}px;height:${o}px"></span>${sl(t,e,n)}</span
    >`;return W`<div class="size-legend" aria-hidden="true">
    <span class="size-name">${e.entity.name}</span>
    ${r(t,tl(t,[t,o],a.minSize,a.maxSize))}
    ${o>t?r(o,tl(o,[t,o],a.minSize,a.maxSize)):R}
  </div>`}(i.series[2],S,a,e.hass):R}`)}function cl(e,t,o,a,n,r){const i="time"===a?[e.series]:"bubble"===o?t.series.slice(0,3):[t.series[0],e.series];return Ts({x:e.x/xn,y:e.y/wn,plotWidth:r,title:ua(e.t,n.hass),dot:e.color,rows:i.map((t,o)=>({color:t===e.series?e.color:void 0,name:t.entity.name,value:sl(e.v[o],t,n.hass)}))})}const dl=r`
  ${Tn}
  ${tr}
  ${Sr}
  ${sr}
  ${Fs}
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
`;function ul(e){jn(e),Gn(e),br(e),Ns(e)}const hl=Bi.map(e=>"x_axis"===e.name?{...e,name:"xy_x_axis"}:e);const pl=(e,t,o=1)=>({number:{min:e,max:t,step:o,mode:"box",unit_of_measurement:"px"}}),ml={scatter:[...Ti,{name:"against",path:["against"],default:"entity"},{name:"dot_size",path:["dot_size"],default:6},{name:"jitter",path:["jitter"],default:0},...Ms,...hl,...Hi],bubble:[...Ti,{name:"min_size",path:["min_size"],default:6},{name:"max_size",path:["max_size"],default:32},{name:"jitter",path:["jitter"],default:0},...Ms,...hl,...Hi]};function fl(e){return t=>{const o="scatter"===e&&"time"===t.config.against,a=Xi(`${e}|${Fi(t.config)}|${o}`,t.hass,()=>{return[...Pi(t.hass,t.config),..."scatter"===e?[{name:"against",selector:Oi(t.hass,"against",Ys)},{type:"grid",name:"",schema:[{name:"dot_size",selector:pl(Xs[0],Xs[1])},{name:"jitter",selector:pl(Js[0],Js[1])}]}]:[{type:"grid",name:"",schema:[{name:"min_size",selector:pl(Gs[0],Gs[1])},{name:"max_size",selector:pl(Gs[0],Gs[1])}]},{name:"jitter",selector:pl(Js[0],Js[1])}],...o?[]:zs,...(a=t.hass,[{type:"grid",name:"",schema:[{name:"xy_x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:Oi(a,"axis_labels",Po)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]),...Ii(t.hass)];var a});return Ji(t,"chart",a,ml[e])}}const gl=[{name:"dot_color",path:["color"]}],vl=[{name:"dot_color",selector:{text:{}}}];function yl(){return{schema:vl,fields:gl}}const bl={layout:"chart",group:"distribution",height:270,styles:dl,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)" fill-opacity="0.6">
      <circle cx="14" cy="28" r="4" /><circle cx="27" cy="20" r="7" /><circle cx="44" cy="24" r="5" />
      <circle cx="52" cy="11" r="8" /><circle cx="36" cy="33" r="3" />
    </g>`,validate:e=>rl(e,"bubble"),editor:fl("bubble"),entityFields:()=>yl(),disconnect:ul,render:e=>ll(e,"bubble")},_l=["auto","none","hour","day","week","month"],xl=["auto","mean","sum","min","max","first","last","change"],wl={last:7,unit:"day"},$l={hour:1/24,day:1,week:7,month:30};function kl(e){if(e.calendar)return{day:"hour",week:"day",month:"day",year:"month"}[e.calendar];const t=e.last*$l[e.unit];return t<=2?"hour":t<=62?"day":t<=190?"week":"month"}function Ml(e){if(e.config.attribute)return!1;const t=e.stateObj?.attributes?.state_class;return"total_increasing"===t||"total"===t}function zl(e,t){const o={...e,period:e.period??{...wl}};return"none"===e.group_by?delete o.group_by:void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=kl(Ta(o.period))),void 0!==e.aggregate&&"auto"!==e.aggregate||(o.aggregate=!0!==e.range&&t.length>0&&t.every(Ml)?"change":"mean"),o}function Sl(e,t){const o=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t),a=e.map(e=>new Map(e.map(e=>[e.t,e]))),n=new Map;for(const i of e)for(const e of i)void 0!==e.end&&n.set(e.t,e.end);const r={times:[],ends:[],values:e.map(()=>[]),lows:e.map(()=>[]),highs:e.map(()=>[])};return o.forEach((i,s)=>{const l=Math.min(n.get(i)??o[s+1]??t,t);l>i&&(r.times.push(i),r.ends.push(l),e.forEach((e,t)=>{const o=a[t].get(i);r.values[t].push(o?o.v:dr(e,i)),r.lows[t].push(o?.min??null),r.highs[t].push(o?.max??null)}))}),r}function Al(e,t,o,a){const n=t-e,r=.8*n/a,i=a>1?.12*r:0;return[e+.2*n/2+o*r+i/2,r-i]}function El(e,t=!0){let o=t?0:1/0,a=t?0:-1/0;for(const n of e)null!==n&&Number.isFinite(n)&&(o=Math.min(o,n),a=Math.max(a,n));return o===1/0?void 0:[o,a]}const Cl={hour:66,day:52,week:52,month:60};const jl={hour:"hour",day:"day",week:"day",month:"month"};function Nl(e,t,o,a){if("hour"===o)return`${ua(e,a)} – ${da(t,a)}`;const n="day"===o?{weekday:"short",day:"numeric",month:"short"}:"week"===o?{day:"numeric",month:"short"}:{month:"long",year:"numeric"};let r;try{r=new Intl.DateTimeFormat(a?.locale?.language??"en",{...n,timeZone:ia(a)})}catch{r=new Intl.DateTimeFormat("en",n)}return"week"===o?r.formatRange(e,t-1):r.format(e)}const Ll=(e,t)=>Math.round(e/t*1e4)/100+"%",Ol=e=>Math.min(wn,Math.max(0,e));function Tl(e,t,o,a,n,r,i,s){const l=Ol(e.y(n)),c=Ol(e.y(a));return W`<div
    class="col ${i?`cap-${i}`:""} ${n<=0&&"both"!==i?"down":""}"
    data-series=${s}
    style="left:${Ll(t,xn)};width:${Ll(o,xn)};top:${Ll(l,wn)};height:${Ll(c-l,wn)};background:${r}"
  ></div>`}function Fl(e,t,o,a,n,r){return W`<span
    class="point-label col-label ${r?"below":""}"
    style="left:${Ll(t,xn)};top:${Ll(Ol(o),wn)}"
    >${Fn(a,n,e.hass)}</span
  >`}function Pl(e,t,o,a){const n=e.y(a);return n<0||n>wn?W``:W`<div
    class="target-mark"
    style="left:${Ll(t-.1*o,xn)};width:${Ll(1.2*o,xn)};top:${Ll(n,wn)}"
  ></div>`}const Dl=Ti.map(e=>"period_last"===e.name?{...e,default:wl.last}:"period_unit"===e.name?{...e,default:wl.unit}:"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),Ul=[...Dl,{name:"stack",path:["stack"],default:"none"},{name:"color_by",path:["color_by"],default:"series"},{name:"range",path:["range"],default:!1},{name:"column_labels",path:["labels"],default:!1},{name:"rounded",path:["rounded"],default:!0},...Bi,...Hi];const Hl=[{name:"column_color",path:["color"]}],Il=r`
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
`,Bl={layout:"chart",group:"history",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
    ${Il}
  `,thumbnail:()=>Z`
    <path d="M7 36 V22 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M19 36 V12 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M31 36 V18 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M43 36 V8 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M55 36 V26 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M4 36.5 H62" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(e){if(void 0!==e.group_by&&!(e=>_l.includes(e))(e.group_by))throw new Error(`"group_by" must be one of: ${_l.join(", ")}`);if(void 0!==e.aggregate&&!xl.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${xl.join(", ")}`);const t={...e};"auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,Mn(t),qo(e),xr(e),ar(e),cr(e);for(const o of["range","rounded","labels"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);if(void 0!==e.color_by&&"series"!==e.color_by&&"bands"!==e.color_by)throw new Error('"color_by" must be one of: series, bands')},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},a=Xi(`column|${Fi(o)}|${t}`,e.hass,()=>[...Pi(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:Oi(e.hass,"group_by",_l)},...t?[]:[{name:"aggregate",selector:Oi(e.hass,"aggregate",xl)}]]},{type:"grid",name:"",schema:[{name:"stack",selector:Oi(e.hass,"stack",lr)},{name:"color_by",selector:Oi(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"range",selector:{boolean:{}}},{name:"column_labels",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...Wi(e.hass),...Ii(e.hass)]);return Ji({...e,commit:t=>e.commit(function(e){const t=e.period;return t&&"object"==typeof t&&void 0===t.calendar?void 0!==t.last&&void 0!==t.unit?e:{...e,period:{last:wl.last,unit:wl.unit,...t}}:e}(t))},"chart",a,Ul)},entityFields:e=>({schema:Xi("column-entity",e,()=>[{name:"column_color",selector:{text:{}}}]),fields:Hl}),disconnect(e){jn(e),Gn(e),br(e)},render:function(e){const t={...e,raw:zl(e.raw,e.items)},o=t.raw,a=!0===o.range,n=zn(t,Date.now(),{range:a}),r=En(n,t),i=Nn(n,t),s=r===R&&i===R?R:W`${r}${i}`,l=Ln(n,t),c=nr(o);if(l)return rr("over"===c.header?{...c,header:"above"}:c,s,l);const d=a?"none":o.stack??"none",u=n.group,h=Sl(n.series.map(e=>e.points),u?1/0:n.range.end),p=u&&h.ends.length?{...n.range,end:Math.max(n.range.end,...h.ends)}:n.range,m="none"===d?void 0:ur(h.values,d),f=n.series.map(e=>e.entity.target).filter(e=>null!==e);let g;g=m?pr(m):a?El([...h.lows.flat(),...h.highs.flat(),...h.values.flat(),...f],!1):El([...h.values.flat(),...t.config.show.target?f:[]]);let v=o;"percent"===d?v={y_min:g[0]<0?-100:0,y_max:g[1]>0?100:0,...o}:!a&&g&&(v=function(e,t){const o={...t};return void 0===t.y_min&&e[0]>=0&&(o.y_min=0),void 0===t.y_max&&e[1]<=0&&(o.y_max=0),o}(g,o));let y=Jn({...t,raw:v},p,g);const{scales:b}=y,_=h.times.map((e,t)=>(e+h.ends[t])/2),x=new Map(_.map((e,t)=>[e,t]));if(u&&_.length){const e=(w=_.length,$=Xn(t)/Cl[u.unit],Math.max(1,Math.ceil(w/Math.max(1,$)))),o=jl[u.unit],a="day"===u.unit&&_.length<=8?6048e5:n.range.end-n.range.start;y={...y,unit:o,times:_.filter((t,o)=>o%e===0),label:e=>ha(h.times[x.get(e)],o,a,t.hass)}}var w,$;const k=function(e,t,o,a,n,r){const i=e.raw,s=t.series,l=s.length,c=!0===i.range,d="bands"===i.color_by,u=Xn(e)/xn,h=!0===i.labels&&"percent"!==n&&o.times.length*(r?1:l)<=60,p=e.config.show.target&&"percent"!==n,m=Math.min(Math.max(0,a.domain[0]),a.domain[1]),f=(e,t)=>d?Ce(Oe(t,e.entity.bands).color):e.color,g={columns:[],labels:[],targets:[]},v=r?hr(o.values):[];return o.times.forEach((t,n)=>{const i=a.x(t),d=a.x(o.ends[n]);if(r){const[t,l]=Al(i,d,0,1);let c=-1,m=-1;r.forEach((e,t)=>{const o=e[n];o&&o[1]>o[0]&&(c=t),o&&o[1]<o[0]&&(m=t)}),r.forEach((e,r)=>{const i=e[n];if(!i||i[0]===i[1])return;const d=o.values[r][n],u=r===c?"top":r===m?"bottom":"";g.columns.push(Tl(a,t,l,Math.min(...i),Math.max(...i),f(s[r],d),u,r))});const y=v[n];if(h&&null!==y&&l*u>=24){const o=y>=0?Math.max(0,...r.map(e=>e[n]?.[1]??0)):Math.min(0,...r.map(e=>e[n]?.[1]??0)),i=Math.max(...s.map(e=>e.entity.decimals));g.labels.push(Fl(e,t+l/2,a.y(o),y,i,y<0))}const b=s[0].entity.target;return void(p&&null!==b&&g.targets.push(Pl(a,t,l,b)))}s.forEach((t,r)=>{const s=o.values[r][n];if(null===s)return;const[v,y]=Al(i,d,r,l);if(c){const e=o.lows[r][n]??s,i=o.highs[r][n]??s;g.columns.push(Tl(a,v,y,e,i,f(t,s),"both",r)),g.columns.push(W`<div
            class="col-mark"
            style="left:${Ll(v,xn)};width:${Ll(y,xn)};top:${Ll(Ol(a.y(s)),wn)}"
          ></div>`)}else g.columns.push(Tl(a,v,y,Math.min(m,s),Math.max(m,s),f(t,s),s>=m?"top":"bottom",r)),h&&y*u>=24&&g.labels.push(Fl(e,v+y/2,a.y(s),s,t.entity.decimals,s<m));p&&null!==t.entity.target&&g.targets.push(Pl(a,v,y,t.entity.target))})}),g}(t,n,h,b,d,m),M=n.series.map((e,t)=>({...e,points:_.map((e,o)=>({t:e,v:h.values[t][o],min:h.lows[t][o],max:h.highs[t][o]}))})),z={dotY:()=>null,heading:e=>{const o=x.get(e);return void 0===o?ua(e,t.hass):u?Nl(h.times[o],h.ends[o],u.unit,t.hass):ua(h.times[o],t.hass)}},S=(e,o)=>Fn(e,o.entity.decimals,t.hass);if(a&&(z.text=(e,t)=>{if(!t||null===t.v)return"—";const o=t.min??t.v,a=t.max??t.v;return Pn(`${S(o,e)} – ${S(a,e)}`,e.entity.unit)}),m){const e=hr(h.values),o=kr(M),a=Math.max(...M.map(e=>e.entity.decimals));z.footer=n=>Mr(t,e[x.get(n[0]?.p?.t??NaN)??-1]??null,o,a),"percent"===d&&(z.text=(e,t)=>{const o=t?m[e.index][x.get(t.t)??-1]:null;return t&&null!==t.v&&o?`${Pn(S(t.v,e),e.entity.unit)} · ${Math.round(Math.abs(o[1]-o[0]))} %`:"—"})}const A=_r(o),E=A?yr(t.host):void 0,C=void 0===E?void 0:x.get(E),j=void 0===C?R:W`<div
          class="slot-hover"
          style="left:${Ll(b.x(h.times[C]),xn)};width:${Ll(b.x(h.ends[C])-b.x(h.times[C]),xn)}"
        ></div>`,N=zt(t.hass,"chart_aria",{style:zt(t.hass,"editor_style_column"),names:n.series.map(e=>e.entity.name).join(", ")}),L=!1===o.rounded?0:4;return rr(c,s,er({axes:y,ctx:t,content:Z``,label:N,overlay:W`<div class="columns" style="--r:${L}px">${j}${k.columns}${k.targets}</div>
        <div class="point-labels">${k.labels}</div>
        ${"over"===c.header?ir(s):R}
        ${A?zr(t,M,b,E,Xn(t),z):R}`,hover:A?wr(t,p,M.map(e=>e.points)):void 0}))}},Wl={from:0,to:1};const Zl=(e,t,o)=>Math.min(o,Math.max(t,e));function ql(e,t){const o=Zl(t,0,1);let a=Zl(e.to-e.from,o,1);Number.isFinite(a)||(a=1);const n=Zl(Number.isFinite(e.from)?e.from:0,0,1-a);return{from:n,to:n+a}}function Rl(e){return e.from>1e-9||e.to<1-1e-9}function Vl(e,t,o,a){const n=e.to-e.from,r=e.from+Zl(t,0,1)*n,i=Zl(n/o,a,1),s=r-Zl(t,0,1)*i;return ql({from:s,to:s+i},a)}function Yl(e,t){const o=e.to-e.from,a=Zl(e.from+t,0,1-o);return{from:a,to:a+o}}function Gl(e,t,o,a){const n=e.to-e.from,r=e.from+Zl(Math.min(t,o),0,1)*n,i=e.from+Zl(Math.max(t,o),0,1)*n;if(i-r>=a)return{from:r,to:i};const s=(r+i)/2;return ql({from:s-a/2,to:s+a/2},a)}function Xl(e,t){const o=e.end-e.start;return{start:e.start+t.from*o,end:e.start+t.to*o}}function Jl(e,t){if(0===e.length)return e;let o=0,a=e.length;for(;o<a;){const n=o+a>>1;(e[n].end??e[n].t)<t.start?o=n+1:a=n}const n=Math.max(0,o-1);let r=o;for(;r<e.length&&e[r].t<=t.end;)r++;const i=e.slice(n,Math.min(e.length,r+1));return i.length===e.length?e:i}const Kl=new WeakMap;function Ql(e,t){const o={zoom:!0===(a=e.raw).zoom,overview:!0===a.overview};var a;const n=t.range.end-t.range.start,r=n>0?Math.min(1,function(e){return e.group?2*{hour:36e5,day:864e5,week:6048e5,month:2592e6}[e.group.unit]:3e5}(t)/n):1,i=`${JSON.stringify(t.period)}|${t.back}|${t.group?.unit??""}|${t.source}`,s=function(e,t){let o=Kl.get(e);return o&&o.key===t||(o={key:t,window:Wl,pointers:new Map},Kl.set(e,o)),o}(e.host,i);o.zoom||o.overview||(s.window=Wl);const l=ql(s.window,r),c=t=>{const o=ql(t,r);o.from===s.window.from&&o.to===s.window.to||(s.window=o,e.requestUpdate())};return{options:o,window:l,zoomed:Rl(l),range:Xl(t.range,l),minSpan:r,current:()=>ql(s.window,r),set:c,reset:()=>c(Wl)}}const ec=e=>{const t=e.currentTarget.getBoundingClientRect();return{f:t.width>0?Zl((e.clientX-t.left)/t.width,0,1):0,width:t.width}};function tc(e){try{e.currentTarget.setPointerCapture?.(e.pointerId)}catch{}}const oc=e=>e?.leave({pointerType:"mouse"});function ac(e,t,o){const a=Kl.get(e.host),n=()=>{a.gesture=void 0,a.select&&(a.select=void 0,e.requestUpdate())};return{down(e){const{f:n,width:r}=ec(e);if(a.pointers.set(e.pointerId,n),2===a.pointers.size){const[e,n]=[...a.pointers.values()];return a.gesture={kind:"pinch",w0:t.current(),start:e<=n?[e,n]:[n,e]},a.select=void 0,void oc(o)}if(!(a.pointers.size>2)){if("mouse"===e.pointerType&&0===e.button){const o=t.current();a.gesture={kind:Rl(o)?"pan":"select",x0:n,w0:o,moved:!1,px:r},tc(e)}o?.move(e)}},move(n){if(!a.pointers.has(n.pointerId))return void o?.move(n);const{f:r}=ec(n);a.pointers.set(n.pointerId,r);const i=a.gesture;if("pinch"===i?.kind){if(a.pointers.size<2)return;const[e,o]=[...a.pointers.values()];return void t.set(function(e,t,o,a){const n=e.to-e.from,r=e.from+t[0]*n,i=e.from+t[1]*n,s=o[1]-o[0];if(Math.abs(s)<.02||Math.abs(t[1]-t[0])<.02)return Yl(e,-((o[0]+o[1])/2-(t[0]+t[1])/2)*n);const l=Zl((i-r)/s,a,1),c=r-o[0]*l;return ql({from:c,to:c+l},a)}(i.w0,i.start,e<=o?[e,o]:[o,e],t.minSpan))}if(i&&("pan"===i.kind||"select"===i.kind))return!i.moved&&Math.abs(r-i.x0)*i.px<4?void o?.move(n):(i.moved||oc(o),i.moved=!0,void("pan"===i.kind?t.set(Yl(i.w0,-(r-i.x0)*(i.w0.to-i.w0.from))):(a.select=[i.x0,r],e.requestUpdate())));o?.move(n)},up(e){const{f:o,width:r}=ec(e),i=a.gesture;if(a.pointers.delete(e.pointerId),"pinch"===i?.kind)return void(0===a.pointers.size&&(a.gesture=void 0));"select"===i?.kind&&i.moved&&t.set(Gl(i.w0,i.x0,o,t.minSpan));const s=!i||!("moved"in i)||!i.moved;if(n(),"mouse"!==e.pointerType&&s){const n=e.timeStamp||Date.now(),i=a.lastTap;i&&n-i.at<300&&Math.abs(o-i.x)*r<30?(a.lastTap=void 0,t.reset()):a.lastTap={at:n,x:o}}},cancel(e){a.pointers.delete(e.pointerId),"pinch"===a.gesture?.kind&&a.pointers.size>=2||(n(),o?.leave(e))},leave(e){a.gesture&&"mouse"===e.pointerType||(a.pointers.delete(e.pointerId),o?.leave(e))},wheel(e){const{f:o}=ec(e);if(e.ctrlKey||e.metaKey){e.preventDefault();const a=1===e.deltaMode?16*e.deltaY:e.deltaY;return void t.set(Vl(t.current(),o,Math.exp(-Zl(a,-100,100)/200),t.minSpan))}const a=e.shiftKey&&0===e.deltaX?e.deltaY:e.deltaX,n=t.current();if(Rl(n)&&Math.abs(a)>Math.abs(e.shiftKey?0:e.deltaY)){e.preventDefault();const{width:o}=ec(e);t.set(Yl(n,a/Math.max(o,1)*(n.to-n.from)))}},dblclick(){t.reset()}}}function nc(e,t){const o=Kl.get(e.host),a=o?.select,n=a?W`<div
        class="zoom-select"
        style="left:${100*Math.min(...a)}%;width:${100*Math.abs(a[1]-a[0])}%"
      ></div>`:R,r=t.zoomed?W`<button
        class="zoom-reset"
        title=${zt(e.hass,"zoom_reset")}
        @pointerdown=${e=>e.stopPropagation()}
        @click=${e=>{e.stopPropagation(),t.reset()}}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${rc}></path></svg>
        <span>${zt(e.hass,"zoom_reset")}</span>
      </button>`:R;return n===R&&r===R?R:W`${n}${r}`}const rc="M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z";function ic(e,t){const o=Lo(e.map(e=>e.points));if(!o)return Z``;const[a,n]=Oo(o),r=To([t.start,t.end],[0,xn]),i=To([a,n],[38,2]);return Z`${e.map(e=>{const t=_n(pa(e.points,200)).map(e=>1===e.length?`M${r(e[0].t).toFixed(1)},${i(e[0].v).toFixed(1)}h0.5`:`M${e.map(e=>`${r(e.t).toFixed(1)},${i(e.v).toFixed(1)}`).join("L")}`).join("");return Z`<path d=${t} fill="none" stroke=${e.color}></path>`})}`}function sc(e,t,o,a){const n=Kl.get(e.host),r=t.window,i=e=>ec(e),s=Xl(o,r),l=zt(e.hass,"zoom_window",{from:ua(s.start,e.hass),to:ua(s.end,e.hass)}),c=e=>Math.round(1e4*e)/100+"%";return W`<div
    class="overview ${t.zoomed?"zoomed":""}"
    @pointerdown=${e=>{if(e.button>0)return;e.stopPropagation();const{f:o,width:a}=i(e),r=t.current(),s=10/Math.max(a,1);let l="new";Rl(r)&&(Math.abs(o-r.from)<=s?l="left":Math.abs(o-r.to)<=s?l="right":o>r.from&&o<r.to&&(l="move")),n.gesture={kind:l,f0:o,w0:r,moved:!1,px:a},tc(e)}}
    @pointermove=${e=>{const o=n.gesture;if(!o||!("f0"in o))return;const{f:a}=i(e);if(!o.moved&&Math.abs(a-o.f0)*o.px<4)return;o.moved=!0;const{w0:r}=o;"move"===o.kind?t.set(Yl(r,a-o.f0)):"left"===o.kind?t.set({from:Math.min(a,r.to-t.minSpan),to:r.to}):"right"===o.kind?t.set({from:r.from,to:Math.max(a,r.from+t.minSpan)}):t.set(Gl(Wl,o.f0,a,t.minSpan))}}
    @pointerup=${()=>{const e=n.gesture;if(e&&"f0"in e&&(n.gesture=void 0,!e.moved&&"new"===e.kind&&Rl(e.w0))){const o=e.w0.to-e.w0.from;t.set({from:e.f0-o/2,to:e.f0+o/2})}}}
    @pointercancel=${()=>n.gesture=void 0}
    @dblclick=${e=>{e.stopPropagation(),t.reset()}}
  >
    <svg class="overview-lines" viewBox="0 0 ${xn} ${40}" preserveAspectRatio="none" aria-hidden="true">
      ${a}
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
      @keydown=${e=>{const o=t.current(),a=o.to-o.from,n=.5,r={ArrowLeft:()=>Yl(o,-a/4),ArrowRight:()=>Yl(o,a/4),ArrowUp:()=>Vl(o,n,1.5,t.minSpan),ArrowDown:()=>Vl(o,n,1/1.5,t.minSpan),"+":()=>Vl(o,n,1.5,t.minSpan),"=":()=>Vl(o,n,1.5,t.minSpan),"-":()=>Vl(o,n,1/1.5,t.minSpan),Home:()=>Yl(o,-1),End:()=>Yl(o,1),Escape:()=>Wl}[e.key];r&&(e.preventDefault(),e.stopPropagation(),t.set(r()))}}
    >
      <span class="overview-handle left"></span><span class="overview-handle right"></span>
    </div>
  </div>`}const lc=r`
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
`,cc="chartdeck-sync";const dc=new WeakMap;function uc(e,t){const o=dc.get(e);o&&window.dispatchEvent(new CustomEvent(cc,{detail:{group:o.group,source:e,message:t}}))}function hc(e){const t=dc.get(e);t&&window.removeEventListener(cc,t.listener),dc.delete(e)}function pc(e,t,o){const a="string"==typeof(n=e.raw).sync&&""!==n.sync.trim()?n.sync.trim():void 0;var n;let r=dc.get(e.host);if(!a)return void(r&&hc(e.host));if(!r||r.group!==a){r&&hc(e.host);const t={group:a,handlers:new Map,ctx:e,listener:()=>{}};t.listener=e=>function(e,t){if(!t||t.group!==e.group||t.source===e.ctx.host)return;const o=t.message;if("hover"===o.type){if(o.t===e.remote)return;e.remote=o.t,e.ctx.requestUpdate()}else if("period"===o.type){const t={period:JSON.parse(o.period)};if(o.period!==e.period||!t.period.navigate||Ua(e.ctx.host,t.period)===o.steps)return;Ha(e.ctx.host,t.period,o.steps),e.steps=o.steps,e.ctx.requestUpdate()}e.handlers.get(o.type)?.(o)}(t,e.detail),window.addEventListener(cc,t.listener),dc.set(e.host,t),r=t}r.ctx=e,o!==r.sent&&(r.sent=o,uc(e.host,{type:"hover",t:o}));const i=(e=>JSON.stringify(e.period))(t),s=t.period.navigate?Ua(e.host,t.period):0;return r.period===i&&r.steps!==s&&uc(e.host,{type:"period",period:i,steps:s}),r.period=i,r.steps=s,void 0===o?r.remote:void 0}const mc=["series","bands"];function fc(e,t,o){const a=e=>{const t=(wn-o.y(e))/wn;return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0},n=[];return t.forEach((e,o)=>{const r=Number.isFinite(e.from)?a(e.from):0,i=o+1<t.length?a(t[o+1].from):1,s=Ce(e.color);n.push(Z`<stop offset=${r} stop-color=${s}></stop><stop offset=${i} stop-color=${s}></stop>`)}),Z`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${wn} y2="0">
    ${n}
  </linearGradient>`}function gc(e,t,o,a,n){const r=Ft(e.entity.config,n),i=pa(e.points,500),s=_n(i).map(o=>bn(o.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join(""),l=r.dots?i.filter(e=>null!==e.v&&e.t!==a.start&&e.t!==a.end):[],c=l.length>0&&l.length<=200?Z`<path
          class="dots"
          d=${Dt(l.map(e=>[t.x(e.t),t.y(e.v)]))}
          fill="none"
          stroke=${o}
          style="stroke-width:${Ut(r.width)}px"
        ></path>`:R;return Z`<g class="series" data-series=${e.index}>
    <path
      class="line ${e.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${o}
      style="stroke-width:${r.width}px"
    ></path>
    ${c}
  </g>`}function vc(e,t,o,a,n,r,i){const{range:s}=e;return Pr(t.map(e=>({points:e.points.filter(e=>e.t>=o.start&&e.t<=o.end),decimals:e.entity.decimals,color:e.color})),n,{at:e=>[a.x(e.t)/xn,a.y(e.v)/wn],width:Xn(i),height:r?96:162,skip:t=>void 0===e.group&&(t.t===s.start||t.t===s.end)},i.hass)}function yc(e,t){const o="outside"===t.labels;return(e?110:180)-(o&&t.x?e?14:18:0)-(o&&t.y?6:0)}function bc(e,t,o){const a=e.series.reduce((e,t)=>e+t.entity.name.length+t.entity.display.length+6,0);return{l:0,t:0,r:Math.min(o,8*a),b:t?24:34}}const _c={layout:"chart",group:"history",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
    ${lc}
    ${zi}
    ${Dr}
    ${Gr}
    ${ni}
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
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(e){if(Mn(e),qo(e),xr(e),Bt(e),ar(e),function(e){for(const t of["zoom","overview"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`)}(e),mi(e),function(e){const t=e;if(void 0!==t.labels&&"boolean"!=typeof t.labels)throw new Error('"labels" must be true or false');if(void 0!==t.labels_show&&!Ar.includes(t.labels_show))throw new Error(`"labels_show" must be one of: ${Ar.join(", ")}`);if(void 0!==t.labels_position&&!Er.includes(t.labels_position))throw new Error(`"labels_position" must be one of: ${Er.join(", ")}`);if(void 0!==t.labels_overlap&&"boolean"!=typeof t.labels_overlap)throw new Error('"labels_overlap" must be true or false')}(e),function(e){const t=e.extremes;if(void 0!==t){if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"extremes" must have "min", "max" (true or false) and "average"');const e=t;for(const t of["min","max"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"extremes.${t}" must be true or false`);if(void 0!==e.average&&!Ur.includes(e.average))throw new Error(`"extremes.average" must be one of: ${Ur.join(", ")}`)}for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o.extremes;if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"extremes" of ${o.entity} must be true or false`)}}(e),function(e){if(void 0!==e.sync&&("string"!=typeof e.sync||""===e.sync.trim()))throw new Error('"sync" must be a group name')}(e),function(e){if(void 0!==e.multiples&&"boolean"!=typeof e.multiples)throw new Error('"multiples" must be true or false');if(void 0!==e.multiples_scale&&!oi.includes(e.multiples_scale))throw new Error(`"multiples_scale" must be one of: ${oi.join(", ")}`);const t=e.multiples_columns;if(void 0!==t&&!(Number.isInteger(t)&&t>=1&&t<=6))throw new Error('"multiples_columns" must be a whole number from 1 to 6')}(e),void 0!==e.color_by&&!mc.includes(e.color_by))throw new Error(`"color_by" must be one of: ${mc.join(", ")}`)},editor:function(e){const t=Xi(`line|${Fi(e.config)}|${o=e.config,!0===o?.labels?"labels":""}|${(e=>!0===e?.multiples?"multiples":"")(e.config)}`,e.hass,()=>{return[...Pi(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:Oi(e.hass,"curve",gn)},{name:"color_by",selector:Oi(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:ao},{name:"dots",selector:{boolean:{}}}]},...Ri(e.hass,e.config),...Wi(e.hass),{name:"y_scale",selector:Oi(e.hass,"y_scale",Fo)},...Zi,...qi,...(t=e.hass,[{type:"grid",name:"",schema:[{name:"extremes_max",selector:{boolean:{}}},{name:"extremes_min",selector:{boolean:{}}}]},{name:"extremes_average",selector:{select:{mode:"dropdown",options:Ur.map(e=>({value:e,label:zt(t,`editor_extremes_average_${e}`)}))}}}]),...Vi,...Ii(e.hass),...Yi(e.hass,e.config)];var t});var o;return W`${Ji(e,"chart",t,Ki)}${Li(e)}`},entityFields:(e,t)=>{const o=po(e),a=ro(!0===t.dots);return Zr(Wr(t))?{schema:Qr(o,e),fields:ti(a)}:{schema:o,fields:a}},watch:function(e){const t=new Set;for(const o of fi(e))for(const e of[o.value,o.from,o.to,"state"===o.type?o.entity:void 0])ci(e)&&t.add(e.trim());return[...t]},disconnect(e){jn(e),Gn(e),br(e),function(e){Kl.delete(e)}(e),function(e){const t=xi.get(e);t&&t.generation++,xi.delete(e)}(e),hc(e)},render(e){const t=zn(e),o=yr(e.host),a=pc(e,t,o),n=En(t,e),r=Nn(t,e),i=n===R&&r===R?R:W`${n}${r}`,s=Ln(t,e),l=nr(e.raw);if(s)return rr("over"===l.header?{...l,header:"above"}:l,i,s);const c=function(e){if(!0===e.multiples)return{scale:e.multiples_scale??"auto",columns:e.multiples_columns}}(e.raw);if(c){const r="log"===e.raw.y_scale?{...t,series:t.series.map(e=>({...e,points:Wn(e.points)}))}:t;return rr({...l,header:"above"},n,ai(e,r,c,o??a,(t,n,i)=>function(e,t,o,a,n,r,i=R,s=yr(e.host)){const{scales:l}=a,c=Cr(e.raw),d=_r(e.raw),u="bands"===e.raw.color_by,h=u?Z`${o.map(e=>fc(`cd-bands-${e.index}${r}`,e.entity.bands,l))}`:R,p=Pt(o,t=>Ft(t.entity.config,e.raw).onTop),m=Z`${p.map(o=>gc(o,l,u?`url(#cd-bands-${o.index}${r})`:o.color,t.range,e.raw))}`,f=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_line"),names:o.map(e=>e.entity.name).join(", ")});return er({axes:a,ctx:e,content:m,label:f,defs:h,overlay:W`${i} ${c?vc(t,o,t.range,l,c,!0,e):R}
    ${d?zr(e,o,l,s,n):R}`,hover:d?wr(e,t.range,o.map(e=>e.points)):void 0})}(e,r,[t],n,i,`-${t.index}`,R,o??a)))}const d=Ql(e,t),u=d.range,h=d.zoomed?t.series.map(e=>({...e,points:Jl(e.points,u)})):t.series,p="log"===e.raw.y_scale,m=p?h.map(e=>({...e,points:Wn(e.points)})):h,f=(g=e.raw,v=e.hass,y=vi(t),fi(g).filter(e=>"line"===e.type).map(e=>gi(e.value,v,y)).filter(li)).filter(e=>!p||e>0).map(e=>({t:u.start,v:e}));var g,v,y;const b=Lo([...m.map(e=>e.points),f]);if(p&&!b){const t=W`<div class="chart-message">${zt(e.hass,"chart_log_nothing")}</div>`;return rr("over"===l.header?{...l,header:"above"}:l,i,t)}const _=Jn(e,u,b),{scales:x}=_,w=_r(e.raw)&&!function(e){const t=Kl.get(e)?.gesture;return!!t&&("pinch"===t.kind||"moved"in t&&t.moved)}(e.host),$="bands"===e.raw.color_by,k=$?Z`${h.map(e=>fc(`cd-bands-${e.index}`,e.entity.bands,x))}`:R,M=Pt(m,t=>Ft(t.entity.config,e.raw).onTop),z=Z`${M.map(o=>gc(o,x,$?`url(#cd-bands-${o.index})`:o.color,t.range,e.raw))}`,S=_r(e.raw)?wr(e,u,h.map(e=>e.points)):void 0,A=Mi(e,t,x,Xn(e)),E=Cr(e.raw),C=Xn(e),j=Yr({ctx:e,series:h,scales:x,range:u,group:t.group,timeWeighted:"history"===t.source&&void 0===t.group,width:C,height:yc(l.compact,_.options),until:Math.min(u.end,Date.now()),obstacles:"over"===l.header?[bc(t,l.compact,C)]:[]}),N=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_line"),names:t.series.map(e=>e.entity.name).join(", ")});return rr(l,i,er({axes:_,ctx:e,content:Z`${A.behind}${j.lines}${z}${A.front}`,label:N,defs:k,overlay:W`${"over"===l.header?ir(i):R}
        ${E?vc(t,m,u,x,E,l.compact,e):R}
        ${nc(e,d)} ${A.overlay} ${j.overlay}
        ${w?zr(e,h,x,o??a,Xn(e)):R}`,hover:S,gestures:d.options.zoom?ac(e,d,S):void 0,classes:d.options.zoom?"zoomable "+(d.zoomed?"zoomed":""):"",below:d.options.overview?sc(e,d,t.range,ic(t.series,t.range)):R}))}},xc=["line","column","area"],wc=["auto","left","right"],$c=e=>e.config,kc=e=>$c(e).type??"line";function Mc(e,t){const o={...e},a=t.some(e=>"column"===kc(e));return"none"!==e.group_by&&(void 0!==e.group_by&&"auto"!==e.group_by||a)?void 0!==e.group_by&&"auto"!==e.group_by||(o.group_by=kl(Ta(e.period))):delete o.group_by,"auto"===e.aggregate&&delete o.aggregate,o}function zc(e,t){const o=e.flatMap(e=>e.points.map(e=>e.v));return El(o,t.includes("column"))}const Sc=[...Ti.map(e=>"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:Lt},{name:"dots",path:["dots"],default:!1},{name:"rounded",path:["rounded"],default:!0},...Bi,...Hi];const Ac=[{name:"series_type",path:["type"],default:"line"},{name:"series_axis",path:["y_axis"],default:"auto"},{name:"series_color",path:["color"]},{name:"series_aggregate",path:["aggregate"],default:"auto"},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"negative_color",path:["negative_color"]}],Ec={layout:"chart",group:"history",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
    ${ss}
    ${Il}
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
      stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){if(void 0!==e.group_by&&!_l.includes(e.group_by))throw new Error(`"group_by" must be one of: ${_l.join(", ")}`);if(void 0!==e.aggregate&&!xl.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${xl.join(", ")}`);const t={...e};if("auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,Mn(t),nn(t),qo(e),xr(e),Bt(e),ar(e),void 0!==e.rounded&&"boolean"!=typeof e.rounded)throw new Error('"rounded" must be true or false');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.type&&!xc.includes(e.type))throw new Error(`"type" of ${o.entity} must be one of: ${xc.join(", ")}`);if(void 0!==e.y_axis&&"left"!==e.y_axis&&"right"!==e.y_axis)throw new Error(`"y_axis" of ${o.entity} must be one of: left, right`);if(void 0!==e.aggregate&&!an.includes(e.aggregate))throw new Error(`"aggregate" of ${o.entity} must be one of: ${an.join(", ")}`)}},editor:function(e){const t="none"===e.config.group_by,o={...e.config,group_by:void 0},a=Xi(`combined|${Fi(o)}|${t}`,e.hass,()=>[...Pi(e.hass,o).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:Oi(e.hass,"group_by",_l)},...t?[]:[{name:"aggregate",selector:Oi(e.hass,"aggregate",xl)}]]},{name:"curve",selector:Oi(e.hass,"curve",gn)},{type:"grid",name:"",schema:[{name:"line_width",selector:ao},{name:"dots",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...Wi(e.hass),...Ii(e.hass)]);return Ji(e,"chart",a,Sc)},entityFields:e=>({schema:Xi("combined-entity",e,()=>[{type:"grid",name:"",schema:[{name:"series_type",selector:Oi(e,"series_type",xc)},{name:"series_axis",selector:Oi(e,"series_axis",wc)},{name:"series_color",selector:{text:{}}},{name:"series_aggregate",selector:Oi(e,"series_aggregate",["auto",...an])}]},{type:"grid",name:"",schema:[{name:"curve",selector:Oi(e,"curve",gn)},{name:"line_width",selector:ao},{name:"dash",selector:{boolean:{}}},{name:"negative_color",selector:{text:{}}}]}]),fields:Ac}),disconnect(e){jn(e),Gn(e),br(e)},render:function(e){const t={...e,raw:Mc(e.raw,e.items)},o=t.raw,a=zn(t,Date.now(),{aggregate:t=>function(e,t){const o=t.aggregate;return $c(e).aggregate??(o&&"auto"!==o?o:Ml(e)?"change":"mean")}(t,e.raw)}),n=En(a,t),r=Nn(a,t),i=n===R&&r===R?R:W`${n}${r}`,s=Ln(a,t),l=nr(o);if(s)return rr("over"===l.header?{...l,header:"above"}:l,i,s);const c=a.series.map(e=>kc(e.entity)),d=function(e){const t=e[0]?.unit,o=e.map(e=>$c(e).y_axis??(e.unit===t?"left":"right"));return o.includes("left")?o:o.map(()=>"left")}(a.series.map(e=>e.entity)),u=a.group,h=a.series.map(e=>u?{...e,points:e.points.map(e=>({...e,t:void 0!==e.end?(e.t+e.end)/2:e.t}))}:e),p=u?Math.max(a.range.end,...a.series.flatMap(e=>e.points.map(e=>e.end??0))):0,m=u?{...a.range,end:p}:a.range,f=e=>h.filter((t,o)=>d[o]===e),g=e=>c.filter((t,o)=>d[o]===e),v=zc(f("left"),g("left"));let y=o;v&&g("left").includes("column")?y={...o,y_min:o.y_min??(v[0]>=0?0:void 0),y_max:o.y_max??(v[1]<=0?0:void 0)}:g("left").includes("area")&&(y=Qi(v,o));const b=Jn({...t,raw:y},m,v),_=b.scales,x=f("right"),w=zc(x,g("right")),$={};w&&(g("right").includes("column")||g("right").includes("area"))&&(w[0]>=0&&w[0]<=w[1]/2&&($.min=0),w[1]<=0&&w[1]>=w[0]/2&&($.max=0));const k=x.length?Xo(w,$,4):void 0,M=k?{x:_.x,y:To(k.domain,[wn,0]),domain:k.domain}:void 0,z=e=>"right"===d[e.index]&&M?M:_,S=h.filter(e=>"area"===c[e.index]).map(e=>as(e,e.points,z(e),o,{range:m})),A=h.filter(e=>"line"===c[e.index]).map(e=>gc({...e,points:e.points},z(e),e.color,m,o)),E=h.filter(e=>"column"===c[e.index]),C=Sl(a.series.filter(e=>"column"===c[e.index]).map(e=>e.points),u?1/0:a.range.end),j=!1===o.rounded?0:4,N=[];C.times.forEach((e,t)=>{const o=_.x(e),a=_.x(C.ends[t]);E.forEach((e,n)=>{const r=C.values[n][t];if(null===r)return;const i=z(e),s=Math.min(Math.max(0,i.domain[0]),i.domain[1]),[l,c]=Al(o,a,n,E.length);N.push(Tl(i,l,c,Math.min(s,r),Math.max(s,r),e.color,r>=s?"top":"bottom",e.index))})});const L=C.times.map((e,t)=>(e+C.ends[t])/2),O=h.map(e=>{if("column"!==c[e.index]||u)return e;const t=E.indexOf(e);return{...e,points:L.map((e,o)=>({t:e,v:C.values[t][o]}))}}),T=new Map;for(const D of a.series)for(const e of D.points)void 0!==e.end&&T.set((e.t+e.end)/2,[e.t,e.end]);const F=_r(o),P=zt(t.hass,"chart_aria",{style:zt(t.hass,"editor_style_combined"),names:a.series.map(e=>e.entity.name).join(", ")});return rr(l,i,er({axes:b,ctx:t,right:k&&M?{value:k,y:M.y}:void 0,content:Z`${S.map(e=>e.body)}`,defs:Z`${S.map(e=>e.defs)}`,label:P,overlay:W`<div class="columns" style="--r:${j}px">${N}</div>
        <svg class="plot lines-over" viewBox="0 0 ${xn} ${wn}" preserveAspectRatio="none" aria-hidden="true">
          ${A}
        </svg>
        ${"over"===l.header?ir(i):R}
        ${F?zr(t,O,_,yr(t.host),Xn(t),{dotY:(e,t)=>"column"===c[e.index]||null===t.v?null:z(e).y(t.v),heading:e=>{const o=T.get(e);return o&&u?Nl(o[0],o[1],u.unit,t.hass):ua(e,t.hass)}}):R}`,hover:F?wr(t,m,O.map(e=>e.points)):void 0}))}};function Cc(e,t){const o=Math.round(12+88*t);return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const jc=Math.sqrt(3)/2,Nc=["hours","calendar"],Lc=["scale","bands"],Oc=["square","rounded","hexagon"],Tc=10,Fc=1e4,Pc={hours:{last:4,unit:"week",source:"history"},calendar:{last:12,unit:"month",source:"statistics"}},Dc=e=>"number"==typeof e&&Number.isFinite(e);function Uc(e){return e.grid??"hours"}function Hc(e){const t=Uc(e),o=Pc[t],a=e.period??{};return{...e,group_by:"hours"===t?"hour":"day",source:e.source??o.source,period:void 0!==a.calendar?a:{...a,last:a.last??o.last,unit:a.unit??o.unit}}}const Ic=new Map;function Bc(e,t,o){const a=e?.locale?.language??e?.language??"en",n=`${a}|${t}|${JSON.stringify(o)}`;let r=Ic.get(n);if(!r){try{r=new Intl.DateTimeFormat(a,{...o,timeZone:t})}catch{r=new Intl.DateTimeFormat("en",{...o,timeZone:"UTC"})}Ic.set(n,r)}return r}function Wc(e,t){return Bc(t,"UTC",{weekday:"short"}).format(Date.UTC(2024,0,e))}function Zc(e,t,o=!1){return Bc(t,"UTC",{hour:"numeric",...o?{minute:"2-digit"}:{},hour12:sa(t)}).format(Date.UTC(2024,0,1,e))}function qc(e,t,o,a,n="cell"){const[r,i]=e.centre(t.col,t.row),s=a?`fill:${a}`:"",l=a?"":"empty";if("hexagon"===o)return Z`<path class="${n} ${l}" d=${function(e,t,o){const a=o/Math.sqrt(3),n=[0,1,2,3,4,5].map(o=>{const n=(60*o-90)*Math.PI/180;return`${Math.round(100*(e+a*Math.cos(n)))/100},${Math.round(100*(t+a*Math.sin(n)))/100}`});return`M${n.join("L")}Z`}(r,i,8.8)} style=${s}></path>`;const c=8.8;return Z`<rect class="${n} ${l}" x=${r-4.4} y=${i-4.4} width=${c} height=${c}
    rx=${"rounded"===o?2:.4} style=${s}></rect>`}const Rc=e=>Math.round(1e4*e)/100+"%";function Vc(e,t,o,a){const{zone:n}=t,r=e=>(n.firstDay-1+e)%7+1,i=function(e,t){const o=new Array(168).fill(0),a=new Array(168).fill(0);for(const n of e){if(null===n.v)continue;const e=ba(n.t,t.timeZone),r=(e.weekday-t.firstDay+7)%7*24+e.hour;o[r]+=n.v,a[r]+=1}return o.map((e,t)=>({row:Math.floor(t/24),hour:t%24,v:a[t]?e/a[t]:null,count:a[t]}))}(e.points,n).map(e=>({col:e.hour,row:e.row,v:e.v,count:e.count,title:()=>`${Wc(r(e.row),o)} ${Zc(e.hour,o,!0)} – ${Zc((e.hour+1)%24,o,!0)}`})),s=a?3:6;return{cells:i,cols:24,rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:Wc(r(e),o)})),colLabels:Array.from({length:24/s},(e,t)=>({col:t*s,text:Zc(t*s,o)}))}}function Yc(e,t,o){const{zone:a}=t,n=function(e,t){if(0===e.length)return{cells:[],weeks:0,months:[]};const o=e=>{const o=ba(e,t.timeZone);return Math.round(Date.UTC(o.year,o.month-1,o.day)/864e5)},a=o($a("week",e[0].t,t)),n=[],r=[];let i=-1;for(const s of e){const e=ba(s.t,t.timeZone),l=Math.floor((o(s.t)-a)/7);n.push({t:s.t,col:l,row:(e.weekday-t.firstDay+7)%7,v:s.v});const c=12*e.year+e.month;c!==i&&(-1!==i&&1!==e.day||r.push({col:l,t:s.t}),i=c)}return r.length>1&&r[1].col-r[0].col<3&&r.shift(),{cells:n,weeks:n[n.length-1].col+1,months:r}}(e.points,a),r=Bc(o,a.timeZone,{weekday:"short",day:"numeric",month:"short",year:"numeric"}),i=Bc(o,a.timeZone,{month:"short"}),s=e=>(a.firstDay-1+e)%7+1;return{cells:n.cells.map(e=>({col:e.col,row:e.row,v:e.v,title:()=>r.format(e.t)})),cols:Math.max(1,n.weeks),rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:Wc(s(e),o)})),colLabels:n.months.map(e=>({col:e.col,text:i.format(e.t)}))}}function Gc(e,t,o,a){const n=o.raw,r=Uc(o.raw),i=n.cell_shape??"rounded",s="bands"===n.color_by,l=Yn(o),c="hours"===r?Vc(e,t,o.hass,l>=400):Yc(e,t,o.hass),d=function(e,t,o){if("hexagon"===o){const o=Tc/Math.sqrt(3),a=Tc*jc,n=e*Tc+5,r=(t-1)*a+2*o;return{width:n,height:r,centre:(e,t)=>[e*Tc+5+t%2*5,o+t*a],at(i,s){const l=Math.min(t-1,Math.max(0,Math.round((s*r-o)/a))),c=Math.floor((i*n-l%2*5)/Tc);return[Math.min(e-1,Math.max(0,c)),l]}}}return{width:e*Tc,height:t*Tc,centre:(e,t)=>[e*Tc+5,t*Tc+5],at:(o,a)=>[Math.min(e-1,Math.floor(o*e)),Math.min(t-1,Math.floor(a*t))]}}(c.cols,c.rows,i),u=Math.max(0,l-72)/d.width*Tc,h=Math.ceil(13/Math.max(1,u*("hexagon"===i?jc:1))),p=c.rowLabels.filter(e=>e.row%h===0);let m=-1/0;const f=c.colLabels.filter(e=>!((e.col-m)*u<32)&&(m=e.col,!0)),g=function(e,t={}){const o=e.filter(e=>null!==e);if(0===o.length&&(void 0===t.min||void 0===t.max))return;let a=t.min??Math.min(...o),n=t.max??Math.max(...o);return n<=a&&(void 0===t.max?n=a+1:a=n-1),[a,n]}(c.cells.map(e=>e.v),{min:Dc(n.color_min)?n.color_min:void 0,max:Dc(n.color_max)?n.color_max:void 0}),v=t=>{if(null!==t)return s?Ce(Oe(t,e.entity.bands).color):g?Cc(e.color,function(e,[t,o]){return Math.min(1,Math.max(0,(e-t)/(o-t)))}(t,g)):e.color},y=js(o.host),b=void 0!==y&&Math.floor(y/Fc)===e.index?y%Fc:void 0,_=new Map(c.cells.map((e,t)=>[8*e.col+e.row,t])),x=_r(o.raw)?Ls(o,(t,o)=>{const[a,n]=d.at(t,o),r=_.get(8*a+n);return void 0===r?void 0:e.index*Fc+r}):void 0,w=void 0===b?void 0:c.cells[b];let $=R;if(w){const[t,a]=d.centre(w.col,w.row),n=null===w.v?zt(o.hass,"heatmap_empty"):Pn(Fn(w.v,e.entity.decimals,o.hass),e.entity.unit);$=Ts({x:t/d.width,y:a/d.height,plotWidth:Math.max(0,l-80),title:w.title(),rows:[{color:v(w.v)??"var(--cd-track)",name:e.entity.name,value:n},...void 0!==w.count&&null!==w.v?[{name:zt(o.hass,"heatmap_hours"),value:String(w.count)}]:[]]})}const{show:k}=o.config,M=k.name||k.value||a?W`<div class="series-header">
          <div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
            ${s?R:W`<span class="swatch" style="background:${e.color}"></span>`}
            ${k.name||a?W`<span class="series-name">${e.entity.name}</span>`:R}
            ${k.value?W`<span class="series-value">${e.entity.display}</span>`:R}
          </div>
        </div>`:R,z=zt(o.hass,"heatmap_aria",{name:e.entity.name});return W`<div class="hm grid-${r} shape-${i}">
    ${M}
    <div class="hm-body">
      <div class="hm-rows" aria-hidden="true">
        ${p.map(e=>W`<span class="hm-label" style="top:${Rc(d.centre(0,e.row)[1]/d.height)}">${e.text}</span>`)}
      </div>
      <div
        class="hm-plot ${x?"hoverable":""}"
        @pointerdown=${x?.move}
        @pointermove=${x?.move}
        @pointerleave=${x?.leave}
        @pointercancel=${x?.leave}
      >
        <svg class="hm-svg" viewBox="0 0 ${d.width} ${d.height}" role="img" aria-label=${z}>
          ${c.cells.map(e=>qc(d,e,i,v(e.v)))}
          ${w?qc(d,w,i,"none","cell picked"):R}
        </svg>
        ${$}
      </div>
      <div class="hm-cols" aria-hidden="true">
        ${f.map(e=>W`<span class="hm-label" style="left:${Rc(e.col*Tc/d.width)}">${e.text}</span>`)}
      </div>
    </div>
    ${!1===n.legend?R:function(e,t,o,a){const n=e.entity,r=e=>Fn(e,n.decimals,a.hass);return o?W`<div class="hm-legend bands">
      ${Te(n.bands,r,n.unit).map(e=>W`<span class="hm-key"
            ><span class="hm-swatch" style="background:${e.color}"></span>${e.text}</span
          >`)}
    </div>`:t?W`<div class="hm-legend scale">
    <span class="hm-end">${r(t[0])}</span>
    <span class="hm-gradient" style="background:linear-gradient(to right, ${Cc(e.color,0)}, ${e.color})"></span>
    <span class="hm-end">${Pn(r(t[1]),n.unit)}</span>
  </div>`:R}(e,g,s,o)}
  </div>`}const Xc=new Map;const Jc={layout:"chart",group:"distribution",height:220,styles:r`
    ${Tn}
    ${Sr}
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
          fill="var(--primary-color, #03a9f4)" fill-opacity=${.15+.85*((3*t+5*e)%7/6)}></rect>`))}`,validate:function(e){const t=e,o=(e,o)=>{const a=t[e];if(void 0!==a&&!o.includes(a))throw new Error(`"${e}" must be one of: ${o.join(", ")}`)};o("grid",Nc),o("color_by",Lc),o("cell_shape",Oc);for(const a of["color_min","color_max"])if(void 0!==t[a]&&!Dc(t[a]))throw new Error(`"${a}" must be a number`);if(Dc(t.color_min)&&Dc(t.color_max)&&t.color_min>=t.color_max)throw new Error('"color_min" must be below "color_max"');if(void 0!==t.legend&&"boolean"!=typeof t.legend)throw new Error('"legend" must be true or false');Mn(Hc(e)),xr(e)},editor:function(e){const t=Uc(e.config),o=Xi(`heatmap|${Fi({...e.config,group_by:void 0})}`,e.hass,()=>[{name:"grid",selector:Oi(e.hass,"grid",Nc)},...Pi(e.hass,{...e.config,group_by:void 0}).filter(e=>!JSON.stringify(e).includes('"group_by"')),{name:"aggregate",selector:Oi(e.hass,"aggregate",an)},{type:"grid",name:"",schema:[{name:"color_by",selector:Oi(e.hass,"color_by",Lc)},{name:"cell_shape",selector:Oi(e.hass,"cell_shape",Oc)}]},{type:"grid",name:"",schema:[{name:"color_min",selector:{number:{mode:"box",step:"any"}}},{name:"color_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"legend",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}}]}]);return Ji(e,"chart",o,function(e){let t=Xc.get(e);if(!t){const o=Pc[e],a={period_last:o.last,period_unit:o.unit,source:o.source};t=[{name:"grid",path:["grid"],default:"hours"},...Ti.filter(e=>"group_by"!==e.name).map(e=>e.name in a?{...e,default:a[e.name]}:e),{name:"color_by",path:["color_by"],default:"scale"},{name:"cell_shape",path:["cell_shape"],default:"rounded"},{name:"color_min",path:["color_min"]},{name:"color_max",path:["color_max"]},{name:"legend",path:["legend"],default:!0},{name:"tooltip",path:["tooltip"],default:!0}],Xc.set(e,t)}return t}(t))},entityFields:()=>({schema:[{name:"series_color",selector:{text:{}}}],fields:[{name:"series_color",path:["color"]}]}),disconnect(e){jn(e),Gn(e),Ns(e)},render(e){const t=zn({...e,raw:Hc(e.raw)}),o=En(t,e),a=Ln(t,e);if(a)return W`<div class="frame">${o}${a}</div>`;const n=t.series.length>1;return W`<div class="frame">${o}${t.series.map(o=>Gc(o,t,e,n))}</div>`}},Kc=["time","readings"],Qc=100,ed=e=>Number(e.toPrecision(12));const td=6e4,od=36e5;const ad=["percent","total"],nd=["side","overlap"],rd=["series","bands"],id=e=>"number"==typeof e&&Number.isFinite(e);function sd(e,t,o){if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function ld(e,t){const o=zn(e,t),a={count:(n=e.raw).count??"time",showAs:n.show_as??"percent",bars:n.bars??"side",bands:"bands"===n.color_by,bins:id(n.bins)?n.bins:void 0,width:id(n.bin_width)?n.bin_width:void 0};var n;const r=Math.min(o.range.end,t),i=o.series.map(e=>function(e,t){const{mode:o,until:a,statistics:n}=t;if(0===e.length)return[];if(void 0!==e[0].end)return e.map(e=>null===e.v?0:"readings"===o?1:Math.max(0,Math.min(e.end,a)-e.t));if(n){if("readings"===o)return e.map(e=>null===e.v||e.carried?0:1);const t=e.slice(1).map((t,o)=>t.t-e[o].t).filter(e=>e>0).sort((e,t)=>e-t),a=t.length?t[Math.floor(t.length/2)]:36e5;return e.map(e=>null===e.v||e.carried?0:a)}const r=e.length-1;return e.map((t,n)=>{if(null===t.v)return 0;if("readings"===o){const o=n===r&&n>0&&t.t>=a&&e[n-1].v===t.v;return t.carried||o?0:1}const i=n<r?e[n+1].t:Math.max(t.t,a);return Math.max(0,Math.min(i,a)-t.t)})}(e.points,{mode:a.count,until:r,statistics:"statistics"===o.source}));let s=1/0,l=-1/0;o.series.forEach((e,t)=>e.points.forEach((e,o)=>{null!==e.v&&i[t][o]>0&&(s=Math.min(s,e.v),l=Math.max(l,e.v))}));const c=Ss(e.raw),d="side"===a.bars&&o.series.length>1,u=Math.max(5,Math.min(24,Math.round(Xn(e)/(d?40:28)))),h=s===1/0?[]:function(e,t,o={},a=12){const n=o.min??e,r=o.max??t;if(void 0!==o.bins&&void 0===o.width){let[e,t]=[n,r];t>e||([e,t]=[e-.5,e+.5]);const a=(t-e)/o.bins;return Array.from({length:o.bins+1},(n,r)=>r===o.bins?t:ed(e+r*a))}const i=r-n;let s=o.width??(i>0?Vo(i,a):Vo(Math.max(Math.abs(n),1),10));for(;i/s>Qc;)s=Vo(i,50);const l=o.min??ed(Math.floor(n/s+1e-9)*s);let c=o.max??ed(Math.ceil(r/s-1e-9)*s);c>l||(c=ed(l+s));const d=[l];for(let u=1;d[d.length-1]<c-1e-9*s;u++)d.push(Math.min(c,ed(l+u*s)));return d}(s,l,{bins:a.bins,width:a.width,min:c.min,max:c.max},u),p=o.series.map((e,t)=>{const o=function(e,t,o){const a=new Array(Math.max(0,o.length-1)).fill(0);return e.forEach((e,n)=>{if(null===e.v||!(t[n]>0))return;const r=function(e,t){const o=t.length-1;if(o<1||e<t[0]||e>t[o])return-1;if(e===t[o])return o-1;let a=0,n=o-1;for(;a<n;){const o=a+n+1>>1;t[o]<=e?a=o:n=o-1}return a}(e.v,o);r>=0&&(a[r]+=t[n])}),a}(e.points,i[t],h),n=o.reduce((e,t)=>e+t,0),r=o.map(e=>"percent"===a.showAs?n>0?e/n*100:0:"time"===a.count?e/36e5:e);return{series:e,totals:o,heights:r,whole:n}});return{frame:o,opts:a,edges:h,data:p,side:d}}function cd(e,t,o){return"time"===t?function(e){if(e<td)return e>0?"< 1 min":"0 min";const t=Math.round(e/td);if(t<60)return`${t} min`;if(e<864e5){const e=Math.floor(t/60),o=t%60;return o?`${e} h ${o} min`:`${e} h`}const o=Math.round(e/od),a=Math.floor(o/24),n=o%24;return n?`${a} d ${n} h`:`${a} d`}(e):1===e?zt(o.hass,"histogram_reading"):zt(o.hass,"histogram_readings",{n:Fn(e,0,o.hass)})}const dd={layout:"chart",group:"distribution",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
    ${Fs}
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
    <path d="M4 37 H60" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate(e){if(Mn(e),qo(e),xr(e),ar(e),ks(e),sd(e,"count",Kc),sd(e,"show_as",ad),sd(e,"bars",nd),sd(e,"color_by",rd),void 0!==e.bins&&!(Number.isInteger(e.bins)&&e.bins>=1&&e.bins<=Qc))throw new Error('"bins" must be a whole number from 1 to 100');if(void 0!==e.bin_width&&!(id(e.bin_width)&&e.bin_width>0))throw new Error('"bin_width" must be a number above 0')},editor:function(e){const t=e.hass,o=Xi(`histogram|${Fi(e.config)}`,t,()=>[...Pi(t,e.config),{type:"grid",name:"",schema:[{name:"count",selector:Oi(t,"count",Kc)},{name:"show_as",selector:Oi(t,"show_as",ad)}]},{type:"grid",name:"",schema:[{name:"bins",selector:{number:{min:1,max:Qc,mode:"box"}}},{name:"bin_width",selector:{number:{min:0,mode:"box",step:"any"}}}]},...zs,{type:"grid",name:"",schema:[{name:"bars",selector:Oi(t,"bars",nd)},{name:"color_by",selector:Oi(t,"color_by",rd)}]},...Wi(t).map(e=>"grid"===e.type?{...e,schema:e.schema.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e)}:e),...Ii(t)]);return Ji(e,"chart",o,md)},entityFields:()=>({schema:hd,fields:ud}),disconnect(e){jn(e),Gn(e),Ns(e)},render(e){const t=Date.now(),{frame:o,opts:a,edges:n,data:r,side:i}=ld(e,t),s=En(o,e),l=Nn(o,e),c=s===R&&l===R?R:W`${s}${l}`,d=nr(e.raw),u=Ln(o,e)??(n.length<2?Ln({...o,series:[]},e):void 0);if(u)return rr("over"===d.header?{...d,header:"above"}:d,c,u);const h=Math.max(0,...r.flatMap(e=>e.heights)),p=As(e,[n[0],n[n.length-1]],[0,h],{x:{min:n[0],max:n[n.length-1]},yFloor:0}),{scales:m}=p,f=m.y(Math.max(0,p.value.domain[0])),g=r.length,v="overlap"===a.bars&&g>1,y=Z`${r.map((e,t)=>{const o=e.heights.map((o,r)=>{if(!(o>0))return R;const s=m.x(n[r]),l=m.x(n[r+1]),c=Math.min(4,.08*(l-s)),d=(l-s-2*c)/(i?g:1),u=s+c+(i?d*t:0),h=m.y(o),p=a.bands&&e.series.entity.bands.length?Ce(Oe((n[r]+n[r+1])/2,e.series.entity.bands).color):e.series.color;return Z`<rect class="bin" x=${u} y=${Math.min(h,f)} width=${Math.max(.5,d)} height=${Math.abs(f-h)} fill=${p} stroke=${v?p:"none"}></rect>`});return Z`<g class="series" data-series=${e.series.index}>${o}</g>`})}`,b=function(e){if(e.length<2)return 0;const t=e[1]-e[0],o=e.every(e=>Math.abs(e-Number(e.toFixed(Yo(t))))<1e-6*t);return o?Yo(t):Math.min(4,Yo(t)+1)}(n),_=_r(e.raw),x=_?js(e.host):void 0;let w=R;if(void 0!==x&&x<n.length-1){const t=r[0]?.series.entity.unit??"",o=Fn(n[x],b,e.hass),i=Fn(n[x+1],b,e.hass),s=m.x(n[x])/xn,l=m.x(n[x+1])/xn,c=Xn(e);w=Ts({x:"right"===mr(l,c)?l:s,y:0,plotWidth:c,title:Pn(`${o} – ${i}`,t),band:[s,l],rows:r.map(t=>{const o=t.whole>0?t.totals[x]/t.whole*100:0;return{color:t.series.color,name:t.series.entity.name,value:`${Fn(o,o>0&&o<1?1:0,e.hass)}% · ${cd(t.totals[x],a.count,e)}`}})})}const $=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_histogram"),names:o.series.map(e=>e.entity.name).join(", ")});return rr(d,c,er({axes:p,ctx:e,content:Z`<g class=${v?"overlap":"side"}>${y}</g>`,label:$,xLabel:t=>Fn(t,Es(p),e.hass),yLabel:t=>"percent"===a.showAs?`${Fn(t,p.value.decimals,e.hass)}%`:"time"===a.count?`${Fn(t,p.value.decimals,e.hass)} h`:Fn(t,p.value.decimals,e.hass),overlay:W`${"over"===d.header?ir(c):R}${w}`,hover:_?Ls(e,e=>{const t=n[0]+e*(n[n.length-1]-n[0]),o=n.findIndex((e,o)=>o<n.length-1&&t>=e&&t<=n[o+1]);return o<0?void 0:o}):void 0}))}},ud=[{name:"bar_color",path:["color"]}],hd=[{name:"bar_color",selector:{text:{}}}],pd=Bi.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e),md=[...Ti,{name:"count",path:["count"],default:"time"},{name:"show_as",path:["show_as"],default:"percent"},{name:"bins",path:["bins"]},{name:"bin_width",path:["bin_width"]},...Ms,{name:"bars",path:["bars"],default:"side"},{name:"color_by",path:["color_by"],default:"series"},...pd,...Hi];function fd(e){let t=0;for(const o of e)t+=o.codePointAt(0)>=11904?1/.58:1;return t}function gd(e,t=76,o=12,a=8,n=11){const r=e.trim();let i=[r];if(fd(r)>n){let e=fd(r);for(let t=r.indexOf(" ");t>0;t=r.indexOf(" ",t+1)){const o=Math.max(fd(r.slice(0,t)),fd(r.slice(t+1)));o<e&&(e=o,i=[r.slice(0,t),r.slice(t+1)])}}const s=Math.max(...i.map(fd));return{lines:i,size:Math.max(a,Math.min(o,Math.floor(t/(.58*Math.max(1,s)))))}}const vd=65,yd=66,bd=50,_d=[-90,90],xd=e=>String(Math.round(1e3*e)/1e3+0);function wd(e,t,o,a,n,r=11){const{lines:i,size:s}=gd(e,t,o,a,r),l=n-1.2*(i.length-1)*s;return Z`<text class="na" text-anchor="middle" style="font-size: ${s}px">${i.map((e,t)=>Z`<tspan x=${vd} y=${xd(l+1.2*t*s)}>${e}</tspan>`)}</text>`}const $d={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:r`
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
  `,render(e,{show:t,hass:o}){const a=e.config.gauge,n=Je(_d,a),r=e=>Qe(n,e),i=function(e,t,o){const a=o-t,n=[];return a>0?(e.forEach((r,i)=>{const s=0===i?t:Math.max(r.from,t),l=Math.min(i+1<e.length?e[i+1].from:1/0,o);l>s&&n.push({from:(s-t)/a,to:(l-t)/a,color:r.color})}),n):n}(e.bands,e.min,e.max),s=i.map((e,t)=>{const o=r(e.from)+(t>0?1:0),a=r(e.to)-(t<i.length-1?1:0);return a>o?Z`<path class="seg" d=${Ve(vd,yd,bd,o,a)} stroke=${Ce(e.color)}></path>`:R}),l=e=>{const[t,o]=Re(vd,yd,36,e),[a,n]=Re(vd,yd,40,e);return Z`<line class="tickmark" x1=${t.toFixed(2)} y1=${o.toFixed(2)} x2=${a.toFixed(2)} y2=${n.toFixed(2)}></line>`},c=a?.tickLabels?function(e,t,o=5){if(!(Number.isFinite(e)&&Number.isFinite(t)&&t>e))return[];const a=ot(t-e,o),n=[];for(let r=Math.ceil(e/a)*a;r<t-.4*a;r+=a)r>e+.4*a&&n.push(Number(r.toPrecision(12)));return[e,...n,t]}(e.min,e.max):[],d=e.max-e.min,u=c.length?c.map(t=>l(r((t-e.min)/d))):Array.from({length:11},(e,t)=>l(r(t/10))),h=ot(d),p=t.target&&null!==e.targetPosition,m=p?67:60,f=Ke(a)||c.length>0,g=f?Math.max(94,Math.ceil(tt(vd,yd,bd,n[0],n[1],6).y1)+14):94,v=c.map(t=>{const a=r((t-e.min)/d),[n,i]=Re(vd,yd,m,a),{anchor:s,dy:l}=nt(a);return Z`<text class="tick-label" x=${n.toFixed(2)} y=${i.toFixed(2)} dy="${l}em" text-anchor=${s}>${Fn(t,at(t,h),o)}</text>`});let y=R;if(t.target&&null!==e.targetPosition&&e.available){const t=r(e.targetPosition),[o,a]=Re(vd,yd,57,t),[n,i]=Re(vd,yd,64,t-3),[s,l]=Re(vd,yd,64,t+3);y=Z`<polygon class="target-mark" points="${o.toFixed(2)},${a.toFixed(2)} ${n.toFixed(2)},${i.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const b=!t.value,_=e.available?rt(e,a):{kind:"value"};let x={x:0,y:0,w:130,h:b?82:104};if(f){const t=function(e,t,o,a,n,r){const i=[tt(vd,yd,bd,t[0],t[1],n.hasTarget?15:7),tt(vd,yd,43,t[0],t[1],0),{x0:57,y0:58,x1:73,y1:74},n.compact?{x0:2,y0:40,x1:128,y1:82}:{x0:2,y0:n.valueY-16,x1:128,y1:n.valueY+6}],s=e.max-e.min;for(const c of o){const o=Qe(t,(c-e.min)/s),[l,d]=Re(vd,yd,n.labelR,o),{anchor:u,dy:h}=nt(o),p=9*Fn(c,at(c,a),r).length*.6,m="start"===u?l:"end"===u?l-p:l-p/2,f=d+9*h;i.push({x0:m,y0:f-9,x1:m+p,y1:f+2})}const l=et(...i);return{x0:Math.floor(l.x0-2),y0:Math.floor(l.y0-2),x1:Math.ceil(l.x1+2),y1:Math.ceil(l.y1+2)}}(e,n,c,h,{hasTarget:p,labelR:m,valueY:g,compact:b},o);x={x:t.x0,y:t.y0,w:t.x1-t.x0,h:t.y1-t.y0}}const w=f?`width: min(${xd(x.w)}px, 100%); aspect-ratio: ${xd(x.w)} / ${xd(x.h)}`:void 0;return W`<div
      class="needle-gauge ${f?"fitted":""}"
      style=${f?`--needle-start: ${xd(n[0])}deg; width: ${xd(Math.max(130,x.w))}px`:R}
    >
      <svg
        class=${b?"compact":""}
        viewBox="${xd(x.x)} ${xd(x.y)} ${xd(x.w)} ${xd(x.h)}"
        style=${w??R}
        aria-hidden="true"
      >
        ${s} ${u} ${v} ${y}
        ${e.available?Z`<g class="needle" style="transform: rotate(${xd(r(e.position))}deg)"><path d=${$=vd,k=yd,M=42,z=3,`M${qe($)} ${qe(k-M)} L${qe($+z)} ${qe(k)} L${qe($-z)} ${qe(k)} Z`}></path></g>`:R}
        <circle class="hub" cx=${vd} cy=${yd} r="6"></circle>
        <circle class="hub-dot" cx=${vd} cy=${yd} r="2.5"></circle>
        ${e.available?t.value?"value"===_.kind?Z`<text class="value" x=${vd} y=${g} text-anchor="middle">${e.display}</text>`:"text"===_.kind?Z`<text
                      class="center-text"
                      x=${vd}
                      y=${g}
                      text-anchor="middle"
                      style=${_.band?`fill: ${Ce(e.band.color)}`:R}
                    >${_.text}</text>`:R:R:b?function(e){return wd(e,58,11,7,55)}(e.display):function(e,t=94){return wd(e,126,12,8,t,18)}(e.display,g)}
      </svg>
      ${t.name&&"name"!==a?.center||t.icon?W`<div class="name">
              ${t.icon?W`<ha-state-icon
                      class="icon"
                      .hass=${o}
                      .stateObj=${e.stateObj}
                      .icon=${hs(e)}
                    ></ha-state-icon>`:R}
              ${t.name&&"name"!==a?.center?W`<span class="name-text">${e.name}</span>`:R}
            </div>`:R}
    </div>`;var $,k,M,z}};function kd(e){return e.map(e=>e.available&&e.value>0?e.value:0)}function Md(e,t=100){const o=e.reduce((e,t)=>e+Math.max(0,t),0);if(o<=0)return e.map(()=>0);const a=e.map(e=>Math.max(0,e)/o*t),n=a.map(Math.floor);let r=t-n.reduce((e,t)=>e+t,0);const i=a.map((e,t)=>({i:t,rest:e-n[t]})).sort((e,t)=>t.rest-e.rest||e.i-t.i);for(const{i:s}of i){if(r<=0)break;n[s]+=1,r-=1}return n}function zd(e,t){return t>0?e/t*(180/Math.PI):0}function Sd(e){const t=Math.max(0,e.end-e.start);return`--a:${(e.start-90).toFixed(3)}deg;--len:${t.toFixed(3)}`}function Ad(e,t,o,a,n="primary"){return"bands"===a?Ce(e.band.color):"shades"===a?function(e,t,o){return o<=1||t<=0?e:`color-mix(in srgb, ${e} ${Math.round(100-Math.min(t,o-1)/(o-1)*65)}%, var(--card-background-color, #fff))`}(Ce(n),t,o):Ce(function(e){const t=e.config.color;return"string"==typeof t&&""!==t.trim()?t:void 0}(e)??$n[t%$n.length])}function Ed(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:""}function Cd(e,t,o,a=e.map(e=>e.available?e.value:0)){const n=e.map((e,t)=>({e:e,v:a[t]})).filter(({e:e})=>e.available);if(!n.length)return;const r=n.reduce((e,{v:t})=>e+t,0),i="total"===t?r:r/n.length,s=Math.max(...n.map(({e:e})=>e.decimals));return{value:i,text:Fn(i,s,o),unit:Ed(e)}}function jd(e){return Se(e.config)?0:R}function Nd(e,t){const{show:o}=t.config;return!e.length||!o.name&&!o.value&&e.every(e=>void 0===e.share)?R:W`<div class="parts-legend">
    ${e.map(e=>W`<div
          class="entity part-row ${Se(e.entity.config)?"interactive":""} ${e.entity.available?"":"unavailable"}"
          data-index=${e.index}
          tabindex=${jd(e.entity)}
          aria-label=${void 0===e.share?e.entity.label:`${e.entity.label}, ${e.share}`}
        >
          <span class="swatch ${e.entity.available?"":"empty"}" style="background:${e.color}"></span>
          ${o.name?W`<span class="part-name">${e.entity.name}</span>`:R}
          ${o.value?W`<span class="part-value value">${e.entity.display}</span>`:R}
          ${void 0===e.share?R:W`<span class="part-share">${e.share}</span>`}
        </div>`)}
  </div>`}function Ld(e,t){return Pn(Fn(e,0,t),"%")}function Od(e,t){return zt(e.hass,"parts_aria",{style:zt(e.hass,t),names:e.items.map(e=>e.name).join(", ")})}function Td(e,t,o){return W`<div class="centre" aria-hidden="true">
    <div class="centre-value">${e}${t?W`<span class="centre-unit">${t}</span>`:R}</div>
    ${o?W`<div class="centre-caption">${o}</div>`:R}
  </div>`}function Fd(e,t,o){const a=e[t];if(void 0!==a&&!o.includes(a))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}function Pd(e,t,o,a){const n=e[t];if(void 0!==n&&("number"!=typeof n||!Number.isFinite(n)||n<o||n>a))throw new Error(`"${t}" must be a number from ${o} to ${a}`)}function Dd(e,t){const o=e[t];if(void 0!==o&&"boolean"!=typeof o)throw new Error(`"${t}" must be true or false`)}function Ud(e,t){const o=e[t];if(void 0!==o&&"string"!=typeof o)throw new Error(`"${t}" must be text`)}const Hd=r`
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
`,Id=["series","bands"];function Bd(e,t,o,a){const{show:n}=o.config,r=function(e,t,o){const a=t-e;if(!(a>0))return{count:0,per:1};const n=void 0!==o&&o>0?o:a<=20?1:a/10,r=Math.ceil(a/n-1e-9);return r>100?{count:100,per:a/100}:{count:r,per:n}}(e.min,e.max,a.perIcon),i=e.available?function(e,t,o,a){const n=Math.min(o.count,Math.max(0,(e-t)/o.per)),r=a?n:Math.floor(n+1e-9);return Array.from({length:o.count},(e,t)=>Math.min(1,Math.max(0,r-t)))}(e.value,e.min,r,a.partial):r.count?Array(r.count).fill(0):[],s=Ad(e,t,o.items.length,a.colorBy),l=e.config.icon??a.unitIcon??(e.stateObj?void 0:"mdi:checkbox-blank-circle"),c=r.count>20?20:28,d=e.available?W`<span class="picto-now">${e.valueText}</span
        ><span class="picto-of"
          >/ ${Pn(Fn(e.max,Number.isInteger(e.max)?0:e.decimals,o.hass),e.unit)}</span
        >`:e.display;return W`<div
    class="entity picto-row ${Se(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    tabindex=${jd(e)}
    aria-label=${e.label}
  >
    ${n.name?W`<span class="name picto-name">${e.name}</span>`:R}
    <div class="picto-icons" style="--mdc-icon-size:${c}px" role="img" aria-label=${e.label}>
      ${function(e,t){if(e<=0)return[];if(!(t>0))return[[0,e]];const o=[];for(let a=0;a<e;a+=t)o.push([a,Math.min(e,a+t)]);return o}(i.length,a.groupSize).map(([t,a])=>W`<span class="picto-group">${i.slice(t,a).map((a,n)=>((t,a)=>W`<span class="unit" style="--i:${a};--fill:${(100*t).toFixed(1)}%">
      <ha-state-icon class="unit-empty" .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon>
      <span class="unit-full" style="color:${s}"
        ><ha-state-icon .hass=${o.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon
      ></span>
    </span>`)(a,t+n))}</span>`)}
    </div>
    ${n.value?W`<span class="value picto-value">${d}</span>`:R}
  </div>`}const Wd=[{name:"unit_icon",path:["unit_icon"]},{name:"per_icon",path:["per_icon"]},{name:"group_size",path:["group_size"],default:5},{name:"color_by",path:["color_by"],default:"series"},{name:"partial",path:["partial"],default:!0}];const Zd={layout:"chart",group:"totals",height:180,styles:r`
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
        <path d="M${3+11*e} 30 a7 7 0 0 1 14 0 z" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`)}`,validate(e){Ud(e,"unit_icon");const t=e.per_icon;if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<=0))throw new Error('"per_icon" must be a number more than 0');if(Pd(e,"group_size",0,50),void 0!==e.group_size&&!Number.isInteger(e.group_size))throw new Error('"group_size" must be a whole number');Fd(e,"color_by",Id),Dd(e,"partial")},editor:function(e){const t=Xi("pictograph",e.hass,()=>[{name:"unit_icon",selector:{icon:{}}},{type:"grid",name:"",schema:[{name:"per_icon",selector:{number:{min:0,step:"any",mode:"box"}}},{name:"group_size",selector:{number:{min:0,max:50,mode:"box"}}},{name:"color_by",selector:Oi(e.hass,"color_by",Id)}]},{name:"partial",selector:{boolean:{}}}]);return Ji(e,"chart",t,Wd)},render:function(e){const t={perIcon:(o=e.raw).per_icon,unitIcon:o.unit_icon||void 0,groupSize:o.group_size??5,partial:!1!==o.partial,colorBy:o.color_by??"series"};var o;return W`<div class="pictograph" role="group" aria-label=${Od(e,"editor_style_pictograph")}>
    ${e.items.map((o,a)=>Bd(o,a,e,t))}
  </div>`}},qd=["donut","pie"],Rd=["total","none"],Vd=["series","bands","shades"],Yd=48;function Gd(e,t){const o=function(e){const t=e.reduce((e,t)=>e+Math.max(0,t),0);return e.map(e=>t>0?Math.max(0,e)/t:0)}(e),a=o.filter(e=>e>0).length,n="donut"===t.shape?41.5:24;let r=0;return"donut"===t.shape&&(a>1&&(r+=zd(t.gap,n)),t.rounded&&(r+=zd(13,n))),function(e,t=0,o=360){const a=o-t;let n=t;return e.map(e=>{const t=n;return n+=e*a,{start:t,end:n}})}(o).map((e,t)=>o[t]>0?function(e,t){const o=e.end-e.start,a=Math.min(Math.max(0,t),o)/2;return{start:e.start+a,end:e.end-a}}(e,r):void 0)}const Xd=[{name:"shape",path:["shape"],default:"donut"},{name:"color_by",path:["color_by"],default:"series"},{name:"center",path:["center"],default:"total"},{name:"center_label",path:["center_label"],default:""},{name:"gap",path:["gap"],default:2},{name:"shade_color",path:["shade_color"],default:""},{name:"rounded",path:["rounded"],default:!1},{name:"gradient",path:["gradient"],default:!1},{name:"show_percent",path:["show_percent"],default:!0}];const Jd={layout:"chart",group:"totals",height:200,styles:r`
    ${Hd}
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
      pathLength="100" stroke-dasharray="22 78" stroke-dashoffset="-76" transform="rotate(-90 32 20)" />`,validate(e){Fd(e,"shape",qd),Fd(e,"center",Rd),Fd(e,"color_by",Vd),Pd(e,"gap",0,10),Dd(e,"rounded"),Dd(e,"gradient"),Dd(e,"show_percent"),Ud(e,"shade_color"),Ud(e,"center_label")},editor:function(e){const t=Xi("pie",e.hass,()=>[{type:"grid",name:"",schema:[{name:"shape",selector:Oi(e.hass,"shape",qd)},{name:"color_by",selector:Oi(e.hass,"color_by",Vd)},{name:"center",selector:Oi(e.hass,"center",Rd)},{name:"center_label",selector:{text:{}}},{name:"gap",selector:{number:{min:0,max:10,step:.5,mode:"slider"}}},{name:"shade_color",selector:{text:{}}}]},{name:"rounded",selector:{boolean:{}}},{name:"gradient",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Ji(e,"chart",t,Xd)},render:function(e){const t={shape:(o=e.raw).shape??"donut",center:o.center??"total",colorBy:o.color_by??"series",shadeColor:o.shade_color||"primary",gap:o.gap??2,rounded:!0===o.rounded,gradient:!0===o.gradient,percent:!1!==o.show_percent,centerLabel:o.center_label??""};var o;const a=e.items,n=kd(a),r=a.map((e,o)=>Ad(e,o,a.length,t.colorBy,t.shadeColor)),i=Gd(n,t),s="donut"===t.shape,l=s?41.5:24,c=s?13:Yd,d=s?35/Yd:0,u=i.filter(Boolean).length,h=t.gradient?Z`<defs>${a.map((e,t)=>i[t]?function(e,t,o){return Z`<radialGradient id=${e} gradientUnits="userSpaceOnUse" cx="50" cy="50" r=${Yd}>
    <stop offset=${o} style="stop-color:color-mix(in srgb, ${t} 65%, #fff)"></stop>
    <stop offset="1" style="stop-color:${t}"></stop>
  </radialGradient>`}(`cd-pie-${t}`,r[t],d):R)}</defs>`:R,p=a.map((e,o)=>{const a=i[o];if(!a)return R;const n=t.gradient?`url(#cd-pie-${o})`:r[o];return Z`<g
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
        style="${Sd(a)};stroke:${n}"
      ></circle>
    </g>`}),m=!s&&t.gap>0&&u>1?i.map(e=>e?Z`<line class="separator" x1="50" y1="50" x2="50" y2=${1}
                stroke-width=${t.gap} style="--a:${e.start.toFixed(3)}deg"></line>`:R):R,f=0===u?Z`<circle class="track" cx="50" cy="50" r=${l} stroke-width=${c} fill="none"></circle>`:R,g=Md(n),v=a.map((o,a)=>({index:a,entity:o,color:r[a],share:t.percent&&n[a]>0?Ld(g[a],e.hass):void 0})),y=Cd(a,"total",e.hass,n),b=s&&"total"===t.center&&y?Td(y.text,"",t.centerLabel||Ed(a)):R;return W`<div class="parts">
    <div class="dial">
      <svg viewBox="0 0 100 100" role="img" aria-label=${Od(e,"editor_style_pie")}>
        ${h}${f}${p}${m}
      </svg>
      ${b}
    </div>
    ${Nd(v,e)}
  </div>`}};let Kd=0;const Qd=new WeakMap;const eu=60,tu=60,ou=e=>String(Math.round(1e3*e)/1e3+0);function au(e){return Math.min(22,Math.floor(124/Math.max(1,e.length)))}function nu(e){const t=function(e,t){const o=e/2;return[-o+t[0]*e,-o+t[1]*e]}(e,[0,1]),o=Ve(eu,tu,46,t[0],t[1]),a=e<360;return{layout:"tiles",group:"gauges",height:a?135:155,minColumnWidth:128,styles:r`
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
    `,render(e,{show:n,hass:r}){const i=function(e){let t=Qd.get(e);return t||(t="cd-g-"+ ++Kd,Qd.set(e,t)),t}(e.config),s=e.config.gauge,l=Je(t,s),c=Ke(s),d=c?Ve(eu,tu,46,l[0],l[1]):o;let u=0,h=a?100:120;if(c){const e=et(tt(eu,tu,46,l[0],l[1],6.5),{x0:26,y0:26,x1:94,y1:94});u=Math.max(0,Math.floor(e.y0)),h=Math.min(120,Math.ceil(e.y1))-u}const p=h<120,m=e.available&&n.value?rt(e,s):{kind:"none"},f=e.span[1]-e.span[0]<=0,g=`stroke-dasharray: ${ou(100*(e.span[1]-e.span[0]))} 100; stroke-dashoffset: ${ou(100*-e.span[0])}`,v=(y=e.band.color,Object.prototype.hasOwnProperty.call(Ee,y)?Ee[y].fallback:y);var y;const b=function(e){return!e.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",e))}(v)?`url(#${i}) ${v}`:`url(#${i})`,_=n.icon?6:0,x=au(e.valueText);let w=R;if(n.target&&null!==e.targetPosition&&e.available){const t=Qe(l,e.targetPosition),[o,a]=Re(eu,tu,39.5,t),[n,r]=Re(eu,tu,52.5,t);w=Z`<line class="tick" x1=${o.toFixed(2)} y1=${a.toFixed(2)} x2=${n.toFixed(2)} y2=${r.toFixed(2)}></line>`}return W`<div class="radial ${p?"cropped":""}">
        <div class="dial ${c?"fitted":""}" style=${c?`aspect-ratio: 124 / ${h}; --y0: ${u}`:R}>
          <svg viewBox="0 ${u} 120 ${h}" aria-hidden="true">
            <defs>
              <linearGradient id=${i} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${eu} cy=${tu} r="34"></circle>
            <path class="track" d=${d}></path>
            ${e.available?Z`<path
                  class="value-arc ${f?"empty":""}"
                  d=${d}
                  pathLength="100"
                  style=${g}
                  stroke=${b}
                ></path>`:R}
            ${w}
            ${e.available?Z`${"text"===m.kind?Z`<text
                        class="center-text"
                        x=${eu}
                        y=${66+_}
                        text-anchor="middle"
                        style="font-size: ${Math.min(18,au(m.text))}px${m.band?`; fill: ${Ce(e.band.color)}`:""}"
                      >${m.text}</text>`:"value"===m.kind?Z`<text
                        class="value"
                        x=${eu}
                        y=${64+_}
                        text-anchor="middle"
                        style=${x<22?`font-size: ${x}px`:R}
                      >${e.valueText}</text>
                      <text class="unit" x=${eu} y=${80+_} text-anchor="middle">${e.unit}</text>`:R}`:function(e){const{lines:t,size:o}=gd(e),a=64-1.2*(t.length-1)*o/2;return Z`<text class="na" text-anchor="middle" style="font-size: ${o}px">${t.map((e,t)=>Z`<tspan x=${eu} y=${ou(a+1.2*t*o)}>${e}</tspan>`)}</text>`}(e.display)}
          </svg>
          ${n.icon&&e.available?W`<ha-state-icon
                  class="icon ${n.value&&"none"!==m.kind?"":"centre"}"
                  .hass=${r}
                  .stateObj=${e.stateObj}
                  .icon=${hs(e)}
                ></ha-state-icon>`:R}
        </div>
        ${n.name&&"name"!==s?.center?W`<span class="name">${e.name}</span>`:R}
      </div>`}}}const ru=nu(360),iu=nu(270),su=["average","total","none"],lu=["series","bands"];function cu(e){return{start:e.start_angle??0,end:e.end_angle??270,center:e.center??"average",colorBy:e.color_by??"series",rounded:!1!==e.rounded_ends}}const du=[{name:"start_angle",path:["start_angle"],default:0},{name:"end_angle",path:["end_angle"],default:270},{name:"center",path:["center"],default:"average"},{name:"color_by",path:["color_by"],default:"series"},{name:"rounded_ends",path:["rounded_ends"],default:!0}];const uu={layout:"chart",group:"totals",height:200,styles:r`
    ${Hd}
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
      pathLength="100" stroke-dasharray="48 100" transform="rotate(-90 32 20)" stroke-linecap="round" />`,validate(e){Pd(e,"start_angle",-360,360),Pd(e,"end_angle",-360,360);const{start:t,end:o}=cu(e);if(o<=t||o-t>360)throw new Error('"end_angle" must be after "start_angle", and at most 360 degrees after it');Fd(e,"center",su),Fd(e,"color_by",lu),Dd(e,"rounded_ends")},editor:function(e){const t=Xi("rings",e.hass,()=>[{type:"grid",name:"",schema:[{name:"start_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"end_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"center",selector:Oi(e.hass,"center",su)},{name:"color_by",selector:Oi(e.hass,"color_by",lu)}]},{name:"rounded_ends",selector:{boolean:{}}}]);return Ji(e,"chart",t,du,{start_angle:"editor_rings_start_angle"})},render:function(e){const t=cu(e.raw),o=e.items,{radii:a,width:n}=function(e){if(e<=0)return{radii:[],width:0};const t=Math.min(9,28/(1.33*e)),o=1.33*t;return{radii:Array.from({length:e},(e,a)=>48-t/2-a*o),width:t}}(o.length),r=o.map((e,a)=>Ad(e,a,o.length,t.colorBy)),i=t.rounded?"round":"butt",s=Sd({start:t.start,end:t.end}),l=o.map((e,o)=>{const l=e.available?Z`<circle class="seg" cx="50" cy="50" r=${a[o]} pathLength="360" stroke-width=${n}
          stroke-linecap=${i} style="${Sd(function(e,t,o){return{start:t,end:t+Math.min(1,Math.max(0,e))*(o-t)}}(e.position,t.start,t.end))};stroke:${r[o]}"></circle>`:R;return Z`<g
      class="entity ring ${Se(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
      data-index=${o}
      aria-label=${e.label}
    >
      <circle class="ring-track" cx="50" cy="50" r=${a[o]} pathLength="360" stroke-width=${n}
        stroke-linecap=${i} style=${s}></circle>
      ${l}
    </g>`}),c="none"===t.center?void 0:Cd(o,t.center,e.hass),d=c?Td(c.text,c.unit,zt(e.hass,`parts_${t.center}`)):R,u=o.map((e,t)=>({index:t,entity:e,color:r[t]})),h=function(e,t){const o=e=>-Math.cos(e*Math.PI/180),a=360*Math.ceil((e-180)/360)+180<=t?1:Math.max(o(e),o(t));return Math.min(100,Math.max(66,50+48*a+6))}(t.start,t.end);return W`<div class="parts">
    <div class="dial" style="aspect-ratio:100 / ${h.toFixed(2)}">
      <svg viewBox="0 0 100 ${h.toFixed(2)}" role="img" aria-label=${Od(e,"editor_style_rings")}>
        ${l}
      </svg>
      <div class="centre-box" style="height:${(100/h*100).toFixed(2)}%">${d}</div>
    </div>
    ${Nd(u,e)}
  </div>`}},hu={layout:"chart",group:"distribution",height:240,styles:dl,thumbnail:()=>Z`
    <g fill="var(--primary-color, #03a9f4)">
      <circle cx="10" cy="32" r="2.5" /><circle cx="17" cy="27" r="2.5" /><circle cx="22" cy="29" r="2.5" />
      <circle cx="28" cy="21" r="2.5" /><circle cx="34" cy="23" r="2.5" /><circle cx="40" cy="15" r="2.5" />
      <circle cx="47" cy="17" r="2.5" /><circle cx="53" cy="9" r="2.5" />
    </g>
    <g fill="var(--warning-color, #f59e0b)">
      <circle cx="14" cy="18" r="2.5" /><circle cx="31" cy="33" r="2.5" /><circle cx="50" cy="28" r="2.5" />
    </g>`,validate:e=>rl(e,"scatter"),editor:fl("scatter"),entityFields:()=>yl(),disconnect:ul,render:e=>ll(e,"scatter")};function pu(e){const[t,o]=e;return Array.from({length:10},(e,a)=>{const n=(a+.5)/10;return n>t&&n<=o})}const mu={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:r`
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
  `,render(e,{show:t,hass:o}){const a=e.available?pu(e.span):pu([0,0]),n=t.target&&e.available&&null!==e.targetPosition?Math.min(9,Math.max(0,Math.floor(10*e.targetPosition))):-1,r=!e.available;return W`<div class="seg">
      ${t.icon?W`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${hs(e)}
            ></ha-state-icon>`:R}
      <div class="body">
        ${t.name||r?W`<div class="name">
                ${t.name?W`<span class="label">${e.name}</span>`:R}
                ${r?W`<span class="status">${e.display}</span>`:R}
              </div>`:R}
        <div class="cells">
          ${a.map((e,t)=>W`<i class="cell ${e?"on":""} ${t===n?"mark":""}" style="--i:${t}"></i>`)}
        </div>
      </div>
      ${t.value?W`<span class="value">${e.available?e.display:""}</span>`:R}
    </div>`}},fu={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:r`
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
  `,render:(e,{show:t,hass:o})=>W`
      ${t.icon?W`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${hs(e)}
            ></ha-state-icon>`:R}
      ${t.value||!e.available?W`<span class="value">${e.display}</span>`:R}
      <div class="tube">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?W`<div class="target"></div>`:R}
      </div>
      ${t.name?W`<span class="name">${e.name}</span>`:R}
    `},gu={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:r`
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
  `,render(e,{show:t,hass:o}){const a=t.value||!e.available;return W`
      ${t.icon?W`<ha-state-icon
              class="icon"
              .hass=${o}
              .stateObj=${e.stateObj}
              .icon=${hs(e)}
            ></ha-state-icon>`:R}
      <div class="body">
        ${t.name||a?W`<div class="top">
                ${t.name?W`<span class="name">${e.name}</span>`:R}
                ${a?W`<span class="value">${e.display}</span>`:R}
              </div>`:R}
        <div class="track">
          <div class="fill"></div>
          ${t.target&&null!==e.targetPosition&&e.available?W`<div class="target"></div>`:R}
        </div>
      </div>
    `}},vu=["one","each"],yu=["series","bands"];function bu(e){if(1===e.length){const t=e[0];return t.available?[Md([t.position,1-t.position])[0]]:[0]}return Md(kd(e),100)}function _u(e,t){const{col:o,row:a}=function(e){return{col:e%10,row:9-Math.floor(e/10)}}(e);return Z`<rect
    class="cell ${t?"filled":""}"
    x=${10*o+.8}
    y=${10*a+.8}
    width="8.4"
    height="8.4"
    rx="1.6"
    style="--k:${e}${t?`;fill:${t}`:""}"
  ></rect>`}function xu(e,t,o,a){let n=0;const r=e.map((e,a)=>{const r=n;if(n+=e,!e)return R;const i=o[a];return Z`<g class="entity ${Se(i.config)?"interactive":""}" data-index=${a}>
      ${Array.from({length:e},(e,o)=>_u(r+o,t[a]))}
    </g>`}),i=Array.from({length:100-n},(e,t)=>_u(n+t,void 0));return W`<svg class="waffle" viewBox="0 0 100 100" role="img" aria-label=${a}>
    ${r}
    <g class="empty">${i}</g>
  </svg>`}const wu=[{name:"waffles",path:["waffles"],default:"one"},{name:"color_by",path:["color_by"],default:"series"},{name:"headline",path:["headline"],default:!0},{name:"show_percent",path:["show_percent"],default:!0}];const $u={layout:"chart",group:"totals",height:210,styles:r`
    ${Hd}
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
    ${Array.from({length:25},(e,t)=>{const o=t%5,a=4-Math.floor(t/5);return Z`<rect x=${20+5*o} y=${8+5*a} width="4" height="4" rx="0.8" fill=${t<9?"var(--warning-color, #f59e0b)":t<15?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`})}`,validate(e){Fd(e,"waffles",vu),Fd(e,"color_by",yu),Dd(e,"headline"),Dd(e,"show_percent")},editor:function(e){const t=Xi("waffle",e.hass,()=>[{type:"grid",name:"",schema:[{name:"waffles",selector:Oi(e.hass,"waffles",vu)},{name:"color_by",selector:Oi(e.hass,"color_by",yu)}]},{name:"headline",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Ji(e,"chart",t,wu)},render(e){const t={waffles:(o=e.raw).waffles??"one",colorBy:o.color_by??"series",headline:!1!==o.headline,percent:!1!==o.show_percent};var o;return"each"===t.waffles?function(e,t){const{show:o}=e.config;return W`<div class="waffles">
    ${e.items.map((a,n)=>{const r=Ad(a,n,e.items.length,t.colorBy),[i]=bu([a]),s=Ld(i,e.hass),l=o.value&&t.percent&&a.available&&a.display!==s;return W`<div
        class="entity waffle-item ${Se(a.config)?"interactive":""} ${a.available?"":"unavailable"}"
        data-index=${n}
        tabindex=${jd(a)}
      >
        ${xu([i],[r],[a],a.label)}
        ${o.name?W`<span class="waffle-name">${a.name}</span>`:R}
        <span class="value waffle-value">${a.available&&t.percent?s:a.display}</span>
        ${l?W`<span class="waffle-raw">${a.display}</span>`:R}
      </div>`})}
  </div>`}(e,t):function(e,t){const o=e.items,a=o.map((e,a)=>Ad(e,a,o.length,t.colorBy)),n=bu(o),r=e=>n[e]>0||1===o.length&&o[e].available,i=o.map((i,s)=>({index:s,entity:i,color:a[s],share:!t.percent||!r(s)||t.headline&&1===o.length?void 0:Ld(n[s],e.hass)})),s=o[0],l=t.headline&&s&&r(0)?W`<div class="waffle-headline">
          <span class="waffle-big">${Ld(n[0],e.hass)}</span>
          <span class="waffle-caption">${s.name}</span>
        </div>`:R;return W`<div class="parts">
    <div class="waffle-box">${xu(n,a,o,Od(e,"editor_style_waffle"))}</div>
    <div class="waffle-side">${l}${Nd(i,e)}</div>
  </div>`}(e,t)}};function ku(e,t){return Ce($n[e%$n.length])}function Mu(e,t){const o=Math.round(Math.min(100,Math.max(0,t)));return o>=100?e:`color-mix(in srgb, ${e} ${o}%, var(--card-background-color, #fff))`}const zu=["funnel","pyramid"],Su=["first","previous","none"],Au=["series","bands"];function Eu(e,t){const o=e=>Math.round(100*e)/100,a=o((100-e)/2),n=o((100-t)/2);return`${a},0 ${o(100-a)},0 ${o(100-n)},10 ${n},10`}const Cu=[{name:"funnel_shape",path:["shape"],default:"funnel"},{name:"funnel_percent_of",path:["percent_of"],default:"first"},{name:"funnel_color_by",path:["color_by"],default:"series"}];function ju(e,t,o){const a=e[t];if(void 0!==a&&!o.includes(a))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)}const Nu={layout:"chart",group:"totals",height:240,styles:r`
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
    <polygon points="23,29 41,29 38,37 26,37" fill="var(--primary-color, #03a9f4)" />`,validate(e){ju(e,"shape",zu),ju(e,"percent_of",Su),ju(e,"color_by",Au)},editor:function(e){const t=Xi("funnel",e.hass,()=>[{name:"funnel_shape",selector:Oi(e.hass,"funnel_shape",zu)},{type:"grid",name:"",schema:[{name:"funnel_percent_of",selector:Oi(e.hass,"funnel_percent_of",Su)},{name:"funnel_color_by",selector:Oi(e.hass,"funnel_color_by",Au)}]}]);return Ji(e,"chart",t,Cu)},render(e){const{items:t,raw:o,hass:a,config:n}=e,r=o.shape??"funnel",i="bands"===o.color_by,s=t.map(e=>e.available?e.value:null),l=function(e){const t=Math.max(0,...e.map(e=>null!==e&&e>0?e:0));return e.map(e=>t>0&&null!==e&&e>0?e/t*100:0)}(s),c=function(e,t){return e.map((o,a)=>{if(o<=0)return{top:0,bottom:0};const n=e[a+1],r=a===e.length-1;return"pyramid"===t?{top:r?0:n>0?n:.8*o,bottom:o}:{top:o,bottom:!r&&n>0?n:.8*o}})}(l,r),d=function(e,t){return"none"===t?e.map(()=>null):e.map((o,a)=>{if(null===o)return null;if("previous"===t&&0===a)return 100;const n="first"===t?e[0]:e[a-1];return null!=n&&n>0?o/n*100:null})}(s,o.percent_of??"first"),{show:u}=n,h=u.name||u.value,p=t.map((e,t)=>{const o=function(e,t,o){if(o)return e.band.color;const a=e.config.color;return"string"==typeof a&&a?a:$n[t%$n.length]}(e,t,i),n=d[t],r=null===n?"":`${Fn(n,0,a)}%`,s=l[t]<22?"theme":Le(o),p=Se(e.config),{top:m,bottom:f}=c[t],g=l[t]>0;return W`<div
        class="entity stage ${p?"interactive":""} ${e.available?"":"unavailable"}"
        data-index=${t}
        role="img"
        aria-label=${r?`${e.label}, ${r}`:e.label}
        tabindex=${p?0:R}
      >
        <div class="shape">
          <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
            ${g?Z`<polygon points=${Eu(m,f)} fill=${Ce(o)}></polygon>`:Z`<polygon class="empty" points=${Eu(30,30)}></polygon>`}
          </svg>
          ${r?W`<div class="percent ${s}" aria-hidden="true">${r}</div>`:R}
        </div>
        ${h?W`<div class="label" aria-hidden="true">
                ${u.name?W`<span class="name">${e.name}</span>`:R}
                ${u.value?W`<span class="value">${e.display}</span>`:R}
              </div>`:R}
      </div>`});"pyramid"===r&&p.reverse();const m=zt(a,"funnel_aria",{style:zt(a,`editor_funnel_shape_${r}`).replace(/ \(.*\)$/,""),names:t.map(e=>e.name).join(", ")});return W`<div class="funnel ${h?"":"no-labels"}" role="group" aria-label=${m}>${p}</div>`}},Lu=["floor","area","device","label"];function Ou(e){if(null==e||""===e)return[];const t=Array.isArray(e)?e:[e];if(t.some(e=>!Lu.includes(e)))throw new Error(`"group_by" must be one or more of: ${Lu.join(", ")}`);return Lu.filter(e=>t.includes(e))}function Tu(e){Ou(e.group_by),(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.group:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "group" must be text, such as "Kitchen" or "Ground floor / Kitchen"`)})}function Fu(e){return"string"!=typeof e?[]:e.split("/").map(e=>e.trim()).filter(Boolean)}function Pu(e){const t=e.replace(/_/g," ").trim();return t.charAt(0).toUpperCase()+t.slice(1)}function Du(e,t,o,a){const n=Fu(e.config.group);return n.length?n:t.map(t=>function(e,t,o){const a=o,n=a.entities?.[e],r=n?.device_id?a.devices?.[n.device_id]:void 0,i=n?.area_id??r?.area_id??void 0;switch(t){case"area":return i?a.areas?.[i]?.name??Pu(i):void 0;case"floor":{const e=i?a.areas?.[i]?.floor_id:void 0;return e?a.floors?.[e]?.name??Pu(e):void 0}case"device":return r?r.name_by_user??r.name??void 0:void 0;case"label":{const e=[...n?.labels??[],...r?.labels??[]][0];return e?a.labels?.[e]?.name??Pu(e):void 0}}}(e.entityId,t,o)??a)}function Uu(e,t,o){const a={name:o,path:[],value:0,depth:0,children:[]};e.forEach((e,o)=>{let n=a;for(const a of t[o]??[]){let e=n.children.find(e=>void 0===e.entity&&e.name===a);e||(e={name:a,path:[...n.path,a],value:0,depth:n.depth+1,children:[]},n.children.push(e)),n=e}n.children.push({name:e.name,path:n.path,value:0,depth:n.depth+1,children:[],entity:e,index:o})});const n=e=>{e.value=e.entity?function(e){return e.available&&null!==e.value&&e.value>0?e.value:0}(e.entity):e.children.reduce((e,t)=>e+n(t),0);const t=new Map(e.children.map((e,t)=>[e,t]));return e.children.sort((e,o)=>o.value-e.value||t.get(e)-t.get(o)),e.value};return n(a),a}function Hu(e,t){let o=e;for(const a of t)if(o=o.children.find(e=>void 0===e.entity&&e.name===a),!o)return;return o}function Iu(e){return e.children.length?1+Math.max(...e.children.map(Iu)):0}function Bu(e){const t=[],o=(e,a,n,r)=>{if(t.push({node:e,level:a,x0:n,x1:r}),e.value<=0)return;let i=n;for(const t of e.children){if(t.value<=0)continue;const s=(r-n)*t.value/e.value;o(t,a+1,i,i+s),i+=s}};return o(e,0,0,1),t}const Wu=2*Math.PI;function Zu(e,t){return[qu(e*Math.sin(t)),qu(-e*Math.cos(t))]}function qu(e){return Math.round(100*e)/100||0}function Ru(e,t,o,a){if(t<=0||a<=o)return"";const n=Math.max(0,e);if(a-o>=Wu-1e-6){const e=(e,t)=>{const[o,a]=Zu(e,0),[n,r]=Zu(e,Math.PI);return`M${o} ${a}A${e} ${e} 0 1 ${t} ${n} ${r}A${e} ${e} 0 1 ${t} ${o} ${a}Z`};return n>0?`${e(t,1)}${e(n,0)}`:e(t,1)}const r=a-o>Math.PI?1:0,[i,s]=Zu(t,o),[l,c]=Zu(t,a),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===n)return`${d}L0 0Z`;const[u,h]=Zu(n,a),[p,m]=Zu(n,o);return`${d}L${u} ${h}A${n} ${n} 0 ${r} 0 ${p} ${m}Z`}function Vu(e,t){return t>0?e*Wu/t:0}function Yu(e){return e.map(([e,t])=>`${e},${t}`).join(" ")}function Gu(e){const t=Math.sin(e);return Math.abs(t)<.2?"middle":t>0?"start":"end"}function Xu(e,t,o,a,n=void 0){const r=e.config.entities??[],i=r.length,s=Xi(`${t}-${i}`,e.hass,()=>r.map((e,t)=>({name:`e${t}`,selector:a}))),l=e=>{const t=r[e];return"object"==typeof t?t[o]:void 0},c={};for(let d=0;d<i;d++)c[`e${d}`]=l(d)??n;return W`<div class="entity-options" data-section=${t}>
    <div style="margin: 16px 0 4px; font-weight: 500">${zt(e.hass,`editor_${t}`)}</div>
    ${0===i?W`<div style="color: var(--secondary-text-color)">
            ${zt(e.hass,"editor_entity_options_none")}
          </div>`:W`<ha-form
            .hass=${e.hass}
            .data=${c}
            .schema=${s}
            .computeLabel=${t=>{const o=jt(r[Number(t.name.slice(1))]),a=e.hass?.states[o]?.attributes?.friendly_name;return"string"==typeof a&&a?a:o}}
            @value-changed=${t=>{t.stopPropagation();const a=t.detail?.value??{};let r=e.config;for(let e=0;e<i;e++){const t=a[`e${e}`],i=t===n||""===t?void 0:t;i!==l(e)&&(r=Nt(r,e,o,i))}r!==e.config&&e.commit(r)}}
          ></ha-form>`}
  </div>`}const Ju=[{name:"group_by",path:["group_by"],default:[]}];function Ku(e){return{name:"group_by",selector:{select:{multiple:!0,mode:"list",options:Lu.map(t=>({value:t,label:zt(e,`editor_group_by_${t}`)}))}}}}function Qu(e){const t=e.config.group_by;if(void 0===t||Array.isArray(t))return e;let o;try{o=Ou(t)}catch{return e}return{...e,config:{...e.config,group_by:o}}}function eh(e){return Xu(e,"entity_groups","group",{text:{}})}const th={group_by:"editor_hierarchy_group_by"},oh=["limits","shared"],ah={aqi:"AQI",carbon_dioxide:"CO₂",carbon_monoxide:"CO",pm1:"PM1",pm10:"PM10",pm25:"PM2.5",volatile_organic_compounds:"VOC",volatile_organic_compounds_parts:"VOC"};function nh(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}function rh(e,t,o){const a=Ou(t.group_by),n=a.length>0||e.some(e=>Fu(e.config.group).length),r=t.scale??"limits",i=e.filter(e=>e.available&&null!==e.value).map(e=>e.value),s=i.length?Math.max(...i):0,l=e=>{const t=e.config.axis;return"string"==typeof t&&t.trim()?t.trim():void 0};if(!n)return{axes:e.map(e=>({name:l(e)??e.name,entity:e})),series:[{name:"",color:ku(0),points:e.map((e,t)=>({index:t,axis:t,r:nh(e,r,s)}))}]};const c=zt(o,"radar_other"),d=[],u=[];return e.forEach((e,t)=>{const n=e.stateObj?.attributes?.device_class,i=l(e)??("string"==typeof n?function(e){if(ah[e])return ah[e];const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}(n):e.name);let h=d.findIndex(e=>e.name===i);-1===h&&(h=d.push({name:i})-1);const p=Du(e,a,o,c).join(" / ")||c;let m=u.find(e=>e.name===p);m||(m={name:p,color:ku(u.length),points:[]},u.push(m)),m.points.push({index:t,axis:h,r:nh(e,r,s)})}),{axes:d,series:u}}const ih=[{name:"radar_scale",path:["scale"],default:"limits"},{name:"radar_fill",path:["fill"],default:!0},...Ju];const sh={layout:"chart",group:"compare",height:280,styles:r`
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2" stroke-linejoin="round" />`,validate(e){if(Tu(e),void 0!==e.scale&&!oh.includes(e.scale))throw new Error(`"scale" must be one of: ${oh.join(", ")}`);if(void 0!==e.fill&&"boolean"!=typeof e.fill)throw new Error('"fill" must be true or false');(e.entities??[]).forEach((e,t)=>{const o="object"==typeof e&&e?e.axis:void 0;if(null!=o&&"string"!=typeof o)throw new Error(`Entity ${t+1}: "axis" must be text`)})},editor:function(e){const t=Xi("radar",e.hass,()=>[{name:"radar_scale",selector:Oi(e.hass,"radar_scale",oh)},{name:"radar_fill",selector:{boolean:{}}},Ku(e.hass)]);return W`${Ji(Qu(e),"chart",t,ih,th)} ${eh(e)}
  ${Xu(e,"radar_axis","axis",{text:{}})}`},render(e){const t=rh(e.items,e.raw,e.hass),o=t.axes.length,a=1===t.series.length&&""===t.series[0].name,n=!1!==e.raw.fill,r=zt(e.hass,"radar_aria",{names:(a?e.items.map(e=>e.name):t.series.map(e=>e.name)).join(", ")});return W`<svg
        class="radar-plot"
        viewBox="${-170} ${-120} ${340} ${240}"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label=${r}
      >
        ${function(e){const t=Array.from({length:4},(e,t)=>84*(t+1)/4);return Z`${t.map(t=>e>=3?Z`<polygon class="grid" points=${Yu(Array.from({length:e},(o,a)=>Zu(t,Vu(a,e))))}></polygon>`:Z`<circle class="grid" r=${t}></circle>`)}
    ${Array.from({length:e},(t,o)=>{const[a,n]=Zu(84,Vu(o,e));return Z`<line class="grid spoke" x1="0" y1="0" x2=${a} y2=${n}></line>`})}`}(o)} ${function(e,t,o){const a=e.axes.length,n=o&&t.config.show.value;return Z`${e.axes.map((e,o)=>{const r=Vu(o,a),[i,s]=Zu(96,r),l=Gu(r),c=Math.cos(r)<-.2,d=n&&e.entity?2:1,u=c?10:Math.abs(Math.cos(r))<=.2?4-6*(d-1):12*-(d-1);return Z`<text class="axis-label" x=${i} y=${s+u} text-anchor=${l}>
      ${t.config.show.name||!n?Z`<tspan>${e.name}</tspan>`:R}
      ${n&&e.entity?Z`<tspan class="axis-value ${e.entity.available?"":"muted"}" x=${i} dy="13">${e.entity.display}</tspan>`:R}
    </text>`})}`}(t,e,a)}
        <g class="radar-grow">
          <circle r=${84} fill="none" stroke="none"></circle>
          ${t.series.map(t=>function(e,t,o,a){const n=e.points.filter(e=>null!==e.r).sort((e,t)=>e.axis-t.axis).map(e=>({p:e,xy:Zu(84*e.r,Vu(e.axis,t))}));return Z`<g class="series">
    ${n.length>1?Z`<polygon class="area ${a?"filled":""}" points=${Yu(n.map(e=>e.xy))}
            stroke=${e.color} fill=${a?e.color:"none"}></polygon>`:R}
    ${n.map(({p:t,xy:a})=>Z`<g class="entity marker" data-index=${t.index} tabindex="0" aria-label=${o[t.index].label}
        role="img">
        <circle class="hit" cx=${a[0]} cy=${a[1]} r="9"></circle>
        <circle class="dot" cx=${a[0]} cy=${a[1]} r="3.5" stroke=${e.color}></circle>
      </g>`)}
  </g>`}(t,o,e.items,n))}
        </g>
      </svg>
      ${a?R:W`<div class="radar-legend">
              ${t.series.map(e=>W`<span class="radar-legend-item"
                    ><span class="swatch" style="background:${e.color}"></span>${e.name}</span
                  >`)}
            </div>`}`}},lh=["shared","limits"],ch=["series","shades","bands"];const dh=[{name:"polar_scale",path:["scale"],default:"shared"},{name:"polar_color_by",path:["color_by"],default:"series"},{name:"polar_color",path:["color"],default:"primary"}],uh=Object.keys(Ee);const hh={layout:"chart",group:"compare",height:260,styles:r`
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
      <path d=${Ru(0,18,-.6,.6)} fill="var(--primary-color, #03a9f4)" />
      <path d=${Ru(0,12,.65,1.85)} fill="var(--warning-color, #ffa600)" />
      <path d=${Ru(0,15,1.9,3.1)} fill="var(--success-color, #43a047)" />
      <path d=${Ru(0,9,3.15,4.35)} fill="var(--error-color, #db4437)" />
      <path d=${Ru(0,13,4.4,5.6)} fill="var(--purple-color, #8b6cff)" />
    </g>`,validate(e){if(void 0!==e.scale&&!lh.includes(e.scale))throw new Error(`"scale" must be one of: ${lh.join(", ")}`);if(void 0!==e.color_by&&!ch.includes(e.color_by))throw new Error(`"color_by" must be one of: ${ch.join(", ")}`);if(void 0!==e.color&&("string"!=typeof e.color||!e.color))throw new Error('"color" must be a colour name, such as "primary", or any CSS colour')},editor:function(e){const t=Xi("polar_area",e.hass,()=>[{name:"polar_scale",selector:Oi(e.hass,"polar_scale",lh)},{type:"grid",name:"",schema:[{name:"polar_color_by",selector:Oi(e.hass,"polar_color_by",ch)},{name:"polar_color",selector:{select:{mode:"dropdown",custom_value:!0,options:uh.map(t=>({value:t,label:zt(e.hass,`editor_color_${t}`)}))}}}]}]);return Ji(e,"chart",t,dh)},render(e){const t=e.raw.scale??"shared",o=e.raw.color_by??"series",a=e.raw.color??"primary",n=e.items.length,r=e.items.filter(e=>e.available&&null!==e.value).map(e=>e.value),i=r.length?Math.max(0,...r):0,s=e.items.map((e,r)=>{const s=function(e,t,o){return e.available&&null!==e.value?"limits"===t?e.position:o>0?Math.min(1,Math.max(0,e.value/o)):0:null}(e,t,i);if(null===s||s<=0)return R;const[l,c]=function(e,t){if(t<=1)return[0,2*Math.PI];const o=Math.PI/t,a=Vu(e,t);return[a-o+.02,a+o-.02]}(r,n),d=6+86*s;return Z`<path class="entity slice" data-index=${r} tabindex="0" role="img" aria-label=${e.label}
        d=${Ru(6,d,l,c)} fill=${function(e,t,o,a,n){return"bands"===a?Ce(e.band.color):"shades"===a?Mu(Ce(n),30+70*o):ku(t)}(e,r,s,o,a)}></path>`}),l=zt(e.hass,"polar_area_aria",{names:e.items.map(e=>e.name).join(", ")});return W`<svg
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
      ${function(e,t,o){const a=e.items.find(e=>e.available);if("shared"!==t||!a||o<=0)return Z``;const n=e.items.length>1?Math.PI/e.items.length:0;return Z`${Array.from({length:3},(t,r)=>{const i=92*(r+1)/3,[s,l]=Zu(i,n),c=Pn(Fn(o*(r+1)/3,a.decimals,e.hass),a.unit);return Z`<text class="ring-label" x=${s+3} y=${l-2}>${c}</text>`})}`}(e,t,i)} ${function(e){const t=e.items.length,{show:o}=e.config;return o.name||o.value?Z`${e.items.map((e,a)=>{const n=Vu(a,t),[r,i]=Zu(104,n),s=Math.cos(n)<-.2,l=o.name&&o.value?2:1,c=s?10:Math.abs(Math.cos(n))<=.2?4-6*(l-1):13*-(l-1);return Z`<text class="slice-label ${e.available?"":"muted"}" x=${r} y=${i+c} text-anchor=${Gu(n)}>
      ${o.name?Z`<tspan>${e.name}</tspan>`:R}
      ${o.value?Z`<tspan class="slice-value" x=${r} dy=${o.name?13:0}>${e.display}</tspan>`:R}
    </text>`})}`:Z``}(e)}
    </svg>`}},ph=new WeakMap;function mh(e){return!1!==e.drill_down}function fh(e){if(void 0!==e.drill_down&&"boolean"!=typeof e.drill_down)throw new Error('"drill_down" must be true or false')}function gh(e,t){ph.set(e.host,t),e.requestUpdate()}function vh(e,t){return mh(e.raw)?function(e,t){let o=e;const a=[];for(const n of t){const e=Hu(o,[n]);if(!e||e.value<=0)break;o=e,a.push(n)}return{node:o,path:a}}(t,(o=e.host,ph.get(o)??[])):{node:t,path:[]};var o}function yh(e,t,o){if(!mh(e.raw)||t.entity||t.value<=0)return;const a=()=>gh(e,t.path);return{label:zt(e.hass,"drill_into",{label:o}),click:e=>{e.stopPropagation(),a()},keydown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),a())}}}function bh(e,t,o,a){if(!o.path.length)return R;const n=o.path.slice(0,-1),r=n.length&&Hu(t,n)?.name||zt(e.hass,"drill_top");return W`<div class="drill-bar">
    <button
      type="button"
      class="drill-back"
      aria-label=${zt(e.hass,"drill_back",{name:r})}
      @click=${()=>gh(e,n)}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z" fill="currentColor"></path>
      </svg>
      <span>${r}</span>
    </button>
    <div class="drill-current">
      <span class="drill-name">${o.node.name}</span>
      ${a?W`<span class="drill-total">${a}</span>`:R}
    </div>
  </div>`}const _h=r`
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
`;function xh(e,t){const o=e.reduce((e,t)=>e+t,0);if(o<=0||t<=0)return 1/0;const a=Math.max(...e),n=Math.min(...e),r=t*t;return Math.max(r*a/(o*o),o*o/(r*n))}function wh(e,t){const o=Math.min(t,e.w/2,e.h/2);return{x:e.x+o,y:e.y+o,w:e.w-2*o,h:e.h-2*o}}const $h=["group","bands"],kh=240;function Mh(e,t,o,a){const n=[],r=[],i=(e,t,o,s)=>{const l=e.children.filter(e=>e.value>0),c=function(e,t){const o=e.map(()=>({x:t.x,y:t.y,w:0,h:0})),a=e.map((e,t)=>({v:Number.isFinite(e)&&e>0?e:0,i:t})).filter(e=>e.v>0).sort((e,t)=>t.v-e.v||e.i-t.i),n=a.reduce((e,t)=>e+t.v,0);if(n<=0||t.w<=0||t.h<=0)return o;const r=t.w*t.h/n;let{x:i,y:s,w:l,h:c}=t,d=[];const u=()=>{const e=d.reduce((e,t)=>e+t.area,0);if(l>=c){const t=e/c;let a=s;for(const e of d){const n=e.area/t;o[e.i]={x:i,y:a,w:t,h:n},a+=n}i+=t,l-=t}else{const t=e/l;let a=i;for(const e of d){const n=e.area/t;o[e.i]={x:a,y:s,w:n,h:t},a+=n}s+=t,c-=t}d=[]};for(const h of a){const e=h.v*r,t=Math.min(l,c),o=d.map(e=>e.area);0===d.length||xh([...o,e],t)<=xh(o,t)||u(),d.push({area:e,i:h.i})}return d.length&&u(),o}(l.map(e=>e.value),t);l.forEach((e,t)=>{const l=c[t],d=s&&void 0===a?t:o;if(e.entity)return void r.push({node:e,rect:wh(l,1.5),series:d,rank:t});const u=wh(l,1.5),h=u.h>=44&&u.w>=56;n.push({node:e,rect:u,series:d,head:h});const p=wh(h?{...u,y:u.y+22-3,h:u.h-22+3}:u,3);i(e,p,d,!1)})};return i(e,{x:0,y:0,w:t,h:o},a??0,!0),{groups:n,leaves:r}}function zh(e,t,o){const a=t.items.find(e=>e.available)?.decimals??1;return Pn(Fn(e,a,t.hass),o)}const Sh=new WeakMap,Ah=new WeakMap;const Eh=(e,t)=>e/t*100+"%";function Ch(e,t){return`left:${Eh(e.x,t)};top:${Eh(e.y,kh)};width:${Eh(e.w,t)};height:${Eh(e.h,kh)}`}function jh(e,t,o,a,n){const r=e.node.entity,i=function(e,t){const o=e.node.entity;if("bands"===t)return o.band.color;const a=o.config.color;return"string"==typeof a&&a?a:$n[e.series%$n.length]}(e,a),s="group"===a&&e.node.path.length?Mu(Ce(i),Math.max(70,100-12*(e.rank??0))):Ce(i),l=Le(i),{w:c,h:d}=e.rect,{show:u}=t.config,h=c>=120&&d>=70&&null!==r.value&&r.value>=.25*n,p=d>=20&&c>=44,m=u.value&&d>=36;return W`<div
    class="entity tile text-${l} ${h?"big":""}"
    data-index=${e.node.index}
    tabindex="0"
    role="img"
    aria-label=${r.label}
    title=${r.label}
    style="${Ch(e.rect,o)};background:${s}"
  >
    ${p&&u.name?W`<span class="tile-name">${r.name}</span>`:R}
    ${p&&m?W`<span class="tile-value">${r.display}</span>`:R}
  </div>`}const Nh=[{name:"treemap_color_by",path:["color_by"],default:"group"},...Ju,{name:"drill_down",path:["drill_down"],default:!0}];const Lh={layout:"chart",group:"totals",height:280,styles:r`
    ${_h}
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
      height: ${kh}px;
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
      height: ${kh}px;
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
    <rect x="50" y="23" width="10" height="13" rx="3" fill="var(--success-color, #43a047)" opacity="0.7" />`,validate(e){if(Tu(e),fh(e),void 0!==e.color_by&&!$h.includes(e.color_by))throw new Error(`"color_by" must be one of: ${$h.join(", ")}`)},editor:function(e){const t=Xi("treemap",e.hass,()=>[{name:"treemap_color_by",selector:Oi(e.hass,"treemap_color_by",$h)},Ku(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return W`${Ji(Qu(e),"chart",t,Nh,th)} ${eh(e)}`},disconnect:function(e){Ah.get(e)?.disconnect(),Ah.delete(e)},render(e){const t=function(e){const t=e.host;if(!Ah.has(t)&&"function"==typeof ResizeObserver){const o=new ResizeObserver(()=>{const o=t.shadowRoot?.querySelector(".treemap"),a=o?.clientWidth??0;a>0&&Math.abs(a-(Sh.get(t)??0))>=1&&(Sh.set(t,a),e.requestUpdate())});o.observe(t),Ah.set(t,o)}return Sh.get(t)??400}(e),o=function(e){const t=Ou(e.raw.group_by),o=zt(e.hass,"treemap_other"),a=e.items.map(a=>Du(a,t,e.hass,o));return Uu(e.items,a,"")}(e),a=vh(e,o),n=a.node,r=e.raw.color_by??"group",i=function(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}(e.items),s=a.path.length?o.children.filter(e=>e.value>0).findIndex(e=>e.name===a.path[0]):void 0,{groups:l,leaves:c}=Mh(n,t,kh,s),d=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available),u=void 0!==i&&e.config.show.value&&n.value>0?zh(n.value,e,i):"",h=u&&!a.path.length?zt(e.hass,"treemap_total",{value:u}):"",p=zt(e.hass,"treemap_aria",{names:(n.children.length?n.children:[]).map(e=>e.name).join(", ")}),m=c.length?W`<div class="treemap" role="img" aria-label=${p}>
          ${l.map(o=>function(e,t,o,a,n){const r=Ce($n[e.series%$n.length]),i=void 0===n?"":zh(e.node.value,t,n),s=yh(t,e.node,i?`${e.node.name}, ${i}`:e.node.name);return W`<div
    class="group ${s?"drillable":""}"
    style="${Ch(e.rect,o)};background:${"bands"===a?"var(--cd-track)":Mu(r,14)}"
    role=${s?"button":R}
    tabindex=${s?0:R}
    aria-label=${s?.label??R}
    data-path=${e.node.path.join("/")}
    @click=${s?.click}
    @keydown=${s?.keydown}
  >
    ${e.head?W`<div class="group-head">
            <span class="group-name">${e.node.name}</span>
            ${t.config.show.value&&i&&e.rect.w>=110?W`<span class="group-total">${i}</span>`:R}
          </div>`:R}
  </div>`}(o,e,t,r,i))}
          ${c.map(o=>jh(o,e,t,r,n.value))}
        </div>`:W`<div class="treemap-message">${zt(e.hass,"treemap_empty")}</div>`;return W`${bh(e,o,a,u)}
    ${h?W`<div class="treemap-head"><span class="treemap-total">${h}</span></div>`:R} ${m}
    ${d.length?W`<div class="treemap-missing">
            <span>${zt(e.hass,"treemap_no_reading")}</span>
            ${d.map(({e:e,index:t})=>W`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
                  >${e.name} (${e.display})</span
                >`)}
          </div>`:R}`}},Oh=["full","half"],Th=["group","bands"],Fh=240;function Ph(e){return Math.max(45,100-20*(e-1))}function Dh(e){const t=Ou(e.raw.group_by),o=zt(e.hass,"hierarchy_other"),a=e.items.map(a=>Du(a,t,e.hass,o));return Uu(e.items,a,zt(e.hass,"hierarchy_total"))}function Uh(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:void 0}function Hh(e,t){const o=new Map,a=new Map;let n=0;for(const{node:r,level:i}of e){if(0===i)continue;const e=r.entity?r.entity.config.color:void 0;let s;s=1===i?"string"==typeof e&&e?e:$n[n++%$n.length]:a.get(r)??"grey";for(const t of r.children)a.set(t,s);if("bands"===t){o.set(r,r.entity?{fill:Ce(r.entity.band.color),text:Le(r.entity.band.color)}:{fill:"var(--cd-track)",text:"theme"});continue}const l=Ph(i);o.set(r,{fill:Mu(Ce(s),l),text:l>=100?Le(s):"theme"})}return o}function Ih(e,t,o){const a=t.items.find(e=>e.available)?.decimals??1;return Pn(Fn(e,a,t.hass),o)}function Bh(e,t,o){return e.entity?e.entity.label:void 0===o?e.name:`${e.name}, ${Ih(e.value,t,o)}`}function Wh(e){const t=e.items.map((e,t)=>({e:e,index:t})).filter(({e:e})=>!e.available);return t.length?W`<div class="hierarchy-missing">
    <span>${zt(e.hass,"hierarchy_no_reading")}</span>
    ${t.map(({e:e,index:t})=>W`<span class="entity" data-index=${t} tabindex="0" aria-label=${e.label}
          >${e.name} (${e.display})</span
        >`)}
  </div>`:R}const Zh=[{name:"hierarchy_color_by",path:["color_by"],default:"group"},...Ju,{name:"drill_down",path:["drill_down"],default:!0}],qh=[{name:"sunburst_shape",path:["shape"],default:"full"},...Zh];function Rh(e,t){if(Tu(e),fh(e),void 0!==e.color_by&&!Th.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Th.join(", ")}`);if(t&&void 0!==e.shape&&!Oh.includes(e.shape))throw new Error(`"shape" must be one of: ${Oh.join(", ")}`)}function Vh(e,t,o=t){if(t.value<=0)return W`<div class="hierarchy-message">${zt(e.hass,"hierarchy_empty")}</div>`;const a=e.raw.shape??"full",n=e.raw.color_by??"group",r=Uh(e.items),i=Bu(t),s=Hh(Bu(o),n),l=function(e,t){const o=72/Math.max(1,t);return{start:"half"===e?-Math.PI/2:0,sweep:"half"===e?Math.PI:2*Math.PI,radii:e=>[40+(e-1)*o,40+e*o],viewBox:"half"===e?"-116 -116 232 124":"-116 -116 232 232"}}(a,Iu(t)),c=i.filter(e=>e.level>0).map(t=>{const[o,a]=l.radii(t.level),n=Ru(o,a,l.start+t.x0*l.sweep,l.start+t.x1*l.sweep),i=Bh(t.node,e,r),c=s.get(t.node).fill;return t.node.entity?Z`<path class="entity arc leaf" data-index=${t.node.index} tabindex="0" role="img"
            aria-label=${i} d=${n} fill=${c}><title>${i}</title></path>`:function(e,t,o,a,n){const r=yh(e,t,o);return Z`<path
    class="arc group ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":R}
    tabindex=${r?0:R}
    aria-label=${r?.label??o}
    d=${a}
    fill=${n}
    @click=${r?.click}
    @keydown=${r?.keydown}
  ><title>${o}</title></path>`}(e,t.node,i,n,c)}),d=void 0!==r&&e.config.show.value?Ih(t.value,e,r):"",u=t.children.filter(e=>e.value>0).map(e=>e.name);return W`<div class="sunburst-wrap ${a}">
    <svg
      class="sunburst"
      viewBox=${l.viewBox}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label=${zt(e.hass,"sunburst_aria",{names:u.join(", ")})}
    >
      <g class="sunburst-grow">${c}</g>
    </svg>
    <div class="sunburst-centre">${d?W`<span class="centre-value">${d}</span>`:R}</div>
  </div>`}function Yh(e,t,o=t){const a=e.raw.color_by??"group",n=Uh(e.items),r=Hh(Bu(o),a),i=t.children.filter(e=>e.value>0);return W`<div class="hierarchy-legend">
    ${i.map(t=>{const o=W`<span class="swatch" style="background:${r.get(t)?.fill}"></span>`,a=e.config.show.value&&void 0!==n?W`<span class="legend-value">${Ih(t.value,e,n)}</span>`:R;return t.entity?W`<span class="entity legend-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}
            >${o}${t.name} ${a}</span
          >`:function(e,t,o,a,n){const r=yh(e,t,Bh(t,e,n));return W`<span
    class="legend-item ${r?"drillable":""}"
    data-path=${t.path.join("/")}
    role=${r?"button":R}
    tabindex=${r?0:R}
    aria-label=${r?.label??R}
    @click=${r?.click}
    @keydown=${r?.keydown}
    >${o}${t.name} ${a}</span
  >`}(e,t,o,a,n)})}
  </div>`}function Gh(e,t,o=t){if(t.value<=0)return W`<div class="hierarchy-message">${zt(e.hass,"hierarchy_empty")}</div>`;const a=e.raw.color_by??"group",n=Uh(e.items),r=Bu(t),i=Hh(Bu(o),a),s=Iu(t)+1,{show:l}=e.config,c=t.children.filter(e=>e.value>0).map(e=>e.name);return W`<div
    class="icicle"
    role="img"
    aria-label=${zt(e.hass,"icicle_aria",{names:c.join(", ")})}
  >
    ${r.map(t=>{const o=(t.x1-t.x0)*Fh,a=`left:${t.level/s*100}%;width:${100/s}%;top:${100*t.x0}%;height:${100*(t.x1-t.x0)}%`,r=Bh(t.node,e,n),c=0===t.level?void 0:i.get(t.node),d=t.node.entity?t.node.entity.display:void 0!==n?Ih(t.node.value,e,n):"",u=W`<div class="cell-fill" style=${c?`background:${c.fill}`:""}>
        ${o>=18&&(l.name||0===t.level)?W`<span class="cell-name">${t.node.name}</span>`:R}
        ${o>=34&&l.value&&d?W`<span class="cell-value">${d}</span>`:R}
      </div>`,h=`cell level-${Math.min(t.level,1)} text-${c?.text??"root"}`;return t.node.entity?W`<div
            class="entity ${h} leaf"
            data-index=${t.node.index}
            tabindex="0"
            role="img"
            aria-label=${r}
            title=${r}
            style=${a}
          >
            ${u}
          </div>`:function(e,t,o,a,n,r){const i=o.includes("text-root")?void 0:yh(e,t,a);return W`<div
    class="${o} group ${i?"drillable":""}"
    data-path=${t.path.join("/")}
    title=${a}
    style=${n}
    role=${i?"button":R}
    tabindex=${i?0:R}
    aria-label=${i?.label??R}
    @click=${i?.click}
    @keydown=${i?.keydown}
  >
    ${r}
  </div>`}(e,t.node,h,r,a,u)})}
  </div>`}const Xh=r`
  ${_h}
  .hierarchy-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${Fh}px;
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
`,Jh={layout:"chart",group:"totals",height:290,styles:r`
    ${Xh}
    .sunburst-wrap {
      position: relative;
      height: ${Fh}px;
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
    <path d="M48 26 A17 17 0 0 1 32 37 L32 31 A11 11 0 0 0 42 25 Z" fill="var(--warning-color, #f59e0b)" opacity="0.6" />`,validate:e=>Rh(e,!0),editor:function(e){const t=Xi("sunburst",e.hass,()=>[{type:"grid",name:"",schema:[{name:"sunburst_shape",selector:Oi(e.hass,"sunburst_shape",Oh)},{name:"hierarchy_color_by",selector:Oi(e.hass,"hierarchy_color_by",Th)}]},Ku(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return W`${Ji(Qu(e),"chart",t,qh,th)}
  ${eh(e)}`},render(e){const t=Dh(e),o=vh(e,t);return W`${bh(e,t,o,"")} ${Vh(e,o.node,t)}
    ${o.node.value>0?Yh(e,o.node,t):R} ${Wh(e)}`}},Kh={layout:"chart",group:"totals",height:280,styles:r`
    ${Xh}
    .icicle {
      position: relative;
      height: ${Fh}px;
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
    <rect x="41" y="25" width="19" height="11" rx="2" fill="var(--warning-color, #f59e0b)" opacity="0.7" />`,validate:e=>Rh(e,!1),editor:function(e){const t=Xi("icicle",e.hass,()=>[{name:"hierarchy_color_by",selector:Oi(e.hass,"hierarchy_color_by",Th)},Ku(e.hass),{name:"drill_down",selector:{boolean:{}}}]);return W`${Ji(Qu(e),"chart",t,Zh,th)} ${eh(e)}`},render(e){const t=Dh(e),o=vh(e,t);return W`${bh(e,t,o,"")} ${Gh(e,o.node,t)} ${Wh(e)}`}};function Qh(e,t,o=5){if(!Number.isFinite(e)||!Number.isFinite(t))return[];e>t&&([e,t]=[t,e]),e===t&&(e-=.5,t+=.5);const a=function(e,t=5){if(!Number.isFinite(e)||e<=0||t<1)return 1;const o=e/t,a=10**Math.floor(Math.log10(o)),n=o/a;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*a}(t-e,o),n=Math.floor(e/a+1e-9)*a,r=Math.ceil(t/a-1e-9)*a,i=[];for(let s=0,l=n;l<=r+a/2&&s<100;s++,l=n+s*a)i.push(Number(l.toPrecision(12)));return i}function ep(e){let t=1/0,o=-1/0;for(const a of e)"number"==typeof a&&Number.isFinite(a)&&(a<t&&(t=a),a>o&&(o=a));return t===1/0?void 0:[t,o]}function tp(e,t){let o=null;for(const a of e){if(a.t>t)break;o=a.v}return o}const op=["grouped","stacked","percent"],ap=["series","bands"],np=$n;function rp(e,t,o="none"){const a=new Map,n=[];for(const l of e){let e=a.get(l.group);e||(e={key:l.group,label:l.group,segments:[],total:null},a.set(l.group,e)),n.includes(l.series)||n.push(l.series);const t=e.segments.length;e.segments.push({index:l.index,series:l.series,value:l.value,from:0,to:0,slot:t}),null!==l.value&&(e.total=(e.total??0)+l.value)}const r=[...a.values()];for(const l of r){const e=l.segments.reduce((e,t)=>e+Math.abs(t.value??0),0);let o=0,a=0;for(const n of l.segments){if(null===n.value)continue;const r="percent"===t?0===e?0:n.value/e:n.value;"grouped"===t?n.to=r:r>=0?(n.from=o,n.to=o+=r):(n.from=a,n.to=a+=r)}}const i=r.flatMap(e=>e.segments.flatMap(e=>null===e.value?[]:[e.from,e.to])),s=function([e,t]){return[Math.min(0,e),Math.max(0,t)]}(ep(i)??[0,1]);if(s[0]===s[1]&&(s[1]=1),"none"!==o){const e="ascending"===o?1:-1;r.sort((t,o)=>null===t.total!=(null===o.total)?null===t.total?1:-1:((t.total??0)-(o.total??0))*e)}return{rows:r,domain:s,series:n}}function ip(e,t){if("grouped"!==t)return 36;const o=Math.max(1,e.segments.length);return 12*o+3*(o-1)+16}function sp(e){return"string"==typeof e&&""!==e.trim()?e.trim():"number"==typeof e?String(e):void 0}function lp(e,t){return`${Fn(100*Math.abs(e),0,t)} %`}const cp=e=>`${(100*e).toFixed(3)}%`;const dp=[{name:"mode",path:["mode"],default:"grouped"},{name:"bars_color_by",path:["color_by"],default:"series"}];const up=[{name:"bar_group",path:["group"]},{name:"bar_series",path:["series"]},{name:"bar_color",path:["color"]}];const hp={layout:"chart",group:"compare",height:200,styles:r`
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
    <line x1="4" y1="3" x2="4" y2="37" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate:function(e){if(void 0!==e.mode&&!op.includes(e.mode))throw new Error(`"mode" must be one of: ${op.join(", ")}`);if(void 0!==e.color_by&&!ap.includes(e.color_by))throw new Error(`"color_by" must be one of: ${ap.join(", ")}`);(e.entities??[]).forEach((e,t)=>{if("object"==typeof e&&null!==e)for(const o of["group","series"]){const a=e[o];if(null!=a&&"string"!=typeof a&&"number"!=typeof a)throw new Error(`Entity ${t+1}: "${o}" must be text`)}})},editor:function(e){const t=Xi("grouped_bars",e.hass,()=>[{type:"grid",name:"",schema:[{name:"mode",selector:Oi(e.hass,"mode",op)},{name:"bars_color_by",selector:Oi(e.hass,"bars_color_by",ap)}]}]);return Ji(e,"chart",t,dp)},entityFields:e=>({schema:Xi("grouped_bars_entity",e,()=>[{type:"grid",name:"",schema:[{name:"bar_group",selector:{text:{}}},{name:"bar_series",selector:{text:{}}}]},{name:"bar_color",selector:{text:{}}}]),fields:up}),render:function(e){const{hass:t}=e,o=e.raw.mode??"grouped",a="bands"===e.raw.color_by,n=rp(function(e){return function(e){const t=e.config.entities;return e.items.map((e,o)=>({e:e,index:o,at:t.indexOf(e.config)})).sort((e,t)=>(-1===e.at?1/0:e.at)-(-1===t.at?1/0:t.at)||e.index-t.index)}(e).map(({e:e,index:t})=>{const o=e.config;return{index:t,group:sp(o.group)??`\0${t}`,series:sp(o.series)??"",value:e.available?e.value:null}})}(e),o,e.config.sort),[r,i]=n.domain,s=e=>(e-r)/(i-r),l=s(0),c=t=>{const o=e.items[t.index],r=o.config.color;return a?o.band.color:"string"==typeof r&&r?r:np[n.series.indexOf(t.series)%np.length]},{show:d}=e.config,u=!a&&n.series.some(e=>""!==e)&&!1!==e.raw.show?.legend,h=e.items.map(e=>e.display.length),p=d.value&&"percent"!==o?Math.min(12,Math.max(4,...h)):0,m=p?Math.round(6.5*p+8):4,f=Math.max(0,...n.rows.map(t=>(t.label.startsWith("\0")?e.items[t.segments[0].index].name:t.label).length));let g=0;const v=n.rows.map(e=>{const t=g;return g+=ip(e,o),{row:e,top:t}}),y=zt(t,"grouped_bars_aria",{names:e.items.map(e=>e.name).join(", ")}),b=r<0;return W`<div
    class="bars mode-${o}"
    role="img"
    aria-label=${y}
    style="--name-w:${d.name?`min(35%, calc(${f}ch + 16px))`:"0px"};--value-w:${m}px;--neg-w:${b?m:0}px"
  >
    <div class="bar-rows" style="height:${g}px">
      ${Me(v,e=>e.row.key,({row:a,top:n})=>W`<div class="bar-row" style="transform:translateY(${n}px);height:${ip(a,o)}px">
            ${d.name?W`<div class="row-name">
                    ${a.label.startsWith("\0")?e.items[a.segments[0].index].name:a.label}
                  </div>`:R}
            <div class="row-plot">
              <div class="zero" style="left:${cp(l)}"></div>
              ${a.segments.map(a=>(a=>{const n=e.items[a.index],r=c(a),i=s(Math.min(a.from,a.to)),u=Math.abs(s(a.to)-s(a.from)),h="grouped"===o?8+15*a.slot:8,p="grouped"===o?12:20,m=a.to<a.from||"grouped"===o&&a.to<0,f="percent"===o&&n.available?a.to-a.from:0,g="percent"===o&&d.value&&Math.abs(f)>=.12;return W`<div
        class="entity bar-seg ${m?"negative":""} ${n.available?"":"unavailable"}"
        data-index=${a.index}
        tabindex="0"
        role="button"
        aria-label=${"percent"===o&&n.available?`${n.label} (${lp(f,t)})`:n.label}
        style="left:${cp(i)};width:${cp(u)};top:${h}px;height:${p}px;background:${Ce(r)}"
      >
        ${g?W`<span class="seg-text ${Le(r)}" aria-hidden="true">${lp(f,t)}</span>`:R}
      </div>
      ${"grouped"===o&&d.value?W`<span
              class="bar-value ${n.available?"":"unavailable"} ${m?"left":""}"
              style="${m?"right":"left"}:${cp(m?1-s(a.to):n.available?s(a.to):l)};top:${h}px;height:${p}px"
              aria-hidden="true"
              >${n.display}</span
            >`:R}`})(a))} ${(a=>{if("stacked"!==o||!d.value)return R;const n=e.items[a.segments[0].index],r=a.segments.filter(e=>null!==e.value).map(e=>e.to),i=Math.max(0,...r),l=Math.min(0,...r),c=0===i&&l<0,u=null===a.total?n.display:Pn(Fn(a.total,n.decimals,t),n.unit);return W`<span
      class="bar-value total ${null===a.total?"unavailable":""} ${c?"left":""}"
      style="${c?"right":"left"}:${cp(c?1-s(l):s(i))};top:${8}px;height:${20}px"
      aria-hidden="true"
      >${u}</span
    >`})(a)}
            </div>
          </div>`)}
    </div>
    ${u?W`<div class="bar-legend">
            ${n.series.filter(e=>""!==e).map(e=>{const t=function(e,t){for(const o of e.rows)for(const e of o.segments)if(e.series===t)return e;return}(n,e);return W`<span class="bar-legend-item"
                  ><span class="swatch" style="background:${Ce(t?c(t):"grey")}"></span
                  >${e}</span
                >`})}
          </div>`:R}
  </div>`}};function pp(e,t,o,a=""){const n=Se(e.config);return W`<div
    class="entity ${a} ${n?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    role="meter"
    aria-valuenow=${e.available?String(e.value):R}
    aria-valuemin=${e.min}
    aria-valuemax=${e.max}
    aria-label=${e.label}
    tabindex=${n?0:R}
    style=${function(e){const t=Ce(e.band.color);return`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${t}`}(e)}
  >
    ${o}
  </div>`}const mp=r`
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
`,fp=["shades","colours"];function gp(e,t,o,a){const{show:n}=o.config,r=function(e){const t=[];return e.bands.forEach((o,a)=>{const n=e.bands[a+1],r=Number.isFinite(o.from)?cs(o.from,e.min,e.max):0,i=n?cs(n.from,e.min,e.max):1;i<=r||t.push({from:t.length?r:0,to:i,color:o.color,level:0})}),t.forEach((e,t)=>e.level=t),t}(e),i=n.target?function(e,t){if(null!==e.target)return zt(t,"compare_target",{target:Pn(Fn(e.target,e.decimals,t),e.unit)})}(e,o.hass):void 0,s=n.value||!e.available,l=W`
    ${n.name?W`<div class="label">
            <span class="name">${e.name}</span>${i?W`<span class="sub">${i}</span>`:R}
          </div>`:R}
    <div class="track">
      ${r.map(e=>W`<div
            class="range"
            style="left:${100*e.from}%;width:${100*(e.to-e.from)}%;background:${function(e,t,o){return"colours"===o?`color-mix(in srgb, ${Ce(e.color)} 22%, transparent)`:`color-mix(in srgb, var(--primary-text-color, #212121) ${t<=1?8:6+Math.round(e.level/(t-1)*12)}%, transparent)`}(e,r.length,a)}"
          ></div>`)}
      ${e.available?W`<div class="fill"></div>`:R}
      ${n.target&&e.available&&null!==e.targetPosition?W`<div class="target"></div>`:R}
    </div>
    ${s?W`<span class="value">${e.display}</span>`:W`<span></span>`}
  `;return pp(e,t,l,"bullet-row")}const vp={layout:"chart",group:"compare",height:120,styles:r`
    ${mp}
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
    <rect x="40" y="22" width="2" height="14" rx="1" fill="var(--primary-text-color, #212121)" />`,validate(e){if(void 0!==e.ranges&&!fp.includes(e.ranges))throw new Error(`"ranges" must be one of: ${fp.join(", ")}`)},editor(e){const t=Xi("bullet",e.hass,()=>[{name:"ranges",selector:Oi(e.hass,"ranges",fp)}]);return Ji(e,"chart",t,[{name:"ranges",path:["ranges"],default:"shades"}])},render(e){const t=e.raw.ranges??"shades",o=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_bullet"),names:e.items.map(e=>e.name).join(", ")});return W`<div class="compare bullets ${e.config.show.name?"":"no-name"}" role="group" aria-label=${o}>
      ${e.items.map((o,a)=>gp(o,a,e,t))}
    </div>`}},yp=["vertical","horizontal"];function bp(e,t,o){const{show:a}=t.config;return W`<div class="lane">
    <div class="scale">
      ${e.available?W`<div class="stem"></div>
              ${a.target&&null!==e.targetPosition?W`<div class="target"></div>`:R}
              <div class="dot"></div>
              ${o&&a.value?W`<span class="value tip">${e.display}</span>`:R}`:o?W`<span class="value tip">${e.display}</span>`:R}
    </div>
  </div>`}function _p(e,t,o){const{show:a}=o.config;return pp(e,t,W`${bp(e,o,!0)} ${a.name?W`<span class="name">${e.name}</span>`:R}`,"pop")}function xp(e,t,o){const{show:a}=o.config,n=a.value||!e.available;return pp(e,t,W`${a.name?W`<span class="name">${e.name}</span>`:R} ${bp(e,o,!1)}
  ${n?W`<span class="value">${e.display}</span>`:W`<span></span>`}`,"pop")}const wp={layout:"chart",group:"compare",height:200,styles:r`
    ${mp}
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
    <circle cx="50" cy="8" r="5" fill="var(--success-color, #1fae7a)" />`,validate(e){if(void 0!==e.orientation&&!yp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${yp.join(", ")}`)},editor(e){const t=Xi("lollipop",e.hass,()=>[{name:"orientation",selector:Oi(e.hass,"orientation",yp)}]);return Ji(e,"chart",t,[{name:"orientation",path:["orientation"],default:"vertical"}])},render(e){const t=e.raw.orientation??"vertical",o=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_lollipop"),names:e.items.map(e=>e.name).join(", ")}),a="vertical"===t?_p:xp;return W`<div
      class="compare ${t} ${e.config.show.name?"":"no-name"}"
      role="group"
      aria-label=${o}
    >
      ${e.items.map((t,o)=>a(t,o,e))}
    </div>`}},$p=["change","current"],kp=["vertical","horizontal"];function Mp(e){const t=e.find(e=>null!==e.v);return t?t.v:null}const zp={vertical:.14,horizontal:.24};function Sp(e,t){const{items:o,raw:a,hass:n}=e,r=a.steps??"change",i=!0===a.start_from_first,s=e=>t?.series[e]?.points??[],l=(e,t)=>{const o="change"===r?function(e){const t=e.filter(e=>null!==e.v);return 0===t.length?null:t[t.length-1].v-t[0].v}(s(t)):e.available?e.value:null;return null===o?null:function(e){return!0===e.config.invert}(e)?-o:o},c=i&&o.length?{value:Mp(s(0)),index:0}:null,d=o.map((e,t)=>({value:l(e,t),index:t})).slice(i?1:0),{bars:u}=function(e,t,o){const a=[];let n=0;if(e){const t=e.value??0;a.push({kind:"start",from:0,to:t,delta:t,index:e.index,missing:null===e.value}),n=t}for(const s of t){const e=s.value??0;a.push({kind:"step",from:n,to:n+e,delta:e,index:s.index,missing:null===s.value}),n+=e}o&&a.push({kind:"total",from:0,to:n,delta:n,missing:!1});let r=0,i=0;for(const s of a)r=Math.min(r,s.from,s.to),i=Math.max(i,s.from,s.to);return r===i&&(i=r+1),{bars:a,domain:[r,i]}}(c,d,!1!==a.total),h=o[0]?.decimals??1;return u.map(e=>{const t=void 0===e.index?void 0:o[e.index],a=t?.decimals??h;let r,i;return"start"===e.kind?(r=zt(n,"waterfall_start"),i=e.missing?zt(n,"waterfall_no_readings"):Fn(e.to,a,n)):"total"===e.kind?(r=zt(n,c?"waterfall_end":"waterfall_total"),i=Fn(e.to,h,n)):(r=t.name,i=e.missing?t.available?zt(n,"waterfall_no_readings"):t.display:function(e,t,o){const a=Fn(Math.abs(e),t,o);return 0===Number(e.toFixed(t))?Fn(0,t,o):`${e>0?"+":"−"}${a}`}(e.delta,a,n)),{...e,name:r,label:i,entity:t}})}function Ap(e,t){const o="horizontal"===e.raw.orientation,a=t.flatMap(e=>[e.from,e.to]);let n=Math.min(0,...a),r=Math.max(0,...a);n===r&&(r=n+1);const i=(r-n)*zp[o?"horizontal":"vertical"];r+=i,n<0&&(n-=i);const s=e=>(e-n)/(r-n)*100,l=t.length,c=100/l,d=o?.64:.6,u=e=>c*e+c*(1-d)/2,h=e=>u(e)+c*d,p=e.items[0]?.unit??"",m=zt(e.hass,"waterfall_aria",{bars:t.map(e=>`${e.name} ${e.missing?e.label:Pn(e.label,e.entity?.unit??p)}`).join(", ")}),f=e=>void 0===e.index?"":"entity",g=t.map((e,t)=>{const a=`--a0:${s(Math.min(e.from,e.to))}%;--a1:${s(Math.max(e.from,e.to))}%;--c0:${u(t)}%;--c1:${h(t)}%;--cm:${(u(t)+h(t))/2}%;--color:${function(e){return"step"!==e.kind?Ce("primary"):Ce(e.delta<0?"red":"green")}(e)}`,n=t+1<l?`--a:${s(e.to)}%;--c0:${h(t)}%;--c1:${u(t+1)}%`:"";return W`<div
        class="bar ${e.kind} ${e.missing?"missing":""} ${e.delta<0?"fall":"rise"} ${f(e)}"
        data-index=${e.index??R}
        tabindex=${void 0===e.index?R:0}
        aria-label=${`${e.name}, ${e.label}`}
        style=${a}
      ></div>
      <span class="bar-label ${e.missing?"missing":""} ${e.kind}" style=${a}
        >${e.missing&&!o?"–":e.label}</span
      >
      ${n?W`<div class="connector" style=${n}></div>`:R}`}),v=t.map(e=>W`<div class="bar-name ${f(e)}" data-index=${e.index??R} title=${e.name}>
        <span>${e.name}</span>
      </div>`);return W`<div class="wf ${o?"horizontal":"vertical"}" style="--n:${l}">
    <div class="names">${v}</div>
    <div class="wf-plot" role="img" aria-label=${m}>
      <div class="zero" style="--a:${s(0)}%"></div>
      ${g}
    </div>
  </div>`}const Ep=[...Di,{name:"steps",path:["steps"],default:"change"},{name:"orientation",path:["orientation"],default:"vertical"},{name:"start_from_first",path:["start_from_first"],default:!1},{name:"total",path:["total"],default:!0}];function Cp(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}const jp={layout:"chart",group:"totals",height:240,styles:r`
    ${Tn}
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
    <rect x="52" y="24" width="9" height="12" rx="1.5" fill="var(--primary-color, #03a9f4)" />`,validate(e){if(Mn(e),void 0!==e.steps&&!$p.includes(e.steps))throw new Error(`"steps" must be one of: ${$p.join(", ")}`);if(void 0!==e.orientation&&!kp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${kp.join(", ")}`);Cp(e.start_from_first,"start_from_first"),Cp(e.total,"total");for(const t of e.entities??[])"object"==typeof t&&Cp(t.invert,"invert")},editor:function(e){const t=Xi("waterfall",e.hass,()=>[...Ui(e.hass),{type:"grid",name:"",schema:[{name:"steps",selector:Oi(e.hass,"steps",$p)},{name:"orientation",selector:Oi(e.hass,"orientation",kp)}]},{name:"start_from_first",selector:{boolean:{}}},{name:"total",selector:{boolean:{}}}]);return W`${Ji(e,"chart",t,Ep)}
  ${Xu(e,"waterfall_invert","invert",{boolean:{}},!1)}`},disconnect:jn,render(e){let t;if("change"===((o=e.raw).steps??"change")||!0===o.start_from_first){t=zn(e);const o=Ln(t,e);if(o)return o}var o;return Ap(e,Sp(e,t))}},Np=["value","change"],Lp=["direction","group"],Op=["bad","good"];const Tp={"5minute":3e5,hour:36e5,day:864e5,month:26784e5};function Fp(e,t,o){const a=function(e,t,o=1e-9){return Math.abs(t-e)<=o?"flat":t>e?"up":"down"}(e,t);return"flat"===a?"grey":"up"===a==("bad"===o)?"red":"green"}function Pp(e,t,o){const a=1===o.last,n=zt(e,`slope_unit_${o.unit}${a?"":"_other"}`);return zt(e,a?`slope_${t}_one`:`slope_${t}`,{n:o.last,unit:n})}function Dp(e,t,o){const a=function(e,t){if(null!==e&&null!==t&&0!==e)return(t-e)/Math.abs(e)}(e,t);if(void 0===a)return"";const n=Math.round(100*a);return`${n>0?"+":n<0?"−":""}${Fn(Math.abs(n),0,o)} %`}function Up(e,t,o,a){const n="statistics"===e.source?Tp[Qa(e.range)]:0,r="group"===t.raw.color_by,i="good"===t.raw.increase?"good":"bad",s=new Map,l=e.series.map(e=>{const t=e.entity.available?e.entity.value:null,[l,c]=function(e,t,o,a,n=0){const r=t.find(e=>null!==e.v),i=tp(t,o.start)??(r&&r.t-o.start<=n?r.v:null);if("value"===e)return[i,a];const s=tp(t,o.middle);return[null===i||null===s?null:s-i,null===s||null===a?null:a-s]}(o,e.points,a,t,n),d=function(e){const t=e.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0}(e.entity),u=e.entity.config.color;let h;if(r){const t=d??`#${e.index}`;s.has(t)||s.set(t,$n[s.size%$n.length]),h=u??s.get(t)}else h=null!==l&&null!==c?Fp(l,c,i):"grey";return{index:e.index,entity:e.entity,from:l,to:c,color:Ce(h),group:d}});return l}const Hp=[...Di,{name:"measure",path:["measure"],default:"value"},{name:"color_by",path:["color_by"],default:"direction"},{name:"increase",path:["increase"],default:"bad"}],Ip=[{name:"group",path:["group"]}],Bp={layout:"chart",group:"compare",height:230,styles:r`
    ${Tn}
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
    ${[[14,28],[50,10],[14,12],[50,22],[14,32],[50,30]].map(([e,t])=>Z`<circle cx=${e} cy=${t} r="3" fill="var(--primary-text-color, #212121)" />`)}`,validate(e){Mn(e);const t=(t,o)=>{if(void 0!==e[t]&&!o.includes(e[t]))throw new Error(`"${t}" must be one of: ${o.join(", ")}`)};t("measure",Np),t("color_by",Lp),t("increase",Op);for(const o of e.entities??[]){const e="object"==typeof o&&o?o.group:void 0;if(void 0!==e&&"string"!=typeof e)throw new Error('"group" must be text')}},editor(e){const t=Xi("slope",e.hass,()=>[...Ui(e.hass),{name:"measure",selector:Oi(e.hass,"measure",Np)},{type:"grid",name:"",schema:[{name:"color_by",selector:Oi(e.hass,"color_by",Lp)},{name:"increase",selector:Oi(e.hass,"increase",Op)}]}]);return Ji(e,"chart",t,Hp)},entityFields:e=>({schema:Xi("slope-entity",e,()=>[{name:"group",selector:{text:{}}}]),fields:Ip}),disconnect:jn,render(e){const t=Date.now(),o=Ta(e.raw.period),a="change"===e.raw.measure?"change":"value",n=zn("change"===a?{...e,raw:{...e.raw,period:{last:2*o.last,unit:o.unit}}}:e,t),r=Fa(o,t).start,i={start:n.range.start,middle:r},s=e.hass,l=Pp(s,"change"===a?"previous":"ago",o),c="change"===a?Pp(s,"last",o):zt(s,"slope_now");if("ready"!==n.status)return W`${Ln(n,e)}`;const d=Up(n,e,a,i),u=d.flatMap(e=>[e.from,e.to]),h=ep(u);if(!h)return W`<div class="chart-message">${zt(s,"chart_no_data")}</div>`;const{show:p}=e.config,m=new Set(d.filter(e=>e.entity.stateObj).map(e=>e.entity.unit)),f=1===m.size?[...m][0]:void 0,g=(e,t)=>{const o=Fn(t,e.entity.decimals,s);return void 0===f&&e.entity.unit?`${o} ${e.entity.unit}`:o},v=d.filter(e=>null!==e.from||null!==e.to),y=Math.max(160,22*v.length),[b,_]=Oo(h,.06),x=e=>9+(_-e)/(_-b)*(y-18),w=e=>{const t=v.filter(t=>null!==e(t)),o=function(e,t,o,a){const n=e.map((e,t)=>({y:e,i:t})).sort((e,t)=>e.y-t.y||e.i-t.i),r=n.map(e=>Math.min(a,Math.max(o,e.y)));for(let s=1;s<r.length;s++)r[s]=Math.max(r[s],r[s-1]+t);if(r.length&&r[r.length-1]>a){r[r.length-1]=a;for(let e=r.length-2;e>=0;e--)r[e]=Math.min(r[e],r[e+1]-t)}if(r.length&&r[0]<o){r[0]=o;for(let e=1;e<r.length;e++)r[e]=Math.max(r[e],r[e-1]+t)}const i=new Array(e.length);return n.forEach((e,t)=>i[e.i]=r[t]),i}(t.map(t=>x(e(t))),18,9,y-9);return new Map(t.map((e,t)=>[e,o[t]]))},$=w(e=>e.from),k=w(e=>e.to),M=zt(s,"slope_no_reading"),z=zt(s,"chart_aria",{style:zt(s,"editor_style_slope"),names:d.map(e=>e.entity.name).join(", ")});return W`<div class="slope-head">
        <span class="from">${l}</span>
        ${f?W`<span class="unit">${f}</span>`:R}
        <span class="to">${c}</span>
      </div>
      <div class="slope-plot" style="height:${y}px" role="group" aria-label=${z}>
        <div class="axis from"></div>
        <div class="axis to"></div>
        ${v.map(e=>{const t=zt(s,"slope_entity_aria",{name:e.entity.name,from:null===e.from?M:g(e,e.from),to:null===e.to?M:g(e,e.to)}),o=p.value&&null!==e.from&&null!==e.to?Dp(e.from,e.to,s):"",a=e=>p.name?W`<span class="name">${e}</span>`:R;return W`<div class="entity" data-index=${e.index} tabindex="0" role="img" aria-label=${t}>
        ${null!==e.from&&null!==e.to?W`<svg viewBox="0 0 100 ${y}" preserveAspectRatio="none">
                <line x1="0" y1=${x(e.from)} x2="100" y2=${x(e.to)} stroke=${e.color}></line>
              </svg>`:R}
        ${null!==e.from?W`<span class="dot from" style="top:${x(e.from)}px;background:${e.color}"></span>
                <span class="lbl from" style="top:${$.get(e)}px"
                  >${a(e.entity.name)}${p.value?W`<span class="value">${g(e,e.from)}</span>`:R}</span
                >`:R}
        ${null!==e.to?W`<span class="dot to" style="top:${x(e.to)}px;background:${e.color}"></span>
                <span class="lbl to" style="top:${k.get(e)}px"
                  >${p.value?W`<span class="value">${g(e,e.to)}</span>`:R}${a(e.entity.name)}${o?W`<span class="pct" style="color:${e.color}">${o}</span>`:R}</span
                >`:R}
      </div>`})}
      </div>
      ${"group"===e.raw.color_by?function(e){const t=new Map;for(const o of e)o.group&&!t.has(o.group)&&t.set(o.group,o.color);return t.size?W`<div class="slope-legend">
    ${[...t].map(([e,t])=>W`<span class="slope-legend-item"><span class="swatch" style="background:${t}"></span>${e}</span>`)}
  </div>`:R}(d):R}`}},Wp=["range","then","target"],Zp=["horizontal","vertical"];function qp(e,t,o,a,n){const r=e.available?e.value:null,i=[];if("range"===t){const e=function(e){return ep(e.flatMap(e=>[e.v,e.min,e.max]))}(o),t=e?ep([e[0],e[1],r]):void 0;t&&i.push({kind:"low",value:t[0]},{kind:"high",value:t[1]}),null===r||!n&&t||i.push({kind:"now",value:r})}else{const n="then"===t?tp(o,a)??function(e){for(const t of e)if(null!==t.v)return t.v;return null}(o):e.target;null!==n&&i.push({kind:t,value:n}),null!==r&&i.push({kind:"now",value:r})}return i.sort((e,t)=>e.value-t.value)}function Rp(e){if(0===e.length)return[];const t=e.some(e=>"low"===e.kind)?e.filter(e=>"now"!==e.kind):e,o=t[0],a=t[t.length-1];return o===a?[a]:[o,a]}function Vp(e,t,o,a,n){return e.map((e,r)=>{const i=qp(e,t,o(r),a,n);return{index:r,entity:e,marks:i,labelled:Rp(i)}})}function Yp(e,t){return 1===t.last?zt(e,`dumbbell_ago_${t.unit}_one`):zt(e,`dumbbell_ago_${t.unit}`,{n:t.last})}const Gp={low:Ce("blue"),high:Ce("red"),then:Ce("grey"),target:"var(--primary-text-color, #212121)"};function Xp(e,t){return"target"===e||"now"===e&&"range"===t}function Jp(e,t,o){return"now"!==e?Gp[e]:"range"===t?"var(--primary-text-color, #212121)":Ce(o.band.color)}const Kp="range",Qp="horizontal",em=!0;function tm(e){return{ends:e.ends??Kp,orientation:e.orientation??Qp,showNow:void 0===e.show_now?em:!0===e.show_now}}function om(e,t,o){const a=e.entity;if(0===e.marks.length)return`${a.name}, ${a.available?zt(t.hass,"dumbbell_no_value"):a.display}`;const n=e.marks.map(e=>`${(e=>"then"===e?Yp(t.hass,o):zt(t.hass,`dumbbell_${e}`))(e.kind)} ${Pn(Fn(e.value,a.decimals,t.hass),a.unit)}`);return`${a.name}: ${n.join(", ")}`}const am=[...Di,{name:"ends",path:["ends"],default:Kp},{name:"show_now",path:["show_now"],default:em},{name:"orientation",path:["orientation"],default:Qp}];const nm={layout:"chart",group:"compare",height:220,styles:r`
    ${Tn}
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
    <circle cx="56" cy="29" r="4" fill="var(--error-color, #ef3b5a)" />`,validate(e){if(Mn(e),void 0!==e.ends&&!Wp.includes(e.ends))throw new Error(`"ends" must be one of: ${Wp.join(", ")}`);if(void 0!==e.orientation&&!Zp.includes(e.orientation))throw new Error(`"orientation" must be one of: ${Zp.join(", ")}`);if(void 0!==e.show_now&&"boolean"!=typeof e.show_now)throw new Error('"show_now" must be true or false')},editor:function(e){const{ends:t}=tm(e.config),o=Xi(`dumbbell-${t}`,e.hass,()=>[{type:"grid",name:"",schema:[{name:"ends",selector:Oi(e.hass,"ends",Wp)},{name:"orientation",selector:Oi(e.hass,"orientation",Zp)}]},..."target"===t?[]:Ui(e.hass),..."range"===t?[{name:"show_now",selector:{boolean:{}}}]:[]]);return Ji(e,"chart",o,am)},disconnect:jn,render(e){const{ends:t,orientation:o,showNow:a}=tm(e.raw),n=Ta(e.raw.period);let r;if("target"===t)r=Vp(e.items,t,()=>[],0,a);else{const o=zn(e);if("ready"!==o.status)return Ln(o,e)??W``;r=Vp(e.items,t,e=>o.series[e]?.points??[],o.range.start,a)}const i=ep(r.flatMap(e=>e.marks.map(e=>e.value))),s=i?Qh(i[0],i[1],4):[],[l,c]=s.length?[s[0],s[s.length-1]]:[0,1],d=e=>c===l?.5:(e-l)/(c-l),u=function(e){const t=new Set(e.map(e=>e.unit).filter(e=>""!==e));return 1===t.size?[...t][0]:""}(e.items),h=function(e){if(e.length<2)return 0;const t=Math.abs(e[1]-e[0]);for(let o=0;o<6;o++)if(Math.abs(Math.round(t*10**o)-t*10**o)<1e-6)return o;return 6}(s),{show:p}=e.config,m=Math.max(...e.items.map(e=>e.name.length)),f=`min(${Math.min(m,16)+1}ch, 38%)`,g=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_dumbbell"),names:e.items.map(e=>e.name).join(", ")}),v=s.map(t=>W`<span class="db-tick" style="--f:${d(t)}">${Fn(t,h,e.hass)}</span>`),y=r.map(o=>function(e,t,o,a,n,r){const i=e.entity,{show:s}=t.config,l=e.labelled[0],c=e.labelled[e.labelled.length-1],d=e=>Xp(e.kind,o)?"color-mix(in srgb, var(--primary-text-color, #212121) 30%, transparent)":Jp(e.kind,o,i);return W`<div
    class="entity db-row ${i.available?"":"unavailable"}"
    data-index=${e.index}
    tabindex="0"
    role="img"
    aria-label=${om(e,t,r)}
  >
    ${s.name?W`<span class="db-name">${i.name}</span>`:R}
    <div class="db-plot">
      ${n.map(e=>W`<span class="db-grid" style="--f:${a(e)}"></span>`)}
      ${0===e.marks.length?W`<span class="db-status value">${i.available?"–":i.display}</span>`:W`${e.labelled.length>1?W`<span
                    class="db-bar"
                    style="--a:${a(l.value)};--b:${a(c.value)};--from:${d(l)};--to:${d(c)}"
                  ></span>`:R}
            ${e.marks.map(e=>W`<span
                  class="db-dot ${e.kind} ${Xp(e.kind,o)?"ring":""}"
                  style="--f:${a(e.value)};--mark:${Jp(e.kind,o,i)}"
                ></span>`)}
            ${s.value?e.labelled.map((o,n)=>W`<span
                        class="db-label ${0===n&&e.labelled.length>1?"lo":"hi"}"
                        style="--f:${a(o.value)}"
                        >${Fn(o.value,i.decimals,t.hass)}</span
                      >`):R}`}
    </div>
  </div>`}(o,e,t,d,s,n)),b=`db ${o} ${p.name?"":"no-names"} ${p.value?"":"no-values"}`;return W`<div class=${b} style="--name-w:${f}" role="group" aria-label=${g}>
      ${i?function(e,t,o,a,n,r){const i=t=>zt(e.hass,t),s=new Set(a.map(e=>Ce(e.entity.band.color))),l=1===s.size?[...s][0]:Ce("primary"),c="range"===t?[[i("dumbbell_low"),Gp.low,!1],...o?[[i("dumbbell_now"),Jp("now",t,a[0].entity),!0]]:[],[i("dumbbell_high"),Gp.high,!1]]:["then"===t?[Yp(e.hass,n),Gp.then,!1]:[i("dumbbell_target"),Gp.target,!0],[i("dumbbell_now"),l,!1]];return W`<div class="db-legend">
    ${r?W`<span class="db-unit">${r}</span>`:R}
    ${c.map(([e,t,o])=>W`<span class="db-key"
          ><span class="db-swatch ${o?"ring":""}" style="--mark:${t}"></span>${e}</span
        >`)}
  </div>`}(e,t,a,r,n,u):R}
      ${"horizontal"===o?W`${y}
            ${s.length?W`<div class="db-axis" aria-hidden="true"><div class="db-plot">${v}</div></div>`:R}`:W`<div class="db-body">
              ${s.length?W`<div class="db-axis" aria-hidden="true">${v}</div>`:R}${y}
            </div>`}
    </div>`}};function rm(e){const t={...e,source:e.source??"statistics"};if("history"===t.source&&void 0===e.group_by){const o=e.period??{},a=(o.last??24)*({hour:1,day:24,week:168,month:720}[o.unit??"hour"]??1);t.group_by="day"===o.calendar||!o.calendar&&a<=48?"hour":"day"}return t}function im(e){return e.flatMap((t,o)=>o>0?[[t[0],e[o-1][1]],t]:[t])}function sm(e,t,o){if(e.length<2)return"";const[a,n,r]="step"===o?[im(e),im(t),"straight"]:[e,t,o];return`${bn(a,r)}${bn([...n].reverse(),r).replace(/^M/,"L")}Z`}const lm=[...Ti.map(e=>"source"===e.name?{...e,default:"statistics"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"mean",path:["mean"],default:!0},{name:"line_width",path:["line_width"],default:Lt},...Bi,...Hi];const cm=[{name:"range_color",path:["color"]},{name:"curve",path:["curve"]},{name:"dash",path:["dash"],default:!1}],dm={layout:"chart",group:"history",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){if(Mn(e),qo(e),xr(e),Bt(e),ar(e),void 0!==e.mean&&"boolean"!=typeof e.mean)throw new Error('"mean" must be true or false')},editor:function(e){const t=Xi(`range_area|${Fi(e.config)}`,e.hass,()=>[...Pi(e.hass,e.config),{name:"curve",selector:Oi(e.hass,"curve",gn)},{type:"grid",name:"",schema:[{name:"mean",selector:{boolean:{}}},{name:"line_width",selector:ao}]},...Wi(e.hass),...Ii(e.hass)]);return Ji(e,"chart",t,lm)},entityFields:e=>({schema:Xi("range-area-entity",e,()=>[{type:"grid",name:"",schema:[{name:"range_color",selector:{text:{}}},{name:"curve",selector:Oi(e,"curve",gn)},{name:"dash",selector:{boolean:{}}}]}]),fields:cm}),disconnect(e){jn(e),Gn(e),br(e)},render:function(e){const t={...e,raw:rm(e.raw)},o=zn(t,Date.now(),{range:!0}),a=En(o,t),n=Nn(o,t),r=a===R&&n===R?R:W`${a}${n}`,i=Ln(o,t),s=nr(t.raw);if(i)return rr("over"===s.header?{...s,header:"above"}:s,r,i);const l=o.series,c=Jn(t,o.range,Lo(l.map(e=>e.points))),d=!1!==t.raw.mean,u=t.raw.line_width??Lt,h={text:(e,o)=>{if(!o||null===o.v)return"—";const a=o=>Fn(o,e.entity.decimals,t.hass),n=o.min??o.v,r=o.max??o.v;return Pn(`${a(n)} – ${a(r)}`,e.entity.unit)+(d?` · ${a(o.v)}`:"")}};d||(h.dotY=()=>null);const p=_r(t.raw),m=zt(t.hass,"chart_aria",{style:zt(t.hass,"editor_style_range_area"),names:o.series.map(e=>e.entity.name).join(", ")});return rr(s,r,er({axes:c,ctx:t,content:Z`${l.map(e=>function(e,t,o,a){const n=[],r=[],i=[];for(const s of function(e){const t=[];let o=[];for(const a of e)null!==a.v?o.push({t:a.t,v:a.v,lo:a.min??a.v,hi:a.max??a.v}):(o.length&&t.push(o),o=[]);return o.length&&t.push(o),t}(e.points)){const o=s.map(e=>[t.x(e.t),t.y(e.hi)]),a=s.map(e=>[t.x(e.t),t.y(e.lo)]);n.push(sm(o,a,e.curve)),r.push(bn(o,e.curve),bn(a,e.curve)),i.push(bn(s.map(e=>[t.x(e.t),t.y(e.v)]),e.curve))}return Z`<g class="series" data-series=${e.index}>
    <path class="band" d=${n.join("")} fill=${e.color} stroke="none"></path>
    <path class="band-edge" d=${r.join("")} fill="none" stroke=${e.color}></path>
    ${o?Z`<path class="line ${e.dash?"dashed":""}" d=${i.join("")} fill="none" stroke=${e.color}
            style="stroke-width:${a}px"></path>`:R}
  </g>`}(e,c.scales,d,u))}`,label:m,overlay:W`${"over"===s.header?ir(r):R}
      ${p?zr(t,l,c.scales,yr(t.host),Xn(t),h):R}`,hover:p?wr(t,o.range,l.map(e=>e.points)):void 0}))}},um=["line","area","column"];function hm(e,t){return e.config.spark??t.spark??"line"}function pm(e){const t=e.period??{},o=(t.last??24)*({hour:1,day:24,week:168,month:720}[t.unit??"hour"]??1);return(t.calendar?"day"===t.calendar:o<=48)?"hour":"day"}function mm(e,t){return void 0===e.group_by&&0!==t.length&&t.every(e=>"column"===e)?{...e,group_by:pm(e),aggregate:e.aggregate??"mean"}:e}function fm(e,t,o,a){const n=pa(e.points,120),r=n.filter(e=>null!==e.v).map(e=>e.v),i=function(e,t){if(0===e.length)return;let o=Math.min(...e),a=Math.max(...e);return t?(o=Math.min(o,0),a=Math.max(a,0),o===a?[o,o+1]:[o,a]):([o,a]=Oo([o,a],.1),[o,a])}(r,"column"===t);if(!i)return Z``;const s=To([o.start,o.end],[0,100]),l=To(i,[23,1]),c=l(Math.min(Math.max(0,i[0]),i[1]));if("column"===t){const t=[];return n.forEach((e,a)=>{if(null===e.v)return;const r=e.end??n[a+1]?.t??o.end,i=s(e.t),d=Math.max(0,Math.min(100,s(r))-i);if(d<=0)return;const u=Math.min(l(e.v),c);t.push(Z`<rect x=${i+.12*d} width=${.76*d} y=${u} height=${Math.abs(l(e.v)-c)}></rect>`)}),Z`<g class="spark-columns" fill=${e.color}>${t}</g>`}const d=_n(n).map(e=>e.map(e=>[s(e.t),l(e.v)])),u=d.map(t=>bn(t,e.curve)).join(""),h="area"===t?d.filter(e=>e.length>1).map(t=>`${bn(t,"step"===e.curve?"straight":e.curve)}L${t[t.length-1][0]},${c}L${t[0][0]},${c}Z`).join(""):"";return Z`${h?Z`<path class="spark-fill" d=${h} fill=${e.color} stroke="none"></path>`:R}
    <path class="spark-line" d=${u} fill="none" stroke=${e.color} style="stroke-width:${a}px"></path>`}const gm=[...Ti,{name:"spark",path:["spark"],default:"line"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:1.5},{name:"spark_bar",path:["bar"],default:!1}];const vm=[{name:"spark",path:["spark"]},{name:"spark_color",path:["color"]}];const ym={layout:"chart",group:"history",height:120,styles:r`
    ${Tn}
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
    <rect x="42" y="25" width="14" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.5" />`,validate:function(e){Mn(e);const t=[e.spark,...(e.entities??[]).map(e=>"object"==typeof e?e.spark:void 0)];for(const a of t)if(void 0!==a&&!um.includes(a))throw new Error(`"spark" must be one of: ${um.join(", ")}`);if(void 0!==e.bar&&"boolean"!=typeof e.bar)throw new Error('"bar" must be true or false');const o=e.line_width;if(void 0!==o&&("number"!=typeof o||o<Ot||o>Tt))throw new Error('"line_width" must be a number from 0.5 to 12')},editor:function(e){const t=Xi(`sparkline|${Fi(e.config)}`,e.hass,()=>[...Pi(e.hass,e.config),{type:"grid",name:"",schema:[{name:"spark",selector:Oi(e.hass,"spark",um)},{name:"curve",selector:Oi(e.hass,"curve",gn)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:ao},{name:"spark_bar",selector:{boolean:{}}}]}]);return Ji(e,"chart",t,gm)},entityFields:e=>({schema:Xi("sparkline-entity",e,()=>[{type:"grid",name:"",schema:[{name:"spark",selector:Oi(e,"spark",um)},{name:"spark_color",selector:{text:{}}}]}]),fields:vm}),disconnect(e){jn(e)},render:function(e){const t=e.items.map(t=>hm(t,e.raw)),o={...e,raw:mm(e.raw,t)},a=zn(o),{show:n}=o.config,r=!0===o.raw.bar,i=o.raw.line_width??1.5,s="error"===a.status?W`<div class="spark-message error">${zt(o.hass,"chart_error",{error:a.error??""})}</div>`:R,l=a.series.map((s,l)=>{const c=s.entity,d=c.config.color,u=Ce(d||c.band.color),h="column"===hm(c,e.raw)&&void 0===o.raw.group_by,p={...s,color:u,points:h?(m=s.points,f=o.raw,g=a.range,v=o.hass,rn(m,Ma(pm(f),g.start,g.end,Sa(v)),f.aggregate??"mean",Date.now())):s.points};var m,f,g,v;const y=c.config.line_width??i,b=n.name?W`<span class="name">${c.name}</span>`:R,_=n.value||!c.available?W`<span class="value">${c.display}</span>`:R;return W`<div
      class="entity spark-row ${r?"with-bar":""} ${c.available?"":"unavailable"}"
      data-index=${l}
      tabindex="0"
      aria-label=${c.label}
    >
      ${n.icon?W`<ha-state-icon
              class="icon"
              .hass=${o.hass}
              .stateObj=${c.stateObj}
              .icon=${hs(c)}
            ></ha-state-icon>`:R}
      ${r?W`<div class="spark-body">
              <div class="top">${b}${_}</div>
              ${function(e,t){const o=je(e.band.color);return W`<div
    class="spark-track"
    style="--start:${e.span[0]};--end:${e.span[1]};--c-start:${o.start};--c-end:${o.end};--target:${e.targetPosition??0}"
  >
    <div class="spark-bar"></div>
    ${t&&null!==e.targetPosition&&e.available?W`<div class="spark-target"></div>`:R}
  </div>`}(c,n.target)}
            </div>`:b}
      <svg
        class="spark ${"loading"===a.status?"loading":""}"
        viewBox="0 0 ${100} ${24}"
        preserveAspectRatio="none"
        role="img"
        aria-label=${zt(o.hass,"spark_aria",{name:c.name})}
      >
        ${"ready"===a.status?fm(p,t[l],a.range,y):R}
      </svg>
      ${r?R:_}
    </div>`});return W`${En(a,o)}${s}
    <div class="spark-rows ${n.icon?"icons":""} ${r?"bars":""}">${l}</div>`}},bm=["wiggle","centre","share","zero"],_m=["inside_out","listed"];function xm(e){return e.map(e=>null===e||!Number.isFinite(e)||e<0?0:e)}function wm(e,t,o){const a="share"===o?function(e){const t=e[0]?.length??0,o=Array.from({length:t},(t,o)=>e.reduce((e,t)=>e+t[o],0));return e.map(e=>e.map((e,t)=>o[t]>0?e/o[t]*100:0))}(e):e,n=t.map(e=>a[e]);let r=function(e,t){const o=e[0]?.length??0,a=Array.from({length:o},(t,o)=>e.reduce((e,t)=>e+t[o],0));if("zero"===t||"share"===t)return new Array(o).fill(0);if("centre"===t)return a.map(e=>-e/2);const n=new Array(o).fill(0);for(let l=1;l<o;l++){let t=0,o=0;for(let a=0;a<e.length;a++){const n=e[a][l];let r=(n-e[a][l-1])/2;for(let t=0;t<a;t++)r+=e[t][l]-e[t][l-1];t+=n,o+=r*n}n[l]=n[l-1]-(t?o/t:0)}let r=1/0,i=-1/0;for(let l=0;l<o;l++)r=Math.min(r,n[l]),i=Math.max(i,n[l]+a[l]);const s=o?-(r+i)/2:0;return n.map(e=>e+s)}(n,o);const i=new Array(e.length);for(const s of t){const e=r.map((e,t)=>e+a[s][t]);i[s]={lower:r,upper:e},r=e}return i}function $m(e){let t=0,o=-1/0;return e.upper.forEach((a,n)=>{const r=a-e.lower[n];r>o&&(o=r,t=n)}),{at:t,thickness:Math.max(0,o)}}function km(e,t,o){const a=Math.min(e.range.end,t);if(e.group){const t=e.series[0]?.points??[],o=t.map((e,t)=>t).filter(e=>t[e].t<a);return{times:o.map(e=>(t[e].t+Math.min(t[e].end??t[e].t,a))/2),values:e.series.map(e=>o.map(t=>e.points[t]?.v??null))}}let n=Math.min(240,Math.max(24,Math.round(o/4)));if("statistics"===e.source){const t=Math.max(1,...e.series.map(e=>e.points.filter(e=>!e.carried).length));n=Math.min(n,t)}const r=function(e,t,o){const a=Math.max(e.start+1,Math.min(e.end,t)),n=Math.max(1,Math.round(o)),r=(a-e.start)/n,i=[];for(let s=0;s<n;s++)i.push(e.start+s*r);return i.push(a),i}(e.range,a,n);return{times:r.slice(0,-1).map((e,t)=>(e+r[t+1])/2),values:e.series.map(t=>function(e,t,o,a){return("statistics"===o?sn(e,t,"mean",a):rn(e,t,"mean",a)).map(e=>e.v)}(t.points,r,e.source,a))}}function Mm(e){return e.baseline??"wiggle"}const zm=e=>Math.round(1e4*e)/100+"%";function Sm(e,t,o,a,n,r,i){const[s,l]=a.domain,c=nr(n.raw).compact?110:180,d=Xn(n),u=e=>e/(l-s)*c,h=new Map,p=[];for(const f of e.series){const e=t[f.index],{at:s,thickness:l}=$m(e);if(u(l)<18)continue;const m=i[f.index][s],g=r?`${Fn(e.upper[s]-e.lower[s],0,n.hass)} %`:null===m?"":Pn(Fn(m,f.entity.decimals,n.hass),f.entity.unit),v=`${f.entity.name} ${g}`.trim();h.set(f.index,v),p.push({key:f.index,x:o[s]/xn*d,y:a.y((e.upper[s]+e.lower[s])/2)/wn*c,width:6.2*v.length,thickness:u(l)})}const m=function(e,t){const o=[],a=new Map;for(const n of[...e].sort((e,t)=>t.thickness-e.thickness||e.key-t.key)){if(n.width>t-4)continue;const e=Math.min(Math.max(2,n.x-n.width/2),t-n.width-2),r={left:e,right:e+n.width,top:n.y-6.5,bottom:n.y+6.5},i=o.some(e=>r.left<e.right+4&&r.right>e.left-4&&r.top<e.bottom&&r.bottom>e.top);i||(o.push(r),a.set(n.key,e))}return a}(p,d);return W`<div class="stream-labels" aria-hidden="true">
    ${p.map(t=>{const o=m.get(t.key);if(void 0===o)return R;const a=e.series[t.key];return W`<span
        class="stream-label ${Le(function(e){return e.entity.config.color??$n[e.index%$n.length]}(a))}"
        style="left:${zm(d?o/d:0)};top:${zm(t.y/c)}"
        >${h.get(t.key)}</span
      >`})}
  </div>`}function Am(e,t,o,a,n,r,i,s){if(void 0===i)return R;const l=gr(o.times.map(e=>({t:e})),i);if(l<0)return R;const c=r[l]/xn,d=mr(c,Xn(e)),u=[...n].reverse().map(e=>t.series[e]),h=a.map(e=>e.upper[l]-e.lower[l]),p=o.values.reduce((e,t)=>e+Math.max(0,t[l]??0),0),m=new Set(t.series.map(e=>e.entity.unit));return W`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${zm(c)}"></div>
    <div class="tooltip ${d}" style=${d.startsWith("pin")?"":`left:${zm(c)}`}>
      <div class="tooltip-time">${ua(o.times[l],e.hass)}</div>
      ${u.map(t=>W`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${(t=>{const a=o.values[t.index][l];if(null===a)return"—";const n=Pn(Fn(a,t.entity.decimals,e.hass),t.entity.unit);return s?`${n} · ${Fn(h[t.index],0,e.hass)} %`:n})(t)}</span>
          </div>`)}
      ${1===m.size&&t.series.length>1?W`<div class="tooltip-row total">
              <span class="tooltip-name">${zt(e.hass,"stream_total")}</span>
              <span class="tooltip-value"
                >${Pn(Fn(p,t.series[0].entity.decimals,e.hass),t.series[0].entity.unit)}</span
              >
            </div>`:R}
    </div>
  </div>`}const Em=[...Ti,{name:"baseline",path:["baseline"],default:"wiggle"},{name:"stream_order",path:["stream_order"],default:"inside_out"},{name:"stream_curve",path:["curve"],default:"smooth"},{name:"stream_labels",path:["labels"],default:!0},...Bi,...Hi],Cm=new Set(["y_axis","grid_horizontal","y_min","y_max"]);function jm(e){return e.map(e=>{const t=e;if(!Cm.has(t.name)){if(t.schema){const e=t.schema.filter(e=>!Cm.has(e.name));return e.length?{...t,schema:e}:void 0}return t}}).filter(e=>void 0!==e)}const Nm={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Lm={layout:"chart",group:"totals",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
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
      fill="var(--warning-color, #f59e0b)" />`,validate(e){if(Mn(e),qo(e),xr(e),ar(e),void 0!==e.baseline&&!bm.includes(e.baseline))throw new Error(`"baseline" must be one of: ${bm.join(", ")}`);if(void 0!==e.stream_order&&!_m.includes(e.stream_order))throw new Error(`"stream_order" must be one of: ${_m.join(", ")}`);if(void 0!==e.labels&&"boolean"!=typeof e.labels)throw new Error('"labels" must be true or false')},editor:function(e){const t=function(e){const t=Mm(e);return`${Fi(e)}|${"wiggle"===t||"centre"===t?"floating":"axis"}`}(e.config),o=Xi(`streamgraph|${t}`,e.hass,()=>{const o=Wi(e.hass);return[...Pi(e.hass,e.config),{type:"grid",name:"",schema:[{name:"baseline",selector:Oi(e.hass,"baseline",bm)},{name:"stream_order",selector:Oi(e.hass,"stream_order",_m)}]},{type:"grid",name:"",schema:[{name:"stream_curve",selector:Oi(e.hass,"curve",["smooth","straight","step"])},{name:"stream_labels",selector:{boolean:{}}}]},...t.endsWith("floating")?jm(o):o,...Ii(e.hass)]});return Ji(e,"chart",o,Em)},entityFields:()=>Nm,disconnect(e){jn(e),Gn(e),br(e)},render(e){const t=Date.now(),o=zn(e,t),a=En(o,e),n=Nn(o,e),r=a===R&&n===R?R:W`${a}${n}`,i=Ln(o,e),s=nr(e.raw);if(i)return rr("over"===s.header?{...s,header:"above"}:s,r,i);const l=Mm(e.raw),c="share"===l,d="wiggle"===l||"centre"===l,u=km(o,t,Xn(e)),h=u.values.map(xm),p="listed"===(e.raw.stream_order??"inside_out")?h.map((e,t)=>t):function(e){const t=e.map((e,t)=>{let o=0;for(let a=1;a<e.length;a++)e[a]>e[o]&&(o=a);return{i:t,at:o,sum:e.reduce((e,t)=>e+t,0)}});t.sort((e,t)=>e.at-t.at||e.i-t.i);let o=0,a=0;const n=[],r=[];for(const i of t)o<a?(o+=i.sum,n.push(i.i)):(a+=i.sum,r.push(i.i));return[...r.reverse(),...n]}(h);const m=wm(h,p,l),f=function(e){let t=1/0,o=-1/0;for(const a of e){for(const e of a.lower)t=Math.min(t,e);for(const e of a.upper)o=Math.max(o,e)}return t===1/0?void 0:[t,o]}(m);let g=e.raw;if(d){const[t,o]=f??[0,1],a=o>t?.04*(o-t):1;g={...e.raw,y_axis:!1,y_min:t-a,y_max:o+a,gridlines:{...e.raw.gridlines??{},horizontal:!1}}}else c?g={...e.raw,y_min:0,y_max:100}:void 0===e.raw.y_min&&(g={...e.raw,y_min:0});const v=Jn({...e,raw:g},o.range,f),{scales:y}=v,b=u.times.map(e=>y.x(e)),_=e.raw.curve??"smooth",x=Math.min(o.range.end,t),w=[y.x(o.range.start),...b,y.x(x)],$=0===u.times.length?Z``:Z`${p.map(e=>{const t=o.series[e];return Z`<path
              class="stream entity"
              data-index=${e}
              aria-label=${t.entity.label}
              d=${function(e,t,o,a){const n=t.map((t,a)=>[t,o.y(e.upper[a])]),r=t.map((t,a)=>[t,o.y(e.lower[a])]).reverse();return 0===n.length?"":`${bn(n,a)}L${bn(r,a).slice(1)}Z`}((e=>({lower:[e.lower[0],...e.lower,e.lower[e.lower.length-1]],upper:[e.upper[0],...e.upper,e.upper[e.upper.length-1]]}))(m[e]),w,y,_)}
              fill=${t.color}
            ></path>`})}`,k=_r(e.raw),M=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_streamgraph"),names:o.series.map(e=>e.entity.name).join(", ")}),z=u.times.map(e=>({t:e,v:0}));return rr(s,r,er({axes:v,ctx:{...e},content:$,label:M,overlay:W`${"over"===s.header?ir(r):R}
        ${!1!==e.raw.labels&&u.times.length?Sm(o,m,b,y,e,c,u.values):R}
        ${k?Am(e,o,u,m,p,b,yr(e.host),c):R}`,hover:k?wr(e,o.range,[z]):void 0}))}};const Om=["columns","line"],Tm=.7;function Fm(e){return{last:14,unit:"day",...e.period??{}}}function Pm(e){return e.group_by??"day"}function Dm(e,t=Date.now()){const o=Ta(Fm(e.raw)),a=e.raw.source??"statistics";const n=Pm(e.raw),r=e.raw.aggregate??"mean",i=Sa(e.hass),s=Pa(o,t,i,o.navigate?Ua(e.host,o):0),l=$a(n,s.start,i),c=Ma(n,l,s.end,i),d={start:l,end:c[c.length-1]},u=Math.min(s.end,t),h=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),p=fn(e.host,e.requestUpdate),m="statistics"===a?function(e,t,o){let a="hour";return"hour"===e?a="5minute":"day"!==e&&t.timeZone===o&&(a="day"),{period:a,types:["mean","min","max","state"],value:"mean"}}(n,i,e.hass.config?.time_zone):void 0,f=p.get(e.hass,h,{start:l,end:s.end},a,{live:s.live,statistics:m});let g=[];const v=e.items.map((e,t)=>{const o=e.config,n=Rt(f.data.get(tn(h[t]))??[],e.conversion);let i;return 0===t?(g="statistics"===a?function(e,t,o){const a=[];let n=0;for(let r=0;r+1<t.length;r++){const i=t[r],s=t[r+1];for(;n<e.length&&e[n].t<i;)n++;let l=null;for(let t=n;t<e.length&&e[t].t<s;t++){const a=e[t];if(null===a.v||a.carried||i>=o)continue;const n="number"==typeof a.max?Math.max(a.max,a.v):a.v,r="number"==typeof a.min?Math.min(a.min,a.v):a.v;l?(l.high=Math.max(l.high,n),l.low=Math.min(l.low,r),l.close=a.v):l={t:i,end:s,open:a.v,high:n,low:r,close:a.v}}a.push(l)}return a}(n,c,u):function(e,t,o){const[a,n,r,i]=["first","max","min","last"].map(a=>rn(e,t,a,o));return a.map((e,t)=>null===e.v||null===n[t].v||null===r[t].v||null===i[t].v?null:{t:e.t,end:e.end??e.t,open:e.v,high:n[t].v,low:r[t].v,close:i[t].v})}(n,c,u),i=g.map((e,t)=>({t:c[t],end:c[t+1],v:e?e.close:null}))):i=function(e,t,o,a,n){return"history"===a?rn(e,t,o,n):"sum"===o||"change"===o?rn(e,t,"change",n):sn(e,t,o,n)}(n,c,r,a,u),{index:t,entity:e,points:i,color:Ce(o.color??(0===t?$n[0]:"grey")),curve:"smooth",dash:!1}});return{status:f.status,error:f.error,range:d,period:o,source:a,series:v,live:s.live,back:s.back,zone:i,group:{unit:n,aggregate:r},candles:g,unit:n}}const Um=e=>Math.round(1e4*e)/100+"%";function Hm(e,t,o,a){if(void 0===a)return R;const n=t.series[0].points.map(e=>({t:(e.t+(e.end??e.t))/2})),r=gr(n,a);if(r<0)return R;const i=t.candles[r],s=o(n[r].t)/xn,l=mr(s,Xn(e)),c=t.series[0].entity,d=(t,o=c)=>Pn(Fn(t,o.decimals,e.hass),o.unit),u=i?[[zt(e.hass,"candle_open"),d(i.open)],[zt(e.hass,"candle_high"),d(i.high)],[zt(e.hass,"candle_low"),d(i.low)],[zt(e.hass,"candle_close"),d(i.close)]]:[[c.name,"—"]];for(const h of t.series.slice(1)){const e=h.points[r]?.v;u.push([h.entity.name,null==e?"—":d(e,h.entity),h.color])}return W`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Um(s)}"></div>
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${Um(s)}`}>
      <div class="tooltip-time">${function(e,t,o,a){if("hour"===t)return ua(e,o);const n="month"===t?{month:"long",year:"numeric",timeZone:a.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:a.timeZone};let r;try{r=new Intl.DateTimeFormat(o?.locale?.language??o?.language??"en",n)}catch{r=new Intl.DateTimeFormat("en",n)}const i=r.format(e);return"week"===t?zt(o,"candle_week_of",{date:i}):i}(t.series[0].points[r].t,t.unit,e.hass,t.zone)}</div>
      ${u.map(([e,t,o])=>W`<div class="tooltip-row">
            ${o?W`<span class="swatch" style="background:${o}"></span>`:R}
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}const Im=[...Ti.map(e=>"period_last"===e.name?{...e,default:14}:"period_unit"===e.name?{...e,default:"day"}:"source"===e.name?{...e,default:"statistics"}:"group_by"===e.name?{name:"candle_by",path:["group_by"],default:"day"}:"aggregate"===e.name?{name:"under_aggregate",path:["aggregate"],default:"mean"}:e),{name:"up_color",path:["up_color"],default:"green"},{name:"down_color",path:["down_color"],default:"red"},{name:"underneath",path:["underneath"],default:"columns"},...Bi,...Hi];const Bm={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Wm={layout:"chart",group:"history",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
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
    </g>`,validate(e){Mn(e),qo(e),xr(e),ar(e),Ta(Fm(e));for(const t of["up_color","down_color"])if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`);if(void 0!==e.underneath&&!Om.includes(e.underneath))throw new Error(`"underneath" must be one of: ${Om.join(", ")}`)},editor:function(e){const t=Xi(`candlestick|${e.config.period?.calendar?"calendar":"rolling"}`,e.hass,()=>{return[...(t=e.hass,o=e.config,Pi(t,{...o,group_by:Pm(o)}).map(e=>{const o=e;return o.schema?.some(e=>"group_by"===e.name)?{...o,schema:[{name:"candle_by",selector:Oi(t,"group_by",on)},{name:"under_aggregate",selector:Oi(t,"aggregate",an)}]}:e})),{type:"grid",name:"",schema:[{name:"up_color",selector:{text:{}}},{name:"down_color",selector:{text:{}}}]},{name:"underneath",selector:Oi(e.hass,"underneath",Om)},...Wi(e.hass),...Ii(e.hass)];var t,o});return Ji(e,"chart",t,Im)},entityFields:()=>Bm,disconnect(e){jn(e),Gn(e),br(e)},render(e){const t=Dm(e),o=En(t,e),a=Nn(t,e),n=o===R&&a===R?R:W`${o}${a}`,r=Ln(t,e),i=nr(e.raw);if(r)return rr("over"===i.header?{...i,header:"above"}:i,n,r);const s=Jn(e,t.range,function(e){let t=1/0,o=-1/0;for(const a of e)a&&(t=Math.min(t,a.low),o=Math.max(o,a.high));return t===1/0?void 0:[t,o]}(t.candles)),l=t.series.length>1;l&&(s.scales.y=To(s.value.domain,[146,0]));const{x:c,y:d}=s.scales,u=Ce(e.raw.up_color??"green"),h=Ce(e.raw.down_color??"red"),p=t.series[0],m=t.candles.map(e=>{if(!e)return R;const t=c(e.t),o=c(e.end)-t,a=t+o/2,n=e.close>=e.open?u:h,r=d(Math.max(e.open,e.close)),i=Math.max(1.5,d(Math.min(e.open,e.close))-r);return Z`<g
        class="candle entity ${e.close>=e.open?"up":"down"}"
        data-index="0"
        aria-label=${p.entity.label}
      >
        <line class="wick" x1=${a} x2=${a} y1=${d(e.high)} y2=${d(e.low)} stroke=${n}></line>
        <rect class="body" x=${t+o*(1-Tm)/2} width=${o*Tm} y=${r} height=${i} fill=${n}></rect>
      </g>`}),f=e.raw.underneath??"columns",g=Z`${l?function(e,t,o){const a=e.series.slice(1);return Z`${a.map((e,n)=>{const r=e.points.map(e=>e.v).filter(e=>null!==e),i=Math.min(0,...r),s=Math.max(0,...r),l=To([i,s===i?i+1:s],[wn,156]);if("line"===o){const o=_n(e.points).map(e=>bn(e.map(e=>[t((e.t+(e.end??e.t))/2),l(e.v)]),"straight")).join("");return Z`<path class="under-line entity" data-index=${e.index} d=${o} fill="none" stroke=${e.color}></path>`}return Z`<g class="under-columns entity" data-index=${e.index} fill=${e.color}>
      ${e.points.map(e=>{if(null===e.v)return R;const o=t(e.t),r=t(e.end??e.t)-o,i=r*Tm/a.length,s=o+r*(1-Tm)/2+n*i,c=l(Math.max(0,e.v));return Z`<rect x=${s} width=${Math.max(.5,.9*i)} y=${c} height=${Math.max(0,l(Math.min(0,e.v))-c)}></rect>`})}
    </g>`})}`}(t,c,f):R}${m}`,v=_r(e.raw),y=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_candlestick"),names:t.series.map(e=>e.entity.name).join(", ")}),b=p.points.map(e=>({t:(e.t+(e.end??e.t))/2,v:e.v}));return rr(i,n,er({axes:s,ctx:e,content:g,label:y,overlay:W`${"over"===i.header?ir(n):R}
        ${v?Hm(e,t,c,yr(e.host)):R}`,hover:v?wr(e,t.range,[b]):void 0}))}},Zm=["horizontal","vertical"],qm=1e3,Rm=100,Vm=e=>"number"==typeof e&&Number.isFinite(e),Ym=[{name:"orientation",path:["orientation"],default:"horizontal"},{name:"value_axis",path:["value_axis"],default:!0},{name:"value_grid",path:["value_grid"],default:!0},{name:"value_min",path:["value_min"]},{name:"value_max",path:["value_max"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function Gm(e){return[{name:"orientation",selector:Oi(e,"orientation",Zm)},{type:"grid",name:"",schema:[{name:"value_axis",selector:{boolean:{}}},{name:"value_grid",selector:{boolean:{}}},{name:"value_min",selector:{number:{mode:"box",step:"any"}}},{name:"value_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]}function Xm(e){for(const t of["compact","tooltip"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);if(void 0!==e.orientation&&!Zm.includes(e.orientation))throw new Error(`"orientation" must be one of: ${Zm.join(", ")}`);for(const t of["value_axis","value_grid"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of["value_min","value_max"])if(void 0!==e[t]&&!Vm(e[t]))throw new Error(`"${t}" must be a number`);if(Vm(e.value_min)&&Vm(e.value_max)&&e.value_min>=e.value_max)throw new Error('"value_min" must be below "value_max"')}function Jm(e){return{orientation:e.orientation??"horizontal",axis:!1!==e.value_axis,grid:!1!==e.value_grid,min:Vm(e.value_min)?e.value_min:void 0,max:Vm(e.value_max)?e.value_max:void 0}}function Km(e){return Math.min(140,Math.max(64,Math.round(.3*(e-32))))}function Qm(e,t,o,a=64){const n=Jm(e.raw),r=!0===e.raw.compact,i=Yn(e),s=Math.max(1,t);if("horizontal"===n.orientation){const e=To(o.domain,[0,qm]);return{orientation:n.orientation,count:s,width:qm,height:s*Rm,at:(t,o,a=0)=>[e(t),(o+.5+a)*Rm],valuePx:Math.max(40,i-32-Km(i)-8),bandPx:Math.min(r?Math.round(.69*a):a,s>12?28:s>6?40:1/0)}}const l=To(o.domain,[qm,0]),c=Math.max(40,i-32-(n.axis?40:0));return{orientation:n.orientation,count:s,width:s*Rm,height:qm,at:(e,t,o=0)=>[(t+.5+o)*Rm,l(e)],valuePx:r?110:180,bandPx:c/s}}function ef(e,t){return"horizontal"===t?Math.max(2,Math.min(8,Math.floor(e/64))):e>140?4:3}function tf(e,t,o,a){const n=Jm(t),r=Xo(e,{min:n.min,max:n.max},o);return{domain:r.domain,ticks:r.ticks,format:e=>Fn(e,r.decimals,a)}}function of(e,t){const o=function(e){for(const t of[1,2,3,4,6,12])if(t>=e)return t;return Math.max(12,Vo(e,1))}(24/Math.max(1,e)),a=[];for(let i=0;i<=24;i+=o)a.push(i);let n;const r={hour:"numeric",minute:"2-digit",timeZone:"UTC",hour12:sa(t)};try{n=new Intl.DateTimeFormat(t?.locale?.language??t?.language??"en",r)}catch{n=new Intl.DateTimeFormat("en",r)}return{domain:[0,24],ticks:a,format:e=>n.format(Date.UTC(2e3,0,1,0,Math.round(60*e)))}}const af=e=>Math.round(1e4*e)/100+"%",nf=new WeakMap;function rf(e){return nf.get(e)}function sf(e){nf.delete(e)}function lf(e,t,o,a,n){const r=(t+.5)/e.count,i="horizontal"===e.orientation?r>.5?`top:auto;bottom:${af(1-t/e.count)};right:0`:`top:${af((t+1)/e.count)};right:0`:r>.5?`top:0;right:${af(1-t/e.count)}`:`top:0;left:${af((t+1)/e.count)}`;return W`<div class="hover-layer" aria-hidden="true">
    <div class="tooltip band-tooltip" style=${i}>
      <div class="tooltip-time"><span class="swatch" style="background:${n}"></span> ${o}</div>
      ${a.map(([e,t])=>W`<div class="tooltip-row">
            <span class="tooltip-name">${e}</span>
            <span class="tooltip-value">${t}</span>
          </div>`)}
    </div>
  </div>`}function cf({ctx:e,geometry:t,categories:o,scale:a,content:n,label:r,overlay:i=R,hover:s=!1}){const l=Jm(e.raw),c="horizontal"===t.orientation,d=a.ticks.filter(e=>e>=a.domain[0]&&e<=a.domain[1]),u=l.grid?Z`<g class="grid">${d.map(e=>{const[o,a]=t.at(e,0);return c?Z`<line x1=${o} x2=${o} y1="0" y2=${t.height}></line>`:Z`<line x1="0" x2=${t.width} y1=${a} y2=${a}></line>`})}</g>`:R,h=l.axis&&d.length?W`<div class="cat-axis">
          ${c?R:W`<span class="cat-sizer" aria-hidden="true"
                  >${d.map(a.format).reduce((e,t)=>t.length>e.length?t:e,"")}</span
                >`}
          ${d.map(e=>{const o=(e=>{const[o,a]=t.at(e,0);return c?o/t.width:a/t.height})(e);return W`<span class="axis-label ${c?o<.04?"start":o>.96?"end":"":o<.08?"top":""}" style="${c?"left":"top"}:${af(o)}"
              >${a.format(e)}</span
            >`})}
        </div>`:R,p=s?function(e,t){const o=t=>{nf.get(e.host)!==t&&(void 0===t?nf.delete(e.host):nf.set(e.host,t),e.requestUpdate())};return{move(e){const a=e.currentTarget.getBoundingClientRect(),n="horizontal"===t.orientation,r=n?a.height:a.width,i=n?e.clientY-a.top:e.clientX-a.left;r>0&&o(Math.min(t.count-1,Math.max(0,Math.floor(i/r*t.count))))},leave(){o(void 0)}}}(e,t):void 0,m=W`<div class="cat-labels">
    ${o.map(e=>W`<div class="entity cat-label" data-index=${e.index} tabindex="0" aria-label=${e.label}>
          <span class="cat-name"><span class="swatch" style="background:${e.color}"></span>${e.name}</span>
          ${e.detail?W`<span class="cat-detail">${e.detail}</span>`:R}
        </div>`)}
  </div>`,f=c?`height:${t.count*t.bandPx}px`:`height:${t.valuePx}px`,g=c&&t.bandPx<40;return W`<div
    class="cat-plot ${t.orientation} ${h===R?"":"has-axis"} ${g?"dense":""}"
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
  </div>`}const df=r`
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
`;function uf(e,t,o){const a=[];for(let n=0;n<e.length;n++){const r=e[n];if(null===r.v||!Number.isFinite(r.v))continue;const i=n+1<e.length?e[n+1].t:o;if(t&&n>0&&n===e.length-1&&r.t>=o)continue;const s=t?Math.max(1,Math.min(i,o)-r.t):1;a.push({t:r.t,v:r.v,w:s,real:!0!==r.carried})}return a}function hf(e){return[...e].sort((e,t)=>e.v-t.v)}function pf(e,t){const o=e.length;if(0===o)return Number.NaN;if(1===o)return e[0].v;const a=e.reduce((e,t)=>e+t.w,0),n=Math.min(1,Math.max(0,t))*a;let r=0,i=-1/0,s=e[0].v;for(const l of e){const e=r+l.w/2;if(n<=e)return i===-1/0?l.v:s+(l.v-s)*(n-i)/(e-i||1);r+=l.w,i=e,s=l.v}return e[o-1].v}function mf(e){if(0===e.length)return;const t=hf(e),o=pf(t,.25),a=pf(t,.5),n=pf(t,.75),r=1.5*(n-o),i=t.filter(e=>e.v>=o-r&&e.v<=n+r),s=t.reduce((e,t)=>e+t.w,0);return{n:e.length,min:t[0].v,max:t[t.length-1].v,q1:o,median:a,q3:n,low:i.length?i[0].v:o,high:i.length?i[i.length-1].v:n,mean:s>0?t.reduce((e,t)=>e+t.v*t.w,0)/s:a}}function ff(e){const t=e.length;if(0===t)return 1;const o=hf(e),a=o.reduce((e,t)=>e+t.w,0),n=o.reduce((e,t)=>e+t.v*t.w,0)/a,r=Math.sqrt(o.reduce((e,t)=>e+t.w*(t.v-n)**2,0)/a),i=pf(o,.75)-pf(o,.25),s=i>0?Math.min(r,i/1.34):r,l=o.reduce((e,t)=>e+t.w*t.w,0),c=l>0?a*a/l:t;let d=1/0;for(let h=1;h<o.length;h++){const e=o[h].v-o[h-1].v;e>0&&e<d&&(d=e)}const u=.9*s*Math.max(1,c)**-.2;return u>0?Math.max(u,d===1/0?0:d):d!==1/0?d:.01*Math.abs(n)||1}function gf(e,t,o,a=64){if(0===e.length)return[];let n=1/0,r=-1/0;for(const u of e)n=Math.min(n,u.v),r=Math.max(r,u.v);const i=Math.max(o[0],n-2*t),s=Math.min(o[1],r+2*t);if(!(s>i))return[];const l=Array.from({length:a+1},(e,t)=>i+(s-i)*t/a),c=function(e,t,o){const a=e.reduce((e,t)=>e+t.w,0);if(0===a||t<=0)return o.map(()=>0);const n=1/(a*t*Math.sqrt(2*Math.PI));return o.map(o=>{let a=0;for(const n of e){const e=(o-n.v)/t;e>-6&&e<6&&(a+=n.w*Math.exp(-.5*e*e))}return a*n})}(e,t,l),d=Math.max(...c);return l.map((e,t)=>({x:e,d:d>0?c[t]/d:0}))}function vf(e){const t=43758.5453*Math.sin(12.9898*(e+1));return t-Math.floor(t)-.5}function yf(e,t){const o=e.filter(e=>e.real);if(o.length<=t)return o;const a=[];for(let n=0;n<t;n++)a.push(o[Math.floor(n*o.length/t)]);return a}const bf=["violin","raincloud"],_f=["none","day","week","month"],xf=.42;function wf(e){const t=e.shape??"violin";return{shape:t,box:!1!==e.box,readings:e.readings??"raincloud"===t,bandwidth:"number"==typeof e.bandwidth?e.bandwidth:void 0,split:e.split_by??"none"}}function $f(e,t,o,a){const n="month"===t?{month:"short",year:"numeric",timeZone:o.timeZone}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short",timeZone:o.timeZone};try{return new Intl.DateTimeFormat(a?.locale?.language??a?.language??"en",n).format(e)}catch{return new Intl.DateTimeFormat("en",n).format(e)}}const kf=(e,t,o)=>e?Pn(Fn(e.median,t.entity.decimals,o),t.entity.unit):"";function Mf(e,t,o,a,n,r,i){const s=(e,t)=>e?zt(i,"violin_median",{value:kf(e,t,i)}):zt(i,"violin_none");if("none"===o.split)return e.map((e,o)=>{const a=mf(t[o]);return{series:e,readings:t[o],summary:a,name:e.entity.name,detail:s(a,e)}});const l=e.map((e,o)=>function(e,t,o){const a=t.slice(0,-1).map(()=>[]);for(const n of e)for(let e=0;e+1<t.length;e++){const r=t[e],i=t[e+1];if(!o){n.t>=r&&n.t<i&&a[e].push(n);continue}const s=Math.min(i,n.t+n.w)-Math.max(r,n.t);s<=0||a[e].push({t:Math.max(r,n.t),v:n.v,w:s,real:n.real&&n.t>=r})}return a}(t[o],a,n)),c=[];for(let d=0;d+1<a.length;d++)for(let t=0;t<e.length;t++){const n=l[t][d];if(0===n.length)continue;const u=mf(n),h=$f(a[d],o.split,r,i);c.push({series:e[t],readings:n,summary:u,name:e.length>1?`${h} · ${e[t].entity.name}`:h,detail:s(u,e[t])})}return c}function zf(e,t,o,a,n=0,r=.42){if(0===e.length)return"";const i=e.map(e=>t.at(e.x,o,n-e.d*r)),s=e.map(e=>t.at(e.x,o,a?n:n+e.d*r));return function(e,t){const o=e=>Math.round(100*e)/100;return`${[...e,...[...t].reverse()].map(([e,t],a)=>`${a?"L":"M"}${o(e)},${o(t)}`).join("")}Z`}(i,s)}function Sf(e,t,o,a,n){const{summary:r,series:i}=e;if(!r)return Z``;const s=a.bandwidth??ff(e.readings),l=gf(e.readings,s,n),c="raincloud"===a.shape,d=Math.min(1,110/o.bandPx),u=Z`<path class="shape" d=${zf(l,o,t,c,c?-.04*d:0,(c?.44:xf)*d)}
    fill=${i.color} stroke=${i.color}></path>`,h=c?.08*d:0,p=function([e,t],[o,a]){return{x:Math.min(e,o),y:Math.min(t,a),width:Math.abs(o-e),height:Math.abs(a-t)}}(o.at(r.q1,t,h-.045*d),o.at(r.q3,t,h+.045*d)),[m,f]=o.at(r.low,t,h),[g,v]=o.at(r.high,t,h),y=a.box?Z`<g class="box">
        <line class="whisker" x1=${m} y1=${f} x2=${g} y2=${v} stroke=${i.color}></line>
        <rect class="iqr" x=${p.x} y=${p.y} width=${p.width} height=${p.height} fill=${i.color}></rect>
        <path class="median" d=${Dt([o.at(r.median,t,h)])}></path>
      </g>`:R,b=a.readings?Z`<path class="dots" stroke=${i.color} d=${Dt(yf(e.readings,300).map((e,a)=>o.at(e.v,t,d*function(e,t,o){return o?.3+.22*vf(e):1.6*vf(e)*xf*t}(a,function(e,t){if(0===e.length)return 0;let o=0;for(;o<e.length-1&&e[o+1].x<t;)o++;const a=e[o],n=e[Math.min(e.length-1,o+1)];return n.x===a.x?a.d:a.d+(n.d-a.d)*(t-a.x)/(n.x-a.x)}(l,e.v),c))))}></path>`:R;return Z`<g class="group">${u}${y}${b}</g>`}const Af=(e,t,o)=>{const a=e=>Fn(e,t.entity.decimals,o),n=e=>Pn(e,t.entity.unit);return[[zt(o,"dist_median"),n(a(e.median))],[zt(o,"dist_middle"),n(`${a(e.q1)} – ${a(e.q3)}`)],[zt(o,"dist_range"),n(`${a(e.min)} – ${a(e.max)}`)],[zt(o,"dist_count"),Fn(e.n,0,o)]]},Ef=[...Ti,{name:"shape",path:["shape"],default:"violin"},{name:"box",path:["box"],default:!0},{name:"split_by",path:["split_by"],default:"none"},{name:"bandwidth",path:["bandwidth"]},...Ym],Cf=new Map;const jf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},Nf={layout:"chart",group:"distribution",height:240,styles:r`
    ${Tn}
    ${Sr}
    ${sr}
    ${df}
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
      <circle cx="34" cy="35.5" r="1.3" /><circle cx="42" cy="37" r="1.3" /></g>`,validate(e){if(Mn(e),xr(e),Xm(e),void 0!==e.shape&&!bf.includes(e.shape))throw new Error(`"shape" must be one of: ${bf.join(", ")}`);if(void 0!==e.split_by&&!_f.includes(e.split_by))throw new Error(`"split_by" must be one of: ${_f.join(", ")}`);for(const o of["box","readings"])if(void 0!==e[o]&&"boolean"!=typeof e[o])throw new Error(`"${o}" must be true or false`);const t=e.bandwidth;if(void 0!==t&&!("number"==typeof t&&Number.isFinite(t)&&t>0))throw new Error('"bandwidth" must be a number above 0')},editor:function(e){const t=wf(e.config),o=Xi(`violin|${Fi(e.config)}`,e.hass,()=>[...Pi(e.hass,e.config),{type:"grid",name:"",schema:[{name:"shape",selector:Oi(e.hass,"shape",bf)},{name:"split_by",selector:Oi(e.hass,"split_by",_f)}]},{type:"grid",name:"",schema:[{name:"box",selector:{boolean:{}}},{name:"readings",selector:{boolean:{}}}]},{name:"bandwidth",selector:{number:{min:0,mode:"box",step:"any"}}},...Gm(e.hass)]);return Ji(e,"chart",o,function(e){let t=Cf.get(e);return t||(t=[...Ef,{name:"readings",path:["readings"],default:"raincloud"===e}],Cf.set(e,t)),t}(t.shape))},entityFields:()=>jf,disconnect(e){jn(e),Gn(e),sf(e)},render(e){const t=Date.now(),o=zn(e,t),a=En(o,e),n={...nr(e.raw),header:"above"},r=Ln(o,e);if(r)return rr(n,a,r);const i=wf(e.raw),s=Math.min(o.range.end,t),l="history"===o.source&&!o.group,c=o.series.map(e=>uf(e.points,l,s)),d="none"===i.split?[]:Ma(i.split,o.range.start,s,o.zone),u=Mf(o.series,c,i,d,l,o.zone,e.hass);let h=1/0,p=-1/0;for(const k of u){if(!k.summary)continue;const e=i.bandwidth??ff(k.readings);h=Math.min(h,k.summary.min-e),p=Math.max(p,k.summary.max+e)}const m=Jm(e.raw),f=Qm(e,u.length,{domain:[0,1]}),g=tf(h===1/0?void 0:[h,p],e.raw,ef(f.valuePx,m.orientation),e.hass),v=Qm(e,u.length,g),y=Z`${u.map((e,t)=>Sf(e,t,v,i,g.domain))}`,b=u.map(e=>({index:e.series.index,name:e.name,detail:e.detail,color:e.series.color,label:`${e.name}, ${e.detail}`})),_=_r(e.raw),x=_?rf(e.host):void 0,w=void 0===x?void 0:u[x],$=zt(e.hass,"chart_aria",{style:zt(e.hass,"raincloud"===i.shape?"violin_raincloud":"editor_style_violin"),names:o.series.map(e=>e.entity.name).join(", ")});return rr(n,a,cf({ctx:e,geometry:v,categories:b,scale:g,content:y,label:$,hover:_,overlay:w?.summary&&void 0!==x?lf(v,x,w.name,Af(w.summary,w.series,e.hass),w.series.color):R}))}},Lf=.75;function Of(e){const t=e.map((e,t)=>t).sort((t,o)=>e[t].at-e[o].at||t-o),o=new Array(e.length).fill(0),a=[];let n=0;const r=function(e){let t=0;for(const o of e)o.r>t&&(t=o.r);return t}(e);for(const i of t){const{at:t,r:s}=e[i];for(;n<a.length&&t-a[n].at>s+r+Lf;)n++;const l=a.slice(n).filter(e=>Math.abs(e.at-t)<e.r+s+Lf),c=[0];for(const e of l){const o=e.r+s+Lf,a=Math.sqrt(Math.max(0,o*o-(e.at-t)**2));c.push(e.y+a,e.y-a)}const d=c.sort((e,t)=>Math.abs(e)-Math.abs(t)||t-e).find(e=>l.every(o=>(o.at-t)**2+(o.y-e)**2>=(o.r+s+Lf)**2-1e-6)),u=d??0;o[i]=u,a.push({at:t,r:s,y:u})}return o}function Tf(e,t,o=1){let a=1,n=Of(e);const r=t=>function(e,t){let o=0;return e.forEach((e,a)=>{o=Math.max(o,Math.abs(t[a])+e.r)}),o}(e.map(e=>({...e,r:e.r*t})),n),i=Math.min(...e.map(e=>e.r)),s=Math.min(1,o/Math.max(i,1e-9));for(let l=0;l<4;l++){const o=r(a);if(o<=t)return{offsets:n,scale:a};const i=Math.max(s,a*Math.sqrt(t/o)*.95);if(i>=a)break;a=i,n=Of(e.map(e=>({...e,r:e.r*a})))}if(r(a)>t){const o=Math.max(0,t-Math.max(...e.map(e=>e.r*a))),r=Math.max(...n.map(Math.abs));r>0&&(n=n.map(e=>e*o/r))}return{offsets:n,scale:a}}const Ff=["value","time_of_day"];function Pf(e){return{placeBy:e.place_by??"value",dot:"number"==typeof e.dot_size?e.dot_size:6,sized:!0===e.size_by_value}}const Df=/^(binary_sensor|switch|input_boolean|light|fan|siren|automation)\./;function Uf(e,t,o){const a=Math.min(e.range.end,o);return e.series.map(o=>{const n="time_of_day"===t.placeBy&&Df.test(o.entity.entityId);let r;r=n?function(e){const t=[];let o=null;for(const a of e)null!==a.v&&(1!==a.v||1===o||a.carried||t.push(a),o=a.v);return t}(o.points).map(e=>({t:e.t,v:1,w:1,real:!0})):uf(o.points,"history"===e.source&&!e.group,a).filter(e=>e.real);const i=yf(r,400);return{series:o,positions:i.map(o=>"time_of_day"===t.placeBy?function(e,t){const o=ba(e,t);return o.hour+o.minute/60+o.second/3600}(o.t,e.zone.timeZone):o.v),values:i.map(e=>e.v),total:r.length,events:n}})}function Hf(e,t,o,a,n){if(0===e.positions.length)return Z``;const r=n.dot/2,i=a.domain[1]-a.domain[0]||1,s=Math.min(...e.values),l=Math.max(...e.values),c=e.values.map(t=>{if(!n.sized||e.events)return r;const o=function(e,t,o,a){if(!(o>t))return a;const n=Math.min(1,Math.max(0,(e-t)/(o-t)));return a*Math.sqrt(.12+.88*n)}(t,s,l,r);return Math.max(.5,Math.round(o/r*6)/6)*r}),d=e.positions.map((e,t)=>({at:(e-a.domain[0])/i*o.valuePx,r:c[t]})),{offsets:u,scale:h}=Tf(d,o.bandPx/2-1,1),p=new Map;return d.forEach((a,n)=>{const r=Math.round(a.r*h*2*100)/100,i=p.get(r)??[];i.push(o.at(e.positions[n],t,u[n]/o.bandPx)),p.set(r,i)}),Z`<g class="swarm entity" data-index=${e.series.index} stroke=${e.series.color}>
    ${[...p].map(([e,t])=>Z`<path class="dots" d=${Dt(t)} style="stroke-width:${e}px"></path>`)}
  </g>`}function If(e,t,o,a){const n=mf(e.positions.map((e,t)=>({t:t,v:e,w:1,real:!0})));if(!n)return[];const r=n=>o?t.format(n):Pn(Fn(n,e.series.entity.decimals,a),e.series.entity.unit);return[[zt(a,"dist_count"),Fn(e.total,0,a)],...e.positions.length<e.total?[[zt(a,"swarm_shown"),Fn(e.positions.length,0,a)]]:[],[zt(a,"dist_median"),r(n.median)],[zt(a,"dist_middle"),`${r(n.q1)} – ${r(n.q3)}`],[zt(a,o?"swarm_earliest_latest":"swarm_lowest_highest"),`${r(n.min)} – ${r(n.max)}`]]}const Bf=[...Ti,{name:"place_by",path:["place_by"],default:"value"},{name:"dot_size",path:["dot_size"],default:6},{name:"size_by_value",path:["size_by_value"],default:!1},...Ym];function Wf(e){return e.map(e=>{const t=e;return t.schema?{...t,schema:t.schema.filter(e=>"value_min"!==e.name&&"value_max"!==e.name)}:e})}const Zf={schema:[{name:"fill_color",selector:{text:{}}}],fields:[{name:"fill_color",path:["color"]}]},qf={layout:"chart",group:"distribution",height:260,styles:r`
    ${Tn}
    ${Sr}
    ${sr}
    ${df}
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
    </g>`,validate(e){if(Mn(e),Xm(e),void 0!==e.place_by&&!Ff.includes(e.place_by))throw new Error(`"place_by" must be one of: ${Ff.join(", ")}`);const t=e.dot_size;if(void 0!==t&&!("number"==typeof t&&t>=2&&t<=16))throw new Error('"dot_size" must be a number from 2 to 16');if(void 0!==e.size_by_value&&"boolean"!=typeof e.size_by_value)throw new Error('"size_by_value" must be true or false')},editor:function(e){const t=Pf(e.config),o=Xi(`beeswarm|${Fi(e.config)}|${t.placeBy}`,e.hass,()=>[...Pi(e.hass,e.config),{name:"place_by",selector:Oi(e.hass,"place_by",Ff)},{type:"grid",name:"",schema:[{name:"dot_size",selector:{number:{min:2,max:16,step:1,mode:"box",unit_of_measurement:"px"}}},{name:"size_by_value",selector:{boolean:{}}}]},..."value"===t.placeBy?Gm(e.hass):Wf(Gm(e.hass))]);return Ji(e,"chart",o,Bf)},entityFields:()=>Zf,disconnect(e){jn(e),Gn(e),sf(e)},render(e){const t=Date.now(),o=zn(e,t),a=En(o,e),n={...nr(e.raw),header:"above"},r=Ln(o,e);if(r)return rr(n,a,r);const i=Pf(e.raw),s=Uf(o,i,t),l=Jm(e.raw),c=ef(Qm(e,s.length,{domain:[0,1]},96).valuePx,l.orientation);let d;if("time_of_day"===i.placeBy)d=of(c,e.hass);else{const t=s.flatMap(e=>e.positions);d=tf(t.length?[Math.min(...t),Math.max(...t)]:void 0,e.raw,c,e.hass)}const u=Qm(e,s.length,d,96),h=Z`${s.map((e,t)=>Hf(e,t,u,d,i))}`,p=s.map(t=>{const o=function(e,t){if(0===e.total)return zt(t,"swarm_none");const o=Fn(e.total,0,t);return zt(t,e.events?"swarm_events":"swarm_readings",{n:o})}(t,e.hass);return{index:t.series.index,name:t.series.entity.name,detail:o,color:t.series.color,label:`${t.series.entity.name}, ${o}`}}),m=_r(e.raw),f=m?rf(e.host):void 0,g=void 0===f?void 0:s[f],v=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_beeswarm"),names:o.series.map(e=>e.entity.name).join(", ")});return rr(n,a,cf({ctx:e,geometry:u,categories:p,scale:d,content:h,label:v,hover:m,overlay:g&&g.total>0&&void 0!==f?lf(u,f,g.series.entity.name,If(g,d,"time_of_day"===i.placeBy,e.hass),g.series.color):R}))}};function Rf(e,t,o){const a=new Set,n=[t];for(;n.length;){const t=n.pop();if(t===o)return!0;a.has(t)||(a.add(t),n.push(...e.get(t)??[]))}return!1}function Vf(e){const t=new Map,o=[];for(const a of e)a.from&&a.to&&a.from!==a.to&&(Rf(t,a.to,a.from)||(t.set(a.from,[...t.get(a.from)??[],a.to]),o.push(a)));return o}function Yf(e){return null!==e&&Number.isFinite(e)&&e>0?e:0}function Gf(e,t){const o=Vf(e),a=function(e){const t=new Map;for(const o of e)t.set(o.from,t.get(o.from)??0),t.set(o.to,t.get(o.to)??0);for(let o=0;o<=t.size;o++){let o=!1;for(const a of e){const e=t.get(a.from)+1;e>t.get(a.to)&&(t.set(a.to,e),o=!0)}if(!o)break}return t}(o),n=new Map;for(const b of o)n.has(b.from)||n.set(b.from,n.size),n.has(b.to)||n.set(b.to,n.size);const r=o.filter(e=>Yf(e.value)>0),i=new Map,s=e=>{let t=i.get(e);return t||(t={name:e,order:n.get(e),column:a.get(e),value:0,in:0,out:0,x:0,y:0,h:0},i.set(e,t)),t},l=r.map(e=>{const t=Yf(e.value),o=s(e.from),a=s(e.to);return o.out+=t,a.in+=t,{flow:e,value:t,source:o,target:a,width:0,y0:0,y1:0}}),c=[...i.values()].sort((e,t)=>e.order-t.order);for(const b of c)b.value=Math.max(b.in,b.out);const d=[...new Set(c.map(e=>e.column))].sort((e,t)=>e-t);for(const b of c)b.column=d.indexOf(b.column);const u=d.length;if(0===u)return{nodes:c,links:l,columns:u};const h=d.map((e,t)=>c.filter(e=>e.column===t)),p=e=>t.above?.(e,u)??0,m=h.map(e=>e.reduce((e,t)=>e+p(t),0)+t.gap*(e.length-1)),f=h.map(e=>e.reduce((e,t)=>e+t.value,0)),g=Math.max(0,Math.min(...h.map((e,o)=>(t.height-m[o])/f[o]))),v=t.width-t.left-t.right-t.nodeWidth;h.forEach((e,o)=>{let a=(t.height-(f[o]*g+m[o]))/2;const n=t.left+(u>1?v*o/(u-1):v/2);for(const r of e)a+=p(r),r.x=n,r.y=a,r.h=r.value*g,a+=r.h+t.gap});const y=e=>e.y+e.h/2;for(const b of l)b.width=b.value*g;for(const b of c){const e=l.filter(e=>e.source===b).sort((e,t)=>y(e.target)-y(t.target));let t=b.y;for(const a of e)a.y0=t+a.width/2,t+=a.width;const o=l.filter(e=>e.target===b).sort((e,t)=>y(e.source)-y(t.source));t=b.y;for(const a of o)a.y1=t+a.width/2,t+=a.width}return{nodes:c,links:l,columns:u}}function Xf(e,t){return e.length*t*.58}function Jf(e,t,o){if(Xf(e,o)<=t)return e;const a=Math.floor(t/(.58*o))-1;return a>=1?`${e.slice(0,a).trimEnd()}…`:""}function Kf(e,t,o){const a=e.map((e,t)=>t).sort((t,o)=>e[t]-e[o]),n=[...e];let r=-1/0;for(const s of a)n[s]=Math.max(n[s],r+t,t/2),r=n[s];let i=1/0;for(const s of[...a].reverse())n[s]=Math.min(n[s],i-t,o-t/2),i=n[s];return n}const Qf=["auto","source","target"],eg=10,tg=e=>"string"==typeof e?e.trim():"";const og=new WeakMap,ag=(e,t)=>e.column>0&&e.column<t-1,ng=(e,t)=>0===e.column?"left":ag(e,t)&&e.in>0&&e.out>0?"above":"right";function rg(e,t){return W`<div class="chart-message">${zt(t,e)}</div>`}const ig=[{name:"link_color",path:["link_color"],default:"auto"}];const sg=[{name:"from",path:["from"],default:""},{name:"to",path:["to"],default:""},{name:"flow_color",path:["color"]}],lg=[{type:"grid",name:"",schema:[{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}}]},{name:"flow_color",selector:{text:{}}}];const cg={layout:"chart",group:"totals",height:220,styles:r`
    ${Tn}
    ${Sr}
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
    <rect x="54" y="20" width="4" height="16" rx="1" fill="var(--purple-color, #8b6cff)" />`,validate:function(e){if(void 0!==e.link_color&&!Qf.includes(e.link_color))throw new Error(`"link_color" must be one of: ${Qf.join(", ")}`);const t=[];(e.entities??[]).forEach((e,o)=>{if("object"!=typeof e||null===e)return;const a=e;for(const t of["from","to"])if(void 0!==a[t]&&"string"!=typeof a[t])throw new Error(`Entity ${o+1}: "${t}" must be a node name`);const n=tg(a.from),r=tg(a.to);if(n&&r&&n===r)throw new Error(`Entity ${o+1}: "from" and "to" must be different nodes`);n&&r&&t.push([n,r])});const o=function(e){const t=new Map;for(const[r,i]of e){if(r===i)return[r,i];t.set(r,[...t.get(r)??[],i])}const o=new Map,a=[],n=e=>{if("open"===o.get(e))return[...a.slice(a.indexOf(e)),e];if("done"!==o.get(e)){o.set(e,"open"),a.push(e);for(const o of t.get(e)??[]){const e=n(o);if(e)return e}a.pop(),o.set(e,"done")}};for(const r of t.keys()){const e=n(r);if(e)return e}}(t);if(o)throw new Error(`Flows can't go round in a loop: ${o.join(" → ")}`)},editor:function(e){const t=Xi("sankey",e.hass,()=>[{name:"link_color",selector:Oi(e.hass,"link_color",Qf)}]);return Ji(e,"chart",t,ig)},entityFields:()=>({schema:lg,fields:sg}),disconnect(e){Gn(e),og.delete(e)},render:function(e){const t=function(e){return e.items.flatMap((e,t)=>{const o=e.config,a=tg(o.from),n=tg(o.to);return a&&n?[{index:t,from:a,to:n,value:e.available?e.value:null}]:[]})}(e);if(!t.length)return rg("sankey_no_flows",e.hass);const o=e.items[t[0].index],a=t=>Pn(Fn(t,o.decimals,e.hass),o.unit),n=Math.max(200,Yn(e)-32),{show:r}=e.config,i=function(e,t,o){const a=t<400?11:12,n=a+3,r=Gf(e,{width:t,height:200,left:0,right:0,nodeWidth:eg,gap:12}),i=r.columns,s=new Map;for(const b of r.nodes)s.set(b.column,(s.get(b.column)??0)+1);const l=Math.max(200,44*Math.max(0,...s.values())),c=.3*t,d=e=>({name:o.name?e.name:"",value:o.value?o.format(e.value):""}),u=e=>{const t=r.nodes.filter(t=>ng(t,i)===e&&!ag(t,i)).map(e=>Math.max(Xf(d(e).name,a),Xf(d(e).value,a)));return t.length&&Math.max(...t)>0?Math.min(c,Math.max(...t))+6+3:2},h=u("left"),p=u("right"),m=r.nodes.some(e=>"above"===ng(e,i)),f=m&&(o.name||o.value)?20:0,g=Gf(e,{width:t,height:l-f,left:h,right:p,nodeWidth:eg,gap:12,above:(e,t)=>"above"===ng(e,t)&&f?20:0});for(const b of g.nodes)b.y+=f;for(const b of g.links)b.y0+=f,b.y1+=f;const v=i>1?(t-h-p-eg)/(i-1):t,y=[];if(o.name||o.value){for(const o of g.nodes){const e=ng(o,i),n=d(o);if("above"===e){const r=o.x+5,i=Math.min(1.6*v,2*r,2*(t-r)),s=Xf(`${n.name} ${n.value}`,a)<=i||!n.name?n.value:"",l=Jf(n.name,s?i-Xf(` ${s}`,a):i,a);y.push({node:o,side:e,name:l,value:s,y:o.y-6});continue}const r=ag(o,i)?v-eg-12:("left"===e?h:p)-6-2,s=Xf(n.value,a)<=r?n.value:"";y.push({node:o,side:e,name:Jf(n.name,r,a),value:s,y:o.y+o.h/2})}const e=o.name&&o.value?2*n:n;for(let t=0;t<i;t++){const o=y.filter(e=>"above"!==e.side&&e.node.column===t);Kf(o.map(e=>e.y),e,l).forEach((e,t)=>o[t].y=e)}}return{width:t,height:l,font:a,layout:g,labels:y}}(t,n,{name:r.name,value:r.value,format:a}),{layout:s}=i;if(!s.links.length)return rg("sankey_nothing",e.hass);const l=function(e,t,o){const a=Vf(e),n=new Set(a.map(e=>e.to)),r=new Map;for(const c of a)for(const e of[c.from,c.to])r.has(e)||r.set(e,"");const i=e=>"target"===t||"auto"===t&&n.has(e.from)?e.to:e.from,s=new Set;for(const c of a){const e=o(c.index);e&&!s.has(i(c))&&(r.set(i(c),Ce(e)),s.add(i(c)))}[...r.keys()].forEach((e,t)=>{s.has(e)||r.set(e,Ce($n[t%$n.length]))});const l=new Map;for(const c of a){const e=o(c.index);l.set(c.index,e?Ce(e):r.get(i(c)))}return{node:r,link:l}}(t,e.raw.link_color??"auto",t=>{const o=e.items[t].config.color;return"string"==typeof o&&o?o:void 0}),c=og.get(e.host),d=t=>()=>{void 0===t?og.delete(e.host):og.set(e.host,t),e.requestUpdate()},u=!0===e.hass.themes?.darkMode,h=t=>zt(e.hass,"sankey_flow",{from:t.flow.from,to:t.flow.to,value:a(t.value)}),p=zt(e.hass,"sankey_aria",{flows:s.links.map(h).join(", ")}),m=s.links.find(e=>e.flow.index===c),f=s.links.map(t=>{const o=e.items[t.flow.index],a=Se(o.config);return Z`<g
      class="entity flow ${a?"interactive":""} ${t===m?"active":""}"
      data-index=${t.flow.index}
      tabindex=${a?0:R}
      aria-label=${`${h(t)} (${o.name})`}
      @pointerenter=${d(t.flow.index)}
      @pointerleave=${d(void 0)}
      @focus=${d(t.flow.index)}
      @blur=${d(void 0)}
    >
      <title>${h(t)}</title>
      <path class="link" d=${function(e,t){const o=e.source.x+t,a=e.target.x,n=(o+a)/2,r=Math.max(1,e.width)/2,i=e=>Math.round(10*e)/10,[s,l,c,d]=[e.y0-r,e.y1-r,e.y1+r,e.y0+r].map(i);return`M${i(o)},${s}C${i(n)},${s} ${i(n)},${l} ${i(a)},${l}L${i(a)},${c}C${i(n)},${c} ${i(n)},${d} ${i(o)},${d}Z`}(t,eg)} fill=${l.link.get(t.flow.index)}></path>
    </g>`}),g=s.nodes.map(e=>Z`<rect class="node" x=${e.x} y=${e.y} width=${eg} height=${Math.max(2,e.h).toFixed(1)} rx="2"
        fill=${l.node.get(e.name)}></rect>`);return W`<div class="sankey-wrap">
    <svg
      class="sankey ${u?"dark":""} ${m?"hovering":""}"
      viewBox="0 0 ${i.width} ${i.height}"
      role="img"
      aria-label=${p}
    >
      <g class="links">${f}</g>
      <g class="nodes">${g}</g>
      <g class="labels" aria-hidden="true">${i.labels.map(e=>function(e,t){const o=e.node;if("above"===e.side)return Z`<text class="label" x=${o.x+5} y=${e.y} text-anchor="middle" font-size=${t}>
      <tspan class="name">${e.name}</tspan>${e.value?Z`<tspan class="value">${e.name?" ":""}${e.value}</tspan>`:R}
    </text>`;const a="left"===e.side?o.x-6:o.x+eg+6,n="left"===e.side?"end":"start",r=e.name&&e.value,i=t+3;return Z`<text class="label" x=${a} text-anchor=${n} font-size=${t}>
    ${e.name?Z`<tspan class="name" x=${a} y=${r?e.y-2:e.y+t/3}>${e.name}</tspan>`:R}
    ${e.value?Z`<tspan class="value" x=${a} y=${r?e.y-2+i:e.y+t/3}>${e.value}</tspan>`:R}
  </text>`}(e,i.font))}</g>
    </svg>
    ${function(e,t,o,a){if(!e)return R;const n=(e.source.x+eg+e.target.x)/2,r=(e.y0+e.y1)/2-e.width/2,i=Math.min(Math.max(n,70),t.width-70);return W`<div
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
  </div>`}},dg=new Set(["unavailable","unknown"]);function ug(e){return void 0===e||""===e||dg.has(e)}function hg(e,t){const o=[];for(let a=0;a<e.length;a++){const n=e[a];if(n.t>=t)break;const r=Math.min(t,a+1<e.length?e[a+1].t:t);if(r<=n.t)continue;const i=o[o.length-1];i&&i.state===n.s&&i.end===n.t?i.end=r:o.push({start:n.t,end:r,state:n.s})}return o}const pg={on:"amber",open:"amber",opening:"amber",closing:"amber",home:"green",playing:"green",charging:"green",auto:"green",heat_cool:"green",heat:"#ff8100",heating:"#ff8100",preheating:"#ff8100",cool:"#2b9af9",cooling:"#2b9af9",dry:"#efbd07",drying:"#efbd07",fan_only:"#14b8a6",fan:"#14b8a6",paused:"purple",buffering:"purple",detected:"red",problem:"red",triggered:"red",unlocked:"red",jammed:"red",locked:"green",armed_home:"green",armed_away:"green",armed_night:"green",armed_vacation:"green",armed_custom_bypass:"green",arming:"amber",pending:"amber",cleaning:"primary",returning:"purple"},mg=new Set(["off","closed","not_home","away","idle","standby","docked","clear","disarmed","none","false"]),fg=["primary","purple","#14b8a6","#ec4899","amber","green","blue","red"];function gg(e){const t=Math.max(0,Math.round(e/1e3));if(t<60)return`${t} s`;const o=Math.round(t/60);if(o<60)return`${o} min`;const a=Math.floor(o/60);if(a<24){const e=o-60*a;return e?`${a} h ${String(e).padStart(2,"0")}`:`${a} h`}const n=Math.floor(a/24),r=a-24*n;return r?`${n} d ${r} h`:`${n} d`}function vg(e){const t=new Set;for(const o of e)if(!ug(o.state)){if(!Number.isFinite(Number(o.state))||""===o.state.trim())return!1;t.add(o.state)}return t.size>8}const yg=new Set(["source","group_by","aggregate"]),bg=[...Ti.filter(e=>!yg.has(e.name)),{name:"bar_labels",path:["bar_labels"],default:"state"},{name:"x_axis",path:["x_axis"],default:!0},{name:"grid_vertical",path:["gridlines","vertical"],default:!0},{name:"tooltip",path:["tooltip"],default:!0},{name:"timeline_legend",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];const _g={text:{}};function xg(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?Object.entries(t):[]}function wg(e,t){const o=new Set(xg(e).map(([e])=>e)),a=(e.entities??[]).map(e=>"string"==typeof e?e:e.entity),n=a.map(e=>t?.states[e]?.state).filter(e=>!!e);return[...n,"on","off","home","not_home","heat","idle"].find(e=>!o.has(e)&&"unavailable"!==e&&"unknown"!==e)??`state_${o.size+1}`}function $g(e){const t=xg(e.config),o=t=>zt(e.hass,t),a=t=>e.commit(function(e,t){const o={...e},a=t.filter(([e])=>""!==e.trim());return a.length?o.state_colors=Object.fromEntries(a.map(([e,t])=>[e.trim(),t])):delete o.state_colors,o}(e.config,t)),n=(e,o)=>n=>{n.stopPropagation();const r=String(n.detail?.value??""),i=t.map(e=>[...e]);1===o&&""===r.trim()||(i[e][o]=r,a(i))};return W`<div class="state-colors" data-section="state-colors">
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
    ${t.map(([r,i],s)=>W`<div class="sc-row">
          <span class="sc-swatch" style="background:${Ce(i)}"></span>
          <ha-selector
            data-role="state"
            .hass=${e.hass}
            .label=${o("editor_state_colors_state")}
            .selector=${_g}
            .value=${r}
            @value-changed=${n(s,0)}
          ></ha-selector>
          <ha-selector
            data-role="color"
            .hass=${e.hass}
            .label=${o("editor_state_colors_color")}
            .selector=${_g}
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
      @click=${()=>a([...t,[wg(e.config,e.hass),"primary"]])}
    >
      ${o("editor_state_colors_add")}
    </button>
  </div>`}const kg=[{name:"timeline_group",path:["group"]}];const Mg=["state","duration","both","none"],zg={normal:30,compact:22},Sg={normal:24,compact:18};function Ag(e,t,o){const a=t.entity.stateObj??{entity_id:t.entity.entityId,state:o,attributes:{}},n=t.entity.config.attribute;try{return n?e.formatEntityAttributeValue?.(a,n,o)??o:e.formatEntityState?.({...a,state:o},o)??o}catch{return o}}function Eg(e,t,o){return function(e,t,o){const a=o?.[e];if(a)return{color:Ce(a),quiet:!1,text:Le(a)};const n=mg.has(e)&&!Object.prototype.hasOwnProperty.call(pg,e),r=Object.prototype.hasOwnProperty.call(pg,e)?pg[e]:n?"grey":fg[function(e){let t=0;for(let o=0;o<e.length;o++)t=31*t+e.charCodeAt(o)>>>0;return t}(e)%fg.length],i=Ce(r);return{color:/^[a-z0-9_]+$/.test(e)&&/^[a-z0-9_]+$/.test(t)?`var(--state-${t}-${e}-color, ${i})`:i,quiet:n,text:n?"theme":Le(r)}}(t,e.domain,function(e){const t=e.state_colors;return t&&"object"==typeof t&&!Array.isArray(t)?t:void 0}(o))}const Cg=e=>Math.round(1e4*e)/100+"%";function jg(e,t,o,a){const n=o.raw.bar_labels??"state";return e.spans.map(r=>{if(ug(r.state))return R;const{left:i,width:s}=function(e,t){const o=t.end-t.start;if(!(o>0))return{left:0,width:0};const a=Math.max(t.start,e.start),n=Math.min(t.end,e.end);return{left:(a-t.start)/o,width:Math.max(0,n-a)/o}}(r,t.range);if(s<=0)return R;const l=r.state,c=Eg(e,l,o.raw),d=function(e,t,o){const a=gg(o.end-o.start);return"state"===e?t:"duration"===e?a:"both"===e?`${t} · ${a}`:""}(n,Ag(o.hass,e.series,l),r),u=""!==d&&function(e){return 6.2*e.length+10}(d)<=s*a;return W`<div
      class="tl-bar ${c.quiet?"quiet":""} text-${c.text}"
      style="left:${Cg(i)};width:${Cg(s)};--tl-color:${c.color}"
    >
      ${u?W`<span class="tl-label">${d}</span>`:R}
    </div>`})}const Ng={layout:"chart",group:"history",height:200,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
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
    <rect x="44" y="27" width="16" height="7" rx="3" fill="var(--success-color, #1fae7a)" />`,validate:function(e){if(Ta(e.period),void 0!==e.source&&"history"!==e.source)throw new Error('"source" must be history: a state timeline reads states, which statistics don\'t keep');if(void 0!==e.group_by)throw new Error('"group_by" does not apply to a state timeline');if(void 0!==e.bar_labels&&!Mg.includes(e.bar_labels))throw new Error(`"bar_labels" must be one of: ${Mg.join(", ")}`);if(void 0!==e.x_axis&&"boolean"!=typeof e.x_axis)throw new Error('"x_axis" must be true or false');const t=e.gridlines;if(void 0!==t&&("object"!=typeof t||null===t||Array.isArray(t)))throw new Error('"gridlines" must have "vertical" (true or false)');if(void 0!==t?.vertical&&"boolean"!=typeof t.vertical)throw new Error('"gridlines.vertical" must be true or false');!function(e,t){if(void 0===e)return;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error(`${t} must map states to colours, like "on: amber"`);for(const[o,a]of Object.entries(e))if("string"!=typeof a||""===a.trim())throw new Error(`${t}: the colour for "${o}" must be text`)}(e.state_colors,'"state_colors"');for(const o of e.entities??[]){if("object"!=typeof o)continue;const e=o;if(void 0!==e.group&&"string"!=typeof e.group)throw new Error(`"group" of ${o.entity} must be text`)}xr(e),ar(e)},editor:function(e){const t=Xi(`timeline|${Fi(e.config)}`,e.hass,()=>{return[...(t=e.hass,o=e.config,Pi(t,o).filter(e=>!yg.has(e.name??"")&&!(e.schema??[]).some(e=>yg.has(e.name??"")))),{name:"bar_labels",selector:Oi(e.hass,"bar_labels",["state","duration","both","none"])},{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]},{name:"timeline_legend",selector:Oi(e.hass,"timeline_legend",["above","hidden"])}];var t,o});return W`${Ji(e,"chart",t,bg)}${$g(e)}`},entityFields:function(e){return{schema:Xi("timeline_entity",e,()=>[{name:"timeline_group",selector:{text:{}}}]),fields:kg}},disconnect(e){jn(e),Gn(e),br(e)},render(e){const t=Date.now(),o=zn(e,t,{text:!0}),a=nr(e.raw),n=a.compact?"compact":"normal",r=En(o,e),i=Math.min(o.range.end,t),s=o.series.map(e=>({series:e,spans:hg(e.points,i),domain:e.entity.entityId.split(".")[0],measurement:!1}));for(const S of s)S.measurement=vg(S.spans);const l="hidden"!==a.header,c=(e,t)=>W`<div class="frame ${a.compact?"compact":""}">${e}${t}</div>`,d="ready"!==o.status?Ln(o,e):s.every(e=>e.spans.every(e=>ug(e.state)))?W`<div class="chart-message">${zt(e.hass,"timeline_no_states")}</div>`:void 0;if(d)return c(r,d);const u=e.config.show.name,h=Yn(e),p=Math.max(0,...s.map(e=>e.series.entity.name.length)),m=u?Math.min(.35*h,7*p+10):0,f=Math.max(40,h-32-m),g=function(e,t,o){const a=Math.max(2,Math.min(8,Math.round(o/70))),n=oa(ia(t.hass)),{unit:r,ticks:i}=ra(e.range,a,n);return{unit:r,ticks:i,x:To([e.range.start,e.range.end],[0,1]),offset:n}}(o,e,f),v=!1!==e.raw.x_axis,y=e.raw.gridlines?.vertical??!0,b=_r(e.raw),_=new Map(s.map(e=>[e.series.index,e])),x=function(e,t){const o=[],a=new Set;for(const n of e){const r=t(n);if(void 0!==r){if(!a.has(r)){a.add(r),o.push({heading:r});for(const a of e)t(a)===r&&o.push({item:a})}}else o.push({item:n})}return o}(o.series.map(e=>_.get(e.index)),e=>(e=>{const t=e.entity.config.group;return"string"==typeof t&&""!==t.trim()?t.trim():void 0})(e.series)),w=o.range.end-o.range.start,$=o.live&&o.range.end>t&&t>o.range.start,k=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_timeline"),names:s.map(e=>e.series.entity.name).join(", ")}),M=b?wr(e,o.range,[Array.from({length:241},(e,t)=>({t:o.range.start+w*t/240,v:null})),...s.map(e=>e.spans.map(e=>({t:e.start,v:null})))]):void 0,z=`--tl-row:${zg[n]}px;--tl-heading:${Sg[n]}px`;return c(W`${r}${l?function(e,t){const o=new Map;for(const n of e)if(!n.measurement)for(const e of n.spans){if(ug(e.state))continue;const a=Ag(t.hass,n.series,e.state);o.has(a)||o.set(a,{label:a,color:Eg(n,e.state,t.raw)})}if(0===o.size)return R;const a=[...o.values()];return W`<div class="tl-legend">
    ${[...a.filter(e=>!e.color.quiet),...a.filter(e=>e.color.quiet)].map(({label:e,color:t})=>W`<span class="tl-key"
          ><span class="swatch ${t.quiet?"quiet":""}" style="background:${t.color}"></span>${e}</span
        >`)}
  </div>`}(s,e):R}`,W`<div class="tl-wrap ${u?"":"no-names"}" style=${z}>
        ${u?W`<div class="tl-names">
                ${x.map(e=>"heading"in e?W`<div class="tl-heading">${e.heading}</div>`:W`<div
                        class="entity tl-name"
                        data-index=${e.item.series.index}
                        tabindex="0"
                        aria-label=${e.item.series.entity.label}
                      >
                        <span>${e.item.series.entity.name}</span>
                      </div>`)}
              </div>`:R}
        <div
          class="tl-plot plot-area ${M?"hoverable":""}"
          role="img"
          aria-label=${k}
          @pointerdown=${M?.move}
          @pointermove=${M?.move}
          @pointerleave=${M?.leave}
          @pointercancel=${M?.leave}
        >
          ${y?g.ticks.map(e=>W`<div class="tl-grid" style="left:${Cg(g.x(e))}"></div>`):R}
          ${x.map(t=>"heading"in t?W`<div class="tl-gap"></div>`:W`<div class="entity tl-row" data-index=${t.item.series.index}>
                  <div class="tl-track"></div>
                  ${t.item.measurement?W`<div class="tl-hint">${zt(e.hass,"timeline_measurement")}</div>`:W`<div class="tl-bars">${jg(t.item,o,e,f)}</div>`}
                </div>`)}
          ${$?W`<div class="tl-now" style="left:${Cg(g.x(t))}" title=${zt(e.hass,"timeline_now")}></div>`:R}
          ${b?function(e,t,o,a){const n=yr(o.host);if(void 0===n)return R;const r=(n-t.range.start)/(t.range.end-t.range.start);if(!(r>=0&&r<=1))return R;const i=mr(r,a);return W`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Cg(r)}"></div>
    <div class="tooltip ${i}" style=${i.startsWith("pin")?"":`left:${Cg(r)}`}>
      <div class="tooltip-time">${ua(n,o.hass)}</div>
      ${e.map(e=>{const t=function(e,t){return e.find(o=>t>=o.start&&(t<o.end||t===o.end&&o===e[e.length-1]))}(e.spans,n),a=t?.state,r=ug(a),i=r?void 0:Eg(e,a,o.raw),s=void 0===a||""===a?"—":Ag(o.hass,e.series,a);return W`<div class="tooltip-row">
          <span class="swatch" style="background:${i?.color??"transparent"}"></span>
          <span class="tooltip-name">${e.series.entity.name}</span>
          <span class="tooltip-value"
            >${s}${t&&!r?W` <span class="tl-for"
                    >${zt(o.hass,"timeline_for",{duration:gg(t.end-t.start)})}</span
                  >`:R}</span
          >
        </div>`})}
    </div>
  </div>`}(s,o,e,f):R}
        </div>
        ${v?W`<div class="x-axis">
                ${g.ticks.map(t=>{const o=g.x(t);return W`<span class="axis-label ${o<.05?"start":o>.95?"end":""}" style="left:${Cg(o)}"
                    >${ha(t,g.unit,w,e.hass,g.offset)}</span
                  >`})}
              </div>`:R}
      </div>`)}},Lg={current:"current_temperature",target:"temperature",low:"target_temp_low",high:"target_temp_high",action:"hvac_action"},Og=Object.keys(Lg);const Tg=["heat","cool","dry","fan"],Fg={heating:"heat",preheating:"heat",cooling:"cool",defrosting:"cool",drying:"dry",fan:"fan"};function Pg(e){return void 0===e?void 0:Fg[e]}function Dg(e,t){let o=0,a=e.length;for(;o<a;){const n=o+a>>1;e[n].t<=t?o=n+1:a=n}return o>0?e[o-1]:void 0}const Ug=e=>(Math.round(100*e)/100).toString();const Hg=new Set(["source","group_by","aggregate"]),Ig=[...Ti.filter(e=>!Hg.has(e.name)),{name:"set_point",path:["set_point"],default:!0},{name:"shading",path:["shading"],default:!0},{name:"shade_fan",path:["shade_fan"],default:!1},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:Lt},{name:"current_color",path:["current_color"]},{name:"set_point_color",path:["set_point_color"]},{name:"heating_color",path:["heating_color"]},{name:"cooling_color",path:["cooling_color"]},...Bi,...Hi];function Bg(e){return Pi(e.hass,e.config).filter(e=>!Hg.has(e.name??"")&&!(e.schema??[]).some(e=>Hg.has(e.name??"")))}const Wg="var(--state-climate-heat-color, #ff8100)",Zg="var(--state-climate-cool-color, #2b9af9)",qg="var(--state-climate-dry-color, #efbd07)",Rg="var(--state-climate-fan_only-color, #8a8a8a)",Vg=["set_point","shading","shade_fan"],Yg=["current_color","set_point_color","heating_color","cooling_color"];function Gg(e,t,o){if(t.stateObj&&e?.formatEntityAttributeValue){const a=e.formatEntityAttributeValue(t.stateObj,Lg.action,o);if(a)return a}const a=zt(e,`climate_action_${o}`);return a===`climate_action_${o}`?o:a}function Xg(e,t,o,a,n){return"number"==typeof t?e.text(t):"number"==typeof o&&"number"==typeof a?zt(n,"climate_range",{low:Fn(o,e.decimals,n),high:e.text(a)}):"—"}const Jg=e=>Math.round(1e4*e)/100+"%";function Kg(e,t,o,a,n,r,i){if(void 0===i)return R;const s=n.x(i)/xn;if(!(s>=0&&s<=1))return R;const l=mr(s,Xn(e)),c=Dg(o.current,i),d=Dg(o.action,i)?.s,u=Pg(d),h=e=>Dg(e,i)?.v??void 0,p=c&&null!==c.v?n.y(c.v)/wn:-1,m=(e,t,o)=>W`<div class="tooltip-row">
      ${e}<span class="tooltip-name">${t}</span><span class="tooltip-value">${o}</span>
    </div>`;return W`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${Jg(s)}"></div>
    ${p>=0&&p<=1?W`<span
            class="hover-dot"
            style="left:${Jg(s)};top:${Jg(p)};background:${a.colors.current}"
          ></span>`:R}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${Jg(s)}`}>
      <div class="tooltip-time">${ua(i,e.hass)}</div>
      ${m(W`<span class="swatch" style="background:${a.colors.current}"></span>`,t.name,r.text(c?.v))}
      ${a.setPoint?m(W`<span class="swatch set-point-swatch" style="border-color:${a.colors.setPoint}"></span>`,zt(e.hass,"climate_set_point"),Xg(r,h(o.target),h(o.low),h(o.high),e.hass)):R}
      ${d?m(W`<span
                class="swatch action-swatch"
                style=${u?`background:${a.colors[u]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
              ></span>`,Gg(e.hass,t,d),""):R}
    </div>
  </div>`}const Qg=(e,t=!1)=>W`<div class="chart-message ${t?"error":""}">${e}</div>`;const ev={layout:"chart",group:"history",height:240,styles:r`
    ${Tn}
    ${tr}
    ${Sr}
    ${sr}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />`,validate(e){Mn(e),qo(e),xr(e),Bt(e),ar(e),function(e){if(void 0!==e.source&&"history"!==e.source)throw new Error("\"source\" must be history: long-term statistics don't keep a thermostat's set point or action");if(void 0!==e.group_by)throw new Error('"group_by" is not available on a climate chart');for(const t of Vg)if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"${t}" must be true or false`);for(const t of Yg)if(void 0!==e[t]&&("string"!=typeof e[t]||""===e[t]))throw new Error(`"${t}" must be a colour name or CSS colour`)}(e)},editor:function(e){const t=Xi(`climate|${Fi(e.config)}`,e.hass,()=>[...Bg(e),{type:"grid",name:"",schema:[{name:"set_point",selector:{boolean:{}}},{name:"shading",selector:{boolean:{}}},{name:"shade_fan",selector:{boolean:{}}}]},{type:"grid",name:"",schema:[{name:"curve",selector:Oi(e.hass,"curve",gn)},{name:"line_width",selector:ao}]},{type:"grid",name:"",schema:[{name:"current_color",selector:{text:{}}},{name:"set_point_color",selector:{text:{}}},{name:"heating_color",selector:{text:{}}},{name:"cooling_color",selector:{text:{}}}]},...Wi(e.hass),...Ii(e.hass)]);return Ji(e,"chart",t,Ig)},disconnect(e){jn(e),Gn(e),br(e)},render(e){const t=nr(e.raw),o=function(e){const t=(t,o)=>Ce(e[t]??o);return{setPoint:!1!==e.set_point,shading:!1!==e.shading,shadeFan:!0===e.shade_fan,colors:{current:t("current_color","primary"),setPoint:t("set_point_color","red"),heat:t("heating_color",Wg),cool:t("cooling_color",Zg),dry:qg,fan:Rg}}}(e.raw),a=e.items[0],n=Ta(e.raw.period),r=Sa(e.hass),i=Date.now(),s=Pa(n,i,r,n.navigate?Ua(e.host,n):0),l={start:s.start,end:s.end},c=function(e,t){const o=t.config?.unit_system,a=o?.temperature??"°C",n=e.config.unit??a,r=e.config.decimals??1,i=qt(a,e.config.unit);return{unit:n,decimals:r,...i?{conversion:i}:{},convert:e=>i&&"number"==typeof e&&Number.isFinite(e)?i.apply(e):e,text:e=>"number"==typeof e&&Number.isFinite(e)?Pn(Fn(e,r,t),n):"—"}}(a,e.hass),d=a.entityId.startsWith("climate."),u=function(e,t,o,a){const{show:n}=e.config;if(!n.name&&!n.value)return R;const r=t.stateObj?.attributes??{},i=t.entityId.startsWith("climate.")&&void 0!==t.stateObj&&!["unavailable","unknown"].includes(t.stateObj.state),s="string"==typeof r[Lg.action]?r[Lg.action]:void 0,l=Pg(s),c=(e,t,o)=>W`<div class="entity series-item" data-index="0" tabindex="0" aria-label=${`${t}, ${o}`}>
      ${e} ${n.name?W`<span class="series-name">${t}</span>`:R}
      ${n.value?W`<span class="series-value">${o}</span>`:R}
    </div>`;return W`<div class="series-header">
    ${c(W`<span class="swatch" style="background:${o.colors.current}"></span>`,t.name,i?a.text(a.convert(r[Lg.current])):t.display)}
    ${o.setPoint&&i?c(W`<span class="swatch set-point-swatch" style="border-color:${o.colors.setPoint}"></span>`,zt(e.hass,"climate_set_point"),Xg(a,a.convert(r[Lg.target]),a.convert(r[Lg.low]),a.convert(r[Lg.high]),e.hass)):R}
    ${i&&s?W`<div
            class="entity series-item action-item"
            data-index="0"
            tabindex="0"
            aria-label=${Gg(e.hass,t,s)}
          >
            <span
              class="swatch action-swatch"
              style=${l?`background:${o.colors[l]}`:"background:transparent;outline:1px solid var(--divider-color);outline-offset:-1px"}
            ></span>
            <span class="series-value action-value">${Gg(e.hass,t,s)}</span>
          </div>`:R}
  </div>`}(e,a,d?o:{...o,setPoint:!1},c);if(!d)return rr({...t,header:"above"},u,Qg(zt(e.hass,"climate_not_thermostat",{name:a.name})));const h=function(e){const t={};for(const o of Og)t[o]="action"===o?{entity:e,attribute:Lg[o],text:!0}:{entity:e,attribute:Lg[o]};return t}(a.entityId),p=fn(e.host,e.requestUpdate).get(e.hass,Object.values(h),l,"history",{live:s.live}),m=function(e,t,o,a){const n={};for(const r of Og){const i=e.get(a(t[r]))??[],s=i[i.length-1],l="action"===r?void 0!==s?.s:null!=s?.v;n[r]=s&&l&&s.t<o?[...i,{...s,t:o,carried:!0}]:i}return n}(p.data,h,Math.min(l.end,i),tn),f=e=>Rt(e,c.conversion),g=c.conversion?{...m,current:f(m.current),target:f(m.target),low:f(m.low),high:f(m.high)}:m,v=En({status:p.status,error:p.error,range:l,period:n,live:s.live,back:s.back,zone:r},e),y=v===R&&u===R?R:W`${v}${u}`,b=o.shadeFan?["heat","cool","dry","fan"]:["heat","cool","dry"],_=o.shading?function(e,t,o=Tg){const a=[];let n;for(const r of e){if(n&&r.s===n.action)continue;n&&(n.end=r.t,n.end>n.start&&a.push(n),n=void 0);const e=Pg(r.s);e&&o.includes(e)&&(n={kind:e,action:r.s,start:r.t,end:t})}return n&&t>n.start&&a.push({...n,end:Math.max(n.end,t)}),a}(g.action,Math.min(l.end,i),b):[],x=o.setPoint?[g.current,g.target,g.low,g.high]:[g.current];let w;if("loading"===p.status?w=Qg(zt(e.hass,"chart_loading")):"error"===p.status?w=Qg(zt(e.hass,"chart_error",{error:p.error??""}),!0):x.every(e=>e.every(e=>null===e.v))&&0===_.length&&(w=Qg(zt(e.hass,"chart_no_data"))),w)return rr("over"===t.header?{...t,header:"above"}:t,y,w);const $=Jn(e,l,Lo(x)),{scales:k}=$,M=e.raw.line_width??Lt,z=e.raw.curve??"smooth",S=Z`${_.map(e=>Z`<rect
        class="action-span action-${e.kind}"
        x=${k.x(e.start)}
        y="0"
        width=${Math.max(0,k.x(e.end)-k.x(e.start))}
        height=${wn}
        fill=${o.colors[e.kind]}
      ></rect>`)}`,A=function(e,t){const o=new Map(t.map(e=>[e.t,e.v]));return e.map(e=>{const t=o.get(e.t);return{t:e.t,v:null!==e.v&&"number"==typeof t?[e.v,t]:null}})}(g.low,g.high),E=o.setPoint?Z`
        <path class="range-band" d=${function(e,t,o){let a="",n=[];const r=e=>{if(!n.length)return;const r=n[n.length-1];if(e>r.t&&n.push({t:e,v:r.v}),n.length>1){const e=n.map(e=>[t(e.t),o(e.v[1])]),r=n.map(e=>[t(e.t),o(e.v[0])]);a+=`M${Ug(e[0][0])},${Ug(e[0][1])}`;for(let t=1;t<e.length;t++)a+=`H${Ug(e[t][0])}V${Ug(e[t][1])}`;a+=`V${Ug(r[r.length-1][1])}`;for(let t=r.length-2;t>=0;t--)a+=`V${Ug(r[t][1])}H${Ug(r[t][0])}`;a+="Z"}n=[]};for(const i of e)null===i.v?r(i.t):n.push({t:i.t,v:i.v});return n.length&&r(e[e.length-1].t),a}(A,k.x,k.y)} fill=${o.colors.setPoint}></path>
        ${[g.target,g.low,g.high].map(e=>Z`<path class="set-point" d=${function(e,t){return function(e){const t=[];let o=[];const a=e=>{if(!o.length)return;const a=o[o.length-1];e>a.t&&o.push({t:e,v:a.v}),t.push(o),o=[]};for(const r of e){if(null===r.v){a(r.t);continue}const e=o[o.length-1];e&&e.v===r.v||o.push({t:r.t,v:r.v})}const n=e[e.length-1];return o.length&&a(n.t),t}(e).map(e=>bn(e.map(e=>[t.x(e.t),t.y(e.v)]),"step")).join("")}(e,k)} fill="none" stroke=${o.colors.setPoint}></path>`)}`:R,C=_n(pa(g.current,500)).map(e=>bn(e.map(e=>[k.x(e.t),k.y(e.v)]),z)).join(""),j=Z`${S}${E}<path
      class="current"
      d=${C}
      fill="none"
      stroke=${o.colors.current}
      style="stroke-width:${M}px"
    ></path>`,N=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_climate"),names:a.name}),L=_r(e.raw);return rr(t,y,er({axes:$,ctx:e,content:j,label:N,overlay:W`${"over"===t.header?ir(y):R}
        ${L?Kg(e,a,g,o,k,c,yr(e.host)):R}`,hover:L?wr(e,l,[g.current,g.target,g.low,g.high,g.action]):void 0}))}},tv=[4,8,16];function ov(e,t){const o=360/t;return Math.floor(Za(e)/o+.5)%t}function av(e,t){return Ia[e*(16/t)%16]}function nv(e,t,o,a){if(t<0)return null;const n=e[t];return o-n.t<a?n.v:null}function rv(e,t){let o=0;for(let a=0;a<t.length&&t[a]<=e;a++)o=a;return o}const iv=e=>Math.round(100*e)/100||0;function sv(e,t){return[iv(e*Math.sin(t)),iv(-e*Math.cos(t))]}const lv=Ti.filter(e=>"group_by"!==e.name&&"aggregate"!==e.name).map(e=>"period_last"===e.name?{...e,default:30}:"period_unit"===e.name?{...e,default:"day"}:e),cv=[...lv,{name:"sectors",path:["sectors"],default:"16"},{name:"calm",path:["calm"]},{name:"tooltip",path:["tooltip"],default:!0},{name:"compact",path:["compact"],default:!1}];function dv(e,t){if(void 0===t)return zt(e.hass,"editor_wind_none");const o="string"==typeof t?t:t.entity;return("string"==typeof t?void 0:t.name)??e.hass?.states[o]?.attributes?.friendly_name??o}const uv={last:30,unit:"day"};function hv(e){const t=e.period;return null==t?Ta(uv):"object"!=typeof t||Array.isArray(t)?Ta(t):Ta({...uv,...t})}function pv(e){const t=e.sectors;if(null==t||""===t)return 16;const o="string"==typeof t?Number(t):t;if(!tv.includes(o))throw new Error(`"sectors" must be one of: ${tv.join(", ")}`);return o}function mv(e){const t=e.calm;if(null==t||""===t)return;const o="string"==typeof t?Number(t):t;if("number"!=typeof o||!Number.isFinite(o)||o<0)throw new Error('"calm" must be a number of 0 or more');return o}const fv=["color-mix(in srgb, var(--primary-color, #2f6fe4) 35%, var(--card-background-color, #fff))","color-mix(in srgb, var(--primary-color, #2f6fe4) 62%, var(--card-background-color, #fff))","var(--primary-color, #2f6fe4)","color-mix(in srgb, var(--primary-color, #2f6fe4) 68%, var(--primary-text-color, #212121))","color-mix(in srgb, var(--purple-color, #8b6cff) 80%, var(--primary-text-color, #212121))"],gv=(e,t)=>Fn(e,Number.isInteger(e)?0:1,t.hass);function vv(e,t,o){return Number.isFinite(e)?void 0===t?`${gv(e,o)}+`:`${gv(e,o)}–${gv(t,o)}`:void 0===t?"":`< ${gv(t,o)}`}function yv(e,t,o=!1){const a=100*e;return 0===a?`${Fn(0,0,t.hass)}%`:`${Fn(a,o||a<1?1:0,t.hass)}%`}const bv=new WeakMap;function _v(e,t){bv.get(e.host)!==t&&(void 0===t?bv.delete(e.host):bv.set(e.host,t),e.requestUpdate())}const xv=124;function wv(e,t,o,a){const{rose:n,n:r,bands:i,rings:s}=e,l=2*Math.PI/r,c=.09*l,d=_r(a.raw),u=n.sectors.map((o,s)=>{if(n.totals[s]<=0)return R;const u=s*l-l/2+c,h=s*l+l/2-c;let p=0;const m=o.map((t,o)=>{if(t<=0)return R;const a=function(e,t,o,a){if(t<=e||a<=o)return"";const n=a-o>Math.PI?1:0,[r,i]=sv(t,o),[s,l]=sv(t,a),c=`M${r} ${i}A${t} ${t} 0 ${n} 1 ${s} ${l}`;if(e<=0)return`${c}L0 0Z`;const[d,u]=sv(e,a),[h,p]=sv(e,o);return`${c}L${d} ${u}A${e} ${e} 0 ${n} 0 ${h} ${p}Z`}(e.radius(p),e.radius(p+t),u,h);return p+=t,Z`<path d=${a} style="fill:${i[o].color}"></path>`}),f=av(s,r),g=t.index>=0;return Z`<g
      class="petal ${g?"entity":""}"
      data-index=${g?t.index:R}
      data-sector=${s}
      tabindex=${g||d?0:R}
      aria-label=${`${f} ${yv(n.totals[s],a,!0)}`}
      @pointerenter=${d?()=>_v(a,s):R}
      @pointerleave=${d?()=>_v(a,void 0):R}
      @focus=${d?()=>_v(a,s):R}
      @blur=${d?()=>_v(a,void 0):R}
    >${m}</g>`}),h=function(e){const t=e.length;let o=0,a=1/0;for(let n=0;n<t;n++){const r=(Math.floor(t/8)+n)%t,i=Math.max(e[r],e[(r+1)%t]);i<a-1e-9&&(o=r,a=i)}return 2*(o+.5)*Math.PI/t}(n.totals),p=["N","E","S","W"].map((e,t)=>{const[o,a]=sv(113,t*Math.PI/2);return Z`<text class="compass ${"N"===e?"north":""}" x=${o} y=${a+4}>${e}</text>`});return W`<svg class="rose" viewBox="${-124} ${-124} ${248} ${248}" role="img" aria-label=${o}>
    ${s.map(t=>Z`<circle class="ring" r=${e.radius(t/100)}></circle>`)}
    <circle class="rim" r=${102}></circle>
    <line class="spoke" x1="0" y1=${-102} x2="0" y2=${102}></line>
    <line class="spoke" x1=${-102} y1="0" x2=${102} y2="0"></line>
    <g class="petals">${u}</g>
    <circle class="calm-circle" r=${9}></circle>
    ${p}
    ${s.map(t=>{const[o,n]=sv(e.radius(t/100),h),r=Math.sin(h)>=0?"start":"end";return Z`<text class="ring-label" x=${o+("start"===r?3:-3)} y=${n} text-anchor=${r}>${Fn(t,Number.isInteger(t)?0:1,a.hass)}%</text>`})}
  </svg>`}function $v(e,t,o,a){const n=void 0!==o&&o.index>=0;return W`<div
    class="stat stat-${a} ${n?"entity":""}"
    data-index=${n?o.index:R}
    tabindex=${n?0:R}
  >
    <span class="stat-label">${e}</span>
    <span class="stat-value">${t}</span>
  </div>`}function kv(e,t,o,a){const n=(e,t)=>zt(a.hass,e,t),{rose:r}=e,i=r.prevailing<0?"—":`${av(r.prevailing,e.n)} · ${yv(r.totals[r.prevailing],a)}`,s=e=>null===e?"—":Pn(Fn(e,o?.decimals??1,a.hass),o?.unit??"");return W`<div class="readout">
    <div class="stats">
      ${$v(n("wind_prevailing"),i,t.direction,"prevailing")}
      ${o?W`${$v(n("wind_mean_speed"),s(r.meanSpeed),t.speed,"mean")}
            ${$v(n("wind_strongest"),s(function(e){let t=null;for(const o of e){const e="number"==typeof o.max&&Number.isFinite(o.max)?o.max:o.v;null!==e&&(null===t||e>t)&&(t=e)}return t}(o.points)),t.speed,"strongest")}
            ${$v(n("wind_calm"),yv(r.calm,a),t.speed,"calm")}`:R}
    </div>
    ${o?W`<div class="speed-legend">
            <div class="stat-label">${o.unit?n("wind_speed_unit",{unit:o.unit}):n("wind_speed")}</div>
            <div class="keys">
              ${e.bands.map(e=>W`<div class="key">
                    <span class="key-swatch" style="background:${e.color}"></span>
                    <span class="key-label">${e.label}</span>
                  </div>`)}
            </div>
          </div>`:R}
  </div>`}const Mv={layout:"chart",group:"distribution",height:280,styles:r`
    ${Tn}
    ${Sr}
    ${sr}
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
    <path d="M32 20 L40 24 A9 9 0 0 1 37 27 Z" fill="var(--primary-color, #03a9f4)" opacity="0.4" />`,validate(e){Mn(e),hv(e),xr(e),ar(e),pv(e),mv(e)},editor:function(e){const t=Xi(`wind_rose|${Fi(e.config)}`,e.hass,()=>[...Pi(e.hass,e.config).filter(e=>!e.schema?.some(e=>"group_by"===e.name)),{type:"grid",name:"",schema:[{name:"sectors",selector:Oi(e.hass,"sectors",tv.map(String))},{name:"calm",selector:{number:{min:0,mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"tooltip",selector:{boolean:{}}},{name:"compact",selector:{boolean:{}}}]}]),o=e.config.entities??[],a={...e,config:(n=e.config,"number"==typeof n.sectors?{...n,sectors:String(n.sectors)}:n),commit:t=>e.commit(function(e){if("string"!=typeof e.sectors)return e;const t=Number(e.sectors);return{...e,sectors:Number.isFinite(t)?t:e.sectors}}(t))};var n;const r="margin: 0 0 12px; color: var(--secondary-text-color); font-size: 0.875em; line-height: 1.4;";return W`<p class="wind-roles" style=${r}>
      ${zt(e.hass,"editor_wind_roles")}
      <br /><b
        >${zt(e.hass,"editor_wind_now",{direction:dv(e,o[0]),speed:dv(e,o[1])})}</b
      >
    </p>
    ${"statistics"===e.config.source?W`<p class="wind-statistics" style=${r}>${zt(e.hass,"editor_wind_statistics")}</p>`:R}
    ${Ji(a,"chart",t,cv)}`},disconnect(e){jn(e),bv.delete(e)},render(e){const t={...nr(e.raw),header:"above"},o=function(e){const t=e.config.entities.length?e.config.entities:e.items.map(e=>e.config),o=t=>t&&{id:t.entity,entity:t,index:e.items.findIndex(e=>e.entityId===t.entity)};return{direction:o(t[0]),speed:o(t[1])}}(e),a=o.direction;if(!a)return W``;const n=function(e,t,o,a=Date.now()){const n=hv(e.raw),r=e.raw.source??"history",i=Sa(e.hass),s=Pa(n,a,i,n.navigate?Ua(e.host,n):0),l={start:s.start,end:s.end},c=[{entity:t.id,attribute:t.entity.attribute,bearing:!0},...o?[{entity:o.id,attribute:o.entity.attribute}]:[]],d="statistics"===r?function(e){return{period:e.end-e.start<=1728e5?"5minute":"hour",types:["mean","max"],value:"mean"}}(l):void 0,u=d?ln[d.period]:1/0,h=d?{start:l.start-u,end:l.end}:l,p=fn(e.host,e.requestUpdate).get(e.hass,c,h,r,{live:s.live,statistics:d}),m=e=>p.data.get(tn(e))??[],f=m(c[0]),g=o?m(c[1]):void 0;return{frame:{status:p.status,error:p.error,range:l,period:n,source:r,series:[],live:s.live,back:s.back,zone:i},direction:f,speed:g?.some(e=>null!==e.v)?g:void 0,until:Math.min(l.end,a),maxHold:u}}(e,a,o.speed),{frame:r}=n,i=En(r,e),s=W`<div class="chart-message">${zt(e.hass,"chart_no_data")}</div>`,l="ready"!==r.status?Ln(r,e):n.direction.every(e=>null===e.v)?s:void 0;if(l)return rr(t,i,l);const c=pv(e.raw),d=n.speed?o.speed:void 0,u=d?function(e,t){const o=e.entity.attribute?"":String(t.hass.states[e.id]?.attributes?.unit_of_measurement??""),a=e.entity.unit??o,n=void 0===e.entity.unit?void 0:qt(o||void 0,e.entity.unit);return n?{unit:a,conversion:n}:{unit:a}}(d,e):void 0,h=u?.unit,p=n.speed&&Rt(n.speed,u?.conversion),m=function(e){switch((e??"").trim().toLowerCase()){case"km/h":case"kmh":case"kph":return{from:[0,12,20,29,39],calm:1.8};case"mph":return{from:[0,8,13,19,25],calm:1.1};case"kn":case"kt":case"kts":case"knot":case"knots":return{from:[0,7,11,17,22],calm:1};case"ft/s":return{from:[0,10,20,30,40],calm:1.6};default:return{from:[0,3,6,9,12],calm:.5}}}(h),f=d?function(e,t,o){return e!==st&&e.length>0?e.map((t,a)=>({from:t.from,color:Ce(t.color),label:t.label??vv(t.from,e[a+1]?.from,o)})):t.map((e,a)=>({from:e,color:fv[a%fv.length],label:vv(e,t[a+1],o)}))}(gs(d.entity.severity,e.hass,h),m.from,e):[{from:0,color:"var(--primary-color, #2f6fe4)",label:""}],g=d?mv(e.raw)??m.calm:0,v=function(e,t,o,a=1/0){const n=new Set([o]);for(const c of t?[e,t]:[e])for(const e of c)n.add(e.t),Number.isFinite(a)&&n.add(e.t+a);const r=[...n].filter(e=>e<=o).sort((e,t)=>e-t),i=[];let s=-1,l=-1;for(let c=0;c+1<r.length;c++){const o=r[c],n=r[c+1]-o;for(;s+1<e.length&&e[s+1].t<=o;)s++;const d=nv(e,s,o,a);if(null===d)continue;let u=null;if(t){for(;l+1<t.length&&t[l+1].t<=o;)l++;if(u=nv(t,l,o,a),null===u)continue}const h=i[i.length-1];h&&h.dir===d&&h.speed===u?h.ms+=n:i.push({dir:d,speed:u,ms:n})}return i}(n.direction,p,n.until,n.maxHold),y=function(e,t,o,a=0){const n=Math.max(1,o.length),r=Array.from({length:t},()=>new Array(n).fill(0));let i=0,s=0,l=0,c=0;for(const m of e){if(i+=m.ms,null!==m.speed&&(l+=m.ms,c+=m.speed*m.ms,m.speed<a)){s+=m.ms;continue}const e=null===m.speed?0:rv(m.speed,o);r[ov(m.dir,t)][e]+=m.ms}const d=e=>i>0?e/i:0,u=r.map(e=>e.map(d)),h=u.map(e=>e.reduce((e,t)=>e+t,0));let p=-1;return h.forEach((e,t)=>{e>0&&(p<0||e>h[p])&&(p=t)}),{total:i,calm:d(s),sectors:u,totals:h,prevailing:p,meanSpeed:l>0?c/l:null}}(v,c,f.map(e=>e.from),g);if(y.total<=0)return rr(t,i,s);const b=function(e){if(!(e>0))return[];const t=e/3,o=10**Math.floor(Math.log10(t)),a=[1,2,2.5,5,10].map(e=>e*o).find(e=>e>=t-1e-9)??10*o,n=Math.max(1,Math.ceil(e/a-1e-9));return Array.from({length:n},(e,t)=>Math.round((t+1)*a*1e3)/1e3)}(100*Math.max(0,...y.totals)),_=(b[b.length-1]??100)/100,x={rose:y,n:c,bands:f,rings:b,radius:e=>10+e/_*90},w=t=>yv(t,e),$={direction:y.prevailing<0?"":av(y.prevailing,c),share:y.prevailing<0?"":w(y.totals[y.prevailing]),calm:w(y.calm)},k=zt(e.hass,y.prevailing<0?"wind_aria_still":d?"wind_aria_calm":"wind_aria",$),M=d?{unit:h??"",decimals:d.index>=0?e.items[d.index].decimals:1,points:p??[]}:void 0;return rr(t,i,W`<div class="wind">
        <div class="rose-wrap">
          ${wv(x,a,k,e)} ${function(e,t,o){const a=bv.get(o.host);if(!(void 0!==a&&_r(o.raw)&&e.rose.totals[a]>0))return R;const n=2*a*Math.PI/e.n,[r,i]=sv(e.radius(e.rose.totals[a]),n),s=r>0?"left":"right",l=void 0===t?[{color:e.bands[0].color,name:zt(o.hass,"wind_share"),share:e.rose.totals[a]}]:e.rose.sectors[a].map((o,a)=>({color:e.bands[a].color,name:Pn(e.bands[a].label,t),share:o})).filter(e=>e.share>0);return W`<div class="hover-layer" aria-hidden="true">
    <div
      class="tooltip rose-tip ${s}"
      style="left:${(r+xv)/248*100}%;top:${(i+xv)/248*100}%"
    >
      <div class="tooltip-time">${av(a,e.n)} · ${yv(e.rose.totals[a],o,!0)}</div>
      ${l.map(e=>W`<div class="tooltip-row">
            <span class="swatch" style="background:${e.color}"></span>
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${yv(e.share,o,!0)}</span>
          </div>`)}
    </div>
  </div>`}(x,M?M.unit:void 0,e)}
        </div>
        ${kv(x,{direction:a,speed:d},M,e)}
      </div>`)}},zv=2*Math.PI,Sv=1440,Av=6e4,Ev=["on","open","opening","closing","home","playing","heating","cooling","drying","active","running","cleaning","detected"],Cv=new Set(["unavailable","unknown"]);function jv(e){return void 0===e||""===e||Cv.has(e)}function Nv(e,t,o,a){const n=e[e.length-1];n&&n.end===t?n.end=o:e.push(a?{start:t,end:o,carried:a}:{start:t,end:o})}function Lv(e,t){const o=[];for(const a of e){const e=Math.max(t.start,a.start),n=Math.min(t.end,a.end);if(n<=e)continue;const r=!0===a.carried||a.start<t.start;o.push(r?{start:e,end:n,carried:r}:{start:e,end:n})}return o}function Ov(e){return e.filter(e=>!e.carried).length}function Tv(e,t,o){return(e+_a(e,o)-(t+_a(t,o)))/Av}function Fv(e,t,o){const a=e.start,n=e.end,r=_a(a,o),i=_a(Math.max(a,n-1e3),o),s=t+_a(t,o),l=(e,t)=>(e=>Math.min(Sv,Math.max(0,e)))((e+t-s)/Av);if(r===i)return[[l(a,r),l(n,r)]];const c=function(e,t,o){const a=_a(e,o);for(;t-e>1e3;){const n=Math.floor((e+t)/2);_a(n,o)===a?e=n:t=n}return 1e3*Math.floor(t/1e3)}(a,n-1e3,o);return[[l(a,r),l(c,r)],[l(c,i),l(n,i)]].filter(([e,t])=>t>e)}function Pv(e){return e/Sv*zv}function Dv(e,[t,o]){const a=Math.max(0,Math.ceil(t-.5)),n=Math.min(Sv,Math.ceil(o-.5));for(let r=a;r<n;r++)e[r]=1}const Uv=[15,30,60];function Hv(e,t){const o=t*Av,a=[];for(let n=e.start;n<e.end;n+=o)a.push(n);return a.push(e.end),a}const Iv=new Set(["sum","change"]);function Bv(e,t){if("max"===t)return Math.max(...e);if("min"===t)return Math.min(...e);if("first"===t)return e[0];if("last"===t)return e[e.length-1];const o=e.reduce((e,t)=>e+t,0);return Iv.has(t)?o:o/e.length}function Wv(e){return Iv.has(e)}function Zv(e){const t=Math.max(0,Math.round(e/Av)),o=Math.floor(t/60),a=t-60*o;return 0===o?`${a} m`:a?`${o} h ${a} m`:`${o} h`}function qv(e,t){return[Rv(e*Math.sin(t)),Rv(-e*Math.cos(t))]}function Rv(e){return Math.round(100*e)/100||0}function Vv(e,t,o,a){if(t<=0||a<=o)return"";const n=Math.max(0,e);if(a-o>=zv-1e-6){const e=(e,t)=>{const[o,a]=qv(e,0),[n,r]=qv(e,Math.PI);return`M${o} ${a}A${e} ${e} 0 1 ${t} ${n} ${r}A${e} ${e} 0 1 ${t} ${o} ${a}Z`};return n>0?`${e(t,1)}${e(n,0)}`:e(t,1)}const r=a-o>Math.PI?1:0,[i,s]=qv(t,o),[l,c]=qv(t,a),d=`M${i} ${s}A${t} ${t} 0 ${r} 1 ${l} ${c}`;if(0===n)return`${d}L0 0Z`;const[u,h]=qv(n,a),[p,m]=qv(n,o);return`${d}L${u} ${h}A${n} ${n} 0 ${r} 0 ${p} ${m}Z`}const Yv=[{name:"days",path:["days"],default:1},{name:"period_offset",path:["period","offset"],default:0},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"center",path:["center"],default:"total"},{name:"bucket",path:["bucket"],default:"60"},{name:"aggregate",path:["aggregate"],default:"auto"},{name:"tooltip",path:["tooltip"],default:!0}];const Gv=[{type:"grid",name:"",schema:[{name:"ring_color",selector:{text:{}}},{name:"active",selector:{text:{multiple:!0}}}]}],Xv=[{name:"ring_color",path:["color"]},{name:"active",path:["active"]}];const Jv=["total","now","none"],Kv=new Set(["alarm_control_panel","automation","binary_sensor","calendar","climate","cover","device_tracker","fan","humidifier","input_boolean","lawn_mower","light","lock","media_player","person","remote","schedule","script","siren","switch","timer","vacuum","valve","water_heater"]),Qv=e=>e.split(".")[0];function ey(e){const t=e.config.active;if("string"==typeof t&&""!==t.trim()||Array.isArray(t)&&t.length>0)return"state";if(Kv.has(Qv(e.entityId)))return"state";const o=e.stateObj?.attributes??{};if(!e.config.attribute&&(void 0!==o.unit_of_measurement||void 0!==o.state_class))return"numeric";const a=e.stateObj?.state,n="string"==typeof a&&""!==a.trim()&&Number.isFinite(Number(a));return e.available&&n?"numeric":"state"}function ty(e,t){return e.config.attribute?e.config.attribute:"state"===t&&"climate"===Qv(e.entityId)?"hvac_action":void 0}function oy(e,t){if(void 0!==t.aggregate)return t.aggregate;const o=e.stateObj?.attributes?.state_class;return"total_increasing"===o||"total"===o?"change":"mean"}function ay(e,t,o,a){const n=t.stateObj;let r=o.replace(/_/g," ");if(n){const t=a?e.formatEntityAttributeValue?.(n,a,o):e.formatEntityState?.(n,o);t&&(r=t)}return r.toLocaleLowerCase()}function ny(e,t){const o=Math.round(e)%Sv,a=Date.UTC(2e3,0,1,Math.floor(o/60),o%60);return new Intl.DateTimeFormat(t?.locale?.language??"en",{hour:"numeric",minute:"2-digit",hour12:sa(t),timeZone:"UTC"}).format(a)}function ry(e,t,o){return Pn(Fn(e,t.decimals,o),t.unit)}function iy(e,t=Date.now()){const{raw:o,hass:a}=e,n=o.days??1,r=Number(o.bucket??60),i=function(e,t){const o=Ta(e.period);return 1===t?{last:1,unit:"day",calendar:"day",offset:o.offset,navigate:o.navigate,until:"end"}:{last:t,unit:"day",offset:o.offset,navigate:o.navigate,until:"end"}}(o,n),s=Math.max(0,i.offset+(i.navigate?Ua(e.host,i):0)),l=Sa(a),c=function(e,t,o,a){const n=ka("day",$a("day",e,t),-a*o,t),r=[];for(let i=o-1;i>=-1;i--)r.push(ka("day",n,-i,t));return r}(t,l,n,s),d=0===s,u=c[c.length-1],h=Math.min(u,t),p=e.items.map(ey),m=e.items.map((e,t)=>({entity:e.entityId,attribute:ty(e,p[t]),text:!0})),f=fn(e.host,e.requestUpdate).get(a,m,{start:c[0],end:d?t:u},"history",{live:d}),g={start:c[0],end:h},v=Math.max(1,c.slice(0,-1).filter(e=>e<h).length),y=e.items.map((e,t)=>{const i=p[t],s=e.config,d=e.stateObj?f.data.get(tn(m[t]))??[]:[],u={index:t,entity:e,kind:i,color:Ce(s.color??$n[t%$n.length]),missing:!e.stateObj,hasData:!1,intervals:[],runs:[],slots:[],heights:[],aggregate:oy(e,o),totalMs:0,count:0,stat:""};if("state"===i){const e=function(e){if("string"==typeof e&&""!==e.trim())return new Set([e.trim()]);if(Array.isArray(e)){const t=e.filter(e=>"string"==typeof e&&""!==e.trim()).map(e=>e.trim());if(t.length)return new Set(t)}return new Set(Ev)}(s.active),t=function(e,t,o){const a={active:[],known:[]};for(let n=0;n<e.length;n++){const r=e[n],i=n+1<e.length?e[n+1].t:t.end,s=Math.max(t.start,r.t),l=Math.min(t.end,i);if(l<=s||jv(r.s))continue;const c=!0===r.carried||r.t<t.start;Nv(a.known,s,l,c),o.has(r.s)&&(Nv(a.active,s,l,c),a.word=r.s)}return a}(d,g,e);u.hasData=t.known.length>0,u.word=t.word;const o=t.active;1===n?u.intervals=o:u.runs=function(e,t,o,a){const n=new Uint16Array(Sv),r=new Uint16Array(Sv);for(let s=0;s+1<o.length;s++){const i={start:o[s],end:o[s+1]},l=new Uint8Array(Sv),c=new Uint8Array(Sv);for(const e of Lv(t,i))for(const t of Fv(e,i.start,a))Dv(c,t);for(const t of Lv(e,i))for(const e of Fv(t,i.start,a))Dv(l,e);for(let e=0;e<Sv;e++)r[e]+=c[e],n[e]+=l[e]&c[e]}const i=[];for(let s=0;s<Sv;s++){if(0===n[s])continue;const e=i[i.length-1];e&&e.to===s&&e.on===n[s]&&e.of===r[s]?e.to=s+1:i.push({from:s,to:s+1,on:n[s],of:r[s]})}return i}(o,t.known,c,l.timeZone),u.totalMs=o.reduce((e,t)=>e+t.end-t.start,0)/v;let r=0;for(let a=0;a+1<c.length;a++)r+=Ov(Lv(o,{start:c[a],end:c[a+1]}));u.count=r/v;const i=e=>1===n?e:zt(a,"day_clock_a_day",{text:e}),h=[i(Zv(u.totalMs))];u.count>0&&h.push(i(function(e,t){const o=Math.round(10*t)/10;return 1===o?zt(e,"day_clock_times_one"):zt(e,"day_clock_times",{n:o})}(a,u.count))),u.stat=h.join(" · ")}else{const t=Rt(d.map(e=>({...e,v:Ra(e.s),s:void 0})),e.conversion);u.slots=function(e,t,o,a,n,r){const i=new Map;for(let s=0;s+1<t.length;s++){const l={start:t[s],end:t[s+1]};if(l.start>=n)break;const c=rn(e,Hv(l,o),a,n),d=new Map;for(const e of c){if(null===e.v)continue;const t=Math.floor(Tv(e.t,l.start,r)/o);t<0||t*o>=Sv||d.set(t,[...d.get(t)??[],e.v])}for(const[e,t]of d)i.set(e,[...i.get(e)??[],Bv(t,a)])}return[...i.entries()].sort((e,t)=>e[0]-t[0]).map(([e,t])=>({index:e,v:t.reduce((e,t)=>e+t,0)/t.length,days:t.length}))}(t,c,r,u.aggregate,h,l.timeZone);const o=Wv(u.aggregate);if(u.heights=function(e,t){if(0===e.length)return[];const o=e.map(e=>e.v);if(t){const e=Math.max(...o.map(Math.abs));return o.map(t=>e>0?Math.abs(t)/e:0)}const a=Math.min(...o),n=Math.max(...o);return o.map(e=>n>a?.15+.85*(e-a)/(n-a):1)}(u.slots,o),u.hasData=u.slots.length>0,u.hasData){const t=u.slots.reduce((e,t)=>t.v>e.v?t:e),i=ny(t.index*r,a);if(o){const t=ry(u.slots.reduce((e,t)=>e+t.v,0),e,a);u.stat=zt(a,"day_clock_busiest",{total:1===n?t:zt(a,"day_clock_a_day",{text:t}),time:i})}else u.stat=zt(a,"day_clock_peak",{value:ry(t.v,e,a),time:i})}}return u.missing?u.stat=zt(a,"entity_not_found"):u.hasData||"ready"!==f.status||(u.stat=zt(a,"day_clock_no_data")),u});return{status:f.status,error:f.error,rings:y,bounds:c,days:n,bucket:r,live:d,now:t,period:i,back:s,zone:l}}const sy=new WeakMap;function ly(e){let t=sy.get(e);return t||(t={},sy.set(e,t)),t}function cy(e,t,o){const a=ly(e.host);void 0!==a.timer&&clearTimeout(a.timer),a.timer=void 0,a.ring===t&&a.item===o||(a.ring=t,a.item=o,e.requestUpdate())}const dy=new WeakMap;function uy(e,t){if(dy.has(e.host))return;const o=6e4-t%6e4+50;dy.set(e.host,setTimeout(()=>{dy.delete(e.host),"undefined"!=typeof document&&"hidden"===document.visibilityState?uy(e,Date.now()):e.requestUpdate()},o))}const hy=-132,py=-120,my=264,fy=240,gy=92;function vy(e,t,o){const a=sy.get(e.host);if(void 0===a?.ring||void 0===a.item)return R;const n=t.rings[a.ring],r=o[a.ring]?.[a.item];if(!n||!r)return R;const{time:i,value:s}=function(e,t,o,a){const n=(e,t)=>zt(a,"day_clock_range",{from:e,to:t});if("numeric"===e.kind){const r=e.slots[t],i=n(ny(r.index*o.bucket,a),ny((r.index+1)*o.bucket,a)),s=ry(r.v,e.entity,a);return{time:i,value:1===o.days?s:zt(a,"day_clock_average_value",{value:s})}}if(o.days>1){const o=e.runs[t];return{time:n(ny(o.from,a),ny(o.to,a)),value:zt(a,"day_clock_on_days",{on:o.on,of:o.of})}}const r=e.intervals[t],i=o.live&&r.end>=o.now-1e3,s=i?zt(a,"day_clock_now").toLocaleLowerCase():da(r.end,a),l=Zv(r.end-r.start);return{time:n(da(r.start,a),s),value:i?zt(a,"day_clock_so_far",{duration:l}):l}}(n,r.item,t,e.hass),[l,c]=qv(r.r+4,r.angle);return W`<div class="dc-tip tooltip ${`${l<0?"tip-right":"tip-left"} ${c<0?"tip-down":"tip-up"}`}" style="left:${(l-hy)/my*100}%;top:${(c-py)/fy*100}%" aria-hidden="true">
    <div class="tooltip-time">${i}</div>
    <div class="tooltip-row">
      <span class="swatch" style="background:${n.color}"></span>
      <span class="tooltip-name">${n.entity.name}</span>
      <span class="tooltip-value">${s}</span>
    </div>
  </div>`}function yy(e,t,o){const a=t.toLocaleLowerCase().includes(o.toLocaleLowerCase())?zt(e,"day_clock_on"):o;return zt(e,"day_clock_state",{name:t,state:a})}function by(e,t){const o=e.entity;if(!o.stateObj)return o.display;if("numeric"===e.kind)return zt(t,"day_clock_state",{name:o.name,state:o.display});const a=ty(o,"state"),n=a?o.stateObj.attributes?.[a]:o.stateObj.state;return"string"!=typeof n?zt(t,"day_clock_state",{name:o.name,state:o.display}):yy(t,o.name,ay(t,o,n,a))}function _y(e){return e.rings.find(e=>!e.missing)}function xy(e,t,o){const a=Math.min(o,t/Math.max(1,.56*e.length)),n=.62*o;if(a>=n)return{size:a,text:e};const r=Math.max(3,Math.floor(t/(.56*n))-1);return{size:n,text:`${e.slice(0,r).trimEnd()}…`}}function wy(e,t,o){const a=function(e,t){const o=e.raw.center??"total";if("none"===o||0===t.rings.length)return;const{hass:a}=e,n=_y(t);if("now"===o&&t.live&&1===t.days&&n)return[da(t.now,a),by(n,a)];const r=t.rings.find(e=>"state"===e.kind&&e.hasData);if(r){const e=r.word?ay(a,r.entity,r.word,ty(r.entity,"state")):zt(a,"day_clock_on"),o=yy(a,r.entity.name,e);return[Zv(r.totalMs),1===t.days?o:zt(a,"day_clock_per_day",{label:o})]}const i=t.rings.find(e=>"numeric"===e.kind&&e.hasData);if(!i)return;const s=Wv(i.aggregate)?ry(i.slots.reduce((e,t)=>e+t.v,0),i.entity,a):i.entity.display;return[s,i.entity.name]}(e,t);if(!a)return R;const n=Math.min(18,.4*o),r=Math.min(11,.25*o),i=(1.05*n+1.3*r)/2,s=2*Math.sqrt(Math.max(0,o*o-i*i))-8,l=xy(a[0],s,n),c=xy(a[1],s,r),d=.3*l.size+c.size,u=(-.75*l.size+d+.3*c.size)/2;return Z`<g class="dc-centre" aria-hidden="true">
    <text class="dc-centre-value" y=${-u} font-size=${l.size}>${l.text}</text>
    <text class="dc-centre-label" y=${d-u} font-size=${c.size}>${c.text}</text>
  </g>`}function $y(e,t){const o=function(e,t=92,o=44){const a=e.map(e=>"state"===e?15:22),n=a.reduce((e,t)=>e+t,0)+4*Math.max(0,e.length-1),r=t-o,i=n>r?r/n:1,s=[];let l=t;for(const c of a){const e=c*i;s.push({r0:l-e,r1:l}),l-=e+4*i}return{rings:s,hole:s.length?s[s.length-1].r0:t}}(t.rings.map(e=>e.kind),gy),a=_r(e.raw),n=t.rings.map((e,a)=>{const{r0:n,r1:r}=o.rings[a];return"state"===e.kind?function(e,t,o,a){const n=t.zone.timeZone;return 1===t.days?e.intervals.map((e,r)=>{const i=Fv(e,t.bounds[0],n),s=i.map(([e,t])=>Vv(o,a,Pv(e),Pv(t))).join("");return{d:s,angle:Pv(i.length?(i[0][0]+i[i.length-1][1])/2:0),r:a,item:r}}):e.runs.map((e,t)=>({d:Vv(o,a,Pv(e.from),Pv(e.to)),angle:Pv((e.from+e.to)/2),r:a,opacity:Math.max(.12,e.on/Math.max(1,e.of)),item:t}))}(e,t,n,r):function(e,t,o,a){const n=Sv/t.bucket,r=Math.min(.03,zv/n/8),i=Wv(e.aggregate),s=[];return e.slots.forEach((t,l)=>{if(i&&0===t.v)return;const c=t.index/n*zv+r,d=(t.index+1)/n*zv-r,u=o+Math.max(.04,e.heights[l])*(a-o);s.push({d:Vv(o,u,c,d),angle:(c+d)/2,r:u,item:l})}),s}(e,t,n,r)}),r=sy.get(e.host),i=t.rings.map((i,s)=>{const{r0:l,r1:c}=o.rings[s],d=1===t.days&&n[s].length<=48,u="state"===i.kind?Z`<path class="dc-track" d=${Vv(l,c,0,zv)}></path>`:Z`<circle class="dc-base" r=${l}></circle>`;return Z`<g
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
            fill-opacity=${t.opacity??R}
            tabindex=${d?"0":R}
            @pointerenter=${a?()=>cy(e,s,o):R}
            @pointerdown=${a?()=>cy(e,s,o):R}
            @pointerleave=${a?t=>function(e,t){if("touch"!==t.pointerType&&"pen"!==t.pointerType)return void cy(e,void 0,void 0);const o=ly(e.host);void 0!==o.timer&&clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=void 0,cy(e,void 0,void 0)},fr)}(e,t):R}
            @focus=${a?()=>cy(e,s,o):R}
            @blur=${a?()=>cy(e,void 0,void 0):R}
          ></path>`)}
    </g>`}),s=function(e){const t=e?.locale?.language??"en";let o=sa(e);if(void 0===o)try{o=!0===new Intl.DateTimeFormat(t,{hour:"numeric"}).resolvedOptions().hour12}catch{o=!1}return o?[0,6,12,18].map(e=>new Intl.DateTimeFormat(t,{hour:"numeric",hour12:!0,timeZone:"UTC"}).format(Date.UTC(2e3,0,1,e))):["00","06","12","18"]}(e.hass),l=Array.from({length:24},(e,t)=>{const o=t/24*zv,a=t%6==0,[n,r]=qv(95,o),[i,s]=qv(gy+(a?9:6),o);return Z`<line class="dc-tick ${a?"major":""}" x1=${n} y1=${r} x2=${i} y2=${s}></line>`}),c=Z`
    <text class="dc-label" x="0" y=${-107} text-anchor="middle">${s[0]}</text>
    <text class="dc-label" x=${104} y="3.5" text-anchor="start">${s[1]}</text>
    <text class="dc-label" x="0" y=${114} text-anchor="middle">${s[2]}</text>
    <text class="dc-label" x=${-104} y="3.5" text-anchor="end">${s[3]}</text>`;let d=R;if(t.live&&1===t.days){const e=Pv(Tv(t.now,t.bounds[0],t.zone.timeZone)),[a,n]=qv(o.hole,e),[r,i]=qv(101,e);d=Z`
      <path class="dc-future" d=${Vv(o.hole-1,93,e,zv)}></path>
      <line class="dc-hand" x1=${a} y1=${n} x2=${r} y2=${i}></line>
      <circle class="dc-hand-dot" cx=${r} cy=${i} r="2.6"></circle>`}const u=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_day_clock"),names:t.rings.map(e=>e.entity.name).join(", ")});return W`<div class="dc-dial">
    <svg class="dc-svg" viewBox="${hy} ${py} ${my} ${fy}" role="img" aria-label=${u}>
      ${l}${c}
      <g class="dc-marks">${i}</g>
      ${d} ${wy(e,t,o.hole)}
    </svg>
    ${a?vy(e,t,n):R}
  </div>`}function ky(e,t,o=!1){return W`<div class="frame">
    ${e}
    <div class="chart-message ${o?"error":""}">${t}</div>
  </div>`}const My={layout:"chart",group:"history",height:280,styles:r`
    ${Tn}
    ${Sr}
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
      stroke-linecap="round" />`,validate:function(e){xr(e),Ta(e.period);const t=e.days;if(void 0!==t&&("number"!=typeof t||!Number.isInteger(t)||t<1||t>31))throw new Error('"days" must be a whole number from 1 to 31');if(void 0!==e.center&&!Jv.includes(e.center))throw new Error(`"center" must be one of: ${Jv.join(", ")}`);if(void 0!==e.bucket&&!Uv.includes(Number(e.bucket)))throw new Error(`"bucket" must be one of: ${Uv.join(", ")}`);if(void 0!==e.aggregate&&!an.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${an.join(", ")}`);for(const o of e.entities??[]){if("object"!=typeof o||null===o)continue;const e=o.active;if(void 0===e)continue;const t="string"==typeof e&&""!==e.trim()||Array.isArray(e)&&e.every(e=>"string"==typeof e);if(!t)throw new Error('"active" must be a state or a list of states')}},editor:function(e){var t;return Ji({...e,config:(t=e.config,"number"==typeof t.bucket?{...t,bucket:String(t.bucket)}:t),commit:t=>e.commit(function(e){return"string"==typeof e.bucket?{...e,bucket:Number(e.bucket)}:e}(t))},"chart",Xi("day_clock",e.hass,()=>{return[{type:"grid",name:"",schema:[{name:"days",selector:{number:{min:1,max:31,mode:"box"}}},{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"center",selector:Oi(t=e.hass,"day_clock_center",["total","now","none"])},{type:"grid",name:"",schema:[{name:"bucket",selector:Oi(t,"bucket",Uv.map(String))},{name:"aggregate",selector:Oi(t,"aggregate",["auto",...an])}]},{name:"tooltip",selector:{boolean:{}}}];var t}),Yv)},entityFields:function(){return{schema:Gv,fields:Xv}},disconnect(e){jn(e),function(e){const t=dy.get(e);void 0!==t&&clearTimeout(t),dy.delete(e)}(e);const t=sy.get(e);void 0!==t?.timer&&clearTimeout(t.timer),sy.delete(e)},render(e){const t=iy(e);t.live&&uy(e,t.now);const o=En({period:t.period,range:{start:t.bounds[0],end:t.bounds[t.bounds.length-1]},back:t.back,zone:t.zone},e,t.now);return"loading"===t.status?ky(o,zt(e.hass,"chart_loading")):"error"===t.status?ky(o,zt(e.hass,"chart_error",{error:t.error??""}),!0):t.rings.every(e=>!e.hasData)?ky(o,zt(e.hass,"chart_no_data")):W`<div class="frame">
      ${o}
      <div class="dc-body">${$y(e,t)} ${function(e,t){const{hass:o}=e;let a=R;return t.days>1?a=W`<div class="dc-foot">
      <div class="dc-stat">${zt(o,"day_clock_average",{n:t.days})}</div>
    </div>`:t.live&&_y(t)&&(a=W`<div class="dc-foot">
      <div class="dc-stat">${zt(o,"day_clock_now")}</div>
      <div class="dc-now">${da(t.now,o)} · ${by(_y(t),o)}</div>
    </div>`),W`<div class="dc-legend">
    ${t.rings.map(e=>W`<div class="dc-item ${e.missing?"missing":""}">
          <span class="dc-swatch" style="background:${e.color}"></span>
          <div class="dc-text">
            <div class="dc-name">${e.entity.name}</div>
            <div class="dc-stat">${e.stat}</div>
          </div>
        </div>`)}
    ${a}
  </div>`}(e,t)}</div>
    </div>`}};function zy(e,t){if(null!=e&&""!==e){if("number"==typeof e&&Number.isFinite(e))return{value:e,soft:!1};if("string"==typeof e){const t=e.trim(),o=t.startsWith("~"),a=Number(o?t.slice(1):t);if(""!==t&&"~"!==t&&Number.isFinite(a))return{value:a,soft:o}}throw new Error(`"${t}" must be a number, or ~ and a number for a soft limit (e.g. "~0")`)}}function Sy(e,t={}){let[o,a]=e??[t.min?.value??0,t.max?.value??1];if(t.fromZero&&(o>0&&(o=0),a<0&&(a=0)),void 0!==t.minRange&&a-o<t.minRange){const e=(o+a)/2;o=e-t.minRange/2,a=e+t.minRange/2}let[n,r]=Oo([o,a],.1);t.fromZero&&0===o&&(n=0),t.fromZero&&0===a&&(r=0);const{min:i,max:s}=t;return i&&(n=i.soft&&o<i.value?n:i.value),s&&(r=s.soft&&a>s.value?r:s.value),r<=n&&(r=n+1),[n,r]}function Ay(e,t,o){const a=[];for(const c of e){const e=Math.min(c.end??c.t,o);if(c.t>=o)break;a.push({...c,start:c.t,end:e,t:Math.round((c.t+e)/2)})}const n=a.filter(e=>null!==e.v);if(0===n.length)return a;const r=a[0],i=a[a.length-1],s=[...a];null!==r.v&&r.t>t.start&&s.unshift({t:t.start,v:r.v,carried:!0});const l=Math.min(t.end,o);return null!==i.v&&i.t<l&&s.push({t:l,v:i.v,carried:!0}),s}function Ey(e,t){if(void 0!==e&&!an.includes(e))throw new Error(`${t} must be one of: ${an.join(", ")}`)}const Cy=[...Ti,{name:"points_per_hour",path:["points_per_hour"],default:.5},{name:"graph",path:["graph"],default:"line"},{name:"fill",path:["fill"],default:"fade"},{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:Lt},{name:"points",path:["points"],default:"hover"},{name:"labels",path:["labels"],default:"hover"},{name:"height",path:["height"],default:150},{name:"bar_spacing",path:["bar_spacing"],default:4},{name:"color_transition",path:["color_transition"],default:"smooth"},{name:"extrema",path:["extrema"],default:!1},{name:"average",path:["average"],default:!1},{name:"legend",path:["legend"],default:!0},{name:"trend_y_min",path:["y_min"]},{name:"trend_y_max",path:["y_max"]},{name:"min_range",path:["min_range"]},{name:"y_min_secondary",path:["y_min_secondary"]},{name:"y_max_secondary",path:["y_max_secondary"]},{name:"min_range_secondary",path:["min_range_secondary"]},{name:"value_factor",path:["value_factor"],default:0},{name:"align_header",path:["align_header"],default:"default"},{name:"align_icon",path:["align_icon"],default:"right"},{name:"align_state",path:["align_state"],default:"left"},{name:"font_size",path:["font_size"],default:100},{name:"font_size_header",path:["font_size_header"]},{name:"color_name",path:["color_name"],default:!1},{name:"color_value",path:["color_value"],default:!1},{name:"trend_color_icon",path:["color_icon"],default:!1},{name:"group",path:["group"],default:!1},{name:"icon_image",path:["icon_image"]},{name:"trend_tooltip",path:["tooltip"],default:!0}],jy=(...e)=>({type:"grid",name:"",schema:e}),Ny=e=>({name:e,selector:{boolean:{}}}),Ly=(e,t,o,a="any")=>({name:e,selector:{number:{mode:"box",step:a,...void 0!==t?{min:t}:{},...void 0!==o?{max:o}:{}}}}),Oy=e=>({name:e,selector:{text:{}}});function Ty(e){const t={};for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"])"number"==typeof e[o]&&(t[o]=String(e[o]));return t}const Fy=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"entity_aggregate",path:["aggregate"]},{name:"y_axis_side",path:["y_axis"],default:"primary"},{name:"fixed_value",path:["fixed_value"],default:!1},{name:"show_graph",path:["show_graph"],default:!0},{name:"show_line",path:["show_line"],default:!0},{name:"show_fill",path:["show_fill"],default:!0},{name:"show_points",path:["show_points"]},{name:"show_legend_entity",path:["show_legend"],default:!0},{name:"show_legend_state",path:["show_legend_state"],default:!1},{name:"show_indicator",path:["show_indicator"],default:!1},{name:"show_state",path:["show_state"],default:!1}];const Py=["line","bar","none"],Dy=["solid","fade","none"],Uy=["hover","always","never"],Hy=["default","left","right","center"],Iy=["right","left","state"],By=["left","right","center"],Wy=["smooth","hard"];function Zy(e,t){return void 0===e?t:!0===e?"always":!1===e?"never":e}function qy(e){return void 0===e||!0===e?"fade":!1===e?"none":e}const Ry=e=>"number"==typeof e&&Number.isFinite(e)?e:void 0;function Vy(e){return{graph:e.graph??"line",fill:qy(e.fill),points:Zy(e.points,"hover"),labels:Zy(e.labels,"hover"),pointsPerHour:Ry(e.points_per_hour)??.5,height:Ry(e.height)??150,lineWidth:Ry(e.line_width)??2.5,barSpacing:Ry(e.bar_spacing)??4,transition:e.color_transition??"smooth",extrema:!0===e.extrema,average:!0===e.average,legend:!1!==e.legend,factor:Math.pow(10,Ry(e.value_factor)??0),alignHeader:e.align_header??"default",alignIcon:e.align_icon??"right",alignState:e.align_state??"left",fontSize:Ry(e.font_size)??100,fontSizeHeader:Ry(e.font_size_header),colorName:!0===e.color_name,colorValue:!0===e.color_value,colorIcon:!0===e.color_icon,group:!0===e.group,iconImage:"string"==typeof e.icon_image&&""!==e.icon_image?e.icon_image:void 0,primary:{min:zy(e.y_min,"y_min"),max:zy(e.y_max,"y_max"),minRange:Ry(e.min_range)},secondary:{min:zy(e.y_min_secondary,"y_min_secondary"),max:zy(e.y_max_secondary,"y_max_secondary"),minRange:Ry(e.min_range_secondary)}}}function Yy(e,t,o){if(void 0!==e&&!t.includes(e))throw new Error(`"${o}" must be one of: ${t.join(", ")}`)}function Gy(e,t,o,a=1/0,n=!1){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<o||e>a||n&&!Number.isInteger(e))){throw new Error(`"${t}" must be ${n?"a whole number":"a number"} ${a===1/0?`${o} or more`:`from ${o} to ${a}`}`)}}function Xy(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`"${t}" must be true or false`)}function Jy(e,t,o){const a=Math.min(e.range.end,Date.now()),n="bar"===o.graph,r=n&&0===o.pointsPerHour?.5:o.pointsPerHour,i=e.group?[]:function(e,t,o=500){const a=e.end-e.start;if(a<=0||t<=0)return[];const n=Math.max(1,Math.min(o,Math.round(a/36e5*t))),r=a/n,i=[];for(let s=0;s<=n;s++)i.push(s===n?e.end:Math.round(e.start+s*r));return i}(e.range,r,n?96:500),s=t.raw.aggregate??"mean";return e.series.map(t=>{const n=t.entity.config;let r=t.points;n.fixed_value&&null!==t.entity.value?r=[{t:e.range.start,v:t.entity.value},{t:a,v:t.entity.value}]:e.group?r=Ay(t.points,e.range,a):i.length&&(r=Ay(function(e,t,o,a,n){if(t.length<2)return e;let r=e;const i=e[e.length-1],s=e[e.length-2];return"history"===a&&i&&s&&i.t===n&&i.v===s.v&&(r=e.slice(0,-1)),"statistics"===a?sn(r,t,o,n):rn(r,t,o,n)}(t.points,i,n.aggregate??s,e.source,a),e.range,a)),1!==o.factor&&(r=r.map(e=>null===e.v?e:{...e,v:e.v*o.factor}));const l=void 0!==n.color?Ce(n.color):void 0,c=!l&&(e=>e.config.severity!==st)(t.entity),d=null===t.entity.value?null:t.entity.value*o.factor,u=l??(c&&null!==d?Ce(Oe(d,t.entity.bands).color):t.color);return{index:t.index,entity:t.entity,own:n,points:r,color:c?void 0:l??t.color,current:u,curve:t.curve,secondary:"secondary"===n.y_axis,graphed:!1!==n.show_graph}})}function Ky(e){let t=1/0,o=-1/0;for(const a of e)for(const e of a.points)null!==e.v&&(e.v<t&&(t=e.v),e.v>o&&(o=e.v));return t===1/0?void 0:[t,o]}const Qy=e=>Math.round(1e4*e)/100+"%";function eb(e,t,o){return e.filter(({series:e})=>void 0===e.color).map(({series:e})=>{const a=function(e,t,o){const[a,n]=t,r=e=>Math.min(1,Math.max(0,(e-a)/(n-a))),i=[];return e.forEach((t,a)=>{const n=Ce(t.color),s=Number.isFinite(t.from)?r(t.from):0,l=a+1<e.length?r(e[a+1].from):1;"hard"===o?i.push({offset:s,color:n},{offset:l,color:n}):(0===a||a===e.length-1||s<l)&&(i.push({offset:s,color:n}),a===e.length-1&&i.push({offset:1,color:n}))}),i}(e.entity.bands,t.get(e.secondary),o.transition);return Z`<linearGradient id="cd-trend-${e.index}" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${wn} y2="0">
        ${a.map(e=>Z`<stop offset=${e.offset} stop-color=${e.color}></stop>`)}
      </linearGradient>`})}const tb=e=>e.color??`url(#cd-trend-${e.index})`;function ob(e,t){return void 0!==e.start&&void 0!==e.end&&e.end>e.start?`${da(e.start,t.hass)} – ${da(e.end,t.hass)}`:da(e.t,t.hass)}function ab(e,t,o,a){const n=o.colorIcon?`color:${a}`:"";return o.iconImage?W`<span class="trend-icon"><img src=${o.iconImage} alt="" /></span>`:W`<span class="trend-icon" style=${n}>
    <ha-state-icon .hass=${t.hass} .stateObj=${e.stateObj} .icon=${hs(e)}></ha-state-icon>
  </span>`}function nb(e,t,o,a){if(!t.extrema&&!t.average)return R;const n=function(e,t){let o,a,n=0,r=0;for(let i=0;i<e.length;i++){const s=e[i];if(null!==s.v)if(s.carried||((!o||s.v<o.v)&&(o={t:s.t,v:s.v}),(!a||s.v>a.v)&&(a={t:s.t,v:s.v})),t){const t=e[i+1],o=t?t.t-s.t:0;n+=s.v*o,r+=o}else s.carried||(n+=s.v,r+=1)}if(o&&a)return{min:o,max:a,mean:r>0?n/r:(o.v+a.v)/2}}(e.points,a);if(!n)return R;const r=(t,a,n)=>W`<span class="trend-chip ${t}"
      ><span class="trend-chip-type">${zt(o.hass,t)}</span> ${(t=>Pn(Fn(t,e.entity.decimals,o.hass),e.entity.unit))(a)}${void 0!==n?W` · <span class="trend-chip-time">${da(n,o.hass)}</span>`:R}</span
    >`;return W`<div class="trend-info" style="--series:${e.current}">
    ${t.extrema?r("trend_min",n.min.v,n.min.t):R}
    ${t.average?r("trend_avg",n.mean):R}
    ${t.extrema?r("trend_max",n.max.v,n.max.t):R}
  </div>`}const rb={layout:"chart",group:"history",height:170,gridOptions:{columns:6,min_columns:3,min_rows:2},styles:r`
    ${Tn}
    ${Sr}
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
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){Mn(e),xr(e),Yy(e.graph,Py,"graph"),Yy(e.fill,[...Dy,!0,!1],"fill"),Yy(e.points,[...Uy,!0,!1],"points"),Yy(e.labels,[...Uy,!0,!1],"labels"),Yy(e.color_transition,Wy,"color_transition"),Yy(e.align_header,Hy,"align_header"),Yy(e.align_icon,Iy,"align_icon"),Yy(e.align_state,By,"align_state"),Gy(e.points_per_hour,"points_per_hour",0,60),Gy(e.height,"height",20,1e3),Gy(e.line_width,"line_width",Ot,Tt),Gy(e.bar_spacing,"bar_spacing",0,50),Gy(e.value_factor,"value_factor",-9,9,!0),Gy(e.font_size,"font_size",25,400),Gy(e.font_size_header,"font_size_header",6,60),Gy(e.min_range,"min_range",0),Gy(e.min_range_secondary,"min_range_secondary",0);for(const t of["extrema","average","legend","color_name","color_value","group"])Xy(e[t],t);if(void 0!==e.icon_image&&"string"!=typeof e.icon_image)throw new Error('"icon_image" must be a URL');Vy(e);for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t,o=t=>`"${t}" of ${e.entity}`;Ey(e.aggregate,o("aggregate")),Yy(e.y_axis,["primary","secondary"],`y_axis of ${e.entity}`),Gy(e.line_width,`line_width of ${e.entity}`,Ot,Tt);for(const t of["fixed_value","show_state","show_indicator","show_graph","show_line","show_fill","show_points","show_legend","show_legend_state"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`${o(t)} must be true or false`)}},editor:function(e){const t=Xi(`trend|${Fi(e.config)}`,e.hass,()=>{return t=e.hass,o=e.config,[...Pi(t,o),Ly("points_per_hour",0,60),jy({name:"graph",selector:Oi(t,"graph",["line","bar","none"])},{name:"fill",selector:Oi(t,"fill",["fade","solid","none"])},{name:"curve",selector:Oi(t,"curve",gn)},{name:"line_width",selector:ao},{name:"points",selector:Oi(t,"points",["hover","always","never"])},{name:"labels",selector:Oi(t,"labels",["hover","always","never"])},Ly("height",20,1e3,1),Ly("bar_spacing",0,50,1)),{name:"color_transition",selector:Oi(t,"color_transition",["smooth","hard"])},jy(Ny("extrema"),Ny("average"),Ny("legend"),Ny("trend_tooltip")),jy(Oy("trend_y_min"),Oy("trend_y_max"),Ly("min_range",0)),jy(Oy("y_min_secondary"),Oy("y_max_secondary"),Ly("min_range_secondary",0)),jy({name:"align_header",selector:Oi(t,"align_header",["default","left","right","center"])},{name:"align_icon",selector:Oi(t,"align_icon",["right","left","state"])},{name:"align_state",selector:Oi(t,"align_state",["left","right","center"])},Ly("font_size",25,400,1),Ly("font_size_header",6,60,1),Ly("value_factor",-9,9,1)),jy(Ny("color_name"),Ny("trend_color_icon"),Ny("color_value"),Ny("group")),{name:"icon_image",selector:{text:{}}}];var t,o}),o={...e,config:{...e.config,...Ty(e.config)},commit:t=>e.commit(function(e){let t=e;for(const o of["y_min","y_max","y_min_secondary","y_max_secondary"]){const e=t[o];"string"==typeof e&&""!==e.trim()&&!e.trim().startsWith("~")&&Number.isFinite(Number(e))?t={...t,[o]:Number(e)}:""===e&&(t={...t},delete t[o])}return t}(t))};return Ji(o,"chart",t,Cy,{legend:"editor_trend_legend",labels:"editor_trend_labels",group:"editor_trend_group"})},entityFields:function(e){return{schema:Xi("trend-entity",e,()=>function(e){return[jy({name:"series_color",selector:{text:{}}},{name:"curve",selector:Oi(e,"curve",gn)},{name:"line_width",selector:ao},{name:"entity_aggregate",selector:Oi(e,"aggregate",an)},{name:"y_axis_side",selector:Oi(e,"y_axis_side",["primary","secondary"])}),jy(Ny("show_state"),Ny("show_indicator"),Ny("show_graph"),Ny("show_line"),Ny("show_fill"),Ny("show_points"),Ny("show_legend_entity"),Ny("show_legend_state"),Ny("fixed_value"))]}(e)),fields:Fy}},disconnect(e){jn(e),Gn(e),br(e)},render:function(e){const t=Vy(e.raw),{show:o}=e.config,a=zn(e),n=Jy(a,e,t),r=n[0],i=r.entity,s=n.filter(e=>e.graphed),l=function(e,t){if(void 0!==t)return e.map(e=>{const o=e.points.filter(e=>!e.carried),a=gr(o,t);return a<0?void 0:o[a]})}(n,_r(e.raw)&&"ready"===a.status?yr(e.host):void 0),c=t.colorName?`color:${r.current}`:"",d=o.icon&&"state"!==t.alignIcon?ab(i,e,t,r.current):R,u=o.name||d!==R?W`<div
          class="trend-header entity align-${t.alignHeader} icon-${t.alignIcon}"
          data-index="0"
          tabindex="0"
          aria-label=${i.label}
          style=${t.fontSizeHeader?`font-size:${t.fontSizeHeader}px`:""}
        >
          ${o.name?W`<span class="trend-name" style=${c}>${i.name}</span>`:R} ${d}
        </div>`:R,h=(o,a)=>{const n=l?.[a],r=n?n.v:o.entity.value,i=n?{number:null===n.v?"—":Fn(n.v,o.entity.decimals,e.hass),unit:o.entity.unit}:function(e,t,o,a){return null===e?{number:t.display,unit:""}:{number:Fn(e*o,t.decimals,a),unit:t.unit}}(r,o.entity,t.factor,e.hass);return{parts:i,color:n&&null!==n.v&&void 0===o.color?Ce(Oe(n.v,o.entity.bands).color):o.current,when:n?ob(n,e):void 0}},p=h(r,0),m=o.value,f=n.slice(1).filter(e=>!0===e.own.show_state),g=m||f.length||"state"===t.alignIcon?W`<div class="trend-states align-${t.alignState}" style="font-size:${t.fontSize}%">
          ${o.icon&&"state"===t.alignIcon?ab(i,e,t,r.current):R}
          ${m?W`<div class="trend-state entity" data-index="0" tabindex="0" aria-label=${i.label}>
                  ${r.own.show_indicator?W`<span class="swatch" style="background:${r.current}"></span>`:R}
                  <span class="trend-value" style=${t.colorValue?`color:${p.color}`:""}
                    >${p.parts.number}</span
                  >${p.parts.unit?W`<span class="trend-unit">${p.parts.unit}</span>`:R}
                  ${p.when?W`<span class="trend-when">${p.when}</span>`:R}
                </div>`:R}
          ${f.length?W`<div class="trend-secondary">
                  ${f.map(e=>{const o=h(e,e.index);return W`<div
                      class="trend-state small entity"
                      data-index=${e.index}
                      tabindex="0"
                      aria-label=${e.entity.label}
                    >
                      ${!1!==e.own.show_indicator?W`<span class="swatch" style="background:${e.current}"></span>`:R}
                      <span class="trend-value" style=${t.colorValue?`color:${o.color}`:""}
                        >${o.parts.number}</span
                      >${o.parts.unit?W`<span class="trend-unit">${o.parts.unit}</span>`:R}
                    </div>`})}
                </div>`:R}
        </div>`:R,v=s.filter(e=>!1!==e.own.show_legend),y=t.legend&&s.length>1&&v.length?W`<div class="series-header trend-legend">
          ${v.map(t=>W`<div class="entity series-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}>
                <span class="swatch" style="background:${t.current}"></span>
                <span class="series-name">${function(e,t){const o=t.raw.name;return void 0===o||e.entity.name!==o?e.entity.name:e.entity.stateObj?.attributes.friendly_name??e.entity.entityId}(t,e)}</span>
                ${t.own.show_legend_state?W`<span class="series-value">${t.entity.display}</span>`:R}
              </div>`)}
        </div>`:R,b=En(a,e),_="none"===t.graph?R:function(e,t,o,a,n){const r=`aspect-ratio:500 / ${a.height}`;if("ready"!==t.status||o.every(e=>e.points.every(e=>null===e.v))){const o="loading"===t.status?"chart_loading":"error"===t.status?"chart_error":"chart_no_data";return W`<div class="trend-graph message ${"error"===t.status?"error":""}" style=${r}>
      <span>${zt(e.hass,o,{error:t.error??""})}</span>
    </div>`}const i="bar"===a.graph,s=new Map;for(const b of[!1,!0]){const e=o.filter(e=>e.secondary===b);e.length&&s.set(b,Sy(Ky(e),{...b?a.secondary:a.primary,fromZero:i}))}const l=To([t.range.start,t.range.end],[0,xn]),c=o.map(e=>({series:e,y:To(s.get(e.secondary),[wn,0])})),d=i?Z``:Z`${c.map(e=>function({series:e,y:t},o,a){const n=_n(e.points).map(a=>{const n=a.map(e=>[o(e.t),t(e.v)]);return{pts:n,d:bn(n,e.curve)}}),r=!1!==e.own.show_line,i="none"!==a.fill&&!1!==e.own.show_fill,s=e.own.line_width??a.lineWidth,l=e.own.show_points??"always"===a.points,c=e.points.filter(e=>null!==e.v&&!e.carried);return Z`<g class="series" data-series=${e.index}>
    ${i?Z`<path
            class="fill ${a.fill}"
            d=${n.map(({pts:e,d:t})=>`${t}L${e[e.length-1][0]},200L${e[0][0]},200Z`).join("")}
            fill=${tb(e)}
            mask=${"fade"===a.fill?"url(#cd-trend-fade)":R}
          ></path>`:R}
    ${r?Z`<path class="line" d=${n.map(e=>e.d).join("")} fill="none" stroke=${tb(e)}
            style="stroke-width:${s}px"></path>`:R}
    ${l&&c.length<=200?Z`<path class="dots" d=${Dt(c.map(e=>[o(e.t),t(e.v)]))} fill="none"
            stroke=${tb(e)} style="stroke-width:${Ut(s)}px"></path>`:R}
  </g>`}(e,l,a))}`,u=Z`${eb(c,s,a)}
    <linearGradient id="cd-trend-fade-paint" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${wn}>
      <stop offset="0" stop-color="#fff" stop-opacity="0.42"></stop>
      <stop offset="1" stop-color="#fff" stop-opacity="0.05"></stop>
    </linearGradient>
    <mask id="cd-trend-fade" maskContentUnits="userSpaceOnUse">
      <rect x="0" y="0" width=${xn} height=${wn} fill="url(#cd-trend-fade-paint)"></rect>
    </mask>`,h=zt(e.hass,"chart_aria",{style:zt(e.hass,"editor_style_trend"),names:o.map(e=>e.entity.name).join(", ")}),p=t=>{const n=o.filter(e=>e.secondary===t),r=Ky(n);if(!r)return R;const i=t?a.secondary:a.primary,s=i.min&&!i.min.soft?i.min.value:r[0],l=i.max&&!i.max.soft?i.max.value:r[1],c=n[0].entity,d=t=>Pn(Fn(t,c.decimals,e.hass),c.unit);return W`<div class="trend-labels ${t?"secondary":"primary"}" style="--series:${n[0].current}">
      <span>${d(l)}</span><span>${d(s)}</span>
    </div>`},m="never"===a.labels?R:W`<div class="trend-labels-wrap labels-${a.labels}">${p(!1)}${p(!0)}</div>`,f=n&&!i&&n[o[0].index]?W`<div class="crosshair" style="left:${Qy(l(n[o[0].index].t)/xn)}"></div>`:R,g=n&&!i?c.map(({series:e,y:t})=>{const o=n[e.index];if(!o||null===o.v||!1===e.own.show_points)return R;const a=t(o.v)/wn;if(!(a>=0&&a<=1))return R;const r=e.color??Ce(Oe(o.v,e.entity.bands).color);return W`<span
            class="hover-dot"
            style="left:${Qy(l(o.t)/xn)};top:${Qy(a)};background:${r}"
          ></span>`}):R,v=n&&i&&n[o[0].index]?(()=>{const e=n[o[0].index];return void 0===e.start||void 0===e.end?R:W`<div
            class="bar-hover"
            style="left:${Qy(l(e.start)/xn)};width:${Qy((l(e.end)-l(e.start))/xn)}"
          ></div>`})():R,y=_r(e.raw)?wr(e,t.range,o.map(e=>e.points.filter(e=>!e.carried))):void 0;return W`<div
    class="trend-graph ${y?"hoverable":""}"
    style=${r}
    @pointerdown=${y?.move}
    @pointermove=${y?.move}
    @pointerleave=${y?.leave}
    @pointercancel=${y?.leave}
  >
    ${On(d,h,u)} ${i?function(e,t,o){const a=e.length,n=e.flatMap(({series:e,y:n},r)=>{const i=Math.min(wn,Math.max(0,n(0)));return e.points.filter(e=>null!==e.v&&!e.carried&&void 0!==e.start&&void 0!==e.end).map(s=>{const l=t(s.start)/xn,c=(t(s.end)-t(s.start))/xn,d=Math.min(wn,Math.max(0,n(s.v))),u=d>i,h=e.color??Ce(Oe(s.v,e.entity.bands).color),p=`(${Qy(c)} - ${o}px) / ${a}`;return W`<div
          class="trend-col ${u?"down":""}"
          style="left:calc(${Qy(l)} + ${o/2}px + ${r} * ${p});width:max(1px, calc(${p}));
            top:${Qy(Math.min(d,i)/wn)};height:${Qy(Math.abs(i-d)/wn)};background:${h}"
        ></div>`})});return W`<div class="trend-cols">${n}</div>`}(c,l,a.barSpacing):R} ${m} ${v}
    ${f} ${"never"===a.points?R:g}
  </div>`}(e,a,s,t,l);return W`<div class="trend ${t.group?"group":""} ${"none"===t.graph?"no-graph":""}">
    <div class="trend-top">
      ${u} ${b===R?R:W`<div class="trend-nav">${b}</div>`} ${g}
      ${nb(r,t,e,"history"===a.source&&!a.group&&0===t.pointsPerHour)}
      ${y}
    </div>
    ${_}
  </div>`}},ib=["bars","gauges","history","totals","compare","distribution"];function sb(e){return"chart"===e.layout}const lb={bar:bs,thin:gu,segmented:mu,tank:fu,ring:ru,needle:$d,arc:iu,line:_c,column:Bl,area:ls,combined:Ec,pie:Jd,rings:uu,pictograph:Zd,waffle:$u,histogram:dd,scatter:hu,bubble:bl,heatmap:Jc,box:Vs,funnel:Nu,radar:sh,polar_area:hh,treemap:Lh,sunburst:Jh,icicle:Kh,grouped_bars:hp,bullet:vp,lollipop:wp,waterfall:jp,slope:Bp,dumbbell:nm,range_area:dm,sparkline:ym,streamgraph:Lm,candlestick:Wm,violin:Nf,beeswarm:qf,sankey:cg,timeline:Ng,climate:ev,wind_rose:Mv,day_clock:My,trend:rb},cb="important",db=" !"+cb,ub=me(class extends fe{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const a=e[o];return null==a?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const a of this.ft)null==t[a]&&(this.ft.delete(a),a.includes("-")?o.removeProperty(a):o[a]=null);for(const a in t){const e=t[a];if(null!=e){this.ft.add(a);const t="string"==typeof e&&e.endsWith(db);a.includes("-")||t?o.setProperty(a,t?e.slice(0,-11):e,t?cb:""):o[a]=e}}return q}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hb{constructor(e){this.host=e,e.addController(this)}hostConnected(){var e;this.stop=(e=()=>this.host.requestUpdate(),"undefined"==typeof window?()=>{}:(window.addEventListener(wt,e),()=>window.removeEventListener(wt,e)))}hostDisconnected(){this.stop?.(),this.stop=void 0}}const pb=Object.keys(Fe),mb=Object.keys(Ee),fb="custom",gb={text:{}},vb={entity:{domain:["sensor","input_number","number"]}};function yb(e){return"string"==typeof e&&""!==e.trim()&&!Number.isFinite(Number(e))}const bb={icon:{}};function _b(e){return void 0===e?"none":pb.find(t=>Fe[t]&&$o(Fe[t],e))??"custom"}function xb(e){return mb.includes(e)}class wb extends le{constructor(){super(),this.languageController=new hb(this),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(e){e.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(e){const t=this.hass?.states[e]?.state,o=void 0===t||""===t.trim()?NaN:Number(t);return Number.isFinite(o)?o:void 0}_t(e){return zt(this.hass,e)}_getSelectors(){const e=`${Mt(this.hass)}|${this.unit??""}`;if(this._selectors?.key===e)return this._selectors;const t=pb.map(e=>({value:e,label:this._t(`editor_preset_${e}`)})),o=e=>({select:{mode:"dropdown",options:e}});return this._selectors={key:e,preset:o(t),presetCustom:o([...t,{value:fb,label:this._t("editor_preset_custom")}]),color:o([...mb,fb].map(e=>({value:e,label:this._t(`editor_color_${e}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e&&e.length?e:void 0}}))}_presetChanged(e){e.stopPropagation();const t=e.detail?.value;if(!t||t===fb||!pb.includes(t))return;if(t===_b(this.bands))return;const o=Fe[t];this._emit(o?structuredClone(o):void 0)}_updateBand(e,t,o){const a=[...this.bands??[]],n={...a[e]};null==o||""===o?delete n[t]:n[t]=o,a[e]=n,this._emit(a)}_fromChanged(e,t){t.stopPropagation();const o=Number(t.detail?.value);""!==t.detail?.value&&null!=t.detail?.value&&Number.isFinite(o)&&this._updateBand(e,"from",o)}_fromEntityChanged(e,t){t.stopPropagation();const o=t.detail?.value;"string"==typeof o&&""!==o&&this._updateBand(e,"from",o)}_toggleFromMode(e){const t=this.bands?.[e]?.from,o=new Set(this._entityOpen);yb(t)?this._updateBand(e,"from",this._entityValue(t)??0):o.delete(e)||o.add(e),this._entityOpen=o}_colorChanged(e,t){t.stopPropagation();const o=t.detail?.value,a=this.bands?.[e]?.color??"primary";if(!o)return;const n=new Set(this._customOpen);o!==fb?(n.delete(e),this._customOpen=n,o!==a&&this._updateBand(e,"color",o)):xb(a)&&(this._customOpen=n.add(e))}_customColorChanged(e,t){t.stopPropagation();const o="string"==typeof t.detail?.value?t.detail.value.trim():"";if(!o)return;const a=new Set(this._customOpen);a.delete(e),this._customOpen=a,this._updateBand(e,"color",o)}_iconChanged(e,t){t.stopPropagation(),this._updateBand(e,"icon",t.detail?.value)}_labelChanged(e,t){t.stopPropagation(),this._updateBand(e,"label",t.detail?.value)}_removeBand(e){const t=[...this.bands??[]];t.splice(e,1),this._emit(t)}_addBand(){const e=[...this.bands??[]],t=e[e.length-1]?.from,o="number"==typeof t?t:yb(t)?this._entityValue(t)??NaN:"string"==typeof t&&""!==t.trim()?Number(t):NaN;e.push({from:Number.isFinite(o)?o+10:0,color:"primary"}),this._emit(e)}_renderBand(e,t,o){const a=!xb(e.color)||this._customOpen.has(t),n=yb(e.from)?e.from:void 0,r=void 0!==n||this._entityOpen.has(t);return W`<div class="band">
      <span class="swatch" style=${ub({"--swatch":Ce(e.color)})}></span>
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
        .value=${a?fb:e.color}
        @value-changed=${e=>this._colorChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${gb}
        .value=${e.label??""}
        @value-changed=${e=>this._labelChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${bb}
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
      ${r?W`<ha-selector
              .required=${!1}
              class="from-entity"
              data-role="from-entity"
              .hass=${this.hass}
              .label=${this._t("editor_band_from_entity_label")}
              .selector=${vb}
              .value=${n??""}
              @value-changed=${e=>this._fromEntityChanged(t,e)}
            ></ha-selector>`:R}
      ${a?W`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${gb}
              .value=${xb(e.color)?Ce(e.color):e.color}
              @value-changed=${e=>this._customColorChanged(t,e)}
            ></ha-selector>`:R}
    </div>`}render(){const e=this._getSelectors(),t=_b(this.bands);return W`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${t===fb?e.presetCustom:e.preset}
        .value=${t}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((t,o)=>this._renderBand(t,o,e))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}wb.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},wb.styles=r`
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",wb);const $b={number:{mode:"box",step:"any"}},kb={entity:{domain:["sensor","input_number","number"]}};function Mb(e){return null==e||""===e?"default":"number"==typeof e||""!==e.trim()&&Number.isFinite(Number(e))?"number":"entity"}class zb extends le{constructor(){super(...arguments),this.languageController=new hb(this)}willUpdate(e){e.has("value")&&"default"!==Mb(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const e=(e,t)=>zt(this.hass,e,t),t=[{value:"default",label:e("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:e("editor_limit_number")},{value:"entity",label:e("editor_limit_entity")}],o=t.map(e=>e.label).join("|");return this._modeSelector?.key!==o&&(this._modeSelector={key:o,selector:{select:{mode:"dropdown",options:t}}}),this._modeSelector.selector}get _currentMode(){return this._mode??Mb(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e}}))}_modeChanged(e){e.stopPropagation();const t=e.detail?.value;t&&t!==this._currentMode&&(this._mode=t,void 0!==this.value&&this._emit(void 0))}_numberChanged(e){e.stopPropagation();const t=e.detail?.value,o="number"==typeof t?t:""===t||null==t?NaN:Number(t);this._mode="number",this._emit(Number.isFinite(o)?o:void 0)}_entityChanged(e){e.stopPropagation();const t=e.detail?.value;this._mode="entity",this._emit("string"==typeof t&&""!==t?t:void 0)}render(){const e=e=>zt(this.hass,e),t=this._currentMode;return W`<ha-selector
        .required=${!0}
        data-role="mode"
        .hass=${this.hass}
        .label=${this.label}
        .selector=${this._modeSelectorFor()}
        .value=${t}
        @value-changed=${this._modeChanged}
      ></ha-selector>
      ${"number"===t?W`<ha-selector
              .required=${!1}
              data-role="number"
              .hass=${this.hass}
              .label=${e("editor_limit_number")}
              .selector=${$b}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===t?W`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${e("editor_limit_entity")}
                .selector=${kb}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:R}`}}zb.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},zb.styles=r`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",zb);const Sb=["min","max","target"];function Ab(e,t,o){const a=t&&!o?e?.states[t]?.attributes?.unit_of_measurement:void 0;return"string"==typeof a&&a?a:void 0}class Eb extends le{constructor(){super(),this.languageController=new hb(this),this._computeLabel=e=>this._t(`editor_${e.name}`),this._expanded=new Set}_t(e,t){return zt(this.hass,e,t)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(e){e.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e.entities??[]}}))}_set(e,t,o){this._emit(Nt(this._asConfig,e,t,o))}_move(e,t){const o=new Set;for(const a of this._expanded)o.add(a===e?t:a===t?e:a);this._expanded=o,this._emit(function(e,t,o){const a=[...e.entities??[]];if(t<0||t>=a.length||t===o)return e;const[n]=a.splice(t,1);return a.splice(Math.max(0,Math.min(o,a.length)),0,n),{...e,entities:a}}(this._asConfig,e,t))}_remove(e){const t=new Set;for(const o of this._expanded)o!==e&&t.add(o>e?o-1:o);this._expanded=t,this._emit(function(e,t){const o=[...e.entities??[]];return t<0||t>=o.length?e:(o.splice(t,1),{...e,entities:o})}(this._asConfig,e))}_toggle(e){const t=new Set(this._expanded);t.delete(e)||t.add(e),this._expanded=t}_add(e){e.stopPropagation();const t=e.detail?.value;"string"==typeof t&&""!==t&&(e.target.value="",this._emit(function(e,t){return{...e,entities:[...e.entities??[],t]}}(this._asConfig,t)))}_formChanged(e,t,o){o.stopPropagation();const a=this.entities?.[e];if(void 0===a)return;const n="string"==typeof a?{entity:a}:a,r=Mo(n,t,o.detail?.value??{});if(r===n)return;const i=[...this.entities??[]],s=Object.keys(r);i[e]=1===s.length&&"entity"===s[0]?r.entity:r,this._emit({type:"",entities:i})}_rowLabel(e){const t=this.hass?.states[e];return t?{text:t.attributes.friendly_name||e,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:e}),missing:!0}:{text:e,missing:!1}}_form(e,t,o,a,n){return W`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${ko(o,n)}
      .schema=${a}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(t,n,e)}
    ></ha-form>`}_renderOverrides(e,t){const o=e=>t=>{t.stopPropagation(),e(t.detail?.value)};return W`<div class="overrides">
      ${this._form("entity-attribute",t,e,function(e){let t=uo.get(e);return t||(t=[{name:"attribute",selector:{attribute:{entity_id:e}}}],uo.set(e,t)),t}(e.entity),to)}
      ${this._form("entity-text",t,e,fo(Ab(this.hass,e.entity,e.attribute)),eo)}
      ${this.chartFields?this._form("entity-chart",t,e,this.chartFields.schema,this.chartFields.fields):R}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${e.icon??""}
        @value-changed=${o(e=>this._set(t,"icon",e))}
      ></ha-icon-picker>
      ${Sb.map(a=>W`<cd-limit-field
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
        .unit=${e.unit??this.unit??Ab(this.hass,e.entity,e.attribute)}
        @value-changed=${o(e=>this._set(t,"severity",e))}
      ></cd-bands-editor>
      ${this._form("entity-actions",t,e,lo,io)}
    </div>`}_renderRow(e,t,o){const a=jt(e),n="string"==typeof e?{entity:e}:e,r=this._rowLabel(a),i=this._expanded.has(t);return W`<div class="entity">
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
      ${i?this._renderOverrides(n,t):R}
    </div>`}render(){const e=this.entities??[];return W`${e.map((t,o)=>this._renderRow(t,o,e.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}Eb.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chartFields:{attribute:!1},_expanded:{state:!0}},Eb.styles=r`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",Eb);const Cb=["treemap","sunburst","icicle","radar"],jb=["ring","arc","needle"];class Nb extends le{constructor(){super(...arguments),this.languageController=new hb(this),this._label=e=>zt(this.hass,e),this._computeLabel=e=>zt(this.hass,`editor_${e.name}`),this._computeRuleLabel=e=>zt(this.hass,`editor_rule_${e.name.slice(e.name.indexOf("_")+1)}`)}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]}),o=t?.constructor;await(o?.getConfigElement?.())}catch{}}()}_commit(e){this._config=e,function(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}(this,e)}_formChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{};this._commit(Mo(this._config,e,o))}_form(e,t,o){return W`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${ko(this._config,o)}
      .schema=${t}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(o,e)}
    ></ha-form>`}_panel(e,t){return W`<ha-expansion-panel .header=${this._label(`editor_section_${e}`)} outlined>
      <div class="panel section-${e}">${t}</div>
    </ha-expansion-panel>`}_subChanged(e,t){t.stopPropagation(),this._config&&this._commit(Ct(this._config,e,t.detail?.value))}_chartFields(){const e=lb[this._config?.style??"bar"];return e&&sb(e)&&this._config?e.entityFields?.(this.hass,this._config):void 0}renderEntities(){return W`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        @value-changed=${e=>this._subChanged(["entities"],e)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(e){const t=this._config?.[e],o={};if(!t||"object"!=typeof t)return o;for(const[a,n]of Object.entries(t))o[`${e}_${a}`]=Array.isArray(n)?n:[n];return o}_ruleChanged(e,t){if(t.stopPropagation(),!this._config)return;const o=t.detail?.value??{},a=this._ruleData(e);let n=this._config;for(const r of vo[e]){const t=`${e}_${r}`,i=Array.isArray(o[t])?o[t]:[];$o(a[t]??[],i)||(n=Ct(n,[e,r],i.length?i:void 0))}n!==this._config&&this._commit(n)}_ruleForm(e){return W`<div class="rules-heading">${this._label(`editor_${e}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${e}_help`)}</p>
      <ha-form
        data-section=${e}
        .hass=${this.hass}
        .data=${this._ruleData(e)}
        .schema=${_o(e,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${t=>this._ruleChanged(e,t)}
      ></ha-form>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([e,t])=>W`<cd-limit-field
          data-limit=${e}
          .hass=${this.hass}
          .label=${this._label(`editor_${e}`)}
          .value=${this._config?.[e]}
          .defaultLabel=${t}
          @value-changed=${t=>this._subChanged([e],t)}
        ></cd-limit-field>`)}renderColours(){return W`${this._toggles(Gt)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${e=>this._subChanged(["severity"],e)}
      ></cd-bands-editor>`}_firstEntityUnit(){const e=this._config?.entities?.[0];return"string"==typeof e?Ab(this.hass,e):e?.unit??Ab(this.hass,e?.entity,e?.attribute)}_selectStyle(e){if(!this._config)return;let t=Ct(this._config,["style"],"bar"===e?void 0:e);const o=[].concat(t.group_by??[]),a=o.length>0&&o.every(e=>Lu.includes(e));o.length>0&&a!==Cb.includes(e)&&(t=Ct(t,["group_by"],void 0)),this._commit(t)}renderStyle(){const e=this._config?.style??"bar";return W`${ib.map(t=>{const o=it.filter(e=>lb[e].group===t);return o.length?W`<div class="style-group">${this._label(`editor_group_${t}`)}</div>
        <div class="styles" data-group=${t}>
          ${o.map(t=>{const o=lb[t],a=sb(o)?W`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${o.thumbnail()}
                </svg>`:No(t);return W`<button
              type="button"
              class="style"
              data-style=${t}
              aria-pressed=${e===t?"true":"false"}
              @click=${()=>this._selectStyle(t)}
            >
              ${a}<span>${this._label(`editor_style_${t}`)}</span>
            </button>`})}
        </div>`:R})}
    ${jb.includes(e)?W`<p class="gauge-help">${this._label("editor_gauge_help")}</p>
            ${this._form("gauge",function(e,t,o){const a="text"===o,n=`${Mt(e)}|${t}|${a}`;let r=Qt.get(n);if(!r){const o={number:{min:-360,max:360,step:1,mode:"box",unit_of_measurement:"°"}};r=[{type:"grid",name:"",schema:[{name:"start_angle",selector:o},{name:"end_angle",selector:o}]},{name:"center",selector:{select:{mode:"dropdown",options:["value","band","name","text","none"].map(t=>({value:t,label:zt(e,`editor_center_mode_${t}`)}))}}},...a?[{name:"center_text",selector:{text:{}}}]:[],..."needle"===t?[{name:"tick_labels",selector:{boolean:{}}}]:[]],Qt.set(n,r)}return r}(this.hass,e,this._config?.center),Kt)}`:R}`}renderChart(){const e=lb[this._config?.style??"bar"];return e&&sb(e)&&e.editor&&this._config?this._panel("chart",e.editor({hass:this.hass,config:this._config,commit:e=>this._commit(e)})):R}renderDisplay(){return W`${this._toggles(Yt)}
    ${this._form("display",function(e){const t=Mt(e);return xo?.language!==t&&(xo={language:t,schema:go(e)}),xo.schema}(this.hass),Xt)}`}_toggles(e){const t=ko(this._config,e);return W`<div class="toggles">
      ${e.map(({name:o})=>{const a=this._label(`editor_${o}`),n=!0===t[o];return W`<div class="toggle">
          <span @click=${()=>this._toggle(e,o,!n)}>${a}</span
          ><ha-switch
            data-name=${o}
            aria-label=${a}
            .checked=${gt(n)}
            @change=${t=>this._toggle(e,o,t.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(e,t,o){if(!this._config)return;const a=ko(this._config,e);this._commit(Mo(this._config,e,{...a,[t]:o}))}renderActions(){return this._form("actions",lo,Jt)}render(){return this._config?W`<div class="title">${this._form("title",so,Vt)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:R}}Nb.properties={hass:{attribute:!1},_config:{state:!0}},Nb.styles=r`
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",Nb);const Lb=r`
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
`;console.info("%c CHARTDECK %c 2.1.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const Ob={rows:16,tiles:8};function Tb(e){const t=Ob[e.layout];return Math.max(1,Math.floor((368+t)/((e.minColumnWidth??0)+t)))}class Fb extends le{constructor(){super(...arguments),this.languageController=new hb(this),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(e){const t=Object.values(e?.states??{}).filter(e=>e.entity_id.startsWith("sensor.")&&""!==e.state.trim()&&Number.isFinite(Number(e.state))),o=e=>"battery"===e.attributes?.device_class;return t.sort((e,t)=>o(e)!==o(t)?o(e)?-1:1:e.entity_id<t.entity_id?-1:e.entity_id>t.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:t.slice(0,3).map(e=>e.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(e){const t=function(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");const t=e.style??"bar";if(!it.includes(t))throw new Error(`Unknown style "${String(t)}". Use one of: ${it.join(", ")}`);const o=e.sort??"none";if(!lt.includes(o))throw new Error(`Unknown sort "${String(o)}". Use one of: ${lt.join(", ")}`);if(void 0!==e.entities&&!Array.isArray(e.entities))throw new Error('"entities" must be a list');const a=(e.entities??[]).map((t,o)=>ft(t,e,o)),n={name:!0,value:!0,icon:!0,target:!0,legend:!1,...e.show},r=ut(e.columns,"columns",1),i=ut(e.limit,"limit",1),s=De(e.include,"include"),l=De(e.exclude,"exclude");s&&ft("sensor.chartdeck_check",e,0);const c={style:t,entities:a,hideUnavailable:!0===e.hide_unavailable,cardOptions:e,show:n,sort:o,animate:!1!==e.animate,colorIcon:!0===e.color_icon,legendBands:ht(e.severity)??st};return void 0!==e.title&&(c.title=e.title),void 0!==r&&(c.columns=r),void 0!==i&&(c.limit=i),s&&(c.include=s),l&&(c.exclude=l),c}(e),o=lb[t.style];if(sb(o)&&o.validate?.(e),this._watched=function(e){const t=new Set;for(const o of e.entities){t.add(o.entity);for(const e of[o.min,o.max,o.target,...o.severity.map(e=>e.from)])"string"==typeof e&&""!==e&&t.add(e)}for(const o of e.legendBands)"string"==typeof o.from&&t.add(o.from);return t}(t),sb(o))for(const a of o.watch?.(e)??[])this._watched.add(a);this._config&&this._config.style!==t.style&&this._disconnectStyle(),this._config=t}get _styleName(){return this._config?.style??"bar"}get _style(){return lb[this._styleName]}_legend(e){const t=this._config;if(!t?.show.legend||0===this._count())return[];const o=e?.decimals??1;return Te(gs(t.legendBands,this.hass,e?.unit),e=>Fn(e,o,this.hass),e?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const e=this._config;if(!e)return 0;const t=this._style,o=16+(e.title?73:0)+(this._legend().length>0?32:0);if(sb(t))return o+t.height;const a=this._count(),n=void 0!==e.columns?Math.min(e.columns,Tb(t)):"rows"===t.layout?1:Math.min(a,t.tilesPerRow??3,Tb(t));return o+(0===a?0:Math.ceil(a/Math.max(1,n)))*t.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const e=this._count();if(sb(this._style))return{columns:12,min_columns:6,min_rows:2,...this._style.gridOptions,rows:"auto"};const t="rows"===this._style.layout;return{columns:t||e<=1?6:12,rows:"auto",min_columns:t?6:3,min_rows:1}}shouldUpdate(e){if(0===e.size)return!0;if([...e.keys()].some(e=>"hass"!==e))return!0;if(!e.has("hass"))return!1;const t=e.get("hass"),o=this.hass;if(!t||!o)return!0;for(const a of this._watched)if(t.states[a]!==o.states[a])return!0;if(this._config?.include){const e=ys(this._config,o);if(e.length!==this._matched.length||e.some((e,t)=>e!==this._matched[t]))return!0;for(const a of e)if(t.states[a]!==o.states[a])return!0}return t.themes?.darkMode!==o.themes?.darkMode||t.themes?.theme!==o.themes?.theme||t.locale!==o.locale}willUpdate(){const e=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",e),(e||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const e=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const e=this._config?lb[this._config.style]:void 0;e&&sb(e)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const e=this._config?lb[this._config.style]:void 0;e&&sb(e)&&e.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle();for(const e of this._detachers.values())e();this._detachers.clear()}_syncActions(){const e=this.shadowRoot;if(!e)return;const t=new Set(e.querySelectorAll(".entity"));for(const[o,a]of this._detachers)t.has(o)||(a(),this._detachers.delete(o));for(const o of t)this._detachers.has(o)||this._detachers.set(o,Ae(o,()=>this._items[Number(o.dataset.index)].config))}_renderEntity(e,t,o,a){const n=this._config,r=Se(e.config),i=je(e.band.color),s=`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${i.start};--c-end:${i.end}`;return W`<div
      class="entity ${r?"interactive":""} ${e.available?"":"unavailable"} ${n.colorIcon&&e.available?"icon-band":""}"
      data-index=${t}
      role="meter"
      aria-valuenow=${e.available?String(e.value):R}
      aria-valuemin=${e.min}
      aria-valuemax=${e.max}
      aria-label=${e.label}
      tabindex=${r?0:R}
      style=${s}
    >
      ${o.render(e,{show:n.show,hass:a})}
    </div>`}render(){const e=this._config;if(!e)return R;const t=this.hass,o=this._style;let a,n,r;const i=t?function(e,t){const o=ys(e,t).map((t,o)=>ft(t,e.cardOptions,o)),a=[...e.entities,...o].map(e=>vs(e,t));return e.hideUnavailable?a.filter(e=>e.available):a}(e,t):[];if(this._matched=t?ys(e,t):[],0!==e.entities.length||e.include)if(t)if(0===i.length)this._items=[],a=W`<div class="hint">${zt(t,e.include?"no_matches":"none_available")}</div>`;else{n=i[0];const s=new Map,l=new Set;i.forEach((e,t)=>{s.set(e,l.has(e.entityId)?`${e.entityId}#${t}`:e.entityId),l.add(e.entityId)}),this._items=function(e,t){if("none"===t)return[...e];const o="ascending"===t?1:-1;return e.map((e,t)=>({item:e,index:t})).sort((e,t)=>{if(e.item.available!==t.item.available)return e.item.available?-1:1;if(e.item.available){const a=(e.item.position-t.item.position)*o;if(0!==a)return a}return e.index-t.index}).map(e=>e.item)}(i,e.sort).slice(0,e.limit);const c=this._items.filter(e=>e.available).map(e=>e.display.length);if(r=c.length?Math.max(...c):void 0,sb(o))a=W`<div class="chart">
          ${o.render({items:this._items,config:e,raw:e.cardOptions,hass:t,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const n="tiles"===o.layout,r=function(e,t){if(void 0===t)return"rows"===e.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const o=(t-1)*Ob[e.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${e.minColumnWidth??0}px, 100%), calc((100% - ${o}px) / ${t} - 0.5px)), 1fr))`}(o,e.columns);a=W`<div
          class="entities layout-${o.layout} ${n&&void 0!==e.columns?"has-columns":""}"
          style=${r}
        >
          ${Me(this._items,e=>s.get(e),(e,a)=>this._renderEntity(e,a,o,t))}
        </div>`}}else this._items=[],a=R;else this._items=[],a=W`<div class="hint">${zt(t,"no_entities")}</div>`;const s=this._legend(n);return W`<ha-card .header=${e.title}>
      <div
        class="content style-${this._styleName}"
        style=${void 0===r?R:`--cd-value-ch: ${r}`}
      >
        ${a}
      </div>
      ${s.length?W`<div class="legend">
              ${s.map(e=>W`<span class="legend-item"
                    ><span class="dot" style="background:${e.color}"></span>${e.text}</span
                  >`)}
            </div>`:R}
    </ha-card>`}}Fb.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},Fb.styles=[Lb,...Object.values(lb).map(e=>e.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",Fb);const Pb=window.customCards??=[];Pb.some(e=>"chartdeck-card"===e.type)||Pb.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{Fb as ChartdeckCard};
//# sourceMappingURL=chartdeck-card.js.map
