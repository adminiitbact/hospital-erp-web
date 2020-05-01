const fs = require('fs');

const api_endpoint = 'https://api.cov2.in/api/';
const port = '443';
const base64Firebase = 'eyJhcGlLZXkiOiJBSXphU3lBdERaZmhmdHdwSXBOOXJaNUk0R0hZaWpHdUNiWmJpYjAiLCJhdXRoRG9tYWluIjoiaG9zcGl0YWwtZXJwLXByb2QuZmlyZWJhc2VhcHAuY29tIiwiZGF0YWJhc2VVUkwiOiJodHRwczovL2hvc3BpdGFsLWVycC1wcm9kLmZpcmViYXNlaW8uY29tIiwicHJvamVjdElkIjoiaG9zcGl0YWwtZXJwLXByb2QiLCJzdG9yYWdlQnVja2V0IjoiaG9zcGl0YWwtZXJwLXByb2QuYXBwc3BvdC5jb20iLCJtZXNzYWdpbmdTZW5kZXJJZCI6IjM3NDg5NTAzNDM3NSIsImFwcElkIjoiMTozNzQ4OTUwMzQzNzU6d2ViOjY4ZGFjOThmMDAwOWMxMjkwNmFhYTIiLCJtZWFzdXJlbWVudElkIjoiRy1GTUs4Rks5Q1ExIn0=';

console.log('Prod Setup');
console.log(`API_ENDPOINT: ${api_endpoint}`);
console.log(`PORT: ${port}`);
console.log(`Base64 Firebase: ${base64Firebase}`);

const firebaseConfig = Buffer.from(base64Firebase, 'base64').toString('utf8');

console.log(firebaseConfig);

fs.writeFileSync('public/js/globalconf.js', `API_ENDPOINT = "${api_endpoint}";\n`);
fs.appendFileSync('public/js/globalconf.js', `firebaseConfig = ${firebaseConfig};`);
fs.writeFileSync('.env', `VUE_APP_API_ENDPOINT=${api_endpoint}\n`);
fs.appendFileSync('.env', `VUE_APP_FIREBASE=${firebaseConfig}`);
