<template>
    
</template>
<script>
export default {
    methods: {
        async many(data) {
            let res = await this.conn.ex_get( this,
                'browse_LP_log',
                data
            )
            res = res && res.message ? res.message : [ ]
            return res
        }
    }
}
</script>