<template>

    <div>
        <v-btn
            class="mx-2 right_20 top_80 mr-0 z-L"
            fab
            outlined

            :color="color"
            :class="extra_calss"

            :fixed="is_fixed"

            :left="l_or_r"
            :right="!l_or_r"
            :x-small="is_small"

            :elevation="eva"

            @click="toTop"
        >
            <v-icon>
                {{ icon }}
            </v-icon>
        </v-btn>
    </div>

</template>

<script>
    export default {
        props: {
            eva: {
                type: Number,
                default: 1
            },
            icon: {
                type: String,
                default: 'mdi-arrow-up'
            },
            color: {
                type: String,
                default: ''
            },
            extra_calss: {
                type: String,
                default: ''
            },
            is_fixed: {
                type: Boolean,
                default: true
            },
            l_or_r: {
                type: Boolean,
                default: false
            },
            is_small: {
                type: Boolean,
                default: false
            }
        },
        name: '',
        data() {
            return {
                go: false
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll, true);
        },
        methods: {
            handleScroll() {
                let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
                scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
            },
            toTop() {
            
                let top = document.documentElement.scrollTop || document.body.scrollTop;
                // 实现滚动效果 
                const timeTop = setInterval(() => {
                    document.body.scrollTop = document.documentElement.scrollTop = top -= 10;
                    if (top <= 0) {
                        clearInterval(timeTop);
                    }
                }, 10);
            }
        },
    }
</script>

<style lang="sass" scoped>
.z-L
    z-index: 9999
</style>