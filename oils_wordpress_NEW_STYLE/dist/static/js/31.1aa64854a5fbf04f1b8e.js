webpackJsonp([31],{"6HOZ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Xxa5"),a=n.n(s),i=n("exGp"),r=n.n(i),o=n("oKCz"),c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"fx-c sos-succ py-6"},[t("v-icon",{staticClass:"qiong-txt-22"},[this._v("\n            mdi-check-circle\n        ")]),this._v(" "),t("div",{staticClass:"qiong-txt-18"},[this._v("\n             操作成功！！！\n        ")])],1)])},staticRenderFns:[]};var l=n("VU/8")({},c,!1,function(e){n("RhaO")},null,null).exports,u=n("akmo"),m=n("gBtx"),v=n.n(m),d=n("5dBV"),f=n.n(d),_=n("Gi8X"),h=n("YPBt"),g=n("Um5R"),p=n("Vv01"),b={components:{DateSelect:h.a,WidgetUserByMemberCode:_.a,DialogAlert:p.a,QiongSpace:g.a},data:function(){return{user:null,user_loading:!1,msg:"",funnel:{num:0,remark:"",member_code:""},loading:!0}},mounted:function(){this.reset()},computed:{hkd:function(){var e=this.user?this.user.e_wallet:null;return e?e.wallet:0}},watch:{"funnel.num":function(e,t){e&&(e=f()(e),isNaN(e)&&e<0&&(this.funnel.ewallet_change=0))}},methods:{validCode:function(){var e=this.funnel.member_code;return!!((e=v()(e))&&e>=203e3)},validNum:function(){var e=this.funnel.ewallet_change;return(e=!(!(e=v()(e))||0==e))+this.hkd>=0},fetchingUser:function(){var e=this;return r()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.validCode()){t.next=8;break}return e.user_loading=!0,t.next=4,e.$refs.userREF.fecthingUser(e.funnel.member_code);case 4:(n=t.sent)&&e.setUser(n),t.next=9;break;case 8:e.setUser(null);case 9:case"end":return t.stop()}},t,e)}))()},setUser:function(e){var t=this;this.user_loading=!0,this.user=e,setTimeout(function(e){return t.user_loading=!1},400)},alert:function(e){var t=this;this.msg=e,setTimeout(function(e){return t.msg=""},4400)},submit:function(){var e=this;if(this.validCode()){if(this.validNum())return this.funnel;this.msg="檢測到 LP積分數字有誤，請檢查輸入。"}else this.msg="檢測到 用戶編號 為空或輸入有誤，請檢查輸入。";setTimeout(function(t){return e.msg=""},4400)},reset:function(){var e=this;this.loading=!0,this.setUser(null),this.funnel={ewallet_change:null,member_code:"",remark:""},setTimeout(function(t){e.loading=!1},400)}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"form-def form-transfer"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:5}},[n("label",[e._v("收款人編號")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.funnel.member_code,expression:"funnel.member_code"}],attrs:{type:"text",placeholder:"請輸入收款人的編號"},domProps:{value:e.funnel.member_code},on:{change:e.fetchingUser,input:function(t){t.target.composing||e.$set(e.funnel,"member_code",t.target.value)}}})]),e._v(" "),n("v-col",{attrs:{cols:"12",sm:7}},[n("label",[e._v("收款人")]),e._v(" "),n("div",{staticClass:"fx-l input input-fix fx-l"},[e.user_loading?n("v-icon",{staticClass:"qiong-txt-18 ani-rotate loading"},[e._v("mdi-loading")]):n("p",[e.user?n("span",[n("v-icon",{staticClass:"qiong-txt-16"},[e._v("mdi-account-circle-outline")]),e._v(" "),n("span",[e._v("\n                            "+e._s(e.user.display_name)+"\n                        ")])],1):n("span",[e._v("\n                        (自動檢索)\n                    ")])])],1)])],1),e._v(" "),n("v-row",{staticClass:"transfer-wrapper"},[n("v-col",{attrs:{col:"12",sm:4,cols:"12"}},[n("label",{staticClass:"form-money"},[e._v("發款數")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.funnel.ewallet_change,expression:"funnel.ewallet_change"}],staticClass:"input-transfer",attrs:{type:"number",placeholder:"正數為加負數為減"},domProps:{value:e.funnel.ewallet_change},on:{input:function(t){t.target.composing||e.$set(e.funnel,"ewallet_change",t.target.value)}}})]),e._v(" "),n("v-col",{attrs:{col:"12",sm:8,cols:"12"}},[n("label",[e._v("收款人現有余額")]),e._v(" "),n("button",{staticClass:"input input-fix txt-money fw-b",on:{click:function(){}}},[e._v("\n                "+e._s(e.hkd?e.hkd:0)+"  HKD\n            ")])])],1),e._v(" "),n("v-row",[n("v-col",[n("label",[e._v("備註/留言")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.funnel.remark,expression:"funnel.remark"}],staticClass:"input-transfer",attrs:{type:"text",placeholder:"請輸入備註或留言"},domProps:{value:e.funnel.remark},on:{input:function(t){t.target.composing||e.$set(e.funnel,"remark",t.target.value)}}})])],1),e._v(" "),n("widget-user-by-member-code",{ref:"userREF"}),e._v(" "),e.msg?n("div",{staticClass:"pt-3 qiong-txt-16 anime-later"},[n("qiong-space",{attrs:{space:"0.5vw"}}),e._v(" "),n("dialog-alert",[e._v(e._s(e.msg))])],1):e._e()],1)},staticRenderFns:[]};var w=n("VU/8")(b,x,!1,function(e){n("PvZO")},"data-v-54a39b41",null).exports,C={components:{McFormPageLayout:u.a,EwAdminForm:w,QiongLoading:o.a,StsOperaShimmer:l},data:function(){return{adding:!1,succ:!1}},methods:{reset:function(){this.$refs.formREF.reset()},submit:function(){var e=this.$refs.formREF.submit();e&&this._submit("",e)},refresh:function(){this.reset(),this.succ=!1,this.adding=!1},_submit:function(e,t){var n=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.adding=!0,e.next=3,n.conn.ex_post(n,"admin_wallet_modify",t);case 3:e.sent&&setTimeout(function(e){return n.succ=!0},600);case 5:case"end":return e.stop()}},e,n)}))()}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mc-form-page-layout",{attrs:{no_switch:!0,header:"用戶資金操作"},on:{back_Father:function(t){return e.$router.go(-1)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.adding,expression:"!adding"}]},[n("ew-admin-form",{ref:"formREF"}),e._v(" "),n("div",{staticClass:"btn-transfer an_upper qiong-pt-15 qiong-txt-14"},[n("button",{staticClass:"reset",on:{click:e.reset}},[n("v-icon",{staticClass:"qiong-txt-16"},[e._v("mdi-refresh")]),e._v("\n                重置表單\n            ")],1),e._v(" "),n("button",{staticClass:"btn-pri",on:{click:e.submit}},[n("v-icon",{staticClass:"qiong-txt-16 mr-3"},[e._v("mdi-check-underline")]),e._v("\n                提交結果\n            ")],1)])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.adding,expression:"adding"}]},[e.succ?n("div",[n("sts-opera-shimmer"),e._v(" "),n("div",{staticClass:"fx-c py-8"},[n("button",{staticClass:"btn-sim an_upper",on:{click:e.refresh}},[e._v("确认")])])],1):n("qiong-loading",{staticClass:"an_upper",attrs:{bigger:1}})],1)])},staticRenderFns:[]};var y=n("VU/8")(C,k,!1,function(e){n("hB1x")},"data-v-329143aa",null);t.default=y.exports},PvZO:function(e,t){},RhaO:function(e,t){},hB1x:function(e,t){}});
//# sourceMappingURL=31.1aa64854a5fbf04f1b8e.js.map