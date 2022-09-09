<template>
    <div class="pw-user-page pw-tit">
        <div>
            <div class="py-3 pw-user-header">
                <nav>個人資料</nav>
                <!--
                <pw-button-back></pw-button-back>-->
            </div>
            
            <div v-if="!loading">
                <udv-paner :user="detaii"></udv-paner>
            </div>
            <div class="pw-empty" v-else>

            </div>
        </div>
        <net-pw-user ref="pwuREF"></net-pw-user>
        
        <pw-ud-searia v-if="user" :member_code="user.member_code" @start="() => loading = true" @data="recive"/>

    </div>
</template>

<script>
import NetPwUser from '../../../extra/net/NetPwUser/NetPwUser.vue'
import PwButtonBack from '../../../extra/pw/button/PwButtonBack.vue'
import UdvPaner from './UdvPaner.vue'
import PwUdSearia from '../ser/PwUdSearia.vue'

export default {
  components: { PwButtonBack, UdvPaner, NetPwUser, PwUdSearia },
    data() {
        return {
            detaii: null, loading: true
        }
    },
    computed: {
        user() { return this.$store.state.user_backend }
    },
    methods: {
        recive(v) {
            this.loading = true
            this.detaii = v
            this.loading = false
        },
    }
  
}
</script>

<style>

</style>