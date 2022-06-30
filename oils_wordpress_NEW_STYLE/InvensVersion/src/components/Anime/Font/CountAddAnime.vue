<template>
    <count-to
        :startVal="0"
        :endVal="res"
        :duration='sec'
    ></count-to>
</template>

<script>
import CountTo from 'vue-count-to'
    export default {
        components: {
            CountTo
        },
        props: {
            res: {
                type: Number
            },
            sec: {
                type: Number,
                default: 1800
            }
        },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>