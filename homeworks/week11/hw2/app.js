const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const controller = require('./controller/controller')
app.get('/', controller.renderIndex)

// api
app.get('/:value', controller.handleUrl)
app.post('/v1/shortener', controller.createShorten)

app.listen(3001)