<template>
    
</template>
<script>
export default {
    methods: {
        async one(data) {
            let res = await this.conn.ex_get( this,
                'browse_stock',
                data
            )
            res = res && res.message ? res.message[0] : { }
            console.log('Invens =', data, res)
            return res
        }
    }
}
</script>