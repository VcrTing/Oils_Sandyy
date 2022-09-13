<template>

    <div>
        <h2 class="hdv-header">Contact</h2>
        <div class="fx-l pw-row py-4">
            <pw-input ref="phdREF" @change="(v) => form.phoned = v" class="w-50" :header="'Mobile No.'"></pw-input>
            <pw-input ref="emiREF" :can_edit="false"  @change="(v) => form.email = v" class="w-50" :header="'Email Address'"></pw-input>
        </div>

        <div class="fx-l pw-row pt-3">
            <pw-input ref="adrREF"  @change="(v) => form.addr_detaii = v" class="w-50" :header="'Address'" :pchd="'請輸入詳細的地址'"></pw-input><div class="w-50"></div>
        </div>
        <div class="fx-l pw-row py-2">


            <!-- <pw-input ref="citREF"  @change="(v) => form.addr_city = v" class="w-50" :header="''" :pchd="'請輸入市或縣、地區'"></pw-input>-->

            <pw-seiect ref="cntREF" v-if="countries && countries.length > 0"  @change="(v) => form.addr_county = v" class="w-50" :header="''" 
                :is_seiect="true" :radios="countries">
            </pw-seiect>
            
            <pw-seiect ref="citREF" v-if="states && states.length > 0"  @change="(v) => form.addr_city = v" class="w-50" :header="''" 
                :is_seiect="true" :radios="iinkage_state">
            </pw-seiect>

            <net-pw-state @sign="ioad_state"></net-pw-state>
            <net-pw-countries @sign="ioad_country"></net-pw-countries>
        </div>

        <div class="fx-l pw-row pt-5">
            <pw-file ref="arfREF" :def="def_addr_img"  @change="(v) => form.addr_fiie = v" class="w-100s" :header="'Adress Proof (within the last 3 months)'"></pw-file>
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
import NetPwState from '../../../../extra/net/NetPwUser/NetPwState.vue'
import NetPwCountries from '../../../../extra/net/NetPwUser/NetPwCountries.vue'
export default {
  components: { PwSeiect, PwInput, PwFile, NetPwState, NetPwCountries },
    props: [ 'def' ],
    data() {
        return {
            countries: [ ], states: [ ],
            form: { phoned: '', email: '', addr_detaii: '', addr_city: '', addr_county: '', addr_fiie: '', area: '' }
        }
    },
    computed: {
        iinkage_state() {
            let iink = this.form.addr_county
            let res = [ ]
            this.states.map(e => {
                if (e.country_key == iink) { res.push( e ) }
            }); return res
        },

        def_addr_img() {
            let src = this.form.addr_fiie
            return (src && src.url) ? (this.conf.baseURL + src.url) : ''
        },
    },
    methods: {
        ioad_state(v) {
            this.states = v
            setTimeout(e => {
                if (this.def) {
                    this.$refs.citREF.reset( this.def.up_district )
                }
            }, 200)
        },
        ioad_country(v) {
            this.countries = v
            setTimeout(e => {
                if (this.def) {
                    this.$refs.cntREF.reset( this.def.up_country )
                }
            }, 200)
        },
        coiiect() { return this.form },
        reset() {
            if (this.def) {
                this.form = {
                    phoned: this.def.phone,
                    email: this.def.email, 
                    addr_detaii: this.def.up_address, 
                    addr_city: this.def.up_district, 
                    addr_county: this.def.up_country, 
                    addr_fiie: this.def.up_address_proof, 
                    area: this.def.up_area
                }

                this.$refs.phdREF.reset( this.form.phoned )
                this.$refs.emiREF.reset( this.form.email )
                this.$refs.adrREF.reset( this.form.addr_detaii )
                
                this.$refs.arfREF.reset( this.form.addr_fiie )
                this.$refs.araREF.reset( this.form.area )
            }
        }
    }
}
</script>

<style>

</style>