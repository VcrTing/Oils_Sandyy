<template>
    <div v-if="item.option == 0" class="py-1">
        {{ item.num }}
    </div>
    <div v-else class="">
        <input class="input ie-input" type="number" v-model="item.num">
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            item: Object
        },
        data() {
            return {
                
            }
        },
        
        mounted() {

        },
    }
</script>

<style lang="sass" scoped>
    
</style>