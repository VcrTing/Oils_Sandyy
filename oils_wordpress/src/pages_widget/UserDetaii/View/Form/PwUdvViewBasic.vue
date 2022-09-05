<template>
    <div v-if="one">
        <pw-form-view class="py-5" :header_cn="'會員ID'" :header_en="'Member ID:'" >
            {{ one.member_code }}
        </pw-form-view>
        <div class="fx-l pw-row py-5">
            <pw-form-view class="w-53" :header_cn="'會員名稱'" :header_en="'User Name:'" >
                {{ one.name }}
            </pw-form-view>
            <pw-form-view class="w-47" :header_cn="'名稱/授權人名稱'" :header_en="'Name/Authorized Name:'" >
                {{ one.name_auth }}
            </pw-form-view>
        </div>
        <div class="fx-l pw-row py-5">
            <pw-form-view class="w-53" :header_cn="'介紹人 ID'" :header_en="'Enroller ID:'" >
                {{ one.enroller_id }}
            </pw-form-view>
            <pw-form-view class="w-47" :header_cn="'介紹人姓名'" :header_en="'Enroller Name:'" >
                {{ one.enroller_name }}
            </pw-form-view>
        </div>
        <div class="fx-l pw-row py-5">
            <pw-form-view class="w-53" :header_cn="'保護人 ID'" :header_en="'Enroller ID:'" >
                {{ one.sponsor_id }}
            </pw-form-view>
            <pw-form-view class="w-47" :header_cn="'保護人姓名'" :header_en="'Enroller Name:'" >
                {{ one.sponsor_name }}
            </pw-form-view>
        </div>
        <div class="pw-row py-5">
            <pw-form-view class="w-100" :header_cn="'會員權限'" :header_en="'Membership authority:'" >
                <span v-if="one.member_auth">Active</span>
                <span v-else>Non-active</span>
            </pw-form-view>
        </div>
    </div>
</template>

<script>
import PwFormView from '../../../../extra/pw/form/PwFormView.vue'
export default {
  components: { PwFormView },
    props: [ 'one' ]
}
</script>

<style>

</style>