import React, { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";
import play from "../../assests/json/play.json";

import "./homepage.css";
import arrow from "./../../assets/svg/arrow.svg";
import styrda2 from "./../../assets/svg/styrda2.svg";
import giphy from "./../../assets/svg/giphy.svg";
import doubleAroww from "./../../assets/svg/doubleArrow.svg";
import member1 from "./../../assets/svg/teamplayer/member1.svg";
import member2 from "./../../assets/svg/teamplayer/member2.svg";
import member3 from "./../../assets/svg/teamplayer/member3.svg";
import member4 from "./../../assets/svg/teamplayer/member4.svg";
import member5 from "./../../assets/svg/teamplayer/member5.svg";
import member6 from "./../../assets/svg/teamplayer/member6.svg";

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
          <div className="md:grid grid-cols-2">
            <div className="left-aboutUS"></div>
            <div
              className="rightiaboutUs"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <p className="pt-1 text-[#14c2a3] text-xl">About Us</p>
              <p className="text-white  text-3xl md:text-5xl">What is Sparky</p>
              <p className="text-[#828282]  text-xl md:text-2xl">
                Embark on an epic journey into the realm of our groundbreaking
                Sparky game, where intense battles, strategic gameplay, and
                unforgettable moments await you!
              </p>
              <img src={arrow} alt="arrow"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="section_3">
        <div className="container pt-10 pb-10">
          <div className="md:grid grid-cols-2">
            <div className="left-aboutUS">
              <p className="pt-1 text-[#14c2a3] text-xl">About Us</p>
              <p className="text-white text-3xl md:text-5xl">What is Sparky</p>
              <p className="text-[#828282] text-xl md:text-2xl">
                Embark on an epic journey into the realm of our groundbreaking
                Sparky game, where intense battles, strategic gameplay, and
                unforgettable moments await you!
              </p>
              <img src={arrow} alt="arrow"></img>
            </div>
            <div className="rightiaboutUs">
              <img src={styrda2} alt="arrow"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="section_4">
        <div className="container pt-10 pb-10">
          <div className="video">
            <img
              src={giphy}
              alt="arrow"
              className="zooming p-2 border-solid border-1 rounded border-white"
            ></img>
            {/* <a href='/' className='video_link'><img src='/assets/svg/play.svg' alt='arrow'></img></a> */}
          </div>
        </div>
      </div>
      <div className="section_5">
        <div className="container pt-10 pb-10">
          <div className="teamMembers"  data-aos="zoom-in" data-aos-easing="ease-in-out">
          <p className="text-center text-white text-3xl md:text-6xl">Active Team Members</p>
          <img src={doubleAroww} alt="arrow" className="m-auto md:h-5 h-2"></img>
          <div className="members">
          <div className="grid grid-cols-3 lg:grid lg:grid-cols-6 mt-4">
          <div className="memberImg">
          <a href="/"><img src={member1} alt="img"></img></a>
           
            </div>
            <div className="memberImg">
            <a href="/"><img src={member2} alt="img"></img></a>
      
            </div>
            <div className="memberImg">
            <a href="/"><img src={member3} alt="img"></img></a>
      
            </div>
            <div className="memberImg">
            <a href="/"><img src={member4} alt="img"></img></a>
      
            </div>
            <div className="memberImg">
            <a href="/"><img src={member5} alt="img"></img></a>
      
            </div>
            <div className="memberImg">
            <a href="/"><img src={member6} alt="img"></img></a>
      
            </div>
            </div>
            <div className="grid grid-cols-3 lg:grid lg:grid-cols-6">
          <div className="memberImg">
          <a href="/"><img src={member1} alt="img"></img></a>
           
            </div>
            <div className="memberImg">
            <a href="/"><img src={member2} alt="img"></img></a>
      
            </div>
            <div className="memberImg">
            <a href="/"><img src={member3} alt="img"></img></a>
      
            </div>
            <div className="memberImg">
            <a href="/"><img src={member4} alt="img"></img></a>
      
            </div>
            <div className="memberImg">
            <a href="/"><img src={member5} alt="img"></img></a>
      
            </div>
            
            </div>
          </div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default Homepage;
