const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://erin-cautious-alligator.cyclic.app', // replace with the URL of your fake REST API
      changeOrigin: true,
    })
  );
};