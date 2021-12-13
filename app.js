const express = require('express');

const app = express();
const device = require('express-device');
app.use(device.capture());

const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit : '18mb' }));
app.use(bodyParser.urlencoded({
  extended: true,
  limit : '18mb'
}));

app.use(express.static(__dirname + '/client'));

// demarrage du serveur
app.listen(8181);
console.log('application runs on port 8181');