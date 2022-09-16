<template>
    
</template>
<script>
export default {
    methods: {
        async one(id) {
            let res = await this.conn.ex_get(
                this, 'products', { id }
            )
            if (res) {
                return res ? res[0] : null
            }
        },
        
    }
}
</script>