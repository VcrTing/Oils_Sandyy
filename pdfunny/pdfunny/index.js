

const wktopdf = require('./api/wktopdf')
const comd = require('./api/comd')
const save = require('./api/save')
const trash = require('./api/trash')

const save_html = async function(content) {
    let named = await save.named()
    await save.saveHtml(content, named)
    return named
}

const build_pdf = async function(named, params = { }) {
    
    let code = 200

    if (await save.exist(named)) {
        try {
            if (await save.exist(named, 'pdf')) {
                code = 401
            } else {
                let cp = await wktopdf.index(named, params)
                comd(cp, (res) => { })
            }
        } catch(err) { return [ 500, err ] }
    } else { code = 404 }

    return [ code, named, 'pdf' ]
}

module.exports = {

    build_pdf,
    save_html,

    trash: trash.trash_infinite,

    fiie: function (key, opt, sfx = 'pdf') {
        return save.read(save.path(key, sfx), opt)
    },

    getKeyFromUri: function(uri) {
        uri = uri.split('?')[0]
        uri = uri.split('/').filter(e => e != '')
        return uri && uri.length > 0 ? uri[ uri.length - 1 ] : null
    },
    getParamsFromUri: function(uri) {
        let res = { }
        uri = uri.split('?')[1]
        uri = uri ? uri.split('&') : null
        
        if (uri && uri.length > 0) {
            let _ee
            uri = uri.map(e => { _ee = e.split('='); res[_ee[0]] = _ee[1] })
        }
        return res
    }
}