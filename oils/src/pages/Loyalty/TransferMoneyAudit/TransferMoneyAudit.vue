<template>
    <v-container fluid class="qiong-txt-td">

        <div>
            <tma-top-search-bar></tma-top-search-bar>
        </div>

        <qiong-header-filter>
            <span slot="header">轉賬審核</span>
            <tma-top-filter slot="filter" :_many="many" :_many_origin="many_origin" @sign_Father="filter"></tma-top-filter>
        </qiong-header-filter>
        
        <qiong-panel-element class="mobie-table" :need_space="false">
            <tma-tr></tma-tr>

            <div v-if="!loading">
                <div v-if="many && many.length > 0">
                    <nav v-for="(my, i) in many" :key="i" class="px-7">
                        <tma-body :v="my">
                            <extra-trans-status-opera @update="updStatus" :_id="i" :one="my"></extra-trans-status-opera>
                        </tma-body>
                    </nav>
                </div>
                <qiong-empty v-else></qiong-empty>
            </div>
            <qiong-loading v-else></qiong-loading>

            <qiong-space :space="'24px'"></qiong-space>
        </qiong-panel-element>

        <div class="fx-c qiong-pt-20 mt-3">
            <pagenation></pagenation>
        </div>

        <table-pager-footer></table-pager-footer>

        <net-transfer-audit ref="auditREF"></net-transfer-audit>
    </v-container>
</template>

<script>
import Pagenation from '../../../components/Bar/Pagenation/Pagenation.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongEmpty from '../../../components/Qiong/Ui/QiongEmpty.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import NetTransferAudit from '../../../extra/net/NetFund/transfer/NetTransferAudit.vue'
import ExtraTransStatusOpera from '../../../extra/view/transfer/ExtraTransStatusOpera.vue'
import TmaBody from './Body/TmaBody.vue'
import TmaTopFilter from './Top/TmaTopFilter.vue'
import TmaTopSearchBar from './Top/TmaTopSearchBar.vue'
import TmaTr from './Top/TmaTr.vue'

    export default {
        name: '',
        components: {
            QiongHeaderFilter,
            TmaTr, QiongPanelElement,
            TmaTopFilter,
            TmaBody, QiongSpace,
            TmaTopSearchBar,
            Pagenation,
            TablePagerFooter,
            NetTransferAudit,
            ExtraTransStatusOpera,
            QiongLoading, QiongEmpty
        },
            data() {
            return {
                loading: true,
                many: [ ],
                many_origin: [

                    {
                        start_member_code: '203001', start_display_name: 'Ecmarketing', lp: 23, 
                        end_member_code: '203002', end_display_name: 'Eric', id: 1,
                        date_transfer: '2021-12-12 12:23', status: 0, mark: '朋友贈送'
                    },
                    {
                        start_member_code: '203001', start_display_name: 'Ecmarketing', lp: 23, 
                        end_member_code: '203002', end_display_name: 'Eric', id: 2,
                        date_transfer: '2021-12-12 12:23', status: 0, mark: '朋友贈送'
                    }
                ]
            }
        },
        mounted() { this.fetching() },
        methods: {
            async fetching() {
                this.loading = true
                try {
                    let res = await this.$refs.auditREF.fetching()
                } catch(err) { }
                this.many = this.many_origin
                setTimeout(e => this.loading = false, 400)
            },
            filter(res) {
                this.loading = true
                this.many = res
                setTimeout(e => this.loading = false, 400)
            },

            //
            one(id) {
                let src = this.many_origin.filter(e => e.id == id)
                return src ? src[0] : null
            },
            async updStatus(dt) {
                try {
                    let res = await this.$refs.auditREF.edit(dt)
                    if (res) {
                        console.log('修改的数据 =', res)
                    }
                } catch(err) { }
                const _one = this.one(dt.id)
                _one.status = dt.is_approved ? 1 : 0
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>