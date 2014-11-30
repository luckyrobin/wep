var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : '192.168.1.105',
    user     : 'root',
    password : 'root',
    port: '3306',
    database:'emp'
});

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

module.exports = pool;

