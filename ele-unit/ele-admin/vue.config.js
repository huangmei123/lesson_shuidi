//  跨域解决方案  ngnix vue-clie 3.0
module.exports = {
    devServer: {
      // '127.0.0.1:8080/api/admin/login'
      // a  <-> proxy（代理 中介）<-> b
      proxy: {
        '/api': {
          //转发到 伪装成3000
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          // http://127.0.0.1:3000/admin/login
          pathRewrite: {
            // ^表示开始
            '^/api': ''
          }
        }
      }
    }
  }