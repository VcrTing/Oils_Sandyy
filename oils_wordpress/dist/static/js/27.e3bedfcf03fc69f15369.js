webpackJsonp([27],{GruT:function(t,n){},PGLT:function(t,n){},cCsy:function(t,n){},fGIE:function(t,n,i){"use strict";var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"qiong-tr"},[i("div",{staticClass:"qiong-wide-5"},[t._v("#")]),t._v(" "),i("div",{staticClass:"qiong-wide-15"},[t._v("SKU")]),t._v(" "),i("div",{staticClass:"qiong-wide-20"},[t._v("產品中文名")]),t._v(" "),i("div",{staticClass:"qiong-wide-23"},[t._v("產品英文名")]),t._v(" "),i("div",{staticClass:"qiong-wide-12 t-c"},[t._v("總庫存")]),t._v(" "),i("div",{staticClass:"qiong-wide-25"},[t._v("庫存詳情")])])}]};var a=i("VU/8")({},e,!1,function(t){i("GruT")},null,null);n.a=a.exports},k1sc:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("Xxa5"),a=i.n(e),s=i("exGp"),o=i.n(s),r=i("0hmw"),c=i("OhMI"),v=i("IB0D"),l=i("T/Tv"),d=i("oKCz"),u=i("fGIE"),_=i("mxGI"),g={components:{WidgetInventory:r.a,QiongLoading:d.a,QiongPanelElement:c.a,QiongHeader:l.a,TablePagerFooter:v.a,PmaInvsTr:u.a,PmaInvsTd:_.a},mounted:function(){this.fetching()},methods:{ioc_txt:function(){},fetching:function(){var t=this;return o()(a.a.mark(function n(){var i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.$refs.invREF.inventoryData();case 3:i=n.sent,console.log("RES =",i),t.invs=i,setTimeout(function(n){return t.loading=!1},300);case 7:case"end":return n.stop()}},n,t)}))()}},data:function(){return{loading:!0,invs:[]}}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[n("qiong-header",[this._v("\n        庫存 PMA\n    ")]),this._v(" "),n("qiong-panel-element",{staticClass:"mobie-table paner-pma",attrs:{need_space:!1}},[n("pma-invs-tr"),this._v(" "),n("pma-invs-td",{attrs:{load:this.loading,many:this.invs}})],1),this._v(" "),n("table-pager-footer"),this._v(" "),n("widget-inventory",{ref:"invREF"})],1)},staticRenderFns:[]};var m=i("VU/8")(g,f,!1,function(t){i("PGLT")},null,null);n.default=m.exports},mxGI:function(t,n,i){"use strict";var e=i("oKCz"),a=i("GWal"),s={props:{load:{type:Boolean},many:{type:Array}},components:{QiongLoading:e.a,CompanyNamedViewing:a.a}},o={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[t.load?i("qiong-loading"):i("div",t._l(t.many,function(n,e){return i("div",{key:e,staticClass:"qiong-td"},[i("div",{staticClass:"qiong-wide-5 pr-0"},[t._v(t._s(e+1))]),t._v(" "),i("div",{staticClass:"qiong-wide-15"},[t._v(t._s(n.sku))]),t._v(" "),i("div",{staticClass:"qiong-wide-20"},[t._v(t._s(n.translation.hk))]),t._v(" "),i("div",{staticClass:"qiong-wide-23"},[t._v(t._s(n.translation.en))]),t._v(" "),i("div",{staticClass:"qiong-wide-12 t-c pr-0"},[t._v(t._s(n.total))]),t._v(" "),i("div",{staticClass:"qiong-wide-25 fx-l"},t._l(n.location,function(e,a){return i("div",{key:a,staticClass:"d-ib pr-3"},[i("span",[i("company-named-viewing",{attrs:{clear:!0,named:e.name}}),t._v("\n                            :  "+t._s(e.quantity))],1),t._v(" "),a+1<n.location.length?i("span",[t._v("，")]):t._e()])}),0)])}),0)],1)},staticRenderFns:[]};var r=i("VU/8")(s,o,!1,function(t){i("cCsy")},null,null);n.a=r.exports}});
//# sourceMappingURL=27.e3bedfcf03fc69f15369.js.map