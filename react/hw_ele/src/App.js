import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Link } from 'react-router';
import './component/static/css/swiper.css';
import './component/static/css/reset.css';
import './component/static/css/hwcss/footer.css';
// import Home from './component/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">


        {this.props.children}
      </div>
    );
  }
}

export default App;
