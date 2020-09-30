const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'index.js'
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