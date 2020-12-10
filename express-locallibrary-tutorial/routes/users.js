var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool',(req,res)=>{

	res.send("<h2 style='padding :40; font: 14px 'Lucida Grande', Helvetica, Arial, sans-serif'>You're so cool</h2>");
});

module.exports = router;
