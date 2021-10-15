
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// webpack-merge 合并 common公共配置
module.exports = merge(common,{
    mode: 'production',
    // 查看报错代码模块  消耗性能
    devtool: 'source-map',
});