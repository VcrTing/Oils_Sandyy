const conf = require('../_conf')

const _send = async function(to, from, subject, html) {
    return await strapi.plugins['email'].services.email.send({
        to, from, 
        cc: to, bcc: to, 
        replyTo: from, 
        subject, text: '', html
    })
}

module.exports = async function(status = true, html = '<p>备份成功</p>') {
    const tt = new Date()
    await _send(
        conf.EMAIL.to,
        conf.EMAIL.from, 
        `备份系统，备份编号【${ tt.getFullYear() }${ tt.getMonth() }${ tt.getDate() }】，备份${ status ? '成功': '失败' }`,
       
        `<html>
        <body>
            ${html}
        </body>
        </html>`
    )
}