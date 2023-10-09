const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://youtube008.netlify.app/",
      changeOrigin: true,
    })
  );
};
