var getEnv = require('../library/helpers').getEnv;
var path = require('path');
var app = {};

// i recommend keeping private things in your 
// environment vars then keeping that private 
// by assigning getters/setters or some such 
// to keep that stuff as far away from leaking
// as possible.

app.port = 1400;
app.name = 'box';
app.env = getEnv();
app.key = 'box.sid';
app.secret = 'thisIsntAGoodPlaceForThisKindOfThingKeepThisStuffInEnvVarsMaybe';

// template settings
app.templateDir = path.join(__dirname, '..', 'views');
app.viewEngine = 'jade';

// asset paths
app.img = path.join(__dirname, '..', 'assets', 'img');
app.js = path.join(__dirname, '..', 'assets', 'src');
app.css = path.join(__dirname, '..', 'assets', 'src');
app.uploads = path.join(__dirname, '..', 'assets', 'uploads');

module.exports = app;
