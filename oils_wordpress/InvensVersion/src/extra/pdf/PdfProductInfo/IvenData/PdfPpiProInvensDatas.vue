<template>
    <div>
        <ui-pdf-panel :header="'全部'">
            <div class="td b_son">
                <div class="w-12">類別</div>
                <div class="w-13">店鋪</div>
                <div class="w-10">數量</div>
                <div class="w-20">更改時間</div>
                <div class="w-20">更改人員</div>
                <div class="w-25">備註</div>
            </div>
            <div class="pt_s"></div>
            <div class="td td-data"
                v-for="(v, i) in datas" :key="i"
            >
                <div class="w-12">{{ v.typed }}</div>
                <div class="w-13">{{ v.inven }}</div>
                <div class="w-10">{{ v.num }}</div>
                <div class="w-20">{{ v.date }}</div>
                <div class="w-20">{{ v.change }}</div>
                <div class="w-25">{{ v.mark }}</div>
            </div>
        </ui-pdf-panel>
    </div>
</template>

<script>
import UiPdfPanel from '../../layout/UiPdfPanel.vue'
    export default {
  components: { UiPdfPanel },
        name: '',
        data() {
            return {
                datas: [
                    { typed: '加貨', inven: '尖沙咀', num: 999, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪加貨' },
                    { typed: '減貨', inven: '火炭', num: 888, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪減貨' },
                    { typed: '壞貨', inven: '尖沙咀', num: 1, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪壞貨' },
                    { typed: '加貨', inven: '尖沙咀', num: 999, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪加貨' },
                    { typed: '減貨', inven: '火炭', num: 888, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪減貨' },
                    { typed: '壞貨', inven: '尖沙咀', num: 1, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪壞貨' },
                    { typed: '加貨', inven: '尖沙咀', num: 999, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪加貨' },
                    { typed: '減貨', inven: '火炭', num: 888, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪減貨' },
                    { typed: '壞貨', inven: '尖沙咀', num: 1, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪壞貨' },
                    { typed: '加貨', inven: '尖沙咀', num: 999, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪加貨' },
                    { typed: '減貨', inven: '火炭', num: 888, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪減貨' },
                    { typed: '壞貨', inven: '尖沙咀', num: 1, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪壞貨' },
                    { typed: '加貨', inven: '尖沙咀', num: 999, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪加貨' },
                    { typed: '減貨', inven: '火炭', num: 888, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪減貨' },
                    { typed: '壞貨', inven: '尖沙咀', num: 1, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪壞貨' },
                    { typed: '加貨', inven: '尖沙咀', num: 999, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪加貨' },
                    { typed: '減貨', inven: '火炭', num: 888, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪減貨' },
                    { typed: '壞貨', inven: '尖沙咀', num: 1, date: '2012-12-12 23:24', change: 'sandyy@123.com', mark: '店鋪壞貨' },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>