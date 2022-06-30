<template>
    <div class="px-4">
        
        <div class="mobie-show pt-3"></div>

        <div class="bar-filter v_col">

            <div class="d-ib">
                <label>操作日期</label>

                <div class="input-time">
                    <date-select v-if="!loading" :date="funnel.date_gte" @timed_Father="(v) => funnel.date_gte = v"></date-select>
                    <input v-else type="text" placeholder="起始時間">
                </div>
                <span class="bf_sub">至</span>
                
                <div class="input-time">
                    <date-select v-if="!loading" :date="funnel.date_lt" @timed_Father="(v) => funnel.date_lt = v"></date-select>
                    <input v-else type="text" placeholder="結束時間">
                </div>

                <div class="pl-4 d-ib"></div>

                <div class="d-ib">
                    <input type="txt" placeholder="用戶編號/名稱"/>
                </div>
            </div>

            <div class="d-ib">

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

        </div>

        <div class="v_col pb-2">
            <lo-logo-change-bar></lo-logo-change-bar>
        </div>
        
        <qiong-space :space="'0.5vw'"></qiong-space>
    </div>
</template>

<script>
import DateSelect from '../../../../components/Qiong/Dialog/DateSelect.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import LoLogoChangeBar from '../common/LoLogoChangeBar.vue'
    export default {
  components: { DateSelect, QiongSpace, LoLogoChangeBar },
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