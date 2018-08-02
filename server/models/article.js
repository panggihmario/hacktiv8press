var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogArticle = new Schema({
    author :{
      type : Schema.Types.ObjectId,
      ref :  'User'
    },
    title:  {
      type : String,
      required : true
    },
    content : {
      type : String,
      required : true
    },
    category : {
        type : String,
        required : true
      },
 
  });

var article = mongoose.model('Article',blogArticle)

module.exports = article