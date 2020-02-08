const path = require('path')
module.exports = {
  // 模式
  mode: 'development',  // 开发模式
  // mode: 'production',  //生产模式
  // 入口
  entry: './src/mian.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '20200208-zidingyi.js',
    // filename: '20200208-zidingyi.min.js',
    library: 'aUtils',  //向外暴露的对象的名称
    libraryTarget: 'umd',  //针对 esm/commonjs/amd
  }
}