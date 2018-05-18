var fs = require('fs');// 加载File System读写模块
var path = require('path');
var iconv = require('iconv-lite');// 加载编码转换模块
var program = require('commander');
var env = require('./src/js/env');


// 设置默认显示使用帮助
var argv = process.argv;
if (argv.length == 2) {
	argv.push('-h')
}

program
	.version('1.0.0')
	.option('-s, --status', '查看当前状态')
	.option('-d, --development', '修改为开发环境')
	.option('-p, --production', '修改为生产环境')
	.option('-c, --copy', '将beefly-frame/public与static合并到./public目录中')
	.parse(argv);


const modifyParam = function (param, envArgs) {
	// dir last
	param = param.replace('/', '');

	fs.readFile(envArgs.file, function (err, data) {
		if (err)
			console.log("读取文件fail " + err);
		else {
			let str = iconv.decode(data, 'utf-8');
			str = str.replace(envArgs.reg, envArgs.rep.replace('{param}', param));

			if (envArgs.validator(param)) {
				fs.writeFile(envArgs.file, str, function (err2) {
					if (err2)
						console.log("写入文件fail " + err2);
					else
						console.log('当前%s修改为：%s', envArgs.title, param);
				})
			}
		}
	});
};

const envArgs = {
	title: '环境',
	file: './src/js/env.js',
	reg: /module.exports = (\S+);/g,
	rep: 'module.exports = {param};',
	validator: () => true
};

if (program.status) {
	console.log('当前环境：', env.name);
}
if (program.development) {
	modifyParam('development', envArgs)
}

if (program.production) {
	modifyParam('production', envArgs)
}

function mkdirSync(dir) {
	if (!fs.existsSync(dir)) {
		mkdirSync(path.dirname(dir));
		fs.mkdirSync(dir);
	}
}

function copy(src, dest) {//拷贝文件
	mkdirSync(path.dirname(dest));
	// console.log('copy :' + dest)
	fs.writeFileSync(dest, fs.readFileSync(src));
}

function travel(src, dest) {
	fs.readdirSync(src).forEach(function (file) {
		var srcPath = path.join(src, file);
		var destPath = path.join(dest, file);
		if (fs.statSync(srcPath).isDirectory()) {//判断是否是目录
			travel(srcPath, destPath);
		} else {
			copy(srcPath, destPath);
		}
	});
}

//copy
if (program.copy) {
	// travel("../beefly-frame/public", './public');
	travel("./static", './public');
}

// 遍历目录中所有文件
const listNativeFiles = (dir) => {
	let children = [];
	try {
		let result = fs.readdirSync(dir);
		if (result) {
			result.forEach(function (filename) {
				let path = dir + "/" + filename;
				console.log(path)
				let stat = fs.statSync(path);
				if (stat && stat.isDirectory()) {
					children = children.concat(listNativeFiles(path))
				} else {
					if (path.indexOf('.DS_Store') < 0) {
						children.push(path)
					}
				}
			});
		}
	} catch (e) {
		// console.log(e.message)
	}

	return children
};

