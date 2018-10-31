module.exports = {
    commentsQuery: `SELECT c1.c_id AS c_id, c1.u_id AS u_id, c1.content AS content
        , c1.create_time AS create_time, u1.avatar AS avatar, u1.nickname AS nickname
        , c2.c_id AS s_c_id, c2.u_id AS s_u_id, c2.content AS s_content
        , c2.create_time AS s_create_time, u2.avatar AS s_avatar, u2.nickname AS s_nickname
        FROM zzly00_comments c1
        LEFT JOIN zzly00_users u1 ON c1.u_id = u1.u_id
        LEFT JOIN (SELECT * FROM zzly00_comments WHERE status = 1) c2 ON c1.c_id = c2.parent_id
        LEFT JOIN zzly00_users u2 ON c2.u_id = u2.u_id
        WHERE c1.parent_id = 0 AND c1.status = 1
        ORDER BY c1.create_time DESC, c2.create_time DESC`,
    createUserQuery: 'INSERT INTO zzly00_users (username, password, nickname, avatar) VALUES (?,?,?,?);',
    loginQuery: 'SELECT u_id, password FROM zzly00_users where username = ?;',
    userInfoQuery: 'SELECT nickname, avatar FROM zzly00_users where u_id = ?;',
    createCommentQuery: 'INSERT INTO zzly00_comments (u_id, content, parent_id) VALUES (?, ?, ?);',
    checkAuthorQuery: 'SELECT c_id FROM zzly00_comments WHERE c_id = ? AND u_id = ?;',
    updateCommentQuery: 'UPDATE zzly00_comments SET content = ?, update_time = NOW() WHERE c_id = ?;',
    deleteCommentQuery: 'UPDATE zzly00_comments SET status = 0, update_time = NOW() WHERE c_id = ?;'
}