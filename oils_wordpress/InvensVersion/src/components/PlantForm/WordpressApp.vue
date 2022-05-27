<template>
    <div>
        <data-from-plant-form  @recive_Father="reciveData"></data-from-plant-form>
    </div>
</template>

<script>
import LoginFromStrapi from '../Conning/Login/LoginFromStrapi.vue'
import DataFromPlantForm from '../Conning/PlantForm/DataFromPlantForm.vue'
    export default {
        components: {
            DataFromPlantForm,
            LoginFromStrapi
        },
        name: '',
        data() {
            return {
                word_data: null,
                def_code: '203001'
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            setToken() {
                let token = sessionStorage.getItem('sandyy_vx_tk')
                if (token) {
                    token = token.slice(0, -1)
                    this.$store.commit('changeAuth', token)
                }
                
                window.sessionStorage.removeItem('sandyy_vx_tk')
                window.sessionStorage.removeItem('sandyy_active_code')
            },

            init() {
                let code = sessionStorage.getItem('sandyy_active_code')
                code = this.conf.TEST ? this.def_code : code
                
                if (code) { this.savingData({ member_code: code }); this.setToken() }
            },

            reciveData(data) {
                let res = data.params
                if (res) {
                    res.member_code = res.userID
                    this.savingData(res)
                }
            },

            // 判断是否为切换用户
            changeUser(data) {

                if (this.$store.state.platform_data) {

                    const rec_id = this.$store.state.platform_data.member_code
                    if (rec_id != data.member_code) {
                        if (!this.conf.TEST) {
                            window.location.reload()
                        }
                    }
                } else {
                    console.log('初次接收 WORDPRESS 的数据')
                }
            },

            // 监测 Admin
            judgeAdmin(plant_data) {
                if (this.conf.TEST) plant_data.isAdmin = 1;

                if (plant_data.isAdmin >= 1) {
                    this.$store.commit('saveAdmin', true)
                }
            },

            savingData(data) {
                data.username = this.conf.BOWSER.username
                data.password = this.conf.BOWSER.password

                this.changeUser(data)
                this.judgeAdmin(data)
                this.$store.commit('saveFromPlatform', data)

                this.$emit('sign_Father', true)
            }
        },
    }
</script>

<style lang="sass" scoped>
.data
    font-size: 36px
    color: rgb(7, 178, 67)
</style>