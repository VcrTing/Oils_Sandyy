const SIFU_TEST = [ {
    'name': 'Gogochef', 
    'port': '34567', 'host': 'crm.gogochef.hk',
    'pass': '3rU7.53Q?_8F!u7@+8', 'path': '/root/Backup/*'
}]
const SIFU = require('./_conf/sf')

const path = require('path')
const PATH = path.resolve('./') + '/extensions/backup'

const TARG = function(name, ID = true) {
    return `${PATH}/${ ID ? 'SAVE_1' : 'SAVE_2' }/${name}/`
}

module.exports = {
    SIFU_TEST,
    SIFU,
    TARG,

    EMAIL: {
        to: 'support@manfulls.com',
        from: 'eric@manfulls.com'
    },

    PATH,
    PP: [ 34567, 34567, 34567, 34567, 34567, 34567, 34567 ]
}