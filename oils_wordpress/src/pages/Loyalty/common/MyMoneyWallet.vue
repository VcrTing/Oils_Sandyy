<template>
    <div>
        <div>
            <qiong-header>電子錢包</qiong-header>

            <qiong-panel-element :need_space="false">
                <qiong-space :space="'2vw'"></qiong-space>
                <wallet-list :_item="wallet"></wallet-list>
                <div class="t-r py-3 px-7">
                    <div v-if="!hide_transfer" class="a-sus_sec d-ib pt-3" @click="$router.push('/home/loyalty/transfer_plus')">
                        <span>我要轉賬</span>
                        <v-icon class="qiong-txt-16">mdi-arrow-top-right</v-icon>
                    </div>
                    <div class="t-r" v-if="last_upd">
                        <span class="a-sus_sec">
                            <v-icon class="qiong-txt-16">mdi-calendar-blank</v-icon>&nbsp;&nbsp;
                            <span class="hv">最後更新於：{{ view.ser_timed(last_upd, true, false) }}</span>
                        </span>
                    </div>
                </div>
            </qiong-panel-element>
        </div>

        <net-fund ref="fundREF"></net-fund>
        <sign v-if="user" @sign_Father="init"></sign>
    </div>
</template>

<script>
import WalletList from './wallet/WalletList.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import NetFund from '../../../extra/net/NetFund/fund/NetFund.vue'
import Sign from '../../../extra/func/Sign.vue'

    export default {
        components: { WalletList, QiongPanelElement, QiongSpace, QiongHeader, NetFund, Sign },
        props: [ 'hide_transfer' ],
        data() {
            return {
                wallet: [ ],
                last_upd: ''
            }
        },
        mounted() { 
            console.log('钱包')
            this.init() },
        computed: { 
            user() { let res = this.$store.state.user_backend; return res ? res : null }
        },
        methods: {
            async init() {
                let res = await this.$refs.fundREF.fetching(this.user)
                if (res) {
                    if (res.length >= 1) {
                        this.wallet = res.map(e => {
                            this.last_upd = e.updated_at
                            return e.wallet
                        })
                    }
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
.hv
    transition: all .122s ease-in
    &:hover
        color: #333
        i
            color: #333 !important 
</style>