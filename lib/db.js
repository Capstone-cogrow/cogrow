var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'userinfo'
});
db.connect();

module.exports = db;