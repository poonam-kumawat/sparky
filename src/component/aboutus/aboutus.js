import "./aboutus.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import main_img from "./../../assets/svg/aboutus_MainImg.svg";
import facebook from "./../../assets/svg/Facebook.svg";
import twitter from "./../../assets/svg/Twitter.svg";
import instagram from "./../../assets/svg/Instagram.svg";
import member1 from "./../../assets/svg/teamplayer/member1.svg";
import member2 from "./../../assets/svg/teamplayer/member2.svg";
import member3 from "./../../assets/svg/teamplayer/member3.svg";
import twich from "./../../assets/svg/twich.svg";
import youtube from "./../../assets/svg/youtube.svg";
import game from "./../../assets/svg/gameboard.svg";
import community from "./../../assets/svg/community.svg";

const AboutUs = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div>
      <div className="uppersection  md:grid md:grid-cols-2">
        
        <div>
          <h1 className=" text-4xl md:text-6xl text-[#14C2A3] px-20 py-10" data-aos="fade-up">About us</h1>
          <p className=" text-2xl md:text-4xl text-white pl-20" data-aos="fade-up">
            We are a passionate team of game developers dedicated to creating an
            unparalleled MOBA gaming experience for players worldwide. Our
            journey began with a vision to craft a game that combines
            heart-pounding action, strategic gameplay, and an immersive world
            that captivates players of all backgrounds.
          </p>
        </div>
        <div className="hidden xl:block mr-0" data-aos="zoom-in">
          <img src={main_img} alt="img" className="float-right"></img>
        </div>
      </div>
      <div className="section_5">
        <div className="container pt-10 pb-10">
          <div
            className="md:grid md:grid-cols-3 gap-3 ourTeam"
            data-aos="fade-up"
          >
            <div className="col-span-1 row-span-1">
              <h3
                className="text-4xl teamText text-left text-[#14C2A3]"
                data-aos="fade-up"
              >
                CREATIVE
              </h3>

              <p
                className="text-3xl teamText text-left text-white "
                data-aos="fade-up"
              >
                Our Team
              </p>
              <p
                className="text-xl md:text-2xl text-left text-white our-team"
                data-aos="zoom-in"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sed quam congue, porttitor erat rhoncus, tristique mi.
                Sed sed ultricies odio. Curabitur maximus rutrum tellus, eu
                vehicula sapien rutrum id.{" "}
              </p>
            </div>
            <div className="row-span-2 col-span-2">
              <div
                className="border-3 border-[#14C2A3] rounded teamWrap"
                data-aos="zoom-in"
              >
                <div className="team">
                  <div className="border-2 border-[#14C2A3] p-2 m-2 bg-[#061436]">
                    <img src={member1} alt="img" className="m-auto w-48 " />
                    <div className="social flex justify-around mx-4 my-2">
                      <img src={facebook} alt="img" className="" />
                      <img src={twitter} alt="img" className="" />
                      <img src={instagram} alt="img" className="" />
                    </div>
                  </div>
                  <div className="border-2 border-[#14C2A3] p-2 m-2 bg-[#061436]">
                    <img src={member2} alt="img" className="m-auto w-48 " />
                    <div className="social flex justify-around mx-4 my-2">
                      <img src={facebook} alt="img" className="" />
                      <img src={twitter} alt="img" className="" />
                      <img src={instagram} alt="img" className="" />
                    </div>
                  </div>
                  <div className="border-2 border-[#14C2A3] p-2 m-2 bg-[#061436]">
                    <img src={member3} alt="img" className="m-auto w-48 " />
                    <div className="social flex justify-around mx-4 my-2">
                      <img src={facebook} alt="img" className="" />
                      <img src={twitter} alt="img" className="" />
                      <img src={instagram} alt="img" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_3 pb-10">
        <div className="container" data-aos="zoom-in">
          <div className="aboutSocial p-5">
          <div className="md:grid md:grid-cols-4 gap-2">
            <div className="twich" data-aos="fade-up">
            <img src={twich} alt="img" className="m-auto pb-4"></img>
            <p className="text-2xl text-white text-center">1300 +</p>
            <p className="text-2xl text-white text-center">Twitch Stream</p>
            </div>
            <div className="twich" data-aos="fade-up">
            <img src={youtube} alt="img" className="m-auto pb-4"></img>
            <p className="text-2xl text-white text-center">1100 +</p>
            <p className="text-2xl text-white text-center">Youtube Stream</p>
            </div>
            <div className="twich" data-aos="fade-up">
            <img src={game} alt="img" className="m-auto pb-4"></img>
            <p className="text-2xl text-white text-center">900 +</p>
            <p className="text-2xl text-white text-center">Past Stream</p>
            </div>
            <div className="twich" data-aos="fade-up">
            <img src={community} alt="img" className="m-auto pb-4"></img>
            <p className="text-2xl text-white text-center">256 +</p>
            <p className="text-2xl text-white text-center">Pro Stream</p>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
