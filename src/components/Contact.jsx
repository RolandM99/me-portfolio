import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import {
 BsInstagram,
 BsLinkedin,
 BsTwitter,
 BsGithub,
} from 'react-icons/bs';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaAngellist } from 'react-icons/fa';

const Contact = () => {
 const form = useRef();
 const myEmail = (e) => {
   e.preventDefault();

   // emailjs.init('Iv6E6JNTpGJp7OJFu');

   emailjs.sendForm('service_gvj7ou7', 'template_lra7urx', '#myForm', 'Iv6E6JNTpGJp7OJFu')
     .then((result) => {
       console.log(result.text);
     }, (error) => {
       console.log(error.text);
     });
     e.target.reset();
 };
  return (
   <>
   <section id="contact-page">
     <hr className="line1"></hr>
     <h1 className="pro-title">Contact me<hr className="line2"></hr></h1>
     <div className="ctc-container">
      <h2>Let's connect...</h2>
      <div>
       <ul className="ctc-icons">
        <li className="ctc-li"><span className="span-li"><FaEnvelope/></span><a id="mail-li" href="mailto:manfulmweze99@gmail.com" rel="noreferrer" target="_blank">manfulmweze99@gmail.com</a></li>
        <li className="ctc-li"><span className="span-li"><FaMapMarkerAlt /></span> Rwanda, Kigali </li>
        <li className="ctc-li"><span className="span-li"><FaPhoneAlt /></span> +250 (0)784173187</li>
       </ul>
      </div>
      <div className="ctc-form">
       <form id="myForm" ref={form} onSubmit={myEmail} >
         <input className="ipt" type="text" name='name' placeholder='Full Name' required />
         <input className="ipt" type="email" name='email' placeholder='Your Email' required />
         <textarea className="ipt" name='message' rows="7" placeholder="Type your message" required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
      </div>
     </div>
     <div className="soc-footer">
       <div className="flex-footer">
        <ul className="small-menu">
          <li><a href="#portfolio">Home</a></li>
          <li><a href="#project-page">Portfolio</a></li>
          <li><a href="#about-page">About</a></li>
       </ul>
        <ul className="social-ctc">
          <li><span><BsGithub/></span><a href=""></a></li>
          <li><span><BsLinkedin/></span><a href=""></a></li>
          <li><span><BsTwitter/></span><a href=""></a></li>
          <li><span><FaAngellist/></span><a href=""></a></li>
          <li><span><BsInstagram/></span><a href=""></a></li>
        </ul>
       </div>
      <hr className="line3"></hr>
      <div className="footer-all">
       <p>© 2022 Roland Mweze, All rights reserved</p>
      </div>
     </div>
   </section>
   </>
  )
}

export default Contact;