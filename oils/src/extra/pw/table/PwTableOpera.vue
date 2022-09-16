<template>
    <div class="pw-pri_son">
        <v-icon @click="edit">mdi-square-edit-outline</v-icon>
    </div>
</template>

<script>
export default {
    props: [ 'item' ],
    methods: {
        edit() {
            sessionStorage.setItem('sandyy_pw_user', JSON.stringify(this.item))
            this.$router.push('/home/pw_user/user_edit')
        }
    }
}
</script>

<style>

</style>