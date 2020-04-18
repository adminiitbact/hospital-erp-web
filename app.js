const fs = require('fs');
const express = require('express');

api_endpoint = process.env.API_ENDPOINT;
port = process.env.PORT;

console.log('API_ENDPOINT: ' + api_endpoint);
console.log('PORT: ' + port);

fs.writeFileSync("web/js/globalconf.js", "API_ENDPOINT = \"" + api_endpoint + "\";");

var app = express();
app.use(express.static("web"));

var server = app.listen(port);
