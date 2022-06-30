<template>
    
    <v-container fluid class="h-100 chronu-panel qiong-txt-14">

        <v-row class="mt-2">
            <v-col cols="1"></v-col>
            <v-col cols="12" :sm="10">

                <div class="qiong-txt-24 qiong-txt-primary-dark pb-3">
                    結算月份
                </div>

                <chronu-title-part :months="ct" v-if="!loading" @nowmonth_Father="nowChronu" @chronu_Father="changeSuccess"></chronu-title-part>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>

        <v-row v-if="!loading">
            <v-col cols="2"></v-col>
            <v-col cols="12" :sm="8">
                
                <qiong-space  class="qiong-pt-5 mobie-hide"></qiong-space>

                <div class="pb-2">
                    
                    <div v-for="(c, i) in now_chronu" :key="i" class="my-5 chronu-item">
                        <chronu-item-part :c_item="c" @sign_Father="changeSuccess"></chronu-item-part>

                        <v-divider v-if="i == c.length - 1"></v-divider>
                    </div>

                </div>
            </v-col>
            <v-col col="2"></v-col>
        </v-row>

        <v-row v-else>
            <v-col col="12">
                <br/>
                <br/>
                <br/>
                <br/>
                <qiong-loading :bigger="1"></qiong-loading>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>

import QiongLoading from '../../../components/Qiong/Ui/QiongLoading.vue'
import QiongSpace from '../../../components/Qiong/Ui/QiongSpace.vue'
import ChronusItem from './ChronusItem.vue'
import ChronuItemPart from './Inner/ChronuItemPart.vue'
import ChronuTitlePart from './Inner/ChronuTitlePart.vue'

import moment from 'moment'
    export default {
        components: { ChronusItem, QiongLoading, ChronuTitlePart, ChronuItemPart, QiongSpace },
        name: '',
        data() {
            return {
                chronus: [ ],

                loading: true,

                ct: [ ],

                now_chronu: [ ]
            }
        },
        async mounted() {
            await this.simpleInit()
        },
        methods: {

            async simpleInit() {

                let res = window.sessionStorage.getItem('sandyy_chronus')
                if (res) {     
                    res = JSON.parse(res) 
                    res = await this.trashNew(res)    
                    res = res.map(e => this.ser_chornu(e, false) )
                    this.ser_title(res)
                    
                    this.loading = false
                } else {
                    await this.chronusLoading()
                }
            },

            async trashNew( res ) {
                let ee = [ ]
                const d = moment( new Date() )
                res.map(e => {
                    let m = moment( e.start )
                    if ( m < d) { ee.push( e ) }
                    return e
                })
                return ee.map(e => { 
                    e.end_origin = e.end; e.end = e.end_date
                    e.start_origin = e.start; e.start = e.start_date
                    return e
                })
            },
            async chronusLoading() {
                let res = await this.conn.get(
                    this.api.chronus,
                    this.$store.state.token,
                    {
                        '_sort': 'start:DESC',
                        '_limit': 999
                    }
                )
                
                if (res) {
                    res = await this.trashNew(res)   
                    
                    res = res.map(e => this.ser_chornu(e, true) )
                    this.chronus = res.sort((n, o) => this.view.sort_time(n, o))

                    window.sessionStorage.setItem('sandyy_chronus', JSON.stringify(res) )
                    this.ser_title(res)
                    this.loading = false
                }
            },

            ser_chornu(e, need_add) {
                try {
                    delete e.orders
                    delete e.bonuses
                    delete e.commissions
                    delete e.bonus_calculations
                } catch (e) { }

                this.ct.push( Number.parseInt(e.end.substring(0, 4)) )
                return e
            },
            ser_title(res) {

                this.ct = this.ct.filter((n, o) => {
                    return this.ct.indexOf(n, 0) === o
                })
                
                this.ct = this.ct.map(y => {
                    
                    let ss = { 'year': y, }
                    ss[ y + '' ] = [ ]
                    res.map(e => {
                        let year = e.end.substring(0, 4)
                        let month = e.end.substring(5, 8)

                        if (y == year) {
                            ss[year].push({
                                'month': Number.parseInt(month),
                                'chronu_id': e.id, 'chronu': e
                            })
                        }
                    })
                    return ss
                })
            },

            changeSuccess(v) {

                this.$store.commit('saveLoading', true)
                setTimeout(e => {
                    this.$store.commit('saveChronus', [ v, true ])

                    this.$store.commit('saveSponsor', null)
                    this.$store.commit('saveEnroller', null)
                    this.$store.commit('saveCollection', null)
                    this.$store.commit('saveTreeSponsor', null)
                    this.$store.commit('saveTreeEnroller', null)
                    this.$store.commit('saveBonusQualifyLine', null)

                    this.$store.commit('saveLoading', false)
                }, 300)
            },

            nowChronu(nm) {
                this.now_chronu = nm
            }
        }
    }
</script>

<style lang="sass" scoped>
.chronu-panel
    overflow: scroll !important
    height: 100vh

.chronu-item
    animation: up .5s ease-in

@keyframes up
    0%
        transform: translateY(24px)
    100% 
        transform: translateY(0px)

</style>