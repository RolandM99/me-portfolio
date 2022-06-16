import React from 'react';
import js from '../assets/images/js.png';
import ruby from '../assets/images/ruby.png';
import rails from '../assets/images/rails.png';
import react from '../assets/images/react.png';
import postgre from '../assets/images/postgre.png';
import java from '../assets/images/java.png';
import bootstrap from '../assets/images/bootstrap.png';
import sass from '../assets/images/sass.png';
import python from '../assets/images/python.png';

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
            <li className="icon-li">Sass<img className="icon-img" src={sass} alt="ruby-icon"></img></li>
           </ul>
          </div>
        </div>
      </section>
    </>
  )
}