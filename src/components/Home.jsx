import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { bubble as Menu } from 'react-burger-menu';
import avatar from '../assets/images/Pro1.png';
import { FaAngellist } from 'react-icons/fa';
import resume from '../assets/Resume.pdf';
import { HashLink as Link } from 'react-router-hash-link';
import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const Home = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const handleCloseMenu = () => {
     setIsMenuOpen(false);
   };
   const handleStateChange = (state) => {
     setIsMenuOpen(state.isOpen);
   }

    return (
    <>
    <div id="portfolio" className="main">
     <div className="home">
       <Menu isOpen={isMenuOpen} onStateChange={handleStateChange} className="my-bar" right width={ "100%" }>
        <li className="menu-item" onClick={() => handleCloseMenu()} ><Link smooth to="#portfolio">Home</Link></li>
        <li className="menu-item" onClick={() => handleCloseMenu()}  ><Link smooth to="#project-page">Projects</Link></li>
        <li className="menu-item" onClick={() => handleCloseMenu()}  ><Link smooth to="#about-page">About</Link></li>
        <li className="menu-item" onClick={() => handleCloseMenu()}  ><Link smooth to="#contact-page">Contacts</Link></li>
      </Menu>
      <div className="social-media">
        <ul className="my-social">
          <li>
            <a href="https://github.com/RolandM99">
              <IconContext.Provider value={{ className: 'sidebar-link-icon' }}>
                <BsGithub />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/roland_manful.1/">
              <IconContext.Provider value={{ className: 'sidebar-link-icon' }}>
                <BsInstagram />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ManfulMwez">
              <IconContext.Provider value={{ className: 'sidebar-link-icon' }}>
                <BsTwitter />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/roland-mweze/">
              <IconContext.Provider value={{ className: 'sidebar-link-icon' }}>
                <BsLinkedin />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/roland-n-mweze">
              <IconContext.Provider value={{ className: 'sidebar-link-icon' }}>
                <FaAngellist />
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </div>
         <div className="description">
           <img id="my-avatar" src ={avatar} alt="my avatar" />
           <div className="action">
                <a href="#contact-page">
                 <button className="hire">Hire me</button>
                </a>
                <a href={resume} download id="resume" className="download-cv">
                Download CV
                <IconContext.Provider value={{ className: 'download-icon' }}>
                  <HiOutlineDocumentDownload />
                </IconContext.Provider>
              </a>
             </div>
           <div className="intro">
             <div className="text">
               <p className="hello">Hello there,</p>
               <p className="name">I am <strong>Roland MWEZE</strong></p>
               <p className="role">Software Engineer</p>
             </div>
             
           </div>
         </div>
     </div>
    </div>
    </>
    );
  }

export default Home;