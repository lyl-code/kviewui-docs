import{E as e,r as t,h as l,d as s,n as a,p as i,o,c as u,w as r,a as d,m as c,H as n,b as f,I as p,K as m,i as h}from"./index.23888770.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";var y=g(e({name:"kui-cell-group",props:{title:{type:String,default:""},cellTitleWeight:{type:Number,default:0},cellRadius:{type:Number,default:0},desc:{type:String,default:""},type:{type:String,default:"normal"}},options:{virtualHost:!0},setup(e,o){const{proxy:u}=s(),r=u.$theme,d=t({color:r.colors.light.grey[6]}),c=t([]);return l((()=>{a((()=>{c&&c.forEach(((t,l)=>{e.cellTitleWeight>0&&(t.titleWeight=e.cellTitleWeight),e.cellRadius>0&&(t.topRadius=t.bottomRadius=e.cellRadius),"normal"==e.type?(t.topRadius=l>0?0:t.topRadius,c.length>1&&c.length<3?t.isBorder=0==l:c.length>=3&&(t.isBorder=l>=0&&l<c.length-1)):"space"==e.type&&(t.marginBottom=30)}))}))})),i("cell-group",{childrens:c}),{theme:r,data:d}}}),[["render",function(e,t,l,s,a,i){const g=m,y=h;return o(),u(y,{class:"kui-flex kui-flex-col kui-flex-1 kui-w-full"},{default:r((()=>[d(y,{class:"kui-flex kui-flex-col kui-w-full"},{default:r((()=>[d(y,{class:"",style:c({color:e.data.color,fontSize:`${e.theme.size.fonts.lg}${e.theme.size.fontUnit}`})},{default:r((()=>[n(e.$slots,"title",{},(()=>[d(g,null,{default:r((()=>[f(p(e.title),1)])),_:1})]))])),_:3},8,["style"]),d(y,{class:"kui-mt-1",style:c({color:e.data.color,fontSize:`${e.theme.size.fonts.base}${e.theme.size.fontUnit}`})},{default:r((()=>[n(e.$slots,"desc",{},(()=>[d(g,null,{default:r((()=>[f(p(e.desc),1)])),_:1})]))])),_:3},8,["style"])])),_:3}),d(y,{class:"kui-mt-2"},{default:r((()=>[n(e.$slots,"default")])),_:3})])),_:3})}]]);export{y as _};
