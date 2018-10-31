const mysql = require('mysql');

module.exports = {
    conn: (sql, insertsArr, callback) => {
        const connection = mysql.createConnection({
            host: '',
            user: '',
            password: '',
            database: ''
        })
        connection.connect();
        const query = mysql.format(sql, insertsArr);
        connection.query(query, (err, rows) => {
            callback(err, rows)
        })
        connection.end();
    }
}