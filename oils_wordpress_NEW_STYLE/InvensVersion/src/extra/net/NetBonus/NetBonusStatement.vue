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
        methods: {
            build_condition(me) {
                let period = this.$store.state.chronus.end
                period = period ? period.substring(0, 7) : ''

                return {
                    member_code: me.member_code,
                    period
                }
            },
            async fetching(me) {
                let condition = this.build_condition(me)
                let res = await this.conn.get( this.api.bonus_statement, this.$store.state.token, condition)
                return res && res.message ? res.message : null
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>