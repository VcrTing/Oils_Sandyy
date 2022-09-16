<template>
    <div>
        <div v-for="(v, k) in months" :key="k" class="qiong-pt-10 d-inline">
            
            <button @click="tapYear(v.year)" class="btn-chronu btn-chronu-year"
                :class="{ 'btn-chronu-year_active': (v.year == active_year) }"
            >
                {{ v.year }}
            </button>
        </div>
        <qiong-gradient-line class="qiong-pt-10"></qiong-gradient-line>
        <div v-if="now_month.length > 0" class="qiong-pt-15">
            <button v-for="(v, k) in now_month" :key="k" class="btn-chronu qiong-txt-12"
                @click="uploadChronu(v.chronu)"
                :class="{ 'btn-chronu-active': (v.chronu_id == active_id) }"
            >
                {{ view.backend.view_month(v.month) }}
            </button>
        </div>
    </div>
</template>

<script>
import QiongGradientLine from '../../../../components/Qiong/Ui/QiongGradientLine.vue'
    export default {
  components: { QiongGradientLine },
        name: '',
        props: {
            months: {
                type: Array
            }
        },
        data() {
            return {
                year: '',
                now_month: [ ],

                def_m: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],

                active_id: '',
                active_year: 1998
            }
        },
        mounted() {
            const d = new Date()
            this.active_id = this.$store.state.chronus.id
            this.tapYear( this.$store.state.chronus.end.substring(0, 4) )
        },
        methods: {
            tapYear(year) {

                this.months.map(e => {
                    const y = e.year
                    
                    if (year == y) {
                        const now_months = e[ y ]
                        this.now_month = now_months
                    }
                })
                this.active_year = year 
                this.uploadNowMonth()
            },
            uploadNowMonth() { this.$emit('nowmonth_Father', this.now_month) },
            uploadChronu(c) { this.$emit('chronu_Father', c) }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>