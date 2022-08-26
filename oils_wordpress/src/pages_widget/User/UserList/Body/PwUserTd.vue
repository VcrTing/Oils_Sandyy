<template>
    <nav class="pt-2">
        <div class="px-7 qiong-td pw-td" v-for="(v, i) in many" :key="i">
            <div class="w-11">
                {{ v.member_code }}
            </div>
            <div class="w-20">
                {{ v.display_name }}
            </div>
            <div class="w-18">
                {{ v.phone }}
            </div>
            <div class="w-10">{{ v.phone }}</div>

            <div class="w-17 pr-3">{{ v.email }}</div>
            <div class="w-9">
                {{ v.register_type }}
            </div>
            <div class="w-11 pl-1">
                <pw-active-bulb class="fx-l" :active="v.member_area ? v.member_area : false"></pw-active-bulb>
            </div>
            <div class="w-4">
                <pw-table-opera :item="v"></pw-table-opera>
            </div>
        </div>
    </nav>
</template>

<script>
import PwActiveBulb from '@/extra/pw/active/PwActiveBulb.vue'
import PwTableOpera from '@/extra/pw/table/PwTableOpera.vue'
export default {
  components: { PwActiveBulb, PwTableOpera },
    props: [ 'many' ]
}
</script>

<style>

</style>