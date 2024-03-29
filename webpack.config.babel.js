import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { MyHelloPlugin } from './hello-world-plugin';
import { MyGoodbyePlugin } from './hello-world-plugin';

import path from 'path';

const KiB = 1024;

// const VENDOR_LIBS = ["react", "react-dom"];

// Different publicPath for dev / prod
// const ASSET_PATH = process.env.ASSET_PATH || '/';

const config = {
  // https://webpack.js.org/configuration/mode/
  mode: 'development',

  // each entry point indicates a module which webpack should use to begin building out its internal dependency graph
  // Define multiple entry points
  entry: {
    // Produce bundle.js starting inside index.js
    bundle: ['react-hot-loader/patch', path.resolve(__dirname, 'src/index.js')],

    // Create separate bundle in vendor.js
    // (put dependencies that won't often as frequently as application code here)
    // vendor: VENDOR_LIBS,cc
  },
  output: {
    // Output directory for webpack build - mandatory absolute path
    // dist (distribution) - "minified/concatenated version, used on productions sites"
    path: path.resolve(__dirname, 'dist'),

    // Name of output bundle (written to output.path)
    // Replace name with key from entry section i.e. bundle.js, vendor.js
    filename: '[name].[contenthash].js',

    // Prepends output.publicPath to URL of loaders
    // Where I uploaded my bundled files (absolute path or relative to main HTML file)
    publicPath: '',
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  optimization: {
    //runtimeChunk: "single",
    splitChunks: {
      chunks: 'all',
      /* maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        },
      },*/
    },
  },

  plugins: [
    /* DEPRECATED, instead use optimization.splitChunks
    // Remove duplicate dependencies
    new webpack.optimize.CommonsChunkPlugin({
      // Only place duplicates in vendor.js
      name: "vendor",
    }),
    */

    // All files inside output.path will be removed
    new CleanWebpackPlugin(),

    // Generate HTML5 that includes all webpack bundles
    new HtmlWebpackPlugin({
      // title: "I used HtmlWebpackPlugin",
      favicon: 'src/assets/favicon.ico',
      template: 'src/index.html',
    }),

    // Does not work with hot reload?
    new MiniCssExtractPlugin(),

    // My babies
    new MyHelloPlugin({ options: true }),
    new MyGoodbyePlugin({ options: true }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Cache results of loader
            // Uses node_modules/.cache/babel-loader/
            cacheDirectory: true,
          },
        },
      },

      // CSS modules and regular CSS
      {
        test: /\.css$/,
        // Loaders are applied right-to-left
        // i.e. import first,
        // and then add (style-loader) / separate (mini-css-extract-plugin)
        // For CSS modules
        use: [
          MiniCssExtractPlugin.loader,
          MyHelloPlugin,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          MyGoodbyePlugin,
        ],
        include: /\.modules\.css$/,
      },
      // For CSS files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /\.modules\.css$/,
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            // Byte limit to inline files
            options: { limit: 40 * KiB },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },

  // Specify display information on build
  stats: {
    cachedAssets: true,
    children: false,
    colors: true,
    entrypoints: false,
    modules: false,
  },

  // Maps bundle.js -> original source, as separate files
  devtool: 'source-map',

  // Development time!
  devServer: {
    // Automatically open browser
    open: true,

    // Hot-module replacement duh!
    hot: true,
  },
};

export default config;
