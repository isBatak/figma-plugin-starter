const HtmlPlugin = require('@rspack/plugin-html').default;
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const extensions = ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json', '.css'];

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'inline-source-map',
  entry: {
    ui: './src/app/index.tsx',
    code: './src/plugin/code.ts',
  },
  stats: {
    errors: true,
    warnings: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions,
    tsConfigPath: path.resolve(__dirname, 'tsconfig.json'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlPlugin({
      template: './src/app/index.ejs',
      filename: 'ui.html',
      chunks: ['ui'],
      cache: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      templateParameters: (compilation) => {
        return {
          inlineCss: compilation.assets['ui.css'].source(),
          inlineJS: compilation.assets['ui.js'].source(),
        };
      },
    }),
  ],
};
