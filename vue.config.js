module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/mytest': {
        target: 'http://192.168.10.123:3001',
        changOrigin: true,
        pathRequiresRewrite: {
          "^/mytest": "/mytest"
        }
      }
    }
  },
}
