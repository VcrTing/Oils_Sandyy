webpackJsonp([9],{"+g94":function(t,e){},"33iM":function(t,e){},"5Y2R":function(t,e){},"7phu":function(t,e){},FL2q:function(t,e,n){"use strict";var s=n("Xxa5"),i=n.n(s),r=n("exGp"),a=n.n(r),o={name:"",data:function(){return{}},methods:{add_style:function(t){return"\n                <style>\n                    table { width: 100%; border-width: 1px !important; border-collapse: collapse !important; border-color: #f9f9f9 !important; }\n                    .fl { float: left }\n                    .fs-c { text-align: center }\n\n            .root { width: 100%; background: rgb(255, 255, 255); color: #000000; }\n.td-buy td { padding: 4px 6px }\n\n.thead-buy {\n    color: #FFF;\n    background: #404040;\n    border: none !important; }\n\n.thead-buy td { \n    padding: 4px  6px;\n    line-height: 1.7em;\n    border: none !important; }\n                </style>\n                "+t},printed:function(){var t=this;return a()(i.a.mark(function e(){var n,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=document.getElementById("pdf_buy"),s=n.outerHTML,s=t.add_style(s),s=t.view.pdf.serial_Html(s),e.next=7,t.view.pdf.html_content(s);case 7:(s=e.sent)&&t.download(s.data.pdf),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),t.$store.commit("saveDialog",700),setTimeout(function(){t.$store.commit("saveDialog",0)},4e3);case 15:case"end":return e.stop()}},e,t,[[0,11]])}))()},download:function(t){try{var e=document.createElement("a");e.download="sandyy_tree_digram.pdf",e.href=t,e.target="_blank",e.click()}catch(t){}}}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var d=n("VU/8")(o,c,!1,function(t){n("yamp")},"data-v-76b13d26",null);e.a=d.exports},RdGO:function(t,e){},W92R:function(t,e){},YjD8:function(t,e){},e3V4:function(t,e){},"g/uM":function(t,e){},"ix/6":function(t,e){},ozgd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Xxa5"),i=n.n(s),r=n("exGp"),a=n.n(r),o={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},c={components:{CollectionReadyInner:n("VU/8")({mounted:function(){this.$emit("sign_Father",!0)}},o,!1,null,null,null).exports},mounted:function(){console.log("Ready =",this.$store.state.user_backend)}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.user_backend?n("collection-ready-inner",{on:{sign_Father:function(e){return t.$emit("sign_Father")}}}):t._e()},staticRenderFns:[]},l=n("VU/8")(c,d,!1,null,null,null).exports,u=n("1R8D"),v=n("OhMI"),_=n("IB0D"),p=n("/LGW"),h=n("oKCz"),f=n("Um5R"),m=n("Ra9V"),w=n("FL2q"),g=n("sLC2"),b={props:{_items:Array},methods:{active:function(t){return t?"Active":"Non-active"}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tbody",{staticClass:"tbody-buy"},t._l(t._items,function(e,s){return n("tr",{key:s,staticClass:"td-buy"},[n("td",{attrs:{width:"10%"}},[t._v(t._s(e.member_code))]),t._v(" "),n("td",{attrs:{width:"19%"}},[t._v(t._s(e.display_name))]),t._v(" "),n("td",{attrs:{width:"16%"}}),t._v(" "),n("td",{attrs:{width:"9%"}},[t._v(t._s(e.phone))]),t._v(" "),n("td",{staticStyle:{"padding-right":"6px"},attrs:{width:"17%"}},[t._v(t._s(e.email))]),t._v(" "),n("td",{attrs:{width:"10%"}},[t._v(t._s(e.register_type))]),t._v(" "),n("td",{attrs:{width:"9%"}},[null==e.isSaveToWallet?n("div",{staticClass:"txt-sub"}):n("div",[e.isSaveToWallet?n("span",[t._v("電子錢包")]):n("span",[t._v("支票")])])]),t._v(" "),n("td",{attrs:{width:"10%"}},[t._v("\n            "+t._s(t.active(e.member_area))+"\n        ")])])}),0)},staticRenderFns:[]};var x=n("VU/8")(b,y,!1,function(t){n("5Y2R")},"data-v-550936e8",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-buy",staticStyle:{width:"100%"}},[n("tr",{staticStyle:{width:"100%"}},[n("td",{attrs:{width:"10%"}},[t._v("Member ID")]),t._v(" "),n("td",{attrs:{width:"19%"}},[t._v("Member Name")]),t._v(" "),n("td",{attrs:{width:"16%"}},[t._v("Address")]),t._v(" "),n("td",{attrs:{width:"9%"}},[t._v("Phone")]),t._v(" "),n("td",{attrs:{width:"17%"}},[t._v("Email")]),t._v(" "),n("td",{attrs:{width:"10%"}},[t._v("Registration Type")]),t._v(" "),n("td",{attrs:{width:"9%"}},[t._v("Payment Terms")]),t._v(" "),n("td",{attrs:{width:"10%"}},[t._v("Membership authority")])])])}]};var R=n("VU/8")({},C,!1,function(t){n("7phu")},"data-v-6547fd80",null).exports,F={components:{PdfBuyHeader:g.a,PdfPwUserTableContent:x,PdfPwUserTableHeader:R},props:{items:Array}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"root",staticStyle:{"line-height":"1.7em"},attrs:{id:"pdf_buy"}},[e("pdf-buy-header",{attrs:{start:"29 Sept 2021",end:"28 Oct 2021"}}),this._v(" "),e("table",{staticClass:"table-buy",staticStyle:{width:"100%"},attrs:{border:"1"}},[e("pdf-pw-user-table-header"),this._v(" "),e("pdf-pw-user-table-content",{attrs:{_items:this.items}})],1)],1)},staticRenderFns:[]};var E={components:{PdfPwUserInner:n("VU/8")(F,$,!1,function(t){n("ywzq")},"data-v-1447e107",null).exports,PdfBuyPrint:w.a},props:["users"],data:function(){return{printing:!1,loading:!1}},methods:{lockPrint:function(){var t=this;this.printing||(this.printing=!0,this.$refs.pdfBuyREF.printed(),setTimeout(function(){t.printing=!1},2400))}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"pti-go-pdf hand",on:{click:this.lockPrint}},[this.printing?e("v-icon",{staticClass:"circle-around"},[this._v("mdi-loading")]):e("v-icon",[this._v("mdi-file-outline")])],1),this._v(" "),e("pdf-pw-user-inner",{staticClass:"pdf_modal",attrs:{items:this.users}}),this._v(" "),e("pdf-buy-print",{ref:"pdfBuyREF"})],1)},staticRenderFns:[]};var U=n("VU/8")(E,P,!1,function(t){n("e3V4")},"data-v-3ec19db6",null).exports,k=n("zDkF"),S={render:function(){var t=this.$createElement,e=this._self._c||t;return this.active?e("div",{},[e("v-icon",{staticClass:"pw-sec_son"},[this._v("mdi-lightbulb")]),this._v(" "),e("span",{staticClass:"pl-1"},[this._v("Active")])],1):e("div",{},[e("v-icon",[this._v("mdi-lightbulb-outline")]),this._v(" "),e("span",{staticClass:"pl-1"},[this._v("Non-Active")])],1)},staticRenderFns:[]};var T=n("VU/8")({props:["active"]},S,!1,function(t){n("ix/6")},null,null).exports,V=n("mvHQ"),M=n.n(V),q={props:["item"],methods:{edit:function(){sessionStorage.setItem("sandyy_pw_user",M()(this.item)),this.$router.push("/home/pw_user/user_edit")}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pw-pri_son"},[e("v-icon",{on:{click:this.edit}},[this._v("mdi-square-edit-outline")])],1)},staticRenderFns:[]};var I={components:{PwActiveBulb:T,PwTableOpera:n("VU/8")(q,D,!1,function(t){n("YjD8")},null,null).exports,QiongEmpty:k.a},props:["many"]},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.many&&t.many.length>0?n("nav",{staticClass:"pt-2"},t._l(t.many,function(e,s){return n("div",{key:s,staticClass:"px-7 qiong-td pw-td"},[n("div",{staticClass:"w-10"},[t._v("\n            "+t._s(e.member_code)+"\n        ")]),t._v(" "),n("div",{staticClass:"w-24"},[t._v("\n            "+t._s(e.display_name)+"\n        ")]),t._v(" "),n("div",{staticClass:"w-10"},[t._v(t._s(e.phone))]),t._v(" "),n("div",{staticClass:"w-20 pr-3"},[t._v(t._s(e.email))]),t._v(" "),n("div",{staticClass:"w-10 pr-1"},[t._v("\n            "+t._s(e.register_type)+"\n        ")]),t._v(" "),n("div",{staticClass:"w-9"},[null==e.isSaveToWallet?n("div",{staticClass:"txt-sub"},[t._v("\n                未設定\n            ")]):n("div",[e.isSaveToWallet?n("span",[t._v("電子錢包")]):n("span",[t._v("支票")])])]),t._v(" "),n("div",{staticClass:"w-11 pl-1"},[n("pw-active-bulb",{staticClass:"fx-l",attrs:{active:!!e.member_area&&e.member_area}})],1),t._v(" "),n("div",{staticClass:"w-4 fx-r"},[n("pw-table-opera",{staticClass:"fx-r",attrs:{item:e}})],1)])}),0):n("nav",[n("qiong-empty")],1)},staticRenderFns:[]};var W=n("VU/8")(I,O,!1,function(t){n("W92R")},"data-v-00b7ba3c",null).exports,A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-1"},[n("div",{staticClass:"pager-header-in-table qiong-tr qiong-txt-tr px-7"},[n("div",{staticClass:"w-10"},[t._v("Member ID")]),t._v(" "),n("div",{staticClass:"w-24"},[t._v("Member Name")]),t._v(" "),n("div",{staticClass:"w-10"},[t._v("Mobile")]),t._v(" "),n("div",{staticClass:"w-20"},[t._v("Email")]),t._v(" "),n("div",{staticClass:"w-10 pr-1"},[t._v("Registration Type")]),t._v(" "),n("div",{staticClass:"w-9"},[t._v("Save to Wallet")]),t._v(" "),n("div",{staticClass:"w-11 pl-2"},[t._v("Membership authority")]),t._v(" "),n("div",{staticClass:"w-4"},[t._v(" ")])])])}]};var B=n("VU/8")({},A,!1,function(t){n("RdGO")},null,null).exports,L={props:["many"],watch:{word:function(t){this.many&&this.many.length>0&&(t?this.search(t):this.ciear())}},data:function(){return{word:""}},methods:{ciear:function(){this.$emit("ciear")},search:function(t){if(t.length>3){console.log("开始搜索 =",t);var e=this.many.filter(function(e){var n=!1;return(e.member_code+"").indexOf(t)>=0&&(n=!0),(e.display_name+"").indexOf(t)>=0&&(n=!0),n});this.$emit("result",e)}}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"pw-ftr-search"},[n("span",[n("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],attrs:{placeholder:"輸入用戶名稱或編號"},domProps:{value:t.word},on:{input:function(e){e.target.composing||(t.word=e.target.value)}}}),t._v(" "),n("span",{staticClass:"pw-ftr-ciose",class:{"pw-ftr-ciose-active":t.word.length>1},on:{click:function(e){t.word=""}}},[n("v-icon",[t._v("mdi-close")])],1)])])},staticRenderFns:[]};var z=n("VU/8")(L,N,!1,function(t){n("g/uM")},null,null).exports,H={components:{QiongHeaderFilter:p.a,QiongPanelElement:v.a,QiongSpace:f.a,QiongLoading:h.a,Pagenation:u.a,TablePagerFooter:_.a,PwUserTr:B,PwUserTd:W,PdfPwUser:U,NetPwUser:m.a,CollectionReady:l,PwUserSearch:z},data:function(){return{users:[],iimit:50,users_origin_by_net:[],loading:!0}},mounted:function(){this.init()},methods:{_fetching:function(){var t=this;return a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs.pwuREF.user_of_iist();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,t)}))()},init:function(){var t=this;return a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t._fetching();case 3:t.users_origin_by_net=e.sent,t.pager(0,t.iimit),setTimeout(function(e){return t.loading=!1},300);case 6:case"end":return e.stop()}},e,t)}))()},search:function(t){console.log("搜索后的结果 =",t),this.users=0==t?this.users_origin_by_net:t},pager:function(t,e){this.users=this.users_origin_by_net.slice(t,e)}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[n("qiong-header-filter",{staticClass:"bg-none"},[n("span",{attrs:{slot:"header"},slot:"header"},[t._v("\n            用戶列表\n        ")]),t._v(" "),n("div",{attrs:{slot:"filter"},slot:"filter"},[n("pw-user-search",{attrs:{many:t.users_origin_by_net},on:{ciear:function(){return t.search(0)},result:function(e){return t.search(e)}}})],1)]),t._v(" "),n("div",{staticClass:"pb-1"}),t._v(" "),n("qiong-panel-element",{staticClass:"mobie-table",attrs:{need_space:!1}},[n("pw-user-tr"),t._v(" "),t.loading?n("nav",[n("qiong-loading")],1):n("pw-user-td",{attrs:{many:t.users}})],1),t._v(" "),n("div",{staticClass:"fx-c mt-5 pt-3"},[n("pagenation",{directives:[{name:"show",rawName:"v-show",value:t.users_origin_by_net,expression:"users_origin_by_net"}],attrs:{_limit:t.iimit,_count:t.users_origin_by_net.length},on:{page_Father:t.pager}})],1),t._v(" "),n("table-pager-footer"),t._v(" "),t.users_origin_by_net?n("pdf-pw-user",{attrs:{users:t.users_origin_by_net}}):t._e(),t._v(" "),n("net-pw-user",{ref:"pwuREF"})],1)},staticRenderFns:[]};var G=n("VU/8")(H,Q,!1,function(t){n("+g94")},"data-v-6c67e979",null);e.default=G.exports},sLC2:function(t,e,n){"use strict";var s={name:"",props:{start:String,end:String},data:function(){return{}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center","font-size":"1.12em","line-height":"3em"}},[t._v("\n    Sales report for "),n("span",[t._v(t._s(t.view.ser_timed_en(this.$store.state.chronus.start,!0)))]),t._v("-"),n("span",[t._v(t._s(t.view.ser_timed_en(this.$store.state.chronus.end,!0)))])])},staticRenderFns:[]};var r=n("VU/8")(s,i,!1,function(t){n("33iM")},"data-v-89bd1d38",null);e.a=r.exports},yamp:function(t,e){},ywzq:function(t,e){}});
//# sourceMappingURL=9.a193db2fff9c2125018c.js.map