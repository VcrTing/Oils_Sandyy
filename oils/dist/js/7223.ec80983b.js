"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[7223],{607:function(t,s,e){e.d(s,{Z:function(){return l}});var i=function(){var t=this,s=t._self._c;return s("div")},a=[],n={mounted(){this.$emit("sign")}},r=n,o=e(1001),d=(0,o.Z)(r,i,a,!1,null,"6fb58a9e",null),l=d.exports},405:function(t,s,e){e.d(s,{Z:function(){return l}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"txt-res pt-1"},[1==t._bigger?s("div",{staticClass:"qiong-td fw-b qiong-txt-16 fx-r"},[s("div",{staticClass:"qiong-wide-18 mobie-wide-28 pr-0"},[t._t("content")],2),s("div",{staticClass:"qiong-wide-32 mobie-wide-72 pr-0"},[t._t("txt"),s("span",{staticClass:""},[t._v(" ")])],2),s("div",{staticClass:"qiong-wide-50 mobie-hide"},[t._v(" ")])]):s("div",{staticClass:"qiong-td fw-b qiong-txt-16 my-0 py-0"},[s("div",{staticClass:"qiong-wide-60 mobie-hide"},[t._v(" ")]),s("div",{staticClass:"qiong-wide-30 mobie-wide-80 pr-0"},[t._t("txt"),s("span",{staticClass:""},[t._v(" ")])],2),s("div",{staticClass:"qiong-wide-10 mobie-wide-20 pr-0"},[t._t("content")],2)])])},a=[],n={name:"",props:{_bigger:{type:Number,default:1}}},r=n,o=e(1001),d=(0,o.Z)(r,i,a,!1,null,null,null),l=d.exports},1204:function(t,s,e){e.d(s,{Z:function(){return u}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"pb-3 fs-r"},[t.need_line?s("div",[1==t.bigger?s("qiong-page-ling"):s("qiong-page-ling",{attrs:{ex_class:"qiong-lineXL"}})],1):t._e(),s("qiong-space",{attrs:{space:"0.2vw"}}),s("qiong-space",{attrs:{space:"0.5vh"}}),s("div",{},[t._t("default")],2),1==t.bigger?s("div",t._l(t.res,(function(e,i){return s("qsr-wrapper",{key:i,attrs:{_bigger:t.bigger}},[s("span",{attrs:{slot:"txt"},slot:"txt"},[t._v(t._s(e.txt)+" ")]),s("span",{attrs:{slot:"content"},domProps:{innerHTML:t._s(e.content)},slot:"content"})])})),1):s("div",{},t._l(t.res,(function(e,i){return s("qsr-wrapper",{key:i,attrs:{_bigger:t.bigger}},[s("span",{attrs:{slot:"txt"},slot:"txt"},[t._v(t._s(e.txt))]),s("span",{attrs:{slot:"content"},domProps:{innerHTML:t._s(e.content)},slot:"content"})])})),1),s("qiong-space",{attrs:{space:"0.2vw"}}),s("qiong-space",{attrs:{space:"0.7vh"}})],1)},a=[],n=e(7667),r=e(934),o=e(405),d={props:{res:{type:Array},bigger:{type:Number,default:1},need_line:{type:Boolean,default:!0}},name:"",components:{QiongPageLing:n.Z,QiongSpace:r.Z,QsrWrapper:o.Z},data(){return{test:[{txt:"獎金",content:"HK&nbsp;135.0"},{txt:"獎金",content:"HK&nbsp;135.0"}]}},mounted(){}},l=d,c=e(1001),_=(0,c.Z)(l,i,a,!1,null,"353118a5",null),u=_.exports},5099:function(t,s,e){e.r(s),e.d(s,{default:function(){return cs}});var i=function(){var t=this,s=t._self._c;return s("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[s("qiong-header-filter",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("購買記錄")])]),s("qiong-panel-element",{staticClass:"mobie-table",attrs:{need_space:!1}},[s("br-tr"),t.loading?s("qiong-loading"):s("buy-records-inner",{attrs:{items:t.buys}})],1),s("widget-buys",{ref:"buysREF"}),s("net-buy-order",{ref:"orderREF"}),s("table-pager-footer"),t.allow&&t.$store.state.is_admin?s("pdf-buy",{attrs:{records:t.buys}}):t._e(),t.$store.state.user_backend&&!t.$store.state.loading?s("tool-ready",{on:{sign:t.init}}):t._e()],1)},a=[],n=(e(7658),function(){var t=this,s=t._self._c;return s("div")}),r=[],o={name:"",data(){return{hide:"cancelled_on-hold_refunded_failed_trash"}},methods:{async swicthing(){let t=[];console.log("搜索 购买记录",{time_period:this.$store.state.chronus.id,_sort:"ordered_date:DESC",_limit:999});let s=await this.conn.get(this.api.orders,this.$store.state.token,{time_period:this.$store.state.chronus.id,_sort:"ordered_date:DESC",_limit:999});return this.$store.state.is_admin,console.log("购买记录 res =",s),s.map((s=>{this.hide.indexOf(s.status)<0&&t.push(s)})),console.log("购买记录 buys =",t),t},filterMe(t){let s=[];this.$store.state.user_backend;const e=this.$store.state.user_collection.map((t=>t.member_code));return t.map((t=>{e.indexOf(t.customer_uuid.member_code)&&s.push(t)})),s}}},d=o,l=e(1001),c=(0,l.Z)(d,n,r,!1,null,"0b933c5d",null),_=c.exports,u=e(6225),p=e(607),m=e(1304),v=e(4221),g=e(4359),h=e(6481),f=e(934),b=function(){var t=this,s=t._self._c;return s("div")},w=[],y={name:"",props:[""],data(){return{hide:"cancelled_on-hold_refunded_failed_processing"}},methods:{__status(t){return t.filter((t=>this.hide.indexOf(t.status)<0))},_deal(t){return t=t&&t.data?t.data:[],t=this.__status(t),t},async _record(t){return t["_limit"]=999,t["_sort"]||(t["_sort"]="ordered_date:DESC"),t["time_period"]||(t["time_period"]=this.$store.state.chronus.id),t["member_code"]||(t["member_code"]=this.$store.state.user_backend.member_code),await this.conn.get(this.api.browse_order,this.$store.state.token,t)},async record(t="all"){let s=await this._record({line_type:t});return this._deal(s)},testing(){setTimeout((t=>{let s=0,e=this.$store.state.user_collection.map((t=>t.member_code));res.map((t=>{for(let i=0;i<e.length;i++)e[i]==t.customer_uuid.member_code&&(s+=1)})),console.log("RECORD =",res," 我下线的订单数量 =",s),this.sponsor_enroller(res)}),2400)},async sponsor_enroller(t){let s=await this._record({line_type:"sponsored"});s=s&&s.data?s.data:[],s=this.__status(s),console.log("SPNSOR =",s,"ENROLLER =",t),t=t.map((t=>t.customer_uuid.member_code));let e=0;s.map((s=>{t.indexOf(s.customer_uuid.member_code)||(e+=1,console.log("不同的 sponsor 订单 =",s))})),console.log("enroller 与 sponsor 不同，index =",e)}}},C=y,x=(0,l.Z)(C,b,w,!1,null,"0eb86443",null),q=x.exports,Z=function(){var t=this,s=t._self._c;return this.$store.state.share_type&&this.$store.state.share_type>=2?s("div",[s("div",{staticClass:"pti-go-pdf hand",on:{click:t.lockPrint}},[t.printing?s("v-icon",{staticClass:"circle-around"},[t._v("mdi-loading")]):s("v-icon",[t._v("mdi-file-outline")])],1),t.loading?t._e():s("pdf-buy-inner",{staticClass:"pdf_modal",attrs:{items:t.records}}),s("pdf-buy-print",{ref:"pdfBuyREF"})],1):t._e()},k=[],P=e(7442),$=function(){var t=this,s=t._self._c;return s("div",{staticClass:"root",staticStyle:{"line-height":"1.7em"},attrs:{id:"pdf_buy"}},[s("pdf-buy-header",{attrs:{start:"29 Sept 2021",end:"28 Oct 2021"}}),s("table",{staticClass:"table-buy",staticStyle:{width:"100%"},attrs:{border:"1"}},[s("pdf-buy-table-header"),t.items?s("pdf-buy-table-content",{attrs:{_items:t.items}}):t._e()],1)],1)},B=[],S=function(){var t=this;t._self._c;return t._m(0)},E=[function(){var t=this,s=t._self._c;return s("thead",{staticClass:"thead-buy",staticStyle:{width:"100%"}},[s("tr",{staticStyle:{width:"100%"}},[s("td",{staticStyle:{"padding-left":"0","padding-right":"0"}},[t._v(" ")]),s("td",{staticClass:"fs-c"},[t._v("Member ID")]),s("td",{},[t._v("Name")]),s("td",{staticClass:"fs-c"},[t._v("Order #")]),s("td",{staticClass:"fs-c"},[t._v("Date")]),s("td",{staticClass:"fs-c"},[t._v("LP")]),s("td",{staticClass:"fs-c"},[t._v("eWallet")]),s("td",{staticClass:"fs-c"},[t._v("Subtotal")]),s("td",{staticClass:"fs-c"},[t._v("PV")]),s("td",{staticClass:"fs-c",staticStyle:{"padding-left":"0","padding-right":"0"}},[t._v("Shipping fee")])])])}],L={},R=(0,l.Z)(L,S,E,!1,null,"1775f3f5",null),T=R.exports,F=function(){var t=this,s=t._self._c;return s("tbody",{staticClass:"tbody-buy"},[t._l(t._items,(function(e,i){return s("tr",{key:i,staticClass:"td-buy",attrs:{border:"1"}},[s("td",{staticClass:"fs-c"},[e.is_new?s("span",[t._v("首")]):s("span",[t._v(" ")])]),s("td",{staticClass:"fs-c"},[t._v(t._s(e.customer_uuid.member_code))]),s("td",[t._v(t._s(e.customer_uuid.display_name))]),s("td",{staticClass:"fs-c"},[t._v(t._s(e.uuid))]),s("td",{staticClass:"fs-c"},[t._v(t._s(t.view.ser_timed_en(e.ordered_date,!0,!1)))]),s("td",{staticClass:"fs-c"},[t._v(" 000 ")]),s("td",{staticClass:"fs-c"},[e.is_ewallet?s("span",[t._v(t._s(e.ewallet_detail.ewallet_used))]):t._e()]),s("td",{},[s("span",[t._v("HK$")]),s("span",{staticStyle:{float:"right"}},[t._v(t._s(e.product_total))])]),s("td",{staticClass:"fs-c"},[t._v(t._s(e.total_pv))]),s("td",{staticClass:"fs-c"},[t._v(t._s(e.shipping_total))])])})),t._items?s("pdf-buy-total",{staticClass:"td-buy",attrs:{buys:t._items}}):t._e(),s("pdf-buy-footer",{staticClass:"td-buy"}),s("pdf-buy-footer",{staticClass:"td-buy"}),s("pdf-buy-footer",{staticClass:"td-buy"})],2)},H=[],O=function(){var t=this;t._self._c;return t._m(0)},Q=[function(){var t=this,s=t._self._c;return s("tr",{staticClass:"td-buy"},[s("td",{staticClass:"fs-c",attrs:{width:"5%"}},[t._v("   ")]),s("td",{staticClass:"fs-c",attrs:{width:"10%"}},[t._v(" ")]),s("td",{attrs:{width:"25%"}},[t._v(" ")]),s("td",{staticClass:"fs-c",attrs:{width:"9%"}},[t._v(" ")]),s("td",{staticClass:"fs-c",attrs:{width:"10%"}},[t._v(" ")]),s("td",{staticClass:"fs-c",attrs:{width:"7%"}},[t._v(" ")]),s("td",{staticClass:"fs-c",attrs:{width:"7%"}},[t._v(" ")]),s("td",{attrs:{width:"13%"}},[t._v("   ")]),s("td",{staticClass:"fs-c",attrs:{width:"7%"}},[t._v(" ")]),s("td",{staticClass:"fs-c",attrs:{width:"7%"}},[t._v(" ")])])}],W={},A=(0,l.Z)(W,O,Q,!1,null,null,null),D=A.exports,K=function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v(" ")]),s("td",[t._v(" ")]),s("td",[t._v(" ")]),s("td",[t._v(" ")]),s("td",[t._v(" ")]),s("td",[t._v(" ")]),s("td",{staticClass:"fs-c"},[t._v(t._s(t.ew))]),s("td",[s("span",[t._v("HK$")]),s("span",{staticStyle:{float:"right"}},[t._v(t._s(t.ps))])]),s("td",{staticClass:"fs-c"},[t._v("  "+t._s(t.pv)+"  ")]),s("td",{staticClass:"fs-c"},[s("span",[t._v(t._s(t.sp))])])])},N=[],V={props:{buys:Array},computed:{ew(){let t=0;return this.buys.map((s=>{s.is_ewallet&&(t=this.view.floatAdd(t,s.ewallet_detail.ewallet_used))})),t},pv(){let t=0;return this.buys.map((s=>{t=this.view.floatAdd(t,s.total_pv)})),t},ps(){let t=0;return this.buys.map((s=>{t=this.view.floatAdd(t,s.product_total)})),t},sp(){let t=0;return this.buys.map((s=>{t=this.view.floatAdd(t,s.shipping_total)})),t}}},I=V,M=(0,l.Z)(I,K,N,!1,null,"37cf9a9b",null),j=M.exports,X={components:{PdfBuyTotal:j,PdfBuyFooter:D},name:"",props:{_items:Array},data(){return{footer:[{},{},{},{}]}}},z=X,U=(0,l.Z)(z,F,H,!1,null,"70b9a6b2",null),G=U.exports,J=e(6283),Y={components:{PdfBuyHeader:J.Z,PdfBuyTableHeader:T,PdfBuyTableContent:G},props:{items:Array}},tt=Y,st=(0,l.Z)(tt,$,B,!1,null,"59818d6b",null),et=st.exports,it={components:{PdfBuyInner:et,PdfBuyPrint:P.Z},name:"",props:{records:{type:Array,default:null}},data(){return{printing:!1,loading:!1}},mounted(){},methods:{lockPrint(){this.printing||(this.printing=!0,this.$refs.pdfBuyREF.printed(),setTimeout((()=>{this.printing=!1}),2400))}}},at=it,nt=(0,l.Z)(at,Z,k,!1,null,"64283f8c",null),rt=nt.exports,ot=function(){var t=this,s=t._self._c;return s("div",{staticClass:"qiong-pt-10"},[s("div",{staticClass:"txt-sub qiong-pt-10 pb-1"},[t._v(" 共 "+t._s(t.item.ordered_product.length)+" 種商品，數量 "+t._s(t.nums)+" 件 ")]),s("div",t._l(t.item.ordered_product,(function(t,e){return s("div",{key:e,staticClass:"pt-3 pb-2"},[s("product-inline",{attrs:{_product:t}})],1)})),0),s("buys-records-logo",{attrs:{order:t.item}}),s("div",{staticClass:"qiong-tr qiong-txt-16 mobie-td pb-1"},[s("div",{staticClass:"qiong-wide-38"},[t._v(" 收貨地址："+t._s(t.view.backend.view_shipping_address(t.item.shipping_address))+" ")]),s("div",{staticClass:"qiong-wide-32 mobie-pt-6 pc-pl-3"},[t._v(" 收貨人姓名："+t._s(t.view.backend.view_shipping_named(t.item.shipping_address))+" ")]),s("div",{staticClass:"qiong-wide-30 mobie-pt-12 t-r"},[t.item.shipping_total?s("span",[t._v("運費："+t._s(t.item.shipping_total))]):t._e()])]),s("hr",{staticClass:"my-2"}),s("div",{staticClass:"fx-s buy-footer"},[s("div",{staticClass:"qiong-wide-60"},[s("div",[t._v("付款地址：  "+t._s(t.view.backend.view_shipping_address(t.item.billing_address)))]),s("div",{staticClass:"wide-100 mt-1"},[t._v("付款人姓名："+t._s(t.view.backend.view_shipping_named(t.item.billing_address)))]),s("div",{staticClass:"qiong-td mobie-td mt-1"},[s("icon-with-text",{staticClass:"qiong-wide-35",attrs:{icon:"mdi-email-outline",extra_class:"qiong-txt-14"}},[t._v(" ："+t._s(t.item.billing_address.billing_email)+" ")]),s("icon-with-text",{staticClass:"qiong-wide-65",attrs:{icon:"mdi-phone-outline",extra_class:"qiong-txt-14"}},[t._v(" ："+t._s(t.item.billing_address.billing_phone)+" ")])],1),s("div",{staticClass:"qiong-td mobie-td mt-3 mobie-pt-12"},[s("div",{staticClass:"qiong-wide-35",class:{"pay-title":t.item.stripe_transaction_id}},[t._v("付款方式： "),s("buy-way-viewing",{attrs:{order:t.item}}),t.item.is_LP?s("buy-way-lp-viewing"):t._e(),t.item.is_ewallet?s("buy-way-ewallet-viewing"):t._e()],1),s("div",{staticClass:"qiong-wide-65 mobie-pt-6 txt-timed"},[t._v(" 付款時間："+t._s(t.view.ser_timed(t.item.ordered_date,!0,!1))+" ")])]),s("div",{staticClass:"qiong-td mobie-td mt-1 mobie-pt-12"})]),s("div",{staticClass:"qiong-wide-40 mobie-pt-12 t-r qiong-txt-18 fw-b"},t._l(t.result,(function(e,i){return s("div",{key:i,staticClass:"qiong-td"},[s("div",{staticClass:"qiong-wide-60"},[t._v(t._s(e.txt))]),s("div",{staticClass:"qiong-wide-40 pr-0"},[0==i&&e.hkd?s("span",[t._v("HKD ")]):t._e(),t._v(" "+t._s(e.content))])])})),0)]),s("div",{staticClass:"qiong-pt-15"})],1)},dt=[],lt=e(405),ct=e(1204),_t=function(){var t=this,s=t._self._c;return s("div",{staticClass:"d-ib"},[s("v-icon",{class:t.extra_class},[t._v(t._s(t.icon))]),t._t("default")],2)},ut=[],pt={name:"",props:["extra_class","icon"],data(){return{}}},mt=pt,vt=(0,l.Z)(mt,_t,ut,!1,null,"c2ddaaa0",null),gt=vt.exports,ht=function(){var t=this,s=t._self._c;return t.$store.state.is_admin?s("div",{staticClass:"qiong-pt-15"},[t.data&&t.data.length>0?s("div",{staticClass:"buy-logo-panel my-3"},[s("v-expansion-panels",{attrs:{accordion:"",flat:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",[s("div",{staticClass:"blp-header fx-l py-3"},[s("v-icon",[t._v("mdi-post-outline")]),s("span",{staticClass:"qiong-txt-16 pl-1"},[t._v(" 操作記錄 ")])],1)]),s("v-expansion-panel-content",{staticClass:"mobie-table-simple"},[s("div",{staticClass:"qiong-tr qiong-txt-tr pb-1"},[s("div",{staticClass:"qiong-wide-4 mobie-hide"},[t._v(" ")]),s("div",{staticClass:"qiong-wide-20 pr-3"},[t._v(" 更改人員 ")]),s("div",{staticClass:"qiong-wide-26"},[t._v(" 更改時間 ")]),s("div",{staticClass:"qiong-wide-50"},[t._v(" 更改操作 ")])]),t._l(t.data,(function(e,i){return s("div",{key:i,staticClass:"qiong-td qiong-txt-14 qiong-pt-5 pb-1"},[s("div",{staticClass:"qiong-wide-4 mobie-hide"},[t._v(" ")]),s("div",{staticClass:"qiong-wide-20 pr-3"},[t._v(" "+t._s(e.change_by)+" ")]),s("div",{staticClass:"qiong-wide-26"},[t._v(" "+t._s(t.view.ser_timed(e.date,!0,!1))+" ")]),s("div",{staticClass:"qiong-wide-50"},[t._v(" "+t._s(e.option_name)+": "+t._s(e.option_desc)+" ")])])}))],2)],1)],1)],1):t._e(),s("widget-logo-order",{ref:"orderREF"})],1):t._e()},ft=[],bt=function(){var t=this,s=t._self._c;return s("div")},wt=[],yt={name:"",data(){return{}},methods:{_replace_status(t){return t=t.replace("processing","處理中"),t=t.replace("completed","完成"),t},_replace_stripe(t){let s="";return t=t.split("->"),t.map((t=>{s+=""==t?"新增為 ":t})),s},_replace_produc_name(t){let s=t.split(":");return s&&s.map((t=>{if("product"==t)return"商品"})),s.join(" ")},_replace_produc(t){let s=[];for(let e in t)if(-1!=t[e].indexOf("NaN"))return!1;return s.join("，")},_serial(t){let s=[];return t=t.map((t=>{for(let e in t){let i=t[e];"status"==e?(i={k:e,res:t[e],change_by:t["change_by"],date:t["date"]},i.option_name="商品交付狀態",i.option_desc=this._replace_status(t[e]),s.push(i)):"stripe_transaction_id"==e?(i={k:e,res:t[e],change_by:t["change_by"],date:t["date"]},i.option_name="信用卡(Stripe) Code",i.option_desc=this._replace_stripe(t[e]),s.push(i)):e.startsWith("product")&&(i={k:e,res:t[e],change_by:t["change_by"],date:t["date"]},i.option_name=this._replace_produc_name(e),i.option_desc=this._replace_produc(t[e]),s.push(i)),t[e]=i}return t})),s=s.filter((t=>t.option_desc)),s},_build(t){t.map((t=>{let s=[];for(let e in t)t[e].date=e,s.push(t[e]);return t.res=s,t})),t=t.map((t=>this._serial(t.res)));let s=[];return t.map((t=>{t.map((t=>{s.push(t)}))})),s},async lunch(t){try{let s={uuid:t};if(s=await this.conn.get(this.api.browse_log_order,this.$store.state.token,s),s&&s.message)return s=s.message[0],s=s.change_log?s.change_log:[],this._build(s)}catch(s){return[]}}}},Ct=yt,xt=(0,l.Z)(Ct,bt,wt,!1,null,"6a4ef98a",null),qt=xt.exports,Zt={components:{WidgetLogoOrder:qt},props:["order"],data(){return{data:[]}},async mounted(){try{let t=await this.$refs.orderREF.lunch(this.order.uuid);this.data=t}catch(t){}}},kt=Zt,Pt=(0,l.Z)(kt,ht,ft,!1,null,"680498ab",null),$t=Pt.exports,Bt=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"fx-s pro-ine qiong-txt-td"},[s("div",{staticClass:"qiong-wide-6 mobie-wide-15 pro-img-wrapper fx-c fix-img-XL"},[s("img",{staticClass:"img img-in-hui",attrs:{src:t.pro.product_image}})]),s("div",{staticClass:"qiong-wide-70 pl-5"},[s("qiong-space",{staticClass:"mobie-hide",attrs:{space:"0.2vw"}}),s("div",{staticClass:"qiong-txt-20 pro-named"},[t._v(" "+t._s(t.named(t.pro))+" ")]),s("div",{staticClass:"qiong-td pt-1 qiong-txt-12"},[s("div",{staticClass:"d-ib pr-4 txt-sub_x2"},[t._v(" 單價：HK$ "+t._s(t._product.unit_price)+"， ")]),s("div",{staticClass:"d-ib mini-wide-100 txt-sub_x2"},[t._v(" 數量："+t._s(t._product.quantity)+"， ")]),s("div",{staticClass:"d-ib mobie-wide-100 sus_ipt"},[t._v(" SKU："+t._s(t.pro.sku)+" ")]),s("div",{staticClass:"qiong-txt-16 mobie-wide-100 pt-2 mobie-show"},[s("div",{staticClass:"mobie-show txt-menu"},[t._v(" "+t._s(t._product.pv)+" PV")])])])],1),s("div",{staticClass:"extra qiong-wide-24 mobie-wide-20 t-r"},[s("qiong-space",{staticClass:"mobie-hide",attrs:{space:"0.5vw"}}),s("div",{staticClass:"qiong-txt-20"},[t._v(" ")]),s("div",{staticClass:"qiong-txt-16 pt-1 fw-b mobie-hide"},[t._v(" "+t._s(t._product.pv)+" PV ")])],1)])])},St=[],Et={components:{QiongSpace:f.Z},name:"",props:["_product"],data(){return{}},computed:{pro(){const t=this.$store.state.products;let s=this._product.product_uuid;return t?(t.map((t=>{t.sku==s.sku&&(s=t)})),s):s}},methods:{named(t,s="hk"){let e="";return t=t.translation?t.translation:[],t.map((t=>{s==t.language_key&&(e=t.product_name)})),e}}},Lt=Et,Rt=(0,l.Z)(Lt,Bt,St,!1,null,"297f3401",null),Tt=Rt.exports,Ft=e(3715),Ht=e(5831),Ot=e(5759),Qt={components:{ProductInline:Tt,BuysRecordsLogo:$t,QiongSubResult:ct.Z,QsrWrapper:lt.Z,IconWithText:gt,BuyWayViewing:Ft.Z,BuyWayLpViewing:Ht.Z,BuyWayEwalletViewing:Ot.Z},props:["item"],data(){return{}},computed:{nums(){let t=0;const s=this.item.ordered_product;return s&&s.map((s=>{t+=s.quantity})),t},result(){let t=!0;this.item.is_ewallet&&(t=!1),this.item.is_LP&&(t=!1);let s=this.item.is_ewallet?[{txt:"eWallet 賬戶扣款",hkd:!0,content:this.item.ewallet_detail.ewallet_used}]:[];return this.item.is_LP&&s.push({txt:"LP 賬戶扣除",hkd:!1,content:this.item.lp_detail.lp_used}),s.push({txt:t?"銀行卡/現金":"結算",hkd:!0,content:this.item.payed_total?this.item.payed_total:0}),s.push({txt:"PV",content:this.item.total_pv}),s}},mounted(){}},Wt=Qt,At=(0,l.Z)(Wt,ot,dt,!1,null,"be886246",null),Dt=At.exports,Kt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"lh-def_x2"},[s("div",{staticClass:"qiong-td fx-l"},[s("div",{staticClass:"qiong-wide-8 tb-first"},[t._v(" "+t._s(t.item.uuid)+" ")]),s("div",{staticClass:"qiong-wide-9"},[t._v(" "+t._s(t.item.customer_uuid.member_code)+" ")]),s("div",{staticClass:"qiong-wide-24"},[t._v(" "+t._s(t.item.customer_uuid.display_name)+" ")]),s("div",{staticClass:"qiong-wide-14"},[t._v(" "+t._s(t.view.ser_timed(t.item.ordered_date,!1,!1))+" ")]),s("div",{staticClass:"qiong-wide-6 pl-1"},[t._v(" "+t._s(t.item.total_pv)+" ")]),s("div",{staticClass:"qiong-wide-10 pr-0"},[t._v(" "+t._s(t.item.product_total)+" ")]),s("div",{staticClass:"qiong-wide-8"},[t.item.is_ewallet?s("span",[t._v(t._s(t.item.ewallet_detail.ewallet_used))]):t._e()]),s("div",{staticClass:"qiong-wide-5"},[t.item.is_LP?s("span",[t._v(t._s(t.item.lp_detail.lp_used))]):t._e()]),s("div",{staticClass:"qiong-wide-9",class:t.status_class(t.item.status)},[t._v(" "+t._s(t.item.status)+" ")]),s("div",{staticClass:"qiong-wide-7"},[t.item.is_new?s("span",{staticClass:"first-buy"},[t._v(" 首購 ")]):t._e()])])])},Nt=[],Vt={props:["item"],mounted(){},methods:{status_class(t){if("processing"==t)return"txt-sus"}}},It=Vt,Mt=(0,l.Z)(It,Kt,Nt,!1,null,"dd8d48ba",null),jt=Mt.exports,Xt=function(){var t=this,s=t._self._c;return t.items&&t.items.length>0?s("div",t._l(t.items,(function(t,e){return s("v-expansion-panels",{key:e,staticClass:"qiong-td",class:{"buy-ex-panel":!0},attrs:{accordion:"",flat:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"qiong-txt-td px-7",class:{"qiong-td-hui":e%2!=0}},[s("br-td",{attrs:{item:t}})],1),s("v-expansion-panel-content",[s("br-body",{attrs:{item:t}})],1)],1)],1)})),1):s("qiong-empty")},zt=[],Ut=e(3233),Gt={components:{QiongEmpty:Ut.Z,BrTd:jt,BrBody:Dt,QiongSpace:f.Z},props:["items"],mounted(){this.items.map((t=>{t.is_ewallet&&console.log("E =",t)}))}},Jt=Gt,Yt=(0,l.Z)(Jt,Xt,zt,!1,null,"2c52444f",null),ts=Yt.exports,ss=function(){var t=this;t._self._c;return t._m(0)},es=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"px-7 extra-tr"},[s("div",{staticClass:"qiong-tr qiong-txt-tr"},[s("div",{staticClass:"qiong-wide-8"},[t._v(" 訂單編號 ")]),s("div",{staticClass:"qiong-wide-9"},[t._v(" 會員編號 ")]),s("div",{staticClass:"qiong-wide-24"},[t._v(" 會員名稱 ")]),s("div",{staticClass:"qiong-wide-14"},[t._v(" 付款日期 ")]),s("div",{staticClass:"qiong-wide-6 pl-1"},[t._v(" Pv ")]),s("div",{staticClass:"qiong-wide-10"},[t._v(" 結算 (HK$) ")]),s("div",{staticClass:"qiong-wide-8"},[t._v(" eWallet ")]),s("div",{staticClass:"qiong-wide-5"},[t._v(" LP ")]),s("div",{staticClass:"qiong-wide-9"},[t._v(" 訂單狀態 ")]),s("div",{staticClass:"qiong-wide-7"})])])}],is={name:"",data(){return{}}},as=is,ns=(0,l.Z)(as,ss,es,!1,null,"606932f8",null),rs=ns.exports,os={components:{QiongHeaderFilter:g.Z,BuyRecordsInner:ts,QiongPanelElement:m.Z,BrTr:rs,BrBody:Dt,QiongSpace:f.Z,WidgetBuys:_,QiongLoading:h.Z,BrTd:jt,PdfBuy:rt,TablePagerFooter:v.Z,NetBuyOrder:q,CollectionReady:u.Z,ToolReady:p.Z},data(){return{buys_origin:[],loading:!0}},computed:{user_back(){return this.$store.state.user_backend},coii(){return this.$store.state.user_collection},allow(){return this.coii&&this.coii.length>0},buys(){return this.buys_origin?this.meBuying(this.buys_origin):[]}},methods:{async init(){this.loading=!0,this.buys_origin=await this.$refs.buysREF.swicthing(),setTimeout((t=>this.loading=!1),200)},meBuying(t){let s=[];if(t){let e=this.coii;e=e||[],e.length>0?t.map((t=>{if(t.customer_uuid)for(let i=0;i<e.length;i++){const a=e[i](a.member_code==t.customer_uuid.member_code)?s.push(t):void 0}})):t.map((t=>{const e=t.customer_uuid;e&&e.member_code==this.user_back.member_code&&s.push(t)}))}return s}}},ds=os,ls=(0,l.Z)(ds,i,a,!1,null,null,null),cs=ls.exports},6283:function(t,s,e){e.d(s,{Z:function(){return l}});var i=function(){var t=this,s=t._self._c;return s("div",{staticStyle:{"text-align":"center","font-size":"1.12em","line-height":"3em"}},[t._v(" Sales report for "),s("span",[t._v(t._s(t.view.ser_timed_en(this.$store.state.chronus.start,!0)))]),t._v("-"),s("span",[t._v(t._s(t.view.ser_timed_en(this.$store.state.chronus.end,!0)))])])},a=[],n={name:"",props:{start:String,end:String},data(){return{}}},r=n,o=e(1001),d=(0,o.Z)(r,i,a,!1,null,"89bd1d38",null),l=d.exports},7442:function(t,s,e){e.d(s,{Z:function(){return l}});var i=function(){var t=this,s=t._self._c;return s("div")},a=[],n={name:"",data(){return{}},methods:{add_style(t){let s="\n                <style>\n                    table { width: 100%; border-width: 1px !important; border-collapse: collapse !important; border-color: #f9f9f9 !important; }\n                    .fl { float: left }\n                    .fs-c { text-align: center }\n\n            .root { width: 100%; background: rgb(255, 255, 255); color: #000000; }\n.td-buy td { padding: 4px 6px }\n\n.thead-buy {\n    color: #FFF;\n    background: #404040;\n    border: none !important; }\n\n.thead-buy td { \n    padding: 4px  6px;\n    line-height: 1.7em;\n    border: none !important; }\n                </style>\n                "+t;return s},async printed(){this.$emit("start");let t=document.getElementById("pdf_buy"),s=t.outerHTML;s=this.add_style(s),s=this.view.pdf.serial_Html(s),s=await this.view.pdf.html_content(s),s&&(console.log("PDF RES =",s),this.download(s))},download(t){let s=document.createElement("a");s.download="sandyy_tree_digram.pdf",s.href=t,s.target="_blank",s.click()}}},r=n,o=e(1001),d=(0,o.Z)(r,i,a,!1,null,"a256ac96",null),l=d.exports}}]);
//# sourceMappingURL=7223.ec80983b.js.map