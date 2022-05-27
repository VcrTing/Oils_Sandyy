<template>
    <div>
        <button class="btn app-bar-closing mobie-show" @click="closing">
            <v-icon>
                mdi-chevron-left
            </v-icon>
            <span>
                {{ $t('CONTENT.close') }}{{ $t('CONTENT.menu') }}
            </span>
        </button>

        <!-- 版本提示 v-if="$store.state.is_admin" -->
        <div class="txt-sus pl-5 txt-8 pb-3">
            <p>版本：{{ conf.VERSION }}</p>
            <p>日期：{{ conf.VERSION_TIME }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            
            closing() {
                this.$emit('btn_Father')
            }
        },
    }
</script>

<style lang="sass" scoped>
.txt-8 
    font-size: 8px
</style>