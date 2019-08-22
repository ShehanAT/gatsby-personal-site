import React, {Component} from "react";
import logo from "../images/logo.svg";

export default class Footer extends Component{
    render(){
        return (
            <footer className="footer">
             <div className="footer__logo__container">
                    <img src={logo} alt="my logo" />
                </div>
                <div className="links__section">
                    <h2>Links</h2>
                     <ul className="footer-navbar-nav ">
                        <li className="footer-nav-item">
                        <a className="footer-nav-link" href="#about">About</a>
                        </li>
                        <li className="footer-nav-item">
                        <a className="footer-nav-link" href="#work">Work</a>
                        </li>
                        <li className="footer-nav-item">
                        <a className="footer-nav-link" href="#testimonials">Testimonials</a>
                        </li>
                        <li className="footer-nav-item">
                        <a className="footer-nav-link" href="#contact">Contact</a>
                        </li>
                     </ul>
                </div>
           
            </footer>
        );
    }







}