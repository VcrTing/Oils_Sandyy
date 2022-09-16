<template>
    <div>
        <router-view v-if="$store.state.chronus"/>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        mounted() {

            this.init()

            console.log('来到 WIDGET')
        },

        methods: {


            init() {
                setTimeout(e => {
                    this.$emit('sign_Father', true)
                }, 200)
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>