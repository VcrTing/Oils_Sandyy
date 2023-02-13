<template>
    <mc-form-page-layout :no_switch="true" :header="'用戶資金操作'" @back_Father="$router.go(-1)">

        <div v-show="!adding">
            <ew-admin-form ref="formREF"></ew-admin-form>

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
                try {
                    let res = this.$refs.formREF.submit()
                    res.ewallet_change = Number.parseFloat(res.ewallet_change)
                    if (res) { this._submit('', res) }
                } catch(err) { alert('網絡錯誤！！！') }
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
.reset
    color: #d62424
    border: none
    background: #f4ecec !important
    border-top-right-radius: 0px !important
    border-bottom-right-radius: 0px !important

.btn-pri
    border-top-left-radius: 0px !important
    border-bottom-left-radius: 0px !important
</style>