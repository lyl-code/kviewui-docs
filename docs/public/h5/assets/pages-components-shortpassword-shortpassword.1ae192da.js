var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a;import{D as r,E as n,r as i,M as d,n as m,G as c,d as f,f as p,o as k,Q as g,a as h,w as y,c as b,S as v,R as x,m as V,b as _,I as w,q as I,l as S,i as j,a4 as M,_ as C,$ as O}from"./index.23888770.js";import{_ as U}from"./kui-text.130ddde7.js";import{c as z,r as F,_ as $}from"./kui-page.40f10ef7.js";import{_ as B}from"./kui-switch.eca5ec4f.js";import{_ as L}from"./kui-icons.7ba34cc0.js";import{_ as P}from"./kui-numberkeyboard.f3cbade8.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as E}from"./kui-cell-group.81ac2330.js";import{_ as N}from"./kui-space.43763e84.js";import"./kui-animation.9b475c9e.js";import"./kui-popup.0967d527.js";import"./kui-overlay.d1291bf8.js";var R={modelValue:{type:String,default:""},show:{type:Boolean,default:!0},tipsMessage:{type:String,default:""},errorMessage:{type:String,default:""},length:{type:[Number,String],default:6},password:{type:Boolean,default:!0},mode:{type:String,default:()=>{var e,t;return null!=(t=null==(e=r(z,void 0))?void 0:e.mode)?t:"light"}},focus:{type:Boolean,default:!1},autocomplete:{type:Boolean,default:!0}};const q="kui-shortpassword";var G=D(n({name:q,props:R,emits:["update:modelValue","change","confirm"],setup(e,{emit:t}){const{proxy:l}=f(),a=l.$theme,o=i({mode:e.mode,activeIndex:0,numberkeyboardShow:!1,list:[],value:""}),u=()=>`1rpx solid ${a.colors[o.mode].grey[2]}`,s=d((()=>{const e=i({});return e.height="100rpx",e.border="none",e.borderTop=e.borderBottom=u(),e}));if(e.length)for(let i=0;i<e.length;i++)o.list[i]={index:i,value:""};const r=t=>{"input"===t?o.activeIndex++:o.activeIndex--,o.activeIndex<=0&&(o.activeIndex=0),o.activeIndex>Number(+e.length-1)&&(o.activeIndex=+e.length-1,e.autocomplete&&(o.numberkeyboardShow=!1))},n=e=>{t("update:modelValue",e)};return m((()=>{o.numberkeyboardShow=e.focus})),c("changeMode",(e=>{o.mode=e,u()})),{name:q,theme:a,state:o,rootStyle:s,inputItemStyle:e=>{const t=i({});return t.border="none",t.borderRight=u(),t.borderLeft=0===e?u():"",t.background="light"===o.mode?"#FFFFFF":a.colors[o.mode].grey[0],t},cursorStyle:e=>{const t=i({});return t.height="40rpx",t.borderLeft=`1px solid ${a.colors[o.mode].grey[9]}`,t},onClickInput:()=>{o.numberkeyboardShow=!0},onInput:e=>{o.list[o.activeIndex].value=e,n(o.value),r("input"),o.list[o.activeIndex].focus=!0,t("change",o.value),o.numberkeyboardShow||t("confirm",o.value)},deleteInput:t=>{let l=e.modelValue.slice(0,e.modelValue.length-1);o.list[o.activeIndex].value="",n(l),e.modelValue.length===e.length&&o.activeIndex++,r("delete")}}}}),[["render",function(e,t,l,a,o,u){const s=j,r=F(p("kui-text"),U),n=F(p("kui-icons"),L),i=F(p("kui-numberkeyboard"),P);return k(),g(v,null,[h(s,{class:S(e.name)},{default:y((()=>[e.state.list.length?(k(),b(s,{key:0,class:"kui-flex kui-items-center kui-w-full",style:V(e.rootStyle)},{default:y((()=>[(k(!0),g(v,null,x(e.state.list,((t,l)=>(k(),b(s,{key:l,class:"kui-flex-1 kui-h-full kui-justify-center kui-items-center kui-text-center",type:"text",style:V(e.inputItemStyle(l)),onClick:e.onClickInput},{default:y((()=>[h(s,{class:"kui-h-full kui-flex kui-items-center kui-justify-center"},{default:y((()=>[l===e.state.activeIndex&&e.modelValue.length<e.length&&e.state.numberkeyboardShow?(k(),b(s,{key:0,class:"kui-animate-flicker",style:V(e.cursorStyle(l))},null,8,["style"])):(k(),g(v,{key:1},[!e.password&&t.value?(k(),b(r,{key:0,mode:e.state.mode,size:`${e.theme.size.fonts.xl}${e.theme.size.fontUnit}`},{default:y((()=>[_(w(t.value),1)])),_:2},1032,["mode","size"])):t.value?(k(),b(n,{key:1,mode:e.state.mode,size:e.theme.size.fonts.xl,type:"media-record"},null,8,["mode","size"])):I("",!0)],64))])),_:2},1024)])),_:2},1032,["style","onClick"])))),128))])),_:1},8,["style"])):I("",!0),e.tipsMessage||e.errorMessage?(k(),b(s,{key:1,class:"kui-mt-3 kui-flex"},{default:y((()=>[h(s,{class:"kui-flex-1"},{default:y((()=>[e.errorMessage?(k(),b(r,{key:0,mode:e.state.mode,color:"danger"},{default:y((()=>[_(w(e.errorMessage),1)])),_:1},8,["mode"])):e.tipsMessage?(k(),b(r,{key:1,mode:e.state.mode,color:"grey"},{default:y((()=>[_(w(e.tipsMessage),1)])),_:1},8,["mode"])):I("",!0)])),_:1})])),_:1})):I("",!0)])),_:1},8,["class"]),h(i,{mode:e.state.mode,maxlength:e.length,show:e.state.numberkeyboardShow,"onUpdate:show":t[0]||(t[0]=t=>e.state.numberkeyboardShow=t),"right-sidebar":"",modelValue:e.state.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.state.value=t),onInput:e.onInput,onDelete:e.deleteInput},null,8,["mode","maxlength","show","modelValue","onInput","onDelete"])],64)}]]);var Q=D({setup(){const e=M(""),r=M(""),n=M(""),i=M(""),d=M(""),m=M(!1);let c=M("light");return f=((e,t)=>{for(var l in t||(t={}))o.call(t,l)&&s(e,l,t[l]);if(a)for(var l of a(t))u.call(t,l)&&s(e,l,t[l]);return e})({},C({baseValue:e,customLengthValue:r,textValue:n,tipsValue:i,errorMessage:d,checked:m})),t(f,l({onChange:e=>{},onConfirm:e=>{d.value="666666"!==e?"密码错误":""},changeMode:()=>{c=m.value?"dark":"light",O("changeMode",c)}}));var f}},[["render",function(e,t,l,a,o,u){const s=F(p("kui-text"),U),r=F(p("kui-switch"),B),n=j,i=F(p("kui-shortpassword"),G),d=F(p("kui-cell-group"),E),m=F(p("kui-space"),N),c=F(p("kui-page"),$);return k(),b(n,{class:"kui-w-full"},{default:y((()=>[h(c,{"custom-header":!1},{body:y((()=>[h(n,{class:"kui-w-full"},{default:y((()=>[h(m,{gap:[30,0],direction:"column"},{default:y((()=>[h(n,{class:"kui-mt-3 kui-h-full kui-flex kui-items-center"},{default:y((()=>[h(s,null,{default:y((()=>[_("暗黑模式：")])),_:1}),h(r,{modelValue:e.checked,"onUpdate:modelValue":t[0]||(t[0]=t=>e.checked=t),onChange:a.changeMode},null,8,["modelValue","onChange"])])),_:1}),h(n,{class:"kui-w-full"},{default:y((()=>[h(d,{title:"基本用法"},{default:y((()=>[h(n,{class:"kui-w-full"},{default:y((()=>[h(i,{modelValue:e.baseValue,"onUpdate:modelValue":t[1]||(t[1]=t=>e.baseValue=t),focus:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),h(n,{class:"kui-w-full"},{default:y((()=>[h(d,{title:"自定义长度"},{default:y((()=>[h(n,{class:"kui-w-full"},{default:y((()=>[h(i,{modelValue:e.customLengthValue,"onUpdate:modelValue":t[2]||(t[2]=t=>e.customLengthValue=t),length:5},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),h(n,{class:"kui-w-full"},{default:y((()=>[h(d,{title:"普通文本类型"},{default:y((()=>[h(n,{class:"kui-w-full"},{default:y((()=>[h(i,{modelValue:e.textValue,"onUpdate:modelValue":t[3]||(t[3]=t=>e.textValue=t),password:!1},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),h(n,{class:"kui-w-full"},{default:y((()=>[h(d,{title:"提示信息"},{default:y((()=>[h(n,{class:"kui-w-full"},{default:y((()=>[h(i,{modelValue:e.tipsValue,"onUpdate:modelValue":t[4]||(t[4]=t=>e.tipsValue=t),"tips-message":"请输入6位数字密码","error-message":e.errorMessage,onChange:a.onChange,onConfirm:a.onConfirm},null,8,["modelValue","error-message","onChange","onConfirm"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{Q as default};
