"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[6335],{1179:function(e,t,i){i.d(t,{Z:function(){return d}});var n=function(){var e=this,t=e._self._c;return e.rank>e.leader?t("div",{staticClass:"btn-leader-tag"},[e._v(" "+e._s(e.$t("STATUS.leader"))+" ")]):t("span")},s=[],r={name:"",props:{rank:{type:Number}},data(){return{leader:5}},mounted(){this.leader=this.conf.RANK_LEAD,console.log(this.rank)}},o=r,a=i(1001),l=(0,a.Z)(o,n,s,!1,null,"426c8794",null),d=l.exports},4361:function(e,t,i){i.r(t),i.d(t,{default:function(){return X}});var n=function(){var e=this,t=e._self._c;return t("v-container",{staticClass:"qiong-txt-td",attrs:{fluid:""}},[e.init?e._e():t("member-msg-widget",{attrs:{_code:e.member_code}}),t("qiong-space",{attrs:{space:"24px"}}),t("qiong-header-filter",[t("div",{attrs:{slot:"header"},slot:"header"},[e._v("Enroller 用戶結構")])]),t("qiong-panel-element",{staticClass:"mobie-table",attrs:{id:"pdf_content"}},[t("user-enroller-tr"),e.loading?e._e():t("user-enroller-td",{attrs:{_me:e.mine,users:e.main_tree}})],1),t("location-me",{ref:"locaMe"}),e.init?t("collection-ready",{on:{sign_Father:e.initMe}}):e._e(),e.root?t("div",{staticClass:"pti-go-top hand",on:{click:function(t){return e.$router.go(-1)}}},[t("v-icon",[e._v("mdi-chevron-left")])],1):e._e(),t("table-pager-footer",{attrs:{need_top:!e.root}}),e.loading?e._e():t("pdf-user-roller",{attrs:{mode:"ENROLLER",users:e.main_tree}})],1)},s=[],r=i(9374),o=i(8884),a=i(7504),l=i(6306),d=function(){var e=this,t=e._self._c;return t("div",{},[e.loading?t("qiong-loading"):t("v-treeview",{staticClass:"mt-0 qiong-the-tree w-full",attrs:{slot:"tree","multiple-active":"",transition:"",dense:"","off-icon":"",items:e.users,"open-all":""},slot:"tree",scopedSlots:e._u([{key:"label",fn:function({item:i,open:n}){return[t("div",{staticClass:"pl-7",on:{click:function(t){return e.done(n)}}},[t("named-viewing",{attrs:{named:i.display_name,index:i.index,need_icon:i.has_child}})],1)]}},{key:"append",fn:function({item:i,open:n}){return[t("uet-tree-item",{attrs:{_item:i,o:n,me:e.mine}})]}}],null,!1,1918778203)}),t("uet-footer",{attrs:{result:e.build_res}})],1)},c=[],_=i(2023),m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"px-7"},[t("qiong-sub-result",{attrs:{res:e.result,bigger:0}},[t("div",{staticClass:"next-header qiong-txt-14 mb-1"},[e._v("Total")])])],1)},u=[],h=i(8948),p=i(6648),v={components:{QiongPageLing:p.Z,QiongSubResult:h.Z},name:"",props:{result:{type:Array,default(){return[]}}},data(){return{}}},g=v,f=i(1001),b=(0,f.Z)(g,m,u,!1,null,"fd094574",null),C=b.exports,q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"qiong-td qiong-td-h-full qiong-line-hight-15"},[t("div",{staticClass:"qiong-wide-11"},[e._v(e._s(e._item.member_code))]),t("div",{staticClass:"qiong-wide-14"},[e._v(e._s(e.view.if_def(e._item.enroller_id)))]),t("div",{staticClass:"qiong-wide-11 text-center pr-0"},[e._v(e._s(e._item.phone))]),t("div",{staticClass:"qiong-wide-11 text-center pr-0"},[e._v(" "+e._s(e._item.index)+" ")]),t("div",{staticClass:"qiong-wide-10"},[e._v(e._s(e._item.bonu_period.individual_pv))]),t("div",{staticClass:"qiong-wide-12 pr-0 flex-middle"},[t("level-viewing",{staticClass:"d-inline",attrs:{item:e._item.vip.code}})],1),t("div",{staticClass:"qiong-wide-13 text-center pr-0"},[e._v(e._s(e.order_num(e._item.orders_period)))]),t("div",{staticClass:"qiong-wide-10"},[e._v(e._s(e.view.if_def(e._item.bonu_period.pv_recommend)))]),t("div",{staticClass:"qiong-wide-8 pr-0"},[0!=e._item.index&&e._item.children.length>0?t("qiong-icon-inset",{attrs:{color:"",arg:e._item},on:{done_Father:e.openCenter}}):e._e()],1)])},w=[],x=i(833),Z=i(2002),y=i(6312),R=i(1179),$={components:{QiongIconInset:x.Z,LevelViewing:y.Z,PayIndexViewing:Z.Z,LeaderTagViewing:R.Z},inject:["reload"],props:{_item:{type:Object},me:{type:Object}},name:"",data(){return{ratios:[],index:0}},created(){},mounted(){},methods:{order_num(e){let t=0;return e&&(t=e.length),t},openCenter(e){this.$router.push({path:"/home/user/enroller",query:{member_code:e.member_code}}),this.reload()}}},E=$,U=(0,f.Z)(E,q,w,!1,null,"cb5ab97e",null),S=U.exports,k=i(2954),L=i(7116),O={components:{NamedViewing:_.Z,UetFooter:C,UetTreeItem:S,QiongLoading:L.Z},name:"",props:{_me:{type:Object},users:{type:Array}},data(){return{mine:null,loading:!0,childs_num:0,usd_recommend:0}},async mounted(){this.mine=this._me,await this.insertReferral(),this.computRecommend()},computed:{build_res(){if(this.mine)return[{txt:this.$t("USER.childs_num"),content:this.childs_num}]}},methods:{computRecommend(){let e=0;this.mine.bonu_period.referral_bonus.map((t=>{e=this.view.floatAdd(e,t.bonus_pv)})),this.usd_recommend=e},insertReferral(){const e=this;return new Promise(((t,i)=>{let n=0;k.Z._build(this.users,(function(t){n+=1;for(let i of e.mine.bonu_period.referral_bonus)i.member_code==t.member_code&&(t.bonu_period.pv_recommend=i.order_pv)})),e.childs_num=n-1,setTimeout((e=>{this.loading=!1}),200),t(!0)}))},done(){}}},N=O,Q=(0,f.Z)(N,d,c,!1,null,"460864aa",null),T=Q.exports,M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"qiong-tr qiong-txt-tr"},[t("div",{staticClass:"qiong-wide-35"},[t("div",{staticClass:"pl-7 d-inline-block qiong-td"},[e._v(" "+e._s(e.$t("USER.member_display_name"))+" ")])]),t("div",{staticClass:"qiong-wide-65"},[t("div",{staticClass:"qiong-td td-no-pr"},[t("div",{staticClass:"qiong-wide-11"},[e._v(e._s(e.$t("USER.member_code")))]),t("div",{staticClass:"qiong-wide-14"},[e._v(e._s(e.$t("USER.enroller_id")))]),t("div",{staticClass:"qiong-wide-11 text-center"},[e._v(e._s(e.$t("USER.phone")))]),t("div",{staticClass:"qiong-wide-11 text-center"},[e._v(e._s(e.$t("BONUS.PUBLIC.layer")))]),t("div",{staticClass:"qiong-wide-10"},[e._v(e._s(e.$t("USER.member_pv")))]),t("div",{staticClass:"qiong-wide-12 pr-0"},[e._v(e._s(e.$t("USER.member_level")))]),t("div",{staticClass:"qiong-wide-13 text-center"},[e._v(e._s(e.$t("ORDER.num")))]),t("div",{staticClass:"qiong-wide-18"},[e._v(e._s(e.$t("BONUS.PUBLIC.pv_recommend")))])])])])},P=[],I={name:"",data(){return{}}},A=I,F=(0,f.Z)(A,M,P,!1,null,"db09521e",null),j=F.exports,B=i(547),V=i(8282),D=i(4686),H=i(2672),J=i(6833),K=i(3944),W={components:{QiongHeader:o.Z,QiongPanelElement:r.Z,UserEnrollerTr:j,UserEnrollerTd:T,QiongSpace:l.Z,QiongIconFixed:V.Z,LocationMe:B.Z,MemberMsgWidget:D.Z,CollectionReady:H.Z,PdfUserRoller:J.Z,TablePagerFooter:K.Z,QiongHeaderFilter:a.Z},inject:["reload"],watch:{$route(e,t){t.query&&(this.init=!1,this.reload(),this.init=!0)}},data(){return{member_code:null,mine:null,main_tree:null,root:!1,end_date:[],init:!0,loading:!0}},methods:{async initMe(){this.valuation(),this.mine=await this.$refs.locaMe.locationMe(this.member_code,"ENROLLER"),this.init=!1,this.dealing()},valuation(){this.root=!1,this.loading=!0,this.mine=null,this.main_tree=null,this.end_date=this.view.ser_timed_list(this.$store.state.chronus.end);const e=this.$route.query.member_code;e?(this.member_code=e,this.root=!0):this.member_code=this.$store.state.user_backend.member_code},_build(e){let t=[];return e.map((e=>{let i=[];"children"in e&&(i=this._build(e.children)),e.children=i,e.index=e.index-this.main_tree.index,t.push(e)})),t},dealing(){let e=[];this.main_tree=JSON.parse(JSON.stringify(this.mine)),this.main_tree&&(e=this._build([this.main_tree])),this.main_tree=e,this.loading=!1}}},z=W,G=(0,f.Z)(z,n,s,!1,null,"3ce2096e",null),X=G.exports}}]);
//# sourceMappingURL=6335.6a337f09.js.map