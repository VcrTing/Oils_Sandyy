<template>
    <div></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        async mounted() {
            
            await this.chronusNow()
        },
        methods: {
            
            async chronusNow() {
                let res = this.view.getToday()

                res = {
                    '_where[start_lte]': res,
                    '_where[end_gte]': res
                }

                res = await this.conn.get(
                    this.api.chronus,
                    this.$store.state.token,
                    res
                )

                if (res) {
                    
                    if (res.length > 0) {
                        let data = res[0]
                        data.start = this.view.chronu_start(data.start)

                        this.$store.commit('saveChronus', [ data, true ])
                        this.$store.commit('saveChronusNow', data)
                    } else {
                        this.$store.commit('saveDialog', 601)
                    }
                } else {
                    this.$store.commit('saveDialog', 600)
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>