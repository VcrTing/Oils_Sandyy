<template>
    <img class="img" :src="ratio_src">
</template>

<script>
    export default {
        name: '',
        props: {
            ratio: Number
        }
        ,computed: {
            ratio_src() {
                return require(`@/assets/loyalty/${ this.ratio }p.png`)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>