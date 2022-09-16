<template>
    
    <div class="qiong-td qiong-mt-10 mobie-mt-0">
        <div class="qiong-wide-8"></div>
        <div class="qiong-wide-84 pr-0 mobie-wide-100">
            <slot></slot>
        </div>
        <div class="qiong-wide-8"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            _res: {
                type: Object
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>