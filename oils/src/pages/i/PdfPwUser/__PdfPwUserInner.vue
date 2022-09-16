<template>
    <div id="pdf_pwu" class="root">
    
        <pdf-simple-header :title="null"></pdf-simple-header>
        <pdf-content-layout>
            <span slot="header">List of User</span>
            <div slot="body">
                <table class="w-full" style="margin-top: 2px;">
                    <tr class="head">
                        <td width="9%">Member ID</td>
                        <td width="19%">Member Name</td>
                        <td width="17%">Address</td>
                        <td width="10%">Phone</td>
                        <td width="17%">Email</td>
                        <td width="10%">Registration Type</td>
                        <td width="9%">Payment Terms</td>
                        <td width="9%">Membership authority</td>
                    </tr>
                    <tr v-for="(v, i) in users" :key="i">
                        <td width="9%">{{ v.member_code }}</td>
                        <td width="19%">{{ v.display_name }}</td>
                        <td width="17%">ADDRESS</td>
                        <td width="10%">{{ v.phone }}</td>
                        <td width="17%" style="padding-right: 6px;">{{ v.email }}</td>
                        <td width="10%">{{ v.register_type }}</td>
                        <td width="9%">电子钱包</td>
                        <td width="9%">
                            {{ active(v.member_area) }}
                        </td>
                    </tr>
                </table>
            </div>
        </pdf-content-layout>
    </div>
</template>

<script>
import PdfContentLayout from '../PdfSimple/common/PdfContentLayout.vue'
import PdfSimpleHeader from '../PdfSimple/common/PdfSimpleHeader.vue'
export default {
    components: { PdfSimpleHeader, PdfContentLayout },

    computed: {
        users() { return this.$store.state.user_collection }
    },
    methods: {
        active(ac) {
            return ac ? 'Active' : 'Non-active'
        }
    }
}
</script>

<style>

</style>