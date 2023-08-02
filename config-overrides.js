const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "mySubApp",
      filename: "sub_app.js",
      remotes: {
        // TODO：加载戴勇的模块
        nav: "nav@http://10.68.185.189:8080/remoteEntry.js",
      },
      exposes: {},
      shared: {
        // ...deps,
        // react: {
        //   singleton: true,
        //   requiredVersion: deps.react,
        // },
        // "react-dom": {
        //   singleton: true,
        //   requiredVersion: deps["react-dom"],
        // },
      },
    }),
  )
  return config;
}