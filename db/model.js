var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    username:String,
    password:String,
    name:String,
    school:String,
    major:String
});

mongoose.model("Member",memberSchema);

