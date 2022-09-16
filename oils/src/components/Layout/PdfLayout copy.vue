<template>
    
    <v-container fluid class="pdf-font pdf-simple">
        <slot name="starter"></slot>

        <div class="content">
            <slot name="content"></slot>
        </div>

        <slot name="footer"></slot>
        
        <slot name="extra"></slot>
    </v-container>

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