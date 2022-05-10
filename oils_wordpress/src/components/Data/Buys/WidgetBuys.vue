<template>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                hide: 'cancelled_on-hold_refunded_failed' // processing
            }
        },
        methods: {

            async swicthing() {
                let buys = [ ]
                let res = await this.conn.get(this.api.orders, this.$store.state.token, {
                    'time_period': this.$store.state.chronus.id, '_sort': 'ordered_date:DESC',
                    '_limit': 999
                })
                
                if (this.$store.state.is_admin) {
                    // res = this.filterMe(res)
                }
                
                res.map(e => {
                    if ( this.hide.indexOf( e.status ) < 0) { buys.push( e ) }
                })

                return buys
            },

            filterMe(res) {
                let result = [ ]
                const me = this.$store.state.user_backend
                const collect = this.$store.state.user_collection.map(e => e.member_code)

                res.map( e => {
                    if (collect.indexOf(e.customer_uuid.member_code)) {
                        result.push(e)
                    }
                })
                return result
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>