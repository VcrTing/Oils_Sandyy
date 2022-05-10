<template>
    <statement-pager>
        <qiong-title-element slot="header" class="mobie-mt-24">
            {{ $t('BONUS.NORMAL.lead_share_out') }}({{ $t('BONUS.SHORT.usd_development') }})
        </qiong-title-element>

        <bonus-panel-layout slot="neck" v-if="is_showing">
            <so-m-widget
                :_vip="vip"
                :_res="some_res"
                :working_type="2"

                v-if="!loading"
            >

                    <!-- so-sub-column :v="'无'" class="txt-focus">
                        {{ $t('BONUS.PUBLIC.get_usd') }}{{ $t('CONTENT.qualify') }}
                    </so-sub-column -->
            </so-m-widget>
            <so-m-widget-loading v-else></so-m-widget-loading>
        </bonus-panel-layout>

        <div slot="body" v-if="is_showing">
            <so-develop-inner :tr="true"></so-develop-inner>
            <so-develop-inner :tr="false" :items="manage_items" v-if="!loading"></so-develop-inner>
            <qiong-loading v-else></qiong-loading>
        </div>
        <qiong-empty v-else slot="body"></qiong-empty>

        <div slot="footer" v-if="is_showing">
            <so-develop-footer :_mode="__mode" :_usd="usd" :_footer_res="some_res" v-if="some_res"></so-develop-footer>
        </div>

        <div slot="extra">
            <user-develop-list ref="devREF"></user-develop-list>
        </div>
    </statement-pager>
</template>

<script>
import app_init from '@/common/es/app_init/index'

import QiongTitleElement from '../../../../components/Qiong/Ele/QiongTitleElement.vue'
import QsrWrapper from '../../../../components/Qiong/Pager/Inner/QsrWrapper.vue'
import QiongSubResult from '../../../../components/Qiong/Pager/QiongSubResult.vue'
import QiongSubResultSlot from '../../../../components/Qiong/Pager/QiongSubResultSlot.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import BonusPanelLayout from '../Layout/BonusPanelLayout.vue'
import SoFooterDivision from '../Layout/SoFooterDivision.vue'
import SoSubColumn from '../Layout/SoSubColumn.vue'
import StatementPager from '../Layout/StatementPager.vue'
import SoMWidget from './Inner/SoMWidget.vue'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import TeamBonusDetail from '../../../../components/Data/Using/TeamBonusDetail.vue'
import SoManageInner from './Inner/SoManageInner.vue'
import SoDevelopInner from './Inner/SoDevelopInner.vue'
import SoDevelopFooter from './Footer/SoDevelopFooter.vue'
import SoMWidgetLoading from './Inner/SoMWidgetLoading.vue'
import UserDevelopList from '../../../../components/Data/Leader/UserDevelopList.vue'

    export default {
        components: { QiongTitleElement, TeamBonusDetail, StatementPager, SoSubColumn, QiongSpace, QiongSubResult, BonusPanelLayout, SoFooterDivision, QiongSubResultSlot, QsrWrapper, SoMWidget, QiongEmpty, QiongLoading, SoManageInner, SoDevelopInner, SoDevelopFooter, SoMWidgetLoading, UserDevelopList },
        name: '',
        props: {
            me: {
                type: Object
            },
            childs: {
                type: Array
            },
            __mode: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                get_total_lead_pt: 0,
                my_lead_pt: 0,
                global_pv: 100,
                usd: 120,

                some_res: null,

                collection: [ ],

                vip_leader: [ 6, 7, 8, 9, 10 ],
                manage_items: [ ],
                loading: true,

                is_showing: true
            }
        },
        computed: {
            vip() {
                if (this.me.vip) {
                    const v = app_init.vip_view.vip_now(this.me.vip.code)
                    return v.name
                }
            }
        },
        
        mounted() {
            this.init()

            if (this.$store.state.share_type <= 0) { this.is_showing = false }
            if (this.me.bonu_period.DPV <= 0) { this.is_showing = false }
        },
        methods: {
            init() {

                const chronu = this.$store.state.chronus
                
                this.global_pv = chronu.period_total_pv ? chronu.period_total_pv : 0
                this.get_total_lead_pt = chronu.period_total_development_point ? chronu.period_total_development_point : 0

                if (this.me) {
                    this.my_lead_pt = this.me.bonu_period.development_point
                    this.usd = this.me.bonu_period.DPV

                    this.fetchBonusDetail()
                }

                this.some_res = {
                    bonus_pt: this.my_lead_pt,
                    global_pv: this.global_pv,
                    get_total_lead_pt: this.get_total_lead_pt
                }

                this.collection = this.$store.state.user_enroller
            },

            fetchBonusDetail() {
                this.$refs.devREF.fetchingList(this.me).then(e => {
                    this.manage_items = e
                    setTimeout(e => { this.loading = false }, 400)
                })
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>