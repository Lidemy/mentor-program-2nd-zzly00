const db = require('../model/model')
const shortid = require('shortid')

module.exports = {
    renderIndex: (req, res) => {
        res.render('index')
    },
    handleUrl: (req, res) => {
        const sql = 'SELECT url FROM shortener WHERE value=?;'
        db.conn(sql, [req.params.value], (err, rows) => {
            const url = rows[0].url
            res.redirect(url)
        })
        
    },
    createShorten: (req, res) => {
        const sql = 'SELECT value FROM shortener WHERE url=?;'
        db.conn(sql, [req.body.url], (err, rows) => {
            if(rows.length){
                const host = req.get('host')
                res.send(host+'/'+rows[0].value)
            }else{
                const sql = 'INSERT INTO shortener (url, value) VALUES (?,?)'
                const value = shortid.generate()
                db.conn(sql, [req.body.url, value], (err, rows) => {
                    if(rows.affectedRows == 1){
                        const host = req.get('host')
                        res.send(host+'/'+value)
                    }else{
                        res.send('error');
                    }
                })
            }
        })        
    }
}