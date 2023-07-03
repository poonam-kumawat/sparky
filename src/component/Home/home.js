import React, { Component } from 'react';
import './home.css';

 
class Home extends Component {
  render() {
    return (
      <div className='headerWrap fixed'>
        <div className='header'>
        <div className='header-content'>
            <img src="/assets/svg/logo.svg" alt='logo_img'/>
        </div>
        <div className='content-menu'>
            <h1>HOME.</h1>
            <h1>ABOUT US.</h1>
            <h1>CONTACT.</h1>
        </div>
        <div className='content-btn'>
            <button className='text-white font-bold py-2 px-12 align-middle inline-flex btnDownload'>Login</button>
        </div>

        </div>
      </div>
    );
  }
}
 
export default Home;