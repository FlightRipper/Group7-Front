import React, { useState } from "react";
import arrow from "../../Assets/Logo/arrow.svg";
import TechSpot from "../../Assets/Images/TechSpot-logo.png";
import "./navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="App-navbar">
      <img className="techspot-logo" src={TechSpot} alt="website-logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <div className="shop-link" onClick={toggleDropdown}>
            Shop <img src={arrow} alt="arrow" className="arrow-logo" />
          </div>
          {isDropdownVisible && (
            <ul className="dropdown-menu">
              <li className="menu-item">
                <a href="/Phones">Phones</a>
              </li>
              <li className="menu-item">
                <a href="/Laptops">Laptops</a>
              </li>
              <li className="menu-item">
                <a href="/Phone Accessories">Phone Accessories</a>
              </li>
              <li className="menu-item">
                <a href="/Laptop Accessories">Laptop Accessories</a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="/api/blogs">Blog</a>
        </li>
        <li className="nav-item">
        <Link to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
