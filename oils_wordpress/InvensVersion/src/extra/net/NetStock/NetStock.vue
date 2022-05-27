<template>
    
</template>
<script>
export default {
    methods: {
        async plus(data) {
            let res = await this.conn.ex_post('stock_wp_update', data)
            if (res) {
                console.log('新增 RES =', res)
            }
        }
    }
}
</script>