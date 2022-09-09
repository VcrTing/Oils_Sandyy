<template>
    <nav class="pw-bg pw-form-panner">
        <div v-if="detaii">
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
      detaii: null
        /*
        member_code: '', name: '', name_auth: '', 
        enroller_id: '', enroller_name: '', sponsor_id: '', sponsor_name: '',
        member_auth: true, first_name: '', last_name: '', chinese_name: '',
        birth: '1998-12-12', id_card: '', gender: 0,
        pay_method: '', upload_id_fil: { }, 
        phone: '', email: '',
        address: {  address: '', area: '', city: '', country: '', address_proof_file: '' },
        bank: {
          account_name: '', bank_code: '', branch_name: '',
          password: '', password_again: ''
        }, agreement: 1
      }
      */
    }
  },
  mounted() {
    this.reset()
  },
  methods: {
    _name( ) {
      // if (this.user.up_first_name == '203001') { return this.user.up_br_ename }
      return this.user.up_br_ename
      // this.user.up_first_name + ' ' + this.user.up_last_name
    },
    reset() {
      this.detaii = {
        member_code: this.user.member_code, 
        name: this._name(), 
        name_auth: this.user.username, 
        enroller_id: this.user.sponsor_id, enroller_name: this.user.enroller_name, 
        sponsor_id: this.user.sponsor_id, sponsor_name: this.user.sponsor_name,
        
        member_auth: this.user.member_area, 
        first_name: this.user.up_first_name, 
        last_name: this.user.up_last_name, 
        chinese_name: this.user.up_cname,

        birth: this.user.up_dob, 
        id_card: this.user.up_id_no, 
        gender: this.user.up_gender,

        pay_method: this.user.isSaveToWallet, 
        upload_id_file: this.user.up_id_copy,

        phone: this.user.phone, email: this.user.email,

        address: {  
          address: this.user.up_address, area: this.user.up_area, 
          city: this.user.up_district, country: this.user.up_country, 
          
          address_proof_file: this.user.up_address_proof
        },
        bank: {
          account_name: this.user.up_bank_acc, 
          bank_code: this.user.up_bank_code, 
          branch_name: this.user.up_bank_branch,
          password: '', password_again: ''
        }, 
        agreement: this.user.up_agreement_box
      }
      console.log('DETAII =', this.detaii)
    }
    ,
    submit() {

    }
  }
}
</script>

<style>

</style>