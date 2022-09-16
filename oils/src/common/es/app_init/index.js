import conf from './conf'
import rolling from './rolling'

import def from './tool/def'
import has from './tool/has'
import collection from './collection'

import vip_num from './vip/vip_num'
import vip_view from './vip/vip_view'

import all_childrens from './backend/all_childrens'
import user_with_orders from './backend/user_with_orders'

const _has_children = function(user) {
    if ('children' in user) { 
        return (user.children.length > 0 )? true : false 
    } 
    return false 
}

const _build = function(items, hooking) {
    for (let e of items) {
        hooking(e)
        if (_has_children(e)) {
            _build(e.children, hooking)
        }
    }
}

export default {
    def,
    has,
    conf,
    _build,
    rolling,
    collection,

    vip_num,
    vip_view,
    all_childrens,
    user_with_orders
}