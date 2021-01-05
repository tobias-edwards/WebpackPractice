const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const KiB = 1024;

// const VENDOR_LIBS = ["react", "react-dom"];

// Different publicPath for dev / prod
// const ASSET_PATH = process.env.ASSET_PATH || '/';

const config = {
  // https://webpack.js.org/configuration/mode/
  mode: "development",

  // each entry point indicates a module which webpack should use to begin building out its internal dependency graph
  // Define multiple entry points
  entry: {
    // Produce bundle.js starting inside index.js
    bundle: path.resolve(__dirname, "src/index.js"),

    // Create separate bundle in vendor.js
    // (put dependencies that won't often as frequently as application code here)
    // vendor: VENDOR_LIBS,cc
  },
  output: {
    // Output directory for webpack build - mandatory absolute path
    path: path.resolve(__dirname, "build"),

    // Name of output bundle (written to output.path)
    // Replace name with key from entry section i.e. bundle.js, vendor.js
    filename: "[name].js",

    // Prepends output.publicPath to URL of loaders
    publicPath: "build/",
  },

  // ATTEMPT 1:
  /*optimization: {
    splitChunks: {
      chunks: "all"
    }
  },*/

  // Other fuckery that don't do shit
  /*
  optimization: {
    splitChunks: {
      /*cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: "all",
        },
      },
      chunks: "all",
    },
  },
  /*   cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          enforce: true,
          chunks: "all",
        },
      },
    },*/

  plugins: [
    /* DEPRECATED, instead use optimization.splitChunks
    // Remove duplicate dependencies
    new webpack.optimize.CommonsChunkPlugin({
      // Only place duplicates in vendor.js
      name: "vendor",
    }),
    */

    // Does not work with hot reload?
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // Cache results of loader
            // Uses node_modules/.cache/babel-loader/
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        // Loaders are applied right-to-left
        // i.e. import first,
        // and then add (style-loader) / separate (mini-css-extract-plugin)
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            // Byte limit to inline files
            options: { limit: 40 * KiB },
          },
          "image-webpack-loader",
        ],
      },
    ],
  },
  // Maps bundle.js -> original source, as separate files
  devtool: "source-map",

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        },
      },
    },
  },
};

module.exports = config;
