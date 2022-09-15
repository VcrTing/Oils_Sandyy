<template>
    <div class="pw-user-page pw-tit">
        <div>
            <div class="py-3">
                <pw-button-back @tap="$router.back()"></pw-button-back>
            </div>
            <div v-if="!loading">
                <ude-form ref="form" v-if="detaii"
                    @change_pass="change_Pass" 
                    @patch="patch_User" 
                    :user="detaii"></ude-form>
            </div>
            <div class="pw-empty" v-else>
                <qiong-loading :bigger="2"></qiong-loading>
            </div>
        </div>
        <net-pw-user ref='npuREF'/>

        <pw-ud-searia v-if="ioc_user" :member_code="ioc_user.member_code" @start="() => loading = true" @data="recive"/>
    </div>
</template>

<script>
import PwButtonBack from '../../../extra/pw/button/PwButtonBack.vue'
import NetPwUser from '../../../extra/net/NetPwUser/NetPwUser.vue'
import UdeForm from './UdeForm.vue'
import PwUdSearia from '../ser/PwUdSearia.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'

export default {
    components: { PwButtonBack, UdeForm, NetPwUser, PwUdSearia, QiongLoading },
    data() {
        return {
            detaii: null, loading: true, updating: false
        }
    },
    computed: {
        ioc_user() { 
            let res = sessionStorage.getItem('sandyy_pw_user'); 
            return res ? JSON.parse(res) : this.$store.state.user_backend; },
    },
    methods: {
        recive(v) {
            this.loading = true
            this.detaii = v
            setTimeout(e => this.loading = false, 2)
        },

        // 修改 用户
        async patch_User(dts) {
            if (!this.updating) {
                this.updating = true
                console.log('修改资料')
                await this.$refs.npuREF.user_patch(dts[0], dts[1])
                setTimeout(e => {
                    this.$router.back(); this.updating = false }, 200)
                this.$refs.form.finished()
            }
        },

        // 修改密码
        async change_Pass(dts) {
            if (dts[0]) {
                console.log('修改密码 =', dts)
                const res = await this.$refs.npuREF.change_pass(dts[0], dts[1])
                console.log('修改到结果 =', res)
            }
        }
    }
}
</script>

<style scoped>

</style>