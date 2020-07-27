const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  // The application entry point
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      //use babel-loader to transpile js files
      {
        test: /\.js$/,
        loader: "babel-loader",
      },

      // css-loader to bundle all the css files into one file and vue-style-loader
      // to add all the styles inside the <style> block in `.vue` file.
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "src/assets/images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "../public"),
    port: 3000,
    publicPath: "/dist/",
    // open: true,
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
  ],
};
