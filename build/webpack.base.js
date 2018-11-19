const path = require('path');
const webpack = require('webpack');
const hwp = require('html-webpack-plugin');
const prodEnv = (process.env.NODE_ENV === 'production');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, '../src/views/index.js'),
    output: {
        filename: '[name].js',
        path: __dirname + '../dist'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    },
                    'img-loader'
                ]
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new hwp({
            template: path.join(__dirname, '../index.html')
        })
    ]
};

if (prodEnv) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}
