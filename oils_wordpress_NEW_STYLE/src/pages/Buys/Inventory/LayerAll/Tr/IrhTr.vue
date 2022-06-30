<template>
    <div class="qiong-tr qiong-txt-tr fx-l pb-3">
        <div class="qiong-wide-5">
            &nbsp;
        </div>
        <div class="qiong-wide-14 pl-3">
            SKU
            <sort-filter-trangle @sort_Father="sortSku" ref="sortSku"></sort-filter-trangle>
        </div>

        <div class="qiong-wide-35 mobie-wide-21 pr-0">
            <div class="qiong-td fx-l">
                <div class="qiong-wide-48 qiong-line-hight-12 mobie-wide-0">
                    <span class="mobie-hide">
                        英文名
            <sort-filter-trangle @sort_Father="sortName" ref="sortName"></sort-filter-trangle>
                    </span>
                </div>
                <div class="qiong-wide-52  mobie-wide-100 pr-3">中文名</div>
            </div>
        </div>

        <div class="qiong-wide-7 mobie-wide-16 pr-0" style="min-width: 0px">
            Pv
            <sort-filter-trangle @sort_Father="sortPv" ref="sortPv"></sort-filter-trangle>
        </div>

        <div class="qiong-wide-39 mobie-wide-45 pr-0 ">

            <div class="qiong-td fx-l">
                <div class="qiong-wide-50">
                    庫存量
                    <sort-filter-trangle @sort_Father="sortNum" ref="sortNum"></sort-filter-trangle>
                </div>
                <div class="qiong-wide-50 t-r pr-0">
                    
                    <!--
                    <button class="btn-thin round qiong-txt-12 irh-tr-plus">
                        <v-icon class="qiong-txt-16">mdi-plus</v-icon>
                        新增產品
                        <span class="op-90 qiong-txt-10">
                            ({{ this.items.length }}件)
                        </span>
                    </button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SortFilterTrangle from '@/components/Viewing/Filter/SortFilterTrangle.vue'
    export default {
  components: {
    SortFilterTrangle },
        name: '',
        props: [
            'items'
        ],
        data() {
            return {
                option: 0,
            }
        },
        methods: {
            _sorting(src) {
                console.log('SRC ==', src)
            },

            resetSort(n) {

                if (n != 21) {
                    this.$refs.sortPv.rest()
                }
                if (n != 22) {
                    this.$refs.sortNum.rest()
                }
                if (n != 23) {
                    this.$refs.sortName.rest()
                }
                if (n != 24) {
                    this.$refs.sortSku.rest()
                }
            },

            // SKU 排序
            _ser_sku(m) { 
                m = m.sku ? m.sku : ''
                m = m.split('-')
                m = m ? m[0] : ''
                m = m.replace(/[^0-9]/g, '')
                return m ? Number.parseInt(m) : 0
            },
            sortSku(v) {
                this.resetSort(24)
                this.$emit('sort', (src, origin) => {
                    return v != 0 ?
                    src.sort((n, o) => {
                        n = n.sku ? this._ser_sku(n) : 0
                        o = o.sku ? this._ser_sku(o) : 0
                        return v > 0 ? n - o : o - n
                    })
                    :
                    origin
                })
            },

            // 名字排序
            sortName(v) {
                this.resetSort(23)
                this.$emit('sort', (src, origin) => {
                    return v != 0 ? src.sort((n, o) => {
                        n = n.translation ? n.translation.en : ''
                        o = o.translation ? o.translation.en : ''
                        let res = this.view.string.chr_sort(n, o)
                        return v > 0 ? res : (0 - res)
                    })
                    :
                    origin
                })
            },

            // 库存 22
            sortNum(v) {
                this.resetSort(22)
                this.$emit('sort', (src, origin) => {
                    return v != 0 ?
                    src.sort((n, o) => v > 0 ? (n.total - o.total) : (o.total - n.total)) 
                    :
                    origin
                })
            },
            // PV 21
            sortPv(v) {
                this.resetSort(21)
                this.$emit('sort', (src, origin) => {
                    return v != 0 ?
                    src.sort((n, o) => v > 0 ? (n.pv - o.pv) : (o.pv - n.pv))
                    :
                    origin
                })
            },
            
        }
    }
</script>

<style lang="sass" scoped>
.irh-tr-plus
    padding-top: 0.2em
    padding-bottom: 0.2em
</style>