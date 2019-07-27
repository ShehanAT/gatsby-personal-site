import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import gatsbyImg from "../images/gatsby-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";


const About = ({ siteTitle}) => ( 
              <div className="about">
                <div className="card-container row">
                  <div>Hello, I'm Shehan. I started learning about web development in
                      2016 and ever since then I have fallen in love with it. I
                      Specialize in React.js, Node.js and Angular.js </div>
                  <div>. I am
                      currently in finishing my last year at the University of
                      Windsor Computer Science program and am very well versed in
                      computer science fundamentals. Over the last few years I have
                      completed the Front End Certification offered by FreeCodeCamp
                      and the FullStack Javascript Techdegree program offered by
                      Treehouse, both of which provided me with invaluable
                      experience in the field of web developement.</div>
                  <div>I am constantly
                      learning about new advances and technologies in web
                      developement and make numerous personal projects incorporating
                      newly learned skills/technologies in order to gain invaluable
                      hands-on experience, which I believe is the best way to learn.</div>
              </div>
          </div>    
);

export default About;