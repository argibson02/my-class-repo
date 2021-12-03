const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");


const config = {
  // Update the entry point
  entry: "/public/assets/js/app.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + "/public/dist/",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      filename: "manifest.json",
      inject: false,
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('/public/assets/images/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        // {
        //   src: path.resolve('/public/assets/icons/large-icon.png'),
        //   size: '1024x1024' // you can also use the specifications pattern
        // },
        // {
        //   src: path.resolve('/public/assets/icons/maskable-icon.png'),
        //   size: '1024x1024',
        //   purpose: 'maskable'
        // }
      ]
    })
  ]
};

module.exports = config;
