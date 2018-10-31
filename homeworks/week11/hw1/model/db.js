module.exports = {
    conn: (sql, insertsArr, callback) => {
        const mysql = require('mysql');
        const connection = mysql.createConnection({
          host     : '',
          user     : '',
          password : '',
          database : ''
        });
        connection.connect();
        const query = mysql.format(sql, insertsArr);
        connection.query(query, (err, rows, fields) => {
            callback(err, rows);
        });
        connection.end();
    }
}