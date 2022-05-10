<template>
    <div>
        PDF
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                member_code: null,
                chronu_id: null
            }
        },
        created() {
            const id = this.$route.query.member_code 
            const chronu = this.$route.query.chronu_id 
            this.valuation(id, chronu)
        },
        methods: {
            
            valuation(id = null, chornu = null) {
                if (id) {
                    this.member_code = id
                } else {
                    this.member_code = this.$store.state.user_backend.member_code
                }

                if (chornu) {
                    this.chronu_id = chornu
                } else {
                    this.chronu_id = this.$store.state.chronus.id
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>