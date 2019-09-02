const path = require('path')
const merge = require('webpack-merge')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: 'dist',
  indexPath: 'index.html',
  filenameHashing: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
    config.performance
      .set('hints', false)
    config.module
      .rule('images')
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .tap(options =>
          merge(options, {
            limit: 10000,
          })
    )
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/style/_reset.scss";
  //       `
  //     }
  //   }
  // },
  // devServer: {
  //   port: 8090,
  //   https: false,
  //   hotOnly: true, // 热更新
  //   proxy: null, // 设置代理
  // }
}