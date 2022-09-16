<template>
    <div>
        <qiong-space :space="'2vh'"></qiong-space>
        <qiong-space :space="'1vw'"></qiong-space>
        <div class="qiong-sub_header_element qiong-txt-36 fw-b">
            歡迎來到一葉
        </div>
        <qiong-space :space="'1.2vh'"></qiong-space>
        <qiong-space :space="'1vw'"></qiong-space>
        <div>
            <v-text-field 
                :rules="rules_email"  color="rgba(44, 43, 43, 0.7)"
                class="qiong-round_input qiong-txt-16 mt-0 py-0 qiong-input_L" 
                placeholder="郵箱"

                :error-messages="error_username"
                v-model="username"></v-text-field>

            <v-text-field 
                :rules="rules_pass"  color="rgba(44, 43, 43, 0.7)"
                class="qiong-round_input qiong-txt-16 mt-0 py-0 qiong-input_L" 
                placeholder="密碼"

                :error-messages="error_password"
                v-model="password"></v-text-field>

            <qiong-space :space="'0.3vh'"></qiong-space>
            <v-checkbox
                label="記住密碼"
                v-model="remember_pass"
                color="accent"
                class="my-0 py-0 qiong-accent_reverse_check_box"
            ></v-checkbox>

            <qiong-space :space="'0.3vh'"></qiong-space>
            <qiong-space :space="'0.3vw'"></qiong-space>
        </div>
        <div class="qiong-td">
            <div class="qiong-wide-51 pr-0">
                <qiong-button-accent :color="'secondary'" :extra_class="'qiong-input_S_self'" @done_Father="readyLogin">
                    <span class="qiong-txt-16">登錄</span>
                </qiong-button-accent>
            </div>
            <div class="qiong-wide-16">&nbsp;</div>
            <div class="qiong-wide-33 pr-0">
                <qiong-button-accent :extra_class="'qiong-input_T_self'" :outline="true">
                    <span class="qiong-txt-16">註冊</span>
                </qiong-button-accent>
            </div>
        </div>
    </div>
</template>

<script>
import QiongButtonAccent from '../../../../components/Qiong/Button/QiongButtonAccent.vue'

import QiongHeader from '../../../../components/Qiong/Pager/QiongHeader.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
    export default {
  components: { QiongHeader, QiongSpace, QiongButtonAccent },
        name: '',
        data() {
            return {
                username: '',
                password: '',
                remember_pass: false,

                error_username: null,
                error_password: null,

                rules_email: [
                    // value => !!value || 'Required.',
                    // value => (value || '').length >= 4 || 'Min 4 characters',
                    value => (value || '').length <= 40 || '不得超過40字符',
                    value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || '請輸入正確的郵箱格式。'
                    },
                ],
                rules_pass: [
                    // value => !!value || 'Required.',
                    // value => (value || '').length >= 4 || 'Min 4 characters',
                    value => (value || '').length <= 40 || '不得超過40字符',
                ],
            }
        },
        methods: {
            msgLog(typed = 'username', msg = null) {
                if (typed == 'username') {

                    this.error_username = msg 
                    setTimeout(() => {
                        this.error_username = null
                    }, 2400)
                } else if (typed == 'password') {

                    this.error_password = msg
                    setTimeout(() => {
                        this.error_password = null
                    }, 2300)
                }
            },

            readyLogin() {
                let go = true
                // console.log('登錄')
                this.username = this.username.trim()
                this.password = this.password.trim()

                if (this.username == '') {
                    go = false
                    this.msgLog('username', '請輸入您的電郵地址')
                }
                if (this.password == '') {
                    go = false
                    this.msgLog('password', '請輸入您的密碼')
                }

                if (go) {
                    // this._Login()
                    const data = {
                        username: this.username,
                        password: this.password
                    }

                    this.$emit('readyLogin_Father', data)
                }
            },

            /*
            async _Login() {
                const condition = {
                    identifier: this.username,
                    password: this.password,
                }

                try {
                    const res = await this.conn.login(condition)

                    if (res) {
                        const user = res.data.user
                        this.$store.commit('changeAuth', res.data.jwt)
                        this.$store.commit('saveBackendUser', user)
                        
                        if (!user.sponser_id) {
                            this.$router.push({ path: '/' })
                        } else {
                            this.$router.push({ path: '/home/user/center' })
                        }
                    }
                } catch(e) {
                    this.view.alert_message('賬號或密碼錯誤！！！')
                }
            },
            */
        },
    }
</script>

<style lang="sass" scoped>
    
</style>