<template>
    <div class="d-ib">
        {{ txt }}
    </div>
</template>

<script>
export default {
    props: [ 'code' ],
    data() {
        return {
            src: {
                'personal': {
                    v: 0,
                    txt: '會員 - 個人賬戶註冊',
                    txt_so: '個人',
                    txt_en: 'Personal Registration',
                    code: 'personal'
                },
                'corp': {
                    v: 1,
                    txt: '會員 - 公司賬戶註冊',
                    txt_so: '公司賬戶',
                    txt_en: 'Corp Registration',
                    code: 'corp'
                },
                'p_customer': {
                    v: 2,
                    txt: '自用顧客',
                    txt_so: '自用顧客',
                    txt_en: 'Preferred Customer',
                    code: 'p_customer'
                },
                'r_customer': {
                    v: 3,
                    txt: '零售顧客',
                    txt_so: '零售顧客',
                    txt_en: 'Retail Customer',
                    code: 'r_customer'
                }
            }
        }
    },
    computed: {
        txt() {
            let ss = this.code
            if (ss) {
                ss = this.src [ ss ]
                return ss.txt_so
            }; return ''
        }
    }
}
</script>

<style>

</style>