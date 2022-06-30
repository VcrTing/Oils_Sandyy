<template>
    <div>
        <div class="fx-s qiong-pt-10 qiong-txt-14 ex-row">
            <div v-for="(v, i) in shower" :key="i" class="lpi-num">
                <span>
                    {{ v.txt }}:&nbsp;
                </span>
                <span>
                    {{ v.num }}
                </span>
            </div>
        </div>
        <div class="qiong-pt-10 mt-1 mobie-table-simple">
            <div class="qiong-primay-bg-title py-2 table-in-bg-title">
                <qiong-space :space="'0.4vw'"></qiong-space>
                <pro-i-tr></pro-i-tr>
            </div>
            <div class="qiong-line-hight-14 tb-br">
                <pro-i-body ref="pibREF"></pro-i-body>
            </div>
        </div>
    </div>
</template>

<script>
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import ProIBody from './Body/ProIBody.vue'
import ProITop from './Top/ProITop.vue'
import ProITr from './Top/ProITr.vue'
    export default {
        components: { ProITop, ProITr, ProIBody, QiongSpace },
        props: [ 'pro', 'ivs' ],
        data() {
            return {
                shower: [ { txt: '庫存總數', num: 0, sort_code: '' },
                    { txt: '尖沙咀庫存總數', num: 0, sort_code: '' },
                    { txt: '火炭庫存總數', num: 0, sort_code: '' }
                ]
            }
        },
        mounted() {
            let total = 0
            this.shower[2].sort_code = this.conf.STOCK_HT_CODE
            this.shower[1].sort_code = this.conf.STOCK_SJJ_CODE

            this.shower.map(s => {
                this.ivs.location.map(e => { if (e.sort_code == s.sort_code) { 
                    s.num = e.quantity; total += s.num
                }})
            })
            this.shower[0].num = total
        },
        computed: {
            lps() {
                return this.conf.SHOP_LEVEL_LP_IMG
            }
        },
        methods: {
            plus_open() {
                this.$refs.pibREF.plus = true
            }
        }
    }
</script>

<style lang="sass" scoped>
.ex-row
    margin: 0px -12px
</style>