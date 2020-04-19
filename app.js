const express = require('express');

api_endpoint = process.env.API_ENDPOINT;
port = process.env.PORT;

console.log('API_ENDPOINT: ' + api_endpoint);
console.log('PORT: ' + port);


var app = express();
app.use(express.static("dist"));

var server = app.listen(port);
