import React from 'react';

import './homepage.css';
 
const Homepage =()=>{
  
    return (
      <div className='content-home'>
           <div className='container mx-5 grid grid-cols-2'>
           <div className='leftWrap pt-16 pb-16'>
      <h1 className='text-white pt-10 text-left text-6xl'>Sarky:The Ultimate Game </h1>
      <h1 className='text-white pt-10 text-left text-xl'>Immerse yourself in thrilling team-based battles with Sparky game. Choose unique heroes, strategize with teammates, and dominate the lanes to claim victory. 
</h1>
      <div className='content-btn pt-8 text-left'>
            <button className='text-white text-2xl font-bold py-3 px-12  inline-flex btnDownload'>Download</button>
        </div>
        </div>
        <div className='rightWrap'>
          <img src="/assets/svg/styrda.svg" alt="img"></img>
        </div>
        

      </div>
        
      </div>
    
    );
  
}
 
export default Homepage;