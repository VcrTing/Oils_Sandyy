<template>
    <div class="pt-5">
        <h2 class="hdv-header">Bank Information</h2>
        <p class="fs-s pb-5 pw-sub">（The bank account holder must match the name of the member）</p>
        
        <div class="fx-l pw-row ">
            <pw-input ref="bknREF" @change="(v) => form.named = v" class="w-25" :header="'Bank Account Name'"></pw-input>
            <pw-input ref="bkcREF" @change="(v) => form.bank_code = v" class="w-25" :header="'Bank Code'"></pw-input>
            <pw-input ref="bncREF" @change="(v) => form.branch_code = v" class="w-50" :header="'Bank Branch Code & Account Number'"></pw-input>
        </div>
        <div class="fx-l pw-row py-4">
            <pw-input ref="pasREF" @change="(v) => form.pass = v" class="w-50" :header="'Password'"></pw-input>
            <pw-input ref="psaREF" @change="(v) => form.pass_again = v" class="w-50" :header="'Confirm Password'"></pw-input>
        </div>
        <div class="py-2">
            <h3 class="py-3">Agreement</h3>
            <pw-checkbox ref="agrREF" @change="(v) => form.agree = v"></pw-checkbox>
        </div>
    </div>
</template>

<script>
import PwCheckbox from '../../../../extra/pw/input/PwCheckbox.vue'
import PwInput from '../../../../extra/pw/input/PwInput.vue'
export default {
  components: { PwInput, PwCheckbox },
    props: [ 'def' ],
    data() {
        return {
            form: { named: '', bank_code: '', branch_code: '', pass: '', pass_again: '', agree: 0 }
        }
    },
    methods: {
        reset() {
            if (this.def) {
                this.form = { 
                    named: '', 
                    bank_code: '', branch_code: '', 
                    pass: '', pass_again: '', 
                    agree: 1
                }
            }
            this.$refs.bknREF.reset( this.form.named )
            this.$refs.bkcREF.reset( this.form.bank_code )
            this.$refs.bncREF.reset( this.form.branch_code )
            this.$refs.pasREF.reset( this.form.pass )
            this.$refs.psaREF.reset( this.form.pass_again )
            this.$refs.agrREF.reset( this.form.agree )
        }
    }
}
</script>

<style>

</style>