import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Home from './component/Home.js';
import Find from './component/Find.js';
import User from './component/User.js';
import Login from './component/Login.js';
import Order from './component/Order.js';
// import OrderAll from './component/OrderAll.js';
import Reg from './component/Reg.js';
import Reg2 from './component/Reg2.js';
import Seller from './component/Seller.js';
import PlaceOrder from './component/PlaceOrder.js';
import Collections from './component/Collections.js';

ReactDOM.render(
    <Router history={browserHistory} >
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="find" component={Find} />
                <Route path="user" component={User} />
                <Route path="login" component={Login} />
                <Route path="order" component={Order} />
                {/*<Route path="order_all" component={OrderAll} />*/}
                <Route path="reg" component={Reg} />
                <Route path="reg2" component={Reg2} />
                <Route path="seller_details/:aid" component={Seller} />
                <Route path="place_order" component={PlaceOrder} />
                <Route path="collections" component={Collections} />
            </Route>
    </Router>, 
document.getElementById('root'));
registerServiceWorker();
