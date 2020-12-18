var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: 'Express' });
  // console.log('DB connect :', process.env.MANGO_CONNECT);
  
    res.redirect('/catalog');

});

module.exports = router;
