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
  if(req.query.user){
    let user=req.query.user;
    let pass=req.query.pass;
     db.query(
      `SELECT * FROM info WHERE (phone="${user}" or user="${user}") AND pass="${pass}"`,
      (err,result)=>{
        if(err){ 
          res.send('login error database')
        }else {
          if(result.length>0){
            req.session['user']= result[0].user;
            res.send(result)
          }else{
            res.send('错误的用户名密码')
          }
        }
      }
  )
  }
 
});


module.exports = router;