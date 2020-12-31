module.exports = {
    lintOnSave: false,
    devServer: {
        port: '4000',
        // 项目启动完成自动打开
        open: false,
        // 开启https
        https: false,
        overlay: {
            warnings: false,
            errors: true
        },
        // proxy: {
        //   '/api': {
        //     // target: process.env.VUE_APP_PROXY_URL,
        //     // pathRewrite: { '^/api': '' },
        //     // changeOrigin: true,
        //     // secure: false,
        //   },
        // },
    },
    css: {
        sourceMap: false, // 是否在构建样式地图
        loaderOptions: {
            // 全局scss文件
            scss: {
                // prependData: "@import '@/style/index.scss';"
            }
        }
    },
    // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    parallel: require("os").cpus().length > 1,
    // 基本URL
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // 静态资源目录
    assetsDir: 'assets',
    // 生产环境的 source map
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            title: ''
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                // src: '@/*',
                // plugin: '@/plugin/*',
                // components: '@/components/*',
            },
            extensions: ['.tsx', '.js', '.vue', '.json', '.ts'],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "commons",
                        // minChunks: 2  // 最小引入数量时提取
                    }
                }
            },
        },
        // cdn引入
        // externals: process.env.NODE_ENV === 'development' ? {} : {
        //   'vue': 'Vue',
        //   'vue-router': 'VueRouter',
        //   'element-ui': 'ELEMENT',
        //   'vuex': 'Vuex',
        //   'axios': 'axios',
        //   'cookie': 'js-cookie'
        // }
    }
}