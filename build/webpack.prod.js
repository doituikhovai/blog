const mergeWebpack = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const webpackConfig = mergeWebpack(baseConfig, {
    mode: 'production',
    watch: false
})

module.exports = webpackConfig
