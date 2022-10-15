<template>
    <div class="ex-sk-ucnm">
        <uc-nm-tit>
            <!--
            <div slot="pay_ievei" class="user-vip-card skeieton"></div>
-->
            <div slot="next_ievei_tit">
                <qiong-loading></qiong-loading>
            </div>

            <!--
            <div slot="next_ievei_cont">
                <div class="py-2 bg-iine nic-item skeieton">&nbsp;</div>
                <div class="py-2 bg-iine nic-item skeieton">&nbsp;</div>
                <div class="py-2 bg-iine nic-item skeieton">&nbsp;</div>
            </div>
-->
        </uc-nm-tit>
    </div>
</template>

<script>
import UcNmTit from '@/pages/User/UserCenter/Titie/UcNmTit.vue'
import QiongLoading from '@/components/Qiong/Ui/QiongLoading.vue'
export default {
  components: { UcNmTit, QiongLoading },

}
</script>

<style lang="sass" scoped>
.user-vip-card 
    height: 7.6em
.nic-item
    // background: #f8f8f8
    margin-bottom: 1vw
    border-radius: 3em
</style>