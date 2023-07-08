import React from 'react';

import './homepage.css';
 
const Homepage =()=>{
  
    return (
      <div className='Home'>
      <div className='content-home'>
           <div className='container md:grid grid-cols-2 md:mx-5'>
           <div className='leftWrap pt-20 pb-20'>
      <h1 className='text-white md:pt-10 md:text-left  text-5xl md:text-6xl'>Sparky:The Ultimate Game </h1>
      <h1 className='text-white pt-10 text-left text-xl'>Immerse yourself in thrilling team-based battles with Sparky game. Choose unique heroes, strategize with teammates, and dominate the lanes to claim victory. 
</h1>
      <div className='content-btn pt-8  md:text-left'>
            <button className='text-white text-2xl font-bold py-3 px-12  inline-flex btnDownload'>Download</button>
        </div>
        </div>
        <div className='rightWrap hidden md:block'>
          <img src="/assets/svg/styrda.svg" alt="img"></img>
        </div>
        

      </div>
        
      </div>
      <div className='aboutus'>
        <div className='container pt-10 pb-10'>
          <div className='md:grid grid-cols-2'>
            <div className='left-aboutUS'>
            
            </div>
            <div className='rightiaboutUs'>
            <p className='pt-1 text-[#14c2a3] text-xl'>About Us</p>
            <p className='text-white text-5xl'>What is Sparky</p>
            <p className='text-[#828282] text-2xl'>Embark on an epic journey into the realm of our groundbreaking Sparky game, where intense battles, strategic gameplay, and unforgettable moments await you!</p>
            <img src='/assets/svg/arrow.svg' alt='arrow'></img>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    );
  
}
 
export default Homepage;