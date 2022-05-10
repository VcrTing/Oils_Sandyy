<template>
    <div></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                buyed: false
            }
        },
        methods: {
            async buyLoading() {
                const condition = {
                    '_sort': 'published_at:DESC',
                    'time_period': this.$store.state.chronus.id,
                    'users_permissions_user': this.$store.state.user_backend.id,
                    '_limit': 999
                }
                
                let res = await this.conn.get(this.api.buys, this.$store.state.token, condition)

                if (res) {
                    if (res.length > 0) {
                        
                        await this.$store.commit('saveLayout', this.layout)
                        this.buyed = true
                    } else {
                        this.buyed = false
                    }
                }

                return res
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>