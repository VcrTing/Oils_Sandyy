<template>
        <div class="ieedit-panel">
            <div class="iep-tr qiong-txt-tr fw-b">
                <div v-for="(v, i) in res" :key="i">
                    {{ v.txt }}
                </div>
                <div>&nbsp;</div>
            </div>

            <div class="iep-td qiong-txt-td iep-line" >
                <div v-for="(v, i) in res" :key="i">
                    {{ v.content }}
                </div>
                <div>&nbsp;</div>
            </div>

            <div class="iep-td-100">
                <slot></slot>
            </div>
        </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                res: [
                    {
                        txt: '庫存總數',
                        content: 100
                    },
                    {
                        txt: '尖沙咀倉庫庫存總數',
                        content: 50
                    },
                    {
                        txt: '火炭倉庫庫存總數',
                        content: 50
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
.kucun-panel
    display: flex 
    align-items: center
    justify-content: start

    border-radius: 8px

    & > div
        width: 30%
</style>