<template>
    
    <a class="btn-filter qiong-txt-12 btn-filter-to-down" @click="down">
        <span>
            <v-icon class="qiong-txt-15">mdi-chevron-double-down</v-icon>&nbsp;
            去到底部
        </span>
    </a>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            down() {
                window.scrollTo(0, document.body.scrollHeight)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>