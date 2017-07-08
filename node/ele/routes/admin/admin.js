var express = require('express');
var router = express.Router();

var DB=require("../../model/db");
var multiparty = require('multiparty');

// var bodyParser=require('body-parser');
// router.use(bodyParser.urlencoded({ extended: false }));
//
// router.use(bodyParser.json());




// 用于绝对路径跳转
var HOST='';
router.use(function(req,res,next){
    HOST='http://'+req.headers.host+'/';
    next()
})


/* GET home page. */

router.get('/', function(req, res, next) {
    var _length='';
    var Page='';
    // 获取总条数
    DB.Find('admin',{},function(err,data){
            _length=data.length
        })

    // 上一页  传过来的
    var count=parseInt(req.query.count)-1;

    var count1=count*5;
    // 跳过第几条  显示5条


// 一开始显示5条
    DB.findMore('admin',{},count1,5,function(err,data){
        if(err){

        }else{
            // console.log(data)
            res.render('admin/admin',{

                host:HOST,
                list:data,
                count:count,
                Page:Math.ceil(_length/5)

            })
        }
    })
});

// 状态
router.get('/updata',function(req,res,next){
    db.FindId('admin',req.query.id,function(err,data){
        res.render()
    })
})


// router.get('/',function(req,res,next){
//     res.render('admin/admin/add',{
//     host:HOST,
//     })
// })

router.get('/add',function(req,res){
    res.render('admin/admin/add',{
        host:HOST,
    })
})

router.post('/doAdd',function(req,res){
    var form=new multiparty.Form()
    form.uploadDir='./public/upload'
        // 保存图片的路径
    form.parse(req,function(err,fields,files){

        // console.log(fields);
        var AdminName=fields.AdminName[0];
        var Name=fields.Name[0];
        var password=fields.password[0];
        var sex=fields.sex[0];
        var birthday=fields.birthday[0];
        var add_time=fields.add_time[0];
        var status=fields.status[0];
        var imgpath=files.face[0].path;
        DB.Insert('admin',{
            'AdminName':AdminName,
            'Name':Name,
            'password':password,
            'sex':sex,
            'birthday':birthday,
            'add_time':add_time,
            'imgpath':imgpath,
            'status':status
        },function(err,result){
            if(err){

                console.log('添加失败');
                return;
            }
            res.redirect('./')
        })

    })
})

// 删除
router.get('/delete',function(req,res){
    var id=req.query.id;
    DB.Delete('admin',id,function(err,result){
        if(err){
            console.log('删除失败');
        }
        res.render('admin/admin/delete',{
            host:HOST,
        })
    })

})

router.get('/edit',function(req,res){
    var id=req.query.id;
    DB.FindId('admin',id,function(err,data){
        res.render('admin/admin/edit',{
            host:HOST,
            list:data
        })
    })
})
// 设置路由更改状态
router.get('/updataStatus',function(req,res){
    var status=req.query.status;
    var aid=req.query.id;
    DB.FindId('admin',req.query.id,function(err,data){
        // console.log(data);
        if(data[0].status==0){
            DB.Updata('admin',aid,{$set:{'status':1}},function(err,data){
                res.json({"status":1})
            })

        }else {
            DB.Updata('admin',req.query.id,{$set:{"status":0}},function(err,data){
                res.json({"status":0})
            })
        }
    })

})



module.exports = router;
