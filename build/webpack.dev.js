const mergeWebpack = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const webpackConfig = mergeWebpack(baseConfig, {
    mode: 'developer',
    watch: true
})

module.exports = webpackConfig
