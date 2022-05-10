<template>
    <div>
        <ui-pdf-panel :header="'各等級獲得LP點數'" class="b_son">
            <div class="td td-fix">
                <div class="w-35">等級一: 1.2LP</div>
                <div class="w-35">等級二: 1.44LP</div>
                <div class="w-30">等級三: 2.4LP</div>
            </div>
            <div class="td td-fix">
                <div class="w-35">等級四: 3.0LP</div>
                <div class="w-35">等級五: 3.6LP</div>
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