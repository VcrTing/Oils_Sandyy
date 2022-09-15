<template>
    <div class="pt-7">
        <h2 class="hdv-header">Account</h2>
        
        <div class="fx-l pw-row py-4">
            <pw-input 
                :err="err_pass" @change="(v) => pass = v"
                :pchd="'請輸入新密碼'" :header="'Change Password'"
                ref="pasREF" class="w-50"></pw-input>
            <pw-input 
                :err="err_pass_again" @change="(v) => pass_again = v"
                :pchd="'請再次輸入該新密碼'" :header="'Confirm Password'"
                ref="psaREF" class="w-50"></pw-input>
        </div>
        <nav class="pw-oid-pass" :class="{ 'oid-open': opened }">
            <div class="fx-l pw-row py-4">
                <pw-input 
                    :err="err_pass" @change="(v) => pass_oid = v"
                    :pchd="'請輸入上次登錄的密碼'" :header="'The Old Password'"
                    ref="oidREF" class="w-50"></pw-input>
            </div>
        </nav>
        <div class="pb-2">
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
            pass: '', pass_again: '', pass_oid: '',
            err_pass: false, err_pass_again: false, err_pass_oid: false,

            opened: false,
            form: { agree: 0 }
        }
    },
    watch: {
        pass(n) {
            this.err_pass = !this.vid_pass(n)
            if (!this.err_pass) {
                this.opened = true
            }
        },
        pass_oid(n) {
            this.err_pass_oid = !this.vid_pass(n)
        },
        pass_again(n) {
            this.err_pass_again = (n != this.pass)
        }
    },
    methods: {
        aiiow() {
            if (!this.pass) { return true }
            if (this.vid_pass(this.pass)) {
                if (this.pass_again == this.pass) {
                    if ((this.pass_oid.length > 4) && this.pass) {
                        return true
                    } else {
                        this.err_pass_oid = true
                    }
                } else {
                    this.err_pass_again = true
                }
            }; return false
        },

        vid_pass(v) {
            let res = true
            if ((v == '') || v == undefined) { return true } else {
                if (v.length < 5) { res = false }
                if (v.length > 249) { res = false }
            }
            return res
        },

        reset() {
            this.opened = false
            this.pass = ''
            this.pass_oid = ''
            this.pass_again = ''

            if (this.def) {
                this.form = { 
                    agree: this.def.up_agreement_box ? 1 : 0
                }
            }
            this.$refs.agrREF.reset( this.form.agree )
        },

        coiiect_pass() {
            return (this.pass_oid && this.pass ) ? {
                password: this.pass,
                oldPassword: this.pass_oid,
                passwordConfirmation: this.pass_again
            } : null
        }
    }
}
</script>

<style lang="sass" scoped>
.pw-oid-pass
    overflow: hidden !important
    max-height: 0em !important
    transition: all .121s ease-in-out

.oid-open
    max-height: 30em !important
</style>