// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '../php/', // Endpoint API w PHP
    createProxyMiddleware({
      target: 'http://localhost:8000', // Adres serwera PHP
      changeOrigin: true,
    })
  );
};