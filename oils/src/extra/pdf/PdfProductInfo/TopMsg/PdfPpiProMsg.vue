<template>
    <div>
        <ui-pdf-panel :header="'產品信息'" class="b_son">
            <div class="td td-fix">
                <div class="w-35">產品中文名: 得了</div>
                <div class="w-35">產品英文名: BASIL</div>
                <div class="w-30">SKU: SY1000000877</div>
            </div>
            <div class="td td-fix">
                <div class="w-35">PV: 12</div>
                <div class="w-35">價格: HK$120/件</div>
                <div class="w-30"></div>
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