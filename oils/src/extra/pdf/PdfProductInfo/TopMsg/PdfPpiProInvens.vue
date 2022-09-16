<template>
    <div>
        <ui-pdf-panel :header="'庫存記錄'" class="b_son">
            <div class="td td-fix">
                <div class="w-35">庫存總數: 1997</div>
                <div class="w-35">尖沙咀倉庫總數: 999</div>
                <div class="w-30">火炭倉庫總數: 998</div>
            </div>
        </ui-pdf-panel>
    </div>
</template>

<script>
import UiPdfPanel from '../../layout/UiPdfPanel.vue'
    export default {
        name: '',
        components: { UiPdfPanel },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>