const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        index: './src/index',
        login: './src/login',
        cabinet: './src/cabinet.js',
        templateEditor: './src/templateEditor.js',
        componentEditor: './src/componentEditor.js',
        siteEditor: './src/siteEditor.js',
        pageEditor: './src/pageEditor.js'
    },
    output: {
        path: path.join(__dirname, '../Diploma/wwwroot/publicFiles/App/dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'src/images/logo.png',
                to: 'images/logo.png' 
            }], 
            { 
                copyUnmodified: false
            }
        )
    ],
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src")
                ],
                test: /\.jsx?$/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff)$/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
    },
    watch: true
}