<template>
    <div class="input-in-table-wrapper time">
        <div class="qiong-td fx-l pb-4 pt-5">
            <div class="qiong-wide-15 qiong-pl-20">

                <select v-model="funnel.cate">
                    <option v-for="(v, i) in cate" :key="i" :value="v.v">
                        {{ v.txt }}
                    </option>
                </select>
            </div>
            <div class="qiong-wide-12">

                <select v-model="funnel.shop">
                    <option v-for="(v, i) in shop" :key="i" :value="v.v">
                        {{ v.txt }}
                    </option>
                </select>
            </div>
            <div class="qiong-wide-12">
                <input type="text" 
                    v-model="funnel.num"
                    placeholder="請輸入"/>
            </div>
            <div class="qiong-wide-15 input-time">
                (自動獲取當前時間)
                <!--date-select v-if="!loading" :date="funnel.timed" @timed_Father="(v) => funnel.timed = v"></!--date-select-->
                <!--input type="text" 
                    v-model="funnel.timed"
                    placeholder="更新時間"/-->
            </div>
            <div class="qiong-wide-16">
                更改人員
            </div>
            <div class="qiong-wide-18">
                <input type="text" 
                    v-model="funnel.mark"
                    placeholder="請輸入"/>
            </div>
            <div class="qiong-wide-12 t-r">
                <button class="submit btn-save fw-b">
                    儲存
                </button>
                <button class="btn-cancel ml-3 txt-sub" @click="$emit('cancel_Father')">
                    關閉
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import DateSelect from '../../../../../components/Qiong/Dialog/DateSelect.vue'
    export default {
  components: { DateSelect },
        name: '',
        computed: {
            cate() {
                return [
                    { txt: '加貨', v: 1 },
                    { txt: '減貨', v: 2 },
                    { txt: '壞貨', v: 3 },
                    { txt: '換貨', v: 4 },
                    { txt: '店鋪樣品消耗', v: 5 },
                ]
            },
            shop() {
                return [
                    { txt: '尖沙咀倉庫', v: '尖沙咀' },
                    { txt: '火炭倉庫', v: '火炭' }
                ]
            }
        },
        data() {
            return {
                funnel: {
                    cate: 1,
                    shop: '尖沙咀',
                    num: null,
                    timed: '',
                    mark: '',
                    change_by: ''
                },
                loading: true
            }
        },
        mounted() {
            this.reset()
        },
        methods: {

            reset() {
                this.loading = true

                this.mark = ''
                this.num = null
                this.change_by = ''
                this.funnel.cate = 1 
                this.funnel.shop = '尖沙咀'
                this.funnel.timed = this.view.getToday()

                this.loading = false
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>