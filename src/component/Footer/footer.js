import React from "react";

import "./footer.css";

import footerLogo from "./../../assets/svg/footerLogo.svg";
import facebook from "./../../assets/svg/Facebook.svg";
import twitter from "./../../assets/svg/Twitter.svg";
import instagram from "./../../assets/svg/Instagram.svg";
import phone from "./../../assets/svg/Phone.svg";
import mail from "./../../assets/svg/Letter.svg";
import line from "./../../assets/svg/Line.svg";

const Footer = () => {
  return (
    <div className="footerWrap">
      <div className="container footerContent">
        <div className="lg:grid lg:grid-cols-2 upper-footer">
          <div className="pb-4">
            <img src={footerLogo} alt="img"></img>
          </div>
          <div className="grid grid-cols-2 lg:grid lg:grid-cols-2 ">
            <div className="">
              <p className="text-white text-1xl underline lg:text-center">
                About us
              </p>
              <p className="text-white text-1xl underline lg:text-center">
                Follow us
              </p>
              <div className="flex justify-between   lg:justify-evenly">
                <img src={facebook} alt="img" className="w-8"></img>
                <img src={twitter} alt="img" className="w-8"></img>
                <img src={instagram} alt="img" className="w-8"></img>
              </div>
            </div>
            <div className="">
              <p className="text-white text-1xl underline lg:text-center">
                Contact us
              </p>
              <p className="text-white text-1xl  flex lg:justify-center">
                <img src={phone} alt="img" className="w-9 pr-4"></img>+91
                923456123
              </p>
              <p className=" hidden lg:text-white lg:text-1xl lg:flex  lg:pl-10 ">
                <img src={mail} alt="img" className="w-12 pr-3"></img>
                sparky.support@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="pt-20 pb-20 hidden md:block">
          <img src={line} alt="img"></img>
        </div>
        <div className="lg:float-right pb-2">
          <div className="flex justify-between">
            <p className="text-white text-xl pr-5">FAQ</p>
            <p className="text-white text-xl pr-5">Privacy</p>
            <p className="text-white text-xl">Terms and Service</p>
          </div>
        </div>
        <div className="text-center lg:pt-20 rightReserved">
          <p className="text-white text-xl">
            2023 © Sparky.Ltd | All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
