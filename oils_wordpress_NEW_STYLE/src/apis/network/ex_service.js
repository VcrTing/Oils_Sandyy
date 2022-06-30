
import conf from '../../conf'

import { net } from '../api/net.js'
import conn_util from './for_conn_util'

// 拓展新 网络连接
const _build = function(ep, key = '') {
    return conf.apiURL + '/' + conf.ENDPOINT[ ep ] + '/'  + key
} 
const ex_get = function(vue, uri, condition = {}, key = '') {
    console.log('Ex Url =', _build(uri, key) + conn_util.builParam(condition))
    return net({
        url: _build(uri, key) + conn_util.builParam(condition),
        method: 'GET',
        headers: conn_util.headers(vue.$store.state.token)
    })
}
// POST
const ex_post = function(vue, uri, data) {
    return net({
        url: _build(uri),
        method: 'POST', data,
        headers: conn_util.headers(vue.$store.state.token)
    })
}

// PATCH
const ex_patch = function(vue, uri, data, key) {
    return net({
        url: _build(uri, key),
        method: 'PATCH', data,
        headers: conn_util.headers(vue.$store.state.token)
    })
}

export default {
    ex_get,
    ex_post,
    ex_patch
}