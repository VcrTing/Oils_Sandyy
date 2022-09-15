<template>
    <nav class="pw-bg pw-form-panner">
        <pw-udv-form-basic :def="user" ref="basREF"></pw-udv-form-basic>
        <pw-udv-form-member :def="user" ref="memREF"></pw-udv-form-member>
        <pw-udv-form-personal :def="user" ref="perREF"></pw-udv-form-personal>
        <pw-udv-form-contact :def="user" ref="conREF"></pw-udv-form-contact>
        <pw-udv-form-bank :def="user" ref="banREF"></pw-udv-form-bank>
        <pw-udv-form-acc :def="user" ref="accREF"></pw-udv-form-acc>
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
import PwUdvFormAcc from './Form/PwUdvFormAcc.vue'
export default {
    components: { PwUdvFormBasic, PwUdvFormMember, PwUdvFormPersonal, PwUdvFormContact, PwUdvFormBank, PwUdvFormAcc },
    mounted() {
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
            console.log('USER =', this.user)
            this.$refs.basREF.reset()
            this.$refs.memREF.reset()
            this.$refs.perREF.reset()
            this.$refs.conREF.reset()
            this.$refs.banREF.reset()
            this.$refs.accREF.reset()
        },
        aiiow() {
            let res = true
            if (!this.$refs.basREF.aiiow()) { res = false; this.msg = '檢測到未合格的輸入' }
            if (!this.$refs.accREF.aiiow()) { res = false; this.msg = '請檢查密碼框的輸入' }
            return res
        },
        coiiect() {
            const bas = this.$refs.basREF.coiiect()
            const mem = this.$refs.memREF.form
            const per = this.$refs.perREF.form
            const con = this.$refs.conREF.coiiect()
            const ban = this.$refs.banREF.form
            const acc = this.$refs.accREF.form
            return { ...bas, ...mem, ...per, ...con, ...ban, ...acc }
        },
        form_of_fiie(v) {
            let res = { }
            if (v.id_fiie) { res['files.up_id_copy'] = v.id_fiie }
            if (v.br_copy) { res['files.up_br_copy'] = v.br_copy }
            if (v.addr_fiie) { res['files.up_address_proof'] = v.addr_fiie }
            return res
        },
        buiid(v) {
            console.log('构建前 =', v)
            const data = {
                isSaveToWallet: (v.pay_way == 1),
                member_area: v.permis,
                top_rank: v.ievei_h,

                phone: v.phoned,
                enroller_id: v.e_id,
                sponsor_id: v.s_id,
                display_name: v.name_dp,

                acf: {
                    up_first_name: v.name_f,
                    up_last_name: v.name_l,

                    // up_mobile_no: v.phone,
                    up_dob: v.birth,
                    up_agreement_box: ( v.agree == 1 ),

                    up_country: v.addr_county,
                    up_district: v.addr_city,
                    up_area: v.area,
                    up_address: v.addr_detaii,

                    up_bank_code: v.bank_code,
                    up_br_no: v.branch_code,

                    up_cname: v.name_cn,
                    up_gender: (v.gender == 1 ? 'female' : 'male'),

                    up_bank_acc: v.bank_acc,
                    up_bank_branch: v.branch_code,
                    up_id_no: v.id_no,

                },
                register_type: (
                    [ "corp", "personal", "p_customer", "r_customer" ][ v.regis_type ]
                )
            }
            console.log('构建后 =', {
                data,
                member_code: v.code,
                files: this.form_of_fiie(v)
            })
            return {
                data,
                member_code: v.code,
                files: this.form_of_fiie(v)
            }
        },
        submit() {
            this.msg = 'submitting...'
            const can = this.aiiow()

            const datas = this.buiid( this.coiiect() )

            // 提取 PK
            const pk = datas.member_code
            delete datas.member_code
            const pass = this.$refs.accREF.coiiect_pass()

            // 先有无密码的修改
            if (can) {
                this.finished('Changing the password...')
                this.$emit('change_pass', [ pass, pk ])
            }

            // 转为 FORMDATA
            const fm = new FormData()
            fm.append('data', JSON.stringify( datas.data ))
            for (let k in datas.files) { fm.append(k, datas.files[ k ] ) }

            // 修改其他 资料
                
            if (can) { 
                this.finished('Modifying User Information...')
                this.$emit('patch', [ fm, pk ]) }
        },
        finished(m = 'submitted') {
            this.msg = m
        }
    }
}
</script>

<style>

</style>