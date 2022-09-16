

const util = require('./util')

const ORI = 'wkhtmltopdf'
const PATH_PDF = util.path_n() + '/src/extensions/pdfunny/SAVE/pdf'
const PATH_HTML = util.path_n() + '/src/extensions/pdfunny/SAVE/html'
// 文档: https://blog.csdn.net/javaJxl/article/details/123989786

const conf = {
    x: 20, y: 20, typed: 'A4',
    low: false, grayscale: false, enable_forms: true,
    encoding: 'utf-8', javascript_delay: 600 }

const conf_header_footer = { footer_spacing: 5 }

// 1. 附加配置
const _build_conf = function() {
    const c = conf
    let res = `-L ${c.x} -R ${c.x} -T ${c.y} -B ${c.y} --encoding ${c.encoding} --javascript-delay ${c.javascript_delay} --page-size ${c.typed}`
    res = c.enable_forms ? (res + ' --enable-forms ') : res 
    res = c.grayscale ? (res + ' -g') : res
    res = c.low ? (res + ' -l') : res
    return res + ' '
}

module.exports = {
    ORI,
    PATH_PDF,
    PATH_HTML,
    _build_conf
}

// https://pdf01.svr.up5d.com

// 换行
// page-break-inside: avoid !important