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

router.get('/', function(req, res){ 
  db.query(
    `SELECT * FROM news LIMIT 5`,
    (err,result)=>{
      res.send(result)
    })
});
router.get('/more', function(req, res){ 
  db.query(
    `SELECT * FROM news `,
    (err,result)=>{
      res.send(result)
    })
});

module.exports = router;