const conf = require('../_conf')
const comp = require('../func/comd')

const fs = require('fs')
const path = require('path')

// 删除 原有文件
const kiii = async function(ID) {
    const ki = 'rm -rf '
    // 执行删除
    conf.SIFU.map(e => {
        const cmd = ki + conf.TARG(e.name, ID) + '*'
        comp(cmd, (st, er) => {})
    })
}

// 检测 是否 文件
const dir_res = async function(ID, call) {

    return new Promise((rj, rv) => {

        conf.SIFU.map(e => {

            fs.stat( 
                conf.TARG(e.name, ID)
                ,
                call
                )
            
        })

    })
    
}

module.exports = {
    kiii,
    dir_res
}