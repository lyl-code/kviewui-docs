var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{_ as u}from"./kui-text.130ddde7.js";import{r as o,_ as s,o as i,c as n,w as d,a as c,b as f,n as p,f as k,i as _,d as y}from"./index.23888770.js";import{r as m,_ as b}from"./kui-page.40f10ef7.js";import{_ as v}from"./kui-button.00b140d6.js";import{_ as x}from"./kui-container.d7836cf8.js";import{_ as F}from"./kui-space.43763e84.js";import{_ as g}from"./kui-overlay.d1291bf8.js";import{_ as h}from"./kui-config-provider.9462962c.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./kui-spin.556d3440.js";import"./kui-icons.7ba34cc0.js";var w=j({setup(e,u){const{proxy:i}=y(),n=o({overlayNess:.6,vnode:'\n\t\t\t\t\t<div class="kui-h-20 kui-w-60 kui-bg-white kui-rounded kui-flex kui-justify-center kui-items-center">\n\t\t\t\t\t\t<span class="kui-text-red-600">红色富文本内容</span>\n\t\t\t\t\t\t<span class="kui-text-blue-600">蓝色富文本内容</span>\n\t\t\t\t\t</div>\n\t\t\t\t'});return((e,u)=>{for(var o in u||(u={}))a.call(u,o)&&r(e,o,u[o]);if(t)for(var o of t(u))l.call(u,o)&&r(e,o,u[o]);return e})({showOverlay:(e=.6,t="")=>{p((()=>{n.overlayNess=e,t?"content"===t?i.$refs["overlay-content"].open():"richtext"===t&&i.$refs["overlay-richtext"].open():i.$refs.overlay.open()}))}},s(n))}},[["render",function(e,t,a,l,r,o){const s=m(k("kui-text"),u),p=m(k("kui-button"),v),y=m(k("kui-container"),x),j=_,w=m(k("kui-space"),F),O=m(k("kui-overlay"),g),C=m(k("kui-config-provider"),h),z=m(k("kui-page"),b);return i(),n(z,{"custom-header":!1},{body:d((()=>[c(C,{"font-size":"16px",color:"#666"},{default:d((()=>[c(j,{class:"kui-mt-3"},{default:d((()=>[c(s,null,{default:d((()=>[f("基本用法")])),_:1}),c(y,{radius:"10px","background-color":"#FFFFFF"},{default:d((()=>[c(p,{type:"primary",block:"",onClick:t[0]||(t[0]=e=>l.showOverlay())},{default:d((()=>[f("显示遮罩层")])),_:1})])),_:1})])),_:1}),c(j,{class:"kui-mt-5"},{default:d((()=>[c(s,null,{default:d((()=>[f("自定义遮罩透明度")])),_:1}),c(y,{radius:"10px","background-color":"#FFFFFF"},{default:d((()=>[c(p,{type:"primary",block:"",onClick:t[1]||(t[1]=e=>l.showOverlay(.4))},{default:d((()=>[f("显示遮罩层")])),_:1})])),_:1})])),_:1}),c(j,{class:"kui-mt-5"},{default:d((()=>[c(s,null,{default:d((()=>[f("自定义插槽内容")])),_:1}),c(y,{radius:"10px","background-color":"#FFFFFF"},{default:d((()=>[c(p,{type:"primary",block:"",onClick:t[2]||(t[2]=e=>l.showOverlay(.6,"content"))},{default:d((()=>[f("显示遮罩层")])),_:1})])),_:1})])),_:1}),c(j,{class:"kui-mt-5"},{default:d((()=>[c(s,null,{default:d((()=>[f("自定义富文本内容")])),_:1}),c(y,{radius:"10px","background-color":"#FFFFFF"},{default:d((()=>[c(p,{type:"primary",block:"",onClick:t[3]||(t[3]=e=>l.showOverlay(.6,"richtext"))},{default:d((()=>[f("显示遮罩层")])),_:1})])),_:1})])),_:1}),c(j,{class:"kui-mt-5"},{default:d((()=>[c(s,null,{default:d((()=>[f("区间遮罩用法")])),_:1}),c(O,{"radius-size":"sm",closeOnClickMask:!1,show:!0},{default:d((()=>[c(j,{class:"kui-mt-0"},{default:d((()=>[c(j,{class:"kui-mt-3 kui-p-3 kui-box-border"},{default:d((()=>[c(w,{gap:[40,20]},{default:d((()=>[c(p,{type:"primary"},{default:d((()=>[f("主要按钮")])),_:1}),c(p,{type:"info"},{default:d((()=>[f("信息按钮")])),_:1}),c(p,null,{default:d((()=>[f("默认按钮")])),_:1}),c(p,{type:"success"},{default:d((()=>[f("成功按钮")])),_:1}),c(p,{type:"warning"},{default:d((()=>[f("警告按钮")])),_:1}),c(p,{type:"danger"},{default:d((()=>[f("危险按钮")])),_:1}),c(p,{type:"danger","background-color":"orange","text-color":"black"},{default:d((()=>[f("自定义按钮")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(j,{class:"kui-mt-5"},{default:d((()=>[c(s,null,{default:d((()=>[f("磨砂玻璃遮罩用法")])),_:1}),c(O,{"radius-size":"sm",closeOnClickMask:!1,blur:"","overlay-ness":.4,show:!0},{default:d((()=>[c(j,{class:"kui-mt-0"},{default:d((()=>[c(j,{class:"kui-mt-3 kui-p-3 kui-box-border"},{default:d((()=>[c(w,{gap:[40,20]},{default:d((()=>[c(p,{type:"primary"},{default:d((()=>[f("主要按钮")])),_:1}),c(p,{type:"info"},{default:d((()=>[f("信息按钮")])),_:1}),c(p,null,{default:d((()=>[f("默认按钮")])),_:1}),c(p,{type:"success"},{default:d((()=>[f("成功按钮")])),_:1}),c(p,{type:"warning"},{default:d((()=>[f("警告按钮")])),_:1}),c(p,{type:"danger"},{default:d((()=>[f("危险按钮")])),_:1}),c(p,{type:"danger","background-color":"orange","text-color":"black"},{default:d((()=>[f("自定义按钮")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["overlay-ness"])])),_:1})])),_:1}),c(O,{ref:"overlay","overlay-ness":e.overlayNess},null,8,["overlay-ness"]),c(O,{"z-index":9999,ref:"overlay-content"},{content:d((()=>[c(j,{class:"kui-w-full kui-h-full kui-flex kui-justify-center kui-items-center"},{default:d((()=>[c(y,{height:"100px",width:"300px",radius:"10px","background-color":"#FFFFFF"},{default:d((()=>[c(j,{class:"kui-text-center kui-h-full kui-flex kui-flex-col kui-justify-center"},{default:d((()=>[c(s,null,{default:d((()=>[f("自定义插槽内容")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},512),c(O,{ref:"overlay-richtext",vnode:e.vnode,"vnode-center":""},null,8,["vnode"])])),_:1})}]]);export{w as default};