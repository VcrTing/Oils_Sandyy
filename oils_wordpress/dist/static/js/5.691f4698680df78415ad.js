webpackJsonp([5],{"04q0":function(t,n,e){t.exports=e.p+"static/img/10p.3d03f01.png"},"8cvF":function(t,n,e){t.exports=e.p+"static/img/30p.70f9104.png"},B2Nb:function(t,n){},BRdS:function(t,n,e){t.exports=e.p+"static/img/25p.4175024.png"},BZxr:function(t,n){},DTub:function(t,n){},"LN+F":function(t,n,e){t.exports=e.p+"static/img/20p.ce8d5d6.png"},NBDF:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Xxa5"),s=e.n(i),a=e("exGp"),o=e.n(a),r=e("IB0D"),c=e("IJBQ"),l=e("Um5R"),p=e("RROz"),u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"pro-txt-cont"},[n("p",{staticClass:"qiong-txt-14 txt-sub",domProps:{innerHTML:this._s(this.header)}}),this._v(" "),n("div",{staticClass:"qiong-txt-20 fw-b qiong-pt-2 txt-cold-dark mt-1"},[this._t("default")],2)])},staticRenderFns:[]};var d={name:"",components:{PdTitleWithCont:e("VU/8")({props:["header"]},u,!1,function(t){e("TNRt")},"data-v-44d17e26",null).exports,QiongSpace:l.a,PdfIndex:p.a},props:["pro"],mounted:function(){},data:function(){return{}},methods:{printed:function(){this.$refs.pdfREF.printed()}}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"qiong-td ps-r"},[e("div",{staticClass:"qiong-wide-23 mobie-wide-38 pr-0"},[t.pro&&t.pro.product_image?e("img",{staticClass:"img",attrs:{src:t.pro.product_image}}):e("div",{staticClass:"img-inset fx-c"})]),t._v(" "),e("div",{staticClass:"qiong-wide-4"}),t._v(" "),e("qiong-space",{staticClass:"mobie-show",attrs:{space:"24px"}}),t._v(" "),e("div",{staticClass:"qiong-wide-73 mobie-wide-100 pr-0"},[e("qiong-space",{attrs:{space:"2vw"}}),t._v(" "),t.pro?e("div",{staticClass:"qiong-td mobie-td"},[e("div",{staticClass:"qiong-wide-32 "},[e("pd-title-with-cont",{attrs:{header:"產品中文名"}},[t._v("\n                            "+t._s(t.pro.translation[1].product_name)+" \n                        ")])],1),t._v(" "),e("div",{staticClass:"qiong-wide-38 "},[e("pd-title-with-cont",{attrs:{header:"產品英文名"}},[t._v("\n                            "+t._s(t.pro.translation[0].product_name)+" \n                        ")])],1),t._v(" "),e("div",{staticClass:"qiong-wide-30  h-fill"},[e("pd-title-with-cont",{attrs:{header:"SKU"}},[t._v("\n                            "+t._s(t.pro.sku)+" \n                        ")])],1)]):t._e(),t._v(" "),e("qiong-space",{attrs:{space:"2vw"}}),t._v(" "),e("div",{staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-32  mobie-wide-45"},[e("pd-title-with-cont",{attrs:{header:"PV"}},[t._v("\n                            "+t._s(t.pro.pv)+" \n                        ")])],1),t._v(" "),e("div",{staticClass:"qiong-wide-68  mobie-wide-50"},[e("pd-title-with-cont",{attrs:{header:"單價"}},[e("span",{staticClass:"mr-3"},[t._v("\n                                HK$ "+t._s(t.pro.price)+" \n                            ")]),t._v(" "),e("span",{staticClass:"kill fw-n qiong-txt-14 pl-1 txt-sub"},[e("qiong-space",{staticClass:"mobie-show",attrs:{space:"0px"}}),t._v("\n                                原價 "+t._s(t.pro.retail_price)+"\n                            ")],1)])],1)])],1),t._v(" "),e("qiong-space",{staticClass:"mobie-show",attrs:{space:"7vw"}})],1),t._v(" "),e("pdf-index",{ref:"pdfREF",attrs:{page:"product_info"}})],1)},staticRenderFns:[]};var _=e("VU/8")(d,v,!1,function(t){e("sGLy")},"data-v-197d8a3a",null).exports,f=e("zDkF"),m=e("GWal"),g={components:{DateSelect:e("YPBt").a},name:"",computed:{cate:function(){return[{txt:"加貨",v:1},{txt:"減貨",v:2},{txt:"壞貨",v:3},{txt:"換貨",v:4},{txt:"店鋪樣品消耗",v:5}]},shop:function(){return[{txt:"尖沙咀倉庫",v:"尖沙咀"},{txt:"火炭倉庫",v:"火炭"}]}},data:function(){return{funnel:{cate:1,shop:"尖沙咀",num:null,timed:"",mark:"",change_by:""},loading:!0}},mounted:function(){this.reset()},methods:{reset:function(){this.loading=!0,this.mark="",this.num=null,this.change_by="",this.funnel.cate=1,this.funnel.shop="尖沙咀",this.funnel.timed=this.view.getToday(),this.loading=!1}}},h={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"input-in-table-wrapper time"},[e("div",{staticClass:"qiong-td fx-l pb-4 pt-5"},[e("div",{staticClass:"qiong-wide-15 qiong-pl-20"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.funnel.cate,expression:"funnel.cate"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.funnel,"cate",n.target.multiple?e:e[0])}}},t._l(t.cate,function(n,i){return e("option",{key:i,domProps:{value:n.v}},[t._v("\n                    "+t._s(n.txt)+"\n                ")])}),0)]),t._v(" "),e("div",{staticClass:"qiong-wide-12"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.funnel.shop,expression:"funnel.shop"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.funnel,"shop",n.target.multiple?e:e[0])}}},t._l(t.shop,function(n,i){return e("option",{key:i,domProps:{value:n.v}},[t._v("\n                    "+t._s(n.txt)+"\n                ")])}),0)]),t._v(" "),e("div",{staticClass:"qiong-wide-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.funnel.num,expression:"funnel.num"}],attrs:{type:"text",placeholder:"請輸入"},domProps:{value:t.funnel.num},on:{input:function(n){n.target.composing||t.$set(t.funnel,"num",n.target.value)}}})]),t._v(" "),e("div",{staticClass:"qiong-wide-15 input-time"},[t._v("\n            (自動獲取當前時間)\n            ")]),t._v(" "),e("div",{staticClass:"qiong-wide-16"},[t._v("\n            更改人員\n        ")]),t._v(" "),e("div",{staticClass:"qiong-wide-18"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.funnel.mark,expression:"funnel.mark"}],attrs:{type:"text",placeholder:"請輸入"},domProps:{value:t.funnel.mark},on:{input:function(n){n.target.composing||t.$set(t.funnel,"mark",n.target.value)}}})]),t._v(" "),e("div",{staticClass:"qiong-wide-12 t-r"},[e("button",{staticClass:"submit btn-save fw-b"},[t._v("\n                儲存\n            ")]),t._v(" "),e("button",{staticClass:"btn-cancel ml-3 txt-sub",on:{click:function(n){return t.$emit("cancel_Father")}}},[t._v("\n                關閉\n            ")])])])])},staticRenderFns:[]};var x=e("VU/8")(g,h,!1,function(t){e("B2Nb")},"data-v-c8e0b1ae",null).exports,w={components:{QiongSpace:l.a,ProIPlus:x,CompanyNamedViewing:m.a,QiongEmpty:f.a},name:"",mounted:function(){},data:function(){return{plus:!1,items:null}}},C={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"qiong-td-hui ps-r proi-table pb-4"},[e("qiong-space",{attrs:{space:"0.5vw"}}),t._v(" "),t.plus?e("pro-i-plus",{class:{"iitw-active":t.plus,"iitw-hide":!t.plus},on:{cancel_Father:function(){return t.plus=!1}}}):t._e(),t._v(" "),t.items&&t.items.length>0?e("div",t._l(t.items,function(n,i){return e("div",{key:i,staticClass:"qiong-td fx-l pb-1 qiong-pt-10"},[e("div",{staticClass:"qiong-wide-15 qiong-pl-20"},[t._v("\n                "+t._s(n.cate)+"\n            ")]),t._v(" "),e("div",{staticClass:"qiong-wide-12"},[t._v("\n                "+t._s(n.shop)+"\n                ")]),t._v(" "),e("div",{staticClass:"qiong-wide-12"},[t._v("\n                "+t._s(n.num)+"\n            ")]),t._v(" "),e("div",{staticClass:"qiong-wide-15"},[t._v("\n                "+t._s(n.timed)+"\n            ")]),t._v(" "),e("div",{staticClass:"qiong-wide-16"},[t._v("\n                "+t._s(n.change_by)+"\n            ")]),t._v(" "),e("div",{staticClass:"qiong-wide-30"},[t._v("\n                "+t._s(n.mark)+"\n            ")])])}),0):e("qiong-empty")],1)},staticRenderFns:[]};var b=e("VU/8")(w,C,!1,function(t){e("j8bg")},"data-v-2071f948",null).exports,q={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fx-s fw-b",staticStyle:{"align-items":"flex-end"}},[e("div",t._l(t.tabs,function(n,i){return e("button",{key:i,staticClass:"btn-filter-pure qiong-txt-12",class:{"btn-filter-pure-active":t.now==n.tab,"txt-txt_x3_red":t.now!=n.tab},on:{click:function(e){t.now=n.tab}}},[t._v("\n            "+t._s(n.txt)+"\n        ")])}),0)])},staticRenderFns:[]};var y=e("VU/8")({name:"",data:function(){return{now:0,tabs:[{txt:"全部",tab:0},{txt:"加貨",tab:1},{txt:"減貨",tab:2},{txt:"壞貨",tab:3},{txt:"換貨",tab:4},{txt:"店鋪樣品消耗",tab:5}]}}},q,!1,function(t){e("rSmb")},"data-v-6ee59f49",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"qiong-tr qiong-txt-14 txt-txt_x2"},[e("div",{staticClass:"qiong-wide-15 qiong-pl-20"},[t._v("\n        類別\n    ")]),t._v(" "),e("div",{staticClass:"qiong-wide-12"},[t._v("\n        店鋪\n    ")]),t._v(" "),e("div",{staticClass:"qiong-wide-12"},[t._v("\n        數量\n    ")]),t._v(" "),e("div",{staticClass:"qiong-wide-15"},[t._v("\n        更新時間\n    ")]),t._v(" "),e("div",{staticClass:"qiong-wide-16"},[t._v("\n        更改人員\n    ")]),t._v(" "),e("div",{staticClass:"qiong-wide-30"},[t._v("\n        備註\n    ")])])}]};var F={components:{ProITop:y,ProITr:e("VU/8")({name:"",data:function(){return{}}},k,!1,function(t){e("DTub")},"data-v-0fe81d72",null).exports,ProIBody:b,QiongSpace:l.a},props:["pro","ivs"],data:function(){return{shower:[{txt:"庫存總數",num:0,sort_code:""},{txt:"尖沙咀庫存總數",num:0,sort_code:""},{txt:"火炭庫存總數",num:0,sort_code:""}]}},mounted:function(){var t=this,n=0;this.shower[2].sort_code=this.conf.STOCK_HT_CODE,this.shower[1].sort_code=this.conf.STOCK_SJJ_CODE,this.shower.map(function(e){t.ivs.location.map(function(t){t.sort_code==e.sort_code&&(e.num=t.quantity,n+=e.num)})}),this.shower[0].num=n},computed:{lps:function(){return this.conf.SHOP_LEVEL_LP_IMG}},methods:{plus_open:function(){this.$refs.pibREF.plus=!0}}},E={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"fx-s qiong-pt-10 qiong-txt-14 ex-row"},t._l(t.shower,function(n,i){return e("div",{key:i,staticClass:"lpi-num"},[e("span",[t._v("\n                "+t._s(n.txt)+": \n            ")]),t._v(" "),e("span",[t._v("\n                "+t._s(n.num)+"\n            ")])])}),0),t._v(" "),e("div",{staticClass:"qiong-pt-10 mt-1 mobie-table-simple"},[e("div",{staticClass:"qiong-primay-bg-title py-2 table-in-bg-title"},[e("qiong-space",{attrs:{space:"0.4vw"}}),t._v(" "),e("pro-i-tr")],1),t._v(" "),e("div",{staticClass:"qiong-line-hight-14 tb-br"},[e("pro-i-body",{ref:"pibREF"})],1)])])},staticRenderFns:[]};var P=e("VU/8")(F,E,!1,function(t){e("fHLA")},"data-v-16208899",null).exports,R=e("YhrB"),$={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"d-ib input-in-simp qiong-txt-14"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.point,expression:"point"}],attrs:{type:"text",placeholder:""},domProps:{value:t.point},on:{input:function(n){n.target.composing||(t.point=n.target.value)}}})])},staticRenderFns:[]};var N=e("VU/8")({name:"",props:["_point"],data:function(){return{point:null}},mounted:function(){this.point=this._point}},$,!1,function(t){e("BZxr")},"data-v-51097f76",null).exports,S={components:{LoyaltyRatioOneViewing:R.a,ProLlEdit:N},props:["_edit"],name:"",data:function(){return{now:3}},computed:{lps:function(){return this.conf.SHOP_LEVEL_LP_IMG}}},L={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"mobie-table-simple"},[e("v-row",{staticClass:"pt-3 pu-pro-ll "},t._l(t.lps,function(n,i){return e("v-col",{key:i,staticClass:"lps-wrapper px-0"},[e("div",{staticClass:"fx-c"},[e("div",{staticClass:"qiong-wide-25"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"qiong-wide-50"},[e("loyalty-ratio-one-viewing",{staticClass:"lps-img hand",class:{"lps-img-active":t.now==n.level},attrs:{ratio:n.ratio}})],1),t._v(" "),e("div",{staticClass:"qiong-wide-25 lps-i-wrapper"},[i<t.lps.length-1?e("span",{staticClass:"ps-c lps-i-right"}):t._e(),t._v("\n                         \n                    ")])]),t._v(" "),e("div",{staticClass:"fx-c pb-3"},[e("div",{staticClass:"qiong-wide-25"},[t._v(" ")]),t._v(" "),e("div",{staticClass:"qiong-wide-50 lps-bottom"},[e("v-icon",[t._v("\n                            mdi-chevron-down\n                        ")])],1),t._v(" "),e("div",{staticClass:"qiong-wide-25"},[t._v(" ")])]),t._v(" "),e("div",{staticClass:"fx-c qiong-txt-16 ",class:{"fw-b txt-txt":t.now==n.level,"txt-blue-light":t.now!=n.level}},[t._v("\n                    獲得\n                        "),t._edit?e("pro-ll-edit",{staticClass:"mx-2",class:{"input-in-simp-active":t._edit},attrs:{_point:n.ratio}}):e("span",[t._v(t._s(n.ratio))]),t._v("\n                    LP\n                ")],1)])}),1)],1)])},staticRenderFns:[]};var T=e("VU/8")(S,L,!1,function(t){e("OoFO")},"data-v-e115fab0",null).exports,V=e("T/Tv"),I=e("OhMI"),O={methods:{one:function(t){var n=this;return o()(s.a.mark(function e(){var i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.conn.ex_get(n,"browse_stock",t);case 2:return i=(i=e.sent)&&i.message?i.message[0]:{},console.log("Invens =",t,i),e.abrupt("return",i);case 6:case"end":return e.stop()}},e,n)}))()}}},U={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},B=e("VU/8")(O,U,!1,null,null,null).exports,D={components:{ProDetail:_,ProLevelLp:T,ProInventory:P,ProITop:y,TablePagerFooter:r.a,MemberMsgWidget:c.a,QiongSpace:l.a,QiongHeader:V.a,QiongPanelElement:I.a,NetInventory:B},name:"",data:function(){return{loading:!0,product:{},invent:null,edit_lp:!1}},mounted:function(){var t=this.$route.query;this.init(t&&t.sku?t.sku:null)},methods:{init:function(t){this.loading=!0;var n=this.$store.state.products;n=(n=n||[]).filter(function(n){return t==n.sku}),this.product=n[0]?n[0]:null,this.fetchStock(t),this.loading=!1},fetchStock:function(t){var n=this;return o()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$refs.netInvensREF.one({sku:t});case 2:n.invent=e.sent;case 3:case"end":return e.stop()}},e,n)}))()}}},H={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[e("div",{staticClass:"py-4 mx-4"},[e("p",{staticClass:"qiong-txt-tr"},[e("span",{staticClass:"txt-sub a-hover",on:{click:function(n){return t.$router.push("inventory")}}},[t._v("庫存列表")]),t._v(" "),e("span",{staticClass:"txt-sub px-1 op-80"},[t._v("/")]),t._v(" "),e("span",{staticClass:"fw-b"},[t._v("產品詳情")])])]),t._v(" "),e("qiong-header",[t._v("\n        產品詳情\n    ")]),t._v(" "),e("qiong-panel-element",{attrs:{need_space:!1}},[e("div",{staticClass:"py-3 px-7 qiong-pt-10"},[t.loading?t._e():e("pro-detail",{staticClass:"mt-4",attrs:{pro:t.product}})],1)]),t._v(" "),e("qiong-space",{attrs:{space:"24px"}}),t._v(" "),e("div",{staticClass:"for-row"},[e("div",{staticClass:"panel-pure"},[e("div",{staticClass:"panel-pure-header fx-s"},[e("div",{staticClass:"py-1 txt-txt"},[t._v("購買後獲得LP點數")])]),t._v(" "),e("pro-level-lp",{attrs:{_edit:t.edit_lp}})],1),t._v(" "),t.$store.state.is_admin?e("div",{staticClass:"panel-pure"},[e("div",{staticClass:"panel-pure-header fx-s mobie-td"},[e("div",{staticClass:"txt-txt"},[t._v("產品庫存")]),t._v(" "),e("div",{staticClass:" t-r"},[e("pro-i-top",{on:{plus_Father:function(){return t.$refs.piREF.plus_open()}}})],1)]),t._v(" "),t.invent?e("pro-inventory",{ref:"piREF",attrs:{ivs:t.invent,pro:t.product}}):t._e()],1):t._e()]),t._v(" "),e("div",{staticClass:"pti-go-pdf hand",on:{click:function(n){return t.$router.go(-1)}}},[e("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),e("net-inventory",{ref:"netInvensREF"}),t._v(" "),e("table-pager-footer")],1)},staticRenderFns:[]};var Q=e("VU/8")(D,H,!1,function(t){e("nlsN")},"data-v-71417a84",null);n.default=Q.exports},OoFO:function(t,n){},Scd2:function(t,n,e){t.exports=e.p+"static/img/15p.33409f6.png"},TNRt:function(t,n){},WiJT:function(t,n){},YhrB:function(t,n,e){"use strict";var i={name:"",props:{ratio:Number},computed:{ratio_src:function(){return e("xooN")("./"+this.ratio+"p.png")}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"img",attrs:{src:this.ratio_src}})},staticRenderFns:[]};var a=e("VU/8")(i,s,!1,function(t){e("WiJT")},"data-v-4e2513d6",null);n.a=a.exports},fHLA:function(t,n){},j8bg:function(t,n){},nlsN:function(t,n){},rSmb:function(t,n){},sGLy:function(t,n){},xooN:function(t,n,e){var i={"./10p.png":"04q0","./15p.png":"Scd2","./20p.png":"LN+F","./25p.png":"BRdS","./30p.png":"8cvF"};function s(t){return e(a(t))}function a(t){var n=i[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="xooN"}});
//# sourceMappingURL=5.691f4698680df78415ad.js.map