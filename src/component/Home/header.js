import React, { useState } from "react";
import "./home.css";
import { Outlet, Link } from "react-router-dom";

//svgs
import logo from "./../../assets/svg/logo.svg";
import hamburger from "./../../assets/svg/hamburger.svg";
import close from "./../../assets/svg/close.svg";
import mobMenuImage from "./../../assets/svg/mobMenuImage.svg";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="headerWrap">
      <div className="header">
        <nav className="Nav-bar">
          <div className="header-content">
            <img src={logo} alt="logo_img" />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={hamburger} alt="hamburger" className="w-20 h-20" />
          </div>
          <div className={`nav-menu  ${showNavbar && "active"}`}>
            <ul className="content-menu">
              <div className="Mobmenu-icon" onClick={handleShowNavbar}>
                <img
                  src={close}
                  alt="close"
                  className="w-10 float-right mt-4 mr-5"
                />
              </div>
              <li>
              <Link to="/">HOME.</Link>
              </li>
              <li>
              <Link to="/contact">ABOUT US.</Link>
              </li>
              <li>
              <Link to="/contact">CONTACT.</Link>
              </li>
              <li>
                <div className="content-btn">
                  <button className="text-white font-bold py-2 px-12 align-middle inline-flex  btnlogin">
                    Login
                  </button>
                </div>
              </li>
              <li>
                <div className="Mob-img">
                  <img
                    src={mobMenuImage}
                    alt="close"
                    className="absolute bottom-0 left-10"
                  />
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
      
    </div>
  );
};

export default Header;