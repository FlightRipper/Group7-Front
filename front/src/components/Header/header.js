import React from "react";
import instagram from "../../Assets/Logo/instagram.svg";
import google from "../../Assets/Logo/google.svg";
import facebook from "../../Assets/Logo/facebook.svg";
import x from "../../Assets/Logo/x.svg";
import linkedin from "../../Assets/Logo/linkedin.svg";
import "../Header/header.css";

const Header = () => {
  return (
    <header className="App-header">
      <a href="https://www.facebook.com">
        <img src={facebook} className="App-logo" alt="facebook-logo" />
      </a>
      <a href="https://www.twitter.com">
        <img src={x} className="App-logo" alt="x-logo" />
      </a>
      <a href="https://www.instagram.com">
        <img src={instagram} className="App-logo" alt="instagram-logo" />
      </a>
      <a href="https://www.gmail.com">
        <img src={google} className="App-logo" alt="google-logo" />
      </a>
      <a href="https://www.linkedin.com">
        <img src={linkedin} className="App-logo" alt="linkedin-logo" />
      </a>
    </header>
  );
};

export default Header;
