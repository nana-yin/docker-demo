// see http://vuejs-templates.github.io/webpack for documentation.
// 项目打包配置文件
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'), // 生成index.html的地方
    assetsRoot: path.resolve(__dirname, '../dist'), // 指向包含应用程序所有静态资产的根目录
    assetsSubDirectory: 'static', // 绝对路径下的项目文件
    assetsPublicPath: '/',
    productionSourceMap: false, // 是否用于生产
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: { // 开发期间的API代理
    env: require('./dev.env'),
    port: 8089, // 端口
    autoOpenBrowser: true, // 自动启动浏览器
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/dev-api': {
            target: 'http://ftnewsapi.bvrft.cn', // target host
            changeOrigin: true, // needed for virtual hosted sites
            ws: false, // proxy websockets
            pathRewrite: {
                '^/dev-api': '/' // rewrite path
            }
        }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
