<template>
    <div>

    </div>
</template>

<script>
import app_init from '@/common/es/app_init/index'

    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            _serBonu(bonus) {
                for (let b of bonus) {
                    b.vip_code = app_init.vip_view.rank_to_code(b.Rank)
                    if (b.user) {
                        b.member_code_int = Number.parseInt(b.user.member_code)
                    }
                }
                
                bonus = bonus.sort((n, o) => {

                    return n.member_code_int - o.member_code_int
                })
                return bonus
            },
            async switchingBonus(filter) {

                let condition = filter
                condition['_limit'] = 999

                let res = await this.conn.get(
                    this.api.bonus,
                    this.$store.state.token,
                    condition
                )

                if (res) {
                    return this._serBonu(res)
                }

                return [ ]
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>