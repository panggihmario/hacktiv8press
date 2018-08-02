var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogUser = new Schema({
    name:  {
      type : String,
      required : true
    },
    email : {
      type : String,
      required : true
    },
    password : {
      type : String,
      required : true
    },
    
  });

var User = mongoose.model('User',blogUser)

module.exports = User