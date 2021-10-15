
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// webpack-merge 合并 common公共配置
module.exports = merge(common,{
    // 开发环境使用 代码报错文件（不然报错在bundle文件）
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        // 热更新
        hot: true,
    },
});