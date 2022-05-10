<template>
    <span>{{ txt }}</span>
</template>

<script>
    export default {
        name: '',
        props: [
            'opr'
        ],
        computed: {
            txt() {
                let res = '減貨'
                if (this.opr == 1) {
                    res = '加貨'
                }
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>