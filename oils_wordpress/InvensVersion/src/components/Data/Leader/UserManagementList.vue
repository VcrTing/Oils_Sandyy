<template>
    <div>
        <bonus-numed-init ref="bonuREF"></bonus-numed-init>
        <team-bonus-detail ref="numREF"></team-bonus-detail>
    </div>
</template>

<script>
import BonusNumedInit from '../App/BonusNumedInit.vue'
import TeamBonusDetail from '../Using/TeamBonusDetail.vue'
    export default {
        name: '',
        components: {   
            TeamBonusDetail,
                BonusNumedInit     
        },
        data() {
            return {
                numed: [ ]
            }
        },
        methods: {

            _buildData(data, rank, num) {

                const vip = this.bonus.vip_view.vip_now(
                    this.bonus.vip_view.rank_to_code(rank)
                )

                return {
                    globel_vip: vip,
                    get_lead_pv: data.leader_points,
                    child_num: num,
                    total_lead_pv: this.view.floatMul(data.leader_points, num)
                }
            },

            async fetchingList() {
                return new Promise((rej, rev) => {

                    let thing = [ ]
                    this.$refs.bonuREF.numdLoading().then(async numed => {
                        let res = await this.$refs.numREF.tbdLoading()
                        res = res.filter(e => e.level > 5)
                        
                        if (numed) {
                            numed = await numed
                            res.map(e => {
                                numed.map(n => {

                                    if (n.rank == e.level) {
                                        thing.push(
                                            
                                            this._buildData( e, e.level, n.num )
                                        )
                                    }
                                })
                            })
                        }
                    })

                    rej( thing )
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>