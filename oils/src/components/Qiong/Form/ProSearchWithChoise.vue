<template>
    <div class="ps-r w-100">
        <div class="pro-choise-input">
            <input v-model="q" type="text" 

                :class="{ 'input-error': !vid }"
                @focus="openChoise"
                @blur="close"
                @change="openChoise" @keyup.enter="openChoise"
                placeholder="請輸入SKU或產品名稱進行搜索" class="w-100" />
        </div>

        <nav class="w-100 pro-choise" v-if="show">
            <div v-show="!msg" class="ani_upper">
                <div class="pro-choise-item qiong-td fx-l"
                    v-for="(v, i) in pros" :key="i"
                >
                    <div class="qiong-wide-20">
                        <img :src="v.product_image">
                    </div>
                    <div class="qiong-wide-60">
                        <span v-if="v.translation && v.translation[1]">
                            {{ v.translation[1].product_name }}
                        </span>
                        <span v-else>
                            產品 sku: {{ v.sku }}
                        </span>
                    </div>
                    <div class="qiong-wide-20 t-r">
                        <button class="btn-sec-txt px-1" @click="choise(v)">選擇</button>
                    </div>
                </div>
            </div>
            <div v-show="msg" class="py-6 fx-c ani_upper"> {{ msg }} </div>
        </nav>

        <fun-pros ref="prosREF"></fun-pros>
    </div>
</template>

<script>
import FunPros from "../../../extra/funnel/FunPros/FunPros.vue"

    export default {
        components: { FunPros },
        props: [ 'vid' ],
        data() {
            return {
                q: '',
                show: false,
                msg: '',
                
                pro: {
                    name: '孝姜 複合精華'
                },
                pros: [ ]
            }
        },
        watch: {
            q(n, o) {
                if (n != o) { this.fetchPro(n) }
            }
        },
        methods: {
            fetchPro(k) {
                let res = this.$refs.prosREF.search(k)

                if (res && res.length < 12) {
                    this.msg = ''
                    this.pros = res
                    this.show = (res.length > 0) ? true : false
                } else {
                    this.msg = '請輸入更多的關鍵詞。'
                }
            },

            openChoise() {
                if (this.q.length > 1) { this.show = (this.pros.length > 0) }
            },
            close() {
                setTimeout(e => this.show = false, 400)
            },

            choise( p ) {
                this.pro = p
                this.q = '[' + p.sku + '] ' + p.translation[0].product_name
                this.show = false
                this.$emit('choise', p)
            }
        }
    }
</script>

<style lang="sass" scoped>
.pro-choise-input
    position: relative
    .pro-choise-tap
        right: 1px
        top: 0
        height: 24px
        padding: 0px 12px
        background: #f2f2f2
        position: absolute

.pro-choise
    width: 100%
    z-index: 9999
    padding: 12px 0px
    position: absolute
    min-height: 30px
    background: #fff
    margin-top: 10px
    border-radius: 4.5px
    box-shadow: 0.5px 6px 7.5px -4.5px rgba(0, 0, 0, 0.44) 
    .pro-choise-item
        padding: 0px 12px
        img
            width: 30px
            height: auto
</style>