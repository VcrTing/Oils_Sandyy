<template>
    <div style="overflow: hidden" v-if="bigger == 0">
        <div style="width: 40%; float: left;">
            <slot name="k"></slot>
        </div>
        <div style="width: 60%; float: left;">
            <slot name="v"></slot>
        </div>
    </div>
    <div style="overflow: hidden" v-else-if="bigger == -1">
        <div style="width: 32%; float: left;">
            <slot name="k"></slot>
        </div>
        <div style="width: 68%; float: left;">
            <slot name="v"></slot>
        </div>
    </div>
    <div style="overflow: hidden" v-else-if="bigger == 1">
        <div style="width: 45%; float: left;">
            <slot name="k"></slot>
        </div>
        <div style="width: 55%; float: left;">
            <slot name="v"></slot>
        </div>
    </div>
    <div style="overflow: hidden" v-else-if="bigger == 2">
        <div style="width: 60%; float: left;">
            <slot name="k"></slot>
        </div>
        <div style="width: 40%; float: left;">
            <slot name="v"></slot>
        </div>
    </div>
    <div style="overflow: hidden" v-else-if="bigger == 3">
        <div style="width: 66%; float: left;">
            <slot name="k"></slot>
        </div>
        <div style="width: 34%; float: left;">
            <slot name="v"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            bigger: {
                type: Number,
                default: 0
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