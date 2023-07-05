import React, { Component } from 'react';

import './homepage.css';
 
class Homepage extends Component {
  render() {
    return (
      <div className='content-home'>
     <div className='container pt-10 text-center'>
      <h1 className='text-white pt-10 text-center'>Cosmic Conquest</h1>
      <h1 className='text-white pt-10 text-center'> Interstellar Odyssey</h1>
      <div className='content-btn pt-8'>
            <button className='text-white font-bold py-2 px-12  align-middle inline-flex btnDownload'>Download</button>
        </div>
      </div>
        
      </div>
    
    );
  }
}
 
export default Homepage;