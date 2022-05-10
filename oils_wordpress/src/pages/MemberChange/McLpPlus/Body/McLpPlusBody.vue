<template>
    <div>

        <div class="lh-18 pb-2 td-def" v-if="_items && _items.length > 0">

            <div class="qiong-pt-3 pb-1 td-hr px-7"
                v-for="(v, i) in _items" :key="i">

                <nav class="qiong-td qiong-txt-td ">
                    <div class="qiong-wide-9 fw-b">
                        {{ v.user }}
                    </div>
                    <div class="qiong-wide-24">
                        {{ v.user_name }}
                    </div>
                    <!--div class="qiong-wide-9">
                        <span v-if="v.LP_percentage">
                            {{ v.LP_percentage * 100 }}&nbsp;%
                        </span>
                    </div-->


                    <div class="qiong-wide-11">
                        <span v-if="v.is_plus" class="txt-sub_x2">+&nbsp;</span>
                        <span v-else class="txt-sub_x2">-&nbsp;</span>
                        {{ v.LP_difference }}&nbsp;LP
                    </div>
                    
                    <div class="qiong-wide-8 txt-sus">
                        {{ v.wallet_before }}
                    </div>
                    <div class="qiong-wide-10 pr-0">
                        {{ v.wallet_after }}
                    </div>

                    <div class="qiong-wide-15 pr-0">
                        {{ view.ser_timed( v.date, false, false ) }}
                    </div>

                    <div class="qiong-wide-9">
                        {{ view.backend.view_lp_opera_typed( v.type ) }} 
                    </div>
                    <div class="qiong-wide-14 fx-s pr-0">
                        {{ v.remark }}
                    </div>
                    <!--div class="qiong-wide-6 t-r pr-0">
                        <v-icon class="qiong-txt-14 td-opt-icon">mdi-pencil</!--v-icon>
                    </div -->
                </nav>
            </div>
        </div>
        <qiong-empty v-else></qiong-empty>
    </div>
</template>

<script>
import QiongEmpty from '../../../../components/Qiong/Ui/QiongEmpty.vue'
    export default {
  components: { QiongEmpty },
        name: '',
        props: [ '_items' ],
    }
</script>

<style lang="sass" scoped>
    
</style>