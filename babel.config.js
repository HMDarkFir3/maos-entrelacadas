module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@components-of-screens": "./src/screens",
            "@contexts": "./src/contexts",
            "@dtos": "./src/dtos",
            "@hooks": "./src/hooks",
            "@reducers": "./src/reducers",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@storages": "./src/storages",
            "@store": "./src/store",
            "@themes": "./src/themes",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
