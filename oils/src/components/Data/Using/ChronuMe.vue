<template>
    <div></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                chronued: false
            }
        },
        methods: {
            
            async chronuLoading(chronu_id = null) {
                let condition = {
                    '_limit': 999
                }
                if (chronu_id) {    
                    condition['id'] = chronu_id
                } else {
                    condition['id'] = this.$store.state.chronus.id
                }

                const res = await this.conn.get(this.api.chronus, this.$store.state.token, condition)

                if (res) {
                    if (res.length > 0) {

                        this.chronued = true
                    } else {
                        this.chronued = false
                    }
                }

                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>