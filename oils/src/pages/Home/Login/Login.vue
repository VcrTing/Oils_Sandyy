<template>
    <login-layout>
        <router-view />
    </login-layout>
</template>

<script>
import LoginLayout from '../../../components/Layout/LoginLayout.vue'
import QiongLogoElement from '../../../components/Qiong/Ele/QiongLogoElement.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'

    export default {
        components: { QiongLogoElement, QiongSpace, LoginLayout  },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>