webpackJsonp([28],{"6Z/R":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("gBtx"),s=e.n(r),o=e("mvHQ"),i=e.n(o),a=e("Xxa5"),c=e.n(a),u=e("exGp"),h=e.n(u),l=e("oKCz"),d=e("Um5R"),v={props:{chronu:{type:Object}},name:"",data:function(){return{}},methods:{choiseIt:function(){this.$emit("sign_Father",this.chronu)}}},_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-full chronu def-shadow pa-3"},[e("div",{staticClass:"chronu_name"},[e("v-icon",{attrs:{size:"14"}},[t._v("mdi-calendar-multiple")]),t._v(" "+t._s(t.chronu.display_name)+"\n\n        "),e("button",{staticClass:"btn-sec float-right",on:{click:t.choiseIt}},[t._v("確認選擇")])],1),t._v(" "),e("div",{staticClass:"chronu_start sub-header pl-4"},[t._v("\n        開始："+t._s(t.view.ser_timed(t.chronu.start,!0))+"\n    ")]),t._v(" "),e("div",{staticClass:"chronu_end sub-header pl-4"},[t._v("\n        結束："+t._s(t.view.ser_timed(t.chronu.end,!0))+"\n    ")])])},staticRenderFns:[]};var m=e("VU/8")(v,_,!1,function(t){e("rpQk")},"data-v-4a407b5c",null).exports,p={props:{c_item:{type:Object}},computed:{now:function(){return this.$store.state.chronus}},methods:{choiseIt:function(){this.$emit("sign_Father",this.c_item.chronu)}}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"chronu py-3 pl-7 pr-3"},[e("div",{staticClass:"pb"},[e("span",{staticClass:"qiong-txt-16 txt-txt_x3 fw-b",class:{"txt-sec_son":t.now.id==t.c_item.chronu.id}},[e("v-icon",{attrs:{size:"14",color:"op-60"}},[t._v("mdi-calendar-multiple")]),t._v("  "+t._s(t.c_item.chronu.display_name)+"\n        ")],1),t._v(" "),t.now.id!=t.c_item.chronu.id?e("button",{staticClass:"fw-b py-2 px-5 float-right btn-sec-hov",on:{click:t.choiseIt}},[t._v("確認選擇")]):t._e()]),t._v(" "),e("nav",{staticClass:"pl-6 pt-3 txt-sus"},[e("div",{staticClass:"chronu_start"},[t._v("\n            開始： "+t._s(t.view.ser_timed(t.c_item.chronu.start,!0))+"\n        ")]),t._v(" "),e("div",{staticClass:"chronu_end pt-1"},[t._v("\n            結束： "+t._s(t.view.ser_timed(t.c_item.chronu.end,!0))+"\n        ")])])])},staticRenderFns:[]};var w=e("VU/8")(p,f,!1,function(t){e("Lo9w")},"data-v-28f3d5e6",null).exports,g={components:{QiongGradientLine:e("Sx7q").a},name:"",props:{months:{type:Array}},data:function(){return{year:"",now_month:[],def_m:[1,2,3,4,5,6,7,8,9,10,11,12],active_id:"",active_year:1998}},mounted:function(){new Date;this.active_id=this.$store.state.chronus.id,this.tapYear(this.$store.state.chronus.end.substring(0,4))},methods:{tapYear:function(t){var n=this;this.months.map(function(e){var r=e.year;if(t==r){var s=e[r];n.now_month=s}}),this.active_year=t,this.uploadNowMonth()},uploadNowMonth:function(){this.$emit("nowmonth_Father",this.now_month)},uploadChronu:function(t){this.$emit("chronu_Father",t)}}},b={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._l(t.months,function(n,r){return e("div",{key:r,staticClass:"qiong-pt-10 d-inline"},[e("button",{staticClass:"btn-chronu btn-chronu-year",class:{"btn-chronu-year_active":n.year==t.active_year},on:{click:function(e){return t.tapYear(n.year)}}},[t._v("\n            "+t._s(n.year)+"\n        ")])])}),t._v(" "),e("qiong-gradient-line",{staticClass:"qiong-pt-10"}),t._v(" "),t.now_month.length>0?e("div",{staticClass:"qiong-pt-15"},t._l(t.now_month,function(n,r){return e("button",{key:r,staticClass:"btn-chronu qiong-txt-12",class:{"btn-chronu-active":n.chronu_id==t.active_id},on:{click:function(e){return t.uploadChronu(n.chronu)}}},[t._v("\n            "+t._s(t.view.backend.view_month(n.month))+"\n        ")])}),0):t._e()],2)},staticRenderFns:[]};var C=e("VU/8")(g,b,!1,function(t){e("J7Nu")},"data-v-f99d2a52",null).exports,x=e("PJh5"),y=e.n(x),$={components:{ChronusItem:m,QiongLoading:l.a,ChronuTitlePart:C,ChronuItemPart:w,QiongSpace:d.a},name:"",data:function(){return{chronus:[],loading:!0,ct:[],now_chronu:[]}},mounted:function(){var t=this;return h()(c.a.mark(function n(){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.simpleInit();case 2:case"end":return n.stop()}},n,t)}))()},methods:{simpleInit:function(){var t=this;return h()(c.a.mark(function n(){var e;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=window.sessionStorage.getItem("sandyy_chronus"))){n.next=11;break}return e=JSON.parse(e),n.next=5,t.trashNew(e);case 5:e=(e=n.sent).map(function(n){return t.ser_chornu(n,!1)}),t.ser_title(e),t.loading=!1,n.next=13;break;case 11:return n.next=13,t.chronusLoading();case 13:case"end":return n.stop()}},n,t)}))()},trashNew:function(t){var n=this;return h()(c.a.mark(function e(){var r,s;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=[],s=y()(new Date),t.map(function(t){return y()(t.start)<s&&r.push(t),t}),n.abrupt("return",r.map(function(t){return t.end_origin=t.end,t.end=t.end_date,t.start_origin=t.start,t.start=t.start_date,t}));case 4:case"end":return n.stop()}},e,n)}))()},chronusLoading:function(){var t=this;return h()(c.a.mark(function n(){var e;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.conn.get(t.api.chronus,t.$store.state.token,{_sort:"start:DESC",_limit:999});case 2:if(!(e=n.sent)){n.next=12;break}return n.next=6,t.trashNew(e);case 6:e=(e=n.sent).map(function(n){return t.ser_chornu(n,!0)}),t.chronus=e.sort(function(n,e){return t.view.sort_time(n,e)}),window.sessionStorage.setItem("sandyy_chronus",i()(e)),t.ser_title(e),t.loading=!1;case 12:case"end":return n.stop()}},n,t)}))()},ser_chornu:function(t,n){try{delete t.orders,delete t.bonuses,delete t.commissions,delete t.bonus_calculations}catch(t){}return this.ct.push(s()(t.end.substring(0,4))),t},ser_title:function(t){var n=this;this.ct=this.ct.filter(function(t,e){return n.ct.indexOf(t,0)===e}),this.ct=this.ct.map(function(n){var e={year:n};return e[n+""]=[],t.map(function(t){var r=t.end.substring(0,4),o=t.end.substring(5,8);n==r&&e[r].push({month:s()(o),chronu_id:t.id,chronu:t})}),e})},changeSuccess:function(t){var n=this;this.$store.commit("saveLoading",!0),setTimeout(function(e){n.$store.commit("saveChronus",[t,!0]),n.$store.commit("saveSponsor",null),n.$store.commit("saveEnroller",null),n.$store.commit("saveCollection",null),n.$store.commit("saveTreeSponsor",null),n.$store.commit("saveTreeEnroller",null),n.$store.commit("saveBonusQualifyLine",null),n.$router.push("/home/user/center"),n.$store.commit("saveLoading",!1)},300)},nowChronu:function(t){this.now_chronu=t}}},k={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"h-100 chronu-panel qiong-txt-14",attrs:{fluid:""}},[e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"1"}}),t._v(" "),e("v-col",{attrs:{cols:"12",sm:10}},[e("div",{staticClass:"qiong-txt-24 qiong-txt-primary-dark pb-3"},[t._v("\n                結算月份\n            ")]),t._v(" "),t.loading?t._e():e("chronu-title-part",{attrs:{months:t.ct},on:{nowmonth_Father:t.nowChronu,chronu_Father:t.changeSuccess}})],1),t._v(" "),e("v-col",{attrs:{cols:"1"}})],1),t._v(" "),t.loading?e("v-row",[e("v-col",{attrs:{col:"12"}},[e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("qiong-loading",{attrs:{bigger:1}})],1)],1):e("v-row",[e("v-col",{attrs:{cols:"2"}}),t._v(" "),e("v-col",{attrs:{cols:"12",sm:8}},[e("qiong-space",{staticClass:"qiong-pt-5 mobie-hide"}),t._v(" "),e("div",{staticClass:"pb-2"},t._l(t.now_chronu,function(n,r){return e("div",{key:r,staticClass:"my-5 chronu-item"},[e("chronu-item-part",{attrs:{c_item:n},on:{sign_Father:t.changeSuccess}}),t._v(" "),r==n.length-1?e("v-divider"):t._e()],1)}),0)],1),t._v(" "),e("v-col",{attrs:{col:"2"}})],1)],1)},staticRenderFns:[]};var q=e("VU/8")($,k,!1,function(t){e("RscO")},"data-v-ebfebd06",null);n.default=q.exports},J7Nu:function(t,n){},Lo9w:function(t,n){},RscO:function(t,n){},rpQk:function(t,n){}});
//# sourceMappingURL=28.419fd22092999391d79b.js.map