<template>
    
    <div class="qiong-tr qiong-txt-tr pager-header-in-table">
        <div class="qiong-wide-5">
            &nbsp;
        </div>   
        <div class="qiong-wide-13 pl-2">
            SKU
        </div>  
        <div class="qiong-wide-17 pl-2">
            產品中文名
        </div>  

        <div class="qiong-wide-9">
            所屬訂單
        </div> 
        
        <div class="qiong-wide-8">
            取貨倉庫
        </div>
        <div class="qiong-wide-7">
            原庫存
        </div>
        <div class="qiong-wide-8 pl-2">
            變更量
        </div>

        <div class="qiong-wide-10">
            操作類型
        </div>
        <div class="qiong-wide-12" v-if="!_plus">
            處理時間
            <v-icon @click="timed = !timed" :class="{ 'rote': !timed, 'txt-sus': timed }" class="qiong-txt-16 hand">mdi-sort-reverse-variant</v-icon>
        </div>
        <div class="qiong-wide-10">
            備註
        </div> 
    </div>
</template>

<script>
import moment from 'moment'
    export default {
        name: '',
        props: [ '_plus' ],
        data() {
            return {
                timed: true
            }
        },
        watch: {
            timed(n, o) {
                this.sortTimed(n)
            }
        },
        methods: {

            sortTimed(v) {
                this.$emit('sort', (src, origin) => {
                    return origin.sort((n, o) => { 
                        return v ? 
                            moment(o.date).diff(n.date) :
                            moment(n.date).diff(o.date)
                    })
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>