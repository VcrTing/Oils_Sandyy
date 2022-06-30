<template>
    <statement-pager id="share_out">
        <qiong-title-element slot="header" v-if="title" class="mobie-pt-24">
            {{ $t('BONUS.NORMAL.lead_share_out') }}({{ $t('BONUS.SHORT.usd_management') }})

        </qiong-title-element>

        <bonus-panel-layout slot="neck" v-if="is_showing">
            <so-m-widget
                :_vip="vip"
                :_res="some_res"

                :__mode="_mode"

                v-if="!loading"
            ></so-m-widget>
            <so-m-widget-loading v-else></so-m-widget-loading>
        </bonus-panel-layout>

        <div slot="body" v-if="is_showing">
            
            <!-- div v-if="$store.state.share_type > 1" -->
            <div v-if="_mode > 1">
                <so-manage-inner :tr="true"></so-manage-inner>
                <so-manage-inner :tr="false" :items="manage_items" v-if="!loading"></so-manage-inner>
                <qiong-loading v-else></qiong-loading>
            </div>
        </div>
        <qiong-empty v-else slot="body"></qiong-empty>

        <div slot="footer" v-if="is_showing">
            <so-manage-footer 
                :_usd="usd" :_footer_res="some_res" 
                
                v-if="some_res"
                :__mode="_mode"
            ></so-manage-footer>
        </div>

        <div slot="extra">
            <user-management-list ref="umlREF"></user-management-list>
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
import SoManageInner from './Inner/SoManageInner.vue'
import SoGoTop from '../Tool/SoGoTop.vue'
import SoManageFooter from './Footer/SoManageFooter.vue'
import SoMWidgetLoading from './Inner/SoMWidgetLoading.vue'
import UserManagementList from '../../../../components/Data/Leader/UserManagementList.vue'

    export default {
        components: { QiongTitleElement, StatementPager, SoSubColumn, QiongSpace, QiongSubResult, BonusPanelLayout, SoFooterDivision, QiongSubResultSlot, QsrWrapper, SoMWidget, QiongEmpty, QiongLoading, SoManageInner, SoGoTop, SoManageFooter, SoMWidgetLoading, UserManagementList },
        name: '',
        props: {
            me: {
                type: Object
            },
            top: {
                type: Boolean,
                default: true
            },
            title: {
                type: Boolean,
                default: true
            },
            showing: {
                type: Boolean,
                default: null
            },

            _mode: Number
        },
        data() {
            return {
                get_total_lead_pt: 0,
                my_lead_pt: 0,
                global_pv: 100,
                usd: 120,

                some_res: null,

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
        
        async mounted() {
            
            this.init()
            await this.fetchBonusDetail()


            if (this.$store.state.share_type <= 0) {
                this.is_showing = false
            }

            if (this.me.bonu_period.MPV <= 0) { this.is_showing = false }

            if (this.showing != null) {
                this.is_showing = this.showing
            }


        },
        methods: {
            init() {

                const chronu = this.$store.state.chronus
                this.global_pv = chronu.period_total_pv ? chronu.period_total_pv : 0
                this.get_total_lead_pt = chronu.period_total_management_point ? chronu.period_total_management_point : 0

                if (this.me) {
                    this.my_lead_pt = this.me.bonu_period.management_point
                    this.usd = this.me.bonu_period.MPV
                }

                this.some_res = {
                    bonus_pt: this.my_lead_pt,
                    global_pv: this.global_pv,
                    get_total_lead_pt: this.get_total_lead_pt
                }

                console.log('chronu.period_total_pv =', chronu.period_total_pv)
                console.log('this.me.bonu_period.management_point =', this.me.bonu_period.management_point)
            },
            

            async fetchBonusDetail() {
                
                const res = await this.$refs.umlREF.fetchingList()

                console.log('manage_items =', res)
                if (res) {
                    this.manage_items = res
                    setTimeout(e => { this.loading = false }, 200)
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>