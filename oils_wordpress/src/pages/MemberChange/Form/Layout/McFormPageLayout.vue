<template>
    <v-container fluid class="px-0">
        <div class="fx-l py-3 pl-5 txt-header">
            <div class="d-ib hand" @click="$emit('back_Father')">
                <v-icon class="qiong-txt-22">mdi-chevron-left</v-icon>
            </div>
            <div class="pl-2 fw-b hand " @click="$emit('back_Father')">
                {{ header }} 
            </div>
        </div>

        <div class="panel-pure txt-def">
            <div class="fx-s" v-if="!no_switch">
                <div>
                </div>
                <div class="qiong-txt-10 changer">
                    <button 
                        class="ml-5 hand" 
                        :class="{ 'btn-pri-thin py-2 px-6 fw-b': (now == v.path), 'txt-pri': (now != v.path) }"
                        v-for="(v, i) in tabs" :key="i" 
                        @click="$router.push(v.path)"
                    >
                        {{ v.txt }}
                    </button>
                </div>
            </div>

            <div class="qiong-txt-12 upper">
                <slot></slot>
            </div>
        </div>

        <div class="pti-go-top hand" @click="$emit('back_Father')">
            <v-icon>mdi-chevron-left</v-icon>
        </div>

        <div class="mobie-for-form"></div>
    </v-container>
</template>

<script>
    export default {
        name: '',
        props: [ 'header', 'no_switch' ],
        data() {
            return { }
        },
        computed: {
            now() {
                let res = this.$route.path

                res = res ? res.split('/') : null
                res = res ? res[ res.length - 1 ] : null

                return res
            },
            tabs() {
                return [
                    { 
                        txt: '增加 LP 積分',
                        path: 'form_lp_plus'
                    },
                    { 
                        txt: '更改會員 LP 等級',
                        path: 'form_level_change'
                    },
                    { 
                        txt: '重啟會員 LP 資格',
                        path: 'form_reload_qualify'
                    },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
.changer
    transition: all .362s ease-in
</style>