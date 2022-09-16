<template>
    <v-row class="bar-filter px-7 mt-0 mb-1">
        
        <div class="mobie-show pt-3"></div>

        <div class="v_col qiong-pt-15">

            <div class="d-ib">
                <label>變更時間</label>

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

            <div class="d-ib mobie-pt-12">
                <input v-model="funnel.user" type="text" @keyup.enter="submit" placeholder="會員編號或名稱">
            </div>

            <div class="mobie-show pt-6"></div>
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
            is_number(v) { return !isNaN(Number.parseInt(v)) },

            submit() {
                let res = { }
                const src = this.funnel

                for (let k in src) {
                    if (src[k]) {
                        if (k == 'user') {
                            if (this.is_number(src[k])) { res['user.member_code'] = src[k] } else { res['user.display_name'] = src[k] }
                        } else {
                            res[k] = src[k]
                        }
                    }
                }
                this.$emit('submit_Father', res)
            },
            reset() {
                this.funnel.user = ''
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