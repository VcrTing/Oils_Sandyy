<template>
    <div>
        <transition class="outro">
            <login-layout v-if="saving">
                <div>
                    <login-form @readyLogin_Father="readyLogin" v-if="checking"></login-form>
                    <div v-else>
                        正在檢查登錄記錄...
                    </div>
                </div>
            </login-layout>
        </transition>
    </div>
</template>

<script>
import LoginForm from '@/pages/Home/Login/Inner/LoginForm.vue'
import LoginLayout from '../Layout/LoginLayout.vue'

    export default {
        components: { LoginForm, LoginLayout },
        name: '',
        data() {
            return {
                saving: true,

                checking: true
            }
        },
        mounted() {
            // this.hasingLogin()
        },
        methods: {
            hasingLogin() {
                const needLogin = this.$store.getters.checkToken()

                if (needLogin) {
                    this.saving = true
                    this.checking = false
                } else {
                    const needPlantForm = this.$store.getters.checkPlantfrom()
                    this.saving = false
                }
            },
            readyLogin(data) {
                this.$store.commit('saveFromPlatform', data)
                this.$emit('sign_Father', true)
                setTimeout(e => {
                    this.saving = false
                }, 600)
            }
        },
    }
</script>

<style lang="sass" scoped>
    
    
.outro-leave,
.outro-leave-to
    transition: 0.5s all
    
.outro-leave
    opacity: 1
    transform: translateY(0px)
.outro-leave-to
    opacity: 0
    transform: translateY(-20px)
    
</style>