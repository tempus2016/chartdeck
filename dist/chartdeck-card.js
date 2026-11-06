/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let a=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const n=this.t;if(t&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=o.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(n,e))}return e}toString(){return this.cssText}};const i=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new a(o,e,n)},r=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,y=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},v=(e,t)=>!s(e,t),b={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&l(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const i=o?.call(this);a?.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const e=this._$Eu(t,n);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((n,o)=>{if(t)n.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of o){const o=document.createElement("style"),a=e.litNonce;void 0!==a&&o.setAttribute("nonce",a),o.textContent=t.cssText,n.appendChild(o)}})(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const a=(void 0!==n.converter?.toAttribute?n.converter:_).toAttribute(t,n.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=o;const i=a.fromAttribute(t,e.type);this[o]=i??this._$Ej?.get(o)??i,this._$Em=null}}requestUpdate(e,t,n,o=!1,a){if(void 0!==e){const i=this.constructor;if(!1===o&&(a=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??v)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:a},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==a||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=e=>e,k=x.trustedTypes,M=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+E,C=`<${S}>`,O=document,L=()=>O.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,N="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,F=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,D=/"/g,B=/^(?:script|style|textarea|title)$/i,V=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),R=V(1),I=V(2),W=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),q=new WeakMap,Y=O.createTreeWalker(O,129);function G(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,i=0;const r=e.length-1,s=this.parts,[l,c]=((e,t)=>{const n=e.length-1,o=[];let a,i=2===t?"<svg>":3===t?"<math>":"",r=j;for(let s=0;s<n;s++){const t=e[s];let n,l,c=-1,d=0;for(;d<t.length&&(r.lastIndex=d,l=r.exec(t),null!==l);)d=r.lastIndex,r===j?"!--"===l[1]?r=P:void 0!==l[1]?r=U:void 0!==l[2]?(B.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=F):void 0!==l[3]&&(r=F):r===F?">"===l[0]?(r=a??j,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,n=l[1],r=void 0===l[3]?F:'"'===l[3]?D:H):r===D||r===H?r=F:r===P||r===U?r=j:(r=F,a=void 0);const h=r===F&&e[s+1].startsWith("/>")?" ":"";i+=r===j?t+C:c>=0?(o.push(n),t.slice(0,c)+A+t.slice(c)+E+h):t+E+(-2===c?s:h)}return[G(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]})(e,t);if(this.el=X.createElement(l,n),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Y.nextNode())&&s.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(A)){const t=c[i++],n=o.getAttribute(e).split(E),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:n,ctor:"."===r[1]?te:"?"===r[1]?ne:"@"===r[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(E)&&(s.push({type:6,index:a}),o.removeAttribute(e));if(B.test(o.tagName)){const e=o.textContent.split(E),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],L()),Y.nextNode(),s.push({type:2,index:++a});o.append(e[t],L())}}}else if(8===o.nodeType)if(o.data===S)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(E,e+1));)s.push({type:7,index:a}),e+=E.length-1}a++}}static createElement(e,t){const n=O.createElement("template");return n.innerHTML=e,n}}function J(e,t,n=e,o){if(t===W)return t;let a=void 0!==o?n._$Co?.[o]:n._$Cl;const i=z(t)?void 0:t._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),void 0===i?a=void 0:(a=new i(e),a._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=a:n._$Cl=a),void 0!==a&&(t=J(e,a._$AS(e,t.values),a,o)),t}let K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??O).importNode(t,!0);Y.currentNode=o;let a=Y.nextNode(),i=0,r=0,s=n[0];for(;void 0!==s;){if(i===s.index){let t;2===s.type?t=new Q(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new ae(a,this,e)),this._$AV.push(t),s=n[++r]}i!==s?.index&&(a=Y.nextNode(),i++)}return Y.currentNode=O,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),z(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=X.createElement(G(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new K(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new X(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new Q(this.O(L()),this.O(L()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Z}_$AI(e,t=this,n,o){const a=this.strings;let i=!1;if(void 0===a)e=J(this,e,t,0),i=!z(e)||e!==this._$AH&&e!==W,i&&(this._$AH=e);else{const o=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=J(this,o[n+r],t,r),s===W&&(s=this._$AH[r]),i||=!z(s)||s!==this._$AH[r],s===Z?e=Z:e!==Z&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}i&&!o&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class ne extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class oe extends ee{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??Z)===W)return;const n=this._$AH,o=e===Z&&n!==Z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==Z&&(n===Z||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const ie={I:Q},re=x.litHtmlPolyfillSupport;re?.(X,Q),(x.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let le=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const o=n?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=n?.renderBefore??null;o._$litPart$=a=new Q(t.insertBefore(L(),e),e,void 0,n??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};le._$litElement$=!0,le.finalized=!0,se.litElementHydrateSupport?.({LitElement:le});const ce=se.litElementPolyfillSupport;ce?.({LitElement:le}),(se.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=1,he=2,ue=3,pe=4,me=e=>(...t)=>({_$litDirective$:e,values:t});let fe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ge}=ie,ye=e=>e,_e=()=>document.createComment(""),ve=(e,t,n)=>{const o=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=o.insertBefore(_e(),a),i=o.insertBefore(_e(),a);n=new ge(t,i,e,e.options)}else{const t=n._$AB.nextSibling,i=n._$AM,r=i!==e;if(r){let t;n._$AQ?.(e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==i._$AU&&n._$AP(t)}if(t!==a||r){let e=n._$AA;for(;e!==t;){const t=ye(e).nextSibling;ye(o).insertBefore(e,a),e=t}}}return n},be=(e,t,n=e)=>(e._$AI(t,n),e),$e={},xe=(e,t=$e)=>e._$AH=t,we=e=>{e._$AR(),e._$AA.remove()},ke=(e,t,n)=>{const o=new Map;for(let a=t;a<=n;a++)o.set(e[a],a);return o},Me=me(class extends fe{constructor(e){if(super(e),e.type!==he)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let o;void 0===n?n=t:void 0!==t&&(o=t);const a=[],i=[];let r=0;for(const s of e)a[r]=o?o(s,r):r,i[r]=n(s,r),r++;return{values:i,keys:a}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,o]){const a=(e=>e._$AH)(e),{values:i,keys:r}=this.dt(t,n,o);if(!Array.isArray(a))return this.ut=r,i;const s=this.ut??=[],l=[];let c,d,h=0,u=a.length-1,p=0,m=i.length-1;for(;h<=u&&p<=m;)if(null===a[h])h++;else if(null===a[u])u--;else if(s[h]===r[p])l[p]=be(a[h],i[p]),h++,p++;else if(s[u]===r[m])l[m]=be(a[u],i[m]),u--,m--;else if(s[h]===r[m])l[m]=be(a[h],i[m]),ve(e,l[m+1],a[h]),h++,m--;else if(s[u]===r[p])l[p]=be(a[u],i[p]),ve(e,a[h],a[u]),u--,p++;else if(void 0===c&&(c=ke(r,p,m),d=ke(s,h,u)),c.has(s[h]))if(c.has(s[u])){const t=d.get(r[p]),n=void 0!==t?a[t]:null;if(null===n){const t=ve(e,a[h]);be(t,i[p]),l[p]=t}else l[p]=be(n,i[p]),ve(e,a[h],n),a[t]=null;p++}else we(a[u]),u--;else we(a[h]),h++;for(;p<=m;){const t=ve(e,l[m+1]);be(t,i[p]),l[p++]=t}for(;h<=u;){const e=a[h++];null!==e&&we(e)}return this.ut=r,xe(e,l),W}}),Ae=e=>!!e&&"none"!==e.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee(e){return Ae(e.tap_action)||Ae(e.hold_action)||Ae(e.double_tap_action)}function Se(e,t){let n,o,a=0,i=0,r=!1,s=!1;const l=n=>{const o=t(),a="tap"===n?o.tap_action:"hold"===n?o.hold_action:o.double_tap_action;Ae(a)&&e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:o,action:n}}))},c=()=>{void 0!==n&&clearTimeout(n),n=void 0},d=e=>{const o=e;o.button>0||(r=!0,s=!1,a=o.clientX,i=o.clientY,c(),Ae(t().hold_action)&&(n=setTimeout(()=>{n=void 0,s=!0,l("hold")},500)))},h=e=>{if(!r)return;const t=e;Math.hypot(t.clientX-a,t.clientY-i)>10&&(c(),r=!1)},u=()=>{c(),r=!1},p=()=>{const e=r;c(),r=!1,e&&!s?Ae(t().double_tap_action)?void 0!==o?(clearTimeout(o),o=void 0,l("double_tap")):o=setTimeout(()=>{o=void 0,l("tap")},250):l("tap"):s=!1},m=e=>{const t=e;t.repeat||"Enter"!==t.key&&" "!==t.key||(" "===t.key&&t.preventDefault(),l("tap"))},f=e=>{Ae(t().hold_action)&&e.preventDefault()};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",h),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",u),e.addEventListener("pointerleave",u),e.addEventListener("keydown",m),e.addEventListener("contextmenu",f),()=>{c(),void 0!==o&&clearTimeout(o),o=void 0,e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",h),e.removeEventListener("pointerup",p),e.removeEventListener("pointercancel",u),e.removeEventListener("pointerleave",u),e.removeEventListener("keydown",m),e.removeEventListener("contextmenu",f)}}const Ce={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function Oe(e){if(Object.prototype.hasOwnProperty.call(Ce,e)){const{variable:t,fallback:n}=Ce[e];return`var(${t}, ${n})`}return e}const Le=new Set(["amber"]);function ze(e){if(Object.prototype.hasOwnProperty.call(Ce,e))return Le.has(e)?"dark":"light";const t=function(e){const t=e.trim().toLowerCase(),n=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(n){const e=n[1].length<=4?[...n[1]].map(e=>e+e).join(""):n[1],[t,o,a]=[0,2,4].map(t=>parseInt(e.slice(t,t+2),16));return[t,o,a,8===e.length?parseInt(e.slice(6,8),16)/255:1]}const o=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(t);if(o){const[e,t,n]=[o[1],o[2],o[3]].map(e=>Math.min(255,Number(e))),a=void 0===o[4]?1:Number(o[4])/(o[5]?100:1);return[e,t,n,Math.min(1,a)]}}(e);return t?t[3]<.5?"theme":function([e,t,n]){const o=e=>{const t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return.2126*o(e)+.7152*o(t)+.0722*o(n)}([t[0],t[1],t[2]])>.4?"dark":"light":"light"}function Te(e,t){let n=t[0];for(const o of t){if(!(o.from<=e))break;n=o}return n}const Ne={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},je=["label","area","floor","device_class","domain","entity"];function Pe(e,t){if(null==e)return;if("object"!=typeof e||Array.isArray(e))throw new Error(`"${t}" must list what to match, such as "area" or "device_class"`);const n="include"===t?je.filter(e=>"entity"!==e):je,o={};for(const[a,i]of Object.entries(e)){if(!n.includes(a))throw new Error(`"${t}" can't match on "${a}". Use: ${n.join(", ")}`);const e=(Array.isArray(i)?i:[i]).filter(e=>null!=e&&""!==e);if(e.some(e=>"string"!=typeof e))throw new Error(`"${t}.${a}" must be text or a list of text`);e.length&&(o[a]=e)}return Object.keys(o).length?o:void 0}function Ue(e){const t=e.state;return"unavailable"===t||"unknown"===t||""!==t.trim()&&Number.isFinite(Number(t))}function Fe(e,t){const n=e.entity_id,o=t.entities?.[n],a=o?.device_id?t.devices?.[o.device_id]:void 0,i=o?.area_id??a?.area_id??void 0,r=e.attributes?.device_class;return{label:[...o?.labels??[],...a?.labels??[]],area:i,floor:i?t.areas?.[i]?.floor_id??void 0:void 0,device_class:"string"==typeof r?r:void 0,domain:n.slice(0,n.indexOf(".")),entity:n}}function He(e,t,n){const o=e[t],a=n[t];return Array.isArray(a)?a.some(e=>o.includes(e)):void 0!==a&&o.includes(a)}function De(e,t){return Object.keys(e).every(n=>He(e,n,t))}function Be(e,t){return!!e&&Object.keys(e).some(n=>He(e,n,t))}const Ve=new WeakMap;const Re=["bar","thin","segmented","tank","ring","needle","arc","line","column","area","combined","pie","rings","pictograph","waffle"],Ie=[{from:-1/0,color:"primary"}],We=["none","ascending","descending"];function Ze(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"==typeof e&&""!==e.trim()){const t=Number(e);return Number.isFinite(t)?t:void 0}}function qe(e,t){if(null==e||""===e)return;const n=Ze(e);if(void 0!==n)return n;if("string"==typeof e)return e;throw new Error(`"${t}" must be a number or an entity id`)}function Ye(e,t,n,o=1/0){if(null==e||""===e)return;const a=Ze(e);if(void 0===a||!Number.isInteger(a)||a<n||a>o){throw new Error(`"${t}" must be a whole number ${o===1/0?`of at least ${n}`:`from ${n} to ${o}`}`)}return a}function Ge(e){if(null==e)return;if(!Array.isArray(e))throw new Error('"severity" must be a list of bands');if(0===e.length)return;const t=e.map((e,t)=>{let n;try{n=qe(e?.from,"from")}catch{n=void 0}if(void 0===n)throw new Error(`Severity band ${t+1}: "from" must be a number or an entity id`);if("string"!=typeof e.color||!e.color)throw new Error(`Severity band ${t+1}: "color" is required`);return{...e,from:n}});return t.every(e=>"number"==typeof e.from)?t.sort((e,t)=>e.from-t.from):t}function Xe(e,t,n){if(null==e)return{action:t};if("object"!=typeof e||"string"!=typeof e.action)throw new Error(`"${n}" must have an "action"`);return e}function Je(e,t){return void 0!==e?e:t}function Ke(e,t,n){const o="string"==typeof e?{entity:e}:e;if(!o||"object"!=typeof o||"string"!=typeof o.entity||!o.entity)throw new Error(`Entity ${n+1} needs an "entity" id`);if(void 0!==o.attribute&&null!==o.attribute&&"string"!=typeof o.attribute)throw new Error(`Entity ${n+1}: "attribute" must be an attribute name`);const a=Je(qe(o.min,"min"),qe(t.min,"min"))??0,i=Je(qe(o.max,"max"),qe(t.max,"max"))??100;if("number"==typeof a&&"number"==typeof i&&a>=i)throw new Error(`"max" (${i}) must be greater than "min" (${a})`);const r={...o,entity:o.entity,min:a,max:i,severity:Ge(o.severity)??Ge(t.severity)??Ie,tap_action:Xe(Je(o.tap_action,t.tap_action),"more-info","tap_action"),hold_action:Xe(Je(o.hold_action,t.hold_action),"none","hold_action"),double_tap_action:Xe(Je(o.double_tap_action,t.double_tap_action),"none","double_tap_action")},s=Je(o.name,t.name),l=Je(o.icon,t.icon),c=Je(o.unit,t.unit),d=Je(qe(o.target,"target"),qe(t.target,"target")),h=Je(Ye(o.decimals,"decimals",0,20),Ye(t.decimals,"decimals",0,20));return void 0!==s&&(r.name=s),void 0!==l&&(r.icon=l),void 0!==c&&(r.unit=c),void 0!==d&&(r.target=d),void 0!==h&&(r.decimals=h),o.attribute||delete r.attribute,r}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qe=me(class extends fe{constructor(e){if(super(e),e.type!==ue&&e.type!==de&&e.type!==pe)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===W||t===Z)return t;const n=e.element,o=e.name;if(e.type===ue){if(t===n[o])return W}else if(e.type===pe){if(!!t===n.hasAttribute(o))return W}else if(e.type===de&&n.getAttribute(o)===t+"")return W;return xe(e),t}}),et={en:{entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours"}};function tt(e,t){et[e]={...et[e],...t}}function nt(e){return(e?.locale?.language??e?.language??"en").split("-")[0]}function ot(e,t,n){const o=nt(e),a=et[o]?.[t]??et.en[t]??t;return n?a.replace(/\{(\w+)\}/g,(e,t)=>t in n?String(n[t]):e):a}function at(e){return null==e||""===e}function it(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function rt(e,t,n){const[o,...a]=t,i=function(e,t){return Array.isArray(e)?[...e]:it(e)?{...e}:"number"==typeof t?[]:{}}(e,o),r=i,s=a.length?rt(r[o],a,n):n,l=a.length>0&&it(s)&&0===Object.keys(s).length;return at(s)?Array.isArray(i)&&"number"==typeof o?i.splice(o,1):delete r[o]:l&&it(i)?delete r[o]:r[o]=s,i}function st(e,t,n){return 0===t.length||at(n)&&void 0===function(e,t){let n=e;for(const o of t){if("object"!=typeof n||null===n)return;n=n[o]}return n}(e,t)?e:rt(e,t,n)}function lt(e,t){const n=e;return{width:n.line_width??t.line_width??2.5,dots:n.dots??!0===t.dots,onTop:!0===n.on_top}}function ct(e,t){return[...e.filter(e=>!t(e)),...e.filter(t)]}function dt(e){return e.map(([e,t])=>`M${Math.round(100*e)/100},${Math.round(100*t)/100}h0`).join("")}function ht(e){return Math.round(10*(e+3.5))/10}function ut(e,t){if(void 0!==e&&("number"!=typeof e||!Number.isFinite(e)||e<.5||e>12))throw new Error(`${t} must be a number from 0.5 to 12`)}function pt(e,t){if(void 0!==e&&"boolean"!=typeof e)throw new Error(`${t} must be true or false`)}function mt(e){ut(e.line_width,'"line_width"'),pt(e.dots,'"dots"');for(const t of e.entities??[])"object"==typeof t&&(ut(t.line_width,`"line_width" of ${t.entity}`),pt(t.dots,`"dots" of ${t.entity}`),pt(t.on_top,`"on_top" of ${t.entity}`))}const ft=[{name:"title",path:["title"]}],gt=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],yt=[{name:"color_icon",path:["color_icon"],default:!1}],_t=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],vt=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],bt=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],$t=[{name:"attribute",path:["attribute"]}],xt=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],wt={number:{min:.5,max:12,step:.5,mode:"box",unit_of_measurement:"px"}},kt=new Map;function Mt(e){let t=kt.get(e);return t||(t=[...xt,{name:"dots",path:["dots"],default:e}],kt.set(e,t)),t}const At=vt.map(({name:e,path:t})=>({name:e,path:t})),Et=[{name:"title",selector:{text:{}}}],St=vt.map(({name:e})=>({name:e,selector:{ui_action:{}}})),Ct=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],Ot=new Map;let Lt;function zt(e){const t=nt(e);if(Lt?.language!==t){const n=t=>ot(e,t);Lt={language:t,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(e=>({value:e,label:n(`editor_curve_${e}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:wt},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return Lt.schema}function Tt(e){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(t=>({value:t,label:ot(e,`editor_sort_${t}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const Nt={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function jt(e,t){const n=e=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:e}});switch(e){case"device_class":return n(t.deviceClasses);case"domain":return n(t.domains);case"entity":return{entity:{multiple:!0}};default:return{[e]:{multiple:!0}}}}const Pt=new Map;function Ut(e,t){const n=function(e){const t=new Set,n=new Set;for(const o of Object.values(e?.states??{})){const e=o.attributes?.device_class;"string"==typeof e&&e&&t.add(e),n.add(o.entity_id.slice(0,o.entity_id.indexOf(".")))}return{deviceClasses:[...t].sort(),domains:[...n].sort()}}(t),o=`${n.deviceClasses.join()}|${n.domains.join()}`,a=Pt.get(e);if(a?.key===o)return a.schema;const i=Nt[e].map(t=>({name:`${e}_${t}`,selector:jt(t,n)}));return Pt.set(e,{key:o,schema:i}),i}let Ft;function Ht(e,t){let n=e;for(const o of t){if("object"!=typeof n||null===n)return;n=n[o]}return n}function Dt(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(Array.isArray(e)!==Array.isArray(t))return!1;const n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&n.every(n=>Dt(e[n],t[n]))}function Bt(e,t){const n={};for(const o of t){const t=Ht(e,o.path)??o.default;void 0!==t&&(n[o.name]=t)}return n}function Vt(e,t,n){const o=Bt(e,t);let a=e;for(const i of t){const e=n[i.name];Dt(o[i.name],e)||(a=st(a,i.path,void 0!==i.default&&Dt(e,i.default)?void 0:e))}return a}const Rt="var(--divider-color, rgba(127, 127, 127, 0.3))",It="var(--primary-color, #03a9f4)",Wt="var(--secondary-text-color, #727272)";function Zt(e,t,n,o){const a=(o-90)*Math.PI/180;return[(e+n*Math.cos(a)).toFixed(2),(t+n*Math.sin(a)).toFixed(2)]}function qt(e,t,n,o){return Zt(e,t,n,o).join(" ")}function Yt(e,t,n,o,a){const i=a-o>180?1:0;return`M ${qt(e,t,n,o)} A ${n} ${n} 0 ${i} 1 ${qt(e,t,n,a)}`}function Gt(e){return R`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(e){switch(e){case"bar":return I`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${Rt} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${It} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${Rt} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${It} />`;case"thin":return I`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${Wt} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${Rt} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${It} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${Wt} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${Rt} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${It} />`;case"segmented":return I`${[0,1].map(e=>Array.from({length:8},(t,n)=>I`<rect x=${6+6.75*n} y=${0===e?9:23} width="5" height="9" rx="1.5"
            fill=${n<(0===e?6:3)?It:Rt} />`))}`;case"tank":return I`${[14,36].map((e,t)=>I`
          <rect x=${e} y="5" width="14" height="30" rx="4" fill=${Rt} />
          <rect x=${e} y=${0===t?13:23} width="14" height=${0===t?22:12} rx="4" fill=${It} />`)}`;case"ring":return I`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${Rt} stroke-width="5" />
        <path d=${Yt(32,20,14,0,250)} fill="none" stroke=${It} stroke-width="5" stroke-linecap="round" />`;case"arc":return I`
        <path d=${Yt(32,21,14,-135,135)} fill="none" stroke=${Rt} stroke-width="5" stroke-linecap="round" />
        <path d=${Yt(32,21,14,-135,40)} fill="none" stroke=${It} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[e,t]=Zt(32,32,18,25);return I`
        <path d=${Yt(32,32,22,-90,90)} fill="none" stroke=${Rt} stroke-width="5" />
        <path d=${Yt(32,32,22,-90,25)} fill="none" stroke=${It} stroke-width="5" />
        <line x1="32" y1="32" x2=${e} y2=${t} stroke=${Wt} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${Wt} />`}default:return I``}}(e)}
  </svg>`}function Xt(e){let t=1/0,n=-1/0;for(const o of e)for(const e of o)for(const o of[e.v,e.min,e.max])"number"==typeof o&&(o<t&&(t=o),o>n&&(n=o));return t===1/0?void 0:[t,n]}function Jt(e,t){const[n,o]=e,[a,i]=t,r=o===n?0:(i-a)/(o-n);return e=>a+(e-n)*r}const Kt=["outside","inside"],Qt=!0,en=!0,tn="outside",nn=!0,on=!1,an=e=>"number"==typeof e&&Number.isFinite(e);function rn(e){const t=e;for(const n of["x_axis","y_axis"])if(void 0!==t[n]&&"boolean"!=typeof t[n])throw new Error(`"${n}" must be true or false`);if(void 0!==t.axis_labels&&!Kt.includes(t.axis_labels))throw new Error(`"axis_labels" must be one of: ${Kt.join(", ")}`);if(void 0!==t.gridlines){const e=t.gridlines;if("object"!=typeof e||null===e||Array.isArray(e))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const t of["horizontal","vertical"])if(void 0!==e[t]&&"boolean"!=typeof e[t])throw new Error(`"gridlines.${t}" must be true or false`)}for(const n of["y_min","y_max"])if(void 0!==t[n]&&!an(t[n]))throw new Error(`"${n}" must be a number`);if(an(t.y_min)&&an(t.y_max)&&t.y_min>=t.y_max)throw new Error('"y_min" must be below "y_max"')}function sn(e){const t=e,n=t.gridlines??{};return{x:t.x_axis??Qt,y:t.y_axis??en,labels:t.axis_labels??tn,horizontal:n.horizontal??nn,vertical:n.vertical??on,min:an(t.y_min)?t.y_min:void 0,max:an(t.y_max)?t.y_max:void 0}}function ln(e){return Math.max(0,-Math.floor(Math.log10(e)+1e-9))}const cn=e=>Number(e.toPrecision(12));function dn(e,t,n){let[o,a]=function([e,t],n=.08){if(e===t)return[e-1,t+1];const o=(t-e)*n;return[e-o,t+o]}(e??[0,1]);void 0!==t.min&&(o=t.min),void 0!==t.max&&(a=t.max),a<=o&&(void 0!==t.min?a=o+Math.max(1,.1*Math.abs(o)):o=a-Math.max(1,.1*Math.abs(a)));const i=function(e,t){if(!(e>0&&Number.isFinite(e)))return 1;const n=e/Math.max(1,t),o=10**Math.floor(Math.log10(n));for(const a of[1,2,5])if(a*o>=n*(1-1e-9))return a*o;return 10*o}(a-o,n);void 0===t.min&&(o=cn(Math.floor(o/i+1e-9)*i)),void 0===t.max&&(a=cn(Math.ceil(a/i-1e-9)*i));const r=[];for(let s=Math.ceil(o/i-1e-9);s*i<=a+1e-9*i;s++)r.push(cn(s*i));return{domain:[o,a],ticks:r,decimals:ln(i)}}const hn=6e4,un=36e5,pn=864e5,mn=[...[1,5,10,15,30].map(e=>({unit:"minute",n:e,ms:e*hn})),...[1,2,3,6,12].map(e=>({unit:"hour",n:e,ms:e*un})),...[1,2,7].map(e=>({unit:"day",n:e,ms:e*pn})),...[1,2,3,6].map(e=>({unit:"month",n:e,ms:30.44*e*pn})),...[1,2,5,10,20,50,100].map(e=>({unit:"year",n:e,ms:365.25*e*pn}))];const fn=e=>-new Date(e).getTimezoneOffset()*hn;function gn(e){if(!e)return fn;let t;try{t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return fn}return e=>{const n={};for(const o of t.formatToParts(e))n[o.type]=Number(o.value);return Date.UTC(n.year,n.month-1,n.day,n.hour%24,n.minute,n.second)-1e3*Math.floor(e/1e3)}}function yn(e,t){return e-t(e-t(e))}function _n(e,t,n,o){const a=[],i=e.end+t(e.end);for(let r=n,s=0;r<=i&&s<1e3;r=o(r),s++){const n=yn(r,t);n>=e.start&&n<=e.end&&n!==a[a.length-1]&&a.push(n)}return a}function vn(e,t,n=fn){const{unit:o,n:a}=function(e,t){return mn.find(n=>e/n.ms<=Math.max(1,t))??mn[mn.length-1]}(e.end-e.start,t),i=e.start+n(e.start);if("minute"===o||"hour"===o||"day"===o&&7!==a){const t=a*("minute"===o?hn:"hour"===o?un:pn);return{unit:o,ticks:_n(e,n,Math.ceil(i/t)*t,e=>e+t)}}if("day"===o){const t=Math.ceil(i/pn);return{unit:o,ticks:_n(e,n,(t+((4-t)%7+7)%7)*pn,e=>e+7*pn)}}const r=new Date(i);if("month"===o){let t=r.getUTCFullYear(),s=r.getUTCMonth();Date.UTC(t,s)<i&&(s+=1),s=Math.ceil(s/a)*a,t+=Math.floor(s/12),s%=12;const l=e=>{const t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+a)};return{unit:o,ticks:_n(e,n,Date.UTC(t,s),l)}}let s=r.getUTCFullYear();return Date.UTC(s,0)<i&&(s+=1),s=Math.ceil(s/a)*a,{unit:o,ticks:_n(e,n,Date.UTC(s,0),e=>Date.UTC(new Date(e).getUTCFullYear()+a,0))}}function bn(e){return"server"===e?.locale?.time_zone?e.config?.time_zone:void 0}function $n(e){const t=e?.locale?.time_format;return"12"===t||"24"!==t&&void 0}const xn=new Map;function wn(e,t,n){const o=`${e}|${t}|${JSON.stringify(n)}`;let a=xn.get(o);if(!a){try{a=new Intl.DateTimeFormat(e,{...n,timeZone:t})}catch{a=new Intl.DateTimeFormat(void 0,n)}xn.set(o,a)}return a}function kn(e,t,n=!1){return wn(t?.locale?.language??"en",bn(t),{hour:"numeric",minute:"2-digit",...n?{second:"2-digit"}:{},hour12:$n(t)}).format(e)}function Mn(e,t){return wn(t?.locale?.language??"en",bn(t),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:$n(t)}).format(e)}function An(e,t,n,o,a){const i=o?.locale?.language??"en",r=bn(o),s=e+(a??gn(r))(e),l=new Date(s),c=s%pn===0;switch(t){case"minute":case"hour":return c?wn(i,r,{weekday:"short"}).format(e):kn(e,o);case"day":return n<=7*pn?wn(i,r,{weekday:"short"}).format(e):wn(i,r,{day:"numeric",month:"short"}).format(e);case"month":return wn(i,r,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(e);default:return wn(i,r,{year:"numeric"}).format(e)}}function En(e,t){if(e.length<=t)return e;const n=[];let o=[];for(const i of e)null===i.v?(o.length&&n.push(o),n.push([i]),o=[]):o.push(i);o.length&&n.push(o);const a=e.length;return n.flatMap(e=>null===e[0].v?e:function(e,t){if(e.length<=t||t<3)return e;const n=[e[0]],o=(e.length-2)/(t-2);let a=0;for(let i=0;i<t-2;i++){const t=Math.floor(i*o)+1,r=Math.min(Math.floor((i+1)*o)+1,e.length-1),s=r,l=Math.min(Math.floor((i+2)*o)+1,e.length);let c=0,d=0;const h=Math.max(1,l-s);for(let n=s;n<l;n++)c+=e[n].t,d+=e[n].v;c/=h,d/=h;let u=t,p=-1;const m=e[a];for(let n=t;n<r;n++){const t=Math.abs((m.t-c)*(e[n].v-m.v)-(m.t-e[n].t)*(d-m.v));t>p&&(p=t,u=n)}n.push(e[u]),a=u}return n.push(e[e.length-1]),n}(e,Math.max(3,Math.round(e.length/a*t))))}const Sn=36e5,Cn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],On=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],Ln=new Map;function zn(e){let t=Ln.get(e);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),Ln.set(e,t)),t}function Tn(e,t){const n={};for(const o of zn(t).formatToParts(new Date(e)))n[o.type]=o.value;return{year:Number(n.year),month:Number(n.month),day:Number(n.day),hour:Number(n.hour)%24,minute:Number(n.minute),second:Number(n.second),weekday:Cn.indexOf(n.weekday)+1}}function Nn(e,t){const n=Tn(e,t);return Date.UTC(n.year,n.month-1,n.day,n.hour,n.minute,n.second)-1e3*Math.floor(e/1e3)}function jn(e,t,n,o=1,a=0,i=0,r=0){const s=Date.UTC(t,n-1,o,a,i,r),l=new Date(s),c=Nn(s-24*Sn,e),d=Nn(s+24*Sn,e),h=[s-c,s-d].filter(t=>{const n=Tn(t,e);return n.year===l.getUTCFullYear()&&n.month===l.getUTCMonth()+1&&n.day===l.getUTCDate()&&n.hour===l.getUTCHours()&&n.minute===l.getUTCMinutes()&&n.second===l.getUTCSeconds()});return h.length?Math.min(...h):function(e,t,n,o){for(;t-e>1e3;){const a=1e3*Math.floor((e+t)/2e3);Nn(a,o)===n?e=a:t=a}return t}(s-d,s-c,c,e)}function Pn(e,t,n){const o=new Date(Date.UTC(e,t-1,n));return{year:o.getUTCFullYear(),month:o.getUTCMonth()+1,day:o.getUTCDate()}}function Un(e,t,n){const o=Tn(t,n.timeZone);switch(e){case"hour":return t-t%1e3-1e3*(60*o.minute+o.second);case"day":return jn(n.timeZone,o.year,o.month,o.day);case"week":{const e=(o.weekday-n.firstDay+7)%7,t=Pn(o.year,o.month,o.day-e);return jn(n.timeZone,t.year,t.month,t.day)}case"month":return jn(n.timeZone,o.year,o.month,1);case"year":return jn(n.timeZone,o.year,1,1)}}function Fn(e,t,n,o){if("hour"===e)return t+n*Sn;const a=Tn(t,o.timeZone);let{year:i,month:r,day:s}=a;if("day"===e)({year:i,month:r,day:s}=Pn(i,r,s+n));else if("week"===e)({year:i,month:r,day:s}=Pn(i,r,s+7*n));else{const t=Pn(i,r+("year"===e?12*n:n),1),o=Pn(t.year,t.month+1,0).day;({year:i,month:r}=t),s=Math.min(s,o)}return jn(o.timeZone,i,r,s,a.hour,a.minute,a.second)}function Hn(e){try{const t=new Intl.Locale(e),n=t.getWeekInfo?.().firstDay??t.weekInfo?.firstDay;return"number"==typeof n&&n>=1&&n<=7?n:1}catch{return 1}}function Dn(e){const t=e?.locale,n=e?.config?.time_zone,o="server"===t?.time_zone&&function(e){if("string"!=typeof e||""===e)return!1;try{return zn(e),!0}catch{return!1}}(n)?n:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",a=On.indexOf(String(t?.first_weekday??"language"))+1;return{timeZone:o,firstDay:a>0?a:Hn(t?.language??e?.language??"en")}}const Bn=["hour","day","week","month"],Vn=["day","week","month","year"],Rn=["now","end"],In={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},Wn={hour:36e5,day:864e5,week:6048e5};function Zn(e,t,n){const o="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof o||!Number.isInteger(o)||o<t)throw new Error(n);return o}function qn(e,t,n){if(!t.includes(e))throw new Error(`"${n}" must be one of: ${t.join(", ")}`);return e}function Yn(e){if(null==e)return In;if("object"!=typeof e||Array.isArray(e))throw new Error('"period" must have "last" and "unit"');const t=e,n={last:Zn(t.last??In.last,1,'"period.last" must be a whole number of 1 or more'),unit:qn(t.unit??In.unit,Bn,"period.unit"),offset:Zn(t.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==t.navigate&&!0===t.navigate,until:qn(t.until??"now",Rn,"period.until")};if(void 0!==t.navigate&&"boolean"!=typeof t.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==t.calendar&&(n.calendar=qn(t.calendar,Vn,"period.calendar")),n}function Gn(e,t,n){if("month"===e.unit){if(n)return{start:Fn("month",t,-e.last,n),end:t};const o=new Date(t);return o.setMonth(o.getMonth()-e.last),{start:o.getTime(),end:t}}return{start:t-e.last*Wn[e.unit],end:t}}function Xn(e,t,n,o=0){const a=Math.max(0,e.offset+o);if(e.calendar){const o=e.calendar,i=Fn(o,Un(o,t,n),-a,n),r=Fn(o,i,1,n);return{start:i,end:0===a&&"now"===e.until?t:r,live:0===a,back:a}}if("month"===e.unit){return{...Gn(e,0===a?t:Fn("month",t,-a*e.last,n),n),live:0===a,back:a}}const i=e.last*Wn[e.unit];return{start:t-(a+1)*i,end:t-a*i,live:0===a,back:a}}const Jn=new WeakMap;function Kn(e,t){const n=Jn.get(e);return n&&n.key===JSON.stringify(t)?n.steps:0}function Qn(e,t,n){Jn.set(e,{key:JSON.stringify(t),steps:Math.max(-t.offset,n)})}function eo(e){if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function to(e,t){const n=[];for(const o of e??[]){const e=o.lu??o.lc;if(void 0===e)continue;const a=t?o.a?.[t]:o.s;n.push({t:Math.round(1e3*e),v:eo(a)})}return n}const no=e=>"number"==typeof e&&Number.isFinite(e)?e:null;function oo(e,t){return(e??[]).map(e=>{const n="number"==typeof e.start?e.start:Date.parse(e.start);let o;return o="change"===t?no(e.change):"state"===t?no(e.state)??no(e.mean):"min"===t||"max"===t?no(e[t])??no(e.mean)??no(e.state):no(e.mean)??no(e.state),{t:n,v:o,min:e.min??null,max:e.max??null}})}function ao(e){const t=(e.end-e.start)/864e5;return t<=2?"5minute":t<=35?"hour":t<=400?"day":"month"}function io(e){return{period:ao(e),types:["mean","min","max","state"],value:"mean"}}function ro(e){return e.attribute?`${e.entity}|${e.attribute}`:e.entity}const so=["hour","day","week","month"],lo=["mean","sum","min","max","first","last","change"];function co(e){if(void 0!==e.aggregate&&!lo.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${lo.join(", ")}`);if(void 0!==e.group_by){if(!so.includes(e.group_by))throw new Error(`"group_by" must be one of: ${so.join(", ")}`);return{unit:e.group_by,aggregate:e.aggregate??"mean"}}}function ho(e,t,n,o,a=!1){const i="change"===n?function(e){let t=null;return e.map(e=>{if(null===e.v)return null;if(null===t)return t=e.v,0;if(e.v>=t){const n=e.v-t;return t=e.v,n}return t-e.v>.1*Math.abs(t)?(t=e.v,Math.max(0,e.v)):0})}(e):[],r=[];let s=0;for(let l=0;l+1<t.length;l++){const c=t[l],d=t[l+1],h=Math.min(d,o);for(;s<e.length&&e[s].t<c;)s++;const u={t:c,end:d,v:null};if(r.push(u),h<=c)continue;const p=[],m=e[s-1];let f=s;const g=f<e.length&&e[f].t<h?e[f].t:h;for(m&&g>c&&p.push({v:m.v,dt:g-c,reading:!1,carried:!0,up:0});f<e.length&&e[f].t<h;f++){const t=f+1<e.length&&e[f+1].t<h?e[f+1].t:h,n=e[f];p.push({v:n.v,dt:t-n.t,reading:!0,carried:!0===n.carried,up:i[f]??null})}const y=p.filter(e=>null!==e.v);if(0===y.length)continue;const _=y.map(e=>e.v);switch(a&&(u.min=Math.min(..._),u.max=Math.max(..._)),n){case"mean":{const e=y.reduce((e,t)=>e+t.dt,0);u.v=e>0?y.reduce((e,t)=>e+t.v*t.dt,0)/e:_.reduce((e,t)=>e+t,0)/_.length;break}case"min":u.v=Math.min(..._);break;case"max":u.v=Math.max(..._);break;case"first":u.v=_[0];break;case"last":u.v=_[_.length-1];break;case"sum":{const e=y.filter(e=>e.reading&&!e.carried);u.v=e.length?e.reduce((e,t)=>e+t.v,0):null;break}case"change":u.v=y.reduce((e,t)=>e+(t.reading&&!t.carried?t.up??0:0),0)}}return r}const uo={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},po={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};const mo={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class fo{constructor(e){this.onChange=e,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(e,t,n,o,a={}){const i=a.live??!0,r="statistics"===o?a.statistics??io(n):void 0,s=`${o}|${t.map(ro).join(",")}|${r?JSON.stringify(r):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>yo,c=void 0!==this.pausedAt&&"statistics"===o&&i;this.pausedAt=void 0;const d=Math.max(6e4,(n.end-n.start)/100),h=n.start<this.loadedFrom||(i?this.loadedTo!==1/0:n.end>this.loadedTo+d);(s!==this.shape||h||l&&i||c)&&(this.shape=s,this.load(e,t,n,i,r)),"ready"===this.status&&"history"===o&&this.loadedTo===1/0&&this.appendLive(e,t);const u=new Map;for(const[p,m]of this.data)u.set(p,go(m,n));return{status:this.status,data:u,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(e,t,n,o,a){const i=++this.generation;this.status="loading",this.loadedFrom=n.start,this.loadedTo=o?1/0:n.end,clearTimeout(this.timer);const r=a?async function(e,t,n,o=io(n)){const a=new Map;if(!e.callWS||0===t.length)return a;const i=[...new Set(t.map(e=>e.entity))],r=await e.callWS({type:"recorder/statistics_during_period",start_time:new Date(n.start).toISOString(),end_time:new Date(n.end).toISOString(),statistic_ids:i,period:o.period,types:o.types});for(const s of t)a.set(ro(s),oo(r?.[s.entity],o.value));return a}(e,t,n,a):async function(e,t,n){const o=new Map;if(!e.callWS||0===t.length)return o;const a={type:"history/history_during_period",start_time:new Date(n.start).toISOString(),end_time:new Date(n.end).toISOString(),significant_changes_only:!1},i=[...new Set(t.filter(e=>!e.attribute).map(e=>e.entity))],r=[...new Set(t.filter(e=>e.attribute).map(e=>e.entity))],s=[];return i.length&&s.push(e.callWS({...a,entity_ids:i,minimal_response:!0,no_attributes:!0}).then(e=>{for(const t of i)o.set(ro({entity:t}),to(e?.[t]))})),r.length&&s.push(e.callWS({...a,entity_ids:r,no_attributes:!1}).then(e=>{for(const n of t.filter(e=>e.attribute))o.set(ro(n),to(e?.[n.entity],n.attribute))})),await Promise.all(s),o}(e,t,n);r.then(n=>{if(i===this.generation){this.data=n,this.status="ready",this.error=void 0,this.seen.clear();for(const n of t)this.seen.set(ro(n),e.states[n.entity]);a&&o&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},mo[a.period])),this.onChange()}},e=>{i===this.generation&&(this.status="error",this.error=e instanceof Error?e.message:String(e?.message??e),this.onChange())})}appendLive(e,t){for(const n of t){const t=ro(n),o=e.states[n.entity];if(!o||this.seen.get(t)===o)continue;this.seen.set(t,o);const a=Date.parse(o.last_updated??o.last_changed??"")||Date.now(),i=this.data.get(t)??[],r=i[i.length-1];r&&a<=r.t||(i.push({t:a,v:eo(n.attribute?o.attributes?.[n.attribute]:o.state)}),this.data.set(t,i))}}}function go(e,t){let n=0;for(;n<e.length&&e[n].t<t.start;)n++;const o=e.slice(n).filter(e=>e.t<=t.end),a=e[n-1];return a?[{...a,t:t.start,carried:!0},...o]:o}const yo=6e4,_o=new WeakMap;const vo=["smooth","straight","step"],bo=e=>(Math.round(100*e)/100).toString();function $o(e){return e.map(([e,t],n)=>`${n?"L":"M"}${bo(e)},${bo(t)}`).join("")}function xo(e,t){return 0===e.length?"":1===e.length?`M${bo(e[0][0])},${bo(e[0][1])}h0`:"smooth"===t?function(e){const t=e.length;if(t<3)return $o(e);const n=[],o=[];for(let r=0;r<t-1;r++)n.push(e[r+1][0]-e[r][0]),o.push(0===n[r]?0:(e[r+1][1]-e[r][1])/n[r]);const a=[o[0]];for(let r=1;r<t-1;r++)a.push(o[r-1]*o[r]<=0?0:(o[r-1]+o[r])/2);a.push(o[t-2]);for(let r=0;r<t-1;r++){if(0===o[r]){a[r]=0,a[r+1]=0;continue}const e=a[r]/o[r],t=a[r+1]/o[r],n=e*e+t*t;if(n>9){const i=3/Math.sqrt(n);a[r]=i*e*o[r],a[r+1]=i*t*o[r]}}let i=`M${bo(e[0][0])},${bo(e[0][1])}`;for(let r=0;r<t-1;r++){const t=n[r]/3;i+=`C${bo(e[r][0]+t)},${bo(e[r][1]+a[r]*t)},${bo(e[r+1][0]-t)},${bo(e[r+1][1]-a[r+1]*t)},${bo(e[r+1][0])},${bo(e[r+1][1])}`}return i}(e):"step"===t?function(e){let t=`M${bo(e[0][0])},${bo(e[0][1])}`;for(let n=1;n<e.length;n++)t+=`H${bo(e[n][0])}V${bo(e[n][1])}`;return t}(e):$o(e)}function wo(e){const t=[];let n=[];for(const o of e)null===o.v?(n.length&&t.push(n),n=[]):n.push(o);return n.length&&t.push(n),t}const ko=1e3,Mo=200,Ao=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],Eo=["history","statistics"];function So(e){if(Yn(e.period),co(e),void 0!==e.source&&!Eo.includes(e.source))throw new Error(`"source" must be one of: ${Eo.join(", ")}`);const t=[e.curve,...(e.entities??[]).map(e=>"object"==typeof e?e.curve:void 0)];for(const n of t)if(void 0!==n&&!vo.includes(n))throw new Error(`"curve" must be one of: ${vo.join(", ")}`)}function Co(e,t=Date.now(),n={}){const o=Yn(e.raw.period),a=e.raw.source??"history",i=Dn(e.hass),r=Xn(o,t,i,o.navigate?Kn(e.host,o):0),s=co(e.raw),l={start:s?Un(s.unit,r.start,i):r.start,end:r.end},c=e.items.map(e=>({entity:e.entityId,attribute:e.config.attribute})),d=function(e,t){let n=_o.get(e);return n||(n=new fo(t),_o.set(e,n)),n}(e.host,e.requestUpdate),h=s&&"statistics"===a?function(e,t,n,o=!1){const a=t.timeZone===n&&("week"!==e.unit||1===t.firstDay),i="hour"!==e.unit&&a?e.unit:"hour",{types:r,value:s}=po[e.aggregate];return{period:i,types:o?[...new Set([...r,"min","max"])]:r,value:s}}(s,i,e.hass.config?.time_zone,!0===n.range):void 0,u=h?{start:l.start-uo[h.period],end:l.end}:l,p=d.get(e.hass,c,u,a,{live:r.live,statistics:h}),m=s?function(e,t,n,o,a=1e4){const i=[Un(e,t,o)];let r=1;for(;i[i.length-1]<n&&i.length<=a;){const t="hour"===e?i[0]+r*Sn:Fn(e,i[0],r,o);i.push(t>i[i.length-1]?t:i[i.length-1]+Sn),r++}return 1===i.length&&i.push(Fn(e,i[0],1,o)),i}(s.unit,l.start,l.end,i):[],f=e.raw.curve??"smooth",g=Math.min(l.end,t),y=e.items.map((e,t)=>{const o=e.config;let i=p.data.get(ro(c[t]))??[];const r=i[i.length-1];return s?i="statistics"===a?function(e,t,n,o=1/0,a=!1){const i=[];let r=0;for(let s=0;s+1<t.length;s++){const l=t[s],c=t[s+1];for(;r<e.length&&e[r].t<l;)r++;let d=r;const h=[],u=[],p=[];for(;d<e.length&&e[d].t<c;d++){const t=e[d];null===t.v||t.carried||(h.push(t.v),u.push(t.min??t.v),p.push(t.max??t.v))}let m=null;if(h.length&&l<o)if("mean"===n)m=h.reduce((e,t)=>e+t,0)/h.length;else if("sum"===n||"change"===n)m=h.reduce((e,t)=>e+t,0);else if("min"===n)m=Math.min(...h);else if("max"===n)m=Math.max(...h);else if("last"===n)m=h[h.length-1];else{const t=e.slice(0,r).reverse().find(e=>null!==e.v),n=e.slice(r,d).find(e=>e.carried&&null!==e.v);m=(t??n)?.v??h[0]}const f={t:l,end:c,v:m};a&&null!==m&&(f.min=Math.min(...u),f.max=Math.max(...p)),i.push(f)}return i}(i,m,s.aggregate,g,!0===n.range):ho(i,m,n.aggregate?.(e)??s.aggregate,g,!0===n.range):"history"===a&&r&&null!==r.v&&r.t<g&&(i=[...i,{t:g,v:r.v}]),{index:t,entity:e,points:i,color:Oe(o.color??Ao[t%Ao.length]),curve:o.curve??f,dash:!0===o.dash}});return{status:p.status,error:p.error,range:l,period:o,source:a,series:y,live:r.live,back:r.back,zone:i,group:s}}tt("en",{period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months"});const Oo=(e,t,n)=>1===e?t:n;function Lo(e,t,n,o,a){const i=(e,t)=>ot(a,e,t);if(e.calendar&&n<2)return i({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[e.calendar][n]);if(!e.calendar&&0===n){const t=e.last;return i({hour:Oo(t,"period_last_hour","period_last_hours"),day:Oo(t,"period_last_day","period_last_days"),week:Oo(t,"period_last_week_rolling","period_last_weeks"),month:Oo(t,"period_last_month_rolling","period_last_months")}[e.unit],{n:t})}const r={timeZone:o.timeZone},s=Tn(t.start,o.timeZone).year===Tn(Date.now(),o.timeZone).year;let l;"year"===e.calendar?r.year="numeric":"month"===e.calendar?Object.assign(r,{month:"long",year:"numeric"}):(Object.assign(r,{day:"numeric",month:"short"}),s||(r.year="numeric"),"day"===e.calendar&&(r.weekday="short"),e.calendar||"hour"!==e.unit&&"day"!==e.unit||Object.assign(r,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(a?.locale?.language??a?.language??"en",r)}catch{l=new Intl.DateTimeFormat("en",r)}const c=e.calendar?t.end-1:t.end;return"day"===e.calendar||"month"===e.calendar||"year"===e.calendar?l.format(t.start):l.formatRange(t.start,c)}function zo(e,t,n=Date.now()){const{period:o}=e;if(!o.navigate)return Z;const a=Kn(t.host,o),i=e=>n=>{n.stopPropagation(),Qn(t.host,o,e),t.requestUpdate()},r=Lo(o,e.range,e.back,e.zone,t.hass);let s="";if(0!==a){const a=Xn(o,n,e.zone);s=Lo(o,a,a.back,e.zone,t.hass)}const l=e=>R`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${e}></path></svg>`;return R`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${ot(t.hass,"period_previous")} @click=${i(a+1)}>
      ${l("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")}
    </button>
    <span class="period-label" aria-live="polite">${r}</span>
    <button
      class="period-step period-next"
      aria-label=${ot(t.hass,"period_next")}
      ?disabled=${0===e.back}
      @click=${i(a-1)}
    >
      ${l("M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")}
    </button>
    ${0!==a?R`<button
            class="period-return"
            aria-label=${ot(t.hass,"period_return",{label:s})}
            @click=${i(0)}
          >
            ${s}
          </button>`:Z}
  </div>`}const To=i`
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
`;function No(e){!function(e){_o.get(e)?.pause()}(e)}function jo(e,t){const{show:n}=t.config;return n.name||n.value?R`<div class="series-header">
    ${e.series.map(e=>R`<div class="entity series-item" data-index=${e.index} tabindex="0" aria-label=${e.entity.label}>
          <span class="swatch" style="background:${e.color}"></span>
          ${n.name?R`<span class="series-name">${e.entity.name}</span>`:Z}
          ${n.value?R`<span class="series-value">${e.entity.display}</span>`:Z}
        </div>`)}
  </div>`:Z}function Po(e,t){return"loading"===e.status?R`<div class="chart-message">${ot(t.hass,"chart_loading")}</div>`:"error"===e.status?R`<div class="chart-message error">
      ${ot(t.hass,"chart_error",{error:e.error??""})}
    </div>`:e.series.every(e=>e.points.every(e=>null===e.v))?R`<div class="chart-message">${ot(t.hass,"chart_no_data")}</div>`:void 0}const Uo=i`
  ${To}
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
`;function Fo(e,t,n){const{locale:o,grouping:a}=function(e){const t=e?.locale?.language??"en";switch(e?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:t,grouping:!0}}}(n),i=new Intl.NumberFormat(o,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:a});let r=i.format(0===e?0:e);return 0===Number(e.toFixed(t))&&(r=i.format(0)),r}function Ho(e,t){return t?`${e} ${t}`:e}const Do=new WeakMap;function Bo(e){Do.get(e)?.observer?.disconnect(),Do.delete(e)}function Vo(e){const t=sn(e.raw);return Math.max(0,function(e){let t=Do.get(e.host);if(!t){const n={width:e.host.clientWidth||400};t=n,Do.set(e.host,n),"undefined"!=typeof ResizeObserver&&(n.observer=new ResizeObserver(t=>{const o=Math.round(t[t.length-1].contentRect.width);Math.round(o/70)!==Math.round(n.width/70)&&(n.width=o,e.requestUpdate())}),n.observer.observe(e.host))}return t.width}(e)-32-(t.y&&"outside"===t.labels?40:0))}function Ro(e,t,n){const o=sn(e.raw),a=dn(n,o,4),i=Math.max(2,Math.min(8,Math.floor(Vo(e)/70))),{unit:r,ticks:s}=vn(t,i,gn(bn(e.hass)));return{options:o,value:a,times:s,unit:r,range:t,scales:{x:Jt([t.start,t.end],[0,ko]),y:Jt(a.domain,[Mo,0]),domain:a.domain}}}const Io=e=>Math.round(1e4*e)/100+"%";function Wo({axes:e,ctx:t,content:n,label:o,defs:a=Z,overlay:i=Z,hover:r,right:s}){const{options:l}=e,c="outside"===l.labels,d=l.y&&e.value.ticks.length>0,h=l.x&&e.times.length>0,u=d?function(e,t){const{scales:n,value:o}=e;return o.ticks.map(e=>{const a=n.y(e)/Mo;return R`<span class="axis-label ${a<.08?"top":a>.92?"bottom":""}" style="top:${Io(a)}"
      >${Fo(e,o.decimals,t.hass)}</span
    >`})}(e,t):[],p=d?R`<div class="y-axis">${u}</div>`:Z,m=h?R`<div class="x-axis">${function(e,t){const{scales:n,range:o}=e,a=gn(bn(t.hass));return e.times.map(i=>{const r=n.x(i)/ko;return R`<span class="axis-label ${r<.05?"start":r>.95?"end":""}" style="left:${Io(r)}"
      >${e.label?e.label(i):An(i,e.unit,o.end-o.start,t.hass,a)}</span
    >`})}(e,t)}</div>`:Z,f=d?R`<span class="axis-sizer" aria-hidden="true"
        >${e.value.ticks.map(n=>Fo(n,e.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:Z,g=s&&l.y&&s.value.ticks.length>0?s:void 0,y=g?R`<span class="axis-sizer" aria-hidden="true"
        >${g.value.ticks.map(e=>Fo(e,g.value.decimals,t.hass)).reduce((e,t)=>t.length>e.length?t:e,"")}</span
      >`:Z,_=g?R`<div class="y-axis right">${c?y:Z}${function(e,t){return e.value.ticks.map(n=>{const o=e.y(n)/Mo;return R`<span class="axis-label ${o<.08?"top":o>.92?"bottom":""}" style="top:${Io(o)}"
      >${Fo(n,e.value.decimals,t.hass)}</span
    >`})}(g,t)}</div>`:Z;return R`<div
    class="plot-wrap axes-${l.labels} ${d?"has-y":""} ${h?"has-x":""} ${g?"has-right":""}"
  >
    ${c&&d?R`<div class="y-axis">${f}${u}</div>`:Z}
    <div
      class="plot-area ${r?"hoverable":""}"
      @pointerdown=${r?.move}
      @pointermove=${r?.move}
      @pointerleave=${r?.leave}
      @pointercancel=${r?.leave}
    >
      ${function(e,t,n=Z,o=Z){return R`<svg
    class="plot"
    viewBox="0 0 ${ko} ${Mo}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${t}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${ko} height=${204}></rect>
      </clipPath>
      ${n}
    </defs>
    ${o}
    <g clip-path="url(#cd-draw-in)">${e}</g>
  </svg>`}(n,o,a,function(e){const{options:t,scales:n}=e;return I`<g class="grid">
    ${t.horizontal?e.value.ticks.map(e=>I`<line x1="0" x2=${ko} y1=${n.y(e)} y2=${n.y(e)}></line>`):Z}
    ${t.vertical?e.times.map(e=>I`<line x1=${n.x(e)} x2=${n.x(e)} y1="0" y2=${Mo}></line>`):Z}
  </g>`}(e))} ${c?Z:R`${p}${_}${m}`}
      ${i}
    </div>
    ${c?R`${_}${m}`:Z}
  </div>`}const Zo=i`
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
`,qo=["above","over","hidden"];function Yo(e){if(void 0!==e.compact&&"boolean"!=typeof e.compact)throw new Error('"compact" must be true or false');if(void 0!==e.header&&!qo.includes(e.header))throw new Error(`"header" must be one of: ${qo.join(", ")}`)}function Go(e){return{compact:!0===e.compact,header:e.header??"above"}}function Xo(e,t,n){return R`<div class="frame ${e.compact?"compact":""}">
    ${"above"===e.header?t:Z}${n}
  </div>`}function Jo(e){return e===Z?Z:R`<div class="header-over" @pointerdown=${e=>e.stopPropagation()}>${e}</div>`}const Ko=i`
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
`,Qo=["none","normal","percent"];function ea(e){const t=e.stack;if(void 0!==t&&!Qo.includes(t))throw new Error(`"stack" must be one of: ${Qo.join(", ")}`)}function ta(e,t){let n=0,o=e.length;for(;n<o;){const a=n+o>>1;e[a].t<=t?n=a+1:o=a}return 0===n?null:e[n-1].v}function na(e,t){const n=e[0]?.length??0,o=e.map(()=>[]);for(let a=0;a<n;a++){let n=1;if("percent"===t){const t=e.reduce((e,t)=>e+Math.abs(t[a]??0),0);n=t>0?100/t:0}let i=0,r=0;e.forEach((e,t)=>{const s=e[a];if(null==s)return void o[t].push(null);const l=s*n;l>=0?(o[t].push([i,i+l]),i+=l):(o[t].push([r,r+l]),r+=l)})}return o}function oa(e){const t=e[0]?.length??0,n=[];for(let o=0;o<t;o++){let t=null;for(const n of e)null!==n[o]&&void 0!==n[o]&&(t=(t??0)+n[o]);n.push(t)}return n}function aa(e){let t=0,n=0;for(const o of e)for(const e of o)e&&(t=Math.min(t,e[0],e[1]),n=Math.max(n,e[0],e[1]));return[t,n]}function ia(e,t){if(0===e.length)return-1;let n=0,o=e.length-1;for(;n<o;){const a=n+o>>1;e[a].t<t?n=a+1:o=a}return n>0&&t-e[n-1].t<=e[n].t-t?n-1:n}const ra=new WeakMap;function sa(e){return ra.get(e)?.t}function la(e){const t=ra.get(e);void 0!==t?.timer&&clearTimeout(t.timer),ra.delete(e)}function ca(e){return!1!==e.tooltip}function da(e){const t=e.tooltip;if(void 0!==t&&"boolean"!=typeof t)throw new Error('"tooltip" must be true or false')}function ha(e,t,n){const o=function(e){let t=ra.get(e);return t||(t={},ra.set(e,t)),t}(e.host),a=t=>{t!==o.t&&(o.t=t,e.requestUpdate())},i=()=>{void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0};return{move(e){i();const o=e.currentTarget.getBoundingClientRect(),r=o.width>0?Math.min(1,Math.max(0,(e.clientX-o.left)/o.width)):0;a(function(e,t){let n;for(const o of e){const e=ia(o,t);if(e<0)continue;const a=o[e].t;(void 0===n||Math.abs(a-t)<Math.abs(n-t))&&(n=a)}return n}(n,t.start+r*(t.end-t.start)))},leave(e){i(),"touch"===e.pointerType||"pen"===e.pointerType?o.timer=setTimeout(()=>{o.timer=void 0,a(void 0)},3e3):a(void 0)}}}const ua=e=>Math.round(1e4*e)/100+"%";function pa(e){const t=new Set(e.map(e=>e.entity.unit));return 1===t.size?[...t][0]:""}function ma(e,t,n,o){return R`<div class="tooltip-row tooltip-total">
    <span class="swatch"></span>
    <span class="tooltip-name">${ot(e.hass,"chart_total")}</span>
    <span class="tooltip-value">${null===t?"—":Ho(Fo(t,o,e.hass),n)}</span>
  </div>`}function fa(e,t,n,o,a,i={}){if(void 0===o)return Z;const r=n.x(o)/ko;if(!(r>=0&&r<=1))return Z;const s=function(e,t){const n=e*t;return n+190<=t?"right":n>=190?"left":e>.5?"pin-left":"pin-right"}(r,a),l=t.map(e=>{const t=ia(e.points,o);return{s:e,p:t<0?void 0:e.points[t]}});return R`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${ua(r)}"></div>
    ${l.map(({s:e,p:t})=>{if(!t||null===t.v)return Z;const o=i.dotY?i.dotY(e,t):n.y(t.v);if(null===o)return Z;const a=o/Mo;return a>=0&&a<=1?R`<span
        class="hover-dot"
        style="left:${ua(n.x(t.t)/ko)};top:${ua(a)};background:${e.color}"
      ></span>`:Z})}
    <div class="tooltip ${s}" style=${s.startsWith("pin")?"":`left:${ua(r)}`}>
      <div class="tooltip-time">${i.heading?i.heading(o):Mn(o,e.hass)}</div>
      ${l.map(({s:t,p:n})=>R`<div class="tooltip-row">
            <span class="swatch" style="background:${t.color}"></span>
            <span class="tooltip-name">${t.entity.name}</span>
            <span class="tooltip-value">${i.text?i.text(t,n):function(e,t,n){return e&&null!==e.v?Ho(Fo(e.v,t.entity.decimals,n.hass),t.entity.unit):"—"}(n,t,e)}</span>
          </div>`)}
      ${i.footer?i.footer(l):Z}
    </div>
  </div>`}tt("en",{chart_total:"Total"});const ga=i`
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
`;function ya(e,t,n){return{select:{mode:"dropdown",options:n.map(n=>({value:n,label:ot(e,`editor_${t}_${n}`)}))}}}tt("en",{editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)"});const _a=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"}];function va(e){const t=e?.period;return`${t?.calendar?"calendar":"rolling"}${e?.group_by?"|grouped":""}`}function ba(e,t){const[n,o]=va(t).split("|"),a="calendar"===n;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:ya(e,"period_calendar",["rolling",...Vn])},...a?[{name:"period_until",selector:ya(e,"period_until",Rn)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:ya(e,"period_unit",Bn)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:ya(e,"source",Eo)},{type:"grid",name:"",schema:[{name:"group_by",selector:ya(e,"group_by",["none",...so])},...o?[{name:"aggregate",selector:ya(e,"aggregate",lo)}]:[]]}]}tt("en",{editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden"});const $a=[{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];function xa(e){return[{type:"grid",name:"",schema:[{name:"header",selector:ya(e,"header",qo)},{name:"compact",selector:{boolean:{}}}]}]}const wa=[{name:"x_axis",path:["x_axis"],default:Qt},{name:"y_axis",path:["y_axis"],default:en},{name:"axis_labels",path:["axis_labels"],default:tn},{name:"grid_horizontal",path:["gridlines","horizontal"],default:nn},{name:"grid_vertical",path:["gridlines","vertical"],default:on},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function ka(e){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:ya(e,"axis_labels",Kt)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const Ma=new Map;function Aa(e,t,n){const o=`${e}|${nt(t)}`;let a=Ma.get(o);return a||(a=n(),Ma.set(o,a)),a}function Ea(e,t,n,o){return R`<ha-form
    data-section=${t}
    .hass=${e.hass}
    .data=${Bt(e.config,o)}
    .schema=${n}
    .computeLabel=${t=>ot(e.hass,`editor_${t.name}`)}
    @value-changed=${t=>{t.stopPropagation();const n=Vt(e.config,o,t.detail?.value??{});n!==e.config&&e.commit(n)}}
  ></ha-form>`}const Sa=[..._a,{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"line_width",path:["line_width"],default:2.5},{name:"dots",path:["dots"],default:!1},...wa,...$a];function Ca(e,t){if(!e)return t;const[n,o]=e,a={};return void 0===t.y_min&&n>=0&&n<=o/2&&(a.y_min=0),void 0===t.y_max&&o<=0&&o>=n/2&&(a.y_max=0),Object.keys(a).length?{...t,...a}:t}function Oa(e){const t=[];return e.forEach((n,o)=>{o>0&&t.push([n[0],e[o-1][1]]),t.push(n)}),t}function La(e,t,n){if(e.length<2)return"";const[o,a,i]="step"===n?[Oa(e),Oa(t),"straight"]:[e,t,n];return`${xo(o,i)}${xo([...a].reverse(),i).replace(/^M/,"L")}Z`}function za(e,t){return"step"===t?xo(Oa(e),"straight"):xo(e,t)}function Ta(e,t,n,o,a={}){const i=lt(e.entity.config,o),r=e.entity.config.line_width??o.line_width,s=n.y(Math.min(Math.max(0,n.domain[0]),n.domain[1])),l=function(e){const t=e.entity.config.negative_color;return"string"==typeof t&&t.trim()?Oe(t.trim()):e.color}(e),c=`cd-area-${e.index}`,d=`cd-area-line-${e.index}`,h=l!==e.color,u=I`${function(e,t,n,o,a=.42,i=.05){const r=Math.min(1,Math.max(0,o/Mo));return I`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Mo}>
    <stop offset="0" stop-color=${t} stop-opacity=${a}></stop>
    <stop offset=${r} stop-color=${t} stop-opacity=${i}></stop>
    <stop offset=${r} stop-color=${n} stop-opacity=${i}></stop>
    <stop offset="1" stop-color=${n} stop-opacity=${a}></stop>
  </linearGradient>`}(c,e.color,l,s,a.stacked?.6:.42,a.stacked?.35:.05)}
    ${h?function(e,t,n,o){const a=Math.min(1,Math.max(0,o/Mo));return I`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${Mo}>
    <stop offset=${a} stop-color=${t}></stop>
    <stop offset=${a} stop-color=${n}></stop>
  </linearGradient>`}(d,e.color,l,s):Z}`,p=[],m=[],f=[];if(a.layers){const o=a.layers;let i=[];const r=()=>{if(i.length){const a=i.map(e=>[n.x(t[e].t),n.y(o[e][1])]),r=i.map(e=>[n.x(t[e].t),n.y(o[e][0])]);p.push(La(a,r,e.curve)),m.push(za(a,e.curve))}i=[]};for(let e=0;e<t.length;e++)o[e]?i.push(e):r();r()}else for(const _ of wo(t)){const t=_.map(e=>[n.x(e.t),n.y(e.v)]);p.push(La(t,t.map(([e])=>[e,s]),e.curve)),m.push(za(t,e.curve))}if(i.dots){const e=a.range;t.forEach((t,o)=>{if(null===t.v||e&&(t.t===e.start||t.t===e.end))return;const i=a.layers?a.layers[o]?.[1]:t.v;void 0!==i&&f.push([n.x(t.t),n.y(i)])})}const g=r??2,y=h?`url(#${d})`:e.color;return{defs:u,body:I`<g class="series" data-series=${e.index}>
    <path class="fill" d=${p.join("")} fill="url(#${c})" stroke="none"></path>
    <path class="line ${e.dash?"dashed":""}" d=${m.join("")} fill="none" stroke=${y}
      style="stroke-width:${g}px"></path>
    ${f.length>0&&f.length<=200?I`<path class="dots" d=${dt(f)} fill="none" stroke=${y}
            style="stroke-width:${ht(g)}px"></path>`:Z}
  </g>`}}tt("en",{editor_style_area:"Area",editor_stack:"Stack",editor_stack_none:"Don't stack",editor_stack_normal:"On top of each other",editor_stack_percent:"To 100 %",editor_negative_color:"Colour below zero"});const Na=[..._a,{name:"curve",path:["curve"],default:"smooth"},{name:"stack",path:["stack"],default:"none"},{name:"line_width",path:["line_width"],default:2},{name:"dots",path:["dots"],default:!1},...wa,...$a];const ja={name:"negative_color",path:["negative_color"]},Pa=new Map;const Ua=i`
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
`,Fa={layout:"chart",group:"history",height:240,styles:i`
    ${Uo}
    ${Zo}
    ${ga}
    ${Ko}
    ${Ua}
  `,thumbnail:()=>I`
    <defs>
      <linearGradient id="cd-thumb-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.5" />
        <stop offset="1" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10 V36 H4 Z" fill="url(#cd-thumb-area)" />
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(e){So(e),rn(e),da(e),mt(e),Yo(e),ea(e),function(e){for(const t of e.entities??[]){if("object"!=typeof t)continue;const e=t.negative_color;if(void 0!==e&&"string"!=typeof e)throw new Error(`"negative_color" of ${t.entity} must be a colour`)}}(e)},editor:function(e){const t=Aa(`area|${va(e.config)}`,e.hass,()=>[...ba(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:ya(e.hass,"curve",vo)},{name:"stack",selector:ya(e.hass,"stack",Qo)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:wt},{name:"dots",selector:{boolean:{}}}]},...ka(e.hass),...xa(e.hass)]);return Ea(e,"chart",t,Na)},entityFields:function(e,t){const n=!0===t.dots;let o=Pa.get(n);return o||(o=[...Mt(n),ja],Pa.set(n,o)),{schema:Aa("area-entity",e,()=>[...zt(e),{name:"negative_color",selector:{text:{}}}]),fields:o}},disconnect(e){No(e),Bo(e),la(e)},render:function(e){const t=Co(e),n=zo(t,e),o=jo(t,e),a=n===Z&&o===Z?Z:R`${n}${o}`,i=Po(t,e),r=Go(e.raw);if(i)return Xo("over"===r.header?{...r,header:"above"}:r,a,i);const s=e.raw.stack??"none",l=t.series.map(e=>({...e,points:En(e.points,500)}));let c,d,h=l;const u={};if("none"===s){const n=Xt(l.map(e=>e.points));d=Ro({...e,raw:Ca(n,e.raw)},t.range,n);const o=d.scales,a=ct(l,t=>lt(t.entity.config,e.raw).onTop);c=a.map(n=>Ta(n,n.points,o,e.raw,{range:t.range}))}else{const n=function(e){const t=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t);return{times:t,values:e.map(e=>t.map(t=>ta(e,t)))}}(l.map(e=>e.points)),o=na(n.values,s),a=oa(n.values);h=l.map((e,t)=>({...e,points:n.times.map((e,o)=>({t:e,v:n.values[t][o]}))}));const i=aa(o),r="percent"===s?{y_min:i[0]<0?-100:0,y_max:i[1]>0?100:0}:{};d=Ro({...e,raw:Ca(i,{...r,...e.raw})},t.range,i);const p=d.scales;c=h.map((n,a)=>Ta(n,n.points,p,e.raw,{layers:o[a],stacked:!0,range:t.range})).reverse();const m=new Map;h.forEach(e=>e.points.forEach((e,t)=>m.set(e,t))),u.dotY=(e,t)=>{const n=o[e.index][m.get(t)??-1];return n?p.y(n[1]):null};const f=pa(h),g=Math.max(...h.map(e=>e.entity.decimals));u.footer=t=>{const n=t.length?m.get(t[0].p):void 0;return ma(e,void 0===n?null:a[n],f,g)},"percent"===s&&(u.text=(t,n)=>{const a=n?o[t.index][m.get(n)??-1]:null;if(!n||null===n.v||!a)return"—";const i=Math.round(Math.abs(a[1]-a[0]));return`${Ho(Fo(n.v,t.entity.decimals,e.hass),t.entity.unit)} · ${i} %`})}const p=ca(e.raw),m=ot(e.hass,"chart_aria",{style:ot(e.hass,"editor_style_area"),names:t.series.map(e=>e.entity.name).join(", ")});return Xo(r,a,Wo({axes:d,ctx:e,content:I`${c.map(e=>e.body)}`,defs:I`${c.map(e=>e.defs)}`,label:m,overlay:R`${"over"===r.header?Jo(a):Z}
      ${p?fa(e,h,d.scales,sa(e.host),Vo(e),u):Z}`,hover:p?ha(e,t.range,h.map(e=>e.points)):void 0}))}};function Ha(e,t,n){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||n<=t?0:Math.min(1,Math.max(0,(e-t)/(n-t)))}function Da(e,t,n){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||n<=t)return[0,0];const o=Ha(e,t,n);if(t<0&&n>0){const e=Ha(0,t,n);return o<e?[o,e]:[e,o]}return[0,o]}const Ba=new Set;function Va(e){return(e.available?e.band.icon:void 0)??e.config.icon??(e.stateObj?void 0:"mdi:help-circle-outline")}function Ra(e){return null==e||""===e}function Ia(e){if(void 0===e||""===e.trim())return null;const t=Number(e);return Number.isFinite(t)?t:null}function Wa(e,t,n="limit"){if(Ra(e))return null;if("number"==typeof e)return Number.isFinite(e)?e:null;const o=String(e),a=Ia(t.states[o]?.state);if(null===a&&!Ba.has(o)){Ba.add(o);const e="limit"===n?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${n} entity "${o}" is missing or not numeric; ${e}.`)}return a}function Za(e,t){if(e.every(e=>"number"==typeof e.from))return e;const n=[];for(const o of e){const e=t?Wa(o.from,t,"band start"):null;null!==e&&n.push({...o,from:e})}return n.length?n.sort((e,t)=>e.from-t.from):Ie}function qa(e,t){const n=e.entity,o=t.states[n],a=e.name??o?.attributes?.friendly_name??n,i=e.unit??(e.attribute?"":o?.attributes?.unit_of_measurement??""),r=function(e,t){if(t)return e.attribute?t.attributes?.[e.attribute]:t.state}(e,o),s=function(e){return"number"==typeof e?Number.isFinite(e)?e:null:"string"==typeof e?Ia(e):null}(r),l=null!==s;let c;c=Ra(e.decimals)?e.attribute?l?function(e){const t=String(e),n=t.indexOf(".");return-1===n||/e/i.test(t)?0:Math.min(2,t.length-n-1)}(r):0:function(e,t,n){const o=e?.entities?.[t]?.display_precision;return"number"==typeof o?o:"%"===n?0:1}(t,n,i):e.decimals;const d=Wa(e.min,t)??0,h=Wa(e.max,t)??100,u=Wa(e.target,t),p=Za(e.severity,t);let m,f="";return l?(f=Fo(s,c,t),m=Ho(f,i)):m=o?function(e,t,n,o){const a=e.attribute;return a&&"string"==typeof n&&""!==n.trim()?o.formatEntityAttributeValue?.(t,a)??n:o.formatEntityState?.(t)??ot(o,"unavailable")}(e,o,r,t):ot(t,"entity_not_found"),{entityId:n,config:e,stateObj:o,available:l,value:s,min:d,max:h,target:u,name:a,unit:i,decimals:c,position:l?Ha(s,d,h):0,span:l?Da(s,d,h):[0,0],targetPosition:null===u?null:Ha(u,d,h),band:Te(l?s:-1/0,p),bands:p,valueText:f,display:m,label:`${a}, ${m}`}}function Ya(e,t){if(!e.include)return[];const n=new Set(e.entities.map(e=>e.entity));return function(e,t,n){const o=Ve.get(e);if(o&&o.exclude===t&&o.states===n.states&&o.entities===n.entities&&o.devices===n.devices&&o.areas===n.areas)return o.ids;const a=[];for(const r of Object.values(n.states)){if(!Ue(r)||n.entities?.[r.entity_id]?.hidden)continue;const o=Fe(r,n);if(!De(e,o)||Be(t,o))continue;const i=r.attributes?.friendly_name;a.push({id:r.entity_id,name:"string"==typeof i&&i?i:r.entity_id})}a.sort((e,t)=>e.name.localeCompare(t.name)||(e.id<t.id?-1:1));const i=a.map(e=>e.id);return Ve.set(e,{exclude:t,states:n.states,entities:n.entities,devices:n.devices,areas:n.areas,ids:i}),i}(e.include,e.exclude,t).filter(e=>!n.has(e))}const Ga={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:i`
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
  `,render(e,{show:t,hass:n}){const o=t.value||!e.available,a=R`${t.name?R`<span class="name">${e.name}</span>`:Z}${o?R`<span class="value">${e.display}</span>`:Z}`;return R`
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${e.stateObj}
              .icon=${Va(e)}
            ></ha-state-icon>`:Z}
      <div class="track">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:Z}
        <div class="text">${a}</div>
        ${e.available?R`<div class="text on-fill ${ze(e.band.color)}" aria-hidden="true">${a}</div>`:Z}
      </div>
    `}},Xa=["auto","none","hour","day","week","month"],Ja=["auto","mean","sum","min","max","first","last","change"],Ka={last:7,unit:"day"},Qa={hour:1/24,day:1,week:7,month:30};function ei(e){if(e.calendar)return{day:"hour",week:"day",month:"day",year:"month"}[e.calendar];const t=e.last*Qa[e.unit];return t<=2?"hour":t<=62?"day":t<=190?"week":"month"}function ti(e){if(e.config.attribute)return!1;const t=e.stateObj?.attributes?.state_class;return"total_increasing"===t||"total"===t}function ni(e,t){const n={...e,period:e.period??{...Ka}};return"none"===e.group_by?delete n.group_by:void 0!==e.group_by&&"auto"!==e.group_by||(n.group_by=ei(Yn(n.period))),void 0!==e.aggregate&&"auto"!==e.aggregate||(n.aggregate=!0!==e.range&&t.length>0&&t.every(ti)?"change":"mean"),n}function oi(e,t){const n=[...new Set(e.flatMap(e=>e.map(e=>e.t)))].sort((e,t)=>e-t),o=e.map(e=>new Map(e.map(e=>[e.t,e]))),a=new Map;for(const r of e)for(const e of r)void 0!==e.end&&a.set(e.t,e.end);const i={times:[],ends:[],values:e.map(()=>[]),lows:e.map(()=>[]),highs:e.map(()=>[])};return n.forEach((r,s)=>{const l=Math.min(a.get(r)??n[s+1]??t,t);l>r&&(i.times.push(r),i.ends.push(l),e.forEach((e,t)=>{const n=o[t].get(r);i.values[t].push(n?n.v:ta(e,r)),i.lows[t].push(n?.min??null),i.highs[t].push(n?.max??null)}))}),i}function ai(e,t,n,o){const a=t-e,i=.8*a/o,r=o>1?.12*i:0;return[e+.2*a/2+n*i+r/2,i-r]}function ii(e,t=!0){let n=t?0:1/0,o=t?0:-1/0;for(const a of e)null!==a&&Number.isFinite(a)&&(n=Math.min(n,a),o=Math.max(o,a));return n===1/0?void 0:[n,o]}const ri={hour:66,day:52,week:52,month:60};tt("en",{editor_style_column:"Column",editor_group_by_auto:"Automatic",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_range:"Lowest to highest in each column",editor_rounded:"Rounded ends",editor_column_labels:"Show values on the columns",editor_column_color:"Colour"});const si={hour:"hour",day:"day",week:"day",month:"month"};function li(e,t,n,o){if("hour"===n)return`${Mn(e,o)} – ${kn(t,o)}`;const a="day"===n?{weekday:"short",day:"numeric",month:"short"}:"week"===n?{day:"numeric",month:"short"}:{month:"long",year:"numeric"};let i;try{i=new Intl.DateTimeFormat(o?.locale?.language??"en",{...a,timeZone:bn(o)})}catch{i=new Intl.DateTimeFormat("en",a)}return"week"===n?i.formatRange(e,t-1):i.format(e)}const ci=(e,t)=>Math.round(e/t*1e4)/100+"%",di=e=>Math.min(Mo,Math.max(0,e));function hi(e,t,n,o,a,i,r,s){const l=di(e.y(a)),c=di(e.y(o));return R`<div
    class="col ${r?`cap-${r}`:""} ${a<=0&&"both"!==r?"down":""}"
    data-series=${s}
    style="left:${ci(t,ko)};width:${ci(n,ko)};top:${ci(l,Mo)};height:${ci(c-l,Mo)};background:${i}"
  ></div>`}function ui(e,t,n,o,a,i){return R`<span
    class="point-label col-label ${i?"below":""}"
    style="left:${ci(t,ko)};top:${ci(di(n),Mo)}"
    >${Fo(o,a,e.hass)}</span
  >`}function pi(e,t,n,o){const a=e.y(o);return a<0||a>Mo?R``:R`<div
    class="target-mark"
    style="left:${ci(t-.1*n,ko)};width:${ci(1.2*n,ko)};top:${ci(a,Mo)}"
  ></div>`}const mi=_a.map(e=>"period_last"===e.name?{...e,default:Ka.last}:"period_unit"===e.name?{...e,default:Ka.unit}:"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),fi=[...mi,{name:"stack",path:["stack"],default:"none"},{name:"color_by",path:["color_by"],default:"series"},{name:"range",path:["range"],default:!1},{name:"column_labels",path:["labels"],default:!1},{name:"rounded",path:["rounded"],default:!0},...wa,...$a];const gi=[{name:"column_color",path:["color"]}],yi=i`
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
`,_i={layout:"chart",group:"history",height:240,styles:i`
    ${Uo}
    ${Zo}
    ${ga}
    ${Ko}
    ${yi}
  `,thumbnail:()=>I`
    <path d="M7 36 V22 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M19 36 V12 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M31 36 V18 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M43 36 V8 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M55 36 V26 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M4 36.5 H62" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(e){if(void 0!==e.group_by&&!(e=>Xa.includes(e))(e.group_by))throw new Error(`"group_by" must be one of: ${Xa.join(", ")}`);if(void 0!==e.aggregate&&!Ja.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Ja.join(", ")}`);const t={...e};"auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,So(t),rn(e),da(e),Yo(e),ea(e);for(const n of["range","rounded","labels"])if(void 0!==e[n]&&"boolean"!=typeof e[n])throw new Error(`"${n}" must be true or false`);if(void 0!==e.color_by&&"series"!==e.color_by&&"bands"!==e.color_by)throw new Error('"color_by" must be one of: series, bands')},editor:function(e){const t="none"===e.config.group_by,n={...e.config,group_by:void 0},o=Aa(`column|${va(n)}|${t}`,e.hass,()=>[...ba(e.hass,n).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:ya(e.hass,"group_by",Xa)},...t?[]:[{name:"aggregate",selector:ya(e.hass,"aggregate",Ja)}]]},{type:"grid",name:"",schema:[{name:"stack",selector:ya(e.hass,"stack",Qo)},{name:"color_by",selector:ya(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"range",selector:{boolean:{}}},{name:"column_labels",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...ka(e.hass),...xa(e.hass)]);return Ea({...e,commit:t=>e.commit(function(e){const t=e.period;return t&&"object"==typeof t&&void 0===t.calendar?void 0!==t.last&&void 0!==t.unit?e:{...e,period:{last:Ka.last,unit:Ka.unit,...t}}:e}(t))},"chart",o,fi)},entityFields:e=>({schema:Aa("column-entity",e,()=>[{name:"column_color",selector:{text:{}}}]),fields:gi}),disconnect(e){No(e),Bo(e),la(e)},render:function(e){const t={...e,raw:ni(e.raw,e.items)},n=t.raw,o=!0===n.range,a=Co(t,Date.now(),{range:o}),i=zo(a,t),r=jo(a,t),s=i===Z&&r===Z?Z:R`${i}${r}`,l=Po(a,t),c=Go(n);if(l)return Xo("over"===c.header?{...c,header:"above"}:c,s,l);const d=o?"none":n.stack??"none",h=a.group,u=oi(a.series.map(e=>e.points),h?1/0:a.range.end),p=h&&u.ends.length?{...a.range,end:Math.max(a.range.end,...u.ends)}:a.range,m="none"===d?void 0:na(u.values,d),f=a.series.map(e=>e.entity.target).filter(e=>null!==e);let g;g=m?aa(m):o?ii([...u.lows.flat(),...u.highs.flat(),...u.values.flat(),...f],!1):ii([...u.values.flat(),...t.config.show.target?f:[]]);let y=n;"percent"===d?y={y_min:g[0]<0?-100:0,y_max:g[1]>0?100:0,...n}:!o&&g&&(y=function(e,t){const n={...t};return void 0===t.y_min&&e[0]>=0&&(n.y_min=0),void 0===t.y_max&&e[1]<=0&&(n.y_max=0),n}(g,n));let _=Ro({...t,raw:y},p,g);const{scales:v}=_,b=u.times.map((e,t)=>(e+u.ends[t])/2),$=new Map(b.map((e,t)=>[e,t]));if(h&&b.length){const e=(x=b.length,w=Vo(t)/ri[h.unit],Math.max(1,Math.ceil(x/Math.max(1,w)))),n=si[h.unit],o="day"===h.unit&&b.length<=8?6048e5:a.range.end-a.range.start;_={..._,unit:n,times:b.filter((t,n)=>n%e===0),label:e=>An(u.times[$.get(e)],n,o,t.hass)}}var x,w;const k=function(e,t,n,o,a,i){const r=e.raw,s=t.series,l=s.length,c=!0===r.range,d="bands"===r.color_by,h=Vo(e)/ko,u=!0===r.labels&&"percent"!==a&&n.times.length*(i?1:l)<=60,p=e.config.show.target&&"percent"!==a,m=Math.min(Math.max(0,o.domain[0]),o.domain[1]),f=(e,t)=>d?Oe(Te(t,e.entity.bands).color):e.color,g={columns:[],labels:[],targets:[]},y=i?oa(n.values):[];return n.times.forEach((t,a)=>{const r=o.x(t),d=o.x(n.ends[a]);if(i){const[t,l]=ai(r,d,0,1);let c=-1,m=-1;i.forEach((e,t)=>{const n=e[a];n&&n[1]>n[0]&&(c=t),n&&n[1]<n[0]&&(m=t)}),i.forEach((e,i)=>{const r=e[a];if(!r||r[0]===r[1])return;const d=n.values[i][a],h=i===c?"top":i===m?"bottom":"";g.columns.push(hi(o,t,l,Math.min(...r),Math.max(...r),f(s[i],d),h,i))});const _=y[a];if(u&&null!==_&&l*h>=24){const n=_>=0?Math.max(0,...i.map(e=>e[a]?.[1]??0)):Math.min(0,...i.map(e=>e[a]?.[1]??0)),r=Math.max(...s.map(e=>e.entity.decimals));g.labels.push(ui(e,t+l/2,o.y(n),_,r,_<0))}const v=s[0].entity.target;return void(p&&null!==v&&g.targets.push(pi(o,t,l,v)))}s.forEach((t,i)=>{const s=n.values[i][a];if(null===s)return;const[y,_]=ai(r,d,i,l);if(c){const e=n.lows[i][a]??s,r=n.highs[i][a]??s;g.columns.push(hi(o,y,_,e,r,f(t,s),"both",i)),g.columns.push(R`<div
            class="col-mark"
            style="left:${ci(y,ko)};width:${ci(_,ko)};top:${ci(di(o.y(s)),Mo)}"
          ></div>`)}else g.columns.push(hi(o,y,_,Math.min(m,s),Math.max(m,s),f(t,s),s>=m?"top":"bottom",i)),u&&_*h>=24&&g.labels.push(ui(e,y+_/2,o.y(s),s,t.entity.decimals,s<m));p&&null!==t.entity.target&&g.targets.push(pi(o,y,_,t.entity.target))})}),g}(t,a,u,v,d,m),M=a.series.map((e,t)=>({...e,points:b.map((e,n)=>({t:e,v:u.values[t][n],min:u.lows[t][n],max:u.highs[t][n]}))})),A={dotY:()=>null,heading:e=>{const n=$.get(e);return void 0===n?Mn(e,t.hass):h?li(u.times[n],u.ends[n],h.unit,t.hass):Mn(u.times[n],t.hass)}},E=(e,n)=>Fo(e,n.entity.decimals,t.hass);if(o&&(A.text=(e,t)=>{if(!t||null===t.v)return"—";const n=t.min??t.v,o=t.max??t.v;return Ho(`${E(n,e)} – ${E(o,e)}`,e.entity.unit)}),m){const e=oa(u.values),n=pa(M),o=Math.max(...M.map(e=>e.entity.decimals));A.footer=a=>ma(t,e[$.get(a[0]?.p?.t??NaN)??-1]??null,n,o),"percent"===d&&(A.text=(e,t)=>{const n=t?m[e.index][$.get(t.t)??-1]:null;return t&&null!==t.v&&n?`${Ho(E(t.v,e),e.entity.unit)} · ${Math.round(Math.abs(n[1]-n[0]))} %`:"—"})}const S=ca(n),C=S?sa(t.host):void 0,O=void 0===C?void 0:$.get(C),L=void 0===O?Z:R`<div
          class="slot-hover"
          style="left:${ci(v.x(u.times[O]),ko)};width:${ci(v.x(u.ends[O])-v.x(u.times[O]),ko)}"
        ></div>`,z=ot(t.hass,"chart_aria",{style:ot(t.hass,"editor_style_column"),names:a.series.map(e=>e.entity.name).join(", ")}),T=!1===n.rounded?0:4;return Xo(c,s,Wo({axes:_,ctx:t,content:I``,label:z,overlay:R`<div class="columns" style="--r:${T}px">${L}${k.columns}${k.targets}</div>
        <div class="point-labels">${k.labels}</div>
        ${"over"===c.header?Jo(s):Z}
        ${S?fa(t,M,v,C,Vo(t),A):Z}`,hover:S?ha(t,p,M.map(e=>e.points)):void 0}))}},vi=["series","bands"];function bi(e,t,n,o,a){const i=lt(e.entity.config,a),r=En(e.points,500),s=wo(r).map(n=>xo(n.map(e=>[t.x(e.t),t.y(e.v)]),e.curve)).join(""),l=i.dots?r.filter(e=>null!==e.v&&e.t!==o.start&&e.t!==o.end):[],c=l.length>0&&l.length<=200?I`<path
          class="dots"
          d=${dt(l.map(e=>[t.x(e.t),t.y(e.v)]))}
          fill="none"
          stroke=${n}
          style="stroke-width:${ht(i.width)}px"
        ></path>`:Z;return I`<g class="series" data-series=${e.index}>
    <path
      class="line ${e.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${n}
      style="stroke-width:${i.width}px"
    ></path>
    ${c}
  </g>`}function $i(e,t,n){return R`<div class="point-labels">
    ${e.series.flatMap(o=>{const a=o.points.filter(t=>null!==t.v&&(void 0!==e.group||t.t!==e.range.start&&t.t!==e.range.end));return a.length>40?[]:a.map(e=>R`<span
            class="point-label"
            style="left:${t.x(e.t)/ko*100}%;top:${t.y(e.v)/Mo*100}%"
            >${Fo(e.v,o.entity.decimals,n.hass)}</span
          >`)})}
  </div>`}tt("en",{editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",chart_aria:"{style} chart of {names}"});const xi={layout:"chart",group:"history",height:240,styles:i`
    ${Uo}
    ${Zo}
    ${ga}
    ${Ko}
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
  `,thumbnail:()=>I`
    <path d="M4 30 C14 28 16 14 26 16 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />
    <path d="M4 34 C16 33 22 26 32 28 S50 30 60 24" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(e){if(So(e),rn(e),da(e),mt(e),Yo(e),void 0!==e.color_by&&!vi.includes(e.color_by))throw new Error(`"color_by" must be one of: ${vi.join(", ")}`)},editor:function(e){const t=Aa(`line|${va(e.config)}`,e.hass,()=>[...ba(e.hass,e.config),{type:"grid",name:"",schema:[{name:"curve",selector:ya(e.hass,"curve",vo)},{name:"color_by",selector:ya(e.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:wt},{name:"dots",selector:{boolean:{}}}]},{name:"labels",selector:{boolean:{}}},...ka(e.hass),...xa(e.hass)]);return Ea(e,"chart",t,Sa)},entityFields:(e,t)=>({schema:zt(e),fields:Mt(!0===t.dots)}),disconnect(e){No(e),Bo(e),la(e)},render(e){const t=Co(e),n=zo(t,e),o=jo(t,e),a=n===Z&&o===Z?Z:R`${n}${o}`,i=Po(t,e),r=Go(e.raw);if(i)return Xo("over"===r.header?{...r,header:"above"}:r,a,i);const s=Ro(e,t.range,Xt(t.series.map(e=>e.points))),{scales:l}=s,c=ca(e.raw),d="bands"===e.raw.color_by,h=d?I`${t.series.map(e=>function(e,t,n){const[o,a]=n.domain,i=e=>Math.min(1,Math.max(0,(e-o)/(a-o))),r=[];return t.forEach((e,n)=>{const o=Number.isFinite(e.from)?i(e.from):0,a=n+1<t.length?i(t[n+1].from):1,s=Oe(e.color);r.push(I`<stop offset=${o} stop-color=${s}></stop><stop offset=${a} stop-color=${s}></stop>`)}),I`<linearGradient id=${e} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${Mo} y2="0">
    ${r}
  </linearGradient>`}(`cd-bands-${e.index}`,e.entity.bands,l))}`:Z,u=ct(t.series,t=>lt(t.entity.config,e.raw).onTop),p=I`${u.map(n=>bi(n,l,d?`url(#cd-bands-${n.index})`:n.color,t.range,e.raw))}`,m=ot(e.hass,"chart_aria",{style:ot(e.hass,"editor_style_line"),names:t.series.map(e=>e.entity.name).join(", ")});return Xo(r,a,Wo({axes:s,ctx:e,content:p,label:m,defs:h,overlay:R`${"over"===r.header?Jo(a):Z}
        ${!0===e.raw.labels?$i(t,l,e):Z}
        ${c?fa(e,t.series,l,sa(e.host),Vo(e)):Z}`,hover:c?ha(e,t.range,t.series.map(e=>e.points)):void 0}))}},wi=["line","column","area"],ki=["auto","left","right"];tt("en",{editor_style_combined:"Combined",editor_series_type:"Draw as",editor_series_type_line:"Line",editor_series_type_column:"Columns",editor_series_type_area:"Area",editor_series_axis:"Value axis",editor_series_axis_auto:"Automatic (by unit)",editor_series_axis_left:"Left",editor_series_axis_right:"Right",editor_series_aggregate:"Combine with",editor_series_aggregate_auto:"As the card",editor_series_aggregate_mean:"Average",editor_series_aggregate_sum:"Sum",editor_series_aggregate_min:"Lowest",editor_series_aggregate_max:"Highest",editor_series_aggregate_first:"First",editor_series_aggregate_last:"Last",editor_series_aggregate_change:"Change (meters that count up)"});const Mi=e=>e.config,Ai=e=>Mi(e).type??"line";function Ei(e,t){const n={...e},o=t.some(e=>"column"===Ai(e));return"none"!==e.group_by&&(void 0!==e.group_by&&"auto"!==e.group_by||o)?void 0!==e.group_by&&"auto"!==e.group_by||(n.group_by=ei(Yn(e.period))):delete n.group_by,"auto"===e.aggregate&&delete n.aggregate,n}function Si(e,t){const n=e.flatMap(e=>e.points.map(e=>e.v));return ii(n,t.includes("column"))}const Ci=[..._a.map(e=>"group_by"===e.name||"aggregate"===e.name?{...e,default:"auto"}:e),{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:2.5},{name:"dots",path:["dots"],default:!1},{name:"rounded",path:["rounded"],default:!0},...wa,...$a];const Oi=[{name:"series_type",path:["type"],default:"line"},{name:"series_axis",path:["y_axis"],default:"auto"},{name:"series_color",path:["color"]},{name:"series_aggregate",path:["aggregate"],default:"auto"},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"negative_color",path:["negative_color"]}],Li={layout:"chart",group:"history",height:240,styles:i`
    ${Uo}
    ${Zo}
    ${ga}
    ${Ko}
    ${Ua}
    ${yi}
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
  `,thumbnail:()=>I`
    <path d="M10 36 V22 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M27 36 V14 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M44 36 V18 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" opacity="0.8" />
    <path d="M4 26 C14 20 22 8 32 10 S50 22 60 6" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2.5" stroke-linecap="round" />`,validate:function(e){if(void 0!==e.group_by&&!Xa.includes(e.group_by))throw new Error(`"group_by" must be one of: ${Xa.join(", ")}`);if(void 0!==e.aggregate&&!Ja.includes(e.aggregate))throw new Error(`"aggregate" must be one of: ${Ja.join(", ")}`);const t={...e};if("auto"!==e.group_by&&"none"!==e.group_by||delete t.group_by,"auto"===e.aggregate&&delete t.aggregate,So(t),co(t),rn(e),da(e),mt(e),Yo(e),void 0!==e.rounded&&"boolean"!=typeof e.rounded)throw new Error('"rounded" must be true or false');for(const n of e.entities??[]){if("object"!=typeof n)continue;const e=n;if(void 0!==e.type&&!wi.includes(e.type))throw new Error(`"type" of ${n.entity} must be one of: ${wi.join(", ")}`);if(void 0!==e.y_axis&&"left"!==e.y_axis&&"right"!==e.y_axis)throw new Error(`"y_axis" of ${n.entity} must be one of: left, right`);if(void 0!==e.aggregate&&!lo.includes(e.aggregate))throw new Error(`"aggregate" of ${n.entity} must be one of: ${lo.join(", ")}`)}},editor:function(e){const t="none"===e.config.group_by,n={...e.config,group_by:void 0},o=Aa(`combined|${va(n)}|${t}`,e.hass,()=>[...ba(e.hass,n).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:ya(e.hass,"group_by",Xa)},...t?[]:[{name:"aggregate",selector:ya(e.hass,"aggregate",Ja)}]]},{name:"curve",selector:ya(e.hass,"curve",vo)},{type:"grid",name:"",schema:[{name:"line_width",selector:wt},{name:"dots",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...ka(e.hass),...xa(e.hass)]);return Ea(e,"chart",o,Ci)},entityFields:e=>({schema:Aa("combined-entity",e,()=>[{type:"grid",name:"",schema:[{name:"series_type",selector:ya(e,"series_type",wi)},{name:"series_axis",selector:ya(e,"series_axis",ki)},{name:"series_color",selector:{text:{}}},{name:"series_aggregate",selector:ya(e,"series_aggregate",["auto",...lo])}]},{type:"grid",name:"",schema:[{name:"curve",selector:ya(e,"curve",vo)},{name:"line_width",selector:wt},{name:"dash",selector:{boolean:{}}},{name:"negative_color",selector:{text:{}}}]}]),fields:Oi}),disconnect(e){No(e),Bo(e),la(e)},render:function(e){const t={...e,raw:Ei(e.raw,e.items)},n=t.raw,o=Co(t,Date.now(),{aggregate:t=>function(e,t){const n=t.aggregate;return Mi(e).aggregate??(n&&"auto"!==n?n:ti(e)?"change":"mean")}(t,e.raw)}),a=zo(o,t),i=jo(o,t),r=a===Z&&i===Z?Z:R`${a}${i}`,s=Po(o,t),l=Go(n);if(s)return Xo("over"===l.header?{...l,header:"above"}:l,r,s);const c=o.series.map(e=>Ai(e.entity)),d=function(e){const t=e[0]?.unit,n=e.map(e=>Mi(e).y_axis??(e.unit===t?"left":"right"));return n.includes("left")?n:n.map(()=>"left")}(o.series.map(e=>e.entity)),h=o.group,u=o.series.map(e=>h?{...e,points:e.points.map(e=>({...e,t:void 0!==e.end?(e.t+e.end)/2:e.t}))}:e),p=h?Math.max(o.range.end,...o.series.flatMap(e=>e.points.map(e=>e.end??0))):0,m=h?{...o.range,end:p}:o.range,f=e=>u.filter((t,n)=>d[n]===e),g=e=>c.filter((t,n)=>d[n]===e),y=Si(f("left"),g("left"));let _=n;y&&g("left").includes("column")?_={...n,y_min:n.y_min??(y[0]>=0?0:void 0),y_max:n.y_max??(y[1]<=0?0:void 0)}:g("left").includes("area")&&(_=Ca(y,n));const v=Ro({...t,raw:_},m,y),b=v.scales,$=f("right"),x=Si($,g("right")),w={};x&&(g("right").includes("column")||g("right").includes("area"))&&(x[0]>=0&&x[0]<=x[1]/2&&(w.min=0),x[1]<=0&&x[1]>=x[0]/2&&(w.max=0));const k=$.length?dn(x,w,4):void 0,M=k?{x:b.x,y:Jt(k.domain,[Mo,0]),domain:k.domain}:void 0,A=e=>"right"===d[e.index]&&M?M:b,E=u.filter(e=>"area"===c[e.index]).map(e=>Ta(e,e.points,A(e),n,{range:m})),S=u.filter(e=>"line"===c[e.index]).map(e=>bi({...e,points:e.points},A(e),e.color,m,n)),C=u.filter(e=>"column"===c[e.index]),O=oi(o.series.filter(e=>"column"===c[e.index]).map(e=>e.points),h?1/0:o.range.end),L=!1===n.rounded?0:4,z=[];O.times.forEach((e,t)=>{const n=b.x(e),o=b.x(O.ends[t]);C.forEach((e,a)=>{const i=O.values[a][t];if(null===i)return;const r=A(e),s=Math.min(Math.max(0,r.domain[0]),r.domain[1]),[l,c]=ai(n,o,a,C.length);z.push(hi(r,l,c,Math.min(s,i),Math.max(s,i),e.color,i>=s?"top":"bottom",e.index))})});const T=O.times.map((e,t)=>(e+O.ends[t])/2),N=u.map(e=>{if("column"!==c[e.index]||h)return e;const t=C.indexOf(e);return{...e,points:T.map((e,n)=>({t:e,v:O.values[t][n]}))}}),j=new Map;for(const F of o.series)for(const e of F.points)void 0!==e.end&&j.set((e.t+e.end)/2,[e.t,e.end]);const P=ca(n),U=ot(t.hass,"chart_aria",{style:ot(t.hass,"editor_style_combined"),names:o.series.map(e=>e.entity.name).join(", ")});return Xo(l,r,Wo({axes:v,ctx:t,right:k&&M?{value:k,y:M.y}:void 0,content:I`${E.map(e=>e.body)}`,defs:I`${E.map(e=>e.defs)}`,label:U,overlay:R`<div class="columns" style="--r:${L}px">${z}</div>
        <svg class="plot lines-over" viewBox="0 0 ${ko} ${Mo}" preserveAspectRatio="none" aria-hidden="true">
          ${S}
        </svg>
        ${"over"===l.header?Jo(r):Z}
        ${P?fa(t,N,b,sa(t.host),Vo(t),{dotY:(e,t)=>"column"===c[e.index]||null===t.v?null:A(e).y(t.v),heading:e=>{const n=j.get(e);return n&&h?li(n[0],n[1],h.unit,t.hass):Mn(e,t.hass)}}):Z}`,hover:P?ha(t,m,N.map(e=>e.points)):void 0}))}},zi=e=>(Math.abs(e)<.005?0:e).toFixed(2);function Ti(e,t,n,o){const a=o*Math.PI/180;return[e+n*Math.sin(a),t-n*Math.cos(a)]}function Ni(e,t,n,o,a){const i=String(Number(n.toFixed(2))),r=a-o,[s,l]=Ti(e,t,n,o);if(r>=359.99){const[a,r]=Ti(e,t,n,o+180);return`M${zi(s)} ${zi(l)} A${i} ${i} 0 1 1 ${zi(a)} ${zi(r)} A${i} ${i} 0 1 1 ${zi(s)} ${zi(l)}`}const[c,d]=Ti(e,t,n,a),h=r>180?1:0;return`M${zi(s)} ${zi(l)} A${i} ${i} 0 ${h} 1 ${zi(c)} ${zi(d)}`}function ji(e,t){const n=e/2;return[-n+t[0]*e,-n+t[1]*e]}function Pi(e){let t=0;for(const n of e)t+=n.codePointAt(0)>=11904?1/.58:1;return t}function Ui(e,t=76,n=12,o=8,a=11){const i=e.trim();let r=[i];if(Pi(i)>a){let e=Pi(i);for(let t=i.indexOf(" ");t>0;t=i.indexOf(" ",t+1)){const n=Math.max(Pi(i.slice(0,t)),Pi(i.slice(t+1)));n<e&&(e=n,r=[i.slice(0,t),i.slice(t+1)])}}const s=Math.max(...r.map(Pi));return{lines:r,size:Math.max(o,Math.min(n,Math.floor(t/(.58*Math.max(1,s)))))}}const Fi=65,Hi=66,Di=e=>String(Math.round(1e3*e)/1e3+0);function Bi(e,t,n,o,a,i=11){const{lines:r,size:s}=Ui(e,t,n,o,i),l=a-1.2*(r.length-1)*s;return I`<text class="na" text-anchor="middle" style="font-size: ${s}px">${r.map((e,t)=>I`<tspan x=${Fi} y=${Di(l+1.2*t*s)}>${e}</tspan>`)}</text>`}const Vi={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:i`
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
  `,render(e,{show:t,hass:n}){const o=function(e,t,n){const o=n-t,a=[];return o>0?(e.forEach((i,r)=>{const s=0===r?t:Math.max(i.from,t),l=Math.min(r+1<e.length?e[r+1].from:1/0,n);l>s&&a.push({from:(s-t)/o,to:(l-t)/o,color:i.color})}),a):a}(e.bands,e.min,e.max),a=o.map((e,t)=>{const n=180*e.from-90+(t>0?1:0),a=180*e.to-90-(t<o.length-1?1:0);return a>n?I`<path class="seg" d=${Ni(Fi,Hi,50,n,a)} stroke=${Oe(e.color)}></path>`:Z}),i=Array.from({length:11},(e,t)=>{const[n,o]=Ti(Fi,Hi,36,18*t-90),[a,i]=Ti(Fi,Hi,40,18*t-90);return I`<line class="tickmark" x1=${n.toFixed(2)} y1=${o.toFixed(2)} x2=${a.toFixed(2)} y2=${i.toFixed(2)}></line>`});let r=Z;if(t.target&&null!==e.targetPosition&&e.available){const t=180*e.targetPosition-90,[n,o]=Ti(Fi,Hi,57,t),[a,i]=Ti(Fi,Hi,64,t-3),[s,l]=Ti(Fi,Hi,64,t+3);r=I`<polygon class="target-mark" points="${n.toFixed(2)},${o.toFixed(2)} ${a.toFixed(2)},${i.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const s=!t.value;return R`<div class="needle-gauge">
      <svg class=${s?"compact":""} viewBox="0 0 130 ${s?82:104}" aria-hidden="true">
        ${a} ${i} ${r}
        ${e.available?I`<g class="needle" style="transform: rotate(${Di(180*e.position-90)}deg)"><path d=${c=Fi,d=Hi,h=42,u=3,`M${zi(c)} ${zi(d-h)} L${zi(c+u)} ${zi(d)} L${zi(c-u)} ${zi(d)} Z`}></path></g>`:Z}
        <circle class="hub" cx=${Fi} cy=${Hi} r="6"></circle>
        <circle class="hub-dot" cx=${Fi} cy=${Hi} r="2.5"></circle>
        ${e.available?t.value?I`<text class="value" x=${Fi} y="94" text-anchor="middle">${e.display}</text>`:Z:s?(l=e.display,Bi(l,58,11,7,55)):function(e){return Bi(e,126,12,8,94,18)}(e.display)}
      </svg>
      ${t.name||t.icon?R`<div class="name">
              ${t.icon?R`<ha-state-icon
                      class="icon"
                      .hass=${n}
                      .stateObj=${e.stateObj}
                      .icon=${Va(e)}
                    ></ha-state-icon>`:Z}
              ${t.name?R`<span class="name-text">${e.name}</span>`:Z}
            </div>`:Z}
    </div>`;var l,c,d,h,u}};function Ri(e){return e.map(e=>e.available&&e.value>0?e.value:0)}function Ii(e,t=100){const n=e.reduce((e,t)=>e+Math.max(0,t),0);if(n<=0)return e.map(()=>0);const o=e.map(e=>Math.max(0,e)/n*t),a=o.map(Math.floor);let i=t-a.reduce((e,t)=>e+t,0);const r=o.map((e,t)=>({i:t,rest:e-a[t]})).sort((e,t)=>t.rest-e.rest||e.i-t.i);for(const{i:s}of r){if(i<=0)break;a[s]+=1,i-=1}return a}function Wi(e,t){return t>0?e/t*(180/Math.PI):0}function Zi(e){const t=Math.max(0,e.end-e.start);return`--a:${(e.start-90).toFixed(3)}deg;--len:${t.toFixed(3)}`}function qi(e,t,n,o,a="primary"){return"bands"===o?Oe(e.band.color):"shades"===o?function(e,t,n){return n<=1||t<=0?e:`color-mix(in srgb, ${e} ${Math.round(100-Math.min(t,n-1)/(n-1)*65)}%, var(--card-background-color, #fff))`}(Oe(a),t,n):Oe(function(e){const t=e.config.color;return"string"==typeof t&&""!==t.trim()?t:void 0}(e)??Ao[t%Ao.length])}function Yi(e){const t=new Set(e.filter(e=>e.available).map(e=>e.unit));return 1===t.size?[...t][0]:""}function Gi(e,t,n,o=e.map(e=>e.available?e.value:0)){const a=e.map((e,t)=>({e:e,v:o[t]})).filter(({e:e})=>e.available);if(!a.length)return;const i=a.reduce((e,{v:t})=>e+t,0),r="total"===t?i:i/a.length,s=Math.max(...a.map(({e:e})=>e.decimals));return{value:r,text:Fo(r,s,n),unit:Yi(e)}}function Xi(e){return Ee(e.config)?0:Z}function Ji(e,t){const{show:n}=t.config;return!e.length||!n.name&&!n.value&&e.every(e=>void 0===e.share)?Z:R`<div class="parts-legend">
    ${e.map(e=>R`<div
          class="entity part-row ${Ee(e.entity.config)?"interactive":""} ${e.entity.available?"":"unavailable"}"
          data-index=${e.index}
          tabindex=${Xi(e.entity)}
          aria-label=${void 0===e.share?e.entity.label:`${e.entity.label}, ${e.share}`}
        >
          <span class="swatch ${e.entity.available?"":"empty"}" style="background:${e.color}"></span>
          ${n.name?R`<span class="part-name">${e.entity.name}</span>`:Z}
          ${n.value?R`<span class="part-value value">${e.entity.display}</span>`:Z}
          ${void 0===e.share?Z:R`<span class="part-share">${e.share}</span>`}
        </div>`)}
  </div>`}function Ki(e,t){return Ho(Fo(e,0,t),"%")}function Qi(e,t){return ot(e.hass,"parts_aria",{style:ot(e.hass,t),names:e.items.map(e=>e.name).join(", ")})}function er(e,t,n){return R`<div class="centre" aria-hidden="true">
    <div class="centre-value">${e}${t?R`<span class="centre-unit">${t}</span>`:Z}</div>
    ${n?R`<div class="centre-caption">${n}</div>`:Z}
  </div>`}function tr(e,t,n){const o=e[t];if(void 0!==o&&!n.includes(o))throw new Error(`"${t}" must be one of: ${n.join(", ")}`)}function nr(e,t,n,o){const a=e[t];if(void 0!==a&&("number"!=typeof a||!Number.isFinite(a)||a<n||a>o))throw new Error(`"${t}" must be a number from ${n} to ${o}`)}function or(e,t){const n=e[t];if(void 0!==n&&"boolean"!=typeof n)throw new Error(`"${t}" must be true or false`)}function ar(e,t){const n=e[t];if(void 0!==n&&"string"!=typeof n)throw new Error(`"${t}" must be text`)}tt("en",{editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_color_by_shades:"Shades of one colour",editor_shade_color:"Shade colour (palette name or CSS colour)",editor_show_percent:"Show each share as a percentage",editor_center:"In the middle",editor_center_total:"Total",editor_center_average:"Average",editor_center_none:"Nothing",parts_total:"Total",parts_average:"Average",parts_aria:"{style} of {names}"});const ir=i`
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
`;tt("en",{editor_style_pictograph:"Pictograph",editor_unit_icon:"Icon (each entity can have its own)",editor_per_icon:"Each icon stands for (empty: automatic)",editor_group_size:"Icons per group (0: no groups)",editor_partial:"Part-fill an icon for fractions"});const rr=["series","bands"];function sr(e,t,n,o){const{show:a}=n.config,i=function(e,t,n){const o=t-e;if(!(o>0))return{count:0,per:1};const a=void 0!==n&&n>0?n:o<=20?1:o/10,i=Math.ceil(o/a-1e-9);return i>100?{count:100,per:o/100}:{count:i,per:a}}(e.min,e.max,o.perIcon),r=e.available?function(e,t,n,o){const a=Math.min(n.count,Math.max(0,(e-t)/n.per)),i=o?a:Math.floor(a+1e-9);return Array.from({length:n.count},(e,t)=>Math.min(1,Math.max(0,i-t)))}(e.value,e.min,i,o.partial):i.count?Array(i.count).fill(0):[],s=qi(e,t,n.items.length,o.colorBy),l=e.config.icon??o.unitIcon??(e.stateObj?void 0:"mdi:checkbox-blank-circle"),c=i.count>20?20:28,d=e.available?R`<span class="picto-now">${e.valueText}</span
        ><span class="picto-of"
          >/ ${Ho(Fo(e.max,Number.isInteger(e.max)?0:e.decimals,n.hass),e.unit)}</span
        >`:e.display;return R`<div
    class="entity picto-row ${Ee(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
    data-index=${t}
    tabindex=${Xi(e)}
    aria-label=${e.label}
  >
    ${a.name?R`<span class="name picto-name">${e.name}</span>`:Z}
    <div class="picto-icons" style="--mdc-icon-size:${c}px" role="img" aria-label=${e.label}>
      ${function(e,t){if(e<=0)return[];if(!(t>0))return[[0,e]];const n=[];for(let o=0;o<e;o+=t)n.push([o,Math.min(e,o+t)]);return n}(r.length,o.groupSize).map(([t,o])=>R`<span class="picto-group">${r.slice(t,o).map((o,a)=>((t,o)=>R`<span class="unit" style="--i:${o};--fill:${(100*t).toFixed(1)}%">
      <ha-state-icon class="unit-empty" .hass=${n.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon>
      <span class="unit-full" style="color:${s}"
        ><ha-state-icon .hass=${n.hass} .stateObj=${e.stateObj} .icon=${l}></ha-state-icon
      ></span>
    </span>`)(o,t+a))}</span>`)}
    </div>
    ${a.value?R`<span class="value picto-value">${d}</span>`:Z}
  </div>`}const lr=[{name:"unit_icon",path:["unit_icon"]},{name:"per_icon",path:["per_icon"]},{name:"group_size",path:["group_size"],default:5},{name:"color_by",path:["color_by"],default:"series"},{name:"partial",path:["partial"],default:!0}];const cr={layout:"chart",group:"totals",height:180,styles:i`
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
  `,thumbnail:()=>I`
    ${[0,1,2,3,4].map(e=>I`<circle cx=${10+11*e} cy="14" r="4" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />
        <path d="M${3+11*e} 30 a7 7 0 0 1 14 0 z" fill=${e<3?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`)}`,validate(e){ar(e,"unit_icon");const t=e.per_icon;if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<=0))throw new Error('"per_icon" must be a number more than 0');if(nr(e,"group_size",0,50),void 0!==e.group_size&&!Number.isInteger(e.group_size))throw new Error('"group_size" must be a whole number');tr(e,"color_by",rr),or(e,"partial")},editor:function(e){const t=Aa("pictograph",e.hass,()=>[{name:"unit_icon",selector:{icon:{}}},{type:"grid",name:"",schema:[{name:"per_icon",selector:{number:{min:0,step:"any",mode:"box"}}},{name:"group_size",selector:{number:{min:0,max:50,mode:"box"}}},{name:"color_by",selector:ya(e.hass,"color_by",rr)}]},{name:"partial",selector:{boolean:{}}}]);return Ea(e,"chart",t,lr)},render:function(e){const t={perIcon:(n=e.raw).per_icon,unitIcon:n.unit_icon||void 0,groupSize:n.group_size??5,partial:!1!==n.partial,colorBy:n.color_by??"series"};var n;return R`<div class="pictograph" role="group" aria-label=${Qi(e,"editor_style_pictograph")}>
    ${e.items.map((n,o)=>sr(n,o,e,t))}
  </div>`}};tt("en",{editor_style_pie:"Pie / donut",editor_shape:"Shape",editor_shape_donut:"Donut",editor_shape_pie:"Pie",editor_center_label:"Line under the total",editor_gap:"Space between slices",editor_rounded:"Rounded ends",editor_gradient:"Gradient fills"});const dr=["donut","pie"],hr=["total","none"],ur=["series","bands","shades"],pr=48;function mr(e,t){const n=function(e){const t=e.reduce((e,t)=>e+Math.max(0,t),0);return e.map(e=>t>0?Math.max(0,e)/t:0)}(e),o=n.filter(e=>e>0).length,a="donut"===t.shape?41.5:24;let i=0;return"donut"===t.shape&&(o>1&&(i+=Wi(t.gap,a)),t.rounded&&(i+=Wi(13,a))),function(e,t=0,n=360){const o=n-t;let a=t;return e.map(e=>{const t=a;return a+=e*o,{start:t,end:a}})}(n).map((e,t)=>n[t]>0?function(e,t){const n=e.end-e.start,o=Math.min(Math.max(0,t),n)/2;return{start:e.start+o,end:e.end-o}}(e,i):void 0)}const fr=[{name:"shape",path:["shape"],default:"donut"},{name:"color_by",path:["color_by"],default:"series"},{name:"center",path:["center"],default:"total"},{name:"center_label",path:["center_label"],default:""},{name:"gap",path:["gap"],default:2},{name:"shade_color",path:["shade_color"],default:""},{name:"rounded",path:["rounded"],default:!1},{name:"gradient",path:["gradient"],default:!1},{name:"show_percent",path:["show_percent"],default:!0}];const gr={layout:"chart",group:"totals",height:200,styles:i`
    ${ir}
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
  `,thumbnail:()=>I`
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="6"
      pathLength="100" stroke-dasharray="44 56" transform="rotate(-90 32 20)" />
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--warning-color, #f59e0b)" stroke-width="6"
      pathLength="100" stroke-dasharray="28 72" stroke-dashoffset="-46" transform="rotate(-90 32 20)" />
    <circle cx="32" cy="20" r="14" fill="none" stroke="var(--success-color, #43a047)" stroke-width="6"
      pathLength="100" stroke-dasharray="22 78" stroke-dashoffset="-76" transform="rotate(-90 32 20)" />`,validate(e){tr(e,"shape",dr),tr(e,"center",hr),tr(e,"color_by",ur),nr(e,"gap",0,10),or(e,"rounded"),or(e,"gradient"),or(e,"show_percent"),ar(e,"shade_color"),ar(e,"center_label")},editor:function(e){const t=Aa("pie",e.hass,()=>[{type:"grid",name:"",schema:[{name:"shape",selector:ya(e.hass,"shape",dr)},{name:"color_by",selector:ya(e.hass,"color_by",ur)},{name:"center",selector:ya(e.hass,"center",hr)},{name:"center_label",selector:{text:{}}},{name:"gap",selector:{number:{min:0,max:10,step:.5,mode:"slider"}}},{name:"shade_color",selector:{text:{}}}]},{name:"rounded",selector:{boolean:{}}},{name:"gradient",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Ea(e,"chart",t,fr)},render:function(e){const t={shape:(n=e.raw).shape??"donut",center:n.center??"total",colorBy:n.color_by??"series",shadeColor:n.shade_color||"primary",gap:n.gap??2,rounded:!0===n.rounded,gradient:!0===n.gradient,percent:!1!==n.show_percent,centerLabel:n.center_label??""};var n;const o=e.items,a=Ri(o),i=o.map((e,n)=>qi(e,n,o.length,t.colorBy,t.shadeColor)),r=mr(a,t),s="donut"===t.shape,l=s?41.5:24,c=s?13:pr,d=s?35/pr:0,h=r.filter(Boolean).length,u=t.gradient?I`<defs>${o.map((e,t)=>r[t]?function(e,t,n){return I`<radialGradient id=${e} gradientUnits="userSpaceOnUse" cx="50" cy="50" r=${pr}>
    <stop offset=${n} style="stop-color:color-mix(in srgb, ${t} 65%, #fff)"></stop>
    <stop offset="1" style="stop-color:${t}"></stop>
  </radialGradient>`}(`cd-pie-${t}`,i[t],d):Z)}</defs>`:Z,p=o.map((e,n)=>{const o=r[n];if(!o)return Z;const a=t.gradient?`url(#cd-pie-${n})`:i[n];return I`<g
      class="entity slice ${Ee(e.config)?"interactive":""}"
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
        style="${Zi(o)};stroke:${a}"
      ></circle>
    </g>`}),m=!s&&t.gap>0&&h>1?r.map(e=>e?I`<line class="separator" x1="50" y1="50" x2="50" y2=${1}
                stroke-width=${t.gap} style="--a:${e.start.toFixed(3)}deg"></line>`:Z):Z,f=0===h?I`<circle class="track" cx="50" cy="50" r=${l} stroke-width=${c} fill="none"></circle>`:Z,g=Ii(a),y=o.map((n,o)=>({index:o,entity:n,color:i[o],share:t.percent&&a[o]>0?Ki(g[o],e.hass):void 0})),_=Gi(o,"total",e.hass,a),v=s&&"total"===t.center&&_?er(_.text,"",t.centerLabel||Yi(o)):Z;return R`<div class="parts">
    <div class="dial">
      <svg viewBox="0 0 100 100" role="img" aria-label=${Qi(e,"editor_style_pie")}>
        ${u}${f}${p}${m}
      </svg>
      ${v}
    </div>
    ${Ji(y,e)}
  </div>`}};let yr=0;const _r=new WeakMap;const vr=60,br=60,$r=e=>String(Math.round(1e3*e)/1e3+0);function xr(e){const[t,n]=ji(e,[0,1]),o=Ni(vr,br,46,t,n),a=e<360;return{layout:"tiles",group:"gauges",height:a?135:155,minColumnWidth:128,styles:i`
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
    `,render(t,{show:n,hass:i}){const r=function(e){let t=_r.get(e);return t||(t="cd-g-"+ ++yr,_r.set(e,t)),t}(t.config),s=t.span[1]-t.span[0]<=0,l=`stroke-dasharray: ${$r(100*(t.span[1]-t.span[0]))} 100; stroke-dashoffset: ${$r(100*-t.span[0])}`,c=(d=t.band.color,Object.prototype.hasOwnProperty.call(Ce,d)?Ce[d].fallback:d);var d;const h=function(e){return!e.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",e))}(c)?`url(#${r}) ${c}`:`url(#${r})`,u=n.icon?6:0,p=(m=t.valueText,Math.min(22,Math.floor(124/Math.max(1,m.length))));var m;let f=Z;if(n.target&&null!==t.targetPosition&&t.available){const n=ji(e,[t.targetPosition,t.targetPosition])[0],[o,a]=Ti(vr,br,39.5,n),[i,r]=Ti(vr,br,52.5,n);f=I`<line class="tick" x1=${o.toFixed(2)} y1=${a.toFixed(2)} x2=${i.toFixed(2)} y2=${r.toFixed(2)}></line>`}return R`<div class="radial ${a?"cropped":""}">
        <div class="dial">
          <svg viewBox="0 0 120 ${a?100:120}" aria-hidden="true">
            <defs>
              <linearGradient id=${r} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${vr} cy=${br} r="34"></circle>
            <path class="track" d=${o}></path>
            ${t.available?I`<path
                  class="value-arc ${s?"empty":""}"
                  d=${o}
                  pathLength="100"
                  style=${l}
                  stroke=${h}
                ></path>`:Z}
            ${f}
            ${t.available?I`${n.value?I`<text
                        class="value"
                        x=${vr}
                        y=${64+u}
                        text-anchor="middle"
                        style=${p<22?`font-size: ${p}px`:Z}
                      >${t.valueText}</text>
                      <text class="unit" x=${vr} y=${80+u} text-anchor="middle">${t.unit}</text>`:Z}`:function(e){const{lines:t,size:n}=Ui(e),o=64-1.2*(t.length-1)*n/2;return I`<text class="na" text-anchor="middle" style="font-size: ${n}px">${t.map((e,t)=>I`<tspan x=${vr} y=${$r(o+1.2*t*n)}>${e}</tspan>`)}</text>`}(t.display)}
          </svg>
          ${n.icon&&t.available?R`<ha-state-icon
                  class="icon ${n.value?"":"centre"}"
                  .hass=${i}
                  .stateObj=${t.stateObj}
                  .icon=${Va(t)}
                ></ha-state-icon>`:Z}
        </div>
        ${n.name?R`<span class="name">${t.name}</span>`:Z}
      </div>`}}}const wr=xr(360),kr=xr(270);tt("en",{editor_style_rings:"Rings",editor_start_angle:"Start angle (0 is the top)",editor_end_angle:"End angle",editor_rounded_ends:"Rounded ends"});const Mr=["average","total","none"],Ar=["series","bands"];function Er(e){return{start:e.start_angle??0,end:e.end_angle??270,center:e.center??"average",colorBy:e.color_by??"series",rounded:!1!==e.rounded_ends}}const Sr=[{name:"start_angle",path:["start_angle"],default:0},{name:"end_angle",path:["end_angle"],default:270},{name:"center",path:["center"],default:"average"},{name:"color_by",path:["color_by"],default:"series"},{name:"rounded_ends",path:["rounded_ends"],default:!0}];const Cr={layout:"chart",group:"totals",height:200,styles:i`
    ${ir}
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
  `,thumbnail:()=>I`
    <circle cx="32" cy="20" r="16" fill="none" stroke="var(--divider-color, rgba(127, 127, 127, 0.3))"
      stroke-width="4" pathLength="100" stroke-dasharray="75 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="16" fill="none" stroke="var(--success-color, #43a047)" stroke-width="4"
      pathLength="100" stroke-dasharray="62 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="10" fill="none" stroke="var(--divider-color, rgba(127, 127, 127, 0.3))"
      stroke-width="4" pathLength="100" stroke-dasharray="75 100" transform="rotate(-90 32 20)" stroke-linecap="round" />
    <circle cx="32" cy="20" r="10" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="4"
      pathLength="100" stroke-dasharray="48 100" transform="rotate(-90 32 20)" stroke-linecap="round" />`,validate(e){nr(e,"start_angle",-360,360),nr(e,"end_angle",-360,360);const{start:t,end:n}=Er(e);if(n<=t||n-t>360)throw new Error('"end_angle" must be after "start_angle", and at most 360 degrees after it');tr(e,"center",Mr),tr(e,"color_by",Ar),or(e,"rounded_ends")},editor:function(e){const t=Aa("rings",e.hass,()=>[{type:"grid",name:"",schema:[{name:"start_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"end_angle",selector:{number:{min:-360,max:360,step:5,mode:"box"}}},{name:"center",selector:ya(e.hass,"center",Mr)},{name:"color_by",selector:ya(e.hass,"color_by",Ar)}]},{name:"rounded_ends",selector:{boolean:{}}}]);return Ea(e,"chart",t,Sr)},render:function(e){const t=Er(e.raw),n=e.items,{radii:o,width:a}=function(e){if(e<=0)return{radii:[],width:0};const t=Math.min(9,28/(1.33*e)),n=1.33*t;return{radii:Array.from({length:e},(e,o)=>48-t/2-o*n),width:t}}(n.length),i=n.map((e,o)=>qi(e,o,n.length,t.colorBy)),r=t.rounded?"round":"butt",s=Zi({start:t.start,end:t.end}),l=n.map((e,n)=>{const l=e.available?I`<circle class="seg" cx="50" cy="50" r=${o[n]} pathLength="360" stroke-width=${a}
          stroke-linecap=${r} style="${Zi(function(e,t,n){return{start:t,end:t+Math.min(1,Math.max(0,e))*(n-t)}}(e.position,t.start,t.end))};stroke:${i[n]}"></circle>`:Z;return I`<g
      class="entity ring ${Ee(e.config)?"interactive":""} ${e.available?"":"unavailable"}"
      data-index=${n}
      aria-label=${e.label}
    >
      <circle class="ring-track" cx="50" cy="50" r=${o[n]} pathLength="360" stroke-width=${a}
        stroke-linecap=${r} style=${s}></circle>
      ${l}
    </g>`}),c="none"===t.center?void 0:Gi(n,t.center,e.hass),d=c?er(c.text,c.unit,ot(e.hass,`parts_${t.center}`)):Z,h=n.map((e,t)=>({index:t,entity:e,color:i[t]})),u=function(e,t){const n=e=>-Math.cos(e*Math.PI/180),o=360*Math.ceil((e-180)/360)+180<=t?1:Math.max(n(e),n(t));return Math.min(100,Math.max(66,50+48*o+6))}(t.start,t.end);return R`<div class="parts">
    <div class="dial" style="aspect-ratio:100 / ${u.toFixed(2)}">
      <svg viewBox="0 0 100 ${u.toFixed(2)}" role="img" aria-label=${Qi(e,"editor_style_rings")}>
        ${l}
      </svg>
      <div class="centre-box" style="height:${(100/u*100).toFixed(2)}%">${d}</div>
    </div>
    ${Ji(h,e)}
  </div>`}};function Or(e){const[t,n]=e;return Array.from({length:10},(e,o)=>{const a=(o+.5)/10;return a>t&&a<=n})}const Lr={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:i`
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
  `,render(e,{show:t,hass:n}){const o=e.available?Or(e.span):Or([0,0]),a=t.target&&e.available&&null!==e.targetPosition?Math.min(9,Math.max(0,Math.floor(10*e.targetPosition))):-1,i=!e.available;return R`<div class="seg">
      ${t.icon?R`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${e.stateObj}
              .icon=${Va(e)}
            ></ha-state-icon>`:Z}
      <div class="body">
        ${t.name||i?R`<div class="name">
                ${t.name?R`<span class="label">${e.name}</span>`:Z}
                ${i?R`<span class="status">${e.display}</span>`:Z}
              </div>`:Z}
        <div class="cells">
          ${o.map((e,t)=>R`<i class="cell ${e?"on":""} ${t===a?"mark":""}" style="--i:${t}"></i>`)}
        </div>
      </div>
      ${t.value?R`<span class="value">${e.available?e.display:""}</span>`:Z}
    </div>`}},zr={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:i`
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
              .icon=${Va(e)}
            ></ha-state-icon>`:Z}
      ${t.value||!e.available?R`<span class="value">${e.display}</span>`:Z}
      <div class="tube">
        <div class="fill"></div>
        ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:Z}
      </div>
      ${t.name?R`<span class="name">${e.name}</span>`:Z}
    `},Tr={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:i`
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
              .icon=${Va(e)}
            ></ha-state-icon>`:Z}
      <div class="body">
        ${t.name||o?R`<div class="top">
                ${t.name?R`<span class="name">${e.name}</span>`:Z}
                ${o?R`<span class="value">${e.display}</span>`:Z}
              </div>`:Z}
        <div class="track">
          <div class="fill"></div>
          ${t.target&&null!==e.targetPosition&&e.available?R`<div class="target"></div>`:Z}
        </div>
      </div>
    `}};tt("en",{editor_style_waffle:"Waffle",editor_waffles:"Waffles",editor_waffles_one:"One, split between the entities",editor_waffles_each:"One per entity, side by side",editor_headline:"Show the first share in large type"});const Nr=["one","each"],jr=["series","bands"];function Pr(e){if(1===e.length){const t=e[0];return t.available?[Ii([t.position,1-t.position])[0]]:[0]}return Ii(Ri(e),100)}function Ur(e,t){const{col:n,row:o}=function(e){return{col:e%10,row:9-Math.floor(e/10)}}(e);return I`<rect
    class="cell ${t?"filled":""}"
    x=${10*n+.8}
    y=${10*o+.8}
    width="8.4"
    height="8.4"
    rx="1.6"
    style="--k:${e}${t?`;fill:${t}`:""}"
  ></rect>`}function Fr(e,t,n,o){let a=0;const i=e.map((e,o)=>{const i=a;if(a+=e,!e)return Z;const r=n[o];return I`<g class="entity ${Ee(r.config)?"interactive":""}" data-index=${o}>
      ${Array.from({length:e},(e,n)=>Ur(i+n,t[o]))}
    </g>`}),r=Array.from({length:100-a},(e,t)=>Ur(a+t,void 0));return R`<svg class="waffle" viewBox="0 0 100 100" role="img" aria-label=${o}>
    ${i}
    <g class="empty">${r}</g>
  </svg>`}const Hr=[{name:"waffles",path:["waffles"],default:"one"},{name:"color_by",path:["color_by"],default:"series"},{name:"headline",path:["headline"],default:!0},{name:"show_percent",path:["show_percent"],default:!0}];const Dr={layout:"chart",group:"totals",height:210,styles:i`
    ${ir}
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
  `,thumbnail:()=>I`
    ${Array.from({length:25},(e,t)=>{const n=t%5,o=4-Math.floor(t/5);return I`<rect x=${20+5*n} y=${8+5*o} width="4" height="4" rx="0.8" fill=${t<9?"var(--warning-color, #f59e0b)":t<15?"var(--primary-color, #03a9f4)":"var(--divider-color, rgba(127, 127, 127, 0.3))"} />`})}`,validate(e){tr(e,"waffles",Nr),tr(e,"color_by",jr),or(e,"headline"),or(e,"show_percent")},editor:function(e){const t=Aa("waffle",e.hass,()=>[{type:"grid",name:"",schema:[{name:"waffles",selector:ya(e.hass,"waffles",Nr)},{name:"color_by",selector:ya(e.hass,"color_by",jr)}]},{name:"headline",selector:{boolean:{}}},{name:"show_percent",selector:{boolean:{}}}]);return Ea(e,"chart",t,Hr)},render(e){const t={waffles:(n=e.raw).waffles??"one",colorBy:n.color_by??"series",headline:!1!==n.headline,percent:!1!==n.show_percent};var n;return"each"===t.waffles?function(e,t){const{show:n}=e.config;return R`<div class="waffles">
    ${e.items.map((o,a)=>{const i=qi(o,a,e.items.length,t.colorBy),[r]=Pr([o]),s=Ki(r,e.hass),l=n.value&&t.percent&&o.available&&o.display!==s;return R`<div
        class="entity waffle-item ${Ee(o.config)?"interactive":""} ${o.available?"":"unavailable"}"
        data-index=${a}
        tabindex=${Xi(o)}
      >
        ${Fr([r],[i],[o],o.label)}
        ${n.name?R`<span class="waffle-name">${o.name}</span>`:Z}
        <span class="value waffle-value">${o.available&&t.percent?s:o.display}</span>
        ${l?R`<span class="waffle-raw">${o.display}</span>`:Z}
      </div>`})}
  </div>`}(e,t):function(e,t){const n=e.items,o=n.map((e,o)=>qi(e,o,n.length,t.colorBy)),a=Pr(n),i=e=>a[e]>0||1===n.length&&n[e].available,r=n.map((r,s)=>({index:s,entity:r,color:o[s],share:!t.percent||!i(s)||t.headline&&1===n.length?void 0:Ki(a[s],e.hass)})),s=n[0],l=t.headline&&s&&i(0)?R`<div class="waffle-headline">
          <span class="waffle-big">${Ki(a[0],e.hass)}</span>
          <span class="waffle-caption">${s.name}</span>
        </div>`:Z;return R`<div class="parts">
    <div class="waffle-box">${Fr(a,o,n,Qi(e,"editor_style_waffle"))}</div>
    <div class="waffle-side">${l}${Ji(r,e)}</div>
  </div>`}(e,t)}},Br=["bars","gauges","history","totals","compare","distribution"];function Vr(e){return"chart"===e.layout}const Rr={bar:Ga,thin:Tr,segmented:Lr,tank:zr,ring:wr,needle:Vi,arc:kr,line:xi,column:_i,area:Fa,combined:Li,pie:gr,rings:Cr,pictograph:cr,waffle:Dr},Ir="important",Wr=" !"+Ir,Zr=me(class extends fe{constructor(e){if(super(e),e.type!==de||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const o=e[n];return null==o?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)null==t[o]&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in t){const e=t[o];if(null!=e){this.ft.add(o);const t="string"==typeof e&&e.endsWith(Wr);o.includes("-")||t?n.setProperty(o,t?e.slice(0,-11):e,t?Ir:""):n[o]=e}}return W}}),qr=Object.keys(Ne),Yr=Object.keys(Ce),Gr="custom",Xr={text:{}},Jr={entity:{domain:["sensor","input_number","number"]}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kr(e){return"string"==typeof e&&""!==e.trim()&&!Number.isFinite(Number(e))}const Qr={icon:{}};function es(e){return void 0===e?"none":qr.find(t=>Ne[t]&&Dt(Ne[t],e))??"custom"}function ts(e){return Yr.includes(e)}class ns extends le{constructor(){super(),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(e){e.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(e){const t=this.hass?.states[e]?.state,n=void 0===t||""===t.trim()?NaN:Number(t);return Number.isFinite(n)?n:void 0}_t(e){return ot(this.hass,e)}_getSelectors(){const e=`${nt(this.hass)}|${this.unit??""}`;if(this._selectors?.key===e)return this._selectors;const t=qr.map(e=>({value:e,label:this._t(`editor_preset_${e}`)})),n=e=>({select:{mode:"dropdown",options:e}});return this._selectors={key:e,preset:n(t),presetCustom:n([...t,{value:Gr,label:this._t("editor_preset_custom")}]),color:n([...Yr,Gr].map(e=>({value:e,label:this._t(`editor_color_${e}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e&&e.length?e:void 0}}))}_presetChanged(e){e.stopPropagation();const t=e.detail?.value;if(!t||t===Gr||!qr.includes(t))return;if(t===es(this.bands))return;const n=Ne[t];this._emit(n?structuredClone(n):void 0)}_updateBand(e,t,n){const o=[...this.bands??[]],a={...o[e]};null==n||""===n?delete a[t]:a[t]=n,o[e]=a,this._emit(o)}_fromChanged(e,t){t.stopPropagation();const n=Number(t.detail?.value);""!==t.detail?.value&&null!=t.detail?.value&&Number.isFinite(n)&&this._updateBand(e,"from",n)}_fromEntityChanged(e,t){t.stopPropagation();const n=t.detail?.value;"string"==typeof n&&""!==n&&this._updateBand(e,"from",n)}_toggleFromMode(e){const t=this.bands?.[e]?.from,n=new Set(this._entityOpen);Kr(t)?this._updateBand(e,"from",this._entityValue(t)??0):n.delete(e)||n.add(e),this._entityOpen=n}_colorChanged(e,t){t.stopPropagation();const n=t.detail?.value,o=this.bands?.[e]?.color??"primary";if(!n)return;const a=new Set(this._customOpen);n!==Gr?(a.delete(e),this._customOpen=a,n!==o&&this._updateBand(e,"color",n)):ts(o)&&(this._customOpen=a.add(e))}_customColorChanged(e,t){t.stopPropagation();const n="string"==typeof t.detail?.value?t.detail.value.trim():"";if(!n)return;const o=new Set(this._customOpen);o.delete(e),this._customOpen=o,this._updateBand(e,"color",n)}_iconChanged(e,t){t.stopPropagation(),this._updateBand(e,"icon",t.detail?.value)}_labelChanged(e,t){t.stopPropagation(),this._updateBand(e,"label",t.detail?.value)}_removeBand(e){const t=[...this.bands??[]];t.splice(e,1),this._emit(t)}_addBand(){const e=[...this.bands??[]],t=e[e.length-1]?.from,n="number"==typeof t?t:Kr(t)?this._entityValue(t)??NaN:"string"==typeof t&&""!==t.trim()?Number(t):NaN;e.push({from:Number.isFinite(n)?n+10:0,color:"primary"}),this._emit(e)}_renderBand(e,t,n){const o=!ts(e.color)||this._customOpen.has(t),a=Kr(e.from)?e.from:void 0,i=void 0!==a||this._entityOpen.has(t);return R`<div class="band">
      <span class="swatch" style=${Zr({"--swatch":Oe(e.color)})}></span>
      <ha-selector
        .required=${!1}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${n.from}
        .value=${void 0!==a?this._entityValue(a):e.from}
        .disabled=${i}
        @value-changed=${e=>this._fromChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!0}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${n.color}
        .value=${o?Gr:e.color}
        @value-changed=${e=>this._colorChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${Xr}
        .value=${e.label??""}
        @value-changed=${e=>this._labelChanged(t,e)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${Qr}
        .value=${e.icon??""}
        @value-changed=${e=>this._iconChanged(t,e)}
      ></ha-selector>
      <ha-icon-button
        class="from-mode"
        .path=${i?"M4,17V9H2V7H6V17H4M22,15C22,16.11 21.1,17 20,17H16V15H20V13H18V11H20V9H16V7H20A2,2 0 0,1 22,9V10.5A1.5,1.5 0 0,1 20.5,12A1.5,1.5 0 0,1 22,13.5V15M14,15V17H8V13C8,11.89 8.9,11 10,11H12V9H8V7H12A2,2 0 0,1 14,9V11C14,12.11 13.1,13 12,13H10V15H14Z":"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"}
        .label=${this._t(i?"editor_band_from_number":"editor_band_from_entity")}
        aria-pressed=${i?"true":"false"}
        @click=${()=>this._toggleFromMode(t)}
      ></ha-icon-button>
      <ha-icon-button
        class="remove"
        .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
        .label=${this._t("editor_remove_band")}
        @click=${()=>this._removeBand(t)}
      ></ha-icon-button>
      ${i?R`<ha-selector
              .required=${!1}
              class="from-entity"
              data-role="from-entity"
              .hass=${this.hass}
              .label=${this._t("editor_band_from_entity_label")}
              .selector=${Jr}
              .value=${a??""}
              @value-changed=${e=>this._fromEntityChanged(t,e)}
            ></ha-selector>`:Z}
      ${o?R`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${Xr}
              .value=${ts(e.color)?Oe(e.color):e.color}
              @value-changed=${e=>this._customColorChanged(t,e)}
            ></ha-selector>`:Z}
    </div>`}render(){const e=this._getSelectors(),t=es(this.bands);return R`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${t===Gr?e.presetCustom:e.preset}
        .value=${t}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((t,n)=>this._renderBand(t,n,e))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}ns.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},ns.styles=i`
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",ns);const os={number:{mode:"box",step:"any"}},as={entity:{domain:["sensor","input_number","number"]}};function is(e){return null==e||""===e?"default":"number"==typeof e||""!==e.trim()&&Number.isFinite(Number(e))?"number":"entity"}class rs extends le{willUpdate(e){e.has("value")&&"default"!==is(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const e=(e,t)=>ot(this.hass,e,t),t=[{value:"default",label:e("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:e("editor_limit_number")},{value:"entity",label:e("editor_limit_entity")}],n=t.map(e=>e.label).join("|");return this._modeSelector?.key!==n&&(this._modeSelector={key:n,selector:{select:{mode:"dropdown",options:t}}}),this._modeSelector.selector}get _currentMode(){return this._mode??is(this.value)}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e}}))}_modeChanged(e){e.stopPropagation();const t=e.detail?.value;t&&t!==this._currentMode&&(this._mode=t,void 0!==this.value&&this._emit(void 0))}_numberChanged(e){e.stopPropagation();const t=e.detail?.value,n="number"==typeof t?t:""===t||null==t?NaN:Number(t);this._mode="number",this._emit(Number.isFinite(n)?n:void 0)}_entityChanged(e){e.stopPropagation();const t=e.detail?.value;this._mode="entity",this._emit("string"==typeof t&&""!==t?t:void 0)}render(){const e=e=>ot(this.hass,e),t=this._currentMode;return R`<ha-selector
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
              .selector=${os}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===t?R`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${e("editor_limit_entity")}
                .selector=${as}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:Z}`}}rs.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},rs.styles=i`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",rs);const ss=["min","max","target"];function ls(e,t,n){const o=t&&!n?e?.states[t]?.attributes?.unit_of_measurement:void 0;return"string"==typeof o&&o?o:void 0}class cs extends le{constructor(){super(),this._computeLabel=e=>this._t(`editor_${e.name}`),this._expanded=new Set}_t(e,t){return ot(this.hass,e,t)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(e){e.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e.entities??[]}}))}_set(e,t,n){this._emit(function(e,t,n,o){if("entity"===n&&(at(o)||"string"!=typeof o))return e;const a=[...e.entities??[]],i=a[t];if(void 0===i)return e;const r="string"==typeof i?{entity:i}:{...i};at(o)?delete r[n]:r[n]=o;const s=Object.keys(r);return a[t]=1===s.length&&"entity"===s[0]&&"string"==typeof r.entity?r.entity:r,{...e,entities:a}}(this._asConfig,e,t,n))}_move(e,t){const n=new Set;for(const o of this._expanded)n.add(o===e?t:o===t?e:o);this._expanded=n,this._emit(function(e,t,n){const o=[...e.entities??[]];if(t<0||t>=o.length||t===n)return e;const[a]=o.splice(t,1);return o.splice(Math.max(0,Math.min(n,o.length)),0,a),{...e,entities:o}}(this._asConfig,e,t))}_remove(e){const t=new Set;for(const n of this._expanded)n!==e&&t.add(n>e?n-1:n);this._expanded=t,this._emit(function(e,t){const n=[...e.entities??[]];return t<0||t>=n.length?e:(n.splice(t,1),{...e,entities:n})}(this._asConfig,e))}_toggle(e){const t=new Set(this._expanded);t.delete(e)||t.add(e),this._expanded=t}_add(e){e.stopPropagation();const t=e.detail?.value;"string"==typeof t&&""!==t&&(e.target.value="",this._emit(function(e,t){return{...e,entities:[...e.entities??[],t]}}(this._asConfig,t)))}_formChanged(e,t,n){n.stopPropagation();const o=this.entities?.[e];if(void 0===o)return;const a="string"==typeof o?{entity:o}:o,i=Vt(a,t,n.detail?.value??{});if(i===a)return;const r=[...this.entities??[]],s=Object.keys(i);r[e]=1===s.length&&"entity"===s[0]?i.entity:i,this._emit({type:"",entities:r})}_rowLabel(e){const t=this.hass?.states[e];return t?{text:t.attributes.friendly_name||e,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:e}),missing:!0}:{text:e,missing:!1}}_form(e,t,n,o,a){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${Bt(n,a)}
      .schema=${o}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(t,a,e)}
    ></ha-form>`}_renderOverrides(e,t){const n=e=>t=>{t.stopPropagation(),e(t.detail?.value)};return R`<div class="overrides">
      ${this._form("entity-attribute",t,e,function(e){let t=Ot.get(e);return t||(t=[{name:"attribute",selector:{attribute:{entity_id:e}}}],Ot.set(e,t)),t}(e.entity),$t)}
      ${this._form("entity-text",t,e,Ct,bt)}
      ${this.chartFields?this._form("entity-chart",t,e,this.chartFields.schema,this.chartFields.fields):Z}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${e.icon??""}
        @value-changed=${n(e=>this._set(t,"icon",e))}
      ></ha-icon-picker>
      ${ss.map(o=>R`<cd-limit-field
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
        .unit=${e.unit??this.unit??ls(this.hass,e.entity,e.attribute)}
        @value-changed=${n(e=>this._set(t,"severity",e))}
      ></cd-bands-editor>
      ${this._form("entity-actions",t,e,St,At)}
    </div>`}_renderRow(e,t,n){const o=function(e){return"string"==typeof e?e:e.entity}(e),a="string"==typeof e?{entity:e}:e,i=this._rowLabel(o),r=this._expanded.has(t);return R`<div class="entity">
      <span class="label ${i.missing?"missing":""}">${i.text}</span>
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${Qe(o)}
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
          .label=${this._t(r?"editor_hide_options":"editor_show_options")}
          aria-expanded=${r?"true":"false"}
          @click=${()=>this._toggle(t)}
        ></ha-icon-button>
      </div>
      ${r?this._renderOverrides(a,t):Z}
    </div>`}render(){const e=this.entities??[];return R`${e.map((t,n)=>this._renderRow(t,n,e.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}cs.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chartFields:{attribute:!1},_expanded:{state:!0}},cs.styles=i`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",cs);class ds extends le{constructor(){super(...arguments),this._label=e=>ot(this.hass,e),this._computeLabel=e=>ot(this.hass,`editor_${e.name}`),this._computeRuleLabel=e=>ot(this.hass,`editor_rule_${e.name.slice(e.name.indexOf("_")+1)}`)}setConfig(e){this._config=e}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]}),n=t?.constructor;await(n?.getConfigElement?.())}catch{}}()}_commit(e){this._config=e,function(e,t){e.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:t}}))}(this,e)}_formChanged(e,t){if(t.stopPropagation(),!this._config)return;const n=t.detail?.value??{};this._commit(Vt(this._config,e,n))}_form(e,t,n){return R`<ha-form
      data-section=${e}
      .hass=${this.hass}
      .data=${Bt(this._config,n)}
      .schema=${t}
      .computeLabel=${this._computeLabel}
      @value-changed=${e=>this._formChanged(n,e)}
    ></ha-form>`}_panel(e,t){return R`<ha-expansion-panel .header=${this._label(`editor_section_${e}`)} outlined>
      <div class="panel section-${e}">${t}</div>
    </ha-expansion-panel>`}_subChanged(e,t){t.stopPropagation(),this._config&&this._commit(st(this._config,e,t.detail?.value))}_chartFields(){const e=Rr[this._config?.style??"bar"];return e&&Vr(e)&&this._config?e.entityFields?.(this.hass,this._config):void 0}renderEntities(){return R`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        @value-changed=${e=>this._subChanged(["entities"],e)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(e){const t=this._config?.[e],n={};if(!t||"object"!=typeof t)return n;for(const[o,a]of Object.entries(t))n[`${e}_${o}`]=Array.isArray(a)?a:[a];return n}_ruleChanged(e,t){if(t.stopPropagation(),!this._config)return;const n=t.detail?.value??{},o=this._ruleData(e);let a=this._config;for(const i of Nt[e]){const t=`${e}_${i}`,r=Array.isArray(n[t])?n[t]:[];Dt(o[t]??[],r)||(a=st(a,[e,i],r.length?r:void 0))}a!==this._config&&this._commit(a)}_ruleForm(e){return R`<div class="rules-heading">${this._label(`editor_${e}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${e}_help`)}</p>
      <ha-form
        data-section=${e}
        .hass=${this.hass}
        .data=${this._ruleData(e)}
        .schema=${Ut(e,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${t=>this._ruleChanged(e,t)}
      ></ha-form>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([e,t])=>R`<cd-limit-field
          data-limit=${e}
          .hass=${this.hass}
          .label=${this._label(`editor_${e}`)}
          .value=${this._config?.[e]}
          .defaultLabel=${t}
          @value-changed=${t=>this._subChanged([e],t)}
        ></cd-limit-field>`)}renderColours(){return R`${this._toggles(yt)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${e=>this._subChanged(["severity"],e)}
      ></cd-bands-editor>`}_firstEntityUnit(){const e=this._config?.entities?.[0];return"string"==typeof e?ls(this.hass,e):e?.unit??ls(this.hass,e?.entity,e?.attribute)}_selectStyle(e){this._config&&this._commit(st(this._config,["style"],"bar"===e?void 0:e))}renderStyle(){const e=this._config?.style??"bar";return R`${Br.map(t=>{const n=Re.filter(e=>Rr[e].group===t);return n.length?R`<div class="style-group">${this._label(`editor_group_${t}`)}</div>
        <div class="styles" data-group=${t}>
          ${n.map(t=>{const n=Rr[t],o=Vr(n)?R`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${n.thumbnail()}
                </svg>`:Gt(t);return R`<button
              type="button"
              class="style"
              data-style=${t}
              aria-pressed=${e===t?"true":"false"}
              @click=${()=>this._selectStyle(t)}
            >
              ${o}<span>${this._label(`editor_style_${t}`)}</span>
            </button>`})}
        </div>`:Z})}`}renderChart(){const e=Rr[this._config?.style??"bar"];return e&&Vr(e)&&e.editor&&this._config?this._panel("chart",e.editor({hass:this.hass,config:this._config,commit:e=>this._commit(e)})):Z}renderDisplay(){return R`${this._toggles(gt)}
    ${this._form("display",function(e){const t=nt(e);return Ft?.language!==t&&(Ft={language:t,schema:Tt(e)}),Ft.schema}(this.hass),_t)}`}_toggles(e){const t=Bt(this._config,e);return R`<div class="toggles">
      ${e.map(({name:n})=>{const o=this._label(`editor_${n}`),a=!0===t[n];return R`<div class="toggle">
          <span @click=${()=>this._toggle(e,n,!a)}>${o}</span
          ><ha-switch
            data-name=${n}
            aria-label=${o}
            .checked=${Qe(a)}
            @change=${t=>this._toggle(e,n,t.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(e,t,n){if(!this._config)return;const o=Bt(this._config,e);this._commit(Vt(this._config,e,{...o,[t]:n}))}renderActions(){return this._form("actions",St,vt)}render(){return this._config?R`<div class="title">${this._form("title",Et,ft)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:Z}}ds.properties={hass:{attribute:!1},_config:{state:!0}},ds.styles=i`
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",ds);const hs=i`
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
`;console.info("%c CHARTDECK %c 1.3.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const us={rows:16,tiles:8};function ps(e){const t=us[e.layout];return Math.max(1,Math.floor((368+t)/((e.minColumnWidth??0)+t)))}class ms extends le{constructor(){super(...arguments),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(e){const t=Object.values(e?.states??{}).filter(e=>e.entity_id.startsWith("sensor.")&&""!==e.state.trim()&&Number.isFinite(Number(e.state))),n=e=>"battery"===e.attributes?.device_class;return t.sort((e,t)=>n(e)!==n(t)?n(e)?-1:1:e.entity_id<t.entity_id?-1:e.entity_id>t.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:t.slice(0,3).map(e=>e.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(e){const t=function(e){if(!e||"object"!=typeof e)throw new Error("Invalid configuration");const t=e.style??"bar";if(!Re.includes(t))throw new Error(`Unknown style "${String(t)}". Use one of: ${Re.join(", ")}`);const n=e.sort??"none";if(!We.includes(n))throw new Error(`Unknown sort "${String(n)}". Use one of: ${We.join(", ")}`);if(void 0!==e.entities&&!Array.isArray(e.entities))throw new Error('"entities" must be a list');const o=(e.entities??[]).map((t,n)=>Ke(t,e,n)),a={name:!0,value:!0,icon:!0,target:!0,legend:!1,...e.show},i=Ye(e.columns,"columns",1),r=Ye(e.limit,"limit",1),s=Pe(e.include,"include"),l=Pe(e.exclude,"exclude");s&&Ke("sensor.chartdeck_check",e,0);const c={style:t,entities:o,hideUnavailable:!0===e.hide_unavailable,cardOptions:e,show:a,sort:n,animate:!1!==e.animate,colorIcon:!0===e.color_icon,legendBands:Ge(e.severity)??Ie};return void 0!==e.title&&(c.title=e.title),void 0!==i&&(c.columns=i),void 0!==r&&(c.limit=r),s&&(c.include=s),l&&(c.exclude=l),c}(e),n=Rr[t.style];if(Vr(n)&&n.validate?.(e),this._watched=function(e){const t=new Set;for(const n of e.entities){t.add(n.entity);for(const e of[n.min,n.max,n.target,...n.severity.map(e=>e.from)])"string"==typeof e&&""!==e&&t.add(e)}for(const n of e.legendBands)"string"==typeof n.from&&t.add(n.from);return t}(t),Vr(n))for(const o of n.watch?.(e)??[])this._watched.add(o);this._config&&this._config.style!==t.style&&this._disconnectStyle(),this._config=t}get _styleName(){return this._config?.style??"bar"}get _style(){return Rr[this._styleName]}_legend(e){const t=this._config;if(!t?.show.legend||0===this._count())return[];const n=e?.decimals??1;return function(e,t,n){const o=n?` ${n}`:"",a=[];return e.forEach((n,i)=>{const r=e[i+1],s=Oe(n.color);n.label?a.push({color:s,text:n.label}):Number.isFinite(n.from)?r?a.push({color:s,text:`${t(n.from)}–${t(r.from)}${o}`}):a.push({color:s,text:`${t(n.from)}${o}+`}):r&&a.push({color:s,text:`< ${t(r.from)}${o}`})}),a}(Za(t.legendBands,this.hass),e=>Fo(e,n,this.hass),e?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const e=this._config;if(!e)return 0;const t=this._style,n=16+(e.title?73:0)+(this._legend().length>0?32:0);if(Vr(t))return n+t.height;const o=this._count(),a=void 0!==e.columns?Math.min(e.columns,ps(t)):"rows"===t.layout?1:Math.min(o,t.tilesPerRow??3,ps(t));return n+(0===o?0:Math.ceil(o/Math.max(1,a)))*t.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const e=this._count();if(Vr(this._style))return{columns:12,rows:"auto",min_columns:6,min_rows:2};const t="rows"===this._style.layout;return{columns:t||e<=1?6:12,rows:"auto",min_columns:t?6:3,min_rows:1}}shouldUpdate(e){if(0===e.size)return!0;if([...e.keys()].some(e=>"hass"!==e))return!0;if(!e.has("hass"))return!1;const t=e.get("hass"),n=this.hass;if(!t||!n)return!0;for(const o of this._watched)if(t.states[o]!==n.states[o])return!0;if(this._config?.include){const e=Ya(this._config,n);if(e.length!==this._matched.length||e.some((e,t)=>e!==this._matched[t]))return!0;for(const o of e)if(t.states[o]!==n.states[o])return!0}return t.themes?.darkMode!==n.themes?.darkMode||t.themes?.theme!==n.themes?.theme||t.locale!==n.locale}willUpdate(){const e=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",e),(e||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const e=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const e=this._config?Rr[this._config.style]:void 0;e&&Vr(e)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const e=this._config?Rr[this._config.style]:void 0;e&&Vr(e)&&e.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle();for(const e of this._detachers.values())e();this._detachers.clear()}_syncActions(){const e=this.shadowRoot;if(!e)return;const t=new Set(e.querySelectorAll(".entity"));for(const[n,o]of this._detachers)t.has(n)||(o(),this._detachers.delete(n));for(const n of t)this._detachers.has(n)||this._detachers.set(n,Se(n,()=>this._items[Number(n.dataset.index)].config))}_renderEntity(e,t,n,o){const a=this._config,i=Ee(e.config),r=function(e){const t=Oe(e);return{start:t,end:`color-mix(in srgb, ${t} 80%, #fff)`}}(e.band.color),s=`--start:${e.span[0]};--end:${e.span[1]};--pos:${e.position};--target:${e.targetPosition??0};--c-start:${r.start};--c-end:${r.end}`;return R`<div
      class="entity ${i?"interactive":""} ${e.available?"":"unavailable"} ${a.colorIcon&&e.available?"icon-band":""}"
      data-index=${t}
      role="meter"
      aria-valuenow=${e.available?String(e.value):Z}
      aria-valuemin=${e.min}
      aria-valuemax=${e.max}
      aria-label=${e.label}
      tabindex=${i?0:Z}
      style=${s}
    >
      ${n.render(e,{show:a.show,hass:o})}
    </div>`}render(){const e=this._config;if(!e)return Z;const t=this.hass,n=this._style;let o,a,i;const r=t?function(e,t){const n=Ya(e,t).map((t,n)=>Ke(t,e.cardOptions,n)),o=[...e.entities,...n].map(e=>qa(e,t));return e.hideUnavailable?o.filter(e=>e.available):o}(e,t):[];if(this._matched=t?Ya(e,t):[],0!==e.entities.length||e.include)if(t)if(0===r.length)this._items=[],o=R`<div class="hint">${ot(t,e.include?"no_matches":"none_available")}</div>`;else{a=r[0];const s=new Map,l=new Set;r.forEach((e,t)=>{s.set(e,l.has(e.entityId)?`${e.entityId}#${t}`:e.entityId),l.add(e.entityId)}),this._items=function(e,t){if("none"===t)return[...e];const n="ascending"===t?1:-1;return e.map((e,t)=>({item:e,index:t})).sort((e,t)=>{if(e.item.available!==t.item.available)return e.item.available?-1:1;if(e.item.available){const o=(e.item.position-t.item.position)*n;if(0!==o)return o}return e.index-t.index}).map(e=>e.item)}(r,e.sort).slice(0,e.limit);const c=this._items.filter(e=>e.available).map(e=>e.display.length);if(i=c.length?Math.max(...c):void 0,Vr(n))o=R`<div class="chart">
          ${n.render({items:this._items,config:e,raw:e.cardOptions,hass:t,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const a="tiles"===n.layout,i=function(e,t){if(void 0===t)return"rows"===e.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const n=(t-1)*us[e.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${e.minColumnWidth??0}px, 100%), calc((100% - ${n}px) / ${t} - 0.5px)), 1fr))`}(n,e.columns);o=R`<div
          class="entities layout-${n.layout} ${a&&void 0!==e.columns?"has-columns":""}"
          style=${i}
        >
          ${Me(this._items,e=>s.get(e),(e,o)=>this._renderEntity(e,o,n,t))}
        </div>`}}else this._items=[],o=Z;else this._items=[],o=R`<div class="hint">${ot(t,"no_entities")}</div>`;const s=this._legend(a);return R`<ha-card .header=${e.title}>
      <div
        class="content style-${this._styleName}"
        style=${void 0===i?Z:`--cd-value-ch: ${i}`}
      >
        ${o}
      </div>
      ${s.length?R`<div class="legend">
              ${s.map(e=>R`<span class="legend-item"
                    ><span class="dot" style="background:${e.color}"></span>${e.text}</span
                  >`)}
            </div>`:Z}
    </ha-card>`}}ms.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},ms.styles=[hs,...Object.values(Rr).map(e=>e.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",ms);const fs=window.customCards??=[];fs.some(e=>"chartdeck-card"===e.type)||fs.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{ms as ChartdeckCard};
