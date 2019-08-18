
import React, { Component } from "react"

export default class Navbar extends Component{
    render(){
      return (
        <nav className="navbar ">
        <div className="navbar-collapse">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      );
    }

}
