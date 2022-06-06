<template>
    <div>
        <qiong-panel-element :need_space="false" class="panel-second">
            <qiong-space :space="'2vh'"></qiong-space>
            <div class="px-7 qiong-td qiong-txt-16 pt-3">

                <qiong-space :space="'0.7vw'"></qiong-space>

                <div class="qiong-wide-15 t-c">
                    <nav class="txt-sec_son">
                        <p class="op-80"> 現在等級 </p>
                        <h2 class="d-ib qiong-txt-42"> {{ rk }} </h2>
                    </nav>
                    <p class="qiong-txt-10 txt-sus">
                        {{ view.backend.view_lp_ratio( rk ) * 100 }}% 積分回饋比例
                    </p>
                </div>
                <div class="qiong-wide-70">
                    <level-course-shower class="" :_now="rk"></level-course-shower>
                </div>

                <div class="qiong-wide-15">

                </div>
            </div>
            <qiong-space :space="'2vh'"></qiong-space>
        </qiong-panel-element>

    </div>
</template>

<script>
import QiongSpace from '@/components/Qiong/Ui/QiongSpace.vue'
import QiongPanelElement from '../../../../components/Qiong/Ele/QiongPanelElement.vue'
import LevelCourseShower from './Inner/LevelCourseShower.vue'
    export default {
        name: '',
        props: [
            '_item'
        ],
        components: {      
            QiongPanelElement,
            QiongSpace,
            LevelCourseShower
        },
        computed: {
            rk() { 
                const _k = this._item.rank
                return _k ? _k : 0 
            }
        },
        
        data() {
            return {
                redult: [
                    { in_date: '2021-12-23 23:12', num: 23 },
                    { in_date: '2021-11-23 23:12', num: 999 },
                    { in_date: '2021-10-23 23:12', num: 13 },
                    { in_date: '2021-10-13 23:12', num: 13 }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>