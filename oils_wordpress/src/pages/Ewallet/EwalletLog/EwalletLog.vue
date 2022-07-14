<template>
    <v-container fluid class="qiong-txt-td">

        <qiong-header-filter>
            <span slot="header">用戶資金操作記錄</span>
        </qiong-header-filter>
        <qiong-panel-element class="mobie-table" :need_space="false">
            <el-tr></el-tr>
            <el-td v-if="!loading" :_items="many"></el-td>
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>

        <net-wallet-log ref="iogREF"></net-wallet-log>
    </v-container>
</template>

<script>
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import ElTr from './Top/ElTr.vue'
import ElTd from './Body/ElTd.vue'
import NetWalletLog from '../../../extra/net/NetWallet/NetWalletLog.vue'
import QiongLoading from '../../../../InvensVersion/src/components/Qiong/Ui/QiongLoading.vue'
export default {
    components: { QiongHeaderFilter, QiongPanelElement, ElTr, ElTd, NetWalletLog, QiongLoading },
    data() {
        return {
            many: [], loading: true,
        }
    },
    mounted() {
        this.fetch()
    },
    methods: {
        async fetch() {
            this.loading = true
            this.many = await this.$refs.iogREF.many()
            setTimeout(e => this.loading = false, 400)
        }
    }
}
</script>

<style>

</style>
