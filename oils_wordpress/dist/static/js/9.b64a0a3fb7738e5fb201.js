webpackJsonp([9],{"/c5g":function(e,t){},"0c1K":function(e,t){},"86Vp":function(e,t,n){"use strict";var s={props:{def:{type:Number},header:{type:String},boxs:{type:Array,default:function(){return[{v:1,txt:"I have read and agree to the following terms and policies. I certify that I am 18 years old or above and legally able to enter into the Agreement"}]}},disabled:{type:Boolean,default:!1}},watch:{chos:function(e){this.$emit("change",e)}},data:function(){return{chos:0}},mounted:function(){this.chos=this.def?this.def:0},methods:{reset:function(e){this.chos=e}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.boxs,function(t,s){return n("div",{key:s},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.chos,expression:"chos"}],staticClass:"pw-checkbox",attrs:{disabled:e.disabled,type:"checkbox",id:"box_"+s+"_"+e._uid,name:"box_"+e._uid},domProps:{value:t.v,checked:Array.isArray(e.chos)?e._i(e.chos,t.v)>-1:e.chos},on:{change:function(n){var s=e.chos,r=n.target,a=!!r.checked;if(Array.isArray(s)){var i=t.v,o=e._i(s,i);r.checked?o<0&&(e.chos=s.concat([i])):o>-1&&(e.chos=s.slice(0,o).concat(s.slice(o+1)))}else e.chos=a}}}),e._v(" "),n("label",{staticClass:"pl-1 pw-sub",attrs:{for:"box_"+s+"_"+e._uid}},[e._v(e._s(t.txt))])])}),0)},staticRenderFns:[]};var a=n("VU/8")(s,r,!1,function(e){n("i3Fv")},null,null);t.a=a.exports},BpmD:function(e,t){},Lj90:function(e,t){},Q9Lt:function(e,t){},UJtJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Ra9V"),r=n("gGAj"),a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pw-form-view"},[n("nav",{staticClass:"t-l"},[n("p",{staticClass:"fw-b"},[e._v(e._s(e.header_cn))]),e._v(" "),n("p",[e._v(e._s(e.header_en))])]),e._v(" "),n("div",{staticClass:"fx-1 t-l"},[e._t("default")],2)])},staticRenderFns:[]};var i=n("VU/8")({props:["header_cn","header_en"]},a,!1,function(e){n("l/Tz")},null,null).exports,o={props:{header:{type:String,default:"Upload ID copy"},fiie:{type:Object}},computed:{img:function(){var e=this.fiie;return e&&e.url&&(e=this.conf.baseURL+e.url),e}}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",[this._v(this._s(this.header))]),this._v(" "),t("nav",{staticClass:"pw-f-view pt"},[t("img",{attrs:{src:this.img}})])])},staticRenderFns:[]};var _=n("VU/8")(o,c,!1,function(e){n("Lj90")},null,null).exports,u={components:{PwFileView:_,PwFormView:i},props:["one"],computed:{fiie:function(){var e=this.one.upload_id_file;return e&&e.url?e:{}},is_save_to_wallet:function(){var e=this.one.pay_method;return e||0==e?e?"電子錢包":"支票/其他":"待設定"}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"udv-header"},[e._v("Personal Information")]),e._v(" "),e.one?n("nav",[n("div",{staticClass:"fx-l pw-row py-5"},[n("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"名字",header_en:"First name:"}},[e._v("\n                "+e._s(e.one.first_name)+"\n            ")]),e._v(" "),n("pw-form-view",{staticClass:"w-24",attrs:{header_cn:"姓氏",header_en:"Last name:"}},[e._v("\n                "+e._s(e.one.last_name)+"\n            ")]),e._v(" "),n("pw-form-view",{staticClass:"w-23",attrs:{header_cn:"中文名",header_en:"Chinese name:"}},[e._v("\n                "+e._s(e.one.chinese_name)+"\n            ")])],1),e._v(" "),n("div",{staticClass:"fx-l pw-row py-5"},[n("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"生日",header_en:"Date of Birth:"}},[e._v("\n                "+e._s(e.one.birth)+"\n            ")]),e._v(" "),n("pw-form-view",{staticClass:"w-24 min-w-5em",attrs:{header_cn:"身份證號碼",header_en:"ID:"}},[e._v("\n                "+e._s(e.one.id_card)+"\n            ")]),e._v(" "),n("pw-form-view",{staticClass:"w-23",attrs:{header_cn:"性別",header_en:"Gender:"}},["female"==e.one.gender||1==e.one.gender?n("span",[e._v("女")]):n("span",[e._v("男")])])],1),e._v(" "),n("div",{staticClass:"py-5"},[n("pw-form-view",{attrs:{header_cn:"支付方式",header_en:"payment method:"}},[n("span",[e._v(e._s(e.is_save_to_wallet))])]),e._v(" "),n("p",{staticClass:"pw-sub fs-s"},[e._v("以每月八號前更改的記錄為準如有更改請聯絡客戶服務中心")])],1),e._v(" "),n("div",{staticClass:"py-5"},[n("pw-file-view",{attrs:{fiie:e.fiie}})],1)]):e._e()])},staticRenderFns:[]};var l=n("VU/8")(u,d,!1,function(e){n("ZIAF")},null,null).exports,v={components:{PwFormView:i},props:["one"]},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.one?n("div",[n("pw-form-view",{staticClass:"py-5",attrs:{header_cn:"會員ID",header_en:"Member ID:"}},[e._v("\n        "+e._s(e.one.member_code)+"\n    ")]),e._v(" "),n("div",{staticClass:"fx-l pw-row py-5"},[n("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"會員名稱",header_en:"User Name:"}},[e._v("\n            "+e._s(e.one.name)+"\n        ")]),e._v(" "),n("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"名稱/授權人名稱",header_en:"Name/Authorized Name:"}},[e._v("\n            "+e._s(e.one.name_auth)+"\n        ")])],1),e._v(" "),n("div",{staticClass:"fx-l pw-row py-5"},[n("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"介紹人 ID",header_en:"Enroller ID:"}},[e._v("\n            "+e._s(e.one.enroller_id)+"\n        ")]),e._v(" "),n("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"介紹人姓名",header_en:"Enroller Name:"}},[e._v("\n            "+e._s(e.one.enroller_name)+"\n        ")])],1),e._v(" "),n("div",{staticClass:"fx-l pw-row py-5"},[n("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"保護人 ID",header_en:"Enroller ID:"}},[e._v("\n            "+e._s(e.one.sponsor_id)+"\n        ")]),e._v(" "),n("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"保護人姓名",header_en:"Enroller Name:"}},[e._v("\n            "+e._s(e.one.sponsor_name)+"\n        ")])],1),e._v(" "),n("div",{staticClass:"pw-row py-5"},[n("pw-form-view",{staticClass:"w-100",attrs:{header_cn:"會員權限",header_en:"Membership authority:"}},[e.one.member_auth?n("span",[e._v("Active")]):n("span",[e._v("Non-active")])])],1)],1):e._e()},staticRenderFns:[]};var f=n("VU/8")(v,p,!1,function(e){n("jEOv")},null,null).exports,h={components:{PwFormView:i,PwFileView:_,NetPwCountries:n("lD3y").a},props:["one"],data:function(){return{countries:[],contry:""}},methods:{ioad_country:function(e){var t=this,n="";this.countries=e,setTimeout(function(s){var r=t.one.address.country;e.map(function(e){e.v==r&&(n=e.txt)}),t.contry=n},200)}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"udv-header"},[e._v("Contact")]),e._v(" "),e.one?n("nav",[n("div",{staticClass:"fx-l py-5 pw-row"},[n("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"電話號碼",header_en:"Mobile No.:"}},[e._v("\n            "+e._s(e.one.phone)+"\n            ")]),e._v(" "),n("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"電郵",header_en:"Email Address:"}},[e._v("\n                "+e._s(e.one.email)+"\n            ")])],1),e._v(" "),n("pw-form-view",{staticClass:"pt-5",attrs:{header_cn:"地址",header_en:"Address:"}}),e._v(" "),n("div",{staticClass:"pw-row fx-l pb-5 pt-3"},[e.one.address.address?n("div",{staticClass:"w-53"},[e._v("\n                "+e._s(e.one.address.address)+"\n            ")]):e._e(),e._v(" "),e.one.address.city?n("div",{staticClass:"w-24"},[e._v("\n                "+e._s(e.one.address.city)+"\n            ")]):e._e(),e._v(" "),n("div",{staticClass:"w-23"},[e._v("\n                "+e._s(e.contry)+"\n            ")])]),e._v(" "),n("div",{staticClass:"py-5"},[n("pw-file-view",{attrs:{fiie:e.one.address.address_proof_file,header:"Adress Proof (within the last 3 months)"}})],1),e._v(" "),n("pw-form-view",{staticClass:"py-5",attrs:{header_cn:"地區",header_en:"Area:"}},[e._v("\n            "+e._s(e.one.address.area)+"\n        ")])],1):e._e(),e._v(" "),n("net-pw-countries",{on:{sign:e.ioad_country}})],1)},staticRenderFns:[]};var w=n("VU/8")(h,m,!1,function(e){n("Q9Lt")},null,null).exports,b={components:{PwFormView:i,PwCheckbox:n("86Vp").a},props:["one"]},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"udv-header"},[e._v("Bank Information")]),e._v(" "),n("p",{staticClass:"pb-5 fs-s pw-sub"},[e._v("\n        (The bank account holder must match the name of the member)\n    ")]),e._v(" "),e.one?n("nav",[n("div",{staticClass:"fx-l pw-row py-5"},[n("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"銀行賬戶名稱",header_en:"Bank Account Name:"}},[e._v("\n                "+e._s(e.one.bank.account_name)+"\n            ")]),e._v(" "),n("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"銀行編號",header_en:"Bank Code:"}},[e._v("\n                "+e._s(e.one.bank.bank_code)+"\n            ")])],1),e._v(" "),n("pw-form-view",{staticClass:"w-100 py-5",attrs:{header_cn:"銀行分行代碼和賬戶",header_en:"Bank Branch Code & Account Number:"}},[e._v("\n            "+e._s(e.one.bank.branch_name)+"\n        ")]),e._v(" "),n("div",{staticClass:"fx-l pw-row py-5"},[n("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"密碼",header_en:"Password:"}},[n("span",{staticClass:"pw-sub"},[e._v("\n                    (不予展示)\n                ")])]),e._v(" "),n("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"確認密碼",header_en:"Confirm Password:"}})],1),e._v(" "),n("div",{staticClass:"pb-2 pt-4"},[n("h3",{staticClass:"py-3"},[e._v("Agreement")]),e._v(" "),n("pw-checkbox",{attrs:{disabled:!0,def:e.one.agreement?1:0}})],1)],1):e._e()])},staticRenderFns:[]};var y={components:{PwUdvViewBasic:f,PwUdvViewContact:w,PwUdvViewPersonal:l,PwUdvViewBank:n("VU/8")(b,C,!1,function(e){n("lnO/")},null,null).exports},props:["user"],data:function(){return{detaii:null}},mounted:function(){this.reset()},methods:{_name:function(){return this.user.up_br_ename},reset:function(){this.detaii={member_code:this.user.member_code,name:this._name(),name_auth:this.user.username,enroller_id:this.user.sponsor_id,enroller_name:this.user.enroller_name,sponsor_id:this.user.sponsor_id,sponsor_name:this.user.sponsor_name,member_auth:this.user.member_area,first_name:this.user.up_first_name,last_name:this.user.up_last_name,chinese_name:this.user.up_cname,birth:this.user.up_dob,id_card:this.user.up_id_no,gender:this.user.up_gender,pay_method:this.user.isSaveToWallet,upload_id_file:this.user.up_id_copy,phone:this.user.phone,email:this.user.email,address:{address:this.user.up_address,area:this.user.up_area,city:this.user.up_district,country:this.user.up_country,address_proof_file:this.user.up_address_proof},bank:{account_name:this.user.up_bank_acc,bank_code:this.user.up_bank_code,branch_name:this.user.up_bank_branch,password:"",password_again:""},agreement:this.user.up_agreement_box},console.log("DETAII =",this.detaii)},submit:function(){}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"pw-bg pw-form-panner"},[e.detaii?n("div",[n("pw-udv-view-basic",{attrs:{one:e.detaii}}),e._v(" "),n("pw-udv-view-personal",{attrs:{one:e.detaii}}),e._v(" "),n("pw-udv-view-contact",{attrs:{one:e.detaii}}),e._v(" "),n("pw-udv-view-bank",{attrs:{one:e.detaii}})],1):e._e(),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"t-c pt-9"},[t("div",{staticClass:"py-7"})])}]};var g=n("VU/8")(y,x,!1,function(e){n("0c1K")},null,null).exports,k=n("ujfw"),V={components:{QiongLoading:n("era6").a,PwFormView:i},computed:{def_user:function(){return this.$store.state.user_backend}}},F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"pw-bg pw-form-panner"},[n("div",[n("pw-form-view",{staticClass:"py-5",attrs:{header_cn:"會員ID",header_en:"Member ID:"}},[e._v("\n            "+e._s(e.def_user.member_code)+"\n        ")]),e._v(" "),n("div",{staticClass:"fx-l pw-row py-5"},[n("pw-form-view",{staticClass:"w-53",attrs:{header_cn:"會員名稱",header_en:"User Name:"}},[e._v("\n                "+e._s(e.def_user.display_name)+"\n            ")]),e._v(" "),n("pw-form-view",{staticClass:"w-47",attrs:{header_cn:"名稱/授權人名稱",header_en:"Name/Authorized Name:"}},[e._v("\n                "+e._s(e.def_user.username)+"\n            ")])],1)],1),e._v(" "),n("div",{staticClass:"pt-5"},[n("qiong-loading",{attrs:{bigger:1}})],1)])},staticRenderFns:[]};var U=n("VU/8")(V,F,!1,function(e){n("f9Ij")},null,null).exports,E={components:{PwButtonBack:r.a,UdvPaner:g,NetPwUser:s.a,PwUdSearia:k.a,PwUserViewLoading:U},data:function(){return{detaii:null,loading:!0}},computed:{user:function(){return this.$store.state.user_backend}},methods:{recive:function(e){this.loading=!0,this.detaii=e,this.loading=!1}}},P={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pw-user-page pw-tit"},[n("div",[e._m(0),e._v(" "),e.loading?n("div",{staticClass:"pw-empty"},[n("pw-user-view-loading")],1):n("div",[n("udv-paner",{attrs:{user:e.detaii}})],1)]),e._v(" "),n("net-pw-user",{ref:"pwuREF"}),e._v(" "),e.user?n("pw-ud-searia",{attrs:{member_code:e.user.member_code},on:{start:function(){return e.loading=!0},data:e.recive}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"py-3 pw-user-header"},[t("nav",[this._v("個人資料")])])}]};var $=n("VU/8")(E,P,!1,function(e){n("/c5g")},null,null);t.default=$.exports},ZIAF:function(e,t){},"f/u4":function(e,t){},f9Ij:function(e,t){},gGAj:function(e,t,n){"use strict";var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fx-r py-3"},[n("button",{staticClass:"pw-btn pw-tit",on:{click:function(t){return e.$emit("tap")}}},[e._v("\n        Back\n    ")])])},staticRenderFns:[]};var r=n("VU/8")({},s,!1,function(e){n("o64f")},null,null);t.a=r.exports},i3Fv:function(e,t){},jEOv:function(e,t){},"l/Tz":function(e,t){},lD3y:function(e,t,n){"use strict";var s=n("Xxa5"),r=n.n(s),a=n("exGp"),i=n.n(a),o={mounted:function(){var e=this;return i()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,e.ioad_country();case 3:t.t1=t.sent,t.t0.$emit.call(t.t0,"sign",t.t1);case 5:case"end":return t.stop()}},t,e)}))()},methods:{buiid:function(e){return e?e.map(function(e){return e.v=e.country_key?e.country_key:"",e.txt=e.display_name,e}):[]},ioad_country:function(){var e=this;return i()(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=void 0,t.next=3,e.conn.ex_get(e,"countries",{});case 3:return n=t.sent,console.log("COUNTRY =",n),n=e.buiid(n),t.abrupt("return",e.buiid(n));case 7:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var _=n("VU/8")(o,c,!1,function(e){n("f/u4")},null,null);t.a=_.exports},"lnO/":function(e,t){},o64f:function(e,t){},ujfw:function(e,t,n){"use strict";var s=n("woOf"),r=n.n(s),a=n("Xxa5"),i=n.n(a),o=n("exGp"),c=n.n(o),_={components:{NetPwUser:n("Ra9V").a},props:["member_code"],data:function(){return{detaii:null}},mounted:function(){var e=this;return c()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:case"end":return t.stop()}},t,e)}))()},methods:{_name:function(e){if("203001"==e.member_code)return e.username;var t=e.acf;return t?(t.up_first_name?t.up_first_name:"")+" "+(t.up_last_name?t.up_last_name:""):""},insert_user:function(e){var t=this;return c()(i.a.mark(function n(){var s,r,a,o;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=e.sponsor_id,r=e.enroller_id,n.next=4,t._fetching(s);case 4:return a=n.sent,n.next=7,t._fetching(r);case 7:return(o=n.sent)&&(e.sponsor=a,e.enroller=o),n.abrupt("return",e);case 10:case"end":return n.stop()}},n,t)}))()},init:function(){var e=this;return c()(i.a.mark(function t(){var n,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.member_code){t.next=11;break}return e.$emit("start"),t.next=4,e._fetching(e.member_code);case 4:if(!(n=t.sent)){t.next=11;break}return t.next=8,e.insert_user(n);case 8:(n=t.sent)&&((s=n).sponsor_name=e._name(s.sponsor),s.enroller_name=e._name(s.enroller),e.detaii=r()(s,s.acf)),e.$emit("data",e.detaii);case 11:case"end":return t.stop()}},t,e)}))()},_fetching:function(e){var t=this;return c()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.npuREF.user_detaii({member_code:e});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n,t)}))()}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("net-pw-user",{ref:"npuREF"})],1)},staticRenderFns:[]};var d=n("VU/8")(_,u,!1,function(e){n("BpmD")},null,null);t.a=d.exports}});
//# sourceMappingURL=9.b64a0a3fb7738e5fb201.js.map