const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        modal: './src/modal.js',
      },
      devtool: 'inline-source-map',
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
        }),
      ],
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
 module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
   ],
 },
};