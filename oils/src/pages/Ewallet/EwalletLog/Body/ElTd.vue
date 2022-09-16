<template>
    <div class="px-7 mb-3" v-if="many && many.length > 0">
        
        <div class="qiong-td qiong-txt-td  py-3 lh-def fx-l"
        
            v-for="(v, i) in many" :key="i"
        >
            <div class="qiong-wide-12">
                <extra-money-opera-view :v="v.change_type"></extra-money-opera-view>
            </div>

            <div class="qiong-wide-10">{{ v.user }}</div>
            <div class="qiong-wide-10">
                <span v-if="v.uuid">{{ v.uuid }}</span><span v-else>--</span>
            </div>

            <div class="qiong-wide-11">
                {{ v.wallet_original_value }}
            </div>

            <div class="qiong-wide-17 fw-b">
                <span v-if="v.is_add">+</span>
                <span v-else>-</span>
                <span class="px-1">
                    {{ v.hkd }}
                </span>
            </div>

            <div class="qiong-wide-11">{{ v.wallet_new_value }}</div>
            
            <div class="qiong-wide-15">{{ view.ser_timed( v.date, false, false ) }}</div>
            <div class="qiong-wide-13"></div>
        </div>
    </div>
    <qiong-empty v-else></qiong-empty>
</template>

<script>
import ExtraLpOperaView from '../../../../extra/view/lp/ExtraLpOperaView.vue'
import ExtraMoneyOperaView from '../../../../extra/view/lp/ExtraLpOperaView.vue'
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import ExtraChangeTypeView from '../../../../extra/view/member_change/ExtraChangeTypeView.vue'
    export default {
        components: { QiongEmpty, ExtraChangeTypeView, ExtraLpOperaView, ExtraMoneyOperaView },
        props: [
            '_items'
        ],
        computed: {

            many() {
                let res = this._items
                res = res ? res.map(e => {
                    e.is_add = !(e.wallet_change.startsWith('-'))
                    const n = Number.parseFloat(e.wallet_change)
                    e.hkd = n > 0 ? n : (0 - n); return e
                }) : []
                return res
            }
        },  
        mounted() {
            console.log('this.items =', this._items)
        }
    }
</script>

<style lang="sass" scoped>
    
</style>