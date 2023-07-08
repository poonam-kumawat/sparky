import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import lottie from "lottie-web";
import play from '../../assests/json/play.json'



import './homepage.css';
 
const Homepage =()=>{
  useEffect(()=>{
    Aos.init({duration:1000});
    lottie.loadAnimation({
      container: document.querySelector("#video_link"),
      animationData: play,
      renderer: "svg",
      loop: true, 
      autoplay: true,
    });
  })
 
  
    return (
      <div className='Home'>
      <div className='content-home'>
           <div className='container md:grid grid-cols-2 md:mx-5'>
           <div className='leftWrap pt-20 pb-20' data-aos="fade-right">
      <h1 className='text-white md:pt-10 md:text-left  text-5xl md:text-6xl'>Sparky:The Ultimate Game </h1>
      <h1 className='text-white pt-10 text-left text-xl'>Immerse yourself in thrilling team-based battles with Sparky game. Choose unique heroes, strategize with teammates, and dominate the lanes to claim victory. 
</h1>
      <div className='content-btn pt-8  md:text-left'>
            <button className='text-white text-2xl font-bold py-3 px-12  inline-flex btnDownload'>Download</button>
        </div>
        </div>
        <div className='rightWrap hidden lg:block absolute right-0 pt-14'>
          <img src="/assets/svg/styrda.svg" alt="img"></img>
        </div>
        

      </div>
        
      </div>
      <div className='aboutus'>
        <div className='container pt-10 pb-10'>
          <div className='md:grid grid-cols-2'>
            <div className='left-aboutUS'>
            
            </div>
            <div className='rightiaboutUs' data-aos="zoom-in" data-aos-easing="ease-in-out">
            <p className='pt-1 text-[#14c2a3] text-xl'>About Us</p>
            <p className='text-white text-5xl'>What is Sparky</p>
            <p className='text-[#828282] text-2xl'>Embark on an epic journey into the realm of our groundbreaking Sparky game, where intense battles, strategic gameplay, and unforgettable moments await you!</p>
            <img src='/assets/svg/arrow.svg' alt='arrow'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='section_3'>
        <div className='container pt-10 pb-10'>
          <div className='md:grid grid-cols-2'>
            <div className='left-aboutUS'>
            <p className='pt-1 text-[#14c2a3] text-xl'>About Us</p>
            <p className='text-white text-5xl'>What is Sparky</p>
            <p className='text-[#828282] text-2xl'>Embark on an epic journey into the realm of our groundbreaking Sparky game, where intense battles, strategic gameplay, and unforgettable moments await you!</p>
            <img src='/assets/svg/arrow.svg' alt='arrow'></img>
            </div>
            <div className='rightiaboutUs'>
            <img src='/assets/svg/styrda2.svg' alt='arrow'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='section_4'>
        <div className='container pt-10 pb-10'>
        <div className='video'>
        <img src='/assets/svg/giphy.svg' alt='arrow' className='zooming p-2 border-solid border-1 rounded border-white'></img>
        {/* <a href='/' id='video_link'></a> */}
        </div>
          
           
          
        </div>
      </div>
      </div>
    
    );
  
}
 
export default Homepage;