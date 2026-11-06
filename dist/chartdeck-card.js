/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let a=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const n=this.t;if(t&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=o.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(n,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new a(o,e,n)},i=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,m=globalThis,p=m.trustedTypes,f=p?p.emptyScript:"",g=m.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},_=(e,t)=>!s(e,t),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&l(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const r=o?.call(this);a?.call(this,t),this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const e=this._$Eu(t,n);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(i(e))}else void 0!==e&&t.push(i(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((n,o)=>{if(t)n.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of o){const o=document.createElement("style"),a=e.litNonce;void 0!==a&&o.setAttribute("nonce",a),o.textContent=t.cssText,n.appendChild(o)}})(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const a=(void 0!==n.converter?.toAttribute?n.converter:v).toAttribute(t,n.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=o;const r=a.fromAttribute(t,e.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(e,t,n,o=!1,a){if(void 0!==e){const r=this.constructor;if(!1===o&&(a=this[e]),n??=r.getPropertyOptions(e),!((n.hasChanged??_)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:a},r){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==a||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,g?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,w=e=>e,k=$.trustedTypes,M=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,C=`<${E}>`,z=document,L=()=>z.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,O="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,F=/>/g,P=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,H=/"/g,B=/^(?:script|style|textarea|title)$/i,I=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),R=I(1),V=I(2),q=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),Z=new WeakMap,Y=z.createTreeWalker(z,129);function G(e,t){if(!j(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,r=0;const i=e.length-1,s=this.parts,[l,c]=((e,t)=>{const n=e.length-1,o=[];let a,r=2===t?"<svg>":3===t?"<math>":"",i=N;for(let s=0;s<n;s++){const t=e[s];let n,l,c=-1,d=0;for(;d<t.length&&(i.lastIndex=d,l=i.exec(t),null!==l);)d=i.lastIndex,i===N?"!--"===l[1]?i=U:void 0!==l[1]?i=F:void 0!==l[2]?(B.test(l[2])&&(a=RegExp("</"+l[2],"g")),i=P):void 0!==l[3]&&(i=P):i===P?">"===l[0]?(i=a??N,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,n=l[1],i=void 0===l[3]?P:'"'===l[3]?H:D):i===H||i===D?i=P:i===U||i===F?i=N:(i=P,a=void 0);const h=i===P&&e[s+1].startsWith("/>")?" ":"";r+=i===N?t+C:c>=0?(o.push(n),t.slice(0,c)+A+t.slice(c)+S+h):t+S+(-2===c?s:h)}return[G(e,r+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]})(e,t);if(this.el=X.createElement(l,n),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Y.nextNode())&&s.length<i;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(A)){const t=c[r++],n=o.getAttribute(e).split(S),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:i[2],strings:n,ctor:"."===i[1]?te:"?"===i[1]?ne:"@"===i[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(S)&&(s.push({type:6,index:a}),o.removeAttribute(e));if(B.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],L()),Y.nextNode(),s.push({type:2,index:++a});o.append(e[t],L())}}}else if(8===o.nodeType)if(o.data===E)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)s.push({type:7,index:a}),e+=S.length-1}a++}}static createElement(e,t){const n=z.createElement("template");return n.innerHTML=e,n}}function J(e,t,n=e,o){if(t===q)return t;let a=void 0!==o?n._$Co?.[o]:n._$Cl;const r=T(t)?void 0:t._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),void 0===r?a=void 0:(a=new r(e),a._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=a:n._$Cl=a),void 0!==a&&(t=J(e,a._$AS(e,t.values),a,o)),t}let K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??z).importNode(t,!0);Y.currentNode=o;let a=Y.nextNode(),r=0,i=0,s=n[0];for(;void 0!==s;){if(r===s.index){let t;2===s.type?t=new Q(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new ae(a,this,e)),this._$AV.push(t),s=n[++i]}r!==s?.index&&(a=Y.nextNode(),r++)}return Y.currentNode=z,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),T(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>j(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=X.createElement(G(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new K(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new X(e)),t}k(e){j(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new Q(this.O(L()),this.O(L()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=W}_$AI(e,t=this,n,o){const a=this.strings;let r=!1;if(void 0===a)e=J(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const o=e;let i,s;for(e=a[0],i=0;i<a.length-1;i++)s=J(this,o[n+i],t,i),s===q&&(s=this._$AH[i]),r||=!T(s)||s!==this._$AH[i],s===W?e=W:e!==W&&(e+=(s??"")+a[i+1]),this._$AH[i]=s}r&&!o&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ne extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class oe extends ee{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??W)===q)return;const n=this._$AH,o=e===W&&n!==W||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==W&&(n===W||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const re={I:Q},ie=$.litHtmlPolyfillSupport;ie?.(X,Q),($.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let le=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const o=n?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=n?.renderBefore??null;o._$litPart$=a=new Q(t.insertBefore(L(),e),e,void 0,n??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};le._$litElement$=!0,le.finalized=!0,se.litElementHydrateSupport?.({LitElement:le});const ce=se.litElementPolyfillSupport;ce?.({LitElement:le}),(se.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=1,he=2,ue=3,me=4,pe=e=>(...t)=>({_$litDirective$:e,values:t});let fe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ge}=re,ye=e=>e,ve=()=>document.createComment(""),_e=(e,t,n)=>{const o=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=o.insertBefore(ve(),a),r=o.insertBefore(ve(),a);n=new ge(t,r,e,e.options)}else{const t=n._$AB.nextSibling,r=n._$AM,i=r!==e;if(i){let t;n._$AQ?.(e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==r._$AU&&n._$AP(t)}if(t!==a||i){let e=n._$AA;for(;e!==t;){const t=ye(e).nextSibling;ye(o).insertBefore(e,a),e=t}}}return n},be=(e,t,n=e)=>(e._$AI(t,n),e),xe={},$e=(e,t=xe)=>e._$AH=t,we=e=>{e._$AR(),e._$AA.remove()},ke=(e,t,n)=>{const o=new Map;for(let a=t;a<=n;a++)o.set(e[a],a);return o},Me=pe(class extends fe{constructor(e){if(super(e),e.type!==he)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let o;void 0===n?n=t:void 0!==t&&(o=t);const a=[],r=[];let i=0;for(const s of e)a[i]=o?o(s,i):i,r[i]=n(s,i),i++;return{values:r,keys:a}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,o]){const a=(e=>e._$AH)(e),{values:r,keys:i}=this.dt(t,n,o);if(!Array.isArray(a))return this.ut=i,r;const s=this.ut??=[],l=[];let c,d,h=0,u=a.length-1,m=0,p=r.length-1;for(;h<=u&&m<=p;)if(null===a[h])h++;else if(null===a[u])u--;else if(s[h]===i[m])l[m]=be(a[h],r[m]),h++,m++;else if(s[u]===i[p])l[p]=be(a[u],r[p]),u--,p--;else if(s[h]===i[p])l[p]=be(a[h],r[p]),_e(e,l[p+1],a[h]),h++,p--;else if(s[u]===i[m])l[m]=be(a[u],r[m]),_e(e,a[h],a[u]),u--,m++;else if(void 0===c&&(c=ke(i,m,p),d=ke(s,h,u)),c.has(s[h]))if(c.has(s[u])){const t=d.get(i[m]),n=void 0!==t?a[t]:null;if(null===n){const t=_e(e,a[h]);be(t,r[m]),l[m]=t}else l[m]=be(n,r[m]),_e(e,a[h],n),a[t]=null;m++}else we(a[u]),u--;else we(a[h]),h++;for(;m<=p;){const t=_e(e,l[p+1]);be(t,r[m]),l[m++]=t}for(;h<=u;){const e=a[h++];null!==e&&we(e)}return this.ut=i,$e(e,l),q}}),Ae=e=>!!e&&"none"!==e.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Se(e){return Ae(e.tap_action)||Ae(e.hold_action)||Ae(e.double_tap_action)}function Ee(e,t){let n,o,a=0,r=0,i=!1,s=!1;const l=n=>{const o=t(),a="tap"===n?o.tap_action:"hold"===n?o.hold_action:o.double_tap_action;Ae(a)&&e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:o,action:n}}))},c=()=>{void 0!==n&&clearTimeout(n),n=void 0},d=e=>{const o=e;o.button>0||(i=!0,s=!1,a=o.clientX,r=o.clientY,c(),Ae(t().hold_action)&&(n=setTimeout(()=>{n=void 0,s=!0,l("hold")},500)))},h=e=>{if(!i)return;const t=e;Math.hypot(t.clientX-a,t.clientY-r)>10&&(c(),i=!1)},u=()=>{c(),i=!1},m=()=>{const e=i;c(),i=!1,e&&!s?Ae(t().double_tap_action)?void 0!==o?(clearTimeout(o),o=void 0,l("double_tap")):o=setTimeout(()=>{o=void 0,l("tap")},250):l("tap"):s=!1},p=e=>{const t=e;t.repeat||"Enter"!==t.key&&" "!==t.key||(" "===t.key&&t.preventDefault(),l("tap"))},f=e=>{Ae(t().hold_action)&&e.preventDefault()};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",h),e.addEventListener("pointerup",m),e.addEventListener("pointercancel",u),e.addEventListener("pointerleave",u),e.addEventListener("keydown",p),e.addEventListener("contextmenu",f),()=>{c(),void 0!==o&&clearTimeout(o),o=void 0,e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",h),e.removeEventListener("pointerup",m),e.removeEventListener("pointercancel",u),e.removeEventListener("pointerleave",u),e.removeEventListener("keydown",p),e.removeEventListener("contextmenu",f)}}const Ce={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function ze(e){if(Object.prototype.hasOwnProperty.call(Ce,e)){const{variable:t,fallback:n}=Ce[e];return`var(${t}, ${n})`}return e}const Le=new Set(["amber"]);function Te(e){if(Object.prototype.hasOwnProperty.call(Ce,e))return Le.has(e)?"dark":"light";const t=function(e){const t=e.trim().toLowerCase(),n=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(n){const e=n[1].length<=4?[...n[1]].map(e=>e+e).join(""):n[1],[t,o,a]=[0,2,4].map(t=>parseInt(e.slice(t,t+2),16));return[t,o,a,8===e.length?parseInt(e.slice(6,8),16)/255:1]}const o=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(t);if(o){const[e,t,n]=[o[1],o[2],o[3]].map(e=>Math.min(255,Number(e))),a=void 0===o[4]?1:Number(o[4])/(o[5]?100:1);return[e,t,n,Math.min(1,a)]}}(e);return t?t[3]<.5?"theme":function([e,t,n]){const o=e=>{const t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return.2126*o(e)+.7152*o(t)+.0722*o(n)}([t[0],t[1],t[2]])>.4?"dark":"light":"light"}function je(e,t){let n=t[0];for(const o of t){if(!(o.from<=e))break;n=o}return n}function Oe(e,t,n){const o=n?` ${n}`:"",a=[];return e.forEach((n,r)=>{const i=e[r+1],s=ze(n.color);n.label?a.push({color:s,text:n.label}):Number.isFinite(n.from)?i?a.push({color:s,text:`${t(n.from)}–${t(i.from)}${o}`}):a.push({color:s,text:`${t(n.from)}${o}+`}):i&&a.push({color:s,text:`< ${t(i.from)}${o}`})}),a}const Ne={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},Ue=["label","area","floor","device_class","domain","entity"];function Fe(e,t){if(null==e)return;if("object"!=typeof e||Array.isArray(e))throw new Error(`"${t}" must list what to match, such as "area" or "device_class"`);const n="include"===t?Ue.filter(e=>"entity"!==e):Ue,o={};for(const[a,r]of Object.entries(e)){if(!n.includes(a))throw new Error(`"${t}" can't match on "${a}". Use: ${n.join(", ")}`);const e=(Array.isArray(r)?r:[r]).filter(e=>null!=e&&""!==e);if(e.some(e=>"string"!=typeof e))throw new Error(`"${t}.${a}" must be text or a list of text`);e.length&&(o[a]=e)}return Object.keys(o).length?o:void 0}function Pe(e){const t=e.state;return"unavailable"===t||"unknown"===t||""!==t.trim()&&Number.isFinite(Number(t))}function De(e,t){const n=e.entity_id,o=t.entities?.[n],a=o?.device_id?t.devices?.[o.device_id]:void 0,r=o?.area_id??a?.area_id??void 0,i=e.attributes?.device_class;return{label:[...o?.labels??[],...a?.labels??[]],area:r,floor:r?t.areas?.[r]?.floor_id??void 0:void 0,device_class:"string"==typeof i?i:void 0,domain:n.slice(0,n.indexOf(".")),entity:n}}function He(e,t,n){const o=e[t],a=n[t];return Array.isArray(a)?a.some(e=>o.includes(e)):void 0!==a&&o.includes(a)}function Be(e,t){return Object.keys(e).every(n=>He(e,n,t))}function Ie(e,t){return!!e&&Object.keys(e).some(n=>He(e,n,t))}const Re=new WeakMap;const Ve=["bar","thin","segmented","tank","ring","needle","arc","line","column","area","combined","pie","rings","pictograph","waffle","histogram","scatter","bubble","heatmap","box"],qe=[{from:-1/0,color:"primary"}],We=["none","ascending","descending"];function Ze(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"==typeof e&&""!==e.trim()){const t=Number(e);return Number.isFinite(t)?t:void 0}}function Ye(e,t){if(null==e||""===e)return;const n=Ze(e);if(void 0!==n)return n;if("string"==typeof e)return e;throw new Error(`"${t}" must be a number or an entity id`)}function Ge(e,t,n,o=1/0){if(null==e||""===e)return;const a=Ze(e);if(void 0===a||!Number.isInteger(a)||a<n||a>o){throw new Error(`"${t}" must be a whole number ${o===1/0?`of at least ${n}`:`from ${n} to ${o}`}`)}return a}function Xe(e){if(null==e)return;if(!Array.isArray(e))throw new Error('"severity" must be a list of bands');if(0===e.length)return;const t=e.map((e,t)=>{let n;try{n=Ye(e?.from,"from")}catch{n=void 0}if(void 0===n)throw new Error(`Severity band ${t+1}: "from" must be a number or an entity id`);if("string"!=typeof e.color||!e.color)throw new Error(`Severity band ${t+1}: "color" is required`);return{...e,from:n}});return t.every(e=>"number"==typeof e.from)?t.sort((e,t)=>e.from-t.from):t}function Je(e,t,n){if(null==e)return{action:t};if("object"!=typeof e||"string"!=typeof e.action)throw new Error(`"${n}" must have an "action"`);return e}function Ke(e,t){return void 0!==e?e:t}function Qe(e,t,n){const o="string"==typeof e?{entity:e}:e;if(!o||"object"!=typeof o||"string"!=typeof o.entity||!o.entity)throw new Error(`Entity ${n+1} needs an "entity" id`);if(void 0!==o.attribute&&null!==o.attribute&&"string"!=typeof o.attribute)throw new Error(`Entity ${n+1}: "attribute" must be an attribute name`);const a=Ke(Ye(o.min,"min"),Ye(t.min,"min"))??0,r=Ke(Ye(o.max,"max"),Ye(t.max,"max"))??100;if("number"==typeof a&&"number"==typeof r&&a>=r)throw new Error(`"max" (${r}) must be greater than "min" (${a})`);const i={...o,entity:o.entity,min:a,max:r,severity:Xe(o.severity)??Xe(t.severity)??qe,tap_action:Je(Ke(o.tap_action,t.tap_action),"more-info","tap_action"),hold_action:Je(Ke(o.hold_action,t.hold_action),"none","hold_action"),double_tap_action:Je(Ke(o.double_tap_action,t.double_tap_action),"none","double_tap_action")},s=Ke(o.name,t.name),l=Ke(o.icon,t.icon),c=Ke(o.unit,t.unit),d=Ke(Ye(o.target,"target"),Ye(t.target,"target")),h=Ke(Ge(o.decimals,"decimals",0,20),Ge(t.decimals,"decimals",0,20));return void 0!==s&&(i.name=s),void 0!==l&&(i.icon=l),void 0!==c&&(i.unit=c),void 0!==d&&(i.target=d),void 0!==h&&(i.decimals=h),o.attribute||delete i.attribute,i}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=pe(class extends fe{constructor(e){if(super(e),e.type!==ue&&e.type!==de&&e.type!==me)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===q||t===W)return t;const n=e.element,o=e.name;if(e.type===ue){if(t===n[o])return q}else if(e.type===me){if(!!t===n.hasAttribute(o))return q}else if(e.type===de&&n.getAttribute(o)===t+"")return q;return $e(e),t}}),tt={en:{entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours"}};function nt(e,t){tt[e]={...tt[e],...t}}function ot(e){return(e?.locale?.language??e?.language??"en").split("-")[0]}function at(e,t,n){const o=ot(e),a=tt[o]?.[t]??tt.en[t]??t;return n?a.replace(/\{(\w+)\}/g,(e,t)=>t in n?String(n[t]):e):a}function rt(e){return null==e||""===e}function it(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function st(e,t,n){const[o,...a]=t,r=function(e,t){return Array.isArray(e)?[...e]:it(e)?{...e}:"number"==typeof t?[]:{}}(e,o),i=r,s=a.length?st(i[o],a,n):n,l=a.length>0&&it(s)&&0===Object.keys(s).length;return rt(s)?Array.isArray(r)&&"number"==typeof o?r.splice(o,1):delete i[o]:l&&it(r)?delete i[o]:i[o]=s,r}function lt(e,t,n){return 0===t.length||rt(n)&&void 0===function(e,t){let n=e;for(const o of t){if("object"!=typeof n||null===n)return;n=n[o]}return n}(e,t)?e:st(e,t,n)}function ct(e,t){const n=e;return{width:n.line_width??t.line_width??2.5,dots:n.dots??!0===t.dots,onTop:!0===n.on_top}}function dt(e,t){return[...e.filter(e=>!t(e)),...e.filter(t)]}function ht(e){return e.map(([e,t])=>`M${Math.round(100*e)/100},${Math.round(100*t)/100}h0`).join("")}function ut(e){return Math.round(10*(e+3.5))/10}function mt(e,t){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<.5||e>12))throw new Error(`${t} must be a number from 0.5 to 12`)}function pt(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`${t} must be true or false`)}function ft(e){mt(e.line_width,'"line_width"'),pt(e.dots,'"dots"');for(const t of e.entities??[])"object"==typeof t&&(mt(t.line_width,`"line_width" of ${t.entity}`),pt(t.dots,`"dots" of ${t.entity}`),pt(t.on_top,`"on_top" of ${t.entity}`))}const gt=[{name:"title",path:["title"]}],yt=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],vt=[{name:"color_icon",path:["color_icon"],default:!1}],_t=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],bt=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],xt=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],$t=[{name:"attribute",path:["attribute"]}],wt=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],kt={number:{min:.5,max:12,step:.5,mode:"box",unit_of_measurement:"px"}},Mt=new Map;function At(e){let t=Mt.get(e);return t||(t=[...wt,{name:"dots",path:["dots"],default:e}],Mt.set(e,t)),t}const St=bt.map(({name:e,path:t})=>({name:e,path:t})),Et=[{name:"title",selector:{text:{}}}],Ct=bt.map(({name:e})=>({name:e,selector:{ui_action:{}}})),zt=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],Lt=new Map;let Tt;function jt(e){const t=ot(e);if(Tt?.language!==t){const n=t=>at(e,t);Tt={language:t,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(e=>({value:e,label:n(`editor_curve_${e}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:kt},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return Tt.schema}function Ot(e){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(t=>({value:t,label:at(e,`editor_sort_${t}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const Nt={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function Ut(e,t){const n=e=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:e}});switch(e){case"device_class":return n(t.deviceClasses);case"domain":return n(t.domains);case"entity":return{entity:{multiple:!0}};default:return{[e]:{multiple:!0}}}}const Ft=new Map;function Pt(e,t){const n=function(e){const t=new Set,n=new Set;for(const o of Object.values(e?.states??{})){const e=o.attributes?.device_class;"string"==typeof e&&e&&t.add(e),n.add(o.entity_id.slice(0,o.entity_id.indexOf(".")))}return{deviceClasses:[...t].sort(),domains:[...n].sort()}}(t),o=`${n.deviceClasses.join()}|${n.domains.join()}`,a=Ft.get(e);if(a?.key===o)return a.schema;const r=Nt[e].map(t=>({name:`${e}_${t}`,selector:Ut(t,n)}));return Ft.set(e,{key:o,schema:r}),r}let Dt;function Ht(e,t){let n=e;for(const o of t){if("object"!=typeof n||null===n)return;n=n[o]}return n}function Bt(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;const n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&n.every(n=>Bt(e[n],t[n]))}function It(e,t){const n={};for(const o of t){const t=Ht(e,o.path)??o.default;void 0!==t&&(n[o.name]=t)}return n}function Rt(e,t,n){const o=It(e,t);let a=e;for(const r of t){const e=n[r.name];Bt(o[r.name],e)||(a=lt(a,r.path,void 0!==r.default&&Bt(e,r.default)?void 0:e))}return a}const Vt="var(--divider-color, rgba(127, 127, 127, 0.3))",qt="var(--primary-color, #03a9f4)",Wt="var(--secondary-text-color, #727272)";function Zt(e,t,n,o){const a=(o-90)*Math.PI/180;return[(e+n*Math.cos(a)).toFixed(2),(t+n*Math.sin(a)).toFixed(2)]}function Yt(e,t,n,o){return Zt(e,t,n,o).join(" ")}function Gt(e,t,n,o,a){const r=a-o>180?1:0;return`M ${Yt(e,t,n,o)} A ${n} ${n} 0 ${r} 1 ${Yt(e,t,n,a)}`}function Xt(e){return R`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(e){switch(e){case"bar":return V`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${Vt} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${qt} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${Vt} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${qt} />`;case"thin":return V`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${Wt} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${Vt} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${qt} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${Wt} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${Vt} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${qt} />`;case"segmented":return V`${[0,1].map(e=>Array.from({length:8},(t,n)=>V`<rect x=${6+6.75*n} y=${0===e?9:23} width="5" height="9" rx="1.5"
            fill=${n<(0===e?6:3)?qt:Vt} />`))}`;case"tank":return V`${[14,36].map((e,t)=>V`
          <rect x=${e} y="5" width="14" height="30" rx="4" fill=${Vt} />
          <rect x=${e} y=${0===t?13:23} width="14" height=${0===t?22:12} rx="4" fill=${qt} />`)}`;case"ring":return V`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${Vt} stroke-width="5" />
        <path d=${Gt(32,20,14,0,250)} fill="none" stroke=${qt} stroke-width="5" stroke-linecap="round" />`;case"arc":return V`
        <path d=${Gt(32,21,14,-135,135)} fill="none" stroke=${Vt} stroke-width="5" stroke-linecap="round" />
        <path d=${Gt(32,21,14,-135,40)} fill="none" stroke=${qt} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[e,t]=Zt(32,32,18,25);return V`
        <path d=${Gt(32,32,22,-90,90)} fill="none" stroke=${Vt} stroke-width="5" />
        <path d=${Gt(32,32,22,-90,25)} fill="none" stroke=${qt} stroke-width="5" />
        <line x1="32" y1="32" x2=${e} y2=${t} stroke=${Wt} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${Wt} />`}default:return V``}}(e)}
  </svg>`}function Jt(e){let t=1/0,n=-1/0;for(const o of e)for(const e of o)for(const o of[e.v,e.min,e.max])"number"==typeof o&&(o<t&&(t=o),o>n&&(n=o));return t===1/0?void 0:[t,n]}function Kt(e,t){const[n,o]=e,[a,r]=t,i=o===n?0:(r-a)/(o-n);return e=>a+(e-n)*i}const Qt=["outside","inside"],en=!0,tn=!0,nn="outside",on=!0,an=!1,rn=e=>"number"==typeof e&&Number.isFinite(e);function sn(e){const t=e;for(const n of["x_axis","y_axis"])if(void 0!==t[n]&&"boolean"!=typeof t[n])throw new Error(`"${n}" must be true or false`);if(void 0!==t.axis_labels&&!Qt.includes(t.axis_labels))throw new Error(`"axis_labels" must be one of: ${Qt.join(", ")}`);if(void 0!==t.gridlines){const e=t.gridlines;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const t of["horizontal","vertical"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"gridlines.${t}" must be true or false`)}for(const n of["y_min","y_max"])if(void 0!==t[n]&&!rn(t[n]))throw new Error(`"${n}" must be a number`);if(rn(t.y_min)&&rn(t.y_max)&&t.y_min>=t.y_max)throw new Error('"y_min" must be below "y_max"')}function ln(e){const t=e,n=t.gridlines??{};return{x:t.x_axis??en,y:t.y_axis??tn,labels:t.axis_labels??nn,horizontal:n.horizontal??on,vertical:n.vertical??an,min:rn(t.y_min)?t.y_min:void 0,max:rn(t.y_max)?t.y_max:void 0}}function cn(e,t){if(!(e>0&&Number.isFinite(e)))return 1;const n=e/Math.max(1,t),o=10**Math.floor(Math.log10(n));for(const a of[1,2,5])if(a*o>=n*(1-1e-9))return a*o;return 10*o}function dn(e){return Math.max(0,-Math.floor(Math.log10(e)+1e-9))}const hn=e=>Number(e.toPrecision(12));function un(e,t,n){let[o,a]=function([e,t],n=.08){if(e===t)return[e-1,t+1];const o=(t-e)*n;return[e-o,t+o]}(e??[0,1]);void 0!==t.min&&(o=t.min),void 0!==t.max&&(a=t.max),a<=o&&(void 0!==t.min?a=o+Math.max(1,.1*Math.abs(o)):o=a-Math.max(1,.1*Math.abs(a)));const r=cn(a-o,n);void 0===t.min&&(o=hn(Math.floor(o/r+1e-9)*r)),void 0===t.max&&(a=hn(Math.ceil(a/r-1e-9)*r));const i=[];for(let s=Math.ceil(o/r-1e-9);s*r<=a+1e-9*r;s++)i.push(hn(s*r));return{domain:[o,a],ticks:i,decimals:dn(r)}}const mn=6e4,pn=36e5,fn=864e5,gn=[...[1,5,10,15,30].map(e=>({unit:"minute",n:e,ms:e*mn})),...[1,2,3,6,12].map(e=>({unit:"hour",n:e,ms:e*pn})),...[1,2,7].map(e=>({unit:"day",n:e,ms:e*fn})),...[1,2,3,6].map(e=>({unit:"month",n:e,ms:30.44*e*fn})),...[1,2,5,10,20,50,100].map(e=>({unit:"year",n:e,ms:365.25*e*fn}))];const yn=e=>-new Date(e).getTimezoneOffset()*mn;function vn(e){if(!e)return yn;let t;try{t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return yn}return e=>{const n={};for(const o of t.formatToParts(e))n[o.type]=Number(o.value);return Date.UTC(n.year,n.month-1,n.day,n.hour%24,n.minute,n.second)-1e3*Math.floor(e/1e3)}}function _n(e,t){return e-t(e-t(e))}function bn(e,t,n,o){const a=[],r=e.end+t(e.end);for(let i=n,s=0;i<=r&&s<1e3;i=o(i),s++){const n=_n(i,t);n>=e.start&&n<=e.end&&n!==a[a.length-1]&&a.push(n)}return a}function xn(e,t,n=yn){const{unit:o,n:a}=function(e,t){return gn.find(n=>e/n.ms<=Math.max(1,t))??gn[gn.length-1]}(e.end-e.start,t),r=e.start+n(e.start);if("minute"===o||"hour"===o||"day"===o&&7!==a){const t=a*("minute"===o?mn:"hour"===o?pn:fn);return{unit:o,ticks:bn(e,n,Math.ceil(r/t)*t,e=>e+t)}}if("day"===o){const t=Math.ceil(r/fn);return{unit:o,ticks:bn(e,n,(t+((4-t)%7+7)%7)*fn,e=>e+7*fn)}}const i=new Date(r);if("month"===o){let t=i.getUTCFullYear(),s=i.getUTCMonth();Date.UTC(t,s)<r&&(s+=1),s=Math.ceil(s/a)*a,t+=Math.floor(s/12),s%=12;const l=e=>{const t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+a)};return{unit:o,ticks:bn(e,n,Date.UTC(t,s),l)}}let s=i.getUTCFullYear();return Date.UTC(s,0)<r&&(s+=1),s=Math.ceil(s/a)*a,{unit:o,ticks:bn(e,n,Date.UTC(s,0),e=>Date.UTC(new Date(e).getUTCFullYear()+a,0))}}function $n(e){return"server"===e?.locale?.time_zone?e.config?.time_zone:void 0}function wn(e){const t=e?.locale?.time_format;return"12"===t||"24"!==t&&void 0}const kn=new Map;function Mn(e,t,n){const o=`${e}|${t}|${JSON.stringify(n)}`;let a=kn.get(o);if(!a){try{a=new Intl.DateTimeFormat(e,{...n,timeZone:t})}catch{a=new Intl.DateTimeFormat(void 0,n)}kn.set(o,a)}return a}function An(e,t,n=!1){return Mn(t?.locale?.language??"en",$n(t),{hour:"numeric",minute:"2-digit",...n?{second:"2-digit"}:{},hour12:wn(t)}).format(e)}function Sn(e,t){return Mn(t?.locale?.language??"en",$n(t),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:wn(t)}).format(e)}function En(e,t,n,o,a){const r=o?.locale?.language??"en",i=$n(o),s=e+(a??vn(i))(e),l=new Date(s),c=s%fn===0;switch(t){case"minute":case"hour":return c?Mn(r,i,{weekday:"short"}).format(e):An(e,o);case"day":return n<=7*fn?Mn(r,i,{weekday:"short"}).format(e):Mn(r,i,{day:"numeric",month:"short"}).format(e);case"month":return Mn(r,i,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(e);default:return Mn(r,i,{year:"numeric"}).format(e)}}function Cn(e,t){if(e.length<=t)return e;const n=[];let o=[];for(const r of e)null===r.v?(o.length&&n.push(o),n.push([r]),o=[]):o.push(r);o.length&&n.push(o);const a=e.length;return n.flatMap(e=>null===e[0].v?e:function(e,t){if(e.length<=t||t<3)return e;const n=[e[0]],o=(e.length-2)/(t-2);let a=0;for(let r=0;r<t-2;r++){const t=Math.floor(r*o)+1,i=Math.min(Math.floor((r+1)*o)+1,e.length-1),s=i,l=Math.min(Math.floor((r+2)*o)+1,e.length);let c=0,d=0;const h=Math.max(1,l-s);for(let n=s;n<l;n++)c+=e[n].t,d+=e[n].v;c/=h,d/=h;let u=t,m=-1;const p=e[a];for(let n=t;n<i;n++){const t=Math.abs((p.t-c)*(e[n].v-p.v)-(p.t-e[n].t)*(d-p.v));t>m&&(m=t,u=n)}n.push(e[u]),a=u}return n.push(e[e.length-1]),n}(e,Math.max(3,Math.round(e.length/a*t))))}const zn=36e5,Ln=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Tn=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],jn=new Map;function On(e){let t=jn.get(e);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),jn.set(e,t)),t}function Nn(e,t){const n={};for(const o of On(t).formatToParts(new Date(e)))n[o.type]=o.value;return{year:Number(n.year),month:Number(n.month),day:Number(n.day),hour:Number(n.hour)%24,minute:Number(n.minute),second:Number(n.second),weekday:Ln.indexOf(n.weekday)+1}}function Un(e,t){const n=Nn(e,t);return Date.UTC(n.year,n.month-1,n.day,n.hour,n.minute,n.second)-1e3*Math.floor(e/1e3)}function Fn(e,t,n,o=1,a=0,r=0,i=0){const s=Date.UTC(t,n-1,o,a,r,i),l=new Date(s),c=Un(s-864e5,e),d=Un(s+864e5,e),h=[s-c,s-d].filter(t=>{const n=Nn(t,e);return n.year===l.getUTCFullYear()&&n.month===l.getUTCMonth()+1&&n.day===l.getUTCDate()&&n.hour===l.getUTCHours()&&n.minute===l.getUTCMinutes()&&n.second===l.getUTCSeconds()});return h.length?Math.min(...h):function(e,t,n,o){for(;t-e>1e3;){const a=1e3*Math.floor((e+t)/2e3);Un(a,o)===n?e=a:t=a}return t}(s-d,s-c,c,e)}function Pn(e,t,n){const o=new Date(Date.UTC(e,t-1,n));return{year:o.getUTCFullYear(),month:o.getUTCMonth()+1,day:o.getUTCDate()}}function Dn(e,t,n){const o=Nn(t,n.timeZone);switch(e){case"hour":return t-t%1e3-1e3*(60*o.minute+o.second);case"day":return Fn(n.timeZone,o.year,o.month,o.day);case"week":{const e=(o.weekday-n.firstDay+7)%7,t=Pn(o.year,o.month,o.day-e);return Fn(n.timeZone,t.year,t.month,t.day)}case"month":return Fn(n.timeZone,o.year,o.month,1);case"year":return Fn(n.timeZone,o.year,1,1)}}function Hn(e,t,n,o){if("hour"===e)return t+n*zn;const a=Nn(t,o.timeZone);let{year:r,month:i,day:s}=a;if("day"===e)({year:r,month:i,day:s}=Pn(r,i,s+n));else if("week"===e)({year:r,month:i,day:s}=Pn(r,i,s+7*n));else{const t=Pn(r,i+("year"===e?12*n:n),1),o=Pn(t.year,t.month+1,0).day;({year:r,month:i}=t),s=Math.min(s,o)}return Fn(o.timeZone,r,i,s,a.hour,a.minute,a.second)}function Bn(e,t,n,o,a=1e4){const r=[Dn(e,t,o)];let i=1;for(;r[r.length-1]<n&&r.length<=a;){const t="hour"===e?r[0]+i*zn:Hn(e,r[0],i,o);r.push(t>r[r.length-1]?t:r[r.length-1]+zn),i++}return 1===r.length&&r.push(Hn(e,r[0],1,o)),r}function In(e){try{const t=new Intl.Locale(e),n=t.getWeekInfo?.().firstDay??t.weekInfo?.firstDay;return"number"==typeof n&&n>=1&&n<=7?n:1}catch{return 1}}function Rn(e){const t=e?.locale,n=e?.config?.time_zone,o="server"===t?.time_zone&&function(e){if("string"!=typeof e||""===e)return!1;try{return On(e),!0}catch{return!1}}(n)?n:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",a=Tn.indexOf(String(t?.first_weekday??"language"))+1;return{timeZone:o,firstDay:a>0?a:In(t?.language??e?.language??"en")}}const Vn=["hour","day","week","month"],qn=["day","week","month","year"],Wn=["now","end"],Zn={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},Yn={hour:36e5,day:864e5,week:6048e5};function Gn(e,t,n){const o="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof o||!Number.isInteger(o)||o<t)throw new Error(n);return o}function Xn(e,t,n){if(!t.includes(e))throw new Error(`"${n}" must be one of: ${t.join(", ")}`);return e}function Jn(e){if(null==e)return Zn;if("object"!=typeof e||Array.isArray(e))throw new Error('"period" must have "last" and "unit"');const t=e,n={last:Gn(t.last??Zn.last,1,'"period.last" must be a whole number of 1 or more'),unit:Xn(t.unit??Zn.unit,Vn,"period.unit"),offset:Gn(t.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==t.navigate&&!0===t.navigate,until:Xn(t.until??"now",Wn,"period.until")};if(void 0!==t.navigate&&"boolean"!=typeof t.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==t.calendar&&(n.calendar=Xn(t.calendar,qn,"period.calendar")),n}function Kn(e,t,n){if("month"===e.unit){if(n)return{start:Hn("month",t,-e.last,n),end:t};const o=new Date(t);return o.setMonth(o.getMonth()-e.last),{start:o.getTime(),end:t}}return{start:t-e.last*Yn[e.unit],end:t}}function Qn(e,t,n,o=0){const a=Math.max(0,e.offset+o);if(e.calendar){const o=e.calendar,r=Hn(o,Dn(o,t,n),-a,n),i=Hn(o,r,1,n);return{start:r,end:0===a&&"now"===e.until?t:i,live:0===a,back:a}}if("month"===e.unit){return{...Kn(e,0===a?t:Hn("month",t,-a*e.last,n),n),live:0===a,back:a}}const r=e.last*Yn[e.unit];return{start:t-(a+1)*r,end:t-a*r,live:0===a,back:a}}const eo=new WeakMap;function to(e,t){const n=eo.get(e);return n&&n.key===JSON.stringify(t)?n.steps:0}function no(e,t,n){eo.set(e,{key:JSON.stringify(t),steps:Math.max(-t.offset,n)})}function oo(e){if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function ao(e,t){const n=[];for(const o of e??[]){const e=o.lu??o.lc;if(void 0===e)continue;const a=t?o.a?.[t]:o.s;n.push({t:Math.round(1e3*e),v:oo(a)})}return n}const ro=e=>"number"==typeof e&&Number.isFinite(e)?e:null;function io(e,t){return(e??[]).map(e=>{const n="number"==typeof e.start?e.start:Date.parse(e.start);let o;return o="change"===t?ro(e.change):"state"===t?ro(e.state)??ro(e.mean):"min"===t||"max"===t?ro(e[t])??ro(e.mean)??ro(e.state):ro(e.mean)??ro(e.state),{t:n,v:o,min:e.min??null,max:e.max??null}})}function so(e){const t=(e.end-e.start)/864e5;return t<=2?"5minute":t<=35?"hour":t<=400?"day":"month"}function lo(e){return{period:so(e),types:["mean","min","max","state"],value:"mean"}}function co(e){return e.attribute?`${e.entity}|${e.attribute}`:e.entity}const ho=["hour","day","week","month"],uo=["mean","sum","min","max","first","last","change"];function mo(e){if(void 0!==e.aggregate&&!uo.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${uo.join(", ")}`);if(void 0!==e.group_by){if(!ho.includes(e.group_by))throw new Error(`"group_by" must be one of: ${ho.join(", ")}`);return{unit:e.group_by,aggregate:e.aggregate??"mean"}}}function po(e,t,n,o,a=!1){const r="change"===n?function(e){let t=null;return e.map(e=>{if(null===e.v)return null;if(null===t)return t=e.v,0;if(e.v>=t){const n=e.v-t;return t=e.v,n}return t-e.v>.1*Math.abs(t)?(t=e.v,Math.max(0,e.v)):0})}(e):[],i=[];let s=0;for(let l=0;l+1<t.length;l++){const c=t[l],d=t[l+1],h=Math.min(d,o);for(;s<e.length&&e[s].t<c;)s++;const u={t:c,end:d,v:null};if(i.push(u),h<=c)continue;const m=[],p=e[s-1];let f=s;const g=f<e.length&&e[f].t<h?e[f].t:h;for(p&&g>c&&m.push({v:p.v,dt:g-c,reading:!1,carried:!0,up:0});f<e.length&&e[f].t<h;f++){const t=f+1<e.length&&e[f+1].t<h?e[f+1].t:h,n=e[f];m.push({v:n.v,dt:t-n.t,reading:!0,carried:!0===n.carried,up:r[f]??null})}const y=m.filter(e=>null!==e.v);if(0===y.length)continue;const v=y.map(e=>e.v);switch(a&&(u.min=Math.min(...v),u.max=Math.max(...v)),n){case"mean":{const e=y.reduce((e,t)=>e+t.dt,0);u.v=e>0?y.reduce((e,t)=>e+t.v*t.dt,0)/e:v.reduce((e,t)=>e+t,0)/v.length;break}case"min":u.v=Math.min(...v);break;case"max":u.v=Math.max(...v);break;case"first":u.v=v[0];break;case"last":u.v=v[v.length-1];break;case"sum":{const e=y.filter(e=>e.reading&&!e.carried);u.v=e.length?e.reduce((e,t)=>e+t.v,0):null;break}case"change":u.v=y.reduce((e,t)=>e+(t.reading&&!t.carried?t.up??0:0),0)}}return i}const fo={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},go={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};const yo={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class vo{constructor(e){this.onChange=e,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(e,t,n,o,a={}){const r=a.live??!0,i="statistics"===o?a.statistics??lo(n):void 0,s=`${o}|${t.map(co).join(",")}|${i?JSON.stringify(i):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>bo,c=void 0!==this.pausedAt&&"statistics"===o&&r;this.pausedAt=void 0;const d=Math.max(6e4,(n.end-n.start)/100),h=n.start<this.loadedFrom||(r?this.loadedTo!==1/0:n.end>this.loadedTo+d);(s!==this.shape||h||l&&r||c)&&(this.shape=s,this.load(e,t,n,r,i)),"ready"===this.status&&"history"===o&&this.loadedTo===1/0&&this.appendLive(e,t);const u=new Map;for(const[m,p]of this.data)u.set(m,_o(p,n));return{status:this.status,data:u,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(e,t,n,o,a){const r=++this.generation;this.status="loading",this.loadedFrom=n.start,this.loadedTo=o?1/0:n.end,clearTimeout(this.timer);const i=a?async function(e,t,n,o=lo(n)){const a=new Map;if(!e.callWS||0===t.length)return a;const r=[...new Set(t.map(e=>e.entity))],i=await e.callWS({type:"recorder/statistics_during_period",start_time:new Date(n.start).toISOString(),end_time:new Date(n.end).toISOString(),statistic_ids:r,period:o.period,types:o.types});for(const s of t)a.set(co(s),io(i?.[s.entity],o.value));return a}(e,t,n,a):async function(e,t,n){const o=new Map;if(!e.callWS||0===t.length)return o;const a={type:"history/history_during_period",start_time:new Date(n.start).toISOString(),end_time:new Date(n.end).toISOString(),significant_changes_only:!1},r=[...new Set(t.filter(e=>!e.attribute).map(e=>e.entity))],i=[...new Set(t.filter(e=>e.attribute).map(e=>e.entity))],s=[];return r.length&&s.push(e.callWS({...a,entity_ids:r,minimal_response:!0,no_attributes:!0}).then(e=>{for(const t of r)o.set(co({entity:t}),ao(e?.[t]))})),i.length&&s.push(e.callWS({...a,entity_ids:i,no_attributes:!1}).then(e=>{for(const n of t.filter(e=>e.attribute))o.set(co(n),ao(e?.[n.entity],n.attribute))})),await Promise.all(s),o}(e,t,n);i.then(n=>{if(r===this.generation){this.data=n,this.status="ready",this.error=void 0,this.seen.clear();for(const n of t)this.seen.set(co(n),e.states[n.entity]);a&&o&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},yo[a.period])),this.onChange()}},e=>{r===this.generation&&(this.status="error",this.error=e instanceof Error?e.message:String(e?.message??e),this.onChange())})}appendLive(e,t){for(const n of t){const t=co(n),o=e.states[n.entity];if(!o||this.seen.get(t)===o)continue;this.seen.set(t,o);const a=Date.parse(o.last_updated??o.last_changed??"")||Date.now(),r=this.data.get(t)??[],i=r[r.length-1];i&&a<=i.t||(r.push({t:a,v:oo(n.attribute?o.attributes?.[n.attribute]:o.state)}),this.data.set(t,r))}}}function _o(e,t){let n=0;for(;n<e.length&&e[n].t<t.start;)n++;const o=e.slice(n).filter(e=>e.t<=t.end),a=e[n-1];return a?[{...a,t:t.start,carried:!0},...o]:o}const bo=6e4,xo=new WeakMap;function $o(e,t){let n=xo.get(e);return n||(n=new vo(t),xo.set(e,n)),n}const wo=["smooth","straight","step"],ko=e=>(Math.round(100*e)/100).toString();function Mo(e){return e.map(([e,t],n)=>`${n?"L":"M"}${ko(e)},${ko(t)}`).join("")}function Ao(e,t){return 0===e.length?"":1===e.length?`M${ko(e[0][0])},${ko(e[0][1])}h0`:"smooth"===t?function(e){const t=e.length;if(t<3)return Mo(e);const n=[],o=[];for(let i=0;i<t-1;i++)n.push(e[i+1][0]-e[i][0]),o.push(0===n[i]?0:(e[i+1][1]-e[i][1])/n[i]);const a=[o[0]];for(let i=1;i<t-1;i++)a.push(o[i-1]*o[i]<=0?0:(o[i-1]+o[i])/2);a.push(o[t-2]);for(let i=0;i<t-1;i++){if(0===o[i]){a[i]=0,a[i+1]=0;continue}const e=a[i]/o[i],t=a[i+1]/o[i],n=e*e+t*t;if(n>9){const r=3/Math.sqrt(n);a[i]=r*e*o[i],a[i+1]=r*t*o[i]}}let r=`M${ko(e[0][0])},${ko(e[0][1])}`;for(let i=0;i<t-1;i++){const t=n[i]/3;r+=`C${ko(e[i][0]+t)},${ko(e[i][1]+a[i]*t)},${ko(e[i+1][0]-t)},${ko(e[i+1][1]-a[i+1]*t)},${ko(e[i+1][0])},${ko(e[i+1][1])}`}return r}(e):"step"===t?function(e){let t=`M${ko(e[0][0])},${ko(e[0][1])}`;for(let n=1;n<e.length;n++)t+=`H${ko(e[n][0])}V${ko(e[n][1])}`;return t}(e):Mo(e)}function So(e){const t=[];let n=[];for(const o of e)null===o.v?(n.length&&t.push(n),n=[]):n.push(o);return n.length&&t.push(n),t}const Eo=1e3,Co=200,zo=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],Lo=["history","statistics"];function To(e){if(Jn(e.period),mo(e),void 0!==e.source&&!Lo.includes(e.source))throw new Error(`"source" must be one of: ${Lo.join(", ")}`);const t=[e.curve,...(e.entities??[]).map(e=>"object"==typeof e?e.curve:void 0)];for(const n of t)if(void 0!==n&&!wo.includes(n))throw new Error(`"curve" must be one of: ${wo.join(", ")}`)}function jo(e,t=Date.now(),n={}){const o=Jn(e.raw.period),a=e.raw.source??"history",r=Rn(e.hass),i=Qn(o,t,r,o.navigate?to(e.host,o):0),s=mo(e.raw),l={start:s?Dn(s.unit,i.start,r):i.start,end:i.end},c=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),d=$o(e.host,e.requestUpdate),h=s&&"statistics"===a?function(e,t,n,o=!1){const a=t.timeZone===n&&("week"!==e.unit||1===t.firstDay),r="hour"!==e.unit&&a?e.unit:"hour",{types:i,value:s}=go[e.aggregate];return{period:r,types:o?[...new Set([...i,"min","max"])]:i,value:s}}(s,r,e.hass.config?.time_zone,!0===n.range):void 0,u=h?{start:l.start-fo[h.period],end:l.end}:l,m=d.get(e.hass,c,u,a,{live:i.live,statistics:h}),p=s?Bn(s.unit,l.start,l.end,r):[],f=e.raw.curve??"smooth",g=Math.min(l.end,t),y=e.items.map((e,t)=>{const o=e.config;let r=m.data.get(co(c[t]))??[];const i=r[r.length-1];return s?r="statistics"===a?function(e,t,n,o=1/0,a=!1){const r=[];let i=0;for(let s=0;s+1<t.length;s++){const l=t[s],c=t[s+1];for(;i<e.length&&e[i].t<l;)i++;let d=i;const h=[],u=[],m=[];for(;d<e.length&&e[d].t<c;d++){const t=e[d];null===t.v||t.carried||(h.push(t.v),u.push(t.min??t.v),m.push(t.max??t.v))}let p=null;if(h.length&&l<o)if("mean"===n)p=h.reduce((e,t)=>e+t,0)/h.length;else if("sum"===n||"change"===n)p=h.reduce((e,t)=>e+t,0);else if("min"===n)p=Math.min(...h);else if("max"===n)p=Math.max(...h);else if("last"===n)p=h[h.length-1];else{const t=e.slice(0,i).reverse().find(e=>null!==e.v),n=e.slice(i,d).find(e=>e.carried&&null!==e.v);p=(t??n)?.v??h[0]}const f={t:l,end:c,v:p};a&&null!==p&&(f.min=Math.min(...u),f.max=Math.max(...m)),r.push(f)}return r}(r,p,s.aggregate,g,!0===n.range):po(r,p,n.aggregate?.(e)??s.aggregate,g,!0===n.range):"history"===a&&i&&null!==i.v&&i.t<g&&(r=[...r,{t:g,v:i.v}]),{index:t,entity:e,points:r,color:ze(o.color??zo[t%zo.length]),curve:o.curve??f,dash:!0===o.dash}});return{status:m.status,error:m.error,range:l,period:o,source:a,series:y,live:i.live,back:i.back,zone:r,group:s}}nt("en",{period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months"});const Oo=(e,t,n)=>1===e?t:n;function No(e,t,n,o,a){const r=(e,t)=>at(a,e,t);if(e.calendar&&n<2)return r({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[e.calendar][n]);if(!e.calendar&&0===n){const t=e.last;return r({hour:Oo(t,"period_last_hour","period_last_hours"),day:Oo(t,"period_last_day","period_last_days"),week:Oo(t,"period_last_week_rolling","period_last_weeks"),month:Oo(t,"period_last_month_rolling","period_last_months")}[e.unit],{n:t})}const i={timeZone:o.timeZone},s=Nn(t.start,o.timeZone).year===Nn(Date.now(),o.timeZone).year;let l;"year"===e.calendar?i.year="numeric":"month"===e.calendar?Object.assign(i,{month:"long",year:"numeric"}):(Object.assign(i,{day:"numeric",month:"short"}),s||(i.year="numeric"),"day"===e.calendar&&(i.weekday="short"),e.calendar||"hour"!==e.unit&&"day"!==e.unit||Object.assign(i,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(a?.locale?.language??a?.language??"en",i)}catch{l=new Intl.DateTimeFormat("en",i)}const c=e.calendar?t.end-1:t.end;return"day"===e.calendar||"month"===e.calendar||"year"===e.calendar?l.format(t.start):l.formatRange(t.start,c)}function Uo(e,t,n=Date.now()){const{period:o}=e;if(!o.navigate)return W;const a=to(t.host,o),r=e=>n=>{n.stopPropagation(),no(t.host,o,e),t.requestUpdate()},i=No(o,e.range,e.back,e.zone,t.hass);let s="";if(0!==a){const a=Qn(o,n,e.zone);s=No(o,a,a.back,e.zone,t.hass)}const l=e=>R`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${e}></path></svg>`;return R`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${at(t.hass,"period_previous")} @click=${r(a+1)}>
      ${l("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")}
    </button>
    <span class="period-label" aria-live="polite">${i}</span>
    <button
      class="period-step period-next"
      aria-label=${at(t.hass,"period_next")}
      ?disabled=${0===e.back}
      @click=${r(a-1)}
    >
      ${l("M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")}
    </button>
    ${0!==a?R`<button
            class="period-return"
            aria-label=${at(t.hass,"period_return",{label:s})}
            @click=${r(0)}
          >
            ${s}
          </button>`:W}
  </div>`}const Fo=r`
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
`;function Po(e){!function(e){xo.get(e)?.pause()}(e)}function Do(e,t){const{show:n}=t.config;return n.name||n.value?R`<div class="series-header">
    ${e.series.map(e=>R`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
          <span class="swatch" style="background:${e.color}"></span>
          ${n.name?R`<span class="series-name">${e.entity.name}</span>`:W}
          ${n.value?R`<span class="series-value">${e.entity.display}</span>`:W}
        </div>`)}
  </div>`:W}function Ho(e,t){return"loading"===e.status?R`<div class="chart-message">${at(t.hass,"chart_loading")}</div>`:"error"===e.status?R`<div class="chart-message error">
      ${at(t.hass,"chart_error",{error:e.error??""})}
    </div>`:e.series.every(e=>e.points.every(e=>null===e.v))?R`<div class="chart-message">${at(t.hass,"chart_no_data")}</div>`:void 0}const Bo=r`
  ${Fo}
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
`;function Io(e,t,n){const{locale:o,grouping:a}=function(e){const t=e?.locale?.language??"en";switch(e?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:t,grouping:!0}}}(n),r=new Intl.NumberFormat(o,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:a});let i=r.format(0===e?0:e);return 0===Number(e.toFixed(t))&&(i=r.format(0)),i}function Ro(e,t){return t?`${e} ${t}`:e}const Vo=new WeakMap;function qo(e){let t=Vo.get(e.host);if(!t){const n={width:e.host.clientWidth||400};t=n,Vo.set(e.host,n),"undefined"!=typeof ResizeObserver&&(n.observer=new ResizeObserver(t=>{const o=Math.round(t[t.length-1].contentRect.width);Math.round(o/70)!==Math.round(n.width/70)&&(n.width=o,e.requestUpdate())}),n.observer.observe(e.host))}return t.width}function Wo(e){Vo.get(e)?.observer?.disconnect(),Vo.delete(e)}function Zo(e){const t=ln(e.raw);return Math.max(0,qo(e)-32-(t.y&&"outside"===t.labels?40:0))}function Yo(e,t,n){const o=ln(e.raw),a=un(n,o,4),r=Math.max(2,Math.min(8,Math.floor(Zo(e)/70))),{unit:i,ticks:s}=xn(t,r,vn($n(e.hass)));return{options:o,value:a,times:s,unit:i,range:t,scales:{x:Kt([t.start,t.end],[0,Eo]),y:Kt(a.domain,[Co,0]),domain:a.domain}}}const Go=e=>Math.round(1e4*e)/100+"%";function Xo({axes:e,ctx:t,content:n,label:o,defs:a=W,overlay:r=W,hover:i,right:s,xLabel:l,yLabel:c}){const{options:d}=e,h="outside"===d.labels,u=d.y&&e.value.ticks.length>0,m=d.x&&e.times.length>0,p=u?function(e,t,n){const{scales:o,value:a}=e;return a.ticks.map(e=>{const r=o.y(e)/Co;return R`<span class="axis-label ${r<.08?"top":r>.92?"bottom":""}" style="top:${Go(r)}"
      >${n?n(e):Io(e,a.decimals,t.hass)}</span
    >`})}(e,t,c):[],f=u?R`<div class="y-axis">${p}</div>`:W,g=m?R`<div class="x-axis">${function(e,t,n){const{scales:o,range:a}=e,r=vn($n(t.hass));return e.times.map(i=>{const s=o.x(i)/Eo;return R`<span class="axis-label ${s<.05?"start":s>.95?"end":""}" style="left:${Go(s)}"
      >${n?n(i):e.label?e.label(i):En(i,e.unit,a.end-a.start,t.hass,r)}</span
    >`})}(e,t,l)}</div>`:W,y=u?R`<span class="axis-sizer" aria-hidden="true"
        >${e.value.ticks.map(n=>c?c(n):Io(n,e.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:W,v=s&&d.y&&s.value.ticks.length>0?s:void 0,_=v?R`<span class="axis-sizer" aria-hidden="true"
        >${v.value.ticks.map(e=>Io(e,v.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:W,b=v?R`<div class="y-axis right">${h?_:W}${function(e,t){return e.value.ticks.map(n=>{const o=e.y(n)/Co;return R`<span class="axis-label ${o<.08?"top":o>.92?"bottom":""}" style="top:${Go(o)}"
      >${Io(n,e.value.decimals,t.hass)}</span
    >`})}(v,t)}</div>`:W;return R`<div
    class="plot-wrap axes-${d.labels} ${u?"has-y":""} ${m?"has-x":""} ${v?"has-right":""}"
  >
    ${h&&u?R`<div class="y-axis">${y}${p}</div>`:W}
    <div
      class="plot-area ${i?"hoverable":""}"
      @pointerdown=${i?.move}
      @pointermove=${i?.move}
      @pointerleave=${i?.leave}
      @pointercancel=${i?.leave}
    >
      ${function(e,t,n=W,o=W){return R`<svg
    class="plot"
    viewBox="0 0 ${Eo} ${Co}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${t}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${Eo} height=${204}></rect>
      </clipPath>
      ${n}
    </defs>
    ${o}
    <g clip-path="url(#cd-draw-in)">${e}</g>
  </svg>`}(n,o,a,function(e){const{options:t,scales:n}=e;return V`<g class="grid">
    ${t.horizontal?e.value.ticks.map(e=>V`<line x1="0" x2=${Eo} y1=${n.y(e)} y2=${n.y(e)}></line>`):W}
    ${t.vertical?e.times.map(e=>V`<line x1=${n.x(e)} x2=${n.x(e)} y1="0" y2=${Co}></line>`):W}
  </g>`}(e))} ${h?W:R`${f}${b}${g}`}
      ${r}
    </div>
    ${h?R`${b}${g}`:W}
  </div>`}const Jo=r`
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
`,Ko=["above","over","hidden"];function Qo(e){if(void 0!==e.compact&&"boolean"!=typeof e.compact)throw new Error('"compact" must be true or false');if(void 0!==e.header&&!Ko.includes(e.header))throw new Error(`"header" must be one of: ${Ko.join(", ")}`)}function ea(e){return{compact:!0===e.compact,header:e.header??"above"}}function ta(e,t,n){return R`<div class="frame ${e.compact?"compact":""}">
    ${"above"===e.header?t:W}${n}
  </div>`}function na(e){return e===W?W:R`<div class="header-over" @pointerdown=${e=>e.stopPropagation()}>${e}</div>`}const oa=r`
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
`,aa=["none","normal","percent"];function ra(e){const t=e.stack;if(void 0!==t&&!aa.includes(t))throw new Error(`"stack" must be one of: ${aa.join(", ")}`)}function ia(e,t){let n=0,o=e.length;for(;n<o;){const a=n+o>>1;e[a].t<=t?n=a+1:o=a}return 0===n?null:e[n-1].v}function sa(e,t){const n=e[0]?.length??0,o=e.map(()=>[]);for(let a=0;a<n;a++){let n=1;if("percent"===t){const t=e.reduce((e,t)=>e+Math.abs(t[a]??0),0);n=t>0?100/t:0}let r=0,i=0;e.forEach((e,t)=>{const s=e[a];if(null==s)return void o[t].push(null);const l=s*n;l>=0?(o[t].push([r,r+l]),r+=l):(o[t].push([i,i+l]),i+=l)})}return o}function la(e){const t=e[0]?.length??0,n=[];for(let o=0;o<t;o++){let t=null;for(const n of e)null!==n[o]&&void 0!==n[o]&&(t=(t??0)+n[o]);n.push(t)}return n}function ca(e){let t=0,n=0;for(const o of e)for(const e of o)e&&(t=Math.min(t,e[0],e[1]),n=Math.max(n,e[0],e[1]));return[t,n]}function da(e,t){const n=e*t;return n+190<=t?"right":n>=190?"left":e>.5?"pin-left":"pin-right"}function ha(e,t){if(0===e.length)return-1;let n=0,o=e.length-1;for(;n<o;){const a=n+o>>1;e[a].t<t?n=a+1:o=a}return n>0&&t-e[n-1].t<=e[n].t-t?n-1:n}const ua=new WeakMap;function ma(e){return ua.get(e)?.t}function pa(e){const t=ua.get(e);void 0!==t?.timer&&clearTimeout(t.timer),ua.delete(e)}function fa(e){return!1!==e.tooltip}function ga(e){const t=e.tooltip;if(void 0!==t&&"boolean"!=typeof t)throw new Error('"tooltip" must be true or false')}function ya(e,t,n){const o=function(e){let t=ua.get(e);return t||(t={},ua.set(e,t)),t}(e.host),a=t=>{t!==o.t&&(o.t=t,e.requestUpdate())},r=()=>{void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0};return{move(e){r();const o=e.currentTarget.getBoundingClientRect(),i=o.width>0?Math.min(1,Math.max(0,(e.clientX-o.left)/o.width)):0;a(function(e,t){let n;for(const o of e){const e=ha(o,t);if(e<0)continue;const a=o[e].t;(void 0===n||Math.abs(a-t)<Math.abs(n-t))&&(n=a)}return n}(n,t.start+i*(t.end-t.start)))},leave(e){r(),"touch"===e.pointerType||"pen"===e.pointerType?o.timer=setTimeout(()=>{o.timer=void 0,a(void 0)},3e3):a(void 0)}}}const va=e=>Math.round(1e4*e)/100+"%";function _a(e){const t=new Set(e.map(e=>e.entity.unit));return 1===t.size?[...t][0]:""}function ba(e,t,n,o){return R`<div class="tooltip-row tooltip-total">
    <span class="swatch"></span>
    <span class="tooltip-name">${at(e.hass,"chart_total")}</span>
    <span class="tooltip-value">${null===t?"—":Ro(Io(t,o,e.hass),n)}</span>
  </div>`}function xa(e,t,n,o,a,r={}){if(void 0===o)return W;const i=n.x(o)/Eo;if(!(i>=0&&i<=1))return W;const s=da(i,a),l=t.map(e=>{const t=ha(e.points,o);return{s:e,p:t<0?void 0:e.points[t]}});return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${va(i)}"></div>
    ${l.map(({s:e,p:t})=>{if(!t||null===t.v)return W;const o=r.dotY?r.dotY(e,t):n.y(t.v);if(null===o)return W;const a=o/Co;return a>=0&&a<=1?R`<span
        class="hover-dot"
        style="left:${va(n.x(t.t)/Eo)};top:${va(a)};background:${e.color}"
      ></span>`:W})}
    <div class="tooltip ${s}" style=${s.startsWith("pin")?"":`left:${va(i)}`}>
      <div class="tooltip-time">${r.heading?r.heading(o):Sn(o,e.hass)}</div>
      ${l.map(({s:t,p:n})=>R`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${r.text?r.text(t,n):function(e,t,n){return e&&null!==e.v?Ro(Io(e.v,t.entity.decimals,n.hass),t.entity.unit):"—"}(n,t,e)}</span>
          </div>`)}
      ${r.footer?r.footer(l):W}
    </div>
  </div>`}nt("en",{chart_total:"Total"});const $a=r`
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
`;function wa(e,t,n){return{select:{mode:"dropdown",options:n.map(n=>({value:n,label:at(e,`editor_${t}_${n}`)}))}}}nt("en",{editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)"});const ka=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"}];function Ma(e){const t=e?.period;return`${t?.calendar?"calendar":"rolling"}${e?.group_by?"|grouped":""}`}function Aa(e,t){const[n,o]=Ma(t).split("|"),a="calendar"===n;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:wa(e,"period_calendar",["rolling",...qn])},...a?[{name:"period_until",selector:wa(e,"period_until",Wn)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:wa(e,"period_unit",Vn)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:wa(e,"source",Lo)},{type:"grid",name:"",schema:[{name:"group_by",selector:wa(e,"group_by",["none",...ho])},...o?[{name:"aggregate",selector:wa(e,"aggregate",uo)}]:[]]}]}nt("en",{editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden"});const Sa=[{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];function Ea(e){return[{type:"grid",name:"",schema:[{name:"header",selector:wa(e,"header",Ko)},{name:"compact",selector:{boolean:{}}}]}]}const Ca=[{name:"x_axis",path:["x_axis"],default:en},{name:"y_axis",path:["y_axis"],default:tn},{name:"axis_labels",path:["axis_labels"],default:nn},{name:"grid_horizontal",path:["gridlines","horizontal"],default:on},{name:"grid_vertical",path:["gridlines","vertical"],default:an},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function za(e){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:wa(e,"axis_labels",Qt)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const La=new Map;function Ta(e,t,n){const o=`${e}|${ot(t)}`;let a=La.get(o);return a||(a=n(),La.set(o,a)),a}function ja(e,t,n,o){return R`<ha-form
    data-section=${t}
    .hass=${e.hass}
    .data=${It(e.config,o)}
    .schema=${n}
    .computeLabel=${t=>at(e.hass,`editor_${t.name}`)}
    @value-changed=${t=>{t.stopPropagation();const n=Rt(e.config,o,t.detail?.value??{});n!==e.config&&e.commit(n)}}
  ></ha-form>`}const Oa=[...ka,{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"line_width",path:["line_width"],default:2.5},{name:"dots",path:["dots"],default:!1},...Ca,...Sa];function Na(e,t){if(!e)return t;const[n,o]=e,a={};return void 0===t.y_min&&n>=0&&n<=o/2&&(a.y_min=0),void 0===t.y_max&&o<=0&&o>=n/2&&(a.y_max=0),Object.keys(a).length?{...t,...a}:t}function Ua(e){const t=[];return e.forEach((n,o)=>{o>0&&t.push([n[0],e[o-1][1]]),t.push(n)}),t}function Fa(e,t,n){if(e.length<2)return"";const[o,a,r]="step"===n?[Ua(e),Ua(t),"straight"]:[e,t,n];return`${Ao(o,r)}${Ao([...a].reverse(),r).replace(/^M/,"L")}Z`}function Pa(e,t){return"step"===t?Ao(Ua(e),"straight"):Ao(e,t)}function Da(e,t,n,o,a={}){const r=ct(e.entity.config,o),i=e.entity.config.line_width??o.line_width,s=n.y(Math.min(Math.max(0,n.domain[0]),n.domain[1])),l=function(e){const t=e.entity.config.negative_color;return"string"==typeof t&&t.trim()?ze(t.trim()):e.color}(e),c=`cd-area-${e.index}`,d=`cd-area-line-${e.index}`,h=l!==e.color,u=V`${function(e,t,n,o,a=.42,r=.05){const i=Math.min(1,Math.max(0,o/Co));return V`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Co}>
    <stop offset="0" stop-color=${t} stop-opacity=${a}></stop>
    <stop offset=${i} stop-color=${t} stop-opacity=${r}></stop>
    <stop offset=${i} stop-color=${n} stop-opacity=${r}></stop>
    <stop offset="1" stop-color=${n} stop-opacity=${a}></stop>
  </linearGradient>`}(c,e.color,l,s,a.stacked?.6:.42,a.stacked?.35:.05)}
    ${h?function(e,t,n,o){const a=Math.min(1,Math.max(0,o/Co));return V`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Co}>
    <stop offset=${a} stop-color=${t}></stop>
    <stop offset=${a} stop-color=${n}></stop>
  </linearGradient>`}(d,e.color,l,s):W}`,m=[],p=[],f=[];if(a.layers){const o=a.layers;let r=[];const i=()=>{if(r.length){const a=r.map(e=>[n.x(t[e].t),n.y(o[e][1])]),i=r.map(e=>[n.x(t[e].t),n.y(o[e][0])]);m.push(Fa(a,i,e.curve)),p.push(Pa(a,e.curve))}r=[]};for(let e=0;e<t.length;e++)o[e]?r.push(e):i();i()}else for(const v of So(t)){const t=v.map(e=>[n.x(e.t),n.y(e.v)]);m.push(Fa(t,t.map(([e])=>[e,s]),e.curve)),p.push(Pa(t,e.curve))}if(r.dots){const e=a.range;t.forEach((t,o)=>{if(null===t.v||e&&(t.t===e.start||t.t===e.end))return;const r=a.layers?a.layers[o]?.[1]:t.v;void 0!==r&&f.push([n.x(t.t),n.y(r)])})}const g=i??2,y=h?`url(#${d})`:e.color;return{defs:u,body:V`<g class="series" data-series=${e.index}>
    <path class="fill" d=${m.join("")} fill="url(#${c})" stroke="none"></path>
    <path class="line ${e.dash?"dashed":""}" d=${p.join("")} fill="none" stroke=${y}
      style="stroke-width:${g}px"></path>
    ${f.length>0&&f.length<=200?V`<path class="dots" d=${ht(f)} fill="none" stroke=${y}
            style="stroke-width:${ut(g)}px"></path>`:W}
  </g>`}}nt("en",{editor_style_area:"Area",editor_stack:"Stack",editor_stack_none:"Don't stack",editor_stack_normal:"On top of each other",editor_stack_percent:"To 100 %",editor_negative_color:"Colour below zero"});const Ha=[...ka,{name:"curve",path:["curve"],default:"smooth"},{name:"stack",path:["stack"],default:"none"},{name:"line_width",path:["line_width"],default:2},{name:"dots",path:["dots"],default:!1},...Ca,...Sa];const Ba={name:"negative_color",path:["negative_color"]},Ia=new Map;const Ra=r`
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
`,Va={layout:"chart",group:"history",height:240,styles:r`
    ${Bo}
    ${Jo}
    ${$a}
    ${oa}
    ${Ra}
  `,thumbnail:()=>V`
    <defs>
      <linearGradient id="cd-thumb-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.5" />
        <stop offset="1" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10 V36 H4 Z" fill="url(#cd-thumb-area)" />
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){To(e),sn(e),ga(e),ft(e),Qo(e),ra(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t.negative_color;if(void 0!==e&&"string"!=typeof e)throw new Error(`"negative_color" of ${t.entity} must be a colour`)}}(e)},editor:function(e){const t=Ta(`area|${Ma(e.config)}`,e.hass,()=>[...Aa(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:wa(e.hass,"curve",wo)},{name:"stack",selector:wa(e.hass,"stack",aa)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:kt},{name:"dots",selector:{boolean:{}}}]},...za(e.hass),...Ea(e.hass)]);return ja(e,"chart",t,Ha)},entityFields:function(e,t){const n=!0===t.dots;let o=Ia.get(n);return o||(o=[...At(n),Ba],Ia.set(n,o)),{schema:Ta("area-entity",e,()=>[...jt(e),{name:"negative_color",selector:{text:{}}}]),fields:o}},disconnect(e){Po(e),Wo(e),pa(e)},render:function(e){const t=jo(e),n=Uo(t,e),o=Do(t,e),a=n===W&&o===W?W:R`${n}${o}`,r=Ho(t,e),i=ea(e.raw);if(r)return ta("over"===i.header?{...i,header:"above"}:i,a,r);const s=e.raw.stack??"none",l=t.series.map(e=>({...e,points:Cn(e.points,500)}));let c,d,h=l;const u={};if("none"===s){const n=Jt(l.map(e=>e.points));d=Yo({...e,raw:Na(n,e.raw)},t.range,n);const o=d.scales,a=dt(l,t=>ct(t.entity.config,e.raw).onTop);c=a.map(n=>Da(n,n.points,o,e.raw,{range:t.range}))}else{const n=function(e){const t=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t);return{times:t,values:e.map(e=>t.map(t=>ia(e,t)))}}(l.map(e=>e.points)),o=sa(n.values,s),a=la(n.values);h=l.map((e,t)=>({...e,points:n.times.map((e,o)=>({t:e,v:n.values[t][o]}))}));const r=ca(o),i="percent"===s?{y_min:r[0]<0?-100:0,y_max:r[1]>0?100:0}:{};d=Yo({...e,raw:Na(r,{...i,...e.raw})},t.range,r);const m=d.scales;c=h.map((n,a)=>Da(n,n.points,m,e.raw,{layers:o[a],stacked:!0,range:t.range})).reverse();const p=new Map;h.forEach(e=>e.points.forEach((e,t)=>p.set(e,t))),u.dotY=(e,t)=>{const n=o[e.index][p.get(t)??-1];return n?m.y(n[1]):null};const f=_a(h),g=Math.max(...h.map(e=>e.entity.decimals));u.footer=t=>{const n=t.length?p.get(t[0].p):void 0;return ba(e,void 0===n?null:a[n],f,g)},"percent"===s&&(u.text=(t,n)=>{const a=n?o[t.index][p.get(n)??-1]:null;if(!n||null===n.v||!a)return"—";const r=Math.round(Math.abs(a[1]-a[0]));return`${Ro(Io(n.v,t.entity.decimals,e.hass),t.entity.unit)} · ${r} %`})}const m=fa(e.raw),p=at(e.hass,"chart_aria",{style:at(e.hass,"editor_style_area"),names:t.series.map(e=>e.entity.name).join(", ")});return ta(i,a,Xo({axes:d,ctx:e,content:V`${c.map(e=>e.body)}`,defs:V`${c.map(e=>e.defs)}`,label:p,overlay:R`${"over"===i.header?na(a):W}
      ${m?xa(e,h,d.scales,ma(e.host),Zo(e),u):W}`,hover:m?ya(e,t.range,h.map(e=>e.points)):void 0}))}};function qa(e,t,n){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||n<=t?0:Math.min(1,Math.max(0,(e-t)/(n-t)))}function Wa(e,t,n){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||n<=t)return[0,0];const o=qa(e,t,n);if(t<0&&n>0){const e=qa(0,t,n);return o<e?[o,e]:[e,o]}return[0,o]}const Za=new Set;function Ya(e){return(e.available?e.band.icon:void 0)??e.config.icon??(e.stateObj?void 0:"mdi:help-circle-outline")}function Ga(e){return null==e||""===e}function Xa(e){if(void 0===e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function Ja(e,t,n="limit"){if(Ga(e))return null;if("number"==typeof e)return Number.isFinite(e)?e:null;const o=String(e),a=Xa(t.states[o]?.state);if(null===a&&!Za.has(o)){Za.add(o);const e="limit"===n?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${n} entity "${o}" is missing or not numeric; ${e}.`)}return a}function Ka(e,t){if(e.every(e=>"number"==typeof e.from))return e;const n=[];for(const o of e){const e=t?Ja(o.from,t,"band start"):null;null!==e&&n.push({...o,from:e})}return n.length?n.sort((e,t)=>e.from-t.from):qe}function Qa(e,t){const n=e.entity,o=t.states[n],a=e.name??o?.attributes?.friendly_name??n,r=e.unit??(e.attribute?"":o?.attributes?.unit_of_measurement??""),i=function(e,t){if(t)return e.attribute?t.attributes?.[e.attribute]:t.state}(e,o),s=function(e){return"number"==typeof e?Number.isFinite(e)?e:null:"string"==typeof e?Xa(e):null}(i),l=null!==s;let c;c=Ga(e.decimals)?e.attribute?l?function(e){const t=String(e),n=t.indexOf(".");return-1===n||/e/i.test(t)?0:Math.min(2,t.length-n-1)}(i):0:function(e,t,n){const o=e?.entities?.[t]?.display_precision;return"number"==typeof o?o:"%"===n?0:1}(t,n,r):e.decimals;const d=Ja(e.min,t)??0,h=Ja(e.max,t)??100,u=Ja(e.target,t),m=Ka(e.severity,t);let p,f="";return l?(f=Io(s,c,t),p=Ro(f,r)):p=o?function(e,t,n,o){const a=e.attribute;return a&&"string"==typeof n&&""!==n.trim()?o.formatEntityAttributeValue?.(t,a)??n:o.formatEntityState?.(t)??at(o,"unavailable")}(e,o,i,t):at(t,"entity_not_found"),{entityId:n,config:e,stateObj:o,available:l,value:s,min:d,max:h,target:u,name:a,unit:r,decimals:c,position:l?qa(s,d,h):0,span:l?Wa(s,d,h):[0,0],targetPosition:null===u?null:qa(u,d,h),band:je(l?s:-1/0,m),bands:m,valueText:f,display:p,label:`${a}, ${p}`}}function er(e,t){if(!e.include)return[];const n=new Set(e.entities.map(e=>e.entity));return function(e,t,n){const o=Re.get(e);if(o&&o.exclude===t&&o.states===n.states&&o.entities===n.entities&&o.devices===n.devices&&o.areas===n.areas)return o.ids;const a=[];for(const i of Object.values(n.states)){if(!Pe(i)||n.entities?.[i.entity_id]?.hidden)continue;const o=De(i,n);if(!Be(e,o)||Ie(t,o))continue;const r=i.attributes?.friendly_name;a.push({id:i.entity_id,name:"string"==typeof r&&r?r:i.entity_id})}a.sort((e,t)=>e.name.localeCompare(t.name)||(e.id<t.id?-1:1));const r=a.map(e=>e.id);return Re.set(e,{exclude:t,states:n.states,entities:n.entities,devices:n.devices,areas:n.areas,ids:r}),r}(e.include,e.exclude,t).filter(e=>!n.has(e))}const tr={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:r`
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
  `,render(e,{show:t,hass:n}){const o=t.value||!e.available,a=R`${t.name?R`<span class="name">${e.name}</span>`:W}${o?R`<span class="value">${e.display}</span>`:W}`;return R`
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${e.stateObj}
              .icon=${Ya(e)}
            ></ha-state-icon>`:W}
      <div class="track">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:W}
        <div class="text">${a}</div>
        ${e.available?R`<div class="text on-fill ${Te(e.band.color)}" aria-hidden="true">${a}</div>`:W}
      </div>
    `}};function nr(e,t){const n=e.reduce((e,t)=>e+t.w,0);let o,a=0;for(const r of e){const e=(a+r.w/2)/n;if(a+=r.w,t<=e)return o?o.v+(r.v-o.v)*(t-o.at)/(e-o.at):r.v;o={at:e,v:r.v}}return e[e.length-1].v}const or=["tukey","range"];function ar(e,t){if(e.length<=t)return[...e];const n=[];for(let o=0;o<t;o++)n.push(e[Math.floor(o*e.length/t)]);return n}const rr=e=>"number"==typeof e&&Number.isFinite(e);function ir(e){for(const t of["x_min","x_max"])if(void 0!==e[t]&&!rr(e[t]))throw new Error(`"${t}" must be a number`);if(rr(e.x_min)&&rr(e.x_max)&&e.x_min>=e.x_max)throw new Error('"x_min" must be below "x_max"')}nt("en",{editor_x_min:"Lowest value across",editor_x_max:"Highest value across"});const sr=[{name:"x_min",path:["x_min"]},{name:"x_max",path:["x_max"]}],lr=[{type:"grid",name:"",schema:[{name:"x_min",selector:{number:{mode:"box",step:"any"}}},{name:"x_max",selector:{number:{mode:"box",step:"any"}}}]}];function cr(e){return{min:rr(e.x_min)?e.x_min:void 0,max:rr(e.x_max)?e.x_max:void 0}}function dr(e,t,n,o={}){const a=ln(e.raw),r=Math.max(2,Math.min(8,Math.round(qo(e)/70))),i=un(t,o.x??{},r),s=un(n,{min:a.min??o.yFloor,max:a.max},4);return{options:a,value:s,times:i.ticks,unit:"minute",range:{start:i.domain[0],end:i.domain[1]},scales:{x:Kt(i.domain,[0,Eo]),y:Kt(s.domain,[Co,0]),domain:s.domain}}}function hr(e){const[t,n]=e.times;return void 0===t||void 0===n?0:Math.max(0,-Math.floor(Math.log10(Math.abs(n-t))+1e-9))}const ur=new WeakMap;function mr(e){return ur.get(e)?.i}function pr(e){const t=ur.get(e);void 0!==t?.timer&&clearTimeout(t.timer),ur.delete(e)}function fr(e,t){const n=function(e){let t=ur.get(e);return t||(t={},ur.set(e,t)),t}(e.host),o=t=>{t!==n.i&&(n.i=t,e.requestUpdate())},a=()=>{void 0!==n.timer&&clearTimeout(n.timer),n.timer=void 0};return{move(e){a();const n=e.currentTarget.getBoundingClientRect(),r=n.width>0?Math.min(1,Math.max(0,(e.clientX-n.left)/n.width)):0,i=n.height>0?Math.min(1,Math.max(0,(e.clientY-n.top)/n.height)):0;o(t(r,i,n.width,n.height))},leave(e){a(),"touch"===e.pointerType||"pen"===e.pointerType?n.timer=setTimeout(()=>{n.timer=void 0,o(void 0)},3e3):o(void 0)}}}const gr=e=>Math.round(1e4*e)/100+"%";function yr(e){const{x:t,y:n,plotWidth:o,title:a,rows:r,dot:i,band:s}=e;if(!(t>=0&&t<=1))return W;const l=da(t,o);return R`<div class="hover-layer" aria-hidden="true">
    ${s?R`<div class="pick-band" style="left:${gr(s[0])};width:${gr(s[1]-s[0])}"></div>`:W}
    ${i&&n>=0&&n<=1?R`<span class="hover-dot" style="left:${gr(t)};top:${gr(n)};background:${i}"></span>`:W}
    <div class="tooltip ${l}" style=${l.startsWith("pin")?"":`left:${gr(t)}`}>
      <div class="tooltip-time">${a}</div>
      ${r.map(e=>R`<div class="tooltip-row">
            ${e.color?R`<span class="swatch" style="background:${e.color}"></span>`:W}
            <span class="tooltip-name">${e.name}</span>
            <span class="tooltip-value">${e.value}</span>
          </div>`)}
    </div>
  </div>`}const vr=r`
  .pick-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
`,_r=["vertical","horizontal"],br=.72;function xr(e,t){const n=e.bounds.length>1,o=n?e.bounds.slice(0,-1).map((t,n)=>[t,e.bounds[n+1]]):[[e.range.start,e.range.end]],a=[];return o.forEach(([o,r],i)=>{const s=Math.min(r,e.until);e.series.forEach((r,l)=>{let c,d;"statistics"===e.source?({samples:c,extremes:d}=function(e,t,n){const o=[];let a=1/0,r=-1/0;for(const i of e)i.t<t||i.t>=n||i.carried||null===i.v||(o.push({v:i.v,w:1}),a=Math.min(a,i.v,"number"==typeof i.min?i.min:i.v),r=Math.max(r,i.v,"number"==typeof i.max?i.max:i.v));return{samples:o,extremes:o.length?[a,r]:void 0}}(r.points,o,s)):c=function(e,t,n){const o=[];if(n<=t)return o;for(let a=0;a<e.length;a++){const r=e[a];if(r.t>=n)break;const i=a+1<e.length?e[a+1].t:1/0,s=Math.max(r.t,t),l=Math.min(i,n);l<=s||null===r.v||o.push({v:r.v,w:l-s})}return o}(r.points,o,s);const h=function(e,t,n){const o=e.filter(e=>e.w>0&&Number.isFinite(e.v)).sort((e,t)=>e.v-t.v);if(0===o.length)return;const a=nr(o,.25),r=nr(o,.5),i=nr(o,.75),s=o.reduce((e,t)=>e+t.w,0),l=o.reduce((e,t)=>e+t.v*t.w,0)/s,c=Math.min(o[0].v,n?.[0]??1/0),d=Math.max(o[o.length-1].v,n?.[1]??-1/0),h={count:o.length,q1:a,median:r,q3:i,mean:l,min:c,max:d};if("range"===t)return{...h,low:c,high:d,outliers:[]};const u=1.5*(i-a),m=o.filter(e=>e.v>=a-u&&e.v<=i+u),p=Math.min(m[0]?.v??a,a),f=Math.max(m[m.length-1]?.v??i,i);let g=[...new Set(o.filter(e=>e.v<p||e.v>f).map(e=>e.v))];return g.length>60&&(g=g.map(e=>({v:e,d:e<p?p-e:e-f})).sort((e,t)=>t.d-e.d).slice(0,60).map(e=>e.v).sort((e,t)=>e-t)),{...h,low:p,high:f,outliers:g}}(c,t,d);h&&a.push({category:n?i:l,slot:n?l:0,series:r,stats:h,readings:ar(c.map(e=>e.v),120)})})}),{boxes:a,categories:n?o.length:e.series.length,slots:n?e.series.length:1}}function $r(e,t){const n=Math.max(1,Math.ceil(e/Math.max(1,t))),o=[];for(let a=0;a<e;a+=n)o.push(a);return o}nt("en",{editor_style_box:"Box plot",box_aria:"Box plot of {names}",box_highest:"Highest",box_upper_quartile:"Upper quartile",box_median:"Median",box_lower_quartile:"Lower quartile",box_lowest:"Lowest",box_mean:"Average",box_count:"Readings",box_outliers:"Outliers",editor_orientation:"Boxes",editor_orientation_vertical:"Upright",editor_orientation_horizontal:"On their side",editor_whiskers:"Whiskers reach",editor_whiskers_tukey:"1.5 × box height (outliers as dots)",editor_whiskers_range:"The lowest and highest",editor_readings:"Show each reading",editor_box_color:"Box colour"});const wr=new Map;function kr(e,t,n){const o=br/t;return{centre:e.category-.36+o*(e.slot+.5),half:Math.min(.4*o,n)}}function Mr(e,t,n,o){const{stats:a,series:r}=e,{centre:i,half:s}=t,l=(e,t,n)=>V`<line class=${n} x1=${e[0]} y1=${e[1]} x2=${t[0]} y2=${t[1]}></line>`,[c,d]=n(i-s,a.q1),[h,u]=n(i+s,a.q3),m=o&&e.readings.length?V`<path class="readings" d=${ht(e.readings.map((e,t)=>n(i+function(e){const t=43758.5453*Math.sin(12.9898*(e+1));return 2*(t-Math.floor(t))-1}(t)*s*.8,e)))}></path>`:W;return V`<g class="box" data-series=${r.index} style="--box-color:${r.color}">
    ${l(n(i,a.low),n(i,a.q1),"whisker")}
    ${l(n(i,a.q3),n(i,a.high),"whisker")}
    ${l(n(i-s/2,a.low),n(i+s/2,a.low),"cap")}
    ${l(n(i-s/2,a.high),n(i+s/2,a.high),"cap")}
    <rect
      class="body"
      x=${Math.min(c,h)}
      y=${Math.min(d,u)}
      width=${Math.abs(h-c)}
      height=${Math.abs(u-d)}
    ></rect>
    ${m}
    ${l(n(i-s,a.median),n(i+s,a.median),"median")}
    ${a.outliers.length?V`<path class="outliers" d=${ht(a.outliers.map(e=>n(i,e)))}></path>`:W}
  </g>`}const Ar=[...ka,{name:"orientation",path:["orientation"],default:"vertical"},{name:"whiskers",path:["whiskers"],default:"tukey"},{name:"readings",path:["readings"],default:!1},...Ca,...Sa];const Sr=[{name:"box_color",selector:{text:{}}}],Er=[{name:"box_color",path:["color"]}],Cr={layout:"chart",group:"distribution",height:240,styles:r`
    ${Bo}
    ${Jo}
    ${$a}
    ${oa}
    ${vr}
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
  `,thumbnail:()=>V`
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
    </g>`,validate:function(e){To(e),sn(e),ga(e),Qo(e);const t=e;if(void 0!==t.orientation&&!_r.includes(t.orientation))throw new Error(`"orientation" must be one of: ${_r.join(", ")}`);if(void 0!==t.whiskers&&!or.includes(t.whiskers))throw new Error(`"whiskers" must be one of: ${or.join(", ")}`);if(void 0!==t.readings&&"boolean"!=typeof t.readings)throw new Error('"readings" must be true or false')},editor:function(e){const t={...e.config,group_by:void 0},n=Ta(`box|${Ma(t)}`,e.hass,()=>[...Aa(e.hass,t),{type:"grid",name:"",schema:[{name:"orientation",selector:wa(e.hass,"orientation",_r)},{name:"whiskers",selector:wa(e.hass,"whiskers",or)}]},{name:"readings",selector:{boolean:{}}},...za(e.hass),...Ea(e.hass)]);return ja(e,"chart",n,Ar)},entityFields:()=>({schema:Sr,fields:Er}),disconnect(e){Po(e),Wo(e),pr(e)},render(e){const t=function(e,t=Date.now()){const n=Jn(e.raw.period),o=e.raw.source??"history",a=Rn(e.hass),r=Qn(n,t,a,n.navigate?to(e.host,n):0),i=mo(e.raw),s={start:i?Dn(i.unit,r.start,a):r.start,end:r.end},l=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),c="statistics"===o?{period:i?"hour"===i.unit?"5minute":"hour":so(s),types:["mean","min","max"],value:"mean"}:void 0,d=$o(e.host,e.requestUpdate).get(e.hass,l,s,o,{live:r.live,statistics:c}),h=e.items.map((e,t)=>{const n=e.config;return{index:t,entity:e,points:d.data.get(co(l[t]))??[],color:ze(n.color??zo[t%zo.length]),curve:"straight",dash:!1}});return{status:d.status,error:d.error,range:s,period:n,source:o,series:h,live:r.live,back:r.back,zone:a,bounds:i?Bn(i.unit,s.start,s.end,a):[],unit:i?.unit,until:Math.min(s.end,t)}}(e),n=Uo(t,e),o=Do(t,e),a=n===W&&o===W?W:R`${n}${o}`,r=ea(e.raw),i=Ho(t,e);if(i)return ta("over"===r.header?{...r,header:"above"}:r,a,i);const s=e.raw,l=s.orientation??"vertical",c=s.whiskers??"tukey",{boxes:d,categories:h,slots:u}=xr(t,c);let m=1/0,p=-1/0;for(const j of d)m=Math.min(m,j.stats.low,...j.stats.outliers,...!0===s.readings?j.readings:[]),p=Math.max(p,j.stats.high,...j.stats.outliers,...!0===s.readings?j.readings:[]);const f=t.bounds.length>1,g="vertical"===l,y=g?Math.max(4,Math.floor(Zo(e)/Math.max(1,h)/6.5)):16,v=n=>f?function(e,t,n){const o=e.bounds[t],a=e.range.end-e.range.start;return"hour"===e.unit?En(o,"hour",a,n):"month"===e.unit?En(o,"month",a,n):En(o,"day","week"===e.unit?1/0:a,n)}(t,n,e.hass):((e,t=16)=>e.length>t?`${e.slice(0,t-1)}…`:e)(t.series[n]?.entity.name??"",y),_=Math.max(0,...Array.from({length:h},(e,t)=>v(t).length)),b=function(e,t,n,o,a,r=0){const i=ln(e.raw),s={min:i.min,max:i.max},l=[-.5,n-.5];if("vertical"===t){const t=Zo(e),r=un(o,s,4);return{options:i,value:r,times:$r(n,Math.floor(t/a)),unit:"day",range:{start:l[0],end:l[1]},scales:{x:Kt(l,[0,Eo]),y:Kt(r.domain,[Co,0]),domain:r.domain}}}const c=qo(e)-32-(i.y&&"outside"===i.labels?r:0),d=un(o,s,Math.max(2,Math.min(8,Math.round(c/70)))),h=!0===e.raw.compact?6:10;return{options:{...i,horizontal:i.vertical,vertical:i.horizontal},value:{domain:l,ticks:$r(n,h),decimals:0},times:d.ticks,unit:"day",range:{start:d.domain[0],end:d.domain[1]},scales:{x:Kt(d.domain,[0,Eo]),y:Kt(l,[0,Co]),domain:l}}}(e,l,h,d.length?[m,p]:void 0,f?56:1,6*_+12),x=g?b.scales.x:b.scales.y,$=g?b.scales.y:b.scales.x,w=(e,t)=>g?[x(e),$(t)]:[$(t),x(e)],k=g?Zo(e):r.compact?110:160,M=k>0?h/k*22:1/0,A=V`${d.map(e=>Mr(e,kr(e,u,M),w,!0===s.readings))}`,S=at(e.hass,"box_aria",{names:t.series.map(e=>e.entity.name).join(", ")}),E=fa(e.raw),C=E?mr(e.host):void 0,z=(t,n)=>Ro(Io(n,t.series.entity.decimals,e.hass),t.series.entity.unit);let L=W;const T=void 0===C?void 0:d[C];if(T){const n=t=>at(e.hass,t),{stats:o}=T,a=[{name:n("box_highest"),value:z(T,o.max)},{name:n("box_upper_quartile"),value:z(T,o.q3)},{name:n("box_median"),value:z(T,o.median),color:T.series.color},{name:n("box_lower_quartile"),value:z(T,o.q1)},{name:n("box_lowest"),value:z(T,o.min)},{name:n("box_mean"),value:z(T,o.mean)},{name:n("box_count"),value:String(o.count)}];if(o.outliers.length){const e=o.outliers.length;a.push({name:n("box_outliers"),value:e>=60?`${e}+`:String(e)})}const r=kr(T,u,M),i=f?`${function(e,t,n){const o="month"===t?{month:"long",year:"numeric"}:"hour"===t?{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:wn(n)}:{weekday:"day"===t?"short":void 0,day:"numeric",month:"short"},a=n?.locale?.language??"en",r=`${a}|${t}|${$n(n)}|${o.hour12}`;let i=wr.get(r);if(!i){try{i=new Intl.DateTimeFormat(a,{...o,timeZone:$n(n)})}catch{i=new Intl.DateTimeFormat("en",o)}wr.set(r,i)}return i.format(e)}(t.bounds[T.category],t.unit,e.hass)}${u>1?` · ${T.series.entity.name}`:""}`:T.series.entity.name;L=yr(g?{x:x(r.centre)/Eo,y:$(o.median)/Co,plotWidth:Zo(e),title:i,rows:a,band:[x(T.category-.5)/Eo,x(T.category+.5)/Eo]}:{x:$(o.high)/Eo,y:x(r.centre)/Co,plotWidth:Zo(e),title:i,rows:a})}return ta(r,a,Xo({axes:b,ctx:e,content:A,label:S,overlay:R`${"over"===r.header?na(a):W}${L}`,hover:E?fr(e,(e,t)=>function(e,t,n,o){const a=o*t-.5,r=Math.min(t-1,Math.max(0,Math.round(a))),i=a-r+.36;if(n>1&&(i<0||i>=br))return;const s=Math.min(n-1,Math.max(0,Math.floor(i/(br/n)))),l=e.findIndex(e=>e.category===r&&e.slot===s);return l<0?void 0:l}(d,h,u,g?e:t)):void 0,...g?{xLabel:v}:{yLabel:v,xLabel:t=>Io(t,hr(b),e.hass)}}))}},zr=["entity","time"],Lr=[2,80],Tr=[2,30],jr=[0,20];function Or(e,t){const n=new Set;for(const i of e)for(const e of i)e.t!==t&&n.add(e.t);const o=[...n].sort((e,t)=>e-t),a=e.map(()=>-1),r=[];for(const i of o){const t=[];let n=!0;e.forEach((e,o)=>{for(;a[o]+1<e.length&&e[a[o]+1].t<=i;)a[o]++;const r=e[a[o]];r&&null!==r.v?t.push(r.v):n=!1}),n&&r.push({t:i,v:t})}return r}function Nr(e,t){if(e.length<=t)return e;const n=e.length/t,o=[];for(let a=0;a<t-1;a++)o.push(e[Math.floor(a*n)]);return o.push(e[e.length-1]),o}function Ur(e,t){let n=Math.floor(e/1e3)^Math.imul(t+1,2654435769)|0;return n=Math.imul(n^n>>>16,73244475),n=Math.imul(n^n>>>16,73244475),n^=n>>>16,(n>>>0)/4294967295*2-1}function Fr(e,[t,n],o,a){const r=o*o+(a*a-o*o)*(n>t?Math.min(1,Math.max(0,(e-t)/(n-t))):.5);return Math.round(10*Math.sqrt(r))/10}nt("en",{editor_style_scatter:"Scatter",editor_style_bubble:"Bubble",editor_against:"Along the bottom",editor_against_entity:"The first entity",editor_against_time:"Time",editor_dot_size:"Dot size (px)",editor_jitter:"Jitter (px)",editor_min_size:"Smallest bubble (px)",editor_max_size:"Largest bubble (px)",editor_dot_color:"Dot colour",editor_xy_x_axis:"Labels along the bottom",scatter_needs_two:"Add a second entity. The first goes along the bottom, the others up the side.",bubble_needs_three:"Add three entities: one along the bottom, one up the side, and one for the size of each bubble.",scatter_role_x:"Across",bubble_role_size:"Size"});const Pr=e=>"number"==typeof e&&Number.isFinite(e);function Dr(e,t,[n,o]){const a=e[t];if(void 0!==a&&(!Pr(a)||a<n||a>o))throw new Error(`"${t}" must be a number from ${n} to ${o}`)}function Hr(e,t){return{against:"bubble"===t?"entity":e.against??"entity",dotSize:Pr(e.dot_size)?e.dot_size:6,jitter:Pr(e.jitter)?e.jitter:0,minSize:Pr(e.min_size)?e.min_size:6,maxSize:Pr(e.max_size)?e.max_size:32}}function Br(e,t){if(To(e),sn(e),ga(e),Qo(e),ir(e),Dr(e,"jitter",jr),"scatter"===t){if(void 0!==e.against&&!zr.includes(e.against))throw new Error(`"against" must be one of: ${zr.join(", ")}`);Dr(e,"dot_size",Tr)}else{Dr(e,"min_size",Lr),Dr(e,"max_size",Lr);const n=Hr(e,t);if(n.minSize>n.maxSize)throw new Error('"min_size" must not be above "max_size"')}}function Ir(e,t){return ze(e.entity.config.color??zo[(e.index-t)%zo.length])}const Rr=(e,t,n)=>Ro(Io(e,t.entity.decimals,n),t.entity.unit);function Vr(e,t,n=Date.now()){const o=Hr(e.raw,t),{against:a}=o,r=ea(e.raw),i=jo(e,n),s=Uo(i,e),l="time"===a,c=l?0:1,d=i.series.map((e,n)=>l?e.color:"bubble"===t?1===n?Ir(e,1):void 0:0===n?void 0:Ir(e,c)),h=function(e,t,n,o){const{show:a}=n.config;return a.name||a.value?R`<div class="series-header">
    ${e.map((e,r)=>{const i=t[r],s=void 0!==i?R`<span class="swatch" style="background:${i}"></span>`:R`<span class="role"
              >${at(n.hass,"bubble"===o&&2===r?"bubble_role_size":"scatter_role_x")}</span
            >`;return R`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
        ${s} ${a.name?R`<span class="series-name">${e.entity.name}</span>`:W}
        ${a.value?R`<span class="series-value">${e.entity.display}</span>`:W}
      </div>`})}
  </div>`:W}(i.series,d,e,t),u=s===W&&h===W?W:R`${s}${h}`,m="over"===r.header?{...r,header:"above"}:r;if(i.series.length<function(e,t){return"bubble"===e?3:"entity"===t?2:1}(t,a))return ta(m,u,R`<div class="chart-message">
        ${at(e.hass,"bubble"===t?"bubble_needs_three":"scatter_needs_two")}
      </div>`);const p=Ho(i,e);if(p)return ta(m,u,p);const f="history"!==i.source||i.group?void 0:Math.min(i.range.end,n),g=function(e,t,n,o){const{series:a}=e;if("time"===n)return a.map(e=>({s:e,samples:Nr(e.points.filter(e=>null!==e.v&&e.t!==o&&!e.carried).map(e=>({t:e.t,v:[e.t,e.v]})),800)}));if("bubble"===t){const[e,t,n]=a;return[{s:t,samples:Nr(Or([e.points,t.points,n.points],o),400)}]}const[r,...i]=a;return i.map(e=>({s:e,samples:Nr(Or([r.points,e.points],o),800)}))}(i,t,a,f),y=g.flatMap(e=>e.samples);if(0===y.length)return ta(m,u,R`<div class="chart-message">${at(e.hass,"chart_no_data")}</div>`);const v=y.map(e=>e.v[1]),_=[Math.min(...v),Math.max(...v)];let b,x;if(l)b=Yo(e,i.range,Jt(i.series.map(e=>e.points)));else{const t=y.map(e=>e.v[0]);b=dr(e,[Math.min(...t),Math.max(...t)],_,{x:cr(e.raw)});const n=hr(b);x=t=>Io(t,n,e.hass)}const{scales:$}=b,w=Zo(e)||1,k=o.jitter*Eo/w,M=o.jitter*Co/(r.compact?96:162);const A="bubble"===t?y.map(e=>e.v[2]):[],S=A.length?[Math.min(...A),Math.max(...A)]:[0,0],E=g.flatMap(({s:e,samples:n})=>{const a=l?e.color:Ir(e,c);return n.map(n=>({series:e,t:n.t,x:$.x(n.v[0])+(k?Ur(n.t,2*e.index)*k:0),y:$.y(n.v[1])+(M?Ur(n.t,2*e.index+1)*M:0),v:l?[n.v[1]]:n.v,color:a,d:"bubble"===t?Fr(n.v[2],S,o.minSize,o.maxSize):void 0}))}),C="bubble"===t?V`${[...E].sort((e,t)=>(t.d??0)-(e.d??0)).map(e=>V`<path class="bubble" d=${ht([[e.x,e.y]])} stroke=${e.color} style="stroke-width:${e.d}px"></path>`)}`:V`${g.map(({s:e})=>{const t=E.filter(t=>t.series===e);return t.length?V`<path class="dots" data-series=${e.index} d=${ht(t.map(e=>[e.x,e.y]))}
                stroke=${t[0].color} style="stroke-width:${o.dotSize}px"></path>`:W})}`,z=fa(e.raw),L=z?mr(e.host):void 0,T=void 0!==L?E[L]:void 0,j=at(e.hass,"chart_aria",{style:at(e.hass,`editor_style_${t}`),names:i.series.map(e=>e.entity.name).join(", ")}),O=Math.max(16,"bubble"===t?o.maxSize/2:o.dotSize);return ta(r,u,R`${Xo({axes:b,ctx:e,content:C,label:j,xLabel:x,overlay:R`${"over"===r.header?na(u):W}
      ${T?qr(T,i,t,a,e,w):W}`,hover:z?fr(e,(e,t,n,o)=>function(e,t,n,o,a,r=24){let i,s=r*r;const l=t*o,c=n*a;return e.forEach(([e,t],n)=>{const r=e/Eo*o-l,d=t/Co*a-c,h=r*r+d*d;h<=s&&(s=h,i=n)}),i}(E.map(e=>[e.x,e.y]),e,t,n,o,O)):void 0})}
    ${"bubble"===t?function(e,[t,n],o,a){const r=(t,n)=>R`<span class="size-item"
      ><span class="size-dot" style="width:${n}px;height:${n}px"></span>${Rr(t,e,a)}</span
    >`;return R`<div class="size-legend" aria-hidden="true">
    <span class="size-name">${e.entity.name}</span>
    ${r(t,Fr(t,[t,n],o.minSize,o.maxSize))}
    ${n>t?r(n,Fr(n,[t,n],o.minSize,o.maxSize)):W}
  </div>`}(i.series[2],S,o,e.hass):W}`)}function qr(e,t,n,o,a,r){const i="time"===o?[e.series]:"bubble"===n?t.series.slice(0,3):[t.series[0],e.series];return yr({x:e.x/Eo,y:e.y/Co,plotWidth:r,title:Sn(e.t,a.hass),dot:e.color,rows:i.map((t,n)=>({color:t===e.series?e.color:void 0,name:t.entity.name,value:Rr(e.v[n],t,a.hass)}))})}const Wr=r`
  ${Bo}
  ${Jo}
  ${$a}
  ${oa}
  ${vr}
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
`;function Zr(e){Po(e),Wo(e),pa(e),pr(e)}const Yr=Ca.map(e=>"x_axis"===e.name?{...e,name:"xy_x_axis"}:e);const Gr=(e,t,n=1)=>({number:{min:e,max:t,step:n,mode:"box",unit_of_measurement:"px"}}),Xr={scatter:[...ka,{name:"against",path:["against"],default:"entity"},{name:"dot_size",path:["dot_size"],default:6},{name:"jitter",path:["jitter"],default:0},...sr,...Yr,...Sa],bubble:[...ka,{name:"min_size",path:["min_size"],default:6},{name:"max_size",path:["max_size"],default:32},{name:"jitter",path:["jitter"],default:0},...sr,...Yr,...Sa]};function Jr(e){return t=>{const n="scatter"===e&&"time"===t.config.against,o=Ta(`${e}|${Ma(t.config)}|${n}`,t.hass,()=>{return[...Aa(t.hass,t.config),..."scatter"===e?[{name:"against",selector:wa(t.hass,"against",zr)},{type:"grid",name:"",schema:[{name:"dot_size",selector:Gr(Tr[0],Tr[1])},{name:"jitter",selector:Gr(jr[0],jr[1])}]}]:[{type:"grid",name:"",schema:[{name:"min_size",selector:Gr(Lr[0],Lr[1])},{name:"max_size",selector:Gr(Lr[0],Lr[1])}]},{name:"jitter",selector:Gr(jr[0],jr[1])}],...n?[]:lr,...(o=t.hass,[{type:"grid",name:"",schema:[{name:"xy_x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:wa(o,"axis_labels",Qt)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]),...Ea(t.hass)];var o});return ja(t,"chart",o,Xr[e])}}const Kr=[{name:"dot_color",path:["color"]}],Qr=[{name:"dot_color",selector:{text:{}}}];function ei(){return{schema:Qr,fields:Kr}}const ti={layout:"chart",group:"distribution",height:270,styles:Wr,thumbnail:()=>V`
    <g fill="var(--primary-color, #03a9f4)" fill-opacity="0.6">
      <circle cx="14" cy="28" r="4" /><circle cx="27" cy="20" r="7" /><circle cx="44" cy="24" r="5" />
      <circle cx="52" cy="11" r="8" /><circle cx="36" cy="33" r="3" />
    </g>`,validate:e=>Br(e,"bubble"),editor:Jr("bubble"),entityFields:()=>ei(),disconnect:Zr,render:e=>Vr(e,"bubble")},ni=["auto","none","hour","day","week","month"],oi=["auto","mean","sum","min","max","first","last","change"],ai={last:7,unit:"day"},ri={hour:1/24,day:1,week:7,month:30};function ii(e){if(e.calendar)return{day:"hour",week:"day",month:"day",year:"month"}[e.calendar];const t=e.last*ri[e.unit];return t<=2?"hour":t<=62?"day":t<=190?"week":"month"}function si(e){if(e.config.attribute)return!1;const t=e.stateObj?.attributes?.state_class;return"total_increasing"===t||"total"===t}function li(e,t){const n={...e,period:e.period??{...ai}};return"none"===e.group_by?delete n.group_by:void 0!==e.group_by&&"auto"!==e.group_by||(n.group_by=ii(Jn(n.period))),void 0!==e.aggregate&&"auto"!==e.aggregate||(n.aggregate=!0!==e.range&&t.length>0&&t.every(si)?"change":"mean"),n}function ci(e,t){const n=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t),o=e.map(e=>new Map(e.map(e=>[e.t,e]))),a=new Map;for(const i of e)for(const e of i)void 0!==e.end&&a.set(e.t,e.end);const r={times:[],ends:[],values:e.map(()=>[]),lows:e.map(()=>[]),highs:e.map(()=>[])};return n.forEach((i,s)=>{const l=Math.min(a.get(i)??n[s+1]??t,t);l>i&&(r.times.push(i),r.ends.push(l),e.forEach((e,t)=>{const n=o[t].get(i);r.values[t].push(n?n.v:ia(e,i)),r.lows[t].push(n?.min??null),r.highs[t].push(n?.max??null)}))}),r}function di(e,t,n,o){const a=t-e,r=.8*a/o,i=o>1?.12*r:0;return[e+.2*a/2+n*r+i/2,r-i]}function hi(e,t=!0){let n=t?0:1/0,o=t?0:-1/0;for(const a of e)null!==a&&Number.isFinite(a)&&(n=Math.min(n,a),o=Math.max(o,a));return n===1/0?void 0:[n,o]}const ui={hour:66,day:52,week:52,month:60};nt("en",{editor_style_column:"Column",editor_group_by_auto:"Automatic",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_range:"Lowest to highest in each column",editor_rounded:"Rounded ends",editor_column_labels:"Show values on the columns",editor_column_color:"Colour"});const mi={hour:"hour",day:"day",week:"day",month:"month"};function pi(e,t,n,o){if("hour"===n)return`${Sn(e,o)} – ${An(t,o)}`;const a="day"===n?{weekday:"short",day:"numeric",month:"short"}:"week"===n?{day:"numeric",month:"short"}:{month:"long",year:"numeric"};let r;try{r=new Intl.DateTimeFormat(o?.locale?.language??"en",{...a,timeZone:$n(o)})}catch{r=new Intl.DateTimeFormat("en",a)}return"week"===n?r.formatRange(e,t-1):r.format(e)}const fi=(e,t)=>Math.round(e/t*1e4)/100+"%",gi=e=>Math.min(Co,Math.max(0,e));function yi(e,t,n,o,a,r,i,s){const l=gi(e.y(a)),c=gi(e.y(o));return R`<div
    class="col ${i?`cap-${i}`:""} ${a<=0&&"both"!==i?"down":""}"
    data-series=${s}
    style="left:${fi(t,Eo)};width:${fi(n,Eo)};top:${fi(l,Co)};height:${fi(c-l,Co)};background:${r}"
  ></div>`}function vi(e,t,n,o,a,r){return R`<span
    class="point-label col-label ${r?"below":""}"
    style="left:${fi(t,Eo)};top:${fi(gi(n),Co)}"
    >${Io(o,a,e.hass)}</span
  >`}function _i(e,t,n,o){const a=e.y(o);return a<0||a>Co?R``:R`<div
    class="target-mark"
    style="left:${fi(t-.1*n,Eo)};width:${fi(1.2*n,Eo)};top:${fi(a,Co)}"
  ></div>`}const bi=ka.map(e=>"period_last"===e.name?{...e,default:ai.last}:"period_unit"===e.name?{...e,default:ai.unit}:"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),xi=[...bi,{name:"stack",path:["stack"],default:"none"},{name:"color_by",path:["color_by"],default:"series"},{name:"range",path:["range"],default:!1},{name:"column_labels",path:["labels"],default:!1},{name:"rounded",path:["rounded"],default:!0},...Ca,...Sa];const $i=[{name:"column_color",path:["color"]}],wi=r`
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
`,ki={layout:"chart",group:"history",height:240,styles:r`
    ${Bo}
    ${Jo}
    ${$a}
    ${oa}
    ${wi}
  `,thumbnail:()=>V`
    <path d="M7 36 V22 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M19 36 V12 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M31 36 V18 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M43 36 V8 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M55 36 V26 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M4 36.5 H62" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(e){if(void 0!==e.group_by&&!(e=>ni.includes(e))(e.group_by))throw new Error(`"group_by" must be one of: ${ni.join(", ")}`);if(void 0!==e.aggregate&&!oi.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${oi.join(", ")}`);const t={...e};"auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,To(t),sn(e),ga(e),Qo(e),ra(e);for(const n of["range","rounded","labels"])if(void 0!==e[n]&&"boolean"!=typeof e[n])throw new Error(`"${n}" must be true or false`);if(void 0!==e.color_by&&"series"!==e.color_by&&"bands"!==e.color_by)throw new Error('"color_by" must be one of: series, bands')},editor:function(e){const t="none"===e.config.group_by,n={...e.config,group_by:void 0},o=Ta(`column|${Ma(n)}|${t}`,e.hass,()=>[...Aa(e.hass,n).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:wa(e.hass,"group_by",ni)},...t?[]:[{name:"aggregate",selector:wa(e.hass,"aggregate",oi)}]]},{type:"grid",name:"",schema:[{name:"stack",selector:wa(e.hass,"stack",aa)},{name:"color_by",selector:wa(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"range",selector:{boolean:{}}},{name:"column_labels",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...za(e.hass),...Ea(e.hass)]);return ja({...e,commit:t=>e.commit(function(e){const t=e.period;return t&&"object"==typeof t&&void 0===t.calendar?void 0!==t.last&&void 0!==t.unit?e:{...e,period:{last:ai.last,unit:ai.unit,...t}}:e}(t))},"chart",o,xi)},entityFields:e=>({schema:Ta("column-entity",e,()=>[{name:"column_color",selector:{text:{}}}]),fields:$i}),disconnect(e){Po(e),Wo(e),pa(e)},render:function(e){const t={...e,raw:li(e.raw,e.items)},n=t.raw,o=!0===n.range,a=jo(t,Date.now(),{range:o}),r=Uo(a,t),i=Do(a,t),s=r===W&&i===W?W:R`${r}${i}`,l=Ho(a,t),c=ea(n);if(l)return ta("over"===c.header?{...c,header:"above"}:c,s,l);const d=o?"none":n.stack??"none",h=a.group,u=ci(a.series.map(e=>e.points),h?1/0:a.range.end),m=h&&u.ends.length?{...a.range,end:Math.max(a.range.end,...u.ends)}:a.range,p="none"===d?void 0:sa(u.values,d),f=a.series.map(e=>e.entity.target).filter(e=>null!==e);let g;g=p?ca(p):o?hi([...u.lows.flat(),...u.highs.flat(),...u.values.flat(),...f],!1):hi([...u.values.flat(),...t.config.show.target?f:[]]);let y=n;"percent"===d?y={y_min:g[0]<0?-100:0,y_max:g[1]>0?100:0,...n}:!o&&g&&(y=function(e,t){const n={...t};return void 0===t.y_min&&e[0]>=0&&(n.y_min=0),void 0===t.y_max&&e[1]<=0&&(n.y_max=0),n}(g,n));let v=Yo({...t,raw:y},m,g);const{scales:_}=v,b=u.times.map((e,t)=>(e+u.ends[t])/2),x=new Map(b.map((e,t)=>[e,t]));if(h&&b.length){const e=($=b.length,w=Zo(t)/ui[h.unit],Math.max(1,Math.ceil($/Math.max(1,w)))),n=mi[h.unit],o="day"===h.unit&&b.length<=8?6048e5:a.range.end-a.range.start;v={...v,unit:n,times:b.filter((t,n)=>n%e===0),label:e=>En(u.times[x.get(e)],n,o,t.hass)}}var $,w;const k=function(e,t,n,o,a,r){const i=e.raw,s=t.series,l=s.length,c=!0===i.range,d="bands"===i.color_by,h=Zo(e)/Eo,u=!0===i.labels&&"percent"!==a&&n.times.length*(r?1:l)<=60,m=e.config.show.target&&"percent"!==a,p=Math.min(Math.max(0,o.domain[0]),o.domain[1]),f=(e,t)=>d?ze(je(t,e.entity.bands).color):e.color,g={columns:[],labels:[],targets:[]},y=r?la(n.values):[];return n.times.forEach((t,a)=>{const i=o.x(t),d=o.x(n.ends[a]);if(r){const[t,l]=di(i,d,0,1);let c=-1,p=-1;r.forEach((e,t)=>{const n=e[a];n&&n[1]>n[0]&&(c=t),n&&n[1]<n[0]&&(p=t)}),r.forEach((e,r)=>{const i=e[a];if(!i||i[0]===i[1])return;const d=n.values[r][a],h=r===c?"top":r===p?"bottom":"";g.columns.push(yi(o,t,l,Math.min(...i),Math.max(...i),f(s[r],d),h,r))});const v=y[a];if(u&&null!==v&&l*h>=24){const n=v>=0?Math.max(0,...r.map(e=>e[a]?.[1]??0)):Math.min(0,...r.map(e=>e[a]?.[1]??0)),i=Math.max(...s.map(e=>e.entity.decimals));g.labels.push(vi(e,t+l/2,o.y(n),v,i,v<0))}const _=s[0].entity.target;return void(m&&null!==_&&g.targets.push(_i(o,t,l,_)))}s.forEach((t,r)=>{const s=n.values[r][a];if(null===s)return;const[y,v]=di(i,d,r,l);if(c){const e=n.lows[r][a]??s,i=n.highs[r][a]??s;g.columns.push(yi(o,y,v,e,i,f(t,s),"both",r)),g.columns.push(R`<div
            class="col-mark"
            style="left:${fi(y,Eo)};width:${fi(v,Eo)};top:${fi(gi(o.y(s)),Co)}"
          ></div>`)}else g.columns.push(yi(o,y,v,Math.min(p,s),Math.max(p,s),f(t,s),s>=p?"top":"bottom",r)),u&&v*h>=24&&g.labels.push(vi(e,y+v/2,o.y(s),s,t.entity.decimals,s<p));m&&null!==t.entity.target&&g.targets.push(_i(o,y,v,t.entity.target))})}),g}(t,a,u,_,d,p),M=a.series.map((e,t)=>({...e,points:b.map((e,n)=>({t:e,v:u.values[t][n],min:u.lows[t][n],max:u.highs[t][n]}))})),A={dotY:()=>null,heading:e=>{const n=x.get(e);return void 0===n?Sn(e,t.hass):h?pi(u.times[n],u.ends[n],h.unit,t.hass):Sn(u.times[n],t.hass)}},S=(e,n)=>Io(e,n.entity.decimals,t.hass);if(o&&(A.text=(e,t)=>{if(!t||null===t.v)return"—";const n=t.min??t.v,o=t.max??t.v;return Ro(`${S(n,e)} – ${S(o,e)}`,e.entity.unit)}),p){const e=la(u.values),n=_a(M),o=Math.max(...M.map(e=>e.entity.decimals));A.footer=a=>ba(t,e[x.get(a[0]?.p?.t??NaN)??-1]??null,n,o),"percent"===d&&(A.text=(e,t)=>{const n=t?p[e.index][x.get(t.t)??-1]:null;return t&&null!==t.v&&n?`${Ro(S(t.v,e),e.entity.unit)} · ${Math.round(Math.abs(n[1]-n[0]))} %`:"—"})}const E=fa(n),C=E?ma(t.host):void 0,z=void 0===C?void 0:x.get(C),L=void 0===z?W:R`<div
          class="slot-hover"
          style="left:${fi(_.x(u.times[z]),Eo)};width:${fi(_.x(u.ends[z])-_.x(u.times[z]),Eo)}"
        ></div>`,T=at(t.hass,"chart_aria",{style:at(t.hass,"editor_style_column"),names:a.series.map(e=>e.entity.name).join(", ")}),j=!1===n.rounded?0:4;return ta(c,s,Xo({axes:v,ctx:t,content:V``,label:T,overlay:R`<div class="columns" style="--r:${j}px">${L}${k.columns}${k.targets}</div>
        <div class="point-labels">${k.labels}</div>
        ${"over"===c.header?na(s):W}
        ${E?xa(t,M,_,C,Zo(t),A):W}`,hover:E?ya(t,m,M.map(e=>e.points)):void 0}))}},Mi=["series","bands"];function Ai(e,t,n,o,a){const r=ct(e.entity.config,a),i=Cn(e.points,500),s=So(i).map(n=>Ao(n.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join(""),l=r.dots?i.filter(e=>null!==e.v&&e.t!==o.start&&e.t!==o.end):[],c=l.length>0&&l.length<=200?V`<path
          class="dots"
          d=${ht(l.map(e=>[t.x(e.t),t.y(e.v)]))}
          fill="none"
          stroke=${n}
          style="stroke-width:${ut(r.width)}px"
        ></path>`:W;return V`<g class="series" data-series=${e.index}>
    <path
      class="line ${e.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${n}
      style="stroke-width:${r.width}px"
    ></path>
    ${c}
  </g>`}function Si(e,t,n){return R`<div class="point-labels">
    ${e.series.flatMap(o=>{const a=o.points.filter(t=>null!==t.v&&(void 0!==e.group||t.t!==e.range.start&&t.t!==e.range.end));return a.length>40?[]:a.map(e=>R`<span
            class="point-label"
            style="left:${t.x(e.t)/Eo*100}%;top:${t.y(e.v)/Co*100}%"
            >${Io(e.v,o.entity.decimals,n.hass)}</span
          >`)})}
  </div>`}nt("en",{editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",chart_aria:"{style} chart of {names}"});const Ei={layout:"chart",group:"history",height:240,styles:r`
    ${Bo}
    ${Jo}
    ${$a}
    ${oa}
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
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(e){if(To(e),sn(e),ga(e),ft(e),Qo(e),void 0!==e.color_by&&!Mi.includes(e.color_by))throw new Error(`"color_by" must be one of: ${Mi.join(", ")}`)},editor:function(e){const t=Ta(`line|${Ma(e.config)}`,e.hass,()=>[...Aa(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:wa(e.hass,"curve",wo)},{name:"color_by",selector:wa(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:kt},{name:"dots",selector:{boolean:{}}}]},{name:"labels",selector:{boolean:{}}},...za(e.hass),...Ea(e.hass)]);return ja(e,"chart",t,Oa)},entityFields:(e,t)=>({schema:jt(e),fields:At(!0===t.dots)}),disconnect(e){Po(e),Wo(e),pa(e)},render(e){const t=jo(e),n=Uo(t,e),o=Do(t,e),a=n===W&&o===W?W:R`${n}${o}`,r=Ho(t,e),i=ea(e.raw);if(r)return ta("over"===i.header?{...i,header:"above"}:i,a,r);const s=Yo(e,t.range,Jt(t.series.map(e=>e.points))),{scales:l}=s,c=fa(e.raw),d="bands"===e.raw.color_by,h=d?V`${t.series.map(e=>function(e,t,n){const[o,a]=n.domain,r=e=>Math.min(1,Math.max(0,(e-o)/(a-o))),i=[];return t.forEach((e,n)=>{const o=Number.isFinite(e.from)?r(e.from):0,a=n+1<t.length?r(t[n+1].from):1,s=ze(e.color);i.push(V`<stop offset=${o} stop-color=${s}></stop><stop offset=${a} stop-color=${s}></stop>`)}),V`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${Co} y2="0">
    ${i}
  </linearGradient>`}(`cd-bands-${e.index}`,e.entity.bands,l))}`:W,u=dt(t.series,t=>ct(t.entity.config,e.raw).onTop),m=V`${u.map(n=>Ai(n,l,d?`url(#cd-bands-${n.index})`:n.color,t.range,e.raw))}`,p=at(e.hass,"chart_aria",{style:at(e.hass,"editor_style_line"),names:t.series.map(e=>e.entity.name).join(", ")});return ta(i,a,Xo({axes:s,ctx:e,content:m,label:p,defs:h,overlay:R`${"over"===i.header?na(a):W}
        ${!0===e.raw.labels?Si(t,l,e):W}
        ${c?xa(e,t.series,l,ma(e.host),Zo(e)):W}`,hover:c?ya(e,t.range,t.series.map(e=>e.points)):void 0}))}},Ci=["line","column","area"],zi=["auto","left","right"];nt("en",{editor_style_combined:"Combined",editor_series_type:"Draw as",editor_series_type_line:"Line",editor_series_type_column:"Columns",editor_series_type_area:"Area",editor_series_axis:"Value axis",editor_series_axis_auto:"Automatic (by unit)",editor_series_axis_left:"Left",editor_series_axis_right:"Right",editor_series_aggregate:"Combine with",editor_series_aggregate_auto:"As the card",editor_series_aggregate_mean:"Average",editor_series_aggregate_sum:"Sum",editor_series_aggregate_min:"Lowest",editor_series_aggregate_max:"Highest",editor_series_aggregate_first:"First",editor_series_aggregate_last:"Last",editor_series_aggregate_change:"Change (meters that count up)"});const Li=e=>e.config,Ti=e=>Li(e).type??"line";function ji(e,t){const n={...e},o=t.some(e=>"column"===Ti(e));return"none"!==e.group_by&&(void 0!==e.group_by&&"auto"!==e.group_by||o)?void 0!==e.group_by&&"auto"!==e.group_by||(n.group_by=ii(Jn(e.period))):delete n.group_by,"auto"===e.aggregate&&delete n.aggregate,n}function Oi(e,t){const n=e.flatMap(e=>e.points.map(e=>e.v));return hi(n,t.includes("column"))}const Ni=[...ka.map(e=>"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:2.5},{name:"dots",path:["dots"],default:!1},{name:"rounded",path:["rounded"],default:!0},...Ca,...Sa];const Ui=[{name:"series_type",path:["type"],default:"line"},{name:"series_axis",path:["y_axis"],default:"auto"},{name:"series_color",path:["color"]},{name:"series_aggregate",path:["aggregate"],default:"auto"},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"negative_color",path:["negative_color"]}],Fi={layout:"chart",group:"history",height:240,styles:r`
    ${Bo}
    ${Jo}
    ${$a}
    ${oa}
    ${Ra}
    ${wi}
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
  `,thumbnail:()=>V`
    <path d="M10 36 V22 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M27 36 V14 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M44 36 V18 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M4 26 C14 20 22 8 32 10 S50 22 60 6" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){if(void 0!==e.group_by&&!ni.includes(e.group_by))throw new Error(`"group_by" must be one of: ${ni.join(", ")}`);if(void 0!==e.aggregate&&!oi.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${oi.join(", ")}`);const t={...e};if("auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,To(t),mo(t),sn(e),ga(e),ft(e),Qo(e),void 0!==e.rounded&&"boolean"!=typeof e.rounded)throw new Error('"rounded" must be true or false');for(const n of e.entities??[]){if("object"!=typeof n)continue;const e=n;if(void 0!==e.type&&!Ci.includes(e.type))throw new Error(`"type" of ${n.entity} must be one of: ${Ci.join(", ")}`);if(void 0!==e.y_axis&&"left"!==e.y_axis&&"right"!==e.y_axis)throw new Error(`"y_axis" of ${n.entity} must be one of: left, right`);if(void 0!==e.aggregate&&!uo.includes(e.aggregate))throw new Error(`"aggregate" of ${n.entity} must be one of: ${uo.join(", ")}`)}},editor:function(e){const t="none"===e.config.group_by,n={...e.config,group_by:void 0},o=Ta(`combined|${Ma(n)}|${t}`,e.hass,()=>[...Aa(e.hass,n).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:wa(e.hass,"group_by",ni)},...t?[]:[{name:"aggregate",selector:wa(e.hass,"aggregate",oi)}]]},{name:"curve",selector:wa(e.hass,"curve",wo)},{type:"grid",name:"",schema:[{name:"line_width",selector:kt},{name:"dots",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...za(e.hass),...Ea(e.hass)]);return ja(e,"chart",o,Ni)},entityFields:e=>({schema:Ta("combined-entity",e,()=>[{type:"grid",name:"",schema:[{name:"series_type",selector:wa(e,"series_type",Ci)},{name:"series_axis",selector:wa(e,"series_axis",zi)},{name:"series_color",selector:{text:{}}},{name:"series_aggregate",selector:wa(e,"series_aggregate",["auto",...uo])}]},{type:"grid",name:"",schema:[{name:"curve",selector:wa(e,"curve",wo)},{name:"line_width",selector:kt},{name:"dash",selector:{boolean:{}}},{name:"negative_color",selector:{text:{}}}]}]),fields:Ui}),disconnect(e){Po(e),Wo(e),pa(e)},render:function(e){const t={...e,raw:ji(e.raw,e.items)},n=t.raw,o=jo(t,Date.now(),{aggregate:t=>function(e,t){const n=t.aggregate;return Li(e).aggregate??(n&&"auto"!==n?n:si(e)?"change":"mean")}(t,e.raw)}),a=Uo(o,t),r=Do(o,t),i=a===W&&r===W?W:R`${a}${r}`,s=Ho(o,t),l=ea(n);if(s)return ta("over"===l.header?{...l,header:"above"}:l,i,s);const c=o.series.map(e=>Ti(e.entity)),d=function(e){const t=e[0]?.unit,n=e.map(e=>Li(e).y_axis??(e.unit===t?"left":"right"));return n.includes("left")?n:n.map(()=>"left")}(o.series.map(e=>e.entity)),h=o.group,u=o.series.map(e=>h?{...e,points:e.points.map(e=>({...e,t:void 0!==e.end?(e.t+e.end)/2:e.t}))}:e),m=h?Math.max(o.range.end,...o.series.flatMap(e=>e.points.map(e=>e.end??0))):0,p=h?{...o.range,end:m}:o.range,f=e=>u.filter((t,n)=>d[n]===e),g=e=>c.filter((t,n)=>d[n]===e),y=Oi(f("left"),g("left"));let v=n;y&&g("left").includes("column")?v={...n,y_min:n.y_min??(y[0]>=0?0:void 0),y_max:n.y_max??(y[1]<=0?0:void 0)}:g("left").includes("area")&&(v=Na(y,n));const _=Yo({...t,raw:v},p,y),b=_.scales,x=f("right"),$=Oi(x,g("right")),w={};$&&(g("right").includes("column")||g("right").includes("area"))&&($[0]>=0&&$[0]<=$[1]/2&&(w.min=0),$[1]<=0&&$[1]>=$[0]/2&&(w.max=0));const k=x.length?un($,w,4):void 0,M=k?{x:b.x,y:Kt(k.domain,[Co,0]),domain:k.domain}:void 0,A=e=>"right"===d[e.index]&&M?M:b,S=u.filter(e=>"area"===c[e.index]).map(e=>Da(e,e.points,A(e),n,{range:p})),E=u.filter(e=>"line"===c[e.index]).map(e=>Ai({...e,points:e.points},A(e),e.color,p,n)),C=u.filter(e=>"column"===c[e.index]),z=ci(o.series.filter(e=>"column"===c[e.index]).map(e=>e.points),h?1/0:o.range.end),L=!1===n.rounded?0:4,T=[];z.times.forEach((e,t)=>{const n=b.x(e),o=b.x(z.ends[t]);C.forEach((e,a)=>{const r=z.values[a][t];if(null===r)return;const i=A(e),s=Math.min(Math.max(0,i.domain[0]),i.domain[1]),[l,c]=di(n,o,a,C.length);T.push(yi(i,l,c,Math.min(s,r),Math.max(s,r),e.color,r>=s?"top":"bottom",e.index))})});const j=z.times.map((e,t)=>(e+z.ends[t])/2),O=u.map(e=>{if("column"!==c[e.index]||h)return e;const t=C.indexOf(e);return{...e,points:j.map((e,n)=>({t:e,v:z.values[t][n]}))}}),N=new Map;for(const P of o.series)for(const e of P.points)void 0!==e.end&&N.set((e.t+e.end)/2,[e.t,e.end]);const U=fa(n),F=at(t.hass,"chart_aria",{style:at(t.hass,"editor_style_combined"),names:o.series.map(e=>e.entity.name).join(", ")});return ta(l,i,Xo({axes:_,ctx:t,right:k&&M?{value:k,y:M.y}:void 0,content:V`${S.map(e=>e.body)}`,defs:V`${S.map(e=>e.defs)}`,label:F,overlay:R`<div class="columns" style="--r:${L}px">${T}</div>
        <svg class="plot lines-over" viewBox="0 0 ${Eo} ${Co}" preserveAspectRatio="none" aria-hidden="true">
          ${E}
        </svg>
        ${"over"===l.header?na(i):W}
        ${U?xa(t,O,b,ma(t.host),Zo(t),{dotY:(e,t)=>"column"===c[e.index]||null===t.v?null:A(e).y(t.v),heading:e=>{const n=N.get(e);return n&&h?pi(n[0],n[1],h.unit,t.hass):Sn(e,t.hass)}}):W}`,hover:U?ya(t,p,O.map(e=>e.points)):void 0}))}};function Pi(e,t){const n=Math.round(12+88*t);return n>=100?e:`color-mix(in srgb, ${e} ${n}%, var(--card-background-color, #fff))`}const Di=Math.sqrt(3)/2,Hi=["hours","calendar"],Bi=["scale","bands"],Ii=["square","rounded","hexagon"],Ri=10,Vi=1e4,qi={hours:{last:4,unit:"week",source:"history"},calendar:{last:12,unit:"month",source:"statistics"}};nt("en",{editor_style_heatmap:"Heatmap",heatmap_aria:"Heatmap of {name}",heatmap_hours:"Days averaged",heatmap_empty:"No readings",editor_grid:"Layout",editor_grid_hours:"Hour by weekday",editor_grid_calendar:"Calendar (a day per cell)",editor_color_by_scale:"Smooth scale",editor_cell_shape:"Cells",editor_cell_shape_square:"Square",editor_cell_shape_rounded:"Rounded",editor_cell_shape_hexagon:"Hexagon",editor_color_min:"Lowest colour at",editor_color_max:"Highest colour at",editor_legend:"Legend"});const Wi=e=>"number"==typeof e&&Number.isFinite(e);function Zi(e){return e.grid??"hours"}function Yi(e){const t=Zi(e),n=qi[t],o=e.period??{};return{...e,group_by:"hours"===t?"hour":"day",source:e.source??n.source,period:void 0!==o.calendar?o:{...o,last:o.last??n.last,unit:o.unit??n.unit}}}const Gi=new Map;function Xi(e,t,n){const o=e?.locale?.language??e?.language??"en",a=`${o}|${t}|${JSON.stringify(n)}`;let r=Gi.get(a);if(!r){try{r=new Intl.DateTimeFormat(o,{...n,timeZone:t})}catch{r=new Intl.DateTimeFormat("en",{...n,timeZone:"UTC"})}Gi.set(a,r)}return r}function Ji(e,t){return Xi(t,"UTC",{weekday:"short"}).format(Date.UTC(2024,0,e))}function Ki(e,t,n=!1){return Xi(t,"UTC",{hour:"numeric",...n?{minute:"2-digit"}:{},hour12:wn(t)}).format(Date.UTC(2024,0,1,e))}function Qi(e,t,n,o,a="cell"){const[r,i]=e.centre(t.col,t.row),s=o?`fill:${o}`:"",l=o?"":"empty";if("hexagon"===n)return V`<path class="${a} ${l}" d=${function(e,t,n){const o=n/Math.sqrt(3),a=[0,1,2,3,4,5].map(n=>{const a=(60*n-90)*Math.PI/180;return`${Math.round(100*(e+o*Math.cos(a)))/100},${Math.round(100*(t+o*Math.sin(a)))/100}`});return`M${a.join("L")}Z`}(r,i,8.8)} style=${s}></path>`;const c=8.8;return V`<rect class="${a} ${l}" x=${r-4.4} y=${i-4.4} width=${c} height=${c}
    rx=${"rounded"===n?2:.4} style=${s}></rect>`}const es=e=>Math.round(1e4*e)/100+"%";function ts(e,t,n,o){const{zone:a}=t,r=e=>(a.firstDay-1+e)%7+1,i=function(e,t){const n=new Array(168).fill(0),o=new Array(168).fill(0);for(const a of e){if(null===a.v)continue;const e=Nn(a.t,t.timeZone),r=(e.weekday-t.firstDay+7)%7*24+e.hour;n[r]+=a.v,o[r]+=1}return n.map((e,t)=>({row:Math.floor(t/24),hour:t%24,v:o[t]?e/o[t]:null,count:o[t]}))}(e.points,a).map(e=>({col:e.hour,row:e.row,v:e.v,count:e.count,title:()=>`${Ji(r(e.row),n)} ${Ki(e.hour,n,!0)} – ${Ki((e.hour+1)%24,n,!0)}`})),s=o?3:6;return{cells:i,cols:24,rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:Ji(r(e),n)})),colLabels:Array.from({length:24/s},(e,t)=>({col:t*s,text:Ki(t*s,n)}))}}function ns(e,t,n){const{zone:o}=t,a=function(e,t){if(0===e.length)return{cells:[],weeks:0,months:[]};const n=e=>{const n=Nn(e,t.timeZone);return Math.round(Date.UTC(n.year,n.month-1,n.day)/864e5)},o=n(Dn("week",e[0].t,t)),a=[],r=[];let i=-1;for(const s of e){const e=Nn(s.t,t.timeZone),l=Math.floor((n(s.t)-o)/7);a.push({t:s.t,col:l,row:(e.weekday-t.firstDay+7)%7,v:s.v});const c=12*e.year+e.month;c!==i&&(-1!==i&&1!==e.day||r.push({col:l,t:s.t}),i=c)}return r.length>1&&r[1].col-r[0].col<3&&r.shift(),{cells:a,weeks:a[a.length-1].col+1,months:r}}(e.points,o),r=Xi(n,o.timeZone,{weekday:"short",day:"numeric",month:"short",year:"numeric"}),i=Xi(n,o.timeZone,{month:"short"}),s=e=>(o.firstDay-1+e)%7+1;return{cells:a.cells.map(e=>({col:e.col,row:e.row,v:e.v,title:()=>r.format(e.t)})),cols:Math.max(1,a.weeks),rows:7,rowLabels:[0,1,2,3,4,5,6].map(e=>({row:e,text:Ji(s(e),n)})),colLabels:a.months.map(e=>({col:e.col,text:i.format(e.t)}))}}function os(e,t,n,o){const a=n.raw,r=Zi(n.raw),i=a.cell_shape??"rounded",s="bands"===a.color_by,l=qo(n),c="hours"===r?ts(e,t,n.hass,l>=400):ns(e,t,n.hass),d=function(e,t,n){if("hexagon"===n){const n=Ri/Math.sqrt(3),o=Ri*Di,a=e*Ri+5,r=(t-1)*o+2*n;return{width:a,height:r,centre:(e,t)=>[e*Ri+5+t%2*5,n+t*o],at(i,s){const l=Math.min(t-1,Math.max(0,Math.round((s*r-n)/o))),c=Math.floor((i*a-l%2*5)/Ri);return[Math.min(e-1,Math.max(0,c)),l]}}}return{width:e*Ri,height:t*Ri,centre:(e,t)=>[e*Ri+5,t*Ri+5],at:(n,o)=>[Math.min(e-1,Math.floor(n*e)),Math.min(t-1,Math.floor(o*t))]}}(c.cols,c.rows,i),h=Math.max(0,l-72)/d.width*Ri,u=Math.ceil(13/Math.max(1,h*("hexagon"===i?Di:1))),m=c.rowLabels.filter(e=>e.row%u===0);let p=-1/0;const f=c.colLabels.filter(e=>!((e.col-p)*h<32)&&(p=e.col,!0)),g=function(e,t={}){const n=e.filter(e=>null!==e);if(0===n.length&&(void 0===t.min||void 0===t.max))return;let o=t.min??Math.min(...n),a=t.max??Math.max(...n);return a<=o&&(void 0===t.max?a=o+1:o=a-1),[o,a]}(c.cells.map(e=>e.v),{min:Wi(a.color_min)?a.color_min:void 0,max:Wi(a.color_max)?a.color_max:void 0}),y=t=>{if(null!==t)return s?ze(je(t,e.entity.bands).color):g?Pi(e.color,function(e,[t,n]){return Math.min(1,Math.max(0,(e-t)/(n-t)))}(t,g)):e.color},v=mr(n.host),_=void 0!==v&&Math.floor(v/Vi)===e.index?v%Vi:void 0,b=new Map(c.cells.map((e,t)=>[8*e.col+e.row,t])),x=fa(n.raw)?fr(n,(t,n)=>{const[o,a]=d.at(t,n),r=b.get(8*o+a);return void 0===r?void 0:e.index*Vi+r}):void 0,$=void 0===_?void 0:c.cells[_];let w=W;if($){const[t,o]=d.centre($.col,$.row),a=null===$.v?at(n.hass,"heatmap_empty"):Ro(Io($.v,e.entity.decimals,n.hass),e.entity.unit);w=yr({x:t/d.width,y:o/d.height,plotWidth:Math.max(0,l-80),title:$.title(),rows:[{color:y($.v)??"var(--cd-track)",name:e.entity.name,value:a},...void 0!==$.count&&null!==$.v?[{name:at(n.hass,"heatmap_hours"),value:String($.count)}]:[]]})}const{show:k}=n.config,M=k.name||k.value||o?R`<div class="series-header">
          <div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
            ${s?W:R`<span class="swatch" style="background:${e.color}"></span>`}
            ${k.name||o?R`<span class="series-name">${e.entity.name}</span>`:W}
            ${k.value?R`<span class="series-value">${e.entity.display}</span>`:W}
          </div>
        </div>`:W,A=at(n.hass,"heatmap_aria",{name:e.entity.name});return R`<div class="hm grid-${r} shape-${i}">
    ${M}
    <div class="hm-body">
      <div class="hm-rows" aria-hidden="true">
        ${m.map(e=>R`<span class="hm-label" style="top:${es(d.centre(0,e.row)[1]/d.height)}">${e.text}</span>`)}
      </div>
      <div
        class="hm-plot ${x?"hoverable":""}"
        @pointerdown=${x?.move}
        @pointermove=${x?.move}
        @pointerleave=${x?.leave}
        @pointercancel=${x?.leave}
      >
        <svg class="hm-svg" viewBox="0 0 ${d.width} ${d.height}" role="img" aria-label=${A}>
          ${c.cells.map(e=>Qi(d,e,i,y(e.v)))}
          ${$?Qi(d,$,i,"none","cell picked"):W}
        </svg>
        ${w}
      </div>
      <div class="hm-cols" aria-hidden="true">
        ${f.map(e=>R`<span class="hm-label" style="left:${es(e.col*Ri/d.width)}">${e.text}</span>`)}
      </div>
    </div>
    ${!1===a.legend?W:function(e,t,n,o){const a=e.entity,r=e=>Io(e,a.decimals,o.hass);return n?R`<div class="hm-legend bands">
      ${Oe(a.bands,r,a.unit).map(e=>R`<span class="hm-key"
            ><span class="hm-swatch" style="background:${e.color}"></span>${e.text}</span
          >`)}
    </div>`:t?R`<div class="hm-legend scale">
    <span class="hm-end">${r(t[0])}</span>
    <span class="hm-gradient" style="background:linear-gradient(to right, ${Pi(e.color,0)}, ${e.color})"></span>
    <span class="hm-end">${Ro(r(t[1]),a.unit)}</span>
  </div>`:W}(e,g,s,n)}
  </div>`}const as=new Map;const rs={layout:"chart",group:"distribution",height:220,styles:r`
    ${Bo}
    ${$a}
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
  `,thumbnail:()=>V`
    ${[0,1,2,3].map(e=>[0,1,2,3,4,5,6].map(t=>V`<rect x=${4+8*t} y=${4+8.5*e} width="7" height="7.5" rx="1.5"
          fill="var(--primary-color, #03a9f4)" fill-opacity=${.15+.85*((3*t+5*e)%7/6)}></rect>`))}`,validate:function(e){const t=e,n=(e,n)=>{const o=t[e];if(void 0!==o&&!n.includes(o))throw new Error(`"${e}" must be one of: ${n.join(", ")}`)};n("grid",Hi),n("color_by",Bi),n("cell_shape",Ii);for(const o of["color_min","color_max"])if(void 0!==t[o]&&!Wi(t[o]))throw new Error(`"${o}" must be a number`);if(Wi(t.color_min)&&Wi(t.color_max)&&t.color_min>=t.color_max)throw new Error('"color_min" must be below "color_max"');if(void 0!==t.legend&&"boolean"!=typeof t.legend)throw new Error('"legend" must be true or false');To(Yi(e)),ga(e)},editor:function(e){const t=Zi(e.config),n=Ta(`heatmap|${Ma({...e.config,group_by:void 0})}`,e.hass,()=>[{name:"grid",selector:wa(e.hass,"grid",Hi)},...Aa(e.hass,{...e.config,group_by:void 0}).filter(e=>!JSON.stringify(e).includes('"group_by"')),{name:"aggregate",selector:wa(e.hass,"aggregate",uo)},{type:"grid",name:"",schema:[{name:"color_by",selector:wa(e.hass,"color_by",Bi)},{name:"cell_shape",selector:wa(e.hass,"cell_shape",Ii)}]},{type:"grid",name:"",schema:[{name:"color_min",selector:{number:{mode:"box",step:"any"}}},{name:"color_max",selector:{number:{mode:"box",step:"any"}}}]},{type:"grid",name:"",schema:[{name:"legend",selector:{boolean:{}}},{name:"tooltip",selector:{boolean:{}}}]}]);return ja(e,"chart",n,function(e){let t=as.get(e);if(!t){const n=qi[e],o={period_last:n.last,period_unit:n.unit,source:n.source};t=[{name:"grid",path:["grid"],default:"hours"},...ka.filter(e=>"group_by"!==e.name).map(e=>e.name in o?{...e,default:o[e.name]}:e),{name:"color_by",path:["color_by"],default:"scale"},{name:"cell_shape",path:["cell_shape"],default:"rounded"},{name:"color_min",path:["color_min"]},{name:"color_max",path:["color_max"]},{name:"legend",path:["legend"],default:!0},{name:"tooltip",path:["tooltip"],default:!0}],as.set(e,t)}return t}(t))},entityFields:()=>({schema:[{name:"series_color",selector:{text:{}}}],fields:[{name:"series_color",path:["color"]}]}),disconnect(e){Po(e),Wo(e),pr(e)},render(e){const t=jo({...e,raw:Yi(e.raw)}),n=Uo(t,e),o=Ho(t,e);if(o)return R`<div class="frame">${n}${o}</div>`;const a=t.series.length>1;return R`<div class="frame">${n}${t.series.map(n=>os(n,t,e,a))}</div>`}},is=["time","readings"],ss=100,ls=e=>Number(e.toPrecision(12));const cs=6e4,ds=36e5;const hs=["percent","total"],us=["side","overlap"],ms=["series","bands"];nt("en",{editor_style_histogram:"Histogram",editor_count:"Count",editor_count_time:"Time spent in each range",editor_count_readings:"Readings in each range",editor_show_as:"Show as",editor_show_as_percent:"Share of the whole (%)",editor_show_as_total:"Hours or readings",editor_bins:"Number of bins (empty: automatic)",editor_bin_width:"Bin width (wins over the number)",editor_bars:"Two or more entities",editor_bars_side:"Bars side by side",editor_bars_overlap:"Bars over each other",editor_hist_x_axis:"Value labels along the bottom",editor_bar_color:"Bar colour",histogram_readings:"{n} readings",histogram_reading:"1 reading"});const ps=e=>"number"==typeof e&&Number.isFinite(e);function fs(e,t,n){if(void 0!==e[t]&&!n.includes(e[t]))throw new Error(`"${t}" must be one of: ${n.join(", ")}`)}function gs(e,t){const n=jo(e,t),o={count:(a=e.raw).count??"time",showAs:a.show_as??"percent",bars:a.bars??"side",bands:"bands"===a.color_by,bins:ps(a.bins)?a.bins:void 0,width:ps(a.bin_width)?a.bin_width:void 0};var a;const r=Math.min(n.range.end,t),i=n.series.map(e=>function(e,t){const{mode:n,until:o,statistics:a}=t;if(0===e.length)return[];if(void 0!==e[0].end)return e.map(e=>null===e.v?0:"readings"===n?1:Math.max(0,Math.min(e.end,o)-e.t));if(a){if("readings"===n)return e.map(e=>null===e.v||e.carried?0:1);const t=e.slice(1).map((t,n)=>t.t-e[n].t).filter(e=>e>0).sort((e,t)=>e-t),o=t.length?t[Math.floor(t.length/2)]:36e5;return e.map(e=>null===e.v||e.carried?0:o)}const r=e.length-1;return e.map((t,a)=>{if(null===t.v)return 0;if("readings"===n){const n=a===r&&a>0&&t.t>=o&&e[a-1].v===t.v;return t.carried||n?0:1}const i=a<r?e[a+1].t:Math.max(t.t,o);return Math.max(0,Math.min(i,o)-t.t)})}(e.points,{mode:o.count,until:r,statistics:"statistics"===n.source}));let s=1/0,l=-1/0;n.series.forEach((e,t)=>e.points.forEach((e,n)=>{null!==e.v&&i[t][n]>0&&(s=Math.min(s,e.v),l=Math.max(l,e.v))}));const c=cr(e.raw),d="side"===o.bars&&n.series.length>1,h=Math.max(5,Math.min(24,Math.round(Zo(e)/(d?40:28)))),u=s===1/0?[]:function(e,t,n={},o=12){const a=n.min??e,r=n.max??t;if(void 0!==n.bins&&void 0===n.width){let[e,t]=[a,r];t>e||([e,t]=[e-.5,e+.5]);const o=(t-e)/n.bins;return Array.from({length:n.bins+1},(a,r)=>r===n.bins?t:ls(e+r*o))}const i=r-a;let s=n.width??(i>0?cn(i,o):cn(Math.max(Math.abs(a),1),10));for(;i/s>ss;)s=cn(i,50);const l=n.min??ls(Math.floor(a/s+1e-9)*s);let c=n.max??ls(Math.ceil(r/s-1e-9)*s);c>l||(c=ls(l+s));const d=[l];for(let h=1;d[d.length-1]<c-1e-9*s;h++)d.push(Math.min(c,ls(l+h*s)));return d}(s,l,{bins:o.bins,width:o.width,min:c.min,max:c.max},h),m=n.series.map((e,t)=>{const n=function(e,t,n){const o=new Array(Math.max(0,n.length-1)).fill(0);return e.forEach((e,a)=>{if(null===e.v||!(t[a]>0))return;const r=function(e,t){const n=t.length-1;if(n<1||e<t[0]||e>t[n])return-1;if(e===t[n])return n-1;let o=0,a=n-1;for(;o<a;){const n=o+a+1>>1;t[n]<=e?o=n:a=n-1}return o}(e.v,n);r>=0&&(o[r]+=t[a])}),o}(e.points,i[t],u),a=n.reduce((e,t)=>e+t,0),r=n.map(e=>"percent"===o.showAs?a>0?e/a*100:0:"time"===o.count?e/36e5:e);return{series:e,totals:n,heights:r,whole:a}});return{frame:n,opts:o,edges:u,data:m,side:d}}function ys(e,t,n){return"time"===t?function(e){if(e<cs)return e>0?"< 1 min":"0 min";const t=Math.round(e/cs);if(t<60)return`${t} min`;if(e<864e5){const e=Math.floor(t/60),n=t%60;return n?`${e} h ${n} min`:`${e} h`}const n=Math.round(e/ds),o=Math.floor(n/24),a=n%24;return a?`${o} d ${a} h`:`${o} d`}(e):1===e?at(n.hass,"histogram_reading"):at(n.hass,"histogram_readings",{n:Io(e,0,n.hass)})}const vs={layout:"chart",group:"distribution",height:240,styles:r`
    ${Bo}
    ${Jo}
    ${$a}
    ${oa}
    ${vr}
    .style-histogram .bin {
      shape-rendering: crispEdges;
    }
    .style-histogram .overlap .bin {
      fill-opacity: 0.35;
      stroke-width: 1.5px;
      vector-effect: non-scaling-stroke;
    }
  `,thumbnail:()=>V`
    <g fill="var(--primary-color, #03a9f4)">
      <rect x="6" y="28" width="7" height="8" rx="1" />
      <rect x="14" y="20" width="7" height="16" rx="1" />
      <rect x="22" y="8" width="7" height="28" rx="1" />
      <rect x="30" y="12" width="7" height="24" rx="1" />
      <rect x="38" y="22" width="7" height="14" rx="1" />
      <rect x="46" y="30" width="7" height="6" rx="1" />
    </g>
    <path d="M4 37 H60" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,validate(e){if(To(e),sn(e),ga(e),Qo(e),ir(e),fs(e,"count",is),fs(e,"show_as",hs),fs(e,"bars",us),fs(e,"color_by",ms),void 0!==e.bins&&!(Number.isInteger(e.bins)&&e.bins>=1&&e.bins<=ss))throw new Error('"bins" must be a whole number from 1 to 100');if(void 0!==e.bin_width&&!(ps(e.bin_width)&&e.bin_width>0))throw new Error('"bin_width" must be a number above 0')},editor:function(e){const t=e.hass,n=Ta(`histogram|${Ma(e.config)}`,t,()=>[...Aa(t,e.config),{type:"grid",name:"",schema:[{name:"count",selector:wa(t,"count",is)},{name:"show_as",selector:wa(t,"show_as",hs)}]},{type:"grid",name:"",schema:[{name:"bins",selector:{number:{min:1,max:ss,mode:"box"}}},{name:"bin_width",selector:{number:{min:0,mode:"box",step:"any"}}}]},...lr,{type:"grid",name:"",schema:[{name:"bars",selector:wa(t,"bars",us)},{name:"color_by",selector:wa(t,"color_by",ms)}]},...za(t).map(e=>"grid"===e.type?{...e,schema:e.schema.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e)}:e),...Ea(t)]);return ja(e,"chart",n,$s)},entityFields:()=>({schema:bs,fields:_s}),disconnect(e){Po(e),Wo(e),pr(e)},render(e){const t=Date.now(),{frame:n,opts:o,edges:a,data:r,side:i}=gs(e,t),s=Uo(n,e),l=Do(n,e),c=s===W&&l===W?W:R`${s}${l}`,d=ea(e.raw),h=Ho(n,e)??(a.length<2?Ho({...n,series:[]},e):void 0);if(h)return ta("over"===d.header?{...d,header:"above"}:d,c,h);const u=Math.max(0,...r.flatMap(e=>e.heights)),m=dr(e,[a[0],a[a.length-1]],[0,u],{x:{min:a[0],max:a[a.length-1]},yFloor:0}),{scales:p}=m,f=p.y(Math.max(0,m.value.domain[0])),g=r.length,y="overlap"===o.bars&&g>1,v=V`${r.map((e,t)=>{const n=e.heights.map((n,r)=>{if(!(n>0))return W;const s=p.x(a[r]),l=p.x(a[r+1]),c=Math.min(4,.08*(l-s)),d=(l-s-2*c)/(i?g:1),h=s+c+(i?d*t:0),u=p.y(n),m=o.bands&&e.series.entity.bands.length?ze(je((a[r]+a[r+1])/2,e.series.entity.bands).color):e.series.color;return V`<rect class="bin" x=${h} y=${Math.min(u,f)} width=${Math.max(.5,d)} height=${Math.abs(f-u)} fill=${m} stroke=${y?m:"none"}></rect>`});return V`<g class="series" data-series=${e.series.index}>${n}</g>`})}`,_=function(e){if(e.length<2)return 0;const t=e[1]-e[0],n=e.every(e=>Math.abs(e-Number(e.toFixed(dn(t))))<1e-6*t);return n?dn(t):Math.min(4,dn(t)+1)}(a),b=fa(e.raw),x=b?mr(e.host):void 0;let $=W;if(void 0!==x&&x<a.length-1){const t=r[0]?.series.entity.unit??"",n=Io(a[x],_,e.hass),i=Io(a[x+1],_,e.hass),s=p.x(a[x])/Eo,l=p.x(a[x+1])/Eo,c=Zo(e);$=yr({x:"right"===da(l,c)?l:s,y:0,plotWidth:c,title:Ro(`${n} – ${i}`,t),band:[s,l],rows:r.map(t=>{const n=t.whole>0?t.totals[x]/t.whole*100:0;return{color:t.series.color,name:t.series.entity.name,value:`${Io(n,n>0&&n<1?1:0,e.hass)}% · ${ys(t.totals[x],o.count,e)}`}})})}const w=at(e.hass,"chart_aria",{style:at(e.hass,"editor_style_histogram"),names:n.series.map(e=>e.entity.name).join(", ")});return ta(d,c,Xo({axes:m,ctx:e,content:V`<g class=${y?"overlap":"side"}>${v}</g>`,label:w,xLabel:t=>Io(t,hr(m),e.hass),yLabel:t=>"percent"===o.showAs?`${Io(t,m.value.decimals,e.hass)}%`:"time"===o.count?`${Io(t,m.value.decimals,e.hass)} h`:Io(t,m.value.decimals,e.hass),overlay:R`${"over"===d.header?na(c):W}${$}`,hover:b?fr(e,e=>{const t=a[0]+e*(a[a.length-1]-a[0]),n=a.findIndex((e,n)=>n<a.length-1&&t>=e&&t<=a[n+1]);return n<0?void 0:n}):void 0}))}},_s=[{name:"bar_color",path:["color"]}],bs=[{name:"bar_color",selector:{text:{}}}],xs=Ca.map(e=>"x_axis"===e.name?{...e,name:"hist_x_axis"}:e),$s=[...ka,{name:"count",path:["count"],default:"time"},{name:"show_as",path:["show_as"],default:"percent"},{name:"bins",path:["bins"]},{name:"bin_width",path:["bin_width"]},...sr,{name:"bars",path:["bars"],default:"side"},{name:"color_by",path:["color_by"],default:"series"},...xs,...Sa];const ws=e=>(Math.abs(e)<.005?0:e).toFixed(2);function ks(e,t,n,o){const a=o*Math.PI/180;return[e+n*Math.sin(a),t-n*Math.cos(a)]}function Ms(e,t,n,o,a){const r=String(Number(n.toFixed(2))),i=a-o,[s,l]=ks(e,t,n,o);if(i>=359.99){const[a,i]=ks(e,t,n,o+180);return`M${ws(s)} ${ws(l)} A${r} ${r} 0 1 1 ${ws(a)} ${ws(i)} A${r} ${r} 0 1 1 ${ws(s)} ${ws(l)}`}const[c,d]=ks(e,t,n,a),h=i>180?1:0;return`M${ws(s)} ${ws(l)} A${r} ${r} 0 ${h} 1 ${ws(c)} ${ws(d)}`}function As(e,t){const n=e/2;return[-n+t[0]*e,-n+t[1]*e]}function Ss(e){let t=0;for(const n of e)t+=n.codePointAt(0)>=11904?1/.58:1;return t}function Es(e,t=76,n=12,o=8,a=11){const r=e.trim();let i=[r];if(Ss(r)>a){let e=Ss(r);for(let t=r.indexOf(" ");t>0;t=r.indexOf(" ",t+1)){const n=Math.max(Ss(r.slice(0,t)),Ss(r.slice(t+1)));n<e&&(e=n,i=[r.slice(0,t),r.slice(t+1)])}}const s=Math.max(...i.map(Ss));return{lines:i,size:Math.max(o,Math.min(n,Math.floor(t/(.58*Math.max(1,s)))))}}const Cs=65,zs=66,Ls=e=>String(Math.round(1e3*e)/1e3+0);function Ts(e,t,n,o,a,r=11){const{lines:i,size:s}=Es(e,t,n,o,r),l=a-1.2*(i.length-1)*s;return V`<text class="na" text-anchor="middle" style="font-size: ${s}px">${i.map((e,t)=>V`<tspan x=${Cs} y=${Ls(l+1.2*t*s)}>${e}</tspan>`)}</text>`}const js={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:r`
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
  `,render(e,{show:t,hass:n}){const o=function(e,t,n){const o=n-t,a=[];return o>0?(e.forEach((r,i)=>{const s=0===i?t:Math.max(r.from,t),l=Math.min(i+1<e.length?e[i+1].from:1/0,n);l>s&&a.push({from:(s-t)/o,to:(l-t)/o,color:r.color})}),a):a}(e.bands,e.min,e.max),a=o.map((e,t)=>{const n=180*e.from-90+(t>0?1:0),a=180*e.to-90-(t<o.length-1?1:0);return a>n?V`<path class="seg" d=${Ms(Cs,zs,50,n,a)} stroke=${ze(e.color)}></path>`:W}),r=Array.from({length:11},(e,t)=>{const[n,o]=ks(Cs,zs,36,18*t-90),[a,r]=ks(Cs,zs,40,18*t-90);return V`<line class="tickmark" x1=${n.toFixed(2)} y1=${o.toFixed(2)} x2=${a.toFixed(2)} y2=${r.toFixed(2)}></line>`});let i=W;if(t.target&&null!==e.targetPosition&&e.available){const t=180*e.targetPosition-90,[n,o]=ks(Cs,zs,57,t),[a,r]=ks(Cs,zs,64,t-3),[s,l]=ks(Cs,zs,64,t+3);i=V`<polygon class="target-mark" points="${n.toFixed(2)},${o.toFixed(2)} ${a.toFixed(2)},${r.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const s=!t.value;return R`<div class="needle-gauge">
      <svg class=${s?"compact":""} viewBox="0 0 130 ${s?82:104}" aria-hidden="true">
        ${a} ${r} ${i}
        ${e.available?V`<g class="needle" style="transform: rotate(${Ls(180*e.position-90)}deg)"><path d=${c=Cs,d=zs,h=42,u=3,`M${ws(c)} ${ws(d-h)} L${ws(c+u)} ${ws(d)} L${ws(c-u)} ${ws(d)} Z`}></path></g>`:W}
        <circle class="hub" cx=${Cs} cy=${zs} r="6"></circle>
        <circle class="hub-dot" cx=${Cs} cy=${zs} r="2.5"></circle>
        ${e.available?t.value?V`<text class="value" x=${Cs} y="94" text-anchor="middle">${e.display}</text>`:W:s?(l=e.display,Ts(l,58,11,7,55)):function(e){return Ts(e,126,12,8,94,18)}(e.display)}
      </svg>
      ${t.name||t.icon?R`<div class="name">
              ${t.icon?R`<ha-state-icon
                      class="icon"
                      .hass=${n}
                      .stateObj=${e.stateObj}
                      .icon=${Ya(e)}
                    ></ha-state-icon>`:W}
              ${t.name?R`<span class="name-text">${e.name}</span>`:W}
            </div>`:W}
    </div>`;var l,c,d,h,u}};function Os(e){return e.map(e=>e.available&&e.value>0?e.value:0)}function Ns(e,t=100){const n=e.reduce((e,t)=>e+Math.max(0,t),0);if(n<=0)return e.map(()=>0);const o=e.map(e=>Math.max(0,e)/n*t),a=o.map(Math.floor);let r=t-a.reduce((e,t)=>e+t,0);const i=o.map((e,t)=>({i:t,rest:e-a[t]})).sort((e,t)=>t.rest-e.rest||e.i-t.i);for(const{i:s}of i){if(r<=0)break;a[s]+=1,r-=1}return a}function Us(e,t){return t>0?e/t*(180/Math.PI):0}function Fs(e){const t=Math.max(0,e.end-e.start);return`--a:${(e.start-90).toFixed(3)}deg;--len:${t.toFixed(3)}`}function Ps(e,t,n,o,a="primary"){return"bands"===o?ze(e.band.color):"shades"===o?function(e,t,n){return n<=1||t<=0?e:`color-mix(in srgb, ${e} ${Math.round(100-Math.min(t,n-1)/(n-1)*65)}%, var(--card-background-color, #fff))`}(ze(a),t,n):ze(function(e){const t=e.config.color;return"string"==typeof t&&""!==t.trim()?t:void 0}(e)??zo[t%zo.length])}function Ds(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:""}function Hs(e,t,n,o=e.map(e=>e.available?e.value:0)){const a=e.map((e,t)=>({e:e,v:o[t]})).filter(({e:e})=>e.available);if(!a.length)return;const r=a.reduce((e,{v:t})=>e+t,0),i="total"===t?r:r/a.length,s=Math.max(...a.map(({e:e})=>e.decimals));return{value:i,text:Io(i,s,n),unit:Ds(e)}}function Bs(e){return Se(e.config)?0:W}function Is(e,t){const{show:n}=t.config;return!e.length||!n.name&&!n.value&&e.every(e=>void 0===e.share)?W:R`<div class="parts-legend">
    ${e.map(e=>R`<div
          class="entity part-row ${Se(e.entity.config)?"interactive":""} ${e.entity.available?"":"unavailable"}"
          data-index=${e.index}
          tabindex=${Bs(e.entity)}
          aria-label=${void 0===e.share?e.entity.label:`${e.entity.label}, ${e.share}`}
        >
          <span class="swatch ${e.entity.available?"":"empty"}" style="background:${e.color}"></span>
          ${n.name?R`<span class="part-name">${e.entity.name}</span>`:W}
          ${n.value?R`<span class="part-value value">${e.entity.display}</span>`:W}
          ${void 0===e.share?W:R`<span class="part-share">${e.share}</span>`}
        </div>`)}
  </div>`}function Rs(e,t){return Ro(Io(e,0,t),"%")}function Vs(e,t){return at(e.hass,"parts_aria",{style:at(e.hass,t),names:e.items.map(e=>e.name).join(", ")})}function qs(e,t,n){return R`<div class="centre" aria-hidden="true">
    <div class="centre-value">${e}${t?R`<span class="centre-unit">${t}</span>`:W}</div>
    ${n?R`<div class="centre-caption">${n}</div>`:W}
  </div>`}function Ws(e,t,n){const o=e[t];if(void 0!==o&&!n.includes(o))throw new Error(`"${t}" must be one of: ${n.join(", ")}`)}function Zs(e,t,n,o){const a=e[t];if(void 0!==a&&("number"!=typeof a||!Number.isFinite(a)||a<n||a>o))throw new Error(`"${t}" must be a number from ${n} to ${o}`)}function Ys(e,t){const n=e[t];if(void 0!==n&&"boolean"!=typeof n)throw new Error(`"${t}" must be true or false`)}function Gs(e,t){const n=e[t];if(void 0!==n&&"string"!=typeof n)throw new Error(`"${t}" must be text`)}nt("en",{editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_color_by_shades:"Shades of one colour",editor_shade_color:"Shade colour (palette name or CSS colour)",editor_show_percent:"Show each share as a percentage",editor_center:"In the middle",editor_center_total:"Total",editor_center_average:"Average",editor_center_none:"Nothing",parts_total:"Total",parts_average:"Average",parts_aria:"{style} of {names}"});const Xs=r`
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
`;nt("en",{editor_style_pictograph:"Pictograph",editor_unit_icon:"Icon (each entity can have its own)",editor_per_icon:"Each icon stands for (empty: automatic)",editor_group_size:"Icons per group (0: no groups)",editor_partial:"Part-fill an icon for fractions"});const Js=["series","bands"];function Ks(e,t,n,o){const{show:a}=n.config,r=function(e,t,n){const o=t-e;if(!(o>0))return{count:0,per:1};const a=void 0!==n&&n>0?n:o<=20?1:o/10,r=Math.ceil(o/a-1e-9);return r>100?{count:100,per:o/100}:{count:r,per:a}}(e.min,e.max,o.perIcon),i=e.available?function(e,t,n,o){const a=Math.min(n.count,Math.max(0,(e-t)/n.per)),r=o?a:Math.floor(a+1e-9);return Array.from({length:n.count},(e,t)=>Math.min(1,Math.max(0,r-t)))}(e.value,e.min,r,o.partial):r.count?Array(r.count).fill(0):[],s=Ps(e,t,n.items.length,o.colorBy),l=e.config.icon??o.unitIcon??(e.stateObj?void 0:"mdi:checkbox-blank-circle"),c=r.count>20?20:28,d=e.available?R`<span class="picto-now">${e.valueText}</span
        ><span class="picto-of"
          >/ ${Ro(Io(e.max,Number.isInteger(e.max)?0:e.decimals,n.hass),e.unit)}</span
        >`:e.display;return R`<div
    class="entity picto-row ${Se(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    tabindex=${Bs(e)}
    aria-label=${e.label}
  >
    ${a.name?R`<span class="name picto-name">${e.name}</span>`:W}
    <div class="picto-icons" style="--mdc-icon-size:${c}px" role="img" aria-label=${e.label}>
      ${function(e,t){if(e<=0)return[];if(!(t>0))return[[0,e]];const n=[];for(let o=0;o<e;o+=t)n.push([o,Math.min(e,o+t)]);return n}(i.length,o.groupSize).map(([t,o])=>R`<span class="picto-group">${i.slice(t,o).map((o,a)=>((t,o)=>R`<span class="unit" style="--i:${o};--fill:${(100*t).toFixed(1)}%">
      <ha-state-icon class="unit-empty" .hass=${n.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon>
      <span class="unit-full" style="color:${s}"
        ><ha-state-icon .hass=${n.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon
      ></span>
    </span>`)(o,t+a))}</span>`)}
    </div>
    ${a.value?R`<span class="value picto-value">${d}</span>`:W}
  </div>`}const Qs=[{name:"unit_icon",path:["unit_icon"]},{name:"per_icon",path:["per_icon"]},{name:"group_size",path:["group_size"],default:5},{name:"color_by",path:["color_by"],default:"series"},{name:"partial",path:["partial"],default:!0}];const el={layout:"chart",group:"totals",height:180,styles:r`
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
  `,thumbnail:()=>V`
    ${[0,1,2,3,4].map(e=>V`<circle cx=${10+11*e} cy="14" r="4" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />
        <path d="M${3+11*e} 30 a7 7 0 0 1 14 0 z" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`)}`,validate(e){Gs(e,"unit_icon");const t=e.per_icon;if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<=0))throw new Error('"per_icon" must be a number more than 0');if(Zs(e,"group_size",0,50),void 0!==e.group_size&&!Number.isInteger(e.group_size))throw new Error('"group_size" must be a whole number');Ws(e,"color_by",Js),Ys(e,"partial")},editor:function(e){const t=Ta("pictograph",e.hass,()=>[{name:"unit_icon",selector:{icon:{}}},{type:"grid",name:"",schema:[{name:"per_icon",selector:{number:{min:0,step:"any",mode:"box"}}},{name:"group_size",selector:{number:{min:0,max:50,mode:"box"}}},{name:"color_by",selector:wa(e.hass,"color_by",Js)}]},{name:"partial",selector:{boolean:{}}}]);return ja(e,"chart",t,Qs)},render:function(e){const t={perIcon:(n=e.raw).per_icon,unitIcon:n.unit_icon||void 0,groupSize:n.group_size??5,partial:!1!==n.partial,colorBy:n.color_by??"series"};var n;return R`<div class="pictograph" role="group" aria-label=${Vs(e,"editor_style_pictograph")}>
    ${e.items.map((n,o)=>Ks(n,o,e,t))}
  </div>`}};nt("en",{editor_style_pie:"Pie / donut",editor_shape:"Shape",editor_shape_donut:"Donut",editor_shape_pie:"Pie",editor_center_label:"Line under the total",editor_gap:"Space between slices",editor_rounded:"Rounded ends",editor_gradient:"Gradient fills"});const tl=["donut","pie"],nl=["total","none"],ol=["series","bands","shades"],al=48;function rl(e,t){const n=function(e){const t=e.reduce((e,t)=>e+Math.max(0,t),0);return e.map(e=>t>0?Math.max(0,e)/t:0)}(e),o=n.filter(e=>e>0).length,a="donut"===t.shape?41.5:24;let r=0;return"donut"===t.shape&&(o>1&&(r+=Us(t.gap,a)),t.rounded&&(r+=Us(13,a))),function(e,t=0,n=360){const o=n-t;let a=t;return e.map(e=>{const t=a;return a+=e*o,{start:t,end:a}})}(n).map((e,t)=>n[t]>0?function(e,t){const n=e.end-e.start,o=Math.min(Math.max(0,t),n)/2;return{start:e.start+o,end:e.end-o}}(e,r):void 0)}const il=[{name:"shape",path:["shape"],default:"donut"},{name:"color_by",path:["color_by"],default:"series"},{name:"center",path:["center"],default:"total"},{name:"center_label",path:["center_label"],default:""},{name:"gap",path:["gap"],default:2},{name:"shade_color",path:["shade_color"],default:""},{name:"rounded",path:["rounded"],default:!1},{name:"gradient",path:["gradient"],default:!1},{name:"show_percent",path:["show_percent"],default:!0}];const sl={layout:"chart",group:"totals",height:200,styles:r`
    ${Xs}
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
  `,thumbnail:()=>V`
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="6"
      pathLength="100" stroke-dasharray="44 56" transform="rotate(-90 32 20)" />
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--warning-color, #f59e0b)" stroke-width="6"
      pathLength="100" stroke-dasharray="28 72" stroke-dashoffset="-46" transform="rotate(-90 32 20)" />
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--success-color, #43a047)" stroke-width="6"
      pathLength="100" stroke-dasharray="22 78" stroke-dashoffset="-76" transform="rotate(-90 32 20)" />`,validate(e){Ws(e,"shape",tl),Ws(e,"center",nl),Ws(e,"color_by",ol),Zs(e,"gap",0,10),Ys(e,"rounded"),Ys(e,"gradient"),Ys(e,"show_percent"),Gs(e,"shade_color"),Gs(e,"center_label")},editor:function(e){const t=Ta("pie",e.hass,()=>[{type:"grid",name:"",schema:[{name:"shape",selector:wa(e.hass,"shape",tl)},{name:"color_by",selector:wa(e.hass,"color_by",ol)},{name:"center",selector:wa(e.hass,"center",nl)},{name:"center_label",selector:{text:{}}},{name:"gap",selector:{number:{min:0,max:10,step:.5,mode:"slider"}}},{name:"shade_color",selector:{text:{}}}]},{name:"rounded",selector:{boolean:{}}},{name:"gradient",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return ja(e,"chart",t,il)},render:function(e){const t={shape:(n=e.raw).shape??"donut",center:n.center??"total",colorBy:n.color_by??"series",shadeColor:n.shade_color||"primary",gap:n.gap??2,rounded:!0===n.rounded,gradient:!0===n.gradient,percent:!1!==n.show_percent,centerLabel:n.center_label??""};var n;const o=e.items,a=Os(o),r=o.map((e,n)=>Ps(e,n,o.length,t.colorBy,t.shadeColor)),i=rl(a,t),s="donut"===t.shape,l=s?41.5:24,c=s?13:al,d=s?35/al:0,h=i.filter(Boolean).length,u=t.gradient?V`<defs>${o.map((e,t)=>i[t]?function(e,t,n){return V`<radialGradient id=${e} gradientUnits="userSpaceOnUse" cx="50" cy="50" r=${al}>
    <stop offset=${n} style="stop-color:color-mix(in srgb, ${t} 65%, #fff)"></stop>
    <stop offset="1" style="stop-color:${t}"></stop>
  </radialGradient>`}(`cd-pie-${t}`,r[t],d):W)}</defs>`:W,m=o.map((e,n)=>{const o=i[n];if(!o)return W;const a=t.gradient?`url(#cd-pie-${n})`:r[n];return V`<g
      class="entity slice ${Se(e.config)?"interactive":""}"
      data-index=${n}
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
        style="${Fs(o)};stroke:${a}"
      ></circle>
    </g>`}),p=!s&&t.gap>0&&h>1?i.map(e=>e?V`<line class="separator" x1="50" y1="50" x2="50" y2=${1}
                stroke-width=${t.gap} style="--a:${e.start.toFixed(3)}deg"></line>`:W):W,f=0===h?V`<circle class="track" cx="50" cy="50" r=${l} stroke-width=${c} fill="none"></circle>`:W,g=Ns(a),y=o.map((n,o)=>({index:o,entity:n,color:r[o],share:t.percent&&a[o]>0?Rs(g[o],e.hass):void 0})),v=Hs(o,"total",e.hass,a),_=s&&"total"===t.center&&v?qs(v.text,"",t.centerLabel||Ds(o)):W;return R`<div class="parts">
    <div class="dial">
      <svg viewBox="0 0 100 100" role="img" aria-label=${Vs(e,"editor_style_pie")}>
        ${u}${f}${m}${p}
      </svg>
      ${_}
    </div>
    ${Is(y,e)}
  </div>`}};let ll=0;const cl=new WeakMap;const dl=60,hl=60,ul=e=>String(Math.round(1e3*e)/1e3+0);function ml(e){const[t,n]=As(e,[0,1]),o=Ms(dl,hl,46,t,n),a=e<360;return{layout:"tiles",group:"gauges",height:a?135:155,minColumnWidth:128,styles:r`
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
    `,render(t,{show:n,hass:r}){const i=function(e){let t=cl.get(e);return t||(t="cd-g-"+ ++ll,cl.set(e,t)),t}(t.config),s=t.span[1]-t.span[0]<=0,l=`stroke-dasharray: ${ul(100*(t.span[1]-t.span[0]))} 100; stroke-dashoffset: ${ul(100*-t.span[0])}`,c=(d=t.band.color,Object.prototype.hasOwnProperty.call(Ce,d)?Ce[d].fallback:d);var d;const h=function(e){return!e.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",e))}(c)?`url(#${i}) ${c}`:`url(#${i})`,u=n.icon?6:0,m=(p=t.valueText,Math.min(22,Math.floor(124/Math.max(1,p.length))));var p;let f=W;if(n.target&&null!==t.targetPosition&&t.available){const n=As(e,[t.targetPosition,t.targetPosition])[0],[o,a]=ks(dl,hl,39.5,n),[r,i]=ks(dl,hl,52.5,n);f=V`<line class="tick" x1=${o.toFixed(2)} y1=${a.toFixed(2)} x2=${r.toFixed(2)} y2=${i.toFixed(2)}></line>`}return R`<div class="radial ${a?"cropped":""}">
        <div class="dial">
          <svg viewBox="0 0 120 ${a?100:120}" aria-hidden="true">
            <defs>
              <linearGradient id=${i} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${dl} cy=${hl} r="34"></circle>
            <path class="track" d=${o}></path>
            ${t.available?V`<path
                  class="value-arc ${s?"empty":""}"
                  d=${o}
                  pathLength="100"
                  style=${l}
                  stroke=${h}
                ></path>`:W}
            ${f}
            ${t.available?V`${n.value?V`<text
                        class="value"
                        x=${dl}
                        y=${64+u}
                        text-anchor="middle"
                        style=${m<22?`font-size: ${m}px`:W}
                      >${t.valueText}</text>
                      <text class="unit" x=${dl} y=${80+u} text-anchor="middle">${t.unit}</text>`:W}`:function(e){const{lines:t,size:n}=Es(e),o=64-1.2*(t.length-1)*n/2;return V`<text class="na" text-anchor="middle" style="font-size: ${n}px">${t.map((e,t)=>V`<tspan x=${dl} y=${ul(o+1.2*t*n)}>${e}</tspan>`)}</text>`}(t.display)}
          </svg>
          ${n.icon&&t.available?R`<ha-state-icon
                  class="icon ${n.value?"":"centre"}"
                  .hass=${r}
                  .stateObj=${t.stateObj}
                  .icon=${Ya(t)}
                ></ha-state-icon>`:W}
        </div>
        ${n.name?R`<span class="name">${t.name}</span>`:W}
      </div>`}}}const pl=ml(360),fl=ml(270);nt("en",{editor_style_rings:"Rings",editor_start_angle:"Start angle (0 is the top)",editor_end_angle:"End angle",editor_rounded_ends:"Rounded ends"});const gl=["average","total","none"],yl=["series","bands"];function vl(e){return{start:e.start_angle??0,end:e.end_angle??270,center:e.center??"average",colorBy:e.color_by??"series",rounded:!1!==e.rounded_ends}}const _l=[{name:"start_angle",path:["start_angle"],default:0},{name:"end_angle",path:["end_angle"],default:270},{name:"center",path:["center"],default:"average"},{name:"color_by",path:["color_by"],default:"series"},{name:"rounded_ends",path:["rounded_ends"],default:!0}];const bl={layout:"chart",group:"totals",height:200,styles:r`
    ${Xs}
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
  `,thumbnail:()=>V`
    <circle cx="32" cy="20" r="16" fill="none" stroke="var(--divider-color, rgba(127, 127, 127, 0.3))"
      stroke-width="4" pathLength="100" stroke-dasharray="75 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="16" fill="none" stroke="var(--success-color, #43a047)" stroke-width="4"
      pathLength="100" stroke-dasharray="62 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="10" fill="none" stroke="var(--divider-color, rgba(127, 127, 127, 0.3))"
      stroke-width="4" pathLength="100" stroke-dasharray="75 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="10" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="4"
      pathLength="100" stroke-dasharray="48 100" transform="rotate(-90 32 20)" stroke-linecap="round" />`,validate(e){Zs(e,"start_angle",-360,360),Zs(e,"end_angle",-360,360);const{start:t,end:n}=vl(e);if(n<=t||n-t>360)throw new Error('"end_angle" must be after "start_angle", and at most 360 degrees after it');Ws(e,"center",gl),Ws(e,"color_by",yl),Ys(e,"rounded_ends")},editor:function(e){const t=Ta("rings",e.hass,()=>[{type:"grid",name:"",schema:[{name:"start_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"end_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"center",selector:wa(e.hass,"center",gl)},{name:"color_by",selector:wa(e.hass,"color_by",yl)}]},{name:"rounded_ends",selector:{boolean:{}}}]);return ja(e,"chart",t,_l)},render:function(e){const t=vl(e.raw),n=e.items,{radii:o,width:a}=function(e){if(e<=0)return{radii:[],width:0};const t=Math.min(9,28/(1.33*e)),n=1.33*t;return{radii:Array.from({length:e},(e,o)=>48-t/2-o*n),width:t}}(n.length),r=n.map((e,o)=>Ps(e,o,n.length,t.colorBy)),i=t.rounded?"round":"butt",s=Fs({start:t.start,end:t.end}),l=n.map((e,n)=>{const l=e.available?V`<circle class="seg" cx="50" cy="50" r=${o[n]} pathLength="360" stroke-width=${a}
          stroke-linecap=${i} style="${Fs(function(e,t,n){return{start:t,end:t+Math.min(1,Math.max(0,e))*(n-t)}}(e.position,t.start,t.end))};stroke:${r[n]}"></circle>`:W;return V`<g
      class="entity ring ${Se(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
      data-index=${n}
      aria-label=${e.label}
    >
      <circle class="ring-track" cx="50" cy="50" r=${o[n]} pathLength="360" stroke-width=${a}
        stroke-linecap=${i} style=${s}></circle>
      ${l}
    </g>`}),c="none"===t.center?void 0:Hs(n,t.center,e.hass),d=c?qs(c.text,c.unit,at(e.hass,`parts_${t.center}`)):W,h=n.map((e,t)=>({index:t,entity:e,color:r[t]})),u=function(e,t){const n=e=>-Math.cos(e*Math.PI/180),o=360*Math.ceil((e-180)/360)+180<=t?1:Math.max(n(e),n(t));return Math.min(100,Math.max(66,50+48*o+6))}(t.start,t.end);return R`<div class="parts">
    <div class="dial" style="aspect-ratio:100 / ${u.toFixed(2)}">
      <svg viewBox="0 0 100 ${u.toFixed(2)}" role="img" aria-label=${Vs(e,"editor_style_rings")}>
        ${l}
      </svg>
      <div class="centre-box" style="height:${(100/u*100).toFixed(2)}%">${d}</div>
    </div>
    ${Is(h,e)}
  </div>`}},xl={layout:"chart",group:"distribution",height:240,styles:Wr,thumbnail:()=>V`
    <g fill="var(--primary-color, #03a9f4)">
      <circle cx="10" cy="32" r="2.5" /><circle cx="17" cy="27" r="2.5" /><circle cx="22" cy="29" r="2.5" />
      <circle cx="28" cy="21" r="2.5" /><circle cx="34" cy="23" r="2.5" /><circle cx="40" cy="15" r="2.5" />
      <circle cx="47" cy="17" r="2.5" /><circle cx="53" cy="9" r="2.5" />
    </g>
    <g fill="var(--warning-color, #f59e0b)">
      <circle cx="14" cy="18" r="2.5" /><circle cx="31" cy="33" r="2.5" /><circle cx="50" cy="28" r="2.5" />
    </g>`,validate:e=>Br(e,"scatter"),editor:Jr("scatter"),entityFields:()=>ei(),disconnect:Zr,render:e=>Vr(e,"scatter")};function $l(e){const[t,n]=e;return Array.from({length:10},(e,o)=>{const a=(o+.5)/10;return a>t&&a<=n})}const wl={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:r`
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
  `,render(e,{show:t,hass:n}){const o=e.available?$l(e.span):$l([0,0]),a=t.target&&e.available&&null!==e.targetPosition?Math.min(9,Math.max(0,Math.floor(10*e.targetPosition))):-1,r=!e.available;return R`<div class="seg">
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${e.stateObj}
              .icon=${Ya(e)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${t.name||r?R`<div class="name">
                ${t.name?R`<span class="label">${e.name}</span>`:W}
                ${r?R`<span class="status">${e.display}</span>`:W}
              </div>`:W}
        <div class="cells">
          ${o.map((e,t)=>R`<i class="cell ${e?"on":""} ${t===a?"mark":""}" style="--i:${t}"></i>`)}
        </div>
      </div>
      ${t.value?R`<span class="value">${e.available?e.display:""}</span>`:W}
    </div>`}},kl={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:r`
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
  `,render:(e,{show:t,hass:n})=>R`
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${e.stateObj}
              .icon=${Ya(e)}
            ></ha-state-icon>`:W}
      ${t.value||!e.available?R`<span class="value">${e.display}</span>`:W}
      <div class="tube">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:W}
      </div>
      ${t.name?R`<span class="name">${e.name}</span>`:W}
    `},Ml={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:r`
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
  `,render(e,{show:t,hass:n}){const o=t.value||!e.available;return R`
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${e.stateObj}
              .icon=${Ya(e)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${t.name||o?R`<div class="top">
                ${t.name?R`<span class="name">${e.name}</span>`:W}
                ${o?R`<span class="value">${e.display}</span>`:W}
              </div>`:W}
        <div class="track">
          <div class="fill"></div>
          ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:W}
        </div>
      </div>
    `}};nt("en",{editor_style_waffle:"Waffle",editor_waffles:"Waffles",editor_waffles_one:"One, split between the entities",editor_waffles_each:"One per entity, side by side",editor_headline:"Show the first share in large type"});const Al=["one","each"],Sl=["series","bands"];function El(e){if(1===e.length){const t=e[0];return t.available?[Ns([t.position,1-t.position])[0]]:[0]}return Ns(Os(e),100)}function Cl(e,t){const{col:n,row:o}=function(e){return{col:e%10,row:9-Math.floor(e/10)}}(e);return V`<rect
    class="cell ${t?"filled":""}"
    x=${10*n+.8}
    y=${10*o+.8}
    width="8.4"
    height="8.4"
    rx="1.6"
    style="--k:${e}${t?`;fill:${t}`:""}"
  ></rect>`}function zl(e,t,n,o){let a=0;const r=e.map((e,o)=>{const r=a;if(a+=e,!e)return W;const i=n[o];return V`<g class="entity ${Se(i.config)?"interactive":""}" data-index=${o}>
      ${Array.from({length:e},(e,n)=>Cl(r+n,t[o]))}
    </g>`}),i=Array.from({length:100-a},(e,t)=>Cl(a+t,void 0));return R`<svg class="waffle" viewBox="0 0 100 100" role="img" aria-label=${o}>
    ${r}
    <g class="empty">${i}</g>
  </svg>`}const Ll=[{name:"waffles",path:["waffles"],default:"one"},{name:"color_by",path:["color_by"],default:"series"},{name:"headline",path:["headline"],default:!0},{name:"show_percent",path:["show_percent"],default:!0}];const Tl={layout:"chart",group:"totals",height:210,styles:r`
    ${Xs}
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
  `,thumbnail:()=>V`
    ${Array.from({length:25},(e,t)=>{const n=t%5,o=4-Math.floor(t/5);return V`<rect x=${20+5*n} y=${8+5*o} width="4" height="4" rx="0.8" fill=${t<9?"var(--warning-color, #f59e0b)":t<15?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`})}`,validate(e){Ws(e,"waffles",Al),Ws(e,"color_by",Sl),Ys(e,"headline"),Ys(e,"show_percent")},editor:function(e){const t=Ta("waffle",e.hass,()=>[{type:"grid",name:"",schema:[{name:"waffles",selector:wa(e.hass,"waffles",Al)},{name:"color_by",selector:wa(e.hass,"color_by",Sl)}]},{name:"headline",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return ja(e,"chart",t,Ll)},render(e){const t={waffles:(n=e.raw).waffles??"one",colorBy:n.color_by??"series",headline:!1!==n.headline,percent:!1!==n.show_percent};var n;return"each"===t.waffles?function(e,t){const{show:n}=e.config;return R`<div class="waffles">
    ${e.items.map((o,a)=>{const r=Ps(o,a,e.items.length,t.colorBy),[i]=El([o]),s=Rs(i,e.hass),l=n.value&&t.percent&&o.available&&o.display!==s;return R`<div
        class="entity waffle-item ${Se(o.config)?"interactive":""} ${o.available?"":"unavailable"}"
        data-index=${a}
        tabindex=${Bs(o)}
      >
        ${zl([i],[r],[o],o.label)}
        ${n.name?R`<span class="waffle-name">${o.name}</span>`:W}
        <span class="value waffle-value">${o.available&&t.percent?s:o.display}</span>
        ${l?R`<span class="waffle-raw">${o.display}</span>`:W}
      </div>`})}
  </div>`}(e,t):function(e,t){const n=e.items,o=n.map((e,o)=>Ps(e,o,n.length,t.colorBy)),a=El(n),r=e=>a[e]>0||1===n.length&&n[e].available,i=n.map((i,s)=>({index:s,entity:i,color:o[s],share:!t.percent||!r(s)||t.headline&&1===n.length?void 0:Rs(a[s],e.hass)})),s=n[0],l=t.headline&&s&&r(0)?R`<div class="waffle-headline">
          <span class="waffle-big">${Rs(a[0],e.hass)}</span>
          <span class="waffle-caption">${s.name}</span>
        </div>`:W;return R`<div class="parts">
    <div class="waffle-box">${zl(a,o,n,Vs(e,"editor_style_waffle"))}</div>
    <div class="waffle-side">${l}${Is(i,e)}</div>
  </div>`}(e,t)}},jl=["bars","gauges","history","totals","compare","distribution"];function Ol(e){return"chart"===e.layout}const Nl={bar:tr,thin:Ml,segmented:wl,tank:kl,ring:pl,needle:js,arc:fl,line:Ei,column:ki,area:Va,combined:Fi,pie:sl,rings:bl,pictograph:el,waffle:Tl,histogram:vs,scatter:xl,bubble:ti,heatmap:rs,box:Cr},Ul="important",Fl=" !"+Ul,Pl=pe(class extends fe{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const o=e[n];return null==o?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)null==t[o]&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in t){const e=t[o];if(null!=e){this.ft.add(o);const t="string"==typeof e&&e.endsWith(Fl);o.includes("-")||t?n.setProperty(o,t?e.slice(0,-11):e,t?Ul:""):n[o]=e}}return q}}),Dl=Object.keys(Ne),Hl=Object.keys(Ce),Bl="custom",Il={text:{}},Rl={entity:{domain:["sensor","input_number","number"]}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vl(e){return"string"==typeof e&&""!==e.trim()&&!Number.isFinite(Number(e))}const ql={icon:{}};function Wl(e){return void 0===e?"none":Dl.find(t=>Ne[t]&&Bt(Ne[t],e))??"custom"}function Zl(e){return Hl.includes(e)}class Yl extends le{constructor(){super(),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(e){e.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(e){const t=this.hass?.states[e]?.state,n=void 0===t||""===t.trim()?NaN:Number(t);return Number.isFinite(n)?n:void 0}_t(e){return at(this.hass,e)}_getSelectors(){const e=`${ot(this.hass)}|${this.unit??""}`;if(this._selectors?.key===e)return this._selectors;const t=Dl.map(e=>({value:e,label:this._t(`editor_preset_${e}`)})),n=e=>({select:{mode:"dropdown",options:e}});return this._selectors={key:e,preset:n(t),presetCustom:n([...t,{value:Bl,label:this._t("editor_preset_custom")}]),color:n([...Hl,Bl].map(e=>({value:e,label:this._t(`editor_color_${e}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e&&e.length?e:void 0}}))}_presetChanged(e){e.stopPropagation();const t=e.detail?.value;if(!t||t===Bl||!Dl.includes(t))return;if(t===Wl(this.bands))return;const n=Ne[t];this._emit(n?structuredClone(n):void 0)}_updateBand(e,t,n){const o=[...this.bands??[]],a={...o[e]};null==n||""===n?delete a[t]:a[t]=n,o[e]=a,this._emit(o)}_fromChanged(e,t){t.stopPropagation();const n=Number(t.detail?.value);""!==t.detail?.value&&null!=t.detail?.value&&Number.isFinite(n)&&this._updateBand(e,"from",n)}_fromEntityChanged(e,t){t.stopPropagation();const n=t.detail?.value;"string"==typeof n&&""!==n&&this._updateBand(e,"from",n)}_toggleFromMode(e){const t=this.bands?.[e]?.from,n=new Set(this._entityOpen);Vl(t)?this._updateBand(e,"from",this._entityValue(t)??0):n.delete(e)||n.add(e),this._entityOpen=n}_colorChanged(e,t){t.stopPropagation();const n=t.detail?.value,o=this.bands?.[e]?.color??"primary";if(!n)return;const a=new Set(this._customOpen);n!==Bl?(a.delete(e),this._customOpen=a,n!==o&&this._updateBand(e,"color",n)):Zl(o)&&(this._customOpen=a.add(e))}_customColorChanged(e,t){t.stopPropagation();const n="string"==typeof t.detail?.value?t.detail.value.trim():"";if(!n)return;const o=new Set(this._customOpen);o.delete(e),this._customOpen=o,this._updateBand(e,"color",n)}_iconChanged(e,t){t.stopPropagation(),this._updateBand(e,"icon",t.detail?.value)}_labelChanged(e,t){t.stopPropagation(),this._updateBand(e,"label",t.detail?.value)}_removeBand(e){const t=[...this.bands??[]];t.splice(e,1),this._emit(t)}_addBand(){const e=[...this.bands??[]],t=e[e.length-1]?.from,n="number"==typeof t?t:Vl(t)?this._entityValue(t)??NaN:"string"==typeof t&&""!==t.trim()?Number(t):NaN;e.push({from:Number.isFinite(n)?n+10:0,color:"primary"}),this._emit(e)}_renderBand(e,t,n){const o=!Zl(e.color)||this._customOpen.has(t),a=Vl(e.from)?e.from:void 0,r=void 0!==a||this._entityOpen.has(t);return R`<div class="band">
      <span class="swatch" style=${Pl({"--swatch":ze(e.color)})}></span>
      <ha-selector
        .required=${!1}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${n.from}
        .value=${void 0!==a?this._entityValue(a):e.from}
        .disabled=${r}
        @value-changed=${e=>this._fromChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!0}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${n.color}
        .value=${o?Bl:e.color}
        @value-changed=${e=>this._colorChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${Il}
        .value=${e.label??""}
        @value-changed=${e=>this._labelChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${ql}
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
              .selector=${Rl}
              .value=${a??""}
              @value-changed=${e=>this._fromEntityChanged(t,e)}
            ></ha-selector>`:W}
      ${o?R`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${Il}
              .value=${Zl(e.color)?ze(e.color):e.color}
              @value-changed=${e=>this._customColorChanged(t,e)}
            ></ha-selector>`:W}
    </div>`}render(){const e=this._getSelectors(),t=Wl(this.bands);return R`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${t===Bl?e.presetCustom:e.preset}
        .value=${t}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((t,n)=>this._renderBand(t,n,e))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}Yl.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},Yl.styles=r`
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",Yl);const Gl={number:{mode:"box",step:"any"}},Xl={entity:{domain:["sensor","input_number","number"]}};function Jl(e){return null==e||""===e?"default":"number"==typeof e||""!==e.trim()&&Number.isFinite(Number(e))?"number":"entity"}class Kl extends le{willUpdate(e){e.has("value")&&"default"!==Jl(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const e=(e,t)=>at(this.hass,e,t),t=[{value:"default",label:e("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:e("editor_limit_number")},{value:"entity",label:e("editor_limit_entity")}],n=t.map(e=>e.label).join("|");return this._modeSelector?.key!==n&&(this._modeSelector={key:n,selector:{select:{mode:"dropdown",options:t}}}),this._modeSelector.selector}get _currentMode(){return this._mode??Jl(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e}}))}_modeChanged(e){e.stopPropagation();const t=e.detail?.value;t&&t!==this._currentMode&&(this._mode=t,void 0!==this.value&&this._emit(void 0))}_numberChanged(e){e.stopPropagation();const t=e.detail?.value,n="number"==typeof t?t:""===t||null==t?NaN:Number(t);this._mode="number",this._emit(Number.isFinite(n)?n:void 0)}_entityChanged(e){e.stopPropagation();const t=e.detail?.value;this._mode="entity",this._emit("string"==typeof t&&""!==t?t:void 0)}render(){const e=e=>at(this.hass,e),t=this._currentMode;return R`<ha-selector
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
              .selector=${Gl}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===t?R`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${e("editor_limit_entity")}
                .selector=${Xl}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:W}`}}Kl.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},Kl.styles=r`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",Kl);const Ql=["min","max","target"];function ec(e,t,n){const o=t&&!n?e?.states[t]?.attributes?.unit_of_measurement:void 0;return"string"==typeof o&&o?o:void 0}class tc extends le{constructor(){super(),this._computeLabel=e=>this._t(`editor_${e.name}`),this._expanded=new Set}_t(e,t){return at(this.hass,e,t)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(e){e.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e.entities??[]}}))}_set(e,t,n){this._emit(function(e,t,n,o){if("entity"===n&&(rt(o)||"string"!=typeof o))return e;const a=[...e.entities??[]],r=a[t];if(void 0===r)return e;const i="string"==typeof r?{entity:r}:{...r};rt(o)?delete i[n]:i[n]=o;const s=Object.keys(i);return a[t]=1===s.length&&"entity"===s[0]&&"string"==typeof i.entity?i.entity:i,{...e,entities:a}}(this._asConfig,e,t,n))}_move(e,t){const n=new Set;for(const o of this._expanded)n.add(o===e?t:o===t?e:o);this._expanded=n,this._emit(function(e,t,n){const o=[...e.entities??[]];if(t<0||t>=o.length||t===n)return e;const[a]=o.splice(t,1);return o.splice(Math.max(0,Math.min(n,o.length)),0,a),{...e,entities:o}}(this._asConfig,e,t))}_remove(e){const t=new Set;for(const n of this._expanded)n!==e&&t.add(n>e?n-1:n);this._expanded=t,this._emit(function(e,t){const n=[...e.entities??[]];return t<0||t>=n.length?e:(n.splice(t,1),{...e,entities:n})}(this._asConfig,e))}_toggle(e){const t=new Set(this._expanded);t.delete(e)||t.add(e),this._expanded=t}_add(e){e.stopPropagation();const t=e.detail?.value;"string"==typeof t&&""!==t&&(e.target.value="",this._emit(function(e,t){return{...e,entities:[...e.entities??[],t]}}(this._asConfig,t)))}_formChanged(e,t,n){n.stopPropagation();const o=this.entities?.[e];if(void 0===o)return;const a="string"==typeof o?{entity:o}:o,r=Rt(a,t,n.detail?.value??{});if(r===a)return;const i=[...this.entities??[]],s=Object.keys(r);i[e]=1===s.length&&"entity"===s[0]?r.entity:r,this._emit({type:"",entities:i})}_rowLabel(e){const t=this.hass?.states[e];return t?{text:t.attributes.friendly_name||e,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:e}),missing:!0}:{text:e,missing:!1}}_form(e,t,n,o,a){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${It(n,a)}
      .schema=${o}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(t,a,e)}
    ></ha-form>`}_renderOverrides(e,t){const n=e=>t=>{t.stopPropagation(),e(t.detail?.value)};return R`<div class="overrides">
      ${this._form("entity-attribute",t,e,function(e){let t=Lt.get(e);return t||(t=[{name:"attribute",selector:{attribute:{entity_id:e}}}],Lt.set(e,t)),t}(e.entity),$t)}
      ${this._form("entity-text",t,e,zt,xt)}
      ${this.chartFields?this._form("entity-chart",t,e,this.chartFields.schema,this.chartFields.fields):W}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${e.icon??""}
        @value-changed=${n(e=>this._set(t,"icon",e))}
      ></ha-icon-picker>
      ${Ql.map(o=>R`<cd-limit-field
            data-limit=${o}
            .hass=${this.hass}
            .label=${this._t(`editor_${o}`)}
            .value=${e[o]}
            .defaultLabel=${this._t("editor_card_setting")}
            @value-changed=${n(e=>this._set(t,o,e))}
          ></cd-limit-field>`)}
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${e.severity}
        .unit=${e.unit??this.unit??ec(this.hass,e.entity,e.attribute)}
        @value-changed=${n(e=>this._set(t,"severity",e))}
      ></cd-bands-editor>
      ${this._form("entity-actions",t,e,Ct,St)}
    </div>`}_renderRow(e,t,n){const o=function(e){return"string"==typeof e?e:e.entity}(e),a="string"==typeof e?{entity:e}:e,r=this._rowLabel(o),i=this._expanded.has(t);return R`<div class="entity">
      <span class="label ${r.missing?"missing":""}">${r.text}</span>
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${et(o)}
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
          .disabled=${t===n-1}
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
    </div>`}render(){const e=this.entities??[];return R`${e.map((t,n)=>this._renderRow(t,n,e.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}tc.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chartFields:{attribute:!1},_expanded:{state:!0}},tc.styles=r`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",tc);class nc extends le{constructor(){super(...arguments),this._label=e=>at(this.hass,e),this._computeLabel=e=>at(this.hass,`editor_${e.name}`),this._computeRuleLabel=e=>at(this.hass,`editor_rule_${e.name.slice(e.name.indexOf("_")+1)}`)}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]}),n=t?.constructor;await(n?.getConfigElement?.())}catch{}}()}_commit(e){this._config=e,function(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}(this,e)}_formChanged(e,t){if(t.stopPropagation(),!this._config)return;const n=t.detail?.value??{};this._commit(Rt(this._config,e,n))}_form(e,t,n){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${It(this._config,n)}
      .schema=${t}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(n,e)}
    ></ha-form>`}_panel(e,t){return R`<ha-expansion-panel .header=${this._label(`editor_section_${e}`)} outlined>
      <div class="panel section-${e}">${t}</div>
    </ha-expansion-panel>`}_subChanged(e,t){t.stopPropagation(),this._config&&this._commit(lt(this._config,e,t.detail?.value))}_chartFields(){const e=Nl[this._config?.style??"bar"];return e&&Ol(e)&&this._config?e.entityFields?.(this.hass,this._config):void 0}renderEntities(){return R`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        @value-changed=${e=>this._subChanged(["entities"],e)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(e){const t=this._config?.[e],n={};if(!t||"object"!=typeof t)return n;for(const[o,a]of Object.entries(t))n[`${e}_${o}`]=Array.isArray(a)?a:[a];return n}_ruleChanged(e,t){if(t.stopPropagation(),!this._config)return;const n=t.detail?.value??{},o=this._ruleData(e);let a=this._config;for(const r of Nt[e]){const t=`${e}_${r}`,i=Array.isArray(n[t])?n[t]:[];Bt(o[t]??[],i)||(a=lt(a,[e,r],i.length?i:void 0))}a!==this._config&&this._commit(a)}_ruleForm(e){return R`<div class="rules-heading">${this._label(`editor_${e}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${e}_help`)}</p>
      <ha-form
        data-section=${e}
        .hass=${this.hass}
        .data=${this._ruleData(e)}
        .schema=${Pt(e,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${t=>this._ruleChanged(e,t)}
      ></ha-form>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([e,t])=>R`<cd-limit-field
          data-limit=${e}
          .hass=${this.hass}
          .label=${this._label(`editor_${e}`)}
          .value=${this._config?.[e]}
          .defaultLabel=${t}
          @value-changed=${t=>this._subChanged([e],t)}
        ></cd-limit-field>`)}renderColours(){return R`${this._toggles(vt)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${e=>this._subChanged(["severity"],e)}
      ></cd-bands-editor>`}_firstEntityUnit(){const e=this._config?.entities?.[0];return"string"==typeof e?ec(this.hass,e):e?.unit??ec(this.hass,e?.entity,e?.attribute)}_selectStyle(e){this._config&&this._commit(lt(this._config,["style"],"bar"===e?void 0:e))}renderStyle(){const e=this._config?.style??"bar";return R`${jl.map(t=>{const n=Ve.filter(e=>Nl[e].group===t);return n.length?R`<div class="style-group">${this._label(`editor_group_${t}`)}</div>
        <div class="styles" data-group=${t}>
          ${n.map(t=>{const n=Nl[t],o=Ol(n)?R`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${n.thumbnail()}
                </svg>`:Xt(t);return R`<button
              type="button"
              class="style"
              data-style=${t}
              aria-pressed=${e===t?"true":"false"}
              @click=${()=>this._selectStyle(t)}
            >
              ${o}<span>${this._label(`editor_style_${t}`)}</span>
            </button>`})}
        </div>`:W})}`}renderChart(){const e=Nl[this._config?.style??"bar"];return e&&Ol(e)&&e.editor&&this._config?this._panel("chart",e.editor({hass:this.hass,config:this._config,commit:e=>this._commit(e)})):W}renderDisplay(){return R`${this._toggles(yt)}
    ${this._form("display",function(e){const t=ot(e);return Dt?.language!==t&&(Dt={language:t,schema:Ot(e)}),Dt.schema}(this.hass),_t)}`}_toggles(e){const t=It(this._config,e);return R`<div class="toggles">
      ${e.map(({name:n})=>{const o=this._label(`editor_${n}`),a=!0===t[n];return R`<div class="toggle">
          <span @click=${()=>this._toggle(e,n,!a)}>${o}</span
          ><ha-switch
            data-name=${n}
            aria-label=${o}
            .checked=${et(a)}
            @change=${t=>this._toggle(e,n,t.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(e,t,n){if(!this._config)return;const o=It(this._config,e);this._commit(Rt(this._config,e,{...o,[t]:n}))}renderActions(){return this._form("actions",Ct,bt)}render(){return this._config?R`<div class="title">${this._form("title",Et,gt)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:W}}nc.properties={hass:{attribute:!1},_config:{state:!0}},nc.styles=r`
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",nc);const oc=r`
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
`;console.info("%c CHARTDECK %c 1.4.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const ac={rows:16,tiles:8};function rc(e){const t=ac[e.layout];return Math.max(1,Math.floor((368+t)/((e.minColumnWidth??0)+t)))}class ic extends le{constructor(){super(...arguments),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(e){const t=Object.values(e?.states??{}).filter(e=>e.entity_id.startsWith("sensor.")&&""!==e.state.trim()&&Number.isFinite(Number(e.state))),n=e=>"battery"===e.attributes?.device_class;return t.sort((e,t)=>n(e)!==n(t)?n(e)?-1:1:e.entity_id<t.entity_id?-1:e.entity_id>t.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:t.slice(0,3).map(e=>e.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(e){const t=function(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");const t=e.style??"bar";if(!Ve.includes(t))throw new Error(`Unknown style "${String(t)}". Use one of: ${Ve.join(", ")}`);const n=e.sort??"none";if(!We.includes(n))throw new Error(`Unknown sort "${String(n)}". Use one of: ${We.join(", ")}`);if(void 0!==e.entities&&!Array.isArray(e.entities))throw new Error('"entities" must be a list');const o=(e.entities??[]).map((t,n)=>Qe(t,e,n)),a={name:!0,value:!0,icon:!0,target:!0,legend:!1,...e.show},r=Ge(e.columns,"columns",1),i=Ge(e.limit,"limit",1),s=Fe(e.include,"include"),l=Fe(e.exclude,"exclude");s&&Qe("sensor.chartdeck_check",e,0);const c={style:t,entities:o,hideUnavailable:!0===e.hide_unavailable,cardOptions:e,show:a,sort:n,animate:!1!==e.animate,colorIcon:!0===e.color_icon,legendBands:Xe(e.severity)??qe};return void 0!==e.title&&(c.title=e.title),void 0!==r&&(c.columns=r),void 0!==i&&(c.limit=i),s&&(c.include=s),l&&(c.exclude=l),c}(e),n=Nl[t.style];if(Ol(n)&&n.validate?.(e),this._watched=function(e){const t=new Set;for(const n of e.entities){t.add(n.entity);for(const e of[n.min,n.max,n.target,...n.severity.map(e=>e.from)])"string"==typeof e&&""!==e&&t.add(e)}for(const n of e.legendBands)"string"==typeof n.from&&t.add(n.from);return t}(t),Ol(n))for(const o of n.watch?.(e)??[])this._watched.add(o);this._config&&this._config.style!==t.style&&this._disconnectStyle(),this._config=t}get _styleName(){return this._config?.style??"bar"}get _style(){return Nl[this._styleName]}_legend(e){const t=this._config;if(!t?.show.legend||0===this._count())return[];const n=e?.decimals??1;return Oe(Ka(t.legendBands,this.hass),e=>Io(e,n,this.hass),e?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const e=this._config;if(!e)return 0;const t=this._style,n=16+(e.title?73:0)+(this._legend().length>0?32:0);if(Ol(t))return n+t.height;const o=this._count(),a=void 0!==e.columns?Math.min(e.columns,rc(t)):"rows"===t.layout?1:Math.min(o,t.tilesPerRow??3,rc(t));return n+(0===o?0:Math.ceil(o/Math.max(1,a)))*t.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const e=this._count();if(Ol(this._style))return{columns:12,rows:"auto",min_columns:6,min_rows:2};const t="rows"===this._style.layout;return{columns:t||e<=1?6:12,rows:"auto",min_columns:t?6:3,min_rows:1}}shouldUpdate(e){if(0===e.size)return!0;if([...e.keys()].some(e=>"hass"!==e))return!0;if(!e.has("hass"))return!1;const t=e.get("hass"),n=this.hass;if(!t||!n)return!0;for(const o of this._watched)if(t.states[o]!==n.states[o])return!0;if(this._config?.include){const e=er(this._config,n);if(e.length!==this._matched.length||e.some((e,t)=>e!==this._matched[t]))return!0;for(const o of e)if(t.states[o]!==n.states[o])return!0}return t.themes?.darkMode!==n.themes?.darkMode||t.themes?.theme!==n.themes?.theme||t.locale!==n.locale}willUpdate(){const e=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",e),(e||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const e=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const e=this._config?Nl[this._config.style]:void 0;e&&Ol(e)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const e=this._config?Nl[this._config.style]:void 0;e&&Ol(e)&&e.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle();for(const e of this._detachers.values())e();this._detachers.clear()}_syncActions(){const e=this.shadowRoot;if(!e)return;const t=new Set(e.querySelectorAll(".entity"));for(const[n,o]of this._detachers)t.has(n)||(o(),this._detachers.delete(n));for(const n of t)this._detachers.has(n)||this._detachers.set(n,Ee(n,()=>this._items[Number(n.dataset.index)].config))}_renderEntity(e,t,n,o){const a=this._config,r=Se(e.config),i=function(e){const t=ze(e);return{start:t,end:`color-mix(in srgb, ${t} 80%, #fff)`}}(e.band.color),s=`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${i.start};--c-end:${i.end}`;return R`<div
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
      ${n.render(e,{show:a.show,hass:o})}
    </div>`}render(){const e=this._config;if(!e)return W;const t=this.hass,n=this._style;let o,a,r;const i=t?function(e,t){const n=er(e,t).map((t,n)=>Qe(t,e.cardOptions,n)),o=[...e.entities,...n].map(e=>Qa(e,t));return e.hideUnavailable?o.filter(e=>e.available):o}(e,t):[];if(this._matched=t?er(e,t):[],0!==e.entities.length||e.include)if(t)if(0===i.length)this._items=[],o=R`<div class="hint">${at(t,e.include?"no_matches":"none_available")}</div>`;else{a=i[0];const s=new Map,l=new Set;i.forEach((e,t)=>{s.set(e,l.has(e.entityId)?`${e.entityId}#${t}`:e.entityId),l.add(e.entityId)}),this._items=function(e,t){if("none"===t)return[...e];const n="ascending"===t?1:-1;return e.map((e,t)=>({item:e,index:t})).sort((e,t)=>{if(e.item.available!==t.item.available)return e.item.available?-1:1;if(e.item.available){const o=(e.item.position-t.item.position)*n;if(0!==o)return o}return e.index-t.index}).map(e=>e.item)}(i,e.sort).slice(0,e.limit);const c=this._items.filter(e=>e.available).map(e=>e.display.length);if(r=c.length?Math.max(...c):void 0,Ol(n))o=R`<div class="chart">
          ${n.render({items:this._items,config:e,raw:e.cardOptions,hass:t,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const a="tiles"===n.layout,r=function(e,t){if(void 0===t)return"rows"===e.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const n=(t-1)*ac[e.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${e.minColumnWidth??0}px, 100%), calc((100% - ${n}px) / ${t} - 0.5px)), 1fr))`}(n,e.columns);o=R`<div
          class="entities layout-${n.layout} ${a&&void 0!==e.columns?"has-columns":""}"
          style=${r}
        >
          ${Me(this._items,e=>s.get(e),(e,o)=>this._renderEntity(e,o,n,t))}
        </div>`}}else this._items=[],o=W;else this._items=[],o=R`<div class="hint">${at(t,"no_entities")}</div>`;const s=this._legend(a);return R`<ha-card .header=${e.title}>
      <div
        class="content style-${this._styleName}"
        style=${void 0===r?W:`--cd-value-ch: ${r}`}
      >
        ${o}
      </div>
      ${s.length?R`<div class="legend">
              ${s.map(e=>R`<span class="legend-item"
                    ><span class="dot" style="background:${e.color}"></span>${e.text}</span
                  >`)}
            </div>`:W}
    </ha-card>`}}ic.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},ic.styles=[oc,...Object.values(Nl).map(e=>e.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",ic);const sc=window.customCards??=[];sc.some(e=>"chartdeck-card"===e.type)||sc.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{ic as ChartdeckCard};
