var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(o,t,r)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,l=(e,l)=>{for(var d in l||(l={}))t.call(l,d)&&i(e,d,l[d]);if(o)for(var d of o(l))r.call(l,d)&&i(e,d,l[d]);return e};import{D as d,E as a,a4 as s,r as u,M as n,L as c,G as p,d as m,f as y,a7 as h,a8 as g,o as k,c as f,w as b,a as C,m as x,b as S,I as w,q as B,Q as v,R as K,J as T,S as z,l as _,i as j}from"./index.6dab9b64.js";import{_ as R}from"./kui-text.fde31f1e.js";import{c as $,r as V}from"./kui-page.d0bd700a.js";import{_ as P}from"./kui-icons.3ffc5f33.js";import{_ as E}from"./kui-popup.77ed0e8f.js";import{_ as N}from"./plugin-vue_export-helper.21dcd24c.js";var O={show:{type:Boolean,default:!1},title:{type:String,default:""},type:{type:String,default:"default"},rightSidebar:{type:Boolean,default:!1},randomNumber:{type:Boolean,default:!1},overlay:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:""},maxlength:{type:[String,Number],default:6},idcard:{type:Boolean,default:!1},inputting:{type:Boolean,default:!1},confirmText:{type:String,default:"完成"},confirmBackgroundColor:{type:String,default:"primary"},mode:{type:String,default:()=>{var e,o;return null!=(o=null==(e=d($,void 0))?void 0:e.mode)?o:"light"}}};const L="kui-numberkeyboard";var D=N(a({name:L,props:O,emits:["update:show","update:modelValue","input","delete","close","done"],setup(e,{emit:o}){const{proxy:t}=m(),r=t.$theme,i=s(null),l=u({mode:e.mode,popupShow:e.show,randomNumber:e.randomNumber,show:e.show,topKeyCode:[1,2,3,4,5,6,7,8,9],topKeyBackgroundColor:["white","white","white","white","white","white","white","white","white"],bottomBackgroundColor:["white","white","white"],rightSidebarBottomBackgroundColor:["white","white"],rightSidebarBackgroundColor:["white",e.confirmBackgroundColor],topKeyBackgroundColorLevel:[0,0,0,0,0,0,0,0,0],bottomKeyBackgroundColorLevel:[0,0,0],keyColor:r.colors[e.mode].grey[8]}),d=(e,o=!1)=>{o?e.sort((()=>Math.random()>.5?-1:1)):l.topKeyCode=[1,2,3,4,5,6,7,8,9]},a=n((()=>{const o=u({});return o.backgroundColor=r.colors[e.mode].grey[2],o.paddingTop="15rpx",o.paddingLeft="15rpx",o})),y=o=>{l.topKeyBackgroundColor.forEach(((t,i)=>{l.topKeyBackgroundColor[i]="dark"===o?r.colors[e.mode].grey[0]:"white"})),l.bottomBackgroundColor.forEach(((t,i)=>{l.bottomBackgroundColor[i]="dark"===o?r.colors[e.mode].grey[0]:"white"})),l.rightSidebarBottomBackgroundColor.forEach(((t,i)=>{l.rightSidebarBottomBackgroundColor[i]="dark"===o?r.colors[e.mode].grey[0]:"white"})),l.rightSidebarBackgroundColor.forEach(((t,i)=>{l.rightSidebarBackgroundColor[i]=0===i?"dark"===o?r.colors[e.mode].grey[0]:"white":r.colors[e.mode][e.confirmBackgroundColor][5]})),l.keyColor=r.colors[o].grey[9]};return c((()=>[e.show,e.randomNumber]),(o=>{l.show=o[0],o[0]&&(i.value.open(),d(l.topKeyCode,!1),y(e.mode)),o[1]&&d(l.topKeyCode,!0)})),p("changeMode",(e=>{l.mode=e,y(e)})),{name:L,theme:r,state:l,popupDialog:i,rootStyle:a,commonKeyStyle:e=>{const o=u({});return o.borderRadius=`${r.size.radiusSize.xs}rpx`,"top"===e.type?o.backgroundColor=l.topKeyBackgroundColor[e.i-1]:e.rightSidebar?"right"===e.position?o.backgroundColor=l.rightSidebarBackgroundColor[e.i-1]:o.backgroundColor=l.rightSidebarBottomBackgroundColor[e.i-1]:o.backgroundColor=l.bottomBackgroundColor[e.i-1],o},keyStyle:e=>{const o=u({});return o.height="48px",o.lineHeight=1,o},closedPopup:()=>{o("update:show",!1),o("close")},onClose:()=>{e.overlay||i.value.forceClose()},onTouchstartKey:(o,t)=>{t.stopPropagation(),"top"===o.type?l.topKeyBackgroundColor[o.i-1]=r.colors[e.mode].grey[1]:o.rightSidebar?"right"===o.position?1===o.i?l.rightSidebarBackgroundColor[o.i-1]=r.colors[e.mode].grey[1]:l.rightSidebarBackgroundColor[o.i-1]=r.colors[e.mode][e.confirmBackgroundColor][6]:l.rightSidebarBottomBackgroundColor[o.i-1]=r.colors[e.mode].grey[1]:l.bottomBackgroundColor[o.i-1]=r.colors[e.mode].grey[1]},onTouchmoveKey:(e,o)=>{o.stopPropagation()},onTouchendKey:(t,r)=>{if(r.stopPropagation(),y(e.mode),"delete"===t.code)o("update:modelValue",e.modelValue.slice(0,e.modelValue.length-1)),o("delete");else if("keyboard-hide"===t.code)i.value.forceClose();else if("done"===t.code)o("done"),i.value.forceClose();else{let r=e.modelValue+t.code;e.modelValue.length<e.maxlength&&o("update:modelValue",r),o("input",`${t.code}`)}},getBottomKeyCode:o=>1===o?e.idcard?"X":"keyboard-hide":2===o?0:"delete",getRightSidebarBottomKeyCode:e=>1===e?0:2===e?".":void 0,getRightSidebarKeyCode:e=>1===e?"delete":2===e?"done":void 0}}}),[["render",function(e,o,t,r,i,d){const a=V(y("kui-text"),R),s=j,u=V(y("kui-icons"),P),n=V(y("kui-popup"),E);return h((k(),f(s,{class:_(["kui-w-full",e.name]),onClick:T(e.onClose,["stop"])},{default:b((()=>[C(n,{ref:"popupDialog","close-on-click-mask":!1,height:"0px","radius-size":"none",position:"bottom","overlay-ness":0,onClose:e.closedPopup},{default:b((()=>[e.title?(k(),f(s,{key:0,class:"kui-relative kui-pt-2 kui-pb-1",style:x({backgroundColor:e.theme.colors[e.state.mode].grey[2]})},{default:b((()=>[C(s,{class:"kui-flex kui-justify-center kui-items-center kui-box-border"},{default:b((()=>[C(s,{class:"kui-text-center"},{default:b((()=>[C(a,{color:e.state.keyColor,size:`${e.theme.size.fonts.lg}rpx`,weight:600},{default:b((()=>[S(w(e.title),1)])),_:1},8,["color","size"])])),_:1})])),_:1}),C(s,{class:"kui-absolute kui-mr-3",style:{right:"5rpx",bottom:"10rpx"},onClick:e.onClose},{default:b((()=>[C(a,{color:e.confirmBackgroundColor},{default:b((()=>[S("完成")])),_:1},8,["color"])])),_:1},8,["onClick"])])),_:1},8,["style"])):B("",!0),e.inputting?(k(),f(s,{key:1,class:"kui-relative kui-pt-2 kui-pb-1",style:x({backgroundColor:e.theme.colors[e.state.mode].grey[2]})},{default:b((()=>[C(s,{class:"kui-flex kui-justify-center kui-items-center kui-box-border"},{default:b((()=>[C(s,{class:"kui-text-center"},{default:b((()=>[C(a,{color:e.state.keyColor,size:`${e.theme.size.fonts.lg}rpx`,weight:600},{default:b((()=>[S("正在输入："+w(e.modelValue),1)])),_:1},8,["color","size"])])),_:1})])),_:1})])),_:1},8,["style"])):B("",!0),C(s,{class:"kui-h-full kui-w-full kui-flex kui-box-border",style:x(e.rootStyle)},{default:b((()=>[C(s,{class:"kui-w-full kui-box-border",style:x({width:""+(e.rightSidebar?"75%":"100%")})},{default:b((()=>[(k(!0),v(z,null,K(e.state.topKeyCode,(o=>(k(),f(s,{key:o,class:"kui-w-full kui-flex kui-box-border",style:{width:"33.3%",display:"inline-block","padding-right":"15rpx","padding-bottom":"15rpx"}},{default:b((()=>[C(s,{class:"kui-w-full kui-h-full kui-flex kui-flex-col kui-items-center kui-justify-center",style:x(l(l({},e.keyStyle({i:o,type:"top"})),e.commonKeyStyle({i:o,type:"top"}))),onTouchstart:T((t=>e.onTouchstartKey({i:o,code:o,type:"top",rightSidebar:!1},t)),["prevent","stop"]),onTouchmove:T((t=>e.onTouchmoveKey({i:o,code:o,type:"top",rightSidebar:!1},t)),["stop","prevent"]),onTouchend:T((t=>e.onTouchendKey({i:o,code:o,type:"top",rightSidebar:!1},t)),["stop","prevent"])},{default:b((()=>[C(a,{mode:e.state.mode,color:e.state.keyColor,size:`${e.theme.size.fonts["3xl"]}rpx`},{default:b((()=>[S(w(o),1)])),_:2},1032,["mode","color","size"])])),_:2},1032,["style","onTouchstart","onTouchmove","onTouchend"])])),_:2},1024)))),128)),e.rightSidebar?(k(),v(z,{key:1},K(2,(o=>C(s,{class:"kui-w-full kui-flex kui-box-border",style:{width:"50%",display:"inline-block","padding-right":"15rpx","padding-bottom":"15rpx"}},{default:b((()=>[C(s,{class:"kui-w-full kui-h-full kui-flex kui-flex-col kui-items-center kui-justify-center",style:x(l(l({},e.keyStyle({i:o,code:e.getRightSidebarBottomKeyCode(o),type:"bottom"})),e.commonKeyStyle({i:o,type:"bottom",rightSidebar:!0,position:"bottom"}))),onTouchstart:T((t=>e.onTouchstartKey({i:o,code:e.getRightSidebarBottomKeyCode(o),type:"bottom",rightSidebar:!0,position:"bottom"},t)),["prevent","stop"]),onTouchmove:T((t=>e.onTouchmoveKey({i:o,code:e.getRightSidebarBottomKeyCode(o),type:"bottom",rightSidebar:!0,position:"bottom"},t)),["stop","prevent"]),onTouchend:T((t=>e.onTouchendKey({i:o,code:e.getRightSidebarBottomKeyCode(o),type:"bottom",rightSidebar:!0,position:"bottom"},t)),["stop","prevent"])},{default:b((()=>[1===o?(k(),f(a,{key:0,mode:e.state.mode,color:e.state.keyColor,size:`${e.theme.size.fonts["3xl"]}rpx`},{default:b((()=>[S("0")])),_:1},8,["mode","color","size"])):B("",!0),2===o?(k(),f(a,{key:1,mode:e.state.mode,color:e.state.keyColor,size:`${e.theme.size.fonts["3xl"]}rpx`},{default:b((()=>[S(".")])),_:1},8,["mode","color","size"])):B("",!0)])),_:2},1032,["style","onTouchstart","onTouchmove","onTouchend"])])),_:2},1024))),64)):(k(),v(z,{key:0},K(3,(o=>C(s,{key:o,class:"kui-w-full kui-flex kui-box-border",style:{width:"33.3%",display:"inline-block","padding-right":"15rpx","padding-bottom":"15rpx"}},{default:b((()=>[C(s,{class:"kui-w-full kui-h-full kui-flex kui-flex-col kui-items-center kui-justify-center",style:x(l(l({},e.keyStyle({i:o,code:e.getBottomKeyCode(o),type:"bottom"})),e.commonKeyStyle({i:o,type:"bottom",rightSidebar:!1}))),onTouchstart:T((t=>e.onTouchstartKey({i:o,code:e.getBottomKeyCode(o),type:"bottom",rightSidebar:!1},t)),["prevent","stop"]),onTouchmove:T((t=>e.onTouchmoveKey({i:o,code:e.getBottomKeyCode(o),type:"bottom",rightSidebar:!1},t)),["stop","prevent"]),onTouchend:T((t=>e.onTouchendKey({i:o,code:e.getBottomKeyCode(o),type:"bottom",rightSidebar:!1},t)),["stop","prevent"])},{default:b((()=>[1!==o||e.idcard?B("",!0):(k(),f(u,{key:0,mode:e.mode,color:e.state.keyColor,type:"keyboard_hide",size:e.theme.size.fonts["3xl"]},null,8,["mode","color","size"])),1===o&&e.idcard?(k(),f(a,{key:1,mode:e.state.mode,color:e.state.keyColor,size:`${e.theme.size.fonts["3xl"]}rpx`},{default:b((()=>[S("X")])),_:1},8,["mode","color","size"])):B("",!0),2===o?(k(),f(a,{key:2,mode:e.state.mode,color:e.state.keyColor,size:`${e.theme.size.fonts["3xl"]}rpx`},{default:b((()=>[S("0")])),_:1},8,["mode","color","size"])):B("",!0),3===o?(k(),f(u,{key:3,mode:e.mode,color:e.state.keyColor,type:"backspace",size:e.theme.size.fonts["3xl"]},null,8,["mode","color","size"])):B("",!0)])),_:2},1032,["style","onTouchstart","onTouchmove","onTouchend"])])),_:2},1024))),64))])),_:1},8,["style"]),e.rightSidebar?(k(),f(s,{key:0,class:"kui-w-full kui-h-full kui-box-border",style:{width:"25%","padding-right":"15rpx","line-height":"1"}},{default:b((()=>[(k(),v(z,null,K(2,(o=>C(s,{class:"kui-w-full kui-box-border",style:{"padding-bottom":"15rpx"}},{default:b((()=>[C(s,{class:"kui-w-full kui-flex kui-flex-col kui-items-center kui-justify-center kui-box-border",style:x([{height:"103px"},l({},e.commonKeyStyle({i:o,type:"right",rightSidebar:!0,position:"right"}))]),onTouchstart:T((t=>e.onTouchstartKey({i:o,code:e.getRightSidebarKeyCode(o),rightSidebar:!0,position:"right"},t)),["stop","prevent"]),onTouchmove:T((t=>e.onTouchmoveKey({i:o,code:e.getRightSidebarKeyCode(o),rightSidebar:!0,position:"right"},t)),["stop","prevent"]),onTouchend:T((t=>e.onTouchendKey({i:o,code:e.getRightSidebarKeyCode(o),rightSidebar:!0,position:"right"},t)),["stop","prevent"])},{default:b((()=>[1===o?(k(),f(u,{key:0,mode:e.mode,color:e.state.keyColor,type:"backspace",size:e.theme.size.fonts["4xl"]},null,8,["mode","color","size"])):B("",!0),2===o?(k(),f(a,{key:1,mode:e.state.mode,color:"white",size:`${e.theme.size.fonts.xl}rpx`},{default:b((()=>[S(w(e.confirmText),1)])),_:1},8,["mode","size"])):B("",!0)])),_:2},1032,["style","onTouchstart","onTouchmove","onTouchend"])])),_:2},1024))),64))])),_:1})):B("",!0)])),_:1},8,["style"])])),_:1},8,["onClose"])])),_:1},8,["class","onClick"])),[[g,e.state.show]])}]]);export{D as _};