<template>
    <mc-form-page-layout :header="'增加會員 LP 積分'" @back_Father="$router.push('/home/member_operate/lp_plus')">

        <div>
            <f-mlp-form ref="formREF"></f-mlp-form>
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
import FMlpForm from './Inner/FMlpForm.vue'
    export default {
  components: { McFormPageLayout, FMlpForm },
        name: '',
        data() {
            return {
                
            }
        },
        computed: {
            user() {
                return this.$store.state.user_backend
            }
        },
        methods: {
            reset() {
                let res = this.$refs.formREF.reset()
            },
            async submit() {
                let res = this.$refs.formREF.submit()
                if (res) {
                    const code = res.member_code
                    res = this._params(res)
                    
                    const result = await this.conn.post(
                        this.api.admin_wallet_lp_add(res.member_code),
                        this.$store.state.token,
                        res
                    )
                    if (result) {
                        setTimeout(e => this.$router.push('/home/member_operate/lp_plus'), 600)
                    }
                }
            },

            _params(res) {
                return {
                    date: res.date,
                    LP_change: (res.is_add ? '' : '-') + res.num,
                    remark: res.mark,
                    member_code: res.member_code
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>