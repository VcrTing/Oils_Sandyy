<template>
  
</template>

<script>
export default {
    mounted() {
    },
    methods: {
        build_condition(_me) {
            const cond = {
                member_code: _me.member_code
            }
            return cond
        },
        async fetching(me) {
            let res = null
            let condition = this.build_condition(me)
            try {
                console.log('每个人的账户 cond =', condition)
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