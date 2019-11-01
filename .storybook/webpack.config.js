const path = require('path');

module.exports = {
  resolve: {
    alias: {
      styles: path.resolve(__dirname, '../src/'),
    },
  },
  module: {
    rules: [
      // Load sass.
      {
        test: /\.scss$/,
        loaders: ['sass-loader'],
        include: path.resolve(__dirname, '../src/'),
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        include: path.resolve(__dirname, '../src/'),
        use: 'url-loader',
      },
      // Load images.
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader?limit=25000',
        query: {
          limit: 10000,
          name: 'static/media/images/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  node: {
    fs: 'empty'
  }
};
