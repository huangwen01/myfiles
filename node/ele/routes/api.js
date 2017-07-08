var express = require('express');
var router = express.Router();
var DB = require('../model/db');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
var session = require('express-session');

//      跨域
router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
//获取主页数据
router.get('/home', function(req, res){
    DB.Find('trade', {}, function(err, data){
        res.json({"data" : data})

    })
})
//获取详情数据
router.get('/seller-title', function(req, res){
    var id=req.query.aid;
    // console.log(id);
    DB.FindId('trade',id, function(err, data){
        res.json({"data" : data})

    })
})
//注册1
var userid=""
var phone = ""
router.post('/doReg1',function(req,res){
    uphone = req.body.getphone;
    var longstr = '1,2,3,4,5,6,7,8,9,0,A,B,C,D,E,F,G,H,I,G,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
    var str = longstr.split(',');
    var prevNum = '';
    for(var i = 0; i < 6; i++) {
        prevNum += str[Math.floor(Math.random() * 36)];
    }

    DB.Find("user",{"phone":uphone},function(err,data){
        if(err){
            console('error');
        }else {
            phone=uphone
            if(data==""){
                res.json({'msg':"手机号可用","status":"1","prevNum":prevNum})
            }else{
                res.json({'msg':"手机号已被注册","status":"0"})
            }
        }
    })
})
router.post('/doReg2',function(req,res){
    var password=md5(req.body.password);
    console.log(password);
    DB.Insert("user",{"phone":phone,"password":password},function(err,data){
        if(err){
            res.json({'msg':"注册失败","status":"0"})
        }else{
            res.json({'msg':"注册成功","status":"1"})
        }
    })
})

module.exports = router;
