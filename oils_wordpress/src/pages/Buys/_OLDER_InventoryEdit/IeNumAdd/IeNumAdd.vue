<template>
    <div>

        <div class="mobie-table-simple">

            <div class="ieedit-panel">
                <div class="iep-tr qiong-txt-tr fw-b">
                    <div>加數量</div>
                    <div>原因</div>
                    <div>店鋪</div>
                    <div>&nbsp;</div>
                </div>

                <div class="iep-td qiong-txt-td"
                    v-for="(v, i) in plus" :key="i"

                    :class="{ 'iep-line': (i < (plus.length - 1)), 'iep-bg': (i % 2 == 1) }"
                >
                    <div>
                        <iena-num-edit :item="v"></iena-num-edit>
                    </div>
                    <div>
                        <iena-reson-edit :item="v"></iena-reson-edit>
                    </div>
                    <div class="pr-12">
                        <iena-typed-edit :item="v"></iena-typed-edit>
                    </div>
                    <div class="pl-7 fx-c">
                        <ie-tool-option @done_Father="saving" :k="i" :option="v.option"></ie-tool-option>
                        <ie-tool-delete @done_Father="sureTrash" :index="i"></ie-tool-delete>
                    </div>
                </div>
            </div>

        </div>
        <qiong-space :space="'1vw'"></qiong-space>

        <ie-tool-sure-modal ref="sureModal" @done_Father="trash"></ie-tool-sure-modal>
    </div>
</template>

<script>
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import IenaNumEdit from '../Form/IenaNumEdit.vue'
import IenaResonEdit from '../Form/IenaResonEdit.vue'
import IenaTypedEdit from '../Form/IenaTypedEdit.vue'
import IeToolOption from '../Tool/IeToolOption.vue'
import IeToolPlusBtn from '../Tool/IeToolPlusBtn.vue'
import IeToolDelete from '../Tool/IeToolDelete.vue'
import IeToolSureModal from '../Tool/IeToolSureModal.vue'
    export default {
  components: { IenaNumEdit, IenaResonEdit, IenaTypedEdit, IeToolOption, QiongSpace, IeToolPlusBtn, IeToolDelete, IeToolSureModal },
        name: '',
        data() {
            return {
                plus: [
                    {
                        num: 30,
                        reson: 1,
                        typed: 1,
                        option: 1
                    },
                    {
                        num: 99990,
                        reson: 2,
                        typed: 2,
                        option: 0
                    }
                ],

                index: 0
            }
        },

        methods: {
            saving(option, key) {
                const it = this.plus[key]
                if (it.num > 0) {
                    it.option = option
                } else {
                    it.num = Math.abs(it.num)
                }
            },

            optionPlus() {
                
                this.plus.push(

                    {
                        num: 0,
                        reson: 1,
                        typed: 1,
                        option: 1
                    }
                )
            },

            sureTrash(i) {
                this.index = i
                this.$refs.sureModal.show = true
            },
            trash() {
                console.log('ADD 刪除 =', this.index)
                this.plus = this.plus.splice(this.index, 1)
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>