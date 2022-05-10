<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {
            let res = this.lockMine('ENROLLER')
            console.log('执行')
            this.$emit('recive_Father', res)
        },
        methods: {
            lockMine(model = 'SPONSER') {
                let many, res
                many = (model == 'SPONSER') ? this.$store.state.users_sponser : this.$store.state.users_enroller
                console.log('开始检索')
                const transfer = this.$store.state.transfer
                const _code = this.$store.state.user_backend.member_code
                
                if (many) {
                    console.log('检索自己 =', _code)
                    this.bonus._build_res(many, transfer, function(user, tt) {
                        if (user.member_code == _code) {
                            res = JSON.parse(JSON.stringify(user))
                        }
                    })
                } 
                
                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>