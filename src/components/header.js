import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../images/profilePic.png";
const Header = ({ siteTitle }) => (
  <header 
  className="header" 
  id="home"
  style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
  >
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
     
    </ul>
  </div>
</nav>
  
  {/* <div 
  className="banner row"
  style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
  > */}
    <div className="header__container">
      <div className="card">
        <img src={profilePic} id="profilePic" alt="image of me"/>
      </div>
      <div className="card">
        <h2>Shehan Atuk</h2>
        <h3>Freelance Web Developer</h3>
      </div>
    </div>



</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
