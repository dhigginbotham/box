var isDev = require('../library/helpers').isDev;
var db = {};

db.collection = 'box';
db.debug = isDev(); // if isDev == true, then debug

module.exports = db;