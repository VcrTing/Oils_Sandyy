<template>
    
</template>
<script>
export default {
    methods: {
        switching(mode, code) {
            return this[ mode ]( code )
        },

        sponsor(code) {
            const det = this.$store.state.user_s_detail
            let tree = { }
            tree[ code ] = det[ code ].sponsor_tree
            return this._switch( tree, det )
        },
        enroller(code) {
            const det = this.$store.state.user_e_detail
            let tree = { }
            tree[ code ] = det[ code ].enroller_tree
            return this._switch( tree, det )
        },

        _switch(tre, dic) {
            return this.bonu.dict_to_tree(tre, dic)
        }
    }
}
</script>