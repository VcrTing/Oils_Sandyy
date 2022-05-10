<template>
    <div>

            <bonus-numed-init ref="boNumedREF"></bonus-numed-init>
            <team-bonus-detail-init ref="tbdREF"></team-bonus-detail-init>

            <bonus-enroller-line-me ref="belmREF"></bonus-enroller-line-me>
            <me-son-can-num ref="mscnREF"></me-son-can-num>

            <net-bonus-statement ref="bonusREF"></net-bonus-statement>

            <ex-app-init ref="appInitREF"></ex-app-init>
    </div>
</template>

<script>
import BonusNumedInit from '../../components/Data/App/BonusNumedInit.vue'
import TeamBonusDetailInit from '../../components/Data/App/TeamBonusDetailInit.vue'
import BonusEnrollerLineMe from '../../components/Data/Me/BonusEnrollerLineMe.vue'
import MeSonCanNum from '../../components/Data/Me/MeSonCanNum.vue'
import ExAppInit from '../../excenter/init/ExAppInit.vue'
import NetBonusStatement from '../../extra/net/NetBonus/NetBonusStatement.vue'
    export default {
        name: '',
        components: { TeamBonusDetailInit, BonusNumedInit, BonusEnrollerLineMe, MeSonCanNum, NetBonusStatement, ExAppInit },
        data() {
            return {
                
            }
        },
        async mounted() {
                let res = [ ]
                
                let numed = this.$refs.boNumedREF.numdLoading()
                numed = numed ? await numed : [ ]
                this.$store.commit('saveBonusNum', numed)

                this.$store.commit('saveTeamBonusDetail', await this.$refs.tbdREF.tbdLoading())

                this.$store.commit('saveBonusQualifyLine', await this.$refs.belmREF.lunch_Line())
                await this.refreshSCN()

                // 加载新的 数据
                await this.$refs.appInitREF.init()
        },
        methods: {
            async refreshSCN() {
                let son_num = this.$refs.mscnREF.numing_backend()
                let ub = this.$store.state.user_backend
                ub.son_can_num = son_num
                this.$store.commit('saveBackendUser', ub)

                // 获取 个人 bonus
                // let bonus = await this.$refs.bonusREF.fetching( ub )
                // this.$store.commit('saveBonusStatement', bonus)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>