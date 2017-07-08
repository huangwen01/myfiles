var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var DB = require('../../model/db');
var HOST = require('../../model/config1').config.HOST;
// console.log(HOST.config.HOST);
/* GET home page. */
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var datalength ="";
var allpage="";
var page = "";
router.get('/', function(req, res, next) {
    if(req.query.page=="undefined"){
        page=1
    }else{
        page=req.query.page
    }
    DB.Find("user",{},function(err,data){
          datalength=data.length;
    })
    var step = page *5;
    var allpage =Math.ceil(datalength/5);
    page = parseInt(page);
    DB.findMore('user',{},step,5,function(err,data){
        if(err){
            console.log(err)
        }
        res.render('admin/user/index', {
            host:HOST,
            data:data,
            allpage:allpage,
            page:page
        });
    })

});

router.post('/search', function(req, res, next) {
    var username = req.body.username;
    var phone = req.body.phone;
    var status = req.body.status;
    if(username=="" && phone==""&&status==""){
        searchinfo={}
    }else if(username=="" || phone=="" || status==""){
        searchinfo = {$or:[{username},{phone},{status}]}
    }else{
        searchinfo={username,phone,status}
    }
    DB.Find("user",searchinfo,function(err,data){
        if(err){
            console.log('err')
        }else{
            res.render('admin/user/index', {
                host:HOST,
                data:data
            });
        }
    })
});

router.get('/edit', function(req, res, next) {
    var id = req.query.id
    if(req.query.status=="1"){
        req.query.status=0
    }else{
        req.query.status=1
    }
    var status = req.query.status
    DB.Updata('user',id,{$set:{status:status}},function(err,data){
        if(err){
            console.log('用户状态修改失败')
        }else{
            console.log("用户状态修改成功")
            res.redirect('/admin/user')
        }
    })
});


router.get('/del', function(req, res, next) {
    var id = req.query.id
   // console.log(req.query.id)
   DB.Delete('user',id,function(err,data){
       if(err){
           console.log('数据删除失败')
       }else{
           res.render('admin/user/delete',{
               host:HOST
           })
           // console.log("数据删除成功")
           //res.redirect('/admin/user')
       }
   })
});


module.exports = router;
