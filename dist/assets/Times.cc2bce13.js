import{D as d}from"./datetime.a6c08513.js";import{a7 as f,a9 as c,aa as m,b as e,ad as i,ac as t,ag as l,ah as D,a4 as r,ai as p}from"./index.dfba4f93.js";import{d as n}from"./VTextField.1d2c1318.js";import"./VProgressLinear.6c5a9a79.js";const h={name:"Times",data:()=>({firstDate:null,secondDate:null,result:null}),methods:{minusTime(){this.result=d.fromObject({year:this.firstDate[8]+this.firstDate[9]+this.firstDate[10]+this.firstDate[11]}).diff(d.fromObject({year:this.secondDate[8]+this.secondDate[9]+this.secondDate[10]+this.secondDate[11]})).toObject(year),console.log("1")}},computed:{}},V={class:"fill-height pt-5"},_=r("OK");function y(s,a,T,b,j,u){return c(),m("section",V,[e(i,{justify:"center"},{default:t(()=>[e(l,{cols:"6"},{default:t(()=>[e(i,{justify:"center"},{default:t(()=>[e(l,{cols:"3",class:"d-flex align-center"},{default:t(()=>[e(n,{label:"First date",modelValue:s.firstDate,"onUpdate:modelValue":a[0]||(a[0]=o=>s.firstDate=o),variant:"outlined","hide-details":"auto"},null,8,["modelValue"])]),_:1}),e(l,{cols:"3"},{default:t(()=>[e(n,{label:"Second date",modelValue:s.secondDate,"onUpdate:modelValue":a[1]||(a[1]=o=>s.secondDate=o),variant:"outlined","hide-details":"auto"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{justify:"center"},{default:t(()=>[e(l,{cols:"1"},{default:t(()=>[e(D,{onClick:a[2]||(a[2]=o=>u.minusTime()),color:"success"},{default:t(()=>[_]),_:1})]),_:1})]),_:1}),e(i,null,{default:t(()=>[e(l,null,{default:t(()=>[r(p(s.result),1)]),_:1})]),_:1})]),_:1})]),_:1})])}var k=f(h,[["render",y]]);export{k as default};