<template>
  
</template>

<script>
export default {
    async mounted() {
        this.$emit('sign', await this.ioad_states())
    },
    methods: {
        buiid(sts) {
            return sts ? sts.map(e => {
                e.v = e.state_key ? e.state_key : ''
                e.country_key = e.country ? e.country.country_key : ''
                e.txt = e.display_name; return e
            }) : [ ]
        },
        async ioad_states() {
            let res = undefined
                res = await this.conn.ex_get(this, 'states', {})
                console.log('STATE =', res)
                res = this.buiid(res)
            return this.buiid(res)
        }
    }
}
</script>

<style>

</style>