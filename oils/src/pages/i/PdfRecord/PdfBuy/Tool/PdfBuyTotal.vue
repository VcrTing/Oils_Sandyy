<template>
    <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td class="fs-c">{{ ew }}</td>
        <td>
            <span>HK$</span>
            <span style="float: right">{{ ps }}</span>
        </td>
        <td class="fs-c">
            &nbsp;{{ pv }}&nbsp;
        </td>
        <td class="fs-c">
            <span>{{ sp }}</span>
        </td>
    </tr>
    <!-- div style="overflow: hidden; display: block;">
        <div style="width: 5%;" class="fl">&nbsp;</div>
        <div style="width: 13%;" class="fs-c fl">&nbsp;</div>
        <div style="width: 25%;" class="fl">&nbsp;</div>
        <div style="width: 9%;" class="fl fs-c">&nbsp;</div>
        <div style="width: 16%;" class="fl fs-c">&nbsp;</div>
        <div style="width: 13%;" class="fl">
            <span>HK$</span>
            <span style="float: right">{{ prices }}</span>
        </div>
        <div style="width: 9%;" class="fs-c fl">
            &nbsp;{{ pvs }}&nbsp;
        </div>
        <div style="width: 10%;" class="fl">
            <span>HK$</span>
            <span style="float: right">{{ shipping }}</span>
        </div>
    </div -->
</template>

<script>
    export default {
        props: { buys: Array },
        computed: {
            ew() {
                let ews = 0
                this.buys.map(e => {
                    e.is_ewallet ? ( ews = this.view.floatAdd(ews, e.ewallet_detail.ewallet_used) ) : 0
                })
                return ews
            },
            pv() {
                let pvs = 0
                this.buys.map(e => {
                    pvs = this.view.floatAdd( pvs, e.total_pv )
                })
                return pvs
            },
            ps() {
                let price = 0
                this.buys.map(e => {
                    price = this.view.floatAdd( price, e.product_total )
                })
                return price
            },
            sp() {
                let ships = 0
                this.buys.map(e => {
                    ships = this.view.floatAdd( ships, e.shipping_total )
                })
                return ships
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>