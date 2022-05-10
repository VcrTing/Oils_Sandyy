<template>
    <v-container fluid class="qiong-txt-td ">

        <qiong-header :extra_calss="' pl-7'">
            {{ $t('HEADER.bonus_report') }}
        </qiong-header>

        <qiong-panel-element :need_space="false">
            <div class="qiong-pt-10 text-right px-7">
                <as-top-time></as-top-time>
            </div>

            <member-msg-header-widget class="px-7" v-if="!loading" :_chronu_id="chronu_id" :_member_code="member_code"></member-msg-header-widget>

            <div class="qiong-pt-5 mt-6" v-if="!loading">
                <as-recommend class="qiong-pager-zebra" 
                    :_item="bonus_statement.referal_detail"
                    :me="mine"
                    v-if="bonus_statement"
                    ></as-recommend>
                <as-loading v-else :bg="true"></as-loading>

                <as-active-house class="qiong-pager-light" 
                    :_item="bonus_statement.active_branch_bonus_detail"
                    :me="mine" 
                    v-if="bonus_statement"
                    ></as-active-house>
                <as-loading v-else></as-loading>

                <as-team-layer class="qiong-pager-zebra" 
                    :_item="bonus_statement.organisation_detail"
                    :me="mine" 
                    v-if="bonus_statement"></as-team-layer>
                <as-loading v-else :bg="true"></as-loading>
                
                <so-management class="qiong-pager-light"
                    :me="mine" :childs="childrens" v-if="childrens"

                    :_mode="mode"
                ></so-management>
                <as-loading v-else></as-loading>

                <!-- -->
                <so-development class="qiong-pager-zebra"
                    :me="mine" :childs="childrens" v-if="childrens"
                    :__mode="_mode"
                ></so-development>
                <as-loading v-else :bg="true"></as-loading>
 
                <qiong-space class="qiong-pager-zebra" :space="'10vh'"></qiong-space>
                
            </div>
            <qiong-loading v-else :bigger="1" class="qiong-pager-zebra"></qiong-loading>

        </qiong-panel-element>     
        
        <pti-go-top></pti-go-top>
        <flex-iframe-pdf v-if="can_print" :target_id="member_code" :extra_calss="'mt-6'" :useless="print_Loading" @useless_Father="lockPrint"></flex-iframe-pdf>

        <location-me ref="locaMe"></location-me>
        <net-bonus-statement ref="netBonuREF"></net-bonus-statement>

        <tool-ready @sign="initMe" v-if="$store.state.user_backend && $store.state.user_collection && $store.state.user_collection.length > 0"></tool-ready>
    </v-container>
</template>

<script>
import LocationMe from '../../../components/Data/Me/LocationMe.vue'
import QiongGoTop from '../../../components/Qiong/Button/QiongGoTop.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import AlertBuyNone from '../../../components/Viewing/Alert/AlertBuyNone.vue'
import FlexIframePdf from '../../i/Pdf/FlexIframePdf.vue'

import MemberMsgHeaderWidget from '../../widget/Header/MemberMsgHeaderWidget.vue'
import AsActiveHouse from './Bonus/AsActiveHouse.vue'
import AsRecommend from './Bonus/AsRecommend.vue'
import AsTeamLayer from './Bonus/AsTeamLayer.vue'
import AsTopTime from './Inner/AsTopTime.vue'

import app_init from '@/common/es/app_init/index' 

import SoManagement from './Share/SoManagement.vue'
import SoDevelopment from './Share/SoDevelopment.vue'
import PtiGoTop from '../../../components/Qiong/Tool/PtiGoTop.vue'

import NetBonusStatement from '../../../extra/net/NetBonus/NetBonusStatement.vue'
import ToolReady from '../../../components/Init/Ready/ToolReady.vue'
import AsLoading from './Tool/AsLoading.vue'
    export default {
        components: {
            AsRecommend,
            AsActiveHouse,
            AsTeamLayer,
            QiongSpace,
            QiongLoading, 
            AlertBuyNone,
            QiongGoTop,
            FlexIframePdf,
            QiongHeader,
            QiongPanelElement,
            AsTopTime,
            MemberMsgHeaderWidget,
            LocationMe,
            SoManagement,
            SoDevelopment,
                PtiGoTop,
                NetBonusStatement,
                ToolReady,
                AsLoading   
        },
        props: {
            _mode: {
                type: Number,
                default: 2
                // 2 = Admin 视角
                // 1 = 会员视角
            }
        },
        data() {
            return {
                mine: null,
                childs_sponser: null,
                childs_enroller: null,
                childrens: null,

                chronu_id: null,                
                member_code: null,

                loading: true,

                print_Loading: true,

                can_print: false,

                mode: 1,

                bonus_statement: null
            }
        },
        async mounted() {
            if (this._mode) { this.mode = this._mode }
        },
        methods: {
            valuation() {
                this.chronu_id = this.$store.state.chronus.id
                this.member_code = this.$store.state.user_backend.member_code
            },

            async fetchingBonus() {
                let res = await this.$refs.netBonuREF.fetching( { 'member_code': this.mine.member_code } )
                this.$store.commit('saveBonusStatement', res)
                this.bonus_statement = res
                console.log('bonus_statement =', res)
            },

            async initMe() {
                this.valuation()
                this.mine = await this.$refs.locaMe.locationMe_Async(this.member_code, 'COLLECTION')
                const res = await this.switchChilds()

                if (res) {
                    this.childrens = res[0]
                    this.childs_sponser = res[1]
                    this.childs_enroller = res[2]
                }

                if (this.mine) {
                    this.fetchingBonus()
                    sessionStorage.setItem('pdf_oil_me', JSON.stringify(this.mine))
                    this.can_print = true
                    this.lockPrint(false)
                }
                setTimeout(e => this.loading = false, 300)
            },

            async switchChilds() {
                const user_sponsor = await this.$refs.locaMe.locationMe_Async(this.member_code, 'SPONSER')
                const user_enroller = await this.$refs.locaMe.locationMe_Async(this.member_code, 'ENROLLER')
                return await app_init.all_childrens(user_sponsor, user_enroller)
            },
            back() { this.$router.push({ path: '/home/account' }) },
            lockPrint(v) { this.print_Loading = v },
        }
    }
                /*
                this.member_code = this._member_code
                if (!this.member_code) {
                    const rt_id = this.$route.query.member_code
                    if (rt_id) {
                        this.member_code = rt_id
                        this.root = true
                    } else {
                        this.member_code = this.$store.state.user_backend.member_code
                    }
                }
                if (!this.chronu_id) {
                    const cr_id = this.$route.query.chronu_id
                    if (cr_id) {
                        this.chronu_id = cr_id
                    } else {
                        this.chronu_id = this.$store.state.chronus.id
                    }
                }
                */
</script>

<style lang="sass" scoped>
    
</style>