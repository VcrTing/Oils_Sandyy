<template>
    <div class="loading-small" v-if="bigger == -1"></div>
    <div class="loading-huge" v-else-if="bigger == 1"></div>
    <div class="loading-massive" v-else-if="bigger == 2"></div>
    <div class="loading" v-else></div>
</template>

<script>
export default {
    name: 'LoadingSmall',
    props: {
        bigger: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped lang="sass">

.loading,
.loading-huge,
.loading-small,
.loading-massive
    background-color: none !important
    background: url('~@/assets/loading.gif') center center no-repeat
    width: 100%
    height: 100%
    z-index: 900 

.loading
    background-size: 3.2vw 3.2vw
    min-height: calc( 4.3vw + 120px )

.loading-small
    background-size: 20px 20px
    min-height: 15px

.loading-huge
    background-size: 4.2vw 4.2vw
    min-height: calc( 6vw + 120px )

.loading-massive
    background-size: 6.2vw 6.2vw
    min-height: calc( 7vw + 120px )


@media screen and ( max-width: 768px )
    .loading
        background-size: 7.3vw 7.3vw
        min-height: calc( 7.3vw + 100px )

    .loading-small
        background-size: 30px 30px
        min-height: 24px

    .loading-huge
        background-size: 10vw 10vw
        min-height: calc( 11vw + 120px )

    .loading-massive
        background-size: 15vw 15vw
        min-height: calc( 16vw + 120px )
</style>