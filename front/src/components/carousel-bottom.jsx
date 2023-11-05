import React from 'react';
import '../stylesheets/carousel-bottom.css';
import Discover from '../assets/Discover Icon.svg';
import Gift from '../assets/Gift icon.svg';
import Ribbon from '../assets/Ribbon Logo.svg';

const carouselBottom = () => {
    return (
<div className="main">
  <div className="logo-images1">
    <div className="image-container">
      <img src={Discover} alt="Discover-logo" />
      <p>Discover</p>
    </div>
    <div className="image-container">
      <img src={Ribbon} alt="Ribbon-logo" />
      <p>Guarantee</p>
    </div>
    <div className="image-container">
      <img src={Gift} alt="Gift-logo" />
      <p>Gift Ideas</p>
    </div>
  </div>
</div>

    )
}

export default carouselBottom;