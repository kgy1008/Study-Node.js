var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'rlarkdus#1',
    database:'opentutorials'
  });
  db.connect();
module.exports = db;