<template>
    
</template>
<script>
export default {
    methods: {
        async LpLevelAuto(cond) {
            let res = await this.conn.ex_get(this, 'browse_rank_change_auto', cond)

            if (res) {
                res = res.data ? res.data : null
                return this.ser_result( res )
            }
        },
        async LpLevelManual(cond) {
            let res = await this.conn.ex_get(this, 'browse_rank_change_manual', cond)

            if (res) {
                res = res.data ? res.data : null
                return this.ser_result( res )
            }
        },

        ser_result(res) {
            return res.map(e => {
                e.content = this._ser_txt(e.change_display)
                return this._ser_type(e)
            })
        },
        _ser_type(e) { if (e.log_type == 'rank') { e.typed = 1 } else { e.typed = 2 } return e },
        _ser_txt(txt) { 
            return txt.replace('start_rank', 'LP 起始等級變更').
                    replace('rank', 'LP 等級變更') + 
                    '(級)' }
    }
}
</script>