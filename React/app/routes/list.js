var express = require('express');
var router = express.Router();
let data=[
    {
        'id':1,
        'src':'./images/img4-1.png',
        'title':'手机能拍出什么样的照片？',
    },
    {
        'id':2,
        'src':'./images/img4-2.png',
        'title':'手机能拍出什么样的照片？',
    },
    {
        'id':3,
        'src':'./images/img4-3.png',
        'title':'手机能拍出什么样的照片？',
    },
    {
        'id':4,
        'src':'./images/img4-4.png',
        'title':'手机能拍出什么样的照片？',
    },
    {
        'id':5,
        'src':'./images/img4-1.png',
        'title':'手机能拍出什么样的照片？',
    }
];




router.get('/', function(req, res){
    res.send(data)
});

module.exports = router;