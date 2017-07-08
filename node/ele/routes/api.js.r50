var express = require('express');
var router = express.Router();
var DB = require('../model/db');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
var session = require('express-session');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

router.get('/login', function(req, res, next) {
    res.send('login')
});
router.post('/doLogin', function(req, res, next) {
    var phone = req.body.phone;
    var password = req.body.password;
    DB.Find("user",{phone,password},function(err,data){
        if(err){
            res.json({'msg':"用户名或者密码错误","status":"0"})
        }else{
            if(data.length<0){
                res.json({'msg':"用户名或者密码错误","status":"0"})
            }else{
                res.json({'msg':"登录成功","status":"1"})
            }
        }
    })
});

router.post('/doReg1', function(req, res, next) {
    var phone = req.body.phone;
    var longstr = '1,2,3,4,5,6,7,8,9,0,A,B,C,D,E,F,G,H,I,G,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
    var str = longstr.split(',');
    var prevNum = '';
    for(var i = 0; i < 6; i++) {
        prevNum += str[Math.floor(Math.random() * 36)];
    }
    DB.Insert("user",phone,function(err,data){
        if(err){
            res.json({'msg':"验证失败","status":"0"})
        }else{
            if(data.length<0){
                res.json({'msg':"验证失败","status":"0"})
            }else{
                req.session.prevNum=prevNum;
                res.json({'msg':"下一步","status":"1"})
            }
        }
    })
});
router.post('/doReg2', function(req, res, next) {
    var prevnum = req.body.prevNum;
    var service = req.session.prevNum;
   if(service!==prevnum){
       req.json({'msg':'验证失败',"status":"0"})
   }else{
       req.json({'msg':'验证成功',"status":"1"})
   }
})
router.post('/doReg3', function(req, res, next) {
    var phone = req.body.phone;
    var password = req.body.password;
    DB.Updata("user",{phone,$set:{password}},function(err,data){
        if(err){
            res.json({'msg':"注册失败","status":"0"})
        }else{
            if(data.length<0){
                res.json({'msg':"注册失败","status":"0"})
            }else{
                res.json({'msg':"注册成功","status":"1"})
            }
        }
    })
});


module.exports = router;
