"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[5994],{1107:function(e,s,t){t.d(s,{Z:function(){return d}});var a=function(){var e=this,s=e._self._c;return s("div")},r=[],n={async mounted(){this.$emit("sign",await this.ioad_country())},methods:{buiid(e){return e?e.map((e=>(e.v=e.country_key?e.country_key:"",e.txt=e.display_name,e))):[]},async ioad_country(){let e;return e=await this.conn.ex_get(this,"countries",{}),console.log("COUNTRY =",e),e=this.buiid(e),this.buiid(e)}}},i=n,o=t(1001),_=(0,o.Z)(i,a,r,!1,null,null,null),d=_.exports},9441:function(e,s,t){t.d(s,{Z:function(){return d}});var a=function(){var e=this,s=e._self._c;return s("div")},r=[],n={computed:{users(){return this.$store.state.user_collection}},methods:{_sort_users(e,s){let t=0,a=e.member_code,r=s.member_code;return a&&r&&(a=a?Number.parseInt(a):"",r=r?Number.parseInt(r):"",t=a-r),t},async user_of_iist(e={_limit:999}){this.conf.TEST;let s=await this.conn.ex_get(this,"pw_user_iist",e);return s=s?s.sort(((e,s)=>this._sort_users(e,s))):[],console.log("用户列表 =",s),s.filter((e=>!!e.member_code))},async user_detaii(e={}){let s=await this.conn.ex_get(this,"pw_user_detaii",e);return s||[]},async user_patch(e,s){let t=await this.conn.ex_patch(this,"pw_user_detaii",e,{member_code:s},"",!0);return t||[]},async change_pass(e,s){let t=await this.conn.ex_post(this,"change_pass",e,{member_code:s});return t||null}}},i=n,o=t(1001),_=(0,o.Z)(i,a,r,!1,null,null,null),d=_.exports},3115:function(e,s,t){t.d(s,{Z:function(){return d}});var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"fx-r py-3"},[s("button",{staticClass:"pw-btn pw-tit",on:{click:function(s){return e.$emit("tap")}}},[e._v(" Back ")])])},r=[],n={},i=n,o=t(1001),_=(0,o.Z)(i,a,r,!1,null,null,null),d=_.exports},7161:function(e,s,t){t.d(s,{Z:function(){return d}});var a=function(){var e=this,s=e._self._c;return s("div",e._l(e.boxs,(function(t,a){return s("div",{key:a},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.chos,expression:"chos"}],staticClass:"pw-checkbox",attrs:{disabled:e.disabled,type:"checkbox",id:"box_"+a+"_"+e._uid,name:"box_"+e._uid},domProps:{value:t.v,checked:Array.isArray(e.chos)?e._i(e.chos,t.v)>-1:e.chos},on:{change:function(s){var a=e.chos,r=s.target,n=!!r.checked;if(Array.isArray(a)){var i=t.v,o=e._i(a,i);r.checked?o<0&&(e.chos=a.concat([i])):o>-1&&(e.chos=a.slice(0,o).concat(a.slice(o+1)))}else e.chos=n}}}),s("label",{staticClass:"pl-1 pw-sub hand",attrs:{for:"box_"+a+"_"+e._uid}},[e._v(e._s(t.txt))])])})),0)},r=[],n={props:{def:{type:Number},header:{type:String},boxs:{type:Array,default:()=>[{v:1,txt:"I have read and agree to the following terms and policies. I certify that I am 18 years old or above and legally able to enter into the Agreement"}]},disabled:{type:Boolean,default:!1}},watch:{chos(e){this.$emit("change",e)}},data(){return{chos:0}},mounted(){this.chos=this.def?this.def:0},methods:{reset(e){this.chos=e}}},i=n,o=t(1001),_=(0,o.Z)(i,a,r,!1,null,null,null),d=_.exports},5994:function(e,s,t){t.r(s),t.d(s,{default:function(){return de}});var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"pw-user-page pw-tit"},[s("div",[e._m(0),e.loading?s("div",{staticClass:"pw-empty"},[s("pw-user-view-loading")],1):s("div",[s("udv-paner",{attrs:{user:e.detaii}})],1)]),s("net-pw-user",{ref:"pwuREF"}),e.user?s("pw-ud-searia",{attrs:{member_code:e.user.member_code},on:{start:()=>e.loading=!0,data:e.recive}}):e._e()],1)},r=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"py-3 pw-user-header"},[s("nav",[e._v("個人資料")])])}],n=t(9441),i=t(3115),o=function(){var e=this,s=e._self._c;return s("nav",{staticClass:"pw-bg pw-form-panner"},[e.detaii?s("div",[s("pw-udv-view-basic",{attrs:{one:e.detaii}}),s("pw-udv-view-personal",{attrs:{one:e.detaii}}),s("pw-udv-view-contact",{attrs:{one:e.detaii}}),s("pw-udv-view-bank",{attrs:{one:e.detaii}})],1):e._e(),e._m(0)])},_=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"t-c pt-9"},[s("div",{staticClass:"py-7"})])}],d=function(){var e=this,s=e._self._c;return s("div",[s("h2",{staticClass:"udv-header"},[e._v("Personal Information")]),e.one?s("nav",[s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"名字",header_en:"First name:"}},[e._v(" "+e._s(e.one.first_name)+" ")]),s("pw-form-view",{staticClass:"w-24",attrs:{header_cn:"姓氏",header_en:"Last name:"}},[e._v(" "+e._s(e.one.last_name)+" ")]),s("pw-form-view",{staticClass:"w-23",attrs:{header_cn:"中文名",header_en:"Chinese name:"}},[e._v(" "+e._s(e.one.chinese_name)+" ")])],1),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"生日",header_en:"Date of Birth:"}},[e._v(" "+e._s(e.one.birth)+" ")]),s("pw-form-view",{staticClass:"w-24 min-w-5em",attrs:{header_cn:"身份證號碼",header_en:"ID:"}},[e._v(" "+e._s(e.one.id_card)+" ")]),s("pw-form-view",{staticClass:"w-23",attrs:{header_cn:"性別",header_en:"Gender:"}},["female"==e.one.gender||1==e.one.gender?s("span",[e._v("女")]):s("span",[e._v("男")])])],1),s("div",{staticClass:"py-5"},[s("pw-form-view",{attrs:{header_cn:"支付方式",header_en:"payment method:"}},[s("span",[e._v(e._s(e.is_save_to_wallet))])]),s("p",{staticClass:"pw-sub fs-s"},[e._v("以每月八號前更改的記錄為準如有更改請聯絡客戶服務中心")])],1),s("div",{staticClass:"py-5"},[s("pw-file-view",{attrs:{fiie:e.fiie}})],1)]):e._e()])},l=[],c=function(){var e=this,s=e._self._c;return s("div",{staticClass:"pw-form-view"},[s("nav",{staticClass:"t-l"},[s("p",{staticClass:"fw-b"},[e._v(e._s(e.header_cn))]),s("p",[e._v(e._s(e.header_en))])]),s("div",{staticClass:"fx-1 t-l"},[e._t("default")],2)])},u=[],h={props:["header_cn","header_en"]},p=h,m=t(1001),w=(0,m.Z)(p,c,u,!1,null,null,null),v=w.exports,f=function(){var e=this,s=e._self._c;return s("div",[s("div",[e._v(e._s(e.header))]),s("nav",{staticClass:"pw-f-view pt"},[s("img",{attrs:{src:e.img}})])])},b=[],C={props:{header:{type:String,default:"Upload ID copy"},fiie:{type:Object}},computed:{img(){let e=this.fiie;return e&&e.url&&(e=this.conf.baseURL+e.url),e}}},y=C,g=(0,m.Z)(y,f,b,!1,null,null,null),x=g.exports,k={components:{PwFileView:x,PwFormView:v},props:["one"],computed:{fiie(){let e=this.one.upload_id_file;return e&&e.url?e:{}},is_save_to_wallet(){let e=this.one.pay_method;return e||0==e?e?"電子錢包":"支票/其他":"待設定"}}},Z=k,P=(0,m.Z)(Z,d,l,!1,null,null,null),N=P.exports,I=function(){var e=this,s=e._self._c;return e.one?s("div",[s("pw-form-view",{staticClass:"py-5",attrs:{header_cn:"會員ID",header_en:"Member ID:"}},[e._v(" "+e._s(e.one.member_code)+" ")]),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"會員名稱",header_en:"User Name:"}},[e._v(" "+e._s(e.one.name)+" ")]),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"名稱/授權人名稱",header_en:"Name/Authorized Name:"}},[e._v(" "+e._s(e.one.name_auth)+" ")])],1),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"介紹人 ID",header_en:"Enroller ID:"}},[e._v(" "+e._s(e.one.enroller_id)+" ")]),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"介紹人姓名",header_en:"Enroller Name:"}},[e._v(" "+e._s(e.one.enroller_name)+" ")])],1),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"保護人 ID",header_en:"Enroller ID:"}},[e._v(" "+e._s(e.one.sponsor_id)+" ")]),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"保護人姓名",header_en:"Enroller Name:"}},[e._v(" "+e._s(e.one.sponsor_name)+" ")])],1),s("div",{staticClass:"pw-row py-5"},[s("pw-form-view",{staticClass:"w-100",attrs:{header_cn:"會員權限",header_en:"Membership authority:"}},[e.one.member_auth?s("span",[e._v("Active")]):s("span",[e._v("Non-active")])])],1)],1):e._e()},A=[],U={components:{PwFormView:v},props:["one"]},B=U,D=(0,m.Z)(B,I,A,!1,null,null,null),V=D.exports,F=function(){var e=this,s=e._self._c;return s("div",[s("h2",{staticClass:"udv-header"},[e._v("Contact")]),e.one?s("nav",[s("div",{staticClass:"fx-l py-5 pw-row"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"電話號碼",header_en:"Mobile No.:"}},[e._v(" "+e._s(e.one.phone)+" ")]),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"電郵",header_en:"Email Address:"}},[e._v(" "+e._s(e.one.email)+" ")])],1),s("pw-form-view",{staticClass:"pt-5",attrs:{header_cn:"地址",header_en:"Address:"}}),s("div",{staticClass:"pw-row fx-l pb-5 pt-3"},[e.one.address.address?s("div",{staticClass:"w-53"},[e._v(" "+e._s(e.one.address.address)+" ")]):e._e(),e.one.address.city?s("div",{staticClass:"w-24"},[e._v(" "+e._s(e.one.address.city)+" ")]):e._e(),s("div",{staticClass:"w-23"},[e._v(" "+e._s(e.contry)+" ")])]),s("div",{staticClass:"py-5"},[s("pw-file-view",{attrs:{fiie:e.one.address.address_proof_file,header:"Adress Proof (within the last 3 months)"}})],1),s("pw-form-view",{staticClass:"py-5",attrs:{header_cn:"地區",header_en:"Area:"}},[e._v(" "+e._s(e.one.address.area)+" ")])],1):e._e(),s("net-pw-countries",{on:{sign:e.ioad_country}})],1)},E=[],$=t(1107),T={components:{PwFormView:v,PwFileView:x,NetPwCountries:$.Z},props:["one"],data(){return{countries:[],contry:""}},methods:{ioad_country(e){let s="";this.countries=e,setTimeout((t=>{const a=this.one.address.country;e.map((e=>{e.v==a&&(s=e.txt)})),this.contry=s}),200)}}},R=T,S=(0,m.Z)(R,F,E,!1,null,null,null),L=S.exports,M=function(){var e=this,s=e._self._c;return s("div",[s("h2",{staticClass:"udv-header"},[e._v("Bank Information")]),s("p",{staticClass:"pb-5 fs-s pw-sub"},[e._v(" (The bank account holder must match the name of the member) ")]),e.one?s("nav",[s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"銀行賬戶名稱",header_en:"Bank Account Name:"}},[e._v(" "+e._s(e.one.bank.account_name)+" ")]),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"銀行編號",header_en:"Bank Code:"}},[e._v(" "+e._s(e.one.bank.bank_code)+" ")])],1),s("pw-form-view",{staticClass:"w-100 py-5",attrs:{header_cn:"銀行分行代碼和賬戶",header_en:"Bank Branch Code & Account Number:"}},[e._v(" "+e._s(e.one.bank.branch_name)+" ")]),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"密碼",header_en:"Password:"}},[s("span",{staticClass:"pw-sub"},[e._v(" (不予展示) ")])]),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"確認密碼",header_en:"Confirm Password:"}})],1),s("div",{staticClass:"pb-2 pt-4"},[s("h3",{staticClass:"py-3"},[e._v("Agreement")]),s("pw-checkbox",{attrs:{disabled:!0,def:e.one.agreement?1:0}})],1)],1):e._e()])},O=[],j=t(7161),z={components:{PwFormView:v,PwCheckbox:j.Z},props:["one"]},q=z,G=(0,m.Z)(q,M,O,!1,null,null,null),Q=G.exports,W={components:{PwUdvViewBasic:V,PwUdvViewContact:L,PwUdvViewPersonal:N,PwUdvViewBank:Q},props:["user"],data(){return{detaii:null}},mounted(){this.reset()},methods:{_name(){return this.user.up_br_ename},reset(){this.detaii={member_code:this.user.member_code,name:this._name(),name_auth:this.user.username,enroller_id:this.user.sponsor_id,enroller_name:this.user.enroller_name,sponsor_id:this.user.sponsor_id,sponsor_name:this.user.sponsor_name,member_auth:this.user.member_area,first_name:this.user.up_first_name,last_name:this.user.up_last_name,chinese_name:this.user.up_cname,birth:this.user.up_dob,id_card:this.user.up_id_no,gender:this.user.up_gender,pay_method:this.user.isSaveToWallet,upload_id_file:this.user.up_id_copy,phone:this.user.phone,email:this.user.email,address:{address:this.user.up_address,area:this.user.up_area,city:this.user.up_district,country:this.user.up_country,address_proof_file:this.user.up_address_proof},bank:{account_name:this.user.up_bank_acc,bank_code:this.user.up_bank_code,branch_name:this.user.up_bank_branch,password:"",password_again:""},agreement:this.user.up_agreement_box},console.log("DETAII =",this.detaii)},submit(){}}},Y=W,H=(0,m.Z)(Y,o,_,!1,null,null,null),J=H.exports,K=t(7676),X=function(){var e=this,s=e._self._c;return s("nav",{staticClass:"pw-bg pw-form-panner"},[s("div",[s("pw-form-view",{staticClass:"py-5",attrs:{header_cn:"會員ID",header_en:"Member ID:"}},[e._v(" "+e._s(e.def_user.member_code)+" ")]),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"會員名稱",header_en:"User Name:"}},[e._v(" "+e._s(e.def_user.display_name)+" ")]),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"名稱/授權人名稱",header_en:"Name/Authorized Name:"}},[e._v(" "+e._s(e.def_user.username)+" ")])],1)],1),s("div",{staticClass:"pt-5"},[s("qiong-loading",{attrs:{bigger:1}})],1)])},ee=[],se=t(6481),te={components:{QiongLoading:se.Z,PwFormView:v},computed:{def_user(){return this.$store.state.user_backend}}},ae=te,re=(0,m.Z)(ae,X,ee,!1,null,null,null),ne=re.exports,ie={components:{PwButtonBack:i.Z,UdvPaner:J,NetPwUser:n.Z,PwUdSearia:K.Z,PwUserViewLoading:ne},data(){return{detaii:null,loading:!0}},computed:{user(){return this.$store.state.user_backend}},methods:{recive(e){this.loading=!0,this.detaii=e,this.loading=!1}}},oe=ie,_e=(0,m.Z)(oe,a,r,!1,null,null,null),de=_e.exports},7676:function(e,s,t){t.d(s,{Z:function(){return l}});var a=function(){var e=this,s=e._self._c;return s("div",[s("net-pw-user",{ref:"npuREF"})],1)},r=[],n=t(9441),i={components:{NetPwUser:n.Z},props:["member_code"],data(){return{detaii:null}},async mounted(){await this.init()},methods:{_name(e){if("203001"==e.member_code)return e.username;let s=e.acf;return s?(s.up_first_name?s.up_first_name:"")+" "+(s.up_last_name?s.up_last_name:""):""},async insert_user(e){const s=e.sponsor_id,t=e.enroller_id;let a=await this._fetching(s),r=await this._fetching(t);return r&&(e.sponsor=a,e.enroller=r),e},async init(){if(this.member_code){this.$emit("start");let e=await this._fetching(this.member_code);if(e){if(e=await this.insert_user(e),e){let s=e;s.sponsor_name=this._name(s.sponsor),s.enroller_name=this._name(s.enroller),this.detaii=Object.assign(s,s.acf)}this.$emit("data",this.detaii)}}},async _fetching(e){return await this.$refs.npuREF.user_detaii({member_code:e})}}},o=i,_=t(1001),d=(0,_.Z)(o,a,r,!1,null,null,null),l=d.exports}}]);
//# sourceMappingURL=5994.64519813.js.map