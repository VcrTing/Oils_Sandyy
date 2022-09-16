module.exports = {
  // 空
  val_empty(v, txt) {
    if ((v == null) || (v.trim() == '')) {
      return txt + '必須填寫。'
    }
    return true
  },
  val_char(v, txt) {
    let char = /[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},.\/;'[\]]/;
    if (char.test(v)) {
      return txt + '中不應有特殊字符。'
    }
    return true
  },
  val_char_price(v, txt) {
    let char = /[`~!@#$%^&*(“”‘’'、～·！—_+|=;？，。\\)<>?:"{},\/;'[\]]/;
    if (char.test(v)) {
      return txt + '中不應有除了.之外的特殊字符。'
    }
    return true
  },
  val_email(v, txt) {
    let char = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!char.test(v)) {
      return txt + '格式錯誤。'
    }
    return true
  },
  val_length(v, txt, min, max) {
    if (v.length < min) {
      return txt + '的字符長度應該大於等於' + min
    }
    if (v.length > max) {
      return txt + '的字符長度應該小於等於' + max
    }
    return true
  },
  val_timed(v, txt, short) {
    if (short) {
      if ((v.length > 10) && (v.length < 8)) {
        return txt + '字符長度不符合！'
      }
      let char = /[`~!@#$%^&*(“”‘’'、～·！_+|=;？，。\\)<>?:"{},.\/;'[\]]/;
      if (char.test(v)) {
        return txt + '中不應有除了 - 之外的特殊字符。'
      }
    }
    return true
  },


  // 中英文
  val_chinese(str) {
    const re = new RegExp('[\\u4E00-\\u9FFF]', 'g')
    return re.test(str);       
  }
}