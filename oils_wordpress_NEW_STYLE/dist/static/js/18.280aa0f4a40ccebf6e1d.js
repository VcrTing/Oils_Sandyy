webpackJsonp([18],{"1rae":function(t,e){},"6TrS":function(t,e,n){"use strict";var a=n("Xxa5"),i=n.n(a),s=n("exGp"),r=n.n(s),o={methods:{audit:function(t){var e=this;return r()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:!0;case 1:case"end":return t.stop()}},t,e)}))()},fetching:function(){var t=this;return r()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.conn.ex_get(t,"transfer_audit_record",{_limit:300});case 2:if(n=e.sent,console.log("转账审核 res =",n),!n){e.next=6;break}return e.abrupt("return",n);case 6:case"end":return e.stop()}},e,t)}))()},edit:function(t){var e=this;return r()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.ex_patch(e,"transfer_audit_edit",t,"");case 2:if(!n.sent){n.next=5;break}return n.abrupt("return",!0);case 5:case"end":return n.stop()}},n,e)}))()}}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var d=n("VU/8")(o,c,!1,function(t){n("L2Yo")},null,null);e.a=d.exports},Hc0Y:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),i=n.n(a),s=n("exGp"),r=n.n(s),o=n("1R8D"),c=n("OhMI"),d=n("IB0D"),u=n("/LGW"),l=n("zDkF"),v=n("oKCz"),_=n("Um5R"),f=n("6TrS"),m={name:"",props:["one","_id"],data:function(){return{res:0,loading:!1}},mounted:function(){},methods:{condition:function(){return{id:this.one.id,is_approved:0!=this.res}},update:function(){var t=this;this.loading=!0,this.$emit("update",this.condition()),setTimeout(function(){t.loading=!1},1200)},open:function(){var t=document.getElementById("audit_"+this._id);t.click(),console.log(t)}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qiong-txt-10 ps-r"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"audit-select",class:"audit-s-"+t.res},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.res,expression:"res"}],staticClass:"txt-fff",attrs:{id:"audit_"+t._id},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.res=e.target.multiple?n:n[0]},t.update]}},[n("option",{attrs:{value:"0"}},[t._v("審核中")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("審核通過")])]),t._v(" "),0==t.res?n("v-icon",{staticClass:"qiong-txt-12 txt-fff op-70",on:{click:t.open}},[t._v("mdi-pencil-outline")]):t._e(),t._v(" "),1==t.res?n("v-icon",{staticClass:"qiong-txt-12 txt-fff op-70",on:{click:t.open}},[t._v("mdi-chevron-down")]):t._e()],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[n("v-icon",{staticClass:"qiong-txt-20 circle-around"},[t._v("mdi-loading")])],1)])},staticRenderFns:[]};var g=n("VU/8")(m,p,!1,function(t){n("UFIA")},"data-v-f0bdbf30",null).exports,h={components:{ExtraTransStatusOpera:g,NetTransferAudit:f.a},props:["v"],data:function(){return{items:[{start_member_code:"203001",start_display_name:"Ecmarketing",lp:23,end_member_code:"203002",end_display_name:"Eric",id:1,date_transfer:"2021-12-12 12:23",status:0,mark:"朋友贈送"},{start_member_code:"203001",start_display_name:"Ecmarketing",lp:23,end_member_code:"203002",end_display_name:"Eric",id:2,date_transfer:"2021-12-12 12:23",status:0,mark:"朋友贈送"}]}},methods:{}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qiong-td qiong-txt-td py-2 lh-def fx-l"},[n("div",{staticClass:"qiong-wide-8 fw-b"},[t._v("\n        "+t._s(t.v.start_member_code)+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-17"},[t._v("\n        "+t._s(t.v.start_display_name)+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-8"},[t._v("\n        "+t._s(t.v.lp)+" LP\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-8"},[t._v("\n        "+t._s(t.v.end_member_code)+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-17"},[t._v("\n        "+t._s(t.v.end_display_name)+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-15 pr-0"},[t._v("\n        "+t._s(t.view.ser_timed(t.v.date_transfer,!1,!1))+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13 t-c pr-0"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"qiong-wide-14 pl-2"},[t._v("\n        "+t._s(t.v.mark)+"\n    ")])])},staticRenderFns:[]};var b=n("VU/8")(h,x,!1,function(t){n("Jg8N")},"data-v-704d3fb6",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qiong-txt-12"},t._l(t.tabs,function(e,a){return n("button",{key:a,staticClass:"btn-filter-pure",class:{"btn-filter-pure-active":t.now==e.v,"txt-txt_x3_red":t.now!=e.v},on:{click:function(n){t.now=e.v}}},[t._v("\n        "+t._s(e.txt)+"\n    ")])}),0)},staticRenderFns:[]};var C=n("VU/8")({name:"",props:["_many","_many_origin"],data:function(){return{now:0,tabs:[{txt:"全部",v:0},{txt:"審核中",v:1},{txt:"審核通過",v:2}]}},watch:{now:function(t,e){var n=this.switching(t);n=null==n?this._many_origin:this._many.filter(function(t){return t.status==n}),this.$emit("sign_Father",n)}},methods:{switching:function(t){var e=0;return 0==t?null:(1==t?e=0:2==t&&(e=1),e)}}},w,!1,function(t){n("Omm2")},"data-v-74027527",null).exports,y={components:{DateSelect:n("YPBt").a},name:"",props:{_funnl:Object},data:function(){return{funnel:{user:"",date_gte:"",date_lt:""},loading:!0}},mounted:function(){this.reset()},methods:{locaProduct:function(t){var e=this.$store.state.products,n="";if(t)for(var a=function(a){var i=e[a];i.translation.map(function(e){e.product_name.indexOf(t)>=0&&(n=i.sku)})},i=0;i<e.length;i++)a(i);return n},submit:function(){var t={};for(var e in this.funnel)this.funnel[e]&&("named"==e?t["produc.sku"]=this.locaProduct(this.funnel[e]):t[e]=this.funnel[e]);this.$emit("submit_Father",t)},reset:function(){this.funnel.user="",this.funnel.named="",this.funnel.date_lt=this.view.getToday(),this.funnel.date_gte=this.$store.state.chronus.start,this.submit(),this.loading=!1}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"bar-filter px-7 mt-0 mb-1"},[n("div",{staticClass:"mobie-show pt-3"}),t._v(" "),n("div",{staticClass:"v_col qiong-pt-15"},[n("div",{staticClass:"d-ib"},[n("label",[t._v("轉賬日期")]),t._v(" "),n("div",{staticClass:"input-time"},[t.loading?n("input",{attrs:{type:"text",placeholder:"起始時間"}}):n("date-select",{attrs:{date:t.funnel.date_gte},on:{timed_Father:function(e){return t.funnel.date_gte=e}}})],1),t._v(" "),n("span",{staticClass:"bf_sub"},[t._v("至")]),t._v(" "),n("div",{staticClass:"input-time"},[t.loading?n("input",{attrs:{type:"text",placeholder:"結束時間"}}):n("date-select",{attrs:{date:t.funnel.date_lt},on:{timed_Father:function(e){return t.funnel.date_lt=e}}})],1)]),t._v(" "),n("div",{staticClass:"d-ib"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.funnel.user,expression:"funnel.user"}],attrs:{type:"text",placeholder:"發款人編號或名稱"},domProps:{value:t.funnel.user},on:{input:function(e){e.target.composing||t.$set(t.funnel,"user",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mobie-show pt-4"}),t._v(" "),n("button",{staticClass:"submit",on:{click:t.submit}},[n("v-icon",[t._v("mdi-filter-outline")]),t._v("\n            篩選\n        ")],1),t._v(" "),n("button",{staticClass:"txt-acc_sub",on:{click:t.reset}},[n("v-icon",[t._v("mdi-reload")]),t._v("\n            重置\n        ")],1)])])},staticRenderFns:[]};var k=n("VU/8")(y,q,!1,function(t){n("Sbpx")},"data-v-0ae8fca3",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-7 extra-tr"},[n("div",{staticClass:"qiong-tr qiong-txt-tr"},[n("div",{staticClass:"qiong-wide-8"},[t._v("發款人")]),t._v(" "),n("div",{staticClass:"qiong-wide-17"},[t._v("發款人名稱")]),t._v(" "),n("div",{staticClass:"qiong-wide-8"},[t._v("轉賬積分")]),t._v(" "),n("div",{staticClass:"qiong-wide-8"},[t._v("收款人")]),t._v(" "),n("div",{staticClass:"qiong-wide-17"},[t._v("收款人名稱")]),t._v(" "),n("div",{staticClass:"qiong-wide-15"},[t._v("轉賬日期")]),t._v(" "),n("div",{staticClass:"qiong-wide-13 t-c"},[t._v("狀態")]),t._v(" "),n("div",{staticClass:"qiong-wide-14 pl-2"},[t._v("備註")])])])}]};var F=n("VU/8")({name:"",data:function(){return{}}},E,!1,function(t){n("L1j+")},"data-v-386058ba",null).exports,T={name:"",components:{QiongHeaderFilter:u.a,TmaTr:F,QiongPanelElement:c.a,TmaTopFilter:C,TmaBody:b,QiongSpace:_.a,TmaTopSearchBar:k,Pagenation:o.a,TablePagerFooter:d.a,NetTransferAudit:f.a,ExtraTransStatusOpera:g,QiongLoading:v.a,QiongEmpty:l.a},data:function(){return{loading:!0,many:[],many_origin:[{start_member_code:"203001",start_display_name:"Ecmarketing",lp:23,end_member_code:"203002",end_display_name:"Eric",id:1,date_transfer:"2021-12-12 12:23",status:0,mark:"朋友贈送"},{start_member_code:"203001",start_display_name:"Ecmarketing",lp:23,end_member_code:"203002",end_display_name:"Eric",id:2,date_transfer:"2021-12-12 12:23",status:0,mark:"朋友贈送"}]}},mounted:function(){this.fetching()},methods:{fetching:function(){var t=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$refs.auditREF.fetching();case 4:e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:t.many=t.many_origin,setTimeout(function(e){return t.loading=!1},400);case 11:case"end":return e.stop()}},e,t,[[1,7]])}))()},filter:function(t){var e=this;this.loading=!0,this.many=t,setTimeout(function(t){return e.loading=!1},400)},one:function(t){var e=this.many_origin.filter(function(e){return e.id==t});return e?e[0]:null},updStatus:function(t){var e=this;return r()(i.a.mark(function n(){var a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$refs.auditREF.edit(t);case 3:(a=n.sent)&&console.log("修改的数据 =",a),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:e.one(t.id).status=t.is_approved?1:0;case 11:case"end":return n.stop()}},n,e,[[0,7]])}))()}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[n("div",[n("tma-top-search-bar")],1),t._v(" "),n("qiong-header-filter",[n("span",{attrs:{slot:"header"},slot:"header"},[t._v("轉賬審核")]),t._v(" "),n("tma-top-filter",{attrs:{slot:"filter",_many:t.many,_many_origin:t.many_origin},on:{sign_Father:t.filter},slot:"filter"})],1),t._v(" "),n("qiong-panel-element",{staticClass:"mobie-table",attrs:{need_space:!1}},[n("tma-tr"),t._v(" "),t.loading?n("qiong-loading"):n("div",[t.many&&t.many.length>0?n("div",t._l(t.many,function(e,a){return n("nav",{key:a,staticClass:"px-7"},[n("tma-body",{attrs:{v:e}},[n("extra-trans-status-opera",{attrs:{_id:a,one:e},on:{update:t.updStatus}})],1)],1)}),0):n("qiong-empty")],1),t._v(" "),n("qiong-space",{attrs:{space:"24px"}})],1),t._v(" "),n("div",{staticClass:"fx-c qiong-pt-20 mt-3"},[n("pagenation")],1),t._v(" "),n("table-pager-footer"),t._v(" "),n("net-transfer-audit",{ref:"auditREF"})],1)},staticRenderFns:[]};var R=n("VU/8")(T,$,!1,function(t){n("1rae")},"data-v-c7d0103e",null);e.default=R.exports},Jg8N:function(t,e){},"L1j+":function(t,e){},L2Yo:function(t,e){},Omm2:function(t,e){},Sbpx:function(t,e){},UFIA:function(t,e){}});
//# sourceMappingURL=18.280aa0f4a40ccebf6e1d.js.map