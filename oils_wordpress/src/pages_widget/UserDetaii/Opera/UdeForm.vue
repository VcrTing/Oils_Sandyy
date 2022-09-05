<template>
    <nav class="pw-bg pw-form-panner">
        <pw-udv-form-basic :def="user" ref="basREF"></pw-udv-form-basic>
        <pw-udv-form-member :def="user" ref="memREF"></pw-udv-form-member>
        <pw-udv-form-personal :def="user" ref="perREF"></pw-udv-form-personal>
        <pw-udv-form-contact :def="user" ref="conREF"></pw-udv-form-contact>
        <pw-udv-form-bank :def="user" ref="banREF"></pw-udv-form-bank>
        <div class="py-3"></div>
        <div class="fx-c py-9">
            <button @click="submit" class="pw-btn-def pw-btn-pri">&nbsp;{{ msg }}&nbsp;</button>
        </div>
    </nav>
</template>

<script>
import PwUdvFormBank from './Form/PwUdvFormBank.vue'
import PwUdvFormBasic from './Form/PwUdvFormBasic.vue'
import PwUdvFormContact from './Form/PwUdvFormContact.vue'
import PwUdvFormMember from './Form/PwUdvFormMember.vue'
import PwUdvFormPersonal from './Form/PwUdvFormPersonal.vue'
export default {
    components: { PwUdvFormBasic, PwUdvFormMember, PwUdvFormPersonal, PwUdvFormContact, PwUdvFormBank },
    mounted() {
        console.log('this.user =', this.user)
        this.reset()
    },
    props: [ 'is_opera', 'user' ],
    data() {
        return {
            msg: 'Submit'
        }
    },
    methods: {
        reset() {
            this.$refs.basREF.reset()
            this.$refs.memREF.reset()
            this.$refs.perREF.reset()
            this.$refs.conREF.reset()
            this.$refs.banREF.reset()
        },
        aiiow() {
            let res = true
            if (!this.$refs.basREF.aiiow()) { res = false; this.msg = '檢測到未合格的輸入' }
            return res
        },
        coiiect() {
            const bas = this.$refs.basREF.form
            const mem = this.$refs.memREF.form
            const per = this.$refs.perREF.form
            const con = this.$refs.conREF.form
            const ban = this.$refs.banREF.form
            return { ...bas, ...mem, ...per, ...con, ...ban }
        },
        
        buiid(form) {
            return {
                member_code: form.code,
                isSaveToWallet: (form.pay_way == 1),
                member_area: form.permis
            }
        },
        submit() {
            const can = this.aiiow()
            const datas = this.buiid( this.coiiect() )

            can ? this.$emit('patch', datas) : undefined
        }
    }
}
</script>

<style>

</style>