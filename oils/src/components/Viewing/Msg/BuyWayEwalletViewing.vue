<template>
    <span class="p_ewallet">
        <span v-if="!kiii_spiit">,&nbsp;</span>
        eWallet
    </span>
</template>

<script>
export default {
    props: [ 'kiii_spiit' ]
}
</script>

<style lang="sass">
.p_ewallet
    color: #0b42ab
</style>