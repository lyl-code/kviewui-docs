import{d as e,x as a,O as o,y as t,z as s,A as d,B as l,C as r,D as g,E as i,g as u,r as n,F as p,u as c,G as y,o as h,c as b,w as f,m,H as C,q as k,b as $,I as v,l as B,a as x,J as H,i as _,K as S}from"./index.6dab9b64.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";const Y=Symbol("KuiConfigProvider");function w(e,a){return d(e)?a:e}const j=o=>(t,s=e())=>{!r&&a(o,t,s)},P=j(l),T=j(o),I=j(t),K=j(s);var L=X(i({name:"kui-page",props:{bgColor:{type:String,default:""},bgClass:{type:String,default:""},disableScroll:{type:Boolean,default:!1},paddingY:{type:Number,default:44},paddingX:{type:Number,default:24},title:{type:String,default:""},mode:{type:String,default:()=>{var e,a;return null!=(a=null==(e=g(Y,void 0))?void 0:e.mode)?a:"light"}},customHeader:{type:Boolean,default:!1},grayscale:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!0},useBodySlot:{type:Boolean,default:!0}},setup(a){const{proxy:o}=e(),t=o.$theme,s=u(),d=n({width:0,height:"",pY:`${p(a.paddingY)}px`,pX:`${p(a.paddingX)}px`,headerHeight:"",statusBarHeight:"",bgColor:a.bgColor,mode:a.mode});let l;l=a.fullscreen?c().body||a.useBodySlot?s.screenHeight:0:"",d.statusBarHeight=`${s.statusBarHeight}px`,d.headerHeight="44px",l-=44,d.height=l?`${l}px`:"",d.bgColor=a.bgColor?a.bgColor:t.colors[d.mode].grey[1];return y("changeMode",(e=>{d.mode=e,"light"===d.mode&&(d.bgColor=a.bgColor?a.bgColor:t.colors[d.mode].grey[1]),"dark"===d.mode&&(d.bgColor=a.bgColor?`hsl(${t.colors.darken(d.bgColor).color[0]}, ${t.colors.darken(d.bgColor).color[1]}%, ${t.colors.darken(d.bgColor).color[2]}%)`:t.colors[d.mode].grey[1])})),{data:d,touched:()=>!0}}}),[["render",function(e,a,o,t,s,d){const l=_,r=S;return h(),b(l,{ref:"kuiPage",id:"kuiPage",style:m({filter:`grayscale(${e.grayscale?1:0})`})},{default:f((()=>[e.customHeader?(h(),b(l,{key:0,style:m({height:e.data.statusBarHeight,backgroundColor:e.data.bgColor})},{default:f((()=>[C(e.$slots,"statusBar",{},void 0,!0)])),_:3},8,["style"])):k("",!0),e.customHeader?(h(),b(l,{key:1,class:"kui-px-3 kui-flex kui-justify-center kui-items-center kui-absolute",style:m({height:e.data.headerHeight,backgroundColor:e.data.bgColor,borderWidth:"0px"})},{default:f((()=>[e.title?(h(),b(r,{key:0},{default:f((()=>[$(v(e.title),1)])),_:1})):C(e.$slots,"headerBar",{key:1},void 0,!0)])),_:3},8,["style"])):k("",!0),e.disableScroll?(h(),b(l,{key:3,class:B(["kui-page",e.bgClass]),style:m({height:`${e.data.height}`,backgroundColor:`${e.data.bgColor}`,paddingTop:"0px",paddingBottom:"0px",paddingLeft:`${e.data.pX}`,paddingRight:`${e.data.pX}`,overflow:"hidden"}),onTouchmove:a[0]||(a[0]=H((()=>{}),["prevent"])),onMousewheel:a[1]||(a[1]=H((()=>{}),["prevent"]))},{default:f((()=>[C(e.$slots,"body",{},void 0,!0)])),_:3},8,["style","class"])):(h(),b(l,{key:2,class:B(["kui-page",e.bgClass]),style:m({minHeight:`${e.data.height}`,backgroundColor:`${e.data.bgColor}`})},{default:f((()=>[x(l,{style:m({paddingTop:`${e.data.pY}`,paddingBottom:`${e.data.pY}`,paddingLeft:`${e.data.pX}`,paddingRight:`${e.data.pX}`})},{default:f((()=>[C(e.$slots,"body",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["style","class"])),C(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-f823603e"]]);export{L as _,T as a,P as b,Y as c,K as d,I as o,w as r};
