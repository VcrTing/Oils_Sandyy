webpackJsonp([20],{"1e4n":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("gBtx"),r=n.n(i),a=n("BO1k"),o=n.n(a),s=n("//Fk"),u=n.n(s),c=n("Xxa5"),l=n.n(c),d=n("exGp"),m=n.n(d),_=n("gSmO"),p=n("T/Tv"),h=n("AE2U"),f=n("KMdi"),v=n("yGir"),b=n("T5vK"),g=n("zDkF"),w={name:"",props:{ipv:{type:Number}},data:function(){return{}},computed:{up_comp:function(){return this.ipv>=_.a.conf.USER_PV_LIMIT}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.up_comp?n("div",{staticClass:"btn-up_comp"},[n("v-icon",{attrs:{size:"14"}},[t._v("mdi-check")]),t._v("\n        "+t._s(t.$t("STATUS.yes"))+"\n    ")],1):n("div",{staticClass:"btn-up_comp btn-up_comp_no"},[n("v-icon",{attrs:{size:"14"}},[t._v("mdi-window-close")]),t._v("\n        "+t._s(t.$t("STATUS.no"))+"\n    ")],1)])},staticRenderFns:[]};var q=n("VU/8")(w,y,!1,function(t){n("ZqLT")},"data-v-66a83c74",null).exports,V=n("jOJ2"),x=n("w+u4"),C={components:{LevelViewing:V.a,QiongIconFlat:v.a,QiongIconInset:b.a,QiongEmpty:g.a,UpCompViewing:q,CountAddAnime:f.a,LeaderTagViewing:x.a},props:{childs:{type:Array}},name:"",data:function(){return{}},computed:{},methods:{openCenter:function(t){this.$router.push({path:"/home/bonus/active_layer/",query:{member_code:t.member_code}})}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.childs.length>0?n("div",{},t._l(t.childs,function(e,i){return n("div",{key:i,staticClass:"qiong-td qiong-line-hight-20",class:{"qiong-td-zebra":e.index%2==0}},[n("div",{staticClass:"qiong-wide-13 pl-7"},[t._v(t._s(e.member_code))]),t._v(" "),n("div",{staticClass:"qiong-wide-30",class:{"txt-leader":e.bonu_period.Rank>t.conf.RANK_LEAD}},[t._v(t._s(e.display_name))]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[n("level-viewing",{staticClass:"d-inline",class:{"txt-leader":e.bonu_period.Rank>t.conf.RANK_LEAD},attrs:{item:e.vip.name+"_"+e.vip.star}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-1 pr-0"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-6 pr-0"},[t._v(t._s(e.bonu_period.team_contribution.order_pv))]),t._v(" "),n("div",{staticClass:"qiong-wide-9 text-center pr-0"},[t._v(t._s(e.bonu_period.team_contribution.payment_level))]),t._v(" "),n("div",{staticClass:"qiong-wide-10 text-center pr-0"},[n("up-comp-viewing",{attrs:{ipv:e.bonu_period.team_contribution.order_pv}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-10 text-center pr-0"},[t._v(t._s(e.bonu_period.team_contribution.bonus_percentage))]),t._v(" "),n("div",{staticClass:"qiong-wide-1 pr-0"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-7 pr-0"},[e.bonu_period.team_contribution.bonus_pv?n("div",[n("span",[t._v("$ ")]),t._v("\n                "+t._s(t.view.price_view(e.bonu_period.team_contribution.bonus_pv))+"\n            ")]):t._e()]),t._v(" "),n("div",{staticClass:"qiong-wide-4 pr-0"},[n("qiong-icon-inset",{attrs:{arg:e},on:{done_Father:t.openCenter}})],1)])}),0):n("qiong-empty")},staticRenderFns:[]};var A=n("VU/8")(C,F,!1,function(t){n("Zf0Z")},"data-v-a2d38794",null).exports,S={components:{SortFilterTrangle:n("/RRq").a},name:"",data:function(){return{}},methods:{resetSort:function(t){12!=t&&this.$refs.sortMemberCode.rest()},member_code_sort:function(t){this.$emit("sort_Father",t,12)}}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qiong-tr qiong-pb-7 qiong-txt-tr"},[n("div",{staticClass:"qiong-wide-13 pl-7"},[t._v(t._s(t.$t("USER.member_code"))+"\n        "),n("sort-filter-trangle",{ref:"sortMemberCode",on:{sort_Father:t.member_code_sort}})],1),t._v(" "),n("div",{staticClass:"qiong-wide-30"},[t._v(t._s(t.$t("USER.member_display_name")))]),t._v(" "),n("div",{staticClass:"qiong-wide-9"},[t._v(t._s(t.$t("USER.member_level")))]),t._v(" "),n("div",{staticClass:"qiong-wide-1"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-6"},[t._v(t._s(t.$t("USER.member_pv")))]),t._v(" "),n("div",{staticClass:"qiong-wide-9 text-center"},[t._v(t._s(t.$t("BONUS.PUBLIC.pay_index")))]),t._v(" "),n("div",{staticClass:"qiong-wide-10 text-center"},[t._v(t._s(t.$t("BONUS.PUBLIC.up_comp"))+"?")]),t._v(" "),n("div",{staticClass:"qiong-wide-10 text-center"},[t._v(t._s(t.$t("BONUS.PUBLIC.usd_ratio")))]),t._v(" "),n("div",{staticClass:"qiong-wide-1"},[t._v(" ")]),t._v(" "),n("div",{staticClass:"qiong-wide-11"},[t._v(t._s(t.$t("BONUS.PUBLIC.usd")))])])},staticRenderFns:[]};var $=n("VU/8")(S,T,!1,function(t){n("zfXr")},"data-v-6b23e2ea",null).exports,R=n("OhMI"),N=n("VxnQ"),M=n("oKCz"),U=n("TdNa"),L=n("IJBQ"),E=n("Cpv2"),O=n("kiio"),k=n("QeA+"),B=n("/LGW"),D=n("ubEC"),P=n("Um5R"),Q={components:{QiongHeader:p.a,QiongPagePanel:h.a,BonusTeamLayerTableHeader:$,BonusTeamLayerTable:A,QiongPanelElement:R.a,LocationMe:N.a,QiongLoading:M.a,QiongSubResult:U.a,MemberMsgWidget:L.a,CollectionReady:E.a,BonusLayout:O.a,BonuDownTrigger:k.a,QiongHeaderFilter:B.a,GoDownTrigger:D.a,QiongSpace:P.a},name:"",inject:["reload"],watch:{$route:function(t,e){e.query&&(this.init=!1,this.reload(),this.init=!0)}},data:function(){return{root:!1,init:!0,loading:!0,member_code:null,mine:null,child_num:0,childrens:null}},mounted:function(){var t=this;return m()(l.a.mark(function e(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},computed:{footer:function(){if(this.mine)return[{txt:this.$t("BONUS.NORMAL.usd_team_layer"),content:"$"+this.mine.bonu_period.OPV.toFixed(2)}]}},methods:{initMe:function(){var t=this;return m()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.valuation(),e.next=3,t.$refs.locaMe.locationMe_Async(t.member_code,"SPONSER");case 3:return t.mine=e.sent,t.init=!1,t.switchChidren(),e.next=8,t.numTeamLayer();case 8:case"end":return e.stop()}},e,t)}))()},valuation:function(){var t=this;this.root=!1,this.loading=!0,this.mine=null,this.child_num=0,this.childrens=[];var e=this.$route.query.member_code;e?(this.member_code=e,setTimeout(function(e){t.root=!0},300)):this.member_code=this.$store.state.user_backend.member_code},switchChidren:function(){var t=this,e=this.$store.state.user_sponsor;e&&_.a._build([this.mine],function(e){t.childrens.push(e)}),e&&(e=this.childrens.sort(function(t,e){return t.index-e.index}),this.childrens=e.filter(function(e){return e.member_code!=t.mine.member_code}))},numTeamLayer:function(){var t=this,e=this;return new u.a(function(n,i){var r=[],a=!0,s=!1,u=void 0;try{for(var c,l=o()(e.childrens);!(a=(c=l.next()).done);a=!0){var d=c.value,m=0,_=0;t.child_num+=1;var p=!1,h=!0,f=!1,v=void 0;try{for(var b,g=o()(e.mine.bonu_period.organisation_bonus);!(h=(b=g.next()).done);h=!0){var w=b.value;w.member_code==d.member_code&&(d.bonu_period.team_contribution=w,m=t.view.floatAdd(w.order_pv,m),_=t.view.floatAdd(w.bonus_pv,_),p=!0)}}catch(t){f=!0,v=t}finally{try{!h&&g.return&&g.return()}finally{if(f)throw v}}p?(d.bonu_period.team_contribution.order_pv=m,d.bonu_period.team_contribution.bonus_pv=_):d.bonu_period.team_contribution={bonus_percentage:"",bonus_pv:"",order_pv:0,order_uuid:"",payment_level:""},r.push(d)}}catch(t){s=!0,u=t}finally{try{!a&&l.return&&l.return()}finally{if(s)throw u}}e.childrens=r,setTimeout(function(){e.loading=!1},200),n(!0)})},sort_by_member_code:function(t){var e=this;return m()(l.a.mark(function n(){return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t>0)){n.next=4;break}e.childrens.sort(function(t,e){return r()(t.member_code)-r()(e.member_code)}),n.next=11;break;case 4:if(!(t<0)){n.next=8;break}e.childrens.sort(function(t,e){var n=r()(t.member_code);return r()(e.member_code)-n}),n.next=11;break;case 8:return e.switchChidren(),n.next=11,e.numTeamLayer();case 11:case"end":return n.stop()}},n,e)}))()},sort:function(t,e){var n=this;0==this.loading&&(this.loading=!0,this.$refs.tbHeader.resetSort(e),12==e&&this.sort_by_member_code(t),setTimeout(function(t){n.loading=!1},300))}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("bonus-layout",{attrs:{_root:t.root,_need_top:!t.root}},[t.init?t._e():n("member-msg-widget",{attrs:{_code:t.member_code}}),t._v(" "),n("qiong-space",{attrs:{space:"24px"}}),t._v(" "),n("qiong-header-filter",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("BONUS.NORMAL.usd_team_layer")))])]),t._v(" "),n("qiong-panel-element",{staticClass:"mobie-table",attrs:{need_space:!1}},[n("bonus-team-layer-table-header",{ref:"tbHeader",on:{sort_Father:t.sort}}),t._v(" "),t.loading?n("qiong-loading"):n("bonus-team-layer-table",{attrs:{childs:t.childrens}})],1),t._v(" "),n("qiong-sub-result",{staticClass:"mt-3 px-7",attrs:{res:t.footer,need_line:!1}},[n("div",{staticClass:"next-header"},[t._v("Total")])]),t._v(" "),n("location-me",{ref:"locaMe"}),t._v(" "),t.init?n("collection-ready",{on:{sign_Father:t.initMe}}):t._e()],1)},staticRenderFns:[]};var j=n("VU/8")(Q,I,!1,function(t){n("aCx8")},"data-v-eed33c0a",null);e.default=j.exports},KMdi:function(t,e,n){"use strict";var i=n("WBHA"),r={components:{CountTo:n.n(i).a},props:{res:{type:Number},sec:{type:Number,default:1800}},name:"",data:function(){return{}}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("count-to",{attrs:{startVal:0,endVal:this.res,duration:this.sec}})},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(t){n("ZLEv")},"data-v-33172d82",null);e.a=o.exports},WBHA:function(t,e,n){var i;i=function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,n){var i=n(4)(n(1),n(5),null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),n=e[0],i=e.length>1?this.decimal+e[1]:"",r=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;r.test(n);)n=n.replace(r,"$1"+this.separator+"$2");return this.prefix+n+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n(0));e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,r="webkit moz ms o".split(" "),a=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=a=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=a=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<r.length&&(!a||!o);u++)s=r[u],e.requestAnimationFrame=a=a||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];a&&o||(e.requestAnimationFrame=a=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-i)),r=window.setTimeout(function(){t(e+n)},n);return i=e+n,r},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=a,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,n,i){var r,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var u=Object.create(s.computed||null);Object.keys(i).forEach(function(t){var e=i[t];u[t]=function(){return e}}),s.computed=u}return{esModule:r,exports:a,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},t.exports=i()},ZLEv:function(t,e){},Zf0Z:function(t,e){},ZqLT:function(t,e){},aCx8:function(t,e){},zfXr:function(t,e){}});
//# sourceMappingURL=20.4252e6390fd9192d8be0.js.map