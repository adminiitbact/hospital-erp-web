const fs = require('fs');

api_endpoint = process.env.API_ENDPOINT;
port = process.env.PORT;
firebase = process.env.firebase;

console.log(`API_ENDPOINT: ${api_endpoint}`);
console.log(`PORT: ${port}`);

console.log(process.env.firebase);

fs.writeFileSync('public/js/globalconf.js', `API_ENDPOINT = "${api_endpoint}";\n`);
fs.appendFileSync('public/js/globalconf.js', `firebaseConfig = ${firebase}`);
fs.writeFileSync('.env', `VUE_APP_API_ENDPOINT=${api_endpoint}\n`);
fs.appendFileSync('.env', `VUE_APP_FIREBASE=${firebase}`);
