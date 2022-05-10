<template>
    <div class="px-7 mb-3" v-if="items && items.length > 0">
        
        <div class="qiong-td qiong-txt-td  py-3 lh-def fx-l"
        
            v-for="(v, i) in items" :key="i"
        >
            <div class="qiong-wide-10">
                {{ v.user.member_code }}
            </div>
            <div class="qiong-wide-24">
                {{ v.user.display_name }}
            </div>
            <div class="qiong-wide-15 pr-0">
                {{ view.ser_timed(v.date, false ,false) }}
            </div>
            <div class="qiong-wide-13 t-c pr-0">
                <extra-change-type-view :v="v.typed"></extra-change-type-view>
            </div>
            <div class="qiong-wide-24 pl-2">
                {{ v.content }}
            </div>
            <div class="qiong-wide-14">
                {{ v.remark }}
            </div>
        </div>
    </div>
    <qiong-empty v-else></qiong-empty>
</template>

<script>
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
import ExtraChangeTypeView from '../../../../extra/view/member_change/ExtraChangeTypeView.vue'
    export default {
  components: { QiongEmpty, ExtraChangeTypeView },
        props: [
            'items'
        ],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>