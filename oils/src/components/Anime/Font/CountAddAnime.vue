<template>
    <div
        :startVal="0"
        :endVal="res"
        :duration='sec'
    ></div>
</template>

<script>
    export default {
        components: {
            
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