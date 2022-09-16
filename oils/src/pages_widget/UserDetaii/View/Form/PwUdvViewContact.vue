<template>
    <div>
        <h2 class="udv-header">Contact</h2>
        <nav v-if="one">
            <div class="fx-l py-5 pw-row">
                <pw-form-view class="w-53" :header_cn="'電話號碼'" :header_en="'Mobile No.:'" >
                {{ one.phone }}
                </pw-form-view>
                <pw-form-view class="w-47" :header_cn="'電郵'" :header_en="'Email Address:'" >
                    {{ one.email }}
                </pw-form-view>
            </div>
            <pw-form-view class="pt-5" :header_cn="'地址'" :header_en="'Address:'" ></pw-form-view>
            <div class="pw-row fx-l pb-5 pt-3">
                <div class="w-53" v-if='one.address.address'>
                    {{ one.address.address }}
                </div>
                <div class="w-24" v-if='one.address.city'>
                    {{ one.address.city }}
                </div>
                <div class="w-23">
                    {{ contry }}
                </div>
            </div>
            <div class="py-5">
                <pw-file-view :fiie="one.address.address_proof_file" :header="'Adress Proof (within the last 3 months)'"></pw-file-view>
            </div>
            <pw-form-view class="py-5" :header_cn="'地區'" :header_en="'Area:'" >
                {{ one.address.area }}
            </pw-form-view>
        </nav>

        <net-pw-countries @sign="ioad_country"></net-pw-countries>
    </div>
</template>

<script>
import NetPwCountries from '../../../../extra/net/NetPwUser/NetPwCountries.vue'
import PwFormView from '../../../../extra/pw/form/PwFormView.vue'
import PwFileView from '../../../../extra/pw/input/PwFileView.vue'
export default {
    components: { PwFormView, PwFileView, NetPwCountries },
    props: ['one' ],
    data() {
        return {
            countries: [ ],
            contry: ''
        }
    },
    methods: {
        ioad_country(v) {
            let res = ''
            this.countries = v
            setTimeout(e => {
                const src = this.one.address.country
                v.map(_v => {
                    if (_v.v == src) {
                        res = _v.txt
                    }
                });
                this.contry = res
            }, 200)
        }
    }
}   
</script>

<style>

</style>