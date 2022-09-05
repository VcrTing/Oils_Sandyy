<template>
    <nav class="pw-bg pw-form-panner">
        <div>
          <pw-udv-view-basic :one="detaii"></pw-udv-view-basic>
          <pw-udv-view-personal :one="detaii"></pw-udv-view-personal>
          <pw-udv-view-contact :one="detaii"></pw-udv-view-contact>
          <pw-udv-view-bank :one="detaii"></pw-udv-view-bank>
        </div>
        <div class="t-c pt-9">
            <div class="py-7"></div>
            <!--
            <button @click="submit" class="pw-btn-def pw-btn-pri">&nbsp;Submit&nbsp;</button>
            -->
        </div>
    </nav>
</template>

<script>
import PwUdvViewPersonal from './Form/PwUdvViewPersonal.vue'
import PwUdvViewBasic from './Form/PwUdvViewBasic.vue'
import PwUdvViewContact from './Form/PwUdvViewContact.vue'
import PwUdvViewBank from './Form/PwUdvViewBank.vue'
export default {
  components: { PwUdvViewBasic, PwUdvViewContact, PwUdvViewPersonal, PwUdvViewBank },
  props: [ 'user' ],
  data() {
    return {
      detaii: {
        member_code: '', name: '', name_auth: '', 
        enroller_id: '', enroller_name: '', sponsor_id: '', sponsor_name: '',
        member_auth: true, first_name: '', last_name: '', chinese_name: '',
        birth: '1998-12-12', id_card: '', gender: 0,
        pay_method: '', upload_id_file: '', 
        phone: '', email: '',
        address: {  address: '', area: '', city: '', country: '', address_proof_file: '' },
        bank: {
          account_name: '', bank_code: '', branch_name: '',
          password: '', password_again: ''
        }, agreement: 1
      }
    }
  },
  mounted() {
    console.log('reset =', this.user)
    this.reset()
  },
  methods: {
    reset() {
      this.detaii = {
        member_code: this.user.member_code, name: this.user.display_name, name_auth: this.user.username, 
        enroller_id: this.user.sponsor_id, enroller_name: 'KKMMMKK LIMIT', sponsor_id: this.user.sponsor_id, sponsor_name: 'KKLLADADA UUU',
        
        member_auth: this.user.member_area, first_name: this.user.display_name, last_name: '', chinese_name: '',
        birth: '', id_card: '', gender: 0,
        pay_method: '', upload_id_file: '', 
        phone: this.user.phone, email: this.user.email,
        address: {  address: '', area: 'NIL', city: '', country: '中國香港', address_proof_file: '' },
        bank: {
          account_name: '', bank_code: '', branch_name: '',
          password: '', password_again: ''
        }, agreement: 1
      }
    }
    ,
    submit() {

    }
  }
}
</script>

<style>

</style>