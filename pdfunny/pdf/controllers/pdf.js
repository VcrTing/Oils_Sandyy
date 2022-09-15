'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const pdfunny = require('../../../extensions/pdfunny')

module.exports = {
    async doc(ctx) { },

    // POST
    async save(ctx) {
        let res = null
        let src = ctx.request.body

        src = src ? src.html : null

        if (src && (typeof src == 'string')) {
            res = await pdfunny.save_html(src )
        }
        return res
    },

    // GET
    // PK = POST 传来的 参数
    async convert(ctx) {
        let res = 404
        let pk = pdfunny.getKeyFromUri(ctx.originalUrl)
        
        if (pk) { res = await pdfunny.build_pdf(pk, pdfunny.getParamsFromUri(ctx.originalUrl)) }

        return res
    },

};
