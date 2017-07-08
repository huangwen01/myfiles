import React from 'react';
import './static/css/hwcss/login.css';
import {Link } from 'react-router';
// import './static/css/hwcss/footer62.5.css';
class Login extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
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
            <div>
                <div className="headd">
			<Link to="user">
				<i className="iconfont">&#xe600;</i>
			</Link>
			密码登录
			<a href="#"></a>
		</div>
		<section id="main">
			<div className="phone">
				<input type="text" placeholder="手机号/邮箱/用户名"/>
			</div>
			<div className="password">
				<input type="text" placeholder="密码"/>
			</div>
			<button id="login">登录</button>
			<p className="forget"><a href="#">忘记密码？</a></p>
		</section>
            </div>
        )
    }
}
export default Login;