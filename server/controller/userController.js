const user = require('../models/user.js')
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const saltRounds = 10;


class Controller{

    static register(req,res){
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(req.body.password, salt);
        user.findOne({
            email:req.body.email
        })
        .then(function(mail){
            if(!mail){
                user.create({
                    name : req.body.name,
                    email : req.body.email,
                    password : hash
                })
                .then(function(dataUser){
                    var token = jwt.sign({id:dataUser._id,name:dataUser.name,email:dataUser.email},'easy')
                    res.status(200).json({
                        dataUser,token
                    })
                })
                .catch((err)=>{
                    res.json(err)
                    console.log(err)
                })
            }else{
                res.json("account sudah ada")
            }
        })  
     
    }

    static authentication(req,res,next){
        var decoded = jwt.verify(req.headers.token, process.env.secretKey)
        // console.log("===============",decoded)
        if(decoded){
            next()
        }else{
            res.status(400).json('error')
        }
    }

    static login(req,res){
        user.findOne({
            email : req.body.email
        })
        .then(function(dataUser){
            if(dataUser){
                let checkPassword = bcrypt.compareSync(req.body.password, dataUser.password)
                var token = jwt.sign({id:dataUser._id,name:dataUser.name,email:dataUser.email},'easy')
                if(checkPassword){
                    // res.json(dataUser)
                    res.json({dataUser,token})
                }else{
                    res.json('wrong password')
                }
            }
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static searchAuthor(req,res){
        var filter = []
        user.find({
            name : new RegExp(req.body.value, "i")
        })
        .then(author=>{
            for(var i=0;i<author.length;i++){
                filter.push(author[i])
            }
            res.json(filter)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static findAuthor(req,res){
        user.findOne({
            _id : req.params.id
        })
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}

module.exports = Controller