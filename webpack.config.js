const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 빌드할 때마다 dist 폴더의 모든 파일을 삭제한다.
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 확장자로 끝나는 파일만 babel-loader를 사용한다.
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/,
        // 먼저 'sass-loader'가 SASS를 CSS로 바꾼다.
        // 다음으로 'css-loader'가 css를 commonJS로 바꾼다.
        // 다음으로 'style-loader'가 JS strings를 이용해서 html head에 style nodes를 만들어 넣는다.
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // 이 파일을 이용해서 dist/index.html을 만든다.
      inject: 'body', // body 안에서 bundle.js를 불러온다.
    }),
  ],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true, // 자동으로 브라우저를 띄운다.
  },
};
