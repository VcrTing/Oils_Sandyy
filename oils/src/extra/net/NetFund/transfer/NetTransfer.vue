<template>
    <net-fund ref="fdREF"></net-fund>
</template>

<script>
import NetFund from '../fund/NetFund.vue'
export default {
  components: { NetFund },
    computed: {
        user( ) {
            return this.$store.state.user_backend
        }
    },
    methods: {

        async transfer(data) {
            let fund = await this.$refs.fdREF.fetching(this.user)
            if( fund ) {
                try {
                    console.log('data', data)
                let res = true // await this.conn.ex_post(this, 'transfer', data)
                console.log('转账 RES =', res)
                if(res) { return 200 } } catch(err) { return 500 }
            }
            return 400
        }
    }
}
</script>

<style>

</style>