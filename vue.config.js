module.exports = {
  configureWebpack:{
    resolve:{
      // 给路径起别名
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  devServer:{
    proxy:{
      '/sougou':{
        // 跨域的服务器地址
        target: 'https://pic.sogou.com/napi/pc/searchList',
        // 是否允许跨域
        changeOrigin: true,
        // 替换掉请求路径的/sougou为“”
        pathRewrite:{'^/sougou': ""}
      },
    }
  }
}
