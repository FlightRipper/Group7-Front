import React from 'react';
import '../stylesheets/header.css';
import fb from '../assets/Facebook logo.svg';
import google from '../assets/Google logo.svg';
import instagram from '../assets/Instagram logo.svg';
import linkedin from '../assets/Linkedin logo.svg';
import twitter from '../assets/X logo.svg';

const Header = () => {
  return (
    <div className="n-header">
    <div className="logo-images">
      <img src={fb} alt="Facebook-logo" />
      <img src={google} alt="Google-logo" />
      <img src={instagram} alt="Instagram-logo" />
      <img src={linkedin} alt="Linkedin-logo" />
      <img src={twitter} alt="Twitter-logo" />
    </div>
  </div>
  )
}

export default Header;