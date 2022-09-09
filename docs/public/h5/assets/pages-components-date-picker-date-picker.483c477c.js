var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,l=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&s(e,a,t[a]);return e},n=(e,o)=>t(e,a(o));import{_ as u}from"./kui-text.130ddde7.js";import{D as c,E as d,r as y,M as h,_ as k,aj as m,d as f,f as p,o as g,c as w,w as v,a as D,b as _,I as b,l as x,Q as C,R as A,m as j,S as P,q as S,i as M}from"./index.23888770.js";import{c as T,r as Y,_ as O}from"./kui-page.40f10ef7.js";import{_ as I}from"./kui-button.00b140d6.js";import{_ as z}from"./kui-icons.7ba34cc0.js";import{s as $}from"./array.a8a32419.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as N}from"./kui-cell-group.81ac2330.js";import{_ as E}from"./kui-space.43763e84.js";import"./kui-spin.556d3440.js";const W=["日","一","二","三","四","五","六"],F=new Date,V=F.getFullYear(),X=F.getMonth()+1;F.getDate(),F.getDate();const R=F.getDate();F.getDay();const q=(e,t)=>{let a=[];if(!e||!t){let a=new Date;e=a.getFullYear(),t=a.getMonth()+1}const o=new Date(e,t-1,1).getDay(),r=new Date(e,t-1,0).getDate(),i=new Date(e,t,0).getDate();for(let s=0;s<42;s++){let l=e,n=t,u=s+1-o,c=u;u<=0?(n-=1,c=u+r):u>i&&(n+=1,c=u-i),13===n&&(n=1,l+=1),0===n&&(n=12,l-=1),a.push({year:l,month:n,date:u,cursorDate:c,render:{}})}return a};var H={modelValue:{type:[String,Array],default:""},type:{type:String,default:"date"},allowedDates:{type:Function,default:()=>{}},color:{type:String,default:"primary"},colorLevel:{type:[String,Number],default:5},headerColor:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},firstDayOfWeek:{type:[String,Number],default:0},min:{type:String,default:""},max:{type:String,default:""},showCurrent:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},range:{type:Boolean,default:!1},touchable:{type:Boolean,default:!1},mode:{type:String,default:()=>{var e,t;return null!=(t=null==(e=c(T,void 0))?void 0:e.mode)?t:"light"}}};const L="kui-datepicker";var Q=B(d({name:L,props:H,emits:["switch","change"],setup(e,{emit:t}){const{proxy:a}=f(),o=a.$theme,r=W,i=y({dateData:$(q(V,X),7),nowMonth:X,nowYear:V,nowDay:R,datePickerActiveClass:"",numberActiveClass:"",touchStart:{x:0,y:0},header:{year:V,month:X,day:R},active:{date:R,month:X,year:V},mode:e.mode}),s=h((()=>{const e=y({});return e.minHeight="500rpx",e.minWidth="580rpx",e})),u=h((()=>{const e=y({});return e.width=e.height=e.borderRadius="70rpx",e.backgroundColor=o.colors[i.mode].primary[5],e.transition="opacity 0.3s",e})),c=(e=i.nowYear,t=i.nowMonth)=>{i.dateData=$(q(e,t),7)},d=(e,t,a=V)=>{e<i.header.month?i.numberActiveClass="active-number-out":e>i.header.month?i.numberActiveClass="active-number-in":t<i.header.day?i.numberActiveClass="active-number-out":t>i.header.day&&(i.numberActiveClass="active-number-in"),i.header.month=e,i.header.day=t,i.header.year=a,setTimeout((()=>{i.numberActiveClass=""}),300)};return n(l({name:L,theme:o},k({weekValue:r})),{datePickerStyle:s,state:i,dayItemStyle:e=>{const t=y({});return t.width=""+1/7,t.padding="4rpx 0",t.height="70rpx",t.opacity=i.nowMonth===e.month?1:.5,t},getNextMonthData:()=>{i.datePickerActiveClass="active-date-out",i.nowMonth++,i.nowMonth>12&&(i.nowYear+=1,i.nowMonth=1),c(),setTimeout((()=>{i.datePickerActiveClass=""}),300)},getPreMonthData:()=>{i.datePickerActiveClass="active-date-in",i.nowMonth--,i.nowMonth<1&&(i.nowMonth=12,i.nowYear--),c(),setTimeout((()=>{i.datePickerActiveClass=""}),300)},convertToChinaNum:m,onTouchStart:e=>{i.touchStart.x=e.touches[0].clientX,i.touchStart.y=e.touches[0].clientY},onTouchEnd:e=>{e.changedTouches[0].clientX,i.touchStart.x,e.changedTouches[0].clientX,i.touchStart.x},handleData:e=>e<10?`0${e}`:e,getWeekDay:(e,t,a)=>{const o=(e=>{const t=new Date(e);return"Invalid Date"==t?(console.warn("utils/date debug：日期格式错误"),!1):t.getDay()})(`${e}-${t}-${a}`);return 0===o?"日":m(o)},onClickDatePanel:(e,t)=>{console.log(t),d(t.month,t.date,t.year),i.active.date=i.header.day=t.cursorDate,i.active.month=i.header.month=t.month,i.active.year=i.header.year=t.year},dayActiveItemStyle:u,isDayActive:e=>e.cursorDate===i.active.date&&e.month===i.active.month&&e.year===i.active.year,getDateData:c,nowYear:V,nowMonth:X,getTodayData:()=>{V>i.nowYear?i.datePickerActiveClass="active-date-in":V<i.nowYear?i.datePickerActiveClass="active-date-out":R>i.nowDay?i.datePickerActiveClass="active-date-in":R<i.nowDay||X>i.nowMonth?i.datePickerActiveClass="active-date-out":X<i.nowMonth&&(i.datePickerActiveClass="active-date-in"),c(V,X),i.nowYear=i.active.year=V,i.nowMonth=i.active.month=X,i.nowDay=i.active.date=R,setTimeout((()=>{i.datePickerActiveClass=""}),300),d(X,R)}})}}),[["render",function(e,t,a,o,r,i){const s=Y(p("kui-text"),u),c=M,d=Y(p("kui-button"),I),y=Y(p("kui-icons"),z);return g(),w(c,{class:x(["kui-rounded kui-w-full kui-bg-white kui-overflow-hidden",e.name])},{default:v((()=>[D(c,{class:"kui-flex kui-flex-col kui-items-start kui-py-3 kui-px-4 kui-h-13 kui-bg-green-500 kui-rounded-t"},{default:v((()=>[D(c,{class:"kui-opacity-70"},{default:v((()=>[D(s,{color:"white","font-weight":200},{default:v((()=>[_(b(e.state.header.year),1)])),_:1})])),_:1}),D(c,{class:"kui-mt-1 kui-overflow-hidden kui-w-full kui-flex kui-items-center kui-justify-between"},{default:v((()=>[D(c,{class:x(e.state.numberActiveClass)},{default:v((()=>[D(s,{color:"white",size:`${e.theme.size.fonts["3xl"]}${e.theme.size.fontUnit}`},{default:v((()=>[_(b(e.handleData(e.state.header.month))+"-"+b(e.handleData(e.state.header.day))+" 星期"+b(e.getWeekDay(e.state.header.year,e.state.header.month,e.state.header.day)),1)])),_:1},8,["size"])])),_:1},8,["class"]),D(c,{class:"kui-opacity-90"},{default:v((()=>[D(d,{size:"small",shadow:"",gradient:!1,type:"primary","background-color":e.theme.colors[e.state.mode].primary[4],onClick:e.getTodayData},{default:v((()=>[_("返回今天")])),_:1},8,["background-color","onClick"])])),_:1})])),_:1})])),_:1}),D(c,{class:"kui-pb-3",style:j(e.datePickerStyle),onTouchstart:e.onTouchStart,onTouchend:e.onTouchEnd},{default:v((()=>[D(c,{class:"kui-px-5 kui-mt-3 kui-flex kui-justify-between"},{default:v((()=>[D(c,{onClick:e.getPreMonthData},{default:v((()=>[D(y,{size:40,color:"grey",type:"keyboard_arrow_left"})])),_:1},8,["onClick"]),D(c,{class:x(["kui-flex",e.state.datePickerActiveClass])},{default:v((()=>[D(s,{"font-weight":800},{default:v((()=>[_(b(e.state.nowYear),1)])),_:1}),D(c,{class:"kui-mx-0-5"}),D(s,{"font-weight":800},{default:v((()=>[_(b(e.convertToChinaNum(e.state.nowMonth))+"月",1)])),_:1})])),_:1},8,["class"]),D(c,{onClick:e.getNextMonthData},{default:v((()=>[D(y,{size:40,color:"grey",type:"keyboard_arrow_right"})])),_:1},8,["onClick"])])),_:1}),D(c,{class:x(["kui-flex kui-justify-center kui-px-2 kui-mt-3",e.state.datePickerActiveClass])},{default:v((()=>[(g(!0),C(P,null,A(e.weekValue,((t,a)=>(g(),w(c,{key:a,class:"kui-flex kui-flex-1 kui-justify-center",style:j(e.dayItemStyle)},{default:v((()=>[D(s,{color:e.theme.colors[e.mode].grey[5]},{default:v((()=>[_(b(t),1)])),_:2},1032,["color"])])),_:2},1032,["style"])))),128))])),_:1},8,["class"]),D(c,{class:"kui-py-0"},{default:v((()=>[(g(!0),C(P,null,A(e.state.dateData,((t,a)=>(g(),w(c,{key:a,class:x(["kui-flex kui-justify-center kui-px-2 kui-flex-wrap",e.state.datePickerActiveClass])},{default:v((()=>[(g(!0),C(P,null,A(t,((t,a)=>(g(),w(c,{key:a,class:"kui-flex kui-flex-1 kui-items-center kui-justify-center kui-mt-0 kui-relative",style:j(l(n(l({},e.dayItemStyle(t)),{backgroundColor:e.state.activeDate===t.date?e.theme.colors[e.mode].primary[6]:""}),t.render)),onClick:o=>e.onClickDatePanel(a,t)},{default:v((()=>[D(c,{class:"kui-absolute kui-flex kui-flex-col kui-justify-center kui-items-center"},{default:v((()=>[D(s,{color:e.theme.colors[e.mode].grey[9],weight:600},{default:v((()=>[_(b(t.cursorDate),1)])),_:2},1032,["color"])])),_:2},1024),e.isDayActive(t)?(g(),w(c,{key:0,class:"kui-absolute kui-flex kui-items-center kui-justify-center",style:j(e.dayActiveItemStyle)},{default:v((()=>[D(s,{color:e.theme.colors[e.mode].grey[0],weight:600},{default:v((()=>[_(b(t.cursorDate),1)])),_:2},1032,["color"])])),_:2},1032,["style"])):S("",!0)])),_:2},1032,["style","onClick"])))),128))])),_:2},1032,["class"])))),128))])),_:1})])),_:1},8,["style","onTouchstart","onTouchend"])])),_:1},8,["class"])}],["__scopeId","data-v-53f2421d"]]);var U=B({setup(){}},[["render",function(e,t,a,o,r,i){const s=Y(p("kui-date-picker"),Q),l=Y(p("kui-cell-group"),N),n=M,u=Y(p("kui-space"),E),c=Y(p("kui-page"),O);return g(),w(n,{class:"kui-w-full kui-h-full"},{default:v((()=>[D(c,{"custom-header":!1},{body:v((()=>[D(n,{class:"kui-w-full"},{default:v((()=>[D(u,{gap:[30,0],direction:"column"},{default:v((()=>[D(n,{class:"kui-w-full"},{default:v((()=>[D(l,{title:"基本用法"},{default:v((()=>[D(s)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{U as default};
