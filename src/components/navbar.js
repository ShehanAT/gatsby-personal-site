
import React, { Component } from "react"

export default class Navbar extends Component{
  hideNavLinks = () => {

  document.getElementById("nav-links").style.display = "none";
  document.getElementById("show-menu").checked = true;
  }
  showMobileNav = () => {
    if(document.getElementById("show-menu").checked === true){
      document.getElementById("nav-links").style.display = "block";
    }else{
      document.getElementById("nav-links").style.display = "none";
    }
  }
    render(){
      return (
        <nav className="navbar ">
        <div className="navbar-collapse desktop-navbar">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#about" >About</a>
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
        <div className="mobile-navbar" >
            <label htmlFor="show-menu" className="showMenu" onClick={this.showMobileNav.bind(this)}><div className="hamburgerIcon" ></div>
            </label>
            <input type="checkbox" id="show-menu" />
                <ul className="nav-links" id="nav-links">
                    <li className="nav-item">
                        <a href="#header" onClick={this.hideNavLinks.bind(this)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" onClick={this.hideNavLinks.bind(this)}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#work" onClick={this.hideNavLinks.bind(this)}>Work</a>
                    </li>
                    <li className="nav-item">
                        <a href="#testimonials" onClick={this.hideNavLinks.bind(this)}>Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={this.hideNavLinks.bind(this)}>Contact</a>
                    </li>
                </ul>
        </div>
      </nav>
      );
    }

}
