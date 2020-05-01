// Being used for deployment by Node
const express = require('express');
const history = require('connect-history-api-fallback');


api_endpoint = process.env.API_ENDPOINT;
port = process.env.PORT;
firebase = process.env.firebase;

console.log(`API_ENDPOINT: ${api_endpoint}`);
console.log(`PORT: ${port}`);
console.log(`FIREBASE: ${firebase}`);


const app = express();
app.use(history({
  // verbose: true
}));
app.use(express.static('dist'));

const server = app.listen(port);
