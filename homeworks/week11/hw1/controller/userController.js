const query = require('../model/query');
const bcrypt = require('bcrypt');
const share = require('./share');

module.exports = {
    handleLogin: (req, res) => {
        query.loginQuery(req.body.username, (err, rows) => {
            if(rows.length>0 && bcrypt.compareSync(req.body.password, rows[0].password)){
                req.session.uId = rows[0].u_id;
                res.send(share.shareResp('success'));
            }else{
                res.send(share.shareResp('error'));
            }
        })
    },
    handleRegister: (req, res) => {
        query.createUserQuery(req.body.username, bcrypt.hashSync(req.body.password, 10), req.body.nickname, req.body.avatar, (err, rows) => {
            if(err){
                res.send(share.shareResp('error'));
            }else{
                req.session.uId = rows.insertId;
                res.send(share.shareResp('success'));
            } 
        })
    }
}