import conf from './conf'

import serial_rolling from './serial/serial_rolling'

const ID_FIELD = conf.NAMESPACE.ID_FIELD
const CHILDREN_FIELD = conf.NAMESPACE.CHILDREN_FIELD
const ID_FIELD_SPONSOR = conf.NAMESPACE.ID_FIELD_SPONSOR
const ID_FIELD_ENROLLER = conf.NAMESPACE.ID_FIELD_ENROLLER

const serial_result = function(tree, layer = -1) {
    let result = [ ]
    layer += 1

    for (let k in tree) {
        let item = tree[k]
        if (CHILDREN_FIELD in item) {
            item[CHILDREN_FIELD] = serial_result(item[CHILDREN_FIELD], layer)

            item.has_child = (item[CHILDREN_FIELD].length > 0) ? true : false
        } else {
            item.has_child = false
        }
        item.index = layer

        serial_rolling(item)

        result.push(item)
    }
    return result
}

const is_father = function(v, unid_field) {
    return (v[ID_FIELD] == v[unid_field + '_father']) ? true : false
}

const _build = function(list, first_id, unid_field) {
    let temp = {}
    let tree = {}
    
    for (let i in list) {
        let item = list[i]
        
        if (item[ID_FIELD] == first_id) {
            item[unid_field + '_father'] = item[ID_FIELD]
            item[unid_field] = item[unid_field]
        }
        temp[ item[ID_FIELD] ] = item
    }
    
    for (let i in temp) {
        if (
            !is_father(temp[i], unid_field)
        ) {
            let father = temp[ temp[i][unid_field] ]
            
            if (!father[CHILDREN_FIELD]) { father[CHILDREN_FIELD] = new Object() }
            
            father[CHILDREN_FIELD][ temp[i][ID_FIELD] ] = temp[i]
        } {
            tree[ temp[i][ID_FIELD] ] = temp[i]
        }
    }

    for (let i in tree) {
        if ( !is_father(tree[i], unid_field) ) { delete tree[i] }
    }


    return serial_result(tree)
}

// users = 用户数组
// _init = 0 代 member_code
// model = 模型类别
const rolling = function(users, _init, model = 'SPONSER') {
    return new Promise((rej, rev) => {

        let res = [ ]
        if (model == 'SPONSER') {

            res = _build(
                users,
                _init,
                ID_FIELD_SPONSOR
            )
        } else {
            res = _build(
                users,
                _init,
                ID_FIELD_ENROLLER
            )
        }

        rej(
            res // JSON.parse(JSON.stringify(res))
        )
    })
}

export default rolling