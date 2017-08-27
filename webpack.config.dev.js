import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false, // shows bundling process
  entry: [
    'eventsource-polyfill', // polyfill for ie and edge
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', // bundle the code so that browser understands it
  output: {
    // note bundle is created in memory
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      // handle js with babel transpiler
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loaders: ['babel']
    },
    {
      test: /(\.css)$/,
      loaders: ['style', 'css']
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', "sass"]
    },
    // --- font handing ---
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    },
    {
      test: /\.(woff|woff2)$/,
      loader: 'url?prefix=font/&limit=5000'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }
    ]
  }
};