import React, { Component } from 'react';

import './homepage.css';
 
class Homepage extends Component {
  render() {
    return (
      <div className='content-home'>
           <div className='container mx-auto  grid grid-cols-2'>
           <div className='leftWrap pt-16'>
      <h1 className='text-white pt-10 text-left text-6xl'>Cosmic Conquest</h1>
      <h1 className='text-white pt-10 text-left text-5xl'> Interstellar Odyssey</h1>
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
}
 
export default Homepage;