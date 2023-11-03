import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import AlertLogo from "../../Assets/Logo/alert.svg"

const NotFound = () => {
  return (
    <div className="notfound_container">
      <Header />
      <Navbar />
      <div className="pnf">
        <img className="pnf-logo" src={AlertLogo} alt="alert-logo"/>
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-desc">Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
