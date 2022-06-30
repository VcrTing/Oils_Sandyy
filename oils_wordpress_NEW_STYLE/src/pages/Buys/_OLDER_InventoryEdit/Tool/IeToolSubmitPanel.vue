<template>
    <div class="px-7 fx-c">
        <button class="btn-ie-submit fw-b" @click="submit">
            提交更改
        </button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            submit() {
                this.$emit('submit_Father')
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>