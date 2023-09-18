const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
mode:'development',
entry: ["@babel/polyfill",'./src/index.ts'],
output:{
path:path.resolve(__dirname,'dist'),
filename:"[name].[hash].js",
assetModuleFilename : '[name][ext]'
},
plugins:[
new HtmlWebpackPlugin({template:'./src/index.html'}),
new CleanWebpackPlugin(),
],
module:{
rules:[
    {
        test:/\.(sass|scss)$/,
        use:['style-loader','css-loader','sass-loader']
    },
    {
        test:/\.(jpeg|jpg|png|svg)$/i,
        /*
        use:[
          {
          loader:'[file-loader,url-loader',
        options: {
          name:'[name].[hash].[ext]',
        }
      }
      ]
      */
     type:'asset/resource'
    },
    {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
    },
    {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": ["@babel/preset-typescript"]
          }
        }
    }
]
},
devServer: {
    port: 9000,
    compress: true,
    hot: true
  }
}