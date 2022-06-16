import React from 'react';
import { Card } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import pro1 from '../assets/images/AuctionArt0.png';

export default function Portfolio() {
 return (
  <>
    <section id="project-page">
       <div className="intro-port">
         <h1 className="pro-title">My Portfolio<hr className="line2"></hr></h1>
         <p className="txt">Here are some of my projects:</p>
         <div className="card-container">
          <div className="card-pro">
              <Card>
                <Card.Img variant="top" src={pro1} className = "pro-img" />
                <Card.Body>
                  <Card.Title value={{ className: "card-title" }}>Card Title</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <span className="span">JavaScript</span>
                  <span className="span">HTML</span>
                  <span className="span">CSS</span>
                  <div className="link-to">
                    <a href="#" className="link-out">
                      Source Code {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsGithub />
                      </IconContext.Provider>
                    </a>
                    <a href="#" className="link-out">
                      Live Demo {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsBoxArrowUpRight />
                      </IconContext.Provider>
                    </a>
                  </div>
                </Card.Body>
              </Card>
          </div>
          <div className="card-pro">
              <Card>
                <Card.Img variant="top" src={pro1} className = "pro-img" />
                <Card.Body>
                  <Card.Title value={{ className: "card-title" }}>Card Title</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <span className="span">JavaScript</span>
                  <span className="span">HTML</span>
                  <span className="span">CSS</span>
                  <div className="link-to">
                    <a href="#" className="link-out">
                      Source Code {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsGithub />
                      </IconContext.Provider>
                    </a>
                    <a href="#" className="link-out">
                      Live Demo {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsBoxArrowUpRight />
                      </IconContext.Provider>
                    </a>
                  </div>
                </Card.Body>
              </Card>
          </div>
          <div className="card-pro">
              <Card>
                <Card.Img variant="top" src={pro1} className = "pro-img" />
                <Card.Body>
                  <Card.Title value={{ className: "card-title" }}>Card Title</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <span className="span">JavaScript</span>
                  <span className="span">HTML</span>
                  <span className="span">CSS</span>
                  <div className="link-to">
                    <a href="#" className="link-out">
                      Source Code {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsGithub />
                      </IconContext.Provider>
                    </a>
                    <a href="#" className="link-out">
                      Live Demo {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsBoxArrowUpRight />
                      </IconContext.Provider>
                    </a>
                  </div>
                </Card.Body>
              </Card>
          </div>
          <div className="card-pro">
              <Card>
                <Card.Img variant="top" src={pro1} className = "pro-img" />
                <Card.Body>
                  <Card.Title value={{ className: "card-title" }}>Card Title</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <span className="span">JavaScript</span>
                  <span className="span">HTML</span>
                  <span className="span">CSS</span>
                  <div className="link-to">
                    <a href="#" className="link-out">
                      Source Code {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsGithub />
                      </IconContext.Provider>
                    </a>
                    <a href="#" className="link-out">
                      Live Demo {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsBoxArrowUpRight />
                      </IconContext.Provider>
                    </a>
                  </div>
                </Card.Body>
              </Card>
          </div>
          <div className="card-pro">
              <Card>
                <Card.Img variant="top" src={pro1} className = "pro-img" />
                <Card.Body>
                  <Card.Title value={{ className: "card-title" }}>Card Title</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <span className="span">JavaScript</span>
                  <span className="span">HTML</span>
                  <span className="span">CSS</span>
                  <div className="link-to">
                    <a href="#" className="link-out">
                      Source Code {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsGithub />
                      </IconContext.Provider>
                    </a>
                    <a href="#" className="link-out">
                      Live Demo {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsBoxArrowUpRight />
                      </IconContext.Provider>
                    </a>
                  </div>
                </Card.Body>
              </Card>
          </div>
          <div className="card-pro">
              <Card>
                <Card.Img variant="top" src={pro1} className = "pro-img" />
                <Card.Body>
                  <Card.Title value={{ className: "card-title" }}>Card Title</Card.Title>
                  <Card.Text style={{ color: 'white' }}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <span className="span">JavaScript</span>
                  <span className="span">HTML</span>
                  <span className="span">CSS</span>
                  <div className="link-to">
                    <a href="#" className="link-out">
                      Source Code {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsGithub />
                      </IconContext.Provider>
                    </a>
                    <a href="#" className="link-out">
                      Live Demo {" "}
                      <IconContext.Provider value={{ className: "icon-link" }}>
                        <BsBoxArrowUpRight />
                      </IconContext.Provider>
                    </a>
                  </div>
                </Card.Body>
              </Card>
          </div>
       </div>
       </div>
     </section>
  </>
 );
}