export default {
  _get(k) {
    return localStorage.getItem(k)
  },
  _set(k, v) {
    return localStorage.setItem(k, v)
  },
  _getAsync(k, format = false) {
    return new Promise((resolve, reject) => {
      let res = localStorage.getItem(k)
      
      if (res != null || res != undefined || res != 'null') {
        if (format) {
          res = JSON.parse(res)
        }
        resolve(res)
      }
      reject(res)
    })
  },
  _setAsync(k, v) {
    return new Promise((rel, rej) => {

      if (typeof v != String) {
        v = JSON.stringify(v)
      }

      localStorage.setItem(k, v)

      rel(true)
    })
  }
}