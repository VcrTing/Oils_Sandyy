<template>
    <team-bonus-detail ref="numREF"></team-bonus-detail>
</template>

<script>
import TeamBonusDetail from '../Using/TeamBonusDetail.vue'
    export default {
        components: { TeamBonusDetail },
        data() {
            return {
                cs: [ ]
            }
        },
        mounted() {
            this.cs = this.$store.state.user_enroller
        },
        methods: {

            _buildData(data, rank, member_code) {

                const vip = this.bonus.vip_view.vip_now(
                    this.bonus.vip_view.rank_to_code(rank)
                )

                let user = { }
                for (let i= 0; i< this.cs.length; i++ ) {
                    if (member_code == this.cs[i].member_code) {
                        user = this.cs[i]
                        break
                    }
                }

                let res = {
                    member_code,
                    display_name: user.display_name,
                    vip: vip,
                    pt: data.leader_points
                }
                
                return res
            },

            async fetchingList(_me) {
                
                const rank_dirct = _me.bonu_period.highest_ranking_member_in_direct_relation

                let directs = [ ]

                for (let key in rank_dirct) {
                    const d = rank_dirct[key]
                    if (d.rank > this.conf.RANK_LEAD) {
                        directs.push(d)
                    }
                }

                let res = await this.$refs.numREF.tbdLoading()
                res = res.filter(e => e.level > this.conf.RANK_LEAD)

                let thing = [ ]
                if (directs) {
                    res.map(e => {
                        directs.map(n => {
                            if (n.rank == e.level) {
                                const t = this._buildData( e, e.level, n.member_code )
                                thing.push(t)
                            }
                        })
                    })
                }

                return thing
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>