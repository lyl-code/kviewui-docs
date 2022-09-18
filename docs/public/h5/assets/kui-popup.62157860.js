import{D as o,X as e,E as i,g as t,r as s,u as a,G as l,h as n,d as c,f as r,o as p,c as d,w as u,a as k,l as f,m as h,q as g,H as y,i as m}from"./index.c8f6647b.js";import{_ as C}from"./kui-icons.bada60f5.js";import{c as S,r as z}from"./kui-page.c7c47edb.js";import{_ as b}from"./kui-overlay.0a180904.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";var x=w(i({name:"kui-popup",props:{width:{type:String,default:""},height:{type:String,default:""},position:{type:String,default:"center"},closeOnClickMask:{type:Boolean,default:!0},radiusSize:{type:String,default:"base"},show:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},closeIconPosition:{type:String,default:"right"},closeIconType:{type:String,default:"cancel"},closeIconColor:{type:String,default:"rgba(0,0,0,0.5)"},closeIconSize:{type:Number,default:40},mode:{type:String,default:()=>{var e,i;return null!=(i=null==(e=o(S,void 0))?void 0:e.mode)?i:"light"}},overlayNess:{type:Number,default:e}},emits:["open","close","click-close-icon"],options:{virtualHost:!0},setup(o,e){const{proxy:i}=c(),r=i.$theme,p=t(),d=s({width:"",height:"",popupContainerHeight:"100%",popupContainerWidth:"100%",position:o.position,classes:"",positionClass:"",containerClass:"",isMaskClick:o.closeOnClickMask,radiusSize:r.size.radiusSize[o.radiusSize],topStyle:"",useContentSlot:a().content,backgroundColor:"white",mode:o.mode}),u=o=>(d.containerClass=o,"center"==o?(d.positionClass="kui-items-center kui-justify-center",console.log(d.topStyle),"scale-in-center"):`slide-in-${o}`),k=o=>"center"==o?"scale-out-center":`slide-out-${o}`,f=()=>{i.$refs["popup-shade"].changeMaskClick(!0),d.classes=k(o.position),setTimeout((()=>{i.$refs["popup-shade"].close(),e.emit("close")}),200)};d.radiusSize=r.size.radiusSize[o.radiusSize];const h=()=>{"light"===d.mode&&(d.backgroundColor="white"),"dark"===d.mode&&(d.backgroundColor=r.colors[d.mode].grey[1])};return h(),l("changeMode",(o=>{d.mode=o,h()})),n((()=>{if("center"==d.position)return!1;"left"!=d.position&&"right"!=d.position||(d.width=p.windowWidth/2+"px",d.height="100%"),"top"!=d.position&&"bottom"!=d.position||(d.height=o.height?o.height:p.windowHeight/3+"px",d.width=`${p.windowWidth}px`),"bottom"==d.position||d.position})),{data:d,positionInAnimate:u,positionOutAnimate:k,changeRadiusSize:o=>{d.radiusSize=r.size.radiusSize[o]},open:()=>{i.$refs["popup-shade"].changeMaskClick(!1),i.$refs["popup-shade"].open(),d.classes=u(o.position),e.emit("open")},close:()=>{o.closeOnClickMask&&f()},onClose:()=>{console.log("close")},onClickCloseIcon:()=>{e.emit("click-close-icon")},forceClose:f,proxy:i}}}),[["render",function(o,e,i,t,s,a){const l=z(r("kui-icons"),C),n=m,c=z(r("kui-overlay"),b);return p(),d(n,{class:"kui-popup"},{default:u((()=>[k(c,{onClose:o.close,"close-on-click-mask":o.data.isMaskClick,"vnode-center":!1,ref:"popup-shade",overlayNess:o.overlayNess},{content:u((()=>[k(n,{class:f(["kui-w-full kui-h-full",[o.data.classes]])},{default:u((()=>[k(n,{class:f(["popup-content kui-fixed kui-py-0 kui-box-border",[o.data.containerClass,"top"===o.data.position&&o.data.radiusSize?"kui-pb-4":""]]),style:h({width:o.data.width,minHeight:o.data.height,backgroundColor:o.data.backgroundColor,borderTopLeftRadius:`${"bottom"==o.data.position||"center"==o.data.position?o.data.radiusSize:0}rpx`,borderTopRightRadius:`${"bottom"==o.data.position||"center"==o.data.position?o.data.radiusSize:0}rpx`,borderBottomLeftRadius:`${"top"==o.data.position||"center"==o.data.position?o.data.radiusSize:0}rpx`,borderBottomRightRadius:`${"top"==o.data.position||"center"==o.data.position?o.data.radiusSize:0}rpx`})},{default:u((()=>[o.showIcon?(p(),d(n,{key:0},{default:u((()=>["right"==o.closeIconPosition?(p(),d(n,{key:0,class:"kui-w-full kui-flex kui-justify-end"},{default:u((()=>[k(n,{class:"kui-relative",style:{top:"30rpx",right:"30rpx"},onClick:o.onClickCloseIcon},{default:u((()=>[k(l,{type:o.closeIconType,color:o.closeIconColor,size:o.closeIconSize},null,8,["type","color","size"])])),_:1},8,["onClick"])])),_:1})):g("",!0),"left"==o.closeIconPosition?(p(),d(n,{key:1,class:"kui-w-full kui-flex"},{default:u((()=>[k(n,{class:"kui-relative",style:{top:"30rpx",left:"30rpx"},onClick:o.onClickCloseIcon},{default:u((()=>[k(l,{type:o.closeIconType,color:o.closeIconColor,size:o.closeIconSize},null,8,["type","color","size"])])),_:1},8,["onClick"])])),_:1})):g("",!0)])),_:1})):g("",!0),y(o.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),k(n,null,{default:u((()=>[y(o.$slots,"content",{},void 0,!0)])),_:3})])),_:3},8,["class"])])),_:3},8,["onClose","close-on-click-mask","overlayNess"])])),_:3})}],["__scopeId","data-v-78967481"]]);export{x as _};