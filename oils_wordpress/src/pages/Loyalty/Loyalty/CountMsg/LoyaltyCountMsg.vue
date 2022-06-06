<template>
    <div>
        <qiong-header>
            用戶忠誠度總覽
        </qiong-header>

        <qiong-panel-element :need_space="false" :extra_class="'mh-s'"> 
            <qiong-space :space="'2vh'"></qiong-space>

            <v-row  class="px-7 t-c qiong-pt-15 pb-2">
                <v-col v-for="(v, i) in result" :key="i" :sm="4" :cols="12" :class="{ 'act-sec': i == _page }">
                    <nav class="taped">
                        <p class="tap-header op-90 pb-3 txt-txt_x3"
                            :class="{ 'txt-sec': i == _page }"
                        >{{ v.txt }}</p>
                        <div class="tap-content txt-txt_x3"
                            :class="{ 'txt-sec tap-active': i == _page }"
                        >
                            {{ v.content }}
                            <span> {{ v.unit }} </span>
                        </div>
                    </nav>
                </v-col>
            </v-row>
            <qiong-space :space="'2vh'"></qiong-space>
        </qiong-panel-element>

    </div>
</template>

<script>
import QiongPanelElement from '../../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongHeader from '../../../../components/Qiong/Pager/QiongHeader.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import LcmRatioInner from './Inner/LcmRatioInner.vue'

    export default {
        components: { QiongHeader, QiongPanelElement, QiongSpace, LcmRatioInner },
        props: [ '_item', '_page' ],
        data() {
            return {
                tutal: [
                    {
                        txt: '忠誠客戶月數',
                        content: '0',
                        unit: '個月'
                    },
                    {
                        txt: '賬戶 LP 積分',
                        content: '0',
                        unit: 'LP'
                    },
                    {
                        txt: 'LP 等級',
                        content: '0',
                        unit: ''
                    },
                ],
            }
        },
        computed: {
            result() {
                if (this._item) {
                    this.tutal[0].content = this._item.consecutive_month
                    this.tutal[1].content = this._item.LP_available
                    this.tutal[2].content = this._item.rank
                }
                return this.tutal
            }
        },
    }
    /*
        this.tutal[2].content = this._item.LP_percentage * 100

        async mounted() {
            let res = await this.$refs.recordsREF.lunchingMonthly( this._code )
            this.monthy_LP = this.view.floatSub( res.res_in.toFixed(1), res.res_ot.toFixed(1))
        }
    */
</script>

<style lang="sass" scoped>
.tip-item
    display: inline
    margin-right: calc( 6px + 1.5vw )

.act-sec
    background: #fcfaf8
    border-radius: 12px
    margin-bottom: 24px
</style>