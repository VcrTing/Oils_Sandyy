<template>
    <location-me ref="meREF"></location-me>
</template>

<script>
import LocationMe from './LocationMe.vue'
    export default {
  components: { LocationMe },

        async mounted() {
            console.log('执行初始化')

            let res = undefined
            let code = this.$store.state.user_backend
            code = code ? code.member_code : null

            if (code) {
                res = this.$refs.meREF.locationMe(code, 'ENROLLER')
            }
            
            this.$emit('recive_Father', res)
        }
    }
</script>

<style lang="sass" scoped>
    
</style>