var express = require('express');
var router = express.Router();
var DB=require('../../model/db.js');
var HOST='';
var multiparty=require('multiparty');

//静态web服务的配置方法
router .use('/public',express.static('public'));
//static\upload\IyZPkLv2CQwmRo6kXQ-1ywS9.jpg因为路径是有static

router.use(function(req, res, next){

    //console.log(req.headers);
    HOST='http://'+req.headers.host+'/';
    next();
})
/* GET home page. */
router.get('/', function(req, res) {
    DB.Find('trade',{},function(err,result){
        if(err){
            console.log(err);
        }else{
            res.render('admin/trade', {host:HOST ,list:result});
        }
    })

});
router.get('/add',function(req,res){
    res.render('admin/trade/add',{host:HOST})
});
router.post('/doAdd',function(req,res){
    var form = new multiparty.Form();
    form.uploadDir='public/upload';//图片上传后存储的路径
    form.parse(req, function(err,fields,files) {
        // console.log(fields);
        // console.log(files);
        var title=fields.title[0];
        var description=fields.description[0];
        var address=fields.address[0];
        var phone=fields.phone[0];
        var old_price=fields.old_price[0];
        var price=fields.price[0];
        var status=fields.status[0];
        var add_time=fields.addtime[0];
        var img=files.img[0].path;
        DB.Insert("trade",
            {"title":title,"description":description,"img":img,"address":address,"phone":phone,"old_price":old_price,"price":price,"status":status,"add_time":add_time},
            function(err,result){
                if(err){
                    console.log(err);
                }
                res.redirect('./');//重定向
            })
    })
})
router.get('/edit',function(req,res){
    var id=req.query.id;
    DB.FindId('trade',id,function(err,data){
        res.render('admin/trade/edit',{

            host:HOST,   /*每一个后台页面都要把host*/

            list:data

        })
        // console.log(data);
    })
})
router.post('/doEdit',function(req,res){
    var form = new multiparty.Form();
    form.uploadDir='public/upload';//图片上传后存储的路径
    form.parse(req, function(err, fields, files) {
        // console.log(fields);
        var id=fields.id[0];
        // console.log(files);
        var title=fields.title[0];
        var description=fields.description[0];
        var address=fields.address[0];
        var phone=fields.phone[0];
        var old_price=fields.old_price[0];
        var price=fields.price[0];
        var status=fields.status[0];
        var add_time=fields.addtime[0];
        var oldimg=fields.oldimg[0];


        if(files.img[0].originalFilename==""){
            var img=oldimg;
        }else{
            var img=files.img[0].path;
        }


        DB.Updata("trade",
            id,
            {"title":title,"description":description,"img":img,"address":address,"phone":phone,"old_price":old_price,"price":price,"status":status,"add_time":add_time},
            function(err,result){
                if(err){
                    console.log(err);
                }
                res.redirect('./');//重定向
            })
    })
})




router.get('/delete',function(req,res){
    var id=req.query.id;
    DB.Delete('trade',id,function(err,result){
        if(err){
            console.log("删除失败");
        }
        res.render('admin/trade/delete',{
            host:HOST,   /*每一个后台页面都要把host*/
        })
    })
})


router.get('/updateStatus',function(req,res){
    var status=req.query.status;
    var aid=req.query.id;
    // console.log(status);
    // console.log(aid);
    if(status==1){
        status=0
    }else{
        status=1
    }
    // console.log(status);
    DB.Updata('trade',aid,{$set:{"status":status}},function(err,result){
        if(err){
            console.log(err);
        }
    })
})
module.exports = router;
