<template>
    <mc-form-page-layout :header="'更改會員 LP 等級'" @back_Father="$router.push('/home/member_operate/level_change')">

        <div>
            <f-mlc-form ref="formREF"></f-mlc-form>
        </div>

            <div class="fx-c my-3 qiong-pt-15 qiong-txt-14">
                <button class="btn-pri mx-3 px-5 py-1 round an_lefter" 
                    @click="submit">
                    
                    <v-icon class="qiong-txt-16 mr-2">mdi-check-underline</v-icon>
                    提交結果
                </button>
                <button class="mx-3 px-5 py-1 reset round"
                    @click="reset">
                    
                    <v-icon class="qiong-txt-16">mdi-refresh</v-icon>
                    重置表單
                </button>
            </div>
    </mc-form-page-layout>
</template>

<script>
import McFormPageLayout from '../Layout/McFormPageLayout.vue'
import FMlcForm from './Inner/FMlcForm.vue'
    export default {
  components: { McFormPageLayout, FMlcForm },
        methods: {
            reset() {
                this.$refs.formREF.reset()
            },
            
            submit() {
                let res = this.$refs.formREF.submit()
                if (res) {
                    this._submit(res.code, {
                        rank: res.num,
                        remark: res.mark
                    })
                }
            },

            async _submit(code, data) {
                let res = await this.conn.ex_patch(this, 'member_rank_edit', data, code)
                if (res) {
                    setTimeout(e => this.$router.push('/home/member_operate/level_change'), 600)
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>