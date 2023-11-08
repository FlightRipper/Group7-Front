// import React, { useState } from "react";
// import arrow from "../../Assets/Logo/arrow.svg";
// import TechSpot from "../../Assets/Images/TechSpot-logo.png";
// import "./navbar.css";
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <nav className="App-navbar">
//       <img className="techspot-logo" src={TechSpot} alt="website-logo" />
//       <ul className="nav-list">
//         <li className="nav-item">
//           <NavLink to='/' activeClassName="active-link">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <div className="shop-link" onClick={toggleDropdown}><span className="shop-text">Shop</span>
//              <img src={arrow} alt="arrow" className="arrow-logo" />
//           </div>
//           {isDropdownVisible && (
//             <ul className="dropdown-menu">
//               <li className="menu-item">
//                 <a href="/Phones">Phones</a>
//               </li>
//               <li className="menu-item">
//                 <a href="/Laptops">Laptops</a>
//               </li>
//               <li className="menu-item">
//                 <a href="/Phone Accessories">Phone Accessories</a>
//               </li>
//               <li className="menu-item">
//                 <a href="/Laptop Accessories">Laptop Accessories</a>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className="nav-item">
//           <a href="/blogs">Blog</a>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/contact" activeClassName="active-link">Contact Us</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import arrow from "../../Assets/Logo/arrow.svg";
// import TechSpot from "../../Assets/Images/TechSpot-logo.png";
// import "./navbar.css";
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   // // Function to open the dropdown on hover
//   // const handleMouseEnter = () => {
//   //   setIsDropdownVisible(true);
//   // };

//   // // Function to close the dropdown when mouse leaves
//   // const handleMouseLeave = () => {
//   //   setIsDropdownVisible(false);
//   // };

//   return (
//     <nav className="App-navbar">
//       <img className="techspot-logo" src={TechSpot} alt="website-logo" />
//       <ul className="nav-list">
//         <li className="nav-item">
//           <NavLink to='/' activeClassName="active-link">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <div
//             className="shop-link"
//             onClick={toggleDropdown}
//             // onMouseEnter={handleMouseEnter}
//             // onMouseLeave={handleMouseLeave}
//           >
//             <span className="shop-text">Shop</span>
//             <img src={arrow} alt="arrow" className="arrow-logo" />
//           </div>
//           {isDropdownVisible && (
//             <ul className="dropdown-menu">
//               <li className="menu-item">
//                 <a href="/Phones">Phones</a>
//               </li>
//               <li className="menu-item">
//                 <a href="/Laptops">Laptops</a>
//               </li>
//               <li className="menu-item">
//                 <a href="/Phone Accessories">Phone Accessories</a>
//               </li>
//               <li className="menu-item">
//                 <a href="/Laptop Accessories">Laptop Accessories</a>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li className="nav-item">
//           <a href="/blogs">Blog</a>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/contact" activeClassName="active-link">Contact Us</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import arrow from "../../Assets/Logo/arrow.svg";
import TechSpot from "../../Assets/Images/TechSpot-logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <nav className="App-navbar">
      <img className="techspot-logo" src={TechSpot} alt="website-logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" activeClassName="active-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <div className="shop-link" onMouseEnter={toggleDropdown}>
            <span className="shop-text">Shop</span>
            <img src={arrow} alt="arrow" className="arrow-logo" />
          </div>
          {isDropdownVisible && (
            <ul className="dropdown-menu" onMouseLeave={closeDropdown}>
              <li className="menu-item">
                <Link to="/products/phones" activeClassName="active-link">
                  Phones
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/products/laptops" activeClassName="active-link">
                  Laptops
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/products/phone accessories"
                  activeClassName="active-link"
                >
                  Phone Accessories
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/products/laptop accessories"
                  activeClassName="active-link"
                >
                  Laptop Accessories
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/products" activeClassName="active-link">
                  View All Products
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <Link to="/blogs" activeClassName="active-link">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" activeClassName="active-link">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" activeClassName="active-link">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
