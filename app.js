// Being used for deployment by Node
const express = require('express');
const history = require('connect-history-api-fallback');


const apiEndpoint = process.env.API_ENDPOINT;
const port = process.env.PORT;
const firebase = process.env.firebase;

console.log(`API_ENDPOINT: ${apiEndpoint}`);
console.log(`PORT: ${port}`);
console.log(`FIREBASE: ${firebase}`);


const app = express();
app.use(history({
  // verbose: true
}));
app.use(express.static('dist'));
app.listen(port);
