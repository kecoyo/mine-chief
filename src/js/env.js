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
	apiPath: 'https://api.kuangzhang.site/kuangzhang/',
	// apiPath: 'http://127.0.0.1:9095/api/kuangzhang/',
};


// 生产环境
const production = {
	name: 'production',
	dir: 'official',
	apiPath: 'https://api.kuangzhang.site/kuangzhang/',
};

module.exports = development;

