<template>
    <div>
        <div class="qiong-txt-22 qiong-pt-10 mt-2 page-inner-title" :class="extra_class">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            extra_class: {
                type: String
            },
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