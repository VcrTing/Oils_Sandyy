
import backend from './backend/backend'
import chronu from './timed/ser_chronu'
import dialog from './backend/dialog'
import timed from './timed/ser_timed'
import float from './num/float'
import pdf from './backend/pdf'

import string from './num/string'

const first_Max = function(rec) {
    return rec.slice(0, 1).toUpperCase() + rec.slice(1)
}

const if_def = function(rec, def = '- -') {
    if (rec) {
        return rec
    }
    return def
}
const price_view = function(rec) {
    let ee = rec.toString()
    let i = ee.split(".")[ 1 ]
    i = i ? i.length : null
    if (i && i > 2) {
        
        rec = rec.toFixed(2)
    }
    return rec
}

const scrollTo = function(pt) {
    pt = pt ? document.getElementById(pt) : null
    pt = pt ? pt.getBoundingClientRect().top : 0
    const speed = pt == 0 ? 0 : 10
    for(let i= 0; i< (speed + 1); i++ ) { setTimeout(k => window.scrollTo(0, pt / speed * i) , speed * i) }
}

export default {
    pdf,
    string,
    backend,
    ...chronu,
    ...timed,
    ...float,
    ...dialog,

    first_Max,
    if_def,

    price_view,
    scrollTo,

    view_remark: (src) => {
        src = src ? src + '' : ''
        if(src.startsWith('Manually')) {
            let _src = src.replace('Manually added,  remark: ', '')
            _src = src.replace('Manually added,  remark:', '')
            return src.replace('Manually added, remark:', '')
        }
        return ''
    }
}