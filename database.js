var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '',      // Replace with your database password
  database: 'user-data' // // Replace with your database Name
});
conn.connect(function(err) {
  if (err) throw err;
  console.log('Server started on http://127.0.0.1:3500/');
});
module.exports = conn;
