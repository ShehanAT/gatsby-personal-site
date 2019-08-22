import React from "react";
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import logo from "../images/logo.svg";


const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "palmTreesBackground.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
         <BackgroundImage Tag="section"
                          className={className}
                          fluid={imageData}
                          backgroundColor={`#040e18`}
                          style={{
                            // Defaults are overwrite-able by setting one or each of the following:
                            height:"100vh",
                            backgroundPosition: '',
                            backgroundRepeat: '',
                          }}
         >
      
               <div className="logo__container">
                    <img src={logo} alt="my logo" id="logo"/>
                </div>
                <ul>
                  <li id="headerButton">
                    <a href="#work" >View My Work</a>
                  </li>
                </ul>
         
        </BackgroundImage>
      )
    }
    }
   />
  )
  
  const Header = styled(BackgroundSection)`
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
  `
  
  export default Header;