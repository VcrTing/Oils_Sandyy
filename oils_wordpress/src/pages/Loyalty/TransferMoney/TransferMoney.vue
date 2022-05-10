<template>
    
    <v-container fluid class="qiong-txt-td">
        
        <member-msg-widget :_code="this.$store.state.user_backend.member_code" v-if="!init"></member-msg-widget>

        <my-money-wallet :hide_transfer="true" class="mt-6"></my-money-wallet>

        <tmr-record class="mt-6"></tmr-record>

        <net-transfer-audit ref="audREF"></net-transfer-audit>
    </v-container>
</template>

<script>
import NetTransferAudit from '../../../extra/net/NetFund/transfer/NetTransferAudit.vue'
import MemberMsgWidget from '../../widget/Header/MemberMsgWidget.vue'
import MyMoneyWallet from '../common/MyMoneyWallet.vue'
import TmrRecord from './TmRecord/TmrRecord.vue'
    export default {
        components: { MemberMsgWidget, MyMoneyWallet, TmrRecord, NetTransferAudit },
        name: '',
        data() {
            return {
                init: false,
                loading: true,

                many: [ ]
            }
        },
        mounted() {
            this.fetching()
        },
        methods: {
            async fetching() {
                let res = await this.$refs.audREF.fetching()
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>