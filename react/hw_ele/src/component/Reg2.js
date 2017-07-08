import React from 'react';
import './static/css/hwcss/reg.css';
import './static/css/hwcss/reg2.css';
import {Link } from 'react-router';
import axios from 'axios'
class Reg2 extends React.Component{
    constructor(props){
        super(props)
        this.setPwd=this.setPwd.bind(this)
    }
    componentDidMount(){
		var style=document.createElement("style");
		style.className="font625";
		var str=`html{font-size: 62.5%; background-color:#f5f5f5;}
        body{font-size: 1.6rem;margin-bottom:5rem; }
        `;
        style.innerHTML=str;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    setPwd(){
        var password=this.refs.password.value;
        var prevpwd=this.refs.prevpwd.value;
        if (!( /^[0-9a-zA-Z_]{6,}$/.test(password))) {
            alert("密码由字母数字下划线组成，且长度不低于六位")
        }else if (password!==prevpwd) {
            alert("密码与确认密码必须保持一致")
        }else{
            var url= "http://127.0.0.1:8000/api/doReg2";
           axios.post(url,{
					password
				})
				.then(function (response) {
					if(response.data.status==0){
						alert(response.data.msg)
					}else{
						alert(response.data.msg);
						// browserHistory.push('/user');
					}
				})
				.catch(function (error) {
					console.log(error)
				})
        }
    }
    render(){
        return(
            <div className="reg_content">
                <div className="reg_content_t">
                            <Link to="/reg"><i className="iconfont">&#xe600;</i></Link>
                      
                        注册
                        <a href="#"></a>
                    </div>
                    <section id="main">
                        <p className="setinfo">设置登录密码后，可以使用手机号+密码登录，请牢记</p>
                        <div className="setpassword">
                            <input type="password" placeholder="密码" className="password" ref="password"/>
                        </div>	
                        <div className="prevpwd">
                            <input type="password" placeholder="确认密码" className="prevpassword" ref="prevpwd"/>
                        </div>
                        <p className="passlength">密码长度6-20个字符</p>
                        <button id="login" onClick={this.setPwd}>确定</button>
                    </section>
            </div>
        )
    }
}
export default Reg2;