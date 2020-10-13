const path = require('path');
const webpack=require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //没有这个插件会报错
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const portfinder = require('portfinder');

// 利用node的express模块引入数据
const express = require('express')
const app = express() // 返回一个函数 app.handle(req, res, next);

console.log('express方法--', app);
console.log('express模块--', express);

const apiRouter = express.Router()
app.use('/api', apiRouter)

const appData = require('./data.json');
const contentdata = appData.result.data;
const login = appData.login.userData;
const navlist = appData.login.navlist;
console.log('这是数据--',login)
/*
1. 在整合路径的时。 path.resolve()和path.join()效果是相同的
2. 在定义别名的时，最好要以@开头，如果只是简单的字符，在使用时会报错
3. 模拟假数据文章 https://blog.csdn.net/happy_bigqiang/article/details/81700307?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param
4. 另一种方法 https://blog.csdn.net/weixin_40419104/article/details/87917591
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
    // proxy:{
    //   "/api":`http://v.juhe.cn/joke/content/list.php?key=f04c2c771c088b4ffd34514459291105&page=2&pagesize=10&sort=asc&time=1418745237`
    // }
    before(app){
      app.get('/api/login', (req,res)=>{
        res.json({
          errno: 0,
          data: login
        })
      }),
      app.get('/api/data', (req,res)=>{
        res.json({
          errno: 0,
          data: contentdata
        })
      }),
      app.get('/api/navlist', (req,res)=>{
        res.json({
          errno: 0,
          data: navlist
        })
      })
    }
  }
}