var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
     req.session=null;
     res.send('ok')

});

module.exports = router;