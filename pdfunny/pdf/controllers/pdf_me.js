const pdfunny = require('../../../extensions/pdfunny')

module.exports = {

    // GET
    // 传来的 参数 : /:key
    // query 一般为 fs 库的配置参数
    async fiie(ctx) {
        try { return await pdfunny.fiie(ctx.params['key'], ctx.query) } catch(err) { }; return 404
    },

    // POST
    // BODY: { html: string },
    // QUERY: { permit: string }
    async save(ctx) {
        let src = ctx.request.body; src = src ? src.html : null
        if (src && (ctx.query['permit'] === 'dan')) { return await pdfunny.save_html( src ) }; return 404
    },

    // GET
    // PK = POST 传来的 参数 : /:key
    // PK = pdfunny.getKeyFromUri(ctx.originalUrl)
    // PARAMS = pdfunny.getParamsFromUri(ctx.originalUrl)
    // 一般是 wkhtmltopdf 的参数，例如：-r=20
    async convert(ctx) {
        return await pdfunny.build_pdf( ctx.params['key'], ctx.query )
    },

    async test(ctx, data) {
        console.log('进来了自己的方法, ctx =', ctx.query, ctx.params); 
        console.log('body =', ctx.request.body)
        return 'TEST'
    }
}