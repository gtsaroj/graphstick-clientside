const HtmlPackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        __filename: 'main.js',
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            }
        ]
    },
    plugins: [
        new HtmlPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
        })
    ]
};