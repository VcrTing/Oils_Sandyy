webpackJsonp([14],{"7WqO":function(e,t){},"86Vp":function(e,t,s){"use strict";var n={props:{def:{type:Number},header:{type:String},boxs:{type:Array,default:function(){return[{v:1,txt:"I have read and agree to the following terms and policies. I certify that I am 18 years old or above and legally able to enter into the Agreement"}]}},disabled:{type:Boolean,default:!1}},watch:{chos:function(e){this.$emit("change",e)}},data:function(){return{chos:0}},mounted:function(){this.chos=this.def?this.def:0},methods:{reset:function(e){this.chos=e}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.boxs,function(t,n){return s("div",{key:n},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.chos,expression:"chos"}],staticClass:"pw-checkbox",attrs:{disabled:e.disabled,type:"checkbox",id:"box_"+n+"_"+e._uid,name:"box_"+e._uid},domProps:{value:t.v,checked:Array.isArray(e.chos)?e._i(e.chos,t.v)>-1:e.chos},on:{change:function(s){var n=e.chos,a=s.target,r=!!a.checked;if(Array.isArray(n)){var i=t.v,o=e._i(n,i);a.checked?o<0&&(e.chos=n.concat([i])):o>-1&&(e.chos=n.slice(0,o).concat(n.slice(o+1)))}else e.chos=r}}}),e._v(" "),s("label",{staticClass:"pl-1 pw-sub",attrs:{for:"box_"+n+"_"+e._uid}},[e._v(e._s(t.txt))])])}),0)},staticRenderFns:[]};var r=s("VU/8")(n,a,!1,function(e){s("i3Fv")},null,null);t.a=r.exports},BGer:function(e,t){},"KuK/":function(e,t){},R5H5:function(e,t){},UJtJ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Xxa5"),a=s.n(n),r=s("exGp"),i=s.n(r),o=s("Cpv2"),c=s("Ra9V"),_=s("gGAj"),d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pw-form-view"},[s("nav",{staticClass:"t-l"},[s("p",{staticClass:"fw-b"},[e._v(e._s(e.header_cn))]),e._v(" "),s("p",[e._v(e._s(e.header_en))])]),e._v(" "),s("div",{staticClass:"fx-1 t-l"},[e._t("default")],2)])},staticRenderFns:[]};var l=s("VU/8")({props:["header_cn","header_en"]},d,!1,function(e){s("l/Tz")},null,null).exports,v={props:{header:{type:String,default:"Upload ID copy"}}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",[this._v(this._s(this.header))]),this._v(" "),t("nav",[this._v("\n        文件\n    ")])])},staticRenderFns:[]};var u=s("VU/8")(v,p,!1,function(e){s("KuK/")},null,null).exports,h={components:{PwFileView:u,PwFormView:l},props:["one"]},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"udv-header"},[e._v("Personal Information")]),e._v(" "),e.one?s("nav",[s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"名字",header_en:"First name:"}},[e._v("\n                "+e._s(e.one.first_name)+"\n            ")]),e._v(" "),s("pw-form-view",{staticClass:"w-24",attrs:{header_cn:"姓氏",header_en:"Last name:"}},[e._v("\n                "+e._s(e.one.last_name)+"\n            ")]),e._v(" "),s("pw-form-view",{staticClass:"w-23",attrs:{header_cn:"中文名",header_en:"Chinese name:"}},[e._v("\n                "+e._s(e.one.chinese_name)+"\n            ")])],1),e._v(" "),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"生日",header_en:"Date of Birth:"}},[e._v("\n                "+e._s(e.one.birth)+"\n            ")]),e._v(" "),s("pw-form-view",{staticClass:"w-24 min-w-5em",attrs:{header_cn:"身份證號碼",header_en:"ID:"}},[e._v("\n                "+e._s(e.one.id_card)+"\n            ")]),e._v(" "),s("pw-form-view",{staticClass:"w-23",attrs:{header_cn:"性別",header_en:"Gender:"}},[e.one.gender?s("span",[e._v("女")]):s("span",[e._v("男")])])],1),e._v(" "),s("div",{staticClass:"py-5"},[s("pw-form-view",{attrs:{header_cn:"下期出貨方式",header_en:"payment method:"}},[e.one.pay_method?s("span",[e._v(e._s(e.one.pay_method))]):s("span",[e._v("待設定")])]),e._v(" "),s("p",{staticClass:"pw-sub fs-s"},[e._v("以每月八號前更改的記錄為準如有更改請聯絡客戶服務中心")])],1),e._v(" "),s("div",{staticClass:"py-5"},[s("pw-file-view",{attrs:{fiie:e.one.upload_id_file}})],1)]):e._e()])},staticRenderFns:[]};var w=s("VU/8")(h,m,!1,function(e){s("pqML")},null,null).exports,f={components:{PwFormView:l},props:["one"]},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.one?s("div",[s("pw-form-view",{staticClass:"py-5",attrs:{header_cn:"會員ID",header_en:"Member ID:"}},[e._v("\n        "+e._s(e.one.member_code)+"\n    ")]),e._v(" "),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"會員名稱",header_en:"User Name:"}},[e._v("\n            "+e._s(e.one.name)+"\n        ")]),e._v(" "),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"名稱/授權人名稱",header_en:"Name/Authorized Name:"}},[e._v("\n            "+e._s(e.one.name_auth)+"\n        ")])],1),e._v(" "),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"介紹人 ID",header_en:"Enroller ID:"}},[e._v("\n            "+e._s(e.one.enroller_id)+"\n        ")]),e._v(" "),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"介紹人姓名",header_en:"Enroller Name:"}},[e._v("\n            "+e._s(e.one.enroller_name)+"\n        ")])],1),e._v(" "),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"保護人 ID",header_en:"Enroller ID:"}},[e._v("\n            "+e._s(e.one.sponsor_id)+"\n        ")]),e._v(" "),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"保護人姓名",header_en:"Enroller Name:"}},[e._v("\n            "+e._s(e.one.sponsor_name)+"\n        ")])],1),e._v(" "),s("div",{staticClass:"pw-row py-5"},[s("pw-form-view",{staticClass:"w-100",attrs:{header_cn:"會員權限",header_en:"Membership authority:"}},[e.one.member_auth?s("span",[e._v("Active")]):s("span",[e._v("Non-active")])])],1)],1):e._e()},staticRenderFns:[]};var C=s("VU/8")(f,b,!1,function(e){s("jEOv")},null,null).exports,y={components:{PwFormView:l,PwFileView:u},props:["one"]},x={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"udv-header"},[e._v("Contact")]),e._v(" "),e.one?s("nav",[s("div",{staticClass:"fx-l py-5 pw-row"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"電話號碼",header_en:"Mobile No.:"}},[e._v("\n            "+e._s(e.one.phone)+"\n            ")]),e._v(" "),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"電郵",header_en:"Email Address:"}},[e._v("\n                "+e._s(e.one.email)+"\n            ")])],1),e._v(" "),s("pw-form-view",{staticClass:"pt-5",attrs:{header_cn:"地址",header_en:"Address:"}}),e._v(" "),s("div",{staticClass:"pw-row fx-l pb-5 pt-3"},[e.one.address.address?s("div",{staticClass:"w-53"},[e._v("\n                "+e._s(e.one.address.address)+"\n            ")]):e._e(),e._v(" "),e.one.address.city?s("div",{staticClass:"w-24"},[e._v("\n                "+e._s(e.one.address.city)+"\n            ")]):e._e(),e._v(" "),s("div",{staticClass:"w-23"},[e._v("\n                "+e._s(e.one.address.country)+"\n            ")])]),e._v(" "),s("div",{staticClass:"py-5"},[s("pw-file-view",{attrs:{fiie:e.one.address.address_proof_file,header:"Adress Proof (within the last 3 months)"}})],1),e._v(" "),s("pw-form-view",{staticClass:"py-5",attrs:{header_cn:"地區",header_en:"Area:"}},[e._v("\n            "+e._s(e.one.address.area)+"\n        ")])],1):e._e()])},staticRenderFns:[]};var k=s("VU/8")(y,x,!1,function(e){s("7WqO")},null,null).exports,g={components:{PwFormView:l,PwCheckbox:s("86Vp").a},props:["one"]},U={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"udv-header"},[e._v("Bank Information")]),e._v(" "),s("p",{staticClass:"pb-5 fs-s pw-sub"},[e._v("\n        (The bank account holder must match the name of the member)\n    ")]),e._v(" "),e.one?s("nav",[s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"銀行賬戶名稱",header_en:"Bank Account Name:"}},[e._v("\n                "+e._s(e.one.bank.account_name)+"\n            ")]),e._v(" "),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"銀行編號",header_en:"Bank Code:"}},[e._v("\n                "+e._s(e.one.bank.bank_code)+"\n            ")])],1),e._v(" "),s("pw-form-view",{staticClass:"w-100 py-5",attrs:{header_cn:"銀行分行代碼和賬戶",header_en:"Bank Branch Code & Account Number:"}},[e._v("\n            "+e._s(e.one.bank.branch_name)+"\n        ")]),e._v(" "),s("div",{staticClass:"fx-l pw-row py-5"},[s("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"密碼",header_en:"Password:"}},[e._v("\n                "+e._s(e.one.bank.password)+"\n            ")]),e._v(" "),s("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"確認密碼",header_en:"Confirm Password:"}},[e._v("\n                "+e._s(e.one.bank.password_again)+"\n            ")])],1),e._v(" "),s("div",{staticClass:"pb-2 pt-4"},[s("h3",{staticClass:"py-3"},[e._v("Agreement")]),e._v(" "),s("pw-checkbox",{attrs:{disabled:!0,def:e.one.agreement}})],1)],1):e._e()])},staticRenderFns:[]};var V={components:{PwUdvViewBasic:C,PwUdvViewContact:k,PwUdvViewPersonal:w,PwUdvViewBank:s("VU/8")(g,U,!1,function(e){s("R5H5")},null,null).exports},props:["user"],data:function(){return{detaii:{member_code:"",name:"",name_auth:"",enroller_id:"",enroller_name:"",sponsor_id:"",sponsor_name:"",member_auth:!0,first_name:"",last_name:"",chinese_name:"",birth:"1998-12-12",id_card:"",gender:0,pay_method:"",upload_id_file:"",phone:"",email:"",address:{address:"",area:"",city:"",country:"",address_proof_file:""},bank:{account_name:"",bank_code:"",branch_name:"",password:"",password_again:""},agreement:1}}},mounted:function(){console.log("reset =",this.user),this.reset()},methods:{reset:function(){this.detaii={member_code:this.user.member_code,name:this.user.display_name,name_auth:this.user.username,enroller_id:this.user.sponsor_id,enroller_name:"KKMMMKK LIMIT",sponsor_id:this.user.sponsor_id,sponsor_name:"KKLLADADA UUU",member_auth:this.user.member_area,first_name:this.user.display_name,last_name:"",chinese_name:"",birth:"",id_card:"",gender:0,pay_method:"",upload_id_file:"",phone:this.user.phone,email:this.user.email,address:{address:"",area:"NIL",city:"",country:"中國香港",address_proof_file:""},bank:{account_name:"",bank_code:"",branch_name:"",password:"",password_again:""},agreement:1}},submit:function(){}}},F={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"pw-bg pw-form-panner"},[s("div",[s("pw-udv-view-basic",{attrs:{one:e.detaii}}),e._v(" "),s("pw-udv-view-personal",{attrs:{one:e.detaii}}),e._v(" "),s("pw-udv-view-contact",{attrs:{one:e.detaii}}),e._v(" "),s("pw-udv-view-bank",{attrs:{one:e.detaii}})],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"t-c pt-9"},[t("div",{staticClass:"py-7"})])}]};var E=s("VU/8")(V,F,!1,function(e){s("sUiU")},null,null).exports,P={components:{PwButtonBack:_.a,UdvPaner:E,NetPwUser:c.a,CollectionReady:o.a},computed:{pw_user:function(){return this.$store.state.user_backend},users_coii:function(){return this.$store.state.user_collection}},mounted:function(){},methods:{_fetching:function(){var e=this;return i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.pwuREF.user_detaii({member_code:"203361"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)}))()},init:function(){var e=this;return i()(a.a.mark(function t(){var s,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("用户s =",e.users_coii),s=void 0,t.next=4,e._fetching();case 4:n=t.sent,e.users_coii&&n&&e.users_coii.map(function(e){console.log("code =",e.member_code),n.member_code==e.member_code&&(s=e)}),console.log("搜寻 详情 =",n,"查询到的用户 =",s);case 7:case"end":return t.stop()}},t,e)}))()}}},A={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pw-user-page pw-tit"},[t("div",[this._m(0),this._v(" "),t("udv-paner",{attrs:{user:this.pw_user}})],1),this._v(" "),t("net-pw-user",{ref:"pwuREF"}),this._v(" "),t("collection-ready",{on:{sign_Father:this.init}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"py-3 pw-user-header"},[t("nav",[this._v("個人資料")])])}]};var $=s("VU/8")(P,A,!1,function(e){s("BGer")},null,null);t.default=$.exports},gGAj:function(e,t,s){"use strict";var n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fx-r py-3"},[s("button",{staticClass:"pw-btn pw-tit",on:{click:function(t){return e.$emit("tap")}}},[e._v("\n        Back\n    ")])])},staticRenderFns:[]};var a=s("VU/8")({},n,!1,function(e){s("o64f")},null,null);t.a=a.exports},i3Fv:function(e,t){},jEOv:function(e,t){},"l/Tz":function(e,t){},o64f:function(e,t){},pqML:function(e,t){},sUiU:function(e,t){}});
//# sourceMappingURL=14.c9edb0f9f80a5d4ca35e.js.map