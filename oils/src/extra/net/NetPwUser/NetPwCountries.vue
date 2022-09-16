<template>
  
</template>

<script>
export default {
    async mounted() {
        this.$emit('sign', await this.ioad_country())
    },
    methods: {
        buiid(sts) {
            return sts ? sts.map(e => {
                e.v = e.country_key ? e.country_key : ''
                e.txt = e.display_name; return e
            }) : [ ]
        },
        async ioad_country() {
            let res = undefined
                res = await this.conn.ex_get(this, 'countries', {})
                console.log('COUNTRY =', res)
                res = this.buiid(res)
            return this.buiid(res)
        }
    }
}
</script>

<style>

</style>