import React, { useState } from 'react';
import './home.css';

const Home =()=> {  
  const [showNavbar, setShowNavbar] = useState(false)
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
    return (
      <div className='headerWrap'>

        <div className='header'>
        <nav className='Nav-bar'>
        <div className='header-content'>
            <img src="/assets/svg/logo.svg" alt='logo_img'/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>          
            <img src="/assets/svg/hamburger.svg" alt='hamburger' className='w-20 h-20'/>          
        </div>
        <div className={`nav-menu  ${showNavbar && 'active'}`}>
            <ul className='content-menu'>
            <div className="Mobmenu-icon" onClick={handleShowNavbar}>          
            <img src="/assets/svg/close.svg" alt='close' className='w-10 float-right mt-4 mr-5'/>          
        </div>
              <li>
                <a href='/'>HOME.</a>
              </li>
              <li>
                <a href='/'>ABOUT US.</a>
              </li>
              <li>
                <a href='/'>CONTACT.</a>
              </li>
              <li>
              <div className='content-btn'>
            <button className='text-white font-bold py-2 px-12 align-middle inline-flex  btnlogin'>Login</button>
        </div>
              </li>
              <li>
              <div className="Mob-img">          
            <img src="/assets/svg/mobMenuImage.svg" alt='close' className='absolute bottom-0 left-10'/>          
        </div>
              </li>
            </ul>

        </div>
        
        </nav>

        </div>
      </div>
    );
  
}
 
export default Home;