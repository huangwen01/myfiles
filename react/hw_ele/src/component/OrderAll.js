import React from 'react';
import Footer from './Footer.js';
import './static/css/hwcss/orders_all.css';
class OrderAll extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="order_all_content">
                <header className="header">
                    <h2><i className="iconfont">&#xe600;</i>订单</h2>
                </header>
                <div className="content">
                    <div className="content_top">
                        <h4>外卖</h4>
                    </div>
                    <div className="content_orders">
                        <ul>
                            <li>
                                <img src="img/hw/orders1.jpg" alt=""/>
                                <h4>舌尖味道&gt;<span>订单已完成</span></h4>
                                <span>2017-1-1</span>
                                <p>土豆丝等7件商品 <br/>
                                    <span>￥100块</span>
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
            <div className="od_footer">仅显示近一年外卖订单</div>
        </div>
        )
    }
}
export default OrderAll;