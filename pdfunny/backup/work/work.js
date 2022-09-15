const conf = require('../_conf')
const sec = require('../func/secret')
const comp = require('../func/comd')

const _scp = function(host, pass, path, sv_path, port) {
    pass = sec.decode(pass)
    return `sshpass -p '${pass}' scp -P ${port} -r root@${host}:${path} ${sv_path}`
}

const backup = function(ID) {
    // 执行 SCP
    conf.SIFU.map(e => {
        try {
            const sc = _scp(e.host, e.pass, e.path, conf.TARG(e.name, ID), conf.PP[ e.index - 1 ])
            comp(sc, (st, er) => {})
        } catch(err) { }
    })
}

module.exports = {
    
    backup
}