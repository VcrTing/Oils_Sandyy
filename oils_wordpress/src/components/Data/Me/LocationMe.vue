<template>
    <div></div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            locationMe(member_code, mode = 'SPONSER') {
                let source = [ ]

                if (mode == 'SPONSER') {
                    source = this.$store.state.user_sponsor
                } else if (mode == 'ENROLLER') {
                    source = this.$store.state.user_enroller
                } else {
                    source = this.$store.state.user_collection
                }


                for (let u of source) {
                    if (u.member_code == member_code) {
                        return u
                    }
                }

                return this.$store.state.user_backend
            },
            locationMe_Async(member_code, mode = 'SPONSER') {
                return new Promise((rej, rev) => {
                    let res
                    let source = [ ]

                    if (mode == 'SPONSER') {
                        source = this.$store.state.user_sponsor
                    } else if (mode == 'ENROLLER') {
                        source = this.$store.state.user_enroller
                    } else {
                        source = this.$store.state.user_collection
                    }
                    
                    for (let u of source) {
                        if (u.member_code == member_code) {
                            res = u
                            break
                        }
                    }

                    rej(
                        res
                    )
                })
            }
        },
    }
</script>

<style lang="sass" scoped>
    
</style>