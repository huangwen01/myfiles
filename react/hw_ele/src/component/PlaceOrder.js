import React from 'react';
import {Link} from "react-router";
import './static/css/hwcss/lcy_place_order.css';
class PlaceOrder extends React.Component{
    constructor(props){
        super(props)
        this.state={
            aid:""
        }
    }
    componentDidMount(){
        var aid=this.props.params.aid;
        this.setState({
            aid:aid
        })
		var style=document.createElement("style");
		style.className="font625";
		var str=`html{font-size: 62.5%; background-color:#f5f5f5;}
        body{font-size: 1.6rem;margin-bottom:5rem; }
        .fts{ width:100%; height:5rem; background-color:#f7f7f7;position:fixed; bottom:0px; border-top:1px solid #c8c8c8;}
        .fts ul{overflow: hidden}
        .fts ul li{float:left; width:25%;text-align:center;font-size:1.2rem}
        .fts ul li i{display:block;margin-top:1rem}`;
        style.innerHTML=str;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    render(){
        return(
            <div className="pla_ord">
                    <div id="header">

                    <div className="header-Return">
                        <Link to="home"><i className="iconfont">&#xe600;</i></Link>
                    </div>
                    <div className="header-title">
                        订单送至
                    </div>

                    <div > </div>
                </div>
                <div className="address">
                    <p className="address-top">深圳世纪东方老师</p>
                    <p className="Customer">史蒂夫 <span className="Telephone">123123123</span></p>
                </div>
                <div id="main">



                    <div className="Estimated-time">
                            <p className="Estimated-time-top">
                            <span> 尽快送达 | 预计12:06</span>
                            </p>
                    </div>
                    <div className="Payment-method">
                        <span>在线支付</span>
                    </div>

                    <div className="Order-information">
                        <div className="Order-information-title">
                            <img src="//fuss10.elemecdn.com/c/22/44da5ae0288bf75e0179e85e46abfpng.png" alt=""/>
                            <span>
                                饭戒（航城店）
                            </span>
                        </div>
                        <div className="Order-information-content">
                            <ul>
                                <li className="Package-name">
                                    <div className="Package-name-left">
                                        激情夏日C套餐
                                    </div>
                                    <div className="Package-name-right">
                                        <span className="num">x 2</span>
                                        <span className="Total">¥ 79.6</span>
                                    </div>

                                </li>
                                <li className="Lunch-box">
                                    <div className="Lunch-box-left">
                                        餐盒
                                    </div>
                                    <div className="Lunch-box-right">

                                        <span className="Total">¥ 9.6</span>
                                    </div>
                                </li>
                                <li className="Delivery-fee">

                                    <div className="Delivery-fee-left">
                                        配送费
                                    </div>
                                    <div className="Delivery-fee-right">

                                        <span className="Total">¥ 9.6</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Order-note">
                        <div  className="Flavor">

                                <div>
                                    订单备注
                                </div>
                                <div className="Flavor-right">
                                    口味、偏好等
                                </div>


                        </div>

                        <div  className="invoice">

                                <div>
                                    发票
                                </div>
                                <div>
                                    商家不支持开发票
                                </div>


                        </div>
                    </div>
                </div>

                <div id="footer">
                    <div className="footer-inner">
                        <div className="money">
                            <span>¥79.6</span>
                        </div>
                        <div className="Settlement">
                        <span>  去结算</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PlaceOrder;