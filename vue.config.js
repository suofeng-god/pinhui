module.exports = {
  // 关闭 eslint
  lintOnSave: false,
  // 配置跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
};
