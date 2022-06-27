import React from 'react';
import { Card } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import pro1 from '../assets/images/AuctionArt0.png';

const projects = [{
  id: 1,
  image: pro1,
  title: 'First Title',
  description: 'text',
  source: 'https://github.com/rolandm99/react-redux-capstone',
  demo: 'https://determined-aryabhata.netlify.app/',
},
{
  id: 2,
  image: pro1,
  title: 'First Title',
  description: 'text',
  source: 'https://github.com/rolandm99/react-redux-capstone',
  demo: 'https://determined-aryabhata.netlify.app/',
},
{
  id: 3,
  image: pro1,
  title: 'First Title',
  description: 'text',
  source: 'https://github.com/rolandm99/react-redux-capstone',
  demo: 'https://determined-aryabhata.netlify.app/',
},
{
  id: 4,
  image: pro1,
  title: 'First Title',
  description: 'text',
  source: 'https://github.com/rolandm99/react-redux-capstone',
  demo: 'https://determined-aryabhata.netlify.app/',
},
{
  id: 5,
  image: pro1,
  title: 'First Title',
  description: 'text',
  source: 'https://github.com/rolandm99/react-redux-capstone',
  demo: 'https://determined-aryabhata.netlify.app/',
},
{
  id: 6,
  image: pro1,
  title: 'First Title',
  description: 'text',
  source: 'https://github.com/rolandm99/react-redux-capstone',
  demo: 'https://determined-aryabhata.netlify.app/',
}]

export default function Portfolio() {
 return (
  <>
    <section id="project-page">
       <div className="intro-port">
         <h1 className="pro-title">My Portfolio<hr className="line2"></hr></h1>
         <p className="txt">Here are some of my projects:</p>
         <div className="card-container">
         {projects.map(({ id, image, title, description, source, demo }) => {
           return (
            <div className="card-pro">
              <Card key={id}>
                <Card.Img variant="top" src={image} className = "pro-img" />
                <Card.Body>
                  <Card.Title value={{ className: "card-title" }}>{title}</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    {description}
                  </Card.Text>
                  <span className="span">JavaScript</span>
                  <span className="span">HTML</span>
                  <span className="span">CSS</span>
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