webpackJsonp([9,13],{CrnW:function(t,e){},GhmG:function(t,e){},H7fN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{AccountStatement:n("HeVP").default},name:"",data:function(){return{}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("account-statement",{attrs:{_mode:1}})},staticRenderFns:[]};var o=n("VU/8")(s,i,!1,function(t){n("P2Rk")},"data-v-44688034",null);e.default=o.exports},HeVP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("mvHQ"),i=n.n(s),o=n("Xxa5"),a=n.n(o),r=n("exGp"),d=n.n(r),c=n("VxnQ"),_={props:{eva:{type:Number,default:1},icon:{type:String,default:"mdi-arrow-up"},color:{type:String,default:""},extra_calss:{type:String,default:""},is_fixed:{type:Boolean,default:!0},l_or_r:{type:Boolean,default:!1},is_small:{type:Boolean,default:!1}},name:"",data:function(){return{go:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.gotop=t>30},toTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=setInterval(function(){document.body.scrollTop=document.documentElement.scrollTop=t-=10,t<=0&&clearInterval(e)},10)}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"mx-2 right_20 top_80 mr-0 z-L",class:t.extra_calss,attrs:{fab:"",outlined:"",color:t.color,fixed:t.is_fixed,left:t.l_or_r,right:!t.l_or_r,"x-small":t.is_small,elevation:t.eva},on:{click:t.toTop}},[n("v-icon",[t._v("\n            "+t._s(t.icon)+"\n        ")])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(_,l,!1,function(t){n("ZT/m")},"data-v-00fab62f",null).exports,m=n("OhMI"),v=n("T/Tv"),g=n("oKCz"),p=n("Um5R"),h={props:{_buyed:{type:Boolean},_bonused:{type:Boolean},is_simpler:{type:Boolean,default:!1}},name:"",mounted:function(){},data:function(){return{}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return this._buyed?this._e():e("div",{staticClass:"py-0 qiong-pt-10 mt-4 w-full",attrs:{cols:"12"}},[e("v-alert",{attrs:{border:"bottom","colored-border":this.is_simpler,type:"warning",dark:"",dismissible:""}},[this._v("本季度您沒有任何的消費！！！這將導致您的某些分紅金額等於”0“，並且在將來或不能免費領取大量優惠。\n    ")])],1)},staticRenderFns:[]};var b=n("VU/8")(h,f,!1,function(t){n("LOyP")},"data-v-2d3f1fbe",null).exports,q=n("3c3G"),w=n("DLFN"),C=n("gBtx"),y=n.n(C),S=n("rWo6"),$=n("TdNa"),x=n("3YjC"),E=n("zDkF"),R=n("/RRq"),O=n("sbAY"),U={components:{QiongTitleElement:S.a,QiongPageLing:x.a,QiongEmpty:E.a,QiongSpace:p.a,QiongLoading:g.a,QiongSubResult:$.a,SortFilterTrangle:R.a,StatementPager:O.a},props:{me:{type:Object},_item:{type:Object}},data:function(){return{limit:130,pvs:0,ordering:[],loading:!0}},mounted:function(){this.limit=this.bonus.conf.USER_PV_LIMIT_ACTIVE_HOUSE,this.switchOrders()},computed:{has:function(){if(this._item&&this._item.active_branch_bonus_detail)return!0},result:function(){var t=[{txt:this.$t("BONUS.NORMAL.usd_active_house"),content:"US$ 0"},{txt:this.$t("BONUS.PUBLIC.order_total_pv"),content:"0"}];if(this.has){var e=this._item.total_bonus,n=this.pvs;e=e||0,n=n||0,t[1].content=n,t[0].content="US$ "+e}return t}},methods:{switchOrders:function(){var t=this;this.loading=!0,this.ordering=this.has?this._item.active_branch_bonus_detail:[];var e=0;this.ordering.map(function(t){e+=t.order_pv}),this.pvs=e||0,setTimeout(function(e){return t.loading=!1},200)},resetSort:function(t){12!=t&&this.$refs.sortMemberCode.rest()},member_code_sort:function(t){this.sort(t,12)},sort_by_member_code:function(t){var e=this;return d()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t>0?e.ordering.sort(function(t,e){return y()(t.member_code)-y()(e.member_code)}):t<0?e.ordering.sort(function(t,e){return y()(e.member_code)-y()(t.member_code)}):(e.ordering=[],e.switchOrders());case 1:case"end":return n.stop()}},n,e)}))()},sort:function(t,e){var n=this;0==this.loading&&(this.loading=!0,this.resetSort(e),12==e&&this.sort_by_member_code(t),setTimeout(function(t){n.loading=!1},300))}}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("statement-pager",[n("qiong-title-element",{attrs:{slot:"header"},slot:"header"},[t._v("\n        "+t._s(t.$t("HEADER.active_house"))+"\n    ")]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("div",{staticClass:"qiong-tr qiong-txt-tr"},[n("div",{staticClass:"qiong-wide-13"},[t._v("\n                "+t._s(t.$t("USER.member_code_another"))+"\n                "),n("sort-filter-trangle",{ref:"sortMemberCode",on:{sort_Father:t.member_code_sort}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-44"},[t._v("\n                "+t._s(t.$t("USER.member_username_another"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v("\n                "+t._s(t.$t("BONUS.PUBLIC.layer"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("\n                "+t._s(t.$t("ORDER.code"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[t._v("\n                "+t._s(t.$t("ORDER.point"))+"\n            ")])]),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("qiong-space",{attrs:{space:"0.5vh"}}),t._v(" "),t.ordering.length>0?n("div",t._l(t.ordering,function(e,s){return n("div",{key:s,staticClass:"qiong-td txt-td-result"},[n("div",{staticClass:"qiong-wide-13"},[t._v(t._s(e.member_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-44"},[t._v(t._s(e.display_name))]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v(t._s(e.level))]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v(t._s(e.order_uuid))]),t._v(" "),n("div",{staticClass:"qiong-wide-10",class:{"txt-sus":e.order_pv<t.limit}},[t._v(t._s(e.order_pv))])])}),0):n("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[t.loading?n("qiong-loading"):n("qiong-empty",{attrs:{bigger:0}})],1)],1),t._v(" "),n("qiong-sub-result",{attrs:{slot:"footer",res:t.result},slot:"footer"})],1)},staticRenderFns:[]};var B=n("VU/8")(U,T,!1,function(t){n("CrnW")},"data-v-a34afd48",null).exports,L=n("gSmO"),N=n("bjQD"),P={name:"",data:function(){return{}},mounted:function(){},methods:{toDown:function(){document.querySelector("#share_out").scrollIntoView(!0)}}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"so-go-top"},[e("div",{staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-8"}),this._v(" "),e("div",{staticClass:"qiong-wide-84 mobie-wide-100 pr-0 fx-r0"},[e("div",{staticClass:"fx-r0"},[e("div",{staticClass:"so-go-top-btn",on:{click:this.toDown}},[e("v-icon",[this._v("\n                        mdi-arrow-down\n                    ")]),this._v("\n                    "+this._s(this.$t("BONUS.NORMAL.lead_share_out"))+"\n                ")],1)])]),this._v(" "),e("div",{staticClass:"qiong-wide-8"})])])},staticRenderFns:[]};var M=n("VU/8")(P,Q,!1,function(t){n("TAoc")},"data-v-44624615",null).exports,k={components:{QiongTitleElement:S.a,QiongPageLing:x.a,QiongEmpty:E.a,QiongSpace:p.a,QiongLoading:g.a,QiongSubResult:$.a,SortFilterTrangle:R.a,StatementPager:O.a,SoGoTop:N.a,SoGoDown:M},props:{me:{type:Object},_item:{type:Object}},data:function(){return{ordering:[],loading:!0}},mounted:function(){this.switchOrders()},computed:{has:function(){if(this._item&&this._item.referal_detail)return!0},result:function(){var t=[{txt:this.$t("BONUS.NORMAL.usd_recommend"),content:"US$ 0"},{txt:this.$t("BONUS.PUBLIC.order_total_pv"),content:"0"}];if(this.has){var e=this._item.total_bonus,n=this._item.total_pv;e=e||0,n=n||0,t[1].content=n,t[0].content="US$ "+e}return t}},methods:{switchOrders:function(){var t=this;this.loading=!0,this.ordering=this.has?this._item.referal_detail:[],setTimeout(function(e){return t.loading=!1},300)},resetSort:function(t){12!=t&&this.$refs.sortMemberCode.rest()},member_code_sort:function(t){this.sort(t,12)},sort_by_member_code:function(t){var e=this;return d()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t>0?e.ordering.sort(function(t,e){return y()(t.member_code)-y()(e.member_code)}):t<0?e.ordering.sort(function(t,e){return y()(e.member_code)-y()(t.member_code)}):(e.ordering=[],e.switchOrders());case 1:case"end":return n.stop()}},n,e)}))()},sort:function(t,e){var n=this;0==this.loading&&(this.loading=!0,this.resetSort(e),12==e&&this.sort_by_member_code(t),setTimeout(function(t){n.loading=!1},300))}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("statement-pager",[n("qiong-title-element",{staticClass:"mobie-mt-24",attrs:{slot:"header"},slot:"header"},[t._v("\n        "+t._s(t.$t("HEADER.recommend"))+"\n    ")]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("div",{staticClass:"qiong-tr qiong-txt-tr"},[n("div",{staticClass:"qiong-wide-13"},[t._v("\n                "+t._s(t.$t("USER.member_code_another"))+"\n                "),n("sort-filter-trangle",{ref:"sortMemberCode",on:{sort_Father:t.member_code_sort}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-32"},[t._v("\n                "+t._s(t.$t("USER.member_username_another"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v("\n                "+t._s(t.$t("BONUS.PUBLIC.pay_index"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v("\n                "+t._s(t.$t("ORDER.code"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v("\n                "+t._s(t.$t("ORDER.point"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n                "+t._s(t.$t("BONUS.PUBLIC.usd_ratio"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[t._v("\n                "+t._s(t.$t("BONUS.PUBLIC.usd"))+"\n            ")])]),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("qiong-space",{attrs:{space:"0.5vh"}}),t._v(" "),t.ordering.length>0?n("div",t._l(t.ordering,function(e,s){return n("div",{key:s,staticClass:"qiong-td txt-td-result"},[n("div",{staticClass:"qiong-wide-13"},[t._v(t._s(e.member_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-32"},[t._v(t._s(e.display_name))]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v(t._s(e.payment_level))]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v(t._s(e.order_uuid))]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v(t._s(e.order_pv)+" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v(t._s(e.bonus_percentage))]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v("$ "+t._s(t.view.price_view(e.bonus_pv)))])])}),0):n("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[t.loading?n("qiong-loading"):n("qiong-empty",{attrs:{bigger:0}})],1)],1),t._v(" "),n("qiong-sub-result",{attrs:{slot:"footer",res:t.result},slot:"footer"}),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"})],1)},staticRenderFns:[]};var F=n("VU/8")(k,D,!1,function(t){n("idEC")},"data-v-ada95380",null).exports,A={components:{QiongTitleElement:S.a,QiongPageLing:x.a,QiongEmpty:E.a,QiongSpace:p.a,QiongLoading:g.a,QiongSubResult:$.a,SortFilterTrangle:R.a,StatementPager:O.a},props:{me:{type:Object},_item:{type:Object}},data:function(){return{ordering:[],loading:!0}},mounted:function(){this.switchOrders()},computed:{has:function(){if(this._item&&this._item.organisation_bonus_detail)return!0},result:function(){var t=[{txt:this.$t("BONUS.NORMAL.usd_team_layer"),content:"US$ 0"},{txt:this.$t("BONUS.PUBLIC.order_total_pv"),content:"0"}];if(this.has){var e=this._item.total_bonus,n=this._item.total_pv;e=e||0,n=n||0,t[1].content=n,t[0].content="US$ "+e}return t}},methods:{switchOrders:function(){var t=this;this.loading=!0,this.ordering=this.has?this._item.organisation_bonus_detail:[],setTimeout(function(e){return t.loading=!1},300)},resetSort:function(t){12!=t&&this.$refs.sortMemberCode.rest()},member_code_sort:function(t){this.sort(t,12)},sort_by_member_code:function(t){var e=this;return d()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t>0?e.ordering.sort(function(t,e){return y()(t.member_code)-y()(e.member_code)}):t<0?e.ordering.sort(function(t,e){return y()(e.member_code)-y()(t.member_code)}):(e.ordering=[],e.switchOrders());case 1:case"end":return n.stop()}},n,e)}))()},sort:function(t,e){var n=this;0==this.loading&&(this.loading=!0,this.resetSort(e),12==e&&this.sort_by_member_code(t),setTimeout(function(t){n.loading=!1},300))}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("statement-pager",[n("qiong-title-element",{attrs:{slot:"header"},slot:"header"},[t._v("\n        "+t._s(t.$t("HEADER.team_layer"))+"\n    ")]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("div",{staticClass:"qiong-tr qiong-txt-tr"},[n("div",{staticClass:"qiong-wide-13"},[t._v("\n                "+t._s(t.$t("USER.member_code_another"))+"\n                "),n("sort-filter-trangle",{ref:"sortMemberCode",on:{sort_Father:t.member_code_sort}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-33"},[t._v("\n                "+t._s(t.$t("USER.member_username_another"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[t._v("\n                "+t._s(t.$t("BONUS.PUBLIC.pay_index"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v("\n                "+t._s(t.$t("ORDER.code"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v("\n                "+t._s(t.$t("ORDER.point"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n                "+t._s(t.$t("BONUS.PUBLIC.usd_ratio"))+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[t._v("\n                "+t._s(t.$t("BONUS.PUBLIC.usd"))+"\n            ")])]),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("qiong-space",{attrs:{space:"0.5vh"}}),t._v(" "),t.ordering.length>0?n("div",t._l(t.ordering,function(e,s){return n("div",{key:s,staticClass:"qiong-td txt-td-result"},[n("div",{staticClass:"qiong-wide-13"},[t._v(t._s(e.member_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-33"},[t._v(t._s(e.display_name))]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[t._v(t._s(e.payment_level))]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v(t._s(e.order_uuid))]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v(t._s(e.order_pv))]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v(t._s(e.bonus_percentage))]),t._v(" "),n("div",{staticClass:"qiong-wide-10"},[t._v("$ "+t._s(t.view.price_view(e.bonus_pv)))])])}),0):n("div",{staticClass:"qiong-pt-20 pb-3 empty-content"},[t.loading?n("qiong-loading"):n("qiong-empty",{attrs:{bigger:0}})],1)],1),t._v(" "),n("qiong-sub-result",{attrs:{slot:"footer",res:t.result},slot:"footer"})],1)},staticRenderFns:[]};var V=n("VU/8")(A,I,!1,function(t){n("jPnE")},"data-v-501c117a",null).exports,j={components:{TimeMsgViewing:n("jYDR").a},name:"",props:{},data:function(){return{}}},G={render:function(){var t=this.$createElement;return(this._self._c||t)("time-msg-viewing")},staticRenderFns:[]};var H=n("VU/8")(j,G,!1,function(t){n("WupG")},"data-v-42e5b086",null).exports,z=n("w4gh"),W=n("l2NV"),J=n("DX/J"),X=n("T4em"),Y=n("BPJe"),Z=n("w315"),K=n("jTwT"),tt=n("mkfX"),et=n("0QqR"),nt={components:{QiongLoading:g.a,QiongSpace:p.a,QiongEmpty:E.a},name:"",props:{items:{type:Array},tr:{type:Boolean,default:!0}},data:function(){return{}}},st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tr?n("div",[n("qiong-space",{attrs:{space:"1.4vh"}}),t._v(" "),n("qiong-space",{attrs:{space:"1vw"}}),t._v(" "),n("div",{staticClass:"qiong-tr qiong-txt-tr"},[n("div",{staticClass:"qiong-wide-25"},[t._v("\n            "+t._s(t.$t("USER.member_code"))+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-27"},[t._v("\n            "+t._s(t.$t("USER.member_display_name"))+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-29"},[t._v("\n            "+t._s(t.$t("CONTENT.member"))+t._s(t.$t("USER.member_level"))+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-14"},[t._v("\n            "+t._s(t.$t("BONUS.NORMAL.lead_share_out"))+t._s(t.$t("CONTENT.point"))+"\n        ")])]),t._v(" "),n("qiong-space",{attrs:{space:"0.2vw"}}),t._v(" "),n("qiong-space",{attrs:{space:"0.5vh"}})],1):n("div",[t.items.length>0?n("div",t._l(t.items,function(e,s){return n("div",{key:s,staticClass:"qiong-td qiong-txt-td txt-td-result"},[n("div",{staticClass:"qiong-wide-25"},[t._v("\n                "+t._s(e.member_code)+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-27"},[t._v("\n                "+t._s(e.display_name)+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-29"},[t._v("\n                "+t._s(e.vip.nick)+"\n            ")]),t._v(" "),n("div",{staticClass:"qiong-wide-14"},[t._v("\n                "+t._s(e.pt)+" PT\n            ")])])}),0):n("div",{staticClass:"qiong-pt-20 pb-3"},[n("qiong-empty",{attrs:{bigger:0}})],1)])},staticRenderFns:[]};var it=n("VU/8")(nt,st,!1,function(t){n("GhmG")},"data-v-0541cb65",null).exports,ot=n("kduj"),at=n("4po5"),rt=n("NcEa"),dt={components:{QiongTitleElement:S.a,TeamBonusDetail:tt.a,StatementPager:O.a,SoSubColumn:Z.a,QiongSpace:p.a,QiongSubResult:$.a,BonusPanelLayout:X.a,SoFooterDivision:Y.a,QiongSubResultSlot:J.a,QsrWrapper:W.a,SoMWidget:K.a,QiongEmpty:E.a,QiongLoading:g.a,SoManageInner:et.a,SoDevelopInner:it,SoDevelopFooter:ot.a,SoMWidgetLoading:at.a,UserDevelopList:rt.a},name:"",props:{me:{type:Object},childs:{type:Array},__mode:{type:Number,default:1}},data:function(){return{get_total_lead_pt:0,my_lead_pt:0,global_pv:100,usd:120,some_res:null,collection:[],vip_leader:[6,7,8,9,10],manage_items:[],loading:!0,is_showing:!0}},computed:{vip:function(){if(this.me.vip)return L.a.vip_view.vip_now(this.me.vip.code).name}},mounted:function(){this.init(),this.$store.state.share_type<=0&&(this.is_showing=!1),this.me.bonu_period.DPV<=0&&(this.is_showing=!1)},methods:{init:function(){var t=this.$store.state.chronus;this.global_pv=t.period_total_pv?t.period_total_pv:0,this.get_total_lead_pt=t.period_total_development_point?t.period_total_development_point:0,this.me&&(this.my_lead_pt=this.me.bonu_period.development_point,this.usd=this.me.bonu_period.DPV,this.fetchBonusDetail()),this.some_res={bonus_pt:this.my_lead_pt,global_pv:this.global_pv,get_total_lead_pt:this.get_total_lead_pt},this.collection=this.$store.state.user_enroller},fetchBonusDetail:function(){var t=this;this.$refs.devREF.fetchingList(this.me).then(function(e){t.manage_items=e,setTimeout(function(e){t.loading=!1},400)})}}},ct={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("statement-pager",[n("qiong-title-element",{staticClass:"mobie-mt-24",attrs:{slot:"header"},slot:"header"},[t._v("\n        "+t._s(t.$t("BONUS.NORMAL.lead_share_out"))+"("+t._s(t.$t("BONUS.SHORT.usd_development"))+")\n    ")]),t._v(" "),t.is_showing?n("bonus-panel-layout",{attrs:{slot:"neck"},slot:"neck"},[t.loading?n("so-m-widget-loading"):n("so-m-widget",{attrs:{_vip:t.vip,_res:t.some_res,working_type:2}})],1):t._e(),t._v(" "),t.is_showing?n("div",{attrs:{slot:"body"},slot:"body"},[n("so-develop-inner",{attrs:{tr:!0}}),t._v(" "),t.loading?n("qiong-loading"):n("so-develop-inner",{attrs:{tr:!1,items:t.manage_items}})],1):n("qiong-empty",{attrs:{slot:"body"},slot:"body"}),t._v(" "),t.is_showing?n("div",{attrs:{slot:"footer"},slot:"footer"},[t.some_res?n("so-develop-footer",{attrs:{_mode:t.__mode,_usd:t.usd,_footer_res:t.some_res}}):t._e()],1):t._e(),t._v(" "),n("div",{attrs:{slot:"extra"},slot:"extra"},[n("user-develop-list",{ref:"devREF"})],1)],1)},staticRenderFns:[]};var _t=n("VU/8")(dt,ct,!1,function(t){n("e05d")},"data-v-77ff5c98",null).exports,lt=n("tLeO"),ut=n("3Ijs"),mt=n("4Tg6"),vt={components:{QiongLoading:g.a},props:["bg"]},gt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{"qiong-pager-zebra":this.bg,"qiong-pager-light":!this.bg}},[e("qiong-loading")],1)},staticRenderFns:[]};var pt=n("VU/8")(vt,gt,!1,function(t){n("l+Uk")},"data-v-2f21c283",null).exports,ht={components:{AsRecommend:F,AsActiveHouse:B,AsTeamLayer:V,QiongSpace:p.a,QiongLoading:g.a,AlertBuyNone:b,QiongGoTop:u,FlexIframePdf:q.a,QiongHeader:v.a,QiongPanelElement:m.a,AsTopTime:H,MemberMsgHeaderWidget:w.a,LocationMe:c.a,SoManagement:z.a,SoDevelopment:_t,PtiGoTop:lt.a,NetBonusStatement:ut.a,ToolReady:mt.a,AsLoading:pt},props:{_mode:{type:Number,default:2}},data:function(){return{mine:null,childs_sponser:null,childs_enroller:null,childrens:null,chronu_id:null,member_code:null,loading:!0,print_Loading:!0,can_print:!1,mode:1,bonus_statement:null}},mounted:function(){var t=this;return d()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t._mode&&(t.mode=t._mode);case 1:case"end":return e.stop()}},e,t)}))()},methods:{valuation:function(){this.chronu_id=this.$store.state.chronus.id,this.member_code=this.$store.state.user_backend.member_code},fetchingBonus:function(){var t=this;return d()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.netBonuREF.fetching({member_code:t.mine.member_code});case 2:n=e.sent,t.$store.commit("saveBonusStatement",n),t.bonus_statement=n,console.log("bonus_statement =",n);case 6:case"end":return e.stop()}},e,t)}))()},initMe:function(){var t=this;return d()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.valuation(),e.next=3,t.$refs.locaMe.locationMe_Async(t.member_code,"COLLECTION");case 3:return t.mine=e.sent,e.next=6,t.switchChilds();case 6:(n=e.sent)&&(t.childrens=n[0],t.childs_sponser=n[1],t.childs_enroller=n[2]),t.mine&&(t.fetchingBonus(),sessionStorage.setItem("pdf_oil_me",i()(t.mine)),t.can_print=!0,t.lockPrint(!1)),setTimeout(function(e){return t.loading=!1},300);case 10:case"end":return e.stop()}},e,t)}))()},switchChilds:function(){var t=this;return d()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.locaMe.locationMe_Async(t.member_code,"SPONSER");case 2:return n=e.sent,e.next=5,t.$refs.locaMe.locationMe_Async(t.member_code,"ENROLLER");case 5:return s=e.sent,e.next=8,L.a.all_childrens(n,s);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,t)}))()},back:function(){this.$router.push({path:"/home/account"})},lockPrint:function(t){this.print_Loading=t}}},ft={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"qiong-txt-td ",attrs:{fluid:""}},[n("qiong-header",{attrs:{extra_calss:" pl-7"}},[t._v("\n        "+t._s(t.$t("HEADER.bonus_report"))+"\n    ")]),t._v(" "),n("qiong-panel-element",{attrs:{need_space:!1}},[n("div",{staticClass:"qiong-pt-10 text-right px-7"},[n("as-top-time")],1),t._v(" "),t.loading?t._e():n("member-msg-header-widget",{staticClass:"px-7",attrs:{_chronu_id:t.chronu_id,_member_code:t.member_code}}),t._v(" "),t.loading?n("qiong-loading",{staticClass:"qiong-pager-zebra",attrs:{bigger:1}}):n("div",{staticClass:"qiong-pt-5 mt-6"},[t.bonus_statement?n("as-recommend",{staticClass:"qiong-pager-zebra",attrs:{_item:t.bonus_statement.referal_detail,me:t.mine}}):n("as-loading",{attrs:{bg:!0}}),t._v(" "),t.bonus_statement?n("as-active-house",{staticClass:"qiong-pager-light",attrs:{_item:t.bonus_statement.active_branch_bonus_detail,me:t.mine}}):n("as-loading"),t._v(" "),t.bonus_statement?n("as-team-layer",{staticClass:"qiong-pager-zebra",attrs:{_item:t.bonus_statement.organisation_detail,me:t.mine}}):n("as-loading",{attrs:{bg:!0}}),t._v(" "),t.childrens?n("so-management",{staticClass:"qiong-pager-light",attrs:{me:t.mine,childs:t.childrens,_mode:t.mode}}):n("as-loading"),t._v(" "),t.childrens?n("so-development",{staticClass:"qiong-pager-zebra",attrs:{me:t.mine,childs:t.childrens,__mode:t._mode}}):n("as-loading",{attrs:{bg:!0}}),t._v(" "),n("qiong-space",{staticClass:"qiong-pager-zebra",attrs:{space:"10vh"}})],1)],1),t._v(" "),n("pti-go-top"),t._v(" "),t.can_print?n("flex-iframe-pdf",{attrs:{target_id:t.member_code,extra_calss:"mt-6",useless:t.print_Loading},on:{useless_Father:t.lockPrint}}):t._e(),t._v(" "),n("location-me",{ref:"locaMe"}),t._v(" "),n("net-bonus-statement",{ref:"netBonuREF"}),t._v(" "),t.$store.state.user_backend&&t.$store.state.user_collection&&t.$store.state.user_collection.length>0?n("tool-ready",{on:{sign:t.initMe}}):t._e()],1)},staticRenderFns:[]};var bt=n("VU/8")(ht,ft,!1,function(t){n("uGfJ")},"data-v-3f08b390",null);e.default=bt.exports},LOyP:function(t,e){},P2Rk:function(t,e){},TAoc:function(t,e){},WupG:function(t,e){},"ZT/m":function(t,e){},e05d:function(t,e){},idEC:function(t,e){},jPnE:function(t,e){},"l+Uk":function(t,e){},uGfJ:function(t,e){}});
//# sourceMappingURL=9.464b39f6551a4f0daa62.js.map