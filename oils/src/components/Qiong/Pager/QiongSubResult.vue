<template>
    <div class="pb-3  fs-r">

        <div v-if="need_line">
            <qiong-page-ling v-if="bigger == 1"></qiong-page-ling>
            <qiong-page-ling v-else :ex_class="'qiong-lineXL'"></qiong-page-ling>
        </div>
        <qiong-space :space="'0.2vw'"></qiong-space>
        <qiong-space :space="'0.5vh'"></qiong-space>

        
        <div class="">
            <slot></slot>
        </div>

        <div v-if="bigger == 1">
            <qsr-wrapper v-for="(v, i) in res" :key="i" :_bigger="bigger">
                <span slot="txt">{{ v.txt }} </span>
                <span slot="content" v-html="v.content"></span>
            </qsr-wrapper>
        </div>

        <div v-else class="">
            <qsr-wrapper v-for="(v, i) in res" :key="i" :_bigger="bigger">
                <span slot="txt">{{ v.txt }}</span>
                <span slot="content" v-html="v.content"></span>
            </qsr-wrapper>
        </div>

        <qiong-space :space="'0.2vw'"></qiong-space>
        <qiong-space :space="'0.7vh'"></qiong-space>
    </div>
</template>

<script>
import QiongPageLing from '../QiongPageLing.vue'
import QiongSpace from '../Ui/QiongSpace.vue'
import QsrWrapper from './Inner/QsrWrapper.vue'
    export default {
        props: {
            res: {
                type: Array,
            },
            bigger: {
                type: Number,
                default: 1
            },
            need_line: {
                type: Boolean,
                default: true
            }
        },
        name: '',
        components: {

            QiongPageLing,
                QiongSpace,
                QsrWrapper          
        },
        data() {
            return {
                test: [
                    {
                        txt: '獎金',
                        content: 'HK&nbsp;135.0'
                    },
                    {
                        txt: '獎金',
                        content: 'HK&nbsp;135.0'
                    },
                ]
            }
        },
        mounted() {
            
        },
    }
</script>

<style lang="sass" scoped>
    
</style>