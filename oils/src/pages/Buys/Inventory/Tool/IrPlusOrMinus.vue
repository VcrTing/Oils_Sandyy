<template>
    <span v-if="is_add">+</span>
    <span v-else>-</span>
</template>

<script>
    export default {
        name: '',
        props: {
            is_add: Boolean
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>