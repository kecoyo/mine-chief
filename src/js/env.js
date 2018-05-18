/* eslint-disable no-unused-vars */
/**
 *
 * 环境配置信息
 *
 */

// 开发环境
const development = {
	name: 'development',
	dir: 'test',
	apiPath: 'http://47.75.178.220:9095/api/kuangzhang/',
};


// 生产环境
const production = {
	name: 'production',
	dir: 'official',
	apiPath: 'http://47.75.178.220:9095/api/kuangzhang/',
};

module.exports = development;

