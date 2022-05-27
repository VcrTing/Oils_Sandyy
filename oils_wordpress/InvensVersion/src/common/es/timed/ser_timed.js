import moment from 'moment'

const judge_date = function(n, o) {
    // n < o => true
    return !moment(n).isBefore(o)
}

const weeks = [
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
    '星期日'
]
const now_timed_list = function() {

    const d = new Date()
    let day = d.getDate()
    let month = d.getMonth() + 1
    const year = d.getFullYear()

    return [ year, month, day ]
}
const ser_timed_list = function (e) {

    if (e.length > 10) {
        const year = e.substring(0, 4)
        const month = e.substring(5, 7)
        const day = e.substring(8, 10)
    
        return [ Number.parseInt(year), Number.parseInt(month), Number.parseInt(day) ]
    }
    return [ ]
}

const _ser_timed = function(res, cn, short) {
    res = res ? moment(res) : null
    if (res) {
        if (short) { 
            return cn ? res.format('yyyy年MM月DD日') : res.format('yyyy-MM-DD')
        } else {
            return cn ? res.format('yyyy年MM月DD日 HH時mm分') : res.format('yyyy-MM-DD HH:mm') }
    }
}

const ser_timed = function (e, cn = false, short = true) {
    if (e == null || e == undefined) {
        return '--'
    } else {
        return _ser_timed(e, cn, short)
    }
}
const ser_timed_en = function(e, short = false) {
    if (e == null || e == undefined) {
        return '--'
    } else {
        const year = e.substring(0, 4)
        const day = e.substring(8, 10)
        const month = Number.parseInt(e.substring(5, 7)) - 1
        
        // + e.substring(11, 13) + ':' + e.substring(14, 16)
        if (!short) {
            return day + ' ' + ser_month(month) + ' ' + year
        }
        return ser_month_short(month) + ' ' + day + ', ' + year 
    }
}

const getToMonth = function(fill = 0) {
    const d = new Date()
    const year = d.getFullYear()
    const month = d.getMonth() + 1 + fill
    return year + '-' + month + '-' + '01'
}

const getToday = function(cn = false, fill = false, num_month = 0, num_day = 0) {
    const d = new Date()

    const year = d.getFullYear()
    let month = d.getMonth() + 1
    let day = d.getDate()

    if (month < 10 && !fill) {
        month = '0' + month
    }

    if (day < 10 && !fill) {
        day = '0' + day
    }

    if (cn) {
        return year + '年' + month + '月' + day + '日'
    }

    return year + '-' + month + '-' + day
}

const ser_week = function(rec) {
    let res = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'  ]
    return res[rec - 1]
}
const ser_month_short = function(rec) {
    let res = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ]
    return res[rec]
}
const ser_month = function(rec) {
    let res = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    return res[rec]
}

const getTodayEn = function(fill = false, num_month = 0, num_day = 0) {
    const d = new Date()

    const year = d.getFullYear()
    let month = d.getMonth()
    const day = d.getDate()

    const week = d.getDay()
    
    return ser_week(week) + ', ' + ser_month(month) + ' ' + day + ', ' + year
}

const timeCompare = function(time_1, time_2) {
    return moment(time_1).diff(time_2) > 0
}

const ser_timed_chronu = function(res) {
    res = moment( res )
    res = res.add(1, 'day')
    return res.format('yyyy年MM月DD日')
}

export default {
    judge_date,

    ser_timed,
    ser_timed_en,
    ser_timed_chronu,

    getToday,
    getTodayEn,
    getToMonth,

    ser_timed_list,
    now_timed_list,

    timeCompare
}