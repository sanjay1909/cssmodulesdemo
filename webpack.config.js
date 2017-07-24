/*
 ./webpack.config.js
 */
const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'demo.js'
    },
    devtool: '#inline-source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.normal.css$/, loader: ['style-loader','css-loader'] },//Loaders are processed in reverse array order. That means css-loader will run before style-loader
            { test: /\.module.css$/, use: ['style-loader', {loader: 'css-loader', options: { modules: true }, }],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './',
        // modified bundle is served from memory at the relative path specified in publicPath
        publicPath: './dist',
        historyApiFallback: {
            index: '/'
        },
        inline: true,/*In this mode a small webpack-dev-server client entry is added to the bundle which refresh the page on changes*/
        port: 8080,
        stats: {
            chunks: false,
            children: false
        },
        clientLogLevel: 'info'
    }
}