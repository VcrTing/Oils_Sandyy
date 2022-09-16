<template>
    
</template>

<script>
    export default {
        name: '',
        props: [
            ''
        ],
        data() {
            return {
                hide: 'cancelled_on-hold_refunded_failed_processing'
            }
        },
        methods: {
            __status(res) {
                return res.filter(e => this.hide.indexOf( e.status ) < 0 )
            },

            _deal(res) {

                res = res && res.data ? res.data : [ ]
                // 购买状态 过滤
                res = this.__status(res)
                // 过滤掉不属于自己下线的订单

                // this.testing()
                return res
            },

            async _record(data) {
                data[ '_limit' ] = 999
                if (!data[ '_sort' ]) { data[ '_sort' ] = 'ordered_date:DESC' }
                if (!data[ 'time_period' ]) { data[ 'time_period' ] = this.$store.state.chronus.id }
                if (!data[ 'member_code' ]) { data[ 'member_code' ] = this.$store.state.user_backend.member_code }
                return await this.conn.get( this.api.browse_order, this.$store.state.token, data )
            },
            async record(line_type = 'all') {
                let res = await this._record( { line_type } )
                return this._deal(res)
            },

            testing() {
                setTimeout(e => {

                    let index = 0
                    let users = this.$store.state.user_collection.map(e => e.member_code)
                    res.map(e => {
                        for (let i= 0; i < users.length; i++ ) {
                            if(users[ i ] == e.customer_uuid.member_code) {
                                index += 1
                            }
                        }
                    })
                    console.log('RECORD =', res, ' 我下线的订单数量 =', index)

                    this.sponsor_enroller(res)
                }, 2400)
            },

            async sponsor_enroller(enr) {
                let spo = await this._record({ line_type: 'sponsored' })

                spo = spo && spo.data ? spo.data : [ ]
                // 购买状态 过滤
                spo = this.__status(spo)

                console.log('SPNSOR =', spo, 'ENROLLER =', enr)

                // spo = spo.map(e => e.customer_uuid.member_code)
                enr = enr.map(e => e.customer_uuid.member_code)

                let index = 0
                spo.map(e => { if (!enr.indexOf(e.customer_uuid.member_code)) { index += 1; console.log('不同的 sponsor 订单 =', e) } })

                console.log('enroller 与 sponsor 不同，index =', index)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>