var path = require('path');

module.exports = function(app){
    var member = require('./db/controller');
    app.get('/userinfo/:id',member.memberInfo);
/*
    // registration Page
    app.get('/applyPanel',function(req,res){
        console.log('Registration Page');
        res.render('register.html');
    });
    // Login Page
    app.get('/loginPanel',function(req,res){
        console.log('Login Page');
        res.sendFile(path.join(__dirname+'./View/login.html'));
    });
*/
    app.post('/registration',member.memberReg);
    app.post('/login',member.memberLogin);
    app.put('/update/:id',member.memberUpdate);
    app.delete('/delete/:id',member.memberDelete);
}