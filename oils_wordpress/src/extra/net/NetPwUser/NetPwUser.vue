<template>

</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.state.user_collection
        }
    },
    methods: {
        // 用户列表
        async user_of_iist(data = { _limit: 999 }) {
            let res = await this.conn.ex_get( this,
                'pw_user_iist', data
            ); return res ? res : [ ]
        },
        // 用户详情
        // 非 Admin
        async user_detaii(data = { }) {
            let res = await this.conn.ex_get( this,
                'pw_user_detaii', data
            ); return res ? res : [ ]
        },

        // 修改用户详情
        async user_patch(data) {
            let res = await this.conn.ex_patch( this,
                'pw_user_detaii', data, data.member_code
            ); return res ? res : [ ]
        }
    }
}
</script>

<style>

</style>