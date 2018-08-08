var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log('news服务',req.headers.origin);
  // res.setHeader('Access-Control-Allow-Origin',req.headers.origin);//当前服务允许跨域
  //兜库-->mysql|mongodb  代理
  // req.session.nikename='bmw2';//req.query.username
  res.send(data);

});

module.exports = router;