<template>
</template>

<script>
    export default {
        methods: {

            async sponsor(member_code, time_period) {
                return 0
                let tree = await this.conn.ex_get(this, 'user_s_tree', { member_code, time_period })
                let detail = await this.conn.ex_get(this, 'user_s_detail', { member_code, time_period })
                return [ tree.data, detail.data ]
            },
            async enroller(member_code, time_period) {
                return 0
                let tree = await this.conn.ex_get(this, 'user_e_tree', { member_code, time_period })
                let detail = await this.conn.ex_get(this, 'user_e_detail', { member_code, time_period })
                return [ tree.data, detail.data ]
            },
        }
    }
</script>

<style lang="sass">

</style>