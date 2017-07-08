import React from 'react';
import './static/css/hwcss/reg.css';
import axios from 'axios'
import {Link } from 'react-router';
import $ from 'jquery'
class Reg extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:"获取验证码",
            disable:"",
            flag:false,
            time:""
        }
        this.getPhone=this.getPhone.bind(this)
        this.nextstep=this.nextstep.bind(this)
    }
    componentDidMount(){
        //  调整比例
		var style=document.createElement("style");
		style.className="font625";
		var str=`html{font-size: 62.5%; background-color:#f5f5f5;}
        body{font-size: 1.6rem;margin-bottom:5rem; }
        `;
        style.innerHTML=str;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    getPhone(){
        
        var _that=this;
        var count=30;
        var getphone=this.refs.getphone.value;
        console.log(getphone)
        var timer="";
        // 正则匹配手机号
        if(!(/^1[34578]\d{9}$/.test(getphone))){
			alert('请输入正确的手机号码')
		}else{
            $("#getprev").css("background","#ccc")
            var url="http://127.0.0.1:8000/api/doReg1";
            axios.post(url,{getphone})
            .then(function(response){
                var data=response.data.prevNum;
                console.log(data)
                var newdata=sessionStorage.setItem("prevn",data);
                if (response.data.status==0) {
                    alert(response.data.msg);
                }else{
                    timer=setInterval(function(){
                        count--;
                        _that.setState({
                            num:count,
                            disable:"disable",
                            time:timer
                        })
                        if(count==0){
                            clearInterval(timer);
                        $("#getprev").css("background","red")
                            _that.setState({
                                num:"重新获取",
                                disable:""
                    })
                    
                    sessionStorage.removeItem("prevn")
                        }
                    },300)
                }
                
            })
            .catch(function(err){
                console.log(err)
            })
        }
    }
    nextstep(){
        
        var _that=this;
        var num=sessionStorage.getItem('prevn');
        // console.log(num)
        var numbers=this.refs.numbers.value;
        var getphone=this.refs.getphone.value;
        if (num!=numbers||num==null) {
            _that.setState({
                flag:false
            })
            alert("请输入正确的验证码")
        }else{
            _that.setState({
                flag:true
            })
        }
    }
    render(){
        var selector=""
			if(this.state.flag==true){
                var _that=this;
                clearInterval(_that.state.time);
				    selector=<button id="nextstep" onClick={this.nextstep}><Link to="reg2">下一步</Link></button>
				}else{
				 	 selector=<button id="nextstep" onClick={this.nextstep}>下一步</button>			
				}
        return(
            <div className="reg_content">
                    <div className="reg_content_t">
                            <Link to="/user"><i className="iconfont">&#xe600;</i></Link>
                      
                        注册
                        <a>密码登录</a>
                    </div>
                    <section id="main">
                        <div className="phone">
                            <input type="text" ref="getphone" placeholder="手机号"/><button id="getprev" onClick={this.getPhone} disabled={this.state.disable}>{this.state.num}</button>
                            
                        </div>
                        <div className="case">
                            <input type="text" placeholder="验证码" ref="numbers" className="casenum"/>
                        </div>
                        
                        <div className="prompt">
                            温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="#">《用户服务协议》</a>
                        </div>
                       {
                        selector
                        }
                    </section>
                    
                    <section id="thirdlogin">
                        <h5></h5>
                        <div className="loginchannel">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="iconfont">&#xe66d;</i>
                                        <p>微信</p>
                                    </a>	
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="iconfont">&#xe67e;</i>
                                        <p>QQ</p>
                                    </a>	
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="iconfont">&#xe668;</i>
                                        <p>微博</p>
                                    </a>	
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="iconfont">&#xe601;</i>
                                        <p>淘宝</p>
                                    </a>	
                                </li>
                            </ul>
                        </div>
                    </section>
            </div>
        )
    }
}
export default Reg;