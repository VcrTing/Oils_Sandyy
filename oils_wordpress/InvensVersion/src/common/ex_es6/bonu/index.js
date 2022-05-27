import conf from '../../../conf'
// 
import vip from './_vip'
import tree from './_tree'
import clean from './_clean'

// 
let insert_me = function(me, children) { me.index = 0; me.children = children; return me }

export default {
    ...vip,
    ...tree,
    ...clean,

    insert_me
}