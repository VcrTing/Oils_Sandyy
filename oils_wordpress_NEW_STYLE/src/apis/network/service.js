import { net } from '../api/net.js'
import conn_util from './for_conn_util'

import conf from '../../conf'

import cleaning from '../cleaning/cleaning'

const get = function(url, token, condition = {}) {
  console.log('link =', url[0] + conn_util.builParam(condition))
  return net({
    url: url[0] + conn_util.builParam(condition),
    method: 'get',
    headers: conn_util.headers(token)
  })
}

const post = function(url, token, data) {
  // console.log('POST , url =', url, ' data =', data)
  // return [ ]
  return net({
    url: url[0],
    method: 'post',
    data,
    headers: conn_util.headers(token)
  })
}

const put = function(url, token, data) {
  return net({
    url: url[0],
    method: 'put',
    data,
    headers: conn_util.headers(token)
  })
}

const patch = function(url, token, data) {
  return net({
    url: url[0],
    method: 'patch',
    data,
    headers: conn_util.headers(token)
  })
}
// 拓展新 网络连接


export default {
  get,
  post,
  put,
  patch

}