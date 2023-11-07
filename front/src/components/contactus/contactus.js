import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import './contactus.css';
import emailpic from '../images/email.svg';
import phonepic from '../images/phone.svg';
import locpic from '../images/location.svg';

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_50xsf8d",
        "template_39j1pk6",
        form.current,
        "SxdeFlZArqjSkFMpF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
      <div className='ContactUs'>
          <div className='Side'>
              <p className = 'ForDetails'>For More Details <br></br> Contact Us</p>
              <div className = "info">
                <div className= "EmailDiv">
                  <img src = {emailpic} />
                  <p className = "email">TechSpot@gmail.com</p>
                </div>
                <div className = "EmailDiv">
                <img src = {phonepic} />
                  <p className='phone'>+12345678</p>
                </div>
                <div className = "EmailDiv">
                <img src = {locpic} />
                  <p className = 'location'>Beirut-Downtown</p>
                </div>
              </div>
          </div>
          <div className='Card'>
              <form ref={form} className='form-Contactus' onSubmit={sendEmail}>
                  <input class="input-name" type="text" placeholder="Your name" name = "from_name"/>
                  <span class="underline_name"></span>
                  <input type="text" class="input-email" placeholder="Your email" required="" name = "from_email"/>
                  <label for="Email" class="underline_email"></label>
                  <textarea className = "textarea" placeholder='Write a message' name = "message"/>
                  <button type='submit'>Send message</button>
              </form>
          </div>
      </div>
  )
}
export default Contactus