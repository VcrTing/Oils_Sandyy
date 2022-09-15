
const loc = require('./work/loc')
const work = require('./work/work')
const email = require('./func/email')

const doing = async function(jo) {
    // 删除 原有内容
    loc.kiii(jo)

    // 循环执行 scp 文件。
    work.backup(jo)

    // 判断 文件夹 是否🈶️ 文件
    await loc.dir_res(jo, (err, sts) => { })

    // 发送邮件
    if (jo) { email() }
}

module.exports = {
    backup: function() {

        // 每日 3: 20 分
        let d = new Date()
        if (d.getHours() == 3) {
            const m = d.getMinutes()
            if (m === 20) {
                
                // 奇偶数 机制
                doing((d.getDate() % 2 == 0))
            }
        }
    }
}