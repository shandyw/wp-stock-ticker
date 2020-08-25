// var webpack = require("webpack");

module.exports = {
  mode : "development",
  entry : "./app.js",
  output : {
    filename: "public/bundle.js"
  },
 
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
     proxy: {
      '/data/bc496b81-f16c-4e1f-b700-d1f4bd7690d3/Quotes*': 'http://localhost:8080'
    },
    

},
  module:{
    rules: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',{'plugins': ['@babel/plugin-proposal-class-properties']}
              ]
          }
        }
    ]
  }
};
