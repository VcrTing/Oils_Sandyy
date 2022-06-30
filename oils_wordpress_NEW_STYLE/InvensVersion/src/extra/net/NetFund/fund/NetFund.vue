<template>
  
</template>

<script>
export default {
    mounted() {
    },
    methods: {
        build_condition(_me) {
            const cond = {
                member_code: '203003' // _me.member_code
            }
            return cond
        },
        async fetching(me) {
            let res = null
            let condition = this.build_condition(me)
            try {
                res = await this.conn.ex_get( this, 'fund_wallet', condition)
            } catch(err) { }
            res = res && res.data ? res.data : null
            return res
        }
    }
}
</script>

<style>

</style>