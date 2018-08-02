var express = require('express');
var router = express.Router();
const articleCon = require('../controller/userController.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/add',articleCon.addArticle)
// router.post('/login',userCon.login)


module.exports = router;