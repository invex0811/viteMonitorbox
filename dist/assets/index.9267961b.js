var DA=Object.defineProperty,OA=Object.defineProperties;var kA=Object.getOwnPropertyDescriptors;var gu=Object.getOwnPropertySymbols;var N_=Object.prototype.hasOwnProperty,D_=Object.prototype.propertyIsEnumerable;var _f=(n,e,t)=>e in n?DA(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,U=(n,e)=>{for(var t in e||(e={}))N_.call(e,t)&&_f(n,t,e[t]);if(gu)for(var t of gu(e))D_.call(e,t)&&_f(n,t,e[t]);return n},Qe=(n,e)=>OA(n,kA(e));var Vi=(n,e)=>{var t={};for(var i in n)N_.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&gu)for(var i of gu(n))e.indexOf(i)<0&&D_.call(n,i)&&(t[i]=n[i]);return t};var De=(n,e,t)=>(_f(n,typeof e!="symbol"?e+"":e,t),t);const FA=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};FA();function ag(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const BA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",VA=ag(BA);function hw(n){return!!n||n===""}function lg(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Wt(i)?HA(i):lg(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Wt(n))return n;if(Ht(n))return n}}const UA=/;(?![^(]*\))/g,zA=/:(.+)/;function HA(n){const e={};return n.split(UA).forEach(t=>{if(t){const i=t.split(zA);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function hh(n){let e="";if(Wt(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=hh(n[t]);i&&(e+=i+" ")}else if(Ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function WA(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=no(n[i],e[i]);return t}function no(n,e){if(n===e)return!0;let t=O_(n),i=O_(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=oc(n),i=oc(e),t||i)return n===e;if(t=ke(n),i=ke(e),t||i)return t&&i?WA(n,e):!1;if(t=Ht(n),i=Ht(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!no(n[o],e[o]))return!1}}return String(n)===String(e)}function cg(n,e){return n.findIndex(t=>no(t,e))}const wd=n=>Wt(n)?n:n==null?"":ke(n)||Ht(n)&&(n.toString===mw||!je(n.toString))?JSON.stringify(n,fw,2):String(n),fw=(n,e)=>e&&e.__v_isRef?fw(n,e.value):ga(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:ja(e)?{[`Set(${e.size})`]:[...e.values()]}:Ht(e)&&!ke(e)&&!gw(e)?String(e):e,St={},ma=[],wi=()=>{},GA=()=>!1,$A=/^on[^a-z]/,fh=n=>$A.test(n),ug=n=>n.startsWith("onUpdate:"),un=Object.assign,dg=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jA=Object.prototype.hasOwnProperty,lt=(n,e)=>jA.call(n,e),ke=Array.isArray,ga=n=>Gc(n)==="[object Map]",ja=n=>Gc(n)==="[object Set]",O_=n=>Gc(n)==="[object Date]",je=n=>typeof n=="function",Wt=n=>typeof n=="string",oc=n=>typeof n=="symbol",Ht=n=>n!==null&&typeof n=="object",pw=n=>Ht(n)&&je(n.then)&&je(n.catch),mw=Object.prototype.toString,Gc=n=>mw.call(n),qA=n=>Gc(n).slice(8,-1),gw=n=>Gc(n)==="[object Object]",hg=n=>Wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ud=ag(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ph=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},XA=/-(\w)/g,ri=ph(n=>n.replace(XA,(e,t)=>t?t.toUpperCase():"")),YA=/\B([A-Z])/g,qa=ph(n=>n.replace(YA,"-$1").toLowerCase()),xr=ph(n=>n.charAt(0).toUpperCase()+n.slice(1)),dd=ph(n=>n?`on${xr(n)}`:""),ac=(n,e)=>!Object.is(n,e),hd=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Sd=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},lc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let k_;const KA=()=>k_||(k_=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ei;class vw{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ei&&(this.parent=ei,this.index=(ei.scopes||(ei.scopes=[])).push(this)-1)}run(e){if(this.active){const t=ei;try{return ei=this,e()}finally{ei=t}}}on(){ei=this}off(){ei=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function $c(n){return new vw(n)}function JA(n,e=ei){e&&e.active&&e.effects.push(n)}function po(n){ei&&ei.cleanups.push(n)}const fg=n=>{const e=new Set(n);return e.w=0,e.n=0,e},_w=n=>(n.w&hr)>0,yw=n=>(n.n&hr)>0,ZA=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=hr},QA=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];_w(s)&&!yw(s)?s.delete(n):e[t++]=s,s.w&=~hr,s.n&=~hr}e.length=t}},kp=new WeakMap;let Dl=0,hr=1;const Fp=30;let gi;const Xr=Symbol(""),Bp=Symbol("");class pg{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,JA(this,i)}run(){if(!this.active)return this.fn();let e=gi,t=sr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gi,gi=this,sr=!0,hr=1<<++Dl,Dl<=Fp?ZA(this):F_(this),this.fn()}finally{Dl<=Fp&&QA(this),hr=1<<--Dl,gi=this.parent,sr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gi===this?this.deferStop=!0:this.active&&(F_(this),this.onStop&&this.onStop(),this.active=!1)}}function F_(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let sr=!0;const xw=[];function mo(){xw.push(sr),sr=!1}function go(){const n=xw.pop();sr=n===void 0?!0:n}function Kn(n,e,t){if(sr&&gi){let i=kp.get(n);i||kp.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=fg()),bw(s)}}function bw(n,e){let t=!1;Dl<=Fp?yw(n)||(n.n|=hr,t=!_w(n)):t=!n.has(gi),t&&(n.add(gi),gi.deps.push(n))}function ws(n,e,t,i,s,r){const o=kp.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ke(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ke(n)?hg(t)&&a.push(o.get("length")):(a.push(o.get(Xr)),ga(n)&&a.push(o.get(Bp)));break;case"delete":ke(n)||(a.push(o.get(Xr)),ga(n)&&a.push(o.get(Bp)));break;case"set":ga(n)&&a.push(o.get(Xr));break}if(a.length===1)a[0]&&Vp(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Vp(fg(l))}}function Vp(n,e){const t=ke(n)?n:[...n];for(const i of t)i.computed&&B_(i);for(const i of t)i.computed||B_(i)}function B_(n,e){(n!==gi||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const e1=ag("__proto__,__v_isRef,__isVue"),ww=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(oc)),t1=mg(),n1=mg(!1,!0),i1=mg(!0),V_=s1();function s1(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=rt(this);for(let r=0,o=this.length;r<o;r++)Kn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(rt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){mo();const i=rt(this)[e].apply(this,t);return go(),i}}),n}function mg(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?x1:Cw:e?Tw:Mw).get(i))return i;const o=ke(i);if(!n&&o&&lt(V_,s))return Reflect.get(V_,s,r);const a=Reflect.get(i,s,r);return(oc(s)?ww.has(s):e1(s))||(n||Kn(i,"get",s),e)?a:At(a)?o&&hg(s)?a:a.value:Ht(a)?n?jc(a):vn(a):a}}const r1=Sw(),o1=Sw(!0);function Sw(n=!1){return function(t,i,s,r){let o=t[i];if(cc(o)&&At(o)&&!At(s))return!1;if(!n&&!cc(s)&&(Up(s)||(s=rt(s),o=rt(o)),!ke(t)&&At(o)&&!At(s)))return o.value=s,!0;const a=ke(t)&&hg(i)?Number(i)<t.length:lt(t,i),l=Reflect.set(t,i,s,r);return t===rt(r)&&(a?ac(s,o)&&ws(t,"set",i,s):ws(t,"add",i,s)),l}}function a1(n,e){const t=lt(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&ws(n,"delete",e,void 0),i}function l1(n,e){const t=Reflect.has(n,e);return(!oc(e)||!ww.has(e))&&Kn(n,"has",e),t}function c1(n){return Kn(n,"iterate",ke(n)?"length":Xr),Reflect.ownKeys(n)}const Ew={get:t1,set:r1,deleteProperty:a1,has:l1,ownKeys:c1},u1={get:i1,set(n,e){return!0},deleteProperty(n,e){return!0}},d1=un({},Ew,{get:n1,set:o1}),gg=n=>n,mh=n=>Reflect.getPrototypeOf(n);function vu(n,e,t=!1,i=!1){n=n.__v_raw;const s=rt(n),r=rt(e);t||(e!==r&&Kn(s,"get",e),Kn(s,"get",r));const{has:o}=mh(s),a=i?gg:t?yg:uc;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function _u(n,e=!1){const t=this.__v_raw,i=rt(t),s=rt(n);return e||(n!==s&&Kn(i,"has",n),Kn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function yu(n,e=!1){return n=n.__v_raw,!e&&Kn(rt(n),"iterate",Xr),Reflect.get(n,"size",n)}function U_(n){n=rt(n);const e=rt(this);return mh(e).has.call(e,n)||(e.add(n),ws(e,"add",n,n)),this}function z_(n,e){e=rt(e);const t=rt(this),{has:i,get:s}=mh(t);let r=i.call(t,n);r||(n=rt(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?ac(e,o)&&ws(t,"set",n,e):ws(t,"add",n,e),this}function H_(n){const e=rt(this),{has:t,get:i}=mh(e);let s=t.call(e,n);s||(n=rt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ws(e,"delete",n,void 0),r}function W_(){const n=rt(this),e=n.size!==0,t=n.clear();return e&&ws(n,"clear",void 0,void 0),t}function xu(n,e){return function(i,s){const r=this,o=r.__v_raw,a=rt(o),l=e?gg:n?yg:uc;return!n&&Kn(a,"iterate",Xr),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function bu(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),o=ga(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?gg:e?yg:uc;return!e&&Kn(r,"iterate",l?Bp:Xr),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Ns(n){return function(...e){return n==="delete"?!1:this}}function h1(){const n={get(r){return vu(this,r)},get size(){return yu(this)},has:_u,add:U_,set:z_,delete:H_,clear:W_,forEach:xu(!1,!1)},e={get(r){return vu(this,r,!1,!0)},get size(){return yu(this)},has:_u,add:U_,set:z_,delete:H_,clear:W_,forEach:xu(!1,!0)},t={get(r){return vu(this,r,!0)},get size(){return yu(this,!0)},has(r){return _u.call(this,r,!0)},add:Ns("add"),set:Ns("set"),delete:Ns("delete"),clear:Ns("clear"),forEach:xu(!0,!1)},i={get(r){return vu(this,r,!0,!0)},get size(){return yu(this,!0)},has(r){return _u.call(this,r,!0)},add:Ns("add"),set:Ns("set"),delete:Ns("delete"),clear:Ns("clear"),forEach:xu(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=bu(r,!1,!1),t[r]=bu(r,!0,!1),e[r]=bu(r,!1,!0),i[r]=bu(r,!0,!0)}),[n,t,e,i]}const[f1,p1,m1,g1]=h1();function vg(n,e){const t=e?n?g1:m1:n?p1:f1;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(lt(t,s)&&s in i?t:i,s,r)}const v1={get:vg(!1,!1)},_1={get:vg(!1,!0)},y1={get:vg(!0,!1)},Mw=new WeakMap,Tw=new WeakMap,Cw=new WeakMap,x1=new WeakMap;function b1(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w1(n){return n.__v_skip||!Object.isExtensible(n)?0:b1(qA(n))}function vn(n){return cc(n)?n:_g(n,!1,Ew,v1,Mw)}function Aw(n){return _g(n,!1,d1,_1,Tw)}function jc(n){return _g(n,!0,u1,y1,Cw)}function _g(n,e,t,i,s){if(!Ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=w1(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function va(n){return cc(n)?va(n.__v_raw):!!(n&&n.__v_isReactive)}function cc(n){return!!(n&&n.__v_isReadonly)}function Up(n){return!!(n&&n.__v_isShallow)}function Iw(n){return va(n)||cc(n)}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function Rw(n){return Sd(n,"__v_skip",!0),n}const uc=n=>Ht(n)?vn(n):n,yg=n=>Ht(n)?jc(n):n;function Pw(n){sr&&gi&&(n=rt(n),bw(n.dep||(n.dep=fg())))}function Lw(n,e){n=rt(n),n.dep&&Vp(n.dep)}function At(n){return!!(n&&n.__v_isRef===!0)}function Ee(n){return Dw(n,!1)}function Nw(n){return Dw(n,!0)}function Dw(n,e){return At(n)?n:new S1(n,e)}class S1{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:rt(e),this._value=t?e:uc(e)}get value(){return Pw(this),this._value}set value(e){e=this.__v_isShallow?e:rt(e),ac(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:uc(e),Lw(this))}}function Si(n){return At(n)?n.value:n}const E1={get:(n,e,t)=>Si(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return At(s)&&!At(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Ow(n){return va(n)?n:new Proxy(n,E1)}function xg(n){const e=ke(n)?new Array(n.length):{};for(const t in n)e[t]=Ke(n,t);return e}class M1{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ke(n,e,t){const i=n[e];return At(i)?i:new M1(n,e,t)}class T1{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new pg(e,()=>{this._dirty||(this._dirty=!0,Lw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=rt(this);return Pw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function C1(n,e,t=!1){let i,s;const r=je(n);return r?(i=n,s=wi):(i=n.get,s=n.set),new T1(i,s,r||!s,t)}const Hl=[];function A1(n,...e){mo();const t=Hl.length?Hl[Hl.length-1].component:null,i=t&&t.appContext.config.warnHandler,s=I1();if(i)ys(i,t,11,[n+e.join(""),t&&t.proxy,s.map(({vnode:r})=>`at <${pS(t,r.type)}>`).join(`
`),s]);else{const r=[`[Vue warn]: ${n}`,...e];s.length&&r.push(`
`,...R1(s)),console.warn(...r)}go()}function I1(){let n=Hl[Hl.length-1];if(!n)return[];const e=[];for(;n;){const t=e[0];t&&t.vnode===n?t.recurseCount++:e.push({vnode:n,recurseCount:0});const i=n.component&&n.component.parent;n=i&&i.vnode}return e}function R1(n){const e=[];return n.forEach((t,i)=>{e.push(...i===0?[]:[`
`],...P1(t))}),e}function P1({vnode:n,recurseCount:e}){const t=e>0?`... (${e} recursive calls)`:"",i=n.component?n.component.parent==null:!1,s=` at <${pS(n.component,n.type,i)}`,r=">"+t;return n.props?[s,...L1(n.props),r]:[s+r]}function L1(n){const e=[],t=Object.keys(n);return t.slice(0,3).forEach(i=>{e.push(...kw(i,n[i]))}),t.length>3&&e.push(" ..."),e}function kw(n,e,t){return Wt(e)?(e=JSON.stringify(e),t?e:[`${n}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?t?e:[`${n}=${e}`]:At(e)?(e=kw(n,rt(e.value),!0),t?e:[`${n}=Ref<`,e,">"]):je(e)?[`${n}=fn${e.name?`<${e.name}>`:""}`]:(e=rt(e),t?e:[`${n}=`,e])}function ys(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){gh(r,e,t)}return s}function ii(n,e,t,i){if(je(n)){const r=ys(n,e,t,i);return r&&pw(r)&&r.catch(o=>{gh(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(ii(n[r],e,t,i));return s}function gh(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ys(l,null,10,[n,o,a]);return}}N1(n,t,s,i)}function N1(n,e,t,i=!0){console.error(n)}let Ed=!1,zp=!1;const qn=[];let fs=0;const Wl=[];let Ol=null,ia=0;const Gl=[];let js=null,sa=0;const Fw=Promise.resolve();let bg=null,Hp=null;function Jn(n){const e=bg||Fw;return n?e.then(this?n.bind(this):n):e}function D1(n){let e=fs+1,t=qn.length;for(;e<t;){const i=e+t>>>1;dc(qn[i])<n?e=i+1:t=i}return e}function Bw(n){(!qn.length||!qn.includes(n,Ed&&n.allowRecurse?fs+1:fs))&&n!==Hp&&(n.id==null?qn.push(n):qn.splice(D1(n.id),0,n),Vw())}function Vw(){!Ed&&!zp&&(zp=!0,bg=Fw.then(Hw))}function O1(n){const e=qn.indexOf(n);e>fs&&qn.splice(e,1)}function Uw(n,e,t,i){ke(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),Vw()}function k1(n){Uw(n,Ol,Wl,ia)}function F1(n){Uw(n,js,Gl,sa)}function vh(n,e=null){if(Wl.length){for(Hp=e,Ol=[...new Set(Wl)],Wl.length=0,ia=0;ia<Ol.length;ia++)Ol[ia]();Ol=null,ia=0,Hp=null,vh(n,e)}}function zw(n){if(vh(),Gl.length){const e=[...new Set(Gl)];if(Gl.length=0,js){js.push(...e);return}for(js=e,js.sort((t,i)=>dc(t)-dc(i)),sa=0;sa<js.length;sa++)js[sa]();js=null,sa=0}}const dc=n=>n.id==null?1/0:n.id;function Hw(n){zp=!1,Ed=!0,vh(n),qn.sort((t,i)=>dc(t)-dc(i));const e=wi;try{for(fs=0;fs<qn.length;fs++){const t=qn[fs];t&&t.active!==!1&&ys(t,null,14)}}finally{fs=0,qn.length=0,zw(),Ed=!1,bg=null,(qn.length||Wl.length||Gl.length)&&Hw(n)}}function B1(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=i[u]||St;h&&(s=t.map(f=>f.trim())),d&&(s=t.map(lc))}let a,l=i[a=dd(e)]||i[a=dd(ri(e))];!l&&r&&(l=i[a=dd(qa(e))]),l&&ii(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ii(c,n,6,s)}}function Ww(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!je(n)){const l=c=>{const u=Ww(c,e,!0);u&&(a=!0,un(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(i.set(n,null),null):(ke(r)?r.forEach(l=>o[l]=null):un(o,r),i.set(n,o),o)}function _h(n,e){return!n||!fh(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(n,e[0].toLowerCase()+e.slice(1))||lt(n,qa(e))||lt(n,e))}let ti=null,yh=null;function Md(n){const e=ti;return ti=n,yh=n&&n.type.__scopeId||null,e}function s6(n){yh=n}function r6(){yh=null}function st(n,e=ti,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ny(-1);const r=Md(e),o=n(...s);return Md(r),i._d&&ny(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function yf(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:f,ctx:p,inheritAttrs:g}=n;let m,v;const _=Md(n);try{if(t.shapeFlag&4){const E=s||i;m=Wi(u.call(E,E,d,r,f,h,p)),v=l}else{const E=e;m=Wi(E.length>1?E(r,{attrs:l,slots:a,emit:c}):E(r,null)),v=e.props?l:V1(l)}}catch(E){jl.length=0,gh(E,n,1),m=I(Ei)}let M=m;if(v&&g!==!1){const E=Object.keys(v),{shapeFlag:x}=M;E.length&&x&7&&(o&&E.some(ug)&&(v=U1(v,o)),M=fr(M,v))}return t.dirs&&(M=fr(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),m=M,Md(_),m}const V1=n=>{let e;for(const t in n)(t==="class"||t==="style"||fh(t))&&((e||(e={}))[t]=n[t]);return e},U1=(n,e)=>{const t={};for(const i in n)(!ug(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function z1(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?G_(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==i[h]&&!_h(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?G_(i,o,c):!0:!!o;return!1}function G_(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!_h(t,r))return!0}return!1}function H1({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const W1=n=>n.__isSuspense;function G1(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):F1(n)}function ln(n,e){if(rn){let t=rn.provides;const i=rn.parent&&rn.parent.provides;i===t&&(t=rn.provides=Object.create(i)),t[n]=e}}function _t(n,e,t=!1){const i=rn||ti;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&je(e)?e.call(i.proxy):e}}function br(n,e){return wg(n,null,e)}const $_={};function ct(n,e,t){return wg(n,e,t)}function wg(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=St){const a=rn;let l,c=!1,u=!1;if(At(n)?(l=()=>n.value,c=Up(n)):va(n)?(l=()=>n,i=!0):ke(n)?(u=!0,c=n.some(v=>va(v)||Up(v)),l=()=>n.map(v=>{if(At(v))return v.value;if(va(v))return Gr(v);if(je(v))return ys(v,a,2)})):je(n)?e?l=()=>ys(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),ii(n,a,3,[h])}:l=wi,e&&i){const v=l;l=()=>Gr(v())}let d,h=v=>{d=m.onStop=()=>{ys(v,a,4)}};if(mc)return h=wi,e?t&&ii(e,a,3,[l(),u?[]:void 0,h]):l(),wi;let f=u?[]:$_;const p=()=>{if(!!m.active)if(e){const v=m.run();(i||c||(u?v.some((_,M)=>ac(_,f[M])):ac(v,f)))&&(d&&d(),ii(e,a,3,[v,f===$_?void 0:f,h]),f=v)}else m.run()};p.allowRecurse=!!e;let g;s==="sync"?g=p:s==="post"?g=()=>Nn(p,a&&a.suspense):g=()=>k1(p);const m=new pg(l,g);return e?t?p():f=m.run():s==="post"?Nn(m.run.bind(m),a&&a.suspense):m.run(),()=>{m.stop(),a&&a.scope&&dg(a.scope.effects,m)}}function $1(n,e,t){const i=this.proxy,s=Wt(n)?n.includes(".")?Gw(i,n):()=>i[n]:n.bind(i,i);let r;je(e)?r=e:(r=e.handler,t=e);const o=rn;Aa(this);const a=wg(s,r.bind(i),t);return o?Aa(o):Yr(),a}function Gw(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Gr(n,e){if(!Ht(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),At(n))Gr(n.value,e);else if(ke(n))for(let t=0;t<n.length;t++)Gr(n[t],e);else if(ja(n)||ga(n))n.forEach(t=>{Gr(t,e)});else if(gw(n))for(const t in n)Gr(n[t],e);return n}function $w(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xa(()=>{n.isMounted=!0}),Li(()=>{n.isUnmounting=!0}),n}const Zn=[Function,Array],j1={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zn,onEnter:Zn,onAfterEnter:Zn,onEnterCancelled:Zn,onBeforeLeave:Zn,onLeave:Zn,onAfterLeave:Zn,onLeaveCancelled:Zn,onBeforeAppear:Zn,onAppear:Zn,onAfterAppear:Zn,onAppearCancelled:Zn},setup(n,{slots:e}){const t=Eh(),i=$w();let s;return()=>{const r=e.default&&Sg(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const g of r)if(g.type!==Ei){o=g;break}}const a=rt(n),{mode:l}=a;if(i.isLeaving)return xf(o);const c=j_(o);if(!c)return xf(o);const u=hc(c,a,i,t);fc(c,u);const d=t.subTree,h=d&&j_(d);let f=!1;const{getTransitionKey:p}=c.type;if(p){const g=p();s===void 0?s=g:g!==s&&(s=g,f=!0)}if(h&&h.type!==Ei&&(!Ur(c,h)||f)){const g=hc(h,a,i,t);if(fc(h,g),l==="out-in")return i.isLeaving=!0,g.afterLeave=()=>{i.isLeaving=!1,t.update()},xf(o);l==="in-out"&&c.type!==Ei&&(g.delayLeave=(m,v,_)=>{const M=qw(i,h);M[String(h.key)]=h,m._leaveCb=()=>{v(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},jw=j1;function qw(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function hc(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:_}=e,M=String(n.key),E=qw(t,n),x=(D,W)=>{D&&ii(D,i,9,W)},P=(D,W)=>{const L=W[1];x(D,W),ke(D)?D.every(y=>y.length<=1)&&L():D.length<=1&&L()},C={mode:r,persisted:o,beforeEnter(D){let W=a;if(!t.isMounted)if(s)W=g||a;else return;D._leaveCb&&D._leaveCb(!0);const L=E[M];L&&Ur(n,L)&&L.el._leaveCb&&L.el._leaveCb(),x(W,[D])},enter(D){let W=l,L=c,y=u;if(!t.isMounted)if(s)W=m||l,L=v||c,y=_||u;else return;let T=!1;const X=D._enterCb=k=>{T||(T=!0,k?x(y,[D]):x(L,[D]),C.delayedLeave&&C.delayedLeave(),D._enterCb=void 0)};W?P(W,[D,X]):X()},leave(D,W){const L=String(n.key);if(D._enterCb&&D._enterCb(!0),t.isUnmounting)return W();x(d,[D]);let y=!1;const T=D._leaveCb=X=>{y||(y=!0,W(),X?x(p,[D]):x(f,[D]),D._leaveCb=void 0,E[L]===n&&delete E[L])};E[L]=n,h?P(h,[D,T]):T()},clone(D){return hc(D,e,t,i)}};return C}function xf(n){if(xh(n))return n=fr(n),n.children=null,n}function j_(n){return xh(n)?n.children?n.children[0]:void 0:n}function fc(n,e){n.shapeFlag&6&&n.component?fc(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Sg(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Nt?(o.patchFlag&128&&s++,i=i.concat(Sg(o.children,e,a))):(e||o.type!==Ei)&&i.push(a!=null?fr(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function qc(n){return je(n)?{setup:n,name:n.name}:n}const fd=n=>!!n.type.__asyncLoader,xh=n=>n.type.__isKeepAlive;function Xw(n,e){Kw(n,"a",e)}function Yw(n,e){Kw(n,"da",e)}function Kw(n,e,t=rn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(bh(e,i,t),t){let s=t.parent;for(;s&&s.parent;)xh(s.parent.vnode)&&q1(i,e,t,s),s=s.parent}}function q1(n,e,t,i){const s=bh(e,n,i,!0);Zw(()=>{dg(i[e],s)},t)}function bh(n,e,t=rn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;mo(),Aa(t);const a=ii(e,t,n,o);return Yr(),go(),a});return i?s.unshift(r):s.push(r),r}}const Cs=n=>(e,t=rn)=>(!mc||n==="sp")&&bh(n,e,t),wh=Cs("bm"),Xa=Cs("m"),X1=Cs("bu"),Jw=Cs("u"),Li=Cs("bum"),Zw=Cs("um"),Y1=Cs("sp"),K1=Cs("rtg"),J1=Cs("rtc");function Z1(n,e=rn){bh("ec",n,e)}function oi(n,e){const t=ti;if(t===null)return n;const i=Mh(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=St]=e[r];je(o)&&(o={mounted:o,updated:o}),o.deep&&Gr(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function Ar(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(mo(),ii(l,t,8,[n.el,a,n,e]),go())}}const Eg="components",Q1="directives";function rr(n,e){return Mg(Eg,n,!0,e)||n}const Qw=Symbol();function eI(n){return Wt(n)?Mg(Eg,n,!1)||n:n||Qw}function vo(n){return Mg(Q1,n)}function Mg(n,e,t=!0,i=!1){const s=ti||rn;if(s){const r=s.type;if(n===Eg){const a=fS(r);if(a&&(a===e||a===ri(e)||a===xr(ri(e))))return r}const o=q_(s[n]||r[n],e)||q_(s.appContext[n],e);return!o&&i?r:o}}function q_(n,e){return n&&(n[e]||n[ri(e)]||n[xr(ri(e))])}function Tg(n,e,t,i){let s;const r=t&&t[i];if(ke(n)||Wt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Ht(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r&&r[a])}}else s=[];return t&&(t[i]=s),s}function X_(n){const e={};for(const t in n)e[dd(t)]=n[t];return e}const Wp=n=>n?dS(n)?Mh(n)||n.proxy:Wp(n.parent):null,Td=un(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Wp(n.parent),$root:n=>Wp(n.root),$emit:n=>n.emit,$options:n=>tS(n),$forceUpdate:n=>n.f||(n.f=()=>Bw(n.update)),$nextTick:n=>n.n||(n.n=Jn.bind(n.proxy)),$watch:n=>$1.bind(n)}),tI={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(i!==St&&lt(i,e))return o[e]=1,i[e];if(s!==St&&lt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&lt(c,e))return o[e]=3,r[e];if(t!==St&&lt(t,e))return o[e]=4,t[e];Gp&&(o[e]=0)}}const u=Td[e];let d,h;if(u)return e==="$attrs"&&Kn(n,"get",e),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==St&&lt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,lt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return s!==St&&lt(s,e)?(s[e]=t,!0):i!==St&&lt(i,e)?(i[e]=t,!0):lt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==St&&lt(n,o)||e!==St&&lt(e,o)||(a=r[0])&&lt(a,o)||lt(i,o)||lt(Td,o)||lt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:lt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Gp=!0;function nI(n){const e=tS(n),t=n.proxy,i=n.ctx;Gp=!1,e.beforeCreate&&Y_(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:p,activated:g,deactivated:m,beforeDestroy:v,beforeUnmount:_,destroyed:M,unmounted:E,render:x,renderTracked:P,renderTriggered:C,errorCaptured:D,serverPrefetch:W,expose:L,inheritAttrs:y,components:T,directives:X,filters:k}=e;if(c&&iI(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const $ in o){const O=o[$];je(O)&&(i[$]=O.bind(t))}if(s){const $=s.call(t,t);Ht($)&&(n.data=vn($))}if(Gp=!0,r)for(const $ in r){const O=r[$],ne=je(O)?O.bind(t,t):je(O.get)?O.get.bind(t,t):wi,ae=!je(O)&&je(O.set)?O.set.bind(t):wi,fe=G({get:ne,set:ae});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>fe.value,set:oe=>fe.value=oe})}if(a)for(const $ in a)eS(a[$],i,t,$);if(l){const $=je(l)?l.call(t):l;Reflect.ownKeys($).forEach(O=>{ln(O,$[O])})}u&&Y_(u,n,"c");function H($,O){ke(O)?O.forEach(ne=>$(ne.bind(t))):O&&$(O.bind(t))}if(H(wh,d),H(Xa,h),H(X1,f),H(Jw,p),H(Xw,g),H(Yw,m),H(Z1,D),H(J1,P),H(K1,C),H(Li,_),H(Zw,E),H(Y1,W),ke(L))if(L.length){const $=n.exposed||(n.exposed={});L.forEach(O=>{Object.defineProperty($,O,{get:()=>t[O],set:ne=>t[O]=ne})})}else n.exposed||(n.exposed={});x&&n.render===wi&&(n.render=x),y!=null&&(n.inheritAttrs=y),T&&(n.components=T),X&&(n.directives=X)}function iI(n,e,t=wi,i=!1){ke(n)&&(n=$p(n));for(const s in n){const r=n[s];let o;Ht(r)?"default"in r?o=_t(r.from||s,r.default,!0):o=_t(r.from||s):o=_t(r),At(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Y_(n,e,t){ii(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function eS(n,e,t,i){const s=i.includes(".")?Gw(t,i):()=>t[i];if(Wt(n)){const r=e[n];je(r)&&ct(s,r)}else if(je(n))ct(s,n.bind(t));else if(Ht(n))if(ke(n))n.forEach(r=>eS(r,e,t,i));else{const r=je(n.handler)?n.handler.bind(t):e[n.handler];je(r)&&ct(s,r,n)}}function tS(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Cd(l,c,o,!0)),Cd(l,e,o)),r.set(e,l),l}function Cd(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Cd(n,r,t,!0),s&&s.forEach(o=>Cd(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=sI[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const sI={data:K_,props:kr,emits:kr,methods:kr,computed:kr,beforeCreate:Cn,created:Cn,beforeMount:Cn,mounted:Cn,beforeUpdate:Cn,updated:Cn,beforeDestroy:Cn,beforeUnmount:Cn,destroyed:Cn,unmounted:Cn,activated:Cn,deactivated:Cn,errorCaptured:Cn,serverPrefetch:Cn,components:kr,directives:kr,watch:oI,provide:K_,inject:rI};function K_(n,e){return e?n?function(){return un(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function rI(n,e){return kr($p(n),$p(e))}function $p(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Cn(n,e){return n?[...new Set([].concat(n,e))]:e}function kr(n,e){return n?un(un(Object.create(null),n),e):e}function oI(n,e){if(!n)return e;if(!e)return n;const t=un(Object.create(null),n);for(const i in e)t[i]=Cn(n[i],e[i]);return t}function aI(n,e,t,i=!1){const s={},r={};Sd(r,Sh,1),n.propsDefaults=Object.create(null),nS(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Aw(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function lI(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=rt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(_h(n.emitsOptions,h))continue;const f=e[h];if(l)if(lt(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const p=ri(h);s[p]=jp(l,a,p,f,n,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{nS(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!lt(e,d)&&((u=qa(d))===d||!lt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=jp(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!lt(e,d)&&!0)&&(delete r[d],c=!0)}c&&ws(n,"set","$attrs")}function nS(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ud(l))continue;const c=e[l];let u;s&&lt(s,u=ri(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:_h(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=rt(t),c=a||St;for(let u=0;u<r.length;u++){const d=r[u];t[d]=jp(s,l,d,c[d],n,!lt(c,d))}}return o}function jp(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&je(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(Aa(s),i=c[t]=l.call(null,e),Yr())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===qa(t))&&(i=!0))}return i}function iS(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!je(n)){const u=d=>{l=!0;const[h,f]=iS(d,e,!0);un(o,h),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return i.set(n,ma),ma;if(ke(r))for(let u=0;u<r.length;u++){const d=ri(r[u]);J_(d)&&(o[d]=St)}else if(r)for(const u in r){const d=ri(u);if(J_(d)){const h=r[u],f=o[d]=ke(h)||je(h)?{type:h}:h;if(f){const p=ey(Boolean,f.type),g=ey(String,f.type);f[0]=p>-1,f[1]=g<0||p<g,(p>-1||lt(f,"default"))&&a.push(d)}}}const c=[o,a];return i.set(n,c),c}function J_(n){return n[0]!=="$"}function Z_(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Q_(n,e){return Z_(n)===Z_(e)}function ey(n,e){return ke(e)?e.findIndex(t=>Q_(t,n)):je(e)&&Q_(e,n)?0:-1}const sS=n=>n[0]==="_"||n==="$stable",Cg=n=>ke(n)?n.map(Wi):[Wi(n)],cI=(n,e,t)=>{if(e._n)return e;const i=st((...s)=>Cg(e(...s)),t);return i._c=!1,i},rS=(n,e,t)=>{const i=n._ctx;for(const s in n){if(sS(s))continue;const r=n[s];if(je(r))e[s]=cI(s,r,i);else if(r!=null){const o=Cg(r);e[s]=()=>o}}},oS=(n,e)=>{const t=Cg(e);n.slots.default=()=>t},uI=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=rt(e),Sd(e,"_",t)):rS(e,n.slots={})}else n.slots={},e&&oS(n,e);Sd(n.slots,Sh,1)},dI=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=St;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(un(s,e),!t&&a===1&&delete s._):(r=!e.$stable,rS(e,s)),o=e}else e&&(oS(n,e),o={default:1});if(r)for(const a in s)!sS(a)&&!(a in o)&&delete s[a]};function aS(){return{app:null,config:{isNativeTag:GA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hI=0;function fI(n,e){return function(i,s=null){je(i)||(i=Object.assign({},i)),s!=null&&!Ht(s)&&(s=null);const r=aS(),o=new Set;let a=!1;const l=r.app={_uid:hI++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:DI,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&je(c.install)?(o.add(c),c.install(l,...u)):je(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=I(i,s);return h.appContext=r,u&&e?e(h,c):n(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Mh(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function qp(n,e,t,i,s=!1){if(ke(n)){n.forEach((h,f)=>qp(h,e&&(ke(e)?e[f]:e),t,i,s));return}if(fd(i)&&!s)return;const r=i.shapeFlag&4?Mh(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===St?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Wt(c)?(u[c]=null,lt(d,c)&&(d[c]=null)):At(c)&&(c.value=null)),je(l))ys(l,a,12,[o,u]);else{const h=Wt(l),f=At(l);if(h||f){const p=()=>{if(n.f){const g=h?u[l]:l.value;s?ke(g)&&dg(g,r):ke(g)?g.includes(r)||g.push(r):h?(u[l]=[r],lt(d,l)&&(d[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,lt(d,l)&&(d[l]=o)):At(l)&&(l.value=o,n.k&&(u[n.k]=o))};o?(p.id=-1,Nn(p,t)):p()}}}const Nn=G1;function pI(n){return mI(n)}function mI(n,e){const t=KA();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=wi,cloneNode:p,insertStaticContent:g}=n,m=(b,A,F,q=null,ee=null,ie=null,re=!1,ue=null,he=!!A.dynamicChildren)=>{if(b===A)return;b&&!Ur(b,A)&&(q=ve(b),Ae(b,ee,ie,!0),b=null),A.patchFlag===-2&&(he=!1,A.dynamicChildren=null);const{type:S,ref:w,shapeFlag:V}=A;switch(S){case Ig:v(b,A,F,q);break;case Ei:_(b,A,F,q);break;case bf:b==null&&M(A,F,q,re);break;case Nt:X(b,A,F,q,ee,ie,re,ue,he);break;default:V&1?P(b,A,F,q,ee,ie,re,ue,he):V&6?k(b,A,F,q,ee,ie,re,ue,he):(V&64||V&128)&&S.process(b,A,F,q,ee,ie,re,ue,he,pe)}w!=null&&ee&&qp(w,b&&b.ref,ie,A||b,!A)},v=(b,A,F,q)=>{if(b==null)i(A.el=a(A.children),F,q);else{const ee=A.el=b.el;A.children!==b.children&&c(ee,A.children)}},_=(b,A,F,q)=>{b==null?i(A.el=l(A.children||""),F,q):A.el=b.el},M=(b,A,F,q)=>{[b.el,b.anchor]=g(b.children,A,F,q,b.el,b.anchor)},E=({el:b,anchor:A},F,q)=>{let ee;for(;b&&b!==A;)ee=h(b),i(b,F,q),b=ee;i(A,F,q)},x=({el:b,anchor:A})=>{let F;for(;b&&b!==A;)F=h(b),s(b),b=F;s(A)},P=(b,A,F,q,ee,ie,re,ue,he)=>{re=re||A.type==="svg",b==null?C(A,F,q,ee,ie,re,ue,he):L(b,A,ee,ie,re,ue,he)},C=(b,A,F,q,ee,ie,re,ue)=>{let he,S;const{type:w,props:V,shapeFlag:Q,transition:le,patchFlag:ge,dirs:Se}=b;if(b.el&&p!==void 0&&ge===-1)he=b.el=p(b.el);else{if(he=b.el=o(b.type,ie,V&&V.is,V),Q&8?u(he,b.children):Q&16&&W(b.children,he,null,q,ee,ie&&w!=="foreignObject",re,ue),Se&&Ar(b,null,q,"created"),V){for(const Re in V)Re!=="value"&&!ud(Re)&&r(he,Re,null,V[Re],ie,b.children,q,ee,ce);"value"in V&&r(he,"value",null,V.value),(S=V.onVnodeBeforeMount)&&Ui(S,q,b)}D(he,b,b.scopeId,re,q)}Se&&Ar(b,null,q,"beforeMount");const Z=(!ee||ee&&!ee.pendingBranch)&&le&&!le.persisted;Z&&le.beforeEnter(he),i(he,A,F),((S=V&&V.onVnodeMounted)||Z||Se)&&Nn(()=>{S&&Ui(S,q,b),Z&&le.enter(he),Se&&Ar(b,null,q,"mounted")},ee)},D=(b,A,F,q,ee)=>{if(F&&f(b,F),q)for(let ie=0;ie<q.length;ie++)f(b,q[ie]);if(ee){let ie=ee.subTree;if(A===ie){const re=ee.vnode;D(b,re,re.scopeId,re.slotScopeIds,ee.parent)}}},W=(b,A,F,q,ee,ie,re,ue,he=0)=>{for(let S=he;S<b.length;S++){const w=b[S]=ue?Xs(b[S]):Wi(b[S]);m(null,w,A,F,q,ee,ie,re,ue)}},L=(b,A,F,q,ee,ie,re)=>{const ue=A.el=b.el;let{patchFlag:he,dynamicChildren:S,dirs:w}=A;he|=b.patchFlag&16;const V=b.props||St,Q=A.props||St;let le;F&&Ir(F,!1),(le=Q.onVnodeBeforeUpdate)&&Ui(le,F,A,b),w&&Ar(A,b,F,"beforeUpdate"),F&&Ir(F,!0);const ge=ee&&A.type!=="foreignObject";if(S?y(b.dynamicChildren,S,ue,F,q,ge,ie):re||ne(b,A,ue,null,F,q,ge,ie,!1),he>0){if(he&16)T(ue,A,V,Q,F,q,ee);else if(he&2&&V.class!==Q.class&&r(ue,"class",null,Q.class,ee),he&4&&r(ue,"style",V.style,Q.style,ee),he&8){const Se=A.dynamicProps;for(let Z=0;Z<Se.length;Z++){const Re=Se[Z],Be=V[Re],Pe=Q[Re];(Pe!==Be||Re==="value")&&r(ue,Re,Be,Pe,ee,b.children,F,q,ce)}}he&1&&b.children!==A.children&&u(ue,A.children)}else!re&&S==null&&T(ue,A,V,Q,F,q,ee);((le=Q.onVnodeUpdated)||w)&&Nn(()=>{le&&Ui(le,F,A,b),w&&Ar(A,b,F,"updated")},q)},y=(b,A,F,q,ee,ie,re)=>{for(let ue=0;ue<A.length;ue++){const he=b[ue],S=A[ue],w=he.el&&(he.type===Nt||!Ur(he,S)||he.shapeFlag&70)?d(he.el):F;m(he,S,w,null,q,ee,ie,re,!0)}},T=(b,A,F,q,ee,ie,re)=>{if(F!==q){for(const ue in q){if(ud(ue))continue;const he=q[ue],S=F[ue];he!==S&&ue!=="value"&&r(b,ue,S,he,re,A.children,ee,ie,ce)}if(F!==St)for(const ue in F)!ud(ue)&&!(ue in q)&&r(b,ue,F[ue],null,re,A.children,ee,ie,ce);"value"in q&&r(b,"value",F.value,q.value)}},X=(b,A,F,q,ee,ie,re,ue,he)=>{const S=A.el=b?b.el:a(""),w=A.anchor=b?b.anchor:a("");let{patchFlag:V,dynamicChildren:Q,slotScopeIds:le}=A;le&&(ue=ue?ue.concat(le):le),b==null?(i(S,F,q),i(w,F,q),W(A.children,F,w,ee,ie,re,ue,he)):V>0&&V&64&&Q&&b.dynamicChildren?(y(b.dynamicChildren,Q,F,ee,ie,re,ue),(A.key!=null||ee&&A===ee.subTree)&&Ag(b,A,!0)):ne(b,A,F,w,ee,ie,re,ue,he)},k=(b,A,F,q,ee,ie,re,ue,he)=>{A.slotScopeIds=ue,b==null?A.shapeFlag&512?ee.ctx.activate(A,F,q,re,he):z(A,F,q,ee,ie,re,he):H(b,A,he)},z=(b,A,F,q,ee,ie,re)=>{const ue=b.component=TI(b,q,ee);if(xh(b)&&(ue.ctx.renderer=pe),CI(ue),ue.asyncDep){if(ee&&ee.registerDep(ue,$),!b.el){const he=ue.subTree=I(Ei);_(null,he,A,F)}return}$(ue,b,A,F,ee,ie,re)},H=(b,A,F)=>{const q=A.component=b.component;if(z1(b,A,F))if(q.asyncDep&&!q.asyncResolved){O(q,A,F);return}else q.next=A,O1(q.update),q.update();else A.el=b.el,q.vnode=A},$=(b,A,F,q,ee,ie,re)=>{const ue=()=>{if(b.isMounted){let{next:w,bu:V,u:Q,parent:le,vnode:ge}=b,Se=w,Z;Ir(b,!1),w?(w.el=ge.el,O(b,w,re)):w=ge,V&&hd(V),(Z=w.props&&w.props.onVnodeBeforeUpdate)&&Ui(Z,le,w,ge),Ir(b,!0);const Re=yf(b),Be=b.subTree;b.subTree=Re,m(Be,Re,d(Be.el),ve(Be),b,ee,ie),w.el=Re.el,Se===null&&H1(b,Re.el),Q&&Nn(Q,ee),(Z=w.props&&w.props.onVnodeUpdated)&&Nn(()=>Ui(Z,le,w,ge),ee)}else{let w;const{el:V,props:Q}=A,{bm:le,m:ge,parent:Se}=b,Z=fd(A);if(Ir(b,!1),le&&hd(le),!Z&&(w=Q&&Q.onVnodeBeforeMount)&&Ui(w,Se,A),Ir(b,!0),V&&K){const Re=()=>{b.subTree=yf(b),K(V,b.subTree,b,ee,null)};Z?A.type.__asyncLoader().then(()=>!b.isUnmounted&&Re()):Re()}else{const Re=b.subTree=yf(b);m(null,Re,F,q,b,ee,ie),A.el=Re.el}if(ge&&Nn(ge,ee),!Z&&(w=Q&&Q.onVnodeMounted)){const Re=A;Nn(()=>Ui(w,Se,Re),ee)}(A.shapeFlag&256||Se&&fd(Se.vnode)&&Se.vnode.shapeFlag&256)&&b.a&&Nn(b.a,ee),b.isMounted=!0,A=F=q=null}},he=b.effect=new pg(ue,()=>Bw(S),b.scope),S=b.update=()=>he.run();S.id=b.uid,Ir(b,!0),S()},O=(b,A,F)=>{A.component=b;const q=b.vnode.props;b.vnode=A,b.next=null,lI(b,A.props,q,F),dI(b,A.children,F),mo(),vh(void 0,b.update),go()},ne=(b,A,F,q,ee,ie,re,ue,he=!1)=>{const S=b&&b.children,w=b?b.shapeFlag:0,V=A.children,{patchFlag:Q,shapeFlag:le}=A;if(Q>0){if(Q&128){fe(S,V,F,q,ee,ie,re,ue,he);return}else if(Q&256){ae(S,V,F,q,ee,ie,re,ue,he);return}}le&8?(w&16&&ce(S,ee,ie),V!==S&&u(F,V)):w&16?le&16?fe(S,V,F,q,ee,ie,re,ue,he):ce(S,ee,ie,!0):(w&8&&u(F,""),le&16&&W(V,F,q,ee,ie,re,ue,he))},ae=(b,A,F,q,ee,ie,re,ue,he)=>{b=b||ma,A=A||ma;const S=b.length,w=A.length,V=Math.min(S,w);let Q;for(Q=0;Q<V;Q++){const le=A[Q]=he?Xs(A[Q]):Wi(A[Q]);m(b[Q],le,F,null,ee,ie,re,ue,he)}S>w?ce(b,ee,ie,!0,!1,V):W(A,F,q,ee,ie,re,ue,he,V)},fe=(b,A,F,q,ee,ie,re,ue,he)=>{let S=0;const w=A.length;let V=b.length-1,Q=w-1;for(;S<=V&&S<=Q;){const le=b[S],ge=A[S]=he?Xs(A[S]):Wi(A[S]);if(Ur(le,ge))m(le,ge,F,null,ee,ie,re,ue,he);else break;S++}for(;S<=V&&S<=Q;){const le=b[V],ge=A[Q]=he?Xs(A[Q]):Wi(A[Q]);if(Ur(le,ge))m(le,ge,F,null,ee,ie,re,ue,he);else break;V--,Q--}if(S>V){if(S<=Q){const le=Q+1,ge=le<w?A[le].el:q;for(;S<=Q;)m(null,A[S]=he?Xs(A[S]):Wi(A[S]),F,ge,ee,ie,re,ue,he),S++}}else if(S>Q)for(;S<=V;)Ae(b[S],ee,ie,!0),S++;else{const le=S,ge=S,Se=new Map;for(S=ge;S<=Q;S++){const Ne=A[S]=he?Xs(A[S]):Wi(A[S]);Ne.key!=null&&Se.set(Ne.key,S)}let Z,Re=0;const Be=Q-ge+1;let Pe=!1,B=0;const xe=new Array(Be);for(S=0;S<Be;S++)xe[S]=0;for(S=le;S<=V;S++){const Ne=b[S];if(Re>=Be){Ae(Ne,ee,ie,!0);continue}let Ce;if(Ne.key!=null)Ce=Se.get(Ne.key);else for(Z=ge;Z<=Q;Z++)if(xe[Z-ge]===0&&Ur(Ne,A[Z])){Ce=Z;break}Ce===void 0?Ae(Ne,ee,ie,!0):(xe[Ce-ge]=S+1,Ce>=B?B=Ce:Pe=!0,m(Ne,A[Ce],F,null,ee,ie,re,ue,he),Re++)}const be=Pe?gI(xe):ma;for(Z=be.length-1,S=Be-1;S>=0;S--){const Ne=ge+S,Ce=A[Ne],Ve=Ne+1<w?A[Ne+1].el:q;xe[S]===0?m(null,Ce,F,Ve,ee,ie,re,ue,he):Pe&&(Z<0||S!==be[Z]?oe(Ce,F,Ve,2):Z--)}}},oe=(b,A,F,q,ee=null)=>{const{el:ie,type:re,transition:ue,children:he,shapeFlag:S}=b;if(S&6){oe(b.component.subTree,A,F,q);return}if(S&128){b.suspense.move(A,F,q);return}if(S&64){re.move(b,A,F,pe);return}if(re===Nt){i(ie,A,F);for(let V=0;V<he.length;V++)oe(he[V],A,F,q);i(b.anchor,A,F);return}if(re===bf){E(b,A,F);return}if(q!==2&&S&1&&ue)if(q===0)ue.beforeEnter(ie),i(ie,A,F),Nn(()=>ue.enter(ie),ee);else{const{leave:V,delayLeave:Q,afterLeave:le}=ue,ge=()=>i(ie,A,F),Se=()=>{V(ie,()=>{ge(),le&&le()})};Q?Q(ie,ge,Se):Se()}else i(ie,A,F)},Ae=(b,A,F,q=!1,ee=!1)=>{const{type:ie,props:re,ref:ue,children:he,dynamicChildren:S,shapeFlag:w,patchFlag:V,dirs:Q}=b;if(ue!=null&&qp(ue,null,F,b,!0),w&256){A.ctx.deactivate(b);return}const le=w&1&&Q,ge=!fd(b);let Se;if(ge&&(Se=re&&re.onVnodeBeforeUnmount)&&Ui(Se,A,b),w&6)j(b.component,F,q);else{if(w&128){b.suspense.unmount(F,q);return}le&&Ar(b,null,A,"beforeUnmount"),w&64?b.type.remove(b,A,F,ee,pe,q):S&&(ie!==Nt||V>0&&V&64)?ce(S,A,F,!1,!0):(ie===Nt&&V&384||!ee&&w&16)&&ce(he,A,F),q&&ze(b)}(ge&&(Se=re&&re.onVnodeUnmounted)||le)&&Nn(()=>{Se&&Ui(Se,A,b),le&&Ar(b,null,A,"unmounted")},F)},ze=b=>{const{type:A,el:F,anchor:q,transition:ee}=b;if(A===Nt){Y(F,q);return}if(A===bf){x(b);return}const ie=()=>{s(F),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(b.shapeFlag&1&&ee&&!ee.persisted){const{leave:re,delayLeave:ue}=ee,he=()=>re(F,ie);ue?ue(b.el,ie,he):he()}else ie()},Y=(b,A)=>{let F;for(;b!==A;)F=h(b),s(b),b=F;s(A)},j=(b,A,F)=>{const{bum:q,scope:ee,update:ie,subTree:re,um:ue}=b;q&&hd(q),ee.stop(),ie&&(ie.active=!1,Ae(re,b,A,F)),ue&&Nn(ue,A),Nn(()=>{b.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},ce=(b,A,F,q=!1,ee=!1,ie=0)=>{for(let re=ie;re<b.length;re++)Ae(b[re],A,F,q,ee)},ve=b=>b.shapeFlag&6?ve(b.component.subTree):b.shapeFlag&128?b.suspense.next():h(b.anchor||b.el),Ie=(b,A,F)=>{b==null?A._vnode&&Ae(A._vnode,null,null,!0):m(A._vnode||null,b,A,null,null,null,F),zw(),A._vnode=b},pe={p:m,um:Ae,m:oe,r:ze,mt:z,mc:W,pc:ne,pbc:y,n:ve,o:n};let Me,K;return e&&([Me,K]=e(pe)),{render:Ie,hydrate:Me,createApp:fI(Ie,Me)}}function Ir({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Ag(n,e,t=!1){const i=n.children,s=e.children;if(ke(i)&&ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Xs(s[r]),a.el=o.el),t||Ag(o,a))}}function gI(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const vI=n=>n.__isTeleport,$l=n=>n&&(n.disabled||n.disabled===""),ty=n=>typeof SVGElement!="undefined"&&n instanceof SVGElement,Xp=(n,e)=>{const t=n&&n.to;return Wt(t)?e?e(t):null:t},_I={__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:d,pbc:h,o:{insert:f,querySelector:p,createText:g,createComment:m}}=c,v=$l(e.props);let{shapeFlag:_,children:M,dynamicChildren:E}=e;if(n==null){const x=e.el=g(""),P=e.anchor=g("");f(x,t,i),f(P,t,i);const C=e.target=Xp(e.props,p),D=e.targetAnchor=g("");C&&(f(D,C),o=o||ty(C));const W=(L,y)=>{_&16&&u(M,L,y,s,r,o,a,l)};v?W(t,P):C&&W(C,D)}else{e.el=n.el;const x=e.anchor=n.anchor,P=e.target=n.target,C=e.targetAnchor=n.targetAnchor,D=$l(n.props),W=D?t:P,L=D?x:C;if(o=o||ty(P),E?(h(n.dynamicChildren,E,W,s,r,o,a),Ag(n,e,!0)):l||d(n,e,W,L,s,r,o,a,!1),v)D||wu(e,t,x,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const y=e.target=Xp(e.props,p);y&&wu(e,y,null,c,0)}else D&&wu(e,P,C,c,1)}},remove(n,e,t,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:h}=n;if(d&&r(u),(o||!$l(h))&&(r(c),a&16))for(let f=0;f<l.length;f++){const p=l[f];s(p,e,t,!0,!!p.dynamicChildren)}},move:wu,hydrate:yI};function wu(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,d=r===2;if(d&&i(o,e,t),(!d||$l(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],e,t,2);d&&i(a,e,t)}function yI(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Xp(e.props,l);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if($l(e.props))e.anchor=c(o(n),e,a(n),t,i,s,r),e.targetAnchor=d;else{e.anchor=o(n);let h=d;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(d,e,u,t,i,s,r)}}return e.anchor&&o(e.anchor)}const xI=_I,Nt=Symbol(void 0),Ig=Symbol(void 0),Ei=Symbol(void 0),bf=Symbol(void 0),jl=[];let yi=null;function tn(n=!1){jl.push(yi=n?null:[])}function bI(){jl.pop(),yi=jl[jl.length-1]||null}let pc=1;function ny(n){pc+=n}function lS(n){return n.dynamicChildren=pc>0?yi||ma:null,bI(),pc>0&&yi&&yi.push(n),n}function _a(n,e,t,i,s,r){return lS($i(n,e,t,i,s,r,!0))}function si(n,e,t,i,s){return lS(I(n,e,t,i,s,!0))}function Yp(n){return n?n.__v_isVNode===!0:!1}function Ur(n,e){return n.type===e.type&&n.key===e.key}const Sh="__vInternal",cS=({key:n})=>n!=null?n:null,pd=({ref:n,ref_key:e,ref_for:t})=>n!=null?Wt(n)||At(n)||je(n)?{i:ti,r:n,k:e,f:!!t}:n:null;function $i(n,e=null,t=null,i=0,s=null,r=n===Nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&cS(e),ref:e&&pd(e),scopeId:yh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Rg(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Wt(t)?8:16),pc>0&&!o&&yi&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yi.push(l),l}const I=wI;function wI(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Qw)&&(n=Ei),Yp(n)){const a=fr(n,e,!0);return t&&Rg(a,t),pc>0&&!r&&yi&&(a.shapeFlag&6?yi[yi.indexOf(n)]=a:yi.push(a)),a.patchFlag|=-2,a}if(NI(n)&&(n=n.__vccOpts),e){e=SI(e);let{class:a,style:l}=e;a&&!Wt(a)&&(e.class=hh(a)),Ht(l)&&(Iw(l)&&!ke(l)&&(l=un({},l)),e.style=lg(l))}const o=Wt(n)?1:W1(n)?128:vI(n)?64:Ht(n)?4:je(n)?2:0;return $i(n,e,t,i,s,o,r,!0)}function SI(n){return n?Iw(n)||Sh in n?un({},n):n:null}function fr(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?It(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&cS(a),ref:e&&e.ref?t&&s?ke(s)?s.concat(pd(e)):[s,pd(e)]:pd(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nt?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fr(n.ssContent),ssFallback:n.ssFallback&&fr(n.ssFallback),el:n.el,anchor:n.anchor}}function Ai(n=" ",e=0){return I(Ig,null,n,e)}function uS(n="",e=!1){return e?(tn(),si(Ei,null,n)):I(Ei,null,n)}function Wi(n){return n==null||typeof n=="boolean"?I(Ei):ke(n)?I(Nt,null,n.slice()):typeof n=="object"?Xs(n):I(Ig,null,String(n))}function Xs(n){return n.el===null||n.memo?n:fr(n)}function Rg(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Rg(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Sh in e)?e._ctx=ti:s===3&&ti&&(ti.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:ti},t=32):(e=String(e),i&64?(t=16,e=[Ai(e)]):t=8);n.children=e,n.shapeFlag|=t}function It(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=hh([e.class,i.class]));else if(s==="style")e.style=lg([e.style,i.style]);else if(fh(s)){const r=e[s],o=i[s];o&&r!==o&&!(ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Ui(n,e,t,i=null){ii(n,e,7,[t,i])}const EI=aS();let MI=0;function TI(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||EI,r={uid:MI++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:iS(i,s),emitsOptions:Ww(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=B1.bind(null,r),n.ce&&n.ce(r),r}let rn=null;const Eh=()=>rn||ti,Aa=n=>{rn=n,n.scope.on()},Yr=()=>{rn&&rn.scope.off(),rn=null};function dS(n){return n.vnode.shapeFlag&4}let mc=!1;function CI(n,e=!1){mc=e;const{props:t,children:i}=n.vnode,s=dS(n);aI(n,t,s,e),uI(n,i);const r=s?AI(n,e):void 0;return mc=!1,r}function AI(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Rw(new Proxy(n.ctx,tI));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?RI(n):null;Aa(n),mo();const r=ys(i,n,0,[n.props,s]);if(go(),Yr(),pw(r)){if(r.then(Yr,Yr),e)return r.then(o=>{iy(n,o,e)}).catch(o=>{gh(o,n,0)});n.asyncDep=r}else iy(n,r,e)}else hS(n,e)}function iy(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ht(e)&&(n.setupState=Ow(e)),hS(n,t)}let sy;function hS(n,e,t){const i=n.type;if(!n.render){if(!e&&sy&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=un(un({isCustomElement:r,delimiters:a},o),l);i.render=sy(s,c)}}n.render=i.render||wi}Aa(n),mo(),nI(n),go(),Yr()}function II(n){return new Proxy(n.attrs,{get(e,t){return Kn(n,"get","$attrs"),e[t]}})}function RI(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=II(n))},slots:n.slots,emit:n.emit,expose:e}}function Mh(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ow(Rw(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Td)return Td[t](n)}}))}const PI=/(?:^|[-_])(\w)/g,LI=n=>n.replace(PI,e=>e.toUpperCase()).replace(/[-_]/g,"");function fS(n){return je(n)&&n.displayName||n.name}function pS(n,e,t=!1){let i=fS(e);if(!i&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(i=s[1])}if(!i&&n&&n.parent){const s=r=>{for(const o in r)if(r[o]===e)return o};i=s(n.components||n.parent.type.components)||s(n.appContext.components)}return i?LI(i):t?"App":"Anonymous"}function NI(n){return je(n)&&"__vccOpts"in n}const G=(n,e)=>C1(n,e,mc);function li(n,e,t){const i=arguments.length;return i===2?Ht(e)&&!ke(e)?Yp(e)?I(n,null,[e]):I(n,e):I(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Yp(t)&&(t=[t]),I(n,e,t))}const DI="3.2.36",OI="http://www.w3.org/2000/svg",zr=typeof document!="undefined"?document:null,ry=zr&&zr.createElement("template"),kI={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?zr.createElementNS(OI,n):zr.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>zr.createTextNode(n),createComment:n=>zr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{ry.innerHTML=i?`<svg>${n}</svg>`:n;const a=ry.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function FI(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function BI(n,e,t){const i=n.style,s=Wt(t);if(t&&!s){for(const r in t)Kp(i,r,t[r]);if(e&&!Wt(e))for(const r in e)t[r]==null&&Kp(i,r,"")}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const oy=/\s*!important$/;function Kp(n,e,t){if(ke(t))t.forEach(i=>Kp(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=VI(n,e);oy.test(t)?n.setProperty(qa(i),t.replace(oy,""),"important"):n[i]=t}}const ay=["Webkit","Moz","ms"],wf={};function VI(n,e){const t=wf[e];if(t)return t;let i=ri(e);if(i!=="filter"&&i in n)return wf[e]=i;i=xr(i);for(let s=0;s<ay.length;s++){const r=ay[s]+i;if(r in n)return wf[e]=r}return e}const ly="http://www.w3.org/1999/xlink";function UI(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(ly,e.slice(6,e.length)):n.setAttributeNS(ly,e,t);else{const r=VA(e);t==null||r&&!hw(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function zI(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=hw(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}const[mS,HI]=(()=>{let n=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let Jp=0;const WI=Promise.resolve(),GI=()=>{Jp=0},$I=()=>Jp||(WI.then(GI),Jp=mS());function ps(n,e,t,i){n.addEventListener(e,t,i)}function jI(n,e,t,i){n.removeEventListener(e,t,i)}function qI(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=XI(e);if(i){const c=r[e]=YI(i,s);ps(n,a,c,l)}else o&&(jI(n,a,o,l),r[e]=void 0)}}const cy=/(?:Once|Passive|Capture)$/;function XI(n){let e;if(cy.test(n)){e={};let t;for(;t=n.match(cy);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[qa(n.slice(2)),e]}function YI(n,e){const t=i=>{const s=i.timeStamp||mS();(HI||s>=t.attached-1)&&ii(KI(i,t.value),e,5,[i])};return t.value=n,t.attached=$I(),t}function KI(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const uy=/^on[a-z]/,JI=(n,e,t,i,s=!1,r,o,a,l)=>{e==="class"?FI(n,i,s):e==="style"?BI(n,t,i):fh(e)?ug(e)||qI(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ZI(n,e,i,s))?zI(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),UI(n,e,i,s))};function ZI(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&uy.test(e)&&je(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||uy.test(e)&&Wt(t)?!1:e in n}const Ds="transition",vl="animation",Ki=(n,{slots:e})=>li(jw,vS(n),e);Ki.displayName="Transition";const gS={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},QI=Ki.props=un({},jw.props,gS),Rr=(n,e=[])=>{ke(n)?n.forEach(t=>t(...e)):n&&n(...e)},dy=n=>n?ke(n)?n.some(e=>e.length>1):n.length>1:!1;function vS(n){const e={};for(const T in n)T in gS||(e[T]=n[T]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,p=eR(s),g=p&&p[0],m=p&&p[1],{onBeforeEnter:v,onEnter:_,onEnterCancelled:M,onLeave:E,onLeaveCancelled:x,onBeforeAppear:P=v,onAppear:C=_,onAppearCancelled:D=M}=e,W=(T,X,k)=>{qs(T,X?u:a),qs(T,X?c:o),k&&k()},L=(T,X)=>{T._isLeaving=!1,qs(T,d),qs(T,f),qs(T,h),X&&X()},y=T=>(X,k)=>{const z=T?C:_,H=()=>W(X,T,k);Rr(z,[X,H]),hy(()=>{qs(X,T?l:r),us(X,T?u:a),dy(z)||fy(X,i,g,H)})};return un(e,{onBeforeEnter(T){Rr(v,[T]),us(T,r),us(T,o)},onBeforeAppear(T){Rr(P,[T]),us(T,l),us(T,c)},onEnter:y(!1),onAppear:y(!0),onLeave(T,X){T._isLeaving=!0;const k=()=>L(T,X);us(T,d),yS(),us(T,h),hy(()=>{!T._isLeaving||(qs(T,d),us(T,f),dy(E)||fy(T,i,m,k))}),Rr(E,[T,k])},onEnterCancelled(T){W(T,!1),Rr(M,[T])},onAppearCancelled(T){W(T,!0),Rr(D,[T])},onLeaveCancelled(T){L(T),Rr(x,[T])}})}function eR(n){if(n==null)return null;if(Ht(n))return[Sf(n.enter),Sf(n.leave)];{const e=Sf(n);return[e,e]}}function Sf(n){return lc(n)}function us(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function qs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function hy(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let tR=0;function fy(n,e,t,i){const s=n._endId=++tR,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=_S(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,h),r()},h=f=>{f.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,h)}function _S(n,e){const t=window.getComputedStyle(n),i=p=>(t[p]||"").split(", "),s=i(Ds+"Delay"),r=i(Ds+"Duration"),o=py(s,r),a=i(vl+"Delay"),l=i(vl+"Duration"),c=py(a,l);let u=null,d=0,h=0;e===Ds?o>0&&(u=Ds,d=o,h=r.length):e===vl?c>0&&(u=vl,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Ds:vl:null,h=u?u===Ds?r.length:l.length:0);const f=u===Ds&&/\b(transform|all)(,|$)/.test(t[Ds+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:f}}function py(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>my(t)+my(n[i])))}function my(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function yS(){return document.body.offsetHeight}const xS=new WeakMap,bS=new WeakMap,nR={name:"TransitionGroup",props:un({},QI,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Eh(),i=$w();let s,r;return Jw(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!aR(s[0].el,t.vnode.el,o))return;s.forEach(sR),s.forEach(rR);const a=s.filter(oR);yS(),a.forEach(l=>{const c=l.el,u=c.style;us(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,qs(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=rt(n),a=vS(o);let l=o.tag||Nt;s=r,r=e.default?Sg(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&fc(u,hc(u,a,i,t))}if(s)for(let c=0;c<s.length;c++){const u=s[c];fc(u,hc(u,a,i,t)),xS.set(u,u.el.getBoundingClientRect())}return I(l,null,r)}}},iR=nR;function sR(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function rR(n){bS.set(n,n.el.getBoundingClientRect())}function oR(n){const e=xS.get(n),t=bS.get(n),i=e.left-t.left,s=e.top-t.top;if(i||s){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",n}}function aR(n,e,t){const i=n.cloneNode();n._vtc&&n._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),t.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:r}=_S(i);return s.removeChild(i),r}const pr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ke(e)?t=>hd(e,t):e};function lR(n){n.target.composing=!0}function gy(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vy={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n._assign=pr(s);const r=i||s.props&&s.props.type==="number";ps(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=lc(a)),n._assign(a)}),t&&ps(n,"change",()=>{n.value=n.value.trim()}),e||(ps(n,"compositionstart",lR),ps(n,"compositionend",gy),ps(n,"change",gy))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n._assign=pr(r),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(s||n.type==="number")&&lc(n.value)===e))return;const o=e==null?"":e;n.value!==o&&(n.value=o)}},cR={deep:!0,created(n,e,t){n._assign=pr(t),ps(n,"change",()=>{const i=n._modelValue,s=Ia(n),r=n.checked,o=n._assign;if(ke(i)){const a=cg(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(ja(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(wS(n,r))})},mounted:_y,beforeUpdate(n,e,t){n._assign=pr(t),_y(n,e,t)}};function _y(n,{value:e,oldValue:t},i){n._modelValue=e,ke(e)?n.checked=cg(e,i.props.value)>-1:ja(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=no(e,wS(n,!0)))}const uR={created(n,{value:e},t){n.checked=no(e,t.props.value),n._assign=pr(t),ps(n,"change",()=>{n._assign(Ia(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n._assign=pr(i),e!==t&&(n.checked=no(e,i.props.value))}},dR={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=ja(e);ps(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?lc(Ia(o)):Ia(o));n._assign(n.multiple?s?new Set(r):r:r[0])}),n._assign=pr(i)},mounted(n,{value:e}){yy(n,e)},beforeUpdate(n,e,t){n._assign=pr(t)},updated(n,{value:e}){yy(n,e)}};function yy(n,e){const t=n.multiple;if(!(t&&!ke(e)&&!ja(e))){for(let i=0,s=n.options.length;i<s;i++){const r=n.options[i],o=Ia(r);if(t)ke(e)?r.selected=cg(e,o)>-1:r.selected=e.has(o);else if(no(Ia(r),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ia(n){return"_value"in n?n._value:n.value}function wS(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const SS={created(n,e,t){Su(n,e,t,null,"created")},mounted(n,e,t){Su(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){Su(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){Su(n,e,t,i,"updated")}};function hR(n,e){switch(n){case"SELECT":return dR;case"TEXTAREA":return vy;default:switch(e){case"checkbox":return cR;case"radio":return uR;default:return vy}}}function Su(n,e,t,i,s){const o=hR(n.tagName,t.props&&t.props.type)[s];o&&o(n,e,t,i)}const Xc={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):_l(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),_l(n,!0),i.enter(n)):i.leave(n,()=>{_l(n,!1)}):_l(n,e))},beforeUnmount(n,{value:e}){_l(n,e)}};function _l(n,e){n.style.display=e?n._vod:"none"}const fR=un({patchProp:JI},kI);let xy;function pR(){return xy||(xy=pI(fR))}const mR=(...n)=>{const e=pR().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=gR(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gR(n){return Wt(n)?document.querySelector(n):n}var Yc=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t};const vR={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},_R={component:n=>li(kS,Qe(U({},n),{class:"mdi"}))};function by(n,e,t){yR(n,e),e.set(n,t)}function yR(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function xR(n,e,t){var i=ES(n,e,"set");return bR(n,i,t),t}function bR(n,e,t){if(e.set)e.set.call(n,t);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=t}}function Pr(n,e){var t=ES(n,e,"get");return wR(n,t)}function ES(n,e,t){if(!e.has(n))throw new TypeError("attempted to "+t+" private field on non-instance");return e.get(n)}function wR(n,e){return e.get?e.get.call(n):e.value}function MS(n,e,t){const i=e.length-1;if(i<0)return n===void 0?t:n;for(let s=0;s<i;s++){if(n==null)return t;n=n[e[s]]}return n==null||n[e[i]]===void 0?t:n[e[i]]}function Pg(n,e){if(n===e)return!0;if(n instanceof Date&&e instanceof Date&&n.getTime()!==e.getTime()||n!==Object(n)||e!==Object(e))return!1;const t=Object.keys(n);return t.length!==Object.keys(e).length?!1:t.every(i=>Pg(n[i],e[i]))}function Zp(n,e,t){return n==null||!e||typeof e!="string"?t:n[e]!==void 0?n[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),MS(n,e.split("."),t))}function ms(n,e,t){if(e==null)return n===void 0?t:n;if(n!==Object(n))return t;if(typeof e=="string")return Zp(n,e,t);if(Array.isArray(e))return MS(n,e,t);if(typeof e!="function")return t;const i=e(n,t);return typeof i=="undefined"?t:i}function SR(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:n},(t,i)=>e+i)}function Ge(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(n==null||n===""))return isNaN(+n)?String(n):isFinite(+n)?`${Number(n)}${e}`:void 0}function Qp(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)}function ER(n){return n==null?void 0:n.$el}const wy=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function o6(n){return Object.keys(n)}function _o(n,e){const t=Object.create(null),i=Object.create(null);for(const s in n)e.some(r=>r instanceof RegExp?r.test(s):r===s)?t[s]=n[s]:i[s]=n[s];return[t,i]}function Lg(n){return _o(n,["class","style","id",/^data-/])}function Kr(n){return n==null?[]:Array.isArray(n)?n:[n]}function em(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(t,n))}function mr(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const i={};for(const s in n)i[s]=n[s];for(const s in e){const r=n[s],o=e[s];if(Qp(r)&&Qp(o)){i[s]=mr(r,o,t);continue}if(Array.isArray(r)&&Array.isArray(o)&&t){i[s]=t(r,o);continue}i[s]=o}return i}function TS(n){return n.map(e=>e.type===Nt?TS(e.children):e).flat()}function Ng(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function ql(n,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(t=>ql(n,t)).flat(1);if(Array.isArray(e.children))return e.children.map(t=>ql(n,t)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(n))return[e.component];if(e.component.subTree)return ql(n,e.component.subTree).flat(1)}return[]}var Eu=new WeakMap,Po=new WeakMap;class MR{constructor(e){by(this,Eu,{writable:!0,value:[]}),by(this,Po,{writable:!0,value:0}),this.size=e}push(e){Pr(this,Eu)[Pr(this,Po)]=e,xR(this,Po,(Pr(this,Po)+1)%this.size)}values(){return Pr(this,Eu).slice(Pr(this,Po)).concat(Pr(this,Eu).slice(0,Pr(this,Po)))}}function TR(n){return xg(vn({value:G(n)}).value)}function tm(n,e){return n.includes(e)}const CS=["top","bottom"],CR=["start","end","left","right"];function nm(n,e){let[t,i]=n.split(" ");return i||(i=tm(CS,t)?"start":tm(CR,t)?"top":"center"),{side:Sy(t,e),align:Sy(i,e)}}function Sy(n,e){return n==="start"?e?"right":"left":n==="end"?e?"left":"right":n}function Ef(n){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[n.side],align:n.align}}function Mf(n){return{side:n.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[n.align]}}function Ey(n){return{side:n.align,align:n.side}}function My(n){return tm(CS,n.side)?"y":"x"}class ya{constructor(e){let{x:t,y:i,width:s,height:r}=e;this.x=t,this.y=i,this.width=s,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ty(n,e){return{x:{before:Math.max(0,e.left-n.left),after:Math.max(0,n.right-e.right)},y:{before:Math.max(0,e.top-n.top),after:Math.max(0,n.bottom-e.bottom)}}}function Dg(n){const e=n.getBoundingClientRect(),t=getComputedStyle(n),i=t.transform;if(i){let s,r,o,a,l;if(i.startsWith("matrix3d("))s=i.slice(9,-1).split(/, /),r=+s[0],o=+s[5],a=+s[12],l=+s[13];else if(i.startsWith("matrix("))s=i.slice(7,-1).split(/, /),r=+s[0],o=+s[3],a=+s[4],l=+s[5];else return new ya(e);const c=t.transformOrigin,u=e.x-a-(1-r)*parseFloat(c),d=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),h=r?e.width/r:n.offsetWidth+1,f=o?e.height/o:n.offsetHeight+1;return new ya({x:u,y:d,width:h,height:f})}else return new ya(e)}function AS(n,e,t){if(t&&(e={_isVue:!0,$parent:t,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(n))return;e.$_alreadyWarned.push(n)}return`[Vuetify] ${n}`+(e?RR(e):"")}function Jr(n,e,t){const i=AS(n,e,t);i!=null&&console.warn(i)}function im(n,e,t){const i=AS(n,e,t);i!=null&&console.error(i)}const AR=/(?:^|[-_])(\w)/g,IR=n=>n.replace(AR,e=>e.toUpperCase()).replace(/[-_]/g,"");function Tf(n,e){if(n.$root===n)return"<Root>";const t=typeof n=="function"&&n.cid!=null?n.options:n._isVue?n.$options||n.constructor.options:n||{};let i=t.name||t._componentTag;const s=t.__file;if(!i&&s){const r=s.match(/([^/\\]+)\.vue$/);i=r==null?void 0:r[1]}return(i?`<${IR(i)}>`:"<Anonymous>")+(s&&e!==!1?` at ${s}`:"")}function RR(n){if(n._isVue&&n.$parent){const e=[];let t=0;for(;n;){if(e.length>0){const i=e[e.length-1];if(i.constructor===n.constructor){t++,n=n.$parent;continue}else t>0&&(e[e.length-1]=[i,t],t=0)}e.push(n),n=n.$parent}return`

found in

`+e.map((i,s)=>`${s===0?"---> ":" ".repeat(5+s*2)}${Array.isArray(i)?`${Tf(i[0])}... (${i[1]} recursive calls)`:Tf(i)}`).join(`
`)}else return`

(found in ${Tf(n)})`}const PR=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],LR=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,NR=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],DR=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function IS(n){const e=Array(3),t=LR,i=PR;for(let s=0;s<3;++s)e[s]=Math.round(em(t(i[s][0]*n[0]+i[s][1]*n[1]+i[s][2]*n[2]))*255);return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function Og(n){const e=[0,0,0],t=DR,i=NR,s=t((n>>16&255)/255),r=t((n>>8&255)/255),o=t((n>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*s+i[a][1]*r+i[a][2]*o;return e}const Ad=.20689655172413793,OR=n=>n>Ad**3?Math.cbrt(n):n/(3*Ad**2)+4/29,kR=n=>n>Ad?n**3:3*Ad**2*(n-4/29);function RS(n){const e=OR,t=e(n[1]);return[116*t-16,500*(e(n[0]/.95047)-t),200*(t-e(n[2]/1.08883))]}function PS(n){const e=kR,t=(n[0]+16)/116;return[e(t+n[1]/500)*.95047,e(t),e(t-n[2]/200)*1.08883]}function Cy(n){return!!n&&/^(#|var\(--|(rgb|hsl)a?\()/.test(n)}function Id(n){let e;if(typeof n=="number")e=n;else if(typeof n=="string"){let t=n.startsWith("#")?n.substring(1):n;t.length===3&&(t=t.split("").map(i=>i+i).join("")),t.length!==6&&Jr(`'${n}' is not a valid rgb color`),e=parseInt(t,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${n==null?n:n.constructor.name} instead`);return e<0?(Jr(`Colors cannot be negative: '${n}'`),e=0):(e>16777215||isNaN(e))&&(Jr(`'${n}' is not a valid rgb color`),e=16777215),e}function FR(n){let e=n.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function LS(n){const e=Id(n);return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255}}function BR(n,e){const t=RS(Og(n));return t[0]=t[0]+e*10,IS(PS(t))}function VR(n,e){const t=RS(Og(n));return t[0]=t[0]-e*10,IS(PS(t))}function UR(n){const e=Id(n);return Og(e)[1]}const Rd=Symbol.for("vuetify:defaults");function zR(n){return Ee(n!=null?n:{})}function NS(){const n=_t(Rd);if(!n)throw new Error("[Vuetify] Could not find defaults instance");return n}function Ya(n,e){const t=NS(),i=Ee(n),s=G(()=>{const r=Si(e==null?void 0:e.scoped),o=Si(e==null?void 0:e.reset),a=Si(e==null?void 0:e.root);let l=mr(i.value,{prev:t.value});if(r)return l;if(o||a){const c=Number(o||1/0);for(let u=0;u<=c&&l.prev;u++)l=l.prev;return l}return mr(l.prev,l)});return ln(Rd,s),s}function HR(n,e){var t,i;return((t=n.props)==null?void 0:t.hasOwnProperty(e))||((i=n.props)==null?void 0:i.hasOwnProperty(Ng(e)))}const qe=function(e){var t;if(e._setup=(t=e._setup)!=null?t:e.setup,!e.name)return Jr("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){var i;e.props=(i=e.props)!=null?i:{},e.props._as=String,e.setup=function(r,o){const a=Eh(),l=NS(),c=Nw(),u=Aw(U({},rt(r)));br(()=>{var f;const p=l.value.global,g=l.value[(f=r._as)!=null?f:e.name];if(g){const _=Object.entries(g).filter(M=>{let[E]=M;return E.startsWith("V")});_.length&&(c.value=Object.fromEntries(_))}for(const _ of Object.keys(r)){let M;if(HR(a.vnode,_))M=r[_];else{var m,v;M=(m=(v=g==null?void 0:g[_])!=null?v:p==null?void 0:p[_])!=null?m:r[_]}u[_]!==M&&(u[_]=M)}});const d=e._setup(u,o);let h;return ct(c,(f,p)=>{!f&&h?h.stop():f&&!p&&(h=$c(),h.run(()=>{Ya(f)}))},{immediate:!0}),d}}return e};function zn(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(n?qe:qc)(e)}function yo(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return qe({name:t!=null?t:xr(ri(n.replace(/__/g,"-"))),props:{tag:{type:String,default:e}},setup(i,s){let{slots:r}=s;return()=>{var o;return li(i.tag,{class:n},(o=r.default)==null?void 0:o.call(r))}}})}function DS(n){if(typeof n.getRootNode!="function"){for(;n.parentNode;)n=n.parentNode;return n!==document?null:document}const e=n.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}const Pd="cubic-bezier(0.4, 0, 0.2, 1)",WR="cubic-bezier(0.0, 0, 0.2, 1)",GR="cubic-bezier(0.4, 0, 1, 1)";function Hn(n,e){const t=Eh();if(!t)throw new Error(`[Vuetify] ${n} ${e||"must be called from inside a setup function"}`);return t}function As(){var n;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";return Ng((n=Hn(e).type)==null?void 0:n.name)}let OS=0,md=new WeakMap;function ci(){const n=Hn("getUid");if(md.has(n))return md.get(n);{const e=OS++;return md.set(n,e),e}}ci.reset=()=>{OS=0,md=new WeakMap};function $R(n){for(;n;){if(kg(n))return n;n=n.parentElement}return document.scrollingElement}function Ld(n){const e=[];for(;n;)kg(n)&&e.push(n),n=n.parentElement;return e}function kg(n){if(!n||n.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(n);return e.overflowY==="scroll"||e.overflowY==="auto"&&n.scrollHeight>n.clientHeight}const Bt=typeof window!="undefined",Fg=Bt&&"IntersectionObserver"in window,jR=Bt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),sm=Bt&&CSS.supports("selector(:focus-visible)");function qR(n){for(;n;){if(window.getComputedStyle(n).position==="fixed")return!0;n=n.offsetParent}return!1}function ot(n,e){return t=>Object.keys(n).reduce((i,s)=>{const o=typeof n[s]=="object"&&n[s]!=null&&!Array.isArray(n[s])?n[s]:{type:n[s]};return t&&s in t?i[s]=Qe(U({},o),{default:t[s]}):i[s]=o,e&&(i[s].source=e),i},{})}function Ye(n){const e=Hn("useRender");e.render=n}const Dt=[String,Function,Object],rm=Symbol.for("vuetify:icons"),Th=ot({icon:{type:Dt,required:!0},tag:{type:String,required:!0}},"icon"),XR=qe({name:"VComponentIcon",props:Th(),setup(n){return()=>I(n.tag,null,{default:()=>[I(n.icon,null,null)]})}}),YR=qe({name:"VSvgIcon",inheritAttrs:!1,props:Th(),setup(n,e){let{attrs:t}=e;return()=>I(n.tag,It(t,{style:null}),{default:()=>[I("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[I("path",{d:n.icon},null)])]})}}),KR=qe({name:"VLigatureIcon",props:Th(),setup(n){return()=>I(n.tag,null,{default:()=>[n.icon]})}}),kS=qe({name:"VClassIcon",props:Th(),setup(n){return()=>I(n.tag,{class:n.icon},null)}}),JR={svg:{component:YR},class:{component:kS}};function ZR(n){return mr({defaultSet:"mdi",sets:Qe(U({},JR),{mdi:_R}),aliases:vR},n)}const QR=n=>{const e=_t(rm);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:G(()=>{const i=At(n)?n.value:n.icon;if(!i)throw new Error("Icon value is undefined or null");let s=i;if(typeof i=="string"&&i.includes("$")){var r;s=(r=e.aliases)==null?void 0:r[i.slice(i.indexOf("$")+1)]}if(!s)throw new Error(`Could not find aliased icon "${i}"`);if(typeof s!="string")return{component:XR,icon:s};const o=Object.keys(e.sets).find(c=>typeof s=="string"&&s.startsWith(`${c}:`)),a=o?s.slice(o.length+1):s;return{component:e.sets[o!=null?o:e.defaultSet].component,icon:a}})}},Ay=["x-small","small","default","large","x-large"],Ch=ot({size:{type:[String,Number],default:"default"}},"size");function Ah(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As();const t=G(()=>Ay.includes(n.size)?`${e}--size-${n.size}`:void 0),i=G(()=>!Ay.includes(n.size)&&n.size?{width:Ge(n.size),height:Ge(n.size)}:void 0);return{sizeClasses:t,sizeStyles:i}}const Yt=ot({tag:{type:String,default:"div"}},"tag"),Lo=2.4,Iy=.2126729,Ry=.7151522,Py=.072175,eP=.55,tP=.58,nP=.57,iP=.62,Mu=.03,Ly=1.45,sP=5e-4,rP=1.25,oP=1.25,Ny=.078,Dy=12.82051282051282,Tu=.06,Oy=.001;function ky(n,e){const t=((n>>16&255)/255)**Lo,i=((n>>8&255)/255)**Lo,s=((n>>0&255)/255)**Lo,r=((e>>16&255)/255)**Lo,o=((e>>8&255)/255)**Lo,a=((e>>0&255)/255)**Lo;let l=t*Iy+i*Ry+s*Py,c=r*Iy+o*Ry+a*Py;if(l<=Mu&&(l+=(Mu-l)**Ly),c<=Mu&&(c+=(Mu-c)**Ly),Math.abs(c-l)<sP)return 0;let u;if(c>l){const d=(c**eP-l**tP)*rP;u=d<Oy?0:d<Ny?d-d*Dy*Tu:d-Tu}else{const d=(c**iP-l**nP)*oP;u=d>-Oy?0:d>-Ny?d-d*Dy*Tu:d+Tu}return u*100}const Nd=Symbol.for("vuetify:theme"),yn=ot({theme:String},"theme"),yl={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#C2C2C2"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#B7B7B7"}}}};function aP(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:yl;if(!n)return Qe(U({},yl),{isDisabled:!0});const e={};for(const[r,o]of Object.entries((t=n.themes)!=null?t:{})){var t,i,s;const a=o.dark?(i=yl.themes)==null?void 0:i.dark:(s=yl.themes)==null?void 0:s.light;e[r]=mr(a,o)}return mr(yl,Qe(U({},n),{themes:e}))}function lP(n,e){const t=n._context.provides.usehead,i=vn(aP(e)),s=Ee(i.defaultTheme),r=Ee(i.themes),o=G(()=>{const u={};for(const[d,h]of Object.entries(r.value)){const f=u[d]=Qe(U({},h),{colors:U({},h.colors)});if(i.variations)for(const p of i.variations.colors){const g=f.colors[p];for(const m of["lighten","darken"]){const v=m==="lighten"?BR:VR;for(const _ of SR(i.variations[m],1))f.colors[`${p}-${m}-${_}`]=FR(v(Id(g),_))}}for(const p of Object.keys(f.colors)){if(/on-[a-z]/.test(p)||f.colors[`on-${p}`])continue;const g=`on-${p}`,m=Id(f.colors[p]),v=Math.abs(ky(0,m)),_=Math.abs(ky(16777215,m));f.colors[g]=_>Math.min(v,50)?"#fff":"#000"}}return u}),a=G(()=>o.value[s.value]),l=G(()=>{const u=[];a.value.dark&&No(u,":root",["color-scheme: dark"]);for(const[h,f]of Object.entries(o.value)){const{variables:p,dark:g}=f;No(u,`.v-theme--${h}`,[`color-scheme: ${g?"dark":"normal"}`,...cP(f),...Object.keys(p).map(m=>{const v=p[m],_=typeof v=="string"&&v.startsWith("#")?LS(v):void 0,M=_?`${_.r}, ${_.g}, ${_.b}`:void 0;return`--v-${m}: ${M!=null?M:v}`})])}const d=new Set(Object.values(o.value).flatMap(h=>Object.keys(h.colors)));for(const h of d)/on-[a-z]/.test(h)?No(u,`.${h}`,[`color: rgb(var(--v-theme-${h})) !important`]):(No(u,`.bg-${h}`,[`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`,`background: rgb(var(--v-theme-${h})) !important`,`color: rgb(var(--v-theme-on-${h})) !important`]),No(u,`.text-${h}`,[`color: rgb(var(--v-theme-${h})) !important`]),No(u,`.border-${h}`,[`--v-border-color: var(--v-theme-${h})`]));return u.map((h,f)=>f===0?h:`    ${h}`).join("")});if(t)t.addHeadObjs(G(()=>({style:[{children:l.value,type:"text/css",id:"vuetify-theme-stylesheet"}]}))),Bt&&br(()=>t.updateDOM());else{let d=function(){if(!i.isDisabled){if(typeof document!="undefined"&&!u){const h=document.createElement("style");h.type="text/css",h.id="vuetify-theme-stylesheet",u=h,document.head.appendChild(u)}u&&(u.innerHTML=l.value)}},u=Bt?document.getElementById("vuetify-theme-stylesheet"):null;ct(l,d,{immediate:!0})}const c=G(()=>i.isDisabled?void 0:`v-theme--${s.value}`);return{isDisabled:i.isDisabled,name:s,themes:r,current:a,computedThemes:o,themeClasses:c,styles:l,global:{name:s,current:a}}}function Pn(n){Hn("provideTheme");const e=_t(Nd,null);if(!e)throw new Error("Could not find Vuetify theme injection");const t=G(()=>{var r;return(r=n.theme)!=null?r:e==null?void 0:e.name.value}),i=G(()=>e.isDisabled?void 0:`v-theme--${t.value}`),s=Qe(U({},e),{name:t,themeClasses:i});return ln(Nd,s),s}function No(n,e,t){n.push(`${e} {
`,...t.map(i=>`  ${i};
`),`}
`)}function cP(n){const e=n.dark?2:1,t=n.dark?1:2,i=[];for(const[s,r]of Object.entries(n.colors)){const o=LS(r);i.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||i.push(`--v-theme-${s}-overlay-multiplier: ${UR(r)>.18?e:t}`)}return i}function Bg(n){const e=G(()=>Cy(n.value.background)),t=G(()=>Cy(n.value.text)),i=G(()=>{const r=[];return n.value.background&&!e.value&&r.push(`bg-${n.value.background}`),n.value.text&&!t.value&&r.push(`text-${n.value.text}`),r}),s=G(()=>{const r={};return n.value.background&&e.value&&(r.backgroundColor=n.value.background),n.value.text&&t.value&&(r.color=n.value.text,r.caretColor=n.value.text),r});return{colorClasses:i,colorStyles:s}}function Ss(n,e){const t=G(()=>({text:At(n)?n.value:e?n[e]:null})),{colorClasses:i,colorStyles:s}=Bg(t);return{textColorClasses:i,textColorStyles:s}}function Es(n,e){const t=G(()=>({background:At(n)?n.value:e?n[e]:null})),{colorClasses:i,colorStyles:s}=Bg(t);return{backgroundColorClasses:i,backgroundColorStyles:s}}const FS=ot(U(U(U({color:String,start:Boolean,end:Boolean,icon:Dt},Ch()),Yt({tag:"i"})),yn()),"v-icon"),Sn=qe({name:"VIcon",props:FS(),setup(n,e){let{attrs:t,slots:i}=e,s;i.default&&(s=G(()=>{var u,d;const h=(u=i.default)==null?void 0:u.call(i);if(!!h)return(d=TS(h).filter(f=>f.children&&typeof f.children=="string")[0])==null?void 0:d.children}));const{themeClasses:r}=Pn(n),{iconData:o}=QR(s||n),{sizeClasses:a}=Ah(n),{textColorClasses:l,textColorStyles:c}=Ss(Ke(n,"color"));return Ye(()=>I(o.value.component,{tag:n.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":n.start,"v-icon--end":n.end}],style:[a.value?void 0:{fontSize:Ge(n.size),height:Ge(n.size),width:Ge(n.size)},c.value],"aria-hidden":"true"},null)),{}}});const uP=qe({name:"VDivider",props:U({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean},yn()),setup(n,e){let{attrs:t}=e;const{themeClasses:i}=Pn(n),{backgroundColorClasses:s,backgroundColorStyles:r}=Es(Ke(n,"color")),o=G(()=>{const a={};return n.length&&(a[n.vertical?"maxHeight":"maxWidth"]=Ge(n.length)),n.thickness&&(a[n.vertical?"borderRightWidth":"borderTopWidth"]=Ge(n.thickness)),a});return Ye(()=>I("hr",{class:[{"v-divider":!0,"v-divider--inset":n.inset,"v-divider--vertical":n.vertical},i.value,s.value],style:[o.value,r.value],"aria-orientation":!t.role||t.role==="separator"?n.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),qi=qc({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(n,e){let{slots:t}=e;const{defaults:i,reset:s,root:r,scoped:o}=xg(n);return Ya(i,{reset:s,root:r,scoped:o}),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}});function fn(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",t=arguments.length>2?arguments[2]:void 0;return qe({name:n,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:t},origin:{type:String,default:e}},setup(i,s){let{slots:r}=s;return()=>{const o=i.group?iR:Ki;return li(o,{name:n,mode:i.mode,onBeforeEnter(a){a.style.transformOrigin=i.origin},onLeave(a){if(i.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:d}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${d}px`}i.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(i.leaveAbsolute&&a!=null&&a._transitionInitialStyles){const{position:l,top:c,left:u,width:d,height:h}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=d||"",a.style.height=h||""}}},r.default)}}})}function BS(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return qe({name:n,props:{mode:{type:String,default:t}},setup(i,s){let{slots:r}=s;return()=>li(Ki,U({name:n},e),r.default)}})}function VS(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",i=ri(`offset-${t}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[t]:o.style[t]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[i]}px`;o.style[t]="0",o.offsetHeight,o.style.transition=a.transition,n&&o._parent&&o._parent.classList.add(n),requestAnimationFrame(()=>{o.style[t]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[t]:o.style[t]},o.style.overflow="hidden",o.style[t]=`${o[i]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(o){n&&o._parent&&o._parent.classList.remove(n),r(o)}function r(o){const a=o._initialStyle[t];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[t]=a),delete o._initialStyle}}const US=qe({name:"VDialogTransition",props:{target:Object},setup(n,e){let{slots:t}=e;const i={onBeforeEnter(s){s.style.pointerEvents="none",s.style.visibility="hidden"},async onEnter(s,r){var o;await new Promise(f=>requestAnimationFrame(f)),await new Promise(f=>requestAnimationFrame(f)),s.style.visibility="";const{x:a,y:l,sx:c,sy:u,speed:d}=By(n.target,s),h=s.animate([{transform:`translate(${a}px, ${l}px) scale(${c}, ${u})`,opacity:0},{transform:""}],{duration:225*d,easing:WR});(o=Fy(s))==null||o.forEach(f=>{f.animate([{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*d,easing:Pd})}),h.finished.then(()=>r())},onAfterEnter(s){s.style.removeProperty("pointer-events")},onBeforeLeave(s){s.style.pointerEvents="none"},async onLeave(s,r){var o;await new Promise(f=>requestAnimationFrame(f));const{x:a,y:l,sx:c,sy:u,speed:d}=By(n.target,s);s.animate([{transform:""},{transform:`translate(${a}px, ${l}px) scale(${c}, ${u})`,opacity:0}],{duration:125*d,easing:GR}).finished.then(()=>r()),(o=Fy(s))==null||o.forEach(f=>{f.animate([{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:Pd})})},onAfterLeave(s){s.style.removeProperty("pointer-events")}};return()=>n.target?I(Ki,It({name:"dialog-transition"},i,{css:!1}),t):I(Ki,{name:"dialog-transition"},t)}});function Fy(n){var e;const t=(e=n.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return t&&[...t]}function By(n,e){const t=n.getBoundingClientRect(),i=Dg(e),[s,r]=getComputedStyle(e).transformOrigin.split(" ").map(v=>parseFloat(v)),[o,a]=getComputedStyle(e).getPropertyValue("--v-overlay-anchor-origin").split(" ");let l=t.left+t.width/2;o==="left"||a==="left"?l-=t.width/2:(o==="right"||a==="right")&&(l+=t.width/2);let c=t.top+t.height/2;o==="top"||a==="top"?c-=t.height/2:(o==="bottom"||a==="bottom")&&(c+=t.height/2);const u=t.width/i.width,d=t.height/i.height,h=Math.max(1,u,d),f=u/h,p=d/h,g=i.width*i.height/(window.innerWidth*window.innerHeight),m=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:l-(s+i.left),y:c-(r+i.top),sx:f,sy:p,speed:m}}fn("carousel-transition");fn("carousel-reverse-transition");fn("tab-transition");fn("tab-reverse-transition");fn("menu-transition");fn("fab-transition","center center","out-in");fn("dialog-bottom-transition");fn("dialog-top-transition");const a6=fn("fade-transition");fn("scale-transition");fn("scroll-x-transition");fn("scroll-x-reverse-transition");fn("scroll-y-transition");fn("scroll-y-reverse-transition");fn("slide-x-transition");const dP=fn("slide-x-reverse-transition"),zS=fn("slide-y-transition");fn("slide-y-reverse-transition");const HS=BS("expand-transition",VS()),hP=BS("expand-x-transition",VS("",!0)),om=Symbol.for("vuetify:list");function WS(){const n=_t(om,{hasPrepend:Ee(!1),updateHasPrepend:()=>null}),e={hasPrepend:Ee(!1),updateHasPrepend:t=>{t&&(e.hasPrepend.value=t)}};return ln(om,e),n}function GS(){return _t(om,null)}const Ka=ot({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:n=>n!==!0}},"transition"),tr=(n,e)=>{var t;let{slots:i}=e;const l=n,{transition:s}=l,r=Vi(l,["transition"]);if(!s||typeof s=="boolean")return(t=i.default)==null?void 0:t.call(i);const c=typeof s=="object"?s:{},{component:o=Ki}=c,a=Vi(c,["component"]);return li(o,It(typeof s=="string"?{name:s}:a,r),i)};function dn(n,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:l=>l,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:l=>l;const r=Hn("useProxiedModel"),o=G(()=>{var l,c;return!!(typeof n[e]!="undefined"&&(r!=null&&(l=r.vnode.props)!=null&&l.hasOwnProperty(e)||r!=null&&(c=r.vnode.props)!=null&&c.hasOwnProperty(Ng(e))))}),a=Ee(i(n[e]));return G({get(){return o.value?i(n[e]):a.value},set(l){(o.value?i(n[e]):a.value)!==l&&(a.value=l,r==null||r.emit(`update:${e}`,s(l)))}})}const fP={open:n=>{let{id:e,value:t,opened:i,parents:s}=n;if(t){const r=new Set;r.add(e);let o=s.get(e);for(;o!=null;)r.add(o),o=s.get(o);return r}else return i.delete(e),i},select:()=>null},$S={open:n=>{let{id:e,value:t,opened:i,parents:s}=n;if(t){let r=s.get(e);for(i.add(e);r!=null&&r!==e;)i.add(r),r=s.get(r);return i}else i.delete(e);return i},select:()=>null},pP={open:$S.open,select:n=>{let{id:e,value:t,opened:i,parents:s}=n;if(!t)return i;const r=[];let o=s.get(e);for(;o!=null;)r.push(o),o=s.get(o);return new Set(r)}},Vg=n=>{const e={select:t=>{let{id:i,value:s,selected:r}=t;if(n&&!s){const o=Array.from(r.entries()).reduce((a,l)=>{let[c,u]=l;return u==="on"?[...a,c]:a},[]);if(o.length===1&&o[0]===i)return r}return r.set(i,s?"on":"off"),r},in:(t,i,s)=>{let r=new Map;for(const o of t||[])r=e.select({id:o,value:!0,selected:new Map(r),children:i,parents:s});return r},out:t=>{const i=[];for(const[s,r]of t.entries())r==="on"&&i.push(s);return i}};return e},jS=n=>{const e=Vg(n);return{select:i=>{let l=i,{selected:s,id:r}=l,o=Vi(l,["selected","id"]);const a=s.has(r)?new Map([[r,s.get(r)]]):new Map;return e.select(Qe(U({},o),{id:r,selected:a}))},in:(i,s,r)=>{let o=new Map;return i!=null&&i.length&&(o=e.in(i.slice(0,1),s,r)),o},out:(i,s,r)=>e.out(i,s,r)}},mP=n=>{const e=Vg(n);return{select:i=>{let l=i,{id:s,selected:r,children:o}=l,a=Vi(l,["id","selected","children"]);return o.has(s)?r:e.select(U({id:s,selected:r,children:o},a))},in:e.in,out:e.out}},gP=n=>{const e=jS(n);return{select:i=>{let l=i,{id:s,selected:r,children:o}=l,a=Vi(l,["id","selected","children"]);return o.has(s)?r:e.select(U({id:s,selected:r,children:o},a))},in:e.in,out:e.out}},vP=n=>{const e={select:t=>{let{id:i,value:s,selected:r,children:o,parents:a}=t;const l=new Map(r),c=[i];for(;c.length;){const d=c.shift();r.set(d,s?"on":"off"),o.has(d)&&c.push(...o.get(d))}let u=a.get(i);for(;u;){const d=o.get(u),h=d.every(p=>r.get(p)==="on"),f=d.every(p=>!r.has(p)||r.get(p)==="off");r.set(u,h?"on":f?"off":"indeterminate"),u=a.get(u)}return n&&!s&&Array.from(r.entries()).reduce((h,f)=>{let[p,g]=f;return g==="on"?[...h,p]:h},[]).length===0?l:r},in:(t,i,s)=>{let r=new Map;for(const o of t||[])r=e.select({id:o,value:!0,selected:new Map(r),children:i,parents:s});return r},out:(t,i)=>{const s=[];for(const[r,o]of t.entries())o==="on"&&!i.has(r)&&s.push(r);return s}};return e},gc=Symbol.for("vuetify:nested"),qS={id:Ee(),root:{register:()=>null,unregister:()=>null,parents:Ee(new Map),children:Ee(new Map),open:()=>null,select:()=>null,opened:Ee(new Set),selected:Ee(new Map),selectedValues:Ee([])}},_P=ot({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),yP=n=>{let e=!1;const t=Ee(new Map),i=Ee(new Map),s=dn(n,"opened",n.opened,d=>new Set(d),d=>[...d.values()]),r=G(()=>{if(typeof n.selectStrategy=="object")return n.selectStrategy;switch(n.selectStrategy){case"single-leaf":return gP(n.mandatory);case"leaf":return mP(n.mandatory);case"independent":return Vg(n.mandatory);case"single-independent":return jS(n.mandatory);case"classic":default:return vP(n.mandatory)}}),o=G(()=>{if(typeof n.openStrategy=="function")return n.openStrategy;switch(n.openStrategy){case"list":return pP;case"single":return fP;case"multiple":default:return $S}}),a=dn(n,"selected",n.selected,d=>r.value.in(d,t.value,i.value),d=>r.value.out(d,t.value,i.value));Li(()=>{e=!0});function l(d){const h=[];let f=d;for(;f!=null;)h.unshift(f),f=i.value.get(f);return h}const c=Hn("nested"),u={id:Ee(),root:{opened:s,selected:a,selectedValues:G(()=>{const d=[];for(const[h,f]of a.value.entries())f==="on"&&d.push(h);return d}),register:(d,h,f)=>{h&&d!==h&&i.value.set(d,h),f&&t.value.set(d,[]),h!=null&&t.value.set(h,[...t.value.get(h)||[],d])},unregister:d=>{if(e)return;t.value.delete(d);const h=i.value.get(d);if(h){var f;const p=(f=t.value.get(h))!=null?f:[];t.value.set(h,p.filter(g=>g!==d))}i.value.delete(d),s.value.delete(d)},open:(d,h,f)=>{c.emit("click:open",{id:d,value:h,path:l(d),event:f});const p=o.value.open({id:d,value:h,opened:new Set(s.value),children:t.value,parents:i.value,event:f});p&&(s.value=p)},select:(d,h,f)=>{c.emit("click:select",{id:d,value:h,path:l(d),event:f});const p=r.value.select({id:d,value:h,selected:new Map(a.value),children:t.value,parents:i.value,event:f});p&&(a.value=p);const g=o.value.select({id:d,value:h,selected:new Map(a.value),opened:new Set(s.value),children:t.value,parents:i.value,event:f});g&&(s.value=g)},children:t,parents:i}};return ln(gc,u),u.root},XS=(n,e)=>{const t=_t(gc,qS),i=G(()=>{var r;return(r=n.value)!=null?r:ci().toString()}),s=Qe(U({},t),{id:i,open:(r,o)=>t.root.open(i.value,r,o),isOpen:G(()=>t.root.opened.value.has(i.value)),parent:G(()=>t.root.parents.value.get(i.value)),select:(r,o)=>t.root.select(i.value,r,o),isSelected:G(()=>t.root.selected.value.get(i.value)==="on"),isIndeterminate:G(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:G(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator});return!t.isGroupActivator&&t.root.register(i.value,t.id.value,e),Li(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),e&&ln(gc,s),s},xP=()=>{const n=_t(gc,qS);ln(gc,Qe(U({},n),{isGroupActivator:!0}))};function Ug(){const n=Ee(!1);return Xa(()=>{window.requestAnimationFrame(()=>{n.value=!0})}),{ssrBootStyles:G(()=>n.value?void 0:{transition:"none !important"}),isBooted:jc(n)}}const bP=qe({name:"VListGroupActivator",setup(n,e){let{slots:t}=e;return xP(),()=>{var i;return(i=t.default)==null?void 0:i.call(t)}}}),wP=zn()({name:"VListGroup",props:U({activeColor:String,color:String,collapseIcon:{type:Dt,default:"$collapse"},expandIcon:{type:Dt,default:"$expand"},value:null},Yt()),setup(n,e){let{slots:t}=e;const{isOpen:i,open:s}=XS(Ke(n,"value"),!0),r=GS(),{isBooted:o}=Ug(),a=c=>{s(!i.value,c)},l=G(()=>{var c;return{onClick:a,active:i.value,appendIcon:i.value?n.collapseIcon:n.expandIcon,class:"v-list-group__header",color:i.value?(c=n.activeColor)!=null?c:n.color:void 0}});return Ye(()=>{var c;return I(n.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value}]},{default:()=>[t.activator&&I(qi,{defaults:{VListItemIcon:{color:l.value.color}}},{default:()=>[I(bP,null,{default:()=>[t.activator({props:l.value,isOpen:i})]})]}),I(tr,{transition:o.value&&{component:HS}},{default:()=>[oi(I("div",{class:"v-list-group__items"},[(c=t.default)==null?void 0:c.call(t)]),[[Xc,i.value]])]})]})}),{}}});const wr=ot({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Sr(n){return{dimensionStyles:G(()=>({height:Ge(n.height),maxHeight:Ge(n.maxHeight),maxWidth:Ge(n.maxWidth),minHeight:Ge(n.minHeight),minWidth:Ge(n.minWidth),width:Ge(n.width)}))}}function SP(n){return{aspectStyles:G(()=>{const e=Number(n.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const EP=qe({name:"VResponsive",props:U({aspectRatio:[String,Number],contentClass:String},wr()),setup(n,e){let{slots:t}=e;const{aspectStyles:i}=SP(n),{dimensionStyles:s}=Sr(n);return Ye(()=>{var r;return I("div",{class:"v-responsive",style:s.value},[I("div",{class:"v-responsive__sizer",style:i.value},null),(r=t.additional)==null?void 0:r.call(t),t.default&&I("div",{class:["v-responsive__content",n.contentClass]},[t.default()])])}),{}}});function MP(n,e){if(!Fg)return;const t=e.modifiers||{},i=e.value,{handler:s,options:r}=typeof i=="object"?i:{handler:i,options:{}},o=new IntersectionObserver(function(){var a;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const u=(a=n._observe)==null?void 0:a[e.instance.$.uid];if(!u)return;const d=l.some(h=>h.isIntersecting);s&&(!t.quiet||u.init)&&(!t.once||d||u.init)&&s(d,l,c),d&&t.once?YS(n,e):u.init=!0},r);n._observe=Object(n._observe),n._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(n)}function YS(n,e){var t;const i=(t=n._observe)==null?void 0:t[e.instance.$.uid];!i||(i.observer.unobserve(n),delete n._observe[e.instance.$.uid])}const TP={mounted:MP,unmounted:YS};var KS=TP;const Ih=qe({name:"VImg",directives:{intersect:KS},props:U({aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number]},Ka()),emits:["loadstart","load","error"],setup(n,e){let{emit:t,slots:i}=e;const s=Ee(""),r=Ee(),o=Ee(n.eager?"loading":"idle"),a=Ee(),l=Ee(),c=G(()=>n.src&&typeof n.src=="object"?{src:n.src.src,srcset:n.srcset||n.src.srcset,lazySrc:n.lazySrc||n.src.lazySrc,aspect:Number(n.aspectRatio||n.src.aspect)}:{src:n.src,srcset:n.srcset,lazySrc:n.lazySrc,aspect:Number(n.aspectRatio||0)}),u=G(()=>c.value.aspect||a.value/l.value||0);ct(()=>n.src,()=>{d(o.value!=="idle")}),wh(()=>d());function d(C){if(!(n.eager&&C)&&!(Fg&&!C&&!n.eager)){if(o.value="loading",c.value.lazySrc){const D=new Image;D.src=c.value.lazySrc,g(D,null)}!c.value.src||Jn(()=>{var D,W;if(t("loadstart",((D=r.value)==null?void 0:D.currentSrc)||c.value.src),(W=r.value)!=null&&W.complete){if(r.value.naturalWidth||f(),o.value==="error")return;u.value||g(r.value,null),h()}else u.value||g(r.value),p()})}}function h(){var C;p(),o.value="loaded",t("load",((C=r.value)==null?void 0:C.currentSrc)||c.value.src)}function f(){var C;o.value="error",t("error",((C=r.value)==null?void 0:C.currentSrc)||c.value.src)}function p(){const C=r.value;C&&(s.value=C.currentSrc||C.src)}function g(C){let D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const W=()=>{const{naturalHeight:L,naturalWidth:y}=C;L||y?(a.value=y,l.value=L):!C.complete&&o.value==="loading"&&D!=null?setTimeout(W,D):(C.currentSrc.endsWith(".svg")||C.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,l.value=1)};W()}const m=G(()=>({"v-img__img--cover":n.cover,"v-img__img--contain":!n.cover})),v=G(()=>{var C;if(!c.value.src||o.value==="idle")return;const D=li("img",{class:["v-img__img",m.value],src:c.value.src,srcset:c.value.srcset,sizes:n.sizes,ref:r,onLoad:h,onError:f}),W=(C=i.sources)==null?void 0:C.call(i);return I(tr,{transition:n.transition,appear:!0},{default:()=>[oi(W?I("picture",{class:"v-img__picture"},[W,D]):D,[[Xc,o.value==="loaded"]])]})}),_=G(()=>I(tr,{transition:n.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&I("img",{class:["v-img__img","v-img__img--preload",m.value],src:c.value.lazySrc,alt:""},null)]})),M=G(()=>{if(!!i.placeholder)return I(tr,{transition:n.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!i.error)&&I("div",{class:"v-img__placeholder"},[i.placeholder()])]})}),E=G(()=>{if(!!i.error)return I(tr,{transition:n.transition,appear:!0},{default:()=>[o.value==="error"&&I("div",{class:"v-img__error"},[i.error()])]})}),x=G(()=>{if(!!n.gradient)return I("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${n.gradient})`}},null)}),P=Ee(!1);{const C=ct(u,D=>{D&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{P.value=!0})}),C())})}return Ye(()=>oi(I(EP,{class:["v-img",{"v-img--booting":!P.value}],style:{width:Ge(n.width==="auto"?a.value:n.width)},aspectRatio:u.value,"aria-label":n.alt,role:n.alt?"img":void 0},{additional:()=>[v.value,_.value,x.value,M.value,E.value],default:i.default}),[[vo("intersect"),{handler:d,options:n.options},null,{once:!0}]])),{currentSrc:s,image:r,state:o,naturalWidth:a,naturalHeight:l}}}),CP=[null,"default","comfortable","compact"],Zi=ot({density:{type:String,default:"default",validator:n=>CP.includes(n)}},"density");function Is(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As();return{densityClasses:G(()=>`${e}--density-${n.density}`)}}const Qi=ot({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function es(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As();return{roundedClasses:G(()=>{const i=At(n)?n.value:n.rounded,s=[];if(i===!0||i==="")s.push(`${e}--rounded`);else if(typeof i=="string"||i===0)for(const r of String(i).split(" "))s.push(`rounded-${r}`);return s})}}const JS=ot(U(U(U(U({color:String,start:Boolean,end:Boolean,icon:Dt,image:String},Zi()),Qi()),Ch()),Yt())),vc=qe({name:"VAvatar",props:JS(),setup(n,e){let{slots:t}=e;const{backgroundColorClasses:i,backgroundColorStyles:s}=Es(Ke(n,"color")),{densityClasses:r}=Is(n),{roundedClasses:o}=es(n),{sizeClasses:a,sizeStyles:l}=Ah(n);return Ye(()=>{var c;return I(n.tag,{class:["v-avatar",{"v-avatar--start":n.start,"v-avatar--end":n.end},i.value,r.value,o.value,a.value],style:[s.value,l.value]},{default:()=>[n.image?I(Ih,{src:n.image,alt:""},null):n.icon?I(Sn,{icon:n.icon},null):(c=t.default)==null?void 0:c.call(t)]})}),{}}}),Vy=qe({name:"VListItemAvatar",props:JS(),setup(n,e){let{slots:t}=e;return Ye(()=>I(vc,It({class:["v-list-item-avatar",{"v-list-item-avatar--start":n.start,"v-list-item-avatar--end":n.end}]},n),t)),{}}}),AP=yo("v-list-item-header"),Uy=qe({name:"VListItemIcon",props:FS(),setup(n,e){let{slots:t}=e;return Ye(()=>I(Sn,It({class:["v-list-item-icon",{"v-list-item-icon--start":n.start,"v-list-item-icon--end":n.end}]},n),t)),{}}}),IP=yo("v-list-item-subtitle"),RP=yo("v-list-item-title");const am=Symbol("rippleStop"),PP=80;function zy(n,e){n.style.transform=e,n.style.webkitTransform=e}function Cf(n,e){n.style.opacity=`calc(${e} * var(--v-theme-overlay-multiplier))`}function lm(n){return n.constructor.name==="TouchEvent"}function ZS(n){return n.constructor.name==="KeyboardEvent"}const LP=function(n,e){var t;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,r=0;if(!ZS(n)){const h=e.getBoundingClientRect(),f=lm(n)?n.touches[n.touches.length-1]:n;s=f.clientX-h.left,r=f.clientY-h.top}let o=0,a=.3;(t=e._ripple)!=null&&t.circle?(a=.15,o=e.clientWidth/2,o=i.center?o:o+Math.sqrt((s-o)**2+(r-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=`${(e.clientWidth-o*2)/2}px`,c=`${(e.clientHeight-o*2)/2}px`,u=i.center?l:`${s-o}px`,d=i.center?c:`${r-o}px`;return{radius:o,scale:a,x:u,y:d,centerX:l,centerY:c}},Dd={show(n,e){var t;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const s=document.createElement("span"),r=document.createElement("span");s.appendChild(r),s.className="v-ripple__container",i.class&&(s.className+=` ${i.class}`);const{radius:o,scale:a,x:l,y:c,centerX:u,centerY:d}=LP(n,e,i),h=`${o*2}px`;r.className="v-ripple__animation",r.style.width=h,r.style.height=h,e.appendChild(s);const f=window.getComputedStyle(e);f&&f.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),zy(r,`translate(${l}, ${c}) scale3d(${a},${a},${a})`),Cf(r,0),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),zy(r,`translate(${u}, ${d}) scale3d(1,1,1)`),Cf(r,.08)},0)},hide(n){var e;if(!(n!=null&&(e=n._ripple)!=null&&e.enabled))return;const t=n.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const i=t[t.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),r=Math.max(250-s,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),Cf(i,0),setTimeout(()=>{n.getElementsByClassName("v-ripple__animation").length===1&&n.dataset.previousPosition&&(n.style.position=n.dataset.previousPosition,delete n.dataset.previousPosition),i.parentNode&&n.removeChild(i.parentNode)},300)},r)}};function QS(n){return typeof n=="undefined"||!!n}function _c(n){const e={},t=n.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||n[am])){if(n[am]=!0,lm(n))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(e.center=t._ripple.centered||ZS(n),t._ripple.class&&(e.class=t._ripple.class),lm(n)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{Dd.show(n,t,e)},t._ripple.showTimer=window.setTimeout(()=>{var i;t!=null&&(i=t._ripple)!=null&&i.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},PP)}else Dd.show(n,t,e)}}function Hy(n){n[am]=!0}function Xn(n){const e=n.currentTarget;if(!(!e||!e._ripple)){if(window.clearTimeout(e._ripple.showTimer),n.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{Xn(n)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),Dd.hide(e)}}function eE(n){const e=n.currentTarget;!e||!e._ripple||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let yc=!1;function tE(n){!yc&&(n.keyCode===wy.enter||n.keyCode===wy.space)&&(yc=!0,_c(n))}function nE(n){yc=!1,Xn(n)}function iE(n){yc&&(yc=!1,Xn(n))}function sE(n,e,t){var i;const{value:s,modifiers:r}=e,o=QS(s);if(o||Dd.hide(n),n._ripple=(i=n._ripple)!=null?i:{},n._ripple.enabled=o,n._ripple.centered=r.center,n._ripple.circle=r.circle,Qp(s)&&s.class&&(n._ripple.class=s.class),o&&!t){if(r.stop){n.addEventListener("touchstart",Hy,{passive:!0}),n.addEventListener("mousedown",Hy);return}n.addEventListener("touchstart",_c,{passive:!0}),n.addEventListener("touchend",Xn,{passive:!0}),n.addEventListener("touchmove",eE,{passive:!0}),n.addEventListener("touchcancel",Xn),n.addEventListener("mousedown",_c),n.addEventListener("mouseup",Xn),n.addEventListener("mouseleave",Xn),n.addEventListener("keydown",tE),n.addEventListener("keyup",nE),n.addEventListener("blur",iE),n.addEventListener("dragstart",Xn,{passive:!0})}else!o&&t&&rE(n)}function rE(n){n.removeEventListener("mousedown",_c),n.removeEventListener("touchstart",_c),n.removeEventListener("touchend",Xn),n.removeEventListener("touchmove",eE),n.removeEventListener("touchcancel",Xn),n.removeEventListener("mouseup",Xn),n.removeEventListener("mouseleave",Xn),n.removeEventListener("keydown",tE),n.removeEventListener("keyup",nE),n.removeEventListener("dragstart",Xn),n.removeEventListener("blur",iE)}function NP(n,e){sE(n,e,!1)}function DP(n){delete n._ripple,rE(n)}function OP(n,e){if(e.value===e.oldValue)return;const t=QS(e.oldValue);sE(n,e,t)}const Rh={mounted:NP,unmounted:DP,updated:OP},kP=["elevated","flat","tonal","outlined","text","plain"];function Ph(n,e){return I(Nt,null,[n&&I("div",{key:"overlay",class:`${e}__overlay`},null),I("div",{key:"underlay",class:`${e}__underlay`},null)])}const Ja=ot({color:String,variant:{type:String,default:"elevated",validator:n=>kP.includes(n)}},"variant");function Lh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As();const t=G(()=>{const{variant:r}=Si(n);return`${e}--variant-${r}`}),{colorClasses:i,colorStyles:s}=Bg(G(()=>{const{variant:r,color:o}=Si(n);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:i,colorStyles:s,variantClasses:t}}const xo=ot({border:[Boolean,Number,String]},"border");function bo(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As();return{borderClasses:G(()=>{const i=At(n)?n.value:n.border,s=[];if(i===!0||i==="")s.push(`${e}--border`);else if(typeof i=="string"||i===0)for(const r of String(i).split(" "))s.push(`border-${r}`);return s})}}const Er=ot({elevation:{type:[Number,String],validator(n){const e=parseInt(n);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Mr(n){return{elevationClasses:G(()=>{const t=At(n)?n.value:n.elevation,i=[];return t==null||i.push(`elevation-${t}`),i})}}function oE(){var n,e;return(n=Hn("useRouter"))==null||(e=n.proxy)==null?void 0:e.$router}function zg(n,e){const t=eI("RouterLink"),i=G(()=>!!(n.href||n.to)),s=G(()=>(i==null?void 0:i.value)||!!(e.onClick||e.onClickOnce));if(typeof t=="string")return{isLink:i,isClickable:s,href:Ke(n,"href")};const r=n.to?t.useLink(n):void 0;return Qe(U({},r),{isLink:i,isClickable:s,href:G(()=>n.to?r==null?void 0:r.route.value.href:n.href)})}const Hg=ot({href:String,replace:Boolean,to:[String,Object]},"router");let Af=!1;function FP(n,e){let t=!1,i,s;Bt&&(Jn(()=>{window.addEventListener("popstate",r),i=n==null?void 0:n.beforeEach((o,a,l)=>{Af?t?e(l):l():setTimeout(()=>t?e(l):l()),Af=!0}),s=n==null?void 0:n.afterEach(()=>{Af=!1})}),po(()=>{var o,a;window.removeEventListener("popstate",r),(o=i)==null||o(),(a=s)==null||a()}));function r(o){var a;(a=o.state)!=null&&a.replaced||(t=!0,setTimeout(()=>t=!1))}}const xc=zn()({name:"VListItem",directives:{Ripple:Rh},props:U(U(U(U(U(U(U(U(U({active:Boolean,activeColor:String,activeClass:String,appendAvatar:String,appendIcon:Dt,disabled:Boolean,lines:String,nav:Boolean,prependAvatar:String,prependIcon:Dt,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,link:Boolean},xo()),Zi()),wr()),Er()),Qi()),Hg()),Yt()),yn()),Ja({variant:"text"})),setup(n,e){var t;let{attrs:i,slots:s}=e;const r=zg(n,i),o=G(()=>{var T;return(T=n.value)!=null?T:r.href.value}),{select:a,isSelected:l,isIndeterminate:c,isGroupActivator:u,root:d,parent:h}=XS(o,!1),f=GS(),p=G(()=>{var T;return n.active||((T=r.isExactActive)==null?void 0:T.value)||l.value}),g=G(()=>n.rounded||n.nav),m=G(()=>{var T;return{color:p.value&&(T=n.activeColor)!=null?T:n.color,variant:n.variant}});(t=r.isExactActive)!=null&&t.value&&h.value!=null&&d.open(h.value,!0),ct(()=>{var T;return(T=r.isExactActive)==null?void 0:T.value},T=>{T&&h.value!=null&&d.open(h.value,!0)});const{themeClasses:v}=Pn(n),{borderClasses:_}=bo(n),{colorClasses:M,colorStyles:E,variantClasses:x}=Lh(m),{densityClasses:P}=Is(n),{dimensionStyles:C}=Sr(n),{elevationClasses:D}=Mr(n),{roundedClasses:W}=es(g),L=G(()=>n.lines?`v-list-item--${n.lines}-line`:void 0),y=G(()=>({isActive:p.value,select:a,isSelected:l.value,isIndeterminate:c.value}));return Ye(()=>{var T,X,k;const z=r.isLink.value?"a":n.tag,H=!f||l.value||p.value,$=s.title||n.title,O=s.subtitle||n.subtitle,ne=!!($||O),ae=!!(s.append||n.appendAvatar||n.appendIcon),fe=!!(s.prepend||n.prependAvatar||n.prependIcon),oe=!n.disabled&&(n.link||r.isClickable.value||n.value!=null&&!!f);return f==null||f.updateHasPrepend(fe),oi(I(z,{class:["v-list-item",{"v-list-item--active":p.value,"v-list-item--disabled":n.disabled,"v-list-item--link":oe,"v-list-item--nav":n.nav,"v-list-item--prepend":!fe&&(f==null?void 0:f.hasPrepend.value),[`${n.activeClass}`]:p.value},v.value,_.value,H?M.value:void 0,P.value,D.value,L.value,W.value,x.value],style:[H?E.value:void 0,C.value],href:r.href.value,tabindex:oe?0:void 0,onClick:oe&&(Ae=>{var ze;u||((ze=r.navigate)==null||ze.call(r,Ae),n.value!=null&&a(!l.value,Ae))})},{default:()=>[Ph(oe||p.value,"v-list-item"),fe&&I(Nt,null,[n.prependAvatar&&I(Vy,{image:n.prependAvatar,start:!0},null),n.prependIcon&&I(Uy,{icon:n.prependIcon,start:!0},null),(T=s.prepend)==null?void 0:T.call(s,y.value)]),ne&&I(AP,{key:"header"},{default:()=>[$&&I(RP,{key:"title"},{default:()=>[s.title?s.title({title:n.title}):n.title]}),O&&I(IP,null,{default:()=>[s.subtitle?s.subtitle({subtitle:n.subtitle}):n.subtitle]})]}),(X=s.default)==null?void 0:X.call(s,y.value),ae&&I(Nt,null,[(k=s.append)==null?void 0:k.call(s,y.value),n.appendAvatar&&I(Vy,{image:n.appendAvatar,end:!0},null),n.appendIcon&&I(Uy,{icon:n.appendIcon,end:!0},null)])]}),[[vo("ripple"),oe]])}),{}}}),BP=qe({name:"VListSubheader",props:U({color:String,inset:Boolean,sticky:Boolean,title:String},Yt()),setup(n,e){let{slots:t}=e;const{textColorClasses:i,textColorStyles:s}=Ss(Ke(n,"color"));return Ye(()=>{var r,o;const a=!!(t.default||n.title);return I(n.tag,{class:["v-list-subheader",{"v-list-subheader--inset":n.inset,"v-list-subheader--sticky":n.sticky},i.value],style:{textColorStyles:s}},{default:()=>[a&&I("div",{class:"v-list-subheader__text"},[(r=(o=t.default)==null?void 0:o.call(t))!=null?r:n.title])]})}),{}}}),aE=zn()({name:"VListChildren",props:{items:Array},setup(n,e){let{slots:t}=e;return WS(),()=>{var i,s,r;return(i=(s=t.default)==null?void 0:s.call(t))!=null?i:(r=n.items)==null?void 0:r.map(o=>{let{children:a,props:l,type:c,raw:u}=o;if(c==="divider")return I(uP,l,null);if(c==="subheader")return I(BP,l,t);const d={subtitle:t.subtitle?h=>{var f;return(f=t.subtitle)==null?void 0:f.call(t,Qe(U({},h),{item:u}))}:void 0,prepend:t.prepend?h=>{var f;return(f=t.prepend)==null?void 0:f.call(t,Qe(U({},h),{item:u}))}:void 0,append:t.append?h=>{var f;return(f=t.append)==null?void 0:f.call(t,Qe(U({},h),{item:u}))}:void 0,default:t.default?h=>{var f;return(f=t.default)==null?void 0:f.call(t,Qe(U({},h),{item:u}))}:void 0,title:t.title?h=>{var f;return(f=t.title)==null?void 0:f.call(t,Qe(U({},h),{item:u}))}:void 0};return a?I(wP,{value:l==null?void 0:l.value},{activator:h=>{let{props:f}=h;return t.header?t.header(U(U({},l),f)):I(xc,It(l,f),d)},default:()=>I(aE,{items:a},t)}):t.item?t.item(l):I(xc,l,d)})}}}),VP=ot({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function lE(n,e){const t=ms(e,n.itemTitle,e),i=ms(e,n.itemValue,t),s=ms(e,n.itemChildren),r=n.itemProps===!0?_o(e,["children"])[1]:ms(e,n.itemProps),o=U({title:t,value:i},r);return{title:o.title,value:o.value,props:o,children:Array.isArray(s)?cE(n,s):void 0,raw:e}}function cE(n,e){const t=[];for(const i of e)t.push(lE(n,i));return t}function l6(n){const e=G(()=>cE(n,n.items));function t(s){return s.map(r=>lE(n,r))}function i(s){return n.returnObject?s.map(r=>{let{raw:o}=r;return o}):s.map(r=>{let{props:o}=r;return o.value})}return{items:e,transformIn:t,transformOut:i}}function UP(n,e){const t=ms(e,n.itemType,"item"),i=typeof e=="string"?e:ms(e,n.itemTitle),s=ms(e,n.itemValue,void 0),r=ms(e,n.itemChildren),o=n.itemProps===!0?_o(e,["children"])[1]:ms(e,n.itemProps),a=U({title:i,value:s},o);return{type:t,title:a.title,value:a.value,props:a,children:t==="item"&&r?uE(n,r):void 0,raw:e}}function uE(n,e){const t=[];for(const i of e)t.push(UP(n,i));return t}function zP(n){return{items:G(()=>uE(n,n.items))}}const dE=zn()({name:"VList",props:U(U(U(U(U(Qe(U(U(U(U(U({activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean},_P({selectStrategy:"single-leaf",openStrategy:"list"})),xo()),Zi()),wr()),Er()),{itemType:{type:String,default:"type"}}),VP()),Qi()),Yt()),yn()),Ja({variant:"text"})),emits:{"update:selected":n=>!0,"update:opened":n=>!0,"click:open":n=>!0,"click:select":n=>!0},setup(n,e){let{slots:t}=e;const{items:i}=zP(n),{themeClasses:s}=Pn(n),{backgroundColorClasses:r,backgroundColorStyles:o}=Es(Ke(n,"bgColor")),{borderClasses:a}=bo(n),{densityClasses:l}=Is(n),{dimensionStyles:c}=Sr(n),{elevationClasses:u}=Mr(n),{roundedClasses:d}=es(n),{open:h,select:f}=yP(n),p=G(()=>n.lines?`v-list--${n.lines}-line`:void 0),g=Ke(n,"activeColor"),m=Ke(n,"color");return WS(),Ya({VListGroup:{activeColor:g,color:m},VListItem:{activeClass:Ke(n,"activeClass"),activeColor:g,color:m,density:Ke(n,"density"),disabled:Ke(n,"disabled"),lines:Ke(n,"lines"),nav:Ke(n,"nav"),variant:Ke(n,"variant")}}),Ye(()=>I(n.tag,{class:["v-list",{"v-list--disabled":n.disabled,"v-list--nav":n.nav},s.value,r.value,a.value,l.value,u.value,p.value,d.value],style:[o.value,c.value]},{default:()=>[I(aE,{items:i.value},t)]})),{open:h,select:f}}});function hE(n){const e=Ee(),t=Ee();if(Bt){const i=new ResizeObserver(s=>{n==null||n(s,i),s.length&&(t.value=s[0].contentRect)});Li(()=>{i.disconnect()}),ct(e,(s,r)=>{r&&(i.unobserve(r),t.value=void 0),s&&i.observe(s)},{flush:"post"})}return{resizeRef:e,contentRect:jc(t)}}const Od=Symbol.for("vuetify:layout"),fE=Symbol.for("vuetify:layout-item"),If=1e3,HP=ot({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),pE=ot({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function WP(){const n=_t(Od);if(!n)throw new Error("Could not find injected Vuetify layout");return n}function mE(n){var e;const t=_t(Od);if(!t)throw new Error("Could not find injected Vuetify layout");const i=(e=n.id)!=null?e:`layout-item-${ci()}`,s=Hn("useLayoutItem");ln(fE,{id:i});const r=Ee(!1);Yw(()=>r.value=!0),Xw(()=>r.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:a}=t.register(s,Qe(U({},n),{active:G(()=>r.value?!1:n.active.value),id:i}));return Li(()=>t.unregister(i)),{layoutItemStyles:o,layoutRect:t.layoutRect,layoutItemScrimStyles:a}}const GP=(n,e,t,i)=>{let s={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:U({},s)}];for(const o of n){const a=e.get(o),l=t.get(o),c=i.get(o);if(!a||!l||!c)continue;const u=Qe(U({},s),{[a.value]:parseInt(s[a.value],10)+(c.value?parseInt(l.value,10):0)});r.push({id:o,layer:u}),s=u}return r};function $P(n){const e=_t(Od,null),t=G(()=>e?e.rootZIndex.value-100:If),i=Ee([]),s=vn(new Map),r=vn(new Map),o=vn(new Map),a=vn(new Map),l=vn(new Map),{resizeRef:c,contentRect:u}=hE(),d=G(()=>{var x;const P=new Map,C=(x=n.overlaps)!=null?x:[];for(const D of C.filter(W=>W.includes(":"))){const[W,L]=D.split(":");if(!i.value.includes(W)||!i.value.includes(L))continue;const y=s.get(W),T=s.get(L),X=r.get(W),k=r.get(L);!y||!T||!X||!k||(P.set(L,{position:y.value,amount:parseInt(X.value,10)}),P.set(W,{position:T.value,amount:-parseInt(k.value,10)}))}return P}),h=G(()=>{const x=[...new Set([...o.values()].map(C=>C.value))].sort((C,D)=>C-D),P=[];for(const C of x){const D=i.value.filter(W=>{var L;return((L=o.get(W))==null?void 0:L.value)===C});P.push(...D)}return GP(P,s,r,a)}),f=G(()=>!Array.from(l.values()).some(x=>x.value)),p=G(()=>{const x=h.value[h.value.length-1].layer;return U({position:"relative",paddingLeft:Ge(x.left),paddingRight:Ge(x.right),paddingTop:Ge(x.top),paddingBottom:Ge(x.bottom)},f.value?void 0:{transition:"none"})}),g=G(()=>h.value.slice(1).map((x,P)=>{let{id:C}=x;const{layer:D}=h.value[P],W=r.get(C);return Qe(U({id:C},D),{size:Number(W.value)})})),m=x=>g.value.find(P=>P.id===x),v=Hn("createLayout"),_=Ee(!1);Xa(()=>{_.value=!0}),ln(Od,{register:(x,P)=>{let{id:C,order:D,position:W,layoutSize:L,elementSize:y,active:T,disableTransitions:X,absolute:k}=P;o.set(C,D),s.set(C,W),r.set(C,L),a.set(C,T),X&&l.set(C,X);const H=ql(fE,v==null?void 0:v.vnode).indexOf(x);H>-1?i.value.splice(H,0,C):i.value.push(C);const $=G(()=>g.value.findIndex(fe=>fe.id===C)),O=G(()=>t.value+h.value.length*2-$.value*2),ne=G(()=>{const fe=W.value==="left"||W.value==="right",oe=W.value==="right",Ae=W.value==="bottom",ze=U({[W.value]:0,zIndex:O.value,transform:`translate${fe?"X":"Y"}(${(T.value?0:-110)*(oe||Ae?-1:1)}%)`,position:k.value||t.value!==If?"absolute":"fixed"},f.value?void 0:{transition:"none"});if(!_.value)return ze;if($.value<0)throw new Error(`Layout item "${C}" is missing`);const Y=g.value[$.value];if(!Y)throw new Error(`Could not find layout item "${C}`);const j=d.value.get(C);return j&&(Y[j.position]+=j.amount),Qe(U({},ze),{height:fe?`calc(100% - ${Y.top}px - ${Y.bottom}px)`:y.value?`${y.value}px`:void 0,marginLeft:oe?void 0:`${Y.left}px`,marginRight:oe?`${Y.right}px`:void 0,marginTop:W.value!=="bottom"?`${Y.top}px`:void 0,marginBottom:W.value!=="top"?`${Y.bottom}px`:void 0,width:fe?y.value?`${y.value}px`:void 0:`calc(100% - ${Y.left}px - ${Y.right}px)`})}),ae=G(()=>({zIndex:O.value-1,position:t.value===If?"fixed":"absolute"}));return{layoutItemStyles:ne,layoutItemScrimStyles:ae,zIndex:O}},unregister:x=>{o.delete(x),s.delete(x),r.delete(x),a.delete(x),l.delete(x),i.value=i.value.filter(P=>P!==x)},mainStyles:p,getLayoutItem:m,items:g,layoutRect:u,rootZIndex:t});const M=G(()=>["v-layout",{"v-layout--full-height":n.fullHeight}]),E=G(()=>({zIndex:t.value}));return{layoutClasses:M,layoutStyles:E,getLayoutItem:m,items:g,layoutRect:u,layoutRef:c}}const cm=Symbol.for("vuetify:display"),Wy={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},jP=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wy;return mr(Wy,n)};function Gy(n){return Bt&&!n?window.innerWidth:0}function $y(n){return Bt&&!n?window.innerHeight:0}function qP(){const n=Bt?window.navigator.userAgent:"ssr";function e(p){return Boolean(n.match(p))}const t=e(/android/i),i=e(/iphone|ipad|ipod/i),s=e(/cordova/i),r=e(/electron/i),o=e(/chrome/i),a=e(/edge/i),l=e(/firefox/i),c=e(/opera/i),u=e(/win/i),d=e(/mac/i),h=e(/linux/i),f=e(/ssr/i);return{android:t,ios:i,cordova:s,electron:r,chrome:o,edge:a,firefox:l,opera:c,win:u,mac:d,linux:h,touch:jR,ssr:f}}function XP(n,e){const{thresholds:t,mobileBreakpoint:i}=jP(n),s=Ee($y(e)),r=qP(),o=vn({}),a=Ee(Gy(e));function l(){s.value=$y(),a.value=Gy()}return e&&Jn(()=>l()),br(()=>{const c=a.value<t.sm,u=a.value<t.md&&!c,d=a.value<t.lg&&!(u||c),h=a.value<t.xl&&!(d||u||c),f=a.value<t.xxl&&!(h||d||u||c),p=a.value>=t.xxl,g=c?"xs":u?"sm":d?"md":h?"lg":f?"xl":"xxl",m=typeof i=="number"?i:t[i],v=r.ssr?r.android||r.ios||r.opera:a.value<m;o.xs=c,o.sm=u,o.md=d,o.lg=h,o.xl=f,o.xxl=p,o.smAndUp=!c,o.mdAndUp=!(c||u),o.lgAndUp=!(c||u||d),o.xlAndUp=!(c||u||d||h),o.smAndDown=!(d||h||f||p),o.mdAndDown=!(h||f||p),o.lgAndDown=!(f||p),o.xlAndDown=!p,o.name=g,o.height=s.value,o.width=a.value,o.mobile=v,o.mobileBreakpoint=i,o.platform=r,o.thresholds=t}),Bt&&window.addEventListener("resize",l,{passive:!0}),xg(o)}function YP(){const n=_t(cm);if(!n)throw new Error("Could not find Vuetify display injection");return n}const KP=100,JP=20;function jy(n){const e=1.41421356237;return(n<0?-1:1)*Math.sqrt(Math.abs(n))*e}function qy(n){if(n.length<2)return 0;if(n.length===2)return n[1].t===n[0].t?0:(n[1].d-n[0].d)/(n[1].t-n[0].t);let e=0;for(let t=n.length-1;t>0;t--){if(n[t].t===n[t-1].t)continue;const i=jy(e),s=(n[t].d-n[t-1].d)/(n[t].t-n[t-1].t);e+=(s-i)*Math.abs(s),t===n.length-1&&(e*=.5)}return jy(e)*1e3}function ZP(){const n={};function e(s){Array.from(s.changedTouches).forEach(r=>{var o;((o=n[r.identifier])!=null?o:n[r.identifier]=new MR(JP)).push([s.timeStamp,r])})}function t(s){Array.from(s.changedTouches).forEach(r=>{delete n[r.identifier]})}function i(s){var r;const o=(r=n[s])==null?void 0:r.values().reverse();if(!o)throw new Error(`No samples for touch id ${s}`);const a=o[0],l=[],c=[];for(const u of o){if(a[0]-u[0]>KP)break;l.push({t:u[0],d:u[1].clientX}),c.push({t:u[0],d:u[1].clientY})}return{x:qy(l),y:qy(c),get direction(){const{x:u,y:d}=this,[h,f]=[Math.abs(u),Math.abs(d)];return h>f&&u>=0?"right":h>f&&u<=0?"left":f>h&&d>=0?"down":f>h&&d<=0?"up":QP()}}}return{addMovement:e,endTouch:t,getVelocity:i}}function QP(){throw new Error}function eL(n){let{isActive:e,isTemporary:t,width:i,touchless:s,position:r}=n;Xa(()=>{window.addEventListener("touchstart",v,{passive:!0}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),Li(()=>{window.removeEventListener("touchstart",v),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",M)});const o=G(()=>r.value!=="bottom"),{addMovement:a,endTouch:l,getVelocity:c}=ZP();let u=!1;const d=Ee(!1),h=Ee(0),f=Ee(0);let p;function g(x,P){return(r.value==="left"?x:r.value==="right"?document.documentElement.clientWidth-x:r.value==="bottom"?document.documentElement.clientHeight-x:Do())-(P?i.value:0)}function m(x){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const C=r.value==="left"?(x-f.value)/i.value:r.value==="right"?(document.documentElement.clientWidth-x-f.value)/i.value:r.value==="bottom"?(document.documentElement.clientHeight-x-f.value)/i.value:Do();return P?Math.max(0,Math.min(1,C)):C}function v(x){if(s.value)return;const P=x.changedTouches[0].clientX,C=x.changedTouches[0].clientY,D=25,W=r.value==="left"?P<D:r.value==="right"?P>document.documentElement.clientWidth-D:r.value==="bottom"?C>document.documentElement.clientHeight-D:Do(),L=e.value&&(r.value==="left"?P<i.value:r.value==="right"?P>document.documentElement.clientWidth-i.value:r.value==="bottom"?C>document.documentElement.clientHeight-i.value:Do());(W||L||e.value&&t.value)&&(u=!0,p=[P,C],f.value=g(o.value?P:C,e.value),h.value=m(o.value?P:C),l(x),a(x))}function _(x){const P=x.changedTouches[0].clientX,C=x.changedTouches[0].clientY;if(u){if(!x.cancelable){u=!1;return}const W=Math.abs(P-p[0]),L=Math.abs(C-p[1]);(o.value?W>L&&W>3:L>W&&L>3)?(d.value=!0,u=!1):(o.value?L:W)>3&&(u=!1)}if(!d.value)return;x.preventDefault(),a(x);const D=m(o.value?P:C,!1);h.value=Math.max(0,Math.min(1,D)),D>1?f.value=g(o.value?P:C,!0):D<0&&(f.value=g(o.value?P:C,!1))}function M(x){if(u=!1,!d.value)return;a(x),d.value=!1;const P=c(x.changedTouches[0].identifier),C=Math.abs(P.x),D=Math.abs(P.y);(o.value?C>D&&C>400:D>C&&D>3)?e.value=P.direction===({left:"right",right:"left",bottom:"up"}[r.value]||Do()):e.value=h.value>.5}const E=G(()=>d.value?{transform:r.value==="left"?`translateX(calc(-100% + ${h.value*i.value}px))`:r.value==="right"?`translateX(calc(100% - ${h.value*i.value}px))`:r.value==="bottom"?`translateY(calc(100% - ${h.value*i.value}px))`:Do(),transition:"none"}:void 0);return{isDragging:d,dragProgress:h,dragStyles:E}}function Do(){throw new Error}const tL=qe({name:"VNavigationDrawer",props:U(U(U(U(U(U({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:72},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"left",validator:n=>["left","right","bottom"].includes(n)}},xo()),Er()),pE()),Qi()),Yt({tag:"nav"})),yn()),emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:i}=e;const{themeClasses:s}=Pn(n),{borderClasses:r}=bo(n),{backgroundColorClasses:o,backgroundColorStyles:a}=Es(Ke(n,"color")),{elevationClasses:l}=Mr(n),{mobile:c}=YP(),{roundedClasses:u}=es(n),d=oE(),h=dn(n,"modelValue",null,L=>!!L),f=Ee(!1),{ssrBootStyles:p}=Ug(),g=G(()=>n.rail&&n.expandOnHover&&f.value?Number(n.width):Number(n.rail?n.railWidth:n.width)),m=G(()=>!n.permanent&&(c.value||n.temporary));n.disableResizeWatcher||ct(m,L=>!n.permanent&&(h.value=!L)),!n.disableRouteWatcher&&d&&ct(d.currentRoute,()=>m.value&&(h.value=!1)),ct(()=>n.permanent,L=>{L&&(h.value=!0)}),wh(()=>{n.modelValue!=null||m.value||(h.value=n.permanent||!c.value)});const v=Ee(),{isDragging:_,dragProgress:M,dragStyles:E}=eL({isActive:h,isTemporary:m,width:g,touchless:Ke(n,"touchless"),position:Ke(n,"location")}),x=G(()=>{const L=m.value?0:n.rail&&n.expandOnHover?Number(n.railWidth):g.value;return _.value?L*M.value:L}),{layoutItemStyles:P,layoutRect:C,layoutItemScrimStyles:D}=mE({id:n.name,order:G(()=>parseInt(n.order,10)),position:Ke(n,"location"),layoutSize:x,elementSize:g,active:G(()=>h.value||_.value),disableTransitions:G(()=>_.value),absolute:Ke(n,"absolute")}),W=G(()=>U(U(U({},_.value?{opacity:M.value*.2,transition:"none"}:void 0),C.value?{left:Ge(C.value.left),right:Ge(C.value.right),top:Ge(C.value.top),bottom:Ge(C.value.bottom)}:void 0),D.value));return Ye(()=>{var L,y,T,X;const k=i.image||n.image;return I(Nt,null,[I(n.tag,It({ref:v,onMouseenter:()=>f.value=!0,onMouseleave:()=>f.value=!1,class:["v-navigation-drawer",{"v-navigation-drawer--bottom":n.location==="bottom","v-navigation-drawer--end":n.location==="right","v-navigation-drawer--expand-on-hover":n.expandOnHover,"v-navigation-drawer--floating":n.floating,"v-navigation-drawer--is-hovering":f.value,"v-navigation-drawer--rail":n.rail,"v-navigation-drawer--start":n.location==="left","v-navigation-drawer--temporary":m.value,"v-navigation-drawer--active":h.value},s.value,o.value,r.value,l.value,u.value],style:[a.value,P.value,E.value,p.value]},t),{default:()=>[k&&I("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?(L=i.image)==null?void 0:L.call(i,{image:n.image}):I("img",{src:n.image,alt:""},null)]),i.prepend&&I("div",{class:"v-navigation-drawer__prepend"},[(y=i.prepend)==null?void 0:y.call(i)]),I("div",{class:"v-navigation-drawer__content"},[(T=i.default)==null?void 0:T.call(i)]),i.append&&I("div",{class:"v-navigation-drawer__append"},[(X=i.append)==null?void 0:X.call(i)])]}),I(Ki,{name:"fade-transition"},{default:()=>[m.value&&(_.value||h.value)&&I("div",{class:"v-navigation-drawer__scrim",style:W.value,onClick:()=>h.value=!1},null)]})])}),{}}}),nL={name:"BarMenu",data:()=>({}),methods:{}},iL=$i("div",{class:"ma-4 text-h5 text-white"},"MONITORBOX",-1);function sL(n,e,t,i,s,r){const o=rr("router-link");return tn(),si(tL,{bottom:"",color:"#111827",modelValue:n.$store.state.show,"onUpdate:modelValue":e[1]||(e[1]=a=>n.$store.state.show=a),temporary:""},{default:st(()=>[I(o,{to:"/",class:"text-decoration-none",onClick:e[0]||(e[0]=a=>n.$store.state.titleToolBar="Home")},{default:st(()=>[iL]),_:1}),I(dE,{density:"compact",class:"text-subtitle-2 ma-2 bg-transparent"},{default:st(()=>[(tn(!0),_a(Nt,null,Tg(n.$store.state.menu,({icon:a,title:l,value:c,link:u},d)=>(tn(),si(o,{class:"text-decoration-none text-white",to:u,key:d,onClick:h=>n.$store.state.titleToolBar=l},{default:st(()=>[I(xc,{title:l,value:c,"active-color":"#2196f3",class:"v-icon--size-large mb-1",rounded:"lg"},{default:st(()=>[I(Sn,{icon:a},null,8,["icon"])]),_:2},1032,["title","value"])]),_:2},1032,["to","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])}var rL=Yc(nL,[["render",sL]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=function(n,e){if(!n)throw Za(e)},Za=function(n){return new Error("Firebase Database ("+gE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},oL=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Wg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):oL(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw Error();const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},_E=function(n){const e=vE(n);return Wg.encodeByteArray(e,!0)},yE=function(n){return _E(n).replace(/\./g,"")},um=function(n){try{return Wg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(n){return xE(void 0,n)}function xE(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lL(t)||(n[t]=xE(n[t],e[t]));return n}function lL(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(En())}function cL(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uL(){const n=En();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wE(){return gE.NODE_ADMIN===!0}function dL(){return typeof indexedDB=="object"}function hL(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL="FirebaseError";class Qa extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=fL,Object.setPrototypeOf(this,Qa.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jc.prototype.create)}}class Jc{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?pL(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qa(s,a,i)}}function pL(n,e){return n.replace(mL,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const mL=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n){return JSON.parse(n)}function on(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=bc(um(r[0])||""),t=bc(um(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},gL=function(n){const e=SE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},vL=function(n){const e=SE(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ra(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function dm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kd(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Fd(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Xy(r)&&Xy(o)){if(!Fd(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Xy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function kl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Fl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function yL(n,e){const t=new xL(n,e);return t.subscribe.bind(t)}class xL{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");bL(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Rf),s.error===void 0&&(s.error=Rf),s.complete===void 0&&(s.complete=Rf);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bL(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Rf(){}function Nh(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,ye(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dh=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n){return n&&n._delegate?n._delegate:n}class io{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Kc;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ML(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:EL(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EL(n){return n===Fr?void 0:n}function ML(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new SL(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(wt||(wt={}));const CL={debug:wt.DEBUG,verbose:wt.VERBOSE,info:wt.INFO,warn:wt.WARN,error:wt.ERROR,silent:wt.SILENT},AL=wt.INFO,IL={[wt.DEBUG]:"log",[wt.VERBOSE]:"log",[wt.INFO]:"info",[wt.WARN]:"warn",[wt.ERROR]:"error"},RL=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=IL[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $g{constructor(e){this.name=e,this._logLevel=AL,this._logHandler=RL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in wt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,wt.DEBUG,...e),this._logHandler(this,wt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,wt.VERBOSE,...e),this._logHandler(this,wt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,wt.INFO,...e),this._logHandler(this,wt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,wt.WARN,...e),this._logHandler(this,wt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,wt.ERROR,...e),this._logHandler(this,wt.ERROR,...e)}}const PL=(n,e)=>e.some(t=>n instanceof t);let Yy,Ky;function LL(){return Yy||(Yy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NL(){return Ky||(Ky=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const EE=new WeakMap,hm=new WeakMap,ME=new WeakMap,Pf=new WeakMap,jg=new WeakMap;function DL(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(or(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&EE.set(t,n)}).catch(()=>{}),jg.set(e,n),e}function OL(n){if(hm.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});hm.set(n,e)}let fm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ME.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return or(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kL(n){fm=n(fm)}function FL(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Lf(this),e,...t);return ME.set(i,e.sort?e.sort():[e]),or(i)}:NL().includes(n)?function(...e){return n.apply(Lf(this),e),or(EE.get(this))}:function(...e){return or(n.apply(Lf(this),e))}}function BL(n){return typeof n=="function"?FL(n):(n instanceof IDBTransaction&&OL(n),PL(n,LL())?new Proxy(n,fm):n)}function or(n){if(n instanceof IDBRequest)return DL(n);if(Pf.has(n))return Pf.get(n);const e=BL(n);return e!==n&&(Pf.set(n,e),jg.set(e,n)),e}const Lf=n=>jg.get(n);function VL(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=or(o);return i&&o.addEventListener("upgradeneeded",l=>{i(or(o.result),l.oldVersion,l.newVersion,or(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const UL=["get","getKey","getAll","getAllKeys","count"],zL=["put","add","delete","clear"],Nf=new Map;function Jy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Nf.get(e))return Nf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=zL.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||UL.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Nf.set(e,r),r}kL(n=>Qe(U({},n),{get:(e,t,i)=>Jy(e,t)||n.get(e,t,i),has:(e,t)=>!!Jy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(WL(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function WL(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pm="@firebase/app",Zy="0.7.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new $g("@firebase/app"),GL="@firebase/app-compat",$L="@firebase/analytics-compat",jL="@firebase/analytics",qL="@firebase/app-check-compat",XL="@firebase/app-check",YL="@firebase/auth",KL="@firebase/auth-compat",JL="@firebase/database",ZL="@firebase/database-compat",QL="@firebase/functions",eN="@firebase/functions-compat",tN="@firebase/installations",nN="@firebase/installations-compat",iN="@firebase/messaging",sN="@firebase/messaging-compat",rN="@firebase/performance",oN="@firebase/performance-compat",aN="@firebase/remote-config",lN="@firebase/remote-config-compat",cN="@firebase/storage",uN="@firebase/storage-compat",dN="@firebase/firestore",hN="@firebase/firestore-compat",fN="firebase",pN="9.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="[DEFAULT]",mN={[pm]:"fire-core",[GL]:"fire-core-compat",[jL]:"fire-analytics",[$L]:"fire-analytics-compat",[XL]:"fire-app-check",[qL]:"fire-app-check-compat",[YL]:"fire-auth",[KL]:"fire-auth-compat",[JL]:"fire-rtdb",[ZL]:"fire-rtdb-compat",[QL]:"fire-fn",[eN]:"fire-fn-compat",[tN]:"fire-iid",[nN]:"fire-iid-compat",[iN]:"fire-fcm",[sN]:"fire-fcm-compat",[rN]:"fire-perf",[oN]:"fire-perf-compat",[aN]:"fire-rc",[lN]:"fire-rc-compat",[cN]:"fire-gcs",[uN]:"fire-gcs-compat",[dN]:"fire-fst",[hN]:"fire-fst-compat","fire-js":"fire-js",[fN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map,mm=new Map;function gN(n,e){try{n.container.addComponent(e)}catch(t){qg.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pa(n){const e=n.name;if(mm.has(e))return qg.debug(`There were multiple attempts to register component ${e}.`),!1;mm.set(e,n);for(const t of Bd.values())gN(t,n);return!0}function Xg(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},so=new Jc("app","Firebase",vN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new io("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw so.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=pN;function yN(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:TE,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw so.create("bad-app-name",{appName:String(i)});const s=Bd.get(i);if(s){if(Fd(n,s.options)&&Fd(t,s.config))return s;throw so.create("duplicate-app",{appName:i})}const r=new TL(i);for(const a of mm.values())r.addComponent(a);const o=new _N(n,t,r);return Bd.set(i,o),o}function CE(n=TE){const e=Bd.get(n);if(!e)throw so.create("no-app",{appName:n});return e}function ar(n,e,t){var i;let s=(i=mN[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qg.warn(a.join(" "));return}Pa(new io(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN="firebase-heartbeat-database",bN=1,wc="firebase-heartbeat-store";let Df=null;function AE(){return Df||(Df=VL(xN,bN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(wc)}}}).catch(n=>{throw so.create("storage-open",{originalErrorMessage:n.message})})),Df}async function wN(n){try{return(await AE()).transaction(wc).objectStore(wc).get(IE(n))}catch(e){throw so.create("storage-get",{originalErrorMessage:e.message})}}async function Qy(n,e){try{const i=(await AE()).transaction(wc,"readwrite");return await i.objectStore(wc).put(e,IE(n)),i.done}catch(t){throw so.create("storage-set",{originalErrorMessage:t.message})}}function IE(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=1024,EN=30*24*60*60*1e3;class MN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new CN(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=e0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=EN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=e0(),{heartbeatsToSend:t,unsentEntries:i}=TN(this._heartbeatsCache.heartbeats),s=yE(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function e0(){return new Date().toISOString().substring(0,10)}function TN(n,e=SN){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),t0(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),t0(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class CN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dL()?hL().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function t0(n){return yE(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(n){Pa(new io("platform-logger",e=>new HL(e),"PRIVATE")),Pa(new io("heartbeat",e=>new MN(e),"PRIVATE")),ar(pm,Zy,n),ar(pm,Zy,"esm2017"),ar("fire-js","")}AN("");function Yg(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function RE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IN=RE,PE=new Jc("auth","Firebase",RE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=new $g("@firebase/auth");function gd(n,...e){n0.logLevel<=wt.ERROR&&n0.error(`Auth (${Zc}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,...e){throw Kg(n,...e)}function Xi(n,...e){return Kg(n,...e)}function RN(n,e,t){const i=Object.assign(Object.assign({},IN()),{[e]:t});return new Jc("auth","Firebase",i).create(e,{appName:n.name})}function Kg(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return PE.create(n,...e)}function We(n,e,...t){if(!n)throw Kg(e,...t)}function gs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gd(e),new Error(e)}function Ms(n,e){n||gs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new Map;function vs(n){Ms(n instanceof Function,"Expected a class definition");let e=i0.get(n);return e?(Ms(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,i0.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(n,e){const t=Xg(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Fd(r,e!=null?e:{}))return s;Ii(s,"already-initialized")}return t.initialize({options:e})}function LN(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(vs);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function NN(){return s0()==="http:"||s0()==="https:"}function s0(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NN()||cL()||"connection"in navigator)?navigator.onLine:!0}function ON(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ms(t>e,"Short delay should be less than long delay!"),this.isMobile=Gg()||bE()}get(){return DN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n,e){Ms(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new Qc(3e4,6e4);function eu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tu(n,e,t,i,s={}){return NE(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=el(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),LE.fetch()(DE(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function NE(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},kN),e);try{const s=new BN(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Cu(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cu(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cu(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Cu(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw RN(n,u,c);Ii(n,u)}}catch(s){if(s instanceof Qa)throw s;Ii(n,"network-request-failed")}}async function nu(n,e,t,i,s={}){const r=await tu(n,e,t,i,s);return"mfaPendingCredential"in r&&Ii(n,"multi-factor-auth-required",{_serverResponse:r}),r}function DE(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Jg(n.config,s):`${n.config.apiScheme}://${s}`}class BN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xi(this.auth,"network-request-failed")),FN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Xi(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(n,e){return tu(n,"POST","/v1/accounts:delete",e)}async function UN(n,e){return tu(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zN(n,e=!1){const t=Rs(n),i=await t.getIdToken(e),s=Zg(i);We(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Xl(Of(s.auth_time)),issuedAtTime:Xl(Of(s.iat)),expirationTime:Xl(Of(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Of(n){return Number(n)*1e3}function Zg(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return gd("JWT malformed, contained fewer than 3 sections"),null;try{const s=um(t);return s?JSON.parse(s):(gd("Failed to decode base64 JWT payload"),null)}catch(s){return gd("Caught error parsing JWT payload as JSON",s),null}}function HN(n){const e=Zg(n);return We(e,"internal-error"),We(typeof e.exp!="undefined","internal-error"),We(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Qa&&WN(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function WN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xl(this.lastLoginAt),this.creationTime=Xl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Sc(n,UN(t,{idToken:i}));We(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?qN(r.providerUserInfo):[],a=jN(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new OE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function $N(n){const e=Rs(n);await Vd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jN(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function qN(n){return n.map(e=>{var{providerId:t}=e,i=Yg(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XN(n,e){const t=await NE(n,{},async()=>{const i=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=DE(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){We(e.idToken,"internal-error"),We(typeof e.idToken!="undefined","internal-error"),We(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):HN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return We(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await XN(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Ec;return i&&(We(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(We(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(We(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ec,this.toJSON())}_performRefresh(){return gs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n,e){We(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Zr{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Yg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new OE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Sc(this,this.stsTokenManager.getToken(this.auth,e));return We(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zN(this,e)}reload(){return $N(this)}_assign(e){this!==e&&(We(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){We(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Vd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sc(this,VN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=t.createdAt)!==null&&c!==void 0?c:void 0,_=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:E,isAnonymous:x,providerData:P,stsTokenManager:C}=t;We(M&&C,e,"internal-error");const D=Ec.fromJSON(this.name,C);We(typeof M=="string",e,"internal-error"),Os(d,e.name),Os(h,e.name),We(typeof E=="boolean",e,"internal-error"),We(typeof x=="boolean",e,"internal-error"),Os(f,e.name),Os(p,e.name),Os(g,e.name),Os(m,e.name),Os(v,e.name),Os(_,e.name);const W=new Zr({uid:M,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:x,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:D,createdAt:v,lastLoginAt:_});return P&&Array.isArray(P)&&(W.providerData=P.map(L=>Object.assign({},L))),m&&(W._redirectEventId=m),W}static async _fromIdTokenResponse(e,t,i=!1){const s=new Ec;s.updateFromServerResponse(t);const r=new Zr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Vd(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kE.type="NONE";const r0=kE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n,e,t){return`firebase:${n}:${e}:${t}`}class xa{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=vd(this.userKey,s.apiKey,r),this.fullPersistenceKey=vd("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xa(vs(r0),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||vs(r0);const o=vd(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=Zr._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new xa(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new xa(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zE(e))return"Blackberry";if(HE(e))return"Webos";if(Qg(e))return"Safari";if((e.includes("chrome/")||BE(e))&&!e.includes("edge/"))return"Chrome";if(UE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function FE(n=En()){return/firefox\//i.test(n)}function Qg(n=En()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BE(n=En()){return/crios\//i.test(n)}function VE(n=En()){return/iemobile/i.test(n)}function UE(n=En()){return/android/i.test(n)}function zE(n=En()){return/blackberry/i.test(n)}function HE(n=En()){return/webos/i.test(n)}function Oh(n=En()){return/iphone|ipad|ipod/i.test(n)}function YN(n=En()){var e;return Oh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KN(){return uL()&&document.documentMode===10}function WE(n=En()){return Oh(n)||UE(n)||HE(n)||zE(n)||/windows phone/i.test(n)||VE(n)}function JN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n,e=[]){let t;switch(n){case"Browser":t=o0(En());break;case"Worker":t=`${o0(En())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zc}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a0(this),this.idTokenSubscription=new a0(this),this.beforeStateQueue=new ZN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=PE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vs(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await xa.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return We(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vd(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ON()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Rs(e):null;return t&&We(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&We(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vs(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jc("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vs(e)||this._popupRedirectResolver;We(t,this,"argument-error"),this.redirectPersistenceManager=await xa.create(this,[vs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return We(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return We(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function kh(n){return Rs(n)}class a0{constructor(e){this.auth=e,this.observer=null,this.addObserver=yL(t=>this.observer=t)}get next(){return We(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gs("not implemented")}_getIdTokenResponse(e){return gs("not implemented")}_linkToIdToken(e,t){return gs("not implemented")}_getReauthenticationResolver(e){return gs("not implemented")}}async function eD(n,e){return tu(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(n,e){return nu(n,"POST","/v1/accounts:signInWithPassword",eu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(n,e){return nu(n,"POST","/v1/accounts:signInWithEmailLink",eu(n,e))}async function iD(n,e){return nu(n,"POST","/v1/accounts:signInWithEmailLink",eu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends ev{constructor(e,t,i,s=null){super("password",i);this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Mc(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Mc(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nD(e,{email:this._email,oobCode:this._password});default:Ii(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eD(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iD(e,{idToken:t,email:this._email,oobCode:this._password});default:Ii(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(n,e){return nu(n,"POST","/v1/accounts:signInWithIdp",eu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="http://localhost";class ro extends ev{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new ro(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ii("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Yg(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ro(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ba(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ba(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ba(e,t)}buildRequest(){const e={requestUri:sD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=el(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oD(n){const e=kl(Fl(n)).link,t=e?kl(Fl(e)).deep_link_id:null,i=kl(Fl(n)).deep_link_id;return(i?kl(Fl(i)).link:null)||i||t||e||n}class tv{constructor(e){var t,i,s,r,o,a;const l=kl(Fl(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=rD((s=l.mode)!==null&&s!==void 0?s:null);We(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=oD(e);try{return new tv(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.providerId=tl.PROVIDER_ID}static credential(e,t){return Mc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=tv.parseLink(t);return We(i,"argument-error"),Mc._fromEmailAndCode(e,i.code,i.tenantId)}}tl.PROVIDER_ID="password";tl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends $E{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends iu{constructor(){super("facebook.com")}static credential(e){return ro._fromParams({providerId:Js.PROVIDER_ID,signInMethod:Js.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Js.credentialFromTaggedObject(e)}static credentialFromError(e){return Js.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Js.credential(e.oauthAccessToken)}catch{return null}}}Js.FACEBOOK_SIGN_IN_METHOD="facebook.com";Js.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends iu{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return ro._fromParams({providerId:Zs.PROVIDER_ID,signInMethod:Zs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zs.credentialFromTaggedObject(e)}static credentialFromError(e){return Zs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Zs.credential(t,i)}catch{return null}}}Zs.GOOGLE_SIGN_IN_METHOD="google.com";Zs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends iu{constructor(){super("github.com")}static credential(e){return ro._fromParams({providerId:Qs.PROVIDER_ID,signInMethod:Qs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qs.credentialFromTaggedObject(e)}static credentialFromError(e){return Qs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qs.credential(e.oauthAccessToken)}catch{return null}}}Qs.GITHUB_SIGN_IN_METHOD="github.com";Qs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends iu{constructor(){super("twitter.com")}static credential(e,t){return ro._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return er.credential(t,i)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(n,e){return nu(n,"POST","/v1/accounts:signUp",eu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Zr._fromIdTokenResponse(e,i,s),o=l0(i);return new oo({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=l0(i);return new oo({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function l0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud extends Qa{constructor(e,t,i,s){var r;super(t.code,t.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ud.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Ud(e,t,i,s)}}function jE(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ud._fromErrorAndOperation(n,r,e,i):r})}async function lD(n,e,t=!1){const i=await Sc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return oo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Sc(n,jE(i,s,e,n),t);We(r.idToken,i,"internal-error");const o=Zg(r.idToken);We(o,i,"internal-error");const{sub:a}=o;return We(n.uid===a,i,"user-mismatch"),oo._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ii(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(n,e,t=!1){const i="signIn",s=await jE(n,i,e),r=await oo._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function uD(n,e){return qE(kh(n),e)}async function dD(n,e,t){const i=kh(n),s=await aD(i,{returnSecureToken:!0,email:e,password:t}),r=await oo._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function hD(n,e,t){return uD(Rs(n),tl.credential(e,t))}const zd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zd,"1"),this.storage.removeItem(zd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(){const n=En();return Qg(n)||Oh(n)}const pD=1e3,mD=10;class YE extends XE{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fD()&&JN(),this.fallbackToPolling=WE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);KN()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mD):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},pD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}YE.type="LOCAL";const gD=YE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE extends XE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}KE.type="SESSION";const JE=KE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Fh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await vD(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=nv("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return window}function yD(n){Yi().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){return typeof Yi().WorkerGlobalScope!="undefined"&&typeof Yi().importScripts=="function"}async function xD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bD(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wD(){return ZE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebaseLocalStorageDb",SD=1,Hd="firebaseLocalStorage",eM="fbase_key";class su{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bh(n,e){return n.transaction([Hd],e?"readwrite":"readonly").objectStore(Hd)}function ED(){const n=indexedDB.deleteDatabase(QE);return new su(n).toPromise()}function vm(){const n=indexedDB.open(QE,SD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Hd,{keyPath:eM})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Hd)?e(i):(i.close(),await ED(),e(await vm()))})})}async function c0(n,e,t){const i=Bh(n,!0).put({[eM]:e,value:t});return new su(i).toPromise()}async function MD(n,e){const t=Bh(n,!1).get(e),i=await new su(t).toPromise();return i===void 0?null:i.value}function u0(n,e){const t=Bh(n,!0).delete(e);return new su(t).toPromise()}const TD=800,CD=3;class tM{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>CD)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ZE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fh._getInstance(wD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xD(),!this.activeServiceWorker)return;this.sender=new _D(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vm();return await c0(e,zd,"1"),await u0(e,zd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>c0(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>MD(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>u0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Bh(s,!1).getAll();return new su(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tM.type="LOCAL";const AD=tM;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function RD(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Xi("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",ID().appendChild(i)})}function PD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Qc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(n,e){return e?vs(e):(We(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends ev{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ba(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ba(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ba(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ND(n){return qE(n.auth,new iv(n),n.bypassAuthState)}function DD(n){const{auth:e,user:t}=n;return We(t,e,"internal-error"),cD(t,new iv(n),n.bypassAuthState)}async function OD(n){const{auth:e,user:t}=n;return We(t,e,"internal-error"),lD(t,new iv(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ND;case"linkViaPopup":case"linkViaRedirect":return OD;case"reauthViaPopup":case"reauthViaRedirect":return DD;default:Ii(this.auth,"internal-error")}}resolve(e){Ms(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ms(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=new Qc(2e3,1e4);class la extends nM{constructor(e,t,i,s,r){super(e,t,s,r);this.provider=i,this.authWindow=null,this.pollId=null,la.currentPopupAction&&la.currentPopupAction.cancel(),la.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return We(e,this.auth,"internal-error"),e}async onExecution(){Ms(this.filter.length===1,"Popup operations only handle one event");const e=nv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,la.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xi(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kD.get())};e()}}la.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="pendingRedirect",_d=new Map;class BD extends nM{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=_d.get(this.auth._key());if(!e){try{const i=await VD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}_d.set(this.auth._key(),e)}return this.bypassAuthState||_d.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VD(n,e){const t=HD(e),i=zD(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function UD(n,e){_d.set(n._key(),e)}function zD(n){return vs(n._redirectPersistence)}function HD(n){return vd(FD,n.config.apiKey,n.name)}async function WD(n,e,t=!1){const i=kh(n),s=LD(i,e),o=await new BD(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=10*60*1e3;class $D{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!iM(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xi(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GD&&this.cachedEventUids.clear(),this.cachedEventUids.has(d0(e))}saveEventToCache(e){this.cachedEventUids.add(d0(e)),this.lastProcessedEventTime=Date.now()}}function d0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function iM({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iM(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qD(n,e={}){return tu(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YD=/^https?/;async function KD(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qD(n);for(const t of e)try{if(JD(t))return}catch{}Ii(n,"unauthorized-domain")}function JD(n){const e=gm(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!YD.test(t))return!1;if(XD.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=new Qc(3e4,6e4);function h0(){const n=Yi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function QD(n){return new Promise((e,t)=>{var i,s,r;function o(){h0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{h0(),t(Xi(n,"network-request-failed"))},timeout:ZD.get()})}if(!((s=(i=Yi().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Yi().gapi)===null||r===void 0)&&r.load)o();else{const a=PD("iframefcb");return Yi()[a]=()=>{gapi.load?o():t(Xi(n,"network-request-failed"))},RD(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw yd=null,e})}let yd=null;function eO(n){return yd=yd||QD(n),yd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new Qc(5e3,15e3),nO="__/auth/iframe",iO="emulator/auth/iframe",sO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oO(n){const e=n.config;We(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Jg(e,iO):`https://${n.config.authDomain}/${nO}`,i={apiKey:e.apiKey,appName:n.name,v:Zc},s=rO.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${el(i).slice(1)}`}async function aO(n){const e=await eO(n),t=Yi().gapi;return We(t,n,"internal-error"),e.open({where:document.body,url:oO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sO,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Xi(n,"network-request-failed"),a=Yi().setTimeout(()=>{r(o)},tO.get());function l(){Yi().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cO=500,uO=600,dO="_blank",hO="http://localhost";class f0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fO(n,e,t,i=cO,s=uO){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lO),{width:i.toString(),height:s.toString(),top:r,left:o}),c=En().toLowerCase();t&&(a=BE(c)?dO:t),FE(c)&&(e=e||hO,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(YN(c)&&a!=="_self")return pO(e||"",a),new f0(null);const d=window.open(e||"",a,u);We(d,n,"popup-blocked");try{d.focus()}catch{}return new f0(d)}function pO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO="__/auth/handler",gO="emulator/auth/handler";function p0(n,e,t,i,s,r){We(n.config.authDomain,n,"auth-domain-config-required"),We(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Zc,eventId:s};if(e instanceof $E){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",dm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof iu){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${vO(n)}?${el(a).slice(1)}`}function vO({config:n}){return n.emulator?Jg(n,gO):`https://${n.authDomain}/${mO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="webStorageSupport";class _O{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=JE,this._completeRedirectFn=WD,this._overrideRedirectResult=UD}async _openPopup(e,t,i,s){var r;Ms((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=p0(e,t,i,gm(),s);return fO(e,o,nv())}async _openRedirect(e,t,i,s){return await this._originValidation(e),yD(p0(e,t,i,gm(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ms(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await aO(e),i=new $D(e);return t.register("authEvent",s=>(We(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(kf,{type:kf},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[kf];o!==void 0&&t(!!o),Ii(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return WE()||Qg()||Oh()}}const yO=_O;var m0="@firebase/auth",g0="0.20.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){We(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wO(n){Pa(new io("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{We(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),We(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GE(n)},u=new QN(a,l,c);return LN(u,t),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Pa(new io("auth-internal",e=>{const t=kh(e.getProvider("auth").getImmediate());return(i=>new xO(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(m0,g0,bO(n)),ar(m0,g0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n=CE()){const e=Xg(n,"auth");return e.isInitialized()?e.getImmediate():PN(n,{popupRedirectResolver:yO,persistence:[AD,gD,JE]})}wO("Browser");const v0="@firebase/database",_0="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sM="";function SO(n){sM=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),on(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:bc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ts(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new EO(e)}}catch{}return new MO},$r=rM("localStorage"),_m=rM("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new $g("@firebase/database"),TO=function(){let n=1;return function(){return n++}}(),oM=function(n){const e=wL(n),t=new _L;t.update(e);const i=t.digest();return Wg.encodeByteArray(i)},ru=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ru.apply(null,i):typeof i=="object"?e+=on(i):e+=i,e+=" "}return e};let Qr=null,y0=!0;const CO=function(n,e){ye(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(wa.logLevel=wt.VERBOSE,Qr=wa.log.bind(wa),e&&_m.set("logging_enabled",!0)):typeof n=="function"?Qr=n:(Qr=null,_m.remove("logging_enabled"))},mn=function(...n){if(y0===!0&&(y0=!1,Qr===null&&_m.get("logging_enabled")===!0&&CO(!0)),Qr){const e=ru.apply(null,n);Qr(e)}},ou=function(n){return function(...e){mn(n,...e)}},ym=function(...n){const e="FIREBASE INTERNAL ERROR: "+ru(...n);wa.error(e)},ao=function(...n){const e=`FIREBASE FATAL ERROR: ${ru(...n)}`;throw wa.error(e),new Error(e)},In=function(...n){const e="FIREBASE WARNING: "+ru(...n);wa.warn(e)},AO=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&In("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sv=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},IO=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},La="[MIN_NAME]",lo="[MAX_NAME]",wo=function(n,e){if(n===e)return 0;if(n===La||e===lo)return-1;if(e===La||n===lo)return 1;{const t=x0(n),i=x0(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},RO=function(n,e){return n===e?0:n<e?-1:1},xl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+on(e))},rv=function(n){if(typeof n!="object"||n===null)return on(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=on(e[i]),t+=":",t+=rv(n[e[i]]);return t+="}",t},aM=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function _n(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const lM=function(n){ye(!sv(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},PO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NO(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const DO=new RegExp("^-?(0*)\\d{1,10}$"),OO=-2147483648,kO=2147483647,x0=function(n){if(DO.test(n)){const e=Number(n);if(e>=OO&&e<=kO)return e}return null},nl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw In("Exception was thrown by user callback.",t),e},Math.floor(0))}},FO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yl=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){In(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(mn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',In(e)}}class xm{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xm.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="5",cM="v",uM="s",dM="r",hM="f",fM=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pM="ls",mM="p",bm="ac",gM="websocket",vM="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function zO(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function _M(n,e,t){ye(typeof e=="string","typeof type must == string"),ye(typeof t=="object","typeof params must == object");let i;if(e===gM)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===vM)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zO(n)&&(t.ns=n.namespace);const s=[];return _n(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this.counters_={}}incrementCounter(e,t=1){ts(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return aL(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff={},Bf={};function av(n){const e=n.toString();return Ff[e]||(Ff[e]=new HO),Ff[e]}function WO(n,e){const t=n.toString();return Bf[t]||(Bf[t]=e()),Bf[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&nl(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="start",$O="close",jO="pLPCommand",qO="pRTLPCB",yM="id",xM="pw",bM="ser",XO="cb",YO="seg",KO="ts",JO="d",ZO="dframe",wM=1870,SM=30,QO=wM-SM,ek=25e3,tk=3e4;class ca{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ou(e),this.stats_=av(t),this.urlFn=l=>(this.appCheckToken&&(l[bm]=this.appCheckToken),_M(t,vM,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new GO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tk)),IO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lv((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===b0)this.id=a,this.password=l;else if(o===$O)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[b0]="t",i[bM]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[XO]=this.scriptTagHolder.uniqueCallbackIdentifier),i[cM]=ov,this.transportSessionId&&(i[uM]=this.transportSessionId),this.lastSessionId&&(i[pM]=this.lastSessionId),this.applicationId&&(i[mM]=this.applicationId),this.appCheckToken&&(i[bm]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&fM.test(location.hostname)&&(i[dM]=hM);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ca.forceAllow_=!0}static forceDisallow(){ca.forceDisallow_=!0}static isAvailable(){return ca.forceAllow_?!0:!ca.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!PO()&&!LO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=on(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=_E(t),s=aM(i,QO);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[ZO]="t",i[yM]=e,i[xM]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=on(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class lv{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=TO(),window[jO+this.uniqueCallbackIdentifier]=e,window[qO+this.uniqueCallbackIdentifier]=t,this.myIFrame=lv.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mn("frame writing exception"),a.stack&&mn(a.stack),mn(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yM]=this.myID,e[xM]=this.myPW,e[bM]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+SM+i.length<=wM;){const o=this.pendingSegs.shift();i=i+"&"+YO+s+"="+o.seg+"&"+KO+s+"="+o.ts+"&"+JO+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(ek)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{mn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=16384,ik=45e3;let Wd=null;typeof MozWebSocket!="undefined"?Wd=MozWebSocket:typeof WebSocket!="undefined"&&(Wd=WebSocket);class vi{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ou(this.connId),this.stats_=av(t),this.connURL=vi.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[cM]=ov,typeof location!="undefined"&&location.hostname&&fM.test(location.hostname)&&(o[dM]=hM),t&&(o[uM]=t),i&&(o[pM]=i),s&&(o[bm]=s),r&&(o[mM]=r),_M(e,gM,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$r.set("previous_websocket_failure",!0);try{let i;wE(),this.mySock=new Wd(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Wd!==null&&!vi.forceDisallow_}static previouslyFailed(){return $r.isInMemoryStorage||$r.get("previous_websocket_failure")===!0}markConnectionHealthy(){$r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=bc(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ye(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=on(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=aM(t,nk);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ik))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vi.responsesRequiredToBeHealthy=2;vi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ca,vi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=vi&&vi.isAvailable();let i=t&&!vi.previouslyFailed();if(e.webSocketOnly&&(t||In("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[vi];else{const s=this.transports_=[];for(const r of Tc.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Tc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Tc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=6e4,rk=5e3,ok=10*1024,ak=100*1024,Vf="t",w0="d",lk="s",S0="r",ck="e",E0="o",M0="a",T0="n",C0="p",uk="h";class dk{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ou("c:"+this.id+":"),this.transportManager_=new Tc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Yl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ak?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ok?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vf in e){const t=e[Vf];t===M0?this.upgradeIfSecondaryHealthy_():t===S0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===E0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=xl("t",e),i=xl("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:C0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:M0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:T0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=xl("t",e),i=xl("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=xl(Vf,e);if(w0 in e){const i=e[w0];if(t===uk)this.onHandshake_(i);else if(t===T0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===lk?this.onConnectionShutdown_(i):t===S0?this.onReset_(i):t===ck?ym("Server Error: "+i):t===E0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ym("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ov!==i&&In("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Yl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:C0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e){this.allowedEvents_=e,this.listeners_={},ye(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){ye(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends MM{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Gg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Gd}getInitialEvent(e){return ye(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=32,I0=768;class yt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new yt("")}function et(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function gr(n){return n.pieces_.length-n.pieceNum_}function Tt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new yt(n.pieces_,e)}function cv(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function hk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function TM(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new yt(e,0)}function Ut(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof yt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new yt(t,0)}function it(n){return n.pieceNum_>=n.pieces_.length}function Fn(n,e){const t=et(n),i=et(e);if(t===null)return e;if(t===i)return Fn(Tt(n),Tt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function fk(n,e){const t=Cc(n,0),i=Cc(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=wo(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function uv(n,e){if(gr(n)!==gr(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ni(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(gr(n)>gr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class pk{constructor(e,t){this.errorPrefix_=t,this.parts_=Cc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Dh(this.parts_[i]);CM(this)}}function mk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Dh(e),CM(n)}function gk(n){const e=n.parts_.pop();n.byteLength_-=Dh(e),n.parts_.length>0&&(n.byteLength_-=1)}function CM(n){if(n.byteLength_>I0)throw new Error(n.errorPrefix_+"has a key path longer than "+I0+" bytes ("+n.byteLength_+").");if(n.parts_.length>A0)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+A0+") or object contains a cycle "+Br(n))}function Br(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv extends MM{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new dv}getInitialEvent(e){return ye(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=1e3,vk=60*5*1e3,_k=3*1e3,R0=30*1e3,yk=1.3,xk=3e4,bk="server_kill",P0=3;class xs extends EM{constructor(e,t,i,s,r,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=xs.nextPersistentConnectionId_++,this.log_=ou("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bl,this.maxReconnectDelay_=vk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!wE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(on(r)),ye(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Kc,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},_k),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),ye(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ye(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;xs.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ts(e,"w")){const i=Ra(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();In(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vL(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=R0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gL(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),ye(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+on(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ym("Unrecognized action received from server: "+on(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ye(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xk&&(this.reconnectDelay_=bl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+xs.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){ye(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?mn("getToken() completed but was canceled"):(mn("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new dk(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{In(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(bk)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&In(d),l())}}}interrupt(e){mn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dm(this.interruptReasons_)&&(this.reconnectDelay_=bl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>rv(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new yt(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){mn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=P0&&(this.reconnectDelay_=R0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){mn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=P0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+sM.replace(/\./g,"-")]=1,Gg()?e["framework.cordova"]=1:bE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gd.getInstance().currentlyOnline();return dm(this.interruptReasons_)&&e}}xs.nextPersistentConnectionId_=0;xs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new tt(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new tt(La,e),s=new tt(La,t);return this.compare(i,s)!==0}minPost(){return tt.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Au;class AM extends Vh{static get __EMPTY_NODE(){return Au}static set __EMPTY_NODE(e){Au=e}compare(e,t){return wo(e.name,t.name)}isDefinedOn(e){throw Za("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return tt.MIN}maxPost(){return new tt(lo,Au)}makePost(e,t){return ye(typeof e=="string","KeyIndex indexValue must always be a string."),new tt(e,Au)}toString(){return".key"}}const Sa=new AM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class en{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:en.RED,this.left=s!=null?s:Bn.EMPTY_NODE,this.right=r!=null?r:Bn.EMPTY_NODE}copy(e,t,i,s,r){return new en(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Bn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}en.RED=!0;en.BLACK=!1;class wk{copy(e,t,i,s,r){return this}insert(e,t,i){return new en(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bn{constructor(e,t=Bn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Bn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,en.BLACK,null,null))}remove(e){return new Bn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,en.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Iu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Iu(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Iu(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Iu(this.root_,null,this.comparator_,!0,e)}}Bn.EMPTY_NODE=new wk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(n,e){return wo(n.name,e.name)}function hv(n,e){return wo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wm;function Ek(n){wm=n}const IM=function(n){return typeof n=="number"?"number:"+lM(n):"string:"+n},RM=function(n){if(n.isLeafNode()){const e=n.val();ye(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ts(e,".sv"),"Priority must be a string or number.")}else ye(n===wm||n.isEmpty(),"priority of unexpected type.");ye(n===wm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L0;class Qt{constructor(e,t=Qt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ye(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RM(this.priorityNode_)}static set __childrenNodeConstructor(e){L0=e}static get __childrenNodeConstructor(){return L0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return it(e)?this:et(e)===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Qt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=et(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ye(i!==".priority"||gr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Qt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Tt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+IM(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=lM(this.value_):e+=this.value_,this.lazyHash_=oM(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qt.__childrenNodeConstructor?-1:(ye(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Qt.VALUE_TYPE_ORDER.indexOf(t),r=Qt.VALUE_TYPE_ORDER.indexOf(i);return ye(s>=0,"Unknown leaf type: "+t),ye(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Qt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PM,LM;function Mk(n){PM=n}function Tk(n){LM=n}class Ck extends Vh{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?wo(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return tt.MIN}maxPost(){return new tt(lo,new Qt("[PRIORITY-POST]",LM))}makePost(e,t){const i=PM(e);return new tt(t,new Qt("[PRIORITY-POST]",i))}toString(){return".priority"}}const zt=new Ck;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=Math.log(2);class Ik{constructor(e){const t=r=>parseInt(Math.log(r)/Ak,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $d=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new en(h,d.node,en.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),g=s(f+1,c);return d=n[f],h=t?t(d):d,new en(h,d.node,en.BLACK,p,g)}},r=function(l){let c=null,u=null,d=n.length;const h=function(p,g){const m=d-p,v=d;d-=p;const _=s(m+1,v),M=n[m],E=t?t(M):M;f(new en(E,M.node,g,null,_))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?h(m,en.BLACK):(h(m,en.BLACK),h(m,en.RED))}return u},o=new Ik(n.length),a=r(o);return new Bn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uf;const Oo={};class _s{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ye(Oo&&zt,"ChildrenNode.ts has not been loaded"),Uf=Uf||new _s({".priority":Oo},{".priority":zt}),Uf}get(e){const t=Ra(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Bn?t:null}hasIndex(e){return ts(this.indexSet_,e.toString())}addIndex(e,t){ye(e!==Sa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(tt.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=$d(i,e.getCompare()):a=Oo;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new _s(u,c)}addToIndexes(e,t){const i=kd(this.indexes_,(s,r)=>{const o=Ra(this.indexSet_,r);if(ye(o,"Missing index implementation for "+r),s===Oo)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(tt.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),$d(a,o.getCompare())}else return Oo;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new tt(e.name,a))),l.insert(e,e.node)}});return new _s(i,this.indexSet_)}removeFromIndexes(e,t){const i=kd(this.indexes_,s=>{if(s===Oo)return s;{const r=t.get(e.name);return r?s.remove(new tt(e.name,r)):s}});return new _s(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;class Ue{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&RM(this.priorityNode_),this.children_.isEmpty()&&ye(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wl||(wl=new Ue(new Bn(hv),null,_s.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wl}updatePriority(e){return this.children_.isEmpty()?this:new Ue(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?wl:t}}getChild(e){const t=et(e);return t===null?this:this.getImmediateChild(t).getChild(Tt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ye(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new tt(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?wl:this.priorityNode_;return new Ue(s,o,r)}}updateChild(e,t){const i=et(e);if(i===null)return t;{ye(et(e)!==".priority"||gr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Tt(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(zt,(o,a)=>{t[o]=a.val(e),i++,r&&Ue.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+IM(this.getPriority().val())+":"),this.forEachChild(zt,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":oM(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new tt(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new tt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new tt(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,tt.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,tt.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===au?-1:0}withIndex(e){if(e===Sa||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ue(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Sa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(zt),s=t.getIterator(zt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Sa?null:this.indexMap_.get(e.toString())}}Ue.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Rk extends Ue{constructor(){super(new Bn(hv),Ue.EMPTY_NODE,_s.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ue.EMPTY_NODE}isEmpty(){return!1}}const au=new Rk;Object.defineProperties(tt,{MIN:{value:new tt(La,Ue.EMPTY_NODE)},MAX:{value:new tt(lo,au)}});AM.__EMPTY_NODE=Ue.EMPTY_NODE;Qt.__childrenNodeConstructor=Ue;Ek(au);Tk(au);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=!0;function nn(n,e=null){if(n===null)return Ue.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ye(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Qt(t,nn(e))}if(!(n instanceof Array)&&Pk){const t=[];let i=!1;if(_n(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=nn(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new tt(o,l)))}}),t.length===0)return Ue.EMPTY_NODE;const r=$d(t,Sk,o=>o.name,hv);if(i){const o=$d(t,zt.getCompare());return new Ue(r,nn(e),new _s({".priority":o},{".priority":zt}))}else return new Ue(r,nn(e),_s.Default)}else{let t=Ue.EMPTY_NODE;return _n(n,(i,s)=>{if(ts(n,i)&&i.substring(0,1)!=="."){const r=nn(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(nn(e))}}Mk(nn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk extends Vh{constructor(e){super();this.indexPath_=e,ye(!it(e)&&et(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?wo(e.name,t.name):r}makePost(e,t){const i=nn(e),s=Ue.EMPTY_NODE.updateChild(this.indexPath_,i);return new tt(t,s)}maxPost(){const e=Ue.EMPTY_NODE.updateChild(this.indexPath_,au);return new tt(lo,e)}toString(){return Cc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk extends Vh{compare(e,t){const i=e.node.compareTo(t.node);return i===0?wo(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return tt.MIN}maxPost(){return tt.MAX}makePost(e,t){const i=nn(e);return new tt(t,i)}toString(){return".value"}}const Dk=new Nk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(n){return{type:"value",snapshotNode:n}}function Na(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ac(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ic(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ok(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){ye(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Ac(t,a)):ye(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Na(t,i)):o.trackChildChange(Ic(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(zt,(s,r)=>{t.hasChild(s)||i.trackChildChange(Ac(s,r))}),t.isLeafNode()||t.forEachChild(zt,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Ic(s,r,o))}else i.trackChildChange(Na(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ue.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.indexedFilter_=new fv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rc.getStartPost_(e),this.endPost_=Rc.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new tt(t,i))||(i=Ue.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=Ue.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Ue.EMPTY_NODE);const r=this;return t.forEachChild(zt,(o,a)=>{r.matches(new tt(o,a))||(s=s.updateImmediateChild(o,Ue.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.rangedFilter_=new Rc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new tt(t,i))||(i=Ue.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=Ue.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Ue.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(Ue.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,f)=>d(f,h)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(r,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:s=s.updateImmediateChild(d.name,Ue.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;ye(a.numChildren()===this.limit_,"");const l=new tt(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Ic(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Ac(t,d));const g=a.updateImmediateChild(t,Ue.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Na(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ac(c.name,c.node)),r.trackChildChange(Na(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,Ue.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=zt}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ye(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ye(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:La}hasEnd(){return this.endSet_}getIndexEndValue(){return ye(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ye(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ye(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===zt}copy(){const e=new pv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Fk(n){return n.loadsAllData()?new fv(n.getIndex()):n.hasLimit()?new kk(n):new Rc(n)}function N0(n){const e={};if(n.isDefault())return e;let t;return n.index_===zt?t="$priority":n.index_===Dk?t="$value":n.index_===Sa?t="$key":(ye(n.index_ instanceof Lk,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=on(t),n.startSet_&&(e.startAt=on(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+on(n.indexStartName_))),n.endSet_&&(e.endAt=on(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+on(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function D0(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==zt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends EM{constructor(e,t,i,s){super();this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ou("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ye(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=jd.getListenId_(e,i),a={};this.listens_[o]=a;const l=N0(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Ra(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=jd.getListenId_(e,t);delete this.listens_[i]}get(e){const t=N0(e._queryParams),i=e._path.toString(),s=new Kc;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+el(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bc(a.responseText)}catch{In("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&In("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this.rootNode_=Ue.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){return{value:null,children:new Map}}function DM(n,e,t){if(it(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=et(e);n.children.has(i)||n.children.set(i,qd());const s=n.children.get(i);e=Tt(e),DM(s,e,t)}}function Sm(n,e,t){n.value!==null?t(e,n.value):Vk(n,(i,s)=>{const r=new yt(e.toString()+"/"+i);Sm(s,r,t)})}function Vk(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&_n(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=10*1e3,zk=30*1e3,Hk=5*60*1e3;class Wk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Uk(e);const i=O0+(zk-O0)*Math.random();Yl(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;_n(e,(s,r)=>{r>0&&ts(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Yl(this.reportStats_.bind(this),Math.floor(Math.random()*2*Hk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xi||(xi={}));function mv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=xi.ACK_USER_WRITE,this.source=mv()}operationForChild(e){if(it(this.path)){if(this.affectedTree.value!=null)return ye(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new yt(e));return new Xd(ht(),t,this.revert)}}else return ye(et(this.path)===e,"operationForChild called for unrelated child."),new Xd(Tt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.source=e,this.path=t,this.type=xi.LISTEN_COMPLETE}operationForChild(e){return it(this.path)?new Pc(this.source,ht()):new Pc(this.source,Tt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=xi.OVERWRITE}operationForChild(e){return it(this.path)?new co(this.source,ht(),this.snap.getImmediateChild(e)):new co(this.source,Tt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=xi.MERGE}operationForChild(e){if(it(this.path)){const t=this.children.subtree(new yt(e));return t.isEmpty()?null:t.value?new co(this.source,ht(),t.value):new Da(this.source,ht(),t)}else return ye(et(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Da(this.source,Tt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(it(e))return this.isFullyInitialized()&&!this.filtered_;const t=et(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $k(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ok(o.childName,o.snapshotNode))}),Sl(n,s,"child_removed",e,i,t),Sl(n,s,"child_added",e,i,t),Sl(n,s,"child_moved",r,i,t),Sl(n,s,"child_changed",e,i,t),Sl(n,s,"value",e,i,t),s}function Sl(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>qk(n,a,l)),o.forEach(a=>{const l=jk(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function jk(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function qk(n,e,t){if(e.childName==null||t.childName==null)throw Za("Should only compare child_ events.");const i=new tt(e.childName,e.snapshotNode),s=new tt(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n,e){return{eventCache:n,serverCache:e}}function Kl(n,e,t,i){return Uh(new uo(e,t,i),n.serverCache)}function OM(n,e,t,i){return Uh(n.eventCache,new uo(e,t,i))}function Em(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ho(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zf;const Xk=()=>(zf||(zf=new Bn(RO)),zf);class Mt{constructor(e,t=Xk()){this.value=e,this.children=t}static fromObject(e){let t=new Mt(null);return _n(e,(i,s)=>{t=t.set(new yt(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ht(),value:this.value};if(it(e))return null;{const i=et(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Tt(e),t);return r!=null?{path:Ut(new yt(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(it(e))return this;{const t=et(e),i=this.children.get(t);return i!==null?i.subtree(Tt(e)):new Mt(null)}}set(e,t){if(it(e))return new Mt(t,this.children);{const i=et(e),r=(this.children.get(i)||new Mt(null)).set(Tt(e),t),o=this.children.insert(i,r);return new Mt(this.value,o)}}remove(e){if(it(e))return this.children.isEmpty()?new Mt(null):new Mt(null,this.children);{const t=et(e),i=this.children.get(t);if(i){const s=i.remove(Tt(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Mt(null):new Mt(this.value,r)}else return this}}get(e){if(it(e))return this.value;{const t=et(e),i=this.children.get(t);return i?i.get(Tt(e)):null}}setTree(e,t){if(it(e))return t;{const i=et(e),r=(this.children.get(i)||new Mt(null)).setTree(Tt(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Mt(this.value,o)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ut(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(it(e))return null;{const r=et(e),o=this.children.get(r);return o?o.findOnPath_(Tt(e),Ut(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,i){if(it(e))return this;{this.value&&i(t,this.value);const s=et(e),r=this.children.get(s);return r?r.foreachOnPath_(Tt(e),Ut(t,s),i):new Mt(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Ut(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.writeTree_=e}static empty(){return new Mi(new Mt(null))}}function Jl(n,e,t){if(it(e))return new Mi(new Mt(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Fn(s,e);return r=r.updateChild(o,t),new Mi(n.writeTree_.set(s,r))}else{const s=new Mt(t),r=n.writeTree_.setTree(e,s);return new Mi(r)}}}function Mm(n,e,t){let i=n;return _n(t,(s,r)=>{i=Jl(i,Ut(e,s),r)}),i}function k0(n,e){if(it(e))return Mi.empty();{const t=n.writeTree_.setTree(e,new Mt(null));return new Mi(t)}}function Tm(n,e){return So(n,e)!=null}function So(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Fn(t.path,e)):null}function F0(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(zt,(i,s)=>{e.push(new tt(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new tt(i,s.value))}),e}function lr(n,e){if(it(e))return n;{const t=So(n,e);return t!=null?new Mi(new Mt(t)):new Mi(n.writeTree_.subtree(e))}}function Cm(n){return n.writeTree_.isEmpty()}function Oa(n,e){return kM(ht(),n.writeTree_,e)}function kM(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(ye(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=kM(Ut(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Ut(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n,e){return UM(e,n)}function Yk(n,e,t,i,s){ye(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Jl(n.visibleWrites,e,t)),n.lastWriteId=i}function Kk(n,e,t,i){ye(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Mm(n.visibleWrites,e,t),n.lastWriteId=i}function Jk(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Zk(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);ye(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Qk(a,i.path)?s=!1:ni(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return e2(n),!0;if(i.snap)n.visibleWrites=k0(n.visibleWrites,i.path);else{const a=i.children;_n(a,l=>{n.visibleWrites=k0(n.visibleWrites,Ut(i.path,l))})}return!0}else return!1}function Qk(n,e){if(n.snap)return ni(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ni(Ut(n.path,t),e))return!0;return!1}function e2(n){n.visibleWrites=FM(n.allWrites,t2,ht()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function t2(n){return n.visible}function FM(n,e,t){let i=Mi.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ni(t,o)?(a=Fn(t,o),i=Jl(i,a,r.snap)):ni(o,t)&&(a=Fn(o,t),i=Jl(i,ht(),r.snap.getChild(a)));else if(r.children){if(ni(t,o))a=Fn(t,o),i=Mm(i,a,r.children);else if(ni(o,t))if(a=Fn(o,t),it(a))i=Mm(i,ht(),r.children);else{const l=Ra(r.children,et(a));if(l){const c=l.getChild(Tt(a));i=Jl(i,ht(),c)}}}else throw Za("WriteRecord should have .snap or .children")}}return i}function BM(n,e,t,i,s){if(!i&&!s){const r=So(n.visibleWrites,e);if(r!=null)return r;{const o=lr(n.visibleWrites,e);if(Cm(o))return t;if(t==null&&!Tm(o,ht()))return null;{const a=t||Ue.EMPTY_NODE;return Oa(o,a)}}}else{const r=lr(n.visibleWrites,e);if(!s&&Cm(r))return t;if(!s&&t==null&&!Tm(r,ht()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ni(c.path,e)||ni(e,c.path))},a=FM(n.allWrites,o,e),l=t||Ue.EMPTY_NODE;return Oa(a,l)}}}function n2(n,e,t){let i=Ue.EMPTY_NODE;const s=So(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(zt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=lr(n.visibleWrites,e);return t.forEachChild(zt,(o,a)=>{const l=Oa(lr(r,new yt(o)),a);i=i.updateImmediateChild(o,l)}),F0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=lr(n.visibleWrites,e);return F0(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function i2(n,e,t,i,s){ye(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ut(e,t);if(Tm(n.visibleWrites,r))return null;{const o=lr(n.visibleWrites,r);return Cm(o)?s.getChild(t):Oa(o,s.getChild(t))}}function s2(n,e,t,i){const s=Ut(e,t),r=So(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=lr(n.visibleWrites,s);return Oa(o,i.getNode().getImmediateChild(t))}else return null}function r2(n,e){return So(n.visibleWrites,e)}function o2(n,e,t,i,s,r,o){let a;const l=lr(n.visibleWrites,e),c=So(l,ht());if(c!=null)a=c;else if(t!=null)a=Oa(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function a2(){return{visibleWrites:Mi.empty(),allWrites:[],lastWriteId:-1}}function Yd(n,e,t,i){return BM(n.writeTree,n.treePath,e,t,i)}function yv(n,e){return n2(n.writeTree,n.treePath,e)}function B0(n,e,t,i){return i2(n.writeTree,n.treePath,e,t,i)}function Kd(n,e){return r2(n.writeTree,Ut(n.treePath,e))}function l2(n,e,t,i,s,r){return o2(n.writeTree,n.treePath,e,t,i,s,r)}function xv(n,e,t){return s2(n.writeTree,n.treePath,e,t)}function VM(n,e){return UM(Ut(n.treePath,e),n.writeTree)}function UM(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;ye(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ye(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Ic(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ac(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Na(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ic(i,e.snapshotNode,s.oldSnap));else throw Za("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const zM=new u2;class bv{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new uo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xv(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ho(this.viewCache_),r=l2(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(n){return{filter:n}}function h2(n,e){ye(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ye(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function f2(n,e,t,i,s){const r=new c2;let o,a;if(t.type===xi.OVERWRITE){const c=t;c.source.fromUser?o=Am(n,e,c.path,c.snap,i,s,r):(ye(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!it(c.path),o=Jd(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===xi.MERGE){const c=t;c.source.fromUser?o=m2(n,e,c.path,c.children,i,s,r):(ye(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Im(n,e,c.path,c.children,i,s,a,r))}else if(t.type===xi.ACK_USER_WRITE){const c=t;c.revert?o=_2(n,e,c.path,i,s,r):o=g2(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===xi.LISTEN_COMPLETE)o=v2(n,e,t.path,i,r);else throw Za("Unknown operation type: "+t.type);const l=r.getChanges();return p2(e,o,l),{viewCache:o,changes:l}}function p2(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Em(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(NM(Em(e)))}}function HM(n,e,t,i,s,r){const o=e.eventCache;if(Kd(i,t)!=null)return e;{let a,l;if(it(t))if(ye(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ho(e),u=c instanceof Ue?c:Ue.EMPTY_NODE,d=yv(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Yd(i,ho(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=et(t);if(c===".priority"){ye(gr(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=B0(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=Tt(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=B0(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=xv(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return Kl(e,a,o.isFullyInitialized()||it(t),n.filter.filtersNodes())}}function Jd(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(it(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=et(t);if(!l.isCompleteForPath(t)&&gr(t)>1)return e;const p=Tt(t),m=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,p,zM,null)}const d=OM(e,c,l.isFullyInitialized()||it(t),u.filtersNodes()),h=new bv(s,d,r);return HM(n,d,t,s,h,a)}function Am(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new bv(s,e,r);if(it(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Kl(e,c,!0,n.filter.filtersNodes());else{const d=et(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Kl(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Tt(t),f=a.getNode().getImmediateChild(d);let p;if(it(h))p=i;else{const g=u.getCompleteChild(d);g!=null?cv(h)===".priority"&&g.getChild(TM(h)).isEmpty()?p=g:p=g.updateChild(h,i):p=Ue.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),d,p,h,u,o);l=Kl(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function V0(n,e){return n.eventCache.isCompleteForChild(e)}function m2(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Ut(t,l);V0(e,et(u))&&(a=Am(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Ut(t,l);V0(e,et(u))||(a=Am(n,a,u,c,s,r,o))}),a}function U0(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Im(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;it(t)?c=i:c=new Mt(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=U0(n,f,h);l=Jd(n,l,new yt(d),p,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=U0(n,p,h);l=Jd(n,l,new yt(d),g,s,r,o,a)}}),l}function g2(n,e,t,i,s,r,o){if(Kd(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(it(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Jd(n,e,t,l.getNode().getChild(t),s,r,a,o);if(it(t)){let c=new Mt(null);return l.getNode().forEachChild(Sa,(u,d)=>{c=c.set(new yt(u),d)}),Im(n,e,t,c,s,r,a,o)}else return e}else{let c=new Mt(null);return i.foreach((u,d)=>{const h=Ut(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Im(n,e,t,c,s,r,a,o)}}function v2(n,e,t,i,s){const r=e.serverCache,o=OM(e,r.getNode(),r.isFullyInitialized()||it(t),r.isFiltered());return HM(n,o,t,i,zM,s)}function _2(n,e,t,i,s,r){let o;if(Kd(i,t)!=null)return e;{const a=new bv(i,e,s),l=e.eventCache.getNode();let c;if(it(t)||et(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Yd(i,ho(e));else{const d=e.serverCache.getNode();ye(d instanceof Ue,"serverChildren would be complete if leaf node"),u=yv(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=et(t);let d=xv(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,Tt(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,Ue.EMPTY_NODE,Tt(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yd(i,ho(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Kd(i,ht())!=null,Kl(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new fv(i.getIndex()),r=Fk(i);this.processor_=d2(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(Ue.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Ue.EMPTY_NODE,a.getNode(),null),u=new uo(l,o.isFullyInitialized(),s.filtersNodes()),d=new uo(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Uh(d,u),this.eventGenerator_=new Gk(this.query_)}get query(){return this.query_}}function x2(n){return n.viewCache_.serverCache.getNode()}function b2(n,e){const t=ho(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!it(e)&&!t.getImmediateChild(et(e)).isEmpty())?t.getChild(e):null}function z0(n){return n.eventRegistrations_.length===0}function w2(n,e){n.eventRegistrations_.push(e)}function H0(n,e,t){const i=[];if(t){ye(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function W0(n,e,t,i){e.type===xi.MERGE&&e.source.queryId!==null&&(ye(ho(n.viewCache_),"We should always have a full cache before handling merges"),ye(Em(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=f2(n.processor_,s,e,t,i);return h2(n.processor_,r.viewCache),ye(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,WM(n,r.changes,r.viewCache.eventCache.getNode(),null)}function S2(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(zt,(r,o)=>{i.push(Na(r,o))}),t.isFullyInitialized()&&i.push(NM(t.getNode())),WM(n,i,t.getNode(),e)}function WM(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return $k(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zd;class E2{constructor(){this.views=new Map}}function M2(n){ye(!Zd,"__referenceConstructor has already been defined"),Zd=n}function T2(){return ye(Zd,"Reference.ts has not been loaded"),Zd}function C2(n){return n.views.size===0}function wv(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return ye(r!=null,"SyncTree gave us an op for an invalid query."),W0(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(W0(o,e,t,i));return r}}function A2(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Yd(t,s?i:null),l=!1;a?l=!0:i instanceof Ue?(a=yv(t,i),l=!1):(a=Ue.EMPTY_NODE,l=!1);const c=Uh(new uo(a,l,!1),new uo(i,s,!1));return new y2(e,c)}return o}function I2(n,e,t,i,s,r){const o=A2(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),w2(o,t),S2(o,t)}function R2(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=vr(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(H0(c,t,i)),z0(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(H0(l,t,i)),z0(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!vr(n)&&r.push(new(T2())(e._repo,e._path)),{removed:r,events:o}}function GM(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ea(n,e){let t=null;for(const i of n.views.values())t=t||b2(i,e);return t}function $M(n,e){if(e._queryParams.loadsAllData())return zh(n);{const i=e._queryIdentifier;return n.views.get(i)}}function jM(n,e){return $M(n,e)!=null}function vr(n){return zh(n)!=null}function zh(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qd;function P2(n){ye(!Qd,"__referenceConstructor has already been defined"),Qd=n}function L2(){return ye(Qd,"Reference.ts has not been loaded"),Qd}let N2=1;class G0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Mt(null),this.pendingWriteTree_=a2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qM(n,e,t,i,s){return Yk(n.pendingWriteTree_,e,t,i,s),s?il(n,new co(mv(),e,t)):[]}function D2(n,e,t,i){Kk(n.pendingWriteTree_,e,t,i);const s=Mt.fromObject(t);return il(n,new Da(mv(),e,s))}function nr(n,e,t=!1){const i=Jk(n.pendingWriteTree_,e);if(Zk(n.pendingWriteTree_,e)){let r=new Mt(null);return i.snap!=null?r=r.set(ht(),!0):_n(i.children,o=>{r=r.set(new yt(o),!0)}),il(n,new Xd(i.path,r,t))}else return[]}function Hh(n,e,t){return il(n,new co(gv(),e,t))}function O2(n,e,t){const i=Mt.fromObject(t);return il(n,new Da(gv(),e,i))}function k2(n,e){return il(n,new Pc(gv(),e))}function F2(n,e,t){const i=Ev(n,t);if(i){const s=Mv(i),r=s.path,o=s.queryId,a=Fn(r,e),l=new Pc(vv(o),a);return Tv(n,r,l)}else return[]}function Rm(n,e,t,i){const s=e._path,r=n.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||jM(r,e))){const a=R2(r,e,t,i);C2(r)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(d,h)=>vr(h));if(c&&!u){const d=n.syncPointTree_.subtree(s);if(!d.isEmpty()){const h=U2(d);for(let f=0;f<h.length;++f){const p=h[f],g=p.query,m=KM(n,p);n.listenProvider_.startListening(Zl(g),eh(n,g),m.hashFn,m.onComplete)}}}!u&&l.length>0&&!i&&(c?n.listenProvider_.stopListening(Zl(e),null):l.forEach(d=>{const h=n.queryToTagMap.get(Wh(d));n.listenProvider_.stopListening(Zl(d),h)})),z2(n,l)}return o}function B2(n,e,t,i){const s=Ev(n,i);if(s!=null){const r=Mv(s),o=r.path,a=r.queryId,l=Fn(o,e),c=new co(vv(a),l,t);return Tv(n,o,c)}else return[]}function V2(n,e,t,i){const s=Ev(n,i);if(s){const r=Mv(s),o=r.path,a=r.queryId,l=Fn(o,e),c=Mt.fromObject(t),u=new Da(vv(a),l,c);return Tv(n,o,u)}else return[]}function $0(n,e,t){const i=e._path;let s=null,r=!1;n.syncPointTree_.foreachOnPath(i,(d,h)=>{const f=Fn(d,i);s=s||Ea(h,f),r=r||vr(h)});let o=n.syncPointTree_.get(i);o?(r=r||vr(o),s=s||Ea(o,ht())):(o=new E2,n.syncPointTree_=n.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=Ue.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((h,f)=>{const p=Ea(f,ht());p&&(s=s.updateImmediateChild(h,p))}));const l=jM(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=Wh(e);ye(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=H2();n.queryToTagMap.set(d,h),n.tagToQueryMap.set(h,d)}const c=_v(n.pendingWriteTree_,i);let u=I2(o,e,t,c,s,a);if(!l&&!r){const d=$M(o,e);u=u.concat(W2(n,e,d))}return u}function Sv(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Fn(o,e),c=Ea(a,l);if(c)return c});return BM(s,e,r,t,!0)}function il(n,e){return XM(e,n.syncPointTree_,null,_v(n.pendingWriteTree_,ht()))}function XM(n,e,t,i){if(it(n.path))return YM(n,e,t,i);{const s=e.get(ht());t==null&&s!=null&&(t=Ea(s,ht()));let r=[];const o=et(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=VM(i,o);r=r.concat(XM(a,l,c,u))}return s&&(r=r.concat(wv(s,n,i,t))),r}}function YM(n,e,t,i){const s=e.get(ht());t==null&&s!=null&&(t=Ea(s,ht()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=VM(i,o),u=n.operationForChild(o);u&&(r=r.concat(YM(u,a,l,c)))}),s&&(r=r.concat(wv(s,n,i,t))),r}function KM(n,e){const t=e.query,i=eh(n,t);return{hashFn:()=>(x2(e)||Ue.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?F2(n,t._path,i):k2(n,t._path);{const r=NO(s,t);return Rm(n,t,null,r)}}}}function eh(n,e){const t=Wh(e);return n.queryToTagMap.get(t)}function Wh(n){return n._path.toString()+"$"+n._queryIdentifier}function Ev(n,e){return n.tagToQueryMap.get(e)}function Mv(n){const e=n.indexOf("$");return ye(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new yt(n.substr(0,e))}}function Tv(n,e,t){const i=n.syncPointTree_.get(e);ye(i,"Missing sync point for query tag that we're tracking");const s=_v(n.pendingWriteTree_,e);return wv(i,t,s,null)}function U2(n){return n.fold((e,t,i)=>{if(t&&vr(t))return[zh(t)];{let s=[];return t&&(s=GM(t)),_n(i,(r,o)=>{s=s.concat(o)}),s}})}function Zl(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(L2())(n._repo,n._path):n}function z2(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Wh(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function H2(){return N2++}function W2(n,e,t){const i=e._path,s=eh(n,e),r=KM(n,t),o=n.listenProvider_.startListening(Zl(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)ye(!vr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!it(c)&&u&&vr(u))return[zh(u).query];{let h=[];return u&&(h=h.concat(GM(u).map(f=>f.query))),_n(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Zl(u),eh(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Cv(t)}node(){return this.node_}}class Av{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ut(this.path_,e);return new Av(this.syncTree_,t)}node(){return Sv(this.syncTree_,this.path_)}}const G2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},j0=function(n,e,t){if(!n||typeof n!="object")return n;if(ye(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return $2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return j2(n[".sv"],e);ye(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},$2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ye(!1,"Unexpected server value: "+n)}},j2=function(n,e,t){n.hasOwnProperty("increment")||ye(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&ye(!1,"Unexpected increment value: "+i);const s=e.node();if(ye(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},JM=function(n,e,t,i){return Iv(e,new Av(t,n),i)},ZM=function(n,e,t){return Iv(n,new Cv(e),t)};function Iv(n,e,t){const i=n.getPriority().val(),s=j0(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=j0(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Qt(a,nn(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Qt(s))),o.forEachChild(zt,(a,l)=>{const c=Iv(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Pv(n,e){let t=e instanceof yt?e:new yt(e),i=n,s=et(t);for(;s!==null;){const r=Ra(i.node.children,s)||{children:{},childCount:0};i=new Rv(s,i,r),t=Tt(t),s=et(t)}return i}function sl(n){return n.node.value}function QM(n,e){n.node.value=e,Pm(n)}function eT(n){return n.node.childCount>0}function q2(n){return sl(n)===void 0&&!eT(n)}function Gh(n,e){_n(n.node.children,(t,i)=>{e(new Rv(t,n,i))})}function tT(n,e,t,i){t&&!i&&e(n),Gh(n,s=>{tT(s,e,!0,i)}),t&&i&&e(n)}function X2(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function lu(n){return new yt(n.parent===null?n.name:lu(n.parent)+"/"+n.name)}function Pm(n){n.parent!==null&&Y2(n.parent,n.name,n)}function Y2(n,e,t){const i=q2(t),s=ts(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Pm(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Pm(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=/[\[\].#$\/\u0000-\u001F\u007F]/,J2=/[\[\].#$\u0000-\u001F\u007F]/,Hf=10*1024*1024,Lv=function(n){return typeof n=="string"&&n.length!==0&&!K2.test(n)},nT=function(n){return typeof n=="string"&&n.length!==0&&!J2.test(n)},Z2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nT(n)},Q2=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!sv(n)||n&&typeof n=="object"&&ts(n,".sv")},e3=function(n,e,t,i){i&&e===void 0||$h(Nh(n,"value"),e,t)},$h=function(n,e,t){const i=t instanceof yt?new pk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Br(i));if(typeof e=="function")throw new Error(n+"contains a function "+Br(i)+" with contents = "+e.toString());if(sv(e))throw new Error(n+"contains "+e.toString()+" "+Br(i));if(typeof e=="string"&&e.length>Hf/3&&Dh(e)>Hf)throw new Error(n+"contains a string greater than "+Hf+" utf8 bytes "+Br(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(_n(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Lv(o)))throw new Error(n+" contains an invalid key ("+o+") "+Br(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mk(i,o),$h(n,a,i),gk(i)}),s&&r)throw new Error(n+' contains ".value" child '+Br(i)+" in addition to actual children.")}},t3=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=Cc(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Lv(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(fk);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&ni(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},n3=function(n,e,t,i){if(i&&e===void 0)return;const s=Nh(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];_n(e,(o,a)=>{const l=new yt(o);if($h(s,a,Ut(t,l)),cv(l)===".priority"&&!Q2(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),t3(s,r)},iT=function(n,e,t,i){if(!(i&&t===void 0)&&!nT(t))throw new Error(Nh(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},i3=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),iT(n,e,t,i)},s3=function(n,e){if(et(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},r3=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Z2(t))throw new Error(Nh(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jh(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!uv(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function sT(n,e,t){jh(n,t),rT(n,i=>uv(i,e))}function Ri(n,e,t){jh(n,t),rT(n,i=>ni(i,e)||ni(e,i))}function rT(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(a3(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function a3(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Qr&&mn("event: "+t.toString()),nl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l3="repo_interrupt",c3=25;class u3{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new o3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qd(),this.transactionQueueTree_=new Rv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function d3(n,e,t){if(n.stats_=av(n.repoInfo_),n.forceRestClient_||FO())n.server_=new jd(n.repoInfo_,(i,s,r,o)=>{q0(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>X0(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{on(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new xs(n.repoInfo_,e,(i,s,r,o)=>{q0(n,i,s,r,o)},i=>{X0(n,i)},i=>{f3(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=WO(n.repoInfo_,()=>new Wk(n.stats_,n.server_)),n.infoData_=new Bk,n.infoSyncTree_=new G0({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Hh(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Nv(n,"connected",!1),n.serverSyncTree_=new G0({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Ri(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function h3(n){const t=n.infoData_.getNode(new yt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function qh(n){return G2({timestamp:h3(n)})}function q0(n,e,t,i,s){n.dataUpdateCount++;const r=new yt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=kd(t,c=>nn(c));o=V2(n.serverSyncTree_,r,l,s)}else{const l=nn(t);o=B2(n.serverSyncTree_,r,l,s)}else if(i){const l=kd(t,c=>nn(c));o=O2(n.serverSyncTree_,r,l)}else{const l=nn(t);o=Hh(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ka(n,r)),Ri(n.eventQueue_,a,o)}function X0(n,e){Nv(n,"connected",e),e===!1&&g3(n)}function f3(n,e){_n(e,(t,i)=>{Nv(n,t,i)})}function Nv(n,e,t){const i=new yt("/.info/"+e),s=nn(t);n.infoData_.updateSnapshot(i,s);const r=Hh(n.infoSyncTree_,i,s);Ri(n.eventQueue_,i,r)}function Dv(n){return n.nextWriteId_++}function p3(n,e,t,i,s){Xh(n,"set",{path:e.toString(),value:t,priority:i});const r=qh(n),o=nn(t,i),a=Sv(n.serverSyncTree_,e),l=ZM(o,a,r),c=Dv(n),u=qM(n.serverSyncTree_,e,l,c,!0);jh(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||In("set at "+e+" failed: "+h);const g=nr(n.serverSyncTree_,c,!p);Ri(n.eventQueue_,e,g),Lm(n,s,h,f)});const d=kv(n,e);ka(n,d),Ri(n.eventQueue_,d,[])}function m3(n,e,t,i){Xh(n,"update",{path:e.toString(),value:t});let s=!0;const r=qh(n),o={};if(_n(t,(a,l)=>{s=!1,o[a]=JM(Ut(e,a),nn(l),n.serverSyncTree_,r)}),s)mn("update() called with empty data.  Don't do anything."),Lm(n,i,"ok",void 0);else{const a=Dv(n),l=D2(n.serverSyncTree_,e,o,a);jh(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const d=c==="ok";d||In("update at "+e+" failed: "+c);const h=nr(n.serverSyncTree_,a,!d),f=h.length>0?ka(n,e):e;Ri(n.eventQueue_,f,h),Lm(n,i,c,u)}),_n(t,c=>{const u=kv(n,Ut(e,c));ka(n,u)}),Ri(n.eventQueue_,e,[])}}function g3(n){Xh(n,"onDisconnectEvents");const e=qh(n),t=qd();Sm(n.onDisconnect_,ht(),(s,r)=>{const o=JM(s,r,n.serverSyncTree_,e);DM(t,s,o)});let i=[];Sm(t,ht(),(s,r)=>{i=i.concat(Hh(n.serverSyncTree_,s,r));const o=kv(n,s);ka(n,o)}),n.onDisconnect_=qd(),Ri(n.eventQueue_,ht(),i)}function v3(n,e,t){let i;et(e._path)===".info"?i=$0(n.infoSyncTree_,e,t):i=$0(n.serverSyncTree_,e,t),sT(n.eventQueue_,e._path,i)}function Y0(n,e,t){let i;et(e._path)===".info"?i=Rm(n.infoSyncTree_,e,t):i=Rm(n.serverSyncTree_,e,t),sT(n.eventQueue_,e._path,i)}function _3(n){n.persistentConnection_&&n.persistentConnection_.interrupt(l3)}function Xh(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),mn(t,...e)}function Lm(n,e,t,i){e&&nl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function oT(n,e,t){return Sv(n.serverSyncTree_,e,t)||Ue.EMPTY_NODE}function Ov(n,e=n.transactionQueueTree_){if(e||Yh(n,e),sl(e)){const t=lT(n,e);ye(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&y3(n,lu(e),t)}else eT(e)&&Gh(e,t=>{Ov(n,t)})}function y3(n,e,t){const i=t.map(c=>c.currentWriteId),s=oT(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];ye(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Fn(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Xh(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(nr(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Yh(n,Pv(n.transactionQueueTree_,e)),Ov(n,n.transactionQueueTree_),Ri(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)nl(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{In("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}ka(n,e)}},o)}function ka(n,e){const t=aT(n,e),i=lu(t),s=lT(n,t);return x3(n,s,i),i}function x3(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Fn(t,l.path);let u=!1,d;if(ye(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(nr(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=c3)u=!0,d="maxretry",s=s.concat(nr(n.serverSyncTree_,l.currentWriteId,!0));else{const h=oT(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){$h("transaction failed: Data returned ",f,l.path);let p=nn(f);typeof f=="object"&&f!=null&&ts(f,".priority")||(p=p.updatePriority(h.getPriority()));const m=l.currentWriteId,v=qh(n),_=ZM(p,h,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=_,l.currentWriteId=Dv(n),o.splice(o.indexOf(m),1),s=s.concat(qM(n.serverSyncTree_,l.path,_,l.currentWriteId,l.applyLocally)),s=s.concat(nr(n.serverSyncTree_,m,!0))}else u=!0,d="nodata",s=s.concat(nr(n.serverSyncTree_,l.currentWriteId,!0))}Ri(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Yh(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)nl(i[a]);Ov(n,n.transactionQueueTree_)}function aT(n,e){let t,i=n.transactionQueueTree_;for(t=et(e);t!==null&&sl(i)===void 0;)i=Pv(i,t),e=Tt(e),t=et(e);return i}function lT(n,e){const t=[];return cT(n,e,t),t.sort((i,s)=>i.order-s.order),t}function cT(n,e,t){const i=sl(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Gh(e,s=>{cT(n,s,t)})}function Yh(n,e){const t=sl(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,QM(e,t.length>0?t:void 0)}Gh(e,i=>{Yh(n,i)})}function kv(n,e){const t=lu(aT(n,e)),i=Pv(n.transactionQueueTree_,e);return X2(i,s=>{Wf(n,s)}),Wf(n,i),tT(i,s=>{Wf(n,s)}),t}function Wf(n,e){const t=sl(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ye(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(ye(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(nr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?QM(e,void 0):t.length=r+1,Ri(n.eventQueue_,lu(e),s);for(let o=0;o<i.length;o++)nl(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function w3(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):In(`Invalid query segment '${t}' in query '${n}'`)}return e}const K0=function(n,e){const t=S3(n),i=t.namespace;t.domain==="firebase.com"&&ao(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ao("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||AO();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new UO(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new yt(t.pathString)}},S3=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=b3(n.substring(u,d)));const h=w3(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+on(this.snapshot.exportVal())}}class dT{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ye(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return it(this._path)?null:cv(this._path)}get ref(){return new Ps(this._repo,this._path)}get _queryIdentifier(){const e=D0(this._queryParams),t=rv(e);return t==="{}"?"default":t}get _queryObject(){return D0(this._queryParams)}isEqual(e){if(e=Rs(e),!(e instanceof Fv))return!1;const t=this._repo===e._repo,i=uv(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+hk(this._path)}}class Ps extends Fv{constructor(e,t){super(e,t,new pv,!1)}get parent(){const e=TM(this._path);return e===null?null:new Ps(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Lc{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new yt(e),i=th(this.ref,e);return new Lc(this._node.getChild(t),i,zt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Lc(s,th(this.ref,i),zt)))}hasChild(e){const t=new yt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Nm(n,e){return n=Rs(n),n._checkNotDeleted("ref"),e!==void 0?th(n._root,e):n._root}function th(n,e){return n=Rs(n),et(n._path)===null?i3("child","path",e,!1):iT("child","path",e,!1),new Ps(n._repo,Ut(n._path,e))}function M3(n,e){n=Rs(n),s3("set",n._path),e3("set",e,n._path,!1);const t=new Kc;return p3(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function c6(n,e){n3("update",e,n._path,!1);const t=new Kc;return m3(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Bv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new uT("value",this,new Lc(e.snapshotNode,new Ps(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new dT(this,e,t):null}matches(e){return e instanceof Bv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Vv{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new dT(this,e,t):null}createEvent(e,t){ye(e.childName!=null,"Child events should have a childName.");const i=th(new Ps(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new uT(e.type,this,new Lc(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Vv?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function T3(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,d)=>{Y0(n._repo,n,a),l(u,d)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new E3(t,r||void 0),a=e==="value"?new Bv(o):new Vv(e,o);return v3(n._repo,n,a),()=>Y0(n._repo,n,a)}function hT(n,e,t,i){return T3(n,"value",e,t,i)}M2(Ps);P2(Ps);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C3="FIREBASE_DATABASE_EMULATOR_HOST",Dm={};let A3=!1;function I3(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ao("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mn("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=K0(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&{}&&(c={}[C3]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=K0(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new xm(xm.OWNER):new VO(n.name,n.options,e);r3("Invalid Firebase Database URL",o),it(o.path)||ao("Database URL must point to the root of a Firebase Database (not including a child path).");const d=P3(a,n,u,new BO(n.name,t));return new L3(d,n)}function R3(n,e){const t=Dm[e];(!t||t[n.key]!==n)&&ao(`Database ${e}(${n.repoInfo_}) has already been deleted.`),_3(n),delete t[n.key]}function P3(n,e,t,i){let s=Dm[e.name];s||(s={},Dm[e.name]=s);let r=s[n.toURLString()];return r&&ao("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new u3(n,A3,t,i),s[n.toURLString()]=r,r}class L3{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(d3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ps(this._repo,ht())),this._rootInternal}_delete(){return this._rootInternal!==null&&(R3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ao("Cannot call "+e+" on a deleted database.")}}function Om(n=CE(),e){return Xg(n,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N3(n){SO(Zc),Pa(new io("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return I3(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ar(v0,_0,n),ar(v0,_0,"esm2017")}xs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};N3();const D3="modulepreload",J0={},O3="/viteMonitorbox/",ra=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${O3}${i}`,i in J0)return;J0[i]=!0;const s=i.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":D3,s||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),s)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function k3(){return fT().__VUE_DEVTOOLS_GLOBAL_HOOK__}function fT(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const F3=typeof Proxy=="function",B3="devtools-plugin:setup",V3="plugin:settings:set";let ko,km;function U3(){var n;return ko!==void 0||(typeof window!="undefined"&&window.performance?(ko=!0,km=window.performance):typeof global!="undefined"&&((n=global.perf_hooks)===null||n===void 0?void 0:n.performance)?(ko=!0,km=global.perf_hooks.performance):ko=!1),ko}function z3(){return U3()?km.now():Date.now()}class H3{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return z3()}},t&&t.on(V3,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function W3(n,e){const t=n,i=fT(),s=k3(),r=F3&&t.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(B3,n,e);else{const o=r?new H3(t,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const pT=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",rl=n=>pT?Symbol(n):"_vr_"+n,G3=rl("rvlm"),Z0=rl("rvd"),Uv=rl("r"),mT=rl("rl"),Fm=rl("rvl"),oa=typeof window!="undefined";function $3(n){return n.__esModule||pT&&n[Symbol.toStringTag]==="Module"}const bt=Object.assign;function Gf(n,e){const t={};for(const i in e){const s=e[i];t[i]=Array.isArray(s)?s.map(n):n(s)}return t}const Ql=()=>{},j3=/\/$/,q3=n=>n.replace(j3,"");function $f(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),s=n(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=J3(i!=null?i:e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function X3(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Q0(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Y3(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Fa(e.matched[i],t.matched[s])&&gT(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Fa(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function gT(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!K3(n[t],e[t]))return!1;return!0}function K3(n,e){return Array.isArray(n)?ex(n,e):Array.isArray(e)?ex(e,n):n===e}function ex(n,e){return Array.isArray(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function J3(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let s=t.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],!(s===1||o==="."))if(o==="..")s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Nc;(function(n){n.pop="pop",n.push="push"})(Nc||(Nc={}));var ec;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ec||(ec={}));function Z3(n){if(!n)if(oa){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),q3(n)}const Q3=/^[^#]+#/;function eF(n,e){return n.replace(Q3,"#")+e}function tF(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Kh=()=>({left:window.pageXOffset,top:window.pageYOffset});function nF(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=tF(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tx(n,e){return(history.state?history.state.position-e:-1)+n}const Bm=new Map;function iF(n,e){Bm.set(n,e)}function sF(n){const e=Bm.get(n);return Bm.delete(n),e}let rF=()=>location.protocol+"//"+location.host;function vT(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Q0(l,"")}return Q0(t,n)+i+s}function oF(n,e,t,i){let s=[],r=[],o=null;const a=({state:h})=>{const f=vT(n,location),p=t.value,g=e.value;let m=0;if(h){if(t.value=f,e.value=h,o&&o===p){o=null;return}m=g?h.position-g.position:0}else i(f);s.forEach(v=>{v(t.value,p,{delta:m,type:Nc.pop,direction:m?m>0?ec.forward:ec.back:ec.unknown})})};function l(){o=t.value}function c(h){s.push(h);const f=()=>{const p=s.indexOf(h);p>-1&&s.splice(p,1)};return r.push(f),f}function u(){const{history:h}=window;!h.state||h.replaceState(bt({},h.state,{scroll:Kh()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function nx(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Kh():null}}function aF(n){const{history:e,location:t}=window,i={value:vT(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),h=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:rF()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(f){console.error(f),t[u?"replace":"assign"](h)}}function o(l,c){const u=bt({},e.state,nx(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=bt({},s.value,e.state,{forward:l,scroll:Kh()});r(u.current,u,!0);const d=bt({},nx(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function lF(n){n=Z3(n);const e=aF(n),t=oF(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=bt({location:"",base:n,go:i,createHref:eF.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function cF(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),lF(n)}function uF(n){return typeof n=="string"||n&&typeof n=="object"}function _T(n){return typeof n=="string"||typeof n=="symbol"}const ks={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yT=rl("nf");var ix;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ix||(ix={}));function Ba(n,e){return bt(new Error,{type:n,[yT]:!0},e)}function Fs(n,e){return n instanceof Error&&yT in n&&(e==null||!!(n.type&e))}const sx="[^/]+?",dF={sensitive:!1,strict:!1,start:!0,end:!0},hF=/[.+*?^${}()[\]/\\]/g;function fF(n,e){const t=bt({},dF,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const h=c[d];let f=40+(t.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(hF,"\\$&"),f+=40;else if(h.type===1){const{value:p,repeatable:g,optional:m,regexp:v}=h;r.push({name:p,repeatable:g,optional:m});const _=v||sx;if(_!==sx){f+=10;try{new RegExp(`(${_})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${p}" (${_}): `+E.message)}}let M=g?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,f+=20,m&&(f+=-8),g&&(f+=-20),_===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",p=r[h-1];d[p.name]=f&&p.repeatable?f.split("/"):f}return d}function l(c){let u="",d=!1;for(const h of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:g,optional:m}=f,v=p in c?c[p]:"";if(Array.isArray(v)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(v)?v.join("/"):v;if(!_)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${p}"`);u+=_}}return u}return{re:o,score:i,keys:r,parse:a,stringify:l}}function pF(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function mF(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=pF(i[t],s[t]);if(r)return r;t++}return s.length-i.length}const gF={type:0,value:""},vF=/[a-zA-Z0-9_]/;function _F(n){if(!n)return[[]];if(n==="/")return[[gF]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${c}": ${f}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){!c||(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:vF.test(l)?h():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function yF(n,e,t){const i=fF(_F(n.path),t),s=bt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xF(n,e){const t=[],i=new Map;e=ox({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,d,h){const f=!h,p=wF(u);p.aliasOf=h&&h.record;const g=ox(e,u),m=[p];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of M)m.push(bt({},p,{components:h?h.record.components:p.components,path:E,aliasOf:h?h.record:p}))}let v,_;for(const M of m){const{path:E}=M;if(d&&E[0]!=="/"){const x=d.record.path,P=x[x.length-1]==="/"?"":"/";M.path=d.record.path+(E&&P+E)}if(v=yF(M,d,g),h?h.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),f&&u.name&&!rx(v)&&o(u.name)),"children"in p){const x=p.children;for(let P=0;P<x.length;P++)r(x[P],v,h&&h.children[P])}h=h||v,l(v)}return _?()=>{o(_)}:Ql}function o(u){if(_T(u)){const d=i.get(u);d&&(i.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let d=0;for(;d<t.length&&mF(u,t[d])>=0&&(u.record.path!==t[d].record.path||!xT(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!rx(u)&&i.set(u.record.name,u)}function c(u,d){let h,f={},p,g;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Ba(1,{location:u});g=h.record.name,f=bt(bF(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),u.params),p=h.stringify(f)}else if("path"in u)p=u.path,h=t.find(_=>_.re.test(p)),h&&(f=h.parse(p),g=h.record.name);else{if(h=d.name?i.get(d.name):t.find(_=>_.re.test(d.path)),!h)throw Ba(1,{location:u,currentLocation:d});g=h.record.name,f=bt({},d.params,u.params),p=h.stringify(f)}const m=[];let v=h;for(;v;)m.unshift(v.record),v=v.parent;return{name:g,path:p,params:f,matched:m,meta:EF(m)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function bF(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function wF(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:SF(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}}}function SF(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function rx(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function EF(n){return n.reduce((e,t)=>bt(e,t.meta),{})}function ox(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function xT(n,e){return e.children.some(t=>t===n||xT(n,t))}const bT=/#/g,MF=/&/g,TF=/\//g,CF=/=/g,AF=/\?/g,wT=/\+/g,IF=/%5B/g,RF=/%5D/g,ST=/%5E/g,PF=/%60/g,ET=/%7B/g,LF=/%7C/g,MT=/%7D/g,NF=/%20/g;function zv(n){return encodeURI(""+n).replace(LF,"|").replace(IF,"[").replace(RF,"]")}function DF(n){return zv(n).replace(ET,"{").replace(MT,"}").replace(ST,"^")}function Vm(n){return zv(n).replace(wT,"%2B").replace(NF,"+").replace(bT,"%23").replace(MF,"%26").replace(PF,"`").replace(ET,"{").replace(MT,"}").replace(ST,"^")}function OF(n){return Vm(n).replace(CF,"%3D")}function kF(n){return zv(n).replace(bT,"%23").replace(AF,"%3F")}function FF(n){return n==null?"":kF(n).replace(TF,"%2F")}function nh(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function BF(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(wT," "),o=r.indexOf("="),a=nh(o<0?r:r.slice(0,o)),l=o<0?null:nh(r.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ax(n){let e="";for(let t in n){const i=n[t];if(t=OF(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(i)?i.map(r=>r&&Vm(r)):[i&&Vm(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function VF(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Array.isArray(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}function El(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Ys(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Ba(4,{from:t,to:e})):d instanceof Error?a(d):uF(d)?a(Ba(2,{from:e,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),o())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function jf(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(UF(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ys(c,t,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=$3(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ys(h,t,i,r,o)()}))}}return s}function UF(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function lx(n){const e=_t(Uv),t=_t(mT),i=G(()=>e.resolve(Si(n.to))),s=G(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const h=d.findIndex(Fa.bind(null,u));if(h>-1)return h;const f=cx(l[c-2]);return c>1&&cx(u)===f&&d[d.length-1].path!==f?d.findIndex(Fa.bind(null,l[c-2])):h}),r=G(()=>s.value>-1&&GF(t.params,i.value.params)),o=G(()=>s.value>-1&&s.value===t.matched.length-1&&gT(t.params,i.value.params));function a(l={}){return WF(l)?e[Si(n.replace)?"replace":"push"](Si(n.to)).catch(Ql):Promise.resolve()}return{route:i,href:G(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const zF=qc({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lx,setup(n,{slots:e}){const t=vn(lx(n)),{options:i}=_t(Uv),s=G(()=>({[ux(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[ux(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:li("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),HF=zF;function WF(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function GF(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function cx(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ux=(n,e,t)=>n!=null?n:e!=null?e:t,$F=qc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(n,{attrs:e,slots:t}){const i=_t(Fm),s=G(()=>n.route||i.value),r=_t(Z0,0),o=G(()=>s.value.matched[r]);ln(Z0,r+1),ln(G3,o),ln(Fm,s);const a=Ee();return ct(()=>[a.value,o.value,n.name],([l,c,u],[d,h,f])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!Fa(c,h)||!d)&&(c.enterCallbacks[u]||[]).forEach(p=>p(l))},{flush:"post"}),()=>{const l=s.value,c=o.value,u=c&&c.components[n.name],d=n.name;if(!u)return dx(t.default,{Component:u,route:l});const h=c.props[n.name],f=h?h===!0?l.params:typeof h=="function"?h(l):h:null,g=li(u,bt({},f,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return dx(t.default,{Component:g,route:l})||g}}});function dx(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const jF=$F;function qF(n){const e=xF(n.routes,n),t=n.parseQuery||BF,i=n.stringifyQuery||ax,s=n.history,r=El(),o=El(),a=El(),l=Nw(ks);let c=ks;oa&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gf.bind(null,Y=>""+Y),d=Gf.bind(null,FF),h=Gf.bind(null,nh);function f(Y,j){let ce,ve;return _T(Y)?(ce=e.getRecordMatcher(Y),ve=j):ve=Y,e.addRoute(ve,ce)}function p(Y){const j=e.getRecordMatcher(Y);j&&e.removeRoute(j)}function g(){return e.getRoutes().map(Y=>Y.record)}function m(Y){return!!e.getRecordMatcher(Y)}function v(Y,j){if(j=bt({},j||l.value),typeof Y=="string"){const K=$f(t,Y,j.path),b=e.resolve({path:K.path},j),A=s.createHref(K.fullPath);return bt(K,b,{params:h(b.params),hash:nh(K.hash),redirectedFrom:void 0,href:A})}let ce;if("path"in Y)ce=bt({},Y,{path:$f(t,Y.path,j.path).path});else{const K=bt({},Y.params);for(const b in K)K[b]==null&&delete K[b];ce=bt({},Y,{params:d(Y.params)}),j.params=d(j.params)}const ve=e.resolve(ce,j),Ie=Y.hash||"";ve.params=u(h(ve.params));const pe=X3(i,bt({},Y,{hash:DF(Ie),path:ve.path})),Me=s.createHref(pe);return bt({fullPath:pe,hash:Ie,query:i===ax?VF(Y.query):Y.query||{}},ve,{redirectedFrom:void 0,href:Me})}function _(Y){return typeof Y=="string"?$f(t,Y,l.value.path):bt({},Y)}function M(Y,j){if(c!==Y)return Ba(8,{from:j,to:Y})}function E(Y){return C(Y)}function x(Y){return E(bt(_(Y),{replace:!0}))}function P(Y){const j=Y.matched[Y.matched.length-1];if(j&&j.redirect){const{redirect:ce}=j;let ve=typeof ce=="function"?ce(Y):ce;return typeof ve=="string"&&(ve=ve.includes("?")||ve.includes("#")?ve=_(ve):{path:ve},ve.params={}),bt({query:Y.query,hash:Y.hash,params:Y.params},ve)}}function C(Y,j){const ce=c=v(Y),ve=l.value,Ie=Y.state,pe=Y.force,Me=Y.replace===!0,K=P(ce);if(K)return C(bt(_(K),{state:Ie,force:pe,replace:Me}),j||ce);const b=ce;b.redirectedFrom=j;let A;return!pe&&Y3(i,ve,ce)&&(A=Ba(16,{to:b,from:ve}),ae(ve,ve,!0,!1)),(A?Promise.resolve(A):W(b,ve)).catch(F=>Fs(F)?Fs(F,2)?F:ne(F):$(F,b,ve)).then(F=>{if(F){if(Fs(F,2))return C(bt(_(F.to),{state:Ie,force:pe,replace:Me}),j||b)}else F=y(b,ve,!0,Me,Ie);return L(b,ve,F),F})}function D(Y,j){const ce=M(Y,j);return ce?Promise.reject(ce):Promise.resolve()}function W(Y,j){let ce;const[ve,Ie,pe]=XF(Y,j);ce=jf(ve.reverse(),"beforeRouteLeave",Y,j);for(const K of ve)K.leaveGuards.forEach(b=>{ce.push(Ys(b,Y,j))});const Me=D.bind(null,Y,j);return ce.push(Me),Fo(ce).then(()=>{ce=[];for(const K of r.list())ce.push(Ys(K,Y,j));return ce.push(Me),Fo(ce)}).then(()=>{ce=jf(Ie,"beforeRouteUpdate",Y,j);for(const K of Ie)K.updateGuards.forEach(b=>{ce.push(Ys(b,Y,j))});return ce.push(Me),Fo(ce)}).then(()=>{ce=[];for(const K of Y.matched)if(K.beforeEnter&&!j.matched.includes(K))if(Array.isArray(K.beforeEnter))for(const b of K.beforeEnter)ce.push(Ys(b,Y,j));else ce.push(Ys(K.beforeEnter,Y,j));return ce.push(Me),Fo(ce)}).then(()=>(Y.matched.forEach(K=>K.enterCallbacks={}),ce=jf(pe,"beforeRouteEnter",Y,j),ce.push(Me),Fo(ce))).then(()=>{ce=[];for(const K of o.list())ce.push(Ys(K,Y,j));return ce.push(Me),Fo(ce)}).catch(K=>Fs(K,8)?K:Promise.reject(K))}function L(Y,j,ce){for(const ve of a.list())ve(Y,j,ce)}function y(Y,j,ce,ve,Ie){const pe=M(Y,j);if(pe)return pe;const Me=j===ks,K=oa?history.state:{};ce&&(ve||Me?s.replace(Y.fullPath,bt({scroll:Me&&K&&K.scroll},Ie)):s.push(Y.fullPath,Ie)),l.value=Y,ae(Y,j,ce,Me),ne()}let T;function X(){T=s.listen((Y,j,ce)=>{const ve=v(Y),Ie=P(ve);if(Ie){C(bt(Ie,{replace:!0}),ve).catch(Ql);return}c=ve;const pe=l.value;oa&&iF(tx(pe.fullPath,ce.delta),Kh()),W(ve,pe).catch(Me=>Fs(Me,12)?Me:Fs(Me,2)?(C(Me.to,ve).then(K=>{Fs(K,20)&&!ce.delta&&ce.type===Nc.pop&&s.go(-1,!1)}).catch(Ql),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),$(Me,ve,pe))).then(Me=>{Me=Me||y(ve,pe,!1),Me&&(ce.delta?s.go(-ce.delta,!1):ce.type===Nc.pop&&Fs(Me,20)&&s.go(-1,!1)),L(ve,pe,Me)}).catch(Ql)})}let k=El(),z=El(),H;function $(Y,j,ce){ne(Y);const ve=z.list();return ve.length?ve.forEach(Ie=>Ie(Y,j,ce)):console.error(Y),Promise.reject(Y)}function O(){return H&&l.value!==ks?Promise.resolve():new Promise((Y,j)=>{k.add([Y,j])})}function ne(Y){return H||(H=!Y,X(),k.list().forEach(([j,ce])=>Y?ce(Y):j()),k.reset()),Y}function ae(Y,j,ce,ve){const{scrollBehavior:Ie}=n;if(!oa||!Ie)return Promise.resolve();const pe=!ce&&sF(tx(Y.fullPath,0))||(ve||!ce)&&history.state&&history.state.scroll||null;return Jn().then(()=>Ie(Y,j,pe)).then(Me=>Me&&nF(Me)).catch(Me=>$(Me,Y,j))}const fe=Y=>s.go(Y);let oe;const Ae=new Set;return{currentRoute:l,addRoute:f,removeRoute:p,hasRoute:m,getRoutes:g,resolve:v,options:n,push:E,replace:x,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:z.add,isReady:O,install(Y){const j=this;Y.component("RouterLink",HF),Y.component("RouterView",jF),Y.config.globalProperties.$router=j,Object.defineProperty(Y.config.globalProperties,"$route",{enumerable:!0,get:()=>Si(l)}),oa&&!oe&&l.value===ks&&(oe=!0,E(s.location).catch(Ie=>{}));const ce={};for(const Ie in ks)ce[Ie]=G(()=>l.value[Ie]);Y.provide(Uv,j),Y.provide(mT,vn(ce)),Y.provide(Fm,l);const ve=Y.unmount;Ae.add(Y),Y.unmount=function(){Ae.delete(Y),Ae.size<1&&(c=ks,T&&T(),l.value=ks,oe=!1,H=!1),ve()}}}}function Fo(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function XF(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Fa(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Fa(c,l))||s.push(l))}return[t,i,s]}const YF=qe({name:"VContainer",props:U({fluid:{type:Boolean,default:!1}},Yt()),setup(n,e){let{slots:t}=e;return Ye(()=>I(n.tag,{class:["v-container",{"v-container--fluid":n.fluid}]},t)),{}}}),Hv=["sm","md","lg","xl","xxl"],TT=(()=>Hv.reduce((n,e)=>(n[e]={type:[Boolean,String,Number],default:!1},n),{}))(),CT=(()=>Hv.reduce((n,e)=>(n["offset"+xr(e)]={type:[String,Number],default:null},n),{}))(),AT=(()=>Hv.reduce((n,e)=>(n["order"+xr(e)]={type:[String,Number],default:null},n),{}))(),hx={col:Object.keys(TT),offset:Object.keys(CT),order:Object.keys(AT)};function KF(n,e,t){let i=n;if(!(t==null||t===!1))return e&&(i+=`-${e.replace(n,"")}`),n==="col"&&(i="v-"+i),n==="col"&&(t===""||t===!0)||(i+=`-${t}`),i.toLowerCase()}const IT=qe({name:"VCol",props:U(Qe(U(Qe(U(Qe(U({cols:{type:[Boolean,String,Number],default:!1}},TT),{offset:{type:[String,Number],default:null}}),CT),{order:{type:[String,Number],default:null}}),AT),{alignSelf:{type:String,default:null,validator:n=>["auto","start","end","center","baseline","stretch"].includes(n)}}),Yt()),setup(n,e){let{slots:t}=e;const i=G(()=>{const s=[];let r;for(r in hx)hx[r].forEach(a=>{const l=n[a],c=KF(r,a,l);c&&s.push(c)});const o=s.some(a=>a.startsWith("v-col-"));return s.push({"v-col":!o||!n.cols,[`v-col-${n.cols}`]:n.cols,[`offset-${n.offset}`]:n.offset,[`order-${n.order}`]:n.order,[`align-self-${n.alignSelf}`]:n.alignSelf}),s});return()=>{var s;return li(n.tag,{class:i.value},(s=t.default)==null?void 0:s.call(t))}}}),JF=["sm","md","lg","xl","xxl"],Wv=["start","end","center"];function Gv(n,e){return JF.reduce((t,i)=>(t[n+xr(i)]=e(),t),{})}const RT=n=>[...Wv,"baseline","stretch"].includes(n),PT=Gv("align",()=>({type:String,default:null,validator:RT})),LT=n=>[...Wv,"space-between","space-around"].includes(n),NT=Gv("justify",()=>({type:String,default:null,validator:LT})),DT=n=>[...Wv,"space-between","space-around","stretch"].includes(n),OT=Gv("alignContent",()=>({type:String,default:null,validator:DT})),fx={align:Object.keys(PT),justify:Object.keys(NT),alignContent:Object.keys(OT)},ZF={align:"align",justify:"justify",alignContent:"align-content"};function QF(n,e,t){let i=ZF[n];if(t!=null)return e&&(i+=`-${e.replace(n,"")}`),i+=`-${t}`,i.toLowerCase()}const kT=qe({name:"VRow",props:U(U(Qe(U(Qe(U({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:RT}},PT),{justify:{type:String,default:null,validator:LT}}),NT),{alignContent:{type:String,default:null,validator:DT}}),OT),Yt()),setup(n,e){let{slots:t}=e;const i=G(()=>{const s=[];let r;for(r in fx)fx[r].forEach(o=>{const a=n[o],l=QF(r,o,a);l&&s.push(l)});return s.push({"v-row--no-gutters":n.noGutters,"v-row--dense":n.dense,[`align-${n.align}`]:n.align,[`justify-${n.justify}`]:n.justify,[`align-content-${n.alignContent}`]:n.alignContent}),s});return()=>{var s;return li(n.tag,{class:["v-row",i.value]},(s=t.default)==null?void 0:s.call(t))}}}),FT=ot({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function BT(n,e){const t={},i=s=>()=>{if(!Bt)return Promise.resolve(!0);const r=s==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(o=>{var a;const l=parseInt((a=n[s])!=null?a:0,10);t[s]=window.setTimeout(()=>{e==null||e(r),o(r)},l)})};return{runCloseDelay:i("closeDelay"),runOpenDelay:i("openDelay")}}const eB=qe({name:"VHover",props:U({disabled:Boolean,modelValue:{type:Boolean,default:void 0}},FT()),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const i=dn(n,"modelValue"),{runOpenDelay:s,runCloseDelay:r}=BT(n,o=>!n.disabled&&(i.value=o));return()=>{var o;return(o=t.default)==null?void 0:o.call(t,{isHovering:i.value,props:{onMouseenter:s,onMouseleave:r}})}}}),tB={name:"Home",data:()=>({url:null}),computed:{}};function nB(n,e,t,i,s,r){const o=rr("router-link"),a=rr("router-view");return tn(),_a(Nt,null,[I(kT,{class:"fill-height","no-gutters":""},{default:st(()=>[(tn(!0),_a(Nt,null,Tg(n.$store.state.menu,({title:l,link:c,src:u},d)=>(tn(),si(eB,{key:d},{default:st(({isHovering:h,props:f})=>[I(IT,It(f,{cols:h?12/n.$store.state.menu.length+2:"",class:"transition position-relative"}),{default:st(()=>[I(o,{class:"text-decoration-none",to:c,onClick:p=>n.$store.state.titleToolBar=l},{default:st(()=>[I(Ih,{src:u,"min-height":"100%",cover:""},{default:st(()=>[$i("div",{class:hh([h?"on-hover":"background"," fill-height transition d-flex align-center justify-center text-h2 text-white"])},wd(l),3)]),_:2},1032,["src"])]),_:2},1032,["to","onClick"])]),_:2},1040,["cols"])]),_:2},1024))),128))]),_:1}),I(a)],64)}var iB=Yc(tB,[["render",nB],["__scopeId","data-v-9375312a"]]);const sB=[{path:"/",name:"Home",component:iB},{path:"/salary",name:"Salary",component:()=>ra(()=>import("./Salary.337cc841.js"),["assets/Salary.337cc841.js","assets/Salary.458436dd.css","assets/datetime.a6c08513.js","assets/VCheckbox.44a85268.js","assets/VCheckbox.e9214d3f.css","assets/VTable.699a2594.js","assets/VTable.b8a7a448.css"])},{path:"/Gap&Unloading",name:"Gap&Unloading",component:()=>ra(()=>import("./Gap_Unloading.e58d044c.js"),["assets/Gap_Unloading.e58d044c.js","assets/Gap_Unloading.00867515.css","assets/datetime.a6c08513.js","assets/VWindowItem.20603a10.js","assets/VWindowItem.5dc008fd.css"])},{path:"/autocommitCounter",name:"Autocommit counter",component:()=>ra(()=>import("./AutocommitCounter.8625f672.js"),[])},{path:"/userProfile",name:"My profile",component:()=>ra(()=>import("./UserProfile.c86fa791.js"),["assets/UserProfile.c86fa791.js","assets/UserProfile.78901e45.css","assets/VTable.699a2594.js","assets/VTable.b8a7a448.css","assets/VWindowItem.20603a10.js","assets/VWindowItem.5dc008fd.css"])},{path:"/timestampCalculator",name:"Timestamp calculator",component:()=>ra(()=>import("./TimestampCalculator.27e30ccb.js"),["assets/TimestampCalculator.27e30ccb.js","assets/datetime.a6c08513.js","assets/VCheckbox.44a85268.js","assets/VCheckbox.e9214d3f.css"])}],Dc=qF({history:cF({}.BASE_URL),routes:sB});const rB=qe({name:"VBtnGroup",props:U(U(U(U(U(U(U({divided:Boolean},xo()),Zi()),Er()),Qi()),Yt()),yn()),Ja()),setup(n,e){let{slots:t}=e;const{themeClasses:i}=Pn(n),{densityClasses:s}=Is(n),{borderClasses:r}=bo(n),{elevationClasses:o}=Mr(n),{roundedClasses:a}=es(n);Ya({VBtn:{height:"auto",color:Ke(n,"color"),density:Ke(n,"density"),flat:!0,variant:Ke(n,"variant")}}),Ye(()=>I(n.tag,{class:["v-btn-group",{"v-btn-group--divided":n.divided},i.value,r.value,s.value,o.value,a.value]},t))}}),oB=ot({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),aB=ot({value:null,disabled:Boolean,selectedClass:String},"group-item");function lB(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const i=Hn("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=ci();ln(Symbol.for(`${e.description}:id`),s);const r=_t(e,null);if(!r){if(!t)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Ke(n,"value"),a=G(()=>r.disabled.value||n.disabled);r.register({id:s,value:o,disabled:a},i),Li(()=>{r.unregister(s)});const l=G(()=>r.isSelected(s)),c=G(()=>l.value&&[r.selectedClass.value,n.selectedClass]);return ct(l,u=>{i.emit("group:selected",{value:u})}),{id:s,isSelected:l,toggle:()=>r.select(s,!l.value),select:u=>r.select(s,u),selectedClass:c,value:o,disabled:a,group:r}}function cB(n,e){let t=!1;const i=vn([]),s=dn(n,"modelValue",[],h=>h==null?[]:VT(i,Kr(h)),h=>{const f=dB(i,h);return n.multiple?f:f[0]}),r=Hn("useGroup");function o(h,f){const p=h,g=Symbol.for(`${e.description}:id`),v=ql(g,r==null?void 0:r.vnode).indexOf(f);v>-1?i.splice(v,0,p):i.push(p)}function a(h){if(t)return;l();const f=i.findIndex(p=>p.id===h);i.splice(f,1)}function l(){const h=i.find(f=>!f.disabled);h&&n.mandatory==="force"&&!s.value.length&&(s.value=[h.id])}Xa(()=>{l()}),Li(()=>{t=!0});function c(h,f){const p=i.find(v=>v.id===h);if(!(f&&p!=null&&p.disabled))if(n.multiple){var g;const v=s.value.slice(),_=v.findIndex(E=>E===h),M=~_;if(f=(g=f)!=null?g:!M,M&&n.mandatory&&v.length<=1||!M&&n.max!=null&&v.length+1>n.max)return;_<0&&f?v.push(h):_>=0&&!f&&v.splice(_,1),s.value=v}else{var m;const v=s.value.includes(h);if(n.mandatory&&v)return;s.value=((m=f)!=null?m:!v)?[h]:[]}}function u(h){if(n.multiple&&Jr('This method is not supported when using "multiple" prop'),s.value.length){const f=s.value[0],p=i.findIndex(v=>v.id===f);let g=(p+h)%i.length,m=i[g];for(;m.disabled&&g!==p;)g=(g+h)%i.length,m=i[g];if(m.disabled)return;s.value=[i[g].id]}else{const f=i.find(p=>!p.disabled);f&&(s.value=[f.id])}}const d={register:o,unregister:a,selected:s,select:c,disabled:Ke(n,"disabled"),prev:()=>u(i.length-1),next:()=>u(1),isSelected:h=>s.value.includes(h),selectedClass:G(()=>n.selectedClass),items:G(()=>i),getItemIndex:h=>uB(i,h)};return ln(e,d),d}function uB(n,e){const t=VT(n,[e]);return t.length?n.findIndex(i=>i.id===t[0]):-1}function VT(n,e){const t=[];for(let i=0;i<n.length;i++){const s=n[i];s.value!=null?e.find(r=>Pg(r,s.value))!=null&&t.push(s.id):e.includes(i)&&t.push(s.id)}return t}function dB(n,e){const t=[];for(let i=0;i<n.length;i++){const s=n[i];e.includes(s.id)&&t.push(s.value!=null?s.value:i)}return t}const UT=Symbol.for("vuetify:v-btn-toggle");zn()({name:"VBtnToggle",props:oB({selectedClass:"v-btn--selected"}),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const{isSelected:i,next:s,prev:r,select:o,selected:a}=cB(n,UT);return Ye(()=>{var l;return I(rB,{class:"v-btn-toggle"},{default:()=>[(l=t.default)==null?void 0:l.call(t,{isSelected:i,next:s,prev:r,select:o,selected:a})]})}),{next:s,prev:r,select:o}}});function zT(n){const e=Ee(),t=Ee(!1);if(Fg){const i=new IntersectionObserver(s=>{n==null||n(s,i),t.value=!!s.find(r=>r.isIntersecting)});Li(()=>{i.disconnect()}),ct(e,(s,r)=>{r&&(i.unobserve(r),t.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:e,isIntersecting:t}}const HT=qe({name:"VProgressCircular",props:U(U(U({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4}},Ch()),Yt({tag:"div"})),yn()),setup(n,e){let{slots:t}=e;const i=20,s=2*Math.PI*i,r=Ee(),{themeClasses:o}=Pn(n),{sizeClasses:a,sizeStyles:l}=Ah(n),{textColorClasses:c,textColorStyles:u}=Ss(Ke(n,"color")),{textColorClasses:d,textColorStyles:h}=Ss(Ke(n,"bgColor")),{intersectionRef:f,isIntersecting:p}=zT(),{resizeRef:g,contentRect:m}=hE(),v=G(()=>Math.max(0,Math.min(100,parseFloat(n.modelValue)))),_=G(()=>Number(n.width)),M=G(()=>l.value?Number(n.size):m.value?m.value.width:Math.max(_.value,32)),E=G(()=>i/(1-_.value/M.value)*2),x=G(()=>_.value/M.value*E.value),P=G(()=>Ge((100-v.value)/100*s));return br(()=>{f.value=r.value,g.value=r.value}),Ye(()=>I(n.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!n.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":n.indeterminate==="disable-shrink"},o.value,a.value,c.value],style:[l.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":n.indeterminate?void 0:v.value},{default:()=>[I("svg",{style:{transform:`rotate(calc(-90deg + ${Number(n.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${E.value} ${E.value}`},[I("circle",{class:["v-progress-circular__underlay",d.value],style:h.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":x.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),I("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":x.value,"stroke-dasharray":s,"stroke-dashoffset":P.value},null)]),t.default&&I("div",{class:"v-progress-circular__content"},[t.default({value:v.value})])]})),{}}});var hB={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}};const fB={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},$v=Symbol.for("vuetify:rtl");function pB(n,e){var t,i;return mB({rtl:U(U({},fB),(t=e==null?void 0:e.rtl)!=null?t:{}),isRtl:Ee((i=e==null?void 0:e.defaultRtl)!=null?i:!1),rtlClasses:Ee("")},n)}function mB(n,e,t){const i=G(()=>typeof(t==null?void 0:t.rtl)=="boolean"?t.rtl:e.current.value&&n.rtl.hasOwnProperty(e.current.value)?n.rtl[e.current.value]:n.isRtl.value);return{isRtl:i,rtl:n.rtl,rtlClasses:G(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function Jh(){const n=_t($v);if(!n)throw new Error("[Vuetify] Could not find injected rtl instance");return n}const gB=qe({name:"VProgressLinear",props:U(U(U({active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean},Qi()),Yt()),yn()),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const i=dn(n,"modelValue"),{isRtl:s}=Jh(),{themeClasses:r}=Pn(n),{textColorClasses:o,textColorStyles:a}=Ss(n,"color"),{backgroundColorClasses:l,backgroundColorStyles:c}=Es(G(()=>n.bgColor||n.color)),{backgroundColorClasses:u,backgroundColorStyles:d}=Es(n,"color"),{roundedClasses:h}=es(n),{intersectionRef:f,isIntersecting:p}=zT(),g=G(()=>parseInt(n.max,10)),m=G(()=>parseInt(n.height,10)),v=G(()=>parseFloat(n.bufferValue)/g.value*100),_=G(()=>parseFloat(i.value)/g.value*100),M=G(()=>s.value!==n.reverse),E=G(()=>n.indeterminate?"fade-transition":"slide-x-transition"),x=G(()=>n.bgOpacity==null?n.bgOpacity:parseFloat(n.bgOpacity));function P(C){if(!f.value)return;const{left:D,right:W,width:L}=f.value.getBoundingClientRect(),y=M.value?L-C.clientX+(W-L):C.clientX-D;i.value=Math.round(y/L*g.value)}return Ye(()=>I(n.tag,{ref:f,class:["v-progress-linear",{"v-progress-linear--active":n.active&&p.value,"v-progress-linear--reverse":M.value,"v-progress-linear--rounded":n.rounded,"v-progress-linear--rounded-bar":n.roundedBar,"v-progress-linear--striped":n.striped},h.value,r.value],style:{height:n.active?Ge(m.value):0,"--v-progress-linear-height":Ge(m.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":n.max,"aria-valuenow":n.indeterminate?void 0:_.value,onClick:n.clickable&&P},{default:()=>[n.stream&&I("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:Qe(U({},a.value),{[M.value?"left":"right"]:Ge(-m.value),borderTop:`${Ge(m.value/2)} dotted`,opacity:x.value,top:`calc(50% - ${Ge(m.value/4)})`,width:Ge(100-v.value,"%"),"--v-progress-linear-stream-to":Ge(m.value*(M.value?1:-1))})},null),I("div",{class:["v-progress-linear__background",l.value],style:[c.value,{opacity:x.value,width:Ge(n.stream?v.value:100,"%")}]},null),I(Ki,{name:E.value},{default:()=>[n.indeterminate?I("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(C=>I("div",{key:C,class:["v-progress-linear__indeterminate",C,u.value],style:d.value},null))]):I("div",{class:["v-progress-linear__determinate",u.value],style:[d.value,{width:Ge(_.value,"%")}]},null)]}),t.default&&I("div",{class:"v-progress-linear__content"},[t.default({value:_.value,buffer:v.value})])]})),{}}}),jv=ot({loading:Boolean},"loader");function Zh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As();return{loaderClasses:G(()=>({[`${e}--loading`]:n.loading}))}}function qv(n,e){var t;let{slots:i}=e;return I("div",{class:`${n.name}__loader`},[((t=i.default)==null?void 0:t.call(i,{color:n.color,isActive:n.active}))||I(gB,{active:n.active,color:n.color,height:"2",indeterminate:!0},null)])}const px={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Xv=ot({location:String},"location");function Yv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=Jh();return{locationStyles:G(()=>{if(!n.location)return{};const{side:r,align:o}=nm(n.location.split(" ").length>1?n.location:`${n.location} center`,i.value);function a(c){return t?t(c):0}const l={};return r!=="center"&&(e?l[px[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[px[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const vB=["static","relative","fixed","absolute","sticky"],Kv=ot({position:{type:String,validator:n=>vB.includes(n)}},"position");function Jv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As();return{positionClasses:G(()=>n.position?`${e}--${n.position}`:void 0)}}function _B(n,e){ct(()=>{var t;return(t=n.isExactActive)==null?void 0:t.value},t=>{n.isLink.value&&t&&e&&Jn(()=>{e(!0)})},{immediate:!0})}const ua=qe({name:"VBtn",directives:{Ripple:Rh},props:U(U(U(U(U(U(U(U(U(U(U(U(U(U({active:Boolean,symbol:{type:null,default:UT},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Dt,appendIcon:Dt,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0}},xo()),Qi()),Zi()),wr()),Er()),aB()),jv()),Xv()),Kv()),Hg()),Ch()),Yt({tag:"button"})),yn()),Ja({variant:"elevated"})),setup(n,e){let{attrs:t,slots:i}=e;const{themeClasses:s}=Pn(n),{borderClasses:r}=bo(n),{colorClasses:o,colorStyles:a,variantClasses:l}=Lh(n),{densityClasses:c}=Is(n),{dimensionStyles:u}=Sr(n),{elevationClasses:d}=Mr(n),{loaderClasses:h}=Zh(n),{locationStyles:f}=Yv(n),{positionClasses:p}=Jv(n),{roundedClasses:g}=es(n),{sizeClasses:m}=Ah(n),v=lB(n,n.symbol,!1),_=zg(n,t),M=G(()=>(v==null?void 0:v.disabled.value)||n.disabled),E=G(()=>n.variant==="elevated"&&!(n.disabled||n.flat||n.border));return _B(_,v==null?void 0:v.select),Ye(()=>{var x,P,C,D,W,L,y,T;const X=_.isLink.value?"a":n.tag,k=!v||v.isSelected.value,z=!!(n.prependIcon||i.prepend),H=!!(n.appendIcon||i.append);return oi(I(X,{type:X==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":n.active,"v-btn--block":n.block,"v-btn--disabled":M.value,"v-btn--elevated":E.value,"v-btn--flat":n.flat,"v-btn--icon":!!n.icon,"v-btn--loading":n.loading,"v-btn--stacked":n.stacked},s.value,r.value,k?o.value:void 0,c.value,d.value,h.value,p.value,g.value,m.value,l.value],style:[k?a.value:void 0,u.value,f.value],disabled:M.value||void 0,href:_.href.value,onClick:$=>{var O;M.value||((O=_.navigate)==null||O.call(_,$),v==null||v.toggle())}},{default:()=>[Ph(!0,"v-btn"),!n.icon&&z&&I(qi,{key:"prepend",defaults:{VIcon:{icon:n.prependIcon}}},{default:()=>[I("div",{class:"v-btn__prepend"},[(x=(P=i.prepend)==null?void 0:P.call(i))!=null?x:I(Sn,null,null)])]}),I("div",{class:"v-btn__content","data-no-activator":""},[I(qi,{key:"content",defaults:{VIcon:{icon:typeof n.icon=="string"?n.icon:void 0}}},{default:()=>[(C=(D=i.default)==null?void 0:D.call(i))!=null?C:typeof n.icon=="string"&&I(Sn,{key:"icon"},null)]})]),!n.icon&&H&&I(qi,{key:"append",defaults:{VIcon:{icon:n.appendIcon}}},{default:()=>[I("div",{class:"v-btn__append"},[(W=(L=i.append)==null?void 0:L.call(i))!=null?W:I(Sn,null,null)])]}),!!n.loading&&I("span",{key:"loader",class:"v-btn__loader"},[(y=(T=i.loader)==null?void 0:T.call(i))!=null?y:I(HT,{color:typeof n.loading=="boolean"?void 0:n.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[vo("ripple"),!M.value&&n.ripple,null]])}),{}}});const yB=qe({name:"VCardActions",setup(n,e){let{slots:t}=e;return Ya({VBtn:{variant:"text"}}),Ye(()=>{var i;return I("div",{class:"v-card-actions"},[(i=t.default)==null?void 0:i.call(t)])}),{}}}),xB=yo("v-card-subtitle"),bB=yo("v-card-title"),wB=qc({name:"VCardItem",props:U({appendAvatar:String,appendIcon:Dt,prependAvatar:String,prependIcon:Dt,subtitle:String,title:String},Zi()),setup(n,e){let{slots:t}=e;return Ye(()=>{var i,s,r,o,a,l,c,u,d;const h=!!(n.prependAvatar||n.prependIcon||t.prepend),f=!!(n.appendAvatar||n.appendIcon||t.append),p=!!(n.title||t.title),g=!!(n.subtitle||t.subtitle);return I("div",{class:"v-card-item"},[h&&I(qi,{key:"prepend",defaults:{VAvatar:{density:n.density,icon:n.prependIcon,image:n.prependAvatar},VIcon:{density:n.density,icon:n.prependIcon}}},{default:()=>[I("div",{class:"v-card-item__prepend"},[(i=(s=t.prepend)==null?void 0:s.call(t))!=null?i:I(vc,null,null)])]}),I("div",{class:"v-card-item__content"},[p&&I(bB,{key:"title"},{default:()=>[(r=(o=t.title)==null?void 0:o.call(t))!=null?r:n.title]}),g&&I(xB,{key:"subtitle"},{default:()=>[(a=(l=t.subtitle)==null?void 0:l.call(t))!=null?a:n.subtitle]}),(c=t.default)==null?void 0:c.call(t)]),f&&I(qi,{key:"append",defaults:{VAvatar:{density:n.density,icon:n.appendIcon,image:n.appendAvatar},VIcon:{density:n.density,icon:n.appendIcon}}},{default:()=>[I("div",{class:"v-card-item__append"},[(u=(d=t.append)==null?void 0:d.call(t))!=null?u:I(vc,null,null)])]})])}),{}}}),SB=yo("v-card-text"),EB=qe({name:"VCard",directives:{Ripple:Rh},props:U(U(U(U(U(U(U(U(U(U(U(U({appendAvatar:String,appendIcon:Dt,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:Boolean,prependAvatar:String,prependIcon:Dt,ripple:Boolean,subtitle:String,text:String,title:String},yn()),xo()),Zi()),wr()),Er()),jv()),Xv()),Kv()),Qi()),Hg()),Yt()),Ja({variant:"elevated"})),setup(n,e){let{attrs:t,slots:i}=e;const{themeClasses:s}=Pn(n),{borderClasses:r}=bo(n),{colorClasses:o,colorStyles:a,variantClasses:l}=Lh(n),{densityClasses:c}=Is(n),{dimensionStyles:u}=Sr(n),{elevationClasses:d}=Mr(n),{loaderClasses:h}=Zh(n),{locationStyles:f}=Yv(n),{positionClasses:p}=Jv(n),{roundedClasses:g}=es(n),m=zg(n,t);return Ye(()=>{var v,_,M,E,x;const P=m.isLink.value?"a":n.tag,C=!!(i.title||n.title),D=!!(i.subtitle||n.subtitle),W=C||D,L=!!(i.append||n.appendAvatar||n.appendIcon),y=!!(i.prepend||n.prependAvatar||n.prependIcon),T=!!(i.image||n.image),X=W||y||L,k=!!(i.text||n.text),z=!n.disabled&&(m.isClickable.value||n.link);return oi(I(P,{class:["v-card",{"v-card--disabled":n.disabled,"v-card--flat":n.flat,"v-card--hover":n.hover&&!(n.disabled||n.flat),"v-card--link":z},s.value,r.value,o.value,c.value,d.value,h.value,p.value,g.value,l.value],style:[a.value,u.value,f.value],href:m.href.value,onClick:z&&m.navigate},{default:()=>[T&&I(qi,{key:"image",defaults:{VImg:{cover:!0,src:n.image}}},{default:()=>[I("div",{class:"v-card__image"},[(v=(_=i.image)==null?void 0:_.call(i))!=null?v:I(Ih,null,null)])]}),I(qv,{name:"v-card",active:!!n.loading,color:typeof n.loading=="boolean"?void 0:n.loading},{default:i.loader}),X&&I(wB,{key:"item",prependAvatar:n.prependAvatar,prependIcon:n.prependIcon,title:n.title,subtitle:n.subtitle,appendAvatar:n.appendAvatar,appendIcon:n.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),k&&I(SB,{key:"text"},{default:()=>[(M=(E=i.text)==null?void 0:E.call(i))!=null?M:n.text]}),(x=i.default)==null?void 0:x.call(i),i.actions&&I(yB,null,{default:i.actions}),Ph(z,"v-card")]}),[[vo("ripple"),z]])}),{}}});const Um=Symbol.for("vuetify:v-menu"),MB=ot(U({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean},FT()));function TB(n,e){let{isActive:t,isTop:i}=e;const s=Ee();let r=!1,o=!1;const a=G(()=>n.openOnFocus||n.openOnFocus==null&&n.openOnHover),l=G(()=>n.openOnClick||n.openOnClick==null&&!n.openOnHover&&!a.value),{runOpenDelay:c,runCloseDelay:u}=BT(n,v=>{v===(n.openOnHover&&r||a.value&&o)&&!(n.openOnHover&&t.value&&!i.value)&&(t.value=v)}),d={click:v=>{v.stopPropagation(),s.value=v.currentTarget||v.target,t.value=!t.value},mouseenter:v=>{r=!0,s.value=v.currentTarget||v.target,c()},mouseleave:v=>{r=!1,u()},focus:v=>{sm&&!v.target.matches(":focus-visible")||(o=!0,v.stopPropagation(),s.value=v.currentTarget||v.target,c())},blur:v=>{o=!1,v.stopPropagation(),u()}},h=G(()=>{const v={};return l.value&&(v.click=d.click),n.openOnHover&&(v.mouseenter=d.mouseenter,v.mouseleave=d.mouseleave),a.value&&(v.focus=d.focus,v.blur=d.blur),v}),f=G(()=>{const v={};if(n.openOnHover&&(v.mouseenter=()=>{r=!0,c()},v.mouseleave=()=>{r=!1,u()}),n.closeOnContentClick){const _=_t(Um,null);v.click=()=>{t.value=!1,_==null||_.closeParents()}}return v});ct(i,v=>{v&&n.openOnHover&&!r&&(t.value=!1)});const p=Ee();br(()=>{!p.value||Jn(()=>{const v=p.value;s.value=ER(v)?v.$el:v})});const g=Hn("useActivator");let m;return ct(()=>!!n.activator,v=>{v&&Bt?(m=$c(),m.run(()=>{CB(n,g,{activatorEl:s,activatorEvents:h})})):m&&m.stop()},{flush:"post",immediate:!0}),{activatorEl:s,activatorRef:p,activatorEvents:h,contentEvents:f}}function CB(n,e,t){let{activatorEl:i,activatorEvents:s}=t;ct(()=>n.activator,(l,c)=>{if(c&&l!==c){const u=a(c);u&&o(u)}l&&Jn(()=>r())},{immediate:!0}),ct(()=>n.activatorProps,()=>{r()}),po(()=>{o()});function r(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.activatorProps;!l||(Object.entries(s.value).forEach(u=>{let[d,h]=u;l.addEventListener(d,h)}),Object.keys(c).forEach(u=>{c[u]==null?l.removeAttribute(u):l.setAttribute(u,c[u])}))}function o(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n.activatorProps;!l||(Object.entries(s.value).forEach(u=>{let[d,h]=u;l.removeEventListener(d,h)}),Object.keys(c).forEach(u=>{l.removeAttribute(u)}))}function a(){var l;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:n.activator,u;if(c)if(c==="parent"){var d,h;let f=e==null||(d=e.proxy)==null||(h=d.$el)==null?void 0:h.parentNode;for(;f.hasAttribute("data-no-activator");)f=f.parentNode;u=f}else typeof c=="string"?u=document.querySelector(c):"$el"in c?u=c.$el:u=c;return i.value=((l=u)==null?void 0:l.nodeType)===Node.ELEMENT_NODE?u:null,i.value}}const AB=ot({eager:Boolean},"lazy");function IB(n,e){const t=Ee(!1),i=G(()=>t.value||n.eager||e.value);ct(e,()=>t.value=!0);function s(){n.eager||(t.value=!1)}return{isBooted:t,hasContent:i,onAfterLeave:s}}function qf(n,e){return{x:n.x+e.x,y:n.y+e.y}}function RB(n,e){return{x:n.x-e.x,y:n.y-e.y}}function mx(n,e){if(n.side==="top"||n.side==="bottom"){const{side:t,align:i}=n,s=i==="left"?0:i==="center"?e.width/2:i==="right"?e.width:i,r=t==="top"?0:t==="bottom"?e.height:t;return qf({x:s,y:r},e)}else if(n.side==="left"||n.side==="right"){const{side:t,align:i}=n,s=t==="left"?0:t==="right"?e.width:t,r=i==="top"?0:i==="center"?e.height/2:i==="bottom"?e.height:i;return qf({x:s,y:r},e)}return qf({x:e.width/2,y:e.height/2},e)}const WT={static:NB,connected:OB},PB=ot({locationStrategy:{type:[String,Function],default:"static",validator:n=>typeof n=="function"||n in WT},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]});function LB(n,e){const t=Ee({}),i=Ee();let s;br(async()=>{var o;(o=s)==null||o.stop(),i.value=void 0,Bt&&e.isActive.value&&n.locationStrategy&&(s=$c(),await Jn(),s.run(()=>{if(typeof n.locationStrategy=="function"){var a;i.value=(a=n.locationStrategy(e,n,t))==null?void 0:a.updateLocation}else{var l;i.value=(l=WT[n.locationStrategy](e,n,t))==null?void 0:l.updateLocation}}))}),Bt&&window.addEventListener("resize",r,{passive:!0}),po(()=>{var o;Bt&&window.removeEventListener("resize",r),i.value=void 0,(o=s)==null||o.stop()});function r(o){var a;(a=i.value)==null||a.call(i,o)}return{contentStyles:t,updateLocation:i}}function NB(){}function DB(n){const e=Dg(n);return e.x-=parseFloat(n.style.left||0),e.y-=parseFloat(n.style.top||0),e}function OB(n,e,t){const i=qR(n.activatorEl.value);i&&Object.assign(t.value,{position:"fixed"});const{preferredAnchor:s,preferredOrigin:r}=TR(()=>{const f=nm(e.location,n.isRtl.value),p=e.origin==="overlap"?f:e.origin==="auto"?Ef(f):nm(e.origin,n.isRtl.value);return f.side===p.side&&f.align===Mf(p).align?{preferredAnchor:Ey(f),preferredOrigin:Ey(p)}:{preferredAnchor:f,preferredOrigin:p}}),[o,a,l,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(f=>G(()=>{const p=parseFloat(e[f]);return isNaN(p)?1/0:p})),u=G(()=>{if(Array.isArray(e.offset))return e.offset;if(typeof e.offset=="string"){const f=e.offset.split(" ").map(parseFloat);return f.length<2&&f.push(0),f}return typeof e.offset=="number"?[e.offset,0]:[0,0]});let d=!1;if(Bt){const f=new ResizeObserver(()=>{d&&h()});f.observe(n.activatorEl.value),f.observe(n.contentEl.value),po(()=>{f.disconnect()})}function h(){d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)});const f=n.activatorEl.value.getBoundingClientRect(),p=DB(n.contentEl.value),g=Ld(n.contentEl.value),m=12;g.length||(g.push(document.documentElement),n.contentEl.value.style.top&&n.contentEl.value.style.left||(p.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),p.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const v=g.reduce((L,y)=>{const T=y.getBoundingClientRect(),X=new ya({x:y===document.documentElement?0:T.x,y:y===document.documentElement?0:T.y,width:y.clientWidth,height:y.clientHeight});return L?new ya({x:Math.max(L.left,X.left),y:Math.max(L.top,X.top),width:Math.min(L.right,X.right)-Math.max(L.left,X.left),height:Math.min(L.bottom,X.bottom)-Math.max(L.top,X.top)}):X},void 0);v.x+=m,v.y+=m,v.width-=m*2,v.height-=m*2;let _={anchor:s.value,origin:r.value};function M(L){const y=new ya(p),T=mx(L.anchor,f),X=mx(L.origin,y);let{x:k,y:z}=RB(T,X);switch(L.anchor.side){case"top":z-=u.value[0];break;case"bottom":z+=u.value[0];break;case"left":k-=u.value[0];break;case"right":k+=u.value[0];break}switch(L.anchor.align){case"top":z-=u.value[1];break;case"bottom":z+=u.value[1];break;case"left":k-=u.value[1];break;case"right":k+=u.value[1];break}return y.x+=k,y.y+=z,y.width=Math.min(y.width,l.value),y.height=Math.min(y.height,c.value),{overflows:Ty(y,v),x:k,y:z}}let E=0,x=0;const P={x:0,y:0},C={x:!1,y:!1};let D=-1;for(;;){if(D++>10){im("Infinite loop detected in connectedLocationStrategy");break}const{x:L,y,overflows:T}=M(_);E+=L,x+=y,p.x+=L,p.y+=y;{const X=My(_.anchor),k=T.x.before||T.x.after,z=T.y.before||T.y.after;let H=!1;if(["x","y"].forEach($=>{if($==="x"&&k&&!C.x||$==="y"&&z&&!C.y){const O={anchor:U({},_.anchor),origin:U({},_.origin)},ne=$==="x"?X==="y"?Mf:Ef:X==="y"?Ef:Mf;O.anchor=ne(O.anchor),O.origin=ne(O.origin);const{overflows:ae}=M(O);(ae[$].before<=T[$].before&&ae[$].after<=T[$].after||ae[$].before+ae[$].after<(T[$].before+T[$].after)/2)&&(_=O,H=C[$]=!0)}}),H)continue}T.x.before&&(E+=T.x.before,p.x+=T.x.before),T.x.after&&(E-=T.x.after,p.x-=T.x.after),T.y.before&&(x+=T.y.before,p.y+=T.y.before),T.y.after&&(x-=T.y.after,p.y-=T.y.after);{const X=Ty(p,v);P.x=v.width-X.x.before-X.x.after,P.y=v.height-X.y.before-X.y.after,E+=X.x.before,p.x+=X.x.before,x+=X.y.before,p.y+=X.y.before}break}const W=My(_.anchor);Object.assign(t.value,{"--v-overlay-anchor-origin":`${_.anchor.side} ${_.anchor.align}`,transformOrigin:`${_.origin.side} ${_.origin.align}`,top:Ge(gx(x)),left:Ge(gx(E)),minWidth:Ge(W==="y"?Math.min(o.value,f.width):o.value),maxWidth:Ge(vx(em(P.x,o.value===1/0?0:o.value,l.value))),maxHeight:Ge(vx(em(P.y,a.value===1/0?0:a.value,c.value)))})}return ct(()=>[s.value,r.value,e.offset,e.minWidth,e.minHeight,e.maxWidth,e.maxHeight],()=>h(),{immediate:!i}),i&&Jn(()=>h()),requestAnimationFrame(()=>{t.value.maxHeight&&h()}),{updateLocation:h}}function gx(n){return Math.round(n*devicePixelRatio)/devicePixelRatio}function vx(n){return Math.ceil(n*devicePixelRatio)/devicePixelRatio}let zm=!0;const ih=[];function kB(n){!zm||ih.length?(ih.push(n),Hm()):(zm=!1,n(),Hm())}let _x=-1;function Hm(){cancelAnimationFrame(_x),_x=requestAnimationFrame(()=>{const n=ih.shift();n&&n(),ih.length?Hm():zm=!0})}const Wm={none:null,close:VB,block:UB,reposition:zB},FB=ot({scrollStrategy:{type:[String,Function],default:"block",validator:n=>typeof n=="function"||n in Wm}});function BB(n,e){if(!Bt)return;let t;br(async()=>{var i;(i=t)==null||i.stop(),e.isActive.value&&n.scrollStrategy&&(t=$c(),await Jn(),t.run(()=>{if(typeof n.scrollStrategy=="function")n.scrollStrategy(e);else{var s;(s=Wm[n.scrollStrategy])==null||s.call(Wm,e)}}))})}function VB(n){var e;function t(i){n.isActive.value=!1}GT((e=n.activatorEl.value)!=null?e:n.contentEl.value,t)}function UB(n){var e;const t=[...new Set([...Ld(n.activatorEl.value),...Ld(n.contentEl.value)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),i=window.innerWidth-document.documentElement.offsetWidth,s=(r=>kg(r)&&r)(((e=n.root.value)==null?void 0:e.offsetParent)||document.documentElement);s&&n.root.value.classList.add("v-overlay--scroll-blocked"),t.forEach((r,o)=>{r.style.setProperty("--v-body-scroll-x",Ge(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",Ge(-r.scrollTop)),r.style.setProperty("--v-scrollbar-offset",Ge(i)),r.classList.add("v-overlay-scroll-blocked")}),po(()=>{t.forEach((r,o)=>{const a=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),l=parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-a,r.scrollTop=-l}),s&&n.root.value.classList.remove("v-overlay--scroll-blocked")})}function zB(n){var e;let t=!1,i=-1;function s(r){kB(()=>{var o,a;const l=performance.now();(o=(a=n.updateLocation).value)==null||o.call(a,r),t=(performance.now()-l)/(1e3/60)>2})}GT((e=n.activatorEl.value)!=null?e:n.contentEl.value,r=>{t?(cancelAnimationFrame(i),i=requestAnimationFrame(()=>{i=requestAnimationFrame(()=>{s(r)})})):s(r)})}function GT(n,e){const t=[document,...Ld(n)];t.forEach(i=>{i.addEventListener("scroll",e,{passive:!0})}),po(()=>{t.forEach(i=>{i.removeEventListener("scroll",e)})})}function $T(n,e){let t;ct(n,i=>{if(i&&!t)t=$c(),t.run(e);else{var s;(s=t)==null||s.stop(),t=void 0}},{immediate:!0})}const Lr=vn([]);function HB(n,e){const t=Hn("useStack"),i=Ee(+e.value);$T(n,()=>{var r;const o=(r=Lr[Lr.length-1])==null?void 0:r[1];i.value=o?o+10:+e.value,Lr.push([t,i.value]),po(()=>{const a=Lr.findIndex(l=>l[0]===t);Lr.splice(a,1)})});const s=Ee(!0);return br(()=>{var r;const o=rt((r=Lr[Lr.length-1])==null?void 0:r[0])===t;setTimeout(()=>s.value=o)}),{isTop:jc(s),stackStyles:G(()=>({zIndex:i.value}))}}function tc(n){return{teleportTarget:G(()=>{const t=n.value;if(t===!0||!Bt)return;const i=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(i==null){A1(`Unable to locate target ${t}`);return}if(!tc.cache.has(i)){const s=document.createElement("div");s.className="v-overlay-container",i.appendChild(s),tc.cache.set(i,s)}return tc.cache.get(i)})}}tc.cache=new WeakMap;function WB(){return!0}function jT(n,e,t){if(!n||qT(n,t)===!1)return!1;const i=DS(e);if(typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot&&i.host===n.target)return!1;const s=(typeof t.value=="object"&&t.value.include||(()=>[]))();return s.push(e),!s.some(r=>r==null?void 0:r.contains(n.target))}function qT(n,e){return(typeof e.value=="object"&&e.value.closeConditional||WB)(n)}function GB(n,e,t){const i=typeof t.value=="function"?t.value:t.value.handler;e._clickOutside.lastMousedownWasOutside&&jT(n,e,t)&&setTimeout(()=>{qT(n,t)&&i&&i(n)},0)}function yx(n,e){const t=DS(n);e(document),typeof ShadowRoot!="undefined"&&t instanceof ShadowRoot&&e(t)}const $B={mounted(n,e){const t=s=>GB(s,n,e),i=s=>{n._clickOutside.lastMousedownWasOutside=jT(s,n,e)};yx(n,s=>{s.addEventListener("click",t,!0),s.addEventListener("mousedown",i,!0)}),n._clickOutside||(n._clickOutside={lastMousedownWasOutside:!0}),n._clickOutside[e.instance.$.uid]={onClick:t,onMousedown:i}},unmounted(n,e){!n._clickOutside||(yx(n,t=>{var i;if(!t||!((i=n._clickOutside)!=null&&i[e.instance.$.uid]))return;const{onClick:s,onMousedown:r}=n._clickOutside[e.instance.$.uid];t.removeEventListener("click",s,!0),t.removeEventListener("mousedown",r,!0)}),delete n._clickOutside[e.instance.$.uid])}};function jB(n){const s=n,{modelValue:e,color:t}=s,i=Vi(s,["modelValue","color"]);return I(Ki,{name:"fade-transition",appear:!0},{default:()=>[n.modelValue&&I("div",It({class:["v-overlay__scrim",n.color.backgroundColorClasses.value],style:n.color.backgroundColorStyles.value},i),null)]})}const XT=zn()({name:"VOverlay",directives:{ClickOutside:$B},inheritAttrs:!1,props:U(U(U(U(U(U(U({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3}},MB()),wr()),AB()),PB()),FB()),yn()),Ka()),emits:{"click:outside":n=>!0,"update:modelValue":n=>!0,afterLeave:()=>!0},setup(n,e){let{slots:t,attrs:i,emit:s}=e;const r=dn(n,"modelValue"),o=G({get:()=>r.value,set:z=>{z&&n.disabled||(r.value=z)}}),{teleportTarget:a}=tc(G(()=>n.attach||n.contained)),{themeClasses:l}=Pn(n),{rtlClasses:c,isRtl:u}=Jh(),{hasContent:d,onAfterLeave:h}=IB(n,o),f=Es(G(()=>typeof n.scrim=="string"?n.scrim:null)),{isTop:p,stackStyles:g}=HB(o,Ke(n,"zIndex")),{activatorEl:m,activatorRef:v,activatorEvents:_,contentEvents:M}=TB(n,{isActive:o,isTop:p}),{dimensionStyles:E}=Sr(n);ct(()=>n.disabled,z=>{z&&(o.value=!1)});const x=Ee(),P=Ee(),{contentStyles:C,updateLocation:D}=LB(n,{isRtl:u,contentEl:P,activatorEl:m,isActive:o});BB(n,{root:x,contentEl:P,activatorEl:m,isActive:o,updateLocation:D});function W(z){s("click:outside",z),n.persistent?k():o.value=!1}function L(){return o.value&&p.value}Bt&&ct(o,z=>{z?window.addEventListener("keydown",y):window.removeEventListener("keydown",y)},{immediate:!0});function y(z){z.key==="Escape"&&p.value&&(n.persistent?k():o.value=!1)}const T=oE();$T(()=>n.closeOnBack,()=>{FP(T,z=>{p.value&&o.value?(z(!1),n.persistent?k():o.value=!1):z()})});const X=Ee();ct(()=>o.value&&(n.absolute||n.contained)&&a.value==null,z=>{if(z){const H=$R(x.value);H&&H!==document.scrollingElement&&(X.value=H.scrollTop)}});function k(){var z;n.noClickAnimation||(z=P.value)==null||z.animate([{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Pd})}return Ye(()=>{var z,H;return I(Nt,null,[(z=t.activator)==null?void 0:z.call(t,{isActive:o.value,props:It({ref:v},X_(_.value),n.activatorProps)}),Bt&&I(xI,{disabled:!a.value,to:a.value},{default:()=>[d.value&&I("div",It({class:["v-overlay",{"v-overlay--absolute":n.absolute||n.contained,"v-overlay--active":o.value,"v-overlay--contained":n.contained},l.value,c.value],style:[g.value,{top:Ge(X.value)}],ref:x},i),[I(jB,{color:f,modelValue:o.value&&!!n.scrim},null),I(tr,{appear:!0,persisted:!0,transition:n.transition,target:m.value,onAfterLeave:()=>{h(),s("afterLeave")}},{default:()=>[oi(I("div",It({ref:P,class:["v-overlay__content",n.contentClass],style:[E.value,C.value]},X_(M.value),n.contentProps),[(H=t.default)==null?void 0:H.call(t,{isActive:o})]),[[Xc,o.value],[vo("click-outside"),{handler:W,closeConditional:L,include:()=>[m.value]}]])]})])]})])}),{activatorEl:m,animateClick:k,contentEl:P,isTop:p,updateLocation:D}}});function YT(){const e=Hn("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}const qB=zn()({name:"VDialog",inheritAttrs:!1,props:U(U({fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean},wr({width:"auto"})),Ka({transition:{component:US}})),emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:i}=e;const s=dn(n,"modelValue"),{dimensionStyles:r}=Sr(n),{scopeId:o}=YT(),a=Ee();function l(c){var u,d;const h=c.relatedTarget,f=c.target;if(h!==f&&(u=a.value)!=null&&u.contentEl&&(d=a.value)!=null&&d.isTop&&![document,a.value.contentEl].includes(f)&&!a.value.contentEl.contains(f)){const p=[...a.value.contentEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled"));if(!p.length)return;const g=p[0],m=p[p.length-1];h===g?m.focus():g.focus()}}return Bt&&ct(()=>s.value&&n.retainFocus,c=>{c?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0}),ct(s,async c=>{if(await Jn(),c){var u;(u=a.value.contentEl)==null||u.focus({preventScroll:!0})}else{var d;(d=a.value.activatorEl)==null||d.focus({preventScroll:!0})}}),Ye(()=>I(XT,It({modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,class:["v-dialog",{"v-dialog--fullscreen":n.fullscreen,"v-dialog--scrollable":n.scrollable}],style:r.value,transition:n.transition,ref:a,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(s.value)},"z-index":2400},o,t),{default:i.default,activator:i.activator})),{}}}),KT=Symbol.for("vuetify:form"),XB=ot({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null}});function YB(n){const e=dn(n,"modelValue"),t=G(()=>n.disabled),i=G(()=>n.readonly),s=Ee(!1),r=Ee([]),o=Ee([]);async function a(){const u=[];let d=!0;o.value=[],s.value=!0;for(const h of r.value){const f=await h.validate();if(f.length>0&&(d=!1,u.push({id:h.id,errorMessages:f})),!d&&n.fastFail)break}return o.value=u,s.value=!1,{valid:d,errors:o.value}}function l(){r.value.forEach(u=>u.reset()),e.value=null}function c(){r.value.forEach(u=>u.resetValidation()),o.value=[],e.value=null}return ct(r,()=>{let u=null;r.value.some(d=>d.isValid===!1)?u=!1:r.value.every(d=>d.isValid===!0)&&(u=!0),e.value=u},{deep:!0}),ln(KT,{register:(u,d,h,f,p)=>{r.value.some(g=>g.id===u)&&Jr(`Duplicate input name "${u}"`),r.value.push({id:u,validate:d,reset:h,resetValidation:f,isValid:p})},unregister:u=>{r.value=r.value.filter(d=>d.id!==u)},isDisabled:t,isReadonly:i,isValidating:s,items:r}),{errors:o,isDisabled:t,isReadonly:i,isValidating:s,items:r,validate:a,reset:l,resetValidation:c}}function KB(){return _t(KT,null)}function Qh(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];return new Proxy(n,{get(s,r){if(Reflect.has(s,r))return Reflect.get(s,r);for(const o of t)if(o.value&&Reflect.has(o.value,r)){const a=Reflect.get(o.value,r);return typeof a=="function"?a.bind(o.value):a}},getOwnPropertyDescriptor(s,r){const o=Reflect.getOwnPropertyDescriptor(s,r);if(o)return o;for(const a of t){if(!a.value)continue;const l=Reflect.getOwnPropertyDescriptor(a.value,r);if(l)return l}for(const a of t){let l=a.value&&Object.getPrototypeOf(a.value);for(;l;){const c=Reflect.getOwnPropertyDescriptor(l,r);if(c)return c;l=Object.getPrototypeOf(l)}}}})}const xx=qe({name:"VForm",props:U({},XB()),emits:{"update:modelValue":n=>!0,submit:n=>!0},setup(n,e){let{slots:t,emit:i}=e;const s=YB(n),r=Ee();function o(l){l.preventDefault(),s.reset()}function a(l){const c=l,u=s.validate();c.then=u.then.bind(u),c.catch=u.catch.bind(u),c.finally=u.finally.bind(u),i("submit",c),c.defaultPrevented||u.then(d=>{let{valid:h}=d;if(h){var f;(f=r.value)==null||f.submit()}}),c.preventDefault()}return Ye(()=>{var l;return I("form",{ref:r,class:"v-form",novalidate:!0,onReset:o,onSubmit:a},[(l=t.default)==null?void 0:l.call(t,s)])}),Qh(s,r)}});const JT=qe({name:"VLabel",props:U({text:String},yn()),setup(n,e){let{slots:t}=e;return Ye(()=>{var i;return I("label",{class:"v-label"},[n.text,(i=t.default)==null?void 0:i.call(t)])}),{}}}),Ru=qe({name:"VFieldLabel",props:{floating:Boolean},setup(n,e){let{slots:t}=e;return Ye(()=>I(JT,{class:["v-field-label",{"v-field-label--floating":n.floating}],"aria-hidden":n.floating||void 0},t)),{}}}),JB=ot({focused:Boolean},"focus");function ZB(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As();const t=dn(n,"focused"),i=G(()=>({[`${e}--focused`]:t.value}));function s(){t.value=!0}function r(){t.value=!1}return{focusClasses:i,isFocused:t,focus:s,blur:r}}const QB=["underlined","outlined","filled","solo","plain"],ZT=ot(U(U({appendInnerIcon:Dt,bgColor:String,clearable:Boolean,clearIcon:{type:Dt,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Dt,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:n=>QB.includes(n)}},yn()),jv()),"v-field"),QT=zn()({name:"VField",inheritAttrs:!1,props:U(U({id:String},JB()),ZT()),emits:{"click:clear":n=>!0,"click:control":n=>!0,"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{attrs:t,emit:i,slots:s}=e;const{themeClasses:r}=Pn(n),{loaderClasses:o}=Zh(n),{focusClasses:a,isFocused:l,focus:c,blur:u}=ZB(n),d=G(()=>n.dirty||n.active),h=G(()=>!n.singleLine&&!!(n.label||s.label)),f=ci(),p=G(()=>n.id||`input-${f}`),g=Ee(),m=Ee(),v=Ee(),{backgroundColorClasses:_,backgroundColorStyles:M}=Es(Ke(n,"bgColor")),{textColorClasses:E,textColorStyles:x}=Ss(G(()=>d.value&&l.value&&!n.error&&!n.disabled?n.color:void 0));ct(d,D=>{if(h.value){const W=g.value.$el,L=m.value.$el,y=Dg(W),T=L.getBoundingClientRect(),X=T.x-y.x,k=T.y-y.y-(y.height/2-T.height/2),z=T.width/.75,H=Math.abs(z-y.width)>1?{maxWidth:Ge(z)}:void 0,$=parseFloat(getComputedStyle(W).transitionDuration)*1e3,O=parseFloat(getComputedStyle(L).getPropertyValue("--v-field-label-scale"));W.style.visibility="visible",L.style.visibility="hidden",W.animate([{transform:"translate(0)"},U({transform:`translate(${X}px, ${k}px) scale(${O})`},H)],{duration:$,easing:Pd,direction:D?"normal":"reverse"}).finished.then(()=>{W.style.removeProperty("visibility"),L.style.removeProperty("visibility")})}},{flush:"post"});const P=G(()=>({isActive:d,isFocused:l,controlRef:v,blur:u,focus:c}));function C(D){D.target!==document.activeElement&&D.preventDefault(),i("click:control",D)}return Ye(()=>{var D,W,L;const y=n.variant==="outlined",T=s["prepend-inner"]||n.prependInnerIcon,X=!!(n.clearable||s.clear),k=!!(s["append-inner"]||n.appendInnerIcon||X),z=s.label?s.label({label:n.label,props:{for:p.value}}):n.label;return I("div",It({class:["v-field",{"v-field--active":d.value,"v-field--appended":k,"v-field--disabled":n.disabled,"v-field--dirty":n.dirty,"v-field--error":n.error,"v-field--has-background":!!n.bgColor,"v-field--persistent-clear":n.persistentClear,"v-field--prepended":T,"v-field--reverse":n.reverse,"v-field--single-line":n.singleLine,"v-field--has-label":!!z,[`v-field--variant-${n.variant}`]:!0},r.value,_.value,a.value,o.value],style:[M.value,x.value],onClick:C},t),[I("div",{class:"v-field__overlay"},null),I(qv,{name:"v-field",active:n.loading,color:n.error?"error":n.color},{default:s.loader}),T&&I("div",{key:"prepend",class:"v-field__prepend-inner"},[n.prependInnerIcon&&I(Sn,{key:"prepend-icon",onClick:t["onClick:prependInner"],icon:n.prependInnerIcon},null),(D=s["prepend-inner"])==null?void 0:D.call(s,P.value)]),I("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(n.variant)&&h.value&&I(Ru,{key:"floating-label",ref:m,class:[E.value],floating:!0},{default:()=>[z]}),I(Ru,{ref:g,for:p.value},{default:()=>[z]}),(W=s.default)==null?void 0:W.call(s,Qe(U({},P.value),{props:{id:p.value,class:"v-field__input"},focus:c,blur:u}))]),X&&I(hP,{key:"clear"},{default:()=>[oi(I("div",{class:"v-field__clearable"},[s.clear?s.clear():I(Sn,{onClick:H=>i("click:clear",H),icon:n.clearIcon},null)]),[[Xc,n.dirty]])]}),k&&I("div",{key:"append",class:"v-field__append-inner"},[(L=s["append-inner"])==null?void 0:L.call(s,P.value),n.appendInnerIcon&&I(Sn,{key:"append-icon",onClick:t["onClick:appendInner"],icon:n.appendInnerIcon},null)]),I("div",{class:["v-field__outline",E.value]},[y&&I(Nt,null,[I("div",{class:"v-field__outline__start"},null),h.value&&I("div",{class:"v-field__outline__notch"},[I(Ru,{ref:m,floating:!0},{default:()=>[z]})]),I("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(n.variant)&&h.value&&I(Ru,{ref:m,floating:!0},{default:()=>[z]})])])}),{controlRef:v}}});function eV(n){return _o(n,Object.keys(QT.props))}const tV=qe({name:"VMessages",props:U({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]}},Ka({transition:{component:zS,leaveAbsolute:!0,group:!0}})),setup(n,e){let{slots:t}=e;const i=G(()=>Kr(n.messages)),{textColorClasses:s,textColorStyles:r}=Ss(G(()=>n.color));return Ye(()=>I(tr,{transition:n.transition,tag:"div",class:["v-messages",s.value],style:r.value},{default:()=>[n.active&&i.value.map((o,a)=>I("div",{class:"v-messages__message",key:`${a}-${i.value}`},[t.message?t.message({message:o}):o]))]})),{}}}),nV=ot({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validationValue:null});function iV(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:As(),t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ci();const i=dn(n,"modelValue"),s=G(()=>{var M;return(M=n.validationValue)!=null?M:i.value}),r=KB(),o=Ee([]),a=Ee(!0),l=G(()=>!!(Kr(i.value===""?null:i.value).length||Kr(s.value===""?null:s.value).length)),c=G(()=>!!(n.disabled||r!=null&&r.isDisabled.value)),u=G(()=>!!(n.readonly||r!=null&&r.isReadonly.value)),d=G(()=>n.errorMessages.length?Kr(n.errorMessages):o.value),h=G(()=>n.error||d.value.length?!1:n.rules.length&&a.value?null:!0),f=Ee(!1),p=G(()=>({[`${e}--error`]:h.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:c.value,[`${e}--readonly`]:u.value})),g=G(()=>{var M;return(M=n.name)!=null?M:Si(t)});wh(()=>{r==null||r.register(g.value,_,m,v,h)}),Li(()=>{r==null||r.unregister(g.value)}),ct(s,()=>{s.value!=null&&_()});function m(){v(),i.value=null}function v(){a.value=!0,o.value=[]}async function _(){const M=[];f.value=!0;for(const E of n.rules){if(M.length>=(n.maxErrors||1))break;const P=await(typeof E=="function"?E:()=>E)(s.value);if(P!==!0){if(typeof P!="string"){console.warn(`${P} is not a valid value. Rule functions must return boolean true or a string.`);continue}M.push(P)}}return o.value=M,f.value=!1,a.value=!1,o.value}return{errorMessages:d,isDirty:l,isDisabled:c,isReadonly:u,isPristine:a,isValid:h,isValidating:f,reset:m,resetValidation:v,validate:_,validationClasses:p}}const Zv=ot(U(U({id:String,appendIcon:Dt,prependIcon:Dt,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:n=>["horizontal","vertical"].includes(n)}},Zi()),nV())),Qv=zn()({name:"VInput",props:U({},Zv()),emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:i,emit:s}=e;const{densityClasses:r}=Is(n),o=ci(),a=G(()=>n.id||`input-${o}`),{errorMessages:l,isDirty:c,isDisabled:u,isReadonly:d,isPristine:h,isValid:f,isValidating:p,reset:g,resetValidation:m,validate:v,validationClasses:_}=iV(n,"v-input",a),M=G(()=>({id:a,isDirty:c,isDisabled:u,isReadonly:d,isPristine:h,isValid:f,isValidating:p,reset:g,resetValidation:m,validate:v}));return Ye(()=>{var E,x,P,C,D;const W=!!(i.prepend||n.prependIcon),L=!!(i.append||n.appendIcon),y=!!((E=n.messages)!=null&&E.length||l.value.length),T=!n.hideDetails||n.hideDetails==="auto"&&y;return I("div",{class:["v-input",`v-input--${n.direction}`,r.value,_.value]},[W&&I("div",{key:"prepend",class:"v-input__prepend"},[n.prependIcon&&I(Sn,{key:"prepend-icon",onClick:t["onClick:prepend"],icon:n.prependIcon},null),(x=i.prepend)==null?void 0:x.call(i,M.value)]),i.default&&I("div",{class:"v-input__control"},[(P=i.default)==null?void 0:P.call(i,M.value)]),L&&I("div",{key:"append",class:"v-input__append"},[(C=i.append)==null?void 0:C.call(i,M.value),n.appendIcon&&I(Sn,{key:"append-icon",onClick:t["onClick:append"],icon:n.appendIcon},null)]),T&&I("div",{class:"v-input__details"},[I(tV,{active:y,messages:l.value.length>0?l.value:n.messages},{message:i.message}),(D=i.details)==null?void 0:D.call(i,M.value)])])}),{reset:g,resetValidation:m,validate:v}}});function eC(n){return _o(n,Object.keys(Qv.props))}const sV=qe({name:"VCounter",functional:!0,props:U({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0}},Ka({transition:{component:zS}})),setup(n,e){let{slots:t}=e;const i=G(()=>n.max?`${n.value} / ${n.max}`:String(n.value));return Ye(()=>I(tr,{transition:n.transition},{default:()=>[oi(I("div",{class:"v-counter"},[t.default?t.default({counter:i.value,max:n.max,value:n.value}):i.value]),[[Xc,n.active]])]})),{}}}),rV=["color","file","time","date","datetime-local","week","month"],Ml=zn()({name:"VTextField",directives:{Intersect:KS},inheritAttrs:!1,props:U(U({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"}},Zv()),ZT()),emits:{"click:clear":n=>!0,"click:control":n=>!0,"click:input":n=>!0,"update:modelValue":n=>!0},setup(n,e){let{attrs:t,emit:i,slots:s}=e;const r=dn(n,"modelValue"),o=G(()=>{var _;return typeof n.counterValue=="function"?n.counterValue(r.value):((_=r.value)!=null?_:"").toString().length}),a=G(()=>{if(t.maxlength)return t.maxlength;if(!(!n.counter||typeof n.counter!="number"&&typeof n.counter!="string"))return n.counter});function l(_,M){var E,x;!n.autofocus||!_||(E=M[0].target)==null||(x=E.focus)==null||x.call(E)}const c=Ee(),u=Ee(),d=Ee(!1),h=Ee(),f=G(()=>rV.includes(n.type)||n.persistentPlaceholder||d.value),p=G(()=>n.messages.length?n.messages:d.value||n.persistentHint?n.hint:"");function g(){if(h.value!==document.activeElement){var _;(_=h.value)==null||_.focus()}d.value||(d.value=!0)}function m(_){g(),i("click:control",_)}function v(_){_.stopPropagation(),g(),Jn(()=>{r.value="",i("click:clear",_)})}return Ye(()=>{const _=!!(s.counter||n.counter||n.counterValue),[M,E]=Lg(t),[D]=eC(n),W=D,{modelValue:x}=W,P=Vi(W,["modelValue"]),[C]=eV(n);return I(Qv,It({ref:c,modelValue:r.value,"onUpdate:modelValue":L=>r.value=L,class:["v-text-field",{"v-text-field--prefixed":n.prefix,"v-text-field--suffixed":n.suffix,"v-text-field--flush-details":["plain","underlined"].includes(n.variant)}],"onClick:prepend":t["onClick:prepend"],"onClick:append":t["onClick:append"]},M,P,{messages:p.value}),Qe(U({},s),{default:L=>{let{id:y,isDisabled:T,isDirty:X,isReadonly:k,isValid:z}=L;return I(QT,It({ref:u,onMousedown:H=>{H.target!==h.value&&H.preventDefault()},"onClick:control":m,"onClick:clear":v,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:"textbox"},C,{id:y.value,active:f.value||X.value,dirty:X.value||n.dirty,focused:d.value,error:z.value===!1}),Qe(U({},s),{default:H=>{var $;let{props:ae}=H,fe=ae,{class:O}=fe,ne=Vi(fe,["class"]);return I(Nt,null,[n.prefix&&I("span",{class:"v-text-field__prefix"},[n.prefix]),I("div",{class:O,onClick:oe=>i("click:input",oe),"data-no-activator":""},[($=s.default)==null?void 0:$.call(s),oi(I("input",It({ref:h,"onUpdate:modelValue":oe=>r.value=oe,autofocus:n.autofocus,readonly:k.value,disabled:T.value,name:n.name,placeholder:n.placeholder,size:1,type:n.type,onFocus:g,onBlur:()=>d.value=!1},ne,E),null),[[SS,r.value],[vo("intersect"),{handler:l},null,{once:!0}]])]),n.suffix&&I("span",{class:"v-text-field__suffix"},[n.suffix])])}}))},details:_?()=>I(Nt,null,[I("span",null,null),I(sV,{active:n.persistentCounter||d.value,value:o.value,max:a.value},s.counter)]):void 0}))}),Qh({},c,u,h)}}),oV={name:"LoginRegister",data:()=>({loginWindow:!1,email:null,password:null,showPassword:!1,confirmPassword:null,registrationWindow:!0,showConfirmPassword:!1,rules:{required:n=>!!n||"Required.",counter:n=>n.length>5||"Password must be more than 6 characters",samePassword:n=>n===globalThis.password||"Password must match",email:n=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)||"Invalid e-mail."}}),methods:{createAccount(){dD(mi(),this.email,this.password).then(()=>{Dc.push("/"),this.loginWindow=!1,M3(Nm(Om(),"users/"+mi().currentUser.uid),{fullName:"",email:mi().currentUser.email,role:"user",photo:""})}).catch(n=>{console.log(n.code,n.message)})},signInOnAccount(){hD(mi(),this.email,this.password).then(()=>{Dc.push("/"),this.loginWindow=!1,this.$store.state.user=mi().currentUser,hT(Nm(Om(),"users/"+mi().currentUser.uid),n=>{this.$store.state.userPhoto=n.val().photo}),this.$store.commit("showAlert",["Login successful","success"])}).catch(n=>{this.$store.commit("showAlert",[n.message,"error"])})}}},aV=$i("h1",{class:"text-center"},"Login",-1),lV=Ai(" Login "),cV={class:"d-flex align-center justify-center"},uV=Ai(" Dont have account? "),dV=Ai(" Registration "),hV=$i("h1",{class:"text-center"},"Registration",-1),fV=Ai(" Registration "),pV={class:"d-flex align-center justify-center"},mV=Ai(" You have account? "),gV=Ai(" Login ");function vV(n,e,t,i,s,r){return tn(),si(qB,{modelValue:n.loginWindow,"onUpdate:modelValue":e[12]||(e[12]=o=>n.loginWindow=o)},{activator:st(({props:o})=>[I(vc,It({icon:"login",class:"v-card--hover"},o),null,16)]),default:st(()=>[I(EB,{"min-width":"600",class:"pa-5"},{default:st(()=>[I(kT,{justify:"center"},{default:st(()=>[I(IT,{cols:"6"},{default:st(()=>[n.registrationWindow?(tn(),si(xx,{key:0,class:"text-center"},{default:st(()=>[aV,I(Ml,{variant:"outlined",modelValue:n.email,"onUpdate:modelValue":e[0]||(e[0]=o=>n.email=o),"hide-details":"auto",label:"Email",class:"py-2",rules:[n.rules.email,n.rules.required]},null,8,["modelValue","rules"]),I(Ml,{variant:"outlined",modelValue:n.password,"onUpdate:modelValue":e[1]||(e[1]=o=>n.password=o),"hide-details":"auto",label:"Password",class:"py-2","append-icon":n.showPassword?"visibility":"visibility_off",type:n.showPassword?"text":"password","onClick:append":e[2]||(e[2]=o=>n.showPassword=!n.showPassword)},null,8,["modelValue","append-icon","type"]),$i("div",null,[I(ua,{block:"",color:"success",onClick:e[3]||(e[3]=o=>r.signInOnAccount())},{default:st(()=>[lV]),_:1})]),$i("div",cV,[uV,I(ua,{color:"primary",size:"x-small",onClick:e[4]||(e[4]=o=>n.registrationWindow=!1)},{default:st(()=>[dV]),_:1})])]),_:1})):(tn(),si(xx,{key:1,class:"text-center"},{default:st(()=>[hV,I(Ml,{variant:"outlined",modelValue:n.email,"onUpdate:modelValue":e[5]||(e[5]=o=>n.email=o),"hide-details":"auto",label:"Email",class:"py-2",rules:[n.rules.email,n.rules.required]},null,8,["modelValue","rules"]),I(Ml,{variant:"outlined",modelValue:n.password,"onUpdate:modelValue":e[6]||(e[6]=o=>n.password=o),"hide-details":"auto",label:"Password",class:"py-2","append-icon":n.showPassword?"visibility":"visibility_off",type:n.showPassword?"text":"password","onClick:append":e[7]||(e[7]=o=>n.showPassword=!n.showPassword),rules:[n.rules.required,n.rules.counter]},null,8,["modelValue","append-icon","type","rules"]),I(Ml,{variant:"outlined",modelValue:n.confirmPassword,"onUpdate:modelValue":e[8]||(e[8]=o=>n.confirmPassword=o),"hide-details":"auto",label:"Confirm password",class:"py-2","append-icon":n.showConfirmPassword?"visibility":"visibility_off",type:n.showConfirmPassword?"text":"password","onClick:append":e[9]||(e[9]=o=>n.showConfirmPassword=!n.showConfirmPassword),rules:[n.rules.required,n.rules.samePassword]},null,8,["modelValue","append-icon","type","rules"]),$i("div",null,[I(ua,{block:"",color:"success",onClick:e[10]||(e[10]=o=>r.createAccount())},{default:st(()=>[fV]),_:1})]),$i("div",pV,[mV,I(ua,{color:"primary",size:"x-small",onClick:e[11]||(e[11]=o=>n.registrationWindow=!0)},{default:st(()=>[gV]),_:1})])]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}var _V=Yc(oV,[["render",vV]]);const tC=zn()({name:"VToolbarTitle",props:U({text:String},Yt()),setup(n,e){let{slots:t}=e;return Ye(()=>{var i;const s=!!(t.default||t.text||n.text);return I(n.tag,{class:"v-toolbar-title"},{default:()=>[s&&I("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():n.text,(i=t.default)==null?void 0:i.call(t)])]})}),{}}}),yV=[null,"prominent","default","comfortable","compact"],nC=ot(U(U(U(U(U({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:n=>yV.includes(n)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String},xo()),Er()),Qi()),Yt({tag:"header"})),yn()),"v-toolbar"),Gm=zn()({name:"VToolbar",props:nC(),setup(n,e){var t;let{slots:i}=e;const{backgroundColorClasses:s,backgroundColorStyles:r}=Es(Ke(n,"color")),{borderClasses:o}=bo(n),{elevationClasses:a}=Mr(n),{roundedClasses:l}=es(n),{themeClasses:c}=Pn(n),u=Ee(!!(n.extended||(t=i.extension)!=null&&t.call(i))),d=G(()=>parseInt(Number(n.height)+(n.density==="prominent"?Number(n.height):0)-(n.density==="comfortable"?8:0)-(n.density==="compact"?16:0),10)),h=G(()=>u.value?parseInt(Number(n.extensionHeight)+(n.density==="prominent"?Number(n.extensionHeight):0)-(n.density==="comfortable"?4:0)-(n.density==="compact"?8:0),10):0);return Ya({VBtn:{variant:"text"}}),Ye(()=>{var f,p,g,m,v;const _=!!(n.title||i.title),M=!!(i.image||n.image),E=(f=i.extension)==null?void 0:f.call(i);return u.value=!!(n.extended||E),I(n.tag,{class:["v-toolbar",{"v-toolbar--absolute":n.absolute,"v-toolbar--collapse":n.collapse,"v-toolbar--flat":n.flat,"v-toolbar--floating":n.floating,[`v-toolbar--density-${n.density}`]:!0},s.value,o.value,a.value,l.value,c.value],style:[r.value]},{default:()=>[M&&I("div",{key:"image",class:"v-toolbar__image"},[I(qi,{defaults:{VImg:{cover:!0,src:n.image}}},{default:()=>[i.image?(p=i.image)==null?void 0:p.call(i):I(Ih,null,null)]})]),I("div",{class:"v-toolbar__content",style:{height:Ge(d.value)}},[i.prepend&&I("div",{class:"v-toolbar__prepend"},[(g=i.prepend)==null?void 0:g.call(i)]),_&&I(tC,{key:"title",text:n.title},{text:i.title}),(m=i.default)==null?void 0:m.call(i),i.append&&I("div",{class:"v-toolbar__append"},[(v=i.append)==null?void 0:v.call(i)])]),I(HS,null,{default:()=>[u.value&&I("div",{class:"v-toolbar__extension",style:{height:Ge(h.value)}},[E])]})]})}),Qh({contentHeight:d,extensionHeight:h})}});function xV(n){var e;return _o(n,Object.keys((e=Gm==null?void 0:Gm.props)!=null?e:{}))}const bV=qe({name:"VAppBar",props:Qe(U(U({modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:n=>["top","bottom"].includes(n)}},nC()),pE()),{height:{type:[Number,String],default:64}}),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const i=Ee(),s=dn(n,"modelValue"),r=G(()=>{var a,l,c,u;const d=(a=(l=i.value)==null?void 0:l.contentHeight)!=null?a:0,h=(c=(u=i.value)==null?void 0:u.extensionHeight)!=null?c:0;return d+h}),{layoutItemStyles:o}=mE({id:n.name,order:G(()=>parseInt(n.order,10)),position:Ke(n,"location"),layoutSize:r,elementSize:r,active:s,absolute:Ke(n,"absolute")});return Ye(()=>{const[a]=xV(n);return I(Gm,It({ref:i,class:["v-app-bar",{"v-app-bar--bottom":n.location==="bottom"}],style:Qe(U({},o.value),{height:void 0})},a),t)}),{}}}),wV=qe({name:"VAppBarNavIcon",props:{icon:{type:Dt,default:"$menu"}},setup(n,e){let{slots:t}=e;return Ye(()=>I(ua,{class:"v-app-bar-nav-icon",icon:n.icon},t)),{}}});const SV=zn()({name:"VMenu",inheritAttrs:!1,props:U({modelValue:Boolean,id:String},Ka({transition:{component:US}})),emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:i}=e;const s=dn(n,"modelValue"),{scopeId:r}=YT(),o=ci(),a=G(()=>n.id||`v-menu-${o}`),l=Ee(),c=_t(Um,null);let u=0;ln(Um,{register(){++u},unregister(){--u},closeParents(){setTimeout(()=>{u||(s.value=!1,c==null||c.closeParents())},40)}}),ct(s,h=>{h?c==null||c.register():c==null||c.unregister()});function d(){c==null||c.closeParents()}return Ye(()=>I(XT,It({ref:l,modelValue:s.value,"onUpdate:modelValue":h=>s.value=h,class:["v-menu"],transition:n.transition,absolute:!0,closeOnContentClick:!0,locationStrategy:"connected",scrollStrategy:"reposition",scrim:!1,openDelay:"300",closeDelay:"250",activatorProps:{"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":a.value},"onClick:outside":d},r,t),{default:i.default,activator:i.activator})),Qh({id:a},l)}});const iC=Symbol.for("vuetify:selection-control-group");qe({name:"VSelectionControlGroup",props:{disabled:Boolean,id:String,inline:Boolean,name:String,falseIcon:Dt,trueIcon:Dt,multiple:{type:Boolean,default:null},readonly:Boolean,type:String,modelValue:null},emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const i=dn(n,"modelValue"),s=ci(),r=G(()=>n.id||`v-selection-control-group-${s}`),o=G(()=>n.name||r.value);return ln(iC,{disabled:Ke(n,"disabled"),inline:Ke(n,"inline"),modelValue:i,multiple:G(()=>!!n.multiple||n.multiple==null&&Array.isArray(i.value)),name:o,falseIcon:Ke(n,"falseIcon"),trueIcon:Ke(n,"trueIcon"),readonly:Ke(n,"readonly"),type:Ke(n,"type")}),Ye(()=>{var a;return I("div",{class:"v-selection-control-group","aria-labelled-by":n.type==="radio"?r.value:void 0,role:n.type==="radio"?"radiogroup":void 0},[(a=t.default)==null?void 0:a.call(t)])}),{}}});const sC=ot(U(U({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,label:String,falseIcon:Dt,trueIcon:Dt,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,trueValue:null,falseValue:null,modelValue:null,type:String,value:null,valueComparator:{type:Function,default:Pg}},yn()),Zi()));function EV(n){const e=_t(iC,void 0),{densityClasses:t}=Is(n),i=dn(n,"modelValue"),s=G(()=>n.trueValue!==void 0?n.trueValue:n.value!==void 0?n.value:!0),r=G(()=>n.falseValue!==void 0?n.falseValue:!1),o=G(()=>(e==null?void 0:e.multiple.value)||!!n.multiple||n.multiple==null&&Array.isArray(i.value)),a=G({get(){const d=e?e.modelValue.value:i.value;return o.value?d.some(h=>n.valueComparator(h,s.value)):n.valueComparator(d,s.value)},set(d){if(n.readonly)return;const h=d?s.value:r.value;let f=h;o.value&&(f=d?[...Kr(i.value),h]:Kr(i.value).filter(p=>!n.valueComparator(p,s.value))),e?e.modelValue.value=f:i.value=f}}),{textColorClasses:l,textColorStyles:c}=Ss(G(()=>a.value&&!n.error&&!n.disabled?n.color:void 0)),u=G(()=>{var d,h;return a.value?(d=e==null?void 0:e.trueIcon.value)!=null?d:n.trueIcon:(h=e==null?void 0:e.falseIcon.value)!=null?h:n.falseIcon});return{group:e,densityClasses:t,trueValue:s,falseValue:r,model:a,textColorClasses:l,textColorStyles:c,icon:u}}const rC=zn()({name:"VSelectionControl",directives:{Ripple:Rh},inheritAttrs:!1,props:sC(),emits:{"update:modelValue":n=>!0},setup(n,e){let{attrs:t,slots:i}=e;const{densityClasses:s,group:r,icon:o,model:a,textColorClasses:l,textColorStyles:c,trueValue:u}=EV(n),d=ci(),h=G(()=>n.id||`input-${d}`),f=Ee(!1),p=Ee(!1),g=Ee();function m(_){f.value=!0,(!sm||sm&&_.target.matches(":focus-visible"))&&(p.value=!0)}function v(){f.value=!1,p.value=!1}return Ye(()=>{var _,M,E,x;const P=i.label?i.label({label:n.label,props:{for:h.value}}):n.label,C=(_=r==null?void 0:r.type.value)!=null?_:n.type,[D,W]=Lg(t);return I("div",It({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":n.disabled,"v-selection-control--error":n.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":p.value,"v-selection-control--inline":(r==null?void 0:r.inline.value)||n.inline},s.value]},D),[I("div",{class:["v-selection-control__wrapper",l.value],style:c.value},[(M=i.default)==null?void 0:M.call(i),oi(I("div",{class:["v-selection-control__input"]},[o.value&&I(Sn,{key:"icon",icon:o.value},null),oi(I("input",It({"onUpdate:modelValue":L=>a.value=L,ref:g,disabled:n.disabled,id:h.value,onBlur:v,onFocus:m,"aria-readonly":n.readonly,type:C,value:u.value,name:(E=r==null?void 0:r.name.value)!=null?E:n.name,"aria-checked":C==="checkbox"?a.value:void 0},W),null),[[SS,a.value]]),(x=i.input)==null?void 0:x.call(i,{model:a,textColorClasses:l,props:{onFocus:m,onBlur:v,id:h.value}})]),[[vo("ripple"),n.ripple&&[!n.disabled&&!n.readonly,null,["center","circle"]]]])]),P&&I(JT,{for:h.value},{default:()=>[P]})])}),{isFocused:f,input:g}}});function MV(n){return _o(n,Object.keys(rC.props))}const TV=qe({name:"VSwitch",inheritAttrs:!1,props:U(U({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1}},Zv()),sC()),emits:{"update:indeterminate":n=>!0},setup(n,e){let{attrs:t,slots:i}=e;const s=dn(n,"indeterminate"),{loaderClasses:r}=Zh(n),o=G(()=>typeof n.loading=="string"&&n.loading!==""?n.loading:n.color),a=ci(),l=G(()=>n.id||`switch-${a}`);function c(){s.value&&(s.value=!1)}return Ye(()=>{const[u,d]=Lg(t),[h,f]=eC(n),[p,g]=MV(n),m=Ee();function v(){var _,M;(_=m.value)==null||(M=_.input)==null||M.click()}return I(Qv,It({class:["v-switch",{"v-switch--inset":n.inset},{"v-switch--indeterminate":s.value},r.value]},u,h,{id:l.value}),Qe(U({},i),{default:_=>{let{id:M,isDisabled:E,isReadonly:x,isValid:P}=_;return I(rC,It({ref:m},p,{id:M.value,type:"checkbox","onUpdate:modelValue":c,"aria-checked":s.value?"mixed":void 0,disabled:E.value,readonly:x.value},d),Qe(U({},i),{default:()=>I("div",{class:"v-switch__track",onClick:v},null),input:C=>{let{textColorClasses:D}=C;return I("div",{class:["v-switch__thumb",D.value]},[n.loading&&I(qv,{name:"v-switch",active:!0,color:P.value===!1?void 0:o.value},{default:W=>i.loader?i.loader(W):I(HT,{active:W.isActive,color:W.color,indeterminate:!0,size:"16",width:"2"},null)})])}}))}}))}),{}}}),CV={name:"ToolBar",components:{LoginRegister:_V},data:()=>({userStatus:!1,itemMenu:[{title:"Profile",src:"/userProfile",icon:"account_circle"},{title:"Setting",src:"/userProfile",icon:"settings"}]}),mounted(){mi().onAuthStateChanged(n=>{this.userStatus=!!n})},methods:{showBarMenu(){this.$store.state.show=!this.$store.state.show},singOut(){try{mi().signOut(),Dc.push("/"),this.$store.commit("showAlert",["Successful logout","success"])}catch(n){this.$store.commit("showAlert",[n.message,"error"])}}},computed:{}},AV={key:0,class:"d-flex align-center"},IV={key:2,id:"showmenu"},RV=Ai(" Logout ");function PV(n,e,t,i,s,r){const o=rr("LoginRegister"),a=rr("router-link");return tn(),si(bV,{color:"white"},{default:st(()=>[I(wV,{onClick:e[0]||(e[0]=l=>r.showBarMenu())}),I(tC,null,{default:st(()=>[Ai(wd(n.$store.state.titleToolBar),1)]),_:1}),n.$store.state.titleToolBar=="Autocommit counter"?(tn(),_a("div",AV,[I(Sn,{icon:"view_headline",color:n.$store.state.changeVeawStyle?"":"info"},null,8,["color"]),I(TV,{"hide-details":"",class:"ml-2",modelValue:n.$store.state.changeVeawStyle,"onUpdate:modelValue":e[1]||(e[1]=l=>n.$store.state.changeVeawStyle=l)},null,8,["modelValue"]),I(Sn,{icon:"grid_view",color:n.$store.state.changeVeawStyle?"info":""},null,8,["color"])])):uS("",!0),n.userStatus?(tn(),_a("div",IV,[I(vc,{image:n.$store.state.userPhoto,icon:"account_circle",class:"v-card--hover"},null,8,["image"]),I(SV,{activator:"#showmenu"},{default:st(()=>[I(dE,null,{default:st(()=>[(tn(!0),_a(Nt,null,Tg(n.itemMenu,l=>(tn(),si(a,{key:l.title,to:l.src,class:"text-decoration-none text-black"},{default:st(()=>[I(xc,{"append-icon":l.icon,onClick:c=>n.$store.state.tab=l.title.toLowerCase()},{default:st(()=>[Ai(wd(l.title),1)]),_:2},1032,["append-icon","onClick"])]),_:2},1032,["to"]))),128)),I(xc,null,{default:st(()=>[I(ua,{color:"error",variant:"tonal",class:"mb-1",onClick:e[2]||(e[2]=l=>r.singOut())},{default:st(()=>[RV]),_:1})]),_:1})]),_:1})]),_:1})])):(tn(),si(o,{key:1}))]),_:1})}var LV=Yc(CV,[["render",PV]]);const oC=yo("v-alert-title"),NV=["success","info","warning","error"],DV=qe({name:"VAlert",props:U(U(U(U(U(U(U(U(U({border:{type:[Boolean,String],validator:n=>typeof n=="boolean"||["top","end","bottom","start"].includes(n)},borderColor:String,closable:Boolean,closeIcon:{type:Dt,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:n=>NV.includes(n)}},Zi()),wr()),Er()),Xv()),Kv()),Qi()),Yt()),yn()),Ja({variant:"flat"})),emits:{"update:modelValue":n=>!0},setup(n,e){let{slots:t}=e;const i=dn(n,"modelValue"),s=G(()=>{var M;if(n.icon!==!1)return n.type?(M=n.icon)!=null?M:`$${n.type}`:n.icon}),r=G(()=>{var M;return{color:(M=n.color)!=null?M:n.type,variant:n.variant}}),{themeClasses:o}=Pn(n),{colorClasses:a,colorStyles:l,variantClasses:c}=Lh(r),{densityClasses:u}=Is(n),{dimensionStyles:d}=Sr(n),{elevationClasses:h}=Mr(n),{locationStyles:f}=Yv(n),{positionClasses:p}=Jv(n),{roundedClasses:g}=es(n),{textColorClasses:m,textColorStyles:v}=Ss(Ke(n,"borderColor"));function _(M){i.value=!1}return()=>{var M;const E=!!(t.prepend||s.value),x=!!(t.title||n.title),P=!!(n.text||t.text),C=!!(t.close||n.closable);return i.value&&I(n.tag,{class:["v-alert",n.border&&{"v-alert--border":!!n.border,[`v-alert--border-${n.border===!0?"start":n.border}`]:!0},{"v-alert--prominent":n.prominent},o.value,a.value,u.value,h.value,p.value,g.value,c.value],style:[l.value,d.value,f.value],role:"alert"},{default:()=>[Ph(!1,"v-alert"),n.border&&I("div",{key:"border",class:["v-alert__border",m.value],style:v.value},null),E&&I(qi,{key:"prepend",defaults:{VIcon:{density:n.density,icon:s.value,size:n.prominent?44:"default"}}},{default:()=>[I("div",{class:"v-alert__prepend"},[t.prepend?t.prepend():s.value&&I(Sn,null,null)])]}),I("div",{class:"v-alert__content"},[x&&I(oC,{key:"title"},{default:()=>[t.title?t.title():n.title]}),P&&(t.text?t.text():n.text),(M=t.default)==null?void 0:M.call(t)]),t.append&&I("div",{key:"append",class:"v-alert__append"},[t.append()]),C&&I(qi,{key:"close",defaults:{VIcon:{icon:n.closeIcon,size:"small"}}},{default:()=>[I("div",{class:"v-alert__close",onClick:_},[t.close?t.close():I(Sn,null,null)])]})]})}}});const OV=qe({name:"VApp",props:U(U({},HP({fullHeight:!0})),yn()),setup(n,e){let{slots:t}=e;const i=Pn(n),{layoutClasses:s,layoutStyles:r,getLayoutItem:o,items:a,layoutRef:l}=$P(n),{rtlClasses:c}=Jh();return Ye(()=>{var u;return I("div",{ref:l,class:["v-application",i.themeClasses.value,s.value,c.value],style:r.value},[I("div",{class:"v-application__wrap"},[(u=t.default)==null?void 0:u.call(t)])])}),{getLayoutItem:o,items:a,theme:i}}});const kV=qe({name:"VMain",props:Yt({tag:"main"}),setup(n,e){let{slots:t}=e;const{mainStyles:i}=WP(),{ssrBootStyles:s}=Ug();return Ye(()=>{var r;return I(n.tag,{class:"v-main",style:[i.value,s.value]},{default:()=>[I("div",{class:"v-main__wrap"},[(r=t.default)==null?void 0:r.call(t)])]})}),{}}}),FV={name:"App",components:{ToolBar:LV,BarMenu:rL},data:()=>({}),mounted(){if(mi().currentUser!=null){const e=mi().currentUser.uid,t=Om(),i=Nm(t,"users/"+e);hT(i,s=>{this.$store.state.userPhoto=s.val().photo})}},watch:{},methods:{},computed:{}};function BV(n,e,t,i,s,r){const o=rr("BarMenu"),a=rr("ToolBar"),l=rr("router-view");return tn(),si(OV,{class:"bg-grey-lighten-3"},{default:st(()=>[I(o),I(a),I(kV,{class:"full-screen"},{default:st(()=>[I(dP,null,{default:st(()=>[n.$store.state.alert.show?(tn(),si(DV,{key:0,position:"absolute","min-width":"300",type:n.$store.state.alert.type,class:"ma-2",style:{"z-index":"2001",right:"0"}},{default:st(()=>[I(oC,null,{default:st(()=>[Ai(wd(n.$store.state.alert.text),1)]),_:1})]),_:1},8,["type"])):uS("",!0)]),_:1}),I(YF,{fluid:"",class:"fill-height pa-0"},{default:st(()=>[I(l)]),_:1})]),_:1})]),_:1})}var VV=Yc(FV,[["render",BV]]);const $m=Symbol.for("vuetify:locale-adapter"),Pu=Symbol.for("vuetify:locale");function u6(){const n=_t($m);if(!n)throw new Error("[Vuetify] Could not find injected locale adapter");return n.getScope()}function UV(n){return!!n&&n.hasOwnProperty("getScope")&&n.hasOwnProperty("createScope")&&n.hasOwnProperty("createRoot")}function zV(n,e){const t=UV(e)?e:GV(e),i=t.createRoot(n);return n==null||n.provide($v,pB(i,e)),t}const bx="$vuetify.",wx=(n,e)=>n.replace(/\{(\d+)\}/g,(t,i)=>String(e[+i])),HV=(n,e,t)=>function(i){for(var s=arguments.length,r=new Array(s>1?s-1:0),o=1;o<s;o++)r[o-1]=arguments[o];if(!i.startsWith(bx))return wx(i,r);const a=i.replace(bx,""),l=n.value&&t.value[n.value],c=e.value&&t.value[e.value];let u=Zp(l,a,null);return u||(Jr(`Translation key "${i}" not found in "${n.value}", trying fallback locale`),u=Zp(c,a,null)),u||(im(`Translation key "${i}" not found in fallback`),u=i),typeof u!="string"&&(im(`Translation key "${i}" has a non-string value`),u=i),wx(u,r)};function WV(n,e){return(t,i)=>new Intl.NumberFormat([n.value,e.value],i).format(t)}function GV(n){const e=t=>{const i=Ee(t.current),s=Ee(t.fallback),r=Ee(t.messages);return{current:i,fallback:s,messages:r,t:HV(i,s,r),n:WV(i,s)}};return{createRoot:t=>{var i,s,r;const o=e({current:(i=n==null?void 0:n.defaultLocale)!=null?i:"en",fallback:(s=n==null?void 0:n.fallbackLocale)!=null?s:"en",messages:(r=n==null?void 0:n.messages)!=null?r:{en:hB}});if(!t)throw new Error("[Vuetify] Could not find default app instance");return t.provide(Pu,o),o},getScope:()=>{const t=_t(Pu);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t},createScope:t=>{const i=_t(Pu);if(!i)throw new Error("[Vuetify] Could not find injected locale instance");const s=e({current:G(()=>{var r;return(r=t==null?void 0:t.locale)!=null?r:i.current.value}),fallback:G(()=>{var r;return(r=t==null?void 0:t.locale)!=null?r:i.fallback.value}),messages:G(()=>{var r;return(r=t==null?void 0:t.messages)!=null?r:i.messages.value})});return ln(Pu,s),s}}}const $V=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{install:t=>{const h=n,{blueprint:i}=h,s=Vi(h,["blueprint"]),r=mr(i,s),{aliases:o={},components:a={},directives:l={}}=r;for(const f in l)t.directive(f,l[f]);for(const f in a)t.component(f,a[f]);for(const f in o)t.component(f,qe(Qe(U({},o[f]),{name:f})));function c(f){t.provide(Rd,zR(r.defaults)),t.provide(cm,XP(r.display,f)),t.provide(Nd,lP(t,r.theme)),t.provide(rm,ZR(r.icons)),t.provide($m,zV(t,r.locale))}Bt||c(),ci.reset();const u=t.mount;t.mount=(f,p,g)=>{c(p);const m=u(f,p,g);return t.mount=u,m};function d(f){var p,g,m;const v=this.$,_=(p=(g=v.parent)==null?void 0:g.provides)!=null?p:(m=v.vnode.appContext)==null?void 0:m.provides;if(_&&f in _)return _[f]}t.mixin({computed:{$vuetify(){return vn({defaults:d.call(this,Rd),display:d.call(this,cm),theme:d.call(this,Nd),icons:d.call(this,rm),locale:d.call(this,$m),rtl:d.call(this,$v)})}}})}}},jV={collapse:"keyboard_arrow_up",complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"cancel",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"},qV={component:n=>li(KR,Qe(U({},n),{class:"material-icons"}))};var XV=$V({icons:{defaultSet:"md",aliases:jV,sets:{md:qV}}});async function YV(){(await ra(()=>import("./webfontloader.cd097671.js").then(function(e){return e.w}),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var KV="store";function ol(n,e){Object.keys(n).forEach(function(t){return e(n[t],t)})}function JV(n){return n!==null&&typeof n=="object"}function ZV(n){return n&&typeof n.then=="function"}function QV(n,e){return function(){return n(e)}}function aC(n,e,t){return e.indexOf(n)<0&&(t&&t.prepend?e.unshift(n):e.push(n)),function(){var i=e.indexOf(n);i>-1&&e.splice(i,1)}}function lC(n,e){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var t=n.state;ef(n,t,[],n._modules.root,!0),e_(n,t,e)}function e_(n,e,t){var i=n._state;n.getters={},n._makeLocalGettersCache=Object.create(null);var s=n._wrappedGetters,r={};ol(s,function(o,a){r[a]=QV(o,n),Object.defineProperty(n.getters,a,{get:function(){return r[a]()},enumerable:!0})}),n._state=vn({data:e}),n.strict&&sU(n),i&&t&&n._withCommit(function(){i.data=null})}function ef(n,e,t,i,s){var r=!t.length,o=n._modules.getNamespace(t);if(i.namespaced&&(n._modulesNamespaceMap[o],n._modulesNamespaceMap[o]=i),!r&&!s){var a=t_(e,t.slice(0,-1)),l=t[t.length-1];n._withCommit(function(){a[l]=i.state})}var c=i.context=eU(n,o,t);i.forEachMutation(function(u,d){var h=o+d;tU(n,h,u,c)}),i.forEachAction(function(u,d){var h=u.root?d:o+d,f=u.handler||u;nU(n,h,f,c)}),i.forEachGetter(function(u,d){var h=o+d;iU(n,h,u,c)}),i.forEachChild(function(u,d){ef(n,e,t.concat(d),u,s)})}function eU(n,e,t){var i=e==="",s={dispatch:i?n.dispatch:function(r,o,a){var l=sh(r,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),n.dispatch(d,c)},commit:i?n.commit:function(r,o,a){var l=sh(r,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),n.commit(d,c,u)}};return Object.defineProperties(s,{getters:{get:i?function(){return n.getters}:function(){return cC(n,e)}},state:{get:function(){return t_(n.state,t)}}}),s}function cC(n,e){if(!n._makeLocalGettersCache[e]){var t={},i=e.length;Object.keys(n.getters).forEach(function(s){if(s.slice(0,i)===e){var r=s.slice(i);Object.defineProperty(t,r,{get:function(){return n.getters[s]},enumerable:!0})}}),n._makeLocalGettersCache[e]=t}return n._makeLocalGettersCache[e]}function tU(n,e,t,i){var s=n._mutations[e]||(n._mutations[e]=[]);s.push(function(o){t.call(n,i.state,o)})}function nU(n,e,t,i){var s=n._actions[e]||(n._actions[e]=[]);s.push(function(o){var a=t.call(n,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:n.getters,rootState:n.state},o);return ZV(a)||(a=Promise.resolve(a)),n._devtoolHook?a.catch(function(l){throw n._devtoolHook.emit("vuex:error",l),l}):a})}function iU(n,e,t,i){n._wrappedGetters[e]||(n._wrappedGetters[e]=function(r){return t(i.state,i.getters,r.state,r.getters)})}function sU(n){ct(function(){return n._state.data},function(){},{deep:!0,flush:"sync"})}function t_(n,e){return e.reduce(function(t,i){return t[i]},n)}function sh(n,e,t){return JV(n)&&n.type&&(t=e,e=n,n=n.type),{type:n,payload:e,options:t}}var rU="vuex bindings",Sx="vuex:mutations",Xf="vuex:actions",Bo="vuex",oU=0;function aU(n,e){W3({id:"org.vuejs.vuex",app:n,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[rU]},function(t){t.addTimelineLayer({id:Sx,label:"Vuex Mutations",color:Ex}),t.addTimelineLayer({id:Xf,label:"Vuex Actions",color:Ex}),t.addInspector({id:Bo,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(i){if(i.app===n&&i.inspectorId===Bo)if(i.filter){var s=[];fC(s,e._modules.root,i.filter,""),i.rootNodes=s}else i.rootNodes=[hC(e._modules.root,"")]}),t.on.getInspectorState(function(i){if(i.app===n&&i.inspectorId===Bo){var s=i.nodeId;cC(e,s),i.state=uU(hU(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),t.on.editInspectorState(function(i){if(i.app===n&&i.inspectorId===Bo){var s=i.nodeId,r=i.path;s!=="root"&&(r=s.split("/").filter(Boolean).concat(r)),e._withCommit(function(){i.set(e._state.data,r,i.state.value)})}}),e.subscribe(function(i,s){var r={};i.payload&&(r.payload=i.payload),r.state=s,t.notifyComponentUpdate(),t.sendInspectorTree(Bo),t.sendInspectorState(Bo),t.addTimelineEvent({layerId:Sx,event:{time:Date.now(),title:i.type,data:r}})}),e.subscribeAction({before:function(i,s){var r={};i.payload&&(r.payload=i.payload),i._id=oU++,i._time=Date.now(),r.state=s,t.addTimelineEvent({layerId:Xf,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:r}})},after:function(i,s){var r={},o=Date.now()-i._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(r.payload=i.payload),r.state=s,t.addTimelineEvent({layerId:Xf,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:r}})}})})}var Ex=8702998,lU=6710886,cU=16777215,uC={label:"namespaced",textColor:cU,backgroundColor:lU};function dC(n){return n&&n!=="root"?n.split("/").slice(-2,-1)[0]:"Root"}function hC(n,e){return{id:e||"root",label:dC(e),tags:n.namespaced?[uC]:[],children:Object.keys(n._children).map(function(t){return hC(n._children[t],e+t+"/")})}}function fC(n,e,t,i){i.includes(t)&&n.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[uC]:[]}),Object.keys(e._children).forEach(function(s){fC(n,e._children[s],t,i+s+"/")})}function uU(n,e,t){e=t==="root"?e:e[t];var i=Object.keys(e),s={state:Object.keys(n.state).map(function(o){return{key:o,editable:!0,value:n.state[o]}})};if(i.length){var r=dU(e);s.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?dC(o):o,editable:!1,value:jm(function(){return r[o]})}})}return s}function dU(n){var e={};return Object.keys(n).forEach(function(t){var i=t.split("/");if(i.length>1){var s=e,r=i.pop();i.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[r]=jm(function(){return n[t]})}else e[t]=jm(function(){return n[t]})}),e}function hU(n,e){var t=e.split("/").filter(function(i){return i});return t.reduce(function(i,s,r){var o=i[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return r===t.length-1?o:o._children},e==="root"?n:n.root._children)}function jm(n){try{return n()}catch(e){return e}}var Ni=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},pC={namespaced:{configurable:!0}};pC.namespaced.get=function(){return!!this._rawModule.namespaced};Ni.prototype.addChild=function(e,t){this._children[e]=t};Ni.prototype.removeChild=function(e){delete this._children[e]};Ni.prototype.getChild=function(e){return this._children[e]};Ni.prototype.hasChild=function(e){return e in this._children};Ni.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Ni.prototype.forEachChild=function(e){ol(this._children,e)};Ni.prototype.forEachGetter=function(e){this._rawModule.getters&&ol(this._rawModule.getters,e)};Ni.prototype.forEachAction=function(e){this._rawModule.actions&&ol(this._rawModule.actions,e)};Ni.prototype.forEachMutation=function(e){this._rawModule.mutations&&ol(this._rawModule.mutations,e)};Object.defineProperties(Ni.prototype,pC);var Eo=function(e){this.register([],e,!1)};Eo.prototype.get=function(e){return e.reduce(function(t,i){return t.getChild(i)},this.root)};Eo.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(i,s){return t=t.getChild(s),i+(t.namespaced?s+"/":"")},"")};Eo.prototype.update=function(e){mC([],this.root,e)};Eo.prototype.register=function(e,t,i){var s=this;i===void 0&&(i=!0);var r=new Ni(t,i);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}t.modules&&ol(t.modules,function(a,l){s.register(e.concat(l),a,i)})};Eo.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1],s=t.getChild(i);!s||!s.runtime||t.removeChild(i)};Eo.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1];return t?t.hasChild(i):!1};function mC(n,e,t){if(e.update(t),t.modules)for(var i in t.modules){if(!e.getChild(i))return;mC(n.concat(i),e.getChild(i),t.modules[i])}}function fU(n){return new Wn(n)}var Wn=function(e){var t=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var s=e.strict;s===void 0&&(s=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Eo(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,f){return l.call(o,h,f)},this.commit=function(h,f,p){return c.call(o,h,f,p)},this.strict=s;var u=this._modules.root.state;ef(this,u,[],this._modules.root),e_(this,u),i.forEach(function(d){return d(t)})},n_={state:{configurable:!0}};Wn.prototype.install=function(e,t){e.provide(t||KV,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&aU(e,this)};n_.state.get=function(){return this._state.data};n_.state.set=function(n){};Wn.prototype.commit=function(e,t,i){var s=this,r=sh(e,t,i),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];!c||(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};Wn.prototype.dispatch=function(e,t){var i=this,s=sh(e,t),r=s.type,o=s.payload,a={type:r,payload:o},l=this._actions[r];if(!!l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(h){try{i._actionSubscribers.filter(function(f){return f.after}).forEach(function(f){return f.after(a,i.state)})}catch{}u(h)},function(h){try{i._actionSubscribers.filter(function(f){return f.error}).forEach(function(f){return f.error(a,i.state,h)})}catch{}d(h)})})}};Wn.prototype.subscribe=function(e,t){return aC(e,this._subscribers,t)};Wn.prototype.subscribeAction=function(e,t){var i=typeof e=="function"?{before:e}:e;return aC(i,this._actionSubscribers,t)};Wn.prototype.watch=function(e,t,i){var s=this;return ct(function(){return e(s.state,s.getters)},t,Object.assign({},i))};Wn.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};Wn.prototype.registerModule=function(e,t,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),ef(this,this.state,e,this._modules.get(e),i.preserveState),e_(this,this.state)};Wn.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=t_(t.state,e.slice(0,-1));delete i[e[e.length-1]]}),lC(this)};Wn.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Wn.prototype.hotUpdate=function(e){this._modules.update(e),lC(this,!0)};Wn.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(Wn.prototype,n_);const Mx={Vertex:"vertex",Fragment:"fragment"},gC={None:"none",Frame:"frame",Object:"object"};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const i_="139",pU=0,Tx=1,mU=2,vC=1,gU=2,Bl=3,Oc=0,Ti=1,Va=2,_C=1,cr=0,Ma=1,Cx=2,Ax=3,Ix=4,vU=5,aa=100,_U=101,yU=102,Rx=103,Px=104,xU=200,bU=201,wU=202,SU=203,yC=204,xC=205,EU=206,MU=207,TU=208,CU=209,AU=210,IU=0,RU=1,PU=2,qm=3,LU=4,NU=5,DU=6,OU=7,tf=0,kU=1,FU=2,bs=0,BU=1,VU=2,UU=3,zU=4,HU=5,bC=300,Ua=301,za=302,Xm=303,Ym=304,nf=306,Km=1e3,_i=1001,Jm=1002,sn=1003,Lx=1004,Nx=1005,Dn=1006,WU=1007,sf=1008,fo=1009,GU=1010,$U=1011,kc=1012,jU=1013,xd=1014,jr=1015,Ta=1016,qU=1017,XU=1018,Ca=1020,YU=1021,KU=1022,bi=1023,JU=1024,ZU=1025,eo=1026,Ha=1027,QU=1028,ez=1029,tz=1030,nz=1031,iz=1033,Yf=33776,Kf=33777,Jf=33778,Zf=33779,Dx=35840,Ox=35841,kx=35842,Fx=35843,sz=36196,Bx=37492,Vx=37496,Ux=37808,zx=37809,Hx=37810,Wx=37811,Gx=37812,$x=37813,jx=37814,qx=37815,Xx=37816,Yx=37817,Kx=37818,Jx=37819,Zx=37820,Qx=37821,eb=36492,rz=2200,oz=2201,az=2202,rh=2300,oh=2301,Qf=2302,da=2400,ha=2401,ah=2402,s_=2500,wC=2501,lz=0,Ts=3e3,Pt=3001,cz=3200,uz=3201,al=0,dz=1,ds="srgb",qr="srgb-linear",ep=7680,hz=519,Fc=35044,lh=35048,tb="300 es",Zm=1035;class Mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const pn=[];for(let n=0;n<256;n++)pn[n]=(n<16?"0":"")+n.toString(16);let nb=1234567;const nc=Math.PI/180,Bc=180/Math.PI;function Ci(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function gn(n,e,t){return Math.max(e,Math.min(t,n))}function r_(n,e){return(n%e+e)%e}function fz(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function pz(n,e,t){return n!==e?(t-n)/(e-n):0}function ic(n,e,t){return(1-t)*n+t*e}function mz(n,e,t,i){return ic(n,e,1-Math.exp(-t*i))}function gz(n,e=1){return e-Math.abs(r_(n,e*2)-e)}function vz(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _z(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function yz(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xz(n,e){return n+Math.random()*(e-n)}function bz(n){return n*(.5-Math.random())}function wz(n){n!==void 0&&(nb=n);let e=nb+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sz(n){return n*nc}function Ez(n){return n*Bc}function Qm(n){return(n&n-1)===0&&n!==0}function Mz(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ch(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tz(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cz(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Az(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Iz=Object.freeze({__proto__:null,DEG2RAD:nc,RAD2DEG:Bc,generateUUID:Ci,clamp:gn,euclideanModulo:r_,mapLinear:fz,inverseLerp:pz,lerp:ic,damp:mz,pingpong:gz,smoothstep:vz,smootherstep:_z,randInt:yz,randFloat:xz,randFloatSpread:bz,seededRandom:wz,degToRad:Sz,radToDeg:Ez,isPowerOfTwo:Qm,ceilPowerOfTwo:Mz,floorPowerOfTwo:ch,setQuaternionFromProperEuler:Tz,normalize:Az,denormalize:Cz});class _e{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}_e.prototype.isVector2=!0;class an{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],g=s[0],m=s[3],v=s[6],_=s[1],M=s[4],E=s[7],x=s[2],P=s[5],C=s[8];return r[0]=o*g+a*_+l*x,r[3]=o*m+a*M+l*P,r[6]=o*v+a*E+l*C,r[1]=c*g+u*_+d*x,r[4]=c*m+u*M+d*P,r[7]=c*v+u*E+d*C,r[2]=h*g+f*_+p*x,r[5]=h*m+f*M+p*P,r[8]=h*v+f*E+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=t*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=d*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+i*l,s[3]=t*o+i*c,s[6]=t*a+i*u,s[1]=-i*r+t*l,s[4]=-i*o+t*c,s[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}an.prototype.isMatrix3=!0;function SC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Vc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function to(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const tp={[ds]:{[qr]:to},[qr]:{[ds]:bd}},di={legacyMode:!0,get workingColorSpace(){return qr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(tp[e]&&tp[e][t]!==void 0){const i=tp[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},EC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qt={r:0,g:0,b:0},hi={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function np(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Nu(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Oe{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ds){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,di.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=qr){return this.r=e,this.g=t,this.b=i,di.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=qr){if(e=r_(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=np(o,r,e+1/3),this.g=np(o,r,e),this.b=np(o,r,e-1/3)}return di.toWorkingColorSpace(this,s),this}setStyle(e,t=ds){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,di.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,di.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return i(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,di.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,di.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ds){const i=EC[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=bd(e.r),this.g=bd(e.g),this.b=bd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ds){return di.fromWorkingColorSpace(Nu(this,qt),e),gn(qt.r*255,0,255)<<16^gn(qt.g*255,0,255)<<8^gn(qt.b*255,0,255)<<0}getHexString(e=ds){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qr){di.fromWorkingColorSpace(Nu(this,qt),t);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qr){return di.fromWorkingColorSpace(Nu(this,qt),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ds){return di.fromWorkingColorSpace(Nu(this,qt),e),e!==ds?`color(${e} ${qt.r} ${qt.g} ${qt.b})`:`rgb(${qt.r*255|0},${qt.g*255|0},${qt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(hi),hi.h+=e,hi.s+=t,hi.l+=i,this.setHSL(hi.h,hi.s,hi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Lu);const i=ic(hi.h,Lu.h,t),s=ic(hi.s,Lu.s,t),r=ic(hi.l,Lu.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Oe.NAMES=EC;Oe.prototype.isColor=!0;Oe.prototype.r=1;Oe.prototype.g=1;Oe.prototype.b=1;let Vo;class To{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vo===void 0&&(Vo=Vc("canvas")),Vo.width=e.width,Vo.height=e.height;const i=Vo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Vc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=to(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(to(t[i]/255)*255):t[i]=to(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class MC{constructor(e=null){this.uuid=Ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ip(s[o].image)):r.push(ip(s[o]))}else r=ip(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ip(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?To.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}MC.prototype.isSource=!0;let Rz=0;class hn extends Mo{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=_i,s=_i,r=Dn,o=sf,a=bi,l=fo,c=1,u=Ts){super();Object.defineProperty(this,"id",{value:Rz++}),this.uuid=Ci(),this.name="",this.source=new MC(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new an,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bC)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Km:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Jm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Km:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Jm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=bC;hn.prototype.isTexture=!0;class gt{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],g=l[2],m=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(f+1)/2,x=(v+1)/2,P=(u+h)/4,C=(d+g)/4,D=(p+m)/4;return M>E&&M>x?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=C/i):E>x?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=P/s,r=D/s):x<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),i=C/r,s=D/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-g)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}gt.prototype.isVector4=!0;class Yn extends Mo{constructor(e,t,i={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Dn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Yn.prototype.isWebGLRenderTarget=!0;class rf extends hn{constructor(e=null,t=1,i=1,s=1){super(null);this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}rf.prototype.isDataArrayTexture=!0;class Pz extends Yn{constructor(e,t,i){super(e,t);this.depth=i,this.texture=new rf(null,e,t,i),this.texture.isRenderTargetTexture=!0}}Pz.prototype.isWebGLArrayRenderTarget=!0;class o_ extends hn{constructor(e=null,t=1,i=1,s=1){super(null);this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}o_.prototype.isData3DTexture=!0;class Lz extends Yn{constructor(e,t,i){super(e,t);this.depth=i,this.texture=new o_(null,e,t,i),this.texture.isRenderTargetTexture=!0}}Lz.prototype.isWebGL3DRenderTarget=!0;class Nz extends Yn{constructor(e,t,i,s={}){super(e,t,s);const r=this.texture;this.texture=[];for(let o=0;o<i;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.texture.length;s<r;s++)this.texture[s].image.width=e,this.texture[s].image.height=t,this.texture[s].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone();return this}}Nz.prototype.isWebGLMultipleRenderTargets=!0;class Un{constructor(e=0,t=0,i=0,s=1){this._x=e,this._y=t,this._z=i,this._w=s}static slerp(e,t,i,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,s)}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const h=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(d!==g||l!==h||c!==f||u!==p){let m=1-a;const v=l*h+c*f+u*p+d*g,_=v>=0?1:-1,M=1-v*v;if(M>Number.EPSILON){const x=Math.sqrt(M),P=Math.atan2(x,v*_);m=Math.sin(m*P)/x,a=Math.sin(a*P)/x}const E=a*_;if(l=l*m+h*E,c=c*m+f*E,u=u*m+p*E,d=d*m+g*E,m===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Un.prototype.isQuaternion=!0;class N{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ib.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ib.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,u=l*i+a*t-r*s,d=l*s+r*i-o*t,h=-r*t-o*i-a*s;return this.x=c*l+h*-r+u*-a-d*-o,this.y=u*l+h*-o+d*-r-c*-a,this.z=d*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sp.copy(this).projectOnVector(e),this.sub(sp)}reflect(e){return this.sub(sp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}N.prototype.isVector3=!0;const sp=new N,ib=new Un;class Di{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<i&&(i=d),h<s&&(s=h),u>r&&(r=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<i&&(i=d),h<s&&(s=h),u>r&&(r=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Nr.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Nr)}else i.boundingBox===null&&i.computeBoundingBox(),rp.copy(i.boundingBox),rp.applyMatrix4(e.matrixWorld),this.union(rp);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nr),Nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),Du.subVectors(this.max,Tl),Uo.subVectors(e.a,Tl),zo.subVectors(e.b,Tl),Ho.subVectors(e.c,Tl),Bs.subVectors(zo,Uo),Vs.subVectors(Ho,zo),Dr.subVectors(Uo,Ho);let t=[0,-Bs.z,Bs.y,0,-Vs.z,Vs.y,0,-Dr.z,Dr.y,Bs.z,0,-Bs.x,Vs.z,0,-Vs.x,Dr.z,0,-Dr.x,-Bs.y,Bs.x,0,-Vs.y,Vs.x,0,-Dr.y,Dr.x,0];return!op(t,Uo,zo,Ho,Du)||(t=[1,0,0,0,1,0,0,0,1],!op(t,Uo,zo,Ho,Du))?!1:(Ou.crossVectors(Bs,Vs),t=[Ou.x,Ou.y,Ou.z],op(t,Uo,zo,Ho,Du))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Nr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Nr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Di.prototype.isBox3=!0;const ss=[new N,new N,new N,new N,new N,new N,new N,new N],Nr=new N,rp=new Di,Uo=new N,zo=new N,Ho=new N,Bs=new N,Vs=new N,Dr=new N,Tl=new N,Du=new N,Ou=new N,Or=new N;function op(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Or.fromArray(n,r);const a=s.x*Math.abs(Or.x)+s.y*Math.abs(Or.y)+s.z*Math.abs(Or.z),l=e.dot(Or),c=t.dot(Or),u=i.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dz=new Di,sb=new N,ku=new N,ap=new N;class ll{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dz.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ap.subVectors(e,this.center);const t=ap.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.add(ap.multiplyScalar(s/i)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?ku.set(0,0,1).multiplyScalar(e.radius):ku.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(sb.copy(e.center).add(ku)),this.expandByPoint(sb.copy(e.center).sub(ku)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rs=new N,lp=new N,Fu=new N,Us=new N,cp=new N,Bu=new N,up=new N;class cl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.direction).multiplyScalar(t).add(this.origin),rs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){lp.copy(e).add(t).multiplyScalar(.5),Fu.copy(t).sub(e).normalize(),Us.copy(this.origin).sub(lp);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fu),a=Us.dot(this.direction),l=-Us.dot(Fu),c=Us.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){const g=1/u;d*=g,h*=g,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),s&&s.copy(Fu).multiplyScalar(h).add(lp),f}intersectSphere(e,t){rs.subVectors(e.center,this.origin);const i=rs.dot(this.direction),s=rs.dot(rs)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||i!==i)&&(i=r),(o<s||s!==s)&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,i,s,r){cp.subVectors(t,e),Bu.subVectors(i,e),up.crossVectors(cp,Bu);let o=this.direction.dot(up),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Us.subVectors(this.origin,e);const l=a*this.direction.dot(Bu.crossVectors(Us,Bu));if(l<0)return null;const c=a*this.direction.dot(cp.cross(Us));if(c<0||l+c>o)return null;const u=-a*Us.dot(up);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,g,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=s,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=d,v[14]=h,v[3]=f,v[7]=p,v[11]=g,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Wo.setFromMatrixColumn(e,0).length(),r=1/Wo.setFromMatrixColumn(e,1).length(),o=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,p=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,g=c*d;t[0]=h+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,g=c*d;t[0]=h-g*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,p=a*u,g=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oz,e,kz)}lookAt(e,t,i){const s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),zs.crossVectors(i,Gn),zs.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),zs.crossVectors(i,Gn)),zs.normalize(),Vu.crossVectors(Gn,zs),s[0]=zs.x,s[4]=Vu.x,s[8]=Gn.x,s[1]=zs.y,s[5]=Vu.y,s[9]=Gn.y,s[2]=zs.z,s[6]=Vu.z,s[10]=Gn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],g=i[6],m=i[10],v=i[14],_=i[3],M=i[7],E=i[11],x=i[15],P=s[0],C=s[4],D=s[8],W=s[12],L=s[1],y=s[5],T=s[9],X=s[13],k=s[2],z=s[6],H=s[10],$=s[14],O=s[3],ne=s[7],ae=s[11],fe=s[15];return r[0]=o*P+a*L+l*k+c*O,r[4]=o*C+a*y+l*z+c*ne,r[8]=o*D+a*T+l*H+c*ae,r[12]=o*W+a*X+l*$+c*fe,r[1]=u*P+d*L+h*k+f*O,r[5]=u*C+d*y+h*z+f*ne,r[9]=u*D+d*T+h*H+f*ae,r[13]=u*W+d*X+h*$+f*fe,r[2]=p*P+g*L+m*k+v*O,r[6]=p*C+g*y+m*z+v*ne,r[10]=p*D+g*T+m*H+v*ae,r[14]=p*W+g*X+m*$+v*fe,r[3]=_*P+M*L+E*k+x*O,r[7]=_*C+M*y+E*z+x*ne,r[11]=_*D+M*T+E*H+x*ae,r[15]=_*W+M*X+E*$+x*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],g=e[7],m=e[11],v=e[15];return p*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*f-i*l*f)+g*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*u-r*l*u)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*u-i*c*u)+v*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],g=e[13],m=e[14],v=e[15],_=d*m*c-g*h*c+g*l*f-a*m*f-d*l*v+a*h*v,M=p*h*c-u*m*c-p*l*f+o*m*f+u*l*v-o*h*v,E=u*g*c-p*d*c+p*a*f-o*g*f-u*a*v+o*d*v,x=p*d*l-u*g*l-p*a*h+o*g*h+u*a*m-o*d*m,P=t*_+i*M+s*E+r*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=_*C,e[1]=(g*h*r-d*m*r-g*s*f+i*m*f+d*s*v-i*h*v)*C,e[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*v+i*l*v)*C,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*f-i*l*f)*C,e[4]=M*C,e[5]=(u*m*r-p*h*r+p*s*f-t*m*f-u*s*v+t*h*v)*C,e[6]=(p*l*r-o*m*r-p*s*c+t*m*c+o*s*v-t*l*v)*C,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*f+t*l*f)*C,e[8]=E*C,e[9]=(p*d*r-u*g*r-p*i*f+t*g*f+u*i*v-t*d*v)*C,e[10]=(o*g*r-p*a*r+p*i*c-t*g*c-o*i*v+t*a*v)*C,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*f-t*a*f)*C,e[12]=x*C,e[13]=(u*g*s-p*d*s+p*i*h-t*g*h-u*i*m+t*d*m)*C,e[14]=(p*a*s-o*g*s-p*i*l+t*g*l+o*i*m-t*a*m)*C,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,g=o*u,m=o*d,v=a*d,_=l*c,M=l*u,E=l*d,x=i.x,P=i.y,C=i.z;return s[0]=(1-(g+v))*x,s[1]=(f+E)*x,s[2]=(p-M)*x,s[3]=0,s[4]=(f-E)*P,s[5]=(1-(h+v))*P,s[6]=(m+_)*P,s[7]=0,s[8]=(p+M)*C,s[9]=(m-_)*C,s[10]=(1-(h+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Wo.set(s[0],s[1],s[2]).length();const o=Wo.set(s[4],s[5],s[6]).length(),a=Wo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fi.copy(this);const c=1/r,u=1/o,d=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,t.setFromRotationMatrix(fi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),h=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o){const a=this.elements,l=1/(t-e),c=1/(i-s),u=1/(o-r),d=(t+e)*l,h=(i+s)*c,f=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}Fe.prototype.isMatrix4=!0;const Wo=new N,fi=new Fe,Oz=new N(0,0,0),kz=new N(1,1,1),zs=new N,Vu=new N,Gn=new N,rb=new Fe,ob=new Un;class Co{constructor(e=0,t=0,i=0,s=Co.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rb,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ob.setFromEuler(this),this.setFromQuaternion(ob,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Co.prototype.isEuler=!0;Co.DefaultOrder="XYZ";Co.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class TC{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fz=0;const ab=new N,Go=new Un,os=new Fe,Uu=new N,Cl=new N,Bz=new N,Vz=new Un,lb=new N(1,0,0),cb=new N(0,1,0),ub=new N(0,0,1),Uz={type:"added"},db={type:"removed"};class vt extends Mo{constructor(){super();Object.defineProperty(this,"id",{value:Fz++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DefaultUp.clone();const e=new N,t=new Co,i=new Un,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new an}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=vt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new TC,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.multiply(Go),this}rotateOnWorldAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.premultiply(Go),this}rotateX(e){return this.rotateOnAxis(lb,e)}rotateY(e){return this.rotateOnAxis(cb,e)}rotateZ(e){return this.rotateOnAxis(ub,e)}translateOnAxis(e,t){return ab.copy(e).applyQuaternion(this.quaternion),this.position.add(ab.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lb,e)}translateY(e){return this.translateOnAxis(cb,e)}translateZ(e){return this.translateOnAxis(ub,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uu.copy(e):Uu.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Cl,Uu,this.up):os.lookAt(Uu,Cl,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Go.setFromRotationMatrix(os),this.quaternion.premultiply(Go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uz)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(db)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(db)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,e,Bz),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,Vz,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}vt.DefaultUp=new N(0,1,0);vt.DefaultMatrixAutoUpdate=!0;vt.prototype.isObject3D=!0;const pi=new N,as=new N,dp=new N,ls=new N,$o=new N,jo=new N,hb=new N,hp=new N,fp=new N,pp=new N;class jt{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pi.subVectors(s,t),as.subVectors(i,t),dp.subVectors(e,t);const o=pi.dot(pi),a=pi.dot(as),l=pi.dot(dp),c=as.dot(as),u=as.dot(dp),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ls),ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getUV(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ls),l.set(0,0),l.addScaledVector(r,ls.x),l.addScaledVector(o,ls.y),l.addScaledVector(a,ls.z),l}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),as.subVectors(e,t),pi.cross(as).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),pi.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return jt.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;$o.subVectors(s,i),jo.subVectors(r,i),hp.subVectors(e,i);const l=$o.dot(hp),c=jo.dot(hp);if(l<=0&&c<=0)return t.copy(i);fp.subVectors(e,s);const u=$o.dot(fp),d=jo.dot(fp);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector($o,o);pp.subVectors(e,r);const f=$o.dot(pp),p=jo.dot(pp);if(p>=0&&f<=p)return t.copy(r);const g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(jo,a);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return hb.subVectors(r,s),a=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(hb,a);const v=1/(m+g+h);return o=g*v,a=h*v,t.copy(i).addScaledVector($o,o).addScaledVector(jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zz=0;class Kt extends Mo{constructor(){super();Object.defineProperty(this,"id",{value:zz++}),this.uuid=Ci(),this.name="",this.type="Material",this.fog=!0,this.blending=Ma,this.side=Oc,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yC,this.blendDst=xC,this.blendEquation=aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qm,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hz,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ep,this.stencilZFail=ep,this.stencilZPass=ep,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===_C;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ma&&(i.blending=this.blending),this.side!==Oc&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Kt.prototype.isMaterial=!0;Kt.fromType=function(){return null};class of extends Kt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}of.prototype.isMeshBasicMaterial=!0;const $t=new N,zu=new _e;class Xt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Fc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),o=new Oe),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),o=new _e),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),o=new N),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),o=new gt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zu.fromBufferAttribute(this,t),zu.applyMatrix3(e),this.setXY(t,zu.x,zu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Xt.prototype.isBufferAttribute=!0;class CC extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class AC extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hz extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}Hz.prototype.isFloat16BufferAttribute=!0;class cn extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wz=0;const Qn=new Fe,mp=new vt,qo=new N,$n=new Di,Al=new Di,Jt=new N;class Ot extends Mo{constructor(){super();Object.defineProperty(this,"id",{value:Wz++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SC(e)?AC:CC)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new an().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return mp.lookAt(e),mp.updateMatrix(),this.applyMatrix4(mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qo).negate(),this.translate(qo.x,qo.y,qo.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Al.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors($n.min,Al.min),$n.expandByPoint(Jt),Jt.addVectors($n.max,Al.max),$n.expandByPoint(Jt)):($n.expandByPoint(Al.min),$n.expandByPoint(Al.max))}$n.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(qo.fromBufferAttribute(e,c),Jt.add(qo)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<a;L++)c[L]=new N,u[L]=new N;const d=new N,h=new N,f=new N,p=new _e,g=new _e,m=new _e,v=new N,_=new N;function M(L,y,T){d.fromArray(s,L*3),h.fromArray(s,y*3),f.fromArray(s,T*3),p.fromArray(o,L*2),g.fromArray(o,y*2),m.fromArray(o,T*2),h.sub(d),f.sub(d),g.sub(p),m.sub(p);const X=1/(g.x*m.y-m.x*g.y);!isFinite(X)||(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(X),_.copy(f).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(X),c[L].add(v),c[y].add(v),c[T].add(v),u[L].add(_),u[y].add(_),u[T].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let L=0,y=E.length;L<y;++L){const T=E[L],X=T.start,k=T.count;for(let z=X,H=X+k;z<H;z+=3)M(i[z+0],i[z+1],i[z+2])}const x=new N,P=new N,C=new N,D=new N;function W(L){C.fromArray(r,L*3),D.copy(C);const y=c[L];x.copy(y),x.sub(C.multiplyScalar(C.dot(y))).normalize(),P.crossVectors(D,y);const X=P.dot(u[L])<0?-1:1;l[L*4]=x.x,l[L*4+1]=x.y,l[L*4+2]=x.z,l[L*4+3]=X}for(let L=0,y=E.length;L<y;++L){const T=E[L],X=T.start,k=T.count;for(let z=X,H=X+k;z<H;z+=3)W(i[z+0]),W(i[z+1]),W(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const s in i){if(e.attributes[s]===void 0)continue;const o=i[s].array,a=e.attributes[s],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let d=0,h=c;d<u;d++,h++)o[h]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let v=0;v<u;v++)h[p++]=c[f++]}return new Xt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ot.prototype.isBufferGeometry=!0;const fb=new Fe,Xo=new cl,gp=new ll,Hs=new N,Ws=new N,Gs=new N,vp=new N,_p=new N,yp=new N,Hu=new N,Wu=new N,Gu=new N,$u=new _e,ju=new _e,qu=new _e,xp=new N,Xu=new N;class Vn extends vt{constructor(e=new Ot,t=new of){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),gp.copy(i.boundingSphere),gp.applyMatrix4(r),e.ray.intersectsSphere(gp)===!1)||(fb.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(fb),i.boundingBox!==null&&Xo.intersectsBox(i.boundingBox)===!1))return;let o;if(i.isBufferGeometry){const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,d=i.attributes.uv,h=i.attributes.uv2,f=i.groups,p=i.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,m=f.length;g<m;g++){const v=f[g],_=s[v.materialIndex],M=Math.max(v.start,p.start),E=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let x=M,P=E;x<P;x+=3){const C=a.getX(x),D=a.getX(x+1),W=a.getX(x+2);o=Yu(this,_,e,Xo,l,c,u,d,h,C,D,W),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let v=g,_=m;v<_;v+=3){const M=a.getX(v),E=a.getX(v+1),x=a.getX(v+2);o=Yu(this,s,e,Xo,l,c,u,d,h,M,E,x),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,m=f.length;g<m;g++){const v=f[g],_=s[v.materialIndex],M=Math.max(v.start,p.start),E=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let x=M,P=E;x<P;x+=3){const C=x,D=x+1,W=x+2;o=Yu(this,_,e,Xo,l,c,u,d,h,C,D,W),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let v=g,_=m;v<_;v+=3){const M=v,E=v+1,x=v+2;o=Yu(this,s,e,Xo,l,c,u,d,h,M,E,x),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Vn.prototype.isMesh=!0;function Gz(n,e,t,i,s,r,o,a){let l;if(e.side===Ti?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side!==Va,a),l===null)return null;Xu.copy(a),Xu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xu);return c<t.near||c>t.far?null:{distance:c,point:Xu.clone(),object:n}}function Yu(n,e,t,i,s,r,o,a,l,c,u,d){Hs.fromBufferAttribute(s,c),Ws.fromBufferAttribute(s,u),Gs.fromBufferAttribute(s,d);const h=n.morphTargetInfluences;if(r&&h){Hu.set(0,0,0),Wu.set(0,0,0),Gu.set(0,0,0);for(let p=0,g=r.length;p<g;p++){const m=h[p],v=r[p];m!==0&&(vp.fromBufferAttribute(v,c),_p.fromBufferAttribute(v,u),yp.fromBufferAttribute(v,d),o?(Hu.addScaledVector(vp,m),Wu.addScaledVector(_p,m),Gu.addScaledVector(yp,m)):(Hu.addScaledVector(vp.sub(Hs),m),Wu.addScaledVector(_p.sub(Ws),m),Gu.addScaledVector(yp.sub(Gs),m)))}Hs.add(Hu),Ws.add(Wu),Gs.add(Gu)}n.isSkinnedMesh&&(n.boneTransform(c,Hs),n.boneTransform(u,Ws),n.boneTransform(d,Gs));const f=Gz(n,e,t,i,Hs,Ws,Gs,xp);if(f){a&&($u.fromBufferAttribute(a,c),ju.fromBufferAttribute(a,u),qu.fromBufferAttribute(a,d),f.uv=jt.getUV(xp,Hs,Ws,Gs,$u,ju,qu,new _e)),l&&($u.fromBufferAttribute(l,c),ju.fromBufferAttribute(l,u),qu.fromBufferAttribute(l,d),f.uv2=jt.getUV(xp,Hs,Ws,Gs,$u,ju,qu,new _e));const p={a:c,b:u,c:d,normal:new N,materialIndex:0};jt.getNormal(Hs,Ws,Gs,p.normal),f.face=p}return f}class cu extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(d,2));function p(g,m,v,_,M,E,x,P,C,D,W){const L=E/C,y=x/D,T=E/2,X=x/2,k=P/2,z=C+1,H=D+1;let $=0,O=0;const ne=new N;for(let ae=0;ae<H;ae++){const fe=ae*y-X;for(let oe=0;oe<z;oe++){const Ae=oe*L-T;ne[g]=Ae*_,ne[m]=fe*M,ne[v]=k,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[v]=P>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(oe/C),d.push(1-ae/D),$+=1}}for(let ae=0;ae<D;ae++)for(let fe=0;fe<C;fe++){const oe=h+fe+z*ae,Ae=h+fe+z*(ae+1),ze=h+(fe+1)+z*(ae+1),Y=h+(fe+1)+z*ae;l.push(oe,Ae,Y),l.push(Ae,ze,Y),O+=6}a.addGroup(f,O,W),f+=O,h+=$}}static fromJSON(e){return new cu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function bn(n){const e={};for(let t=0;t<n.length;t++){const i=Wa(n[t]);for(const s in i)e[s]=i[s]}return e}const $z={clone:Wa,merge:bn};var jz=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qz=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Kt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=jz,this.fragmentShader=qz,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wa(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}Pi.prototype.isShaderMaterial=!0;class a_ extends vt{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}a_.prototype.isCamera=!0;class On extends a_{constructor(e=50,t=1,i=.1,s=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bc*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}On.prototype.isPerspectiveCamera=!0;const Yo=90,Ko=1;class l_ extends vt{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const s=new On(Yo,Ko,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(1,0,0)),this.add(s);const r=new On(Yo,Ko,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new N(-1,0,0)),this.add(r);const o=new On(Yo,Ko,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new N(0,1,0)),this.add(o);const a=new On(Yo,Ko,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new N(0,-1,0)),this.add(a);const l=new On(Yo,Ko,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const c=new On(Yo,Ko,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new N(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.outputEncoding,h=e.toneMapping,f=e.xr.enabled;e.outputEncoding=Ts,e.toneMapping=bs,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.outputEncoding=d,e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class af extends hn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ua;super(e,t,i,s,r,o,a,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}af.prototype.isCubeTexture=!0;class IC extends Yn{constructor(e,t={}){super(e,e,t);const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new af(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cu(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:Wa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ti,blending:cr});r.uniforms.tEquirect.value=t;const o=new Vn(s,r),a=t.minFilter;return t.minFilter===sf&&(t.minFilter=Dn),new l_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}IC.prototype.isWebGLCubeRenderTarget=!0;const bp=new N,Xz=new N,Yz=new an;class hs{constructor(e=new N(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=bp.subVectors(i,t).cross(Xz.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(bp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yz.getNormalMatrix(e),s=this.coplanarPoint(bp).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}hs.prototype.isPlane=!0;const Jo=new ll,Ku=new N;class lf{constructor(e=new hs,t=new hs,i=new hs,s=new hs,r=new hs,o=new hs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],f=i[9],p=i[10],g=i[11],m=i[12],v=i[13],_=i[14],M=i[15];return t[0].setComponents(a-s,d-l,g-h,M-m).normalize(),t[1].setComponents(a+s,d+l,g+h,M+m).normalize(),t[2].setComponents(a+r,d+c,g+f,M+v).normalize(),t[3].setComponents(a-r,d-c,g-f,M-v).normalize(),t[4].setComponents(a-o,d-u,g-p,M-_).normalize(),t[5].setComponents(a+o,d+u,g+p,M+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Jo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Jo)}intersectsSprite(e){return Jo.center.set(0,0,0),Jo.radius=.7071067811865476,Jo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jo)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ku.x=s.normal.x>0?e.max.x:e.min.x,Ku.y=s.normal.y>0?e.max.y:e.min.y,Ku.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ku)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function RC(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Kz(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const d=c.array,h=c.usage,f=n.createBuffer();n.bindBuffer(u,f),n.bufferData(u,d,h),c.onUploadCallback();let p;if(d instanceof Float32Array)p=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(d instanceof Int16Array)p=5122;else if(d instanceof Uint32Array)p=5125;else if(d instanceof Int32Array)p=5124;else if(d instanceof Int8Array)p=5120;else if(d instanceof Uint8Array)p=5121;else if(d instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const h=u.array,f=u.updateRange;n.bindBuffer(d,c),f.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):n.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,s(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class c_ extends Ot{constructor(e=1,t=1,i=1,s=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],g=[],m=[];for(let v=0;v<u;v++){const _=v*h-o;for(let M=0;M<c;M++){const E=M*d-r;p.push(E,-_,0),g.push(0,0,1),m.push(M/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let _=0;_<a;_++){const M=_+c*v,E=_+c*(v+1),x=_+1+c*(v+1),P=_+1+c*v;f.push(M,E,P),f.push(E,x,P)}this.setIndex(f),this.setAttribute("position",new cn(p,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(m,2))}static fromJSON(e){return new c_(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jz=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zz=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qz=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tH=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iH="vec3 transformed = vec3( position );",sH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rH=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,oH=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aH=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,lH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dH=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pH=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mH=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gH=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vH=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_H=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,xH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wH="gl_FragColor = linearToOutputTexel( gl_FragColor );",SH=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NH=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,DH=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kH=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,FH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BH=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,VH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,zH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HH=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,WH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,GH=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$H=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jH=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qH=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,XH=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YH=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KH=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JH=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eW=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tW=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nW=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iW=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sW=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rW=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,oW=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,aW=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lW=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,cW=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uW=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dW=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hW=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fW=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,pW=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mW=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gW=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vW=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_W=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yW=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xW=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bW=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wW=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SW=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EW=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MW=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,TW=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CW=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,AW=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IW=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RW=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,PW=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LW=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NW=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DW=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OW=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kW=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FW=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,BW=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,VW=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,UW=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zW=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,HW=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,WW=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,GW=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,$W=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jW=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qW=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,XW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YW=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KW=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JW=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ZW=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QW=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nG=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iG=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sG=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rG=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oG=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aG=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lG=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cG=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uG=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dG=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hG=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fG=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pG=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mG=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gG=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vG=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_G=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xG=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bG=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wG=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nt={alphamap_fragment:Jz,alphamap_pars_fragment:Zz,alphatest_fragment:Qz,alphatest_pars_fragment:eH,aomap_fragment:tH,aomap_pars_fragment:nH,begin_vertex:iH,beginnormal_vertex:sH,bsdfs:rH,bumpmap_pars_fragment:oH,clipping_planes_fragment:aH,clipping_planes_pars_fragment:lH,clipping_planes_pars_vertex:cH,clipping_planes_vertex:uH,color_fragment:dH,color_pars_fragment:hH,color_pars_vertex:fH,color_vertex:pH,common:mH,cube_uv_reflection_fragment:gH,defaultnormal_vertex:vH,displacementmap_pars_vertex:_H,displacementmap_vertex:yH,emissivemap_fragment:xH,emissivemap_pars_fragment:bH,encodings_fragment:wH,encodings_pars_fragment:SH,envmap_fragment:EH,envmap_common_pars_fragment:MH,envmap_pars_fragment:TH,envmap_pars_vertex:CH,envmap_physical_pars_fragment:BH,envmap_vertex:AH,fog_vertex:IH,fog_pars_vertex:RH,fog_fragment:PH,fog_pars_fragment:LH,gradientmap_pars_fragment:NH,lightmap_fragment:DH,lightmap_pars_fragment:OH,lights_lambert_vertex:kH,lights_pars_begin:FH,lights_toon_fragment:VH,lights_toon_pars_fragment:UH,lights_phong_fragment:zH,lights_phong_pars_fragment:HH,lights_physical_fragment:WH,lights_physical_pars_fragment:GH,lights_fragment_begin:$H,lights_fragment_maps:jH,lights_fragment_end:qH,logdepthbuf_fragment:XH,logdepthbuf_pars_fragment:YH,logdepthbuf_pars_vertex:KH,logdepthbuf_vertex:JH,map_fragment:ZH,map_pars_fragment:QH,map_particle_fragment:eW,map_particle_pars_fragment:tW,metalnessmap_fragment:nW,metalnessmap_pars_fragment:iW,morphcolor_vertex:sW,morphnormal_vertex:rW,morphtarget_pars_vertex:oW,morphtarget_vertex:aW,normal_fragment_begin:lW,normal_fragment_maps:cW,normal_pars_fragment:uW,normal_pars_vertex:dW,normal_vertex:hW,normalmap_pars_fragment:fW,clearcoat_normal_fragment_begin:pW,clearcoat_normal_fragment_maps:mW,clearcoat_pars_fragment:gW,output_fragment:vW,packing:_W,premultiplied_alpha_fragment:yW,project_vertex:xW,dithering_fragment:bW,dithering_pars_fragment:wW,roughnessmap_fragment:SW,roughnessmap_pars_fragment:EW,shadowmap_pars_fragment:MW,shadowmap_pars_vertex:TW,shadowmap_vertex:CW,shadowmask_pars_fragment:AW,skinbase_vertex:IW,skinning_pars_vertex:RW,skinning_vertex:PW,skinnormal_vertex:LW,specularmap_fragment:NW,specularmap_pars_fragment:DW,tonemapping_fragment:OW,tonemapping_pars_fragment:kW,transmission_fragment:FW,transmission_pars_fragment:BW,uv_pars_fragment:VW,uv_pars_vertex:UW,uv_vertex:zW,uv2_pars_fragment:HW,uv2_pars_vertex:WW,uv2_vertex:GW,worldpos_vertex:$W,background_vert:jW,background_frag:qW,cube_vert:XW,cube_frag:YW,depth_vert:KW,depth_frag:JW,distanceRGBA_vert:ZW,distanceRGBA_frag:QW,equirect_vert:eG,equirect_frag:tG,linedashed_vert:nG,linedashed_frag:iG,meshbasic_vert:sG,meshbasic_frag:rG,meshlambert_vert:oG,meshlambert_frag:aG,meshmatcap_vert:lG,meshmatcap_frag:cG,meshnormal_vert:uG,meshnormal_frag:dG,meshphong_vert:hG,meshphong_frag:fG,meshphysical_vert:pG,meshphysical_frag:mG,meshtoon_vert:gG,meshtoon_frag:vG,points_vert:_G,points_frag:yG,shadow_vert:xG,shadow_frag:bG,sprite_vert:wG,sprite_frag:SG},Te={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new an},uv2Transform:{value:new an},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new an}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new an}}},Gi={basic:{uniforms:bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.fog,Te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:bn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:bn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:bn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:bn([Te.points,Te.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:bn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:bn([Te.common,Te.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:bn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:bn([Te.sprite,Te.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new an},t2D:{value:null}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},cube:{uniforms:bn([Te.envmap,{opacity:{value:1}}]),vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:bn([Te.common,Te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:bn([Te.lights,Te.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Gi.physical={uniforms:bn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _e(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};function EG(n,e,t,i,s,r){const o=new Oe(0);let a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(g,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=e.get(_));const M=n.xr,E=M.getSession&&M.getSession();E&&E.environmentBlendMode==="additive"&&(_=null),_===null?p(o,a):_&&_.isColor&&(p(_,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===nf)?(c===void 0&&(c=new Vn(new cu(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Wa(Gi.cube.uniforms),vertexShader:Gi.cube.vertexShader,fragmentShader:Gi.cube.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,(u!==_||d!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Vn(new c_(2,2),new Pi({name:"BackgroundMaterial",uniforms:Wa(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Oc,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,m){t.buffers.color.setClear(g.r,g.g,g.b,m,r)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),a=m,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(o,a)},render:f}}function MG(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function d(k,z,H,$,O){let ne=!1;if(o){const ae=g($,H,z);c!==ae&&(c=ae,f(c.object)),ne=v($,O),ne&&_($,O)}else{const ae=z.wireframe===!0;(c.geometry!==$.id||c.program!==H.id||c.wireframe!==ae)&&(c.geometry=$.id,c.program=H.id,c.wireframe=ae,ne=!0)}k.isInstancedMesh===!0&&(ne=!0),O!==null&&t.update(O,34963),(ne||u)&&(u=!1,D(k,z,H,$),O!==null&&n.bindBuffer(34963,t.get(O).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function p(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function g(k,z,H){const $=H.wireframe===!0;let O=a[k.id];O===void 0&&(O={},a[k.id]=O);let ne=O[z.id];ne===void 0&&(ne={},O[z.id]=ne);let ae=ne[$];return ae===void 0&&(ae=m(h()),ne[$]=ae),ae}function m(k){const z=[],H=[],$=[];for(let O=0;O<s;O++)z[O]=0,H[O]=0,$[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:$,object:k,attributes:{},index:null}}function v(k,z){const H=c.attributes,$=k.attributes;let O=0;for(const ne in $){const ae=H[ne],fe=$[ne];if(ae===void 0||ae.attribute!==fe||ae.data!==fe.data)return!0;O++}return c.attributesNum!==O||c.index!==z}function _(k,z){const H={},$=k.attributes;let O=0;for(const ne in $){const ae=$[ne],fe={};fe.attribute=ae,ae.data&&(fe.data=ae.data),H[ne]=fe,O++}c.attributes=H,c.attributesNum=O,c.index=z}function M(){const k=c.newAttributes;for(let z=0,H=k.length;z<H;z++)k[z]=0}function E(k){x(k,0)}function x(k,z){const H=c.newAttributes,$=c.enabledAttributes,O=c.attributeDivisors;H[k]=1,$[k]===0&&(n.enableVertexAttribArray(k),$[k]=1),O[k]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,z),O[k]=z)}function P(){const k=c.newAttributes,z=c.enabledAttributes;for(let H=0,$=z.length;H<$;H++)z[H]!==k[H]&&(n.disableVertexAttribArray(H),z[H]=0)}function C(k,z,H,$,O,ne){i.isWebGL2===!0&&(H===5124||H===5125)?n.vertexAttribIPointer(k,z,H,O,ne):n.vertexAttribPointer(k,z,H,$,O,ne)}function D(k,z,H,$){if(i.isWebGL2===!1&&(k.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const O=$.attributes,ne=H.getAttributes(),ae=z.defaultAttributeValues;for(const fe in ne){const oe=ne[fe];if(oe.location>=0){let Ae=O[fe];if(Ae===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(Ae=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(Ae=k.instanceColor)),Ae!==void 0){const ze=Ae.normalized,Y=Ae.itemSize,j=t.get(Ae);if(j===void 0)continue;const ce=j.buffer,ve=j.type,Ie=j.bytesPerElement;if(Ae.isInterleavedBufferAttribute){const pe=Ae.data,Me=pe.stride,K=Ae.offset;if(pe.isInstancedInterleavedBuffer){for(let b=0;b<oe.locationSize;b++)x(oe.location+b,pe.meshPerAttribute);k.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let b=0;b<oe.locationSize;b++)E(oe.location+b);n.bindBuffer(34962,ce);for(let b=0;b<oe.locationSize;b++)C(oe.location+b,Y/oe.locationSize,ve,ze,Me*Ie,(K+Y/oe.locationSize*b)*Ie)}else{if(Ae.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)x(oe.location+pe,Ae.meshPerAttribute);k.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let pe=0;pe<oe.locationSize;pe++)E(oe.location+pe);n.bindBuffer(34962,ce);for(let pe=0;pe<oe.locationSize;pe++)C(oe.location+pe,Y/oe.locationSize,ve,ze,Y*Ie,Y/oe.locationSize*pe*Ie)}}else if(ae!==void 0){const ze=ae[fe];if(ze!==void 0)switch(ze.length){case 2:n.vertexAttrib2fv(oe.location,ze);break;case 3:n.vertexAttrib3fv(oe.location,ze);break;case 4:n.vertexAttrib4fv(oe.location,ze);break;default:n.vertexAttrib1fv(oe.location,ze)}}}}P()}function W(){T();for(const k in a){const z=a[k];for(const H in z){const $=z[H];for(const O in $)p($[O].object),delete $[O];delete z[H]}delete a[k]}}function L(k){if(a[k.id]===void 0)return;const z=a[k.id];for(const H in z){const $=z[H];for(const O in $)p($[O].object),delete $[O];delete z[H]}delete a[k.id]}function y(k){for(const z in a){const H=a[z];if(H[k.id]===void 0)continue;const $=H[k.id];for(const O in $)p($[O].object),delete $[O];delete H[k.id]}}function T(){X(),u=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:T,resetDefaultState:X,dispose:W,releaseStatesOfGeometry:L,releaseStatesOfProgram:y,initAttributes:M,enableAttribute:E,disableUnusedAttributes:P}}function TG(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let h,f;if(s)h=n,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](r,c,u,d),t.update(u,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function CG(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),h=n.getParameter(35660),f=n.getParameter(3379),p=n.getParameter(34076),g=n.getParameter(34921),m=n.getParameter(36347),v=n.getParameter(36348),_=n.getParameter(36349),M=h>0,E=o||e.has("OES_texture_float"),x=M&&E,P=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:x,maxSamples:P}}function AG(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new hs,a=new an,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,f){const p=d.length!==0||h||i!==0||s;return s=h,t=u(d,f,0),i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(d,h,f){const p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,v=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{const _=r?0:i,M=_*4;let E=v.clippingState||null;l.value=E,E=u(p,h,M,f);for(let x=0;x!==M;++x)E[x]=t[x];v.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,p){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const v=f+g*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<v)&&(m=new Float32Array(v));for(let M=0,E=f;M!==g;++M,E+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function IG(n){let e=new WeakMap;function t(o,a){return a===Xm?o.mapping=Ua:a===Ym&&(o.mapping=za),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Xm||a===Ym)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new IC(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class u_ extends a_{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}u_.prototype.isOrthographicCamera=!0;const fa=4,pb=[.125,.215,.35,.446,.526,.582],Hr=20,wp=new u_,mb=new Oe;let Sp=null;const Vr=(1+Math.sqrt(5))/2,Zo=1/Vr,gb=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Vr,Zo),new N(0,Vr,-Zo),new N(Zo,0,Vr),new N(-Zo,0,Vr),new N(Vr,Zo,0),new N(-Vr,Zo,0)];class vb{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Sp=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sp),e.scissorTest=!1,Ju(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ua||e.mapping===za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sp=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ta,format:bi,encoding:Ts,depthBuffer:!1},s=_b(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_b(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RG(r)),this._blurMaterial=PG(r,e,t)}return s}_compileMaterial(e){const t=new Vn(this._lodPlanes[0],e);this._renderer.compile(t,wp)}_sceneToCubeUV(e,t,i,s){const a=new On(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(mb),u.toneMapping=bs,u.autoClear=!1;const f=new of({name:"PMREM.Background",side:Ti,depthWrite:!1,depthTest:!1}),p=new Vn(new cu,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(mb),g=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):_===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const M=this._cubeSize;Ju(s,_*M,v>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ua||e.mapping===za;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yb());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ju(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gb[(s-1)%gb.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Vn(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hr-1),g=r/p,m=isFinite(r)?1+Math.floor(u*g):Hr;m>Hr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hr}`);const v=[];let _=0;for(let C=0;C<Hr;++C){const D=C/g,W=Math.exp(-D*D/2);v.push(W),C===0?_+=W:C<m&&(_+=2*W)}for(let C=0;C<v.length;C++)v[C]=v[C]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-i;const E=this._sizeLods[s],x=3*E*(s>M-fa?s-M+fa:0),P=4*(this._cubeSize-E);Ju(t,x,P,3*E,2*E),l.setRenderTarget(t),l.render(d,wp)}}function RG(n){const e=[],t=[],i=[];let s=n;const r=n-fa+1+pb.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-fa?l=pb[o-n+fa-1]:o===0&&(l=0),i.push(l);const c=1/(a-1),u=-c/2,d=1+c/2,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,g=3,m=2,v=1,_=new Float32Array(g*p*f),M=new Float32Array(m*p*f),E=new Float32Array(v*p*f);for(let P=0;P<f;P++){const C=P%3*2/3-1,D=P>2?0:-1,W=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];_.set(W,g*p*P),M.set(h,m*p*P);const L=[P,P,P,P,P,P];E.set(L,v*p*P)}const x=new Ot;x.setAttribute("position",new Xt(_,g)),x.setAttribute("uv",new Xt(M,m)),x.setAttribute("faceIndex",new Xt(E,v)),e.push(x),s>fa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _b(n,e,t){const i=new Yn(n,e,t);return i.texture.mapping=nf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ju(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function PG(n,e,t){const i=new Float32Array(Hr),s=new N(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:d_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function yb(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:d_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function xb(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:d_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function d_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LG(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xm||l===Ym,u=l===Ua||l===za;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new vb(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new vb(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function NG(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function DG(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],34962);const f=d.morphAttributes;for(const p in f){const g=f[p];for(let m=0,v=g.length;m<v;m++)e.update(g[m],34962)}}function c(d){const h=[],f=d.index,p=d.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let M=0,E=_.length;M<E;M+=3){const x=_[M+0],P=_[M+1],C=_[M+2];h.push(x,P,P,C,C,x)}}else{const _=p.array;g=p.version;for(let M=0,E=_.length/3-1;M<E;M+=3){const x=M+0,P=M+1,C=M+2;h.push(x,P,P,C,C,x)}}const m=new(SC(h)?AC:CC)(h,1);m.version=g;const v=r.get(d);v&&e.remove(v),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function OG(n,e,t,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,f){n.drawElements(r,f,a,h*l),t.update(f,r,1)}function d(h,f,p){if(p===0)return;let g,m;if(s)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,f,a,h*l,p),t.update(f,r,p)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function kG(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function FG(n,e){return n[0]-e[0]}function BG(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ep(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function VG(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let z=function(){X.dispose(),r.delete(u),u.removeEventListener("dispose",z)};m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let W=0;M===!0&&(W=1),E===!0&&(W=2),x===!0&&(W=3);let L=u.attributes.position.count*W,y=1;L>e.maxTextureSize&&(y=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*y*4*g),X=new rf(T,L,y,g);X.type=jr,X.needsUpdate=!0;const k=W*4;for(let H=0;H<g;H++){const $=P[H],O=C[H],ne=D[H],ae=L*y*4*H;for(let fe=0;fe<$.count;fe++){const oe=fe*k;M===!0&&(o.fromBufferAttribute($,fe),$.normalized===!0&&Ep(o,$),T[ae+oe+0]=o.x,T[ae+oe+1]=o.y,T[ae+oe+2]=o.z,T[ae+oe+3]=0),E===!0&&(o.fromBufferAttribute(O,fe),O.normalized===!0&&Ep(o,O),T[ae+oe+4]=o.x,T[ae+oe+5]=o.y,T[ae+oe+6]=o.z,T[ae+oe+7]=0),x===!0&&(o.fromBufferAttribute(ne,fe),ne.normalized===!0&&Ep(o,ne),T[ae+oe+8]=o.x,T[ae+oe+9]=o.y,T[ae+oe+10]=o.z,T[ae+oe+11]=ne.itemSize===4?o.w:1)}}m={count:g,texture:X,size:new _e(L,y)},r.set(u,m),u.addEventListener("dispose",z)}let v=0;for(let M=0;M<f.length;M++)v+=f[M];const _=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const p=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let E=0;E<p;E++)g[E]=[E,0];i[u.id]=g}for(let E=0;E<p;E++){const x=g[E];x[0]=E,x[1]=f[E]}g.sort(BG);for(let E=0;E<8;E++)E<p&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(FG);const m=u.morphAttributes.position,v=u.morphAttributes.normal;let _=0;for(let E=0;E<8;E++){const x=a[E],P=x[0],C=x[1];P!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+E)!==m[P]&&u.setAttribute("morphTarget"+E,m[P]),v&&u.getAttribute("morphNormal"+E)!==v[P]&&u.setAttribute("morphNormal"+E,v[P]),s[E]=C,_+=C):(m&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),v&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const M=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function UG(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const PC=new hn,LC=new rf,NC=new o_,DC=new af,bb=[],wb=[],Sb=new Float32Array(16),Eb=new Float32Array(9),Mb=new Float32Array(4);function ul(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=bb[s];if(r===void 0&&(r=new Float32Array(s),bb[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cf(n,e){let t=wb[e];t===void 0&&(t=new Int32Array(e),wb[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zG(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;n.uniform2fv(this.addr,e),Mn(t,e)}}function WG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;n.uniform3fv(this.addr,e),Mn(t,e)}}function GG(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;n.uniform4fv(this.addr,e),Mn(t,e)}}function $G(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(Rn(t,i))return;Mb.set(i),n.uniformMatrix2fv(this.addr,!1,Mb),Mn(t,i)}}function jG(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(Rn(t,i))return;Eb.set(i),n.uniformMatrix3fv(this.addr,!1,Eb),Mn(t,i)}}function qG(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(Rn(t,i))return;Sb.set(i),n.uniformMatrix4fv(this.addr,!1,Sb),Mn(t,i)}}function XG(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function YG(n,e){const t=this.cache;Rn(t,e)||(n.uniform2iv(this.addr,e),Mn(t,e))}function KG(n,e){const t=this.cache;Rn(t,e)||(n.uniform3iv(this.addr,e),Mn(t,e))}function JG(n,e){const t=this.cache;Rn(t,e)||(n.uniform4iv(this.addr,e),Mn(t,e))}function ZG(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function QG(n,e){const t=this.cache;Rn(t,e)||(n.uniform2uiv(this.addr,e),Mn(t,e))}function e4(n,e){const t=this.cache;Rn(t,e)||(n.uniform3uiv(this.addr,e),Mn(t,e))}function t4(n,e){const t=this.cache;Rn(t,e)||(n.uniform4uiv(this.addr,e),Mn(t,e))}function n4(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||PC,s)}function i4(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||NC,s)}function s4(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||DC,s)}function r4(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||LC,s)}function o4(n){switch(n){case 5126:return zG;case 35664:return HG;case 35665:return WG;case 35666:return GG;case 35674:return $G;case 35675:return jG;case 35676:return qG;case 5124:case 35670:return XG;case 35667:case 35671:return YG;case 35668:case 35672:return KG;case 35669:case 35673:return JG;case 5125:return ZG;case 36294:return QG;case 36295:return e4;case 36296:return t4;case 35678:case 36198:case 36298:case 36306:case 35682:return n4;case 35679:case 36299:case 36307:return i4;case 35680:case 36300:case 36308:case 36293:return s4;case 36289:case 36303:case 36311:case 36292:return r4}}function a4(n,e){n.uniform1fv(this.addr,e)}function l4(n,e){const t=ul(e,this.size,2);n.uniform2fv(this.addr,t)}function c4(n,e){const t=ul(e,this.size,3);n.uniform3fv(this.addr,t)}function u4(n,e){const t=ul(e,this.size,4);n.uniform4fv(this.addr,t)}function d4(n,e){const t=ul(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function h4(n,e){const t=ul(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f4(n,e){const t=ul(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function p4(n,e){n.uniform1iv(this.addr,e)}function m4(n,e){n.uniform2iv(this.addr,e)}function g4(n,e){n.uniform3iv(this.addr,e)}function v4(n,e){n.uniform4iv(this.addr,e)}function _4(n,e){n.uniform1uiv(this.addr,e)}function y4(n,e){n.uniform2uiv(this.addr,e)}function x4(n,e){n.uniform3uiv(this.addr,e)}function b4(n,e){n.uniform4uiv(this.addr,e)}function w4(n,e,t){const i=e.length,s=cf(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture2D(e[r]||PC,s[r])}function S4(n,e,t){const i=e.length,s=cf(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture3D(e[r]||NC,s[r])}function E4(n,e,t){const i=e.length,s=cf(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTextureCube(e[r]||DC,s[r])}function M4(n,e,t){const i=e.length,s=cf(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||LC,s[r])}function T4(n){switch(n){case 5126:return a4;case 35664:return l4;case 35665:return c4;case 35666:return u4;case 35674:return d4;case 35675:return h4;case 35676:return f4;case 5124:case 35670:return p4;case 35667:case 35671:return m4;case 35668:case 35672:return g4;case 35669:case 35673:return v4;case 5125:return _4;case 36294:return y4;case 36295:return x4;case 36296:return b4;case 35678:case 36198:case 36298:case 36306:case 35682:return w4;case 35679:case 36299:case 36307:return S4;case 35680:case 36300:case 36308:case 36293:return E4;case 36289:case 36303:case 36311:case 36292:return M4}}function C4(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=o4(e.type)}function OC(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=T4(e.type)}OC.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),Mn(e,n)};function kC(n){this.id=n,this.seq=[],this.map={}}kC.prototype.setValue=function(n,e,t){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(n,e[o.id],t)}};const Mp=/(\w+)(\])?(\[|\.)?/g;function Tb(n,e){n.seq.push(e),n.map[e.id]=e}function A4(n,e,t){const i=n.name,s=i.length;for(Mp.lastIndex=0;;){const r=Mp.exec(i),o=Mp.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tb(t,c===void 0?new C4(a,n,e):new OC(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new kC(a),Tb(t,d)),t=d}}}function ur(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){const s=n.getActiveUniform(e,i),r=n.getUniformLocation(e,s.name);A4(s,r,this)}}ur.prototype.setValue=function(n,e,t,i){const s=this.map[e];s!==void 0&&s.setValue(n,t,i)};ur.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};ur.upload=function(n,e,t,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};ur.seqWithValue=function(n,e){const t=[];for(let i=0,s=n.length;i!==s;++i){const r=n[i];r.id in e&&t.push(r)}return t};function Cb(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let I4=0;function R4(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++)i.push(o+1+": "+t[o]);return i.join(`
`)}function P4(n){switch(n){case Ts:return["Linear","( value )"];case Pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Ab(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=parseInt(/ERROR: 0:(\d+)/.exec(s)[1]);return t.toUpperCase()+`

`+s+`

`+R4(n.getShaderSource(e),r)}function L4(n,e){const t=P4(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function N4(n,e){let t;switch(e){case BU:t="Linear";break;case VU:t="Reinhard";break;case UU:t="OptimizedCineon";break;case zU:t="ACESFilmic";break;case HU:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function D4(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vl).join(`
`)}function O4(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function k4(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vl(n){return n!==""}function Ib(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F4=/^[ \t]*#include +<([\w\d./]+)>/gm;function eg(n){return n.replace(F4,B4)}function B4(n,e){const t=nt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return eg(t)}const V4=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,U4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pb(n){return n.replace(U4,FC).replace(V4,z4)}function z4(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),FC(n,e,t,i)}function FC(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lb(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H4(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vC?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gU?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bl&&(e="SHADOWMAP_TYPE_VSM"),e}function W4(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ua:case za:e="ENVMAP_TYPE_CUBE";break;case nf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G4(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case za:e="ENVMAP_MODE_REFRACTION";break}return e}function $4(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case kU:e="ENVMAP_BLENDING_MIX";break;case FU:e="ENVMAP_BLENDING_ADD";break}return e}function j4(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function q4(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=H4(t),c=W4(t),u=G4(t),d=$4(t),h=j4(t),f=t.isWebGL2?"":D4(t),p=O4(r),g=s.createProgram();let m,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[p].filter(Vl).join(`
`),m.length>0&&(m+=`
`),v=[f,p].filter(Vl).join(`
`),v.length>0&&(v+=`
`)):(m=[Lb(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vl).join(`
`),v=[f,Lb(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?nt.tonemapping_pars_fragment:"",t.toneMapping!==bs?N4("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.encodings_pars_fragment,L4("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vl).join(`
`)),o=eg(o),o=Ib(o,t),o=Rb(o,t),a=eg(a),a=Ib(a,t),a=Rb(a,t),o=Pb(o),a=Pb(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===tb?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tb?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=_+m+o,E=_+v+a,x=Cb(s,35633,M),P=Cb(s,35632,E);if(s.attachShader(g,x),s.attachShader(g,P),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),n.debug.checkShaderErrors){const W=s.getProgramInfoLog(g).trim(),L=s.getShaderInfoLog(x).trim(),y=s.getShaderInfoLog(P).trim();let T=!0,X=!0;if(s.getProgramParameter(g,35714)===!1){T=!1;const k=Ab(s,x,"vertex"),z=Ab(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,35715)+`

Program Info Log: `+W+`
`+k+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||y==="")&&(X=!1);X&&(this.diagnostics={runnable:T,programLog:W,vertexShader:{log:L,prefix:m},fragmentShader:{log:y,prefix:v}})}s.deleteShader(x),s.deleteShader(P);let C;this.getUniforms=function(){return C===void 0&&(C=new ur(s,g)),C};let D;return this.getAttributes=function(){return D===void 0&&(D=k4(s,g)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=I4++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=P,this}let X4=0;class Y4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new K4(e);t.set(e,i)}return t.get(e)}}class K4{constructor(e){this.id=X4++,this.code=e,this.usedTimes=0}}function J4(n,e,t,i,s,r,o){const a=new TC,l=new Y4,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.floatVertexTextures,f=s.maxVertexUniforms,p=s.vertexTextures;let g=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){const X=y.skeleton.bones;if(h)return 1024;{const z=Math.floor((f-20)/4),H=Math.min(z,X.length);return H<X.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+X.length+" bones. This GPU supports "+H+"."),0):H}}function _(y,T,X,k,z){const H=k.fog,$=z.geometry,O=y.isMeshStandardMaterial?k.environment:null,ne=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),ae=!!ne&&ne.mapping===nf?ne.image.height:null,fe=m[y.type],oe=z.isSkinnedMesh?v(z):0;y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const Ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ze=Ae!==void 0?Ae.length:0;let Y=0;$.morphAttributes.position!==void 0&&(Y=1),$.morphAttributes.normal!==void 0&&(Y=2),$.morphAttributes.color!==void 0&&(Y=3);let j,ce,ve,Ie;if(fe){const A=Gi[fe];j=A.vertexShader,ce=A.fragmentShader}else j=y.vertexShader,ce=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),Ie=l.getFragmentShaderID(y);const pe=n.getRenderTarget(),Me=y.alphaTest>0,K=y.clearcoat>0;return{isWebGL2:u,shaderID:fe,shaderName:y.type,vertexShader:j,fragmentShader:ce,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:Ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:p,outputEncoding:pe===null?n.outputEncoding:pe.isXRRenderTarget===!0?pe.texture.encoding:Ts,map:!!y.map,matcap:!!y.matcap,envMap:!!ne,envMapMode:ne&&ne.mapping,envMapCubeUVHeight:ae,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===dz,tangentSpaceNormalMap:y.normalMapType===al,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Pt,clearcoat:K,clearcoatMap:K&&!!y.clearcoatMap,clearcoatRoughnessMap:K&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:K&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ma,alphaMap:!!y.alphaMap,alphaTest:Me,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!$.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!H,useFog:y.fog,fogExp2:H&&H.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0&&oe>0,maxBones:oe,useVertexTexture:h,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:Y,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:bs,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Va,flipSided:y.side===Ti,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function M(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const X in y.defines)T.push(X),T.push(y.defines[X]);return y.isRawShaderMaterial===!1&&(E(T,y),x(T,y),T.push(n.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function E(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.maxBones),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection)}function x(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.displacementMap&&a.enable(18),T.specularMap&&a.enable(19),T.roughnessMap&&a.enable(20),T.metalnessMap&&a.enable(21),T.gradientMap&&a.enable(22),T.alphaMap&&a.enable(23),T.alphaTest&&a.enable(24),T.vertexColors&&a.enable(25),T.vertexAlphas&&a.enable(26),T.vertexUvs&&a.enable(27),T.vertexTangents&&a.enable(28),T.uvsVertexOnly&&a.enable(29),T.fog&&a.enable(30),y.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.useVertexTexture&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.depthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),y.push(a.mask)}function P(y){const T=m[y.type];let X;if(T){const k=Gi[T];X=$z.clone(k.uniforms)}else X=y.uniforms;return X}function C(y,T){let X;for(let k=0,z=c.length;k<z;k++){const H=c[k];if(H.cacheKey===T){X=H,++X.usedTimes;break}}return X===void 0&&(X=new q4(n,T,y,r),c.push(X)),X}function D(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function W(y){l.remove(y)}function L(){l.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:P,acquireProgram:C,releaseProgram:D,releaseShaderCache:W,programs:c,dispose:L}}function Z4(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Q4(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Db(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,f,p,g,m){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:g,group:m},n[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=f,v.groupOrder=p,v.renderOrder=d.renderOrder,v.z=g,v.group=m),e++,v}function a(d,h,f,p,g,m){const v=o(d,h,f,p,g,m);f.transmission>0?i.push(v):f.transparent===!0?s.push(v):t.push(v)}function l(d,h,f,p,g,m){const v=o(d,h,f,p,g,m);f.transmission>0?i.unshift(v):f.transparent===!0?s.unshift(v):t.unshift(v)}function c(d,h){t.length>1&&t.sort(d||Q4),i.length>1&&i.sort(h||Nb),s.length>1&&s.sort(h||Nb)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function e5(){let n=new WeakMap;function e(i,s){let r;return n.has(i)===!1?(r=new Db,n.set(i,[r])):s>=n.get(i).length?(r=new Db,n.get(i).push(r)):r=n.get(i)[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function t5(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Oe};break;case"SpotLight":t={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function n5(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let i5=0;function s5(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function r5(n,e){const t=new t5,i=n5(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)s.probe.push(new N);const r=new N,o=new Fe,a=new Fe;function l(u,d){let h=0,f=0,p=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let g=0,m=0,v=0,_=0,M=0,E=0,x=0,P=0;u.sort(s5);const C=d!==!0?Math.PI:1;for(let W=0,L=u.length;W<L;W++){const y=u[W],T=y.color,X=y.intensity,k=y.distance,z=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=T.r*X*C,f+=T.g*X*C,p+=T.b*X*C;else if(y.isLightProbe)for(let H=0;H<9;H++)s.probe[H].addScaledVector(y.sh.coefficients[H],X);else if(y.isDirectionalLight){const H=t.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity*C),y.castShadow){const $=y.shadow,O=i.get(y);O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,s.directionalShadow[g]=O,s.directionalShadowMap[g]=z,s.directionalShadowMatrix[g]=y.shadow.matrix,E++}s.directional[g]=H,g++}else if(y.isSpotLight){const H=t.get(y);if(H.position.setFromMatrixPosition(y.matrixWorld),H.color.copy(T).multiplyScalar(X*C),H.distance=k,H.coneCos=Math.cos(y.angle),H.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),H.decay=y.decay,y.castShadow){const $=y.shadow,O=i.get(y);O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,s.spotShadow[v]=O,s.spotShadowMap[v]=z,s.spotShadowMatrix[v]=y.shadow.matrix,P++}s.spot[v]=H,v++}else if(y.isRectAreaLight){const H=t.get(y);H.color.copy(T).multiplyScalar(X),H.halfWidth.set(y.width*.5,0,0),H.halfHeight.set(0,y.height*.5,0),s.rectArea[_]=H,_++}else if(y.isPointLight){const H=t.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity*C),H.distance=y.distance,H.decay=y.decay,y.castShadow){const $=y.shadow,O=i.get(y);O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,O.shadowCameraNear=$.camera.near,O.shadowCameraFar=$.camera.far,s.pointShadow[m]=O,s.pointShadowMap[m]=z,s.pointShadowMatrix[m]=y.shadow.matrix,x++}s.point[m]=H,m++}else if(y.isHemisphereLight){const H=t.get(y);H.skyColor.copy(y.color).multiplyScalar(X*C),H.groundColor.copy(y.groundColor).multiplyScalar(X*C),s.hemi[M]=H,M++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=p;const D=s.hash;(D.directionalLength!==g||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==_||D.hemiLength!==M||D.numDirectionalShadows!==E||D.numPointShadows!==x||D.numSpotShadows!==P)&&(s.directional.length=g,s.spot.length=v,s.rectArea.length=_,s.point.length=m,s.hemi.length=M,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=x,s.pointShadowMap.length=x,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=x,s.spotShadowMatrix.length=P,D.directionalLength=g,D.pointLength=m,D.spotLength=v,D.rectAreaLength=_,D.hemiLength=M,D.numDirectionalShadows=E,D.numPointShadows=x,D.numSpotShadows=P,s.version=i5++)}function c(u,d){let h=0,f=0,p=0,g=0,m=0;const v=d.matrixWorldInverse;for(let _=0,M=u.length;_<M;_++){const E=u[_];if(E.isDirectionalLight){const x=s.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),h++}else if(E.isSpotLight){const x=s.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),p++}else if(E.isRectAreaLight){const x=s.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(v),a.identity(),o.copy(E.matrixWorld),o.premultiply(v),a.extractRotation(o),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=s.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(v),f++}else if(E.isHemisphereLight){const x=s.hemi[m];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(v),x.direction.normalize(),m++}}}return{setup:l,setupView:c,state:s}}function Ob(n,e){const t=new r5(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o5(n,e){let t=new WeakMap;function i(r,o=0){let a;return t.has(r)===!1?(a=new Ob(n,e),t.set(r,[a])):o>=t.get(r).length?(a=new Ob(n,e),t.get(r).push(a)):a=t.get(r)[o],a}function s(){t=new WeakMap}return{get:i,dispose:s}}class h_ extends Kt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=cz,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}h_.prototype.isMeshDepthMaterial=!0;class f_ extends Kt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}f_.prototype.isMeshDistanceMaterial=!0;const a5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(t6,n6,"app");YV();yN({apiKey:"AIzaSyCy37-VIORLTw-TYc-SkWgLitI9v95Qods",authDomain:"monitorbox-88b5b.firebaseapp.com",projectId:"monitorbox-88b5b",storageBucket:"monitorbox-88b5b.appspot.com",messagingSenderId:"180778580190",appId:"1:180778580190:web:757af0ea99b6ca44142a4f",measurementId:"G-YEENE3QMDG",databaseURL:"https://monitorbox-88b5b-default-rtdb.europe-west1.firebasedatabase.app"});let dw;mi().onAuthStateChanged(()=>{dw||(dw=mR(VV).use(XV).use(Dc).use(AA).mount("#app"))});Dc.beforeEach((n,e,t)=>{n.name&&(document.title=n.name,AA.state.titleToolBar=n.name),t()});export{Ml as $,lB as A,zg as B,oi as C,vo as D,Ph as E,hP as F,Sn as G,Xc as H,Dt as I,vc as J,ot as K,VP as L,zn as M,Ka as N,US as O,u6 as P,Ee as Q,Rh as R,l6 as S,G as T,Nt as U,qi as V,SV as W,It as X,dE as Y,xc as Z,Ai as _,Pg as a,a6 as a$,Qh as a0,Kr as a1,Ge as a2,Es as a3,wr as a4,Sr as a5,ct as a6,YT as a7,ci as a8,XT as a9,Xa as aA,gB as aB,Ih as aC,o6 as aD,Jh as aE,ln as aF,AB as aG,_t as aH,Ug as aI,IB as aJ,tr as aK,Jn as aL,yo as aM,Xv as aN,Kv as aO,Yv as aP,Jv as aQ,mi as aR,Om as aS,Nm as aT,hT as aU,c6 as aV,HS as aW,eB as aX,YP as aY,hE as aZ,Bt as a_,Yc as aa,rr as ab,tn as ac,_a as ad,$i as ae,ua as af,st as ag,xx as ah,kT as ai,si as aj,uS as ak,IT as al,Tg as am,zS as an,wd as ao,vy as ap,EB as aq,s6 as ar,r6 as as,_o as at,sC as au,rC as av,Zv as aw,Lg as ax,eC as ay,Qv as az,Yt as b,em as b0,Ss as b1,Pd as b2,yn as c,qe as d,Ja as e,Ya as f,Ye as g,I as h,xo as i,Zi as j,Er as k,aB as l,oB as m,Qi as n,Hg as o,Pn as p,Ch as q,bo as r,Lh as s,Ke as t,cB as u,Is as v,Mr as w,es as x,Ah as y,dn as z};