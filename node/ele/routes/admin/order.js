var express = require('express');
var router = express.Router();
var HOST='';
var db=require("../../model/db");
// var bodyParser=require("body-parser")
router.use(function(req, res, next){

    //console.log(req.headers);
    HOST='http://'+req.headers.host+'/';
    next();
})
var _length="";
/* GET home page. */
router.get('/', function(req, res, next) {
    db.Find("orders",{},function(err,data){

        _length=data.length
    })
    var count=""
    console.log(req.query.count);
    if(req.query.count==undefined){
        count=1;
    }else{
        parseInt(req.query.count)-1;
    }
    count1=count*5;
    db.findMore("orders",{},count1,5,function(err,data){
        // console.log(Math.ceil(_length/5));
        res.render("./admin/order/index",{
            host:HOST,
            data:data,
            alength:Math.ceil(_length/5),
            count:count
        })
    })


});

//添加订单信息
router.get("/add",function(req,res,next){
    res.render("./admin/order/add",{
        host:HOST
    })
})
router.post("/add",function(req,res,next){
    db.Insert("orders",{ "order_id": req.body.order_id,
        "product_id": req.body.product_id,
        "product_title": req.body.product_title,
        "price": req.body.price,
        "count": req.body.count,
        "all_price": req.body.all_price,
        "uid": req.body.uid,
        "username": req.body.username,
        "name": req.body.name,
        "phone": req.body.phone,
        "add_time": req.body.add_time,
        "status":req.body.status },function(err,data){
        if(err){
            console.log("添加失败");
        }
        res.redirect("/admin/order")
    })
})

//修改信息
router.get("/updata",function(req,res,next){
    db.FindId("orders",req.query.id,function(err,data){
        // console.log(data);
        // console.log(data[0].staus)
        res.render("./admin/order/updata",{
            host:HOST,
            data:data[0]
        })
    })

})

router.post("/updata",function(req,res){
   
    db.Updata("orders",req.body._id,{ "order_id": req.body.order_id,
        "product_id": req.body.product_id,
        "product_title": req.body.product_title,
        "price": req.body.price,
        "count": req.body.count,
        "all_price": req.body.all_price,
        "uid": req.body.uid,
        "username": req.body.username,
        "name": req.body.name,
        "phone": req.body.phone,
        "add_time": req.body.add_time,
        "status":req.body.status },function(err){
        if(err){
            console.log("添加失败");
        }
        res.redirect("/admin/order")
    })
})
router.get("/delete",function(req,res){
    db.Delete("orders",req.query.id,function(err,data){

        res.redirect("/admin/order")
    })
})

router.get("/updataStatus",function(req,res){
    // db.FindId("orders",req.query.id,function(err,data){
    //     // console.log(data[0].status==0);
    //     if(data[0].status==0){
    //         db.Updata("orders",req.query.id,{$set:{"status":1}},function(err,data){
    //             // console.log(data);
    //             res.redirect("/admin/order")
    //         })
    //     }else{
    //         db.Updata("orders",req.query.id,{$set:{"status":0}},function(err,data){
    //             res.redirect("/admin/order")
    //         })
    //     }var id=$(this).closest("tr").find("td").eq(0).text()
    // })
    var status=req.query.status;
    var aid=req.query.id;
    db.FindId("orders",req.query.id,function(err,data){
        // console.log(data[0].status==0);
        if(data[0].status==0){
            db.Updata("orders",aid,{$set:{"status":1}},function(err,data){
                // console.log(data);
                // res.redirect("/admin/order")
                res.json({"status":1})
            })
        }else{
            db.Updata("orders",req.query.id,{$set:{"status":0}},function(err,data){
                // res.redirect("/admin/order")
                res.json({"status":1})
            })
        }
    })
})
module.exports = router;



