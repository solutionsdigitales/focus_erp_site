const express = require('express');

const app = express();
var device = require('express-device');
app.use(device.capture());

// permet au server de recuper le contenu des formulaire (json ou urlencoded)
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit : '18mb' }));
app.use(bodyParser.urlencoded({
  extended: true,
  limit : '18mb'
}));


// dossier(s) racine(s) de l'appication
// pour que le navigateur puisse avoir acces au dossiers client
//ce qui permet de passer ceci sur l'url =>   http://localhost:8080/index.html
app.use(express.static(__dirname + '/client'));

// demarrage du serveur
app.listen(8080);
console.log('application runs on port 8080');