import{aM as V,aa as C,ac as c,ad as r,h as e,ai as g,ag as l,al as $,ae as n,$ as w,af as o,U as h,am as p,_ as a,aj as v,ao as m,G as i,W as x,aq as f}from"./index.9267961b.js";const y=V("flex-grow-1","div","VSpacer"),U={name:"AutocommitCounter",data:()=>({userField:null,users:[],showModelWindow:!1}),methods:{addUser(){this.users.push({name:this.userField,amount:0,menu:!1}),this.userField=null}},computed:{}},z={class:"fill-height ma"},F={class:"d-flex align-center"},B=a(" Add user "),N={key:0,class:"d-flex flex-column justify-center px-lg-10"},S={class:"overflow-x-auto"},j={class:"d-flex align-center"},b=a("remove"),A={class:"text-h6 px-2"},D=a("add"),M=a(" close"),T=a(" Delete? "),W=a(" Yes "),Y=a(" No "),q={key:1,class:"d-flex flex-wrap justify-center"},E={class:"overflow-x-auto"},G={class:"d-flex align-center"},I=a("remove"),L={class:"text-h6 px-2"},R=a("add"),H=a(" close"),J=a(" Delete? "),K=a(" Yes "),O=a(" No ");function P(d,_,Q,X,Z,k){return c(),r("section",z,[e(g,{justify:"center",class:"ma-0 p"},{default:l(()=>[e($,{cols:"10",lg:"4",md:"4"},{default:l(()=>[n("div",F,[e(w,{variant:"outlined",label:"User","hide-details":"auto",class:"mt-3",modelValue:d.userField,"onUpdate:modelValue":_[0]||(_[0]=t=>d.userField=t)},null,8,["modelValue"]),e(o,{class:"mt-2 ml-2",onClick:_[1]||(_[1]=t=>k.addUser()),color:"success"},{default:l(()=>[B]),_:1})]),d.$store.state.changeVeawStyle===!1?(c(),r("div",N,[(c(!0),r(h,null,p(d.users,(t,u)=>(c(),v(f,{key:u,class:"d-flex align-center my-2 px-1 px-lg-2",height:"50"},{default:l(()=>[n("div",S,m(t.name),1),e(y),n("div",j,[e(o,{onClick:s=>t.amount--,variant:"text",size:"x-small"},{default:l(()=>[e(i,{color:"#424242"},{default:l(()=>[b]),_:1})]),_:2},1032,["onClick"]),n("span",A,m(t.amount),1),e(o,{onClick:s=>t.amount++,variant:"text",size:"x-small"},{default:l(()=>[e(i,null,{default:l(()=>[D]),_:1})]),_:2},1032,["onClick"])]),e(o,{variant:"text",color:"error"},{default:l(()=>[e(i,null,{default:l(()=>[M]),_:1}),e(x,{activator:"parent",anchor:"end center",modelValue:t.menu,"onUpdate:modelValue":s=>t.menu=s},{default:l(()=>[e(f,{class:"d-flex flex-column pa-2"},{default:l(()=>[T,n("div",null,[e(o,{onClick:s=>d.users.splice(u,1),class:"mr-2",color:"success",size:"small"},{default:l(()=>[W]),_:2},1032,["onClick"]),e(o,{onClick:s=>t.menu=!1,color:"error",size:"small"},{default:l(()=>[Y]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))])):(c(),r("div",q,[(c(!0),r(h,null,p(d.users,(t,u)=>(c(),v(f,{key:u,class:"d-flex align-center flex-column ma-1",width:"45%"},{default:l(()=>[n("div",E,m(t.name),1),n("div",G,[e(o,{onClick:s=>t.amount--,variant:"text",size:"x-small"},{default:l(()=>[e(i,{color:"#424242"},{default:l(()=>[I]),_:1})]),_:2},1032,["onClick"]),n("span",L,m(t.amount),1),e(o,{onClick:s=>t.amount++,variant:"text",size:"x-small"},{default:l(()=>[e(i,null,{default:l(()=>[R]),_:1})]),_:2},1032,["onClick"])]),e(o,{variant:"text",color:"error",absolute:"",top:"0"},{default:l(()=>[e(i,null,{default:l(()=>[H]),_:1}),e(x,{activator:"parent",anchor:"bottom center",modelValue:t.menu,"onUpdate:modelValue":s=>t.menu=s},{default:l(()=>[e(f,{class:"d-flex flex-column pa-2"},{default:l(()=>[J,n("div",null,[e(o,{onClick:s=>d.users.splice(u,1),class:"mr-2",color:"success",size:"small"},{default:l(()=>[K]),_:2},1032,["onClick"]),e(o,{onClick:s=>t.menu=!1,color:"error",size:"small"},{default:l(()=>[O]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))]))]),_:1})]),_:1})])}var le=C(U,[["render",P]]);export{le as default};
