/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let o=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(n,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,_=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const s=n?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of n){const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const s=o.fromAttribute(e,t.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(t,e,i,n=!1,o){if(void 0!==t){const s=this.constructor;if(!1===n&&(o=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??v)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=t=>t,k=x.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,E=`<${C}>`,O=document,N=()=>O.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,U="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,j=/>/g,T=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,D=/"/g,R=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=B(1),I=B(2),q=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),Z=new WeakMap,X=O.createTreeWalker(O,129);function G(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}class Y{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const r=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":3===e?"<math>":"",r=H;for(let a=0;a<i;a++){const e=t[a];let i,l,c=-1,d=0;for(;d<e.length&&(r.lastIndex=d,l=r.exec(e),null!==l);)d=r.lastIndex,r===H?"!--"===l[1]?r=z:void 0!==l[1]?r=j:void 0!==l[2]?(R.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=T):void 0!==l[3]&&(r=T):r===T?">"===l[0]?(r=o??H,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,i=l[1],r=void 0===l[3]?T:'"'===l[3]?D:F):r===D||r===F?r=T:r===z||r===j?r=H:(r=T,o=void 0);const h=r===T&&t[a+1].startsWith("/>")?" ":"";s+=r===H?e+E:c>=0?(n.push(i),e.slice(0,c)+M+e.slice(c)+S+h):e+S+(-2===c?a:h)}return[G(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]})(t,e);if(this.el=Y.createElement(l,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=X.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(M)){const e=c[s++],i=n.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:o}),n.removeAttribute(t));if(R.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],N()),X.nextNode(),a.push({type:2,index:++o});n.append(t[e],N())}}}else if(8===n.nodeType)if(n.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)a.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,n){if(e===q)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const s=P(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,n)),e}let K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??O).importNode(e,!0);X.currentNode=n;let o=X.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++r]}s!==a?.index&&(o=X.nextNode(),s++)}return X.currentNode=O,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),P(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new K(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new Y(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new Q(this.O(N()),this.O(N()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=J(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==q,s&&(this._$AH=t);else{const n=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=J(this,n[i+r],e,r),a===q&&(a=this._$AH[r]),s||=!P(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class nt extends tt{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??W)===q)return;const i=this._$AH,n=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st={I:Q},rt=x.litHtmlPolyfillSupport;rt?.(Y,Q),(x.litHtmlVersions??=[]).push("3.3.3");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new Q(e.insertBefore(N(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");
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
 */const{I:gt}=st,_t=t=>t,yt=()=>document.createComment(""),vt=(t,e,i)=>{const n=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(yt(),o),s=n.insertBefore(yt(),o);i=new gt(e,s,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,r=s!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==o||r){let t=i._$AA;for(;t!==e;){const e=_t(t).nextSibling;_t(n).insertBefore(t,o),t=e}}}return i},bt=(t,e,i=t)=>(t._$AI(e,i),t),$t={},xt=(t,e=$t)=>t._$AH=e,wt=t=>{t._$AR(),t._$AA.remove()},kt=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},At=mt(class extends ft{constructor(t){if(super(t),t.type!==ht)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],s=[];let r=0;for(const a of t)o[r]=n?n(a,r):r,s[r]=i(a,r),r++;return{values:s,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){const o=(t=>t._$AH)(t),{values:s,keys:r}=this.dt(e,i,n);if(!Array.isArray(o))return this.ut=r,s;const a=this.ut??=[],l=[];let c,d,h=0,u=o.length-1,p=0,m=s.length-1;for(;h<=u&&p<=m;)if(null===o[h])h++;else if(null===o[u])u--;else if(a[h]===r[p])l[p]=bt(o[h],s[p]),h++,p++;else if(a[u]===r[m])l[m]=bt(o[u],s[m]),u--,m--;else if(a[h]===r[m])l[m]=bt(o[h],s[m]),vt(t,l[m+1],o[h]),h++,m--;else if(a[u]===r[p])l[p]=bt(o[u],s[p]),vt(t,o[h],o[u]),u--,p++;else if(void 0===c&&(c=kt(r,p,m),d=kt(a,h,u)),c.has(a[h]))if(c.has(a[u])){const e=d.get(r[p]),i=void 0!==e?o[e]:null;if(null===i){const e=vt(t,o[h]);bt(e,s[p]),l[p]=e}else l[p]=bt(i,s[p]),vt(t,o[h],i),o[e]=null;p++}else wt(o[u]),u--;else wt(o[h]),h++;for(;p<=m;){const e=vt(t,l[m+1]);bt(e,s[p]),l[p++]=e}for(;h<=u;){const t=o[h++];null!==t&&wt(t)}return this.ut=r,xt(t,l),q}}),Mt=t=>!!t&&"none"!==t.action;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function St(t,e){let i,n,o=0,s=0,r=!1,a=!1;const l=i=>{const n=e(),o="tap"===i?n.tap_action:"hold"===i?n.hold_action:n.double_tap_action;Mt(o)&&t.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:n,action:i}}))},c=()=>{void 0!==i&&clearTimeout(i),i=void 0},d=t=>{const n=t;n.button>0||(r=!0,a=!1,o=n.clientX,s=n.clientY,c(),Mt(e().hold_action)&&(i=setTimeout(()=>{i=void 0,a=!0,l("hold")},500)))},h=t=>{if(!r)return;const e=t;Math.hypot(e.clientX-o,e.clientY-s)>10&&(c(),r=!1)},u=()=>{c(),r=!1},p=()=>{const t=r;c(),r=!1,t&&!a?Mt(e().double_tap_action)?void 0!==n?(clearTimeout(n),n=void 0,l("double_tap")):n=setTimeout(()=>{n=void 0,l("tap")},250):l("tap"):a=!1},m=t=>{const e=t;e.repeat||"Enter"!==e.key&&" "!==e.key||(" "===e.key&&e.preventDefault(),l("tap"))},f=t=>{Mt(e().hold_action)&&t.preventDefault()};return t.addEventListener("pointerdown",d),t.addEventListener("pointermove",h),t.addEventListener("pointerup",p),t.addEventListener("pointercancel",u),t.addEventListener("pointerleave",u),t.addEventListener("keydown",m),t.addEventListener("contextmenu",f),()=>{c(),void 0!==n&&clearTimeout(n),n=void 0,t.removeEventListener("pointerdown",d),t.removeEventListener("pointermove",h),t.removeEventListener("pointerup",p),t.removeEventListener("pointercancel",u),t.removeEventListener("pointerleave",u),t.removeEventListener("keydown",m),t.removeEventListener("contextmenu",f)}}const Ct={primary:{variable:"--primary-color",fallback:"#2f6fe4"},green:{variable:"--success-color",fallback:"#1fae7a"},amber:{variable:"--warning-color",fallback:"#f59e0b"},red:{variable:"--error-color",fallback:"#ef3b5a"},blue:{variable:"--info-color",fallback:"#2f6fe4"},purple:{variable:"--purple-color",fallback:"#8b6cff"},grey:{variable:"--grey-color",fallback:"#8e919a"}};function Et(t){if(Object.prototype.hasOwnProperty.call(Ct,t)){const{variable:e,fallback:i}=Ct[t];return`var(${e}, ${i})`}return t}const Ot=new Set(["amber"]);function Nt(t){if(Object.prototype.hasOwnProperty.call(Ct,t))return Ot.has(t)?"dark":"light";const e=function(t){const e=t.trim().toLowerCase(),i=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(e);if(i){const t=i[1].length<=4?[...i[1]].map(t=>t+t).join(""):i[1],[e,n,o]=[0,2,4].map(e=>parseInt(t.slice(e,e+2),16));return[e,n,o,8===t.length?parseInt(t.slice(6,8),16)/255:1]}const n=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/.exec(e);if(n){const[t,e,i]=[n[1],n[2],n[3]].map(t=>Math.min(255,Number(t))),o=void 0===n[4]?1:Number(n[4])/(n[5]?100:1);return[t,e,i,Math.min(1,o)]}}(t);return e?e[3]<.5?"theme":function([t,e,i]){const n=t=>{const e=t/255;return e<=.03928?e/12.92:((e+.055)/1.055)**2.4};return.2126*n(t)+.7152*n(e)+.0722*n(i)}([e[0],e[1],e[2]])>.4?"dark":"light":"light"}function Pt(t,e){let i=e[0];for(const n of e){if(!(n.from<=t))break;i=n}return i}const Lt={battery:[{from:0,color:"red",label:"Low"},{from:20,color:"amber"},{from:50,color:"green"}],usage:[{from:0,color:"green"},{from:60,color:"amber"},{from:85,color:"red",label:"High"}],temperature:[{from:-50,color:"blue",label:"Cold"},{from:16,color:"green"},{from:24,color:"amber"},{from:28,color:"red",label:"Hot"}],none:void 0},Ut=["label","area","floor","device_class","domain","entity"];function Ht(t,e){if(null==t)return;if("object"!=typeof t||Array.isArray(t))throw new Error(`"${e}" must list what to match, such as "area" or "device_class"`);const i="include"===e?Ut.filter(t=>"entity"!==t):Ut,n={};for(const[o,s]of Object.entries(t)){if(!i.includes(o))throw new Error(`"${e}" can't match on "${o}". Use: ${i.join(", ")}`);const t=(Array.isArray(s)?s:[s]).filter(t=>null!=t&&""!==t);if(t.some(t=>"string"!=typeof t))throw new Error(`"${e}.${o}" must be text or a list of text`);t.length&&(n[o]=t)}return Object.keys(n).length?n:void 0}function zt(t){const e=t.state;return"unavailable"===e||"unknown"===e||""!==e.trim()&&Number.isFinite(Number(e))}function jt(t,e){const i=t.entity_id,n=e.entities?.[i],o=n?.device_id?e.devices?.[n.device_id]:void 0,s=n?.area_id??o?.area_id??void 0,r=t.attributes?.device_class;return{label:[...n?.labels??[],...o?.labels??[]],area:s,floor:s?e.areas?.[s]?.floor_id??void 0:void 0,device_class:"string"==typeof r?r:void 0,domain:i.slice(0,i.indexOf(".")),entity:i}}function Tt(t,e,i){const n=t[e],o=i[e];return Array.isArray(o)?o.some(t=>n.includes(t)):void 0!==o&&n.includes(o)}function Ft(t,e){return Object.keys(t).every(i=>Tt(t,i,e))}function Dt(t,e){return!!t&&Object.keys(t).some(i=>Tt(t,i,e))}const Rt=new WeakMap;const Bt=["bar","thin","segmented","tank","ring","needle","arc","line"],Vt=[{from:-1/0,color:"primary"}],It=["none","ascending","descending"];function qt(t){if("number"==typeof t)return Number.isFinite(t)?t:void 0;if("string"==typeof t&&""!==t.trim()){const e=Number(t);return Number.isFinite(e)?e:void 0}}function Wt(t,e){if(null==t||""===t)return;const i=qt(t);if(void 0!==i)return i;if("string"==typeof t)return t;throw new Error(`"${e}" must be a number or an entity id`)}function Zt(t,e,i,n=1/0){if(null==t||""===t)return;const o=qt(t);if(void 0===o||!Number.isInteger(o)||o<i||o>n){throw new Error(`"${e}" must be a whole number ${n===1/0?`of at least ${i}`:`from ${i} to ${n}`}`)}return o}function Xt(t){if(null==t)return;if(!Array.isArray(t))throw new Error('"severity" must be a list of bands');if(0===t.length)return;const e=t.map((t,e)=>{let i;try{i=Wt(t?.from,"from")}catch{i=void 0}if(void 0===i)throw new Error(`Severity band ${e+1}: "from" must be a number or an entity id`);if("string"!=typeof t.color||!t.color)throw new Error(`Severity band ${e+1}: "color" is required`);return{...t,from:i}});return e.every(t=>"number"==typeof t.from)?e.sort((t,e)=>t.from-e.from):e}function Gt(t,e,i){if(null==t)return{action:e};if("object"!=typeof t||"string"!=typeof t.action)throw new Error(`"${i}" must have an "action"`);return t}function Yt(t,e){return void 0!==t?t:e}function Jt(t,e,i){const n="string"==typeof t?{entity:t}:t;if(!n||"object"!=typeof n||"string"!=typeof n.entity||!n.entity)throw new Error(`Entity ${i+1} needs an "entity" id`);if(void 0!==n.attribute&&null!==n.attribute&&"string"!=typeof n.attribute)throw new Error(`Entity ${i+1}: "attribute" must be an attribute name`);const o=Yt(Wt(n.min,"min"),Wt(e.min,"min"))??0,s=Yt(Wt(n.max,"max"),Wt(e.max,"max"))??100;if("number"==typeof o&&"number"==typeof s&&o>=s)throw new Error(`"max" (${s}) must be greater than "min" (${o})`);const r={...n,entity:n.entity,min:o,max:s,severity:Xt(n.severity)??Xt(e.severity)??Vt,tap_action:Gt(Yt(n.tap_action,e.tap_action),"more-info","tap_action"),hold_action:Gt(Yt(n.hold_action,e.hold_action),"none","hold_action"),double_tap_action:Gt(Yt(n.double_tap_action,e.double_tap_action),"none","double_tap_action")},a=Yt(n.name,e.name),l=Yt(n.icon,e.icon),c=Yt(n.unit,e.unit),d=Yt(Wt(n.target,"target"),Wt(e.target,"target")),h=Yt(Zt(n.decimals,"decimals",0,20),Zt(e.decimals,"decimals",0,20));return void 0!==a&&(r.name=a),void 0!==l&&(r.icon=l),void 0!==c&&(r.unit=c),void 0!==d&&(r.target=d),void 0!==h&&(r.decimals=h),n.attribute||delete r.attribute,r}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kt=mt(class extends ft{constructor(t){if(super(t),t.type!==ut&&t.type!==dt&&t.type!==pt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===q||e===W)return e;const i=t.element,n=t.name;if(t.type===ut){if(e===i[n])return q}else if(t.type===pt){if(!!e===i.hasAttribute(n))return q}else if(t.type===dt&&i.getAttribute(n)===e+"")return q;return xt(t),e}}),Qt={en:{entity_not_found:"Entity not found",unavailable:"Unavailable",no_entities:"Add an entity in the editor to get started.",no_matches:"No entities match right now.",none_available:"None of these entities are available.",editor_section_entities:"Entities",editor_section_style:"Style",editor_section_chart:"Chart",editor_group_bars:"Bars",editor_group_gauges:"Gauges",editor_group_history:"History charts",editor_group_totals:"Parts of a total",editor_group_compare:"Comparisons",editor_group_distribution:"Distributions",editor_period_last:"Show the last",editor_period_unit:"Unit",editor_period_unit_hour:"Hours",editor_period_unit_day:"Days",editor_period_unit_week:"Weeks",editor_period_unit_month:"Months",editor_source:"Readings from",editor_source_history:"History (every change)",editor_source_statistics:"Long-term statistics",editor_curve:"Line shape",editor_curve_smooth:"Smooth",editor_curve_straight:"Straight",editor_curve_step:"Steps",editor_color_by:"Colour",editor_color_by_series:"One colour per entity",editor_color_by_bands:"By colour band",editor_labels:"Show values on the points",editor_series_color:"Line colour",editor_dash:"Dashed",editor_section_limits:"Limits",editor_section_colours:"Colours",editor_section_display:"Display",editor_section_actions:"Actions",editor_title:"Title",editor_style_bar:"Bar",editor_style_thin:"Thin",editor_style_segmented:"Segmented",editor_style_tank:"Tank",editor_style_ring:"Ring",editor_style_needle:"Needle",editor_style_arc:"Arc",editor_show_name:"Show name",editor_show_value:"Show value",editor_show_icon:"Show icon",editor_show_target:"Show target",editor_show_legend:"Show legend",editor_columns:"Columns",editor_sort:"Sort",editor_sort_none:"As listed",editor_sort_ascending:"Lowest first",editor_sort_descending:"Highest first",editor_decimals:"Decimals",editor_unit:"Unit",editor_animate:"Animate",editor_hide_unavailable:"Hide unavailable entities",editor_limit:"Show at most",editor_include_heading:"Also show every entity that matches",editor_include_help:"New devices appear without editing the card. Pick several of one kind to match any of them; different kinds must all match.",editor_exclude_heading:"Leave out",editor_exclude_help:"Matched entities are left out if they match any of these.",editor_rule_device_class:"Device class",editor_rule_area:"Areas",editor_rule_floor:"Floors",editor_rule_label:"Labels",editor_rule_domain:"Domains",editor_rule_entity:"Entities",editor_tap_action:"Tap action",editor_hold_action:"Hold action",editor_double_tap_action:"Double tap action",editor_attribute:"Attribute (instead of the state)",editor_name:"Name",editor_icon:"Icon",editor_min:"Minimum",editor_max:"Maximum",editor_target:"Target",editor_none:"None",editor_card_setting:"card setting",editor_limit_default:"Default ({value})",editor_limit_number:"Number",editor_limit_entity:"Entity",editor_preset:"Preset",editor_preset_battery:"Battery (low is bad)",editor_preset_usage:"Usage (high is bad)",editor_preset_temperature:"Temperature",editor_preset_none:"None",editor_preset_custom:"Custom",editor_band_from:"From",editor_band_from_entity:"Start from an entity",editor_band_from_number:"Start from a number",editor_band_from_entity_label:"Starts at this entity",editor_band_color:"Colour",editor_band_custom_color:"CSS colour",editor_band_label:"Label",editor_band_icon:"Icon",editor_color_icon:"Colour icons to match their band",editor_color_primary:"Primary",editor_color_green:"Green",editor_color_amber:"Amber",editor_color_red:"Red",editor_color_blue:"Blue",editor_color_purple:"Purple",editor_color_grey:"Grey",editor_color_custom:"Custom…",editor_add_band:"Add band",editor_remove_band:"Remove band",editor_add_entity:"Add entity",editor_move_up:"Move up",editor_move_down:"Move down",editor_remove_entity:"Remove entity",editor_show_options:"Show options",editor_hide_options:"Hide options",editor_not_found:"{entity} (not found)",editor_severity:"Colours"}};function te(t,e){Qt[t]={...Qt[t],...e}}function ee(t){return(t?.locale?.language??t?.language??"en").split("-")[0]}function ie(t,e,i){const n=ee(t),o=Qt[n]?.[e]??Qt.en[e]??e;return i?o.replace(/\{(\w+)\}/g,(t,e)=>e in i?String(i[e]):t):o}function ne(t){return null==t||""===t}function oe(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function se(t,e,i){const[n,...o]=e,s=function(t,e){return Array.isArray(t)?[...t]:oe(t)?{...t}:"number"==typeof e?[]:{}}(t,n),r=s,a=o.length?se(r[n],o,i):i,l=o.length>0&&oe(a)&&0===Object.keys(a).length;return ne(a)?Array.isArray(s)&&"number"==typeof n?s.splice(n,1):delete r[n]:l&&oe(s)?delete r[n]:r[n]=a,s}function re(t,e,i){return 0===e.length||ne(i)&&void 0===function(t,e){let i=t;for(const n of e){if("object"!=typeof i||null===i)return;i=i[n]}return i}(t,e)?t:se(t,e,i)}function ae(t,e){const i=t;return{width:i.line_width??e.line_width??2.5,dots:i.dots??!0===e.dots,onTop:!0===i.on_top}}function le(t,e){if(void 0!==t&&("number"!=typeof t||!Number.isFinite(t)||t<.5||t>12))throw new Error(`${e} must be a number from 0.5 to 12`)}function ce(t,e){if(void 0!==t&&"boolean"!=typeof t)throw new Error(`${e} must be true or false`)}const de=[{name:"title",path:["title"]}],he=[{name:"show_name",path:["show","name"],default:!0},{name:"show_value",path:["show","value"],default:!0},{name:"show_icon",path:["show","icon"],default:!0},{name:"show_target",path:["show","target"],default:!0},{name:"show_legend",path:["show","legend"],default:!1},{name:"animate",path:["animate"],default:!0},{name:"hide_unavailable",path:["hide_unavailable"],default:!1}],ue=[{name:"color_icon",path:["color_icon"],default:!1}],pe=[{name:"columns",path:["columns"]},{name:"sort",path:["sort"],default:"none"},{name:"limit",path:["limit"]},{name:"decimals",path:["decimals"]},{name:"unit",path:["unit"]}],me=[{name:"tap_action",path:["tap_action"],default:{action:"more-info"}},{name:"hold_action",path:["hold_action"],default:{action:"none"}},{name:"double_tap_action",path:["double_tap_action"],default:{action:"none"}}],fe=[{name:"name",path:["name"]},{name:"unit",path:["unit"]},{name:"decimals",path:["decimals"]}],ge=[{name:"attribute",path:["attribute"]}],_e=[{name:"series_color",path:["color"]},{name:"curve",path:["curve"]},{name:"line_width",path:["line_width"]},{name:"dash",path:["dash"],default:!1},{name:"on_top",path:["on_top"],default:!1}],ye={number:{min:.5,max:12,step:.5,mode:"box",unit_of_measurement:"px"}},ve=new Map;const be=me.map(({name:t,path:e})=>({name:t,path:e})),$e=[{name:"title",selector:{text:{}}}],xe=me.map(({name:t})=>({name:t,selector:{ui_action:{}}})),we=[{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}}]}],ke=new Map;let Ae;function Me(t){return[{type:"grid",name:"",schema:[{name:"columns",selector:{number:{min:1,max:6,mode:"box"}}},{name:"sort",selector:{select:{mode:"dropdown",options:["none","ascending","descending"].map(e=>({value:e,label:ie(t,`editor_sort_${e}`)}))}}},{name:"limit",selector:{number:{min:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:20,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]}const Se={include:["device_class","area","floor","label","domain"],exclude:["entity","device_class","area","floor","label","domain"]};function Ce(t,e){const i=t=>({select:{multiple:!0,custom_value:!0,mode:"dropdown",options:t}});switch(t){case"device_class":return i(e.deviceClasses);case"domain":return i(e.domains);case"entity":return{entity:{multiple:!0}};default:return{[t]:{multiple:!0}}}}const Ee=new Map;function Oe(t,e){const i=function(t){const e=new Set,i=new Set;for(const n of Object.values(t?.states??{})){const t=n.attributes?.device_class;"string"==typeof t&&t&&e.add(t),i.add(n.entity_id.slice(0,n.entity_id.indexOf(".")))}return{deviceClasses:[...e].sort(),domains:[...i].sort()}}(e),n=`${i.deviceClasses.join()}|${i.domains.join()}`,o=Ee.get(t);if(o?.key===n)return o.schema;const s=Se[t].map(e=>({name:`${t}_${e}`,selector:Ce(e,i)}));return Ee.set(t,{key:n,schema:s}),s}let Ne;function Pe(t,e){let i=t;for(const n of e){if("object"!=typeof i||null===i)return;i=i[n]}return i}function Le(t,e){if(t===e)return!0;if("object"!=typeof t||"object"!=typeof e||null===t||null===e)return!1;if(Array.isArray(t)!==Array.isArray(e))return!1;const i=Object.keys(t),n=Object.keys(e);return i.length===n.length&&i.every(i=>Le(t[i],e[i]))}function Ue(t,e){const i={};for(const n of e){const e=Pe(t,n.path)??n.default;void 0!==e&&(i[n.name]=e)}return i}function He(t,e,i){const n=Ue(t,e);let o=t;for(const s of e){const t=i[s.name];Le(n[s.name],t)||(o=re(o,s.path,void 0!==s.default&&Le(t,s.default)?void 0:t))}return o}const ze="var(--divider-color, rgba(127, 127, 127, 0.3))",je="var(--primary-color, #03a9f4)",Te="var(--secondary-text-color, #727272)";function Fe(t,e,i,n){const o=(n-90)*Math.PI/180;return[(t+i*Math.cos(o)).toFixed(2),(e+i*Math.sin(o)).toFixed(2)]}function De(t,e,i,n){return Fe(t,e,i,n).join(" ")}function Re(t,e,i,n,o){const s=o-n>180?1:0;return`M ${De(t,e,i,n)} A ${i} ${i} 0 ${s} 1 ${De(t,e,i,o)}`}function Be(t){return V`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
    ${function(t){switch(t){case"bar":return I`
        <rect x="6" y="9" width="52" height="9" rx="3" fill=${ze} />
        <rect x="6" y="9" width="36" height="9" rx="3" fill=${je} />
        <rect x="6" y="23" width="52" height="9" rx="3" fill=${ze} />
        <rect x="6" y="23" width="22" height="9" rx="3" fill=${je} />`;case"thin":return I`
        <rect x="6" y="8" width="24" height="3" rx="1.5" fill=${Te} opacity="0.6" />
        <rect x="6" y="14" width="52" height="3" rx="1.5" fill=${ze} />
        <rect x="6" y="14" width="38" height="3" rx="1.5" fill=${je} />
        <rect x="6" y="23" width="18" height="3" rx="1.5" fill=${Te} opacity="0.6" />
        <rect x="6" y="29" width="52" height="3" rx="1.5" fill=${ze} />
        <rect x="6" y="29" width="20" height="3" rx="1.5" fill=${je} />`;case"segmented":return I`${[0,1].map(t=>Array.from({length:8},(e,i)=>I`<rect x=${6+6.75*i} y=${0===t?9:23} width="5" height="9" rx="1.5"
            fill=${i<(0===t?6:3)?je:ze} />`))}`;case"tank":return I`${[14,36].map((t,e)=>I`
          <rect x=${t} y="5" width="14" height="30" rx="4" fill=${ze} />
          <rect x=${t} y=${0===e?13:23} width="14" height=${0===e?22:12} rx="4" fill=${je} />`)}`;case"ring":return I`
        <circle cx="32" cy="20" r="14" fill="none" stroke=${ze} stroke-width="5" />
        <path d=${Re(32,20,14,0,250)} fill="none" stroke=${je} stroke-width="5" stroke-linecap="round" />`;case"arc":return I`
        <path d=${Re(32,21,14,-135,135)} fill="none" stroke=${ze} stroke-width="5" stroke-linecap="round" />
        <path d=${Re(32,21,14,-135,40)} fill="none" stroke=${je} stroke-width="5" stroke-linecap="round" />`;case"needle":{const[t,e]=Fe(32,32,18,25);return I`
        <path d=${Re(32,32,22,-90,90)} fill="none" stroke=${ze} stroke-width="5" />
        <path d=${Re(32,32,22,-90,25)} fill="none" stroke=${je} stroke-width="5" />
        <line x1="32" y1="32" x2=${t} y2=${e} stroke=${Te} stroke-width="2.5" stroke-linecap="round" />
        <circle cx="32" cy="32" r="3" fill=${Te} />`}default:return I``}}(t)}
  </svg>`}function Ve(t,e,i){const{locale:n,grouping:o}=function(t){const e=t?.locale?.language??"en";switch(t?.locale?.number_format){case"system":return{locale:void 0,grouping:!0};case"comma_decimal":return{locale:"en-US",grouping:!0};case"decimal_comma":return{locale:"de",grouping:!0};case"space_comma":return{locale:"fr",grouping:!0};case"none":return{locale:"en-US",grouping:!1};default:return{locale:e,grouping:!0}}}(i),s=new Intl.NumberFormat(n,{minimumFractionDigits:e,maximumFractionDigits:e,useGrouping:o});let r=s.format(0===t?0:t);return 0===Number(t.toFixed(e))&&(r=s.format(0)),r}function Ie(t,e){return e?`${t} ${e}`:t}function qe(t,e,i){return!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(i)||i<=e?0:Math.min(1,Math.max(0,(t-e)/(i-e)))}function We(t,e,i){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(i)||i<=e)return[0,0];const n=qe(t,e,i);if(e<0&&i>0){const t=qe(0,e,i);return n<t?[n,t]:[t,n]}return[0,n]}const Ze=new Set;function Xe(t){return(t.available?t.band.icon:void 0)??t.config.icon??(t.stateObj?void 0:"mdi:help-circle-outline")}function Ge(t){return null==t||""===t}function Ye(t){if(void 0===t||""===t.trim())return null;const e=Number(t);return Number.isFinite(e)?e:null}function Je(t,e,i="limit"){if(Ge(t))return null;if("number"==typeof t)return Number.isFinite(t)?t:null;const n=String(t),o=Ye(e.states[n]?.state);if(null===o&&!Ze.has(n)){Ze.add(n);const t="limit"===i?"using the default":"leaving that colour band out";console.warn(`Chartdeck: ${i} entity "${n}" is missing or not numeric; ${t}.`)}return o}function Ke(t,e){if(t.every(t=>"number"==typeof t.from))return t;const i=[];for(const n of t){const t=e?Je(n.from,e,"band start"):null;null!==t&&i.push({...n,from:t})}return i.length?i.sort((t,e)=>t.from-e.from):Vt}function Qe(t,e){const i=t.entity,n=e.states[i],o=t.name??n?.attributes?.friendly_name??i,s=t.unit??(t.attribute?"":n?.attributes?.unit_of_measurement??""),r=function(t,e){if(e)return t.attribute?e.attributes?.[t.attribute]:e.state}(t,n),a=function(t){return"number"==typeof t?Number.isFinite(t)?t:null:"string"==typeof t?Ye(t):null}(r),l=null!==a;let c;c=Ge(t.decimals)?t.attribute?l?function(t){const e=String(t),i=e.indexOf(".");return-1===i||/e/i.test(e)?0:Math.min(2,e.length-i-1)}(r):0:function(t,e,i){const n=t?.entities?.[e]?.display_precision;return"number"==typeof n?n:"%"===i?0:1}(e,i,s):t.decimals;const d=Je(t.min,e)??0,h=Je(t.max,e)??100,u=Je(t.target,e),p=Ke(t.severity,e);let m,f="";return l?(f=Ve(a,c,e),m=Ie(f,s)):m=n?function(t,e,i,n){const o=t.attribute;return o&&"string"==typeof i&&""!==i.trim()?n.formatEntityAttributeValue?.(e,o)??i:n.formatEntityState?.(e)??ie(n,"unavailable")}(t,n,r,e):ie(e,"entity_not_found"),{entityId:i,config:t,stateObj:n,available:l,value:a,min:d,max:h,target:u,name:o,unit:s,decimals:c,position:l?qe(a,d,h):0,span:l?We(a,d,h):[0,0],targetPosition:null===u?null:qe(u,d,h),band:Pt(l?a:-1/0,p),bands:p,valueText:f,display:m,label:`${o}, ${m}`}}function ti(t,e){if(!t.include)return[];const i=new Set(t.entities.map(t=>t.entity));return function(t,e,i){const n=Rt.get(t);if(n&&n.exclude===e&&n.states===i.states&&n.entities===i.entities&&n.devices===i.devices&&n.areas===i.areas)return n.ids;const o=[];for(const r of Object.values(i.states)){if(!zt(r)||i.entities?.[r.entity_id]?.hidden)continue;const n=jt(r,i);if(!Ft(t,n)||Dt(e,n))continue;const s=r.attributes?.friendly_name;o.push({id:r.entity_id,name:"string"==typeof s&&s?s:r.entity_id})}o.sort((t,e)=>t.name.localeCompare(e.name)||(t.id<e.id?-1:1));const s=o.map(t=>t.id);return Rt.set(t,{exclude:e,states:i.states,entities:i.entities,devices:i.devices,areas:i.areas,ids:s}),s}(t.include,t.exclude,e).filter(t=>!i.has(t))}const ei={layout:"rows",group:"bars",height:46,minColumnWidth:160,styles:s`
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
  `,render(t,{show:e,hass:i}){const n=e.value||!t.available,o=V`${e.name?V`<span class="name">${t.name}</span>`:W}${n?V`<span class="value">${t.display}</span>`:W}`;return V`
      ${e.icon?V`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${Xe(t)}
            ></ha-state-icon>`:W}
      <div class="track">
        <div class="fill"></div>
        ${e.target&&null!==t.targetPosition&&t.available?V`<div class="target"></div>`:W}
        <div class="text">${o}</div>
        ${t.available?V`<div class="text on-fill ${Nt(t.band.color)}" aria-hidden="true">${o}</div>`:W}
      </div>
    `}};function ii(t,e){if(t.length<=e)return t;const i=[];let n=[];for(const s of t)null===s.v?(n.length&&i.push(n),i.push([s]),n=[]):n.push(s);n.length&&i.push(n);const o=t.length;return i.flatMap(t=>null===t[0].v?t:function(t,e){if(t.length<=e||e<3)return t;const i=[t[0]],n=(t.length-2)/(e-2);let o=0;for(let s=0;s<e-2;s++){const e=Math.floor(s*n)+1,r=Math.min(Math.floor((s+1)*n)+1,t.length-1),a=r,l=Math.min(Math.floor((s+2)*n)+1,t.length);let c=0,d=0;const h=Math.max(1,l-a);for(let i=a;i<l;i++)c+=t[i].t,d+=t[i].v;c/=h,d/=h;let u=e,p=-1;const m=t[o];for(let i=e;i<r;i++){const e=Math.abs((m.t-c)*(t[i].v-m.v)-(m.t-t[i].t)*(d-m.v));e>p&&(p=e,u=i)}i.push(t[u]),o=u}return i.push(t[t.length-1]),i}(t,Math.max(3,Math.round(t.length/o*e))))}function ni(t,e){const[i,n]=t,[o,s]=e,r=n===i?0:(s-o)/(n-i);return t=>o+(t-i)*r}const oi=["outside","inside"],si=!0,ri=!0,ai="outside",li=!0,ci=!1,di=t=>"number"==typeof t&&Number.isFinite(t);function hi(t){const e=t,i=e.gridlines??{};return{x:e.x_axis??si,y:e.y_axis??ri,labels:e.axis_labels??ai,horizontal:i.horizontal??li,vertical:i.vertical??ci,min:di(e.y_min)?e.y_min:void 0,max:di(e.y_max)?e.y_max:void 0}}function ui(t){return Math.max(0,-Math.floor(Math.log10(t)+1e-9))}const pi=t=>Number(t.toPrecision(12));function mi(t,e,i){let[n,o]=function([t,e],i=.08){if(t===e)return[t-1,e+1];const n=(e-t)*i;return[t-n,e+n]}(t??[0,1]);void 0!==e.min&&(n=e.min),void 0!==e.max&&(o=e.max),o<=n&&(void 0!==e.min?o=n+Math.max(1,.1*Math.abs(n)):n=o-Math.max(1,.1*Math.abs(o)));const s=function(t,e){if(!(t>0&&Number.isFinite(t)))return 1;const i=t/Math.max(1,e),n=10**Math.floor(Math.log10(i));for(const o of[1,2,5])if(o*n>=i*(1-1e-9))return o*n;return 10*n}(o-n,i);void 0===e.min&&(n=pi(Math.floor(n/s+1e-9)*s)),void 0===e.max&&(o=pi(Math.ceil(o/s-1e-9)*s));const r=[];for(let a=Math.ceil(n/s-1e-9);a*s<=o+1e-9*s;a++)r.push(pi(a*s));return{domain:[n,o],ticks:r,decimals:ui(s)}}const fi=6e4,gi=36e5,_i=864e5,yi=[...[1,5,10,15,30].map(t=>({unit:"minute",n:t,ms:t*fi})),...[1,2,3,6,12].map(t=>({unit:"hour",n:t,ms:t*gi})),...[1,2,7].map(t=>({unit:"day",n:t,ms:t*_i})),...[1,2,3,6].map(t=>({unit:"month",n:t,ms:30.44*t*_i})),...[1,2,5,10,20,50,100].map(t=>({unit:"year",n:t,ms:365.25*t*_i}))];const vi=t=>-new Date(t).getTimezoneOffset()*fi;function bi(t){if(!t)return vi;let e;try{e=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}catch{return vi}return t=>{const i={};for(const n of e.formatToParts(t))i[n.type]=Number(n.value);return Date.UTC(i.year,i.month-1,i.day,i.hour%24,i.minute,i.second)-1e3*Math.floor(t/1e3)}}function $i(t,e){return t-e(t-e(t))}function xi(t,e,i,n){const o=[],s=t.end+e(t.end);for(let r=i,a=0;r<=s&&a<1e3;r=n(r),a++){const i=$i(r,e);i>=t.start&&i<=t.end&&i!==o[o.length-1]&&o.push(i)}return o}function wi(t,e,i=vi){const{unit:n,n:o}=function(t,e){return yi.find(i=>t/i.ms<=Math.max(1,e))??yi[yi.length-1]}(t.end-t.start,e),s=t.start+i(t.start);if("minute"===n||"hour"===n||"day"===n&&7!==o){const e=o*("minute"===n?fi:"hour"===n?gi:_i);return{unit:n,ticks:xi(t,i,Math.ceil(s/e)*e,t=>t+e)}}if("day"===n){const e=Math.ceil(s/_i);return{unit:n,ticks:xi(t,i,(e+((4-e)%7+7)%7)*_i,t=>t+7*_i)}}const r=new Date(s);if("month"===n){let e=r.getUTCFullYear(),a=r.getUTCMonth();Date.UTC(e,a)<s&&(a+=1),a=Math.ceil(a/o)*o,e+=Math.floor(a/12),a%=12;const l=t=>{const e=new Date(t);return Date.UTC(e.getUTCFullYear(),e.getUTCMonth()+o)};return{unit:n,ticks:xi(t,i,Date.UTC(e,a),l)}}let a=r.getUTCFullYear();return Date.UTC(a,0)<s&&(a+=1),a=Math.ceil(a/o)*o,{unit:n,ticks:xi(t,i,Date.UTC(a,0),t=>Date.UTC(new Date(t).getUTCFullYear()+o,0))}}function ki(t){return"server"===t?.locale?.time_zone?t.config?.time_zone:void 0}function Ai(t){const e=t?.locale?.time_format;return"12"===e||"24"!==e&&void 0}const Mi=new Map;function Si(t,e,i){const n=`${t}|${e}|${JSON.stringify(i)}`;let o=Mi.get(n);if(!o){try{o=new Intl.DateTimeFormat(t,{...i,timeZone:e})}catch{o=new Intl.DateTimeFormat(void 0,i)}Mi.set(n,o)}return o}function Ci(t,e,i,n,o){const s=n?.locale?.language??"en",r=ki(n),a=t+(o??bi(r))(t),l=new Date(a),c=a%_i===0;switch(e){case"minute":case"hour":return c?Si(s,r,{weekday:"short"}).format(t):function(t,e,i=!1){return Si(e?.locale?.language??"en",ki(e),{hour:"numeric",minute:"2-digit",...i?{second:"2-digit"}:{},hour12:Ai(e)}).format(t)}(t,n);case"day":return i<=7*_i?Si(s,r,{weekday:"short"}).format(t):Si(s,r,{day:"numeric",month:"short"}).format(t);case"month":return Si(s,r,0===l.getUTCMonth()?{month:"short",year:"numeric"}:{month:"short"}).format(t);default:return Si(s,r,{year:"numeric"}).format(t)}}const Ei=["hour","day","week","month"],Oi={last:24,unit:"hour"},Ni={hour:36e5,day:864e5,week:6048e5};function Pi(t){if(null==t)return Oi;if("object"!=typeof t||Array.isArray(t))throw new Error('"period" must have "last" and "unit"');const{last:e=Oi.last,unit:i=Oi.unit}=t,n="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"!=typeof n||!Number.isInteger(n)||n<1)throw new Error('"period.last" must be a whole number of 1 or more');if(!Ei.includes(i))throw new Error(`"period.unit" must be one of: ${Ei.join(", ")}`);return{last:n,unit:i}}function Li(t){if("number"==typeof t)return Number.isFinite(t)?t:null;if("string"!=typeof t||""===t.trim())return null;const e=Number(t);return Number.isFinite(e)?e:null}function Ui(t,e){const i=[];for(const n of t??[]){const t=n.lu??n.lc;if(void 0===t)continue;const o=e?n.a?.[e]:n.s;i.push({t:Math.round(1e3*t),v:Li(o)})}return i}function Hi(t){return(t??[]).map(t=>{const e="number"==typeof t.start?t.start:Date.parse(t.start),i=t.mean??t.state??null;return{t:e,v:"number"==typeof i&&Number.isFinite(i)?i:null,min:t.min??null,max:t.max??null}})}function zi(t){const e=(t.end-t.start)/864e5;return e<=2?"5minute":e<=35?"hour":e<=400?"day":"month"}function ji(t){return t.attribute?`${t.entity}|${t.attribute}`:t.entity}const Ti={"5minute":3e5,hour:36e5,day:864e5,month:864e5};class Fi{constructor(t){this.onChange=t,this.shape="",this.loadedFrom=1/0,this.status="loading",this.data=new Map,this.seen=new Map,this.generation=0}get(t,e,i,n){const o=`${n}|${e.map(ji).join(",")}`,s=void 0!==this.pausedAt&&Date.now()-this.pausedAt>Ri,r=void 0!==this.pausedAt&&"statistics"===n;this.pausedAt=void 0,(o!==this.shape||i.start<this.loadedFrom||s||r)&&(this.shape=o,this.load(t,e,i,n)),"ready"===this.status&&"history"===n&&this.appendLive(t,e);const a=new Map;for(const[l,c]of this.data)a.set(l,Di(c,i));return{status:this.status,data:a,error:this.error}}pause(){clearTimeout(this.timer),this.timer=void 0,this.pausedAt=Date.now()}dispose(){clearTimeout(this.timer),this.timer=void 0,this.shape="",this.loadedFrom=1/0,this.generation++}load(t,e,i,n){const o=++this.generation;this.status="loading",this.loadedFrom=i.start,clearTimeout(this.timer);const s=zi(i),r="statistics"===n?async function(t,e,i,n=zi(i)){const o=new Map;if(!t.callWS||0===e.length)return o;const s=[...new Set(e.map(t=>t.entity))],r=await t.callWS({type:"recorder/statistics_during_period",start_time:new Date(i.start).toISOString(),end_time:new Date(i.end).toISOString(),statistic_ids:s,period:n,types:["mean","min","max","state"]});for(const a of e)o.set(ji(a),Hi(r?.[a.entity]));return o}(t,e,i,s):async function(t,e,i){const n=new Map;if(!t.callWS||0===e.length)return n;const o={type:"history/history_during_period",start_time:new Date(i.start).toISOString(),end_time:new Date(i.end).toISOString(),significant_changes_only:!1},s=[...new Set(e.filter(t=>!t.attribute).map(t=>t.entity))],r=[...new Set(e.filter(t=>t.attribute).map(t=>t.entity))],a=[];return s.length&&a.push(t.callWS({...o,entity_ids:s,minimal_response:!0,no_attributes:!0}).then(t=>{for(const e of s)n.set(ji({entity:e}),Ui(t?.[e]))})),r.length&&a.push(t.callWS({...o,entity_ids:r,no_attributes:!1}).then(t=>{for(const i of e.filter(t=>t.attribute))n.set(ji(i),Ui(t?.[i.entity],i.attribute))})),await Promise.all(a),n}(t,e,i);r.then(i=>{if(o===this.generation){this.data=i,this.status="ready",this.error=void 0,this.seen.clear();for(const i of e)this.seen.set(ji(i),t.states[i.entity]);"statistics"===n&&(this.timer=setTimeout(()=>{this.shape="",this.onChange()},Ti[s])),this.onChange()}},t=>{o===this.generation&&(this.status="error",this.error=t instanceof Error?t.message:String(t?.message??t),this.onChange())})}appendLive(t,e){for(const i of e){const e=ji(i),n=t.states[i.entity];if(!n||this.seen.get(e)===n)continue;this.seen.set(e,n);const o=Date.parse(n.last_updated??n.last_changed??"")||Date.now(),s=this.data.get(e)??[],r=s[s.length-1];r&&o<=r.t||(s.push({t:o,v:Li(i.attribute?n.attributes?.[i.attribute]:n.state)}),this.data.set(e,s))}}}function Di(t,e){let i=0;for(;i<t.length&&t[i].t<e.start;)i++;const n=t.slice(i).filter(t=>t.t<=e.end),o=t[i-1];return o?[{...o,t:e.start},...n]:n}const Ri=6e4,Bi=new WeakMap;const Vi=["smooth","straight","step"],Ii=t=>(Math.round(100*t)/100).toString();function qi(t){return t.map(([t,e],i)=>`${i?"L":"M"}${Ii(t)},${Ii(e)}`).join("")}function Wi(t,e){return 0===t.length?"":1===t.length?`M${Ii(t[0][0])},${Ii(t[0][1])}h0`:"smooth"===e?function(t){const e=t.length;if(e<3)return qi(t);const i=[],n=[];for(let r=0;r<e-1;r++)i.push(t[r+1][0]-t[r][0]),n.push(0===i[r]?0:(t[r+1][1]-t[r][1])/i[r]);const o=[n[0]];for(let r=1;r<e-1;r++)o.push(n[r-1]*n[r]<=0?0:(n[r-1]+n[r])/2);o.push(n[e-2]);for(let r=0;r<e-1;r++){if(0===n[r]){o[r]=0,o[r+1]=0;continue}const t=o[r]/n[r],e=o[r+1]/n[r],i=t*t+e*e;if(i>9){const s=3/Math.sqrt(i);o[r]=s*t*n[r],o[r+1]=s*e*n[r]}}let s=`M${Ii(t[0][0])},${Ii(t[0][1])}`;for(let r=0;r<e-1;r++){const e=i[r]/3;s+=`C${Ii(t[r][0]+e)},${Ii(t[r][1]+o[r]*e)},${Ii(t[r+1][0]-e)},${Ii(t[r+1][1]-o[r+1]*e)},${Ii(t[r+1][0])},${Ii(t[r+1][1])}`}return s}(t):"step"===e?function(t){let e=`M${Ii(t[0][0])},${Ii(t[0][1])}`;for(let i=1;i<t.length;i++)e+=`H${Ii(t[i][0])}V${Ii(t[i][1])}`;return e}(t):qi(t)}const Zi=1e3,Xi=200,Gi=["primary","amber","green","purple","red","#14b8a6","#ec4899","grey"],Yi=["history","statistics"];function Ji(t,e=Date.now()){const i=Pi(t.raw.period),n=t.raw.source??"history",o=function(t,e){if("month"===t.unit){const i=new Date(e);return i.setMonth(i.getMonth()-t.last),{start:i.getTime(),end:e}}return{start:e-t.last*Ni[t.unit],end:e}}(i,e),s=t.items.map(t=>({entity:t.entityId,attribute:t.config.attribute})),r=function(t,e){let i=Bi.get(t);return i||(i=new Fi(e),Bi.set(t,i)),i}(t.host,t.requestUpdate).get(t.hass,s,o,n),a=t.raw.curve??"smooth",l=t.items.map((t,e)=>{const i=t.config;let l=r.data.get(ji(s[e]))??[];const c=l[l.length-1];return"history"===n&&c&&null!==c.v&&c.t<o.end&&(l=[...l,{t:o.end,v:c.v}]),{index:e,entity:t,points:l,color:Et(i.color??Gi[e%Gi.length]),curve:i.curve??a,dash:!0===i.dash}});return{status:r.status,error:r.error,range:o,period:i,source:n,series:l}}function Ki(t){!function(t){Bi.get(t)?.pause()}(t)}const Qi=s`
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
`,tn=new WeakMap;function en(t){let e=tn.get(t.host);if(!e){const i={width:t.host.clientWidth||400};e=i,tn.set(t.host,i),"undefined"!=typeof ResizeObserver&&(i.observer=new ResizeObserver(e=>{const n=Math.round(e[e.length-1].contentRect.width);Math.round(n/70)!==Math.round(i.width/70)&&(i.width=n,t.requestUpdate())}),i.observer.observe(t.host))}return e.width}function nn(t){const e=hi(t.raw);return Math.max(0,en(t)-32-(e.y&&"outside"===e.labels?40:0))}const on=t=>Math.round(1e4*t)/100+"%";function sn({axes:t,ctx:e,content:i,label:n,defs:o=W,overlay:s=W,hover:r}){const{options:a}=t,l="outside"===a.labels,c=a.y&&t.value.ticks.length>0,d=a.x&&t.times.length>0,h=c?function(t,e){const{scales:i,value:n}=t;return n.ticks.map(t=>{const o=i.y(t)/Xi;return V`<span class="axis-label ${o<.08?"top":o>.92?"bottom":""}" style="top:${on(o)}"
      >${Ve(t,n.decimals,e.hass)}</span
    >`})}(t,e):[],u=c?V`<div class="y-axis">${h}</div>`:W,p=d?V`<div class="x-axis">${function(t,e){const{scales:i,range:n}=t,o=bi(ki(e.hass));return t.times.map(s=>{const r=i.x(s)/Zi;return V`<span class="axis-label ${r<.05?"start":r>.95?"end":""}" style="left:${on(r)}"
      >${Ci(s,t.unit,n.end-n.start,e.hass,o)}</span
    >`})}(t,e)}</div>`:W,m=c?V`<span class="axis-sizer" aria-hidden="true"
        >${t.value.ticks.map(i=>Ve(i,t.value.decimals,e.hass)).reduce((t,e)=>e.length>t.length?e:t,"")}</span
      >`:W;return V`<div class="plot-wrap axes-${a.labels} ${c?"has-y":""} ${d?"has-x":""}">
    ${l&&c?V`<div class="y-axis">${m}${h}</div>`:W}
    <div
      class="plot-area ${r?"hoverable":""}"
      @pointerdown=${r?.move}
      @pointermove=${r?.move}
      @pointerleave=${r?.leave}
      @pointercancel=${r?.leave}
    >
      ${function(t,e,i=W,n=W){return V`<svg
    class="plot"
    viewBox="0 0 ${Zi} ${Xi}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${e}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${Zi} height=${204}></rect>
      </clipPath>
      ${i}
    </defs>
    ${n}
    <g clip-path="url(#cd-draw-in)">${t}</g>
  </svg>`}(i,n,o,function(t){const{options:e,scales:i}=t;return I`<g class="grid">
    ${e.horizontal?t.value.ticks.map(t=>I`<line x1="0" x2=${Zi} y1=${i.y(t)} y2=${i.y(t)}></line>`):W}
    ${e.vertical?t.times.map(t=>I`<line x1=${i.x(t)} x2=${i.x(t)} y1="0" y2=${Xi}></line>`):W}
  </g>`}(t))} ${l?W:V`${u}${p}`} ${s}
    </div>
    ${l?p:W}
  </div>`}const rn=s`
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
`;function an(t,e){if(0===t.length)return-1;let i=0,n=t.length-1;for(;i<n;){const o=i+n>>1;t[o].t<e?i=o+1:n=o}return i>0&&e-t[i-1].t<=t[i].t-e?i-1:i}const ln=new WeakMap;function cn(t,e,i){const n=function(t){let e=ln.get(t);return e||(e={},ln.set(t,e)),e}(t.host),o=e=>{e!==n.t&&(n.t=e,t.requestUpdate())},s=()=>{void 0!==n.timer&&clearTimeout(n.timer),n.timer=void 0};return{move(t){s();const n=t.currentTarget.getBoundingClientRect(),r=n.width>0?Math.min(1,Math.max(0,(t.clientX-n.left)/n.width)):0;o(function(t,e){let i;for(const n of t){const t=an(n,e);if(t<0)continue;const o=n[t].t;(void 0===i||Math.abs(o-e)<Math.abs(i-e))&&(i=o)}return i}(i,e.start+r*(e.end-e.start)))},leave(t){s(),"touch"===t.pointerType||"pen"===t.pointerType?n.timer=setTimeout(()=>{n.timer=void 0,o(void 0)},3e3):o(void 0)}}}const dn=t=>Math.round(1e4*t)/100+"%";function hn(t,e,i,n,o){if(void 0===n)return W;const s=i.x(n)/Zi;if(!(s>=0&&s<=1))return W;const r=function(t,e){const i=t*e;return i+190<=e?"right":i>=190?"left":t>.5?"pin-left":"pin-right"}(s,o),a=e.map(t=>{const e=an(t.points,n);return{s:t,p:e<0?void 0:t.points[e]}});return V`<div class="hover-layer" aria-hidden="true">
    <div class="crosshair" style="left:${dn(s)}"></div>
    ${a.map(({s:t,p:e})=>{if(!e||null===e.v)return W;const n=i.y(e.v)/Xi;return n>=0&&n<=1?V`<span
        class="hover-dot"
        style="left:${dn(i.x(e.t)/Zi)};top:${dn(n)};background:${t.color}"
      ></span>`:W})}
    <div class="tooltip ${r}" style=${r.startsWith("pin")?"":`left:${dn(s)}`}>
      <div class="tooltip-time">${function(t,e){return Si(e?.locale?.language??"en",ki(e),{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit",hour12:Ai(e)}).format(t)}(n,t.hass)}</div>
      ${a.map(({s:e,p:i})=>V`<div class="tooltip-row">
            <span class="swatch" style="background:${e.color}"></span>
            <span class="tooltip-name">${e.entity.name}</span>
            <span class="tooltip-value">${function(t,e,i){return t&&null!==t.v?Ie(Ve(t.v,e.entity.decimals,i.hass),e.entity.unit):"—"}(i,e,t)}</span>
          </div>`)}
    </div>
  </div>`}const un=s`
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
`;function pn(t,e,i){return{select:{mode:"dropdown",options:i.map(i=>({value:i,label:ie(t,`editor_${e}_${i}`)}))}}}te("en",{editor_x_axis:"Time labels",editor_y_axis:"Value labels",editor_axis_labels:"Axis labels",editor_axis_labels_outside:"Beside the chart",editor_axis_labels_inside:"Over the chart",editor_grid_horizontal:"Lines across",editor_grid_vertical:"Lines down",editor_y_min:"Lowest value shown",editor_y_max:"Highest value shown",editor_tooltip:"Show values on hover or touch",editor_line_width:"Line width (px)",editor_dots:"Dot at each reading",editor_on_top:"Draw above the other lines"});const mn=[{name:"x_axis",path:["x_axis"],default:si},{name:"y_axis",path:["y_axis"],default:ri},{name:"axis_labels",path:["axis_labels"],default:ai},{name:"grid_horizontal",path:["gridlines","horizontal"],default:li},{name:"grid_vertical",path:["gridlines","vertical"],default:ci},{name:"y_min",path:["y_min"]},{name:"y_max",path:["y_max"]},{name:"tooltip",path:["tooltip"],default:!0}];function fn(t){return[{type:"grid",name:"",schema:[{name:"x_axis",selector:{boolean:{}}},{name:"y_axis",selector:{boolean:{}}},{name:"grid_horizontal",selector:{boolean:{}}},{name:"grid_vertical",selector:{boolean:{}}}]},{name:"axis_labels",selector:pn(t,"axis_labels",oi)},{type:"grid",name:"",schema:[{name:"y_min",selector:{number:{mode:"box",step:"any"}}},{name:"y_max",selector:{number:{mode:"box",step:"any"}}}]},{name:"tooltip",selector:{boolean:{}}}]}const gn=new Map;const _n=[{name:"period_last",path:["period","last"],default:24},{name:"period_unit",path:["period","unit"],default:"hour"},{name:"source",path:["source"],default:"history"},{name:"curve",path:["curve"],default:"smooth"},{name:"color_by",path:["color_by"],default:"series"},{name:"labels",path:["labels"],default:!1},{name:"line_width",path:["line_width"],default:2.5},{name:"dots",path:["dots"],default:!1},...mn];const yn=["series","bands"];function vn(t,e,i,n,o){const s=ae(t.entity.config,o),r=ii(t.points,500),a=function(t){const e=[];let i=[];for(const n of t)null===n.v?(i.length&&e.push(i),i=[]):i.push(n);return i.length&&e.push(i),e}(r).map(i=>Wi(i.map(t=>[e.x(t.t),e.y(t.v)]),t.curve)).join(""),l=s.dots?r.filter(t=>null!==t.v&&t.t!==n.start&&t.t!==n.end):[],c=l.length>0&&l.length<=200?I`<path
          class="dots"
          d=${h=l.map(t=>[e.x(t.t),e.y(t.v)]),h.map(([t,e])=>`M${Math.round(100*t)/100},${Math.round(100*e)/100}h0`).join("")}
          fill="none"
          stroke=${i}
          style="stroke-width:${d=s.width,Math.round(10*(d+3.5))/10}px"
        ></path>`:W;var d,h;return I`<g class="series" data-series=${t.index}>
    <path
      class="line ${t.dash?"dashed":""}"
      d=${a}
      fill="none"
      stroke=${i}
      style="stroke-width:${s.width}px"
    ></path>
    ${c}
  </g>`}function bn(t,e,i){return V`<div class="point-labels">
    ${t.series.flatMap(n=>{const o=n.points.filter(e=>null!==e.v&&e.t!==t.range.start&&e.t!==t.range.end);return o.length>40?[]:o.map(t=>V`<span
            class="point-label"
            style="left:${e.x(t.t)/Zi*100}%;top:${e.y(t.v)/Xi*100}%"
            >${Ve(t.v,n.entity.decimals,i.hass)}</span
          >`)})}
  </div>`}te("en",{editor_style_line:"Line",chart_loading:"Loading history…",chart_error:"Couldn't load history: {error}",chart_no_data:"No readings in this period.",chart_aria:"{style} chart of {names}"});const $n={layout:"chart",group:"history",height:240,styles:s`
    ${Qi}
    ${rn}
    ${un}
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
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,validate(t){if(function(t){if(Pi(t.period),void 0!==t.source&&!Yi.includes(t.source))throw new Error(`"source" must be one of: ${Yi.join(", ")}`);const e=[t.curve,...(t.entities??[]).map(t=>"object"==typeof t?t.curve:void 0)];for(const i of e)if(void 0!==i&&!Vi.includes(i))throw new Error(`"curve" must be one of: ${Vi.join(", ")}`)}(t),function(t){const e=t;for(const i of["x_axis","y_axis"])if(void 0!==e[i]&&"boolean"!=typeof e[i])throw new Error(`"${i}" must be true or false`);if(void 0!==e.axis_labels&&!oi.includes(e.axis_labels))throw new Error(`"axis_labels" must be one of: ${oi.join(", ")}`);if(void 0!==e.gridlines){const t=e.gridlines;if("object"!=typeof t||null===t||Array.isArray(t))throw new Error('"gridlines" must have "horizontal" and "vertical" (true or false)');for(const e of["horizontal","vertical"])if(void 0!==t[e]&&"boolean"!=typeof t[e])throw new Error(`"gridlines.${e}" must be true or false`)}for(const i of["y_min","y_max"])if(void 0!==e[i]&&!di(e[i]))throw new Error(`"${i}" must be a number`);if(di(e.y_min)&&di(e.y_max)&&e.y_min>=e.y_max)throw new Error('"y_min" must be below "y_max"')}(t),function(t){const e=t.tooltip;if(void 0!==e&&"boolean"!=typeof e)throw new Error('"tooltip" must be true or false')}(t),function(t){le(t.line_width,'"line_width"'),ce(t.dots,'"dots"');for(const e of t.entities??[])"object"==typeof e&&(le(e.line_width,`"line_width" of ${e.entity}`),ce(e.dots,`"dots" of ${e.entity}`),ce(e.on_top,`"on_top" of ${e.entity}`))}(t),void 0!==t.color_by&&!yn.includes(t.color_by))throw new Error(`"color_by" must be one of: ${yn.join(", ")}`)},editor:function(t){const e=function(t,e,i){const n=`${t}|${ee(e)}`;let o=gn.get(n);return o||(o=i(),gn.set(n,o)),o}("line",t.hass,()=>{return[...(e=t.hass,[{type:"grid",name:"",schema:[{name:"period_last",selector:{number:{min:1,mode:"box"}}},{name:"period_unit",selector:pn(e,"period_unit",Ei)}]},{name:"source",selector:pn(e,"source",Yi)}]),{type:"grid",name:"",schema:[{name:"curve",selector:pn(t.hass,"curve",Vi)},{name:"color_by",selector:pn(t.hass,"color_by",["series","bands"])}]},{type:"grid",name:"",schema:[{name:"line_width",selector:ye},{name:"dots",selector:{boolean:{}}}]},{name:"labels",selector:{boolean:{}}},...fn(t.hass)];var e});return function(t,e,i,n){return V`<ha-form
    data-section=${e}
    .hass=${t.hass}
    .data=${Ue(t.config,n)}
    .schema=${i}
    .computeLabel=${e=>ie(t.hass,`editor_${e.name}`)}
    @value-changed=${e=>{e.stopPropagation();const i=He(t.config,n,e.detail?.value??{});i!==t.config&&t.commit(i)}}
  ></ha-form>`}(t,"chart",e,_n)},disconnect(t){Ki(t),function(t){tn.get(t)?.observer?.disconnect(),tn.delete(t)}(t),function(t){const e=ln.get(t);void 0!==e?.timer&&clearTimeout(e.timer),ln.delete(t)}(t)},render(t){const e=Ji(t),i=function(t,e){const{show:i}=e.config;return i.name||i.value?V`<div class="series-header">
    ${t.series.map(t=>V`<div class="entity series-item" data-index=${t.index} tabindex="0" aria-label=${t.entity.label}>
          <span class="swatch" style="background:${t.color}"></span>
          ${i.name?V`<span class="series-name">${t.entity.name}</span>`:W}
          ${i.value?V`<span class="series-value">${t.entity.display}</span>`:W}
        </div>`)}
  </div>`:W}(e,t),n=function(t,e){return"loading"===t.status?V`<div class="chart-message">${ie(e.hass,"chart_loading")}</div>`:"error"===t.status?V`<div class="chart-message error">
      ${ie(e.hass,"chart_error",{error:t.error??""})}
    </div>`:t.series.every(t=>t.points.every(t=>null===t.v))?V`<div class="chart-message">${ie(e.hass,"chart_no_data")}</div>`:void 0}(e,t);if(n)return V`${i}${n}`;const o=function(t,e,i){const n=hi(t.raw),o=mi(i,n,4),s=Math.max(2,Math.min(8,Math.round(en(t)/70))),{unit:r,ticks:a}=wi(e,s,bi(ki(t.hass)));return{options:n,value:o,times:a,unit:r,range:e,scales:{x:ni([e.start,e.end],[0,Zi]),y:ni(o.domain,[Xi,0]),domain:o.domain}}}(t,e.range,function(t){let e=1/0,i=-1/0;for(const n of t)for(const t of n)for(const n of[t.v,t.min,t.max])"number"==typeof n&&(n<e&&(e=n),n>i&&(i=n));return e===1/0?void 0:[e,i]}(e.series.map(t=>t.points))),{scales:s}=o,r=!1!==t.raw.tooltip;const a="bands"===t.raw.color_by,l=a?I`${e.series.map(t=>function(t,e,i){const[n,o]=i.domain,s=t=>Math.min(1,Math.max(0,(t-n)/(o-n))),r=[];return e.forEach((t,i)=>{const n=Number.isFinite(t.from)?s(t.from):0,o=i+1<e.length?s(e[i+1].from):1,a=Et(t.color);r.push(I`<stop offset=${n} stop-color=${a}></stop><stop offset=${o} stop-color=${a}></stop>`)}),I`<linearGradient id=${t} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${Xi} y2="0">
    ${r}
  </linearGradient>`}(`cd-bands-${t.index}`,t.entity.bands,s))}`:W,c=(d=e.series,h=e=>ae(e.entity.config,t.raw).onTop,[...d.filter(t=>!h(t)),...d.filter(h)]);var d,h;const u=I`${c.map(i=>vn(i,s,a?`url(#cd-bands-${i.index})`:i.color,e.range,t.raw))}`,p=ie(t.hass,"chart_aria",{style:ie(t.hass,"editor_style_line"),names:e.series.map(t=>t.entity.name).join(", ")});return V`${i}
    ${sn({axes:o,ctx:t,content:u,label:p,defs:l,overlay:V`${!0===t.raw.labels?bn(e,s,t):W}
      ${r?hn(t,e.series,s,(m=t.host,ln.get(m)?.t),nn(t)):W}`,hover:r?cn(t,e.range,e.series.map(t=>t.points)):void 0})}`;var m}},xn=t=>(Math.abs(t)<.005?0:t).toFixed(2);function wn(t,e,i,n){const o=n*Math.PI/180;return[t+i*Math.sin(o),e-i*Math.cos(o)]}function kn(t,e,i,n,o){const s=String(Number(i.toFixed(2))),r=o-n,[a,l]=wn(t,e,i,n);if(r>=359.99){const[o,r]=wn(t,e,i,n+180);return`M${xn(a)} ${xn(l)} A${s} ${s} 0 1 1 ${xn(o)} ${xn(r)} A${s} ${s} 0 1 1 ${xn(a)} ${xn(l)}`}const[c,d]=wn(t,e,i,o),h=r>180?1:0;return`M${xn(a)} ${xn(l)} A${s} ${s} 0 ${h} 1 ${xn(c)} ${xn(d)}`}function An(t,e){const i=t/2;return[-i+e[0]*t,-i+e[1]*t]}function Mn(t){let e=0;for(const i of t)e+=i.codePointAt(0)>=11904?1/.58:1;return e}function Sn(t,e=76,i=12,n=8,o=11){const s=t.trim();let r=[s];if(Mn(s)>o){let t=Mn(s);for(let e=s.indexOf(" ");e>0;e=s.indexOf(" ",e+1)){const i=Math.max(Mn(s.slice(0,e)),Mn(s.slice(e+1)));i<t&&(t=i,r=[s.slice(0,e),s.slice(e+1)])}}const a=Math.max(...r.map(Mn));return{lines:r,size:Math.max(n,Math.min(i,Math.floor(e/(.58*Math.max(1,a)))))}}const Cn=65,En=66,On=t=>String(Math.round(1e3*t)/1e3+0);function Nn(t,e,i,n,o,s=11){const{lines:r,size:a}=Sn(t,e,i,n,s),l=o-1.2*(r.length-1)*a;return I`<text class="na" text-anchor="middle" style="font-size: ${a}px">${r.map((t,e)=>I`<tspan x=${Cn} y=${On(l+1.2*e*a)}>${t}</tspan>`)}</text>`}const Pn={layout:"tiles",group:"gauges",height:140,minColumnWidth:134,styles:s`
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
  `,render(t,{show:e,hass:i}){const n=function(t,e,i){const n=i-e,o=[];return n>0?(t.forEach((s,r)=>{const a=0===r?e:Math.max(s.from,e),l=Math.min(r+1<t.length?t[r+1].from:1/0,i);l>a&&o.push({from:(a-e)/n,to:(l-e)/n,color:s.color})}),o):o}(t.bands,t.min,t.max),o=n.map((t,e)=>{const i=180*t.from-90+(e>0?1:0),o=180*t.to-90-(e<n.length-1?1:0);return o>i?I`<path class="seg" d=${kn(Cn,En,50,i,o)} stroke=${Et(t.color)}></path>`:W}),s=Array.from({length:11},(t,e)=>{const[i,n]=wn(Cn,En,36,18*e-90),[o,s]=wn(Cn,En,40,18*e-90);return I`<line class="tickmark" x1=${i.toFixed(2)} y1=${n.toFixed(2)} x2=${o.toFixed(2)} y2=${s.toFixed(2)}></line>`});let r=W;if(e.target&&null!==t.targetPosition&&t.available){const e=180*t.targetPosition-90,[i,n]=wn(Cn,En,57,e),[o,s]=wn(Cn,En,64,e-3),[a,l]=wn(Cn,En,64,e+3);r=I`<polygon class="target-mark" points="${i.toFixed(2)},${n.toFixed(2)} ${o.toFixed(2)},${s.toFixed(2)} ${a.toFixed(2)},${l.toFixed(2)}"></polygon>`}const a=!e.value;return V`<div class="needle-gauge">
      <svg class=${a?"compact":""} viewBox="0 0 130 ${a?82:104}" aria-hidden="true">
        ${o} ${s} ${r}
        ${t.available?I`<g class="needle" style="transform: rotate(${On(180*t.position-90)}deg)"><path d=${c=Cn,d=En,h=42,u=3,`M${xn(c)} ${xn(d-h)} L${xn(c+u)} ${xn(d)} L${xn(c-u)} ${xn(d)} Z`}></path></g>`:W}
        <circle class="hub" cx=${Cn} cy=${En} r="6"></circle>
        <circle class="hub-dot" cx=${Cn} cy=${En} r="2.5"></circle>
        ${t.available?e.value?I`<text class="value" x=${Cn} y="94" text-anchor="middle">${t.display}</text>`:W:a?(l=t.display,Nn(l,58,11,7,55)):function(t){return Nn(t,126,12,8,94,18)}(t.display)}
      </svg>
      ${e.name||e.icon?V`<div class="name">
              ${e.icon?V`<ha-state-icon
                      class="icon"
                      .hass=${i}
                      .stateObj=${t.stateObj}
                      .icon=${Xe(t)}
                    ></ha-state-icon>`:W}
              ${e.name?V`<span class="name-text">${t.name}</span>`:W}
            </div>`:W}
    </div>`;var l,c,d,h,u}};let Ln=0;const Un=new WeakMap;const Hn=60,zn=60,jn=t=>String(Math.round(1e3*t)/1e3+0);function Tn(t){const[e,i]=An(t,[0,1]),n=kn(Hn,zn,46,e,i),o=t<360;return{layout:"tiles",group:"gauges",height:o?135:155,minColumnWidth:128,styles:s`
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
    `,render(e,{show:i,hass:s}){const r=function(t){let e=Un.get(t);return e||(e="cd-g-"+ ++Ln,Un.set(t,e)),e}(e.config),a=e.span[1]-e.span[0]<=0,l=`stroke-dasharray: ${jn(100*(e.span[1]-e.span[0]))} 100; stroke-dashoffset: ${jn(100*-e.span[0])}`,c=(d=e.band.color,Object.prototype.hasOwnProperty.call(Ct,d)?Ct[d].fallback:d);var d;const h=function(t){return!t.includes("var(")&&("undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color",t))}(c)?`url(#${r}) ${c}`:`url(#${r})`,u=i.icon?6:0,p=(m=e.valueText,Math.min(22,Math.floor(124/Math.max(1,m.length))));var m;let f=W;if(i.target&&null!==e.targetPosition&&e.available){const i=An(t,[e.targetPosition,e.targetPosition])[0],[n,o]=wn(Hn,zn,39.5,i),[s,r]=wn(Hn,zn,52.5,i);f=I`<line class="tick" x1=${n.toFixed(2)} y1=${o.toFixed(2)} x2=${s.toFixed(2)} y2=${r.toFixed(2)}></line>`}return V`<div class="radial ${o?"cropped":""}">
        <div class="dial">
          <svg viewBox="0 0 120 ${o?100:120}" aria-hidden="true">
            <defs>
              <linearGradient id=${r} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${Hn} cy=${zn} r="34"></circle>
            <path class="track" d=${n}></path>
            ${e.available?I`<path
                  class="value-arc ${a?"empty":""}"
                  d=${n}
                  pathLength="100"
                  style=${l}
                  stroke=${h}
                ></path>`:W}
            ${f}
            ${e.available?I`${i.value?I`<text
                        class="value"
                        x=${Hn}
                        y=${64+u}
                        text-anchor="middle"
                        style=${p<22?`font-size: ${p}px`:W}
                      >${e.valueText}</text>
                      <text class="unit" x=${Hn} y=${80+u} text-anchor="middle">${e.unit}</text>`:W}`:function(t){const{lines:e,size:i}=Sn(t),n=64-1.2*(e.length-1)*i/2;return I`<text class="na" text-anchor="middle" style="font-size: ${i}px">${e.map((t,e)=>I`<tspan x=${Hn} y=${jn(n+1.2*e*i)}>${t}</tspan>`)}</text>`}(e.display)}
          </svg>
          ${i.icon&&e.available?V`<ha-state-icon
                  class="icon ${i.value?"":"centre"}"
                  .hass=${s}
                  .stateObj=${e.stateObj}
                  .icon=${Xe(e)}
                ></ha-state-icon>`:W}
        </div>
        ${i.name?V`<span class="name">${e.name}</span>`:W}
      </div>`}}}const Fn=Tn(360),Dn=Tn(270);function Rn(t){const[e,i]=t;return Array.from({length:10},(t,n)=>{const o=(n+.5)/10;return o>e&&o<=i})}const Bn={layout:"rows",group:"bars",height:50,minColumnWidth:180,styles:s`
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
  `,render(t,{show:e,hass:i}){const n=t.available?Rn(t.span):Rn([0,0]),o=e.target&&t.available&&null!==t.targetPosition?Math.min(9,Math.max(0,Math.floor(10*t.targetPosition))):-1,s=!t.available;return V`<div class="seg">
      ${e.icon?V`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${Xe(t)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${e.name||s?V`<div class="name">
                ${e.name?V`<span class="label">${t.name}</span>`:W}
                ${s?V`<span class="status">${t.display}</span>`:W}
              </div>`:W}
        <div class="cells">
          ${n.map((t,e)=>V`<i class="cell ${t?"on":""} ${e===o?"mark":""}" style="--i:${e}"></i>`)}
        </div>
      </div>
      ${e.value?V`<span class="value">${t.available?t.display:""}</span>`:W}
    </div>`}},Vn={layout:"tiles",group:"bars",height:230,tilesPerRow:4,minColumnWidth:80,styles:s`
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
  `,render:(t,{show:e,hass:i})=>V`
      ${e.icon?V`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${Xe(t)}
            ></ha-state-icon>`:W}
      ${e.value||!t.available?V`<span class="value">${t.display}</span>`:W}
      <div class="tube">
        <div class="fill"></div>
        ${e.target&&null!==t.targetPosition&&t.available?V`<div class="target"></div>`:W}
      </div>
      ${e.name?V`<span class="name">${t.name}</span>`:W}
    `},In={layout:"rows",group:"bars",height:44,minColumnWidth:140,styles:s`
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
  `,render(t,{show:e,hass:i}){const n=e.value||!t.available;return V`
      ${e.icon?V`<ha-state-icon
              class="icon"
              .hass=${i}
              .stateObj=${t.stateObj}
              .icon=${Xe(t)}
            ></ha-state-icon>`:W}
      <div class="body">
        ${e.name||n?V`<div class="top">
                ${e.name?V`<span class="name">${t.name}</span>`:W}
                ${n?V`<span class="value">${t.display}</span>`:W}
              </div>`:W}
        <div class="track">
          <div class="fill"></div>
          ${e.target&&null!==t.targetPosition&&t.available?V`<div class="target"></div>`:W}
        </div>
      </div>
    `}},qn=["bars","gauges","history","totals","compare","distribution"];function Wn(t){return"chart"===t.layout}const Zn={bar:ei,thin:In,segmented:Bn,tank:Vn,ring:Fn,needle:Pn,arc:Dn,line:$n},Xn="important",Gn=" !"+Xn,Yn=mt(class extends ft{constructor(t){if(super(t),t.type!==dt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)null==e[n]&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in e){const t=e[n];if(null!=t){this.ft.add(n);const e="string"==typeof t&&t.endsWith(Gn);n.includes("-")||e?i.setProperty(n,e?t.slice(0,-11):t,e?Xn:""):i[n]=t}}return q}}),Jn=Object.keys(Lt),Kn=Object.keys(Ct),Qn="custom",to={text:{}},eo={entity:{domain:["sensor","input_number","number"]}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function io(t){return"string"==typeof t&&""!==t.trim()&&!Number.isFinite(Number(t))}const no={icon:{}};function oo(t){return void 0===t?"none":Jn.find(e=>Lt[e]&&Le(Lt[e],t))??"custom"}function so(t){return Kn.includes(t)}class ro extends lt{constructor(){super(),this._customOpen=new Set,this._entityOpen=new Set}willUpdate(t){t.has("bands")&&(this._customOpen.size&&(this._customOpen=new Set),this._entityOpen.size&&(this._entityOpen=new Set))}_entityValue(t){const e=this.hass?.states[t]?.state,i=void 0===e||""===e.trim()?NaN:Number(e);return Number.isFinite(i)?i:void 0}_t(t){return ie(this.hass,t)}_getSelectors(){const t=`${ee(this.hass)}|${this.unit??""}`;if(this._selectors?.key===t)return this._selectors;const e=Jn.map(t=>({value:t,label:this._t(`editor_preset_${t}`)})),i=t=>({select:{mode:"dropdown",options:t}});return this._selectors={key:t,preset:i(e),presetCustom:i([...e,{value:Qn,label:this._t("editor_preset_custom")}]),color:i([...Kn,Qn].map(t=>({value:t,label:this._t(`editor_color_${t}`)}))),from:{number:{mode:"box",step:"any",...this.unit?{unit_of_measurement:this.unit}:{}}}},this._selectors}_emit(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t&&t.length?t:void 0}}))}_presetChanged(t){t.stopPropagation();const e=t.detail?.value;if(!e||e===Qn||!Jn.includes(e))return;if(e===oo(this.bands))return;const i=Lt[e];this._emit(i?structuredClone(i):void 0)}_updateBand(t,e,i){const n=[...this.bands??[]],o={...n[t]};null==i||""===i?delete o[e]:o[e]=i,n[t]=o,this._emit(n)}_fromChanged(t,e){e.stopPropagation();const i=Number(e.detail?.value);""!==e.detail?.value&&null!=e.detail?.value&&Number.isFinite(i)&&this._updateBand(t,"from",i)}_fromEntityChanged(t,e){e.stopPropagation();const i=e.detail?.value;"string"==typeof i&&""!==i&&this._updateBand(t,"from",i)}_toggleFromMode(t){const e=this.bands?.[t]?.from,i=new Set(this._entityOpen);io(e)?this._updateBand(t,"from",this._entityValue(e)??0):i.delete(t)||i.add(t),this._entityOpen=i}_colorChanged(t,e){e.stopPropagation();const i=e.detail?.value,n=this.bands?.[t]?.color??"primary";if(!i)return;const o=new Set(this._customOpen);i!==Qn?(o.delete(t),this._customOpen=o,i!==n&&this._updateBand(t,"color",i)):so(n)&&(this._customOpen=o.add(t))}_customColorChanged(t,e){e.stopPropagation();const i="string"==typeof e.detail?.value?e.detail.value.trim():"";if(!i)return;const n=new Set(this._customOpen);n.delete(t),this._customOpen=n,this._updateBand(t,"color",i)}_iconChanged(t,e){e.stopPropagation(),this._updateBand(t,"icon",e.detail?.value)}_labelChanged(t,e){e.stopPropagation(),this._updateBand(t,"label",e.detail?.value)}_removeBand(t){const e=[...this.bands??[]];e.splice(t,1),this._emit(e)}_addBand(){const t=[...this.bands??[]],e=t[t.length-1]?.from,i="number"==typeof e?e:io(e)?this._entityValue(e)??NaN:"string"==typeof e&&""!==e.trim()?Number(e):NaN;t.push({from:Number.isFinite(i)?i+10:0,color:"primary"}),this._emit(t)}_renderBand(t,e,i){const n=!so(t.color)||this._customOpen.has(e),o=io(t.from)?t.from:void 0,s=void 0!==o||this._entityOpen.has(e);return V`<div class="band">
      <span class="swatch" style=${Yn({"--swatch":Et(t.color)})}></span>
      <ha-selector
        .required=${!1}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t("editor_band_from")}
        .selector=${i.from}
        .value=${void 0!==o?this._entityValue(o):t.from}
        .disabled=${s}
        @value-changed=${t=>this._fromChanged(e,t)}
      ></ha-selector>
      <ha-selector
        .required=${!0}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t("editor_band_color")}
        .selector=${i.color}
        .value=${n?Qn:t.color}
        @value-changed=${t=>this._colorChanged(e,t)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t("editor_band_label")}
        .selector=${to}
        .value=${t.label??""}
        @value-changed=${t=>this._labelChanged(e,t)}
      ></ha-selector>
      <ha-selector
        .required=${!1}
        data-role="icon"
        .hass=${this.hass}
        .label=${this._t("editor_band_icon")}
        .selector=${no}
        .value=${t.icon??""}
        @value-changed=${t=>this._iconChanged(e,t)}
      ></ha-selector>
      <ha-icon-button
        class="from-mode"
        .path=${s?"M4,17V9H2V7H6V17H4M22,15C22,16.11 21.1,17 20,17H16V15H20V13H18V11H20V9H16V7H20A2,2 0 0,1 22,9V10.5A1.5,1.5 0 0,1 20.5,12A1.5,1.5 0 0,1 22,13.5V15M14,15V17H8V13C8,11.89 8.9,11 10,11H12V9H8V7H12A2,2 0 0,1 14,9V11C14,12.11 13.1,13 12,13H10V15H14Z":"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"}
        .label=${this._t(s?"editor_band_from_number":"editor_band_from_entity")}
        aria-pressed=${s?"true":"false"}
        @click=${()=>this._toggleFromMode(e)}
      ></ha-icon-button>
      <ha-icon-button
        class="remove"
        .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
        .label=${this._t("editor_remove_band")}
        @click=${()=>this._removeBand(e)}
      ></ha-icon-button>
      ${s?V`<ha-selector
              .required=${!1}
              class="from-entity"
              data-role="from-entity"
              .hass=${this.hass}
              .label=${this._t("editor_band_from_entity_label")}
              .selector=${eo}
              .value=${o??""}
              @value-changed=${t=>this._fromEntityChanged(e,t)}
            ></ha-selector>`:W}
      ${n?V`<ha-selector
              .required=${!1}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t("editor_band_custom_color")}
              .selector=${to}
              .value=${so(t.color)?Et(t.color):t.color}
              @value-changed=${t=>this._customColorChanged(e,t)}
            ></ha-selector>`:W}
    </div>`}render(){const t=this._getSelectors(),e=oo(this.bands);return V`<ha-selector
        .required=${!0}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t("editor_preset")}
        .selector=${e===Qn?t.presetCustom:t.preset}
        .value=${e}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands??[]).map((e,i)=>this._renderBand(e,i,t))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t("editor_add_band")}</button>`}}ro.properties={hass:{attribute:!1},bands:{attribute:!1},unit:{attribute:!1},_customOpen:{state:!0},_entityOpen:{state:!0}},ro.styles=s`
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
  `,customElements.get("cd-bands-editor")||customElements.define("cd-bands-editor",ro);const ao={number:{mode:"box",step:"any"}},lo={entity:{domain:["sensor","input_number","number"]}};function co(t){return null==t||""===t?"default":"number"==typeof t||""!==t.trim()&&Number.isFinite(Number(t))?"number":"entity"}class ho extends lt{willUpdate(t){t.has("value")&&"default"!==co(this.value)&&(this._mode=void 0)}_modeSelectorFor(){const t=(t,e)=>ie(this.hass,t,e),e=[{value:"default",label:t("editor_limit_default",{value:this.defaultLabel??""})},{value:"number",label:t("editor_limit_number")},{value:"entity",label:t("editor_limit_entity")}],i=e.map(t=>t.label).join("|");return this._modeSelector?.key!==i&&(this._modeSelector={key:i,selector:{select:{mode:"dropdown",options:e}}}),this._modeSelector.selector}get _currentMode(){return this._mode??co(this.value)}_emit(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t}}))}_modeChanged(t){t.stopPropagation();const e=t.detail?.value;e&&e!==this._currentMode&&(this._mode=e,void 0!==this.value&&this._emit(void 0))}_numberChanged(t){t.stopPropagation();const e=t.detail?.value,i="number"==typeof e?e:""===e||null==e?NaN:Number(e);this._mode="number",this._emit(Number.isFinite(i)?i:void 0)}_entityChanged(t){t.stopPropagation();const e=t.detail?.value;this._mode="entity",this._emit("string"==typeof e&&""!==e?e:void 0)}render(){const t=t=>ie(this.hass,t),e=this._currentMode;return V`<ha-selector
        .required=${!0}
        data-role="mode"
        .hass=${this.hass}
        .label=${this.label}
        .selector=${this._modeSelectorFor()}
        .value=${e}
        @value-changed=${this._modeChanged}
      ></ha-selector>
      ${"number"===e?V`<ha-selector
              .required=${!1}
              data-role="number"
              .hass=${this.hass}
              .label=${t("editor_limit_number")}
              .selector=${ao}
              .value=${void 0===this.value?void 0:Number(this.value)}
              @value-changed=${this._numberChanged}
            ></ha-selector>`:"entity"===e?V`<ha-selector
                .required=${!1}
                data-role="entity"
                .hass=${this.hass}
                .label=${t("editor_limit_entity")}
                .selector=${lo}
                .value=${this.value}
                @value-changed=${this._entityChanged}
              ></ha-selector>`:W}`}}ho.properties={hass:{attribute:!1},label:{attribute:!1},value:{attribute:!1},defaultLabel:{attribute:!1},_mode:{state:!0}},ho.styles=s`
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 8px;
      align-items: start;
    }
  `,customElements.get("cd-limit-field")||customElements.define("cd-limit-field",ho);const uo=["min","max","target"];function po(t,e,i){const n=e&&!i?t?.states[e]?.attributes?.unit_of_measurement:void 0;return"string"==typeof n&&n?n:void 0}class mo extends lt{constructor(){super(),this._computeLabel=t=>this._t(`editor_${t.name}`),this._expanded=new Set}_t(t,e){return ie(this.hass,t,e)}get _asConfig(){return{type:"",entities:this.entities??[]}}_emit(t){t.entities!==this.entities&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t.entities??[]}}))}_set(t,e,i){this._emit(function(t,e,i,n){if("entity"===i&&(ne(n)||"string"!=typeof n))return t;const o=[...t.entities??[]],s=o[e];if(void 0===s)return t;const r="string"==typeof s?{entity:s}:{...s};ne(n)?delete r[i]:r[i]=n;const a=Object.keys(r);return o[e]=1===a.length&&"entity"===a[0]&&"string"==typeof r.entity?r.entity:r,{...t,entities:o}}(this._asConfig,t,e,i))}_move(t,e){const i=new Set;for(const n of this._expanded)i.add(n===t?e:n===e?t:n);this._expanded=i,this._emit(function(t,e,i){const n=[...t.entities??[]];if(e<0||e>=n.length||e===i)return t;const[o]=n.splice(e,1);return n.splice(Math.max(0,Math.min(i,n.length)),0,o),{...t,entities:n}}(this._asConfig,t,e))}_remove(t){const e=new Set;for(const i of this._expanded)i!==t&&e.add(i>t?i-1:i);this._expanded=e,this._emit(function(t,e){const i=[...t.entities??[]];return e<0||e>=i.length?t:(i.splice(e,1),{...t,entities:i})}(this._asConfig,t))}_toggle(t){const e=new Set(this._expanded);e.delete(t)||e.add(t),this._expanded=e}_add(t){t.stopPropagation();const e=t.detail?.value;"string"==typeof e&&""!==e&&(t.target.value="",this._emit(function(t,e){return{...t,entities:[...t.entities??[],e]}}(this._asConfig,e)))}_formChanged(t,e,i){i.stopPropagation();const n=this.entities?.[t];if(void 0===n)return;const o="string"==typeof n?{entity:n}:n,s=He(o,e,i.detail?.value??{});if(s===o)return;const r=[...this.entities??[]],a=Object.keys(s);r[t]=1===a.length&&"entity"===a[0]?s.entity:s,this._emit({type:"",entities:r})}_rowLabel(t){const e=this.hass?.states[t];return e?{text:e.attributes.friendly_name||t,missing:!1}:this.hass?{text:this._t("editor_not_found",{entity:t}),missing:!0}:{text:t,missing:!1}}_form(t,e,i,n,o){return V`<ha-form
      data-section=${t}
      .hass=${this.hass}
      .data=${Ue(i,o)}
      .schema=${n}
      .computeLabel=${this._computeLabel}
      @value-changed=${t=>this._formChanged(e,o,t)}
    ></ha-form>`}_renderOverrides(t,e){const i=t=>e=>{e.stopPropagation(),t(e.detail?.value)};return V`<div class="overrides">
      ${this._form("entity-attribute",e,t,function(t){let e=ke.get(t);return e||(e=[{name:"attribute",selector:{attribute:{entity_id:t}}}],ke.set(t,e)),e}(t.entity),ge)}
      ${this._form("entity-text",e,t,we,fe)}
      ${this.chart?this._form("entity-series",e,t,function(t){const e=ee(t);if(Ae?.language!==e){const i=e=>ie(t,e);Ae={language:e,schema:[{type:"grid",name:"",schema:[{name:"series_color",selector:{text:{}}},{name:"curve",selector:{select:{mode:"dropdown",options:["smooth","straight","step"].map(t=>({value:t,label:i(`editor_curve_${t}`)}))}}}]},{type:"grid",name:"",schema:[{name:"line_width",selector:ye},{name:"dash",selector:{boolean:{}}},{name:"dots",selector:{boolean:{}}},{name:"on_top",selector:{boolean:{}}}]}]}}return Ae.schema}(this.hass),function(t){let e=ve.get(t);return e||(e=[..._e,{name:"dots",path:["dots"],default:t}],ve.set(t,e)),e}(!0===this.dots)):W}
      <ha-icon-picker
        .hass=${this.hass}
        .label=${this._t("editor_icon")}
        .value=${t.icon??""}
        @value-changed=${i(t=>this._set(e,"icon",t))}
      ></ha-icon-picker>
      ${uo.map(n=>V`<cd-limit-field
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
        .unit=${t.unit??this.unit??po(this.hass,t.entity,t.attribute)}
        @value-changed=${i(t=>this._set(e,"severity",t))}
      ></cd-bands-editor>
      ${this._form("entity-actions",e,t,xe,be)}
    </div>`}_renderRow(t,e,i){const n=function(t){return"string"==typeof t?t:t.entity}(t),o="string"==typeof t?{entity:t}:t,s=this._rowLabel(n),r=this._expanded.has(e);return V`<div class="entity">
      <span class="label ${s.missing?"missing":""}">${s.text}</span>
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
          .label=${this._t(r?"editor_hide_options":"editor_show_options")}
          aria-expanded=${r?"true":"false"}
          @click=${()=>this._toggle(e)}
        ></ha-icon-button>
      </div>
      ${r?this._renderOverrides(o,e):W}
    </div>`}render(){const t=this.entities??[];return V`${t.map((e,i)=>this._renderRow(e,i,t.length))}
      <ha-entity-picker
        class="add"
        .hass=${this.hass}
        .label=${this._t("editor_add_entity")}
        .value=${""}
        allow-custom-entity
        @value-changed=${this._add}
      ></ha-entity-picker>`}}mo.properties={hass:{attribute:!1},entities:{attribute:!1},unit:{attribute:!1},chart:{attribute:!1},dots:{attribute:!1},_expanded:{state:!0}},mo.styles=s`
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
  `,customElements.get("cd-entities-editor")||customElements.define("cd-entities-editor",mo);class fo extends lt{constructor(){super(...arguments),this._label=t=>ie(this.hass,t),this._computeLabel=t=>ie(this.hass,`editor_${t.name}`),this._computeRuleLabel=t=>ie(this.hass,`editor_rule_${t.name.slice(t.name.indexOf("_")+1)}`)}setConfig(t){this._config=t}connectedCallback(){super.connectedCallback(),async function(){if(!customElements.get("ha-entity-picker")&&"function"==typeof window.loadCardHelpers)try{const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]}),i=e?.constructor;await(i?.getConfigElement?.())}catch{}}()}_commit(t){this._config=t,function(t,e){t.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:e}}))}(this,t)}_formChanged(t,e){if(e.stopPropagation(),!this._config)return;const i=e.detail?.value??{};this._commit(He(this._config,t,i))}_form(t,e,i){return V`<ha-form
      data-section=${t}
      .hass=${this.hass}
      .data=${Ue(this._config,i)}
      .schema=${e}
      .computeLabel=${this._computeLabel}
      @value-changed=${t=>this._formChanged(i,t)}
    ></ha-form>`}_panel(t,e){return V`<ha-expansion-panel .header=${this._label(`editor_section_${t}`)} outlined>
      <div class="panel section-${t}">${e}</div>
    </ha-expansion-panel>`}_subChanged(t,e){e.stopPropagation(),this._config&&this._commit(re(this._config,t,e.detail?.value))}renderEntities(){return V`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities??[]}
        .unit=${this._config?.unit}
        .dots=${!0===this._config?.dots}
        .chart=${Wn(Zn[this._config?.style??"bar"]??Zn.bar)}
        @value-changed=${t=>this._subChanged(["entities"],t)}
      ></cd-entities-editor>
      ${this._ruleForm("include")} ${this._ruleForm("exclude")}`}_ruleData(t){const e=this._config?.[t],i={};if(!e||"object"!=typeof e)return i;for(const[n,o]of Object.entries(e))i[`${t}_${n}`]=Array.isArray(o)?o:[o];return i}_ruleChanged(t,e){if(e.stopPropagation(),!this._config)return;const i=e.detail?.value??{},n=this._ruleData(t);let o=this._config;for(const s of Se[t]){const e=`${t}_${s}`,r=Array.isArray(i[e])?i[e]:[];Le(n[e]??[],r)||(o=re(o,[t,s],r.length?r:void 0))}o!==this._config&&this._commit(o)}_ruleForm(t){return V`<div class="rules-heading">${this._label(`editor_${t}_heading`)}</div>
      <p class="rules-help">${this._label(`editor_${t}_help`)}</p>
      <ha-form
        data-section=${t}
        .hass=${this.hass}
        .data=${this._ruleData(t)}
        .schema=${Oe(t,this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${e=>this._ruleChanged(t,e)}
      ></ha-form>`}renderLimits(){return[["min","0"],["max","100"],["target",this._label("editor_none")]].map(([t,e])=>V`<cd-limit-field
          data-limit=${t}
          .hass=${this.hass}
          .label=${this._label(`editor_${t}`)}
          .value=${this._config?.[t]}
          .defaultLabel=${e}
          @value-changed=${e=>this._subChanged([t],e)}
        ></cd-limit-field>`)}renderColours(){return V`${this._toggles(ue)}<cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config?.severity}
        .unit=${this._config?.unit??this._firstEntityUnit()}
        @value-changed=${t=>this._subChanged(["severity"],t)}
      ></cd-bands-editor>`}_firstEntityUnit(){const t=this._config?.entities?.[0];return"string"==typeof t?po(this.hass,t):t?.unit??po(this.hass,t?.entity,t?.attribute)}_selectStyle(t){this._config&&this._commit(re(this._config,["style"],"bar"===t?void 0:t))}renderStyle(){const t=this._config?.style??"bar";return V`${qn.map(e=>{const i=Bt.filter(t=>Zn[t].group===e);return i.length?V`<div class="style-group">${this._label(`editor_group_${e}`)}</div>
        <div class="styles" data-group=${e}>
          ${i.map(e=>{const i=Zn[e],n=Wn(i)?V`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                  ${i.thumbnail()}
                </svg>`:Be(e);return V`<button
              type="button"
              class="style"
              data-style=${e}
              aria-pressed=${t===e?"true":"false"}
              @click=${()=>this._selectStyle(e)}
            >
              ${n}<span>${this._label(`editor_style_${e}`)}</span>
            </button>`})}
        </div>`:W})}`}renderChart(){const t=Zn[this._config?.style??"bar"];return t&&Wn(t)&&t.editor&&this._config?this._panel("chart",t.editor({hass:this.hass,config:this._config,commit:t=>this._commit(t)})):W}renderDisplay(){return V`${this._toggles(he)}
    ${this._form("display",function(t){const e=ee(t);return Ne?.language!==e&&(Ne={language:e,schema:Me(t)}),Ne.schema}(this.hass),pe)}`}_toggles(t){const e=Ue(this._config,t);return V`<div class="toggles">
      ${t.map(({name:i})=>{const n=this._label(`editor_${i}`),o=!0===e[i];return V`<div class="toggle">
          <span @click=${()=>this._toggle(t,i,!o)}>${n}</span
          ><ha-switch
            data-name=${i}
            aria-label=${n}
            .checked=${Kt(o)}
            @change=${e=>this._toggle(t,i,e.target.checked)}
          ></ha-switch>
        </div>`})}
    </div>`}_toggle(t,e,i){if(!this._config)return;const n=Ue(this._config,t);this._commit(He(this._config,t,{...n,[e]:i}))}renderActions(){return this._form("actions",xe,me)}render(){return this._config?V`<div class="title">${this._form("title",$e,de)}</div>
      ${this._panel("entities",this.renderEntities())} ${this._panel("style",this.renderStyle())}
      ${this.renderChart()} ${this._panel("limits",this.renderLimits())}
      ${this._panel("colours",this.renderColours())} ${this._panel("display",this.renderDisplay())}
      ${this._panel("actions",this.renderActions())}`:W}}fo.properties={hass:{attribute:!1},_config:{state:!0}},fo.styles=s`
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
  `,customElements.get("chartdeck-card-editor")||customElements.define("chartdeck-card-editor",fo);const go=s`
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
`;console.info("%c CHARTDECK %c 1.1.0 ","color:#fff;background:#3b8bff;font-weight:700","color:#3b8bff");const _o={rows:16,tiles:8};function yo(t){const e=_o[t.layout];return Math.max(1,Math.floor((368+e)/((t.minColumnWidth??0)+e)))}class vo extends lt{constructor(){super(...arguments),this._watched=new Set,this._matched=[],this._items=[],this._detachers=new Map,this._readyScheduled=!1,this._readyAt=-1/0}static getStubConfig(t){const e=Object.values(t?.states??{}).filter(t=>t.entity_id.startsWith("sensor.")&&""!==t.state.trim()&&Number.isFinite(Number(t.state))),i=t=>"battery"===t.attributes?.device_class;return e.sort((t,e)=>i(t)!==i(e)?i(t)?-1:1:t.entity_id<e.entity_id?-1:t.entity_id>e.entity_id?1:0),{type:"custom:chartdeck-card",style:"bar",entities:e.slice(0,3).map(t=>t.entity_id)}}static getConfigElement(){return document.createElement("chartdeck-card-editor")}setConfig(t){const e=function(t){if(!t||"object"!=typeof t)throw new Error("Invalid configuration");const e=t.style??"bar";if(!Bt.includes(e))throw new Error(`Unknown style "${String(e)}". Use one of: ${Bt.join(", ")}`);const i=t.sort??"none";if(!It.includes(i))throw new Error(`Unknown sort "${String(i)}". Use one of: ${It.join(", ")}`);if(void 0!==t.entities&&!Array.isArray(t.entities))throw new Error('"entities" must be a list');const n=(t.entities??[]).map((e,i)=>Jt(e,t,i)),o={name:!0,value:!0,icon:!0,target:!0,legend:!1,...t.show},s=Zt(t.columns,"columns",1),r=Zt(t.limit,"limit",1),a=Ht(t.include,"include"),l=Ht(t.exclude,"exclude");a&&Jt("sensor.chartdeck_check",t,0);const c={style:e,entities:n,hideUnavailable:!0===t.hide_unavailable,cardOptions:t,show:o,sort:i,animate:!1!==t.animate,colorIcon:!0===t.color_icon,legendBands:Xt(t.severity)??Vt};return void 0!==t.title&&(c.title=t.title),void 0!==s&&(c.columns=s),void 0!==r&&(c.limit=r),a&&(c.include=a),l&&(c.exclude=l),c}(t),i=Zn[e.style];if(Wn(i)&&i.validate?.(t),this._watched=function(t){const e=new Set;for(const i of t.entities){e.add(i.entity);for(const t of[i.min,i.max,i.target,...i.severity.map(t=>t.from)])"string"==typeof t&&""!==t&&e.add(t)}for(const i of t.legendBands)"string"==typeof i.from&&e.add(i.from);return e}(e),Wn(i))for(const n of i.watch?.(t)??[])this._watched.add(n);this._config&&this._config.style!==e.style&&this._disconnectStyle(),this._config=e}get _styleName(){return this._config?.style??"bar"}get _style(){return Zn[this._styleName]}_legend(t){const e=this._config;if(!e?.show.legend||0===this._count())return[];const i=t?.decimals??1;return function(t,e,i){const n=i?` ${i}`:"",o=[];return t.forEach((i,s)=>{const r=t[s+1],a=Et(i.color);i.label?o.push({color:a,text:i.label}):Number.isFinite(i.from)?r?o.push({color:a,text:`${e(i.from)}–${e(r.from)}${n}`}):o.push({color:a,text:`${e(i.from)}${n}+`}):r&&o.push({color:a,text:`< ${e(r.from)}${n}`})}),o}(Ke(e.legendBands,this.hass),t=>Ve(t,i,this.hass),t?.unit??"")}_count(){return this.hasUpdated&&this.hass?this._items.length:this._config?.entities.length??0}_contentHeight(){const t=this._config;if(!t)return 0;const e=this._style,i=16+(t.title?73:0)+(this._legend().length>0?32:0);if(Wn(e))return i+e.height;const n=this._count(),o=void 0!==t.columns?Math.min(t.columns,yo(e)):"rows"===e.layout?1:Math.min(n,e.tilesPerRow??3,yo(e));return i+(0===n?0:Math.ceil(n/Math.max(1,o)))*e.height}getCardSize(){return Math.max(1,Math.ceil(this._contentHeight()/50))}getGridOptions(){const t=this._count();if(Wn(this._style))return{columns:12,rows:"auto",min_columns:6,min_rows:2};const e="rows"===this._style.layout;return{columns:e||t<=1?6:12,rows:"auto",min_columns:e?6:3,min_rows:1}}shouldUpdate(t){if(0===t.size)return!0;if([...t.keys()].some(t=>"hass"!==t))return!0;if(!t.has("hass"))return!1;const e=t.get("hass"),i=this.hass;if(!e||!i)return!0;for(const n of this._watched)if(e.states[n]!==i.states[n])return!0;if(this._config?.include){const t=ti(this._config,i);if(t.length!==this._matched.length||t.some((t,e)=>t!==this._matched[e]))return!0;for(const n of t)if(e.states[n]!==i.states[n])return!0}return e.themes?.darkMode!==i.themes?.darkMode||e.themes?.theme!==i.themes?.theme||e.locale!==i.locale}willUpdate(){const t=!1===this._config?.animate||"function"==typeof window.matchMedia&&!!window.matchMedia("(prefers-reduced-motion: reduce)")?.matches;this.toggleAttribute("static",t),(t||this.preview)&&this.setAttribute("ready","")}_scheduleReady(){if(this._readyScheduled||this.hasAttribute("ready")||0===this._items.length)return;this._readyScheduled=!0;const t=()=>{this.shadowRoot?.querySelector(".entity")?.getBoundingClientRect(),this.setAttribute("ready",""),this._readyAt=performance.now()};"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t,16)}updated(){this._scheduleReady(),this._syncActions()}connectedCallback(){if(super.connectedCallback(),!this.hasUpdated)return;const t=this._config?Zn[this._config.style]:void 0;t&&Wn(t)&&this.requestUpdate(),this._syncActions(),this.hasAttribute("ready")&&!this.hasAttribute("static")&&performance.now()-this._readyAt<1e3&&(this.removeAttribute("ready"),this._readyScheduled=!1,this._scheduleReady())}_disconnectStyle(){const t=this._config?Zn[this._config.style]:void 0;t&&Wn(t)&&t.disconnect?.(this)}disconnectedCallback(){super.disconnectedCallback(),this._disconnectStyle();for(const t of this._detachers.values())t();this._detachers.clear()}_syncActions(){const t=this.shadowRoot;if(!t)return;const e=new Set(t.querySelectorAll(".entity"));for(const[i,n]of this._detachers)e.has(i)||(n(),this._detachers.delete(i));for(const i of e)this._detachers.has(i)||this._detachers.set(i,St(i,()=>this._items[Number(i.dataset.index)].config))}_renderEntity(t,e,i,n){const o=this._config,s=(r=t.config,Mt(r.tap_action)||Mt(r.hold_action)||Mt(r.double_tap_action));var r;const a=function(t){const e=Et(t);return{start:e,end:`color-mix(in srgb, ${e} 80%, #fff)`}}(t.band.color),l=`--start:${t.span[0]};--end:${t.span[1]};--pos:${t.position};--target:${t.targetPosition??0};--c-start:${a.start};--c-end:${a.end}`;return V`<div
      class="entity ${s?"interactive":""} ${t.available?"":"unavailable"} ${o.colorIcon&&t.available?"icon-band":""}"
      data-index=${e}
      role="meter"
      aria-valuenow=${t.available?String(t.value):W}
      aria-valuemin=${t.min}
      aria-valuemax=${t.max}
      aria-label=${t.label}
      tabindex=${s?0:W}
      style=${l}
    >
      ${i.render(t,{show:o.show,hass:n})}
    </div>`}render(){const t=this._config;if(!t)return W;const e=this.hass,i=this._style;let n,o,s;const r=e?function(t,e){const i=ti(t,e).map((e,i)=>Jt(e,t.cardOptions,i)),n=[...t.entities,...i].map(t=>Qe(t,e));return t.hideUnavailable?n.filter(t=>t.available):n}(t,e):[];if(this._matched=e?ti(t,e):[],0!==t.entities.length||t.include)if(e)if(0===r.length)this._items=[],n=V`<div class="hint">${ie(e,t.include?"no_matches":"none_available")}</div>`;else{o=r[0];const a=new Map,l=new Set;r.forEach((t,e)=>{a.set(t,l.has(t.entityId)?`${t.entityId}#${e}`:t.entityId),l.add(t.entityId)}),this._items=function(t,e){if("none"===e)return[...t];const i="ascending"===e?1:-1;return t.map((t,e)=>({item:t,index:e})).sort((t,e)=>{if(t.item.available!==e.item.available)return t.item.available?-1:1;if(t.item.available){const n=(t.item.position-e.item.position)*i;if(0!==n)return n}return t.index-e.index}).map(t=>t.item)}(r,t.sort).slice(0,t.limit);const c=this._items.filter(t=>t.available).map(t=>t.display.length);if(s=c.length?Math.max(...c):void 0,Wn(i))n=V`<div class="chart">
          ${i.render({items:this._items,config:t,raw:t.cardOptions,hass:e,requestUpdate:()=>this.requestUpdate(),host:this})}
        </div>`;else{const o="tiles"===i.layout,s=function(t,e){if(void 0===e)return"rows"===t.layout?"grid-template-columns: repeat(1, minmax(0, 1fr))":"";const i=(e-1)*_o[t.layout];return`grid-template-columns: repeat(auto-fill, minmax(max(min(${t.minColumnWidth??0}px, 100%), calc((100% - ${i}px) / ${e} - 0.5px)), 1fr))`}(i,t.columns);n=V`<div
          class="entities layout-${i.layout} ${o&&void 0!==t.columns?"has-columns":""}"
          style=${s}
        >
          ${At(this._items,t=>a.get(t),(t,n)=>this._renderEntity(t,n,i,e))}
        </div>`}}else this._items=[],n=W;else this._items=[],n=V`<div class="hint">${ie(e,"no_entities")}</div>`;const a=this._legend(o);return V`<ha-card .header=${t.title}>
      <div
        class="content style-${this._styleName}"
        style=${void 0===s?W:`--cd-value-ch: ${s}`}
      >
        ${n}
      </div>
      ${a.length?V`<div class="legend">
              ${a.map(t=>V`<span class="legend-item"
                    ><span class="dot" style="background:${t.color}"></span>${t.text}</span
                  >`)}
            </div>`:W}
    </ha-card>`}}vo.properties={hass:{attribute:!1},preview:{type:Boolean},_config:{state:!0}},vo.styles=[go,...Object.values(Zn).map(t=>t.styles)],customElements.get("chartdeck-card")||customElements.define("chartdeck-card",vo);const bo=window.customCards??=[];bo.some(t=>"chartdeck-card"===t.type)||bo.push({type:"chartdeck-card",name:"Chartdeck",description:"Bars, gauges and charts, set up entirely from the visual editor.",preview:!0,documentationURL:"https://tempus2016.github.io/chartdeck/"});export{vo as ChartdeckCard};
