<template>

    <tbody class="tbody-buy">
        <tr class="td-buy" v-for="(v, i) in _items" :key="i" border="1">
            <td class="fs-c" style="padding-left: 0; padding-right: 0; width: 4%">
                <span v-if="v.is_new">首</span>
                <span v-else>&nbsp;</span>
            </td>
            <td style="width: 9%;" class="fs-c">{{ v.customer_uuid.member_code }}</td>
            <td style="width: 25%;" >{{ v.customer_uuid.display_name }}</td>
            <td style="width: 9%;" class="fs-c">{{ v.uuid }}</td>
            <td style="width: 11%;" class="fs-c">{{ view.ser_timed_en(v.ordered_date, true) }}</td>
            <td style="width: 14%;" class="">
                <span>HK$</span>
                <span style="float: right">{{ v.product_total }}</span>
            </td>
            <td style="width: 7%;" class="fs-c">{{ v.total_pv }}</td>
            <td style="width: 21%;" class="fs-c">{{ v.shipping_total }}</td>
        </tr>

        <pdf-buy-total v-if="_items" :buys="_items" class="td-buy"></pdf-buy-total>

        <pdf-buy-footer class="td-buy"></pdf-buy-footer>
        <pdf-buy-footer class="td-buy"></pdf-buy-footer>
        <pdf-buy-footer class="td-buy"></pdf-buy-footer>
    </tbody>


    <!---div class="tbody-buy">
        <div style="overflow: hidden; display: block;" class="td-buy" v-for="(v, i) in _items" :key="i">
            <div style="width: 5%;" class="fs-c fl">
                <span v-if="v.is_new">首</span>
                <span v-else>&nbsp;</span>
            </div>
            <div style="width: 13%;" class="fs-c fl">{{ v.customer_uuid.member_code }}</div>
            <div style="width: 25%; padding-right: 2px;" class="fl">{{ v.customer_uuid.display_name }}</div>
            <div style="width: 9%;" class="fs-c fl">{{ v.uuid }}</div>
            <div style="width: 16%;" class="fs-c fl">
                {{ view.ser_timed_en(v.ordered_date, true) }}
            </div>
            <div style="width: 13%;" class="fl">
                <span>HK$</span>
                <span style="float: right">{{ v.product_total }}</span>
            </div>
            <div style="width: 9%;" class="fs-c fl">{{ v.total_pv }}</div>
            <div style="width: 10%;" class="fs-c fl">{{ v.shipping_total }}</div>
        </div>

        <pdf-buy-total :buys="_items" class="td-buy"></pdf-buy-total>

        <pdf-buy-footer class="td-buy"></pdf-buy-footer>
        <pdf-buy-footer class="td-buy"></pdf-buy-footer>
        <pdf-buy-footer class="td-buy"></pdf-buy-footer>
    </div-->
</template>

<script>
import PdfBuyFooter from '../Tool/PdfBuyFooter.vue'
import PdfBuyTotal from '../Tool/PdfBuyTotal.vue'
    export default {
  components: { PdfBuyTotal, PdfBuyFooter },
        name: '',
        props: {
            _items: Array
        },
        data() {
            return {
                footer: [
                    {}, {}, {}, {}
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
.tbody-buy
.td-buy


.td-buy td
    padding: 4px
</style>