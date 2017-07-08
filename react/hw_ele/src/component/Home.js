import React from 'react';
import Swiper from 'swiper';
import $ from "jquery";
import Footer from './Footer.js';
import axios from 'axios'
import './static/css/hwcss/index.css';
import {Link } from 'react-router';
import seller from './static/json/seller.json'
// import Swiper from './static/js/swiper.js';

// import './static/css/hwcss/footer62.5.css';
// import './static/css/hwcss/footer.css';
class Home extends React.Component{
    constructor(props){
        super(props),
        this.state={
            list:[]
        }
        
    }
    componentDidMount(){
        var _that=this;
        var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        //pagination : '#swiper-pagination1',
        loop : true
        });
      if( $(".font625")){
           $(".font625").remove()
      }
    
     this.getData();
   
    }
    getData(){
        var _that=this;
        axios.get('http://127.0.0.1:8000/api/home')
        .then(function (res) {
        // 获取主页数据
            // console.log(res.data.data);
            
            _that.setState({
                list:res.data.data.reverse()
            })
            // console.log(res.data.data)
        })
        .catch(function (error) {
            // 获取主页数据失败
            console.log(error);
        });
    }
    render(){
        return(
            <div className="home">
                <Footer/>
                  <header className="header">
                        <div className='search'>
                            <input type="text" name="" value=""/>
                            <span><i className="iconfont">&#xe69d;</i>搜索商家，商品名称</span>
                        </div>
                    </header>
                    <div className="focus">
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <ul className="focus_ul" >
                        <li><img src="img/hw/img01.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img02.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img03.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img04.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img05.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img06.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img07.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img08.jpg" alt=""/>美食</li>
                    </ul>
                </div>
                <div className="swiper-slide">
                    <ul className="focus_ul">
                        <li><img src="img/hw/img09.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img10.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img11.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img12.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img13.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img14.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img15.jpg" alt=""/>美食</li>
                        <li><img src="img/hw/img08.jpg" alt=""/>美食</li>
                    </ul>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </div>
    <div className="banner">
        <img src="img/hw/banner.jpg" alt=""/>
    </div>
    <div className="nav">
            <ul>
                <li>
                    <strong>满20减10</strong><br/>
                    <span>广深大聚惠</span>
                    <img src="img/hw/nav1.jpg" alt="" />
                </li>
                <li><strong>霸王餐</strong><br/>
                    <span>领20红包</span>
                    <img src="img/hw/nav2.jpg" alt="" /></li>
                <li><strong>营养快餐</strong><br/>
                    <span>15元吃饱</span>
                    <img src="img/hw/nav2.jpg" alt="" /></li>
                <li><strong>立减15元</strong><br/>
                    <span>周三菜系日</span>
                    <img src="img/hw/nav1.jpg" alt="" /></li>
            </ul>
        </div>
    <div className="recommend">
        <div className="recommend_top">推荐商家</div>
        <ul className="recommend_ul" ref="trade_ul">
            
                {
                    this.state.list.map((value,key)=>{
                        return <li key={key}>
                            <Link to={"seller_details/"+value._id}>
                                <div className="trade_top">
                                    <img src="https://fuss10.elemecdn.com/f/c8/cf714d24a0b5674f808e6a905a51djpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/" alt=""/>
                                    <p><strong>{value.title}</strong><span>票</span></p>
                                    <p>
                                        <span>
                                            <i className="iconfont">&#xe643;</i>
                                            <i className="iconfont">&#xe643;</i>
                                            <i className="iconfont">&#xe643;</i>
                                            <i className="iconfont">&#xe643;</i>
                                            <i className="iconfont">&#xe638;</i>
                                            <i>{value.old_price.split(",")[0]}</i>
                                        </span>
                                        <span>月售<em>{value.old_price.split(",")[1]}</em>单</span>
                                    </p>
                                    <p>
                                        <span>¥{value.price.split(",")[0]}起送 </span>
                                        <span>| 配送费¥{value.price.split(",")[1]}</span>
                                        <span>｜¥{value.price.split(",")[2]}/人</span>
                                        <span>900米</span>
                                    </p>
                                </div>
                                <div className="trade_bottom">
                                    <p>新用户下单立减17.0元 <span>还有活动</span></p>
                                    <p>满20减10,满60减20</p>
                                </div>
                            </Link>
                        </li>
                    })
                }

            
        </ul>
    </div>

            </div>
        )
    }
}
export default Home;