<template>
    <div>
        <h2 class="udv-header">Bank Information</h2>
        <p class="pb-5 fs-s pw-sub">
            (The bank account holder must match the name of the member)
        </p>

        <nav v-if="one">
            <div class="fx-l pw-row py-5">
                <pw-form-view class="w-53" :header_cn="'銀行賬戶名稱'" :header_en="'Bank Account Name:'" >
                    {{ one.bank.account_name }}
                </pw-form-view>
                <pw-form-view class="w-47" :header_cn="'銀行編號'" :header_en="'Bank Code:'" >
                    {{ one.bank.bank_code }}
                </pw-form-view>
            </div>
            <pw-form-view class="w-100 py-5" :header_cn="'銀行分行代碼和賬戶'" :header_en="'Bank Branch Code & Account Number:'" >
                {{ one.bank.branch_name }}
            </pw-form-view>
            <div class="fx-l pw-row py-5">
                <pw-form-view class="w-53" :header_cn="'密碼'" :header_en="'Password:'" >
                    {{ one.bank.password }}
                </pw-form-view>
                <pw-form-view class="w-47" :header_cn="'確認密碼'" :header_en="'Confirm Password:'" >
                    {{ one.bank.password_again }}
                </pw-form-view>
            </div>
            <div class="pb-2 pt-4">
                <h3 class="py-3">Agreement</h3>
                <pw-checkbox :def="one.agreement" @change="(v) => form.agree = v"></pw-checkbox>
            </div>
        </nav>
    </div>
</template>

<script>
import PwFormView from '../../../../extra/pw/form/PwFormView.vue'
import PwCheckbox from '../../../../extra/pw/input/PwCheckbox.vue'
export default {
    components: { 
        PwFormView,
        PwCheckbox
    },
    props: [ 'one' ]
}
</script>

<style>

</style>