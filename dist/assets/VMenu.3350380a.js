var Te=Object.defineProperty,Fe=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var ae=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))ie.call(t,n)&&ae(e,n,t[n]);if(W)for(var n of W(t))le.call(t,n)&&ae(e,n,t[n]);return e},re=(e,t)=>Fe(e,Le(t));var se=(e,t)=>{var n={};for(var o in e)ie.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&W)for(var o of W(e))t.indexOf(o)<0&&le.call(e,o)&&(n[o]=e[o]);return n};import{x as Me,b as p,l as $,at as Y,f as J,au as Be,r as E,c as h,av as Q,as as V,aw as $e,$ as P,ax as O,ay as I,az as _,aA as ge,S as Ve,aB as He,a6 as C,aC as Ne,aD as Re,n as We,g as he,j as ye,aE as De,m as Ie,Z as pe,u as Ee,C as je,aF as qe,aq as ze,aG as Ue,aH as Ye,a as Ze,aI as Xe,aJ as Ke,al as Ge,w as Je,X as Qe,k as et,a0 as tt}from"./index.dfba4f93.js";import{e as nt,g as ot,n as we,B as at,s as it}from"./VTextField.1d2c1318.js";import{m as lt,u as rt}from"./lazy.40f70f17.js";function Se(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function Oe(e){for(;e;){if(ee(e))return e;e=e.parentElement}return document.scrollingElement}function Z(e){const t=[];for(;e;)ee(e)&&t.push(e),e=e.parentElement;return t}function ee(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function st(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const ct=Me({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const o={onBeforeEnter(a){a.style.pointerEvents="none"},async onEnter(a,i){await new Promise(r=>requestAnimationFrame(r));const{x:l,y:c}=ce(e.target,a);a.animate([{transform:`translate(${l}px, ${c}px) scale(0.1)`,opacity:0},{transform:""}],{duration:225,easing:nt}).finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){await new Promise(r=>requestAnimationFrame(r));const{x:l,y:c}=ce(e.target,a);a.animate([{transform:""},{transform:`translate(${l}px, ${c}px) scale(0.1)`,opacity:0}],{duration:125,easing:ot}).finished.then(()=>i())},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?p(Y,$({name:"dialog-transition"},o,{css:!1}),n):p(Y,{name:"dialog-transition"},n)}});function ce(e,t){const n=e.getBoundingClientRect(),o=we(t),[a,i]=getComputedStyle(t).transformOrigin.split(" ").map(v=>parseFloat(v)),[l,c]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let f=n.left+n.width/2;l==="left"||c==="left"?f-=n.width/2:(l==="right"||c==="right")&&(f+=n.width/2);let r=n.top+n.height/2;return l==="top"||c==="top"?r-=n.height/2:(l==="bottom"||c==="bottom")&&(r+=n.height/2),{x:f-(a+o.left),y:r-(i+o.top)}}const ut=J(y({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0}},Be()));function vt(e,t){const n=E();let o=!1,a=!1;const i=h(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),l=h(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!i.value),{runOpenDelay:c,runCloseDelay:f}=He(e,s=>{s===(e.openOnHover&&o||i.value&&a)&&(t.value=s)}),r={click:s=>{s.stopPropagation(),n.value=s.currentTarget||s.target,t.value=!t.value},mouseenter:s=>{o=!0,n.value=s.currentTarget||s.target,c()},mouseleave:s=>{o=!1,f()},focus:s=>{Ve&&!s.target.matches(":focus-visible")||(a=!0,s.stopPropagation(),n.value=s.currentTarget||s.target,c())},blur:s=>{a=!1,s.stopPropagation(),f()}},v=h(()=>{const s={};return l.value&&(s.click=r.click),e.openOnHover&&(s.mouseenter=r.mouseenter,s.mouseleave=r.mouseleave),i.value&&(s.focus=r.focus,s.blur=r.blur),s}),u=E();Q(()=>{!u.value||V(()=>{const s=u.value;n.value=$e(s)?s.$el:s})});let d;return P(()=>!!e.activator,s=>{s&&O?(d=I(),d.run(()=>{ft(e,{activatorEl:n,activatorRef:u,activatorEvents:v})})):d&&d.stop()},{flush:"post",immediate:!0}),{activatorEl:n,activatorRef:u,activatorEvents:v}}function ft(e,t){let{activatorEl:n,activatorEvents:o}=t;P(()=>e.activator,(f,r)=>{if(r&&f!==r){const v=c(r);v&&i(v)}f&&V(()=>a())},{immediate:!0}),P(()=>e.activatorProps,()=>{a()}),_(()=>{i()});function a(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c(),r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!f||(Object.entries(o.value).forEach(v=>{let[u,d]=v;f.addEventListener(u,d)}),Object.keys(r).forEach(v=>{r[v]==null?f.removeAttribute(v):f.setAttribute(v,r[v])}))}function i(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c(),r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!f||(Object.entries(o.value).forEach(v=>{let[u,d]=v;f.removeEventListener(u,d)}),Object.keys(r).forEach(v=>{f.removeAttribute(v)}))}const l=ge("useActivator");function c(){var f;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,v;if(r)if(r==="parent"){var u,d;v=l==null||(u=l.proxy)==null||(d=u.$el)==null?void 0:d.parentNode}else typeof r=="string"?v=document.querySelector(r):"$el"in r?v=r.$el:v=r;return n.value=((f=v)==null?void 0:f.nodeType)===Node.ELEMENT_NODE?v:null,n.value}}function ue(e){let[t,n]=e.split(" ");return n||(n=t==="top"||t==="bottom"?"start":t==="start"||t==="end"?"top":"center"),{side:t,align:n}}function z(e){return{side:{center:"center",top:"bottom",bottom:"top",start:"end",end:"start"}[e.side],align:e.align}}function ve(e,t){var n,o;const{side:a,align:i}=e,{direction:l}=window.getComputedStyle(t),c=l==="ltr"?{start:"left",end:"right"}:{start:"right",end:"left"};return((n=c[a])!=null?n:a)+" "+((o=c[i])!=null?o:i)}function U(e,t){return{x:e.x+t.x,y:e.y+t.y}}function dt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function fe(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="start"?0:o==="center"?t.width/2:o==="end"?t.width:o,i=n==="top"?0:n==="bottom"?t.height:n;return U({x:a,y:i},t)}else if(e.side==="start"||e.side==="end"){const{side:n,align:o}=e,a=n==="start"?0:n==="end"?t.width:n,i=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return U({x:a,y:i},t)}return U({x:t.width/2,y:t.height/2},t)}const ke={static:ht,connected:yt},mt=J({positionStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in ke},anchor:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String]});function gt(e,t){const n=E({}),o=E();let a;Q(async()=>{var l;(l=a)==null||l.stop(),o.value=void 0,O&&t.isActive.value&&e.positionStrategy&&(a=I(),await V(),a.run(()=>{if(typeof e.positionStrategy=="function"){var c;o.value=(c=e.positionStrategy(t,e,n))==null?void 0:c.updatePosition}else{var f;o.value=(f=ke[e.positionStrategy](t,e,n))==null?void 0:f.updatePosition}}))}),O&&window.addEventListener("resize",i,{passive:!0}),_(()=>{var l;O&&window.removeEventListener("resize",i),o.value=void 0,(l=a)==null||l.stop()});function i(l){var c;(c=o.value)==null||c.call(o,l)}return{contentStyles:n,updatePosition:o}}function ht(){}function yt(e,t,n){const o=st(e.activatorEl.value);o&&Object.assign(n.value,{position:"fixed"});const a=h(()=>ue(t.anchor)),i=h(()=>t.origin==="overlap"?a.value:t.origin==="auto"?z(a.value):ue(t.origin)),l=h(()=>a.value.side===i.value.side),c=h(()=>{const u=parseFloat(t.maxHeight);return isNaN(u)?1/0:u}),f=h(()=>{const u=parseFloat(t.minWidth);return isNaN(u)?1/0:u});let r=!1;if(O){const u=new ResizeObserver(()=>{r&&v()});u.observe(e.activatorEl.value),u.observe(e.contentEl.value),_(()=>{u.disconnect()})}function v(){r=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>r=!0)});const u=e.activatorEl.value.getBoundingClientRect();t.offset&&(u.x-=+t.offset,u.y-=+t.offset,u.width+=+t.offset*2,u.height+=+t.offset*2);const d=Oe(e.contentEl.value),s=d.clientWidth,j=Math.min(d.clientHeight,window.innerHeight);let b;{const ne=new Map;e.contentEl.value.querySelectorAll("*").forEach(L=>{const R=L.scrollLeft,oe=L.scrollTop;(R||oe)&&ne.set(L,[R,oe])});const Ce=e.contentEl.value.style.maxWidth,_e=e.contentEl.value.style.maxHeight;e.contentEl.value.style.removeProperty("max-width"),e.contentEl.value.style.removeProperty("max-height"),b=we(e.contentEl.value),b.x-=parseFloat(e.contentEl.value.style.left)||0,b.y-=parseFloat(e.contentEl.value.style.top)||0,e.contentEl.value.style.maxWidth=Ce,e.contentEl.value.style.maxHeight=_e,ne.forEach((L,R)=>{R.scrollTo(...L)})}const x=Math.min(c.value,b.height),w=12,g={top:u.top-w,bottom:j-u.bottom-w,left:u.left-w,right:s-u.right-w},T=a.value.side==="bottom"&&x<=g.bottom||a.value.side==="top"&&x<=g.top,S=T?a.value:a.value.side==="bottom"&&g.top>g.bottom||a.value.side==="top"&&g.bottom>g.top?z(a.value):a.value,H=T?i.value:z(S),F=l.value||["center","top","bottom"].includes(S.side)?Math.min(s,Math.max(u.width,s-w*2)):S.side==="end"?g.right:S.side==="start"?g.left:null,N=Math.min(f.value,F,u.width),A=T?c.value:Math.min(c.value,Math.floor(S.side==="top"?g.top:g.bottom)),q=fe(S,u),m=fe(H,new at(re(y({},b),{height:Math.min(x,A)}))),{x:k,y:Ae}=dt(q,m);Object.assign(n.value,{"--v-overlay-anchor-origin":ve(S,e.activatorEl.value),top:C(Math.round(Ae)),left:C(Math.round(k)),transformOrigin:ve(H,e.activatorEl.value),minWidth:C(N),maxWidth:C(F),maxHeight:C(A)})}return P(()=>[a.value,i.value,t.offset],()=>v(),{immediate:!o}),o&&V(()=>v()),requestAnimationFrame(()=>{n.value.maxHeight&&v()}),{updatePosition:v}}let X=!0;const D=[];function pt(e){!X||D.length?(D.push(e),K()):(X=!1,e(),K())}let de=-1;function K(){cancelAnimationFrame(de),de=requestAnimationFrame(()=>{const e=D.shift();e&&e(),D.length?K():X=!0})}const G={close:St,block:Ot,reposition:kt},Et=J({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in G}});function wt(e,t){if(!O)return;let n;Q(async()=>{var o;(o=n)==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(n=I(),await V(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t);else{var a;(a=G[e.scrollStrategy])==null||a.call(G,t)}}))})}function St(e){var t;function n(o){e.isActive.value=!1}Pe((t=e.activatorEl.value)!=null?t:e.contentEl.value,n)}function Ot(e){var t;const n=[...new Set([...Z(e.activatorEl.value),...Z(e.contentEl.value)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,a=(i=>ee(i)&&i)(((t=e.root.value)==null?void 0:t.offsetParent)||document.documentElement);a&&e.root.value.classList.add("v-overlay--scroll-blocked"),n.forEach((i,l)=>{i.style.setProperty("--v-scrollbar-offset",C(o)),i.classList.add("v-overlay-scroll-blocked")}),_(()=>{n.forEach((i,l)=>{i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked")}),a&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function kt(e){var t;let n=!1,o=-1;function a(i){pt(()=>{var l,c;const f=performance.now();(l=(c=e.updatePosition).value)==null||l.call(c,i),n=(performance.now()-f)/(1e3/60)>2})}Pe((t=e.activatorEl.value)!=null?t:e.contentEl.value,i=>{n?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{a(i)})})):a(i)})}function Pe(e,t){const n=[document,...Z(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),_(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function B(e){return{teleportTarget:h(()=>{const n=e.value;if(n===!0||!O)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null){Ne(`Unable to locate target ${n}`);return}if(!B.cache.has(o)){const a=document.createElement("div");a.className="v-overlay-container",o.appendChild(a),B.cache.set(o,a)}return B.cache.get(o)})}}B.cache=new WeakMap;const M=E([]);function Pt(e){const t=ge("useStack");let n;return P(e,a=>{if(a)n=I(),n.run(()=>{M.value.push(t),_(()=>{const l=M.value.indexOf(t);M.value.splice(l,1)})});else{var i;(i=n)==null||i.stop()}},{immediate:!0}),{isTop:h(()=>Re(M.value[M.value.length-1])===t)}}const bt=Symbol.for("vuetify:overlay"),xt=2e3;function At(e){const{zIndex:t,overlays:n}=We(bt,{zIndex:E(xt),overlays:E([])}),o=he();return P(e,i=>{i?n.value.push(o):n.value=n.value.filter(l=>l!==o)},{immediate:!0}),{overlayZIndex:h(()=>t.value+n.value.indexOf(o)+1)}}function Ct(){return!0}function be(e,t,n){if(!e||xe(e,n)===!1)return!1;const o=Se(t);if(typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(i=>i==null?void 0:i.contains(e.target))}function xe(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Ct)(e)}function _t(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&be(e,t,n)&&setTimeout(()=>{xe(e,n)&&o&&o(e)},0)}function me(e,t){const n=Se(e);t(document),typeof ShadowRoot!="undefined"&&n instanceof ShadowRoot&&t(n)}const Tt={mounted(e,t){const n=a=>_t(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=be(a,e,t)};me(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){!e._clickOutside||(me(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:a,onMousedown:i}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",a,!0),n.removeEventListener("mousedown",i,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Ft(e){const a=e,{modelValue:t,color:n}=a,o=se(a,["modelValue","color"]);return p(Y,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&p("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Lt=ye()({name:"VOverlay",directives:{ClickOutside:Tt},inheritAttrs:!1,props:y(y(y(y(y(y(y({absolute:Boolean,attach:[Boolean,String,Object],contained:Boolean,contentClass:null,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0}},ut()),De()),mt()),Et()),Ie()),pe()),lt()),emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const i=Ee(e,"modelValue"),{teleportTarget:l}=B(h(()=>e.attach||e.contained)),{themeClasses:c}=je(e),{rtlClasses:f}=qe(),{hasContent:r,onAfterLeave:v}=rt(e,i),u=ze(h(()=>typeof e.scrim=="string"?e.scrim:null)),{activatorEl:d,activatorRef:s,activatorEvents:j}=vt(e,i),{dimensionStyles:b}=Ue(e),{isTop:x}=Pt(i),w=E(),g=E(),{contentStyles:T,updatePosition:S}=gt(e,{contentEl:g,activatorEl:d,isActive:i});wt(e,{root:w,contentEl:g,activatorEl:d,isActive:i,updatePosition:S});function H(m){a("click:outside",m),e.persistent?A():i.value=!1}function te(){return i.value&&x.value}O&&P(i,m=>{m?window.addEventListener("keydown",F):window.removeEventListener("keydown",F)},{immediate:!0});function F(m){m.key==="Escape"&&x.value&&(e.persistent?A():i.value=!1)}Ye(m=>{x.value&&i.value?(m(!1),e.persistent?A():i.value=!1):m()});const N=E();P(()=>i.value&&(e.absolute||e.contained)&&l.value==null,m=>{if(m){const k=Oe(w.value);k&&k!==document.scrollingElement&&(N.value=k.scrollTop)}});function A(){var m;e.noClickAnimation||(m=g.value)==null||m.animate([{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:it})}const{overlayZIndex:q}=At(i);return Ze(()=>{var m,k;return p(tt,null,[(m=n.activator)==null?void 0:m.call(n,{isActive:i.value,props:$({ref:s},Xe(j.value),e.activatorProps)}),O&&p(Ke,{disabled:!l.value,to:l.value},{default:()=>[r.value&&p("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},c.value,f.value],style:{top:C(N.value),zIndex:q.value},ref:w},o),[p(Ft,{color:u,modelValue:i.value&&!!e.scrim},null),p(Ge,{appear:!0,persisted:!0,transition:e.transition,target:d.value,onAfterLeave:()=>{v(),a("afterLeave")}},{default:()=>[Je(p("div",{ref:g,class:["v-overlay__content",e.contentClass],style:[b.value,T.value]},[(k=n.default)==null?void 0:k.call(n,{isActive:i})]),[[Qe,i.value],[et("click-outside"),{handler:H,closeConditional:te,include:()=>[d.value]}]])]})])]})])}),{animateClick:A,contentEl:g,activatorEl:d}}});const Ht=ye()({name:"VMenu",inheritAttrs:!1,props:y({disableKeys:Boolean,modelValue:Boolean,id:String},pe({transition:{component:ct}})),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:o}=t;const a=Ee(e,"modelValue"),i=he(),l=h(()=>e.id||`v-menu-${i}`);return()=>p(Lt,$({modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-menu"],transition:e.transition,absolute:!0,positionStrategy:"connected",scrollStrategy:"reposition",scrim:!1,activatorProps:{"aria-haspopup":"menu","aria-expanded":String(a.value),"aria-owns":l.value}},n),{default:o.default,activator:o.activator})}});export{Ht as V,Lt as a};
