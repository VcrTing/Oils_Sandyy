<template>

    <tbody class="tbody-buy">
        <tr class="td-buy" v-for="(v, i) in _items" :key="i">
            <td width="10%">{{ v.member_code }}</td>
            <td width="19%">{{ v.display_name }}</td>
            <td width="16%"></td>
            <td width="9%">{{ v.phone }}</td>
            <td width="17%" style="padding-right: 6px;">{{ v.email }}</td>
            <td width="10%">{{ v.register_type }}</td>
            <td width="9%">
                <div class="txt-sub" v-if="v.isSaveToWallet == null"></div>
                <div v-else>
                    <span v-if="v.isSaveToWallet">電子錢包</span>
                    <span v-else>支票</span>
                </div>
            </td>
            <td width="10%">
                {{ active(v.member_area) }}
            </td>
        </tr>
    </tbody>

</template>
<script>
    export default {
        props: {
            _items: Array
        },
        methods: {
            active(ac) {
                return ac ? 'Active' : 'Non-active'
            }
        }
    }
</script>

<style lang="sass" scoped>
.tbody-buy
.td-buy


.td-buy td
    padding: 4px
</style>