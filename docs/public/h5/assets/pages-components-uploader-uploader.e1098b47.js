var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,r=(e,l)=>{for(var t in l||(l={}))a.call(l,t)&&s(e,t,l[t]);if(o)for(var t of o(l))u.call(l,t)&&s(e,t,l[t]);return e};import{D as i,E as d,a4 as n,r as c,M as m,d as p,af as f,ag as h,s as k,f as g,o as w,Q as y,a as x,w as b,S as V,R as v,c as _,m as S,b as U,I as C,H as j,q as z,l as I,v as O,i as P,_ as D,n as L,ah as F,ai as R}from"./index.23888770.js";import{_ as E}from"./kui-icons.7ba34cc0.js";import{c as B,r as N,_ as $}from"./kui-page.40f10ef7.js";import{_ as T}from"./kui-text.130ddde7.js";import{_ as X}from"./kui-overlay.d1291bf8.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as q}from"./kui-cell-group.81ac2330.js";import{_ as Q}from"./kui-button.00b140d6.js";import{_ as H}from"./kui-space.43763e84.js";import{_ as M}from"./kui-toast.fb6a3222.js";import{_ as J}from"./kui-dialog.76172c51.js";import"./kui-spin.556d3440.js";import"./kui-animation.9b475c9e.js";import"./kui-popup.0967d527.js";var G={modelValue:{type:Array,default:[]},name:{type:String,default:"file"},accept:{type:String,default:"*"},url:{type:String,default:""},previewImage:{type:Boolean,default:!0},deleteable:{type:Boolean,default:!0},method:{type:String,default:"post"},uploadIconSize:{type:[Number,String],default:200},uploadIcon:{type:String,default:""},previewFullImage:{type:Boolean,default:!0},capture:{type:String,default:""},maxSize:{type:[Number,String],default:Number.MAX_VALUE},maxCount:{type:[Number,String],default:9},headers:{type:Object,default:{}},formData:{type:Object,default:{}},xhrCode:{type:[Number,String],default:200},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},timeout:{type:[Number,String],default:3e4},beforeUpload:{type:Function,default:null},beforeDelete:{type:Function,default:(e,l)=>!0},mode:{type:String,default:()=>{var e,l;return null!=(l=null==(e=i(B,void 0))?void 0:e.mode)?l:"light"}},sizeType:{type:Array,default:()=>["original","compressed"]},sourceType:{type:Array,default:()=>["album","camera"]},crop:{type:Object,default:null},beforeXhrUpload:{type:Function,default:null},autoUpload:{type:Boolean,default:!0},id:{type:[String,Number],default:""},xhrCodeName:{type:String,default:""}};class K{}class W{constructor(){this.url="",this.name="file",this.fileType="image",this.method="post",this.xhrCode=200,this.timeout=3e4,this.headers={},this.withCredentials=!1}}class Y{constructor(e){this.options=e}xhrUpload(){var e;const l=this.options;console.log(l);const t=new XMLHttpRequest;if(t.timeout=l.timeout,t.upload){t.upload.addEventListener("progress",(e=>{var t;null==(t=l.onProgress)||t.call(l,e,l)}),!1),t.onreadystatechange=()=>{var e,o;t.readyState===XMLHttpRequest.DONE&&(t.status===l.xhrCode?null==(e=l.onSuccess)||e.call(l,t.responseText,l):null==(o=l.onFailure)||o.call(l,t.responseText,l))},t.withCredentials=l.withCredentials,t.open(l.method,l.url,!0);for(const[e,o]of Object.entries(l.headers))t.setRequestHeader(e,o);null==(e=l.onStart)||e.call(l,l),l.beforeXhrUpload?l.beforeXhrUpload(t,l):(console.log(l.formData),t.send(l.formData))}else console.warn("您的浏览器不支持XMLHttpRequest")}upload(e){var l;const t=this.options;if(t.beforeXhrUpload)t.beforeXhrUpload(e,t);else{const o=e({url:t.url,filePath:t.filePath,fileType:t.fileType,header:r({},t.headers),formData:t.formData,timeout:t.timeout,name:t.name,success:e=>{var l,o,a;if(console.log(e),200===e.statusCode||201===e.statusCode){let a=JSON.parse(e.data),u=t.xhrCodeName?a[t.xhrCodeName]:e.statusCode;t.xhrCode==u?null==(l=t.onSuccess)||l.call(t,e,t):null==(o=t.onFailure)||o.call(t,e,t)}else null==(a=t.onFailure)||a.call(t,e,t)},fail:e=>{var l;null==(l=t.onFailure)||l.call(t,e,t)}});null==(l=t.onStart)||l.call(t,t),o.onProgressUpdate((e=>{var l;null==(l=t.onProgress)||l.call(t,e,t),console.log("上传进度",e.progress),console.log("已经上传的数据长度",e.totalBytesSent),console.log("预期需要上传的数据总长度",e.totalBytesExpectedToSend)}))}}}const Z=(e,l)=>{if(!(null==e?void 0:e.length))return e;if(2*e.length<=l)return e;let t=0,o="";for(let a=0;a<e.length;a++)if(o+=e.charAt(a),e.charCodeAt(a)>128){if(t+=2,t>=l)return o.substring(0,o.length-1)+"..."}else if(t+=1,t>=l)return o.substring(0,o.length-2)+"...";return o},ee=async(e,l=.6)=>{let t=e,o=new FileReader;o.readAsDataURL(t);return new Promise(((e,a)=>{o.onload=o=>{let a=new Image;a.src=o.target.result,a.onload=()=>{const o=document.createElement("canvas"),u=o.getContext("2d");o.width=a.width,o.height=a.height,u.clearRect(0,0,a.width,a.height),u.fillStyle="#FFF",u.fillRect(0,0,o.width,o.height),u.drawImage(a,0,0,a.width,a.height),((e,l,t)=>new Promise((o=>{e.toBlob((e=>o(e)),l,t)})))(o,"image/jpeg",l).then((l=>{const o=new File([l],t.name);Object.defineProperty(o,"path",{get:()=>(e=>(window.URL||window.webkitURL).createObjectURL(e))(o)}),e(o)}))}}}))};var le=A(d({name:"kui-uploader",props:G,emits:["oversize","start","progress","success","update:modelValue","failed","change","delete","item-click"],setup(e,{emit:l}){const{proxy:t}=p(),o=t.$theme,a=n(null),u=c({mode:e.mode,fileList:(l=>{let t=l.length;return t>e.maxCount&&l.splice(l.length-(t-+e.maxCount)),l.forEach((e=>{e.error=!1})),l})(e.modelValue),uploadQueue:[]}),s=`${o.size.radiusSize.xs}rpx`,i=m((()=>{const l=c({});return l.width=l.height=`${e.uploadIconSize}rpx`,l.backgroundColor=o.colors[u.mode].grey[1],l.marginRight=l.marginBottom="30rpx",l.borderRadius=s,l.opacity=e.disabled?.7:1,l})),d=m((()=>{const l=c({});return l.width=l.height=`${e.uploadIconSize}rpx`,l.borderRadius=s,l})),g=m((()=>{const e=c({});return e.backgroundColor=`rgba(0,0,0,${o.size.shadeOpenness})`,e.borderRadius=s,e})),w=(e=-1)=>{e>-1?u.uploadQueue.slice(e,1):u.uploadQueue=[]},y=t=>{const o=+e.maxSize,a=+e.maxCount,s=[];t=t.filter((e=>!(e.size>o)||(s.push(e),!1))),s.length&&l("oversize",s);let r=t.length+u.fileList.length;return r>a&&t.slice(t.length-(r-a)),t},x=t=>{t.forEach(((t,o)=>{let a=t.type;const s=c(new K);var r;!a&&(r=t.path,/\.(png|jpeg|jpg|webp|gif)$/i.test(r))&&(a="image"),s.path=t.path,s.name=t.name,s.status="ready",s.message="等待上传",s.type=a,s.id=e.id;const i=new FormData;for(const[l,u]of Object.entries(e.formData))i.append(l,u);i.append(e.name,t.originalFileObj),s.name=t.name,s.type=t.type,s.formData=i,e.previewImage&&(s.url=t.path),u.fileList.push(s),((t,o)=>{const a=new W;a.name=e.name,a.url=e.url,a.fileType=t.type,a.formData=t.formData,a.timeout=+e.timeout,a.method=e.method,a.xhrCode=+e.xhrCode,a.headers=e.headers,a.filePath=t.path,a.beforeXhrUpload=e.beforeXhrUpload,a.id=t.id,a.xhrCodeName=e.xhrCodeName,a.onStart=e=>{t.status="ready",t.message="准备上传",console.log("等待上传中"),w(o),l("start",e)},a.onProgress=(e,o)=>{t.status="uploading",t.message="正在上传...",t.progress=e.progress,console.log("正在上传..."),l("progress",{event:e,option:o,progress:t.progress})},a.onSuccess=(e,o)=>{t.status="success",t.message="上传成功",console.log("上传成功"),l("success",{data:e,response:e,option:o,fileItem:t}),l("update:modelValue",u.fileList)},a.onFailure=(e,o)=>{t.status="failed",t.message="上传失败",console.log("上传失败"),l("failed",{data:e,response:e,option:o,fileItem:t})};let s=new Y(a);e.autoUpload?s.upload(h):u.uploadQueue.push(new Promise(((e,l)=>{e(s)})))})(s,o)}))},b=t=>{const{tempFilePaths:o,tempFiles:a}=t;if(e.beforeUpload)e.beforeUpload(a).then((e=>{console.log(e);const l=y(e);x(l)}));else{const e=y(a);x(e)}l("change",r({},u.fileList))},V=t=>{u.fileList.splice(t,1),l("delete",r({index:t,id:e.id},u.fileList))};return{name:"kui-uploader",theme:o,ellipsis:Z,uploadContainerStyle:i,imageStyle:d,del:V,overlayStyle:g,state:u,loadImageError:e=>{console.log(u.fileList),u.fileList[e].error=!0,l("update:modelValue",u.fileList)},submit:()=>{Promise.all(u.uploadQueue).then((e=>{e.forEach((e=>e.upload(h)))}))},onChooseImage:l=>{e.disabled||f({count:+e.maxCount-e.modelValue.length,sizeType:e.sizeType,sourceType:e.sourceType,crop:e.crop,success:b})},onDelete:(l,t)=>{w(t),e.beforeDelete(t,u.fileList)&&V(t)},onImagePreview:(t,o)=>{var a;if(console.log(t),null==(a=e.modelValue[t])?void 0:a.onClickItem)e.modelValue[t].onClickItem();else if(e.previewFullImage){let l=e.modelValue.map((e=>e.url));k({current:t,urls:l,indicator:"number",complete:e=>{console.log(e)}})}((t,o)=>{l("item-click",r({index:t,id:e.id},u.fileList),o)})(t,o)},overlay:a}}}),[["render",function(e,l,t,o,a,u){const s=O,r=N(g("kui-icons"),E),i=N(g("kui-text"),T),d=P,n=N(g("kui-overlay"),X);return w(),y(V,null,[x(d,{class:I(["kui-flex kui-items-center kui-flex-wrap",e.name])},{default:b((()=>[e.modelValue.length>0?(w(!0),y(V,{key:0},v(e.modelValue,((l,t)=>(w(),_(d,{key:t,class:"kui-flex kui-flex-col kui-justify-center kui-items-center kui-relative kui-overflow-hidden",style:S(e.uploadContainerStyle)},{default:b((()=>[!l.error&&e.previewImage?(w(),_(s,{key:0,src:l.url,style:S(e.imageStyle),onError:l=>e.loadImageError(t),onClick:l=>e.onImagePreview(t,l)},null,8,["src","style","onError","onClick"])):(w(),_(d,{key:1,class:"kui-w-full kui-h-full kui-flex kui-flex-col kui-justify-center kui-items-center"},{default:b((()=>[x(r,{type:"image",color:e.theme.colors[e.state.mode].grey[3],size:50},null,8,["color"]),x(d,{class:"kui-w-full kui-flex kui-justify-center kui-flex-wrap kui-mt-1 kui-text-center"},{default:b((()=>[x(i,{color:e.theme.colors[e.state.mode].grey[5]},{default:b((()=>[U(C(e.ellipsis(l.name,16)),1)])),_:2},1032,["color"])])),_:2},1024)])),_:2},1024)),e.deleteable?(w(),_(d,{key:2,class:"kui-absolute kui-inset-r-0 kui-inset-t-0 kui-z-50"},{default:b((()=>[j(e.$slots,"delete-btn",{},(()=>[x(d,{class:"kui-bg-black kui-h-4 kui-w-4 kui-flex kui-flex-col kui-justify-center kui-items-center kui-p-1 kui-box-border",style:{borderBottomLeftRadius:"20px"}},{default:b((()=>[x(d,{class:"kui-relative",style:{top:"-1px",right:"-1px"},onClick:o=>e.onDelete(l,t)},{default:b((()=>[x(r,{type:"clear",color:"white",size:30})])),_:2},1032,["onClick"])])),_:2},1024)]))])),_:2},1024)):z("",!0),"success"!==l.status?(w(),_(d,{key:3,class:"kui-absolute kui-w-full kui-h-full kui-flex kui-justify-center kui-items-center",style:S(e.overlayStyle)},{default:b((()=>[x(d,{class:"kui-flex kui-flex-col kui-items-center kui-justify-center"},{default:b((()=>["uploading"===l.status?(w(),_(d,{key:0,class:"kui-animate-spin"},{default:b((()=>[x(r,{type:"spinner6",color:"white",size:40})])),_:1})):"ready"!==l.status?(w(),_(d,{key:1,class:"kui-w-3.5 kui-h-3.5 kui-p-px kui-rounded-3xl kui-border-1 kui-border-white kui-border-solid kui-flex kui-flex-col kui-justify-center kui-items-center"},{default:b((()=>[x(r,{type:"clear",color:"white",size:30})])),_:1})):z("",!0),x(d,{class:"kui-mt-1"},{default:b((()=>[x(i,{color:"white",size:`${e.theme.size.fonts.sm}rpx`},{default:b((()=>[U(C(l.message),1)])),_:2},1032,["size"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["style"])):z("",!0),"success"===l.status?j(e.$slots,"preview-cover",{key:4}):z("",!0)])),_:2},1032,["style"])))),128)):z("",!0),e.maxCount-e.state.fileList.length?(w(),_(d,{key:1,onClick:e.onChooseImage},{default:b((()=>[j(e.$slots,"default",{},(()=>[x(d,{class:"kui-flex kui-flex-col kui-justify-center kui-items-center",style:S(e.uploadContainerStyle)},{default:b((()=>[j(e.$slots,"upload-icon",{},(()=>[x(r,{type:"camera1",color:e.theme.colors[e.state.mode].grey[e.disabled?2:3],size:50},null,8,["color"])]))])),_:3},8,["style"])]))])),_:3},8,["onClick"])):z("",!0)])),_:3},8,["class"]),x(n,{ref:"overlay","overlay-ness":.95},{content:b((()=>[x(d,{class:"kui-w-full kui-absolute kui-inset-t-0 kui-flex kui-justify-center"},{default:b((()=>[x(d,{class:"kui-flex kui-mt-4"},{default:b((()=>[x(i,{color:"white"},{default:b((()=>[U("1 / 2")])),_:1})])),_:1})])),_:1}),x(d,{class:"kui-w-full kui-h-full kui-absolute kui-inset-t-0 kui-inset-l-0"},{default:b((()=>[x(d,{class:"kui-h-full kui-flex kui-justify-center kui-items-center"},{default:b((()=>[x(d,{class:"kui-w-10 kui-h-10 kui-bg-red-500"})])),_:1})])),_:1})])),_:1},8,["overlay-ness"])],64)}]]);var te=A({setup(){const{proxy:e}=p(),o=e.$theme,a=n("light"),u=c({show:!1,src:""}),s=n(null),i=n(null),d=n([]),m=n([{url:"https://www.kviewui.com/images/dog1.png",status:"ready",message:"准备上传"},{url:"https://www.kviewui.com/images/dog1.png",status:"uploading",message:"上传中..."},{url:"https://www.kviewui.com/images/dog1.png",status:"failed",message:"上传失败"}]),f=n([{url:"https://www.kviewui.com/images/dog.jpg",status:"success",name:"图片1111.png"},{url:"https://www.kviewui.com/images/squirrel.png",status:"success",name:"图片2222.png"}]),h=n([{url:"https://www.kviewui.com/images/dog.jpg",status:"success"}]),k=n([]),g=c({show:!1,content:""}),w=n([]),y=n([]),x=n([{url:"https://www.kviewui.com/images/squirrel.png",status:"success"}]),b=n([]),V=n([{url:"https://www.kviewui.com/images/dog.jpg",status:"success"}]),v=c({show:!1,content:"",title:"提示"}),_=n([]),S=n([{url:"https://www.kviewui.com/images/dog.jpg",status:"success"}]),U=n(0),C=n(null),j=n([]),z=n([{url:"https://www.kviewui.com/images/dog.jpg",status:"success"},{url:"https://www.kviewui.com/images/dog1.png",status:"success"}]),I=n([{url:"https://www.kviewui.com/images/dog.jpg",status:"success"},{url:"https://www.kviewui.com/images/dog1.png",status:"success",onClickItem:()=>new Promise(((e,l)=>{L((()=>{i.value.open(),u.src="https://www.runoob.com/try/demo_source/mov_bbb.mp4",u.show=!0;F("myVideo").play()})),e(!0)}))}]);return O=r({theme:o},D({mode:a,baseValue:d,statusValue:m,previewValue:f,maxCountValue:h,maxSizeValue:k,customUploadStyleValue:w,customUploadIconValue:y,customPreviewStyleValue:x,customUploadValue:b,customUploadIconSizeValue:V,beforeDeleteValue:S,beforeUploadValue:_,disabledValue:j,disablePreviewImageValue:z,customItemClickValue:I})),l(O,t({url:"https://kviewui-api.vercel.app/file/upload/add",toastState:g,onOversize:e=>{console.log(e),g.content="图片大小不能超过50k",g.show=!0},uploader:s,customUploadEvent:()=>{s.value.submit()},onBeforeDelete:(e,l)=>(v.content="是否删除该图片？",v.show=!0,U.value=e,!1),onBeforeUpload:async e=>new Promise(((l,t)=>{let o=e[0].size;ee(e[0]).then((e=>{g.content=`压缩前大小：${o}字节\n压缩后大小：${e.size}字节`,console.log(g.content),g.show=!0,l([e])}))})),dialogState:v,onItemClick:(e,l)=>{console.log(e),console.log(l),g.content="请查看控制台事件回调",g.show=!0},videoState:u,videoOverlay:i,beforeDeleteUploader:C,confirmDelete:()=>{C.value.del(U)}}));var O}},[["render",function(e,l,t,o,a,u){const s=N(g("kui-uploader"),le),r=N(g("kui-cell-group"),q),i=P,d=N(g("kui-icons"),E),n=N(g("kui-button"),Q),c=N(g("kui-text"),T),m=N(g("kui-space"),H),p=N(g("kui-page"),$),f=N(g("kui-toast"),M),h=N(g("kui-dialog"),J),k=R,y=N(g("kui-overlay"),X);return w(),_(i,{class:"kui-w-full kui-h-full"},{default:b((()=>[x(p,{bgColor:"white","custom-header":!1},{body:b((()=>[x(i,{class:"kui-w-full"},{default:b((()=>[x(m,{gap:[20,0]},{default:b((()=>[x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"基本用法"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.baseValue,"onUpdate:modelValue":l[0]||(l[0]=l=>e.baseValue=l)},null,8,["url","modelValue"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"上传状态",desc:"status: ready/准备上传,uploading/上传中...,failed/上传失败,success/上传成功"},{default:b((()=>[x(s,{modelValue:e.statusValue,"onUpdate:modelValue":l[1]||(l[1]=l=>e.statusValue=l),"max-count":3},null,8,["modelValue"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"上传完成不显示预览图",desc:"展示图片name值"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.previewValue,"onUpdate:modelValue":l[2]||(l[2]=l=>e.previewValue=l),"preview-image":!1},null,8,["url","modelValue"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"文件预览",desc:"原生预览"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.previewValue,"onUpdate:modelValue":l[3]||(l[3]=l=>e.previewValue=l)},null,8,["url","modelValue"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"限制上传数量"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.maxCountValue,"onUpdate:modelValue":l[4]||(l[4]=l=>e.maxCountValue=l),"max-count":2},null,8,["url","modelValue"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"限制上传大小(限制50k)",desc:"oversize事件回调"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.maxSizeValue,"onUpdate:modelValue":l[5]||(l[5]=l=>e.maxSizeValue=l),onOversize:o.onOversize,"max-size":51200},null,8,["url","modelValue","onOversize"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"自定义上传图标"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.customUploadStyleValue,"onUpdate:modelValue":l[6]||(l[6]=l=>e.customUploadStyleValue=l),onOversize:o.onOversize,"max-size":51200},{"upload-icon":b((()=>[x(d,{type:"add1",color:o.theme.colors[e.mode].grey[3],size:80},null,8,["color"])])),_:1},8,["url","modelValue","onOversize"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"自定义上传样式"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.customUploadStyleValue,"onUpdate:modelValue":l[7]||(l[7]=l=>e.customUploadStyleValue=l),onOversize:o.onOversize,"max-size":51200},{default:b((()=>[x(n,{type:"primary"},{default:b((()=>[U("上传文件")])),_:1})])),_:1},8,["url","modelValue","onOversize"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"预览图自定义样式"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.customPreviewStyleValue,"onUpdate:modelValue":l[8]||(l[8]=l=>e.customPreviewStyleValue=l),"max-count":2},{"preview-cover":b((()=>[x(i,{class:"kui-absolute kui-inset-b-0 kui-inset-l-0 kui-w-full"},{default:b((()=>[x(i,{class:"kui-flex kui-justify-center kui-py-1",style:S({backgroundColor:"rgba(0,0,0,.2)"})},{default:b((()=>[x(c,{color:"white"},{default:b((()=>[U("图片名称")])),_:1})])),_:1},8,["style"])])),_:1})])),_:1},8,["url","modelValue"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"手动上传"},{default:b((()=>[x(s,{ref:"uploader",url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.customUploadValue,"onUpdate:modelValue":l[9]||(l[9]=l=>e.customUploadValue=l),"auto-upload":!1},null,8,["url","modelValue"]),x(i,{class:"kui-mt-1"},{default:b((()=>[x(n,{type:"primary",onClick:o.customUploadEvent},{default:b((()=>[U("点击上传")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"自定义预览图大小"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.customUploadIconSizeValue,"onUpdate:modelValue":l[10]||(l[10]=l=>e.customUploadIconSizeValue=l),"upload-icon-size":150,"max-count":2},null,8,["url","modelValue"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"上传前置处理(before-upload回调)",desc:"演示上传前图片压缩"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.beforeUploadValue,"onUpdate:modelValue":l[11]||(l[11]=l=>e.beforeUploadValue=l),"upload-icon-size":160,"max-count":2,"before-upload":o.onBeforeUpload},null,8,["url","modelValue","before-upload"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"删除前置处理(before-delete回调)",desc:"演示删除前二次确认场景"},{default:b((()=>[x(s,{ref:"beforeDeleteUploader",url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.beforeDeleteValue,"onUpdate:modelValue":l[12]||(l[12]=l=>e.beforeDeleteValue=l),"max-count":2,"before-delete":o.onBeforeDelete},null,8,["url","modelValue","before-delete"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"禁用文件上传"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.disabledValue,"onUpdate:modelValue":l[13]||(l[13]=l=>e.disabledValue=l),disabled:"","max-count":2},null,8,["url","modelValue"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"禁用点击查看大图",desc:"可通过item-click事件回调自定义业务逻辑"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.disablePreviewImageValue,"onUpdate:modelValue":l[14]||(l[14]=l=>e.disablePreviewImageValue=l),"max-count":2,"preview-full-image":!1,onItemClick:o.onItemClick},null,8,["url","modelValue","onItemClick"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:"自定义单个图片点击事件",desc:"演示点击第二个图片播放视频(视频资源来源于varletui组件库演示)"},{default:b((()=>[x(s,{url:o.url,"xhr-code-name":"errcode","xhr-code":"0",modelValue:e.customItemClickValue,"onUpdate:modelValue":l[15]||(l[15]=l=>e.customItemClickValue=l),"max-count":2},null,8,["url","modelValue"])])),_:1})])),_:1}),x(i,{class:"kui-w-full"},{default:b((()=>[x(r,{title:""},{default:b((()=>[x(c,{color:"hsl(213,10.00%, 56.86%)"},{default:b((()=>[U("示例数据为组件支持的部分数据，详细支持数据请参考组件源码和组件文档")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),x(f,{show:o.toastState.show,"onUpdate:show":l[16]||(l[16]=e=>o.toastState.show=e),content:o.toastState.content},null,8,["show","content"]),x(h,{show:o.dialogState.show,"onUpdate:show":l[17]||(l[17]=e=>o.dialogState.show=e),title:o.dialogState.title,content:o.dialogState.content,onConfirm:o.confirmDelete},null,8,["show","title","content","onConfirm"]),x(y,{ref:"videoOverlay"},{content:b((()=>[x(i,{class:"kui-w-full kui-h-full kui-flex kui-items-center"},{default:b((()=>[o.videoState.show?(w(),_(k,{key:0,id:"myVideo",class:"kui-absolute kui-inset-t-0 kui-inset-l-0 kui-h-full kui-w-full",src:o.videoState.src},null,8,["src"])):z("",!0)])),_:1})])),_:1},512)])),_:1})}]]);export{te as default};
