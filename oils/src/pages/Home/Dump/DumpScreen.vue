<template>
    <qiong-loading></qiong-loading>
</template>

<script>
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
    export default {
        components: { QiongLoading },
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {

            const query = { 'menu': false }
            const id = this.$route.query.member_code
            const chronu = this.$route.query.chronu_id
            
            if (id) { query.member_code = id }
            if (chronu) { query.chronu_id = chronu }

            setTimeout(() => {
                this.$router.push({
                    path: '/ui/pdf', query
                })
            }, 100)
        },
    }
</script>

<style lang="sass" scoped>
    
</style>