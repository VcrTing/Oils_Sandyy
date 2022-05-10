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
            async _count(flag, res) {
                res = await this.conn.get(
                    this.api.build(
                        this.conf.ENDPOINT[ flag ] + '/count'
                    ),
                    this.$store.state.token,
                    res
                )

                if (res) {
                    return res
                }
            },
            async count(flag, condition = null) {

                if (flag == 'stock') { flag = 'browse_log_stock' }

                return this._count(flag, condition)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>