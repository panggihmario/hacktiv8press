const Article = require('../models/article.js')
const jwt = require('jsonwebtoken')


class Controller{
    static addArticle(req,res){
        var decoded = jwt.verify(req.headers.token, 'easy')
        // console.log(decoded)
        console.log('tes')
        Article.create({
            title : req.body.title,
            author: decoded.id,
            content : req.body.content,
            category : req.body.category,
        })
        .then(function(data){
            console.log('success')
            // console.log(data)
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
       
    }

    static allArticle(req,res){
        Article.find({})
        .populate('author')
        .then(function(allArticle){
            res.status(200).json(allArticle)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static getArticlebyAuthor(req,res){
        let author = req.params.author
        Article.find({author})
        .populate('author')
        .then(article=>{
            res.status(200).json(article)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static getByCategory(req,res){
        let category = req.params.category
        Article.find({category})
        .populate('author')
        .then(article=>{
            res.status(200).json(article)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static removeArticle(req,res){
        Article.deleteOne({
            _id : req.params.id
        },function(err,data){
            res.json(data)
        })
    }

    static updateData(req,res){
        Article.updateOne({
            _id : req.params.id
        },{
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            author: req.body.author
        })
        .then(function(data){
            console.log('success')
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }
}

module.exports = Controller