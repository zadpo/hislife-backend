'use strict';

/**
 * tithe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tithe.tithe');
