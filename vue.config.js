const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // @的路径，打包的路劲
  publicPath: './',
  devServer: {
    // proxy: {
    //   '/': {
    //     //要访问的跨域的域名
    //     target: 'https://my.qidian.com/ajax/headimage/uploadimg',
    //     ws: true, // 是否启用websockets
    //     secure: false, // 使用的是http协议则设置为false，https协议则设置为true
    //     //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
    //     changOrigin: true,
    //     pathRewrite: {
    //       '^/allin': '/'  //必须这样写
    //     }
    //   }
    // }
  }

})
