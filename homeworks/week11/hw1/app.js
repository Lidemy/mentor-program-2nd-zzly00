const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');

const renderController = require('./controller/renderController');
const userController = require('./controller/userController');
const commentController = require('./controller/commentController');
// render
app.get('/', renderController.index);
app.get('/login', renderController.login);
app.get('/register', renderController.register);
app.get('/logout', renderController.logout);
// api - user
app.post('/v1/login', userController.handleLogin);
app.post('/v1/register', userController.handleRegister);
// api - comment
app.get('/v1/comments', commentController.handleComments);
app.post('/v1/comments', commentController.handleCreate);
app.put('/v1/comments', commentController.handleUpdate);
app.delete('/v1/comments', commentController.handleUpdate);
app.get('/v1/loginstatus', commentController.handleLoginStatus);
app.get('/v1/pages', commentController.handlePages);

app.listen(3000);