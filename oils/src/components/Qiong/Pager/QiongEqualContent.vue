<template>
    <div class="qiong-td qiong-line-hight-15">
        <div :class="first_class" class="pr-0">
            <slot name="label"></slot>
        </div>
        <div :class="second_class" class="pr-0">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            first_class: {
                type: String,
                default: 'ec-wide-4chart'
            },
            second_class: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="sass" scoped>

.ec-wide-4chart
    width: calc( 60px + 2vw )
.ec-wide-6chart
    width: calc( 64px + 4vw )

</style>