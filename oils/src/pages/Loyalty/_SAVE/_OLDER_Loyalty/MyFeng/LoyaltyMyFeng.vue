<template>
    <modal-dialog :title="'个人积分记录'" id="myLoyaltyModal">

        <loyalty-my-feng-inner></loyalty-my-feng-inner>
        
        <qiong-space :space="'2vh'"></qiong-space>
    </modal-dialog>
</template>

<script>
import ModalDialog from '../../../../components/Qiong/Dialog/ModalDialog.vue'
import QiongSpace from '../../../../components/Qiong/Ui/QiongSpace.vue'
import LoyaltyMyFengInner from './Inner/LoyaltyMyFengInner.vue'
    export default {
  components: { ModalDialog, QiongSpace, LoyaltyMyFengInner },
        name: '',
        data() {
            return {

            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>