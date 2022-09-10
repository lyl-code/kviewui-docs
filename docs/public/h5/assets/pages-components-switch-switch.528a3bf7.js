import{_ as t}from"./kui-switch.4a6e9dff.js";import{r as e,o as a,c as s,w as o,a as c,f as l,i as n}from"./index.c8f6647b.js";import{r as i,_ as u}from"./kui-page.c7c47edb.js";import{_ as d}from"./kui-cell.c8b2796c.js";import{_ as h}from"./kui-cell-group.40568d88.js";import{_ as m}from"./kui-space.f5957e2d.js";import{_ as r}from"./kui-toast.0ea41e14.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import"./kui-icons.bada60f5.js";import"./kui-animation.f9104092.js";import"./kui-text.4998edd2.js";var f=k({setup(){const t={state:e({show:!1,content:""})},a={state:e({checked:!0,activeText:"是",inactiveText:"否"}),methods:{onChange(e){t.state.content=JSON.stringify(e),t.state.show=!0}}},s={state:e({checked:!0}),methods:{onChange(e){console.log(`async:${e}`);const a=e?"打开":"关闭";t.state.content=`2s后开关${a}`,t.state.show=!0,setTimeout((()=>{s.state.checked=e}),2e3)}}};return{toastState:t,baseState:a,asyncState:s}}},[["render",function(e,k,f,p,_,g){const S=i(l("kui-switch"),t),b=i(l("kui-cell"),d),w=i(l("kui-cell-group"),h),V=i(l("kui-space"),m),v=n,x=i(l("kui-page"),u),j=i(l("kui-toast"),r);return a(),s(v,{class:"kui-w-full kui-h-full"},{default:o((()=>[c(x,{"custom-header":!1},{body:o((()=>[c(v,{class:"kui-w-full kui-h-full"},{default:o((()=>[c(V,{gap:[30,0],direction:"column"},{default:o((()=>[c(w,{title:"基本用法"},{default:o((()=>[c(b,{"show-right-icon":!1,"click-status":!1},{content:o((()=>[c(S,{ref:"baseSwitch",modelValue:p.baseState.state.checked,"onUpdate:modelValue":k[0]||(k[0]=t=>p.baseState.state.checked=t)},null,8,["modelValue"])])),_:1})])),_:1}),c(w,{title:"禁用状态"},{default:o((()=>[c(b,{"show-right-icon":!1,"click-status":!1},{content:o((()=>[c(S,{modelValue:p.baseState.state.checked,"onUpdate:modelValue":k[1]||(k[1]=t=>p.baseState.state.checked=t),disabled:!0},null,8,["modelValue"])])),_:1})])),_:1}),c(w,{title:"加载状态"},{default:o((()=>[c(b,{"show-right-icon":!1,"click-status":!1},{content:o((()=>[c(S,{modelValue:p.baseState.state.checked,"onUpdate:modelValue":k[2]||(k[2]=t=>p.baseState.state.checked=t),loading:!0},null,8,["modelValue"])])),_:1})])),_:1}),c(w,{title:"change监听"},{default:o((()=>[c(b,{"show-right-icon":!1,"click-status":!1},{content:o((()=>[c(S,{modelValue:p.baseState.state.checked,"onUpdate:modelValue":k[3]||(k[3]=t=>p.baseState.state.checked=t),onChange:p.baseState.methods.onChange},null,8,["modelValue","onChange"])])),_:1})])),_:1}),c(w,{title:"异步控制"},{default:o((()=>[c(b,{"show-right-icon":!1,"click-status":!1},{content:o((()=>[c(S,{"model-value":p.asyncState.state.checked,onChange:p.asyncState.methods.onChange},null,8,["model-value","onChange"])])),_:1})])),_:1}),c(w,{title:"自定义颜色"},{default:o((()=>[c(b,{"show-right-icon":!1,"click-status":!1},{content:o((()=>[c(S,{"active-color":"#FF6600",modelValue:p.baseState.state.checked,"onUpdate:modelValue":k[4]||(k[4]=t=>p.baseState.state.checked=t)},null,8,["modelValue"])])),_:1})])),_:1}),c(w,{title:"文字描述"},{default:o((()=>[c(b,{"show-right-icon":!1,"click-status":!1},{content:o((()=>[c(S,{"active-text":p.baseState.state.activeText,"inactive-text":p.baseState.state.inactiveText,modelValue:p.baseState.state.checked,"onUpdate:modelValue":k[5]||(k[5]=t=>p.baseState.state.checked=t)},null,8,["active-text","inactive-text","modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(j,{show:p.toastState.state.show,"onUpdate:show":k[6]||(k[6]=t=>p.toastState.state.show=t),content:p.toastState.state.content},null,8,["show","content"])])),_:1})}]]);export{f as default};
