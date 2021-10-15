
const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // 入口
    entry: {
        index: './src/index.js',
        // print: './src/print.js',
        // module: './src/module.js'
    },
    // 输出文件
    output: {
        // publicPath 比如部署路径 在 www.baidu.com/web 目录下这里添加/web  一般都是/
        publicPath: '/',
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        // 资源文件 存放目录
        assetModuleFilename: 'static/[hash][ext][query]',
        // 清理上次留下的打包
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-插件管理--',
        }),
        // 配置不同环境下参数，比如demo test等
        new webpack.DefinePlugin({
            'process.env': {
                'http_env': JSON.stringify(process.env.http_env)
            }
         }),
    ],
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        // node_modules 目录的代码打包到 vendor中
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};