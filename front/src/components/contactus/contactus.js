import React, { useState } from 'react';
// import { SMTPClient } from 'emailjs';
import emailjs from "emailjs-com";
import './contactus.css';

const Contactus = () => {
    function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_39j1pk6', e.current, 'SxdeFlZArqjSkFMpF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()}

    return (
        <div className='ContactUs'>
            <div className='Card'>
                {/* <form onSubmit={sendEmail}> */}
                    <input class="input-name" type="text" placeholder="Your name" name = "to_name"/>
                    <span class="underline_name"></span>
                    <input type="text" class="input-email" placeholder="Your email" required="" name = "email"/>
                    <label for="Email" class="underline_email"></label>
                    <textarea className = "textarea" placeholder='Write a message' name = "message"/>
                    <button type='submit'>Send message</button>
                {/* </form> */}
            </div>
            <div className='Side'>
            </div>
        </div>
    )
}
export default Contactus