<template>
    <div></div>
</template>

<script>
import LoginDefeated from './LoginDefeated.vue'
    export default {
  components: { LoginDefeated },
        data() {
            return {
                user: null,
                token: null,

                member_code: null,
                username: null,
                password: null,

                sign_defeated: null,

                end_login: false
            }
        },
        methods: {
            // 处理登录之前
            touchLogin() {
                this.username = this.$store.state.platform_data.username
                this.password = this.$store.state.platform_data.password
                this.token = this.$store.state.platform_data.token

                if (this.username) {
                    this.login(!this.conf.TEST)
                } else {
                    this.sign_defeated = false
                    this.$emit('defeated_Father', this.sign_defeated)
                }
            },
            // 处理 平台登录干预
            intervenLogin() {
                if (this.$store.state.layout == this.conf.LAYOUT.WORDPRESS) {
                    this.member_code = this.$store.state.platform_data.member_code
                } else {
                    this.member_code = this.user.member_code 
                }
            },

            // 处理登录之后
            async switchLoginSuccess(user) {
                user.sponser_id = user.sponsor_id
                await this.$store.commit('saveBackendUser', user)
                
                this.$emit('success_Father', true)

                if (user.sponser_id) {
                    this.$router.push({ path: '/home/user/center' })
                }
            },

            // 登录
            async login(use_token) {

                try {
                    let res
                    if (use_token) {
                        res = {
                            data: {
                                jwt: this.token,
                                user: {
                                    username: this.username,
                                    password: this.password
                                }
                            }
                        }
                    } else {
                        res = await this.conn.login({ identifier: this.username, password: this.password, })
                    }

                    if (res) {
                        await this.$store.commit('changeAuth', res.data.jwt)
                        this.user = res.data.user

                        // 干预 登录
                        this.intervenLogin()

                        // 获取真正的用户
                        await this.unidForUser()
                    }
                } catch(e) {
                    this.sign_defeated = true
                    this.$emit('defeated_Father', this.sign_defeated)
                }

                this.end_login = true
            },
            
            async unidForUser() {

                let user = await this.conn.get(
                    this.api.users,
                    this.$store.state.token,
                    {
                        'member_code': this.member_code
                    }
                )
                if (user) {
                    if (user.length > 0) {

                        this.user = user[0]

                        this.switchLoginSuccess(user[0])
                    }
                } else {
                    this.sign_defeated = true
                    this.$emit('defeated_Father', this.sign_defeated)
                }

            },
        },
    }
</script>

<style lang="sass" scoped>
    
</style>