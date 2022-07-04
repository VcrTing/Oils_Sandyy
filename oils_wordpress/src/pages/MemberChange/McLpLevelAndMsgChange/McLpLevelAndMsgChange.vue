<template>
    
    <v-container fluid class="qiong-txt-td">

        <mllamc-top-filter ref="topREF" @submit_Father="switching"></mllamc-top-filter>

        <qiong-header-filter>
            <span slot="header">LP 資料變更記錄</span>
            <mllamc-top-bar slot="filter" @sign_Father="typed"></mllamc-top-bar>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false" v-if="def_typed == 2">
            <mllamc-lp-tr></mllamc-lp-tr>
            <mllamc-lp-body :_items="records" v-if="!loading"></mllamc-lp-body>
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>
        <qiong-panel-element class="mobie-table" :need_space="false" v-else>
            <mllamc-tr></mllamc-tr>
            <mllamc-body :_items="records" v-if="!loading"></mllamc-body>
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>

        <div class="fx-c mt-5 pt-3"><pagenation v-if="records_page && !loading" :_limit="limit" :_count="records_page.length" @page_Father="pager"></pagenation></div>

        <table-pager-footer></table-pager-footer>
        <net-member-lp-level-record ref="recLpLevelREF"></net-member-lp-level-record>
        <net-lp-plus-record ref="lpPlusREF"></net-lp-plus-record>
    </v-container>
</template>

<script>
import Pagenation from '../../../components/Bar/Pagenation/Pagenation.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import NetLpPlusRecord from '../../../extra/net/NetMemberChange/lp/NetLpPlusRecord.vue'
import NetMemberLpLevelRecord from '../../../extra/net/NetMemberChange/record/NetMemberLpLevelRecord.vue'
import MllamcBody from './Body/MllamcBody.vue'
import MllamcLpBody from './Body/MllamcLpBody.vue'
import MllamcLpTr from './Top/lp/MllamcLpTr.vue'

import MllamcTopBar from './Top/MllamcTopBar.vue'
import MllamcTopFilter from './Top/MllamcTopFilter.vue'
import MllamcTr from './Top/MllamcTr.vue'
    export default {
        methods: {
            typed(v) { this.def_typed = v; this.switching( this.$refs.topREF.result() ) },
            async switching(cond) { 
                this.loading = true
                this.records_origin = await this.origin(cond)
                this.pager(0, this.limit)
                setTimeout(e => this.loading = false, 600)
            },
            funnel(ori) {
                ori = this.records_origin
                // if (this.def_typed > 0) { ori = ori.filter(e => e.typed == this.def_typed) }
                this.records_page = ori
                return ori
            },
            async origin(condition) {
                condition._limit = 300
                // condition.user_contains = '203404'
                if (this.def_typed == 1) {
                    return await this.$refs.recLpLevelREF.LpLevelAuto( condition )
                }
                else if (this.def_typed == 2) {
                    return await this.$refs.lpPlusREF.LpRecord(condition)
                }
            },

            pager(m, n) {
                let res = this.funnel()
                console.log('res =', res.slice(m, n), m, n)
                this.records = res.slice(m, n)
            }
        },
        data() {
            return {
                records_origin: null,
                records_page: null,

                records: null,
                loading: true,

                def_typed: 2,
                limit: 30
            }
        },
  components: { QiongHeaderFilter,
    MllamcTopBar,
    QiongPanelElement,
    MllamcBody,
    MllamcTr,
    MllamcTopFilter,
    QiongLoading,
    Pagenation,
    TablePagerFooter,
    NetMemberLpLevelRecord,
    MllamcLpBody,
    MllamcLpTr,
    NetLpPlusRecord        },
    }
    /*

                return [
                    { user: { member_code: '203001', display_name: 'ECMARKTING' }, date: '2021-12-12 12:23', typed: 1, content: '會員等級二提升至等級三', remark: '备注' },
                    { user: { member_code: '203001', display_name: 'ECMARKTING' }, date: '2021-12-12 12:23', typed: 2, content: '公司編號00001改為123456', remark: '备注' },
                ]
    */
</script>

<style lang="sass" scoped>
    
</style>