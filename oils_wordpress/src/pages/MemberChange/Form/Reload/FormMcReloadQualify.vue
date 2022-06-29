<template>
    <mc-form-page-layout :header="'重啟會員 LP 等級'" @back_Father="$router.push('/home/member_operate/reload_qualify')">

        <div>
            <f-mrq-form ref="formREF"></f-mrq-form>
        </div>

            <div class="btn-transfer an_upper qiong-pt-15 qiong-txt-14">
                <button class="reset"
                    @click="reset">
                    <v-icon class="qiong-txt-16">mdi-refresh</v-icon>
                    重置表單
                </button>
                <button class="btn-pri" 
                    @click="submit">
                    <v-icon class="qiong-txt-16 mr-3">mdi-check-underline</v-icon>
                    提交結果
                </button>
            </div>
    </mc-form-page-layout>
</template>

<script>
import McFormPageLayout from '../Layout/McFormPageLayout.vue'
import FMrqForm from './Inner/FMrqForm.vue'
    export default {
  components: { McFormPageLayout, FMrqForm },
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            reset() {
                let res = this.$refs.formREF.reset()
            },
            async submit() {
                let res = this.$refs.formREF.submit()
                if (res) {
                    let uri = this.api.admin_wallet_lp_reboot(res.member_code)
                    const is_remove = !res.is_reboot

                    if (is_remove) { uri = this.api.admin_wallet_lp_reboot_remove(res.member_code) }
                    const result = await this._submit(uri, this._ser_result(res))
                    if (result) { setTimeout(e => this.$router.push('/home/member_operate/reload_qualify'), 600) }
                }
            },

            async _submit(url, data) {
                return await this.conn.patch( url, this.$store.state.token, data )
            },

            _ser_result(e) {
                return {
                    year: e.year,
                    month: e.month,
                    description: e.mark
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>