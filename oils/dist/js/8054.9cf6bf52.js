"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[8054],{607:function(t,s,e){e.d(s,{Z:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("div")},i=[],n={mounted(){this.$emit("sign")}},r=n,l=e(1001),o=(0,l.Z)(r,a,i,!1,null,"6fb58a9e",null),c=o.exports},1304:function(t,s,e){e.d(s,{Z:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",[s("v-row",{staticClass:"qiong-panel_element qpe-mh mobie-panel",class:t.extra_class},[s("v-col",{staticClass:"px-0 qpe_inner py-0",attrs:{cols:t.cols}},[t._t("default")],2),t.need_space?s("v-col",{staticClass:"inner-empty"},[s("qiong-space",{attrs:{space:"7vh"}},[t._v(" ")])],1):t._e()],1)],1)},i=[],n=e(934),r=e(7667),l={name:"",props:{need_space:{type:Boolean,default:!0},cols:{type:Number,default:12},extra_class:{type:String}},components:{QiongSpace:n.Z,QiongPageLing:r.Z},data(){return{}}},o=l,c=e(1001),d=(0,c.Z)(o,a,i,!1,null,"94a8aac0",null),u=d.exports},4359:function(t,s,e){e.d(s,{Z:function(){return c}});var a=function(){var t=this,s=t._self._c;return 1==t.bigger?s("v-row",{staticClass:"pager-header"},[s("v-col",{staticClass:"pl-7",class:t.extra_calss,attrs:{cols:12,sm:4}},[t._t("header")],2),s("v-col",{staticClass:"px-7 fx-r0",class:t.extra_calss,attrs:{cols:12,sm:8}},[t._t("filter")],2)],1):s("v-row",{staticClass:"pager-header"},[s("v-col",{staticClass:"pl-7",class:t.extra_calss,attrs:{cols:12,sm:6}},[t._t("header")],2),s("v-col",{staticClass:"px-7 fx-r0",class:t.extra_calss,attrs:{cols:12,sm:6}},[t._t("filter")],2)],1)},i=[],n={components:{},name:"",props:{bigger:{type:Number,default:1},extra_calss:{type:String}},data(){return{}}},r=n,l=e(1001),o=(0,l.Z)(r,a,i,!1,null,"34ab2fbb",null),c=o.exports},7667:function(t,s,e){e.d(s,{Z:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("v-col",{staticClass:"py-0 ma-0 pa-0",attrs:{cols:"12"}},[s("div",{staticClass:"qiong-line",class:t.ex_class})])},i=[],n={name:"",props:{ex_class:{type:String}},data(){return{}}},r=n,l=e(1001),o=(0,l.Z)(r,a,i,!1,null,"8711cf2c",null),c=o.exports},3233:function(t,s,e){e.d(s,{Z:function(){return c}});var a=function(){var t=this,s=t._self._c;return-1==t.bigger?s("div",{staticClass:"loading-small"}):1==t.bigger?s("div",{staticClass:"loading-huge"}):s("div",{staticClass:"loading"})},i=[],n={name:"LoadingSmall",props:{bigger:{type:Number,default:1}}},r=n,l=e(1001),o=(0,l.Z)(r,a,i,!1,null,"30dfa814",null),c=o.exports},2245:function(t,s,e){e.d(s,{Z:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("div")},i=[],n={name:"",data(){return{}},methods:{async _lunching(t){let s=await this.conn.ex_get(this,"browse_LP_log",t);return s=s&&s.message?s.message:[],s.map((t=>(t.is_plus=this._is_plus(t.LP_difference),t.LP_difference=this._ser_lp(t.LP_difference),t)))},async LpRecord(t){return await this._lunching(t)},async LpAddRecord(t){return t.description="additional",await this._lunching(t)},_ser_lp(t){return t?Math.abs(Number.parseFloat(t)):0},_is_plus(t){return t?t.indexOf("+")>=0:null}}},r=n,l=e(1001),o=(0,l.Z)(r,a,i,!1,null,"8d985e24",null),c=o.exports},8054:function(t,s,e){e.r(s),e.d(s,{default:function(){return k}});e(7658);var a=function(){var t=this,s=t._self._c;return s("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[s("qiong-header-filter",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v(" 增加LP積分 ")]),s("div",{attrs:{slot:"filter"},slot:"filter"},[s("button",{staticClass:"btn qiong-txt-12 btn-sec btn-lg an_righter",on:{click:function(s){return t.$router.push("form_lp_plus")}}},[t._v(" 增加LP積分 "),s("v-icon",{staticClass:"qiong-txt-14"},[t._v("mdi-arrow-top-right")])],1)])]),s("qiong-panel-element",{staticClass:"mobie-table",attrs:{need_space:!1}},[s("mc-lp-plus-tr"),t.loading?s("nav",[s("qiong-loading")],1):s("mc-lp-plus-body",{attrs:{_items:t.records}})],1),s("net-lp-plus-record",{ref:"recordREF"}),!t.$store.state.loading&&t.$store.state.user_backend?s("tool-ready",{on:{sign:t.init}}):t._e()],1)},i=[],n=e(607),r=e(1304),l=e(4359),o=e(6481),c=e(934),d=e(2245),u=function(){var t=this,s=t._self._c;return s("div",[t._items&&t._items.length>0?s("div",{staticClass:"lh-18 pb-2 td-def"},t._l(t._items,(function(e,a){return s("div",{key:a,staticClass:"qiong-pt-3 pb-1 td-hr px-7"},[s("nav",{staticClass:"qiong-td qiong-txt-td"},[s("div",{staticClass:"qiong-wide-9 fw-b"},[t._v(" "+t._s(e.user)+" ")]),s("div",{staticClass:"qiong-wide-24"},[t._v(" "+t._s(e.user_name)+" ")]),s("div",{staticClass:"qiong-wide-11"},[e.is_plus?s("span",{staticClass:"txt-sub_x2"},[t._v("+ ")]):s("span",{staticClass:"txt-sub_x2"},[t._v("- ")]),t._v(" "+t._s(e.LP_difference)+" LP ")]),s("div",{staticClass:"qiong-wide-8 txt-sus"},[t._v(" "+t._s(e.wallet_before)+" ")]),s("div",{staticClass:"qiong-wide-10 pr-0"},[t._v(" "+t._s(e.wallet_after)+" ")]),s("div",{staticClass:"qiong-wide-15 pr-0"},[t._v(" "+t._s(t.view.ser_timed(e.date,!1,!1))+" ")]),s("div",{staticClass:"qiong-wide-9"},[t._v(" "+t._s(t.view.backend.view_lp_opera_typed(e.type))+" ")]),s("div",{staticClass:"qiong-wide-14 fx-s pr-0"},[t._v(" "+t._s(e.remark)+" ")])])])})),0):s("qiong-empty")],1)},_=[],p=e(3233),v={components:{QiongEmpty:p.Z},name:"",props:["_items"]},g=v,f=e(1001),m=(0,f.Z)(g,u,_,!1,null,"454b9c3c",null),h=m.exports,C=function(){var t=this;t._self._c;return t._m(0)},x=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"px-7 extra-tr pb-2"},[s("div",{staticClass:"qiong-tr qiong-txt-tr pb-1"},[s("div",{staticClass:"qiong-wide-9"},[t._v(" 用戶編號 ")]),s("div",{staticClass:"qiong-wide-24"},[t._v(" 會員名稱 ")]),s("div",{staticClass:"qiong-wide-11"},[t._v(" 積分變更 ")]),s("div",{staticClass:"qiong-wide-8"},[t._v(" 原積分 ")]),s("div",{staticClass:"qiong-wide-10"},[t._v(" 變更結果 ")]),s("div",{staticClass:"qiong-wide-15"},[t._v(" 變更時間 ")]),s("div",{staticClass:"qiong-wide-9"},[t._v(" 類型 ")]),s("div",{staticClass:"qiong-wide-14"},[t._v(" 備註 ")])])])}],b={components:{QiongSpace:c.Z},name:"",data(){return{}}},q=b,w=(0,f.Z)(q,C,x,!1,null,"b2ca459c",null),Z=w.exports,y={components:{QiongHeaderFilter:l.Z,QiongPanelElement:r.Z,McLpPlusTr:Z,McLpPlusBody:h,QiongSpace:c.Z,ToolReady:n.Z,NetLpPlusRecord:d.Z,QiongLoading:o.Z},name:"",data(){return{records:[],loading:!0}},computed:{user(){return this.$store.state.user_backend}},mounted(){},methods:{async init(){let t;this.loading=!0,t=await this.$refs.recordREF.LpAddRecord({_limit:300}),this.records=t,setTimeout((t=>this.loading=!1),300)}}},L=y,P=(0,f.Z)(L,a,i,!1,null,"01ad64e1",null),k=P.exports}}]);
//# sourceMappingURL=8054.9cf6bf52.js.map