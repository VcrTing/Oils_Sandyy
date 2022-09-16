<template>
    <v-row class="qiong-pt-10 py-3">
        <v-col :cols="12" class="px-7">
            <line-form-wrapper :ex_class="'pr-3'" :placeholder="'SKU'" ref="skuInput">
                產品SKU：
            </line-form-wrapper>

            <div class="pt-3 mobie-show"></div>

            <line-form-wrapper :ex_class="'pr-3'" :placeholder="'中文或英文均可'" ref="nameInput">
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

        <!-- v-col :cols="3" class="px-7 fx-r bar-filter">

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
                sku: '',
                named: ''
            }
        },
        methods: {
            reset() {
                this.$refs.skuInput.def('')
                this.$refs.nameInput.def('')
                this.$emit('search', {})
            },
            switching() {
                const sku = this.$refs.skuInput.value()
                const named = this.$refs.nameInput.value()

                if (this.validate(sku, named)) {
                    this.sku = sku
                    this.named = named
                    return this.build_condition(sku, named)
                }
                return { }
            },

            validate(sku, named) { return (sku || named) ? true : false },

            build_condition(sku, named) {
                const res = {  }

                if (sku) { res['sku_contains'] = sku }
                if (named) { 
                    const is_cn = this.validated.val_chinese(named)
                    if (is_cn) {
                        res['product.translation_contains'] = named
                    } else {
                        res['product.translation_contains'] = named
                    }
                }
                return res
            },

            search() {
                this.$emit('search', this.switching())
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>