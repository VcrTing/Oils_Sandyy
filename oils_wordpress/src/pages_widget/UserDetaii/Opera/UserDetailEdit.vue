<template>
    <div class="pw-user-page pw-tit">
        <div>
            <div class="py-3">
                <pw-button-back @tap="$router.back()"></pw-button-back>
            </div>
            <ude-form :user="pw_user"></ude-form>
        </div>
    </div>
</template>

<script>
import PwButtonBack from '../../../extra/pw/button/PwButtonBack.vue'
import UdeForm from './UdeForm.vue'

export default {
  components: { PwButtonBack, UdeForm },
    computed: {
        pw_user() { 
            let res = sessionStorage.getItem('sandyy_pw_user'); 
            return res ? JSON.parse(res) : {}; },
    },

}
</script>

<style>

</style>