<template>
    <mc-form-page-layout :header="'轉賬'" :no_switch="true" @back_Father="$router.push('/home/loyalty/transfer_money')">
        <div class="py-3">
            <div class="t-r pb-3">
                <a class="a-sus" @click="$router.push('/home/user/enroller')">我的Enroller下線</a><a>，</a>
                <a class="a-sus" @click="$router.push('/home/user/sponsor')">我的Sponsor下線</a>
            </div>
            <f-tmp-form ref="tmpREF" :hkd="me_hkd" v-if="!loading"></f-tmp-form>
            <qiong-loading v-else></qiong-loading>
        </div>


            <div class="fx-c my-3 qiong-pt-15 qiong-txt-14 anime-later anilay-XL">
                <button class="fm-submit mx-3 px-5 py-1 round" 
                    @click="submit">
                    
                    <v-icon class="qiong-txt-16 mr-2">mdi-check-underline</v-icon>
                    提交結果
                </button>
                <button class="mx-3 px-5 py-1 reset round"
                    @click="reset">
                    
                    <v-icon class="qiong-txt-16">mdi-refresh</v-icon>
                    重置表單
                </button>
            </div>
        <net-fund ref="fundREF"></net-fund>
        <net-transfer ref="tsREF"></net-transfer>
        
        <sign v-if="user" @sign_Father="LP"></sign>
    </mc-form-page-layout>
</template>

<script>
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import Sign from '../../../../extra/func/Sign.vue'
import NetFund from '../../../../extra/net/NetFund/fund/NetFund.vue'
import McFormPageLayout from '../../../MemberChange/Form/Layout/McFormPageLayout.vue'
import FTmpForm from './Inner/FTmpForm.vue'

import NetTransfer from '../../../../extra/net/NetFund/transfer/NetTransfer.vue'
    export default {
        components: { NetTransfer, McFormPageLayout, FTmpForm, NetFund, Sign, QiongLoading },
        name: '',
        data() {
            return {
                me_hkd: 0,
                loading: true,
                doing: false,
            }
        },
        computed: {
            user() { let res = this.$store.state.user_backend; return res ? res : null }
        },
        methods: {
            reset() {
                let res = this.$refs.tmpREF.reset()
            },
            unLock() { this.doing = false },
            async submit() {
                if (this.doing) return;
                this.doing = true
                let res = this.$refs.tmpREF.submit()
                
                if (res) {
                    res = await this.$refs.tsREF.transfer(res)
                    if (res == 500) { 
                        this.$refs.tmpREF.alert('服务器错误，转账失败！！！'); this.unLock()
                    } else if (res == 400) {
                        this.$refs.tmpREF.alert('网络错误，未生成转账任务！！！'); this.unLock()
                    } else {
                        setTimeout(e => { this.unLock(); this.$router.push('/home/loyalty/transfer_money') }, 800)
                    }
                }
            },

            async LP() {
                let res = await this.$refs.fundREF.fetching( this.user )
                if (res && res.length > 0) {
                    this.me_hkd = res[0].wallet
                }
                setTimeout(() => {
                    this.loading = false
                }, 600);
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>