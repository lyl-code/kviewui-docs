import{N as t}from"./index.23888770.js";const e=()=>`kUI_${Math.ceil(1e6*(new Date).getTime()).toString(36)}`,i=(e,i="",n)=>{let o=t(e);return new Promise((t=>{if(o&&o.$el&&(o=o.$el),o===window){const e=o.innerWidth,i=o.innerHeight;t({top:0,left:0,right:e,bottom:i,width:e,height:i})}o&&o.getBoundingClientRect&&t(o.getBoundingClientRect()),t({top:0,left:0,right:0,bottom:0,width:0,height:0})}))};export{e as g,i as u};
