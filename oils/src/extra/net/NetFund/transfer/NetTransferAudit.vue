<template>
  
</template>

<script>
export default {
    methods: {
        async audit(data) {
            let res = true
        },
        async fetching() {
            let res = await this.conn.ex_get(this, 'transfer_audit_record', { _limit: 300 })
            console.log('转账审核 res =', res)
            if (res) {
                return res
            }
        },

        async edit(data) {
            let res = await this.conn.ex_patch(this, 'transfer_audit_edit', data, '')
            if (res) {
                return true
            }
        }
    }
}
</script>

<style>

</style>