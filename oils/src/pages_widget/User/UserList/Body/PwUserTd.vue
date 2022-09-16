<template>
    <nav class="pt-2" v-if="many && many.length > 0">
        <div class="px-7 qiong-td pw-td" v-for="(v, i) in many" :key="i">
            <div class="w-10">
                {{ v.member_code }}
            </div>
            <div class="w-24">
                {{ v.display_name }}
            </div>
            <div class="w-10">{{ v.phone }}</div>

            <div class="w-20 pr-3">{{ v.email }}</div>
            <div class="w-10 pr-1">
                <pwv-regis-type :code="v.register_type"></pwv-regis-type>
            </div>
            <div class="w-9">
                <div class="txt-sub" v-if="v.isSaveToWallet == null">
                    未設定
                </div>
                <div v-else>
                    <span v-if="v.isSaveToWallet">電子錢包</span>
                    <span v-else>支票</span>
                </div>
            </div>
            <div class="w-11 pl-1">
                <pw-active-bulb class="fx-l" :active="v.member_area ? v.member_area : false"></pw-active-bulb>
            </div>
            <div class="w-4 fx-r">
                <pw-table-opera class="fx-r" :item="v"></pw-table-opera>
            </div>
        </div>
    </nav>
    <nav v-else>
        <qiong-empty/>
    </nav>
</template>

<script>
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue';
import PwActiveBulb from '../../../../extra/pw/active/PwActiveBulb.vue'
import PwTableOpera from '@/extra/pw/table/PwTableOpera.vue'
import PwvRegisType from '../../../../extra/pw/view/PwvRegisType.vue';
export default {
  components: { PwActiveBulb, PwTableOpera, QiongEmpty, PwvRegisType },
    props: [ 'many' ]
}
</script>

<style lang="sass" scoped>
.txt-sub
    color: #73777b
</style>