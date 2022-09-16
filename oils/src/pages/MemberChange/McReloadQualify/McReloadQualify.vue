<template>
    <v-container fluid class="qiong-txt-td">
        <mc-top-filter></mc-top-filter>
        
        <qiong-header-filter>
            <span slot="header">
                重啟會員 LP 資格
            </span>
            <div slot="filter">
                <button 
                    @click="$router.push('form_reload_qualify')"
                    class="btn qiong-txt-12 btn-sec btn-lg an_righter">
                    重啟 LP 資格&nbsp;<v-icon class="qiong-txt-14">mdi-arrow-top-right</v-icon>
                </button>
            </div>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <mc-reload-qualify-tr></mc-reload-qualify-tr>
            <mc-reload-qualify-body v-if="!loading" :_items="items"></mc-reload-qualify-body>
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>

        <net-lp-activation-record ref="actREF"></net-lp-activation-record>
    </v-container>
</template>

<script>
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import NetLpActivationRecord from '../../../extra/net/NetMemberChange/reload/NetLpActivationRecord.vue'
import McTopFilter from '../common/McTopFilter.vue'
import McReloadQualifyBody from './Body/McReloadQualifyBody.vue'
import McReloadQualifyTr from './Top/McReloadQualifyTr.vue'

    export default {
  components: { QiongHeaderFilter, QiongPanelElement, QiongSpace, McReloadQualifyTr, McReloadQualifyBody, 
    McTopFilter,
    NetLpActivationRecord,
    QiongLoading },
        data() {
            return {
                items: [ ],

                loading: true
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            async init() {
                this.loading = true
                this.items = await this.$refs.actREF.lunching()

                setTimeout(e => this.loading = false, 300)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>