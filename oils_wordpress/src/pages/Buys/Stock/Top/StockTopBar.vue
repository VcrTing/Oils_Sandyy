<template>
    <v-row class="bar-filter px-7 my-1">
        
        <div class="mobie-show pt-3"></div>

        <div class="v_col qiong-pt-15">

            <div class="d-ib">
                <label>處理日期</label>

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
            <line-form-wrapper class="pc-pl-4" :placeholder="'中文或英文均可'" ref="nameInput">
                產品名稱：
            </line-form-wrapper>

            <div class="mobie-show pt-4"></div>
            <button class="submit" @click="submit">
                <v-icon>mdi-filter-outline</v-icon>
                篩選
            </button>

            <button @click="reset" class="txt-acc_sub">
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
    </v-row>
</template>

<script>
import DateSelect from '../../../../components/Qiong/Dialog/DateSelect.vue'
import LineFormWrapper from '../../../../components/Qiong/Form/lineFormWrapper.vue'
    export default {
  components: { DateSelect, LineFormWrapper },
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
            fresh() {
                
            },

            submit() {
                let res = { }
                this.funnel.named = this.$refs.nameInput.value()
                for (let k in this.funnel) {
                    if (this.funnel[k]) { 
                        if (k == 'named') { res['product.translation_contains'] = this.funnel[k] } else {
                            res[k] = this.funnel[k] 
                        }
                    }
                }
                this.$emit('submit_Father', res)
            },
            reset() {
                this.$refs.nameInput.def('')

                this.funnel.user = ''
                this.funnel.named = this.$refs.nameInput.value()

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