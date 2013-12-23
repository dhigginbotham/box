var getEnv = require('../library/helpers').getEnv;
var path = require('path');
var app = {};

// i recommend keeping private things in your 
// environment vars then keeping that private 
// by assigning getters/setters or some such 
// to keep that stuff as far away from leaking
// as possible.

app.port = 1400;

app.title = 'box - ';

app.env = getEnv();

app.secret = 'thisIsntAGoodPlaceForThisKindOfThingKeepThisStuffInEnvVarsMaybe';

app.templateDir = path.join(__dirname, '..', 'views');

app.viewEngine = 'jade';

module.exports = app;