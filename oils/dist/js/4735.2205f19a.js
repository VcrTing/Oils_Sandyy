"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[4735],{2672:function(t,e,n){n.d(e,{Z:function(){return v}});var s=function(){var t=this,e=t._self._c;return t.$store.state.user_backend?e("collection-ready-inner",{on:{sign_Father:function(e){return t.$emit("sign_Father")}}}):t._e()},i=[],r=function(){var t=this,e=t._self._c;return e("div")},a=[],o={mounted(){this.$emit("sign_Father",!0)}},l=o,d=n(1001),c=(0,d.Z)(l,r,a,!1,null,null,null),p=c.exports,u={components:{CollectionReadyInner:p},mounted(){console.log("Ready =",this.$store.state.user_backend)}},_=u,m=(0,d.Z)(_,s,i,!1,null,null,null),v=m.exports},8282:function(t,e,n){n.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pti-go-top hand",on:{click:t.done}},[e("v-icon",[t._v(" "+t._s(t.icon)+" ")])],1)},i=[],r={props:{icon:{type:String,default:"mdi-chevron-left"},extra_calss:{type:String,default:""}},name:"",data(){return{}},mounted(){},methods:{done(t){this.$emit("done_Father",t)}}},a=r,o=n(1001),l=(0,o.Z)(a,s,i,!1,null,"74a6e627",null),d=l.exports},833:function(t,e,n){n.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",[e("v-btn",{staticClass:"mx-2",class:t.space,attrs:{fab:"",icon:"","x-small":"",color:t.color},on:{click:t.done}},[e("v-icon",{class:t.size},[t._v(" "+t._s(t.icon)+" ")])],1)],1)},i=[],r={props:{icon:{type:String,default:"mdi-chevron-double-right"},color:{type:String,default:""},size:{type:String,default:""},space:{type:String,default:"qiong-icon-td"},arg:{type:Object}},name:"",data(){return{}},methods:{done(){this.$emit("done_Father",this.arg)}}},a=r,o=n(1001),l=(0,o.Z)(a,s,i,!1,null,"3547cd82",null),d=l.exports},3944:function(t,e,n){n.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",[t.need_top?e("pti-go-top"):t._e(),e("qiong-space",{attrs:{space:t.height}})],1)},i=[],r=n(3480),a=n(6306),o={components:{QiongSpace:a.Z,PtiGoTop:r.Z},name:"",props:{need_top:{type:Boolean,default:!0},height:{type:String,default:"210px"}},data(){return{}}},l=o,d=n(1001),c=(0,d.Z)(l,s,i,!1,null,"02d07b41",null),p=c.exports},2404:function(t,e,n){n.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"txt-res pt-1"},[1==t._bigger?e("div",{staticClass:"qiong-td fw-b qiong-txt-16 fx-r"},[e("div",{staticClass:"qiong-wide-18 mobie-wide-28 pr-0"},[t._t("content")],2),e("div",{staticClass:"qiong-wide-32 mobie-wide-72 pr-0"},[t._t("txt"),e("span",{staticClass:""},[t._v(" ")])],2),e("div",{staticClass:"qiong-wide-50 mobie-hide"},[t._v(" ")])]):e("div",{staticClass:"qiong-td fw-b qiong-txt-16 my-0 py-0"},[e("div",{staticClass:"qiong-wide-60 mobie-hide"},[t._v(" ")]),e("div",{staticClass:"qiong-wide-30 mobie-wide-80 pr-0"},[t._t("txt"),e("span",{staticClass:""},[t._v(" ")])],2),e("div",{staticClass:"qiong-wide-10 mobie-wide-20 pr-0"},[t._t("content")],2)])])},i=[],r={name:"",props:{_bigger:{type:Number,default:1}}},a=r,o=n(1001),l=(0,o.Z)(a,s,i,!1,null,null,null),d=l.exports},7504:function(t,e,n){n.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return 1==t.bigger?e("v-row",{staticClass:"pager-header"},[e("v-col",{staticClass:"pl-7",class:t.extra_calss,attrs:{cols:12,sm:4}},[t._t("header")],2),e("v-col",{staticClass:"px-7 fx-r0",class:t.extra_calss,attrs:{cols:12,sm:8}},[t._t("filter")],2)],1):e("v-row",{staticClass:"pager-header"},[e("v-col",{staticClass:"pl-7",class:t.extra_calss,attrs:{cols:12,sm:6}},[t._t("header")],2),e("v-col",{staticClass:"px-7 fx-r0",class:t.extra_calss,attrs:{cols:12,sm:6}},[t._t("filter")],2)],1)},i=[],r={components:{},name:"",props:{bigger:{type:Number,default:1},extra_calss:{type:String}},data(){return{}}},a=r,o=n(1001),l=(0,o.Z)(a,s,i,!1,null,"34ab2fbb",null),d=l.exports},8948:function(t,e,n){n.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pb-3 fs-r"},[t.need_line?e("div",[1==t.bigger?e("qiong-page-ling"):e("qiong-page-ling",{attrs:{ex_class:"qiong-lineXL"}})],1):t._e(),e("qiong-space",{attrs:{space:"0.2vw"}}),e("qiong-space",{attrs:{space:"0.5vh"}}),e("div",{},[t._t("default")],2),1==t.bigger?e("div",t._l(t.res,(function(n,s){return e("qsr-wrapper",{key:s,attrs:{_bigger:t.bigger}},[e("span",{attrs:{slot:"txt"},slot:"txt"},[t._v(t._s(n.txt)+" ")]),e("span",{attrs:{slot:"content"},domProps:{innerHTML:t._s(n.content)},slot:"content"})])})),1):e("div",{},t._l(t.res,(function(n,s){return e("qsr-wrapper",{key:s,attrs:{_bigger:t.bigger}},[e("span",{attrs:{slot:"txt"},slot:"txt"},[t._v(t._s(n.txt))]),e("span",{attrs:{slot:"content"},domProps:{innerHTML:t._s(n.content)},slot:"content"})])})),1),e("qiong-space",{attrs:{space:"0.2vw"}}),e("qiong-space",{attrs:{space:"0.7vh"}})],1)},i=[],r=n(6648),a=n(6306),o=n(2404),l={props:{res:{type:Array},bigger:{type:Number,default:1},need_line:{type:Boolean,default:!0}},name:"",components:{QiongPageLing:r.Z,QiongSpace:a.Z,QsrWrapper:o.Z},data(){return{test:[{txt:"獎金",content:"HK&nbsp;135.0"},{txt:"獎金",content:"HK&nbsp;135.0"}]}},mounted(){}},d=l,c=n(1001),p=(0,c.Z)(d,s,i,!1,null,"353118a5",null),u=p.exports},3480:function(t,e,n){n.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pti-go-top hand",class:{"turn-bown":t.is_down,"turn-up":!t.is_down},on:{click:t.toDis}},[e("v-icon",[t._v(" mdi-arrow-up ")])],1)},i=[],r={name:"",data(){return{is_down:!0,screenH:0,show:!1}},mounted(){this.screenH=window.screen.height,window.addEventListener("scroll",this.handleScroll,!0)},methods:{handleScroll(){let t=document.documentElement.scrollTop||document.body.scrollTop;t>this.screenH-300?this.is_down=!1:this.is_down=!0,this.show=document.body.offsetHeight>this.screenH},toDis(){this.is_down?this.toDown():this.toTop(),this.is_down=!this.is_down},toTop(){let t=document.documentElement.scrollTop||document.body.scrollTop;const e=setInterval((()=>{document.body.scrollTop=document.documentElement.scrollTop=t-=50,t<=0&&(clearInterval(e),this.$emit("finish_Father"))}),10)},toDown(){window.scrollTo(0,document.body.scrollHeight)}}},a=r,o=n(1001),l=(0,o.Z)(a,s,i,!1,null,"0ad07901",null),d=l.exports},2002:function(t,e,n){n.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("span",[t._v("0")])},i=[],r={name:"",props:{organisation_bonus:{type:Array}},data(){return{}},mounted(){}},a=r,o=n(1001),l=(0,o.Z)(a,s,i,!1,null,"1805a639",null),d=l.exports},2023:function(t,e,n){n.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"named-viewing",class:"named_space_"+t.index},[e("div",{staticClass:"nv_name"},[0!=t.index?e("div",{staticClass:"nv_num"},[e("span",[t._v(t._s(t.index))])]):t._e(),t._v(" "+t._s(t.named)+" ")])])},i=[],r={props:{named:{type:String},index:{type:Number},need_icon:{type:Boolean,default:!0}},name:"",data(){return{}}},a=r,o=n(1001),l=(0,o.Z)(a,s,i,!1,null,"1a4483ae",null),d=l.exports},6833:function(t,e,n){n.d(e,{Z:function(){return L}});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"pti-go-pdf hand",on:{click:t.lockPrint}},[t.printing?e("v-icon",{staticClass:"circle-around"},[t._v("mdi-loading")]):e("v-icon",[t._v("mdi-file-outline")])],1),"ENROLLER"==t.mode?e("div",{staticClass:"pdf_modal"},[t.loading?t._e():e("enroller-pdf-inner",{attrs:{datas:t.items}})],1):t._e(),"SPONSER"==t.mode?e("div",{staticClass:"pdf_modal"},[t.loading?t._e():e("sponser-pdf-inner",{attrs:{datas:t.items}})],1):t._e(),e("pur-print",{ref:"printDom"})],1)},i=[],r=n(2954),a=function(){var t=this,e=t._self._c;return e("div")},o=[],l={name:"",data(){return{}},methods:{add_style(t){let e="\n                <style>\n                    table { width: 100%; }\n\n                    .root { width: 100%; background: rgb(255, 255, 255); padding: 20px; line-height: 1.7; font-size: 16px; }\n                    \n                    .head { font-size: 1em; line-height: 1.4; }\n                    .head td { padding: 0px 0px 0.5rem 0px; }\n                    .content td { padding: 0.14rem 0px; }\n\n                    .pet-footer { font-size: 1.12rem; padding-top: 0rem; line-height: 2.1; }\n                    .pet-footer { display: block; width: 100%; text-align: right; }\n\n                    .pti-index,.pti-index-zero { \n                        display: inline;\n                        padding: 0 0.4rem;\n                        margin-right: 3px;\n                        border-radius: 100%;\n                        border: 1px solid #989898;\n                    }\n                    .pti-index-zero { visibility: hidden !important; }\n                </style>\n                "+t;return e},async printed(){try{let t=document.getElementById("pdf_pur"),e=t.outerHTML;e=this.add_style(e),e=this.view.pdf.serial_Html(e),e=await this.view.pdf.html_content(e),e&&this.download(e)}catch(t){this.$store.commit("saveDialog",700),setTimeout((()=>{this.$store.commit("saveDialog",0)}),4e3)}},download(t){try{let e=document.createElement("a");e.download="sandyy_tree_digram.pdf",e.href=t,e.target="_blank",e.click()}catch(e){}}}},d=l,c=n(1001),p=(0,c.Z)(d,a,o,!1,null,"6c6a9676",null),u=p.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"root",attrs:{id:"pdf_pur"}},[e("pdf-simple-header",{attrs:{title:"Enroller Statement"}}),t.me?e("pdf-simlpe-member-msg",{attrs:{mine:t.me}}):t._e(),t.me?e("pdf-simple-bonus-eligibility",{attrs:{mine:t.me}}):t._e(),t.me?e("pdf-simple-payment-order",{attrs:{mine:t.me}}):t._e(),e("pdf-content-layout",[e("span",{attrs:{slot:"header"},slot:"header"},[t._v("Enroller Tree Digram")]),e("div",{attrs:{slot:"body"},slot:"body"},[e("table",{staticClass:"w-full",staticStyle:{"margin-top":"2px"}},[e("tr",{staticClass:"head"},[e("td",{attrs:{width:"12%"}},[t._v(" Member Number")]),e("td",{attrs:{width:"37%"}},[e("div",{staticClass:"pti-index-zero"},[t._v("0")]),t._v(" Member Name")]),e("td",{attrs:{width:"12%"}},[t._v(" Enroller ID")]),e("td",{attrs:{width:"10%"}},[t._v(" Phone")]),e("td",{staticStyle:{"text-align":"center"},attrs:{width:"9%"}},[t._v(" Layer")]),e("td",{staticStyle:{"padding-left":"8px"},attrs:{width:"9%"}},[t._v(" PV")]),e("td",[t._v(" Payment Level")])]),t._l(t.datas,(function(n,s){return e("tr",{key:s,staticClass:"content"},[e("td",[t._v(" "+t._s(n.member_code)+" ")]),e("td",[0!=n.index?e("div",{staticClass:"pti-index"},[t._v(t._s(n.index))]):e("div",{staticClass:"pti-index-zero"},[t._v("0")]),t._v(" "+t._s(n.display_name)+" ")]),e("td",[t._v(" "+t._s(n.enroller_id)+" ")]),e("td",[t._v(" "+t._s(n.phone)+" ")]),e("td",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(n.index)+" ")]),e("td",{staticStyle:{"padding-left":"8px"}},[t._v(" "+t._s(n.bonu_period.individual_pv)+" ")]),e("td",[t._v(" "+t._s(t.txt(n.vip))+" ")])])}))],2),e("div",{staticClass:"pet-footer",attrs:{colspan:"9"}},[t._v("   "),e("div",{staticStyle:{"font-size":"14px"}},[t._v("Total")]),e("div",[t._v(" Number of Child Member:    "+t._s(t.nocm())+" ")])])])])],1)},m=[],v=n(9202),h=n(6321),g=n(7387),f=n(2660),x=n(8129),y={components:{PdfSimpleHeader:v.Z,PdfSimplePaymentOrder:g.Z,PdfSimlpeMemberMsg:h.Z,PdfContentLayout:f.Z,PdfSimpleBonusEligibility:x.Z},name:"",props:{datas:{type:Array}},data(){return{me:null}},mounted(){this.me=this.datas[0]},methods:{txt(t){let e=this.$t("USER.level_null");return 0!=t.star&&(e=r.Z.vip_view.vip_now(t.code),e=e?e.nick:""),e},order_num(t){return t?t.length:""},nocm(){let t=0;return this.datas&&this.datas.length>1&&(t=this.datas.length-1),t}}},b=y,w=(0,c.Z)(b,_,m,!1,null,"265781cc",null),C=w.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"root",attrs:{id:"pdf_pur"}},[e("pdf-simple-header",{attrs:{title:"Sponsor Statement"}}),t.me?e("pdf-simlpe-member-msg",{attrs:{mine:t.me}}):t._e(),t.me?e("pdf-simple-bonus-eligibility",{attrs:{mine:t.me}}):t._e(),t.me?e("pdf-simple-payment-order",{attrs:{mine:t.me}}):t._e(),e("pdf-content-layout",[e("span",{attrs:{slot:"header"},slot:"header"},[t._v("Sponsor Tree Digram")]),e("div",{attrs:{slot:"body"},slot:"body"},[e("table",{staticClass:"w-full",staticStyle:{"margin-top":"2px"}},[e("tr",{staticClass:"head"},[e("td",{attrs:{width:"12%"}},[t._v(" Member Number")]),e("td",{attrs:{width:"37%"}},[e("div",{staticClass:"pti-index-zero"},[t._v("0")]),t._v(" Member Name")]),e("td",{attrs:{width:"12%"}},[t._v(" Sponsor ID")]),e("td",{attrs:{width:"10%"}},[t._v(" Phone")]),e("td",{staticStyle:{"text-align":"center"},attrs:{width:"9%"}},[t._v(" Layer")]),e("td",{staticStyle:{"padding-left":"8px"},attrs:{width:"9%"}},[t._v(" PV")]),e("td",[t._v(" Payment Level")])]),t._l(t.datas,(function(n,s){return e("tr",{key:s,staticClass:"content"},[e("td",[t._v(" "+t._s(n.member_code)+" ")]),e("td",[0!=n.index?e("div",{staticClass:"pti-index"},[t._v(t._s(n.index))]):e("div",{staticClass:"pti-index-zero"},[t._v("0")]),t._v(" "+t._s(n.display_name)+" ")]),e("td",[t._v(" "+t._s(n.sponsor_id)+" ")]),e("td",[t._v(" "+t._s(n.phone)+" ")]),e("td",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(n.index)+" ")]),e("td",{staticStyle:{"padding-left":"8px"}},[t._v(" "+t._s(n.bonu_period.individual_pv)+" ")]),e("td",[t._v(" "+t._s(t.txt(n.vip))+" ")])])}))],2),e("div",{staticClass:"pet-footer",attrs:{colspan:"9"}},[t._v("   "),e("div",{staticStyle:{"font-size":"14px"}},[t._v("Total")]),e("div",[t._v(" Number of Child Member:    "+t._s(t.nocm())+" ")])])])])],1)},S=[],P={components:{PdfSimpleHeader:v.Z,PdfSimplePaymentOrder:g.Z,PdfSimlpeMemberMsg:h.Z,PdfContentLayout:f.Z,PdfSimpleBonusEligibility:x.Z},name:"",props:{datas:{type:Array}},data(){return{me:null}},mounted(){this.me=this.datas[0]},methods:{txt(t){let e=this.$t("USER.level_null");return 0!=t.star&&(e=r.Z.vip_view.vip_now(t.code),e=e?e.nick:""),e},order_num(t){return t?t.length:""},nocm(){let t=0;return this.datas&&this.datas.length>1&&(t=this.datas.length-1),t}}},q=P,k=(0,c.Z)(q,Z,S,!1,null,"67df2a50",null),E=k.exports,T={components:{PurPrint:u,EnrollerPdfInner:C,PdfSimpleHeader:v.Z,SponserPdfInner:E},name:"",props:{mode:{type:String},users:{type:Array}},mounted(){this.lunchingItems()},data(){return{useless:!0,loading:!0,items:[],printing:!1}},methods:{_items(t){this.items.push(t)},lunchingItems(){this.loading=!0,this.items=[],r.Z._build(this.users,this._items),this.loading=!1},async lockPrint(){this.printing||(this.printing=!0,this.$refs.printDom.printed(),setTimeout((()=>{this.printing=!1}),2400))}}},H=T,M=(0,c.Z)(H,s,i,!1,null,"24347774",null),L=M.exports},4686:function(t,e,n){n.d(e,{Z:function(){return v}});var s=function(){var t=this,e=t._self._c;return e("div",{},[e("qiong-header",{attrs:{extra_calss:"pl-7"}},[t._v(" "+t._s(t.$t("HEADER.user_msg"))+" ")]),e("qiong-panel-element",{attrs:{need_space:!1,extra_class:"mh-0"}},[e("div",{staticClass:"text-right px-7 qiong-pt-10"},[e("time-msg-viewing")],1),t.has?e("member-msg-header-widget",{staticClass:"px-7",attrs:{_chronu_id:t._chronu,_member_code:t._code}}):e("qiong-loading"),e("qiong-space",{attrs:{space:"1.2vh"}}),e("qiong-space",{attrs:{space:"0.8vw"}})],1)],1)},i=[],r=n(9374),a=n(8884),o=n(7116),l=n(6306),d=n(234),c=n(3137),p={components:{QiongHeader:a.Z,QiongPanelElement:r.Z,MemberMsgHeaderWidget:c.Z,QiongSpace:l.Z,QiongLoading:o.Z,TimeMsgViewing:d.Z},props:["_code","_chronu"],computed:{cotion(){return this.$store.state.user_collection},has(){if(this.cotion&&this.cotion.length>0)return!0}}},u=p,_=n(1001),m=(0,_.Z)(u,s,i,!1,null,null,null),v=m.exports}}]);
//# sourceMappingURL=4735.2205f19a.js.map