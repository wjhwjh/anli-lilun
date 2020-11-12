 const path = require('path');
const UglifyjsWebpack = require('uglifyjs-webpack-plugin'); //在文件打包的同事还会压缩

 module.exports = {
   // 工程的入口文件
   entry:'./app.js',
   // 打包后的文件路径
   output:{
     path: path.join(__dirname, 'dist'),
     filename:'bundle.js'
   },
   // webpack-dev-server配置内容
   devServer:{
     port:'3000',
   },
   //webpack 处理各种文件
   module:{
     rules: [
        {
          test: /\.css$/,
          use:[
            'style-loader',  //样式生产，后使用
            'css-loader' // 样式解析,先解析
          ]
        }
     ]
    },
  // 对项目进行处理，比如对打包后文件的压缩、
  plugins: [
    new UglifyjsWebpack()
  ]
 }