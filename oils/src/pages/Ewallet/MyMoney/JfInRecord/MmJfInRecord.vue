<template>
    <div>

        <qiong-header-filter>
            <span slot="header">
                交易記錄
            </span>
            <mmji-top-filter @sign_Father="funni" slot="filter"></mmji-top-filter>
        </qiong-header-filter>

        <qiong-panel-element class="mobie-table" :need_space="false">
            <mmji-tr></mmji-tr>
            <mmji-td :items="iogs" v-if="!ioading"></mmji-td>
            <qiong-loading v-else></qiong-loading>
        </qiong-panel-element>

        <net-wallet-log ref="iogREF"></net-wallet-log>
        <qiong-space :space="'7vw'"></qiong-space>
    </div>
</template>

<script>
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import QiongPanelElement from '../../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeaderFilter from '../../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import NetWalletLog from '../../../../extra/net/NetWallet/NetWalletLog.vue'
import MmjiTd from './Body/MmjiTd.vue'
import MmjiTopFilter from './Top/MmjiTopFilter.vue'
import MmjiTr from './Top/MmjiTr.vue'
    export default {
  components: { QiongHeaderFilter, MmjiTopFilter, QiongPanelElement, MmjiTr, MmjiTd, QiongSpace,
    NetWalletLog,
    QiongLoading },
        name: '',
        data() {
            return {
                ioading: true,
                iogs: [ ], iog_origins: [ ]
            }
        },
        computed: { user() { return this.$store.state.user_backend } },
        mounted() {
            this.switch()
        },
        methods: {
            async switch() {
                this.ioading = true
                let res = await this.$refs.iogREF.many({ member_code: this.user.member_code })
                this.iog_origins = res
                this.funni(null)
                setTimeout(e => this.ioading = false, 300)
            },

            funni(v) {
                let res = this.iog_origins
                if (v) {
                    res = res.filter(e => e.type == v.type)
                } this.iogs = res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>