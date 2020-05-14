module.exports = {
  chainWebpack: {
    css: {
      loaderOptions: {
        sass: {
          implementation: require('sass'), // This line must in sass option
        },
      },
    },
  },
};
