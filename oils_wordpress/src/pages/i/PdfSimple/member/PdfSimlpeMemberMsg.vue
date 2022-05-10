<template>

    <pdf-content-layout>
        <span slot="header">User Detail</span>

        <div slot="body">

            <div style="overflow: hidden;">
                <div style="width: 25%; float: left;">
                    <pdf-equal-content :bigger="3">
                        <span slot="k">Member ID:</span>
                        <div slot="v">
                            <span v-if="has">
                                {{ _item.user_detail.member_code }}
                            </span>
                            <span v-else>
                                {{ mine.member_code }}
                            </span>
                        </div>
                    </pdf-equal-content>
                </div>
                <div style="width: 17%; float: left;">&nbsp;</div>
                <div style="width: 58%; float: left;">
                    <pdf-equal-content :bigger="-1">
                        <span slot="k">Print Date:</span>
                        <span slot="v">
                            {{ view.getTodayEn() }}
                        </span>
                    </pdf-equal-content>
                </div>
            </div>
            <div style="overflow: hidden;">
                <div style="width: 25%; float: left;">
                    <pdf-equal-content :bigger="3">
                        <span slot="k">Total Bonus:</span>
                        <div slot="v">
                            <span style="font-weight: bold">$&nbsp;&nbsp;{{ usd }}</span>
                        </div>
                    </pdf-equal-content>
                </div>
                <div style="width: 17%; float: left;">&nbsp;</div>
                <div style="width: 58%; float: left;">
                    <pdf-equal-content :bigger="-1">
                        <span slot="k">Bonus Period:</span>
                        <span slot="v" v-if="chronu">
                            {{ view.ser_timed_chronu(chronu.start, true) }}&nbsp;至&nbsp;{{ view.ser_timed(chronu.end, true) }}
                        </span>
                    </pdf-equal-content>
                </div>
            </div>

            <div style="height: 1rem"></div>
            <div style="width: 100%;">
                <div style="width: 100%;">
                    Member Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span v-if="has">{{ _item.user_detail.display_name }}</span>
                    <span v-else>{{ mine.display_name }}</span>
                </div>
            </div>
        </div>
    </pdf-content-layout>
</template>

<script>
import LevelViewing from '../../../../components/Viewing/LevelViewing.vue'
import PdfContentLayout from '../common/PdfContentLayout.vue'
import PdfEqualContent from '../common/PdfEqualContent.vue'
    export default {
        components: {
            PdfEqualContent,
                LevelViewing,
                PdfContentLayout            
        },
        props: {
            mine: {
                type: Object
            },
            _item: { type: Object }
        },
        computed: {
            chronu() {
                let res = this._item.user_detail
                if (res && res.bonus_period) { return res.bonus_period }
                return this._chron
            },
            _chron() { return this.$store.state.chronus },
            has() {
                if (this._item && this._item.user_detail) {
                    return true
                }
            },
            usd() {
                let res = null
                try {
                    res = this._item.user_detail.total_bonus
                } catch(err) {  }
                res = res ? res : 0
                return res.toFixed(2)
            }
        },
        methods: {
            result(v) {
                v = v ? v : 0
                v = v ? Number.parseFloat(v) : 0
                v = v ? v.toFixed(2) : 0
                return v
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>