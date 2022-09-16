<template>
    <div>
        <div class="td">
            <div class="w-18">
                <img src="https://sandyy.com/wp-content/uploads/invoice_logo_small.png" class="img pdf-img w-100"/>
            </div>
            <div class="w-82 t-r_son b_son">
                <div class="p-header" style="padding-top: 12px">
                    {{ header }}
                </div>
                <div class="pt">&nbsp;</div>
                <div class="td">
                    <div class="w-78">NO.</div>
                    <div class="w-22">00000000</div>
                </div>
                <div class="td pt">
                    <div class="w-78">DATE</div>
                    <div class="w-22">{{ _start }}</div>
                </div>
                <div>TO</div>
                <div>{{ _end }}</div>
            </div>
        </div>
        
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
    </div>
</template>

<script>
import moment from 'moment'
    export default {
        name: '',
        props: [
            'header',
            'start',
            'end'
        ],
        data() {
            return {
                
            }
        },
        computed: {
            img() {
                return require('../../../assets/Logo_S.png')
            },

            _start() {
                return moment(this.start).format('DD/MM/YYYY')
            },
            _end() {
                return moment(this.end).format('DD/MM/YYYY')
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>