var express = require('express');
var mongoose = require('mongoose');
var app = express();
var url = "mongodb://localhost/members";
mongoose.connect(url,function(err){
    if(err) console.log(err);
});
var db = mongoose.connection ;
//資料庫事件接收
db.on('error',function(){
    throw new Error('unable to connect to database at ' + url);
});

// express 框架設定
app.configure(function(){
    app.set('views',__dirname+'View');
    app.use(express.bodyParser());
});
// Schema Model and Routing
require('./db/model');
require('./routing')(app);

app.listen(12345);
console.log("app runs on localhost:12345");