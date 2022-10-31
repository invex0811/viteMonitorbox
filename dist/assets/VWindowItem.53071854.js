var M=Object.defineProperty;var B=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var H=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))A.call(t,n)&&H(e,n,t[n]);if(B)for(var n of B(t))G.call(t,n)&&H(e,n,t[n]);return e};import{aD as X,M as j,b as D,c as O,p as F,aE as z,P as J,u as K,Q as T,T as m,a6 as Q,aF as U,h as g,af as I,g as Y,C as L,D as q,d as Z,l as N,aG as p,aH as ee,A as te,aI as ne,aJ as oe,H as ae,aK as se,a2 as S,aL as ie}from"./index.470cc29b.js";const ue=e=>{const{touchstartX:t,touchendX:n,touchstartY:o,touchendY:s}=e,i=.5,a=16;e.offsetX=n-t,e.offsetY=s-o,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&n<t-a&&e.left(e),e.right&&n>t+a&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&s<o-a&&e.up(e),e.down&&s>o+a&&e.down(e))};function le(e,t){var n;const o=e.changedTouches[0];t.touchstartX=o.clientX,t.touchstartY=o.clientY,(n=t.start)==null||n.call(t,h({originalEvent:e},t))}function ce(e,t){var n;const o=e.changedTouches[0];t.touchendX=o.clientX,t.touchendY=o.clientY,(n=t.end)==null||n.call(t,h({originalEvent:e},t)),ue(t)}function re(e,t){var n;const o=e.changedTouches[0];t.touchmoveX=o.clientX,t.touchmoveY=o.clientY,(n=t.move)==null||n.call(t,h({originalEvent:e},t))}function ve(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>le(n,t),touchend:n=>ce(n,t),touchmove:n=>re(n,t)}}function de(e,t){var n,o,s;const i=t.value,a=i!=null&&i.parent?e.parentElement:e,f=(n=i==null?void 0:i.options)!=null?n:{passive:!0},v=(o=t.instance)==null?void 0:o.$.uid;if(!a||!v)return;const c=ve(t.value);a._touchHandlers=(s=a._touchHandlers)!=null?s:Object.create(null),a._touchHandlers[v]=c,X(c).forEach(y=>{a.addEventListener(y,c[y],f)})}function fe(e,t){var n,o;const s=(n=t.value)!=null&&n.parent?e.parentElement:e,i=(o=t.instance)==null?void 0:o.$.uid;if(!(s!=null&&s._touchHandlers)||!i)return;const a=s._touchHandlers[i];X(a).forEach(f=>{s.removeEventListener(f,a[f])}),delete s._touchHandlers[i]}const R={mounted:de,unmounted:fe};var he=R;const k=Symbol.for("vuetify:v-window"),P=Symbol.for("vuetify:v-window-group"),ye=j()({name:"VWindow",directives:{Touch:R},props:h(h({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"}},D()),O()),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:o}=F(e),{isRtl:s}=z(),{t:i}=J(),a=K(e,P),f=T(),v=m(()=>s.value?!e.reverse:e.reverse),c=T(!1),y=m(()=>{const u=e.direction==="vertical"?"y":"x",d=(v.value?!c.value:c.value)?"-reverse":"";return`v-window-${u}${d}-transition`}),$=T(0),w=T(void 0),_=m(()=>a.items.value.findIndex(u=>a.selected.value.includes(u.id)));Q(_,(u,l)=>{const d=a.items.value.length,E=d-1;d<=2?c.value=u<l:u===E&&l===0?c.value=!0:u===0&&l===E?c.value=!1:c.value=u<l}),U(k,{transition:y,isReversed:c,transitionCount:$,transitionHeight:w,rootRef:f});const r=m(()=>e.continuous||_.value!==0),b=m(()=>e.continuous||_.value!==a.items.value.length-1);function x(){r.value&&a.prev()}function C(){b.value&&a.next()}const V=m(()=>{const u=[],l={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${v.value?"right":"left"}`,onClick:a.prev,ariaLabel:i("$vuetify.carousel.prev")};u.push(r.value?n.prev?n.prev({props:l}):g(I,l,null):g("div",null,null));const d={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${v.value?"left":"right"}`,onClick:a.next,ariaLabel:i("$vuetify.carousel.next")};return u.push(b.value?n.next?n.next({props:d}):g(I,d,null):g("div",null,null)),u}),W=m(()=>e.touch===!1?e.touch:h(h({},{left:()=>{v.value?x():C()},right:()=>{v.value?C():x()},end:l=>{let{originalEvent:d}=l;d.stopPropagation()},start:l=>{let{originalEvent:d}=l;d.stopPropagation()}}),e.touch===!0?{}:e.touch));return Y(()=>{var u,l;return L(g(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value]},{default:()=>[g("div",{class:"v-window__container",style:{height:w.value}},[(u=n.default)==null?void 0:u.call(n,{group:a}),e.showArrows!==!1&&g("div",{class:"v-window__controls"},[V.value])]),(l=n.additional)==null?void 0:l.call(n,{group:a})]}),[[q("touch"),W.value]])}),{group:a}}}),_e=Z({name:"VWindowItem",directives:{Touch:he},props:h(h({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0}},N()),p()),setup(e,t){let{slots:n}=t;const o=ee(k),s=te(e,P),{isBooted:i}=ne();if(!o||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=T(!1),f=m(()=>o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function v(){!a.value||!o||(a.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function c(){if(!(a.value||!o)){if(a.value=!0,o.transitionCount.value===0){var r;o.transitionHeight.value=S((r=o.rootRef.value)==null?void 0:r.clientHeight)}o.transitionCount.value+=1}}function y(){v()}function $(r){!a.value||ie(()=>{!f.value||!a.value||!o||(o.transitionHeight.value=S(r.clientHeight))})}const w=m(()=>{const r=o.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof r!="string"?o.transition.value:r,onBeforeEnter:c,onAfterEnter:v,onEnterCancelled:y,onBeforeLeave:c,onAfterLeave:v,onLeaveCancelled:y,onEnter:$}:!1}),{hasContent:_}=oe(e,s.isSelected);return Y(()=>{var r;return g(se,{transition:i.value&&w.value},{default:()=>[L(g("div",{class:["v-window-item",s.selectedClass.value]},[_.value&&((r=n.default)==null?void 0:r.call(n))]),[[ae,s.isSelected.value]])]})}),{}}});export{ye as V,_e as a};