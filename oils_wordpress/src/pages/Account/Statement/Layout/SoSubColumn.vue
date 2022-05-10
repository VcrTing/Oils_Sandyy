<template>
    
    <div class="qiong-td qiong-pb-5">
        <div class="qiong-wide-55">
            <slot></slot>
        </div>
        <div class="qiong-wide-45 fw-n pr-0">
            {{ v }}
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            v: {
                type: String
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