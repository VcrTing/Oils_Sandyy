<template>
    
    <div class="ieedit-plus fx-r mt-2">
        <span @click="done" class="hand">
            <v-icon class="qiong-txt-16">
                mdi-plus
            </v-icon>
            新增換貨操作
        </span>
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
            done() {
                this.$emit('done_Father')
            }
        }
    }
</script>

<style lang="sass" scoped>
    
.ieedit-plus
    transition: all .4s
    user-select: none
    padding: 4px 12px     
    border-radius: 60px

    color: #555

    &:hover
        color: #000000DE
</style>