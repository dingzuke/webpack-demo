const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 清理上次留下的打包
        clean: true,
        filename: 'webpack-numbers.js',
        //  umd 配置可以 CommonJS、AMD 以及 script 标签使用
        library: {
            name: 'webpackNumbers',
            type: 'umd',
          },
    },
    //  library 需要一个名为 lodash 的依赖，这个依赖在 consumer 环境中必须存在且可用。
    externals: {
        lodash: {
          commonjs: 'lodash',
          commonjs2: 'lodash',
          amd: 'lodash',
          root: '_',
        },
      },
};