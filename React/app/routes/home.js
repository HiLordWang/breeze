var express = require('express');
var router = express.Router();
let data=[
    {
      'name':'美拍推荐',
      'id':1,
        'title':{
            'icon1':'&#xe62e;',
            'icon2':'&#xe65f;',
        },
        'count':{
          'p1':{
              'src1':'./images/img01.jpg',
              'src2':'./images/user_mini.png',
              'icon1':'&#xe600;',
              'icon2':'&#xe605;',
          },
            'p2':{
                'src1':'./images/img2.jpg',
                'src2':'./images/user_mini.png',
                'icon1':'&#xe600;',
                'icon2':'&#xe605;',
            },

        }

    },
    {

        'name':'美言推荐',
        'id':2,
        'title':{
            'icon1':'&#xe69a;',
            'icon2':'&#xe65f;',
        },
        'count':{
            'p1':{
                'src1':'./images/img3.jpg',
                'src2':'./images/user_mini.png',
                'icon1':'&#xe600;',
                'icon1':'&#xe605;',
            },
            'p2':{
                'src1':'./images/img4.jpg',
                'src2':'./images/user_mini.png',
                'icon1':'&#xe600;',
                'icon1':'&#xe605;',
            },

        }

    },
    {
        'name':'美视推荐',
        'id':3,
        'title':{
            'icon1':'&#xe653;',
            'icon2':'&#xe65f;',
        },
        'count':{
            'p1':{
                'src1':'./images/img5.jpg',
                'src2':'./images/user_mini.png',
                'icon1':'&#xe600;',
                'icon1':'&#xe605;',
            },
            'p2':{
                'src1':'./images/img6.jpg',
                'src2':'./images/user_mini.png',
                'icon1':'&#xe600;',
                'icon1':'&#xe605;',
            },

        }

    }
];




router.get('/', function(req, res){
    res.send(data)
});

module.exports = router;