var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser=require('body-parser');
var cookieSession=require('cookie-session');
var cors=require('cors');



var index = require('./routes/index');
var login = require('./routes/login');
var reg = require('./routes/reg');
var user = require('./routes/user');
var out = require('./routes/out');
var list = require('./routes/list');
var home = require('./routes/home');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors({
  "origin": ["http://localhost:9001","http://localhost:5000","http://localhost:8080"],  //允许所有前端域名
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));


let arr=[];
for(var i=0;i<10000;i++){
  arr[i]='a'+ Math.random()*10000
}
app.use(cookieSession({
  name:'lord',
  keys:arr,
  maxAge:1000*60*60
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/index', index);
app.use('/login',login);
app.use('/reg',reg);
app.use('/home',home);
app.use('/list',list);
app.use('/out',out);
app.use('/user',user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
