import React from 'react';
import { Card } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import pro1 from '../assets/images/AuctionArt0.png';
import pro2 from '../assets/images/woman.png';
import pro3 from '../assets/images/bulga.png';
import pro4 from '../assets/images/doc.png';
import pro5 from '../assets/images/weather.png';
import pro6 from '../assets/images/math.png';

const projects = [{
  id: 1,
  image: pro1,
  title: 'AuctionArt',
  description: 'This website display astronomy captured picture of the Day. Users can like, see details about pictures or astronomy artwork and comment.',
  source: 'https://github.com/RolandM99/API-based-WebApp',
  demo: 'https://github.com/RolandM99/API-based-WebApp',
  techno: [
    {id: 1, stack: "JS"},
    {id: 2, stack: "HTML"},
    {id: 3, stack: "CSS"},
    {id: 4, stack: "Webpack"}
  ],
},
{
  id: 2,
  image: pro2,
  title: 'Strong Women',
  description: 'This project is based on an online website for a conference(Strong Women DRC 2021)',
  source: 'https://github.com/RolandM99/Capstone-Conference-page',
  demo: 'https://rolandm99.github.io/Capstone-Conference-page/',
  techno: [
    {id: 1, stack: "JavaScript"},
    {id: 2, stack: "HTML"},
    {id: 3, stack: "CSS"},
  ],
},
{
  id: 3,
  image: pro3,
  title: 'Bulga App',
  description: 'BulgaApp is a mobile web application where you can manage your budget, so that you can see how much money you spent and on what',
  source: 'https://github.com/RolandM99/budget-app',
  demo: 'https://bulgabudget.herokuapp.com/',
  techno: [
    {id: 1, stack: "Ruby"},
    {id: 2, stack: "Ruby on Rails"},
    {id: 3, stack: "CSS"},
  ],
},
{
  id: 4,
  image: pro4,
  title: 'ARoZac Care',
  description: 'a full-stack web application that can allow users to create an account, book an appointment with a doctor.',
  source: 'https://github.com/rolandm99/react-redux-capstone',
  demo: 'https://determined-aryabhata.netlify.app/',
  techno: [
    {id: 1, stack: "ReactJs"},
    {id: 2, stack: "RoR"},
    {id: 3, stack: "CSS"},
    {id: 4, stack: "Redux"}
  ],
},
{
  id: 5,
  image: pro5,
  title: 'WeatherApp',
  description: 'WeatherApp is a mobile web application that provides numeric data about weather in my country, DRC.',
  source: 'https://github.com/RolandM99/weather-App',
  demo: 'https://drcweather-app.herokuapp.com/',
  techno: [
    {id: 1, stack: "ReactJs"},
    {id: 2, stack: "Redux"},
    {id: 3, stack: "CSS"},
  ],
},
{
  id: 6,
  image: pro6,
  title: 'Math Magician',
  description: 'A website for all fans of mathematics that allows users to make simple calculations and read a random math-related quote',
  source: 'https://github.com/RolandM99/math-magicians',
  demo: 'https://math-magic.netlify.app/',
  techno: [
    {id: 1, stack: "React"},
    {id: 2, stack: "JavaScript"},
    {id: 3, stack: "CSS"},
  ],
}
]

export default function Portfolio() {
 return (
  <>
    <section id="project-page">
       <div className="intro-port">
         <h1 className="pro-title">My Portfolio<hr className="line2"></hr></h1>
         <p className="txt">Here are some of my projects:</p>
         <div className="card-container">
         {projects.map(({ id, image, title, description, source, demo, techno }) => {
           return (
            <div className="card-pro">
              <Card key={id}>
                <Card.Img variant="top" src={image} className = "pro-img" />
                <Card.Body>
                  <Card.Title value={{ className: "card-title" }}>{title}</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    {description}
                  </Card.Text>
                  <div>{techno.map((tec) => (
                    <span key={tec.id} className="span" >{tec.stack}</span>
                  ))}</div>
                  <div className="link-to">
                    <a href={source} className="link-out">
                      Source Code {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsGithub />
                      </IconContext.Provider>
                    </a>
                    <a href={demo} className="link-out">
                      Live Demo {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsBoxArrowUpRight />
                      </IconContext.Provider>
                    </a>
                  </div>
                </Card.Body>
              </Card>
          </div>
           )
         })}
       </div>
       </div>
     </section>
  </>
 );
}