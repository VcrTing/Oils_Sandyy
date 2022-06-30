<template>
    <v-row class="qiong-pt-10">
        <v-col :cols="12" class="px-7">
            <line-form-wrapper :placeholder="'SKU'" ref="skuInput">
                產品SKU：
            </line-form-wrapper>

            <div class="pt-3 mobie-show"></div>

            <line-form-wrapper :placeholder="'名稱'" ref="nameInput">
                產品名稱：
            </line-form-wrapper>

            <div class="pt-3 mobie-show"></div>

            <div class="bar-filter d-ib">
                <button class="submit" @click="search()">
                    <v-icon>mdi-filter-outline</v-icon>
                    過濾
                </button>

                <button @click="reset">
                    <v-icon>mdi-reload</v-icon>
                    重置
                </button>
            </div>

        </v-col>

        <!-- v-col :cols="3" class="px-7 fx-r">

            <v-icon class="btn-form_icon mobie-show mt-3" @click="search()">mdi-magnify</v-icon>
        </!-->
    </v-row>
</template>

<script>
import lineFormWrapper from '../../../../components/Qiong/Form/lineFormWrapper.vue'
    export default {
  components: { lineFormWrapper },
        name: '',
        data() {
            return {
                sku_ch: '',
                name_ch: ''
            }
        },
        methods: {
            reset() {

            },
            switching() {
                const sku = this.$refs.skuInput.value()
                const named = this.$refs.nameInput.value()

                this.sku_ch = sku 
                this.name_ch = named

                return this.validate()
            },

            validate() {
                let res = true 

                return res
            },

            search() {
                this.switching()

                console.log(this.sku_ch, this.name_ch)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>