const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //没有这个插件会报错
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
/*
1. 在整合路径的时。 path.resolve()和path.join()效果是相同的
2. 在定义别名的时，最好要以@开头，如果只是简单的字符，在使用时会报错

*/
module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'index.js'
  },
  resolve:{
    extensions:['.js','.json','.vue'],
    alias:{
      '@component': path.resolve(__dirname,'./src/components')
    }
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options: 
            {
              presets:[require.resolve('@babel/preset-env')]
            }
        }
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
         ]
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'./index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  // webpack-dev-server 配置
  devServer:{
    hot:true,
    port: 8089,
    proxy:{
      "/api":`http://v.juhe.cn/joke/content/list.php?key=f04c2c771c088b4ffd34514459291105&page=2&pagesize=10&sort=asc&time=1418745237`
    }
  }
}