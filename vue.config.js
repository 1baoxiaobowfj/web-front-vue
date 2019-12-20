module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/myapi': {
        target: 'http://127.0.0.1:3001',
        changOrigin: true,
        pathRequiresRewrite: {
          "^/myapi": "/myapi"
        }
      }
    }
  },
}
