<template>
    <div v-if="option == 1" class="btn-ietool" @click="go(0)">
        保存
    </div>
    <div v-else class="btn-ietool" @click="go(1)">
        編輯
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            k: Number,
            option: Number
        },
        data() {
            return {
                
            }
        },
        methods: {
            go(v) {
                this.$emit('done_Father', v, this.k)
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>
