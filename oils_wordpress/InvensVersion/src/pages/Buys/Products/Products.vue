<template>
    <v-container fluid class="qiong-txt-12">
        
        <qiong-header-filter>
            <span slot="header">產品列表</span>
            <div slot="filter">

            </div>
        </qiong-header-filter>

        <qiong-panel-element :need_space="false" class="mobie-table">
            <products-tr></products-tr>
            <products-body :pros="products"></products-body>
        </qiong-panel-element>

        <table-pager-footer></table-pager-footer>
    </v-container>
</template>

<script>
import QiongPanelElement from '../../../components/Qiong/Ele/QiongPanelElement.vue'
import TablePagerFooter from '../../../components/Qiong/Footer/TablePagerFooter.vue'
import QiongHeaderFilter from '../../../components/Qiong/Pager/QiongHeaderFilter.vue'
import ProductsBody from './Body/ProductsBody.vue'
import ProductsTr from './Tr/ProductsTr.vue'
    export default {
  components: { QiongHeaderFilter, QiongPanelElement, TablePagerFooter, ProductsTr, ProductsBody, },
        name: '',
        data() {
            return {
                products: [ ]
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let res = this.$store.state.products
                this.products = res
            }
        },

    }
</script>

<style lang="sass" scoped>
    
</style>