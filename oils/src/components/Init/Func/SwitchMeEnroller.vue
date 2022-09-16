<template>
    
</template>

<script>
    export default {
        name: '',
        props: {
            member_code: {
                type: String
            }
        },
        data() {
            return {
                
            }
        },
        mounted() {
            if (
                this.$store.state.user_enroller
            ) {

                this.switchMe(this.member_code)
            }
        },
        methods: {

            _num_Res(u) {
                let son_can_num = 0

                if (!u.son_can_num) { 
                    if (u.children) {

                        u.children.map(e => {
                            let p = e.bonu_period.individual_pv
                            
                            if (p >= this.bonus.conf.USER_PV_LIMIT) {
                                son_can_num += 1
                            }
                        })
                    }

                    u.son_can_num = son_can_num
                    u.bonu_period.son_can_num = son_can_num
                    
                    this.$store.state.user_backend.son_can_num = son_can_num
                    this.$store.commit('saveBackendUser', this.$store.state.user_backend)
                } else {
                    
                }

                return u
            },
            switchMe(code) {
                const users = this.$store.state.user_enroller
                for (let u of users) {
                    if (u.member_code == code) {

                        u = this._num_Res(u)
                        this.$emit('mine_Father', u)
                        break
                    }
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>