<template>
    <div>
        <!-- 平台 -->
        <wordpress-app  @sign_Father="plantFinished"></wordpress-app>

            <!-- 首次完成 -->
            <login-from-strapi 
                ref="loginREF" 
                @defeated_Father="loginDefeated" @success_Father="loginSuccess"></login-from-strapi>

            <!-- 多次刷新 -->
            <transition name="page_in">
                <app-view  v-if="login_success != null"></app-view>
                <home-loading v-else></home-loading>
            </transition>
    </div>
</template>

<script>
import AppView from './AppView.vue'
import WordpressApp from './components/PlantForm/WordpressApp.vue'
import LoginFromStrapi from './components/Conning/Login/LoginFromStrapi.vue'
import HomeLoading from './pages/Home/extra/HomeLoading.vue'

    export default {
        components: {
    AppView,
    WordpressApp,
    LoginFromStrapi,
    HomeLoading
},
        props: {
            _layout: { type: String, default: null }
        },
        data() {
            return {
                finished: false,
                shimmer: true,
                login_success: null
            }
        },
        mounted() {

            console.log('TOKEN =', this.$store.state.token)
        },
        methods: {
            
            plantFinished(v) {
                this.finished = v
                this.$refs.loginREF.touchLogin()
                this.$emit('shimmer_Father', false)
            },
            plantFinished_widget(v) {
                this.finished = v
                this.$emit('shimmer_Father', false)
            },

            loginSuccess(v) { this.login_success = true },

            loginDefeated(typed) {
                // TRUE = 有平台数据，登录失败
                // FALSE = 无平台数据，登录失败
                if (!typed) {
                    console.log('未找到 平台 userID，登录失败！！！')
                } else {
                    console.log('有 平台 数据，但是没有 Strapi User。登录失败')
                }

                this.login_success = false 
            },


            chronuChangeReload() { }
        },
    }
</script>

<style lang="sass" scoped>
    
.fade_out-leave,
.fade_out-leave-to
    transition: 1s all
    
.fade_out-leave
    opacity: 1
.fade_out-leave-to
    opacity: 0
    
    
.page_in-enter,
.page_in-enter-to
    transition: 1s all
    
.page_in-enter
    opacity: 0.3
    transform: translateY(20px)
.page_in-enter-to
    opacity: 1
    transform: translateY(0px)

</style>