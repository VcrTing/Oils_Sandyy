webpackJsonp([15],{"+Sjv":function(t,n){},"6TrS":function(t,n,e){"use strict";var s=e("Xxa5"),a=e.n(s),i=e("exGp"),r=e.n(i),c={methods:{audit:function(t){var n=this;return r()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:!0;case 1:case"end":return t.stop()}},t,n)}))()},fetching:function(){var t=this;return r()(a.a.mark(function n(){var e;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.conn.ex_get(t,"transfer_audit_record",{_limit:300});case 2:if(e=n.sent,console.log("转账审核 res =",e),!e){n.next=6;break}return n.abrupt("return",e);case 6:case"end":return n.stop()}},n,t)}))()},edit:function(t){var n=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.conn.ex_patch(n,"transfer_audit_edit",t,"");case 2:if(!e.sent){e.next=5;break}return e.abrupt("return",!0);case 5:case"end":return e.stop()}},e,n)}))()}}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var u=e("VU/8")(c,o,!1,function(t){e("L2Yo")},null,null);n.a=u.exports},"76cf":function(t,n){},BQ5D:function(t,n){},KbhU:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Xxa5"),a=e.n(s),i=e("exGp"),r=e.n(i),c=e("6TrS"),o=e("IJBQ"),u=e("Ot0E"),d=e("OhMI"),l=e("/LGW"),v=e("oKCz"),_=e("Um5R"),p=e("zDkF"),f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("span",{staticClass:"qiong-txt-10"},[1==this.v?n("span",{staticClass:"tag-audit"},[this._v("\n        审核通过\n    ")]):n("span",{staticClass:"tag-auditing"},[this._v("\n        审核中\n    ")])])},staticRenderFns:[]};var m=e("VU/8")({name:"",props:["v"],data:function(){return{}}},f,!1,function(t){e("BQ5D")},"data-v-568d0689",null).exports,h={components:{QiongSpace:_.a,ExtraTransStatusView:m,QiongEmpty:p.a},name:"",props:["_many"],data:function(){return{items:[]}}},g={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t._many&&t.many.length>0?e("div",{staticClass:"px-7"},[t._l(t._many,function(n,s){return e("div",{key:s,staticClass:"qiong-td qiong-txt-td  py-2 lh-def"},[e("div",{staticClass:"qiong-wide-10"},[t._v(t._s(n.num))]),t._v(" "),e("div",{staticClass:"qiong-wide-24"},[t._v(t._s(n.display_name))]),t._v(" "),e("div",{staticClass:"qiong-wide-9"},[t._v(t._s(n.lp)+" LP")]),t._v(" "),e("div",{staticClass:"qiong-wide-15"},[t._v(t._s(t.view.ser_timed(n.date_transfer,!1,!1)))]),t._v(" "),e("div",{staticClass:"qiong-wide-16"},[t._v(t._s(t.view.ser_timed(n.date_success,!1,!1)))]),t._v(" "),e("div",{staticClass:"qiong-wide-13 pr-0 t-c"},[e("extra-trans-status-view",{attrs:{v:n.status}})],1),t._v(" "),e("div",{staticClass:"qiong-wide-13"},[t._v(t._s(n.mark))])])}),t._v(" "),e("qiong-space",{attrs:{space:"12px"}})],2):e("qiong-empty")},staticRenderFns:[]};var x=e("VU/8")(h,g,!1,function(t){e("NKpP")},"data-v-98fc6226",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"px-7"},[e("div",{staticClass:"qiong-tr qiong-txt-tr"},[e("div",{staticClass:"qiong-wide-10"},[t._v("收款人編號")]),t._v(" "),e("div",{staticClass:"qiong-wide-24"},[t._v("收款人名稱")]),t._v(" "),e("div",{staticClass:"qiong-wide-9"},[t._v("轉賬積分")]),t._v(" "),e("div",{staticClass:"qiong-wide-15"},[t._v("轉賬時間")]),t._v(" "),e("div",{staticClass:"qiong-wide-16"},[t._v("過賬時間")]),t._v(" "),e("div",{staticClass:"qiong-wide-13 t-c"},[t._v("狀態")]),t._v(" "),e("div",{staticClass:"qiong-wide-13"},[t._v("備註")])])])}]};var C=e("VU/8")({name:"",data:function(){return{}}},w,!1,function(t){e("p87w")},"data-v-5dd72d6a",null).exports,q={components:{QiongHeaderFilter:l.a,QiongPanelElement:d.a,TmrrTr:C,TmrrBody:x,QiongSpace:_.a,NetTransferAudit:c.a,QiongLoading:v.a},props:["many"],data:function(){return{loading:!0,record:[{id:1,num:"203001",display_name:"ECMARKETING",lp:12,date:"2012-12-12 12:23",date_transfer:"2012-12-12 12:23",date_success:"2012-12-12 12:23",status:0,mark:"朋友贈送"},{id:2,num:"203009",display_name:"VDE",lp:12,date:"2012-12-12 12:23",date_transfer:"2012-12-12 12:23",date_success:"2012-12-12 12:23",status:1,mark:"朋友贈送"}]}},computed:{},mounted:function(){this.fetching()},methods:{fetching:function(){var t=this;return r()(a.a.mark(function n(){var e;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.$refs.audREF.fetching();case 3:(e=n.sent)&&(t.record=e),setTimeout(function(n){t.loading=!1},300);case 6:case"end":return n.stop()}},n,t)}))()}}},y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("qiong-header-filter",[e("span",{attrs:{slot:"header"},slot:"header"},[t._v("轉賬記錄")]),t._v(" "),e("div",{attrs:{slot:"filter"},slot:"filter"},[e("button",{staticClass:"btn qiong-txt-12 btn-sec btn-lg",on:{click:function(n){return t.$router.push("transfer_plus")}}},[t._v("\n                我要轉賬 "),e("v-icon",{staticClass:"qiong-txt-14"},[t._v("mdi-arrow-top-right")])],1)])]),t._v(" "),e("qiong-panel-element",{staticClass:"mobie-table",attrs:{need_space:!1}},[e("tmrr-tr"),t._v(" "),t.loading?e("qiong-loading"):e("tmrr-body",{attrs:{_many:t.record}})],1),t._v(" "),e("qiong-space",{attrs:{space:"7vw"}}),t._v(" "),e("net-transfer-audit",{ref:"audREF"})],1)},staticRenderFns:[]};var b=e("VU/8")(q,y,!1,function(t){e("krUR")},"data-v-19cd7bfc",null).exports,E={components:{MemberMsgWidget:o.a,MyMoneyWallet:u.a,TmrRecord:b,NetTransferAudit:c.a},name:"",data:function(){return{init:!1,loading:!0,many:[]}},mounted:function(){this.fetching()},methods:{fetching:function(){var t=this;return r()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.audREF.fetching();case 2:n.sent;case 3:case"end":return n.stop()}},n,t)}))()}}},k={render:function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[this.init?this._e():n("member-msg-widget",{attrs:{_code:this.$store.state.user_backend.member_code}}),this._v(" "),n("my-money-wallet",{staticClass:"mt-6",attrs:{hide_transfer:!0}}),this._v(" "),n("tmr-record",{staticClass:"mt-6"}),this._v(" "),n("net-transfer-audit",{ref:"audREF"})],1)},staticRenderFns:[]};var R=e("VU/8")(E,k,!1,function(t){e("+Sjv")},"data-v-39157529",null);n.default=R.exports},L2Yo:function(t,n){},NKpP:function(t,n){},Ot0E:function(t,n,e){"use strict";var s=e("Xxa5"),a=e.n(s),i=e("exGp"),r=e.n(i),c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.result.length>1?e("v-row",{staticClass:"px-7 t-c qiong-pt-15 pb-2"},t._l(t.result,function(n,s){return e("v-col",{key:s,attrs:{sm:4,cols:12}},[n?e("div",{staticClass:"taped"},[e("div",{staticClass:"tap-header",class:{"txt-scd_deep_son_ipt":s==t._page},domProps:{innerHTML:t._s(n.txt)}}),t._v(" "),e("div",{staticClass:"tap-content pt-2",class:{"txt-scd_son_ipt":s==t._page}},[t._v(t._s(n.content)),e("span",[t._v(t._s(n.unit))])])]):t._e()])}),1):e("nav",{staticClass:"fx-c t-c"},[t._l(t.result,function(n,s){return e("div",{key:s,staticClass:"taped"},[e("div",{staticClass:"tap-header"},[t._v("\n              "+t._s(n.txt)+"  \n            ")]),t._v(" "),e("div",{staticClass:"tap-content pt-2 op-95  money-shd"},[t._v(t._s(n.content)),e("span",{staticClass:"pl-3 n"},[t._v(t._s(n.unit))])])])}),t._v(" "),e("div",{staticClass:"pb-3"})],2)},staticRenderFns:[]};var o=e("VU/8")({name:"",props:["_item"],data:function(){return{loading:!0,tutal:[]}},computed:{result:function(){var t=this;return this._item.length>1?this._item.map(function(n,e){t.tutal[e].content=n||0}):this.tutal=[{txt:"個人賬戶積分總值",content:this._item?this._item[0]:"0",unit:"HKD"}],this.tutal}}},c,!1,function(t){e("tr0c")},"data-v-08296dd4",null).exports,u=e("Um5R"),d=e("T/Tv"),l=e("OhMI"),v=e("GAjY"),_=e("Vz2W"),p={components:{WalletList:o,QiongPanelElement:l.a,QiongSpace:u.a,QiongHeader:d.a,NetFund:v.a,Sign:_.a},props:["hide_transfer"],data:function(){return{wallet:[0],last_upd:""}},computed:{user:function(){var t=this.$store.state.user_backend;return t||null}},methods:{init:function(){var t=this;return r()(a.a.mark(function n(){var e;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.fundREF.fetching(t.user);case 2:(e=n.sent)&&e.length>=1&&(t.wallet=e.map(function(n){return t.last_upd=n.updated_at,n.wallet}));case 4:case"end":return n.stop()}},n,t)}))()}}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("qiong-header",[t._v("電子錢包")]),t._v(" "),e("qiong-panel-element",{attrs:{need_space:!1}},[e("qiong-space",{attrs:{space:"2vw"}}),t._v(" "),e("wallet-list",{attrs:{_item:t.wallet}}),t._v(" "),e("div",{staticClass:"t-r py-3 px-7"},[t.hide_transfer?t._e():e("div",{staticClass:"a-sus_sec d-ib pt-3",on:{click:function(n){return t.$router.push("/home/loyalty/transfer_plus")}}},[e("span",[t._v("我要轉賬")]),t._v(" "),e("v-icon",{staticClass:"qiong-txt-16"},[t._v("mdi-arrow-top-right")])],1),t._v(" "),e("div",{staticClass:"t-r"},[e("span",{staticClass:"a-sus_sec"},[e("v-icon",{staticClass:"qiong-txt-16"},[t._v("mdi-calendar-blank")]),t._v("  \n                        "),e("span",{staticClass:"hv"},[t._v("最後更新於："+t._s(t.view.ser_timed(t.last_upd,!0,!1)))])],1)])])],1)],1),t._v(" "),e("net-fund",{ref:"fundREF"}),t._v(" "),t.user?e("sign",{on:{sign_Father:t.init}}):t._e()],1)},staticRenderFns:[]};var m=e("VU/8")(p,f,!1,function(t){e("76cf")},"data-v-c3436a56",null);n.a=m.exports},krUR:function(t,n){},p87w:function(t,n){},tr0c:function(t,n){}});
//# sourceMappingURL=15.ceedcecf8d0e6b5f5a7c.js.map