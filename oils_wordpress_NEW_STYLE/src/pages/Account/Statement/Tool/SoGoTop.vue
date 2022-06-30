<template>
    <div class="so-go-top">
        <div class="qiong-td">
            <div class="qiong-wide-8"></div>
            <div class="qiong-wide-84 mobie-wide-100 pr-0">
                <div class="so-go-top-btn" @click="toTop">
                    <v-icon>
                        mdi-arrow-up
                    </v-icon>
                    {{ $t('CONTENT.got_top') }}
                </div>
            </div>
            <div class="qiong-wide-8"></div>
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
                    document.body.scrollTop = document.documentElement.scrollTop = top -= 30;
                    if (top <= 0) {
                        clearInterval(timeTop);
                    }
                }, 10);
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>