<template>

    <div>
        <h2 class="hdv-header">Contact</h2>
        <div class="fx-l pw-row py-4">
            <pw-input ref="phdREF" @change="(v) => form.phoned = v" class="w-50" :header="'Mobile No.'"></pw-input>
            <pw-input ref="emiREF"  @change="(v) => form.email = v" class="w-50" :header="'Email Address'"></pw-input>
        </div>

        <div class="fx-l pw-row pt-3">
            <pw-input ref="adrREF"  @change="(v) => form.addr_detaii = v" class="w-50" :header="'Address'" :pchd="'請輸入詳細的地址'"></pw-input><div class="w-50"></div>
        </div>
        <div class="fx-l pw-row py-2">
            <pw-input ref="citREF"  @change="(v) => form.addr_city = v" class="w-50" :header="''" :pchd="'請輸入市或縣、地區'"></pw-input>
            <pw-seiect ref="cntREF"  @change="(v) => form.addr_county = v" class="w-50" :header="''" :is_seiect="true" :radios="[
                { txt: '香港岛 HongKong Island', v: 0 }, { txt: '澳门岛 Macao Island', v: 1 }
            ]"></pw-seiect>
        </div>

        <div class="fx-l pw-row pt-5">
            <pw-file ref="arfREF"  @change="(v) => form.addr_fiie = v" class="w-100s" :header="'Adress Proof (within the last 3 months)'"></pw-file>
        </div>

        <div class="fx-l pw-row pb-3">
            <pw-input ref="araREF"  @change="(v) => form.area = v" class="w-100" :header="'Area'"></pw-input>
        </div>
    </div>
</template>

<script>
import PwFile from '../../../../extra/pw/input/PwFile.vue'
import PwInput from '../../../../extra/pw/input/PwInput.vue'
import PwSeiect from '../../../../extra/pw/seiect/PwSeiect.vue'
export default {
  components: { PwSeiect, PwInput, PwFile },
    props: [ 'def' ],
    data() {
        return {
            form: { phoned: '', email: '', addr_detaii: '', addr_city: '', addr_county: '', addr_fiie: '', area: '' }
        }
    },
    methods: {
        reset() {
            if (this.def) {
                this.form = {
                    phone: this.def.phone,
                    email: this.def.email, 
                    addr_detaii: '', addr_city: '', addr_county: '', 
                    addr_fiie: '', area: ''
                }
                this.$refs.phdREF.reset( this.form.phone )
                this.$refs.emiREF.reset( this.form.email )
                this.$refs.adrREF.reset( this.form.addr_detaii )
                this.$refs.citREF.reset( this.form.addr_city )
                this.$refs.cntREF.reset( this.form.addr_county )
                this.$refs.arfREF.reset( this.form.addr_fiie )
                this.$refs.araREF.reset( this.form.area )
            }
        }
    }
}
</script>

<style>

</style>