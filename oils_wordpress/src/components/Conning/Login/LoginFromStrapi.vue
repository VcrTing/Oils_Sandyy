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
        computed: {
            iayout() { return this.$store.state.layout },
            platform() { return this.$store.state.platform_data }
        },
        methods: {
            // 处理登录之前
            touchLogin() {
                this.username = this.platform.username
                this.password = this.platform.password
                this.token = this.platform.token

                if (this.username) {
                    this.login(!this.conf.TEST)
                } else {
                    this.sign_defeated = false
                    this.$emit('defeated_Father', this.sign_defeated)
                }
            },
            // 处理 平台登录干预
            intervenLogin() {
                if (this.iayout == this.conf.LAYOUT.WORDPRESS) {
                    this.member_code = this.platform.member_code
                } else {
                    this.member_code = this.user.member_code ? this.user.member_code : '203001'
                }
            },

            // 处理登录之后
            async switchLoginSuccess(user) {
                user.sponser_id = user.sponsor_id
                await this.$store.commit('saveBackendUser', user)
                
                this.$emit('success_Father', true)

                if (user.sponser_id) {
                    if (this.iayout == this.conf.LAYOUT.WORDPRESS) {
                        this.$router.push({ path: '/home/user/center' })
                    } else {
                        console.log('维持原路径')
                    }
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
                        console.log('本地用户登录')
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
                console.log('登录成功，获取 =', this.member_code, user)
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