<template>
    <div class="loading-small" v-if="bigger == -1"></div>
    <div class="loading-huge" v-else-if="bigger == 1"></div>
    <div class="loading" v-else></div>
</template>

<script>
export default {
    name: 'LoadingSmall',
    props: {
        bigger: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style scoped lang="sass">

.loading,
.loading-huge,
.loading-small
    background-color: none !important
    background: url('~@/assets/NO_DATA.png') center center no-repeat
    width: 100%
    height: 100%
    z-index: 900 

.loading
    background-size: calc( 90px + 18.5vw )
    height: calc( 13vw + 90px )

.loading-small
    background-size: calc( 60px + 10.5vw )
    height: calc( 60px + 8vw )

.loading-huge
    background-size: calc( 120px + 25vw )
    height: calc( 18vw + 120px )

</style>