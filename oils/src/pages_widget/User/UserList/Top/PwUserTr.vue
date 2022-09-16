<template>
    <div class="pb-1">
        <div class="pager-header-in-table qiong-tr qiong-txt-tr px-7">
            <div class="w-10">Member ID</div>
            <div class="w-24">Member Name</div>
            <div class="w-10">Phone</div>

            <div class="w-20">Email</div>
            <div class="w-10 pr-1">Registration Type</div>
            <div class="w-9">Save to Wallet&nbsp;&nbsp;
                <v-icon v-if="s_payway" @click="sortPayway" class="qiong-txt-16">mdi-sort-ascending</v-icon>
                <v-icon v-else @click="sortPayway" class="qiong-txt-16">mdi-sort-reverse-variant</v-icon>
            </div>
            <div class="w-11 pl-2">Membership authority&nbsp;&nbsp;
                <v-icon v-if="s_area" @click="sortArea" class="qiong-txt-16">mdi-sort-ascending</v-icon>
                <v-icon v-else @click="sortArea " class="qiong-txt-16">mdi-sort-reverse-variant</v-icon>
            </div>
            <div class="w-4">&nbsp;</div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'many' ],
    data() {
        return {
            s_area: false,
            s_payway: false,
            origin: [ ]
        }
    },
    mounted() {

    },
    methods: {
        _funni(key) {
            let r = [ ]; let l = [ ]
            this.many.map(e => { (e[ key ]) ? r.push(e) : l.push(e) })
            return l.concat( r )
        },

        sortArea( ) {
            if (this.s_area) {
                this.$emit('sign', this.many.sort(this._sort))
            } else {
                this.$emit('sign', this._funni( 'member_area' ))
            } 
            this.s_payway = false
            this.s_area = !this.s_area
        },
        sortPayway( ) {
            if (this.s_payway) {
                this.$emit('sign', this.many.sort(this._sort))
            } else {
                this.$emit('sign', this._funni( 'isSaveToWallet' ))
            } 
            this.s_area = false
            this.s_payway = !this.s_payway
        },
        _sort(n, o) {
            let res = 0
            let code_n = n.member_code
            let code_o = o.member_code
            if (code_n && code_o) {
                code_n = code_n ? Number.parseInt(code_n) : ''
                code_o = code_o ? Number.parseInt(code_o) : ''
                res = (code_n - code_o)
            } 
            return res
        },
    }
}
</script>

<style>

</style>