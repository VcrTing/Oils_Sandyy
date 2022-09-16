const pdfunny = require('../../../extensions/pdfunny')

module.exports = {

    // POST
    async save(ctx) {
        let res = null
        let src = ctx.body

        src = src ? src.html : null

        if (src && (typeof src == 'string')) { res = await pdfunny.save_html(src ) }
        return res
    },

    // GET
    // PK = POST 传来的 参数 : /:key
    async convert(ctx) {
        let res = 404
        let pk = pdfunny.getKeyFromUri(ctx.originalUrl)
        
        if (pk) { res = await pdfunny.build_pdf(pk, pdfunny.getParamsFromUri(ctx.originalUrl)) }
        return res
    },

    async test(ctx) {
        console.log('进来了自己的方法')
        return 'TEST'
    }
}