<template>
    <div>
        <h2 class="udv-header">Personal Information</h2>
        <nav v-if="one">
            <div class="fx-l pw-row py-5">
                <pw-form-view class="w-53" :header_cn="'名字'" :header_en="'First name:'" >
                    {{ one.first_name }}
                </pw-form-view>
                <pw-form-view class="w-24" :header_cn="'姓氏'" :header_en="'Last name:'" >
                    {{ one.last_name }}
                </pw-form-view>
                <pw-form-view class="w-23" :header_cn="'中文名'" :header_en="'Chinese name:'" >
                    {{ one.chinese_name }}
                </pw-form-view>
            </div>
            <div class="fx-l pw-row py-5">
                <pw-form-view class="w-53" :header_cn="'生日'" :header_en="'Date of Birth:'" >
                    {{ one.birth }}
                </pw-form-view>
                <pw-form-view class="w-24 min-w-5em" :header_cn="'身份證號碼'" :header_en="'ID:'" >
                    {{ one.id_card }}
                </pw-form-view>
                <pw-form-view class="w-23" :header_cn="'性別'" :header_en="'Gender:'" >
                    <span v-if="one.gender">女</span>
                    <span v-else>男</span>
                </pw-form-view>
            </div>
            <div class="py-5">
                <pw-form-view :header_cn="'支付方式'" :header_en="'payment method:'" >
                    <span v-if="one.pay_method">{{ one.pay_method }}</span>
                    <span v-else>待設定</span>
                </pw-form-view>
                <p class="pw-sub fs-s">以每月八號前更改的記錄為準如有更改請聯絡客戶服務中心</p>
            </div>
            <div class="py-5">
                <pw-file-view :fiie="one.upload_id_file"></pw-file-view>
            </div>
        </nav>
    </div>
</template>

<script>
import PwFormView from '../../../../extra/pw/form/PwFormView.vue'
import PwFileView from '../../../../extra/pw/input/PwFileView.vue'
export default {
  components: { PwFileView, PwFormView },
  props: [ 'one' ]
}
</script>

<style lang="sass">
</style>