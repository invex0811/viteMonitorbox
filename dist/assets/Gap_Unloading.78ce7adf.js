import{D as g}from"./datetime.a6c08513.js";import{d as V,I as A,z as D,P as M,Q as C,a6 as w,aA as b,g as Z,h as t,U as x,V as N,af as p,X as T,aB as I,a2 as B,aC as k,aa as G,ab as U,ac as _,ad as y,ae as u,ai as z,ag as l,al as H,am as S,aj as W,aq as L,ao as v}from"./index.470cc29b.js";import{V as j,a as O}from"./VWindowItem.53071854.js";const P=V({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:A,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>e>0},modelValue:null,progress:[Boolean,String],showArrows:{type:[Boolean,String],default:!0,validator:e=>typeof e=="boolean"||e==="hover"},verticalDelimiters:[Boolean,String]},emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:a}=d;const s=D(e,"modelValue"),{t:F}=M(),h=C();let c=-1;w(s,m),w(()=>e.interval,m),w(()=>e.cycle,n=>{n?m():window.clearTimeout(c)}),b(o);function o(){!e.cycle||!h.value||(c=window.setTimeout(h.value.group.next,+e.interval>0?+e.interval:6e3))}function m(){window.clearTimeout(c),window.requestAnimationFrame(o)}return Z(()=>t(j,{ref:h,modelValue:s.value,"onUpdate:modelValue":n=>s.value=n,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters}],style:{height:B(e.height)},continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:a.default,additional:n=>{let{group:i}=n;return t(x,null,[!e.hideDelimiters&&t("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[i.items.value.length>0&&t(N,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[i.items.value.map(r=>{const f={"aria-label":F("$vuetify.carousel.ariaLabel.delimiter"),class:[i.isSelected(r.id)&&"v-btn--selected"],onClick:()=>i.select(r.id,!0)};return a.item?a.item({props:f,item:r}):t(p,T(r,f),null)})]})]),e.progress&&t(I,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(i.getItemIndex(s.value)+1)/i.items.value.length*100},null)])},prev:a.prev,next:a.next})),{}}}),Y=V({name:"VCarouselItem",inheritAttrs:!1,props:{value:null},setup(e,d){let{slots:a,attrs:s}=d;Z(()=>t(O,{class:"v-carousel-item",value:e.value},{default:()=>[t(k,s,a)]}))}}),R={name:"Gap&Unloading",data:()=>({timeZones:[{zoneName:"Central",zoneTime:"",timeZoneGap:"",timeZoneUnloading:"",states:["ND - North Dakota","SD - South Dakota","NE - Nebraska","WI - Wisconsin","MN - Minnesota","IA - Iowa","KS - Kansas","MO - Missouri","IL - Illinois","OK - Oklahoma","AR - Arkansas","TN - Tennessee","AL - Alabama","MS - Mississippi","LA - Louisiana","TX - Texas"],src:"https://images.unsplash.com/photo-1490377273829-e0ae2ce99279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{zoneName:"Pacific",zoneTime:"",timeZoneGap:"",timeZoneUnloading:"",states:["WA - Washington","OR - Oregon","NV - Nevada","CA - California"],src:"https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{zoneName:"Mountain",zoneTime:"",timeZoneGap:"",timeZoneUnloading:"",states:["MT - Montana","ID - Idaho","WY - Wyoming","UT - Utah","CO - Colorado","AZ - Arizona","NM - New Mexico"],src:"https://images.unsplash.com/photo-1624375147958-678d727cc0c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{zoneName:"Eastern",zoneTime:"",timeZoneGap:"",timeZoneUnloading:"",states:["MI - Michigan","IN - Indiana","OH - Ohio","PA - Pennsylvania","NY - New York","VT - Vermont","ME - Maine","NH - New Hampshire","MA - Massachusetts","RI - Rhode Island","CT - Connecticut","NJ - New Jersey","DE - Delaware","MD - Maryland","DC - District of Columbia","VA - Virginia","WV - West Virginia","KY - Kentucky","NC - North Carolina","SC - South Carolina","GA - Georgia","FL - Florida"],src:"https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"}],denver:null,losAngeles:null,chicago:null,detroit:null}),mounted(){setInterval(()=>{this.losAngeles=g.local().setZone("America/Los_Angeles"),this.denver=g.local().setZone("America/Denver"),this.chicago=g.local().setZone("America/Chicago"),this.detroit=g.local().setZone("America/Detroit"),this.timeZones[1].zoneTime=this.losAngeles.toFormat("FF"),this.timeZones[2].zoneTime=this.denver.toFormat("FF"),this.timeZones[0].zoneTime=this.chicago.toFormat("FF"),this.timeZones[3].zoneTime=this.detroit.toFormat("FF"),this.timeZones[1].timeZoneGap=this.losAngeles.minus({days:9}).toFormat("FF"),this.timeZones[2].timeZoneGap=this.denver.minus({days:9}).toFormat("FF"),this.timeZones[0].timeZoneGap=this.chicago.minus({days:9}).toFormat("FF"),this.timeZones[3].timeZoneGap=this.detroit.minus({days:9}).toFormat("FF"),this.timeZones[1].timeZoneUnloading=this.losAngeles.minus({days:8,hours:12}).toFormat("FF"),this.timeZones[2].timeZoneUnloading=this.denver.minus({days:8,hours:12}).toFormat("FF"),this.timeZones[0].timeZoneUnloading=this.chicago.minus({days:8,hours:12}).toFormat("FF"),this.timeZones[3].timeZoneUnloading=this.detroit.minus({days:8,hours:12}).toFormat("FF")},1e3)},methods:{}},$={class:"fill-height"},q={class:"text-h3"},E={class:"text-h5"},K={class:"text-h6"},J={class:"text-h6"};function X(e,d,a,s,F,h){const c=U("router-view");return _(),y(x,null,[u("section",$,[t(z,{justify:"center",align:"center",class:"fill-height","no-gutters":""},{default:l(()=>[t(H,{cols:"12"},{default:l(()=>[t(P,{"show-arrows":"hover",height:"700","delimiter-icon":"flag_circle",color:"white"},{prev:l(({props:o})=>[t(p,{variant:"outlined",color:"white",icon:"arrow_back_ios",onClick:o.onClick},null,8,["onClick"])]),next:l(({props:o})=>[t(p,{variant:"outlined",color:"white",icon:"arrow_forward_ios",onClick:o.onClick},null,8,["onClick"])]),default:l(()=>[(_(!0),y(x,null,S(e.timeZones,({zoneName:o,zoneTime:m,timeZoneGap:n,timeZoneUnloading:i,src:r},f)=>(_(),W(Y,{key:f,src:r,cover:""},{default:l(()=>[t(L,{height:"100%",variant:"outlined",class:"d-flex flex-column align-center justify-sm-start justify-md-center justify-lg-center text-white opacity border-none"},{default:l(()=>[u("div",q,v(o),1),u("div",E,"Time: "+v(m),1),u("div",K,"Time gap: "+v(n),1),u("div",J,"Time unloading: "+v(i),1)]),_:2},1024)]),_:2},1032,["src"]))),128))]),_:1})]),_:1})]),_:1})]),t(c)],64)}var ae=G(R,[["render",X],["__scopeId","data-v-fb0f223e"]]);export{ae as default};