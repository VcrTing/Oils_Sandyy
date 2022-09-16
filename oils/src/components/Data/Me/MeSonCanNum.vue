<template>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            this.numing_backend()
        },
        methods: {
            numing_backend() {
                let res = 0
                let lines = this.$store.state.bonus_qualify_line
                if (lines) {
                    lines.map(e => {

                        if (e.individual_pv >= this.bonus.conf.USER_PV_LIMIT) {
                            res += 1
                        }
                    })
                    this.$emit('sign_Father', res)
                }
                return res
            },


            numing(u) {
                let num = 0
                if (u.children) {
                    let c = u.children
                    c.map(e => {
                        if (e.bonu_period.individual_pv >= this.bonus.conf.USER_PV_LIMIT) {
                            num += 1
                        }
                    })
                }
                return num
            },

            numing_can_num(mc) {
                const childs = this.$store.state.user_enroller
                mc = mc ? mc : this.$store.state.user_backend.member_code

                for (let i= 0; i< childs.length; i++ ) {
                    let e = childs[i]
                    if (e.member_code == mc) {
                        mc = e; break
                    }
                }

                mc = this.numing( mc )
                this.$emit('sign_Father', mc)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>