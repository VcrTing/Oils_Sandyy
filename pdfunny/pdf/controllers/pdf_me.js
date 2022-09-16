const pdfunny = require('../../../extensions/pdfunny')

module.exports = {

    // GET
    // 传来的 参数 : /:key
    // query 一般为 fs 库的配置参数
    async fiie(ctx) {
        try { return pdfunny.fiie(ctx.params['key'], ctx.query) } catch(err) { }; return 404
    },

    // POST
    // BODY: { html: string },
    // QUERY: { permit: string }
    async save(ctx) {
        let src = ctx.body; src = src ? src.html : null
        if (src && (ctx.query['permit'] === 'dan')) { return await pdfunny.save_html( src ) }; return 404
    },

    // GET
    // PK = POST 传来的 参数 : /:key
    // PK = pdfunny.getKeyFromUri(ctx.originalUrl)
    // PARAMS = pdfunny.getParamsFromUri(ctx.originalUrl)
    async convert(ctx) {
        if (pk) { return await pdfunny.build_pdf( ctx.params['key'], ctx.query ) }; return 404
    },

    async test(ctx) {
        console.log('进来了自己的方法'); return 'TEST'
    }
}