import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../images/profilePic.png";
const Header = ({ siteTitle }) => (
  
    <div className="header__container">
      <div className="card">
        <img src={profilePic} id="profilePic" alt="image of me"/>
      </div>
      <div className="card">
        <h2>Shehan Atuk</h2>
        <h3>Freelance Web Developer</h3>
      </div>
    </div>




)

export default Header
