webpackJsonp([11,16],{"/aCk":function(t,e){},"27h0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xxa5"),s=n.n(i),a=n("exGp"),r=n.n(a),o=n("/LGW"),d=n("ubEC"),c=n("Cpv2"),l=n("gBtx"),u=n.n(l),v=n("BO1k"),_=n.n(v),h=n("gSmO"),f={name:"",data:function(){return{}},methods:{_serBonu:function(t){var e=[],n=!0,i=!1,s=void 0;try{for(var a,r=_()(t);!(n=(a=r.next()).done);n=!0){var o=a.value;o.vip_code=h.a.vip_view.rank_to_code(o.Rank),o.user&&(e.push(o),o.member_code_int=u()(o.user.member_code))}}catch(t){i=!0,s=t}finally{try{!n&&r.return&&r.return()}finally{if(i)throw s}}return e=e.sort(function(t,e){return t.member_code_int-e.member_code_int})},switchingBonus:function(t){var e=this;return r()(s.a.mark(function n(){var i,a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return(i=t)._limit=999,n.next=4,e.conn.get(e.api.bonus,e.$store.state.token,i);case 4:if(!(a=n.sent)){n.next=7;break}return n.abrupt("return",e._serBonu(a));case 7:return n.abrupt("return",[]);case 8:case"end":return n.stop()}},n,e)}))()}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var p=n("VU/8")(f,m,!1,function(t){n("Aef0")},"data-v-f91bab76",null).exports,g={name:"",props:{_chronu:{type:Object}},data:function(){return{chronu:"",end:null}},methods:{_fetchingUser:function(t){var e=!0,n=!1,i=void 0;try{for(var s,a=_()(t.bonuses);!(e=(s=a.next()).done);e=!0){var r=s.value;r.time_period==this.chronu&&(t.bonu_period=r,t.vip_code=h.a.vip_view.rank_to_code(r.Rank))}}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}return t},_serUser:function(t){var e=[],n=!0,i=!1,s=void 0;try{for(var a,r=_()(t);!(n=(a=r.next()).done);n=!0){var o=a.value;if(o.member_code&&o.bonuses&&o.bonuses.length>0){var d=this._fetchingUser(o);d.bonu_period&&e.push(d)}}}catch(t){i=!0,s=t}finally{try{!n&&r.return&&r.return()}finally{if(i)throw s}}return e},switchingUsers:function(){var t=this;return r()(s.a.mark(function e(){var n,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.valuation(),n={},t.end&&(n["_where[registered_date_lte]"]=t.$store.state.chronus.end),e.next=5,t.conn.get(t.api.users,t.$store.state.token,n);case 5:if(!(i=e.sent)){e.next=8;break}return e.abrupt("return",t._serUser(i));case 8:return e.abrupt("return",[]);case 9:case"end":return e.stop()}},e,t)}))()},valuation:function(){this._chronu?(this.chronu=this._chronu.id,this.end=this._chronu.end):(this.chronu=this.$store.state.chronus.id,this.end=this.$store.state.chronus.end)}}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var b=n("VU/8")(g,w,!1,function(t){n("/aCk")},"data-v-5ddbe39c",null).exports,y=n("oKCz"),x=n("Um5R"),P=n("5dBV"),V=n.n(P),C=n("jOJ2"),F=n("tLeO"),O={name:"",data:function(){return{printing:!1}},mounted:function(){},methods:{add_header:function(t){return'\n            <div>\n                <div style="overflow: hidden;">\n                <div style="float: left; width: 7%; padding: 0px; margin: 0px;">\n                    <img  src="https://sandyy.com/wp-content/uploads/invoice_logo_small.png" style="width: 100%; max-height: 90px;">\n                </div> \n                <h2 style="float: left; width: 86%; text-align: center; line-height: 2.4;">\n                    Essence Global Co. Limited\n                </h2> \n                <div style="float: left; width: 7%; padding: 0px; margin: 0px;">&nbsp;</div></div>\n                <div style="height: 0.6em;"></div>\n                <div >Accounting Settlement</div> \n                <div style="height: 1em;"></div>\n            </div>\n            '+t},add_item:function(t){var e=document.getElementById("comm_item").outerHTML;return e=e+'<div style="font-size: 1.12rem; margin-top: 24px;">Monthly Balance</div><div style="height: 0.45rem;"></div>'+t},add_style:function(t){return"\n            <style>\n            #pti_table { padding-left: 1.2rem; }\n\n            .pti-content { margin-top: 8px; }\n            \n            table { width: 100%; line-height: 2.1; text-align: center; }\n            tr { line-height: 1.4; }\n            tr td { padding: 8px 0px; }\n\n            .qiong-td { width: 100%; overflow: hidden; text-align: center; line-height: 1.8rem; }\n            .qiong-td > div { float: left; }\n            .qiong-wide-12 { width: 12%; }\n            .qiong-wide-13 { width: 13%; }\n            .qiong-wide-14 { width: 14%; }\n\n            .pti-sub-msg { line-height: 2.1; }\n            .pti-tr-footer { font-weight: bold; }\n\n            .i-chronu-edit, #pti_tr_fixed { display: none !important; }\n\n            </style>\n            "+t},toPdf:function(){var t=this;return r()(s.a.mark(function e(){var n,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.printing){e.next=20;break}return t.printing=!0,e.prev=2,n=document.getElementById("pti_table"),i=n.outerHTML,i=t.add_item(i),i=t.add_header(i),i=t.add_style(i),i=t.view.pdf.serial_Html(i),e.next=11,t.view.pdf.html_content(i);case 11:(i=e.sent)&&t.download(i.data.pdf),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),t.$store.commit("saveDialog",700),setTimeout(function(){t.$store.commit("saveDialog",0)},4e3);case 19:setTimeout(function(){t.printing=!1},2400);case 20:case"end":return e.stop()}},e,t,[[2,15]])}))()},download:function(t){try{var e=document.createElement("a");e.download="sandyy_accounting_statement.pdf",e.href=t,e.target="_blank",e.click()}catch(t){}}}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pti-go-pdf hand",on:{click:this.toPdf}},[this.printing?e("v-icon",{staticClass:"circle-around"},[this._v("mdi-loading")]):e("v-icon",[this._v("mdi-file-outline")])],1)},staticRenderFns:[]};var S=n("VU/8")(O,q,!1,function(t){n("ul2/")},"data-v-3a08e746",null).exports,$={components:{TimeChronu:n("P9kM").a},name:"",props:{v:{type:Object}},data:function(){return{}},methods:{total:function(){var t=0;return t=this.view.floatAdd(t,this.v.FPV),t=this.view.floatAdd(t,this.v.APV),t=this.view.floatAdd(t,this.v.OPV),t=this.view.floatAdd(t,this.v.MPV),(t=this.view.floatAdd(t,this.v.DPV))?t.toFixed(2):""}}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pti-sub-msg px-7",staticStyle:{"margin-top":"24px"},attrs:{id:"comm_item"}},[e("div",[e("span",{staticClass:"txt-mo ney-dark"},[this._v(this._s(this.$t("BONUS.PUBLIC.total_usd"))+" :  ")]),e("span",{staticClass:"txt-m oney"},[this._v("US$ "+this._s(this.total()))])]),this._v(" "),e("div",{staticClass:"txt-menu"},[e("time-chronu",{staticClass:"d-inline"})],1)])},staticRenderFns:[]};var E=n("VU/8")($,U,!1,function(t){n("wd4K")},"data-v-3703991a",null).exports,T={name:"",props:{v:{type:Object}},data:function(){return{}},methods:{total:function(){}}},k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pti-table-extra"},[n("div",[t._v("\n         \n    ")]),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])}]};var A=n("VU/8")(T,k,!1,function(t){n("wq4F")},"data-v-41d9d84a",null).exports,B={name:"",props:{v:{type:Object}},data:function(){return{}},methods:{total:function(){var t=0;return t=this.view.floatAdd(t,this.v.FPV),t=this.view.floatAdd(t,this.v.APV),t=this.view.floatAdd(t,this.v.OPV),t=this.view.floatAdd(t,this.v.MPV),(t=this.view.floatAdd(t,this.v.DPV)).toFixed(2)}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qiong-td pti-tr-footer"},[t._m(0),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n         \n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n        "+t._s(t.v.FPV.toFixed(2))+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n        "+t._s(t.v.APV.toFixed(2))+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n        "+t._s(t.v.OPV.toFixed(2))+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("\n        "+t._s(t.v.MPV.toFixed(2))+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("\n        "+t._s(t.v.DPV.toFixed(2))+"\n    ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n        "+t._s(t.total())+"\n    ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"qiong-wide-13"},[this._v("\n        Commission"),e("br"),this._v("Total "),e("span",{staticClass:"qiong-txt-12"},[this._v("(US)")])])}]};var R=n("VU/8")(B,M,!1,function(t){n("3jO3")},"data-v-f0621dae",null).exports,D={name:"",data:function(){return{}},mounted:function(){try{var t=document.getElementById("pti_tr").offsetWidth+56;document.getElementById("pti_tr_fixed").style.width=t+"px"}catch(t){}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qiong-txt-tr"},[n("div",{staticClass:"qiong-td text-center pti-tr"},[n("div",{staticClass:"qiong-wide-13",staticStyle:{"text-align":"left"}},[t._v("\n            "+t._s(t.$t("USER.member_code"))+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12",staticStyle:{"text-align":"left"}},[t._v("\n            "+t._s(t.$t("USER.member_level"))+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n            "+t._s(t.$t("BONUS.SHORT.first_buy"))),n("br"),t._v(t._s(t.$t("BONUS.SHORT.usd_recommend"))+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n            "+t._s(t.$t("BONUS.SHORT.active_house"))),n("br"),t._v(t._s(t.$t("BONUS.SHORT.sell_bonus"))+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n            "+t._s(t.$t("BONUS.SHORT.uas_team_layer"))+"\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-14"},[t._v("\n            "+t._s(t.$t("BONUS.NORMAL.lead_share_out"))),n("br"),t._v("\n            （"+t._s(t.$t("BONUS.SHORT.usd_management"))+"）\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("\n            "+t._s(t.$t("BONUS.NORMAL.lead_share_out"))),n("br"),t._v("\n            （"+t._s(t.$t("BONUS.SHORT.usd_development"))+"）\n        ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n            Total\n        ")])])])},staticRenderFns:[]};var I=n("VU/8")(D,L,!1,function(t){n("Ia5r")},"data-v-ed6617e0",null).exports,N={components:{PtiTr:I,LevelViewing:C.a,PtiExtra:A,PtiFooter:R,PtiGoTop:F.a,PtiSubMsgFooter:E,QiongLoading:y.a,PtiPdfDown:S},name:"",props:{items:{type:Array}},data:function(){return{result:null,need_title:!1}},mounted:function(){this.resultFooter()},methods:{usd:function(t){var e=0;return t&&(t.FPV=t.FPV?t.FPV:0,t.OPV=t.OPV?t.OPV:0,t.DPV=t.DPV?t.DPV:0,t.MPV=t.MPV?t.MPV:0,t.active_branch_payout=t.active_branch_payout?t.active_branch_payout:0,e=0==(e=(e=h.a.conf.num_result(t))?V()(e):0)?"":e.toFixed(2)),e},resultFooter:function(){if(this.items){var t={FPV:0,APV:0,OPV:0,MPV:0,DPV:0},e=!0,n=!1,i=void 0;try{for(var s,a=_()(this.items);!(e=(s=a.next()).done);e=!0){var r=s.value;r.FPV&&(t.FPV=this.view.floatAdd(t.FPV,r.FPV)),r.active_branch_payout&&(t.APV=this.view.floatAdd(t.APV,r.active_branch_payout)),r.OPV&&(t.OPV=this.view.floatAdd(t.OPV,r.OPV)),r.MPV&&(t.MPV=this.view.floatAdd(t.MPV,r.MPV)),r.DPV&&(t.DPV=this.view.floatAdd(t.DPV,r.DPV))}}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}this.result=t}},showTrFixed:function(t){this.need_title=t},finishTop:function(){this.need_title=!1}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"pti-table"},[n("pti-tr",{attrs:{id:"pti_tr"}}),t._v(" "),t.need_title?n("div",{staticClass:"pti-tr-fixed",attrs:{id:"pti_tr_fixed"}},[n("pti-tr")],1):t._e(),t._v(" "),n("div",{staticClass:"pti-content"},[t._l(t.items,function(e,i){return n("div",{key:i,staticClass:"qiong-td text-center pti-td"},[n("div",{staticClass:"qiong-wide-13",staticStyle:{"text-align":"left"}},[e.user?n("span",[t._v("\n                        "+t._s(e.user.member_code)+" \n                    ")]):t._e()]),t._v(" "),n("div",{staticClass:"qiong-wide-12",staticStyle:{"text-align":"left"}},[e.Rank>0?n("level-viewing",{staticStyle:{display:"inline"},attrs:{item:e.vip_code}}):n("span",[t._v(t._s(t.$t("USER.level_null")))]),t._v(" \n                ")],1),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n                    "+t._s(t.view.if_def(e.FPV,""))+" \n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n                    "+t._s(t.view.if_def(e.active_branch_payout,""))+" \n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n                    "+t._s(t.view.if_def(e.OPV,""))+" \n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-14"},[t._v("\n                    "+t._s(t.view.if_def(e.MPV,""))+" \n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-13"},[t._v("\n                    "+t._s(t.view.if_def(e.DPV,""))+" \n                ")]),t._v(" "),n("div",{staticClass:"qiong-wide-12"},[t._v("\n                    "+t._s(t.usd(e))+" \n                ")])])}),t._v(" "),n("pti-extra"),t._v(" "),t.result?n("pti-footer",{attrs:{v:t.result}}):t._e()],2)],1),t._v(" "),t.result?n("pti-sub-msg-footer",{attrs:{v:t.result}}):n("qiong-loading",{attrs:{bigger:-1}}),t._v(" "),n("pti-go-top",{on:{finish_Father:t.finishTop}}),t._v(" "),n("pti-pdf-down")],1)},staticRenderFns:[]};var j=n("VU/8")(N,H,!1,function(t){n("65Jo")},"data-v-6c0fe481",null).exports,G={components:{GoDownTrigger:d.a,PaymentTableInner:j,FullUserTable:b,PtiFooter:R,QiongSpace:x.a,FullBonusTable:p,QiongHeaderFilter:o.a,QiongLoading:y.a,CollectionReady:c.a,PtiTr:I},inject:["reload"],watch:{$route:function(t,e){e.query&&(this.init=!1,this.reload(),this.init=!0)}},data:function(){return{root:!1,init:!0,users:[],chronu:null,bonus:null,domed:null,pti_tr:null}},mounted:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.domed=document.getElementById("pti_table");case 1:case"end":return e.stop()}},e,t)}))()},unmounted:function(){document.removeEventListener("DOMMouseScroll",this.switchScroll,!1)},destroyed:function(){document.removeEventListener("DOMMouseScroll",this.switchScroll,!1)},methods:{initMe:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.valuation(),e.prev=1,e.next=4,t.$refs.bonusTABLE.switchingBonus(t.makeCondition());case 4:t.bonus=e.sent,t.bonus.map(function(t){return t}),t.bonus&&(t.pti_tr=document.getElementById("pti_tr"),document.addEventListener&&document.addEventListener("DOMMouseScroll",t.switchScroll,!1),window.onmousewheel=document.onmousewheel=t.switchScroll),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(1),t.$store.commit("saveDialog",500),t.$store.commit("saveLoading",!0),setTimeout(function(){t.$store.commit("saveLoading",!1)},400),setTimeout(function(){t.$store.commit("saveDialog",0)},4e3);case 15:case"end":return e.stop()}},e,t,[[1,9]])}))()},valuation:function(){this.chronu||(this.chronu=this.$store.state.chronus.id)},makeCondition:function(){return{time_period:this.chronu}},switchDiv:function(){try{var t=this.domed.getBoundingClientRect().top;this.$refs.ptiInner.showTrFixed(t<-54)}catch(t){}},switchScroll:function(t){(t=t||window.event).wheelDelta&&this.switchDiv()}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pti-page",attrs:{fluid:""}},[n("qiong-header-filter",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("會計界面")])]),t._v(" "),n("div",{staticClass:"table-inner mobie-table-simple mobie-mx-0",attrs:{id:"pti_table"}},[t.bonus?n("payment-table-inner",{ref:"ptiInner",attrs:{items:t.bonus}}):n("qiong-loading",{staticStyle:{"margin-top":"10vw"},attrs:{bigger:1}}),t._v(" "),n("qiong-space",{staticClass:"mobie-view",attrs:{space:"15vh"}}),t._v(" "),n("qiong-space",{attrs:{space:"15vh"}}),t._v(" "),n("qiong-space",{attrs:{space:"4vw"}})],1),t._v(" "),n("full-bonus-table",{ref:"bonusTABLE"}),t._v(" "),t.init?n("collection-ready",{on:{sign_Father:t.initMe}}):t._e()],1)},staticRenderFns:[]};var Q=n("VU/8")(G,J,!1,function(t){n("hL8F")},"data-v-e0c9362a",null);e.default=Q.exports},"3jO3":function(t,e){},"65Jo":function(t,e){},Aef0:function(t,e){},Ia5r:function(t,e){},UIXq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={components:{PaymentTable:n("27h0").default},name:"",data:function(){return{}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("payment-table")},staticRenderFns:[]};var a=n("VU/8")(i,s,!1,function(t){n("yeCr")},"data-v-8e9541fc",null);e.default=a.exports},hL8F:function(t,e){},"ul2/":function(t,e){},wd4K:function(t,e){},wq4F:function(t,e){},yeCr:function(t,e){}});
//# sourceMappingURL=11.85a38a2581746d48d5be.js.map