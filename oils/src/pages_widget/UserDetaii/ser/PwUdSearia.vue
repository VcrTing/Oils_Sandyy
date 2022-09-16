<template>
    <div>
        <net-pw-user ref='npuREF'/>
    </div>
</template>

<script>
import NetPwUser from '../../../extra/net/NetPwUser/NetPwUser.vue';
export default {
    components: { NetPwUser },
    props: [ 'member_code' ],
    data() {
        return {
            detaii: null
        }
    },
    async mounted() {
        await this.init()
    },
    methods: {
        _name (v) {
            if (v.member_code == '203001') {
                return v.username
            }
            let s_n = v.acf
            if (s_n) { 
                return (s_n.up_first_name ? s_n.up_first_name : '') + ' ' + 
                    (s_n.up_last_name ? s_n.up_last_name : '')
            }
            return ''
        },

        async insert_user(v) {
            const s_id = v.sponsor_id
            const e_id = v.enroller_id
            let s_user = await this._fetching( s_id )
            let e_user = await this._fetching( e_id )
            if(e_user) {
                v.sponsor = s_user
                v.enroller = e_user }

            return v
        },
        // 
        async init() {
            if (this.member_code) {
                this.$emit('start')
                let res = await this._fetching( this.member_code )
                if (res) { 
                    res = await this.insert_user(res) 

                    // 加入数据
                    if (res) {
                        let src = res
                        src.sponsor_name = this._name( src.sponsor )
                        src.enroller_name = this._name( src.enroller )
                        this.detaii = Object.assign(src, src.acf)
                    }

                    // 
                    this.$emit('data', this.detaii)
                }
            }
        },
        //
        async _fetching(member_code) {
            return await this.$refs.npuREF.user_detaii({ member_code })
        },

    }
}
</script>

<style>

</style>