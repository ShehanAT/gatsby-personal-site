import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import homeIcon from "../images/html-coding.png";
const Navbar = ({ }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
    <a className="navbar-brand" href="#"><img src={homeIcon} alt="picture of html tag" id="homeIcon"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#project">Projects</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar 