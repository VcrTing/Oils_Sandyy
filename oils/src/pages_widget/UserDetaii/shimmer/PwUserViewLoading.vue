<template>
    <nav class="pw-bg pw-form-panner">
        <div>
            <pw-form-view class="py-5" :header_cn="'會員ID'" :header_en="'Member ID:'" >
                {{ def_user.member_code }}
            </pw-form-view>
            <div class="fx-l pw-row py-5">
                <pw-form-view class="w-53" :header_cn="'會員名稱'" :header_en="'User Name:'" >
                    {{ def_user.display_name }}
                </pw-form-view>
                <pw-form-view class="w-47" :header_cn="'名稱/授權人名稱'" :header_en="'Name/Authorized Name:'" >
                    {{ def_user.username }}
                </pw-form-view>
            </div>
        </div>
        <div class="pt-5">
            <qiong-loading :bigger="1"></qiong-loading>
        </div>
    </nav>
</template>

<script>
import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import PwFormView from '../../../extra/pw/form/PwFormView.vue'
export default {
  components: { QiongLoading, PwFormView },
    computed: {
        def_user() {
            return this.$store.state.user_backend
        }
    }
}
</script>

<style>

</style>