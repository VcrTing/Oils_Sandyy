<template>
    <v-container fluid class="pti-page">

        <qiong-header-filter>
            <div slot="header">會計界面</div>
            <!--go-down-trigger slot="filter"></!--go-down-trigger -->
        </qiong-header-filter>

        <div class="table-inner mobie-table-simple mobie-mx-0" id="pti_table">

            <payment-table-inner :items="bonus" v-if="bonus" ref="ptiInner"></payment-table-inner>
            <qiong-loading v-else :bigger="1" style="margin-top: 10vw"></qiong-loading>

            <qiong-space :space="'15vh'" class="mobie-view"></qiong-space>
            <qiong-space :space="'15vh'"></qiong-space>
            <qiong-space :space="'4vw'"></qiong-space>
        </div>

        <full-bonus-table ref="bonusTABLE"></full-bonus-table>

        <collection-ready @sign_Father="initMe" v-if="init"></collection-ready>
    </v-container>
</template>

<script>
import QiongHeaderFilter from '@/components/Qiong/Pager/QiongHeaderFilter.vue'
import GoDownTrigger from '@/components/Qiong/Tool/GoDownTrigger.vue'

import CollectionReady from '../../../components/Init/Ready/CollectionReady.vue'
import FullBonusTable from '../../../components/Init/Table/FullBonusTable.vue'
import FullUserTable from '../../../components/Init/Table/FullUserTable.vue'
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import PaymentTableInner from './Inner/PaymentTableInner.vue'
import PtiFooter from './Inner/PtiFooter.vue'
import PtiTr from './Inner/PtiTr.vue'

    export default {
        components: { GoDownTrigger, PaymentTableInner, FullUserTable, PtiFooter, QiongSpace, FullBonusTable, QiongHeaderFilter, QiongLoading, CollectionReady, PtiTr },

        inject: [ 'reload' ],
        watch: {
            $route(to, from) {
                if (from.query) {
                    this.init = false
                    this.reload()
                    this.init = true
                }
            }
        },
        data() {
            return {
                root: false,
                init: true,
                users: [ ],

                chronu: null,

                bonus: null,

                domed: null,
                pti_tr: null,
            }
        },
        async mounted() {

            this.domed = document.getElementById('pti_table')
        },
        unmounted() {
            document.removeEventListener('DOMMouseScroll', this.switchScroll, false)
        },
        destroyed() {
            document.removeEventListener('DOMMouseScroll', this.switchScroll, false)
        },
        methods: {
            async initMe() {
                this.valuation()

                try {

                    this.bonus = await this.$refs.bonusTABLE.switchingBonus( this.makeCondition() )

                    this.bonus.map(e => { return e })

                    if (this.bonus) {
                        this.pti_tr = document.getElementById('pti_tr')

                        if (document.addEventListener) { document.addEventListener('DOMMouseScroll', this.switchScroll, false) }
                        window.onmousewheel = document.onmousewheel = this.switchScroll
                    }
                } catch (err) {
                    this.$store.commit('saveDialog', 500)
                    this.$store.commit('saveLoading', true)
                    setTimeout(() => { this.$store.commit('saveLoading', false) }, 400)
                    setTimeout(() => { this.$store.commit('saveDialog', 0) }, 4000)
                }
            },

            valuation() {
                if (!this.chronu) {
                    this.chronu = this.$store.state.chronus.id
                }
            },
            makeCondition() {
                return {
                    time_period: this.chronu
                }
            },

            switchDiv() {
                try {
                    const now_top = this.domed.getBoundingClientRect().top
                    this.$refs.ptiInner.showTrFixed( (now_top < -54) )
                } catch (err) { }
            },

            switchScroll(e) {
                e = e || window.event
                if (e.wheelDelta) this.switchDiv();
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>