<template>
    <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>
            <span>HK$</span>
            <span style="float: right">{{ ps }}</span>
        </td>
        <td class="fs-c">
            &nbsp;{{ pv }}&nbsp;
        </td>
        <td>
            <span>HK$</span>
            <span style="float: right">{{ sp }}</span>
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
        name: '',
        props: {
            buys: Array
        },
        data() {
            return {
                
            }
        },
        mounted() {
            /*
            let pvs = 0
            let price = 0
            let ships = 0
            
            console.log('this.buys =', this.buys)
            this.buys.map(e => {
                pvs = this.view.floatAdd( pvs, e.total_pv )
                price = this.view.floatAdd( price, e.product_total )
                ships = this.view.floatAdd( ships, e.shipping_total )
            })

            this.pv = pvs
            this.ps = price
            this.sp = ships
            */
        },
        computed: {
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