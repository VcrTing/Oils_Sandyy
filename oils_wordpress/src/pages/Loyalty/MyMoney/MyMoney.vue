<template>
    
    <v-container fluid class="qiong-txt-td">
        
        <member-msg-widget :_code="user.member_code"></member-msg-widget>

        <my-money-wallet class="mt-6"></my-money-wallet>

        <mm-jf-in-record class="mt-6"></mm-jf-in-record>

        <net-fund ref="fundREF"></net-fund>

        <sign v-if="user" @sign_Father="init"></sign>
    </v-container>
</template>

<script>
import MemberMsgWidget from '../../widget/Header/MemberMsgWidget.vue'
import MyMoneyWallet from '@/pages/Loyalty/common/MyMoneyWallet.vue'
import MmJfInRecord from './JfInRecord/MmJfInRecord.vue'
import NetFund from '../../../extra/net/NetFund/fund/NetFund.vue'
import Sign from '../../../extra/func/Sign.vue'
    export default {
        components: { MemberMsgWidget, MyMoneyWallet, MmJfInRecord, NetFund, Sign },
        name: '',
        data() {
            return {
                can: false,
            }
        },
        computed: {
            user() { let _user = this.$store.state.user_backend; return _user ? _user : null }
        },
        mounted() {
            
        },
        methods: {
            async init() {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>