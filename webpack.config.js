const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './example/server/index.jsx',
  resolve: {
    modules: ['./node_modules', './src'],
    extensions: ['.js', '.jsx', '.less'],
  },
  profile: true,
  cache: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true },
          },
        ],
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
    },
    https: false,
    host: 'localhost',
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __HOST_API__: JSON.stringify(process.env.HOST_API),
    }),
    new HtmlWebpackPlugin({ template: './example/server/index.ejs' }),
  ],
};

module.exports = config;
