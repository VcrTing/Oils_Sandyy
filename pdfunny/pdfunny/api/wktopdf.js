const conf = require('../conf')
// 基础命令
const base = function(_name, _uri = '', _param = '') {
    _uri = _uri ? _uri : false
    _uri = _uri ? _uri : `${ conf.PATH_HTML }/${_name}.html`
    return `${conf.ORI} ${_param} ${_uri} ${ conf.PATH_PDF }/${_name}.pdf `
}

// 1. 构建传来的 参数
const _param = function(_prms) {
    let res = ''
    for( let k in _prms) {
        res += (k + ' ' + _prms[ k ] + ' ')
    }; return res
}

// 2. 
const index = function(_name, _prms) {
    return new Promise((rej, rev) => {
        rej(
            base(_name, '', _param(_prms))
        )
    })
}

module.exports =  {
    index
}

// -L 20 -R 20 -T 20 -B 20 --encoding utf-8 --javascript-delay 600
// wkhtmltopdf ../SAVE/html/default.html ../SAVE/pdf/default.pdf
// wkhtmltopdf ../SAVE/html/default.html ../SAVE/pdf/default.pdf -s A4 --enable-forms 