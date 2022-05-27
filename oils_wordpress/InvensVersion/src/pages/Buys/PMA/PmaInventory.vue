<template>
    <v-container fluid class="qiong-txt-td">
        <qiong-header>
            庫存 PMA
        </qiong-header>
        <qiong-panel-element :need_space="false" class="mobie-table paner-pma">
            
            <pma-invs-tr></pma-invs-tr>
            <pma-invs-td :load="loading" :many="invs"></pma-invs-td>
        </qiong-panel-element>

        <table-pager-footer></table-pager-footer>
        <widget-inventory ref="invREF"></widget-inventory>
    </v-container>
</template>

<script>
import WidgetInventory from '../../../components/Data/inventory/WidgetInventory.vue'
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeader from '../../../components/Qiong/Pager/QiongHeader.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import PmaInvsTr from './pma_invens/PmaInvsTr.vue'
import PmaInvsTd from './pma_invens/PmaInvsTd.vue'
export default {
    components: { WidgetInventory, QiongLoading, QiongPanelElement, QiongHeader, TablePagerFooter, PmaInvsTr, PmaInvsTd },
    mounted() {
        this.fetching()
    },
    methods: {
        ioc_txt() {

        },  
        async fetching() {
            this.loading = true
            let res = await this.$refs.invREF.inventoryData()
            /*
            res.map(e => {
                if (e.sku == 'SY810300001-1') {
                    console.log('e =', e)
                }
            })
            */
            console.log('RES =', res)
            this.invs = res

            setTimeout(e => this.loading = false, 300)
        }
    },
    data() {
        return {
            loading: true,
            invs: [ ]
        }
    }
}
</script>

<style>

</style>
