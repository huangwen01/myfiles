import React from 'react';
import seller from './static/json/seller.json'
import $ from 'jquery';
import axios from 'axios';
import './static/css/hwcss/lhj-seller.css';
import {Link } from 'react-router';
class Seller extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:seller,
            num:0,
            title:""
        }
        this.getData=this.getData.bind(this)
    }
    componentDidMount(){
        var aid=this.props.params.aid;
        var _that=this;
    
        
        // var num=0
        // tab切换
        var i=$("<i className='iconfont'>&#xe66f;</i>");
        $(".sub-nav ul>li").eq(0).addClass("list-active").append(i)
        $(".sub-nav ul>li").on("click",function(){
            // console.log($(this)[0].value)
            // num=$(this).value;
            $(this).addClass("list-active").siblings("li").removeClass("list-active")
            _that.setState({
                num:$(this)[0].value
            })
            
        })
        this.getData();
        
    }
    getData(){
        var aid=this.props.params.aid;
        var _that=this;
        var url="http://127.0.0.1:8000/api/home";
        var url2="http://127.0.0.1:8000/api/seller-title/?aid="+aid;
        axios.get(url)
        .then(function (res) {
        // 获取数据
            // console.log(res.data.data);
            var str=eval("("+res.data.data[res.data.data.length-1].description+")");
            _that.setState({
                list:str
            })
        })
        .catch(function (error) {
            // 获取主页数据失败
            console.log(error);
        });
        axios.get(url2).then(function(res){
                var title=res.data.data[0].title;
                _that.setState({
                    title:title
                })
        })

        // 拿到id  收藏用
        
        
        
        if (window.localStorage.getItem("sc")) {
            var storage=window.localStorage.getItem("sc");
            var storage1=JSON.parse(storage);
            for (var i = 0; i < storage1.length; i++) {
                // 进入页面判断是否收藏      显示
                if(storage1[i].aid==aid){
                    $('.cart').addClass("active").siblings(".sct").text("取消收藏");
                                    
                }          
            }
        }


        
        var obj={
            "aid":aid,
            "uid":"1",
            "title":_that.state.list.seller.name
        }
        
        // console.log(obj)
        $(".sc").click(function(){
            if ($('.cart').hasClass("active")) {
                $('.cart').removeClass("active").siblings(".sct").text("收藏");
            // 把当前商家的aid 存到localstorage          key取每个人用户id 
            // 取消收藏
                var storage=window.localStorage.getItem("sc");
                var storage1=JSON.parse(storage);
                for (var i = 0; i < storage1.length; i++) {
                    if (storage1[i].aid==aid&&storage1[i].uid=="1") {
                            
                            // 有相同的aid
                            // storage1.push(obj);
                            storage1.splice(i,1)
                            window.localStorage.setItem("sc",JSON.stringify(storage1))
                           return false
                        }
                }
                 
            }else{
                 $('.cart').addClass("active").siblings(".sct").text("取消收藏");
                //  收藏
                if (window.localStorage.getItem("sc")) {
                    // 有localstorage时点收藏
                    var storage=window.localStorage.getItem("sc");
                    var storage1=JSON.parse(storage);
                    for (var i = 0; i < storage1.length; i++) {
                        if (storage1[i].aid==aid&&storage1[i].uid=="1") {
                            
                            // 有相同的aid
                            // storage1.push(obj);
                            
                           return false
                        }
                        
                    }
                            storage1.push(obj)
                            window.localStorage.setItem("sc",JSON.stringify(storage1))
                }else{
                    // 没有localstorage时点收藏
                    var arr=[];
                    arr.push(obj);
                    window.localStorage.setItem("sc",JSON.stringify(arr))
                }

                 
            }
        })
    }

    render(){
        return(
            <div className="mySeller">
                <div className=" seller_header-warp">
                    <div className=" seller_header">
                        <div className=" seller_header-menu">

                            <div className="menu-l">
                                <Link to="/home"><i className="iconfont">&#xe600;</i></Link>
                            </div>
                            <div className="menu-r sc">
                                <i className="iconfont cart" >&#xe643;</i>
                                <i className="iconfont sct">收藏</i>
                            </div>
                        </div>
                        <div className=" seller_header-content">
                            <img src={this.state.list.seller.avatar} alt=""/>
                            <div className=" seller_header-content-title">
                                {/*<h1>台资味（深圳岗厦店）</h1>*/}
                                <h1>{this.state.title}</h1>
                                <div className="time">
                                    <span>{this.state.list.seller.description}</span>
                                    <p>{this.state.list.seller.deliveryTime}分钟送达</p><p>配送费¥{this.state.list.seller.deliveryPrice}</p>
                                </div>
                                <div className="notice">
                                    公告：<b>1-12点餐高峰时间段请提前下预定单</b>
                                </div>
                            </div>
                        </div>
                        <div className=" seller_header-footer">
                            <div className=" seller_header-footer-left">
                                <span>赠</span>
                                <p>{this.state.list.seller.supports[0].description}(不与其它活动同享)</p>
                            </div>
                            <div className=" seller_header-footer-right">
                                2个活动
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-tab">
                    <div className="nav-tab-left nav-active">
                        <h2>商品</h2>

                    </div>
                    <div className="nav-tab-right">
                        <h2>评价</h2>
                        <span>({this.state.list.seller.score})</span>
                    </div>
                </div>
                <div className="content">
                    <div className="sub-nav clear">
                        <ul>
                            {/*<li className="list-active" >
                                <span>
                                    <i className="iconfont">&#xe66f;</i>
                                   {this.state.list.goods[0].name}
                                </span>
                            </li>*/}
                            {/*<li>
                                <span>
                                    热销榜
                                </span>
                            </li>
                            <li>
                                <span>
                                    热销榜
                                </span>
                            </li>
                            <li>
                                <span>
                                    热销榜
                                </span>
                            </li>*/}
                            {   
                                this.state.list.goods.map((value,key)=>{
                                return <li  value={key} key={key}>
                                    <span>
                                        {value.name}
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="goods">
                        <div className="list-title">
                            <h3>热销榜</h3>
                            <b>大家喜欢吃,才是真的好吃</b>
                        </div>
                        
                        
                        
                        {/*<div className="goods-content">
                            <span className="goods-img">
                                    <img src="https://fuss10.elemecdn.com/6/54/d979bb1abc34ee262b88ca07537ecjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" alt=""/>
                            </span>
                            <div className="goods-content-title">
                                <h4>10寸苏丹王黄金果肉榴莲比萨</h4>
                                <div className="goods-letter">
                                    选用马来西亚准国宝级苏丹王D24黄金榴莲果肉制作，如奶油般丝滑口感，重塑你对榴莲的全新印象。
                                </div>
                                <div className="eval">
                                    <p>月售71份</p>
                                    <p>好评率100%</p>
                                </div>

                                <div className="price">

                                    <strong>98</strong>
                                    <div className="add-cart"><i className="iconfont">&#xe62c;</i></div>
                                </div>
                            </div>
                        </div>*/}

                        {   
                            this.state.list.goods[this.state.num].foods.map((value,key)=>{
                                return <div className="goods-content" key={key}>
                            <span className="goods-img">
                                    <img src={value.image} alt=""/>
                            </span>
                            <div className="goods-content-title">
                                <h4>{value.name}</h4>
                                <div className="goods-letter">
                                    {value.info}
                                </div>
                                <div className="eval">
                                    <p>月售{value.sellCount}份</p>
                                    <p>好评率{value.rating}%</p>
                                </div>

                                <div className="price">

                                    <strong>{value.price}</strong>
                                    <div className="add-cart"><i className="iconfont">&#xe62c;</i></div>
                                </div>
                            </div>
                        </div>

                            })
                        }
                    </div>
                </div>
                <div className="goods-footer">
                    <span className="goods-cart"></span>
                    <p>未选购商品</p>
                    <div className="account">
                        <Link to="place_order">
                            <span>￥20</span>起送
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Seller;