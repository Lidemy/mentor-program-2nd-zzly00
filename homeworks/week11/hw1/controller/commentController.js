const query = require('../model/query');
const he = require('he');
const moment = require("moment-timezone");
const share = require('./share');

module.exports = {
    handleComments: (req, res) => {
        query.commentsQuery(req.query.start, req.query.limit, (err, rows) => {
            let data = [];
            rows.map((row) => {
                const authorStatus = req.session.uId === row.u_id
                const comments = {
                    cId: row.c_id,
                    avatar: row.avatar,
                    content: he.escape(row.content),
                    createTime: moment(row.create_time).tz('Asia/Taipei').format('YYYY-MM-DD hh:mm:ss a'),
                    nickname: he.escape(row.nickname),
                    authorStatus: authorStatus,
                    subcomment: []
                }
                if(data.length == 0 || data[data.length-1].cId !== row.c_id){
                    data.push(comments);
                }

                if(data[data.length-1].cId === row.c_id && row.s_c_id != null){
                    const sAuthorStatus = req.session.uId === row.s_u_id
                    const sCommentSub = row.u_id === row.s_u_id
                    const subcomments = {
                        sCId: row.s_c_id,
                        sAvatar: row.s_avatar,
                        sContent: he.escape(row.s_content),
                        sCreateTime: moment(row.s_create_time).tz('Asia/Taipei').format('YYYY-MM-DD hh:mm:ss a'),
                        sNickname: he.escape(row.s_nickname),
                        sAuthorStatus: sAuthorStatus,
                        sCommentSub: sCommentSub
                    }
                    data[data.length-1].subcomment.push(subcomments);
                }
            })
            res.send(share.shareResp('success', data));
        })
    },
    handleLoginStatus: (req, res) => {
        query.userInfoQuery(req.session.uId, (err, rows) => {
            if(Array.isArray(rows) && rows.length !== 0){
                let data = {
                    nickname: he.escape(rows[0].nickname),
                    avatar: rows[0].avatar
                }
                res.send(share.shareResp('success', data));
            }else{
                res.send(share.shareResp('error'));
            }
        })
    },
    handleCreate: (req, res) => {
        if(req.session.uId){
            query.createCommentQuery(req.session.uId, req.body.content, req.body.parentId, (err, rows) => {
                rows.affectedRows ? res.send(share.shareResp('success')) : res.send(share.shareResp('error'));
            })
        }else{
            res.send(share.shareResp('error'))
        }
    },
    handleUpdate: (req, res) => {
        query.checkAuthorQuery(req.body.cId, req.session.uId, (err, rows) => {
            if(rows[0].c_id){
                const func = req.body.content ? query.updateCommentQuery : query.deleteCommentQuery;
                func(req.body.content, req.body.cId, (err, rows) => {
                    rows.affectedRows ? res.send(share.shareResp('success')) : res.send(share.shareResp('error'));
                })
            }else{
                res.send(share.shareResp('error'));
            }
        })
    },
    handlePages: (req, res) => {
        query.pagesQuery((err, rows) => {
            if(Array.isArray(rows) && rows.length !== 0){
                res.send(share.shareResp('success', rows[0]));
            }else{
                res.send(share.shareResp('error'));
            }
        })
    }
}