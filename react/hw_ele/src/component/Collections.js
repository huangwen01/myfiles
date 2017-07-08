import React from 'react';
import './static/css/hwcss/collection.css';
import {Link} from 'react-router'
class Collections extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="coll_content">
                <header className="header">
                    <h2><Link to="user"><i className="iconfont">&#xe600;</i></Link>收藏</h2>
                </header>
                <div className="content_orders">
                    <ul>
                        <li>
                            <img src="img/hw/orders1.jpg" alt=""/>
                            <h4>舌尖味道&gt;<span>取消收藏</span></h4>
                            <span>2017-1-1</span>
                            <p>土豆丝等7件商品 <br/>
                                <span>￥100块</span>
                            </p>
                        </li>
                    </ul>

                </div>
                <footer>
                    <h3>展开超出范围的商家</h3>
                </footer>
            </div>
        )
    }
}
export default Collections;