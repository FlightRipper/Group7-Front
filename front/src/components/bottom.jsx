import React from 'react';
import '../stylesheets/bottom.css';
import bottomlogo from '../assets/bottom-logo.png';
import emaillogo from '../assets/Email logo.svg';
import fb from '../assets/Facebook logo1.svg';
import google from '../assets/Google logo1.svg';
import instagram from '../assets/Instagram logo1.svg';
import linkedin from '../assets/Linkedin logo1.svg';
import twitter from '../assets/X logo1.svg';

const Bottom = () => {
    return (
        <>
        <div className="bottom-container">
            <div className="bottom-logo">
                <img src={bottomlogo} />
            </div>
            <div className="newsletter-container">
                <div className="newsletter">
                    <h1>NEWSLETTER</h1>
                    <p>Subscribe now and receive weekly</p>
                    <p>newsletter !</p>
                </div>
                <div className="email-form">
                    <input type="text" className='e-class' placeholder='Email Address' />
                    <img src={emaillogo} />
                </div>
            </div>

            <div className="follow-us">
                <h1>Follow Us</h1>
                <img src={fb} alt="Facebook-logo" />
                <img src={google} alt="Google-logo" />
                <img src={instagram} alt="Instagram-logo" />
                <img src={linkedin} alt="Linkedin-logo" />
                <img src={twitter} alt="Twitter-logo" />
            </div>
            </div>
            <div className="footer">
                <footer><p>© 2023, Digital World 3 Powered by Shopify</p></footer>
            </div>
            </>
    )
}

export default Bottom;