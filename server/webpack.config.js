const path=require('path');
const webpackNodeExternals=require('webpack-node-externals');

module.exports={
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  
  target: 'node',
  externals: [
    webpackNodeExternals(),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: 'file-loader',
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../web/src/'),
      '~': path.resolve(__dirname, 'src/'),
    }
  },
};

