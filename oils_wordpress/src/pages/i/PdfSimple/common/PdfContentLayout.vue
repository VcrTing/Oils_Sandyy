<template>
    
    <div style="width: 100%;">
        <div :style="{ 'text-decoration': is_null ? 'none': 'underline', 'font-size': '1.2em' }">
            <slot name="header"></slot>
            <div style="height: 0.45rem"></div>
        </div>

        <div style="padding-left: 0rem" v-if="is_null">
            <slot name="body"></slot>
        </div>
        <pdf-empty-content v-else></pdf-empty-content>

        <div>
            <div style="height: 1rem"></div>
            <slot name="footer"></slot>
        </div>

        <div style="display: block">
            <slot name="extra"></slot>
            &nbsp;
        </div>
    </div>
</template>

<script>
import PdfEmptyContent from './inner/PdfEmptyContent.vue'
    export default {
  components: { PdfEmptyContent },
        name: '',
        props: {
            is_null: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.pc-table
    border: 1px solid #9e9e9e
    
</style>