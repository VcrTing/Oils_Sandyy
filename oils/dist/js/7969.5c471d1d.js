"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[7969],{3860:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div")},n=[],o={name:"",data(){return{}},methods:{locationMe(t,e="SPONSER"){let s=[];s="SPONSER"==e?this.$store.state.user_sponsor:"ENROLLER"==e?this.$store.state.user_enroller:this.$store.state.user_collection;for(let i of s)if(i.member_code==t)return i;return this.$store.state.user_backend},locationMe_Async(t,e="SPONSER"){return new Promise(((s,i)=>{let n,o=[];o="SPONSER"==e?this.$store.state.user_sponsor:"ENROLLER"==e?this.$store.state.user_enroller:this.$store.state.user_collection;for(let e of o)if(e.member_code==t){n=e;break}s(n)}))}}},r=o,a=s(1001),c=(0,a.Z)(r,i,n,!1,null,"0d3ded4e",null),l=c.exports},607:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div")},n=[],o={mounted(){this.$emit("sign")}},r=o,a=s(1001),c=(0,a.Z)(r,i,n,!1,null,"6fb58a9e",null),l=c.exports},1304:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",[e("v-row",{staticClass:"qiong-panel_element qpe-mh mobie-panel",class:t.extra_class},[e("v-col",{staticClass:"px-0 qpe_inner py-0",attrs:{cols:t.cols}},[t._t("default")],2),t.need_space?e("v-col",{staticClass:"inner-empty"},[e("qiong-space",{attrs:{space:"7vh"}},[t._v(" ")])],1):t._e()],1)],1)},n=[],o=s(934),r=s(7667),a={name:"",props:{need_space:{type:Boolean,default:!0},cols:{type:Number,default:12},extra_class:{type:String}},components:{QiongSpace:o.Z,QiongPageLing:r.Z},data(){return{}}},c=a,l=s(1001),u=(0,l.Z)(c,i,n,!1,null,"94a8aac0",null),d=u.exports},7667:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("v-col",{staticClass:"py-0 ma-0 pa-0",attrs:{cols:"12"}},[e("div",{staticClass:"qiong-line",class:t.ex_class})])},n=[],o={name:"",props:{ex_class:{type:String}},data(){return{}}},r=o,a=s(1001),c=(0,a.Z)(r,i,n,!1,null,"8711cf2c",null),l=c.exports},1650:function(t,e,s){s.d(e,{Z:function(){return l}});s(7658);var i=function(){var t=this,e=t._self._c;return e("div",{},[e("v-icon",{staticClass:"qiong-txt-14 i-chronu-edit an_lefter_s",on:{click:function(e){return t.$router.push("/home/chronus")}}},[t._v("mdi-pencil")]),t._v(" "+t._s(t.$t("CONTENT.bonus_period"))+" :  "+t._s(t.$t("CONTENT.from"))+" "+t._s(t.view.ser_timed(t.$store.state.chronus.start,!0))+" "+t._s(t.$t("CONTENT.to"))+"  "+t._s(t.view.ser_timed(t.$store.state.chronus.end,!0))+" ")],1)},n=[],o={name:"",data(){return{}}},r=o,a=s(1001),c=(0,a.Z)(r,i,n,!1,null,"e85d45b6",null),l=c.exports},6507:function(t,e,s){s.d(e,{Z:function(){return g}});var i=function(){var t=this,e=t._self._c;return t.$store.state.chronus?e("div",[e("qiong-space",{staticClass:"mobie-view",attrs:{space:"8px"}}),e("time-now",{staticClass:"mb-1 txt-sus"}),e("time-chronu",{staticClass:"op-90"})],1):e("qiong-loading",{staticClass:"mt-1 mb-1",attrs:{bigger:-1}})},n=[],o=s(6481),r=s(934),a=s(1650),c=function(){var t=this,e=t._self._c;return e("div",[t._v(" "+t._s(t.view.getTodayEn())+" ")])},l=[],u={name:"",data(){return{}}},d=u,_=s(1001),m=(0,_.Z)(d,c,l,!1,null,"070de471",null),h=m.exports,p={name:"",components:{QiongLoading:o.Z,TimeNow:h,TimeChronu:a.Z,QiongSpace:r.Z},props:{mode:{type:Number,default:3}},data(){return{}}},v=p,f=(0,_.Z)(v,i,n,!1,null,"5f976daa",null),g=f.exports},7081:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return null!=t.result?e("div",{staticClass:"level-viewing"},[t._v(t._s(t.result))]):e("div",{staticClass:"level-viewing"},[t._v(t._s(t.def))])},n=[],o=s(7931),r={props:{item:{type:String},def:{type:String,default:"普通成員"}},name:"",data(){return{}},mounted(){},computed:{result(){if(void 0!=this.item&&"undefined_0"!=this.item){let t=o.Z.vip_view.split_code(this.item);return t=o.Z.vip_view.code_to_content(t),t?t.nick:this.def}return null}}},a=r,c=s(1001),l=(0,c.Z)(a,i,n,!1,null,"25a59860",null),u=l.exports},2565:function(t,e,s){s.d(e,{Z:function(){return Q}});var i=function(){var t=this,e=t._self._c;return e("div",[e("qiong-space",{staticClass:"mobie-show",attrs:{space:"18px"}}),e("div",{staticClass:"qiong-txt-22 py-2 pb-3 txt-pri"},[t.mine?e("span",[t._v(" "+t._s(this.mine.display_name)+" ")]):t._e()]),t.mine?e("div",{staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-26 mobie-wide-45"},[e("mmhw-account-msg",{attrs:{me:t.mine}})],1),e("div",{staticClass:"qiong-wide-24 mobie-wide-55"},[e("mmhw-bonus-msg",{attrs:{me:t.mine}})],1),e("div",{staticClass:"qiong-wide-50 pr-0 mobie-wide-100 mobie-my"},[e("mmhw-order-msg",{attrs:{me:t.mine,chronu:t.chronu_id}})],1)]):t._e(),e("location-me",{ref:"locaMe"}),t.$store.state.user_backend?e("tool-ready",{on:{sign:t.initMe}}):t._e()],1)},n=[],o=s(3860),r=s(607),a=s(6481),c=s(934),l=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"qiong-td fw-b pt-0 qiong-line-hight-15 mb-1"},[e("div",{staticClass:"qiong-wide-42"},[t._v(" "+t._s(t.$t("USER.member_code"))+" ")]),e("div",{staticClass:"qiong-wide-58"},[t._v(" "+t._s(this.me.member_code)+" ")])]),e("mmhw-msg-func",{staticClass:"mmhw-money",attrs:{body:t.content}})],1)},u=[],d=function(){var t=this,e=t._self._c;return 4==t.chars?e("div",t._l(t.body,(function(s,i){return e("div",{key:i,staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-42 pr-0",class:s.class_v,domProps:{innerHTML:t._s(s.txt)}}),e("div",{staticClass:"qiong-wide-58 pr-0",class:s.class_v,domProps:{innerHTML:t._s(s.content)}})])})),0):e("div",t._l(t.body,(function(s,i){return e("div",{key:i,staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-60 pr-0",class:s.class_v,domProps:{innerHTML:t._s(s.txt)}}),e("div",{staticClass:"qiong-wide-40 pr-0",class:s.class_v,domProps:{innerHTML:t._s(s.content)}})])})),0)},_=[],m={props:{header:{type:Object},body:{type:Array},chars:{type:Number,default:4}},name:"",data(){return{}}},h=m,p=s(1001),v=(0,p.Z)(h,d,_,!1,null,"7aa457f4",null),f=v.exports,g={components:{MmhwMsgFunc:f},props:{me:{type:Object}},name:"",data(){return{res:0,content:[],s_can_num:0}},mounted(){this.content=[{txt:this.$t("USER.member_username"),content:this.me.username,class_v:"txt-txt_x2"},{txt:this.$t("CONTENT.now_time_period")+this.$t("CONTENT.bonus"),content:"$ "+this.usd,class_v:"txt-sec"},{txt:this.$t("USER.enroller_id"),content:this.me.enroller_id},{txt:this.$t("USER.sponsor_id"),content:this.me.sponsor_id}]},methods:{},computed:{usd(){let t=this.me.bonu_period?this.me.bonu_period.usd_result:"0";return t=isNaN(t)?"0":t,t}}},b=g,w=(0,p.Z)(b,l,u,!1,null,"0b929c2e",null),C=w.exports,x=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"qiong-td fw-b pt-0 qiong-line-hight-15 mb-1"},[e("div",{staticClass:"qiong-wide-60"},[t._v(" "+t._s(t.$t("CONTENT.now_time_period"))+t._s(t.$t("USER.member_level"))+" ")]),e("div",{staticClass:"qiong-wide-40"},[t.me.vip?e("level-viewing",{attrs:{item:t.me.vip.code}}):t._e()],1)]),e("mmhw-msg-func",{attrs:{body:t.content,chars:6}})],1)},y=[],q=s(7081),N={components:{MmhwMsgFunc:f,LevelViewing:q.Z},props:{me:{type:Object}},data(){return{pv_limit:0,s_can_num:0}},mounted(){this.s_can_num=this.$store.state.user_backend.son_can_num},computed:{content(){if(this.me.bonu_period){const t=this.me.bonu_period.individual_pv>this.pv_limit;return[{txt:this.$t("BONUS.SHORT.member_sell_pv"),content:this.me.bonu_period.individual_pv},{txt:this.$t("BONUS.SHORT.team_sell_pv"),content:this.me.bonu_period.organization_pv},{txt:this.$t("BONUS.SHORT.active_qualified"),content:this.s_can_num,class_v:"txt-txt_x2"},{txt:this.$t("BONUS.PUBLIC.get_usd")+this.$t("CONTENT.qualify"),content:t?this.$t("CONTENT.have"):this.$t("CONTENT.havent"),class_v:t?"txt- sus":"txt-sus"}]}}}},$=N,Z=(0,p.Z)($,x,y,!1,null,"3f402eb7",null),S=Z.exports,E=(s(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-0"},[e("qiong-space",{staticClass:"mobie-show",attrs:{space:"8px"}}),t._m(0),t.buys?e("div",t._l(t.buys,(function(s,i){return e("div",{key:i,staticClass:"qiong-td"},[e("div",{staticClass:"qiong-wide-28"},[t._v(t._s(t.view.ser_timed(s.ordered_date,!0)))]),e("div",{staticClass:"qiong-wide-17"},[t._v(t._s(s.customer_uuid.member_code))]),e("div",{staticClass:"qiong-wide-24"},[t._v(t._s(t.view.backend.view_role(s.role)))]),e("div",{staticClass:"qiong-wide-16"},[e("a",{staticClass:"txt-acc",on:{click:function(e){return t.$router.push(`/home/buys/records#pro_${s.uuid}`)}}},[t._v(" "+t._s(s.uuid)+" ")])]),e("div",{staticClass:"qiong-wide-15 text-right pr-0"},[t._v(t._s(s.total_pv)+" PV")])])})),0):e("div",[e("qiong-loading")],1)],1)}),T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"qiong-td fw-b ec-mb-2 pa-0 mb-1"},[e("div",{staticClass:"qiong-wide-28"},[t._v("訂單日期")]),e("div",{staticClass:"qiong-wide-17"},[t._v("會員編號")]),e("div",{staticClass:"qiong-wide-24"},[t._v("Role")]),e("div",{staticClass:"qiong-wide-16 pr-0"},[t._v("訂單編號")]),e("div",{staticClass:"qiong-wide-15 text-right pr-0 fx-r"},[e("span",{staticClass:"d-ib"},[t._v("訂單點數")])])])}],O=s(7931),R={components:{QiongLoading:a.Z,QiongSpace:c.Z},props:{me:{type:Object},chronu:{type:Number}},name:"",data(){return{pv_limit:0,buys:[]}},async mounted(){this.pv_limit=O.Z.conf.USER_PV_LIMIT,await this.buysLoading()},methods:{filterRES(t){return t=t.filter((t=>t.total_pv>=this.pv_limit&&"completed"==t.status)),t},async buysLoading(){const t=await this.conn.get(this.api.orders,this.$store.state.token,{time_period:this.chronu,customer_uuid:this.me.id});t&&(this.buys=t.length>0?this.filterRES(t):[])}}},L=R,M=(0,p.Z)(L,E,T,!1,null,"6ad1a0b2",null),k=M.exports,P={components:{LocationMe:o.Z,QiongLoading:a.Z,MmhwAccountMsg:C,MmhwBonusMsg:S,MmhwOrderMsg:k,QiongSpace:c.Z,ToolReady:r.Z},props:{_member_code:{type:String,default:null},_chronu_id:{type:Number,default:null}},computed:{rank_status(){if(this.mine){let t=this.mine.bonu_period.Rank;return t<1?t=-1:t<this.conf.RANK_LEAD&&t>0?t=0:t>=this.conf.RANK_LEAD&&(t=1),t}},rank_txt(){if(this.mine){let t=this.mine.bonu_period.Rank;return t<1?t="普通":t<this.conf.RANK_LEAD&&t>0?t="會員":t>=this.conf.RANK_LEAD&&(t="領袖"),t}}},data(){return{member_code:null,mine:null,chronu_id:null}},methods:{async initMe(){this.valuation(),this.mine=await this.$refs.locaMe.locationMe_Async(this.member_code,"COLLECTION")},valuation(){if(this.chronu_id=this._chronu_id,this.member_code=this._member_code,!this.member_code){const t=this.$route.query.member_code;this.member_code=t||this.$store.state.user_backend.member_code,this.root=!!t}this.chronu_id=this.chronu_id?this.chronu_id:this.$store.state.chronus.id}}},A=P,U=(0,p.Z)(A,i,n,!1,null,"af05c278",null),Q=U.exports}}]);
//# sourceMappingURL=7969.5c471d1d.js.map