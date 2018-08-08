var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
     req.session=null;
    //  if(req.session){

    //  }
    res.render('index.ejs',{
        name:""
    });
});

module.exports = router;
