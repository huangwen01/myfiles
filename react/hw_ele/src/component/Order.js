import React from 'react';
import $ from "jquery";
import Footer from './Footer.js';
import './static/css/hwcss/orders.css';
import {Link } from 'react-router';
class Order extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        if( $(".font625")){
           $(".font625").remove()
      }
    }
    render(){
        return(
            <div className="order_content">
                <Footer/>
                <header className="header">
                    <h2>订单</h2>
                </header>
                <div className="no_log_content">
                    <img src="https://fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif" alt=""/><br/>
                    <span>登录后查看外卖订单</span><br/>
                    <button>立即登录</button>
                </div>

                <div className="login_content">
                    <div className="orders_top">
                        <h4>我的订单 <Link to="order_all"><span>全部订单 &gt;</span></Link></h4>
                            <div className="record">
                                <img src="./img/hw/record.jpg" alt=""/>
                                <h3>近三个月无外卖订单记录</h3>
                                <p>
                                    查看三个月前的外卖订单
                                </p>
                            </div>
                    </div>
                    <div className="orders_center">
                        <h4>附近买过 </h4>
                        <div className="seller">
                            <img src="./img/hw/seller.jpg" alt=""/>
                            <h3>附近暂无买过的商家</h3>
                            <p>
                                配送范围内买过的商家会出现在这里
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Order;