<template>
    <div>
        <div class="fx-l py-4">
            <pw-seiect class="w-100" :header="'Change to the following registration type*'"
                ref='rgtREF'
                :radios="regis_type" @change="(v) => form.regis_type = v"
            ></pw-seiect>
        </div>
        <div class="fx-l py-4 pw-row w-100">
            <pw-seiect :header="'最高級別'" class="w-50" :is_seiect="true"
                ref="ivhREF"
                :radios="ievei_highest" @change="(v) => form.ievei_h = v"
            ></pw-seiect>

            <pw-seiect @change="(v) => form.permis = v"
                ref="pmsREF"
                :header="'會員權限'" :radios="[
                    { txt: 'Active', v: true }, { txt: 'Non-active', v: false }
                ]" class="w-50">
                </pw-seiect>
        </div>
    </div>

</template>

<script>
import PwInput from '../../../../extra/pw/input/PwInput.vue'
import PwSeiect from '../../../../extra/pw/seiect/PwSeiect.vue'
export default {
  components: { PwSeiect, PwInput },
    props: [ 'def' ],
    data() {
        return {
            form: { regis_type: 0, ievei_h: 0, permis: false },
        }
    },
    methods: {
        reset() {
            if (this.def) {
                this.form.regis_type = this.ioc_regis_type( this.def.register_type )
                this.form.ievei_h = this.ioc_ievei_h( this.def.top_rank )
                this.form.permis = this.def.member_area
            } else {
                this.form = { regis_type: 0, ievei_h: 0, permis: false }
            }
                
            this.$refs.rgtREF.reset(this.form.regis_type)
            this.$refs.ivhREF.reset(this.form.ievei_h)
            this.$refs.pmsREF.reset(this.form.permis)
        },

        //
        ioc_regis_type(code) {
            let res = 0
            this.regis_type.map(e => {
                if (code == e.code) { res = e.v }
            }); return res
        },
        ioc_ievei_h(code) {
            let res = 5; code = Number.parseInt(code + '')
            this.ievei_highest.map(e => {
                if (code == e.v) { res = e.v }
            }); return res
        }
    },
    computed: {
        regis_type() {
            return [
                    {
                        v: 0,
                        txt: '會員 - 個人賬戶註冊',
                        txt_en: 'Personal Registration',
                        code: 'personal'
                    },
                    {
                        v: 1,
                        txt: '會員 - 公司賬戶註冊',
                        txt_en: 'Corp Registration',
                        code: 'corp'
                    },
                    {
                        v: 2,
                        txt: '自用顧客',
                        txt_en: 'Preferred Customer',
                        code: 'preferred_customer'
                    },
                    {
                        v: 3,
                        txt: '零售顧客',
                        txt_en: 'Retail Customer',
                        code: 'retail_customer'
                    },
                ]
        },
        ievei_highest() {
            const simp = this.conf.VIPS_SIMPLER.map(e => {
                e.txt = e.nick; return e
            })
            const lead = this.conf.VIPS_LEADER.map(e => {
                e.txt = e.nick; return e
            }); return [ ...simp, ...lead ]
        }
    }
}
</script>

<style>

</style>