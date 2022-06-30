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
            async lunching(funnel) {
                let res = await this.conn.get(
                    this.api.browse_LEVEL_log, // this.api.browse_rank_change_auto
                    this.$store.state.token,
                    {
                        // member_code: code,
                        ...funnel,
                        _limit: 300
                    }
                )
                res = res && res.data ? res.data : [ ]
                return res.map(e => {
                    e.change = this._ser_change(e.change)
                    return e
                })
            },


            _ser_change(v) {
                v = v && v.rank ? v.rank : null
                v = v ? v.split('=>') : null
                return v && v.length > 0 ? { origin: v[0], now: v[1] } : null
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>