

const headers = function(token, is_fiie = false) {
    let res = {}

    if (token) {
        res['Authorization'] = 'Bearer ' + token
        if (is_fiie) {
            res['Content-Type'] = 'multipart/form-data'
        }
    }
    return res
}

const builParam = function(condition) {
    let res = '?'

    if (JSON.stringify(condition) == '{}') {
        
    } else {

        for (const k in condition) {
        const item = k + '=' + condition[k] + '&'
        res += item
        }

    }

    return res
}

export default {
    headers,
    builParam
}