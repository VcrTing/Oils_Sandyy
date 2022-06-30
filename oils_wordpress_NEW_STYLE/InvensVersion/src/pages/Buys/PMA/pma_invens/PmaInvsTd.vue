<template>
    <div>
            <div v-if="!load">
                <div class="qiong-td" v-for="(v, i) in many" :key="i">
                    <div class="qiong-wide-5 pr-0">{{ i + 1 }}</div>
                    <div class="qiong-wide-15">{{ v.sku }}</div>
                    <div class="qiong-wide-20">{{ v.translation.hk }}</div>
                    <div class="qiong-wide-23">{{ v.translation.en }}</div>
                    <div class="qiong-wide-12 t-c pr-0">{{ v.total }}</div>
                    <div class="qiong-wide-25 fx-l">
                        <div class="d-ib pr-3" v-for="(m, n) in v.location" :key="n">
                            <span>
                                <company-named-viewing :clear="true" :named="m.name"></company-named-viewing>
                                :&nbsp;&nbsp;{{ m.quantity }}</span>
                                <span v-if="(n + 1) < v.location.length">，</span>
                        </div>
                    </div>
                </div>
            </div>
            <qiong-loading v-else></qiong-loading>
    </div>
</template>

<script>
import QiongLoading from '../../../../components/Qiong/Ui/QiongLoading.vue'
import CompanyNamedViewing from '../../../../components/Viewing/Company/CompanyNamedViewing.vue'
export default {
    props: {
        load: {
            type: Boolean
        },
        many: {
            type: Array
        }
    },
  components: { QiongLoading, CompanyNamedViewing },

}
</script>

<style>

</style>