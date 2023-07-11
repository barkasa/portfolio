const path = require("path-browserify");

module.exports = {
  // ...другие настройки webpack...

  resolve: {
    fallback: {
      fs: false, // Отключает модуль fs
      path: require.resolve("path-browserify"), // Использует path-browserify в качестве замены модуля path
    },
  },
};
