var express = require('express');
var router = express.Router();
let mysql=require('mysql');

let db=mysql.createPool({
  host:'localhost',
  port:3306,
  user:'root',
  password:'123',
  database:'backstage'
})



router.post('/', function(req, res) {
  if(req.body.user){
    let user=req.body.user;
    let pass=req.body.pass;
     db.query(
      `SELECT * FROM info WHERE (phone="${user}" or user="${user}") AND pass="${pass}"`,
      (err,result)=>{
        if(err){ 
          res.send('login error database')
        }else {
          if(result.length>0){
            res.send(result[0])
          }else{
            res.send({err:'用户名密码错误'})
          }
        }
      }
  )
  }
 
});


module.exports = router;