import React from 'react';
import Footer from './Footer.js';
import './static/css/hwcss/user.css';
import {Link } from 'react-router';
import $ from "jquery";
class User extends React.Component{
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
            
            <div className="user">
                <Footer/>
                <header className="header">
                    <h2>我的
                    <Link to="/reg"><i className="iconfont">&#xe77e;</i></Link>
                    <i className="iconfont">&#xe65a;</i>
                    </h2>
                </header>
                <div className="user_info">
                    <i className="iconfont">&#xe74d;</i>

                    <div className="nologin">
                        <h4><Link to="login">立即登录</Link></h4>
                        <p>登录后享更多特权</p>
                        <i className="iconfont">&#xec6e;</i>
                    </div>
                    <div className="logined">
                        <h4>xxxxx</h4>
                        <p>133****3333</p>
                        <i className="iconfont">&#xec6e;</i>
                    </div>
                </div>
                <div className="nonav">
                    <ul>
                        <li>
                            <i className="iconfont">&#xe615;</i>
                            <span>钱包</span>
                        </li>
                        <li>
                            <i className="iconfont">&#xe606;</i>
                            <span>优惠</span>
                        </li>
                        <li>
                            <i className="iconfont">&#xe644;</i>
                            <span>积分</span>
                        </li>
                    </ul>
                </div>
                <div className="naved">
                    <ul>
                        <li>
                            <i className="iconfont">0.00元</i>
                            <span>钱包</span>
                        </li>
                        <li>
                            <i className="iconfont">0个</i>
                            <span>优惠</span>
                        </li>
                        <li>
                            <i className="iconfont">0分</i>
                            <span>积分</span>
                        </li>
                    </ul>
                </div>
                <div className="address">
                    <ul>
                        <li>
                            <i className="iconfont">&#xe637;</i>
                            <a>收货地址</a>
                        </li>
                        <li>
                            <i className="iconfont">&#xe68d;</i>
                            <Link to="collections">我的收藏</Link>
                        </li>
                    </ul>
                </div>
                <div className="ele">
                    <ul>
                        <li>
                            <i className="iconfont">&#xe681;</i>
                            <a>推荐有奖</a>
                        </li>
                        <li>
                            <i className="iconfont">&#xe681;</i>
                            <a>积分商城</a>
                        </li>
                        <li>
                            <i className="iconfont">&#xe605;</i>
                            <a>饿了么会员卡</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default User;