const mergeWebpack = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.js')

const webpackConfig = mergeWebpack(baseConfig, {
    mode: 'development',
    watch: true,
    devServer: {
        port: 8000,
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/,
                    to: path.posix.join('/', 'index.html')
                }
            ]
        }
    }
})

module.exports = webpackConfig
