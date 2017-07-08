var express = require('express');
var router = express.Router();

var user= require("./admin/user");
var admin=require ("./admin/admin");
var trade=require("./admin/trade");
var order=require("./admin/order");

router.use("/admin",admin);
router.use("/trade",trade);
router.use("/order",order);
router.use("/user",user);

module.exports = router;
