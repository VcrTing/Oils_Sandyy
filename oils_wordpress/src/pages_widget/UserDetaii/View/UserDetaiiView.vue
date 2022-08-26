<template>
    <div class="pw-user-page pw-tit">
        <div>
            <div class="py-3">
                <pw-button-back></pw-button-back>
            </div>
            <udv-paner :user="pw_user"></udv-paner>
        </div>
    </div>
</template>

<script>
import PwButtonBack from '../../../extra/pw/button/PwButtonBack.vue'
import UdvPaner from './UdvPaner.vue'

export default {
  components: { PwButtonBack, UdvPaner },
    computed: {
        pw_user() { return this.$store.state.user_backend },
    }
}
</script>

<style>

</style>