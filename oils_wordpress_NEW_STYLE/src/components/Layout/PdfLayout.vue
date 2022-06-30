<template>
    
    <div style="width: 100%; background: #fff; padding: 12px 0px; line-height: 1.5; font-size: 14px">
        <slot name="starter"></slot>

        <div>
            <slot name="content"></slot>
        </div>

        <slot name="footer"></slot>
        
        <slot name="extra"></slot>
    </div>

</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.pdf-simple
    padding: 2vw 7vw !important

.content .row
    margin: 0 !important
    padding-left: 0
    padding-right: 0
    width: 100%
</style>