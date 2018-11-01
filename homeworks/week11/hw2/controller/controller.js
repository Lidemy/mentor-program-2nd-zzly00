const db = require('../model/model')
const shortid = require('shortid')

module.exports = {
    renderIndex: (req, res) => {
        res.render('index')
    },
    handleUrl: (req, res) => {
        db.getUrl([req.params.value], (err, rows) => {
            const url = rows[0].url
            res.redirect(url)
        })
    },
    createShorten: (req, res) => {
        db.checkUrl([req.body.url], (err, rows) => {
            if(rows.length){
                const host = req.get('host')
                res.send(host+'/'+rows[0].value)
            }else{
                const value = shortid.generate()
                db.createShortValue([req.body.url, value], (err, rows) => {
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