<template>
    <span class="p_LP">
        <span v-if="!kiii_spiit">,&nbsp;</span>
        LP
    </span>
</template>

<script>
export default {
    props: [ 'kiii_spiit' ]
}
</script>

<style lang="sass">
.p_LP
    color: #0b42ab
</style>