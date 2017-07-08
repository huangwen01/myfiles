import React from 'react';
import './static/css/hwcss/find.css';
import './static/css/hwcss/footer.css';
import Footer from './Footer.js';
import $ from "jquery";
class Find extends React.Component{
    constructor(props){
        super(props)
    }
    ComponentDidMount(){
        if( $(".font625")){
           $(".font625").remove()
      }
    }
    render(){
        return(
            <div className="find">
                <Footer/>
                <header className="header">
                    <h2>发现</h2>
                </header>
                <div className="nav">
    <ul>
        <li>
            <h3>积分商城</h3>
            <span>0元好物在这里</span>
            <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt=""/>
        </li>
        <li>
                <h3>美味爆料</h3>
                <span>冰爽美食吃吃吃</span>
                <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" alt=""/>


        </li>
        <li>
            <h3>推荐有奖</h3>
            <span>5元现金拿不停</span>
            <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt=""/>
        </li>

    </ul>
    <ul>
        <li>
        <h3>积分商城</h3>
        <span>0元好物在这里</span>
        <img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" alt=""/>
    </li>
        <li>
            <h3>积分商城</h3>
            <span>0元好物在这里</span>
            <img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt=""/>
        </li></ul>
</div>
<div className="banner">
    <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/" alt=""/>
</div>
<div className="section">
    <div className="section_top">
        <h3>
            <span className="line"></span>
            <i className="iconfont">&#xe614; </i> 限时好礼
            <span className="line"></span><br/>
            <span>你的口味,我懂得</span>
        </h3>
    </div>
    <div className="section_center">
        <ul>
            <li>
                <img src="https://fuss10.elemecdn.com/0/53/47a80976e90c99f40b745cde5246fjpeg.jpeg?imageMogr/format/webp/" alt=""/>
                <p>iPhone 7 32G</p>
                <span>￥4499</span>
            </li>
            <li>
                <img src="https://fuss10.elemecdn.com/8/1e/1f4fdd026e7a1550490515df1c899jpeg.jpeg?imageMogr/format/webp/" alt=""/>
                <p>3C爆款转出来！</p>
                <span>￥4499</span>
            </li>
            <li>
                <img src="https://fuss10.elemecdn.com/0/c9/1b2af1356945e512d32ef2203fcd5jpeg.jpeg?imageMogr/format/webp/" alt=""/>
                <p>PPTV聚力VIP月卡</p>
                <span>299积分</span>
            </li>
        </ul>
    </div>
    <div className="section_bottom">
        <span>查看更多>></span>
    </div>
</div>
            </div>
        )
    }
}
export default Find;