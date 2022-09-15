// 每天晚上，删除 SAVE 里面的 html 与 pdf
const conf = require('../conf')
const comd = require('../api/comd')

module.exports = {
    trash_infinite() {
        let d = new Date()
        if (d.getHours() == 3) {
            const m = d.getMinutes()
            if (m === 20) {
                const cmd_pdf = 'rm -rf ' + conf.PATH_PDF + '/*'
                const cmd_html = 'rm -rf ' + conf.PATH_HTML + '/*'
                comd(cmd_pdf, (err) => { })
                comd(cmd_html, (err) => { })
            }
        }
    },
    trash() {

        return true
    }
}