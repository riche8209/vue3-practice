// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  devServer: {
    proxy: {
      '/*$': {
        target: 'http://localhost:8099/',
        changeOrigin: true,
        ws: false
      }
    }
  }
}