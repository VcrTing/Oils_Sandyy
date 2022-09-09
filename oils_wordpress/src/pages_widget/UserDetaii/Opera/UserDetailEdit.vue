<template>
    <div class="pw-user-page pw-tit">
        <div>
            <div class="py-3">
                <pw-button-back @tap="$router.back()"></pw-button-back>
            </div>
            <div v-if="!loading">
                <ude-form ref="form" v-if="detaii" @patch="patch_User" :user="detaii"></ude-form>
            </div>
            <div class="pw-empty" v-else>

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

export default {
    components: { PwButtonBack, UdeForm, NetPwUser, PwUdSearia },
    data() {
        return {
            detaii: null, loading: true
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
            console.log('PATCH =', dts)
            try {
                await this.$refs.npuREF.user_patch(dts[0], dts[1])
                setTimeout(e => this.$router.back(), 200)
                this.$refs.form.finished()
            } catch(err) {
                console.log('错误 =', err)
            }
        }
    }
}
</script>

<style scoped>

</style>