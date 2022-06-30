<template>
    
    <transition name="slide-up">
        <div class="sureModal px-7 py-6" v-if="show">
            <div class="qiong-txt-tr">
                你確定要刪除它嗎？
            </div>
            <div class=" qiong-pt-15 mt-2 fx-r ">
                <button class="sm-fail fw-b" @click="cancel">取消</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="sm-sure fw-b" @click="done">確定</button>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                show: false
            }
        },
        methods: {

            done() {
                this.show = false
                this.$emit('done_Father')
            },

            cancel() {
                this.show = false
            }
        }
    }
</script>

<style lang="sass" scoped>
    
.slide-up
    transition: all 1s
    transform: translateY(20vh)
</style>