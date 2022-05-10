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
            async fecthingUser(mc) {
                let res = await this.conn.get(
                    this.api.users,
                    this.$store.state.token,
                    {
                        'member_code': mc
                    }
                )

                if (res) {
                    res = res ? res[0]: { }
                    return res
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>