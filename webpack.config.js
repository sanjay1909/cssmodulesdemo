/*
 ./webpack.config.js
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'demo.js'
    },
    devtool: '#inline-source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.md$/, loader: 'raw-loader', exclude: /node_modules/ },
            { test: /\.normal.css$/, loader: ['style-loader','css-loader'] },//Loaders are processed in reverse array order. That means css-loader will run before style-loader
            { test: /\.module.css$/, use: ['style-loader', {loader: 'css-loader', options: { modules: true }, }],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],
    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}