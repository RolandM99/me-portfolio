import React from 'react';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { BiDownload } from 'react-icons/bi';
import js from '../assets/images/js.png';
import ruby from '../assets/images/ruby.png';
import rails from '../assets/images/rails.png';
import react from '../assets/images/react.png';
import postgre from '../assets/images/postgre.png';
import java from '../assets/images/java.png';
import node from '../assets/images/nodejs.png';
import bootstrap from '../assets/images/bootstrap.png';
import python from '../assets/images/python.png';
import backend from '../assets/images/backend.png';
import uiux from '../assets/images/uiux.png';
import frontend from '../assets/images/frontend.png';
import resume from '../assets/Resume.pdf';

export default function About() {
  return (
    <>
      <section id="about-page">
        <div className="intro-port">
        <hr className="line1"></hr>
          <h1 className="pro-title">About me<hr className="line2"></hr></h1>
          <div className="abt-box">
           <p className="intro-txt">Hey there you super person,</p>
           <p className="abt-txt">I am Roland Mweze, a software engineer specialized in different technologies.
           I always wanted to pursue success in building meaningful
           things that help real people and solve real problems</p>
          </div>
          <div className="offer-skills">
          <div className="abt-offer">
            <h2>What I offer</h2>
            <p className="abt-txt">I Build scalable web apps and mobile apps, beautiful websites
            for companies and I improve user interaction and customer satisfaction.</p>
            <div className="offer">
              <div className="abt-giv">
                <img className="offer-img" src={frontend} alt="frontend-croquis"></img>
                <p>Front-end Development</p>
              </div>
              <div id="bck" className="abt-giv">
                <img className="offer-img" src={backend} alt="backend-croquis"></img>
                <p>Back-end Development</p>
              </div>
              <div className="abt-giv">
                <img className="off-img" src={uiux} alt="ui-croquis"></img>
                <p>UI/UX Design</p>
              </div>
            </div>
          </div>
          <div className="abt-skills">
           <h2>Skills</h2>
           <ul className="stacks">
            <li className="icon-li">Ruby<img className="icon-img" src={ruby} alt="ruby-icon"></img></li>
            <li className="icon-li">JavaScript<img className="icon-img" src={js} alt="ruby-icon"></img></li>
            <li className="icon-li">React<img className="icon-img" src={react} alt="ruby-icon"></img></li>
            <li className="icon-li">Rails<img className="icon-img" src={rails} alt="ruby-icon"></img></li>
            <li className="icon-li">PostgreSQL<img className="icon-img" src={postgre} alt="ruby-icon"></img></li>
            <li className="icon-li">Python<img className="icon-img" src={python} alt="ruby-icon"></img></li>
            <li className="icon-li">Java<img className="icon-img" src={java} alt="ruby-icon"></img></li>
            <li className="icon-li">Bootstrap<img className="icon-img" src={bootstrap} alt="ruby-icon"></img></li>
            <li className="icon-li">NodeJs<img className="icon-img" src={node} alt="ruby-icon"></img></li>
           </ul>
          </div>
          </div>
          <div className="abt-action">
                <a href="#contact-page">
                 <button className="abt-hire">Hire me</button>
                </a>
                <a href={resume} download id="abt-resume" className="download-cv">
                Download CV
                <IconContext.Provider value={{ className: 'download-icon' }}>
                  <BiDownload />
                </IconContext.Provider>
              </a>
             </div>
        </div>
      </section>
    </>
  )
}