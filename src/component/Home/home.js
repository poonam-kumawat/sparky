import React, { useState } from "react";
import "./home.css";

//svgs
import logo from "./../../assets/svg/logo.svg";
import hamburger from "./../../assets/svg/hamburger.svg";
import close from "./../../assets/svg/close.svg";
import mobMenuImage from "./../../assets/svg/mobMenuImage.svg";

const Home = () => {
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
                <a href="/">HOME.</a>
              </li>
              <li>
                <a href="/">ABOUT US.</a>
              </li>
              <li>
                <a href="/">CONTACT.</a>
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
      </div>
    </div>
  );
};

export default Home;
