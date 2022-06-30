<template>
    <div class="">

        <qiong-panel-element :need_space="false" class="panel-second">
            <qiong-space :space="'2vh'"></qiong-space>
            <div class="px-7 qiong-td qiong-txt-16 pt-3 ">

                <qiong-space :space="'0.7vw'"></qiong-space>

                <div class="qiong-wide-23 t-c">
                    <nav class="txt-sec_son">
                        <p class="op-80"> 本月獲得&nbsp;LP </p>
                        <h2 class="d-ib qiong-txt-42"> {{ lp_month }} </h2>
                    </nav>
                    <p class="qiong-txt-10 txt-sus">
                        (<span>{{ view.ser_timed(start, true) }}</span> - <span>{{ view.ser_timed(end, true) }}</span> 期間)
                    </p>
                </div>
                <div class="qiong-wide-2"></div>

                <div class="qiong-wide-75 pr-0 mobie-pl-0 ">
                    <div class="pb-1 fw-b"> 積分每月入賬記錄 </div>

                    <div class="hr-thin mt-1"></div>
                    <qiong-space :space="'4vh'"></qiong-space>

                    <div v-if="_item && has" class="bg-FFF pt-4 pb-3 pl-8 an_upper">
                        <div class="qiong-td lh-21 qiong-txt-12"
                            :class="{ 'txt-txt_son fw-b': is_now(i) }"
                            v-for="(v, i) in _item.LP_by_month" :key="i"
                        >
                            <div class="qiong-wide-62" :class="{ 'txt-sub': (v.LP_remaining <= 0)}">
                                {{ view.ser_timed(i, true).substring(0, 8) }}份
                            </div>
                            <div class="qiong-wide-38 " :class="{ 'txt-sub': (v.LP_remaining <= 0)}">
                                獲得&nbsp;{{ v.LP_remaining }}&nbsp;LP
                            </div>
                        </div>

                        <!--pagenation @page_Father="page"></!--pagenation-->
                    </div>
                    <div class="panel-c an_upper" v-else>
                        <qiong-empty :bigger="0"></qiong-empty>
                    </div>
                </div>
            </div>
            <qiong-space :space="'4vh'"></qiong-space>
        </qiong-panel-element>

    </div>
</template>

<script>
import QiongSpace from '@/components/Qiong/Ui/QiongSpace.vue'
import QiongPanelElement from '../../../../components/Qiong/Ele/QiongPanelElement.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import Pagenation from '../../../../components/Bar/Pagenation/Pagenation.vue'
    export default {
        props: [ '_item' ],
        components: {      
            QiongPanelElement,
            QiongSpace,
            QiongEmpty,
            Pagenation
        },
        computed: {
            has() {
                let res = this._item.LP_by_month
                if (res) { for (let k in res) { return true } }
            },
            start() { return this.$store.state.chronus.start },
            end() { return this.$store.state.chronus.end },
            lp_month() {
                let res = 0
                if (this._item && this._item.LP_by_month) {
                    for(let k in this._item.LP_by_month) {
                        if (this.is_now(k)) {
                            let ss = this._item.LP_by_month[k].LP_remaining
                            res = this.view.floatAdd( ( ss ? ss : 0 ), res )
                        }
                    }
                }
                return res
            }
        },
        methods: {
            is_now(timed) { return this.view.timeCompare(timed, this.start) && !this.view.timeCompare(timed, this.end) } 
        }
    }
</script>

<style lang="sass" scoped>
.bg-FFF
    border-radius: 3px
    border: 1px solid rgba(0, 0, 0, 0.02)
</style>