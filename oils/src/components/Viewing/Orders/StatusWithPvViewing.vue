<template>
    <span v-html="result">
    </span>
</template>

<script>
    export default {
        name: '',
        props: {
            status: {
                type: String
            },
            pv: {
                type: String
            },
            num: {
                type: Number
            }
        },
        data() {
            return {
                
            }
        },
        computed: {
            result() {
                return `<span class="txt-money">
                    +&nbsp;${ this.pv }PV 
                </span>`
                /*

                const pay_status = this.view.backend.view_pay_status(this.status)

                if (pay_status.status_code > 0) {
                    if (pay_status.status_code == 3) {
                        return `<span class="txt-cancell">${pay_status.named}&nbsp;</span><span class="txt-money">
                            +&nbsp;${  this.pv }PV 
                        </span>`
                    }

                    return `<span class="txt-money">
                        +&nbsp;${  this.pv }PV 
                    </span>`
                } else if (pay_status.status_code == 0) {
                    return `
                        <button class="btn btn-coupon">${ this.status }</button>
                    `
                }

                return ''
                */
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>