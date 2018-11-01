const query = require('../model/query');
const bcrypt = require('bcrypt');

module.exports = {
    handleLogin: (req, res) => {
        const insertsArr = [req.body.username]
        query.loginQuery(insertsArr, (err, rows) => {
            if(rows[0].password && bcrypt.compareSync(req.body.password, rows[0].password)){
                req.session.uId = rows[0].u_id;
                res.send('success');
            }else{
                res.send('error');
            }
        })
    },
    handleRegister: (req, res) => {
        const insertsArr = [req.body.username, bcrypt.hashSync(req.body.password, 10), req.body.nickname, req.body.avatar];
        query.createUserQuery(insertsArr, (err, rows) => {
            if(err){
                res.send('error');
            }else{
                req.session.uId = rows.insertId;
                res.send('success');
            } 
        })
    }
}