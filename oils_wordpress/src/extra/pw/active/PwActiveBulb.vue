<template>
    <div class="" v-if="active">
        <v-icon class="pw-sec_son">mdi-lightbulb</v-icon>
        <span class="pl-1">Active</span>
    </div>
    <div class="" v-else>
        <v-icon>mdi-lightbulb-outline</v-icon>
        <span class="pl-1">Non-Active</span>
    </div>
</template>

<script>
export default {
    props: [ 'active' ]
}
</script>

<style>

</style>