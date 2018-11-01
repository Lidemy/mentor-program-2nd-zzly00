const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
});
conn.connect();

const loginQuery = (insertsArr, callback) => {
    let sql = 'SELECT u_id, password FROM zzly00_users where username = ?;';
    sql = mysql.format(sql, insertsArr);
    conn.query(sql, (err, rows) => {
        callback(err, rows);
    })
}
const createUserQuery = (insertsArr, callback) => {
    let sql = 'INSERT INTO zzly00_users (username, password, nickname, avatar) VALUES (?,?,?,?);';
    sql = mysql.format(sql, insertsArr);
    conn.query(sql, (err, rows) => {
        callback(err, rows);
    })
}
const commentsQuery = (callback) => {
    const sql = `SELECT c1.c_id AS c_id, c1.u_id AS u_id, c1.content AS content
    , c1.create_time AS create_time, u1.avatar AS avatar, u1.nickname AS nickname
    , c2.c_id AS s_c_id, c2.u_id AS s_u_id, c2.content AS s_content
    , c2.create_time AS s_create_time, u2.avatar AS s_avatar, u2.nickname AS s_nickname
    FROM zzly00_comments c1
    LEFT JOIN zzly00_users u1 ON c1.u_id = u1.u_id
    LEFT JOIN (SELECT * FROM zzly00_comments WHERE status = 1) c2 ON c1.c_id = c2.parent_id
    LEFT JOIN zzly00_users u2 ON c2.u_id = u2.u_id
    WHERE c1.parent_id = 0 AND c1.status = 1
    ORDER BY c1.create_time DESC, c2.create_time DESC`;
    conn.query(sql, (err, rows) => {
        callback(err, rows);
    })
}
const userInfoQuery = (insertsArr, callback) => {
    let sql = 'SELECT nickname, avatar FROM zzly00_users where u_id = ?;'
    sql = mysql.format(sql, insertsArr);
    conn.query(sql, (err, rows) => {
        callback(err, rows);
    })
}
const createCommentQuery = (insertsArr, callback) => {
    let sql = 'INSERT INTO zzly00_comments (u_id, content, parent_id) VALUES (?, ?, ?);'
    sql = mysql.format(sql, insertsArr);
    conn.query(sql, (err, rows) => {
        callback(err, rows);
    })
}
const updateCommentQuery = (insertsArr, callback) => {
    let sql = 'UPDATE zzly00_comments SET content = ?, update_time = NOW() WHERE c_id = ?;'
    sql = mysql.format(sql, insertsArr);
    conn.query(sql, (err, rows) => {
        callback(err, rows);
    })
}
const deleteCommentQuery = (insertsArr, callback) => {
    let sql = 'UPDATE zzly00_comments SET status = 0, update_time = NOW() WHERE c_id = ?;'
    sql = mysql.format(sql, insertsArr);
    conn.query(sql, (err, rows) => {
        callback(err, rows);
    })
}
const checkAuthorQuery = (insertsArr, callback) => {
    let sql = 'SELECT c_id FROM zzly00_comments WHERE c_id = ? AND u_id = ?;'
    sql = mysql.format(sql, insertsArr);
    conn.query(sql, (err, rows) => {
        callback(err, rows);
    })
}

module.exports = {
    loginQuery: loginQuery,
    createUserQuery: createUserQuery,
    commentsQuery: commentsQuery,
    userInfoQuery: userInfoQuery,
    createCommentQuery: createCommentQuery,
    updateCommentQuery: updateCommentQuery,
    deleteCommentQuery: deleteCommentQuery,
    checkAuthorQuery: checkAuthorQuery
}