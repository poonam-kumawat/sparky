import React, { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";
import play from "../../assests/json/play.json";

import "./homepage.css";
// import arrow from "./../../assets/svg/arrow.svg";
// import styrda2 from "./../../assets/svg/styrda2.svg";
// import giphy from "./../../assets/svg/giphy.svg";
// import doubleAroww from "./../../assets/svg/doubleArrow.svg";
import live from "./../../assets/svg/liveStream.svg";
import gameNews from "./../../assets/svg/gameNews.svg";
import tour from "./../../assets/svg/Tournament.svg";
import drawer from "./../../assets/svg/drawer_svgrepo.com.svg";
import vector from "./../../assets/svg/Vector.svg";
import fire from "./../../assets/svg/fire-2_svgrepo.com.svg";



const Homepage = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
    lottie.loadAnimation({
      container: document.querySelector("#video_link"),
      animationData: play,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  });

  return (
    <div className="Home">
          <div className="content-home">
        <div className="container lg:grid grid-cols-2 lg:mx-5">
          <div className="leftWrap pt-20 pb-18" data-aos="fade-right">
            <h1 className="text-white md:pt-10 md:text-left  text-5xl md:text-6xl">
              Sparky:The Ultimate Game{" "}
            </h1>
            <h1 className="text-white pt-10 text-left text-xl">
              Immerse yourself in thrilling team-based battles with Sparky game.
              Choose unique heroes, strategize with teammates, and dominate the
              lanes to claim victory.
            </h1>
            <div className="content-btn pt-8  md:text-left">
              <button className="text-white text-2xl font-bold py-3 px-12  inline-flex btnDownload">
                Download
              </button>
            </div>
          </div>
          <div className="rightWrap hidden lg:block absolute right-0 pt-16">
            <img src="/assets/svg/styrda.svg" alt="img"></img>
          </div>
        </div>
      </div>
      <div className="aboutus">
        <div className="container pt-10 pb-10">
        <h1 className=" text-3xl md:text-6xl text-[#14C2A3] text-center md:pt-5 md:px-12">YOU ARE MOST WELCOME IN GAMING WORLD.</h1>
          <div className="md:grid md:grid-cols-3 md:pt-5">
            <div className="gameIntro p-8 mx-3 my-3 md:my-0  ">
              <div className="liveImg">
              <img src={live} alt="img" className="liveStreamImg"></img>
              </div>
              <h5 className="text-3xl text-white text-center pb-3 pt-3 border-b-2 border-[#14C2A3]">LIVE STREAMING</h5>
              <p className="text-1xl text-center text-[#BECCC9]">When unknown printer took type and scrambled it to make type specimen book centuries,</p>
            </div>
            <div className="gameIntro p-8 mx-3 my-3 md:my-0 ">
              <div className="liveImg">
              <img src={gameNews} alt="img" className="liveStreamImg"></img>
              </div>
              <h5 className="text-3xl text-white text-center pb-3 pt-3 border-b-2 border-[#14C2A3]">GAME NEWS</h5>
              <p className="text-1xl text-center text-[#BECCC9]">When unknown printer took type and scrambled it to make type specimen book centuries,</p>
            </div>
            <div className="gameIntro p-8 mx-3 my-3 md:my-0 ">
              <div className="liveImg">
              <img src={tour} alt="img" className="liveStreamImg"></img>
              </div>
              <h5 className="text-3xl text-white text-center pb-3 pt-3 border-b-2 border-[#14C2A3]">GAME TOURNAMENTS</h5>
              <p className="text-1xl text-center text-[#BECCC9]">When unknown printer took type and scrambled it to make type specimen book centuries,</p>
            </div>
            
          </div>
            
             
                   
        </div>
      </div>
      <div className="section_3">
        <div className="container pt-10 pb-10">
        <div className="works">
        <h1 className="text-[#14c2a3] text-4xl ">HOW IT WORKS </h1>
        <h5 className="text-white text-3xl py-3">How To Participate</h5>
        <div className="md:grid md:grid-cols-3 ">
          <div className="drawer m-2">
          <img src={drawer} alt="img" className="w-10 py-3"></img>
          <p className="text-3xl text-white">Submit KYC</p>
          <p className="text-1xl text-[#BECCC9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="drawer m-2">
          <img src={vector} alt="img" className="w-10 py-3"></img>
          <p className="text-3xl text-white">Verify Wallet</p>
          <p className="text-1xl text-[#BECCC9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="drawer m-2">
          <img src={fire} alt="img" className="w-10 py-3"></img>
          <p className="text-3xl text-white">Start Staking</p>
          <p className="text-1xl text-[#BECCC9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        </div>
          
        </div>
      </div>
      <div className="section_4">
        <div className="container pt-10 pb-10">
          
        </div>
      </div>
      <div className="section_5">
        <div className="container pt-10 pb-10">
          
        </div>
      </div>

    </div>
  );
};

export default Homepage;
