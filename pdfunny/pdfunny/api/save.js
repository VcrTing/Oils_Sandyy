
const FileSaver = require('file-saver');

const fs = require('fs'); 
const moment = require('moment')
const conf = require('../conf')

module.exports = {
    // 随机数
    random(lower, upper) {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    },
    // 名称
    named(def = 'default') {
        return new Promise((rej, rev) => {
            let mo = moment(new Date())
            mo = def + '_' + mo.format('YYYYMMDDHHmmss') + '_' + this.random(0, 999)
            rej(mo)
        })
    },
    //
    // 设定 路径
    path(named, mode = 'html') {
        return (
            (mode == 'html') ? conf.PATH_HTML : conf.PATH_PDF
        ) + '/' + named + '.' + mode
    },
    // 保存 HTML，返回名字与路径
    saveHtml(html, named) {
        return new Promise( async (rej, rev) => {
            const ph = this.path(named)
            const ex = await this._exist(ph)
            if (!ex) { 
                fs.writeFile( ph, html, (err, data) => { rej(ph)})
            }; rej(ph)
        })
    },
    async saveHtmlSync(html, named) {
        const ph = this.path(named)
        const ex = await this._exist(ph)
        ex ? undefined : fs.writeFileSync( ph, html)
        return ph
    },

    // 判断是否存在文件
    _exist(_ph) { 
        return new Promise((rej, rev) => {
            try {
                fs.exists(_ph, (ext) => {
                    if (ext) { rej(true) }; rej(false)
                }) 
            } catch(err) { rej(false) }
        }) 
    },
    async exist(named, mode = 'html') {
        return await this._exist(this.path(named, mode))
    }
}