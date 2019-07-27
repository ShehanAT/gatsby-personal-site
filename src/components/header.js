import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  <header 
  className="header" 
  id="home"
  style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
  >
  {/* <nav id="nav-wrap" className="opaque">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
      Show navigation
    </a>
    <a className="mobile-btn" href="#" title="Hide navigation">
      Hide navigation
    </a>

    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#project">
          Projects
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#resume">
          Resume
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav> */}
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
  
  <div 
  className="banner row"
  style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
  >
    <div className="banner-text">
      <h1 className="responsive-headline">Hey, I'm Shehan</h1>
      <h3 className="responsive-headline-text">
        {/* span is a inline element, inline elements do not start on new lines, block elements start on new lines */}
        I'm a Windsor based <span> web developer </span> creating awesome
        and usefull web applications for others.{" "}
      </h3>
    </div>
  </div>

  <p className="scrolldown">
    <a className="smoothscroll" href="#about">
      <FontAwesomeIcon icon={faArrowCircleDown} />
    </a>
  </p>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
