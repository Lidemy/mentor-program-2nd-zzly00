module.exports = {
    index: (req, res) => {
        res.render('index'); 
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    logout: (req, res) => {
        req.session.destroy();
        res.render('logout');
    }
}