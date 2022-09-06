const  {createProxyMiddleware} = require('http-proxy-middleware')

// app 服务的实例
module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:8080/'
  }))
}
