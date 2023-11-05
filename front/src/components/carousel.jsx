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

const Carousel = () => {
    const imageUrls = [pic1,pic2,pic3,pic4,pic5,pic6];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 15000);
  
      return () => {
        clearInterval(interval);
      };
    }, [currentIndex]);
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };
  
    return (
        <div className='carousel'>
          <button onClick={goToPrevSlide} className='prev-button'>
            Previous
          </button>
          {imageUrls.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Image ${index + 1}`} className='carousel-image' />
            </div>
          ))}
          <button onClick={goToNextSlide} className='next-button'>
            Next
          </button>
        </div>
    );
  };
  
  export default Carousel;