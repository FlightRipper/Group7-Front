import React from 'react';
import '../stylesheets/navbar.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='site-wrapper'>
      <div id="navbar">
        <div className="n-main">
          <div className="logo">
            <img src={logo} alt="Techspot-logo" />
          </div>
          <ul>
            <li><a href="#">HOME</a></li>
            <div className="dropdown">
              <button className="dropbtn">SHOP
                <FontAwesomeIcon icon={faCaretDown} className='caret' />
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">ABOUT US</a></li>
          </ul>
          <div className="search-container">
              <input type="text" placeholder="Search.." />
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} className='search' />
              </button>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar;