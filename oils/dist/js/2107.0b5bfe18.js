"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[2107],{8497:function(e,t,i){i.r(t),i.d(t,{default:function(){return z}});var s=function(){var e=this,t=e._self._c;return t("bonus-layout",{attrs:{_root:e.root,_need_top:!e.root}},[e.init?e._e():t("member-msg-widget",{attrs:{_code:e.member_code}}),t("qiong-space",{attrs:{space:"24px"}}),t("qiong-header-filter",[t("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("BONUS.NORMAL.usd_active_house")))])]),t("qiong-panel-element",{staticClass:"mobie-table",attrs:{need_space:!1}},[t("bonus-active-house-table-header",{ref:"tbHeader",on:{sort_Father:e.sort}}),e.loading?t("qiong-loading"):t("bonus-active-house-table",{attrs:{childs:e.childrens}})],1),t("qiong-sub-result",{staticClass:"mt-3 px-7",attrs:{res:e.footer,need_line:!1}},[t("div",{staticClass:"next-header"},[e._v("Total")])]),t("location-me",{ref:"locaMe"}),e.init?t("collection-ready",{on:{sign_Father:e.initMe}}):e._e()],1)},o=[],n=(i(7658),i(7931)),r=i(1648),a=i(8667),d=function(){var e=this,t=e._self._c;return e.childs.length>0?t("div",{},e._l(e.childs,(function(i,s){return t("div",{key:s,staticClass:"qiong-td qiong-line-hight-20",class:{"qiong-td-zebra":i.index%2==0}},[t("div",{staticClass:"qiong-wide-14 pl-7 pr-0"},[e._v(e._s(i.member_code))]),t("div",{staticClass:"qiong-wide-40"},[e._v(e._s(i.display_name))]),t("div",{staticClass:"qiong-wide-10"},[t("level-viewing",{attrs:{item:i.vip.name+"_"+i.vip.star}})],1),t("div",{staticClass:"qiong-wide-10"},[e._v(" "+e._s(i.sponsor_id)+" ")]),t("div",{staticClass:"qiong-wide-10 text-center pr-0"},[e._v(e._s(e.house_level(i)))]),t("div",{staticClass:"qiong-wide-8"},[e._v(" "+e._s(e.order_pv(i))+" ")]),t("div",{staticClass:"qiong-wide-6"},[t("qiong-icon-inset",{attrs:{arg:i},on:{done_Father:e.openCenter}})],1)])})),0):t("qiong-empty")},l=[],c=i(7656),_=i(2073),u=i(3233),h=function(){var e=this,t=e._self._c;return t("span",[e._v(" "+e._s(e.result)+" ")])},m=[],b={name:"",props:{branch_bonus:{type:Array}},data(){return{}},computed:{result(){let e=0;return this.branch_bonus.length,e}}},v=b,p=i(1001),g=(0,p.Z)(v,h,m,!1,null,"46e3f574",null),f=g.exports,C=i(7081),w={components:{LevelViewing:C.Z,QiongIconFlat:c.Z,QiongIconInset:_.Z,ActiveHouseViewing:f,QiongEmpty:u.Z},props:{childs:{type:Array}},name:"",data(){return{}},methods:{order_pv(e){let t=0;return e.bonu_period.active_contribution.map((e=>{t=this.view.floatAdd(e.order_pv,t)})),t=t>0?t:"",t},house_level(e){return e.bonu_period.active_contribution[0].level},usd(e){let t=0;return e.bonu_period.active_contribution.map((e=>{t=this.view.floatAdd(e.order_pv,t)})),t},openCenter(e){this.$router.push({path:"/home/bonus/active_house/",query:{member_code:e.member_code}})}}},q=w,y=(0,p.Z)(q,d,l,!1,null,"3df22608",null),Z=y.exports,$=function(){var e=this,t=e._self._c;return t("div",{staticClass:"qiong-tr qiong-pb-7 qiong-txt-tr"},[t("div",{staticClass:"qiong-wide-14 pl-7 pr-0"},[e._v(e._s(e.$t("USER.member_code"))+" "),t("sort-filter-trangle",{ref:"sortMemberCode",on:{sort_Father:e.member_code_sort}})],1),t("div",{staticClass:"qiong-wide-40"},[e._v(e._s(e.$t("USER.member_display_name")))]),t("div",{staticClass:"qiong-wide-10"},[e._v(e._s(e.$t("USER.member_level")))]),t("div",{staticClass:"qiong-wide-10"},[e._v(" "+e._s(e.$t("USER.sponsor_id"))+" ")]),t("div",{staticClass:"qiong-wide-10 text-center"},[e._v(e._s(e.$t("BONUS.PUBLIC.house"))+e._s(e.$t("BONUS.PUBLIC.layer")))]),t("div",{staticClass:"qiong-wide-14"},[e._v(" "+e._s(e.$t("BONUS.PUBLIC.active"))+e._s(e.$t("BONUS.PUBLIC.house"))+" "+e._s(e.$t("USER.member_pv"))+" ")])])},S=[],x=i(2017),U={components:{SortFilterTrangle:x.Z},name:"",data(){return{}},methods:{resetSort(e){12!=e&&this.$refs.sortMemberCode.rest()},member_code_sort(e){this.$emit("sort_Father",e,12)}}},B=U,A=(0,p.Z)(B,$,S,!1,null,"a191ebba",null),N=A.exports,I=i(1304),M=i(6481),H=i(3860),Q=i(2347),F=i(1204),L=i(3655),R=i(6225),T=i(934),O=i(3434),P=i(9357),E=i(4359),k=i(7681),D={components:{QiongHeader:r.Z,QiongPagePanel:a.Z,BonusActiveHouseTableHeader:N,BonusActiveHouseTable:Z,QiongPanelElement:I.Z,QiongLoading:M.Z,LocationMe:H.Z,QiongIconFixed:Q.Z,QiongSubResult:F.Z,MemberMsgWidget:L.Z,CollectionReady:R.Z,QiongSpace:T.Z,BonusLayout:O.Z,QiongHeaderFilter:E.Z,BonuDownTrigger:P.Z,GoDownTrigger:k.Z},name:"",inject:["reload"],watch:{$route(e,t){t.query&&(this.init=!1,this.reload(),this.init=!0)}},data(){return{root:!1,init:!0,loading:!0,member_code:null,mine:null,child_num:0,childrens:null}},async mounted(){},computed:{footer(){if(this.mine)return[{txt:this.$t("BONUS.NORMAL.usd_active_house"),content:"$"+this.mine.bonu_period.active_branch_payout.toFixed(2)}]}},methods:{async initMe(){this.valuation(),this.mine=await this.$refs.locaMe.locationMe_Async(this.member_code,"SPONSER"),this.init=!1,this.switchChidren(),await this.numActiveHouse()},valuation(){this.root=!1,this.loading=!0,this.mine=null,this.child_num=0,this.childrens=[];const e=this.$route.query.member_code;e?(this.member_code=e,setTimeout((e=>{this.root=!0}),300)):this.member_code=this.$store.state.user_backend.member_code},switchChidren(){let e=this.$store.state.user_sponsor;e&&n.Z._build([this.mine],(e=>{this.childrens.push(e)})),e&&(e=this.childrens.sort(((e,t)=>e.index-t.index)),this.childrens=e.map((e=>e)),setTimeout((()=>{this.loading=!1}),400),this.childrens=this.childrens.filter((e=>e.member_code!=this.mine.member_code)))},numActiveHouse(){let e=this;return new Promise(((t,i)=>{for(let s of e.childrens){this.child_num+=1;let t=!1,i=[];for(let o of e.mine.bonu_period.active_branch_bonus)o.member_code==s.member_code&&(i.push(o),t=!0);t?s.bonu_period.active_order_num=i.length:(i.push({level:"",order_pv:"",order_uuid:""}),s.bonu_period.active_order_num=0),s.bonu_period.active_contribution=i}setTimeout((()=>{e.loading=!1}),200),t(!0)}))},async sort_by_member_code(e){e>0?this.childrens.sort(((e,t)=>{const i=Number.parseInt(e.member_code),s=Number.parseInt(t.member_code);return i-s})):e<0?this.childrens.sort(((e,t)=>{const i=Number.parseInt(e.member_code),s=Number.parseInt(t.member_code);return s-i})):(this.switchChidren(),await this.numActiveHouse())},sort(e,t){0==this.loading&&(this.loading=!0,this.$refs.tbHeader.resetSort(t),12==t&&this.sort_by_member_code(e),setTimeout((e=>{this.loading=!1}),300))}}},V=D,j=(0,p.Z)(V,s,o,!1,null,"3ed41ca4",null),z=j.exports}}]);
//# sourceMappingURL=2107.0b5bfe18.js.map