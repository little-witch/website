var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
    //页面入口文件配置
    entry: {
        index : './src/scripts/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'src/scripts',
        filename: 'main.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            {
               test: /\.scss$/,
               loader: extractCSS.extract(['css', 'sass'])
            },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        extractCSS
    ]
};
