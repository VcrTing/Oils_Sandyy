<template>
    <div>
        <div class="fx-l pw-row">
            <pw-input ref="mbrREF" @change="(v) => form.code = v" class="w-25" :typed="'number'" :header="'Member ID'"></pw-input>
        </div>
        <div class="fx-l pw-row py-4">
            <pw-input ref="eriREF" @change="(v) => form.e_id = v" class="w-25" :typed="'number'" :header="'Enroller ID'"></pw-input>
            <pw-input ref="ernREF" @change="(v) => form.e_name = v" class="w-25" :header="'Enroller Name'"></pw-input>
            <pw-input ref="spiREF" @change="(v) => form.s_id = v" class="w-25" :typed="'number'" :header="'Sponsor ID'"></pw-input>
            <pw-input ref="spnREF" @change="(v) => form.s_name = v" class="w-25" :header="'Sponsor Name'"></pw-input>
        </div>
    </div>
</template>

<script>
import PwInput from '../../../../extra/pw/input/PwInput.vue'
export default {
    components: { PwInput },
    props: [ 'def' ],
    data() {
        return {
            form: { code: '', e_id: '', e_name: '', s_id: '', s_name: '' },
            form_err: { code: '', e_id: '', e_name: '', s_id: '', s_name: '' }
        }
    },
    methods: {
        reset() {
            if (this.def) {
                this.form.code = this.def.member_code
                this.form.e_id = this.def.sponsor_id
                this.form.e_name = 'A' // this.def.member_code
                this.form.s_id = this.def.enroller_id
                this.form.s_name = 'B' // this.def.member_code
            } else {
                this.form = { code: '', e_id: '', e_name: '', s_id: '', s_name: '' }
            }
            this.$refs.mbrREF.reset(this.form.code)
            this.$refs.eriREF.reset(this.form.e_id)
            this.$refs.ernREF.reset(this.form.e_name)
            this.$refs.spiREF.reset(this.form.s_id)
            this.$refs.spnREF.reset(this.form.s_name)
        }
    }
}
</script>

<style>

</style>