var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,r=(e,r)=>{for(var d in r||(r={}))t.call(r,d)&&l(e,d,r[d]);if(o)for(var d of o(r))a.call(r,d)&&l(e,d,r[d]);return e};import{_ as d}from"./kui-icons.7ba34cc0.js";import{D as u,E as n,r as c,M as i,d as s,f as m,o as p,c as b,w as g,l as k,m as f,a as S,q as C,i as y,aa as h,b as v}from"./index.23888770.js";import{c as V,r as I,_ as w}from"./kui-page.40f10ef7.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as B}from"./kui-cell.395177d7.js";import{_ as x}from"./kui-cell-group.81ac2330.js";import{_ as N}from"./kui-text.130ddde7.js";import{_ as P}from"./kui-space.43763e84.js";import{_ as U}from"./kui-toast.fb6a3222.js";import"./kui-animation.9b475c9e.js";var L={modelValue:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1},disabledInput:{type:Boolean,default:!1},inputWidth:{type:String,default:"80rpx"},inputSpacing:{type:[String,Number],default:5},inputBackgroundColor:{type:String,default:""},inputBackgroundColorLevel:{type:[String,Number],default:5},min:{type:[String,Number],default:1},max:{type:[String,Number],default:9999},step:{type:[String,Number],default:1},decimalPlaces:{type:[String,Number],default:0},mode:{type:String,default:()=>{var e,o;return null!=(o=null==(e=u(V,void 0))?void 0:e.mode)?o:"light"}},shape:{type:String,default:"round"},reduceIconColor:{type:String,default:"black"},reduceIconColorLevel:{type:[String,Number],default:5},reduceIconBackgroundColor:{type:String,default:""},reduceIconBackgroundColorLevel:{type:[String,Number],default:5},reduceBorderColor:{type:String,default:"primary"},reduceBorderColorLevel:{type:[String,Number],default:5},addIconColor:{type:String,default:"black"},addIconColorLevel:{type:[String,Number],default:5},addIconBackgroundColor:{type:String,default:"primary"},addIconBackgroundColorLevel:{type:[String,Number],default:5},addBorderColor:{type:String,default:""},addBorderColorLevel:{type:[String,Number],default:5},size:{type:[String,Number],default:24},fontSize:{type:[String,Number],default:16},borderColor:{type:String,default:""},borderColorLevel:{type:[String,Number],default:5},backgroundColor:{type:String,default:""},backgroundColorLevel:{type:[String,Number],default:5},activeAutoHidden:{type:Boolean,default:!1}};var z=_(n({name:"kui-stepper",props:L,emits:["add","reduce","forbid","change","blur","focus","update:modelValue"],setup(e,{emit:o}){const{proxy:t}=s(),a=t.$theme,l=c({modelValue:e.modelValue,isDark:"dark"===e.mode,iconSize:40,activeShow:!0}),r=c({opacity:1,activeColor:a.colors[e.mode].primary[5],inActiveColor:a.colors[e.mode].grey[9],backgroundColor:e.reduceIconBackgroundColor,iconColor:e.reduceIconColor}),d=c({opacity:1,activeColor:a.colors[e.mode].primary[5],inActiveColor:a.colors[e.mode].grey[9],backgroundColor:e.addIconBackgroundColor,iconColor:e.addIconColor}),u=(o=Number(e.modelValue))=>{const t=o>Number(e.min)&&!e.disabled;r.opacity=t?1:.5;let d=null,u="";e.reduceIconBackgroundColor&&(d=a.colors[e.mode][e.reduceIconBackgroundColor]||uni.kviewUIColor.generate(e.reduceIconBackgroundColor,{dark:l.isDark,list:!0})),u=e.reduceIconBackgroundColor?d[e.reduceIconBackgroundColorLevel]:d,r.backgroundColor=u;let n=null;return e.reduceIconColor&&(n=a.colors[e.mode][e.reduceIconColor]||uni.kviewUIColor.generate(e.reduceIconColor,{dark:l.isDark,list:!0})),r.iconColor=t?n[e.reduceIconColorLevel]:r.inActiveColor,t},n=(o=Number(e.modelValue))=>{const t=o<Number(e.max)&&!e.disabled;d.opacity=t?1:.5;let r=null,u="";e.addIconBackgroundColor&&(r=a.colors[e.mode][e.addIconBackgroundColor]||uni.kviewUIColor.generate(e.addIconBackgroundColor,{dark:l.isDark,list:!0})),u=e.addIconBackgroundColor?r[e.addIconBackgroundColorLevel]:r,d.backgroundColor=t?u:d.inActiveColor,d.backgroundColor=u;let n=null;return e.addIconColor&&(n=a.colors[e.mode][e.addIconColor]||uni.kviewUIColor.generate(e.addIconColor,{dark:l.isDark,list:!0})),d.iconColor=t?n[e.addIconColorLevel]:d.inActiveColor,t},m=i((()=>c({}))),p=i((()=>{const o=c({});return"square"===e.shape&&(o.borderRadius="10rpx"),"round"===e.shape&&(o.borderRadius=`${e.size}px`),"half-round"===e.shape&&(o.padding="0 8rpx"),o.width=o.height=`${e.size}px`,l.iconSize=1.8*e.size,o})),b=i((()=>{const o=c({});u(),o.backgroundColor=r.backgroundColor;let t=null,d=null;return e.reduceBorderColor&&(t=a.colors[e.mode][e.reduceBorderColor]||uni.kviewUIColor.generate(e.reduceBorderColor,{dark:l.isDark,list:!0}),d=t[e.reduceBorderColorLevel],o.border=`1px solid ${d}`),"half-round"===e.shape&&(o.borderTopLeftRadius=o.borderBottomLeftRadius=`${e.size}px !important`),o.opacity=r.opacity,o})),g=i((()=>{const o=c({});o.width=e.inputWidth,o.height=`${e.size}px`,o.margin=`0 ${e.inputSpacing}px`,o.fontSize=`${e.fontSize}px`;let t=null,r="";e.borderColor&&(t=a.colors[e.mode][e.borderColor]||uni.kviewUIColor.generate(e.borderColor,{dark:l.isDark,list:!0}),r=t[e.borderColorLevel],o.borderTop=o.borderBottom=`1px solid ${r}`);let d=null,u="";return e.inputBackgroundColor&&(d=a.colors[e.mode][e.inputBackgroundColor]||uni.kviewUIColor.generate(e.inputBackgroundColor,{dark:l.isDark,list:!0}),u=d[e.inputBackgroundColorLevel],o.backgroundColor=u),u&&0!==e.inputSpacing&&(o.borderRadius="8rpx",o.border=u?`1px solid ${u}`:""),o})),k=i((()=>{const o=c({});n(),o.backgroundColor=d.backgroundColor;let t=null,r=null;return e.addBorderColor&&(t=a.colors[e.mode][e.addBorderColor]||uni.kviewUIColor.generate(e.addBorderColor,{dark:l.isDark,list:!0}),r=t[e.addBorderColorLevel],o.border=`1px solid ${r}`),"half-round"===e.shape&&(o.borderTopRightRadius=o.borderBottomRightRadius=`${e.size}px !important`),o.opacity=d.opacity,o})),f=t=>{if(o("add",t),n()){e.activeAutoHidden&&(l.activeShow=!0);let o=Number(e.modelValue?e.modelValue:e.activeAutoHidden?0:e.min)+Number(e.step);h(o,t)}else o("forbid","add",t)};let S=null;const C=t=>{if(o("reduce",t),u()){let o=Number(e.modelValue?e.modelValue:e.max)-Number(e.step);h(o,t)}else e.activeAutoHidden&&(l.activeShow=!1),o("forbid","reduce",t)};e.activeAutoHidden&&(l.activeShow=!1);const y=o=>e.decimalPlaces?Number(o).toFixed(Number(e.decimalPlaces)):o,h=(e,t)=>{let a=y(e);console.log(a),o("update:modelValue",a,t),o("change",a,t)},v=o=>(o>=e.max&&(o=Number(e.max)),o<=e.min&&(o=Number(e.min)),y(o));return{name:"kui-stepper",state:l,rootStyle:m,inputStyle:g,commonIconStyle:p,reduceIconStyle:b,addIconStyle:k,onBlur:e=>{let t=e.detail.value;n(),u(),v(t),h(t,e),o("blur",t,e)},formatValue:v,add:f,onLoopAdd:e=>{S=setInterval((()=>{f(e)}),100)},onLoopReduce:e=>{S=setInterval((()=>{C(e)}),100)},clearLoop:()=>{clearInterval(S),S=null},reduce:C,reduceState:r,addState:d,reduceActive:u}}}),[["render",function(e,o,t,a,l,u){const n=I(m("kui-icons"),d),c=y,i=h;return p(),b(c,{class:k(["kui-flex kui-items-center",[e.name]]),style:f(r({},e.rootStyle))},{default:g((()=>[e.state.activeShow?(p(),b(c,{key:0,class:k([`${e.name}_icon`]),style:f(r(r({},e.commonIconStyle),e.reduceIconStyle)),onClick:e.reduce},{default:g((()=>[S(n,{type:"minus",color:e.reduceState.iconColor,size:e.state.iconSize},null,8,["color","size"])])),_:1},8,["class","style","onClick"])):C("",!0),e.state.activeShow?(p(),b(c,{key:1,class:k(["kui-text-center kui-box-border",[`${e.name}_input`]])},{default:g((()=>[S(i,{class:"",type:"number",disabled:e.disabled||e.disabledInput,value:e.formatValue(e.modelValue),style:f(e.inputStyle),onBlur:e.onBlur},null,8,["disabled","value","style","onBlur"])])),_:1},8,["class"])):C("",!0),S(c,{class:k([`${e.name}_icon`]),style:f(r(r({},e.commonIconStyle),e.addIconStyle)),onClick:e.add},{default:g((()=>[S(n,{type:"add1",color:e.addState.iconColor,size:e.state.iconSize},null,8,["color","size"])])),_:1},8,["class","style","onClick"])])),_:1},8,["class","style"])}],["__scopeId","data-v-ea5109fa"]]);var $=_({setup(){const e={state:c({value:"",decimalPlacesValue:"",toast:{content:"",show:!1}}),methods:{onForbid(o){e.state.toast.content="add"===o?"加号按钮不可点击":"减号按钮不可点击",e.state.toast.show=!0}}},o={state:c({value:"",decimalValue:""})},t={state:c({value:""})},a={state:c({value:""})},l={state:c({value:""})};return{baseState:e,stepState:o,disabledState:t,disabledInputState:a,rangeState:l}}},[["render",function(e,o,t,a,l,r){const d=I(m("kui-stepper"),z),u=I(m("kui-cell"),B),n=I(m("kui-cell-group"),x),c=I(m("kui-text"),N),i=I(m("kui-space"),P),s=y,k=I(m("kui-page"),w),f=I(m("kui-toast"),U);return p(),b(s,{class:"kui-w-full kui-h-full"},{default:g((()=>[S(k,{"custom-header":!1},{body:g((()=>[S(s,{class:"kui-w-full kui-h-full"},{default:g((()=>[S(i,{gap:[30,0],direction:"column"},{default:g((()=>[S(n,{title:"基本用法"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{modelValue:a.baseState.state.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.baseState.state.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),S(n,{title:"自定义步长10"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{step:10,min:0,modelValue:a.stepState.state.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.stepState.state.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),S(n,{title:"禁用全部"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{modelValue:a.disabledState.state.value,"onUpdate:modelValue":o[2]||(o[2]=e=>a.disabledState.state.value=e),disabled:""},null,8,["modelValue"])])),_:1})])),_:1}),S(n,{title:"禁用输入框"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{"disabled-input":"",modelValue:a.disabledInputState.state.value,"onUpdate:modelValue":o[3]||(o[3]=e=>a.disabledInputState.state.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),S(n,{title:"最小值和最大值(min:10, max: 30)"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{min:10,max:30,modelValue:a.rangeState.state.value,"onUpdate:modelValue":o[4]||(o[4]=e=>a.rangeState.state.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),S(n,{title:"小数步长(step:0.5)"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{step:.5,min:4.5,modelValue:a.stepState.state.decimalValue,"onUpdate:modelValue":o[5]||(o[5]=e=>a.stepState.state.decimalValue=e)},null,8,["step","min","modelValue"])])),_:1})])),_:1}),S(n,{title:"设置保留的小数点位数(保留2位小数)"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{step:.5,decimalPlaces:2,min:4.5,modelValue:a.baseState.state.decimalPlacesValue,"onUpdate:modelValue":o[6]||(o[6]=e=>a.baseState.state.decimalPlacesValue=e)},null,8,["step","min","modelValue"])])),_:1})])),_:1}),S(n,{title:"自定义样式"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{"reduce-border-color":"yellow","add-border-color":"yellow","add-icon-background-color":"yellow",shape:"square",modelValue:a.baseState.state.decimalPlacesValue,"onUpdate:modelValue":o[7]||(o[7]=e=>a.baseState.state.decimalPlacesValue=e)},null,8,["modelValue"])])),_:1}),S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{"reduce-border-color":"grey","add-border-color":"grey","add-icon-background-color":"",shape:"half-round","border-color":"grey","input-width":"60rpx","input-spacing":0,modelValue:a.baseState.state.decimalPlacesValue,"onUpdate:modelValue":o[8]||(o[8]=e=>a.baseState.state.decimalPlacesValue=e)},null,8,["modelValue"])])),_:1}),S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{"reduce-border-color":"grey","reduce-border-color-level":4,"reduce-icon-background-color":"grey","reduce-icon-background-color-level":2,"add-border-color":"grey","add-border-color-level":4,shape:"half-round","border-color":"grey","border-color-level":4,"add-icon-background-color":"grey","add-icon-background-color-level":2,"input-width":"60rpx","input-spacing":0,modelValue:a.baseState.state.decimalPlacesValue,"onUpdate:modelValue":o[9]||(o[9]=e=>a.baseState.state.decimalPlacesValue=e)},null,8,["modelValue"])])),_:1}),S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{"reduce-border-color":"danger","add-border-color":"danger","add-icon-background-color":"danger",shape:"half-round","input-background-color":"danger","input-background-color-level":2,modelValue:a.baseState.state.decimalPlacesValue,"onUpdate:modelValue":o[10]||(o[10]=e=>a.baseState.state.decimalPlacesValue=e)},null,8,["modelValue"])])),_:1}),S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{"reduce-border-color":"info","add-border-color":"info","add-icon-background-color":"info",shape:"half-round","input-background-color":"info","input-background-color-level":2,"border-color":"info","border-color-level":2,"input-spacing":0,modelValue:a.baseState.state.decimalPlacesValue,"onUpdate:modelValue":o[11]||(o[11]=e=>a.baseState.state.decimalPlacesValue=e)},null,8,["modelValue"])])),_:1})])),_:1}),S(n,{title:"动态切换(达到最小临界值时只显示加号按钮)"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{"active-auto-hidden":"",min:1,shape:"square",modelValue:a.baseState.state.decimalPlacesValue,"onUpdate:modelValue":o[12]||(o[12]=e=>a.baseState.state.decimalPlacesValue=e)},null,8,["modelValue"])])),_:1})])),_:1}),S(n,{title:"不可操作点击监听"},{default:g((()=>[S(u,{"show-right-icon":!1,"click-status":!1},{content:g((()=>[S(d,{min:1,max:2,shape:"square",modelValue:a.baseState.state.decimalPlacesValue,"onUpdate:modelValue":o[13]||(o[13]=e=>a.baseState.state.decimalPlacesValue=e),onForbid:a.baseState.methods.onForbid},null,8,["modelValue","onForbid"])])),_:1})])),_:1}),S(n,{title:""},{default:g((()=>[S(c,{color:"hsl(213,10.00%, 56.86%)"},{default:g((()=>[v("示例数据为组件支持的部分数据，详细支持数据请参考组件源码和组件文档")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),S(f,{show:a.baseState.state.toast.show,"onUpdate:show":o[14]||(o[14]=e=>a.baseState.state.toast.show=e),content:a.baseState.state.toast.content},null,8,["show","content"])])),_:1})}]]);export{$ as default};
