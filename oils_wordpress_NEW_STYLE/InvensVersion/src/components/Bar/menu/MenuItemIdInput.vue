<template>

    <v-list-item
        :class="'menu-none-fx'"
    >
        <v-list-item-avatar>
            <v-icon>mdi-account-cog-outline</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
            <div tag="div">
                <input class="input-sub_member_code" type="text" 
                    v-model="member_code" 
                    placeholder="會員編號"
                    @keyup.enter="changeMember"
                >

                <div class="btn-sub_submit_icon" 
                    v-if="member_code"
                    >
                    
                    <v-icon v-if="vilida && working" class="txt-success ani-rotate"
                        @click="changeMember">
                        mdi-loading
                    </v-icon>

                    <v-icon v-else-if="vilida && !working" class="txt-success"
                        @click="changeMember">
                        mdi-arrow-right
                    </v-icon>

                    <v-icon v-else class="txt-error" @click="clear" > mdi-close </v-icon>

                </div>
                <div class="btn-sub_submit_icon" 
                    v-else
                    >
                    
                    <v-icon
                        @click="changeMember">
                        mdi-arrow-right
                    </v-icon>
                </div>
            </div>
        </v-list-item-content>
    </v-list-item>

</template>

<script>
    export default {
        name: '',
        data() {
            return {
                def_code: '',
                member_code: '',
                last_code: '',

                vilida: true,

                working: false
            }
        },
        mounted() {
            const code = this.$store.state.user_backend.member_code

            this.def_code = code
            this.last_code = code
            this.member_code = code 
        },
        methods: {
            editMember() {
                
            },

            _success(user, code) {
                // user_collection
                sessionStorage.setItem('sandyy_active_code', code)
                sessionStorage.setItem('sandyy_vx_tk', (this.$store.state.token + '8'))
                
                this.$store.commit('saveBackendUser', user)
                let plant = this.$store.state.platform_data
                plant.member_code = code
                this.$store.commit('saveFromPlatform', plant)

                //
                this.$store.commit('saveSponsor', null)
                this.$store.commit('saveEnroller', null)
                this.$store.commit('saveCollection', null)
                this.$store.commit('saveTreeSponsor', null)
                this.$store.commit('saveTreeEnroller', null)

                setTimeout(e => {
                    this.$store.commit('saveLoading', true)
                    setTimeout(e => { this.$store.commit('saveLoading', false); this.working = false; }, 1400)
                }, 400)
            },

            async _submit(code) {
                this.working = true
                let res = await this.conn.get(
                    this.api.users,
                    this.$store.state.token,
                    { 'member_code': code }
                )
                
                if (res && res.length > 0) {
                    this.last_code = code
                    this._success( res[0], code )
                } else {
                    this.working = false
                    this.vilida = false
                }
            },

            _validate(rec) {
                return !isNaN(rec)
            },

            changeMember() {
                let res = this.member_code.trim()
                let vok = res ? this._validate(res) : false
                if (vok && (res != this.last_code)) { this._submit(res)  }
                this.vilida = vok ? true: false
            },

            clear() {
                this.member_code = ''
                this.vilida = true
            }
        },
    }
</script>

<style lang="sass" scoped>
</style>