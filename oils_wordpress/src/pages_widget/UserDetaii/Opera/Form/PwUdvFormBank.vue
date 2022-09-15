<template>
    <div class="pt-5">
        <h2 class="hdv-header">Bank Information</h2>
        <p class="fs-s pb-5 pw-sub">（The bank account holder must match the name of the member）</p>
        
        <div class="fx-l pw-row ">
            <pw-input ref="bknREF" @change="(v) => form.bank_acc = v" class="w-25" :header="'Bank Account Name'"></pw-input>
            <pw-input ref="bkcREF" @change="(v) => form.bank_code = v" class="w-25" :header="'Bank Code'"></pw-input>
            <pw-input ref="bncREF" @change="(v) => form.branch_code = v" class="w-50" :header="'Bank Branch Code & Account Number'"></pw-input>
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
            form: { bank_acc: '', bank_code: '', branch_code: '' }
        }
    },
    methods: {
        reset() {
            if (this.def) {
                this.form = { 
                    bank_acc: this.def.up_bank_acc, 
                    bank_code: this.def.up_bank_code, 
                    branch_code: this.def.up_bank_branch, 
                }
            }
            this.$refs.bknREF.reset( this.form.bank_acc )
            this.$refs.bkcREF.reset( this.form.bank_code )
            this.$refs.bncREF.reset( this.form.branch_code )
        }
    }
}
</script>

<style>

</style>