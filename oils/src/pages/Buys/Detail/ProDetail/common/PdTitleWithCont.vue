<template>
    <div class="pro-txt-cont">
        <p class="qiong-txt-14 txt-sub" v-html="header"></p>

        <div class="qiong-txt-20 fw-b qiong-pt-2 txt-cold-dark mt-1">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'header' ],
    }
</script>

<style lang="sass" scoped>
.pro-txt-cont
    line-height: 1em
    padding-bottom: 1em !important
    & > div
        padding-top: 0.6vw
        line-height: 1.24em
</style>