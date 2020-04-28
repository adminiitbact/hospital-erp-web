const fs = require('fs');

const api_endpoint = 'http://api.staging.cov2.in/api/';
const port = '8081';
const base64Firebase = 'eyJzdG9yYWdlQnVja2V0IjoiaG9zcGl0YWwtZXJwLXN0YWcuYXBwc3BvdC5jb20iLCJhcGlLZXkiOiJBSXphU3lBZjRqN2s1VE1UTjg2UW9pTnRvblBjNnpXb2R3R0Q1TU0iLCJtZXNzYWdpbmdTZW5kZXJJZCI6Ijg0MjkwNzg5NTcwNCIsImFwcElkIjoiMTo4NDI5MDc4OTU3MDQ6d2ViOjg0NDViNTIxYmY0ODE5ZDY4ZjhkZWQiLCJwcm9qZWN0SWQiOiJob3NwaXRhbC1lcnAtc3RhZyIsIm1lYXN1cmVtZW50SWQiOiJHLUNHSERCWEIxWTAiLCJkYXRhYmFzZVVSTCI6Imh0dHBzOi8vaG9zcGl0YWwtZXJwLXN0YWcuZmlyZWJhc2Vpby5jb20iLCJhdXRoRG9tYWluIjoiaG9zcGl0YWwtZXJwLXN0YWcuZmlyZWJhc2VhcHAuY29tIn0=';

console.log(`Dev Setup`);
console.log(`API_ENDPOINT: ${api_endpoint}`);
console.log(`PORT: ${port}`);

const firebaseConfig = Buffer.from(base64Firebase, 'base64').toString('utf8');

console.log(firebaseConfig);

fs.writeFileSync('public/js/globalconf.js', `API_ENDPOINT = "${api_endpoint}";\n`);
fs.appendFileSync('public/js/globalconf.js', `firebaseConfig = ${firebaseConfig};`);
fs.writeFileSync('.env', `VUE_APP_API_ENDPOINT=${api_endpoint}\n`);
fs.appendFileSync('.env', `PORT=${port}\n`);
fs.appendFileSync('.env', `VUE_APP_FIREBASE=${firebaseConfig}`);
