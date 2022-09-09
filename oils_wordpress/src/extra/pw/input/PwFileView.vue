<template>
    <div>
        <div>{{ header }}</div>
        <nav class="pw-f-view pt">
            <img :src="img"/>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            default: 'Upload ID copy'
        },
        fiie: {
            type: Object,
        }
    },
    computed: {
        img() {
            let res = this.fiie
            if (res && res.url) {
                res = this.conf.baseURL + res.url
            }; return res
        }
    }
}
</script>

<style lang="sass">
.pw-f-view
    width: 100%
    max-width: calc( 60px + 20vw )
    img
        width: 100%
        height: auto
        border-radius: 3.5px
</style>