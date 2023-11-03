import React from "react";
import Header from "../../components/Header/header.jsx";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./AboutUs.css";
import instagram from "../../Assets/Logo White/instagram.svg";
import google from "../../Assets/Logo White/google.svg";
import facebook from "../../Assets/Logo White/facebook.svg";
import x from "../../Assets/Logo White/x.svg";
import linkedin from "../../Assets/Logo White/linkedin.svg";
import about from "../../Assets/Images/Image.png";

const AboutUs = () => {
  return (
    <div className="about_us">
      <Header />
      <Navbar />
      <div className="about_us_container">
        <div className="about_us_details">
          <h1 className="about_title">WHO WE ARE</h1>
          <p className="about_desc">
            We are a team of technology enthusiasts dedicated to providing you
            with expert insights and objective product reviews. Our mission is
            to simplify the complex world of technology, assisting you in making
            informed decisions.
          </p>
        </div>
        <div className="about_us_details">
          <h1 className="about_title">OUR MISSION</h1>
          <p className="about_desc">
            Our mission is to empower tech enthusiasts, professionals, and
            consumers with the knowledge they need to make informed decisions in
            the fast-paced world of tech.
          </p>
        </div>
        <div className="about_us_details">
          <h1 className="about_title">OUR GOAL</h1>
          <p className="about_desc">
            Our goal is to help you make the right choices based on your needs
            and preferences.
          </p>
        </div>
        <div className="about_us_details">
          <h1 className="about_title">CONNECT WITH US</h1>
          <p className="about_desc">
            Feel free to reach out through our contact form, email, or our
            social media channels. Your feedback helps us continually improve
            our content and services.
          </p>
          <div className="image">
            <img src={about} alt="about_background" />
          </div>
        </div>
        <div className="about_us_details logos">
          <a href="https://www.facebook.com">
            <img src={facebook} className="App_logo" alt="facebook-logo" />
          </a>
          <a href="https://www.twitter.com">
            <img src={x} className="App_logo" alt="x-logo" />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagram} className="App_logo" alt="instagram-logo" />
          </a>
          <a href="https://www.gmail.com">
            <img src={google} className="App_logo" alt="google-logo" />
          </a>
          <a href="https://www.linkedin.com">
            <img src={linkedin} className="App_logo" alt="linkedin-logo" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
