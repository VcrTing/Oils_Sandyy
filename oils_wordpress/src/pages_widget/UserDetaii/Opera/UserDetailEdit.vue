<template>
    <div class="pw-user-page pw-tit">
        <div>
            <div class="py-3">
                <pw-button-back @tap="$router.back()"></pw-button-back>
            </div>
            <ude-form @patch="patch_User" :user="pw_user"></ude-form>
        </div>
        <net-pw-user ref='npuREF'/>
    </div>
</template>

<script>
import PwButtonBack from '../../../extra/pw/button/PwButtonBack.vue'
import NetPwUser from '../../../extra/net/NetPwUser/NetPwUser.vue'
import UdeForm from './UdeForm.vue'

export default {
  components: { PwButtonBack, UdeForm, NetPwUser },
    computed: {
        pw_user() { 
            let res = sessionStorage.getItem('sandyy_pw_user'); 
            return res ? JSON.parse(res) : {}; },
    },
    methods: {
        success() {
            setTimeout(e => this.$router.back(), 200)
        },
        // 修改 用户
        async patch_User(dts) {
            console.log('DATAs =', dts)
            const res = await this.$refs.npuREF.user_patch(dts)
            this.success()
        }
    }
}
</script>

<style>

</style>