import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import avatar from '../assets/images/Ellipse.png';

export default class Home extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
     <div className="home">
       <Menu right width={ 250 }>
        <a className="menu-item" href="#home">Home</a>
        <a className="menu-item" href="#about">About</a>
        <a className="menu-item" href="#project">Projects</a>
        <a className="menu-item" href="#contact">Contact</a>
      </Menu>
         <div className="description">
           <img id="my-avatar" src ={avatar} alt="my avatar" />
           <div className="intro">
             <div className="text">
               <p className="hello">Hello there, I'm </p>
               <p className="name"><strong>Roland N. Mweze </strong></p>
               <p className="role">Software Engineer</p>
             </div>
             <div className="action">
                <a href="#contact">
                 <button className="hire">HIRE ME</button>
                </a>
             </div>
           </div>
         </div>
     </div>
    );
  }
}