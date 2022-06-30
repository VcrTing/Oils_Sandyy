<template>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            async _lunching(_cond) {
                let res = await this.conn.ex_get(this, 'browse_LP_log', _cond)
                res = res && res.message ? res.message : [ ]
                return res.map(e => {
                    e.is_plus = this._is_plus(e.LP_difference)
                    e.LP_difference = this._ser_lp(e.LP_difference)
                    return e
                })
            },

            async LpRecord(condition) {
                return await this._lunching(condition)
            },

            async LpAddRecord(condition) {
                condition.description = 'additional'
                return await this._lunching(condition)
            },

            _ser_lp(v) {
                return v ? Math.abs(Number.parseFloat(v)) : 0
            },
            _is_plus(v) {
                return v ? (v.indexOf('+') >= 0) : null
            }
        }
    }
    /*
                await this.conn.get(
                    this.api.browse_LP_log(code),
                    this.$store.state.token,
                    {

                    }
                )
                */
</script>

<style lang="sass" scoped>
    
</style>