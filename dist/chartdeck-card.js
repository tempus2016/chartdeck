/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let i=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const n=this.t;if(e&&void 0===t){const e=void 0!==n&&1===n.length;e&&(t=o.get(n)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(n,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,n,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1],t[0]);return new i(o,t,n)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,_=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},v=(t,e)=>!s(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){const{get:o,set:i}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const r=o?.call(this);i?.call(this,e),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const t=this._$Eu(e,n);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((n,o)=>{if(e)n.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),i=t.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,n.appendChild(o)}})(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(void 0!==o&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:y).toAttribute(e,n.type);this._$Em=t,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){const n=this.constructor,o=n._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=n.getPropertyOptions(o),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o;const r=i.fromAttribute(e,t.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(t,e,n,o=!1,i){if(void 0!==t){const r=this.constructor;if(!1===o&&(i=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??v)(i,e)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:i},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==i||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,n,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=t=>t,k=x.trustedTypes,M=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,S=`<${C}>`,O=document,L=()=>O.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,j="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,P=/>/g,H=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,D=/"/g,V=/^(?:script|style|textarea|title)$/i,R=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),B=R(1),I=R(2),Z=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,Y=O.createTreeWalker(O,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}class X{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let i=0,r=0;const a=t.length-1,s=this.parts,[l,c]=((t,e)=>{const n=t.length-1,o=[];let i,r=2===e?"<svg>":3===e?"<math>":"",a=U;for(let s=0;s<n;s++){const e=t[s];let n,l,c=-1,d=0;for(;d<e.length&&(a.lastIndex=d,l=a.exec(e),null!==l);)d=a.lastIndex,a===U?"!--"===l[1]?a=z:void 0!==l[1]?a=P:void 0!==l[2]?(V.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=i??U,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?H:'"'===l[3]?D:F):a===D||a===F?a=H:a===z||a===P?a=U:(a=H,i=void 0);const h=a===H&&t[s+1].startsWith("/>")?" ":"";r+=a===U?e+S:c>=0?(o.push(n),e.slice(0,c)+A+e.slice(c)+E+h):e+E+(-2===c?s:h)}return[G(t,r+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]})(t,e);if(this.el=X.createElement(l,n),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Y.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(A)){const e=c[r++],n=o.getAttribute(t).split(E),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:i,name:a[2],strings:n,ctor:"."===a[1]?et:"?"===a[1]?nt:"@"===a[1]?ot:tt}),o.removeAttribute(t)}else t.startsWith(E)&&(s.push({type:6,index:i}),o.removeAttribute(t));if(V.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=k?k.emptyScript:"";for(let n=0;n<e;n++)o.append(t[n],L()),Y.nextNode(),s.push({type:2,index:++i});o.append(t[e],L())}}}else if(8===o.nodeType)if(o.data===C)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)s.push({type:7,index:i}),t+=E.length-1}i++}}static createElement(t,e){const n=O.createElement("template");return n.innerHTML=t,n}}function J(t,e,n=t,o){if(e===Z)return e;let i=void 0!==o?n._$Co?.[o]:n._$Cl;const r=T(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(t),i._$AT(t,n,o)),void 0!==o?(n._$Co??=[])[o]=i:n._$Cl=i),void 0!==i&&(e=J(t,i._$AS(t,e.values),i,o)),e}let K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);Y.currentNode=o;let i=Y.nextNode(),r=0,a=0,s=n[0];for(;void 0!==s;){if(r===s.index){let e;2===s.type?e=new Q(i,i.nextSibling,this,t):1===s.type?e=new s.ctor(i,s.name,s.strings,this,t):6===s.type&&(e=new it(i,this,t)),this._$AV.push(e),s=n[++a]}r!==s?.index&&(i=Y.nextNode(),r++)}return Y.currentNode=O,o}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),T(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=X.createElement(G(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new K(o,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new X(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,o=0;for(const i of t)o===e.length?e.push(n=new Q(this.O(L()),this.O(L()),this,this.options)):n=e[o],n._$AI(i),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=W}_$AI(t,e=this,n,o){const i=this.strings;let r=!1;if(void 0===i)t=J(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==Z,r&&(this._$AH=t);else{const o=t;let a,s;for(t=i[0],a=0;a<i.length-1;a++)s=J(this,o[n+a],e,a),s===Z&&(s=this._$AH[a]),r||=!T(s)||s!==this._$AH[a],s===W?t=W:t!==W&&(t+=(s??"")+i[a+1]),this._$AH[a]=s}r&&!o&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class nt extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class ot extends tt{constructor(t,e,n,o,i){super(t,e,n,o,i),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??W)===Z)return;const n=this._$AH,o=t===W&&n!==W||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==W&&(n===W||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt={I:Q},at=x.litHtmlPolyfillSupport;at?.(X,Q),(x.litHtmlVersions??=[]).push("3.3.3");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const o=n?.renderBefore??e;let i=o._$litPart$;if(void 0===i){const t=n?.renderBefore??null;o._$litPart$=i=new Q(e.insertBefore(L(),t),t,void 0,n??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};lt._$litElement$=!0,lt.finalized=!0,st.litElementHydrateSupport?.({LitElement:lt});const ct=st.litElementPolyfillSupport;ct?.({LitElement:lt}),(st.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=1,ht=2,ut=3,pt=4,mt=t=>(...e)=>({_$litDirective$:t,values:e});let ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:gt}=rt,_t=t=>t,yt=()=>document.createComment(""),vt=(t,e,n)=>{const o=t._$AA.parentNode,i=void 0===e?t._$AB:e._$AA;if(void 0===n){const e=o.insertBefore(yt(),i),r=o.insertBefore(yt(),i);n=new gt(e,r,t,t.options)}else{const e=n._$AB.nextSibling,r=n._$AM,a=r!==t;if(a){let e;n._$AQ?.(t),n._$AM=t,void 0!==n._$AP&&(e=t._$AU)!==r._$AU&&n._$AP(e)}if(e!==i||a){let t=n._$AA;for(;t!==e;){const e=_t(t).nextSibling;_t(o).insertBefore(t,i),t=e}}}return n},bt=(t,e,n=t)=>(t._$AI(e,n),t),$t={},xt=(t,e=$t)=>t._$AH=e,wt=t=>{t._$AR(),t._$AA.remove()},kt=(t,e,n)=>{const o=new Map;for(let i=e;i<=n;i++)o.set(t[i],i);return o},Mt=mt(class extends ft{constructor(t){if(super(t),t.type!==ht)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let o;void 0===n?n=e:void 0!==e&&(o=e);const i=[],r=[];let a=0;for(const s of t)i[a]=o?o(s,a):a,r[a]=n(s,a),a++;return{values:r,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,o]){const i=(t=>t._$AH)(t),{values:r,keys:a}=this.dt(e,n,o);if(!Array.isArray(i))return this.ut=a,r;const s=this.ut??=[],l=[];let c,d,h=0,u=i.length-1,p=0,m=r.length-1;for(;h<=u&&p<=m;)if(null===i[h])h++;else if(null===i[u])u--;else if(s[h]===a[p])l[p]=bt(i[h],r[p]),h++,p++;else if(s[u]===a[m])l[m]=bt(i[u],r[m]),u--,m--;else if(s[h]===a[m])l[m]=bt(i[h],r[m]),vt(t,l[m+1],i[h]),h++,m--;else if(s[u]===a[p])l[p]=bt(i[u],r[p]),vt(t,i[h],i[u]),u--,p++;else if(void 0===c&&(c=kt(a,p,m),d=kt(s,h,u)),c.has(s[h]))if(c.has(s[u])){const e=d.get(a[p]),n=void 0!==e?i[e]:null;if(null===n){const e=vt(t,i[h]);bt(e,r[p]),l[p]=e}else l[p]=bt(n,r[p]),vt(t,i[h],n),i[e]=null;p++}else wt(i[u]),u--;else wt(i[h]),h++;for(;p<=m;){const e=vt(t,l[m+1]);bt(e,r[p]),l[p++]=e}for(;h<=u;){const t=i[h++];null!==t&&wt(t)}return this.ut=a,xt(t,l),Z}}),At=t=>!!t&&"none"!==t.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(t,e){let n,o,i=0,r=0,a=!1,s=!1;const l=n=>{const o=e(),i="tap"===n?o.tap_action:"hold"===n?o.hold_action:o.double_tap_action;At(i)&&t.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:o,action:n}}))},c=()=>{void 0!==n&&clearTimeout(n),n=void 0},d=t=>{const o=t;o.button>0||(a=!0,s=!1,i=o.clientX,r=o.clientY,c(),At(e().hold_action)&&(n=setTimeout(()=>{n=void 0,s=!0,l("hold")},500)))},h=t=>{if(!a)return;const e=t;Math.hypot(e.clientX-i,e.clientY-r)>10&&(c(),a=!1)},u=()=>{c(),a=!1},p=()=>{const t=a;c(),a=!1,t&&!s?At(e().double_tap_action)?void 0!==o?(clearTimeout(o),o=void 0,l("double_tap")):o=setTimeout(()=>{o=void 0,l("tap")},250):l("tap"):s=!1},m=t=>{const e=t;e.repeat||"Enter"!==e.key&&" "!==e.key||(" "===e.key&&e.preventDefault(),l("tap"))},f=t=>{At(e().hold_action)&&t.preventDefault()};return t.addEventListener("pointerdown",d),t.addEventListener("pointermove",h),t.addEventListener("pointerup",p),t.addEventListener("pointercancel",u),t.addEventListener("pointerleave",u),t.addEventListener("keydown",m),t.addEventListener("contextmenu",f),()=>{c(),void 0!==o&&clearTimeout(o),o=void 0,t.removeEventListener("pointerdown",d),t.removeEventListener("pointermove",h),t.removeEventListener("pointerup",p),t.removeEventListener("pointercancel",u),t.removeEventListener("pointerleave",u),t.removeEventListener("keydown",m),t.removeEventListener("contextmenu",f)}}const Ct={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function St(t){if(Object.prototype.hasOwnProperty.call(Ct,t)){const{variable:e,fallback:n}=Ct[t];return`var(${e}, ${n})`}return t}const Ot=new Set(["amber"]);function Lt(t){if(Object.prototype.hasOwnProperty.call(Ct,t))return Ot.has(t)?"dark":"light";const e=function(t){const e=t.trim().toLowerCase(),n=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(e);if(n){const t=n[1].length<=4?[...n[1]].map(t=>t+t).join(""):n[1],[e,o,i]=[0,2,4].map(e=>parseInt(t.slice(e,e+2),16));return[e,o,i,8===t.length?parseInt(t.slice(6,8),16)/255:1]}const o=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(e);if(o){const[t,e,n]=[o[1],o[2],o[3]].map(t=>Math.min(255,Number(t))),i=void 0===o[4]?1:Number(o[4])/(o[5]?100:1);return[t,e,n,Math.min(1,i)]}}(t);return e?e[3]<.5?"theme":function([t,e,n]){const o=t=>{const e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4};return.2126*o(t)+.7152*o(e)+.0722*o(n)}([e[0],e[1],e[2]])>.4?"dark":"light":"light"}function Tt(t,e){let n=e[0];for(const o of e){if(!(o.from<=t))break;n=o}return n}const Nt={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},jt=["label","area","floor","device_class","domain","entity"];function Ut(t,e){if(null==t)return;if("object"!=typeof t||Array.isArray(t))throw new Error(`"${e}" must list what to match, such as "area" or "device_class"`);const n="include"===e?jt.filter(t=>"entity"!==t):jt,o={};for(const[i,r]of Object.entries(t)){if(!n.includes(i))throw new Error(`"${e}" can't match on "${i}". Use: ${n.join(", ")}`);const t=(Array.isArray(r)?r:[r]).filter(t=>null!=t&&""!==t);if(t.some(t=>"string"!=typeof t))throw new Error(`"${e}.${i}" must be text or a list of text`);t.length&&(o[i]=t)}return Object.keys(o).length?o:void 0}function zt(t){const e=t.state;return"unavailable"===e||"unknown"===e||""!==e.trim()&&Number.isFinite(Number(e))}function Pt(t,e){const n=t.entity_id,o=e.entities?.[n],i=o?.device_id?e.devices?.[o.device_id]:void 0,r=o?.area_id??i?.area_id??void 0,a=t.attributes?.device_class;return{label:[...o?.labels??[],...i?.labels??[]],area:r,floor:r?e.areas?.[r]?.floor_id??void 0:void 0,device_class:"string"==typeof a?a:void 0,domain:n.slice(0,n.indexOf(".")),entity:n}}function Ht(t,e,n){const o=t[e],i=n[e];return Array.isArray(i)?i.some(t=>o.includes(t)):void 0!==i&&o.includes(i)}function Ft(t,e){return Object.keys(t).every(n=>Ht(t,n,e))}function Dt(t,e){return!!t&&Object.keys(t).some(n=>Ht(t,n,e))}const Vt=new WeakMap;const Rt=["bar","thin","segmented","tank","ring","needle","arc","line","column","area","combined"],Bt=[{from:-1/0,color:"primary"}],It=["none","ascending","descending"];function Zt(t){if("number"==typeof t)return Number.isFinite(t)?t:void 0;if("string"==typeof t&&""!==t.trim()){const e=Number(t);return Number.isFinite(e)?e:void 0}}function Wt(t,e){if(null==t||""===t)return;const n=Zt(t);if(void 0!==n)return n;if("string"==typeof t)return t;throw new Error(`"${e}" must be a number or an entity id`)}function qt(t,e,n,o=1/0){if(null==t||""===t)return;const i=Zt(t);if(void 0===i||!Number.isInteger(i)||i<n||i>o){throw new Error(`"${e}" must be a whole number ${o===1/0?`of at least ${n}`:`from ${n} to ${o}`}`)}return i}function Yt(t){if(null==t)return;if(!Array.isArray(t))throw new Error('"severity" must be a list of bands');if(0===t.length)return;const e=t.map((t,e)=>{let n;try{n=Wt(t?.from,"from")}catch{n=void 0}if(void 0===n)throw new Error(`Severity band ${e+1}: "from" must be a number or an entity id`);if("string"!=typeof t.color||!t.color)throw new Error(`Severity band ${e+1}: "color" is required`);return{...t,from:n}});return e.every(t=>"number"==typeof t.from)?e.sort((t,e)=>t.from-e.from):e}function Gt(t,e,n){if(null==t)return{action:e};if("object"!=typeof t||"string"!=typeof t.action)throw new Error(`"${n}" must have an "action"`);return t}function Xt(t,e){return void 0!==t?t:e}function Jt(t,e,n){const o="string"==typeof t?{entity:t}:t;if(!o||"object"!=typeof o||"string"!=typeof o.entity||!o.entity)throw new Error(`Entity ${n+1} needs an "entity" id`);if(void 0!==o.attribute&&null!==o.attribute&&"string"!=typeof o.attribute)throw new Error(`Entity ${n+1}: "attribute" must be an attribute name`);const i=Xt(Wt(o.min,"min"),Wt(e.min,"min"))??0,r=Xt(Wt(o.max,"max"),Wt(e.max,"max"))??100;if("number"==typeof i&&"number"==typeof r&&i>=r)throw new Error(`"max" (${r}) must be greater than "min" (${i})`);const a={...o,entity:o.entity,min:i,max:r,severity:Yt(o.severity)??Yt(e.severity)??Bt,tap_action:Gt(Xt(o.tap_action,e.tap_action),"more-info","tap_action"),hold_action:Gt(Xt(o.hold_action,e.hold_action),"none","hold_action"),double_tap_action:Gt(Xt(o.double_tap_action,e.double_tap_action),"none","double_tap_action")},s=Xt(o.name,e.name),l=Xt(o.icon,e.icon),c=Xt(o.unit,e.unit),d=Xt(Wt(o.target,"target"),Wt(e.target,"target")),h=Xt(qt(o.decimals,"decimals",0,20),qt(e.decimals,"decimals",0,20));return void 0!==s&&(a.name=s),void 0!==l&&(a.icon=l),void 0!==c&&(a.unit=c),void 0!==d&&(a.target=d),void 0!==h&&(a.decimals=h),o.attribute||delete a.attribute,a}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt=mt(class extends ft{constructor(t){if(super(t),t.type!==ut&&t.type!==dt&&t.type!==pt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Z||e===W)return e;const n=t.element,o=t.name;if(t.type===ut){if(e===n[o])return Z}else if(t.type===pt){if(!!e===n.hasAttribute(o))return Z}else if(t.type===dt&&n.getAttribute(o)===e+"")return Z;return xt(t),e}}),Qt={en:{entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours"}};function te(t,e){Qt[t]={...Qt[t],...e}}function ee(t){return(t?.locale?.language??t?.language??"en").split("-")[0]}function ne(t,e,n){const o=ee(t),i=Qt[o]?.[e]??Qt.en[e]??e;return n?i.replace(/\{(\w+)\}/g,(t,e)=>e in n?String(n[e]):t):i}function oe(t){return null==t||""===t}function ie(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function re(t,e,n){const[o,...i]=e,r=function(t,e){return Array.isArray(t)?[...t]:ie(t)?{...t}:"number"==typeof e?[]:{}}(t,o),a=r,s=i.length?re(a[o],i,n):n,l=i.length>0&&ie(s)&&0===Object.keys(s).length;return oe(s)?Array.isArray(r)&&"number"==typeof o?r.splice(o,1):delete a[o]:l&&ie(r)?delete a[o]:a[o]=s,r}function ae(t,e,n){return 0===e.length||oe(n)&&void 0===function(t,e){let n=t;for(const o of e){if("object"!=typeof n||null===n)return;n=n[o]}return n}(t,e)?t:re(t,e,n)}function se(t,e){const n=t;return{width:n.line_width??e.line_width??2.5,dots:n.dots??!0===e.dots,onTop:!0===n.on_top}}function le(t,e){return[...t.filter(t=>!e(t)),...t.filter(e)]}function ce(t){return t.map(([t,e])=>`M${Math.round(100*t)/100},${Math.round(100*e)/100}h0`).join("")}function de(t){return Math.round(10*(t+3.5))/10}function he(t,e){if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<.5||t>12))throw new Error(`${e} must be a number from 0.5 to 12`)}function ue(t,e){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${e} must be true or false`)}function pe(t){he(t.line_width,'"line_width"'),ue(t.dots,'"dots"');for(const e of t.entities??[])"object"==typeof e&&(he(e.line_width,`"line_width" of ${e.entity}`),ue(e.dots,`"dots" of ${e.entity}`),ue(e.on_top,`"on_top" of ${e.entity}`))}const me=[{name:"title",path:["title"]}],fe=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],ge=[{name:"color_icon",path:["color_icon"],default:!1}],_e=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],ye=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],ve=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],be=[{name:"attribute",path:["attribute"]}],$e=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],xe={number:{min:.5,max:12,step:.5,mode:"box",unit_of_measurement:"px"}},we=new Map;function ke(t){let e=we.get(t);return e||(e=[...$e,{name:"dots",path:["dots"],default:t}],we.set(t,e)),e}const Me=ye.map(({name:t,path:e})=>({name:t,path:e})),Ae=[{name:"title",selector:{text:{}}}],Ee=ye.map(({name:t})=>({name:t,selector:{ui_action:{}}})),Ce=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],Se=new Map;let Oe;function Le(t){const e=ee(t);if(Oe?.language!==e){const n=e=>ne(t,e);Oe={language:e,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(t=>({value:t,label:n(`editor_curve_${t}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:xe},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return Oe.schema}function Te(t){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(e=>({value:e,label:ne(t,`editor_sort_${e}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const Ne={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function je(t,e){const n=t=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:t}});switch(t){case"device_class":return n(e.deviceClasses);case"domain":return n(e.domains);case"entity":return{entity:{multiple:!0}};default:return{[t]:{multiple:!0}}}}const Ue=new Map;function ze(t,e){const n=function(t){const e=new Set,n=new Set;for(const o of Object.values(t?.states??{})){const t=o.attributes?.device_class;"string"==typeof t&&t&&e.add(t),n.add(o.entity_id.slice(0,o.entity_id.indexOf(".")))}return{deviceClasses:[...e].sort(),domains:[...n].sort()}}(e),o=`${n.deviceClasses.join()}|${n.domains.join()}`,i=Ue.get(t);if(i?.key===o)return i.schema;const r=Ne[t].map(e=>({name:`${t}_${e}`,selector:je(e,n)}));return Ue.set(t,{key:o,schema:r}),r}let Pe;function He(t,e){let n=t;for(const o of e){if("object"!=typeof n||null===n)return;n=n[o]}return n}function Fe(t,e){if(t===e)return!0;if("object"!=typeof t||"object"!=typeof e||null===t||null===e)return!1;if(Array.isArray(t)!==Array.isArray(e))return!1;const n=Object.keys(t),o=Object.keys(e);return n.length===o.length&&n.every(n=>Fe(t[n],e[n]))}function De(t,e){const n={};for(const o of e){const e=He(t,o.path)??o.default;void 0!==e&&(n[o.name]=e)}return n}function Ve(t,e,n){const o=De(t,e);let i=t;for(const r of e){const t=n[r.name];Fe(o[r.name],t)||(i=ae(i,r.path,void 0!==r.default&&Fe(t,r.default)?void 0:t))}return i}const Re="var(--divider-color, rgba(127, 127, 127, 0.3))",Be="var(--primary-color, #03a9f4)",Ie="var(--secondary-text-color, #727272)";function Ze(t,e,n,o){const i=(o-90)*Math.PI/180;return[(t+n*Math.cos(i)).toFixed(2),(e+n*Math.sin(i)).toFixed(2)]}function We(t,e,n,o){return Ze(t,e,n,o).join(" ")}function qe(t,e,n,o,i){const r=i-o>180?1:0;return`M ${We(t,e,n,o)} A ${n} ${n} 0 ${r} 1 ${We(t,e,n,i)}`}function Ye(t){return B`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(t){switch(t){case"bar":return I`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${Re} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${Be} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${Re} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${Be} />`;case"thin":return I`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${Ie} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${Re} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${Be} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${Ie} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${Re} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${Be} />`;case"segmented":return I`${[0,1].map(t=>Array.from({length:8},(e,n)=>I`<rect x=${6+6.75*n} y=${0===t?9:23} width="5" height="9" rx="1.5"
            fill=${n<(0===t?6:3)?Be:Re} />`))}`;case"tank":return I`${[14,36].map((t,e)=>I`
          <rect x=${t} y="5" width="14" height="30" rx="4" fill=${Re} />
          <rect x=${t} y=${0===e?13:23} width="14" height=${0===e?22:12} rx="4" fill=${Be} />`)}`;case"ring":return I`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${Re} stroke-width="5" />
        <path d=${qe(32,20,14,0,250)} fill="none" stroke=${Be} stroke-width="5" stroke-linecap="round" />`;case"arc":return I`
        <path d=${qe(32,21,14,-135,135)} fill="none" stroke=${Re} stroke-width="5" stroke-linecap="round" />
        <path d=${qe(32,21,14,-135,40)} fill="none" stroke=${Be} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[t,e]=Ze(32,32,18,25);return I`
        <path d=${qe(32,32,22,-90,90)} fill="none" stroke=${Re} stroke-width="5" />
        <path d=${qe(32,32,22,-90,25)} fill="none" stroke=${Be} stroke-width="5" />
        <line x1="32" y1="32" x2=${t} y2=${e} stroke=${Ie} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${Ie} />`}default:return I``}}(t)}
  </svg>`}function Ge(t){let e=1/0,n=-1/0;for(const o of t)for(const t of o)for(const o of[t.v,t.min,t.max])"number"==typeof o&&(o<e&&(e=o),o>n&&(n=o));return e===1/0?void 0:[e,n]}function Xe(t,e){const[n,o]=t,[i,r]=e,a=o===n?0:(r-i)/(o-n);return t=>i+(t-n)*a}const Je=["outside","inside"],Ke=!0,Qe=!0,tn="outside",en=!0,nn=!1,on=t=>"number"==typeof t&&Number.isFinite(t);function rn(t){const e=t;for(const n of["x_axis","y_axis"])if(void 0!==e[n]&&"boolean"!=typeof e[n])throw new Error(`"${n}" must be true or false`);if(void 0!==e.axis_labels&&!Je.includes(e.axis_labels))throw new Error(`"axis_labels" must be one of: ${Je.join(", ")}`);if(void 0!==e.gridlines){const t=e.gridlines;if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const e of["horizontal","vertical"])if(void 0!==t[e]&&"boolean"!=typeof t[e])throw new Error(`"gridlines.${e}" must be true or false`)}for(const n of["y_min","y_max"])if(void 0!==e[n]&&!on(e[n]))throw new Error(`"${n}" must be a number`);if(on(e.y_min)&&on(e.y_max)&&e.y_min>=e.y_max)throw new Error('"y_min" must be below "y_max"')}function an(t){const e=t,n=e.gridlines??{};return{x:e.x_axis??Ke,y:e.y_axis??Qe,labels:e.axis_labels??tn,horizontal:n.horizontal??en,vertical:n.vertical??nn,min:on(e.y_min)?e.y_min:void 0,max:on(e.y_max)?e.y_max:void 0}}function sn(t){return Math.max(0,-Math.floor(Math.log10(t)+1e-9))}const ln=t=>Number(t.toPrecision(12));function cn(t,e,n){let[o,i]=function([t,e],n=.08){if(t===e)return[t-1,e+1];const o=(e-t)*n;return[t-o,e+o]}(t??[0,1]);void 0!==e.min&&(o=e.min),void 0!==e.max&&(i=e.max),i<=o&&(void 0!==e.min?i=o+Math.max(1,.1*Math.abs(o)):o=i-Math.max(1,.1*Math.abs(i)));const r=function(t,e){if(!(t>0&&Number.isFinite(t)))return 1;const n=t/Math.max(1,e),o=10**Math.floor(Math.log10(n));for(const i of[1,2,5])if(i*o>=n*(1-1e-9))return i*o;return 10*o}(i-o,n);void 0===e.min&&(o=ln(Math.floor(o/r+1e-9)*r)),void 0===e.max&&(i=ln(Math.ceil(i/r-1e-9)*r));const a=[];for(let s=Math.ceil(o/r-1e-9);s*r<=i+1e-9*r;s++)a.push(ln(s*r));return{domain:[o,i],ticks:a,decimals:sn(r)}}const dn=6e4,hn=36e5,un=864e5,pn=[...[1,5,10,15,30].map(t=>({unit:"minute",n:t,ms:t*dn})),...[1,2,3,6,12].map(t=>({unit:"hour",n:t,ms:t*hn})),...[1,2,7].map(t=>({unit:"day",n:t,ms:t*un})),...[1,2,3,6].map(t=>({unit:"month",n:t,ms:30.44*t*un})),...[1,2,5,10,20,50,100].map(t=>({unit:"year",n:t,ms:365.25*t*un}))];const mn=t=>-new Date(t).getTimezoneOffset()*dn;function fn(t){if(!t)return mn;let e;try{e=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return mn}return t=>{const n={};for(const o of e.formatToParts(t))n[o.type]=Number(o.value);return Date.UTC(n.year,n.month-1,n.day,n.hour%24,n.minute,n.second)-1e3*Math.floor(t/1e3)}}function gn(t,e){return t-e(t-e(t))}function _n(t,e,n,o){const i=[],r=t.end+e(t.end);for(let a=n,s=0;a<=r&&s<1e3;a=o(a),s++){const n=gn(a,e);n>=t.start&&n<=t.end&&n!==i[i.length-1]&&i.push(n)}return i}function yn(t,e,n=mn){const{unit:o,n:i}=function(t,e){return pn.find(n=>t/n.ms<=Math.max(1,e))??pn[pn.length-1]}(t.end-t.start,e),r=t.start+n(t.start);if("minute"===o||"hour"===o||"day"===o&&7!==i){const e=i*("minute"===o?dn:"hour"===o?hn:un);return{unit:o,ticks:_n(t,n,Math.ceil(r/e)*e,t=>t+e)}}if("day"===o){const e=Math.ceil(r/un);return{unit:o,ticks:_n(t,n,(e+((4-e)%7+7)%7)*un,t=>t+7*un)}}const a=new Date(r);if("month"===o){let e=a.getUTCFullYear(),s=a.getUTCMonth();Date.UTC(e,s)<r&&(s+=1),s=Math.ceil(s/i)*i,e+=Math.floor(s/12),s%=12;const l=t=>{const e=new Date(t);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth()+i)};return{unit:o,ticks:_n(t,n,Date.UTC(e,s),l)}}let s=a.getUTCFullYear();return Date.UTC(s,0)<r&&(s+=1),s=Math.ceil(s/i)*i,{unit:o,ticks:_n(t,n,Date.UTC(s,0),t=>Date.UTC(new Date(t).getUTCFullYear()+i,0))}}function vn(t){return"server"===t?.locale?.time_zone?t.config?.time_zone:void 0}function bn(t){const e=t?.locale?.time_format;return"12"===e||"24"!==e&&void 0}const $n=new Map;function xn(t,e,n){const o=`${t}|${e}|${JSON.stringify(n)}`;let i=$n.get(o);if(!i){try{i=new Intl.DateTimeFormat(t,{...n,timeZone:e})}catch{i=new Intl.DateTimeFormat(void 0,n)}$n.set(o,i)}return i}function wn(t,e,n=!1){return xn(e?.locale?.language??"en",vn(e),{hour:"numeric",minute:"2-digit",...n?{second:"2-digit"}:{},hour12:bn(e)}).format(t)}function kn(t,e){return xn(e?.locale?.language??"en",vn(e),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:bn(e)}).format(t)}function Mn(t,e,n,o,i){const r=o?.locale?.language??"en",a=vn(o),s=t+(i??fn(a))(t),l=new Date(s),c=s%un===0;switch(e){case"minute":case"hour":return c?xn(r,a,{weekday:"short"}).format(t):wn(t,o);case"day":return n<=7*un?xn(r,a,{weekday:"short"}).format(t):xn(r,a,{day:"numeric",month:"short"}).format(t);case"month":return xn(r,a,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(t);default:return xn(r,a,{year:"numeric"}).format(t)}}function An(t,e){if(t.length<=e)return t;const n=[];let o=[];for(const r of t)null===r.v?(o.length&&n.push(o),n.push([r]),o=[]):o.push(r);o.length&&n.push(o);const i=t.length;return n.flatMap(t=>null===t[0].v?t:function(t,e){if(t.length<=e||e<3)return t;const n=[t[0]],o=(t.length-2)/(e-2);let i=0;for(let r=0;r<e-2;r++){const e=Math.floor(r*o)+1,a=Math.min(Math.floor((r+1)*o)+1,t.length-1),s=a,l=Math.min(Math.floor((r+2)*o)+1,t.length);let c=0,d=0;const h=Math.max(1,l-s);for(let n=s;n<l;n++)c+=t[n].t,d+=t[n].v;c/=h,d/=h;let u=e,p=-1;const m=t[i];for(let n=e;n<a;n++){const e=Math.abs((m.t-c)*(t[n].v-m.v)-(m.t-t[n].t)*(d-m.v));e>p&&(p=e,u=n)}n.push(t[u]),i=u}return n.push(t[t.length-1]),n}(t,Math.max(3,Math.round(t.length/i*e))))}const En=36e5,Cn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Sn=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],On=new Map;function Ln(t){let e=On.get(t);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"}),On.set(t,e)),e}function Tn(t,e){const n={};for(const o of Ln(e).formatToParts(new Date(t)))n[o.type]=o.value;return{year:Number(n.year),month:Number(n.month),day:Number(n.day),hour:Number(n.hour)%24,minute:Number(n.minute),second:Number(n.second),weekday:Cn.indexOf(n.weekday)+1}}function Nn(t,e){const n=Tn(t,e);return Date.UTC(n.year,n.month-1,n.day,n.hour,n.minute,n.second)-1e3*Math.floor(t/1e3)}function jn(t,e,n,o=1,i=0,r=0,a=0){const s=Date.UTC(e,n-1,o,i,r,a),l=new Date(s),c=Nn(s-24*En,t),d=Nn(s+24*En,t),h=[s-c,s-d].filter(e=>{const n=Tn(e,t);return n.year===l.getUTCFullYear()&&n.month===l.getUTCMonth()+1&&n.day===l.getUTCDate()&&n.hour===l.getUTCHours()&&n.minute===l.getUTCMinutes()&&n.second===l.getUTCSeconds()});return h.length?Math.min(...h):function(t,e,n,o){for(;e-t>1e3;){const i=1e3*Math.floor((t+e)/2e3);Nn(i,o)===n?t=i:e=i}return e}(s-d,s-c,c,t)}function Un(t,e,n){const o=new Date(Date.UTC(t,e-1,n));return{year:o.getUTCFullYear(),month:o.getUTCMonth()+1,day:o.getUTCDate()}}function zn(t,e,n){const o=Tn(e,n.timeZone);switch(t){case"hour":return e-e%1e3-1e3*(60*o.minute+o.second);case"day":return jn(n.timeZone,o.year,o.month,o.day);case"week":{const t=(o.weekday-n.firstDay+7)%7,e=Un(o.year,o.month,o.day-t);return jn(n.timeZone,e.year,e.month,e.day)}case"month":return jn(n.timeZone,o.year,o.month,1);case"year":return jn(n.timeZone,o.year,1,1)}}function Pn(t,e,n,o){if("hour"===t)return e+n*En;const i=Tn(e,o.timeZone);let{year:r,month:a,day:s}=i;if("day"===t)({year:r,month:a,day:s}=Un(r,a,s+n));else if("week"===t)({year:r,month:a,day:s}=Un(r,a,s+7*n));else{const e=Un(r,a+("year"===t?12*n:n),1),o=Un(e.year,e.month+1,0).day;({year:r,month:a}=e),s=Math.min(s,o)}return jn(o.timeZone,r,a,s,i.hour,i.minute,i.second)}function Hn(t){try{const e=new Intl.Locale(t),n=e.getWeekInfo?.().firstDay??e.weekInfo?.firstDay;return"number"==typeof n&&n>=1&&n<=7?n:1}catch{return 1}}function Fn(t){const e=t?.locale,n=t?.config?.time_zone,o="server"===e?.time_zone&&function(t){if("string"!=typeof t||""===t)return!1;try{return Ln(t),!0}catch{return!1}}(n)?n:(new Intl.DateTimeFormat).resolvedOptions().timeZone||"UTC",i=Sn.indexOf(String(e?.first_weekday??"language"))+1;return{timeZone:o,firstDay:i>0?i:Hn(e?.language??t?.language??"en")}}const Dn=["hour","day","week","month"],Vn=["day","week","month","year"],Rn=["now","end"],Bn={last:24,unit:"hour",offset:0,navigate:!1,until:"now"},In={hour:36e5,day:864e5,week:6048e5};function Zn(t,e,n){const o="string"==typeof t&&""!==t.trim()?Number(t):t;if("number"!=typeof o||!Number.isInteger(o)||o<e)throw new Error(n);return o}function Wn(t,e,n){if(!e.includes(t))throw new Error(`"${n}" must be one of: ${e.join(", ")}`);return t}function qn(t){if(null==t)return Bn;if("object"!=typeof t||Array.isArray(t))throw new Error('"period" must have "last" and "unit"');const e=t,n={last:Zn(e.last??Bn.last,1,'"period.last" must be a whole number of 1 or more'),unit:Wn(e.unit??Bn.unit,Dn,"period.unit"),offset:Zn(e.offset??0,0,'"period.offset" must be a whole number of 0 or more'),navigate:void 0!==e.navigate&&!0===e.navigate,until:Wn(e.until??"now",Rn,"period.until")};if(void 0!==e.navigate&&"boolean"!=typeof e.navigate)throw new Error('"period.navigate" must be true or false');return void 0!==e.calendar&&(n.calendar=Wn(e.calendar,Vn,"period.calendar")),n}function Yn(t,e,n){if("month"===t.unit){if(n)return{start:Pn("month",e,-t.last,n),end:e};const o=new Date(e);return o.setMonth(o.getMonth()-t.last),{start:o.getTime(),end:e}}return{start:e-t.last*In[t.unit],end:e}}function Gn(t,e,n,o=0){const i=Math.max(0,t.offset+o);if(t.calendar){const o=t.calendar,r=Pn(o,zn(o,e,n),-i,n),a=Pn(o,r,1,n);return{start:r,end:0===i&&"now"===t.until?e:a,live:0===i,back:i}}if("month"===t.unit){return{...Yn(t,0===i?e:Pn("month",e,-i*t.last,n),n),live:0===i,back:i}}const r=t.last*In[t.unit];return{start:e-(i+1)*r,end:e-i*r,live:0===i,back:i}}const Xn=new WeakMap;function Jn(t,e){const n=Xn.get(t);return n&&n.key===JSON.stringify(e)?n.steps:0}function Kn(t,e,n){Xn.set(t,{key:JSON.stringify(e),steps:Math.max(-e.offset,n)})}function Qn(t){if("number"==typeof t)return Number.isFinite(t)?t:null;if("string"!=typeof t||""===t.trim())return null;const e=Number(t);return Number.isFinite(e)?e:null}function to(t,e){const n=[];for(const o of t??[]){const t=o.lu??o.lc;if(void 0===t)continue;const i=e?o.a?.[e]:o.s;n.push({t:Math.round(1e3*t),v:Qn(i)})}return n}const eo=t=>"number"==typeof t&&Number.isFinite(t)?t:null;function no(t,e){return(t??[]).map(t=>{const n="number"==typeof t.start?t.start:Date.parse(t.start);let o;return o="change"===e?eo(t.change):"state"===e?eo(t.state)??eo(t.mean):"min"===e||"max"===e?eo(t[e])??eo(t.mean)??eo(t.state):eo(t.mean)??eo(t.state),{t:n,v:o,min:t.min??null,max:t.max??null}})}function oo(t){const e=(t.end-t.start)/864e5;return e<=2?"5minute":e<=35?"hour":e<=400?"day":"month"}function io(t){return{period:oo(t),types:["mean","min","max","state"],value:"mean"}}function ro(t){return t.attribute?`${t.entity}|${t.attribute}`:t.entity}const ao=["hour","day","week","month"],so=["mean","sum","min","max","first","last","change"];function lo(t){if(void 0!==t.aggregate&&!so.includes(t.aggregate))throw new Error(`"aggregate" must be one of: ${so.join(", ")}`);if(void 0!==t.group_by){if(!ao.includes(t.group_by))throw new Error(`"group_by" must be one of: ${ao.join(", ")}`);return{unit:t.group_by,aggregate:t.aggregate??"mean"}}}function co(t,e,n,o,i=!1){const r="change"===n?function(t){let e=null;return t.map(t=>{if(null===t.v)return null;if(null===e)return e=t.v,0;if(t.v>=e){const n=t.v-e;return e=t.v,n}return e-t.v>.1*Math.abs(e)?(e=t.v,Math.max(0,t.v)):0})}(t):[],a=[];let s=0;for(let l=0;l+1<e.length;l++){const c=e[l],d=e[l+1],h=Math.min(d,o);for(;s<t.length&&t[s].t<c;)s++;const u={t:c,end:d,v:null};if(a.push(u),h<=c)continue;const p=[],m=t[s-1];let f=s;const g=f<t.length&&t[f].t<h?t[f].t:h;for(m&&g>c&&p.push({v:m.v,dt:g-c,reading:!1,carried:!0,up:0});f<t.length&&t[f].t<h;f++){const e=f+1<t.length&&t[f+1].t<h?t[f+1].t:h,n=t[f];p.push({v:n.v,dt:e-n.t,reading:!0,carried:!0===n.carried,up:r[f]??null})}const _=p.filter(t=>null!==t.v);if(0===_.length)continue;const y=_.map(t=>t.v);switch(i&&(u.min=Math.min(...y),u.max=Math.max(...y)),n){case"mean":{const t=_.reduce((t,e)=>t+e.dt,0);u.v=t>0?_.reduce((t,e)=>t+e.v*e.dt,0)/t:y.reduce((t,e)=>t+e,0)/y.length;break}case"min":u.v=Math.min(...y);break;case"max":u.v=Math.max(...y);break;case"first":u.v=y[0];break;case"last":u.v=y[y.length-1];break;case"sum":{const t=_.filter(t=>t.reading&&!t.carried);u.v=t.length?t.reduce((t,e)=>t+e.v,0):null;break}case"change":u.v=_.reduce((t,e)=>t+(e.reading&&!e.carried?e.up??0:0),0)}}return a}const ho={"5minute":3e5,hour:36e5,day:9e7,week:6912e5,month:27648e5},uo={mean:{types:["mean"],value:"mean"},min:{types:["min"],value:"min"},max:{types:["max"],value:"max"},first:{types:["state","mean"],value:"state"},last:{types:["state","mean"],value:"state"},sum:{types:["change"],value:"change"},change:{types:["change"],value:"change"}};const po={"5minute":3e5,hour:36e5,day:864e5,week:864e5,month:864e5};class mo{constructor(t){this.onChange=t,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(t,e,n,o,i={}){const r=i.live??!0,a="statistics"===o?i.statistics??io(n):void 0,s=`${o}|${e.map(ro).join(",")}|${a?JSON.stringify(a):""}`,l=void 0!==this.pausedAt&&Date.now()-this.pausedAt>go,c=void 0!==this.pausedAt&&"statistics"===o&&r;this.pausedAt=void 0;const d=Math.max(6e4,(n.end-n.start)/100),h=n.start<this.loadedFrom||(r?this.loadedTo!==1/0:n.end>this.loadedTo+d);(s!==this.shape||h||l&&r||c)&&(this.shape=s,this.load(t,e,n,r,a)),"ready"===this.status&&"history"===o&&this.loadedTo===1/0&&this.appendLive(t,e);const u=new Map;for(const[p,m]of this.data)u.set(p,fo(m,n));return{status:this.status,data:u,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.loadedTo=-1/0,this.generation++}load(t,e,n,o,i){const r=++this.generation;this.status="loading",this.loadedFrom=n.start,this.loadedTo=o?1/0:n.end,clearTimeout(this.timer);const a=i?async function(t,e,n,o=io(n)){const i=new Map;if(!t.callWS||0===e.length)return i;const r=[...new Set(e.map(t=>t.entity))],a=await t.callWS({type:"recorder/statistics_during_period",start_time:new Date(n.start).toISOString(),end_time:new Date(n.end).toISOString(),statistic_ids:r,period:o.period,types:o.types});for(const s of e)i.set(ro(s),no(a?.[s.entity],o.value));return i}(t,e,n,i):async function(t,e,n){const o=new Map;if(!t.callWS||0===e.length)return o;const i={type:"history/history_during_period",start_time:new Date(n.start).toISOString(),end_time:new Date(n.end).toISOString(),significant_changes_only:!1},r=[...new Set(e.filter(t=>!t.attribute).map(t=>t.entity))],a=[...new Set(e.filter(t=>t.attribute).map(t=>t.entity))],s=[];return r.length&&s.push(t.callWS({...i,entity_ids:r,minimal_response:!0,no_attributes:!0}).then(t=>{for(const e of r)o.set(ro({entity:e}),to(t?.[e]))})),a.length&&s.push(t.callWS({...i,entity_ids:a,no_attributes:!1}).then(t=>{for(const n of e.filter(t=>t.attribute))o.set(ro(n),to(t?.[n.entity],n.attribute))})),await Promise.all(s),o}(t,e,n);a.then(n=>{if(r===this.generation){this.data=n,this.status="ready",this.error=void 0,this.seen.clear();for(const n of e)this.seen.set(ro(n),t.states[n.entity]);i&&o&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},po[i.period])),this.onChange()}},t=>{r===this.generation&&(this.status="error",this.error=t instanceof Error?t.message:String(t?.message??t),this.onChange())})}appendLive(t,e){for(const n of e){const e=ro(n),o=t.states[n.entity];if(!o||this.seen.get(e)===o)continue;this.seen.set(e,o);const i=Date.parse(o.last_updated??o.last_changed??"")||Date.now(),r=this.data.get(e)??[],a=r[r.length-1];a&&i<=a.t||(r.push({t:i,v:Qn(n.attribute?o.attributes?.[n.attribute]:o.state)}),this.data.set(e,r))}}}function fo(t,e){let n=0;for(;n<t.length&&t[n].t<e.start;)n++;const o=t.slice(n).filter(t=>t.t<=e.end),i=t[n-1];return i?[{...i,t:e.start,carried:!0},...o]:o}const go=6e4,_o=new WeakMap;const yo=["smooth","straight","step"],vo=t=>(Math.round(100*t)/100).toString();function bo(t){return t.map(([t,e],n)=>`${n?"L":"M"}${vo(t)},${vo(e)}`).join("")}function $o(t,e){return 0===t.length?"":1===t.length?`M${vo(t[0][0])},${vo(t[0][1])}h0`:"smooth"===e?function(t){const e=t.length;if(e<3)return bo(t);const n=[],o=[];for(let a=0;a<e-1;a++)n.push(t[a+1][0]-t[a][0]),o.push(0===n[a]?0:(t[a+1][1]-t[a][1])/n[a]);const i=[o[0]];for(let a=1;a<e-1;a++)i.push(o[a-1]*o[a]<=0?0:(o[a-1]+o[a])/2);i.push(o[e-2]);for(let a=0;a<e-1;a++){if(0===o[a]){i[a]=0,i[a+1]=0;continue}const t=i[a]/o[a],e=i[a+1]/o[a],n=t*t+e*e;if(n>9){const r=3/Math.sqrt(n);i[a]=r*t*o[a],i[a+1]=r*e*o[a]}}let r=`M${vo(t[0][0])},${vo(t[0][1])}`;for(let a=0;a<e-1;a++){const e=n[a]/3;r+=`C${vo(t[a][0]+e)},${vo(t[a][1]+i[a]*e)},${vo(t[a+1][0]-e)},${vo(t[a+1][1]-i[a+1]*e)},${vo(t[a+1][0])},${vo(t[a+1][1])}`}return r}(t):"step"===e?function(t){let e=`M${vo(t[0][0])},${vo(t[0][1])}`;for(let n=1;n<t.length;n++)e+=`H${vo(t[n][0])}V${vo(t[n][1])}`;return e}(t):bo(t)}function xo(t){const e=[];let n=[];for(const o of t)null===o.v?(n.length&&e.push(n),n=[]):n.push(o);return n.length&&e.push(n),e}const wo=1e3,ko=200,Mo=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],Ao=["history","statistics"];function Eo(t){if(qn(t.period),lo(t),void 0!==t.source&&!Ao.includes(t.source))throw new Error(`"source" must be one of: ${Ao.join(", ")}`);const e=[t.curve,...(t.entities??[]).map(t=>"object"==typeof t?t.curve:void 0)];for(const n of e)if(void 0!==n&&!yo.includes(n))throw new Error(`"curve" must be one of: ${yo.join(", ")}`)}function Co(t,e=Date.now(),n={}){const o=qn(t.raw.period),i=t.raw.source??"history",r=Fn(t.hass),a=Gn(o,e,r,o.navigate?Jn(t.host,o):0),s=lo(t.raw),l={start:s?zn(s.unit,a.start,r):a.start,end:a.end},c=t.items.map(t=>({entity:t.entityId,attribute:t.config.attribute})),d=function(t,e){let n=_o.get(t);return n||(n=new mo(e),_o.set(t,n)),n}(t.host,t.requestUpdate),h=s&&"statistics"===i?function(t,e,n,o=!1){const i=e.timeZone===n&&("week"!==t.unit||1===e.firstDay),r="hour"!==t.unit&&i?t.unit:"hour",{types:a,value:s}=uo[t.aggregate];return{period:r,types:o?[...new Set([...a,"min","max"])]:a,value:s}}(s,r,t.hass.config?.time_zone,!0===n.range):void 0,u=h?{start:l.start-ho[h.period],end:l.end}:l,p=d.get(t.hass,c,u,i,{live:a.live,statistics:h}),m=s?function(t,e,n,o,i=1e4){const r=[zn(t,e,o)];let a=1;for(;r[r.length-1]<n&&r.length<=i;){const e="hour"===t?r[0]+a*En:Pn(t,r[0],a,o);r.push(e>r[r.length-1]?e:r[r.length-1]+En),a++}return 1===r.length&&r.push(Pn(t,r[0],1,o)),r}(s.unit,l.start,l.end,r):[],f=t.raw.curve??"smooth",g=Math.min(l.end,e),_=t.items.map((t,e)=>{const o=t.config;let r=p.data.get(ro(c[e]))??[];const a=r[r.length-1];return s?r="statistics"===i?function(t,e,n,o=1/0,i=!1){const r=[];let a=0;for(let s=0;s+1<e.length;s++){const l=e[s],c=e[s+1];for(;a<t.length&&t[a].t<l;)a++;let d=a;const h=[],u=[],p=[];for(;d<t.length&&t[d].t<c;d++){const e=t[d];null===e.v||e.carried||(h.push(e.v),u.push(e.min??e.v),p.push(e.max??e.v))}let m=null;if(h.length&&l<o)if("mean"===n)m=h.reduce((t,e)=>t+e,0)/h.length;else if("sum"===n||"change"===n)m=h.reduce((t,e)=>t+e,0);else if("min"===n)m=Math.min(...h);else if("max"===n)m=Math.max(...h);else if("last"===n)m=h[h.length-1];else{const e=t.slice(0,a).reverse().find(t=>null!==t.v),n=t.slice(a,d).find(t=>t.carried&&null!==t.v);m=(e??n)?.v??h[0]}const f={t:l,end:c,v:m};i&&null!==m&&(f.min=Math.min(...u),f.max=Math.max(...p)),r.push(f)}return r}(r,m,s.aggregate,g,!0===n.range):co(r,m,n.aggregate?.(t)??s.aggregate,g,!0===n.range):"history"===i&&a&&null!==a.v&&a.t<g&&(r=[...r,{t:g,v:a.v}]),{index:e,entity:t,points:r,color:St(o.color??Mo[e%Mo.length]),curve:o.curve??f,dash:!0===o.dash}});return{status:p.status,error:p.error,range:l,period:o,source:i,series:_,live:a.live,back:a.back,zone:r,group:s}}te("en",{period_previous:"Previous period",period_next:"Next period",period_return:"Back to {label}",period_today:"Today",period_yesterday:"Yesterday",period_this_week:"This week",period_last_week:"Last week",period_this_month:"This month",period_last_month:"Last month",period_this_year:"This year",period_last_year:"Last year",period_last_hour:"Last hour",period_last_hours:"Last {n} hours",period_last_day:"Last day",period_last_days:"Last {n} days",period_last_week_rolling:"Last 7 days",period_last_weeks:"Last {n} weeks",period_last_month_rolling:"Last month",period_last_months:"Last {n} months"});const So=(t,e,n)=>1===t?e:n;function Oo(t,e,n,o,i){const r=(t,e)=>ne(i,t,e);if(t.calendar&&n<2)return r({day:["period_today","period_yesterday"],week:["period_this_week","period_last_week"],month:["period_this_month","period_last_month"],year:["period_this_year","period_last_year"]}[t.calendar][n]);if(!t.calendar&&0===n){const e=t.last;return r({hour:So(e,"period_last_hour","period_last_hours"),day:So(e,"period_last_day","period_last_days"),week:So(e,"period_last_week_rolling","period_last_weeks"),month:So(e,"period_last_month_rolling","period_last_months")}[t.unit],{n:e})}const a={timeZone:o.timeZone},s=Tn(e.start,o.timeZone).year===Tn(Date.now(),o.timeZone).year;let l;"year"===t.calendar?a.year="numeric":"month"===t.calendar?Object.assign(a,{month:"long",year:"numeric"}):(Object.assign(a,{day:"numeric",month:"short"}),s||(a.year="numeric"),"day"===t.calendar&&(a.weekday="short"),t.calendar||"hour"!==t.unit&&"day"!==t.unit||Object.assign(a,{hour:"numeric",minute:"2-digit"}));try{l=new Intl.DateTimeFormat(i?.locale?.language??i?.language??"en",a)}catch{l=new Intl.DateTimeFormat("en",a)}const c=t.calendar?e.end-1:e.end;return"day"===t.calendar||"month"===t.calendar||"year"===t.calendar?l.format(e.start):l.formatRange(e.start,c)}function Lo(t,e,n=Date.now()){const{period:o}=t;if(!o.navigate)return W;const i=Jn(e.host,o),r=t=>n=>{n.stopPropagation(),Kn(e.host,o,t),e.requestUpdate()},a=Oo(o,t.range,t.back,t.zone,e.hass);let s="";if(0!==i){const i=Gn(o,n,t.zone);s=Oo(o,i,i.back,t.zone,e.hass)}const l=t=>B`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${t}></path></svg>`;return B`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${ne(e.hass,"period_previous")} @click=${r(i+1)}>
      ${l("M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z")}
    </button>
    <span class="period-label" aria-live="polite">${a}</span>
    <button
      class="period-step period-next"
      aria-label=${ne(e.hass,"period_next")}
      ?disabled=${0===t.back}
      @click=${r(i-1)}
    >
      ${l("M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")}
    </button>
    ${0!==i?B`<button
            class="period-return"
            aria-label=${ne(e.hass,"period_return",{label:s})}
            @click=${r(0)}
          >
            ${s}
          </button>`:W}
  </div>`}const To=r`
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
`;function No(t){!function(t){_o.get(t)?.pause()}(t)}function jo(t,e){const{show:n}=e.config;return n.name||n.value?B`<div class="series-header">
    ${t.series.map(t=>B`<div class="entity series-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}>
          <span class="swatch" style="background:${t.color}"></span>
          ${n.name?B`<span class="series-name">${t.entity.name}</span>`:W}
          ${n.value?B`<span class="series-value">${t.entity.display}</span>`:W}
        </div>`)}
  </div>`:W}function Uo(t,e){return"loading"===t.status?B`<div class="chart-message">${ne(e.hass,"chart_loading")}</div>`:"error"===t.status?B`<div class="chart-message error">
      ${ne(e.hass,"chart_error",{error:t.error??""})}
    </div>`:t.series.every(t=>t.points.every(t=>null===t.v))?B`<div class="chart-message">${ne(e.hass,"chart_no_data")}</div>`:void 0}const zo=r`
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
`;function Po(t,e,n){const{locale:o,grouping:i}=function(t){const e=t?.locale?.language??"en";switch(t?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:e,grouping:!0}}}(n),r=new Intl.NumberFormat(o,{minimumFractionDigits:e,maximumFractionDigits:e,useGrouping:i});let a=r.format(0===t?0:t);return 0===Number(t.toFixed(e))&&(a=r.format(0)),a}function Ho(t,e){return e?`${t} ${e}`:t}const Fo=new WeakMap;function Do(t){Fo.get(t)?.observer?.disconnect(),Fo.delete(t)}function Vo(t){const e=an(t.raw);return Math.max(0,function(t){let e=Fo.get(t.host);if(!e){const n={width:t.host.clientWidth||400};e=n,Fo.set(t.host,n),"undefined"!=typeof ResizeObserver&&(n.observer=new ResizeObserver(e=>{const o=Math.round(e[e.length-1].contentRect.width);Math.round(o/70)!==Math.round(n.width/70)&&(n.width=o,t.requestUpdate())}),n.observer.observe(t.host))}return e.width}(t)-32-(e.y&&"outside"===e.labels?40:0))}function Ro(t,e,n){const o=an(t.raw),i=cn(n,o,4),r=Math.max(2,Math.min(8,Math.floor(Vo(t)/70))),{unit:a,ticks:s}=yn(e,r,fn(vn(t.hass)));return{options:o,value:i,times:s,unit:a,range:e,scales:{x:Xe([e.start,e.end],[0,wo]),y:Xe(i.domain,[ko,0]),domain:i.domain}}}const Bo=t=>Math.round(1e4*t)/100+"%";function Io({axes:t,ctx:e,content:n,label:o,defs:i=W,overlay:r=W,hover:a,right:s}){const{options:l}=t,c="outside"===l.labels,d=l.y&&t.value.ticks.length>0,h=l.x&&t.times.length>0,u=d?function(t,e){const{scales:n,value:o}=t;return o.ticks.map(t=>{const i=n.y(t)/ko;return B`<span class="axis-label ${i<.08?"top":i>.92?"bottom":""}" style="top:${Bo(i)}"
      >${Po(t,o.decimals,e.hass)}</span
    >`})}(t,e):[],p=d?B`<div class="y-axis">${u}</div>`:W,m=h?B`<div class="x-axis">${function(t,e){const{scales:n,range:o}=t,i=fn(vn(e.hass));return t.times.map(r=>{const a=n.x(r)/wo;return B`<span class="axis-label ${a<.05?"start":a>.95?"end":""}" style="left:${Bo(a)}"
      >${t.label?t.label(r):Mn(r,t.unit,o.end-o.start,e.hass,i)}</span
    >`})}(t,e)}</div>`:W,f=d?B`<span class="axis-sizer" aria-hidden="true"
        >${t.value.ticks.map(n=>Po(n,t.value.decimals,e.hass)).reduce((t,e)=>e.length>t.length?e:t,"")}</span
      >`:W,g=s&&l.y&&s.value.ticks.length>0?s:void 0,_=g?B`<span class="axis-sizer" aria-hidden="true"
        >${g.value.ticks.map(t=>Po(t,g.value.decimals,e.hass)).reduce((t,e)=>e.length>t.length?e:t,"")}</span
      >`:W,y=g?B`<div class="y-axis right">${c?_:W}${function(t,e){return t.value.ticks.map(n=>{const o=t.y(n)/ko;return B`<span class="axis-label ${o<.08?"top":o>.92?"bottom":""}" style="top:${Bo(o)}"
      >${Po(n,t.value.decimals,e.hass)}</span
    >`})}(g,e)}</div>`:W;return B`<div
    class="plot-wrap axes-${l.labels} ${d?"has-y":""} ${h?"has-x":""} ${g?"has-right":""}"
  >
    ${c&&d?B`<div class="y-axis">${f}${u}</div>`:W}
    <div
      class="plot-area ${a?"hoverable":""}"
      @pointerdown=${a?.move}
      @pointermove=${a?.move}
      @pointerleave=${a?.leave}
      @pointercancel=${a?.leave}
    >
      ${function(t,e,n=W,o=W){return B`<svg
    class="plot"
    viewBox="0 0 ${wo} ${ko}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${e}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${wo} height=${204}></rect>
      </clipPath>
      ${n}
    </defs>
    ${o}
    <g clip-path="url(#cd-draw-in)">${t}</g>
  </svg>`}(n,o,i,function(t){const{options:e,scales:n}=t;return I`<g class="grid">
    ${e.horizontal?t.value.ticks.map(t=>I`<line x1="0" x2=${wo} y1=${n.y(t)} y2=${n.y(t)}></line>`):W}
    ${e.vertical?t.times.map(t=>I`<line x1=${n.x(t)} x2=${n.x(t)} y1="0" y2=${ko}></line>`):W}
  </g>`}(t))} ${c?W:B`${p}${y}${m}`}
      ${r}
    </div>
    ${c?B`${y}${m}`:W}
  </div>`}const Zo=r`
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
`,Wo=["above","over","hidden"];function qo(t){if(void 0!==t.compact&&"boolean"!=typeof t.compact)throw new Error('"compact" must be true or false');if(void 0!==t.header&&!Wo.includes(t.header))throw new Error(`"header" must be one of: ${Wo.join(", ")}`)}function Yo(t){return{compact:!0===t.compact,header:t.header??"above"}}function Go(t,e,n){return B`<div class="frame ${t.compact?"compact":""}">
    ${"above"===t.header?e:W}${n}
  </div>`}function Xo(t){return t===W?W:B`<div class="header-over" @pointerdown=${t=>t.stopPropagation()}>${t}</div>`}const Jo=r`
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
`,Ko=["none","normal","percent"];function Qo(t){const e=t.stack;if(void 0!==e&&!Ko.includes(e))throw new Error(`"stack" must be one of: ${Ko.join(", ")}`)}function ti(t,e){let n=0,o=t.length;for(;n<o;){const i=n+o>>1;t[i].t<=e?n=i+1:o=i}return 0===n?null:t[n-1].v}function ei(t,e){const n=t[0]?.length??0,o=t.map(()=>[]);for(let i=0;i<n;i++){let n=1;if("percent"===e){const e=t.reduce((t,e)=>t+Math.abs(e[i]??0),0);n=e>0?100/e:0}let r=0,a=0;t.forEach((t,e)=>{const s=t[i];if(null==s)return void o[e].push(null);const l=s*n;l>=0?(o[e].push([r,r+l]),r+=l):(o[e].push([a,a+l]),a+=l)})}return o}function ni(t){const e=t[0]?.length??0,n=[];for(let o=0;o<e;o++){let e=null;for(const n of t)null!==n[o]&&void 0!==n[o]&&(e=(e??0)+n[o]);n.push(e)}return n}function oi(t){let e=0,n=0;for(const o of t)for(const t of o)t&&(e=Math.min(e,t[0],t[1]),n=Math.max(n,t[0],t[1]));return[e,n]}function ii(t,e){if(0===t.length)return-1;let n=0,o=t.length-1;for(;n<o;){const i=n+o>>1;t[i].t<e?n=i+1:o=i}return n>0&&e-t[n-1].t<=t[n].t-e?n-1:n}const ri=new WeakMap;function ai(t){return ri.get(t)?.t}function si(t){const e=ri.get(t);void 0!==e?.timer&&clearTimeout(e.timer),ri.delete(t)}function li(t){return!1!==t.tooltip}function ci(t){const e=t.tooltip;if(void 0!==e&&"boolean"!=typeof e)throw new Error('"tooltip" must be true or false')}function di(t,e,n){const o=function(t){let e=ri.get(t);return e||(e={},ri.set(t,e)),e}(t.host),i=e=>{e!==o.t&&(o.t=e,t.requestUpdate())},r=()=>{void 0!==o.timer&&clearTimeout(o.timer),o.timer=void 0};return{move(t){r();const o=t.currentTarget.getBoundingClientRect(),a=o.width>0?Math.min(1,Math.max(0,(t.clientX-o.left)/o.width)):0;i(function(t,e){let n;for(const o of t){const t=ii(o,e);if(t<0)continue;const i=o[t].t;(void 0===n||Math.abs(i-e)<Math.abs(n-e))&&(n=i)}return n}(n,e.start+a*(e.end-e.start)))},leave(t){r(),"touch"===t.pointerType||"pen"===t.pointerType?o.timer=setTimeout(()=>{o.timer=void 0,i(void 0)},3e3):i(void 0)}}}const hi=t=>Math.round(1e4*t)/100+"%";function ui(t){const e=new Set(t.map(t=>t.entity.unit));return 1===e.size?[...e][0]:""}function pi(t,e,n,o){return B`<div class="tooltip-row tooltip-total">
    <span class="swatch"></span>
    <span class="tooltip-name">${ne(t.hass,"chart_total")}</span>
    <span class="tooltip-value">${null===e?"—":Ho(Po(e,o,t.hass),n)}</span>
  </div>`}function mi(t,e,n,o,i,r={}){if(void 0===o)return W;const a=n.x(o)/wo;if(!(a>=0&&a<=1))return W;const s=function(t,e){const n=t*e;return n+190<=e?"right":n>=190?"left":t>.5?"pin-left":"pin-right"}(a,i),l=e.map(t=>{const e=ii(t.points,o);return{s:t,p:e<0?void 0:t.points[e]}});return B`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${hi(a)}"></div>
    ${l.map(({s:t,p:e})=>{if(!e||null===e.v)return W;const o=r.dotY?r.dotY(t,e):n.y(e.v);if(null===o)return W;const i=o/ko;return i>=0&&i<=1?B`<span
        class="hover-dot"
        style="left:${hi(n.x(e.t)/wo)};top:${hi(i)};background:${t.color}"
      ></span>`:W})}
    <div class="tooltip ${s}" style=${s.startsWith("pin")?"":`left:${hi(a)}`}>
      <div class="tooltip-time">${r.heading?r.heading(o):kn(o,t.hass)}</div>
      ${l.map(({s:e,p:n})=>B`<div class="tooltip-row">
            <span class="swatch" style="background:${e.color}"></span>
            <span class="tooltip-name">${e.entity.name}</span>
            <span class="tooltip-value">${r.text?r.text(e,n):function(t,e,n){return t&&null!==t.v?Ho(Po(t.v,e.entity.decimals,n.hass),e.entity.unit):"—"}(n,e,t)}</span>
          </div>`)}
      ${r.footer?r.footer(l):W}
    </div>
  </div>`}te("en",{chart_total:"Total"});const fi=r`
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
`;function gi(t,e,n){return{select:{mode:"dropdown",options:n.map(n=>({value:n,label:ne(t,`editor_${e}_${n}`)}))}}}te("en",{editor_period_calendar:"Period",editor_period_calendar_rolling:"The last…",editor_period_calendar_day:"Today",editor_period_calendar_week:"This week",editor_period_calendar_month:"This month",editor_period_calendar_year:"This year",editor_period_offset:"Periods back (0 is the current one)",editor_period_until:"Draw up to",editor_period_until_now:"Now",editor_period_until_end:"The end of the period",editor_period_navigate:"Show previous and next buttons",editor_group_by:"Group readings by",editor_group_by_none:"Don't group",editor_group_by_hour:"Hour",editor_group_by_day:"Day",editor_group_by_week:"Week",editor_group_by_month:"Month",editor_aggregate:"Combine with",editor_aggregate_mean:"Average",editor_aggregate_sum:"Sum",editor_aggregate_min:"Lowest",editor_aggregate_max:"Highest",editor_aggregate_first:"First",editor_aggregate_last:"Last",editor_aggregate_change:"Change (meters that count up)"});const _i=[{name:"period_calendar",path:["period","calendar"],default:"rolling"},{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"period_offset",path:["period","offset"],default:0},{name:"period_until",path:["period","until"],default:"now"},{name:"period_navigate",path:["period","navigate"],default:!1},{name:"source",path:["source"],default:"history"},{name:"group_by",path:["group_by"],default:"none"},{name:"aggregate",path:["aggregate"],default:"mean"}];function yi(t){const e=t?.period;return`${e?.calendar?"calendar":"rolling"}${t?.group_by?"|grouped":""}`}function vi(t,e){const[n,o]=yi(e).split("|"),i="calendar"===n;return[{type:"grid",name:"",schema:[{name:"period_calendar",selector:gi(t,"period_calendar",["rolling",...Vn])},...i?[{name:"period_until",selector:gi(t,"period_until",Rn)}]:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:gi(t,"period_unit",Dn)}],{name:"period_offset",selector:{number:{min:0,mode:"box"}}}]},{name:"period_navigate",selector:{boolean:{}}},{name:"source",selector:gi(t,"source",Ao)},{type:"grid",name:"",schema:[{name:"group_by",selector:gi(t,"group_by",["none",...ao])},...o?[{name:"aggregate",selector:gi(t,"aggregate",so)}]:[]]}]}te("en",{editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines",editor_compact:"Compact",editor_header:"Names and values",editor_header_above:"Above the chart",editor_header_over:"Over the chart",editor_header_hidden:"Hidden"});const bi=[{name:"header",path:["header"],default:"above"},{name:"compact",path:["compact"],default:!1}];function $i(t){return[{type:"grid",name:"",schema:[{name:"header",selector:gi(t,"header",Wo)},{name:"compact",selector:{boolean:{}}}]}]}const xi=[{name:"x_axis",path:["x_axis"],default:Ke},{name:"y_axis",path:["y_axis"],default:Qe},{name:"axis_labels",path:["axis_labels"],default:tn},{name:"grid_horizontal",path:["gridlines","horizontal"],default:en},{name:"grid_vertical",path:["gridlines","vertical"],default:nn},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function wi(t){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:gi(t,"axis_labels",Je)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const ki=new Map;function Mi(t,e,n){const o=`${t}|${ee(e)}`;let i=ki.get(o);return i||(i=n(),ki.set(o,i)),i}function Ai(t,e,n,o){return B`<ha-form
    data-section=${e}
    .hass=${t.hass}
    .data=${De(t.config,o)}
    .schema=${n}
    .computeLabel=${e=>ne(t.hass,`editor_${e.name}`)}
    @value-changed=${e=>{e.stopPropagation();const n=Ve(t.config,o,e.detail?.value??{});n!==t.config&&t.commit(n)}}
  ></ha-form>`}const Ei=[..._i,{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"line_width",path:["line_width"],default:2.5},{name:"dots",path:["dots"],default:!1},...xi,...bi];function Ci(t,e){if(!t)return e;const[n,o]=t,i={};return void 0===e.y_min&&n>=0&&n<=o/2&&(i.y_min=0),void 0===e.y_max&&o<=0&&o>=n/2&&(i.y_max=0),Object.keys(i).length?{...e,...i}:e}function Si(t){const e=[];return t.forEach((n,o)=>{o>0&&e.push([n[0],t[o-1][1]]),e.push(n)}),e}function Oi(t,e,n){if(t.length<2)return"";const[o,i,r]="step"===n?[Si(t),Si(e),"straight"]:[t,e,n];return`${$o(o,r)}${$o([...i].reverse(),r).replace(/^M/,"L")}Z`}function Li(t,e){return"step"===e?$o(Si(t),"straight"):$o(t,e)}function Ti(t,e,n,o,i={}){const r=se(t.entity.config,o),a=t.entity.config.line_width??o.line_width,s=n.y(Math.min(Math.max(0,n.domain[0]),n.domain[1])),l=function(t){const e=t.entity.config.negative_color;return"string"==typeof e&&e.trim()?St(e.trim()):t.color}(t),c=`cd-area-${t.index}`,d=`cd-area-line-${t.index}`,h=l!==t.color,u=I`${function(t,e,n,o,i=.42,r=.05){const a=Math.min(1,Math.max(0,o/ko));return I`<linearGradient id=${t} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${ko}>
    <stop offset="0" stop-color=${e} stop-opacity=${i}></stop>
    <stop offset=${a} stop-color=${e} stop-opacity=${r}></stop>
    <stop offset=${a} stop-color=${n} stop-opacity=${r}></stop>
    <stop offset="1" stop-color=${n} stop-opacity=${i}></stop>
  </linearGradient>`}(c,t.color,l,s,i.stacked?.6:.42,i.stacked?.35:.05)}
    ${h?function(t,e,n,o){const i=Math.min(1,Math.max(0,o/ko));return I`<linearGradient id=${t} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2=${ko}>
    <stop offset=${i} stop-color=${e}></stop>
    <stop offset=${i} stop-color=${n}></stop>
  </linearGradient>`}(d,t.color,l,s):W}`,p=[],m=[],f=[];if(i.layers){const o=i.layers;let r=[];const a=()=>{if(r.length){const i=r.map(t=>[n.x(e[t].t),n.y(o[t][1])]),a=r.map(t=>[n.x(e[t].t),n.y(o[t][0])]);p.push(Oi(i,a,t.curve)),m.push(Li(i,t.curve))}r=[]};for(let t=0;t<e.length;t++)o[t]?r.push(t):a();a()}else for(const y of xo(e)){const e=y.map(t=>[n.x(t.t),n.y(t.v)]);p.push(Oi(e,e.map(([t])=>[t,s]),t.curve)),m.push(Li(e,t.curve))}if(r.dots){const t=i.range;e.forEach((e,o)=>{if(null===e.v||t&&(e.t===t.start||e.t===t.end))return;const r=i.layers?i.layers[o]?.[1]:e.v;void 0!==r&&f.push([n.x(e.t),n.y(r)])})}const g=a??2,_=h?`url(#${d})`:t.color;return{defs:u,body:I`<g class="series" data-series=${t.index}>
    <path class="fill" d=${p.join("")} fill="url(#${c})" stroke="none"></path>
    <path class="line ${t.dash?"dashed":""}" d=${m.join("")} fill="none" stroke=${_}
      style="stroke-width:${g}px"></path>
    ${f.length>0&&f.length<=200?I`<path class="dots" d=${ce(f)} fill="none" stroke=${_}
            style="stroke-width:${de(g)}px"></path>`:W}
  </g>`}}te("en",{editor_style_area:"Area",editor_stack:"Stack",editor_stack_none:"Don't stack",editor_stack_normal:"On top of each other",editor_stack_percent:"To 100 %",editor_negative_color:"Colour below zero"});const Ni=[..._i,{name:"curve",path:["curve"],default:"smooth"},{name:"stack",path:["stack"],default:"none"},{name:"line_width",path:["line_width"],default:2},{name:"dots",path:["dots"],default:!1},...xi,...bi];const ji={name:"negative_color",path:["negative_color"]},Ui=new Map;const zi=r`
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
`,Pi={layout:"chart",group:"history",height:240,styles:r`
    ${zo}
    ${Zo}
    ${fi}
    ${Jo}
    ${zi}
  `,thumbnail:()=>I`
    <defs>
      <linearGradient id="cd-thumb-area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.5" />
        <stop offset="1" stop-color="var(--primary-color, #03a9f4)" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10 V36 H4 Z" fill="url(#cd-thumb-area)" />
    <path d="M4 30 C14 28 16 12 26 14 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="2.5" stroke-linecap="round" />`,validate(t){Eo(t),rn(t),ci(t),pe(t),qo(t),Qo(t),function(t){for(const e of t.entities??[]){if("object"!=typeof e)continue;const t=e.negative_color;if(void 0!==t&&"string"!=typeof t)throw new Error(`"negative_color" of ${e.entity} must be a colour`)}}(t)},editor:function(t){const e=Mi(`area|${yi(t.config)}`,t.hass,()=>[...vi(t.hass,t.config),{type:"grid",name:"",schema:[{name:"curve",selector:gi(t.hass,"curve",yo)},{name:"stack",selector:gi(t.hass,"stack",Ko)}]},{type:"grid",name:"",schema:[{name:"line_width",selector:xe},{name:"dots",selector:{boolean:{}}}]},...wi(t.hass),...$i(t.hass)]);return Ai(t,"chart",e,Ni)},entityFields:function(t,e){const n=!0===e.dots;let o=Ui.get(n);return o||(o=[...ke(n),ji],Ui.set(n,o)),{schema:Mi("area-entity",t,()=>[...Le(t),{name:"negative_color",selector:{text:{}}}]),fields:o}},disconnect(t){No(t),Do(t),si(t)},render:function(t){const e=Co(t),n=Lo(e,t),o=jo(e,t),i=n===W&&o===W?W:B`${n}${o}`,r=Uo(e,t),a=Yo(t.raw);if(r)return Go("over"===a.header?{...a,header:"above"}:a,i,r);const s=t.raw.stack??"none",l=e.series.map(t=>({...t,points:An(t.points,500)}));let c,d,h=l;const u={};if("none"===s){const n=Ge(l.map(t=>t.points));d=Ro({...t,raw:Ci(n,t.raw)},e.range,n);const o=d.scales,i=le(l,e=>se(e.entity.config,t.raw).onTop);c=i.map(n=>Ti(n,n.points,o,t.raw,{range:e.range}))}else{const n=function(t){const e=[...new Set(t.flatMap(t=>t.map(t=>t.t)))].sort((t,e)=>t-e);return{times:e,values:t.map(t=>e.map(e=>ti(t,e)))}}(l.map(t=>t.points)),o=ei(n.values,s),i=ni(n.values);h=l.map((t,e)=>({...t,points:n.times.map((t,o)=>({t:t,v:n.values[e][o]}))}));const r=oi(o),a="percent"===s?{y_min:r[0]<0?-100:0,y_max:r[1]>0?100:0}:{};d=Ro({...t,raw:Ci(r,{...a,...t.raw})},e.range,r);const p=d.scales;c=h.map((n,i)=>Ti(n,n.points,p,t.raw,{layers:o[i],stacked:!0,range:e.range})).reverse();const m=new Map;h.forEach(t=>t.points.forEach((t,e)=>m.set(t,e))),u.dotY=(t,e)=>{const n=o[t.index][m.get(e)??-1];return n?p.y(n[1]):null};const f=ui(h),g=Math.max(...h.map(t=>t.entity.decimals));u.footer=e=>{const n=e.length?m.get(e[0].p):void 0;return pi(t,void 0===n?null:i[n],f,g)},"percent"===s&&(u.text=(e,n)=>{const i=n?o[e.index][m.get(n)??-1]:null;if(!n||null===n.v||!i)return"—";const r=Math.round(Math.abs(i[1]-i[0]));return`${Ho(Po(n.v,e.entity.decimals,t.hass),e.entity.unit)} · ${r} %`})}const p=li(t.raw),m=ne(t.hass,"chart_aria",{style:ne(t.hass,"editor_style_area"),names:e.series.map(t=>t.entity.name).join(", ")});return Go(a,i,Io({axes:d,ctx:t,content:I`${c.map(t=>t.body)}`,defs:I`${c.map(t=>t.defs)}`,label:m,overlay:B`${"over"===a.header?Xo(i):W}
      ${p?mi(t,h,d.scales,ai(t.host),Vo(t),u):W}`,hover:p?di(t,e.range,h.map(t=>t.points)):void 0}))}};function Hi(t,e,n){return!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n)||n<=e?0:Math.min(1,Math.max(0,(t-e)/(n-e)))}function Fi(t,e,n){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n)||n<=e)return[0,0];const o=Hi(t,e,n);if(e<0&&n>0){const t=Hi(0,e,n);return o<t?[o,t]:[t,o]}return[0,o]}const Di=new Set;function Vi(t){return(t.available?t.band.icon:void 0)??t.config.icon??(t.stateObj?void 0:"mdi:help-circle-outline")}function Ri(t){return null==t||""===t}function Bi(t){if(void 0===t||""===t.trim())return null;const e=Number(t);return Number.isFinite(e)?e:null}function Ii(t,e,n="limit"){if(Ri(t))return null;if("number"==typeof t)return Number.isFinite(t)?t:null;const o=String(t),i=Bi(e.states[o]?.state);if(null===i&&!Di.has(o)){Di.add(o);const t="limit"===n?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${n} entity "${o}" is missing or not numeric; ${t}.`)}return i}function Zi(t,e){if(t.every(t=>"number"==typeof t.from))return t;const n=[];for(const o of t){const t=e?Ii(o.from,e,"band start"):null;null!==t&&n.push({...o,from:t})}return n.length?n.sort((t,e)=>t.from-e.from):Bt}function Wi(t,e){const n=t.entity,o=e.states[n],i=t.name??o?.attributes?.friendly_name??n,r=t.unit??(t.attribute?"":o?.attributes?.unit_of_measurement??""),a=function(t,e){if(e)return t.attribute?e.attributes?.[t.attribute]:e.state}(t,o),s=function(t){return"number"==typeof t?Number.isFinite(t)?t:null:"string"==typeof t?Bi(t):null}(a),l=null!==s;let c;c=Ri(t.decimals)?t.attribute?l?function(t){const e=String(t),n=e.indexOf(".");return-1===n||/e/i.test(e)?0:Math.min(2,e.length-n-1)}(a):0:function(t,e,n){const o=t?.entities?.[e]?.display_precision;return"number"==typeof o?o:"%"===n?0:1}(e,n,r):t.decimals;const d=Ii(t.min,e)??0,h=Ii(t.max,e)??100,u=Ii(t.target,e),p=Zi(t.severity,e);let m,f="";return l?(f=Po(s,c,e),m=Ho(f,r)):m=o?function(t,e,n,o){const i=t.attribute;return i&&"string"==typeof n&&""!==n.trim()?o.formatEntityAttributeValue?.(e,i)??n:o.formatEntityState?.(e)??ne(o,"unavailable")}(t,o,a,e):ne(e,"entity_not_found"),{entityId:n,config:t,stateObj:o,available:l,value:s,min:d,max:h,target:u,name:i,unit:r,decimals:c,position:l?Hi(s,d,h):0,span:l?Fi(s,d,h):[0,0],targetPosition:null===u?null:Hi(u,d,h),band:Tt(l?s:-1/0,p),bands:p,valueText:f,display:m,label:`${i}, ${m}`}}function qi(t,e){if(!t.include)return[];const n=new Set(t.entities.map(t=>t.entity));return function(t,e,n){const o=Vt.get(t);if(o&&o.exclude===e&&o.states===n.states&&o.entities===n.entities&&o.devices===n.devices&&o.areas===n.areas)return o.ids;const i=[];for(const a of Object.values(n.states)){if(!zt(a)||n.entities?.[a.entity_id]?.hidden)continue;const o=Pt(a,n);if(!Ft(t,o)||Dt(e,o))continue;const r=a.attributes?.friendly_name;i.push({id:a.entity_id,name:"string"==typeof r&&r?r:a.entity_id})}i.sort((t,e)=>t.name.localeCompare(e.name)||(t.id<e.id?-1:1));const r=i.map(t=>t.id);return Vt.set(t,{exclude:e,states:n.states,entities:n.entities,devices:n.devices,areas:n.areas,ids:r}),r}(t.include,t.exclude,e).filter(t=>!n.has(t))}const Yi={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:r`
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
  `,render(t,{show:e,hass:n}){const o=e.value||!t.available,i=B`${e.name?B`<span class="name">${t.name}</span>`:W}${o?B`<span class="value">${t.display}</span>`:W}`;return B`
      ${e.icon?B`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${t.stateObj}
              .icon=${Vi(t)}
            ></ha-state-icon>`:W}
      <div class="track">
        <div class="fill"></div>
        ${e.target&&null!==t.targetPosition&&t.available?B`<div class="target"></div>`:W}
        <div class="text">${i}</div>
        ${t.available?B`<div class="text on-fill ${Lt(t.band.color)}" aria-hidden="true">${i}</div>`:W}
      </div>
    `}},Gi=["auto","none","hour","day","week","month"],Xi=["auto","mean","sum","min","max","first","last","change"],Ji={last:7,unit:"day"},Ki={hour:1/24,day:1,week:7,month:30};function Qi(t){if(t.calendar)return{day:"hour",week:"day",month:"day",year:"month"}[t.calendar];const e=t.last*Ki[t.unit];return e<=2?"hour":e<=62?"day":e<=190?"week":"month"}function tr(t){if(t.config.attribute)return!1;const e=t.stateObj?.attributes?.state_class;return"total_increasing"===e||"total"===e}function er(t,e){const n={...t,period:t.period??{...Ji}};return"none"===t.group_by?delete n.group_by:void 0!==t.group_by&&"auto"!==t.group_by||(n.group_by=Qi(qn(n.period))),void 0!==t.aggregate&&"auto"!==t.aggregate||(n.aggregate=!0!==t.range&&e.length>0&&e.every(tr)?"change":"mean"),n}function nr(t,e){const n=[...new Set(t.flatMap(t=>t.map(t=>t.t)))].sort((t,e)=>t-e),o=t.map(t=>new Map(t.map(t=>[t.t,t]))),i=new Map;for(const a of t)for(const t of a)void 0!==t.end&&i.set(t.t,t.end);const r={times:[],ends:[],values:t.map(()=>[]),lows:t.map(()=>[]),highs:t.map(()=>[])};return n.forEach((a,s)=>{const l=Math.min(i.get(a)??n[s+1]??e,e);l>a&&(r.times.push(a),r.ends.push(l),t.forEach((t,e)=>{const n=o[e].get(a);r.values[e].push(n?n.v:ti(t,a)),r.lows[e].push(n?.min??null),r.highs[e].push(n?.max??null)}))}),r}function or(t,e,n,o){const i=e-t,r=.8*i/o,a=o>1?.12*r:0;return[t+.2*i/2+n*r+a/2,r-a]}function ir(t,e=!0){let n=e?0:1/0,o=e?0:-1/0;for(const i of t)null!==i&&Number.isFinite(i)&&(n=Math.min(n,i),o=Math.max(o,i));return n===1/0?void 0:[n,o]}const rr={hour:66,day:52,week:52,month:60};te("en",{editor_style_column:"Column",editor_group_by_auto:"Automatic",editor_aggregate_auto:"Automatic (change for meters, else average)",editor_range:"Lowest to highest in each column",editor_rounded:"Rounded tops",editor_column_labels:"Show values on the columns",editor_column_color:"Colour"});const ar={hour:"hour",day:"day",week:"day",month:"month"};function sr(t,e,n,o){if("hour"===n)return`${kn(t,o)} – ${wn(e,o)}`;const i="day"===n?{weekday:"short",day:"numeric",month:"short"}:"week"===n?{day:"numeric",month:"short"}:{month:"long",year:"numeric"};let r;try{r=new Intl.DateTimeFormat(o?.locale?.language??"en",{...i,timeZone:vn(o)})}catch{r=new Intl.DateTimeFormat("en",i)}return"week"===n?r.formatRange(t,e-1):r.format(t)}const lr=(t,e)=>Math.round(t/e*1e4)/100+"%",cr=t=>Math.min(ko,Math.max(0,t));function dr(t,e,n,o,i,r,a,s){const l=cr(t.y(i)),c=cr(t.y(o));return B`<div
    class="col ${a?`cap-${a}`:""} ${i<=0&&"both"!==a?"down":""}"
    data-series=${s}
    style="left:${lr(e,wo)};width:${lr(n,wo)};top:${lr(l,ko)};height:${lr(c-l,ko)};background:${r}"
  ></div>`}function hr(t,e,n,o,i,r){return B`<span
    class="point-label col-label ${r?"below":""}"
    style="left:${lr(e,wo)};top:${lr(cr(n),ko)}"
    >${Po(o,i,t.hass)}</span
  >`}function ur(t,e,n,o){const i=t.y(o);return i<0||i>ko?B``:B`<div
    class="target-mark"
    style="left:${lr(e-.1*n,wo)};width:${lr(1.2*n,wo)};top:${lr(i,ko)}"
  ></div>`}const pr=_i.map(t=>"period_last"===t.name?{...t,default:Ji.last}:"period_unit"===t.name?{...t,default:Ji.unit}:"group_by"===t.name||"aggregate"===t.name?{...t,default:"auto"}:t),mr=[...pr,{name:"stack",path:["stack"],default:"none"},{name:"color_by",path:["color_by"],default:"series"},{name:"range",path:["range"],default:!1},{name:"column_labels",path:["labels"],default:!1},{name:"rounded",path:["rounded"],default:!0},...xi,...bi];const fr=[{name:"column_color",path:["color"]}],gr=r`
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
`,_r={layout:"chart",group:"history",height:240,styles:r`
    ${zo}
    ${Zo}
    ${fi}
    ${Jo}
    ${gr}
  `,thumbnail:()=>I`
    <path d="M7 36 V22 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M19 36 V12 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M31 36 V18 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M43 36 V8 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V36 Z" fill="var(--warning-color, #f59e0b)" />
    <path d="M55 36 V26 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V36 Z" fill="var(--primary-color, #03a9f4)" />
    <path d="M4 36.5 H62" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,validate:function(t){if(void 0!==t.group_by&&!(t=>Gi.includes(t))(t.group_by))throw new Error(`"group_by" must be one of: ${Gi.join(", ")}`);if(void 0!==t.aggregate&&!Xi.includes(t.aggregate))throw new Error(`"aggregate" must be one of: ${Xi.join(", ")}`);const e={...t};"auto"!==t.group_by&&"none"!==t.group_by||delete e.group_by,"auto"===t.aggregate&&delete e.aggregate,Eo(e),rn(t),ci(t),qo(t),Qo(t);for(const n of["range","rounded","labels"])if(void 0!==t[n]&&"boolean"!=typeof t[n])throw new Error(`"${n}" must be true or false`);if(void 0!==t.color_by&&"series"!==t.color_by&&"bands"!==t.color_by)throw new Error('"color_by" must be one of: series, bands')},editor:function(t){const e="none"===t.config.group_by,n={...t.config,group_by:void 0},o=Mi(`column|${yi(n)}|${e}`,t.hass,()=>[...vi(t.hass,n).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:gi(t.hass,"group_by",Gi)},...e?[]:[{name:"aggregate",selector:gi(t.hass,"aggregate",Xi)}]]},{type:"grid",name:"",schema:[{name:"stack",selector:gi(t.hass,"stack",Ko)},{name:"color_by",selector:gi(t.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"range",selector:{boolean:{}}},{name:"column_labels",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...wi(t.hass),...$i(t.hass)]);return Ai({...t,commit:e=>t.commit(function(t){const e=t.period;return e&&"object"==typeof e&&void 0===e.calendar?void 0!==e.last&&void 0!==e.unit?t:{...t,period:{last:Ji.last,unit:Ji.unit,...e}}:t}(e))},"chart",o,mr)},entityFields:t=>({schema:Mi("column-entity",t,()=>[{name:"column_color",selector:{text:{}}}]),fields:fr}),disconnect(t){No(t),Do(t),si(t)},render:function(t){const e={...t,raw:er(t.raw,t.items)},n=e.raw,o=!0===n.range,i=Co(e,Date.now(),{range:o}),r=Lo(i,e),a=jo(i,e),s=r===W&&a===W?W:B`${r}${a}`,l=Uo(i,e),c=Yo(n);if(l)return Go("over"===c.header?{...c,header:"above"}:c,s,l);const d=o?"none":n.stack??"none",h=i.group,u=nr(i.series.map(t=>t.points),h?1/0:i.range.end),p=h&&u.ends.length?{...i.range,end:Math.max(i.range.end,...u.ends)}:i.range,m="none"===d?void 0:ei(u.values,d),f=i.series.map(t=>t.entity.target).filter(t=>null!==t);let g;g=m?oi(m):o?ir([...u.lows.flat(),...u.highs.flat(),...u.values.flat(),...f],!1):ir([...u.values.flat(),...e.config.show.target?f:[]]);let _=n;"percent"===d?_={y_min:g[0]<0?-100:0,y_max:g[1]>0?100:0,...n}:!o&&g&&(_=function(t,e){const n={...e};return void 0===e.y_min&&t[0]>=0&&(n.y_min=0),void 0===e.y_max&&t[1]<=0&&(n.y_max=0),n}(g,n));let y=Ro({...e,raw:_},p,g);const{scales:v}=y,b=u.times.map((t,e)=>(t+u.ends[e])/2),$=new Map(b.map((t,e)=>[t,e]));if(h&&b.length){const t=(x=b.length,w=Vo(e)/rr[h.unit],Math.max(1,Math.ceil(x/Math.max(1,w)))),n=ar[h.unit],o="day"===h.unit&&b.length<=8?6048e5:i.range.end-i.range.start;y={...y,unit:n,times:b.filter((e,n)=>n%t===0),label:t=>Mn(u.times[$.get(t)],n,o,e.hass)}}var x,w;const k=function(t,e,n,o,i,r){const a=t.raw,s=e.series,l=s.length,c=!0===a.range,d="bands"===a.color_by,h=Vo(t)/wo,u=!0===a.labels&&"percent"!==i&&n.times.length*(r?1:l)<=60,p=t.config.show.target&&"percent"!==i,m=Math.min(Math.max(0,o.domain[0]),o.domain[1]),f=(t,e)=>d?St(Tt(e,t.entity.bands).color):t.color,g={columns:[],labels:[],targets:[]},_=r?ni(n.values):[];return n.times.forEach((e,i)=>{const a=o.x(e),d=o.x(n.ends[i]);if(r){const[e,l]=or(a,d,0,1);let c=-1,m=-1;r.forEach((t,e)=>{const n=t[i];n&&n[1]>n[0]&&(c=e),n&&n[1]<n[0]&&(m=e)}),r.forEach((t,r)=>{const a=t[i];if(!a||a[0]===a[1])return;const d=n.values[r][i],h=r===c?"top":r===m?"bottom":"";g.columns.push(dr(o,e,l,Math.min(...a),Math.max(...a),f(s[r],d),h,r))});const y=_[i];if(u&&null!==y&&l*h>=24){const n=y>=0?Math.max(0,...r.map(t=>t[i]?.[1]??0)):Math.min(0,...r.map(t=>t[i]?.[1]??0)),a=Math.max(...s.map(t=>t.entity.decimals));g.labels.push(hr(t,e+l/2,o.y(n),y,a,y<0))}const v=s[0].entity.target;return void(p&&null!==v&&g.targets.push(ur(o,e,l,v)))}s.forEach((e,r)=>{const s=n.values[r][i];if(null===s)return;const[_,y]=or(a,d,r,l);if(c){const t=n.lows[r][i]??s,a=n.highs[r][i]??s;g.columns.push(dr(o,_,y,t,a,f(e,s),"both",r)),g.columns.push(B`<div
            class="col-mark"
            style="left:${lr(_,wo)};width:${lr(y,wo)};top:${lr(cr(o.y(s)),ko)}"
          ></div>`)}else g.columns.push(dr(o,_,y,Math.min(m,s),Math.max(m,s),f(e,s),s>=m?"top":"bottom",r)),u&&y*h>=24&&g.labels.push(hr(t,_+y/2,o.y(s),s,e.entity.decimals,s<m));p&&null!==e.entity.target&&g.targets.push(ur(o,_,y,e.entity.target))})}),g}(e,i,u,v,d,m),M=i.series.map((t,e)=>({...t,points:b.map((t,n)=>({t:t,v:u.values[e][n],min:u.lows[e][n],max:u.highs[e][n]}))})),A={dotY:()=>null,heading:t=>{const n=$.get(t);return void 0===n?kn(t,e.hass):h?sr(u.times[n],u.ends[n],h.unit,e.hass):kn(u.times[n],e.hass)}},E=(t,n)=>Po(t,n.entity.decimals,e.hass);if(o&&(A.text=(t,e)=>{if(!e||null===e.v)return"—";const n=e.min??e.v,o=e.max??e.v;return Ho(`${E(n,t)} – ${E(o,t)}`,t.entity.unit)}),m){const t=ni(u.values),n=ui(M),o=Math.max(...M.map(t=>t.entity.decimals));A.footer=i=>pi(e,t[$.get(i[0]?.p?.t??NaN)??-1]??null,n,o),"percent"===d&&(A.text=(t,e)=>{const n=e?m[t.index][$.get(e.t)??-1]:null;return e&&null!==e.v&&n?`${Ho(E(e.v,t),t.entity.unit)} · ${Math.round(Math.abs(n[1]-n[0]))} %`:"—"})}const C=li(n),S=C?ai(e.host):void 0,O=void 0===S?void 0:$.get(S),L=void 0===O?W:B`<div
          class="slot-hover"
          style="left:${lr(v.x(u.times[O]),wo)};width:${lr(v.x(u.ends[O])-v.x(u.times[O]),wo)}"
        ></div>`,T=ne(e.hass,"chart_aria",{style:ne(e.hass,"editor_style_column"),names:i.series.map(t=>t.entity.name).join(", ")}),N=!1===n.rounded?0:4;return Go(c,s,Io({axes:y,ctx:e,content:I``,label:T,overlay:B`<div class="columns" style="--r:${N}px">${L}${k.columns}${k.targets}</div>
        <div class="point-labels">${k.labels}</div>
        ${"over"===c.header?Xo(s):W}
        ${C?mi(e,M,v,S,Vo(e),A):W}`,hover:C?di(e,p,M.map(t=>t.points)):void 0}))}},yr=["series","bands"];function vr(t,e,n,o,i){const r=se(t.entity.config,i),a=An(t.points,500),s=xo(a).map(n=>$o(n.map(t=>[e.x(t.t),e.y(t.v)]),t.curve)).join(""),l=r.dots?a.filter(t=>null!==t.v&&t.t!==o.start&&t.t!==o.end):[],c=l.length>0&&l.length<=200?I`<path
          class="dots"
          d=${ce(l.map(t=>[e.x(t.t),e.y(t.v)]))}
          fill="none"
          stroke=${n}
          style="stroke-width:${de(r.width)}px"
        ></path>`:W;return I`<g class="series" data-series=${t.index}>
    <path
      class="line ${t.dash?"dashed":""}"
      d=${s}
      fill="none"
      stroke=${n}
      style="stroke-width:${r.width}px"
    ></path>
    ${c}
  </g>`}function br(t,e,n){return B`<div class="point-labels">
    ${t.series.flatMap(o=>{const i=o.points.filter(e=>null!==e.v&&(void 0!==t.group||e.t!==t.range.start&&e.t!==t.range.end));return i.length>40?[]:i.map(t=>B`<span
            class="point-label"
            style="left:${e.x(t.t)/wo*100}%;top:${e.y(t.v)/ko*100}%"
            >${Po(t.v,o.entity.decimals,n.hass)}</span
          >`)})}
  </div>`}te("en",{editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",chart_aria:"{style} chart of {names}"});const $r={layout:"chart",group:"history",height:240,styles:r`
    ${zo}
    ${Zo}
    ${fi}
    ${Jo}
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
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(t){if(Eo(t),rn(t),ci(t),pe(t),qo(t),void 0!==t.color_by&&!yr.includes(t.color_by))throw new Error(`"color_by" must be one of: ${yr.join(", ")}`)},editor:function(t){const e=Mi(`line|${yi(t.config)}`,t.hass,()=>[...vi(t.hass,t.config),{type:"grid",name:"",schema:[{name:"curve",selector:gi(t.hass,"curve",yo)},{name:"color_by",selector:gi(t.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:xe},{name:"dots",selector:{boolean:{}}}]},{name:"labels",selector:{boolean:{}}},...wi(t.hass),...$i(t.hass)]);return Ai(t,"chart",e,Ei)},entityFields:(t,e)=>({schema:Le(t),fields:ke(!0===e.dots)}),disconnect(t){No(t),Do(t),si(t)},render(t){const e=Co(t),n=Lo(e,t),o=jo(e,t),i=n===W&&o===W?W:B`${n}${o}`,r=Uo(e,t),a=Yo(t.raw);if(r)return Go("over"===a.header?{...a,header:"above"}:a,i,r);const s=Ro(t,e.range,Ge(e.series.map(t=>t.points))),{scales:l}=s,c=li(t.raw),d="bands"===t.raw.color_by,h=d?I`${e.series.map(t=>function(t,e,n){const[o,i]=n.domain,r=t=>Math.min(1,Math.max(0,(t-o)/(i-o))),a=[];return e.forEach((t,n)=>{const o=Number.isFinite(t.from)?r(t.from):0,i=n+1<e.length?r(e[n+1].from):1,s=St(t.color);a.push(I`<stop offset=${o} stop-color=${s}></stop><stop offset=${i} stop-color=${s}></stop>`)}),I`<linearGradient id=${t} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${ko} y2="0">
    ${a}
  </linearGradient>`}(`cd-bands-${t.index}`,t.entity.bands,l))}`:W,u=le(e.series,e=>se(e.entity.config,t.raw).onTop),p=I`${u.map(n=>vr(n,l,d?`url(#cd-bands-${n.index})`:n.color,e.range,t.raw))}`,m=ne(t.hass,"chart_aria",{style:ne(t.hass,"editor_style_line"),names:e.series.map(t=>t.entity.name).join(", ")});return Go(a,i,Io({axes:s,ctx:t,content:p,label:m,defs:h,overlay:B`${"over"===a.header?Xo(i):W}
        ${!0===t.raw.labels?br(e,l,t):W}
        ${c?mi(t,e.series,l,ai(t.host),Vo(t)):W}`,hover:c?di(t,e.range,e.series.map(t=>t.points)):void 0}))}},xr=["line","column","area"],wr=["auto","left","right"];te("en",{editor_style_combined:"Combined",editor_series_type:"Draw as",editor_series_type_line:"Line",editor_series_type_column:"Columns",editor_series_type_area:"Area",editor_series_axis:"Value axis",editor_series_axis_auto:"Automatic (by unit)",editor_series_axis_left:"Left",editor_series_axis_right:"Right",editor_series_aggregate:"Combine with",editor_series_aggregate_auto:"As the card",editor_series_aggregate_mean:"Average",editor_series_aggregate_sum:"Sum",editor_series_aggregate_min:"Lowest",editor_series_aggregate_max:"Highest",editor_series_aggregate_first:"First",editor_series_aggregate_last:"Last",editor_series_aggregate_change:"Change (meters that count up)"});const kr=t=>t.config,Mr=t=>kr(t).type??"line";function Ar(t,e){const n={...t},o=e.some(t=>"column"===Mr(t));return"none"!==t.group_by&&(void 0!==t.group_by&&"auto"!==t.group_by||o)?void 0!==t.group_by&&"auto"!==t.group_by||(n.group_by=Qi(qn(t.period))):delete n.group_by,"auto"===t.aggregate&&delete n.aggregate,n}function Er(t,e){const n=t.flatMap(t=>t.points.map(t=>t.v));return ir(n,e.includes("column"))}const Cr=[..._i.map(t=>"group_by"===t.name||"aggregate"===t.name?{...t,default:"auto"}:t),{name:"curve",path:["curve"],default:"smooth"},{name:"line_width",path:["line_width"],default:2.5},{name:"dots",path:["dots"],default:!1},{name:"rounded",path:["rounded"],default:!0},...xi,...bi];const Sr=[{name:"series_type",path:["type"],default:"line"},{name:"series_axis",path:["y_axis"],default:"auto"},{name:"series_color",path:["color"]},{name:"series_aggregate",path:["aggregate"],default:"auto"},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"negative_color",path:["negative_color"]}],Or={layout:"chart",group:"history",height:240,styles:r`
    ${zo}
    ${Zo}
    ${fi}
    ${Jo}
    ${zi}
    ${gr}
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
      stroke-width="2.5" stroke-linecap="round" />`,validate:function(t){if(void 0!==t.group_by&&!Gi.includes(t.group_by))throw new Error(`"group_by" must be one of: ${Gi.join(", ")}`);if(void 0!==t.aggregate&&!Xi.includes(t.aggregate))throw new Error(`"aggregate" must be one of: ${Xi.join(", ")}`);const e={...t};if("auto"!==t.group_by&&"none"!==t.group_by||delete e.group_by,"auto"===t.aggregate&&delete e.aggregate,Eo(e),lo(e),rn(t),ci(t),pe(t),qo(t),void 0!==t.rounded&&"boolean"!=typeof t.rounded)throw new Error('"rounded" must be true or false');for(const n of t.entities??[]){if("object"!=typeof n)continue;const t=n;if(void 0!==t.type&&!xr.includes(t.type))throw new Error(`"type" of ${n.entity} must be one of: ${xr.join(", ")}`);if(void 0!==t.y_axis&&"left"!==t.y_axis&&"right"!==t.y_axis)throw new Error(`"y_axis" of ${n.entity} must be one of: left, right`);if(void 0!==t.aggregate&&!so.includes(t.aggregate))throw new Error(`"aggregate" of ${n.entity} must be one of: ${so.join(", ")}`)}},editor:function(t){const e="none"===t.config.group_by,n={...t.config,group_by:void 0},o=Mi(`combined|${yi(n)}|${e}`,t.hass,()=>[...vi(t.hass,n).slice(0,-1),{type:"grid",name:"",schema:[{name:"group_by",selector:gi(t.hass,"group_by",Gi)},...e?[]:[{name:"aggregate",selector:gi(t.hass,"aggregate",Xi)}]]},{name:"curve",selector:gi(t.hass,"curve",yo)},{type:"grid",name:"",schema:[{name:"line_width",selector:xe},{name:"dots",selector:{boolean:{}}},{name:"rounded",selector:{boolean:{}}}]},...wi(t.hass),...$i(t.hass)]);return Ai(t,"chart",o,Cr)},entityFields:t=>({schema:Mi("combined-entity",t,()=>[{type:"grid",name:"",schema:[{name:"series_type",selector:gi(t,"series_type",xr)},{name:"series_axis",selector:gi(t,"series_axis",wr)},{name:"series_color",selector:{text:{}}},{name:"series_aggregate",selector:gi(t,"series_aggregate",["auto",...so])}]},{type:"grid",name:"",schema:[{name:"curve",selector:gi(t,"curve",yo)},{name:"line_width",selector:xe},{name:"dash",selector:{boolean:{}}},{name:"negative_color",selector:{text:{}}}]}]),fields:Sr}),disconnect(t){No(t),Do(t),si(t)},render:function(t){const e={...t,raw:Ar(t.raw,t.items)},n=e.raw,o=Co(e,Date.now(),{aggregate:e=>function(t,e){const n=e.aggregate;return kr(t).aggregate??(n&&"auto"!==n?n:tr(t)?"change":"mean")}(e,t.raw)}),i=Lo(o,e),r=jo(o,e),a=i===W&&r===W?W:B`${i}${r}`,s=Uo(o,e),l=Yo(n);if(s)return Go("over"===l.header?{...l,header:"above"}:l,a,s);const c=o.series.map(t=>Mr(t.entity)),d=function(t){const e=t[0]?.unit,n=t.map(t=>kr(t).y_axis??(t.unit===e?"left":"right"));return n.includes("left")?n:n.map(()=>"left")}(o.series.map(t=>t.entity)),h=o.group,u=o.series.map(t=>h?{...t,points:t.points.map(t=>({...t,t:void 0!==t.end?(t.t+t.end)/2:t.t}))}:t),p=h?Math.max(o.range.end,...o.series.flatMap(t=>t.points.map(t=>t.end??0))):0,m=h?{...o.range,end:p}:o.range,f=t=>u.filter((e,n)=>d[n]===t),g=t=>c.filter((e,n)=>d[n]===t),_=Er(f("left"),g("left"));let y=n;_&&g("left").includes("column")?y={...n,y_min:n.y_min??(_[0]>=0?0:void 0),y_max:n.y_max??(_[1]<=0?0:void 0)}:g("left").includes("area")&&(y=Ci(_,n));const v=Ro({...e,raw:y},m,_),b=v.scales,$=f("right"),x=Er($,g("right")),w={};x&&(g("right").includes("column")||g("right").includes("area"))&&(x[0]>=0&&x[0]<=x[1]/2&&(w.min=0),x[1]<=0&&x[1]>=x[0]/2&&(w.max=0));const k=$.length?cn(x,w,4):void 0,M=k?{x:b.x,y:Xe(k.domain,[ko,0]),domain:k.domain}:void 0,A=t=>"right"===d[t.index]&&M?M:b,E=u.filter(t=>"area"===c[t.index]).map(t=>Ti(t,t.points,A(t),n,{range:m})),C=u.filter(t=>"line"===c[t.index]).map(t=>vr({...t,points:t.points},A(t),t.color,m,n)),S=u.filter(t=>"column"===c[t.index]),O=nr(o.series.filter(t=>"column"===c[t.index]).map(t=>t.points),h?1/0:o.range.end),L=!1===n.rounded?0:4,T=[];O.times.forEach((t,e)=>{const n=b.x(t),o=b.x(O.ends[e]);S.forEach((t,i)=>{const r=O.values[i][e];if(null===r)return;const a=A(t),s=Math.min(Math.max(0,a.domain[0]),a.domain[1]),[l,c]=or(n,o,i,S.length);T.push(dr(a,l,c,Math.min(s,r),Math.max(s,r),t.color,r>=s?"top":"bottom",t.index))})});const N=O.times.map((t,e)=>(t+O.ends[e])/2),j=u.map(t=>{if("column"!==c[t.index]||h)return t;const e=S.indexOf(t);return{...t,points:N.map((t,n)=>({t:t,v:O.values[e][n]}))}}),U=new Map;for(const H of o.series)for(const t of H.points)void 0!==t.end&&U.set((t.t+t.end)/2,[t.t,t.end]);const z=li(n),P=ne(e.hass,"chart_aria",{style:ne(e.hass,"editor_style_combined"),names:o.series.map(t=>t.entity.name).join(", ")});return Go(l,a,Io({axes:v,ctx:e,right:k&&M?{value:k,y:M.y}:void 0,content:I`${E.map(t=>t.body)}`,defs:I`${E.map(t=>t.defs)}`,label:P,overlay:B`<div class="columns" style="--r:${L}px">${T}</div>
        <svg class="plot lines-over" viewBox="0 0 ${wo} ${ko}" preserveAspectRatio="none" aria-hidden="true">
          ${C}
        </svg>
        ${"over"===l.header?Xo(a):W}
        ${z?mi(e,j,b,ai(e.host),Vo(e),{dotY:(t,e)=>"column"===c[t.index]||null===e.v?null:A(t).y(e.v),heading:t=>{const n=U.get(t);return n&&h?sr(n[0],n[1],h.unit,e.hass):kn(t,e.hass)}}):W}`,hover:z?di(e,m,j.map(t=>t.points)):void 0}))}},Lr=t=>(Math.abs(t)<.005?0:t).toFixed(2);function Tr(t,e,n,o){const i=o*Math.PI/180;return[t+n*Math.sin(i),e-n*Math.cos(i)]}function Nr(t,e,n,o,i){const r=String(Number(n.toFixed(2))),a=i-o,[s,l]=Tr(t,e,n,o);if(a>=359.99){const[i,a]=Tr(t,e,n,o+180);return`M${Lr(s)} ${Lr(l)} A${r} ${r} 0 1 1 ${Lr(i)} ${Lr(a)} A${r} ${r} 0 1 1 ${Lr(s)} ${Lr(l)}`}const[c,d]=Tr(t,e,n,i),h=a>180?1:0;return`M${Lr(s)} ${Lr(l)} A${r} ${r} 0 ${h} 1 ${Lr(c)} ${Lr(d)}`}function jr(t,e){const n=t/2;return[-n+e[0]*t,-n+e[1]*t]}function Ur(t){let e=0;for(const n of t)e+=n.codePointAt(0)>=11904?1/.58:1;return e}function zr(t,e=76,n=12,o=8,i=11){const r=t.trim();let a=[r];if(Ur(r)>i){let t=Ur(r);for(let e=r.indexOf(" ");e>0;e=r.indexOf(" ",e+1)){const n=Math.max(Ur(r.slice(0,e)),Ur(r.slice(e+1)));n<t&&(t=n,a=[r.slice(0,e),r.slice(e+1)])}}const s=Math.max(...a.map(Ur));return{lines:a,size:Math.max(o,Math.min(n,Math.floor(e/(.58*Math.max(1,s)))))}}const Pr=65,Hr=66,Fr=t=>String(Math.round(1e3*t)/1e3+0);function Dr(t,e,n,o,i,r=11){const{lines:a,size:s}=zr(t,e,n,o,r),l=i-1.2*(a.length-1)*s;return I`<text class="na" text-anchor="middle" style="font-size: ${s}px">${a.map((t,e)=>I`<tspan x=${Pr} y=${Fr(l+1.2*e*s)}>${t}</tspan>`)}</text>`}const Vr={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:r`
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
  `,render(t,{show:e,hass:n}){const o=function(t,e,n){const o=n-e,i=[];return o>0?(t.forEach((r,a)=>{const s=0===a?e:Math.max(r.from,e),l=Math.min(a+1<t.length?t[a+1].from:1/0,n);l>s&&i.push({from:(s-e)/o,to:(l-e)/o,color:r.color})}),i):i}(t.bands,t.min,t.max),i=o.map((t,e)=>{const n=180*t.from-90+(e>0?1:0),i=180*t.to-90-(e<o.length-1?1:0);return i>n?I`<path class="seg" d=${Nr(Pr,Hr,50,n,i)} stroke=${St(t.color)}></path>`:W}),r=Array.from({length:11},(t,e)=>{const[n,o]=Tr(Pr,Hr,36,18*e-90),[i,r]=Tr(Pr,Hr,40,18*e-90);return I`<line class="tickmark" x1=${n.toFixed(2)} y1=${o.toFixed(2)} x2=${i.toFixed(2)} y2=${r.toFixed(2)}></line>`});let a=W;if(e.target&&null!==t.targetPosition&&t.available){const e=180*t.targetPosition-90,[n,o]=Tr(Pr,Hr,57,e),[i,r]=Tr(Pr,Hr,64,e-3),[s,l]=Tr(Pr,Hr,64,e+3);a=I`<polygon class="target-mark" points="${n.toFixed(2)},${o.toFixed(2)} ${i.toFixed(2)},${r.toFixed(2)} ${s.toFixed(2)},${l.toFixed(2)}"></polygon>`}const s=!e.value;return B`<div class="needle-gauge">
      <svg class=${s?"compact":""} viewBox="0 0 130 ${s?82:104}" aria-hidden="true">
        ${i} ${r} ${a}
        ${t.available?I`<g class="needle" style="transform: rotate(${Fr(180*t.position-90)}deg)"><path d=${c=Pr,d=Hr,h=42,u=3,`M${Lr(c)} ${Lr(d-h)} L${Lr(c+u)} ${Lr(d)} L${Lr(c-u)} ${Lr(d)} Z`}></path></g>`:W}
        <circle class="hub" cx=${Pr} cy=${Hr} r="6"></circle>
        <circle class="hub-dot" cx=${Pr} cy=${Hr} r="2.5"></circle>
        ${t.available?e.value?I`<text class="value" x=${Pr} y="94" text-anchor="middle">${t.display}</text>`:W:s?(l=t.display,Dr(l,58,11,7,55)):function(t){return Dr(t,126,12,8,94,18)}(t.display)}
      </svg>
      ${e.name||e.icon?B`<div class="name">
              ${e.icon?B`<ha-state-icon
                      class="icon"
                      .hass=${n}
                      .stateObj=${t.stateObj}
                      .icon=${Vi(t)}
                    ></ha-state-icon>`:W}
              ${e.name?B`<span class="name-text">${t.name}</span>`:W}
            </div>`:W}
    </div>`;var l,c,d,h,u}};let Rr=0;const Br=new WeakMap;const Ir=60,Zr=60,Wr=t=>String(Math.round(1e3*t)/1e3+0);function qr(t){const[e,n]=jr(t,[0,1]),o=Nr(Ir,Zr,46,e,n),i=t<360;return{layout:"tiles",group:"gauges",height:i?135:155,minColumnWidth:128,styles:r`
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
    `,render(e,{show:n,hass:r}){const a=function(t){let e=Br.get(t);return e||(e="cd-g-"+ ++Rr,Br.set(t,e)),e}(e.config),s=e.span[1]-e.span[0]<=0,l=`stroke-dasharray: ${Wr(100*(e.span[1]-e.span[0]))} 100; stroke-dashoffset: ${Wr(100*-e.span[0])}`,c=(d=e.band.color,Object.prototype.hasOwnProperty.call(Ct,d)?Ct[d].fallback:d);var d;const h=function(t){return!t.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",t))}(c)?`url(#${a}) ${c}`:`url(#${a})`,u=n.icon?6:0,p=(m=e.valueText,Math.min(22,Math.floor(124/Math.max(1,m.length))));var m;let f=W;if(n.target&&null!==e.targetPosition&&e.available){const n=jr(t,[e.targetPosition,e.targetPosition])[0],[o,i]=Tr(Ir,Zr,39.5,n),[r,a]=Tr(Ir,Zr,52.5,n);f=I`<line class="tick" x1=${o.toFixed(2)} y1=${i.toFixed(2)} x2=${r.toFixed(2)} y2=${a.toFixed(2)}></line>`}return B`<div class="radial ${i?"cropped":""}">
        <div class="dial">
          <svg viewBox="0 0 120 ${i?100:120}" aria-hidden="true">
            <defs>
              <linearGradient id=${a} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${Ir} cy=${Zr} r="34"></circle>
            <path class="track" d=${o}></path>
            ${e.available?I`<path
                  class="value-arc ${s?"empty":""}"
                  d=${o}
                  pathLength="100"
                  style=${l}
                  stroke=${h}
                ></path>`:W}
            ${f}
            ${e.available?I`${n.value?I`<text
                        class="value"
                        x=${Ir}
                        y=${64+u}
                        text-anchor="middle"
                        style=${p<22?`font-size: ${p}px`:W}
                      >${e.valueText}</text>
                      <text class="unit" x=${Ir} y=${80+u} text-anchor="middle">${e.unit}</text>`:W}`:function(t){const{lines:e,size:n}=zr(t),o=64-1.2*(e.length-1)*n/2;return I`<text class="na" text-anchor="middle" style="font-size: ${n}px">${e.map((t,e)=>I`<tspan x=${Ir} y=${Wr(o+1.2*e*n)}>${t}</tspan>`)}</text>`}(e.display)}
          </svg>
          ${n.icon&&e.available?B`<ha-state-icon
                  class="icon ${n.value?"":"centre"}"
                  .hass=${r}
                  .stateObj=${e.stateObj}
                  .icon=${Vi(e)}
                ></ha-state-icon>`:W}
        </div>
        ${n.name?B`<span class="name">${e.name}</span>`:W}
      </div>`}}}const Yr=qr(360),Gr=qr(270);function Xr(t){const[e,n]=t;return Array.from({length:10},(t,o)=>{const i=(o+.5)/10;return i>e&&i<=n})}const Jr={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:r`
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
  `,render(t,{show:e,hass:n}){const o=t.available?Xr(t.span):Xr([0,0]),i=e.target&&t.available&&null!==t.targetPosition?Math.min(9,Math.max(0,Math.floor(10*t.targetPosition))):-1,r=!t.available;return B`<div class="seg">
      ${e.icon?B`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${t.stateObj}
              .icon=${Vi(t)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${e.name||r?B`<div class="name">
                ${e.name?B`<span class="label">${t.name}</span>`:W}
                ${r?B`<span class="status">${t.display}</span>`:W}
              </div>`:W}
        <div class="cells">
          ${o.map((t,e)=>B`<i class="cell ${t?"on":""} ${e===i?"mark":""}" style="--i:${e}"></i>`)}
        </div>
      </div>
      ${e.value?B`<span class="value">${t.available?t.display:""}</span>`:W}
    </div>`}},Kr={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:r`
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
  `,render:(t,{show:e,hass:n})=>B`
      ${e.icon?B`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${t.stateObj}
              .icon=${Vi(t)}
            ></ha-state-icon>`:W}
      ${e.value||!t.available?B`<span class="value">${t.display}</span>`:W}
      <div class="tube">
        <div class="fill"></div>
        ${e.target&&null!==t.targetPosition&&t.available?B`<div class="target"></div>`:W}
      </div>
      ${e.name?B`<span class="name">${t.name}</span>`:W}
    `},Qr={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:r`
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
  `,render(t,{show:e,hass:n}){const o=e.value||!t.available;return B`
      ${e.icon?B`<ha-state-icon
              class="icon"
              .hass=${n}
              .stateObj=${t.stateObj}
              .icon=${Vi(t)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${e.name||o?B`<div class="top">
                ${e.name?B`<span class="name">${t.name}</span>`:W}
                ${o?B`<span class="value">${t.display}</span>`:W}
              </div>`:W}
        <div class="track">
          <div class="fill"></div>
          ${e.target&&null!==t.targetPosition&&t.available?B`<div class="target"></div>`:W}
        </div>
      </div>
    `}},ta=["bars","gauges","history","totals","compare","distribution"];function ea(t){return"chart"===t.layout}const na={bar:Yi,thin:Qr,segmented:Jr,tank:Kr,ring:Yr,needle:Vr,arc:Gr,line:$r,column:_r,area:Pi,combined:Or},oa="important",ia=" !"+oa,ra=mt(class extends ft{constructor(t){if(super(t),t.type!==dt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return null==o?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:n}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const o of this.ft)null==e[o]&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in e){const t=e[o];if(null!=t){this.ft.add(o);const e="string"==typeof t&&t.endsWith(ia);o.includes("-")||e?n.setProperty(o,e?t.slice(0,-11):t,e?oa:""):n[o]=t}}return Z}}),aa=Object.keys(Nt),sa=Object.keys(Ct),la="custom",ca={text:{}},da={entity:{domain:["sensor","input_number","number"]}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ha(t){return"string"==typeof t&&""!==t.trim()&&!Number.isFinite(Number(t))}const ua={icon:{}};function pa(t){return void 0===t?"none":aa.find(e=>Nt[e]&&Fe(Nt[e],t))??"custom"}function ma(t){return sa.includes(t)}class fa extends lt{constructor(){super(),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(t){t.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(t){const e=this.hass?.states[t]?.state,n=void 0===e||""===e.trim()?NaN:Number(e);return Number.isFinite(n)?n:void 0}_t(t){return ne(this.hass,t)}_getSelectors(){const t=`${ee(this.hass)}|${this.unit??""}`;if(this._selectors?.key===t)return this._selectors;const e=aa.map(t=>({value:t,label:this._t(`editor_preset_${t}`)})),n=t=>({select:{mode:"dropdown",options:t}});return this._selectors={key:t,preset:n(e),presetCustom:n([...e,{value:la,label:this._t("editor_preset_custom")}]),color:n([...sa,la].map(t=>({value:t,label:this._t(`editor_color_${t}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t&&t.length?t:void 0}}))}_presetChanged(t){t.stopPropagation();const e=t.detail?.value;if(!e||e===la||!aa.includes(e))return;if(e===pa(this.bands))return;const n=Nt[e];this._emit(n?structuredClone(n):void 0)}_updateBand(t,e,n){const o=[...this.bands??[]],i={...o[t]};null==n||""===n?delete i[e]:i[e]=n,o[t]=i,this._emit(o)}_fromChanged(t,e){e.stopPropagation();const n=Number(e.detail?.value);""!==e.detail?.value&&null!=e.detail?.value&&Number.isFinite(n)&&this._updateBand(t,"from",n)}_fromEntityChanged(t,e){e.stopPropagation();const n=e.detail?.value;"string"==typeof n&&""!==n&&this._updateBand(t,"from",n)}_toggleFromMode(t){const e=this.bands?.[t]?.from,n=new Set(this._entityOpen);ha(e)?this._updateBand(t,"from",this._entityValue(e)??0):n.delete(t)||n.add(t),this._entityOpen=n}_colorChanged(t,e){e.stopPropagation();const n=e.detail?.value,o=this.bands?.[t]?.color??"primary";if(!n)return;const i=new Set(this._customOpen);n!==la?(i.delete(t),this._customOpen=i,n!==o&&this._updateBand(t,"color",n)):ma(o)&&(this._customOpen=i.add(t))}_customColorChanged(t,e){e.stopPropagation();const n="string"==typeof e.detail?.value?e.detail.value.trim():"";if(!n)return;const o=new Set(this._customOpen);o.delete(t),this._customOpen=o,this._updateBand(t,"color",n)}_iconChanged(t,e){e.stopPropagation(),this._updateBand(t,"icon",e.detail?.value)}_labelChanged(t,e){e.stopPropagation(),this._updateBand(t,"label",e.detail?.value)}_removeBand(t){const e=[...this.bands??[]];e.splice(t,1),this._emit(e)}_addBand(){const t=[...this.bands??[]],e=t[t.length-1]?.from,n="number"==typeof e?e:ha(e)?this._entityValue(e)??NaN:"string"==typeof e&&""!==e.trim()?Number(e):NaN;t.push({from:Number.isFinite(n)?n+10:0,color:"primary"}),this._emit(t)}_renderBand(t,e,n){const o=!ma(t.color)||this._customOpen.has(e),i=ha(t.from)?t.from:void 0,r=void 0!==i||this._entityOpen.has(e);return B`<div class="band">
      <span class="swatch" style=${ra({"--swatch":St(t.color)})}></span>
      <ha-selector
        .required=${!1}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${n.from}
        .value=${void 0!==i?this._entityValue(i):t.from}
        .disabled=${r}
        @value-changed=${t=>this._fromChanged(e,t)}
      ></ha-selector>
      <ha-selector
        .required=${!0}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${n.color}
        .value=${o?la:t.color}
        @value-changed=${t=>this._colorChanged(e,t)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${ca}
        .value=${t.label??""}
        @value-changed=${t=>this._labelChanged(e,t)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${ua}
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
      ${r?B`<ha-selector
              .required=${!1}
              class="from-entity"
              data-role="from-entity"
              .hass=${this.hass}
              .label=${this._t("editor_band_from_entity_label")}
              .selector=${da}
              .value=${i??""}
              @value-changed=${t=>this._fromEntityChanged(e,t)}
            ></ha-selector>`:W}
      ${o?B`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${ca}
              .value=${ma(t.color)?St(t.color):t.color}
              @value-changed=${t=>this._customColorChanged(e,t)}
            ></ha-selector>`:W}
    </div>`}render(){const t=this._getSelectors(),e=pa(this.bands);return B`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${e===la?t.presetCustom:t.preset}
        .value=${e}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((e,n)=>this._renderBand(e,n,t))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}fa.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},fa.styles=r`
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",fa);const ga={number:{mode:"box",step:"any"}},_a={entity:{domain:["sensor","input_number","number"]}};function ya(t){return null==t||""===t?"default":"number"==typeof t||""!==t.trim()&&Number.isFinite(Number(t))?"number":"entity"}class va extends lt{willUpdate(t){t.has("value")&&"default"!==ya(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const t=(t,e)=>ne(this.hass,t,e),e=[{value:"default",label:t("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:t("editor_limit_number")},{value:"entity",label:t("editor_limit_entity")}],n=e.map(t=>t.label).join("|");return this._modeSelector?.key!==n&&(this._modeSelector={key:n,selector:{select:{mode:"dropdown",options:e}}}),this._modeSelector.selector}get _currentMode(){return this._mode??ya(this.value)}_emit(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t}}))}_modeChanged(t){t.stopPropagation();const e=t.detail?.value;e&&e!==this._currentMode&&(this._mode=e,void 0!==this.value&&this._emit(void 0))}_numberChanged(t){t.stopPropagation();const e=t.detail?.value,n="number"==typeof e?e:""===e||null==e?NaN:Number(e);this._mode="number",this._emit(Number.isFinite(n)?n:void 0)}_entityChanged(t){t.stopPropagation();const e=t.detail?.value;this._mode="entity",this._emit("string"==typeof e&&""!==e?e:void 0)}render(){const t=t=>ne(this.hass,t),e=this._currentMode;return B`<ha-selector
        .required=${!0}
        data-role="mode"
        .hass=${this.hass}
        .label=${this.label}
        .selector=${this._modeSelectorFor()}
        .value=${e}
        @value-changed=${this._modeChanged}
      ></ha-selector>
      ${"number"===e?B`<ha-selector
              .required=${!1}
              data-role="number"
              .hass=${this.hass}
              .label=${t("editor_limit_number")}
              .selector=${ga}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===e?B`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${t("editor_limit_entity")}
                .selector=${_a}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:W}`}}va.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},va.styles=r`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",va);const ba=["min","max","target"];function $a(t,e,n){const o=e&&!n?t?.states[e]?.attributes?.unit_of_measurement:void 0;return"string"==typeof o&&o?o:void 0}class xa extends lt{constructor(){super(),this._computeLabel=t=>this._t(`editor_${t.name}`),this._expanded=new Set}_t(t,e){return ne(this.hass,t,e)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(t){t.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t.entities??[]}}))}_set(t,e,n){this._emit(function(t,e,n,o){if("entity"===n&&(oe(o)||"string"!=typeof o))return t;const i=[...t.entities??[]],r=i[e];if(void 0===r)return t;const a="string"==typeof r?{entity:r}:{...r};oe(o)?delete a[n]:a[n]=o;const s=Object.keys(a);return i[e]=1===s.length&&"entity"===s[0]&&"string"==typeof a.entity?a.entity:a,{...t,entities:i}}(this._asConfig,t,e,n))}_move(t,e){const n=new Set;for(const o of this._expanded)n.add(o===t?e:o===e?t:o);this._expanded=n,this._emit(function(t,e,n){const o=[...t.entities??[]];if(e<0||e>=o.length||e===n)return t;const[i]=o.splice(e,1);return o.splice(Math.max(0,Math.min(n,o.length)),0,i),{...t,entities:o}}(this._asConfig,t,e))}_remove(t){const e=new Set;for(const n of this._expanded)n!==t&&e.add(n>t?n-1:n);this._expanded=e,this._emit(function(t,e){const n=[...t.entities??[]];return e<0||e>=n.length?t:(n.splice(e,1),{...t,entities:n})}(this._asConfig,t))}_toggle(t){const e=new Set(this._expanded);e.delete(t)||e.add(t),this._expanded=e}_add(t){t.stopPropagation();const e=t.detail?.value;"string"==typeof e&&""!==e&&(t.target.value="",this._emit(function(t,e){return{...t,entities:[...t.entities??[],e]}}(this._asConfig,e)))}_formChanged(t,e,n){n.stopPropagation();const o=this.entities?.[t];if(void 0===o)return;const i="string"==typeof o?{entity:o}:o,r=Ve(i,e,n.detail?.value??{});if(r===i)return;const a=[...this.entities??[]],s=Object.keys(r);a[t]=1===s.length&&"entity"===s[0]?r.entity:r,this._emit({type:"",entities:a})}_rowLabel(t){const e=this.hass?.states[t];return e?{text:e.attributes.friendly_name||t,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:t}),missing:!0}:{text:t,missing:!1}}_form(t,e,n,o,i){return B`<ha-form
      data-section=${t}
      .hass=${this.hass}
      .data=${De(n,i)}
      .schema=${o}
      .computeLabel=${this._computeLabel}
      @value-changed=${t=>this._formChanged(e,i,t)}
    ></ha-form>`}_renderOverrides(t,e){const n=t=>e=>{e.stopPropagation(),t(e.detail?.value)};return B`<div class="overrides">
      ${this._form("entity-attribute",e,t,function(t){let e=Se.get(t);return e||(e=[{name:"attribute",selector:{attribute:{entity_id:t}}}],Se.set(t,e)),e}(t.entity),be)}
      ${this._form("entity-text",e,t,Ce,ve)}
      ${this.chartFields?this._form("entity-chart",e,t,this.chartFields.schema,this.chartFields.fields):W}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${t.icon??""}
        @value-changed=${n(t=>this._set(e,"icon",t))}
      ></ha-icon-picker>
      ${ba.map(o=>B`<cd-limit-field
            data-limit=${o}
            .hass=${this.hass}
            .label=${this._t(`editor_${o}`)}
            .value=${t[o]}
            .defaultLabel=${this._t("editor_card_setting")}
            @value-changed=${n(t=>this._set(e,o,t))}
          ></cd-limit-field>`)}
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${t.severity}
        .unit=${t.unit??this.unit??$a(this.hass,t.entity,t.attribute)}
        @value-changed=${n(t=>this._set(e,"severity",t))}
      ></cd-bands-editor>
      ${this._form("entity-actions",e,t,Ee,Me)}
    </div>`}_renderRow(t,e,n){const o=function(t){return"string"==typeof t?t:t.entity}(t),i="string"==typeof t?{entity:t}:t,r=this._rowLabel(o),a=this._expanded.has(e);return B`<div class="entity">
      <span class="label ${r.missing?"missing":""}">${r.text}</span>
      <div class="header">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${Kt(o)}
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
          .disabled=${e===n-1}
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
      ${a?this._renderOverrides(i,e):W}
    </div>`}render(){const t=this.entities??[];return B`${t.map((e,n)=>this._renderRow(e,n,t.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}xa.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chartFields:{attribute:!1},_expanded:{state:!0}},xa.styles=r`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",xa);class wa extends lt{constructor(){super(...arguments),this._label=t=>ne(this.hass,t),this._computeLabel=t=>ne(this.hass,`editor_${t.name}`),this._computeRuleLabel=t=>ne(this.hass,`editor_rule_${t.name.slice(t.name.indexOf("_")+1)}`)}setConfig(t){this._config=t}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]}),n=e?.constructor;await(n?.getConfigElement?.())}catch{}}()}_commit(t){this._config=t,function(t,e){t.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:e}}))}(this,t)}_formChanged(t,e){if(e.stopPropagation(),!this._config)return;const n=e.detail?.value??{};this._commit(Ve(this._config,t,n))}_form(t,e,n){return B`<ha-form
      data-section=${t}
      .hass=${this.hass}
      .data=${De(this._config,n)}
      .schema=${e}
      .computeLabel=${this._computeLabel}
      @value-changed=${t=>this._formChanged(n,t)}
    ></ha-form>`}_panel(t,e){return B`<ha-expansion-panel .header=${this._label(`editor_section_${t}`)} outlined>
      <div class="panel section-${t}">${e}</div>
    </ha-expansion-panel>`}_subChanged(t,e){e.stopPropagation(),this._config&&this._commit(ae(this._config,t,e.detail?.value))}_chartFields(){const t=na[this._config?.style??"bar"];return t&&ea(t)&&this._config?t.entityFields?.(this.hass,this._config):void 0}renderEntities(){return B`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        @value-changed=${t=>this._subChanged(["entities"],t)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(t){const e=this._config?.[t],n={};if(!e||"object"!=typeof e)return n;for(const[o,i]of Object.entries(e))n[`${t}_${o}`]=Array.isArray(i)?i:[i];return n}_ruleChanged(t,e){if(e.stopPropagation(),!this._config)return;const n=e.detail?.value??{},o=this._ruleData(t);let i=this._config;for(const r of Ne[t]){const e=`${t}_${r}`,a=Array.isArray(n[e])?n[e]:[];Fe(o[e]??[],a)||(i=ae(i,[t,r],a.length?a:void 0))}i!==this._config&&this._commit(i)}_ruleForm(t){return B`<div class="rules-heading">${this._label(`editor_${t}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${t}_help`)}</p>
      <ha-form
        data-section=${t}
        .hass=${this.hass}
        .data=${this._ruleData(t)}
        .schema=${ze(t,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${e=>this._ruleChanged(t,e)}
      ></ha-form>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([t,e])=>B`<cd-limit-field
          data-limit=${t}
          .hass=${this.hass}
          .label=${this._label(`editor_${t}`)}
          .value=${this._config?.[t]}
          .defaultLabel=${e}
          @value-changed=${e=>this._subChanged([t],e)}
        ></cd-limit-field>`)}renderColours(){return B`${this._toggles(ge)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${t=>this._subChanged(["severity"],t)}
      ></cd-bands-editor>`}_firstEntityUnit(){const t=this._config?.entities?.[0];return"string"==typeof t?$a(this.hass,t):t?.unit??$a(this.hass,t?.entity,t?.attribute)}_selectStyle(t){this._config&&this._commit(ae(this._config,["style"],"bar"===t?void 0:t))}renderStyle(){const t=this._config?.style??"bar";return B`${ta.map(e=>{const n=Rt.filter(t=>na[t].group===e);return n.length?B`<div class="style-group">${this._label(`editor_group_${e}`)}</div>
        <div class="styles" data-group=${e}>
          ${n.map(e=>{const n=na[e],o=ea(n)?B`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${n.thumbnail()}
                </svg>`:Ye(e);return B`<button
              type="button"
              class="style"
              data-style=${e}
              aria-pressed=${t===e?"true":"false"}
              @click=${()=>this._selectStyle(e)}
            >
              ${o}<span>${this._label(`editor_style_${e}`)}</span>
            </button>`})}
        </div>`:W})}`}renderChart(){const t=na[this._config?.style??"bar"];return t&&ea(t)&&t.editor&&this._config?this._panel("chart",t.editor({hass:this.hass,config:this._config,commit:t=>this._commit(t)})):W}renderDisplay(){return B`${this._toggles(fe)}
    ${this._form("display",function(t){const e=ee(t);return Pe?.language!==e&&(Pe={language:e,schema:Te(t)}),Pe.schema}(this.hass),_e)}`}_toggles(t){const e=De(this._config,t);return B`<div class="toggles">
      ${t.map(({name:n})=>{const o=this._label(`editor_${n}`),i=!0===e[n];return B`<div class="toggle">
          <span @click=${()=>this._toggle(t,n,!i)}>${o}</span
          ><ha-switch
            data-name=${n}
            aria-label=${o}
            .checked=${Kt(i)}
            @change=${e=>this._toggle(t,n,e.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(t,e,n){if(!this._config)return;const o=De(this._config,t);this._commit(Ve(this._config,t,{...o,[e]:n}))}renderActions(){return this._form("actions",Ee,ye)}render(){return this._config?B`<div class="title">${this._form("title",Ae,me)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:W}}wa.properties={hass:{attribute:!1},_config:{state:!0}},wa.styles=r`
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",wa);const ka=r`
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
`;console.info("%c CHARTDECK %c 1.3.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const Ma={rows:16,tiles:8};function Aa(t){const e=Ma[t.layout];return Math.max(1,Math.floor((368+e)/((t.minColumnWidth??0)+e)))}class Ea extends lt{constructor(){super(...arguments),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(t){const e=Object.values(t?.states??{}).filter(t=>t.entity_id.startsWith("sensor.")&&""!==t.state.trim()&&Number.isFinite(Number(t.state))),n=t=>"battery"===t.attributes?.device_class;return e.sort((t,e)=>n(t)!==n(e)?n(t)?-1:1:t.entity_id<e.entity_id?-1:t.entity_id>e.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:e.slice(0,3).map(t=>t.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(t){const e=function(t){if(!t||"object"!=typeof t)throw new Error("Invalid configuration");const e=t.style??"bar";if(!Rt.includes(e))throw new Error(`Unknown style "${String(e)}". Use one of: ${Rt.join(", ")}`);const n=t.sort??"none";if(!It.includes(n))throw new Error(`Unknown sort "${String(n)}". Use one of: ${It.join(", ")}`);if(void 0!==t.entities&&!Array.isArray(t.entities))throw new Error('"entities" must be a list');const o=(t.entities??[]).map((e,n)=>Jt(e,t,n)),i={name:!0,value:!0,icon:!0,target:!0,legend:!1,...t.show},r=qt(t.columns,"columns",1),a=qt(t.limit,"limit",1),s=Ut(t.include,"include"),l=Ut(t.exclude,"exclude");s&&Jt("sensor.chartdeck_check",t,0);const c={style:e,entities:o,hideUnavailable:!0===t.hide_unavailable,cardOptions:t,show:i,sort:n,animate:!1!==t.animate,colorIcon:!0===t.color_icon,legendBands:Yt(t.severity)??Bt};return void 0!==t.title&&(c.title=t.title),void 0!==r&&(c.columns=r),void 0!==a&&(c.limit=a),s&&(c.include=s),l&&(c.exclude=l),c}(t),n=na[e.style];if(ea(n)&&n.validate?.(t),this._watched=function(t){const e=new Set;for(const n of t.entities){e.add(n.entity);for(const t of[n.min,n.max,n.target,...n.severity.map(t=>t.from)])"string"==typeof t&&""!==t&&e.add(t)}for(const n of t.legendBands)"string"==typeof n.from&&e.add(n.from);return e}(e),ea(n))for(const o of n.watch?.(t)??[])this._watched.add(o);this._config&&this._config.style!==e.style&&this._disconnectStyle(),this._config=e}get _styleName(){return this._config?.style??"bar"}get _style(){return na[this._styleName]}_legend(t){const e=this._config;if(!e?.show.legend||0===this._count())return[];const n=t?.decimals??1;return function(t,e,n){const o=n?` ${n}`:"",i=[];return t.forEach((n,r)=>{const a=t[r+1],s=St(n.color);n.label?i.push({color:s,text:n.label}):Number.isFinite(n.from)?a?i.push({color:s,text:`${e(n.from)}–${e(a.from)}${o}`}):i.push({color:s,text:`${e(n.from)}${o}+`}):a&&i.push({color:s,text:`< ${e(a.from)}${o}`})}),i}(Zi(e.legendBands,this.hass),t=>Po(t,n,this.hass),t?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const t=this._config;if(!t)return 0;const e=this._style,n=16+(t.title?73:0)+(this._legend().length>0?32:0);if(ea(e))return n+e.height;const o=this._count(),i=void 0!==t.columns?Math.min(t.columns,Aa(e)):"rows"===e.layout?1:Math.min(o,e.tilesPerRow??3,Aa(e));return n+(0===o?0:Math.ceil(o/Math.max(1,i)))*e.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const t=this._count();if(ea(this._style))return{columns:12,rows:"auto",min_columns:6,min_rows:2};const e="rows"===this._style.layout;return{columns:e||t<=1?6:12,rows:"auto",min_columns:e?6:3,min_rows:1}}shouldUpdate(t){if(0===t.size)return!0;if([...t.keys()].some(t=>"hass"!==t))return!0;if(!t.has("hass"))return!1;const e=t.get("hass"),n=this.hass;if(!e||!n)return!0;for(const o of this._watched)if(e.states[o]!==n.states[o])return!0;if(this._config?.include){const t=qi(this._config,n);if(t.length!==this._matched.length||t.some((t,e)=>t!==this._matched[e]))return!0;for(const o of t)if(e.states[o]!==n.states[o])return!0}return e.themes?.darkMode!==n.themes?.darkMode||e.themes?.theme!==n.themes?.theme||e.locale!==n.locale}willUpdate(){const t=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",t),(t||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const t=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const t=this._config?na[this._config.style]:void 0;t&&ea(t)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const t=this._config?na[this._config.style]:void 0;t&&ea(t)&&t.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle();for(const t of this._detachers.values())t();this._detachers.clear()}_syncActions(){const t=this.shadowRoot;if(!t)return;const e=new Set(t.querySelectorAll(".entity"));for(const[n,o]of this._detachers)e.has(n)||(o(),this._detachers.delete(n));for(const n of e)this._detachers.has(n)||this._detachers.set(n,Et(n,()=>this._items[Number(n.dataset.index)].config))}_renderEntity(t,e,n,o){const i=this._config,r=(a=t.config,At(a.tap_action)||At(a.hold_action)||At(a.double_tap_action));var a;const s=function(t){const e=St(t);return{start:e,end:`color-mix(in srgb, ${e} 80%, #fff)`}}(t.band.color),l=`--start:${t.span[0]};--end:${t.span[1]};--pos:${t.position};--target:${t.targetPosition??0};--c-start:${s.start};--c-end:${s.end}`;return B`<div
      class="entity ${r?"interactive":""} ${t.available?"":"unavailable"} ${i.colorIcon&&t.available?"icon-band":""}"
      data-index=${e}
      role="meter"
      aria-valuenow=${t.available?String(t.value):W}
      aria-valuemin=${t.min}
      aria-valuemax=${t.max}
      aria-label=${t.label}
      tabindex=${r?0:W}
      style=${l}
    >
      ${n.render(t,{show:i.show,hass:o})}
    </div>`}render(){const t=this._config;if(!t)return W;const e=this.hass,n=this._style;let o,i,r;const a=e?function(t,e){const n=qi(t,e).map((e,n)=>Jt(e,t.cardOptions,n)),o=[...t.entities,...n].map(t=>Wi(t,e));return t.hideUnavailable?o.filter(t=>t.available):o}(t,e):[];if(this._matched=e?qi(t,e):[],0!==t.entities.length||t.include)if(e)if(0===a.length)this._items=[],o=B`<div class="hint">${ne(e,t.include?"no_matches":"none_available")}</div>`;else{i=a[0];const s=new Map,l=new Set;a.forEach((t,e)=>{s.set(t,l.has(t.entityId)?`${t.entityId}#${e}`:t.entityId),l.add(t.entityId)}),this._items=function(t,e){if("none"===e)return[...t];const n="ascending"===e?1:-1;return t.map((t,e)=>({item:t,index:e})).sort((t,e)=>{if(t.item.available!==e.item.available)return t.item.available?-1:1;if(t.item.available){const o=(t.item.position-e.item.position)*n;if(0!==o)return o}return t.index-e.index}).map(t=>t.item)}(a,t.sort).slice(0,t.limit);const c=this._items.filter(t=>t.available).map(t=>t.display.length);if(r=c.length?Math.max(...c):void 0,ea(n))o=B`<div class="chart">
          ${n.render({items:this._items,config:t,raw:t.cardOptions,hass:e,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const i="tiles"===n.layout,r=function(t,e){if(void 0===e)return"rows"===t.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const n=(e-1)*Ma[t.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${t.minColumnWidth??0}px, 100%), calc((100% - ${n}px) / ${e} - 0.5px)), 1fr))`}(n,t.columns);o=B`<div
          class="entities layout-${n.layout} ${i&&void 0!==t.columns?"has-columns":""}"
          style=${r}
        >
          ${Mt(this._items,t=>s.get(t),(t,o)=>this._renderEntity(t,o,n,e))}
        </div>`}}else this._items=[],o=W;else this._items=[],o=B`<div class="hint">${ne(e,"no_entities")}</div>`;const s=this._legend(i);return B`<ha-card .header=${t.title}>
      <div
        class="content style-${this._styleName}"
        style=${void 0===r?W:`--cd-value-ch: ${r}`}
      >
        ${o}
      </div>
      ${s.length?B`<div class="legend">
              ${s.map(t=>B`<span class="legend-item"
                    ><span class="dot" style="background:${t.color}"></span>${t.text}</span
                  >`)}
            </div>`:W}
    </ha-card>`}}Ea.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},Ea.styles=[ka,...Object.values(na).map(t=>t.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",Ea);const Ca=window.customCards??=[];Ca.some(t=>"chartdeck-card"===t.type)||Ca.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{Ea as ChartdeckCard};
