var isDev = require('../library/helpers').isDev;

var db = {};

db.collection = 'box';

db.debug = isDev(); // if isDev == true, then debug

db.uri = 'mongodb://localhost:27017/' + db.collection;

module.exports = db;