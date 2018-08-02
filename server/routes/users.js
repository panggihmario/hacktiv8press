var express = require('express');
var router = express.Router();
const userCon = require('../controller/userController.js')
const articleCon = require('../controller/articleController.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',userCon.register)
router.post('/login',userCon.login)
router.post('/addArticle',articleCon.addArticle)
router.get('/findByAuthor/:author',articleCon.getArticlebyAuthor)
router.get('/allArticle',articleCon.allArticle)
router.get('/findByCategory/:category',articleCon.getByCategory)
router.put('/update/:id',articleCon.updateData)
router.delete('/delete/:id',articleCon.removeArticle)
router.get('/search',userCon.searchAuthor)
router.get('/find/:id',userCon.findAuthor)


module.exports = router;
