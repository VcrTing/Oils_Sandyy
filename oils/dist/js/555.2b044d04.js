"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[555],{2769:function(t,n,e){e.d(n,{Z:function(){return c}});var s=function(){var t=this,n=t._self._c;return n("div")},i=[],o={name:"",data(){return{}},methods:{async lunch(t){const n=this.view.getToday();if(t=t||{date_lte:n},t["_sort"]="date:DESC",t["_limit"]=300,t=await this.conn.get(this.api.browse_log_stock,this.$store.state.token,t),t&&t.message)return t.message}}},a=o,l=e(1001),r=(0,l.Z)(a,s,i,!1,null,"59e48e8f",null),c=r.exports},4820:function(t,n,e){e.d(n,{Z:function(){return c}});var s=function(){var t=this,n=t._self._c;return n("div")},i=[],o={name:"",data(){return{}},methods:{async inventoryData(t={}){t._limit=999;try{let n=await this.conn.get(this.api.browse_stock,this.$store.state.token,t);if(n)return n=n?n.message:n,n}catch(n){}return[]}}},a=o,l=e(1001),r=(0,l.Z)(a,s,i,!1,null,"3f6816f0",null),c=r.exports},1304:function(t,n,e){e.d(n,{Z:function(){return u}});var s=function(){var t=this,n=t._self._c;return n("div",[n("v-row",{staticClass:"qiong-panel_element qpe-mh mobie-panel",class:t.extra_class},[n("v-col",{staticClass:"px-0 qpe_inner py-0",attrs:{cols:t.cols}},[t._t("default")],2),t.need_space?n("v-col",{staticClass:"inner-empty"},[n("qiong-space",{attrs:{space:"7vh"}},[t._v(" ")])],1):t._e()],1)],1)},i=[],o=e(934),a=e(7667),l={name:"",props:{need_space:{type:Boolean,default:!0},cols:{type:Number,default:12},extra_class:{type:String}},components:{QiongSpace:o.Z,QiongPageLing:a.Z},data(){return{}}},r=l,c=e(1001),d=(0,c.Z)(r,s,i,!1,null,"94a8aac0",null),u=d.exports},4221:function(t,n,e){e.d(n,{Z:function(){return u}});var s=function(){var t=this,n=t._self._c;return n("div",[t.need_top?n("pti-go-top"):t._e(),n("qiong-space",{attrs:{space:t.height}})],1)},i=[],o=e(5725),a=e(934),l={components:{QiongSpace:a.Z,PtiGoTop:o.Z},name:"",props:{need_top:{type:Boolean,default:!0},height:{type:String,default:"210px"}},data(){return{}}},r=l,c=e(1001),d=(0,c.Z)(r,s,i,!1,null,"02d07b41",null),u=d.exports},7667:function(t,n,e){e.d(n,{Z:function(){return c}});var s=function(){var t=this,n=t._self._c;return n("v-col",{staticClass:"py-0 ma-0 pa-0",attrs:{cols:"12"}},[n("div",{staticClass:"qiong-line",class:t.ex_class})])},i=[],o={name:"",props:{ex_class:{type:String}},data(){return{}}},a=o,l=e(1001),r=(0,l.Z)(a,s,i,!1,null,"8711cf2c",null),c=r.exports},5725:function(t,n,e){e.d(n,{Z:function(){return c}});var s=function(){var t=this,n=t._self._c;return n("div",{staticClass:"pti-go-top hand",class:{"turn-bown":t.is_down,"turn-up":!t.is_down},on:{click:t.toDis}},[n("v-icon",[t._v(" mdi-arrow-up ")])],1)},i=[],o={name:"",data(){return{is_down:!0,screenH:0,show:!1}},mounted(){this.screenH=window.screen.height,window.addEventListener("scroll",this.handleScroll,!0)},methods:{handleScroll(){let t=document.documentElement.scrollTop||document.body.scrollTop;t>this.screenH-300?this.is_down=!1:this.is_down=!0,this.show=document.body.offsetHeight>this.screenH},toDis(){this.is_down?this.toDown():this.toTop(),this.is_down=!this.is_down},toTop(){let t=document.documentElement.scrollTop||document.body.scrollTop;const n=setInterval((()=>{document.body.scrollTop=document.documentElement.scrollTop=t-=50,t<=0&&(clearInterval(n),this.$emit("finish_Father"))}),10)},toDown(){window.scrollTo(0,document.body.scrollHeight)}}},a=o,l=e(1001),r=(0,l.Z)(a,s,i,!1,null,"0ad07901",null),c=r.exports},7126:function(t,n,e){e.d(n,{Z:function(){return c}});var s=function(){var t=this,n=t._self._c;return t.named?n("span",[t.named.startsWith("尖")?n("span",{class:{"btn-jsz":!t.clear}},[t._v(" 尖沙咀 ")]):t.named.startsWith("火")?n("span",{class:{"btn-ht":!t.clear}},[t._v(" 火炭 ")]):t._e()]):t._e()},i=[],o={name:"",props:["named","clear"],data(){return{}}},a=o,l=e(1001),r=(0,l.Z)(a,s,i,!1,null,"33034240",null),c=r.exports},555:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var s=function(){var t=this,n=t._self._c;return n("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[n("qiong-header",[t._v(" 庫存操作記錄 PMA ")]),n("qiong-panel-element",{staticClass:"mobie-table paner-pma",attrs:{need_space:!1}},[n("pma-invs-tr"),n("pma-invs-td",{attrs:{load:t.loading,many:t.invs}})],1),n("table-pager-footer"),n("widget-inventory",{ref:"invREF"}),n("widget-logo-stock",{ref:"stockREF"})],1)},i=[],o=e(4820),a=e(1304),l=e(4221),r=e(1648),c=e(6481),d=e(6793),u=e(4888),p=e(2769),v={components:{WidgetInventory:o.Z,WidgetLogoStock:p.Z,QiongLoading:c.Z,QiongPanelElement:a.Z,QiongHeader:r.Z,TablePagerFooter:l.Z,PmaInvsTr:d.Z,PmaInvsTd:u.Z},mounted(){this.fetching()},methods:{ioc_txt(){},async fetching(){this.loading=!0;let t=await this.$refs.stockREF.lunch();console.log("RES =",t),this.invs=t,setTimeout((t=>this.loading=!1),300)}},data(){return{loading:!0,invs:[]}}},_=v,h=e(1001),f=(0,h.Z)(_,s,i,!1,null,null,null),g=f.exports},4888:function(t,n,e){e.d(n,{Z:function(){return u}});var s=function(){var t=this,n=t._self._c;return n("div",[t.load?n("qiong-loading"):n("div",t._l(t.many,(function(e,s){return n("div",{key:s,staticClass:"qiong-td"},[n("div",{staticClass:"qiong-wide-5 pr-0"},[t._v(t._s(s+1))]),n("div",{staticClass:"qiong-wide-15"},[t._v(t._s(e.sku))]),n("div",{staticClass:"qiong-wide-20"},[t._v(t._s(e.translation.hk))]),n("div",{staticClass:"qiong-wide-23"},[t._v(t._s(e.translation.en))]),n("div",{staticClass:"qiong-wide-12 t-c pr-0"},[t._v(t._s(e.total))]),n("div",{staticClass:"qiong-wide-25 fx-l"},t._l(e.location,(function(s,i){return n("div",{key:i,staticClass:"d-ib pr-3"},[n("span",[n("company-named-viewing",{attrs:{clear:!0,named:s.name}}),t._v(" :  "+t._s(s.quantity))],1),i+1<e.location.length?n("span",[t._v("，")]):t._e()])})),0)])})),0)],1)},i=[],o=e(6481),a=e(7126),l={props:{load:{type:Boolean},many:{type:Array}},components:{QiongLoading:o.Z,CompanyNamedViewing:a.Z}},r=l,c=e(1001),d=(0,c.Z)(r,s,i,!1,null,null,null),u=d.exports},6793:function(t,n,e){e.d(n,{Z:function(){return c}});var s=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"qiong-tr"},[n("div",{staticClass:"qiong-wide-5"},[t._v("#")]),n("div",{staticClass:"qiong-wide-15"},[t._v("SKU")]),n("div",{staticClass:"qiong-wide-20"},[t._v("產品中文名")]),n("div",{staticClass:"qiong-wide-23"},[t._v("產品英文名")]),n("div",{staticClass:"qiong-wide-12 t-c"},[t._v("總庫存")]),n("div",{staticClass:"qiong-wide-25"},[t._v("庫存詳情")])])}],o={},a=o,l=e(1001),r=(0,l.Z)(a,s,i,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=555.2b044d04.js.map