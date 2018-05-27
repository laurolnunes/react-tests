const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',
    output:{
        path: __dirname + '/dist',
        filename: './scripts.js'
    },
    devServer: {
        port: 8080,
        contentBase: './dist'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module:{
         loaders: [{
             test: /.jsx?$/,
             loader: 'babel-loader',
             exclude: /node_modules/,
             query: {
                 presets: ['es2015', 'react'],
                 plugins: ['transform-object-rest-spread']
             }
         }]
    }
}