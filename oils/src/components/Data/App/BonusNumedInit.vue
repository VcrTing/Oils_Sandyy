<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                ranks: [
                    6, 7, 8, 9, 10
                ]
            }
        },
        methods: {
            async fetchBonus(rank) {
                let i = {
                    num: 0,
                    rank
                }
                const res = await this.conn.get(
                    this.api.bonus,
                    this.$store.state.token,
                    {
                        'time_period': this.$store.state.chronus.id,
                        'Rank': rank
                    }
                )

                if (res) {
                    
                    i.num = res.length
                    return i
                }
            },
            numdLoading() {
                return new Promise((rej, rev) => {

                    let res = [ ]
                    this.ranks.map(async e => {
                        const i = await this.fetchBonus(e)
                        if (i) { res.push(i) }
                    })

                    rej( res )
                })
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>