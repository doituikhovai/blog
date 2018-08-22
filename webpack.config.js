const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const prodEnv = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: {
        app: [
            './src/views/index.jsx',
            './src/assets/style/style.scss'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
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
                test: /\.jsx$/,
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
        new ExtractTextPlugin('style/[name].css'),
        // new PurifyCSSPlugin({
        //     paths: glob.sync(path.join(__dirname, '../index.html')),
        //     minimize: prodEnv
        // })
    ],
    watch: true
};

if (prodEnv) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}
