<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            _replace_status(rec) {
                rec = rec.replace('processing', '處理中')
                rec = rec.replace('completed', '完成')
                return rec
            },
            _replace_stripe(rec) {
                let res = ''
                rec = rec.split('->')
                rec.map(e => {
                    if (e == '') { res += '新增為 ' }
                    else { res += e }
                })
                return res
            },
            _replace_produc_name(rec) {
                let cc = rec.split(':')
                if (cc) { 
                    cc.map(c => { 
                        if (c == 'product') { return '商品' } }
                    )
                    
                }
                return cc.join(' ') 
            },
            _replace_produc(rec) {
                let res = [ ]
                for (let kk in rec) {
                    if (rec[kk].indexOf("NaN") != -1) {
                        return false
                    }
                    /*
                    if (kk == 'unit_retail_price') {
                        res.push(
                            '單價變動: ' + rec[kk]
                        )
                    }
                    */

                }
                return res.join('，')
            },

            _serial(rec) {
                let result = [ ]
                rec = rec.map(e => {

                    for (let k in e) {
                            let v = e[k]

                            if (k == 'status') { 
                                v = { k, res: e[k], change_by: e['change_by'], date: e['date'] }
                                v.option_name = '商品交付狀態' 
                                v.option_desc = this._replace_status( e[k] )
                                result.push(v)
                            }
                            else if (k == 'stripe_transaction_id') { 
                                v = { k, res: e[k], change_by: e['change_by'], date: e['date'] }
                                v.option_name = '信用卡(Stripe) Code' 
                                v.option_desc = this._replace_stripe( e[k] )
                                result.push(v)
                            }
                            else if (k.startsWith('product')) {
                                v = { k, res: e[k], change_by: e['change_by'], date: e['date'] }
                                v.option_name = this._replace_produc_name( k )
                                v.option_desc = this._replace_produc( e[k] )
                                result.push(v)
                            }

                            e[k] = v
                    }
                    return e
                })
                result = result.filter(e => e.option_desc)
                return result
            },

            _build(res) {
                res.map(e => {
                    let out = [ ]
                    for (let k in e) {
                        e[k].date = k
                        out.push(e[k])
                    }
                    e.res = out
                    return e
                })
                res = res.map(e => this._serial( e.res ))
                let ress = [ ]

                res.map(e => {
                    e.map(k => {
                        ress.push(k)
                    })
                })
                return ress
            },

            async lunch(uuid) {
                try {
                    let res = {
                        uuid
                    }

                    res = await this.conn.get(
                        this.api.browse_log_order,
                        this.$store.state.token, res
                    )

                    if (res && res.message) {
                        res = res.message[0]
                        res = res.change_log ? res.change_log : [ ]
                        return this._build(res)
                    }
                } catch(err) {
                    return [ ]
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>