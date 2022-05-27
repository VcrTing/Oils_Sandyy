<template>
    <div class="tag tag-pro lh-def" :class="'tag_' + named" v-if="named != 'uncategorized'">
        {{ v }}
    </div>
    <span v-else class="tag">
        {{ v }}
    </span>
</template>

<script>
    export default {
        name: '',
        props: [ 'v' ],
        data() {
            return {
                
            }
        },
        computed: {
            named() {
                let res = this.v
                if (res) {
                    res = res.toLowerCase()
                    res = res.replace(/\s*/g, '')
                }   
                res = res ? res : ''
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
.tag-pro
    margin: 0
    font-size: 0.86em
    padding: 0.5em 1em
    border-radius: 3em
    background: #f6f7f7
</style>