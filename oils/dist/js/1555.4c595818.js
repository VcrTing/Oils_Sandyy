"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[1555,7269],{2111:function(t,e,i){i.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div")},n=[],r=(i(7658),i(6797)),o=i.n(r),a={computed:{chronu(){return this.$store.state.chronus}},methods:{loadStore(t){let e=sessionStorage.getItem("oils_loyalty_wallet");return e?(e=JSON.parse(e),e=e.member_code==t?e:null,e):null},async _lunching(t,e){return console.log("LP 积分账户 获取的 Condition =",e),await this.conn.get(this.api.build(this.conf.ENDPOINT.loyalty_wallet,t),this.$store.state.token,e)},_condition(t){return t=t||o()(this.chronu.end).format("yyyy-MM"),{time_period:t,_limit:999,is_issued:!0,_sort:"published_at:asc"}},async lunching(t,e){const i=this;let s=null;return s||(s=await this._lunching(t,this._condition(e)),s&&s.message&&(s=s.message,s.monthlys=s.LP_by_month?i.serial_Monthly(s.LP_by_month):[],s.member_code=t)),s},serial_Monthly(t){let e=[];for(let i in t)t[i].period=i,e.push(t[i]);return e}}},l=a,c=i(1001),u=(0,c.Z)(l,s,n,!1,null,"2775763c",null),d=u.exports},3860:function(t,e,i){i.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div")},n=[],r={name:"",data(){return{}},methods:{locationMe(t,e="SPONSER"){let i=[];i="SPONSER"==e?this.$store.state.user_sponsor:"ENROLLER"==e?this.$store.state.user_enroller:this.$store.state.user_collection;for(let s of i)if(s.member_code==t)return s;return this.$store.state.user_backend},locationMe_Async(t,e="SPONSER"){return new Promise(((i,s)=>{let n,r=[];r="SPONSER"==e?this.$store.state.user_sponsor:"ENROLLER"==e?this.$store.state.user_enroller:this.$store.state.user_collection;for(let e of r)if(e.member_code==t){n=e;break}i(n)}))}}},o=r,a=i(1001),l=(0,a.Z)(o,s,n,!1,null,"0d3ded4e",null),c=l.exports},607:function(t,e,i){i.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div")},n=[],r={mounted(){this.$emit("sign")}},o=r,a=i(1001),l=(0,a.Z)(o,s,n,!1,null,"6fb58a9e",null),c=l.exports},6589:function(t,e,i){i.r(e),i.d(e,{default:function(){return R}});var s=function(){var t=this,e=t._self._c;return e("v-container",{staticClass:"h-100 chronu-panel qiong-txt-14",attrs:{fluid:""}},[e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"1"}}),e("v-col",{attrs:{cols:"12",sm:10}},[e("div",{staticClass:"qiong-txt-24 qiong-txt-primary-dark pb-3"},[t._v(" 結算月份 ")]),t.loading?t._e():e("chronu-title-part",{attrs:{months:t.ct},on:{nowmonth_Father:t.nowChronu,chronu_Father:t.changeSuccess}})],1),e("v-col",{attrs:{cols:"1"}})],1),t.loading?e("v-row",[e("v-col",{attrs:{col:"12"}},[e("br"),e("br"),e("br"),e("br"),e("qiong-loading",{attrs:{bigger:1}})],1)],1):e("v-row",[e("v-col",{attrs:{cols:"2"}}),e("v-col",{attrs:{cols:"12",sm:8}},[e("qiong-space",{staticClass:"qiong-pt-5 mobie-hide"}),e("div",{staticClass:"pb-2"},t._l(t.now_chronu,(function(i,s){return e("div",{key:s,staticClass:"my-5 chronu-item"},[e("chronu-item-part",{attrs:{c_item:i},on:{sign_Father:t.changeSuccess}}),s==i.length-1?e("v-divider"):t._e()],1)})),0)],1),e("v-col",{attrs:{col:"2"}})],1)],1)},n=[],r=(i(7658),i(6481)),o=i(934),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full chronu def-shadow pa-3"},[e("div",{staticClass:"chronu_name"},[e("v-icon",{attrs:{size:"14"}},[t._v("mdi-calendar-multiple")]),t._v(" "+t._s(t.chronu.display_name)+" "),e("button",{staticClass:"btn-sec float-right",on:{click:t.choiseIt}},[t._v("確認選擇")])],1),e("div",{staticClass:"chronu_start sub-header pl-4"},[t._v(" 開始："+t._s(t.view.ser_timed(t.chronu.start,!0))+" ")]),e("div",{staticClass:"chronu_end sub-header pl-4"},[t._v(" 結束："+t._s(t.view.ser_timed(t.chronu.end,!0))+" ")])])},l=[],c={props:{chronu:{type:Object}},name:"",data(){return{}},methods:{choiseIt(){this.$emit("sign_Father",this.chronu)}}},u=c,d=i(1001),h=(0,d.Z)(u,a,l,!1,null,"4a407b5c",null),m=h.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"chronu py-3 pl-7 pr-3"},[e("div",{staticClass:"pb"},[e("span",{staticClass:"qiong-txt-16 txt-txt_x3 fw-b",class:{"txt-sec_son":t.now.id==t.c_item.chronu.id}},[e("v-icon",{attrs:{size:"14",color:"op-60"}},[t._v("mdi-calendar-multiple")]),t._v("  "+t._s(t.c_item.chronu.display_name)+" ")],1),t.now.id!=t.c_item.chronu.id?e("button",{staticClass:"fw-b py-2 px-5 float-right btn-sec-hov",on:{click:t.choiseIt}},[t._v("確認選擇")]):t._e()]),e("nav",{staticClass:"pl-6 pt-3 txt-sus"},[e("div",{staticClass:"chronu_start"},[t._v(" 開始： "+t._s(t.view.ser_timed(t.c_item.chronu.start,!0))+" ")]),e("div",{staticClass:"chronu_end pt-1"},[t._v(" 結束： "+t._s(t.view.ser_timed(t.c_item.chronu.end,!0))+" ")])])])},p=[],v={props:{c_item:{type:Object}},computed:{now(){return this.$store.state.chronus}},methods:{choiseIt(){this.$emit("sign_Father",this.c_item.chronu)}}},g=v,f=(0,d.Z)(g,_,p,!1,null,"28f3d5e6",null),b=f.exports,w=function(){var t=this,e=t._self._c;return e("div",[t._l(t.months,(function(i,s){return e("div",{key:s,staticClass:"qiong-pt-10 d-inline"},[e("button",{staticClass:"btn-chronu btn-chronu-year",class:{"btn-chronu-year_active":i.year==t.active_year},on:{click:function(e){return t.tapYear(i.year)}}},[t._v(" "+t._s(i.year)+" ")])])})),e("qiong-gradient-line",{staticClass:"qiong-pt-10"}),t.now_month.length>0?e("div",{staticClass:"qiong-pt-15"},t._l(t.now_month,(function(i,s){return e("button",{key:s,staticClass:"btn-chronu qiong-txt-12",class:{"btn-chronu-active":i.chronu_id==t.active_id},on:{click:function(e){return t.uploadChronu(i.chronu)}}},[t._v(" "+t._s(t.view.backend.view_month(i.month))+" ")])})),0):t._e()],2)},y=[],$=i(2541),k={components:{QiongGradientLine:$.Z},name:"",props:{months:{type:Array}},data(){return{year:"",now_month:[],def_m:[1,2,3,4,5,6,7,8,9,10,11,12],active_id:"",active_year:1998}},mounted(){new Date;this.active_id=this.$store.state.chronus.id,this.tapYear(this.$store.state.chronus.end.substring(0,4))},methods:{tapYear(t){this.months.map((e=>{const i=e.year;if(t==i){const t=e[i];this.now_month=t}})),this.active_year=t,this.uploadNowMonth()},uploadNowMonth(){this.$emit("nowmonth_Father",this.now_month)},uploadChronu(t){this.$emit("chronu_Father",t)}}},C=k,x=(0,d.Z)(C,w,y,!1,null,"f99d2a52",null),E=x.exports,N=i(6797),L=i.n(N),S={components:{ChronusItem:m,QiongLoading:r.Z,ChronuTitlePart:E,ChronuItemPart:b,QiongSpace:o.Z},name:"",data(){return{chronus:[],loading:!0,ct:[],now_chronu:[]}},async mounted(){await this.simpleInit()},methods:{async simpleInit(){let t=window.sessionStorage.getItem("sandyy_chronus");t?(t=JSON.parse(t),t=await this.trashNew(t),t=t.map((t=>this.ser_chornu(t,!1))),this.ser_title(t),this.loading=!1):await this.chronusLoading()},async trashNew(t){let e=[];const i=L()(new Date);return t.map((t=>{let s=L()(t.start);return s<i&&e.push(t),t})),e.map((t=>(t.end_origin=t.end,t.end=t.end_date,t.start_origin=t.start,t.start=t.start_date,t)))},async chronusLoading(){let t=await this.conn.get(this.api.chronus,this.$store.state.token,{_sort:"start:DESC",_limit:999});t&&(t=await this.trashNew(t),t=t.map((t=>this.ser_chornu(t,!0))),this.chronus=t.sort(((t,e)=>this.view.sort_time(t,e))),window.sessionStorage.setItem("sandyy_chronus",JSON.stringify(t)),this.ser_title(t),this.loading=!1)},ser_chornu(t,e){try{delete t.created_at,delete t.updated_at,delete t.published_at,delete t.orders,delete t.bonuses,delete t.commissions,delete t.bonus_calculations}catch(t){}return this.ct.push(Number.parseInt(t.end.substring(0,4))),t},ser_title(t){this.ct=this.ct.filter(((t,e)=>this.ct.indexOf(t,0)===e)),this.ct=this.ct.map((e=>{let i={year:e};return i[e+""]=[],t.map((t=>{let s=t.end.substring(0,4),n=t.end.substring(5,8);e==s&&i[s].push({month:Number.parseInt(n),chronu_id:t.id,chronu:t})})),i}))},changeSuccess(t){this.$store.commit("saveLoading",!0),setTimeout((e=>{this.$store.commit("saveChronus",[t,!0]),this.$store.commit("saveSponsor",null),this.$store.commit("saveEnroller",null),this.$store.commit("saveCollection",null),this.$store.commit("saveTreeSponsor",null),this.$store.commit("saveTreeEnroller",null),this.$store.commit("saveBonusQualifyLine",null),this.$router.push("/home/user/center"),this.$store.commit("saveLoading",!1)}),300)},nowChronu(t){this.now_chronu=t}}},Z=S,M=(0,d.Z)(Z,s,n,!1,null,"47421d50",null),R=M.exports},4560:function(t,e,i){i.r(e),i.d(e,{default:function(){return Ye}});var s=function(){var t=this,e=t._self._c;return e("home-layout",[t.menu?e("div",{staticClass:"z-max",attrs:{slot:"menu"},slot:"menu"},[e("qiong-app-bar-trigger",{on:{btn_Father:function(e){return t.$refs.menu.opened()}}}),e("left-app-drawers",{ref:"menu",staticClass:"menu"})],1):t._e(),t.$store.state.loading?e("home-loading",{attrs:{slot:"content"},slot:"content"}):e("div",{attrs:{slot:"content"},slot:"content"},[e("init-app",{ref:"initREF"}),e("transition",{attrs:{name:t.transitionName}},[t.alive?e("router-view"):e("home-loading")],1),e("products-loading",{ref:"productREF"}),e("loading-trigger",{on:{loading_Father:t.initData}}),e("home-modals"),e("home-refreshing"),t.$store.state.is_browser?t._e():e("active-shimmer",{attrs:{active:t.member_area}})],1)],1)},n=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-bg"},[t._t("menu"),e("v-main",{staticClass:"content mobie-main"},[t._t("content")],2)],2)},o=[],a={components:{},name:"",data(){return{}}},l=a,c=i(1001),u=(0,c.Z)(l,r,o,!1,null,"0b55b3cd",null),d=u.exports,h=i(6589),m=i(6481),_=function(){var t=this,e=t._self._c;return e("v-container",{staticClass:"qiong-txt-td"},[e("v-row",[e("v-col",{staticClass:"qiong-pl-20 qiong-pr-20 running-pt"},[e("qiong-loading",{attrs:{bigger:1}}),e("div",{staticClass:"text-center running-txt"},[t._v(" 加載中 ")])],1)],1)],1)},p=[],v={name:"",components:{QiongLoading:m.Z},data(){return{}}},g=v,f=(0,c.Z)(g,_,p,!1,null,"1a18304e",null),b=f.exports,w=function(){var t=this,e=t._self._c;return e("v-navigation-drawer",{staticClass:"right-shadow app-bar",attrs:{absolute:!1,temporary:!1,width:"290",app:"","mini-variant":t.mini,"mini-variant-width":"68",floating:!0,"hide-overlay":!t.mobie},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t.$store.state.loading?e("div",{staticClass:"menu-loading qiong-pt-10"},[e("qiong-loading")],1):e("div",{staticClass:"qiong-pt-10"},[this.$store.state.platform_data?e("menu-msg-widget",{attrs:{id:this.$store.state.platform_data.member_code,need_avatar:!0}}):t._e()],1),e("qiong-gradient-line",{staticClass:"pl-4 qiong-pt-10 qgl-fix"}),e("lad-lister",{staticClass:"qiong-pt-10"}),e("qiong-space",{attrs:{space:"4vh"}}),t.mobie?e("qiong-app-bar-closing",{on:{btn_Father:function(e){t.drawer=!1}}}):t._e(),e("loyalty-wallet-me",{ref:"walletREF"}),t.$store.state.user_backend&&!t.$store.state.loading?e("tool-ready",{on:{sign:t.initMe}}):t._e()],1)},y=[],$=function(){var t=this,e=t._self._c;return t.loading?e("div",[e("qiong-loading",{attrs:{bigger:0}})],1):e("v-list-item-group",{staticClass:"qiong-br-0 qiong-list-item",model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[t._l(t.tiles,(function(i,s){return e("v-list-item",{key:s,class:{"v-list-item--active":`/home/${i.link}`==t.$route.path},on:{click:function(e){return e.stopPropagation(),t.go(`/home/${i.link}`)}}},[e("v-list-item-avatar",{staticClass:"py-0 my-0"},[e("v-icon",{domProps:{innerHTML:t._s(i.icon)}})],1),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v(" "+t._s(i.title)+" ")])])],1)})),t._l(t.tiles_group,(function(i,s){return e("v-list-group",{key:s+100,staticClass:"lad_list_group",attrs:{"no-action":"","sub-group":"","prepend-icon":i.icon,color:"rgba(255, 255, 255, 0.6)",id:"lister_"+s},on:{click:function(e){return t.menuOpera(s)}},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-content",[e("v-list-item-title",{staticClass:"pl-2 fs-16"},[t._v(t._s(i.title))])],1)]},proxy:!0}],null,!0),model:{value:i.active,callback:function(e){t.$set(i,"active",e)},expression:"tile.active"}},[e("lister-children-items",{attrs:{items:i.children,link:i.link}})],1)})),e("menu-setting-simple"),t.$store.state.loading?t._e():e("arrange-lister",{ref:"arrangeREF",on:{menu_Father:t.init}})],2)},k=[],C=(i(7658),function(){var t=this,e=t._self._c;return e("div")}),x=[],E={name:"",data(){return{admin:!1,share:0,one:[],group:[]}},async mounted(){this.$emit("menu_Father")},methods:{_member_change(){return new Promise(((t,e)=>{let i={icon:"mdi-cog-outline",title:"Admin 功能列表",link:null,order:-1,active:!1,children:[{icon:"mdi-certificate",title:"獎金報表 (Admin 視角)",link:"account/statement"},{icon:"mdi-vector-square",title:"管理獎金 (Admin 視角)",link:"bonus/management_info_admin"},{icon:"mdi-chart-line",title:"發展獎金 (Admin 視角)",link:"bonus/development_info_admin"},{icon:"mdi-alarm-panel",title:"獎金月結單",link:"user/pma2"},{icon:"mdi-database-settings-outline",title:"產品庫存",link:"buys/inventory"},{icon:"mdi-database-cog-outline",title:"庫存操作記錄",link:"log/stocks"},{icon:"mdi-account-group-outline",title:"用戶列表",link:"pw_user/list_of_all"},{icon:"mdi-clipboard-account",title:"LP 資料變更記錄",link:"member_operate/lplevel_msg_change"},{icon:"mdi-clipboard-plus-outline",title:"增加 LP 積分",link:"member_operate/lp_plus"},{icon:"mdi-account-arrow-up-outline",title:"更改 LP 等級",link:"member_operate/level_change"},{icon:"mdi-account-sync-outline",title:"重啟 LP 資格",link:"member_operate/reload_qualify"},{icon:"mdi-cash-plus",title:"用戶資金操作",link:"wallet/by-admin"},{icon:"mdi-cash-multiple",title:"用戶資金操作記錄 ",link:"wallet/log-admin"}]};this.conf.TEST&&i.children.push({icon:"mdi-cube",title:"產品列表",link:"buys/products"},{icon:"mdi-cog-transfer-outline",title:"轉賬審核",link:"loyalty/transfer_audit"}),this.admin&&this.group.push(i),t(!0)}))},async _build(){await this._buy_record(),await this._bonu_statement(),await this._leader_share(),await this._point_wallet(),await this._member_change(),await this._user_detaii(),await this.$store.commit("saveShareType",this.share)},_point_wallet(){return new Promise(((t,e)=>{let i={icon:"mdi-account-cash-outline",title:"我的積分",link:null,order:6,active:!1,children:[{icon:"mdi-account-heart-outline",title:this.$t("MENU.loyalty_record"),link:"loyalty/loyalty"}]};i.children.push({icon:"mdi-wallet-outline",title:"電子錢包 (eWallet)",link:"wallet/me"},{icon:"mdi-cash-fast",title:"轉賬",link:"loyalty/transfer_money"}),this.group.push(i),t(!0)}))},_buy_record(){return new Promise(((t,e)=>{let i={icon:"mdi-clipboard-multiple-outline",title:this.$t("MENU.buy_record"),link:"buys/records"};this.one.push(i),t(!0)}))},_bonu_statement(){return new Promise(((t,e)=>{let i={icon:"mdi-certificate",title:this.$t("MENU.bonus_statement"),link:"account/statement_member",order:2,active:!1};this.one.push(i),t(!0)}))},_leader_share(){return new Promise(((t,e)=>{let i=this.share>=1?[{icon:"mdi-vector-square",title:this.$t("MENU.manage_share"),link:"bonus/management_info"}]:[];this.share>=2&&i.push({icon:"mdi-chart-line",title:this.$t("MENU.develop_share"),link:"bonus/development_info"});const s={icon:"mdi-account-star-outline",title:this.$t("BONUS.NORMAL.lead_share_out"),link:null,children:i,order:3,active:!1};i&&i.length>0&&this.group.push(s),t(!0)}))},_user_detaii(){this.one.push({icon:"mdi-card-account-details-outline",title:"個人資料",link:"pw_user/myself",order:99,active:!1})},async menuNow(){this.admin=this.$store.state.is_admin;const t=this.$store.state.platform_data.member_code;if(t){try{let e=await this.conn.get(this.api.bonus,this.$store.state.token,{"user.member_code":t,time_period:this.$store.state.chronus.id});this.share=this._num_share_type(e)}catch(e){this.share=0}return await this._build(),{one:this.one,group:this.group}}},_num_share_type(t){let e=0;if(t&&t.length>0){const i=t[0]?t[0].Rank:0;i>this.conf.RANK_LEAD&&(e=i<8?1:2)}return e=this.admin?2:e,e}}},N=E,L=(0,c.Z)(N,C,x,!1,null,"f4844178",null),S=L.exports,Z=function(){var t=this,e=t._self._c;return e("div",t._l(t.items,(function(i){return e("v-list-item",{key:i.title,staticClass:"pl-15",class:{"v-list-item--active-MANY":`/home/${t.link}`==t.$route.path},attrs:{color:"white"},on:{click:function(e){return e.stopPropagation(),t.$router.push({path:`/home/${i.link}`})}}},[e("v-list-item-avatar",{staticClass:"pr-0 mr-3"},[e("v-icon",{attrs:{size:22}},[t._v(t._s(i.icon))])],1),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v(" "+t._s(i.title)+" ")])])],1)})),1)},M=[],R={name:"",props:{link:String,items:Array},data(){return{}}},P=R,F=(0,c.Z)(P,Z,M,!1,null,"767f3f8c",null),q=F.exports,I=function(){var t=this,e=t._self._c;return e("div",[e("menu-item-chronu"),t.show?e("div",{staticClass:"menu-sub_title"},[t._v(" "+t._s(t.$t("MENU.member_changer"))+" ")]):t._e(),t.show?e("menu-item-id-input"):t._e()],1)},O=[],T=function(){var t=this,e=t._self._c;return e("v-list-item",{on:{click:t.editChronu}},[e("v-list-item-avatar",[e("v-icon",[t._v("mdi-calendar-edit")])],1),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[t._v(" "+t._s(this.$t("MENU.date_changer"))+" ")])])],1)},A=[],U={name:"",data(){return{}},methods:{editChronu(){this.$router.push("/home/chronus")}}},D=U,B=(0,c.Z)(D,T,A,!1,null,"f6d75aae",null),Q=B.exports,W=function(){var t=this,e=t._self._c;return e("v-list-item",{class:"menu-none-fx"},[e("v-list-item-avatar",[e("v-icon",[t._v("mdi-account-cog-outline")])],1),e("v-list-item-content",[e("div",{attrs:{tag:"div"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.member_code,expression:"member_code"}],staticClass:"input-sub_member_code",attrs:{type:"text",placeholder:"會員編號"},domProps:{value:t.member_code},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeMember.apply(null,arguments)},input:function(e){e.target.composing||(t.member_code=e.target.value)}}}),t.member_code?e("div",{staticClass:"btn-sub_submit_icon"},[t.vilida&&t.working?e("v-icon",{staticClass:"txt-success ani-rotate",on:{click:t.changeMember}},[t._v(" mdi-loading ")]):t.vilida&&!t.working?e("v-icon",{staticClass:"txt-success",on:{click:t.changeMember}},[t._v(" mdi-arrow-right ")]):e("v-icon",{staticClass:"txt-error",on:{click:t.clear}},[t._v(" mdi-close ")])],1):e("div",{staticClass:"btn-sub_submit_icon"},[e("v-icon",{on:{click:t.changeMember}},[t._v(" mdi-arrow-right ")])],1)])])],1)},j=[],G={name:"",data(){return{def_code:"",member_code:"",last_code:"",vilida:!0,working:!1}},mounted(){const t=this.$store.state.user_backend.member_code;this.def_code=t,this.last_code=t,this.member_code=t},methods:{editMember(){},_success(t,e){sessionStorage.setItem("sandyy_active_code",e),sessionStorage.setItem("sandyy_vx_tk",this.$store.state.token+"8"),this.$store.commit("saveBackendUser",t);let i=this.$store.state.platform_data;i.member_code=e,this.$store.commit("saveFromPlatform",i),this.$store.commit("saveSponsor",null),this.$store.commit("saveEnroller",null),this.$store.commit("saveCollection",null),this.$store.commit("saveTreeSponsor",null),this.$store.commit("saveTreeEnroller",null),setTimeout((t=>{this.$store.commit("saveLoading",!0),setTimeout((t=>{this.$store.commit("saveLoading",!1),this.working=!1}),1400)}),400)},async _submit(t){this.working=!0;let e=await this.conn.get(this.api.users,this.$store.state.token,{member_code:t});e&&e.length>0?(this.last_code=t,this._success(e[0],t)):(this.working=!1,this.vilida=!1)},_validate(t){return!isNaN(t)},changeMember(){let t=this.member_code.trim(),e=!!t&&this._validate(t);e&&t!=this.last_code&&this._submit(t),this.vilida=!!e},clear(){this.member_code="",this.vilida=!0}}},H=G,J=(0,c.Z)(H,W,j,!1,null,"7e7b377c",null),V=J.exports,z={components:{MenuItemChronu:Q,MenuItemIdInput:V},name:"",computed:{show(){return this.$store.state.is_admin}}},Y=z,K=(0,c.Z)(Y,I,O,!1,null,"70aa28c4",null),X=K.exports,tt={components:{ArrangeLister:S,MenuSettingSimple:X,ListerChildrenItems:q,QiongLoading:m.Z},data(){return{group:null,loading:!1,tiles:[],tiles_group:[]}},methods:{async serMenu(){const t=await this.$refs.arrangeREF.menuNow();t&&(t.one.map((t=>{this.tiles.splice(1,0,t)})),t.group=t.group.sort(((t,e)=>e.order-t.order)),t.group.map((t=>{this.tiles_group.splice(0,0,t)})))},init(){return new Promise(((t,e)=>{this.tiles=[{icon:"mdi-account-tie-outline",title:this.$t("MENU.user_center"),link:"user/center"}],this.tiles_group=[{icon:"mdi-trophy-variant-outline",title:this.$t("MENU.bonus_detail"),link:null,id:4,active:!1,children:[{icon:"mdi-basket-outline",title:this.$t("MENU.recommend"),link:"bonus/recommend"},{icon:"mdi-bell-ring-outline",title:this.$t("MENU.active_house"),link:"bonus/active_house"},{icon:"mdi-account-group-outline",title:this.$t("MENU.team_layer"),link:"bonus/active_layer"}]},{icon:"mdi-family-tree",title:this.$t("MENU.tree_structure"),link:null,active:!1,children:[{icon:"mdi-file-tree",title:this.$t("MENU.enroller_structure"),link:"user/enroller"},{icon:"mdi-file-tree-outline",title:this.$t("MENU.sponser_structure"),link:"user/sponser"}]}],this.serMenu(),t(!0)}))},go(t){this.$router.push({path:t})},menuOpera(t){}}},et=tt,it=(0,c.Z)(et,$,k,!1,null,"7e4487bb",null),st=it.exports,nt=i(3805),rt=i(8919),ot=i(5426),at=i(8947),lt=function(){var t=this,e=t._self._c;return e("div",[e("button",{staticClass:"btn app-bar-closing mobie-show",on:{click:t.closing}},[e("v-icon",[t._v(" mdi-chevron-left ")]),e("span",[t._v(" "+t._s(t.$t("CONTENT.close"))+t._s(t.$t("CONTENT.menu"))+" ")])],1),e("div",{staticClass:"txt-sus pl-5 txt-8 pb-3"},[e("p",[t._v("版本："+t._s(t.conf.VERSION))]),e("p",[t._v("日期："+t._s(t.conf.VERSION_TIME))])])])},ct=[],ut={name:"",data(){return{}},methods:{closing(){this.$emit("btn_Father")}}},dt=ut,ht=(0,c.Z)(dt,lt,ct,!1,null,"6d259799",null),mt=ht.exports,_t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pl-4 menu-split-line",on:{click:function(e){return t.$router.push("/home/loyalty/loyalty")}}},[t._wallet&&!t.$store.state.loading?e("div",{staticClass:"fx-s menu-split-line_inner"},[e("div",[t._v(" 忠誠度積分(LP)："),e("span",[t._v(t._s(t._wallet.LP_available))])]),e("v-icon",{staticClass:"mr-3"},[t._v(" mdi-chevron-right ")])],1):e("div",{staticClass:"menu-split-line_inner"},[e("qiong-loading",{attrs:{bigger:-1}})],1),e("qiong-gradient-line",{staticClass:"msl-qgl"})],1)},pt=[],vt=i(607),gt=i(2541),ft={components:{QiongGradientLine:gt.Z,ToolReady:vt.Z,QiongLoading:m.Z},props:["_wallet"],methods:{initMe(){}}},bt=ft,wt=(0,c.Z)(bt,_t,pt,!1,null,"799b1f42",null),yt=wt.exports,$t=i(934),kt=i(2111),Ct={name:"",inject:["reload"],components:{LadLister:st,LadMsg:nt.Z,LadBonus:rt.Z,LevelImageViewing:at.Z,MenuMsgWidget:ot.Z,QiongAppBarClosing:mt,QiongLoading:m.Z,MenuSplitLine:yt,QiongSpace:$t.Z,QiongGradientLine:gt.Z,ToolReady:vt.Z,LoyaltyWalletMe:kt.Z},data(){return{drawer:!0,mini:!1,mobie:!0,me:null,wallet:null}},mounted(){},methods:{async initMe(){this.wallet=null,this.me=this.$store.state.user_backend,this.wallet=await this.$refs.walletREF.lunching(this.me.member_code),console.log("当前用户 =",this.me.member_code,this.wallet)},changeF(){this.drawer=!this.drawer},opened(){this.drawer=!this.drawer}}},xt=Ct,Et=(0,c.Z)(xt,w,y,!1,null,"06dcb537",null),Nt=Et.exports,Lt=i(7820),St=function(){var t=this,e=t._self._c;return e("div")},Zt=[],Mt={name:"",props:{id:{type:String}},data(){return{}},methods:{async productLoading(){return await this.conn.get(this.api.products,this.$store.state.token,{_limit:999})}}},Rt=Mt,Pt=(0,c.Z)(Rt,St,Zt,!1,null,"31c1b788",null),Ft=Pt.exports,qt=function(){var t=this,e=t._self._c;return t.active?t._e():e("div",{staticClass:"active-shimmer as-pos-fix"},[e("div",{staticClass:"lock_panel t-c"},[e("div",{style:{"background-image":"url("+t.lock_pic+")"}}),t._m(0)])])},It=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"ac-msg-paner qiong-txt-16"},[e("h1",{},[t._v("资料无法展示")]),e("div",{},[e("p",[t._v("如有问题请联络")]),e("a",[t._v("cs@andyy.com")])])])}],Ot={name:"",props:{active:{type:Boolean},username:{type:String}},data(){return{lock_pic:i(5001)}}},Tt=Ot,At=(0,c.Z)(Tt,qt,It,!1,null,"0a2914fb",null),Ut=At.exports,Dt=function(){var t=this,e=t._self._c;return e("button",{staticClass:"app-bar-trigger",on:{click:t.open}},[e("img",{attrs:{src:"/static/WEB_ICONS/menu_trigger.png"}})])},Bt=[],Qt={name:"",data(){return{}},methods:{open(){this.$emit("btn_Father")}}},Wt=Qt,jt=(0,c.Z)(Wt,Dt,Bt,!1,null,"755ed9c4",null),Gt=jt.exports,Ht=function(){var t=this,e=t._self._c;return e("div")},Jt=[],Vt=i(6797),zt=i.n(Vt),Yt=i(7931),Kt={props:{chronu_id:{type:String}},data(){return{user:null,chronu:"",finished:!1,relation_s:"",relation_e:"",results:[]}},computed:{user_backend(){return this.$store.state.user_backend},token(){return this.$store.state.token}},methods:{valuation(t){this.chronu=t||this.$store.state.chronus.id,this.user=this.user_backend},async init(){let t,e;if(this.finished=!1,this.user){await this.saving(null,null,[],[],[]);let i=await this.userLoading("SPONSER"),s=await this.userLoading("ENROLLER"),n=await this.fetchingOrders();Yt.Z.user_with_orders(i,n,this.buildData),Yt.Z.user_with_orders(s,n,this.buildData),t=await Yt.Z.rolling(i,this.user.member_code,"SPONSER"),e=await Yt.Z.rolling(s,this.user.member_code,"ENROLLER");const r=await Yt.Z.collection(i,s);await this.saving(i,s,t,e,r),this.finished=!0}this.$emit("finished_Father",this.finished)},clearFixed(t){return delete t.created_at,delete t.updated_at,delete t.published_at,t},buildData(t){let e,i,s;if(t.bonuses&&t.bonuses.length>0)for(let n of t.bonuses)if(n.time_period==this.chronu){s=n;break}s||(s=Yt.Z.def.bonu_def(this.chronu)),t.bonu_period=this.clearFixed(s),s.Rank>5?(e=Yt.Z.conf.NAMESPACE.LEADER,i=s.Rank-5):(e=Yt.Z.conf.NAMESPACE.SIMPLER,i=s.Rank),t.vip={name:e,star:i,code:e+"_"+i},t.vip_next=Yt.Z.vip_view.vip_next_simpler(e,i)},async saving(t,e,i,s,n){await this.$store.commit("saveSponsor",t),await this.$store.commit("saveEnroller",e),await this.$store.commit("saveCollection",n),await this.$store.commit("saveTreeSponsor",i),await this.$store.commit("saveTreeEnroller",s),await this.$store.commit("saveResults",this.results)},async judgeShareType(t){let e=0;if(t[0]){const i=t[0].bonu_period.Rank;i>this.conf.RANK_LEAD&&(e=i<this.conf.RANK_DEVELOP?1:2),this.$store.state.is_browser||(e=0)}await this.$store.commit("saveShareType",e)},async fetchingOrders(){return await this.conn.get(this.api.orders,this.token,{time_period:this.chronu,_limit:999})},_condition(){let t=zt()(this.$store.state.chronus.end);return t=t?t.format("yyyy-MM-DD"):this.$store.state.chronus.end,t=t?t.substring(0,10):t,{"_where[registered_date_lte]":t+" 23:59:59",_limit:999}},async userLoading(t="SPONSER"){const e=this._condition();"SPONSER"==t?e["_where[relation_index_sponsor_contains]"]=this.user.relation_index_sponsor:e["_where[relation_index_enroller_contains]"]=this.user.relation_index_enroller;const i=await this.conn.get(this.api.users,this.token,e);return await this.serialUser(i,t)},_clearUser(t){return delete t.role,delete t.enrolled,delete t.sponsored,delete t.sponsor_line,delete t.enroller_line,delete t.lp_wallet,delete t.created_at,delete t.updated_at,delete t.registered_date,delete t.bonus_calculations,delete t.blocked,delete t.provider,delete t.confirmed,delete t.avatar_url,delete t.wp_role,delete t.sponsor,delete t.enroller,delete t.p_customer,delete t.wp_jwt_date,t},serialUser(t,e){return new Promise(((i,s)=>{let n=[],r=/^[0-9]*$/;if("SPONSER"==e)for(let e=0;e<t.length;e++){const i=t[e];let s=!0;r.test(i.sponsor_id)?i.register_date_list=this.view.ser_timed_list(i.registered_date):s=!1,(i.relation_index_sponsor+"_").startsWith(this.user.relation_index_sponsor+"_")||(s=!1),s&&n.push(this._clearUser(i))}else if("ENROLLER"==e)for(let e=0;e<t.length;e++){const i=t[e];let s=!0;r.test(i.enroller_id)?i.register_date_list=this.view.ser_timed_list(i.registered_date):s=!1,(i.relation_index_enroller+"_").startsWith(this.user.relation_index_enroller+"_")||(s=!1),s&&n.push(this._clearUser(i))}this.results=n,i(n)}))}}},Xt=Kt,te=(0,c.Z)(Xt,Ht,Jt,!1,null,"598ed82c",null),ee=te.exports,ie=function(){var t=this,e=t._self._c;return e("div")},se=[],ne={name:"",data(){return{}},mounted(){this.$emit("loading_Father")}},re=ne,oe=(0,c.Z)(re,ie,se,!1,null,"09573710",null),ae=oe.exports,le=function(){var t=this,e=t._self._c;return e("div")},ce=[],ue={components:{},name:"",props:{},data(){return{}}},de=ue,he=(0,c.Z)(de,le,ce,!1,null,"1bbb36a2",null),me=he.exports,_e=i(4984),pe=function(){var t=this,e=t._self._c;return e("div",[e("bonus-numed-init",{ref:"boNumedREF"}),e("team-bonus-detail-init",{ref:"tbdREF"}),e("bonus-enroller-line-me",{ref:"belmREF"}),e("me-son-can-num",{ref:"mscnREF"}),e("net-bonus-statement",{ref:"bonusREF"}),e("ex-app-init",{ref:"appInitREF"})],1)},ve=[],ge=i(1240),fe=function(){var t=this,e=t._self._c;return e("div")},be=[],we={name:"",data(){return{ranks:[6,7,8,9,10]}},methods:{async tbdLoading(){return await this.conn.get(this.api.team_bonus_detail,this.$store.state.token)}}},ye=we,$e=(0,c.Z)(ye,fe,be,!1,null,"35c7bae6",null),ke=$e.exports,Ce=i(9079),xe=function(){var t=this,e=t._self._c;return e("div",[e("net-user-relation",{ref:"retREF"})],1)},Ee=[],Ne=function(){var t=this,e=t._self._c;return e("div")},Le=[],Se={methods:{async sponsor(t,e){return 0},async enroller(t,e){return 0}}},Ze=Se,Me=(0,c.Z)(Ze,Ne,Le,!1,null,null,null),Re=Me.exports,Pe={components:{NetUserRelation:Re},data(){return{modes:["sponsor","enroller"]}},computed:{timed(){return this.$store.state.chronus},user(){return this.$store.state.user_backend}},methods:{_condition(){let t=this.timed.end;return t=t?zt()(t).format("yyyy-MM"):"",[this.user.member_code,t]},async init(){this.user&&this.modes.map((async t=>{const e=await this.$refs.retREF[t](...this._condition());e&&await this.saving(t,...e)}))},async saving(t,e,i){"sponsor"==t?(await this.$store.commit("save",["user_s_tree",e]),await this.$store.commit("save",["user_s_detail",await this._clean(i)])):(await this.$store.commit("save",["user_e_tree",e]),await this.$store.commit("save",["user_e_detail",await this._clean(i)]))},_clean(t={}){return new Promise(((e,i)=>{let s=null;for(let n in t)s=this.bonu.switch_user_period(this.bonu.clean_user(t[n])),t[n]=this.bonu.user_vip_and_next_vip(s);e(t)}))}}},Fe=Pe,qe=(0,c.Z)(Fe,xe,Ee,!1,null,null,null),Ie=qe.exports,Oe=i(3964),Te={components:{TeamBonusDetailInit:ke,BonusNumedInit:ge.Z,BonusEnrollerLineMe:_e.Z,MeSonCanNum:Ce.Z,NetBonusStatement:Oe.Z,ExAppInit:Ie},async mounted(){this.$store.commit("saveTeamBonusDetail",await this.$refs.tbdREF.tbdLoading()),this.$store.commit("saveBonusQualifyLine",await this.$refs.belmREF.lunch_Line());let t=this.$refs.boNumedREF.numdLoading();t=t?await t:[],this.$store.commit("saveBonusNum",t),await this.refreshSCN()},methods:{async refreshSCN(){let t=this.$refs.mscnREF.numing_backend(),e=this.$store.state.user_backend;e.son_can_num=t,this.$store.commit("saveBackendUser",e)}}},Ae=Te,Ue=(0,c.Z)(Ae,pe,ve,!1,null,"20825da5",null),De=Ue.exports,Be=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"home-loading flex-center"},[e("qiong-loading",{attrs:{bigger:2}})],1)},Qe=[],We={components:{QiongLoading:m.Z}},je=We,Ge=(0,c.Z)(je,Be,Qe,!1,null,null,null),He=Ge.exports,Je={components:{HomeLayout:d,Chronus:h["default"],QiongLoading:m.Z,DataRunning:b,LeftAppDrawers:Nt,FlexIframePdf:Lt.Z,ProductsLoading:Ft,ActiveShimmer:Ut,QiongAppBarTrigger:Gt,InitApp:ee,LoadingTrigger:ae,HomeModals:me,BonusEnrollerLineMe:_e.Z,HomeRefreshing:De,HomeLoading:He},name:"",provide(){return{reload:this.reload}},created(){const t=this.$route.query.menu;this.menu=!t||JSON.parse(t)},watch:{$route(t,e){const i=t.path.split("/").length,s=e.path.split("/").length;this.transitionName=i<s?"slide-up":"slide-down",this.transitionName||(this.transitionName="slide-up")}},data(){return{alive:!0,menu:!1,transitionName:null}},computed:{member_area(){let t=this.$store.state.user_backend;return!!t.member_area}},async mounted(){await this.init()},methods:{initData(){this.$refs.initREF.valuation(),this.$refs.initREF.init()},async init(){await this.$store.commit("saveProducts",await this.$refs.productREF.productLoading())},reload(){this.alive=!1,this.$nextTick((function(){this.alive=!0}))}}},Ve=Je,ze=(0,c.Z)(Ve,s,n,!1,null,"ee345d8e",null),Ye=ze.exports},7820:function(t,e,i){i.d(e,{Z:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"pti-go-pdf hand",on:{click:t.lockPrint}},[t.loading?e("v-icon",{staticClass:"circle-around"},[t._v("mdi-loading")]):e("v-icon",[t._v("mdi-file-outline")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.print,expression:"print"}],staticClass:"pdf_modal",attrs:{id:"_data"}},[e("pdf-simple",{ref:"pdf_simple"})],1),e("location-me",{ref:"localMe"})],1)},n=[],r=i(3860),o=i(5561),a=i(7269),l={components:{PdfUser:a["default"],LocationMe:r.Z,PdfSimple:o["default"]},name:"",props:{icon:{type:String,default:"mdi-download"},color:{type:String,default:""},extra_calss:{type:String,default:""},is_fixed:{type:Boolean,default:!0},l_or_r:{type:Boolean,default:!1},is_small:{type:Boolean,default:!1},useless:{type:Boolean},target_id:{type:String}},data(){return{print:!0,head:"http://127.0.0.1:8080",link:"",loading:!1,member_code:null}},created(){this.link=this.head+"/#/writing?layout=WIDGET"},mounted(){this.conf.TEST||(this.head=this.conf.distURL),this.member_code=this.target_id,this.member_code||(this.member_code=this.$store.state.user_backend.member_code)},methods:{lockPrint(){this.print&&(this._loading(),this.$refs.pdf_simple.print_backend())},async printReay(){this.print=!1,this.link=this.head+"/#/?layout=WIDGET",this.loading=!0,this.$emit("useless_Father",!0);const t=await this.$refs.localMe.locationMe_Async(this.member_code,"COLLECTION");delete t.commissions,delete t.confirmed,delete t.createdAt,delete t.enrolled,delete t.bonuses,delete t.orders,delete t.provider,delete t.sponsored,delete t.updatedAt,localStorage.setItem("pdf_oil_me",JSON.stringify(t))},_loading(){this.print=!1,this.loading=!0,setTimeout((()=>{this.print=!0,this.$emit("useless_Father",!1),this.loading=!1}),3400)}}},c=l,u=i(1001),d=(0,u.Z)(c,s,n,!1,null,"c715d7bc",null),h=d.exports},7269:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",[t._v(" PDF ")])},n=[],r={name:"",data(){return{member_code:null,chronu_id:null}},created(){const t=this.$route.query.member_code,e=this.$route.query.chronu_id;this.valuation(t,e)},methods:{valuation(t=null,e=null){this.member_code=t||this.$store.state.user_backend.member_code,this.chronu_id=e||this.$store.state.chronus.id}}},o=r,a=i(1001),l=(0,a.Z)(o,s,n,!1,null,"b0817d7e",null),c=l.exports},5001:function(t,e,i){t.exports=i.p+"img/Index.071d0cf5.png"}}]);
//# sourceMappingURL=1555.4c595818.js.map