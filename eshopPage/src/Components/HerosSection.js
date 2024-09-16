import React from 'react';
import '../index.css';

const HerosSection = () => {
  const containerStyle = {
    margin : 'auto',
  };



  return (
    <div className="row container" style={containerStyle}>
      <div className="col">
        <h1 >YOUR FEET DESERVE THE BEST</h1>
        <h6>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </h6>

        <div className="" >
          <button type="button" className="btn btn-primary m-1">
           Shop Now
          </button>
          <button type="button" className="btn btn-success m-1">
           Category
          </button>
        </div>
        <div>
            <p>Also avaiaible on</p>
        <img className='m-1'
          src={process.env.PUBLIC_URL + '/images/amazon.png'}
          alt="Illustration of shoes for a hero section"
        
        />
         <img className='m-1'
          src={process.env.PUBLIC_URL + '/images/flipkart.png'}
          alt="Illustration of shoes for a hero section"
          
        />
        </div>
       
       
        
      </div>
      <div className="col">
        <img
          src={process.env.PUBLIC_URL + '/images/hero-image.png'}
          alt="Illustration of shoes for a hero section"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HerosSection;
