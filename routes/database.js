var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jwtmysql',
});

con.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected!');
  }
  // var sql =asdf
  //   'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))'
  // con.query(sql, function (err, result) {
  //   if (err) throw err
  //   console.log('Table created')
  // })
});

module.exports = con;
