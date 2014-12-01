var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : '10.161.164.140',
    user     : 'root',
    password : 'root',
    port: '3306',
    database:'emp'
});

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

module.exports = pool;

