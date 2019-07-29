import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Navbar = ({ }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
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