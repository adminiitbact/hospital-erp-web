module.exports = {
  client: {
    service: {
      name: 'hospital-erp-web',
      url: process.env.GRAPHQL_ENDPOINT,
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
};
