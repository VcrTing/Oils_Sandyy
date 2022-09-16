<template>
    <v-container fluid class="qiong-txt-td">

        <mc-level-change-filter @submit_Father="init"></mc-level-change-filter>
        
        <qiong-header-filter>
            <span slot="header">
                更改會員 LP 等級
            </span>
            <div slot="filter">
                <button 
                    @click="$router.push('form_level_change')"
                    class="btn qiong-txt-12 btn-sec btn-lg an_righter">
                    更改 LP 等級&nbsp;<v-icon class="qiong-txt-14">mdi-arrow-top-right</v-icon>
                </button>
            </div>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <mc-level-change-tr></mc-level-change-tr>
            <mc-level-change-body v-if="!loading" :_items="records"></mc-level-change-body>
            <nav v-else><qiong-loading></qiong-loading></nav>
        </qiong-panel-element>  

        <div class="fx-c mt-5 pt-3">
            <pagenation v-if="records_Origin" :_limit="limit" :_count="records_Origin.length" @page_Father="pager"></pagenation>
        </div>

        <table-pager-footer></table-pager-footer>
        <!-- -->
        <net-level-change-record ref="recordREF"></net-level-change-record>
        <!--tool-ready @sign="init" v-if="!$store.state.loading && $store.state.user_backend"></!--tool-ready-->
    </v-container>
</template>

<script>
import Pagenation from '../../../components/Bar/Pagenation/Pagenation.vue'
import ToolReady from '../../../components/Init/Ready/ToolReady.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import NetLevelChangeRecord from '../../../extra/net/NetMemberChange/level/NetLevelChangeRecord.vue'
import McLevelChangeBody from './Body/McLevelChangeBody.vue'
import McLevelChangeFilter from './Top/McLevelChangeFilter.vue'
import McLevelChangeTr from './Top/McLevelChangeTr.vue'

    export default {
  components: { QiongHeaderFilter, QiongPanelElement, QiongSpace, McLevelChangeTr, McLevelChangeBody, ToolReady, NetLevelChangeRecord, QiongLoading, Pagenation, McLevelChangeFilter, TablePagerFooter },
        data() {
            return {
                records_Origin: [ ],
                records: [ ],
                loading: true,

                limit: 50
            }
        },
        methods: {
            async init(funel) {
                this.loading = true
                let res = this.$store.state.user_backend
                res = await this.$refs.recordREF.lunching(funel)

                this.records_Origin = res

                this.records = res.slice(0, this.limit)

                setTimeout(e => this.loading = false, 300)
            },

            pager(m, n) {
                this.records = this.records_Origin.slice(m, n)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>