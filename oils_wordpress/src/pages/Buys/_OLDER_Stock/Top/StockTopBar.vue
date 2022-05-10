<template>
    <div class="bar-filter px-5">
        
        <div class="mobie-show pt-3"></div>

        <div class="v_col">

            <div class="d-ib">
                <label>時間過濾</label>

                <div class="input-time">
                    <date-select v-if="!loading" :date="funnel.date_gte" @timed_Father="(v) => funnel.date_gte = v"></date-select>
                    <input v-else type="text" placeholder="起始時間">
                </div>
                <span class="bf_sub">至</span>
                
                <div class="input-time">
                    <date-select v-if="!loading" :date="funnel.date_lt" @timed_Father="(v) => funnel.date_lt = v"></date-select>
                    <input v-else type="text" placeholder="結束時間">
                </div>
            </div>

            <div class="mobie-show pt-4"></div>
            <button class="submit" @click="submit">
                <v-icon>mdi-filter-outline</v-icon>
                過濾
            </button>

            <button @click="reset">
                <v-icon>mdi-reload</v-icon>
                重置
            </button>
        </div>

        <!--div class="v_col">
            <label>信息過濾</label>
            <input type="text" placeholder="產品名稱" v-model="funnel.named">
            <input type="text" placeholder="操作人員" v-model="funnel.user">

            <button class="submit" @click="submit">
                <v-icon>mdi-filter-outline</v-icon>
                過濾
            </button>

            <button @click="reset">
                <v-icon>mdi-reload</v-icon>
                重置
            </button>
        </div-->
    </div>
</template>

<script>
import DateSelect from '../../../../components/Qiong/Dialog/DateSelect.vue'
    export default {
  components: { DateSelect },
        name: '',
        props: {
            _funnl: Object
        },
        data() {
            return {
                funnel: {
                    user: '',
                    named: '',
                    date_gte: '', // 小於
                    date_lt: '', // 大於
                },
                loading: true
            }
        },
        mounted() {
            this.reset()
        },
        methods: {
            locaProduct(named) {
                const pro = this.$store.state.products
                let res = ''

                if (named) {
                    for (let i= 0; i< pro.length; i++ ) {
                        const p = pro[i]
                        p.translation.map(e => {
                            if (e.product_name.indexOf(named) >= 0) {
                                res = p.sku
                            }
                        })
                    }
                }
                return res
            },

            submit() {
                let res = { }
                for (let k in this.funnel) {
                    if (this.funnel[k]) {
                        if (k == 'named') {
                            res['produc.sku'] = this.locaProduct(this.funnel[k])
                        } else {
                            res[k] = this.funnel[k]
                        }
                    }
                }
                this.$emit('submit_Father', res)
            },
            reset() {
                this.funnel.user = ''
                this.funnel.named = ''
                this.funnel.date_lt = this.view.getToday()
                this.funnel.date_gte = this.$store.state.chronus.start
                this.submit()
                this.loading = false
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>