'use strict';

/**
 * pdf controller
 */

const pdf_me = require('./pdf_me')

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pdf.pdf', ({ strapi }) => ({
    ...pdf_me
}));
// 
