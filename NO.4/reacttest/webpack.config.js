const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// HMR 热更新，热替换，当文件改变的时候，不刷新页面直接同步
// webpack 4.44.2 默认已经有热更新
module.exports={
  entry: './src/index.jsx',
  output:{
    path: path.join(__dirname,'dist'),
    filename:'[name].js'
  },
  // 文件不写后缀，自动进行匹配
  resolve:{
    extensions:['.wasm','.mjs','.js','.jsx','json']
  },
  module:{
    rules:[
      {
        test: /\.jsx?/, // 什么文件被处理
        exclude:/node_moduls/,
        use:{
          loader:'babel-loader',
          options: {
            babelrc:false,
            presets: [
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env')]
            ],
            cacheDirectory: false // 默认值
          }
        }
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'./index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // webpack-dev-server相关的配置，包括自定义端口号，热更新
  devServer:{
    hot:true,
    port: 8089
  }
}

/*
webpack --mode development  开发环境进行打包

*/ 

/* 
 性能调优

-- 打包结果优化
-- 构建过程优化
-- Tree-Shaking


打包过程优化，webpack插件
UglifyjsWebpack
UglifyjsWebpack 对打包的文件进行压缩

构建过程优化


*/

/*
跨域问题解决方法之一
使用中间代理
https://blog.csdn.net/hdchangchang/article/details/80112593  参考文档
*/