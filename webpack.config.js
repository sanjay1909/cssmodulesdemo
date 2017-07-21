/*
 ./webpack.config.js
 */
const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: ['style-loader','css-loader'] }//Loaders are processed in reverse array order. That means css-loader will run before style-loader
        ]
    }
}