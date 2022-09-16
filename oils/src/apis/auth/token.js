
import conf from '../../conf'

import axios from 'axios'

const url = conf.apiURL + '/auth/local'

// 400 密码错误

export default {
  async token(username, password) {
    const condition = {
      identifier: username,
      password: password,
    }

    let res = await axios.post(url, condition) //  service.post(url, condition)

    return res.data
  },
  login(condition) {
    return axios.post(url, condition) //  service.post(url, condition)
  }
}