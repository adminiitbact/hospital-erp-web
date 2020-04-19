const fs = require('fs');

api_endpoint = process.env.API_ENDPOINT;
port = process.env.PORT;

console.log(`API_ENDPOINT: ${api_endpoint}`);
console.log(`PORT: ${port}`);

fs.writeFileSync('public/js/globalconf.js', `API_ENDPOINT = "${api_endpoint}";`);
fs.writeFileSync('.env', `VUE_APP_API_ENDPOINT=${api_endpoint}`);
