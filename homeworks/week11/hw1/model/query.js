const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
});
conn.connect();

const loginQuery = (username, callback) => {
    let sql = 'SELECT u_id, password FROM zzly00_users where username = ?;';
    sql = mysql.format(sql, [username]);
    conn.query(sql, callback)
}
const createUserQuery = (username, password, nickname, avatar, callback) => {
    let sql = 'INSERT INTO zzly00_users (username, password, nickname, avatar) VALUES (?,?,?,?);';
    sql = mysql.format(sql, [username, password, nickname, avatar]);
    conn.query(sql, callback)
}
const commentsQuery = (start, limit, callback) => {
    let sql = `SELECT c1.c_id AS c_id, c1.u_id AS u_id, c1.content AS content
    , c1.create_time AS create_time, u1.avatar AS avatar, u1.nickname AS nickname
    , c2.c_id AS s_c_id, c2.u_id AS s_u_id, c2.content AS s_content
    , c2.create_time AS s_create_time, u2.avatar AS s_avatar, u2.nickname AS s_nickname
    FROM (SELECT * FROM zzly00_comments WHERE parent_id = 0 AND status = 1 ORDER BY create_time DESC LIMIT ?, ?) c1
    LEFT JOIN zzly00_users u1 ON c1.u_id = u1.u_id
    LEFT JOIN (SELECT * FROM zzly00_comments WHERE status = 1) c2 ON c1.c_id = c2.parent_id
    LEFT JOIN zzly00_users u2 ON c2.u_id = u2.u_id
    WHERE c1.parent_id = 0 AND c1.status = 1
    ORDER BY c1.create_time DESC, c2.create_time DESC`;

    sql = mysql.format(sql, [Number(start), Number(limit)]);
    conn.query(sql, callback)
}
const userInfoQuery = (uId, callback) => {
    let sql = 'SELECT nickname, avatar FROM zzly00_users where u_id = ?;'
    sql = mysql.format(sql, [uId]);
    conn.query(sql, callback)
}
const createCommentQuery = (uId, content, parentId, callback) => {
    let sql = 'INSERT INTO zzly00_comments (u_id, content, parent_id) VALUES (?, ?, ?);'
    sql = mysql.format(sql, [uId, content, parentId]);
    conn.query(sql, callback)
}
const updateCommentQuery = (content, cId, callback) => {
    let sql = 'UPDATE zzly00_comments SET content = ?, update_time = NOW() WHERE c_id = ?;'
    sql = mysql.format(sql, [content, cId]);
    conn.query(sql, callback)
}
const deleteCommentQuery = (content, cId, callback) => {
    let sql = 'UPDATE zzly00_comments SET status = 0, update_time = NOW() WHERE c_id = ?;'
    sql = mysql.format(sql, [cId]);
    conn.query(sql, callback)
}
const checkAuthorQuery = (cId, uId, callback) => {
    let sql = 'SELECT c_id FROM zzly00_comments WHERE c_id = ? AND u_id = ?;'
    sql = mysql.format(sql, [cId, uId]);
    conn.query(sql, callback)
}
const pagesQuery = (callback) => {
    let sql = `SELECT count(c_id) AS amount FROM zzly00_comments
        WHERE parent_id = 0 AND status = 1`
    conn.query(sql, callback)
}

module.exports = {
    loginQuery: loginQuery,
    createUserQuery: createUserQuery,
    commentsQuery: commentsQuery,
    userInfoQuery: userInfoQuery,
    createCommentQuery: createCommentQuery,
    updateCommentQuery: updateCommentQuery,
    deleteCommentQuery: deleteCommentQuery,
    checkAuthorQuery: checkAuthorQuery,
    pagesQuery: pagesQuery
}