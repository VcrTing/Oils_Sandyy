webpackJsonp([19],{"72n8":function(t,e){},LaFb:function(t,e){},"Ogc/":function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"qiong-txt-10"},[1==this.v?e("span",{staticClass:"tag-audit"},[this._v("\n        LP 等級變更\n    ")]):e("span",{staticClass:"tag-auditing"},[this._v("\n        LP 積分變更\n    ")])])},staticRenderFns:[]},i=n("VU/8")({props:["v"]},s,!1,null,null,null);e.a=i.exports},Vydf:function(t,e,n){"use strict";var s=n("5dBV"),i=n.n(s),r=n("Xxa5"),a=n.n(r),c=n("exGp"),o=n.n(c),l={name:"",data:function(){return{}},methods:{_lunching:function(t){var e=this;return o()(a.a.mark(function n(){var s;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.ex_get(e,"browse_LP_log",t);case 2:return s=(s=n.sent)&&s.message?s.message:[],n.abrupt("return",s.map(function(t){return t.is_plus=e._is_plus(t.LP_difference),t.LP_difference=e._ser_lp(t.LP_difference),t}));case 5:case"end":return n.stop()}},n,e)}))()},LpRecord:function(t){var e=this;return o()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._lunching(t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n,e)}))()},LpAddRecord:function(t){var e=this;return o()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.description="additional",n.next=3,e._lunching(t);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},n,e)}))()},_ser_lp:function(t){return t?Math.abs(i()(t)):0},_is_plus:function(t){return t?t.indexOf("+")>=0:null}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(t){n("LaFb")},"data-v-8d985e24",null);e.a=d.exports},cCxQ:function(t,e){},h9Oh:function(t,e){},iyZm:function(t,e){},naA6:function(t,e){},uDc8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Xxa5"),i=n.n(s),r=n("exGp"),a=n.n(r),c=n("1R8D"),o=n("OhMI"),l=n("IB0D"),u=n("/LGW"),d=n("oKCz"),_=n("Vydf"),v={methods:{LpLevelAuto:function(t){var e=this;return a()(i.a.mark(function n(){var s;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.ex_get(e,"browse_rank_change_auto",t);case 2:if(!(s=n.sent)){n.next=6;break}return s=s.data?s.data:null,n.abrupt("return",e.ser_result(s));case 6:case"end":return n.stop()}},n,e)}))()},LpLevelManual:function(t){var e=this;return a()(i.a.mark(function n(){var s;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.conn.ex_get(e,"browse_rank_change_manual",t);case 2:if(!(s=n.sent)){n.next=6;break}return s=s.data?s.data:null,n.abrupt("return",e.ser_result(s));case 6:case"end":return n.stop()}},n,e)}))()},ser_result:function(t){var e=this;return t.map(function(t){return t.content=e._ser_txt(t.change_display),e._ser_type(t)})},_ser_type:function(t){return"rank"==t.log_type?t.typed=1:t.typed=2,t},_ser_txt:function(t){return t.replace("start_rank","LP 起始等級變更").replace("rank","LP 等級變更")+"(級)"}}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},f=n("VU/8")(v,p,!1,null,null,null).exports,m=n("zDkF"),g=n("Ogc/"),h={components:{QiongEmpty:m.a,ExtraChangeTypeView:g.a},props:["_items"],mounted:function(){console.log("this.items =",this._items)},data:function(){return{}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t._items&&t._items.length>0?n("div",{staticClass:"px-7 mb-3"},t._l(t._items,function(e,s){return n("div",{key:s,staticClass:"qiong-td qiong-txt-td  py-3 lh-def fx-l"},[n("div",{staticClass:"qiong-wide-10"},[t._v("\n            "+t._s(e.user.member_code)+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-20"},[t._v("\n            "+t._s(e.user.display_name)+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-15 pr-0"},[t._v("\n            "+t._s(t.view.ser_timed(e.date,!1,!1))+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13 t-c pr-0"},[n("extra-change-type-view",{attrs:{v:e.typed}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-24 pl-2"},[t._v("\n            "+t._s(e.content)+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-17"},[t._v("\n            "+t._s(e.remark)+"\n        ")])])}),0):n("qiong-empty")},staticRenderFns:[]};var w=n("VU/8")(h,x,!1,function(t){n("cCxQ")},"data-v-7e353c84",null).exports,b={components:{QiongEmpty:m.a},name:"",props:["_items"],mounted:function(){console.log("this.items =",this._items)},data:function(){return{itemss:[]}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._items&&t._items.length>0?n("div",{staticClass:"lh-18 pb-2 td-def"},t._l(t._items,function(e,s){return n("div",{key:s,staticClass:"qiong-pt-3 pb-1 td-hr px-7"},[n("nav",{staticClass:"qiong-td qiong-txt-td "},[n("div",{staticClass:"qiong-wide-8 fw-b"},[t._v("\n                "+t._s(e.user)+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("\n                    "+t._s(e.user_name)+"\n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v("\n                    "+t._s(t.view.backend.view_lp_opera_typed(e.type))+" \n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-8"},[t._v("\n                    "+t._s(e.order_uuid)+"\n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-7"},[t._v("\n                    "+t._s(e.order_pv)+"\n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[e.LP_percentage?n("span",[t._v("\n                        "+t._s(100*e.LP_percentage)+" %\n                    ")]):t._e()]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[e.is_plus?n("span",{staticClass:"txt-sub_x2"},[t._v("+ ")]):n("span",{staticClass:"txt-sub_x2"},[t._v("- ")]),t._v("\n                    "+t._s(e.LP_difference)+" LP\n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-6 txt-sus"},[t._v("\n                    "+t._s(e.wallet_before)+"\n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-8 pr-0"},[t._v("\n                    "+t._s(e.wallet_after)+"\n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13 pr-0"},[t._v("\n                    "+t._s(t.view.ser_timed(e.date,!1,!1))+"\n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-9 fx-s pr-0"},[t._v("\n                    "+t._s(e.remark)+"\n                ")])])])}),0):n("qiong-empty")],1)},staticRenderFns:[]};var q=n("VU/8")(b,C,!1,function(t){n("iyZm")},"data-v-445fcb4d",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-7 extra-tr pb-2"},[n("div",{staticClass:"qiong-tr qiong-txt-tr pb-1"},[n("div",{staticClass:"qiong-wide-8"},[t._v("\n            變更對象\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("\n            用戶名\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v("\n            類型\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-8"},[t._v("\n            訂單編號\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-7"},[t._v("\n            訂單 PV\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v("\n            LP 百分比\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[t._v("\n            積分變更\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-6"},[t._v("\n            原積分\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-8"},[t._v("\n            變更結果\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("\n            變更時間\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v("\n            備註\n        ")])])])}]},L=n("VU/8")({},y,!1,null,null,null).exports,k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qiong-txt-12 mobie-pt-12"},t._l(t.tabs,function(e,s){return n("button",{key:s,staticClass:"btn-filter-pure",class:{"btn-filter-pure-active":t.now==e.v,"txt-txt_x3_red":t.now!=e.v},on:{click:function(n){return t.switching(e.v)}}},[t._v("\n        "+t._s(e.txt)+"\n    ")])}),0)},staticRenderFns:[]};var F=n("VU/8")({name:"",data:function(){return{now:2,tabs:[{txt:"LP 積分變更",v:2},{txt:"LP 等級變更",v:1}]}},mounted:function(){},methods:{switching:function(t){this.now=t,this.$emit("sign_Father",t)}}},k,!1,function(t){n("naA6")},"data-v-0957c455",null).exports,P=n("gBtx"),E=n.n(P),R=n("PJh5"),$=n.n(R),V={components:{DateSelect:n("YPBt").a},name:"",props:{typed:Number,_funnl:Object},data:function(){return{funnel:{user:"",date_gte:"",date_lt:""},loading:!0}},mounted:function(){this.reset()},computed:{chronu:function(){return this.$store.state.chronus}},methods:{is_number:function(t){return!isNaN(E()(t))},submit:function(){var t={},e=this.funnel;for(var n in e)e[n]&&("user"==n?this.is_number(e[n])?t.member_code=e[n]:t.user_name=e[n]:t[n]=e[n]);this.$emit("submit_Father",t)},reset:function(){this.funnel.user="",this.funnel.date_lt=this.chronu.end?$()(this.chronu.end).format("yyyy-MM-DD"):this.view.getToday(),this.funnel.date_gte=this.chronu.start,this.submit(),this.loading=!1},result:function(){var t={},e=this.funnel;for(var n in e)e[n]&&("user"==n?t.member_code=e[n]:t[n]=e[n]);return t}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"bar-filter px-7 mt-0 mb-1"},[n("div",{staticClass:"mobie-show pt-3"}),t._v(" "),n("div",{staticClass:"v_col qiong-pt-15"},[n("div",{staticClass:"d-ib"},[n("label",[t._v("變更時間"+t._s(t.typed))]),t._v(" "),n("div",{staticClass:"input-time"},[t.loading?n("input",{attrs:{type:"text",placeholder:"起始時間"}}):n("date-select",{attrs:{date:t.funnel.date_gte},on:{timed_Father:function(e){return t.funnel.date_gte=e}}})],1),t._v(" "),n("span",{staticClass:"bf_sub"},[t._v("至")]),t._v(" "),n("div",{staticClass:"input-time"},[t.loading?n("input",{attrs:{type:"text",placeholder:"結束時間"}}):n("date-select",{attrs:{date:t.funnel.date_lt},on:{timed_Father:function(e){return t.funnel.date_lt=e}}})],1)]),t._v(" "),n("div",{staticClass:"d-ib mobie-pt-12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.funnel.user,expression:"funnel.user"}],attrs:{type:"text",placeholder:"會員編號"},domProps:{value:t.funnel.user},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},input:function(e){e.target.composing||t.$set(t.funnel,"user",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mobie-show pt-6"}),t._v(" "),n("button",{staticClass:"submit an_lefter",on:{click:t.submit}},[n("v-icon",[t._v("mdi-filter-outline")]),t._v("\n            篩選\n        ")],1),t._v(" "),n("button",{staticClass:"txt-acc_sub",on:{click:t.reset}},[n("v-icon",[t._v("mdi-reload")]),t._v("\n            重置\n        ")],1)])])},staticRenderFns:[]};var O=n("VU/8")(V,M,!1,function(t){n("h9Oh")},"data-v-38966a50",null).exports,U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-7 extra-tr"},[n("div",{staticClass:"qiong-tr qiong-txt-tr"},[n("div",{staticClass:"qiong-wide-10"},[t._v("\n            會員編號\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-20"},[t._v("\n            會員名稱\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-15"},[t._v("\n            變更時間\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13 t-c"},[t._v("\n            類別\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-24 pl-2"},[t._v("\n            變更內容\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-17"},[t._v("\n            備註\n        ")])])])}]},T=n("VU/8")({},U,!1,null,null,null).exports,B={methods:{typed:function(t){this.def_typed=t,this.switching(this.$refs.topREF.result())},switching:function(t){var e=this;return a()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,console.log("CONT =",t),n.next=4,e.origin(t);case 4:e.records_origin=n.sent,e.pager(0,e.limit),setTimeout(function(t){return e.loading=!1},600);case 7:case"end":return n.stop()}},n,e)}))()},funnel:function(t){return t=this.records_origin,this.records_page=t,t},origin:function(t){var e=this;return a()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t._limit=500,1!=e.def_typed){n.next=7;break}return n.next=4,e.$refs.recLpLevelREF.LpLevelAuto(t);case 4:return n.abrupt("return",n.sent);case 7:if(2!=e.def_typed){n.next=11;break}return n.next=10,e.$refs.lpPlusREF.LpRecord(t);case 10:return n.abrupt("return",n.sent);case 11:case"end":return n.stop()}},n,e)}))()},pager:function(t,e){var n=this.funnel();console.log("res =",n.slice(t,e),t,e),this.records=n.slice(t,e)}},data:function(){return{records_origin:null,records_page:null,records:null,loading:!0,def_typed:2,limit:30}},components:{QiongHeaderFilter:u.a,MllamcTopBar:F,QiongPanelElement:o.a,MllamcBody:w,MllamcTr:T,MllamcTopFilter:O,QiongLoading:d.a,Pagenation:c.a,TablePagerFooter:l.a,NetMemberLpLevelRecord:f,MllamcLpBody:q,MllamcLpTr:L,NetLpPlusRecord:_.a}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[n("mllamc-top-filter",{ref:"topREF",attrs:{typed:t.def_typed},on:{submit_Father:t.switching}}),t._v(" "),n("qiong-header-filter",[n("span",{attrs:{slot:"header"},slot:"header"},[t._v("LP 資料變更記錄")]),t._v(" "),n("mllamc-top-bar",{attrs:{slot:"filter"},on:{sign_Father:t.typed},slot:"filter"})],1),t._v(" "),2==t.def_typed?n("qiong-panel-element",{staticClass:"mobie-table",attrs:{need_space:!1}},[n("mllamc-lp-tr"),t._v(" "),t.loading?n("qiong-loading"):n("mllamc-lp-body",{attrs:{_items:t.records}})],1):n("qiong-panel-element",{staticClass:"mobie-table",attrs:{need_space:!1}},[n("mllamc-tr"),t._v(" "),t.loading?n("qiong-loading"):n("mllamc-body",{attrs:{_items:t.records}})],1),t._v(" "),n("div",{staticClass:"fx-c mt-5 pt-3"},[t.records_page&&!t.loading?n("pagenation",{attrs:{_limit:t.limit,_count:t.records_page.length},on:{page_Father:t.pager}}):t._e()],1),t._v(" "),n("table-pager-footer"),t._v(" "),n("net-member-lp-level-record",{ref:"recLpLevelREF"}),t._v(" "),n("net-lp-plus-record",{ref:"lpPlusREF"})],1)},staticRenderFns:[]};var N=n("VU/8")(B,D,!1,function(t){n("72n8")},"data-v-51226962",null);e.default=N.exports}});
//# sourceMappingURL=19.9190b865e9de7565794b.js.map