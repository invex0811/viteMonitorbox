import{aH as k,ab as C,ad as c,ae as r,e,ai as g,ah as l,al as $,af as n,a6 as w,an as o,a2 as h,az as p,a5 as a,aj as v,ao as _,T as i,aq as f}from"./index.c62ad990.js";import{V as x}from"./VMenu.a496b39a.js";const y=k("flex-grow-1","div","VSpacer"),z={name:"AutocommitCounter",data:()=>({userField:null,users:[],showModelWindow:!1}),methods:{addUser(){this.users.push({name:this.userField,amount:0,menu:!1}),this.userField=null}},computed:{}},F={class:"fill-height ma"},U={class:"d-flex align-center"},B=a(" Add user "),N={key:0,class:"d-flex flex-column justify-center px-lg-10"},S={class:"overflow-x-auto"},b={class:"d-flex align-center"},j=a("remove"),A={class:"text-h6 px-2"},D=a("add"),T=a(" close"),M=a(" Delete? "),Y=a(" Yes "),q=a(" No "),E={key:1,class:"d-flex flex-wrap justify-center"},H={class:"overflow-x-auto"},I={class:"d-flex align-center"},L=a("remove"),R={class:"text-h6 px-2"},W=a("add"),G=a(" close"),J=a(" Delete? "),K=a(" Yes "),O=a(" No ");function P(d,m,Q,X,Z,V){return c(),r("section",F,[e(g,{justify:"center",class:"ma-0 p"},{default:l(()=>[e($,{cols:"10",lg:"4",md:"4"},{default:l(()=>[n("div",U,[e(w,{variant:"outlined",label:"User","hide-details":"auto",class:"mt-3",modelValue:d.userField,"onUpdate:modelValue":m[0]||(m[0]=t=>d.userField=t)},null,8,["modelValue"]),e(o,{class:"mt-2 ml-2",onClick:m[1]||(m[1]=t=>V.addUser()),color:"success"},{default:l(()=>[B]),_:1})]),d.$store.state.changeVeawStyle===!1?(c(),r("div",N,[(c(!0),r(h,null,p(d.users,(t,u)=>(c(),v(f,{key:u,class:"d-flex align-center my-2 px-1 px-lg-2",height:"50"},{default:l(()=>[n("div",S,_(t.name),1),e(y),n("div",b,[e(o,{onClick:s=>t.amount--,variant:"text",size:"x-small"},{default:l(()=>[e(i,{color:"#424242"},{default:l(()=>[j]),_:1})]),_:2},1032,["onClick"]),n("span",A,_(t.amount),1),e(o,{onClick:s=>t.amount++,variant:"text",size:"x-small"},{default:l(()=>[e(i,null,{default:l(()=>[D]),_:1})]),_:2},1032,["onClick"])]),e(o,{variant:"text",color:"error"},{default:l(()=>[e(i,null,{default:l(()=>[T]),_:1}),e(x,{activator:"parent",anchor:"end center",modelValue:t.menu,"onUpdate:modelValue":s=>t.menu=s},{default:l(()=>[e(f,{class:"d-flex flex-column pa-2"},{default:l(()=>[M,n("div",null,[e(o,{onClick:s=>d.users.splice(u,1),class:"mr-2",color:"success",size:"small"},{default:l(()=>[Y]),_:2},1032,["onClick"]),e(o,{onClick:s=>t.menu=!1,color:"error",size:"small"},{default:l(()=>[q]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))])):(c(),r("div",E,[(c(!0),r(h,null,p(d.users,(t,u)=>(c(),v(f,{key:u,class:"d-flex align-center flex-column ma-1",width:"45%"},{default:l(()=>[n("div",H,_(t.name),1),n("div",I,[e(o,{onClick:s=>t.amount--,variant:"text",size:"x-small"},{default:l(()=>[e(i,{color:"#424242"},{default:l(()=>[L]),_:1})]),_:2},1032,["onClick"]),n("span",R,_(t.amount),1),e(o,{onClick:s=>t.amount++,variant:"text",size:"x-small"},{default:l(()=>[e(i,null,{default:l(()=>[W]),_:1})]),_:2},1032,["onClick"])]),e(o,{variant:"text",color:"error",absolute:"",top:"0"},{default:l(()=>[e(i,null,{default:l(()=>[G]),_:1}),e(x,{activator:"parent",anchor:"bottom center",modelValue:t.menu,"onUpdate:modelValue":s=>t.menu=s},{default:l(()=>[e(f,{class:"d-flex flex-column pa-2"},{default:l(()=>[J,n("div",null,[e(o,{onClick:s=>d.users.splice(u,1),class:"mr-2",color:"success",size:"small"},{default:l(()=>[K]),_:2},1032,["onClick"]),e(o,{onClick:s=>t.menu=!1,color:"error",size:"small"},{default:l(()=>[O]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))]))]),_:1})]),_:1})])}var te=C(z,[["render",P]]);export{te as default};
