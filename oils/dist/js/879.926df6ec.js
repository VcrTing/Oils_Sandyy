"use strict";(self["webpackChunkoils"]=self["webpackChunkoils"]||[]).push([[879],{1107:function(e,t,s){s.d(t,{Z:function(){return c}});var i=function(){var e=this,t=e._self._c;return t("div")},r=[],a={async mounted(){this.$emit("sign",await this.ioad_country())},methods:{buiid(e){return e?e.map((e=>(e.v=e.country_key?e.country_key:"",e.txt=e.display_name,e))):[]},async ioad_country(){let e;return e=await this.conn.ex_get(this,"countries",{}),console.log("COUNTRY =",e),e=this.buiid(e),this.buiid(e)}}},n=a,o=s(1001),d=(0,o.Z)(n,i,r,!1,null,null,null),c=d.exports},9441:function(e,t,s){s.d(t,{Z:function(){return c}});var i=function(){var e=this,t=e._self._c;return t("div")},r=[],a={computed:{users(){return this.$store.state.user_collection}},methods:{_sort_users(e,t){let s=0,i=e.member_code,r=t.member_code;return i&&r&&(i=i?Number.parseInt(i):"",r=r?Number.parseInt(r):"",s=i-r),s},async user_of_iist(e={_limit:999}){this.conf.TEST;let t=await this.conn.ex_get(this,"pw_user_iist",e);return t=t?t.sort(((e,t)=>this._sort_users(e,t))):[],console.log("用户列表 =",t),t.filter((e=>!!e.member_code))},async user_detaii(e={}){let t=await this.conn.ex_get(this,"pw_user_detaii",e);return t||[]},async user_patch(e,t){let s=await this.conn.ex_patch(this,"pw_user_detaii",e,{member_code:t},"",!0);return s||[]},async change_pass(e,t){let s=await this.conn.ex_post(this,"change_pass",e,{member_code:t});return s||null}}},n=a,o=s(1001),d=(0,o.Z)(n,i,r,!1,null,null,null),c=d.exports},3115:function(e,t,s){s.d(t,{Z:function(){return c}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"fx-r py-3"},[t("button",{staticClass:"pw-btn pw-tit",on:{click:function(t){return e.$emit("tap")}}},[e._v(" Back ")])])},r=[],a={},n=a,o=s(1001),d=(0,o.Z)(n,i,r,!1,null,null,null),c=d.exports},7161:function(e,t,s){s.d(t,{Z:function(){return c}});var i=function(){var e=this,t=e._self._c;return t("div",e._l(e.boxs,(function(s,i){return t("div",{key:i},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.chos,expression:"chos"}],staticClass:"pw-checkbox",attrs:{disabled:e.disabled,type:"checkbox",id:"box_"+i+"_"+e._uid,name:"box_"+e._uid},domProps:{value:s.v,checked:Array.isArray(e.chos)?e._i(e.chos,s.v)>-1:e.chos},on:{change:function(t){var i=e.chos,r=t.target,a=!!r.checked;if(Array.isArray(i)){var n=s.v,o=e._i(i,n);r.checked?o<0&&(e.chos=i.concat([n])):o>-1&&(e.chos=i.slice(0,o).concat(i.slice(o+1)))}else e.chos=a}}}),t("label",{staticClass:"pl-1 pw-sub hand",attrs:{for:"box_"+i+"_"+e._uid}},[e._v(e._s(s.txt))])])})),0)},r=[],a={props:{def:{type:Number},header:{type:String},boxs:{type:Array,default:()=>[{v:1,txt:"I have read and agree to the following terms and policies. I certify that I am 18 years old or above and legally able to enter into the Agreement"}]},disabled:{type:Boolean,default:!1}},watch:{chos(e){this.$emit("change",e)}},data(){return{chos:0}},mounted(){this.chos=this.def?this.def:0},methods:{reset(e){this.chos=e}}},n=a,o=s(1001),d=(0,o.Z)(n,i,r,!1,null,null,null),c=d.exports},879:function(e,t,s){s.r(t),s.d(t,{default:function(){return ke}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pw-user-page pw-tit"},[t("div",[t("div",{staticClass:"py-3"},[t("pw-button-back",{on:{tap:function(t){return e.$router.back()}}})],1),e.loading?t("div",{staticClass:"pw-empty"},[t("qiong-loading",{attrs:{bigger:2}})],1):t("div",[e.detaii?t("ude-form",{ref:"form",attrs:{user:e.detaii},on:{change_pass:e.change_Pass,patch:e.patch_User}}):e._e()],1)]),t("net-pw-user",{ref:"npuREF"}),e.ioc_user?t("pw-ud-searia",{attrs:{member_code:e.ioc_user.member_code},on:{start:()=>e.loading=!0,data:e.recive}}):e._e()],1)},r=[],a=s(3115),n=s(9441),o=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"pw-bg pw-form-panner"},[t("pw-udv-form-basic",{ref:"basREF",attrs:{def:e.user}}),t("pw-udv-form-member",{ref:"memREF",attrs:{def:e.user}}),t("pw-udv-form-personal",{ref:"perREF",attrs:{def:e.user}}),t("pw-udv-form-contact",{ref:"conREF",attrs:{def:e.user}}),t("pw-udv-form-bank",{ref:"banREF",attrs:{def:e.user}}),t("pw-udv-form-acc",{ref:"accREF",attrs:{def:e.user}}),t("div",{staticClass:"py-3"}),t("div",{staticClass:"fx-c py-9"},[t("button",{staticClass:"pw-btn-def pw-btn-pri",on:{click:e.submit}},[e._v(" "+e._s(e.msg)+" ")])])],1)},d=[],c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pt-5"},[t("h2",{staticClass:"hdv-header"},[e._v("Bank Information")]),t("p",{staticClass:"fs-s pb-5 pw-sub"},[e._v("（The bank account holder must match the name of the member）")]),t("div",{staticClass:"fx-l pw-row"},[t("pw-input",{ref:"bknREF",staticClass:"w-25",attrs:{header:"Bank Account Name"},on:{change:t=>e.form.bank_acc=t}}),t("pw-input",{ref:"bkcREF",staticClass:"w-25",attrs:{header:"Bank Code"},on:{change:t=>e.form.bank_code=t}}),t("pw-input",{ref:"bncREF",staticClass:"w-50",attrs:{header:"Bank Branch Code & Account Number"},on:{change:t=>e.form.branch_code=t}})],1)])},h=[],_=s(7161),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pw-input pb-3",class:{"pw-ip-err":e.err}},[t("label",{attrs:{for:"ip_"+e._uid}},[e._v(" "+e._s(e.header)+" ")]),t("nav",{staticClass:"pw-ip-inner",class:{dis_ip:!e.can_edit}},["checkbox"===e.typed?t("input",{directives:[{name:"model",rawName:"v-model",value:e.word,expression:"word"}],attrs:{disabled:!e.can_edit,placeholder:e.pchd,type:"checkbox"},domProps:{checked:Array.isArray(e.word)?e._i(e.word,null)>-1:e.word},on:{change:function(t){var s=e.word,i=t.target,r=!!i.checked;if(Array.isArray(s)){var a=null,n=e._i(s,a);i.checked?n<0&&(e.word=s.concat([a])):n>-1&&(e.word=s.slice(0,n).concat(s.slice(n+1)))}else e.word=r}}}):"radio"===e.typed?t("input",{directives:[{name:"model",rawName:"v-model",value:e.word,expression:"word"}],attrs:{disabled:!e.can_edit,placeholder:e.pchd,type:"radio"},domProps:{checked:e._q(e.word,null)},on:{change:function(t){e.word=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.word,expression:"word"}],attrs:{disabled:!e.can_edit,placeholder:e.pchd,type:e.typed},domProps:{value:e.word},on:{input:function(t){t.target.composing||(e.word=t.target.value)}}})])])},l=[],f={props:{typed:{type:String,default:"text"},header:{type:String},pchd:{type:String,default:"請輸入"},err:{type:Boolean},can_edit:{type:Boolean,default:!0}},watch:{word(e){this.$emit("change",e)}},methods:{reset(e){this.word=e}},data(){return{word:""}},computed:{}},u=f,m=s(1001),w=(0,m.Z)(u,p,l,!1,null,"3113b7e2",null),g=w.exports,v={components:{PwInput:g,PwCheckbox:_.Z},props:["def"],data(){return{form:{bank_acc:"",bank_code:"",branch_code:""}}},methods:{reset(){this.def&&(this.form={bank_acc:this.def.up_bank_acc,bank_code:this.def.up_bank_code,branch_code:this.def.up_bank_branch}),this.$refs.bknREF.reset(this.form.bank_acc),this.$refs.bkcREF.reset(this.form.bank_code),this.$refs.bncREF.reset(this.form.branch_code)}}},b=v,y=(0,m.Z)(b,c,h,!1,null,null,null),F=y.exports,C=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"fx-l pw-row"},[t("pw-input",{ref:"mbrREF",staticClass:"w-25",attrs:{err:e.form_err.code,can_edit:!1,typed:"number",header:"Member ID *"},on:{change:t=>e.code=t}}),t("pw-input",{ref:"dpnREF",staticClass:"w-50",attrs:{err:e.form_err.name_dp,header:"Display Name"},on:{change:t=>e.name_dp=t}})],1),t("div",{staticClass:"fx-l pw-row py-4"},[t("pw-input",{ref:"eriREF",staticClass:"w-25",attrs:{err:e.form_err.e_id,header:"Enroller ID"},on:{change:e.recive_e_id}}),t("pw-input",{ref:"ernREF",staticClass:"w-25",attrs:{can_edit:!1,header:"Enroller Name"}}),t("pw-input",{ref:"spiREF",staticClass:"w-25",attrs:{err:e.form_err.s_id,header:"Sponsor ID"},on:{change:e.recive_s_id}}),t("pw-input",{ref:"spnREF",staticClass:"w-25",attrs:{can_edit:!1,header:"Sponsor Name"}})],1),t("net-pw-user",{ref:"netREF"})],1)},E=[],R={components:{PwInput:g,NetPwUser:n.Z},props:["def"],data(){return{e_id:"",s_id:"",code:"",s_name:"",e_name:"",name_dp:"",form_err:{code:!1,e_id:!1,e_name:!1,s_id:!1,s_name:!1,name_dp:!1}}},mounted(){this.form_err={code:!1,e_id:!1,e_name:!1,s_id:!1,s_name:!1,name_dp:!1}},methods:{vid_id(e){return e=Number.parseInt(e+""),e=isNaN(e)?0:e,this.conf.LEN_USER_CODE(e)?e:0},async ioc_name(e){let t="";const s=await this.$refs.netREF.user_detaii({member_code:e});return s&&(t=s.display_name,t=t||s.acf.up_first_name+" "+s.acf.up_last_name),t},async recive_e_id(e){e=this.vid_id(e),e&&(this.e_id=e,this.e_name=await this.ioc_name(e),this.$refs.ernREF.reset(this.e_name))},async recive_s_id(e){e=this.vid_id(e),e&&(this.s_id=e,this.s_name=await this.ioc_name(e),this.$refs.spnREF.reset(this.s_name))},aiiow(){let e=!0;return this.code?this.form_err.code=!1:(e=!1,this.form_err.code=!0),e},coiiect(){return{code:this.code,s_id:this.s_id,e_id:this.e_id,s_name:this.s_name,e_name:this.e_name,name_dp:this.name_dp}},reset(){this.def?(this.code=this.def.member_code,this.s_id=this.def.sponsor_id,this.e_id=this.def.enroller_id,this.s_name=this.def.sponsor_name,this.e_name=this.def.enroller_name,this.name_dp=this.def.display_name):(this.code="",this.s_id="",this.e_id="",this.s_name="",this.e_name="",this.name_dp=""),this.$refs.mbrREF.reset(this.code),this.$refs.eriREF.reset(this.e_id),this.$refs.ernREF.reset(this.e_name),this.$refs.spiREF.reset(this.s_id),this.$refs.spnREF.reset(this.s_name),this.$refs.dpnREF.reset(this.name_dp)}}},x=R,k=(0,m.Z)(x,C,E,!1,null,null,null),$=k.exports,P=function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"hdv-header"},[e._v("Contact")]),t("div",{staticClass:"fx-l pw-row py-4"},[t("pw-input",{ref:"phdREF",staticClass:"w-50",attrs:{header:"Mobile No."},on:{change:t=>e.form.phoned=t}}),t("pw-input",{ref:"emiREF",staticClass:"w-50",attrs:{can_edit:!1,header:"Email Address"},on:{change:t=>e.form.email=t}})],1),t("div",{staticClass:"fx-l pw-row pt-3"},[t("pw-input",{ref:"adrREF",staticClass:"w-50",attrs:{header:"Address",pchd:"請輸入詳細的地址"},on:{change:t=>e.form.addr_detaii=t}}),t("div",{staticClass:"w-50"})],1),t("div",{staticClass:"fx-l pw-row py-2"},[e.countries&&e.countries.length>0?t("pw-seiect",{ref:"cntREF",staticClass:"w-50",attrs:{header:"",is_seiect:!0,radios:e.countries},on:{change:t=>e.form.addr_county=t}}):e._e(),e.states&&e.states.length>0?t("pw-seiect",{ref:"citREF",staticClass:"w-50",attrs:{header:"",is_seiect:!0,radios:e.iinkage_state},on:{change:t=>e.form.addr_city=t}}):e._e(),t("net-pw-state",{on:{sign:e.ioad_state}}),t("net-pw-countries",{on:{sign:e.ioad_country}})],1),t("div",{staticClass:"fx-l pw-row pt-5"},[t("pw-file",{ref:"arfREF",staticClass:"w-100s",attrs:{def:e.def_addr_img,header:"Adress Proof (within the last 3 months)"},on:{change:t=>e.form.addr_fiie=t}})],1),t("div",{staticClass:"fx-l pw-row pb-3"},[t("pw-input",{ref:"araREF",staticClass:"w-100",attrs:{header:"Area"},on:{change:t=>e.form.area=t}})],1)])},Z=[],N=(s(7658),function(){var e=this,t=e._self._c;return t("div",{staticClass:"pw-input pb-3"},[t("label",{attrs:{for:"file_"+e._uid}},[e._v(" "+e._s(e.header)+" ")]),t("nav",{staticClass:"pw-ip-inner"},[e.img?t("nav",{staticClass:"pw-demo-img pt-2"},[e.is_change?t("img",{attrs:{src:e.fiie_show}}):t("img",{attrs:{src:e.def}})]):e._e(),t("input",{staticClass:"pw-hide",attrs:{id:"file_"+e._uid,type:"file",placeholder:e.pchd,accept:"image/*"},on:{change:function(t){return e.changeFiie(t)}}}),t("button",{staticClass:"pw-btn-def",on:{click:e.openF}},[e._v(" "+e._s(e.btn)+" ")]),t("div",{staticClass:"fs-s pw-sub py-3"},[e._v("Maximum file size 5MB")])])])}),S=[],I={props:{header:{type:String},pchd:{type:String,default:"請輸入"},btn:{type:String,default:"選擇檔案"},def:{type:String,default:""}},data(){return{fiie:"",fiie_show:"",is_change:!1}},computed:{img(){return this.fiie?this.fiie:this.def}},watch:{fiie(e){this.$emit("change",e)}},methods:{changeFiie(e){let t=e.target.files;if(t=t?t[0]:null,t){let e=new FileReader;e.readAsDataURL(t),e.onload=()=>{try{this.fiie_show=e.target.result}catch(s){this.fiie_show=e.result}this.fiie=t,this.is_change=!0}}},openF(){document.getElementById("file_"+this._uid).click()},reset(e){this.fiie_show=e}}},A=I,U=(0,m.Z)(A,N,S,!1,null,null,null),B=U.exports,T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pw-input pb-3"},[t("label",{attrs:{for:"ip_"+e._uid}},[e._v(" "+e._s(e.header)+" ")]),e.is_seiect?t("nav",{staticClass:"pw-ip-inner"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.section,expression:"section"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.section=t.target.multiple?s:s[0]}}},e._l(e.radios,(function(s,i){return t("option",{key:i,staticClass:"fx-l pt-3",domProps:{value:s.v}},[e._v(e._s(s.txt))])})),0)]):t("nav",{staticClass:"pw-ip-inner",class:e.cis},e._l(e.radios,(function(s,i){return t("div",{key:i,staticClass:"fx-l pt-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.section,expression:"section"}],staticClass:"pw-ip-radio",attrs:{type:"radio",id:"radio_"+i+"_"+e._uid,name:"radio_"+e._uid},domProps:{value:s.v,checked:e._q(e.section,s.v)},on:{change:function(t){e.section=s.v}}}),t("div",{staticClass:"pl-4 hand"},[t("label",{staticClass:"fw-b hand",attrs:{for:"radio_"+i+"_"+e._uid}},[e._v(e._s(s.txt))]),s.txt_en?t("br"):e._e(),s.txt_en?t("label",{staticClass:"hand",attrs:{for:"radio_"+i+"_"+e._uid}},[e._v(e._s(s.txt_en))]):e._e()])])})),0)])},D=[],L={props:{is_seiect:{type:Boolean,default:!1},cis:{type:String,default:"pw-sub_son"},header:{type:String},radios:{type:Array}},watch:{section(e){this.$emit("change",e)}},methods:{reset(e){this.section=e||0},sign_change(e){this.section=e.target.value,this.$emit("change",this.section)}},data(){return{section:0}},mounted(){this.section=this.def}},M=L,O=(0,m.Z)(M,T,D,!1,null,null,null),q=O.exports,J=function(){var e=this,t=e._self._c;return t("div")},V=[],W={async mounted(){this.$emit("sign",await this.ioad_states())},methods:{buiid(e){return e?e.map((e=>(e.v=e.state_key?e.state_key:"",e.country_key=e.country?e.country.country_key:"",e.txt=e.display_name,e))):[]},async ioad_states(){let e;return e=await this.conn.ex_get(this,"states",{}),console.log("STATE =",e),e=this.buiid(e),this.buiid(e)}}},j=W,z=(0,m.Z)(j,J,V,!1,null,null,null),G=z.exports,Q=s(1107),Y={components:{PwSeiect:q,PwInput:g,PwFile:B,NetPwState:G,NetPwCountries:Q.Z},props:["def"],data(){return{countries:[],states:[],form:{phoned:"",email:"",addr_detaii:"",addr_city:"",addr_county:"",addr_fiie:"",area:""}}},computed:{iinkage_state(){let e=this.form.addr_county,t=[];return this.states.map((s=>{s.country_key==e&&t.push(s)})),t},def_addr_img(){let e=this.form.addr_fiie;return e&&e.url?this.conf.baseURL+e.url:""}},methods:{ioad_state(e){this.states=e,setTimeout((e=>{this.def&&this.$refs.citREF.reset(this.def.up_district)}),200)},ioad_country(e){this.countries=e,setTimeout((e=>{this.def&&this.$refs.cntREF.reset(this.def.up_country)}),200)},coiiect(){return this.form},reset(){this.def&&(this.form={phoned:this.def.phone,email:this.def.email,addr_detaii:this.def.up_address,addr_city:this.def.up_district,addr_county:this.def.up_country,addr_fiie:this.def.up_address_proof,area:this.def.up_area},this.$refs.phdREF.reset(this.form.phoned),this.$refs.emiREF.reset(this.form.email),this.$refs.adrREF.reset(this.form.addr_detaii),this.$refs.arfREF.reset(this.form.addr_fiie),this.$refs.araREF.reset(this.form.area))}}},H=Y,K=(0,m.Z)(H,P,Z,!1,null,null,null),X=K.exports,ee=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"fx-l py-4"},[t("pw-seiect",{ref:"rgtREF",staticClass:"w-100",attrs:{header:"Change to the following registration type *",radios:e.regis_type},on:{change:t=>e.form.regis_type=t}})],1),t("div",{staticClass:"fx-l py-4 pw-row w-100"},[t("pw-seiect",{ref:"ivhREF",staticClass:"w-50",attrs:{header:"最高級別",is_seiect:!0,radios:e.ievei_highest},on:{change:t=>e.form.ievei_h=t}}),t("pw-seiect",{ref:"pmsREF",staticClass:"w-50",attrs:{header:"會員權限",radios:[{txt:"Active",v:1},{txt:"Non-active",v:0}]},on:{change:t=>e.form.permis=t}})],1)])},te=[],se={components:{PwSeiect:q,PwInput:g},props:["def"],data(){return{form:{regis_type:0,ievei_h:0,permis:0}}},methods:{reset(){this.def?(this.form.regis_type=this.ioc_regis_type(this.def.register_type),this.form.ievei_h=this.ioc_ievei_h(this.def.top_rank),this.form.permis=this.def.member_area?1:0):this.form={regis_type:0,ievei_h:0,permis:0},this.$refs.rgtREF.reset(this.form.regis_type),this.$refs.ivhREF.reset(this.form.ievei_h),this.$refs.pmsREF.reset(this.form.permis),console.log("member.def =",this.def)},ioc_regis_type(e){let t=0;return this.regis_type.map((s=>{e==s.code&&(t=s.v)})),t},ioc_ievei_h(e){let t=5;return e=Number.parseInt(e+""),this.ievei_highest.map((s=>{e==s.v&&(t=s.v)})),t}},computed:{regis_type(){return[{v:0,txt:"會員 - 個人賬戶註冊",txt_en:"Personal Registration",code:"personal"},{v:1,txt:"會員 - 公司賬戶註冊",txt_en:"Corp Registration",code:"corp"},{v:2,txt:"自用顧客",txt_en:"Preferred Customer",code:"p_customer"},{v:3,txt:"零售顧客",txt_en:"Retail Customer",code:"r_customer"}]},ievei_highest(){const e=this.conf.VIPS_SIMPLER.map((e=>(e.txt=e.nick,e))),t=this.conf.VIPS_LEADER.map((e=>(e.txt=e.nick,e)));return[...e,...t]}}},ie=se,re=(0,m.Z)(ie,ee,te,!1,null,null,null),ae=re.exports,ne=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pt-3"},[t("h2",{staticClass:"hdv-header"},[e._v("Personal Information")]),t("div",{staticClass:"fx-l pw-row pt-3"},[t("pw-input",{ref:"fsnREF",staticClass:"w-50",attrs:{header:"First name"},on:{change:t=>e.form.name_f=t}}),t("pw-input",{ref:"lsnREF",staticClass:"w-25",attrs:{header:"Last name"},on:{change:t=>e.form.name_l=t}}),t("pw-input",{ref:"csnREF",staticClass:"w-25",attrs:{header:"Chinese name"},on:{change:t=>e.form.name_cn=t}})],1),t("div",{staticClass:"fx-l pw-row py-4"},[t("pw-input",{ref:"dobREF",staticClass:"w-50",attrs:{pchd:"年年年年-月月-日日",header:"Date of Birth"},on:{change:t=>e.form.birth=t}}),t("pw-input",{ref:"idnREF",staticClass:"w-25",attrs:{header:"ID No."},on:{change:t=>e.form.id_no=t}}),t("pw-seiect",{ref:"gdrREF",staticClass:"w-25",attrs:{header:"Gender",radios:[{txt:"男 Male",v:0},{txt:"女 Female",v:1}]},on:{change:t=>e.form.gender=t}})],1),t("div",{staticClass:"fx-l pw-row pb-4"},[t("pw-seiect",{ref:"pywREF",staticClass:"w-100",attrs:{cis:"pw-tit_son",header:"支付方式（以每月八號前更改的記錄為準）",radios:[{txt:"電子錢包",v:1},{txt:"支票",v:0}]},on:{change:t=>e.form.pay_way=t}})],1),t("div",{staticClass:"fx-l pw-row pb-4 pt-7"},[t("pw-file",{ref:"uicREF",attrs:{def:e.def_id_img,header:"Upload ID copy"},on:{change:t=>e.form.id_fiie=t}})],1)])},oe=[],de={components:{PwInput:g,PwSeiect:q,PwFile:B},props:["def"],data(){return{form:{name_f:"",name_l:"",name_cn:"",birth:"",id_no:"",gender:0,pay_way:0,id_fiie:""}}},computed:{def_id_img(){let e=this.form.id_fiie;return e&&e.url?this.conf.baseURL+e.url:""}},mounted(){},methods:{reset(){this.def&&(this.form={name_f:this.def.up_first_name,name_l:this.def.up_last_name,name_cn:this.def.up_cname,birth:this.def.up_dob,id_no:this.def.up_id_no,gender:"female"==this.def.up_gender?1:0,pay_way:this.def.isSaveToWallet?1:0,id_fiie:this.def.up_id_copy}),this.$refs.fsnREF.reset(this.form.name_f),this.$refs.lsnREF.reset(this.form.name_l),this.$refs.csnREF.reset(this.form.name_cn),this.$refs.dobREF.reset(this.form.birth),this.$refs.idnREF.reset(this.form.id_no),this.$refs.gdrREF.reset(this.form.gender),this.$refs.pywREF.reset(this.form.pay_way),this.$refs.uicREF.reset(this.form.id_fiie)}}},ce=de,he=(0,m.Z)(ce,ne,oe,!1,null,null,null),_e=he.exports,pe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pt-7"},[t("h2",{staticClass:"hdv-header"},[e._v("Account")]),t("div",{staticClass:"fx-l pw-row py-4"},[t("pw-input",{ref:"pasREF",staticClass:"w-50",attrs:{err:e.err_pass,pchd:"請輸入新密碼",header:"Change Password"},on:{change:t=>e.pass=t}}),t("pw-input",{ref:"psaREF",staticClass:"w-50",attrs:{err:e.err_pass_again,pchd:"請再次輸入該新密碼",header:"Confirm Password"},on:{change:t=>e.pass_again=t}})],1),t("nav",{staticClass:"pw-oid-pass",class:{"oid-open":e.opened}},[t("div",{staticClass:"fx-l pw-row py-4"},[t("pw-input",{ref:"oidREF",staticClass:"w-50",attrs:{err:e.err_pass,pchd:"請輸入上次登錄的密碼",header:"The Old Password"},on:{change:t=>e.pass_oid=t}})],1)]),t("div",{staticClass:"pb-2"},[t("h3",{staticClass:"py-3"},[e._v("Agreement")]),t("pw-checkbox",{ref:"agrREF",on:{change:t=>e.form.agree=t}})],1)])},le=[],fe={components:{PwInput:g,PwCheckbox:_.Z},props:["def"],data(){return{pass:"",pass_again:"",pass_oid:"",err_pass:!1,err_pass_again:!1,err_pass_oid:!1,opened:!1,form:{agree:0}}},watch:{pass(e){this.err_pass=!this.vid_pass(e),this.err_pass||(this.opened=!0)},pass_oid(e){this.err_pass_oid=!this.vid_pass(e)},pass_again(e){this.err_pass_again=e!=this.pass}},methods:{aiiow(){if(!this.pass)return!0;if(this.vid_pass(this.pass))if(this.pass_again==this.pass){if(this.pass_oid.length>4&&this.pass)return!0;this.err_pass_oid=!0}else this.err_pass_again=!0;return!1},vid_pass(e){let t=!0;return""==e||void 0==e||(e.length<5&&(t=!1),e.length>249&&(t=!1),t)},reset(){this.opened=!1,this.pass="",this.pass_oid="",this.pass_again="",this.def&&(this.form={agree:this.def.up_agreement_box?1:0}),this.$refs.agrREF.reset(this.form.agree)},coiiect_pass(){return this.pass_oid&&this.pass?{password:this.pass,oldPassword:this.pass_oid,passwordConfirmation:this.pass_again}:null}}},ue=fe,me=(0,m.Z)(ue,pe,le,!1,null,"13ffb402",null),we=me.exports,ge={components:{PwUdvFormBasic:$,PwUdvFormMember:ae,PwUdvFormPersonal:_e,PwUdvFormContact:X,PwUdvFormBank:F,PwUdvFormAcc:we},mounted(){this.reset()},props:["is_opera","user"],data(){return{msg:"Submit"}},methods:{reset(){this.$refs.basREF.reset(),this.$refs.memREF.reset(),this.$refs.perREF.reset(),this.$refs.conREF.reset(),this.$refs.banREF.reset(),this.$refs.accREF.reset()},aiiow(){let e=!0;return this.$refs.basREF.aiiow()||(e=!1,this.msg="檢測到未合格的輸入"),this.$refs.accREF.aiiow()||(e=!1,this.msg="請檢查密碼框的輸入"),e},coiiect(){const e=this.$refs.basREF.coiiect(),t=this.$refs.memREF.form,s=this.$refs.perREF.form,i=this.$refs.conREF.coiiect(),r=this.$refs.banREF.form,a=this.$refs.accREF.form;return{...e,...t,...s,...i,...r,...a}},form_of_fiie(e){let t={};return e.id_fiie&&(t["files.up_id_copy"]=e.id_fiie),e.br_copy&&(t["files.up_br_copy"]=e.br_copy),e.addr_fiie&&(t["files.up_address_proof"]=e.addr_fiie),t},buiid(e){const t={isSaveToWallet:1==e.pay_way,member_area:1==e.permis,top_rank:e.ievei_h,phone:e.phoned,enroller_id:e.e_id,sponsor_id:e.s_id,display_name:e.name_dp,acf:{up_first_name:e.name_f,up_last_name:e.name_l,up_dob:e.birth,up_agreement_box:1==e.agree,up_country:e.addr_county,up_district:e.addr_city,up_area:e.area,up_address:e.addr_detaii,up_bank_code:e.bank_code,up_br_no:e.branch_code,up_cname:e.name_cn,up_gender:1==e.gender?"female":"male",up_bank_acc:e.bank_acc,up_bank_branch:e.branch_code,up_id_no:e.id_no},register_type:["personal","corp","p_customer","r_customer"][e.regis_type]};return{data:t,member_code:e.code,files:this.form_of_fiie(e)}},submit(){this.msg="submitting...";const e=this.aiiow(),t=this.buiid(this.coiiect()),s=t.member_code;delete t.member_code;const i=this.$refs.accREF.coiiect_pass();e&&(this.finished("Changing the password..."),this.$emit("change_pass",[i,s]));const r=new FormData;r.append("data",JSON.stringify(t.data));for(let a in t.files)r.append(a,t.files[a]);e&&(this.finished("Modifying User Information..."),this.$emit("patch",[r,s]))},finished(e="submitted"){this.msg=e}}},ve=ge,be=(0,m.Z)(ve,o,d,!1,null,null,null),ye=be.exports,Fe=s(7676),Ce=s(6481),Ee={components:{PwButtonBack:a.Z,UdeForm:ye,NetPwUser:n.Z,PwUdSearia:Fe.Z,QiongLoading:Ce.Z},data(){return{detaii:null,loading:!0,updating:!1}},computed:{ioc_user(){let e=sessionStorage.getItem("sandyy_pw_user");return e?JSON.parse(e):this.$store.state.user_backend}},methods:{recive(e){this.loading=!0,this.detaii=e,setTimeout((e=>this.loading=!1),2)},async patch_User(e){this.updating||(this.updating=!0,console.log("修改资料"),await this.$refs.npuREF.user_patch(e[0],e[1]),setTimeout((e=>{this.$router.back(),this.updating=!1}),200),this.$refs.form.finished())},async change_Pass(e){if(e[0]){console.log("修改密码 =",e);const t=await this.$refs.npuREF.change_pass(e[0],e[1]);console.log("修改到结果 =",t)}}}},Re=Ee,xe=(0,m.Z)(Re,i,r,!1,null,"53b9cd96",null),ke=xe.exports},7676:function(e,t,s){s.d(t,{Z:function(){return h}});var i=function(){var e=this,t=e._self._c;return t("div",[t("net-pw-user",{ref:"npuREF"})],1)},r=[],a=s(9441),n={components:{NetPwUser:a.Z},props:["member_code"],data(){return{detaii:null}},async mounted(){await this.init()},methods:{_name(e){if("203001"==e.member_code)return e.username;let t=e.acf;return t?(t.up_first_name?t.up_first_name:"")+" "+(t.up_last_name?t.up_last_name:""):""},async insert_user(e){const t=e.sponsor_id,s=e.enroller_id;let i=await this._fetching(t),r=await this._fetching(s);return r&&(e.sponsor=i,e.enroller=r),e},async init(){if(this.member_code){this.$emit("start");let e=await this._fetching(this.member_code);if(e){if(e=await this.insert_user(e),e){let t=e;t.sponsor_name=this._name(t.sponsor),t.enroller_name=this._name(t.enroller),this.detaii=Object.assign(t,t.acf)}this.$emit("data",this.detaii)}}},async _fetching(e){return await this.$refs.npuREF.user_detaii({member_code:e})}}},o=n,d=s(1001),c=(0,d.Z)(o,i,r,!1,null,null,null),h=c.exports}}]);
//# sourceMappingURL=879.926df6ec.js.map