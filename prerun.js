const fs = require('fs');

const api_endpoint = process.env.API_ENDPOINT;
const port = process.env.PORT;
const base64Firebase = process.env.firebase;

console.log(`API_ENDPOINT: ${api_endpoint}`);
console.log(`PORT: ${port}`);
console.log(`Base64 Firebase: ${base64Firebase}`);

const firebaseConfig = Buffer.from(base64Firebase, 'base64').toString('utf8');

console.log(firebaseConfig);

fs.writeFileSync('public/js/globalconf.js', `API_ENDPOINT = "${api_endpoint}";\n`);
fs.appendFileSync('public/js/globalconf.js', `firebaseConfig = ${firebaseConfig};`);
fs.writeFileSync('.env', `VUE_APP_API_ENDPOINT=${api_endpoint}\n`);
fs.appendFileSync('.env', `VUE_APP_FIREBASE=${firebaseConfig}`);
