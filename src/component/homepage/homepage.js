import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";
import play from "../../assests/json/play.json";

import "./homepage.css";
// import arrow from "./../../assets/svg/arrow.svg";
import styrda2 from "./../../assets/svg/styrda2.svg";
// import giphy from "./../../assets/svg/giphy.svg";
// import doubleAroww from "./../../assets/svg/doubleArrow.svg";
import member1 from "./../../assets/svg/teamplayer/member1.svg";
import member2 from "./../../assets/svg/teamplayer/member2.svg";
import member3 from "./../../assets/svg/teamplayer/member3.svg";
import live from "./../../assets/svg/liveStream.svg";
import gameNews from "./../../assets/svg/gameNews.svg";
import tour from "./../../assets/svg/Tournament.svg";
import drawer from "./../../assets/svg/drawer_svgrepo.com.svg";
import vector from "./../../assets/svg/Vector.svg";
import fire from "./../../assets/svg/fire-2_svgrepo.com.svg";
import facebook from './../../assets/svg/Facebook.svg';
import twitter from './../../assets/svg/Twitter.svg';
import instagram from './../../assets/svg/Instagram.svg';

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
          <h1
            data-aos="fade-up"
            className=" text-3xl md:text-6xl text-[#14C2A3] text-center md:pt-5 md:px-12"
          >
            YOU ARE MOST WELCOME IN GAMING WORLD.
          </h1>
          <div className="md:grid md:grid-cols-3 md:pt-5" data-aos="zoom-in">
            <div className="gameIntro p-8 mx-3 my-3 md:my-0  ">
              <div className="liveImg">
                <img src={live} alt="img" className="liveStreamImg"></img>
              </div>
              <h5 className="text-2xl md:text-3xl text-white text-center pb-3 pt-3 border-b-2 border-[#14C2A3]">
                LIVE STREAMING
              </h5>
              <p className="text-1xl text-center text-[#BECCC9]">
                When unknown printer took type and scrambled it to make type
                specimen book centuries,
              </p>
            </div>
            <div className="gameIntro p-8 mx-3 my-3 md:my-0 ">
              <div className="liveImg">
                <img src={gameNews} alt="img" className="liveStreamImg"></img>
              </div>
              <h5 className="text-2xl md:text-3xl text-white text-center pb-3 pt-3 border-b-2 border-[#14C2A3]">
                GAME NEWS
              </h5>
              <p className="text-1xl text-center text-[#BECCC9]">
                When unknown printer took type and scrambled it to make type
                specimen book centuries,
              </p>
            </div>
            <div className="gameIntro p-8 mx-3 my-3 md:my-0 ">
              <div className="liveImg">
                <img src={tour} alt="img" className="liveStreamImg"></img>
              </div>
              <h5 className="text-2xl md:text-3xl text-white text-center pb-3 pt-3 border-b-2 border-[#14C2A3]">
                GAME TOURNAMENTS
              </h5>
              <p className="text-1xl text-center text-[#BECCC9]">
                When unknown printer took type and scrambled it to make type
                specimen book centuries,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section_3">
        <div className="container pt-10 pb-10">
          <div className="works" data-aos="zoom-in">
            <h1 className="text-[#14c2a3] text-4xl " data-aos="fade-up">
              HOW IT WORKS{" "}
            </h1>
            <h5 className="text-white text-3xl py-3" data-aos="fade-up">
              How To Participate
            </h5>
            <div className="md:grid md:grid-cols-3 ">
              <div className="drawer m-2" data-aos="fade-up">
                <img src={drawer} alt="img" className="w-10 py-3"></img>
                <p className="text-3xl text-white">Submit KYC</p>
                <p className="text-1xl text-[#BECCC9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="drawer m-2" data-aos="fade-up">
                <img src={vector} alt="img" className="w-10 py-3"></img>
                <p className="text-3xl text-white">Verify Wallet</p>
                <p className="text-1xl text-[#BECCC9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="drawer m-2" data-aos="fade-up">
                <img src={fire} alt="img" className="w-10 py-3"></img>
                <p className="text-3xl text-white">Start Staking</p>
                <p className="text-1xl text-[#BECCC9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_4">
        <div className="container pt-10 pb-10">
          <div className="md:p-20">
            <h1 className="text-4xl md:text-6xl text-center text-white pb-10">
              REALISTIC BATTLE
            </h1>
            <p className=" text-xl md:text-2xl text-center text-white">
              Eleifend sem ipsum conubia euismod potenti ante ad sem sed,
              dictumst hymenaeos torquent quis. Class leo. Odio orci velit nulla
              habitasse conubia tempor eleifend dui suscipit mauris eget mollis
            </p>
          </div>
        </div>
      </div>
      <div className="section_5">
      <div className="container pt-10 pb-10">
        <div className="md:grid md:grid-cols-3 gap-3">
          <div className="col-span-1 row-span-1">
          <h3 className="text-4xl text-[#14C2A3]">CREATIVE </h3>

          <p className="text-3xl text-white ">Our Team</p>
          <p className="text-2xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed quam congue, porttitor erat rhoncus, tristique mi. Sed sed ultricies odio. Curabitur maximus rutrum tellus, eu vehicula sapien rutrum id. </p>

          </div>
          <div className="row-span-2 col-span-2">
          <div className="border-3 border-[#14C2A3] rounded teamWrap">
            <div className="team">
            <div className="border-2 border-[#14C2A3] p-2 m-2 bg-[#061436]">
              <img src={member1} alt="img" className="m-auto w-48 "/>
              <div className="social flex justify-between mx-4 my-2">
              <img src={facebook} alt="img" className=""/>
              <img src={twitter} alt="img" className=""/>
              <img src={instagram} alt="img" className=""/>
              </div>
            </div>
            <div className="border-2 border-[#14C2A3] p-2 m-2 bg-[#061436]">
              <img src={member2} alt="img" className="m-auto w-48 "/>
              <div className="social flex justify-between mx-4 my-2">
              <img src={facebook} alt="img" className=""/>
              <img src={twitter} alt="img" className=""/>
              <img src={instagram} alt="img" className=""/>
              </div>
            </div>
            <div className="border-2 border-[#14C2A3] p-2 m-2 bg-[#061436]">
              <img src={member3} alt="img" className="m-auto w-48 "/>
              <div className="social flex justify-between mx-4 my-2">
              <img src={facebook} alt="img" className=""/>
              <img src={twitter} alt="img" className=""/>
              <img src={instagram} alt="img" className=""/>
              </div>
            </div>
            </div>
            

            
          </div>

          </div>
        </div>
      </div>
        
      </div>
      <div className="section_6">
<div className="container pt-10 pb-10">
          <div className="enroll" data-aos="fade-up">
            <div className="md:grid md:grid-cols-2">
              <div className="enrollText text-center md:text-start" data-aos="zoom-in">
                <p className="text-white text-4xl  md:text-6xl">IMPROVE YOUR SKILL NOW!</p>
                <p className="text-white text-2xl">
                  Enjoy Your Gaming Experience More
                </p>
                <button className="join text-xl md:text-2xl">Join Now</button>
              </div>
              <div className="enrollImg w-72 md:w-auto" data-aos="zoom-out">
                <img src={styrda2} alt="img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
