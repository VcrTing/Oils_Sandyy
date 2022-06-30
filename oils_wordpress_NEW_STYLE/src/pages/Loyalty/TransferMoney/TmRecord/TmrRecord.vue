<template>
    <div>
        <qiong-header-filter>
            <span slot="header">轉賬記錄</span>
            <div slot="filter">

                <button 
                    @click="$router.push('transfer_plus')"
                    class="btn qiong-txt-12 btn-sec btn-lg">
                    我要轉賬&nbsp;<v-icon class="qiong-txt-14">mdi-arrow-top-right</v-icon>
                </button>
            </div>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <tmrr-tr></tmrr-tr>
            <tmrr-body v-if="!loading" :_many="record"></tmrr-body>
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>

        <qiong-space :space="'7vw'"></qiong-space>
        <net-transfer-audit ref="audREF"></net-transfer-audit>
    </div>
</template>

<script>
import QiongPanelElement from '../../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeaderFilter from '../../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import NetTransferAudit from '../../../../extra/net/NetFund/transfer/NetTransferAudit.vue'
import TmrrBody from './TmrBody/TmrrBody.vue'
import TmrrTr from './TmrTop/TmrrTr.vue'
    export default {
  components: { QiongHeaderFilter, 
        QiongPanelElement,
    TmrrTr,
    TmrrBody,
    QiongSpace,
    NetTransferAudit,
    QiongLoading
    },
        props: [ 'many' ],
        data() {
            return {
                loading: true,
                record: [
                    {
                        id: 1, num: '203001', display_name: 'ECMARKETING', lp: 12, date: '2012-12-12 12:23', date_transfer: '2012-12-12 12:23', date_success: '2012-12-12 12:23', status: 0, mark: '朋友贈送'
                    },
                    {
                        id: 2, num: '203009', display_name: 'VDE', lp: 12, date: '2012-12-12 12:23', date_transfer: '2012-12-12 12:23', date_success: '2012-12-12 12:23', status: 1, mark: '朋友贈送'
                    },
                ]
            }
        },
        computed: {
        },
        mounted() { this.fetching() },
        methods: {

            async fetching() {
                this.loading = true
                let res = await this.$refs.audREF.fetching()
                if (res) {
                    this.record = res 
                }
                setTimeout(e => { this.loading = false }, 300)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>