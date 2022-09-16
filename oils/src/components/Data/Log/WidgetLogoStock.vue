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
            async lunch(res) {
                const n = this.view.getToday()

                res = res ? res : { date_lte: n }
                res['_sort'] = 'date:DESC'
                res['_limit'] = 300

                // 
                res = await this.conn.get(
                    this.api.browse_log_stock,
                    this.$store.state.token, res
                )

                if (res && res.message) {
                    return res.message
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>