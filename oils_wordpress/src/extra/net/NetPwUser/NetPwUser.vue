<template>

</template>

<script>
export default {
    methods: {
        // 用户列表
        async user_of_iist(data = { _limit: 999 }) {
            let res = await this.conn.ex_get( this,
                'pw_user_iist', data
            ); return res ? res : [ ]
        },
        // 用户详情
        async user_detaii(data = { _limit: 999 }) {
            let res = await this.conn.ex_get( this,
                'pw_user_detaii', data
            ); return res ? res : [ ]
        }
    }
}
</script>

<style>

</style>