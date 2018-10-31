const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    main: ['./public/js/main.js', './public/scss/style.scss']
  },
  output: {
    path: path.resolve(__dirname, 'public/dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', 
              options: { 
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')]
              }
            },
            "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/style.min.css"
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css\.*(?!.*map)/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
        safe: true,
        autoprefixer: false
      },
      canPrint: true
    })
  ]
}