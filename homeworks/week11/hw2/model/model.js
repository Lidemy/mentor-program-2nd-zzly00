const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
});
conn.connect();

function getUrl(insertsArr, callback){
    let sql = 'SELECT url FROM shortener WHERE value=?;'
    sql = mysql.format(sql, insertsArr);
    conn.query(sql, (err, rows) => {
        callback(err, rows)
    })
}
function checkUrl(insertsArr, callback){
    let sql = 'SELECT value FROM shortener WHERE url=?;'
    sql = mysql.format(sql, insertsArr)
    conn.query(sql, (err, rows) => {
        callback(err, rows)
    })
}
function createShortValue(insertsArr, callback){
    let sql = 'INSERT INTO shortener (url, value) VALUES (?,?)'
    sql = mysql.format(sql, insertsArr)
    conn.query(sql, (err, rows) => {
        callback(err, rows)
    })
}
module.exports = {
    getUrl: getUrl,
    checkUrl: checkUrl,
    createShortValue: createShortValue
}