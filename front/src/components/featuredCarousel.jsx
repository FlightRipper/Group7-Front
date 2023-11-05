import grape from '../assets/grape.svg';
import peach from '../assets/peach.svg';
import soda from '../assets/soda.svg';
import pic1 from '../assets/pic1.jpeg';
import pic2 from '../assets/pic2.jpeg';
import pic3 from '../assets/pic3.jpeg';
import pic4 from '../assets/pic4.jpeg';
import pic5 from '../assets/pic5.jpeg';
import pic6 from '../assets/pic6.jpeg';
import '../stylesheets/carousel.css';
import React, { useState, useEffect } from 'react';

const Featured = () => {
    const imageUrls1 = [pic1, pic2, pic3];
    const imageUrls2 = [pic4, pic5, pic6];
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
  
    useEffect(() => {
      const interval1 = setInterval(() => {
        setCurrentIndex1((prevIndex) => (prevIndex + 1) % imageUrls1.length);
      }, 15000);
  
      const interval2 = setInterval(() => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % imageUrls2.length);
      }, 15000);
  
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }, [currentIndex1, currentIndex2]);
  
    const goToPrevSlide1 = () => {
      setCurrentIndex1((prevIndex) => (prevIndex - 1 + imageUrls1.length) % imageUrls1.length);
    };
  
    const goToNextSlide1 = () => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % imageUrls1.length);
    };
  
    const goToPrevSlide2 = () => {
      setCurrentIndex2((prevIndex) => (prevIndex - 1 + imageUrls2.length) % imageUrls2.length);
    };
  
    const goToNextSlide2 = () => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % imageUrls2.length);
    };
    return (
        <div className="carousel-container">
        <div className='carousel-1'>
          <button onClick={goToPrevSlide1} className='prev-button-1'>
            Previous
          </button>
          {imageUrls1.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide-1 ${index === currentIndex1 ? 'active' : ''}`}
            >
              <img src={image} alt={`Image ${index + 1}`} className='carousel-image-1' />
            </div>
          ))}
          <button onClick={goToNextSlide1} className='next-button-1'>
            Next
          </button>
        </div>
        <div className='carousel-2'>
          <button onClick={goToPrevSlide2} className='prev-button-2'>
            Previous
          </button>
          {imageUrls2.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide-2 ${index === currentIndex1 ? 'active' : ''}`}
            >
              <img src={image} alt={`Image ${index + 1}`} className='carousel-image-2' />
            </div>
          ))}
          <button onClick={goToNextSlide2} className='next-button-2'>
            Next
          </button>
        </div>
        </div>
    );
  };
  
  export default Featured;