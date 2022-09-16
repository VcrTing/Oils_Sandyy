<template>
    <div class="qiong-td pdf-px pdf-py">
        <div class="qiong-wide-50 pr-0 fw-b">
            <slot></slot>
        </div>
        <div class="qiong-wide-28"></div>
        <div class="qiong-wide-9 text-right pr-0" v-if="need_res">
            Total
        </div>
        <div class="qiong-wide-13 text-right pdf-px" v-if="need_res">
            {{ res }}
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            need_res: {
                type: Boolean,
                default: false 
            },
            res: {
                type: String,

            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>