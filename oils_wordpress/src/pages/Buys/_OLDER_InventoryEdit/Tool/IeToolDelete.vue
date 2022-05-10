<template>
    <span class="ietool-trsh ml-3" @click="sure">
        <v-icon class="qiong-txt-18">mdi-trash-can-outline</v-icon>
    </span>
</template>

<script>
    export default {
        name: '',
        props: {
            index: Number
        },
        data() {
            return {
            }
        },
        methods: {
            sure() {
                this.$emit('done_Father', this.index)
            },

        }
    }
</script>

<style lang="sass" scoped>

</style>