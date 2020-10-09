const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行
const HtmlWebpackPlugin = require('html-webpack-plugin');
 console.log('2222222222222');
console.log('路径',path.resolve(__dirname,'./src/components'));
module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'index.js'
  },
  resolve:{
    alias:{
      'components': path.resolve(__dirname,'./src/components')
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
  ]
}