
import React, { Component } from "react"

export default class Navbar extends Component{
    render(){
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
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
      );
    }

}
