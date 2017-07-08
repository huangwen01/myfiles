import React from 'react';
import './static/css/hwcss/footer.css';
import {Link } from 'react-router';
class Footer extends React.Component{

    render(){
        return(
            <div className="fts">
                <ul>
                    <li><Link to="/home" activeClassName="active" onlyActiveOnIndex={true}><i className="iconfont">&#xe639;</i><span>外卖</span></Link></li>
                    <li><Link to="/find" activeClassName="active"><i className="iconfont">&#xe609;</i><span>发现</span></Link></li>
                    <li><Link to="/order" activeClassName="active"><i className="iconfont">&#xe647;</i><span>订单</span></Link></li>
                    <li><Link to="/user" activeClassName="active"><i className="iconfont">&#xe604;</i><span>我的</span></Link></li>
                </ul>
            </div>
        )
    }
}
export default Footer;