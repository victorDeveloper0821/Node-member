//mongoDB 模組相關
var mongoose = require('mongoose');
var member = mongoose.model('Member'); // call out db


// MongoDB的operation
exports.memberInfo = function(req,res){
    var id = req.param.id ;
    member.findById({"_id":id},function(err,result){
        if(err) console.log('500 Internal Error');
        res.send(result);
    });
}

exports.memberReg = function(req,res){
    var user = req.body.username;
    var passwd = req.body.password;
    var yname = req.body.yourName;
    var yschool = req.body.School;
    var ymajor = req.body.Major;
    member.create({username:user,password:passwd,name:yname,
        school:yschool,major:ymajor},(err)=>{
                if(err) return console.log(err);
                return res.send(202);
    });
}

exports.memberLogin = function(req,res){
    var user = req.body.username;
    var passwd = req.body.password;
    member.find({"username":user,"password":passwd},
    function(err,result){
        if(err) console.log('404 Not Found');
        res.send(result);
        console.log(result);
    });
    
}

exports.memberUpdate = function(req,res){
    var id = req.param.id;
    member.update({"_id":id},{"password":passwd},
    function(err,row){
        console.log('update '+row+'rows');
    });
}

exports.memberDelete = function(req,res){
    var id = req.params.id ;
    member.remove({"_id":id},
    function(err){
       console.log('remove _id : '+id);
    });
}