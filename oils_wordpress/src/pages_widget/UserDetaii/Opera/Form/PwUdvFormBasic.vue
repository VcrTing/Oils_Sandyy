<template>
    <div>
        <div class="fx-l pw-row">
            <pw-input ref="mbrREF" @change="(v) => code = v" class="w-25" 
                :err="form_err.code" :can_edit="false"
                :typed="'number'" :header="'Member ID *'" ></pw-input>

            <pw-input ref="dpnREF" @change="(v) => name_dp = v" class="w-50" 
                :err="form_err.name_dp"
                :header="'Display Name'" ></pw-input>
        </div>
        <div class="fx-l pw-row py-4">
            <pw-input ref="eriREF" @change="recive_e_id" class="w-25" 
                :err="form_err.e_id"
                :header="'Enroller ID'"></pw-input>
            <pw-input :can_edit="false" ref="ernREF" class="w-25" :header="'Enroller Name'"></pw-input>
            
            <pw-input ref="spiREF" @change="recive_s_id" class="w-25"
                :err="form_err.s_id"
                :header="'Sponsor ID'"></pw-input>
            <pw-input :can_edit="false" ref="spnREF" class="w-25" :header="'Sponsor Name'"></pw-input>
        </div>

        <net-pw-user ref="netREF"></net-pw-user>
    </div>
</template>

<script>
import NetPwUser from '../../../../extra/net/NetPwUser/NetPwUser.vue'
import PwInput from '../../../../extra/pw/input/PwInput.vue'
export default {
    components: { PwInput, NetPwUser },
    props: [ 'def' ],
    data() {
        return {
            e_id: '', s_id: '', code: '', s_name: '', e_name: '', name_dp: '',
            form_err: { code: false, e_id: false, e_name: false, s_id: false, s_name: false, name_dp: false }
        }
    },
    mounted() {
        this.form_err = { code: false, e_id: false, e_name: false, s_id: false, s_name: false, name_dp: false }
    },
    methods: {
        vid_id(v) {
            v = Number.parseInt(v + '')
            v = (isNaN(v)) ? 0 : v
            return this.conf.LEN_USER_CODE(v) ? v : 0
        },

        async ioc_name(_id) {
            let res = ''
            const user = await this.$refs.netREF.user_detaii( { member_code: _id } )
                // console.log('定位 u =', user)
            if (user) { 
                res = user.display_name; 
                res = res ? res : (user.acf.up_first_name + ' ' + user.acf.up_last_name)
            }; return res
        },

        async recive_e_id(_id) {
            _id = this.vid_id(_id)
            if (_id) {
                this.e_id = _id
                this.e_name = await this.ioc_name(_id)
                this.$refs.ernREF.reset(this.e_name) }
        },
        async recive_s_id(_id) {
            _id = this.vid_id(_id)
            if (_id) {
                this.s_id = _id
                this.s_name = await this.ioc_name(_id)
                this.$refs.spnREF.reset(this.s_name) }
        },

        //
        aiiow() {
            let res = true
            if (this.code) { this.form_err.code = false } else { res = false; this.form_err.code = true }
            return res
        },

        coiiect() {
            return {
                code: this.code, s_id: this.s_id, e_id: this.e_id, 
                s_name: this.s_name, e_name: this.e_name, name_dp: this.name_dp,
            }
        },

        reset() {
            if (this.def) {
                this.code = this.def.member_code
                this.s_id = this.def.sponsor_id 
                this.e_id = this.def.enroller_id
                this.s_name = this.def.sponsor_name
                this.e_name = this.def.enroller_name
                this.name_dp = this.def.display_name
            } else {
                this.code = ''
                this.s_id = ''
                this.e_id = ''
                this.s_name = ''
                this.e_name = ''
                this.name_dp = ''
            }
            this.$refs.mbrREF.reset(this.code)
            this.$refs.eriREF.reset(this.e_id)
            this.$refs.ernREF.reset(this.e_name)
            this.$refs.spiREF.reset(this.s_id)
            this.$refs.spnREF.reset(this.s_name)
            this.$refs.dpnREF.reset(this.name_dp)
        }
    }
}
</script>

<style>

</style>