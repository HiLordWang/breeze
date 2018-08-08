var express = require('express');
var router = express.Router();
let mysql=require('mysql');

let db=mysql.createPool({
  host:'localhost',
  port:3306,
  user:'root',
  password:'123',
  database:'dianfu'
})

router.get('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  if(req.query.user){
    let user=req.query.user;
    let pass=req.query.pass;
    let phone=req.query.phone;
     db.query(
      `SELECT * FROM info WHERE user="${user}"`,
      (err,result)=>{
        console.log(err,result);
        if(err){ 
          res.send('login error database')
        }else {
          if(result.length>0){
            res.send('错误的用户名密码')
          }else{
            db.query(
              `INSERT INTO info(user,pass,phone) VALUES("${user}","${pass}","${phone}")`,
              (err,result)=>{
                if(!err){
                  res.send('注册成功')
                }
              }
            )
          }
         }
     }
    )
 }

});

module.exports = router;