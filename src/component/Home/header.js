import React, { useEffect, useState } from "react";
import "./home.css";
import { Outlet, Link } from "react-router-dom";

//svgs
import logo from "./../../assets/svg/logo.svg";
import hamburger from "./../../assets/svg/hamburger.svg";
import close from "./../../assets/svg/close.svg";
import mobMenuImage from "./../../assets/svg/mobMenuImage.svg";
import { useRef } from "react";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const headerRef = useRef(null);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleClickOutside = () => {
    setShowNavbar(false);
  };

  useEffect(() => {
    if (showNavbar) document.body.className = "freeze";
    else document.body.className = "";
  }, [showNavbar]);

  return (
    <div
      className="headerWrap"
      onMouseLeave={handleClickOutside}
      ref={headerRef}
    >
      <div className="header">
        <nav className="Nav-bar">
          <div className="header-content">
            <img src={logo} alt="logo_img" />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={hamburger} alt="hamburger" className="w-20 h-20" />
          </div>
          <div className={`nav-menu  ${showNavbar && "active"}`}>
            <ul className="content-menu" onClick={handleShowNavbar}>
              <div className="Mobmenu-icon">
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
                <Link to="/aboutus">ABOUT US.</Link>
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
