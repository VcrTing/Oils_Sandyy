<template>
    <div class="qiong-txt-12">
        
        <button class="btn-filter" @click="change(0)" :class="{ 'btn-filter_active': p == 0}">
            LP積分
        </button>
        <button class="btn-filter" @click="change(1)" :class="{ 'btn-filter_active': p == 1}">
            會員等級
        </button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                p: 0
            }
        },
        methods: {
            change(v) {
                this.p = v
                this.$emit('change_Father', v)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>