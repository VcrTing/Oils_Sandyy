<template>
    <mc-form-page-layout :no_switch="true" :header="'用戶資金操作'" @back_Father="$router.go(-1)">

        <div v-show="!adding">
            <ew-admin-form ref="formREF"></ew-admin-form>

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
        </div>
        <div v-show="adding">
            <qiong-loading v-if="!succ" class="an_upper" :bigger="1"></qiong-loading>
            
            <div v-else>
                <sts-opera-shimmer></sts-opera-shimmer>
                <div class="fx-c py-8">
                    <button @click="refresh" class="btn-sim an_upper">确认</button>
                </div>
            </div>
        </div>

    </mc-form-page-layout>
</template>

<script>
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import StsOperaShimmer from '../../../components/Shimmer/Status/StsOperaShimmer.vue'
import McFormPageLayout from '../../../pages/MemberChange/Form/Layout/McFormPageLayout.vue'
import EwAdminForm from './body/EwAdminForm.vue'
    export default {
  components: { McFormPageLayout, EwAdminForm, QiongLoading, StsOperaShimmer },
  data() { return { adding: false, succ: false } },
        methods: {
            reset() {
                this.$refs.formREF.reset()
            },
            
            submit() {
                let res = this.$refs.formREF.submit()
                if (res) { this._submit('', res) }
            },

            refresh() {
                this.reset()
                this.succ = false
                this.adding = false
            },

            async _submit(code, data) {
                this.adding = true
                let res = await this.conn.ex_post(this, 'admin_wallet_modify', data)
                if (res) {
                    setTimeout(e => this.succ = true , 600)
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>