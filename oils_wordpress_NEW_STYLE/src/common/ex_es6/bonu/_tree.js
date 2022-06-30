
// 递归建立树形图
let dict_to_tree = function(tree, origin, index = -1) {
    const res = [ ]
    let _c = null
    index += 1
    
    for(let k in tree) {
        _c = origin[ k ]
        _c.children = dict_to_tree(tree[ k ], origin, index)
        _c.index = index
        res.push(_c)
    }
    return res
}

export default {
    dict_to_tree
}