<template>
    <v-container fluid class="qiong-txt-td">
        
        <qiong-header-filter>
            <span slot="header">
                增加LP積分
            </span>
            <div slot="filter">
                <button 
                    @click="$router.push('form_lp_plus')"
                    class="btn qiong-txt-12 btn-sec btn-lg an_righter">
                    增加LP積分&nbsp;<v-icon class="qiong-txt-14">mdi-arrow-top-right</v-icon>
                </button>
            </div>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <mc-lp-plus-tr></mc-lp-plus-tr>
            <mc-lp-plus-body v-if="!loading" :_items="records"></mc-lp-plus-body>
            <nav v-else><qiong-loading></qiong-loading></nav>

        </qiong-panel-element>

        <!-- -->
        <net-lp-plus-record ref="recordREF"></net-lp-plus-record>
        <tool-ready @sign="init" v-if="!$store.state.loading && $store.state.user_backend"></tool-ready>
    </v-container>
</template>

<script>
import ToolReady from '../../../components/Init/Ready/ToolReady.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import NetLpPlusRecord from '../../../extra/net/NetMemberChange/lp/NetLpPlusRecord.vue'
import McLpPlusBody from './Body/McLpPlusBody.vue'
import McLpPlusTr from './Top/McLpPlusTr.vue'
    export default {
  components: { QiongHeaderFilter, QiongPanelElement, McLpPlusTr, McLpPlusBody, QiongSpace, ToolReady, NetLpPlusRecord, QiongLoading },
        name: '',
        data() {
            return {
                records: [ ],

                loading: true
            }
        },
        computed: {
            user() { return this.$store.state.user_backend }
        },
        mounted() { },
        methods: {
            async init() {
                this.loading = true
                let res
                
                res = await this.$refs.recordREF.LpAddRecord({
                    _limit: 300
                })

                this.records = res
                setTimeout(e => this.loading = false, 300)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>