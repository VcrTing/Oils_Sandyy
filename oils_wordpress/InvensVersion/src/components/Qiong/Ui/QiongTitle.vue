<template>
    <div>
        <div :class="size_class">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            size_class: {
                type: String,
                default: 'qiong-txt-42'
            }
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