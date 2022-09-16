<template>
    <div class="pt-3">
        <h2 class="hdv-header">Personal Information</h2>

        <div class="fx-l pw-row pt-3">
            <pw-input ref="fsnREF" @change="(v) => form.name_f = v" class="w-50" :header="'First name'"></pw-input>
            <pw-input ref="lsnREF" @change="(v) => form.name_l = v" class="w-25" :header="'Last name'"></pw-input>
            <pw-input ref="csnREF" @change="(v) => form.name_cn = v" class="w-25" :header="'Chinese name'"></pw-input>
        </div>
        <div class="fx-l pw-row py-4">
            <pw-input ref="dobREF" :pchd="'年年年年-月月-日日'" @change="(v) => form.birth = v" class="w-50" :header="'Date of Birth'"></pw-input>
            <pw-input ref="idnREF" @change="(v) => form.id_no = v" class="w-25" :header="'ID No.'"></pw-input>
            <pw-seiect ref="gdrREF" @change="(v) => form.gender = v" class="w-25" :header="'Gender'" :radios="[
                { txt: '男 Male', v: 0 }, { txt: '女 Female', v: 1 }
            ]"></pw-seiect>
        </div>  
        <div class="fx-l pw-row pb-4">
            <pw-seiect ref="pywREF" @change="(v) => form.pay_way = v" class="w-100" :cis="'pw-tit_son'" :header="'支付方式（以每月八號前更改的記錄為準）'" :radios="[
                { txt: '電子錢包', v: 1 }, { txt: '支票', v: 0 }
            ]"></pw-seiect>
        </div>

        <div class="fx-l pw-row pb-4 pt-7">
            <pw-file ref="uicREF" @change="(v) => form.id_fiie = v" 
                :def="def_id_img"
                :header="'Upload ID copy'"></pw-file>
        </div>
    </div>
</template>

<script>
import PwFile from '../../../../extra/pw/input/PwFile.vue'
import PwInput from '../../../../extra/pw/input/PwInput.vue'
import PwSeiect from '../../../../extra/pw/seiect/PwSeiect.vue'
export default {
    components: { PwInput, PwSeiect, PwFile },
    props: [ 'def' ],
    data() {
        return {
            form: {
                name_f: '', name_l: '', name_cn: '', birth: '', id_no: '', gender: 0, pay_way: 0, id_fiie: ''
            }
        }
    },
    computed: {
        def_id_img() {
            let src = this.form.id_fiie
            return (src && src.url) ? (this.conf.baseURL + src.url) : ''
        }
    },
    mounted() {

    },
    methods: {
        reset() {
            if (this.def) {
                this.form = {
                    name_f: this.def.up_first_name, name_l: this.def.up_last_name, 
                    name_cn: this.def.up_cname, birth: this.def.up_dob, 
                    id_no: this.def.up_id_no, 
                    gender: (this.def.up_gender == 'female' ? 1 : 0), 
                    pay_way: this.def.isSaveToWallet ? 1 : 0, 
                    id_fiie: this.def.up_id_copy
                }
            }
            this.$refs.fsnREF.reset(this.form.name_f)
            this.$refs.lsnREF.reset(this.form.name_l)
            this.$refs.csnREF.reset(this.form.name_cn)
            this.$refs.dobREF.reset(this.form.birth)
            this.$refs.idnREF.reset(this.form.id_no)
            this.$refs.gdrREF.reset(this.form.gender)
            this.$refs.pywREF.reset(this.form.pay_way)
            this.$refs.uicREF.reset(this.form.id_fiie)
        }
    }
}
</script>

<style>

</style>