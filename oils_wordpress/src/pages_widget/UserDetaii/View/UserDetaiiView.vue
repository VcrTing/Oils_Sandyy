<template>
    <div class="pw-user-page pw-tit">
        <div>
            <div class="py-3 pw-user-header">
                <nav>個人資料</nav>
                <!--
                <pw-button-back></pw-button-back>-->
            </div>
            <udv-paner :user="pw_user"></udv-paner>
        </div>
        <net-pw-user ref="pwuREF"></net-pw-user>

        <collection-ready @sign_Father="init"></collection-ready>
    </div>
</template>

<script>
import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import NetPwUser from '../../../extra/net/NetPwUser/NetPwUser.vue'
import PwButtonBack from '../../../extra/pw/button/PwButtonBack.vue'
import UdvPaner from './UdvPaner.vue'

export default {
  components: { PwButtonBack, UdvPaner, NetPwUser, CollectionReady },
    computed: {
        pw_user() { return this.$store.state.user_backend },
        users_coii() { return this.$store.state.user_collection }
    },
    mounted() {
    },
    methods: {
        async _fetching() {
            return await this.$refs.pwuREF.user_detaii({ member_code: '203361' })
        },
        async init() {
            console.log('用户s =', this.users_coii)
            let user = undefined
            let res = await this._fetching()
            if (this.users_coii && res) {
                this.users_coii.map(u => {
                    console.log('code =', u.member_code)
                    if (res.member_code == u.member_code) {
                        user = u
                    }
                })
            }
            console.log('搜寻 详情 =', res, '查询到的用户 =', user)
        }
    }
}
</script>

<style>

</style>